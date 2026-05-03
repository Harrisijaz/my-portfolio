export interface NavItem {
  label: string
  href: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface Project {
  title: string
  category: string
  industry?: string
  role?: string
  description: string
  stack: string[]
  features: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface ContactInfo {
  phone: string
  email: string
}
