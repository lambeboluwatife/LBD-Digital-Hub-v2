import ProjectHero from "@/app/Pages/projects/ProjectHero";
import ProjectGrid from "@/app/Pages/projects/ProjectGrid";
import ProjectCTA from "@/app/Pages/projects/ProjectCTA";

export const metadata = {
  title: "Selected Works | Digital Architecture & Systems",
  description:
    "An engineering archive of high-concurrency platforms, real-time telemetry infrastructures, and distributed AI systems.",
};

export default function ProjectsPage() {
  return (
    <main className="tech-grid-pattern min-h-screen">
      <ProjectHero />
      <ProjectGrid />
      <ProjectCTA />
    </main>
  );
}
