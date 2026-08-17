import { Container } from "@/components/ui/Container";
import { Button } from "@/components/shared/Button";

export function CleanCookIQStrip() {
  return (
    <section className="bg-[var(--color-primary-dark)] py-16">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent-light)]">
              Powered by
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white">
              CleanCookIQ
            </h2>
            <p className="mt-4 leading-relaxed text-white/80">
              Our measurement, reporting, and verification platform. CleanCookIQ
              tracks every institution from assessment through deployment to
              ongoing performance, providing the verified data that triggers
              payments and validates impact.
            </p>
          </div>
          <Button href="/cleancookiq" variant="accent" arrow>
            Learn about CleanCookIQ
          </Button>
        </div>
      </Container>
    </section>
  );
}
