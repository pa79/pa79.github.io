import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'CV', href: '#cv' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            <a href="#hero" className="navbar-logo" onClick={() => handleNavClick('#hero')}>
              Prabin <em>Adhikari</em>
            </a>
            <ul className="navbar-links">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => { e.preventDefault(); handleNavClick(l.href) }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className={`navbar-burger${open ? ' open' : ''}`}
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <nav className={`navbar-mobile${open ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); handleNavClick(l.href) }}>
            {l.label}
          </a>
        ))}
      </nav>
    </>
  )
}
