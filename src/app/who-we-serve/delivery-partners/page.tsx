import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "For Delivery Partners",
  description:
    "OEMs, EPCs, fabricators, and O&M providers delivering clean energy infrastructure into a growing institutional portfolio.",
};

const partnerTypes = [
  {
    title: "OEMs and equipment manufacturers",
    description:
      "Supply equipment into a growing portfolio with standardised procurement, volume pricing, and predictable demand. We coordinate specifications, testing, and quality standards across the portfolio.",
  },
  {
    title: "EPCs and installation contractors",
    description:
      "Install and commission institutional energy systems to one performance standard. We provide site assessments, design specifications, and commissioning protocols. You deliver the installation.",
  },
  {
    title: "Fabricators",
    description:
      "Manufacture components and assemblies to portfolio-level specifications. Standardised designs mean repeatable production and growing order volumes as the portfolio scales.",
  },
  {
    title: "O&M providers",
    description:
      "Maintain and service deployed assets over the contract term. Regional service hubs, response SLAs, and performance targets. Maintenance is a financial necessity, not an afterthought.",
  },
];

export default function DeliveryPartnersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[#062D0A] to-[var(--color-primary-dark)]" />
        <div className="absolute -left-40 -top-20 h-[500px] w-[500px] rounded-full bg-[var(--color-accent)]/5 blur-[100px]" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
              For delivery partners
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Deliver against one performance standard into a growing portfolio
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              We orchestrate OEMs, EPCs, fabricators, and O&M providers into a
              single delivery system. You bring the capability. We bring the
              pipeline, the standards, and the contracts.
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />
      </section>

      <section className="bg-[var(--color-bg-light)] py-24 lg:py-32">
        <Container>
          <SectionHeading
            title="Partner with us"
            subtitle="We work with delivery partners across the value chain."
            eyebrow="Delivery network"
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {partnerTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-[var(--radius-card)] border border-[var(--color-bg-tint)] bg-white p-8 transition-all duration-500 hover:border-[var(--color-primary)]/15 hover:shadow-xl hover:shadow-[var(--color-primary)]/5 lg:p-10"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-primary-dark)]">
                  {type.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                  {type.description}
                </p>
              </div>
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
                Want to join the delivery network?
              </h2>
              <p className="mt-3 text-lg text-white/60">
                We will discuss your capabilities, our standards, and the
                pipeline ahead.
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
