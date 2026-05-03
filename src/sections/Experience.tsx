import { SectionHeading } from '../components/SectionHeading'

export function Experience() {
  return (
    <section className="border-t border-white/10 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Experience" title="Freelance / Personal Projects" />
        <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/[0.06] p-7 text-center">
          <p className="text-lg leading-8 text-slate-100">
            Developed full-stack products across EdTech, construction, healthcare, SaaS, CRM/ERP, CMS,
            and AI workflows using Next.js, Laravel, Node.js, Angular, Flutter, React, Spring Boot,
            WordPress, and Shopify.
          </p>
        </div>
      </div>
    </section>
  )
}
