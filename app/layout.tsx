import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    template: "%s | LBD Digital Hub",
    default:
      "LBD Digital Hub - Building a digital and online presence for Businesses, Organizations and Institutions.",
  },
  description:
    "LBD Digital Hub is a web development company that builds websites, mobile apps, AI agents, and agentic workflows for Businesses, Organizations and Institutions.",
  keywords: [
    "LBD Digital Hub",
    "website development",
    "businesses",
    "organizations",
    "institutions",
    "client communication",
    "project management",
    "mobile apps",
    "ai agents",
    "agentic workflows",
    "fullstack apps",
    "vercel",
    "next.js",
    "react native",
    "openai",
    "typescript",
    "javascript",
    "web development",
  ],
  appleWebApp: {
    title: "LBD Digital Hub",
  },
  authors: [
    {
      name: "Lambe Boluwatife",
      // url: "https://yourwebsite.com",
    },
  ],
  creator: "Lambe Boluwatife",
  publisher: "Lambe Boluwatife",
  robots: {
    index: true,
    follow: true,
    nocache: true,
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
    title:
      "LBD Digital Hub - Building a digital and online presence for Businesses, Organizations and Institutions.",
    description:
      "LBD Digital Hub is a web development company that builds websites, mobile apps, AI agents, and agentic workflows for Businesses, Organizations and Institutions.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName:
      "LBD Digital Hub - Building a digital and online presence for Businesses, Organizations and Institutions.",
    type: "website",
    images: [
      {
        url: "/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "LBD Digital Hub - Building a digital and online presence for Businesses, Organizations and Institutions.",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "LBD Digital Hub - Building a digital and online presence for Businesses, Organizations and Institutions.",
    description:
      "LBD Digital Hub is a web development company that builds websites, mobile apps, AI agents, and agentic workflows for Businesses, Organizations and Institutions.",
    creator: "@danibholie",
    site: "@danibholie",
    images: [
      {
        url: "/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "LBD Digital Hub - Building a digital and online presence for Businesses, Organizations and Institutions.",
        type: "image/webp",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="overflow-x-hidden selection:bg-[#12C887]/20 selection:text-[#12C887]">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
