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
      <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[#062D0A] to-[var(--color-primary-dark)]" />
        <div className="absolute -right-32 -bottom-20 h-[400px] w-[400px] rounded-full bg-[var(--color-primary)]/8 blur-[100px]" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
              For industry
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Industrial clean energy, delivered as a service
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              The same model that works for institutions is opening for
              industrial and commercial operations. If your facility has
              significant thermal energy demand and fuel expenditure, we can
              assess the transition economics.
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />
      </section>

      <section className="bg-[var(--color-bg-light)] py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              Early access
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-primary-dark)] sm:text-4xl">
              This market is opening
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-muted)]">
              We are extending our institutional energy services model into
              industrial applications. The economics are similar: your facility
              already pays for fuel, and the savings from clean energy
              infrastructure can service the financing. We are looking for
              early partners with significant thermal loads who want to explore
              the transition.
            </p>
            <div className="mt-12">
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
