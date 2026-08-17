"use client";

import { Container } from "@/components/ui/Container";
import { proofBarStats } from "@/content/proof-bar";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ProofBar() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary-deep)] py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-deep)] via-[var(--color-primary-dark)] to-[var(--color-primary-deep)]" />
      <Container className="relative">
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 lg:grid-cols-4">
          {proofBarStats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 100}>
              <div className="text-center">
                <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white sm:text-5xl lg:text-[3.5rem]">
                  {stat.value}
                </div>
                <div className="mx-auto mt-3 h-0.5 w-8 bg-[var(--color-accent)]" />
                <div className="mt-3 text-sm leading-snug text-white/60">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
