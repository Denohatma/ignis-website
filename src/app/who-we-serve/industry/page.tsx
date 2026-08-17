import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "For Industry",
  description:
    "Clean energy services for industrial and commercial operations with significant thermal energy demand across Africa.",
};

export default function IndustryPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-dark)] py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-light)]">
              For industry
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white sm:text-5xl">
              Industrial clean energy, delivered as a service
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              The same model that works for institutions is opening for
              industrial and commercial operations. If your facility has
              significant thermal energy demand and fuel expenditure, we can
              assess the transition economics.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-bg-light)] py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-primary-dark)]">
              This market is opening
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
              We are extending our institutional energy services model into
              industrial applications. The economics are similar: your facility
              already pays for fuel, and the savings from clean energy
              infrastructure can service the financing. We are looking for
              early partners with significant thermal loads who want to explore
              the transition.
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="primary" arrow>
                Express interest
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
