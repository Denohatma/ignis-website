import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { partners } from "@/content/partners";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects & Partners",
  description:
    "Current projects and partners working with Ignis Innovation across Africa's institutional clean energy transition.",
};

export default function ProjectsPartnersPage() {
  const publishedPartners = partners.filter((p) => p.published);
  const publishedProjects = projects.filter((p) => p.published);

  return (
    <>
      <section className="bg-[var(--color-primary-dark)] py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white sm:text-5xl">
              Projects & Partners
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              What we are working on and who we are working with. Every project
              and partner shown here has an active engagement with signed
              agreements and confirmed permissions.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-bg-light)] py-20">
        <Container>
          <SectionHeading
            title="What we are working on"
            subtitle="Active projects across Kenya and the region."
          />
          {publishedProjects.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {publishedProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-[var(--color-bg-tint)] bg-white p-12 text-center">
              <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-primary-dark)]">
                Projects loading
              </p>
              <p className="mt-3 text-[var(--color-text-muted)]">
                Project details will appear here as counterparty permissions are
                confirmed. We have active engagements across multiple counties
                and national institutions in Kenya.
              </p>
            </div>
          )}
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            title="Working with"
            subtitle="Partners with signed agreements and confirmed permissions."
            align="center"
          />
          {publishedPartners.length > 0 ? (
            <div className="flex flex-wrap items-center justify-center gap-10">
              {publishedPartners.map((partner) =>
                partner.logoSrc ? (
                  <img
                    key={partner.name}
                    src={partner.logoSrc}
                    alt={partner.name}
                    className="h-12 w-auto grayscale transition-all hover:grayscale-0"
                  />
                ) : (
                  <span
                    key={partner.name}
                    className="rounded-lg bg-[var(--color-bg-light)] px-4 py-2 text-sm font-medium text-[var(--color-text-muted)]"
                  >
                    {partner.name}
                  </span>
                )
              )}
            </div>
          ) : (
            <div className="rounded-lg border border-[var(--color-bg-tint)] bg-[var(--color-bg-light)] p-12 text-center">
              <p className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-primary-dark)]">
                Partner logos loading
              </p>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                Partner names and logos will appear here once agreements are
                signed and partners have confirmed in writing that their name
                may be used.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
