import { useState, useEffect, useRef } from 'react'

const papers = [
  {
    id: 1,
    type: 'working',
    title: 'Weather Shocks and Food Choices: Evidence from U.S. Household Grocery Purchases',
    authors: [{ name: 'Adhikari, P.', me: true }, { name: 'Kassas, B.' }, { name: 'Nayga Jr., R.' }],
    year: 2026,
    venue: 'AAEA Annual Meeting, Kansas City (forthcoming)',
    abstract: 'This study examines how extreme weather events affect consumer food purchasing decisions. Using Nielsen consumer panel data covering 60,000+ households (5.6 million household-week observations) merged with NOAA weather exposure data, we employ difference-in-differences and fixed-effects econometric models to identify the causal impact of heatwaves on unhealthy food purchases. Findings offer insights for public health and food policy interventions targeting extreme weather contexts.',
    keywords: ['Causal Inference', 'Difference-in-Differences', 'Food Choices', 'Weather Shocks', 'Consumer Behavior'],
  },
  {
    id: 2,
    type: 'working',
    title: 'Information Treatments Raising Awareness to Improve Consumer Preferences for State Marketing Programs: The "Fresh from Florida" Case',
    authors: [{ name: 'Adhikari, P.', me: true }, { name: 'Kassas, B.' }, { name: 'Chen, L.' }, { name: 'Magnier, A.' }],
    year: 2025,
    venue: 'Work in Progress',
    abstract: 'This paper evaluates how information-based interventions shape consumer willingness-to-pay for state-branded agricultural products. Using the "Fresh from Florida" brand as a case study, we deploy a framed choice experiment to assess whether targeted awareness campaigns and quality signals can boost demand in competitive retail environments. Results inform optimal design of state marketing programs.',
    keywords: ['State Marketing Programs', 'WTP', 'Information Treatments', 'Choice Experiment', 'Agricultural Branding'],
  },
  {
    id: 3,
    type: 'conference',
    title: 'Enhancing State Marketing Program Effectiveness in Out-of-State Markets',
    authors: [{ name: 'Adhikari, P.', me: true }, { name: 'Kassas, B.' }, { name: 'Magnier, A.' }, { name: 'Chen, L.' }],
    year: 2026,
    venue: 'Southern Agricultural Economics Association Annual Meeting, Louisville',
    abstract: 'This paper investigates the effectiveness of state marketing programs (SMPs) in out-of-state markets. Using a conjoint survey experiment, we estimate consumer willingness-to-pay premiums for state-branded agricultural products across different geographic and demographic market segments. Results highlight key drivers of state brand equity and provide implications for SMP expansion and policy design.',
    keywords: ['Agricultural Marketing', 'State Branding', 'WTP', 'Discrete Choice', 'Consumer Survey'],
  },
  {
    id: 4,
    type: 'conference',
    title: 'Consumer Valuation of State-Branded Agricultural Products',
    authors: [{ name: 'Adhikari, P.', me: true }, { name: 'Kassas, B.' }, { name: 'Magnier, A.' }, { name: 'Chen, L.' }],
    year: 2025,
    venue: 'Southern Economic Association Annual Meeting, Tampa, FL',
    abstract: 'We analyze heterogeneity in consumer preferences for state-branded agricultural products using random parameter logit and latent class models. Applying a stated preference survey, we identify consumer segments that systematically value local and state-branded goods and estimate willingness-to-pay premiums across product categories. Findings contribute to the design of more targeted and cost-effective state marketing strategies.',
    keywords: ['Consumer Preferences', 'Latent Class', 'State Branding', 'WTP', 'Random Parameter Logit'],
  },
  {
    id: 5,
    type: 'conference',
    title: 'AMAGGI: Growing with Sustainability in the Grain Trading Business',
    authors: [{ name: 'Adhikari, P.', me: true }, { name: 'Aiya, F.' }],
    year: 2025,
    venue: 'AAEA/WAEA Annual Meeting, Denver, CO',
    abstract: "This case study analyzes AMAGGI's integration of sustainability principles into its global grain trading operations. We examine how the company leverages environmental and social governance frameworks to achieve competitive advantage while managing supply-chain risks. The study demonstrates that sustainability-oriented strategies can be economically viable and discusses implications for the broader agricultural commodities sector.",
    keywords: ['Agricultural Business', 'Sustainability', 'Grain Trading', 'ESG', 'Case Study'],
    award: '🏆 AAEA Case Study Competition — 1st Place (2025)',
  },
  {
    id: 6,
    type: 'journal',
    title: 'Economics of Chhari and Marketable-size Carp Fish in Bara, Nepal',
    authors: [{ name: 'Adhikari, P.', me: true }, { name: 'et al.' }],
    year: 2019,
    venue: 'Journal of Agriculture and Natural Resources, Vol. 2(1)',
    abstract: 'This study analyzes the production economics and market structure of carp fish aquaculture in the Bara district of Nepal. Cost-benefit analysis and market chain analysis are used to assess profitability and identify constraints faced by small-scale fish farmers. Results provide evidence-based recommendations for improving farmer income and market integration in Nepal\'s aquaculture sector.',
    keywords: ['Aquaculture Economics', 'Production Analysis', 'Nepal', 'Market Chain'],
    doi: 'https://doi.org/10.3126/janr.v2i1.26061',
  },
  {
    id: 7,
    type: 'journal',
    title: 'Economics of Rubber Production in Jhapa District of Nepal',
    authors: [{ name: 'Poudel, M.' }, { name: 'Adhikari, P.', me: true }, { name: 'et al.' }],
    year: 2020,
    venue: 'Journal of Agriculture and Natural Resources, Vol. 3(1)',
    abstract: 'This paper examines the economic feasibility and profitability of rubber cultivation in Jhapa District, Nepal. Using farm-level data and cost-of-production analysis, we estimate returns to rubber farming and identify socio-economic factors affecting adoption. Results suggest rubber as a viable cash crop for smallholder diversification in the Terai region of Nepal.',
    keywords: ['Rubber Production', 'Agricultural Economics', 'Nepal', 'Smallholder Farming'],
    doi: 'https://doi.org/10.3126/janr.v3i1.27173',
  },
]

