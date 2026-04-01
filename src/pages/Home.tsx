import { Link } from 'react-router-dom'
import './Home.css'

const BUILDS = [
  {
    to: '/builds/witchfire-warlock',
    name: 'Witchfire Warlock',
    class: 'Acolyte · Warlock',
    patch: '1.4',
    description: 'Passive Fire & Necrotic DoT with no target cap. Burns down packs and bosses without spamming skills.',
    tags: ['DoT', 'Monolith Farmer', 'Beginner'],
  },
]

const COMING_SOON = [
  {
    icon: '🗺️',
    title: 'Progression Tracker',
    description: 'Track leveling checklist, quest milestones, and monolith progress locally.',
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
        <h2 className="section-title">Knowledge</h2>
        <div className="build-cards" style={{ marginBottom: '2rem' }}>
          <Link to="/knowledge" className="build-card card">
            <div className="build-card-header">
              <div>
                <div className="build-card-class">Reference</div>
                <div className="build-card-name">Game Knowledge</div>
              </div>
              <div className="build-card-right">
                <span className="build-card-arrow">→</span>
              </div>
            </div>
            <p className="build-card-desc">Endgame progression loop, system explanations, and quick-reference checklists — no videos required.</p>
            <div className="build-card-tags">
              <span className="tag">Endgame</span>
              <span className="tag">Season 4</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Builds</h2>
        <div className="build-cards">
          {BUILDS.map((build) => (
            <Link key={build.to} to={build.to} className="build-card card">
              <div className="build-card-header">
                <div>
                  <div className="build-card-class">{build.class}</div>
                  <div className="build-card-name">{build.name}</div>
                </div>
                <div className="build-card-right">
                  <span className="build-patch-badge">{build.patch}</span>
                  <span className="build-card-arrow">→</span>
                </div>
              </div>
              <p className="build-card-desc">{build.description}</p>
              <div className="build-card-tags">
                {build.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="features coming-soon-section">
        <h2 className="section-title">Coming soon</h2>
        <div className="feature-grid">
          {COMING_SOON.map((card) => (
            <div key={card.title} className="feature-card card">
              <div className="feature-icon">{card.icon}</div>
              <div className="feature-body">
                <div className="feature-header">
                  <h3 className="feature-title">{card.title}</h3>
                  <span className="tag">Soon</span>
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
