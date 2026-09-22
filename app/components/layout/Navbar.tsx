"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 w-full z-50 backdrop-blur-xl border-b border-border-tech bg-[#080D0E]/85">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <Link className="flex items-center gap-3" href="/">
          <Image
            alt="L.B.D Digital Hub"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfWGEECV97VywkNPoMhbc0daWCiwXjm-0wTXleUTBwJ2IJFhT1lPQ3pf3eBAQckqAfhRTPXoeCunpZY29_vaNdNgB5fgriXYmYzln9SPpDDn8FtJbWlPw5SgmYF47N0JL2RQ6qzIt5l-zh17H24FgXshNU4bcMMs5QIAqqT6su5r0136IdYuQdkea05qtE2p0zNM0rk6WG8g8UTjKPZqThGv9AGulnVoRpD_XgF3B4FUDF0QKBAJsWpDO3j7Tdw1Aj-A"
            width={100}
            height={100}
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-text-white text-sm font-medium hover:text-primary transition-colors duration-200 ${
                  isActive
                    ? "border-b-2 border-primary text-primary"
                    : "text-on-surface-variant hover:text-tertiary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <Link
            className="bg-primary text-[#080D0E] font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-primary-hover active:scale-[0.98] transition-all duration-150"
            href="/contact"
          >
            Start a Project
          </Link>
          <button
            className="md:hidden text-on-surface"
            aria-label="Open navigation menu"
            title="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
