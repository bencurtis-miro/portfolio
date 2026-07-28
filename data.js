/* ============================================================
   PORTFOLIO CONTENT
   ------------------------------------------------------------
   This is the only file you should need to edit day-to-day.
   Everything here feeds the site — nothing below this file
   needs to change unless you want to alter the design.

   STATUS values for KSBs: "not-started" | "in-progress" | "complete"
   ============================================================ */

const SITE = {
  name: "Ben Curtis",
  role: "Digital Marketing Apprentice",
  institution: "University of Portsmouth",
  standard: "Digital Marketer (Integrated Degree), Level 6 — ST0481",
  tagline:
    "Building and evidencing a digital marketing practice, one campaign and one KSB at a time.",
  location: "Portsmouth, UK",
  email: "up2304084@myport.ac.uk",
  linkedin: "www.linkedin.com/in/bentcurtismarketing",
  cvPdf: "", // put a filename here (e.g. "cv.pdf") if you add a downloadable CV to the folder
};

/* ------------------------------------------------------------
   KSBs — pre-filled with the official ST0481 standard wording,
   paraphrased into plain first-person prompts. Replace the
   `evidence` array entries as you complete work, and update
   `status` as you go. Add real project links via `linkedProject`
   (matching a PROJECTS id below) to connect evidence to work.
   ------------------------------------------------------------ */

const KSBS = [
  // SKILLS — listed first: this is where the real evidence sits
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

  // BEHAVIOURS — part of the standard, so kept for completeness, but
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
   should list codes from KSBS above — this is what links your
   evidence together across the site.
   ------------------------------------------------------------ */

const PROJECTS = [
  {
    id: "project-1",
    title: "Example: Q3 Email Re-engagement Campaign",
    period: "Jul 2026",
    summary:
      "Replace this with a one-paragraph summary of a real project: the objective, your role, and the outcome.",
    tags: ["Email Marketing", "Segmentation", "Analytics"],
    ksbs: ["K5", "S11", "S12", "B4"],
    link: "",
  },
  {
    id: "project-2",
    title: "Example: Organic Social Content Pillar",
    period: "Jun 2026",
    summary:
      "Replace this with a real project — what channel, what content system, what result.",
    tags: ["Content", "Social Media", "Brand"],
    ksbs: ["K3", "S3", "S4"],
    link: "",
  },
];

/* ------------------------------------------------------------
   CV
   ------------------------------------------------------------ */

const CV = {
  summary:
    "A short professional summary — who you are, what you focus on, and what you're aiming at next.",
  experience: [
    {
      role: "Digital Marketing Apprentice",
      org: "Your Employer",
      period: "2024 — Present",
      points: [
        "Replace with a real, specific responsibility or achievement.",
        "Use numbers where you can (reach, CTR, conversion, budget managed).",
      ],
    },
  ],
  education: [
    {
      qualification: "BA (Hons) Digital Marketing — Degree Apprenticeship, Level 6",
      org: "University of Portsmouth",
      period: "2024 — Expected 2027/28",
    },
  ],
  skills: [
    "SEO", "PPC", "Email Marketing", "Social Media", "Content Strategy",
    "Google Analytics", "CRM", "Campaign Reporting",
  ],
};
