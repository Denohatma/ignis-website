"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/shared/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CleanCookIQStrip() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-20">
      <div className="absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/5 blur-3xl" />
      <Container className="relative">
        <AnimatedSection>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-light)]">
                Powered by
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
                CleanCookIQ
              </h2>
              <p className="mt-4 leading-relaxed text-white/75">
                Our measurement, reporting, and verification platform. CleanCookIQ
                tracks every institution from assessment through deployment to
                ongoing performance, providing the verified data that triggers
                payments and validates impact.
              </p>
            </div>
            <Button href="/cleancookiq" variant="accent" arrow>
              Learn about CleanCookIQ
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
