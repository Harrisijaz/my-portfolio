export function Hero() {
  return (
    <section id="home" className="scroll-mt-24 px-5 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Full-Stack Web, Mobile & AI Developer
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Haris Ijaz
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-200">
            I build scalable web platforms, mobile apps, AI workflows, and CMS/ecommerce solutions.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Full-stack developer experienced with Next.js, Laravel, Node.js, Angular, Flutter,
            Spring Boot, WordPress, Shopify, secure APIs, dashboards, and production business systems.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30">
          <div className="grid gap-4">
            {[
              'Java + Spring Boot APIs',
              'Laravel + Node.js APIs',
              'Next.js + React UI',
              'Flutter mobile apps',
              'AI, CMS & SaaS workflows',
            ].map(
              (item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-lg font-semibold text-white">{item}</p>
                  <div className="mt-4 h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-4/5 rounded-full bg-cyan-300" />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
