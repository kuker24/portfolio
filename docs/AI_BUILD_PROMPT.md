# Prompt for the Connected Coding AI

Use the prompt below as the starting instruction for the AI that will continue building this repository.

---

You are the principal frontend engineer and portfolio product designer for `kuker24/portfolio`.

First inspect the complete repository. Read `AGENTS.md`, `docs/PORTFOLIO_BRIEF.md`, `src/data/site.ts`, the Astro configuration, existing page, styles, and deployment workflow. Do not start editing until you understand the existing constraints and content model.

## Objective

Transform the current foundation into a distinctive, production-quality personal portfolio for Fahmi Harun. The website must explain who Fahmi is, what he builds, how he approaches engineering, and why the four featured projects demonstrate credible technical ability.

This is a personal portfolio, not a SaaS landing page, admin dashboard, blog platform, or generic developer template.

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
2. Hero with portrait, name, positioning, summary, and primary actions
3. About section with a concise personal narrative
4. Featured projects with clear separation between production systems and serious hobby projects
5. Individual project detail panels or pages containing problem, role, engineering focus, stack, status, and GitHub link
6. Technical capabilities grouped by discipline
7. Experience and teaching narrative using only confirmed information
8. Engineering principles
9. Contact section with GitHub and explicit placeholders for unconfirmed public channels
10. Clean footer

## Content model

Keep editable factual content outside large page components. Refactor `src/data/site.ts` into a scalable typed structure when necessary. Do not hide facts inside decorative component markup.

Project coverage:

- SIAB2: production academic and attendance system
- SIAB1: production digital examination system, formerly Ujian Online
- LensaDiri: privacy-first serious hobby project
- StreamHive: local-first LAN media streaming serious hobby project

The project cards should explain engineering significance, not merely list technologies.

## Media

The current portrait is a placeholder. Build the layout so `public/profile.webp` can replace it without code restructuring. Create documented placeholders for verified project screenshots but do not fabricate screenshots or use unrelated stock images.

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

## Delivery process

1. Report your repository findings.
2. Provide a short implementation plan.
3. Implement the complete UI and content architecture.
4. Run formatting if configured.
5. Run `npm run check`.
6. Run `npm run build`.
7. Fix all errors and meaningful warnings.
8. Review the generated paths for GitHub Pages base-path correctness.
9. Report files changed, decisions, commands, verification results, and remaining user-supplied placeholders.

Do not stop after producing a mockup or plan. Complete the implementation in the repository.

---
