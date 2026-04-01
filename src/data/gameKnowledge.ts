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

export const wovenfaction: KnowledgeTopic = {
  id: 'woven-faction',
  title: 'The Woven Faction & Weaver Tree',
  subtitle: 'Reputation, Tombs, Cemeteries, and shaping your Monolith runs',
  steps: [
    {
      id: 'join-woven',
      title: 'Join the Woven Faction',
      summary: 'Available from normal Monolith onward. Complete your first Cemetery of the Erased to unlock it.',
      details: [
        'Find a Cemetery of the Erased while running Echoes — it appears as a special side zone on the Echo Web.',
        'After completing it, talk to Masque (the spider NPC in the End of Time) to officially join.',
        'Unlike item factions (CoF / Merchant\'s Guild), The Woven is an endgame faction — you can join multiple endgame factions simultaneously.',
        'Masque sells Woven Echoes (custom Echo modifiers) and gives access to the Weaver Tree.',
        'Don\'t wait for Empowered Monoliths — join as soon as you can.',
      ],
    },
    {
      id: 'memory-amber',
      title: 'Farm Memory Amber to Gain Reputation',
      summary: 'Memory Amber drops from "Touched by the Weaver" enemies. Both collecting and spending it increases your rank.',
      details: [
        'Touched by the Weaver enemies glow and drop blue/yellow Memory Amber orbs on death.',
        'The Woven has 10 ranks. Each rank grants +1 Weaver Tree point and unlocks more Woven Echoes to buy from Masque.',
        'Memory Amber is also spent to purchase Woven Echoes from Masque and to respec the Weaver Tree.',
        'Primary farming source: Tombs and Cemeteries — they have the highest density of Touched by the Weaver enemies.',
        'The Weaver Tree is fully respecable at any time for Memory Amber — don\'t overthink early allocation.',
      ],
    },
    {
      id: 'tombs',
      title: 'Tombs of the Erased',
      summary: 'Mini-dungeons nested inside regular Echoes. Your primary source of Memory Amber — always run them.',
      details: [
        'Found as sub-zones within regular Monolith Echoes. Look for a special entrance in the Echo.',
        'Dense with Touched by the Weaver enemies → high Memory Amber yield per minute.',
        'The end boss drops loot and lets you enchant class-specific idols with Weaver modifiers.',
        'On completion, you are teleported back to where you entered the Echo — no time lost.',
        'Weaver Tree node: Burial Grounds (3 pts) increases pack size inside Tombs.',
        'Weaver Tree node: Graveyard Prisons — guarantees a Rune Prison with a Possessed Exiled Mage inside.',
      ],
    },
    {
      id: 'cemeteries',
      title: 'Cemeteries of the Erased',
      summary: 'Full side-echoes in the Monolith web. Completing one lets you place a Woven Echo on your timeline.',
      details: [
        'Larger than Tombs — function as a complete Echo, not just a sub-zone of one.',
        'On completion, interact with the Weaver Altar to place a Woven Echo directly onto your timeline\'s Echo web.',
        'End boss: the First Woven. Tougher than Tomb bosses, but better rewards.',
        'Includes access to the Map Modification Pedestal for slotting and managing Woven Echoes.',
        'Weaver Tree node: Grand Catacombs (3 pts) increases Tomb and Cemetery spawn rates.',
        'Weaver Tree node: Graveborn Paths (2 pts) makes Cemeteries a common spawn in your Echoes.',
      ],
    },
    {
      id: 'weaver-tree',
      title: 'Build Your Weaver Tree',
      summary: 'A passive tree that shapes what appears in your Monolith runs. Points come from ranks (10) and completing Woven Echoes for the first time.',
      details: [
        'Controls Echo spawn rates, reward types, difficulty, and which special mechanics appear.',
        'Points: one per Woven Faction rank (10 total) + one per unique Woven Echo completed for the first time.',
        'Fully respecable at any time for Memory Amber — your ideal setup shifts as your goals change.',
        'Early goal: rush Grand Catacombs + Graveborn Paths to increase Tomb/Cemetery frequency and accelerate amber income.',
        'Mid goal: move into item-targeting nodes (Echoing Riches, Commoner\'s Riches) once you know what you\'re farming.',
        'Season 4 new nodes: control Echo Chain frequency and alter which mechanics (Omens, Rift Beasts, Nemesis) appear in your runs.',
      ],
    },
    {
      id: 'notable-nodes',
      title: 'Notable Weaver Tree Nodes',
      summary: 'Key nodes by category. Respec freely as your priorities shift.',
      details: [
        '— TOMBS & CEMETERIES —',
        'Grand Catacombs (3 pts): More Tomb and Cemetery spawns. Core early node.',
        'Graveborn Paths (2 pts): Cemeteries become common in your Echoes.',
        'Burial Grounds (3 pts): Increased pack size in Tombs and Cemeteries → more amber per run.',
        'Necropolis of the Weaver (3 pts): Rare enemies in Tombs/Cemeteries have a higher chance to drop Woven Echoes.',
        '— CHAMPIONS & EXALTED DROPS —',
        'Heroic Gauntlet (3 pts): Champions are more common in Echoes.',
        'Duel Destruction: Champions can appear in pairs.',
        'Exalted Challenger (2 pts): Champions have a higher chance to drop extra Exalted items.',
        '— QUALITY OF LIFE —',
        'Eclipsed Battleground (1 pt): Removes Arena Echoes from your web. Recommended if your build clears poorly in arenas.',
        'Anchored Reality: Increased Stability from killing enemies — helps push Corruption faster.',
        '— SEASON 4 —',
        'New Echo Chain nodes: Increase the frequency of Echo Chains and alter their spawning behavior.',
        'New Omen nodes: Boost or suppress Omen Windows appearing in your Echoes.',
      ],
    },
    {
      id: 'imprinting',
      title: 'Imprint Items to Target-Farm',
      summary: 'Use Echoing Riches / Commoner\'s Riches nodes to make a specific item drop more often. One item at a time.',
      details: [
        'Commoner\'s Riches node: Place a weapon or jewelry item in the imprint slot — enemies in regular Echoes gain a small chance to drop similar items.',
        'Only one item can be imprinted at a time — pick whichever you\'re actively hunting.',
        'Great for farming build-specific Unique bases with LP. Check your build guide for which Uniques to target.',
        'CoF faction players get extra value here: pair imprinting with Prophecies targeting the same item type.',
        'Season 4 note: imprint proc frequency was nerfed — the effect is more deliberate, less passive rainfall.',
      ],
      callout: 'Imprinting Weaver\'s Will items also works — great if you\'re trying to get a high-WW version of a specific Unique.',
    },
    {
      id: 'weavers-will',
      title: "Weaver's Will Uniques",
      summary: "Special Uniques that grow stronger over time. Their affixes gain Tiers as you run Echoes — no Temporal Sanctum needed.",
      details: [
        "Weaver's Will value ranges 5–28. Higher value = more total affix Tiers the item can accumulate.",
        'Up to 4 new affixes (2 prefix, 2 suffix) can be added and upgraded up to Tier 7 each.',
        'Upgrade is pseudo-random: weighted towards upgrading an existing affix over adding a new one.',
        "28 Weaver's Will guarantees 4 affixes each at Tier 7 — the theoretical max.",
        "Unlike Legendary crafting, Weaver's Will items improve passively just by being equipped while you play.",
        'The Woven faction has nodes that increase the chance of finding Weaver\'s Will items.',
      ],
    },
  ],
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

export const topics: KnowledgeTopic[] = [endgameProgression, wovenfaction]
