# Dead flags audit — features that can never fire

**Date:** 2026-08-20
**Scope:** every `.html` / `.js` in the soloforte repo
**Games changed:** none. This is a report.

## What was tested

One narrow, objective rule:

> A flag is reported only if **every** assignment to it is a falsy literal
> (`false` / `0` / `null`), **and** it is read in a condition somewhere.

That makes each hit provable rather than a guess about intent — if a flag is only
ever `false`, the branch guarded by `if (flag)` cannot run.

Ruled out first: dynamic property writes (`player[key] = …`) and `Object.assign`
onto the player/fighter objects. There are **none** in either game, so nothing is
being set behind the analyser's back.

This is the fourth and fifth instance of a recurring bug class here — Naoya's
`naoyaDomainActive`, the Wheel of Faith trigger values no wheel could produce, and
the scenario choices pointing at nonexistent nodes were the earlier ones.

Tool: `~/zylos/workspace/soloforte-testkit/deadflags.py`

---

## A. Features that are unreachable

### Emblem Fury — an entire reward layer is unwired (3 findings)

`emblem-fury.html` declares three reward systems, reads all three, and sets none.

| Flag | Declared | Read at | Effect |
|---|---|---|---|
| `killStreakActive` | line 540, `false` | 2514, 2627, 3930 | The whole kill-streak system is dead. The only two assignments (2514, 2781) both set it to `false`. |
| `doubleXPTimer` | line 510, `0` | 946 (`xpGain *= 2`) | Double XP can never trigger. |
| `killStackMult` | line 510, `0` | 949 (sets `killStackTimer = 15000`) | The kill-stack multiplier never applies, so its timer is never started either. |

Three separate reward mechanics in the same object, all readable and none settable,
points at one buff/pickup layer that was designed and never hooked up.

### Ball Battle Arena — Ryu's beam mode (1 finding)

`ryuBeamActive` (line 1805, `false`) is read three times — 16535, 19530, and 18991
where it picks the on-screen label:

    const mode = f.ryuBeamActive ? 'BEAM' : 'CANNON';

It is never set. The readout therefore always says **CANNON**, and both guarded
branches are unreachable.

Note the special itself *does* fire — "DESSERT IS SERVED." is logged at 9523. It is
only the state flag that is missing. Compare `f.chosoBeamActive = true` at 4591:
Choso's equivalent flag *is* set, so this looks like Ryu was built by copying Choso
and the assignment was dropped.

### RPS Legends — music can never be on (1 finding)

`musicOn` starts `false` (line 1651) and is never set true, so music is
permanently off regardless of the setting.

There is also a tautology in `loadSave` (line 1658):

    if (!S.settings.musicOn) S.settings.musicOn = false

That line does nothing at all. If the intent was to default a missing value, it
needs `=== undefined`, not `!`.

---

## B. Guards that never engage

These are the inverse failure: the flag is read **negated**, so the check always
passes and the protection it was written for is absent.

| Game | Flag | Consequence |
|---|---|---|
| D&D Crawler | `specialAbilityUsed` (read `!== true` at 4279) | Seraphina's special ability has no once-per-run limit — the guard never engages, so it can be used repeatedly. Set to `false` at 6402 and 7183, never to `true`. |
| Ball Battle Arena | `mechaTrueFormReform` (read `!` at 12820) | The "about to reform" guard never holds, so `hp <= 1` can re-trigger reform instead of once. |
| Emblem Fury | `moving` (read at 1271, 1293) | `if (player.deflectProjectiles && player.moving) return;` never returns, so projectile deflection works even while moving. The skill text at line 448 says "Deflect moving", so a drawback was intended. Player is stronger than designed. |

---

## C. Harmless dead code

| Game | Flag | Note |
|---|---|---|
| Ball Battle Arena | `monowireWrapDmgAccum` | Only ever `0`; its own comment says "legacy compat". Deliberate. Safe to delete, no behaviour change. |
| Emblem Fury | `bgmTimeout` | Always `null`, so the `clearTimeout` branches at 197/201 never run. Nothing leaks — there is no timer to clear — but whatever scheduled the BGM continuation does not exist. |

## Discarded

`length` in `rage-platformer.html` — false positive of the analyser, which strips
object prefixes. No `length = 0` assignment exists.

---

## Recommended order

1. **Emblem Fury's three reward systems** — biggest gameplay impact, and probably
   one missing hookup rather than three separate fixes.
2. **D&D Crawler `specialAbilityUsed`** — an unlimited-use ability is a balance
   hole; likely a one-line fix.
3. **Ryu's `ryuBeamActive`** — copy the Choso pattern at 4591.
4. **Emblem Fury `moving`** and **BBA `mechaTrueFormReform`** — both restore an
   intended drawback, so both need a balance call, not just a code fix.
5. **RPS `musicOn`** plus the no-op line.
6. Section C whenever the files are next touched.

Nothing here has been changed. Items 4 and 5 in particular alter difficulty, and
BBA balance needs sign-off.
