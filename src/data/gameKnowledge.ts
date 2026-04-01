export interface ChecklistStep {
  id: string
  title: string
  summary: string
  details: string[]
  callout?: string      // highlighted warning/tip
  tag?: 'Season 4' | 'Season 3'
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

export const riftBeasts: KnowledgeTopic = {
  id: 'rift-beasts',
  title: 'Rift Beasts & Primal Hunt',
  subtitle: 'Find Mysterious Rifts, evolve your beast, and farm Primordial materials',
  steps: [
    {
      id: 'what-is-primal-hunt',
      title: 'What is the Primal Hunt?',
      summary: 'An optional encounter system where you find and battle evolving Rift Beasts in exchange for Primordial Materials and exclusive items.',
      tag: 'Season 3',
      details: [
        'Available in both Campaign (from around level 10) and Monolith of Fate.',
        'Introduced in Season 3 (Beneath Ancient Skies) and remains available in Season 4.',
        'Entirely optional — but rewards are valuable for late-game crafting and Memory Amber farming.',
        'Core loop: find a rift → fight the beast → choose an Evolution → repeat to build a lineage.',
      ],
    },
    {
      id: 'find-mysterious-rift',
      title: 'Find a Mysterious Rift',
      summary: 'Look for the claw-mark icon on your minimap. Appears randomly in Campaign zones and Monolith Echoes.',
      details: [
        'Shows as a claw-mark symbol on the minimap — similar to Shrines or Rune Prisons.',
        'Entering transports you to an Ancient Cave where the Rift Beast and its nest are.',
        'Torn Rifts also exist and look identical on the map — but they summon the Rift Beast directly into your current zone instead of teleporting you.',
        'Read the rift description carefully before entering to know which type you\'re dealing with.',
        'Weaver Tree node: Nesting Grove adds Rift Beast encounters into nearby Echoes, making them easier to find.',
      ],
      callout: 'Torn Rifts spawn the beast in your current area alongside all other enemies — make sure you\'re ready before engaging.',
    },
    {
      id: 'ancient-cave',
      title: 'Fight Through the Ancient Cave',
      summary: 'Clear the cave to reach the Rift Beast boss. Skarven Bloodhorn accompanies you from the entrance.',
      details: [
        'Enemies inside Mysterious Rifts drop Ancient Bones instead of Gold — pick them up.',
        'Skarven Bloodhorn (NPC) assists you in combat and is also found at The Garden in Chapter 10.',
        'The Rift Beast boss has randomised modifiers, similar to a Nemesis encounter.',
        'Defeating the beast starts the Evolution selection — three unhatched eggs appear at its nest.',
      ],
    },
    {
      id: 'choose-evolution',
      title: 'Choose an Evolution',
      summary: 'Three eggs appear after each kill. Pick one hatchling — your choice determines the beast\'s new trait and what materials it drops next encounter.',
      details: [
        'Each Evolution adds a new trait to the beast (e.g., Shoulder Vines, Magma Head, elemental attacks).',
        'The bottom of each Evolution card shows which Primordial Material that path produces.',
        'Your choice persists — you\'re building a single evolving lineage across multiple encounters.',
        'Over 60 Evolution options exist, so each lineage develops uniquely.',
        'Pick based on what materials you need AND what mechanics your build can handle (e.g., avoid add-heavy if your AoE is weak).',
      ],
    },
    {
      id: 'build-lineage',
      title: 'Build Your Lineage',
      summary: 'A lineage holds up to 4 Evolutions by default. Woven Echo "Rampant Coast" raises the cap to 7. Max lineage = guaranteed Evolution\'s End unique.',
      details: [
        'Each additional Evolution makes the beast harder — and more rewarding.',
        'Completing a full lineage (max Evolutions) guarantees an Evolution\'s End unique item drop.',
        'Use Torn Rifts in your current zone to fight your evolved beast without finding a new Mysterious Rift.',
        'Weaver Tree: Rampant Coast Woven Echo raises the Evolution cap to 7 and frequently yields Crystallized Hearts — highest priority echo for serious Primal Hunters.',
        'Weaver Tree: Bloodline Glade is best for farming Primordial Exalted Champion-modifiers items.',
      ],
    },
    {
      id: 'primordial-materials',
      title: 'Collect Primordial Materials',
      summary: 'Each Rift Beast drops different materials based on its Evolution line. These are the currency for Skarven\'s shop.',
      details: [
        'Ancient Bones: most common — drop from all enemies inside Mysterious Rifts instead of Gold.',
        'Primordial Horns, Feathers, Fangs, Petals: dropped based on the beast\'s Evolution line.',
        'Crystallized Hearts: rarest material — from Rampant Coast echoes or specific evolutions.',
        'Each Evolution card shows which material that path produces — plan your lineage accordingly.',
        'Bag of Primordial Materials (10,000 Bones from Skarven) can convert Bones into other materials with a small chance at a Crystallized Heart.',
      ],
    },
    {
      id: 'skarven-shop',
      title: 'Trade with Skarven Bloodhorn',
      summary: 'Spend Primordial Materials at Skarven\'s shop for loot bags, Primordial items, and Runes of Evolution.',
      details: [
        'Bag of Amber: 1 Crystallized Heart + 10 Horns → 5,000 Memory Amber (Woven faction only — massive amber value).',
        'Bag of Uniques: 10 Fangs + 10 Feathers → random Unique items.',
        'Bag of Shards: 10 Petals → random Shards.',
        'Bag of Glyphs: 10 Fangs → random Glyphs.',
        'Bag of Gold: 5 Feathers → random Gold.',
        'Primordial Unique items available directly for specific material combinations.',
        'Rune of Evolution: purchased for materials — upgrades a Tier 7 affix to Tier 8.',
      ],
      callout: 'Bag of Amber is the highest-value trade for Woven faction members — Crystallized Hearts are worth hoarding for this.',
    },
    {
      id: 'primordial-items',
      title: 'Primordial Items & Rune of Evolution',
      summary: 'Primordial Exalted items have T8 affixes — above the normal max. You can only equip ONE Primordial item at a time.',
      details: [
        'Primordial Unique items have T7 affixes; Primordial Exalted items have T8 affixes.',
        'Apply a Rune of Evolution to a Primordial Item to randomly upgrade one T7 affix to T8.',
        'Rune of Evolution does NOT consume Forging Potential — safe to use without worry.',
        'Only one Primordial item (Unique or Exalted) can be equipped at a time — plan which slot gets it.',
        'The T8 affix from Sinathia\'s Dying Breath Reforged on the Witchfire Warlock is an example of this system.',
      ],
    },
    {
      id: 'weaver-synergies',
      title: 'Weaver Tree Synergies',
      summary: 'Three Woven Echoes directly enhance the Primal Hunt. Essential if you\'re farming Rift Beasts seriously.',
      details: [
        'Nesting Grove: Adds Rift Beast encounters into nearby Echoes — passive Rift Beast farming during normal Monolith runs.',
        'Bloodline Glade: Best for farming Primordial Exalted items with high-tier Champion modifiers.',
        'Rampant Coast: Raises Evolution cap to 7 (from 4) and frequently drops Crystallized Hearts — highest priority.',
        'Weaver Tree also has general nodes to increase Rift Beast encounter rates and improve material yields.',
        'Running the Bag of Amber trade loop (Crystallized Hearts → 5,000 Memory Amber each) is a major source of Woven faction reputation.',
      ],
    },
  ],
}

export const topics: KnowledgeTopic[] = [endgameProgression, wovenfaction, riftBeasts]
