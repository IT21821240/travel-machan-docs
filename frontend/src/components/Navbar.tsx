import React, { useEffect, useMemo, useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#domain', label: 'Domain' },
  { href: '#research', label: 'Research' },
  { href: '#feature', label: 'Feature' },
  { href: '#tool', label: 'Tool' },
  { href: '#milestones', label: 'Milestones' },
  { href: '#docs', label: 'Docs' },
  { href: '#team', label: 'Team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('#home')

  // navbar style on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close mobile menu when hash changes
  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  // ESC closes menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // scrollspy: highlight current section
  const sectionIds = useMemo(() => links.map(l => l.href.replace('#', '')), [])
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive('#' + visible.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sectionIds])

  const linkBase =
    'transition px-1 py-1 rounded hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500'

  return (
    <header
      className={`sticky top-0 z-50 transition
        ${scrolled || open ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-white/0'}`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
        role="navigation"
        aria-label="Primary"
      >
        <a href="#home" className="text-lg font-semibold">
          Travel<span className="text-orange-600">Machan</span>
        </a>

        {/* desktop */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map(l => {
            const isActive = active === l.href
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`${linkBase} ${
                    isActive ? 'text-orange-700' : 'text-slate-700'
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span className="block h-0.5 w-full bg-orange-600" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* mobile toggler */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden rounded p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          onClick={() => setOpen(v => !v)}
        >
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h18M4 13h18M4 19h18" />
          </svg>
        </button>
      </nav>

      {/* mobile sheet */}
      {open && (
        <div id="mobile-menu" className="border-t bg-white/95 backdrop-blur md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3">
            {links.map(l => (
              <li key={l.href} className="py-1.5">
                <a
                  href={l.href}
                  className={`block rounded-md px-2 py-2 ${
                    active === l.href ? 'bg-orange-50 text-orange-700' : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
