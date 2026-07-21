# Wheel of Faith (WoF) - Comprehensive Game Research

> **Purpose:** Complete data reference for building a WoF-style fantasy character generator with 15 spinning wheels.
> **Research Date:** 2026-07-21
> **Sources:** WoF TikTok/Arena game, D&D 5e, Pathfinder, general fantasy RPG systems, TV Tropes, various RPG wikis.

---

## Table of Contents

1. [Race Wheel](#1-race-wheel)
2. [Class/Archetype Wheel](#2-classarchetype-wheel)
3. [Size Wheel](#3-size-wheel)
4. [Weapon Wheel](#4-weapon-wheel)
5. [Weapon Enchantment Wheel](#5-weapon-enchantment-wheel)
6. [Armor Wheel](#6-armor-wheel)
7. [Element Affinity Wheel](#7-element-affinity-wheel)
8. [Alignment Wheel](#8-alignment-wheel)
9. [Origin/Background Wheel](#9-originbackground-wheel)
10. [Companion Wheel](#10-companion-wheel)
11. [Special Ability Wheel](#11-special-ability-wheel)
12. [Weakness Wheel](#12-weakness-wheel)
13. [Quest/Destiny Wheel](#13-questdestiny-wheel)
14. [Stat Distribution](#14-stat-distribution)
15. [Fight Mastery Wheel](#15-fight-mastery-wheel)
16. [Conditional Logic & Synergies](#16-conditional-logic--synergies)
17. [Spin Order & Flow](#17-spin-order--flow)

---

## 1. Race Wheel

The main Race Wheel has 15 primary races. Upon landing on a race, a **Sub-Race Wheel** spins to determine the specific variant. Each race and sub-race applies stat modifiers to the base stats (SPD / IQ / STR / DUR).

### 1.1 Human

| Sub-Race | STR | SPD | IQ | DUR | Racial Trait |
|----------|-----|-----|-----|-----|-------------|
| Highborn | +0 | +0 | +1 | +1 | Diplomacy: +1 to all stats when allied with another Human |
| Nomad | +0 | +2 | +0 | +0 | Wanderer: immune to terrain-based debuffs |
| Berserker Tribe | +2 | +0 | -1 | +1 | Blood Rage: +2 STR when below 30% HP |
| Mystic Bloodline | -1 | +0 | +3 | -1 | Arcane Affinity: enchantments cost 1 less mastery tier |
| Ironborn | +1 | -1 | +0 | +2 | Iron Will: resist mind-control effects |

**Lore:** Humans are versatile and adaptive. In WoF canon, they are "basic but very powerful -- not the strongest but not the weakest." Their flexibility makes them viable with any archetype.

---

### 1.2 Elf

| Sub-Race | STR | SPD | IQ | DUR | Racial Trait |
|----------|-----|-----|-----|-----|-------------|
| High Elf | -1 | +1 | +3 | -1 | Arcane Mastery: start with 1 free enchantment tier |
| Dark Elf (Drow) | +0 | +2 | +1 | -1 | Shadow Veil: stealth attacks deal +2 damage |
| Wood Elf | +0 | +3 | +0 | -1 | Forest Bond: +2 SPD in natural terrain |
| Sea Elf | +0 | +1 | +1 | +0 | Aquatic: can breathe underwater, immune to water-element damage |
| Blood Elf | +1 | +0 | +2 | -1 | Life Drain: heal 1 HP per successful attack |

**Lore:** Elves are agile and intelligent, excelling in magic and ranged combat. They possess a natural Trance ability (meditation instead of sleep) and live for centuries.

---

### 1.3 Dwarf

| Sub-Race | STR | SPD | IQ | DUR | Racial Trait |
|----------|-----|-----|-----|-----|-------------|
| Mountain Dwarf | +2 | -1 | +0 | +2 | Stone Skin: +1 DUR against physical attacks |
| Hill Dwarf | +1 | +0 | +0 | +2 | Endurance: +10% max HP |
| Deep Dwarf (Duergar) | +1 | -1 | +1 | +1 | Darkvision: no penalty in darkness |
| Forge Dwarf | +2 | -2 | +1 | +1 | Master Smith: can enchant weapons even without Expert mastery (WoF canon) |
| Frost Dwarf | +1 | -1 | +0 | +3 | Cold Resistance: immune to ice-element damage |

**Lore:** In WoF, Dwarves "hate magic and are skilled blacksmiths who can get enchanted weapons even if they do not meet the requirement of expert mastery." They are short, tough, and favor melee combat.

---

### 1.4 Orc

| Sub-Race | STR | SPD | IQ | DUR | Racial Trait |
|----------|-----|-----|-----|-----|-------------|
| War Orc | +3 | +0 | -2 | +1 | Relentless: can act one more turn after reaching 0 HP |
| Savage Orc | +3 | +1 | -3 | +1 | Frenzy: +1 STR per kill in combat |
| Shaman Orc | +1 | +0 | +1 | +0 | Spirit Caller: can use one spirit-based power without mastery |
| Half-Orc | +2 | +0 | +0 | +0 | Versatile: no stat penalties; can use Human sub-wheel once |
| Ironhide Orc | +2 | -1 | -1 | +3 | Thick Skin: reduce all incoming damage by 1 |

**Lore:** Orcs are the heavy hitters of WoF. Raw physical dominance at the cost of intelligence. Savage Orcs can snowball in prolonged fights.

---

### 1.5 Goblin

| Sub-Race | STR | SPD | IQ | DUR | Racial Trait |
|----------|-----|-----|-----|-----|-------------|
| Cave Goblin | -1 | +3 | +0 | -1 | Scurry: dodge chance +15% |
| Hobgoblin | +1 | +1 | +1 | +0 | Tactical Mind: +1 IQ when in a group/army |
| Bugbear | +2 | +0 | -1 | +1 | Ambush: first attack in combat deals double damage |
| Tinker Goblin | -1 | +1 | +3 | -1 | Gadgeteer: can craft improvised weapons mid-combat |
| Plague Goblin | -1 | +2 | +0 | +0 | Toxic: attacks have 20% chance to poison |

**Lore:** In WoF, Goblins are "the second weakest race, though powerful ones who lead thousands can be formidable." High risk, high reward with speed-based builds.

---

### 1.6 Skeleton

| Sub-Race | STR | SPD | IQ | DUR | Racial Trait |
|----------|-----|-----|-----|-----|-------------|
| Warrior Skeleton | +1 | +1 | -1 | +1 | Undying: revive once per battle at 25% HP |
| Lich (Mage Skeleton) | -1 | +0 | +4 | -1 | Phylactery: if destroyed, reform in 3 turns |
| Bone Knight | +2 | -1 | +0 | +2 | Bone Armor: natural +2 DUR but weak to blunt weapons |
| Revenant | +1 | +0 | +0 | +1 | Vengeful Spirit: +3 to all stats against the one who killed them |
| Wight | +0 | +1 | +1 | +0 | Life Steal: drains 1 stat point from enemy per hit |

**Lore:** In WoF, Skeletons are "one of the GOOFIEST races, having many Weak and Strong characters, the most absurd weaknesses and the craziest weapons." Pure chaos factor.

---

### 1.7 Fairy / Fey

| Sub-Race | STR | SPD | IQ | DUR | Racial Trait |
|----------|-----|-----|-----|-----|-------------|
| Pixie | -2 | +4 | +1 | -2 | Flight: can avoid ground-based attacks |
| Sprite | -2 | +3 | +2 | -2 | Invisibility: can turn invisible for 1 turn (cooldown 3) |
| Dryad | +0 | +1 | +1 | +1 | Nature Heal: regenerate 1 HP per turn in natural terrain |
| Changeling | +0 | +1 | +2 | -1 | Shapemask: copy appearance of another race (no stat change) |
| Sylph | -1 | +3 | +1 | -1 | Wind Walk: immune to slow effects |

**Lore:** In WoF, Fairies "often get clowned on but it's actually a reliable race, having 3 powers in a sub-wheel." They are bigger than typical depictions (some 5ft tall). Glass cannon builds.

---

### 1.8 Vampire

| Sub-Race | STR | SPD | IQ | DUR | Racial Trait |
|----------|-----|-----|-----|-----|-------------|
| Noble Vampire | +1 | +2 | +2 | -1 | Charm: can mind-control one weak-willed enemy per battle |
| Feral Vampire | +3 | +1 | -2 | +1 | Blood Frenzy: +2 STR at night or in darkness |
| Dhampir (Half-Vampire) | +1 | +1 | +1 | +0 | Daywalker: no sunlight weakness |
| Ancient Vampire | +2 | +2 | +1 | +0 | Elder Power: all abilities cost 1 less turn cooldown |
| Nosferatu | +2 | +0 | +0 | +2 | Terror Aura: enemies have -1 to all stats in proximity |

**Lore:** Vampires are powerful but have inherent weaknesses (sunlight, holy damage, running water). Their life-drain synergizes with aggressive builds.

---

### 1.9 Dragonborn / Dragon

| Sub-Race | STR | SPD | IQ | DUR | Racial Trait |
|----------|-----|-----|-----|-----|-------------|
| Fire Dragonborn | +2 | +0 | +0 | +1 | Breath Weapon (Fire): cone AoE fire damage |
| Ice Dragonborn | +1 | +0 | +1 | +1 | Breath Weapon (Ice): cone AoE + slow effect |
| Storm Dragonborn | +1 | +1 | +1 | +0 | Breath Weapon (Lightning): line AoE + stun chance |
| Shadow Dragonborn | +1 | +1 | +1 | +0 | Breath Weapon (Shadow): cone + fear effect |
| Ancient Dragon | +3 | -1 | +2 | +3 | Dragon Form: massive size, flight, but slow |

**Lore:** Dragonborn inherit the elemental affinity of their draconic ancestors. Breath weapons provide powerful AoE options. Ancient Dragon is a rare sub-race roll.

---

### 1.10 Elemental

| Sub-Race | STR | SPD | IQ | DUR | Racial Trait |
|----------|-----|-----|-----|-----|-------------|
| Fire Elemental | +2 | +1 | +0 | -1 | Burning Aura: deals 1 damage per turn to adjacent enemies |
| Water Elemental | +0 | +1 | +1 | +1 | Fluid Form: immune to physical critical hits |
| Earth Elemental | +1 | -2 | +0 | +4 | Immovable: cannot be knocked back or displaced |
| Air Elemental | -1 | +4 | +0 | -1 | Intangible: 25% chance to phase through attacks |
| Void Elemental | +0 | +0 | +3 | +0 | Nullify: cancel one enemy enchantment per battle |

**Lore:** In WoF, Elementals are above most races in the power hierarchy. Characters with a race "below Elementals" get an archetype to balance things out.

---

### 1.11 Wereweast / Animorph

| Sub-Race | STR | SPD | IQ | DUR | Racial Trait |
|----------|-----|-----|-----|-----|-------------|
| Werewolf | +2 | +2 | -1 | +0 | Transform: shift between human and beast form |
| Werebear | +3 | -1 | -1 | +2 | Rage Form: +3 STR but -2 IQ when transformed |
| Weretiger | +1 | +3 | +0 | -1 | Pounce: first melee attack each battle is guaranteed crit |
| Weredragon | +2 | +0 | +1 | +1 | Hybrid Form: gain breath weapon + claws |
| Skinwalker | +0 | +1 | +2 | +0 | Mimic: can copy one enemy's racial trait for the battle |

**Lore:** Werebeasts in WoF have dual forms. The transformation mechanic adds strategic depth - beast form has higher physical stats but reduced IQ/control.

---

### 1.12 Golem / Construct

| Sub-Race | STR | SPD | IQ | DUR | Racial Trait |
|----------|-----|-----|-----|-----|-------------|
| Stone Golem | +3 | -3 | -1 | +4 | Indestructible: immune to critical hits |
| Iron Golem | +3 | -2 | +0 | +3 | Magnetic: disarm metal weapon users on hit |
| Crystal Golem | +1 | -1 | +2 | +2 | Reflect: 20% chance to reflect magic back |
| Flesh Golem | +2 | +0 | -2 | +2 | Regenerate: heal 2 HP per turn |
| Clockwork (Cyborg) | +1 | +1 | +2 | +0 | Overclock: once per battle, double SPD for 2 turns |

**Lore:** In WoF, Golems and Cyborgs are separate but mechanically similar -- constructed beings with high durability but typically poor agility.

---

### 1.13 Demon / Devil

| Sub-Race | STR | SPD | IQ | DUR | Racial Trait |
|----------|-----|-----|-----|-----|-------------|
| Imp | -1 | +3 | +1 | -1 | Trickster: swap positions with any combatant once per battle |
| Succubus/Incubus | +0 | +1 | +3 | -1 | Enthrall: charm one enemy for 1 turn |
| Pit Fiend | +3 | +0 | +1 | +1 | Hellfire: attacks deal bonus fire damage |
| Shadow Demon | +1 | +2 | +1 | -1 | Phase: teleport to any shadow within range |
| Arch-Devil | +2 | +0 | +2 | +1 | Infernal Pact: sacrifice 2 HP to gain +2 to any stat for 3 turns |

**Lore:** Demons/Devils in WoF are high-tier races with strong offensive powers but vulnerability to Holy damage. Devil sub-types tend to be more strategic, Demons more feral.

---

### 1.14 Giant

| Sub-Race | STR | SPD | IQ | DUR | Racial Trait |
|----------|-----|-----|-----|-----|-------------|
| Hill Giant | +3 | -2 | -2 | +2 | Crush: unarmed attacks deal weapon-level damage |
| Frost Giant | +3 | -1 | +0 | +2 | Cold Aura: enemies in melee range lose 1 SPD |
| Fire Giant | +3 | -1 | +1 | +1 | Forge Master: weapons deal +1 fire damage |
| Storm Giant | +2 | +0 | +2 | +1 | Lightning Call: ranged AoE lightning every 3 turns |
| Titan | +4 | -2 | +1 | +3 | Colossal: forced Large+ size, +2 STR but -2 SPD |

**Lore:** Giants have the highest raw STR in the game but pay for it with SPD penalties. Their size category is forced to Large or higher.

---

### 1.15 Merfolk / Siren

| Sub-Race | STR | SPD | IQ | DUR | Racial Trait |
|----------|-----|-----|-----|-----|-------------|
| Sea Siren | +0 | +1 | +2 | +0 | Siren Song: stun one enemy for 1 turn (3 turn cooldown) |
| Deep One | +2 | +0 | +0 | +2 | Pressure Adapted: immune to crushing/gravity effects |
| Coral Guardian | +1 | -1 | +1 | +2 | Reef Shield: create barriers that block projectiles |
| Tide Caller | +0 | +1 | +3 | -1 | Water Mastery: water-element abilities deal double damage |
| Leviathan Kin | +3 | +0 | +0 | +1 | Monstrous Form: size increases by one category in water |

**Lore:** Merfolk/Sirens are terrain-dependent. Extremely strong in water-based arenas but potentially weakened on dry land.

---

## 2. Class/Archetype Wheel

In WoF, Archetypes were introduced in Season 3 to balance races. Characters with a race "below Elementals" get an archetype. The archetype wheel has **15 options**, each granting unique bonuses and spinning additional sub-wheels.

### 2.1 Warrior

**Bonus:** +2 STR, +1 DUR
**Sub-Wheel:** Fighting Style (Offensive / Defensive / Balanced)
- **Offensive:** +1 STR, critical hit chance +10%
- **Defensive:** +2 DUR, block chance +15%
- **Balanced:** +1 STR, +1 DUR

### 2.2 Paladin

**Bonus:** +1 STR, +1 DUR, +1 IQ
**Sub-Wheel:** Holy Powers Wheel (WoF canon: Paladin spins the "Holy Powers" wheel)
- **Divine Shield:** absorb one attack per battle
- **Smite:** deal double damage to Undead/Demon races
- **Lay on Hands:** heal 30% HP once per battle

### 2.3 Mage / Sorcerer

**Bonus:** +3 IQ, -1 STR
**Sub-Wheel:** School of Magic
- **Evocation:** +2 damage on all spell attacks
- **Illusion:** create decoys; 30% miss chance for enemies
- **Conjuration:** summon a temporary elemental ally

### 2.4 Rogue / Assassin

**Bonus:** +2 SPD, +1 IQ
**Sub-Wheel:** Specialization
- **Shadowblade:** attacks from stealth deal triple damage
- **Poisoner:** all attacks have 25% poison chance
- **Acrobat:** dodge chance +20%, can attack twice if first misses

### 2.5 Ranger

**Bonus:** +1 SPD, +1 STR, +1 IQ
**Sub-Wheel:** Terrain Mastery
- **Forest:** +2 to all stats in forest terrain
- **Mountain:** +2 DUR, immune to fall damage
- **Urban:** +2 SPD, bonus to stealth in cities

### 2.6 Ninja (WoF Canon)

**Bonus:** +3 SPD, +0 others
**Sub-Wheel:** Ninja Arts
- **Shadow Clone:** create 1 clone with 50% stats
- **Smoke Bomb:** escape combat once; reset stealth
- **Shuriken Mastery:** ranged attacks gain +2 damage

### 2.7 Gladiator (WoF Canon)

**Bonus:** +2 STR, +1 SPD
**Sub-Wheel:** Arena Style
- **Net & Trident:** can immobilize enemy for 1 turn
- **Dual Blades:** attack twice per turn at -1 damage each
- **Shield Bash:** stun enemy on successful block

### 2.8 Weaver (WoF Canon)

**Bonus:** +2 IQ, +1 DUR
**Sub-Wheel:** Weaver Wheel (imbue spirit power into self and weapons)
- **Spirit Thread:** bind an enemy's movement for 2 turns
- **Soul Stitch:** transfer HP from enemy to self
- **Fate Weave:** re-spin one stat or mastery wheel

### 2.9 Slayer (WoF Canon)

**Bonus:** +1 STR, +1 SPD
**Special Mechanic:** Spin the **Prey Race Wheel** -- gain a target race. When fighting that race: **+2 to ALL stats**.
- **Sub-Bonuses:**
  - Monster Hunter: +1 damage vs. non-humanoid races
  - Trophy Collector: gain +1 permanent stat per 3 kills of prey race
  - Tracker: always know prey race's location on the battlefield

### 2.10 Rider (WoF Canon)

**Bonus:** +1 SPD, +1 DUR
**Sub-Wheel:** Mount Wheel (spin for a mount)
- **Warhorse:** +2 SPD, +1 STR, charge attack
- **Wyvern:** flight, +1 SPD, breath attack (weak)
- **Dire Wolf:** +2 SPD, pack tactics (+1 if allies present)
- **Battle Boar:** +2 STR, +1 DUR, trample attack
- **Griffin:** flight, +2 SPD, dive attack

### 2.11 Godly (WoF Canon)

**Bonus:** +1 to all stats
**Sub-Wheel:** God Wheel (spin for which god blesses you)
- **War God:** +3 STR, weapon never breaks
- **Knowledge God:** +3 IQ, can identify all enemy weaknesses
- **Death God:** life drain on every attack
- **Nature God:** regenerate 2 HP/turn, control terrain
- **Chaos God:** random stat boost each turn (+1 to +4 to random stat)

### 2.12 Necromancer

**Bonus:** +3 IQ, -1 DUR
**Sub-Wheel:** Undead Specialization
- **Skeleton Army:** summon 3 weak skeleton allies
- **Death Knight:** become semi-undead; +2 STR, +2 DUR, weak to Holy
- **Soul Harvester:** killed enemies restore your HP

### 2.13 Berserker

**Bonus:** +3 STR, -1 IQ
**Sub-Wheel:** Rage Type
- **Blood Rage:** +1 STR per 10% HP lost
- **Battle Fury:** attack speed doubles below 50% HP
- **Death Wish:** immune to fear/stun; cannot retreat

### 2.14 Dual Wielder (WoF Canon)

**Bonus:** +1 SPD, +1 STR
**Special Mechanic:** Spin the **Weapon Wheel TWICE** (get 2 weapons). Spin Weapon Mastery only once. Get **two enchantments**.

### 2.15 Archaeologist (WoF Canon)

**Bonus:** +2 IQ, +0 others
**Sub-Wheel:** Artifact/Relic Wheel (chance to gain a powerful ancient item)
- **Artifact of Power:** +3 to one random stat permanently
- **Cursed Relic:** +4 to one stat, -2 to another
- **Ancient Tome:** learn one extra Special Ability
- **Empty Dig:** no artifact found (25% chance)

---

## 3. Size Wheel

Six size categories. Size directly modifies stats and has mechanical implications.

| Size | STR Mod | SPD Mod | DUR Mod | IQ Mod | Mechanical Effects |
|------|---------|---------|---------|--------|-------------------|
| **Tiny** | -3 | +4 | -3 | +0 | Cannot use Heavy weapons; 50% dodge chance; easily hidden; half carry capacity |
| **Small** | -1 | +2 | -1 | +0 | Disadvantage with Heavy weapons; +10% dodge; fits in tight spaces |
| **Medium** | +0 | +0 | +0 | +0 | Standard baseline; no bonuses or penalties |
| **Large** | +2 | -1 | +2 | +0 | Can wield two-handed weapons in one hand; +25% carry capacity; larger hit area |
| **Giant** | +4 | -2 | +3 | +0 | Two-handed weapons used one-handed; can wield "Colossal" weapons; AoE melee; -2 stealth |
| **Colossal** | +5 | -3 | +5 | -1 | Crush smaller enemies underfoot; immune to knockback; cannot use Small weapons; cannot stealth; massive hit area |

**Conditional Logic:**
- Races with forced size: Giants are forced to Large+; Fairies/Pixies default to Tiny/Small; Golems default to Large+
- Size interacts with Weapon Wheel: Tiny/Small cannot wield Heavy/Colossal weapons; Giant/Colossal get bonus damage with large weapons
- Size affects Companion Wheel: Tiny characters can ride Medium companions; Large+ characters cannot use Small companions as mounts

---

## 4. Weapon Wheel

20 weapons divided into categories. Each weapon has a **Damage Type**, **Speed Rating** (Fast/Medium/Slow), and **Range** (Melee/Ranged/Both).

### Melee Weapons

| # | Weapon | Damage Type | Speed | Range | Special Property |
|---|--------|-------------|-------|-------|-----------------|
| 1 | Longsword | Slashing | Medium | Melee | Balanced: +1 to hit |
| 2 | Greatsword | Slashing | Slow | Melee | Cleave: hit 2 adjacent enemies |
| 3 | Dagger | Piercing | Fast | Melee/Thrown | Critical hit chance +15% |
| 4 | War Axe | Slashing | Medium | Melee | Armor Break: reduce enemy DUR by 1 |
| 5 | Greataxe | Slashing | Slow | Melee | Execute: deal double damage to enemies below 25% HP |
| 6 | Warhammer | Bludgeoning | Slow | Melee | Stun: 20% chance to stun on hit |
| 7 | Mace | Bludgeoning | Medium | Melee | Holy Affinity: +2 damage vs. Undead |
| 8 | Spear | Piercing | Medium | Melee | Reach: attack from 2 squares away |
| 9 | Halberd | Slashing/Piercing | Slow | Melee | Versatile: choose slash or pierce per attack |
| 10 | Katana | Slashing | Fast | Melee | Precision: ignore 1 point of enemy DUR |
| 11 | Rapier | Piercing | Fast | Melee | Riposte: counter-attack on successful dodge |
| 12 | Flail | Bludgeoning | Medium | Melee | Shield Bypass: ignore shield bonuses |
| 13 | Scythe | Slashing | Slow | Melee | Life Harvest: heal 1 HP on kill |
| 14 | Claws/Gauntlets | Slashing | Fast | Melee | Dual Strike: always hits twice at half damage |

### Ranged Weapons

| # | Weapon | Damage Type | Speed | Range | Special Property |
|---|--------|-------------|-------|-------|-----------------|
| 15 | Longbow | Piercing | Medium | Ranged | Snipe: +2 damage at max range |
| 16 | Crossbow | Piercing | Slow | Ranged | Armor Pierce: ignore 2 DUR |
| 17 | Shortbow | Piercing | Fast | Ranged | Rapid Fire: attack twice at -1 damage each |
| 18 | Throwing Axes | Slashing | Medium | Ranged/Melee | Return: axes come back; usable in melee |

### Magic Weapons

| # | Weapon | Damage Type | Speed | Range | Special Property |
|---|--------|-------------|-------|-------|-----------------|
| 19 | Staff | Arcane | Medium | Ranged | Channel: +2 to enchantment damage |
| 20 | Wand | Arcane | Fast | Ranged | Quick Cast: can attack and use ability in same turn |

### WoF Special Weapons (Bonus / Rare Rolls)

In WoF canon, unusual weapons appear including: **Void Scythe**, **Steaming Honeybun**, **Bowling Ball**, **Belt**, and other joke/meme weapons. These can be represented as rare "wild card" slots on the wheel.

| Weapon | Type | Speed | Special |
|--------|------|-------|---------|
| Void Scythe | Dark/Slashing | Medium | Deals Void damage; ignores all resistances |
| Bowling Ball | Bludgeoning | Slow | Knockback: push enemy 3 spaces |
| Belt | Bludgeoning | Fast | Intimidate: -1 enemy STR on hit |
| Frying Pan | Bludgeoning | Medium | Clang: 30% stun chance |
| Chain Whip | Slashing | Medium | Grab: pull enemy 2 spaces closer |

---

## 5. Weapon Enchantment Wheel

15 enchantments that modify weapon damage and add effects. **Conditional: requires Weapon Mastery of Adept or higher to activate** (Expert for Legendary-tier enchantments), unless the character is a Dwarf (Forge Dwarf bypasses this requirement per WoF canon).

| # | Enchantment | Damage Bonus | Effect | Tier |
|---|-------------|-------------|--------|------|
| 1 | **Fire** | +2 Fire | Burn: 1 damage/turn for 3 turns | Standard |
| 2 | **Ice** | +1 Ice | Slow: enemy SPD -2 for 2 turns | Standard |
| 3 | **Lightning** | +2 Lightning | Stun: 25% chance to skip enemy turn | Standard |
| 4 | **Poison** | +1 Poison | Toxic: 1 damage/turn, stacking up to 3 | Standard |
| 5 | **Holy** | +2 Radiant | Bane: +3 damage vs. Undead/Demon | Standard |
| 6 | **Shadow** | +2 Dark | Life Drain: heal 1 HP per hit | Standard |
| 7 | **Wind** | +1 Air | Swift Strike: +1 SPD while wielding | Standard |
| 8 | **Earth** | +1 Physical | Quake: 15% chance to knock enemy prone | Standard |
| 9 | **Arcane** | +2 Arcane | Mana Surge: enchantment effects last 1 extra turn | Advanced |
| 10 | **Blood** | +2 Physical | Sacrifice: deal +3 damage but lose 1 HP per attack | Advanced |
| 11 | **Void** | +3 Void | Nullify: strip one enemy buff on hit | Advanced |
| 12 | **Celestial** | +2 Radiant | Blessing: +1 to all allies' stats within range | Advanced |
| 13 | **Chaos** | +1-4 Random | Wild Magic: random element each hit; random bonus damage | Legendary |
| 14 | **Soul** | +2 Necrotic | Soul Rend: reduce enemy max HP by 1 per hit (permanent in battle) | Legendary |
| 15 | **Temporal** | +1 Time | Time Slip: 20% chance to take an extra turn | Legendary |

**Conditional Logic:**
- Standard enchantments: require Adept weapon mastery
- Advanced enchantments: require Expert weapon mastery
- Legendary enchantments: require Master or Grandmaster weapon mastery
- Dwarf racial bypass: Forge Dwarves ignore mastery requirements
- Dual Wielder archetype: gets two enchantments (one per weapon)
- Stacking: same enchantment on both weapons doubles the effect

---

## 6. Armor Wheel

12 armor options across 4 categories. Armor affects DUR, SPD, stealth capability, and has special properties.

### Light Armor

| # | Armor | DUR Bonus | SPD Penalty | Special |
|---|-------|-----------|-------------|---------|
| 1 | Leather Armor | +1 | 0 | Silent: no stealth penalty |
| 2 | Studded Leather | +2 | 0 | Deflect: 10% chance to negate ranged attacks |
| 3 | Shadow Weave | +1 | 0 | Shadow Meld: +2 to stealth, invisible in darkness |

### Medium Armor

| # | Armor | DUR Bonus | SPD Penalty | Special |
|---|-------|-----------|-------------|---------|
| 4 | Chain Mail | +3 | -1 | Link Defense: reduce slashing damage by 1 |
| 5 | Scale Mail | +3 | -1 | Dragon Scale: +2 resistance to elemental damage |
| 6 | Breastplate | +4 | -1 | Vital Guard: critical hits deal normal damage instead |

### Heavy Armor

| # | Armor | DUR Bonus | SPD Penalty | Special |
|---|-------|-----------|-------------|---------|
| 7 | Plate Armor | +5 | -2 | Fortress: immune to knockback |
| 8 | Full Plate | +6 | -3 | Impenetrable: ignore first 2 damage from each attack |
| 9 | Siege Armor | +7 | -4 | Juggernaut: immune to stun; cannot dodge; cannot stealth |

### Magic Armor

| # | Armor | DUR Bonus | SPD Penalty | Special |
|---|-------|-----------|-------------|---------|
| 10 | Mithral Armor | +4 | 0 | Weightless: counts as Light armor for stealth/movement |
| 11 | Enchanted Robes | +2 | 0 | Arcane Ward: +3 resistance to magic damage; +1 IQ |
| 12 | Elemental Plate | +5 | -1 | Attuned: immune to one element (matches Element Affinity) |

**Conditional Logic:**
- Heavy Armor prevents stealth-based abilities (Rogue/Ninja/Assassin archetypes lose stealth bonuses)
- Berserker archetype: cannot wear Heavy Armor (rage requires freedom of movement)
- Mage/Sorcerer archetype: can only wear Light or Magic armor
- Size interaction: Tiny/Small characters cannot wear Heavy Armor; Colossal characters require custom armor (+50% DUR bonus but costs double)

---

## 7. Element Affinity Wheel

The character's innate elemental nature. This is **separate from weapon enchantment** -- it represents the character's soul/body attunement. Grants passive resistance and synergy bonuses.

| # | Element | Resistance | Vulnerability | Passive Bonus | Synergy |
|---|---------|-----------|---------------|---------------|---------|
| 1 | **Fire** | Fire -50% | Ice +50% | +1 STR | Fire enchantment deals +1 extra |
| 2 | **Ice** | Ice -50% | Fire +50% | +1 DUR | Ice enchantment slow lasts 1 extra turn |
| 3 | **Lightning** | Lightning -50% | Earth +50% | +1 SPD | Lightning enchantment stun chance +10% |
| 4 | **Earth** | Earth -50% | Lightning +50% | +1 DUR | Earth enchantment knockdown chance +10% |
| 5 | **Water** | Water -50% | Lightning +50% | +1 SPD | Healing effects +25% |
| 6 | **Wind** | Wind -50% | Earth +50% | +2 SPD | Dodge chance +10% |
| 7 | **Shadow** | Dark -50% | Holy +50% | +1 IQ | Stealth abilities enhanced |
| 8 | **Holy** | Holy -50% | Dark +50% | +1 DUR | Healing abilities +50%; resist undead effects |
| 9 | **Arcane** | Arcane -50% | Void +50% | +2 IQ | All enchantments deal +1 extra |
| 10 | **Void** | Void -50% | Arcane +50% | +1 STR, +1 IQ | Can nullify one enemy enchantment per battle |
| 11 | **Nature** | Poison -50% | Fire +50% | Regen 1 HP/turn | Companion gains +1 to all stats |
| 12 | **Chaos** | Immune to Chaos | Vulnerable to Order/Holy +25% | Random stat +1-3 each battle | Chaos enchantment range increased |

**Conditional Logic:**
- Element Affinity matching Weapon Enchantment = **Elemental Resonance**: +2 to enchantment damage
- Element Affinity opposing Weapon Enchantment = **Elemental Dissonance**: enchantment damage -1 but gain +1 to a different stat
- Elemental (race) always matches their sub-race element
- Dragonborn element affinity is influenced by (but not forced to match) their breath weapon element

---

## 8. Alignment Wheel

Based on the classic D&D two-axis system (Law-Chaos x Good-Evil). **9 alignments** with mechanical effects.

| # | Alignment | Stat Modifier | Combat Effect | Social Effect |
|---|-----------|--------------|---------------|---------------|
| 1 | **Lawful Good** | +1 DUR, +1 IQ | +2 damage vs Evil-aligned enemies | +2 to diplomacy; trusted by NPCs |
| 2 | **Neutral Good** | +1 IQ | Heal allies for 1 HP when you kill an enemy | Liked by most factions |
| 3 | **Chaotic Good** | +1 SPD, +1 STR | +1 damage when outnumbered | Rebels and outcasts trust you |
| 4 | **Lawful Neutral** | +1 DUR | Block chance +10% | Can serve as judge/arbiter |
| 5 | **True Neutral** | +1 to lowest stat | No bonus damage, but no vulnerability | Accepted everywhere; no faction enemies |
| 6 | **Chaotic Neutral** | +1 SPD | 10% chance to act twice; 10% chance to skip turn | Unpredictable; NPCs wary |
| 7 | **Lawful Evil** | +1 IQ, +1 DUR | +2 damage when attacking from advantage | Can command minions; feared |
| 8 | **Neutral Evil** | +1 STR | Life steal: heal 1 HP per kill | Distrusted; can betray allies for bonus |
| 9 | **Chaotic Evil** | +2 STR, -1 IQ | +3 damage on first attack; berserk chance | Feared by all; attacked on sight by Good |

**Conditional Logic:**
- Paladin archetype requires Good alignment (Lawful Good, Neutral Good, or Chaotic Good). If rolled Evil, re-spin or convert to Dark Paladin (swap Holy for Shadow powers).
- Necromancer archetype requires Neutral or Evil alignment.
- Alignment interacts with Holy/Shadow enchantments: Good + Holy = bonus; Evil + Shadow = bonus; mismatched = penalty.
- Undead races (Skeleton, Vampire) cannot be Lawful Good without a special "Redeemed" trait.

---

## 9. Origin/Background Wheel

15 backgrounds that provide story hooks, skill bonuses, and starting advantages.

| # | Background | Stat Bonus | Skill Bonus | Starting Advantage | Story Hook |
|---|-----------|-----------|-------------|-------------------|------------|
| 1 | **Noble** | +1 IQ | Diplomacy, History | Start with gold + signet ring | Heir to a fallen kingdom |
| 2 | **Peasant** | +1 DUR | Survival, Animal Handling | Start with loyal animal friend | Prophesied commoner rising to greatness |
| 3 | **Outlaw** | +1 SPD | Stealth, Deception | Start with lockpicks + hidden blade | Wanted by a powerful faction |
| 4 | **Scholar** | +2 IQ | Arcana, Investigation | Start with ancient tome (+1 IQ when studied) | Seeking forbidden knowledge |
| 5 | **Soldier** | +1 STR, +1 DUR | Athletics, Intimidation | Start with military-grade weapon (+1 damage) | Veteran of a great war |
| 6 | **Orphan/Urchin** | +1 SPD | Sleight of Hand, Stealth | Start with street smarts (immune to surprise) | Unknown parentage with hidden destiny |
| 7 | **Merchant** | +1 IQ | Persuasion, Appraisal | Start with extra gold; can buy/sell mid-quest | Seeking legendary trade goods |
| 8 | **Clergy/Priest** | +1 IQ | Religion, Medicine | Start with healing potion x3 | Chosen by a deity for a sacred mission |
| 9 | **Gladiator/Arena Fighter** | +1 STR | Performance, Athletics | Start with crowd favor (morale boost in duels) | Escaped champion seeking freedom |
| 10 | **Hermit** | +1 IQ | Nature, Medicine | Start with a secret discovery (re-spin one wheel) | Emerged from isolation with a prophecy |
| 11 | **Pirate/Sailor** | +1 SPD | Navigation, Intimidation | Start with a ship or water mount | Seeking buried treasure or revenge |
| 12 | **Exiled Royal** | +1 IQ, +1 DUR | History, Persuasion | Start with a royal artifact (weak but upgradable) | Reclaiming a stolen throne |
| 13 | **Wandering Monk** | +1 SPD, +1 DUR | Acrobatics, Insight | Start with unarmed combat mastery (Adept) | Seeking spiritual enlightenment through combat |
| 14 | **Blacksmith** | +1 STR | Smithing, Crafting | Can repair/upgrade weapons once per quest | Forging a legendary weapon |
| 15 | **Cursed Bloodline** | +1 STR, -1 IQ | Intimidation, Occult | Start with a cursed power (double-edged ability) | Breaking an ancestral curse |

---

## 10. Companion Wheel

15 companion types. Companions fight alongside the character, provide passive bonuses, or serve utility roles.

| # | Companion | Type | Combat Role | Passive Bonus | Special Ability |
|---|-----------|------|-------------|---------------|----------------|
| 1 | **Wolf** | Animal | Melee Fighter | +1 SPD to owner | Pack Tactics: +1 damage when both attack same target |
| 2 | **Hawk/Eagle** | Animal | Scout | +1 IQ to owner (awareness) | Aerial Strike: ranged attack once per 3 turns |
| 3 | **Bear** | Animal | Tank | +1 DUR to owner | Maul: grapple enemy for 1 turn |
| 4 | **Cat (Shadow Cat)** | Animal | Scout | +1 SPD, +1 stealth | Nine Lives: survive one lethal hit |
| 5 | **Dragon Whelp** | Mythical | Ranged DPS | +1 STR to owner | Breath Attack: small cone AoE (element varies) |
| 6 | **Phoenix** | Mythical | Support | Regen 1 HP/turn to owner | Rebirth: revive owner once at 50% HP |
| 7 | **Imp** | Spirit | Utility | +1 IQ to owner | Trickery: steal one item from enemy |
| 8 | **Spirit Guardian** | Spirit | Tank | +1 DUR to owner | Intercept: take one hit for owner per battle |
| 9 | **Golem (Mini)** | Construct | Tank | +2 DUR to owner | Shield Wall: block all damage for 1 turn |
| 10 | **Raven** | Animal | Scout | +1 IQ to owner | Omen: predict enemy's next action |
| 11 | **Unicorn** | Mythical | Healer | Regen 1 HP/turn | Purify: remove one debuff from owner |
| 12 | **Serpent** | Animal | Melee | +1 SPD | Venom Strike: poison enemy (1 dmg/turn for 3 turns) |
| 13 | **Wraith** | Spirit | Melee DPS | +1 STR | Phase Attack: ignore enemy armor for 1 attack |
| 14 | **War Steed** | Animal | Mount | +2 SPD, charge attack | Trample: AoE damage when charging |
| 15 | **Elemental Sprite** | Spirit | Support | +1 to owner's Element Affinity damage | Elemental Burst: AoE matching owner's element |

**Conditional Logic:**
- Rider archetype spins the **Mount sub-wheel** instead of (or in addition to) the Companion Wheel
- Nature Element Affinity: companion gains +1 to all stats
- Necromancer archetype: companion is always undead variant (Skeletal Wolf, Ghost Hawk, etc.)
- Evil alignment: cannot bond with Unicorn or Phoenix (re-spin)
- Good alignment: cannot bond with Imp or Wraith (re-spin)

---

## 11. Special Ability Wheel

15 unique powers. Each character gets ONE special ability. Some have mastery tiers that are determined by the Power Mastery wheel.

| # | Ability | Type | Effect | Cooldown | Mastery Scaling |
|---|---------|------|--------|----------|----------------|
| 1 | **Teleportation** | Movement | Instantly move to any visible location | 3 turns | Higher mastery = longer range + take allies |
| 2 | **Shapeshifting** | Transformation | Transform into any creature you've defeated | 5 turns | Higher mastery = retain more of your stats |
| 3 | **Time Manipulation** | Temporal | Slow/stop time for 1 turn | 5 turns | Higher mastery = longer duration + rewind |
| 4 | **Shadow Control** | Dark | Create shadow constructs for attack/defense | 2 turns | Higher mastery = more constructs + stronger |
| 5 | **Illusion Creation** | Mental | Create convincing illusions that deal phantom damage | 3 turns | Higher mastery = illusions deal real damage |
| 6 | **Regeneration** | Healing | Heal 3 HP instantly | 4 turns | Higher mastery = more HP + cure status effects |
| 7 | **Psionic Blast** | Mental | AoE mental damage + confusion | 3 turns | Higher mastery = wider AoE + stun |
| 8 | **Elemental Storm** | Elemental | Massive AoE of your affinity element | 5 turns | Higher mastery = larger area + longer duration |
| 9 | **Berserker Rage** | Physical | +4 STR, +2 SPD, -3 IQ for 3 turns | 6 turns | Higher mastery = less IQ penalty + longer duration |
| 10 | **Invisibility** | Stealth | Become invisible for 2 turns | 4 turns | Higher mastery = can attack while invisible |
| 11 | **Gravity Manipulation** | Force | Crush enemies or lift them; area denial | 4 turns | Higher mastery = wider area + can fly |
| 12 | **Necromancy** | Dark | Raise 1-3 fallen enemies as temporary allies | 5 turns | Higher mastery = stronger undead + more of them |
| 13 | **Reality Corruption** | Chaos | Warp reality in an area; random beneficial/harmful effects | 6 turns | Higher mastery = more control over effects |
| 14 | **Demonic Regeneration** | Cursed | Heal to full HP but take a permanent -1 to random stat | Once per battle | Higher mastery = less stat penalty |
| 15 | **Mirror Force** | Defense | Reflect all damage back to attackers for 1 turn | 5 turns | Higher mastery = reflects status effects too |

**WoF Canon Notes:**
- Demonic Regeneration is the most common cursed power
- Reality Corruption is the rarest power
- Power Mastery is spun separately (Novice/Adept/Expert/Master)

---

## 12. Weakness Wheel

15 character weaknesses/vulnerabilities. Every character gets ONE weakness. These create strategic disadvantages and story hooks.

| # | Weakness | Stat Penalty | Combat Effect | Story Effect |
|---|----------|-------------|---------------|-------------|
| 1 | **Sunlight Sensitivity** | -1 SPD in daylight | -2 to all stats in bright light | Must travel at night or in shade |
| 2 | **Hydrophobia** | -2 DUR near water | Cannot fight in water/rain; panic | Cannot cross bodies of water |
| 3 | **Berserker's Curse** | -2 IQ when below 50% HP | May attack allies when enraged | Feared by companions |
| 4 | **Glass Bones** | -2 DUR | Take double damage from bludgeoning | Fragile; must avoid falls |
| 5 | **Magic Allergy** | -1 IQ | Take +50% damage from magic attacks | Cannot use potions |
| 6 | **Bloodlust** | -1 IQ | Must attack nearest enemy (no tactical choice) | Distrusted; seen as dangerous |
| 7 | **Cowardice** | -2 STR vs. larger enemies | -1 to all stats when outnumbered | Runs from boss encounters |
| 8 | **Cursed Mark** | -1 to random stat each battle | Attracts demons/undead; they target you first | Hunted by dark forces |
| 9 | **One Eye / Blind Spot** | -1 IQ | -2 to hit with ranged attacks; flanking bonus against you | Depth perception issues |
| 10 | **Slow Metabolism** | -1 SPD | Always act last in initiative | Cannot benefit from speed buffs |
| 11 | **Honor Bound** | -0 (conditional) | Cannot attack first; cannot attack downed enemies; cannot flee | Must accept all duels |
| 12 | **Elemental Instability** | -1 DUR | Your element randomly changes each battle | Unpredictable; enchantments may misfire |
| 13 | **Pacifist Soul** | -2 STR | Deal -1 damage on all attacks | +2 to all healing/support abilities |
| 14 | **Phobia (roll sub-wheel)** | -2 to all stats vs. trigger | Sub-wheel: Spiders / Heights / Darkness / Fire / Undead | Cannot function near phobia trigger |
| 15 | **Hubris** | -0 (conditional) | Cannot retreat; must fight strongest enemy; refuse healing from "weaker" allies | Overconfident; take unnecessary risks |

**WoF Canon Note:** Skeletons get "the most absurd weaknesses" -- their weakness rolls tend toward comedic/extreme outcomes.

---

## 13. Quest/Destiny Wheel

15 quest archetypes that define the character's story purpose and provide long-term goals with mechanical rewards upon completion.

| # | Destiny | Description | Reward on Completion | Failure Consequence |
|---|---------|-------------|---------------------|-------------------|
| 1 | **Slay the Ancient Evil** | Destroy a world-threatening entity | +3 to all stats; legendary weapon | The evil grows stronger; -1 to all stats permanently |
| 2 | **Reclaim the Throne** | Restore a kingdom to its rightful ruler | Become King/Queen; army of followers | Exile; permanent "Outlaw" status |
| 3 | **Find the Lost Artifact** | Locate a legendary item of immense power | Gain the artifact (+5 to one stat) | Artifact falls to enemy hands |
| 4 | **Avenge the Fallen** | Hunt down and defeat whoever destroyed your people | +2 STR, +2 SPD permanently | Consumed by vengeance; become Chaotic Evil |
| 5 | **Break the Curse** | Remove an ancient curse from self, family, or land | Remove Weakness; gain +2 to weakest stat | Curse worsens; gain second Weakness |
| 6 | **Unite the Races** | Forge an alliance between warring races | All racial bonuses +1; no racial enemies | War breaks out; all stats -1 |
| 7 | **Ascend to Godhood** | Achieve divine status through trials | Become Demi-God race; +2 all stats | Mortal hubris; permanent -2 IQ |
| 8 | **Protect the Innocent** | Defend a village/city/people from destruction | Gain Guardian title; +3 DUR; followers | Guilt; -2 IQ, -1 DUR |
| 9 | **Master the Elements** | Achieve mastery over all elemental forces | Immune to all elemental damage; multi-element attacks | Elemental backlash; vulnerability to all elements |
| 10 | **Survive the Tournament** | Win a grand fighting tournament | +2 STR, +2 SPD; champion title; gold | Disgrace; -1 STR |
| 11 | **Explore the Unknown** | Map uncharted lands/dimensions | Discover new powers (+1 extra Special Ability) | Lost in the unknown; removed from play |
| 12 | **Redeem the Villain** | Convert a major villain to the side of good | Gain a powerful ally; +2 IQ | Villain betrays you; ambush -3 DUR |
| 13 | **Forge the Ultimate Weapon** | Craft or find the most powerful weapon ever made | Weapon gains +5 damage, all enchantments | Weapon is cursed; -2 to all stats while wielding |
| 14 | **Close the Portal** | Seal a dimensional rift threatening the world | +2 DUR, +2 IQ; save the world | Demons pour through; world in chaos |
| 15 | **Become the Legend** | Achieve fame through incredible deeds | +1 to all stats; story told forever | Forgotten; no legacy |

---

## 14. Stat Distribution

### 14.1 Base Stats (4 Core Stats)

| Stat | Abbreviation | Description | Combat Role |
|------|-------------|-------------|-------------|
| **Strength** | STR | Physical power, melee damage, carry capacity | Melee damage modifier; grapple checks |
| **Speed** | SPD | Agility, initiative, dodge chance, attack speed | Turn order; dodge %; number of attacks |
| **Intelligence** | IQ | Magic power, tactical awareness, enchantment effectiveness | Spell damage; enchantment scaling; weakness identification |
| **Durability** | DUR | Toughness, HP pool, damage resistance | HP multiplier; damage reduction; armor effectiveness |

### 14.2 Base Stat Generation

Each stat starts with a **base value rolled on the stat wheel**:

| Roll | Value | Rarity | Label |
|------|-------|--------|-------|
| 1 | 1-2 | Common (20%) | Pathetic |
| 2 | 3-4 | Common (20%) | Weak |
| 3 | 5-6 | Uncommon (20%) | Average |
| 4 | 7-8 | Uncommon (15%) | Strong |
| 5 | 9-10 | Rare (12%) | Exceptional |
| 6 | 11-12 | Rare (8%) | Legendary |
| 7 | 13-15 | Ultra Rare (5%) | Mythic |

Each stat (STR, SPD, IQ, DUR) is spun independently on this wheel.

### 14.3 Stat Modification Order

Stats are modified in this sequence:
1. **Base Roll** (from stat wheel)
2. **+ Race Modifier** (from race/sub-race table)
3. **+ Size Modifier** (from size table)
4. **+ Archetype Modifier** (from class/archetype)
5. **+ Alignment Modifier** (from alignment)
6. **+ Background Modifier** (from origin)
7. **+ Element Affinity Modifier** (passive bonus)
8. **+ Companion Modifier** (passive bonus from companion)
9. **- Weakness Modifier** (penalties from weakness)

**Final Stat = Base + All Modifiers (minimum 1, no stat can go below 1)**

### 14.4 Stat Interactions

| Stat | Affects | Formula |
|------|---------|---------|
| STR | Melee Damage | Weapon Base Damage + STR |
| STR | Carry Capacity | STR x 10 lbs (modified by Size) |
| SPD | Initiative | SPD + weapon speed modifier |
| SPD | Dodge Chance | SPD x 3% (base) |
| SPD | Attacks per Turn | 1 (base) + 1 if SPD > 10 |
| IQ | Magic Damage | Spell Base Damage + IQ |
| IQ | Enchantment Bonus | Enchantment damage + (IQ / 3, rounded down) |
| DUR | Hit Points | DUR x 5 (base HP) |
| DUR | Damage Reduction | DUR / 4 (rounded down) |

---

## 15. Fight Mastery Wheel

Determines the character's combat style proficiency. Two components: **Fight Style** (what type) and **Mastery Tier** (how skilled).

### 15.1 Fight Style Wheel (12 Styles)

| # | Fight Style | Primary Stat | Bonus | Description |
|---|------------|-------------|-------|-------------|
| 1 | **Sword Master** | STR/SPD | +2 damage with swords; parry chance +15% | Elegant blade techniques; balanced offense/defense |
| 2 | **Brawler** | STR | +2 unarmed damage; grapple chance +20% | Close-quarters combat; fists and body |
| 3 | **Tactician** | IQ | +1 to all ally stats; predict enemy moves | Strategic mind; buff/debuff specialist |
| 4 | **Berserker** | STR | +3 STR when below 50% HP; -2 IQ | Reckless fury; damage increases as HP drops |
| 5 | **Duelist** | SPD | +2 dodge; riposte on successful dodge | One-on-one specialist; counter-attacker |
| 6 | **Shield Bearer** | DUR | +3 DUR with shield; cover allies | Defensive specialist; protector |
| 7 | **Archer** | SPD/IQ | +2 ranged damage; snipe from max range | Ranged specialist; precision strikes |
| 8 | **Martial Artist** | SPD/STR | +1 SPD, +1 STR; combo attacks (chain hits) | Unarmed/light weapon; speed-based combos |
| 9 | **Battle Mage** | IQ/STR | Can attack and cast in same turn | Hybrid melee/magic fighter |
| 10 | **Assassin** | SPD | First strike from stealth deals 3x damage | Stealth-based; one-shot specialist |
| 11 | **Warlord** | IQ/STR | Command allies; +1 to all ally attacks | Leader; army-scale combat specialist |
| 12 | **Beast Tamer** | IQ | Companion deals double damage; can command wild beasts | Companion-focused combat style |

### 15.2 Weapon Mastery Tier Wheel

Spun separately to determine proficiency level with weapons.

| Tier | Probability | Bonus | Unlocks |
|------|------------|-------|---------|
| **Novice** | 25% | +0 damage; basic attacks only | Basic weapon use; no enchantments |
| **Adept** | 35% | +1 damage; unlock weapon special property | Standard enchantments; weapon special property |
| **Expert** | 25% | +2 damage; unlock advanced techniques | Advanced enchantments; combo attacks |
| **Master** | 12% | +3 damage; unlock master techniques | Legendary enchantments; signature moves |
| **Grandmaster** | 3% | +4 damage; transcendent weapon mastery | All enchantments; unblockable attacks; weapon creates shockwaves |

### 15.3 Power Mastery Tier Wheel

Same tier system applied to the Special Ability.

| Tier | Probability | Effect |
|------|------------|--------|
| **Novice** | 25% | Ability is weak; long cooldown; limited range |
| **Adept** | 35% | Standard effectiveness; normal cooldown |
| **Expert** | 25% | Enhanced effect; reduced cooldown; wider range |
| **Master** | 12% | Powerful version; short cooldown; large range |
| **Grandmaster** | 3% | Maximum power; minimal cooldown; battlefield-wide range |

---

## 16. Conditional Logic & Synergies

### 16.1 Race-Class Synergies

| Race | Best Archetype | Synergy Bonus |
|------|---------------|---------------|
| Elf + Mage | +1 IQ | Elven arcane tradition |
| Dwarf + Warrior | +1 DUR | Dwarven fortitude |
| Orc + Berserker | +1 STR | Orcish battle rage |
| Fairy + Ninja | +1 SPD | Fey stealth |
| Skeleton + Necromancer | +1 IQ | Undead affinity |
| Human + Slayer | +2 vs prey race | Adaptable hunters (WoF canon) |
| Vampire + Rogue | +1 SPD | Predator stealth |
| Golem + Gladiator | +1 DUR | Constructed durability |
| Dragonborn + Rider | +1 SPD | Draconic mount bond |
| Demon + Godly | +1 to all | Dark divinity |

### 16.2 Element-Enchantment Matching

- **Same Element = Resonance:** +2 enchantment damage
- **Opposing Element = Dissonance:** -1 enchantment damage, +1 to unrelated stat
- **Neutral pairing:** no bonus or penalty

### 16.3 Size-Weapon Restrictions

| Size | Cannot Use | Bonus With |
|------|-----------|-----------|
| Tiny | Heavy weapons, Greatsword, Greataxe, Halberd | Dagger (+1), Wand (+1) |
| Small | Greatsword, Siege weapons | Shortbow (+1), Rapier (+1) |
| Medium | None | None (baseline) |
| Large | None | Two-handed used one-handed |
| Giant | Dagger (no bonus), Wand (too small) | Greatsword (+2), Warhammer (+2) |
| Colossal | Dagger, Wand, Shortbow | All heavy weapons (+3); can throw boulders |

### 16.4 Alignment-Power Restrictions

- Good alignment: cannot use Necromancy, Demonic Regeneration (re-spin)
- Evil alignment: cannot use Mirror Force (it's a protective/selfless ability -- re-spin)
- Chaotic alignment: +1 to Chaos-type effects
- Lawful alignment: +1 to defensive/order-type effects

### 16.5 Archetype-Enchantment Prerequisites

- **Standard Enchantments:** require Adept+ weapon mastery
- **Advanced Enchantments:** require Expert+ weapon mastery
- **Legendary Enchantments:** require Master+ weapon mastery
- **Dwarf Override:** Forge Dwarves bypass all mastery requirements for enchantments
- **Dual Wielder:** gets two separate enchantments, one per weapon

---

## 17. Spin Order & Flow

The recommended spin order for the 15 wheels, with dependencies noted:

```
SPIN ORDER:
===========

1.  RACE WHEEL          --> determines sub-race wheel
2.  SIZE WHEEL           --> modified by race (some forced)
3.  STAT WHEELS (x4)     --> STR, SPD, IQ, DUR (base values)
4.  ARCHETYPE WHEEL      --> may trigger sub-wheels (mount, god, prey, artifact)
5.  ALIGNMENT WHEEL      --> may restrict archetype (Paladin needs Good, etc.)
6.  ORIGIN/BACKGROUND    --> adds flavor + minor stat mods
7.  ELEMENT AFFINITY      --> determines resistance/vulnerability
8.  WEAPON WHEEL          --> may spin twice for Dual Wielder
9.  WEAPON MASTERY        --> determines enchantment access tier
10. WEAPON ENCHANTMENT    --> gated by mastery tier
11. FIGHT STYLE WHEEL     --> combat specialization
12. COMPANION WHEEL       --> may be replaced by Mount wheel for Rider
13. SPECIAL ABILITY       --> unique power
14. POWER MASTERY         --> determines ability strength
15. WEAKNESS WHEEL        --> character flaw/vulnerability

POST-SPIN:
==========
- Calculate final stats (base + all modifiers)
- Check synergies (race+class, element+enchantment)
- Apply restrictions (size+weapon, alignment+power)
- Resolve conflicts (re-spin if incompatible)
- Generate Quest/Destiny (last spin, uses all previous context)
```

---

## Appendix A: WoF Canon Reference

**Source:** The Wheel of Faith TikTok (@the.wheel.of.fait), WoF Arena mobile game, WoF Wiki (Fandom)

### Known WoF Races (from wiki/community)
Angel, Animorph, Cosmic Warrior, Demi-God, Demon, Devil, Dragon Slayer, Dryad, Dwarf, Fey/Fairy, Elemental, Elf, Spirit, Giant, Goblin, God, Golem, Hivemind, Human, Mythical Beast, Orc, Primordial, Cyborg, Merfolk, Skeleton, Vampire, Werebeast, Chimekin, Gnome, Siren, Android, Dragon

### Known WoF Archetypes (from wiki/community)
Warrior, Paladin, Ninja, Gladiator, Weaver, Slayer, Rider, Godly, Dual Wielder, Archaeologist, Necromancer, Berserker, Equaliser, Corrupted/Cultist (merged in S6), Martial Artist

### Known WoF Stats
STR (Strength), SPD (Speed), DUR (Durability), IQ (Intelligence)

### Known WoF Weapons (examples)
Void Scythe, Steaming Honeybun, Bowling Ball, Belt (plus standard fantasy weapons)

### Known WoF Powers (examples)
Illusion Creation, Shadow Control, Psionic Blast, Regeneration, Demonic Regeneration (most common cursed power), Reality Corruption (rarest)

### Season History
- S3: Archetypes introduced (for races below Elementals)
- S6: Corrupted + Cultist archetypes merged
- S8: 5 new races, 6 reworked races, 8 new archetypes, 50+ new enchants/powers/weapons/weaknesses, new backstory wheel

### WoF Arena (Mobile Game)
- Platform: iOS + Android
- Beta since April 2025, targeting official release 2026
- Features: character battles, tournaments, lore
- Comics: GENESIS, CHAOS WAR, CHARACTER CHRONICLES

---

## Appendix B: Research Sources

- [The Wheel of Faith (Official Site)](https://wheeloffaith.com/)
- [The Wheel of Faith Wiki (Fandom)](https://the-wheel-of-faith.fandom.com/wiki/)
- [WoF TikTok (@the.wheel.of.fait)](https://www.tiktok.com/@the.wheel.of.fait)
- [D&D 5e Races - Arcane Eye](https://arcaneeye.com/players/dnd-5e-races/)
- [Complete Guide to D&D 5E Races & Subraces](https://www.cheekykokako.com/games/dungeons-and-dragons-races-and-subraces/)
- [RPG Class Archetypes - Game Designing](https://gamedesigning.org/gaming/rpg-classes/)
- [Ultimate RPG Classes Guide](https://www.rpgwh.net/rpg-classes/)
- [Fantasy Character Classes - TV Tropes](https://tvtropes.org/pmwiki/pmwiki.php/Main/FantasyCharacterClasses)
- [D&D Alignment System - Wikipedia](https://en.wikipedia.org/wiki/Alignment_(Dungeons_&_Dragons))
- [D&D Alignment Explained - CBR](https://www.cbr.com/dnd-the-alignments-explained/)
- [D&D 5e Armor - Roll20](https://roll20.net/compendium/dnd5e/Armor)
- [D&D Creature Sizes - The Gamer](https://www.thegamer.com/dungeons-dragons-dnd-creature-sizes-explained-guide/)
- [RPG Weapons Guide - Kevuru Games](https://kevurugames.com/blog/a-comprehensive-guide-for-rpg-weapons-different-types-tips-for-creation-examples/)
- [D&D Ability Scores - Roll20](https://roll20.net/compendium/dnd5e/Ability%20Scores)
- [Character Flaws - DnD Speak](https://www.dndspeak.com/)
- [Elemental Powers - TV Tropes](https://tvtropes.org/pmwiki/pmwiki.php/Main/ElementalPowers)
- [D&D Backgrounds - D&D Beyond](https://www.dndbeyond.com/backgrounds)
- [Fantasy Animal Companions - Awesome Dice](https://www.awesomedice.com/pages/fantasy-animal-companions-in-d-d-5e)

---

*End of Research Document. Total: 15 wheel categories fully specified with options, stat modifiers, conditional logic, sub-wheels, and synergies.*
