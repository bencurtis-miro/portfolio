(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $all = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------------- SITE / COVER ---------------- */
  document.title = `${SITE.name} – ${SITE.title}`;
  $("#coverName").textContent = SITE.name;
  $("#coverRole").textContent = `${SITE.title} · ${SITE.location}`;
  $("#briefInstitution").textContent = SITE.client;
  $("#briefStandard").textContent = SITE.brief;
  $("#briefTagline").textContent = SITE.currentFocus;
  $("#footerName").textContent = SITE.name;
  if (SITE.location) $("#footerLocation").textContent = SITE.location;

  const footerLinks = $("#footerLinks");
  const linkDefs = [
    ["Email", SITE.email ? `mailto:${SITE.email}` : null],
    ["Phone", SITE.phone ? `tel:${SITE.phone.replace(/\s+/g, "")}` : null],
    ["LinkedIn", SITE.linkedin || null],
  ];
  linkDefs.forEach(([label, href]) => {
    if (!href) return;
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    if (href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
    footerLinks.appendChild(a);
  });

  /* ---------------- ABOUT / INTRODUCTION ---------------- */
  const aboutPhoto = $("#aboutPhoto");
  if (ABOUT.photo) {
    aboutPhoto.innerHTML = `<img src="${ABOUT.photo}" alt="${SITE.name}">`;
  } else {
    const initials = SITE.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
    aboutPhoto.innerHTML = `<span class="about-photo-initials">${initials}</span>`;
  }

  const aboutCopy = $("#aboutCopy");
  (ABOUT.paragraphs || []).forEach(p => {
    const block = document.createElement("div");
    block.className = "about-block";
    block.innerHTML = `
      <p class="about-block-heading">${p.heading}</p>
      <p class="about-block-text">${p.text}</p>
    `;
    aboutCopy.appendChild(block);
  });

  /* ---------------- STAT STRIP ---------------- */
  const stats = [
    [HERO_STATS[0].value, HERO_STATS[0].label],
    [PROJECTS.length, "Projects logged"],
    [HERO_STATS[1].value, HERO_STATS[1].label],
    [HERO_STATS[2].value, HERO_STATS[2].label],
  ];
  const statStrip = $("#statStrip");
  stats.forEach(([num, label]) => {
    const el = document.createElement("div");
    el.className = "stat";
    el.innerHTML = `<span class="stat-num">${num}</span><span class="stat-label">${label}</span>`;
    statStrip.appendChild(el);
  });

  /* ---------------- HERO SNAPSHOT PANEL ---------------- */
  $("#panelRoleTitle").textContent = SITE.title;
  $("#panelRoleOrg").textContent = SITE.client;
  $("#panelRole2Title").textContent = SITE.secondaryTitle;
  $("#panelRole2Org").textContent = SITE.secondaryOrg;

  const panelSkills = $("#panelSkills");
  (CV.skills.technical || []).slice(0, 5).forEach(s => {
    const short = s.split(" (")[0]; // drop the parenthetical detail for a tighter tag
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = short;
    panelSkills.appendChild(span);
  });
  $("#panelFoot").textContent = "Full role history & CV below.";

  /* ---------------- KSB GRID ---------------- */
  const ksbGrid = $("#ksbGrid");
  let activeCat = "all";
  let activeStatus = "all";

  function statusLabel(s) {
    return { "complete": "Complete", "in-progress": "In progress", "not-started": "Not started" }[s] || s;
  }

  function renderKsbs() {
    ksbGrid.innerHTML = "";
    const filtered = KSBS.filter(k =>
      (activeCat === "all" || k.category === activeCat) &&
      (activeStatus === "all" || k.status === activeStatus)
    );
    if (!filtered.length) {
      ksbGrid.innerHTML = `<p style="font-family:var(--font-mono); font-size:13px; color:var(--slate);">No KSBs match this filter.</p>`;
      return;
    }
    filtered.forEach(k => {
      const card = document.createElement("button");
      card.className = "ksb-card";
      card.innerHTML = `
        <div class="ksb-top">
          <span class="ksb-code ${k.category}">${k.code}</span>
        </div>
        <span class="ksb-title">${k.title}</span>
        <span class="ksb-status-label"><span class="status-dot ${k.status}"></span>${statusLabel(k.status)}</span>
      `;
      card.addEventListener("click", () => openModal(k));
      ksbGrid.appendChild(card);
    });
  }

  $all("[data-filter-cat]").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCat = btn.dataset.filterCat;
      $all("[data-filter-cat]").forEach(b => b.classList.toggle("is-active", b === btn));
      renderKsbs();
    });
  });
  $all("[data-filter-status]").forEach(btn => {
    btn.addEventListener("click", () => {
      activeStatus = btn.dataset.filterStatus;
      $all("[data-filter-status]").forEach(b => b.classList.toggle("is-active", b === btn));
      renderKsbs();
    });
  });

  renderKsbs();

  /* ---------------- MODAL ---------------- */
  const modalBackdrop = $("#modalBackdrop");
  let lastFocused = null;

  function openModal(k) {
    $("#modalCode").textContent = `${k.code} · ${k.category.charAt(0).toUpperCase() + k.category.slice(1)}`;
    $("#modalTitle").textContent = k.title;
    $("#modalStatus").innerHTML = `<span class="status-dot ${k.status}" style="margin-right:6px;"></span>${statusLabel(k.status)}`;
    $("#modalDesc").textContent = k.description;

    const evEl = $("#modalEvidence");
    evEl.innerHTML = "";
    if (k.evidence && k.evidence.length) {
      const ul = document.createElement("ul");
      ul.style.paddingLeft = "18px";
      k.evidence.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.style.marginBottom = "6px";
        li.style.fontSize = "14px";
        ul.appendChild(li);
      });
      evEl.appendChild(ul);
    } else {
      evEl.innerHTML = `<p class="modal-evidence-empty">No evidence logged yet – add entries to this KSB's "evidence" array in data.js.</p>`;
    }

    lastFocused = document.activeElement;
    modalBackdrop.hidden = false;
    $("#modalClose").focus();
    document.addEventListener("keydown", onModalKeydown);
  }

  function closeModal() {
    modalBackdrop.hidden = true;
    document.removeEventListener("keydown", onModalKeydown);
    if (lastFocused) lastFocused.focus();
  }

  function onModalKeydown(e) {
    if (e.key === "Escape") closeModal();
  }

  $("#modalClose").addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", e => { if (e.target === modalBackdrop) closeModal(); });

  /* ---------------- PROJECTS ---------------- */
  const projectGrid = $("#projectGrid");
  PROJECTS.forEach(p => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <p class="project-period">${p.period}${p.role ? ` · <span class="project-role">${p.role}</span>` : ""}</p>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-summary">${p.summary}</p>
      <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    `;
    projectGrid.appendChild(card);
  });

  /* Carousel controls */
  const projPrev = $("#projPrev");
  const projNext = $("#projNext");
  const scrollStep = () => (projectGrid.querySelector(".project-card")?.offsetWidth || 340) + 22;

  function updateCarouselButtons() {
    const maxScroll = projectGrid.scrollWidth - projectGrid.clientWidth - 2;
    projPrev.disabled = projectGrid.scrollLeft <= 0;
    projNext.disabled = projectGrid.scrollLeft >= maxScroll || maxScroll <= 0;
  }

  projPrev.addEventListener("click", () => {
    projectGrid.scrollBy({ left: -scrollStep(), behavior: "smooth" });
  });
  projNext.addEventListener("click", () => {
    projectGrid.scrollBy({ left: scrollStep(), behavior: "smooth" });
  });
  projectGrid.addEventListener("scroll", updateCarouselButtons);
  window.addEventListener("resize", updateCarouselButtons);
  updateCarouselButtons();

  /* ---------------- CV ---------------- */
  $("#cvSummary").textContent = CV.summary;

  const expEl = $("#cvExperience");
  CV.experience.forEach(e => {
    const div = document.createElement("div");
    div.className = "cv-entry";
    div.innerHTML = `
      <p class="cv-role">${e.role}</p>
      <p class="cv-org">${e.org}</p>
      <p class="cv-period">${e.period}</p>
      <ul class="cv-points">${e.points.map(pt => `<li>${pt}</li>`).join("")}</ul>
    `;
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

  const technicalEl = $("#cvSkillsTechnical");
  (CV.skills.technical || []).forEach(s => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = s;
    technicalEl.appendChild(span);
  });

  const softEl = $("#cvSkillsSoft");
  (CV.skills.soft || []).forEach(s => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = s;
    softEl.appendChild(span);
  });

  if (SITE.cvPdf) {
    const dl = $("#cvDownload");
    dl.href = SITE.cvPdf;
    dl.hidden = false;
  }

  /* ---------------- NAV: mobile toggle + scrollspy ---------------- */
  const railToggle = $("#railToggle");
  const railNav = $("#railNav") || $(".rail-nav");
  railToggle.addEventListener("click", () => {
    const open = railNav.classList.toggle("is-open");
    railToggle.setAttribute("aria-expanded", String(open));
  });
  $all(".rail-link").forEach(link => {
    link.addEventListener("click", () => railNav.classList.remove("is-open"));
  });

  const sections = $all(".section, .cover").filter(s => s.id);
  const railLinks = $all(".rail-link");
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        railLinks.forEach(l => l.classList.toggle("is-active", l.dataset.section === entry.target.id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(s => spy.observe(s));
})();
