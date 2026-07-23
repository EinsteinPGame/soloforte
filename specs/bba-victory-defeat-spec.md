# Ball Battle Arena — Character-Specific Victory & Defeat Animations

## Design Spec v1.0

**Date:** 2026-07-23
**Author:** Kyle (via agent)
**Status:** Draft

---

## Overview

Each of the 25 characters receives a **unique pre-animation** that plays before the existing generic animation sequence:

- **Victory flow:** Character-specific animation (2-3s) --> Generic glow aura celebration
- **Defeat flow:** Character-specific animation (1-2s) --> Generic slow-mo replay --> cracks --> shatter --> dissolve --> grayscale

All animations are designed for **2D canvas** rendering: particle systems, color/alpha transitions, shape morphing, line drawing, text overlays, and screen-level effects (flash, shake, tint). No 3D transforms or sprite sheets required.

---

## Technical Constraints

| Constraint | Value |
|---|---|
| Renderer | HTML5 Canvas 2D context |
| Character representation | Colored circle with effects |
| Victory pre-animation duration | 2-3 seconds |
| Defeat pre-animation duration | 1-2 seconds |
| Allowed techniques | Particle emission, bezier paths, gradient fills, globalCompositeOperation blending, shadow/glow (shadowBlur), arc/line drawing, globalAlpha fading, canvas translate/rotate/scale, fillText overlays, screen shake (canvas offset), color tint (full-canvas overlay rect with alpha) |
| Forbidden | WebGL, 3D transforms, external sprite sheets, audio sync (audio handled separately) |

---

## Animation Definitions

### CYBERPUNK CHARACTERS

#### 1. Mantis Blades

| Aspect | Description |
|---|---|
| **Victory** | Two thin red lines (blades) extend from the circle's sides at 45-degree angles, slashing outward in an X pattern. Each slash leaves a lingering red trail (fading bezier curves). On full extension, 6-8 small red diamond particles burst from the blade tips. The circle pulses bright red once. Duration: 2.5s. |
| **Defeat** | The two blade lines extend halfway, then stutter/glitch (rapid x-offset jitter, 3-4 frames), retract back into the circle. The circle's color desaturates from red to dull grey over 1.5s as a single crack line appears down the center. |

#### 2. Gorilla Arms

| Aspect | Description |
|---|---|
| **Victory** | The circle rapidly scales up 1.3x then back to 1.0x twice (like flexing). On each "flex," a ring of orange shockwave particles expands outward (concentric circle stroke, expanding radius, fading alpha). After the second flex, the ground beneath (a short horizontal line) cracks — 3 jagged lines radiate downward from the circle. Screen shake (2px offset) on each impact. Duration: 2.5s. |
| **Defeat** | The circle attempts one scale-up (to 1.15x) but freezes mid-flex. Electric sparks (small yellow dots with short random-direction lines) crackle around the circle for 0.8s — cyberware malfunction. The circle slowly deflates back to 0.9x scale and dims. Duration: 1.5s. |

#### 3. Monowire

| Aspect | Description |
|---|---|
| **Victory** | A thin cyan glowing line (the wire) whips out from the circle in a full 360-degree arc, drawing a perfect circle around the character at 2x radius. The whip trail glows bright cyan with shadowBlur. Once the arc completes, the outer circle constricts inward and "snaps" — a bright white flash at the snap point, then 12+ tiny cyan particles scatter outward. Duration: 2s. |
| **Defeat** | The monowire line extends outward but goes limp — it droops downward as a slack bezier curve, then fizzles out (the line breaks into 4-5 dashed segments that fade individually). The circle's cyan glow dims to dark blue. Duration: 1.5s. |

#### 4. PLS (Projectile Launch System)

| Aspect | Description |
|---|---|
| **Victory** | Three small circles (projectiles) launch upward from the main circle at slight angle offsets (-15, 0, +15 degrees). Each projectile leaves a yellow-orange trail (series of shrinking circles along the path). At the top of the screen, they burst into small firework patterns — radial particle bursts in orange/yellow. The main circle glows warm orange. Duration: 3s. |
| **Defeat** | A single projectile forms above the circle but misfires — it sputters (rapid flicker between visible/invisible), arcs weakly to the side, and fizzles into grey smoke particles (small grey circles rising and fading). The main circle's color shifts to a dull burnt orange. Duration: 1.5s. |

#### 5. Sandevistan

