export interface Project {
  title: string;
  location: string;
  partners: string;
  description: string;
  metric: string;
  imageSrc?: string;
  published: boolean;
}

export const projects: Project[] = [
  {
    title: "Taita Taveta Institutional Clean Cooking Market Strengthening",
    location: "Taita Taveta County, Kenya",
    partners: "IRENA, Gamos East Africa, CCAK, MECS, Taita Taveta County Government",
    description:
      "Cooking and cost data collection from schools and businesses, financial-case analysis, and financial institution engagement. Ignis provides data, verification, and finance engagement.",
    metric: "Multi-partner consortium across one county",
    published: false,
  },
  {
    title: "Machakos Institutional Kitchen",
    location: "Machakos, Kenya",
    partners: "NACONEK",
    description:
      "Clean cooking infrastructure for a national school. First NACONEK engagement delivering institutional-grade kitchen systems.",
    metric: "First NACONEK institutional deployment",
    published: false,
  },
  {
    title: "Makueni County Partnership",
    location: "Makueni County, Kenya",
    partners: "County Government of Makueni",
    description:
      "County pipeline development and investment mobilisation for institutional clean cooking across Makueni County.",
    metric: "County-wide pipeline programme",
    published: false,
  },
  {
    title: "Institutional Clean Cooking Finance Programme",
    location: "Kenya",
    partners: "FSD Africa",
    description:
      "Feasibility assessment toward Africa's first institutional clean cooking infrastructure financing structure.",
    metric: "First-of-kind financing feasibility",
    published: false,
  },
];
