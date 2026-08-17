import { Button } from "@/components/shared/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary-dark)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#041E08] via-[var(--color-primary-dark)] to-[#062D0A]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute -right-40 -top-40 h-[700px] w-[700px] animate-[pulse-glow_8s_ease-in-out_infinite] rounded-full bg-[var(--color-primary)]/10 blur-[150px]" />
      <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] animate-[pulse-glow_10s_ease-in-out_infinite_2s] rounded-full bg-[var(--color-accent)]/6 blur-[120px]" />
      <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] animate-[pulse-glow_12s_ease-in-out_infinite_4s] rounded-full bg-[var(--color-primary-support)]/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-primary-dark)] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-12 sm:py-32 lg:px-20 lg:py-40">
        <div className="max-w-3xl">
          <p className="animate-fade-in-up mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
            Energy services for Africa
          </p>
          <h1 className="animate-fade-in-up animate-delay-100 font-[family-name:var(--font-heading)] text-[2.75rem] font-bold leading-[1.05] text-white sm:text-6xl lg:text-[4.5rem]">
            Africa&apos;s energy services platform for institutions and
            industry.
          </h1>
          <p className="animate-fade-in-up animate-delay-200 mt-5 max-w-lg font-[family-name:var(--font-heading)] text-2xl italic text-[var(--color-accent-light)] sm:text-3xl">
            The upgrade hiding in your fuel bill.
          </p>
          <p className="animate-fade-in-up animate-delay-300 mt-6 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl">
            We manage and implement clean energy programmes that convert
            institutional fuel waste into modern infrastructure. Institutions pay
            from existing budgets. No upfront capital. Ownership transfers at the
            end of term.
          </p>
          <div className="animate-fade-in-up animate-delay-400 mt-8 flex flex-wrap gap-4">
            <Button href="/programme-implementation" variant="accent" arrow>
              How it works
            </Button>
            <Button href="/who-we-serve/institutions" variant="secondary">
              For institutions
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />
    </section>
  );
}
