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
      <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[#062D0A] to-[var(--color-primary-dark)]" />
        <div className="absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-[var(--color-primary)]/8 blur-[100px]" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
              Contact
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Get in touch
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Whether you are transitioning an institution, financing a
              portfolio, delivering equipment, or funding a programme, the
              conversation starts here.
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />
      </section>

      <section className="bg-[var(--color-bg-light)] py-24 lg:py-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {contactReasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-[var(--radius-card)] border border-[var(--color-bg-tint)] bg-white p-8 transition-all duration-500 hover:border-[var(--color-primary)]/15 hover:shadow-xl hover:shadow-[var(--color-primary)]/5 lg:p-10"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-primary-dark)]">
                  {reason.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                  {reason.description}
                </p>
                <p className="mt-5 text-sm font-medium text-[var(--color-primary)]">
                  {reason.contact}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[var(--radius-card)] border border-[var(--color-bg-tint)] bg-white p-10 text-center lg:p-12">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              General
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-primary-dark)] sm:text-3xl">
              General enquiries
            </h2>
            <p className="mt-5 text-lg text-[var(--color-text-muted)]">
              For general questions about Ignis Innovation, our work, or
              partnership opportunities.
            </p>
            <p className="mt-5 text-lg font-medium text-[var(--color-primary)]">
              info@ignis-innovation.com
            </p>
            <div className="mx-auto mt-4 h-px w-12 bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent" />
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              Nairobi, Kenya
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
