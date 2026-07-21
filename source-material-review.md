# BBA Source Material Accuracy Review (NB-11)

**File:** `ball-battle-arena.html`
**Reviewed:** 2026-07-21
**Scope:** All 21 characters -- JJK (14 including Kashimo) and Cyberpunk 2077 (9 including Adam Smasher).

**Note:** Sukuna and Kenjaku are listed in the review request but do NOT exist as playable characters in the game. Sukuna is only referenced in a single boss HP-check line (line 5062). Kenjaku is not referenced anywhere in the code.

---

## Summary

Most characters are solid implementations that capture the spirit of their source material. The JJK characters generally use correct technique names and mechanics. Issues fall into three categories: (1) creative mechanics that contradict source lore, (2) minor naming/description inaccuracies, and (3) missing abilities from later arcs. The Cyberpunk characters have acceptable creative liberties, with a few notable departures.

---

## JJK Characters

### 1. Gojo Satoru (Boss)

**What's implemented:**
- Infinity barrier -- absorbs 5 hits (3 when Awakened), regenerates slowly
- Alternating Red (repulsion projectile, pushes enemies) and Blue (attraction orb, pulls enemies toward Gojo)
- Hollow Purple special -- warning line then thick beam (3.5x ATK)
- Awakened Domain Expansion: Infinite Void -- freezes all enemies, charges 4s, fires massive Purple (5x ATK)
- Awakened Purple: 7% chance on normal attacks (2.5x ATK, 4s cooldown)
- Revival mechanic: first death triggers Awakening at full HP with boosted stats
- Spin mechanic: captures enemy in orbit, deals damage, then launches

**Canon accuracy:**
- REVERSAL: RED -- Repulsive force. Code: pushes enemies away. ACCURATE.
- LAPSE: BLUE -- Attractive force. Code: pulls enemies toward Gojo. ACCURATE.
- HOLLOW PURPLE -- Combination of Red and Blue. ACCURATE.
- INFINITY -- Automatic defense stopping attacks. ACCURATE.
- INFINITE VOID -- Domain that paralyzes targets with infinite information. ACCURATE.
- REVIVAL/AWAKENING -- Based on Gojo's unsealing/return arcs. CREATIVE LICENSE but thematically fitting.

**Issues:**

| Priority | Issue |
|----------|-------|
| MEDIUM | Domain activation uses `'NAH I'D WIN'` (meme line, not from anime). The `specialName` already has `'I ALONE AM THE HONOURED ONE'` -- should use this consistently for the domain text too. |
| LOW | Hollow Purple is fired as standalone projectile rather than showing Red+Blue convergence. Acceptable simplification. |

**Verdict: ACCURATE**

---

### 2. Yuji Itadori

**What's implemented:**
- Divergent Fist -- delayed blue ghost punch that flies to enemy after initial hit
- Black Flash -- chance-based critical with black lightning, screen flash, time pause
- Special: Black Flash Rush -- all hits become Black Flash for 6 seconds
- Cryo combo: Permanent Black Flash but takes 80% more damage

**Canon accuracy:**
- DIVERGENT FIST: ACCURATE -- Delayed secondary cursed energy impact after physical hit. Ghost fist visual is a reasonable interpretation.
- BLACK FLASH: ACCURATE -- Distortion at 0.000001 seconds of impact. Chance-based is correct (cannot be activated at will in canon).
- BLACK FLASH RUSH: CREATIVE LICENSE -- References Yuji's consecutive BF streaks vs Mahito/Sukuna.

**Issues:**

| Priority | Issue |
|----------|-------|
| LOW | Black Flash as an activatable special has no anime basis -- it's always involuntary. Acceptable for gameplay. |
| LOW | No representation of Sukuna's techniques (Dismantle/Cleave) or Blood Manipulation (later developments). Fine for early Yuji. |

**Verdict: ACCURATE (early Yuji)**

---

### 3. Nanami Kento

