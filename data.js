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
  secondaryTitle: "Co-Founder",
  secondaryOrg: "Mirõ MKT",
  email: "curtis_btc@hotmail.com",
  phone: "", // removed from the public site; leave empty to hide the Phone link
  linkedin: "https://www.linkedin.com/in/bentcurtismarketing",
  cvPdf: "cv/Ben-Curtis-CV.pdf", // web copy of your CV (phone number removed). Replace the file to update it; set to "" to hide the CV buttons
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

   `photo`: put a filename here (e.g. "profile.jpg") once you've
   added an image to the folder. Until then, an initials avatar
   displays automatically.
   ------------------------------------------------------------ */

const ABOUT = {
  photo: "profile.jpg",
  paragraphs: [
    {
      heading: "Who I am",
      text: "I'm Ben – co-founder of Mirõ MKT, a brand and data marketing agency, and a Digital Marketing Executive at OutsideClinic. I've been in the industry for three-plus years now and I'm nearing the end of an undergraduate degree in Digital Marketing. Along the way I've been fortunate to work across most corners of the discipline – direct acquisition, paid media, organic content, project management and account management.",
    },
    {
      heading: "Why marketing",
      text: "Marketing was never really in question for me. I studied Business and Psychology at A-Level and got hooked on the overlap between the two – the more I understood how a brain is actually wired, the more I could see how to apply that business knowledge properly.",
    },
    {
      heading: "Outside of work",
      text: "Outside the day job I'm a committed fitness enthusiast – bouldering, football and powerlifting all feature regularly. I'm also into film and music, with a habit of picking things apart properly rather than just watching or listening. Wes Anderson is up there as an idol.",
    },
  ],
};

/* ------------------------------------------------------------
   KSBs – the official ST0481 standard, paraphrased. Each KSB has
   a `status` and up to FOUR evidence entries, which the KSB popup
   shows as a swipeable carousel.

   PICKING EVIDENCE: list entries strongest first. Only the first
   four are shown, so if you have more than four, keep your best
   four at the top.

   EACH EVIDENCE ENTRY:
     {
       project: "webform-relaunch",   // a PROJECTS id below – links the two
                                      // and adds this KSB to that project card
       // …or, for day-to-day work rather than a project:
       source: "Digital Marketing Executive, OutsideClinic",
       date: "Dec 2025 – Feb 2026",
       text: "One or two sentences on what you did and how it meets the KSB.",
       images: [                      // optional – as many as you need
         { src: "evidence/webform-new-design.jpg", caption: "The relaunched form" },
         { src: "evidence/webform-thanks-email.jpg", caption: "Manager sign-off email" },
       ],
     }
   Save images into the `evidence/` folder and compress them first
   so the site stays fast. (Older entries using a single `image` +
   `imageCaption` still work.)

   DRAFTED EVIDENCE: entries on "in-progress" KSBs are first drafts
   based on the project write-ups and CV. Before your EPA:
     1. rewrite each one in your own words and check it's accurate,
     2. add supporting images (the work itself, plus proof it was you),
     3. then change status to "complete".
   ------------------------------------------------------------ */

