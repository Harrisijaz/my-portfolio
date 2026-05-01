import { SectionHeading } from '../components/SectionHeading'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/10 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Backend expertise with full-stack delivery"
          description="I focus on building reliable server-side systems, secure APIs, and React interfaces that are clear, fast, and ready for real users."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Backend Systems', 'Strong experience building scalable Spring Boot services, REST APIs, and modular backend features.'],
            ['Security First', 'Practical implementation of JWT, OAuth, RBAC, and clean access control for production applications.'],
            ['Performance Mindset', 'Clean architecture, optimized database handling, and maintainable code for long-term growth.'],
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
