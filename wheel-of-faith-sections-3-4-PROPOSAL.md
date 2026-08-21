# Wheel of Faith — sections 3-4 trigger proposal

**PROPOSAL ONLY. No game changes. Nothing applied.**
Same workflow as sections 1+2: propose, Kyle approves or edits, then apply.
**Date:** 2026-08-21

## Why this exists, and a correction

After the sections 1+2 remap (8a60d9e), 25 of 312 sub-wheels still cannot fire. The
note I left said those needed Kyle to **write new base-wheel entries**, because the
base wheels had "nothing to map onto".

**That was too pessimistic, and it was wrong for the biggest group.** Reading the
live object graph rather than the source text, the `conquered` wheel has 28 richly
written outcomes, and the dead triggers map onto them cleanly. No new writing needed
for most of them — just a vocabulary fix, exactly like sections 1+2.

Verified against the running game (`soloforte-testkit/` probe): 312 sub-wheels, 25
never fire, 225 fully clean, 62 fire but carry some dead values. 408 of 1,564 trigger
values match nothing. 181 items sit behind the 25 dead wheels.

The runtime rule is exact equality — `t.values.includes(lastResult)` — so a trigger
value must be character-identical to a base-wheel item.

## The 25, grouped by the wheel they trigger off

| base wheel | dead sub-wheels | base items available |
|---|---|---|
| `conquered` | 12 | 28 |
| `backstory` | 7 | 87 |
| `enchantment` | 4 | 142 |
| `weapon` | 1 | 108 |
| `fight` | 1 | 10 |

Every one of those base wheels has plenty of material. This is a wording mismatch,
not missing content.

---

## Group A — `conquered` (12 wheels). Proposed now.

The full 28 outcomes of the `conquered` wheel:

```
With a world ending power                        Ate a forbidden fruit and became something else
Through unmatched mastery of a forbidden weapon  Made a pact with the void itself
Turned every enemy against each other            Solo'd every army that stood in the way
Through sheer overwhelming force                 Absorbed the powers of everyone he defeated
With a devious masterplan                        Rewrote the rules of reality
Struck before anyone knew who he was             Waited centuries for the perfect moment to strike
He literally outstated everyone                  Built an empire from nothing but willpower
Undefeated in every duel he had to take          Turned a curse into his greatest weapon
United the scattered tribes under one banner     Walked into the final battle unarmed and still won
Broke a god's domain and claimed it as his own   Convinced the final boss to surrender
Outsmarted an immortal                           Became the disaster everyone feared
Survived the unsurvivable and came out laughing  Found a loophole in fate itself
Made every king kneel without drawing a weapon   Sacrificed everything — and it was worth it
Conquered through fear alone — never had to fight
Won by making others believe they already lost
```

Proposed trigger sets. Each replaces the current abstract labels with actual
outcomes, so the sub-wheel becomes reachable.

**conquestBetrayal** — currently wants Betrayal / Manipulation / Deception / Espionage
- Turned every enemy against each other
- With a devious masterplan
- Struck before anyone knew who he was
- Won by making others believe they already lost
- Outsmarted an immortal

**conquestAftermath** — currently Brute Force / Destruction / War / Intimidation / Annihilation / Domination
- Through sheer overwhelming force
- With a world ending power
- Solo'd every army that stood in the way
- Became the disaster everyone feared
- Conquered through fear alone — never had to fight

**conquestDiplomacy** — currently Diplomacy / Alliance / Marriage / Economy
- Made every king kneel without drawing a weapon
- Convinced the final boss to surrender
- United the scattered tribes under one banner
- Built an empire from nothing but willpower

*Note: nothing in the wheel corresponds to Marriage or Economy. If those matter to
you, that is the one place new base entries would genuinely help.*

**conquestAlly** — currently Alliance / Brotherhood
- United the scattered tribes under one banner
- Sacrificed everything — and it was worth it

**conquestPolitics** — currently War / Diplomacy (+5 more)
- Made every king kneel without drawing a weapon
- Convinced the final boss to surrender
- Turned every enemy against each other
- Won by making others believe they already lost

**conqueredTrophy** — currently Single Combat / Army Destruction / Political Manipulation / Cultural Domination / Economic Collapse / Psychological Warfare
- Undefeated in every duel he had to take
- Solo'd every army that stood in the way
- Turned every enemy against each other
- Won by making others believe they already lost
- Absorbed the powers of everyone he defeated

**conquestMethodVariation**, **conqueredResistance**, **conqueredAftermath**,
**conqueredEmpireLegacy**, **kingdomStructure**, **legendaryMount** — all currently
want variations of Brute Force / War. Proposed shared set:
- Through sheer overwhelming force
- Solo'd every army that stood in the way
- With a world ending power
- Broke a god's domain and claimed it as his own
- Through unmatched mastery of a forbidden weapon

*These six overlap heavily by design — they are different flavours of "you won by
force". Worth checking you actually want six separate sub-wheels on the same
trigger, or whether some should merge.*

---

## Groups B, C, D — not proposed yet

`backstory` (7 wheels, 87 items), `enchantment` (4, 142 items), `weapon` (1, 108),
`fight` (1, 10). All have ample material, so the same treatment will work, but each
needs its own read of the item list and I would rather send Group A for a verdict
first than dump 25 proposals at once.

One pattern already visible: the `backstory` triggers are **full sentences** from an
older draft ("Betrayed by their best friend"), while the current wheel holds short
phrases ("Made in a lab", "Trained by a legend"). So it is the same vocabulary drift,
one layer deeper.

## What I need

Approve, edit, or reject Group A. On approval I apply exactly what is written above
and re-run the reachability probe to confirm the never-fire count drops from 25 to
13. Nothing gets applied without a yes.
