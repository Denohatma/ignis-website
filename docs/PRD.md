# Ignis Innovation Website — Product Requirements Document

**Version:** 1.0
**Date:** 17 August 2026
**Owner:** Dennis Nderitu, Managing Director
**Source of truth:** Website Guide Note v4 (18 Aug 2026)

---

## 1. Product overview

The Ignis Innovation website is the company's institutional marketing platform. It communicates what Ignis does (manage and implement clean energy programmes), who it serves (institutions, governments, financiers, delivery partners, industry), and why its model works (existing fuel budgets fund the transition, no upfront capital).

The site links to but does not embed CleanCookIQ, which is a separate standalone MRV platform.

## 2. Business context

Ignis Innovation is an energy services company operating in Kenya, Ethiopia, Sierra Leone, Mozambique, and Uganda. The company has two business pillars:

- **Programme Management** — for governments, donors, DFIs, counties, and corporates who need a programme designed, run, and verified.
- **Programme Implementation** — for institutions, financiers, and delivery partners who need projects actually delivered and performing, via the Clean Energy Service Agreement (CESA).

The website must establish institutional credibility with a bursar-level audience (schools, hospitals) while also speaking to sophisticated financial institutions.

## 3. Target audiences

| Audience | What they need from the site | Language register |
|---|---|---|
| Institutional bursars | Clear cost comparison, no-upfront-capital guarantee, how payments work | Plain, numerical, no jargon |
| Government/DFI programme officers | Programme scope, MRV capability, portfolio approach | Policy-facing, evidence-based |
| Financiers | Bankable pipeline, CESA structure, AssetCo architecture, risk allocation | Technical financial language allowed |
| Delivery partners (OEMs, EPCs) | How orchestration works, performance standards, opportunity | Trade-friendly, direct |
| Industry (potential market entrants) | Market opportunity, how Ignis enables market entry | Sector-opening framing |

## 4. Site architecture

```
Home
├── Programme Management        (Pillar 1)
├── Programme Implementation    (Pillar 2, includes How It Works + CESA model)
├── Who We Serve
│   ├── Institutions
│   ├── Industry
│   ├── Financiers
│   └── Delivery Partners
├── Projects & Partners
├── CleanCookIQ               (marketing page, links to standalone app)
├── About
├── Insights                   (placeholder, coming soon)
└── Contact                    (segmented by audience type)
```

Total: 14 pages + 404

## 5. Functional requirements

### 5.1 Content management

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | Partner names/logos appear only when (a) agreement signed AND (b) written permission confirmed. Wilson controls permissions. | Non-negotiable |
| FR-02 | Project details publish only with counterparty approval. | Non-negotiable |
| FR-03 | Both partners and projects use a `published: boolean` flag in data files. | Required |
| FR-04 | Unpublished state shows a branded placeholder, not empty space. | Required |
| FR-05 | Proof bar stats must be defensible numbers. No unverifiable superlatives. | Required |

### 5.2 Copy rules

| ID | Rule |
|---|---|
| CR-01 | No em dashes anywhere on the site |
| CR-02 | Bursar-readable language on all pages except Financiers (where technical financial terms are allowed) |
| CR-03 | No ESCO status claims until registration granted. Use "energy services company" in full. |
| CR-04 | Every published number must be defensible |
| CR-05 | No "throughout Africa" (implies 54 markets). Use "working across Africa" |
| CR-06 | "Tokenization" appears nowhere on the site |
| CR-07 | Steam and any single technology never positioned as the company identity |
| CR-08 | Structures never referenced on customer-facing pages |
| CR-09 | Positioning claim: "Africa's energy services platform for institutions and industry" |
| CR-10 | Tagline: "The upgrade hiding in your fuel bill" (public) / "We turn energy waste into infrastructure" (funder-facing) |

### 5.3 Navigation and UX

| ID | Requirement |
|---|---|
| NV-01 | Sticky navbar with frosted glass blur effect |
| NV-02 | Mobile-responsive hamburger menu with expandable dropdowns |
| NV-03 | Active route highlighting in navigation |
| NV-04 | Skip-to-content accessibility link |
| NV-05 | Contact page segmented by 4 audience types |
| NV-06 | Footer with 4-column layout: brand, What We Do, Who We Serve, Company |

### 5.4 Performance and SEO

| ID | Requirement |
|---|---|
| PF-01 | Static export — all pages prerendered at build time |
| PF-02 | JSON-LD structured data (Organization schema) |
| PF-03 | Per-page metadata (title, description) |
| PF-04 | next/image for all images (lazy loading, responsive sizing) |
| PF-05 | System fonts only (Georgia/Calibri) — no external font loading |
| PF-06 | Zero ESLint errors in CI |

## 6. Non-functional requirements

| Category | Requirement |
|---|---|
| **Accessibility** | WCAG 2.1 AA: semantic HTML, focus-visible outlines, skip links, alt text |
| **Browser support** | Chrome, Safari, Firefox, Edge (latest 2 versions) |
| **Responsiveness** | Mobile-first, tested at 375px, 768px, 1024px, 1440px |
| **Hosting** | Vercel (auto-deploy from GitHub main branch) |
| **Repository** | github.com/Denohatma/ignis-website, main branch |

## 7. Technology stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 with CSS custom properties design system |
| Fonts | System fonts: Georgia (headings), Calibri (body) |
| Animation | IntersectionObserver via custom useInView hook + AnimatedSection component |
| Design | Apple-style glass morphism: frosted glass navbar, glossy-shine cards, glow shadows |

## 8. Design system

### Color palette
- Primary: `#00712D` (green)
- Primary dark: `#0A400C`
- Accent: `#E07B00` (flame orange)
- Background: `#F9F6F1` (warm cream)
- Tint: `#E8F5EE` (light green)

### Glass morphism tokens
- `--glass-bg`: `rgba(255, 255, 255, 0.55)`
- `--glass-border`: `rgba(255, 255, 255, 0.35)`
- `--glass-shadow`: `0 8px 32px rgba(0, 0, 0, 0.06)`
- `--radius-btn`: `12px`
- `--radius-card`: `20px`

### Typography
- Headings: Georgia, line-height 1.12, letter-spacing -0.02em
- Body: Calibri, line-height 1.6

## 9. Data model

### Partners (`src/content/partners.ts`)
```typescript
interface Partner {
  name: string;
  logoSrc?: string;
  published: boolean;  // controlled by Wilson
}
```

### Projects (`src/content/projects.ts`)
```typescript
interface Project {
  title: string;
  location: string;
  partners: string;
  description: string;
  metric: string;
  imageSrc?: string;
  published: boolean;  // controlled by counterparty permission
}
```

### Team (`src/content/team.ts`)
```typescript
interface TeamMember {
  name: string;
  role: string;
}
```

## 10. Proof bar metrics

The homepage proof bar displays 4 stats. All numbers must be defensible. Current candidates from the guide note:
- 300+ institutions assessed
- 5 markets active
- Active programme value (once quantifiable)
- Cohort size or institutional coverage

## 11. Future considerations

- **Insights section**: Currently a placeholder. Will display articles, case studies, and reports when content is ready.
- **ESCO claim upgrade**: When Kenya ESCO registration is granted, update the positioning claim.
- **"Leading" superlative**: Only usable once proof bar data supports it.
- **Partner/project sections**: Will populate dynamically as Wilson confirms permissions.

## 12. Success criteria

- All 14 pages render correctly with zero console errors
- Lighthouse performance score > 90
- Zero ESLint/TypeScript errors
- All copy compliant with guide note v4 rules
- Partner and project publication gates enforced
- Site deployable via static export to Vercel
