# Wheel of Faith — proposed trigger fixes

**Status: proposal only. Nothing in the game has been changed.**

Every row below is a trigger value that no wheel can produce, and what I'd change it to. Approve the ones you like and I'll apply exactly those.

Three tiers of confidence:

- **Typo** — the value already exists, just spelled differently. No judgement involved.
- **Rename** — the concept clearly still exists under a new name.
- **Your call** — the old vocabulary has no obvious replacement. My suggestion is a guess.

---

## 1. Typos — free wins (6)

These are the same value with different spelling. Nothing to decide.

| wheel | trigger expects | wheel actually returns | fix |
|---|---|---|---|
| race | `Gnome` | `Gnomes` | → `Gnomes` |
| race | `Troll` | `Trolls` | → `Trolls` |
| weaponMastery | `Grandmaster` | `Grand Master` | → `Grand Master` |
| powerMastery | `Awakened` | `Awakening` | → `Awakening` |
| extraPower | `Spatial Manipulation` | `Space Manipulation` | → `Space Manipulation` |
| extraPower | `Nightmare Manipulation` (on **enchantment**) | exists on **extraPower** | trigger is on the wrong wheel — move to `extraPower` |

That last one is worth a look: `darkEnchant` triggers on the *enchantment* wheel but waits for `Nightmare Manipulation`, which is an **extraPower** value. The trigger was pointed at the wrong wheel.

---

## 2. Tier ladders — mechanical (the bulk of it)

Eight wheels are 10-step ladders that got re-worded. The old triggers used power-scaling names; the wheels now use their own vocabulary. Mapping by ladder position:

### fight — `Darwizzy, Rookie, Amateur, Skilled, Champion, Meta-Martial, Planetary Fighter, Cosmic Brawler, Universal Gladiator, Unbeatable`

| expects | → | note |
|---|---|---|
| `Expert` | `Skilled` | |
| `Master` | `Champion` | |
| `Grand Master` | `Meta-Martial` | |
| `Legendary` | `Planetary Fighter` | |
| `Myth`, `Mythic` | `Cosmic Brawler` | |
| `Transcendent`, `God Tier`, `God of War` | `Universal Gladiator` | |
| `One Punch`, `Baki Level` | `Unbeatable` | |

### durability — `Darwizzy, Fragile, Mid, Peak Human, Superhuman, Nuclear, Planetary, Cosmic, Universal, Regenerative`

| expects | → |
|---|---|
| `Planet Level` | `Planetary` |
| `Star Level`, `Galaxy Level` | `Cosmic` |
| `Universe Level`, `Multiverse Level` | `Universal` |
| `Invulnerable`, `Absolute`, `Indestructible` | `Regenerative` — **your call**, see note |

*Note:* `Regenerative` sits at the top of the ladder but means something different from "indestructible". If the sub-wheels about being unkillable should fire on `Universal` instead, say so.

### iq — `Darwizzy, Dumb, Mid, Quite Sharp, Sharp, Genius, Prodigious, Nigh-Omniscience, Omniscient, Cosmic`

| expects | → |
|---|---|
| `Genius (160+)` | `Genius` |
| `Super Genius (200+)` | `Prodigious` |
| `Beyond Measurement` | `Nigh-Omniscience` |
| `Transcendent` | `Omniscient` |
| `Cosmic Awareness` | `Cosmic` |
| `Hive Mind` | **wrong wheel** — `Hive Mind` is a **race**, not an IQ. Move the trigger to `race`. |

### speed — `Darwizzy, Slow, Mid, Peak Human, Superhuman, Supersonic, Hypersonic, Light Speed, FTL, Cosmic, Universal, Omnipresent`

| expects | → |
|---|---|
| `Mach 1` | `Supersonic` |
| `Mach 10`, `Mach 100` | `Hypersonic` |
| `Sub-Light` | `Light Speed` |
| `Instant Transmission`, `Time Skip` | `Omnipresent` |
| `Infinite` | `Universal` |

### strength — `Darwizzy, Weak, Mid, Peak Human, Superhuman, Mighty, Herculean, Cosmic, Universal, Boundless`

| expects | → |
|---|---|
| `Mountain`, `Continental` | `Herculean` |
| `Planetary`, `Solar` | `Cosmic` |
| `Galactic` | `Universal` |

### powerMastery — `Darwizzy, Dormant, Awakening, Controlled, Master, Archmage, Planetary, Cosmic, Universal, Omnipotent`

