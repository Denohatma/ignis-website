"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Assess",
    description:
      "We assess institutional energy spend, infrastructure readiness, and governance capacity. Every institution gets a clear picture of what clean energy transition looks like for them, and what it costs today versus what it could cost.",
  },
  {
    number: "02",
    title: "Aggregate",
    description:
      "We organise individual institutions into portfolios large enough to attract financing and standardised enough to underwrite. A single institution is a project. A cohort of institutions with verified expenditure and signed agreements is infrastructure.",
  },
  {
    number: "03",
    title: "Finance and verify",
    description:
      "We structure the financing, deploy the infrastructure, and verify performance from commissioning. Institutions pay a fixed monthly fee from existing fuel budgets. Digital monitoring provides real-time verification that triggers payments and validates impact.",
  },
];

export function HowIsThisPossible() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <AnimatedSection>
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            Our process
          </p>
          <h2 className="mx-auto mb-6 max-w-xl text-center font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-primary-dark)] sm:text-4xl lg:text-5xl">
            How is this possible?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-[var(--color-text-muted)]">
            Institutions already pay for energy. We make sure they get clean energy instead.
          </p>
        </AnimatedSection>

        <div className="relative grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          <div className="absolute left-0 right-0 top-[60px] hidden h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/15 to-transparent md:block" />
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 150}>
              <div className="glass-card glossy-shine group relative rounded-[var(--radius-card)] p-8 lg:p-10">
                <div className="relative z-10 mb-8 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-[var(--color-primary-dark)] font-[family-name:var(--font-heading)] text-2xl font-bold text-white shadow-lg shadow-[var(--color-primary-dark)]/20 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[var(--color-primary-dark)]/30">
                  {step.number}
                </div>
                <h3 className="relative z-10 font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-primary-dark)]">
                  {step.title}
                </h3>
                <p className="relative z-10 mt-4 text-[16px] leading-relaxed text-[var(--color-text-muted)]">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
