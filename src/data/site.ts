export interface Project {
  id: string;
  name: string;
  category: 'Production System' | 'Serious Hobby Project';
  displayCategory: 'Production' | 'Independent Project';
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
  title: "Full-Stack & AI Systems Builder · AI Educator · Computer Engineering Student",
  description: "Personal portfolio of Fahmi Harun — software and AI-related systems, AI education, and Computer Engineering at Politeknik Caltex Riau.",
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
  about: {
    intro: "I build software and AI-related systems while studying Computer Engineering at Politeknik Caltex Riau, and I teach what I learn.",
    narrative: [
      "Most of my recent work is education and operations software: SIAB2 for school attendance, and an exam platform (Ujianonline / SIAB1).",
      "I teach introductory AI to grade-10 students at MAN 1 Rokan Hulu and train staff to use the systems I ship. I am not claiming an AI-engineer title — I build, document, and teach."
    ],
  },
  projects: [
    {
      id: "siab2",
      name: "SIAB2",
      category: "Production System",
      displayCategory: "Production",
      repoUrl: "https://github.com/kuker24/abensi",
      description: "Integrated academic and attendance management system with Android QR reader integration and secure transaction verification.",
      architectureNotes: [
        "Worker reconciliation for status validation and attendance data sync.",
        "Android QR reader integration with HMAC-signed request validation, nonce, and signature checks.",
        "Structured production audit procedures and data reconciliation runbooks."
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
        "Docker Compose"
      ],
      highlights: [
        "HMAC-signed request & nonce validation",
        "Worker reconciliation & audit trail",
        "Production deployment runbook"
      ]
    },
    {
      id: "siab1",
      name: "Ujianonline (SIAB1)",
      category: "Production System",
      displayCategory: "Production",
      repoUrl: "https://github.com/kuker24/Ujianonline",
      description: "Online examination platform featuring question bank management, automated grading, exam proctoring integration, and real-time alerts.",
      architectureNotes: [
        "Question bank processing, automatic answer evaluation, and Safe Exam Browser integration.",
        "Asynchronous background task processing powered by Celery and Redis.",
        "Real-time notifications via WebSockets with Prometheus and Grafana monitoring."
      ],
      techStack: [
        "FastAPI",
        "Flutter",
        "PostgreSQL",
        "SQLAlchemy",
        "Redis",
        "Celery",
        "WebSocket",
        "Prometheus",
        "Grafana",
        "Docker"
      ],
      highlights: [
        "Safe Exam Browser integration",
        "Asynchronous task processing (Celery)",
        "Real-time WebSocket & Prometheus monitoring"
      ]
    },
    {
      id: "lensadiri",
      name: "LensaDiri",
      category: "Serious Hobby Project",
      displayCategory: "Independent Project",
      repoUrl: "https://github.com/kuker24/LensaDiri",
      description: "Privacy-first personal self-reflection web application built with strict data protection and server-only database boundaries.",
      architectureNotes: [
        "Data-level security via PostgreSQL Row-Level Security (RLS) and server-only data fetching boundaries.",
        "Application defense including CSRF protection and opaque HMAC session hashes.",
        "Granular user consent controls and automated testing suite with Vitest and Playwright."
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
        "Playwright"
      ],
      highlights: [
        "PostgreSQL Row-Level Security & Server-only boundary",
        "Argon2id authentication & HMAC opaque sessions",
        "Automated testing with Vitest & Playwright"
      ]
    },
    {
      id: "streamhive",
      name: "StreamHive",
      category: "Serious Hobby Project",
      displayCategory: "Independent Project",
      repoUrl: "https://github.com/kuker24/StreamLocal",
      description: "Local network media streaming application powered by a desktop launcher, QR device pairing, and streaming authentication.",
      architectureNotes: [
        "Seekable interactive video and audio playback using HTTP Range requests and FFmpeg.",
        "Subtitle support, QR code device pairing, and desktop system tray integration.",
        "Multi-user authentication and cross-platform installation automation."
      ],
      techStack: [
        "Python",
        "Flask",
        "FFmpeg",
        "HTTP Range",
        "pystray",
        "Pillow",
        "QRCode"
      ],
      highlights: [
        "Seekable HTTP Range playback & FFmpeg engine",
        "Desktop tray launcher & QR code pairing",
        "Multi-user authentication & cross-platform automation"
      ]
    }
  ] as Project[],
  capabilities: [
    {
      title: "Full-Stack Web Engineering",
      description: "Developing web applications from responsive frontend architecture to structured, well-tested backend services.",
      skills: ["NestJS", "FastAPI", "Next.js", "Astro", "React", "TypeScript", "Python"]
    },
    {
      title: "Educational Systems & AI Instruction",
      description: "Designing academic platforms and educational curricula focused on software engineering and artificial intelligence.",
      skills: ["EdTech Architecture", "Safe Exam Integration", "Interactive Learning Tools", "AI Workflows"]
    },
    {
      title: "System Architecture & Security Controls",
      description: "Implementing data access security controls, structured authorization, telemetry monitoring, and automated test suites.",
      skills: ["PostgreSQL RLS", "Docker & Nginx", "Prometheus & Grafana", "Argon2id & HMAC", "Vitest & Playwright"]
    }
  ] as CapabilityGroup[],
  principles: [
    {
      title: "Architecture over Unverified Claims",
      summary: "Focus on real technical structure.",
      detail: "Every component and feature is documented based on concrete architecture, security controls, and verifiable code."
    },
    {
      title: "Accessibility & Privacy Baseline",
      summary: "User privacy and usability.",
      detail: "Software is built with strong accessibility standards and clear, transparent user data privacy controls."
    },
    {
      title: "Honest & Transparent Engineering",
      summary: "Engineering-first standards.",
      detail: "Presenting work based on factual technical evidence, clean design patterns, and testable code."
    }
  ] as EngineeringPrinciple[]
};