| Aspect | Description |
|---|---|
| **Victory** | Time-dilation effect: the entire canvas gets a subtle blue tint overlay (rgba blue at 0.15 alpha). The circle creates 5 afterimage copies of itself in a rapid zigzag pattern across the screen (each copy slightly more transparent). The copies linger for 0.5s, then all snap back to the original position with a bright white flash. Speed lines (thin white lines radiating from center) appear briefly. Duration: 2.5s. |
| **Defeat** | The circle tries to dash (moves 30px to the right with a blue afterimage) but stutters — the afterimage turns red (overheat). The circle rubber-bands back to original position. Red warning text "SYSTEM OVERHEAT" fades in above the circle in small monospace font, then glitches (random character replacement) and fades out. Duration: 2s. |

#### 6. Throwing Weapons

| Aspect | Description |
|---|---|
| **Victory** | Three small triangles (knives) orbit the main circle in a widening spiral, each leaving a silver-white trail. Once at max radius (3x circle size), they all fly outward in different directions off-screen. A beat later, they boomerang back and embed around the circle (triangles point inward, evenly spaced), forming a star pattern. Brief metallic glint effect (white sparkle particle on each). Duration: 3s. |
| **Defeat** | Two triangles are thrown outward but spin out of control — their rotation accelerates, trajectories curve wildly (spiraling bezier paths), and they clatter off the edge of view. The circle flinches (quick 3px downward shift and back). Dull grey. Duration: 1.5s. |

#### 7. Katana

| Aspect | Description |
|---|---|
| **Victory** | A single clean horizontal slash line draws across the screen through the circle — bright white with high shadowBlur glow. The line lingers for 0.5s. Then a vertical slash crosses it, forming a cross. At the intersection, a brief cherry-blossom effect: 8-10 small pink circles drift downward with slight horizontal sway (sine wave x-offset), fading as they fall. The circle glows white-pink. Duration: 2.5s. |
| **Defeat** | The slash line begins to draw but stops at 60% — it wavers, then the line shatters into segments that fall downward (each segment rotates and drops with gravity). The circle dims and a single thin red line (wound) appears across it diagonally. Duration: 1.5s. |

#### 8. Berserk

| Aspect | Description |
|---|---|
| **Victory** | The circle rapidly pulses between its base color and bright crimson red (4 pulses over 1s). With each pulse, it grows slightly (1.0x to 1.4x over the sequence). At max size, a massive circular shockwave expands outward — a thick red ring stroke that grows to fill the screen, fading as it expands. Heavy screen shake (4px). Residual red particle embers float upward from the circle. Duration: 2.5s. |
| **Defeat** | The circle inflates to 1.3x (berserk activation attempt), turns deep red, then immediately destabilizes — the outline becomes jagged (drawn as a rough polygon instead of smooth arc), flickering between red and dark red. It collapses back to 0.8x with a dull thud (screen micro-shake 1px). Red color drains downward like liquid (gradient wipe from top). Duration: 2s. |

---

### BOSS CHARACTERS

#### 9. Adam Smasher

| Aspect | Description |
|---|---|
| **Victory** | The circle's outline shifts to a thick metallic grey stroke. Four angular lines extend from the circle forming a crude mech-suit silhouette (shoulders and legs, simple geometric shapes). A targeting reticle (thin red crosshair circle + lines) appears over the defeated opponent's last position, locks on (shrinks to half size), then a thick red beam line fires from Adam's circle to that point. Explosion particle burst (orange/red/yellow) at the target. Screen flash white for 1 frame. Duration: 3s. |
| **Defeat** | Armor starts rusting and corroding — patches of orange-brown spread across the metallic surface, eating away at the chrome finish. Armor plates crack and fall off one by one (polygon fragments dropping with rust-colored particle trails). The exposed core underneath flickers weakly between red and dull grey. Final plate drops with a heavy impact, leaving the circle bare and diminished. Duration: 2s. |

#### 10. Gojo Satoru

