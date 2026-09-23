import { Search, Compass, Code2, Rocket } from "lucide-react";

const TheProcess = () => {
  return (
    <section
      className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-surface border-y border-border-tech"
      id="process"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-3 block font-semibold">
            How We Work
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-text-white mb-4">
            Our Development Process
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A structured, collaborative approach from initial concept to
            launch, continuous maintenance, and business scaling.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {/* <!-- Step 1 --> */}
          <div className="bg-[#080D0E] border border-border-tech p-6 rounded-lg relative hover:border-primary/40 transition-colors group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-primary mb-3">
                <span>PHASE // 01</span>
                <Search className="w-4 h-4 text-text-dim group-hover:text-primary transition-colors" />
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold text-text-white mb-1.5">
                Discovery
              </div>
              <p className="text-xs font-mono text-text-dim uppercase mb-3">
                Goals &amp; Roadmap
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                We understand your business vision, target audience, and core
                requirements to create a clear project scope, timeline, and
                deliverable roadmap.
              </p>
            </div>
          </div>
          {/* <!-- Step 2 --> */}
          <div className="bg-[#080D0E] border border-border-tech p-6 rounded-lg relative hover:border-primary/40 transition-colors group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-primary mb-3">
                <span>PHASE // 02</span>
                <Compass className="w-4 h-4 text-text-dim group-hover:text-primary transition-colors" />
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold text-text-white mb-1.5">
                Design &amp; Plan
              </div>
              <p className="text-xs font-mono text-text-dim uppercase mb-3">
                UI/UX &amp; Architecture
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                We craft intuitive user experiences, interactive prototypes,
                and solid system architecture so every feature is built on a
                stable foundation.
              </p>
            </div>
          </div>
          {/* <!-- Step 3 --> */}
          <div className="bg-[#080D0E] border border-border-tech p-6 rounded-lg relative hover:border-primary/40 transition-colors group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-primary mb-3">
                <span>PHASE // 03</span>
                <Code2 className="w-4 h-4 text-text-dim group-hover:text-primary transition-colors" />
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold text-text-white mb-1.5">
                Engineering
              </div>
              <p className="text-xs font-mono text-text-dim uppercase mb-3">
                Agile Development &amp; QA
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                We build your platform using clean, high-performance code with
                regular milestone demos, thorough testing, and prompt
                feedback loops.
              </p>
            </div>
          </div>
          {/* <!-- Step 4 --> */}
          <div className="bg-[#080D0E] border border-border-tech p-6 rounded-lg relative hover:border-primary/40 transition-colors group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-primary mb-3">
                <span>PHASE // 04</span>
                <Rocket className="w-4 h-4 text-text-dim group-hover:text-primary transition-colors" />
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold text-text-white mb-1.5">
                Launch &amp; Scale
              </div>
              <p className="text-xs font-mono text-text-dim uppercase mb-3">
                Deployment &amp; Support
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                We manage smooth production deployment, configure automated
                monitoring, and provide ongoing maintenance to keep your app
                fast and reliable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProcess;
