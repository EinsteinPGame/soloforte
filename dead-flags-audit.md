# Dead flags audit — soloforte games

**Nine rounds, 2026-08-20 to 22. Nothing in any game file has been changed.**

---

# ⚠️ CURRENT STATUS — read this before anything below

The rounds below are kept in the order they were written, so **the early sections
contain conclusions that later rounds overturned.** This section is the only one that
reflects what I actually believe now.

## 1. One thing is urgent and proven

**D&D Crawler crashes when combat starts.** `calcAC()` recurses infinitely — proven by
executing the real file, not by reading it (`_origCalcAC === calcAC` is `true`;
`calcAC()` throws `RangeError`). Reachable from the attack roll and the combat HUD.
**A verified one-line fix is ready to apply: `fix-dnd-calcac.patch`** (`git apply` it;
`git apply --check` passes). Not applied — waiting on your word.

## 1b. All three pending patches have been rehearsed TOGETHER (2026-08-22)

Applied to a scratch copy in sequence — `fix-dnd-calcac.patch`,
`fix-ef-bloodfrenzy-desc.patch`, `apply-wof-all-groups.patch` — and run through the
whole toolkit. They touch three different files and do not conflict.

| check | before | after |
|---|---|---|
| `calcAC()` | `RangeError` | **returns 12**, alias no longer self-referential |
| recursion scan, 25 games | 1 hit | **0 hits** |
| all pages execute | 25/25 | 25/25 |
| WoF sub-wheels that never fire | 25 | **0** |
| WoF unreachable outcomes | 181 | **0** |
| dead inline handlers | 1 known artefact | unchanged |
| corrupted-save resilience | 2 latent | unchanged, no regression |
| syntax, all three files | — | OK |

So applying all three is one sequence of `git apply` with no ordering constraint and no
surprises. The WoF `"null"`-save gap from Round 8 is deliberately still present — that
patch does not touch save code, and fixing it is a separate call.

## 2. Real, worth doing, and cheap

| what | size | why |
|---|---|---|
| **All THREE Blood Frenzy tier descriptions are wrong** (Round 5, corrected in Round 7) | minutes | Players are promised a kill-stacking mechanic that does not exist. Patch ready: `fix-ef-bloodfrenzy-desc.patch`. No balance change. Round 7 also found `bloodLord` is inert and the on-kill heal rounds to zero — both left alone, both balance calls. |
| Two perks overlap — Blood Frenzy tier 1's real effect ≈ Berserker Rage tiers 0-1 | your call | Both give a low-HP damage bonus. |

## 3. RETRACTED — do NOT act on these

- ~~"Ryu's beam mode is a straight bug, copy the Choso pattern"~~ — **wrong.** Both
  read sites are cosmetic only, `ryuBeamTimer` is also never set, and Ryu's real
  special is a projectile blast, not a beam. Wiring the flag up would light a
  permanent glow driven by a timer nothing decrements. Delete, or treat "give Ryu a
  beam mode" as a new feature.
- ~~"RPS Legends: music can never be turned on"~~ — **misleading.** The game has a
  working audio engine; nothing consults `musicOn`. It is a vestigial setting, not
  broken music.
- ~~"Emblem Fury's dead flags live in the losing copy of `gameLoop`"~~ — **false.**
  `killStreakActive` is in both copies; the other two are in neither.
- ~~"Emblem Fury is two generations of the game in one file"~~ — too loose. What is
  true: for each duplicated name the later declaration wins and the earlier body is
  orphaned. **Emblem Fury does not crash** (`gameLoop(0)` returns cleanly).
- ~~"An entire reward layer is unwired"~~ — superseded by Round 5. The perk works;
  its descriptions are wrong. See section 2.

## 4. Genuine design decisions, not bugs

- **Implementing the stacking kill-buff for real** (`killStackMult` → `allStatsBuff`).
  The plumbing is already wired into the damage maths; only the increment is missing.
  But a stacking attack buff in a kill-heavy game is a significant balance lever.
- **Restoring three guards that currently never engage** — Seraphina's once-per-run
  limit (D&D), BBA's reform guard, and Emblem Fury's deflect-while-moving penalty.
  All three make the game *harder*.
