(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $all = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* Motion: every animation below is skipped when the visitor has asked
     their device for reduced motion – they simply see the finished state. */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  // Add `cls` to each element the first time it scrolls into view
  function onFirstView(els, cls, threshold = 0.4) {
    if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach(el => el.classList.add(cls)); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add(cls); io.unobserve(e.target); } });
    }, { threshold });
    els.forEach(el => io.observe(el));
  }

  /* Evidence helpers – max 4 entries per KSB, strongest first */
  const MAX_EVIDENCE = 4;
  const evidenceFor = k => (k.evidence || []).slice(0, MAX_EVIDENCE);
  const projectById = id => PROJECTS.find(p => p.id === id);
  KSBS.forEach(k => {
    if ((k.evidence || []).length > MAX_EVIDENCE) {
      console.warn(`${k.code} has ${k.evidence.length} evidence entries – only the first ${MAX_EVIDENCE} are shown.`);
    }
  });

  /* Shared labels */
  const STATUS_LABEL = { "complete": "Complete", "in-progress": "In progress", "not-started": "Not started" };
  const statusLabel = s => STATUS_LABEL[s] || s;
  const CATEGORY_LABEL = { knowledge: "Knowledge", skill: "Skill", behaviour: "Behaviour" };
  const evidenceCount = n => `${n} piece${n === 1 ? "" : "s"} of evidence`;

  /* Status marker – filled circle = complete, half-filled = in progress, outline = not started */
  const marker = status => `<span class="marker is-${status}" aria-hidden="true"></span>`;

  /* ---------------- SITE / COVER ---------------- */
  document.title = `${SITE.name} – ${SITE.title}`;
  $("#topbarName").textContent = SITE.name;
  $("#coverName").textContent = SITE.name;
  const roles = [[SITE.title, SITE.org || SITE.client], [SITE.secondaryTitle, SITE.secondaryOrg]]
    .filter(([t]) => t)
    .map(([t, o]) => `<span>${t}${o ? `, ${o}` : ""}</span>`);
  $("#coverRoles").innerHTML = roles.join("");
  $("#coverHeadline").textContent = SITE.headline || SITE.brief;
  $("#footerName").textContent = SITE.name;
  $("#footerSub").textContent = SITE.headline || "";

  const footerLinks = $("#footerLinks");
  const linkDefs = [
    ["Email", SITE.email ? `mailto:${SITE.email}` : null],
    ["Phone", SITE.phone ? `tel:${SITE.phone.replace(/\s+/g, "")}` : null],
    ["LinkedIn", SITE.linkedin || null],
    ["CV (PDF)", SITE.cvPdf || null],
  ];
  linkDefs.forEach(([label, href]) => {
    if (!href) return;
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    if (href.startsWith("http") || href.endsWith(".pdf")) { a.target = "_blank"; a.rel = "noopener"; }
    footerLinks.appendChild(a);
  });

  /* ---------------- STATS ---------------- */
  const statStrip = $("#statStrip");
  HERO_STATS.forEach((s, i) => {
    const li = document.createElement("li");
    li.className = "stat";
    li.innerHTML = `<span class="stat-num">${s.value}</span><span class="stat-label">${s.label}</span>`;
    statStrip.appendChild(li);
    countUp($(".stat-num", li), s.value, 250 + i * 140);
  });

  // Ticks a stat like "£750k+" up from zero, keeping its prefix and suffix
  function countUp(el, text, delay) {
    const m = String(text).match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/);
    if (!m || reduceMotion) return;
    const [, pre, raw, post] = m;
    const target = parseFloat(raw.replace(/,/g, ""));
    const decimals = (raw.split(".")[1] || "").length;
    const fmt = n => pre + n.toLocaleString("en-GB", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + post;
    el.setAttribute("aria-label", text);
    el.textContent = fmt(0);
    const duration = 1300;
    setTimeout(() => {
      const start = performance.now();
      const tick = now => {
        const t = Math.min(1, (now - start) / duration);
        el.textContent = t < 1 ? fmt(Math.round(target * easeOut(t) * 10 ** decimals) / 10 ** decimals) : text;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
  }

  /* ---------------- ABOUT / INTRODUCTION ---------------- */
  const statementEl = $("#aboutStatement");
  if (ABOUT.statement) {
    const words = ABOUT.statement.trim().split(/\s+/);
    statementEl.setAttribute("aria-label", ABOUT.statement);
    statementEl.innerHTML = words.map(w => `<span class="sw" aria-hidden="true">${w}</span>`).join(" ");
    const spans = $all(".sw", statementEl);
    if (reduceMotion) {
      spans.forEach(sp => sp.classList.add("is-lit"));
    } else {
      // Words light up one by one as the statement scrolls up through the screen
      let queued = false;
      const update = () => {
        queued = false;
        const r = statementEl.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.45 + r.height * 0.5)));
        const lit = Math.round(progress * spans.length);
        spans.forEach((sp, i) => sp.classList.toggle("is-lit", i < lit));
      };
      const queue = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
      window.addEventListener("scroll", queue, { passive: true });
      window.addEventListener("resize", queue);
      update();
    }
  } else {
    statementEl.remove();
  }

  const aboutCopy = $("#aboutCopy");
  (ABOUT.paragraphs || []).forEach(p => {
    const block = document.createElement("div");
    block.className = "about-block";
    block.innerHTML = `
      <h3 class="about-block-heading">${p.heading}</h3>
      <p class="about-block-text">${p.text}</p>
    `;
    aboutCopy.appendChild(block);
  });

  const tiles = $("#interestTiles");
  if ((ABOUT.interests || []).length) {
    ABOUT.interests.forEach((name, i) => {
      const li = document.createElement("li");
      li.className = "interest-tile";
      li.style.setProperty("--i", i);
      li.textContent = name;
      tiles.appendChild(li);
    });
    onFirstView([tiles], "is-in", 0.5);
  } else {
    $("#aboutInterests").remove();
  }

  // A lake line draws under each section heading as it comes into view
  onFirstView($all(".section-head h2"), "is-drawn", 0.8);

  /* ---------------- KSB CIRCUIT (hero) ---------------- */
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

  function renderKsbs() {
    ksbGrid.innerHTML = "";
    let shown = 0;
    groupOrder.forEach(([cat, label]) => {
      if (activeCat !== "all" && activeCat !== cat) return;
      const all = KSBS.filter(k => k.category === cat);
      const items = all.filter(k => activeStatus === "all" || k.status === activeStatus);
      if (!items.length) return;
      shown += items.length;
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
        card.addEventListener("click", () => openModal(k));
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
  let modalStep = null;

  function openModal(k) {
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
        modalStep = dir => go(Math.min(items.length - 1, Math.max(0, current() + dir)));
        update();
      }
    }

    lastFocused = document.activeElement;
    modalBackdrop.classList.remove("is-closing");
    modalBackdrop.hidden = false;
    document.body.style.overflow = "hidden";
    $(".modal").scrollTop = 0;
    $("#modalClose").focus();
    document.addEventListener("keydown", onModalKeydown);
  }

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
    if (modalStep && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
      e.preventDefault();
      modalStep(e.key === "ArrowRight" ? 1 : -1);
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

  /* ---------------- PROJECTS ---------------- */
  const projectGrid = $("#projectGrid");
  PROJECTS.forEach(p => {
    const card = document.createElement("article");
    card.className = "project-card";
    const statusBadge = p.status && STATUS_LABEL[p.status]
      ? `<p class="project-status">${marker(p.status)}${statusLabel(p.status)}</p>` : "";
    const results = (p.results || []).filter(Boolean);
    const linkedKsbs = KSBS.filter(k => evidenceFor(k).some(e => e && e.project === p.id));
    card.innerHTML = `
      <div class="project-top">
        <div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-period">${p.period}${p.role ? `<br><span class="project-role">${p.role}</span>` : ""}</p>
        </div>
        ${statusBadge}
      </div>
      <p class="project-summary">${p.summary}</p>
      ${results.length ? `<div class="project-results"><h4 class="project-results-title">Results</h4><ul>${results.map(r => `<li>${r}</li>`).join("")}</ul></div>` : ""}
      <div class="tag-list project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      ${linkedKsbs.length ? `<div class="project-ksbs"><p class="project-ksbs-label">KSB evidence from this project</p><div class="project-ksb-list">${linkedKsbs.map(k => `<button type="button" class="project-ksb cat-${k.category}" data-ksb="${k.code}" aria-label="Open ${k.code}: ${k.title}">${marker(k.status)}${k.code}</button>`).join("")}</div></div>` : ""}
    `;
    card.querySelectorAll("[data-ksb]").forEach(btn => {
      btn.addEventListener("click", () => openModal(KSBS.find(k => k.code === btn.dataset.ksb)));
    });
    projectGrid.appendChild(card);
  });

  /* ---------------- CV ---------------- */
  $("#cvSummary").textContent = CV.summary;

  // Each role shows its first few points (put the strongest first in data.js);
  // the rest sit behind a "Show all" button.
  const CV_POINTS_SHOWN = 5;
  const expEl = $("#cvExperience");
  CV.experience.forEach((e, idx) => {
    const div = document.createElement("div");
    div.className = "cv-entry";
    const extra = e.points.length - CV_POINTS_SHOWN;
    const listId = `cvPoints${idx}`;
    div.innerHTML = `
      <p class="cv-role">${e.role}</p>
      <p class="cv-org">${e.org}</p>
      <p class="cv-period">${e.period}</p>
      <ul class="cv-points" id="${listId}">${e.points.map((pt, i) => `<li${i >= CV_POINTS_SHOWN ? " hidden" : ""}>${pt}</li>`).join("")}</ul>
      ${extra > 0 ? `<button type="button" class="cv-more" aria-expanded="false" aria-controls="${listId}">Show all ${e.points.length} points</button>` : ""}
    `;
    const more = $(".cv-more", div);
    if (more) {
      const ul = $("ul", div);
      const extras = $all("li", ul).slice(CV_POINTS_SHOWN);
      more.addEventListener("click", () => {
        const open = more.getAttribute("aria-expanded") !== "true";
        const from = ul.offsetHeight;
        extras.forEach(li => { li.hidden = false; });
        const fullHeight = ul.offsetHeight;
        extras.forEach(li => { li.hidden = !open; });
        const to = open ? fullHeight : ul.offsetHeight;
        more.setAttribute("aria-expanded", String(open));
        more.textContent = open ? "Show fewer" : `Show all ${e.points.length} points`;
        if (reduceMotion) return;
        // Ease the list open or closed rather than snapping
        if (!open) extras.forEach(li => { li.hidden = false; });
        ul.style.overflow = "hidden";
        const anim = ul.animate([{ height: `${from}px` }, { height: `${to}px` }], { duration: 340, easing: "cubic-bezier(.2,.7,.2,1)" });
        if (open) extras.forEach((li, i) => li.animate([{ opacity: 0, transform: "translateY(-4px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: 60 + i * 30, easing: "ease-out", fill: "backwards" }));
        anim.onfinish = () => {
          ul.style.overflow = "";
          if (!open) extras.forEach(li => { li.hidden = true; });
        };
      });
    }
    expEl.appendChild(div);
  });

  const eduEl = $("#cvEducation");
  CV.education.forEach(e => {
    const div = document.createElement("div");
    div.className = "cv-entry";
    div.innerHTML = `
      <p class="cv-role">${e.qualification}</p>
      <p class="cv-org">${e.org}</p>
      ${e.period ? `<p class="cv-period">${e.period}</p>` : ""}
      ${e.points && e.points.length ? `<ul class="cv-points">${e.points.map(pt => `<li>${pt}</li>`).join("")}</ul>` : ""}
    `;
    eduEl.appendChild(div);
  });

  [["#cvSkillsTechnical", CV.skills.technical], ["#cvSkillsSoft", CV.skills.soft]].forEach(([sel, list]) => {
    const el = $(sel);
    (list || []).forEach(s => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = s;
      el.appendChild(span);
    });
  });

  if (SITE.cvPdf) {
    $("#cvView").href = SITE.cvPdf;
    $("#cvDownload").href = SITE.cvPdf;
    $("#cvActions").hidden = false;
  }

  /* ---------------- NAV: mobile menu + current section ---------------- */
  const navToggle = $("#navToggle");
  const siteNav = $("#siteNav");
  const setMenu = open => {
    siteNav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  navToggle.addEventListener("click", () => setMenu(!siteNav.classList.contains("is-open")));
  $all(".nav-link, .nav-cta").forEach(link => link.addEventListener("click", () => setMenu(false)));

  // The highlight behind the current section glides between links
  const indicator = $("#navIndicator");
  function moveIndicator() {
    const active = $(".nav-link.is-active", siteNav);
    if (!indicator) return;
    if (!active) { indicator.classList.remove("is-shown"); return; }
    indicator.style.width = `${active.offsetWidth}px`;
    indicator.style.transform = `translateX(${active.offsetLeft}px)`;
    if (!indicator.classList.contains("is-shown")) {
      indicator.classList.add("no-slide");
      requestAnimationFrame(() => { indicator.classList.add("is-shown"); requestAnimationFrame(() => indicator.classList.remove("no-slide")); });
    }
  }
  window.addEventListener("resize", moveIndicator);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveIndicator);

  const sections = $all(".section, .cover").filter(s => s.id);
  const navLinks = $all(".nav-link");
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => {
          const on = l.dataset.section === entry.target.id;
          l.classList.toggle("is-active", on);
          if (on) l.setAttribute("aria-current", "location"); else l.removeAttribute("aria-current");
        });
        moveIndicator();
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(s => spy.observe(s));
})();
