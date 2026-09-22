import Link from "next/link";
import { Mail } from "lucide-react";
import { SITE_NAME, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border-tech py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        {/* Brand Info */}
        <div className="md:col-span-5">
          <a className="inline-block mb-6" href="#">
            <img
              alt="L.B.D Digital Hub"
              className="h-7 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeSO3b3UIKoM5A0ShZBISqFnIyufchX_PK4z1tBww4yK245Su557ZbOSPJGmC0ROM9AhsrT-2c7cPMZ77RrCX6xBE0J5KLKbGcp62K8PAu2IVhNfe4dT6AKbBw3P3ku7Nq7Map86HHwCAChYIyLtiREUcxaRoIIKIJyGjYoN9cnMg0Xibw-xXAYU_hdrc9XuTP-dIrT9XGfM9Khq9A2ktON27a1RI0dDfwAnQSjfkfYXB7jZmM3yHdpA7cYS3wENN1pA"
            />
          </a>
          <p className="text-text-muted text-sm max-w-sm mb-6 leading-relaxed">
            Architecting high-performance web platforms, mobile solutions, and
            AI automation workflows with engineering rigor and design clarity.
          </p>
          <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
            <span className="text-primary font-bold">&gt;</span> Built with
            modern composable primitives.
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-mono text-xs uppercase tracking-wider text-text-white mb-4">
            CAPABILITIES
          </h4>
          <ul className="space-y-2.5 text-sm text-text-muted">
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

        <div className="md:col-span-2">
          <h4 className="font-mono text-xs uppercase tracking-wider text-text-white mb-4">
            COMPANY
          </h4>
          <ul className="space-y-2.5 text-sm text-text-muted">
            <li className="">
              <Link
                className="hover:text-primary transition-colors"
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li className="">
              <Link
                className="hover:text-primary transition-colors"
                href="/about"
              >
                About
              </Link>
            </li>
            <li className="">
              <Link
                className="hover:text-primary transition-colors"
                href="/blogs"
              >
                Blogs
              </Link>
            </li>
            <li className="">
              <Link
                className="hover:text-primary transition-colors"
                href="/contact"
              >
                Client Scoping
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-mono text-xs uppercase tracking-wider text-text-white mb-4">
            GOVERNANCE
          </h4>
          <ul className="space-y-2.5 text-sm text-text-muted">
            <li className="">
              <Link className="hover:text-primary transition-colors" href="#">
                Privacy Policy
              </Link>
            </li>
            <li className="">
              <Link className="hover:text-primary transition-colors" href="#">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-border-tech flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-muted">
        <p className="">
          © {new Date().getFullYear()} {SITE_NAME}. Precision in Digital
          Architecture.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-text-white">
            System Status: <span className="text-primary">Operational</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
