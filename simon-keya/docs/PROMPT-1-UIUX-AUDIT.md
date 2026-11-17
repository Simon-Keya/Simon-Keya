# Prompt 1 — Portfolio UI/UX Audit

> Paste this into a coding assistant (Claude Code, Cursor, etc.) with the repository open.
> It produces a written audit only. It must not change any code.

---

## Role

You are a senior product designer and front-end engineer auditing a personal engineering
portfolio (Next.js App Router, TypeScript, hand-written CSS). The owner is a software engineer
(backend, full-stack, applied AI) in Nairobi, Kenya. The site must earn the trust of
hiring managers, technical leads and prospective clients within the first ten seconds.

## Ground rules

1. **Audit only.** Do not edit, create or delete project files. Output a single report.
2. **Evidence over opinion.** Every finding cites a file and, where relevant, a selector or
   line range, and states the user-visible consequence.
3. **Preserve identity.** The owner's name, voice, colour direction (navy and blue), project
   list and factual claims are the baseline. Flag problems; do not propose a different brand.
4. **Truthfulness is a feature.** This portfolio deliberately avoids overclaiming (for example
   production readiness, completed migrations, certifications). Flag anything that overclaims
   and anything that undersells.
5. Rate every finding **P0** (breaks trust, accessibility or function), **P1** (clearly
   hurts quality) or **P2** (polish), with effort **S / M / L**.

## Audit dimensions

### A. Architecture and code health
- Map every route and component. Identify dead, duplicated or legacy code (components that
  are no longer imported, parallel implementations of the same thing, old design systems).
- Inspect the CSS: is it organised and readable, or minified, appended in layers of
  overrides, or reliant on `!important`, attribute hacks and selector specificity fights?
- Check dependencies against actual usage (unused UI kits, icon packs, form libraries,
  animation libraries). Check config files that no longer apply to the installed major versions.
- Check for hard-coded data duplicated across files (project lists, contact details,
  e-mail addresses). Flag any inconsistencies between copies.

### B. Theme system (light and dark)
- Trace how the theme is decided, stored, applied and changed. List every place that
  contains theme logic.
- Test for: flash of wrong theme on load, respect for `prefers-color-scheme`, reaction to a
  system change while the page is open, persistence across routes and tabs, `color-scheme`
  and browser `theme-color` handling.
- List every colour that is hard-coded rather than token-driven, and every surface that
  looks wrong or loses contrast in the other mode (cards, project visuals, tags, banners,
  case-study pages, footer, mobile menu).
- Evaluate the toggle itself: discoverability, icon clarity, state announcement to
  assistive tech, touch-target size, motion when switching.
- Compute actual contrast ratios for body text, muted text, links, buttons, chips and
  focus indicators in **both** themes against WCAG 2.2 AA.

### C. Visual design and hierarchy
- Hero: does it communicate who, what and proof within one viewport on desktop and mobile?
  Is any hero element decorative filler (fake pagination, abstract graphics with no meaning)?
- Typography: type scale, line lengths, minimum sizes (flag anything under 12px),
  letter-spacing extremes, use of all-caps and monospace labels, readability of small text.
- Spacing and rhythm, section separation, alignment, consistency of radii, borders, shadows.
- Structural devices (numbering, eyebrows, dividers): does each encode real information?
- Motion: what animates on load, scroll or hover? Is each effect purposeful? Is
  `prefers-reduced-motion` honoured?

### D. Project presentation (the most important section)
- For every project, record: real screenshot present or placeholder; image quality, crop,
  aspect ratio, browser chrome or personal data visible, third-party badges, scrollbars.
- Does each card answer: what is it, what did the owner do, what stack, what status, where
  can I see it?
- Are calls to action clear, distinct and accessible (single focusable target, visible
  focus, adequate size)? Are there nested or duplicate links?
- Case-study pages: structure, depth, imagery, navigation to other projects, and
  especially **tone**. Flag any copy that reads like internal notes, prompts or disclaimers
  addressed to a developer rather than to a visitor.

### E. Content and information architecture
- Is the navigation complete and consistent between the home page and sub-pages?
- Is any content contradictory (e-mail addresses, years of experience, claims), inflated,
  vague or missing (no real career timeline, no contact affordance, no downloadable CV prominence)?
- Which sections would benefit from added, truthful content (hero proof, "currently
  building", timeline, process, contact reassurance)? List candidates, never invent facts.

### F. Accessibility
- Landmarks and heading order, skip link, focus-visible styles, keyboard operation of the
  menu, filters and theme toggle, `aria-pressed` / `aria-expanded` / `aria-checked` usage,
  link purpose, image alt text, tap-target sizes, zoom and reflow at 200%/400%.

### G. Responsive behaviour
- Review at 360, 390, 768, 1024, 1280, 1536 px. Note overflow, cramped or oversized
  type, hidden content, image crops that lose important content.

### H. Performance and SEO
- Font loading strategy, image formats and sizing, `next/image` usage, layout shift,
  unused JavaScript, metadata, Open Graph, favicons, redirects for legacy routes.

## Output format

1. **Executive summary** — five sentences: overall impression, the three biggest problems,
   the three biggest opportunities.
2. **Scorecard** — 0–10 for each dimension A–H with a one-line justification.
3. **Findings table** — ID, dimension, priority, effort, evidence (file/selector), impact,
   recommended fix.
4. **Project image inventory** — table: project, current visual, problem, required action.
5. **Contrast table** — foreground, background, ratio, pass/fail, in each theme.
6. **Quick wins** — the ten changes with the best impact-to-effort ratio.
7. **Open questions** — things only the owner can answer (for example "is this live URL correct?").
