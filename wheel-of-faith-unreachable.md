# Wheel of Faith — unreachable sub-wheels

`checkConditionals()` fires a sub-wheel only when `trigger.values.includes(lastResult)`, where `lastResult` is the exact string the base wheel landed on. Where a trigger names a value its source wheel cannot produce, that path is unreachable.

Generated 2026-08-11 against 312 conditional wheels and 17 base wheels.

## Summary

| | count |
|---|---|
| Sub-wheels that can never fire | **55** |
| Sub-wheels with some unreachable trigger values | 95 |
| Sub-wheels fully reachable | 162 |
| Items locked inside never-firing wheels | **399** |

The pattern: base wheels were re-worded at some point, and the sub-wheel triggers still use the old vocabulary. For example the **size** wheel now returns heights (`3.5ft` … `9.5ft`) but 6 sub-wheels still trigger on `Colossal` / `Titan` / `Kaiju`. The **fight** wheel returns `Darwizzy`/`Rookie`/`Champion`/`Unbeatable` but sub-wheels trigger on `Grand Master` / `Legendary` / `God Tier`.

## Sub-wheels that can never fire

| sub-wheel | triggers on | needs a value the wheel cannot produce | that wheel actually returns |
|---|---|---|---|
| `titanPower` | size | Colossal, Titan, Kaiju, Planetary (+1) | 3.5ft, 4ft, 4.5ft, 5ft, 5.5ft, 6ft, … |
| `tinyPerk` | size | Tiny, Microscopic, Atom, Subatomic | 3.5ft, 4ft, 4.5ft, 5ft, 5.5ft, 6ft, … |
| `martialSchool` | fight | Grand Master, Legendary, Myth, God Tier | Darwizzy, Rookie, Amateur, Skilled, Champion, Meta-Martial, … |
| `conquestDiplomacy` | conquered | Through Diplomacy, Through Alliance, Through Marriage, Through Economy | With a world ending power, Through unmatched mastery of a forbidden weapon, Turned every enemy against each other, Through sheer overwhelming force, With a devious masterplan, Struck before anyone knew who he was, … |
| `conquestBetrayal` | conquered | Through Betrayal, Through Manipulation, Through Deception, Through Espionage | With a world ending power, Through unmatched mastery of a forbidden weapon, Turned every enemy against each other, Through sheer overwhelming force, With a devious masterplan, Struck before anyone knew who he was, … |
| `masteryFocus` | powerMastery | Perfect, Transcendent, One With Power, God Tier | Darwizzy, Dormant, Awakening, Controlled, Master, Archmage, … |
| `traumaDepth` | backstory | Betrayed by their best friend, Lost everything and rebuilt from nothing, Watched their mentor die and took their place, Created by a villain as a weapon, then broke free (+3) | Just some random guy, Made in a lab, Found their powers in a dump, Their origin story is so embarrassing, Trained by a legend, Rose from absolute nothing, … |
| `conquestAftermath` | conquered | Through Brute Force, Through Destruction, Through War, Through Intimidation (+2) | With a world ending power, Through unmatched mastery of a forbidden weapon, Turned every enemy against each other, Through sheer overwhelming force, With a devious masterplan, Struck before anyone knew who he was, … |
| `sizeEnvironmental` | size | Mountainous, Planetary, Star, Galactic (+1) | 3.5ft, 4ft, 4.5ft, 5ft, 5.5ft, 6ft, … |
| `fightLegacy` | fight | Legendary, Mythic, Transcendent | Darwizzy, Rookie, Amateur, Skilled, Champion, Meta-Martial, … |
| `masteryReputation` | weaponMastery | Grandmaster, Divine, Mythical | Darwizzy, Novice, Apprentice, Adept, Expert, Master, … |
| `trainingMethod` | fight | Expert, Master, Grand Master, Legendary (+1) | Darwizzy, Rookie, Amateur, Skilled, Champion, Meta-Martial, … |
| `enchantOrigin` | enchantment | Ancient Rune, Forbidden Sigil, Eldritch Inscription, Primordial Mark (+2) | Tidal Force, Madness Touch, Sorrow Edge, Hex, Jinx, Momentum, … |
| `sizeCombat` | size | Colossal, Titan, Mountainous, Planetary (+3) | 3.5ft, 4ft, 4.5ft, 5ft, 5.5ft, 6ft, … |
| `conqueredTrophy` | conquered | Single Combat, Army Destruction, Political Manipulation, Cultural Domination (+2) | With a world ending power, Through unmatched mastery of a forbidden weapon, Turned every enemy against each other, Through sheer overwhelming force, With a devious masterplan, Struck before anyone knew who he was, … |
| `enchantCost` | enchantment | Void Eater, Soul Harvest, Reality Shatter, Time Freeze (+6) | Tidal Force, Madness Touch, Sorrow Edge, Hex, Jinx, Momentum, … |
| `durabilitySecret` | durability | Planet Level, Star Level, Galaxy Level, Universe Level (+2) | Darwizzy, Fragile, Mid, Peak Human, Superhuman, Nuclear, … |
| `backstoryTrauma` | backstory | Orphan raised by wolves who turned out to be werewolves with a custody dispute, Sole survivor of a kingdom that was erased from history — literally, no one remembers it existed, Watched their mentor die and inherited a burden they were never supposed to carry, Lost everything in a war they started by accident — the guilt is the real enemy (+2) | Just some random guy, Made in a lab, Found their powers in a dump, Their origin story is so embarrassing, Trained by a legend, Rose from absolute nothing, … |
| `betrayalType` | backstory | Was betrayed by their closest ally and left for dead — crawled back from literal hell, Watched their mentor die and inherited a burden they were never supposed to carry | Just some random guy, Made in a lab, Found their powers in a dump, Their origin story is so embarrassing, Trained by a legend, Rose from absolute nothing, … |
| `deathCondition` | durability | Universe Level, Multiverse Level, Indestructible | Darwizzy, Fragile, Mid, Peak Human, Superhuman, Nuclear, … |
| `forbiddenTech` | fight | God of War, One Punch, Baki Level, Grand Master | Darwizzy, Rookie, Amateur, Skilled, Champion, Meta-Martial, … |
| `weaponSoul` | weaponMastery | Soul Bonded, Spirit Linked, Legendary Mastery, God of Blades | Darwizzy, Novice, Apprentice, Adept, Expert, Master, … |
| `territoryEffect` | extraPower | Domain Expansion, Territory Creation, Reality Warp, Spatial Manipulation | Slow Motion Manipulation, Gravity Manipulation, Time Manipulation, Space Manipulation, Reality Manipulation, Mind Manipulation, … |
| `legendaryWeapon` | weapon | Legendary Blade, Mythic Artifact, Divine Weapon, God Slayer | No Weapon, Longsword, Broadsword, Katana, Rapier, Scimitar, … |
| `powerLimiter` | powerMastery | Sealed Power, Limiter Active, Restrained, Holding Back | Darwizzy, Dormant, Awakening, Controlled, Master, Archmage, … |
| `battleScar` | fight | God of War, One Punch, Baki Level, Grand Master (+2) | Darwizzy, Rookie, Amateur, Skilled, Champion, Meta-Martial, … |
| `powerDrawback` | powerMastery | Perfect, Transcendent, One With Power, God Tier (+1) | Darwizzy, Dormant, Awakening, Controlled, Master, Archmage, … |
| `conquestAlly` | conquered | Through Alliance, Through Brotherhood, Through Loyalty | With a world ending power, Through unmatched mastery of a forbidden weapon, Turned every enemy against each other, Through sheer overwhelming force, With a devious masterplan, Struck before anyone knew who he was, … |
| `backstoryTwist` | backstory | Betrayed by their best friend, Lost everything and rebuilt from nothing, Watched their mentor die and took their place, Created by a villain as a weapon, then broke free (+1) | Just some random guy, Made in a lab, Found their powers in a dump, Their origin story is so embarrassing, Trained by a legend, Rose from absolute nothing, … |
| `legendaryMount` | conquered | Through Brute Force, Through War, Through Intimidation, Through Domination (+2) | With a world ending power, Through unmatched mastery of a forbidden weapon, Turned every enemy against each other, Through sheer overwhelming force, With a devious masterplan, Struck before anyone knew who he was, … |
| `arcaneSigil` | enchantment | Ancient Rune, Forbidden Sigil, Eldritch Inscription, Primordial Mark (+4) | Tidal Force, Madness Touch, Sorrow Edge, Hex, Jinx, Momentum, … |
| `weaponAwakening` | weaponMastery | Soul Bonded, Spirit Linked, Legendary Mastery, God of Blades (+1) | Darwizzy, Novice, Apprentice, Adept, Expert, Master, … |
| `betrayalConsequence` | backstory | Betrayed by their best friend, Everyone they ever loved was a lie, Was betrayed by their closest ally and left for dead — crawled back from literal hell | Just some random guy, Made in a lab, Found their powers in a dump, Their origin story is so embarrassing, Trained by a legend, Rose from absolute nothing, … |
| `powerSacrifice` | powerMastery | Perfect, Transcendent, One With Power, God Tier | Darwizzy, Dormant, Awakening, Controlled, Master, Archmage, … |
| `elementalMastery` | powerMastery | Perfect, Transcendent, One With Power, God Tier | Darwizzy, Dormant, Awakening, Controlled, Master, Archmage, … |
| `deathStyle` | durability | Indestructible, Multiverse Level, Universe Level, Absolute (+1) | Darwizzy, Fragile, Mid, Peak Human, Superhuman, Nuclear, … |
| `forbiddenArtCost` | fight | God of War, One Punch, Baki Level, God Tier | Darwizzy, Rookie, Amateur, Skilled, Champion, Meta-Martial, … |
| `kingdomStructure` | conquered | Through Brute Force, Through War, Through Diplomacy, Through Alliance (+2) | With a world ending power, Through unmatched mastery of a forbidden weapon, Turned every enemy against each other, Through sheer overwhelming force, With a devious masterplan, Struck before anyone knew who he was, … |
| `awakeningCost` | powerMastery | Transcendent, One With Power, God Tier, Awakened (+1) | Darwizzy, Dormant, Awakening, Controlled, Master, Archmage, … |
| `weaponEvolution` | weaponMastery | Soul Bonded, Spirit Linked, One With the Weapon, God of Blades | Darwizzy, Novice, Apprentice, Adept, Expert, Master, … |
| `conquestPolitics` | conquered | Through War, Through Diplomacy, Through Domination, Through Intimidation (+3) | With a world ending power, Through unmatched mastery of a forbidden weapon, Turned every enemy against each other, Through sheer overwhelming force, With a devious masterplan, Struck before anyone knew who he was, … |
| `sizeTactic` | size | Colossal, Titan, Mountainous, Planetary (+3) | 3.5ft, 4ft, 4.5ft, 5ft, 5.5ft, 6ft, … |
| `backstoryRedemption` | backstory | Was the villain of someone else's story before becoming the hero of their own, Created by a villain as a weapon, then broke free, Swore revenge and then realized the target was already dead, Everyone they ever loved was a lie (+1) | Just some random guy, Made in a lab, Found their powers in a dump, Their origin story is so embarrassing, Trained by a legend, Rose from absolute nothing, … |
| `fightFinisher` | fight | Expert, Master, Grand Master, Legendary (+5) | Darwizzy, Rookie, Amateur, Skilled, Champion, Meta-Martial, … |
| `conqueredResistance` | conquered | Through Brute Force, Through War, Through Domination, Through Intimidation (+2) | With a world ending power, Through unmatched mastery of a forbidden weapon, Turned every enemy against each other, Through sheer overwhelming force, With a devious masterplan, Struck before anyone knew who he was, … |
| `enchantResistance` | enchantment | Warding, Barrier, Shield Enchantment, Protection (+6) | Tidal Force, Madness Touch, Sorrow Edge, Hex, Jinx, Momentum, … |
| `conquestMethodVariation` | conquered | Through Brute Force, Through War, Through Diplomacy, Through Alliance (+6) | With a world ending power, Through unmatched mastery of a forbidden weapon, Turned every enemy against each other, Through sheer overwhelming force, With a devious masterplan, Struck before anyone knew who he was, … |
| `sizeStealthTactic` | size | Colossal, Titan, Mountainous, Kaiju (+2) | 3.5ft, 4ft, 4.5ft, 5ft, 5.5ft, 6ft, … |
| `durabilityPainMemory` | durability | Planet Level, Star Level, Galaxy Level, Universe Level (+4) | Darwizzy, Fragile, Mid, Peak Human, Superhuman, Nuclear, … |
| `conqueredEmpireLegacy` | conquered | Through War, Through Brute Force, Through Domination, Through Alliance (+3) | With a world ending power, Through unmatched mastery of a forbidden weapon, Turned every enemy against each other, Through sheer overwhelming force, With a devious masterplan, Struck before anyone knew who he was, … |
| `fightCombatDoctrine` | fight | Berserker, Assassin, Duelist, Martial Artist (+5) | Darwizzy, Rookie, Amateur, Skilled, Champion, Meta-Martial, … |
| `sizeCombatAdvantage` | size | Tiny, Small, Large, Huge (+5) | 3.5ft, 4ft, 4.5ft, 5ft, 5.5ft, 6ft, … |
| `masteryBreakthrough` | powerMastery | Grandmaster, Legendary, Mythical, Divine (+3) | Darwizzy, Dormant, Awakening, Controlled, Master, Archmage, … |
| `backstoryHiddenTalent` | backstory | Raised by wolves in the wilderness, Grew up on the streets, Was a slave who fought their way to freedom, Trained in secret by a forbidden master (+4) | Just some random guy, Made in a lab, Found their powers in a dump, Their origin story is so embarrassing, Trained by a legend, Rose from absolute nothing, … |
| `conqueredAftermath` | conquered | Through War, Through Brute Force, Through Domination, Through Genocide (+3) | With a world ending power, Through unmatched mastery of a forbidden weapon, Turned every enemy against each other, Through sheer overwhelming force, With a devious masterplan, Struck before anyone knew who he was, … |

