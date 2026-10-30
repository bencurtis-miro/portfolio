/* ============================================================
   PORTFOLIO CONTENT
   ------------------------------------------------------------
   This is the only file you should need to edit day-to-day.
   Everything here feeds the site – nothing below this file
   needs to change unless you want to alter the design.

   STATUS values for KSBs: "not-started" | "in-progress" | "complete"
   ============================================================ */

const SITE = {
  name: "Ben Curtis",
  title: "Digital Marketing Executive",
  location: "United Kingdom", // consolidated from a specific county for a public-facing site
  client: "Digital Marketing Executive", // feeds the "Current Position" field in the hero
  org: "OutsideClinic", // employer, shown under your title in the hero's "Currently" card
  brief:
    "Digital Marketing Executive with experience leading multi-channel acquisition, CRM and lifecycle marketing strategy within a £40m business.", // feeds "Overview" – your personal statement
  currentFocus:
    "Scaling acquisition and lifecycle marketing at OutsideClinic, while building Mirõ MKT alongside it.", // feeds "Objective" – what you're actually doing right now
  headline:
    "Multi-channel acquisition, CRM and lifecycle marketing for a £40m business.", // one line under your name in the hero – keep it short
  secondaryTitle: "Co-Founder",
  secondaryOrg: "Mirõ MKT",
  email: "curtis_btc@hotmail.com",
  phone: "", // removed from the public site; leave empty to hide the Phone link
  linkedin: "https://www.linkedin.com/in/bentcurtismarketing",
  cvPdf: "cv/Ben-Curtis-CV.pdf", // web copy of your CV (phone number removed). Replace the file to update it; set to "" to hide the CV buttons
  // Get in touch form (contact.html). Leave empty and the form opens the
  // visitor's email app with their message filled in, addressed to `email`.
  // To receive submissions directly instead, create a free form at a service
  // such as formspree.io and paste its endpoint here, e.g.
  // "https://formspree.io/f/abcdwxyz".
  contactForm: "",

  // University KSB evidence section. Set to false to hide it everywhere
  // (its nav link, the section and the KSB pills on project cards).
  // The evidence itself lives in ksb-data.js.
  showKsbEvidence: true,
};

/* ------------------------------------------------------------
   HERO STATS
   ------------------------------------------------------------
   Four values shown in the hero stat strip, in this order. Each
   one should be a number you could back up if an assessor or
   interviewer asked about it – they're all drawn from the CV below.
   ------------------------------------------------------------ */

const HERO_STATS = [
  { value: "3+", label: "Years in industry" },
  { value: "£750k+", label: "Monthly revenue managed" }, // ~£400k Direct Mail + ~£350k PPC (Google & Bing) + ~£20k Paid Social (Meta) ≈ £770k (see CV)
  { value: "5", label: "Acquisition channels managed" }, // Direct Mail, Paid Social, PPC, SEO, CRM
  { value: "1", label: "Agency co\u2011founded" }, // Mirõ MKT. \u2011 = non-breaking hyphen, so "co-founded" never splits across lines
];

/* ------------------------------------------------------------
   ABOUT / INTRODUCTION
   ------------------------------------------------------------
   First-draft copy, grounded in what's on your CV – but this is
   the one section on the site that should sound like you, not
   like a template. Treat every paragraph below as a starting
   point to rewrite in your own words, not final copy.

   The site deliberately has no profile photo.

   `statement`: the large opening line. Its words light up one by
   one as a visitor scrolls past it, so keep it to one or two
   sentences. `interests`: shown as tiles under "Outside of work".
   ------------------------------------------------------------ */

const ABOUT = {
  statement:
    "The more I understood how a brain is actually wired, the more I could see how to apply business knowledge properly.",
  paragraphs: [
    {
      heading: "Who I am",
      text: "I'm Ben – co-founder of Mirõ MKT, a brand and data marketing agency, and a Digital Marketing Executive at OutsideClinic. I've been in the industry for three-plus years now and I'm nearing the end of an undergraduate degree in Digital Marketing. Along the way I've been fortunate to work across most corners of the discipline – direct acquisition, paid media, organic content, project management and account management.",
    },
    {
      heading: "Why marketing",
      text: "Marketing was never really in question for me. I studied Business and Psychology at A-Level and got hooked on the overlap between the two – the more I understood how a brain is actually wired, the more I could see how to apply that business knowledge properly.",
    },
  ],
  interests: ["Football", "Bouldering", "Powerlifting", "Film", "Music"],
};

