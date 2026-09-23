import { ShieldCheck, GitFork, Zap, type LucideIcon } from "lucide-react";

interface PhilosophyItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const PHILOSOPHIES: PhilosophyItem[] = [
  {
    id: "quality",
    number: "#01",
    tag: "QUALITY FIRST",
    title: "Precision & Quality",
    description:
      "Clean code, secure foundations, and dependable digital products designed to perform reliably under real-world traffic.",
    icon: ShieldCheck,
  },
  {
    id: "scale",
    number: "#02",
    tag: "BUILT TO GROW",
    title: "Built to Scale",
    description:
      "Thoughtful system architecture so your platform easily handles more users, sales, and data as your business expands.",
    icon: GitFork,
  },
  {
    id: "delivery",
    number: "#03",
    tag: "ON-TIME SPRINTS",
    title: "Fast, Predictable Delivery",
    description:
      "Structured two-week sprints and transparent updates to get your product launched quickly and reliably without surprises.",
    icon: Zap,
  },
];

const Philosphy = () => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 max-w-container mx-auto border-t border-border">
      <div className="max-w-2xl mb-14">
        <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold block mb-3">
          Our Core Principles
        </span>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-light mb-3">
          Engineering Philosophy
        </h2>
        <p className="text-muted text-sm md:text-base">
          The core standards and practical values that guide how we design,
          engineer, and deliver every project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PHILOSOPHIES.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-surface border border-border hover:border-primary/50 transition-all rounded-xl p-6 sm:p-8 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-graphite border border-border flex items-center justify-center text-primary group-hover:border-primary/40 group-hover:bg-primary/5 transition-all mb-6">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="font-headline text-xl font-bold text-light mb-3">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-muted-dim">
                <span>{item.tag}</span>
                <span className="text-primary">{item.number}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Philosphy;
