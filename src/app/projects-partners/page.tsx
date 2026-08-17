import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[#062D0A] to-[var(--color-primary-dark)]" />
        <div className="absolute -left-40 -bottom-20 h-[500px] w-[500px] rounded-full bg-[var(--color-primary)]/8 blur-[100px]" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
              Our work
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Projects & Partners
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              What we are working on and who we are working with. Every project
              and partner shown here has an active engagement with signed
              agreements and confirmed permissions.
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />
      </section>

      <section className="bg-[var(--color-bg-light)] py-24 lg:py-32">
        <Container>
          <SectionHeading
            title="What we are working on"
            subtitle="Active projects across Kenya and the region."
            eyebrow="Projects"
          />
          {publishedProjects.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {publishedProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          ) : (
            <div className="rounded-[var(--radius-card)] border border-[var(--color-bg-tint)] bg-white p-12 text-center lg:p-16">
              <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-primary-dark)]">
                Projects loading
              </p>
              <p className="mt-4 text-[var(--color-text-muted)]">
                Project details will appear here as counterparty permissions are
                confirmed. We have active engagements across multiple counties
                and national institutions in Kenya.
              </p>
            </div>
          )}
        </Container>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <SectionHeading
            title="Working with"
            subtitle="Partners with signed agreements and confirmed permissions."
            align="center"
            eyebrow="Partners"
          />
          {publishedPartners.length > 0 ? (
            <div className="flex flex-wrap items-center justify-center gap-10">
              {publishedPartners.map((partner) =>
                partner.logoSrc ? (
                  <Image
                    key={partner.name}
                    src={partner.logoSrc}
                    alt={partner.name}
                    width={160}
                    height={48}
                    className="h-12 w-auto grayscale transition-all hover:grayscale-0"
                  />
                ) : (
                  <span
                    key={partner.name}
                    className="rounded-[var(--radius-card)] bg-[var(--color-bg-light)] px-5 py-2.5 text-sm font-medium text-[var(--color-text-muted)]"
                  >
                    {partner.name}
                  </span>
                )
              )}
            </div>
          ) : (
            <div className="rounded-[var(--radius-card)] border border-[var(--color-bg-tint)] bg-[var(--color-bg-light)] p-12 text-center lg:p-16">
              <p className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-primary-dark)]">
                Partner logos loading
              </p>
              <p className="mt-4 text-sm text-[var(--color-text-muted)]">
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
