import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Programme Management",
  description:
    "Technical consultancy, programme design and management, and measurement, reporting and verification for governments, donors, DFIs, and corporates.",
};

const services = [
  {
    title: "Technical and commercial consultancy",
    items: [
      "Energy audits and baseline assessments",
      "Feasibility studies and market analysis",
      "Financial structuring and modelling",
      "Technology option appraisal",
    ],
  },
  {
    title: "Programme design and management",
    items: [
      "Pipeline origination and eligibility screening",
      "Cohort construction and portfolio assembly",
      "Standardised contracting and procurement design",
      "RBF and grant programme management",
    ],
  },
  {
    title: "Measurement, reporting and verification",
    items: [
      "Digital MRV through CleanCookIQ",
      "Device-level monitoring and data collection",
      "Impact verification and reporting",
      "Carbon credit documentation support",
    ],
  },
];

const audiences = [
  "Governments and national agencies",
  "Donors and development finance institutions",
  "County governments",
  "Corporates with institutional energy programmes",
];

export default function ProgrammeManagementPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-dark)] py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-light)]">
              Pillar 1
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white sm:text-5xl">
              Programme Management
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              For governments, donors, DFIs, counties, and corporates who need a
              programme designed, run, and verified. We bring the technical
              expertise, programme architecture, and verification infrastructure.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-bg-light)] py-20">
        <Container>
          <SectionHeading
            title="What we deliver"
            subtitle="End-to-end programme management from design through verification."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-primary-dark)]">
                  {service.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] text-[var(--color-text-muted)]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            title="Who this is for"
            subtitle="We work with organisations that need programmes designed, managed, and verified at scale."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="flex items-center gap-4 rounded-lg border border-[var(--color-bg-tint)] bg-[var(--color-bg-light)] p-5"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-[var(--color-text-body)] font-medium">
                  {audience}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-primary-deep)] py-16">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
                Need a programme designed, managed, or verified?
              </h2>
              <p className="mt-2 text-white/70">
                We will scope the engagement and connect you with the right team.
              </p>
            </div>
            <Button href="/contact" variant="accent" arrow>
              Get in touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
