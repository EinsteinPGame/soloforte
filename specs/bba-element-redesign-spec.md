# Ball Battle Arena — Element Ability Redesign Spec v2.0

**Version:** 2.0
**Date:** 2026-07-24
**Status:** Draft — Kyle reviewing
**Scope:** All 25 playable characters (100 abilities total)

---

## Design Philosophy v2

Every element ability must be **mechanically unique to that character**. No two characters should share the same core mechanic, even within the same element.

**Banned patterns (from v1 feedback):**
- Ice: No more "shield + slow + regen" on every character
- Poison: No more "phantom attack from behind" on every character
- Fire: Avoid generic "explosion AoE" unless it has a truly unique twist
- Lightning: Avoid generic "faster attacks + speed" unless it transforms the kit

**New rule:** Each ability should answer: *"Why does this only work on THIS character?"*

---

## Character Ability Designs

---

### 1. Mantis Blades (Spinning Blades & Bleed)

**Fire — Bleed Combustion:**
When an enemy has 4+ active bleed stacks, Mantis can ignite them — all bleeds combust instantly, dealing 250% of remaining bleed damage as a single fire burst. Combustion leaves the enemy "Charred" for 2s (can't receive new bleeds but takes flat 3% HP/s burn). Creates a rhythm: stack bleeds → ignite → burn phase → restack. Trade sustained bleed for burst windows.

**Lightning — Static Vortex:**
Each full spin generates a visible static charge ring around Mantis (max 3 rings). When 3 rings are stored, they discharge outward as a lightning nova (2.5 ball-width radius, 120% damage). Enemies hit by the nova are "magnetized" — pulled slightly toward Mantis for 1.5s, making it easier to land more spin hits. Spins aren't "faster" — they generate electromagnetic fields.

**Poison — Corrosive Blades:**
Blades secrete acid. Bleed stacks also apply "Corrode" — each Corrode stack makes the enemy take 5% more damage from ALL sources (max 3 stacks = 15% amp). At 3 Corrode stacks, enemy's next attack deals 20% less damage. Not a phantom strike — a damage amplifier that rewards sustained aggressive pressure.

**Ice — Projectile Vortex:**
While spinning, Mantis creates a frost vortex that catches nearby enemy projectiles — they freeze mid-air and orbit Mantis (max 3 captured). Mantis can launch all captured projectiles outward in a burst at any time. Turns enemy ranged attacks into Mantis's own ammo. Completely unique defensive-offensive mechanic.

---

### 2. Gorilla Arms (Heavy Punches & Knockback)

**Fire — Fissure Punch:**
Ground pounds crack the floor in a line outward (direction of punch). Fissures travel 4 ball widths and erupt after 1s, dealing 150% damage along the line. Charged punches create longer fissures (up to 6 ball widths). Not a generic AoE — a delayed linear threat that zones enemies.

**Lightning — EMP Knuckles:**
Each punch stores electrical charge (visible sparks). After 5 consecutive hits, next punch releases an electromagnetic pulse (2.5 ball-width radius) that locks out ALL enemy abilities for 2s (cooldowns frozen, can't activate anything — only basic movement). Doesn't deal bonus damage — pure tactical disruption.

**Poison — Bruise Protocol:**
Each punch leaves a permanent "bruise mark" on the enemy (persists the whole round). At 3 bruises: enemy healing reduced by 50%. At 5 bruises: enemy takes 2% max HP passive damage per second. At 8 bruises: enemy movement speed reduced by 15%. Slow inevitable doom — Gorilla doesn't burst, he condemns.

**Ice — Shockwave Surge (REVISED per Kyle):**
Ground pounds create ice shockwaves that speed Gorilla up (+25% move speed per crack, stacks 3x = +75%). Cracks persist 4s on the ground. Gorilla running over his own cracked ground gets momentum boosts. Enemies still slip on them. He thrives in the chaos he creates — the more he punches, the faster he gets.

---

### 3. Monowire (Wire Wrap & Hack)

**Fire — Wire Slingshot:**
When a wrap connects, Monowire can detonate early to launch the wrapped enemy in a chosen direction like a slingshot. Launched enemies deal 100% damage to anything they collide with (other enemies or walls). Wall collisions deal extra 80% damage to the launched enemy. Turns wraps from "hold and tick" to "grab and throw."

**Lightning — Charged Wrap (per Kyle):**
Wraps deal double ticking damage — each tick adds electrical damage on top of base wire damage. Total wrap damage is 200% of normal. Electricity visually arcs along the wire during wraps. Simple, effective, exactly what Kyle asked for.

**Poison — Neuro-Hack Drain (REVISED per Kyle):**
Wrapped enemies get "neural corruption" — their auto-attacks slow down (-30% attack speed for 3s after release). Additionally, Monowire steals 15% of all damage dealt during the wrap as HP. Longer wraps = more drain. Wire isn't just damage — it's life siphon and debuff. (Original "reversed controls" removed — doesn't make sense in auto-simulator.)

**Ice — Firewall Tether (kept from v1 — Kyle approved):**
Deploy a stationary wire anchor on the ground (1 active, lasts 8s). Enemies crossing the anchor radius are auto-tethered and slowed 35% for 2s. While an enemy is tethered, Monowire regenerates 3% HP/s.

---

### 4. PLS (Projectiles & Zoning)

**Fire — Flame Pillars:**
Projectiles that hit walls create vertical fire pillars (3 ball widths tall, persist 5s, max 3 active). Fire pillars block line of sight AND deal 40% damage to enemies who cross them. PLS can strategically wall off sections of the arena. Not a simple explosion — permanent terrain modification.

**Lightning — Arc Fences:**
If two PLS projectiles land within 2 ball widths of each other within 1s, a lightning arc connects them (persists 3s, 50% damage to enemies crossing). PLS can create electric fence networks by placing shots strategically. Max 3 arcs active. Creates a web of electrified zones.

**Poison — Toxic Fog:**
Projectile impacts create slow-expanding poison clouds (grow from 0.5 to 2 ball widths over 3s, persist 5s). Enemies inside clouds have reduced visibility (screen tint + limited view range) and take 15% damage/s. PLS becomes a vision-denial specialist — enemies can't see through the fog.

**Ice — Suppression Field (kept from v1 — Kyle approved):**
Deploy a zone: -30% enemy speed, -20% attack speed, PLS regens 2%/s inside it. Lasts 6s, cooldown 10s.

---

### 5. Sandevistan (Speed & Dodge)

**Fire — Living Projectile:**
Moving at max speed for 2+ seconds ignites Sandevistan. While ignited, body collision with enemies deals 120% damage. Dodging through an enemy while ignited deals 180% damage. Sandevistan literally becomes a fireball — no separate attack needed, just speed and collision.

**Lightning — Reverse Blink:**
After dodging, Sandevistan can teleport back to the dodge origin point within 1.5s. Creates mind games: dodge forward past enemy → attack from behind → blink back to original position. Or dodge away to safety → blink back to re-engage. No other character has a position recall.

**Poison — Toxic Trail:**
Movement leaves a visible toxic trail on the ground (persists 3s). Enemies crossing the trail get "Dizzy" — their aim and movement direction has random 10-degree jitter for 2s. Sandevistan can circle an enemy to trap them in a toxic ring. Speed becomes area denial.

**Ice — Momentum Skating:**
Arena gets a passive ice-skating effect around Sandevistan (4 ball-width radius). All entities in this zone experience momentum physics — can't stop instantly, slide in current direction. Sandevistan benefits (faster acceleration, sharper turns) while enemies struggle with unexpected slides. Speed creates a movement advantage zone.

---

### 6. Throwing Weapons (Range & Precision)

**Fire — Remote Detonation:**
Knives that stick into surfaces (walls, ground) persist as traps (max 4 active, last 10s). Player can remotely detonate any/all at will — each detonates in 1.5 ball-width radius for 140% damage. Strategic placement → patient wait → coordinated detonation. Not auto-explode — player-controlled timing.

**Lightning — Lightning Rod Knives:**
Knives stuck in surfaces become lightning rods (persist 8s, max 4). Every 4s, a lightning bolt strikes the rod closest to an enemy, dealing 80% AoE damage around the rod (1.5 ball widths). The battlefield becomes passively electrified. Throwing Weapons litters the arena with persistent threats.

**Poison — Tracker Paint:**
Knife hits coat enemies in tracking paint (lasts 5s, visible marker). Painted enemies are always visible regardless of obstacles. The next knife thrown at a painted enemy has perfect accuracy (auto-lock, can't miss). Turns Throwing Weapons into a hunter: mark → track → execute.

**Ice — Frost Orbit (REVISED per Kyle):**
3 frozen knives orbit around Throwing Weapons as a passive shield. Each orbiting knife has a 40% chance to deflect incoming attacks. Deflected attacks shatter the knife (respawns after 4s). All 3 broken = no shield until they regen. Defensive layer with gaps — sometimes hits, sometimes misses.

---

### 7. Katana (Deflect & Counter)

**Fire — Energy Conversion Slash:**
Successful deflects store the blocked attack's energy (visible meter). Katana can release all stored energy as a ranged fire crescent wave (travels 5 ball widths). Stronger attacks deflected = stronger crescent. Converts defense into ranged offense — the only melee character with a ranged option through skill.

**Lightning — Magnetic Blade:**
During deflect stance, enemy projectiles within 3 ball widths are slightly pulled toward Katana (gravitational magnetism). Makes deflecting easier but also attracts more danger. Successful deflects chain a lightning bolt to the nearest OTHER enemy (50% damage). Katana becomes a lightning conductor.

**Poison — Attrition Stance:**
Each successful deflect applies "Weakness" to the attacker — next attack deals 20% less damage (stacks 3x = 60% reduction). If Katana takes no damage for 3s, blade gains poison coat — next attack applies "Exhaustion" (enemy attacks 15% slower for 3s). Not a phantom hit — a debuff-stacking defensive specialist.

**Ice — Frozen Deflect:**
Successful deflect can "freeze" the deflected projectile in mid-air for 2s (suspended, glowing). Katana can reposition during this time, then the projectile auto-launches back at the attacker. The frozen projectile also acts as a brief physical obstacle. Max 1 frozen projectile at a time.

---

### 8. Berserk (Shotgun & Rage)

**Fire — Overheat Backfire:**
Each shot in Rage builds an "Overheat" meter. Higher overheat = wider spread BUT more damage per pellet. At max overheat (6 Rage shots), gun backfires — deals 15% self-damage but creates a 360-degree pellet supernova (200% damage, 3 ball widths). High-risk high-reward mechanic unique to Berserk.

**Lightning — Ricochet Pellets:**
Pellets that miss bounce off walls once (50% damage on ricochet, retains slight homing toward nearest enemy). In Rage mode, pellets ricochet twice. Berserk's misses become secondary threats — spray becomes more dangerous, not less. Rewards aggressive wide-angle shooting.

**Poison — Toxin Accumulation:**
Each pellet hit applies a "Toxin" stack (max 10). At 5 stacks: enemy attacks cause 5% self-damage (their own hits hurt them back). At 10 stacks: "Overdose" — enemy takes 30% bonus damage from all sources for 4s, then toxin resets to 0. Berserk poisons through volume of fire.

**Ice — Frostburn Rage (NERFED per Kyle):**
Rage only depletes when Berserk stops hitting for 2s. Each hit extends +0.3s (reduced from 0.5s). BUT Rage power decays over time — after 4s of extended Rage, damage drops to 70%. After 8s, drops to 50%. You CAN keep it going indefinitely but it gets progressively weaker the longer you push. Rewards aggression with diminishing returns.

---

### 9. Adam Smasher [BOSS] (3v1)

**Fire — Air Denial:**
Rockets leave persistent fire trails IN THE AIR (not ground), lasting 4s. Players jumping or being knocked airborne take damage from fire trails. Adam Smasher's jumps pass through trails safely. The longer the fight, the more dangerous the airspace — 3D area denial unlike any other character.

**Lightning — EMP Transitions:**
Each phase transition (HP threshold) releases an EMP wave that adds 2s to ALL player ability cooldowns (disrupts their rhythm). Rockets periodically arc chain lightning between players standing within 2 ball widths of each other (60% damage each). Punishes grouping — forces players to spread out.

**Poison — Toxic Leakage:**
Adam Smasher passively leaks fuel when damaged — toxic puddles form beneath him automatically (he doesn't control placement). More damage taken = more puddles. Late-fight melee becomes dangerous. Rockets also trail toxic exhaust that slows enemy projectiles passing through it by 40%. The arena degrades naturally.

**Ice — Crystallized Armor:**
When damaged, broken armor plates freeze and scatter across the arena as frozen debris — physical obstacles that block movement and line of sight (each plate ~1 ball width, persists until destroyed by attacks). At low HP, the arena is cluttered with frozen debris. Adam Smasher's own arena becomes his defense.

---

### 10. Gojo [BOSS] (3v1)

**Fire — Hollow Purple Inferno (REVISED per Kyle):**
Purple functions exactly as normal BUT leaves tiny fire vortexes in its wake path (1-width each, 3s duration, 30% dmg to crossers). The longer Purple travels, the more vortexes trail behind it. Path becomes a fire hazard zone. Purple itself unchanged — the fire is in the aftermath.

**Lightning — Overcharge Mind Game:**
Red and Blue attacks can be "overcharged" by holding charge beyond normal — 80% more damage but 2x charge time. Gojo can cancel overcharge at any point (feint). Players must decide: is he charging normal or overcharged? Rush to interrupt or wait it out? Adds a skill-based bluffing mechanic.

**Poison — Cursed Decay Field (REVISED per Kyle):**
Enemies within 2 widths of Gojo take passive 10% dmg/s from cursed energy radiation. Purple leaves a toxic trail (3s, 15% dmg/s). Each second in range = enemy attack power -5% (max -25%). Stacks reset when they leave range. Aura of slow deterioration. (Original UI manipulation removed — auto-battle simulator.)

**Ice — Infinity Resonance (REVISED per Kyle):**
Infinity charges 25% faster. While active, projectiles slow 40% approaching Gojo. When Infinity breaks, releases a frost pulse (1.5 width, 60% dmg + 20% slow 2s). Even with no charges, Gojo has passive 15% projectile slow within 1 width. Scales with charges: 0 = 15% slow, 1 = 30%, full = 40%. Gets weaker as charges deplete but never fully useless.

---

### 11. Yuta & Rika [BOSS] (3v1)

**Fire — Overloaded Copies:**
Copied techniques deal 50% bonus damage but are unstable — they explode on impact (1.5 ball-width AoE). Imperfect, volatile copies. Rika's claw attacks leave burning scratch marks on the arena (persist 3s, 30% damage on contact). Domain swords are wreathed in fire.

**Lightning — Ability Theft:**
Instead of observing-then-copying, Rika can interrupt an enemy ability mid-cast and STEAL it (the enemy's ability fails, Yuta gains a single use). Steal has 8s cooldown. The most aggressive copy mechanic — you don't just copy, you deny. Enemies must be careful about when they use abilities near Rika.

**Poison — Corrupted Copies:**
Copied abilities work differently from the original — twisted versions. Copied projectiles curve unpredictably. Copied movement abilities are faster but jittery. Each corrupted copy also "corrupts" the original — the enemy's version of that ability deals 15% less damage for 5s. Using abilities near Yuta weakens your own kit.

**Ice — Copy Burst:**
Rika can store up to 3 copied abilities and unleash them simultaneously in a rapid-fire burst (all 3 within 1s). After the burst, 6s cooldown before new copies can be stored. Creates a terrifying power window — when Rika has 3 copies stored, players know a devastating combo is coming.

---

### 12. Mahoraga [BOSS] (3v1)

**Fire — Molten Arena:**
Adaptation Wheel generates heat while spinning. After each adaptation, the ground beneath Mahoraga becomes superheated molten floor (2 ball-width radius, persists until Mahoraga moves away). More adaptations = more of the arena is molten. Players who fight Mahoraga up close face increasing floor hazards.

**Lightning — Overload Aura:**
Wheel rotation discharges electricity — players within 3 ball widths take 10% chip damage per rotation tick. Once adapted, Mahoraga's counterattacks apply "System Overload" — enemies using the adapted attack type experience 0.2s input lag for 3s. Adaptation doesn't just nullify — it punishes.

**Poison — Poison Fog (REVISED per Kyle):**
Using special fills the entire screen with poison fog that debuffs all enemies. Fog persists 5s, reducing enemy damage output by 20% and movement speed by 15%. Mahoraga is immune. Simple, devastating area denial — the boss poisons the whole arena at once.

**Ice — Absolute Counter:**
Completed adaptation creates one "Absolute Counter" charge. The next attack of the adapted type is not just nullified but REFLECTED as a frozen version — auto-hits the attacker for 100% of their own attack's damage. Can't be dodged. Only works once per adaptation cycle. Terrifying deterrent.

---

### 13. Dabura Karaba [BOSS] (3v1)

**Fire — Solar/Eclipse:**
Light phase charges a "Solar Gauge." Full gauge = sun-beam that tracks nearest player for 2s (80% damage/s, narrow beam). Dark phase charges "Eclipse Gauge." Full gauge = darkness sphere that drastically reduces player visibility for 3s (screen goes very dark, Dabura unaffected). Two devastating ultimates tied to each phase.

**Lightning — Instant Duality:**
Phase transitions happen instantly (no wind-up). During the 0.5s transition window, Dabura exists in BOTH phases simultaneously — attacks deal both Light and Dark damage. Creates brief windows of overwhelming dual-element power. Transition mastery becomes the skill.

**Poison — Mark Corruption:**
Light attacks leave "holy marks." Dark attacks leave "cursed marks." If a player has BOTH marks simultaneously, they react into "Corruption" — 4s debuff where healing is reversed (heals deal damage instead). Anti-sustain mechanic. Players must avoid getting hit by both phases.

**Ice — Null Zones:**
Dark phase creates shadow zones on ground. Light phase creates bright zones. Where shadow and bright zones overlap, a "Null Zone" forms — players inside can't use abilities (only basic movement and attacks). Dabura uses strategic phase switching to place Null Zones where players want to be.

---

### 14. Choso (Blood Manipulation)

**Fire — Mid-Air Detonation:**
Any blood projectile currently in flight can be manually detonated by pressing fire again (each projectile independently). Early detonation = smaller blast (1 ball width, 100% damage). Full travel detonation = larger blast (2 ball widths, 150%). Every projectile is a potential air-mine. Strategic detonation timing.

**Lightning — Rebound Orbs (REVISED per Kyle):**
Blood projectiles become electrically charged orbs that serve as catalysts for rebound — when an orb hits a surface or enemy, it bounces back toward the nearest enemy for a second hit (60% damage on rebound). Multiple orbs active = multiple rebounds creating unpredictable ricochet patterns. Orbs that rebound into each other chain-amplify (+20% damage per chain). Choso fills the arena with bouncing electric blood.

**Poison — Blood Debt:**
Each blood hit applies a "Blood Debt" counter (visible on enemy). At 5 Blood Debts, Choso can "call the debt" — all debts detonate (40% damage per debt = 200% total) and Choso heals for 50% of total damage dealt. The ONLY character whose poison mechanic works as lifesteal. Patient comboing rewarded.

**Ice — Frozen Blood Constructs:**
Choso can freeze his blood mid-air — Blood Meteorite becomes a frozen boulder (60% slower but 200% impact damage). Piercing Blood can be frozen into a blood-ice spear that embeds in surfaces and persists as an obstacle for 5s. Choso sculpts the battlefield with frozen blood.

---

### 15. Toji (Staff & Triangle)

**Fire — Burning Cage:**
Staff throws create fire trails between placed staff positions. When the triangle forms, all three sides burn continuously (not just the interior). Enemies touching ANY side take 40% damage/s. The triangle isn't a trap — it's a cage of fire. Enemies can enter but can't touch the walls.

**Lightning — Proximity Power:**
Toji's stats scale with proximity to his placed staffs. Near 1 staff: +15% damage. Near 2 staffs: +25% damage and +15% speed. Inside completed triangle: +40% damage, +25% speed, +20% attack speed. Toji is weak away from his weapons, devastating near them. Pure positional play.

**Poison — Dead Zones:**
Staffs left in the ground corrupt surrounding area over 3s. Each staff creates a 2-ball-width "dead zone." Enemies in dead zones: can't regenerate HP, incoming healing halved, and passive buffs suppressed. Toji's staff placement becomes anti-sustain area denial, not damage.

**Ice — Sealed Zone:**
Completed triangle creates a "Sealed Zone" — enemies inside cannot dash, teleport, or use movement abilities. Only basic walking permitted. Toji can freely enter and exit. Enemies are trapped in their most vulnerable state, forced to fight without mobility tools.

---

### 16. Mechamaru (Phase Shifter — Rockets/Drill/Jets)

**Fire — Phase Overheat:**
Each mode (rockets, drill, jets) has an independent heat meter. Using a mode builds heat. At max heat, that mode gets ONE supercharged attack (rockets: 300% salvo, drill: piercing beam, jets: flaming ram at 200% damage) then enters 5s cooldown. Managing 3 overheat meters is the skill — cycle through modes to maximize super attacks.

**Lightning — Transition Stun:**
Phase transitions generate an EMP burst (1.5 ball widths) that briefly stuns nearby enemies (0.5s). Rapid switching can chain-stun, but each consecutive stun is shorter (diminishing: 0.5s → 0.3s → 0.1s, resets after 3s). Punishes enemies who stay close during mode changes.

**Poison — Nanite Swarms:**
When Mechamaru takes damage, a small nanite cloud spawns at the impact location (lasts 4s, 1 ball width). Enemy projectiles passing through nanite clouds are "hacked" — redirected toward the nearest other player. Areas where Mechamaru was damaged become projectile-redirecting hazards. Unique defensive mechanic.

**Ice — Siege Mode:**
Mechamaru can lock in place to enter "Siege Mode" — immobile but gains 40% damage reduction, 50% faster attacks, 360-degree targeting (no blind spots). Can exit at any time. Transforms from a mobile phase-shifter into a stationary turret when advantageous. No other character has a voluntary immobile power mode.

---

### 17. Kashimo (Staff & Lightning)

**Fire — Territory Burn:**
Zap bolts set the ground on fire where they land (1 ball-width fire patches, persist 4s). Kashimo is immune to his own ground fire. The longer the fight, the more of the arena is burning. Kashimo's kit naturally claims territory through combat — he doesn't TRY to zone, it just happens.

**Lightning — Lightning Warp Fields:**
Zap bolt impact points leave persistent "lightning fields" (small static zones, last 6s). Walking into a lightning field teleports you to the most recent OTHER lightning field. Kashimo can use this for instant repositioning. Enemies who accidentally step in one get displaced. Creates an unpredictable teleport network.

**Poison — Corrupted Lightning:**
Electricity becomes purple "corrupted lightning." Enemies hit by corrupted zaps have one random ability put on 3s cooldown (chosen randomly from available abilities). Dart rush through an enemy scrambles their ability order. Not damage-focused — pure ability disruption.

**Ice — Cryo-Electric Stasis:**
Attacks freeze enemies instead of stunning. Frozen enemies are immobile for 1.5s but take NO damage while frozen (ice armor). Kashimo must time attacks around the freeze — freeze → reposition → hit them the instant they thaw. Creates a tactical pause-and-punish rhythm unlike any other element.

---

### 18. Nanami (Crits & Ratio)

**Fire — Ratio Trap Lines:**
Critical hits create visible "Ratio Lines" on the arena floor (thin red lines, persist 5s, extend 3 ball widths from hit point). Enemies who cross a Ratio Line take 50% damage and the line detonates. More crits = more lines = more dangerous arena. Nanami lays geometric traps through combat skill.

**Lightning — Vulnerability Window:**
Nanami can detect enemy vulnerability — attacks against enemies whose abilities are currently on cooldown deal 30% bonus damage (visible indicator when enemy abilities are on CD). Rewards timing attacks to exploit enemy ability gaps. Knowledge-based damage boost.

**Poison — Overtime Clause:**
Non-critical hits apply "Overtime" stacks (max 5). Each Overtime stack makes the next CRITICAL hit deal 15% bonus damage (+75% at max). Critical hits consume all Overtime stacks. Creates a deliberate rhythm: build stacks with normal attacks → cash out with a devastating crit. Patient play rewarded.

**Ice — Ratio Fracture:**
When Nanami hits a wall with his blade, he creates a visible "Ratio Fracture" weak point on that wall section (persists 8s, max 2). Enemies knocked into a Ratio Fracture take TRIPLE wall collision damage. Nanami pre-sets kill zones on specific walls. Pure positional setup.

---

### 19. Ryu (Cannon & Beam)

**Fire — Beam Sweep Painting:**
Beam can be swept in a 90-degree arc (not just straight line). Any surface the beam touches catches fire for 3s. Ryu can literally paint the arena with fire using his beam. Cannon impacts leave small craters (persist 4s) — enemies stepping in craters stumble (0.3s movement pause).

**Lightning — Railgun Mode:**
Cannon can be "sequence charged" — holding fire queues up to 3 shots that release simultaneously in a spread pattern. Alternatively, fully charging all 3 into one creates a "Railgun" shot — instant travel speed, pierces through ALL enemies in a line, 250% damage. Two firing modes from one mechanic.

**Poison — Radiation Zone:**
Beam creates a "radiation zone" along its path (persists 4s, 1 ball width). Enemies in radiation zones gradually lose accuracy — projectiles drift 5-degrees off-target per second spent in the zone. Ryu's beam becomes persistent area denial that degrades enemy precision.

**Ice — Cryo-Cycle:**
After firing, Ryu can choose "cryo-cycle" instead of normal cooldown — reduces cooldown by 50% but next shot deals 30% less damage. Normal cooldown = full damage. Creates a tactical choice each shot: rapid weaker shots vs patient powerful shots. Resource management through temperature.

---

### 20. Higuruma (Hammer & Sentencing)

**Fire — Evidence Burn:**
Guilty verdicts set the enemy on fire — burn intensity scales with how many "charges" (hits) Higuruma landed during the trial period. 3 charges = light burn (15%/s, 2s). 6 charges = medium (25%/s, 3s). 10+ charges = intense (40%/s, 4s). More evidence gathered = hotter conviction.

**Lightning — Gavel Drones:**
Small hammers, after being thrown, hover in place for 3s before returning (max 4 hovering). Hovering gavels zap enemies who pass within 1 ball width (40% damage per zap, 1s cooldown per gavel). Creates an electrified minefield of floating hammers. Each drone is a persistent area threat.

**Poison — Mistrial Penalty:**
Hammer hits build "charges" on enemy (like evidence). At 10 charges: "Mistrial" — all charges convert to a poison reducing enemy damage output by 25% for 5s. At 15 charges: "Aggravated Mistrial" — also halves movement speed. Patience = stronger punishment. Charges are visible, creating tension.

**Ice — Frozen Verdict:**
Sentencing freezes the enemy in place for the entire verdict animation (can't dodge judgment). Guilty verdict: ice shatters dealing damage proportional to freeze duration (the longer the trial, the more ice built up). Not a generic shield — justice literally freezes the accused.

---

### 21. Yuji (Fists & Black Flash)

**Fire — Blaze Rush Gauge:**
Black Flash hits fill a "Flame Gauge" (20% per BF). At 100%: "Blaze Rush" — 3-second rampage where every punch creates explosive impact waves (80% AoE each) and Yuji is unstoppable (immune to knockback). After Blaze Rush, Yuji is exhausted (50% slower for 2s). Ultimate risk-reward mechanic.

**Lightning — Reality Glitch:**
Divergent Fist's delayed impact becomes electromagnetic — the gap between physical hit and cursed energy hit causes a "reality glitch." Enemies hit experience 0.15s input delay for 1s and a visual stutter. Small window but devastating at high skill levels. Makes Divergent Fist a disruption tool.

**Poison — Curse Erosion:**
Each hit applies "Curse Erosion" — enemy's max HP is temporarily reduced by 1% per hit (max 15% reduction). Reduction resets 8s after last hit. If enemy had buffs, the erosion also drains them (loses 1 buff stack per 3 hits). Yuji literally erodes enemy potential through volume of punches.

**Ice — Rubber Band Anchor:**
Yuji sets an invisible anchor at his current position (press ability key). Within 3s, pressing again snaps Yuji back to the anchor with full momentum. Allows: dash in → combo → snap back to safety. Or bait an enemy → snap away. No other character has a position-recall mechanic.

---

### 22. Naoya (Projection & Dashes)

**Fire — Geometric Fire Drawing:**
Projection paths catch fire — trails between dash start/end points burn for 3s. If Naoya creates a closed shape with projections (triangle = 3 dashes, square = 4), the interior fills with fire (50% damage/s). More sides = more damage. Naoya draws fire geometry through movement.

**Lightning — Quantum Position:**
During each dash, Naoya exists at BOTH the start and end position simultaneously for 0.5s. Attacks from both positions are real during this window. Creates a 0.5s window of "being in two places at once." Enemies can't tell which to target.

**Poison — Frame Skip Anchors:**
Dash endpoints become "Frame Anchors" (persist 4s, max 3). Enemies passing between any two anchors get "Frame Skipped" — their screen freezes for 0.3s while Naoya can still act. Like forced lag. Naoya places anchors strategically to create skip zones. Unique crowd control no one else has.

**Ice — Movement Rewind:**
Naoya can "rewind" his last 2 seconds of movement — snapping back along his exact path in reverse. Enemies he passes through during rewind take 80% damage. Allows: dash forward → attack → rewind to original position. Different from Yuji's anchor — this traces the exact path back.

---

### 23. Todo (Boogie Woogie & Swap)

**Fire — Reckless Swap (REVISED per Kyle):**
Swaps deal fire damage with a 50/50 random chance split — each swap explosion randomly hits one of the two enemies involved for full damage. Unpredictable chaos. BUT if Todo gets caught in his own fire (swap explosion hits his position), he loses HP but ALL his stats temporarily increase (+20% atk, +15% speed, +10% defense for 5s). Risk-reward: getting hit by your own fire hurts but makes you stronger. Only character who benefits from self-damage.

**Lightning — Damage Link:**
After swapping, Todo and the swapped entity are "linked" for 2s — damage dealt to one is split 50/50 to both. If Todo swaps with Enemy A then attacks Enemy B, Enemy A also takes 50% of B's damage through the link. Redistributes damage across the battlefield.

**Poison — Confusion Seeds:**
Cursed papers from swaps become "Confusion Seeds" on the ground (persist 3s). Enemies stepping on them have controls scrambled — movement keys randomized for 1.5s. Todo always knows the current scramble mapping (visual indicator). Pure mind-game chaos that fits Todo's trickster personality.

**Ice — Temporal Swap:**
Boogie Woogie can swap Todo's position in TIME — swap current state with his state from 3 seconds ago (HP, position, cooldowns all revert to 3s ago). 15s cooldown. The enemy does NOT revert. Ultimate "undo" button — took bad damage? Clap and go back.

---

### 24. Yuki Tsukumo (Mass & Garuda)

**Fire — Gravity Star:**
At high mass (75%+), Yuki becomes gravitational — nearby enemy projectiles curve toward her (orbit briefly before hitting). At 100% mass: Garuda becomes a "Meteor" — one massive impact creating a 3 ball-width crater in the ground (300% damage, crater persists as terrain). Mass creates gravity.

**Lightning — Conductivity Scaling:**
Mass affects electrical interaction. Low mass = insulating (20% less damage from energy/projectile attacks). High mass = conductive (melee attacks deal 30% bonus electrical damage on contact, but takes 15% more from ranged). Creates a mass-management minigame — shift mass based on enemy type.

**Poison — Cursed Energy Density:**
High mass = Yuki's attacks drain enemy ability cooldowns (each hit adds 0.5s to all enemy cooldowns). Low mass = Yuki's own cooldowns decrease 30% faster. Creates a strategic seesaw — build mass to suppress enemies, shed mass to recover your own tools.

**Ice — Mass Lock:**
Yuki can "freeze" her mass at the current level — normally mass decays, but ice locks it indefinitely until manually released. Removes the urgency of "use mass before it decays." Strategic choice: lock at 50% for balanced play? Or build to 100%, lock, and stay at maximum power?

---

### 25. Megumi (Shadows & Shikigami)

**Fire — Phoenix Shikigami (REVISED per Kyle):**
Fire shikigami auto-spawn continuously for the element's duration (one every 3s, max 3 active). They attack independently with fire damage and self-destruct after 5s with a 2 ball-width explosion (150% damage). Additionally, shikigami that were defeated BEFORE activating fire element can be called back as fire spirits — they resurrect with 50% HP as burning versions. Death is never permanent for Megumi's summons when fire is active.

**Lightning — Living Shadows:**
Megumi's shadow on the ground becomes electrified — enemies standing in it take 20% damage/s. Active shikigami extend the shadow area. Shadow size depends on "light direction" (the direction Megumi faces creates a longer shadow behind). Megumi's positioning affects shadow threat zone.

**Poison — Shikigami Evolution:**
Shikigami that survive 10s transform into "Toxic Evolved" form — new abilities, +30% damage, toxic aura (15% damage/s to nearby enemies). BUT evolved shikigami have decaying HP (lose 5%/s). Megumi must keep shikigami alive 10s for the payoff but the evolved form is on a timer.

**Ice — Chimera Fusion:**
Megumi can merge two active shikigami into a single "Chimera" summon — hybrid with abilities from both, 150% combined HP, enhanced attacks. Chimera lasts 8s, then splits back into base shikigami (with reduced HP). Only one Chimera at a time. Creates strategic decisions about which combo is most effective.

---

## Design Rules Applied (v2)

1. **No repeated mechanics** — every ability does something only that character can do
2. **No "shield + slow + regen" ice** — each ice ability has a completely different mechanic
3. **No "phantom attack from behind" poison** — each poison ability uses a unique interaction
4. **Fire isn't just "bigger explosion"** — each fire ability transforms the character's kit differently
5. **Lightning isn't just "faster"** — each lightning ability adds a new dimension to gameplay
6. **Visual distinctiveness** — each ability should look completely different in gameplay

## Excluded Characters

- **Mahito (Control & Transfigure):** Redesigned separately.

---

## Implementation Priority

**Phase 1 (Core Roster):** Characters 1-8, 14, 21 — most-played
**Phase 2 (Extended Roster):** Characters 15-20, 22-25
**Phase 3 (Bosses):** Characters 9-13 — require 3v1 balance tuning
