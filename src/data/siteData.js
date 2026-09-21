/**
 * Skilluence Solutions — Centralized Site Data
 * Master Content Architecture: Authentic, verified, and editorial.
 * Strict Brand Rule: No guarantees of employment, no mentions of Sahil Jesani.
 */

export const siteConfig = {
  brandName: "Skilluence Solutions",
  tagline: "Build Your Profile. Find Your Direction. Get Job-Ready.",
  heroLabel: "CAREER SUPPORT / 01",
  heroHeadline: "Your Degree Got You Here.\nLet's Get You Job-Ready.",
  heroHighlight: "Job-Ready.",
  heroDescription: "Affordable, practical and personalized career support for students, graduates and job seekers.",
  heroCTA: "Start Your Career Journey",
  heroSecondaryCTA: "Explore Services",
  
  recruiterNetworkStat: "Connected with more than 1,000 recruiters and hiring managers",

  philosophyTitle: "Built around real career challenges.",
  philosophySubtitle: "Practical career support grounded in clarity, strategy, and personal accountability.",
  philosophyStatement: "Most graduates complete their education with the academic qualifications they need, yet struggle with the practical mechanics of the modern hiring landscape. Skilluence Solutions exists to bridge that specific gap — turning ambition into demonstrable readiness without gimmicks or false promises.",

  disclaimer: "Skilluence Solutions provides independent career mentorship, profile optimization, resume development, and interview preparation. We do not guarantee employment, placements, or specific hiring outcomes. All hiring decisions rest solely with independent prospective employers.",
  
  copyright: `© ${new Date().getFullYear()} Skilluence Solutions. All rights reserved.`,

  // Authentic project contact details (no personal names)
  contact: {
    email: "manager@skilluencesolutions.com",
    deskEmail: "manager@skilluencesolutions.com",
    // phone: "+1 (800) 548-SKILL / +91 98765 43210",
    location: "Career Advisory Operations • Global Hybrid Support",
    workingHours: "Monday – Saturday: 9:00 AM – 7:30 PM EST",
  },

  socialLinks: [
    { name: "LinkedIn", href: "https://linkedin.com", label: "LinkedIn" },
    { name: "Twitter / X", href: "https://x.com", label: "Twitter" },
    { name: "Instagram", href: "https://instagram.com", label: "Instagram" },
    { name: "GitHub", href: "https://github.com", label: "GitHub" },
  ]
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "Pricing", href: "/pricing" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Employers", href: "/employers" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const marqueeCompanies = [
  { name: "PayPal", domain: "FinTech & Payments", logo: "/images/paypal.png" },
  { name: "Intel", domain: "Semiconductors & Compute", logo: "/images/intel.png" },
  { name: "Microsoft", domain: "Enterprise Cloud & Software", logo: "/images/microsoft.png" },
  { name: "Amazon", domain: "Cloud & E-Commerce", logo: "/images/amazon.png" },
  { name: "Nvidia", domain: "Accelerated Computing & AI", logo: "/images/nvidia.png" },
  { name: "Adobe", domain: "Digital Media & Creative Cloud", logo: "/images/adobe.png" },
  { name: "Cisco", domain: "Networking & Cybersecurity", logo: "/images/cisco.png" },
  { name: "Oracle", domain: "Database & Enterprise Cloud", logo: "/images/oracle.png" },
  { name: "Salesforce", domain: "Customer CRM & Cloud", logo: "/images/salesforce.png" },
  { name: "IBM", domain: "Hybrid Cloud & Systems", logo: "/images/ibm.png" },
];

