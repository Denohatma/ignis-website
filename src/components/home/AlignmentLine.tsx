import { Container } from "@/components/ui/Container";

export function AlignmentLine() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-primary-dark)] sm:text-4xl">
            We turn energy waste into infrastructure.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
            Institutions across Africa spend billions on inefficient fuel every
            year. That expenditure is the financing source. We convert it into
            clean energy infrastructure through standardised contracts, verified
            performance, and structured finance. The savings build the system.
          </p>
        </div>
      </Container>
    </section>
  );
}
