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
