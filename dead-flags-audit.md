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

---

# Round 2 — shadowed declarations, dead functions, site health

Same date. Three more sweeps. **One of them is a game-breaking crash.**

## CRITICAL — D&D Crawler crashes when combat starts

`dnd-crawler.html` declares `calcAC()` twice at top level, at lines 2363 and 7579.
The second one is a deliberate decorator, added by the romance patch at the end of
the file:

    7578:  const _origCalcAC = calcAC;
    7579:  function calcAC() {
    7580:    let ac = _origCalcAC();
             ... + 1 if the beloved is in the party

The intent is right, the mechanism is not. **Function declarations hoist**, so both
`calcAC` declarations are bound before any line runs, and the later one wins. By the
time line 7578 executes, `calcAC` already *is* the decorator — so `_origCalcAC`
points at the decorator, and calling it recurses into itself forever.

Reduced to its essentials and run:

    function calcAC() { return 10; }
    const _origCalcAC = calcAC;
    function calcAC() { return _origCalcAC() + 1; }

    _origCalcAC === calcAC ?  true
    calcAC()               →  RangeError: Maximum call stack size exceeded

**Reachability** — this is not latent. There are 5 call sites, and two are core:
- line 768 — the attack roll, `totalRoll >= calcAC()`
- line 4647 — the HUD, `AC: ${calcAC()}`, inside `updateCombat(dt)` (line 4489),
  which is called from the state machine at line 9156 under `case STATE.COMBAT`

So it should throw the moment combat begins.

### Fix — one line

Make the patch an assignment instead of a declaration, so only the original is
hoisted:

    - function calcAC() {
    + calcAC = function () {

(and close with `};`). Verified on the reduced case: `_origCalcAC === calcAC` becomes
false and the result is original + bonus, which is what the patch wanted.

**UPDATE — no longer inferred, executed.** The earlier version of this section said
I could not run the game. I since built a headless harness
(`soloforte-testkit/rungame.mjs`) that loads the real 432KB inline script against a
Proxy-stubbed DOM, ran the actual file, and called the function:

| | `_origCalcAC === calcAC` | `calcAC()` |
|---|---|---|
| live file | `true` | `RangeError: Maximum call stack size exceeded` |
| with the one-line fix | `false` | `12` |

`12` is the correct answer for the test character: base 10 plus the DEX 14 modifier
(+2). So the bug is confirmed on the real file, and the fix is confirmed to restore
correct behaviour on the real file.

Two of the harness's intermediate failures were my own stub having the wrong shape
(`equipment` vs the game's `equipped`), not game bugs — worth remembering when
reading its output.

## Other shadowed declarations

Same class, no crash — just silently dead code, because the earlier definition is
discarded:

| Game | Function | Declared | Dead | Wins |
|---|---|---|---|---|
| Emblem Fury | `gameLoop()` | 2x | 2589 | 3857 |
| Emblem Fury | `setDifficulty()` | 2x | 662 | 3047 |
| Emblem Fury | `setupMobileControls()` | 2x | 2699 | 2798 |
| Emblem Fury | `spawnBoss()` | 2x | 1353 | 2560 |

Four shadowed functions — including the **main game loop** — plus six functions in
the same file that are never referenced at all (`clamp`, `getEmblemPerk`,
`getTierClass`, `spawnEnemies`, `updateEnemy`, `updateMobileButtons`), all of them
early in the file. Emblem Fury looks like two generations of the game living in one
file, with much of the earlier one unreachable. That is also the most likely
explanation for the three dead reward flags in Round 1: the reward layer probably
belongs to the generation that lost.

Worth confirming before anyone edits Emblem Fury — a fix aimed at the dead copy will
appear to do nothing.

## Never-referenced functions (low priority)

14 across 6 files. Mostly refactoring leftovers, not missing features. Checked the
one with real user impact: `playerUseItem()` in D&D Crawler is never called, but item
use works through `useConsumable()` and `useItemOutOfCombat()`, so it is superseded
rather than broken. Full list from `soloforte-testkit/deadcode.py`.

**Detector caveat, learned the hard way:** the first version of that tool reported
`buildCharSelect` and `migrateSaves` as dead. Both are named IIFEs —
`(function name(){...})()` — which do run. The tool now skips them. Any similar
finding should be eyeballed for that shape before acting on it.

## Site health — clean

All 25 pages: every inline `<script>` parses (checked as module or classic per its
own type), script tags balanced, and the live copy on soloforte.ai is byte-identical
to the repo. Nothing broken, nothing undeployed, no drift.

This was worth checking because it has bitten before — a stray `</script>` inside a
JS string once killed the whole learn-to-code page (7a44203). HTTP 200 says nothing
about whether a page runs.

Tool: `soloforte-testkit/sitecheck.py`.


---

# Round 3 — the decorator idiom, and two corrections to Round 2

Everything below was checked by **executing** the games headlessly
(`soloforte-testkit/rungame.mjs`), not by reading them.

## Two things I got wrong in Round 2

**1. "Emblem Fury's dead reward layer probably lives in the copy of `gameLoop` that
lost." — Wrong.** Tested directly: `killStreakActive` appears in *both* copies of
`gameLoop`, and `doubleXPTimer` and `killStackMult` appear in *neither*. The three
dead reward flags have nothing to do with the shadowing. They are still dead — that
part of Round 1 stands — but the explanation I offered for them was invented and
does not survive contact with the code.

**2. "Emblem Fury looks like two generations of the game in one file." — Too loose.**
What is actually true, confirmed by running it: for each duplicated name the later
declaration wins, so the *earlier body* is orphaned.

| function | declarations | runtime uses |
|---|---|---|
| `setDifficulty` | 2 | the later one |
| `setupMobileControls` | 2 | the later one |
| `spawnBoss` | 2 | the later one |
| `gameLoop` | 2 + a reassignment | the reassignment |

**Emblem Fury does not crash.** I called `gameLoop(0)` in the sandbox: it returns
without throwing. No RangeError anywhere in that file.

## The real pattern: a decorator idiom that is right 6 times and wrong twice

These files patch behaviour by aliasing a function then replacing it. That is only
correct when the replacement is an **assignment**:

    const _origFoo = foo;
    foo = function () { ... _origFoo() ... };     // correct - only one declaration hoists

Written as a **declaration**, both hoist, the later wins before any line runs, and
the alias ends up pointing at the replacement:

    const _origFoo = foo;
    function foo () { ... _origFoo() ... }        // broken - alias captured itself

Sweep of every game (`soloforte-testkit/decorators.py`):

| site | verdict |
|---|---|
| `dnd-crawler.html:7578` `_origCalcAC` | **BROKEN, alias is called → proven RangeError** |
| `emblem-fury.html:3856` `_origGameLoop` | **BROKEN, but alias is never called** → no crash; instead the original `gameLoop` body is orphaned rather than wrapped |
| `emblem-fury.html:4585` `_dPrevGameLoop` | resolves to the same function as `_origGameLoop` (verified: `_dPrevGameLoop === _origGameLoop` is `true`), and calling it is safe |
| 6 others — `_origTriggerDeath`, `_origKillEnemy`, `_dOrigSelectChar`, `_dOrigTriggerDeath`, `_dOrigOnEnemyKill`, `scenario-generator` `_origGoToNode`, `shadow-blade` `_drawMap` | correct form |

So the author knew the right pattern — it is used correctly six times, twice in
Emblem Fury itself. The two broken ones are slips, not a misunderstanding.

**The consequence worth acting on in Emblem Fury:** the patch at 3856 clearly
*intended* to wrap the original loop (why else capture it?) but never calls it. So
whatever the original `gameLoop` body did that the replacement does not do simply
stopped happening. That is a behaviour question for whoever wrote it, not something
to guess at.

---

# Round 4 — corrections to my own Round-1 recommendations

Round 1 sorted these into "straight bugs, easy" and "balance calls". Digging into what
the code actually does shows **two of the "easy" ones were not bugs at all**, and the
dead-value list was incomplete.

## The Emblem Fury dead buff layer is 5 values, not 3

`allStatsBuff` and `weaponDmgBuff` belong on the list. Both are consumed by the damage
maths — `dmg = baseDmg + player.atk * (1 + player.allStatsBuff)` (717),
`dmg *= (1 + player.weaponDmgBuff)` (718), and crit rolls at 814/823 — and their only
assignment anywhere is the **reset to 0** at 2764. They are never set to a nonzero
value, so every one of those multipliers is permanently `× 1`.

My first pass missed them because that tool only looked for flags read in a
*condition*. These are read in *arithmetic*. Same defect, different syntax. Tool fixed.

## Kill streaks are half-built, not missing

Round 1 said "the whole kill-streak system is dead". More precisely: the **tracking
works** — line 941 increments `killStreakCount` and 942 sets `killStreakTimer = 3000`.
What is missing is only the `killStreakActive` gate, which nothing ever sets true, so
the *effects* at 2627 and 3930 never fire.

That makes it a narrow, clearly-intended fix (decide the threshold at which a streak
becomes "active" and set the flag) rather than building a system from nothing.

## RETRACTED: "Ryu's beam is a straight bug — copy the Choso pattern"

Wrong, and acting on it would have produced a meaningless change.

- Both `ryuBeamActive` read sites are **purely decorative** — a pulsing glow ring
  (16535) and a charge indicator (19530). No gameplay logic reads it.
- `ryuBeamTimer`, which the charge indicator divides by, is **also never set**.
- Ryu's actual special ("DESSERT IS SERVED.", 9497) is a slow projectile blast that
  splits into homing beams. It works. **It is not a beam mode.**

So `ryuBeamActive`/`ryuBeamTimer` are leftovers from an abandoned design, not a broken
feature. Wiring the flag up would light a permanent glow that decays through a timer
nothing decrements. The sane options are delete them, or treat "give Ryu a beam mode"
as a new feature — not a fix.

## RETRACTED: "RPS Legends — music can never be on"

Misleading as phrased. The game *does* have an audio engine (`AudioContext`,
oscillators, gain nodes at 36–50). But **nothing anywhere consults `musicOn`** — it
appears only in its own declaration and the no-op line. It is a settings field that
controls nothing, so switching it on would change nothing. Deleting it or wiring it to
the audio engine is a choice, not a bug fix.

## A limitation of these tools, worth knowing before trusting them

Broadening the flag detector to arithmetic reads initially produced a wave of nonsense
— `shrink`, `margin`, `gradient` — because it was scanning raw HTML and reading CSS
(`flex-shrink: 0`) as assignments. Fixed by analysing only `<script>` bodies with
strings blanked.

Even then, three candidates that looked dead are **false positives**: emblem-fury
`gold`, and rps-legends `goldMult` and `luck`. All three are purchasable meta-upgrades
whose values arrive either from `localStorage` or through a dynamic write
(`S.eternals[key]`), which a name-based scan cannot see. The `player.*` findings above
are safe from this — there are no `player[...] =` writes in either game, which I
checked specifically.

**Rule of thumb:** these tools find *candidates*. Anything reached through
`obj[key]` or restored from a save needs a human look before it counts.

---

# Round 5 — the Emblem Fury buff layer, diagnosed properly

Round 1 said "an entire reward layer is unwired" and I later guessed it was
"probably one missing hookup". Both are wrong. Here is what is actually going on.

## The perk works. Its descriptions lie.

The **Blood Frenzy** perk is described to the player as:

| tier | description shown |
|---|---|
| 0 | +15% atk speed after kill |
| 1 | **Kill stacks: each kill +5% atk for 10s** |
| 2 | **100 kill stacks: berserk mode** |

Its implementation (line 1416):

    case 'Blood Frenzy':
      if (tier===0) player.bloodFrenzy = true;
      if (tier===1) player.bloodRage = true;
      if (tier===2) { player.atkSpdMult *= 1.2; player.bloodLord = true; }

Every one of those flags is live and does something:
- `bloodFrenzy` → on kill sets `bloodFrenzyTimer=5000` (969), which gives `dmg*=1.1` (722)
- `bloodRage` → `if (bloodRage && hp < maxHp*0.5) dmg *= 1.3` (721)
- `bloodLord` → feeds the lifesteal branch (979)

So the perk is **not** broken. But tiers 1 and 2 deliver something completely
different from what they promise:

- tier 1 promises a **stacking per-kill attack buff**; it actually grants a
  **low-HP damage bonus**
- tier 2 promises **berserk mode at 100 stacks**; it actually grants **+20% attack
  speed and lifesteal**

## Which is what the dead values were for

`killStackMult`, `killStackTimer`, `allStatsBuff` and `weaponDmgBuff` are the
*abandoned implementation of the described behaviour*. Line 949 —
`if (player.killStackMult > 0) player.killStackTimer = 15000;` — is the stack timer
waiting for a stack counter that nothing increments. `allStatsBuff` and
`weaponDmgBuff` are already wired into the damage maths (717, 718, 814, 823), ready
to receive exactly this kind of temporary multiplier.

So the machinery for "each kill +5% atk for 10s" is *present and plumbed*. Only the
part that raises the value is missing.

## Two options, and they are very different sizes

**(a) Fix the text — minutes, zero gameplay change.** Rewrite the two descriptions to
say what the perk actually does. The player stops being misinformed. Nothing rebalances.

**(b) Implement the described behaviour — real work, changes balance.** Increment
`killStackMult` on kill, feed it into `allStatsBuff`, let `killStackTimer` expire it,
and gate `killStreakActive` on a stack threshold. The plumbing exists; the balance
consequences do not (a stacking attack buff on a kill-heavy game is a big lever).

Worth noting for either path: tier 1's *actual* effect (low-HP damage bonus) overlaps
**Berserker Rage** tiers 0-1 ("Below 30%/50% HP: +40% damage"), so two perks currently
do close to the same thing.

**Not touched.** Which way this goes is a design call, and (b) in particular is a
balance decision, not a bug fix.
