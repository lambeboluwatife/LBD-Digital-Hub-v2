import type { Metadata } from "next";
import CoreServices from "./Pages/Home/CoreServices";
import CTABanner from "./Pages/Home/CTABanner";
import FeaturedProjects from "./Pages/Home/FeaturedProjects";
import Hero from "./Pages/Home/Hero";
import Testimonials from "./Pages/Home/Testimonials";
import TheProcess from "./Pages/Home/TheProcess";
import Trusted from "./Pages/Home/Trusted";

export const metadata: Metadata = {
  title: {
    absolute:
      "LBD Digital Hub — High-Performance Web, Mobile Apps & AI Systems",
  },
  description:
    "We partner with ambitious founders, businesses, and organizations to engineer modern websites, mobile applications, and intelligent AI automation workflows.",
  keywords: [
    "LBD Digital Hub",
    "digital engineering practice",
    "high-performance web development",
    "mobile app engineering",
    "AI automation workflows",
    "Next.js web applications",
    "React Native development",
    "full-stack software studio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LBD Digital Hub — High-Performance Web, Mobile Apps & AI Systems",
    description:
      "We partner with ambitious founders, businesses, and organizations to engineer modern websites, mobile applications, and intelligent AI automation workflows.",
    url: "/",
    siteName: "LBD Digital Hub",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LBD Digital Hub — High-Performance Web, Mobile Apps & AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LBD Digital Hub — High-Performance Web, Mobile Apps & AI Systems",
    description:
      "We partner with ambitious founders, businesses, and organizations to engineer modern websites, mobile applications, and intelligent AI automation workflows.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Trusted />
      <CoreServices />
      <TheProcess />
      <FeaturedProjects />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
