import { useState } from 'react'
import { timelines, blessingTargets, milestoneGroups } from '../data/progressTracker'
import { useProgress } from '../hooks/useProgress'
import './ProgressTracker.css'

export default function ProgressTracker() {
  const { state, toggleNormal, toggleEmpowered, toggleMilestone, updateBlessing, resetAll } =
    useProgress()
  const [confirmReset, setConfirmReset] = useState(false)

  const normalCount = timelines.filter(t => state.normalCleared[t.id]).length
  const empoweredCount = timelines.filter(t => state.empoweredCleared[t.id]).length
  const allNormalDone = normalCount === timelines.length

  function handleReset() {
    if (confirmReset) {
      resetAll()
      setConfirmReset(false)
    } else {
      setConfirmReset(true)
    }
  }

  return (
    <div className="tracker-page">
      <div className="tracker-header">
        <h1>Progression Tracker</h1>
        <p>Witchfire Warlock · Season 4 · State saved in browser</p>
        <button
          className="tracker-reset-btn"
          onClick={handleReset}
          onBlur={() => setConfirmReset(false)}
        >
          {confirmReset ? 'Click again to confirm reset' : 'Reset all progress'}
        </button>
      </div>

      {/* ── Normal Monoliths ─────────────────────────────────────────────── */}
      <section className="tracker-section">
        <h2 className="tracker-section-title">Normal Monoliths</h2>
        <div className="progress-bar-wrap">
          <div className="progress-bar-label">
            <span>Timeline completions</span>
            <span>{normalCount} / {timelines.length}</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${(normalCount / timelines.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="timeline-grid">
          {timelines.map(t => {
            const checked = !!state.normalCleared[t.id]
            return (
              <label key={t.id} className={`timeline-check${checked ? ' checked' : ''}`}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleNormal(t.id)}
                />
                <span>{t.name}</span>
              </label>
            )
          })}
        </div>

        {allNormalDone && (
          <div className="empowered-banner">
            All normal timelines cleared — Empowered Monoliths unlocked!
          </div>
        )}
      </section>

      {/* ── Empowered Monoliths ──────────────────────────────────────────── */}
      <section className="tracker-section">
        <h2 className="tracker-section-title">Empowered Monoliths</h2>
        <div className="progress-bar-wrap">
          <div className="progress-bar-label">
            <span>First clear each timeline</span>
            <span>{empoweredCount} / {timelines.length}</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${(empoweredCount / timelines.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="timeline-grid">
          {timelines.map(t => {
            const checked = !!state.empoweredCleared[t.id]
            return (
              <label key={t.id} className={`timeline-check${checked ? ' checked' : ''}`}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleEmpowered(t.id)}
                />
                <span>{t.name}</span>
              </label>
            )
          })}
        </div>
      </section>

      {/* ── Milestones ───────────────────────────────────────────────────── */}
      <section className="tracker-section">
        <h2 className="tracker-section-title">Milestones</h2>
        {milestoneGroups.map(group => (
          <div key={group.id} className="milestone-group">
            <div className="milestone-group-title">{group.title}</div>
            <div className="milestone-list">
              {group.milestones.map(m => {
                const done = !!state.milestones[m.id]
                return (
                  <button
                    key={m.id}
                    className={`milestone-item${done ? ' done' : ''}`}
                    onClick={() => toggleMilestone(m.id)}
                  >
                    <input
                      type="checkbox"
                      checked={done}
                      onChange={() => toggleMilestone(m.id)}
                      onClick={e => e.stopPropagation()}
                    />
                    <div className="milestone-item-text">
                      <span className="milestone-label">{m.label}</span>
                      {m.description && (
                        <span className="milestone-desc">{m.description}</span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </section>

      {/* ── Grand Blessings ──────────────────────────────────────────────── */}
      <section className="tracker-section">
        <h2 className="tracker-section-title">Grand Blessings</h2>
        <div className="blessing-grid">
          {blessingTargets.map(target => {
            const entry = state.blessings[target.timelineId] ?? {
              acquired: false,
              selectedOption: '',
              roll: '',
            }
            const timeline = timelines.find(t => t.id === target.timelineId)!
            const isAny = target.options.length === 1 && target.options[0] === 'Any'

            return (
              <div
                key={target.timelineId}
                className={`blessing-card${entry.acquired ? ' acquired' : ''}`}
              >
                {/* Header row */}
                <div className="blessing-card-header">
                  <span className="blessing-timeline-name">{timeline.name}</span>
                  <label className="blessing-acquired-toggle">
                    <input
                      type="checkbox"
                      checked={entry.acquired}
                      onChange={() => updateBlessing(target.timelineId, { acquired: !entry.acquired })}
                    />
                    <span className="blessing-acquired-label">Acquired</span>
                  </label>
                </div>

                {/* Blessing selection */}
                {isAny ? (
                  <input
                    className="blessing-any-input"
                    type="text"
                    placeholder="Enter blessing name…"
                    value={entry.selectedOption}
                    onChange={e =>
                      updateBlessing(target.timelineId, { selectedOption: e.target.value })
                    }
                  />
                ) : (
                  <div className="blessing-options">
                    {target.options.map(opt => (
                      <button
                        key={opt}
                        className={`blessing-pill${entry.selectedOption === opt ? ' selected' : ''}`}
                        onClick={() =>
                          updateBlessing(target.timelineId, {
                            selectedOption: entry.selectedOption === opt ? '' : opt,
                          })
                        }
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {/* Roll input */}
                <div className="blessing-roll-row">
                  <span className="blessing-roll-label">Roll</span>
                  <input
                    className="blessing-roll-input"
                    type="text"
                    placeholder="e.g. 35"
                    value={entry.roll}
                    onChange={e =>
                      updateBlessing(target.timelineId, { roll: e.target.value })
                    }
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
