export type AffixKind = 'prefix' | 'suffix'

export interface Affix {
  name: string
  kind: AffixKind
}

export interface GearMode {
  id: string
  label: string
  kind: 'crafted' | 'unique'
  affixes: Affix[]       // crafted: craft these | unique: LP imprint targets (in priority order)
  note?: string
}

export interface GearSlot {
  slot: string
  slug: string
  modes: GearMode[]      // length > 1 → toggle shown
  note?: string
}

export interface Idol {
  type: string
  prefixes: string[]
  suffixes: string[]
  note?: string
}

export interface Blessing {
  name: string
  note?: string
}

export interface TimelineBlessing {
  timeline: string
  blessings: Blessing[]
}

export interface SkillInfo {
  name: string
  points: number
  role: string
  notes: string[]
}

export interface PassiveNode {
  name: string
  points: string
  description: string
}

// ── Gear ─────────────────────────────────────────────────────────────────────

export const gear: GearSlot[] = [
  {
    slot: 'Helmet',
    slug: 'helmet',
    modes: [
      {
        id: 'crafted',
        label: 'Necropolis Helm',
        kind: 'crafted',
        affixes: [
          { name: 'Chance to apply Damned on Hit', kind: 'prefix' },
          { name: 'Intelligence', kind: 'prefix' },
          { name: 'Necrotic Resistance', kind: 'suffix' },
          { name: 'Ward per Second', kind: 'suffix' },
          { name: 'Reduced Bonus Damage Taken from Critical Strikes', kind: 'suffix' },
        ],
      },
      {
        id: 'unique',
        label: 'Boneclamor Barbute',
        kind: 'unique',
        affixes: [
          { name: 'Chance to apply Damned on Hit', kind: 'prefix' },
          { name: 'Intelligence', kind: 'prefix' },
          { name: 'Necrotic Resistance', kind: 'suffix' },
          { name: 'Ward per Second', kind: 'suffix' },
        ],
      },
    ],
  },
  {
    slot: 'Body Armour',
    slug: 'body',
    modes: [
      {
        id: 'crafted',
        label: 'Immortal Regalia',
        kind: 'crafted',
        affixes: [
          { name: 'Chance to apply Damned on Hit', kind: 'prefix' },
          { name: 'Increased Spirit Frequency with Chthonic Fissure', kind: 'prefix' },
          { name: 'Armor and Reduced Bonus Damage from Crits', kind: 'suffix' },
          { name: 'Any Resistance', kind: 'suffix' },
          { name: 'Ward per Second', kind: 'suffix' },
        ],
      },
    ],
  },
  {
    slot: 'Gloves',
    slug: 'gloves',
    modes: [
      {
        id: 'crafted',
        label: 'Eternal Gauntlets',
        kind: 'crafted',
        affixes: [
          { name: 'Damage Over Time', kind: 'prefix' },
          { name: "Zerrick's Greed Reforged", kind: 'prefix' },
          { name: 'Cast Speed', kind: 'prefix' },
          { name: 'Any Resistance', kind: 'suffix' },
          { name: 'Health or Ward Generation', kind: 'suffix' },
        ],
      },
    ],
  },
  {
    slot: 'Belt',
    slug: 'belt',
    modes: [
      {
        id: 'crafted',
        label: 'Spidersilk Sash',
        kind: 'crafted',
        affixes: [
          { name: 'Elemental Damage Over Time', kind: 'prefix' },
          { name: 'Fire Damage', kind: 'prefix' },
          { name: 'Any Resistance', kind: 'suffix' },
          { name: 'Reduced Bonus Damage Taken from Critical Strikes', kind: 'suffix' },
          { name: 'Health / Ward / Armor', kind: 'suffix' },
        ],
      },
    ],
  },
  {
    slot: 'Boots',
    slug: 'boots',
    modes: [
      {
        id: 'crafted',
        label: 'Citadel Boots',
        kind: 'crafted',
        affixes: [
          { name: 'Movement Speed', kind: 'prefix' },
          { name: 'Any Resistance', kind: 'suffix' },
          { name: 'Reduced Bonus Damage Taken from Critical Strikes', kind: 'suffix' },
          { name: 'Ward / Health / Armor', kind: 'suffix' },
        ],
      },
      {
        id: 'unique',
        label: 'Ash Wake',
        kind: 'unique',
        affixes: [
          { name: 'Movement Speed', kind: 'prefix' },
          { name: 'Any Resistance', kind: 'suffix' },
          { name: 'Reduced Bonus Damage Taken from Critical Strikes', kind: 'suffix' },
        ],
        note: 'Greatly amplifies Fire damage. Swap Spirit Plague tree for Aura of Decay if using.',
      },
    ],
  },
  {
    slot: 'Relic',
    slug: 'relic',
    note: 'First priority unique — enables passive Witchfire application.',
    modes: [
      {
        id: 'crafted',
        label: 'Damned Souls',
        kind: 'crafted',
        affixes: [
          { name: 'Damage Over Time', kind: 'prefix' },
          { name: 'Elemental Damage Over Time', kind: 'prefix' },
          { name: 'Fire Damage', kind: 'prefix' },
          { name: 'Necrotic Resistance', kind: 'suffix' },
        ],
      },
      {
        id: 'unique',
        label: 'Downfall of the Righteous',
        kind: 'unique',
        affixes: [
          { name: 'Damage Over Time', kind: 'prefix' },
          { name: 'Elemental Damage Over Time', kind: 'prefix' },
          { name: 'Fire Damage', kind: 'prefix' },
        ],
        note: 'Required for passive Witchfire. Also scales Increased Curse Damage via Sinathia\'s set affix.',
      },
    ],
  },
  {
    slot: 'Main-Hand',
    slug: 'mainhand',
    note: "A well-rolled Profane Wand (DoT + Elemental DoT + Chance to Ignite on Hit) is comparable to a bad mace. Don't rush the swap.",
    modes: [
      {
        id: 'crafted',
        label: 'Solarum Hammer / Profane Wand',
        kind: 'crafted',
        affixes: [
          { name: 'Damage Over Time', kind: 'prefix' },
          { name: "Sinathia's Dying Breath Reforged (T8, mace only — endgame goal)", kind: 'prefix' },
          { name: 'Chance to Ignite on Hit', kind: 'suffix' },
          { name: 'Chance to Chill on Hit', kind: 'suffix' },
        ],
      },
      {
        id: 'unique',
        label: "Firestarter's Torch / Avenged Chitin Club",
        kind: 'unique',
        affixes: [
          { name: 'Damage Over Time', kind: 'prefix' },
          { name: 'Chance to Ignite on Hit', kind: 'suffix' },
        ],
        note: "Avenged Chitin Club boosts Ward generation. Firestarter's Torch for pure damage.",
      },
    ],
  },
  {
    slot: 'Off-Hand',
    slug: 'offhand',
    modes: [
      {
        id: 'crafted',
        label: 'Opulent Focus',
        kind: 'crafted',
        affixes: [
          { name: 'Damage Over Time', kind: 'prefix' },
          { name: 'Fire Damage', kind: 'prefix' },
          { name: 'Any Resistance', kind: 'suffix' },
        ],
      },
      {
        id: 'unique',
        label: 'Cradle of the Erased',
        kind: 'unique',
        affixes: [
          { name: 'Damage Over Time', kind: 'prefix' },
          { name: 'Fire Damage', kind: 'prefix' },
        ],
        note: '~50% Block Chance + Ward on Block. Defensive option. Pair with Avenged Chitin Club.',
      },
    ],
  },
  {
    slot: 'Ring 1',
    slug: 'ring1',
    modes: [
      {
        id: 'crafted',
        label: 'Ivory Ring',
        kind: 'crafted',
        affixes: [
          { name: 'Damage Over Time', kind: 'prefix' },
          { name: 'Elemental Damage Over Time', kind: 'prefix' },
          { name: 'Necrotic Resistance', kind: 'suffix' },
          { name: 'Ward Per Second and Ward Decay Threshold', kind: 'suffix' },
        ],
      },
      {
        id: 'unique',
        label: 'Ashes of Mortality',
        kind: 'unique',
        affixes: [
          { name: 'Damage Over Time', kind: 'prefix' },
          { name: 'Elemental Damage Over Time', kind: 'prefix' },
          { name: 'Necrotic Resistance', kind: 'suffix' },
        ],
      },
    ],
  },
  {
    slot: 'Ring 2',
    slug: 'ring2',
    modes: [
      {
        id: 'crafted',
        label: 'Ivory Ring',
        kind: 'crafted',
        affixes: [
          { name: 'Damage Over Time', kind: 'prefix' },
          { name: 'Elemental Damage Over Time', kind: 'prefix' },
          { name: 'Any Resistance', kind: 'suffix' },
          { name: 'Ward / Health / Critical Avoidance', kind: 'suffix' },
        ],
      },
      {
        id: 'unique',
        label: 'Ashes of Mortality',
        kind: 'unique',
        affixes: [
          { name: 'Damage Over Time', kind: 'prefix' },
          { name: 'Elemental Damage Over Time', kind: 'prefix' },
        ],
      },
    ],
  },
  {
    slot: 'Amulet',
    slug: 'amulet',
    modes: [
      {
        id: 'crafted',
        label: 'Bone Amulet',
        kind: 'crafted',
        affixes: [
          { name: 'Damage Over Time', kind: 'prefix' },
          { name: 'Elemental Damage Over Time', kind: 'prefix' },
          { name: 'Chance to Ignite on Hit', kind: 'suffix' },
          { name: 'Necrotic Resistance', kind: 'suffix' },
        ],
      },
      {
        id: 'unique',
        label: 'Pearls of the Swine',
        kind: 'unique',
        affixes: [
          { name: 'Chance to Ignite on Hit', kind: 'suffix' },
          { name: 'Damage Over Time', kind: 'prefix' },
          { name: 'Elemental Damage Over Time', kind: 'prefix' },
          { name: 'Necrotic Resistance', kind: 'suffix' },
        ],
      },
    ],
  },
]

