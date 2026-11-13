# Simon Keya — Personal Portfolio

A personal software engineering portfolio built with Next.js App Router, React and TypeScript.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production checks

```bash
npm run build
npm run lint
npx tsc --noEmit
```

## Structure

- `app/page.tsx` — homepage and selected project experience.
- `app/projects/[slug]/page.tsx` — project case-study pages generated from the curated case-study content.
- `app/globals.css` — portfolio design system and responsive styles.
- `app/layout.tsx` — root layout and metadata.
- `public/` — existing project imagery, brand assets and résumé.
- `PORTFOLIO_BUILD_PROMPT.md` — the high-level product/design/engineering brief used to guide this rebuild.

## Content integrity

Project descriptions distinguish implementation from ongoing migration work and explicitly identify important scope limitations. Do not add performance figures, customer counts, satisfaction claims, deployment claims or project outcomes unless they can be verified. The RestFlow Go migration is not presented as complete. The Accommodation Guru is not described as a booking engine. The InariKicchin public website is kept separate from its operations system.

## Brand direction

Editorial engineering with a restrained black, white and deep-blue identity. Client projects retain their own brand identities.

## Verification notes

The source has been syntax-transpiled across all 18 TypeScript/TSX files, and local relative imports plus required resume/project assets have been checked. A full `tsc --noEmit`, ESLint run and Next.js production build still need to be executed in an environment where npm dependencies can be installed. In the preparation environment, `npm ci` could not complete because `registry.npmjs.org` could not be resolved; the resulting partial `node_modules` directory is not a valid install and must not be used as a test result.

Run the full verification sequence after installing dependencies:

```bash
npm ci
npx tsc --noEmit
npm run lint
npm run build
```
