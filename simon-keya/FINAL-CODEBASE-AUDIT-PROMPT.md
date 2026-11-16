# Full Codebase Audit & Stabilization Prompt

Act as a senior Next.js/React/TypeScript engineer performing a release-readiness audit. Inspect the entire repository before editing. Do not make isolated symptom fixes without checking the surrounding architecture.

## Goals
1. Establish the actual app structure, routes, dependencies, aliases, assets, server/client boundaries, data flow, and deployment configuration.
2. Find and fix all reproducible compile-time, type, lint, import/export, missing-component, missing-asset, route, hydration, and runtime defects.
3. Preserve the current visual direction, copy, brand identity, responsive behaviour, project list, and working functionality. Do not redesign the site or invent project capabilities.
4. Keep components modular and reusable. Do not move the entire application into one page component.
5. Produce a tested release ZIP and a precise audit report.

## Required audit
- Read `package.json`, lockfile, Next config, TypeScript config, ESLint config, PostCSS/Tailwind config, deployment config and README.
- Map every route and its dependencies. Check dynamic routes, `generateStaticParams`, metadata, `notFound`, navigation destinations, and internal/external links.
- Check every import/export and every JSX component reference. Detect undefined symbols such as `ProjectVisual`, invalid package exports, duplicate config files, circular dependencies, and stale imports.
- Review every `useState`, `useEffect`, event handler, async operation, form submission, and client/server boundary. Any module using browser APIs, React hooks, event handlers, or client-only animation must have a correct client boundary. Avoid unnecessarily converting server components to client components.
- Check React list keys, image dimensions/alt text, `next/image` configuration, local public asset references, missing fonts/files, and case-sensitive path mismatches.
- Check TypeScript strictness, null/undefined handling, prop types, unused code, accessibility, keyboard interaction, semantic HTML, responsive layouts, and console/runtime warnings.
- Check security and privacy: no secrets in client bundles, safe external links, validated forms, and no invented claims about project status.
- Verify that all portfolio project slugs have case studies, case-study content is consistent with project cards, and removed projects are not accidentally rendered.
- Review dependency compatibility. In particular, align `eslint-config-next` with the installed Next.js major and update the lockfile using the package manager; never hand-edit lockfile integrity data.
- Preserve Netlify compatibility and ensure the build output/deployment settings are appropriate for the actual Next.js deployment mode.

## Execution rules
- First create a baseline inventory and run the existing checks.
- Fix root causes, not just the first visible error.
- Make minimal, evidence-based changes. Do not suppress errors with `any`, blanket ESLint disables, `@ts-ignore`, or weakened compiler settings.
- Install from the lockfile using `npm ci`; do not rely on a pre-existing `node_modules` directory.
- Run `npx tsc --noEmit`, `npm run lint`, and `npm run build`. Resolve every failure and rerun all checks after the final edit.
- Start the app and test every route. Where browser automation is available, test desktop/mobile navigation, project filters, project links, forms, and image loading. Otherwise clearly state which checks were manual and which were not possible.
- Do not claim a test passed unless its command actually completed successfully. If network or environment constraints block a test, record that as BLOCKED, not PASS.
- Check the final diff to ensure no unrelated changes, lost assets, or accidental redesign.

## Deliverables
1. A clean ZIP of the complete project, excluding `node_modules`, `.next`, caches, and local secrets, but including the lockfile and all required assets.
2. `CODEBASE-AUDIT-REPORT.md` with defects found, root causes, files changed, tests run, exact results, and remaining risks.
3. A concise README section with install, development, type-check, lint, build, and deployment commands.
4. A final status table distinguishing PASS, FAIL, and BLOCKED.

Do not call the project production-ready unless clean install, type-check, lint, production build, and route/runtime verification have all passed. If any required verification is blocked, deliver the best corrected candidate ZIP but label it accurately as not yet build-certified.
