import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { partners } from "@/content/partners";

export function PartnerStrip() {
  const publishedPartners = partners.filter((p) => p.published);

  if (publishedPartners.length === 0) {
    return (
      <section className="bg-white py-12">
        <Container>
          <div className="text-center">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              Working with
            </p>
            <p className="text-[15px] text-[var(--color-text-muted)]">
              Partner logos will appear here as permissions are confirmed.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-white py-12">
      <Container>
        <p className="mb-10 text-center text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Working with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
          {publishedPartners.map((partner) =>
            partner.logoSrc ? (
              <Image
                key={partner.name}
                src={partner.logoSrc}
                alt={partner.name}
                width={120}
                height={40}
                className="h-10 w-auto grayscale transition-all duration-500 hover:grayscale-0"
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
