const ServiceProcess = () => {
  return (
    <section className="bg-surface-container-lowest py-20 md:py-24 border-y border-border-dark">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs text-primary mb-3 block uppercase tracking-widest font-semibold">
              Delivery Methodology
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-surface">
              Built for Speed &amp; Quality.
            </h2>
          </div>
          <p className="text-on-surface-variant text-sm md:text-base max-w-md font-normal leading-relaxed">
            We follow a collaborative, milestone-driven software lifecycle focused
            on rapid delivery, robust security, and long-term reliability.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 bg-surface rounded border border-border-dark relative group hover:border-primary/50 transition-all flex flex-col justify-between">
            <div>
              <div className="font-mono text-3xl font-bold text-primary/30 group-hover:text-primary transition-colors mb-4">
                01
              </div>
              <h4 className="font-heading text-lg font-semibold text-on-surface mb-2">
                Project Discovery
              </h4>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                We analyze your business goals, user needs, and feature
                specifications to establish an accurate scope and clear delivery
                roadmap.
              </p>
            </div>
          </div>
          <div className="p-6 bg-surface rounded border border-border-dark relative group hover:border-primary/50 transition-all flex flex-col justify-between">
            <div>
              <div className="font-mono text-3xl font-bold text-primary/30 group-hover:text-primary transition-colors mb-4">
                02
              </div>
              <h4 className="font-heading text-lg font-semibold text-on-surface mb-2">
                System Design
              </h4>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                We create modern UI/UX wireframes, robust database schemas, and
                clean API structures to ensure high performance from day one.
              </p>
            </div>
          </div>
          <div className="p-6 bg-surface rounded border border-border-dark relative group hover:border-primary/50 transition-all flex flex-col justify-between">
            <div>
              <div className="font-mono text-3xl font-bold text-primary/30 group-hover:text-primary transition-colors mb-4">
                03
              </div>
              <h4 className="font-heading text-lg font-semibold text-on-surface mb-2">
                Iterative Sprints
              </h4>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Two-week development cycles featuring live demos, continuous
                client feedback, and rigorous testing across devices.
              </p>
            </div>
          </div>
          <div className="p-6 bg-surface rounded border border-border-dark relative group hover:border-primary/50 transition-all flex flex-col justify-between">
            <div>
              <div className="font-mono text-3xl font-bold text-primary/30 group-hover:text-primary transition-colors mb-4">
                04
              </div>
              <h4 className="font-heading text-lg font-semibold text-on-surface mb-2">
                Launch &amp; Scaling
              </h4>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Zero-downtime production deployment, automated performance
                monitoring, and ongoing support to ensure your application runs
                smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