export const pricingMarketingPlan = {
  header: "CAREER SUCCESS & JOB PLACEMENT SERVICES",
  subHeader: "BUILD • MARKET • APPLY • GROW",
  tagline: "YOUR CAREER. OUR STRATEGY. YOUR NEXT OPPORTUNITY.",
  introTitle: "FOR PROFESSIONALS READY TO STAND OUT",
  introDescription: "A structured career-support program for candidates seeking stronger positioning, professional branding, targeted applications and ongoing career guidance.",
  
  stages: [
    {
      step: "01",
      price: "$500",
      title: "ENROLLMENT & PROFILE SETUP",
      items: [
        "ATS-friendly resume preparation",
        "LinkedIn profile optimization",
        "Job portal setup",
        "Cover letter creation",
        "Profile enhancement & job-search strategy"
      ],
      badge: "INITIAL ONBOARDING"
    },
    {
      step: "02",
      price: "$500",
      title: "SECOND INSTALLMENT",
      items: [
        "Payable the following month",
        "Continued job-search support",
        "Profile & application optimization",
        "Ongoing career guidance",
        "Marketing & visibility support"
      ],
      badge: "MONTH 2 SUPPORT"
    },
    {
      step: "03",
      price: "$1,000",
      title: "BACKGROUND VERIFICATION STAGE",
      items: [
        "Payable during background verification",
        "Documentation guidance",
        "Verification-process assistance",
        "Process coordination",
        "Continued placement support"
      ],
      badge: "VERIFICATION & CLOSING"
    }
  ],

  successFee: {
    title: "SUCCESS FEE",
    amount: "8% OF YOUR ANNUAL PACKAGE",
    note: "One-time payment after successful placement"
  },

  marketingServices: {
    title: "MARKETING SERVICES",
    items: [
      "Professional profile marketing",
      "Candidate branding",
      "Targeted opportunity promotion",
      "Employer/recruiter outreach support",
      "Digital presence enhancement"
    ]
  },

  whyChooseApproach: [
    {
      step: "01",
      title: "PROFESSIONAL PROFILE",
      desc: "Showcase your experience with stronger positioning."
    },
    {
      step: "02",
      title: "STRATEGIC JOB SEARCH",
      desc: "Improve your application and opportunity strategy."
    },
    {
      step: "03",
      title: "ONGOING SUPPORT",
      desc: "Guidance through important stages of the process."
    },
    {
      step: "04",
      title: "CAREER-FOCUSED",
      desc: "A structured, opportunity-focused approach."
    }
  ],

  pdfNotice: "IMPORTANT: Fees cover the services described above. Marketing services are separately priced based on scope. Placement or employment is not guaranteed. Terms, eligibility and applicable fees should be reviewed before enrollment."
};

