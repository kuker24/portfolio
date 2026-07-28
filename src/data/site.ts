export type Project = {
  name: string;
  formerName?: string;
  category: 'Production System' | 'Serious Hobby Project';
  summary: string;
  repository: string;
  stack: string[];
};

export const profile = {
  name: 'Fahmi Harun',
  headline: 'Full-Stack Developer · AI Engineering Educator · Security-Focused Builder',
  summary:
    'I build production education platforms, privacy-first web systems, and practical developer tools with a focus on security, maintainability, and real-world usability.',
  github: 'https://github.com/kuker24',
  email: 'mailto:fahmiharun234@gmail.com',
};

export const projects: Project[] = [
  {
    name: 'SIAB2',
    category: 'Production System',
    summary:
      'Academic information and attendance system with a full-stack architecture, secure Android QR-reader flow, auditability, and production deployment tooling.',
    repository: 'https://github.com/kuker24/abensi',
    stack: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    name: 'SIAB1',
    formerName: 'Ujian Online',
    category: 'Production System',
    summary:
      'Secure digital examination platform with mobile clients, asynchronous processing, monitoring, analytics, and exam-integrity controls.',
    repository: 'https://github.com/kuker24/Ujianonline',
    stack: ['FastAPI', 'Flutter', 'PostgreSQL', 'Redis', 'Celery', 'WebSocket'],
  },
  {
    name: 'LensaDiri',
    category: 'Serious Hobby Project',
    summary:
      'Privacy-first self-exploration platform built around secure authentication boundaries, responsible product claims, testing, and architecture documentation.',
    repository: 'https://github.com/kuker24/LensaDiri',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'RLS', 'Vitest', 'Playwright'],
  },
  {
    name: 'StreamHive',
    category: 'Serious Hobby Project',
    summary:
      'Local-first media streaming server for home and LAN use with seekable playback, subtitle support, desktop integration, and cross-platform automation.',
    repository: 'https://github.com/kuker24/StreamLocal',
    stack: ['Python', 'Flask', 'FFmpeg', 'HTTP Range', 'Desktop UI'],
  },
];

export const capabilities = [
  'Frontend systems and responsive interfaces',
  'Backend APIs and domain-oriented architecture',
  'PostgreSQL data modelling and secure boundaries',
  'Authentication, authorization, and application security',
  'Docker-based deployment and operational tooling',
  'AI-assisted engineering and developer workflows',
];

export const principles = [
  'Security by default',
  'Maintainable architecture',
  'Evidence before claims',
  'Accessible user experience',
  'Reproducible deployment',
  'Clear technical documentation',
];
