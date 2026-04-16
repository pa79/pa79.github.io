import { useEffect, useRef } from 'react'

const socials = [
  {
    icon: '💼',
    name: 'LinkedIn',
    handle: '/in/prabinadhikari1',
    href: 'https://www.linkedin.com/in/prabinadhikari1/',
  },
  {
    icon: '🐙',
    name: 'GitHub',
    handle: 'github.com/pa79',
    href: 'https://github.com/pa79',
  },
  {
    icon: '🎓',
    name: 'Google Scholar',
    handle: 'View Publications',
    href: 'https://scholar.google.com/citations?user=ZgdmA64AAAAJ&hl=en&oi=ao',
  },
]

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <div className="contact-layout">
          {/* Left */}
          <div className="contact-left reveal">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title contact-title">Let&apos;s Connect</h2>
            <p className="contact-desc">
              I welcome inquiries about research collaborations, speaking invitations,
              graduate opportunities, or any questions about my work in applied
              and behavioral economics.
            </p>

            <div className="contact-item">
              <div className="contact-icon"><EmailIcon /></div>
              <div>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-val">
                  <a href="mailto:prabinadhikari@ufl.edu">prabinadhikari@ufl.edu</a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><PinIcon /></div>
              <div>
                <div className="contact-detail-label">Location</div>
                <div className="contact-detail-val">
                  1172 McCarty Hall A, Gainesville, FL 32611
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:17,height:17}}>
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Department</div>
                <div className="contact-detail-val">
                  Food and Resource Economics,<br/>University of Florida
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="contact-right reveal reveal-delay-2">
            <div className="contact-socials-title">Find Me Online</div>
            <div className="social-cards">
              {socials.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  className="social-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="social-card-icon">{s.icon}</div>
                  <div>
                    <div className="social-card-name">{s.name}</div>
                    <div className="social-card-handle">{s.handle}</div>
                  </div>
                  <div className="social-card-arrow"><ArrowIcon /></div>
                </a>
              ))}

              {/* CV download card */}
              <a href="/cv.pdf" className="social-card" target="_blank" rel="noopener noreferrer">
                <div className="social-card-icon">📄</div>
                <div>
                  <div className="social-card-name">Curriculum Vitae</div>
                  <div className="social-card-handle">Download PDF</div>
                </div>
                <div className="social-card-arrow"><ArrowIcon /></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