## Sub-wheels that fire, but with some dead trigger values

| sub-wheel | triggers on | unreachable values |
|---|---|---|
| `darkEnchant` | enchantment | Nightmare Manipulation |
| `weaponName` | weaponMastery | Legendary, Mythical, Divine |
| `speedAfterimage` | speed | Mach 1, Mach 10, Mach 100, Sub-Light |
| `strengthCollateral` | strength | Continental, Planetary, Solar, Galactic |
| `iqMadness` | iq | Transcendent |
| `enchantSynergy` | enchantment | Reality Warp, Dimensional Cut, Void, Infinity Edge |
| `weaknessParadox` | weakness | Overpowered Instability, Cannot Control Full Power |
| `durNemesis` | durability | Invulnerable, Absolute |
| `weaponSentience` | weapon | Living Weapon, Soul Blade, Demon Weapon |
| `titleWeight` | title | The Abomination, The Monster, The Calamity |
| `enchantDrawback` | enchantment | Void, Reality Warp, Dimensional Cut, Infinity Edge |
| `powerAwakening` | extraPower | Absolute Nullification, Reality Warping, Existence Erasure, Omnipotence Fragment, True Immortality |
| `powerSource` | extraPower | Energy Projection, Plasma Control |
| `titleProphecy` | title | The Prophesied, The Mythic, The World Breaker, The God Slayer |
| `weaponOrigin` | weapon | Legendary Artifact, World Ender, Godslayer |
| `speedTech` | speed | Mach 10, Instant Transmission, Time Skip, Infinite |
| `iqApplication` | iq | Genius (160+), Super Genius (200+), Beyond Measurement, Hive Mind, Cosmic Awareness |
| `weaponBond` | weaponMastery | Grandmaster, Legendary, Mythical, Divine, One With the Weapon |
| `transformTrigger` | race | Werewolf, Shapeshifter |
| `allyBond` | backstory | Built an empire from nothing but charisma and spite |
| `deathProphecy` | durability | Invulnerable, Absolute, Universe Level, Multiverse Level, Indestructible |
| `weaponLegend` | weapon | Legendary Artifact, World Ender, Godslayer, Living Weapon, Soul Blade (+1) |
| `titleRival` | title | The Champion, The Conqueror, The Undefeated, The Supreme, The Overlord (+4) |
| `divineProphecy` | title | The Prophesied, The God Slayer, The Mythic |
| `artifactCurse` | weapon | Living Weapon, Demon Weapon, Soul Blade |
| `warTactic` | fight | Grand Master, Legendary, Myth, God Tier, God of War |
| `bloodOath` | backstory | Swore revenge and then realized the target was already dead, Betrayed by their best friend, Swore an oath that cost them everything they loved, Lost everything and rebuilt from nothing, Everyone they ever loved was a lie |
| `deathCheat` | durability | Invulnerable, Absolute, Indestructible |
| `nemesisType` | backstory | Swore revenge and then realized the target was already dead |
| `forbiddenKnowledge` | iq | Transcendent, Beyond Measurement |
| `domainManifestation` | extraPower | Domain Expansion, Territory Creation, Reality Warp, Spatial Manipulation |
| `legendaryFailure` | backstory | Lost everything and rebuilt from nothing, Their power killed someone they loved, Watched their mentor die and took their place, Created by a villain as a weapon, then broke free |
| `ancestralWeapon` | weapon | Legendary Artifact |
| `bloodOathConsequence` | weakness | Vengeance Sworn, Blood Debt, Oath Bound |
| `timeParadox` | extraPower | Time Stop, Time Reversal, Temporal Control, Chronokinesis, Time Loop |
| `soulFragmentConsequence` | race | Ghost, Undead |
| `divineJudgment` | race | Celestial |
| `shadowRealmEffect` | race | Shadow |
| `crystalResonance` | extraPower | Crystallokinesis, Gem Magic, Runic Magic, Arcane Amplification, Magic Manipulation |
| `stormCaller` | extraPower | Thunder Manipulation, Storm Manipulation, Electromagnetism |
| `voidWalker` | extraPower | Spatial Manipulation |
| `rulerBurden` | title | The Emperor, The Overlord, The Sovereign, The Supreme, The Ruler (+2) |
| `healingFactor` | extraPower | Healing Factor, Cellular Regeneration, Recovery, Bio-Regeneration, Adaptive Healing |
| `weaponPersonality` | weapon | Living Weapon, Soul Blade, Demon Weapon |
| `conquestReligion` | title | The Emperor, The Overlord, The Sovereign, The Supreme, The Conqueror (+2) |
| `darkPactPrice` | backstory | Made a pact with the void itself |
| `powerEcho` | extraPower | Ancestral Power, Echo Power, Inheritance, Legacy Power, Reincarnation Power |
| `battleReputation` | fight | Legendary, Myth, God Tier, God of War, One Punch (+1) |
| `raceInstinct` | race | Minotaur, Werewolf, Insectoid, Arachnid |
| `enchantAwakening` | enchantment | Reality Warp, Dimensional Cut, Void, Infinity Edge, Phoenix Rebirth (+2) |
| `strengthLegend` | strength | Continental, Planetary, Solar, Galactic |
| `titleChallenge` | title | The Champion, The Conqueror, The Undefeated, The Supreme, The Overlord (+4) |
| `iqSocial` | iq | Genius (160+), Super Genius (200+), Beyond Measurement, Hive Mind, Cosmic Awareness (+1) |
| `powerCorruption` | extraPower | Corruption, Curse Manipulation, Demon Summoning |
| `raceCulturalTrait` | race | Gnome, Halfling, Minotaur |
| `durabilityCost` | durability | Invulnerable, Absolute, Indestructible, Multiverse Level, Universe Level |
| `speedPerception` | speed | Mach 1, Mach 10, Mach 100, Sub-Light |
| `strengthControl` | strength | Continental, Planetary, Solar, Galactic |
| `titleInheritance` | title | The Heir, The Successor, The Crown, The Prophesied |
| `weaponDualNature` | weapon | Soul Blade, Demon Weapon, Living Weapon |
| `weaponMasteryAura` | weaponMastery | Grandmaster, Legendary, Mythical, Divine, One With the Weapon (+1) |
| `powerManifestationVariant` | extraPower | Energy Projection, Plasma Control, Reality Warping |
| `enchantEvolutionStage` | enchantment | Reality Warp, Dimensional Cut, Void, Infinity Edge, Phoenix Rebirth (+5) |
| `battleStyleModifier` | strength | Mountain, Continental, Planetary, Solar, Galactic |
| `titleAchievementCondition` | title | The Champion, The Conqueror, The Undefeated, The Supreme, The Overlord (+3) |
| `backstoryHiddenLegacy` | backstory | Sole survivor of a kingdom that was erased from history — literally, no one remembers it existed, Orphan raised by wolves who turned out to be werewolves with a custody dispute |
| `speedCombatOpener` | speed | Mach 10, Mach 100, Sub-Light, Instant Transmission |
| `strengthTrainingOrigin` | strength | Continental, Planetary, Solar, Galactic |
| `durabilityMentalToll` | durability | Invulnerable, Absolute, Indestructible, Multiverse Level, Universe Level |
| `iqBattleCalculus` | iq | Genius (160+), Super Genius (200+), Beyond Measurement, Cosmic Awareness, Transcendent |
| `enchantmentSentience` | enchantment | Void, Reality Warp, Dimensional Cut, Infinity Edge, Phoenix Rebirth (+5) |
| `titleRivalDynamics` | title | The Conqueror, The Supreme, The Overlord, The God Slayer, The World Breaker (+1) |
| `backstoryTraumaResponse` | backstory | Sole survivor of a kingdom that was erased from history — literally, no one remembers it existed, Lost everything, Was betrayed by their mentor, Watched their family die, Sold their soul and bought it back at a terrible price (+2) |
| `raceBattleCry` | race | Minotaur, Troll |
| `backstoryHiddenAlly` | backstory | Sole survivor of a kingdom that was erased from history — literally, no one remembers it existed, Orphan raised by wolves who turned out to be werewolves with a custody dispute, Grew up on the streets and learned to fight from the gutter up |
| `titleDeathCondition` | title | The Immortal, The Unkillable, The Persistent, The Revenant, The Deathless (+1) |
| `weaknessHiddenStrength` | weakness | Blind |
| `speedTimePerception` | speed | Mach 100, Sub-Light, Instant Transmission, Time Skip |
| `strengthIntimidationAura` | strength | Mountain, Continental, Planetary, Solar, Galactic |
| `iqPredictionDepth` | iq | Super Genius (200+), Beyond Measurement, Cosmic Awareness, Transcendent |
| `powerAwakeningSign` | extraPower | Energy Projection, Reality Warping, Plasma Control |
| `enchantmentSacrificeRitual` | enchantment | Void, Reality Warp, Dimensional Cut, Infinity Edge, Death Touch (+4) |
| `raceDeathRite` | race | Gnome |
| `backstoryNemesisEvolution` | backstory | Swore revenge and then realized the target was already dead, Betrayed by their best friend, Everyone they ever loved was a lie |
| `weaponKillCountEffect` | weaponMastery | Grandmaster, Legendary, Mythical, Divine, One With the Weapon (+1) |
| `titleSuccessionWar` | title | The Emperor, The Overlord, The Sovereign, The Supreme, The Champion (+4) |
| `weaknessWeaponization` | weakness | Blind |
| `speedSonicSignature` | speed | Mach 1, Mach 10, Mach 100, Sub-Light |
| `strengthGravityWell` | strength | Continental, Planetary, Solar, Galactic |
| `iqDeceptionMastery` | iq | Genius (160+), Super Genius (200+), Beyond Measurement, Cosmic Awareness, Transcendent |
| `durabilityLegendaryLastStand` | durability | Planet Level, Star Level, Galaxy Level, Universe Level, Multiverse Level (+3) |
| `weaponSoulBond` | weaponMastery | Grandmaster, Legendary, Mythical, Divine, One With the Weapon (+1) |
| `enchantmentCorruption` | enchantment | Void, Reality Warp, Dimensional Cut, Infinity Edge, Death Touch (+4) |
| `raceWarCry` | race | Troll |
| `titleDarkSecret` | title | The Emperor, The Champion, The Hero, The Savior, The Protector (+3) |
