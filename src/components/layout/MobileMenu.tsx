"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNavItems } from "@/content/navigation";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <div className="border-t border-[var(--color-bg-tint)] bg-white lg:hidden">
      <div className="space-y-1 px-6 py-4">
        {mainNavItems.map((item) => (
          <div key={item.href}>
            {"children" in item ? (
              <>
                <button
                  onClick={() =>
                    setExpandedItem(
                      expandedItem === item.href ? null : item.href
                    )
                  }
                  className="flex w-full items-center justify-between rounded-[var(--radius-btn)] px-3 py-3 text-base font-medium text-[var(--color-text-body)] hover:bg-[var(--color-bg-tint)]"
                >
                  {item.label}
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      expandedItem === item.href ? "rotate-180" : ""
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
                </button>
                {expandedItem === item.href && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block rounded-[var(--radius-btn)] px-3 py-2 text-sm text-[var(--color-text-muted)] hover:bg-[var(--color-bg-tint)] hover:text-[var(--color-primary)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                onClick={onClose}
                className="block rounded-[var(--radius-btn)] px-3 py-3 text-base font-medium text-[var(--color-text-body)] hover:bg-[var(--color-bg-tint)] hover:text-[var(--color-primary)]"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
        <div className="pt-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full rounded-[var(--radius-btn)] bg-[var(--color-primary)] px-5 py-3 text-center text-base font-medium text-white hover:bg-[var(--color-primary-hover)]"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
