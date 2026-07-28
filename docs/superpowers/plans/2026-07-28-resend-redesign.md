# Resend Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign total repository `kuker24/portfolio` using 100% design language from Refero Resend Style Reference with pure black canvas, 1px graphite borders, Iris Violet accents for dev labels, and self-hosted fonts.

**Architecture:** Clean Astro static component separation with CSS custom properties in `variables.css` mapped to `tailwind.config.mjs`. Self-hosted `@fontsource` Inter, Playfair Display, and JetBrains Mono fonts.

**Tech Stack:** Astro v5, Tailwind CSS v3.4.17, TypeScript, `@fontsource/inter`, `@fontsource/playfair-display`, `@fontsource/jetbrains-mono`.

## Global Constraints
- Pure black canvas `#000000` (`--color-void-black`).
- 1px hairline graphite border `#292d30` (`--color-graphite-hairline`) for all elevation/separations, zero drop shadows.
- Iris Violet `#9281f7` (`--color-iris-violet`) restricted strictly to code strings, dev labels, repo identifiers.
- Self-hosted fonts (`@fontsource` packages only: Inter 400/500/600, Playfair Display 400, JetBrains Mono 400/500).
- Preserve Astro static output, base `/portfolio/`, and factual data in `src/data/site.ts`.

---

### Task 1: Install Fontsource Dependencies & Configure Design Tokens

**Files:**
- Create: `src/styles/variables.css`
- Modify: `package.json`
- Modify: `src/styles/global.css`
- Modify: `tailwind.config.mjs`

- [ ] **Step 1: Install Fontsource packages**

Run:
```bash
npm install @fontsource/inter @fontsource/playfair-display @fontsource/jetbrains-mono
```

- [ ] **Step 2: Create `src/styles/variables.css`**

```css
:root {
  /* Colors */
  --color-void-black: #000000;
  --color-graphite-hairline: #292d30;
  --color-white: #ffffff;
  --color-bone-white: #f0f0f0;
  --color-ash-gray: #a1a4a5;
  --color-smoke-gray: #abafb4;
  --color-iron: #6e727a;
  --color-charcoal: #464a4d;
  --color-iris-violet: #9281f7;
  --color-iris-violet-glow: #baa7ff;
  --color-signal-blue: #3b9eff;
  --color-pulse-green: #3ad389;
  --color-alarm-red: #ff9592;

  /* Typography */
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;

  /* Radii */
  --radius-button: 6px;
  --radius-badge: 6px;
  --radius-input: 6px;
  --radius-card: 16px;
  --radius-panel: 24px;
  --radius-pill: 9999px;

  /* Spacing & Layout */
  --page-max-width: 1200px;
  --section-gap: 96px;
}
```

- [ ] **Step 3: Update `src/styles/global.css`**

```css
@import '@fontsource/inter/400.css';
@import '@fontsource/inter/500.css';
@import '@fontsource/inter/600.css';
@import '@fontsource/playfair-display/400.css';
@import '@fontsource/jetbrains-mono/400.css';
@import '@fontsource/jetbrains-mono/500.css';
@import './variables.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    background-color: var(--color-void-black);
    color: var(--color-bone-white);
    font-family: var(--font-inter);
  }

  body {
    background-color: var(--color-void-black);
    color: var(--color-bone-white);
    overflow-x: hidden;
  }
}
```

- [ ] **Step 4: Update `tailwind.config.mjs`**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        void: 'var(--color-void-black)',
        graphite: 'var(--color-graphite-hairline)',
        white: 'var(--color-white)',
        bone: 'var(--color-bone-white)',
        ash: 'var(--color-ash-gray)',
        smoke: 'var(--color-smoke-gray)',
        iron: 'var(--color-iron)',
        charcoal: 'var(--color-charcoal)',
        violet: 'var(--color-iris-violet)',
        'violet-glow': 'var(--color-iris-violet-glow)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        btn: 'var(--radius-button)',
        card: 'var(--radius-card)',
        panel: 'var(--radius-panel)',
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 5: Verify setup**

