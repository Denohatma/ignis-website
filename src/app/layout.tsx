import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ignis Innovation",
  description:
    "Africa's energy services platform for institutions and industry.",
  url: "https://ignis-innovation.com",
  foundingLocation: {
    "@type": "Place",
    name: "Nairobi, Kenya",
  },
  areaServed: ["Kenya", "Ethiopia", "Sierra Leone", "Mozambique", "Uganda"],
  knowsAbout: [
    "Clean energy",
    "Institutional cooking",
    "Energy services",
    "Programme management",
    "Clean cooking",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-[var(--color-bg-light)] font-[family-name:var(--font-body)] text-[var(--color-text-body)] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-btn)] focus:bg-[var(--color-primary)] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