| Aspect | Description |
|---|---|
| **Victory** | The circle shifts to a vivid blue-purple gradient. A translucent sphere (concentric circle with low alpha, pulsing radius) forms around it — Infinity barrier visualization. Then the circle's "eyes" appear: two small bright blue dots near the top of the circle (Six Eyes). A swirling vortex of purple and blue particles spirals inward toward the circle (Hollow Purple charging), compresses to a point, then fires as a single purple beam to the right, leaving a wide purple trail that fades. Canvas tints purple briefly. Duration: 3s. |
| **Defeat** | Infinity barrier manifests as concentric translucent rings — they shimmer blue-purple, rotating in opposite directions. Then hairline cracks appear on the outermost ring, spreading inward ring by ring (glass-shattering effect with fragment particles drifting outward). The Six Eyes (two blue glowing dots) flicker rapidly between bright and dim, then fade to grey and close shut (shrink to zero). A single precise red slash line carves diagonally across the circle — Toji's killing blow reference. The blue-purple gradient drains to cold grey from the slash point outward, like color bleeding out. Infinity fragments drift away like broken glass shards, catching faint light before fading. Duration: 2.5s. |

#### 11. Yuta & Rika

| Aspect | Description |
|---|---|
| **Victory** | Two circles are present: the main circle (Yuta, blue-white) and a larger, semi-transparent dark purple circle behind it (Rika, at 0.4 alpha). Rika's circle grows to 2x size, and jagged claw-like lines extend from it (4 sets of 3 parallel curved lines). Dark purple energy particles swirl around both circles. A bright white ring (Love/bond energy) pulses between the two circles. Rika's mouth appears — a curved line with sharp teeth below her circle. Duration: 3s. |
| **Defeat** | Rika's purple circle destabilizes — it warps (oscillating between oval shapes) and emits distressed purple particles. Yuta's circle reaches toward Rika (slight movement in her direction). Rika's form dissolves into purple mist (circle breaks into many small purple dots that drift upward and fade). Yuta's circle dims. A faint ring outline where Rika was lingers for 0.5s, then fades. Duration: 2s. |

#### 12. Mahoraga

| Aspect | Description |
|---|---|
| **Victory** | An eight-handled wheel appears above the circle — drawn as a circle with 8 short lines radiating outward (the Wheel of Dharma). The wheel rotates, accelerating over 1s. With each quarter rotation, the main circle flashes a different color (representing adaptation: red, blue, green, white). On the final rotation, a burst of golden light radiates from the wheel (radial gradient expanding outward, gold to transparent). The circle settles on a deep black with gold outline. Duration: 3s. |
| **Defeat** | The Dharma wheel appears but spins erratically — stuttering, reversing direction. One of the 8 spokes breaks off (line segment detaches and falls). Then another. The wheel crumbles (remaining lines scatter). The main circle cracks down the middle with a bright white fracture line. Each half shifts slightly apart (2px gap). Duration: 2s. |

#### 13. Dabura Karaba

| Aspect | Description |
|---|---|
| **Victory** | Golden light pillars (vertical beams, 5 total) descend one by one around the circle in an evenly-spaced ring, each landing with a soft white flash at the base. As each pillar appears, the circle rises slightly (levitating upward 15px total, shadow shrinking below). A sword line extends diagonally upward from the circle, pointing to the sky. On the final pillar's descent, a burst of golden light erupts from the sword tip, illuminating all pillars simultaneously. Canvas tints warm gold. Duration: 3s. |
| **Defeat** | The same 5 light pillars begin to descend — golden at first. But one by one they corrupt, shifting from gold to dark purple/black with dark energy particles pulsing along their length. Each corrupted pillar emits a low dark glow. The pillars close inward toward the circle (shrinking the safe zone of light). Darkness fills the space between them. The circle descends back down (drops from levitation). The sword line lowers and dims. The final pillar corrupts — total darkness envelops everything, then silence. Duration: 2s. |

---

### JJK CHARACTERS

#### 14. Choso

| Aspect | Description |
|---|---|
| **Victory** | Dark red (blood) tendrils extend from the circle — 5-6 curved bezier lines that whip outward and arc gracefully, like blood manipulation (Flowing Red Scale). The tendrils harden (become solid lines with sharper edges). Small red droplet particles float upward from the tendrils. The circle's marking appears: a horizontal line across the bridge (nose marking, drawn as a dark band across the upper-middle of the circle). A faint ghostly outline of two smaller circles appears beside him (his brothers). Duration: 2.5s. |
| **Defeat** | Blood tendrils extend but lose cohesion — they waver and drip apart (the bezier curves decompose into disconnected droplet particles falling downward). The circle staggers (quick horizontal oscillation). A tear drop (single small blue-tinted particle) falls from the top of the circle. His brothers' outlines appear faintly, then fade — he reaches toward them (circle shifts slightly). Duration: 2s. |

#### 15. Toji

