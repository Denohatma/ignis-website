import { Container } from "@/components/ui/Container";
import { Button } from "@/components/shared/Button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-light)] py-36 lg:py-44">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/3 blur-[120px]" />
      <Container className="relative">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-[family-name:var(--font-heading)] text-8xl font-bold text-[var(--color-primary)]/15 lg:text-9xl">
            404
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-primary-dark)] sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-5 text-lg text-[var(--color-text-muted)]">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-10">
            <Button href="/" variant="primary" arrow>
              Back to homepage
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
