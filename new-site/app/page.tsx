export default function Home() {
  const featuredResearch = [
    {
      title: "Weather Shocks and Food Choices",
      subtitle: "Household panel data, NOAA exposure, causal inference",
      description:
        "Merged Nielsen consumer panel data with NOAA weather exposure data to estimate how extreme heat shifts unhealthy food purchases and diet quality.",
      tags: ["Difference-in-Differences", "Fixed Effects", "Panel Data", "R/Python"],
    },
    {
      title: "State Marketing Program Effectiveness",
      subtitle: "Behavioral economics, information treatments",
      description:
        "Examines how state-branded agricultural products are valued by out-of-state consumers and how targeted messages change willingness to pay.",
      tags: ["Experiments", "WTP", "Consumer Behavior"],
    },
    {
      title: "Neuroeconomics of Healthier Food Choice",
      subtitle: "EEG, nudges, cognitive bias",
      description:
        "Designed laboratory studies to identify cognitive mechanisms behind food choice and test behavioral nudges that promote healthier decisions.",
      tags: ["EEG", "Lab Experiments", "Behavioral Science"],
    },
  ];

  const projects = [
    {
      title: "Credit Risk Modeling with LendingClub Data",
      description:
        "Built a probability-of-default scorecard using Weight-of-Evidence transformation and logistic regression.",
      stack: ["Python", "Logistic Regression", "Credit Risk"],
    },
    {
      title: "Loan Default Prediction Using Machine Learning",
      description:
        "Compared supervised machine learning models for borrower-level default prediction.",
      stack: ["Random Forest", "Gradient Boosting", "Classification"],
    },
    {
      title: "U.S. GDP Forecasting",
      description:
        "Built time-series forecasting models for quarterly GDP growth with out-of-sample validation.",
      stack: ["Python", "Forecasting", "Macroeconomics"],
    },
    {
      title: "Policy Evaluation Using Difference-in-Differences",
      description:
        "Replicated a well-known empirical economics study using DiD and triple-differences methods.",
      stack: ["DiD", "Causal Inference", "Replication"],
    },
  ];

  const talks = [
    "Weather Shocks and Food Choices: Evidence from U.S. Household Grocery Purchases — AAEA Annual Meeting (2026)",
    "Enhancing State Marketing Program Effectiveness in Out-of-State Markets — SAEA Annual Meeting (2026)",
    "Consumer Valuation of State-Branded Agricultural Products — SEA Annual Meeting (2025)",
    "AMAGGI: Growing with Sustainability in the Grain Trading Business — AAEA/WAEA Annual Meeting (2025)",
  ];

  const awards = [
    "AAEA Case Study Competition — 1st Place (2025)",
    "IFAMA Case Study Competition — 3rd Place (2025)",
    "Ofelia Anzola Memorial Scholarship (2025)",
    "Grinter Fellowship — University of Florida (2023–2024)",
    "Graduate Student Council Travel Grant — University of Florida (2026)",
    "AAEA Trust Travel Grant — AAEA Annual Meeting (2026)",
  ];

  const skills = [
    "R",
    "Python",
    "SQL",
    "Stata",
    "Econometrics",
    "Causal Inference",
    "Discrete Choice Models",
    "Machine Learning",
    "AWS",
    "Tableau",
    "Power BI",
    "Git",
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.10),transparent_18%)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-zinc-400">
              Prabin Adhikari
            </div>
            <div className="text-xs text-zinc-500">
              Applied Economics PhD Candidate
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#research" className="hover:text-white">Research</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#talks" className="hover:text-white">Talks</a>
            <a href="#awards" className="hover:text-white">Awards</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            Econometrics • Behavioral Economics • Causal Inference
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              I build rigorous empirical research around consumer behaviour, policy, and decision-making.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-300">
              PhD candidate at the University of Florida working at the intersection of applied economics,
              experiments, and data science. My work spans large-scale panel data, behavioral experiments,
              forecasting, and machine learning.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#research"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:-translate-y-0.5"
            >
              Explore research
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Contact
            </a>
            <a
              href="#"
              className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-6 py-3 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400/15"
            >
              Download CV
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["5.6M", "household-week observations"],
              ["60k+", "households analyzed"],
              ["4+", "major conference presentations"],
              ["1st", "AAEA case study finish"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-2xl font-semibold text-white">{value}</div>
                <div className="mt-1 text-sm text-zinc-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-emerald-950/20 backdrop-blur">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.25em] text-zinc-500">Profile</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
              Gainesville, FL
            </span>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-5">
              <div className="text-sm text-zinc-400">Current focus</div>
              <div className="mt-2 text-xl font-medium text-white">
                Applied microeconomics, experiments, and analytics for consumer and policy questions.
              </div>
            </div>

            <div>
              <div className="mb-3 text-sm text-zinc-400">Core toolkit</div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">Featured research</div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Research with policy and market relevance
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredResearch.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="text-sm text-zinc-400">{item.subtitle}</div>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-zinc-300">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">Selected projects</div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Hands-on analytics beyond the dissertation
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-medium text-white">{project.title}</h3>
              <p className="mt-3 leading-7 text-zinc-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-2 lg:px-8">
        <div id="talks" className="rounded-[32px] border border-white/10 bg-white/[0.04] p-7">
          <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">Presentations & talks</div>
          <h2 className="mt-3 text-2xl font-semibold text-white">Conference activity</h2>
          <div className="mt-6 space-y-4">
            {talks.map((talk) => (
              <div key={talk} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4 text-zinc-300">
                {talk}
              </div>
            ))}
          </div>
        </div>

        <div id="awards" className="rounded-[32px] border border-white/10 bg-white/[0.04] p-7">
          <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">Awards</div>
          <h2 className="mt-3 text-2xl font-semibold text-white">Recognition and support</h2>
          <div className="mt-6 grid gap-4">
            {awards.map((award) => (
              <div key={award} className="rounded-2xl border border-white/10 p-4 text-zinc-300">
                {award}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">Contact</div>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Open to research, collaboration, and analytics opportunities
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
                Interested in applied microeconomics, causal inference, behavioral experiments, or data science
                collaborations? Reach out through email or connect through LinkedIn and GitHub.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a href="mailto:prabinadhikari@ufl.edu" className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 hover:bg-zinc-900">
                <div className="text-sm text-zinc-400">Email</div>
                <div className="mt-2 text-white">prabinadhikari@ufl.edu</div>
              </a>
              <a href="https://www.linkedin.com/in/prabinadhikari1/" className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 hover:bg-zinc-900">
                <div className="text-sm text-zinc-400">LinkedIn</div>
                <div className="mt-2 text-white">Connect professionally</div>
              </a>
              <a href="https://github.com/pa79/pa79.github.io" className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 hover:bg-zinc-900">
                <div className="text-sm text-zinc-400">GitHub</div>
                <div className="mt-2 text-white">View code and website</div>
              </a>
              <a href="https://scholar.google.com/citations?user=ZgdmA64AAAAJ&hl=en&oi=ao" className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 hover:bg-zinc-900">
                <div className="text-sm text-zinc-400">Google Scholar</div>
                <div className="mt-2 text-white">Research profile</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}