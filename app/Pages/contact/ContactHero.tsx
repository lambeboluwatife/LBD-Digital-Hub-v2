const ContactHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 pb-12 sm:pb-16 relative">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#101718] border border-[#1B2727] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#12C887] ai-pulse shadow-[0_0_8px_#12C887]"></span>
          <span className="font-mono text-[11px] text-[#12C887] uppercase tracking-widest font-semibold">
            Accepting New Projects
          </span>
        </div>
        <h1 className="font-headline text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#F5F7F7] mb-6 leading-[1.08]">
          Let&apos;s build something
          <span className="text-[#12C887]"> extraordinary</span>
        </h1>
        <p className="font-body text-sm sm:text-base md:text-lg text-[#A7B0B0] max-w-2xl leading-relaxed">
          Partner with our digital technology studio to build modern web
          applications, mobile products, and AI automation workflows tailored to
          your business goals.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
