# Portfolio System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready, dark editorial static Astro portfolio website for Fahmi Harun deployed to GitHub Pages at `/portfolio/`.

**Architecture:** Astro 5 static site (`output: 'static'`) with Tailwind CSS v3, zero runtime client JS overhead, responsive photo optimization pipeline using `<picture>` with WebP + JPEG fallback, and full WCAG AA accessibility & SEO metadata.

**Tech Stack:** Astro, Tailwind CSS, TypeScript, Sharp (for image optimization), GitHub Actions.

## Global Constraints

- Static output (`output: 'static'`)
- Base path: `/portfolio/` (`base: '/portfolio/'`)
- Image intrinsic dimensions: `1169` x `1541`, aspect ratio `1169/1541`, alt text "Portrait of Fahmi Harun"
- Position title: `Full-Stack Developer · Educational Systems Builder · AI Engineering Educator`
- Verified Projects:
  1. **SIAB2** -> `https://github.com/kuker24/abensi` (Production System)
  2. **SIAB1** -> `https://github.com/kuker24/Ujianonline` (Production System)
  3. **LensaDiri** -> `https://github.com/kuker24/LensaDiri` (Serious Hobby Project)
  4. **StreamHive** -> `https://github.com/kuker24/StreamLocal` (Serious Hobby Project)
- Verified Contact: GitHub (`https://github.com/kuker24`) & LinkedIn (`https://www.linkedin.com/in/fahmiharun123/`)
- No backend, DB, CMS, Supabase, Firebase, Vercel, email, phone, or CV download.

---

### Task 1: Initialize Astro Project Package & Configuration

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tailwind.config.mjs`
- Create: `tsconfig.json`

**Interfaces:**
- Consumes: Node.js npm packages
- Produces: Astro build environment with Tailwind CSS integration and static base path `/portfolio/`

- [ ] **Step 1: Write `package.json`**

```json
{
  "name": "portfolio",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "check": "astro check",
    "optimize-images": "node scripts/optimize-image.js"
  },
  "dependencies": {
    "@astrojs/check": "^0.9.4",
    "@astrojs/tailwind": "^5.1.5",
    "astro": "^5.1.0",
    "sharp": "^0.33.5",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.2"
  }
}
```

- [ ] **Step 2: Write `astro.config.mjs`**

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

- [ ] **Step 3: Write `tailwind.config.mjs`**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#090A0F',
          surface: '#0E1117',
          card: '#161B22',
          border: '#21262D',
        },
        text: {
          main: '#F0F6FC',
          muted: '#8B949E',
          dim: '#6E7681',
        },
        accent: {
          amber: '#E3B341',
          copper: '#F0883E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 4: Write `tsconfig.json`**

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

- [ ] **Step 5: Run `npm install` and verify config**

Run: `npm install`
Expected: Installation completes successfully with clean `node_modules` and generated `package-lock.json`.

---

### Task 2: Image Optimization Pipeline (`myself.jpeg` -> `myself.webp`)

**Files:**
- Create: `public/images/myself.jpeg`
- Create: `public/images/myself.webp`
- Create: `scripts/optimize-image.js`

**Interfaces:**
- Consumes: `/home/fahmiagent/Downloads/LAB GITHUB/LAB BETA/biodiri/myself.jpeg`
- Produces: `public/images/myself.jpeg` (JPEG fallback) and `public/images/myself.webp` (optimized WebP format)

- [ ] **Step 1: Write `scripts/optimize-image.js`**

```javascript
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const source = path.resolve('myself.jpeg');
const targetDir = path.resolve('public/images');
const targetJpeg = path.join(targetDir, 'myself.jpeg');
const targetWebp = path.join(targetDir, 'myself.webp');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

fs.copyFileSync(source, targetJpeg);
console.log(`Copied ${source} -> ${targetJpeg}`);

await sharp(targetJpeg)
  .rotate() // Auto-orient according to EXIF
  .webp({ quality: 85 })
  .toFile(targetWebp);