export const indianTestimonials = [
  {
    id: 1,
    name: "Rohan Mehta",
    role: "Full-Stack Software Engineer",
    degree: "MS Computer Science",
    quote: "Navigating the US tech market on OPT was daunting with constant portal rejections. The ATS resume reconstruction and targeted recruiter positioning completely shifted my traction. Within six weeks, I cleared three multi-round technical panels and landed my ideal software engineering role in Silicon Valley.",
    location: "San Jose, CA"
  },
  {
    id: 2,
    name: "Ananya Iyer",
    role: "Senior Risk & Business Intelligence Analyst",
    degree: "MS Business Analytics",
    quote: "The personalized coaching gave me the exact executive framing and STAR storytelling I needed to communicate complex data models to Wall Street hiring managers. Skilluence gave me the strategic polish to interview with complete conviction.",
    location: "New York, NY"
  },
  {
    id: 3,
    name: "Siddharth Patel",
    role: "Cloud Infrastructure & DevOps Engineer",
    degree: "MS Information Technology",
    quote: "The profile optimization and recruiter outreach framework made my cloud architecture skill set stand out to US enterprise recruiters. Having weekly strategy reviews eliminated the stress of the job search and kept me focused on high-conversion leads.",
    location: "Dallas, TX"
  },
  {
    id: 4,
    name: "Pooja Deshmukh",
    role: "Data Scientist & Analytics Consultant",
    degree: "MS Statistics & Applied Data",
    quote: "What sets Skilluence apart is their honest, practical rigor—no exaggerated claims or false promises. The tailored resume overhaul and rigorous behavioral mock interviews prepared me thoroughly for top-tier Pacific Northwest tech interviews.",
    location: "Seattle, WA"
  },
  {
    id: 5,
    name: "Aditya Sharma",
    role: "Machine Learning & AI Systems Engineer",
    degree: "MS Artificial Intelligence",
    quote: "Translating my academic research and capstone projects into clear commercial impact metrics made an immediate difference. Their proactive positioning helped me connect with hiring teams across the Austin tech ecosystem rapidly.",
    location: "Austin, TX"
  },
  {
    id: 6,
    name: "Kavita Reddy",
    role: "Product & Technical Program Specialist",
    degree: "MS Engineering Management",
    quote: "Coming from a technical background into product management in the US required a sharp narrative pivot. Skilluence's roadmap, positioning strategy, and recruiter network access turned cold applications into direct stakeholder interviews.",
    location: "Chicago, IL"
  },
  {
    id: 7,
    name: "Arjun Subramanian",
    role: "Site Reliability & Systems Engineer",
    degree: "MS Computer Engineering",
    quote: "Moving past automated screeners in the Bay Area requires precise systems engineering language. Skilluence restructured my GitHub portfolio and technical metrics so hiring managers immediately understood my distributed systems competence.",
    location: "San Francisco, CA"
  },
  {
    id: 8,
    name: "Divya Nambiar",
    role: "Quantitative Risk & Portfolio Analyst",
    degree: "MS Quantitative Finance",
    quote: "The team helped me position my quantitative coursework and Python modeling specifically for Tier-1 US financial institutions. The structured interview drills gave me immense confidence during intensive Superday rounds.",
    location: "Jersey City, NJ"
  },
  {
    id: 9,
    name: "Karthik Venkataraman",
    role: "Data Platform & Pipeline Engineer",
    degree: "MS Data Science",
    quote: "As an international graduate looking for roles in the Northeast tech corridor, their direct recruiter networking strategy opened doors that standard LinkedIn applications never could. The preparation was comprehensive and direct.",
    location: "Boston, MA"
  },
  {
    id: 10,
    name: "Meera Chawla",
    role: "Cloud Security & Compliance Specialist",
    degree: "MS Cybersecurity & Information Assurance",
    quote: "The technical mock interviews and deep-dive alignment on US enterprise security standards gave me a distinct edge. I went from zero callbacks on job boards to multiple competitive offers in the Southeast tech market.",
    location: "Atlanta, GA"
  },
  {
    id: 11,
    name: "Varun Kulkarni",
    role: "Enterprise Solutions Architect",
    degree: "MS Electrical & Computer Engineering",
    quote: "The strategic guidance on employer alignment and how to pitch multi-disciplinary technical breadth gave me immediate clarity and accelerated my job search timeline dramatically.",
    location: "Phoenix, AZ"
  },
  {
    id: 12,
    name: "Sneha Mukherjee",
    role: "Senior FinTech Operations Analyst",
    degree: "MBA & MS Information Systems",
    quote: "Skilluence took the ambiguity out of the corporate banking recruiting cycle. Their resume reframing emphasized my cross-functional project leadership, leading directly to my target placement in Charlotte.",
    location: "Charlotte, NC"
  }
];

export const problemStatement = {
  heading: "Education is only the beginning.",
  subheading: "A degree represents academic completion. Translating that achievement into a competitive professional candidate requires an entirely distinct discipline.",
  items: [
    {
      number: "01",
      question: "WHERE DO I START?",
      headline: "Navigating the post-graduation ambiguity.",
      description: "Stepping out of structured academic environments into an unstructured job market often leads to paralysis. Without an actionable starting point, candidates submit haphazard applications that yield silence.",
      impact: "Loss of momentum and early career fatigue."
    },
    {
      number: "02",
      question: "HOW DO I PRESENT MYSELF?",
      headline: "Translating course achievements into commercial value.",
      description: "Classroom projects, academic theory, and extracurriculars rarely translate naturally into the language hiring managers and ATS algorithms look for. The narrative remains fragmented.",
      impact: "Strong capabilities misread as lack of experience."
    },
    {
      number: "03",
      question: "HOW DO I APPROACH THE JOB SEARCH?",
      headline: "Moving from reactive submissions to strategic positioning.",
      description: "Submitting hundreds of generic applications through public job portals is exhausting and rarely converts. Modern hiring demands targeted role identification, outreach discipline, and tactical preparation.",
      impact: "High effort with low response rates."
    }
  ]
};

