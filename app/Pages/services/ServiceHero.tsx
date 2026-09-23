import {
  Bot,
  GitFork,
  Terminal,
  Layers,
  Smartphone,
  LayoutGrid,
  Component,
  ShieldCheck,
} from "lucide-react";

const ServiceHero = () => {
  return (
    <section className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-24 pb-20 md:pt-32 md:pb-28">
      {/* <!-- Subtle Grid Backdrop Accent --> */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"></div>
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-border-dark bg-surface font-mono text-xs tracking-wider text-primary mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="uppercase">
            Our Core Capabilities
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-on-surface mb-6 leading-[1.08]">
          Architecting the future of
          <span className="text-primary font-semibold">
            {" "}
            Digital Performance.
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl font-normal leading-relaxed mb-10">
          From generative AI workflows to fault-tolerant SaaS architectures, we
          deliver high-velocity technical foundations built for rigorous
          enterprise standards.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <span className="text-primary">▸</span> Enterprise Scale
          </span>
          <span className="text-border-light">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-primary">▸</span> AI Automation
          </span>
          <span className="text-border-light">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-primary">▸</span> High Performance
          </span>
        </div>
      </div>
      {/* <!-- Bento Grid Services --> */}
      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-gutter mt-20"
        id="services"
      >
        {/* AI Integration — Workflows & Agents (Large Featured Card) */}
        <div className="md:col-span-8 arch-card p-8 md:p-10 rounded-lg relative overflow-hidden flex flex-col justify-between group">
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Bot className="w-8 h-8 text-primary" />
                <span className="font-mono text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded">
                  AUTONOMOUS SYSTEM
                </span>
              </div>
              <span className="font-mono text-xs text-on-surface-variant/70 uppercase">
                SRV-01 // AI CORE
              </span>
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-on-surface mb-4">
              AI Integration — Workflows &amp; Autonomous Agents
            </h3>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
              AI-powered workflows and agents that automate repetitive tasks and
              help your business work smarter.
            </p>
            {/* <!-- Technical Specs / Architecture Blocks --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pt-6 border-t border-border-dark">
              <div className="space-y-3">
                <div className="font-mono text-xs uppercase tracking-wider text-primary font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-sm"></span>
                  System Deliverables
                </div>
                <ul className="space-y-2 text-xs font-mono text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">›</span> Custom-tailored AI
                    agents
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">›</span> Secure business data
                    integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">›</span> Continuous
                    reliability &amp; validation
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="font-mono text-xs uppercase tracking-wider text-primary font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-sm"></span>
                  Architectural Performance
                </div>
                <ul className="space-y-2 text-xs font-mono text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">›</span> Significant
                    reduction in manual work
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">›</span> Fast intelligent
                    responses
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">›</span> Seamless system
                    synchronization
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Clean Geometric Circuit Architecture Block (Replaces 3D/generic glowing images) */}
          <div className="border border-border-dark bg-surface-container/90 rounded p-4 font-mono text-[11px] text-on-surface-variant">
            <div className="flex items-center justify-between text-xs text-on-surface mb-2 pb-1 border-b border-border-dark">
              <span className="flex items-center gap-2 font-semibold">
                <GitFork className="w-3.5 h-3.5 text-primary" />
                PIPELINE SCHEMA
              </span>
              <span className="text-primary font-mono text-[10px] uppercase">
                STATE: ACTIVE
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:gap-3 py-1 text-[11px]">
              <span className="px-2 py-1 bg-surface-container-high border border-border-dark rounded text-on-surface">
                Your Data
              </span>
              <span className="text-primary">──►</span>
              <span className="px-2 py-1 bg-surface-container-high border border-border-dark rounded text-on-surface">
                Smart Processing
              </span>
              <span className="text-primary">──►</span>
              <span className="px-2 py-1 bg-primary/10 border border-primary/40 rounded text-primary font-medium">
                AI Workflow
              </span>
              <span className="text-primary">──►</span>
              <span className="px-2 py-1 bg-surface-container-high border border-border-dark rounded text-on-surface">
                Automated Result
              </span>
            </div>
          </div>
        </div>
        {/* Web Development */}
        <div className="md:col-span-4 arch-card p-8 rounded-lg flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <Terminal className="w-8 h-8 text-primary" />
              <span className="font-mono text-xs text-on-surface-variant/70">
                SRV-02
              </span>
            </div>
            <h3 className="font-heading text-xl font-bold text-on-surface mb-3">
              Web Development
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              Professional websites and web experiences designed to represent
              your business and help you reach your customers online.
            </p>
          </div>
          <div className="space-y-3 pt-4 border-t border-border-dark">
            <div className="flex items-center justify-between text-xs font-mono py-1.5 border-b border-border-dark/60">
              <span className="text-on-surface-variant">Performance</span>
              <span className="text-primary font-semibold">
                Fast &amp; Responsive
              </span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono py-1.5 border-b border-border-dark/60">
              <span className="text-on-surface-variant">Framework Stack</span>
              <span className="text-on-surface">Next.js App Router</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono py-1.5">
              <span className="text-on-surface-variant">
                Content Infrastructure
              </span>
              <span className="text-on-surface">Headless CMS / Edge</span>
            </div>
          </div>
        </div>
        {/* <!-- Full-Stack Applications --> */}
        <div className="md:col-span-4 arch-card p-8 rounded-lg flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <Layers className="w-8 h-8 text-primary" />
              <span className="font-mono text-xs text-on-surface-variant/70">
                SRV-03
              </span>
            </div>
            <h3 className="font-heading text-xl font-bold text-on-surface mb-3">
              Full-Stack Applications
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              Complete digital products with the frontend, backend, database and
              systems working together.
            </p>
          </div>
          <div className="pt-4 border-t border-border-dark">
            <div className="font-mono text-xs uppercase text-on-surface-variant mb-3">
              Modular Stack Components
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-surface-container border border-border-dark rounded font-mono text-xs text-on-surface">
                Node / Go
              </span>
              <span className="px-2.5 py-1 bg-surface-container border border-border-dark rounded font-mono text-xs text-on-surface">
                PostgreSQL
              </span>
              <span className="px-2.5 py-1 bg-surface-container border border-border-dark rounded font-mono text-xs text-on-surface">
                Redis Cache
              </span>
              <span className="px-2.5 py-1 bg-surface-container border border-border-dark rounded font-mono text-xs text-on-surface">
                Docker / K8s
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Mobile Apps --> */}
        <div className="md:col-span-4 arch-card p-8 rounded-lg flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <Smartphone className="w-8 h-8 text-primary" />
              <span className="font-mono text-xs text-on-surface-variant/70">
                SRV-04
              </span>
            </div>
            <h3 className="font-heading text-xl font-bold text-on-surface mb-3">
              Mobile Applications
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              Modern mobile applications designed around your users and business
              goals.
            </p>
          </div>
          <ul className="space-y-2 text-xs font-mono text-on-surface-variant pt-4 border-t border-border-dark">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>{" "}
              React Native &amp; Swift engines
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Offline-first SQLite local store
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Smooth, intuitive user experience
            </li>
          </ul>
        </div>
        {/* UI/UX Design (System Specifications) */}
        <div className="md:col-span-4 arch-card p-8 rounded-lg flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <LayoutGrid className="w-8 h-8 text-primary" />
              <span className="font-mono text-xs text-on-surface-variant/70">
                SRV-05
              </span>
            </div>
            <h3 className="font-heading text-xl font-bold text-on-surface mb-3">
              UI/UX Design &amp; Prototyping
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              Intuitive user interfaces, accessible design systems, and responsive user workflows tailored to your target audience.
            </p>
          </div>
          <div className="p-3.5 bg-surface-container rounded border border-border-dark flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
              <Component className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-xs font-semibold text-on-surface font-mono">
                Modern Design Systems
              </div>
              <div className="text-[11px] text-on-surface-variant font-mono">
                Pixel-perfect implementation from design to code
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Maintenance & Engineering Support --> */}
        <div className="md:col-span-12 arch-card p-8 md:p-10 rounded-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 group">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-7 h-7 text-primary" />
              <span className="font-mono text-xs text-primary uppercase tracking-wider">
                06 // ONGOING SUPPORT
              </span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-on-surface mb-2">
              Maintenance &amp; Support
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              We keep your website, application and digital systems running
              smoothly with ongoing monitoring, updates, security and technical
              support.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full lg:w-auto flex-shrink-0">
            <div className="p-4 bg-surface-container border border-border-dark rounded text-center">
              <div className="text-primary font-mono font-bold text-2xl">
                Reliable
              </div>
              <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider mt-1">
                Service Availability
              </div>
            </div>
            <div className="p-4 bg-surface-container border border-border-dark rounded text-center">
              <div className="text-primary font-mono font-bold text-2xl">
                Fast
              </div>
              <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider mt-1">
                Issue Response
              </div>
            </div>
            <div className="p-4 bg-surface-container border border-border-dark rounded text-center col-span-2 sm:col-span-1">
              <div className="text-primary font-mono font-bold text-2xl">
                24 / 7
              </div>
              <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider mt-1">
                System Monitoring
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
