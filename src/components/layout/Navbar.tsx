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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-bg-tint)] bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-12 lg:px-20">
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <Image
            src="/images/ignis-logo.jpeg"
            alt="Ignis Innovation"
            width={40}
            height={40}
            className="rounded"
            priority
          />
          <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-primary-dark)]">
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
                  className={`rounded-[var(--radius-btn)] px-3 py-2 text-[13px] font-medium transition-colors ${
                    isActive
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text-body)] hover:bg-[var(--color-bg-tint)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {item.label}
                  {"children" in item && (
                    <svg
                      className={`ml-1 inline h-3 w-3 transition-transform ${
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
                  <div className="absolute left-0 top-full mt-1 w-56 animate-fade-in-up rounded-lg border border-[var(--color-bg-tint)] bg-white py-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          pathname === child.href
                            ? "bg-[var(--color-bg-tint)] text-[var(--color-primary)] font-medium"
                            : "text-[var(--color-text-body)] hover:bg-[var(--color-bg-tint)] hover:text-[var(--color-primary)]"
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
            className="rounded-[var(--radius-btn)] bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-md"
          >
            Get in touch
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-[var(--radius-btn)] p-2 text-[var(--color-text-body)] transition-colors hover:bg-[var(--color-bg-tint)] lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-6 w-6 transition-transform"
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
