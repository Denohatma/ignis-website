import { Container } from "@/components/ui/Container";
import { StatBlock } from "@/components/shared/StatBlock";
import { proofBarStats } from "@/content/proof-bar";

export function ProofBar() {
  return (
    <section className="bg-[var(--color-primary-deep)] py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-4">
          {proofBarStats.map((stat) => (
            <StatBlock
              key={stat.label}
              value={stat.value}
              label={stat.label}
              light
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