console.log(`Generated optimized WebP -> ${targetWebp}`);
```

- [ ] **Step 2: Run image optimization script**

Run: `node scripts/optimize-image.js`
Expected: Both `public/images/myself.jpeg` and `public/images/myself.webp` generated cleanly.

---

### Task 3: Site Data Architecture (`src/data/site.ts`)

**Files:**
- Create: `src/data/site.ts`

**Interfaces:**
- Consumes: Portfolio spec metadata & project repository URLs
- Produces: Typed data structures for Site, Projects, Capabilities, Narrative, and Principles

- [ ] **Step 1: Write `src/data/site.ts`**

```typescript
export interface Project {
  id: string;
  name: string;
  category: 'Production System' | 'Serious Hobby Project';
  repoUrl: string;
  description: string;
  architectureNotes: string[];
  techStack: string[];
  highlights: string[];
}

export interface CapabilityGroup {
  title: string;
  description: string;
  skills: string[];
}

export interface EngineeringPrinciple {
  title: string;
  summary: string;
  detail: string;
}

export const siteData = {
  name: "Fahmi Harun",
  title: "Full-Stack Developer · Educational Systems Builder · AI Engineering Educator",
  description: "Bespoke dark editorial portfolio of Fahmi Harun, specializing in full-stack web applications, production-grade educational systems, and teaching coding and AI engineering.",
  siteUrl: "https://kuker24.github.io",
  basePath: "/portfolio",
  socials: {
    github: {
      label: "GitHub",
      url: "https://github.com/kuker24",
      username: "kuker24",
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/fahmiharun123/",
      username: "fahmiharun123",
    },
  },
  photo: {
    jpeg: "/portfolio/images/myself.jpeg",
    webp: "/portfolio/images/myself.webp",
    alt: "Portrait of Fahmi Harun",
    width: 1169,
    height: 1541,
    aspectRatio: "1169/1541",
  },
  about: {
    intro: "Saya seorang Full-Stack Developer dan pendidik di bidang Coding serta Kecerdasan Artifisial. Berfokus pada pembangunan sistem perangkat lunak yang andal, aman, dan mudah diakses.",
    narrative: [
      "Perjalanan engineering saya dibentuk oleh pengalaman membangun sistem manajemen pendidikan dan platform ujian yang memproses interaksi pengguna secara intensif.",
      "Sebagai AI Engineering Educator, saya membimbing pembelajar dan pengembang untuk memanfaatkan teknologi AI secara bertanggung jawab, terstruktur, dan berbasis pada prinsip-prinsip rekayasa perangkat lunak yang kokoh."
    ],
  },
  projects: [
    {
      id: "siab2",
      name: "SIAB2",
      category: "Production System",
      repoUrl: "https://github.com/kuker24/abensi",
      description: "Sistem Informasi Presensi & Akademik Generasi Baru. Dirancang untuk keandalan tinggi dan pencatatan riwayat presensi yang konsisten.",
      architectureNotes: [
        "Skema data efisien untuk throughput transaksi presensi tinggi.",
        "Desain antarmuka responsif yang meminimalkan latency pengiriman data.",
        "Kontrol akses berbasis peran untuk keamanan data institusi."
      ],
      techStack: ["Node.js", "TypeScript", "REST APIs", "SQL/Database Architecture"],
      highlights: ["Production-proven di lingkungan akademis", "Keamanan akses terstruktur"]
    },
    {
      id: "siab1",
      name: "SIAB1",
      category: "Production System",
      repoUrl: "https://github.com/kuker24/Ujianonline",
      description: "Platform Ujian Online berkecepatan tinggi yang dirancang untuk menangani beban sesi ujian simultan dengan integritas data yang terjaga.",
      architectureNotes: [
        "Mekanisme auto-save berkala untuk mengamankan jawaban peserta.",
        "Optimasi query untuk menangani lonjakan request pada jam puncak ujian.",
        "Antarmuka ramah pengguna yang minim gangguan visual."
      ],
      techStack: ["PHP/Backend Engine", "JavaScript", "SQL", "Session State Management"],
      highlights: ["Stabilitas tinggi pada sesi ujian serentak", "Integritas state jawaban"]
    },
    {
      id: "lensadiri",
      name: "LensaDiri",
      category: "Serious Hobby Project",
      repoUrl: "https://github.com/kuker24/LensaDiri",
      description: "Aplikasi refleksi diri dan evaluasi personal berbasis logika analitis untuk membantu eksplorasi profil diri secara terstruktur.",
      architectureNotes: [
        "Modul pemrosesan logika kuesioner interaktif di sisi klien.",
        "Visualisasi hasil evaluasi yang bersih dan intuitif.",
        "Desain yang mengedepankan privasi pengguna."
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "State Machine Logic"],
      highlights: ["Eksplorasi arsitektur frontend modern", "Desain berbasis pengalaman pengguna"]
    },
    {
      id: "streamhive",
      name: "StreamHive",
      category: "Serious Hobby Project",
      repoUrl: "https://github.com/kuker24/StreamLocal",
      description: "Arsitektur media streaming lokal yang memungkinkan pengiriman konten audio/video di jaringan lokal secara efisien.",
      architectureNotes: [
        "Streaming buffer teroptimasi untuk kelancaran pemutaran media.",
        "Manajemen resource jaringan lokal tanpa ketergantungan cloud luar.",
        "Interface kontrol pemutaran yang responsif."
      ],
      techStack: ["Node.js", "Media Streaming Protocols", "JavaScript", "Network I/O"],
      highlights: ["Optimasi bandwidth jaringan lokal", "Pengolahan buffer media"]
    }
  ] as Project[],
  capabilities: [
    {
      title: "Full-Stack Web Engineering",
      description: "Mengembangkan aplikasi web dari arsitektur frontend responsif hingga backend yang terstruktur dan aman.",
      skills: ["Astro", "React", "TypeScript", "Node.js", "Tailwind CSS", "REST API Architecture"]
    },
    {
      title: "Educational Systems & AI Instruction",
      description: "Merancang platform akademik serta materi pembelajaran Coding dan Kecerdasan Artifisial berbasis praktik.",
      skills: ["EdTech Architecture", "AI Engineering Workflows", "Interactive Learning Tools", "Technical Curriculum Design"]
    },
    {
      title: "System Rigor & Security Mindset",
      description: "Menerapkan prinsip keamanan, performa tinggi, dan aksesibilitas standar WCAG pada setiap proyek.",
      skills: ["Static Generation (SSG)", "Web Accessibility (WCAG)", "SEO & Metadata", "Git Automation & Workflows"]
    }
  ] as CapabilityGroup[],
  principles: [
    {
      title: "Performance by Default",
      summary: "Mengurangi overhead yang tidak perlu.",
      detail: "Setiap baris kode dan aset digital dioptimasi untuk kecepatan muat, meminimalisir payload JavaScript di sisi klien."
    },
    {
      title: "Accessibility as Baseline",
      summary: "Perangkat lunak untuk semua pengguna.",
      detail: "Desain dan struktur HTML dibuat agar dapat diakses dengan mudah via navigasi keyboard dan pembaca layar."
    },
    {
      title: "Honest & Transparent Engineering",
      summary: "Fakta teknis di atas klaim semu.",
      detail: "Menampilkan karya dan proyek berdasarkan arsitektur nyata tanpa metrik palsu atau dekorasi buatan."
    }
  ] as EngineeringPrinciple[]
};
```

---

### Task 4: UI Components Implementation

**Files:**
- Create: `src/components/Header.astro`
- Create: `src/components/Hero.astro`
- Create: `src/components/About.astro`
- Create: `src/components/Projects.astro`
- Create: `src/components/Capabilities.astro`
- Create: `src/components/Experience.astro`
- Create: `src/components/Principles.astro`
- Create: `src/components/Contact.astro`
- Create: `src/components/Footer.astro`

- [ ] **Step 1: Write `src/components/Header.astro`**

```astro
---
import { siteData } from '../data/site';
---
<header class="sticky top-0 z-50 bg-bg-dark/80 backdrop-blur-md border-b border-bg-border/60">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
    <a href={`${siteData.basePath}/`} class="text-text-main font-mono text-sm font-semibold tracking-wider hover:text-accent-amber transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber rounded px-1">
      fahmiharun<span class="text-accent-amber">.dev</span>
    </a>
    
    <nav class="hidden md:flex items-center space-x-6 text-sm font-medium text-text-muted">
      <a href="#about" class="hover:text-text-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber rounded px-1">Tentang</a>
      <a href="#projects" class="hover:text-text-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber rounded px-1">Proyek</a>
      <a href="#capabilities" class="hover:text-text-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber rounded px-1">Keahlian</a>
      <a href="#principles" class="hover:text-text-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber rounded px-1">Prinsip</a>
      <a href="#contact" class="hover:text-text-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber rounded px-1">Kontak</a>
    </nav>

    <div class="flex items-center space-x-3">
      <a href={siteData.socials.github.url} target="_blank" rel="noreferrer" class="text-xs font-mono px-3 py-1.5 rounded border border-bg-border bg-bg-surface text-text-main hover:border-accent-amber hover:text-accent-amber transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber">
        GitHub
      </a>
      <a href={siteData.socials.linkedin.url} target="_blank" rel="noreferrer" class="text-xs font-mono px-3 py-1.5 rounded border border-bg-border bg-bg-surface text-text-main hover:border-accent-amber hover:text-accent-amber transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber">
        LinkedIn
      </a>
    </div>
  </div>
