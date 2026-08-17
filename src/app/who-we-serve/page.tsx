import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Ignis serves institutions, industry, financiers, and delivery partners across Africa's clean energy transition.",
};

const audiences = [
  {
    title: "Institutions",
    description:
      "Schools, hospitals, correctional facilities, and faith-based institutions transitioning from inefficient fuel to clean energy infrastructure. No upfront cost. Fixed monthly fee. Ownership at end of term.",
    href: "/who-we-serve/institutions",
  },
  {
    title: "Industry",
    description:
      "Industrial and commercial operations with significant thermal energy demand. We are opening this market with the same model that works for institutions.",
    href: "/who-we-serve/industry",
  },
  {
    title: "Financiers",
    description:
      "Banks, DFIs, impact investors, and carbon partners looking for structured, verified, portfolio-level clean energy assets in Africa.",
    href: "/who-we-serve/financiers",
  },
  {
    title: "Delivery Partners",
    description:
      "OEMs, EPCs, fabricators, and O&M providers who want to deliver against one performance standard into a growing institutional portfolio.",
    href: "/who-we-serve/delivery-partners",
  },
];

export default function WhoWeServePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[#062D0A] to-[var(--color-primary-dark)]" />
        <div className="absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full bg-[var(--color-primary)]/8 blur-[100px]" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
              Our audiences
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Who we serve
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              We work with four audiences across Africa&apos;s clean energy
              transition. Each has different needs, different language, and
              different decision criteria. We speak to each on their terms.
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />
      </section>

      <section className="bg-[var(--color-bg-light)] py-24 lg:py-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="group rounded-[var(--radius-card)] border border-[var(--color-bg-tint)] bg-white p-8 transition-all duration-500 hover:border-[var(--color-primary)]/15 hover:shadow-xl hover:shadow-[var(--color-primary)]/5 lg:p-10"
              >
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-primary-dark)]">
                  {audience.title}
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                  {audience.description}
                </p>
                <div className="mt-8">
                  <Button href={audience.href} variant="primary-dark" arrow>
                    Learn more
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
