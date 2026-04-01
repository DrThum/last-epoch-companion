import { useState } from 'react'
import type { GearSlot } from '../data/witchfireWarlock'
import './GearSlotCard.css'

export default function GearSlotCard({ slot }: { slot: GearSlot }) {
  const [activeModeIdx, setActiveModeIdx] = useState(0)
  const mode = slot.modes[activeModeIdx]
  const hasToggle = slot.modes.length > 1

  const prefixes = mode.affixes.filter(a => a.kind === 'prefix')
  const suffixes = mode.affixes.filter(a => a.kind === 'suffix')

  return (
    <div className={`gear-card card ${mode.kind === 'unique' ? 'is-unique' : ''}`}>
      <div className="gear-card-head">
        <span className="gear-slot-name">{slot.slot}</span>
        {hasToggle ? (
          <div className="gear-toggle">
            {slot.modes.map((m, i) => (
              <button
                key={m.id}
                className={['gear-toggle-btn', activeModeIdx === i ? 'active' : '', m.kind].join(' ')}
                onClick={() => setActiveModeIdx(i)}
              >
                {m.label}
              </button>
            ))}
          </div>
        ) : (
          <span className={`gear-item-badge ${mode.kind}`}>{mode.label}</span>
        )}
      </div>

      {hasToggle && (
        <div className="gear-active-item">
          <span className={`gear-item-badge ${mode.kind}`}>{mode.label}</span>
          {mode.kind === 'unique' && (
            <span className="lp-label">LP imprint targets</span>
          )}
        </div>
      )}

      {mode.note && <p className="gear-mode-note">{mode.note}</p>}

      <div className="gear-affixes">
        {prefixes.length > 0 && (
          <div className="affix-group">
            {prefixes.map((a, i) => (
              <span key={i} className="affix-tag prefix">
                <span className="affix-kind-label">P</span>
                {a.name}
              </span>
            ))}
          </div>
        )}
        {suffixes.length > 0 && (
          <div className="affix-group">
            {suffixes.map((a, i) => (
              <span key={i} className="affix-tag suffix">
                <span className="affix-kind-label">S</span>
                {a.name}
              </span>
            ))}
          </div>
        )}
      </div>

      {slot.note && <p className="gear-slot-note">{slot.note}</p>}
    </div>
  )
}
