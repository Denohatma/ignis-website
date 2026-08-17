import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Programme Implementation",
  description:
    "The Clean Energy Service Agreement, AssetCo structuring, delivery-partner orchestration, and digital monitoring for institutions, financiers, and delivery partners.",
};

const services = [
  {
    title: "The Clean Energy Service Agreement (CESA)",
    description:
      "One contract. Fixed monthly fee. No upfront capital. The institution pays from its existing fuel budget, and the clean energy system is installed, maintained, and operated for the full contract term. At the end, ownership transfers to the institution.",
  },
  {
    title: "AssetCo structuring and intermediation",
    description:
      "The asset-owning vehicle that holds the infrastructure, manages receivables, engages lenders, oversees collections, and enables refinancing. This is the financial architecture that makes institutional energy transition bankable.",
  },
  {
    title: "Delivery-partner orchestration",
    description:
      "OEMs, EPCs, fabricators, and O&M providers delivering against one performance standard. We coordinate procurement, installation, commissioning, and ongoing maintenance across the portfolio.",
  },
  {
    title: "Digital monitoring and verification",
    description:
      "From commissioning, every asset is monitored at device level. Digital MRV provides the verified performance data that triggers payments, validates impact, and supports carbon credit issuance.",
  },
];

const journeySteps = [
  {
    number: "1",
    title: "Assess",
    description:
      "We assess institutional energy spend, infrastructure readiness, governance, and payment history. Every institution gets a clear readiness score and a concrete transition plan.",
  },
  {
    number: "2",
    title: "Aggregate",
    description:
      "Individual institutions are assembled into cohorts large enough to attract financing and standardised enough to underwrite. Contracts are structured, procurement is coordinated, and the portfolio is prepared for deployment.",
  },
  {
    number: "3",
    title: "Finance and verify",
    description:
      "Financing is structured, infrastructure is deployed, and performance is verified from day one. Institutions pay a fixed monthly fee. Digital monitoring provides the data that triggers payments and validates impact throughout the contract.",
  },
];

export default function ProgrammeImplementationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[#062D0A] to-[var(--color-primary-dark)]" />
        <div className="absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-[var(--color-accent)]/5 blur-[100px]" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
              Pillar 2
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Programme Implementation
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              For institutions, financiers, and delivery partners who need
              projects actually delivered and performing. We handle the
              contracting, the financing architecture, the delivery
              orchestration, and the ongoing verification.
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />
      </section>

      <section className="bg-[var(--color-bg-light)] py-24 lg:py-32">
        <Container>
          <SectionHeading
            title="What we deliver"
            subtitle="From contract to commissioning to ongoing performance."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title}>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-primary-dark)]">
                  {service.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-primary-deep)] py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-deep)] via-[var(--color-primary-dark)] to-[#051F06]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
        <Container className="relative">
          <SectionHeading
            title="How it works"
            subtitle="Three steps from assessment to verified, performing infrastructure."
            align="center"
            light
          />
          <div className="relative grid gap-8 md:grid-cols-3">
            <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent md:block" />
            {journeySteps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border-2 border-[var(--color-accent)] bg-[var(--color-primary-dark)] font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-accent)] shadow-lg shadow-[var(--color-accent)]/10">
                  {step.number}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              The contract
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-primary-dark)] sm:text-4xl lg:text-5xl">
              The CESA model
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-muted)]">
              The Clean Energy Service Agreement is a single contract that
              covers design, procurement, installation, commissioning,
              maintenance, monitoring, and asset transfer. Institutions pay a
              fixed monthly service fee from their existing fuel budget. The fee
              is less than they pay today. At the end of the contract term,
              ownership of the infrastructure transfers to the institution.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { value: "1", label: "Contract" },
                { value: "Fixed", label: "Monthly fee" },
                { value: "Zero", label: "Upfront capital" },
                { value: "Yours", label: "At end of term" },
              ].map((item) => (
                <div key={item.label} className="group">
                  <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-primary-dark)] lg:text-5xl">
                    {item.value}
                  </div>
                  <div className="mx-auto mt-3 h-px w-8 bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent" />
                  <div className="mt-3 text-sm text-[var(--color-text-muted)]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)] via-[#0D3B0F] to-[var(--color-primary-dark)]" />
        <Container className="relative">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white sm:text-3xl">
                Ready to transition your institution?
              </h2>
              <p className="mt-3 text-lg text-white/60">
                We will assess your facility and show you what the economics
                look like.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/contact" variant="accent" arrow>
                Get in touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
