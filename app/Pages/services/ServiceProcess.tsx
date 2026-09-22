const ServiceProcess = () => {
  return (
    <section className="bg-surface-container-lowest py-20 md:py-24 border-y border-border-dark">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs text-primary mb-3 block uppercase tracking-widest">
              Engineering Methodology
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-surface">
              Engineered for Velocity.
            </h2>
          </div>
          <p className="text-on-surface-variant text-sm md:text-base max-w-md font-normal">
            We follow a strict, phased software lifecycle designed to eliminate
            architectural regressions and guarantee code purity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 bg-surface rounded border border-border-dark relative group hover:border-primary/50 transition-all">
            <div className="font-mono text-3xl font-bold text-primary/30 group-hover:text-primary transition-colors mb-4">
              01
            </div>
            <h4 className="font-heading text-lg font-semibold text-on-surface mb-2">
              Technical Discovery
            </h4>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
              Data schema inspection, throughput constraints, and zero-defect
              interface definitions.
            </p>
          </div>
          <div className="p-6 bg-surface rounded border border-border-dark relative group hover:border-primary/50 transition-all">
            <div className="font-mono text-3xl font-bold text-primary/30 group-hover:text-primary transition-colors mb-4">
              02
            </div>
            <h4 className="font-heading text-lg font-semibold text-on-surface mb-2">
              Architecture Blueprint
            </h4>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
              Entity-relationship mapping, cloud topology design, and secure API
              boundary contracts.
            </p>
          </div>
          <div className="p-6 bg-surface rounded border border-border-dark relative group hover:border-primary/50 transition-all">
            <div className="font-mono text-3xl font-bold text-primary/30 group-hover:text-primary transition-colors mb-4">
              03
            </div>
            <h4 className="font-heading text-lg font-semibold text-on-surface mb-2">
              Iterative Sprints
            </h4>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
              Two-week production sprints with bi-weekly demonstrations and
              strict coverage metrics.
            </p>
          </div>
          <div className="p-6 bg-surface rounded border border-border-dark relative group hover:border-primary/50 transition-all">
            <div className="font-mono text-3xl font-bold text-primary/30 group-hover:text-primary transition-colors mb-4">
              04
            </div>
            <h4 className="font-heading text-lg font-semibold text-on-surface mb-2">
              Automated Deploy
            </h4>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
              Hermetic CI/CD pipelines, automated canary rollouts, and real-time
              operational monitors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
