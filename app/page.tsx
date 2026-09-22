import type { Metadata } from "next";
import CoreServices from "./Pages/Home/CoreServices";
import CTABanner from "./Pages/Home/CTABanner";
import FeaturedProjects from "./Pages/Home/FeaturedProjects";
import Hero from "./Pages/Home/Hero";
import Testimonials from "./Pages/Home/Testimonials";
import TheProcess from "./Pages/Home/TheProcess";
import Trusted from "./Pages/Home/Trusted";

export const metadata: Metadata = {
  title: "LBD Digital Hub — High-Performance Web, Mobile Apps & AI Systems",
  description:
    "We partner with ambitious founders, businesses, and organizations to engineer modern websites, mobile applications, and intelligent AI automation workflows.",
  alternates: {
    canonical: "/",
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
