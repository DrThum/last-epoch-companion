// ── Progress Tracker Data ─────────────────────────────────────────────────────
// Witchfire Warlock — Season progression from Monoliths onward

export interface TrackerTimeline {
  id: string
  name: string
}

export interface BlessingTarget {
  timelineId: string
  /** Specific blessing names to choose from, or ['Any'] for free-choice timelines */
  options: string[]
}

export interface Milestone {
  id: string
  label: string
  description?: string
}

export interface MilestoneGroup {
  id: string
  title: string
  milestones: Milestone[]
}

// ── Timelines (normal + empowered share these) ────────────────────────────────

export const timelines: TrackerTimeline[] = [
  { id: 'black-sun', name: 'The Black Sun' },
  { id: 'ending-storm', name: 'Ending the Storm' },
  { id: 'reign-dragons', name: 'Reign of Dragons' },
  { id: 'age-winter', name: 'The Age of Winter' },
  { id: 'spirits-fire', name: 'Spirits of Fire' },
  { id: 'fall-outcasts', name: 'Fall of the Outcasts' },
  { id: 'stolen-lance', name: 'The Stolen Lance' },
  { id: 'blood-frost-death', name: 'Blood, Frost, and Death' },
  { id: 'fall-empire', name: 'Fall of the Empire' },
  { id: 'last-ruin', name: 'The Last Ruin' },
]

// ── Blessing targets (Witchfire Warlock) ──────────────────────────────────────

export const blessingTargets: BlessingTarget[] = [
  { timelineId: 'black-sun',        options: ['Grand Flames of the Black Sun'] },
  { timelineId: 'ending-storm',     options: ['Grand Grace of Water', 'Grand Resonance of the Sea'] },
  { timelineId: 'reign-dragons',    options: ['Grand Dream of Eterra', 'Grand Resolve of Humanity'] },
  { timelineId: 'age-winter',       options: ['Grand Bulwark of the Tundra', 'Grand Bones of Eternity'] },
  { timelineId: 'spirits-fire',     options: ['Grand Body of Obsidian', 'Grand Flames of Calamity'] },
  { timelineId: 'fall-outcasts',    options: ['Grand Strength of Mind'] },
  { timelineId: 'stolen-lance',     options: ['Grand Slumber of Morditas', 'Grand Arrogance of Argentus'] },
  { timelineId: 'blood-frost-death', options: ['Grand Resolve of Frost', 'Grand Cruelty of Formusus'] },
  { timelineId: 'fall-empire',      options: ['Any'] },
  { timelineId: 'last-ruin',        options: ['Any'] },
]

// ── Milestone groups ──────────────────────────────────────────────────────────

export const milestoneGroups: MilestoneGroup[] = [
  {
    id: 'build',
    title: 'Build Milestones',
    milestones: [
      {
        id: 'equip-downfall',
        label: 'Equip Downfall of the Righteous',
        description: 'Unique amulet — enables Bone Curse auto-application. The core unique of this build. Farm or trade for it ASAP.',
      },
      {
        id: 'craft-sinathia',
        label: 'Craft T8 Sinathia\'s Mace',
        description: 'Primary weapon. Requires a T7+ Sinathia\'s base with Melee Physical Damage crafted to T8.',
      },
    ],
  },
  {
    id: 'corruption',
    title: 'Corruption Goals',
    milestones: [
      {
        id: 'corruption-200-all',
        label: '200 Corruption on all timelines',
        description: 'Unlocks the 5th grand blessing tier on each timeline. Push each one past 200 before farming blessings.',
      },
      {
        id: 'corruption-300-priority',
        label: '300+ on priority timelines',
        description: 'Black Sun, Fall of the Outcasts, Spirits of Fire, Stolen Lance, Blood Frost & Death.',
      },
      {
        id: 'corruption-400-pinnacle',
        label: '400+ Corruption on Last Ruin',
        description: 'Required to unlock the Aberroth encounter.',
      },
    ],
  },
  {
    id: 'pinnacle',
    title: 'Pinnacle Bosses',
    milestones: [
      {
        id: 'kill-aberroth',
        label: 'Kill Aberroth',
        description: 'The current cycle pinnacle boss. Requires 400+ Corruption on The Last Ruin.',
      },
      {
        id: 'kill-vision',
        label: 'Kill Vision of the Observer',
        description: 'Woven dungeon pinnacle boss. Requires completing the Weaver tree to unlock.',
      },
    ],
  },
]
