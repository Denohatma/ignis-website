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
      <section className="bg-[var(--color-primary-dark)] py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-light)]">
              For financiers
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white sm:text-5xl">
              We turn energy waste into infrastructure.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Structured, verified, portfolio-level clean energy assets in
              Africa. We build the pipeline, standardise the contracts, verify
              the performance, and structure the vehicle. You deploy capital
              into a bankable, monitored portfolio.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-bg-light)] py-20">
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
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                  {prop.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-primary-deep)] py-16">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
                Interested in the pipeline?
              </h2>
              <p className="mt-2 text-white/70">
                We will walk you through the portfolio structure, the contracting
                model, and the performance data.
              </p>
            </div>
            <Button href="/contact" variant="accent" arrow>
              Talk to us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
