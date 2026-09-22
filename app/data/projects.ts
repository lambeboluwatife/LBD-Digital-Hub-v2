export interface Project {
  slug: string;
  title: string;
  category: string[];
  tags: string[];
  alt: string;
  src: string;
  challenge: string;
  solution: string;

  // Rich Case Study Details
  subtitle?: string;
  badges?: string[];
  stats?: {
    timeline?: string;
    role?: string;
    services?: string;
    client?: string;
  };
  challengeDetails?: {
    description: string;
    metrics?: { label: string; value: string }[];
  };
  techStack?: { name: string; icon: string }[];
  solutionDetails?: {
    description: string;
    bullets?: string[];
    diagramSrc?: string;
    diagramAlt?: string;
    metricLabel?: string;
    metricValue?: string;
  };
  measuredImpact?: { value: string; label: string }[];
  testimonial?: {
    quote: string;
    avatar?: string;
    name: string;
    role: string;
  };
  engineeringHighlights?: string[];
  architectureHighlights?: string[];

  projectGallery?: { title: string; image: string }[];

  nextProjectSlug?: string;
  projectUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "gkai",
    title: "GKAI",
    category: ["web", "game"],
    tags: ["Svelte.js", "TypeScript", "Node.js", "Express", "MongoDB", "Cloud Database"],
    alt: "GKAI multiplayer strategy game dashboard with modern interactive interface.",
    src: "/images/GKAI-bg.webp",

    challenge:
      "Building a fast, engaging multiplayer strategy game that saves player progress seamlessly and runs without lag across all devices.",

    solution:
      "Developed a full-stack web application with secure player accounts, instant real-time gameplay responses, and automated score tracking.",

    subtitle:
      "An interactive multiplayer strategy number-guessing game featuring live competition, multiple difficulty levels, and automatic game progress saving.",

    badges: ["WEB APPLICATION", "MULTIPLAYER GAME"],

    stats: {
      timeline: "6 Weeks",
      role: "Full Stack Developer",
      services: "Frontend & Backend Development",
      client: "Personal Project",
    },
    challengeDetails: {
      description:
        "The game needed to provide a smooth, responsive multiplayer experience where players can compete live, resume saved matches at any time, and enjoy fair, automated scoring without slowdowns.",

      metrics: [
        {
          label: "GAME MODES",
          value: "4 Difficulty Levels",
        },
        {
          label: "ACCOUNT SECURITY",
          value: "Verified Logins",
        },
      ],
    },

    techStack: [
      {
        name: "Svelte.js",
        icon: "terminal",
      },
      {
        name: "Node.js",
        icon: "cloud",
      },
      {
        name: "Express",
        icon: "database",
      },
      {
        name: "MongoDB",
        icon: "database",
      },
      {
        name: "TypeScript",
        icon: "terminal",
      },
    ],

    solutionDetails: {
      description:
        "Designed a fast and reliable system that keeps game progress synchronized in real time while delivering smooth, instant visual interactions.",

      bullets: [
        "Secure player accounts and saved progress",
        "Instant game response with zero lag",
        "Single-player and live multiplayer modes",
        "Automated scoring and match history tracking",
      ],

      diagramSrc: "/images/GKAI.webp",
      diagramAlt: "GKAI application architecture.",
      metricLabel: "RESPONSE SPEED",
      metricValue: "<100ms Instant",
    },

    measuredImpact: [
      {
        value: "4",
        label: "Difficulty Levels",
      },
      {
        value: "2",
        label: "Game Modes",
      },
      {
        value: "100%",
        label: "Responsive on All Devices",
      },
    ],

    engineeringHighlights: [
      "Engineered custom logic for instant, automated game scoring.",
      "Built secure account management and session protection.",
      "Created progress persistence so players can pause and resume matches anytime.",
      "Designed a clean, intuitive interface optimized for phones and desktops.",
      "Optimized server communication for sub-100ms real-time responsiveness.",
      "Built player leaderboards and match history tracking.",
    ],

    architectureHighlights: [
      "Frontend → Svelte.js (Interactive UI)",
      "Backend → Node.js / Express (Game Server)",
      "Database → MongoDB (Secure Storage)",
      "Accounts → Secure Member Verification",
      "Hosting → Vercel (Global Cloud)",
    ],

    testimonial: {
      quote:
        "GKAI demonstrates exceptional problem-solving and responsive interactive web engineering, providing a fun and frictionless multiplayer experience.",
      avatar: "",
      name: "Project Showcase",
      role: "Interactive Web Project",
    },

    nextProjectSlug: "deduction",
    projectUrl: "https://gkai-svelte-kit.vercel.app/",
  },
  {
    slug: "digital-readiness",
    title: "Digital Readiness",
    category: ["ai", "mobile"],
    tags: [
      "Mobile App",
      "React Native",
      "Smart AI Assistant",
      "Conversational Surveys",
      "TypeScript",
    ],
    alt: "Digital Readiness mobile platform featuring AI-powered digital literacy assessments, conversational agents, personalized readiness reports, and intuitive mobile-first interfaces.",
    src: "/projects/digital-readiness/cover.webp",

    challenge:
      "Organizations lacked a friendly, scalable way to evaluate people's practical digital skills, as traditional paper surveys are rigid and confusing for everyday users.",

    solution:
      "Built an AI-powered mobile app that conducts natural, guided conversations, automatically adapts questions to each user's skill level, and generates instant digital readiness reports.",

    subtitle:
      "An intelligent mobile assessment platform that uses conversational AI to evaluate digital skills and generate personalized readiness reports.",

    badges: ["SMART AI AGENT", "MOBILE PLATFORM"],

    stats: {
      timeline: "8 Weeks",
      role: "AI & Mobile Engineer",
      services: "AI Engineering • Mobile Development",
      client: "Research & Innovation Project",
    },

    challengeDetails: {
      description:
        "Measuring digital skills goes far beyond asking multiple-choice questions. Organizations need genuine insight into how comfortably people navigate smartphones and online services. Traditional questionnaires cause confusion and fail to adapt to varying skill levels.",

      metrics: [
        {
          label: "EXPERIENCE",
          value: "Mobile First",
        },
        {
          label: "EVALUATION",
          value: "Adaptive AI",
        },
        {
          label: "LANGUAGE",
          value: "Everyday Words",
        },
      ],
    },

    techStack: [
      {
        name: "React Native",
        icon: "phone_iphone",
      },
      {
        name: "Expo",
        icon: "terminal",
      },
      {
        name: "AI Agents",
        icon: "psychology",
      },
      {
        name: "OpenAI",
        icon: "smart_toy",
      },
      {
        name: "TypeScript",
        icon: "terminal",
      },
    ],

    solutionDetails: {
      description:
        "Rather than presenting long, intimidating forms, the app speaks with users through a friendly, guided dialogue. The AI adapts follow-up questions in real time and automatically creates helpful summary reports for organizations.",

      bullets: [
        "Friendly, conversational AI that speaks in plain language",
        "Questions that automatically adjust to the user's skill level",
        "Clear, instant digital readiness scorecards",
        "Practical recommendations to improve digital confidence",
        "Designed specifically for first-time smartphone users",
        "Works smoothly even on low-speed mobile internet",
      ],

      diagramSrc: "/projects/digital-readiness/architecture.webp",
      diagramAlt: "Digital Readiness application workflow.",
      metricLabel: "USER EXPERIENCE",
      metricValue: "Adaptive & Friendly",
    },

    measuredImpact: [
      {
        value: "AI",
        label: "Adaptive Questions",
      },
      {
        value: "Mobile",
        label: "First-Time User Friendly",
      },
      {
        value: "Instant",
        label: "Automated Reports",
      },
      {
        value: "100%",
        label: "Easy to Complete",
      },
    ],

    engineeringHighlights: [
      "Developed conversational AI workflows that speak clearly without confusing jargon.",
      "Implemented intelligent follow-up questioning that adapts to each user's answers.",
      "Designed a simple, friendly mobile interface tailored for non-tech-savvy users.",
      "Built automatic report generation that summarizes digital skills at a glance.",
      "Optimized app performance to run smoothly on affordable mobile devices.",
    ],

    architectureHighlights: [
      "Mobile App → React Native (iOS & Android)",
      "AI Engine → Smart Conversational Intelligence",
      "Reports → Automated Analytics",
      "Language → Plain Language Ready",
      "Accessibility → High-Contrast Friendly",
    ],

    testimonial: {
      quote:
        "Digital Readiness transforms rigid survey forms into an intuitive, friendly dialogue that makes digital skills assessment effortless and empowering.",
      avatar: "/images/testimonials/project-showcase.webp",
      name: "Portfolio Case Study",
      role: "AI & Mobile Showcase",
    },

    projectUrl:
      "https://drive.google.com/file/d/1jnEJ6cH4Z8Gnm8rGouYIlK8F0fgS9U3C/view?usp=drive_link",
    nextProjectSlug: "client-pulse",
  },
  {
    slug: "deduction",
    title: "Deduction",
    category: ["web", "media"],
    tags: [
      "Next.js",
      "TypeScript",
      "Content Platform",
      "Tailwind CSS",
      "Fast Search",
      "Interactive Charts",
      "SEO Ready",
    ],
    alt: "Deduction football intelligence platform featuring player scouting reports, match performance analytics, advanced search, editorial articles, and interactive player statistics.",
    src: "/images/deduction-bg.webp",

    challenge:
      "Creating a fast media and scouting platform capable of publishing daily football stories while managing detailed player statistics, instant search, and interactive charts.",

    solution:
      "Engineered a high-speed digital publishing platform with an easy-to-use editor dashboard, instant player search, and visual performance charts that rank high on Google.",

    subtitle:
      "A football intelligence platform delivering player profiles, scouting reports, performance analytics, and editorial coverage across African football.",

    badges: ["CONTENT PLATFORM", "SPORTS ANALYTICS"],

    stats: {
      timeline: "Ongoing",
      role: "Lead Frontend Developer",
      services: "Frontend Architecture & CMS Development",
      client: "Deduction",
    },

    challengeDetails: {
      description:
        "The platform needed to handle thousands of reader visits during match days, display complex scouting charts simply, and give editors the freedom to publish news and scouting reports in seconds without needing a developer.",

      metrics: [
        {
          label: "CONTENT HUB",
          value: "Editor Friendly",
        },
        {
          label: "SEARCH SPEED",
          value: "Instant",
        },
        {
          label: "PAGE SPEED",
          value: "Top Tier (95+)",
        },
      ],
    },

    techStack: [
      {
        name: "Next.js",
        icon: "terminal",
      },
      {
        name: "TypeScript",
        icon: "terminal",
      },
      {
        name: "Sanity CMS",
        icon: "database",
      },
      {
        name: "Tailwind CSS",
        icon: "palette",
      },
      {
        name: "Chart.js",
        icon: "bar_chart",
      },
      {
        name: "Vercel",
        icon: "cloud",
      },
    ],

    solutionDetails: {
      description:
        "Built a streamlined website where editors can easily add articles, player bios, and stats. Visitors enjoy instant search, beautiful charts, and lightning-fast loading on mobile and desktop.",

      bullets: [
        "Instant player search and filtering by team and position",
        "Easy-to-use editor dashboard for publishing articles without coding",
        "Visual performance charts that make stats easy to understand",
        "Optimized for search engines (SEO) to attract organic readers",
        "Ultra-fast page loads on mobile phones and tablets",
      ],

      diagramSrc: "/images/deduction.webp",
      diagramAlt: "Deduction platform workflow.",
      metricLabel: "SEARCH & LOAD SPEED",
      metricValue: "Instant (<0.5s)",
    },

    measuredImpact: [
      {
        value: "95+",
        label: "Page Speed Score",
      },
      {
        value: "Instant",
        label: "Player Search",
      },
      {
        value: "100%",
        label: "Mobile Responsive",
      },
      {
        value: "0",
        label: "Coding Needed by Editors",
      },
    ],

    engineeringHighlights: [
      "Built an easy content management system so editorial staff publish effortlessly.",
      "Engineered instant search allowing readers to find players and stats immediately.",
      "Created clean visual graphs that turn complex statistics into clear charts.",
      "Optimized images and pages for fast loading on mobile networks.",
      "Structured pages for top Google search visibility (SEO).",
    ],

    architectureHighlights: [
      "Frontend → Next.js (Fast Loading Web)",
      "Content Management → Headless Editorial Studio",
      "Visualizations → Interactive Charts",
      "Hosting → High-Speed Global Cloud",
    ],

    testimonial: {
      quote:
        "Deduction brings professional sports analytics and storytelling together into a fast, beautiful platform that both fans and scouts love exploring.",
      avatar: "",
      name: "Portfolio Case Study",
      role: "Technical Showcase",
    },

    projectUrl: "https://www.deduction.com.ng/",
    nextProjectSlug: "digital-readiness",
  },
  {
    slug: "client-pulse",
    title: "ClientPulse",
    category: ["web", "saas"],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Client Portal",
      "Productivity SaaS",
      "Tailwind CSS",
    ],
    alt: "ClientPulse SaaS dashboard showing project timelines, client updates, public project sharing, and freelancer workflow management.",
    src: "/images/client-pulse-bg.webp",

    challenge:
      "Freelancers and agencies spend too much time repeating project updates across WhatsApp, email, and texts, leading to miscommunication and frustrated clients.",

    solution:
      "Created an effortless project portal where professionals post updates to a clean timeline and share a single link with clients—no logins or app downloads required.",

    subtitle:
      "A communication-first client portal that transforms scattered project updates into a professional, shareable timeline.",

    badges: ["CLIENT PORTAL", "WORKFLOW SAAS"],

    stats: {
      timeline: "8 Weeks",
      role: "Solo Full Stack Developer",
      services: "Product Design & Full Stack Development",
      client: "Personal Product",
    },

    challengeDetails: {
      description:
        "Clients just want to know how their project is progressing without having to create yet another account or navigate complex project management software. Professionals need a quick, organized way to demonstrate progress and build trust.",

      metrics: [
        {
          label: "CLIENT SIGNUP",
          value: "Zero Friction (No Login)",
        },
        {
          label: "SETUP TIME",
          value: "<2 Minutes",
        },
        {
          label: "SHAREABLE LINK",
          value: "1 Secure Link",
        },
      ],
    },

    techStack: [
      {
        name: "Next.js",
        icon: "terminal",
      },
      {
        name: "React",
        icon: "terminal",
      },
      {
        name: "TypeScript",
        icon: "terminal",
      },
      {
        name: "Tailwind CSS",
        icon: "palette",
      },
      {
        name: "Supabase",
        icon: "database",
      },
      {
        name: "Vercel",
        icon: "cloud",
      },
    ],

    solutionDetails: {
      description:
        "ClientPulse removes the friction of client communication. Freelancers post updates and milestones, and clients click one secure link to view real-time progress on any phone or computer.",

      bullets: [
        "Zero client onboarding—clients simply click the link to see updates",
        "Clean visual timeline of all project milestones and attachments",
        "Organized project updates in one place instead of lost emails",
        "Professional presentation that builds client trust and confidence",
        "Instant 2-minute setup for new client projects",
      ],

      diagramSrc: "/images/client-pulse.webp",
      diagramAlt: "ClientPulse platform workflow.",
      metricLabel: "CLIENT ONBOARDING",
      metricValue: "0 Clicks (Instant Access)",
    },

    measuredImpact: [
      {
        value: "1 Link",
        label: "Shared With Clients",
      },
      {
        value: "0",
        label: "Client Accounts Required",
      },
      {
        value: "<2 min",
        label: "Project Setup Time",
      },
      {
        value: "100%",
        label: "Mobile-Friendly Timeline",
      },
    ],

    engineeringHighlights: [
      "Designed a zero-friction client experience requiring no password or registration.",
      "Built secure, private link sharing for confidential project timelines.",
      "Developed a fast, responsive dashboard for managing multiple client projects.",
      "Optimized instant page loading so timelines open immediately on mobile.",
      "Organized file attachments, links, and milestones into a clear chronological feed.",
    ],

    architectureHighlights: [
      "Frontend → Next.js (Fast Web Portal)",
      "Database → Secure Cloud Storage",
      "Security → Encrypted Share Links",
      "Hosting → Global Cloud Deployment",
    ],

    testimonial: {
      quote:
        "ClientPulse completely eliminates the 'where are we on this?' emails. Clients love the clear live timeline, and it makes project communication effortless.",
      avatar: "",
      name: "Portfolio Case Study",
      role: "Technical Showcase",
    },

    projectUrl: "https://clientpulse-jet.vercel.app/",
    nextProjectSlug: "gkai",
  },
  {
    slug: "olan-and-johnson",
    title: "Olan & Johnson",
    category: ["web", "branding"],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Brand Showcase",
      "SEO Ready",
    ],
    alt: "Premium corporate website showcasing luxury branding projects, interactive case studies, and immersive visual storytelling for Olan & Johnson.",
    src: "/images/olan-bg.webp",

    challenge:
      "Creating a prestigious corporate website that reflects the high quality of Olan & Johnson's luxury branding work while making it easy for prospective clients to explore completed projects.",

    solution:
      "Designed and developed a fast, elegant website centered on compelling visual storytelling and smooth navigation, making it easy for enterprise clients to reach out and inquire.",

    subtitle:
      "A premium digital showcase highlighting luxury retail experiences, environmental branding, and large-scale corporate projects.",

    badges: ["PREMIUM WEBSITE", "BRAND SHOWCASE"],

    stats: {
      timeline: "5 Weeks",
      role: "Lead Frontend Developer",
      services: "Frontend Development & UI Engineering",
      client: "Olan & Johnson",
    },

    challengeDetails: {
      description:
        "Olan & Johnson needed a digital presence that matched their real-world reputation for luxury branding, corporate events, and experiential design. The website needed to feel high-end, load instantly, and turn visitors into project inquiries.",

      metrics: [
        {
          label: "DESIGN QUALITY",
          value: "Premium Executive",
        },
        {
          label: "DEVICE SUPPORT",
          value: "Flawless on Mobile",
        },
        {
          label: "CONVERSION",
          value: "Fast Inquiries",
        },
      ],
    },

    techStack: [
      {
        name: "Next.js",
        icon: "terminal",
      },
      {
        name: "TypeScript",
        icon: "terminal",
      },
      {
        name: "Tailwind CSS",
        icon: "palette",
      },
      {
        name: "Framer Motion",
        icon: "animation",
      },
      {
        name: "Vercel",
        icon: "cloud",
      },
    ],

    solutionDetails: {
      description:
        "Built a sleek, high-performing website with smooth page transitions, clear service presentations, and an intuitive project gallery that highlights client achievements.",

      bullets: [
        "Elegant visual storytelling that elevates brand prestige",
        "Interactive portfolio showcasing completed installations and campaigns",
        "Fast page loading that never keeps high-value clients waiting",
        "Simple, prominent inquiry forms to generate new client leads",
        "Beautiful presentation on mobile phones, tablets, and wide screens",
      ],

      diagramSrc: "/images/olan.webp",
      diagramAlt: "Olan & Johnson digital showcase workflow.",
      metricLabel: "PAGE SPEED & QUALITY",
      metricValue: "Top Tier (95+)",
    },

    projectGallery: [
      {
        title: "Hero Experience",
        image: "/images/olan-bg.webp",
      },
      {
        title: "Featured Projects",
        image: "/images/olan.webp",
      },
      {
        title: "Services Section",
        image: "/images/olan-bg.webp",
      },
      {
        title: "Responsive Mobile Layout",
        image: "/images/olan.webp",
      },
    ],

    measuredImpact: [
      {
        value: "100%",
        label: "Responsive on All Devices",
      },
      {
        value: "95+",
        label: "Page Speed Score",
      },
      {
        value: "Fast",
        label: "Client Inquiries",
      },
      {
        value: "Premium",
        label: "Executive Presentation",
      },
    ],

    engineeringHighlights: [
      "Crafted a sophisticated layout system matching executive luxury standards.",
      "Engineered smooth, subtle page transitions for a fluid browsing experience.",
      "Optimized high-resolution visuals to load quickly without slowing down phones.",
      "Structured pages for search engines (SEO) to capture corporate inquiries.",
      "Implemented intuitive contact pathways to maximize client inquiries.",
    ],

    architectureHighlights: [
      "Frontend → Next.js (Fast Loading)",
      "Styling → Modern Design System",
      "Motion → Smooth Interactive Transitions",
      "Hosting → High-Performance Cloud",
    ],

    testimonial: {
      quote:
        "The website communicates our prestige and attention to detail from the first glance, making it easy for prospective clients to understand our work and get in touch.",
      avatar: "",
      name: "Portfolio Case Study",
      role: "Frontend Engineering Showcase",
    },

    projectUrl: "https://olanandjohnson-site.netlify.app/",
    nextProjectSlug: "deduction",
  },
];
