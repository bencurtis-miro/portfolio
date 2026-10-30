/* ============================================================
   KSB EVIDENCE (University – ST0481 apprenticeship)
   Everything for the KSB section lives in this file, ksb-data.js
   and ksb.css, so it can be lifted out in one go.

   To hide it: set `showKsbEvidence: false` in SITE in data.js.
   To remove it for good, see "Removing the KSB section" in README.md.
   ============================================================ */
(function () {
  "use strict";

  const P = window.Portfolio;
  if (!P || !P.ksbOn) return;
  const { $, $all, reduceMotion, marker, statusLabel } = P;

  /* Evidence helpers – max 4 entries per KSB, strongest first */
  const MAX_EVIDENCE = 4;
  const evidenceFor = k => (k.evidence || []).slice(0, MAX_EVIDENCE);
  const projectById = id => PROJECTS.find(p => p.id === id);
  KSBS.forEach(k => {
    if ((k.evidence || []).length > MAX_EVIDENCE) {
      console.warn(`${k.code} has ${k.evidence.length} evidence entries – only the first ${MAX_EVIDENCE} are shown.`);
    }
  });

  const CATEGORY_LABEL = { knowledge: "Knowledge", skill: "Skill", behaviour: "Behaviour" };
  const evidenceCount = n => `${n} piece${n === 1 ? "" : "s"} of evidence`;

  /* ---------------- PROGRESS AT A GLANCE ---------------- */
  const counts = KSBS.reduce((acc, k) => { acc[k.status] = (acc[k.status] || 0) + 1; return acc; }, {});
  const summaryParts = ["complete", "in-progress", "not-started"]
    .filter(s => counts[s])
    .map(s => `${counts[s]} ${statusLabel(s).toLowerCase()}`);
  $("#circuitSummary").textContent = `${KSBS.length} KSBs: ${summaryParts.join(", ")}. Select any circle to see its evidence.`;

  const circuitGroups = $("#circuitGroups");
  const groupOrder = [["knowledge", "Knowledge"], ["skill", "Skills"], ["behaviour", "Behaviours"]];
  let stopIndex = 0;
  groupOrder.forEach(([cat, label]) => {
    const items = KSBS.filter(k => k.category === cat);
    if (!items.length) return;
    const group = document.createElement("div");
    group.className = `circuit-group cat-${cat}`;
    group.innerHTML = `<h4 class="circuit-group-title">${label}</h4><ol class="circuit-row"></ol>`;
    const row = $(".circuit-row", group);
    items.forEach(k => {
      const li = document.createElement("li");
      li.innerHTML = `<button type="button" class="circuit-stop" style="--i:${stopIndex++}" aria-label="${k.code}: ${k.title}. ${statusLabel(k.status)}">${marker(k.status)}<span class="circuit-code" aria-hidden="true">${k.code}</span></button>`;
      $("button", li).addEventListener("click", () => openModal(k));
      row.appendChild(li);
    });
    circuitGroups.appendChild(group);
  });
  // Fill the circuit in once on load (skipped when reduced motion is on)
  if (!reduceMotion && "IntersectionObserver" in window) {
    circuitGroups.classList.add("is-waiting");
    const fill = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        circuitGroups.classList.replace("is-waiting", "js-paint");
        fill.disconnect();
      }
    }, { threshold: 0.3 });
    fill.observe(circuitGroups);
  }

  /* ---------------- KSB GRID ---------------- */
  const ksbGrid = $("#ksbGrid");
  let activeCat = "all";
  let activeStatus = "all";

  // The KSBs the grid is currently showing, in order – the popup steps through these
  let visibleKsbs = [];

  function renderKsbs() {
    ksbGrid.innerHTML = "";
    visibleKsbs = [];
    let shown = 0;
    groupOrder.forEach(([cat, label]) => {
      if (activeCat !== "all" && activeCat !== cat) return;
      const all = KSBS.filter(k => k.category === cat);
      const items = all.filter(k => activeStatus === "all" || k.status === activeStatus);
      if (!items.length) return;
      shown += items.length;
      visibleKsbs.push(...items);
      const done = all.filter(k => k.status === "complete").length;
      const group = document.createElement("section");
      group.className = `ksb-group cat-${cat}`;
      group.setAttribute("aria-label", label);
      group.innerHTML = `
        <div class="ksb-group-head">
          <h3 class="ksb-group-title">${label}</h3>
          <p class="ksb-group-count">${done} of ${all.length} complete</p>
        </div>
        <div class="ksb-grid"></div>`;
      const grid = $(".ksb-grid", group);
      items.forEach(k => {
        const n = evidenceFor(k).length;
        const card = document.createElement("button");
        card.type = "button";
        card.className = `ksb-card cat-${k.category}`;
        card.innerHTML = `
          <span class="ksb-top">${marker(k.status)}<span class="ksb-code">${k.code}</span></span>
          <span class="ksb-title">${k.title}</span>
          <span class="ksb-meta">${statusLabel(k.status)}${n ? `, ${evidenceCount(n)}` : ""}</span>
        `;
        card.addEventListener("click", () => openModal(k, visibleKsbs));
        grid.appendChild(card);
      });
      ksbGrid.appendChild(group);
    });
    if (!shown) {
      ksbGrid.innerHTML = `<p class="ksb-empty">No KSBs match these filters. Try a different category or status.</p>`;
    }
  }

  function setFilter(attr, value) {
    $all(`[data-filter-${attr}]`).forEach(b => {
      const on = b.dataset[attr === "cat" ? "filterCat" : "filterStatus"] === value;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
  }
  $all("[data-filter-cat]").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCat = btn.dataset.filterCat;
      setFilter("cat", activeCat);
      renderKsbs();
    });
  });
  $all("[data-filter-status]").forEach(btn => {
    btn.addEventListener("click", () => {
      activeStatus = btn.dataset.filterStatus;
      setFilter("status", activeStatus);
      renderKsbs();
    });
  });

  renderKsbs();

  /* ---------------- MODAL ---------------- */
  const modalBackdrop = $("#modalBackdrop");
  const chevron = dir => `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="${dir < 0 ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}"/></svg>`;
  let lastFocused = null;
  let modalStep = null;      // steps the evidence carousel; returns false at either end
  // Everything in the standard's order: Knowledge, then Skills, then Behaviours
  const ALL_IN_ORDER = groupOrder.flatMap(([cat]) => KSBS.filter(k => k.category === cat));
  let modalList = ALL_IN_ORDER;
  let modalIndex = 0;

  // Open the popup on KSB `k`; previous/next step through `list`
  function openModal(k, list) {
    modalList = list && list.includes(k) ? list.slice() : ALL_IN_ORDER;
    modalIndex = modalList.indexOf(k);
    renderModal(k);
    lastFocused = document.activeElement;
    modalBackdrop.classList.remove("is-closing");
    modalBackdrop.hidden = false;
    document.body.style.overflow = "hidden";
    $(".modal").scrollTop = 0;
    $("#modalClose").focus();
    document.addEventListener("keydown", onModalKeydown);
  }

  // Move to the previous (-1) or next (1) KSB without closing the popup
  function stepKsb(dir) {
    const next = modalIndex + dir;
    if (next < 0 || next >= modalList.length) return;
    modalIndex = next;
    renderModal(modalList[modalIndex]);
    $(".modal").scrollTop = 0;
    if (!reduceMotion) {
      $("#modalBody").animate(
        [{ opacity: 0, transform: `translateX(${dir * 28}px)` }, { opacity: 1, transform: "none" }],
        { duration: 280, easing: "cubic-bezier(.2,.7,.2,1)" });
    }
  }

  const stepLabel = (k, dir) => dir < 0
    ? `${chevron(-1)}<span class="ksb-step-text"><span class="ksb-step-code">${k.code}</span><span class="ksb-step-title">${k.title}</span></span>`
    : `<span class="ksb-step-text"><span class="ksb-step-code">${k.code}</span><span class="ksb-step-title">${k.title}</span></span>${chevron(1)}`;

  function renderModal(k) {
    modalStep = null;
    $(".modal").className = `modal cat-${k.category}`;
    $("#modalCode").innerHTML = `<span class="modal-code-id">${k.code}</span><span class="modal-code-cat">${CATEGORY_LABEL[k.category] || k.category}</span>`;
    $("#modalTitle").textContent = k.title;
    $("#modalStatus").innerHTML = `${marker(k.status)}${statusLabel(k.status)}`;
    $("#modalDesc").textContent = k.description;

    const evEl = $("#modalEvidence");
    evEl.innerHTML = "";
    const items = evidenceFor(k);
    if (!items.length) {
      evEl.innerHTML = `<p class="modal-evidence-empty">Evidence for this one is still being gathered.</p>`;
    } else {
      const track = document.createElement("div");
      track.className = "ev-track";
      items.forEach((item, i) => {
        const slide = document.createElement("div");
        slide.className = "evidence-item";
        slide.setAttribute("role", "group");
        slide.setAttribute("aria-label", `Evidence ${i + 1} of ${items.length}`);
        if (typeof item === "string") {
          slide.innerHTML = `<p class="evidence-text">${item}</p>`;
        } else {
          const proj = item.project && projectById(item.project);
          const where = proj
            ? `<a href="#work" class="evidence-project">${proj.title}</a>`
            : item.source ? `<span class="evidence-source">${item.source}</span>` : "";
          const images = item.images || (item.image ? [{ src: item.image, caption: item.imageCaption }] : []);
          slide.innerHTML = `
            <p class="evidence-meta">${where}${item.date ? `<span class="evidence-date">${item.date}</span>` : ""}</p>
            ${item.text ? `<p class="evidence-text">${item.text}</p>` : ""}
            ${images.length ? `<div class="evidence-images${images.length > 1 ? " is-multi" : ""}">${images.map(im => `
              <figure class="evidence-figure">
                <a href="${im.src}" target="_blank" rel="noopener" class="evidence-image-link">
                  <img class="evidence-image" src="${im.src}" alt="${im.caption || k.title + " evidence"}" loading="lazy">
                </a>
                ${im.caption ? `<figcaption class="evidence-caption">${im.caption}</figcaption>` : ""}
              </figure>`).join("")}</div>` : ""}
          `;
          const pl = slide.querySelector(".evidence-project");
          if (pl) pl.addEventListener("click", closeModal);
        }
        track.appendChild(slide);
      });
      evEl.appendChild(track);

      if (items.length > 1) {
        const nav = document.createElement("div");
        nav.className = "ev-nav";
        nav.innerHTML = `
          <button type="button" class="ev-btn" data-dir="-1" aria-label="Previous evidence">${chevron(-1)}</button>
          <span class="ev-count" aria-live="polite"></span>
          <div class="ev-dots">${items.map((_, i) => `<button type="button" class="ev-dot" data-i="${i}" aria-label="Show evidence ${i + 1}"></button>`).join("")}</div>
          <button type="button" class="ev-btn" data-dir="1" aria-label="Next evidence">${chevron(1)}</button>
        `;
        evEl.prepend(nav);
        const go = i => track.scrollTo({ left: track.clientWidth * i, behavior: "smooth" });
        const current = () => Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
        const update = () => {
          const c = current();
          $(".ev-count", nav).textContent = `${c + 1} of ${items.length}`;
          $all(".ev-dot", nav).forEach((d, i) => d.classList.toggle("is-active", i === c));
          $all(".ev-btn", nav)[0].disabled = c === 0;
          $all(".ev-btn", nav)[1].disabled = c === items.length - 1;
        };
        $all(".ev-btn", nav).forEach(b => b.addEventListener("click", () => go(Math.min(items.length - 1, Math.max(0, current() + Number(b.dataset.dir))))));
        $all(".ev-dot", nav).forEach(b => b.addEventListener("click", () => go(Number(b.dataset.i))));
        track.addEventListener("scroll", update, { passive: true });
        modalStep = dir => {
          const target = current() + dir;
          if (target < 0 || target >= items.length) return false;
          go(target);
          return true;
        };
        update();
      }
    }

    // Previous / next KSB
    const prev = modalList[modalIndex - 1], next = modalList[modalIndex + 1];
    const prevBtn = $("#ksbPrev"), nextBtn = $("#ksbNext");
    prevBtn.hidden = !prev; nextBtn.hidden = !next;
    if (prev) { prevBtn.innerHTML = stepLabel(prev, -1); prevBtn.setAttribute("aria-label", `Previous: ${prev.code}, ${prev.title}`); prevBtn.className = `ksb-step ksb-step-prev cat-${prev.category}`; }
    if (next) { nextBtn.innerHTML = stepLabel(next, 1); nextBtn.setAttribute("aria-label", `Next: ${next.code}, ${next.title}`); nextBtn.className = `ksb-step ksb-step-next cat-${next.category}`; }
    $("#ksbPos").textContent = `${modalIndex + 1} of ${modalList.length}`;
    $("#modalKsbNav").hidden = modalList.length < 2;
  }

  $("#ksbPrev").addEventListener("click", () => stepKsb(-1));
  $("#ksbNext").addEventListener("click", () => stepKsb(1));

  // Swipe left or right on the popup to change KSB (swipes inside the evidence
  // carousel move the carousel first, until it reaches its end)
  (function swipe() {
    const modal = $(".modal");
    let x0 = 0, y0 = 0, track = null, startLeft = 0;
    modal.addEventListener("touchstart", e => {
      const t = e.touches[0]; x0 = t.clientX; y0 = t.clientY;
      track = e.target.closest(".ev-track"); startLeft = track ? track.scrollLeft : 0;
    }, { passive: true });
    modal.addEventListener("touchend", e => {
      const t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0;
      if (Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
      if (track) {
        const max = track.scrollWidth - track.clientWidth - 2;
        const atStart = startLeft <= 2, atEnd = startLeft >= max;
        if ((dx < 0 && !atEnd) || (dx > 0 && !atStart)) return;
      }
      stepKsb(dx < 0 ? 1 : -1);
    }, { passive: true });
  })();

  function closeModal() {
    if (modalBackdrop.hidden) return;
    if (reduceMotion) {
      modalBackdrop.hidden = true;
    } else {
      // Ease out, then hide
      modalBackdrop.classList.add("is-closing");
      setTimeout(() => { modalBackdrop.hidden = true; modalBackdrop.classList.remove("is-closing"); }, 180);
    }
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onModalKeydown);
    if (lastFocused) lastFocused.focus();
  }

  function onModalKeydown(e) {
    if (e.key === "Escape") closeModal();
    // Arrow keys move through the evidence first, then on to the next or previous KSB
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const dir = e.key === "ArrowRight" ? 1 : -1;
      if (!(modalStep && modalStep(dir))) stepKsb(dir);
    }
    // Keep keyboard focus inside the popup while it's open
    if (e.key === "Tab") {
      const focusable = $all("button:not([disabled]), a[href]", $(".modal"));
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  $("#modalClose").addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", e => { if (e.target === modalBackdrop) closeModal(); });

  /* ---------------- KSB PILLS ON PROJECT CARDS ---------------- */
  $all(".project-card[data-project]").forEach(card => {
    const linked = KSBS.filter(k => evidenceFor(k).some(e => e && e.project === card.dataset.project));
    if (!linked.length) return;
    const box = document.createElement("div");
    box.className = "project-ksbs";
    box.innerHTML = `<p class="project-ksbs-label">KSB evidence from this project</p><div class="project-ksb-list">${linked.map((k, j) => `<button type="button" class="project-ksb cat-${k.category}" style="--j:${j}" aria-label="Open ${k.code}: ${k.title}">${marker(k.status)}${k.code}</button>`).join("")}</div>`;
    $all(".project-ksb", box).forEach((btn, j) => btn.addEventListener("click", () => openModal(linked[j])));
    card.appendChild(box);
  });
})();
