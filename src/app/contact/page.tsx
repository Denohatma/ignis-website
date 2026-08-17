import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ignis Innovation. Whether you are an institution, financier, delivery partner, or programme funder.",
};

const contactReasons = [
  {
    title: "Institutions",
    description:
      "Schools, hospitals, prisons, and faith-based institutions interested in transitioning to clean energy.",
    contact: "Elizabeth Ooro, Commercial Lead",
  },
  {
    title: "Financiers and investors",
    description:
      "Banks, DFIs, impact investors, and carbon partners interested in the portfolio.",
    contact: "Paul Osogo, CEO",
  },
  {
    title: "Delivery partners",
    description:
      "OEMs, EPCs, fabricators, and O&M providers interested in joining the delivery network.",
    contact: "Joan Wanjiku, Operations Lead",
  },
  {
    title: "Programme funders",
    description:
      "Governments, donors, and development partners interested in programme management services.",
    contact: "Wilson Muthui, Partnerships & Business Development Lead",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--color-primary-dark)] py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Whether you are transitioning an institution, financing a
              portfolio, delivering equipment, or funding a programme, the
              conversation starts here.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-bg-light)] py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {contactReasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-lg border border-[var(--color-bg-tint)] bg-white p-6"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-primary-dark)]">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[15px] text-[var(--color-text-muted)]">
                  {reason.description}
                </p>
                <p className="mt-4 text-sm font-medium text-[var(--color-primary)]">
                  {reason.contact}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-lg border border-[var(--color-bg-tint)] bg-white p-8 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-primary-dark)]">
              General enquiries
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)]">
              For general questions about Ignis Innovation, our work, or
              partnership opportunities.
            </p>
            <p className="mt-4 text-lg font-medium text-[var(--color-primary)]">
              info@ignis-innovation.com
            </p>
            <p className="mt-6 text-sm text-[var(--color-text-muted)]">
              Nairobi, Kenya
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
