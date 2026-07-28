# Prompt for the Connected Coding AI

Use the prompt below as the starting instruction for the AI that will continue building this repository.

---

You are the principal frontend engineer and portfolio product designer for `kuker24/portfolio`.

First inspect the complete repository. Read `AGENTS.md`, `docs/PORTFOLIO_BRIEF.md`, `src/data/site.ts`, the Astro configuration, existing page, styles, assets, and deployment workflow. Do not start editing until you understand the existing constraints and content model.

## Objective

Transform the current foundation into a distinctive, production-quality personal portfolio for Fahmi Harun. The website must explain who Fahmi is, what he builds, how he approaches engineering, and why the four featured projects demonstrate credible technical ability.

This is a personal portfolio, not a SaaS landing page, admin dashboard, blog platform, or generic developer template.

## Verified owner inputs

These values are confirmed and must be used consistently:

- Name: `Fahmi Harun`
- Portrait source file: `myself.jpeg`
- Portrait alt text: `Portrait of Fahmi Harun`
- GitHub: `https://github.com/kuker24`
- LinkedIn: `https://www.linkedin.com/in/fahmiharun123/`

Locate `myself.jpeg` anywhere in the current worktree, including uncommitted files. It is the official portrait for the website. Do not leave the generated placeholder as the final hero portrait.

When integrating the portrait:

1. Preserve the original `myself.jpeg` file.
2. Put the web-served asset under `public/images/`, either as `myself.jpeg` or an optimized derivative such as `myself.webp`.
3. Reference the image through Astro's GitHub Pages base path, preferably using `import.meta.env.BASE_URL` or an equivalent base-safe helper.
4. Add explicit intrinsic dimensions or a stable aspect ratio to prevent layout shift.
5. Use responsive `object-fit` and a deliberate `object-position` rather than destructively cropping the source.
6. Correct EXIF orientation and optimize file size when tooling is available.
7. Do not replace the photo with a stock image, generated avatar, generic illustration, or GitHub avatar.
8. Do not change facial identity, reshape facial features, or apply excessive beauty retouching.
9. If `myself.jpeg` is genuinely absent from the checked-out worktree, do not fabricate a replacement. Report the exact blocker and keep the existing placeholder temporarily.

GitHub and LinkedIn are approved public links. Display both in the hero or contact area with accessible labels and safe external-link attributes. Public email, phone number, WhatsApp, downloadable CV, and other contact channels remain unconfirmed and must not be invented.

## Hard constraints

- Keep Astro and static output.
- Keep deployment on GitHub Pages at `https://kuker24.github.io/portfolio/`.
- Preserve the required Astro `base: '/portfolio'` behavior for internal links and local assets.
- Do not add a database, backend, authentication, CMS, Supabase, Firebase, Vercel dependency, or paid service.
- Avoid unnecessary hydration and client-side JavaScript.
- Do not invent achievements, metrics, testimonials, clients, dates, roles, or technical claims.
- Do not expose secrets, production infrastructure details, school data, student data, client data, phone numbers, or unapproved contact details.
- Keep SIAB1 displayed as SIAB1 while retaining its actual GitHub repository URL `kuker24/Ujianonline`.
- Keep StreamHive displayed as StreamHive while retaining its actual GitHub repository URL `kuker24/StreamLocal`.

## Design direction

Create a dark, high-end editorial interface with a technical character. Use strong typography, disciplined spacing, restrained gradients, subtle borders, and project evidence as the visual hierarchy. The result should feel personal and senior, not like a copied portfolio theme.

The owner portrait should be a meaningful visual anchor, integrated naturally into the composition rather than placed inside a generic circular avatar component.

Avoid:

- badge walls
- GitHub statistics cards
- fake terminal windows as decoration
- excessive glassmorphism
- generic developer illustrations
- autoplay media
- cursor hijacking
- heavy parallax
- animation that delays navigation or reading

Use motion only where it clarifies hierarchy. Respect `prefers-reduced-motion`.

## Information architecture

Implement and refine these sections:

1. Sticky but unobtrusive navigation
2. Hero with the verified `myself.jpeg` portrait, name, positioning, summary, and primary actions
3. About section with a concise personal narrative
4. Featured projects with clear separation between production systems and serious hobby projects
5. Individual project detail panels or pages containing problem, role, engineering focus, stack, status, and GitHub link
6. Technical capabilities grouped by discipline
7. Experience and teaching narrative using only confirmed information
8. Engineering principles
9. Contact section with verified GitHub and LinkedIn links only, plus no invented channels
10. Clean footer

## Content model

Keep editable factual content outside large page components. Refactor `src/data/site.ts` into a scalable typed structure when necessary. Do not hide facts inside decorative component markup.

Use the confirmed profile fields already recorded in `src/data/site.ts`. Keep the portrait source filename and public profile URLs centralized rather than duplicating them across unrelated components.

Project coverage:

- SIAB2: production academic and attendance system
- SIAB1: production digital examination system, formerly Ujian Online
- LensaDiri: privacy-first serious hobby project
- StreamHive: local-first LAN media streaming serious hobby project

The project cards should explain engineering significance, not merely list technologies.

## Media

Use `myself.jpeg` as the final portrait. Remove the visible portrait-placeholder instruction from the final production UI after successful integration.

Create documented placeholders for verified project screenshots, but do not fabricate screenshots or use unrelated stock images. A project without an approved screenshot should rely on strong typography, factual architecture details, and restrained abstract layout treatment.

## Quality requirements

- semantic HTML landmarks
- keyboard-accessible navigation and controls
- visible focus states
- WCAG-conscious contrast
- responsive behavior from 320px upward
- no horizontal overflow
- optimized local images with explicit dimensions
- useful title, description, canonical URL, Open Graph metadata, and basic structured data
- custom 404 page compatible with GitHub Pages
- minimal JavaScript bundle
- maintainable components and typed data
- all local asset URLs valid under `/portfolio/`
- no broken image when JavaScript is disabled

## Delivery process

1. Report your repository findings.
2. Confirm whether `myself.jpeg` was found and state its current path.
3. Provide a short implementation plan.
4. Implement the complete UI and content architecture.
5. Integrate and optimize the verified portrait.
6. Add GitHub and LinkedIn links in appropriate locations.
7. Run formatting if configured.
8. Run `npm run check`.
9. Run `npm run build`.
10. Fix all errors and meaningful warnings.
11. Inspect the generated output and verify portrait, favicon, navigation, and repository links under the GitHub Pages base path.
12. Report files changed, decisions, commands, verification results, portrait output path, and remaining user-supplied placeholders.

Do not stop after producing a mockup or plan. Complete the implementation in the repository.

---
