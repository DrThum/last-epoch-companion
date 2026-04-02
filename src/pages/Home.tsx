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
        <h2 className="section-title">Tracker</h2>
        <div className="build-cards" style={{ marginBottom: '2rem' }}>
          <Link to="/tracker" className="build-card card">
            <div className="build-card-header">
              <div>
                <div className="build-card-class">Witchfire Warlock · Season 4</div>
                <div className="build-card-name">Progression Tracker</div>
              </div>
              <div className="build-card-right">
                <span className="build-card-arrow">→</span>
              </div>
            </div>
            <p className="build-card-desc">Track normal & empowered monolith clears, blessings with roll quality, and build milestones. Saved locally.</p>
            <div className="build-card-tags">
              <span className="tag">Monoliths</span>
              <span className="tag">Blessings</span>
              <span className="tag">Offline</span>
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

    </div>
  )
}