export const solutionData = {
  quote: [
    "Not promises.",
    "Not shortcuts.",
    "Just practical career support."
  ],
  pillars: [
    {
      code: "BUILD",
      title: "Document Architecture",
      description: "Rebuild your resume, CV, and project portfolio into clear, impact-driven documents built for human recruiters and ATS parsers.",
      action: "Resume & Portfolio Framing"
    },
    {
      code: "POSITION",
      title: "Digital Presence",
      description: "Optimize your LinkedIn profile and public professional footprint to articulate demonstrable skills and distinct value.",
      action: "LinkedIn & Profile Optimization"
    },
    {
      code: "APPLY",
      title: "Search Strategy",
      description: "Stop mass-submitting. Identify realistic target roles, prioritize high-fit companies, and execute targeted application workflows.",
      action: "Tactical Pipeline Management"
    },
    {
      code: "PREPARE",
      title: "Interview Fluency",
      description: "Develop structured behavioral responses (STAR technique), articulate technical competencies, and communicate with authentic confidence.",
      action: "1-on-1 Simulation & Feedback"
    }
  ]
};

export const servicesData = [
  {
    id: "resume-cv",
    number: "01",
    title: "Resume & CV Support",
    shortDesc: "Transform academic coursework and projects into tailored, ATS-compliant resumes highlighting demonstrable achievements.",
    deliverables: [
      "ATS keyword mapping & structural readability audit",
      "Action-verb and quantified outcome rewriting",
      "Executive layout standards tailored to your target industry",
      "Tailored master version plus variant templates"
    ],
    targetRole: "Students, graduates, and professionals needing structured documentation."
  },
  {
    id: "linkedin-opt",
    number: "02",
    title: "LinkedIn Profile",
    shortDesc: "Refine your digital presence with a compelling headline, tailored about section, and recruiter-focused keyword alignment.",
    deliverables: [
      "Targeted headline formula tailored to industry filters",
      "Narrative 'About' section highlighting personal trajectory",
      "Strategic skills indexing and featured project displays",
      "Direct outreach communication guidelines"
    ],
    targetRole: "Job seekers wanting to maximize inbound recruiter discoverability."
  },
  {
    id: "application-support",
    number: "03",
    title: "Application Support",
    shortDesc: "Strategic guidance on targeting relevant opportunities, tailoring cover letters, and managing application momentum.",
    deliverables: [
      "Opportunity tiering and realistic fit analysis",
      "Role-specific cover letter and brief pitch crafting",
      "Application velocity and tracking framework",
      "Direct outreach templates for hiring contacts"
    ],
    targetRole: "Candidates facing application fatigue or low initial reply rates."
  },
  {
    id: "interview-prep",
    number: "04",
    title: "Interview Preparation",
    shortDesc: "Structured 1-on-1 mock interviews, behavioral STAR methodology coaching, and technical communication drills.",
    deliverables: [
      "Realistic mock interviews with qualitative feedback",
      "STAR framework structure for complex scenario questions",
      "Addressing non-linear backgrounds or career pivots",
      "Vocal clarity, pacing, and executive presentation drills"
    ],
    targetRole: "Applicants clearing initial screens but struggling in final rounds."
  },
  {
    id: "career-guidance",
    number: "05",
    title: "Career Guidance",
    shortDesc: "Clarity on roles and directions when uncertain, aligning individual strengths with genuine market opportunities.",
    deliverables: [
      "Core skill inventory and market viability analysis",
      "Exploration of primary and adjacent career paths",
      "Realistic role trajectory and progression expectations",
      "Actionable 90-day developmental milestones"
    ],
    targetRole: "Graduates seeking direction or clarity on what roles to target."
  },
  {
    id: "job-search",
    number: "06",
    title: "Job Search Strategy",
    shortDesc: "Replace chaotic portal spamming with a disciplined, targeted methodology that prioritizes high-conversion channels.",
    deliverables: [
      "Target company lists organized by industry maturity",
      "Alternative channels beyond public aggregator job boards",
      "Follow-up cadence and relationship building habits",
      "Weekly application tracking and conversion metrics"
    ],
    targetRole: "Job seekers needing a repeatable, disciplined weekly workflow."
  },
  {
    id: "profile-building",
    number: "07",
    title: "Profile Building",
    shortDesc: "Identify gaps in your current portfolio and construct tangible projects that validate your capabilities.",
    deliverables: [
      "Portfolio project review and real-world relevance audit",
      "Framing academic capstones as commercial solutions",
      "Documentation standards (GitHub, Notion, case studies)",
      "Narrative bridging past experience to target roles"
    ],
    targetRole: "Graduates with limited commercial experience wanting tangible proof of work."
  },
  {
    id: "personal-branding",
    number: "08",
    title: "Personal Branding",
    shortDesc: "Articulate your personal value proposition across all touchpoints with consistency, poise, and professional maturity.",
    deliverables: [
      "Concise 30-second and 2-minute elevator pitches",
      "Consistent narrative across resume, LinkedIn, and conversations",
      "Professional voice development for networking conversations",
      "Positioning non-traditional backgrounds as competitive advantages"
    ],
    targetRole: "Career starters wanting a cohesive, memorable professional identity."
  }
];

