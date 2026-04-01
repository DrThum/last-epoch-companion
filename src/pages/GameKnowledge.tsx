import { useEffect, useRef, useState } from 'react'
import { topics } from '../data/gameKnowledge'
import type { KnowledgeTopic } from '../data/gameKnowledge'
import './GameKnowledge.css'

function Checklist({ topic }: { topic: KnowledgeTopic }) {
  return (
    <section id={topic.id} className="checklist-topic">
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
    </section>
  )
}

export default function GameKnowledge() {
  const [activeId, setActiveId] = useState(topics[0].id)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-20% 0px -75% 0px' }
    )
    topics.forEach(t => {
      const el = document.getElementById(t.id)
      if (el) observerRef.current!.observe(el)
    })
    return () => observerRef.current?.disconnect()
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="game-knowledge">
      <div className="knowledge-header">
        <div className="knowledge-eyebrow">Reference</div>
        <h1 className="knowledge-title">Game Knowledge</h1>
        <p className="knowledge-desc">
          Distilled notes on game systems — so you don't have to rewatch the videos.
        </p>
      </div>

      <nav className="topic-nav">
        {topics.map(t => (
          <button
            key={t.id}
            className={['topic-nav-btn', activeId === t.id ? 'active' : ''].join(' ')}
            onClick={() => scrollTo(t.id)}
          >
            {t.title}
          </button>
        ))}
      </nav>

      {topics.map(t => <Checklist key={t.id} topic={t} />)}
    </div>
  )
}
