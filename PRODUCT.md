# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and technical reviewers opening a GitHub Pages site to decide whether Fahmi Harun is a credible software builder.

Also: collaborators, school stakeholders, prospective clients, and developer peers.

## Product Purpose

A personal portfolio that explains who Fahmi is, what he builds, how he works, and which projects represent his engineering ability. Success: a visitor can place him (student, educator, systems builder), inspect real repositories, and contact him through public profiles.

## Positioning

Evidence-first school-systems builder: production attendance and examination software used in a school setting, plus privacy-first and local-first independent work. Claims stay limited to architecture that exists in public repositories.

## Operating Context

Static Astro site at `https://kuker24.github.io/portfolio/`. Visitors scan on a laptop or phone, then leave to GitHub or LinkedIn. No login, no CMS, no form backend.

## Capabilities and Constraints

- Static Astro + Tailwind. GitHub Pages only. Preserve `site` and `base`.
- No database, API, auth, CMS, Vercel, or Supabase on this site.
- Do not invent metrics, testimonials, employers, awards, or unmeasured capacity.
- Public email and CV are undecided — omit them.
- Project screenshots are undecided — omit them.
- Visible UI stays English unless the owner asks otherwise.

Terminology: SIAB2 is the attendance system (`kuker24/abensi`). SIAB1 is the current exam system (`kuker24/SIAB1_V2`). Ujian Online (`kuker24/Ujianonline`) is the previous exam generation. Do not call current SIAB1 a Safe Exam Browser product.

## Brand Commitments

- Name: Fahmi Harun
- Portrait: `public/images/myself.jpeg` (owner: Fahmi Harun). Crop and optimize only. Do not reshape the face or replace it with a generated likeness.
- GitHub: `https://github.com/kuker24`
- LinkedIn: `https://www.linkedin.com/in/fahmiharun123/`
- X: `https://x.com/FahmiPossible`
- Visual world pinned 2026-08-17: Motionsites **Portfolio Cosmic**, intensified 2026-08-17 as a curved-crease first viewport (Impeccable surface seed `6d3ca14b` index 7). Comp: `.impeccable/found-this-design/portfolio-cosmic-hero-comp.jpg`. Pin: `.impeccable/found-this-design.json`. Resend / `Designnew1/` is anti-reference.
- Background is a still 4K city photograph. No autoplay media. Respect `prefers-reduced-motion`.

## Evidence on Hand

Owner-authored public sources checked 2026-08-17:

- GitHub profile README (`kuker24/kuker24`) and user API
- Featured repositories: `abensi`, `SIAB1_V2`, `Ujianonline`, `LensaDiri`, `StreamLocal`, `F-INVOICE`
- Portrait file in this repo
- `docs/PORTFOLIO_BRIEF.md` (initial brief; SIAB1 repo entry is superseded by `SIAB1_V2`)

Confirmed facts:

- Computer Engineering student, D4 Teknologi Rekayasa Komputer, Politeknik Caltex Riau
- Pekanbaru, Riau, Indonesia
- Teaches introductory AI to class X at MAN 1 Rokan Hulu
- Trained teachers on the SIAB2 digital attendance workflow
- Builds education and operations software used in a school setting

Absences future work must not fabricate: customer counts, uptime, prices, testimonials, press, public email, CV.

## Product Principles

1. Architecture over unverified claims.
2. Repository URLs stay exact; display names may differ.
3. Pending inputs stay absent, not invented.
4. The first viewport must name the person and the work, then send the visitor to evidence.

## Accessibility & Inclusion

Keyboard-usable navigation, visible focus, sufficient contrast on the dark canvas, skip link, and `prefers-reduced-motion`. Semantic HTML. No cursor hijacking.
