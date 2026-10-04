import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)

      let current = 'home'
      for (const link of navLinks) {
        const el = document.getElementById(link.id)
        if (el && window.scrollY >= el.offsetTop - 160) current = link.id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a className="navbar__logo" href="#home" onClick={() => setOpen(false)}>
          {profile.initials}
          <span>{profile.name}</span>
        </a>

        <nav className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--small navbar__cta" href="#contact">
          Hire me
        </a>

        <button
          type="button"
          className={`navbar__toggle${open ? ' is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