**What's implemented:**
- Bandage-wrapped blade slash with very high crit rate
- Ratio Technique: guaranteed critical every 7th hit ("RATIO!")
- Special: "I'M WORKING OVERTIME." -- +40% ATK, +60% speed, rapid slashes, crit chance up to 90%, crit mult 2.4x

**Canon accuracy:**
- RATIO TECHNIQUE: PARTIALLY ACCURATE -- In canon, Nanami creates a weak point at the 7:3 ratio on any target's body. The game simplifies this to "every 7th hit = guaranteed crit." Loses the spatial concept but is a reasonable game adaptation.
- OVERTIME BINDING VOW: ACCURATE -- Nanami restricts cursed energy to work hours; exceeding hours dramatically boosts power.
- BLUNT SWORD: ACCURATE -- Nanami's weapon is a blunt blade wrapped in cloth.

**Issues:**

| Priority | Issue |
|----------|-------|
| MEDIUM | Ratio Technique description ("guaranteed crit every 7 hits") slightly misleading. In canon it's spatial weak-point targeting, not sequential. Consider adding a visual "7:3 ratio line" on the target. |

**Verdict: MOSTLY ACCURATE (minor simplification of Ratio Technique)**

---

### 4. Choso

**What's implemented:**
- Piercing Blood -- continuous beam for ~2.5 seconds (slowly tracks toward enemy)
- Blood Edge melee (sword or dagger form during special)
- Special: "FLOWING SUPERNOVA!" -- Flowing Red Scale stat buff + 30 blood orbs across arena + Blood Edge melee mode
- Blood orb chain detonation (Supernova explosions)
- Red Scale: +30% ATK, +40% speed

**Canon accuracy:**
- PIERCING BLOOD: MOSTLY ACCURATE -- Choso's signature long-range blood technique. In manga it's a single concentrated shot, not a continuous beam. The beam version is a departure.
- FLOWING RED SCALE: ACCURATE -- Increases physical abilities by accelerating blood flow.
- SUPERNOVA: ACCURATE -- Exploding blood orb technique. Chain detonation is creative but fitting.
- BLOOD EDGE: NOT CANON -- Choso doesn't form sword/dagger melee weapons from blood. He uses Supernova and other blood manipulation for close combat.

**Issues:**

| Priority | Issue |
|----------|-------|
| HIGH | Blood Edge (sword/dagger melee form) does not exist in source material. Choso's close-range combat uses Supernova (blood orbs), not hardened blood weapons. Should be replaced with Supernova-based melee (compressed blood orb bursts around enemies). |
| MEDIUM | `specialName: 'FLOWING SUPERNOVA!'` combines two distinct techniques into one name. These are separate: Flowing Red Scale (body enhancement) and Supernova (explosive blood orbs). |
| MEDIUM | Piercing Blood as continuous beam differs from manga's single concentrated shot. |

**Verdict: MOSTLY ACCURATE (Blood Edge is the main inaccuracy)**

---

### 5. Toji Fushiguro

