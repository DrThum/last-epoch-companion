export interface ChecklistStep {
  id: string
  title: string
  summary: string
  details: string[]
  callout?: string      // highlighted warning/tip
  tag?: 'Season 4'
}

export interface KnowledgeTopic {
  id: string
  title: string
  subtitle: string
  steps: ChecklistStep[]
}

export const endgameProgression: KnowledgeTopic = {
  id: 'endgame-progression',
  title: 'Endgame Progression',
  subtitle: 'What to do once you hit the Monolith of Fate',
  steps: [
    {
      id: 'enter-monolith',
      title: 'Enter the Monolith of Fate',
      summary: 'Your core endgame loop. Unlocked post-campaign at the End of Time.',
      details: [
        'The Monolith has multiple Timelines, each with its own Echo Web and boss.',
        'Run Echoes to build Stability, then spend Stability to unlock Quest Echoes and the Timeline Boss.',
        'Completing a boss awards a Blessing choice (permanent character buff) and may unlock new Timelines.',
        'Echoes farther from the Timeline center give more Stability and have better rewards.',
        'You can only hold one Blessing per Timeline — choose wisely, but you can re-roll by killing the boss again.',
      ],
    },
    {
      id: 'normal-timelines',
      title: 'Clear all Normal Timelines',
      summary: 'Beat every Normal Timeline boss at least once. Grab blessings, gear up, and prepare for Empowered.',
      details: [
        'Normal Timelines are area level 58–90, capped at 50 Corruption.',
        'Any resistance blessings from Normal Timelines help cap resists while you gear up.',
        'Prioritise your build\'s most impactful blessing timelines first — check your build guide.',
        'To unlock Empowered Monoliths you must complete three specific Timelines: Spirits of Fire, The Last Ruin, and The Age of Winter.',
      ],
      callout: 'Don\'t farm Normal Timelines for too long — the real loop starts in Empowered.',
    },
    {
      id: 'unlock-empowered',
      title: 'Unlock Empowered Monoliths',
      summary: 'Complete Spirits of Fire, The Last Ruin, and The Age of Winter in Normal mode.',
      details: [
        'All Empowered Timelines unlock simultaneously once those three are beaten.',
        'Empowered starts at 100 Corruption, is all level 100, and scales infinitely.',
        'LP Uniques (required for Legendary crafting) and Grand Blessings only drop in Empowered.',
        'Normal and Empowered Timelines share the same Corruption meter — pushing one pushes all.',
      ],
    },
    {
      id: 'push-corruption',
      title: 'Push Corruption via the Shade of Orobyss',
      summary: 'Find and kill the Shade in outer Echoes to increase Corruption. More Corruption = harder enemies + better loot.',
      details: [
        'Kill the Timeline Boss first to earn Gaze of Orobyss stacks.',
        'The Shade consumes ALL your Gazes for a big Corruption boost — stack them up before facing it.',
        'Outer Echoes (farther from the Timeline center) have higher Shade spawn rates.',
        'Corruption boosts item rarity in two ways: directly, and by raising Echo modifier ceilings.',
        'At 200 Corruption, Timeline Bosses offer a 5th Blessing option.',
      ],
      callout: 'Dying to the Shade removes all your Gazes. Don\'t fight it underprepared.',
    },
    {
      id: 'grand-blessings',
      title: 'Farm Grand Blessings',
      summary: 'Kill Empowered Timeline bosses repeatedly to get your ideal blessing at a high roll.',
      details: [
        'Each boss kill gives you a new Blessing choice — keep going until you hit your target.',
        'Grand Blessings have significantly higher stat values than their Normal equivalents.',
        'Push to 200 Corruption before farming a given timeline boss to get the 5th option.',
        'Check your build guide for which blessing to chase in each timeline.',
        'Prioritise timelines that provide offensive or defensive blessings directly relevant to your build.',
      ],
    },
    {
      id: 'hunt-lp-uniques',
      title: 'Hunt LP Uniques & Matching Exalted Items',
      summary: 'LP Uniques (for Legendary crafting) only drop in Empowered Monoliths. Collect matching Exalted items in parallel.',
      details: [
        'LP (Legendary Potential) is a property on Unique items — values 0 to 4. Higher LP = more affixes transferred when crafting.',
        '0 LP Uniques can\'t be crafted onto — use them in Nemesis Eggs or as Weaver Tree imprint fuel.',
        'For each LP Unique you want to craft, you also need an Exalted item of the same slot type with 4 filled affix slots.',
        'CoF faction: Imprinting your target Unique in the Weaver Tree increases its drop rate.',
        'Check your build guide for which Uniques to target and which affixes to prioritise for imprinting.',
      ],
      callout: 'You need several copies of a Unique to iterate on bad LP affix rolls — start stockpiling early.',
    },
    {
      id: 'temporal-sanctum',
      title: 'Craft Legendaries in Temporal Sanctum',
      summary: 'Bring a Dungeon Key + LP Unique + matching Exalted item. Use the Eternity Cache at the end of the dungeon.',
      details: [
        'Temporal Sanctum Keys drop from Empowered Monolith Echoes.',
        'At the final room: place both items in the Eternity Cache while in Divine Era → Seal Cache → Temporal Shift.',
        'Affixes transferred = LP value of the Unique, chosen randomly from the Exalted item\'s affixes.',
        'Sealed affixes on the Exalted item are never chosen — don\'t seal the ones you want transferred.',
        'Select dungeon tier based on the item level you need for the resulting Legendary.',
        'If you get bad affix rolls, you\'ll need another copy of the LP Unique + a new Exalted item.',
      ],
      callout: 'Stock multiple copies of your target Unique before spending keys — RNG on affixes is brutal.',
    },
    {
      id: 'omen-windows',
      title: 'Engage Omen Windows',
      summary: 'Horde encounters scattered across Monolith Echoes. Primary source of Timeglass Fragments and Corrupted items.',
      tag: 'Season 4',
      details: [
        'Step into the glowing ring to trigger waves of Fractured Enemies, followed by a stronger Omen boss.',
        'Higher tier Omen Windows drop more Timeglass Fragments and have better odds for Corrupted items.',
        'Timeglass Fragments are spent with Apophis (center of the Monolith) for rewards and spawning specific Echo Chains.',
        'Echo Chains are linked series of Echoes ending in a more challenging, higher-reward encounter.',
        'Don\'t skip Omen Windows — Timeglass Fragments fuel the new seasonal systems.',
      ],
    },
    {
      id: 'corruption-crafting',
      title: 'Corruption Crafting',
      summary: 'Apply a Rune of Corruption to an item for powerful but unpredictable bonuses. Permanently removes all remaining Forging Potential.',
      tag: 'Season 4',
      details: [
        'Rune of Corruption drops from Omen bosses and can also be obtained via Timeglass Fragments.',
        'Once applied, the item loses all remaining Forging Potential and cannot be modified further.',
        'Corrupted amulets can convert base attributes into new stat types — with a powerful upside and a meaningful downside.',
        'If the result is terrible, shatter the item to recover affixes as Shards.',
        'This is a late-game system — only corrupt an item you are fully committed to.',
      ],
      callout: 'Never corrupt early or casually. The irreversibility makes this a commitment.',
    },
    {
      id: 'pinnacle-bosses',
      title: 'Challenge Pinnacle Bosses',
      summary: 'Aberroth requires completing a questline at ~300 Corruption. Vision of the Observer (new S4 boss) requires 400+ Corruption.',
      tag: 'Season 4',
      details: [
        'Aberroth: Complete the Empowered Monolith questline to unlock. The traditional pinnacle boss.',
        'Vision of the Observer: New Season 4 boss. Found in the Fractured Prison, accessed via Omen\'s Veil.',
        'Vision of the Observer is positioned above Aberroth in difficulty — don\'t rush it.',
        'Both bosses drop exclusive loot not found anywhere else.',
        'These are the ultimate benchmark for your character\'s power and gear.',
      ],
    },
  ],
}
