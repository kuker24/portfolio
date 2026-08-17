export interface Project {
  id: string;
  name: string;
  category: 'Production System' | 'Serious Hobby Project';
  displayCategory: 'Production' | 'Independent Project' | 'Previous generation';
  repoUrl: string;
  description: string;
  architectureNotes: string[];
  techStack: string[];
  highlights: string[];
  lineage?: {
    label: string;
    url: string;
  };
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

export interface ExperienceItem {
  title: string;
  place: string;
  summary: string;
}

export function sectionHref(id: string, basePath = siteData.basePath): string {
  const root = basePath.endsWith("/") ? basePath : `${basePath}/`;
  return `${root}#${id}`;
}

export const siteData = {
  name: "Fahmi Harun",
  title: "Software & AI Systems Builder · AI Educator · Computer Engineering Student",
  description: "Personal portfolio of Fahmi Harun — production school software, privacy-first web systems, and practical developer tools.",
  siteUrl: "https://kuker24.github.io",
  basePath: "/portfolio",
  location: "Pekanbaru, Riau, Indonesia",
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
    x: {
      label: "X",
      url: "https://x.com/FahmiPossible",
      username: "FahmiPossible",
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
  nebula: {
    jpeg: "/portfolio/images/nebula.jpg",
    webp: "/portfolio/images/nebula.webp",
    alt: "",
    width: 3840,
    height: 2160,
  },
  about: {
    intro: "I build real software, teach what I learn, and keep the systems maintainable.",
    narrative: [
      "I am a Computer Engineering student in the D4 Teknologi Rekayasa Komputer program at Politeknik Caltex Riau, based in Pekanbaru.",
      "I design and operate education software used in a school setting, and I teach introductory artificial intelligence to class-X students at MAN 1 Rokan Hulu. I have also trained teachers on the SIAB2 digital attendance workflow.",
      "The work spans frontend, backend, databases, deployment, security, and AI-assisted engineering. Current exploration stays in AI systems, application security, reliable deployment, and computer networking.",
    ],
  },
  experience: [
    {
      title: "Computer Engineering student",
      place: "Politeknik Caltex Riau · D4 Teknologi Rekayasa Komputer",
      summary: "Studying computer engineering while building and operating the systems described on this site.",
    },
    {
      title: "AI educator",
      place: "MAN 1 Rokan Hulu · class X",
      summary: "Teaching introductory, responsible AI use to grade-10 students.",
    },
    {
      title: "School systems builder",
      place: "SIAB2 and SIAB1",
      summary: "Developing and operating academic attendance and examination software used in a school setting, and training teachers on the SIAB2 digital attendance workflow.",
    },
  ] as ExperienceItem[],
  projects: [
    {
      id: "siab2",
      name: "SIAB2",
      category: "Production System",
      displayCategory: "Production",
      repoUrl: "https://github.com/kuker24/abensi",
      description: "Academic and attendance system with a signed Android QR flow, audit logs, and a reconciliation worker.",
      architectureNotes: [
        "Worker reconciliation for status validation and attendance data sync.",
        "Android QR reader integration with HMAC-signed request validation, nonce, and signature checks.",
        "Structured production audit procedures and data reconciliation runbooks.",
      ],
      techStack: [
        "NestJS",
        "React",
        "Vite",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Redis",
        "Nginx",
        "Docker Compose",
      ],
      highlights: [
        "HMAC-signed request and nonce validation",
        "Worker reconciliation and audit trail",
        "Production deployment runbook",
      ],
    },
    {
      id: "siab1",
      name: "SIAB1",
      category: "Production System",
      displayCategory: "Production",
      repoUrl: "https://github.com/kuker24/SIAB1_V2",
      description: "School examination platform for MAN 1 Rokan Hulu. Staff author, monitor, and grade in the browser. Students sit exams in the official SIAB1 phone app.",
      architectureNotes: [
        "Go monolith with PostgreSQL and sqlc, serving staff HTML/CSS/JS from one origin.",
        "Live session controls: violation signals, pause and resume, and force-submit.",
        "After the exam: automatic and manual grading, result release, and CSV export.",
      ],
      techStack: [
        "Go",
        "PostgreSQL",
        "sqlc",
        "HTML",
        "CSS",
        "JavaScript",
        "Docker",
      ],
      highlights: [
        "Staff control plane in the browser",
        "Student runtime is the official phone app",
        "Integrity journal, not a public web exam page",
      ],
      lineage: {
        label: "Previous generation: Ujian Online",
        url: "https://github.com/kuker24/Ujianonline",
      },
    },
    {
      id: "ujianonline",
      name: "Ujian Online",
      category: "Production System",
      displayCategory: "Previous generation",
      repoUrl: "https://github.com/kuker24/Ujianonline",
      description: "Earlier examination platform with exam management, monitoring, and asynchronous grading. Superseded in active development by SIAB1.",
      architectureNotes: [
        "Question bank processing and automatic answer evaluation.",
        "Asynchronous background work with Celery and Redis.",
        "Cross-platform client work in Flutter alongside the FastAPI service.",
      ],
      techStack: [
        "FastAPI",
        "Flutter",
        "PostgreSQL",
        "SQLAlchemy",
        "Redis",
        "Celery",
        "Docker",
      ],
      highlights: [
        "Exam management and async grading",
        "FastAPI service with Flutter clients",
        "Predecessor of the current SIAB1 rewrite",
      ],
    },
    {
      id: "lensadiri",
      name: "LensaDiri",
      category: "Serious Hobby Project",
      displayCategory: "Independent Project",
      repoUrl: "https://github.com/kuker24/LensaDiri",
      description: "Privacy-first self-exploration web application with row-level security, consent, and audit boundaries.",
      architectureNotes: [
        "PostgreSQL Row-Level Security and server-only data fetching boundaries.",
        "CSRF protection and opaque HMAC session hashes.",
        "Granular consent controls, with Vitest and Playwright coverage.",
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Supabase tooling",
        "Zod",
        "Argon2id",
        "Vitest",
        "Playwright",
      ],
      highlights: [
        "Row-level security and server-only boundary",
        "Argon2id authentication and HMAC sessions",
        "Vitest and Playwright test suite",
      ],
    },
    {
      id: "streamhive",
      name: "StreamHive",
      category: "Serious Hobby Project",
      displayCategory: "Independent Project",
      repoUrl: "https://github.com/kuker24/StreamLocal",
      description: "Local-first LAN media server with seekable streaming, subtitle support, and QR device pairing.",
      architectureNotes: [
        "Seekable video and audio playback using HTTP Range requests and FFmpeg.",
        "Subtitle support, QR pairing, and a desktop system-tray launcher.",
        "Multi-user access and cross-platform installation automation.",
      ],
      techStack: [
        "Python",
        "Flask",
        "FFmpeg",
        "HTTP Range",
        "pystray",
        "Pillow",
        "QRCode",
      ],
      highlights: [
        "Seekable HTTP Range playback",
        "Desktop tray launcher and QR pairing",
        "Cross-platform setup automation",
      ],
    },
    {
      id: "finvoice",
      name: "F-INVOICE",
      category: "Serious Hobby Project",
      displayCategory: "Independent Project",
      repoUrl: "https://github.com/kuker24/F-INVOICE",
      description: "Invite-only invoice manager with integer IDR money, staff and customer portals, and HMAC-signed PDF links.",
      architectureNotes: [
        "Invite-only authentication. Public signups stay off.",
        "Invoice draft, send, cancel, sequences, and CSV export.",
        "HMAC-signed PDF download URLs and row-level security on Postgres.",
      ],
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "PostgreSQL",
        "Supabase Auth",
        "RLS",
        "Playwright",
      ],
      highlights: [
        "Invite-only access",
        "HMAC-signed PDF links",
        "Staff dashboard and customer portal",
      ],
    },
  ] as Project[],
  capabilities: [
    {
      title: "Full-stack web engineering",
      description: "Web applications from structured backend services to staff-facing HTML and React clients.",
      skills: ["Go", "NestJS", "FastAPI", "Next.js", "Astro", "React", "TypeScript", "Python"],
    },
    {
      title: "Educational systems and AI instruction",
      description: "Academic platforms and classroom instruction in software and introductory artificial intelligence.",
      skills: ["EdTech architecture", "Exam control plane", "Attendance integrity", "AI instruction"],
    },
    {
      title: "Architecture and security controls",
      description: "Data-access boundaries, signed device flows, deployment, and automated tests.",
      skills: ["PostgreSQL", "sqlc", "Prisma", "Docker", "Nginx", "Argon2id", "HMAC", "Vitest", "Playwright"],
    },
  ] as CapabilityGroup[],
  principles: [
    {
      title: "Architecture over unverified claims",
      summary: "Focus on real technical structure.",
      detail: "Every feature is described from concrete architecture, security controls, and code that can be opened.",
    },
    {
      title: "Accessibility and privacy baseline",
      summary: "User privacy and usability.",
      detail: "Software is built with readable interfaces and explicit data-access boundaries.",
    },
    {
      title: "Honest engineering",
      summary: "Evidence first.",
      detail: "Work is presented from repositories, not from invented metrics or testimonials.",
    },
  ] as EngineeringPrinciple[],
};
