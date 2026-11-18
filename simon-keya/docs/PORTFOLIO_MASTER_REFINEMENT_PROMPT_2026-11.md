# Portfolio Master Refinement Prompt — Simon Keya

## Role
Act as a principal product designer, senior frontend engineer, accessibility specialist and technical portfolio editor. Your task is to inspect the entire supplied Next.js portfolio codebase, understand its existing design and architecture, then apply a coherent, production-quality refinement. Do not begin by blindly replacing components or rewriting the site.

## Source of truth and working method
1. Treat the supplied repository as the source of truth. Inspect all routes, components, styles, project data, assets, metadata, responsive behaviour, theme implementation, and existing documentation before changing anything.
2. Build an inventory of the current experience: home page, project archive, individual case studies, navigation, theme control, contact paths, résumé links, and mobile layouts.
3. Identify existing strengths and regressions. Preserve working functionality, real project screenshots, correct external links, SEO metadata, accessible interactions, and the established Next.js architecture.
4. Write a concise audit and implementation plan before editing. Map each issue to the exact files/components that should change.
5. Apply changes in small, coherent groups. Avoid unnecessary dependencies, framework changes, wholesale rewrites, and speculative content.
6. After implementation, run typecheck, lint, production build, route/content checks, asset checks and responsive/theme QA. Report exactly what passed, failed, or could not be run.

## Professional positioning and content
Present Simon as:
**Software Engineer | Backend & Full-Stack Development**

The profile should be backend-focused without making it sound AI-only. Emphasise demonstrable experience across:
- Backend and API engineering: Go, TypeScript/JavaScript, Node.js, NestJS, Python, FastAPI and REST APIs.
- Data and persistence: PostgreSQL, SQL, Prisma, TypeORM, MongoDB exposure, relational modelling, migrations and data integrity.
- Application engineering: React, Next.js, TypeScript, React Native/Expo and responsive product interfaces.
- System design and business workflows: modular services, service boundaries, authentication, role/shop scoping, inventory, procurement, production, costing, POS and reporting.
- Quality and delivery: Jest/regression testing, API verification, Git/GitHub, Docker, CI/CD exposure, Render, Netlify and Vercel.
- Applied AI integration: Gemini/OpenAI API integration, authenticated read-only operational tools and bounded tool calling. Keep this as a supporting capability, not the central professional identity.

Be accurate about proficiency. Do not label the user an expert in Kubernetes, AWS/GCP, Kafka, RabbitMQ, Terraform, advanced observability, distributed systems or advanced security unless the repository contains direct evidence. Put course topics or exploratory technologies in a clearly separated “Learning / exposure” group, not alongside core hands-on skills. Never invent employers, job titles, years of experience, metrics, certifications, customer counts or production guarantees.

Use concrete examples from RestFlow, RestFlow Go, SukariBurgers, RestFlow AI, SMANS and client websites to demonstrate capability. Keep descriptions concise, outcome-oriented and technically credible. Avoid generic claims such as “passionate ninja”, “revolutionary solutions” or “world-class expert”.

## RestFlow accuracy requirements
- Go is the intended primary backend and system of record.
- TypeScript/React remains the frontend.
- NestJS is the existing backend whose responsibilities are being assessed for staged migration into Go or replacement by Go.
- Describe the migration as evidence-based and incremental, preserving current behaviour, business rules and data. Do not imply that a full production cutover or complete parity has already happened.
- Retain important domain complexity: inventory, receiving, procurement, recipes, production, weighted-average costing, POS, reporting, authentication and shop scoping.
- Never simplify costing/accounting semantics into generic CRUD claims.

## Project catalogue and status
- Keep SMANS clearly labelled **In Progress** wherever its status is shown.
- Kelvisan Electrical Networks must not appear in project data, archive listings, cards, filters, navigation, sitemap/static params, metadata, or visible copy. Remove its unused image only if no other code references it.
- Preserve valid existing projects and correct destinations. Do not fabricate live URLs or imply that a site has a feature that it does not have.
- Keep each project detail page accurate about scope and limitations. A presentation website must not be described as a booking/payment/ERP system if it is not one.
- Retain real project screenshots and preserve their aspect ratios. Use `object-fit: cover` only for intentionally cropped card previews; detail pages should show the full useful screenshot without distortion.

