# Simplify Portfolio Copy & UI Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish and simplify the portfolio UI across all components to feel premium, personal, calm, and professional by stripping all terminal ornaments, file metadata, fake config filenames, and technical noise, while switching to consistent English copy and preserving all factual project data and core Resend design tokens.

**Architecture:** Clean Astro static structure with pure black `#000000` canvas, 1px graphite borders `#292d30`, Iris Violet accents `#9281f7` limited to small labels/tags, and self-hosted fonts.

**Tech Stack:** Astro v5, Tailwind CSS v3.4.17, TypeScript, `@fontsource` fonts.

## Global Constraints
- Pure black canvas `#000000`, 1px graphite hairline border `#292d30`, no drop shadows.
- No terminal chrome (no fake filenames, no 3 dots, no `//` prefixes, no status dots, no `> TAG_NAME` underscores).
- 100% English for all public UI copy.
- Display labels: `Production System` -> `Production`, `Serious Hobby Project` -> `Independent Project`.
- CTA labels: "View on GitHub", "GitHub", "View selected work", "Back home".
- Preserve Astro static output, site URL, base `/portfolio/`, and GitHub Pages deployment workflow.

---

### Task 1: Update English Copy Data (`src/data/site.ts`)

**Files:**
- Modify: `src/data/site.ts`

- [ ] **Step 1: Translate and refine `siteData` in `src/data/site.ts`**

Update `about`, `projects`, `capabilities`, and `principles` descriptions to clean, professional English without altering factual tech stack or repo URLs.

- [ ] **Step 2: Run `npm run check`**

Verify TypeScript diagnostics.

---

### Task 2: Refine Header & Footer Components (`Header.astro` & `Footer.astro`)

**Files:**
- Modify: `src/components/Header.astro`
- Modify: `src/components/Footer.astro`

- [ ] **Step 1: Refine `Header.astro`**
  - Change `[ FH ]` logo to `FH`
  - Change button label from `github.com/kuker24` to `GitHub`
  - Update nav links to: `About`, `Selected work`, `Capabilities`, `Principles`, `Contact`

- [ ] **Step 2: Refine `Footer.astro`**
  - Remove `Static Portfolio` text
  - Clean footer: `© [current year] Fahmi Harun` + `GitHub` & `LinkedIn` links

- [ ] **Step 3: Run `npm run check`**

---

### Task 3: Strip Terminal Chrome from Hero (`Hero.astro`)

**Files:**
- Modify: `src/components/Hero.astro`

- [ ] **Step 1: Refine Hero text and buttons**
  - Eyebrow: `Full-stack developer & AI educator` (mono Iris Violet, no `>` symbol)
  - Headline: `Fahmi Harun`
  - Positioning: `Full-Stack Developer · Educational Systems Builder · AI Engineering Educator`
  - CTAs: `View selected work` (to `#projects`), `GitHub` (to `https://github.com/kuker24`)
- [ ] **Step 2: Clean portrait image container**
  - Remove terminal header bar, 3 dots, filename `fahmi_harun.webp`, metadata `1169x1541`, `PORTRAIT / FAHMI HARUN`, status `active`, location `Indonesia`.
  - Frame: `border border-graphite rounded-card bg-void overflow-hidden`, natural colors.

- [ ] **Step 3: Run `npm run check`**

---

### Task 4: Refine Project Cards (`Projects.astro`)

**Files:**
- Modify: `src/components/Projects.astro`

- [ ] **Step 1: Simplify Project Card markup**
  - Section label: `Selected work` (mono Iris Violet, no `>` or `FEATURED_WORK`)
  - Subheadings: `Production`, `Independent Project` (no `//`, `[ 01 — 02 ]`, `STATUS: PRODUCTION`, `OPEN SOURCE`)
  - Remove fake config filenames, 3 dots, `repo:`, `tech_stack:`, `stack:`, `// Architecture & Security Highlights`
  - Display category labels: `Production System` -> `Production`, `Serious Hobby Project` -> `Independent Project`
  - Limit architecture notes to max 3 items per project card
  - Action link label: `View on GitHub` with trailing chevron

- [ ] **Step 2: Run `npm run check`**

---

### Task 5: Refine About, Capabilities, Principles, Contact, and 404 Pages

**Files:**
- Modify: `src/components/About.astro`
- Modify: `src/components/Capabilities.astro`
- Modify: `src/components/Principles.astro`
- Modify: `src/components/Contact.astro`
- Modify: `src/pages/404.astro`

- [ ] **Step 1: Refine `About.astro`**
  - Section label: `About`
  - Remove status/discipline footer bar
  - Clean two-paragraph narrative with graphite divider
- [ ] **Step 2: Refine `Capabilities.astro`**
  - Section label: `Capabilities`
  - Remove `01 // DOMAIN`, `skills & tooling`, status dots
  - Clean cards with title, summary, technology tags
- [ ] **Step 3: Refine `Principles.astro`**
  - Section label: `Principles`
  - Keep mono numbers `01`, `02`, `03`
  - Remove summary badges; format as number + title + 1-sentence description
- [ ] **Step 4: Refine `Contact.astro`**
  - Section label: `Contact`
  - Remove `// GITHUB_PROFILE`, `// LINKEDIN_PROFILE`, `SECURITY: VERIFIED_PROFILES`
  - Render two clean links: `GitHub — kuker24`, `LinkedIn — fahmiharun123`
- [ ] **Step 5: Refine `404.astro`**
  - Change `404 // NOT_FOUND` -> `404`
  - Change `Page Not Found` -> `Page not found`
  - Description: `The page you are looking for could not be found.`
  - Button: `Back home`

- [ ] **Step 6: Run `npm run check`**

---

### Task 6: Comprehensive String Audit & Verification Build

- [ ] **Step 1: Audit codebase for removed decorative strings**
  Ensure no `//`, `> ABOUT_NARRATIVE`, `1169x1541`, `status:`, or fake `.config.ts` strings remain in rendered output.
- [ ] **Step 2: Build project**
  Run `npm run build`
- [ ] **Step 3: Commit & Push**
  Commit message: `refactor: simplify portfolio copy and remove decorative metadata`
  Push to `origin/main` without force-push.
