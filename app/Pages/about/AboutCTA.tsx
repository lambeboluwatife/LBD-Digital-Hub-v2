import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 max-w-container mx-auto">
      <div className="relative bg-surface border border-primary/30 rounded-2xl p-8 sm:p-12 md:p-16 text-center overflow-hidden glow-green">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold block mb-4">
            Start Your Next Project
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-light mb-6 leading-tight">
            Ready to build with us?
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Whether you need a new website, a custom mobile app, or intelligent
            AI automation, we are ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-mono text-xs uppercase tracking-wider">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-mint text-graphite font-bold rounded shadow-md hover:shadow-[0_0_20px_rgba(24,214,160,0.5)] transition-all text-center"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-graphite border border-border hover:border-primary/50 text-light font-semibold rounded transition-all text-center hover:text-white"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
