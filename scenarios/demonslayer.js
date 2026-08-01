// Scenario data: demonslayer  (DS_NODES)
// Split out of scenario-generator.html on 2026-08-01.
// Edit THIS file to change this scenario — the main file no longer holds node data.
window.SCEN_NODES = window.SCEN_NODES || {};
(function(){
const DS_NODES = {};

// ---- ARC 1: TRAGEDY & TRAINING ----

DS_NODES.ds_start = {text:`The mountain air is cold and clean. Your family\`s charcoal-selling business is small, but it keeps food on the table. You have siblings. Parents. A home.

You had all of those things until last night.

You returned from a delivery run to find blood in the snow. Your family — slaughtered. Claw marks on the walls. The stench of something inhuman. Only your younger sister survived, but she is... changed. Her eyes are wild. Her teeth have grown. She snarls when you approach.

A demon did this. And your sister is becoming one.

A man appears on the mountain path. White haori, scarred face, a fox mask at his hip. Sakonji Urokodaki, former Water Hashira. He takes one look at your sister, one look at you, and says:

"If you want to save her, you will need to become a Demon Slayer. I will train you. But I warn you — most of my students die."`,scene:'calm',mood:'#1a0a2e',characters:['Urokodaki'],choices:[{text:`"I will do whatever it takes. She is all I have left."`,next:'ds_training_begin',effects:{stats:{cou:1},rel:{urokodaki:1}}},{text:`"Train me. I will kill every demon until I find a cure."`,next:'ds_training_begin',effects:{stats:{str:1},flags:{vow_vengeance:true}}},{text:`"Is there really a way to turn her back?"`,next:'ds_urokodaki_truth',effects:{stats:{int:1}}}]};

DS_NODES.ds_urokodaki_truth = {text:`Urokodaki is silent for a long time. The wind howls through the cedar trees.

"There may be a way," he says finally. "Demons are created by one being — Kibutsuji Muzan. His blood transforms humans. If his blood holds the key to the curse, it may also hold the key to a cure. But no demon has ever been turned back."

He looks at your sister, who is cowering from the sunlight under a blanket. Most demons would have attacked you by now. She hasn\`t.

"Your sister is... unusual. She resists. That is rare. Perhaps unique. It gives me hope."

He turns and begins walking down the mountain. "Follow me. Training begins at dawn."`,scene:'calm',mood:'#1a0a2e',characters:['Urokodaki'],effects:{rel:{urokodaki:1},flags:{knows_muzan:true}},choices:[{text:'Follow him without another word.',next:'ds_training_begin',effects:{stats:{per:1}}},{text:`"What is your name, old man?"`,next:'ds_training_begin',effects:{rel:{urokodaki:1}}}]};

DS_NODES.ds_training_begin = {text:`Two years of hell.

Urokodaki\`s training is brutal. He sends you down the mountain at night to find your way back — through forests filled with traps he set himself. He makes you breathe underwater. He forces you to swing a wooden sword ten thousand times until your arms feel like they will fall off.

Total Concentration Breathing. That is the foundation. You learn to control your breath so precisely that your body operates beyond human limits — faster, stronger, more resilient. The air itself becomes your weapon.

Your sister sleeps in a bamboo-sealed room during the day. At night, she watches you train with those strange pink eyes. She never attacks. She even seems to... cheer you on, in her own silent way.

One morning, Urokodaki places a massive boulder in front of you. "Split this," he says. "When you can, you are ready for Final Selection."`,scene:'action',mood:'#2a3a1a',characters:['Urokodaki'],choices:[{text:'Train alone. Push yourself past every limit.',next:'ds_boulder_solo',effects:{stats:{str:1}}},{text:'Study the boulder. Look for weaknesses in the stone.',next:'ds_boulder_smart',effects:{stats:{int:1}}},{text:'Ask Urokodaki for guidance on the technique.',next:'ds_boulder_guided',effects:{rel:{urokodaki:1},stats:{per:1}}}]};

DS_NODES.ds_boulder_solo = {text:`Weeks pass. Your hands bleed. The sword chips. The boulder does not move.

Then one night, two spirits appear — Sabito and Makomo. Former students of Urokodaki. Both dead. Both killed during Final Selection.

Sabito is fierce, aggressive. He attacks you with a wooden sword and beats you senseless. "You are too slow! Too weak! Urokodaki\`s students keep dying because they hesitate!"

Makomo is gentle. She corrects your form, adjusts your breathing, whispers the secrets of Water Breathing that Urokodaki cannot bring himself to teach — because every student he teaches them to reminds him of the ones he lost.

On the last night, Sabito comes at you with a real sword. You meet his blade. Total Concentration — Water Breathing, First Form.

The boulder splits clean in half. Sabito smiles and vanishes.`,scene:'action',mood:'#0a3a3a',characters:['Sabito','Makomo'],effects:{stats:{str:1,cou:1},flags:{met_spirits:true}},choices:[{text:'Head to Final Selection. You are ready.',next:'ds_final_selection'},{text:'Train one more week. Perfect your breathing.',next:'ds_final_selection',effects:{stats:{per:1}}}]};

DS_NODES.ds_boulder_smart = {text:`You study the boulder for days. You notice hairline fractures in the stone, stress points where the mineral composition changes. Every material has a weakness.

But knowing where to strike is not enough. You need the power to strike there.

Two spirits appear — Sabito and Makomo. Former students of Urokodaki, killed during Final Selection. Sabito challenges you. Makomo teaches you. Together, they forge you into something sharper.

"You think too much," Sabito says, launching a downward strike. "Your brain is fast but your body is slow. Make them the same speed."

He is right. You stop analyzing and start feeling. The breath flows. The sword follows. Total Concentration — and the boulder splits along the exact fracture line you identified weeks ago.

Intelligence guided by instinct. That is your edge.`,scene:'action',mood:'#0a3a3a',characters:['Sabito','Makomo'],effects:{stats:{int:1,per:1},flags:{met_spirits:true}},choices:[{text:'Head to Final Selection.',next:'ds_final_selection'}]};

DS_NODES.ds_boulder_guided = {text:`Urokodaki watches you struggle for weeks. Then, quietly, he begins to correct your form. A hand on your elbow. A tap on your hip. "Lower. Wider. Breathe from here, not here."

He has lost too many students. You can see it in his eyes — the fear that you will be next. But he teaches you anyway, because not teaching you would be worse.

Two spirits join your training — Sabito and Makomo. Urokodaki\`s dead students. Sabito pushes you past your limits. Makomo refines your technique. The old man pretends not to see them, but you catch him wiping his eyes when Makomo corrects your stance the same way he used to correct hers.

The boulder splits. Urokodaki puts his hand on your shoulder. "Do not die," he says. It is both a command and a prayer.`,scene:'calm',mood:'#0a3a3a',characters:['Urokodaki','Sabito','Makomo'],effects:{rel:{urokodaki:2},stats:{per:1},flags:{met_spirits:true}},choices:[{text:'Head to Final Selection.',next:'ds_final_selection'}]};

DS_NODES.ds_final_selection = {text:`Mount Fujikasane. The wisteria forest.

Dozens of young swordsmen and swordswomen stand at the base of the mountain. You must survive seven nights on a mountain filled with captured demons. The wisteria keeps them contained — but inside the boundary, it is a hunting ground.

You notice a few faces in the crowd. A boy with burgundy hair and gentle eyes — he has a scar on his forehead and hanafuda earrings. Tanjiro Kamado. A terrified blond boy clutching his sword like a lifeline — Zenitsu Agatsuma. A wild-looking fighter with a boar mask — Inosuke Hashibira.

The gates open. The sun sets. The demons come alive.`,scene:'action',mood:'#660000',characters:['Tanjiro','Zenitsu','Inosuke'],choices:[{text:'Stick with Tanjiro. He seems capable and kind.',next:'ds_fs_tanjiro',effects:{rel:{tanjiro:2}}},{text:'Go alone. You need to prove yourself.',next:'ds_fs_solo',effects:{stats:{cou:1}}},{text:'Protect Zenitsu. The boy is about to collapse.',next:'ds_fs_zenitsu',effects:{rel:{zenitsu:2}}}]};

DS_NODES.ds_fs_tanjiro = {text:`You fall in beside Tanjiro. He nods — no words needed. His sense of smell is extraordinary; he can detect demons before they appear.

"There is one ahead," he whispers. "Big. Old. It has been here a long time."

He is right. A massive demon crashes through the trees — the Hand Demon. Enormous, covered in arms, consumed by rage. It screams about Urokodaki. It has killed thirteen of his students. It wants to kill more.

"You wear Urokodaki\`s fox mask!" it shrieks, staring at both of you. "I will eat you both!"`,scene:'action',mood:'#660000',characters:['Tanjiro'],effects:{flags:{with_tanjiro_fs:true}},choices:[{text:'Attack together with Tanjiro — coordinated strike.',next:'ds_hand_demon_team',effects:{rel:{tanjiro:1},stats:{str:1}},check:{stat:'str',dc:10,pass:'ds_hand_demon_team',fail:'ds_hand_demon_hurt'}},{text:'Distract the demon while Tanjiro finds the opening.',next:'ds_hand_demon_distract',effects:{stats:{cou:1}}},{text:'Let Tanjiro take the lead. Support from behind.',next:'ds_hand_demon_support',effects:{stats:{int:1}}}]};

DS_NODES.ds_fs_solo = {text:`You move through the forest alone. The moonlight barely penetrates the canopy. Every shadow could be a demon.

Three smaller demons find you in the first hour. You dispatch them — barely. Your breathing technique holds, but you are burning through stamina.

On the third night, you encounter the Hand Demon. Massive. Ancient. Covered in stolen arms. It killed thirteen of Urokodaki\`s students.

"Another fox mask," it hisses. "How delicious."`,scene:'action',mood:'#660000',effects:{stats:{cou:1}},choices:[{text:'Face it head-on. Total Concentration.',next:'ds_hand_demon_solo',check:{stat:'str',dc:12,pass:'ds_hand_demon_solo',fail:'ds_hand_demon_hurt'}},{text:'Retreat and find other slayers to team up.',next:'ds_hand_demon_team',effects:{rel:{tanjiro:1}}}]};

DS_NODES.ds_fs_zenitsu = {text:`Zenitsu is on the ground, crying. Actually sobbing. "I do not want to die! I was forced into this! My grandpa made me!"

A demon lunges from the trees. You cut it down mid-leap. Zenitsu screams louder.

But then something strange happens. On the second night, a demon attacks while Zenitsu is unconscious — and the boy moves like lightning. One slash. Perfect form. Thunder Breathing, First Form: Thunderclap and Flash. The demon\`s head rolls.

He wakes up with no memory of it. "Did... did you save me?" he asks, eyes brimming with gratitude.

You survived together for five nights. On the sixth, you encounter the Hand Demon.`,scene:'action',mood:'#660000',characters:['Zenitsu'],effects:{flags:{protected_zenitsu:true}},choices:[{text:'Fight the Hand Demon together.',next:'ds_hand_demon_team',effects:{rel:{zenitsu:1}}},{text:'Tell Zenitsu to stay back. This one is yours.',next:'ds_hand_demon_solo',check:{stat:'str',dc:12,pass:'ds_hand_demon_solo',fail:'ds_hand_demon_hurt'}}]};

DS_NODES.ds_hand_demon_team = {text:`You and Tanjiro move in sync. The Hand Demon swings its massive limbs — arms upon arms upon arms — but you dodge and weave.

Tanjiro uses Water Breathing. You use yours. The demon cannot track both of you.

"Its neck!" Tanjiro shouts. You see it — beneath the forest of stolen arms, the neck is exposed. You both strike at the same moment. Two blades, one clean cut.

The Hand Demon\`s head tumbles. As it dissolves, it cries. It was a child once, before Muzan turned it. It forgot what kindness felt like.

Tanjiro holds its disintegrating hand. "I am sorry," he whispers. Even to a demon that tried to kill him.

You understand then what makes Tanjiro different. His compassion is not weakness. It is the strongest thing about him.`,scene:'action',mood:'#0a3a3a',characters:['Tanjiro'],effects:{rel:{tanjiro:2},stats:{str:1}},choices:[{text:'Survive the remaining nights. Pass Final Selection.',next:'ds_pass_selection'}]};

DS_NODES.ds_hand_demon_solo = {text:`Total Concentration. Every breath counts.

The Hand Demon is fast for its size. Arms lash out from impossible angles. You take a hit to the shoulder — feel ribs crack — but your breathing holds. Pain is information. Use it.

You feint left, drop low, and drive your blade upward through the demon\`s neck. One clean stroke.

As it dies, the Hand Demon weeps. It was a child once. Muzan\`s blood stole everything from it — humanity, memory, mercy. In its final moment, it reaches out not to attack, but to hold someone\`s hand.

You take it. The demon dissolves into ash, and you stand alone in the moonlight, bleeding but alive.`,scene:'action',mood:'#0a3a3a',effects:{stats:{str:2,cou:1}},choices:[{text:'Survive the remaining nights. Pass Final Selection.',next:'ds_pass_selection'}]};

DS_NODES.ds_hand_demon_hurt = {text:`The Hand Demon catches you. Arms wrap around your torso, squeezing. Ribs crack. Your vision blurs.

But your breathing holds — barely. Total Concentration keeps your muscles from collapsing entirely. You twist, find an angle, and slash desperately at the neck.

It is not clean. It takes three cuts. But the head comes off. The demon dissolves, weeping, reaching for a hand to hold.

You collapse in the dirt, coughing blood. But you are alive. Barely.

A gentle hand steadies you. Tanjiro. "Let me help you. We will get through this together."`,scene:'action',mood:'#660000',characters:['Tanjiro'],effects:{stats:{str:-1,cou:1},rel:{tanjiro:2}},choices:[{text:'Accept his help. Survive together.',next:'ds_pass_selection'}]};

DS_NODES.ds_hand_demon_distract = {text:`You charge the Hand Demon head-on, sword raised, screaming. Every arm swings at you — you deflect, dodge, roll. Your body takes hits. Your breathing stutters but holds.

"NOW!" you shout.

Tanjiro appears behind the demon. Water Breathing, First Form — Water Surface Slash. A perfect horizontal arc. The Head Demon\`s neck separates cleanly.

As it dissolves, it cries. Even monsters mourn. Tanjiro holds its fading hand with tears in his eyes.

You are bruised, bleeding, exhausted. But the demon is dead, and you are alive. That is the trade.`,scene:'action',mood:'#0a3a3a',characters:['Tanjiro'],effects:{rel:{tanjiro:2},stats:{cou:1}},choices:[{text:'Survive the remaining nights.',next:'ds_pass_selection'}]};

DS_NODES.ds_hand_demon_support = {text:`You hang back, reading the demon\`s patterns. Every arm has a rhythm. Every swing has a recovery window. You call them out.

"Left side, two seconds! Roll right! NOW — the neck is exposed!"

Tanjiro trusts your calls without hesitation. Water Breathing flows through him like a river. He dances between the arms, following your directions, and delivers the killing blow.

The Hand Demon dissolves in tears. Tanjiro mourns it. You catalog its patterns in your memory — information that will save lives in future fights.`,scene:'action',mood:'#0a3a3a',characters:['Tanjiro'],effects:{rel:{tanjiro:2},stats:{int:1,per:1}},choices:[{text:'Survive the remaining nights.',next:'ds_pass_selection'}]};

DS_NODES.ds_pass_selection = {text:`Seven days. You survived.

Twenty candidates entered. Four walk out: you, Tanjiro, Zenitsu, and Inosuke. The wild boar-masked fighter fought alone, apparently killed every demon he encountered through sheer aggression.

You receive your Nichirin sword — a blade forged from ore that absorbs sunlight, the only material that can truly kill a demon. The color it turns when you draw it reflects your breathing style and soul.

The Kasugai crow arrives — your personal messenger bird. Your sister waits at Urokodaki\`s home, safe in her bamboo box.

You are now a Demon Slayer. The real work begins.`,scene:'calm',mood:'#0a3a3a',characters:['Tanjiro','Zenitsu','Inosuke'],effects:{flags:{demon_slayer:true}},choices:[{text:'Take your first mission immediately. No time to rest.',next:'ds_first_mission',effects:{stats:{cou:1}}},{text:'Visit Urokodaki and your sister first.',next:'ds_visit_sister',effects:{rel:{urokodaki:1}}},{text:'Train with Tanjiro before your first mission.',next:'ds_train_tanjiro',effects:{rel:{tanjiro:1},stats:{str:1}}}]};

// ---- ARC 2: FIRST MISSIONS & ALLIES ----

DS_NODES.ds_visit_sister = {text:`Your sister is alive. Changed, but alive. She sleeps in a bamboo-sealed room during the day, protected from sunlight. At night, she watches you with those pink demon eyes — but there is recognition in them. Love, even.

Urokodaki carved a bamboo muzzle for her. She wears it without complaint. She does not attack humans. She does not feed on flesh. She sleeps to recover energy instead of consuming blood.

"She is extraordinary," Urokodaki says. "In all my years, I have never seen a demon resist the hunger like this. Protect her. And find a cure."

He hands you a new haori — the same pattern as his. Water-wave blue. "Do not die."`,scene:'calm',mood:'#1a3a5a',characters:['Urokodaki'],effects:{rel:{urokodaki:2},flags:{sister_visit:true}},choices:[{text:'Head out for your first mission.',next:'ds_first_mission'}]};

DS_NODES.ds_train_tanjiro = {text:`You and Tanjiro spar in the mountain clearing. His Water Breathing is fluid, instinctive. But you notice something — when he gets emotional, his breathing changes. Becomes sharper. Hotter. Like fire.

"My father used a dance," Tanjiro says quietly, rubbing his hanafuda earrings. "A dance by the fire. I remember the breathing. It was different from Water Breathing. I do not know what it was."

Hinokami Kagura. He does not know it yet, but he is carrying the legacy of the first breath — Sun Breathing. The original technique that all other styles descended from.

You file this away. It may matter later.`,scene:'calm',mood:'#2a3a1a',characters:['Tanjiro'],effects:{rel:{tanjiro:2},stats:{int:1},flags:{knows_hinokami:true}},choices:[{text:'Take your first mission.',next:'ds_first_mission'}]};

DS_NODES.ds_first_mission = {text:`Your crow screams coordinates. A town in the countryside — people disappearing at night. Classic demon territory.

You arrive to find the town terrorized by a demon that hides in the shadows, pulling victims into the darkness. The townspeople are terrified. A young girl is missing — taken last night.

You track the demon to an abandoned temple on the edge of town. The smell of blood is thick.`,scene:'action',mood:'#660000',choices:[{text:'Charge in. The girl might still be alive.',next:'ds_temple_charge',effects:{stats:{cou:1}},check:{stat:'cou',dc:9,pass:'ds_temple_charge',fail:'ds_temple_ambush'}},{text:'Scout the perimeter. Find every entrance and exit.',next:'ds_temple_scout',effects:{stats:{per:1}}},{text:'Wait for dawn. The demon will be weakest then.',next:'ds_temple_dawn',effects:{stats:{int:1}}}]};

DS_NODES.ds_temple_charge = {text:`You kick down the temple door. Inside — darkness. Total, unnatural darkness. The demon\`s Blood Art.

Your breathing cuts through the illusion. Total Concentration sharpens your senses. You feel the air pressure shift as the demon lunges.

One slash. Clean. The demon dissolves. The girl is in the corner, terrified but alive.

Your first kill as an official Demon Slayer. The girl clings to you and cries. The townspeople cheer. But you feel the weight of it — the demon was someone\`s child once, too.`,scene:'action',mood:'#0a3a3a',effects:{stats:{str:1},flags:{first_mission_complete:true}},choices:[{text:'Move on to the next mission.',next:'ds_meet_hashira'}]};

DS_NODES.ds_temple_ambush = {text:`The demon is faster than you expected. It catches you in its Blood Art — total darkness. You cannot see your own sword.

But your breathing holds. Total Concentration. You feel the air. You hear the demon\`s movements. A claw rakes your back — pain blooms — but you pivot and slash blind.

The cut connects. Not clean — the demon screams, regenerates, attacks again. You take another hit. Blood runs down your arm.

Second slash. Closer. Third slash — the neck. The demon dissolves.

The girl is alive. You are injured. But you won. Your crow arrives with medical supplies and a message: "Report to the Butterfly Mansion for treatment."`,scene:'action',mood:'#660000',effects:{stats:{str:-1,cou:1},flags:{first_mission_injured:true}},choices:[{text:'Head to the Butterfly Mansion.',next:'ds_butterfly_mansion'}]};

DS_NODES.ds_temple_scout = {text:`Patience saves lives. You circle the temple, find a hole in the roof, and drop in silently behind the demon.

It is feeding — or about to. The girl is bound in webbing made of shadow. The demon\`s back is to you. Its neck is exposed.

One breath. One cut. The demon never even knew you were there.

The girl is safe. The town is grateful. Your crow screams: "Mission complete! Next assignment!"`,scene:'action',mood:'#0a3a3a',effects:{stats:{per:1,int:1},flags:{first_mission_complete:true}},choices:[{text:'Move on.',next:'ds_meet_hashira'}]};

DS_NODES.ds_temple_dawn = {text:`You wait through the night, guarding the temple perimeter. At dawn, you enter. The demon is weakened by the approaching sunlight — sluggish, panicked.

It tries to flee deeper underground. You cut off its escape. One clean strike in the narrow corridor. The head rolls.

The girl is alive, dehydrated but unharmed. You carry her back to town as the sun rises.

Strategic. Patient. Effective. Your crow approves.`,scene:'calm',mood:'#0a3a3a',effects:{stats:{int:1},flags:{first_mission_complete:true}},choices:[{text:'Move on to the next mission.',next:'ds_meet_hashira'}]};

DS_NODES.ds_butterfly_mansion = {text:`The Butterfly Mansion. Headquarters of Shinobu Kocho, the Insect Hashira. She is small, always smiling, and absolutely terrifying. Her sword cannot cut a demon\`s neck — so she poisons them instead.

"My, my, another broken slayer," she says, examining your wounds. "You young ones are so eager to get hurt."

Her assistants — Aoi, Naho, Kiyo, Sumi — patch you up. The training regimen here is brutal in its own way: Total Concentration Breathing, constant. Even in your sleep.

You meet Tanjiro, Zenitsu, and Inosuke here too. All recovering from their own missions.

Tanjiro grins. "We keep running into each other. Maybe it is fate."`,scene:'calm',mood:'#1a3a5a',characters:['Shinobu','Tanjiro','Zenitsu','Inosuke'],effects:{rel:{shinobu:1,tanjiro:1},flags:{butterfly_mansion:true}},choices:[{text:'Train with Shinobu. Learn about demon physiology.',next:'ds_meet_hashira',effects:{rel:{shinobu:1},stats:{int:1}}},{text:'Spar with Inosuke. The wild man is relentless.',next:'ds_meet_hashira',effects:{rel:{inosuke:1},stats:{str:1}}},{text:'Practice Total Concentration Breathing through the night.',next:'ds_meet_hashira',effects:{stats:{per:1}}}]};

DS_NODES.ds_meet_hashira = {text:`A summons arrives. All Demon Slayers of your rank are called to a Hashira meeting. The nine most powerful swordsmen in the Corps.

You stand in the courtyard of the Demon Slayer headquarters. They are all there:

Giyu Tomioka — Water Hashira. Silent, stoic, carrying guilt like armor.
Shinobu Kocho — Insect Hashira. Smiling death in a butterfly haori.
Kyojuro Rengoku — Flame Hashira. Burning with enthusiasm and honor.
Tengen Uzui — Sound Hashira. Flamboyant, massive, three wives.
Muichiro Tokito — Mist Hashira. A fourteen-year-old prodigy who forgot himself.
Mitsuri Kanroji — Love Hashira. Gentle heart, superhuman muscle density.
Obanai Iguro — Serpent Hashira. A snake coiled around his neck, trust issues in his eyes.
Sanemi Shinazugawa — Wind Hashira. Scarred, furious, hates demons with every cell.
Gyomei Himejima — Stone Hashira. The strongest. Blind. Always crying.

The Master — Kagaya Ubuyashiki — speaks from behind a screen. His voice is calm and kind, despite the disease eating his face.

"The Twelve Kizuki have begun moving. Upper and Lower Moons. The war is escalating. I need every slayer ready."

Rengoku steps forward, eyes blazing. "I am taking a mission on the Mugen Train. Forty passengers have vanished. I would welcome capable allies."`,scene:'calm',mood:'#1a0a2e',characters:['Rengoku','Giyu','Shinobu'],choices:[{text:'Volunteer for the Mugen Train mission with Rengoku.',next:'ds_mugen_board',effects:{rel:{rengoku:2},stats:{cou:1}}},{text:'Request assignment to the Entertainment District with Tengen.',next:'ds_entertainment_early',effects:{rel:{tengen:1}}},{text:'Ask Giyu to mentor you. His Water Breathing is legendary.',next:'ds_giyu_mentor',effects:{rel:{giyu:2},stats:{per:1}}}]};

// ---- ARC 3: MUGEN TRAIN ----

DS_NODES.ds_giyu_mentor = {text:`Giyu stares at you for an uncomfortably long time. Then: "I am not a Hashira."

Everyone in the room looks confused. He clearly is. He wears the uniform. He holds the rank.

"I failed the Final Selection through a technicality," he says. "Sabito killed every demon on the mountain. I did not cut a single one. I do not deserve this title."

Survivor\`s guilt. Deep and corrosive. But his Water Breathing is perfect — the most refined you have ever seen. He agrees to train you, if only because refusing would require more words.

After three weeks of intense training under Giyu, your crow screams: "EMERGENCY! MUGEN TRAIN! FLAME HASHIRA NEEDS BACKUP!"`,scene:'calm',mood:'#1a3a5a',characters:['Giyu'],effects:{rel:{giyu:3},stats:{per:2},flags:{giyu_trained:true}},choices:[{text:'Rush to the Mugen Train immediately.',next:'ds_mugen_board',effects:{stats:{cou:1}}},{text:'Ask Giyu to come with you.',next:'ds_mugen_board',effects:{rel:{giyu:1}}}]};

DS_NODES.ds_entertainment_early = {text:`Tengen laughs — a booming, flamboyant sound. "You want to join ME? I like your style, kid. But the Entertainment District mission is not ready yet. My wives are still gathering intelligence."

He claps you on the back hard enough to crack a rib. "Tell you what — go help Rengoku on the train first. When you are done, come find me. The Entertainment District will need warriors with experience."

He winks. Three kunai appear between his fingers as if by magic.

Your crow confirms: Mugen Train first, then the District.`,scene:'calm',mood:'#cc6600',characters:['Tengen'],effects:{rel:{tengen:2},flags:{tengen_promised:true}},choices:[{text:'Head to the Mugen Train.',next:'ds_mugen_board'}]};

DS_NODES.ds_mugen_board = {text:`The Mugen Train. Two hundred tons of steel hurtling through the night with forty passengers aboard. Somewhere inside, a demon is feeding.

You board with Tanjiro, Zenitsu, and Inosuke. Rengoku is already inside, eating his eleventh bento box with terrifying enthusiasm. "DELICIOUS! Absolutely delicious!"

He spots you. His eyes — golden, burning — light up. "Reinforcements! Excellent! Sit! Eat! We fight demons on full stomachs!"

The train rocks. The lights flicker. Something is wrong. The air grows heavy with a sweet, cloying scent.

Your eyelids get heavy. So heavy. The demon\`s Blood Art — Enmu, Lower Moon One. He puts you to sleep.

You are falling into a dream.`,scene:'action',mood:'#1a0a2e',characters:['Rengoku','Tanjiro','Zenitsu','Inosuke'],effects:{rel:{rengoku:2}},choices:[{text:'Fight the sleep. Total Concentration Breathing.',next:'ds_resist_dream',check:{stat:'per',dc:11,pass:'ds_resist_dream',fail:'ds_dream_world'}},{text:'Let yourself fall asleep. Fight from within the dream.',next:'ds_dream_world',effects:{stats:{int:1}}},{text:'Bite your tongue. Pain breaks the spell.',next:'ds_resist_dream',effects:{stats:{cou:1}}}]};

DS_NODES.ds_dream_world = {text:`You are home. Your family is alive. Your sister is human. The sun is warm. The charcoal business is thriving. Everything you lost — restored.

It feels real. It smells real. Your mother\`s cooking. Your siblings\` laughter.

But something is wrong. The edges of the world shimmer. The colors are too bright. And deep in your chest, your breathing technique pulses with a warning — this is not real. This is the demon\`s trap.

Your subconscious knows. To escape, you must destroy what you want most — you must kill yourself within the dream.`,scene:'calm',mood:'#6600aa',choices:[{text:'Destroy the dream. Slit your own throat within the illusion.',next:'ds_dream_break',effects:{stats:{cou:2}}},{text:'Search for the dream\`s core — the spiritual thread connecting you to the demon.',next:'ds_dream_break',effects:{stats:{int:1,per:1}}},{text:'Linger. Just one more moment with your family.',next:'ds_dream_linger',effects:{stats:{str:-1}}}]};

DS_NODES.ds_resist_dream = {text:`Your breathing technique burns through the demon\`s Blood Art. The drowsiness hits like a wall but you push through — Total Concentration keeps your mind sharp.

Around you, everyone else has collapsed. Tanjiro is asleep. Zenitsu is asleep (though muttering about someone named Nezuko). Inosuke is asleep, somehow still angry. Even Rengoku\`s eyes are closed, though his hand still grips his sword.

You are the only one awake on a train full of sleeping prey, with a demon somewhere in the darkness.

Then you see them — thin, tendril-like threads connecting the sleeping passengers to something underneath the train. Enmu\`s Blood Art. He is feeding on their dreams.`,scene:'action',mood:'#1a0a2e',effects:{stats:{per:1},flags:{resisted_dream:true}},choices:[{text:'Cut the threads. Free the sleepers.',next:'ds_dream_break',effects:{stats:{str:1}}},{text:'Follow the threads to Enmu. Find the demon itself.',next:'ds_enmu_fight',effects:{stats:{cou:1}}}]};

DS_NODES.ds_dream_linger = {text:`Just one more moment. Your mother smiles. Your sister — human, whole, laughing — grabs your hand. "Stay with us. You have been gone so long."

But your breathing will not let you forget. Every inhale screams: THIS IS A LIE.

The dream cracks. Your family\`s faces distort. Your sister\`s eyes turn pink. Demon pink. She opens her mouth and the bamboo muzzle appears.

She is telling you to wake up. Even in the demon\`s illusion, your sister fights for you.

You break free. The dream shatters like glass, and you are back on the train, gasping, crying, furious.`,scene:'action',mood:'#6600aa',effects:{stats:{cou:1}},choices:[{text:'Find Enmu. End this.',next:'ds_enmu_fight'}]};

DS_NODES.ds_dream_break = {text:`You break free of the dream. The train car snaps back into focus — dark, rocking, forty unconscious passengers connected by threads to the demon below.

Tanjiro breaks free moments after you. His eyes are red-rimmed. He saw his family too.

"The demon is fused with the train itself," Tanjiro says, pressing his hand to the floor. "Its blood art has merged with the entire locomotive. We need to find its neck — its core."

Rengoku wakes with a roar. "LOWER MOON! On MY train! Unacceptable!"

The battle plan forms fast: someone needs to protect the passengers above while someone goes below to find Enmu\`s real body.`,scene:'action',mood:'#cc2200',characters:['Tanjiro','Rengoku'],effects:{flags:{dream_broken:true}},choices:[{text:'Go below the train with Tanjiro. Find Enmu\`s neck.',next:'ds_enmu_fight',effects:{rel:{tanjiro:1},stats:{cou:1}}},{text:'Stay above. Protect the passengers with Rengoku.',next:'ds_protect_passengers',effects:{rel:{rengoku:1},stats:{per:1}}}]};

DS_NODES.ds_protect_passengers = {text:`You and Rengoku stand back to back in the center car. Flesh tendrils burst from the walls, the floor, the ceiling — Enmu has merged with the entire train and every surface is a weapon.

Rengoku is magnificent. Flame Breathing erupts from his blade in cascading arcs of fire. First Form — Unknowing Fire. Second Form — Rising Scorching Sun. Each technique is executed with absolute precision and absolute joy.

"SET YOUR HEART ABLAZE!" he roars, cutting through a wave of flesh. "BURN SO BRIGHT THAT EVEN IN DEATH, YOUR FLAME NEVER DIES!"

Below the train, you hear Tanjiro\`s battle cry. A massive shudder runs through the locomotive. Enmu screams.

The train derails.`,scene:'action',mood:'#cc4400',characters:['Rengoku'],effects:{rel:{rengoku:2},stats:{str:1}},choices:[{text:'Brace for the crash.',next:'ds_derail'}]};

DS_NODES.ds_enmu_fight = {text:`Beneath the train, Enmu\`s true form is grotesque — a mass of flesh merged with steel, veins pulsing through the locomotive\`s framework. His neck is hidden somewhere in the fusion of demon and machine.

"Sweet dreams," Enmu whispers. "You could have stayed in the dream. It was kinder."

He attacks — tendrils of flesh, sleep-inducing spores, tentacles of bone. You and Tanjiro fight through it together.

Tanjiro\`s breathing shifts. It is no longer water — it is fire. Hinokami Kagura. Sun Breathing. The oldest and most powerful style. His blade glows red.

Together, you find the neck. Together, you cut.

Enmu — Lower Moon One — dies screaming. The train derails.`,scene:'action',mood:'#cc2200',characters:['Tanjiro'],effects:{rel:{tanjiro:2},stats:{str:1,cou:1}},choices:[{text:'Brace for the crash.',next:'ds_derail'}]};

DS_NODES.ds_derail = {text:`The train hits the ground like a dying beast. Metal screams. Cars jackknife. You are thrown through the air and hit dirt hard enough to see stars.

When the dust settles, the passengers are miraculously alive — Rengoku and the others shielded them. Zenitsu protected an entire car while asleep. Inosuke headbutted a window open and launched people to safety.

But the night is not over.

A new presence appears. The air itself changes temperature. Someone is walking through the wreckage with the calm of a man taking an evening stroll.

Upper Moon Three. Akaza. A demon so powerful that his aura alone makes your lungs burn.

He ignores everyone. His eyes lock onto one person.

Rengoku.

"You are strong," Akaza says, smiling. "Become a demon. Fight me forever."`,scene:'action',mood:'#cc0000',characters:['Rengoku','Akaza'],effects:{flags:{akaza_appears:true}},choices:[{text:'Stand with Rengoku. Face Akaza together.',next:'ds_akaza_fight',effects:{rel:{rengoku:2},stats:{cou:2}}},{text:'Protect the injured. Let Rengoku fight.',next:'ds_akaza_watch',effects:{stats:{per:1}}},{text:'Attack Akaza from behind while he talks.',next:'ds_akaza_ambush',check:{stat:'str',dc:14,pass:'ds_akaza_ambush',fail:'ds_akaza_swat'}}]};

DS_NODES.ds_akaza_ambush = {text:`You launch yourself at Akaza\`s back. Full speed. Total Concentration. Your blade sings toward his neck.

He catches it. Between two fingers. Without looking.

"Brave," he says. "But weak." He flicks you away like an insect. You hit a train car hard enough to dent the steel.

Rengoku steps between you. "Your fight is with me, demon."

Akaza grins. "Finally."`,scene:'action',mood:'#cc0000',characters:['Rengoku','Akaza'],effects:{stats:{str:-1}},choices:[{text:'Get back up. Support Rengoku.',next:'ds_akaza_fight',effects:{stats:{cou:1}}},{text:'Stay down. Protect the others.',next:'ds_akaza_watch'}]};

DS_NODES.ds_akaza_swat = {text:`Akaza moves faster than your eyes can track. His fist connects with your chest and you fly backward, crashing through wreckage. Three ribs crack. Maybe four.

Through blurred vision, you see Rengoku step forward. "That was my comrade you just struck."

The Flame Hashira draws his sword.`,scene:'action',mood:'#cc0000',characters:['Rengoku','Akaza'],effects:{stats:{str:-1}},choices:[{text:'Struggle to your feet. You refuse to stay down.',next:'ds_akaza_fight',effects:{stats:{cou:1}}},{text:'Guard the passengers. That is how you help now.',next:'ds_akaza_watch'}]};

DS_NODES.ds_akaza_fight = {text:`Rengoku fights Akaza. It is the most beautiful and terrifying thing you have ever seen.

Flame Breathing in its full glory — nine forms, each one a supernova. Rengoku moves like the fire itself, each strike illuminating the darkness. Akaza matches him blow for blow, his martial arts enhanced by centuries of demonic power.

You try to help. You get in one cut — across Akaza\`s arm. It regenerates in seconds. He barely notices you.

But Rengoku notices. "GET BACK!" he roars. "Protect them! That is an ORDER!"

He unleashes his final technique. Esoteric Art — Ninth Form: Rengoku. His entire body ignites. The air itself catches fire. For one brilliant moment, he is the sun.

Akaza\`s fist goes through his solar plexus.`,scene:'action',mood:'#cc0000',characters:['Rengoku','Akaza'],effects:{rel:{rengoku:3}},choices:[{text:'Scream. Charge Akaza. You do not care about the odds.',next:'ds_rengoku_death',effects:{stats:{cou:1}}},{text:'Catch Rengoku as he falls.',next:'ds_rengoku_death',effects:{rel:{rengoku:1}}}]};

DS_NODES.ds_akaza_watch = {text:`You guard the passengers. Tanjiro, Zenitsu, Inosuke — all injured. The civilians are terrified.

From the clearing, you hear the battle. Feel the heat. Rengoku\`s flames light up the night sky brighter than any sunrise.

Then silence.

Then Tanjiro\`s scream.`,scene:'action',mood:'#cc0000',characters:['Rengoku','Akaza','Tanjiro'],choices:[{text:'Run to them.',next:'ds_rengoku_death'}]};

DS_NODES.ds_rengoku_death = {text:`Akaza\`s arm is through Rengoku\`s chest. But the Flame Hashira is still standing. Still smiling.

He locks Akaza in place with his remaining strength. The sun is rising. If he can hold the demon until dawn —

Akaza rips free and flees into the forest, escaping the sunlight. A coward in the end.

Rengoku falls. You and Tanjiro reach him at the same time.

"Do not cry," Rengoku says. Blood bubbles from his lips but his eyes are still blazing. "I fulfilled my duty. I protected everyone on this train. Not a single soul was lost."

He looks at Tanjiro. At you. "Set your hearts ablaze. Go forward with unwavering strength. Even if you are sad, even if you are broken — do not stop. Burn brighter."

Kyojuro Rengoku — the Flame Hashira — dies with the sunrise on his face and a smile on his lips.

Tanjiro is screaming. You are silent. The fire is lit, and it will never go out.`,scene:'calm',mood:'#cc4400',characters:['Rengoku','Tanjiro'],effects:{flags:{rengoku_dead:true},stats:{cou:2}},choices:[{text:'Swear to become strong enough that no one dies like this again.',next:'ds_after_mugen',effects:{flags:{vow_strength:true}}},{text:'Swear to kill Akaza. No matter what it takes.',next:'ds_after_mugen',effects:{flags:{vow_akaza:true}}},{text:'Carry Rengoku\`s flame. Become what he believed you could be.',next:'ds_after_mugen',effects:{flags:{carry_flame:true}}}]};

// ---- ARC 4: ENTERTAINMENT DISTRICT ----

DS_NODES.ds_after_mugen = {text:`Weeks pass. You train harder than ever. Rengoku\`s death burns in your chest like an ember that refuses to die.

Total Concentration — Constant. You achieve it. Your body breathes perfectly even in sleep. Your baseline power doubles.

Your crow arrives screaming: "ENTERTAINMENT DISTRICT! SOUND HASHIRA REQUESTS BACKUP! URGENT! URGENT!"

Tengen Uzui. He lost contact with his three wives — kunoichi he sent undercover into the Yoshiwara red-light district. Something is hunting in the pleasure houses.

Tanjiro, Zenitsu, and Inosuke are coming too. Tanjiro looks different — harder, more focused. Rengoku\`s death changed all of you.`,scene:'action',mood:'#cc6600',characters:['Tengen','Tanjiro','Zenitsu','Inosuke'],choices:[{text:'Disguise yourself and infiltrate the district.',next:'ds_district_infiltrate',effects:{stats:{int:1}}},{text:'Go in openly. You are done hiding.',next:'ds_district_open',effects:{stats:{cou:1}}},{text:'Let Tengen brief you first. Intelligence wins battles.',next:'ds_district_brief',effects:{rel:{tengen:1},stats:{per:1}}}]};

DS_NODES.ds_district_infiltrate = {text:`Tengen\`s plan: disguise the four of you as workers in the pleasure houses. Zenitsu goes to the Tokito House. Inosuke to the Ogimoto House. You and Tanjiro split the remaining houses.

The Entertainment District is a maze of lanterns, silk, and secrets. Beautiful on the surface, rotten underneath. And somewhere in the perfumed darkness, a demon is feeding.

You find one of Tengen\`s wives — Makio — locked in a room, bound by silk threads. "It is an oiran," she whispers. "The highest-ranking courtesan. Her name is Daki. She has been here for decades. She is Upper Moon Six."

Upper Moon. The same tier as Akaza. Your blood runs cold.`,scene:'action',mood:'#cc6600',characters:['Tengen'],effects:{flags:{found_makio:true}},choices:[{text:'Free Makio and report to Tengen immediately.',next:'ds_daki_encounter',effects:{rel:{tengen:1}}},{text:'Investigate further. Find the other wives first.',next:'ds_daki_encounter',effects:{stats:{per:1}}}]};

DS_NODES.ds_district_open = {text:`You walk into the Entertainment District in your Demon Slayer uniform, sword at your hip. People stare. A few courtesans giggle behind their fans. A bouncer steps forward — and steps back when he sees the blade.

The direct approach works. Sort of. Word spreads fast. Within an hour, silk threads explode from the most beautiful oiran house in the district. The demon is done hiding.

Her name is Daki. Upper Moon Six. And she is furious that you have disrupted her hunting ground.`,scene:'action',mood:'#cc6600',effects:{stats:{cou:1}},choices:[{text:'Draw your sword. Face her.',next:'ds_daki_encounter'}]};

DS_NODES.ds_district_brief = {text:`Tengen lays out the situation. Three wives undercover. All went dark. The district has reported disappearances for years — courtesans who vanish without a trace. Always the most beautiful ones.

"The demon has been feeding here for over a century," Tengen says, his flamboyant demeanor gone. This is the soldier underneath. "It has replaced its victims seamlessly. No one suspects a thing."

He gives each of you a kunai with a wisteria seal. "If things go sideways, break this. It will mark your location."

Things go sideways within six hours. The demon reveals itself — Daki, Upper Moon Six, posing as the district\`s most prized oiran.`,scene:'action',mood:'#cc6600',characters:['Tengen'],effects:{rel:{tengen:2},flags:{tengen_briefed:true}},choices:[{text:'Engage Daki.',next:'ds_daki_encounter'}]};

DS_NODES.ds_daki_encounter = {text:`Daki is beautiful and terrible. Her obi — silk sashes — move like living weapons, each one sharp enough to cut through buildings. She has been collecting beautiful women for over a century, absorbing them into her flesh.

"You are Demon Slayers?" She laughs. "How many of you have I killed? I stopped counting at the seventh Hashira."

She is fast. Her sashes attack from every direction. Tanjiro engages her head-on. Inosuke arrives through the ceiling. Zenitsu — asleep — becomes a bolt of lightning.

But Daki is not the real Upper Moon. She is half of it.

Her brother erupts from her body — Gyutaro. Sickle-wielding, poison-blooded, filled with centuries of rage. Together, they are Upper Moon Six.

The real fight begins.`,scene:'action',mood:'#cc0000',characters:['Tanjiro','Zenitsu','Inosuke','Tengen'],effects:{flags:{gyutaro_revealed:true}},choices:[{text:'Fight Gyutaro with Tengen. He is the bigger threat.',next:'ds_gyutaro_fight',effects:{rel:{tengen:1},stats:{str:1}}},{text:'Fight Daki with Tanjiro. Coordinate your breathing styles.',next:'ds_daki_fight',effects:{rel:{tanjiro:1},stats:{per:1}}},{text:'Be the wildcard. Move between both fights, support where needed.',next:'ds_wildcard_fight',effects:{stats:{int:1,cou:1}}}]};

DS_NODES.ds_gyutaro_fight = {text:`Gyutaro is different from any demon you have fought. His blood is poison — a single cut and you are dead in minutes without an antidote. His sickles curve through the air with impossible trajectories.

Tengen fights him with twin cleavers and explosives. Sound Breathing — a derivative of Thunder. Each swing creates shockwaves. But even Tengen is being pushed back.

"Kid!" Tengen shouts. "His blood sickles — he controls them after throwing! Watch the reverse arc!"

You see it. The sickles curve back like boomerangs. You dodge one that would have taken your head. Your counter-slash opens a wound on Gyutaro\`s shoulder. It heals in two seconds.

"Not bad," Gyutaro hisses. "But you cannot kill me without killing my sister at the same moment. We share one body. One life."

Both heads must be cut simultaneously. An impossible task — unless you coordinate perfectly.`,scene:'action',mood:'#cc0000',characters:['Tengen','Gyutaro'],effects:{rel:{tengen:2},stats:{str:1}},choices:[{text:'Push through the poison. One final coordinated strike.',next:'ds_district_climax',effects:{stats:{cou:2}},check:{stat:'str',dc:12,pass:'ds_district_climax',fail:'ds_district_desperate'}},{text:'Signal the others. Everyone attacks at once.',next:'ds_district_climax',effects:{stats:{int:1}}}]};

DS_NODES.ds_daki_fight = {text:`Daki\`s sashes are everywhere — cutting through buildings, slicing through the air in beautiful, deadly patterns. She fights like a dancer, each movement graceful and lethal.

Tanjiro matches her with Water Breathing, then shifts — Hinokami Kagura blazes through his blade. The sashes burn. Daki screams.

You support him, cutting the sashes that target his blind spots. Together, you push her back, corner her, and Tanjiro takes her head.

But Daki does not die. Her severed head cries, and from her body erupts Gyutaro — furious, poisonous, and far more dangerous than his sister.

"You made my sister cry," Gyutaro whispers. "I will kill every single one of you. Slowly."

Both heads must fall simultaneously.`,scene:'action',mood:'#cc0000',characters:['Tanjiro','Daki','Gyutaro'],effects:{rel:{tanjiro:2}},choices:[{text:'Regroup. Plan the simultaneous decapitation.',next:'ds_district_climax',effects:{stats:{int:1}}},{text:'Go all out. No more planning — pure instinct.',next:'ds_district_climax',effects:{stats:{cou:1}}}]};

DS_NODES.ds_wildcard_fight = {text:`You become the pivot point of the battle. When Tengen staggers from Gyutaro\`s poison sickle, you block the follow-up. When Tanjiro overextends against Daki\`s sashes, you cover his back.

Zenitsu and Inosuke handle Daki\`s obi extensions — the stored victims being used as weapons. The battle spans three city blocks. Buildings collapse. Fire spreads.

You are everywhere. Every time someone is about to take a fatal hit, you are there. Your breathing style pushes to its absolute limit.

But the clock is ticking. Gyutaro\`s poison is in Tengen\`s blood. Tanjiro\`s Hinokami Kagura is burning through his stamina. Everyone is running on fumes.

Both heads must fall at the same moment. One synchronized strike across two separate battles.`,scene:'action',mood:'#cc0000',characters:['Tengen','Tanjiro','Zenitsu','Inosuke'],effects:{stats:{per:1,cou:1}},choices:[{text:'Call the synchronization. You have seen both fights. You know the timing.',next:'ds_district_climax',effects:{stats:{int:1}}},{text:'Take Gyutaro yourself. Free Tengen to coordinate.',next:'ds_district_climax',effects:{stats:{str:1,cou:1}}}]};

DS_NODES.ds_district_desperate = {text:`The poison hits. Your vision blurs. Your muscles seize. This is what Gyutaro\`s blood does — it shuts your body down one system at a time.

But your breathing holds. Total Concentration burns through the poison, buying you minutes instead of seconds. It is not a cure — it is a delay.

Tengen is in worse shape. One eye gone. One hand barely functional. He is fighting through injuries that would have killed anyone else ten minutes ago.

"Hey, kid," Tengen gasps. "If this is it for me — at least it will be flashy."

It is not over. Not yet.`,scene:'action',mood:'#cc0000',characters:['Tengen'],effects:{stats:{str:-1},rel:{tengen:2}},choices:[{text:'Push through. One last effort.',next:'ds_district_climax',effects:{stats:{cou:2}}}]};

DS_NODES.ds_district_climax = {text:`The moment comes.

Everyone moves at once. Zenitsu — Thunderclap and Flash, Godspeed — a strike so fast that time itself seems to stop. Inosuke\`s Beast Breathing tears through Daki\`s defenses. Tanjiro\`s Hinokami Kagura blazes like a second sun.

You and Tengen hit Gyutaro\`s neck at the same instant. Sound Breathing and your own style combined. The blade bites, meets resistance, pushes through.

Two heads fall at the same moment. Daki and Gyutaro — Upper Moon Six — dissolve together, still reaching for each other. In their final moments, they are not demons. They are a brother and sister who grew up starving in the streets, sold into misery, transformed by Muzan\`s blood into monsters.

They had each other. That was all they ever had.

The district survives. Tengen loses his left eye and left hand but lives. Tanjiro collapses from exhaustion. Zenitsu and Inosuke are battered but standing.

You have helped defeat an Upper Moon. The first one killed in over a century.`,scene:'action',mood:'#cc4400',characters:['Tengen','Tanjiro','Zenitsu','Inosuke'],effects:{stats:{str:2,cou:1},flags:{upper_moon_killed:true}},choices:[{text:'This is not enough. Train harder. Muzan is still out there.',next:'ds_hashira_training',effects:{stats:{str:1},flags:{path_warrior:true}}},{text:'Focus on finding a cure for your sister. The answer is in Muzan\`s blood.',next:'ds_cure_path',effects:{stats:{int:1},flags:{path_cure:true}}},{text:'Seek out the Swordsmith Village. You need a stronger blade.',next:'ds_swordsmith',effects:{stats:{per:1},flags:{path_blade:true}}},{text:'Hunt the remaining Upper Moons. Take them all down before Muzan can act.',next:'ds_upper_moon_gauntlet',effects:{stats:{cou:2,str:1},flags:{path_gauntlet:true}}}]};

// ---- ARC 5: PATHS & ENDINGS ----

DS_NODES.ds_hashira_training = {text:`You train under every Hashira who will have you. Each one teaches you something different:

Giyu shows you the eleventh form of Water Breathing — Dead Calm. A technique of absolute stillness.
Shinobu teaches you demon physiology and poison resistance.
The Stone Hashira, Gyomei, makes you carry boulders through rivers while blindfolded.

Your body pushes past its limits. Something awakens — a mark appears on your skin. The Demon Slayer Mark. It amplifies your power exponentially, but there is a cost: every marked swordsman in history died before the age of 25.

Muzan is accelerating his plans. The final battle approaches. The Demon Slayer Corps will make its last stand.

But you have a choice about how to face it.`,scene:'action',mood:'#1a0a2e',characters:['Giyu','Shinobu'],effects:{stats:{str:2,per:1},flags:{demon_mark:true}},choices:[{text:'Lead the assault on Muzan\`s Infinity Castle.',next:'ds_infinity_castle',effects:{stats:{cou:2}}},{text:'Find Akaza first. Rengoku\`s death must be answered.',next:'ds_ending_akaza',effects:{stats:{str:1},flags:{hunt_akaza:true}}},{text:'Confront Muzan alone. End this war with one strike.',next:'ds_ending_sacrifice',effects:{stats:{cou:3}}},{text:'Something is awakening in your breath. A golden light. Pursue it.',next:'ds_sun_breathing_vision',effects:{stats:{per:2},flags:{sun_path:true}}}]};

DS_NODES.ds_cure_path = {text:`Tamayo — a demon who broke free of Muzan\`s control centuries ago — works with you. She is a doctor, a scientist, and the only being alive who understands demon biology from the inside.

"Your sister is the key," Tamayo says, examining blood samples. "She resists the hunger. She recovers energy through sleep instead of feeding. If we can understand why, we can reverse the transformation."

Months of research. Demon blood analysis. Failed experiments. But slowly, a cure takes shape — a drug that could turn demons back into humans.

The catch: it requires Muzan\`s blood. The source of all demons. To get it, someone must face him.

Your sister looks at you with those pink eyes. She cannot speak through the bamboo muzzle. But her hand grips yours, and you understand: she wants to be human again. No matter the cost.`,scene:'calm',mood:'#1a3a5a',characters:['Shinobu'],effects:{stats:{int:2},flags:{cure_research:true}},choices:[{text:'Infiltrate Muzan\`s fortress to get his blood.',next:'ds_ending_cure',effects:{stats:{cou:2,int:1}}},{text:'Lure Muzan out. Fight him in the open where you have allies.',next:'ds_ending_warrior',effects:{stats:{cou:1,str:1}}},{text:'Use your sister\`s unique resistance to create the drug without Muzan\`s blood.',next:'ds_ending_mercy',effects:{stats:{int:2}}},{text:'Tamayo\`s research goes deeper than one cure. What if you could save ALL demons?',next:'ds_demon_redemption',effects:{stats:{int:2},flags:{save_all_demons:true}}}]};

DS_NODES.ds_swordsmith = {text:`The Swordsmith Village is hidden in the mountains, its location a secret even from most Demon Slayers. Here, the master craftsmen forge Nichirin blades — the only weapons that can kill demons.

The chief swordsmith examines your blade. "Chipped. Cracked. You have been pushing it beyond its limits." He studies you. "Your breathing style is unique. It has elements of multiple forms. You need a blade forged specifically for you."

He spends weeks crafting it. A blade that channels your specific breathing pattern, amplified by a rare ore found only in this mountain.

When you draw the finished sword, it glows. Not red. Not blue. Something in between — the color of dawn.

But the village comes under attack. Upper Moon Four — Hantengu — and Upper Moon Five — Gyokko — have found the hidden location. The swordsmiths are defenseless.`,scene:'action',mood:'#2a3a1a',effects:{stats:{str:2},flags:{dawn_blade:true}},choices:[{text:'Defend the village. These craftsmen are the backbone of the Corps.',next:'ds_ending_blade',effects:{stats:{cou:2,str:1}}},{text:'Evacuate the swordsmiths. Preserve their knowledge above all.',next:'ds_ending_warrior',effects:{stats:{int:1,per:1}}},{text:'Use the new blade to fight. Test its power against an Upper Moon.',next:'ds_ending_blade',effects:{stats:{str:2}}}]};

DS_NODES.ds_ending_warrior = {text:`The final battle. The Infinity Castle — Muzan\`s fortress that exists between dimensions.

Every surviving Demon Slayer is here. Every Hashira. Tanjiro. Zenitsu. Inosuke. You.

The battles rage through impossible architecture — rooms that shift, gravity that reverses, corridors that stretch into infinity. Upper Moons fall one by one. Hashira die. The cost is staggering.

And then — Muzan Kibutsuji. The King of Demons. A thousand years of accumulated power in a form that shifts between human and monster.

You fight alongside Tanjiro. Your breathing styles weave together — water and flame, lightning and wind, all of it flowing into a single relentless assault. The Demon Slayer Marks blaze on your skin. You know the cost. You do not care.

Dawn comes. The sun rises. And Muzan — the being who destroyed your family, who cursed your sister, who created every demon that has ever terrorized humanity — burns.

It is over. The war that lasted a thousand years ends with sunlight.

Your sister emerges from her bamboo box. The cure worked — Tamayo\`s drug, combined with exposure to Muzan\`s dissolving blood, reverses the transformation. She is human again. She is crying. You are crying.

Rengoku was right. Set your heart ablaze. Burn brighter. And never, ever stop.

You survive. Your sister survives. The sun rises on a world without demons.`,scene:'calm',mood:'#cc6600',characters:['Tanjiro','Zenitsu','Inosuke','Giyu'],effects:{flags:{ending_warrior:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

DS_NODES.ds_ending_akaza = {text:`You find Akaza before the final battle. He is waiting in a forest clearing, the same kind of clearing where Rengoku died.

"You came," Akaza says. Not surprised. Almost... pleased. "The one who fought beside the Flame Hashira. I remember."

The fight is brutal. Akaza has centuries of martial arts mastery. His Destructive Death techniques hit like meteors. Compass Needle reads your fighting spirit and predicts your movements.

But you have something he does not: the memory of Rengoku\`s smile. The promise of a flame that never dies.

You push past your limits. The Demon Slayer Mark ignites. Your blade glows with the color of dawn. And in the final exchange — your sword finds his neck.

But Akaza does not regenerate. He remembers. His human life — his name was Hakuji. A martial artist who fought to protect the people he loved and lost them all. Muzan\`s blood erased his memories but not his soul.

He destroys himself. The martial artist chooses death over the demon.

You kneel in the clearing as the sun rises. "Rengoku," you whisper. "It is done."

You carry two flames now — Rengoku\`s, and the one Akaza was too broken to keep lit. In the final battle against Muzan, those flames burn bright enough to end a thousand years of darkness.`,scene:'calm',mood:'#cc4400',characters:['Akaza'],effects:{flags:{ending_akaza:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

DS_NODES.ds_ending_sacrifice = {text:`You go alone. The others try to stop you — Tanjiro grabs your arm, Zenitsu cries, Inosuke punches a wall — but you slip away in the night.

Muzan is in a mansion in the city, surrounded by the Lower Moons. You cut through them like paper. Your blade glows with dawn light. Your Demon Slayer Mark burns so bright it illuminates the hallway.

You reach Muzan. He looks at you with ancient, bored eyes. "Another swordsman. How tedious."

The fight lasts until sunrise. You use every technique you know. Every breathing form. Every ounce of strength. Muzan is beyond anything you have faced — his body regenerates from single cells, his blood is corrosive, his tentacles hit with the force of cannon fire.

But you hold him. Through the night, through the pain, through the blood. You hold the King of Demons in place until the sun finds him.

The cost is everything. Your body burns out. The Demon Slayer Mark takes its toll. But as the sunlight dissolves Muzan\`s screaming form, your sister — carried by Tanjiro, cured by the fading demon blood — opens her eyes.

Human eyes.

"Thank you," she whispers. It is the first human word she has spoken in years.

You die smiling, with the sunrise on your face, just like Rengoku.

The Demon Slayer Corps will remember your name. Every swordsman who follows will know the story of the one who held the darkness at bay until the dawn.`,scene:'calm',mood:'#cc4400',characters:['Tanjiro'],effects:{flags:{ending_sacrifice:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

DS_NODES.ds_ending_cure = {text:`You infiltrate Muzan\`s fortress — not to fight, but to steal. A single vial of his blood. That is all Tamayo needs.

The infiltration is a nightmare. Shape-shifting demons. Corridors that rearrange. Muzan\`s presence pressing on your mind like a mountain.

But you trained under Shinobu. You know poisons, misdirection, stealth. You move through the Infinity Castle like a ghost, avoiding Upper Moons, dodging patrols, suppressing your breathing to near-zero.

You reach the chamber where Muzan sleeps — because even the King of Demons must rest sometimes. One vial. One extraction. One silent escape.

Tamayo works through the night. The cure — a combination of Muzan\`s blood, your sister\`s unique antibodies, and wisteria extract — is ready by dawn.

Your sister drinks it. The transformation reverses. Demon tissue becomes human. Pink eyes become brown. Fangs retract into normal teeth. She coughs, gasps, and breathes real air for the first time in years.

"Welcome back," you say, holding her as she cries.

The cure works on other demons too. Tamayo distributes it across the country. Not every demon accepts it — some have been monsters too long to remember being human. But dozens are saved. Hundreds, eventually.

You did not end the war with a sword. You ended it with a cure. And that, perhaps, is the bravest kind of fighting — choosing to heal instead of destroy.`,scene:'calm',mood:'#0a3a3a',characters:['Shinobu'],effects:{flags:{ending_cure:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

DS_NODES.ds_ending_mercy = {text:`Your sister IS the cure.

Her blood — demon blood that resists the hunger, that chooses sleep over feeding, that remembers love — contains antibodies that no other demon possesses. She is the only demon in history who retained her humanity completely.

Tamayo isolates the compound. It is not enough to cure everyone, but it is enough to prove that the curse can be broken.

You present the findings to the Demon Slayer Corps. The Hashira are divided — some want to press the attack on Muzan, others want to pursue the cure. You argue for both.

"We fight AND we heal," you tell the assembled warriors. "That is what makes us different from them. Demons consume. We protect."

The final battle comes, but this time, the Demon Slayers carry two weapons: swords and syringes. As each Upper Moon falls, the cure is administered to any demon willing to accept it.

Your sister stands beside you at the end — human again, cured by her own blood, her own strength, her own stubborn refusal to become a monster. She is the proof that no curse is permanent. That love is stronger than hunger. That humanity cannot be stolen — only surrendered.

The sun rises on a world learning to forgive.`,scene:'calm',mood:'#0a3a3a',effects:{flags:{ending_mercy:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

DS_NODES.ds_ending_blade = {text:`The Swordsmith Village burns. Upper Moon Four and Five attack simultaneously. Swordsmiths who have never held a weapon in combat flee through the streets.

Your new blade — dawn-colored, forged for your specific breathing style — sings in your hand. It cuts through demon flesh like nothing you have wielded before. Each swing resonates with your breathing, amplifying your technique tenfold.

You face Hantengu — the coward Upper Moon who splits into multiple emotion demons. Joy, Anger, Pleasure, Sorrow — each one a separate body with different abilities. Kill one and the others absorb its power.

The key is the original — a tiny, terrified demon hiding while his clones fight. Your perception training pays off. You sense him cowering behind a building and close the distance before his clones can react.

One strike. The dawn blade cleaves through his neck. Four clones dissolve simultaneously.

Mitsuri — the Love Hashira — handles Gyokko with Tanjiro\`s support. The village survives. The swordsmiths survive. The blades that will arm the Corps for the final battle survive.

Your sword becomes legendary. The dawn blade — the weapon that ended two Upper Moons and helped turn the tide of a thousand-year war. Swordsmiths study it for generations. Warriors model their techniques after yours.

You carry the blade into the final battle against Muzan, and when the sun rises on a world without demons, you drive the sword into the earth as a monument. A blade forged in fire, tempered in loss, wielded with resolve.

The age of demons is over. And it ended with the color of dawn.`,scene:'calm',mood:'#cc6600',effects:{flags:{ending_blade:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

// ---- ARC 6: INFINITY CASTLE ----

DS_NODES.ds_infinity_castle = {text:`The ground opens beneath you. Every Demon Slayer — every Hashira, every rank-and-file swordsman who answered the call — falls through a fissure in reality itself. You land hard on wooden floorboards that should not exist.

The Infinity Castle. Muzan\`s fortress. A labyrinth of shifting rooms suspended in a void of pure darkness. Staircases fold into walls. Doorways rearrange like a shuffled deck. A biwa player somewhere unseen plucks strings, and the architecture obeys — rooms slam together, corridors stretch into miles, gravity inverts without warning.

You pick yourself up. Your sword is drawn. Beside you: Tanjiro, bleeding from the fall but already in stance. Ahead: the sound of a demon laughing in a room that was not there a second ago.

The castle is alive, and it is sorting you. Separating the Demon Slayers into isolated killing floors. You have seconds before the next shift.`,scene:'action',mood:'#0d0017',characters:['Tanjiro'],effects:{stats:{per:1},flags:{infinity_castle:true}},choices:[{text:'Stay with Tanjiro. You fight better together.',next:'ds_castle_navigate',effects:{rel:{tanjiro:2},stats:{cou:1}}},{text:'Split up. Cover more ground. Find Muzan faster.',next:'ds_castle_hashira_support',effects:{stats:{per:1}}},{text:'Follow the sound of the biwa. Kill the one controlling this place.',next:'ds_castle_navigate',effects:{stats:{int:1},flags:{hunt_biwa:true}}}]};

DS_NODES.ds_castle_navigate = {text:`The rooms shift every thirty seconds. You learn to read the rhythm — the biwa\`s tempo dictates the architecture. A slow pluck and the walls slide. A fast trill and the floor drops out entirely.

You run. Breathe. Cut through lesser demons that pour from side passages like rats from a flooding ship. Their blood paints the shifting walls. Your lungs burn with Total Concentration but you do not dare let it falter — one lapse and this place will swallow you.

Then the biwa stops. The room locks. And standing before you, framed by the frozen geometry of the castle, is an Upper Moon.

The air temperature drops forty degrees. Frost crystallizes on your blade. A man with rainbow eyes and a serene smile holds a pair of golden fans. Ice forms in patterns of impossible beauty around him — lotus flowers, crystal trees, frozen butterflies.

"Oh my," Doma says, Upper Moon Two. "A visitor. How wonderful. I do so love company."

His voice is warm. His smile is kind. His eyes hold nothing at all.`,scene:'action',mood:'#1a0033',characters:['Shinobu'],effects:{stats:{cou:1}},choices:[{text:'Attack immediately. Do not let him set the pace.',next:'ds_doma_encounter',effects:{stats:{str:1}}},{text:'Fall back and find Shinobu. She has a personal vendetta against this one.',next:'ds_doma_encounter',effects:{rel:{shinobu:2},stats:{int:1}}},{text:'Hold position and analyze his Blood Art. Knowledge is survival.',next:'ds_doma_encounter',effects:{stats:{per:2}}}]};

DS_NODES.ds_castle_hashira_support = {text:`Alone in the shifting labyrinth, you hear battles raging through the walls. Each room is a colosseum. Each colosseum holds a Hashira fighting for their life.

Through a crack in the shifting architecture, you see Mitsuri — the Love Hashira — her whip-blade carving arcs through a demon\`s defenses, her Demon Slayer Mark blazing pink on her chest. She is winning, but barely.

Through another crack: Gyomei, the Stone Hashira, the strongest of them all, on his knees. His opponent is a swordsman with six eyes and a blade of crystallized moonlight. Kokushibo. Upper Moon One. The demon who was once a Demon Slayer — Yoriichi\`s twin brother, consumed by jealousy and turned by Muzan four hundred years ago.

The biwa plucks. A door opens for exactly three seconds. You can reach one of them.`,scene:'action',mood:'#1a002e',characters:['Giyu','Shinobu'],effects:{stats:{per:1}},choices:[{text:'Go to Gyomei. Kokushibo is the strongest Upper Moon — Gyomei needs support.',next:'ds_kokushibo_encounter',effects:{stats:{cou:2}}},{text:'Go to Mitsuri. Secure a victory, then move together to the harder fight.',next:'ds_castle_muzan_throne',effects:{stats:{int:1},rel:{giyu:1}}},{text:'Ignore both. Push straight toward Muzan. End the head and the body dies.',next:'ds_castle_muzan_throne',effects:{stats:{cou:2},flags:{push_muzan:true}}}]};

DS_NODES.ds_castle_muzan_throne = {text:`You break through the final door. The room beyond is vast — cathedral-sized, the ceiling lost in darkness. At its center, on a throne of pulsing flesh and bone, sits Muzan Kibutsuji.

He looks human. Impeccable white suit. Dark hair. Red eyes that hold a thousand years of contempt. Around him, the castle hums — his heartbeat is the architecture\`s engine.

"You made it further than most," Muzan says. He does not stand. "I have killed Hashira by the dozen. Demon Slayers by the hundred. Your Corps is a recurring irritation — like mosquitoes that breed faster than I can swat them."

He finally rises. The air pressure in the room triples. Your ears pop. Your lungs strain against the weight of his presence alone.

"But tonight, I end the bloodline of sun breathers forever."

Behind you, Tanjiro crashes through a wall, battered but alive. Giyu follows, missing an arm but still gripping his blade. The survivors are gathering. The final battle of a thousand-year war begins now.`,scene:'action',mood:'#1a0000',characters:['Tanjiro','Giyu'],effects:{stats:{cou:2},flags:{muzan_confronted:true}},choices:[{text:'Fight beside Tanjiro. Combine your breathing styles against Muzan.',next:'ds_ending_warrior',effects:{rel:{tanjiro:2},stats:{str:2}}},{text:'Channel everything into one strike. The Sun Breathing\`s thirteenth form.',next:'ds_ending_sun',effects:{stats:{str:3},flags:{sun_breathing_final:true}}},{text:'Buy time. Hold Muzan until dawn — sunlight is the only thing he truly fears.',next:'ds_ending_sacrifice',effects:{stats:{cou:3}}}]};

// ---- ARC 7: SUN BREATHING MASTERY ----

DS_NODES.ds_sun_breathing_vision = {text:`It happens during Hashira training. You push your body past the breaking point — lungs screaming, muscles tearing, vision whiting out — and something cracks open inside you. Not a bone. Something older.

You see him. Yoriichi Tsugikuni. The first breath user. The man who created Sun Breathing and nearly killed Muzan Kibutsuji four hundred years ago. He stands in a field of spider lilies, red as arterial blood, and he is performing a dance.

Twelve forms flow like water. Each movement is combat and art simultaneously — the sword cuts and the body breathes and the sun itself seems to bend around the blade. You have never seen anything so beautiful or so violent.

Then he stops. Turns. Looks directly at you across four centuries.

"You carry the breath," he says. His voice is impossibly gentle for a man who could kill gods. "But you have only learned twelve movements. There is a thirteenth."

The vision fractures. You wake on the training ground, blood leaking from your nose. Every Hashira is staring at you. Your breathing — for one impossible second — had turned golden.`,scene:'calm',mood:'#cc8800',characters:['Giyu'],effects:{stats:{per:2,int:1},flags:{sun_vision:true}},choices:[{text:'Tell the Hashira what you saw. You need their help to understand it.',next:'ds_sun_breathing_train',effects:{stats:{int:1},rel:{giyu:1}}},{text:'Keep it to yourself. This power is too dangerous to reveal.',next:'ds_sun_breathing_train',effects:{stats:{per:1},flags:{secret_sun:true}}},{text:'Seek out Tanjiro. His family\`s Hinokami Kagura may hold the key.',next:'ds_sun_breathing_train',effects:{rel:{tanjiro:2}}}]};

DS_NODES.ds_sun_breathing_train = {text:`The thirteenth form is not a single technique. It is all twelve forms performed in unison — a continuous loop with no beginning and no end. The sword traces a circle. The breath becomes the sun.

You train in secret. Dawn to dusk. Your body rebels — Sun Breathing demands more oxygen than human lungs can provide. Blood vessels burst in your eyes. Your hands crack and bleed. You cough red after every session.

Tanjiro trains beside you. His Hinokami Kagura — the dance his father performed every New Year — is a corrupted memory of Sun Breathing, passed down through generations. Together, you piece together the fragments. His family\`s dance. Your vision of Yoriichi. The muscle memory encoded in your Demon Slayer Mark.

On the forty-ninth night, it clicks.

The twelve forms flow into one. Your blade ignites — not with flame, but with concentrated solar energy. The night around you brightens to noon. Trees cast shadows that point away from you. Moths spiral toward your sword and burn before they reach it.

The cost is immediate. You feel your lifespan compress. The Demon Slayer Mark already shortened your years — Sun Breathing accelerates the process. Every second you maintain the thirteenth form, you are trading days of your life for seconds of power equal to Yoriichi himself.`,scene:'action',mood:'#cc6600',characters:['Tanjiro'],effects:{stats:{str:3,per:1},flags:{sun_breathing_unlocked:true}},choices:[{text:'Master it fully. Accept the cost. Muzan must die even if you die with him.',next:'ds_sun_breathing_mastery',effects:{stats:{cou:2},flags:{accept_cost:true}}},{text:'Find a way to sustain it without the burnout. There must be a way Yoriichi survived.',next:'ds_sun_breathing_mastery',effects:{stats:{int:2}}},{text:'Teach it to Tanjiro as well. Two Sun Breathers are better than one.',next:'ds_sun_breathing_mastery',effects:{rel:{tanjiro:3},stats:{int:1}}}]};

DS_NODES.ds_sun_breathing_mastery = {text:`You stand in the clearing at dawn. The thirteenth form flows through you like a river finding the sea — inevitable, ancient, and devastating. Your sword hums a note that only you can hear. The grass at your feet chars in a perfect circle.

Yoriichi\`s voice echoes one final time in your mind: "I was not strong because I was gifted. I was strong because I had something to protect. The breath answers to love, not to rage. Remember this when you face him."

You sheathe your blade. The golden aura fades. Your hands are steady. Your heartbeat is slow. You have never felt more alive — or more aware that you are dying.

The Hashira watch you with expressions that mix awe and grief. They know what the Mark costs. They know what Sun Breathing costs on top of it. Giyu puts a hand on your shoulder and says nothing. There is nothing to say.

Shinobu runs the numbers. At full output, the thirteenth form gives you approximately four minutes of power that rivals Yoriichi\`s peak. Four minutes to end a thousand-year war.

Four minutes. That is all you have. That is all you need.`,scene:'calm',mood:'#cc9900',characters:['Giyu','Shinobu'],effects:{stats:{str:2,cou:2},flags:{sun_mastery:true}},choices:[{text:'Enter the Infinity Castle. Use those four minutes against Muzan.',next:'ds_infinity_castle',effects:{stats:{cou:2}}},{text:'Challenge the Upper Moons first. Thin the ranks before facing Muzan.',next:'ds_upper_moon_gauntlet',effects:{stats:{str:2}}},{text:'There is another way. The cure and the blade together.',next:'ds_demon_redemption',effects:{stats:{int:2}}}]};

DS_NODES.ds_ending_sun = {text:`Four minutes.

You ignite. The thirteenth form erupts from your blade and the Infinity Castle\`s darkness recoils like a living thing. Muzan\`s eyes widen — for the first time in four hundred years, he sees the sun inside a building.

"Yoriichi," he whispers. Not your name. The name of the ghost you carry.

You do not correct him. You attack.

The twelve forms cycle without pause. Each cut lands. Each breath fuels the next. Muzan regenerates — arms grow back, wounds seal, his body splits and reforms — but you are faster. The sun eats his flesh quicker than his cells can rebuild.

Three minutes left. He screams. The castle shakes. Demons across the fortress feel their creator\`s pain and falter. Hashira seize the openings.

Two minutes. Your body begins to fail. Blood leaks from your eyes, your ears, your pores. The Mark burns through your skin. But your sword does not slow. Your breathing does not break.

One minute. Muzan launches everything — tentacles, blood whips, shockwaves that crack the dimensional walls. You cut through all of it. You are not fighting for survival. You are fighting for dawn.

Tanjiro appears beside you. His Hinokami Kagura joins your Sun Breathing — father\`s dance meeting the original form. Two suns in the darkness. Muzan has nowhere left to hide.

Zero. Your body gives out the same moment your blade finds Muzan\`s core. The sun erupts from inside his chest. The castle dissolves. The void fills with light.

You fall. Tanjiro catches you. Above, through the shattered ceiling, the real sun is rising.

"Did we win?" you ask, though you already know. You can feel it — every demon in the world disintegrating as Muzan\`s blood loses its power.

"We won," Tanjiro says, crying and laughing. "We won."

Your sister is human again. The last thing you see before your eyes close is her face — her real face, no fangs, no demon eyes — smiling at you for the first time since the night your family died.

You do not know yet if you will wake up. But the sun is warm, and the war is over, and that is enough.`,scene:'calm',mood:'#ffaa00',characters:['Tanjiro'],effects:{flags:{ending_sun:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

// ---- ARC 8: DEMON REDEMPTION ----

DS_NODES.ds_demon_redemption = {text:`Tamayo shows you the data, and it changes everything.

Her lab is hidden beneath an apothecary in the city. Glass vials line the walls — demon blood samples, each one labeled and dated. Centuries of research by a demon who chose to be a doctor instead of a monster.

"The transformation is not permanent," she says, adjusting her glasses. "Muzan\`s blood overwrites the human genome, but the original code remains — buried, dormant, like a seed beneath winter soil. My drug can reactivate it."

She holds up a syringe filled with a luminous violet fluid. "This is the prototype. It worked on two of my test subjects — former demons, now human again. They remember nothing of their demon lives. They simply... woke up."

Your sister watches from the corner, her pink demon eyes wide. She understands. She has always understood more than anyone gave her credit for.

"But there is a complication," Tamayo continues. "The drug requires a catalyst — a fragment of Muzan\`s original blood, unprocessed. And every demon carries that fragment inside them. If we can refine the process, we could cure them. Not just your sister. All of them."

Every demon. Hundreds of beings who were once human, turned against their will, trapped in bodies that hunger for human flesh. What if the war did not have to end in extinction?`,scene:'calm',mood:'#3a1a5a',characters:['Shinobu'],effects:{stats:{int:2},flags:{redemption_path:true}},choices:[{text:'This changes the mission. Cure them. Save them all.',next:'ds_nezuko_restored',effects:{stats:{int:1},flags:{cure_all:true}}},{text:'Cure your sister first. She has waited long enough.',next:'ds_nezuko_restored',effects:{stats:{cou:1},rel:{tanjiro:1}}},{text:'Some demons chose this. Not all of them deserve saving.',next:'ds_redemption_consequences',effects:{stats:{per:1},flags:{selective_cure:true}}}]};

DS_NODES.ds_nezuko_restored = {text:`Your sister goes first.

Tamayo administers the drug at dawn, when demon biology is at its weakest. Your sister thrashes. Her body burns — steam rises from her skin as the demon cells die. She screams through the bamboo muzzle. You hold her hand and do not let go.

Hours pass. The worst hours of your life — worse than the night your family died, because this time you chose to cause the pain.

Then silence. Her breathing slows. Her skin cools. The bamboo muzzle falls away from a mouth with human teeth. She opens her eyes — brown, not pink. Human eyes that blink in the sunlight pouring through the window.

"Brother?" Her voice. Her real voice. You have not heard it in years.

You cannot speak. You just hold her while she cries and the sun paints the room gold.

Tanjiro arrives that evening. When he sees your sister — human, standing, speaking — he drops to his knees and weeps. Zenitsu faints. Inosuke pretends not to cry, fails, and punches a tree.

But the celebration is short. Because now you know the cure works. And now you have to decide what to do with that knowledge. There are hundreds of demons in the world. Some of them were innocent people, transformed against their will. Some of them have killed thousands.

Do they all deserve the chance your sister just received?`,scene:'calm',mood:'#5a3a7a',characters:['Tanjiro','Zenitsu','Inosuke'],effects:{stats:{int:1,cou:1},flags:{nezuko_cured:true}},choices:[{text:'Mass-produce the cure. Arm every Demon Slayer with syringes alongside swords.',next:'ds_redemption_consequences',effects:{stats:{int:2},flags:{mass_cure:true}}},{text:'Offer the cure to demons who surrender. Those who refuse are cut down.',next:'ds_redemption_consequences',effects:{stats:{per:1,cou:1}}},{text:'Focus on the Upper Moons. If the strongest fall, the weaker ones may seek the cure willingly.',next:'ds_upper_moon_gauntlet',effects:{stats:{str:1,int:1}}}]};

DS_NODES.ds_redemption_consequences = {text:`The Hashira are divided.

Giyu says nothing — but he nods when you present the cure. Shinobu\`s eyes burn with something complicated. She has spent her life poisoning demons to avenge her sister. The idea that she could have saved them instead lands like a blade between her ribs.

Sanemi — the Wind Hashira — slams his fist through a table. "You want to SAVE them? They ATE my family! They are not victims. They are monsters."

Gyomei, the Stone Hashira, weeps openly. "If even one can be saved... is that not worth everything?"

The Corps fractures. Half the slayers refuse to carry syringes. Half embrace the mission. Battles become chaotic — some slayers cutting necks while others are trying to inject the cure. Demons are confused. Some flee. Some attack harder.

But it works. In the first month, forty-seven demons are cured. Forty-seven people wake up human, disoriented, weeping, alive. Families are reunited. The public learns that demons were victims too. The narrative of the war shifts from extermination to liberation.

Muzan feels it. His army is shrinking not through death but through defection. And a demon who chooses humanity over his blood is an affront he cannot tolerate.

He accelerates his plan. The Infinity Castle opens. The final battle comes — but this time, you carry two weapons.`,scene:'action',mood:'#2a1a4a',characters:['Giyu','Shinobu'],effects:{stats:{int:1,cou:1},flags:{corps_divided:true}},choices:[{text:'Enter the Infinity Castle. Sword in one hand, syringe in the other.',next:'ds_infinity_castle',effects:{stats:{cou:2,int:1}}},{text:'Try to cure the Upper Moons. Even Akaza was human once.',next:'ds_ending_redemption',effects:{stats:{int:2},flags:{cure_upper_moons:true}}},{text:'Muzan cannot be cured. He is the source. He must be destroyed.',next:'ds_castle_muzan_throne',effects:{stats:{str:2,cou:1}}}]};

DS_NODES.ds_ending_redemption = {text:`You stand before Akaza with the syringe.

He stares at it. At you. His fists are raised — Destructive Death ready to fire. One punch and you are dead. But you do not draw your sword.

"Hakuji," you say. His human name. The name he forgot when Muzan\`s blood erased his memories. "Your name was Hakuji. You were a martial artist. You fought to protect people you loved."

His fist trembles. His eyes — demon eyes, cold and golden — flicker.

"You had a master who believed in you. You had a woman you were going to marry. Muzan took all of that. But the man you were is still in there. I know because you let Rengoku fight with honor. A monster would not have done that."

Akaza\`s compass needle spins. It cannot read your fighting spirit because you are not fighting. You are offering.

He takes the syringe himself. Jabs it into his own neck. His body convulses — centuries of demon biology burning away in seconds. When it ends, a human man with scarred knuckles and wet eyes kneels on the floor.

"I remember," Hakuji whispers. "I remember everything."

The cascade begins. Doma refuses the cure — he never valued life, human or demon. He dies smiling that empty smile. But Kokushibo hesitates. The swordsman in him, the brother of Yoriichi, wants to be human again. Wants to die as a man, not a monster.

Muzan falls last. Not to the cure — he is beyond saving, the original demon, the source of the blood. He falls to the combined assault of every Demon Slayer and every redeemed former demon fighting side by side. Hakuji\`s human fist strikes Muzan\`s chest at the same moment your blade finds his neck. A martial artist and a swordsman, human to the end.

The dawn breaks over a world that chose mercy over vengeance. Not every demon was saved. Not every Hashira survived. But the war ends differently than anyone expected — not with extinction, but with the radical, terrifying, beautiful idea that even monsters can come home.

Your sister stands beside you in the sunrise. Human. Whole. She squeezes your hand and says, "Thank you for not giving up on me."

You never did. You never could. And because of that, a thousand others got the same chance she did.`,scene:'calm',mood:'#7a5aaa',characters:['Tanjiro','Akaza'],effects:{flags:{ending_redemption:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

// ---- ARC 9: UPPER MOON GAUNTLET ----

DS_NODES.ds_upper_moon_gauntlet = {text:`Three Upper Moons stand between you and Muzan. Three demons who have killed more Hashira than you can count. Three fights that must happen tonight because dawn is seven hours away and every minute Muzan lives is a minute he can create more demons.

The Infinity Castle rearranges itself, and the biwa player delivers you to the first arena.

Akaza is waiting. Upper Moon Three. The martial artist who killed Rengoku. He stands in a room that resembles a dojo — tatami floors, wooden beams, moonlight through paper screens that do not connect to any moon.

He bows. Actually bows to you.

"I hoped it would be you," Akaza says. "The one who fought beside the Flame Hashira. You have grown stronger since then. I can see it in your stance." His fists ignite with blue destructive force. "Show me how much."

Compass Needle activates. He can read your fighting spirit, predict every attack before you throw it. His Destructive Death techniques hit with the force of collapsing buildings. He is faster, stronger, more experienced.

But he fights with honor. And honor is a leash.`,scene:'action',mood:'#330011',characters:['Akaza'],effects:{stats:{str:1,cou:1},flags:{gauntlet_begin:true}},choices:[{text:'Fight him head-on. Match martial arts with breathing technique.',next:'ds_doma_encounter',effects:{stats:{str:2},rel:{akaza:1}}},{text:'Use his honor against him. Feint, misdirect, exploit the code he follows.',next:'ds_doma_encounter',effects:{stats:{int:2},flags:{tactical_akaza:true}}},{text:'Talk while you fight. Remind him who he was. Break his resolve.',next:'ds_doma_encounter',effects:{stats:{per:2},flags:{akaza_memory:true}}}]};

DS_NODES.ds_doma_encounter = {text:`Akaza falls. Whether by blade, by memory, or by his own choice — Upper Moon Three is gone.

You barely have time to breathe before the room shifts. The dojo dissolves into a frozen paradise — an ice garden of crystalline lotus flowers, frozen waterfalls suspended in mid-cascade, and air so cold your breath crystallizes before it leaves your lips.

Doma sits cross-legged at the center, surrounded by the frozen remains of his followers. Upper Moon Two. The leader of a cult who worshipped him as a god. He consumed every last one of them and felt nothing.

"Ah, you defeated Akaza?" Doma claps, delighted. "He was always so serious. Fighting spirit this, honor that. Boring! But you — you look interesting. Tell me, do you believe in paradise?"

He does not wait for an answer. Golden fans snap open. The temperature drops to lethal in an instant. Ice crystals form in your lungs with every breath — his Blood Art freezes you from the inside out. Inhale his ice dust and your lungs crystallize. Stop breathing and you suffocate. The technique is designed to make your greatest weapon — your breath — into your death sentence.

Shinobu appears through a shattered wall, her blade already dripping with wisteria poison. Her eyes are flat with hatred. Doma killed her sister. This fight is personal.

"Let me have him," she says. It is not a request.`,scene:'action',mood:'#001a33',characters:['Shinobu'],effects:{stats:{cou:1,per:1}},choices:[{text:'Let Shinobu take the lead. Support her from range.',next:'ds_kokushibo_encounter',effects:{rel:{shinobu:2},stats:{per:1}}},{text:'Fight together. Shinobu\`s poison and your blade — two vectors of attack.',next:'ds_kokushibo_encounter',effects:{rel:{shinobu:1},stats:{str:1,int:1}}},{text:'Tell Shinobu to fall back. She is too emotional — Doma will exploit it.',next:'ds_kokushibo_encounter',effects:{stats:{int:2},flags:{protect_shinobu:true}}}]};

DS_NODES.ds_kokushibo_encounter = {text:`Doma\`s smile does not change even as he dies. He never understood what he was losing. Perhaps that was the most monstrous thing about him.

The castle delivers you to the final arena. And the temperature of the air changes — not cold this time, but heavy. Dense. Like standing at the bottom of the ocean.

The room is enormous. Cathedral ceilings. A single figure stands at the center with a blade that is not metal — it is crystallized moonlight, organic and alive, growing from the sword like a living organism. Six eyes study you from a face that carries four hundred years of regret.

Kokushibo. Upper Moon One. Born Michikatsu Tsugikuni — twin brother of Yoriichi, the creator of Sun Breathing. The man who was so consumed by jealousy of his brother\`s talent that he accepted Muzan\`s blood rather than die inferior.

He is the strongest demon beneath Muzan. His Moon Breathing is a corrupted mirror of Sun Breathing — sixteen forms, each one a killing technique perfected over four centuries of unending life. His blade generates crescent arcs that cut from impossible angles, filling the room with a web of moonlit death.

"You carry traces of my brother\`s breath," Kokushibo says. His voice is ancient, layered, reverberating with the weight of his immortality. "Imperfect. Inherited. But recognizable."

He draws his blade. The room fills with moonlight crescents — hundreds of cutting arcs suspended in the air, waiting to be released.

"Show me if the sun still lives."`,scene:'action',mood:'#0a0a2e',characters:['Giyu'],effects:{stats:{str:2,cou:2},flags:{kokushibo_fight:true}},choices:[{text:'Sun Breathing. Give him what he came for — his brother\`s legacy.',next:'ds_castle_muzan_throne',effects:{stats:{str:3},flags:{sun_vs_moon:true}}},{text:'Fight defensively. Survive his onslaught until the other Hashira arrive.',next:'ds_castle_muzan_throne',effects:{stats:{per:2,cou:1}}},{text:'Appeal to the human inside. Yoriichi would not have wanted this for his brother.',next:'ds_castle_muzan_throne',effects:{stats:{int:2,per:1},flags:{kokushibo_humanity:true}}}]};

// ---- ARC 10: INFINITY CASTLE DEPTHS & AFTERMATH ----

DS_NODES.ds_muzan_desperation = {text:`Muzan is cornered. For the first time in a thousand years, the Demon King knows fear — not the abstract concept he has observed in his victims, but the visceral, animal terror of a being that has never faced its own mortality.

His body erupts. Not the controlled, elegant transformations you have seen from other demons — this is chaos. Flesh splits and reforms in hideous configurations. Arms sprout from his torso, each one a whip of muscle and bone. His face distorts, multiple mouths opening across his chest and back, each one screaming in a different register.

"I will NOT die!" Every mouth speaks in unison. The Infinity Castle cracks. Walls collapse. The dimensional space itself begins to destabilize as Muzan pours every ounce of his thousand-year power into survival.

The other Hashira are scattered. Iguro and Mitsuri fight somewhere in the collapsing corridors. Sanemi is bleeding from wounds that would kill a normal person three times over. Gyomei prays and swings his flail with the calm of a man who has already accepted his death.

Dawn is forty-three minutes away. Muzan knows this. He is not trying to win anymore. He is trying to survive until he can escape into the earth, burrow deep, hibernate, and emerge in another century to rebuild.

You cannot let that happen. If he escapes now, every death tonight was meaningless.`,scene:'action',mood:'#1a0000',characters:['Tanjiro','Giyu','Sanemi','Gyomei'],effects:{stats:{cou:2,str:1},flags:{muzan_desperate:true}},choices:[{text:'Coordinate with every remaining Hashira. Surround him. No escape routes.',next:'ds_muzan_surrounded',effects:{stats:{int:2,cha:1}}},{text:'Push him toward the surface. If he will not come to the dawn, bring him to it.',next:'ds_muzan_dawn_push',effects:{stats:{str:2,cou:2}}},{text:'Channel the Demon Slayer Mark to its absolute limit. Burn your lifespan for power.',next:'ds_mark_sacrifice',effects:{stats:{str:3},flags:{mark_overload:true}}}]};

DS_NODES.ds_muzan_surrounded = {text:`"ALL HASHIRA — CONVERGE!" Your voice tears through the collapsing castle. The crow network relays the command. Every surviving slayer changes direction.

Gyomei arrives first. His stone flail crashes through a wall, and the blind giant takes position north. His chains create a perimeter — each link resonating with a prayer that weakens demonic regeneration.

Sanemi comes from the east, blood streaming from a dozen wounds but his grip on his blade unwavering. The Wind Hashira fights like a storm — chaotic, unpredictable, devastating. He has always been angry. Tonight, for the first time, his anger is focused.

Iguro and Mitsuri take the south, fighting as one. The Serpent Hashira's blade coils in impossible angles while the Love Hashira's whip-sword creates a web of cutting force. They guard each other's blind spots with the precision of two people who have trained together so often their bodies move in harmony.

Muzan lashes out in every direction. Arms, tentacles, blood whips — a hurricane of demonic flesh. But you hold. The perimeter tightens. Step by step, cut by cut, prayer by prayer, you drive him toward the center.

"You think a CAGE can hold me?" Muzan's voice splits into harmonics of rage. "I am the BEGINNING. I am the ORIGIN of everything you fear!"

"You are a sick man who was afraid to die," Tanjiro says quietly, his blade steady. "And you made the whole world suffer for it."

The castle ceiling cracks. Moonlight pours in. Dawn is thirty-one minutes away.`,scene:'action',mood:'#330011',characters:['Tanjiro','Gyomei','Sanemi','Iguro','Mitsuri'],effects:{stats:{cha:1,int:1},flags:{muzan_surrounded:true}},choices:[{text:'Hold the perimeter until dawn. Do not let him escape.',next:'ds_muzan_dawn_push',effects:{stats:{cou:2,per:1}}},{text:'Strike now. Every Hashira, simultaneously, one coordinated assault.',next:'ds_ending_hashira_united',effects:{stats:{str:2,cou:2}}}]};

DS_NODES.ds_muzan_dawn_push = {text:`You push him upward. Through the collapsing floors of the Infinity Castle, through the dimensional barriers, through the rubble of the surface world. Every Hashira who can still stand drives Muzan toward the sky.

He fights like a cornered god. Every second costs blood. Iguro takes a tentacle through the shoulder. Mitsuri catches him before he falls. Sanemi loses two fingers on his left hand and does not even notice. Gyomei's prayer beads shatter one by one — each bead a year of devotion, cracking under the strain.

The eastern horizon lightens. Grey becomes pink. Pink becomes gold.

Muzan sees it. The dawn. His oldest enemy. The one thing his thousand years of evolution, his millions of consumed humans, his army of demons could never overcome.

"NO!" He tries to burrow. The earth opens beneath him — but Gyomei's flail stakes him to the ground. Sanemi's wind cuts seal the tunnel. Tanjiro's blade pins his shadow.

You stand between Muzan and the last patch of darkness. Behind you, the sun rises over a horizon painted in blood and hope.

The first ray of sunlight touches Muzan's flesh. He screams — a sound that shakes the foundations of the world. His body burns. Regeneration fails. Cell by cell, the Demon King who terrorized humanity for a millennium dissolves into ash and morning light.

It takes eleven minutes. The longest eleven minutes of your life. You hold your blade against his throat the entire time, watching the most powerful demon ever created die the way every demon dies — in the sun, afraid, and finally, finally mortal.`,scene:'action',mood:'#ffaa00',characters:['Tanjiro','Gyomei','Sanemi'],effects:{stats:{cou:3,str:1},flags:{muzan_dawn_killed:true}},choices:[{text:'Collapse. You have nothing left. Let the others carry you home.',next:'ds_aftermath_sunrise',effects:{stats:{per:1}}},{text:'Stay standing. The corps needs to see their commander on their feet.',next:'ds_aftermath_sunrise',effects:{stats:{cou:1,cha:1}}},{text:'Tamayo steps forward with the vial. Four hundred years of research distilled into a single injection.',next:'ds_tamayo_sacrifice',effects:{stats:{int:1,emp:2},flags:{cure_deployed:true}}}]};

DS_NODES.ds_mark_sacrifice = {text:`The Demon Slayer Mark pulses. You have always known its cost — the ancient pact that grants power beyond human limits in exchange for a shortened lifespan. Every marked slayer in history died before the age of twenty-five.

You push past the limit.

The Mark spreads. From your face across your neck, down your arms, across your chest. Your skin burns with patterns that glow like heated iron. Your muscles tear and rebuild in the same heartbeat. Your blade sings — a frequency that makes Muzan flinch.

"You are burning yourself alive," Giyu says, horror cracking his usual calm. "Stop. We will find another way."

There is no other way. Muzan is too strong, too fast, too ancient. Human limits cannot touch him. So you abandon them.

Your breathing transcends technique. The forms blur together — Water, Flame, Thunder, Stone, Wind, all of them cycling through your body simultaneously. Not mastery. Desperation given form. Your lungs rupture and heal and rupture again with every breath.

You are faster than Muzan now. Stronger. Your blade cuts through his regeneration like sunlight through fog. For thirty seconds, you are the strongest human who has ever lived.

It costs you forty years of life. You feel them leave — decades of mornings, of growing old, of watching seasons change — burning away like paper in a furnace.

Muzan falls. Your body follows. The Mark dims. And in the silence that follows, Tanjiro holds you and whispers: "Stay with me. Stay."`,scene:'action',mood:'#ff3300',characters:['Tanjiro','Giyu'],effects:{stats:{str:3,cou:2},flags:{mark_burned:true}},choices:[{text:'You wake up. Barely. The Mark took years but left you alive.',next:'ds_aftermath_sunrise',effects:{stats:{per:1},flags:{survived_mark:true}}},{text:'You do not wake up. But the war is over, and that was always the deal.',next:'ds_ending_mark_death',effects:{flags:{died_for_dawn:true}}}]};

DS_NODES.ds_ending_mark_death = {text:`You do not wake up.

The healers try everything. Shinobu's medicines. Tamayo's ghoul-science. Even Nezuko, human again, holds your hand and wills you to live the way you willed her to live for years.

But the Mark took what it was owed. Your body is intact. Your heart beats. Your lungs breathe. But the flame behind your eyes — the stubborn, furious, loving fire that drove you across mountains and through demons and into the heart of hell itself — is gone.

You die on the third day after the battle, in a room full of sunlight, surrounded by every person you ever saved.

Tanjiro speaks at your funeral. He says: "They fought knowing they would not survive. Not because they did not value their life — but because they valued ours more. That is what a Demon Slayer is. Not someone who kills demons. Someone who loves humans enough to die for them."

Your blade is placed in the Hashira memorial. Your name is carved into the stone beside the other fallen warriors. But the memorial that matters most is smaller — a wheat field planted by Nezuko on the mountain where your family once lived. She tends it every morning, the way you once tended her.

The Demon Slayer Corps disbands within the year. There are no more demons to slay. The members scatter — some to farms, some to families, some to quiet lives they never expected to live.

And in a village in the mountains, a girl who was once a demon grows wheat in the sun and tells her children about the sibling who gave everything so she could stand in the light.`,scene:'end',mood:'#ffaa00',ending:'The Mark\'s Price',characters:['Tanjiro','Nezuko','Shinobu'],effects:{flags:{ending_mark_death:true}},choices:[]};

DS_NODES.ds_ending_hashira_united = {text:`Nine breathing styles. One moment.

Every surviving Hashira strikes simultaneously. Not a coordinated technique — something rawer, something that has never been attempted because it requires absolute trust between warriors who have spent their careers fighting alone.

Gyomei's Stone Breathing anchors the assault. His flail creates a cage of spiritual force that locks Muzan in place for exactly three seconds. Sanemi's Wind Breathing strips away the outer layer of regenerating flesh. Iguro's Serpent Breathing coils through the exposed tissue, severing nerve connections. Mitsuri's Love Breathing — flexible, unpredictable — catches every tendril that tries to counterattack.

Tanjiro's Hinokami Kagura burns through the core. And your blade — your breath, your will, your everything — follows his sun into Muzan's heart.

Muzan's scream is not anger. It is disbelief. A thousand years of invincibility, shattered by cooperation. By trust. By the one thing he could never create in his army of enslaved demons: people who chose to fight together.

His body collapses. The cells scatter. The Infinity Castle dissolves like a bad dream.

You stand in a crater where the castle used to be, surrounded by broken warriors who are laughing and crying and bleeding and alive. The dawn comes — not dramatically, not symbolically — just the sun, rising the way it always has, over a world that no longer has a Demon King.

Gyomei dies that morning. His body, held together by faith and stubbornness, finally gives out. He dies smiling, prayer beads in hand, surrounded by the warriors he considered his children.

The others survive. Scarred, diminished, forever changed — but alive. The Demon Slayer Corps has fulfilled its purpose. The thousand-year war is over.

Not with one hero's sacrifice. With all of them, together, refusing to let the darkness win.`,scene:'end',mood:'#ffaa00',ending:'United Dawn',characters:['Tanjiro','Gyomei','Sanemi','Iguro','Mitsuri'],effects:{flags:{ending_united:true}},choices:[]};

DS_NODES.ds_aftermath_sunrise = {text:`The sun rises over a battlefield that will become a memorial.

The Infinity Castle's collapse left a crater half a mile wide in the mountains outside Tokyo. Debris — stone, wood, demonic flesh already dissolving in the sunlight — litters the landscape. Crows circle overhead, their messages delivered, their war over.

You sit on a rock at the crater's edge. Your body is a catalog of damage — broken ribs, torn muscles, burns from demonic blood, cuts so deep you can see bone. The healers are overwhelmed. Tanjiro lies nearby, unconscious but breathing. His hand still grips his blade.

Nezuko — human, whole, crying — sits beside her brother and refuses to move. Zenitsu, both legs broken, has dragged himself across the battlefield to reach Nezuko. Inosuke stands guard over all of them, his boar mask cracked, his body swaying, too stubborn to sit down.

The Kakushi — the Corps support teams — arrive in waves. Stretchers. Bandages. Water. The infrastructure of survival mobilizing in the aftermath of apocalypse.

Giyu sits alone, staring at the sunrise. His arm is gone. His face is expressionless. But tears run down his cheeks — the Water Hashira, crying for the first time since Sabito died.

"Is it over?" someone asks. You do not know who.

"Yes," you say. And the word feels impossible. After years of blood and demons and midnight terror, after losing friends and family and pieces of yourself you will never get back — it is over.

The demons are dissolving. Every demon in Japan, connected to Muzan's blood, feels the source die. They crumble where they stand — in forests, in caves, in the dark corners of cities. Some were monsters. Some were victims. All of them are gone.

A new world begins with a sunrise and the sound of broken warriors weeping with relief.`,scene:'calm',mood:'#ffaa00',characters:['Tanjiro','Nezuko','Zenitsu','Inosuke','Giyu'],effects:{stats:{per:1},flags:{aftermath:true}},choices:[{text:'Rest. Heal. Let the world rebuild itself.',next:'ds_peaceful_future',effects:{stats:{per:1}}},{text:'There are survivors to find. Demons who were cured. Families who need answers.',next:'ds_cured_demons_aftermath',effects:{stats:{cha:1,int:1}}},{text:'Visit Rengoku\`s family. Tell them their son\`s death was not in vain.',next:'ds_rengoku_legacy',effects:{stats:{cha:1},rel:{rengoku:2}}}]};

DS_NODES.ds_peaceful_future = {text:`Months pass. The world heals the way bodies heal — slowly, with scars, never quite the same.

The Demon Slayer Corps disbands formally in a ceremony at the Ubuyashiki estate. The master — frail, ill, but alive to see the end of the war his family started a thousand years ago — thanks every surviving member personally. When he reaches you, he bows so deeply his forehead touches the floor.

"My family's sin created the demons," he says. "Your family's courage ended them. The debt is repaid."

You want to argue. There is no debt. There was never a debt. There was only a war and the people who fought it. But you let him bow, because he needs this, and kindness costs nothing.

Tanjiro returns to the mountains. He rebuilds the Kamado family home — not the same house, because nothing can be the same, but a new house on the same ground, with the same view of the valley where his family once sold charcoal. Nezuko helps. She smiles in the sunlight. She plants flowers where the blood once stained the snow.

You visit them in spring. The mountain air is clean. The charcoal kiln burns. Tanjiro makes tea and tells you about the neighbors who bring his sister rice cakes because they heard she was sick for a long time and is finally better.

"Sick," you repeat.

"It is easier than the truth," Tanjiro says, smiling. "And the truth is too good for most people to believe."

You sit on the porch, drinking tea, watching Nezuko chase butterflies in a sunlit garden. The war is a memory. The scars are healing. The world turns, and for the first time in years, it turns without fear.`,scene:'end',mood:'#2d7a16',ending:'Peaceful Future',characters:['Tanjiro','Nezuko'],effects:{flags:{ending_peaceful:true}},choices:[]};

DS_NODES.ds_cured_demons_aftermath = {text:`There are forty-three of them. Forty-three former demons who received Tamayo's cure in the final days of the war, scattered across Japan in various states of confusion and trauma.

You find them in hospitals, in forests, in the basements of abandoned buildings where they hid from sunlight out of habit even though the sun can no longer hurt them. They have human bodies again — fragile, mortal, achingly ordinary — but their minds carry centuries of demonic memory.

A woman in Osaka remembers eating her husband. A child in Hokkaido remembers hunting in packs. An old man in Kyoto remembers the moment Muzan's blood entered his veins, three hundred years ago, and the scream he could not stop screaming until the demon swallowed his voice.

You sit with each one. You listen. You do not judge, because judgment is useless when the crime was committed by a body the victim no longer inhabits.

Tamayo establishes a treatment center. Former demons learn to eat human food again, to sleep at night, to walk in sunlight without flinching. The process is slow. Some do not survive the guilt. But most do — because humans are stubborn, and the will to live is the last thing a demon can kill.

Your sister volunteers at the center. She understands — she was one of them, trapped in a body that hungered for the people she loved. She holds their hands the way Tanjiro held hers, and she says the same thing: "It was not your fault. You are home now."

Three years later, the last former demon leaves the center. She walks into the sunlight, buys a rice ball from a street vendor, and eats it sitting on a park bench, crying.

You watch from across the street. The war is truly over. Not when Muzan died — but now, when the last victim walked free.`,scene:'end',mood:'#5a3a7a',ending:'The Cured',characters:['Tamayo','Nezuko'],effects:{flags:{ending_cured:true}},choices:[]};

DS_NODES.ds_rengoku_legacy = {text:`You find his father drunk. Shinjuro Rengoku — former Flame Hashira — sits in a house cluttered with empty bottles and rage. He was a great warrior once. His son's death broke what was left of him.

"Get out," he growls. "I do not want to hear it."

You tell him anyway. You tell him about the Mugen Train. About Akaza. About how Kyojuro Rengoku held the line against an Upper Moon alone so that two hundred passengers could live. About how he smiled at the end, aflame and dying, and said: "Set your heart ablaze."

Shinjuro throws a bottle at the wall. Then another. Then he sinks to the floor and covers his face.

"I told him to quit," he whispers. "I told him the Corps was pointless. That the Hashira were fools dying for nothing."

"He did not listen."

"No. He never listened. Just like his mother." A broken laugh. "She told him to protect people. To use his strength for others. She died believing that was enough."

"It was enough. Your son proved it."

Senjuro — Kyojuro's younger brother — finds you on the porch later. He is too young to have fought, too gentle to have survived the Corps. But he carries his brother's flame in his own way — studying medicine, learning to heal instead of kill.

"Thank you for telling him," Senjuro says. "He needed to hear it from someone who was there."

You leave the Rengoku estate with the weight of a promise fulfilled. Kyojuro's sacrifice mattered. His father knows. His brother carries the flame forward. And somewhere, in whatever afterlife exists for warriors who died protecting the people they loved, the Flame Hashira is smiling.

Set your heart ablaze. You did, Rengoku. You did.`,scene:'calm',mood:'#ff6600',ending:'Rengoku\'s Legacy',characters:['Shinjuro','Senjuro'],effects:{flags:{ending_rengoku:true}},choices:[,{text:'A vision of the original Sun Breather floods your mind.',next:'ds_yoriichi_memory'},{text:'The demon who killed Rengoku — Akaza. What kind of monster could destroy a flame that bright?',next:'ds_akaza_past',effects:{stats:{int:1,emp:1}}}]};

DS_NODES.ds_next_generation = {text:`Ten years later.

The world has forgotten demons. Not completely — the scars are too deep, the missing people too many — but the active memory has faded the way all nightmares fade, replaced by daylight and routine.

You run a dojo now. Not a Demon Slayer training hall — there are no demons to slay — but a school of breathing techniques. Total Concentration Breathing, stripped of its combat applications, taught as a discipline for health, focus, and strength. Your students are ordinary people. Farmers, merchants, children with too much energy.

Tanjiro teaches Hinokami Kagura as a dance. He performs it at festivals — the twelve forms flowing like fire through his movements. The audience does not know they are watching the technique that killed a god. They just think it is beautiful.

Zenitsu married Nezuko. Of course he did. He cried through the entire wedding. She laughed through all of it. They have two children who are terrifyingly fast and unreasonably loud.

Inosuke lives in the mountains, half-feral, completely happy. He comes down for festivals and eats everything in sight.

One evening, a child comes to your dojo. Small, intense, with eyes that remind you of someone. She bows formally.

"I want to learn breathing," she says. "My grandmother told me stories. About demons. About warriors who breathed fire and cut the moon. I want to learn."

You look at her. In her eyes, you see the same fire that burned in Rengoku, in Tanjiro, in every Demon Slayer who picked up a sword because the world needed protecting.

"There are no more demons," you say.

"Grandmother says there are always demons. They just change shape."

You hand her a wooden sword. "Breathe from here. Not here. Lower. Deeper. Like this."

The next generation begins.`,scene:'end',mood:'#2d7a16',ending:'The Next Generation',characters:['Tanjiro','Nezuko','Zenitsu','Inosuke'],effects:{flags:{ending_next_gen:true}},choices:[,{text:'Among the new generation, one name keeps coming up — Zenitsu, who mastered thunder from a single form.',next:'ds_zenitsu_thunderclap',effects:{stats:{cou:1},relationships:{zenitsu:1}}}]};

DS_NODES.ds_yoriichi_memory = {text:`It comes to you in the space between one heartbeat and the next — not a dream, not a hallucination, but something older than either. A memory that does not belong to you pressing itself into the architecture of your consciousness like a hand pressed against thin paper.\n\nYou see him. Yoriichi Tsugikuni. He is nothing like you imagined. Not grandeur — not a warrior sculpted by legend into something inhuman. What you see is a man standing in a field of autumn grass with his head slightly bowed, wearing the quietness of someone who has carried a grief so long it has become indistinguishable from his posture. He is the most powerful swordsman who has ever lived, and he moves through the vision like a man apologizing for existing.\n\nHe had a wife. Uta. You feel her presence in the memory the way you feel warmth from a hearth that has long gone cold. She was carrying their child. She was everything.\n\nAnd then — she was gone. Killed by a demon while Yoriichi was away. The grief that followed was not the loud, destructive kind. It was the kind that hollows a person from the inside and leaves the exterior standing, functional, immaculate — a shell around an absence.\n\nThe Sun Breathing forms flash through the memory. Thirteen forms. Perfect. Absolute. Every movement designed to end demons permanently — born not from ambition but from loss so complete it became a kind of clarity.`,scene:'vision',mood:'#ff6600',characters:['Tanjiro'],effects:{stats:{cou:2,int:2},flags:{yoriichi_memory_seen:true}},choices:[{text:'Channel what you learned into your own Sun Breathing.',next:'ds_breath_of_sun',effects:{stats:{cou:2}}},{text:'The demon who hunted Rengoku — Akaza — was he always a monster?',next:'ds_akaza_past',effects:{stats:{emp:1}}}]};
DS_NODES.ds_akaza_past = {text:`You see it in the moment before he dies. Not his death — his life. The memories that Akaza, Upper Moon Three, has been running from for two hundred years finally catch him, and you are close enough to watch them land.\n\nHis name was Hakuji. He was a boy in Edo who stole to feed his dying father. He learned martial arts from a sick old man named Keizo who ran a failing dojo. He fell in love with Keizo's daughter, Koyuki, who was fragile and kind and who looked at him like he was worth something.\n\nAnd then a rival dojo poisoned their well. Koyuki and Keizo died while Hakuji was away, and the grief that followed was not the quiet kind. He killed sixty-seven people with his bare hands. Muzan found him in the aftermath — a broken boy surrounded by broken bodies — and offered him eternity.\n\nTwo hundred years later, Akaza still fights with the martial arts Keizo taught him. He still refuses to harm women. He has forgotten why.\n\nUntil now. Until the memories return, and the boy inside the demon remembers everything he was running from.`,scene:'revelation',mood:'#8b0000',characters:['Akaza'],effects:{stats:{emp:3,int:1},flags:{akaza_past_seen:true}},choices:[{text:'This changes nothing. He is still a demon who must be stopped.',next:'ds_start',effects:{stats:{cou:1}}},{text:'Understanding the enemy is part of defeating the enemy.',next:'ds_start',effects:{stats:{int:1,emp:1}}}]};
DS_NODES.ds_kokushibo_moon = {text:`Upper Moon One draws his blade, and the moon splits.\n\nNot metaphorically. The cursed energy that radiates from Kokushibo — Michikatsu Tsugikuni, Yoriichi's twin brother, the strongest demon beneath Muzan himself — bends the light of the moon into crescent arcs that slice through the air like breathing. Moon Breathing. Sixteen forms, each one a corruption of the Sun Breathing his brother mastered, each one beautiful and lethal and wrong in a way that makes your soul ache.\n\nHe is four hundred years old. He chose this. He chose immortality over his brother's path, chose power over principle, and spent four centuries perfecting a fighting style that is the shadow cast by the sun.\n\n"You remind me of him," Kokushibo says, and his six eyes — red, alien, ancient — study you with something that might be sorrow. "That is not a compliment."`,scene:'boss',mood:'#1a0033',characters:['Kokushibo'],effects:{stats:{cou:2},flags:{kokushibo_encountered:true}},choices:[{text:'Draw your blade. This is the fight of your life.',next:'ds_start',effects:{stats:{cou:3}}},{text:'"What happened between you and your brother?"',next:'ds_yoriichi_memory',effects:{stats:{int:1,emp:1}}}]};
DS_NODES.ds_zenitsu_thunderclap = {text:`Thunder Breathing, First Form: Thunderclap and Flash.\n\nOne form. That is all Zenitsu Agatsuma ever mastered. His master taught him all the forms — showed him every stance, every transition, every arc of lightning that Thunder Breathing could produce — and Zenitsu could do exactly one of them.\n\nBut he does that one form better than anyone who has ever lived.\n\nYou watch him do it now: asleep, because Zenitsu's body fights better than his mind allows, the fear that paralyzes him in consciousness vanishing the moment his eyes close and something deeper takes over. The draw, the step, the cut — all one motion, faster than the eye can track, faster than thought, a single perfect expression of speed and intent that turns the air to static and leaves the demon in front of him in two pieces before its brain registers what happened.\n\nHe wakes up. Screams. Asks what happened. You tell him he was incredible. He does not believe you. He never does.`,scene:'action',mood:'#ffd700',characters:['Zenitsu'],effects:{stats:{cou:1,per:1},relationships:{zenitsu:2},flags:{zenitsu_thunderclap_seen:true}},choices:[{text:'Train with Zenitsu. Help him believe in his own strength.',next:'ds_start',effects:{relationships:{zenitsu:2}}},{text:'The bond between you, Zenitsu, and Inosuke is your greatest weapon.',next:'ds_start',effects:{stats:{cha:1}}}]};
DS_NODES.ds_tamayo_sacrifice = {text:`She has been working for four hundred years. That is the first thing you must understand about Tamayo — four hundred years of research, of hiding, of collecting samples and testing compounds and failing and starting over in basements and attics and abandoned buildings across a world that would kill her on sight for what she is. A demon studying demons. A monster trying to unmake monstrosity itself.\n\nThe drug she created is not a cure. It is four drugs in sequence, each one designed to attack a different aspect of Muzan's biology: aging, decomposition, cellular division inhibition, and finally — the reversal of demonification itself. Each component required decades of research. Each one carries the weight of every person she could not save while she was working on it.\n\nWhen she injects Muzan during the final battle, she knows it will kill her. The drugs require a delivery mechanism that puts her within Muzan's reach — and Muzan does not forgive.\n\nShe does it anyway. Four hundred years of preparation, compressed into a single moment of sacrifice.`,scene:'sacrifice',mood:'#4a0e4e',characters:['Tamayo'],effects:{stats:{int:2,emp:2},flags:{tamayo_sacrifice_seen:true}},choices:[{text:'Her sacrifice will not be in vain. Press the attack on Muzan.',next:'ds_start',effects:{stats:{cou:2}}},{text:'Remember what she taught you about demon biology.',next:'ds_start',effects:{stats:{int:2}}}]};


// ============================================================
// SCENARIO DATA — ONE PIECE: GRAND LINE GAMBIT
// ============================================================
window.SCEN_NODES['demonslayer'] = DS_NODES;
})();
