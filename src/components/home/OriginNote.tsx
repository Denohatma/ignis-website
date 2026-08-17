"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/shared/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const markets = ["Kenya", "Ethiopia", "Sierra Leone", "Mozambique", "Uganda"];

export function OriginNote() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-tint)] py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-tint)] via-white/50 to-[var(--color-bg-tint)]" />
      <Container className="relative">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              Our presence
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-primary-dark)] sm:text-4xl lg:text-5xl">
              Built in Kenya for Africa
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-muted)] sm:text-xl">
              Ignis was founded to solve one problem: institutional energy
              transition in Africa has the demand, the economics, and the
              technology, but no one had built the delivery and financing
              infrastructure to connect them. We did.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {markets.map((country) => (
                <span
                  key={country}
                  className="rounded-full border border-[var(--color-primary)]/15 bg-white px-5 py-2 text-sm font-medium text-[var(--color-primary-dark)] shadow-sm transition-all duration-300 hover:border-[var(--color-primary)]/40 hover:shadow-md"
                >
                  {country}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/about" variant="primary-dark" arrow>
                About Ignis
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
