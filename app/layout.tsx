import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const viewport: Viewport = {
  themeColor: "#080D0E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://lbddigitalhub.com",
  ),
  title: {
    template: "%s | LBD Digital Hub",
    default: "LBD Digital Hub — Web Platforms, Mobile Apps & AI Systems",
  },
  description:
    "LBD Digital Hub is a technical digital practice that engineers high-performance websites, mobile applications, and intelligent AI automation workflows for businesses and organizations.",
  keywords: [
    "LBD Digital Hub",
    "web development",
    "mobile app development",
    "AI automation",
    "software engineering",
    "Next.js development",
    "React Native apps",
    "cloud architecture",
    "digital agency",
    "business automation",
    "full-stack development",
  ],
  authors: [
    {
      name: "Lambe Boluwatife",
      url: "https://lbddigitalhub.com",
    },
  ],
  creator: "Lambe Boluwatife",
  publisher: "LBD Digital Hub",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "LBD Digital Hub — Web Platforms, Mobile Apps & AI Systems",
    description:
      "Engineering modern websites, mobile applications, and intelligent AI workflows built for speed, scalability, and business growth.",
    url: "https://lbddigitalhub.com",
    siteName: "LBD Digital Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LBD Digital Hub — Web Platforms, Mobile Apps & AI Systems",
    description:
      "Engineering modern websites, mobile applications, and intelligent AI workflows built for speed, scalability, and business growth.",
    creator: "@danibholie",
    site: "@danibholie",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://lbddigitalhub.com/#organization",
        name: "LBD Digital Hub",
        url: "https://lbddigitalhub.com",
        logo: "https://lbddigitalhub.com/icon.png",
        description:
          "Digital engineering practice delivering high-performance web applications, mobile apps, and intelligent AI automation workflows.",
        email: "contact@lbddigitalhub.com",
        founder: {
          "@type": "Person",
          name: "Lambe Boluwatife",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://lbddigitalhub.com/#website",
        url: "https://lbddigitalhub.com",
        name: "LBD Digital Hub",
        publisher: {
          "@id": "https://lbddigitalhub.com/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en" className="h-full antialiased dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden selection:bg-[#12C887]/20 selection:text-[#12C887] min-h-screen flex flex-col bg-[#080D0E] text-[#DFE3E4]">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
