import { SectionHeading } from '../components/SectionHeading'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/10 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Full-stack delivery across web, mobile, AI, and CMS"
          description="I build production-ready platforms with secure backends, fast frontends, mobile apps, AI integrations, and CMS/ecommerce workflows."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            [
              'Backend Systems',
              'Strong experience building scalable APIs and admin systems with Java, Spring Boot, Laravel, Node.js, RBAC, and SQL-backed workflows.',
            ],
            [
              'Frontend & Mobile',
              'Clean delivery with Next.js, React, Angular, TypeScript, Flutter, Tailwind CSS, Bootstrap, and responsive user interfaces.',
            ],
            [
              'Business Platforms',
              'Practical experience with SaaS products, CRM/ERP dashboards, EdTech marketplaces, AI features, WordPress, and Shopify.',
            ],
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
