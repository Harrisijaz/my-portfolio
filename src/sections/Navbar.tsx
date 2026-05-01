import { navItems } from '../data/portfolio'

interface NavbarProps {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-base font-semibold text-white">
          Haris Ijaz
        </a>
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')

            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-white/10 text-cyan-200' : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>
        <a
          href="#contact"
          className="rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          Hire Me
        </a>
      </nav>
    </header>
  )
}