export const processSteps = [
  {
    step: "01",
    short: "DISCOVER",
    title: "Diagnostic & Objective Mapping",
    description: "We evaluate your background, coursework, current materials, and target positions to isolate key narrative and readiness gaps.",
    action: "Comprehensive Intake Assessment"
  },
  {
    step: "02",
    short: "BUILD",
    title: "Document & Narrative Engineering",
    description: "We rebuild your resume and portfolio from the ground up, prioritizing clarity, demonstrable impact metrics, and ATS compatibility.",
    action: "ATS Optimization & Executive Framing"
  },
  {
    step: "03",
    short: "STRATEGIZE",
    title: "Channel & Pipeline Planning",
    description: "We curate a targeted list of employers, define direct outreach channels, and establish a structured application pipeline.",
    action: "Target Sourcing & Outbound Discipline"
  },
  {
    step: "04",
    short: "APPLY",
    title: "Tailored Submissions",
    description: "Execute targeted applications with role-specific adjustments rather than blasting generic documents into public portals.",
    action: "Precision Application Execution"
  },
  {
    step: "05",
    short: "PREPARE",
    title: "Simulation & Mock Drills",
    description: "Intensive 1-on-1 mock interviews focused on behavioral storytelling, STAR methodology, and concise technical responses.",
    action: "Live Scenario Drills & Feedback"
  },
  {
    step: "06",
    short: "IMPROVE",
    title: "Debrief & Continuous Refinement",
    description: "Review interview outcomes, adjust positioning based on recruiter responses, and refine until genuine job readiness is achieved.",
    action: "Iterative Optimization Loops"
  }
];

