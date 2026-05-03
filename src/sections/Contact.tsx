import { contactInfo } from '../data/portfolio'
import { SectionHeading } from '../components/SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/10 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Open for freelance and remote opportunities"
          description="Send a message for web apps, Laravel or Node.js APIs, Next.js/Angular frontends, Flutter apps, AI integrations, WordPress, Shopify, or CRM/SaaS systems."
        />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-2xl font-semibold text-white">Let us build something reliable.</h3>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>
                Phone:{' '}
                <a className="font-semibold text-cyan-200 hover:text-cyan-100" href={`tel:${contactInfo.phone}`}>
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  className="font-semibold text-cyan-200 hover:text-cyan-100"
                  href={`mailto:${contactInfo.email}`}
                >
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </div>

          <form
            action={`https://formsubmit.co/${contactInfo.email}`}
            method="POST"
            className="rounded-lg border border-white/10 bg-slate-900/80 p-6"
          >
            <input type="hidden" name="_subject" value="New portfolio contact message" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  className="rounded-md border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-md border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-medium text-slate-200">
              Message
              <textarea
                name="message"
                rows={5}
                required
                className="resize-none rounded-md border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                placeholder="Tell me about your project"
              />
            </label>
            <button
              type="submit"
              className="mt-6 rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
