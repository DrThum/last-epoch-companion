import { endgameProgression } from '../data/gameKnowledge'
import type { KnowledgeTopic } from '../data/gameKnowledge'
import './GameKnowledge.css'

function Checklist({ topic }: { topic: KnowledgeTopic }) {
  return (
    <div className="checklist-topic">
      <div className="topic-header">
        <h2 className="topic-title">{topic.title}</h2>
        <p className="topic-subtitle">{topic.subtitle}</p>
      </div>

      <ol className="checklist">
        {topic.steps.map((step, idx) => (
          <li key={step.id} className="checklist-step">
            <div className="step-spine">
              <div className="step-number">{idx + 1}</div>
              {idx < topic.steps.length - 1 && <div className="step-line" />}
            </div>

            <div className="step-body">
              <div className="step-header">
                <span className="step-title">{step.title}</span>
                {step.tag && <span className="step-tag s4">{step.tag}</span>}
              </div>

              <p className="step-summary">{step.summary}</p>

              {step.callout && (
                <p className="step-callout">{step.callout}</p>
              )}

              <details className="step-details">
                <summary className="step-details-toggle">Details</summary>
                <ul className="step-detail-list">
                  {step.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </details>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

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

      <Checklist topic={endgameProgression} />
    </div>
  )
}