const KSBS = [
  // SKILLS – listed first: this is where the real evidence sits
  { code: "S1", category: "skill", title: "Apply marketing theory", description: "Develop and critically apply the concepts, principles and theories of marketing relevant to the interdisciplinary topics of digital marketing.", status: "in-progress", evidence: [
    {
      source: "Customer journey mapping, OutsideClinic",
      date: "Oct 2026",
      text: "When our new Head of Marketing joined, I was asked to map OutsideClinic's full customer journey, from acquisition through to retention and churn. Using FigJam, I built the journey step by step around the customer lifecycle, breaking each stage down by channel, performance and context, and tagging every touchpoint by its purpose – awareness, conversion, loyalty or retention. I also created flowcharts and decision logic to show exactly how customers move through each path.",
      images: [
        { src: "evidence/s1-customer-journey-map.jpg", caption: "Customer journey map built in FigJam: stages, channels, purpose and decision logic" },
      ],
    },
    {
      source: "University of Portsmouth – UX Design module",
      date: "Apr 2026",
      text: "In my UX Design report, I applied established frameworks – Morville's UX Honeycomb, supported by Norman's emotional design theory – to evaluate how well OutsideClinic's website communicates its brand, then used the findings to design two prototype pages.",
      images: [
        { src: "evidence/ux-honeycomb-analysis.jpg", caption: "Report extract: applying Morville's UX Honeycomb framework" },
      ],
    },
  ] },
  { code: "S2", category: "skill", title: "Apply the 4 Ps", description: "Apply the 4 marketing principles (product, price, place, promotion) and considerations of the business / marketing campaign.", status: "in-progress", evidence: [
    {
      source: "Hearing centre promotion, OutsideClinic",
      date: "Jan 2026",
      text: "After OutsideClinic – a domiciliary healthcare company – acquired a rival business, we inherited several hearing centres across the UK, which brought a new challenge: driving footfall into physical locations. Using our Bury St Edmunds centre as a pilot, I created a postal and digital promotion built around the 4 Ps.\nProduct: our in-store hearing assessments, alongside our new hearing aid range – from behind-the-ear to invisible-in-canal styles, including rechargeable and Bluetooth models from brands such as Widex and Signia.\nPrice: the service was offered at its standard price, so the messaging focused on value – expert, compassionate care and the latest technology – rather than discounting.\nPlace: the centre itself, with booking made easy by QR code, online or phone, and a door drop targeted at around 50,000 households within a 20-minute drive, filtered to over-70s with relevant retail habits.\nPromotion: a personal letter from the centre's hearing aid dispenser, emotion-led messaging about not letting hearing loss hold you back, and our 4.8-star Trustpilot rating as social proof.",
      images: [
        { src: "evidence/s2-door-drop-letter-front.jpg", caption: "Final door-drop letter (front): in-store hearing service and easy booking" },
        { src: "evidence/s2-door-drop-letter-back.jpg", caption: "Final door-drop letter (back): the centre, hearing aid styles and brands" },
        { src: "evidence/s2-bury-hearing-centre-email.jpg", caption: "Campaign update to stakeholders: targeting, creative sign-off and delivery (names redacted)" },
      ],
    },
    {
      source: "Online shop strategy project, OutsideClinic",
      date: "Apr – May 2025",
      text: "In my online shop proposal, I assessed the shop against each of the 4 Ps.\nProduct: expanding a range of only 10 live products into new categories backed by UK demand data.\nPrice: benchmarking against competitors and retailers, which showed our prices were among the highest, and recommending a pricing review with finance alongside a subscription model.\nPlace: fixing the systems and logistics behind the shop so the Audio and Optics teams could fulfil orders efficiently.\nPromotion: tackling low visibility with business cards in every order, automated emails, paid search and story-led social campaigns.",
      images: [
        { src: "evidence/shop-products.jpg", caption: "Slide: product range – short- and long-term plans" },
        { src: "evidence/shop-pricing.jpg", caption: "Slide: pricing review and subscription opportunity" },
        { src: "evidence/shop-visibility.jpg", caption: "Slide: plan to improve the shop's visibility" },
      ],
    },
  ] },
  { code: "S3", category: "skill", title: "Write for audience & channel", description: "Write and create content for the different audiences, online channels and create clear “Call to Actions” and user journeys.", status: "in-progress", evidence: [
    { project: "hubspot-implementation", date: "Sep 2024 – Feb 2025", text: "As part of the HubSpot implementation, I built automated customer journeys across email, SMS and print, writing content for each audience and stage, and giving every touchpoint a clear call to action so customers knew their next step." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I write segmented, A/B-tested email campaigns for acquisition and retention audiences through HubSpot, DotDigital and MBA Pulse, tailoring the message and call to action to where each customer is in their journey." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I build landing pages in Unbounce and Craft CMS with clear calls to action, using structured testing to improve the journey from ad click to enquiry." },
    { project: "webform-relaunch", date: "Dec 2025 – Feb 2026", text: "On the webform relaunch, I helped redesign the enquiry journey from the ground up to give customers a clearer route to get in touch, informed by insight and data." },
  ] },
  { code: "S4", category: "skill", title: "Apply content marketing", description: "Demonstrate how to promote and apply content marketing effectively through the appropriate media channels, relationship management systems and communication platforms to ensure brand and cultural awareness are maintained throughout marketing strategies.", status: "in-progress", evidence: [
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I manage OutsideClinic's social presence across Facebook, Instagram, LinkedIn, TikTok and YouTube, using content on each platform to build brand awareness." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I use photography taken by our field staff to tell patients' stories on social media – emotion-led content that shows the value of the service rather than claiming it." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I run a keyword-led content strategy for organic search, which has delivered sustained month-on-month and year-on-year organic growth." },
    { project: "brand-refresh", date: "Mar 2026 – Oct 2026", text: "During the brand refresh, I managed sign-off on new assets and copy so that content across our channels reflects the new brand identity." },
  ] },
  { code: "S5", category: "skill", title: "Select research methods", description: "Select a variety of appropriate research methodologies, platforms and technologies to synthesise information and apply to the organisation's digital marketing strategies, drivers and customer behaviours.", status: "in-progress", evidence: [
    {
      source: "Competitor research, OutsideClinic",
      date: "Aug – Oct 2026",
      text: "For our competitor analysis, I combined desk research across public sources with AI-assisted research, then organised the findings into a competitor landscape, comparison matrix, messaging comparison, SWOT and PESTLE to inform our positioning.",
      images: [
        { src: "evidence/k1-competitor-research.jpg", caption: "Competitor research board: landscape, comparison matrix, messaging, SWOT and PESTLE" },
      ],
    },
    { source: "Online shop strategy project, OutsideClinic", date: "Apr – May 2025", text: "On the online shop project, I drew on market and competitor analysis, website UX reviews and Google Analytics data to inform recommendations for the shop's future." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I use GA4, Power BI, SEMrush, Google Search Console and Infinity to research and analyse performance across channels, choosing the right tool for each question and pulling the findings together for reporting." },
    { project: "webform-relaunch", date: "Dec 2025 – Feb 2026", text: "For the webform relaunch, I gathered market-relevant insight and data to understand what the form needed to do before the redesign began." },
  ] },
  { code: "S6", category: "skill", title: "Manage & report on projects", description: "Manage, plan, specify, lead and report on digital marketing projects.", status: "in-progress", evidence: [
    { project: "hubspot-implementation", date: "Sep 2024 – Feb 2025", text: "I project-managed the end-to-end HubSpot CRM implementation at OutsideClinic: planning the build of live assets, customer journeys and sales pipelines, reporting progress to stakeholders from employee level through to SLT and suppliers, and delivering on time with staff training built in for a smooth handover." },
    { project: "website-revamp", date: "2026 – ongoing", text: "I'm leading OutsideClinic's website rebuild with a partner design agency – setting and enforcing the delivery timeline and securing stakeholder approvals to keep the project on track for launch." },
    { project: "webform-relaunch", date: "Dec 2025 – Feb 2026", text: "I led the webform relaunch, coordinating an external agency and our internal IT team through the redesign, build and live launch." },
    { project: "brand-refresh", date: "Mar 2026 – Oct 2026", text: "I co-led the client side of OutsideClinic's brand refresh, managing sign-off across internal stakeholders and holding deadlines through to launch." },
  ] },
  { code: "S7", category: "skill", title: "Optimise channels & content", description: "Manage and optimise key channels and content within a digital marketing plan.", status: "in-progress", evidence: [
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I manage Google Ads and Microsoft Ads campaigns, optimising targeting, spend and bidding to reduce cost per acquisition and maximise return on investment." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I manage technical SEO and keyword-led content, which has delivered sustained month-on-month and year-on-year organic growth." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I build and optimise landing pages in Unbounce and Craft CMS through structured testing and UX improvements." },
    { project: "webform-relaunch", date: "Dec 2025 – Feb 2026", text: "I led the redesign and relaunch of the company webform, a key conversion point on the website, using insight and data to shape the new design before rebuilding it with an external agency and internal IT and putting it live." },
  ] },
  { code: "S8", category: "skill", title: "Apply e-commerce strategy", description: "Manage interfaces and the supply network of the organisation and customer by applying the appropriate E-commerce strategies and models available and whenever appropriate taking global engagements into account.", status: "in-progress", evidence: [
    {
      source: "Online shop strategy project, OutsideClinic",
      date: "Apr – May 2025",
      text: "I contributed to a strategic project on the future of OutsideClinic's online shop – preparing the initial deck on price ranges and products, mapping customer journeys, reviewing site UX and analytics, and assessing replatforming options with our agency partners.",
      images: [
        { src: "evidence/shop-whats-going-wrong.jpg", caption: "Slide from my deck: diagnosing the shop's issues – products, pricing, system and visibility" },
      ],
    },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I manage relationships with suppliers and partners including Sagacity, StudioCertain, MBA Group and Paragon, aligning their delivery with OutsideClinic's commercial objectives." },
    { project: "website-revamp", date: "2026 – ongoing", text: "I'm leading the rebuild of OutsideClinic's website – the main online interface between the business and its customers – with a partner design agency." },
  ] },
  { code: "S9", category: "skill", title: "Apply the marketing mix", description: "Apply a marketing mix / digital marketing mix to meet customer expectations.", status: "in-progress", evidence: [
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I oversee a multi-channel acquisition mix across Direct Mail, Paid Social, PPC, SEO and CRM, balancing the channels to reach customers in the right place." },
    {
      source: "Hearing centre promotion, OutsideClinic",
      date: "Jan 2026",
      text: "For the Bury St Edmunds hearing centre promotion, I combined postal and digital activity, choosing a channel mix suited to an older, local audience to drive footfall into the centre.",
      images: [
        { src: "evidence/s2-bury-hearing-centre-email.jpg", caption: "Campaign update to stakeholders: targeting, creative sign-off and delivery (names redacted)" },
      ],
    },
  ] },
  { code: "S10", category: "skill", title: "Analyse campaign performance", description: "Accurately observe, record and draw conclusions from all types statistical analysis of campaign performance, recognising inherent uncertainties and limitations with financial and budgetary requirements to demonstrate Return on Investment (ROI).", status: "in-progress", evidence: [
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I lead Direct Mail campaigns using CPA, CVR and ROI analysis to judge performance and decide where to invest." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I monitor Google Ads and Microsoft Ads performance and adjust targeting, spend and bidding to lower cost per acquisition and improve return on investment." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I report on key business KPIs across channels using GA4, Power BI and Infinity." },
    { source: "Data Administrator / Scheduling Assistant, OutsideClinic", date: "Sep 2021 – Sep 2024", text: "As Data Administrator, I built Excel reports and dashboards to track call volumes, customer trends and team output." },
  ] },
  { code: "S11", category: "skill", title: "Engage via email & social", description: "Engage communities through Email Marketing and Social Media to stimulate and encourage communication through positive discussion and engagement.", status: "complete", evidence: [
    {
      date: "25 Jul 2025",
      text: "This way of working with field-staff photography has developed over several years, but this specific piece of evidence was logged on 25/07/2025. Used social media and photography taken by OutsideClinic field staff to depict the emotion of seeing clearly again for the first time – using storytelling to create an emotion-led post that highlights the value of the service without directly claiming it. Show, don't tell.",
      image: "evidence/s11-outsideclinic-emotion-post.jpg",
      imageCaption: "OutsideClinic Instagram post, featuring a patient's story following a home eye test.",
    },
  ] },
  { code: "S12", category: "skill", title: "Apply data-led analysis", description: "Apply the appropriate tools for a data-led approach to analyse marketing information and platforms, data and social media and recognise what is actually important for insights and optimisation to provide solutions for marketing decisions.", status: "in-progress", evidence: [
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I use GA4, Power BI, SEMrush, Google Search Console and Infinity to analyse cross-channel performance and pick out the insights that matter for optimisation." },
    { project: "webform-relaunch", date: "Dec 2025 – Feb 2026", text: "Before redesigning the company webform, I used market-relevant insight and data to decide what the new design needed to achieve, so the relaunch was based on evidence rather than opinion." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I use CPA, CVR and ROI analysis to make data-led decisions on Direct Mail campaigns." },
  ] },
  { code: "S13", category: "skill", title: "Contribute to strategy", description: "Contribute to business, planning and marketing strategies to recognise and respond quickly to opportunities and customer requirements whilst embracing change.", status: "in-progress", evidence: [
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I oversee OutsideClinic's multi-channel acquisition strategy, adapting the mix across Direct Mail, Paid Social, PPC, SEO and CRM." },
    { project: "brand-refresh", date: "Mar 2026 – Oct 2026", text: "I contributed to OutsideClinic's brand strategy by co-leading the client side of a full brand identity relaunch with an external design agency, guiding internal stakeholders through the change and keeping the project moving to deadline." },
    { project: "hubspot-implementation", date: "Sep 2024 – Feb 2025", text: "I led the move to HubSpot CRM, changing how the business manages customer journeys and sales pipelines." },
    { project: "website-revamp", date: "2026 – ongoing", text: "I'm leading the website rebuild, a major change to how the business presents itself online." },
  ] },
  { code: "S14", category: "skill", title: "Read business intelligence", description: "Identify, recognise and understand internal and external business intelligence and factors that may impact future operations.", status: "in-progress", evidence: [
    {
      source: "Competitor research, OutsideClinic",
      date: "Aug – Oct 2026",
      text: "My competitor research included a SWOT and a PESTLE of the domiciliary eye care market, identifying the external factors – competitor moves and political, economic, social, technological, legal and environmental trends – that could affect OutsideClinic's future plans.",
      images: [
        { src: "evidence/k1-competitor-research.jpg", caption: "Competitor research board: landscape, comparison matrix, messaging, SWOT and PESTLE" },
      ],
    },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I analyse internal performance data across channels in GA4, Power BI and Infinity and report on key business KPIs, flagging trends that could affect future plans." },
  ] },
  { code: "S15", category: "skill", title: "Brief stakeholders", description: "Interpret, communicate and brief internal or external stakeholders on digital business requirements.", status: "in-progress", evidence: [
    { project: "website-revamp", date: "2026 – ongoing", text: "On the website rebuild, I'm the link between our partner design agency and internal stakeholders – creating and proofing concepts and content, communicating them internally and securing approvals." },
    { project: "webform-relaunch", date: "Dec 2025 – Feb 2026", text: "On the webform relaunch, I worked between an external agency and our internal IT team, communicating the business's requirements so the rebuilt form could be implemented live." },
    { project: "hubspot-implementation", date: "Sep 2024 – Feb 2025", text: "Throughout the HubSpot implementation, I kept stakeholders from employee level through to SLT and suppliers informed, briefing each group on what the new CRM meant for them." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I brief suppliers and partners including Sagacity, StudioCertain, MBA Group and Paragon, keeping their delivery aligned with our commercial objectives." },
  ] },

  // KNOWLEDGE
  { code: "K1", category: "knowledge", title: "The disruptive digital environment", description: "The strategic implications of the disruptive digital environment.", status: "in-progress", evidence: [
    {
      source: "Competitor research, OutsideClinic",
      date: "Aug – Oct 2026",
      text: "AI has changed how we approach marketing strategy at OutsideClinic by making in-depth research faster and more cost-effective. I led the creation of a competitor analysis comparing each competitor's activity and positioning with our own. Using AI as a research assistant, I could review and cross-check multiple sources at once, producing a far more thorough breakdown of every competitor – including a comparison matrix, messaging comparison, SWOT and PESTLE – than would have been practical manually.",
      images: [
        { src: "evidence/k1-competitor-research.jpg", caption: "Competitor research board: landscape, comparison matrix, messaging, SWOT and PESTLE" },
      ],
    },
  ] },
  { code: "K2", category: "knowledge", title: "Organic vs paid visibility", description: "Natural/organic and paid marketing to increase the visibility and promotion of websites.", status: "in-progress", evidence: [
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I manage technical SEO and keyword-led content to grow organic visibility, delivering sustained month-on-month and year-on-year organic growth." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "Alongside organic, I manage paid search on Google Ads and Microsoft Ads, so I work with both sides of search visibility day to day." },
  ] },
  { code: "K3", category: "knowledge", title: "Brand theory in practice", description: "The leading marketing theorists and practitioners when managing and implementing brand equity, brand awareness and strategic brand management.", status: "in-progress", evidence: [
    { project: "brand-refresh", date: "Mar 2026 – Oct 2026", text: "Co-leading the client side of OutsideClinic's brand refresh developed my understanding of strategic brand management – protecting brand equity through a full identity relaunch while managing sign-off on assets and copy across internal stakeholders." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I manage our social channels to support brand awareness across Facebook, Instagram, LinkedIn, TikTok and YouTube." },
    { source: "University of Portsmouth – UX Design module", date: "Apr 2026", text: "My UX Design report evaluated how effectively OutsideClinic's website reflects the brand's positioning – trust, clinical authority and warmth – identifying a gap between brand intent and the online experience, and recommending how to close it." },
  ] },
  { code: "K4", category: "knowledge", title: "Professional bodies & emerging trends", description: "Professional bodies and their insights into emerging technologies, trends and themes within the digital marketing environment.", status: "in-progress", evidence: [
    {
      source: "The Marketing Meetup webinar",
      date: "Feb 2025",
      text: "I regularly attend online discussions and webinars to keep up with emerging trends, particularly how AI is changing the digital marketing environment. For example, I attended The Marketing Meetup's webinar with Ashleigh Stearn, 'What do marketers need to know about AI agents?', on how to work effectively alongside AI agents. What I learned changed how I use AI platforms day to day, giving me a clearer understanding of the complexity of work these agents can support.",
      images: [
        { src: "evidence/k4-ai-agents-webinar-invite.jpg", caption: "Calendar booking for The Marketing Meetup webinar on AI agents" },
        { src: "evidence/k4-ai-agents-webinar-registration.jpg", caption: "Webinar registration confirmation" },
      ],
    },
  ] },
  { code: "K5", category: "knowledge", title: "Customer insight & retention", description: "Customer insight, strategic relationships, acquisition and focus of customers, taking into account the customer experience and retention/loyalty.", status: "in-progress", evidence: [
    { project: "hubspot-implementation", date: "Sep 2024 – Feb 2025", text: "Through the HubSpot implementation, I designed automated lifecycle journeys across email, SMS and print aimed at improving repeat purchase rate and customer lifetime value, applying my understanding of customer retention and loyalty." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I oversee customer acquisition across Direct Mail, Paid Social, PPC, SEO and CRM, using CPA, CVR and ROI analysis to understand how each channel performs." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I run segmented email campaigns aimed at both acquisition and retention audiences." },
    {
      source: "Customer journey mapping, OutsideClinic",
      date: "Oct 2026",
      text: "Mapping our end-to-end customer journey – from acquisition through to retention and churn – gave our new Head of Marketing a clear view of the full customer experience, including where customers are retained or lost.",
      images: [
        { src: "evidence/s1-customer-journey-map.jpg", caption: "Customer journey map built in FigJam: stages, channels, purpose and decision logic" },
      ],
    },
  ] },
  { code: "K6", category: "knowledge", title: "B2B relationships via social", description: "How to foster business-to-business (B2B) marketing relationships through social media to launch products based on price and popularity.", status: "in-progress", evidence: [
    {
      source: "Hearing Dogs for Deaf People partnership",
      date: "Aug 2025",
      text: "I built and maintained a professional relationship with Hearing Dogs for Deaf People, OutsideClinic's charity of the year, acting as the key point of contact for partnership communications. I coordinated fundraising events and charity engagement activities, liaising with colleagues and the charity's fundraising team to make the partnership a success. This strengthened our relationship with a charity closely aligned to our hearing care services, while supporting brand awareness, community engagement and our social impact goals.",
      images: [
        { src: "evidence/k6-hearing-dogs-email.jpg", caption: "Correspondence with Hearing Dogs for Deaf People planning fundraising activity (contact details redacted)" },
      ],
    },
    {
      source: "LinkedIn, OutsideClinic",
      date: "Dec 2025",
      text: "We also use LinkedIn to support our B2B partnerships – for example, sharing The Care Workers' Charity's Winter Prize Draw from our company page to back a partner's fundraising for care workers across the UK.",
      images: [
        { src: "evidence/k6-care-workers-charity-linkedin.jpg", caption: "OutsideClinic LinkedIn post supporting a partner's charity prize draw" },
      ],
    },
  ] },
  { code: "K7", category: "knowledge", title: "Paid, owned & earned media", description: "The types of online and offline paid, owned and earned media, and how this works together.", status: "in-progress", evidence: [
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "My role covers paid media (Google Ads, Microsoft Ads, Meta and Direct Mail) and owned channels (website, SEO, email and social), and I oversee how they work together in our acquisition strategy." },
  ] },
  { code: "K8", category: "knowledge", title: "Regulation, data protection & ethics", description: "Digital marketing regulatory requirements, data protection, compliance and ethics, both national and international.", status: "in-progress", evidence: [
    { source: "Data Administrator / Scheduling Assistant, OutsideClinic", date: "Sep 2021 – Sep 2024", text: "As Data Administrator, I logged and processed inbound mail, making sure customer data was entered correctly and in line with GDPR." },
  ] },
  { code: "K9", category: "knowledge", title: "International & multichannel marketing", description: "The Digital Marketing environment for International marketing and multichannel marketing, for agencies as well as client.", status: "in-progress", evidence: [
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I work across multichannel marketing every day – Direct Mail, Paid Social, PPC, SEO and CRM – and manage agency partners from the client side." },
  ] },
  { code: "K10", category: "knowledge", title: "Stakeholder & commercial awareness", description: "Stakeholder and customer requirements, commercial awareness and business improvement processes that are relevant to campaign management.", status: "in-progress", evidence: [
    { project: "hubspot-implementation", date: "Sep 2024 – Feb 2025", text: "Implementing HubSpot meant balancing the requirements of employees, SLT and suppliers, keeping each group informed throughout so the new CRM met the business's needs and was adopted smoothly through staff training." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I manage supplier and partner relationships and keep their delivery aligned with OutsideClinic's commercial objectives." },
    { project: "website-revamp", date: "2026 – ongoing", text: "On the website rebuild, I align internal stakeholders and secure approvals, balancing their requirements with the delivery timeline." },
  ] },
  { code: "K11", category: "knowledge", title: "Digital & interface design", description: "Digital graphic design, interface design, and authoring.", status: "in-progress", evidence: [
    { project: "website-revamp", date: "2026 – ongoing", text: "On the website rebuild, I create and proof design concepts and content with our partner agency, applying interface design principles to the new site." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I build landing pages in Unbounce and Craft CMS, laying out content and calls to action for each campaign." },
    { project: "brand-refresh", date: "Mar 2026 – Oct 2026", text: "On the brand refresh, I reviewed new design assets and copy, requesting changes where needed before sign-off." },
    {
      source: "University of Portsmouth – UX Design module",
      date: "Apr 2026",
      text: "I designed two prototype pages for OutsideClinic's website – a homepage and an About Us page – reducing competing calls to action and introducing warmer, human-centred imagery and tone of voice in line with the brand guidelines.",
      images: [
        { src: "evidence/ux-homepage-prototype.jpg", caption: "Homepage prototype" },
        { src: "evidence/ux-about-us-prototype.jpg", caption: "About Us prototype" },
      ],
    },
  ] },
  { code: "K12", category: "knowledge", title: "User experience", description: "The user experience, and how to maximise engagement.", status: "in-progress", evidence: [
    { project: "webform-relaunch", date: "Dec 2025 – Feb 2026", text: "The webform relaunch put user experience at the centre: I used insight and data to shape a redesigned form, rebuilt from the ground up and implemented live on the website." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I improve landing pages through structured testing and UX optimisation to increase engagement and conversions." },
    { project: "website-revamp", date: "2026 – ongoing", text: "On the website rebuild, I create and proof concepts with our partner agency with the user's experience of the new site in mind." },
    {
      source: "University of Portsmouth – UX Design module",
      text: "In my UX Design module, I carried out a UX assessment of the OutsideClinic website, evaluating usability, accessibility and trust for older adults, carers and people with mobility limitations, and recommended improvements.",
      date: "Apr 2026",
      images: [
        { src: "evidence/ux-homepage-prototype.jpg", caption: "Homepage prototype designed from the UX analysis" },
      ],
    },
  ] },
  { code: "K13", category: "knowledge", title: "Funnels, segmentation & attribution", description: "Segmentation, targeting and application of sales funnel, path to purchase, and customer attribution.", status: "in-progress", evidence: [
    { project: "hubspot-implementation", date: "Sep 2024 – Feb 2025", text: "In HubSpot, I built bespoke sales pipelines, funnels and segmented customer journeys, mapping the customer's path to purchase and the follow-up that encourages repeat purchases." },
    { source: "Digital Marketing Executive, OutsideClinic", date: "Sep 2024 – present", text: "I segment audiences for email campaigns by acquisition and retention stage, and A/B test to see what works for each group." },
    {
      source: "Customer journey mapping, OutsideClinic",
      date: "Oct 2026",
      text: "I mapped OutsideClinic's full customer journey in FigJam – every touchpoint from first interest to retention – tagging each step as awareness, conversion, loyalty or retention to show the path to purchase and beyond.",
      images: [
        { src: "evidence/s1-customer-journey-map.jpg", caption: "Customer journey map built in FigJam: stages, channels, purpose and decision logic" },
      ],
    },
    {
      source: "Hearing centre promotion, OutsideClinic",
      date: "Jan 2026",
      text: "For the Bury St Edmunds hearing centre campaign, I worked with a data supplier to target households within a 20-minute drive of the centre, segmented by age (70+) and retail habits.",
      images: [
        { src: "evidence/s2-bury-hearing-centre-email.jpg", caption: "Campaign update to stakeholders: targeting, creative sign-off and delivery (names redacted)" },
      ],
    },
  ] },
  { code: "K14", category: "knowledge", title: "E-commerce fundamentals", description: "E-commerce and the importance of product descriptions, images, site layout and what makes a good online shopping experience.", status: "in-progress", evidence: [
    {
      source: "Online shop strategy project, OutsideClinic",
      date: "Apr – May 2025",
      text: "I contributed to a strategic e-commerce project on the future of OutsideClinic's online shop. Working with internal stakeholders and external digital agencies, I put together the initial slide deck on price ranges and products we could introduce, and supported customer journey mapping, market and competitor analysis, website UX reviews, Google Analytics evaluation and replatforming considerations. The project assessed how improvements to the shopping experience – product categorisation, payment options and site functionality – could increase conversions and support business growth, deepening my understanding of e-commerce fundamentals from customer experience to commercial website optimisation.",
      images: [
        { src: "evidence/shop-whats-going-wrong.jpg", caption: "Slide from my deck: diagnosing the shop's issues – products, pricing, system and visibility" },
        { src: "evidence/shop-pricing-benchmark.jpg", caption: "Slide: price benchmarking against competitors and retailers" },
        { src: "evidence/shop-future-products.jpg", caption: "Slide: future product categories backed by UK demand data" },
        { src: "evidence/k14-online-shop-email.jpg", caption: "Project kick-off email to agency partners, with my initial slide deck (contacts and figures redacted)" },
      ],
    },
  ] },

  // BEHAVIOURS – part of the standard, so kept for completeness, but
  // deliberately not the focus of this portfolio (see filter default in script.js)
  { code: "B1", category: "behaviour", title: "Communication", description: "Ability to communicate and actively listen at all levels.", status: "in-progress", evidence: [
    { project: "hubspot-implementation", date: "Sep 2024 – Feb 2025", text: "On the HubSpot implementation, I communicated with everyone from employees to SLT and suppliers, and trained staff on the new system." },
    { source: "Data Administrator / Scheduling Assistant, OutsideClinic", date: "Sep 2021 – Sep 2024", text: "As Scheduling Assistant, I handled more than 100 inbound calls a day, supporting customers and updating their records." },
    {
      source: "Hearing Dogs for Deaf People partnership",
      date: "Aug 2025",
      text: "As the key contact for our charity partner, Hearing Dogs for Deaf People, I communicated with their fundraising team and our own colleagues to plan events and activities.",
      images: [
        { src: "evidence/k6-hearing-dogs-email.jpg", caption: "Correspondence with Hearing Dogs for Deaf People planning fundraising activity (contact details redacted)" },
      ],
    },
  ] },
  { code: "B2", category: "behaviour", title: "Resilience & teamwork", description: "Ability to work under pressure and unsupervised, and interact effectively within teams.", status: "in-progress", evidence: [
    { source: "Data Administrator / Scheduling Assistant, OutsideClinic", date: "Sep 2021 – Sep 2024", text: "As Scheduling Assistant, I managed UK-wide clinician schedules, balancing geography, availability and patient needs alongside a high volume of daily calls." },
    { project: "webform-relaunch", date: "Dec 2025 – Feb 2026", text: "On the webform relaunch, I worked across teams – an external agency and our internal IT department – to deliver the project." },
  ] },
  { code: "B3", category: "behaviour", title: "Inclusion & impact awareness", description: "Consider the impact of work on others, especially where related to culture, diversity and equality.", status: "in-progress", evidence: [
    {
      source: "University of Portsmouth – UX Design module",
      text: "I considered the impact of digital experiences on a diverse range of users by assessing how well the OutsideClinic website supports older adults, carers and people with mobility limitations. Through a UX assessment, I evaluated accessibility, usability and trust to make sure the site met the needs of potentially vulnerable users, and developed recommendations to make the online experience more inclusive and accessible for everyone.",
      date: "Apr 2026",
      images: [
        { src: "evidence/ux-accessibility-findings.jpg", caption: "Report extract: findability and accessibility analysis for older users and carers" },
        { src: "evidence/ux-homepage-prototype.jpg", caption: "Homepage prototype: fewer competing calls to action and warmer, human-centred design" },
      ],
    },
  ] },
  { code: "B4", category: "behaviour", title: "Quality & deadlines", description: "Demonstrate business disciplines and compliance with procedures and principles to ensure work is of high quality and fit for purpose, with high attention to detail and the ability to work to deadlines.", status: "in-progress", evidence: [
    { project: "brand-refresh", date: "Mar 2026 – Oct 2026", text: "On the brand refresh, I managed sign-off on assets and copy, flagged and requested changes where needed, and held the line on deadlines once designs were locked." },
    { project: "website-revamp", date: "2026 – ongoing", text: "On the website rebuild, I set and enforce the delivery timeline with our partner agency to keep the project on track." },
    { project: "hubspot-implementation", date: "Sep 2024 – Feb 2025", text: "I delivered the HubSpot implementation on time, with staff training built in for a smooth handover." },
  ] },
  { code: "B5", category: "behaviour", title: "Integrity & data security", description: "Show integrity and respect for confidentiality and data security in work and personal situations.", status: "in-progress", evidence: [
    { source: "Data Administrator / Scheduling Assistant, OutsideClinic", date: "Sep 2021 – Sep 2024", text: "As Data Administrator, I handled customer records and inbound mail in line with GDPR, making sure personal data was entered accurately and handled securely." },
  ] },
  { code: "B6", category: "behaviour", title: "CPD & enthusiasm", description: "Be enthusiastic and have a thorough and flexible approach to work and to personal development through CPD and life-long learning.", status: "in-progress", evidence: [
    { source: "University of Portsmouth", date: "Ongoing", text: "I'm studying for a BA (Hons) Digital Marketing degree apprenticeship at the University of Portsmouth alongside my full-time role, applying what I learn to my day-to-day work." },
    {
      source: "The Marketing Meetup webinar",
      date: "Feb 2025",
      text: "I attend industry webinars to keep my skills current – for example, The Marketing Meetup's session on AI agents, which changed how I use AI tools at work.",
      images: [
        { src: "evidence/k4-ai-agents-webinar-invite.jpg", caption: "Calendar booking for The Marketing Meetup webinar on AI agents" },
        { src: "evidence/k4-ai-agents-webinar-registration.jpg", caption: "Webinar registration confirmation" },
      ],
    },
  ] },
  { code: "B7", category: "behaviour", title: "Structured problem solving", description: "Logical thinking and a creative approach to problem solving to systematically analyse and apply structured techniques to complex systems and situations.", status: "in-progress", evidence: [
    { project: "webform-relaunch", date: "Dec 2025 – Feb 2026", text: "For the webform relaunch, I used insight and data to work out what needed to change before redesigning the form from the ground up." },
    { source: "Data Administrator / Scheduling Assistant, OutsideClinic", date: "Sep 2021 – Sep 2024", text: "As Scheduling Assistant, I planned UK-wide clinician schedules, solving the puzzle of geography, availability and patient needs." },
  ] },
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
    status: "complete", // "complete" shows a ✓ Completed badge; "in-progress" shows In progress
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
    status: "complete", // "complete" shows a ✓ Completed badge; "in-progress" shows In progress
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
    status: "in-progress", // "complete" shows a ✓ Completed badge; "in-progress" shows In progress
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
    status: "complete", // "complete" shows a ✓ Completed badge; "in-progress" shows In progress
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
    "Digital Marketing Executive with experience leading multi-channel acquisition, CRM and lifecycle marketing strategy within a £40m business, with accountability for a six-figure monthly media budget. Led the end-to-end implementation of HubSpot, developing automated customer journeys across email, SMS and print to improve engagement, retention and customer lifetime value. Experienced in managing high-performing acquisition channels including Direct Mail campaigns generating circa £400k in monthly revenue, alongside PPC campaigns (Google Ads and Microsoft Ads) generating circa £350k and Paid Social (Meta) generating circa £20k in monthly revenue, focused on data-driven optimisation to improve ROI, CVR and overall campaign performance.",

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
