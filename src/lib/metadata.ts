import type { Metadata } from "next";

const siteUrl = "https://ignis-innovation.com";

export const siteMetadata: Metadata = {
  title: {
    default: "Ignis Innovation | Africa's Energy Services Platform",
    template: "%s | Ignis Innovation",
  },
  description:
    "Africa's energy services platform for institutions and industry. We manage and implement clean energy programmes that turn fuel waste into infrastructure.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ignis Innovation",
    title: "Ignis Innovation | Africa's Energy Services Platform",
    description:
      "Africa's energy services platform for institutions and industry. We manage and implement clean energy programmes that turn fuel waste into infrastructure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignis Innovation | Africa's Energy Services Platform",
    description:
      "Africa's energy services platform for institutions and industry.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
