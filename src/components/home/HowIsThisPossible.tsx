import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Assess",
    description:
      "We assess institutional energy spend, infrastructure readiness, and governance capacity. Every institution gets a clear picture of what clean energy transition looks like for them, and what it costs today versus what it could cost.",
  },
  {
    number: "02",
    title: "Aggregate",
    description:
      "We organise individual institutions into portfolios large enough to attract financing and standardised enough to underwrite. A single institution is a project. A cohort of institutions with verified expenditure and signed agreements is infrastructure.",
  },
  {
    number: "03",
    title: "Finance and verify",
    description:
      "We structure the financing, deploy the infrastructure, and verify performance from commissioning. Institutions pay a fixed monthly fee from existing fuel budgets. Digital monitoring provides real-time verification that triggers payments and validates impact.",
  },
];

export function HowIsThisPossible() {
  return (
    <section className="bg-[var(--color-bg-light)] py-20">
      <Container>
        <SectionHeading
          title="How is this possible?"
          subtitle="Institutions already pay for energy. We make sure they get clean energy instead."
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="mb-4 font-[family-name:var(--font-heading)] text-5xl font-bold text-[var(--color-primary)]/15">
                {step.number}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-primary-dark)]">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
