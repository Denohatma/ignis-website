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
      <section className="bg-[var(--color-primary-dark)] py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white sm:text-5xl">
              Who we serve
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              We work with four audiences across Africa&apos;s clean energy
              transition. Each has different needs, different language, and
              different decision criteria. We speak to each on their terms.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-bg-light)] py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="group rounded-lg border-2 border-[var(--color-bg-tint)] bg-white p-8 transition-all hover:border-[var(--color-primary)] hover:shadow-lg"
              >
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-primary-dark)]">
                  {audience.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                  {audience.description}
                </p>
                <div className="mt-6">
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
