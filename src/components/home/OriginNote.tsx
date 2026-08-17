import { Container } from "@/components/ui/Container";
import { Button } from "@/components/shared/Button";

export function OriginNote() {
  return (
    <section className="bg-[var(--color-bg-tint)] py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-primary-dark)] sm:text-3xl">
            Built in Kenya for Africa
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
            Ignis was founded to solve one problem: institutional energy
            transition in Africa has the demand, the economics, and the
            technology, but no one had built the delivery and financing
            infrastructure to connect them. We did.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
            Kenya-proven, working across Africa. Active in Kenya, Ethiopia,
            Sierra Leone, Mozambique, and Uganda.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="primary-dark" arrow>
              About Ignis
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
