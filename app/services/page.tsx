import type { Metadata } from "next";
import ServiceHero from "@/app/Pages/services/ServiceHero";
import ServiceProcess from "@/app/Pages/services/ServiceProcess";
import ServiceCTA from "../Pages/services/ServiceCTA";

export const metadata: Metadata = {
  title: "Engineering Services | Web Platforms, Mobile Apps & AI Systems",
  description:
    "Explore our core digital engineering services: high-performance web development, mobile applications, full-stack systems, and AI-powered automation workflows.",
  alternates: {
    canonical: "/services",
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