Run: `npm run check`
Expected: 0 errors.

---

### Task 2: Layout & Navigation (`Layout.astro` & `Header.astro`)

**Files:**
- Modify: `src/layouts/Layout.astro`
- Modify: `src/components/Header.astro`

- [ ] **Step 1: Update `Layout.astro`**

Ensure `Layout.astro` imports `global.css`, specifies pure black background, metadata, accessible skip link, and JSON-LD Person.

- [ ] **Step 2: Redesign `Header.astro`**

Implement sticky header with `rgba(0,0,0,0.92)` backdrop blur, `border-b border-graphite`, monospaced logo `[ FH ]`, Inter 14px text links, ghost CTA button, accessible keyboard navigation, and mobile menu toggle.

- [ ] **Step 3: Verify build**

Run: `npm run check`

---

### Task 3: Hero Section (`Hero.astro`)

**Files:**
- Modify: `src/components/Hero.astro`

- [ ] **Step 1: Redesign `Hero.astro`**

- Left column: Mono eyebrow in Iris Violet (`> FULL-STACK & AI EDUCATOR`), Playfair Display headline (`Fahmi Harun`), sub-headline, summary, and ghost buttons (`[ View Featured Work ↓ ]`, `[ GitHub Profile ↗ ]`).
- Right column: Portrait `public/images/myself.webp` in 1px graphite hairline border (`border-graphite rounded-card`), natural colors.

- [ ] **Step 2: Verify `npm run check`**

---

### Task 4: Featured Work & Terminal Windows (`Projects.astro`)

**Files:**
- Modify: `src/components/Projects.astro`

- [ ] **Step 1: Redesign `Projects.astro`**

- Render factual data from `src/data/site.ts`.
- SIAB2 & SIAB1 (Production Systems) as large terminal-styled featured cards.
- LensaDiri & StreamHive (Serious Hobby Projects) in a 2-column terminal grid.
- Iris Violet repo identifiers, monospaced tech tokens, structured architecture lines, text links with chevrons.

- [ ] **Step 2: Verify `npm run check`**

---

### Task 5: About, Capabilities, & Principles Sections

**Files:**
- Modify: `src/components/About.astro`
- Modify: `src/components/Capabilities.astro`
- Modify: `src/components/Principles.astro`

- [ ] **Step 1: Redesign `About.astro`** (Wide editorial layout, max 680px width, hairline dividers).
- [ ] **Step 2: Redesign `Capabilities.astro`** (3-column graphite cards, mono category numbers, skill tags).
- [ ] **Step 3: Redesign `Principles.astro`** (Documentation blocks, mono numbers `01`, `02`, `03` in Iris Violet).

- [ ] **Step 4: Verify `npm run check`**

---

### Task 6: Contact & Footer Sections

**Files:**
- Modify: `src/components/Contact.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/pages/404.astro`

- [ ] **Step 1: Redesign `Contact.astro`** (Ghost buttons & text links for GitHub and LinkedIn).
- [ ] **Step 2: Redesign `Footer.astro`** (Single-line minimal footer with copyright and verified social links).
- [ ] **Step 3: Redesign `404.astro`** (Resend style 404 page).

- [ ] **Step 4: Verify `npm run check`**

---

### Task 7: System Verification, Build & Deployment Validation

- [ ] **Step 1: Typecheck**

Run: `npm run check`

- [ ] **Step 2: Build**

Run: `npm run build`

- [ ] **Step 3: Inspect distribution HTML**

Inspect `dist/index.html` and `dist/404.html` for proper base paths `/portfolio/`.

- [ ] **Step 4: Commit & Push**

Run:
```bash
git add .
git commit -m "feat: redesign portfolio with Resend-inspired design system"
git push origin main
```
