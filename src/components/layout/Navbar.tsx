"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/content/navigation";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-2xl backdrop-saturate-[1.8]"
          : "bg-white/40 backdrop-blur-md backdrop-saturate-150"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 sm:px-12 lg:px-20">
        <Link href="/" className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80">
          <Image
            src="/images/ignis-logo.jpeg"
            alt="Ignis Innovation"
            width={40}
            height={40}
            className="rounded-xl"
            priority
          />
          <span className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-wide text-[var(--color-primary-dark)]">
            IGNIS
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {mainNavItems.map((item) => {
            const isActive =
              pathname === item.href ||
              ("children" in item &&
                item.children.some((c) => pathname === c.href));

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() =>
                  "children" in item ? setOpenDropdown(item.href) : undefined
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`rounded-xl px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--color-primary)]/8 text-[var(--color-primary)]"
                      : "text-[var(--color-text-body)]/80 hover:bg-black/[0.04] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {item.label}
                  {"children" in item && (
                    <svg
                      className={`ml-1 inline h-3 w-3 transition-transform duration-300 ${
                        openDropdown === item.href ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {"children" in item && openDropdown === item.href && (
                  <div className="absolute left-0 top-full mt-2 w-56 animate-scale-in rounded-2xl border border-white/60 bg-white/80 py-2 shadow-xl shadow-black/8 backdrop-blur-2xl backdrop-saturate-[1.8]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-5 py-3 text-sm transition-all duration-200 ${
                          pathname === child.href
                            ? "bg-[var(--color-primary)]/8 text-[var(--color-primary)] font-medium"
                            : "text-[var(--color-text-body)] hover:bg-black/[0.03] hover:text-[var(--color-primary)]"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-xl bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
          >
            Get in touch
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl p-2.5 text-[var(--color-text-body)] transition-colors hover:bg-black/[0.04] lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-6 w-6 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <MobileMenu onClose={() => setMobileOpen(false)} />
      </div>
    </header>
  );
}
