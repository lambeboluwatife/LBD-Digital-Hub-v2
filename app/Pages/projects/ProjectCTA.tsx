import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ProjectCTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 pb-28" id="contact">
      <div className="bg-[#101718] border border-[#1B2727] rounded p-8 md:p-14 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#080D0E] border border-[#1B2727] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#12C887] animate-pulse"></span>
          <span className="font-mono-code text-xs text-[#12C887] uppercase tracking-wider font-semibold">
            WORK WITH US
          </span>
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to bring your ideas to life?
        </h2>
        <p className="text-sm md:text-base text-[#8A999A] max-w-xl mx-auto mb-8 font-light leading-relaxed">
          We help businesses, brands, and organizations build modern websites,
          mobile apps, and smart tools that attract customers and make everyday
          work easier. Let&apos;s talk about what you need.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded bg-[#12C887] text-[#080D0E] font-medium text-sm tracking-wide hover:bg-[#10b378] transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(18,200,135,0.2)] font-semibold"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-3.5 rounded bg-[#080D0E] border border-[#1B2727] text-white font-medium text-sm hover:border-[#12C887]/60 transition-colors flex items-center justify-center"
          >
            VIEW OUR SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;
