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
      <section className="bg-[var(--color-primary-dark)] py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-light)]">
              For delivery partners
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white sm:text-5xl">
              Deliver against one performance standard into a growing portfolio
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              We orchestrate OEMs, EPCs, fabricators, and O&M providers into a
              single delivery system. You bring the capability. We bring the
              pipeline, the standards, and the contracts.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-bg-light)] py-20">
        <Container>
          <SectionHeading
            title="Partner with us"
            subtitle="We work with delivery partners across the value chain."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {partnerTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-lg border border-[var(--color-bg-tint)] bg-white p-6"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-primary-dark)]">
                  {type.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-primary-deep)] py-16">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
                Want to join the delivery network?
              </h2>
              <p className="mt-2 text-white/70">
                We will discuss your capabilities, our standards, and the
                pipeline ahead.
              </p>
            </div>
            <Button href="/contact" variant="accent" arrow>
              Get in touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
