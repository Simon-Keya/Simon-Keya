# Prompt 2 — Portfolio UI/UX Refinement (built from the audit)

> Paste into a coding assistant with the repository open. Run Prompt 1 first and keep its
> report available; this prompt assumes the findings listed under "Audit baseline".

---

## Role

You are a senior product designer and front-end engineer. Refine the portfolio of Simon Keya
(software engineer, Nairobi). **Keep the original identity, copy intent and factual claims.**
Improve craft, theme behaviour, project presentation, accessibility and maintainability.
Apply every change to the code base, then verify it.

## Audit baseline (what is wrong today)

1. `app/globals.css` is one minified block with four generations of overrides appended on
   top of each other. Colours are hard-coded in hundreds of places, so dark mode only
   partly works (project visuals, tags, banners and case pages stay light).
2. Theme logic lives in three places (`ThemeProvider`, `ThemeToggle`, `SiteHeader`), does not react to
   system changes, does not set `color-scheme` or the browser `theme-color`, and the toggle is a
   text/glyph pill ("☾ DARK").
3. The hero's right-hand graphic is decorative filler with fake pagination ("01 — 04").
4. Five of eight projects use CSS placeholders instead of real screenshots. Existing
   screenshots include browser chrome, bookmarks bars, a Windows taskbar and activation watermark.
   Supplied screenshots contain scrollbars, a Netlify badge and a personal e-mail address.
5. Case-study pages contain internal notes addressed to a developer ("Do not claim…",
   "Preserve the Meku brand identity", "Do not apply the personal portfolio blue identity").
6. Dozens of labels are 8–10px, mono, tracked-out capitals. Numbered eyebrows imply
   sequences that do not exist.
7. Legacy routes (`/about`, `/skills`, `/contact`) render an older dark-only Tailwind design with
   inflated claims ("100% client satisfaction", emoji fun facts) and a different e-mail address.
   `/projects` is a third design language.
8. Unused or mismatched dependencies (Tailwind, DaisyUI, EmailJS, react-icons, heroicons,
   hot-toast, typewriter), a Tailwind config that Tailwind 4 ignores, fonts loaded with a
   blocking CSS `@import`, `<header>` nested inside `<main>`, no skip link, no focus-visible styles.

## Non-negotiables

- Same name, same blue/navy direction, same sections (Work, Capabilities, About, Art, Contact),
  same truthful tone. No invented metrics, clients, testimonials or certifications.
- Real project screenshots only where a real screenshot exists. Where none exists, use a clearly
  labelled illustration, never something that pretends to be a capture.
- Never display personal data in screenshots; blur or crop it.
- Every colour comes from a design token. No hard-coded colours outside the token file and
  intentionally fixed brand artwork.

## Work packages

### 1. Foundation
- Replace the CSS with a readable, sectioned stylesheet: tokens → base → layout → components
  → pages → utilities → motion. No `!important` except the reduced-motion reset.
- Tokens: `--bg`, `--surface`, `--surface-2`, `--ink`, `--muted`, `--line`, `--accent`,
  `--accent-ink`, `--accent-soft`, `--warm`, radii, shadows, spacing, type scale. Define a
  light and a dark set; both must pass WCAG AA (4.5:1 text, 3:1 UI) and be verified by script.
- Fonts via `next/font` (self-hosted, `display: swap`), no CSS `@import`.
- Remove unused dependencies and dead components; move one-off documents into `docs/`.
- Single source of truth for project data (`lib/projects.ts`) used by the home page,
  the archive and case studies. Single source for contact details.

### 2. Theme system
- Inline pre-paint script sets the class, `color-scheme` and `theme-color` before first paint.
- Default to the system preference; persist an explicit choice; follow system changes until the
  user chooses; sync across tabs via the `storage` event.
- One toggle component: icon-only sun/moon switch with `role="switch"` and `aria-checked`, ≥44px
  target, visible in the header on every route including mobile.
- Colour transition only while the theme changes (not on every hover), disabled under
  `prefers-reduced-motion`.
- Dark mode is a designed theme, not an inversion: deepen surfaces, soften shadows into borders,
  lower image brightness slightly, keep accent contrast.

### 3. Header, navigation, footer
- Sticky header with blur, wordmark lockup, anchor links that work from every route, mobile
  drawer with focus management, Escape to close, `aria-expanded`. Skip-to-content link.
- Footer with sentence-case links and ≥12px text.

### 4. Hero
- Keep the headline. Replace the filler graphic with the real RestFlow product screenshot in a
  browser frame, with a small "currently building" chip and the core stack.
- Add an availability line, one primary and one secondary action (work, résumé), and a short
  proof strip made only of true facts (number of featured projects, disciplines, core languages).
- One orchestrated load sequence; no scroll-triggered fades on every block.

### 5. Selected work
- Feature the flagship (RestFlow) as a wide card; the rest in a two-column grid.
- Every card: screenshot (or labelled illustration), eyebrow + status, title, one-sentence
  description, "my role" line, neutral stack chips, **one** stretched link to the case study and
  a separate "Visit site" link. Visible focus. Filters use `aria-pressed` and show counts.
- Images: consistent frame with a slim browser bar and the real hostname, `object-fit: cover`
  anchored top-left, correct `sizes`, descriptive alt text.
- RestFlow AI and RestFlow Go get purpose-built illustrations (request flow; Go service code),
  captioned as illustrations.

### 6. Case studies
- Rewrite every internal note into visitor-facing language. Keep every limitation, but phrase it as
  "Status and open items", written for a reader.
- Layout: hero with title, summary and a meta row (role, stack, status, live link); cover image;
  four content sections; previous/next project navigation; contact call to action.
- Static params, per-page metadata, share image.

### 7. Capabilities, About, Art, Contact
- Capabilities: five groups as an accessible list with chips; remove fake affordances (↗ on
  non-links). Learning panel stays.
- About: keep the copy; replace the one-line timeline with the four-stage career path (2022
  junior → 2023 front-end → 2024 back-end → 2025 full-stack); foundations grid with proper SVG icons.
- Art: show the real Keyart screenshot instead of an abstract monogram.
- Contact: large e-mail with copy-to-clipboard and confirmation, résumé, LinkedIn, GitHub,
  WhatsApp, X; timezone line.
- Fold the legacy routes: permanent redirects `/about`, `/skills`, `/contact` to the matching home
  anchors; rebuild `/projects` as a "More projects" archive in the same design system.
- Add a branded 404.

### 8. Accessibility and quality floor
- Landmarks, heading order, skip link, `:focus-visible` ring on every interactive element,
  keyboard operation everywhere, `aria-current` for the active nav item, alt text, 44px targets.
- Minimum text size 12px (labels), 16px body; line length ≤ 70ch.
- Works from 320px to 1920px with no horizontal scroll. Reduced motion respected.

## Definition of done
- `npm run lint`, `tsc --noEmit` and `npm run build` pass.
- All routes render in both themes with no unreadable text, no raw/unstyled surface.
- Contrast script output attached; every pair passes AA.
- A short change report lists what changed, what was deliberately kept, and open questions
  for the owner.