| Aspect | Description |
|---|---|
| **Victory** | The circle has zero cursed energy — no glow, no aura, just a clean solid dark green circle. A long diagonal line (the Inverted Spear of Heaven / Split Soul Katana) appears, held at the circle's side. In one fluid motion, the line sweeps in a wide arc. The slash is so clean that a thin white gap appears across the canvas (like reality was cut). The circle stands perfectly still, completely unfazed. No particles, no flash — the restraint IS the flex. A small confident smirk line curves on the circle. Duration: 2s. |
| **Defeat** | Toji doesn't go down easy. The circle takes a hit (screen shake) but barely moves. A second hit — a small crack. He lunges forward (circle moves 20px toward the opponent's last position) for one final slash (line sweep), then stops mid-motion. The smirk line fades. The circle slowly tips (rotates 15 degrees) and the weapon line falls away, clattering (line drops and bounces with decreasing amplitude). Duration: 2s. |

#### 16. Mechamaru

| Aspect | Description |
|---|---|
| **Victory** | The circle transforms — mechanical panel lines (4-6 short straight lines) appear across its surface, giving it a mech-suit look. A large cannon barrel (thick horizontal line) extends from the right side. Energy charges at the barrel tip (small bright blue-white circle growing from 0 to full radius over 1s, with electric crackle particles). Fires a massive beam — thick bright blue line across the screen with electric particle edges. "Ultimate Mechamaru" text faintly overlays in blue monospace font, then fades. Duration: 3s. |
| **Defeat** | Mechanical panels crack open (the surface lines widen into gaps). Sparks and smoke (yellow spark particles + grey rising circles) pour from the gaps. The cannon barrel droops (rotates 30 degrees downward). The energy charge at the tip fizzles (small pop of scattered blue particles). The circle's blue dims to gunmetal grey, and a final wisp of grey smoke rises. One panel falls off (a small rectangle detaches and drops). Duration: 2s. |

#### 17. Kashimo

| Aspect | Description |
|---|---|
| **Victory** | Electricity erupts — bright yellow-white lightning bolts (jagged polylines) arc outward from the circle in 6-8 random directions, forking at their endpoints. Each bolt flickers (rapid alpha toggle). The circle crackles with surface electricity (thin yellow lines dancing across its circumference). A large lightning strike hits from above — a thick jagged line from the top of the canvas to the circle, bright white flash on contact. The circle is surrounded by a persistent electric field (small orbiting yellow dots). Duration: 2.5s. |
| **Defeat** | Lightning arcs fire but are weaker — thin, short, flickering out quickly. The circle's electric field destabilizes (orbiting dots scatter in random directions instead of orbiting). A final desperate discharge: all remaining electricity fires outward in every direction simultaneously, then nothing. The circle goes dark. A single small spark pops on the surface, then dies. Silence. Duration: 1.5s. |

#### 18. Nanami

| Aspect | Description |
|---|---|
| **Victory** | Clean and professional. A grid overlay (thin grey lines, 7:3 ratio markers) briefly appears over the canvas — Nanami analyzing weak points. A single precise line strikes through the exact 7:3 ratio point of the defeated opponent's last position. The strike leaves a clean geometric cut mark (thin white line with right-angle corners). The circle adjusts its "tie" — a small vertical rectangle below center straightens. Text overlay: "Overtime" in clean sans-serif, fading in and out. Duration: 2.5s. |
| **Defeat** | The ratio grid appears but glitches — lines are misaligned, the 7:3 markers don't land correctly (visual error). Nanami's circle removes its "tie" (the small rectangle detaches and drifts away). The circle's color shifts from sharp yellow-brown to dull grey. A clock overlay briefly appears (a small circle with two line hands) — the hands spin rapidly to midnight, then the clock fades. He's done working overtime. Duration: 2s. |

#### 19. Ryu

| Aspect | Description |
|---|---|
| **Victory** | Raw output. The circle compresses slightly (0.95x scale) as it charges — a visible heat distortion effect (slight wobble of nearby canvas elements / a wavy displacement ring). Then it fires the strongest cursed energy blast: a WIDE beam (thick gradient line, bright orange-white core with darker orange edges) that fills a quarter of the screen width. The beam sustains for 1s, leaving a scorched trail (darkened pixels along the path). The circle barely moves. Pure power. Duration: 2.5s. |
| **Defeat** | Ryu charges another blast — the compression begins, heat distortion starts — but the energy dissipates before firing (the charging glow fizzles from white back to dull orange, shrinking). The circle exhales (subtle 1.05x scale then back). A single frustrated pulse of weak orange energy radiates outward and fades almost immediately. The circle's color dulls. He couldn't output enough. Duration: 1.5s. |

