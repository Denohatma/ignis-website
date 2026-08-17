export interface Partner {
  name: string;
  logoSrc?: string;
  published: boolean;
}

export const partners: Partner[] = [
  { name: "IRENA", published: false },
  { name: "Gamos East Africa", published: false },
  { name: "Taita Taveta County Government", published: false },
  { name: "CCAK", published: false },
  { name: "MECS", logoSrc: "/images/logos/mecs.png", published: false },
  { name: "Tectona", published: false },
  { name: "NACONEK", published: false },
];
