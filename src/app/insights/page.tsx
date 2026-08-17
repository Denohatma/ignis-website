import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Insights, analysis, and updates from Ignis Innovation on Africa's institutional clean energy transition.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[#062D0A] to-[var(--color-primary-dark)]" />
        <div className="absolute -right-40 -top-20 h-[400px] w-[400px] rounded-full bg-[var(--color-primary)]/8 blur-[100px]" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
              From the team
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Insights
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Analysis, project updates, and perspective on Africa&apos;s
              institutional clean energy transition.
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />
      </section>

      <section className="bg-[var(--color-bg-light)] py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-10 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10">
                <svg
                  className="h-12 w-12 text-[var(--color-primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-primary-dark)] sm:text-4xl">
              Coming soon
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
              We are preparing our first publications on institutional clean
              energy transition, programme design, and the economics of energy
              services in Africa. Check back soon.
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="primary" arrow>
                Get notified
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
