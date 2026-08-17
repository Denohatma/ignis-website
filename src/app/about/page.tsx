import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { teamLeads } from "@/content/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ignis Innovation: Kenya-proven, working across Africa. Building the delivery and financing infrastructure for Africa's institutional clean energy transition.",
};

const markets = [
  { name: "Kenya", status: "Multiple counties and national institutions" },
  { name: "Ethiopia", status: "Active market development" },
  { name: "Sierra Leone", status: "Active market development" },
  { name: "Mozambique", status: "Active market development" },
  { name: "Uganda", status: "Active market development" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-dark)] py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white sm:text-5xl">
              About Ignis Innovation
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Kenya-proven, working across Africa. Ignis was founded to build
              the delivery and financing infrastructure that Africa&apos;s
              institutional clean energy transition needs but did not have.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-bg-light)] py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-primary-dark)]">
              Why Ignis exists
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
              <p>
                Institutional energy transition in Africa has the demand, the
                economics, and the technology. What it did not have was the
                delivery and financing infrastructure to connect them.
              </p>
              <p>
                Schools cook for thousands on firewood. Hospitals feed patients
                on charcoal. The institutions are willing to pay for clean
                energy. They already pay more for dirty energy. But no one had
                built the contracting model, the financial architecture, or the
                verification system to turn that willingness into bankable
                demand.
              </p>
              <p>
                Ignis provides both sides: we manage programmes for the
                organisations that design and fund them, and we implement
                projects for the institutions that need them delivered and
                performing.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading title="Leadership team" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamLeads.map((member) => (
              <div
                key={member.name}
                className="rounded-lg border border-[var(--color-bg-tint)] bg-[var(--color-bg-light)] p-6"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary-dark)] font-[family-name:var(--font-heading)] text-xl font-bold text-white">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-text-body)]">
                  {member.name}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-bg-light)] py-20">
        <Container>
          <SectionHeading
            title="Where we work"
            subtitle="Kenya-proven, working across Africa."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((market) => (
              <div
                key={market.name}
                className="flex items-center gap-4 rounded-lg border border-[var(--color-bg-tint)] bg-white p-5"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] font-[family-name:var(--font-heading)] text-sm font-bold text-white">
                  {market.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="font-medium text-[var(--color-text-body)]">
                    {market.name}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {market.status}
                  </p>
                </div>
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
                Want to work with us?
              </h2>
              <p className="mt-2 text-white/70">
                Whether you are an institution, a financier, a delivery partner,
                or a programme funder.
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
