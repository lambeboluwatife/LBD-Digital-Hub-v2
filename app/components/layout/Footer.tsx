import Link from "next/link";
import Image from "next/image";
import { SITE_NAME, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#080D0E] border-t border-border-tech py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        {/* Brand Info */}
        <div className="sm:col-span-2 md:col-span-5 space-y-4">
          <Link className="inline-block" href="/">
            <Image
              alt="L.B.D Digital Hub"
              className="h-8 w-auto object-contain"
              src="/logo.png"
              width={120}
              height={36}
            />
          </Link>
          <p className="text-text-muted text-sm max-w-sm leading-relaxed font-light">
            Engineering high-performance web platforms, mobile apps, and
            intelligent AI automation workflows that help businesses scale
            reliably.
          </p>
          <div className="flex items-center gap-2 font-mono text-xs text-text-muted pt-2">
            <span className="text-primary font-bold">&gt;</span> Built with
            modern composable primitives.
          </div>
        </div>

        {/* Capabilities */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="font-mono text-xs uppercase tracking-wider text-text-white font-semibold">
            CAPABILITIES
          </h4>
          <ul className="space-y-2 text-sm text-text-muted font-light">
            {SERVICES.slice(0, 4).map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="hover:text-primary transition-colors"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="font-mono text-xs uppercase tracking-wider text-text-white font-semibold">
            COMPANY
          </h4>
          <ul className="space-y-2 text-sm text-text-muted font-light">
            <li>
              <Link
                className="hover:text-primary transition-colors"
                href="/projects"
              >
                Selected Works
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                href="/services"
              >
                Our Services
              </Link>
            </li>
            <li>
              <a
                className="hover:text-primary transition-colors"
                href="/#process"
              >
                Development Process
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary transition-colors"
                href="mailto:contact@lbddigitalhub.com"
              >
                Contact Team
              </a>
            </li>
          </ul>
        </div>

        {/* Practice Areas */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-mono text-xs uppercase tracking-wider text-text-white font-semibold">
            CONNECT
          </h4>
          <ul className="space-y-2 text-sm text-text-muted font-light">
            <li>
              <a
                className="hover:text-primary transition-colors"
                href="mailto:contact@lbddigitalhub.com"
              >
                contact@lbddigitalhub.com
              </a>
            </li>
            <li className="text-xs text-text-dim pt-1 font-mono">
              Remote First • Worldwide Client Delivery
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-border-tech flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-muted text-center sm:text-left">
        <p>
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-text-white">
            System Status: <span className="text-primary font-semibold">Operational</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
