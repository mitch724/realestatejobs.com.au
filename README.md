# realestatejobs.com.au — Recruiter Dashboard

A recruiter dashboard UI for realestatejobs.com.au, built to match a provided design. It shows live job stats, a welcome banner, and a table of previous job ads.

## Screenshots

<table>
  <tr>
    <td align="center"><b>Desktop</b></td>
    <td align="center"><b>Mobile</b></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/desktop.png" alt="Desktop dashboard" width="560"></td>
    <td><img src="docs/screenshots/mobile.png" alt="Mobile dashboard" width="200"></td>
  </tr>
</table>

## Tech stack

- **React 19** + **TypeScript**
- **Vite 6** (dev server & build)
- **Tailwind CSS v4** — CSS-first config via `@theme` (no `tailwind.config.js`)
- **iconsax-react** — icon set (Linear/Bold variants)
- **tailwind-merge** — conflict-safe class merging in `cn()`

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  main.tsx              App entry
  App.tsx               Renders the Dashboard page
  index.css             Tailwind import + @theme design tokens + @font-face
  pages/
    Dashboard.tsx       Page layout, composes all sections
  components/
    layout/Navbar.tsx   Top navigation bar
    dashboard/          Feature components
      WelcomeBanner.tsx   Hero banner + company badge
      StatCard.tsx        KPI cards (StatCard + StatCardGrid)
      JobsTable.tsx       Jobs table (JobsTable + JobRow)
      ApplicationsCell.tsx
    ui/                 Reusable primitives
      Button, Badge, Card, IconButton, Text
      icons.tsx           iconsax wrappers + custom SVG icons
      cn.ts               className merge helper (tailwind-merge)
      index.ts            barrel export
  data/mockData.ts      Mock content (user, nav, stats, jobs)
  types/index.ts        Shared TypeScript types
public/
  logo.svg, favicon.svg, avatar.png, ljhooker-logo.png
  fonts/                Self-hosted Cabin (body) + Tanod (display)
```

## Design system

- **Tokens** — all colors and radii live as `@theme` variables in `src/index.css` (brand ramp, hero gradient, semantic status colors, neutrals, nav/icon surfaces, radii). Change the scheme from one place.
- **Fonts** — self-hosted and preloaded to avoid layout shift: **Tanod** for display/headings, **Cabin** for body text.
- **Components** are variant-driven (e.g. `Button` variant/size, `Badge` variant, `Text` variant/tone/weight) and consume tokens rather than hardcoded colors.

## Notes

- **Data is mocked** in `src/data/mockData.ts`; nav and action handlers currently log to the console — wire them to routing/API as needed.
- **iconsax + React 19**: iconsax sets defaults via legacy `defaultProps` (ignored by React 19), so every icon is re-exported through a small wrapper in `src/components/ui/icons.tsx` that supplies `color`/`size`/`variant`. Import icons from there, not directly from `iconsax-react`.
