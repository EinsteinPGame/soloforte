# Wheel of Faith — Group B (`backstory`, 7 wheels). Proposed, not applied.

**2026-08-22.** Same treatment as Group A, same rule: nothing touches the game without
your word. Group A is still awaiting a verdict; this is ready behind it.

## Measured, not estimated

Applied to a copy on top of Group A and run through `wof-reachability.mjs`:

| | live today | +Group A | +Group A **and B** |
|---|---|---|---|
| sub-wheels that can NEVER fire | 25 | 13 | **6** |
| sub-wheels that can fire | 287 | 299 | 306 |
| outcomes reachable behind sub-wheels | 2,324 | 2,411 | **2,459** |
| outcomes unreachable | 181 | 94 | **46** |

Group B alone: +7 wheels, +48 outcomes. Together the two groups take never-fire from
**25 to 6** and make **135** previously unreachable outcomes reachable.

All 34 proposed values were machine-checked against the live item list — every one is
an exact string match, which is the whole point, since exact-match failure is what
broke these wheels in the first place.

## The one thing I need you to decide

**The backstory wheel contains exactly ONE betrayal outcome** — "Betrayed by the one
they trusted most" — but **three** of these seven sub-wheels are betrayal-themed
(`betrayalType`, `betrayalConsequence`, and `traumaDepth`, whose old trigger was
"Betrayed by their best friend").

Theme coverage across the 87 items:

| theme | items available |
|---|---|
| betrayal | **1** |
| survival | 4 |
| loss / rebuild | 7 |
| mystery / twist | 7 |
| villain / redemption | 8 |
| mentor / training | 9 |

Every other theme has ample material. Betrayal does not. Three options:

- **(a) Point all three at that one outcome.** Cheapest. Consequence: rolling that
  single outcome fires three sub-wheels at once, and no other outcome ever fires them.
- **(b) Broaden the two betrayal wheels** to nearby-but-not-betrayal outcomes, which is
  what I have written below. They fire more often, but "betrayal" becomes loose.
- **(c) Add 2-3 betrayal outcomes to the base backstory wheel.** This is the only place
  new writing genuinely helps — the same conclusion Group A reached about Marriage and
  Economy. **My recommendation**, with (b) as the interim.

What is written below is **(b)**. If you prefer (a) or (c), say so and I will redo it.

## Proposed trigger sets

**traumaDepth** — how deep the damage goes
- Betrayed by the one they trusted most
- Was left for dead and rebuilt from scratch
- Survived something that should have killed them
- Died once and came back wrong
- Watched their world slowly die

**backstoryTrauma** — the event itself
- Last of their kind
- Lost during a war
- Accidentally destroyed their homeland
- Was erased from history and fights to be remembered
- The only survivor of a divine experiment

**betrayalType** — *the loose one, see (b) above*
- Betrayed by the one they trusted most
- Trained alongside a rival who became their greatest enemy
- Was the villain in someone else's story

**betrayalConsequence** — *also loose*
- Betrayed by the one they trusted most
- Found the truth and wished they hadn't
- Woke up with no memory and blood on their hands

**backstoryTwist** — the reveal
- Nobody knows where they came from
- Woke up with no memory and blood on their hands
- Their backstory is classified
- Lived a thousand lives and remembers every one
- Was summoned from another world
- Traveled back in time and cannot return

**backstoryRedemption** — villain to hero
- Was the villain in someone else's story
- Disgraced warrior seeking redemption
- Fell from grace
- Created to be a weapon
- Chose to become a monster to protect others
- Traded their humanity for power

**backstoryHiddenTalent** — latent power
- Made in a lab
- Found their powers in a dump
- The experiment that escaped
- Was created by accident and surpassed the creator
- Was once the weakest being in existence
- Their power only works when they're angry

## Confirming the drift diagnosis

The old triggers were not random — they are a **previous draft's wording**. Compare:

| old trigger value | actual wheel item |
|---|---|
| "Was the villain of someone else's story before becoming the hero of their own" | "Was the villain in someone else's story" |
| "Betrayed by their best friend" | "Betrayed by the one they trusted most" |
| "Was betrayed by their closest ally and left for dead — crawled back from literal hell" | "Was left for dead and rebuilt from scratch" |

Same ideas, reworded. Someone shortened the wheel copy and the triggers were never
updated to match. That is the whole bug, across all 25 wheels.

## What remains after this

6 never-fire wheels: `enchantOrigin`, `enchantCost`, `arcaneSigil`, `enchantResistance`
(Group C, 4 wheels) and `legendaryWeapon`, `fightCombatDoctrine` (Group D, 2). Same
treatment will work; I will prepare them if you want the set finished.

**Patch ready:** `apply-wof-group-b.patch` — applies on top of Group A. Not applied.
