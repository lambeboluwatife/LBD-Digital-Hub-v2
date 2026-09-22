import { Globe, Smartphone, Layers, Bot } from "lucide-react";

const CoreServices = () => {
  return (
    <section className="py-28 px-6" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary mb-3 block">
              CORE ARCHITECTURES
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-text-white">
              Precision Engineering Services
            </h2>
          </div>
          <p className="text-text-muted text-sm sm:text-base max-w-md">
            Structured digital capabilities designed and executed around
            measurable commercial and technological outcomes.
          </p>
        </div>
        {/* <!-- 4 Pillars Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <!-- Pillar 1 --> */}
          <div className="bg-surface border border-border-tech rounded-md p-7 hover:border-primary/40 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-md bg-[#080D0E] border border-border-tech flex items-center justify-center mb-6 text-primary group-hover:border-primary/40 transition-colors">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase text-text-dim tracking-wider block mb-2">
                01 // PLATFORMS
              </span>
              <h3 className="font-display text-xl font-bold text-text-white mb-3">
                Web Development
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                High-performance websites and web experiences designed around
                business goals. Optimized for speed, core web vitals, and
                conversion engines.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border-tech font-mono text-[11px] text-text-dim">
              <span className="px-2 py-0.5 rounded bg-[#080D0E] border border-border-tech">
                Next.js
              </span>
              <span className="px-2 py-0.5 rounded bg-[#080D0E] border border-border-tech">
                SSR
              </span>
              <span className="px-2 py-0.5 rounded bg-[#080D0E] border border-border-tech">
                Edge CDN
              </span>
            </div>
          </div>
          {/* <!-- Pillar 2 --> */}
          <div className="bg-surface border border-border-tech rounded-md p-7 hover:border-primary/40 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-md bg-[#080D0E] border border-border-tech flex items-center justify-center mb-6 text-primary group-hover:border-primary/40 transition-colors">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase text-text-dim tracking-wider block mb-2">
                02 // CLIENTS
              </span>
              <h3 className="font-display text-xl font-bold text-text-white mb-3">
                Mobile Apps
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                Modern mobile applications designed for real users and
                real-world use cases. Native performance, fluid UX, and
                resilient offline capabilities.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border-tech font-mono text-[11px] text-text-dim">
              <span className="px-2 py-0.5 rounded bg-[#080D0E] border border-border-tech">
                React Native
              </span>
              <span className="px-2 py-0.5 rounded bg-[#080D0E] border border-border-tech">
                iOS / Swift
              </span>
              <span className="px-2 py-0.5 rounded bg-[#080D0E] border border-border-tech">
                Offline Sync
              </span>
            </div>
          </div>
          {/* <!-- Pillar 3 --> */}
          <div className="bg-surface border border-border-tech rounded-md p-7 hover:border-primary/40 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-md bg-[#080D0E] border border-border-tech flex items-center justify-center mb-6 text-primary group-hover:border-primary/40 transition-colors">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase text-text-dim tracking-wider block mb-2">
                03 // SYSTEMS
              </span>
              <h3 className="font-display text-xl font-bold text-text-white mb-3">
                Full-Stack Applications
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                Complete digital products combining scalable frontend, backend,
                APIs and data systems engineered for mission-critical
                reliability.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border-tech font-mono text-[11px] text-text-dim">
              <span className="px-2 py-0.5 rounded bg-[#080D0E] border border-border-tech">
                Node / Go
              </span>
              <span className="px-2 py-0.5 rounded bg-[#080D0E] border border-border-tech">
                PostgreSQL
              </span>
              <span className="px-2 py-0.5 rounded bg-[#080D0E] border border-border-tech">
                REST / GraphQL
              </span>
            </div>
          </div>
          {/* <!-- Pillar 4 --> */}
          <div className="bg-surface border border-border-tech rounded-md p-7 hover:border-primary/40 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-md bg-[#080D0E] border border-border-tech flex items-center justify-center mb-6 text-primary group-hover:border-primary/40 transition-colors">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase text-text-dim tracking-wider block mb-2">
                04 // AUTOMATION
              </span>
              <h3 className="font-display text-xl font-bold text-text-white mb-3">
                AI Integration
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                AI-powered agents, automation workflows and intelligent systems
                that reduce repetitive work and improve business processes.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border-tech font-mono text-[11px] text-text-dim">
              <span className="px-2 py-0.5 rounded bg-[#080D0E] border border-border-tech">
                LLM Workflows
              </span>
              <span className="px-2 py-0.5 rounded bg-[#080D0E] border border-border-tech">
                Autonomous Agents
              </span>
              <span className="px-2 py-0.5 rounded bg-[#080D0E] border border-border-tech">
                Vector Search
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
