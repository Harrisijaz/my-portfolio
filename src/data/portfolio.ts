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
      'REST APIs',
      'Spring Security (JWT)',
      'OAuth',
      'RBAC',
      'AWS S3',
    ],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Elasticsearch', 'Redis'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Docker'],
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
]
