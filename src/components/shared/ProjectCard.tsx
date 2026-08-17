import type { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-[var(--color-bg-tint)] bg-white">
      {project.imageSrc && (
        <div className="aspect-video w-full bg-[var(--color-bg-tint)]">
          <img
            src={project.imageSrc}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      {!project.imageSrc && (
        <div className="flex aspect-video w-full items-center justify-center bg-[var(--color-primary-dark)]">
          <span className="text-sm uppercase tracking-widest text-white/50">
            Photo pending
          </span>
        </div>
      )}
      <div className="p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-text-body)]">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          {project.location} &middot; {project.partners}
        </p>
        <p className="mt-3 text-[15px] text-[var(--color-text-body)]">
          {project.description}
        </p>
        <div className="mt-4 inline-block rounded-[var(--radius-btn)] bg-[var(--color-bg-tint)] px-3 py-1 text-sm font-medium text-[var(--color-primary)]">
          {project.metric}
        </div>
      </div>
    </div>
  );
}
