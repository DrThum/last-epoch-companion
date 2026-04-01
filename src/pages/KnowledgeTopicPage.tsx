import { Link, useParams, Navigate } from 'react-router-dom'
import { topics } from '../data/gameKnowledge'
import './KnowledgeTopicPage.css'

export default function KnowledgeTopicPage() {
  const { topicId } = useParams()
  const topic = topics.find(t => t.id === topicId)

  if (!topic) return <Navigate to="/knowledge" replace />

  return (
    <div className="knowledge-topic-page">
      <div className="topic-page-header">
        <Link to="/knowledge" className="back-link">← Game Knowledge</Link>
        <div className="knowledge-eyebrow">Reference</div>
        <h1 className="topic-page-title">{topic.title}</h1>
        <p className="topic-page-subtitle">{topic.subtitle}</p>
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
                {step.tag && <span className={`step-tag ${step.tag === 'Season 4' ? 's4' : 's3'}`}>{step.tag}</span>}
              </div>

              <p className="step-summary">{step.summary}</p>

              {step.callout && (
                <p className="step-callout">{step.callout}</p>
              )}

              <details className="step-details">
                <summary className="step-details-toggle">Details</summary>
                <ul className="step-detail-list">
                  {step.details.map((d, i) => (
                    <li key={i} className={d.startsWith('—') ? 'detail-section-label' : ''}>
                      {d}
                    </li>
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