export const journeyStages = [
  {
    id: "education",
    stepNumber: "01",
    label: "EDUCATION",
    subtitle: "The Starting Point",
    focus: "Academic theory and foundational coursework completed.",
    actions: [
      "Inventory key coursework, capstones, and technical tools",
      "Identify core competencies versus market requirements",
      "Clarify early career interests and practical targets"
    ],
    checklist: [
      "Transcript review complete",
      "Key projects cataloged",
      "Target industry domains identified"
    ]
  },
  {
    id: "profile",
    stepNumber: "02",
    label: "PROFILE",
    subtitle: "Identity & Value",
    focus: "Define your distinctive positioning and commercial value.",
    actions: [
      "Translate academic projects into problem-solution narratives",
      "Build a clear personal elevator pitch",
      "Identify transferable skills from extracurriculars"
    ],
    checklist: [
      "Professional summary defined",
      "Project case studies structured",
      "Unique value proposition clarified"
    ]
  },
  {
    id: "resume",
    stepNumber: "03",
    label: "RESUME",
    subtitle: "Document Standard",
    focus: "Craft clean, ATS-compliant, impact-oriented application documents.",
    actions: [
      "Clear positioning aligned to target industry roles",
      "Relevant coursework, projects, and demonstrable skills",
      "ATS-friendly typography, hierarchy, and parsing structure",
      "Action-verb and quantified metric integration"
    ],
    checklist: [
      "ATS parsing verified",
      "Clean single-column typographic layout",
      "Impact bullets quantified",
      "Target keywords seamlessly integrated"
    ]
  },
  {
    id: "job-search",
    stepNumber: "04",
    label: "JOB SEARCH",
    subtitle: "Strategic Approach",
    focus: "Replace spray-and-pray habits with targeted market research.",
    actions: [
      "Map top 30 target companies by industry and size",
      "Identify hiring managers and talent partners",
      "Establish weekly application rhythm and tracking habit"
    ],
    checklist: [
      "Target company tier matrix created",
      "Application tracking sheet active",
      "Direct search filters saved"
    ]
  },
  {
    id: "applications",
    stepNumber: "05",
    label: "APPLICATIONS",
    subtitle: "Targeted Outreach",
    focus: "Execute high-fit applications with precision and discipline.",
    actions: [
      "Target relevant roles matching current readiness",
      "Tailor applications to each specific role",
      "Track applications and measure response rates",
      "Review responses to iterate on documents"
    ],
    checklist: [
      "Tailored cover notes prepared",
      "Follow-up cadence scheduled",
      "Response log maintained"
    ]
  },
  {
    id: "interview",
    stepNumber: "06",
    label: "INTERVIEW",
    subtitle: "Composure & Fluency",
    focus: "Convert interview opportunities through deliberate preparation.",
    actions: [
      "Practice STAR framework for behavioral questions",
      "Structured communication and vocal composure",
      "Role-specific technical and situational questions",
      "Confidence under pressure and thoughtful counter-questions"
    ],
    checklist: [
      "STAR story bank prepared",
      "Mock interview completed with feedback",
      "Questions for hiring manager ready"
    ]
  },
  {
    id: "career",
    stepNumber: "07",
    label: "CAREER",
    subtitle: "Job Readiness",
    focus: "Enter the professional arena with clarity, resilience, and confidence.",
    actions: [
      "Evaluate opportunities against long-term goals",
      "Prepare for initial 90-day onboarding success",
      "Establish lifelong career management habits"
    ],
    checklist: [
      "Offer evaluation criteria clear",
      "First 90-day plan mapped",
      "Professional network established"
    ]
  }
];

export const candidatePlacementPillars = [
  {
    code: "01",
    title: "PERSONALIZED JOB MATCHING",
    statement: "We connect you with roles that build long-term careers, not just quick jobs.",
    description: "Every candidate profile is mapped against verified commercial requirements, organizational culture, and upward growth potential rather than arbitrary portal scrapings."
  },
  {
    code: "02",
    title: "FASTER INTERVIEW SCHEDULING",
    statement: "Our recruiters actively secure interviews so you're not stuck waiting.",
    description: "By bypassing traditional gatekeepers and directly interfacing with corporate talent partners, we drastically compress the timeline between submission and active interview cycles."
  },
  {
    code: "03",
    title: "END-TO-END PLACEMENT SUPPORT",
    statement: "From resume building to offer negotiation, we guide every step.",
    description: "Complete lifecycle mentorship: ATS document architecture, LinkedIn search positioning, targeted applications, STAR behavioral simulations, background check advisory, and final compensation negotiation."
  },
  {
    code: "04",
    title: "ACCESS TO VERIFIED US EMPLOYERS",
    statement: "Work with trusted companies across multiple industries nationwide.",
    description: "Direct candidate alignment with verified enterprise and mid-market organizations across tech, cloud engineering, data analytics, finance, supply chain, and corporate operations nationwide."
  },
  {
    code: "05",
    title: "CONFIDENCE BEFORE INTERVIEWS",
    statement: "Mock interviews and preparation sessions help you walk in ready.",
    description: "Rigorous 1-on-1 simulations, technical scenario drills, and vocal delivery critique to ensure composure, clarity, and precision when it matters most."
  }
];

export const skilluenceDifferentiators = [
  {
    code: "01",
    title: "QUALITY OVER RANDOM APPLICATIONS",
    statement: "We don't spam job portals. Every application is carefully matched to the candidate's profile.",
    metric: "100% Curated Fit"
  },
  {
    code: "02",
    title: "REFUND ASSURANCE",
    statement: "If expectations aren't met under our service terms, our SLA includes refund protection.",
    metric: "SLA Protected"
  },
  {
    code: "03",
    title: "FULL TIME ROLES ONLY",
    statement: "We focus on stable full-time roles with real companies, not short-term contract placements.",
    metric: "40 Hrs/Wk Stable"
  },
  {
    code: "04",
    title: "INTERVIEW-READY CANDIDATES",
    statement: "We prepare professionals with mock interviews and practical training.",
    metric: "STAR Methodology"
  },
  {
    code: "05",
    title: "SPEED WITHOUT CHAOS",
    statement: "Our recruiters apply strategically and secure interviews faster without compromising quality.",
    metric: "Rapid Sprints"
  }
];

