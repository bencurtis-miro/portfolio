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

  /* Shared labels */
  const STATUS_LABEL = { "complete": "Complete", "in-progress": "In progress", "not-started": "Not started" };
  const statusLabel = s => STATUS_LABEL[s] || s;

  /* Status marker – filled circle = complete, half-filled = in progress, outline = not started */
  const marker = status => `<span class="marker is-${status}" aria-hidden="true"></span>`;

  /* KSB evidence (University) – lives in ksb.js, ksb-data.js and ksb.css.
     Set `showKsbEvidence: false` in data.js to hide it everywhere. */
  const ksbOn = SITE.showKsbEvidence !== false && typeof KSBS !== "undefined";
  if (!ksbOn) $all("[data-ksb]").forEach(el => el.remove());

  // Shared with ksb.js
  window.Portfolio = { $, $all, reduceMotion, onFirstView, marker, statusLabel, STATUS_LABEL, ksbOn };

  /* ---------------- SITE / COVER ---------------- */
  document.title = `${SITE.name} – ${SITE.title}`;
  $("#topbarName").textContent = SITE.name;
  // The name rises in letter by letter; screen readers get it whole
  const coverName = $("#coverName");
  coverName.setAttribute("aria-label", SITE.name);
  let letterIndex = 0;
  coverName.innerHTML = SITE.name.split(" ").map(word =>
    `<span class="cn-word" aria-hidden="true">${[...word].map(ch => `<span class="cn-letter" style="--k:${letterIndex++}">${ch}</span>`).join("")}</span>`
  ).join(" ");
  if (!reduceMotion) document.querySelector(".cover").classList.add("is-entering");
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
    countUp($(".stat-num", li), s.value, 900 + i * 140);
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

  /* ---------------- PROJECTS ---------------- */
  const projectGrid = $("#projectGrid");
  PROJECTS.forEach(p => {
    const card = document.createElement("article");
    card.className = "project-card";
    const statusBadge = p.status && STATUS_LABEL[p.status]
      ? `<p class="project-status">${marker(p.status)}${statusLabel(p.status)}</p>` : "";
    const results = (p.results || []).filter(Boolean);
    card.dataset.project = p.id;
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
    `;
    card.style.setProperty("--i", projectGrid.children.length);
    projectGrid.appendChild(card);
  });
  // Cards rise in as they reach the screen, then their results follow
  onFirstView($all(".project-card", projectGrid), "is-in", 0.2);

  /* ---------------- CV ---------------- */
  // Summary: one column per string in data.js (a plain string still works)
  const cvSummaryParts = Array.isArray(CV.summary) ? CV.summary : [CV.summary];
  $("#cvSummary").innerHTML = cvSummaryParts.filter(Boolean).map(t => `<p>${t}</p>`).join("");

  // Short CV: only entries marked `overview: true` show until "Show full CV"
  const hasOverview = [...CV.experience, ...CV.education].some(e => e.overview);
  const extraClass = e => (hasOverview && !e.overview ? " cv-extra" : "");

  // Each role shows its first few points (put the strongest first in data.js);
  // the rest sit behind a "Show all" button.
  const CV_POINTS_SHOWN = 5;
  const expEl = $("#cvExperience");
  CV.experience.forEach((e, idx) => {
    const div = document.createElement("div");
    div.className = "cv-entry" + extraClass(e);
    div.hidden = Boolean(extraClass(e));
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
    div.className = "cv-entry" + extraClass(e);
    div.hidden = Boolean(extraClass(e));
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

  const cvExtras = $all(".cv-extra");
  if (cvExtras.length) {
    const toggle = $("#cvFullToggle");
    const roles = CV.experience.filter(e => !e.overview).length;
    const quals = CV.education.filter(e => !e.overview).length;
    const plural = (n, w) => `${n} more ${w}${n === 1 ? "" : "s"}`;
    const note = [roles && plural(roles, "role"), quals && plural(quals, "qualification")].filter(Boolean).join(" and ");
    $("#cvFullNote").textContent = `Includes ${note}.`;
    $("#cvFullToggleWrap").hidden = false;
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Show shorter CV" : "Show full CV";
      $("#cvFullNote").hidden = open;
      if (open) {
        cvExtras.forEach((el, i) => {
          el.hidden = false;
          if (!reduceMotion) el.animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }], { duration: 380, delay: i * 60, easing: "cubic-bezier(.2,.7,.2,1)", fill: "backwards" });
        });
      } else {
        const hide = () => {
          cvExtras.forEach(el => { el.hidden = true; });
          $("#cv").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
        };
        if (reduceMotion) return hide();
        const fades = cvExtras.map(el => el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 180, easing: "ease-in", fill: "forwards" }));
        fades[fades.length - 1].onfinish = () => { hide(); fades.forEach(f => f.cancel()); };
      }
    });
  }

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
