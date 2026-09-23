import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-28 px-6" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="bg-surface border border-border-tech rounded-md p-10 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dense opacity-40 pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 inline-block">
              PRECISION IN DIGITAL ARCHITECTURE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-text-white mb-6 leading-tight">
              Ready to scale your digital infrastructure?
            </h2>
            <p className="text-text-muted text-base sm:text-lg mb-10 leading-relaxed">
              Partner with our digital architecture lab to replace fragmentation
              with high-performance software, modern mobile apps, and autonomous
              workflows.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                className="w-full sm:w-auto bg-primary text-[#080D0E] font-semibold text-base px-8 py-3.5 rounded-md hover:bg-primary-hover transition-all text-center inline-flex items-center justify-center gap-2"
                href="/contact"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                className="w-full sm:w-auto bg-[#080D0E] text-[#F5F7F7] border border-border-tech hover:border-primary/50 text-base font-medium px-8 py-3.5 rounded-md transition-all text-center inline-flex items-center justify-center gap-2"
                href="/contact"
              >
                <Calendar className="w-4 h-4 text-primary" />
                <span>Book a Strategy Call</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
