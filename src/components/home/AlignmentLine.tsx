"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function AlignmentLine() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-light)] py-14 lg:py-16">
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--color-primary)]/15 to-transparent" />
      <Container>
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 h-10 w-px bg-gradient-to-b from-transparent to-[var(--color-primary)]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-primary-dark)] sm:text-4xl lg:text-5xl">
              We turn energy waste into infrastructure.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-muted)] sm:text-xl">
              Institutions across Africa spend billions on inefficient fuel every
              year. That expenditure is the financing source. We convert it into
              clean energy infrastructure through standardised contracts, verified
              performance, and structured finance. The savings build the system.
            </p>
            <div className="mx-auto mt-5 h-10 w-px bg-gradient-to-b from-[var(--color-primary)] to-transparent" />
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
