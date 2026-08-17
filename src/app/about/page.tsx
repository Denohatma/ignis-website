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
      <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[#062D0A] to-[var(--color-primary-dark)]" />
        <div className="absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-[var(--color-primary)]/8 blur-[100px]" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
              About us
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              About Ignis Innovation
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Kenya-proven, working across Africa. Ignis was founded to build
              the delivery and financing infrastructure that Africa&apos;s
              institutional clean energy transition needs but did not have.
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />
      </section>

      <section className="bg-[var(--color-bg-light)] py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-primary-dark)] sm:text-4xl">
              Why Ignis exists
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--color-text-muted)]">
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

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <SectionHeading title="Leadership team" eyebrow="Our team" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {teamLeads.map((member) => (
              <div
                key={member.name}
                className="group rounded-[var(--radius-card)] border border-[var(--color-bg-tint)] bg-[var(--color-bg-light)] p-8 transition-all duration-500 hover:border-[var(--color-primary)]/15 hover:shadow-xl hover:shadow-[var(--color-primary)]/5"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary-dark)] font-[family-name:var(--font-heading)] text-xl font-bold text-white transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[var(--color-primary-dark)]/20">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-text-body)]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-bg-light)] py-24 lg:py-32">
        <Container>
          <SectionHeading
            title="Where we work"
            subtitle="Kenya-proven, working across Africa."
            eyebrow="Our markets"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((market) => (
              <div
                key={market.name}
                className="flex items-center gap-5 rounded-[var(--radius-card)] border border-[var(--color-bg-tint)] bg-white p-6 transition-all duration-300 hover:border-[var(--color-primary)]/20 hover:shadow-lg hover:shadow-[var(--color-primary)]/5"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)] font-[family-name:var(--font-heading)] text-sm font-bold text-white">
                  {market.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="font-medium text-[var(--color-text-body)]">
                    {market.name}
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--color-text-muted)]">
                    {market.status}
                  </p>
                </div>
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
                Want to work with us?
              </h2>
              <p className="mt-3 text-lg text-white/60">
                Whether you are an institution, a financier, a delivery partner,
                or a programme funder.
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
