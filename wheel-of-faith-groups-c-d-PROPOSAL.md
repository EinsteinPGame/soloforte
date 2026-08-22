# Wheel of Faith — Groups C & D (the last 6 wheels). Proposed, not applied.

**2026-08-22.** This finishes the set. Still nothing applied to the game.

## The whole problem, measured end to end

| | live today | +A | +A,B | **+A,B,C,D** |
|---|---|---|---|---|
| sub-wheels that can NEVER fire | 25 | 13 | 6 | **0** |
| sub-wheels that can fire | 287 | 299 | 306 | 312 |
| outcomes reachable | 2,324 | 2,411 | 2,459 | **2,505** |
| outcomes unreachable | 181 | 94 | 46 | **0** |

**Every sub-wheel becomes reachable and every one of the 181 stranded outcomes comes
back.** All 36 values in this group machine-checked as exact matches, as before.

## Group C — `enchantment` (4 wheels)

Same drift as A and B, but heavier: the triggers were not merely shortened, they were
**renamed**. None of the 18 wanted values exist, yet the intent is obvious next to what
the wheel actually holds:

| trigger wants | wheel actually has |
|---|---|
| Void Eater | Voidtouch, Dream Eater |
| Soul Harvest | Soul Shatter |
| Reality Shatter | Reality Anchor |
| Time Freeze | Time Warp |
| Gravity Collapse | Gravity |
| Death Touch | Death Mark, Ghost Touch |

Proposed (each wheel is a "detail" layer, so it fires on a thematic handful):

- **enchantOrigin** (how it was forged) — Apotheosis, Hell Forged, Eternal Bind, Starfall, Godslayer, Blood Pact
- **enchantCost** (what it takes from you) — Blood Pact, Soul Shatter, Dream Eater, Arcanic Consumption, Ego Shrive, Siphon
- **arcaneSigil** (the mark it leaves) — Shadow Weave, Quantum Lock, Eternal Bind, Spirit Bind, Reality Anchor, Power Anchor
- **enchantResistance** (how it resists dispelling) — Unbreakable, Enchant Negation, Power Negation, Null Zone, Mirror Coat, Thorn Armor

*Tuning note:* 6 of 142 enchantments each, so any one of these fires roughly 4% of the
time. Across the four, an enchantment roll triggers one about 17% of the time. If you
want them more common, widen the lists — it is a one-line change per wheel.

## Group D — `weapon` and `fight` (2 wheels)

**legendaryWeapon** — drift again (`Divine Weapon` → the wheel's **Divine Armament**).
Pointed at the six weapons that actually read as legendary:
Divine Armament, Void Blade, Soul Reaper, Forbidden Blade, Cursed Weapon, Scepter of Power.

**fightCombatDoctrine — this one was NOT drift, and it is worth knowing why.**

It wants `Berserker` / `Assassin`. There is no near-match anywhere in the `fight`
wheel, because that wheel is not a list of combat *styles* at all — it is a list of
skill *tiers*:

```
Darwizzy · Rookie · Amateur · Skilled · Champion ·
Meta-Martial · Planetary Fighter · Cosmic Brawler ·
Universal Gladiator · Unbeatable
```

The trigger references a taxonomy that never existed here. So unlike every other
wheel, this is not a rename — it is a leftover from a different design.

Fortunately the sub-wheel's own content resolves it. Its items are fighting
philosophies ("Flow State Doctrine", "Predator Patience", "Single Strike Philosophy").
A Rookie does not have a doctrine; a Champion does. So:

**Proposed:** Champion, Meta-Martial, Planetary Fighter, Cosmic Brawler,
Universal Gladiator, Unbeatable — the top 6 of 10, deliberately excluding
Darwizzy/Rookie/Amateur/Skilled.

That is a design choice rather than a pure repair, so it is the one item in C and D
worth your explicit yes.

## Summary of the whole diagnosis

- **A, B, C, legendaryWeapon** — vocabulary drift. The wheel copy was rewritten and the
  triggers were never updated. Pure repair, no design judgement needed.
- **fightCombatDoctrine** — not drift. A trigger from an abandoned taxonomy.
- **The one genuine content gap** — backstory has 1 betrayal outcome for 3
  betrayal-themed wheels (Group B). Still the only place new writing actually helps.

**Patch ready:** `apply-wof-all-groups.patch` — all 25 wheels, takes never-fire to 0.
Not applied.
