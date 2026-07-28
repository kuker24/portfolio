# AGENTS.md

## Mission

Develop this repository into a high-quality personal portfolio for Fahmi Harun.

The website must explain who Fahmi is, what he builds, how he works, and which projects best represent his engineering ability.

## Non-negotiable constraints

- Keep the site fully static and deployable to GitHub Pages.
- Do not introduce a database, backend API, authentication, CMS, Vercel dependency, or Supabase dependency.
- Preserve the Astro `site` and `base` configuration for `https://kuker24.github.io/portfolio/`.
- Keep all internal links and local assets compatible with Astro's configured base path.
- Do not expose credentials, private infrastructure details, personal phone numbers, client data, student data, or production secrets.
- Do not invent metrics, testimonials, employers, clients, awards, project adoption numbers, or technical capabilities.
- Treat `docs/PORTFOLIO_BRIEF.md` and `src/data/site.ts` as the initial content source of truth.

## Product direction

Build a personal portfolio, not an admin dashboard, social network, blog platform, or generic SaaS landing page.

The intended tone is:

- technically credible
- personal but professional
- modern and distinctive
- concise and evidence-driven
- suitable for recruiters, collaborators, educators, and prospective clients

## Required information architecture

1. Hero and personal positioning
2. About and current focus
3. Featured work
4. Skills and engineering capabilities
5. Experience or professional journey
6. Engineering principles
7. Contact and external profiles

Additional sections are allowed only when they strengthen the personal narrative.

## Project classification

- SIAB2: production system, repository `kuker24/abensi`
- SIAB1: production examination system, formerly named Ujian Online, repository `kuker24/Ujianonline`
- LensaDiri: serious hobby project, repository `kuker24/LensaDiri`
- StreamHive: serious hobby project, repository `kuker24/StreamLocal`

Do not rename GitHub repository URLs. The display name may differ from the repository name.

## Engineering standards

- Semantic HTML and keyboard-accessible interactions
- Responsive layout from narrow mobile screens upward
- Visible focus states and sufficient color contrast
- Respect `prefers-reduced-motion`
- Avoid unnecessary client-side JavaScript
- No autoplay media, excessive parallax, cursor hijacking, or animation that blocks reading
- Optimize local images and define dimensions to reduce layout shift
- Keep content data separate from page markup where practical
- Run `npm run check` and `npm run build` before considering work complete

## Change discipline

Before editing:

1. Inspect the existing repository and current content.
2. State the implementation plan.
3. Preserve working deployment configuration.

After editing, report:

- files changed
- important design and architecture decisions
- commands executed
- verification results
- remaining placeholders requiring user input
