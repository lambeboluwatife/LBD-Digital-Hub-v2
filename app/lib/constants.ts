export const SITE_NAME = "LBD Digital Hub";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const NAV_LINKS = [
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const SERVICES = [
  { name: "Web Platforms", href: "/services#website-design" },
  { name: "Full-Stack Systems", href: "/services#fullstack-apps" },
  { name: "Mobile Applications", href: "/services#mobile-apps" },
  { name: "AI Automation", href: "/services#ai-agents" },
  { name: "Agentic Workflow Automation", href: "/services#agentic-workflows" },
  { name: "UI/UX Design", href: "/services#ui-ux-design" },
  { name: "Maintenance & Support", href: "/services#maintenance" },
];
