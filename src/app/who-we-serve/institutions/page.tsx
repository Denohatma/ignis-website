import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "For Institutions",
  description:
    "Clean energy infrastructure for schools, hospitals, prisons, and faith-based institutions. No upfront cost. Fixed monthly fee. Ownership transfers at end of term.",
};

const benefits = [
  {
    title: "No upfront capital",
    description:
      "We finance, install, and maintain the clean energy system. Your institution pays nothing upfront.",
  },
  {
    title: "Fixed monthly fee",
    description:
      "A predictable service fee from your existing fuel budget. Less than you pay today for inefficient fuel.",
  },
  {
    title: "Ownership at end of term",
    description:
      "At the end of the contract, the infrastructure transfers to your institution. It is yours to keep.",
  },
  {
    title: "Maintained and monitored",
    description:
      "Every system is maintained and digitally monitored for the full contract term. Performance is verified continuously.",
  },
];

const segments = [
  { name: "Schools and TVETs", detail: "Boarding and day schools with institutional kitchens" },
  { name: "Health facilities", detail: "Hospitals and clinics with in-patient food service" },
  { name: "Correctional institutions", detail: "Prisons and remand facilities" },
  { name: "Faith-based institutions", detail: "Diocese-aggregated institutions and seminaries" },
];

export default function InstitutionsPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-dark)] py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-light)]">
              For institutions
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white sm:text-5xl">
              Cook more. Burn less. Pay nothing upfront.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Your institution already pays for energy. We replace inefficient
              fuel with clean infrastructure, maintain and monitor it, and charge
              a fixed monthly fee from the budget you already have. At the end
              of the contract, the system is yours.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-bg-light)] py-20">
        <Container>
          <SectionHeading
            title="How it works for your institution"
            subtitle="A simple model that works with your existing budget."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-lg border border-[var(--color-bg-tint)] bg-white p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]">
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
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-primary-dark)]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[15px] text-[var(--color-text-muted)]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            title="Institutions we serve"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {segments.map((segment) => (
              <div
                key={segment.name}
                className="flex items-start gap-4 rounded-lg bg-[var(--color-bg-light)] p-5"
              >
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-primary)]" />
                <div>
                  <p className="font-medium text-[var(--color-text-body)]">
                    {segment.name}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {segment.detail}
                  </p>
                </div>
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
                Ready to transition your institution?
              </h2>
              <p className="mt-2 text-white/70">
                We will assess your facility, calculate the savings, and show
                you what the transition looks like.
              </p>
            </div>
            <Button href="/contact" variant="accent" arrow>
              Start the conversation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