**What's implemented:**
- 3-section staff with distance-based attacks: close=knockback, mid=sweep, far=jab
- Passive: dashes closer when out of range
- Special: "HEAVENLY RESTRICTION" -- triangle arena with 3 cursed weapons at corners:
  - Inverted Spear of Heaven (disables defensive abilities like Gojo's Infinity)
  - Split Soul Katana (removes damage reduction, +10% damage taken)
  - Playful Cloud (massive physical damage + heavy knockback)
- Glides along triangle edges, then traps enemy inside with buff zone

**Canon accuracy:**
- HEAVENLY RESTRICTION: ACCURATE -- Zero cursed energy in exchange for extraordinary physical body.
- INVERTED SPEAR OF HEAVEN: ACCURATE -- Nullifies cursed techniques on contact. Disabling Gojo's Infinity is a direct manga reference.
- SPLIT SOUL KATANA: ACCURATE -- Cuts the soul directly, bypassing physical defenses.
- PLAYFUL CLOUD: ACCURATE -- Special Grade cursed tool requiring no cursed energy, scales with physical strength.
- All three weapons are correctly named and their effects match canon.

**Issues:**

| Priority | Issue |
|----------|-------|
| LOW | The "3-section staff" as default weapon is not specifically from manga. Toji primarily uses the Inverted Spear. Acceptable as gameplay weapon. |
| LOW | Triangle arena formation is original creative liberty. Toji fights as a mobile assassin in canon, not a trapper. But it effectively showcases all three weapons. |

**Verdict: HIGHLY ACCURATE**

---

### 6. Mechamaru (Kokichi Muta)

**What's implemented:**
- Phase 1: Drill arms (melee), projectiles (mid), mini rockets (far), jet booster dashes
- Phase 1 Special: Ultra Cannon -- mouth blast (continuous wide beam, 2s)
- Phase 2 (Ultimate Mech): At 30% HP. Bigger body, +50% ATK/DEF, burst missiles. All attacks drain HP.
- Phase 2 Special: Huge blast + defense shield (drains 5% HP)
- Phase 3 (True Form): At 0 HP in Phase 2. Tiny body, weak pistol, survive 12-15s to reform.

**Canon accuracy:**
- MECHAMARU PUPPET: ACCURATE -- Kokichi controls puppet remotely due to Heavenly Restriction.
- ULTRA CANNON / MAXIMUM OUTPUT: ACCURATE -- Mechamaru's primary ranged cursed energy beam.
- ULTIMATE MECHAMARU: ACCURATE -- Empowered form using 17 years of stored cursed energy. HP drain correctly represents finite stored energy.
- 3-PHASE SYSTEM: EXCELLENT conceptual adaptation of Mechamaru's arc.

**Issues:**

| Priority | Issue |
|----------|-------|
| HIGH | Phase 3 "small pistol" is wrong. Kokichi Muta's true body is sickly and nearly immobile due to Heavenly Restriction. He does NOT have a pistol or any weapon. Should have no proper attacks, just desperate survival or a last-ditch cursed energy burst. |
| MEDIUM | "ULTRA CANNON MODE" is not the canon name. Should be "MAXIMUM OUTPUT" or "ULTIMATE MECHAMARU." |
| LOW | Drill arms are creative license; Mechamaru's arms are cannon/launcher-based in canon. |
| LOW | "Reform to Phase 1" mechanic doesn't happen in canon (Kokichi's stored energy was one-shot). |

**Verdict: MOSTLY ACCURATE (excellent concept, Phase 3 pistol is wrong)**

---

### 7. Kashimo Hajime

**What's implemented:**
- Bo staff melee + electric shock on hit (30% chance)
- Dart Rush passive: throws staff to ground, does 3+ random dashes, picks up staff, fires homing bolt
- Special: Mythical Beast Amber (ONE-TIME USE):
  - Orbit phase (2s): Staff orbits, deflects projectiles
  - Charge phase (4.5s): Longest charge in game, electricity builds
  - Flood phase (1s): Electricity floods arena. One-shots non-bosses, 60-70% boss HP.
  - Aftermath: drops to 1 HP, special gone forever

**Canon accuracy:**
- STAFF COMBAT: ACCURATE -- Kashimo uses a bo staff and channels electricity through it.
- ELECTRIC CURSED ENERGY: ACCURATE -- Kashimo's cursed energy has inherent electric properties.
- MYTHICAL BEAST AMBER: HIGHLY ACCURATE concept -- One-time-use true body technique. Kashimo's body disintegrates afterward. The 1 HP aftermath and one-time-only restriction are excellent.

**Issues:**

