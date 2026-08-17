import { Container } from "@/components/ui/Container";
import { Button } from "@/components/shared/Button";

export default function NotFound() {
  return (
    <section className="bg-[var(--color-bg-light)] py-32">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="font-[family-name:var(--font-heading)] text-6xl font-bold text-[var(--color-primary)]/20">
            404
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-primary-dark)]">
            Page not found
          </h1>
          <p className="mt-4 text-[var(--color-text-muted)]">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8">
            <Button href="/" variant="primary" arrow>
              Back to homepage
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
