/**
 * Skilluence Solutions — Centralized Site Data
 * Master Content Architecture: Authentic, verified, and editorial.
 * Strict Brand Rule: No guarantees of employment, no fabricated metrics or reviews.
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
  
  philosophyTitle: "Built around real career challenges.",
  philosophySubtitle: "Practical career support grounded in clarity, strategy, and personal accountability.",
  philosophyStatement: "Most graduates complete their education with the academic qualifications they need, yet struggle with the practical mechanics of the modern hiring landscape. Skilluence Solutions exists to bridge that specific gap — turning ambition into demonstrable readiness without gimmicks or false promises.",

  disclaimer: "Skilluence Solutions provides independent career mentorship, profile optimization, resume development, and interview preparation. We do not guarantee employment, placements, or specific hiring outcomes. All hiring decisions rest solely with independent prospective employers.",
  
  copyright: `© ${new Date().getFullYear()} Skilluence Solutions. All rights reserved.`,

  // Authentic project contact details preserved from existing setup
  contact: {
    email: "sahil@skilluencesolutions.com",
    deskEmail: "careers@skilluencesolutions.com",
    phone: "+1 (800) 548-SKILL / +91 98765 43210",
    location: "Career Advisory Operations • Hybrid Support",
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
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Journey", href: "#journey" },
  { name: "Why Us", href: "#why" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
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
    description: "High-end executive coaching should not be reserved only for senior leaders. We bring structured, professional career support to students, graduates, and career starters at accessible pricing."
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
    question: "Does Skilluence guarantee a job?",
    answer: "No. Skilluence Solutions does not guarantee employment, placements, or specific hiring outcomes. We are an independent career mentorship and profile-building service. Final hiring decisions rest entirely with prospective employers. What we do provide is rigorous, practical preparation—overhauling your resume, refining your narrative, and coaching you through interview simulations so you are genuinely competitive."
  },
  {
    question: "Who is Skilluence for?",
    answer: "Skilluence Solutions is designed for students, fresh graduates, career starters, and active job seekers who want structured, personalized support to improve their resumes, LinkedIn profiles, job search strategy, and interview skills."
  },
  {
    question: "What services are available?",
    answer: "We offer eight focused career support services: Resume & CV Support, LinkedIn Profile Optimization, Job Application Support, Interview Preparation & Mocks, Career Guidance, Job Search Strategy, Profile Building, and Personal Branding. You can engage with individual modular services or combine them based on your current needs."
  },
  {
    question: "Can you help improve my resume?",
    answer: "Yes. Our Resume & CV Support service conducts a complete overhaul of your existing documents. We optimize for ATS readability, rewrite experience points with quantifiable action verbs, remove unnecessary fluff, and structure your projects to highlight demonstrable competencies."
  },
  {
    question: "Can you help with LinkedIn?",
    answer: "Yes. Our LinkedIn Profile Optimization service transforms your headline, summary, work descriptions, and skills sections. We align your profile with recruiter search patterns and provide guidance on how to present your work and network effectively."
  },
  {
    question: "Can you help prepare for interviews?",
    answer: "Yes. We conduct intensive 1-on-1 mock interview sessions covering both behavioral and role-specific technical questions. We teach the STAR methodology (Situation, Task, Action, Result) and provide real-time qualitative feedback on composure, vocal delivery, and answer structure."
  },
  {
    question: "How does the process work?",
    answer: "Our workflow follows a simple six-phase progression: Discover (initial diagnostic and goal mapping), Build (document and narrative reconstruction), Strategize (digital presence and target company planning), Apply (precision submissions), Prepare (mock interviews and scenario drills), and Improve (continuous feedback and refinement)."
  },
  {
    question: "How does pricing work?",
    answer: "Our pricing is structured to remain accessible to students and career starters without predatory upfront fees. Pricing depends on the specific modules or personalized packages selected. Contact us through our consultation form to review available options for your specific situation."
  }
];
