"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/shared/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CleanCookIQStrip() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-14 lg:py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)] via-[#0D3B0F] to-[var(--color-primary-dark)]" />
      <div className="absolute -right-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/8 blur-[100px]" />
      <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-[var(--color-primary)]/10 blur-[80px]" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Container className="relative">
        <AnimatedSection>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
                Powered by
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                CleanCookIQ
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                Our measurement, reporting, and verification platform. CleanCookIQ
                tracks every institution from assessment through deployment to
                ongoing performance, providing the verified data that triggers
                payments and validates impact.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/cleancookiq" variant="accent" arrow>
                Learn about CleanCookIQ
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
