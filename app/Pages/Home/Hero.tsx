import Link from "next/link";
import {
  Globe,
  Layers,
  Bot,
  Server,
  Zap,
  Activity,
  ShieldCheck,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-28 px-6 blueprint-grid border-b border-border-tech/80">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* <!-- Positioning Badge --> */}
        <div className="mb-8 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-border-tech">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-mono text-[11px] font-medium tracking-widest text-text-white uppercase">
            PRECISION IN DIGITAL ARCHITECTURE
          </span>
        </div>
        {/* <!-- Main Headline --> */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-white max-w-5xl leading-[1.08] mb-8">
          Building Digital Experiences <br className="hidden sm:inline" />
          That
          <span className="text-primary font-bold"> Grow Businesses.</span>
        </h1>
        {/* <!-- Subtitle --> */}
        <p className="font-body text-base sm:text-lg lg:text-xl text-text-muted max-w-3xl mb-10 leading-relaxed">
          We design and engineer high-performance web platforms, modern mobile
          applications, full-stack architectures, and AI-powered automation
          workflows that solve real business problems.
        </p>
        {/* <!-- CTAs --> */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full sm:w-auto">
          <Link
            className="w-full sm:w-auto bg-primary text-[#080D0E] font-semibold text-base px-7 py-3.5 rounded-md hover:bg-primary-hover transition-all text-center"
            href="/contact"
          >
            Start a Project
          </Link>
          <Link
            className="w-full sm:w-auto bg-[#101718] text-[#F5F7F7] border border-[#1B2727] hover:border-primary/50 text-base font-medium px-7 py-3.5 rounded-md transition-all text-center"
            href="/projects"
          >
            Explore Our Work
          </Link>
        </div>
        {/* <!-- HERO VISUAL: Abstract Architectural Blueprint / Digital Architecture System --> */}
        <div className="w-full max-w-6xl mx-auto bg-surface border border-border-tech rounded-md p-6 lg:p-8 relative overflow-hidden shadow-2xl">
          {/* <!-- Blueprint Grid Background overlay inside canvas --> */}
          <div className="absolute inset-0 blueprint-grid-dense opacity-60 pointer-events-none"></div>
          {/* <!-- Terminal Header --> */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-border-tech text-xs font-mono text-text-muted relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1B2727] border border-border-tech"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#1B2727] border border-border-tech"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#1B2727] border border-border-tech"></span>
              </div>
              <span className="text-text-white font-medium">
                DIGITAL SYSTEMS // BUILT TO PERFORM
              </span>
              <span className="text-border-tech">|</span>
              <span className="text-text-dim">
                Reliable digital infrastructure designed around your business
                needs
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="text-text-white">
                  System Status:
                  <span className="text-primary font-semibold">Ready</span>
                </span>
              </div>
              <span className="hidden sm:inline text-text-muted">
                <span className="text-text-white">Fast Response</span>
              </span>
              <span className="hidden sm:inline text-text-muted">
                <span className="text-text-white">Reliable Performance</span>
              </span>
            </div>
          </div>
          {/* <!-- Node Blueprint Map --> */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {/* <!-- Node 1: Edge & Client Layer --> */}
            <div className="bg-[#080D0E]/90 border border-border-tech rounded-md p-5 text-left relative flex flex-col justify-between group hover:border-primary/50 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-primary uppercase flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5" />
                    01 // DIGITAL EXPERIENCE
                  </span>
                  <span className="text-[10px] font-mono text-text-dim">
                    Optimized
                  </span>
                </div>
                <h3 className="font-display font-semibold text-text-white text-base mb-1">
                  Web &amp; App Experience
                </h3>
                <p className="text-xs text-text-muted font-body mb-4">
                  Fast, responsive websites and applications designed to work
                  smoothly across devices.
                </p>
              </div>
              <div className="pt-3 border-t border-border-tech/80 flex items-center justify-between text-[11px] font-mono text-text-dim">
                <span className="">Web / Mobile / Responsive</span>
                <span className="text-primary font-semibold">
                  Built for your users
                </span>
              </div>
            </div>
            {/* <!-- Node 2: API & Logic Engine --> */}
            <div className="bg-[#080D0E]/90 border border-border-tech rounded-md p-5 text-left relative flex flex-col justify-between group hover:border-primary/50 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-primary uppercase flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    02 // BUSINESS SYSTEMS
                  </span>
                  <span className="text-[10px] font-mono text-text-dim">
                    Seamless
                  </span>
                </div>
                <h3 className="font-display font-semibold text-text-white text-base mb-1">
                  Business Applications
                </h3>
                <p className="text-xs text-text-muted font-body mb-4">
                  Reliable systems that connect your users, data and business
                  processes.
                </p>
              </div>
              <div className="pt-3 border-t border-border-tech/80 flex items-center justify-between text-[11px] font-mono text-text-dim">
                <span className="">Reliable Technology</span>
                <span className="text-primary font-semibold">Connected</span>
              </div>
            </div>
            {/* <!-- Node 3: AI Vector & Pipeline --> */}
            <div className="bg-[#080D0E]/90 border border-border-tech rounded-md p-5 text-left relative flex flex-col justify-between group hover:border-primary/50 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-primary uppercase flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5" />
                    03 // AI &amp; AUTOMATION
                  </span>
                  <span className="text-[10px] font-mono text-text-dim">
                    Intelligent
                  </span>
                </div>
                <h3 className="font-display font-semibold text-text-white text-base mb-1">
                  AI Automation &amp; Agents
                </h3>
                <p className="text-xs text-text-muted font-body mb-4">
                  AI-powered workflows and agents that automate repetitive tasks
                  and help your business work smarter.
                </p>
              </div>
              <div className="pt-3 border-t border-border-tech/80 flex items-center justify-between text-[11px] font-mono text-text-dim">
                <span className="">Connected AI Workflows</span>
                <span className="text-primary font-semibold">AI-Powered</span>
              </div>
            </div>
            {/* <!-- Node 4: Persistence Cloud --> */}
            <div className="bg-[#080D0E]/90 border border-border-tech rounded-md p-5 text-left relative flex flex-col justify-between group hover:border-primary/50 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-primary uppercase flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5" />
                    04 // DATA &amp; INFRASTRUCTURE
                  </span>
                  <span className="text-[10px] font-mono text-text-dim">
                    Secure
                  </span>
                </div>
                <h3 className="font-display font-semibold text-text-white text-base mb-1">
                  Secure &amp; Scalable Infrastructure
                </h3>
                <p className="text-xs text-text-muted font-body mb-4">
                  Secure infrastructure and reliable data systems built to
                  support your digital products as they grow.
                </p>
              </div>
              <div className="pt-3 border-t border-border-tech/80 flex items-center justify-between text-[11px] font-mono text-text-dim">
                <span className="">Scalable Cloud</span>
                <span className="text-primary font-semibold">Reliable</span>
              </div>
            </div>
          </div>
          {/* <!-- Telemetry Data Strip --> */}
          <div className="mt-6 pt-5 border-t border-border-tech grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left font-mono">
            <div className="p-3 bg-[#080D0E]/60 border border-border-tech/60 rounded flex flex-col justify-between">
              <span className="text-[10px] uppercase text-text-dim flex items-center justify-between mb-1">
                PERFORMANCE
                <Zap className="w-3.5 h-3.5 text-primary" />
              </span>
              <span className="text-sm font-semibold text-text-white">
                Built for speed
              </span>
            </div>
            <div className="p-3 bg-[#080D0E]/60 border border-border-tech/60 rounded flex flex-col justify-between">
              <span className="text-[10px] uppercase text-text-dim flex items-center justify-between mb-1">
                RELIABILITY
                <Activity className="w-3.5 h-3.5 text-primary" />
              </span>
              <span className="text-sm font-semibold text-text-white">
                Stable connections
              </span>
            </div>
            <div className="p-3 bg-[#080D0E]/60 border border-border-tech/60 rounded flex flex-col justify-between">
              <span className="text-[10px] uppercase text-text-dim flex items-center justify-between mb-1">
                SECURITY
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              </span>
              <span className="text-sm font-semibold text-text-white">
                Data protected
              </span>
            </div>
            <div className="p-3 bg-[#080D0E]/60 border border-border-tech/60 rounded flex flex-col justify-between">
              <span className="text-[10px] uppercase text-text-dim flex items-center justify-between mb-1">
                SYSTEM STATUS
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              </span>
              <span className="text-sm font-semibold text-primary flex items-center gap-1.5">
                Continuously monitored
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
