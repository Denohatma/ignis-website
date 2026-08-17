"use client";

import { Container } from "@/components/ui/Container";
import { proofBarStats } from "@/content/proof-bar";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ProofBar() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#041E08] via-[var(--color-primary-dark)] to-[#062D0A]" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="absolute left-1/2 top-0 h-full w-[600px] -translate-x-1/2 bg-[var(--color-primary)]/[0.03] blur-[100px]" />
      <Container className="relative">
        <AnimatedSection>
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-light)]/80">
            The numbers
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 lg:grid-cols-4">
          {proofBarStats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 100}>
              <div className="group text-center">
                <div className="font-[family-name:var(--font-heading)] text-5xl font-bold text-white transition-all duration-500 group-hover:text-[var(--color-accent-light)] sm:text-6xl lg:text-7xl">
                  {stat.value}
                </div>
                <div className="mx-auto mt-5 h-px w-10 bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent transition-all duration-500 group-hover:w-16" />
                <div className="mt-4 text-sm leading-snug tracking-wide text-white/40">
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