| Priority | Issue |
|----------|-------|
| MEDIUM | In canon, Mythical Beast Amber is a body transformation (Kashimo becomes living electricity with horn-like protrusion). The "arena flood" is an abstraction that misses the visual transformation. |
| MEDIUM | Staff orbit during Amber is not from canon. Kashimo discards his staff when activating Amber (his body becomes the weapon). |
| LOW | Dart Rush has no source material basis. Kashimo doesn't throw his staff. Original but fits gameplay. |

**Verdict: HIGHLY ACCURATE (Amber mechanic is excellently adapted)**

---

### 8. Ryu Ishigori

**What's implemented:**
- Close range: Shockwave rings (knockback concussive blast)
- Far range: Cannon blasts (heavy explosive fireballs from "pompadour cannon")
- Special: "DESSERT IS SERVED." -- Slow-moving blast that splits into 6+ homing beams
- Weapon visual: Pompadour-mounted cannon

**Canon accuracy:**
- CURSED ENERGY OUTPUT: ACCURATE -- Ryu has the highest cursed energy output in jujutsu history. His blasts are massive energy discharges.
- "DESSERT IS SERVED": ACCURATE -- A Ryu quote from his fight with Yuta in the Sendai Colony arc.
- SHOCKWAVE: PARTIALLY ACCURATE -- Ryu creates shockwaves from his output, though from his fists/body rather than rings.

**Issues:**

| Priority | Issue |
|----------|-------|
| HIGH | "Pompadour cannon" is NOT how Ryu attacks. He fires cursed energy from his fists/body. His pompadour is just his hairstyle. The weapon should be renamed to "Granite Blast" or "Cursed Energy Cannon" and fired from his body, not hair. |
| MEDIUM | Split beam mechanic doesn't match his fighting style. Ryu is known for single overwhelming blasts, not multi-projectile spreads. |

**Verdict: PARTIALLY ACCURATE (pompadour cannon is a creative departure from source)**

---

### 9. Higuruma Hiromi

**What's implemented:**
- Gavel hammer: small throws at range OR devastating big swing up close
- Special: Domain Expansion: Deadly Sentencing -- judges enemy with 3 verdicts:
  - Confiscation (55%): Drains special bar, disables passives 3s
  - Attack Disabled (33%): Enemy can't attack for 6-9s
  - Execution (12%): Executioner Sword -- 10-80% of max HP damage
- Executioner Sword: After verdict, next melee attack is a 4x ATK devastating sword strike

**Canon accuracy:**
- DEADLY SENTENCING: ACCURATE -- Higuruma's domain is a courtroom trial.
- CONFISCATION: ACCURATE -- Strips the target's cursed technique.
- EXECUTIONER SWORD: HIGHLY ACCURATE -- Death penalty verdict grants the sword for a lethal strike.
- GAVEL WEAPON: ACCURATE -- Higuruma's shikigami Judgeman manifests as a gavel.

**Issues:**

| Priority | Issue |
|----------|-------|
| MEDIUM | "Attack Disabled" middle verdict doesn't match any specific anime verdict. In canon there's Confiscation and Death Penalty. The middle tier is a gameplay addition. |
| LOW | Small hammer throws at range are original. Higuruma doesn't throw hammers in canon. |
| LOW | Random roll is a simplification of the trial system (evidence/arguments in canon). |

**Verdict: HIGHLY ACCURATE (gameplay-balanced simplification of trial system)**

---

### 10. Naoya Zenin

**What's implemented:**
- Projection Sorcery: 24-frame dashes toward enemy with frame stacking system
- Frame Burnout: using all 24 frames causes freeze penalty
- Phase 1 Special: 24-Frame Rule -- slows enemies 80%, speed boost for 6s
- Phase 2: Resurrects as Cursed Spirit on first death
- Phase 2 Special: Domain Expansion: Time Cell Moon Palace -- enemies slowed 85%, movement causes internal rupture damage
- Frame Lock: enemy stunned when hit during special/domain

