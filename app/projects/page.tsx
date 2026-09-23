import type { Metadata } from "next";
import ProjectHero from "@/app/Pages/projects/ProjectHero";
import ProjectGrid from "@/app/Pages/projects/ProjectGrid";
import ProjectCTA from "@/app/Pages/projects/ProjectCTA";

export const metadata: Metadata = {
  title: "Selected Works & Engineering Case Studies",
  description:
    "Explore our portfolio of high-concurrency web platforms, mobile applications, and intelligent AI automation workflows engineered by LBD Digital Hub.",
  keywords: [
    "LBD Digital Hub projects",
    "software engineering case studies",
    "web platform portfolio",
    "mobile app case studies",
    "AI systems portfolio",
    "Next.js projects",
    "production software architectures",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Selected Works & Engineering Case Studies | LBD Digital Hub",
    description:
      "Explore our portfolio of high-concurrency web platforms, mobile applications, and intelligent AI automation workflows.",
    url: "/projects",
    siteName: "LBD Digital Hub",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LBD Digital Hub Selected Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Works & Engineering Case Studies | LBD Digital Hub",
    description:
      "Explore our portfolio of high-concurrency web platforms, mobile applications, and intelligent AI automation workflows.",
    images: ["/og-image.jpg"],
    creator: "@danibholie",
    site: "@danibholie",
  },
};

export default function ProjectsPage() {
  return (
    <main className="tech-grid-pattern min-h-screen">
      <ProjectHero />
      <ProjectGrid />
      <ProjectCTA />
    </main>
  );
}
