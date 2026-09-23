import type { Metadata } from "next";
import ServiceHero from "@/app/Pages/services/ServiceHero";
import ServiceProcess from "@/app/Pages/services/ServiceProcess";
import ServiceCTA from "../Pages/services/ServiceCTA";

export const metadata: Metadata = {
  title: "Engineering Services — Web Platforms, Mobile Apps & AI Systems",
  description:
    "Explore our core digital engineering services: high-performance web development, mobile applications, full-stack systems, and intelligent AI automation workflows.",
  keywords: [
    "digital engineering services",
    "web development services",
    "mobile app engineering",
    "AI automation systems",
    "agentic workflows",
    "Next.js architecture",
    "React Native development",
    "full-stack cloud applications",
    "LBD Digital Hub services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title:
      "Engineering Services — Web, Mobile & AI Systems | LBD Digital Hub",
    description:
      "High-performance web development, mobile applications, full-stack systems, and AI-powered automation workflows built for scale.",
    url: "/services",
    siteName: "LBD Digital Hub",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LBD Digital Hub Services — Web, Mobile & AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Engineering Services — Web, Mobile & AI Systems | LBD Digital Hub",
    description:
      "High-performance web development, mobile applications, full-stack systems, and AI-powered automation workflows built for scale.",
    images: ["/og-image.jpg"],
    creator: "@danibholie",
    site: "@danibholie",
  },
};

export default function Services() {
  return (
    <div className="relative w-full">
      <ServiceHero />
      <ServiceProcess />
      <ServiceCTA />
    </div>
  );
}