| expects | → |
|---|---|
| `Sealed Power`, `Limiter Active`, `Restrained`, `Holding Back` | `Dormant` |
| `Uncontrollable` | `Awakening` |
| `Grandmaster` | `Archmage` |
| `Legendary` | `Planetary` |
| `Mythical` | `Cosmic` |
| `Divine` | `Universal` |
| `Perfect`, `Transcendent`, `One With Power`, `One With the Power`, `God Tier`, `God of Power` | `Omnipotent` |

### weaponMastery — `Darwizzy, Novice, Apprentice, Adept, Expert, Master, Grand Master, Transcendent, Universal, Cosmic`

| expects | → |
|---|---|
| `Grandmaster` | `Grand Master` (typo) |
| `Legendary`, `Legendary Mastery` | `Transcendent` |
| `Mythical` | `Universal` |
| `Divine`, `God of Blades` | `Cosmic` |
| `Soul Bonded`, `Spirit Linked`, `One With the Weapon` | `Cosmic` — **your call**, these read like a bond, not a rank |

### size — `3.5ft` … `9.5ft` (13 heights)

This one needs you most. The wheel became literal heights; the triggers are still creature-scale words. My suggestion:

| expects | → |
|---|---|
| `Microscopic`, `Atom`, `Subatomic`, `Tiny` | `3.5ft` |
| `Small` | `4ft`, `4.5ft` |
| `Large` | `7ft`, `7.5ft` |
| `Huge` | `8ft`, `8.5ft` |
| `Colossal`, `Titan`, `Titanic`, `Kaiju`, `Mountainous`, `Planetary`, `Star`, `Stellar`, `Galactic`, `Cosmic` | `9ft`, `9.5ft` |

**Honest flag:** this one is a real loss of range. A 9.5ft character isn't a Kaiju, and sub-wheels written for planet-sized characters will read oddly on someone who's 9 foot 6. The alternative is adding the big tiers back to the size wheel as separate entries. That's your design decision — I'd lean toward adding them back rather than squashing them into heights.

---

## 3. Renames — concept still exists (extraPower, weapon, enchantment, race)

### extraPower

| expects | → |
|---|---|
| `Reality Warp`, `Reality Warping` | `Reality Manipulation` |
| `Time Stop`, `Time Reversal`, `Temporal Control`, `Chronokinesis`, `Time Loop` | `Time Manipulation` |
| `Crystallokinesis`, `Gem Magic` | `Crystal Manipulation` |
| `Thunder Manipulation`, `Storm Manipulation`, `Electromagnetism` | `Lightning Manipulation` |
| `Healing Factor`, `Cellular Regeneration`, `Recovery`, `Bio-Regeneration`, `Adaptive Healing` | `Regeneration` |
| `Corruption`, `Curse Manipulation` | `Cursing` |
| `Demon Summoning` | `Summoning` |
| `Absolute Nullification` | `Nullification` |
| `Energy Projection` | `Energy Manipulation` |
| `Plasma Control` | `Plasma Manipulation` |
| `Arcane Amplification` | `Amplification` |
| `Magic Manipulation`, `Runic Magic` | `Enchanting` |
| `Domain Expansion`, `Territory Creation` | `Dimension Manipulation` — **your call** |
| `Existence Erasure`, `Omnipotence Fragment`, `True Immortality` | no equivalent — **your call** |
| `Ancestral Power`, `Echo Power`, `Inheritance`, `Legacy Power`, `Reincarnation Power` | no equivalent — **your call** (Reincarnation is a *race*) |

### weapon

| expects | → |
|---|---|
| `Living Weapon`, `Soul Blade` | `Soul Reaper` |
| `Demon Weapon`, `Cursed Weapon` | `Cursed Weapon` |
| `Divine Weapon`, `God Slayer`, `Godslayer` | `Divine Armament` |
| `Legendary Blade`, `Legendary Artifact`, `Mythic Artifact`, `World Ender` | `Forbidden Blade` — **your call** |

*Note:* `Living Weapon` also exists on the **enchantment** wheel. If those sub-wheels meant the enchantment, point the trigger at `enchantment` instead.

### enchantment

