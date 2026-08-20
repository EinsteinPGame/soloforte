# El Centaur — Sniper/Grapple FPS
**Status:** Playable core built and live at `sniper-el-centaur.html` (2026-08-20). Ys approved, Kyle gave the go.
**Last updated:** 2026-08-20

## Build state — what is in the core
In: rooftop city (deterministic 5x5 grid, hand-set heights for sightlines), bolt-action
sniping with hit locations (head/body/limb), ADS with 4x/7x/10x zoom, sway and breath
hold, five enemy types (infantry, sniper with glint tell, spotter, shield, armoured),
the HVT, shot-driven detection with the last-known-position rule, spotter artillery,
fall damage, extraction win condition, and **both** grapple feels (gravity pull and
pendulum swing, toggled with `G`) so the feel question can be answered by playing.

Not in yet: drones and operator relinking, the other four rounds (Poison, Lightning,
Reflection, Earth), ground level, the 4x5 mission chapter structure, level-editor JSON
import, non-lethal disarm.

**Open question for Kyle:** section 1 of this spec calls the grapple "pull-to-point",
section 3 calls it "Insomniac-style single-point swing". Both are implemented; the spec
should be narrowed to whichever he picks.

## 1. Premise
First-person 3D. You are a master sniper of the **El Centaur**, an alien machine species at war.

The species framing does real design work — it justifies three mechanics at once and stops them feeling arbitrary:
- **Armour** → you have an HP bar instead of being one-tapped
- **Gravity grapple** → futuristic pull-to-point traversal, not a rope
- **Imbued rounds** → ammunition with elemental effects

## 2. Core loop
Shoot from a rooftop → enemies begin triangulating your position → relocate by grapple before they find you → repeat from a new angle.

Every shot is a decision: take another kill from here, or move first and stay invisible.

## 3. Controls
| Action | PC | Mobile |
|---|---|---|
| Shoot | Left click | Button |
| Aim (ADS) | Right click | Button |
| Sprint | Shift | Button |
| Grapple | (TBD) | Button |

Grapple is Insomniac-style **single-point swing** — no multi-grapple. Feel is the hard part, and it is tuning work, not code.

## 4. Power rounds (7)
Loadout-selected before a mission, **not** random pickups — random undercuts planning. Limited ammo, with a reload mechanic.

| Round | Effect |
|---|---|
| Fire | Explosion at contact point |
| Poison | Destroys environment and walls at contact |
| Lightning | EMP effect |
| Penetration | Passes through walls, silent |
| Reflection | Bullet ricochets |
| Earth | Spawns cover to shield you or allies |
| Ice | Freezes ground, enemies slip |

## 5. Enemies
Every enemy maps to a different round. This rock-paper-scissors between enemy type and ammo is the structural core — it makes loadout choice decide how a level plays.

| Enemy | Counter | Notes |
|---|---|---|
| Basic infantry | Any | Fodder |
| Enemy sniper | Any | **Needs a tell** (scope glint) or deaths feel cheap |
| Drone specialist | Lightning/EMP | See below |
| Shield | Penetration | |
| Armoured / bulletproof | Fire / explosive | |
| Assassin | Ice, Reflection | Constant movement, forces leading the target |
| Spotter | Any, urgently | Calls artillery on your position — punishes camping |

### Drone specialist
Killing him makes drones **drop out of the sky — unless another operator relinks them.**
- Visible `OPERATOR RELINKING…` window, new operator marked
- Only specialists/officers can take over, never generic infantry (else unwinnable)
- Cap 3–4 active drones
- Teaches **order of elimination**: kill the backup operator first, then the primary, and the drones die permanently

## 6. Detection
Modelled on Assassin's Creed / Cyberpunk stealth, but adapted. Those are close-range stealth where the danger is being *seen*; sniping is long-range where the danger is being *triangulated after shooting*. So detection is **shot-driven, not time-driven**.

1. **Shot 1** — a man drops. Confusion. Source unknown.
2. **Shot 2, same position** — direction worked out. Patrols move in.
3. **Shot 3, same position** — located. Enemy snipers aim, spotter calls artillery. Seconds to live.
4. **Grapple away** — counter resets; enemies converge on your **last known position**, not your actual one.

That last-known-position rule is what makes the grapple matter.

Layered on: bodies found in the open raise alert; alert decays while you stay quiet.

**Drones accelerate this.** They are roaming eyes — ignore the drone specialist and you get triangulated in two shots instead of three. Priority-target logic and the detection system are therefore the same system.

## 7. Objectives
- Assassinate a specific target
- Protect an ally
- Destroy equipment
- Survive to extraction
- **Score attack** (helicopter mission)
- **Non-lethal disarm** — shoot the weapon or the arm. Hardest shot in the game, needs hit-location detection.

## 8. Scope decisions (settled)
- **Rooftop only** for v1. Ground level is phase 2 — different AI, animation and level design, close to double the work.
- **No planes/tanks/subs.** Helicopter mission stays: fixed position, no movement code, sells the war scale cheaply.
- **No bullet drop or wind.** Lowers the skill ceiling slightly, saves real complexity. Possible later difficulty toggle.
- **~20 levels**, structured **4 chapters × 5**, each chapter introducing one new enemy type and one new power round.

## 9. Tech
- **Three.js**, single HTML file, loaded via script tag — nothing to install
- Est. **6,000–12,000 lines**, ~10–14 missions core, 2–4h playtime
- First 3D project (all prior work is 2D canvas). Hard parts: grapple swing feel, lighting, raycasting, 3D pathfinding
- **Levels authored in the level-editor tool**, exported as JSON — hybrid approach: generator produces a rough city block, then hand-tuned for sightlines

## 10. Shared universe
Sits in a five-game universe — see `specs/el-centaur-universe.md`.