// ── Global suffix priorities ──────────────────────────────────────────────────

export const globalSuffixPriorities = [
  { name: '75% for every Resistance', note: 'Cap all resists before anything else' },
  { name: 'Reduced Bonus Damage Taken from Critical Strikes', note: 'Or Critical Strike Avoidance + Added Dodge Rating — pick one' },
  { name: 'Ward Per Second and Ward Decay Threshold', note: 'Or overcap Necrotic Resistance' },
  { name: 'Chance to Ignite on Hit', note: 'Core damage scaling via Grimhilde\'s Domain' },
]

export const globalPrefixPriorities = [
  { name: 'Damage Over Time', note: 'Scales 100% of Witchfire' },
  { name: 'Elemental Damage Over Time', note: 'Scales 100% of Witchfire' },
  { name: 'Fire Damage / Necrotic Damage', note: 'Only 50% effective — scales one half of Witchfire' },
  { name: 'Intelligence', note: 'Good stat for the build' },
]

// ── Idols ─────────────────────────────────────────────────────────────────────

export const idols: Idol[] = [
  {
    type: 'Heretical Large Immortal Idol',
    prefixes: ['Chance To Chill With Necrotic Skills', 'Ward Per Second and Increased Health'],
    suffixes: ['Increased Armor and Reduced bonus damage taken from critical hits', 'Ward decay threshold and Ward per second', 'Ward Retention'],
  },
  {
    type: 'Heretical Adorned Immortal Idol',
    prefixes: ['Increased Damage Over Time while you have an Ailment Overload'],
    suffixes: ['Ward decay threshold and Ward per second', 'Ward Retention'],
  },
  {
    type: 'Stout Weaver Idol',
    prefixes: ['Chance to Ignite on Hit and Fire Penetration with Ignite'],
    suffixes: ['Ward Per Second and Ward Retention'],
  },
  {
    type: 'Small Weaver Idol',
    prefixes: ['Increased Damage Over Time and Less Damage Over Time Taken'],
    suffixes: ['Necrotic Resistance and Minion Necrotic Resistance'],
  },
  {
    type: 'Large Immortal Idol',
    prefixes: ['Chance To Chill With Necrotic Skills'],
    suffixes: ['Ward Retention'],
  },
  {
    type: 'Stout Lagonian Idol',
    prefixes: ['Chance to Ignite on Hit'],
    suffixes: ['Shared Fire Damage'],
  },
]

