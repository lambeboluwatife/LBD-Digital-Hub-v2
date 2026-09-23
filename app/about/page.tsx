import type { Metadata } from "next";
import AboutHero from "@/app/Pages/about/AboutHero";
import Philosphy from "@/app/Pages/about/Philosphy";
import Arsenal from "@/app/Pages/about/Arsenal";
import TheArchitects from "@/app/Pages/about/TheArchitects";
import AboutCTA from "@/app/Pages/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us — Digital Engineering, Mobile Apps & AI Automation",
  description:
    "Learn about LBD Digital Hub. We partner with founders, businesses, and organizations to engineer modern web platforms, mobile apps, and intelligent AI automation workflows.",
  keywords: [
    "About LBD Digital Hub",
    "digital engineering agency",
    "software engineering studio",
    "web development team",
    "mobile app developers",
    "AI automation systems",
    "Next.js engineering",
    "Lambe Boluwatife",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us — LBD Digital Hub",
    description:
      "Engineering modern websites, mobile applications, and intelligent AI workflows built for speed, scalability, and business growth.",
    url: "/about",
    siteName: "LBD Digital Hub",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About LBD Digital Hub — Digital Engineering, Mobile Apps & AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — LBD Digital Hub",
    description:
      "Engineering modern websites, mobile applications, and intelligent AI workflows built for speed, scalability, and business growth.",
    images: ["/og-image.jpg"],
    creator: "@danibholie",
    site: "@danibholie",
  },
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <AboutHero />
      <Philosphy />
      <Arsenal />
      <TheArchitects />
      <AboutCTA />
    </div>
  );
}
