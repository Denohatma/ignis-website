import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-primary-dark)] text-white">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-12 lg:px-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/ignis-logo.jpeg"
                alt="Ignis Innovation"
                width={36}
                height={36}
                className="rounded"
              />
              <span className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-wide">
                IGNIS
              </span>
            </Link>
            <p className="mt-5 text-[15px] leading-relaxed text-white/60">
              Africa&apos;s energy services platform for institutions and
              industry.
            </p>
            <p className="mt-3 font-[family-name:var(--font-heading)] text-sm italic text-[var(--color-accent-light)]/80">
              The upgrade hiding in your fuel bill.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-white/40">
              What We Do
            </h3>
            <ul className="space-y-3.5">
              {footerNav.pillars.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-white/60 transition-all duration-300 hover:text-white hover:pl-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-white/40">
              Who We Serve
            </h3>
            <ul className="space-y-3.5">
              {footerNav.audiences.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-white/60 transition-all duration-300 hover:text-white hover:pl-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-white/40">
              Company
            </h3>
            <ul className="space-y-3.5">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-white/60 transition-all duration-300 hover:text-white hover:pl-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            Kenya-proven, working across Africa.
          </p>
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Ignis Innovation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
