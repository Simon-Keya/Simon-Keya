# Dark Mode and Navigation Refinement — 18 November 2026

## Requested changes
- Extend the editorial midnight engineering look from the hero across the entire dark-mode site.
- Replace the square-cornered active navigation selection with a more refined treatment.
- Preserve the existing light/dark theme switch and the light-mode palette.

## Implemented
- Updated the final dark theme token override to use a consistent midnight base (`#0b1522`), dark slate-blue surfaces, subtle blue-grey borders, readable cool-white text, and restrained cyan accents.
- Updated the shared background, surface, muted-text, border, accent, band, focus, and shadow tokens so sections and cards inherit the same visual language instead of using mismatched navy shades.
- Kept the hero's dark editorial treatment in both themes, while making the rest of the page follow the selected theme.
- Changed active navigation from a square-cornered filled rectangle to a rounded capsule with a subtle accent border, translucent accent surface, and short underline indicator.
- Updated the browser theme-color metadata to match the midnight dark background.
- Kept the light-mode theme tokens unchanged.

## Verification
- Source-level review completed for the global theme tokens, header navigation styles, and theme-color metadata.
- Automated TypeScript, ESLint, production build, and browser visual tests were not run in this pass.