- **Four shadowed function declarations in Emblem Fury** (incl. `gameLoop`): the
  earlier body of each is dead. Anyone editing that file should know, or a
  correct-looking fix aimed at the dead copy will appear to do nothing.

## 5. Clean — checked, nothing to do

- All 25 pages: every inline script parses, live matches the repo byte-for-byte, and
  (Round 6) all 25 main scripts run to completion headlessly — no page is dead on load.
- **No second crash exists.** 1,671 blind no-arg calls across 25 files flagged exactly
  one function, `calcAC` — the crash already known. Round 6.
- Every inline `onclick=` on all 15 checkable pages resolves to a real function. Round 6.
- No cross-game `localStorage` key collisions: 24 keys, every game namespaced, and the
  2 shared keys are auth.js→admin.html producer/consumer pairs. Round 9.
- 23 of 25 games survive a corrupted, stale or wrong-shaped save. The 2 that do not
  (`scenario-generator`, `wheel-of-faith`) need an outside cause to trigger — neither
  can write the bad value itself. Latent, not live. Round 8.
- Duplicate object keys across every game: one hit, harmless (`chosoBloodHits`, both `0`).
- The `const _orig = fn` decorator idiom: correct 6 times, wrong twice (the D&D crash,
  and Emblem Fury's benign `_origGameLoop`). Re-checked in Round 6 with a tool that
  splits "correct" into 8 hoist-safe expression patches vs 8 never-called dead aliases.

## 6. How much to trust these tools

They find **suspects, not verdicts**. Across five rounds they produced one proven
crash and one real idiom bug — and also two false theories, two batches of
false positives, and two bad recommendations I had to withdraw. Specific known blind
spots: values set via `obj[key]` or restored from `localStorage` look dead and are not
(`gold`, `goldMult`, `luck`); CSS read as JS produced nonsense until the scanner was
restricted to script bodies; and named IIFEs looked like uncalled functions.

---

# Round 1 — the original sweep

> **⚠️ PARTLY SUPERSEDED.** The Ryu beam, RPS `musicOn` and "entire reward layer"
> findings below were overturned in Rounds 4 and 5, and the "Recommended order" at the
> end of this round is obsolete. Kept for provenance. See CURRENT STATUS above.

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

## Recommended order  — ⚠️ OBSOLETE, superseded by CURRENT STATUS

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

---

# Round 6 — a blind execution sweep, to find out what rounds 1-5 missed

**2026-08-22. Nothing in any game file changed. Mostly a negative result, which is
the point.**

Rounds 1-5 all worked the same way: read the code, form a theory, then try to confirm
it. That is how two false theories and two bad recommendations got as far as being
written down. Round 6 inverts it — run everything blind, with no theory, and see what
the machine finds on its own.

## What was run

Four new tools in `soloforte-testkit/`, over all 25 pages:

| tool | question | result |
|---|---|---|
| `sweep.mjs` | does the main script finish executing at all? | **25/25 execute.** No page is dead on load. |
| `recursion-scan.mjs` | call every global function with no args — anything blow the stack? | 1,671 calls. **Exactly one hit: `calcAC`.** |
| `deadhandlers.mjs` | does every inline `onclick=` resolve to a real function? | 15 checkable pages, **0 dead handlers.** |
| `refscan.mjs` | any `ReferenceError: x is not defined`? | **1 hit, investigated, benign** (below). |

## The result that matters

`recursion-scan.mjs` was told nothing about D&D Crawler. It called 1,671 functions
across 25 files and flagged one: **`calcAC`**. That is now the third independent
confirmation of the crash, and the first one that did not know where to look.

The useful half is the silence everywhere else: **there is no second crash of this
class hiding in another game.** The one-line `fix-dnd-calcac.patch` is not the first
of a series — it is the whole job.

## The one ReferenceError, and why it is not a bug

`emblem-fury.html` — `selectedChar` is **never declared anywhere in the file**. It is
assigned twice (3035, 3203, both inside character-card click handlers) and read three
times (3498, 3551, 3759) as `selectedChar?.color` / `?.name`.

Worth being clear about two things that look alarming and are not:

- The `?.` gives no protection here. Optional chaining guards against `null`, not
  against an *undeclared identifier* — the read throws `ReferenceError` regardless.
- It still cannot fire in practice. Both readers (`renderMotorcycle`,
  `renderStoryVictory`) are gated behind `storyActive`, and the only line that sets
  `storyActive = true` is the same click handler that assigns `selectedChar` two lines
  earlier. There is no resume-from-save path into those states — the only
  `localStorage` use in the file is meta progression (`ef_meta`: soul essence and
  permanent upgrades), not a mid-run restore.

So: **not a bug, and not worth a code change.** It is one `'use strict'` away from
becoming a fatal one, since the assignment at 3035 relies on sloppy-mode implicit
global creation. Recorded so nobody adds that directive and wonders why character
select broke.

## Alias idiom, re-checked with a stricter tool

`aliasscan.mjs` classifies every `const _orig = fn` into RECURSION / DEAD / OK /
OK-EXPR. It agrees with Round 5 and sharpens it:

- **RECURSION: 1** — `dnd-crawler.html:7578`, the known crash.
- **OK-EXPR: 8** — the target is reassigned as a function *expression*, so nothing
  hoists and the wrap is correct. This is the distinction that matters: the idiom is
  safe with `foo = function(){}` and fatal with `function foo(){}`, and the two are a
  keyword apart.
- **DEAD: 8** — alias assigned, never called. Includes `emblem-fury.html:3856`
  (`_origGameLoop`), which *is* the fatal shape (hoisted `function gameLoop` at 3857)
  and is harmless only because nothing calls it. A landmine, not a bug: the first
  person to call `_origGameLoop()` gets an instant stack overflow. Also
  `shadow-blade.html:2442` (`originalDrawGame`) and five copies of `const M = isMobile`
  in `rps-legends.html`.

Caveat on that tool: the DEAD and OK buckets contain non-function noise, because
"is this identifier a function" is decided by regex (`ball-battle-arena.html:23428`
`tgtY = cy` is two numbers, not an alias). The RECURSION bucket is the one built to be
precise, and it has exactly one entry.

## Two harness traps that cost real time — added to the trap list

Both produced a **confidently clean result that was wrong**, which is the worst
failure mode a test tool has.

1. **`instanceof` does not cross a `vm` realm.** The first version of
   `recursion-scan.mjs` caught each call and re-threw only `if (e instanceof
   RangeError)`. Errors thrown *inside* the vm context are instances of that context's
   `RangeError`, not the one this file injected — so the check was always false and
   every hit was swallowed. It reported dnd-crawler, the known positive, as **clean**.
   Classify errors outside the vm, by message, never by `instanceof`.
2. **Mask string literals before pulling identifiers out of code.** The first
   `deadhandlers.mjs` reported 5 dead handlers. Four were its own fault: `rgba(...)`
   inside a CSS string read as a missing function, and `.remove()` / `.indexOf()` on an
   expression result read as missing globals. Mask strings, and refuse any target
   preceded by `.` — only the *root* of a chain has to exist on `window`.

The fifth was a harness gap too: `admin.html` bails at its `window.sfAuth` admin guard
because the external `auth.js` is never executed, so `revokeUser` is never assigned.
Real total: zero.

**Standing lesson, now three rounds old: when a probe reports clean, distrust it until
it has reproduced a bug you already know about.** Every tool here is now checked
against `calcAC` first.

---

# Round 7 — preparing the two approved-pending fixes, and what that turned up

**2026-08-22. Still nothing applied to any game file.** Both changes exist as verified
patches only, waiting on Kyle's go:

- `fix-ef-bloodfrenzy-desc.patch` — the Blood Frenzy descriptions
- `apply-wof-group-a.patch` — Wheel of Faith Group A

## Wheel of Faith Group A — measured, not estimated

Applied to a copy and run through `wof-reachability.mjs`:

| | before | after |
|---|---|---|
| sub-wheels that can NEVER fire | 25 | **13** |
| sub-wheels that can fire | 287 | 299 |
| items reachable behind sub-wheels | 2,324 | **2,411** |
| items unreachable | 181 | 94 |

+12 wheels, exactly one per wheel remapped, and 87 previously unreachable items become
reachable. The proposal's predicted 25 → 13 is confirmed by execution.

Two things worth knowing about the patch itself: two `conquered` entries contain
apostrophes (`Solo\'d`, `god\'s`) that must stay escaped or the file will not parse —
verified with `node --check` — and six of the twelve wheels share one trigger set
because they are all flavours of "you won by force". That six-way overlap is still a
design question, unchanged from the proposal.

## Blood Frenzy — it is THREE wrong descriptions, not two

I had this recorded as two. Tracing all three tiers through `applyAbilityCard`
(line 1416) and verifying by execution:

| tier | description says | what it actually does |
|---|---|---|
| 0 | "+15% atk speed after kill" | **+10% damage for 5s** after a kill (`bloodFrenzyTimer=5000`, `dmg*=1.1`) |
| 1 | "Kill stacks: each kill +5% atk for 10s" | **+30% damage below 50% HP** (`bloodRage`) |
| 2 | "100 kill stacks: berserk mode" | **+20% attack speed**, which also shortens reloads |

Wrong stat, wrong number, and two tiers promise a kill-stacking mechanic that does not
exist anywhere in the file. The patch states only what the code does.

## New finding: `bloodLord` does nothing at all

Blood Frenzy tier 2 sets `atkSpdMult *= 1.2` **and** `bloodLord = true`. I had recorded
tier 2 as "atk speed + lifesteal". The lifesteal half is false.

`bloodLord` is never read for a value — its only appearance is widening a gate:

```js
if (player.bloodLifesteal > 0 || player.bloodLord) {
  const healAmt = Math.floor((e.maxHp || 50) * 0.05 * player.bloodLifesteal);
  if (healAmt > 0) { /* heal + blood-bat particles */ }
}
```

The payload is scaled by `bloodLifesteal`, which tier 2 never sets. So `bloodLord`
lets you through the door and then multiplies by zero. Proven by execution: tier 2 on
a clean player, then a real `onEnemyKill` — **0 HP healed**.

## And the on-kill heal is dead for realistic enemies anyway

The control case was the surprise. Even *with* a lifesteal source the heal floors to
zero, because the payload is `maxHp × 0.05 × bloodLifesteal`:

| `bloodLifesteal` | source | enemy maxHp needed to heal even 1 HP |
|---|---|---|
| 0.03 | Blood emblem lv2 | **667** |
| 0.10 | Berserker Rage tier 2 | 200 |
| 0.13 | both | 154 |

The blood-bat particles are inside the same `if (healAmt > 0)`, so on a normal enemy
**the bats never fly either** — which is presumably why nobody noticed.

Important scoping: `bloodLifesteal` is **not** dead. It feeds a separate, working
on-hit lifesteal at line 888 (`floor(dmg * ls)`). It is specifically this on-kill
*bonus* heal that rounds away. Not patched — changing it alters healing throughput,
which is a balance call.

## Also spotted, not patched

`Berserker Blood` (line 4006) is described as "Below 40% HP: +50% damage" but sets
`bloodRage`, which is **below 50% HP, +30% damage** — the same flag Blood Frenzy tier 1
uses. Third description mismatch off the same underlying flag. Kyle approved rewriting
Blood Frenzy's text, not this one, so it is left alone pending a word.

---

# Round 8 — what a returning player with a broken save gets

**2026-08-22. Nothing changed. This round's honest headline is "two latent gaps, no
live bug" — the caveat is the finding.**

Every tool up to now tested these games as a **first-time visitor**: `localStorage`
returns null, the game takes its default path. Returning players hit a completely
different branch — the one that parses stored progress. `sweep.mjs` proving all 25
pages load says nothing about that branch. `savescan.mjs` tests it by running each
game five times against a different storage backing: `null` (baseline), invalid JSON,
`{}`, `[]`, and the literal string `"null"`.

**23 of 25 survive every shape.** Two do not:

| game | breaks on | error |
|---|---|---|
| `scenario-generator.html` | `{}`, `"null"` | `idx.includes is not a function` |
| `wheel-of-faith.html` | `"null"` | `Cannot read properties of null (reading 'length')` |

## The interesting part: both are guarded, and the guard has a hole

Neither is careless code. Both use the idiom that *looks* bulletproof:

```js
try { savedChars = JSON.parse(localStorage.getItem('wof2_chars') || '[]'); }
catch(e) { savedChars = []; }
```

It defends against two things and misses a third:

- storage empty → `|| '[]'` covers it
- storage holds invalid JSON → `JSON.parse` throws, `catch` covers it
- **storage holds valid JSON of the wrong type → nothing covers it.** `JSON.parse`
  succeeds, so the `catch` never runs, and the wrong-typed value escapes into code
  that assumes an array.

The literal string `"null"` beats *both* guards at once: it is truthy, so `|| '[]'`
does not fire, and it parses cleanly to `null`, so the `catch` does not fire either.

## Why this is NOT being reported as a live bug

I checked whether either game can write the triggering value itself. Neither can:

- `savedChars` is only ever assigned `[]` or the parse result (2029, 2166) — writing
  `"null"` would require the corruption to have already happened.
- `setSaveIndex` is only ever called with `idx`, which comes from `getSaveIndex()` and
  is always an array (753, 754, 804, 817).

So this needs an outside cause: a future version writing a different shape to the same
key, devtools, an extension, or partially-written storage. **All 25 games share one
`localStorage` origin**, so a key collision is the realistic future route — the names
`sg_saves` and `wof2_chars` are distinct today.

One property does make it nastier than its likelihood suggests: the throw happens
**during load**, before any code that could repair or reset the save runs. A player who
hit it would be stuck on a blank page permanently, with no in-game way out and no
reason to suspect "clear site data".

## Not patched

Hardening is small — validate the shape rather than trusting the parse:

```js
const v = JSON.parse(localStorage.getItem('wof2_chars') || '[]');
savedChars = Array.isArray(v) ? v : [];
```

Not applied. It is defensive work on a path nothing currently reaches, and the standing
rule is that no game file changes without Kyle's word. Worth doing next time either
file is open anyway.

---

# Round 9 — do two games fight over the same save key?

**2026-08-22. Nothing changed. Clean result, reached only after the tool lied twice.**

Round 8 noted that all 25 games are served from one origin and therefore share one
`localStorage`, and left it there. This checks it. It matters more than round 8's
finding did: that one needed an outside cause and was latent, whereas a key collision
needs nothing but a player who plays two games — game A writes `save` as an object,
game B reads `save` expecting an array, and B is broken for everyone who touched A.

**Result: no collisions. 24 keys across the shared origin, every game namespaced.**

Two keys are shared and correctly *not* collisions: `sf_activity_log` and
`sf_login_attempts` are written by `auth.js` and also read by `admin.html`. One writer,
one extra reader — the admin panel displaying the auth log, working as intended.

## The clean bill was wrong twice before it was right

**First pass — blind.** The scanner only matched string literals like
`getItem('ef_meta')`. But `auth.js` keeps its key names in constants:

```js
const SK_USER = 'sf_auth_user';
const SK_LOG  = 'sf_activity_log';
...
localStorage.getItem(SK_LOG)
```

So `auth.js` — the one file that legitimately shares keys with another page —
contributed **zero** keys, and "18 keys, no collisions" was an artefact of not seeing
the data. Widening the scan from inline `<script>` to external `.js` did not help,
because the blindness was the identifier pattern, not the file list. Resolving simple
`const NAME = 'literal'` bindings raised the key count 18 → 24.

**Second pass — over-eager.** With `auth.js` visible, it flagged those two keys as
collisions and would have sent a false alarm. The definition was wrong: "used by more
than one file, with a writer" also describes every normal producer/consumer pair. A
real collision needs **two writers**. Corrected, those two reclassify as shared-by-design
and the count returns to zero — this time meaning it.

Both failures are the same shape as the `instanceof` bug in round 6: **a confident
clean result produced by a tool that could not see the thing it was looking for.** The
sequence that caught it was noticing the key count did not change after widening the
scan, which it should have if `auth.js` were really being read.
