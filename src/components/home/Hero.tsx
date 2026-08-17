import { Button } from "@/components/shared/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary-dark)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary-deep)] to-[var(--color-primary-dark)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-40">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-accent-light)]">
            Energy services for Africa
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Africa&apos;s energy services platform for institutions and
            industry.
          </h1>
          <p className="mt-6 max-w-xl font-[family-name:var(--font-heading)] text-xl italic text-[var(--color-accent-light)] sm:text-2xl">
            The upgrade hiding in your fuel bill.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            We manage and implement clean energy programmes that convert
            institutional fuel waste into modern infrastructure. Institutions pay
            from existing budgets. No upfront capital. Ownership transfers at the
            end of term.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/programme-implementation" variant="accent" arrow>
              How it works
            </Button>
            <Button href="/who-we-serve/institutions" variant="secondary">
              For institutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
