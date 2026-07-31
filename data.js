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
  client: "OutsideClinic", // feeds the "Position" field in the hero
  brief:
    "Digital Marketing Executive with experience leading multi-channel acquisition, CRM and lifecycle marketing strategy within a £40m business.", // feeds "Overview" – your personal statement
  currentFocus:
    "Scaling acquisition and lifecycle marketing at OutsideClinic, while building Mirõ MKT alongside it.", // feeds "Current Focus" – what you're actually doing right now
  secondaryTitle: "Co-Founder",
  secondaryOrg: "Mirõ MKT",
  email: "curtis_btc@hotmail.com",
  phone: "07504 552093",
  linkedin: "https://www.linkedin.com/in/bentcurtismarketing",
  cvPdf: "", // put a filename here (e.g. "cv.pdf") if you add a downloadable CV to the folder
};

/* ------------------------------------------------------------
   HERO STATS
   ------------------------------------------------------------
   Four values shown in the hero stat strip. "Projects logged"
   stays dynamic (pulled from PROJECTS below) – the other three
   are yours to edit directly. NOTE: the "hours of film analysed"
   figure is a placeholder from your brief – swap in a number
   you'd actually stand behind if asked about it. Your own brand
   voice guide says the joke should land because it's true.
   ------------------------------------------------------------ */

const HERO_STATS = [
  { value: "3+", label: "Years in industry" },
  { value: "2", label: "Marketing ventures" },
  { value: "1,500+", label: "Hours of film analysed" },
];

/* ------------------------------------------------------------
   ABOUT / INTRODUCTION
   ------------------------------------------------------------
   First-draft copy, grounded in what's on your CV – but this is
   the one section on the site that should sound like you, not
   like a template. Treat every paragraph below as a starting
   point to rewrite in your own words, not final copy.

   `photo`: put a filename here (e.g. "profile.jpg") once you've
   added an image to the folder. Until then, an initials avatar
   displays automatically.
   ------------------------------------------------------------ */

const ABOUT = {
  photo: "profile.jpg",
  paragraphs: [
    {
      heading: "Who I am",
      text: "I'm Ben - co-founder of Mirõ MKT, a brand and data marketing agency, and a Digital Marketing Executive at OutsideClinic. I've been in the industry for three-plus years now and I'm nearing the end of an undergraduate degree in Digital Marketing. Along the way I've been fortunate to work across most corners of the discipline - direct acquisition, paid media, organic content, project management and account management.",
    },
    {
      heading: "Why marketing",
      text: "Marketing was never really in question for me. I studied Business and Psychology at A-Level and got hooked on the overlap between the two - the more I understood how a brain is actually wired, the more I could see how to apply that business knowledge properly.",
    },
    {
      heading: "Outside of work",
      text: "Outside the day job I'm a committed fitness enthusiast - bouldering, football and powerlifting all feature regularly. I'm also into film and music, with a habit of picking things apart properly rather than just watching or listening. Wes Anderson is up there as an idol.",
    },
  ],
};

/* ------------------------------------------------------------
   KSBs – pre-filled with the official ST0481 standard wording,
   paraphrased into plain first-person prompts. Replace the
   `evidence` array entries as you complete work, and update
   `status` as you go. Add real project links via `linkedProject`
   (matching a PROJECTS id below) to connect evidence to work.
   ------------------------------------------------------------ */