/* ------------------------------------------------------------
   PROJECTS / DAY-TO-DAY WORK
   Add one entry per project or ongoing piece of work. `ksbs`
   should list codes from KSBS above – this is what links your
   evidence together across the site.
   ------------------------------------------------------------ */

const PROJECTS = [
  {
    id: "hubspot-implementation",
    status: "complete", // "complete" or "in-progress" – shown with a status circle on the card
    title: "HubSpot CRM Implementation",
    period: "Sep 2024 – Feb 2025",
    role: "Project Manager",
    summary:
      "Led the end-to-end implementation of HubSpot CRM at OutsideClinic – building live assets, dynamic customer journeys and sales pipelines from scratch, while keeping stakeholders from employee level through to SLT and suppliers informed throughout. Delivered on time, with staff training built in to ensure a smooth handover into day-to-day use.",
    tags: ["CRM Implementation", "Lifecycle Automation", "Stakeholder Management"],
    // Headline outcomes, shown on the card. Swap the placeholder for a real
    // figure (rough is fine, e.g. "~30% more webform conversions"). Add more
    // lines by adding more strings, or leave the list empty to hide the box.
    results: ["[Place result here]"],
    link: "",
  },
  {
    id: "webform-relaunch",
    status: "complete", // "complete" or "in-progress" – shown with a status circle on the card
    title: "Webform Relaunch",
    period: "Dec 2025 – Feb 2026",
    role: "Project Lead",
    summary:
      "Led the redesign and relaunch of the company webform, working alongside an external agency and internal IT to rebuild it from the ground up. Used market-relevant insight and data to inform the new design before implementing it live on the website.",
    tags: ["UX & Conversion", "Landing Pages", "Agency Management"],
    // Headline outcomes, shown on the card. Swap the placeholder for a real
    // figure (rough is fine, e.g. "~30% more webform conversions"). Add more
    // lines by adding more strings, or leave the list empty to hide the box.
    results: ["[Place result here]"],
    link: "",
  },
  {
    id: "website-revamp",
    status: "in-progress", // "complete" or "in-progress" – shown with a status circle on the card
    title: "Website Revamp",
    period: "2026 – ongoing, launching Oct 2026",
    role: "Project Lead",
    summary:
      "Leading OutsideClinic's full website rebuild alongside a partner design agency – creating and proofing concepts and content, aligning internal stakeholders to secure approvals, and setting and enforcing the delivery timeline to keep the project on track for its October 2026 launch.",
    tags: ["Website Design", "Agency Management", "Stakeholder Alignment"],
    // Headline outcomes, shown on the card. Swap the placeholder for a real
    // figure (rough is fine, e.g. "~30% more webform conversions"). Add more
    // lines by adding more strings, or leave the list empty to hide the box.
    results: ["[Place result here]"],
    link: "",
  },
  {
    id: "brand-refresh",
    status: "complete", // "complete" or "in-progress" – shown with a status circle on the card
    title: "Brand Refresh",
    period: "Mar 2026 – Oct 2026",
    role: "Co-Lead (Client-Side)",
    summary:
      "Co-led the client side of a full brand identity relaunch for OutsideClinic alongside an external design agency partner. Managed sign-off across internal stakeholders on assets and copy, flagged and requested changes where needed, and held the line on deadlines once designs were locked.",
    tags: ["Brand Identity", "Agency Management", "Stakeholder Alignment"],
    // Headline outcomes, shown on the card. Swap the placeholder for a real
    // figure (rough is fine, e.g. "~30% more webform conversions"). Add more
    // lines by adding more strings, or leave the list empty to hide the box.
    results: ["[Place result here]"],
    link: "",
  },
];

/* ------------------------------------------------------------
   CV
   Entries with `overview: true` show in the short CV. Everything
   else stays behind the "Show full CV" button.
   ------------------------------------------------------------ */