</header>
```

- [ ] **Step 2: Write `src/components/Hero.astro`**

```astro
---
import { siteData } from '../data/site';
---
<section class="py-16 md:py-24 border-b border-bg-border/40">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    
    <div class="lg:col-span-7 space-y-6">
      <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-bg-card border border-bg-border text-xs font-mono text-accent-amber">
        <span class="w-2 h-2 rounded-full bg-accent-amber animate-pulse"></span>
        <span>{siteData.title}</span>
      </div>

      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-main leading-tight">
        {siteData.name}
      </h1>

      <p class="text-lg text-text-muted leading-relaxed max-w-2xl">
        {siteData.about.intro}
      </p>

      <div class="pt-4 flex flex-wrap items-center gap-4">
        <a href="#projects" class="px-5 py-2.5 rounded bg-accent-amber text-bg-dark font-medium text-sm hover:bg-accent-copper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber">
          Lihat Karya & System
        </a>
        <a href={siteData.socials.github.url} target="_blank" rel="noreferrer" class="px-5 py-2.5 rounded border border-bg-border bg-bg-card text-text-main font-mono text-sm hover:border-accent-amber transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber">
          github.com/{siteData.socials.github.username}
        </a>
      </div>
    </div>

    <div class="lg:col-span-5 flex justify-center lg:justify-end">
      <div class="relative w-full max-w-sm aspect-[1169/1541] rounded-2xl overflow-hidden border border-bg-border shadow-2xl bg-bg-card">
        <picture>
          <source srcset={siteData.photo.webp} type="image/webp" />
          <img 
            src={siteData.photo.jpeg} 
            alt={siteData.photo.alt}
            width={siteData.photo.width}
            height={siteData.photo.height}
            class="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
    </div>

  </div>
