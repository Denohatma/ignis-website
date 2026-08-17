import { Container } from "@/components/ui/Container";
import { partners } from "@/content/partners";

export function PartnerStrip() {
  const publishedPartners = partners.filter((p) => p.published);

  if (publishedPartners.length === 0) {
    return (
      <section className="bg-white py-16">
        <Container>
          <div className="text-center">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
              Working with
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">
              Partner logos will appear here as permissions are confirmed.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-white py-16">
      <Container>
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
          Working with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {publishedPartners.map((partner) =>
            partner.logoSrc ? (
              <img
                key={partner.name}
                src={partner.logoSrc}
                alt={partner.name}
                className="h-10 w-auto grayscale transition-all hover:grayscale-0"
              />
            ) : (
              <span
                key={partner.name}
                className="text-sm font-medium text-[var(--color-text-muted)]"
              >
                {partner.name}
              </span>
            )
          )}
        </div>
      </Container>
    </section>
  );
}