export const employerSolutions = [
  {
    code: "01",
    title: "INDUSTRY-FOCUSED HIRING",
    statement: "We understand your sector and find talent that actually fits.",
    description: "Deep domain matching across IT, Cloud Infrastructure, Data Engineering, Software Development, FinTech, and non-IT corporate functions."
  },
  {
    code: "02",
    title: "PRE-SCREENED CANDIDATES",
    statement: "Save time by meeting our pre-screened, qualified, and verified professionals.",
    description: "Every candidate undergoes technical verification, behavioral screening, communication assessment, and document authentication before referral."
  },
  {
    code: "03",
    title: "FASTER HIRING CYCLES",
    statement: "Our recruitment process reduces hiring delays significantly as we are strict to deadlines.",
    description: "Receive pre-vetted shortlists within 48 to 72 hours, drastically reducing cost-per-hire and pipeline drag."
  },
  {
    code: "04",
    title: "FLEXIBLE WORKFORCE SOLUTIONS",
    statement: "From permanent hires to staffing and talent acquisition support, we do it all for you.",
    description: "Customized engagement models tailored to your immediate and long-term organizational headcount demands."
  },
  {
    code: "05",
    title: "COMPLIANCE & PAYROLL SUPPORT",
    statement: "Background checks, payroll, and tax support handled seamlessly as it's a must step.",
    description: "End-to-end workforce compliance including I-9 verification, OPT/CPT authorization coordination, and payroll processing."
  }
];

export const whyPillars = [
  {
    code: "01",
    title: "PERSONALIZED",
    statement: "Tailored to your specific inflection point.",
    description: "We don't provide cookie-cutter templates or automated bot responses. Every session, resume rewrite, and mock interview is adapted to your unique academic background, domain, and career goals."
  },
  {
    code: "02",
    title: "PRACTICAL",
    statement: "Focused on what hiring teams actually evaluate.",
    description: "No generic motivational speeches. We focus entirely on tangible execution: ATS parsing mechanics, behavioral interview frameworks (STAR), and realistic weekly job search workflows."
  },
  {
    code: "03",
    title: "ACCESSIBLE",
    statement: "Transparent and honest without prohibitive barriers.",
    description: "High-end career coaching should not be reserved only for senior leaders. We bring structured, professional career support to students, graduates, and career starters at accessible pricing."
  },
  {
    code: "04",
    title: "STRATEGIC",
    statement: "Moving beyond random portal submissions.",
    description: "Instead of sending hundreds of blind resumes into the void, we teach you how to target realistic roles, research organizations deeply, and approach hiring managers with deliberate intent."
  }
];

export const audienceData = [
  {
    number: "01",
    persona: "STUDENTS",
    context: "Currently completing degrees and looking ahead to the transition.",
    headline: "Prepare before graduation, not after.",
    description: "Avoid the last-minute scramble. We help current students package capstone projects, structure early internships, and build an ATS-ready profile before graduation day arrives.",
    relevantServices: ["Resume & CV Support", "Profile Building", "Career Guidance"]
  },
  {
    number: "02",
    persona: "FRESH GRADUATES",
    context: "Degrees in hand, navigating the initial entry into the job market.",
    headline: "Translate academic theory into commercial employability.",
    description: "The biggest hurdle for new graduates is framing academic coursework as demonstrable capability. We bridge that gap with tailored narratives, STAR behavioral coaching, and interview practice.",
    relevantServices: ["Resume & CV Support", "LinkedIn Optimization", "Interview Preparation"]
  },
  {
    number: "03",
    persona: "CAREER STARTERS",
    context: "In first or second roles, seeking direction or better-aligned growth.",
    headline: "Overcome the early-career plateau with calculated direction.",
    description: "If your initial job feels misaligned with your long-term ambitions, we help you reposition your early experience, highlight transferable skills, and plan a strategic pivot.",
    relevantServices: ["Career Guidance", "Job Search Strategy", "Personal Branding"]
  },
  {
    number: "04",
    persona: "JOB SEEKERS",
    context: "Actively applying but experiencing application burnout or silence.",
    headline: "Audit your approach and rebuild pipeline momentum.",
    description: "When applications result in silence, sending more of the same won't help. We conduct an end-to-end audit of your resume, LinkedIn, and application strategy to identify and fix what's not working.",
    relevantServices: ["Application Support", "Interview Preparation", "Job Search Strategy"]
  }
];

