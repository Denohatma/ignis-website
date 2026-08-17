# Ignis Innovation Website — Standard Operating Procedures

**Version:** 1.0
**Date:** 17 August 2026
**Owner:** Dennis Nderitu, Managing Director

---

## 1. Development environment setup

### Prerequisites
- Node.js 20+ (use `nvm use 20` if multiple versions installed)
- Git
- npm (comes with Node.js)

### First-time setup
```bash
git clone https://github.com/Denohatma/ignis-website.git
cd ignis-website
npm install
npm run dev
```

The dev server runs on `http://127.0.0.1:3000` (or next available port).

### Common commands
| Command | Purpose |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build (static export) |
| `npm run lint` | Run ESLint checks |
| `npm run start` | Serve production build locally |

---

## 2. Publishing a partner name or logo

**Gate: NON-NEGOTIABLE. Both conditions must be met before publishing.**

### Steps

1. **Wilson confirms** that (a) the agreement with the partner is signed, and (b) the partner has confirmed in writing that their name/logo may be used.
2. Open `src/content/partners.ts`.
3. Find the partner entry (or add a new one).
4. Set `published: true`.
5. If a logo is available, add the image to `public/images/partners/` and set `logoSrc: "/images/partners/filename.png"`.
6. Run `npm run build` to verify the site builds cleanly.
7. Commit and push:
   ```bash
   git add src/content/partners.ts public/images/partners/
   git commit -m "publish: add [Partner Name] to partner strip"
   git push origin main
   ```
8. Vercel auto-deploys from main.

### Partner data format
```typescript
{
  name: "Partner Name",
  logoSrc: "/images/partners/partner-logo.png",  // optional
  published: true,
}
```

### Never publish
- Partners with unsigned agreements
- Partners who have not confirmed logo permission in writing
- Organisations in discussion, bid, or MoU draft stage
- Use the status categories in guide note v4, section 4 as your checklist

---

## 3. Publishing a project

### Steps

1. Confirm the counterparty has approved publication of the project details and wording.
2. Open `src/content/projects.ts`.
3. Add or update the project entry with `published: true`.
4. Follow the format: one photo, three sentences (where, with whom, what Ignis does), one metric. No adjectives.
5. If a photo is available, add to `public/images/projects/` and set `imageSrc`.
6. Build, commit, push (same as partner flow).

### Project data format
```typescript
{
  title: "Project Title",
  location: "County/Country",
  partners: "Partner 1, Partner 2",
  description: "Three sentences. Where. With whom. What Ignis does.",
  metric: "Key metric (e.g., 50 institutions assessed)",
  imageSrc: "/images/projects/project-photo.jpg",  // optional
  published: true,
}
```

---

## 4. Updating proof bar stats

1. Open `src/content/proof-bar.ts`.
2. Update the `value` and `label` for each stat.
3. **Every number must be defensible.** Do not publish speculative or aspirational figures.
4. Build, commit, push.

---

## 5. Updating team members

1. Open `src/content/team.ts`.
2. Add, remove, or update entries in the `teamLeads` array.
3. Build, commit, push.

---

## 6. Updating the ESCO claim

**Trigger:** Kenya ESCO registration is granted.

1. Update `src/components/home/Hero.tsx`: change "energy services platform" to "ESCO platform".
2. Update `src/lib/metadata.ts`: update the site description.
3. Update `src/app/layout.tsx`: update the JSON-LD description.
4. Search all files for "energy services" and update where the ESCO designation applies.
5. Do NOT add "leading" unless proof bar data supports it.

---

## 7. Adding an Insights article

The Insights page (`src/app/insights/page.tsx`) is currently a placeholder. When ready:

1. Create a data file at `src/content/insights.ts` with an array of article objects.
2. Update the Insights page to render the articles.
3. Each article should have: title, date, summary, category, and either a link to an external publication or inline content.

---

## 8. Deployment

### Automatic (recommended)
The site auto-deploys to Vercel when changes are pushed to the `main` branch on GitHub.

### Manual deployment
```bash
npm run build    # verify build succeeds
git push origin main   # triggers Vercel deploy
```

### Vercel configuration
- Framework: Next.js (auto-detected)
- Build command: `next build` (default)
- Output: Static export
- Node.js version: 20.x

---

## 9. Content rules quick reference

| Rule | Details |
|---|---|
| No em dashes | Use commas, full stops, or semicolons instead |
| Bursar-readable | Plain language on all pages except Financiers |
| No ESCO claims | Until registration granted |
| Defensible numbers | Every stat must be backed by data |
| No "throughout Africa" | Say "working across Africa" |
| No "tokenization" | Not on the site, anywhere |
| No single-tech identity | Steam, solar, etc. are delivery mechanisms, not the brand |
| No structures on customer pages | AssetCo, SPV details only on Financiers page |
| Two taglines max | "The upgrade hiding in your fuel bill" (public) + "We turn energy waste into infrastructure" (funder) |

---

## 10. Branch and commit conventions

- **Branch:** All work on `main` (single-person team). Use feature branches for large changes.
- **Commit format:** `type: short description`
  - `feat:` new feature or page
  - `fix:` bug fix
  - `publish:` partner/project made live
  - `content:` copy or data update
  - `style:` design changes
- **Never commit:** `.env` files, API keys, draft partner names before permission

---

## 11. Troubleshooting

| Issue | Fix |
|---|---|
| Dev server hangs silently | Use Node 20 via `nvm use 20`, delete `node_modules`, reinstall, use `--host 127.0.0.1` |
| Hydration mismatch console error | Likely caused by browser extensions (e.g., Grammarly). Not a code issue. |
| ESLint: setState in useEffect | Move state logic out of useEffect or use a different pattern |
| ESLint: ref access during render | Move ref access into useEffect or event handlers |
| Build fails on `<img>` tag | Replace with `import Image from "next/image"` and use `<Image>` component |

---

## 12. File structure reference

```
src/
├── app/                          # Pages (App Router)
│   ├── globals.css               # Design tokens and global styles
│   ├── layout.tsx                # Root layout (Navbar, Footer, JSON-LD)
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx
│   ├── cleancookiq/page.tsx
│   ├── contact/page.tsx
│   ├── insights/page.tsx
│   ├── programme-management/page.tsx
│   ├── programme-implementation/page.tsx
│   ├── projects-partners/page.tsx
│   ├── who-we-serve/
│   │   ├── page.tsx
│   │   ├── institutions/page.tsx
│   │   ├── industry/page.tsx
│   │   ├── financiers/page.tsx
│   │   └── delivery-partners/page.tsx
│   └── not-found.tsx
├── components/
│   ├── home/                     # Homepage section components
│   ├── layout/                   # Navbar, Footer, MobileMenu
│   ├── shared/                   # Button, Card, SectionHeading, etc.
│   └── ui/                       # Container, AnimatedSection, Badge
├── content/                      # Data files (partners, projects, team, etc.)
└── lib/                          # Hooks and utilities
```
