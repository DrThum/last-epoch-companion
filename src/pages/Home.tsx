import './Home.css'

const FEATURE_CARDS = [
  {
    icon: '⚔️',
    title: 'Build Guide',
    description: 'Step-by-step progression for your chosen build — skill trees, gear priorities, passive breakpoints.',
    status: 'coming-soon',
  },
  {
    icon: '📖',
    title: 'Game Knowledge',
    description: 'Distilled notes from guides and videos — mechanics, systems, tips — so you never have to rewatch.',
    status: 'coming-soon',
  },
  {
    icon: '🗺️',
    title: 'Progression Tracker',
    description: 'Track your leveling checklist, quest milestones, and monolith progress locally in your browser.',
    status: 'coming-soon',
  },
]

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-eyebrow">Your personal guide to Eterra</div>
        <h1 className="hero-title">Last Epoch Companion</h1>
        <p className="hero-sub">
          Build references, game knowledge, and a progress tracker — all offline-first, no account needed.
        </p>
        <div className="hero-divider" />
      </section>

      <section className="features">
        <h2 className="section-title">What's coming</h2>
        <div className="feature-grid">
          {FEATURE_CARDS.map((card) => (
            <div key={card.title} className="feature-card card">
              <div className="feature-icon">{card.icon}</div>
              <div className="feature-body">
                <div className="feature-header">
                  <h3 className="feature-title">{card.title}</h3>
                  {card.status === 'coming-soon' && (
                    <span className="tag">Soon</span>
                  )}
                </div>
                <p className="feature-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
