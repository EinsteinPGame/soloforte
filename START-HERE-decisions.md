# Start here — 5 decisions, everything else is detail

Kyle: there are ~1,500 lines of audit notes and proposals in this repo. **You should not
have to read them.** This page is the whole thing. Detail links at the bottom if you want
them.

Nothing has been applied to any game file. Every patch below has been tested, and all
**five** have been rehearsed applied *together* — they touch three files, don't
conflict, and need no particular order.

---

## 0. Emblem Fury doesn't run on phones. Also one line. ← new, 2026-08-23

One stale line kills the whole game on mobile:

```js
document.getElementById('mobile-overlay').style.display='block';   // #mobile-overlay
                                                                   // doesn't exist
```

It's guarded by a phone user-agent test, so on any phone it throws before the script
finishes — and the bootstrap `load` handler 1,900 lines below (the one that calls
`showCharacterSelect()` and starts the game loop) **never registers**. Measured: on a
mobile UA the `load` listener count is **0**; on desktop it's 1. The page paints and then
nothing happens.

The line is leftover from before you rewrote the mobile layer. The rewrite is fine — the
joysticks are shown by CSS media query and wired by the *other* `setupMobileControls()`,
which uses the correct ids and null-guards them. So deleting the line loses nothing.

- **Verified**: mobile `load` listener 0 → 1; click/keydown wiring becomes identical to
  desktop. Desktop untouched.
- **Why it hid for nine rounds**: every runtime tool in the kit reported
  `navigator.userAgent = 'node'`, so the mobile branch had literally never been run.

→ **Recommend: yes.** `git apply fix-ef-mobile-boot.patch`

**Bundled with it, same page, independent:** weapon fusion crashes. `fuseWeapons()` ends
by re-rendering into `#inv-panel`, which doesn't exist either — so every FUSE click throws
*after* the weapons were already merged. The fusion sticks, the panel doesn't refresh, and
you keep seeing the old pair until you close and reopen the inventory. The call is
redundant anyway (the button's own handler already re-renders).

→ **Recommend: yes.** `git apply fix-ef-fuse-crash.patch`

---

## 1. D&D Crawler is crashing. One line fixes it.

`calcAC()` recurses until the tab dies. It fires from the attack roll and the combat HUD,
so combat is broken.

Cause: a patch did `const _origCalcAC = calcAC` and then redefined `calcAC` with a
`function` declaration. Function declarations hoist, so the alias captured the *new*
function and calls itself forever.

- **Proven** by running the real file: `calcAC()` throws `RangeError`.
- **Fix verified**: returns `12`, which is correct (base 10 + DEX 14 modifier).
- **Bounded**: a blind sweep of 1,671 functions across all 25 games flagged only this
  one. There is no second crash of this kind. This is the whole job.

→ **Recommend: yes.** `git apply fix-dnd-calcac.patch`

---

## 2. Blood Frenzy tells players three things that aren't true.

You approved rewriting **two** descriptions. It is actually **three** — I had it wrong,
and here is the correction:

| tier | it says | it actually does |
|---|---|---|
| 0 | "+15% atk speed after kill" | **+10% damage** for 5s after a kill |
| 1 | "Kill stacks: each kill +5% atk for 10s" | **+30% damage below 50% HP** |
| 2 | "100 kill stacks: berserk mode" | **+20% attack speed** (also faster reloads) |

Two tiers promise a kill-stacking mechanic that exists nowhere in the game. Text only —
no balance change.

→ **Recommend: yes, all three.** `git apply fix-ef-bloodfrenzy-desc.patch`

*(I also have to take something back: I told you tier 2 gives "attack speed + lifesteal".
The lifesteal half is false. `bloodLord` sets a flag nothing ever reads, so it multiplies
the heal by zero. Ran it: 0 HP healed.)*

---

## 3. Wheel of Faith: 25 sub-wheels could never fire. Now 0.

**181 outcomes players could literally never reach.** All of them come back
(2,324 → 2,505 reachable).

The cause of all 25 is one editing mistake: the wheel text was rewritten and the triggers
were never updated. The wheel says `Voidtouch`, the trigger still hunts `Void Eater`.

→ **Recommend: yes.** `git apply apply-wof-all-groups.patch`

**Two things inside it are judgement calls, not repairs** — say no to either and I'll
redo that part:

- **`fightCombatDoctrine`** wanted "Berserker"/"Assassin", which don't exist anywhere —
  your fight wheel is skill *tiers* (Rookie → Unbeatable), not styles. That trigger is
  from a design that never shipped. I pointed it at the top 6 tiers, because its content
  is fighting philosophies and a Rookie doesn't have a doctrine. **That's my choice, not
  a fix.**
- **Backstory has only 1 betrayal outcome** but 3 betrayal-themed sub-wheels. I've
  written it the workable way, but the honest fix is adding 2-3 betrayal lines to the
  wheel itself. That's writing, not code.

---

## 4. Two small numbers I need from you

- **Kill-streak threshold: 3 kills or 5?** Everything else is already built; only the
  trigger number is missing. → **Recommend 5.**
- **Ryu's beam flag: delete it, or build it into a real feature?** It's leftover
  scaffolding, not a bug. → **Recommend delete.**

---

## Fastest path

Reply **"do the recommended"** and I'll apply 1, 2 and 3 in order, push, verify live, and
report back. Or answer any single one and I'll do just that.

## Also waiting, whenever convenient
- **A photo of your Moonlight 1st-movement sheet music.** Three notation problems need a
  reference. I won't invent Beethoven.
- **A free LTA DataMall key** — the MRT breakdown alert monitor is built and tested, just
  inert without it.

## Detail, if you want it
- `dead-flags-audit.md` — start at its **CURRENT STATUS** section, not the rounds below
  (rounds are in write order; later ones overturn earlier ones)
- `wheel-of-faith-groups-c-d-PROPOSAL.md`, `wheel-of-faith-group-b-PROPOSAL.md`,
  `wheel-of-faith-sections-3-4-PROPOSAL.md`

## Things I found and deliberately did NOT change
Each alters balance or behaviour, which is your call, not a bug fix:
- The Emblem Fury on-kill heal rounds to zero for normal enemies (needs a 667-HP enemy to
  heal 1 point). The blood-bat visual is inside the same check, so it never plays either.
- `Berserker Blood` says "Below 40% HP: +50% damage"; it's actually below 50% HP, +30%.
- Wheel of Faith and the scenario generator would break on a corrupted save — but the
  games can't produce the bad value themselves, so it's latent, not live.
