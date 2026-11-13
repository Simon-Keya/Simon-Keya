# High-level build prompt — Simon Keya personal portfolio

Act as a senior product designer, staff-level frontend engineer and technical storyteller. Rebuild the Simon Keya personal portfolio as a distinctive, premium, evidence-led software engineering website. Work directly in this repository, preserve useful existing assets and functionality, and deliver a working implementation rather than another plan.

## Professional positioning

Headline: **Software Engineer | Building Scalable Digital Products**.

Position Simon as a software engineer working across backend systems, full-stack products and applied AI. Communicate the ability to build complete digital products: frontend experiences, backend services, APIs, business logic, databases, authentication, integrations, mobile applications and applied AI. Python is an important part of the background and must remain visible. Professional development experience begins in 2023; do not invent an exact number of years or claim uninterrupted employment without evidence.

## Project hierarchy

Prioritise the following projects:

1. **RestFlow — Enterprise Operations Platform.** The strongest engineering case study. Cover inventory, procurement, receiving, production, recipes, weighted-average costing, stock valuation, POS, payments, waste, reporting, traceability, authentication, PostgreSQL/Prisma, NestJS and React. Go is the intended primary backend direction, but the migration is staged and not complete. Do not claim the full Tenant/Shop/Membership hierarchy exists unless current source proves it. Preserve costing and accounting semantics.
2. **RestFlow AI — Applied AI Operations Assistant.** A separate FastAPI orchestration service using Gemini in the inspected implementation. Explain session validation, bearer-token forwarding to existing application endpoints, role-specific read tools, bounded tool output and the absence of direct DB access/write tools in the inspected version. Do not claim RAG, vector search, persistent memory or autonomous operations without evidence. Reconcile old OpenAI documentation with actual current source.
3. **RestFlow Go — Go Backend Architecture & Migration.** A RestFlow ecosystem case study, not a separate unrelated product. Explain Go API/worker architecture, PostgreSQL/pgx, event storage, projections, transaction semantics, idempotency, concurrency and API parity. The inspected POS path has a stock concurrency risk; do not claim production cutover or full parity.
4. **SMANS — School Management System.** Full-stack school workflows, role-based access and M-Pesa/Daraja integration. Avoid production-certification claims until dependency, migration and payment callback issues are verified.
5. **The Accommodation Guru — Property Discovery & Inquiry Platform.** Premium Kenya vacation-home agency experience, guest/owner journeys, property discovery, WhatsApp inquiry and validated owner form. The field is number of beds (not bedrooms); number of beds and additional property information are mandatory. This is not a booking engine or payment platform.
6. **Meku Solutions — Corporate Digital Experience.** Corporate website, responsive layouts, product storytelling and enquiry handling. Preserve Meku's own orange/yellow brand, logo and favicon. Never recolour it to match Simon's portfolio. Use real product screenshots without distortion or blur.
7. **InariKicchin — Restaurant Website & Digital Menu.** Standalone restaurant website and QR-accessible menu. Asian fusion/Japanese-inspired brand, ivory/charcoal/terracotta/brown, tagline “Where every bite tells a story. Where every visit feels special.” No ordering, table QR ordering, POS or RestFlow integration. The separate InariKicchin operations system is a different project and must not be conflated with the public website.

Secondary projects may include CERPS (Django/DRF), Courverse, Zenials, verified mobile work and a short Ruby spam-classifier foundation project. Keep Python visible. Do not promote Chipper as a production payment case study without correcting its known checkout/payment gaps.

## Visual direction

Design philosophy: **Editorial Engineering with elements of Modern Technology**.

Personal portfolio palette:
- Black `#080D16`
- White `#FFFFFF`
- Deep Blue `#1266E8`
- Light Blue `#72B7FF`
- Soft Grey `#E9EDF3`
- Slate Navy `#25344A`

Use Manrope for display headings, Inter/DM Sans for body copy and a mono face for technical metadata. Build balanced light and dark sections, strong typography, high contrast, whitespace, responsive grids, restrained purposeful motion and authentic product imagery. Avoid generic AI templates, excessive gradients/glow, decorative blobs, excessive glassmorphism, arbitrary proficiency percentages, fake metrics and fabricated dashboard screenshots. Keep client brands separate from the personal portfolio identity.

## Information architecture

- Home: clear professional positioning, introduction, selected flagship work and contact CTA.
- Projects: curated projects with a meaningful hierarchy and filtering.
- Case studies: dedicated technical narratives, architecture, decisions, trade-offs, verified status and limitations.
- Capabilities: evidence-backed groups rather than percentage bars.
- About: professional background, education and 2023–present timeline.
- Contact: verified professional contact links and working email/WhatsApp actions.

Every substantial case study should explain context, contribution, architecture, technologies, engineering decisions, challenges, testing evidence, deployment status, limitations and next steps. Label implementation status honestly. Never fabricate users, revenue, satisfaction, performance gains, team size, dates, impact or deployment results.

## Implementation expectations

1. Inspect the repository and current working tree before editing; preserve useful components, assets and resume.
2. Use the existing Next.js App Router, React and TypeScript foundation unless a verified technical reason requires change.
3. Establish maintainable design tokens and reusable components.
4. Implement a polished responsive homepage and curated project section.
5. Implement dedicated case-study routes for the flagship and selected client projects.
6. Preserve verified contact destinations and correct metadata/social previews; do not invent social URLs or contact details.
7. Ensure keyboard accessibility, semantic HTML, reduced-motion support, readable text and responsive mobile navigation.
8. Run install, build, lint and type checks where the environment permits. Record exact commands and results; distinguish unavailable dependencies from code failures.
9. Do not modify client project repositories, production services or deployments. Do not publish/deploy without explicit approval.
10. Finish with a concise change summary, verification results, known limitations and exact next steps.

## Definition of done

The repository contains a cohesive, working, responsive personal portfolio with a strong homepage, credible project hierarchy, dedicated case studies, evidence-based skills, clear contact paths, correct metadata, no invented claims and successful build/type/lint checks where dependencies are available. Do not stop after writing a plan or visual mockup: implement the actual website.
