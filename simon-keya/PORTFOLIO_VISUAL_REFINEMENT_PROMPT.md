# Portfolio Visual Refinement — Implementation Brief

## Objective
Refine the existing Simon Keya portfolio without replacing its information architecture or changing its established black, white and deep-blue identity. Improve readability, contrast, visual richness and project storytelling while retaining a responsive, editorial engineering aesthetic.

## Design requirements
- Increase contrast for all body copy, metadata, labels, captions and navigation. Avoid pale grey text on light surfaces.
- Reduce the flat all-white appearance with restrained cool-grey, blue-tinted and white surface alternation, subtle borders, depth and soft shadows.
- Preserve deep blue as the portfolio accent. Do not introduce green or cyan as a site-wide brand colour.
- Add restrained motion: project-card lift, image zoom, button feedback and subtle entrance transitions. Respect `prefers-reduced-motion` and do not make interactions distracting.
- Keep the existing page structure, section order, navigation and responsive behaviour unless a clear accessibility or usability defect requires adjustment.
- Keep typography clear at desktop and mobile sizes; never sacrifice legibility for visual subtlety.

## Project presentation
- Use authentic project screenshots where supplied. Preserve their aspect ratio, avoid oval masks, blur and destructive cropping. Prefer `object-fit: contain` for full-page screenshots and use a neutral/dark frame behind them.
- Keep the portfolio's own visual language separate from client brand identities. In particular, Meku retains its orange/yellow product identity and InariKicchin retains its restaurant palette inside their own project work.
- Technology badges should use restrained, recognizable technology-associated colours, with readable foreground/background contrast. Keep badges compact and consistent.
- Restore omitted projects from the original portfolio where the supplied assets provide evidence. Do not invent functionality, outcomes, metrics or technology stacks; mark older work honestly and qualify uncertain details.
- Every project card must link to a valid case-study route. Case studies must accurately describe scope, contribution, architecture and limitations.

## Engineering and verification
- Preserve existing business facts and avoid unsupported claims.
- Use Next.js `Image` for local image assets with suitable dimensions and `sizes`.
- Check all project slugs, asset paths, responsive breakpoints, keyboard focus states and reduced-motion behaviour.
- Run `npx tsc --noEmit`, `npm run lint` and `npm run build` after dependencies are installed. Do not claim these passed unless they were actually run successfully.
- Do not deploy or alter DNS as part of this task.
