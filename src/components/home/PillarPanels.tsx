import { Button } from "@/components/shared/Button";
import { Container } from "@/components/ui/Container";

const pillars = [
  {
    title: "We manage programmes",
    description:
      "Technical consultancy, programme design, pipeline origination, cohort construction, and measurement, reporting and verification. For governments, donors, DFIs, counties, and corporates who need a programme designed, run, and verified.",
    href: "/programme-management",
    cta: "Programme Management",
  },
  {
    title: "We implement them",
    description:
      "The Clean Energy Service Agreement, AssetCo structuring, delivery-partner orchestration, and digital monitoring from commissioning. For institutions, financiers, and delivery partners who need projects actually delivered and performing.",
    href: "/programme-implementation",
    cta: "Programme Implementation",
  },
];

export function PillarPanels() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.href}
              className="group relative overflow-hidden rounded-lg border-2 border-[var(--color-bg-tint)] p-8 transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-lg sm:p-10"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-[var(--color-primary)] opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-primary-dark)] sm:text-3xl">
                {pillar.title}
              </h3>
              <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">
                {pillar.description}
              </p>
              <div className="mt-8">
                <Button href={pillar.href} variant="primary-dark" arrow>
                  {pillar.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
