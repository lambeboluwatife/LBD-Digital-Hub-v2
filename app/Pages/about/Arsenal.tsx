import {
  Globe,
  Bot,
  Atom,
  Smartphone,
  Database,
  Leaf,
  FileCode2,
  Workflow,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

interface ArsenalTool {
  name: string;
  subtitle: string;
  icon: LucideIcon;
}

const TOOLS: ArsenalTool[] = [
  {
    name: "Next.js",
    subtitle: "Web Platforms",
    icon: Globe,
  },
  {
    name: "React",
    subtitle: "Frontend UI",
    icon: Atom,
  },
  {
    name: "React Native",
    subtitle: "Mobile Apps",
    icon: Smartphone,
  },
  {
    name: "TypeScript",
    subtitle: "Type-Safe Code",
    icon: FileCode2,
  },
  {
    name: "OpenAI",
    subtitle: "Smart AI & LLMs",
    icon: Bot,
  },
  {
    name: "Mastra",
    subtitle: "AI Workflows",
    icon: Workflow,
  },
  {
    name: "Agno",
    subtitle: "Multi-Agent Systems",
    icon: BrainCircuit,
  },
  {
    name: "PostgreSQL",
    subtitle: "Scalable Databases",
    icon: Database,
  },
  {
    name: "MongoDB",
    subtitle: "Cloud Databases",
    icon: Leaf,
  },
];

const Arsenal = () => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 max-w-container mx-auto border-t border-border">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold block mb-3">
          Our Technology Stack
        </span>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-light mb-3">
          Technical Arsenal
        </h2>
        <p className="text-muted text-sm md:text-base">
          Battle-tested frameworks, modern development tools, and intelligent AI
          platforms we use to build your products.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-3 sm:gap-4">
        {TOOLS.map((tool) => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.name}
              className="bg-surface border border-border hover:border-primary/40 p-4 sm:p-5 rounded-xl flex flex-col items-center justify-center text-center group transition-all"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-graphite border border-border group-hover:border-primary/30 group-hover:bg-primary/5 flex items-center justify-center text-primary mb-3 transition-all">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
              </div>
              <h3 className="font-headline font-semibold text-light text-xs sm:text-sm leading-tight">
                {tool.name}
              </h3>
              <span className="font-mono text-[9px] sm:text-[10px] text-muted-dim uppercase mt-1 leading-tight">
                {tool.subtitle}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Arsenal;
