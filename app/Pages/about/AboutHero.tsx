export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-28 pb-16 md:pb-20 px-4 sm:px-6 md:px-12 max-w-container mx-auto">
      <div className="absolute top-10 right-10 -z-10 w-[520px] h-[520px] bg-primary/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#12C887]"></span>
            <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold">
              About LBD Digital Hub
            </span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-light leading-[1.1] mb-6">
            Engineering Modern Software for{" "}
            <span className="text-primary">Ambitious Businesses</span>
          </h1>
          <div className="max-w-xl space-y-6 text-muted leading-relaxed text-base">
            <p>
              LBD Digital Hub is a technical digital studio. We partner with
              forward-thinking founders, growing businesses, and organizations
              to design, build, and scale modern websites, mobile apps, and
              intelligent AI automation systems.
            </p>
            <div className="border-l-2 border-primary/80 pl-5 py-2 bg-surface/40 rounded-r">
              <p className="font-mono text-xs sm:text-sm text-light/90 italic leading-relaxed">
                &ldquo;Great software isn&rsquo;t just about visual design—it&rsquo;s about rock-solid reliability, blazing speed, and building tools that genuinely grow your business.&rdquo;
              </p>
              <span className="block mt-2 font-mono text-[11px] text-muted-dim uppercase tracking-wider">
                — Our Engineering Standard
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="bg-surface border border-border rounded-xl p-6 glow-green relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary/80"></span>
                <span className="font-mono text-xs font-semibold text-light uppercase tracking-wider">
                  System Health &amp; Reliability
                </span>
              </div>
              <span className="font-mono text-[11px] text-mint bg-mint/10 border border-mint/20 px-2 py-0.5 rounded">
                STATUS: 99.9% UPTIME
              </span>
            </div>

            {/* Architecture Pipeline Diagram */}
            <div className="p-4 rounded-lg bg-surface-card border border-border mb-6 font-mono text-xs">
              <div className="flex items-center justify-between text-muted-dim text-[11px] mb-3">
                <span>DEPLOYMENT PIPELINE</span>
                <span className="text-primary font-semibold">PRODUCTION READY</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono mb-3">
                <div className="p-2.5 rounded border border-border bg-graphite text-light">
                  <span className="text-muted-dim block text-[9px]">CONNECT</span>
                  <span className="text-primary font-semibold">Secure APIs</span>
                </div>
                <div className="p-2.5 rounded border border-primary/40 bg-primary/5 text-primary">
                  <span className="text-muted-dim block text-[9px]">ENGINE</span>
                  <span className="text-mint font-semibold">Smart Logic</span>
                </div>
                <div className="p-2.5 rounded border border-border bg-graphite text-light">
                  <span className="text-muted-dim block text-[9px]">DELIVER</span>
                  <span className="text-primary font-semibold">Fast Web &amp; App</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-[11px] text-muted pt-2 border-t border-border/60">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  High-Speed Architecture
                </span>
                <span className="text-light font-semibold">
                  Fast &amp; Responsive Everywhere
                </span>
              </div>
            </div>

            {/* Quantitative metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-surface-card border border-border">
                <div className="font-headline text-2xl md:text-3xl font-bold text-primary">
                  100%
                </div>
                <div className="font-body text-xs text-muted mt-1 font-medium">
                  Tested Across Platforms
                </div>
              </div>
              <div className="p-4 rounded-lg bg-surface-card border border-border">
                <div className="font-headline text-2xl md:text-3xl font-bold text-light">
                  &lt; 100ms
                </div>
                <div className="font-body text-xs text-muted mt-1 font-medium">
                  Instant Response Times
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