#### 20. Higuruma

| Aspect | Description |
|---|---|
| **Victory** | A gavel appears above the circle — a small rectangle (head) on a thin line (handle). The gavel swings down and strikes (rotation arc from 45 degrees to vertical). On impact: a judicial seal effect — a perfect circle stamps onto the canvas below the character with the text "GUILTY" inside it in bold serif font. The defeated opponent's last position gets a red X overlay. Confiscation effect: a small icon (representing the opponent's ability) is drawn at opponent's position, then a line crosses it out, and it fades. Dark purple judicial aura around Higuruma's circle. Duration: 3s. |
| **Defeat** | The gavel appears but cracks on the downswing — the rectangle splits, fragments falling. The judicial seal tries to form but the circle only draws halfway before the line stutters and fades. "NOT GUILTY" text appears faintly (the verdict went against him). The dark purple aura recedes inward and extinguishes. The circle bows slightly (small downward shift + forward tilt via slight oval distortion). Duration: 2s. |

#### 21. Yuji

| Aspect | Description |
|---|---|
| **Victory** | The circle winds up — pulls back (shifts 10px right while slightly squashing horizontally, like coiling a fist). Then LAUNCHES forward with a devastating Black Flash: a punch impact point appears (a star-shaped burst of black and red-orange particles at the contact point, left side of screen). The canvas flashes BLACK for 2 frames (inverted from typical white flash — this is Black Flash). A distortion ripple expands from the impact point. "BLACK FLASH" text appears briefly in bold, glitching/flickering red-black. The circle bounces back to center, fists metaphorically raised. Duration: 2.5s. |
| **Defeat** | Yuji doesn't stay down immediately — the circle gets knocked back (shifts 15px), pauses, then pushes forward again (shifts 5px back toward center), showing determination. A second hit knocks it back further. The circle trembles (micro-vibration) but remains. Cracks appear but slowly. He endures. A ghostly translucent circle (Sukuna's lingering presence, red-tinged) separates slightly from Yuji's circle, then fades. Finally, his circle dims but doesn't shatter — it merely goes still. Duration: 2s. |

#### 22. Naoya

| Aspect | Description |
|---|---|
| **Victory** | Speed lines appear — horizontal streaks across the canvas (thin lines with motion-blur alpha gradient). The circle compresses into a horizontal oval (projection sorcery — frame manipulation). It zips in a triangular path at high speed, leaving sharp green afterimages at each vertex. At the final vertex, it decompresses back to a circle with a burst of green wind particles spiraling outward. The circle adopts a haughty posture: tilted slightly upward (rotated -5 degrees). A small arrogant smirk line. Duration: 2.5s. |
| **Defeat** | The circle tries to compress into projection mode but gets stuck between shapes — oscillating between circle and oval rapidly (form instability). Green afterimages appear but overlap incorrectly, creating a messy blur. The circle snaps back to normal shape with a crack. The smirk line inverts to a frustrated scowl. The circle vibrates with rage (high-frequency small oscillation) before going still. Entitled to the end. Duration: 1.5s. |

#### 23. Todo

| Aspect | Description |
|---|---|
| **Victory** | The circle claps — it briefly squishes vertically (as if hands coming together), producing a bright flash at center. BOOGIE WOOGIE activates: Todo's circle and a decoy circle (faded copy at a random position) swap positions in an instant (teleport with a line connecting the two positions briefly, like a swap indicator). They swap 3 times in rapid succession, each swap leaving a brief purple flash. The circle ends center stage, and a thought bubble appears above: a small cloud shape containing a tiny heart (thinking about his ideal woman). Duration: 3s. |
| **Defeat** | Todo attempts to clap — the squish animation starts but one "hand" is missing (the clap is asymmetric, only the left side squishes). Boogie Woogie fails — a broken swap line appears (dashed, flickering) but no teleport occurs. The circle looks at its hands (two small circles extend from sides, the character examining his palms). One hand fades (the hand he lost in the manga). A single tear-like particle falls, then he steels himself — the circle straightens. Even in defeat, he's proud. Duration: 2s. |

#### 24. Yuki Tsukumo