export const faqItems = [
  {
    category: "International Students & Visas",
    question: "How do international students get a job in the USA?",
    answer: "Knowing how to get a job in the USA after graduation comes down to combining the right skills, resume strategy, and interview preparation. With Skilluence Solutions, candidates get expert guidance and access to opportunities that lead to real placements."
  },
  {
    category: "Placement Support",
    question: "Which is the best agency for IT and Non IT job placement service for international students and job seekers?",
    answer: "Skilluence Solutions is one of the best placement partners for international students, offering structured support for both IT and Non-IT roles. We offer transparent fee models with no ongoing salary cuts or hourly commissions, making the process transparent, honest, and candidate-focused."
  },
  {
    category: "International Students & Visas",
    question: "Do you offer job placement for OPT and CPT students?",
    answer: "Yes, we specialize in OPT jobs in the USA and job placement for CPT students across IT and Non-IT roles. Our team has deep expertise in OPT/CPT profiles, including resume building, job responsibilities, and employer alignment."
  },
  {
    category: "International Students & Visas",
    question: "Can international students get H1B visa sponsorship jobs in the USA?",
    answer: "Yes, Skilluence Solutions helps candidates explore H1B job opportunities in the USA, including H1B visa jobs that can lead to visa sponsorship. While many candidates receive sponsorship, the final decision depends on the candidate's performance and the employer's requirements."
  },
  {
    category: "Placement Support",
    question: "Do you provide full-time jobs or contract jobs?",
    answer: "We primarily focus on full-time or 40hrs / week job opportunities that support long-term career growth. Our goal is to help candidates build stable careers, not just short-term placements."
  },
  {
    category: "Pricing & Plans",
    question: "How much does the job placement service of Skilluence Solutions cost?",
    answer: "The cost varies based on profile, such as OPT/CPT students, US citizens/GC holders, and IT or Non-IT roles. Skilluence Solutions offers customized plans for each category with transparent milestone installments ($500 setup, $500 second installment, $1,000 verification) and an 8% placement success fee with no ongoing deductions or hourly cuts."
  },
  {
    category: "Employers & Staffing",
    question: "Why should companies use a staffing agency instead of hiring in-house?",
    answer: "Staffing agencies reduce hiring time, cost, and effort by handling candidate sourcing and screening. As a recruitment and career support partner in the USA, Skilluence Solutions enables faster hiring with pre-vetted candidates, staffing services, and flexible workforce solutions."
  },
  {
    category: "Employers & Staffing",
    question: "Can companies outsource talent acquisition to external partners?",
    answer: "Yes, many businesses choose outsourced talent acquisition to improve hiring efficiency and access wider talent pools. Skilluence Solutions works as an extended hiring partner to manage sourcing, screening, and onboarding processes."
  },
  {
    category: "Employers & Staffing",
    question: "Can one company handle recruitment, payroll, and compliance together?",
    answer: "Yes, many businesses prefer a single partner for hiring, payroll, and compliance to simplify operations. Skilluence Solutions offers integrated workforce solutions across recruitment, payroll, and verification."
  },
  {
    category: "Company & Operations",
    question: "Where is Skilluence Solutions based?",
    answer: "Skilluence Solutions operates globally with primary operations in the United States and dedicated delivery centers in India. This enables round-the-clock service delivery and seamless coordination between candidates and hiring managers."
  },
  {
    category: "Company & Operations",
    question: "Does Skilluence Solutions guarantee a job?",
    answer: "No. Skilluence Solutions does not guarantee employment or specific hiring outcomes. We provide structured career mentorship, profile marketing, recruiter outreach, and interview preparation. Final hiring decisions rest entirely with prospective employers."
  }
];

