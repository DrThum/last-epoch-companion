import { Link } from 'react-router-dom'
import { topics } from '../data/gameKnowledge'
import './GameKnowledge.css'

export default function GameKnowledge() {
  return (
    <div className="game-knowledge">
      <div className="knowledge-header">
        <div className="knowledge-eyebrow">Reference</div>
        <h1 className="knowledge-title">Game Knowledge</h1>
        <p className="knowledge-desc">
          Distilled notes on game systems — so you don't have to rewatch the videos.
        </p>
      </div>

      <div className="knowledge-grid">
        {topics.map(topic => (
          <Link key={topic.id} to={`/knowledge/${topic.id}`} className="knowledge-card card">
            <div className="knowledge-card-header">
              <div className="knowledge-card-title">{topic.title}</div>
              <span className="knowledge-card-arrow">→</span>
            </div>
            <p className="knowledge-card-desc">{topic.subtitle}</p>
            <div className="knowledge-card-footer">
              <span className="tag">{topic.steps.length} steps</span>
              {topic.steps.some(s => s.tag === 'Season 4') && (
                <span className="step-tag s4">Season 4</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
