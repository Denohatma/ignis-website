"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/shared/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function OriginNote() {
  return (
    <section className="bg-[var(--color-bg-tint)] py-24">
      <Container>
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-primary-dark)] sm:text-3xl">
              Built in Kenya for Africa
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
              Ignis was founded to solve one problem: institutional energy
              transition in Africa has the demand, the economics, and the
              technology, but no one had built the delivery and financing
              infrastructure to connect them. We did.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {["Kenya", "Ethiopia", "Sierra Leone", "Mozambique", "Uganda"].map(
                (country) => (
                  <span
                    key={country}
                    className="rounded-full border border-[var(--color-primary)]/20 bg-white px-4 py-1.5 text-sm font-medium text-[var(--color-primary-dark)]"
                  >
                    {country}
                  </span>
                )
              )}
            </div>
            <div className="mt-10">
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