const KSBS = [
  // SKILLS – listed first: this is where the real evidence sits
  { code: "S1", category: "skill", title: "Apply marketing theory", description: "Develop and critically apply the concepts, principles and theories of marketing relevant to the interdisciplinary topics of digital marketing.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S2", category: "skill", title: "Apply the 4 Ps", description: "Apply the 4 marketing principles (product, price, place, promotion) and considerations of the business / marketing campaign.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S3", category: "skill", title: "Write for audience & channel", description: "Write and create content for the different audiences, online channels and create clear \u201cCall to Actions\u201d and user journeys.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S4", category: "skill", title: "Apply content marketing", description: "Demonstrate how to promote and apply content marketing effectively through the appropriate media channels, relationship management systems and communication platforms to ensure brand and cultural awareness are maintained throughout marketing strategies.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S5", category: "skill", title: "Select research methods", description: "Select a variety of appropriate research methodologies, platforms and technologies to synthesise information and apply to the organisation's digital marketing strategies, drivers and customer behaviours.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S6", category: "skill", title: "Manage & report on projects", description: "Manage, plan, specify, lead and report on digital marketing projects.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S7", category: "skill", title: "Optimise channels & content", description: "Manage and optimise key channels and content within a digital marketing plan.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S8", category: "skill", title: "Apply e-commerce strategy", description: "Manage interfaces and the supply network of the organisation and customer by applying the appropriate E-commerce strategies and models available and whenever appropriate taking global engagements into account.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S9", category: "skill", title: "Apply the marketing mix", description: "Apply a marketing mix / digital marketing mix to meet customer expectations.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S10", category: "skill", title: "Analyse campaign performance", description: "Accurately observe, record and draw conclusions from all types statistical analysis of campaign performance, recognising inherent uncertainties and limitations with financial and budgetary requirements to demonstrate Return on Investment (ROI).", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S11", category: "skill", title: "Engage via email & social", description: "Engage communities through Email Marketing and Social Media to stimulate and encourage communication through positive discussion and engagement.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S12", category: "skill", title: "Apply data-led analysis", description: "Apply the appropriate tools for a data-led approach to analyse marketing information and platforms, data and social media and recognise what is actually important for insights and optimisation to provide solutions for marketing decisions.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S13", category: "skill", title: "Contribute to strategy", description: "Contribute to business, planning and marketing strategies to recognise and respond quickly to opportunities and customer requirements whilst embracing change.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S14", category: "skill", title: "Read business intelligence", description: "Identify, recognise and understand internal and external business intelligence and factors that may impact future operations.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S15", category: "skill", title: "Brief stakeholders", description: "Interpret, communicate and brief internal or external stakeholders on digital business requirements.", status: "not-started", linkedProject: null, evidence: [] },

  // KNOWLEDGE
  { code: "K1", category: "knowledge", title: "The disruptive digital environment", description: "The strategic implications of the disruptive digital environment.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K2", category: "knowledge", title: "Organic vs paid visibility", description: "Natural/organic and paid marketing to increase the visibility and promotion of websites.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K3", category: "knowledge", title: "Brand theory in practice", description: "The leading marketing theorists and practitioners when managing and implementing brand equity, brand awareness and strategic brand management.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K4", category: "knowledge", title: "Professional bodies & emerging trends", description: "Professional bodies and their insights into emerging technologies, trends and themes within the digital marketing environment.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K5", category: "knowledge", title: "Customer insight & retention", description: "Customer insight, strategic relationships, acquisition and focus of customers, taking into account the customer experience and retention/loyalty.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K6", category: "knowledge", title: "B2B relationships via social", description: "How to foster business-to-business (B2B) marketing relationships through social media to launch products based on price and popularity.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K7", category: "knowledge", title: "Paid, owned & earned media", description: "The types of online and offline paid, owned and earned media, and how this works together.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K8", category: "knowledge", title: "Regulation, data protection & ethics", description: "Digital marketing regulatory requirements, data protection, compliance and ethics, both national and international.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K9", category: "knowledge", title: "International & multichannel marketing", description: "The Digital Marketing environment for International marketing and multichannel marketing, for agencies as well as client.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K10", category: "knowledge", title: "Stakeholder & commercial awareness", description: "Stakeholder and customer requirements, commercial awareness and business improvement processes that are relevant to campaign management.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K11", category: "knowledge", title: "Digital & interface design", description: "Digital graphic design, interface design, and authoring.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K12", category: "knowledge", title: "User experience", description: "The user experience, and how to maximise engagement.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K13", category: "knowledge", title: "Funnels, segmentation & attribution", description: "Segmentation, targeting and application of sales funnel, path to purchase, and customer attribution.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K14", category: "knowledge", title: "E-commerce fundamentals", description: "E-commerce and the importance of product descriptions, images, site layout and what makes a good online shopping experience.", status: "not-started", linkedProject: null, evidence: [] },

  // BEHAVIOURS – part of the standard, so kept for completeness, but
  // deliberately not the focus of this portfolio (see filter default in script.js)
  { code: "B1", category: "behaviour", title: "Communication", description: "Ability to communicate and actively listen at all levels.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "B2", category: "behaviour", title: "Resilience & teamwork", description: "Ability to work under pressure and unsupervised, and interact effectively within teams.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "B3", category: "behaviour", title: "Inclusion & impact awareness", description: "Consider the impact of work on others, especially where related to culture, diversity and equality.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "B4", category: "behaviour", title: "Quality & deadlines", description: "Demonstrate business disciplines and compliance with procedures and principles to ensure work is of high quality and fit for purpose, with high attention to detail and the ability to work to deadlines.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "B5", category: "behaviour", title: "Integrity & data security", description: "Show integrity and respect for confidentiality and data security in work and personal situations.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "B6", category: "behaviour", title: "CPD & enthusiasm", description: "Be enthusiastic and have a thorough and flexible approach to work and to personal development through CPD and life-long learning.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "B7", category: "behaviour", title: "Structured problem solving", description: "Logical thinking and a creative approach to problem solving to systematically analyse and apply structured techniques to complex systems and situations.", status: "not-started", linkedProject: null, evidence: [] },
];

/* ------------------------------------------------------------
   PROJECTS / DAY-TO-DAY WORK
   Add one entry per project or ongoing piece of work. `ksbs`
   should list codes from KSBS above – this is what links your
   evidence together across the site.
   ------------------------------------------------------------ */

const PROJECTS = [
  {
    id: "hubspot-implementation",
    title: "HubSpot CRM Implementation",
    period: "Sep 2024 – Feb 2025",
    role: "Project Manager",
    summary:
      "Led the end-to-end implementation of HubSpot CRM at OutsideClinic – building live assets, dynamic customer journeys and sales pipelines from scratch, while keeping stakeholders from employee level through to SLT and suppliers informed throughout. Delivered on time, with staff training built in to ensure a smooth handover into day-to-day use.",
    tags: ["CRM Implementation", "Lifecycle Automation", "Stakeholder Management"],
    link: "",
  },
  {
    id: "webform-relaunch",
    title: "Webform Relaunch",
    period: "Dec 2025 – Feb 2026",
    role: "Project Lead",
    summary:
      "Led the redesign and relaunch of the company webform, working alongside an external agency and internal IT to rebuild it from the ground up. Used market-relevant insight and data to inform the new design before implementing it live on the website.",
    tags: ["UX & Conversion", "Landing Pages", "Agency Management"],
    link: "",
  },
  {
    id: "website-revamp",
    title: "Website Revamp",
    period: "2026 – ongoing, launching Oct 2026",
    role: "Project Lead",
    summary:
      "Leading OutsideClinic's full website rebuild alongside a partner design agency – creating and proofing concepts and content, aligning internal stakeholders to secure approvals, and setting and enforcing the delivery timeline to keep the project on track for its October 2026 launch.",
    tags: ["Website Design", "Agency Management", "Stakeholder Alignment"],
    link: "",
  },
  {
    id: "brand-refresh",
    title: "Brand Refresh",
    period: "Mar 2026 – Oct 2026",
    role: "Co-Lead (Client-Side)",
    summary:
      "Co-led the client side of a full brand identity relaunch for OutsideClinic alongside an external design agency partner. Managed sign-off across internal stakeholders on assets and copy, flagged and requested changes where needed, and held the line on deadlines once designs were locked.",
    tags: ["Brand Identity", "Agency Management", "Stakeholder Alignment"],
    link: "",
  },
];

/* ------------------------------------------------------------
   CV
   ------------------------------------------------------------ */

const CV = {
  summary:
    "Digital Marketing Executive with experience leading multi-channel acquisition, CRM and lifecycle marketing strategy within a £40m business. Led the end-to-end implementation of HubSpot, developing automated customer journeys across email, SMS and print to improve engagement, retention and customer lifetime value. Experienced in managing high-performing acquisition channels including Direct Mail campaigns generating circa £400k in monthly revenue, alongside PPC and Paid Social campaigns with monthly revenues of circa £350k, focused on data-driven optimisation to improve ROI, CVR and overall campaign performance.",

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
      org: "OutsideClinic",
      period: "Sep 2024 – Current",
      points: [
        "Oversaw multi-channel acquisition strategy across Direct Mail, Paid Social, PPC, SEO and CRM, leading Direct Mail campaigns generating ~£400k in monthly revenue using CPA, CVR and ROI analysis.",
        "Led the end-to-end implementation of HubSpot, designing bespoke pipelines, funnels and automated workflows across email, SMS and print to improve repeat purchase rate and customer lifetime value.",
        "Managed Google Ads and Microsoft (Bing) campaigns generating ~£350k in monthly revenue, optimising targeting, spend and bidding to reduce CPA and maximise ROI.",
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
