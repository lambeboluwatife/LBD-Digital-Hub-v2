import type { Metadata } from "next";
import ContactHero from "@/app/Pages/contact/ContactHero";
import ContactSection from "@/app/Pages/contact/ContactSection";
import ContactFAQ from "@/app/Pages/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "Contact Us — Start a Project",
  description:
    "Get in touch with LBD Digital Hub to engineer high-performance web platforms, mobile applications, and AI automation workflows tailored to your business.",
  keywords: [
    "Contact LBD Digital Hub",
    "hire web engineers",
    "mobile app development agency",
    "AI automation consulting",
    "software architecture consultation",
    "schedule project discovery",
    "LBD Digital Hub contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us — Start a Project | LBD Digital Hub",
    description:
      "Partner with our digital technology studio to build modern web applications, mobile products, and AI automation workflows tailored to your business.",
    url: "/contact",
    siteName: "LBD Digital Hub",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact LBD Digital Hub — Start a Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Start a Project | LBD Digital Hub",
    description:
      "Partner with our digital technology studio to build modern web applications, mobile products, and AI automation workflows tailored to your business.",
    images: ["/og-image.jpg"],
    creator: "@danibholie",
    site: "@danibholie",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact LBD Digital Hub",
    description:
      "Get in touch with LBD Digital Hub for digital engineering, mobile applications, and AI automation workflows.",
    url: "https://lbddigitalhub.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "LBD Digital Hub",
      url: "https://lbddigitalhub.com",
      email: "contact@lbddigitalhub.com",
      founder: {
        "@type": "Person",
        name: "Lambe Boluwatife",
      },
    },
  };

  return (
    <main className="grid-bg relative overflow-hidden min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactHero />
      <ContactSection />
      <ContactFAQ />
    </main>
  );
}
