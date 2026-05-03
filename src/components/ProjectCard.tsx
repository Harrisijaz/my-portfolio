import type { Project } from '../types/portfolio'
import { Badge } from './Badge'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group flex h-full flex-col rounded-lg border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900 ${
        featured ? 'lg:col-span-2 lg:p-8' : ''
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            {project.category}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
          {(project.industry || project.role) && (
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-300">
              {project.industry && (
                <span className="rounded-md bg-white/[0.06] px-3 py-1">{project.industry}</span>
              )}
              {project.role && (
                <span className="rounded-md bg-white/[0.06] px-3 py-1">{project.role}</span>
              )}
            </div>
          )}
        </div>
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
          Live
        </span>
      </div>

      <p className="mt-5 flex-1 text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <ul className="mt-6 space-y-3 text-sm text-slate-300">
        {project.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={project.githubUrl ?? '#contact'}
          className="rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
        >
          GitHub Repository
        </a>
        <a
          href={project.liveUrl ?? '#contact'}
          className="rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          Live Demo
        </a>
      </div>
    </article>
  )
}
