# Technical Design Specification: Resend-Inspired Portfolio Redesign

- **Target Repository:** `kuker24/portfolio`
- **Owner / Person:** Fahmi Harun
- **Date:** 2026-07-28
- **Design Reference:** Refero Resend Style Reference (`DESIGN.md`, `tokens.json`, `variables.css`, `theme.css`)
- **Status:** Approved Spec

---

## 1. System Architecture & Core Constraints

### 1.1 Deployment & Static Build Engine
- **Framework:** Astro 5 (Static Output Mode `output: 'static'`)
- **Site & Base Configuration:** `site: 'https://kuker24.github.io'`, `base: '/portfolio/'`
- **Deployment:** GitHub Actions (`.github/workflows/deploy.yml` or standard GitHub Pages deployment)
- **Database & Backend:** Zero external databases, CMS, Supabase, Firebase, or Vercel dependencies. Fully static.

### 1.2 Design Tokens & CSS Architecture
- **Runtime Source of Truth:** `src/styles/variables.css` containing CSS custom properties derived from `docs/design-system/resend-reference/variables.css` and `tokens.json`.
- **Tailwind Integration:** Tailwind CSS v3.4.17.
  - `tailwind.config.mjs` maps Tailwind utility classes directly to `var(--color-...)`, `var(--font-...)`, and `var(--radius-...)`.
  - `theme.css` is strictly kept as a reference document (due to Tailwind v4 syntax) and will **not** be imported or compiled.
  - Old amber/copper color palette (`#E3B341`, `#F0883E`) is completely purged from UI utilities and stylesheets.

---

## 2. Visual Design System Rules

### 2.1 Color Palette & Canvas
- **Canvas / Page Background:** Pure Black `#000000` (`--color-void-black`). No off-black backgrounds, no gradient washes on sections or hero.
- **Hairline Layer Separation:** Graphite Hairline `#292d30` (`--color-graphite-hairline`). 1px solid borders for all cards, panels, inputs, buttons, and dividers. Zero drop shadows for layer elevation.
- **Typography Colors:**
  - Headings / Display: Primary White `#ffffff` (`--color-white`)
  - Body Text: Bone White `#f0f0f0` (`--color-bone-white`)
  - Muted Metadata / Sub-captions: Ash Gray `#a1a4a5` (`--color-ash-gray`)
  - Supporting Captions / Links: Smoke Gray `#abafb4` (`--color-smoke-gray`)
  - Low-emphasis Borders / Secondary: Iron `#6e727a` (`--color-iron`)
- **Developer Accent Color:** Iris Violet `#9281f7` (`--color-iris-violet`). Restricted strictly to code strings, developer identifiers, tags, repo badges, and terminal attributes. Never used on buttons, large card backgrounds, or primary section headlines.

### 2.2 Typography Scale & Self-Hosted Font Strategy
Installed via Fontsource packages to avoid remote stylesheet requests and maintain full privacy & offline build resilience:
- `@fontsource/inter` (Weights: `400`, `500`, `600`) — Body text, UI chrome, navigation, buttons.
- `@fontsource/playfair-display` (Weight: `400`) — Hero display statement (Editorial Domaine substitute).
- `@fontsource/jetbrains-mono` (Weights: `400`, `500`) — Developer labels, code blocks, terminal windows, tech stack tags (Commit Mono substitute).

#### Font Hierarchy & Utilities:
- **Hero Title:** Playfair Display, weight `400`, size `clamp(44px, 7vw, 96px)`, line-height `1.0`, letter-spacing `-0.01em`.
- **Section Headings:** Inter / Inter Display, weight `500`/`600`, size `clamp(28px, 4vw, 56px)`, line-height `1.15`, letter-spacing `-0.05em`.
- **Body:** Inter, weight `400`, size `16px`/`18px`, line-height `1.5`–`1.6`.
- **Dev Labels & Code:** JetBrains Mono, weight `400`/`500`, size `12px`/`14px`, line-height `1.4`.

### 2.3 Spacing & Radius System
- **Base Grid:** 4px grid (`--spacing-4` to `--spacing-144`).
- **Container Max Width:** `1200px` centered (`mx-auto px-4 sm:px-6 lg:px-8`).
- **Section Gap:** `96px` (or `64px` on narrow mobile).
- **Element / Grid Gap:** `16px`–`24px`.
- **Border Radius Rules:**
  - Buttons, badges, inputs: `6px` (`rounded-md` / `--radius-md`)
  - Cards, code windows, terminal boxes: `16px` (`rounded-2xl` / `--radius-2xl`)
  - Large panels: `24px` (`rounded-3xl` / `--radius-3xl`)
  - Announcement pills: `9999px` (`rounded-full`)

---

## 3. Component Architecture & UI Specifications

### 3.1 `src/layouts/Layout.astro`
- Imports self-hosted font CSS from `@fontsource/*`.
- Imports `src/styles/global.css` (which includes `@import './variables.css'`).
- Renders standard HTML head with Astro base-safe links for favicons, canonical URL, OpenGraph, Twitter card, and Schema.org `Person` JSON-LD.
- Includes `prefers-reduced-motion` safety rules.

