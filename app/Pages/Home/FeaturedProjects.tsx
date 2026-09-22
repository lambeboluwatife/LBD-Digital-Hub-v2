import Link from "next/link";
import { ArrowUpRight, ArrowRight, ExternalLink, Cpu, CheckCircle2, Globe, LineChart } from "lucide-react";
import { projects } from "@/data/projects";

const FeaturedProjects = () => {
  // Feature the top 4 flagship projects
  const featured = projects.slice(0, 4);

  const getCategoryIcon = (category: string[]) => {
    if (category.includes("ai")) return <Cpu className="w-3.5 h-3.5 text-[#12C887]" />;
    if (category.includes("saas")) return <CheckCircle2 className="w-3.5 h-3.5 text-[#12C887]" />;
    if (category.includes("media")) return <LineChart className="w-3.5 h-3.5 text-[#12C887]" />;
    return <Globe className="w-3.5 h-3.5 text-[#12C887]" />;
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 border-b border-[#1B2727]" id="work">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#12C887] animate-pulse" />
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#12C887]">
                FEATURED WORK
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white leading-tight">
              Selected Digital Products
            </h2>
          </div>
          <p className="text-[#8A999A] text-sm sm:text-base max-w-md font-light leading-relaxed">
            Real-world web platforms, mobile applications, and intelligent systems
            engineered for performance, scalability, and measurable client results.
          </p>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((project, idx) => (
            <article
              key={project.slug}
              className="bg-[#101718] border border-[#1B2727] rounded hover:border-[#12C887]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              <div className="p-6 sm:p-8">
                {/* Card Header Labels */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono-code text-[#12C887] uppercase tracking-wider flex items-center gap-1.5 font-medium">
                    {getCategoryIcon(project.category)}
                    {project.badges?.[0] || "WEB APPLICATION"}
                  </span>
                  <span className="text-[11px] font-mono-code text-[#8A999A] px-2 py-0.5 rounded bg-[#080D0E] border border-[#1B2727]">
                    {project.stats?.timeline || "Completed"}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center justify-between group-hover:text-[#12C887] transition-colors">
                  <Link href={`/projects/${project.slug}`} className="hover:underline">
                    {project.title}
                  </Link>
                  <ArrowUpRight className="w-5 h-5 text-[#8A999A] group-hover:text-[#12C887] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </h3>

                {/* Client Challenge / Solution Summary */}
                <p className="text-[#8A999A] text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {project.solution}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 font-mono-code text-xs">
                  {project.tags.slice(0, 3).map((tag, tagIdx) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded bg-[#080D0E] border border-[#1B2727] ${
                        tagIdx === 0 ? "text-[#12C887]" : "text-[#8A999A]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Metric Strip */}
              <div className="bg-[#080D0E] border-t border-[#1B2727] p-5 sm:p-6 font-mono-code text-xs">
                <div className="flex justify-between items-center text-[#8A999A] mb-3 pb-2 border-b border-[#1B2727]/60 text-[11px]">
                  <span>MEASURED IMPACT</span>
                  <span>RESULT</span>
                </div>
                <div className="space-y-2 mb-4">
                  {(project.measuredImpact?.slice(0, 2) || []).map((metric, mIdx) => (
                    <div key={mIdx} className="flex justify-between items-center text-xs">
                      <span className="text-[#8A999A]">{metric.label}</span>
                      <span className="text-[#12C887] font-semibold">{metric.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#1B2727]/60 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#12C887] hover:underline uppercase tracking-wider font-semibold group/link"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-[#8A999A] hover:text-white transition-colors"
                      title={`Open live app for ${project.title}`}
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Projects CTA Banner */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#101718] border border-[#1B2727] text-white font-mono-code text-sm font-semibold hover:border-[#12C887]/60 hover:text-[#12C887] transition-all group shadow-sm"
          >
            <span>VIEW ALL SELECTED WORKS ({projects.length})</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