| Aspect | Description |
|---|---|
| **Victory** | Mass manipulation — the circle becomes incredibly dense. A gravitational lensing effect: nearby particles and background elements subtly warp inward toward her (curved distortion lines pulling inward). The circle doesn't move, but the space around it bends. Then she releases it: a massive spherical shockwave (expanding ring, thick white-blue stroke) pushes everything outward. Floating objects (small debris particles) are launched to screen edges. A star-map pattern briefly appears behind her (small white dots in constellation patterns — her love of travel). Duration: 3s. |
| **Defeat** | The mass builds up but becomes unstable — the gravitational pull effect intensifies uncontrollably (distortion lines become erratic, pulling in too much). The circle compresses (shrinking to 0.5x) under its own mass. A bright white core appears at the center — approaching a singularity. But instead of exploding, it simply collapses inward silently. The circle implodes to a single bright point, which then fades. Self-sacrifice, quiet and absolute. (Reference: her Black Hole technique against Kenjaku.) Duration: 2s. |

#### 25. Megumi Fushiguro

| Aspect | Description |
|---|---|
| **Victory** | Shadows pool beneath the circle — a dark gradient spreads outward along the ground (a dark ellipse expanding below the circle). From the shadow, silhouettes rise: two canine shapes (Demon Dogs — simple angular shadow shapes, triangles for ears, lines for legs) flanking the main circle. Then a larger shadow rises behind — Mahoraga's silhouette (large circle with the 8-spoked wheel outline above it), towering over Megumi at 0.3 alpha. The shadows pulse with dark purple energy. Megumi's circle glows with the Ten Shadows technique sigil (a small geometric pattern on its surface). Duration: 3s. |
| **Defeat** | The shadow pool forms but weakly — thin, flickering at the edges. One Demon Dog silhouette begins to rise but dissolves back into the shadow (it was already lost). The shadow pool is invaded by a red-black tint (Sukuna's influence). Megumi's circle fights it — alternating between its normal blue-green color and Sukuna's red-purple, flickering rapidly. The red wins. The circle's color shifts to dull red-purple, and Megumi's own consciousness fades (the circle's unique identifiers — his shadow effects — all extinguish). A trapped, hollow shell remains. Duration: 2s. |

#### 26. Mahito

