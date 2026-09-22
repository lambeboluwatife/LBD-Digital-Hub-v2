import { ArrowUpRight } from "lucide-react";

const FeaturedProjects = () => {
  return (
    <section className="py-28 px-6" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary mb-3 block">
              ENGINEERED SYSTEMS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-text-white">
              Featured Architectures
            </h2>
          </div>
          <p className="text-text-muted text-sm sm:text-base max-w-md">
            Engineered production platforms built for speed, complex multi-agent
            workflows, and global business growth.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* <!-- Case Study 1: Nexus Finance --> */}
          <div className="lg:col-span-7 bg-surface border border-border-tech rounded-md overflow-hidden flex flex-col justify-between group hover:border-primary/40 transition-colors">
            <div className="p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-mono text-primary uppercase">
                  FULL-STACK &amp; CLOUD INFRASTRUCTURE
                </span>
                <span className="text-xs font-mono text-text-dim">
                  FINTECH RUNTIME
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-white mb-3 flex items-center justify-between">
                <span>Nexus Finance</span>
                <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6">
                A distributed institutional ecosystem combining real-time order
                ledger streaming, audited smart contract rails, and multi-tenant
                ledger synchronization with sub-50ms execution latency.
              </p>
              <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
                <span className="px-2.5 py-1 bg-[#080D0E] border border-border-tech rounded text-text-muted">
                  Next.js Web Suite
                </span>
                <span className="px-2.5 py-1 bg-[#080D0E] border border-border-tech rounded text-text-muted">
                  PostgreSQL + Kafka
                </span>
                <span className="px-2.5 py-1 bg-[#080D0E] border border-border-tech rounded text-text-muted">
                  Automated Reconciliation
                </span>
              </div>
            </div>
            {/* <!-- Technical Schematic Preview --> */}
            <div className="bg-[#080D0E] border-t border-border-tech p-6 font-mono text-xs">
              <div className="flex justify-between items-center text-text-dim mb-3 pb-2 border-b border-border-tech/60">
                <span className="">TELEMETRY METRIC</span>
                <span className="">MEASUREMENT</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Processing Speed</span>
                  <span className="text-primary font-semibold">Instant</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">
                    Quarterly Volume Processed
                  </span>
                  <span className="text-text-white font-semibold">
                    $1.84B USD
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">System Reliability</span>
                  <span className="text-primary font-semibold">
                    High Availability
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Case Study 2: Vortex Intelligence --> */}
          <div className="lg:col-span-5 bg-surface border border-border-tech rounded-md overflow-hidden flex flex-col justify-between group hover:border-primary/40 transition-colors">
            <div className="p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-mono text-primary uppercase">
                  AI AGENTS &amp; VECTOR PIPELINE
                </span>
                <span className="text-xs font-mono text-text-dim">
                  MULTI-AGENT ENGINE
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-white mb-3 flex items-center justify-between">
                <span>Vortex Intelligence</span>
                <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6">
                An enterprise multi-agent workflow platform orchestrating
                semantic retrieval, programmatic synthesis, and self-correcting
                business automation pipelines.
              </p>
              <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
                <span className="px-2.5 py-1 bg-[#080D0E] border border-border-tech rounded text-text-muted">
                  pgvector
                </span>
                <span className="px-2.5 py-1 bg-[#080D0E] border border-border-tech rounded text-text-muted">
                  Custom Agent Workflows
                </span>
                <span className="px-2.5 py-1 bg-[#080D0E] border border-border-tech rounded text-text-muted">
                  Zero Hallucination Loop
                </span>
              </div>
            </div>
            {/* <!-- Technical Schematic Preview --> */}
            <div className="bg-[#080D0E] border-t border-border-tech p-6 font-mono text-xs">
              <div className="flex justify-between items-center text-text-dim mb-3 pb-2 border-b border-border-tech/60">
                <span className="">WORKFLOW METRIC</span>
                <span className="">MEASUREMENT</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Efficiency Gain</span>
                  <span className="text-primary font-semibold">
                    Significant reduction
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Knowledge Base</span>
                  <span className="text-text-white font-semibold">
                    Deep &amp; Connected
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Output Quality</span>
                  <span className="text-primary font-semibold">
                    Rigorously Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