**Canon accuracy:**
- PROJECTION SORCERY: HIGHLY ACCURATE -- Divides one second into 24 frames. Anyone who fails to follow the 24FPS rule gets frozen for one second. Frame consumption and burnout mechanic is a creative interpretation.
- CURSED SPIRIT RESURRECTION: ACCURATE -- Naoya returns as a Cursed Spirit after death.
- TIME CELL MOON PALACE: ACCURATE -- Naoya's domain as Cursed Spirit.
- FRAME LOCK: ACCURATE -- Violating the 24-frame rule causes 1-second freeze.

**Issues:**

| Priority | Issue |
|----------|-------|
| MEDIUM | In canon, Projection Sorcery forces the TARGET to move in the 24-frame pattern. Naoya uses it on himself for speed, but also projects it onto enemies. The game has Naoya dashing (self-use) but doesn't fully represent the technique being applied to enemies. |
| LOW | Cursed Spirit Naoya has a worm/caterpillar form in manga, not represented visually (acceptable for ball art style). |

**Verdict: HIGHLY ACCURATE**

---

### 11. Yuta Okkotsu & Rika (Boss)

**What's implemented:**
- Katana slash + Cursed Energy I/O (every 3rd hit = burst damage, heals 3% dealt)
- Rika companion: independent entity that wanders and performs claw attacks
- Copy system: 20% chance to copy enemy technique, scales with re-copies (up to 80% potency)
- Special: Domain Expansion: Authentic Mutual Love -- spawns domain swords, domain clash vs Gojo possible

**Canon accuracy:**
- KATANA: ACCURATE -- Given to Yuta by Gojo.
- RIKA: ACCURATE -- Special grade cursed spirit bound to Yuta, acts independently.
- COPY TECHNIQUE: HIGHLY ACCURATE -- Yuta's signature ability through Rika.
- CURSED ENERGY I/O: ACCURATE -- Immense energy reserves, healing from damage = reverse cursed technique.
- AUTHENTIC MUTUAL LOVE: ACCURATE name.
- DOMAIN CLASH WITH GOJO: ACCURATE reference.

**Issues:**

| Priority | Issue |
|----------|-------|
| LOW | Domain mechanic (spawning swords from copied techniques) is original. Canon domain amplifies Rika's curse. Acceptable creative liberty. |
| LOW | Rika as small companion undersells her "Queen of Curses" scale. |

**Verdict: HIGHLY ACCURATE**

---

### 12. Todo Aoi

**What's implemented:**
- Melee punch (brawler style, collision-based)
- Passive: Boogie Woogie -- randomly swaps positions (7% chance)
- Special: Boogie Woogie Storm -- 8 cursed papers across arena, rapid swapping for 7s, buffs allies and debuffs enemies per swap

**Canon accuracy:**
- BOOGIE WOOGIE: ACCURATE -- Position swap via clapping. Correct implementation.
- PHYSICAL STRENGTH: ACCURATE -- Todo is an extremely powerful physical fighter.
- CURSED PAPERS AS SWAP ANCHORS: CREATIVE LICENSE -- Reasonable adaptation of Todo swapping with cursed energy-imbued objects.

**Issues:**

| Priority | Issue |
|----------|-------|
| MEDIUM | Buff/debuff on swap has no canon basis. Todo's contribution is tactical (creating openings through swaps), not stat manipulation. |
| LOW | Post-Shibuya, Todo loses his hand and uses Soul Clap (single-hand) -- not represented. |

**Verdict: MOSTLY ACCURATE (buff/debuff is creative liberty)**

---

### 13. Mahoraga (Boss)

**What's implemented:**
- Sword of Extermination: heavy melee, ground slams, wide arc swipes
- Adaptation Wheel: tracks damage types, stacking DR (12% per stack, max 95%). Wheel spins visually.
- Special: Negation Shield -- blocks all damage 3s, resets adaptation stacks by 5-7
- Shinjuku Mode: at lethal damage, enters enhanced mode. 2x sword damage, faster attacks, bypasses all defenses.
- Passive adaptation decay (slow natural unstacking)

