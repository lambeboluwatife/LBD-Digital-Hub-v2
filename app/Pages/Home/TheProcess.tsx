import { Search, Cpu, Code2, Rocket } from "lucide-react";

const TheProcess = () => {
  return (
    <section
      className="py-28 px-6 bg-surface border-y border-border-tech"
      id="process"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-3 block">
            PRECISION IN DIGITAL ARCHITECTURE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-text-white mb-4">
            The Architecture Process
          </h2>
          <p className="text-text-muted text-sm sm:text-base">
            A disciplined engineering lifecycle from technical scoping to
            continuous production scaling.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* <!-- Step 1 --> */}
          <div className="bg-[#080D0E] border border-border-tech p-6 rounded-md relative hover:border-primary/40 transition-colors group">
            <div className="flex items-center justify-between font-mono text-xs text-primary mb-3">
              <span>STAGE // 01</span>
              <Search className="w-4 h-4 text-text-dim group-hover:text-primary transition-colors" />
            </div>
            <div className="font-display text-2xl font-bold text-text-white mb-2">
              Discovery
            </div>
            <p className="text-xs font-mono text-text-dim uppercase mb-3">
              Technical Scoping &amp; Goals
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              In-depth discovery mapping non-functional requirements, data
              boundaries, system bottlenecks, and business KPIs.
            </p>
          </div>
          {/* <!-- Step 2 --> */}
          <div className="bg-[#080D0E] border border-border-tech p-6 rounded-md relative hover:border-primary/40 transition-colors group">
            <div className="flex items-center justify-between font-mono text-xs text-primary mb-3">
              <span>STAGE // 02</span>
              <Cpu className="w-4 h-4 text-text-dim group-hover:text-primary transition-colors" />
            </div>
            <div className="font-display text-2xl font-bold text-text-white mb-2">
              Blueprint
            </div>
            <p className="text-xs font-mono text-text-dim uppercase mb-3">
              Schema &amp; System Architecture
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Drafting formal data schemas, API contracts, interactive component
              specifications, and cloud infrastructure graphs.
            </p>
          </div>
          {/* <!-- Step 3 --> */}
          <div className="bg-[#080D0E] border border-border-tech p-6 rounded-md relative hover:border-primary/40 transition-colors group">
            <div className="flex items-center justify-between font-mono text-xs text-primary mb-3">
              <span>STAGE // 03</span>
              <Code2 className="w-4 h-4 text-text-dim group-hover:text-primary transition-colors" />
            </div>
            <div className="font-display text-2xl font-bold text-text-white mb-2">
              Engineering
            </div>
            <p className="text-xs font-mono text-text-dim uppercase mb-3">
              Precision Development
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Rigorous full-stack implementation, deterministic unit and
              integration tests, clean interfaces, and automated CI pipelines.
            </p>
          </div>
          {/* <!-- Step 4 --> */}
          <div className="bg-[#080D0E] border border-border-tech p-6 rounded-md relative hover:border-primary/40 transition-colors group">
            <div className="flex items-center justify-between font-mono text-xs text-primary mb-3">
              <span>STAGE // 04</span>
              <Rocket className="w-4 h-4 text-text-dim group-hover:text-primary transition-colors" />
            </div>
            <div className="font-display text-2xl font-bold text-text-white mb-2">
              Deployment
            </div>
            <p className="text-xs font-mono text-text-dim uppercase mb-3">
              Production &amp; Telemetry
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Zero-downtime release engineering, synthetic health monitoring,
              automated scaling policies, and observability telemetry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProcess;
