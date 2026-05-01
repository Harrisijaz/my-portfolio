import { SectionHeading } from '../components/SectionHeading'

export function Experience() {
  return (
    <section className="border-t border-white/10 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Experience" title="Freelance / Personal Projects" />
        <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/[0.06] p-7 text-center">
          <p className="text-lg leading-8 text-slate-100">
            Developed scalable backend systems and full-stack applications using modern technologies like
            Spring Boot and React.
          </p>
        </div>
      </div>
    </section>
  )
}
