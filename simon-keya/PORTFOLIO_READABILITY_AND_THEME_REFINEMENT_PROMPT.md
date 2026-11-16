# Master Prompt — Portfolio Readability, Theme Parity & Project Accuracy

Act as a senior frontend engineer, accessibility specialist and product designer. Audit and improve the existing Simon Keya Next.js portfolio in place. Preserve its established identity, working routes, project content and deployment configuration.

## Required outcomes

1. **Readable typography everywhere**
   - Audit every page, section, card, badge, metadata label, form, footer and project detail.
   - Increase undersized body copy, metadata and technical labels to comfortable sizes; avoid tiny 8–10px text for meaningful information.
   - Establish consistent type scale, line height, measure and responsive scaling.
   - Ensure contrast meets WCAG AA where applicable, in both themes. Never use low-opacity text as the only way to indicate secondary content.

2. **Complete light/dark theme parity**
   - Theme selection must work and persist across the home page, project catalogue, every individual project case study, About, Skills and Contact routes.
   - Use a shared theme control and central design tokens for page, surface, text, muted text, border, accent, inputs, cards and overlays.
   - Avoid hard-coded light-only/dark-only backgrounds and text colours that bypass tokens.
   - Respect system preference when no explicit choice exists; prevent theme flash; keep controls accessible and keyboard-operable.
   - Verify every route in both modes, including direct navigation and reloads.

3. **Individual project case studies**
   - Ensure case pages respond immediately to the shared theme selection.
   - Make the case header, back link, hero, summary, role, context, architecture, engineering, status, considerations, CTA and footer readable in both modes.
   - Keep typography responsive and sufficiently large on mobile.
   - Keep the theme control available on detail pages.

4. **Project data accuracy**
   - Remove Kelvisan from all project catalogues, case-study data, filters and navigation references. Remove its unused preview asset if safe.
   - Mark SMANS as **In progress** consistently in project cards and its case-study page. Do not imply it is completed or production-certified.
   - Preserve all other projects and their existing destinations.

5. **Broader UX and accessibility pass**
   - Review responsive layouts, focus states, keyboard access, link affordances, forms, navigation, image sizing, overflow and reduced-motion behaviour.
   - Remove conflicting legacy styles and duplicate theme rules where safe.
   - Keep animations subtle and respect `prefers-reduced-motion`.
   - Avoid unnecessary dependencies and architecture rewrites.

## Workflow

Inspect first, document the findings, implement focused changes, then validate. Run TypeScript, lint, production build and browser checks if dependencies and environment permit. Test light and dark modes on all routes at mobile and desktop sizes. Do not claim checks passed unless actually executed. Record blocked checks and their reason.

## Deliverables

Return the complete updated source ZIP, a concise audit/change report, exact test results, and remaining manual verification steps. Preserve working functionality and do not invent project capabilities or completion claims.
