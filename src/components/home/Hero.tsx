import { Button } from "@/components/shared/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary-dark)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary-deep)] to-[var(--color-primary-dark)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-[var(--color-accent)]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-40">
        <div className="max-w-3xl">
          <p className="animate-fade-in-up mb-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-accent-light)]">
            Energy services for Africa
          </p>
          <h1 className="animate-fade-in-up animate-delay-100 font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.5rem]">
            Africa&apos;s energy services platform for institutions and
            industry.
          </h1>
          <p className="animate-fade-in-up animate-delay-200 mt-6 max-w-xl font-[family-name:var(--font-heading)] text-xl italic text-[var(--color-accent-light)] sm:text-2xl">
            The upgrade hiding in your fuel bill.
          </p>
          <p className="animate-fade-in-up animate-delay-300 mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            We manage and implement clean energy programmes that convert
            institutional fuel waste into modern infrastructure. Institutions pay
            from existing budgets. No upfront capital. Ownership transfers at the
            end of term.
          </p>
          <div className="animate-fade-in-up animate-delay-400 mt-10 flex flex-wrap gap-4">
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