// ── Blessings ─────────────────────────────────────────────────────────────────

export const blessings: TimelineBlessing[] = [
  {
    timeline: 'The Black Sun',
    blessings: [{ name: 'Grand Flames of the Black Sun' }],
  },
  {
    timeline: 'Ending the Storm',
    blessings: [
      { name: 'Grand Grace of Water' },
      { name: 'Grand Resonance of the Sea' },
    ],
  },
  {
    timeline: 'Reign of Dragons',
    blessings: [
      { name: 'Grand Dream of Eterra' },
      { name: 'Grand Resolve of Humanity' },
    ],
  },
  {
    timeline: 'The Age of Winter',
    blessings: [
      { name: 'Grand Bulwark of the Tundra', note: 'Block synergy if using Cradle of the Erased' },
      { name: 'Grand Bones of Eternity' },
    ],
  },
  {
    timeline: 'Spirits of Fire',
    blessings: [
      { name: 'Grand Body of Obsidian', note: 'Defensive choice' },
      { name: 'Grand Flames of Calamity', note: 'Offensive choice' },
    ],
  },
  {
    timeline: 'Fall of the Outcasts',
    blessings: [{ name: 'Grand Strength of Mind' }],
  },
  {
    timeline: 'The Stolen Lance',
    blessings: [
      { name: 'Grand Slumber of Morditas' },
      { name: 'Grand Arrogance of Argentus' },
    ],
  },
  {
    timeline: 'Blood, Frost, and Death',
    blessings: [
      { name: 'Grand Resolve of Frost' },
      { name: 'Grand Cruelty of Formusus' },
    ],
  },
  {
    timeline: 'Fall of the Empire',
    blessings: [{ name: 'Any' }],
  },
  {
    timeline: 'The Last Ruin',
    blessings: [{ name: 'Any' }],
  },
]

