"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open & handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Close menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 w-full z-40 backdrop-blur-xl border-b border-[#1B2727] bg-[#080D0E]/90">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 py-4">
          {/* Brand Logo */}
          <Link className="flex items-center gap-3" href="/">
            <Image
              alt="L.B.D Digital Hub"
              className="h-8 sm:h-9 w-auto object-contain"
              src="/logo.png"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 py-1 ${
                    isActive
                      ? "text-[#12C887] border-b-2 border-[#12C887] font-semibold"
                      : "text-[#8A999A] hover:text-[#12C887]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              className="hidden sm:inline-flex bg-[#12C887] text-[#080D0E] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded hover:bg-[#10b378] active:scale-[0.98] transition-all duration-150 shadow-[0_0_15px_rgba(18,200,135,0.2)]"
              href="/contact"
            >
              Start a Project
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-[#DFE3E4] hover:text-[#12C887] hover:bg-[#101718] border border-[#1B2727] transition-colors focus:outline-none"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Mobile Navigation Overlay - Placed outside header to escape backdrop-filter containing block */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-[#080D0E] flex flex-col justify-between animate-in fade-in duration-150">
          {/* Top Bar matching header */}
          <div className="flex justify-between items-center px-4 sm:px-6 py-4 border-b border-[#1B2727] bg-[#080D0E]">
            <Link
              className="flex items-center gap-3"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              <Image
                alt="L.B.D Digital Hub"
                className="h-8 sm:h-9 w-auto object-contain"
                src="/logo.png"
                width={120}
                height={40}
                priority
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-[#DFE3E4] hover:text-[#12C887] hover:bg-[#101718] border border-[#1B2727] transition-colors focus:outline-none"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Mobile Navigation Content */}
          <div className="flex-1 flex flex-col justify-between p-6 overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#1B2727]">
                <span className="font-mono-code text-xs text-[#8A999A]">
                  NAVIGATION MENU
                </span>
                <div className="flex items-center gap-2 font-mono-code text-[11px] text-[#12C887]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12C887] animate-pulse" />
                  <span>ONLINE // ACTIVE</span>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded text-base font-medium transition-colors ${
                        isActive
                          ? "bg-[#101718] border border-[#12C887]/40 text-[#12C887] font-semibold"
                          : "text-[#DFE3E4] hover:bg-[#101718] hover:text-[#12C887] border border-transparent"
                      }`}
                    >
                      <span className="text-lg font-heading">{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-[#12C887] opacity-80" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Footer & Primary Action */}
            <div className="pt-6 border-t border-[#1B2727] space-y-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 px-4 rounded bg-[#12C887] text-[#080D0E] font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(18,200,135,0.25)] hover:bg-[#10b378] active:scale-[0.99] transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-center font-mono-code text-xs text-[#8A999A]">
                hello@lbddigitalhub.com • Global Engineering Practice
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
