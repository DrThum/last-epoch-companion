import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import BuildGuide from './pages/BuildGuide'
import GameKnowledge from './pages/GameKnowledge'
import KnowledgeTopicPage from './pages/KnowledgeTopicPage'
import ProgressTracker from './pages/ProgressTracker'
import './App.css'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/builds/witchfire-warlock', label: 'Witchfire Warlock', end: false },
  { to: '/knowledge', label: 'Game Knowledge', end: false },
  { to: '/tracker', label: 'Tracker', end: false },
]

export default function App() {
  return (
    <BrowserRouter basename="/last-epoch-companion/">
      <div className="layout">
        <header className="site-header">
          <div className="header-inner">
            <div className="site-brand">
              <svg className="brand-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="16,3 29,10.5 29,21.5 16,29 3,21.5 3,10.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
                <polygon points="16,7 25,12 25,20 16,25 7,20 7,12" fill="currentColor" opacity="0.15"/>
                <line x1="16" y1="3" x2="16" y2="29" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                <line x1="3" y1="10.5" x2="29" y2="21.5" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                <line x1="29" y1="10.5" x2="3" y2="21.5" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
              </svg>
              <span className="brand-name">Last Epoch Companion</span>
            </div>
            <nav className="site-nav">
              {NAV_LINKS.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) => ['nav-link', isActive ? 'active' : ''].join(' ').trim()}
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/builds/witchfire-warlock" element={<BuildGuide />} />
            <Route path="/knowledge" element={<GameKnowledge />} />
            <Route path="/knowledge/:topicId" element={<KnowledgeTopicPage />} />
            <Route path="/tracker" element={<ProgressTracker />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <p>Not affiliated with Eleventh Hour Games. Last Epoch is a trademark of Eleventh Hour Games Inc.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}
