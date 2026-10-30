(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);

  /* ---------------- Names, links and menu ---------------- */
  $("#topbarName").textContent = SITE.name;

  // KSB evidence (University) is optional – hide its nav link when switched off
  if (SITE.showKsbEvidence === false) document.querySelectorAll("[data-ksb]").forEach(el => el.remove());

  // Same entrance as the home page: the title rises letter by letter, then the intro follows
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const title = $("#contactTitle");
  const titleText = title.textContent.trim();
  title.setAttribute("aria-label", titleText);
  let k = 0;
  title.innerHTML = titleText.split(" ").map(word =>
    `<span class="cn-word" aria-hidden="true">${[...word].map(ch => `<span class="cn-letter" style="--k:${k++}">${ch}</span>`).join("")}</span>`
  ).join(" ");
  if (!reduceMotion) $(".cover").classList.add("is-entering");
  $("#footerName").textContent = SITE.name;
  $("#footerSub").textContent = SITE.headline || "";

  const links = [
    ["Email", SITE.email, SITE.email ? `mailto:${SITE.email}` : null],
    ["LinkedIn", "View my profile", SITE.linkedin || null],
    ["CV", "Download the PDF", SITE.cvPdf || null],
  ].filter(([, , href]) => href);

  const contactLinks = $("#contactLinks");
  const footerLinks = $("#footerLinks");
  links.forEach(([label, text, href]) => {
    const external = href.startsWith("http") || href.endsWith(".pdf");
    const attrs = external ? ' target="_blank" rel="noopener"' : "";
    const li = document.createElement("li");
    li.innerHTML = `<span>${label}</span><a href="${href}"${attrs}>${text}</a>`;
    contactLinks.appendChild(li);
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label === "CV" ? "CV (PDF)" : label;
    if (external) { a.target = "_blank"; a.rel = "noopener"; }
    footerLinks.appendChild(a);
  });

  const navToggle = $("#navToggle");
  const siteNav = $("#siteNav");
  navToggle.addEventListener("click", () => {
    const open = !siteNav.classList.contains("is-open");
    siteNav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  /* ---------------- The form ----------------
     With SITE.contactForm set (e.g. a Formspree endpoint), messages are
     sent straight to that service. Without it, the form opens the
     visitor's email app with everything filled in. */
  const form = $("#contactForm");
  const email = $("#email");
  const emailError = $("#emailError");
  const status = $("#formStatus");
  const sendBtn = $("#sendBtn");
  const direct = Boolean(SITE.contactForm);

  $("#formNote").textContent = direct
    ? "Your message comes straight to my inbox."
    : "This opens your email app with your message ready to send.";

  const validEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  function showError(msg) {
    emailError.textContent = msg;
    emailError.hidden = false;
    email.setAttribute("aria-invalid", "true");
    email.focus();
  }
  function clearError() {
    emailError.hidden = true;
    email.removeAttribute("aria-invalid");
  }
  email.addEventListener("input", clearError);

  function showStatus(heading, body, isError) {
    status.innerHTML = `<h2>${heading}</h2><p>${body}</p>`;
    status.classList.toggle("is-error", Boolean(isError));
    status.hidden = false;
    status.focus();
  }

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const value = email.value.trim();
    if (!value) return showError("Enter your email address so I can reply.");
    if (!validEmail(value)) return showError("That email address doesn't look right. Check it and try again.");

    const data = new FormData(form);
    const topic = data.get("topic") || "";
    const name = (data.get("name") || "").trim();
    const message = (data.get("message") || "").trim();

    if (!direct) {
      const subject = `Portfolio enquiry${topic ? `: ${topic}` : ""}`;
      const body = [
        message || "Hi Ben, I'd like to get in touch.",
        "",
        name ? `Name: ${name}` : "",
        `Reply to: ${value}`,
      ].filter((line, i) => line || i === 1).join("\n");
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      showStatus("Your email app should now be open",
        `Your message is ready to send from there. If nothing opened, email me directly at <a href="mailto:${SITE.email}">${SITE.email}</a>.`);
      return;
    }

    sendBtn.disabled = true;
    sendBtn.textContent = "Sending…";
    try {
      data.set("_subject", `Portfolio enquiry${topic ? `: ${topic}` : ""}`);
      const res = await fetch(SITE.contactForm, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      form.hidden = true;
      showStatus("Message sent", "Thanks for getting in touch. I'll reply to the email address you gave.");
    } catch (err) {
      showStatus("Your message didn't send",
        `Something went wrong on the way. Try again, or email me directly at <a href="mailto:${SITE.email}">${SITE.email}</a>.`, true);
    } finally {
      sendBtn.disabled = false;
      sendBtn.textContent = "Send message";
    }
  });
})();
