# Audit results and changes (2026-11-17)

Produced by running `PROMPT-1-UIUX-AUDIT.md` against the code base, then applying `PROMPT-2-UIUX-REFINEMENT.md`.

## Scorecard before → after

| Dimension | Before | After | Why |
|---|---|---|---|
| A. Architecture and code health | 3 | 8 | One minified 4-generation CSS file → sectioned, token-driven stylesheet; 10 dead components, 3 legacy routes, 7 unused dependencies and a stale Tailwind config removed; one data module. |
| B. Theme system | 4 | 9 | Pre-paint script, system-follow, cross-tab sync, `color-scheme`, `theme-color`, one accessible switch, colour transition only during a switch. |
| C. Visual design | 6 | 8 | Filler hero graphic replaced by real product; fake numbering removed; no text under 12px. |
| D. Project presentation | 3 | 9 | 7 of 8 cards now show real screenshots (chrome, scrollbars, badges, watermark and personal e-mail removed); 2 labelled illustrations; internal notes rewritten. |
| E. Content and IA | 5 | 8 | Contradictory e-mail unified, inflated legacy claims retired, real 4-stage career path, "currently building", résumé, copy-email. |
| F. Accessibility | 4 | 9 | Skip link, landmarks, focus-visible, `aria-pressed/-checked/-expanded/-current`, single stretched link per card, 44px targets. |
| G. Responsive | 6 | 9 | Verified 320 → 1920px, no horizontal scroll. |
| H. Performance and SEO | 5 | 8 | `next/font` (no blocking `@import`), webp assets with `next/image`, per-page metadata, sitemap, robots, 404, redirects. |

## Key findings fixed

- **P0** Case-study pages showed internal prompt notes to visitors ("Do not claim…", "Preserve the Meku brand identity…"). Rewritten as "Status and open items" for readers; every limitation kept.
- **P0** Dark mode only partly worked; project visuals and tags stayed light. Everything now reads from tokens.
- **P0** Three different e-mail addresses / two contact designs. Single `contact` object.
- **P1** Legacy `/about`, `/skills`, `/contact` pages used an older dark-only design with unverifiable claims ("100% client satisfaction"). Permanently redirected to home anchors.
- **P1** 8–10px tracked mono labels, fake "01 — 04" hero pagination, ↗ icons on non-links.
- **P1** Screenshots exposed browser bookmarks, a Windows taskbar and activation watermark, a Netlify badge and an account e-mail.

## Contrast (WCAG 2.2 AA)

| Theme | Pair | Foreground | Background | Ratio | Needed | Result |
|---|---|---|---|---|---|---|
| light | Body text on page | #0d1a2d | #f6f8fb | 16.41:1 | 4.5:1 | PASS |
| light | Muted text on page | #4b5b73 | #f6f8fb | 6.49:1 | 4.5:1 | PASS |
| light | Muted text on card | #4b5b73 | #ffffff | 6.90:1 | 4.5:1 | PASS |
| light | Muted text on alt section | #4b5b73 | #eaf0f7 | 6.02:1 | 4.5:1 | PASS |
| light | Accent text on page | #1456c2 | #f6f8fb | 6.29:1 | 4.5:1 | PASS |
| light | Accent text on tinted chip | #1456c2 | #e3edfc | 5.66:1 | 4.5:1 | PASS |
| light | Button label on accent | #ffffff | #1456c2 | 6.69:1 | 4.5:1 | PASS |
| light | Warm chip text | #85601b | #f6ecd7 | 4.86:1 | 4.5:1 | PASS |
| light | Status dot vs page (UI) | #1c7a4a | #f6f8fb | 5.02:1 | 3.0:1 | PASS |
| dark | Body text on page | #eef3fa | #08121f | 16.87:1 | 4.5:1 | PASS |
| dark | Muted text on page | #adbbcf | #08121f | 9.66:1 | 4.5:1 | PASS |
| dark | Muted text on card | #adbbcf | #0f1d31 | 8.70:1 | 4.5:1 | PASS |
| dark | Muted text on alt section | #adbbcf | #0b1727 | 9.25:1 | 4.5:1 | PASS |
| dark | Accent text on page | #7db4ff | #08121f | 8.82:1 | 4.5:1 | PASS |
| dark | Accent text on tinted chip | #7db4ff | #13294a | 6.82:1 | 4.5:1 | PASS |
| dark | Button label on accent | #06121f | #7db4ff | 8.84:1 | 4.5:1 | PASS |
| dark | Warm chip text | #e0b865 | #2a2213 | 8.39:1 | 4.5:1 | PASS |
| dark | Status dot vs page (UI) | #5fd596 | #08121f | 10.25:1 | 3.0:1 | PASS |
| both | Band text | #f2f6fc | #0b1a30 | 16.07:1 | 4.5:1 | PASS |
| both | Band muted | #b9c7db | #0b1a30 | 10.17:1 | 4.5:1 | PASS |
| both | Band accent | #8fc0ff | #0b1a30 | 9.26:1 | 4.5:1 | PASS |
| both | Band muted (dark theme) | #b9c7db | #050d19 | 11.37:1 | 4.5:1 | PASS |
| both | Band button label | #06121f | #8fc0ff | 10.01:1 | 4.5:1 | PASS |

## Open questions for you

1. **InariKicchin live URL** is `inaikicchinweb.vercel.app` ("inai", not "inari"). Is that intentional?
2. **Résumé**: three copies exist (`public/Simon Keya's resume.pdf`, `public/files/…`). The site links `/files/Simon-Keya-Resume.pdf`. Delete the duplicates once confirmed.
3. **Unused images** remain in `public/` (Chipper, Barbage, Karen hats, NOVA, RUBY, Okumugalor, Home, background_pattern, Keya Simon). Add them to the archive or delete them.
4. **Open Graph image** currently uses the RestFlow screenshot; a designed 1200×630 card would look better when shared.
5. **Site URL** in metadata is `https://simon-keya.vercel.app` while `netlify.toml` exists. Confirm the real domain and update `metadataBase`, `sitemap.ts` and `robots.ts`.
6. **Hero availability line** says "Open to engineering roles and collaborations". Change it if that is not true right now.