| expects | → |
|---|---|
| `Void` | `Voidtouch` |
| `Death Touch` | `Death Mark` |
| `Reality Warp` | `Reality Anchor` |
| `Corruption`, `Blood Curse` | `Cursed Edge` |
| `Nullification`, `Anti-Magic`, `Spell Absorption` | `Power Negation` / `Enchant Negation` |
| `Mind Control` | `Madness Touch` |
| `Ancient Rune`, `Forbidden Sigil`, `Eldritch Inscription`, `Primordial Mark`, `Celestial Seal`, `Abyssal Brand`, `Warding`, `Barrier`, `Shield Enchantment`, `Protection`, `Mana Shield`, `Holy Ward`, `Aegis`, `Infinity Edge`, `Dimensional Cut`, `Void Eater`, `Soul Harvest`, `Reality Shatter`, `Time Freeze`, `Gravity Collapse`, `Dimension Slash`, `Phoenix Rebirth`, `Celestial Judgment` | no equivalent — **your call**. There are 142 enchantments; these 23 sub-wheels were written for a set that no longer exists. Either re-point them at existing enchantments or add these as new entries. |

### race

| expects | → |
|---|---|
| `Gnome` | `Gnomes` (typo) |
| `Troll` | `Trolls` (typo) |
| `Werewolf` | `Werebeast` |
| `Shapeshifter` | `Animorph` |
| `Ghost`, `Undead` | `Spirit` |
| `Celestial` | `Angel` |
| `Shadow` | `Nightborn` |
| `Minotaur`, `Halfling`, `Insectoid`, `Arachnid` | no equivalent — **your call** (add to the race wheel, or re-point) |

---

## 4. backstory, conquered, title, weakness — mostly your call

These four have triggers written against wheels that were rewritten wholesale.

**backstory** (32 dead values) — the current wheel has 87 entries, none matching. Several map cleanly by meaning:

| expects | → |
|---|---|
| `Betrayed by their best friend` | `Betrayed by the one they trusted most` |
| `Lost everything and rebuilt from nothing` | `Rose from absolute nothing` |
| `Was betrayed by their closest ally and left for dead — crawled back from literal hell` | `Was left for dead and rebuilt from scratch` |
| `Created by a villain as a weapon, then broke free` | `Created to be a weapon` |
| `Was the villain of someone else's story before becoming the hero of their own` | `Was the villain in someone else's story` |
| `Made a pact with the void itself` | exists on the **conquered** wheel — wrong wheel |
| `Raised by wolves in the wilderness`, `Was abandoned as a child and raised by monsters` | `Raised by monsters` |
| `Sold their soul and bought it back at a terrible price` | `Sold their soul for power` |
| the remaining ~22 | no equivalent — **your call** |

**conquered** (26 dead values) — the wheel is now 28 narrative sentences; the triggers are all short phrases like `Through Diplomacy`, `Through Betrayal`, `Single Combat`. **None map cleanly.** This looks like the conquered wheel was rewritten from a category list into prose. 14 sub-wheels depend on it and all are dead. Options: (a) re-point each to the closest narrative entry, (b) add short-phrase entries back, (c) retire those sub-wheels. Needs you.

**title** (33 dead values) — the wheel has 120 titles, but not the ones the triggers want. Some obvious pairs: `The Emperor`/`The Ruler`/`The Sovereign` → `The King`; `The Monster`/`The Abomination` → `The Butcher`; `The Immortal`/`The Deathless`/`The Unkillable` → `The Undying`; `The Chosen One` → `The Chosen`; `The Infinite` → `The Infinity`; `The Mythic` → `The Myth`. The rest need you.

**weakness** (6 dead values)

| expects | → |
|---|---|
| `Blind` | `Limited Vision` |
| `Overpowered Instability` | `Power Fluctuations` |
| `Cannot Control Full Power` | `Is Afraid of Own Power` |
| `Vengeance Sworn`, `Blood Debt`, `Oath Bound` | `Cursed Mark` — **your call** |

---

## What I'd do first

I simulated sections 1 and 2 against the real data rather than guessing at the impact:

| | before | after sections 1+2 |
|---|---|---|
| Sub-wheels that can never fire | 55 | **25** |
| Sub-wheels with some dead values | 95 | 62 |
| Fully clean | 162 | **225** |

So the mechanical half alone **revives 30 of the 55 dead sub-wheels and makes 63 more fully clean** — without a single writing decision from you.

The remaining 25 dead ones are almost entirely `conquered` (14) and `enchantment`, which are section 4 territory: those wheels were rewritten wholesale and need your words, not my guesses.

Say which sections you want and I'll apply exactly those, then re-run the audit to confirm the numbers move as predicted.