const CV = {
  // Shown as two columns side by side. Each string is one column, so
  // split it where a sentence ends.
  summary: [
    "Digital Marketing Executive with experience leading multi-channel acquisition, CRM and lifecycle marketing strategy within a £40m business, with accountability for a six-figure monthly media budget. Led the end-to-end implementation of HubSpot, developing automated customer journeys across email, SMS and print to improve engagement, retention and customer lifetime value.",
    "Experienced in managing high-performing acquisition channels including Direct Mail campaigns generating circa £400k in monthly revenue, alongside PPC campaigns (Google Ads and Microsoft Ads) generating circa £350k and Paid Social (Meta) generating circa £20k in monthly revenue, focused on data-driven optimisation to improve ROI, CVR and overall campaign performance.",
  ],

  skills: {
    technical: [
      "CRM & Lifecycle Automation (HubSpot, MBA Pulse, DotDigital)",
      "Multi-channel Acquisition (PPC, Paid Social, Direct Mail, SEO)",
      "Analytics & Reporting (GA4, Power BI, Excel, Infinity)",
      "Paid Media (Google Ads, Microsoft Ads/Bing)",
      "Technical SEO & Organic Growth Strategy",
      "Landing Page Development & CMS (Craft CMS, Unbounce)",
      "Project Management (ClickUp, Monday.com)",
      "Content Production & Video Editing (Adobe Express, Premiere Pro)",
    ],
    soft: [
      "Communication & Collaboration",
      "Initiative & Autonomy",
      "Organisation & Time Management",
      "Creativity & Adaptability",
      "Customer-Centric Mindset",
    ],
  },

  experience: [
    {
      role: "Digital Marketing Executive",
      overview: true,
      org: "OutsideClinic",
      period: "Sep 2024 – Current",
      points: [
        "Oversaw multi-channel acquisition strategy and a six-figure monthly media budget across Direct Mail, Paid Social, PPC, SEO and CRM, leading Direct Mail campaigns generating ~£400k in monthly revenue using CPA, CVR and ROI analysis.",
        "Led the end-to-end implementation of HubSpot, designing bespoke pipelines, funnels and automated workflows across email, SMS and print to improve repeat purchase rate and customer lifetime value.",
        "Managed Google Ads and Microsoft (Bing) campaigns generating ~£350k in monthly revenue, optimising targeting, spend and bidding to reduce CPA and maximise ROI.",
        "Managed Paid Social campaigns on Meta generating ~£20k in monthly revenue.",
        "Used GA4, Power BI, SEMrush, Google Search Console and Infinity to analyse cross-channel performance and report on key business KPIs.",
        "Managed supplier and partner relationships (Sagacity, StudioCertain, MBA Group, Paragon), aligning delivery with commercial objectives.",
        "Delivered segmented, A/B-tested email campaigns across acquisition and retention audiences via HubSpot, DotDigital and MBA Pulse.",
        "Managed technical SEO and keyword-led content strategy, delivering sustained month-on-month and year-on-year organic growth.",
        "Built and optimised high-converting landing pages using Unbounce and Craft CMS through structured testing and UX optimisation.",
        "Managed multi-channel social presence across Facebook, Instagram, LinkedIn, TikTok and YouTube to support brand awareness.",
      ],
    },
    {
      role: "Data Administrator / Scheduling Assistant",
      org: "OutsideClinic",
      period: "Sep 2021 – Sep 2024",
      points: [
        "Managed UK-wide clinician schedules, balancing geography, availability and patient needs.",
        "Handled 100+ inbound calls per day, delivering clinical support and updating customer records.",
        "Logged and processed inbound mail, ensuring data was entered correctly and GDPR-compliant.",
        "Created performance reports and dashboards in Excel to track call volumes, customer trends and team output.",
        "Worked with management to launch employee engagement initiatives, including a reward-based point system.",
      ],
    },
    {
      role: "Football Coaching",
      org: "Volunteering",
      period: "Oct 2018 – Sep 2024",
      points: [
        "Planned and delivered tailored training for young players, including 1-to-1 sessions.",
        "Led mixed-age teams, promoting teamwork and aligning different personalities toward shared goals.",
      ],
    },
  ],

  education: [
    {
      qualification: "BA (Hons) Digital Marketing – Degree Apprenticeship, Level 6",
      overview: true,
      org: "University of Portsmouth",
      period: "Expected completion 2027/28",
      points: [
        "Modules including Marketing Essentials, Digital Content Creation, Consumer Insights, Business Management, User Experience and Search Marketing.",
      ],
    },
    {
      qualification: "3 A-Levels",
      org: "Royal Wootton Bassett Sixth Form",
      period: "",
      points: [
        "AQA Business A-Level – B",
        "BTEC Level 4 in Travel and Tourism – B",
        "AQA Psychology – D",
      ],
    },
    {
      qualification: "GCSEs – all subjects passed (Grade 5 or above)",
      org: "Royal Wootton Bassett Academy",
      period: "",
      points: [
        "Pearson BTEC Level 2 in Engineering – Distinction 2* (A*)",
        "Business – 7 · Combined Science – 6/6 · Geography – 6",
        "Mathematics – 6 · English Language – 6 · English Literature – 5 · History – 5",
      ],
    },
  ],
};
