import { useEffect, useRef } from 'react'

const education = [
  {
    period: 'Aug 2023 – Aug 2027',
    degree: 'Ph.D., Applied Economics',
    org: 'University of Florida, Gainesville, FL',
    gpa: 'GPA: 3.77 / 4.00',
    notes: ['College of Agricultural and Life Sciences', 'Advisor: Dr. Bachir Kassas', 'Focus: Behavioral Economics, Causal Inference, Neuroeconomics'],
  },
  {
    period: 'Aug 2021 – May 2023',
    degree: 'M.S., Agricultural and Applied Economics',
    org: 'University of Georgia, Athens, GA',
    gpa: 'GPA: 3.89 / 4.00',
    notes: ['Advisor: Dr. Benjamin Campbell', 'Thesis: Consumer preferences for flavored CBD oil'],
  },
  {
    period: 'Jan 2015 – Jul 2019',
    degree: 'B.Sc., Agricultural Operation and Management',
    org: 'Agriculture and Forestry University, Nepal',
    notes: ['Thesis: Economics of Chhari and Marketable-size Carp Fish in Bara, Nepal'],
  },
]

const experience = [
  {
    period: 'Aug 2023 – Present',
    title: 'Graduate Research Assistant',
    org: 'University of Florida, Gainesville, FL',
    notes: [
      'Design neuroeconomic lab experiments with EEG to study food choice nudges',
      'Analyze 60,000+ household Nielsen panel data merged with NOAA weather data',
      'Estimate heatwave effects on food purchases using DiD and fixed-effects models',
      'Build reproducible data pipelines in R and Python for large consumer datasets',
    ],
  },
  {
    period: 'Aug 2021 – May 2023',
    title: 'Graduate Research Assistant',
    org: 'University of Georgia, Athens, GA',
    notes: [
      'Conducted econometric analysis of consumer survey datasets',
      'Estimated random parameter logit and latent class discrete choice models',
      'Built predictive models using random forest and gradient boosting',
    ],
  },
  {
    period: 'Aug 2020 – Jul 2021',
    title: 'Agriculture Extension Officer',
    org: 'Annapurna Rural Municipality, Nepal',
    notes: [
      'Advised farmers on crop production strategies and market access',
      'Analyzed agricultural production data for local policy decisions',
    ],
  },
  {
    period: 'Dec 2019 – Feb 2020',
    title: 'Research Intern',
    org: 'Nepal Agricultural Research Council',
    notes: ['Agricultural economics research, field data collection, statistical analysis'],
  },
]

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <div key={i} className="timeline-item">
          <div className="tl-period">{item.period}</div>
          <div className="tl-title">{item.degree || item.title}</div>
          <div className="tl-org">{item.org}</div>
          {item.gpa && <span className="tl-gpa">{item.gpa}</span>}
          {item.notes && (
            <div className="tl-desc">
              <ul>
                {item.notes.map((n, j) => <li key={j}>{n}</li>)}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function CVSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="cv" ref={ref}>
      <div className="container">
        <div className="cv-top reveal">
          <div>
            <span className="section-label">Curriculum Vitae</span>
            <h2 className="section-title">Education &amp; Experience</h2>
          </div>
          <a href="/cv.pdf" className="btn btn-gold" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Full CV (PDF)
          </a>
        </div>

        <div className="cv-grid">
          <div className="reveal reveal-delay-1">
            <div className="cv-col-title">Education</div>
            <Timeline items={education} />
          </div>
          <div className="reveal reveal-delay-2">
            <div className="cv-col-title">Research Experience</div>
            <Timeline items={experience} />
          </div>
        </div>
      </div>
    </section>
  )
}
