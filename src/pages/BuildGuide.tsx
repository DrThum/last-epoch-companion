import { useEffect, useRef, useState } from 'react'
import GearSlotCard from '../components/GearSlotCard'
import {
  gear,
  idols,
  blessings,
  skills,
  keyPassives,
  tips,
  globalSuffixPriorities,
  globalPrefixPriorities,
} from '../data/witchfireWarlock'
import './BuildGuide.css'

const SECTIONS = [
  { id: 'gear', label: 'Gear' },
  { id: 'idols', label: 'Idols' },
  { id: 'blessings', label: 'Blessings' },
  { id: 'skills', label: 'Skills' },
  { id: 'passives', label: 'Passives' },
  { id: 'tips', label: 'Tips & FAQ' },
]

export default function BuildGuide() {
  const [activeSection, setActiveSection] = useState('gear')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0px -75% 0px' }
    )
    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observerRef.current!.observe(el)
    })
    return () => observerRef.current?.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="build-guide">
      {/* ── Build header ─────────────────────────────── */}
      <div className="build-header">
        <div className="build-header-meta">
          <span className="build-class-badge">Acolyte · Warlock</span>
          <span className="build-patch">1.4 – Shattered Omens</span>
        </div>
        <h1 className="build-title">Witchfire Warlock</h1>
        <p className="build-summary">
          Burns enemies with Witchfire — a single-stack Fire &amp; Necrotic DoT ailment applied
          passively once you simultaneously hold 25 Ignite stacks and 20 Damned stacks.
          No target cap, 100% passive AoE cleave, comfortable up to 500+ corruption.
        </p>
        <div className="build-tags">
          {['DoT', 'Monolith Farmer', 'Arena', 'Season Starter', 'Beginner'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="build-pros-cons">
          <div className="pros">
            <h4>Pros</h4>
            <ul>
              <li>Most damage is passive — minimal button presses</li>
              <li>100% passive cleave &amp; AoE, no target cap</li>
              <li>Uniques not required until late game</li>
            </ul>
          </div>
          <div className="cons">
            <h4>Cons</h4>
            <ul>
              <li>Acolyte is squishy to large single hits</li>
              <li>Witchfire requires stacking both Ignite and Damned first</li>
              <li>Buff management on bosses</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Section nav ──────────────────────────────── */}
      <nav className="section-nav">
        {SECTIONS.map(s => (
          <button
            key={s.id}
            className={['section-nav-btn', activeSection === s.id ? 'active' : ''].join(' ')}
            onClick={() => scrollTo(s.id)}
          >
            {s.label}
          </button>
        ))}
      </nav>

      {/* ── Gear ─────────────────────────────────────── */}
      <section id="gear" className="guide-section">
        <h2 className="section-heading">Gear</h2>

        <div className="priority-cards">
          <div className="priority-card card">
            <h4>Global Suffix Priorities</h4>
            <ul className="priority-list">
              {globalSuffixPriorities.map(p => (
                <li key={p.name}>
                  <span className="affix-tag suffix"><span className="affix-kind-label">S</span>{p.name}</span>
                  {p.note && <span className="priority-note">{p.note}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div className="priority-card card">
            <h4>Global Prefix Priorities</h4>
            <ul className="priority-list">
              {globalPrefixPriorities.map(p => (
                <li key={p.name}>
                  <span className="affix-tag prefix"><span className="affix-kind-label">P</span>{p.name}</span>
                  {p.note && <span className="priority-note">{p.note}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="gear-strategy-note">
          <strong>Endgame weapon goal:</strong> Solarum Hammer with T8{' '}
          <em>Sinathia's Dying Breath Reforged</em> set affix. Start with a well-rolled Profane
          Wand (DoT + Elemental DoT + Chance to Ignite on Hit) — it's comparable until you get a
          good mace. Carelessly slapping the set affix onto a bad mace will lower your damage.
          Get a T7 exalted mace first, apply the set affix, shuffle tiers, then use Rune of
          Evolution to upgrade to T8.
        </p>

        <div className="gear-grid">
          {gear.map(slot => (
            <GearSlotCard key={slot.slug} slot={slot} />
          ))}
        </div>
      </section>

      {/* ── Idols ─────────────────────────────────────── */}
      <section id="idols" className="guide-section">
        <h2 className="section-heading">Idols</h2>
        <p className="section-intro">
          Any idol with a resistance suffix to cap resists is useful. For Season 4 Idol Altars,
          look for modifiers that amplify offensive prefixes or defensive suffixes.
          Weaver Enchantments: Damage Over Time, Ward Generation, Health, or Critical Damage
          Reduction. Corruption to hunt: Ward Per Second.
        </p>
        <div className="idol-grid">
          {idols.map(idol => (
            <div key={idol.type} className="idol-card card">
              <h4 className="idol-type">{idol.type}</h4>
              <div className="affix-group">
                {idol.prefixes.map((p, i) => (
                  <span key={i} className="affix-tag prefix">
                    <span className="affix-kind-label">P</span>{p}
                  </span>
                ))}
                {idol.suffixes.map((s, i) => (
                  <span key={i} className="affix-tag suffix">
                    <span className="affix-kind-label">S</span>{s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Blessings ─────────────────────────────────── */}
      <section id="blessings" className="guide-section">
        <h2 className="section-heading">Blessings</h2>
        <p className="section-intro">
          Get resistances from regular Monolith blessings while gearing mid-game. Push each
          Empowered timeline to 200 Corruption to unlock the 5th blessing choice.
          Stolen Lance boosts armour drop rates · Blood, Frost &amp; Death boosts weapon drop
          rates · Spirits of Fire is offensive or defensive depending on choice.
        </p>
        <div className="blessings-table-wrap">
          <table className="blessings-table">
            <thead>
              <tr>
                <th>Timeline</th>
                <th>Blessings to chase</th>
              </tr>
            </thead>
            <tbody>
              {blessings.map(tb => (
                <tr key={tb.timeline}>
                  <td className="timeline-name">{tb.timeline}</td>
                  <td>
                    <div className="blessing-list">
                      {tb.blessings.map(b => (
                        <span key={b.name} className="blessing-entry">
                          <span className={b.name === 'Any' ? 'blessing-any' : 'blessing-name'}>
                            {b.name}
                          </span>
                          {b.note && <span className="blessing-note"> — {b.note}</span>}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────── */}
      <section id="skills" className="guide-section">
        <h2 className="section-heading">Skills</h2>
        <p className="section-intro">
          Full skill tree allocations are in the{' '}
          <a
            href="https://www.lastepochtools.com/build-guides/witchfire-warlock"
            target="_blank"
            rel="noreferrer"
          >
            original guide's build planner
          </a>
          . Key roles and notes below.
        </p>
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.name} className="skill-card card">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-points tag">{skill.points} pts</span>
              </div>
              <p className="skill-role">{skill.role}</p>
              {skill.notes.length > 0 && (
                <ul className="skill-notes">
                  {skill.notes.map((n, i) => <li key={i}>{n}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Passives ──────────────────────────────────── */}
      <section id="passives" className="guide-section">
        <h2 className="section-heading">Key Passives</h2>
        <p className="section-intro">
          Acolyte 20 pts → Warlock 93 pts → Weaver Tree 53 pts. Full allocation in the build
          planner. The nodes below are the ones that define the build's behaviour.
        </p>
        <div className="passives-list">
          {keyPassives.map(node => (
            <div key={node.name} className="passive-row card">
              <div className="passive-header">
                <span className="passive-name">{node.name}</span>
                <span className="passive-points tag">{node.points}</span>
              </div>
              <p className="passive-desc">{node.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tips & FAQ ────────────────────────────────── */}
      <section id="tips" className="guide-section">
        <h2 className="section-heading">Tips &amp; FAQ</h2>
        <div className="tips-list">
          {tips.map(tip => (
            <details key={tip.q} className="tip-item card">
              <summary className="tip-question">{tip.q}</summary>
              <p className="tip-answer">{tip.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
