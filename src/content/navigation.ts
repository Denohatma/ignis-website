export const mainNavItems = [
  {
    label: "Programme Management",
    href: "/programme-management",
  },
  {
    label: "Programme Implementation",
    href: "/programme-implementation",
  },
  {
    label: "Who We Serve",
    href: "/who-we-serve",
    children: [
      { label: "Institutions", href: "/who-we-serve/institutions" },
      { label: "Industry", href: "/who-we-serve/industry" },
      { label: "Financiers", href: "/who-we-serve/financiers" },
      { label: "Delivery Partners", href: "/who-we-serve/delivery-partners" },
    ],
  },
  {
    label: "Projects & Partners",
    href: "/projects-partners",
  },
  {
    label: "CleanCookIQ",
    href: "/cleancookiq",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Insights",
    href: "/insights",
  },
] as const;

export const footerNav = {
  pillars: [
    { label: "Programme Management", href: "/programme-management" },
    { label: "Programme Implementation", href: "/programme-implementation" },
  ],
  audiences: [
    { label: "Institutions", href: "/who-we-serve/institutions" },
    { label: "Industry", href: "/who-we-serve/industry" },
    { label: "Financiers", href: "/who-we-serve/financiers" },
    { label: "Delivery Partners", href: "/who-we-serve/delivery-partners" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Projects & Partners", href: "/projects-partners" },
    { label: "CleanCookIQ", href: "/cleancookiq" },
    { label: "Insights", href: "/insights" },
  ],
} as const;
