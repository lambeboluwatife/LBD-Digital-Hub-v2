"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import {
  ArrowRight,
  ExternalLink,
  Cpu,
  Globe,
  Gamepad2,
  LineChart,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const ProjectGrid = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isFading, setIsFading] = useState(false);
  const fadeOutTimer = useRef<number | null>(null);
  const fadeInTimer = useRef<number | null>(null);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === activeFilter || isFading) return;

    setIsFading(true);

    if (fadeOutTimer.current) window.clearTimeout(fadeOutTimer.current);
    if (fadeInTimer.current) window.clearTimeout(fadeInTimer.current);

    fadeOutTimer.current = window.setTimeout(() => {
      setActiveFilter(categoryId);

      fadeInTimer.current = window.setTimeout(() => {
        setIsFading(false);
      }, 50);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (fadeOutTimer.current) window.clearTimeout(fadeOutTimer.current);
      if (fadeInTimer.current) window.clearTimeout(fadeInTimer.current);
    };
  }, []);

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "web",
      name: "Web Applications",
      count: projects.filter((p) => p.category.includes("web")).length,
    },
    {
      id: "ai",
      name: "AI Solutions",
      count: projects.filter((p) => p.category.includes("ai")).length,
    },
    {
      id: "saas",
      name: "Client Portals & SaaS",
      count: projects.filter((p) => p.category.includes("saas")).length,
    },
    {
      id: "mobile",
      name: "Mobile Apps",
      count: projects.filter((p) => p.category.includes("mobile")).length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  const renderCategoryIcon = (category: string[]) => {
    if (category.includes("ai")) {
      return <Cpu className="w-3.5 h-3.5 text-[#12C887]" />;
    }
    if (category.includes("game")) {
      return <Gamepad2 className="w-3.5 h-3.5 text-[#12C887]" />;
    }
    if (category.includes("media")) {
      return <LineChart className="w-3.5 h-3.5 text-[#12C887]" />;
    }
    if (category.includes("saas")) {
      return <CheckCircle2 className="w-3.5 h-3.5 text-[#12C887]" />;
    }
    if (category.includes("branding")) {
      return <Sparkles className="w-3.5 h-3.5 text-[#12C887]" />;
    }
    return <Globe className="w-3.5 h-3.5 text-[#12C887]" />;
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 pb-28">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2.5 font-mono-code text-xs py-8">
        {categories.map((category) => {
          const isActive = activeFilter === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded font-mono-code text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? "bg-[#12C887] text-[#080D0E] font-semibold shadow-[0_0_15px_rgba(18,200,135,0.25)]"
                  : "bg-[#101718] border border-[#1B2727] text-[#8A999A] hover:text-[#12C887] hover:border-[#12C887]/50"
              }`}
            >
              <span>{category.name}</span>
              <span
                className={`text-[10px] font-semibold ${
                  isActive ? "text-[#080D0E]/80" : "text-[#12C887]"
                }`}
              >
                ({String(category.count).padStart(2, "0")})
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid with Smooth Fade Transition (No Images Displayed) */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-200 ease-in-out ${
          isFading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {filteredProjects.map((project) => (
          <article
            key={project.slug}
            className="bg-[#101718] rounded border border-[#1B2727] hover:border-[#12C887]/60 transition-colors duration-300 flex flex-col justify-between overflow-hidden group"
          >
            <div>
              {/* Relatable Architectural Overview Visual Frame (NO IMAGES) */}
              <div className="p-6 bg-[#0B1011] border-b border-[#1B2727]">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#12C887] animate-pulse"></span>
                    <span className="font-mono-code text-[11px] text-[#8A999A] uppercase tracking-wider">
                      {project.badges?.[0] || "ENGINEERED PLATFORM"}
                    </span>
                  </div>
                  <span className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-[#12C887]/10 text-[#12C887] border border-[#12C887]/30 font-semibold tracking-wider">
                    {project.badges?.[1] || "PRODUCTION"}
                  </span>
                </div>

                {/* Client-Relatable Technical Overview Frame */}
                <div className="p-4 bg-[#080D0E] border border-[#1B2727] rounded text-xs font-mono-code text-[#8A999A] space-y-3">
                  <div className="flex items-center justify-between text-[11px] border-b border-[#1B2727] pb-2 text-white">
                    <span className="flex items-center gap-1.5 font-medium">
                      {renderCategoryIcon(project.category)}
                      {project.solutionDetails?.metricLabel || "CORE PERFORMANCE"}
                    </span>
                    <span className="text-[#12C887] font-semibold">
                      {project.solutionDetails?.metricValue ||
                        project.measuredImpact?.[0]?.value ||
                        "100% Verified"}
                    </span>
                  </div>

                  {/* 3 Metric / Impact Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-[10px]">
                    {(project.measuredImpact?.slice(0, 3) || []).map(
                      (impact, idx) => (
                        <div
                          key={idx}
                          className={`p-2 rounded transition-colors ${
                            idx === 1
                              ? "bg-[#12C887]/5 border border-[#12C887]/30"
                              : "bg-[#101718] border border-[#1B2727]"
                          }`}
                        >
                          <div
                            className={`font-semibold ${
                              idx === 1 ? "text-[#12C887]" : "text-white"
                            }`}
                          >
                            {impact.value}
                          </div>
                          <div className="text-[#8A999A] text-[9px] truncate">
                            {impact.label}
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* Footer summary stats */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] pt-1 text-[#8A999A] gap-1">
                    <span>
                      TIMELINE: {project.stats?.timeline || "Completed"}
                    </span>
                    <span>
                      SERVICES: {project.stats?.services || "Full Stack Web"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Details Content */}
              <div className="p-7">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={tag}
                      className={`font-mono-code text-[11px] px-2.5 py-1 rounded bg-[#080D0E] border border-[#1B2727] ${
                        idx === 0
                          ? "text-[#12C887] font-medium"
                          : "text-[#8A999A]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-[#12C887] transition-colors leading-snug">
                  <Link href={`/projects/${project.slug}`} className="hover:underline">
                    {project.title}
                  </Link>
                </h3>
                {project.subtitle && (
                  <p className="text-xs font-mono-code text-[#8A999A] mb-4 uppercase tracking-wider">
                    {project.subtitle}
                  </p>
                )}

                <div className="space-y-3 text-sm text-[#8A999A] leading-relaxed mb-6 font-light">
                  <p>
                    <strong className="text-white font-mono-code text-xs uppercase tracking-wide block mb-1 font-semibold">
                      Client Challenge
                    </strong>
                    {project.challenge}
                  </p>
                  <p>
                    <strong className="text-white font-mono-code text-xs uppercase tracking-wide block mb-1 font-semibold">
                      Engineered Solution
                    </strong>
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Card Footer with Result Metric and Spec Link */}
            <div className="px-7 py-4 bg-[#0B1011] border-t border-[#1B2727] flex flex-wrap items-center justify-between gap-3">
              <div className="font-mono-code text-xs text-[#8A999A]">
                KEY IMPACT:{" "}
                <span className="text-[#12C887] font-semibold">
                  {project.measuredImpact?.[0]?.value}{" "}
                  {project.measuredImpact?.[0]?.label}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {project.projectUrl && (
                  <a
                    className="inline-flex items-center gap-1 font-mono-code text-xs text-[#8A999A] hover:text-white hover:underline transition-colors"
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Open live app for ${project.title}`}
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <Link
                  className="inline-flex items-center gap-1.5 font-mono-code text-xs text-[#12C887] hover:underline uppercase tracking-wider font-semibold group/link"
                  href={`/projects/${project.slug}`}
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </article>
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full py-16 text-center border border-[#1B2727] bg-[#101718] rounded">
            <p className="font-mono-code text-[#8A999A] text-sm">
              NO_PROJECTS_FOUND // QUERY_RETURNED_EMPTY
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;