| Aspect | Description |
|---|---|
| **Victory** | The circle's shape becomes unstable ON PURPOSE — it morphs fluidly between different forms (circle to oval to star to humanoid outline to circle again) demonstrating Idle Transfiguration mastery. Each morph is smooth (interpolated shape vertices). Soul particles (small translucent blue-white wisps) emanate from the surface during each transformation. The final form settles as a circle but with a wide, unsettling grin line (curved line on the lower half, too wide for the face). A hand shape (five radiating lines) reaches out from the circle toward the camera — the touch of transfiguration. Duration: 3s. |
| **Defeat** | Mahito's shape-shifting goes haywire — the circle morphs rapidly and involuntarily between unstable forms (jagged, asymmetric shapes, twitching vertices). He's losing control of his own soul's shape. Each failed form is more distorted than the last. Fear appears: the grin line inverts to a terrified grimace. The circle tries to compress into a small, compact form (his caterpillar cocoon form — a small oblong shape) to evolve, but it's interrupted. The shape freezes mid-transformation, stuck as an ugly asymmetric blob, then begins to absorb inward (Geto's cursed spirit absorption reference — the shape is pulled into a single point off-center). Duration: 2s. |

---

## Implementation Notes

### Animation System Architecture

Each character animation should be implemented as a class or config object with the following interface:

```
CharacterAnimation {
  characterId: string
  playVictory(ctx, circleX, circleY, circleRadius, circleColor, onComplete)
  playDefeat(ctx, circleX, circleY, circleRadius, circleColor, onComplete)
}
```

- `onComplete` callback triggers the existing generic animation pipeline.
- Each frame is driven by `requestAnimationFrame` with an internal elapsed-time tracker.
- Animations should not modify global canvas state permanently — save and restore context.

### Particle System Requirements

Many animations share common particle behaviors. A lightweight shared particle emitter should support:

- **Burst mode:** emit N particles at once (explosions, impacts)
- **Stream mode:** emit N particles per frame over duration (trails, auras)
- **Per-particle properties:** position, velocity, acceleration (gravity), color, alpha (with fade rate), size (with shrink rate), rotation, lifetime
- **Shape options:** circle, triangle, rectangle, line segment

### Screen Effects

Several animations use full-canvas effects. These should be utility functions:

| Effect | Implementation |
|---|---|
| Screen shake | Offset canvas translate by random +-Npx for M frames, then reset |
| Flash (white/black/color) | Draw full-canvas fillRect with color at high alpha for 1-3 frames |
| Tint | Draw full-canvas fillRect with color at low alpha (0.1-0.2), persisting for duration |
| Speed lines | Draw 20-30 thin lines from center outward with radial gradient alpha |

### Performance Considerations

- Cap particle count at 200 per animation to maintain 60fps on mid-range devices.
- Use object pooling for particles rather than creating/destroying objects each frame.
- Animations that use canvas transforms (rotate, scale) should batch and minimize save/restore calls.
- Shadow/glow effects (shadowBlur) are expensive — limit shadowBlur values to max 20px and only apply to key elements, not every particle.

---

## Character-Animation Quick Reference Table

| # | Character | Victory (Key Visual) | Defeat (Key Visual) |
|---|---|---|---|
| 1 | Mantis Blades | Red X-slash with blade trails | Blades stutter, retract, desaturate |
| 2 | Gorilla Arms | Double flex shockwave + ground crack | Mid-flex freeze, electric malfunction |
| 3 | Monowire | 360 wire whip, constrict and snap | Wire goes limp, fizzles out |
| 4 | PLS | Triple projectile fireworks | Misfire, sputtering dud |
| 5 | Sandevistan | Afterimage zigzag + time-dilation tint | Dash stutter, overheat warning |
| 6 | Throwing Weapons | Orbiting knives boomerang into star | Knives spin out of control |
| 7 | Katana | Cross-slash + cherry blossom petals | Slash stops, shatters, wound line |
| 8 | Berserk | Pulsing growth + massive shockwave | Unstable inflation, color drain |
| 9 | Adam Smasher | Mech silhouette + targeting beam | Armor rusts and corrodes, plates fall |
| 10 | Gojo Satoru | Infinity sphere + Hollow Purple beam | Rings crack inward, slash drains color |
| 11 | Yuta & Rika | Dual circles, claws, bond ring | Rika destabilizes and dissolves |
| 12 | Mahoraga | Dharma wheel spin + adaptation colors | Wheel spokes break, circle cracks |
| 13 | Dabura Karaba | Light pillars + levitate + sword up | Pillars corrupt to darkness, close in |
| 14 | Choso | Blood tendrils + brothers' ghosts | Tendrils collapse, tear falls |
| 15 | Toji | Single clean slash, reality gap | Refuses to fall, final lunge |
| 16 | Mechamaru | Mech panels + cannon beam | Panels crack open, sparks and smoke |
| 17 | Kashimo | Lightning eruption from all sides | Electricity fails, final spark dies |
| 18 | Nanami | 7:3 ratio grid + precise strike | Grid misaligns, clock runs out |
| 19 | Ryu | Massive wide beam, sustained fire | Charge fizzles, not enough output |
| 20 | Higuruma | Gavel slam + GUILTY verdict seal | Gavel cracks, verdict reversed |
| 21 | Yuji | Black Flash punch, inverted flash | Takes hits, keeps pushing forward |
| 22 | Naoya | Frame-skip speed triangle + smirk | Form instability, stuck mid-shift |
| 23 | Todo | Boogie Woogie triple swap + thought bubble | Clap fails, lost hand, stands proud |
| 24 | Yuki Tsukumo | Gravity warp + star-map + shockwave | Mass collapse, silent implosion |
| 25 | Megumi Fushiguro | Shadow summons + Mahoraga silhouette | Sukuna's red overtakes his color |
| 26 | Mahito | Fluid shape-shifting + creepy grin | Uncontrolled morphing, absorbed |

---

## Open Questions

1. **Timing tuning:** Should character-specific animations have a brief pause (0.25-0.5s) before the generic animation begins, or should they blend seamlessly?
2. **Boss animations longer?** Boss characters have more complex animations (3s). Should we allow up to 4s for bosses to give the spectacle more room?
3. **Sound design:** Each animation implies specific sound cues (slashes, electricity, impacts). Should sound triggers be embedded in the animation timeline or handled by a separate audio manager listening for animation events?
4. **Reduced motion:** Should there be a user preference to skip character-specific animations and go straight to the generic ones?

---

*End of spec.*
