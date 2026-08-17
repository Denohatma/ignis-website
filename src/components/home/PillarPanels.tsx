"use client";

import { Button } from "@/components/shared/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const pillars = [
  {
    title: "We manage programmes",
    description:
      "Technical consultancy, programme design, pipeline origination, cohort construction, and measurement, reporting and verification. For governments, donors, DFIs, counties, and corporates who need a programme designed, run, and verified.",
    href: "/programme-management",
    cta: "Programme Management",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "We implement them",
    description:
      "The Clean Energy Service Agreement, AssetCo structuring, delivery-partner orchestration, and digital monitoring from commissioning. For institutions, financiers, and delivery partners who need projects actually delivered and performing.",
    href: "/programme-implementation",
    cta: "Programme Implementation",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.16-3.36a2.25 2.25 0 01-.98-2.57l.96-3.73a2.25 2.25 0 012.17-1.67h5.18a2.25 2.25 0 012.17 1.67l.96 3.73a2.25 2.25 0 01-.98 2.57l-5.16 3.36a2.25 2.25 0 01-2.56 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75V21m-4.5-4.5L12 21m4.5-4.5L12 21" />
      </svg>
    ),
  },
];

export function PillarPanels() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <AnimatedSection>
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            Two pillars
          </p>
          <h2 className="mx-auto mb-10 max-w-2xl text-center font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-primary-dark)] sm:text-4xl lg:text-5xl">
            One company. Two pillars. End to end.
          </h2>
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.href} delay={i * 150}>
              <div className="glass-card glossy-shine group relative flex h-full flex-col rounded-[var(--radius-card)] p-8 sm:p-10 lg:p-12">
                <div className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 rounded-t-[var(--radius-card)] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-accent)] transition-transform duration-700 group-hover:scale-x-100" />
                <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-bg-tint)] text-[var(--color-primary)] transition-all duration-500 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[var(--color-primary)]/25">
                  {pillar.icon}
                </div>
                <h3 className="relative z-10 font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-primary-dark)] sm:text-3xl lg:text-[2rem]">
                  {pillar.title}
                </h3>
                <p className="relative z-10 mt-5 flex-1 text-[17px] leading-relaxed text-[var(--color-text-muted)]">
                  {pillar.description}
                </p>
                <div className="relative z-10 mt-10">
                  <Button href={pillar.href} variant="primary-dark" arrow>
                    {pillar.cta}
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
