import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-white/10 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technology stack for modern full-stack products"
          description="A practical stack for building Next.js frontends, Laravel backends, mobile apps, AI integrations, SaaS workflows, and operational dashboards."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-white/[0.06] px-3 py-2 text-sm font-medium text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
