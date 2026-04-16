import { useEffect, useRef } from 'react'

const interests = [
  'Econometrics & Causal Inference',
  'Behavioral Economics',
  'Consumer Behavior',
  'Agricultural Economics',
  'Machine Learning in Economics',
  'Food & Environmental Policy',
  'Neuroeconomics',
  'Discrete Choice Modeling',
]

const skillGroups = [
  {
    label: 'Programming',
    skills: ['R', 'Python', 'SQL', 'Stata', 'SAS'],
  },
  {
    label: 'Econometrics',
    skills: ['DiD', 'Fixed Effects', 'IV', 'Discrete Choice', 'Panel Data'],
  },
  {
    label: 'Machine Learning',
    skills: ['Random Forest', 'Gradient Boosting', 'SVM', 'Neural Networks'],
  },
  {
    label: 'AI & LLM Tools',
    skills: ['OpenAI API', 'Hugging Face', 'Transformers'],
  },
  {
    label: 'Visualization & Cloud',
    skills: ['ggplot2', 'Tableau', 'Power BI', 'AWS', 'Git'],
  },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <div className="about-layout">
          {/* Left */}
          <div>
            <div className="reveal">
              <span className="section-label">About Me</span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                Economist. Researcher.<br />Data Scientist.
              </h2>
            </div>

            <p className="about-bio reveal reveal-delay-1">
              I am a Ph.D. candidate in <strong>Applied Economics</strong> at the University of Florida's
              College of Agricultural and Life Sciences, working under the supervision of{' '}
              <strong>Dr. Bachir Kassas</strong>. My research sits at the intersection of
              behavioral economics, consumer decision-making, and empirical methods.
            </p>
            <p className="about-bio reveal reveal-delay-2">
              I design and implement <strong>neuroeconomic laboratory experiments</strong> using EEG
              to identify cognitive biases and evaluate behavioral nudges. I also analyze
              large-scale consumer panel datasets — including Nielsen data covering 60,000+
              households — merged with weather and environmental data to estimate causal
              effects using difference-in-differences and fixed-effects econometric models.
            </p>
            <p className="about-bio reveal reveal-delay-3">
              Prior to UF, I completed my <strong>M.S. in Agricultural and Applied Economics</strong>{' '}
              at the University of Georgia, where I studied consumer preferences for
              CBD products using random parameter logit and latent class models.
              I hold a <strong>B.Sc. in Agriculture</strong> from Agriculture and Forestry
              University in Nepal.
            </p>

            <div className="about-interests reveal reveal-delay-4">
              <h3>Research Interests</h3>
              <div className="interests-tags">
                {interests.map(i => (
                  <span key={i} className="interest-tag">{i}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Skills */}
          <div className="reveal reveal-delay-2">
            <div className="skills-panel">
              <p className="skills-panel-title">Technical Toolkit</p>
              {skillGroups.map(g => (
                <div key={g.label} className="skill-group">
                  <p className="skill-group-label">{g.label}</p>
                  <div className="skill-chips">
                    {g.skills.map(s => (
                      <span key={s} className="skill-chip">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
