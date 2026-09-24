import Image from "next/image";

interface Architect {
  name: string;
  role: string;
  image: string;
  alt: string;
  bio: string;
  labId: string;
}

const architects: Architect[] = [
  {
    name: "Lambe Boluwatife",
    role: "Founder & Software Engineer",
    image: "/images/Bolu_headshot.png",
    alt: "A professional headshot of Lambe Boluwatife, Founder and Software Engineer, with cyan backlighting luminescence.",
    bio: "Leads software engineering, web architectures, and technical strategy to build fast, reliable digital products.",
    labId: "LEAD // 01",
  },
  {
    name: "Dorcas Ibrahim",
    role: "Backend Engineer",
    image: "/images/Dorcas_ibrahim.png",
    alt: "A professional headshot of Dorcas Ibrahim, Backend Engineer, with cyan backlighting luminescence.",
    bio: "Builds fast, secure APIs, cloud databases, and resilient server infrastructure that keep platforms running smoothly 24/7.",
    labId: "BACKEND // 02",
  },
  {
    name: "Sowunmi Mayowa",
    role: "AI Systems Developer",
    image: "/images/mayowa.png",
    alt: "A professional headshot of Sowunmi Mayowa, AI Systems Developer, with cyan backlighting luminescence.",
    bio: "Builds practical AI workflows, automated systems, and smart business tools that save teams time and accelerate growth.",
    labId: "AI // 03",
  },
];

const TheArchitects = () => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 max-w-container mx-auto border-t border-border">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold block mb-3">
          Meet The Team
        </span>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-light mb-3">
          The Architects
        </h2>
        <p className="text-muted text-sm md:text-base">
          The engineers and builders leading our software development, cloud
          systems, and AI workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {architects.map((architect) => (
          <div
            key={architect.name}
            className="bg-surface border border-border rounded-xl overflow-hidden p-5 group hover:border-primary/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-graphite mb-5 relative border border-border">
                <Image
                  src={architect.image}
                  alt={architect.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-graphite/80 backdrop-blur-md px-2.5 py-1 rounded border border-border text-[11px] font-mono text-primary z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  ONLINE
                </div>
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-headline text-lg font-bold text-light">
                  {architect.name}
                </h3>
                <span className="font-mono text-[10px] text-muted-dim">
                  {architect.labId}
                </span>
              </div>
              <p className="text-primary font-mono text-xs uppercase font-medium">
                {architect.role}
              </p>
              <p className="text-muted text-xs mt-3 leading-relaxed">
                {architect.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheArchitects;
