import Link from "next/link";

const ServiceCTA = () => {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-28">
      <div className="arch-card rounded-xl p-10 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">
          Initialization
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface mb-6 max-w-2xl mx-auto leading-tight">
          Ready to architect your next industry standard?
        </h2>
        <p className="text-on-surface-variant text-sm md:text-base max-w-xl mx-auto mb-10">
          Discuss your architectural requirements directly with our engineering
          team and receive a comprehensive system roadmap.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            className="w-full sm:w-auto bg-primary text-on-primary px-8 py-3.5 rounded font-semibold text-sm hover:bg-primary-hover active:scale-95 transition-all shadow-sm"
            href="/contact"
          >
            Start a Project
          </Link>
          <Link
            className="w-full sm:w-auto border border-border-dark bg-surface-container text-on-surface px-8 py-3.5 rounded font-mono text-xs uppercase tracking-wider hover:border-primary/40 transition-all"
            href="/contact"
          >
            Book Technical Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
