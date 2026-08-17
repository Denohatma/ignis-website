import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "CleanCookIQ",
  description:
    "Ignis's measurement, reporting, and verification platform. CleanCookIQ tracks every institution from assessment through deployment to ongoing performance.",
};

const capabilities = [
  {
    title: "Pipeline intelligence",
    description:
      "Map institutional demand, score readiness, and build verified pipelines. Every institution is assessed against standardised criteria before entering the portfolio.",
  },
  {
    title: "Programme coordination",
    description:
      "Manage cohort assembly, contracting workflows, procurement, and deployment tracking across the portfolio. One system for the full lifecycle.",
  },
  {
    title: "Digital MRV",
    description:
      "Device-level monitoring from commissioning. Cooking sessions, fuel displacement, uptime, and savings data verified continuously. The payment trigger and the impact evidence.",
  },
  {
    title: "Reporting and compliance",
    description:
      "Real-time dashboards for programme managers, financiers, government counterparties, and carbon verification bodies. The data each stakeholder needs, in the format they need it.",
  },
];

export default function CleanCookIQPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-dark)] py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-light)]">
              Powered by Ignis
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white sm:text-5xl">
              CleanCookIQ
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Our measurement, reporting, and verification platform. CleanCookIQ
              tracks every institution from assessment through deployment to
              ongoing performance, providing the verified data that triggers
              payments and validates impact.
            </p>
            <div className="mt-8">
              <Button
                href="https://cleancookiq.com"
                variant="accent"
                arrow
              >
                Go to CleanCookIQ platform
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-bg-light)] py-20">
        <Container>
          <SectionHeading
            title="What CleanCookIQ does"
            subtitle="End-to-end programme intelligence, from pipeline to verified impact."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-lg border border-[var(--color-bg-tint)] bg-white p-6"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-primary-dark)]">
                  {cap.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-primary-dark)]">
              Why this matters
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
              Pipeline visibility, standardised contracting, embedded MRV, and
              portfolio-level performance data are the four ingredients
              infrastructure capital requires. Every previous attempt at clean
              cooking finance at scale failed because at least one was missing.
              CleanCookIQ provides all four.
            </p>
            <div className="mt-10">
              <Button
                href="https://cleancookiq.com"
                variant="primary"
                arrow
              >
                Access the platform
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
