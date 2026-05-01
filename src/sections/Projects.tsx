import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-white/10 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work for backend-heavy full-stack delivery"
          description="Each project highlights practical business workflows, secure API design, and implementation choices that matter to freelance clients."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
