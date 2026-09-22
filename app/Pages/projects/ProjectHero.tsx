const ProjectHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-16 md:pt-28 md:pb-20 border-b border-[#1B2727]">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101718] border border-[#1B2727] mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-[#12C887] animate-pulse"></span>
          <span className="text-xs font-mono-code text-[#12C887] uppercase tracking-wider font-semibold">
            CLIENT PORTFOLIO
          </span>
        </div>
        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          Selected works in{" "}
          <span className="text-[#12C887]">digital engineering</span> and
          software.
        </h1>
        <p className="text-base md:text-lg text-[#8A999A] font-light leading-relaxed max-w-2xl">
          A showcase of high-performance web applications, intelligent AI
          automations, and interactive digital experiences engineered to help
          businesses scale reliably.
        </p>
        <div className="mt-8 flex flex-wrap gap-8 pt-6 border-t border-[#1B2727] font-mono-code text-xs">
          <div>
            <div className="text-[#8A999A]">HIGH CAPACITY</div>
            <div className="text-lg font-bold text-white mt-0.5 tracking-tight">
              Built to{" "}
              <span className="text-[#12C887] text-xs font-normal">Scale</span>
            </div>
          </div>
          <div>
            <div className="text-[#8A999A]">GLOBAL SPEED</div>
            <div className="text-lg font-bold text-white mt-0.5 tracking-tight">
              Instant{" "}
              <span className="text-[#12C887] text-xs font-normal">
                Response
              </span>
            </div>
          </div>
          <div>
            <div className="text-[#8A999A]">RELIABILITY</div>
            <div className="text-lg font-bold text-white mt-0.5 tracking-tight">
              99.9%{" "}
              <span className="text-[#12C887] text-xs font-normal">Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
