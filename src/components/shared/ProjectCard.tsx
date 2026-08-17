import Image from "next/image";
import type { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-bg-tint)] bg-white transition-all duration-500 hover:border-[var(--color-primary)]/15 hover:shadow-xl hover:shadow-[var(--color-primary)]/5">
      {project.imageSrc && (
        <div className="relative aspect-video w-full overflow-hidden bg-[var(--color-bg-tint)]">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      {!project.imageSrc && (
        <div className="flex aspect-video w-full items-center justify-center bg-[var(--color-primary-dark)]">
          <span className="text-sm uppercase tracking-widest text-white/40">
            Photo pending
          </span>
        </div>
      )}
      <div className="p-8">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-text-body)]">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">
          {project.location} &middot; {project.partners}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-body)]">
          {project.description}
        </p>
        <div className="mt-5 inline-block rounded-lg bg-[var(--color-bg-tint)] px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
          {project.metric}
        </div>
      </div>
    </div>
  );
}
