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
  description: "Bespoke dark editorial portfolio of Fahmi Harun, specializing in full-stack web applications, educational systems architecture, and teaching coding and AI engineering.",
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
    intro: "Saya seorang Full-Stack Developer dan pendidik di bidang Coding serta Kecerdasan Artifisial. Berfokus pada pembangunan sistem perangkat lunak yang terstruktur, aman, dan mudah diakses.",
    narrative: [
      "Perjalanan engineering saya dibentuk oleh pengalaman merancang arsitektur sistem manajemen pendidikan, platform ujian online, dan utilitas aplikasi terdistribusi.",
      "Sebagai AI Engineering Educator, saya membimbing pembelajar dan pengembang untuk memanfaatkan teknologi AI secara bertanggung jawab, terstruktur, dan berbasis pada prinsip-prinsip rekayasa perangkat lunak yang kokoh."
    ],
  },
  projects: [
    {
      id: "siab2",
      name: "SIAB2",
      category: "Production System",
      repoUrl: "https://github.com/kuker24/abensi",
      description: "Sistem informasi akademik dan kehadiran terintegrasi dengan integrasi pembaca QR Android serta verifikasi transaksi aman.",
      architectureNotes: [
        "Worker reconciliation untuk validasi status dan sinkronisasi data presensi.",
        "Integrasi Android QR Reader resmi dengan validasi HMAC-signed request, nonce, dan signature.",
        "Prosedur audit, rekonsiliasi data, dan runbook pemeliharaan produksi terstruktur."
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
      name: "SIAB1",
      category: "Production System",
      repoUrl: "https://github.com/kuker24/Ujianonline",
      description: "Platform ujian online dengan manajemen bank soal, koreksi otomatis, integrasi pengawasan ujian, dan notifikasi real-time.",
      architectureNotes: [
        "Modul pengolahan bank soal, evaluasi jawaban otomatis, serta integrasi Safe Exam Browser.",
        "Pemrosesan tugas latar belakang secara asinkron menggunakan Celery dan Redis.",
        "Pengiriman notifikasi real-time via WebSocket serta pemantauan sistem dengan Prometheus dan Grafana."
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
      repoUrl: "https://github.com/kuker24/LensaDiri",
      description: "Aplikasi refleksi diri personal berbasis privasi dengan proteksi data ketat dan batas analisis ilmiah yang bertanggung jawab.",
      architectureNotes: [
        "Keamanan tingkat data berbasis PostgreSQL Row-Level Security (RLS) dan batas database server-only.",
        "Proteksi keamanan aplikasi mencakup CSRF protection dan session HMAC-hashed opaque.",
        "Layanan parsial consent & audit log serta pembatasan klaim analisis ilmiah secara akuntabel."
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
        "Autentikasi Argon2id & HMAC opaque sessions",
        "Pengujian otomatis Vitest & Playwright"
      ]
    },
    {
      id: "streamhive",
      name: "StreamHive",
      category: "Serious Hobby Project",
      repoUrl: "https://github.com/kuker24/StreamLocal",
      description: "Aplikasi streaming media jaringan lokal berbasis desktop launcher dengan koneksi QR device dan manajemen autentikasi.",
      architectureNotes: [
        "Pemutaran video dan audio interaktif (seekable) menggunakan HTTP Range request dan FFmpeg.",
        "Dukungan subtitle, pembuatan koneksi perangkat via QR code, dan tray launcher desktop.",
        "Autentikasi multi-pengguna serta otomasi skrip instalasi lintas platform."
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
      description: "Mengembangkan aplikasi web dari arsitektur frontend responsif hingga backend terstruktur dan teruji.",
      skills: ["NestJS", "FastAPI", "Next.js", "Astro", "React", "TypeScript", "Python"]
    },
    {
      title: "Educational Systems & AI Instruction",
      description: "Merancang platform akademik serta materi pembelajaran Coding dan Kecerdasan Artifisial berbasis rekayasa terstruktur.",
      skills: ["EdTech Architecture", "Safe Exam Integration", "Interactive Learning Tools", "AI Engineering Workflows"]
    },
    {
      title: "System Architecture & Security Controls",
      description: "Menerapkan kontrol keamanan data, otorisasi terstruktur, monitoring sistem, dan pengujian terotomatisasi.",
      skills: ["PostgreSQL RLS", "Docker & Nginx", "Prometheus & Grafana", "Argon2id & HMAC", "Vitest & Playwright"]
    }
  ] as CapabilityGroup[],
  principles: [
    {
      title: "Architecture over Unverified Claims",
      summary: "Fokus pada struktur teknis nyata.",
      detail: "Setiap komponen dan fitur didokumentasikan berdasarkan arsitektur, modul keamanan, dan bukti kode yang dapat diverifikasi."
    },
    {
      title: "Accessibility & Privacy Baseline",
      summary: "Keamanan dan kenyamanan pengguna.",
      detail: "Perangkat lunak dibangun dengan batas aksesibilitas yang baik serta kontrol privasi data pengguna yang transparan."
    },
    {
      title: "Honest & Transparent Engineering",
      summary: "Pengembangan berbasis standar rekayasa.",
      detail: "Menampilkan karya berdasarkan fakta teknis, pola desain yang bersih, dan standar pengujian tanpa metrik performa yang tidak terukur."
    }
  ] as EngineeringPrinciple[]
};