## Visual direction: deep marine blue + white
Create a premium, restrained engineering portfolio identity based on:
- Light mode: crisp white / soft off-white surfaces, deep ink typography and subtle cool-grey borders.
- Dark mode: deep marine blue / blue-black surfaces, clearly differentiated cards and panels, bright but controlled blue accents, and high-contrast near-white text.
- Avoid green-led palettes, neon cyan, excessive gradients, glassmorphism, noisy glow effects and generic AI-dashboard aesthetics.
- Use colour tokens consistently. No hard-coded theme-specific text/background colours inside individual components unless the element is intentionally fixed artwork.
- Theme switching must work on every route, including `/projects`, every `/projects/[slug]` case study and not-found pages. Persist the visitor’s choice, respect system preference until an explicit choice is made, avoid theme flash, and keep the browser theme-color metadata in sync.
- Audit all text, muted labels, chips, buttons, borders, hover states, focus rings, cards, code-like labels, illustrations and footer bands in both themes. No text may become invisible, faint, or low-contrast.

## Typography and readability
- Establish a clear type scale for display headings, section headings, body copy, labels, metadata and chips.
- Increase body and secondary text to comfortable desktop/mobile sizes; avoid tiny labels and low-opacity copy.
- Use strong contrast and readable line lengths. Keep paragraphs around 60–75 characters per line where practical.
- Ensure long project names, chips, metadata and buttons wrap cleanly without overflow.
- Keep line-height generous and font weights purposeful. Do not solve readability by making every element oversized or bold.

## Project card system
The selected-work cards currently feel oversized and inconsistent. Replace that with a standardised, restrained card system:
- Use a consistent responsive grid (normally two columns on desktop, one on narrow screens; use three only if the content width genuinely supports it).
- All cards should share the same media ratio, image treatment, border radius, internal spacing, title scale and information hierarchy.
- Remove the oversized full-width/feature-card layout unless there is a compelling content reason. A flagship can be distinguished with a small label or placement, not a card twice the size of the others.
- Keep screenshots visually useful and uncropped where possible. Never stretch or oval-distort project imagery.
- Limit card copy to a short summary, role/contribution, a compact set of relevant stack chips, status and one clear case-study action. Avoid repeating the same stack/role information in several places.
- Ensure card heights align naturally, actions sit consistently, and mobile cards remain compact and scannable.
- Maintain accessible clickable areas and do not allow the card overlay to block the external “Visit site” link.

## Case study pages
- Ensure the global theme toggle remains visible and works on every detail page.
- Apply the same tokens and readable contrast to hero, metadata, stack chips, screenshot/browser frame, context, architecture, engineering, status/open items, previous/next navigation and contact CTA.
- Use a consistent max-width, clear section hierarchy and comfortable spacing.
- On mobile, collapse metadata and case-study columns cleanly; no horizontal scrolling.
- Do not hide or fade meaningful text in either theme.

## UX, accessibility and polish
- Keep navigation predictable, keyboard accessible and responsive.
- Provide visible focus states, semantic headings, descriptive image alt text, accessible button labels and reduced-motion support.
- Check colour contrast for body text, muted text, chips, links and controls in both themes.
- Avoid excessive animation. Motion should be subtle, purposeful and disabled/reduced when requested by the OS.
- Preserve working contact, email, WhatsApp, LinkedIn, GitHub, résumé and external project links.
- Check image loading, layout shift, broken paths, metadata, sitemap and robots configuration.
- Ensure mobile header/menu, filters, cards and case-study navigation work at narrow widths.

## Engineering constraints
- Preserve the current framework and package manager conventions.
- Prefer existing components and CSS variables; refactor only where it improves maintainability.
- Do not add dependencies for problems solvable with current CSS/React/Next.js.
- Avoid `any`, suppressions, disabling lint rules or removing tests to make checks pass.
- Keep server/client component boundaries correct.
- Do not change project functionality or invent backend integrations; this is a portfolio refinement.

## Required deliverables
1. An audit report describing existing problems and the chosen design/content decisions.
2. A concise implementation report listing changed files and why.
3. The updated, runnable source project.
4. Verification results for typecheck, lint, production build, route generation, project catalogue integrity, asset references, theme persistence and responsive behaviour.
5. A short list of any remaining issues that require a live browser or deployment check.

## Acceptance criteria
- The portfolio looks cohesive and professional in both white/light and deep-marine/dark modes.
- No low-contrast or invisible text remains in home, archive or detail routes.
- Project cards are compact, standardised and responsive rather than oversized or inconsistently featured.
- Simon’s profile reads as backend-focused full-stack software engineering, with accurate evidence-led skills.
- RestFlow’s Go-primary staged migration direction is described correctly.
- SMANS is marked In Progress; Kelvisan is absent from all active project surfaces.
- Real screenshots, valid links, responsive navigation and theme persistence continue to work.
- All feasible automated checks pass, and any unavailable checks are clearly disclosed rather than claimed.