**Canon accuracy:**
- SWORD OF EXTERMINATION: HIGHLY ACCURATE -- Blade imbued with positive energy, bypasses any defense including Infinity.
- ADAPTATION WHEEL: HIGHLY ACCURATE -- Adapts to any phenomenon after experiencing it. Stacking DR is an excellent game interpretation.
- DEFENSE BYPASS IN SHINJUKU: ACCURATE -- Adapted Sword bypasses Infinity (Gojo vs Sukuna/Shinjuku fight).

**Issues:**

| Priority | Issue |
|----------|-------|
| MEDIUM | NEGATION SHIELD: Creative license. Mahoraga doesn't have a shield. More importantly, resetting adaptation stacks CONTRADICTS the core mechanic -- adaptation in canon is permanent and cumulative. The special should accelerate adaptation, not reset it. |
| LOW | Shinjuku Mode resurrection is creative license. Mahoraga is summoned by Ten Shadows, doesn't "resurrect" independently. Acceptable for boss context. |

**Verdict: MOSTLY ACCURATE (Negation Shield contradicts adaptation permanence)**

---

### 14. Sukuna & Kenjaku

**NOT PRESENT as playable characters.**
- Sukuna: Referenced only in a boss HP-check (line 5062). Not playable.
- Kenjaku: Not referenced anywhere in the code.

---

## Cyberpunk 2077 Characters

### 15. Mantis Blades

**What's implemented:** Twin arm blades with bleed chance (10%+). Special: homing dash, 3.5x ATK, 80% bleed.

**Canon:** Arm cyberware with retractable blades. Bleed effect and leap attack are accurate.

**Verdict: ACCURATE**

---

### 16. Gorilla Arms

**What's implemented:** Left/right heavy punches + every 3rd hit downslam (AoE). Special: thunder clap shockwaves for 6s.

**Canon:** Cybernetic arms enhancing punch damage, can generate concussive shockwaves with charged attacks.

**Verdict: ACCURATE**

---

### 17. Monowire

**What's implemented:** Whip-range strike with 30% capture/wrap chance. Capture deals crush damage. Special: whip spin with 40% quickhack chance.

**Canon:** Monofilament whip from wrist. Originally had quickhack integration (upload on hit, later patched out).

**Issues:**

| Priority | Issue |
|----------|-------|
| LOW | Capture/wrap mechanic is creative license. Monowire is a slashing weapon, doesn't wrap enemies. |

**Verdict: MOSTLY ACCURATE**

---

### 18. PLS (Projectile Launch System)

**What's implemented:** Explosive energy orb projectile with scaling explosion radius. Special: smart lock-on, 10 rapid homing shots.

**Canon:** Arm cyberware launching explosive projectiles. Homing is from Smart weapons, not PLS specifically.

**Issues:**

| Priority | Issue |
|----------|-------|
| LOW | Smart targeting is from Smart weapon system, not PLS. PLS fires dumb-fire explosives. |

**Verdict: MOSTLY ACCURATE**

---

### 19. Sandevistan

**What's implemented:** Unarmed, speed-based damage. Dodge scales with hits (max 18%). Special: slows all others 75%, +18% dodge, +50% speed, afterimage trail, 6s.

**Canon:** Operating system that slows time perception. Afterimages from Edgerunners anime (David Martinez). Kerenzikov dodge is an accurate cross-reference to another cyberware.

**Verdict: HIGHLY ACCURATE**

---

### 20. Throwing Weapons

**What's implemented:** 3 weapons: AGAOU (explosive), FANG (high dmg), PUNKBLADE (fast). Special: Optical Camo -- invisible, faster, auto-throw, +25% dodge, 7s.

**Canon:** Throwable weapons and Optical Camo both exist in CP2077.

**Issues:**

| Priority | Issue |
|----------|-------|
| LOW | Weapon names (AGAOU, PUNKBLADE) are not CP2077 items. |

