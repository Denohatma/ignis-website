import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "For Financiers",
  description:
    "Structured, verified, portfolio-level clean energy assets for banks, DFIs, impact investors, and carbon partners.",
};

const valueProps = [
  {
    title: "Standardised contracting",
    description:
      "Every institution in the portfolio operates under a Clean Energy Service Agreement with a fixed monthly fee, verified payment history, and contractual offtake. Standardisation reduces diligence cost and enables portfolio-level underwriting.",
  },
  {
    title: "Verified performance data",
    description:
      "Device-level digital monitoring from commissioning. Real-time utilisation, fuel displacement, uptime, and savings data at portfolio level. The data you need to underwrite, not the data you hope to collect later.",
  },
  {
    title: "AssetCo structuring",
    description:
      "An asset-owning vehicle that holds the infrastructure, manages receivables, and provides the legal and financial architecture for debt, equity, and carbon participation. Designed for institutional capital, not grant dependency.",
  },
  {
    title: "Carbon as equity upside",
    description:
      "dMRV-verified emission reductions documented from commissioning. Carbon revenue supplements project economics but does not underwrite the base case. The financials work without carbon; carbon improves the return.",
  },
];

export default function FinanciersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[#062D0A] to-[var(--color-primary-dark)]" />
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[var(--color-primary)]/8 blur-[100px]" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
              For financiers
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              We turn energy waste into infrastructure.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Structured, verified, portfolio-level clean energy assets in
              Africa. We build the pipeline, standardise the contracts, verify
              the performance, and structure the vehicle. You deploy capital
              into a bankable, monitored portfolio.
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />
      </section>

      <section className="bg-[var(--color-bg-light)] py-24 lg:py-32">
        <Container>
          <SectionHeading
            title="What we provide to financiers"
            subtitle="The four ingredients infrastructure capital requires."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {valueProps.map((prop) => (
              <Card key={prop.title}>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-primary-dark)]">
                  {prop.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                  {prop.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-primary-deep)] py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-deep)] via-[var(--color-primary-dark)] to-[var(--color-primary-deep)]" />
        <Container className="relative">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white sm:text-3xl">
                Interested in the pipeline?
              </h2>
              <p className="mt-3 text-lg text-white/60">
                We will walk you through the portfolio structure, the contracting
                model, and the performance data.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/contact" variant="accent" arrow>
                Talk to us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
