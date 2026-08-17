"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNavItems } from "@/content/navigation";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-bg-tint)] bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-12 lg:px-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/ignis-logo.jpeg"
            alt="Ignis Innovation"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-primary-dark)]">
            IGNIS
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {mainNavItems.map((item) => (
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
                className="rounded-[var(--radius-btn)] px-3 py-2 text-sm font-medium text-[var(--color-text-body)] transition-colors hover:bg-[var(--color-bg-tint)] hover:text-[var(--color-primary)]"
              >
                {item.label}
                {"children" in item && (
                  <svg
                    className="ml-1 inline h-3 w-3"
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
                <div className="absolute left-0 top-full mt-0 w-56 rounded-lg border border-[var(--color-bg-tint)] bg-white py-2 shadow-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-[var(--color-text-body)] hover:bg-[var(--color-bg-tint)] hover:text-[var(--color-primary)]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-[var(--radius-btn)] bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            Get in touch
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden rounded-[var(--radius-btn)] p-2 text-[var(--color-text-body)] hover:bg-[var(--color-bg-tint)]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  );
}
