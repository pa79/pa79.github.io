import { useEffect, useRef } from 'react'

const awards = [
  {
    icon: '🥇',
    name: 'AAEA Case Study Competition — 1st Place',
    year: '2025 · AAEA Annual Meeting, Denver, CO',
  },
  {
    icon: '🥉',
    name: 'IFAMA Case Study Competition — 3rd Place',
    year: '2025 · International Food & Agribusiness Management Association',
  },
  {
    icon: '🎓',
    name: 'Ofelia Anzola Memorial Scholarship',
    year: '2025 · CALS, University of Florida',
  },
  {
    icon: '🏛️',
    name: 'Grinter Fellowship',
    year: '2023–2024 · University of Florida Graduate School',
  },
  {
    icon: '✈️',
    name: 'Graduate Student Council Travel Grant',
    year: '2026 · University of Florida',
  },
  {
    icon: '✈️',
    name: 'AAEA Trust Travel Grant',
    year: '2026 · AAEA Annual Meeting',
  },
  {
    icon: '🎖️',
    name: 'Golden Jubilee Scholarship',
    year: '2016 · Government of India',
  },
]

export default function Awards() {
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
    <section id="awards" ref={ref}>
      <div className="container">
        <div className="awards-head reveal">
          <span className="section-label">Recognition</span>
          <h2 className="section-title" style={{ color: 'var(--text-900)' }}>
            Awards &amp; Honors
          </h2>
          <p className="section-desc" style={{ margin: '0.75rem auto 0' }}>
            Academic recognition and scholarships received throughout my career.
          </p>
        </div>

        <div className="awards-grid">
          {awards.map((a, i) => (
            <div
              key={i}
              className={`award-card reveal reveal-delay-${Math.min((i % 4) + 1, 4)}`}
            >
              <div className="award-icon">{a.icon}</div>
              <div className="award-text">
                <div className="award-name">{a.name}</div>
                <div className="award-year">{a.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