### 3.2 `src/components/Header.astro` (Navigation)
- **Positioning:** Sticky top `top-0 z-50`.
- **Surface:** `rgba(0,0,0,0.92)` backdrop blur (`backdrop-blur-md`).
- **Separator:** Bottom border 1px `#292d30`.
- **Left:** Monospaced brand identifier `[ FH ]` or `Fahmi Harun`.
- **Center / Right Links:** Inter 14px text links (`#f0f0f0`, hover `#ffffff`) to `#about`, `#projects`, `#capabilities`, `#principles`, `#contact`.
- **CTA:** Right ghost button (`border 1px #292d30`, `text #ffffff`, `radius 6px`) pointing to `#projects` or GitHub.
- **Mobile Menu:** Accessible semantic toggle button and CSS/vanilla JS drawer for mobile viewports (`<768px`).

### 3.3 `src/components/Hero.astro`
- **Layout:** Desktop 2-column flex/grid (`lg:grid-cols-12 gap-12 items-center`).
- **Left Column (Positioning):**
  - Small mono eyebrow tag in Iris Violet (`--color-iris-violet`): `> FULL-STACK & AI EDUCATOR`
  - Large serif display headline: `Fahmi Harun`
  - Sub-headline: `Full-Stack Developer · Educational Systems Builder · AI Engineering Educator`
  - Concise professional narrative summary in `#a1a4a5`.
  - Ghost Action Buttons (6px radius, border 1px `#292d30`, hover `#ffffff` border):
    - `[ View Featured Work ↓ ]`
    - `[ GitHub Profile ↗ ]`
- **Right Column (Visual Anchor):**
  - Official Portrait `public/images/myself.webp` (Fallback `public/images/myself.jpeg`).
  - Container: Graphite hairline frame (`border 1px #292d30`), 16px radius.
  - Natural color presentation (no forced permanent grayscale, subtle natural contrast adjustment).
  - Width: `1169`, Height: `1541`, `aspect-ratio: 1169/1541`.

### 3.4 `src/components/Projects.astro`
- **Data Source:** Factual data in `src/data/site.ts`.
- **4 Featured Projects:**
  1. `SIAB2` (Production System — Academic & Attendance System with Android QR & Worker reconciliation)
  2. `SIAB1` (Production System — Online Exam Platform with Safe Exam Browser & WebSocket monitoring)
  3. `LensaDiri` (Serious Hobby Project — Privacy-first reflection app with PostgreSQL RLS & Argon2id)
  4. `StreamHive` (Serious Hobby Project — Local media streaming app with HTTP Range & FFmpeg)
- **Presentation Structure:**
  - Production Systems (`SIAB2`, `SIAB1`): Full-width featured cards combining section info and terminal code windows.
  - Hobby Projects (`LensaDiri`, `StreamHive`): 2-column responsive grid of developer terminal cards.
- **Terminal & Card Styling:**
  - Background `#000000`, border 1px `#292d30`, radius 16px, padding 32px.
  - Terminal header dots (`● ● ●` in graphite/iron) at top left.
  - Repository URL identifier highlighted in Iris Violet `#9281f7`.
  - Tech stack rendered as monospaced badges (`JetBrains Mono`, radius 6px, border 1px `#292d30`, background `#000000`).
  - Architecture notes formatted as structured terminal output lines.
  - Action link: Ghost text link + chevron (`GitHub Repository →`).

### 3.5 `src/components/About.astro`
- **Layout:** Wide editorial section with generous vertical whitespace.
- **Header:** Geometric sans headline (`#ffffff`, tracking `-0.05em`).
- **Prose Content:** Container max-width `680px`, bone-white body copy (`#f0f0f0`), font size 18px, line-height 1.6.
- **Dividers:** Thin hairline border `#292d30` above and below.

### 3.6 `src/components/Capabilities.astro`
- **Layout:** 3-column grid (`grid-cols-1 md:grid-cols-3 gap-6`).
- **Card Design:** Black background, 1px `#292d30` graphite border, 16px radius.
- **Elements:**
  - Mono category label (`01 / ENGINEERING`, etc.) with subtle violet tag.
  - White title, ash-gray summary.
  - Monospaced skill tag list with 6px radius and graphite hairline borders.

### 3.7 `src/components/Principles.astro`
- **Layout:** Clean documentation block layout (`divide-y divide-[#292d30]`).
- **Item Format:**
  - Index number in mono (`01`, `02`, `03`) in Iris Violet `#9281f7`.
  - Headline in `#ffffff` (20px).
  - Summary in `#a1a4a5`.
  - Detailed explanation in `#f0f0f0`.

### 3.8 `src/components/Contact.astro`
- **Layout:** Minimalist CTA block.
- **Links / Actions:** Ghost buttons & text links with chevrons for verified profiles:
  - GitHub (`https://github.com/kuker24`)
  - LinkedIn (`https://www.linkedin.com/in/fahmiharun123/`)
- No unverified contact methods (no email forms, phone numbers, or WhatsApp).

### 3.9 `src/components/Footer.astro`
- Minimalist single-line footer.
- Content: `© 2026 Fahmi Harun. All rights reserved.` + GitHub & LinkedIn links.
- Border top 1px `#292d30`.

---

## 4. Verification & Validation Plan

1. **Static Analysis & Typecheck:** Run `npm run check` (0 errors, 0 warnings).
2. **Build Verification:** Run `npm run build` to compile static HTML output to `dist/`.
3. **Distribution Audit:** Inspect `dist/index.html` and `dist/404.html` to confirm proper base `/portfolio/` asset linking, valid meta tags, and inline JSON-LD.
4. **Viewport Testing:** Verify mobile & desktop viewports (320px, 375px, 768px, 1024px, 1440px) for zero horizontal overflow and flawless responsive alignment.
5. **Git Discipline:** Commit changes with `feat: redesign portfolio with Resend-inspired design system` and push to `origin/main`.
