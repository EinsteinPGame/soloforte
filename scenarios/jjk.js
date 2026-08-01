// Scenario data: jjk  (JJK_NODES)
// Split out of scenario-generator.html on 2026-08-01.
// Edit THIS file to change this scenario — the main file no longer holds node data.
window.SCEN_NODES = window.SCEN_NODES || {};
(function(){
const JJK_NODES = {};

// ---- ARC 1: ENROLLMENT ----

JJK_NODES.jjk_arrival = {text:`The taxi drops you at the base of a wooded hill on the outskirts of Tokyo. No sign. No gate. Just a narrow path cutting between ancient trees draped in shimenawa rope.

Your phone buzzes — a single message from an unknown number: "Walk straight. Do not leave the path. We are watching."

The air feels heavy here. Not humid — heavy, like the atmosphere itself is pressing against your skin. You have felt cursed energy before, but nothing like this. The entire hillside thrums with it, a low vibration in your bones.

Somewhere above, through the canopy, you catch a glimpse of traditional buildings. Tokyo Metropolitan Jujutsu Technical High School. Your new home.

Your hands are shaking. Excitement or fear — you are not sure which.`,scene:'action',mood:'#2a0845',characters:['Gojo'],choices:[{text:'Walk the path with confidence — you earned your place here.',next:'jjk_path_confident',effects:{stats:{cou:1}}},{text:'Extend your senses — feel the cursed energy around you.',next:'jjk_path_sense',effects:{stats:{per:1}}},{text:'Study the surroundings for threats before proceeding.',next:'jjk_path_careful',effects:{stats:{int:1}}}]};

JJK_NODES.jjk_path_confident = {text:`You walk like you belong. Shoulders back, eyes forward. The trees seem to lean in closer as you climb, shadows pooling at their roots in shapes that do not match the branches above.

A twig snaps behind you. Then another. Something is following you — something that moves between the shadows without disturbing them.

You keep walking. Whatever it is, showing fear would be worse than facing it.

At the top of the path, a figure is leaning against the gate. White hair. Blindfold. A grin that belongs on someone who knows a joke the universe has not figured out yet.

"Not bad," says Gojo Satoru, the strongest jujutsu sorcerer alive. "Most first-years run when the second-grade curse starts following them on the path."

He snaps his fingers. Behind you, something shrieks and dissolves.

"Welcome to Jujutsu High."`,scene:'action',mood:'#0044ff',characters:['Gojo'],effects:{relationships:{gojo:2},flags:{confident_arrival:true}},choices:[{text:'"That thing was following me? I thought the air just felt weird."',next:'jjk_meet_gojo'},{text:'"I felt it. I just figured if it wanted to attack, it already would have."',next:'jjk_meet_gojo',effects:{relationships:{gojo:1}}}]};

JJK_NODES.jjk_path_sense = {text:`You close your eyes and let your cursed energy expand outward. The world lights up behind your eyelids — threads of energy woven through every tree, every stone, every shadow.

There. Behind you. A mass of dark energy, formless and hungry, stalking you between the trees. A second-grade cursed spirit, drawn to the barrier around the school like a moth to flame.

You can feel its intent. It wants to feed.

You open your eyes and keep walking, tracking it with your senses. At the gate, a man with white hair and a blindfold is waiting.

"Oh?" Gojo Satoru tilts his head. "You sensed it. Most first-years do not pick up on Stalker-kun until it is breathing down their neck."

He flicks his wrist casually. The curse behind you detonates like a balloon.

"You have good perception. We can work with that."`,scene:'action',mood:'#0044ff',characters:['Gojo'],effects:{relationships:{gojo:2},flags:{sensed_curse:true}},choices:[{text:'"How many students does that thing eat before someone notices?"',next:'jjk_meet_gojo'},{text:'"I have always been sensitive to cursed energy. It is why I am here."',next:'jjk_meet_gojo',effects:{stats:{per:1}}}]};

JJK_NODES.jjk_path_careful = {text:`You catalog your environment methodically. Escape routes: two visible, one through the underbrush to the east. Threats: the shadows between the trees are too dark for the time of day. Energy signatures: at least one hostile entity, low-grade, tracking you from the treeline.

You adjust your pace to control the engagement distance, keeping the curse at a range where you can react but it cannot strike. Classic threat management.

At the gate, a white-haired man lowers his blindfold just enough to show one impossibly blue eye.

"A strategist," says Gojo Satoru. "You mapped the whole path, did not you? Exits, threats, terrain." He grins. "Nanami is going to love you."

The curse behind you evaporates without him even looking at it.`,scene:'action',mood:'#0044ff',characters:['Gojo'],effects:{relationships:{gojo:1},relationships:{nanami:1},flags:{tactical_arrival:true}},choices:[{text:'"I like to know what I am walking into."',next:'jjk_meet_gojo'},{text:'"Is every entrance exam this lethal?"',next:'jjk_meet_gojo',effects:{relationships:{gojo:1}}}]};

JJK_NODES.jjk_meet_gojo = {text:`Gojo leads you through the campus with the energy of a man who has never taken anything seriously and never needed to. The buildings are traditional Japanese architecture — wooden halls, stone gardens, training grounds — but you can feel the barriers woven into every surface. This place is a fortress disguised as a school.

"So here is the deal," Gojo says, hands in his pockets. "You are one of four new first-years. The others arrived yesterday. Well — one of them arrived. The other two are still arguing about room assignments."

He stops at a courtyard. Three people are there.

A boy with pink hair and an easy grin, doing push-ups on the grass — Yuji Itadori. A dark-haired boy with sharp eyes, sitting cross-legged and reading — Megumi Fushiguro. And a girl with orange hair, examining a set of nails with intense focus — Nobara Kugisaki.

"First-years!" Gojo announces. "Meet your new classmate."

Three pairs of eyes turn to you.`,scene:'action',mood:'#2a0845',characters:['Gojo','Yuji','Megumi','Nobara'],choices:[{text:'Walk up to Yuji first — he looks the friendliest.',next:'jjk_bond_yuji',effects:{relationships:{yuji:2}}},{text:'Approach Megumi — the quiet ones usually know the most.',next:'jjk_bond_megumi',effects:{relationships:{megumi:2}}},{text:'Head to Nobara — she has the most interesting energy.',next:'jjk_bond_nobara',effects:{relationships:{nobara:2}}},{text:'Nobara channels everything into one devastating resonance.',next:'jjk_nobara_resonance'}]};

JJK_NODES.jjk_bond_yuji = {text:`Yuji springs up from his push-ups like gravity is optional. "Hey! Another first-year! I am Yuji Itadori!" He grabs your hand and shakes it with enough force to rattle your teeth.

"Man, this place is wild, right? Yesterday Gojo-sensei showed us the cursed corpse storage and I almost threw up. But in a cool way."

He is radiating warmth and cursed energy in almost equal measure. There is something strange about his energy signature — a depth to it, like an ocean with something vast sleeping at the bottom. But his smile is genuine and his enthusiasm is infectious.

"What kind of cursed technique do you have? Mine is — well, Gojo-sensei says I am still figuring it out. But I am really strong! Like, abnormally strong. Watch—"

He flicks a pebble across the courtyard. It punches a hole clean through a wooden post fifty meters away.

Megumi sighs audibly.`,scene:'action',mood:'#2a0845',characters:['Yuji','Megumi','Nobara'],effects:{flags:{bonded_yuji:true}},choices:[{text:'"That is terrifying and amazing. Show me more."',next:'jjk_training_intro',effects:{relationships:{yuji:2}}},{text:'"Impressive. But raw power without control is dangerous."',next:'jjk_training_intro',effects:{relationships:{megumi:1}}},{text:'"You just destroyed school property on day one. I respect that."',next:'jjk_training_intro',effects:{relationships:{yuji:1},relationships:{nobara:1}}}]};

JJK_NODES.jjk_bond_megumi = {text:`Megumi looks up from his book with an expression that says he has already evaluated you and filed the report. "Fushiguro Megumi," he says. No handshake offered.

"Gojo-sensei probably gave you some dramatic speech about destiny or potential. Ignore most of it. What matters here is whether you can survive missions without getting yourself or your teammates killed."

He closes the book — a bestiary of cursed spirits, you notice. Heavily annotated in precise handwriting.

"What is your technique?"

There is no warmth in the question, but no hostility either. Just professional curiosity. You can sense his cursed energy — controlled, layered, with the echo of something ancient in it. Shikigami. Ten Shadows.

Behind you, Yuji shouts something about arm wrestling.`,scene:'action',mood:'#2a0845',characters:['Megumi','Yuji','Nobara'],effects:{flags:{bonded_megumi:true}},choices:[{text:'Describe your technique honestly and ask about his.',next:'jjk_training_intro',effects:{relationships:{megumi:2}}},{text:'"You are testing me. I get it. Ask what you really want to know."',next:'jjk_training_intro',effects:{relationships:{megumi:1},stats:{per:1}}},{text:'"Less talking, more sparring. Show me what you can do."',next:'jjk_training_intro',effects:{relationships:{megumi:1},stats:{cou:1}}}]};

JJK_NODES.jjk_bond_nobara = {text:`Nobara does not look up from her nails — actual nails, steel carpenter nails, each one inscribed with tiny cursed energy patterns. "Kugisaki Nobara," she says, holding one up to the light. "If you are boring, I am not interested. Tokyo was supposed to be exciting and so far this school is in the middle of nowhere."

She finally looks at you, sharp eyes making a snap judgment. Whatever she sees, it passes. "At least you do not look boring. The pink-haired one is sweet but exhausting, and Fushiguro acts like he is forty years old."

She holds up a hammer — a heavy, elegant thing wrapped in cursed energy. "Resonance. I drive nails into things and make them explode from the inside. Want to see?"

Without waiting for an answer, she flicks a nail at a training dummy across the courtyard. It embeds in the wood. She swings the hammer against a matching nail in her other hand.

The dummy detonates.

"Questions?"`,scene:'action',mood:'#2a0845',characters:['Nobara','Yuji','Megumi'],effects:{flags:{bonded_nobara:true}},choices:[{text:'"That is the most elegant destruction I have ever seen."',next:'jjk_training_intro',effects:{relationships:{nobara:2}}},{text:'"Effective. What is the range limit?"',next:'jjk_training_intro',effects:{relationships:{nobara:1},stats:{int:1}}},{text:'"Not boring enough for you?"',next:'jjk_training_intro',effects:{relationships:{nobara:1},stats:{cha:1}}}]};

JJK_NODES.jjk_training_intro = {text:`Gojo claps his hands. "Alright! First lesson starts now. And by lesson I mean I am going to throw you into a training exercise that most second-years fail."

He leads the four of you to a forested area behind the main building. The trees here are scarred with old curse damage — splintered trunks, scorch marks, patches where nothing grows.

"Somewhere in this forest, I have placed a cursed object. It is attracting low-level cursed spirits like flies. Your job: find it and bring it back. As a team."

He holds up a finger. "One rule. If any of you try to solo it, I will personally make your life very educational for the next month. This is about teamwork."

Megumi is already analyzing the treeline. Yuji is cracking his knuckles. Nobara is loading nails.

"Oh," Gojo adds. "You have thirty minutes. Starting ten minutes ago."`,scene:'action',mood:'#2a0845',characters:['Gojo','Yuji','Megumi','Nobara'],choices:[{text:'Take the lead — propose a strategy to the group.',next:'jjk_training_lead',check:{stat:'int',dc:10}},{text:'Spread your senses — try to locate the cursed object.',next:'jjk_training_sense',check:{stat:'per',dc:10}},{text:'Rush in with Yuji — speed over strategy.',next:'jjk_training_rush',check:{stat:'cou',dc:9}}]};

JJK_NODES.jjk_training_lead = {text:`You lay it out quickly. "Megumi, your shikigami can cover ground faster than we can — send your Divine Dogs to scout the perimeter. Nobara, you set up a defensive position at the forest edge in case anything tries to flank us. Yuji and I will push through the center."

Megumi nods — the first time he has looked genuinely approving. "That is actually a solid plan."

Even Nobara looks impressed. "Someone who can think. Finally."

The team moves. Megumi's Divine Dogs — one white, one black — streak into the undergrowth. Within minutes, the black dog howls. It found something.

You follow the sound deeper into the forest, where the cursed energy grows thick enough to taste.`,scene:'action',mood:'#1a0a2e',characters:['Yuji','Megumi','Nobara'],effects:{relationships:{megumi:2},relationships:{nobara:1},stats:{int:1},flags:{led_training:true}},choices:[{text:'Follow the signal carefully — check for traps.',next:'jjk_training_curse'},{text:'Move fast before the spirits swarm the object.',next:'jjk_training_curse'}]};

JJK_NODES.jjk_training_sense = {text:`You plant your feet and close your eyes. The forest lights up in your mind — threads of cursed energy running through the earth like roots, pooling in dark knots where spirits have nested.

There. Northeast, maybe two hundred meters in. A bright, pulsing signature — the cursed object — surrounded by at least six lesser spirits feeding on its energy.

"Found it," you say, pointing. "Two hundred meters, northeast. Six spirits guarding it, maybe more."

Yuji whistles. "You can sense all that? That is awesome!"

Megumi narrows his eyes. "Six spirits concentrated in one area. They will be territorial. We need to draw them out rather than fighting in a cluster."`,scene:'action',mood:'#1a0a2e',characters:['Yuji','Megumi','Nobara'],effects:{relationships:{yuji:1},stats:{per:1},flags:{sensed_training:true}},choices:[{text:'Suggest a plan to lure the spirits out one by one.',next:'jjk_training_curse'},{text:'Point the team toward the target and move.',next:'jjk_training_curse'}]};

JJK_NODES.jjk_training_rush = {text:`"No time to plan — let us go!" You and Yuji charge into the forest side by side. He matches your pace effortlessly, grinning like this is the best day of his life.

Behind you, Nobara swears and follows. Megumi mutters something about "reckless idiots" but his Divine Dogs are already flanking your path.

You crash through the undergrowth and nearly run straight into a cluster of cursed spirits — ugly, twisted things made of dark energy and human fear. They turn toward you with mouths that should not exist.

"THERE WE GO!" Yuji yells, and punches the nearest one so hard it disintegrates.`,scene:'action',mood:'#4a0000',characters:['Yuji','Megumi','Nobara'],effects:{relationships:{yuji:2},stats:{cou:1},flags:{rushed_training:true}},choices:[{text:'Fight alongside Yuji — overwhelm them with aggression.',next:'jjk_training_curse',check:{stat:'str',dc:9}},{text:'Fall back and let the team regroup.',next:'jjk_training_curse'}]};

JJK_NODES.jjk_training_curse = {text:`The cursed spirits swarm. They are low-grade — third and fourth class — but there are a lot of them, and they are between you and the cursed object sitting on a stone pedestal in a clearing.

Yuji is a wrecking ball. He moves through the spirits with raw physical power that defies logic, each punch backed by an instinctive pulse of cursed energy. Megumi summons his Divine Dogs and Nue, the owl shikigami, creating a perimeter. Nobara drives nails into the spirits from range, each one detonating with surgical precision.

The clearing fills with the black smoke of dissolving curses.

But the last spirit is different. Bigger. A second-grade, maybe — humanoid, with too many arms and a face like melted wax. It grabs the cursed object and howls, the sound rattling your teeth.`,scene:'action',mood:'#4a0000',characters:['Yuji','Megumi','Nobara'],choices:[{text:'Use your cursed technique to attack it directly.',next:'jjk_training_boss',check:{stat:'str',dc:12}},{text:'Coordinate with the team for a combined attack.',next:'jjk_training_team',check:{stat:'int',dc:10}},{text:'Distract it so someone else can grab the object.',next:'jjk_training_distract',check:{stat:'cou',dc:11}}]};

JJK_NODES.jjk_training_boss = {text:`You channel your cursed energy and hit the spirit with everything you have. The impact sends it staggering — but it does not go down. It lashes out with four arms simultaneously, forcing you to dodge and weave.

Yuji appears at your side. "Together?" You nod.

You hit it high. He hits it low. The combined force tears the spirit apart. The cursed object clatters to the ground.

Gojo is sitting in a tree above, eating a crepe. "Not bad. You have raw power but your output control needs work. B-minus."

He jumps down. "But you pass."`,scene:'action',mood:'#0044ff',characters:['Gojo','Yuji'],effects:{stats:{str:1},flags:{training_complete:true}},choices:[{text:'"B-minus? That curse was second-grade at least."',next:'jjk_day_off'},{text:'Accept the grade and ask how to improve.',next:'jjk_day_off',effects:{relationships:{gojo:1}}},{text:'Investigate the Mechamaru intelligence leak.',next:'jjk_mechamaru_betrayal'}]};

JJK_NODES.jjk_training_team = {text:`"Nobara — nail it from the left, drive it toward Megumi! Megumi — Divine Dogs on its legs! Yuji — when it stumbles, end it!"

The team moves like a single organism. Nobara's nails drive the spirit sideways. Megumi's dogs snap at its legs, tangling it. And Yuji comes in like a freight train, one devastating punch shattering the spirit into fragments.

The cursed object lands at your feet.

Gojo drops from a branch overhead, applauding. "Now THAT is what I wanted to see. Coordination. Tactics. Beautiful." He beams. "A-minus."

"Why minus?" Nobara demands.

"Because I do not give A-pluses. It would go to my students' heads."`,scene:'action',mood:'#0044ff',characters:['Gojo','Yuji','Megumi','Nobara'],effects:{stats:{int:1},relationships:{megumi:1},relationships:{nobara:1},flags:{training_complete:true}},choices:[{text:'Celebrate with the team.',next:'jjk_day_off',effects:{relationships:{yuji:1}}},{text:'Ask Gojo what a real mission looks like.',next:'jjk_day_off',effects:{relationships:{gojo:1}}}]};

JJK_NODES.jjk_training_distract = {text:`You sprint directly at the spirit, screaming and flaring your cursed energy as bright as you can. The spirit turns all its attention to you — every arm reaching, every twisted feature focused on the threat.

It hits you. Hard. You go flying into a tree and feel something crack. Pain floods your vision.

But behind the spirit, Megumi's Divine Dogs drag the cursed object away. Yuji catches the spirit from behind and demolishes it with a spinning punch.

Nobara is at your side in seconds. "You absolute idiot. That was either the bravest or stupidest thing I have ever seen."

Gojo appears, looking thoughtful. "Brave. Definitely brave. Stupid too, but brave." He heals your ribs with a casual application of reverse cursed technique. "B-plus. Points for sacrifice, minus for getting hit."`,scene:'action',mood:'#0044ff',characters:['Gojo','Nobara','Yuji','Megumi'],effects:{stats:{cou:1},relationships:{nobara:2},flags:{training_complete:true,got_injured:true}},choices:[{text:'"Worth it. Did we pass?"',next:'jjk_day_off'},{text:'"I need to learn to dodge better."',next:'jjk_day_off',effects:{stats:{per:1}}}]};

JJK_NODES.jjk_day_off = {text:`A rare day off. Nobara insists on dragging everyone to Harajuku. "If I am going to risk my life fighting curses, I am at least going to look good doing it."

The four of you wander through crowded streets, eating crepes and pretending to be normal teenagers. Yuji challenges strangers to arm-wrestling contests and wins every time. Megumi reads a book while walking and somehow never bumps into anyone.

For a few hours, the cursed energy, the monsters, the danger — it all fades. You are just kids.

Then you feel it. A spike of cursed energy — brief, massive, and terrifyingly controlled. It comes from an alley two blocks away and vanishes as quickly as it appeared.

Megumi goes rigid. His face is white. "That energy... no. It cannot be."

"What?" Yuji asks.

"That felt like a Zenin. But not just any Zenin."`,scene:'action',mood:'#2a0845',characters:['Yuji','Megumi','Nobara'],choices:[{text:'Investigate the energy spike.',next:'jjk_toji_glimpse',check:{stat:'per',dc:12}},{text:'Let it go — enjoy the day off.',next:'jjk_first_mission_briefing',effects:{relationships:{nobara:1}}},{text:'"Megumi, who are you thinking of?"',next:'jjk_toji_glimpse',effects:{relationships:{megumi:1}}},{text:'Todo mentioned he wanted to train with you again. His philosophy might be what you need right now.',next:'jjk_todo_friendship',effects:{stats:{cha:1},relationships:{todo:1}}}]};

JJK_NODES.jjk_toji_glimpse = {text:`You find nothing in the alley. But on the wall, fresh scratches — claw marks from something sharp, possibly a cursed tool. And a lingering scent of blood.

Megumi stares at the marks. "My father," he says quietly. "Toji Fushiguro. He was an assassin — a sorcerer killer with zero cursed energy. He used cursed tools instead. He nearly killed Gojo once."

"Nearly killed GOJO?" Yuji asks, incredulous.

"He was the only person who ever came close. He died years ago. At least... that is what everyone says." Megumi touches the wall. "But this technique of marking territory — this is his pattern."

Whatever was here is gone. But Megumi is shaken. And you file this information away — Toji Fushiguro, the sorcerer killer, might still be alive.`,scene:'action',mood:'#1a0a2e',characters:['Megumi','Yuji'],effects:{flags:{toji_hint:true},relationships:{megumi:2}},choices:[{text:'"We should tell Gojo-sensei."',next:'jjk_first_mission_briefing',effects:{relationships:{gojo:1}}},{text:'"If your father is alive, he might be an ally or a threat."',next:'jjk_first_mission_briefing',effects:{stats:{int:1}}}]};

JJK_NODES.jjk_power_discovery = {text:`Late one night, training alone in the courtyard, something clicks. Your cursed energy — which has always felt like raw static, unformed and chaotic — suddenly crystallizes. You feel its true shape for the first time.

Every sorcerer has an innate technique, born from the shape of their soul. Yours has been dormant, waiting for the right moment, the right emotional catalyst.

And tonight — thinking about Junpei, about the detention center, about everyone you could not protect — it awakens.

The courtyard erupts with your power. Gojo appears on the roof above, arms crossed, grinning. "There it is. I was wondering when you would figure it out."

He jumps down. "Your technique is unique. Most sorcerers get one trick. You got something rarer — an adaptive technique. It will grow with you, change with you. The stronger your conviction, the stronger the output."

He puts his blindfold back in place. "Now the real training begins."`,scene:'action',mood:'#0044ff',characters:['Gojo'],effects:{stats:{str:1,per:1},relationships:{gojo:1},flags:{technique_awakened:true}},choices:[{text:'"Teach me everything."',next:'jjk_nanami_lesson',effects:{stats:{cou:1}}},{text:'"Why now? What triggered it?"',next:'jjk_nanami_lesson',effects:{stats:{int:1}}},{text:'A blood-wielding attacker materializes — then freezes mid-strike.',next:'jjk_choso_brotherhood'}]};

JJK_NODES.jjk_todo_training = {text:`Before Shibuya, an unexpected visitor arrives at Jujutsu High. Aoi Todo — the bizarre, brilliant third-year from Kyoto — walks onto campus like he owns it, clapping his massive hands.

"WHERE IS MY BEST FRIEND?" he bellows.

He means you, apparently. You have met exactly once, at a joint training event where he asked you what type of woman you liked. Your answer somehow satisfied him.

"You!" He points at you with the intensity of a man declaring war. "We train. Now. The Shibuya operation requires warriors, not students."

Todo's training is insane. He forces you to fight him at full power while he lectures about cursed energy flow, technique refinement, and the superiority of tall women with big butts.

Despite everything, he is an incredible teacher. His Boogie Woogie technique — switching positions with anything containing cursed energy via a clap — is disorienting but brilliant.`,scene:'action',mood:'#2a0845',characters:['Todo'],effects:{relationships:{todo:2}},choices:[{text:'Give it everything. Train with Todo until you drop.',next:'jjk_todo_bond',check:{stat:'str',dc:11}},{text:'Focus on learning his tactical approach.',next:'jjk_todo_bond',check:{stat:'int',dc:10}},{text:'"Todo, why do you call me your best friend?"',next:'jjk_todo_bond',effects:{stats:{cha:1}}}]};

JJK_NODES.jjk_todo_bond = {text:`After hours of brutal sparring, Todo sits next to you on the training ground, both of you battered and breathing hard.

"You know why I chose you as my best friend?" He stares at the sky. "Because when I asked about your type, you did not give a shallow answer. You gave an answer with SUBSTANCE. That tells me everything about a person."

He claps your shoulder hard enough to bruise. "At Shibuya, stay close to me. Boogie Woogie works best with a partner who can read my rhythm. You will be that partner."

He stands, dusts himself off, and walks away.

"Also," he calls back, "tell Itadori his taste in women is ACCEPTABLE. He answered correctly too."

Yuji, hiding behind a pillar, pumps his fist in victory.`,scene:'action',mood:'#2a0845',characters:['Todo','Yuji'],effects:{flags:{todo_trained:true},relationships:{todo:2},stats:{str:1}},choices:[{text:'You have a strange feeling Todo will be important at Shibuya.',next:'jjk_shibuya_prep'},{text:'Thank Todo and prepare for what is coming.',next:'jjk_shibuya_prep'}]};

JJK_NODES.jjk_first_mission_briefing = {text:`Two weeks pass. Training is brutal but you are improving fast. Gojo teaches in bursts of brilliance between long stretches of being completely absent, leaving you and the other first-years to figure things out through sparring and study.

Then, one morning, Gojo walks into class actually looking serious. The room goes quiet.

"Mission. A detention center in West Tokyo is experiencing paranormal activity. People are dying — inmates and guards. The higher-ups are calling it a cursed womb. We do not know what grade spirit is inside, but the building has been evacuated."

He looks at each of you. "This is real. Not training. People have already died. I will be nearby, but this is your mission."

Megumi stiffens. Yuji looks excited and terrified in equal measure. Nobara checks her nails.

"One more thing," Gojo adds. "There are reports of a Special Grade cursed object somewhere in the building. A finger. Ryomen Sukuna's finger."

The room temperature drops.`,scene:'action',mood:'#1a0a2e',characters:['Gojo','Yuji','Megumi','Nobara'],choices:[{text:'"What happens if the curse has already absorbed the finger?"',next:'jjk_finger_briefing',effects:{stats:{int:1}}},{text:'"Sukuna? THE Sukuna? And you are sending first-years?"',next:'jjk_finger_briefing',effects:{relationships:{gojo:1}}},{text:'"Let us go. People are dying while we talk."',next:'jjk_finger_briefing',effects:{stats:{cou:1},relationships:{yuji:1}}}]};

JJK_NODES.jjk_finger_briefing = {text:`Gojo answers questions with unusual patience. "Sukuna's fingers are indestructible. They attract cursed spirits and amplify their power. If a spirit has absorbed this finger, it could be Special Grade — far beyond what first-years should face."

"Then why send us?" Megumi asks.

"Because the finger needs to be recovered, you need field experience, and—" Gojo grins, "—I will be right outside. Think of it as a learning experience with safety rails."

"Safety rails that involve a potentially Special Grade curse," Nobara mutters.

The van drops you at the detention center an hour later. The building is massive, brutalist concrete, surrounded by a police cordon. The windows are dark. The cursed energy pouring from it is like standing next to an open furnace.

Megumi turns to you. "We should have a plan before going in."`,scene:'action',mood:'#4a0000',characters:['Yuji','Megumi','Nobara'],choices:[{text:'Enter through the front — move as a group, clear room by room.',next:'jjk_detention_front'},{text:'Split up to cover more ground — find the finger fast.',next:'jjk_detention_split'},{text:'Scout the building exterior first for weak points.',next:'jjk_detention_scout',check:{stat:'per',dc:10}}]};

JJK_NODES.jjk_detention_front = {text:`You push through the main entrance together. The lobby is wrecked — overturned furniture, dark stains on the floor, emergency lights casting everything in bloody red. The cursed energy is so thick you can barely breathe.

"Stay close," Megumi whispers. His shikigami materialize at his sides, ears flat, growling at the darkness.

You clear the first floor room by room. Empty cells. Shattered glass. In the cafeteria, you find the first body — a guard, face frozen in an expression of absolute terror.

Then you hear it. A wet, dragging sound from the floor above. Something massive moving through the corridors.

And something else — a faint pulse of power, ancient and overwhelming, coming from the basement. The finger.`,scene:'action',mood:'#4a0000',characters:['Yuji','Megumi','Nobara'],effects:{flags:{entered_front:true}},choices:[{text:'Go up — confront whatever is making that sound.',next:'jjk_finger_bearer',check:{stat:'cou',dc:11}},{text:'Go down — secure the finger before the curse finds it.',next:'jjk_finger_race'},{text:'Set a trap here and draw the curse to you.',next:'jjk_finger_trap',check:{stat:'int',dc:12}}]};

JJK_NODES.jjk_detention_split = {text:`"Megumi and Nobara, take the upper floors. Yuji and I will check the basement — that is where the cursed energy is strongest."

Megumi hesitates but nods. "If you find anything above second-grade, retreat immediately. Do not engage."

You and Yuji descend into the darkness below the detention center. The stairs are slick with something you do not want to identify. Yuji's cursed energy flickers beside you, unstable but powerful.

"Hey," Yuji whispers. "I have a weird feeling. Like something down here is... calling to me."

He is right. The Sukuna finger's energy is reaching out like a beacon, and Yuji is responding to it like a tuning fork.`,scene:'action',mood:'#4a0000',characters:['Yuji','Megumi','Nobara'],effects:{flags:{split_up:true}},choices:[{text:'"Stay focused. Do not listen to it."',next:'jjk_finger_race',effects:{relationships:{yuji:1}}},{text:'"What does it feel like? Describe it."',next:'jjk_finger_race',effects:{stats:{per:1}}},{text:'"If it is calling you, maybe that is how we find it faster."',next:'jjk_finger_race',effects:{flags:{encouraged_yuji:true}}}]};

JJK_NODES.jjk_detention_scout = {text:`You circle the building, mapping exits and structural weak points. The cursed energy concentrates in two areas — the basement, where something ancient pulses like a heartbeat, and the third floor, where something alive and hungry is moving.

"Two targets," you report. "The finger is in the basement. The curse that has been killing people is on the third floor. If we are smart, we secure the finger before the curse realizes we are here."

Megumi looks at you with something approaching respect. "Agreed. The curse might be feeding on the finger's residual energy. If we remove it, the curse weakens."

Nobara cracks her knuckles. "Finally, someone with a brain."`,scene:'action',mood:'#1a0a2e',characters:['Yuji','Megumi','Nobara'],effects:{stats:{per:1},relationships:{megumi:1},flags:{scouted_building:true}},choices:[{text:'Head for the basement — secure the finger.',next:'jjk_finger_race'},{text:'Hit the third floor first — eliminate the threat.',next:'jjk_finger_bearer'}]};

JJK_NODES.jjk_finger_race = {text:`The basement is a labyrinth of maintenance tunnels and storage rooms. The finger's energy gets stronger with every step — a pulsing, nauseating wave of power that makes your vision swim.

You find it in a collapsed storage room, sitting on a pile of rubble like it was placed there deliberately. A mummified finger, dark as charcoal, radiating cursed energy so dense the air around it shimmers.

Yuji reaches for it instinctively.

"DON'T—" Megumi starts.

But something else reaches it first. A massive shape drops from the ceiling — the Finger Bearer, a cursed spirit that has been incubating around the finger. It is enormous, pale, with a mouth that splits its entire torso.

It grabs the finger and swallows it whole. The power spike nearly knocks you off your feet.

It is Special Grade now.`,scene:'action',mood:'#4a0000',characters:['Yuji','Megumi','Nobara'],effects:{flags:{finger_bearer_powered:true}},choices:[{text:'Fight it — you have no choice.',next:'jjk_finger_bearer'},{text:'Grab Yuji and retreat — this is beyond you.',next:'jjk_retreat_decision',check:{stat:'int',dc:10}},{text:'Try to force it to regurgitate the finger.',next:'jjk_finger_bearer',check:{stat:'str',dc:13}}]};

JJK_NODES.jjk_finger_bearer = {text:`The Finger Bearer is a nightmare given form. Special Grade — the kind of curse that can level a city block. It moves with terrifying speed for something so large, each strike cratering concrete.

Megumi summons Nue and both Divine Dogs. Nobara drives nails from range. You fight with everything you have. But it is not enough. The curse shrugs off your attacks like raindrops.

Megumi goes down — slammed into a wall hard enough to crack it. Nobara's arm is broken. You are bleeding from a dozen wounds.

Yuji stands between you and the curse, fists raised, trembling. "I can feel it," he whispers. "The finger. Inside that thing. It is... it is like it WANTS me to take it."

He looks at you. "If I eat one of Sukuna's fingers, I might be able to beat this thing. But Sukuna — the King of Curses — would be inside me."

Behind him, the Finger Bearer roars.`,scene:'action',mood:'#4a0000',characters:['Yuji','Megumi','Nobara'],choices:[{text:'"Do it, Yuji. We die if you do not."',next:'jjk_yuji_eats_finger',effects:{relationships:{yuji:2},flags:{supported_yuji:true}}},{text:'"No! There has to be another way. I will hold it off."',next:'jjk_hold_the_line',check:{stat:'str',dc:14}},{text:'"Wait — let me try something first."',next:'jjk_desperate_plan',check:{stat:'int',dc:13}}]};

JJK_NODES.jjk_yuji_eats_finger = {text:`Yuji tears the finger from the Finger Bearer's guts with his bare hands — reaching into its mouth and PULLING. The curse screams. Yuji screams.

And then he eats it.

The world stops. Yuji's body convulses. Dark lines spread across his face — tattoos that were not there before. When he opens his eyes, they are not his.

"Ah," says a voice that is not Yuji's. Ancient. Amused. Terrifying. "A vessel. Finally."

Sukuna — the King of Curses — looks through Yuji's eyes and smiles. He glances at the Finger Bearer and it simply... ceases to exist. Erased with a casual flick of power that makes your bones vibrate.

Then Yuji's face twists. He fights for control, veins bulging, screaming internally. His hands shake.

And Yuji comes back. Panting. Horrified at what is now living inside him.

"What... what did I just do?"`,scene:'action',mood:'#4a0000',characters:['Yuji','Sukuna'],effects:{flags:{yuji_ate_finger:true,sukuna_awakened:true},relationships:{yuji:1}},choices:[{text:'"You saved us. That is what matters."',next:'jjk_aftermath_finger',effects:{relationships:{yuji:2}}},{text:'"You let the King of Curses inside your body. We need to talk to Gojo."',next:'jjk_aftermath_finger',effects:{relationships:{gojo:1}}},{text:'Check on Megumi and Nobara first.',next:'jjk_aftermath_finger',effects:{relationships:{megumi:1},relationships:{nobara:1}}}]};

JJK_NODES.jjk_hold_the_line = {text:`You throw yourself at the Finger Bearer. Every ounce of cursed energy, every technique you know, everything you have. You buy seconds. Precious, agonizing seconds.

The curse hits you and the world goes white with pain. You feel ribs break. You taste blood. But you get back up. Again. And again.

Yuji watches you get destroyed, and something snaps inside him. He grabs the finger from the rubble — the curse dropped it when you hit its jaw — and swallows it before anyone can stop him.

Sukuna's power detonates. The Finger Bearer dissolves. Yuji stands there with ancient tattoos spreading across his skin, catching your broken body before you hit the ground.

"Why?" Yuji asks, his voice and not-his-voice overlapping. "Why did you do that?"`,scene:'action',mood:'#4a0000',characters:['Yuji','Sukuna'],effects:{flags:{yuji_ate_finger:true,sukuna_awakened:true,held_the_line:true},stats:{cou:2},relationships:{yuji:3}},choices:[{text:'"Because that is what teammates do."',next:'jjk_aftermath_finger',effects:{relationships:{yuji:2}}},{text:'You cannot answer. You are barely conscious.',next:'jjk_aftermath_finger'}]};

JJK_NODES.jjk_desperate_plan = {text:`Your mind races. The Finger Bearer is Special Grade but it is newly formed — unstable. The finger it absorbed is fighting its body like a parasite. If you can destabilize it further...

"Megumi! Domain Expansion — even a partial one! Flood it with conflicting cursed energy!"

Megumi stares at you. "I cannot maintain a Domain yet—"

"You do not need to maintain it. Just OPEN it for one second. The clash of energies will tear the curse apart from the inside."

Megumi closes his eyes. His hands form a seal. And for one blinding instant, the shadow of an incomplete Domain flickers into existence — Chimera Shadow Garden, raw and unfinished but POWERFUL.

The Finger Bearer shrieks as the conflicting energies rip through it. It destabilizes, dropping the finger.

Yuji catches it. He looks at it. He looks at you.

He swallows it anyway.`,scene:'action',mood:'#1a0a2e',characters:['Yuji','Megumi','Sukuna'],effects:{flags:{yuji_ate_finger:true,sukuna_awakened:true,desperate_plan:true},stats:{int:2},relationships:{megumi:2}},choices:[{text:'"Yuji, NO—" But it is too late.',next:'jjk_aftermath_finger'},{text:'You planned for this. The finger was always going to find a vessel.',next:'jjk_aftermath_finger',effects:{flags:{anticipated_vessel:true}}}]};

JJK_NODES.jjk_retreat_decision = {text:`"FALL BACK! This is Special Grade — we are not equipped for this!"

You grab Yuji's arm and pull. He resists for a moment, eyes locked on the Finger Bearer, drawn to the finger inside it. Then his survival instinct kicks in and he runs.

The four of you burst out of the detention center. Gojo is waiting, leaning against a vending machine.

"Special Grade?" he asks, already knowing.

"It absorbed the finger," you pant. "We could not—"

Gojo pushes off the wall. "Stay here." He walks into the building alone. Thirty seconds later, the entire structure shakes. A flash of blue light. Silence.

He walks out carrying a mummified finger between two fingers, the Finger Bearer atomized behind him.

"This," he says, holding up the finger, "is one of Sukuna's twenty fingers. The question is what to do with it."

He looks at Yuji. Yuji looks at the finger. Something passes between them.`,scene:'action',mood:'#0044ff',characters:['Gojo','Yuji','Megumi','Nobara'],effects:{flags:{retreated:true,gojo_killed_bearer:true}},choices:[{text:'"Seal it. Lock it away. No one should touch that thing."',next:'jjk_aftermath_sealed',effects:{flags:{finger_sealed:true}}},{text:'"Yuji — I saw how you reacted to it. What are you feeling?"',next:'jjk_aftermath_yuji_choice',effects:{relationships:{yuji:1}}},{text:'"Gojo-sensei, what would happen if someone ate it?"',next:'jjk_aftermath_yuji_choice',effects:{relationships:{gojo:1}}}]};

JJK_NODES.jjk_aftermath_sealed = {text:`The finger is sealed in a special container and locked in Jujutsu High's vault. Gojo handles it personally, his expression unreadable.

"You made the safe choice," he tells you later. "Most people would have. But Sukuna's fingers have a way of finding vessels whether we want them to or not."

The next few weeks are tense. The higher-ups are furious about the detention center incident. Yuji is quiet — haunted by how drawn he was to the finger. Megumi trains twice as hard. Nobara pretends nothing happened.

But you notice things. Yuji's cursed energy fluctuating at night. Strange dreams reported by students across the dorm. The sealed finger pulsing in its container, reaching out.

Then one night, Yuji comes to your room. His eyes are red. "It is calling me. Even sealed, I can hear it. And I think... I think I am the only one who can contain it."`,scene:'action',mood:'#2a0845',characters:['Yuji','Gojo'],effects:{relationships:{yuji:1}},choices:[{text:'"Talk to Gojo-sensei first. Do not do anything alone."',next:'jjk_arc2_transition',effects:{flags:{advised_caution:true},relationships:{gojo:1}}},{text:'"If you are meant to be its vessel, then you need to be strong enough to control it."',next:'jjk_arc2_transition',effects:{relationships:{yuji:2},flags:{supported_vessel:true}}},{text:'"Then we train until you can resist it. Together."',next:'jjk_arc2_transition',effects:{relationships:{yuji:2},stats:{cou:1}}}]};

JJK_NODES.jjk_aftermath_finger = {text:`Gojo arrives at the detention center in seconds. He takes one look at Yuji — the tattoos, the flickering second presence behind his eyes — and his playful demeanor vanishes entirely.

"Sukuna," he says quietly.

For one instant, Yuji's face changes. Sukuna's grin appears. "The Six Eyes and Limitless. Gojo Satoru. I have been sleeping a long time."

Gojo does not flinch. "Go back to sleep."

The tattoos fade. Yuji collapses. When he wakes, he is himself again — confused, terrified, but alive. The King of Curses is dormant inside him.

"Here is the situation," Gojo tells you all later, back at school. "The higher-ups will want Yuji executed. A vessel for Sukuna is the most dangerous thing in the jujutsu world. I am going to fight for him — but I need time."

He looks at you. "And I need allies."`,scene:'action',mood:'#2a0845',characters:['Gojo','Yuji','Sukuna'],choices:[{text:'"I will stand with Yuji. He is my teammate."',next:'jjk_arc2_transition',effects:{relationships:{yuji:2},relationships:{gojo:1},flags:{defended_yuji:true}}},{text:'"What is the alternative? Execution?"',next:'jjk_arc2_transition',effects:{stats:{int:1},flags:{questioned_system:true}}},{text:'"Sukuna chose Yuji for a reason. We need to understand why."',next:'jjk_arc2_transition',effects:{stats:{per:1},flags:{investigating_sukuna:true}}}]};

JJK_NODES.jjk_aftermath_yuji_choice = {text:`Gojo explains it plainly. "Sukuna's fingers seek vessels. Yuji Itadori has an unusual resistance to cursed energy — he could potentially contain Sukuna without being consumed. The plan would be to have Yuji eat all twenty fingers, concentrate Sukuna in one vessel, and then exorcise them together."

"That plan sounds insane," Nobara says flatly.

"It is insane," Gojo agrees. "But it is also the only permanent solution to Sukuna. Otherwise, the fingers keep attracting curses forever."

Yuji is quiet for a long time. Then he looks up. "I will do it. If it means no one else gets hurt because of those fingers — I will be the vessel."

Gojo turns to you. "Yuji will need support. Training. Someone to watch his back when Sukuna tries to take control. You up for it?"`,scene:'action',mood:'#2a0845',characters:['Gojo','Yuji','Nobara'],effects:{flags:{yuji_volunteered:true}},choices:[{text:'"I am in. Whatever it takes."',next:'jjk_arc2_transition',effects:{relationships:{yuji:2},relationships:{gojo:1}}},{text:'"This is bigger than us. But yes."',next:'jjk_arc2_transition',effects:{stats:{cou:1}}},{text:'"Only if Yuji is sure. This has to be his choice."',next:'jjk_arc2_transition',effects:{relationships:{yuji:1}}}]};

JJK_NODES.jjk_finger_trap = {text:`"Wait — let it come to us. Megumi, use your shadows to block the exits. Nobara, nail the doorframes — if it runs, it detonates. Yuji, you are the bait."

"Why am I always the bait?" Yuji asks.

"Because you are the hardest to kill."

The plan works. The Finger Bearer smashes into the cafeteria where you are waiting. Nobara's nails detonate around it, driving it into Megumi's shadow trap. The creature thrashes but cannot escape.

But it is still holding the finger. And it is getting stronger by the second.`,scene:'action',mood:'#4a0000',characters:['Yuji','Megumi','Nobara'],effects:{stats:{int:2},flags:{set_trap:true}},choices:[{text:'Spring the trap — everyone attack at once.',next:'jjk_finger_bearer',check:{stat:'int',dc:11}},{text:'Have Yuji grab the finger from its mouth.',next:'jjk_finger_bearer',check:{stat:'cou',dc:12}}]};

// ---- ARC 2: THE FINGER BEARER & JUNPEI ----

JJK_NODES.jjk_arc2_transition = {text:`Weeks pass. Yuji trains under Gojo's direct supervision, learning to suppress Sukuna's influence while channeling cursed energy. You train alongside him — sparring, studying curse theory, running missions.

Your bond with the other first-years deepens. Megumi opens up about his past — the Zenin clan, his sister, the weight of the Ten Shadows technique. Nobara drags you all to Harajuku on days off. Yuji shares his grandfather's last words: "Die surrounded by people."

Then Gojo pulls you aside. "There is a situation in Kawasaki. A boy named Junpei Yoshino — non-sorcerer, but he is manifesting cursed energy. Someone is guiding him. Someone dangerous."

His expression darkens. "The curse user Mahito. He can reshape souls. He is using Junpei as a pawn. I need you and Yuji to reach Junpei before Mahito does something irreversible."`,scene:'action',mood:'#1a0a2e',characters:['Gojo','Yuji'],effects:{flags:{arc2_start:true}},choices:[{text:'"Mahito — how dangerous are we talking?"',next:'jjk_junpei_mission'},{text:'"We will save Junpei. Count on it."',next:'jjk_junpei_mission',effects:{relationships:{yuji:1},stats:{cou:1}}},{text:'"Why us and not you, sensei?"',next:'jjk_junpei_mission',effects:{relationships:{gojo:1}}}]};

JJK_NODES.jjk_junpei_mission = {text:`You find Junpei Yoshino at the movie theater where he works — a quiet, withdrawn kid with dark circles under his eyes and a bruise on his jaw he tries to hide. The cursed energy coming off him is unstable and untrained.

Yuji walks up to him like they are already friends. "Hey! I am Yuji. This is my friend. We are from Jujutsu High — it is a school for people like us."

Junpei tenses. "People like us?"

"People who can see things others can not. Feel things. The weird energy stuff." Yuji grins. "It is actually pretty cool once you get used to it."

Junpei's guard lowers slightly. You can see the loneliness in him — the desperate need to be understood by someone, anyone.

But underneath that loneliness, you sense something else. A thread of foreign cursed energy woven into Junpei's own. Someone has already been here. Mahito.`,scene:'action',mood:'#1a0a2e',characters:['Yuji','Junpei'],choices:[{text:'Warn Junpei directly — someone has been manipulating him.',next:'jjk_junpei_warn',check:{stat:'per',dc:11}},{text:'Build trust first — earn his friendship before the hard truths.',next:'jjk_junpei_trust',effects:{relationships:{yuji:1}}},{text:'Trace the foreign cursed energy — find where Mahito contacted him.',next:'jjk_junpei_trace',check:{stat:'int',dc:12}}]};

JJK_NODES.jjk_junpei_warn = {text:`"Junpei, listen to me carefully. Someone has been feeding you cursed energy — manipulating your development. Can you feel it? That thread of power that is not yours?"

Junpei's eyes widen. His hand goes to his chest. "How did you—"

"Because I can sense it. It is foreign. Parasitic. Whoever did this to you is not your friend. They are using you."

Junpei's face cycles through confusion, denial, and then — horror. "Mahito," he whispers. "He said he was helping me. He said the cursed energy was a gift."

Tears form. "He said I could make the people who hurt me pay. That I deserved power."

Yuji puts a hand on Junpei's shoulder. "Come with us. We can help you for real. No strings."`,scene:'action',mood:'#1a0a2e',characters:['Yuji','Junpei'],effects:{flags:{warned_junpei:true},stats:{per:1}},choices:[{text:'"Junpei, Jujutsu High can teach you to control this. Safely."',next:'jjk_junpei_decision'},{text:'"What did Mahito tell you exactly? We need to know everything."',next:'jjk_junpei_decision',effects:{stats:{int:1}}}]};

JJK_NODES.jjk_junpei_trust = {text:`You spend the afternoon with Junpei. Movies, food, conversation. Yuji is a natural — his warmth breaks through Junpei's walls within hours. You learn about Junpei's life: the bullying, the absent father, the mother who works three jobs and still cannot afford to move them out of their crumbling apartment.

By evening, Junpei is laughing. Actually laughing. Maybe for the first time in months.

"You guys are... different," Junpei says quietly. "Everyone else just pretends I do not exist. Or worse."

This is the moment. The opening.

"Junpei," Yuji says gently. "There is someone who has been talking to you about cursed energy. Someone who is not what they seem."

Junpei's smile fades. "Mahito?"

"He is dangerous. He is using you. But we are not going to let that happen."`,scene:'action',mood:'#2a0845',characters:['Yuji','Junpei'],effects:{flags:{befriended_junpei:true},relationships:{yuji:1}},choices:[{text:'"Come to Jujutsu High. Be our friend, not his pawn."',next:'jjk_junpei_decision',effects:{stats:{cha:1}}},{text:'"We need to move fast. Mahito will not let you go easily."',next:'jjk_junpei_decision',effects:{stats:{cou:1}}}]};

JJK_NODES.jjk_junpei_trace = {text:`While Yuji talks to Junpei, you trace the foreign cursed energy. It leads through the theater, down an alley, to a sewer grate. The energy signature is distinctive — playful, chaotic, deeply wrong. Like touching a soul that has been turned inside out.

Mahito. He has been meeting Junpei underground, in the sewers beneath the city. And the energy trail is fresh — hours old.

You also find something else. A secondary trail leading to Junpei's apartment. To his mother.

Your blood runs cold. Mahito is not just manipulating Junpei. He is setting a trap.

You sprint back to Yuji and Junpei. "We need to go. NOW. Junpei — where is your mother right now?"

Junpei's face goes white. "At home. Why?"`,scene:'action',mood:'#4a0000',characters:['Yuji','Junpei'],effects:{flags:{traced_mahito:true},stats:{int:1}},choices:[{text:'"Call her. Tell her to leave the apartment immediately."',next:'jjk_junpei_decision',effects:{flags:{called_mother:true}}},{text:'Run to the apartment yourself — there is no time.',next:'jjk_junpei_decision',effects:{stats:{cou:1},flags:{rushed_to_mother:true}}}]};

JJK_NODES.jjk_junpei_decision = {text:`Everything happens at once.

Junpei's phone rings. He answers. The color drains from his face. "Mom?"

The line goes dead.

Junpei screams — a sound that rips the air — and runs. You and Yuji follow. The apartment is six blocks away.

You find Junpei's mother on the apartment floor. She is not dead — but she is transformed. Mahito's Idle Transfiguration has reshaped her into something barely human, a twisted form that moans in unrecognizable pain.

Junpei collapses beside her. His cursed energy explodes outward in grief and rage.

And from the shadows, a voice: "Beautiful, is it not? The shape of real emotion."

Mahito steps into the light. Patchwork skin, mismatched eyes, a smile that belongs on something that has never been human. "Hello, Junpei. I told you — curses are born from negative emotion. Yours is magnificent right now."`,scene:'action',mood:'#4a0000',characters:['Yuji','Junpei','Mahito'],effects:{flags:{mahito_appeared:true}},choices:[{text:'Attack Mahito immediately — do not let him talk.',next:'jjk_mahito_fight',check:{stat:'str',dc:12}},{text:'"Junpei, do not listen to him! He did this to your mother!"',next:'jjk_junpei_rage'},{text:'Try to save Junpei\u0027s mother with cursed energy.',next:'jjk_save_mother',check:{stat:'per',dc:14}}]};

JJK_NODES.jjk_mahito_fight = {text:`You launch at Mahito with everything. Your cursed energy blazes. You hit him — and your fist passes through his body like punching water. He reforms instantly, grinning.

"Oh, a fighter! Gojo is teaching them young these days." His hand reaches for your face. "Let me see your soul—"

Yuji slams into Mahito from the side with a punch that actually connects. Mahito recoils — surprised, then fascinated. "You! Your soul is... interesting. There is something else in there."

Sukuna's presence flickers inside Yuji, and Mahito's eyes light up with wonder.

The fight spirals. Mahito is fast, unpredictable, and his Idle Transfiguration turns every touch into a lethal threat. One graze could reshape your body into a monster.

Meanwhile, Junpei is on his knees, cursed energy swirling around him like a storm, staring at his mother's twisted form.`,scene:'action',mood:'#4a0000',characters:['Yuji','Mahito','Junpei'],effects:{flags:{fought_mahito:true},stats:{str:1}},choices:[{text:'Focus on Mahito — keep him away from Junpei.',next:'jjk_junpei_turning_point',check:{stat:'cou',dc:12}},{text:'Break off and grab Junpei — retreat with him now.',next:'jjk_junpei_turning_point',check:{stat:'str',dc:11}}]};

JJK_NODES.jjk_junpei_rage = {text:`"Junpei! Look at me! He did this — Mahito did this to your mother! He is the enemy, not the world!"

Junpei's eyes are wild. His cursed energy is spiraling out of control. Mahito watches with delight.

"Did I?" Mahito asks innocently. "Or did the world that ignored him, bullied him, broke him — did that world create the conditions for this? I simply gave him a push."

"SHUT UP!" Junpei screams. Cursed energy erupts from him — his technique manifesting for the first time. Jellyfish-like shikigami materialize around him, venomous and beautiful.

He turns toward Mahito. Then toward you. His grief is so total he cannot tell friend from enemy.

"Junpei," Yuji says softly. "Please."`,scene:'action',mood:'#4a0000',characters:['Yuji','Junpei','Mahito'],effects:{flags:{junpei_conflicted:true}},choices:[{text:'"Junpei, come to Jujutsu High. We will fix this. I swear."',next:'jjk_junpei_turning_point',effects:{relationships:{yuji:1},stats:{cha:1}}},{text:'Stand between Junpei and Mahito — shield him.',next:'jjk_junpei_turning_point',effects:{stats:{cou:1}}}]};

JJK_NODES.jjk_save_mother = {text:`You kneel beside Junpei's mother and pour cursed energy into her transformed body, trying to understand Mahito's technique, trying to reverse it. The soul damage is catastrophic — Idle Transfiguration reshapes the soul itself, and the body follows.

You cannot undo it. Not with your power. Maybe no one can, except Mahito himself.

But your attempt does something unexpected. Your cursed energy stabilizes her pain. She stops moaning. Her twisted face finds a moment of peace.

Junpei stares at you. At his mother. At the brief mercy you managed.

"You tried," he whispers. "Nobody ever tries."

Mahito clicks his tongue. "How sentimental. But you cannot fix her. Only I can — and I won't."`,scene:'action',mood:'#4a0000',characters:['Junpei','Mahito'],effects:{flags:{tried_save_mother:true},stats:{per:1},relationships:{yuji:1}},choices:[{text:'"Then we make you. Yuji — NOW."',next:'jjk_junpei_turning_point',effects:{stats:{cou:1}}},{text:'"Junpei, he just admitted he could save her. He chose not to."',next:'jjk_junpei_turning_point',effects:{stats:{int:1}}}]};

JJK_NODES.jjk_junpei_turning_point = {text:`This is the moment. The hinge point where the timeline splits.

Mahito reaches for Junpei — his hand glowing with Idle Transfiguration. "Come, Junpei. Let me reshape you into something that does not feel pain anymore."

Yuji screams. You move.

Time slows. Mahito's hand is inches from Junpei's face. Yuji is running but too far away. The only person close enough to intervene is you.`,scene:'action',mood:'#4a0000',characters:['Yuji','Junpei','Mahito'],choices:[{text:'Dive between them — take the hit meant for Junpei.',next:'jjk_save_junpei',check:{stat:'cou',dc:13}},{text:'Hit Mahito with everything — disrupt his technique.',next:'jjk_disrupt_mahito',check:{stat:'str',dc:14}},{text:'Use your voice/strategy to break Junpei free of his despair.',next:'jjk_reach_junpei',check:{stat:'cha',dc:12}}]};

JJK_NODES.jjk_save_junpei = {text:`You throw yourself between Mahito and Junpei. His hand touches your shoulder instead. You feel your soul TWIST — pain beyond anything physical, the fundamental shape of your being wrenching sideways.

But you do not transform. Your cursed energy flares instinctively, fighting the transfiguration, holding your soul in place through sheer willpower. It hurts. God, it hurts. But you hold.

Mahito pulls back, eyes wide. "Interesting. Your soul resisted. That should not be possible."

The moment of shock is enough. Yuji arrives with a devastating punch that sends Mahito through a wall. Junpei collapses against you, sobbing.

Junpei is alive. Untransformed. Saved.

Mahito retreats into the shadows, laughing. "This is not over. It is never over."`,scene:'action',mood:'#1a0a2e',characters:['Yuji','Junpei','Mahito'],effects:{flags:{junpei_saved:true,soul_resisted:true},stats:{cou:2},relationships:{yuji:2}},choices:[{text:'Get Junpei out of here. Mission complete.',next:'jjk_arc2_aftermath'},{text:'Chase Mahito — finish this now.',next:'jjk_chase_mahito',check:{stat:'str',dc:13}}]};

JJK_NODES.jjk_disrupt_mahito = {text:`You pour every scrap of cursed energy into a single strike aimed at Mahito's arm. The impact disrupts his technique — Idle Transfiguration fizzles at his fingertips as his concentration shatters.

Junpei falls backward, untouched.

Mahito snarls — the first time you have seen him genuinely angry. "You broke my flow. Do you know how RUDE that is?"

Yuji hits him from behind. Then again. Then again. Each punch carrying the weight of Sukuna's residual energy, the only thing that can truly damage Mahito's soul.

Mahito retreats, body distorting and reforming as he flees into the walls, through the foundation, gone. But Junpei is safe.

Junpei stares at his mother's twisted form and weeps. But he is alive. He is human. He has a chance.`,scene:'action',mood:'#1a0a2e',characters:['Yuji','Junpei','Mahito'],effects:{flags:{junpei_saved:true,disrupted_mahito:true},stats:{str:2},relationships:{yuji:1}},choices:[{text:'Take Junpei to Jujutsu High. He needs protection.',next:'jjk_arc2_aftermath'},{text:'Stay with Junpei. He needs a friend more than a school.',next:'jjk_arc2_aftermath',effects:{relationships:{yuji:1}}}]};

JJK_NODES.jjk_reach_junpei = {text:`"JUNPEI! Your mother is still alive! She is in pain but she is ALIVE! If we get her to Jujutsu High, if we find someone who can reverse this — she has a chance! But only if you come with us NOW!"

Your words cut through the chaos like a blade. Junpei freezes. He looks at his mother — twisted, suffering, but breathing. Alive.

"She is... alive?"

"Mahito wants you to give up. He WANTS you to break. Do not give him what he wants. FIGHT."

Junpei screams — not in rage, but in defiance. His cursed energy explodes outward, and his jellyfish shikigami slam into Mahito, driving him backward. Mahito's smile finally cracks.

Yuji grabs Junpei. You grab his mother. You run.

Mahito does not follow. He is too busy being stung by a hundred cursed jellyfish.`,scene:'action',mood:'#1a0a2e',characters:['Yuji','Junpei','Mahito'],effects:{flags:{junpei_saved:true,junpei_fought_back:true},stats:{cha:2},relationships:{yuji:1}},choices:[{text:'Get everyone to safety. This timeline just changed.',next:'jjk_arc2_aftermath'},{text:'"Junpei — you are stronger than Mahito thinks. Remember that."',next:'jjk_arc2_aftermath',effects:{relationships:{yuji:1}}}]};

JJK_NODES.jjk_chase_mahito = {text:`You pursue Mahito through the sewers beneath Kawasaki. The cursed spirit is fast, fluid, slipping through spaces that should not fit a human-shaped creature. But you are faster. Or more determined.

You corner him in a drainage chamber. Mahito turns, and his playful demeanor is replaced by something cold.

"You know what you are, do you not? A variable. This timeline was supposed to go differently. Junpei was supposed to be mine."

He tilts his head. "But you changed things. Interesting. I wonder what else you will change."

He dissolves into the walls before you can strike, his laughter echoing through the pipes.

A warning and a promise: he will be back.`,scene:'action',mood:'#4a0000',characters:['Mahito'],effects:{flags:{chased_mahito:true},stats:{cou:1}},choices:[{text:'Return to the others. Junpei needs you more.',next:'jjk_arc2_aftermath'},{text:'Mahito reaches for your soul. You feel the Idle Transfiguration beginning — fight it with everything you have.',next:'jjk_idle_transfiguration',effects:{stats:{cou:2}}}]};

JJK_NODES.jjk_arc2_aftermath = {text:`Back at Jujutsu High, the aftermath unfolds. Junpei is enrolled as a student — traumatized but alive, slowly learning to control his jellyfish technique under Gojo's supervision. His mother is placed in the medical ward, her condition stable but unchanged.

Gojo calls you into his office. "You changed something today. In the original trajectory of events, Junpei was supposed to die. Mahito was going to transfigure him in front of Yuji to break his spirit."

He removes his blindfold. Both eyes — the Six Eyes — look at you with terrifying clarity.

"But you intervened. And now the future is different. Mahito will escalate. The curses are planning something big — Geto, Mahito, Jogo, Hanami. They want to seal me away."

He puts the blindfold back on. Grins. "Luckily, I am unseeable. But I need you to be ready for what is coming. Shibuya. Two months from now."`,scene:'action',mood:'#0044ff',characters:['Gojo'],effects:{flags:{arc2_complete:true,shibuya_warning:true},relationships:{gojo:2}},choices:[{text:'"Seal you? How is that even possible?"',next:'jjk_power_discovery'},{text:'"Two months. I will be ready. What do I need to learn?"',next:'jjk_power_discovery',effects:{stats:{int:1}}},{text:'"If they are targeting you, we need to protect you too."',next:'jjk_power_discovery',effects:{relationships:{gojo:2}}}]};

JJK_NODES.jjk_nanami_lesson = {text:`Before Shibuya, Gojo assigns you to shadow Nanami Kento — Grade 1 sorcerer, former salaryman, the most efficient fighter in the jujutsu world.

Nanami is the opposite of Gojo in every way. Where Gojo is chaotic brilliance, Nanami is structured precision. He wears a suit to exorcise curses. He clocks out at exactly 6 PM. He has opinions about bread.

"Overtime is unpaid," he says flatly as you follow him on a mission. "But curses do not respect working hours."

He teaches you about his Ratio Technique — dividing any target into ten segments and striking the 7:3 weak point. "Every curse has a weak point. Every enemy has a flaw. Your job is to find it before they find yours."

A fourth-grade curse appears in an office building. Nanami bisects it with one strike. "That is the standard. No wasted movement. No wasted energy."`,scene:'action',mood:'#2a0845',characters:['Nanami'],effects:{relationships:{nanami:2}},choices:[{text:'Ask Nanami why he came back to being a sorcerer.',next:'jjk_nanami_personal',effects:{relationships:{nanami:2}}},{text:'Focus on learning combat efficiency.',next:'jjk_todo_training',effects:{stats:{str:1}}},{text:'"Nanami-san, what is the most dangerous curse you have faced?"',next:'jjk_todo_training',effects:{stats:{int:1}}}]};

JJK_NODES.jjk_nanami_personal = {text:`Nanami is quiet for a long time. You walk through the streets of Marunouchi, the setting sun painting the glass towers gold.

"I left because I was tired," he says finally. "Tired of watching people die. Tired of a system that treats sorcerers as expendable. I worked in finance for four years. It was safe. Predictable."

He adjusts his tie. "Then a curse killed a coworker. Someone I had lunch with every day. And I realized — running from the fight does not stop the fight from finding you."

He looks at you with rare directness. "That is my lesson for you. Not technique. Not strategy. The real lesson: you cannot save everyone. But you can save the person in front of you. That is enough."

A moment passes. Then Nanami straightens his suit. "Also, we are thirty minutes past my shift. I am putting in for overtime."`,scene:'action',mood:'#2a0845',characters:['Nanami'],effects:{relationships:{nanami:3},stats:{per:1},flags:{nanami_story:true}},choices:[{text:'"I will remember that, Nanami-san."',next:'jjk_todo_training'},{text:'"You are a better teacher than you think."',next:'jjk_todo_training',effects:{relationships:{nanami:1}}}]};

// ---- ARC 3: SHIBUYA DIVERGENCE ----

JJK_NODES.jjk_shibuya_prep = {text:`Two months of the hardest training of your life. Gojo pushes you beyond your limits. Nanami teaches you combat efficiency. Todo — the bizarre, brilliant third-year from Kyoto — decides you are his "best friend" and trains you in raw cursed energy output.

"What kind of woman is your type?" Todo asks during every sparring session. You learn to dodge both his fists and his questions.

The day arrives. October 31st. Halloween. Shibuya.

Gojo briefs the team one final time. "The cursed spirits will create a barrier in Shibuya to trap civilians. It is a lure — they want me inside. Their plan is to use Prison Realm, an ancient artifact that can seal anything inside a pocket dimension."

He holds up a photo. A small cube covered in eyes.

"If that cube opens in front of me, I have to be far enough away that it cannot lock on. That is where you come in."`,scene:'action',mood:'#2a0845',characters:['Gojo','Nanami','Todo'],effects:{flags:{shibuya_start:true},relationships:{nanami:1},relationships:{todo:1}},choices:[{text:'"We keep the Prison Realm away from you. Got it."',next:'jjk_shibuya_begins',effects:{stats:{int:1}}},{text:'"Who is carrying it? We take them out first."',next:'jjk_shibuya_begins',effects:{stats:{per:1}}},{text:'"And if we fail? What happens if you get sealed?"',next:'jjk_shibuya_begins',effects:{stats:{cou:1}}}]};

JJK_NODES.jjk_shibuya_begins = {text:`Shibuya Station. 7:00 PM. Halloween night.

The streets are packed with costumed civilians when the barrier drops — a massive curtain of cursed energy that seals ten city blocks. Thousands of people trapped inside. Panic erupts instantly.

The cursed spirits appear everywhere. Grasshopper-type curses swarming through the crowds. Transfigured humans — Mahito's handiwork — attacking anything that moves.

Gojo is already inside the barrier, carving through curses with casual brutality. Blue and Red — his cursed techniques — detonate in sequence, clearing entire blocks. He is untouchable. The strongest.

But you can feel it. Something is wrong. The curses are not trying to fight Gojo — they are herding him. Pushing him toward Shibuya Station's underground levels.

Toward the Prison Realm.

Your earpiece crackles. Nanami's voice: "All teams, converge on B5F. The enemy is concentrating forces underground. Gojo-sensei is descending."`,scene:'action',mood:'#4a0000',characters:['Gojo','Nanami'],effects:{flags:{shibuya_battle:true}},choices:[{text:'Rush to B5F — get to Gojo before the trap closes.',next:'jjk_shibuya_underground',check:{stat:'cou',dc:11}},{text:'Stay topside — protect civilians and thin the curse numbers.',next:'jjk_shibuya_surface',check:{stat:'str',dc:11}},{text:'Find the Prison Realm first — destroy it before it can be used.',next:'jjk_shibuya_prison_hunt',check:{stat:'per',dc:13}}]};

JJK_NODES.jjk_shibuya_underground = {text:`You fight your way underground. Every floor is a new nightmare — transfigured humans, cursed spirits, collapsing infrastructure. Yuji fights beside you, Sukuna's power flickering behind his strikes.

At B5F, you find Gojo.

He is surrounded. Jogo — a volcano-headed curse — is attacking with rivers of flame. Hanami — a nature curse — has blocked the exits with cursed plants. And in the center of the platform, a man you have never seen holds a small cube covered in eyes.

Pseudo-Geto. The brain-stealing curse user wearing Geto Suguru's body.

The Prison Realm is open. Its eye is locked on Gojo.

"Satoru," Pseudo-Geto says. "It has been a while."

Gojo freezes. Not physically — mentally. The sight of his dead best friend's face stops him cold for one fatal second.

The Prison Realm begins to activate.`,scene:'action',mood:'#4a0000',characters:['Gojo','Yuji','Jogo'],effects:{flags:{reached_b5f:true}},choices:[{text:'Tackle Pseudo-Geto — knock the Prison Realm away.',next:'jjk_prison_realm_fight',check:{stat:'str',dc:14}},{text:'Scream to Gojo — break him out of his shock.',next:'jjk_break_gojo_free',check:{stat:'cha',dc:13}},{text:'Attack the Prison Realm directly — destroy it.',next:'jjk_attack_prison_realm',check:{stat:'per',dc:15}},{text:'Confront Mahito in the side tunnels first.',next:'jjk_shibuya_mahito',requires:{junpei_saved:true}}]};

JJK_NODES.jjk_shibuya_surface = {text:`You stay topside and become a shield for the civilians. The cursed spirits are everywhere — grasshopper swarms, transfigured humans, things that crawl out of shadows. You fight for every block, every street, every person.

Nanami fights beside you. The man is terrifying in combat — Grade 1 efficiency, every strike at its maximum potential. His Ratio Technique divides targets into perfect weak points.

"Seven to three," he says, bisecting a curse. "Always aim for the weak point. Never waste energy."

Together, you clear three blocks. Hundreds of civilians evacuated. But the fighting takes its toll — you are bleeding, exhausted, running on fumes.

Then Nanami's radio squawks. "Gojo-sensei is in trouble. B5F. Prison Realm is active."

Nanami's jaw tightens. "We need to get underground. Now."`,scene:'action',mood:'#4a0000',characters:['Nanami'],effects:{flags:{protected_civilians:true},stats:{str:1},relationships:{nanami:2}},choices:[{text:'Go underground with Nanami — save Gojo.',next:'jjk_shibuya_toji'},{text:'Send Nanami ahead — you stay to protect civilians.',next:'jjk_nanami_alone',effects:{flags:{sent_nanami:true}}},{text:'Fight through to find Mahito first.',next:'jjk_shibuya_mahito',requires:{junpei_saved:true}}]};

JJK_NODES.jjk_shibuya_prison_hunt = {text:`You trace the Prison Realm's energy signature through the chaos of Shibuya. It is ancient, otherworldly — a frequency completely unlike normal cursed energy. Your senses lead you through burning streets, past fighting sorcerers and curses, down into the station.

You find Pseudo-Geto at B4F, moving toward B5F with the Prison Realm cradled in his arms. He senses you and stops.

"Ah. One of Gojo's students." He studies you with eyes that do not belong to the face they sit in. "You can sense the Prison Realm. Impressive."

He holds it up. The cube's eyes swivel toward you. "This beautiful thing will seal the strongest sorcerer alive. You cannot stop it."

Behind him, you hear Gojo fighting Jogo on the level below. The ground shakes with each exchange.`,scene:'action',mood:'#4a0000',characters:['Gojo'],effects:{flags:{found_prison_realm:true},stats:{per:2}},choices:[{text:'Fight Pseudo-Geto for the Prison Realm.',next:'jjk_prison_realm_fight',check:{stat:'str',dc:14}},{text:'Stall him — buy time for reinforcements.',next:'jjk_prison_realm_fight',check:{stat:'int',dc:12}},{text:'Try to destroy the Prison Realm.',next:'jjk_attack_prison_realm',check:{stat:'str',dc:15}}]};

JJK_NODES.jjk_break_gojo_free = {text:`"GOJO-SENSEI! THAT IS NOT GETO! IT IS SOMETHING WEARING HIS FACE! MOVE!"

Your voice cuts through the station like a blade. Gojo blinks. The fog in his eyes clears. For one moment, the Prison Realm's lock falters — the target moved.

Gojo grins. "Right. Thanks, kid."

Infinity activates. The Prison Realm's eye cannot lock on — Gojo is moving too fast, the space around him warping. He kicks Pseudo-Geto across the platform, and the Prison Realm skids across the floor.

But Pseudo-Geto is not done. He catches himself, and the curses converge — Jogo, Hanami, Choso. Four against one.

Even Gojo Satoru cannot fight all of them AND avoid the Prison Realm forever.`,scene:'action',mood:'#0044ff',characters:['Gojo','Yuji'],effects:{flags:{broke_gojo_free:true},stats:{cha:2},relationships:{gojo:3}},choices:[{text:'Grab the Prison Realm while it is on the ground.',next:'jjk_grab_prison_realm',check:{stat:'cou',dc:13}},{text:'Join the fight — help Gojo against the curses.',next:'jjk_fight_with_gojo',check:{stat:'str',dc:12}},{text:'The rescue mission begins. Assemble the team — Angel, Megumi, Choso. Free Gojo from the Prison Realm.',next:'jjk_prison_realm_rescue',effects:{stats:{cou:1,int:1},flags:{rescue_initiated:true}}}]};

JJK_NODES.jjk_attack_prison_realm = {text:`You channel everything into a single attack aimed at the Prison Realm. Your cursed energy blazes, scorching the air.

The cube absorbs your attack like a sponge. The eyes on its surface blink, and you feel a terrible suction — the Prison Realm trying to seal YOU instead.

You wrench yourself free at the last second, but the effort leaves you drained. Pseudo-Geto laughs.

"The Prison Realm cannot be destroyed. It is a divine artifact — beyond human cursed energy." He walks past you toward B5F. "Stay down. This does not concern you."

But his momentary distraction with you cost him seconds. Precious seconds that let Nanami arrive from the east stairwell, blade drawn.`,scene:'action',mood:'#4a0000',characters:['Nanami'],effects:{flags:{attacked_prison_realm:true}},choices:[{text:'Rally with Nanami — attack Pseudo-Geto together.',next:'jjk_prison_realm_fight'},{text:'Warn Nanami about the Prison Realm\u0027s power.',next:'jjk_prison_realm_fight',effects:{relationships:{nanami:1}}}]};

JJK_NODES.jjk_prison_realm_fight = {text:`The battle at B5F is apocalyptic. Gojo fights Jogo and Hanami simultaneously, the underground station crumbling around them. Pseudo-Geto circles with the Prison Realm, waiting for an opening.

You, Nanami, and Yuji form a line between Pseudo-Geto and Gojo. Three sorcerers against the mastermind of the curse alliance.

Pseudo-Geto is terrifyingly strong. The body he stole — Geto Suguru's — was already one of the most powerful sorcerers alive. Combined with his own ancient cursed technique, he is nearly untouchable.

Nanami attacks with precise, devastating strikes. Yuji hammers with raw power. You fill the gaps, disrupting Pseudo-Geto's movements, looking for an opening.

The Prison Realm pulses. It is still trying to lock onto Gojo.`,scene:'action',mood:'#4a0000',characters:['Gojo','Nanami','Yuji'],choices:[{text:'Focus on knocking the Prison Realm out of his hands.',next:'jjk_grab_prison_realm',check:{stat:'str',dc:13}},{text:'Coordinate a three-person combo attack.',next:'jjk_combo_attack',check:{stat:'int',dc:12}},{text:'Protect Nanami\u0027s flank — keep him alive.',next:'jjk_protect_nanami',check:{stat:'per',dc:11}}]};

JJK_NODES.jjk_grab_prison_realm = {text:`You see your moment. Pseudo-Geto overextends a curse manipulation, and the Prison Realm shifts in his grip. You lunge.

Your hands close around the cube. The eyes on its surface lock onto you — cold, ancient, alien. It tries to activate, tries to pull you inside. Your cursed energy screams in resistance.

Pseudo-Geto grabs your wrist. "Let go. You do not know what you are holding."

"I know what it does. And I know you are not getting it back."

You wrench the Prison Realm free and THROW it — high, arcing, toward Gojo. The strongest sorcerer catches it with Infinity, suspending it in warped space where it cannot open, cannot lock, cannot seal.

Gojo grins. "Game over."

Without the Prison Realm, Pseudo-Geto has no win condition. He signals retreat. Jogo, Hanami, and Choso vanish into the barrier's edges. The curses flee.

Gojo Satoru remains unsealed.`,scene:'action',mood:'#0044ff',characters:['Gojo','Nanami','Yuji'],effects:{flags:{gojo_unsealed:true,grabbed_prison_realm:true},stats:{cou:2},relationships:{gojo:3}},choices:[{text:'Collapse with relief. You just saved the strongest sorcerer alive.',next:'jjk_shibuya_aftermath'},{text:'"They will try again. We need to end this tonight."',next:'jjk_shibuya_aftermath',effects:{stats:{int:1}}}]};

JJK_NODES.jjk_combo_attack = {text:`"Nanami-san — Ratio Technique on his left shoulder! Yuji — follow through with a cursed strike to the same point! I will cut off his escape!"

The three of you move as one. Nanami's blade finds the seven-to-three weak point on Pseudo-Geto's guard. Yuji's fist hammers the same spot with Sukuna's residual energy. You seal the exits with your own technique.

Pseudo-Geto staggers. For the first time, he looks genuinely hurt. The Prison Realm drops from his hands.

Gojo appears behind him. "Leaving so soon?"

Purple — the fusion of Blue and Red — detonates at point-blank range. Pseudo-Geto is blasted through three walls. He survives, barely, and retreats with the curses.

The Prison Realm sits on the ground, inert. Gojo picks it up and crushes it with Infinity until it is nothing but dust.

"Not today," he says.`,scene:'action',mood:'#0044ff',characters:['Gojo','Nanami','Yuji'],effects:{flags:{gojo_unsealed:true,combo_attack:true},stats:{int:2},relationships:{nanami:2},relationships:{gojo:2}},choices:[{text:'Check on the team — is everyone alive?',next:'jjk_shibuya_aftermath'},{text:'It worked. The timeline is changed.',next:'jjk_shibuya_aftermath'}]};

JJK_NODES.jjk_protect_nanami = {text:`You see the attack coming before Nanami does — a transfigured human, one of Mahito's creations, lunging at Nanami's blind spot with claws that can shred steel.

You intercept. The claws rake across your arm instead of Nanami's spine. Pain lances through you but you put the creature down with a burst of cursed energy.

Nanami glances at you. A single nod. From Nanami Kento, that is equivalent to a standing ovation.

He fights harder after that. Together, you push Pseudo-Geto back far enough that the Prison Realm cannot lock onto Gojo. The strongest sorcerer finishes Jogo with Hollow Purple, and the remaining curses scatter.

The Prison Realm falls from Pseudo-Geto's hands as he retreats. Gojo catches it and seals it away.

"Nanami," Gojo says later. "You would have died without this kid."

"I know," Nanami replies. "I owe them a debt."`,scene:'action',mood:'#0044ff',characters:['Gojo','Nanami'],effects:{flags:{gojo_unsealed:true,nanami_saved:true},stats:{per:1},relationships:{nanami:3},relationships:{gojo:1}},choices:[{text:'"Nanami-san, you would have done the same for me."',next:'jjk_shibuya_aftermath',effects:{relationships:{nanami:1}}},{text:'You just nod. Words are unnecessary.',next:'jjk_shibuya_aftermath'}]};

JJK_NODES.jjk_nanami_alone = {text:`You send Nanami underground and stay on the surface. For thirty minutes, you are a one-person army — fighting curses, evacuating civilians, holding the line.

Then the radio goes silent. And a wave of cursed energy erupts from below — wrong, twisted, devastating. Something terrible is happening underground.

You fight your way down to B5F and arrive to a nightmare. Gojo is sealed inside the Prison Realm. The cube sits on the ground, pulsing with contained infinity. Nanami is on his knees, bleeding from a dozen wounds, facing Mahito alone.

"Run," Nanami says to you. His voice is calm. Final.

Mahito touches Nanami's face. Idle Transfiguration activates.

"NO!" You scream.`,scene:'action',mood:'#4a0000',characters:['Nanami','Mahito'],effects:{flags:{gojo_sealed:true,nanami_dying:true}},choices:[{text:'Attack Mahito — even if it costs your life.',next:'jjk_dark_shibuya',check:{stat:'str',dc:14}},{text:'Grab Nanami and retreat — save who you can.',next:'jjk_dark_shibuya',check:{stat:'cou',dc:13}}]};

JJK_NODES.jjk_fight_with_gojo = {text:`You fight alongside Gojo Satoru. It is like standing next to a hurricane and trying to help it blow harder. His power is beyond anything you have ever experienced — space bending, gravity inverting, curses dissolving.

But your contribution matters. You handle the smaller threats — transfigured humans, lesser curses — that Gojo cannot waste attention on while fighting Jogo and dodging the Prison Realm.

Together, you and the team create enough chaos that Pseudo-Geto never gets a clean shot with the Prison Realm. Gojo stays moving, stays fighting, stays free.

When the curses finally retreat, Gojo puts a hand on your shoulder. "You did good, kid. Real good."

The Prison Realm is recovered and destroyed. Gojo remains unsealed.`,scene:'action',mood:'#0044ff',characters:['Gojo','Yuji'],effects:{flags:{gojo_unsealed:true,fought_with_gojo:true},stats:{str:1},relationships:{gojo:2}},choices:[{text:'This is the best possible outcome.',next:'jjk_shibuya_aftermath'},{text:'"The curses will regroup. What is our next move?"',next:'jjk_shibuya_aftermath',effects:{stats:{int:1}}}]};

JJK_NODES.jjk_shibuya_toji = {text:`In the chaos of Shibuya's underground, something impossible happens. A figure moves through the transfigured humans with inhuman speed and no cursed energy at all. Zero. A complete void where a soul should be.

Toji Fushiguro — the sorcerer killer, Megumi's father — revived through a cursed technique gone wrong. His body is a weapon: perfected physical form, heavenly restriction, cursed tools flowing from an inventory curse that follows him like a shadow.

He does not recognize anyone. The resurrection left his mind fractured. He is pure combat instinct — killing curses and sorcerers indiscriminately.

And he is heading toward Megumi.`,scene:'action',mood:'#4a0000',characters:['Megumi'],effects:{flags:{toji_appeared:true}},choices:[{text:'Get between Toji and Megumi — protect your friend.',next:'jjk_toji_confrontation',check:{stat:'cou',dc:14}},{text:'Call out to Toji — try to reach whatever remains of his mind.',next:'jjk_toji_words',check:{stat:'cha',dc:13}},{text:'Warn Megumi — let him decide how to face his father.',next:'jjk_toji_megumi',effects:{relationships:{megumi:2}}}]};

JJK_NODES.jjk_toji_confrontation = {text:`You plant yourself in Toji's path. It is like standing in front of a freight train. The man has no cursed energy but his physical presence is overwhelming — every muscle a coiled spring, every movement lethal.

He swings a cursed weapon — the Inverted Spear of Heaven — and you barely dodge. The air where your head was splits open. He is faster than anything you have fought.

You cannot win this fight. You know that. But you can slow him down.

You trade blows — or rather, you survive his blows while landing nothing. Each dodge costs you. Each near-miss shaves years off your life.

Then Toji pauses. Looks at you. Something flickers behind his dead eyes.

"...Kid," he rasps. The first word from a mind fighting through the fog. "Where is... my son?"`,scene:'action',mood:'#4a0000',characters:['Megumi'],effects:{stats:{cou:2},flags:{faced_toji:true}},choices:[{text:'"He is alive. He is strong. He is nothing like you — and that is a good thing."',next:'jjk_toji_resolves',effects:{relationships:{megumi:2}}},{text:'Point toward Megumi. Let father and son meet.',next:'jjk_toji_resolves'}]};

JJK_NODES.jjk_toji_words = {text:`"TOJI FUSHIGURO! Your son is here! Megumi Fushiguro — he became a sorcerer! He is ALIVE because you sold him to Gojo!"

The words cut through the fog of resurrection like a blade. Toji stops mid-stride. The Inverted Spear lowers an inch.

"...Megumi." The name comes out broken, fragmented. But it comes out. A father's memory, refusing to die even when the father did.

He turns toward you. The killing intent fades. What replaces it is something infinitely more painful — recognition, and with it, shame.

"I sold him," Toji whispers. "I sold my own kid."`,scene:'action',mood:'#1a0a2e',characters:['Megumi'],effects:{stats:{cha:2},flags:{reached_toji:true}},choices:[{text:'"He does not hate you. But he needs to see that you care."',next:'jjk_toji_resolves'},{text:'"You can still do something. Help us fight."',next:'jjk_toji_resolves',effects:{stats:{int:1}}}]};

JJK_NODES.jjk_toji_megumi = {text:`"MEGUMI! Your father — he is here! Resurrected!"

Megumi freezes. Then he turns and sees Toji — the man who abandoned him, the sorcerer killer, the ghost that has haunted his entire life.

Father and son stare at each other across the burning ruins of Shibuya Station.

"...You got tall," Toji says.

Megumi's jaw clenches. His hands tremble. Divine Dogs materialize at his sides, growling.

"You LEFT me. You SOLD me. And now you show up HERE?"

Toji does not defend himself. He lowers his weapons. "Yeah. I did all that."

A long silence. The fighting rages around them but this space is its own world.

"But I named you Megumi," Toji says. "Blessing. I gave you the only good thing I had."`,scene:'action',mood:'#1a0a2e',characters:['Megumi'],effects:{flags:{megumi_confronted_toji:true},relationships:{megumi:3}},choices:[{text:'Give them space. This is their moment.',next:'jjk_toji_resolves'},{text:'Stay close in case Toji loses control again.',next:'jjk_toji_resolves',effects:{stats:{per:1}}}]};

JJK_NODES.jjk_toji_resolves = {text:`Toji Fushiguro makes a choice. The resurrection curse is pulling him back toward mindless violence, but the memory of his son holds him — barely.

"I cannot stay," he tells Megumi. "This body is not mine anymore. When it goes, I go."

He picks up the Inverted Spear of Heaven and turns toward the deeper levels of Shibuya, where the curses are strongest.

"But I can buy you time. Go save that teacher of yours."

He moves into the darkness with the efficiency of the world's greatest assassin. Moments later, screams — cursed spirits, dissolving under the assault of a man with no cursed energy and no mercy.

Megumi watches his father disappear. A single tear tracks down his face before he wipes it away and summons his shikigami.

"Let us go."`,scene:'action',mood:'#1a0a2e',characters:['Megumi'],effects:{flags:{toji_sacrifice:true},relationships:{megumi:2}},choices:[{text:'Follow Toji\u0027s path — he is clearing a route to B5F.',next:'jjk_prison_realm_fight'},{text:'Take a different route — honor his sacrifice by reaching Gojo.',next:'jjk_prison_realm_fight',effects:{stats:{cou:1}}}]};

JJK_NODES.jjk_shibuya_mahito = {text:`In the depths of Shibuya, you encounter Mahito again. He is stronger now — fed on the fear and death of hundreds of civilians, his Domain Expansion rippling at the edges of reality.

"You again," Mahito says, tilting his patchwork face. "The one who stole Junpei from me. I have been looking forward to this."

His hands glow with Idle Transfiguration. Around him, dozens of transfigured humans stand in grotesque formation — people he has already reshaped into weapons.

"Let me show you what Junpei was supposed to become."`,scene:'action',mood:'#4a0000',characters:['Mahito'],effects:{flags:{shibuya_mahito:true}},choices:[{text:'Fight Mahito head-on — you survived his touch once before.',next:'jjk_mahito_duel',check:{stat:'str',dc:13}},{text:'Stall him — Yuji is the only one who can truly hurt Mahito.',next:'jjk_mahito_stall',check:{stat:'int',dc:12}},{text:'Use the environment — collapse the ceiling on him.',next:'jjk_mahito_duel',check:{stat:'per',dc:12}}]};

JJK_NODES.jjk_mahito_duel = {text:`You and Mahito clash in the ruins of Shibuya's underground mall. He is faster, stronger, more creative — his body reshaping mid-fight, arms becoming blades, legs becoming springs.

But you have something he does not: allies. Todo appears from nowhere with a thunderous clap — Boogie Woogie switches your position with Mahito's, disorienting the curse. Yuji follows with a devastating combination.

The three of you push Mahito back. Each of Yuji's punches damages Mahito's soul, the one thing Idle Transfiguration cannot heal. Todo's tactical switching creates openings that Mahito cannot predict.

And you fill the gaps — guarding flanks, creating distractions, keeping the transfigured humans at bay.

Mahito shrinks. Literally. His body compresses as damage accumulates, his domain cracking, his confidence shattering.

"This is not... this was not supposed to... I am a CURSE! I do not LOSE to humans!"`,scene:'action',mood:'#4a0000',characters:['Mahito','Todo','Yuji'],effects:{stats:{str:1},relationships:{todo:1},relationships:{yuji:1},flags:{mahito_defeated:true}},choices:[{text:'Finish Mahito. End him.',next:'jjk_shibuya_aftermath',effects:{stats:{cou:1}}},{text:'Let Yuji deliver the final blow — Mahito is his fight.',next:'jjk_shibuya_aftermath',effects:{relationships:{yuji:2}}}]};

JJK_NODES.jjk_mahito_stall = {text:`You cannot beat Mahito alone. But you can make him angry enough to get sloppy. And an angry curse makes mistakes.

You dodge, weave, taunt. "Junpei sends his regards, by the way. He is doing great at Jujutsu High. Made friends. Smiles now. Everything you tried to destroy — it is flourishing."

Mahito's grin cracks. "SHUT UP."

"He even has a girlfriend. Can you believe it? The boy you tried to break is HAPPY."

Mahito lunges — and runs directly into Yuji Itadori's Black Flash.

The sound is like reality cracking. Mahito's body distorts, soul fracturing under the impact of Sukuna's residual energy channeled through Yuji's fist at the exact moment of impact.

Todo claps. Boogie Woogie. Your position switches with Mahito's. You end up behind Yuji. Mahito ends up right in front of him.

Yuji hits him again. And again. And again.`,scene:'action',mood:'#4a0000',characters:['Mahito','Yuji','Todo'],effects:{stats:{int:1},relationships:{yuji:2},flags:{mahito_defeated:true}},choices:[{text:'Watch Mahito fall. This is justice.',next:'jjk_shibuya_aftermath'},{text:'Stay alert — cornered curses are the most dangerous.',next:'jjk_shibuya_aftermath',effects:{stats:{per:1}}}]};

JJK_NODES.jjk_dark_shibuya = {text:`The dark timeline unfolds. With Gojo sealed and Nanami fallen, the Shibuya Incident spirals into catastrophe. Mahito rampages. Pseudo-Geto completes his plan. Sukuna wrests control from Yuji for three devastating minutes, carving Shibuya apart with Malevolent Shrine.

When it is over, the city is a crater. Hundreds dead. The jujutsu world shattered.

You survive. Barely. You pull Megumi from the rubble. Find Nobara unconscious but alive. Yuji is catatonic with guilt — Sukuna used his body to kill innocent people.

In the ruins of Shibuya, you face a choice that will define everything that comes after.`,scene:'action',mood:'#4a0000',characters:['Yuji','Megumi','Nobara'],effects:{flags:{dark_timeline:true}},choices:[{text:'Rally the survivors — fight back against the curses.',next:'jjk_ending_dark',effects:{stats:{cou:1}}},{text:'Flee with your friends — survive to fight another day.',next:'jjk_ending_dark',effects:{stats:{int:1}}},{text:'Find a way to unseal Gojo — he is the only hope.',next:'jjk_ending_sacrifice',effects:{stats:{per:1}}},{text:'You think about the Sorcerer Killer — Toji Fushiguro appeared here. What was his connection to all of this?',next:'jjk_toji_fushiguro',effects:{stats:{int:1}}}]};

JJK_NODES.jjk_shibuya_aftermath = {text:`Shibuya is over. The barrier falls. Emergency services flood the area. The cursed spirits have retreated, their plan to seal Gojo foiled.

The cost is still high — civilian casualties, infrastructure destroyed, several sorcerers wounded. But the worst outcome was prevented. Gojo Satoru remains free. Nanami is alive. Your team is battered but intact.

At Jujutsu High, Gojo addresses the assembled sorcerers. "What happened at Shibuya was a declaration of war. The curses — Pseudo-Geto, Mahito, Jogo, what is left of them — will not stop. They want a world where curses rule and humans are cattle."

He looks at each of you. "But they showed us something important. They can be hurt. They can be beaten. And they are afraid of us."

He turns to you specifically. "Especially you. You changed the outcome tonight. Without you, I would be in a box right now."

The room is quiet.`,scene:'action',mood:'#0044ff',characters:['Gojo','Yuji','Megumi','Nobara','Nanami'],effects:{flags:{shibuya_aftermath:true}},choices:[{text:'"We finish this. Track down Pseudo-Geto and end the curse alliance."',next:'jjk_ending_golden',effects:{stats:{cou:1}}},{text:'"We need to prepare. They will come again, stronger."',next:'jjk_ending_canon',effects:{stats:{int:1}}},{text:'"There might be another way. Sukuna is inside Yuji — what if we turn him?"',next:'jjk_ending_hidden',effects:{stats:{cha:1}}}]};

// ---- ENDINGS ----

JJK_NODES.jjk_ending_golden = {text:`THE GOLDEN AGE

With Gojo unsealed and the jujutsu world united, you lead the counteroffensive against the curse alliance. Pseudo-Geto is cornered. Mahito is exorcised. The remaining curses scatter.

But the real victory is what comes after. With Gojo free to reform the jujutsu world, the corrupt elders are replaced. The grade system is overhauled. Non-sorcerers with cursed energy — like Junpei — are given support instead of being exploited or executed.

Yuji learns to coexist with Sukuna, suppressing the King of Curses through sheer force of will and the bonds he has built. Megumi masters the Ten Shadows. Nobara becomes the most feared Grade 1 sorcerer in a generation. Nanami retires to run a bakery in Kuantan. He seems happy.

And you? You become a Special Grade sorcerer — one of only four in the world. Not because of raw power, but because you changed the timeline itself.

Gojo takes off his blindfold one evening and looks at the sunset with his own eyes. "Not bad," he says. "Not bad at all."

In this timeline, everyone lives. The golden age of jujutsu begins.`,scene:'action',mood:'#0044ff',characters:['Gojo','Yuji','Megumi','Nobara','Nanami'],effects:{flags:{ending_golden:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'},{text:'Your domain expands — pure cursed energy flows through you.',next:'jjk_yuki_theory'}]};

JJK_NODES.jjk_ending_canon = {text:`THE CANON PATH

Events continue much as they might have — but with crucial differences. Gojo is unsealed. Nanami lives. Junpei survived. The ripples of your choices spread outward, changing small things that accumulate into a slightly different world.

The war against the curses continues. It is long, brutal, and costly. But the jujutsu world endures. Pseudo-Geto remains at large, planning his next move. Sukuna waits inside Yuji, patient and inscrutable.

You take your place among the Grade 1 sorcerers — reliable, effective, the kind of person everyone wants on their team. Not the strongest, but maybe the most important. The one who keeps everyone else alive.

At night, you sometimes feel the timeline shimmering around you. The sense that things could have gone so much worse. Or so much better.

The story is not over. It is just... continuing. One choice at a time.

"The difference between a good sorcerer and a great one," Nanami tells you over coffee, "is knowing which battles to fight. You have always known."`,scene:'action',mood:'#2a0845',characters:['Gojo','Yuji','Nanami'],effects:{flags:{ending_canon:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

JJK_NODES.jjk_ending_dark = {text:`THE DARK TIMELINE

You flee with the survivors — Megumi, Nobara, a catatonic Yuji, and a handful of wounded sorcerers. Behind you, Shibuya burns. The old world is over.

Pseudo-Geto declares a new age. The Culling Game begins — cursed energy barriers covering Japan, forcing sorcerers to fight each other for survival. Sukuna's influence spreads. The government collapses in regions where curses roam freely.

You become the leader of a resistance cell. Fifty sorcerers, hiding in the mountains, striking at curse strongholds when you can. It is not enough. It is never enough.

But you keep fighting. Because Yuji whispered something to you before he went silent: "Don't let it end like this."

Gojo is still sealed somewhere. If you can find the Prison Realm, if you can unseal him — there is still a chance. A thin, desperate, beautiful chance.

In the darkest timeline, you are the light that refuses to go out.`,scene:'action',mood:'#4a0000',characters:['Yuji','Megumi','Nobara'],effects:{flags:{ending_dark:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

JJK_NODES.jjk_ending_sacrifice = {text:`THE SACRIFICE

You find the Prison Realm in the ruins of Shibuya. The cube pulses with contained infinity — Gojo Satoru, the strongest sorcerer alive, trapped inside.

There is a way to open it. A soul exchange — one life for the one sealed within. The price is absolute. Irreversible.

You do not hesitate.

Your cursed energy floods the Prison Realm. You feel your soul being pulled apart — not painfully, but thoroughly. Like every part of you is being read, cataloged, and consumed. In exchange, the seal cracks.

Gojo erupts from the Prison Realm in a detonation of blue and white. He is free. Infinite Void expands outward, the space around him normalizing, the world remembering what it means to have the strongest sorcerer active.

He catches your body as you fall. The last thing you see is his eyes — both of them, uncovered, the Six Eyes burning with something you have never seen there before.

Grief.

"Damn it," he whispers. "You were not supposed to do that."

You smile. "Someone... had to."

In the years after, they build a memorial at Jujutsu High. Your name is carved in cursed stone that will never fade. Every first-year student is told your story. The sorcerer who saved Gojo Satoru. The one who changed the timeline and gave everything.

Yuji visits every week. He brings flowers and talks to you like you can still hear.

Maybe you can.`,scene:'action',mood:'#1a0a2e',characters:['Gojo','Yuji'],effects:{flags:{ending_sacrifice:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

JJK_NODES.jjk_ending_hidden = {text:`THE IMPOSSIBLE ALLIANCE

The idea is insane. Suicidal. Brilliant.

You confront Sukuna directly — not through Yuji, but by entering Yuji's mind through a cursed technique and standing before the King of Curses in his innate domain. The shrine of malevolent skulls. The throne of the ancient sorcerer who devoured curses and humans alike.

Sukuna regards you with four eyes and absolute contempt. "A child. Come to bargain."

"Not bargain. Propose. The curses want you free so you can destroy humanity. The sorcerers want you sealed forever. Both sides are using Yuji. Neither side is asking what YOU want."

Sukuna's eyes narrow. For the first time in a thousand years, someone has surprised him.

"What I want is irrelevant. I am power incarnate. I do not negotiate."

"Then why are you still talking to me?"

Silence. And then — the rarest sound in the jujutsu world — Sukuna laughs. Not cruel. Not mocking. Genuinely amused.

"You have courage, child. Or madness. They are often the same thing."

The negotiation takes hours. Days. Time moves differently inside a soul. You learn things about Sukuna that no one alive knows — his origin, his loneliness, the weight of being a god in a world that produces nothing worthy of his attention.

In the end, you forge something impossible. An alliance. Sukuna will not fight against humanity — but he will not fight for it either. He will coexist with Yuji, sharing the vessel, in exchange for the right to experience the world through mortal eyes.

"The world has changed," Sukuna admits. "It is more... interesting than I remember. Especially with fools like you in it."

When you emerge from Yuji's mind, everything is different. Sukuna's cursed energy is no longer hostile — it is integrated, woven into Yuji's own power. The boy who was a vessel becomes something new. Something unprecedented.

Gojo stares at you. "What did you DO?"

"I made a friend."

The jujutsu world does not know what to make of it. An alliance with the King of Curses. Impossible. Unthinkable. And yet — it holds. Sukuna keeps his word.

Years later, when a threat beyond even Gojo's power appears, Sukuna fights alongside humanity. Not for love or loyalty — but because one mad first-year student treated him like a person instead of a weapon.

The history books do not know how to classify you. Hero. Diplomat. Fool.

You prefer: friend.`,scene:'action',mood:'#2a0845',characters:['Sukuna','Yuji','Gojo'],effects:{flags:{ending_hidden:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

JJK_NODES.jjk_mechamaru_betrayal = {text:`The truth arrives like a blade between the ribs — quiet, then devastating. You piece it together from fragments: intercepted communications, Gojo-sensei's grim expression, the empty space where Mechamaru's cursed corpse puppet once stood. Kokichi Muta made a deal with the devil. Or rather, with Mahito.\n\nYou find the files Ijichi left on the briefing table — classified, but no one stops you from reading. Muta was born with a body that the cursed world devoured from the inside. His flesh ached with every breath. His real form, sealed in a chamber deep in some mountain prefecture, had barely enough sensation left to feel the sheets beneath him. So he built himself a body out of steel and chakra and sheer desperate will. Mechamaru. Puppet. Surrogate. The only way he could move through a world that his curse had taken from him.\n\nAnd then Mahito came with an offer: full restoration. A real body. Skin that could feel sunlight. Hands that could brush against another person without mechanical distance. All Muta had to do was feed the cursed spirits intelligence on Jujutsu High — positions, schedules, weaknesses. A spy by necessity. A traitor by love.\n\nBecause there was Miwa. There is always someone, you think. Someone who makes a person desperate enough to gamble everything. Miwa, who laughed easily and swung her sword with earnest conviction, who had no idea the boy behind the puppet cared for her with a ferocity that outlasted his own survival.\n\nMuta honored the deal even knowing Mahito would break it. He went to the confrontation prepared — every unit of cursed energy his body could channel, every technique refined through years of remote operation, every trick a mechanical genius could engineer. He fought knowing he would lose. He just wanted to cost Mahito something.\n\nYou set down the file. The room feels heavier than it did a minute ago. This is the part of sorcery no one talks about at orientation: the ledger of what people sacrifice, and for whom, and whether anyone ever knows.\n\nNanami appears in the doorway, coffee in hand, and reads your expression with the efficiency of a man who has processed too much grief to waste time on preamble.\n\n"He was one of the better ones," Nanami says. Not a eulogy. A fact.\n\nYou think about Miwa, somewhere out there, still not knowing the full shape of what was given for her sake. You think about whether knowing would be a kindness or a cruelty. You think about your own deals — the ones you haven't made yet, the ones the world might eventually force onto you.\n\nThe cursed world keeps its own ledger. You wonder what it will one day ask of you.`,scene:'revelation',mood:'#4a3060',characters:['Kokichi Muta','Mahito','Miwa','Nanami'],effects:{stats:{int:2,emp:2},relationships:{miwa:1,nanami:1},flags:{mechamaru_truth_known:true}},choices:[{text:'Seek out Miwa. She deserves to know something — even if not everything.',next:'jjk_mahito_encounter',effects:{stats:{emp:2},relationships:{miwa:3}}},{text:'Study Muta\'s combat records. His techniques against Mahito might reveal a weakness.',next:'jjk_domain_expansion',effects:{stats:{int:3,cou:1}}},{text:'File it away and focus forward. Grief is a luxury the living can\'t always afford.',next:'jjk_culling_game',effects:{stats:{cou:1},flags:{pragmatic_mindset:true}}}]};


JJK_NODES.jjk_choso_brotherhood = {text:`He comes at you like a force of nature — blood weaponized into lances, into shields, into a pressure that makes the air taste like copper. Choso, eldest of the Death Paintings, three-quarters cursed spirit and one-quarter human, built for war across a century of waiting. He is trying to kill you. He is absolutely certain this is justice.\n\nYou survive the first exchange on instinct alone, rolling beneath a Piercing Blood that carves a furrow through concrete like it's wet sand. The second attack you deflect. The third nearly ends everything.\n\nBut then Choso stops.\n\nHe stops mid-motion, one arm extended, blood crystallizing in the air between you. His face — older than it has any right to look, weathered by something that isn't quite time — goes through an upheaval you can't entirely read. Confusion. Then something that looks, improbably, like recognition.\n\n"I remember," he says. The words come out fractured. "Sharing a meal. With you."\n\nYou've never shared a meal with Choso in your life. You would certainly remember. But the memory is real to him — you can see it landing in his nervous system like a key finding a lock it was never meant to fit. He sways. The blood drops.\n\nYou understand it before he finishes processing it himself. Yuji Itadori carries Ryomen Sukuna's soul — and Sukuna consumed Choso's brothers, the other Death Paintings. That cursed lineage, that consumed essence, rewrote something in the blood-memory that Choso carries in his very cells. To the oldest Death Painting, on some level below logic, Yuji registers as kin. As the little brother his curse-born instincts have been protecting for a hundred years without knowing it.\n\n"You're not my enemy," you say carefully, because Choso still has enough blood in the air to end you three times over if the moment tips wrong.\n\nHe looks at you for a long time. The blood settles to the ground like rain after a storm.\n\n"My brothers are gone," Choso says. It isn't accusatory. It is simply the most painful thing you've heard said quietly. "Eso. Kechizu." He says their names like he's setting down stones. "What killed them wore your face. What's left wears it still."\n\n"And yet," you say.\n\n"And yet," he agrees.\n\nThe alliance that forms in that moment is the strangest thing — not trust, not yet, not even close. But Choso turns away from killing you with the slow deliberateness of a man choosing something he doesn't fully understand. Later you will fight beside him. Later you will watch him throw himself between you and death with the uncomplicated ferocity of someone protecting family.\n\nFor now, you breathe. The copper taste fades from the air. The eldest Death Painting sheathes whatever it is he keeps where other people keep their mercy.\n\n"Don't die uselessly," Choso says. It is, you will come to understand, his way of saying he cares.`,scene:'confrontation',mood:'#8b1a1a',characters:['Choso','Yuji Itadori'],effects:{stats:{cou:2,emp:2},relationships:{choso:5},flags:{choso_allied:true,death_painting_truth_known:true}},choices:[{text:'Ask Choso about his brothers — what they were like before the end.',next:'jjk_sukuna_vessel',effects:{stats:{emp:2},relationships:{choso:3}}},{text:'Propose an immediate alliance. Kenjaku is the real enemy, and Choso knows it.',next:'jjk_kenjaku_grand_plan',effects:{stats:{int:1,cou:1},relationships:{choso:2},flags:{kenjaku_enemy_confirmed:true}}},{text:'Give him space. Some losses need silence before they can become anything else.',next:'jjk_shibuya_incident',effects:{stats:{emp:3},relationships:{choso:4}}}]};


JJK_NODES.jjk_yuki_theory = {text:`She arrives unannounced, the way special grades always seem to — as though the concept of scheduling is a rule that applies to lesser people. Yuki Tsukumo drops into the seat across from you with the easy authority of someone who has been the most dangerous person in every room she's entered for decades, and she looks at you like she's already decided you're interesting enough to bother with.\n\n"You're the Sukuna vessel," she says. Not a question. "Good. I've been wanting to talk to someone at the center of this mess."\n\nShe doesn't waste time. Yuki has a theory — no, stronger than a theory: a conviction she's been building across years of solo research, independent of Jujutsu High's institutional assumptions, free from the dogma that keeps the sorcerer establishment recycling the same inadequate answers.\n\nCursed energy, she explains, is born from negative human emotion. Fear. Grief. Hatred. The baseline psychic residue of a species that suffers. Every jujutsu technique, every cursed spirit, every catastrophe that sorcerers spend their lives containing — all of it downstream from the simple terrible fact that humans feel things that leave a mark on the world.\n\nSo. Two solutions, she says, holding up two fingers with the calm of someone presenting a grocery list.\n\nOption one: kill Sukuna. Eliminate the king of curses so thoroughly that his influence on the cursed world collapses. This is Gojo's path — manufacture a Sukuna-killer strong enough to end it. Difficult. Contingent on timing and power that doesn't fully exist yet.\n\nOption two: eliminate cursed energy from humanity entirely. Not the cursed spirits — the source. Evolve, or push, the human species past the point where its emotions generate cursed energy. No negative residue. No fuel. The entire ecosystem of curses starves and collapses over generations.\n\nYou sit with that for a moment. "That's either utopia or eugenics," you say.\n\nYuki grins, and it doesn't entirely reach her eyes. "Exactly the right question. That's why I'm still working on it." She leans forward. "The point isn't that I have the answer. The point is that Jujutsu High isn't even asking the right question. They're managing the symptom. They call that victory."\n\nShe tells you about Tengen. About barriers and the merger. About things moving in the deep architecture of the jujutsu world that most sorcerers are too embedded in the system to notice. Yuki notices because Yuki answers to no one, follows no curriculum, and has been doing her own research in the margins where institutions don't look.\n\n"You're part of this whether you want to be," she says, standing to leave as abruptly as she arrived. "Sukuna's vessel. The Culling Game. Kenjaku's fingerprints are on all of it." She pauses at the door. "I'd rather you understood what you're in the middle of than stumble through it."\n\nAfter she leaves, the room feels different. Larger and more dangerous, in the way that rooms do when someone has named the thing that was always there.`,scene:'revelation',mood:'#1a3a5c',characters:['Yuki Tsukumo','Tengen'],effects:{stats:{int:3,wis:2},relationships:{yuki_tsukumo:3},flags:{cursed_energy_theory_known:true,tengen_awareness:true}},choices:[{text:'Follow Yuki\'s lead and investigate Tengen\'s barrier system directly.',next:'jjk_kenjaku_grand_plan',effects:{stats:{int:2},flags:{tengen_investigated:true}}},{text:'Bring this theory to Nanami or another trusted sorcerer for a second opinion.',next:'jjk_gojo_sealed',effects:{stats:{int:1,wis:1},relationships:{nanami:1}}},{text:'Accept the framing and start looking at the Culling Game through this lens.',next:'jjk_culling_game',effects:{stats:{int:2,wis:2},flags:{culling_game_understood:true}}}]};


JJK_NODES.jjk_kenjaku_grand_plan = {text:`The oldest enemy has no face of his own. That is the first thing to understand about Kenjaku — the face he wears today, the voice he uses, the hands that gesture with such composed intelligence, all of it borrowed. All of it temporary. Beneath the stitched seam that runs across his forehead, a brain that has been transplanting itself into new bodies for over a thousand years looks out at a world it has been patiently, methodically redesigning.\n\nYou learn this in pieces. From Choso, whose creators were Kenjaku's experiment. From Yuki's research notes, which name him obliquely but precisely. From the horror of realizing what Geto Suguru's face has been doing since the real Geto died — what schemes wore his features, what atrocities were committed in the voice of a man who deserved better than to be a puppet for a millennium-old parasite.\n\nKenjaku's goal is not destruction. That's what makes him so much worse than a simple catastrophe.\n\nHe wants a merger. Specifically: the merger of all of humanity into Tengen, the immortal barrier-sorcerer whose technique has been maintaining the invisible architecture that keeps Japan's jujutsu world functional. Tengen evolves past humanity on a fixed cycle; without being synchronized to a Star Plasma Vessel, that evolution becomes something uncontrolled, catastrophic — and Kenjaku wants to use that catastrophe as an engine. Merge humanity. Create something unprecedented. Feed the output to Sukuna, or to whatever comes after Sukuna, or perhaps simply witness the transfiguration of human civilization into a new form of being.\n\nA millennium of preparation. Bodies swapped every few decades. Careful seeding of cursed wombs, death paintings, players for a game whose board was laid generations before any current sorcerer was born. The Culling Game is the final phase — a massive, structured release of cursed energy and human potential, a crucible to select and strengthen what he needs before the end.\n\nYou are in this game. Yuji's existence is part of this game. Gojo's sealing was part of this game.\n\nThe scale of it sits on your chest like a physical weight. One mind, moving through history like a chess player who simply never runs out of time.\n\nBut chess players can still lose. You turn that thought over carefully, looking for the places where Kenjaku's long view might have created blind spots. A millennium of planning builds confidence. Confidence builds assumptions. And assumptions, even ancient ones, can be wrong.\n\nThe question is what a person — or a vessel, or an unlikely coalition of sorcerers, death paintings, and special grades who shouldn't be working together — can do with a wrong assumption and enough resolve to push on it.\n\nYou don't have the answer yet. But for the first time, you're asking the question from the right angle.`,scene:'revelation',mood:'#2d1b4e',characters:['Kenjaku','Tengen','Choso','Geto Suguru'],effects:{stats:{int:3,wis:3},relationships:{choso:1},flags:{kenjaku_plan_known:true,merger_threat_known:true,culling_game_context_known:true}},choices:[{text:'Focus on the Culling Game — disrupt Kenjaku\'s timeline from the inside.',next:'jjk_culling_game',effects:{stats:{cou:2,int:1},flags:{culling_game_disruption:true}}},{text:'Find a way to reach Gojo. Kenjaku\'s plan hinges on him staying sealed.',next:'jjk_gojo_sealed',effects:{stats:{int:2,cou:2},flags:{gojo_rescue_priority:true}}},{text:'Consider Yuki\'s theory as the counter. If the source of cursed energy ends, so does the merger\'s fuel.',next:'jjk_ending_hidden',effects:{stats:{wis:3,int:2},flags:{alternative_solution_sought:true}}}]};


JJK_NODES.jjk_nobara_resonance = {text:`You see it happen. That is something you will carry for the rest of your life — you were there, close enough to feel the air change, when Nobara Kugisaki discovered what she was capable of.\n\nThe fight had been going badly. Mahito's transfigured bodies kept coming, kept shifting, kept wearing human faces stretched into something wrong. Nobara had been holding the line with technique and aggression and sheer refusal to take a step back, driving her nails in with Hairpin, reading the battlefield with an instinct that made sorcery look like muscle memory. But she was being worn down. You could see it in her shoulders, in the slight delay between thought and motion that exhaustion creates.\n\nAnd then the Black Flash happened.\n\nYou've heard it described. You've experienced it yourself — that moment when cursed energy and physical force sync within 0.000001 seconds of each other, when the punch or the strike lands with four-dimensional weight, when time seems to hiccup and the world registers something beyond normal force. It feels like the universe briefly paying attention.\n\nNobara's Black Flash lit up the corridor. Her Resonance technique, already terrifying in its precision — the ability to attack a cursed spirit's soul directly through contact with any piece of it — amplified into something that shook the walls. The transfigured human she struck came apart not just physically but essentially, the cursed energy of its construction simply failing to cohere under the blast.\n\nAnd Nobara's face in that moment — not triumphant, not relieved. Focused. Like she'd found the exact frequency the world vibrates at and was now fluent in it.\n\nAfterward, in the quiet that follows violence when everyone is still processing whether they survived, she sat down next to you with a nose that was bleeding slightly and hands that were steadier than they had any right to be.\n\n"Yuji," she said — meaning you, meaning the context you share with him, meaning the strange gravity of this trio that formed in a high school in Tokyo and became something more durable than any of you planned — "if you die before me, I will be furious."\n\nIt is not a declaration of tenderness. Nobara does not traffic in those. It is something more specifically herself: a demand, a threat, and an admission all at once. She is here. She is fighting beside you. She intends to keep doing it, and she intends for you to hold up your end.\n\n"Likewise," you say.\n\nShe snorts. Then she gets up and walks back toward the fight with the particular Nobara Kugisaki gait that you've learned to read as confidence so total it has lapped back around to being casual.\n\nYou follow. There is nothing else to do, and nowhere you'd rather be.`,scene:'action',mood:'#8b4513',characters:['Nobara Kugisaki','Mahito','Yuji Itadori'],effects:{stats:{cou:3,emp:2},relationships:{nobara:5,yuji:3},flags:{black_flash_witnessed:true,nobara_resonance_seen:true,trio_bond_strengthened:true}},choices:[{text:'Fight back-to-back with Nobara. Use her Resonance to coordinate a decisive strike on Mahito.',next:'jjk_mahito_encounter',effects:{stats:{cou:3},relationships:{nobara:3},flags:{coordinated_attack:true}}},{text:'Push toward Domain Expansion — it\'s the only way to end this at Mahito\'s level.',next:'jjk_domain_expansion',effects:{stats:{cou:2,int:2},flags:{domain_expansion_attempted:true}}},{text:'Get Nobara clear and regroup. A Black Flash takes everything — she needs a moment.',next:'jjk_first_mission',effects:{stats:{emp:2,wis:1},relationships:{nobara:4}}}]};
JJK_NODES.jjk_toji_fushiguro = {text:`The file is unmarked. No classification stamp, no case number — just a plain manila folder tucked behind three layers of sealed archives in Jujutsu High's restricted section. Someone did not want this found. Someone else made sure it could be.\n\nToji Fushiguro. Megumi's father. A man born into the Zenin clan with zero cursed energy — and who became the most dangerous assassin the jujutsu world had ever seen precisely because of it. He compensated with physical ability so refined it transcended human limits, and weapons stored in an inventory curse that followed him like a shadow.\n\nThe file details his missions. His kills. The sorcerers he dismantled — Grade 1, Special Grade, it didn't matter. Without cursed energy, he was invisible to jujutsu detection. A ghost in a world built on sensing spiritual pressure.\n\nAnd then: the Star Plasma Vessel mission. Riko Amanai. The assignment that brought him face to face with Gojo Satoru — and changed everything.`,scene:'investigation',mood:'#2a0845',characters:['Megumi'],effects:{stats:{int:2},relationships:{megumi:2},flags:{toji_file_read:true}},choices:[{text:'Tell Megumi what you found about his father.',next:'jjk_first_mission',effects:{relationships:{megumi:3}}},{text:'Keep this information to yourself for now.',next:'jjk_first_mission_briefing',effects:{stats:{int:1}}}]};
JJK_NODES.jjk_todo_friendship = {text:`He finds you at three in the morning, sitting on the roof of Jujutsu High with your knees drawn up and your thoughts running in circles that lead nowhere productive. You did not hear him approach — which is alarming, given that Aoi Todo is approximately the size of a small building and has never done anything quietly in his life.\n\n"Best friend," he says, sitting down beside you with the casual confidence of someone who has decided the relationship and sees no reason to consult you about it. "You are thinking too much. I can hear it from my room."\n\n"Your room is in Kyoto."\n\n"Exactly." He cracks his knuckles. "So. What is the problem? And do not say 'nothing.' I will know."\n\nYou tell him. About Sukuna. About the fear that lives in the gap between your heartbeats — that you are a vessel carrying something that will destroy everyone you care about. That every day you don't lose control is borrowed time.\n\nTodo listens. He does not interrupt. This is, you realize, the most alarming thing about him — that beneath the theatrical machismo and the obsessive ranking of female idols, there is a person who pays attention.\n\n"You are asking the wrong question," he says finally. "The question is not whether you will lose control. The question is: what kind of man will you be in the moments when you haven't?"`,scene:'rooftop',mood:'#4a148c',characters:['Todo'],effects:{stats:{cou:2,cha:1},relationships:{todo:3},flags:{todo_rooftop_talk:true}},choices:[{text:'"What kind of man are you, Todo?"',next:'jjk_first_mission',effects:{relationships:{todo:2}}},{text:'Train with Todo right now. Channel the anxiety into something useful.',next:'jjk_first_mission_briefing',effects:{stats:{str:1,cou:1}}}]};
JJK_NODES.jjk_idle_transfiguration = {text:`You feel it before you understand it. A wrongness — not in the world around you, but in you. In the architecture of what you are. Something is reaching into the space between your cells and rearranging the furniture, and the sensation is so fundamentally violating that your mind rejects it before your body can even begin to react.\n\nIdle Transfiguration. Mahito's cursed technique — the ability to reshape the soul itself, and through it, the body. He is touching you, and where he touches, you are becoming something else.\n\nBut then Sukuna stirs.\n\nNot in alliance. Not in protection. In territorial fury. The King of Curses does not permit others to touch what is his — and your soul, for better or worse, is currently his address. The cursed energy that erupts from within you is not yours. It is ancient and absolute and it hits Mahito like a wall.\n\nMahito recoils. His grin falters for the first time.\n\n"Interesting," he says, but his voice is different now. Careful. "The vessel has a landlord."`,scene:'action',mood:'#d63031',characters:['Mahito'],effects:{stats:{cou:2},flags:{idle_transfiguration_survived:true,sukuna_intervened:true}},choices:[{text:'Press the advantage while Mahito is off-balance.',next:'jjk_mahito_encounter',effects:{stats:{cou:2}}},{text:'Retreat and regroup. Sukuna helping you is not a good sign.',next:'jjk_sukuna_vessel',effects:{stats:{int:1}}}]};
JJK_NODES.jjk_prison_realm_rescue = {text:`The plan is insane. Everyone in the room knows it. Yuji knows it. Megumi knows it. Choso, standing in the corner with his arms crossed and his blood stirring beneath his skin, knows it. Even Angel — the thousand-year-old sorcerer wearing the body of a girl named Hana Kurusu, whose cursed technique can extinguish any other technique in existence — even she regards the briefing materials with an expression that suggests divinity has limits.\n\nThe Prison Realm. A living barrier technique that sealed Gojo Satoru — the strongest sorcerer alive — inside a dimension of infinite time. To open it, you need Angel's technique: Jacob's Ladder, the only power capable of extinguishing the seal.\n\nBut Kenjaku knows you're coming. And between you and the Prison Realm stands the Culling Game — a tournament of death designed to generate the cursed energy needed for Kenjaku's true objective.\n\n"We go through the game," Megumi says quietly. "We survive it. We reach Angel. We free Gojo-sensei. And then we end this."\n\nSimple. Impossible. Necessary.`,scene:'briefing',mood:'#1a237e',characters:['Megumi','Yuji'],effects:{stats:{int:2,cou:1},flags:{prison_realm_plan:true}},choices:[{text:'Enter the Culling Game. There is no other path.',next:'jjk_culling_game',effects:{stats:{cou:2}}},{text:'Seek out more allies before entering. You need every advantage.',next:'jjk_first_mission',effects:{stats:{int:1},relationships:{megumi:1}}}]};

/*
=== EXISTING NODE UPDATES ===

The following existing nodes should receive new choices linking to the new expansion nodes:

jjk_mahito_encounter
  - Add choice: 'Recall what you know of Mechamaru\'s sacrifice against Mahito. His notes might reveal a weakness.'
    next: 'jjk_mechamaru_betrayal'
  - Add choice: 'Nobara moves in with Resonance, Black Flash ready — coordinate with her now.'
    next: 'jjk_nobara_resonance'

jjk_sukuna_vessel
  - Add choice: 'You think about Choso — a being of mixed blood who also exists between worlds. Seek him out.'
    next: 'jjk_choso_brotherhood'

jjk_culling_game
  - Add choice: 'The game\'s scale hints at a designer. Investigate who built the rules and why.'
    next: 'jjk_kenjaku_grand_plan'
  - Add choice: 'A mysterious special-grade sorcerer named Yuki has been studying the game\'s origins.'
    next: 'jjk_yuki_theory'

jjk_gojo_sealed
  - Add choice: 'Piece together who orchestrated the sealing — the ancient sorcerer wearing Geto\'s face.'
    next: 'jjk_kenjaku_grand_plan'

jjk_first_mission
  - Add choice: 'Nobara insists on coming. Fighting beside her feels different from fighting alone.'
    next: 'jjk_nobara_resonance'

jjk_shibuya_incident
  - Add choice: 'Choso is in the chaos — and something about the way he looks at you has changed.'
    next: 'jjk_choso_brotherhood'
  - Add choice: 'The incident has Kenjaku\'s fingerprints everywhere. Start connecting the threads.'
    next: 'jjk_kenjaku_grand_plan'
*/


// ============================================================
// SCENARIO DATA — DEATH NOTE: REWRITTEN
// ============================================================
window.SCEN_NODES['jjk'] = JJK_NODES;
})();
