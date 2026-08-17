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
      <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[#062D0A] to-[var(--color-primary-dark)]" />
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[var(--color-accent)]/8 blur-[100px]" />
        <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-[var(--color-primary)]/10 blur-[80px]" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
              Powered by Ignis
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              CleanCookIQ
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Our measurement, reporting, and verification platform. CleanCookIQ
              tracks every institution from assessment through deployment to
              ongoing performance, providing the verified data that triggers
              payments and validates impact.
            </p>
            <div className="mt-10">
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
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />
      </section>

      <section className="bg-[var(--color-bg-light)] py-24 lg:py-32">
        <Container>
          <SectionHeading
            title="What CleanCookIQ does"
            subtitle="End-to-end programme intelligence, from pipeline to verified impact."
            eyebrow="Capabilities"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-[var(--radius-card)] border border-[var(--color-bg-tint)] bg-white p-8 transition-all duration-500 hover:border-[var(--color-primary)]/15 hover:shadow-xl hover:shadow-[var(--color-primary)]/5 lg:p-10"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-primary-dark)]">
                  {cap.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              The foundation
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-primary-dark)] sm:text-4xl lg:text-5xl">
              Why this matters
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-muted)]">
              Pipeline visibility, standardised contracting, embedded MRV, and
              portfolio-level performance data are the four ingredients
              infrastructure capital requires. Every previous attempt at clean
              cooking finance at scale failed because at least one was missing.
              CleanCookIQ provides all four.
            </p>
            <div className="mt-12">
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
