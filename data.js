/* ============================================================
   PORTFOLIO CONTENT
   ------------------------------------------------------------
   This is the only file you should need to edit day-to-day.
   Everything here feeds the site — nothing below this file
   needs to change unless you want to alter the design.

   STATUS values for KSBs: "not-started" | "in-progress" | "complete"
   ============================================================ */

const SITE = {
  name: "Your Name",
  role: "Digital Marketing Apprentice",
  institution: "University of Portsmouth",
  standard: "Digital Marketer (Integrated Degree), Level 6 — ST0481",
  tagline:
    "Building and evidencing a digital marketing practice, one campaign and one KSB at a time.",
  location: "Portsmouth, UK",
  email: "you@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
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
  // KNOWLEDGE
  { code: "K1", category: "knowledge", title: "The disruptive digital environment", description: "Understanding the strategic implications of constantly shifting digital technology on marketing.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K2", category: "knowledge", title: "Organic vs paid visibility", description: "How natural/organic and paid marketing combine to increase a website's visibility and promotion.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K3", category: "knowledge", title: "Brand theory in practice", description: "Leading marketing theorists and practitioners relevant to brand equity, awareness and strategic brand management.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K4", category: "knowledge", title: "Professional bodies & emerging trends", description: "How professional bodies track emerging technologies, trends and themes in digital marketing.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K5", category: "knowledge", title: "Customer insight & retention", description: "Customer insight, strategic relationships, acquisition and retention/loyalty, including customer experience.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K6", category: "knowledge", title: "B2B relationships via social", description: "Fostering B2B marketing relationships through social media, including price and popularity-based launches.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K7", category: "knowledge", title: "Paid, owned & earned media", description: "The types of online and offline paid, owned and earned media, and how they work together.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K8", category: "knowledge", title: "Regulation, data protection & ethics", description: "Digital marketing regulatory requirements, data protection, compliance and ethics — national and international.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K9", category: "knowledge", title: "International & multichannel marketing", description: "The digital marketing environment for international and multichannel marketing, agency-side and client-side.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K10", category: "knowledge", title: "Stakeholder & commercial awareness", description: "Stakeholder and customer requirements, commercial awareness and business improvement relevant to campaigns.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K11", category: "knowledge", title: "Digital & interface design", description: "Digital graphic design, interface design, and authoring.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K12", category: "knowledge", title: "User experience", description: "User experience principles, and how to maximise engagement.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K13", category: "knowledge", title: "Funnels, segmentation & attribution", description: "Segmentation, targeting, sales funnels, path to purchase, and customer attribution.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "K14", category: "knowledge", title: "E-commerce fundamentals", description: "E-commerce, and what makes product descriptions, imagery and site layout convert well.", status: "not-started", linkedProject: null, evidence: [] },

  // SKILLS
  { code: "S1", category: "skill", title: "Apply marketing theory", description: "Developing and critically applying marketing concepts, principles and theories across digital marketing topics.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S2", category: "skill", title: "Apply the 4 Ps", description: "Applying product, price, place and promotion considerations to a business or marketing campaign.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S3", category: "skill", title: "Write for audience & channel", description: "Writing and creating content for different audiences and channels, with clear CTAs and user journeys.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S4", category: "skill", title: "Apply content marketing", description: "Promoting content effectively through the right media channels, CRM systems and communication platforms.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S5", category: "skill", title: "Select research methods", description: "Choosing appropriate research methodologies, platforms and technologies to inform strategy.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S6", category: "skill", title: "Manage & report on projects", description: "Managing, planning, specifying, leading and reporting on digital marketing projects.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S7", category: "skill", title: "Optimise channels & content", description: "Managing and optimising key channels and content within a digital marketing plan.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S8", category: "skill", title: "Apply e-commerce strategy", description: "Managing interfaces and supply networks by applying appropriate e-commerce strategies and models.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S9", category: "skill", title: "Apply the marketing mix", description: "Applying a marketing/digital marketing mix to meet customer expectations.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S10", category: "skill", title: "Analyse campaign performance", description: "Observing, recording and drawing conclusions from statistical analysis of campaign performance and ROI.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S11", category: "skill", title: "Engage via email & social", description: "Engaging communities through email marketing and social media to encourage positive engagement.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S12", category: "skill", title: "Apply data-led analysis", description: "Applying the appropriate tools for a data-led approach to marketing information, spotting what matters for insight.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S13", category: "skill", title: "Contribute to strategy", description: "Contributing to business, planning and marketing strategies, and responding quickly to opportunities.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S14", category: "skill", title: "Read business intelligence", description: "Identifying and understanding internal and external business intelligence that may affect operations.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "S15", category: "skill", title: "Brief stakeholders", description: "Interpreting, communicating and briefing internal or external stakeholders on digital business requirements.", status: "not-started", linkedProject: null, evidence: [] },

  // BEHAVIOURS
  { code: "B1", category: "behaviour", title: "Communication", description: "Communicating and actively listening at all levels.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "B2", category: "behaviour", title: "Resilience & teamwork", description: "Working under pressure and unsupervised, and interacting effectively within teams.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "B3", category: "behaviour", title: "Inclusion & impact awareness", description: "Considering the impact of work on others, especially around culture, diversity and equality.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "B4", category: "behaviour", title: "Quality & deadlines", description: "Demonstrating business discipline and compliance, with attention to detail and the ability to meet deadlines.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "B5", category: "behaviour", title: "Integrity & data security", description: "Showing integrity and respect for confidentiality and data security, at work and beyond.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "B6", category: "behaviour", title: "CPD & enthusiasm", description: "Being enthusiastic, flexible, and committed to continuing professional development and lifelong learning.", status: "not-started", linkedProject: null, evidence: [] },
  { code: "B7", category: "behaviour", title: "Structured problem solving", description: "Applying logical thinking and a creative, structured approach to complex problems.", status: "not-started", linkedProject: null, evidence: [] },
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
