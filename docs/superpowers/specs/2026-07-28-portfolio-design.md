# Portfolio System Design Specification - Fahmi Harun

- **Target Owner**: Fahmi Harun
- **Primary Title / Positioning**: Full-Stack Developer · Educational Systems Builder · AI Engineering Educator
- **Primary Image Asset**: `myself.jpeg` (1169x1541 px) -> `public/images/myself.jpeg` & `public/images/myself.webp`
- **Output Mode**: Static Astro Site (`output: 'static'`, `base: '/portfolio/'`)
- **Hosting Target**: GitHub Pages (`https://kuker24.github.io/portfolio/`)

---

## 1. Editorial & Aesthetic Direction

### Visual Tone
- **Style**: Dark Editorial, Technical Precision, Bespoke Craft.
- **Title / Hero Tagline**: `Full-Stack Developer · Educational Systems Builder · AI Engineering Educator`
- **Color Palette**:
  - Background: Deep Void Obsidian (`#090A0F`, `#0E1117`)
  - Surface/Cards: Charcoal Slate (`#161B22`, `#1F242D`) with subtle `#2A303C` borders
  - Primary Typography: Pure Soft White (`#F0F6FC`)
  - Secondary Typography: Muted Platinum (`#8B949E`)
  - Accent / Technical Highlight: Warm Amber / Code Copper (`#E3B341` / `#F0883E`)
- **Typography System**:
  - Display & Headings: Modern Sans-Serif (`Inter`, `Plus Jakarta Sans`, or system font stack) with tight tracking and strong hierarchy.
  - Code & Technical Labels: Monospace (`JetBrains Mono`, `Fira Code`) for metadata, tags, and architecture callouts.
- **Anti-Patterns Avoided**:
  - No "Principal Frontend Engineer" title (unverified).
  - No generic SaaS badges or fake terminal windows.
  - No GitHub stat counters or external widget bloat.
  - No excessive glassmorphism, heavy blur, or distracting parallax.
  - No unverified claims, fake metrics, testimonials, or fake user stats.
  - No fake project screenshots.

---

## 2. Information Architecture & Sections

1. **Header & Navigation**
   - Clean, sticky minimal navbar with backdrop blur.
   - Links: `About`, `Projects`, `Capabilities`, `Experience`, `Principles`, `Contact`.
   - Accessible mobile menu toggle with keyboard focus outline.

2. **Hero Section**
   - Left: Name ("Fahmi Harun"), positioning ("Full-Stack Developer · Educational Systems Builder · AI Engineering Educator"), technical ethos, and social links (GitHub & LinkedIn).
   - Right: Real photo of Fahmi Harun (`myself.jpeg` / `myself.webp`) with explicit aspect ratio (`1169/1541`), responsive `object-fit: cover`, and clean editorial frame.

3. **About & Background Narrative**
   - Who Fahmi Harun is: Full-Stack Developer & Educator in Coding and AI.
   - Focus: Building reliable, scalable, security-focused educational and web systems.

4. **Featured Production & Serious Hobby Projects**
   - **SIAB2** (`https://github.com/kuker24/abensi`) - Production System. High-throughput attendance & academic management system.
   - **SIAB1** (`https://github.com/kuker24/Ujianonline`) - Production System. Online examination platform.
   - **LensaDiri** (`https://github.com/kuker24/LensaDiri`) - Serious Hobby Project. Interactive self-reflection & personality engine.
   - **StreamHive** (`https://github.com/kuker24/StreamLocal`) - Serious Hobby Project. Local media streaming architecture.
   - Each project card features: Category badge, System Architecture breakdown, Key Technical Decisions, Repo link.

5. **Technical Capabilities**
   - Structured breakdown:
     - Full-Stack Engineering (Astro, React, Node.js, TypeScript, State Management, Performance)
     - Educational Systems & AI Instruction (Curriculum design, AI tool integration, Interactive learning tools)
     - System Architecture & Engineering Rigor (Static site pipelines, REST APIs, Security, CI/CD Workflows)

6. **Experience & Teaching Narrative**
   - Narrative of hands-on experience building educational systems and teaching Coding & AI.

7. **Engineering Principles**
   - Performance by default, Zero unnecessary client JS, Accessibility as a baseline, Honest technical documentation.

8. **Contact & Social Verification**
   - Direct verified public links:
     - GitHub: `https://github.com/kuker24`
     - LinkedIn: `https://www.linkedin.com/in/fahmiharun123/`
   - Attributes: `target="_blank"`, `rel="noreferrer"`, visible focus outlines.
   - Excluded: No email, WhatsApp, phone number, or CV download.

9. **Footer**
   - Copyright notice, build timestamp, base path verification.

10. **404 Page**
    - Custom Astro 404 page (`src/pages/404.astro`) matching dark editorial theme with link back to `/portfolio/`.

---

## 3. Image Optimization Pipeline

- Original image source: `myself.jpeg` (1169x1541 px).
- Destination: `public/images/myself.jpeg` (JPEG fallback) and `public/images/myself.webp` (optimized WebP).
- Picture tag implementation:
  ```html
  <picture>
    <source srcset="/portfolio/images/myself.webp" type="image/webp" />
    <img src="/portfolio/images/myself.jpeg" alt="Portrait of Fahmi Harun" width="1169" height="1541" class="w-full h-auto object-cover rounded-xl" />
  </picture>
  ```
- Explicit width/height to eliminate Cumulative Layout Shift (CLS = 0).

---

## 4. Technical Stack & Build Setup

- **Framework**: Astro static (`output: 'static'`)
- **Styling**: Tailwind CSS v3 + `@astrojs/tailwind`
- **Config (`astro.config.mjs`)**:
  ```javascript
  import { defineConfig } from 'astro/config';
  import tailwind from '@astrojs/tailwind';

  export default defineConfig({
    site: 'https://kuker24.github.io',
    base: '/portfolio/',
    output: 'static',
    integrations: [tailwind()],
  });
  ```
- **Deployment**: `.github/workflows/deploy.yml` configured for GitHub Pages (`actions/deploy-pages`).

---

## 5. Acceptance Criteria Checklist

- [x] Astro static output (`output: 'static'`)
- [x] No backend, database, CMS, Supabase, Firebase, or Vercel
- [x] No fake metrics, testimonials, user counts, or unverified claims
- [x] No fake project screenshots
- [x] GitHub and LinkedIn as verified public contact
- [x] No email, WhatsApp, phone number, or CV
- [x] SIAB1 points to `https://github.com/kuker24/Ujianonline`
- [x] StreamHive points to `https://github.com/kuker24/StreamLocal`
- [x] Responsive from 320px
- [x] Keyboard navigation and `focus-visible` working
- [x] `prefers-reduced-motion` respected
- [x] No horizontal overflow
- [x] `package-lock.json` committed
- [x] `npm run check` passes
- [x] `npm run build` passes
- [x] Output `dist/` verified
- [x] GitHub Actions deployment workflow configured
