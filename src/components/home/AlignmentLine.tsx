"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function AlignmentLine() {
  return (
    <section className="bg-white py-24">
      <Container>
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 h-12 w-0.5 bg-gradient-to-b from-transparent to-[var(--color-primary)]" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-primary-dark)] sm:text-4xl">
              We turn energy waste into infrastructure.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
              Institutions across Africa spend billions on inefficient fuel every
              year. That expenditure is the financing source. We convert it into
              clean energy infrastructure through standardised contracts, verified
              performance, and structured finance. The savings build the system.
            </p>
            <div className="mx-auto mt-6 h-12 w-0.5 bg-gradient-to-b from-[var(--color-primary)] to-transparent" />
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