// ── Skills ────────────────────────────────────────────────────────────────────

export const skills: SkillInfo[] = [
  {
    name: 'Chthonic Fissure',
    points: 22,
    role: 'Core — keep active at all times. Creates a DoT area that fuels the build.',
    notes: [],
  },
  {
    name: 'Bone Curse',
    points: 20,
    role: 'Auto-applied via Downfall of the Righteous. Do not cast manually.',
    notes: [
      'For pure AoE: drop Reaper\'s Mark & Misery, take Marrow Thief 3/3',
      'Can also grab Bone Feast 2/2 by dropping Chilblains / Cultist\'s Fervor points',
    ],
  },
  {
    name: 'Spirit Plague',
    points: 20,
    role: 'Cast for the Pestilence 3/3 buff. Do not spam — one cast is enough.',
    notes: [
      'Rotten to the Core 5/5 is the key node',
      'For AoE: reduce Rotten to the Core to grab Contagion 1/1',
      'Swap entire tree for Aura of Decay if using Ash Wake',
    ],
  },
  {
    name: 'Chaos Bolts',
    points: 20,
    role: 'Main spammable skill. Stacks Ignite and Damned to trigger Witchfire.',
    notes: [
      'Optional once Downfall of the Righteous is equipped',
      'For AoE: take Seed of Chaos 1/1 to spread DoTs to scattered packs',
    ],
  },
  {
    name: 'Profane Veil',
    points: 20,
    role: 'Channel for Scorn 5/5 damage bonus + apply an extra curse for passive synergies.',
    notes: [
      'Scorn scales Witchfire base damage while channeling',
      'Synergises with Spiteful Decay 5/8 and Dark Protections 5/7',
    ],
  },
]

// ── Key Passives ──────────────────────────────────────────────────────────────

export const keyPassives: PassiveNode[] = [
  {
    name: "Grimhilde's Domain",
    points: '5/5',
    description: 'Main damage scaling node. Makes stacking Chance to Ignite on Hit and Chance to apply Damned on Hit the highest damage-per-point investment.',
  },
  {
    name: 'The Ashen One',
    points: '5/8 → 8/8',
    description: 'Enables early Witchfire application. First path to getting Witchfire before acquiring Downfall of the Righteous.',
  },
  {
    name: 'Chains of Ruin',
    points: '5/8',
    description: 'Provides Damned Overload. Required to trigger passive Witchfire via Downfall of the Righteous.',
  },
  {
    name: 'Infernal Lash',
    points: '5/8',
    description: 'Provides Ignite Overload. The other half of the passive Witchfire trigger condition.',
  },
  {
    name: 'Spiteful Decay',
    points: '5/8',
    description: 'Bonus damage when enemies are cursed. Pairs with Profane Veil curse application.',
  },
  {
    name: 'Dark Protections',
    points: '5/7',
    description: 'Defensive bonus from curses. Synergises with the same Profane Veil curse.',
  },
  {
    name: 'Doom Herald',
    points: '5/8',
    description: 'Defensive bonus while channeling Profane Veil. Optional — can reallocate into Aspect of Death, max The Ashen One, or Vessel of Chaos for more offence.',
  },
]

// ── FAQ / Tips ────────────────────────────────────────────────────────────────

export const tips = [
  {
    q: 'How does Witchfire scale?',
    a: "Witchfire is Fire + Necrotic DoT. Damage Over Time scales 100% of it. Fire Damage and Necrotic Damage each scale only 50%. Always prioritise Damage Over Time and Elemental Damage Over Time over element-specific prefixes. Main scaling comes from Grimhilde's Domain — so stacking Chance to Ignite on Hit and Chance to apply Damned on Hit is your primary damage lever.",
  },
  {
    q: 'Mana problems?',
    a: "Reallocate points from Mantle of Flames 3/4 → Fragile Crust 3/3. Or add Attunement / flat Mana on a ring or offhand. Removing Of Gloom and Flames 1/1 is a last resort but doesn't hurt much.",
  },
  {
    q: 'Unique item LP loop',
    a: '0 LP → Nemesis Egg. Still 0 LP → equip or hold as fuel. 1 LP → Farsight Turtle woven echo gamble. Bad affix rolls → Gauntlet of Strife woven echo reroll. Good item → corrupt for extra power (at your own risk).',
  },
  {
    q: "Why not Isadora's Set?",
    a: "Isadora's Set does not contribute to Grimhilde's Domain — it only reads Global Chance for Ailment, not the set bonus.",
  },
  {
    q: 'First endgame objective?',
    a: 'Find Downfall of the Righteous as soon as you hit Monoliths. Then clear every Empowered Monolith at least once. Then push 200 Corruption on high-value blessing timelines to unlock the 5th blessing choice.',
  },
]
