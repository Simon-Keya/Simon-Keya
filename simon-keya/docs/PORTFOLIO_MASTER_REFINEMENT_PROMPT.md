# Simon Keya Portfolio — Ultra-High-Level Master Refinement & Implementation Brief

Act as a principal product designer, senior frontend architect, brand designer and staff software engineer. Work directly in this Next.js repository. Do not stop at recommendations, mockups or a plan: inspect the current implementation, make the changes, run the available checks, fix regressions and deliver a maintainable working codebase.

## 1. Product positioning
Position Simon Keya as a Software Engineer | Backend & Full-Stack Development, with credible applied-AI experience and a broad, practical technical foundation. Preserve the evidence-led tone. Do not position him as an AI-only engineer, invent employers, claim unsupported years of experience, invent project outcomes/metrics, or imply every technology listed is an expert-level skill.

## 2. Brand identity
Use the supplied `public/logo.png` as the primary personal identity asset. Inspect its proportions and colours; integrate it in the header, footer and site icon without distorting it. The mark has warm gold/brown details, so pair it carefully with the established deep-blue portfolio palette. Do not replace it with a generic text-only monogram. Keep the portfolio palette anchored in deep blue/navy, blue accents, white and cool neutral surfaces. Use warm gold only as a restrained bridge to the logo. Avoid green redesigns, excessive cyan, excessive gradients, generic AI glow effects and overuse of white.

## 3. Information architecture and maintainability
The homepage must not be a single monolithic `page.tsx`. Split meaningful sections into focused reusable components: header/navigation, hero, intro, projects, capability groups, about, creative/art feature, contact and footer. Keep project content in a clear data module where appropriate. Keep global styling tokens and responsive rules organised. Use semantic HTML, accessible labels, keyboard-friendly controls and reduced-motion support. Do not duplicate data or create unnecessary abstraction layers.

## 4. About and creative identity
Restore the creative/art dimension from the earlier portfolio. Explain that painting, drawing and digital design strengthen visual composition, colour judgement, visual storytelling and UI/UX sensibility. Add a prominent link to the existing art portfolio: `https://keyart.netlify.app`. Present art as a complementary creative practice, not as an unrelated hobby. Use an editorial visual feature that can later be replaced by authentic art imagery; do not imply generated abstract artwork is a real artwork by Simon.

## 5. Skills and learning taxonomy
Present skills in clear groups rather than arbitrary proficiency percentages:
- Backend/API: Go, Python, FastAPI, Django, Node.js, NestJS, REST APIs.
- Frontend/product: React, Next.js, TypeScript, JavaScript, React Native, Expo, Tailwind CSS.
- Data/content: PostgreSQL, MongoDB, Supabase, Prisma, TypeORM, pgAdmin, Redis, Sanity CMS.
- Cloud/DevOps: Docker, Kubernetes, Google Cloud, Linux, CI/CD and deployment platforms.
- Data science/applied AI: NumPy, SciPy, Jupyter Notebook, Gemini/OpenAI API integration, prompt engineering and controlled tool calling.

Include a separate “Continuous learning” / “Professional development” section for the user-supplied learning areas: Cybersecurity Fundamentals; DevOps Engineering (Docker, Kubernetes, Google Cloud); Google Cloud Platform; Data Science with Python; Prompt Engineering; Prompt Engineering with Generative AI; Comprehensive Guide in Software Architecture. Avoid asserting every course is a formal accredited certificate unless the source confirms it. Keep course learning distinct from hands-on project experience and from certifications. Do not invent institutions, dates, credential IDs or verification URLs.

## 6. Projects
Preserve the selected project portfolio and its case-study routes. Keep live-site links separate from case-study links and only show live links for URLs confirmed by the user or source. Preserve the International Institute of Foreign Languages project. Do not reintroduce projects the user explicitly removed (Chipper, Barbage Technologies, Karen Hats). Use authentic screenshots when supplied; until then clearly keep visual placeholders as placeholders and document exact public asset paths so the user can replace them. Never misrepresent a decorative preview as a real product screenshot. Use technology-specific colour accents only on compact technology badges; maintain readable contrast.

## 7. Design quality
Keep the existing editorial engineering direction and deep-blue visual identity. Improve hierarchy, contrast, spacing, rhythm, responsive layouts, cards, image framing and micro-interactions. Add lively but restrained transitions and hover states. Respect `prefers-reduced-motion`. Avoid huge empty areas, washed-out secondary text, excessive borders, generic template layouts and decorative noise. Ensure mobile navigation, project cards, art feature, skills and contact remain polished.

## 8. Technical quality
Use Next.js App Router, TypeScript strictness and the project's existing dependency ecosystem. Keep route behaviour intact. Optimise images with `next/image` and meaningful alt text. Ensure links have secure target attributes when opening new tabs. Use metadata and the supplied logo consistently. Preserve Netlify deployment configuration. Do not change framework versions or dependencies without a concrete reason.

## 9. Verification and delivery
Run `npm ci` where a valid lockfile exists, then `npx tsc --noEmit`, `npm run lint` and `npm run build`. Fix errors caused by this implementation. If a check is blocked by environment/network constraints, report it precisely rather than claiming success. Inspect the final diff, remove dead imports and unused code, verify all referenced assets and project routes, and package the complete source including `package-lock.json`, `netlify.toml`, public assets and this prompt. Include a concise handover describing changed files, verification results and any authentic screenshots still needed.
