# Fahmi Harun Portfolio

Static personal portfolio for **Fahmi Harun**, built with Astro and deployed through GitHub Pages.

## Scope

This repository is intentionally focused on a personal portfolio:

- personal introduction and professional positioning
- selected production and serious hobby projects
- skills, engineering focus, and experience
- direct links to GitHub repositories and contact channels

It does not require a backend, database, authentication, CMS, Vercel, or Supabase.

## Featured projects

| Display name | Repository | Category |
| --- | --- | --- |
| SIAB2 | `kuker24/abensi` | Production system |
| SIAB1, formerly Ujian Online | `kuker24/Ujianonline` | Production system |
| LensaDiri | `kuker24/LensaDiri` | Serious hobby project |
| StreamHive | `kuker24/StreamLocal` | Serious hobby project |

## Local development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run check
npm run build
```

## Deployment

The deployment workflow targets:

```text
https://kuker24.github.io/portfolio/
```

After the first push, open **Settings → Pages** and set **Source** to **GitHub Actions**.

## AI development

Read these files before making substantial changes:

- `AGENTS.md`
- `docs/PORTFOLIO_BRIEF.md`

The current UI is only a clean, deployable foundation. The connected coding AI should evolve it without changing the static-hosting constraint.