const filters = ['All', 'Journal', 'Working Papers', 'Conference']
const typeMap = { All: null, Journal: 'journal', 'Working Papers': 'working', Conference: 'conference' }

export default function Research() {
  const [active, setActive] = useState('All')
  const [expanded, setExpanded] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const filtered = active === 'All' ? papers : papers.filter(p => p.type === typeMap[active])

  const toggle = (id) => setExpanded(v => v === id ? null : id)

  const typeLabel = { journal: 'Journal', conference: 'Conference', working: 'Working Paper' }
  const typeClass = { journal: 'badge-journal', conference: 'badge-conference', working: 'badge-working' }

  return (
    <section id="research" ref={ref}>
      <div className="container">
        <div className="research-head reveal">
          <span className="section-label">Research</span>
          <h2 className="section-title" style={{ color: 'var(--text-900)' }}>
            Publications &amp; Presentations
          </h2>
          <p className="section-desc" style={{ margin: '0.75rem auto 0' }}>
            Peer-reviewed articles, conference presentations, and working papers.
            Click any paper to expand its abstract and details.
          </p>
        </div>

        <div className="research-filters reveal reveal-delay-1">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn${active === f ? ' active' : ''}`}
              onClick={() => { setActive(f); setExpanded(null) }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="research-list">
          {filtered.map((paper, i) => (
            <div
              key={paper.id}
              className={`research-card reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="research-card-header" onClick={() => toggle(paper.id)}>
                <div className="research-card-left">
                  <div className="research-card-meta">
                    <span className={`badge ${typeClass[paper.type]}`}>{typeLabel[paper.type]}</span>
                    <span className="research-meta-year">{paper.year}</span>
                    {paper.award && <span className="badge badge-award">Award</span>}
                  </div>
                  <h3 className="research-card-title">{paper.title}</h3>
                  <span className="research-meta-venue">{paper.venue}</span>
                  <p className="research-card-authors">
                    {paper.authors.map((a, j) => (
                      <span key={j}>
                        {j > 0 && ', '}
                        {a.me ? <strong>{a.name}</strong> : a.name}
                      </span>
                    ))}
                  </p>
                </div>
                <button
                  className={`research-toggle${expanded === paper.id ? ' open' : ''}`}
                  aria-label={expanded === paper.id ? 'Collapse' : 'Expand'}
                  tabIndex={-1}
                >
                  +
                </button>
              </div>

              <div className={`research-body${expanded === paper.id ? ' open' : ''}`}>
                <div className="research-body-inner">
                  {paper.award && (
                    <div className="research-award-note">{paper.award}</div>
                  )}
                  <p className="research-abstract">{paper.abstract}</p>
                  <div className="research-keywords">
                    {paper.keywords.map(k => (
                      <span key={k} className="keyword-tag">{k}</span>
                    ))}
                  </div>
                  <div className="research-actions">
                    {paper.doi && (
                      <a href={paper.doi} className="research-link research-link-primary" target="_blank" rel="noopener noreferrer">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        View Paper
                      </a>
                    )}
                    <a
                      href="https://scholar.google.com/citations?user=ZgdmA64AAAAJ&hl=en&oi=ao"
                      className="research-link research-link-ghost"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Scholar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