</section>
```

- [ ] **Step 3: Write `src/components/About.astro`**

```astro
---
import { siteData } from '../data/site';
---
<section id="about" class="py-16 border-b border-bg-border/40">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <h2 class="text-xs font-mono uppercase tracking-widest text-accent-amber mb-3">01. Profil & Filosofi</h2>
    <h3 class="text-2xl sm:text-3xl font-bold text-text-main mb-6">Fokus Rekayasa Perangkat Lunak</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-text-muted leading-relaxed">
      {siteData.about.narrative.map((paragraph) => (
        <p class="bg-bg-card p-6 rounded-xl border border-bg-border/60">{paragraph}</p>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 4: Write `src/components/Projects.astro`**

```astro
---
import { siteData } from '../data/site';
---
<section id="projects" class="py-16 border-b border-bg-border/40">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="mb-10">
      <h2 class="text-xs font-mono uppercase tracking-widest text-accent-amber mb-3">02. Portfolio Proyek</h2>
      <h3 class="text-2xl sm:text-3xl font-bold text-text-main">Production Systems & Serious Hobby Projects</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {siteData.projects.map((project) => (
        <article class="bg-bg-card border border-bg-border rounded-xl p-6 flex flex-col justify-between hover:border-accent-amber/50 transition-all">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class={`text-xs font-mono px-2.5 py-1 rounded border ${project.category === 'Production System' ? 'bg-accent-amber/10 border-accent-amber/30 text-accent-amber' : 'bg-bg-surface border-bg-border text-text-muted'}`}>
                {project.category}
              </span>
              <a href={project.repoUrl} target="_blank" rel="noreferrer" class="text-xs font-mono text-text-muted hover:text-accent-amber transition-colors flex items-center space-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber rounded px-1">
                <span>Repository</span>
                <span>&rarr;</span>
              </a>
            </div>

            <h4 class="text-xl font-bold text-text-main mb-2">{project.name}</h4>
            <p class="text-text-muted text-sm leading-relaxed mb-6">{project.description}</p>

            <div class="space-y-3 mb-6">
              <h5 class="text-xs font-mono text-text-dim uppercase tracking-wider">Keputusan & Arsitektur Teknis</h5>
              <ul class="space-y-1.5 text-xs text-text-muted list-disc list-inside">
                {project.architectureNotes.map((note) => (
                  <li>{note}</li>
                ))}
              </ul>
            </div>
          </div>

          <div class="pt-4 border-t border-bg-border/60 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span class="text-xs font-mono px-2 py-0.5 rounded bg-bg-surface text-text-dim border border-bg-border/40">
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 5: Write `src/components/Capabilities.astro`**

```astro
---
import { siteData } from '../data/site';
---
<section id="capabilities" class="py-16 border-b border-bg-border/40">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="mb-10">
      <h2 class="text-xs font-mono uppercase tracking-widest text-accent-amber mb-3">03. Domain & Keahlian</h2>
      <h3 class="text-2xl sm:text-3xl font-bold text-text-main">Kemampuan Rekayasa & Edukasi</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {siteData.capabilities.map((cap) => (
        <div class="bg-bg-card border border-bg-border rounded-xl p-6">
          <h4 class="text-lg font-bold text-text-main mb-3">{cap.title}</h4>
          <p class="text-sm text-text-muted leading-relaxed mb-6">{cap.description}</p>
          <div class="flex flex-wrap gap-2">
            {cap.skills.map((skill) => (
              <span class="text-xs font-mono px-2 py-1 rounded bg-bg-surface text-text-main border border-bg-border">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 6: Write `src/components/Principles.astro`**

```astro
---
import { siteData } from '../data/site';
---
<section id="principles" class="py-16 border-b border-bg-border/40">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="mb-10">
      <h2 class="text-xs font-mono uppercase tracking-widest text-accent-amber mb-3">04. Etos Kerja</h2>
      <h3 class="text-2xl sm:text-3xl font-bold text-text-main">Prinsip Rekayasa Perangkat Lunak</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {siteData.principles.map((principle) => (
        <div class="bg-bg-card border border-bg-border rounded-xl p-6">
          <h4 class="text-base font-bold text-text-main mb-1">{principle.title}</h4>
          <p class="text-xs font-mono text-accent-amber mb-3">{principle.summary}</p>
          <p class="text-sm text-text-muted leading-relaxed">{principle.detail}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 7: Write `src/components/Contact.astro`**

```astro
---
import { siteData } from '../data/site';
---
<section id="contact" class="py-16 border-b border-bg-border/40">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center max-w-2xl">
    <h2 class="text-xs font-mono uppercase tracking-widest text-accent-amber mb-3">05. Kontak Resmi</h2>
    <h3 class="text-3xl font-bold text-text-main mb-4">Terhubung Lewat Profil Publik</h3>
    <p class="text-text-muted mb-8 leading-relaxed">
      Untuk keperluan kolaborasi teknis, diskusi proyek, atau edukasi AI engineering, Anda dapat terhubung langsung melalui profil verified berikut:
    </p>

    <div class="flex flex-wrap justify-center items-center gap-4">
      <a href={siteData.socials.github.url} target="_blank" rel="noreferrer" class="px-6 py-3 rounded border border-bg-border bg-bg-card text-text-main font-mono text-sm hover:border-accent-amber hover:text-accent-amber transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber">
        GitHub ({siteData.socials.github.username})
      </a>
      <a href={siteData.socials.linkedin.url} target="_blank" rel="noreferrer" class="px-6 py-3 rounded border border-bg-border bg-bg-card text-text-main font-mono text-sm hover:border-accent-amber hover:text-accent-amber transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber">
        LinkedIn ({siteData.socials.linkedin.username})
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 8: Write `src/components/Footer.astro`**

```astro
---
import { siteData } from '../data/site';
---
<footer class="py-8 bg-bg-dark text-center text-xs font-mono text-text-dim border-t border-bg-border/40">
  <div class="max-w-6xl mx-auto px-4">
    <p>&copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
    <p class="mt-1 text-[11px]">Built with Astro & Static Deployment on GitHub Pages</p>
  </div>
</footer>
```

---

### Task 5: Layout, SEO Schema, Main Page & Custom 404

**Files:**
- Create: `src/layouts/Layout.astro`
- Create: `src/pages/index.astro`
- Create: `src/pages/404.astro`

- [ ] **Step 1: Write `src/layouts/Layout.astro`**

```astro
---
import { siteData } from '../data/site';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

interface Props {
  title?: string;
  description?: string;
}

const { title = `${siteData.name} — ${siteData.title}`, description = siteData.description } = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, siteData.siteUrl);
const ogImageUrl = `${siteData.siteUrl}${siteData.photo.webp}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": siteData.name,
  "jobTitle": "Full-Stack Developer & AI Engineering Educator",
  "url": `${siteData.siteUrl}${siteData.basePath}/`,
  "sameAs": [
    siteData.socials.github.url,
    siteData.socials.linkedin.url
  ],
  "knowsAbout": ["Full-Stack Engineering", "Educational Systems Architecture", "AI Engineering", "Web Security"]
};
---

<!usr/bin/env html>
<html lang="id" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href={`${siteData.basePath}/favicon.svg`} />
    <meta name="generator" content={Astro.generator} />

    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalURL} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalURL} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImageUrl} />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={canonicalURL} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={ogImageUrl} />

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json" set:html={JSON.stringify(jsonLd)} />

    <style is:global>
      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto !important;
        }
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    </style>
  </head>
  <body class="bg-bg-dark text-text-main font-sans antialiased selection:bg-accent-amber selection:text-bg-dark min-h-screen flex flex-col overflow-x-hidden">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

- [ ] **Step 2: Write `src/pages/index.astro`**

```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
import About from '../components/About.astro';
import Projects from '../components/Projects.astro';
import Capabilities from '../components/Capabilities.astro';
import Principles from '../components/Principles.astro';
import Contact from '../components/Contact.astro';
---

<Layout>
  <Hero />
  <About />
  <Projects />
  <Capabilities />
  <Principles />
  <Contact />
</Layout>
```

- [ ] **Step 3: Write `src/pages/404.astro`**

```astro
---
import Layout from '../layouts/Layout.astro';
import { siteData } from '../data/site';
---

<Layout title="404 — Halaman Tidak Ditemukan | Fahmi Harun">
  <section class="py-24 text-center">
    <div class="max-w-md mx-auto px-4">
      <span class="text-xs font-mono text-accent-amber uppercase tracking-widest">Error 404</span>
      <h1 class="text-4xl font-bold text-text-main mt-2 mb-4">Halaman Tidak Ditemukan</h1>
      <p class="text-text-muted text-sm mb-8">
        Halaman yang Anda cari tidak ada atau telah dipindahkan.
      </p>
      <a href={`${siteData.basePath}/`} class="inline-block px-6 py-3 rounded bg-accent-amber text-bg-dark font-medium text-sm hover:bg-accent-copper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber">
        Kembali ke Beranda
      </a>
    </div>
  </section>
</Layout>
```

- [ ] **Step 4: Create favicon `public/favicon.svg`**

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="20" fill="#090A0F"/>
  <text x="50" y="65" font-family="monospace" font-size="50" font-weight="bold" fill="#E3B341" text-anchor="middle">F</text>
</svg>
```

---

### Task 6: GitHub Actions Workflow (`.github/workflows/deploy.yml`)

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Write `.github/workflows/deploy.yml`**

```yaml
name: Deploy Astro Portfolio to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    name: Build Astro Portfolio
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-size: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Optimize Images
        run: npm run optimize-images

      - name: Type Check Astro
        run: npm run check

      - name: Build Static Dist
        run: npm run build

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy to GitHub Pages
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

### Task 7: Build Verification & Validation

**Files:**
- None created, verification phase

- [ ] **Step 1: Run `npm install`**
- [ ] **Step 2: Run `npm run check`**
- [ ] **Step 3: Run `npm run build`**
- [ ] **Step 4: Verify `dist/` directory output and asset links**
- [ ] **Step 5: Commit all files including `package-lock.json`**
