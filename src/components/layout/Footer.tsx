import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-12 lg:px-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/ignis-logo.jpeg"
                alt="Ignis Innovation"
                width={36}
                height={36}
                className="rounded"
              />
              <span className="font-[family-name:var(--font-heading)] text-lg font-bold">
                IGNIS
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Africa&apos;s energy services platform for institutions and
              industry.
            </p>
            <p className="mt-2 font-[family-name:var(--font-heading)] text-sm italic text-[var(--color-accent-light)]">
              The upgrade hiding in your fuel bill.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-white/50">
              What We Do
            </h3>
            <ul className="space-y-3">
              {footerNav.pillars.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-white/50">
              Who We Serve
            </h3>
            <ul className="space-y-3">
              {footerNav.audiences.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-white/50">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            Kenya-proven, working across Africa.
          </p>
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Ignis Innovation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