**Verdict: MOSTLY ACCURATE**

---

### 21. Katana

**What's implemented:** Quick slash (flat damage, no chaos scaling). Deflect system. Special: Deflect Rush -- slow approach, deflecting projectiles, ends with Judgement Cut finisher.

**Canon:** Standard melee cyberware. Bullet deflection is perk-based in CP2077.

**Issues:**

| Priority | Issue |
|----------|-------|
| MEDIUM | "Judgement Cut" is from Devil May Cry (Vergil's technique), NOT Cyberpunk 2077. Should be renamed to something CP2077-appropriate like "Flash Strike" or "Iai Strike." |

**Verdict: PARTIALLY ACCURATE (DMC crossover element)**

---

### 22. Berserk

**What's implemented:** Shotgun with pellet spread and reload mechanic. Speed scales with damage taken. Special: invincible, instant reload, +40% speed, 4s.

**Canon:** Operating system cyberware that boosts melee damage, armor, and combat abilities. Specifically melee-focused.

**Issues:**

| Priority | Issue |
|----------|-------|
| MEDIUM | Shotgun playstyle contradicts Berserk OS, which is specifically melee-enhancement cyberware in CP2077. Should be melee-focused (enhanced punches, ground pounds, charge attacks). |

**Verdict: PARTIALLY ACCURATE (shotgun + Berserk is a mismatch)**

---

### 23. Adam Smasher (Boss)

**What's implemented:** Close: cybernetic fist + blade slash. Far: explosive burst with warning cone. Special: "YOU'RE NOTHING BUT MEAT" -- mortar barrage, Sandevistan time-slow, arena edge patrol, melee fists, 8s.

**Canon:** Full-body cyborg, Arasaka's top enforcer. Uses heavy artillery in boss fight. "Nothing but meat" is his iconic quote. Uses Sandevistan in Edgerunners anime.

**Verdict: ACCURATE**

---

## Priority Summary

| Priority | Character | Issue |
|----------|-----------|-------|
| HIGH | Choso | Blood Edge (sword/dagger melee) doesn't exist in source -- should be Supernova-based |
| HIGH | Mechamaru | Phase 3 pistol is wrong -- true form (Kokichi) is defenseless, no weapons |
| HIGH | Ryu | "Pompadour cannon" is not how Ryu attacks -- he fires from fists/body, not hair |
| MEDIUM | Gojo | Domain relic uses "NAH I'D WIN" meme instead of actual line |
| MEDIUM | Choso | specialName 'FLOWING SUPERNOVA!' mixes two distinct technique names |
| MEDIUM | Mechamaru | "ULTRA CANNON MODE" should be "MAXIMUM OUTPUT" or "ULTIMATE MECHAMARU" |
| MEDIUM | Kashimo | Amber should be body transformation, not arena flood; staff should be discarded |
| MEDIUM | Naoya | Projection Sorcery should also affect enemies (not just Naoya dashing) |
| MEDIUM | Higuruma | "Attack Disabled" verdict has no specific anime equivalent |
| MEDIUM | Nanami | Ratio Technique simplified from spatial to sequential |
| MEDIUM | Todo | Buff/debuff on swap has no canon basis |
| MEDIUM | Mahoraga | Negation Shield resets adaptation -- contradicts permanent adaptation lore |
| MEDIUM | Katana | "Judgement Cut" is from DMC's Vergil, not Cyberpunk |
| MEDIUM | Berserk | Shotgun contradicts melee-focused Berserk OS |
| LOW | Yuji | Black Flash as activatable special has no anime basis |
| LOW | Toji | Triangle arena special is original, not from source |
| LOW | Yuta | Domain mechanic (swords) is original, not from source |
| LOW | Monowire | Capture/wrap mechanic not from CP2077 |
| LOW | PLS | Smart targeting is from Smart weapons, not PLS |
| LOW | Throwing | Weapon names not from CP2077 |

---

## Suggested Fixes (Priority Order)

### High Priority

1. **Ryu Ishigori** -- Rename "Pompadour cannon" to "Granite Blast" or "Cursed Energy Cannon." Change weapon visual to energy gathering at fists/body rather than hair-mounted cannon. Attack mechanics (blasts, shockwaves) are fine.

2. **Choso -- Blood Edge** -- Replace sword/dagger melee form with Supernova-based close combat: compressed blood orbs that explode around enemies. Keep the chain detonation system. Rename special from "FLOWING SUPERNOVA!" to either "FLOWING RED SCALE" (for the buff) or separate the naming.

3. **Mechamaru -- Phase 3 Pistol** -- Remove pistol. Phase 3 (Kokichi's true body) should have no weapon attacks, only desperate survival (dodging, weak cursed energy burst as last resort). This makes the survival timer more thematic.

### Medium Priority

4. **Gojo -- Domain Text** -- Change `showRelicText('NAH I\'D WIN', ...)` to use the existing `specialName` value: `'I ALONE AM THE HONOURED ONE'`.

5. **Mahoraga -- Negation Shield** -- Change the special so it does NOT reset adaptation stacks. Instead, have it accelerate adaptation (instantly gain stacks vs current damage types) or use "Wheel Turn" as a guaranteed-hit Sword of Extermination attack.

6. **Berserk** -- Consider changing from shotgun to melee-focused (enhanced punches, ground pounds). Or rebrand as a generic "Shotgun" build rather than Berserk OS.

7. **Katana -- Judgement Cut** -- Rename to "Flash Strike," "Iai Strike," or "Thermal Slash." Remove DMC reference.

### Low Priority

8. **Nanami** -- Add a visual "7:3 ratio line" on the target. Counter can stay, but indicator would reference the spatial nature.

9. **Todo** -- Replace stat buff/debuff with positional advantage effects (swapped enemy briefly stunned/disoriented).

10. **Mechamaru** -- Rename "ULTRA CANNON MODE" to "MAXIMUM OUTPUT."

11. **Kashimo** -- During Amber, staff should be discarded (body becomes weapon), not orbit.

---

## Technique Names Reference

| Character | Technique | Correct Canon Name |
|-----------|-----------|-------------------|
| Gojo | Blue | Cursed Technique Lapse: Blue |
| Gojo | Red | Cursed Technique Reversal: Red |
| Gojo | Purple | Hollow Purple (Imaginary Technique) |
| Gojo | Domain | Infinite Void (Unlimited Void) |
| Yuji | Technique 1 | Divergent Fist |
| Yuji | Technique 2 | Black Flash |
| Nanami | Technique | Ratio Technique (7:3) |
| Choso | Beam | Piercing Blood |
| Choso | Enhancement | Flowing Red Scale |
| Choso | Explosion | Supernova |
| Toji | Weapon 1 | Inverted Spear of Heaven |
| Toji | Weapon 2 | Split Soul Katana |
| Toji | Weapon 3 | Playful Cloud |
| Mechamaru | Special | Maximum Output / Ultimate Mechamaru |
| Kashimo | Ultimate | Mythical Beast Amber |
| Higuruma | Domain | Deadly Sentencing |
| Naoya | Technique | Projection Sorcery |
| Naoya | Domain | Time Cell Moon Palace |
| Yuta | Domain | Authentic Mutual Love |
| Todo | Technique | Boogie Woogie |
| Mahoraga | Weapon | Sword of Extermination |

---

## Missing Characters

Sukuna and Kenjaku were listed in the review request but are not in the game:

- **Sukuna** -- Would be a natural boss: Dismantle (invisible slashing), Cleave (single target), Malevolent Shrine (domain), Fire Arrow, World Slash. Most notable absence.
- **Kenjaku** -- Cursed Spirit Manipulation, Idle Transfiguration (from Mahito), Gravity manipulation, accumulated techniques over 1000+ years.
