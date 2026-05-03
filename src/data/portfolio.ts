import type { ContactInfo, NavItem, Project, SkillGroup } from '../types/portfolio'

export const contactInfo: ContactInfo = {
  phone: '03214816800',
  email: 'harisijaz278@gmail.com',
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    skills: [
      'Java',
      'Spring Boot',
      'Laravel',
      'PHP',
      'REST APIs',
      'Spring Security (JWT)',
      'OAuth',
      'Secure API Design',
      'RBAC',
      'AWS S3',
      'SQL Relationships',
      'Recurring Subscriptions',
    ],
  },
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Bootstrap',
      'SEO Optimization',
    ],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Elasticsearch', 'Redis'],
  },
  {
    title: 'Mobile & AI',
    skills: ['Flutter', 'iOS & Android', 'GPT API Integration', 'AI Transcription', 'Medical Note Generation'],
  },
  {
    title: 'Platforms & Tools',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'SaaS Products',
      'CRM / ERP Systems',
      'EdTech Marketplaces',
      'Admin Panels',
      'Provider Portals',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'Workmate',
    category: 'Full Stack',
    description:
      'A complete full-stack application designed to manage workflows and tasks efficiently with secure backend services and a focused dashboard experience.',
    stack: ['React', 'TypeScript', 'Java', 'Spring Boot', 'REST APIs', 'JWT'],
    features: [
      'Authentication and authorization',
      'REST API architecture',
      'Dashboard UI for workflow visibility',
      'Data management system',
    ],
    liveUrl: 'https://develop.d38nz7vxsc6w6c.amplifyapp.com/login',
  },
  {
    title: 'CareSync',
    category: 'Full Stack',
    description:
      'A healthcare management system for handling providers, patients, groups, and enterprise operations with scalable backend architecture.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'RBAC', 'React', 'PostgreSQL'],
    features: [
      'Role-based access control',
      'Secure API layer',
      'Provider and group management',
      'Scalable backend architecture',
    ],
    liveUrl: 'https://hmis-dev.vercel.app/?from=%2Fdashboard%2Fadmins',
  },
  {
    title: 'Fitness Application',
    category: 'Backend Only',
    description:
      'A Java and Spring Boot backend service for managing fitness-related data, user operations, and optimized database workflows.',
    stack: ['Java', 'Spring Boot', 'REST APIs', 'Authentication', 'SQL'],
    features: [
      'REST API development',
      'Authentication workflows',
      'Optimized database handling',
      'Modular backend architecture',
    ],
  },
  {
    title: 'Hurak',
    category: 'EdTech Marketplace',
    industry: 'EdTech / E-Learning',
    role: 'Full-Stack Developer (Next.js and Laravel)',
    description:
      'A UK-based e-learning marketplace that connects learners with accredited training providers for compliance, safety, and professional courses including CITB, SIA security, and First Aid.',
    stack: ['Next.js', 'Laravel', 'SEO', 'Provider Portal', 'Admin Panel', 'Course Booking'],
    features: [
      'SEO-optimized customer website for browsing, searching, and booking accredited courses nationwide',
      'Provider panel for instructors and training companies to list courses, manage schedules, and handle enrollments',
      'Laravel admin panel for platform operations, user data, transactions, and Hurak Business administration',
      'Marketplace workflows including instant results, price matching, course availability, and booking management',
    ],
    githubUrl: 'https://github.com/hurak-com/hurak-fe-next',
    liveUrl: 'https://hurak.com',
  },
  {
    title: 'Ezeco CRM',
    category: 'Construction CRM / ERP',
    industry: 'Construction',
    role: 'Full-Stack Developer (Next.js and Laravel)',
    description:
      'A centralized ERP-hybrid CRM for managing the complete lifecycle of construction projects with compliance tracking, live operational oversight, and team accountability.',
    stack: ['Next.js', 'Laravel', 'RBAC', 'SQL', 'CRM', 'ERP'],
    features: [
      'Project, audit, C3 inspection, and TrustMark tracking with active alerts for urgent deadlines',
      'Granular role-based access control and CRUD workflows across major business entities',
      'Lead capture, customer complaint ticketing, daily productivity boards, and live employee activity feeds',
      'Internal HR and resource modules including Team Learning, CPD, Phone Book, and Custom Notes',
    ],
    githubUrl: 'https://github.com/rccjaved/crm-dashboard',
    liveUrl: 'https://crm.ezeco.uk/',
  },
  {
    title: 'ClinixSummary',
    category: 'AI Medical SaaS',
    industry: 'Medical',
    role: 'Full-Stack Developer',
    description:
      'An AI-powered medical dictation platform that helps healthcare professionals convert dictated patient interactions into structured, high-accuracy clinical notes.',
    stack: ['Flutter', 'Laravel', 'GPT API', 'Tailwind CSS', 'Bootstrap', 'Encrypted APIs'],
    features: [
      'AI-driven transcription and GPT-powered medical note generation for post-visit documentation',
      'Privacy-focused architecture with encrypted APIs, zero audio storage, and automated 24-hour data deletion',
      'Tiered SaaS subscription panel with recurring access plans and user account management',
      'Enterprise-ready capabilities including EMR/EHR integration, custom language support, and ambient clinic workflows',
    ],
    githubUrl: 'https://github.com/rccjaved/clinicsummary',
    liveUrl: 'https://clinixsummary.ai/',
  },
]
