import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/projects/ProjectGallery";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Clock,
  User,
  Briefcase,
  Quote,
} from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  const projectKeywords = [
    project.title,
    ...(project.tags || []),
    ...(project.badges || []),
    "case study",
    "digital engineering",
    "software architecture",
    "LBD Digital Hub",
  ];

  const ogImage = project.src || "/og-image.jpg";

  return {
    title: `${project.title} — Case Study`,
    description: project.subtitle || project.solution,
    keywords: projectKeywords,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Case Study | LBD Digital Hub`,
      description: project.subtitle || project.solution,
      url: `/projects/${project.slug}`,
      siteName: "LBD Digital Hub",
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.alt || `${project.title} Case Study Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study | LBD Digital Hub`,
      description: project.subtitle || project.solution,
      images: [ogImage],
      creator: "@danibholie",
      site: "@danibholie",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const nextProject = projects.find((p) => p.slug === project.nextProjectSlug);

  return (
    <article className="tech-grid-pattern min-h-screen py-16 sm:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
        {/* Back Link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono-code text-xs text-[#8A999A] hover:text-[#12C887] transition-colors py-1.5 px-3 rounded bg-[#101718] border border-[#1B2727]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>
        </div>

        {/* Header Hero Section */}
        <header className="space-y-6 border-b border-[#1B2727] pb-12">
          <div className="flex flex-wrap items-center gap-2.5">
            {(project.badges || ["CASE STUDY"]).map((badge) => (
              <span
                key={badge}
                className="font-mono-code text-[11px] px-2.5 py-1 rounded bg-[#12C887]/10 text-[#12C887] border border-[#12C887]/30 font-semibold tracking-wider uppercase"
              >
                {badge}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-[#8A999A] text-base sm:text-xl font-light leading-relaxed max-w-3xl">
              {project.subtitle}
            </p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, idx) => (
              <span
                key={tag}
                className={`font-mono-code text-xs px-3 py-1 rounded bg-[#101718] border border-[#1B2727] ${
                  idx === 0 ? "text-[#12C887] font-medium" : "text-[#8A999A]"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Visual Showcase (Supports 1, 2, or any number of images) */}
        <ProjectGallery
          title={project.title}
          images={project.images || (project.src ? [project.src] : [])}
          projectUrl={project.projectUrl}
        />

        {/* Project Stats Quick Bar */}
        {project.stats && (
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-[#101718] border border-[#1B2727] rounded">
              <div className="flex items-center gap-2 text-[#8A999A] font-mono-code text-xs mb-1">
                <Clock className="w-3.5 h-3.5 text-[#12C887]" />
                <span>TIMELINE</span>
              </div>
              <div className="text-white font-semibold text-sm">
                {project.stats.timeline || "Completed"}
              </div>
            </div>

            <div className="p-4 bg-[#101718] border border-[#1B2727] rounded">
              <div className="flex items-center gap-2 text-[#8A999A] font-mono-code text-xs mb-1">
                <User className="w-3.5 h-3.5 text-[#12C887]" />
                <span>ROLE</span>
              </div>
              <div className="text-white font-semibold text-sm">
                {project.stats.role || "Full Stack Lead"}
              </div>
            </div>

            <div className="p-4 bg-[#101718] border border-[#1B2727] rounded">
              <div className="flex items-center gap-2 text-[#8A999A] font-mono-code text-xs mb-1">
                <Briefcase className="w-3.5 h-3.5 text-[#12C887]" />
                <span>SERVICES</span>
              </div>
              <div className="text-white font-semibold text-sm truncate">
                {project.stats.services || "Web Engineering"}
              </div>
            </div>

            <div className="p-4 bg-[#101718] border border-[#1B2727] rounded">
              <div className="flex items-center gap-2 text-[#8A999A] font-mono-code text-xs mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#12C887]" />
                <span>CLIENT</span>
              </div>
              <div className="text-white font-semibold text-sm">
                {project.stats.client || "Client Engagement"}
              </div>
            </div>
          </section>
        )}

        {/* Measured Impact Metrics Card */}
        {project.measuredImpact && project.measuredImpact.length > 0 && (
          <section className="p-6 sm:p-8 bg-[#101718] border border-[#1B2727] rounded-lg">
            <h2 className="font-mono-code text-xs uppercase tracking-widest text-[#12C887] mb-6 font-semibold">
              KEY MEASURED RESULTS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.measuredImpact.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-heading text-3xl sm:text-4xl font-bold text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono-code text-[#8A999A]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenge Box */}
          <section className="bg-[#101718] border border-[#1B2727] rounded-lg p-6 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#080D0E] border border-[#1B2727] font-mono-code text-xs text-[#8A999A]">
              <span>01 // THE CHALLENGE</span>
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-white">
              The Client Challenge
            </h2>
            <p className="text-[#8A999A] text-sm sm:text-base leading-relaxed font-light">
              {project.challengeDetails?.description || project.challenge}
            </p>
          </section>

          {/* Solution Box */}
          <section className="bg-[#101718] border border-[#1B2727] rounded-lg p-6 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#080D0E] border border-[#1B2727] font-mono-code text-xs text-[#12C887]">
              <span>02 // THE SOLUTION</span>
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Engineered Solution
            </h2>
            <p className="text-[#8A999A] text-sm sm:text-base leading-relaxed font-light">
              {project.solutionDetails?.description || project.solution}
            </p>
          </section>
        </div>

        {/* Key Features Bullets */}
        {project.solutionDetails?.bullets && (
          <section className="bg-[#101718] border border-[#1B2727] rounded-lg p-6 sm:p-8">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mb-6">
              Implementation Highlights
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.solutionDetails.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-[#DFE3E4] font-light"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#12C887] shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Testimonial Quote if present */}
        {project.testimonial && (
          <section className="bg-[#0B1011] border border-[#1B2727] rounded-lg p-6 sm:p-8 relative">
            <Quote className="w-8 h-8 text-[#12C887]/20 absolute top-6 right-6" />
            <p className="text-[#DFE3E4] text-base sm:text-lg italic leading-relaxed mb-4 max-w-2xl font-light">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <div className="font-mono-code text-xs">
              <span className="text-white font-semibold block">
                {project.testimonial.name}
              </span>
              <span className="text-[#8A999A]">{project.testimonial.role}</span>
            </div>
          </section>
        )}

        {/* Next Project & Live Project Links */}
        <footer className="pt-8 border-t border-[#1B2727] flex flex-col sm:flex-row items-center justify-between gap-6">
          {project.projectUrl ? (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#12C887] text-[#080D0E] font-semibold text-sm hover:bg-[#10b378] transition-colors shadow-[0_0_20px_rgba(18,200,135,0.2)]"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#101718] border border-[#1B2727] text-white hover:border-[#12C887]/50 hover:text-[#12C887] font-mono-code text-xs sm:text-sm font-semibold transition-all group"
            >
              <span>NEXT CASE STUDY: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </footer>
      </div>
    </article>
  );
}
