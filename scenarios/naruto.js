// Scenario data: naruto  (NARUTO_NODES)
// Split out of scenario-generator.html on 2026-08-01.
// Edit THIS file to change this scenario — the main file no longer holds node data.
window.SCEN_NODES = window.SCEN_NODES || {};
(function(){
const NARUTO_NODES = {};

// ---- ARC 1: ACADEMY & TEAM ASSIGNMENT (~25 nodes) ----

NARUTO_NODES.nar_start = {text:`The morning sun hits Konohagakure like warm gold. Today is graduation day at the Academy.

You have spent years in this classroom — learning hand signs, throwing shuriken at wooden posts, memorizing the history of the Five Great Nations. Your clan is minor, barely a footnote in the village records, but your skills have earned you a seat among the top students.

Iruka-sensei stands at the front of the room, holding a stack of forehead protectors. His scar catches the light as he smiles. "When I call your name, come forward. Today you become genin of the Hidden Leaf."

You glance around. Naruto Uzumaki is vibrating with excitement in the back row. Sasuke Uchiha stares out the window like this is beneath him. Sakura Haruno watches Sasuke. Shikamaru Nara is asleep.

Your name is called.`,scene:'calm',mood:'#1a4a1a',characters:['Iruka','Naruto','Sasuke','Sakura'],choices:[{text:'Walk up proudly. You earned this.',next:'nar_graduate_proud',effects:{stats:{cou:1}}},{text:'Stay composed. Bow respectfully to Iruka-sensei.',next:'nar_graduate_respectful',effects:{stats:{int:1},rel:{iruka:2}}},{text:'Catch Naruto\`s eye and grin. You both made it.',next:'nar_graduate_naruto',effects:{stats:{cha:1},rel:{naruto:2}}}]};

NARUTO_NODES.nar_graduate_proud = {text:`You walk up with your head high. Iruka ties the forehead protector around your head and nods. "You have worked hard. Do not let it go to your head."

A few students clap. Sasuke glances at you for half a second — measuring, calculating — then looks away. You have caught the Uchiha\`s attention, even if only briefly.

After the ceremony, Naruto is sitting alone on the swing outside. He failed. Again. His eyes are hollow. The other parents whisper as they pass — "that boy" and "the demon fox" and worse.

You are about to leave when you notice Mizuki-sensei approaching Naruto with a smile that does not reach his eyes.`,scene:'calm',mood:'#1a4a1a',characters:['Iruka','Sasuke','Naruto'],effects:{flags:{graduated_proud:true}},choices:[{text:'Follow Mizuki. Something feels wrong.',next:'nar_mizuki_follow',check:{stat:'per',dc:8}},{text:'Go congratulate your classmates.',next:'nar_team_assignment'},{text:'Approach Naruto directly.',next:'nar_comfort_naruto',effects:{rel:{naruto:2}}}]};

NARUTO_NODES.nar_graduate_respectful = {text:`You bow deeply. Iruka-sensei places the forehead protector in your hands with care. "Your discipline is remarkable. Remember — a shinobi\`s greatest weapon is their mind."

He holds your gaze for a moment longer than the others. There is something there — respect earned, not given.

After the ceremony, the courtyard is full of families celebrating. Naruto sits alone on the old swing, watching. He failed again. Mizuki-sensei approaches him with a strange smile.`,scene:'calm',mood:'#1a4a1a',characters:['Iruka','Naruto'],effects:{flags:{graduated_respectful:true}},choices:[{text:'Follow Mizuki. That smile bothers you.',next:'nar_mizuki_follow',check:{stat:'per',dc:7}},{text:'Report to Iruka what you saw.',next:'nar_tell_iruka',effects:{rel:{iruka:3}}},{text:'Head home. Tomorrow is team assignments.',next:'nar_team_assignment'}]};

NARUTO_NODES.nar_graduate_naruto = {text:`You catch Naruto\`s eye and flash a grin. He lights up like a firecracker — for about three seconds. Then Iruka calls the next name and Naruto\`s face falls. He did not pass.

After the ceremony, you find him on the swing. "I almost had the clone jutsu this time," he says, not looking at you. "Almost."

Mizuki-sensei appears behind him. "Naruto, can I talk to you for a moment? I know a way you can still graduate." His smile is too wide. Too friendly.`,scene:'calm',mood:'#1a4a1a',characters:['Naruto','Iruka'],effects:{flags:{graduated_naruto:true}},choices:[{text:`"What way? I want to hear this too."`,next:'nar_mizuki_challenge',effects:{rel:{naruto:2}},check:{stat:'cha',dc:9}},{text:'Let them talk. Find Iruka instead.',next:'nar_tell_iruka',effects:{rel:{iruka:2}}},{text:'Follow them secretly.',next:'nar_mizuki_follow',check:{stat:'per',dc:8}}]};

NARUTO_NODES.nar_comfort_naruto = {text:`You walk over to the swing. Naruto looks up, surprised that anyone came.

"Hey," you say, sitting on the ground beside him. "You will get it next time."

"Everyone else passed. Even the kids who sleep through class." His voice is small. Broken.

"So you will train harder. And when you do pass, it will mean more because you earned it the hard way."

He stares at you for a long moment. Then a grin cracks through — fragile, but real. "Yeah. Yeah, you are right. Next time for sure!"

Mizuki appears behind Naruto with that too-wide smile. "Naruto, can I talk to you privately?" Something in his tone sets your teeth on edge.`,scene:'calm',mood:'#cc6600',characters:['Naruto'],effects:{rel:{naruto:3}},choices:[{text:'Follow Mizuki. Something is wrong.',next:'nar_mizuki_follow',check:{stat:'per',dc:8}},{text:'Tell Iruka about Mizuki\`s approach.',next:'nar_tell_iruka',effects:{rel:{iruka:2}}},{text:'Head home. Tomorrow is a new day.',next:'nar_team_assignment'}]};

NARUTO_NODES.nar_mizuki_follow = {text:`You trail Mizuki and Naruto through the village streets, keeping to the rooftops. Mizuki tells Naruto about a secret scroll — the Scroll of Sealing — hidden in the Hokage\`s residence. "Steal it, learn a jutsu from it, and Iruka will have to pass you."

It is a lie. You can feel it in your gut. Mizuki is using Naruto.

That night, you spot Naruto sneaking toward the Hokage building with the massive scroll strapped to his back. The alarm has not been raised yet.`,scene:'action',mood:'#0a2a5a',characters:['Naruto'],effects:{flags:{followed_mizuki:true}},choices:[{text:'Warn the Hokage immediately.',next:'nar_warn_hokage',effects:{stats:{int:1}}},{text:'Follow Naruto to protect him.',next:'nar_protect_naruto',effects:{rel:{naruto:3}},check:{stat:'cou',dc:10}},{text:'Confront Mizuki yourself.',next:'nar_confront_mizuki',check:{stat:'cou',dc:12}}]};

NARUTO_NODES.nar_mizuki_challenge = {text:`Mizuki\`s smile falters. "This is between me and Naruto." But you do not move. Naruto looks between you, confused but hopeful.

Mizuki recovers quickly. "Fine. There is a special test — steal the Scroll of Sealing and learn a technique from it. Both of you can try."

You know this is wrong. The Scroll of Sealing is a village treasure. No genin test involves theft. But Naruto\`s eyes are shining with desperate hope.`,scene:'action',mood:'#0a2a5a',characters:['Naruto'],effects:{flags:{challenged_mizuki:true}},choices:[{text:'Play along to expose Mizuki later.',next:'nar_protect_naruto',effects:{stats:{int:1}}},{text:`"This is a trap, Naruto. Think about it."`,next:'nar_warn_naruto',effects:{rel:{naruto:1},stats:{per:1}}},{text:'Report Mizuki to the Hokage.',next:'nar_warn_hokage'}]};

NARUTO_NODES.nar_tell_iruka = {text:`You find Iruka grading papers in the empty classroom. "Sensei, Mizuki approached Naruto after the ceremony. Something about a secret way to graduate. It felt wrong."

Iruka\`s face goes pale. He stands so fast his chair falls over. "Where did they go?" Without waiting for an answer, he grabs his flak jacket and sprints out.

Hours later, you hear the story — Naruto learned the Shadow Clone Jutsu from the Scroll of Sealing, Mizuki revealed himself as a traitor, and Iruka gave Naruto his own forehead protector.

Naruto is officially a genin. And he remembers who tried to help.`,scene:'calm',mood:'#1a4a1a',characters:['Iruka','Naruto'],effects:{flags:{told_iruka:true},rel:{naruto:2,iruka:3}},choices:[{text:'Continue to team assignments.',next:'nar_team_assignment'}]};

NARUTO_NODES.nar_warn_hokage = {text:`You go straight to the Hokage\`s office. The Third Hokage — Hiruzen Sarutobi — listens with his pipe in hand, ancient eyes sharp behind the smoke.

"You have good instincts," he says quietly. "ANBU — mobilize."

The situation is resolved quickly. Mizuki is captured. Naruto still learns the Shadow Clone Jutsu in the chaos, and Iruka still passes him. But the Hokage remembers your warning.

"Keep those eyes open," the Third tells you the next morning. "The village needs shinobi who see underneath the underneath."`,scene:'calm',mood:'#1a4a1a',characters:['Naruto','Iruka'],effects:{flags:{warned_hokage:true},stats:{per:1}},choices:[{text:'Continue to team assignments.',next:'nar_team_assignment'}]};

NARUTO_NODES.nar_protect_naruto = {text:`You follow Naruto into the forest. He is sitting on the ground, the massive scroll unrolled, sweat pouring down his face as he practices. "Multi Shadow Clone Jutsu... Multi Shadow Clone..."

Hours pass. He is terrible at it. Then suddenly — a hundred Narutos explode into existence around the clearing. He collapses, laughing.

Then Mizuki arrives with two giant shuriken on his back and murder in his eyes. Iruka crashes through the trees seconds later. What follows is chaos — Mizuki reveals Naruto\`s secret about the Nine-Tails, Iruka shields Naruto with his body, and Naruto unleashes a thousand shadow clones.

You fight alongside them. Your presence tips the battle even faster.`,scene:'action',mood:'#cc6600',characters:['Naruto','Iruka'],effects:{flags:{protected_naruto:true},rel:{naruto:4,iruka:2},stats:{cou:1}},choices:[{text:'Continue to team assignments.',next:'nar_team_assignment'}]};

NARUTO_NODES.nar_warn_naruto = {text:`"Naruto, think. When has any test involved stealing from the Hokage?" You watch it click behind his eyes — slowly, painfully. He wants to believe Mizuki so badly.

"But... I need to graduate," he whispers.

"Then we will find another way. A real way."

Naruto reports Mizuki\`s plan to Iruka. The traitor is caught. And Iruka, moved by Naruto\`s honesty, passes him anyway — awarding his own forehead protector.

Naruto finds you after, eyes red from crying. "Thanks for not letting me do something stupid."`,scene:'calm',mood:'#1a4a1a',characters:['Naruto','Iruka'],effects:{flags:{warned_naruto:true},rel:{naruto:4}},choices:[{text:'Continue to team assignments.',next:'nar_team_assignment'}]};

NARUTO_NODES.nar_confront_mizuki = {text:`You step out of the shadows in front of Mizuki on the forest path. "I know what you are doing. Using Naruto to steal the scroll for yourself."

Mizuki\`s pleasant mask drops like a stone. "Smart kid. Too smart." He reaches for the giant shuriken on his back.

The fight is brief and brutal. Mizuki is a chunin — you are a freshly graduated genin. He knocks you into a tree hard enough to crack bark. But you bought time. Iruka arrives. Then Naruto, with a thousand shadow clones.

Mizuki goes down. You go to the hospital. But you earned something money cannot buy — the respect of Uzumaki Naruto.`,scene:'action',mood:'#8b0000',characters:['Naruto','Iruka'],effects:{flags:{confronted_mizuki:true},rel:{naruto:5},stats:{cou:2,str:-1}},choices:[{text:'Continue to team assignments.',next:'nar_team_assignment'}]};

NARUTO_NODES.nar_team_assignment = {text:`The classroom buzzes with nervous energy. Iruka reads the team assignments. Team 7: Naruto Uzumaki, Sasuke Uchiha, Sakura Haruno. Their jonin leader — Kakashi Hatake.

Your team is announced next. You are placed on a squad that will frequently cross paths with Team 7 during missions. But the real question is how you position yourself among the village\`s rising genin.

Kakashi arrives three hours late, reading a little orange book. "My first impression of you all... you bore me." Naruto throws an eraser at his head.

You catch Kakashi\`s visible eye tracking you from across the hall. He noticed you.`,scene:'calm',mood:'#1a4a1a',characters:['Iruka','Naruto','Sasuke','Sakura','Kakashi'],choices:[{text:'Introduce yourself to Kakashi directly.',next:'nar_meet_kakashi',effects:{rel:{kakashi:2}}},{text:'Spar with Sasuke before the teams split.',next:'nar_spar_sasuke',effects:{rel:{sasuke:1}}},{text:'Stick close to Naruto and Sakura.',next:'nar_bond_team7',effects:{rel:{naruto:1,sakura:1}}}]};

NARUTO_NODES.nar_meet_kakashi = {text:`You approach Kakashi in the hallway. He does not look up from his book. "You are not on my team."

"I know. But I have heard stories about the Copy Ninja. I wanted to see if they were true."

His eye crinkles — he might be smiling under that mask. "Stories are usually exaggerated." He flips a page. "What do you want to know?"

"Everything."

A pause. He closes the book. "Come find me after your bell test. If you pass yours, I might teach you something."`,scene:'calm',mood:'#0a2a5a',characters:['Kakashi'],effects:{flags:{met_kakashi:true},stats:{cha:1}},choices:[{text:'Continue to your first real mission.',next:'nar_first_mission'}]};

NARUTO_NODES.nar_spar_sasuke = {text:`Sasuke does not look surprised when you challenge him. He looks bored. "Fine. Do not waste my time."

The training ground empties around you. Sasuke moves like water and strikes like lightning. His taijutsu is textbook-perfect, every motion economical and brutal.

You push him harder than he expected. For thirty seconds, his eyes widen — just a fraction. Then he adapts, reads your pattern, and puts you on your back.

"Not bad," he says, already walking away. From Sasuke, that is practically a love letter.`,scene:'action',mood:'#8b0000',characters:['Sasuke'],effects:{flags:{sparred_sasuke:true},stats:{str:1},rel:{sasuke:2}},choices:[{text:'Continue to your first real mission.',next:'nar_first_mission'}]};

NARUTO_NODES.nar_bond_team7 = {text:`You spend the afternoon with Naruto and Sakura at Ichiraku Ramen. Naruto inhales four bowls while recounting his fight with Mizuki in increasingly exaggerated detail. Sakura rolls her eyes but laughs despite herself.

"Sasuke would never eat ramen with us," Naruto grumbles. "He thinks he is too cool."

Sakura flushes. "Sasuke-kun has a lot on his mind! He lost his entire clan!"

You file that information away. The Uchiha Massacre. Everyone knows about it, nobody talks about it. Sasuke carries enough pain to drown in.

These will be important people. You can feel it.`,scene:'calm',mood:'#cc6600',characters:['Naruto','Sakura'],effects:{flags:{bonded_team7:true},rel:{naruto:2,sakura:2}},choices:[{text:'Continue to your first real mission.',next:'nar_first_mission'}]};

NARUTO_NODES.nar_first_mission = {text:`Weeks pass. D-rank missions. Catching cats, pulling weeds, painting fences. You grow stronger, but restless.

Then the word spreads — Team 7 has been assigned a C-rank mission outside the village. Escort a bridge builder named Tazuna to the Land of Waves. Naruto practically glows with excitement.

Your own team is assigned to support them. Kakashi requested backup after intelligence suggested the mission might be more dangerous than advertised.

On the road, Naruto is loud, Sakura is annoyed, and Sasuke is silent. Kakashi reads his book. The bridge builder drinks from a flask and sweats too much for a man on a simple escort.

Then puddles appear on a dry road.`,scene:'action',mood:'#1a4a1a',characters:['Naruto','Sasuke','Sakura','Kakashi'],effects:{flags:{land_of_waves:true}},choices:[{text:'Alert Kakashi about the puddles.',next:'nar_demon_brothers_alert',check:{stat:'per',dc:9}},{text:'Prepare for an ambush silently.',next:'nar_demon_brothers_ready',check:{stat:'int',dc:10}},{text:'Keep walking. Trust your jonin leader.',next:'nar_demon_brothers_trust'}]};

NARUTO_NODES.nar_demon_brothers_alert = {text:`You flick a hand signal to Kakashi. His eye shifts — he already noticed, but he appreciates the confirmation. Two chunin-level ninja erupt from the puddles, chains whipping between them, and shred Kakashi to pieces.

Except it is a substitution. A log.

The Demon Brothers of the Mist attack. Naruto freezes. Sasuke does not. You and Sasuke move in tandem — he pins the chain to a tree with a shuriken, you sweep one brother\`s legs and drive him into the dirt. Kakashi reappears and finishes the second.

"Nice work," Kakashi says. He is looking at you and Sasuke both. "The mission just got more complicated."`,scene:'action',mood:'#0a2a5a',characters:['Kakashi','Sasuke','Naruto'],effects:{stats:{per:1},rel:{kakashi:2,sasuke:1}},choices:[{text:'Push to continue the mission.',next:'nar_waves_continue'},{text:'Suggest turning back for reinforcements.',next:'nar_waves_caution'}]};

NARUTO_NODES.nar_demon_brothers_ready = {text:`You shift your weight subtly, loosen a kunai in its holster, and control your breathing. When the Demon Brothers explode from the puddles, you are already moving.

Chains whip through the air. Kakashi disappears — substitution jutsu. Naruto freezes. But you and Sasuke react. He pins the chain, you slam a palm strike into the nearest brother\`s solar plexus. The fight is over in seconds.

Kakashi reappears, eye crinkled. "Two of you moved before I did. Interesting."

Tazuna is pale. The mission is not what he claimed.`,scene:'action',mood:'#0a2a5a',characters:['Kakashi','Sasuke','Naruto'],effects:{stats:{int:1},rel:{kakashi:1,sasuke:2}},choices:[{text:'Push to continue the mission.',next:'nar_waves_continue'},{text:'Interrogate Tazuna about the real threat.',next:'nar_waves_interrogate'}]};

NARUTO_NODES.nar_demon_brothers_trust = {text:`The Demon Brothers erupt from the puddles. Chains wrap around Kakashi and tear him apart — but it is a log substitution. Naruto freezes, poison claw inches from his face. Sasuke kicks one brother into a tree.

You react late — a chain grazes your arm, drawing blood. The wound burns. Poison.

Kakashi finishes both enemies in seconds, then turns to examine your wound. "Shallow. You will be fine. But next time, trust your own eyes too."

Naruto, ashamed of his paralysis, stabs his own hand with a kunai. "I swear I will never freeze again." Blood drips onto the road.`,scene:'action',mood:'#8b0000',characters:['Kakashi','Sasuke','Naruto'],effects:{stats:{str:-1,cou:1},rel:{naruto:1}},choices:[{text:'Continue to the Land of Waves.',next:'nar_waves_continue'}]};

NARUTO_NODES.nar_waves_continue = {text:`The boat crosses misty waters in silence. The Land of Waves emerges from fog like a ghost — an island strangled by poverty. Gato, a shipping magnate, has choked the economy dry. Tazuna\`s bridge is the people\`s last hope.

The forest path is quiet. Too quiet.

Naruto hurls a kunai into a bush — just a rabbit. White fur. A snow rabbit, in summer. Someone used it for a substitution jutsu.

"GET DOWN!" Kakashi screams.

A massive blade spins through the air like a helicopter rotor, embedding in a tree trunk at neck height. Standing on the blade\`s handle, arms crossed, is a man wrapped in bandages with dead eyes.

Zabuza Momochi. Demon of the Hidden Mist.`,scene:'action',mood:'#0a2a5a',characters:['Kakashi','Naruto','Sasuke','Sakura'],effects:{flags:{zabuza_encounter:true}},choices:[{text:'Stand your ground with Team 7.',next:'nar_zabuza_fight',check:{stat:'cou',dc:11}},{text:'Protect Tazuna — that is the mission.',next:'nar_zabuza_protect',check:{stat:'int',dc:9}},{text:'Look for Zabuza\`s partner. He would not come alone.',next:'nar_zabuza_haku',check:{stat:'per',dc:12}}]};

NARUTO_NODES.nar_waves_caution = {text:`"We should request backup. This is clearly above C-rank."

Kakashi considers it. Sasuke glares. Naruto explodes. "No way! We are not running! I did not become a ninja to turn back!"

He stabs his own poisoned hand with a kunai. "I swear on this wound — I will never run away again!"

Kakashi watches the display with his one visible eye. "We continue. But stay sharp."

The Land of Waves awaits. And so does something far worse than two chunin.`,scene:'action',mood:'#0a2a5a',characters:['Kakashi','Naruto','Sasuke'],effects:{stats:{int:1},rel:{naruto:-1}},choices:[{text:'Continue to the Land of Waves.',next:'nar_waves_continue'}]};

NARUTO_NODES.nar_waves_interrogate = {text:`You step toward Tazuna. "The Demon Brothers are chunin-level assassins from Kirigakure. They were not after us. They were after you. Who really wants you dead?"

Tazuna breaks. He tells you everything — Gato, the shipping tyrant, the bridge that could free the Land of Waves, the poverty that made him lie about the mission rank because he could not afford a B-rank.

Kakashi looks at his team. Naruto\`s jaw is set. Sasuke says nothing. Sakura is scared but nods.

"We continue," Kakashi decides. You agree.`,scene:'calm',mood:'#0a2a5a',characters:['Kakashi','Naruto','Sasuke','Sakura'],effects:{stats:{per:1},rel:{kakashi:1}},choices:[{text:'Continue to the Land of Waves.',next:'nar_waves_continue'}]};

NARUTO_NODES.nar_zabuza_fight = {text:`Zabuza\`s killing intent hits you like a physical force. The air thickens with chakra. Mist rolls in, blinding everything.

Kakashi reveals his Sharingan — Sasuke\`s eyes go wide. The Copy Ninja fights Zabuza blade to blade, but Zabuza traps Kakashi in a Water Prison Jutsu. A sphere of water, unbreakable, holding Kakashi immobile.

"Run!" Kakashi shouts. "Take the bridge builder and go!"

Naruto refuses. He and Sasuke execute a brilliant combination — the Windmill Shuriken trick — forcing Zabuza to release Kakashi. You cover their flank, deflecting water clones that try to intercept.

A masked hunter-nin appears and drops Zabuza with senbon needles to the neck. "Thank you for weakening him. I have been tracking this one for a long time."

Something feels wrong about this rescue. But Zabuza is down.`,scene:'action',mood:'#0a2a5a',characters:['Kakashi','Naruto','Sasuke','Sakura'],effects:{stats:{cou:1},rel:{naruto:1,sasuke:1}},choices:[{text:'Train while Kakashi recovers. Learn tree climbing.',next:'nar_tree_training'},{text:'Investigate the hunter-nin. That takedown was suspicious.',next:'nar_investigate_haku',check:{stat:'per',dc:10}}]};

NARUTO_NODES.nar_zabuza_protect = {text:`While Kakashi fights Zabuza, you form a defensive perimeter around Tazuna with Sasuke and Sakura. Water clones probe your defenses. You hold the line.

Kakashi is trapped in the Water Prison. Naruto and Sasuke free him with the Windmill Shuriken gambit. A hunter-nin appears and apparently kills Zabuza.

But as the hunter-nin carries the body away, you notice — senbon to the neck. Temporary death state. You have read about this technique.

"Kakashi-sensei," you say quietly. "Zabuza is not dead."

Kakashi\`s eye narrows. "I know. We have about a week before he recovers."`,scene:'action',mood:'#0a2a5a',characters:['Kakashi','Sasuke','Sakura'],effects:{stats:{int:1},rel:{kakashi:2},flags:{knows_zabuza_alive:true}},choices:[{text:'Train intensely. You need to be ready.',next:'nar_tree_training'},{text:'Scout the area for Gato\`s hideout.',next:'nar_scout_gato',check:{stat:'per',dc:11}}]};

NARUTO_NODES.nar_zabuza_haku = {text:`While the fight rages, you scan the tree line. There — a masked figure in the canopy, watching. Hunter-nin mask, but the body language is wrong. This person is not here to capture Zabuza. They are his partner.

You lock eyes with the mask. The figure tilts their head, surprised that you noticed.

After Kakashi is freed and Zabuza is "killed" by the hunter-nin\`s senbon, you already know the truth. It is a performance. Zabuza will return.

You pull Kakashi aside and tell him everything. He looks at you differently after that. "You see underneath the underneath. Good."`,scene:'action',mood:'#0a2a5a',characters:['Kakashi'],effects:{stats:{per:2},rel:{kakashi:3},flags:{spotted_haku:true,knows_zabuza_alive:true}},choices:[{text:'Train for the rematch.',next:'nar_tree_training'},{text:'Try to find and talk to the masked ninja.',next:'nar_find_haku'}]};

NARUTO_NODES.nar_tree_training = {text:`Kakashi teaches tree climbing — walking up vertical surfaces using chakra focused in your feet. Naruto and Sasuke are terrible at it. Sakura masters it instantly.

You train beside them. The exercise pushes your chakra control to its limits. Days blur together — climb, fall, climb higher, fall harder. Naruto and Sasuke turn it into a competition, driving each other to exhaustion.

One evening, Naruto collapses in a forest clearing and wakes up to a beautiful figure gathering herbs. Haku — though Naruto does not know that yet.

The week is ending. Zabuza will come back. You can feel it in the tightening air.`,scene:'calm',mood:'#1a4a1a',characters:['Kakashi','Naruto','Sasuke','Sakura'],effects:{stats:{int:1}},choices:[{text:'Push your training harder. Master water walking too.',next:'nar_bridge_battle',effects:{stats:{str:1}}},{text:'Help Naruto with his chakra control.',next:'nar_bridge_battle',effects:{rel:{naruto:2}}},{text:'Spar with Sasuke to sharpen combat instincts.',next:'nar_bridge_battle',effects:{rel:{sasuke:1},stats:{cou:1}}}]};

NARUTO_NODES.nar_scout_gato = {text:`You infiltrate Gato\`s compound under cover of darkness. The shipping magnate surrounds himself with mercenaries — no ninja, just hired muscle with swords and bad attitudes.

You count the guards, map the exits, and overhear Gato berating Zabuza through a door. "I am not paying you to rest. Kill the bridge builder or I will find someone who can."

Zabuza\`s voice is ice: "Touch me again and I will add your hand to my collection."

You slip out with critical intelligence — Gato plans to betray Zabuza after the bridge builder is dead. This information could change everything.`,scene:'action',mood:'#0a2a5a',characters:[],effects:{stats:{per:1},flags:{scouted_gato:true}},choices:[{text:'Share this intel with Kakashi.',next:'nar_bridge_battle',effects:{rel:{kakashi:2}}},{text:'Keep it secret. Use it when the time is right.',next:'nar_bridge_battle',effects:{stats:{int:1}}}]};

NARUTO_NODES.nar_find_haku = {text:`You find the masked ninja gathering herbs in a forest clearing at dawn. Without the mask, they are strikingly beautiful — delicate features, long dark hair, eyes full of gentle sadness.

"You knew I was watching during the fight," they say. No hostility. Just curiosity.

"You are Zabuza\`s partner. Not a hunter-nin."

A sad smile. "My name is Haku. I am Zabuza\`s tool. His weapon. When someone precious to you is threatened, you find true strength. Do you have someone like that?"

The question cuts deeper than any blade. You talk until sunrise — about purpose, bonds, and what it means to fight for someone else.`,scene:'calm',mood:'#0a2a5a',characters:[],effects:{stats:{cha:1},flags:{befriended_haku:true}},choices:[{text:'Try to convince Haku there is another way.',next:'nar_bridge_battle',effects:{stats:{cha:1},flags:{haku_doubt:true}}},{text:'Accept that you will be enemies on the bridge.',next:'nar_bridge_battle',effects:{stats:{cou:1}}}]};

NARUTO_NODES.nar_investigate_haku = {text:`You examine the spot where Zabuza fell. Senbon needles — precision weapons. Aimed at the neck, targeting pressure points that induce temporary death. A real hunter-nin would have destroyed the body on site.

"Kakashi-sensei. That was not a hunter-nin. Zabuza is alive."

Kakashi is lying in bed, drained from Sharingan overuse. He smiles grimly. "Correct. We have maybe a week. I need to teach you all something."

Tree climbing training begins the next morning. But you have an edge — you know what is coming.`,scene:'calm',mood:'#0a2a5a',characters:['Kakashi'],effects:{flags:{knows_zabuza_alive:true},rel:{kakashi:2},stats:{per:1}},choices:[{text:'Train with everything you have.',next:'nar_tree_training'}]};

NARUTO_NODES.nar_bridge_battle = {text:`The mist rolls in on the unfinished bridge like a funeral shroud. Zabuza stands at the far end. Beside him, Haku wears the hunter-nin mask.

The workers are unconscious. Gato\`s mercenaries line the bridge behind you, cutting off retreat. Kakashi faces Zabuza. Sasuke faces Haku. Naruto is late — still exhausted from training.

Haku\`s Crystal Ice Mirrors erupt around Sasuke, trapping him in a dome of reflective ice. Senbon rain down from every direction. Sasuke is being shredded.

Naruto arrives. He charges into the dome to help Sasuke. The mirrors seal behind him.

You have seconds to decide.`,scene:'action',mood:'#8b0000',characters:['Kakashi','Sasuke','Naruto','Sakura'],effects:{flags:{bridge_battle:true}},choices:[{text:'Break through the ice mirrors from outside.',next:'nar_bridge_smash',check:{stat:'str',dc:12}},{text:'Help Kakashi fight Zabuza. End the source.',next:'nar_bridge_zabuza',check:{stat:'cou',dc:11}},{text:'Use genjutsu to disrupt Haku\`s technique.',next:'nar_bridge_genjutsu',check:{stat:'int',dc:13}}]};

NARUTO_NODES.nar_bridge_smash = {text:`You pour everything into your strongest attack and slam it into the ice mirrors. Cracks spider-web across the surface. Haku\`s concentration wavers — just enough for Sasuke to find an opening.

Inside the dome, Sasuke\`s eyes change. The Sharingan awakens — two tomoe, spinning like red pinwheels. He begins tracking Haku\`s movements between the mirrors.

But Haku targets Naruto instead. Sasuke throws himself in front of the senbon barrage. He falls. Naruto\`s eyes turn red, whisker marks deepening, as the Nine-Tails\` chakra erupts.

The ice mirrors shatter. The demon fox\`s power is terrifying.`,scene:'action',mood:'#8b0000',characters:['Naruto','Sasuke'],effects:{stats:{str:1},flags:{broke_mirrors:true}},choices:[{text:'Help Naruto control the Nine-Tails power.',next:'nar_bridge_aftermath',effects:{rel:{naruto:2}}},{text:'Check on Sasuke. He is not moving.',next:'nar_bridge_aftermath',effects:{rel:{sasuke:2}}}]};

NARUTO_NODES.nar_bridge_zabuza = {text:`You join Kakashi against Zabuza. The Demon of the Mist fights in blinding fog — his Silent Killing technique makes him almost invisible. But Kakashi\`s Sharingan pierces the mist.

You serve as Kakashi\`s eyes on his blind side, calling out Zabuza\`s water clones before they can strike. Together, you push Zabuza back.

Inside the ice dome, Sasuke awakens his Sharingan. Then falls protecting Naruto. The Nine-Tails\` chakra explodes outward, shattering Haku\`s mirrors. Zabuza feels the shockwave and his eyes widen.

Haku appears between Kakashi\`s Lightning Blade and Zabuza, taking the killing blow meant for his master.`,scene:'action',mood:'#8b0000',characters:['Kakashi','Naruto','Sasuke'],effects:{stats:{cou:1},rel:{kakashi:2}},choices:[{text:'Watch the aftermath unfold.',next:'nar_bridge_aftermath'}]};

NARUTO_NODES.nar_bridge_genjutsu = {text:`You weave a genjutsu into the mist itself — subtle, layered, targeting Haku\`s spatial awareness. The mirrors flicker. Haku\`s aim shifts by millimeters — enough to miss vital points, turning lethal strikes into grazing wounds.

Sasuke notices the change. His Sharingan awakens as he tracks the disrupted pattern. Naruto\`s Nine-Tails chakra explodes when Sasuke falls protecting him.

Your genjutsu unravels under the fox\`s raw power, but it served its purpose. Sasuke is alive — barely. And Haku hesitates, caught between your illusion and Naruto\`s fury.

Haku makes the final choice — stepping in front of Kakashi\`s Lightning Blade to save Zabuza.`,scene:'action',mood:'#0a2a5a',characters:['Kakashi','Naruto','Sasuke'],effects:{stats:{int:1},flags:{used_genjutsu_bridge:true}},choices:[{text:'Watch the aftermath unfold.',next:'nar_bridge_aftermath'}]};

NARUTO_NODES.nar_bridge_aftermath = {text:`Haku dies with a smile. Zabuza weeps behind his bandages. Gato arrives with a hundred mercenaries, laughing at Zabuza\`s sentiment. "You were just a tool. All of you shinobi are just tools."

Naruto\`s words cut through the mist: "He loved you. Haku loved you and gave everything for you. And you are just going to stand there?"

Zabuza borrows a kunai. With a blade in his teeth and nothing left to lose, he carves through Gato\`s army. He dies on top of Gato\`s corpse, reaching for Haku.

Snow falls on the bridge. Naruto cries openly. Sasuke turns away to hide his own tears. Kakashi stands guard in silence.

You helped build this moment. And something has shifted in Team 7 — bonds forged in blood that will echo through everything to come.`,scene:'calm',mood:'#0a2a5a',characters:['Naruto','Sasuke','Sakura','Kakashi'],effects:{flags:{waves_complete:true}},choices:[{text:'Return to the village. The Chunin Exams await.',next:'nar_chunin_announce'}]};

// ---- ARC 2: CHUNIN EXAMS & INVASION (~30 nodes) ----

NARUTO_NODES.nar_chunin_announce = {text:`Back in Konoha, life returns to normal for three weeks. Then Kakashi nominates Team 7 for the Chunin Exams. Your own jonin leader does the same for your squad.

The exam hall is packed with genin from every hidden village. Sand ninja with cold eyes. Sound ninja with strange devices on their arms. A Hyuga prodigy named Neji who looks through people like they are made of glass.

And there — Gaara of the Sand. Red hair, dark circles around pale eyes, a massive gourd on his back. He does not blink. Something inside him is very, very wrong.

Rock Lee challenges Sasuke in the hallway and nearly kicks his head off. The competition is real.

The First Exam begins — a written test designed by Ibiki Morino, head of Torture and Interrogation.`,scene:'action',mood:'#1a4a1a',characters:['Naruto','Sasuke','Sakura','Kakashi','Gaara'],effects:{flags:{chunin_exams:true}},choices:[{text:'Answer through knowledge. You studied for this.',next:'nar_written_exam',check:{stat:'int',dc:10}},{text:'Gather answers covertly. The test is about intel gathering.',next:'nar_written_cheat',check:{stat:'per',dc:11}},{text:'Trust your gut on the tenth question like Naruto.',next:'nar_written_guts',check:{stat:'cou',dc:9}}]};

NARUTO_NODES.nar_written_exam = {text:`The questions are chunin-level — advanced cryptography, trajectory calculations, tactical scenarios. You work through them methodically while around you, genin panic, cheat, and get eliminated.

Naruto has not answered a single question. He is sweating bullets. But when the tenth question comes — "Accept the question and risk failing forever, or quit now" — he slams his hand on the desk.

"I will never run away! That is my ninja way!"

Ibiki smiles. The tenth question was the test. Everyone who stayed, passes.

You head to the next stage with full marks — a fact that draws attention from the Sand siblings and a pale, snake-eyed man watching from the shadows.`,scene:'action',mood:'#0a2a5a',characters:['Naruto'],effects:{stats:{int:1},flags:{written_passed:true}},choices:[{text:'Enter the Forest of Death.',next:'nar_forest_entry'}]};

NARUTO_NODES.nar_written_cheat = {text:`You use every trick you know — reflective surfaces, subtle jutsu, reading body language of those who know the answers. The test is designed to be cheated. The real exam is not getting caught.

You gather eight of nine answers. The tenth question is a bluff — stay or quit. Naruto\`s outburst convinces everyone to stay.

Ibiki reveals the truth: information gathering under pressure. That was the real test. You passed on both levels.

Anko Mitarashi crashes through the window for the second exam announcement, and you head for Training Ground 44.`,scene:'action',mood:'#0a2a5a',characters:['Naruto'],effects:{stats:{per:1},flags:{written_passed:true}},choices:[{text:'Enter the Forest of Death.',next:'nar_forest_entry'}]};

NARUTO_NODES.nar_written_guts = {text:`You cannot answer most of the questions. Neither can Naruto. But when the tenth question comes — quit or risk it all — you stay. Not because you know the answer, but because you refuse to give up.

Naruto slams his desk. "I will never run away! Even if I stay a genin forever!"

Ibiki reveals that the courage to face the unknown was the real test. You pass. Barely. But you pass.

Anko Mitarashi appears with manic energy. "Training Ground 44 — the Forest of Death. Half of you will not make it out."

She is not exaggerating.`,scene:'action',mood:'#0a2a5a',characters:['Naruto'],effects:{stats:{cou:1},flags:{written_passed:true}},choices:[{text:'Enter the Forest of Death.',next:'nar_forest_entry'}]};

NARUTO_NODES.nar_forest_entry = {text:`The Forest of Death is a nightmare wrapped in leaves. Trees the size of buildings. Insects the size of dogs. And twenty-six teams hunting each other for paired scrolls — Heaven and Earth.

Your team enters through Gate 12. The canopy closes overhead like a mouth.

Within the first hour, you hear screaming from three directions. A giant snake crashes through the undergrowth half a mile east. Something about that snake feels deliberate — calculated.

Team 7 is in there. And so is something that should not be.

You sense a chakra signature so vast and so wrong that your skin crawls. It is not a genin. It is not even human-scale power. Something monstrous is hunting inside this forest.`,scene:'action',mood:'#1a4a1a',characters:[],effects:{flags:{forest_of_death:true}},choices:[{text:'Track the monstrous chakra. Someone needs to know.',next:'nar_forest_orochi',check:{stat:'per',dc:12}},{text:'Focus on collecting scrolls. Win the exam.',next:'nar_forest_scrolls',check:{stat:'int',dc:10}},{text:'Find Team 7. They might need backup.',next:'nar_forest_team7',check:{stat:'cou',dc:11}}]};

NARUTO_NODES.nar_forest_orochi = {text:`You track the monstrous chakra through the canopy, moving silent as shadow. What you find stops your heart.

A figure with pale skin and golden snake eyes has cornered Team 7. Naruto is unconscious against a tree, a seal burned onto his stomach. Sasuke is on his knees, paralyzed by killing intent so thick you can taste it.

The figure\`s neck extends like a serpent — impossibly, horribly — and bites Sasuke on the neck. Sasuke screams and collapses. A cursed seal blooms on his skin like a black bruise.

Orochimaru. One of the Legendary Sannin. Here, in a genin exam.

He notices you watching. His tongue, purple and obscenely long, licks his lips. "Another interesting one? No... you are not what I am looking for." He vanishes.

You rush to Team 7.`,scene:'action',mood:'#8b0000',characters:['Sasuke','Naruto','Orochimaru'],effects:{stats:{per:1},flags:{witnessed_curse_mark:true},rel:{sasuke:1}},choices:[{text:'Report Orochimaru\`s presence to the proctors.',next:'nar_report_orochi',effects:{stats:{int:1}}},{text:'Stay and guard Team 7 until they recover.',next:'nar_guard_team7',effects:{rel:{sasuke:2,naruto:2,sakura:2}}},{text:'Chase Orochimaru. He cannot be allowed to escape.',next:'nar_chase_orochi',check:{stat:'cou',dc:15}}]};

NARUTO_NODES.nar_forest_scrolls = {text:`You focus on the mission. Your team ambushes a Rain team at a river crossing, claiming their scroll. The Forest of Death is brutal — giant leeches, poison spore plants, rival teams setting traps.

On the second night, you hear an explosion from the northwest. A blast of purple chakra lights the canopy like a second sun. Something terrible is happening to Team 7.

By the time you reach the central tower with both scrolls, the rumors are already spreading. Orochimaru — the S-rank missing-nin — infiltrated the exam. He marked Sasuke Uchiha with a cursed seal. ANBU are sweeping the forest.

Sasuke emerges from the forest changed. Darker. The black marks on his neck pulse with malevolent energy.`,scene:'action',mood:'#1a4a1a',characters:['Sasuke'],effects:{stats:{int:1},flags:{collected_scrolls:true}},choices:[{text:'Check on Sasuke at the tower.',next:'nar_preliminaries',effects:{rel:{sasuke:1}}},{text:'Focus on the preliminary matches.',next:'nar_preliminaries'}]};

NARUTO_NODES.nar_forest_team7 = {text:`You find Team 7 in ruins. Naruto is unconscious with a disrupted chakra seal. Sasuke is burning with fever, a three-tomoe mark on his neck pulsing with dark energy. Sakura is alone, guarding them both, her hair freshly cut from a fight with Sound ninja.

"What happened?" you ask.

"Orochimaru," she whispers. Her eyes are hollow. "He is one of the Legendary Sannin. He bit Sasuke and gave him that mark. The Sound ninja came after — said Orochimaru sent them to test Sasuke."

You help her defend the camp. When the Sound trio returns, you fight alongside Rock Lee and the Ino-Shika-Cho trio to drive them back.

Then Sasuke wakes up. The curse mark spreads across his body like black flame. His chakra is wrong — cold, hungry. He breaks a Sound ninja\`s arms and smiles.

Sakura grabs him, crying. "Stop! This is not you!"

He hesitates. The marks recede. But something has changed in Sasuke Uchiha.`,scene:'action',mood:'#8b0000',characters:['Sasuke','Sakura','Naruto','Orochimaru'],effects:{rel:{sakura:3,sasuke:2},flags:{helped_team7_forest:true}},choices:[{text:'Help Team 7 reach the tower.',next:'nar_preliminaries'},{text:'Warn Sasuke about the curse mark\`s danger.',next:'nar_warn_sasuke_curse',effects:{rel:{sasuke:1}}}]};

NARUTO_NODES.nar_report_orochi = {text:`You break from the forest and find Anko Mitarashi at the perimeter. When you say the name "Orochimaru," her face drains of color. She touches her own neck — the same curse mark.

"Stay here," she hisses, and vanishes into the trees. ANBU mobilize. The Third Hokage is notified. The exam continues, but under heavy surveillance.

Your warning accelerated the village\`s response. Orochimaru\`s invasion plan now faces a slightly more prepared Konoha.

You return to the forest and complete the exam, reaching the tower with both scrolls.`,scene:'action',mood:'#0a2a5a',characters:['Orochimaru'],effects:{stats:{int:1},flags:{reported_orochi:true}},choices:[{text:'Proceed to the preliminary matches.',next:'nar_preliminaries'}]};

NARUTO_NODES.nar_guard_team7 = {text:`You stand guard over Team 7 for two days. Sakura barely sleeps, tending to Sasuke\`s fever while Naruto remains unconscious. Sound ninja attack once — you and Sakura fight them off together. She is stronger than anyone gives her credit for.

When Sasuke finally wakes, the curse mark flares. Dark chakra bleeds from his skin. He is different — colder, sharper, like a blade being forged in poison fire. He crushes a Sound ninja\`s arms before Sakura\`s tears pull him back.

You help them reach the tower. The bond between you and Team 7 is cemented in shared blood and sleepless nights.`,scene:'action',mood:'#8b0000',characters:['Sasuke','Sakura','Naruto'],effects:{rel:{sakura:3,naruto:2,sasuke:2},flags:{guarded_team7:true}},choices:[{text:'Proceed to the preliminary matches.',next:'nar_preliminaries'}]};

NARUTO_NODES.nar_chase_orochi = {text:`You pursue Orochimaru through the canopy. It is like chasing a nightmare. He moves through the trees like a snake through water, and when he finally stops, it is because he finds you amusing.

"Brave. Foolish, but brave." His golden eyes pin you in place. The killing intent is crushing — your vision tunnels, your lungs lock. "Run along, little genin. I have what I came for."

He flicks a finger. A gust of wind slams you backward through three tree trunks. You wake up an hour later with cracked ribs and a healthy respect for S-rank ninja.

Your team finds you, patches you up, and you limp to the tower with your scrolls.`,scene:'action',mood:'#8b0000',characters:['Orochimaru'],effects:{stats:{cou:2,str:-1},flags:{chased_orochi:true}},choices:[{text:'Proceed to the preliminary matches.',next:'nar_preliminaries'}]};

NARUTO_NODES.nar_warn_sasuke_curse = {text:`You pull Sasuke aside at the tower. "That mark on your neck — Orochimaru put it there. It feeds on hatred and desire for power. It will give you strength, but the cost—"

"I know what it costs," Sasuke cuts you off. His eyes are cold. "I need power. My brother murdered my entire clan. Every Uchiha — men, women, children. He left me alive to suffer." His hand goes to the mark. "If this curse gives me the strength to kill Itachi, I will pay any price."

The conviction in his voice is absolute. And terrifying.

"There might be other ways to get strong," you offer.

He looks at you — really looks — for just a moment. Then the wall goes back up. "Maybe. But they would have to be faster."`,scene:'calm',mood:'#8b0000',characters:['Sasuke'],effects:{rel:{sasuke:3},flags:{warned_sasuke:true}},choices:[{text:'Proceed to the preliminary matches.',next:'nar_preliminaries'}]};

NARUTO_NODES.nar_preliminaries = {text:`Too many teams passed. Preliminary one-on-one matches in the tower arena. The screen randomizes names.

Sasuke fights Yoroi — wins despite the curse mark trying to consume him. Naruto defeats Kiba with sheer unpredictability. Sakura and Ino fight to a draw. Gaara crushes Rock Lee\`s arm and leg without a flicker of emotion.

Your name appears on the board. Your opponent: a Sound ninja with a confident smirk and metal gauntlets that emit disorienting sonic waves.

The arena falls silent. Hayate Gekko, the sickly proctor, coughs. "Begin."`,scene:'action',mood:'#cc6600',characters:['Naruto','Sasuke','Gaara'],effects:{flags:{preliminaries:true}},choices:[{text:'Close the distance fast. Do not let him use those gauntlets.',next:'nar_prelim_rush',check:{stat:'str',dc:11}},{text:'Analyze his technique first. Find the weakness.',next:'nar_prelim_analyze',check:{stat:'int',dc:10}},{text:'Use deception. Make him overcommit.',next:'nar_prelim_deceive',check:{stat:'cha',dc:11}}]};

NARUTO_NODES.nar_prelim_rush = {text:`You explode forward before the Sound ninja can set his stance. Your fist connects with his guard — the gauntlets shriek, sending a wave of sound that rattles your teeth. But you expected it. You push through, inside his range where the gauntlets are useless.

Elbow to the ribs. Knee to the thigh. He stumbles back, tries to create distance, but you stay on him like a shadow. A final spinning kick sends him into the wall. He does not get up.

"Winner — by knockout," Hayate announces.

From the balcony, Kakashi gives you a subtle nod. Might Guy cries tears of joy at your taijutsu. Sasuke watches with those dark, calculating eyes.`,scene:'action',mood:'#cc6600',characters:['Kakashi'],effects:{stats:{str:1},flags:{prelim_won:true}},choices:[{text:'Prepare for the finals. One month of training.',next:'nar_training_month'}]};

NARUTO_NODES.nar_prelim_analyze = {text:`You dodge the first sonic blast and watch. The gauntlets amplify sound waves through chakra channels in his arms — but there is a half-second delay between the activation and the blast. A charging window.

You bait three attacks, mapping the pattern. Then you strike in the gap. A precise palm strike disrupts his chakra flow to the left gauntlet. He swings the right — you duck under and sweep his legs.

On the ground, you pin him with a kunai at his throat. "Yield."

He yields. The crowd murmurs. It was clinical. Efficient. The kind of fight that makes jonin take notes.`,scene:'action',mood:'#cc6600',characters:['Kakashi'],effects:{stats:{int:1},flags:{prelim_won:true}},choices:[{text:'Prepare for the finals. One month of training.',next:'nar_training_month'}]};

NARUTO_NODES.nar_prelim_deceive = {text:`You create two shadow clones and send them charging while you substitute with a floor tile. The Sound ninja blasts both clones — they burst into smoke. He grins.

Then you appear behind him, having circled under the genjutsu cover of the smoke. Your kunai rests against his spine.

"Yield."

His eyes go wide. He never saw you move. The gauntlets hum with unused power. Slowly, he raises his hands.

"Winner," Hayate coughs. The crowd is quiet — they are not sure what they just saw. That is exactly how you like it.`,scene:'action',mood:'#cc6600',characters:['Kakashi'],effects:{stats:{cha:1},flags:{prelim_won:true}},choices:[{text:'Prepare for the finals. One month of training.',next:'nar_training_month'}]};

NARUTO_NODES.nar_training_month = {text:`One month until the Chunin Exam finals. The village buzzes with anticipation. Naruto trains with Jiraiya — the Toad Sage, one of the Legendary Sannin — learning to summon giant toads and control the Nine-Tails chakra. Sasuke trains privately with Kakashi, mastering the Chidori.

You need a teacher. And you need to get stronger fast — Gaara, Neji, and the others in the finals are no joke.

Word reaches you that multiple powerful ninja are in the village. Jiraiya at the hot springs. Kakashi at the training grounds. Even Guy-sensei is looking for a sparring partner.

But there are also whispers of something darker — Sand and Sound ninja moving in unusual patterns. The invasion is coming. You can feel it.`,scene:'calm',mood:'#1a4a1a',characters:['Naruto','Sasuke','Kakashi','Jiraiya'],choices:[{text:'Seek out Jiraiya. Learn from a Sannin.',next:'nar_train_jiraiya',effects:{rel:{jiraiya:2}},check:{stat:'cha',dc:10}},{text:'Train with Guy-sensei. Push your physical limits.',next:'nar_train_guy',effects:{stats:{str:2}}},{text:'Investigate the Sand/Sound movements.',next:'nar_investigate_invasion',check:{stat:'per',dc:11}}]};

NARUTO_NODES.nar_train_jiraiya = {text:`You find Jiraiya at the hot springs, doing "research" with a telescope aimed at the women\`s bath. He is a massive man with white hair, red face paint, and an ego the size of Fire Country.

"Train you? I am busy." He does not look away from the telescope.

"I can see underneath the underneath. I know the chunin exams are a cover for something. Sand and Sound are planning an attack."

Now he looks at you. The goofy pervert vanishes. What replaces it is one of the most dangerous ninja alive.

"Tell me everything."

He trains you for two weeks. Chakra control, elemental affinity, combat awareness. He is a brutal teacher but a brilliant one. "You remind me of someone," he says one evening. He does not say who.`,scene:'calm',mood:'#cc6600',characters:['Jiraiya'],effects:{stats:{int:1,cha:1},rel:{jiraiya:3},flags:{trained_jiraiya:true}},choices:[{text:'Head to the Chunin Exam finals.',next:'nar_finals'}]};

NARUTO_NODES.nar_train_guy = {text:`Might Guy weeps openly when you ask to train with him. "THE SPRINGTIME OF YOUTH BURNS BRIGHT IN YOU!" He literally sparkles.

What follows is the most physically punishing month of your life. Five hundred laps around the village. Taijutsu drills until your fists bleed. Weights that make gravity feel personal. Lee joins you — his enthusiasm is relentless.

"A genius of hard work," Guy calls you. "Talent means nothing without the will to push beyond your limits!"

By the end, you are faster, stronger, and harder to kill. Your body has become a weapon.`,scene:'action',mood:'#1a4a1a',characters:[],effects:{stats:{str:2,cou:1},flags:{trained_guy:true}},choices:[{text:'Head to the Chunin Exam finals.',next:'nar_finals'}]};

NARUTO_NODES.nar_investigate_invasion = {text:`You shadow Sand ninja through the village at night. They meet with Sound operatives in a warehouse near the wall. You cannot hear the conversation, but you see maps of Konoha\`s defenses, patrol schedules, and a diagram of the exam arena.

A full-scale invasion. During the finals. When the entire village leadership will be in one place.

You report to the Third Hokage directly. The old man listens, pipe smoke curling, and nods slowly. "We have suspected. But confirmation is valuable." He places a hand on your shoulder. "You may have just saved many lives."

ANBU patrols are quietly doubled. The trap is being set for the trappers.`,scene:'calm',mood:'#0a2a5a',characters:[],effects:{stats:{per:2},flags:{discovered_invasion:true}},choices:[{text:'Head to the Chunin Exam finals.',next:'nar_finals'}]};

NARUTO_NODES.nar_finals = {text:`The arena is packed. The Hokage sits with the Kazekage — who moves wrong, whose smile does not reach his eyes. If you investigated the invasion, you know why.

The matches are electric. Naruto defeats Neji Hyuga by channeling the Nine-Tails chakra through sheer willpower, proving that fate can be defied. Sasuke arrives late and fights Gaara — Chidori against sand armor.

Then the feathers fall. Genjutsu cascades over the arena. The audience slumps into sleep. Explosions rock the village walls. Sand and Sound ninja pour through breaches.

The Kazekage reveals himself as Orochimaru. He traps the Third Hokage on the arena rooftop behind a barrier of purple flame.

The invasion has begun.`,scene:'action',mood:'#8b0000',characters:['Naruto','Sasuke','Gaara','Orochimaru'],effects:{flags:{invasion_begun:true}},choices:[{text:'Break the genjutsu on civilians and organize defense.',next:'nar_invasion_defend',check:{stat:'int',dc:10}},{text:'Pursue Gaara. Sasuke already went after him.',next:'nar_invasion_gaara',check:{stat:'cou',dc:12}},{text:'Try to reach the Hokage. Help him fight Orochimaru.',next:'nar_invasion_hokage',check:{stat:'cou',dc:14}}]};

NARUTO_NODES.nar_invasion_defend = {text:`You release the genjutsu on nearby chunin and civilians, rallying a defense. Sound ninja pour through the streets. You fight alongside Konoha shinobi, holding chokepoints and evacuating civilians.

A giant three-headed snake crashes through the village wall. Gamabunta — the Chief Toad — appears in a cloud of smoke to fight it. Jiraiya is on the battlefield.

You hold your sector. When a Sound jonin corners a group of Academy students, you put yourself between them and death. The fight is brutal — you take a kunai to the shoulder — but you hold long enough for backup to arrive.

On the rooftop, the Third Hokage is fighting Orochimaru alone. Purple barrier. No one can get through. The old man is giving everything he has.`,scene:'action',mood:'#8b0000',characters:['Jiraiya','Orochimaru'],effects:{stats:{int:1,cou:1},flags:{defended_village:true}},choices:[{text:'Can the Hokage be saved? Search for a way through the barrier.',next:'nar_hokage_fate',check:{stat:'per',dc:14}},{text:'Keep defending. Trust the Hokage to handle Orochimaru.',next:'nar_hokage_fate'}]};

NARUTO_NODES.nar_invasion_gaara = {text:`You race through the forest after Sasuke, who pursued Gaara. The sand ninja has transformed — partially released the One-Tailed Beast inside him. Half his body is monstrous sand, one arm massive and clawed.

Sasuke is down. Chidori drained his chakra. Gaara looms over him, arm raised to kill.

You arrive first. Your attack drives Gaara back — but the sand is alive, autonomous, defending him without conscious thought. Every strike you land, the sand absorbs.

Then Naruto arrives. What follows is a battle between two jinchuriki — vessels of tailed beasts. Naruto summons Gamabunta. Gaara fully releases Shukaku. The forest is leveled.

Naruto wins by headbutting Gaara awake inside the sand demon. Two broken boys, lying in a crater, finally understanding each other.`,scene:'action',mood:'#cc6600',characters:['Naruto','Sasuke','Gaara'],effects:{stats:{cou:1},rel:{naruto:2,gaara:2,sasuke:1},flags:{fought_gaara:true}},choices:[{text:'Return to the village. The battle is ending.',next:'nar_hokage_fate'}]};

NARUTO_NODES.nar_invasion_hokage = {text:`You charge toward the arena rooftop. The purple barrier of the Sound Four is impenetrable — ANBU have already tried. The flames burn anyone who touches them.

Inside, the Third Hokage faces Orochimaru and the reanimated First and Second Hokages. It is a battle between gods. The old man fights with everything — every jutsu he learned in seventy years of war.

You cannot get through. No one can. But you try. You pour chakra into the barrier, looking for weaknesses, buying time, hoping the Third can finish it.

He does. The Reaper Death Seal — a forbidden jutsu that costs the user their soul. Hiruzen Sarutobi seals Orochimaru\`s arms, crippling the snake forever.

The Third Hokage dies standing. His last words echo across the rooftop: "The Will of Fire will always burn bright."`,scene:'action',mood:'#8b0000',characters:['Orochimaru'],effects:{stats:{cou:2},flags:{tried_save_hokage:true}},choices:[{text:'Mourn with the village.',next:'nar_hokage_fate'}]};

NARUTO_NODES.nar_hokage_fate = {text:`The Third Hokage is dead. He gave his life to stop Orochimaru, sealing away the snake\`s ability to use jutsu. The village is battered but standing. Buildings burn. Families grieve. The Hokage monument watches over it all with stone eyes.

The funeral is held in rain. Every ninja in the village stands in black. Naruto stares at the portrait of the old man who protected him when no one else would. Konohamaru — the Third\`s grandson — cries into Iruka\`s chest.

You stand among the mourners and feel the weight of what was lost. And what was gained — because Konoha survived. The Will of Fire endures.

But the village needs a new Hokage. And darker clouds are gathering on the horizon.

Jiraiya leaves to find Tsunade — the last of the Sannin, the only one who can lead the village now.`,scene:'calm',mood:'#0a2a5a',characters:['Naruto','Sasuke','Kakashi','Jiraiya','Iruka'],effects:{flags:{hokage_dead:true}},choices:[{text:'Focus on Sasuke. The curse mark is changing him.',next:'nar_sasuke_darkness'},{text:'Train harder. The village needs strong shinobi.',next:'nar_post_invasion_train'},{text:'Follow Jiraiya to find Tsunade.',next:'nar_find_tsunade',check:{stat:'cha',dc:10}}]};

// ---- ARC 3: THE CROSSROADS (~25 nodes) ----

NARUTO_NODES.nar_sasuke_darkness = {text:`Sasuke is spiraling. The curse mark whispers to him. Itachi\`s shadow looms over everything he does. When Itachi actually appears in the village — hunting Naruto for the Akatsuki — Sasuke confronts him.

It goes badly. Itachi breaks Sasuke with Tsukuyomi, trapping him in 72 hours of relived trauma in an instant. Sasuke wakes up screaming and does not stop for a long time.

Naruto was also targeted. Jiraiya saved him, but the message is clear — the Akatsuki is coming for the Nine-Tails.

You visit Sasuke in the hospital. He stares at the ceiling. "I am too weak," he says. "The village makes me weak. These bonds make me weak."

The Sound Four are waiting outside the village. Orochimaru is offering power. You can feel Sasuke slipping away.`,scene:'calm',mood:'#8b0000',characters:['Sasuke','Naruto','Itachi'],effects:{flags:{sasuke_spiraling:true}},choices:[{text:'Try to talk Sasuke back from the edge.',next:'nar_talk_sasuke',check:{stat:'cha',dc:13}},{text:'Warn Kakashi that Sasuke might defect.',next:'nar_warn_kakashi_sasuke',effects:{rel:{kakashi:2}}},{text:'Find the Sound Four yourself. Cut off the escape route.',next:'nar_find_sound_four',check:{stat:'per',dc:13}}]};

NARUTO_NODES.nar_post_invasion_train = {text:`You throw yourself into training. The invasion revealed how far you still have to go. Jonin-level enemies tore through genin like paper. You need to bridge that gap.

Weeks pass. You master new techniques, refine your fundamentals, push past old limits. The village rebuilds around you.

Then the news hits — Sasuke has defected. Left the village in the middle of the night with the Sound Four, heading for Orochimaru\`s hideout.

Tsunade — the new Hokage — sends a retrieval team. Shikamaru leads. Naruto, Neji, Choji, Kiba, and Lee follow. A desperate chase through the Fire Country wilderness.

They need help.`,scene:'action',mood:'#8b0000',characters:['Sasuke','Naruto','Tsunade'],effects:{flags:{sasuke_defected:true},stats:{str:1}},choices:[{text:'Join the retrieval team.',next:'nar_retrieval_mission',effects:{rel:{naruto:2}}},{text:'Take a different route. Cut Sasuke off at the border.',next:'nar_intercept_sasuke',check:{stat:'int',dc:12}}]};

NARUTO_NODES.nar_find_tsunade = {text:`You catch up with Jiraiya and Naruto on the road. The Toad Sage is teaching Naruto the Rasengan — a pure chakra technique created by the Fourth Hokage. Naruto is struggling with it, using shadow clones to compensate for his lack of control.

You find Tsunade in a gambling town, drowning in sake and debt. She is beautiful, terrifying, and broken — haunted by the deaths of everyone she loved.

Orochimaru finds her too. He offers to resurrect her dead brother and lover in exchange for healing his arms. The confrontation between three Sannin shakes the earth — Jiraiya drugged, Tsunade paralyzed by her fear of blood, Naruto standing against Kabuto with a half-finished Rasengan.

Naruto\`s determination shatters Tsunade\`s despair. She becomes the Fifth Hokage.

On the journey home, you see it — the storm gathering around Sasuke.`,scene:'action',mood:'#cc6600',characters:['Jiraiya','Naruto','Tsunade','Orochimaru'],effects:{rel:{jiraiya:2,tsunade:2,naruto:1},flags:{found_tsunade:true}},choices:[{text:'Sasuke is changing. Try to intervene.',next:'nar_sasuke_darkness'},{text:'Report to Tsunade about the growing threats.',next:'nar_post_invasion_train'}]};

NARUTO_NODES.nar_talk_sasuke = {text:`You find Sasuke on the hospital rooftop at midnight. He is staring at the moon with dead eyes. The curse mark pulses on his neck.

"Do not try to stop me," he says without turning around.

"I am not here to stop you. I am here to remind you that you are not alone."

"Alone is all I have ever been. Itachi made sure of that."

You talk for hours. About strength, about bonds, about whether revenge is worth the cost. For a moment — a fragile, flickering moment — you see doubt in his eyes. The boy beneath the avenger.

Then his jaw sets. "I have made my decision." He vanishes from the hospital that night.

But your words planted a seed. Whether it grows depends on what comes next.`,scene:'calm',mood:'#8b0000',characters:['Sasuke'],effects:{rel:{sasuke:3},flags:{talked_sasuke:true,sasuke_seed_planted:true}},choices:[{text:'Join the retrieval team.',next:'nar_retrieval_mission'},{text:'Find a way to bring him back on your own terms.',next:'nar_intercept_sasuke',check:{stat:'int',dc:11}}]};

NARUTO_NODES.nar_warn_kakashi_sasuke = {text:`Kakashi listens in silence. His visible eye is dark with guilt. "I trained him. I taught him Chidori. I thought if I gave him power the right way, he would not seek it the wrong way." He pauses. "I was wrong."

Kakashi increases surveillance on Sasuke, but it is not enough. The Sound Four make their move on a moonless night, and Sasuke leaves willingly.

The retrieval mission is launched immediately. Kakashi cannot go — he is on another mission. But you can.`,scene:'calm',mood:'#0a2a5a',characters:['Kakashi','Sasuke'],effects:{rel:{kakashi:3},flags:{warned_kakashi:true,sasuke_defected:true}},choices:[{text:'Join the retrieval team.',next:'nar_retrieval_mission'},{text:'Go alone. You know Sasuke better than they do.',next:'nar_intercept_sasuke',check:{stat:'cou',dc:12}}]};

NARUTO_NODES.nar_find_sound_four = {text:`You track the Sound Four to the village outskirts. Four elite shinobi — Sakon, Kidomaru, Tayuya, and Jirobo — each bearing curse marks far more advanced than Sasuke\`s.

You are outmatched. Badly. But you plant tracking seals on their equipment and map their infiltration route before withdrawing.

When Sasuke defects that night, the tracking seals give the retrieval team a critical advantage. Your preparation saves hours in the pursuit.`,scene:'action',mood:'#0a2a5a',characters:['Sasuke'],effects:{stats:{per:1},flags:{tracked_sound_four:true,sasuke_defected:true}},choices:[{text:'Join the retrieval team with your intel.',next:'nar_retrieval_mission',effects:{stats:{int:1}}}]};

NARUTO_NODES.nar_retrieval_mission = {text:`Shikamaru\`s team races through the forest. The Sound Four peel off one by one to fight rearguard actions. Choji takes Jirobo. Neji takes Kidomaru. Kiba takes Sakon. Shikamaru faces Tayuya. Each fight is a life-or-death struggle.

You push forward with Naruto toward Sasuke. Lee arrives as backup — bandages still on, barely healed from Gaara\`s attack, but burning with determination.

At the Valley of the End — where two massive stone statues of Hashirama and Madara face each other across a waterfall — Naruto catches Sasuke.

They fight. Rasengan against Chidori. Nine-Tails chakra against Curse Mark Level 2. The valley is torn apart.

You arrive at the edge of the battle. What you do next changes everything.`,scene:'action',mood:'#8b0000',characters:['Naruto','Sasuke'],effects:{flags:{valley_of_end:true}},choices:[{text:'Join Naruto against Sasuke. Two against one.',next:'nar_valley_join',check:{stat:'cou',dc:12}},{text:'Appeal to Sasuke one final time.',next:'nar_valley_appeal',check:{stat:'cha',dc:14}},{text:'Let them fight. This is between them.',next:'nar_valley_watch'}]};

NARUTO_NODES.nar_intercept_sasuke = {text:`You take a different path — through the mountain passes, cutting across terrain the Sound Four would avoid. Your gamble pays off. You reach the border before them.

Sasuke arrives alone. The Sound Four are behind, delayed by the retrieval team. He sees you standing on the path, and stops.

"Move," he says.

"No."

His Sharingan spins. The curse mark crawls across his skin. You are facing Sasuke Uchiha at his most dangerous — a boy with nothing left to lose and a monster whispering in his ear.

Naruto crashes through the trees behind Sasuke. The three of you stand at the crossroads.`,scene:'action',mood:'#8b0000',characters:['Sasuke','Naruto'],effects:{flags:{intercepted_sasuke:true}},choices:[{text:'Fight Sasuke together with Naruto.',next:'nar_valley_join',check:{stat:'str',dc:12}},{text:'Make one last appeal to his humanity.',next:'nar_valley_appeal',check:{stat:'cha',dc:13}},{text:'Offer to go WITH him. Join Orochimaru as a double agent.',next:'nar_valley_double',check:{stat:'int',dc:14}}]};

NARUTO_NODES.nar_valley_join = {text:`You and Naruto fight Sasuke together. It should be overwhelming — two against one. But Sasuke in Curse Mark Level 2 is something else entirely. Black wings, grey skin, a Chidori that screams like a living thing.

He fights with the desperation of someone cutting their last bonds. Naruto takes a Chidori through the chest. You barely dodge a fireball that melts the stone behind you.

But together, you wear him down. Naruto\`s Rasengan collides with Sasuke\`s Chidori one final time. The explosion carves a crater in the valley.

When the dust settles, Sasuke is on his knees. Barely conscious. You stand over him, bleeding from a dozen wounds. Naruto is unconscious but alive.

Sasuke looks up at you both. "Why? Why do you care this much?"

"Because you are our friend, you idiot."

He does not leave. Not today. Kakashi arrives and carries them both home. But the darkness in Sasuke has not gone — it has only been delayed.`,scene:'action',mood:'#cc6600',characters:['Naruto','Sasuke','Kakashi'],effects:{stats:{cou:1,str:1},rel:{naruto:3,sasuke:3},flags:{sasuke_stayed:true}},choices:[{text:'The time skip begins. Two and a half years of training.',next:'nar_timeskip'}]};

NARUTO_NODES.nar_valley_appeal = {text:`"Sasuke. Look at me." You step between him and the path to Orochimaru. No fighting stance. Hands open.

"Your brother wants you to be consumed by hatred. Orochimaru wants your body as a vessel. Everyone is using you. But Naruto — Naruto is chasing you through a forest full of enemies because you are his friend. Not the Uchiha name. Not the Sharingan. You."

Sasuke\`s Sharingan spins. The curse mark writhes. Naruto stands behind you, bloody, exhausted, but refusing to fall.

"Come home," Naruto says. "We will get stronger together. And when you are ready to face Itachi, we will be there."

The silence stretches. Sasuke\`s hands tremble. A tear tracks down his face — just one — before he wipes it away.

"If I come back... and I am not strong enough... I will leave again."

"Then we will chase you again," Naruto grins through broken teeth.

Sasuke comes home.`,scene:'calm',mood:'#cc6600',characters:['Naruto','Sasuke'],effects:{stats:{cha:2},rel:{naruto:3,sasuke:5},flags:{sasuke_stayed:true,sasuke_convinced:true}},choices:[{text:'The time skip begins. Two and a half years of training.',next:'nar_timeskip'}]};

NARUTO_NODES.nar_valley_watch = {text:`You watch from the cliff edge as Naruto and Sasuke destroy each other. Rasengan meets Chidori. Nine-Tails chakra clashes with the Curse Mark. The Valley of the End lives up to its name.

When it is over, both boys lie unconscious in the crater. Sasuke wakes first. He looks at Naruto\`s unconscious face, and for one moment, his expression cracks. Then he turns and walks away.

You let him go. Some choices are not yours to make.

Kakashi arrives and carries Naruto home. Sakura cries at the hospital gates. The mission is a failure. Sasuke is gone.

But Naruto wakes with a new resolve in his eyes. "I will bring him back. I promise."

The promise of a lifetime.`,scene:'calm',mood:'#0a2a5a',characters:['Naruto','Sasuke','Kakashi','Sakura'],effects:{flags:{sasuke_left:true},rel:{naruto:1}},choices:[{text:'The time skip begins. Two and a half years of training.',next:'nar_timeskip'}]};

NARUTO_NODES.nar_valley_double = {text:`"I will go with you," you say. Both Naruto and Sasuke stare.

"You do not know what you are offering," Sasuke says slowly.

"I know exactly what I am offering. You need someone watching your back who is not a snake." You look at Naruto. "Trust me. I will bring him home."

Naruto\`s eyes search yours. He does not understand. But he trusts you. "You better keep that promise."

You leave with Sasuke. Orochimaru\`s hideout is a labyrinth of underground labs and human experiments. You endure it, training alongside Sasuke, feeding intelligence back to Konoha through secret channels.

It is the hardest thing you have ever done. But you are the bridge between Sasuke and the village. The lifeline in the darkness.`,scene:'action',mood:'#0a2a5a',characters:['Naruto','Sasuke','Orochimaru'],effects:{stats:{int:2,cou:1},rel:{sasuke:4,naruto:2},flags:{double_agent:true}},choices:[{text:'The time skip begins.',next:'nar_timeskip'}]};

NARUTO_NODES.nar_timeskip = {text:`Two and a half years pass.

Naruto trains with Jiraiya across the continent, growing from a loud-mouthed genin into a formidable shinobi. The Akatsuki moves in the shadows, capturing jinchuriki — vessels of the tailed beasts — one by one.

You train relentlessly. Your skills sharpen into something dangerous. The world is changing — alliances shifting, old powers dying, new threats emerging.

When Naruto returns to Konoha, he is taller, stronger, and still impossibly loud. The village has rebuilt. Tsunade leads with an iron fist and a gambling addiction.

But the Akatsuki is accelerating. Gaara — now Kazekage of the Sand — is captured. His tailed beast is extracted. He dies, then is resurrected by an elder\`s sacrifice.

The message is clear: no jinchuriki is safe. Naruto is a target. And the Akatsuki\`s leader — Pain — has his eyes set on Konoha.`,scene:'calm',mood:'#0a2a5a',characters:['Naruto','Jiraiya','Tsunade','Gaara'],effects:{flags:{timeskip_complete:true}},choices:[{text:'Investigate the Akatsuki\`s true leader.',next:'nar_akatsuki_intel',check:{stat:'int',dc:12}},{text:'Prepare the village defenses for Pain\`s assault.',next:'nar_prepare_defense',check:{stat:'per',dc:11}},{text:'Find Sasuke. Whatever happened to him.',next:'nar_find_sasuke'}]};

NARUTO_NODES.nar_akatsuki_intel = {text:`You piece together intelligence from multiple sources. The Akatsuki is led by Pain — six bodies controlled by a single mind, wielding the Rinnegan, the most powerful dojutsu in existence. Behind Pain is a masked man calling himself Tobi, who claims to be Madara Uchiha.

The truth is darker still — Jiraiya infiltrated the Rain Village to investigate and was killed by Pain. His dying message, carved into a toad\`s back, contains the key to Pain\`s weakness.

Naruto is devastated by Jiraiya\`s death. He channels his grief into mastering Sage Mode — natural energy that makes him more powerful than ever.

Pain is coming. The village has days, not weeks.`,scene:'calm',mood:'#0a2a5a',characters:['Naruto','Jiraiya'],effects:{stats:{int:1},flags:{knows_pain:true},rel:{naruto:1}},choices:[{text:'Share your intel with Tsunade and prepare.',next:'nar_pain_assault'},{text:'Convince Naruto to finish Sage training first.',next:'nar_pain_assault',effects:{rel:{naruto:2}}}]};

NARUTO_NODES.nar_prepare_defense = {text:`You work with the village defense corps. Barrier teams, evacuation routes, counter-assault squads. Tsunade listens to your recommendations and implements the strongest preparations possible.

When Jiraiya dies in the Rain Village — killed by Pain — the village goes into high alert. Your defensive preparations become critical.

Naruto retreats to Mount Myoboku to learn Sage Mode. He will not return until Pain arrives. Everything depends on the village holding long enough for Naruto to come back.

You know it will not be enough. Pain wields the Rinnegan. But it is all you can do.`,scene:'calm',mood:'#0a2a5a',characters:['Tsunade','Jiraiya'],effects:{stats:{per:1},flags:{prepared_defense:true}},choices:[{text:'Brace for Pain\`s assault.',next:'nar_pain_assault'}]};

NARUTO_NODES.nar_find_sasuke = {text:`The rumors lead you east. Sasuke killed Orochimaru — absorbed him, actually — and formed a team called Taka. He hunted down Itachi for the final battle between brothers.

Itachi died. And the truth came out — Itachi was never the villain. He massacred the Uchiha clan on orders from Konoha\`s leadership to prevent a coup. He spared Sasuke out of love and spent his life as a double agent, enduring hatred to protect the village.

Sasuke\`s rage is now aimed at Konoha itself. The village that ordered his family\`s genocide.

The boy you knew is gone. What remains is a weapon pointed at everything you swore to protect.

Before you can reach him, Pain\`s assault begins.`,scene:'action',mood:'#8b0000',characters:['Sasuke','Itachi'],effects:{flags:{knows_itachi_truth:true}},choices:[{text:'Return to defend the village from Pain.',next:'nar_pain_assault'}]};

NARUTO_NODES.nar_pain_assault = {text:`Pain\`s six bodies descend on Konoha like divine judgment. The Deva Path floats above the village, arms outstretched. "Almighty Push."

The village is leveled. Buildings, streets, homes — everything within a massive radius is flattened into a crater. Hundreds die in seconds. The destruction is absolute.

You survive in the chaos. Around you, ninja fight Pain\`s six bodies — each one with different abilities, each one terrifyingly powerful. Kakashi dies protecting Choji from a missile barrage. Hinata nearly dies trying to save Naruto.

Then Naruto arrives. Sage Mode active. Eyes golden with horizontal pupils. He is a force of nature.

The battle between Naruto and Pain reshapes the landscape. And you must choose your role in the endgame.`,scene:'action',mood:'#8b0000',characters:['Naruto','Kakashi','Pain'],effects:{flags:{pain_assault:true}},choices:[{text:'Find Nagato — the real Pain. End it at the source.',next:'nar_find_nagato',check:{stat:'per',dc:14}},{text:'Evacuate survivors. Save who you can.',next:'nar_evacuate_pain',effects:{stats:{cou:1}}},{text:'Fight alongside Naruto against the Six Paths.',next:'nar_fight_pain',check:{stat:'str',dc:13}}]};

NARUTO_NODES.nar_find_nagato = {text:`While Naruto battles the Six Paths of Pain, you track the chakra signals back to their source. Miles outside the village, hidden in a paper tree, you find him — Nagato, the real Pain. An emaciated man in a mechanical walker, red hair hanging over Rinnegan eyes, connected to his six bodies by chakra rods.

Konan — his partner, the Paper Angel — blocks your path. "You will not touch him."

"I do not want to fight you. I want to talk to him."

Nagato laughs — a hollow, painful sound. "Talk? I am a god of this world. What could a leaf village genin possibly say to me?"

"That Jiraiya-sensei believed in you. And he died still believing."

The silence that follows is thunderous.`,scene:'action',mood:'#0a2a5a',characters:['Pain'],effects:{stats:{per:2},flags:{found_nagato:true}},choices:[{text:'Continue the conversation. Reach the man behind the god.',next:'nar_pain_resolution',effects:{stats:{cha:1}}},{text:'Attack while he is distracted. End it.',next:'nar_pain_resolution',effects:{stats:{str:1}}}]};

NARUTO_NODES.nar_evacuate_pain = {text:`You organize evacuation through the rubble. Civilians trapped under collapsed buildings. Injured ninja bleeding out in the streets. Katsuyu — Tsunade\`s slug summon, fragmented into thousands of tiny versions — helps heal the wounded.

You carry three children out of a burning building. You drag an unconscious chunin from under a fallen wall. Every life saved is a small victory in the apocalypse.

When Naruto defeats the Six Paths and confronts the real Nagato, the battle is already over. But the lives you saved — they matter. They always matter.`,scene:'action',mood:'#cc6600',characters:['Tsunade'],effects:{stats:{cou:1,str:1},flags:{evacuated_civilians:true}},choices:[{text:'See how Naruto resolves things with Pain.',next:'nar_pain_resolution'}]};

NARUTO_NODES.nar_fight_pain = {text:`You throw yourself into the battle alongside Naruto. The Six Paths of Pain are each devastating — the Asura Path fires missiles, the Preta Path absorbs jutsu, the Human Path rips out souls. But together with other Konoha ninja, you whittle them down.

The Deva Path is the last standing. Its gravity manipulation is godlike — Almighty Push levels city blocks, Universal Pull drags enemies into killing range.

Naruto faces it alone in Sage Mode. The fight is mythic. When Naruto is pinned and nearly captured, the Nine-Tails almost takes over. Hinata\`s sacrifice snaps him back. Six tails of red chakra erupt.

You help contain the collateral damage as Naruto finishes the fight with a Rasengan that would make the Fourth Hokage weep.`,scene:'action',mood:'#8b0000',characters:['Naruto','Pain'],effects:{stats:{str:1,cou:1},rel:{naruto:2},flags:{fought_pain:true}},choices:[{text:'Naruto confronts Nagato. Watch the resolution.',next:'nar_pain_resolution'}]};

NARUTO_NODES.nar_pain_resolution = {text:`Naruto stands before Nagato — the real Pain. Two students of Jiraiya, facing each other across an impossible divide.

Nagato speaks of cycles of hatred, of how pain creates more pain, of how peace through force is the only answer. Naruto refuses to accept it. He will not kill Nagato. He will break the cycle.

"Jiraiya-sensei believed that one day people would truly understand each other. I am going to make that dream come true. I will not give up. That is my ninja way."

Nagato — broken, dying, holding onto hatred like a lifeline — chooses to believe him. He performs the Rinne Rebirth, sacrificing his remaining life to resurrect everyone killed in the assault. Kakashi breathes again. The dead return.

Nagato dies with a smile. Naruto carries his answer back to a restored village.

The hero of Konoha. The Child of Prophecy.

Now the final crossroads loom. Sasuke is out there. The Fourth Great Ninja War approaches. And your choices have shaped the path here.`,scene:'calm',mood:'#1a4a1a',characters:['Naruto','Pain','Kakashi'],effects:{flags:{pain_resolved:true}},choices:[{text:'March to war. The Fourth Great Ninja War has begun.',next:'nar_war_begins',effects:({flags:{path_war:true}})},{text:'Stand with the village as war looms. Will of Fire ending.',next:'nar_ending_will_of_fire',effects:({flags:{path_fire:true}})},{text:'Operate from the shadows. Become the unseen protector.',next:'nar_ending_shadow',effects:({flags:{path_shadow:true}})},{text:'Leave the village. Find Sasuke and walk his path.',next:'nar_ending_rogue',effects:({flags:{path_rogue:true}})},{text:'Broker peace between the Five Great Nations before war begins.',next:'nar_ending_bridge',check:{stat:'cha',dc:13},effects:({flags:{path_bridge:true}})},{text:'Sacrifice yourself to seal the tailed beast threat forever.',next:'nar_ending_sacrifice',check:{stat:'cou',dc:14},effects:({flags:{path_sacrifice:true}})},{text:'Pursue the Rinnegan. Your bloodline holds a secret.',next:'nar_ending_rinnegan',check:{stat:'int',dc:15},effects:({flags:{path_rinnegan:true}})}]};

// ---- ARC: FOURTH GREAT NINJA WAR — EDO TENSEI (~4 nodes) ----

NARUTO_NODES.nar_war_begins = {text:`The Allied Shinobi Forces stretch across the horizon — eighty thousand ninja from all five great nations, united for the first time in history. Gaara stands before them, a former jinchuriki, a former weapon, and delivers a speech that silences every doubt.

"There are no Sand, Leaf, Mist, Stone, or Cloud shinobi here. There are only shinobi."

You feel it in your chest — the Will of Fire, burning alongside the wills of every nation. Then the ground splits open. White Zetsu clones pour from the earth like maggots. And behind them, coffins rise from the dirt in rows. Lids crack open, and the dead step out.

Edo Tensei — the Reanimation Jutsu. Kabuto has resurrected every legendary ninja who ever lived. The previous Kage. The Seven Swordsmen of the Mist. The Gold and Silver Brothers.

Your comrades. Your enemies. Your heroes. All of them puppets now, forced to fight against the world they died protecting.

The war has begun. Which battlefield calls you?`,scene:'action',mood:'#8b0000',characters:['Gaara','Naruto','Kabuto'],effects:{flags:{war_begun:true}},choices:[{text:'Join the front lines against the resurrected legends.',next:'nar_edo_battlefield',effects:{stats:{cou:1}}},{text:'Hunt Kabuto. End the Edo Tensei at its source.',next:'nar_hunt_kabuto',check:{stat:'int',dc:13},effects:{stats:{int:1}}},{text:'Find Naruto. He is the key to everything.',next:'nar_war_naruto',effects:{rel:{naruto:2}}}]};

NARUTO_NODES.nar_edo_battlefield = {text:`The battlefield is a nightmare given form. You face shinobi who were legends before you were born — and they do not want to fight you. Their bodies move against their will, tears streaming down reanimated faces.

A resurrected jonin blocks your kunai with a move you recognize from Academy textbooks. "Please," he whispers through gritted teeth. "Seal me. I cannot stop myself."

You fight alongside the Allied Forces, sealing the reanimated dead one by one. It is grueling, heartbreaking work. Every sealed coffin is a hero put to rest a second time.

Then the sky darkens. A meteor falls.

Uchiha Madara has entered the battlefield.

He is everything the history books promised and worse. A single man scatters entire divisions. His Susano\`o cleaves mountain ridges. He summons meteors from the sky like a god rearranging furniture.

"Is this the best this era has to offer?" he asks, genuinely disappointed.

The Five Kage stand against him. They fight with everything they have. It is not enough.`,scene:'action',mood:'#8b0000',characters:['Madara','Gaara'],effects:{stats:{cou:1},flags:{faced_madara:true}},choices:[{text:'Rally the troops. Hold the line while the Kage fight.',next:'nar_madara_hold',effects:{stats:{cou:1}}},{text:'Search the chaos for Itachi. You heard he broke free of the Edo Tensei.',next:'nar_itachi_truth',effects:{stats:{per:1}}}]};

NARUTO_NODES.nar_hunt_kabuto = {text:`You track Kabuto\`s chakra signature through miles of underground tunnels. The snake sage has woven himself into the earth like a parasite, channeling the Edo Tensei from a cave deep beneath the battlefield.

You arrive to find Sasuke and Itachi already there. Together. Fighting side by side for the first and last time.

Itachi — reanimated but free, having broken Kabuto\`s control through sheer force of will — fights with a calm precision that makes your breath catch. This is the man who massacred his own clan to save the village. The man who let his little brother hate him for a decade so Sasuke would grow strong enough to survive.

Kabuto has transformed himself into something monstrous — white scales, snake features, Sage Mode twisting his body into a dragon. He is powerful. But he is also lonely, desperate, a man who never knew who he was and tried to become everyone else.

"Help us corner him," Itachi says. No wasted words. You move.`,scene:'action',mood:'#0a2a5a',characters:['Itachi','Sasuke','Kabuto'],effects:{stats:{int:1},flags:{hunted_kabuto:true}},choices:[{text:'Flank Kabuto from the left. Create an opening for Itachi\`s genjutsu.',next:'nar_itachi_truth',effects:{stats:{str:1}}},{text:'Talk to Kabuto while they fight. Reach the lost child inside the monster.',next:'nar_itachi_truth',effects:{stats:{cha:1},rel:{kabuto:1}}}]};

NARUTO_NODES.nar_itachi_truth = {text:`Itachi Uchiha stands before you in the pale light of the cave — or the battlefield, depending on the path that brought you here. Either way, the truth hangs in the air like smoke.

He tells you everything. The Uchiha coup. Danzo\`s ultimatum. The impossible choice — his clan or his village. He chose the village. He chose Sasuke. He chose to be hated so that the people he loved could live.

"I made mistakes," Itachi says quietly. "I tried to do everything alone. I lied to Sasuke, manipulated him, put him through hell — all because I believed I knew best." He looks at you with those ancient Sharingan eyes. "Do not repeat my error. Trust the people beside you. No one can carry the world alone."

Kabuto\`s Edo Tensei crumbles. Itachi has cast Izanami — a genjutsu that traps Kabuto in a loop of self-reflection until he accepts who he truly is. The resurrected dead across every battlefield begin to dissolve into light.

But Madara remains. He severed his connection to the jutsu. He is free — alive, autonomous, and more dangerous than ever.

Itachi\`s body begins to crack and glow. He is fading. He turns to Sasuke one final time.

"You do not have to forgive me. But whatever you decide — I will love you always."

He vanishes. The light scatters like fireflies.`,scene:'calm',mood:'#cc6600',characters:['Itachi','Sasuke','Kabuto'],effects:{stats:{per:1},flags:{itachi_farewell:true}},choices:[{text:'Press forward to the Ten-Tails battlefield. Madara must be stopped.',next:'nar_madara_hold',effects:{stats:{cou:1}}},{text:'Stay with Sasuke. He needs someone right now.',next:'nar_war_naruto',effects:{rel:{sasuke:3}}}]};

NARUTO_NODES.nar_madara_hold = {text:`The Ten-Tails roars. A living catastrophe, ten tails lashing the sky, its Tailed Beast Bomb capable of erasing mountains. Madara and the masked man — Obito Uchiha, not the legend he pretended to be, but Kakashi\`s dead teammate, twisted by grief into a weapon — stand atop the beast like gods.

You rally every shinobi within earshot. Ino-Shika-Cho formations. Medical corps rotating through triage. Barrier teams containing the smaller Tailed Beast Bombs. You hold the line — not with power, but with coordination, sacrifice, and sheer refusal to die.

Naruto and Sasuke arrive together. For the first time since childhood, they fight as one. Naruto shares the Nine-Tails\` chakra with the entire Allied Force — golden cloaks of power wrapping every shinobi on the field.

You feel it — Kurama\`s warmth, Naruto\`s will, the bond of every person fighting beside you. For one shining moment, eighty thousand hearts beat as one.

Then Madara activates the Infinite Tsukuyomi.`,scene:'action',mood:'#8b0000',characters:['Naruto','Sasuke','Madara','Obito'],effects:{stats:{cou:1,str:1},flags:{held_the_line:true}},choices:[{text:'You are caught in the light. The dream takes you.',next:'nar_tsukuyomi_dream'},{text:'Sasuke\`s Susano\`o shields you. You stay awake.',next:'nar_tsukuyomi_awake',check:{stat:'per',dc:13}}]};

// ---- ARC: INFINITE TSUKUYOMI (~3 nodes) ----

NARUTO_NODES.nar_war_naruto = {text:`You find Naruto at the heart of the maelstrom. He has merged with Kurama fully now — no more conflict, no more cages. The Nine-Tails fights beside him as a partner, not a prisoner. Together they are a golden hurricane.

But Naruto is flagging. He has been sharing chakra with the entire army. Giving pieces of himself to everyone. His body is holding, but only barely.

"You came," he says, grinning through exhaustion. "Good. I could use someone who actually plans things."

The two of you fight toward the Ten-Tails together. Every step is bought with blood. Neji Hyuga dies shielding Naruto from a barrage of wooden spikes — a branch family member giving his life for someone he once despised, and doing it freely.

Naruto screams. Obito taunts him — "This is what bonds get you. Pain. Loss. Death."

Naruto\`s answer is to stand back up.

"My bonds are not my weakness," he says, nine tails blazing. "They are the reason I am still standing."

The battlefield erupts in golden light as Naruto charges.`,scene:'action',mood:'#cc6600',characters:['Naruto','Obito','Neji'],effects:{rel:{naruto:3},flags:{fought_with_naruto:true}},choices:[{text:'Charge with him. Break through to the Ten-Tails.',next:'nar_madara_hold',effects:{stats:{cou:1,str:1}}},{text:'Cover his advance. Protect Naruto from ambush while he pushes forward.',next:'nar_madara_hold',effects:{stats:{per:1},rel:{naruto:2}}}]};

NARUTO_NODES.nar_tsukuyomi_dream = {text:`The moonlight touches your skin and the world dissolves.

You wake up in Konoha. But it is not the Konoha you know — it is the Konoha you always wanted. The streets are peaceful. The Academy children laugh without knowing what war means. Your family is alive. Everyone you lost is here.

Jiraiya is alive, writing his books at a cafe. The Third Hokage smokes his pipe on the monument steps. Neji is sparring with Hinata in the Hyuga compound, both of them smiling. Itachi walks through the market with Sasuke, buying tomatoes, arguing about nothing.

And you — you are happy. Truly, deeply happy. No war. No death. No impossible choices.

Days pass in the dream. Weeks. You train with friends who never died. You eat ramen with a Naruto who never had to carry the weight of the world.

But something nags at you. A splinter in paradise. The shadows are too soft. The smiles are too easy. Nobody here has scars.

This is not real. And somewhere outside this beautiful lie, your friends are fighting for their lives.`,scene:'calm',mood:'#cc6600',characters:['Jiraiya','Itachi','Neji','Naruto'],effects:{flags:{trapped_tsukuyomi:true}},choices:[{text:'Stay. The dream is kind. Reality never was.',next:'nar_tsukuyomi_stay',effects:{stats:{cha:1}}},{text:'Break free. Your real bonds are worth more than any perfect illusion.',next:'nar_tsukuyomi_break',effects:{stats:{cou:2}}}]};

NARUTO_NODES.nar_tsukuyomi_stay = {text:`You choose the dream. And for a while — maybe a long while — it is everything you wanted.

But the edges fray. The people you love say things they would never say. They agree too easily. They never challenge you. The ramen tastes perfect every time, and that is how you know it is wrong — Teuchi\`s ramen was never perfect. It was better than perfect. It was real.

The dream-Naruto smiles at you, and his eyes are empty. The real Naruto\`s eyes were never empty. They burned.

"This is not you," you whisper to the phantom. "The real Naruto would be screaming at me to wake up."

Something cracks. The sky splits. Light pours through — not the moon\`s false light, but the harsh, golden light of a world on fire.

You reach for it. The dream screams as you tear yourself free.

It hurts more than any jutsu. You are leaving behind everyone you ever lost. But you are running toward everyone who still needs you.`,scene:'calm',mood:'#cc6600',characters:['Naruto'],effects:{stats:{cou:2},flags:{broke_free_late:true}},choices:[{text:'Return to the battlefield. The war is not over.',next:'nar_kaguya_arrive'}]};

NARUTO_NODES.nar_tsukuyomi_break = {text:`You grab the splinter of doubt and pull. The dream shatters like glass.

The perfect Konoha cracks from sky to ground. The smiling faces freeze, distort, dissolve. Jiraiya reaches for you as he fades — "Wait, do not go—" but his hand passes through yours. He was never real. None of them were.

You fall through blinding white light and slam back into your body on the battlefield. Around you, every shinobi in the Allied Forces is cocooned in roots from the God Tree, suspended in their own perfect dreams. Eighty thousand people, dreaming of worlds without pain.

Only a handful remain awake — Naruto, Sasuke, Sakura, Kakashi, and now you. Sasuke\`s Susano\`o flickers. Naruto is burning through chakra at an impossible rate.

And above you, the sky tears open.`,scene:'action',mood:'#8b0000',characters:['Naruto','Sasuke','Sakura','Kakashi'],effects:{stats:{cou:2},flags:{broke_tsukuyomi:true}},choices:[{text:'Stand with Team 7 as the sky breaks apart.',next:'nar_kaguya_arrive',effects:{rel:{naruto:1,sasuke:1}}}]};

NARUTO_NODES.nar_tsukuyomi_awake = {text:`Sasuke\`s Susano\`o wraps around you like a violet cage. The moonlight cannot reach you. Around you, the entire world falls into the dream — every shinobi on the battlefield goes limp, cocooned by the God Tree\`s roots, pulled into their perfect illusions.

You watch through the Susano\`o\`s translucent ribs as friends, allies, enemies — all of them — are swallowed. It is the loneliest feeling in the world.

Inside the barrier, it is just you, Naruto, Sasuke, Sakura, and Kakashi. Team 7 and one outsider who refused to sleep.

"Thank you," Kakashi says quietly. "For staying awake."

Naruto\`s fists are clenched. "We are getting them back. All of them."

Then Madara\`s body twists. Black Zetsu — the creature everyone dismissed as a tool — stabs through his chest. "You were never the final act," it hisses. "You were the vessel."

Madara\`s form warps. A woman emerges — white robes, white hair, a third eye opening on her forehead. Chakra so vast it bends the air like heat shimmer.

Kaguya Otsutsuki. The Mother of All Chakra. The Rabbit Goddess. The progenitor of everything shinobi are.

She has returned.`,scene:'action',mood:'#0a2a5a',characters:['Sasuke','Naruto','Sakura','Kakashi','Kaguya'],effects:{stats:{per:1},flags:{survived_tsukuyomi:true}},choices:[{text:'Stand with Team 7 against a god.',next:'nar_kaguya_arrive',effects:{stats:{cou:1}}}]};

// ---- ARC: KAGUYA\`S DIMENSION (~3 nodes) ----

NARUTO_NODES.nar_kaguya_arrive = {text:`Kaguya does not speak like a villain. She speaks like a mother disappointed in her children.

"You use chakra to kill each other," she says, voice echoing across dimensions. "I gave humanity a gift, and you made it into war."

She waves her hand. The world shifts. You are no longer on the battlefield — you are falling through a dimension of lava. Rivers of molten rock stretch to every horizon. The heat is suffocating.

Sasuke catches you with his Susano\`o. Naruto grabs Sakura and Kakashi with chakra arms. Kaguya floats above the lava, untouched, her Byakugan seeing everything.

She shifts dimensions again. Ice. A world of frozen acid lakes. Then a desert of crushing gravity where standing upright takes every ounce of strength you have.

She is testing you. Playing with you. And every dimension she opens drains more of Naruto and Sasuke\`s chakra.

Obito — mortally wounded, carrying the last shred of his redemption — uses Kamui to keep the team together across dimensional shifts. Each use costs him. He is dying.

"I was the coolest guy," Naruto told him. Obito smiles through the blood.

You have to end this. But sealing a god requires perfect coordination — Naruto and Sasuke must touch Kaguya simultaneously with the Sun and Moon seals. Everything else is a distraction.`,scene:'action',mood:'#0a2a5a',characters:['Kaguya','Naruto','Sasuke','Sakura','Obito'],effects:{flags:{kaguya_dimension:true}},choices:[{text:'Create an opening. Distract Kaguya so Naruto and Sasuke can reach her.',next:'nar_kaguya_seal',effects:{stats:{cou:2}}},{text:'Try to reason with Kaguya. She was human once.',next:'nar_kaguya_reason',check:{stat:'cha',dc:14},effects:{stats:{cha:1}}}]};

NARUTO_NODES.nar_kaguya_reason = {text:`"You were a mother," you call out, voice cracking against the dimensional wind. "Hagoromo and Hamura — your sons. You loved them once."

Kaguya\`s third eye focuses on you. The weight of her gaze is like standing at the bottom of an ocean.

"Love," she whispers. "I loved them. And they sealed me away. A thousand years in darkness because I tried to take back what was mine."

"They sealed you because you tried to absorb all chakra. Because you stopped seeing people as people and started seeing them as extensions of your power."

Her hand rises. A bone — the All-Killing Ash Bone — forms between her fingers. One touch and you dissolve into dust.

"You do not understand what it is to be a god," she says.

"No. But I understand what it is to lose people. And to want the world to stop hurting."

She hesitates. One fraction of a second. And in that fraction, Sakura — SAKURA — descends from above with a chakra-enhanced fist that sends Kaguya reeling. Naruto and Sasuke close in from both sides.

Your words did not stop a god. But they gave your team the opening they needed.`,scene:'action',mood:'#0a2a5a',characters:['Kaguya','Sakura','Naruto','Sasuke'],effects:{stats:{cha:2},flags:{reasoned_with_kaguya:true}},choices:[{text:'Now. Help them seal her.',next:'nar_kaguya_seal',effects:{stats:{cou:1}}}]};

NARUTO_NODES.nar_kaguya_seal = {text:`It comes down to one moment.

Naruto — a boy who ate alone at Ichiraku, who painted the Hokage monument for attention, who was hated for what he carried — extends his right hand. The Sun seal blazes.

Sasuke — a boy who watched his family die, who walked into darkness and clawed his way back — extends his left hand. The Moon seal burns.

They touch Kaguya simultaneously. The Six Paths — Chibaku Tensei activates.

Kaguya screams. Not in rage — in grief. "My children... my chakra... do not leave me alone again..."

The earth rises around her. Stone encases her body. A new moon forms — a prison for a god, sealed by the last two inheritors of her son\`s power.

Sakura\`s fist ensured the hit landed. Kakashi\`s Susano\`o shielded the approach. Obito\`s sacrifice kept the team together.

And you — you were there. In the moments that mattered, you were there.

The dimensions collapse. The God Tree withers. The Infinite Tsukuyomi dissolves. Eighty thousand shinobi wake from their dreams and find a world that still exists.

The Fourth Great Ninja War is over.

But Sasuke is not done.`,scene:'calm',mood:'#cc6600',characters:['Naruto','Sasuke','Sakura','Kakashi','Kaguya'],effects:{flags:{kaguya_sealed:true}},choices:[{text:'Follow Sasuke. You know what he is about to do.',next:'nar_sasuke_revolution',effects:{stats:{per:1}}},{text:'Let Naruto handle it. Some battles are between two people.',next:'nar_final_valley',effects:{rel:{naruto:2}}}]};

// ---- ARC: RESOLUTION & ROAD TO BORUTO (~4 nodes) ----

NARUTO_NODES.nar_sasuke_revolution = {text:`Sasuke stands over the battlefield, Rinnegan blazing. He has placed the five Kage under genjutsu. He has sealed the tailed beasts.

"I will become Hokage," he says. "Not like the others. I will bear the world\`s hatred alone. One shadow, keeping the peace through fear. No more councils. No more corruption. No more Danzo. Just me — the final villain everyone unites against."

It is insane. It is also, in a twisted way, noble. He would sacrifice everything — his happiness, his name, his soul — to create peace.

Naruto steps forward. "That is the loneliest plan I have ever heard. And I am not going to let you do it."

Sasuke looks at you. "Will you try to stop me too?"`,scene:'action',mood:'#8b0000',characters:['Sasuke','Naruto'],effects:{flags:{sasuke_revolution:true}},choices:[{text:'"Yes. Because you taught me that bonds matter more than plans."',next:'nar_final_valley',effects:{rel:{sasuke:2,naruto:2},stats:{cou:1}}},{text:'"No. But I will be waiting when you come home."',next:'nar_final_valley',effects:{rel:{sasuke:3},stats:{cha:1}}},{text:'"I understand why. But Naruto is right. Let him show you."',next:'nar_final_valley',effects:{rel:{naruto:2},stats:{int:1}}}]};

NARUTO_NODES.nar_final_valley = {text:`They return to the Valley of the End. Two statues — Hashirama and Madara — watch as history repeats itself.

Naruto and Sasuke fight. Rasengan against Chidori, Kurama against the Susano\`o, everything they have ever been poured into every blow. The valley crumbles. The river boils.

You cannot interfere. This is between them. A conversation that could only happen through fists — years of love and anger and loneliness hammered into each other until nothing is left but the truth.

They lose an arm each. They lie in the rubble, bleeding, spent, staring at the sky.

"I lost," Sasuke says.

"Idiot," Naruto whispers. "It was never a competition."

Sasuke cries. For the first time since he was seven years old, Uchiha Sasuke cries. And Naruto cries with him.

The war is over. The rivalry is over. What remains is something simpler and infinitely harder — the choice to go on, together, in an imperfect world.`,scene:'calm',mood:'#cc6600',characters:['Naruto','Sasuke'],effects:{flags:{final_valley:true}},choices:[{text:'Walk with them into the future. See what this peace becomes.',next:'nar_road_to_boruto'},{text:'You have given enough. Rest. The Will of Fire ending.',next:'nar_ending_will_of_fire'}]};

NARUTO_NODES.nar_road_to_boruto = {text:`Years pass. The world you bled for takes shape.

Naruto becomes the Seventh Hokage. His face is carved into the mountain — the boy nobody wanted, immortalized in stone. He works himself to exhaustion, sending shadow clones to his children\`s birthday parties because the paperwork never ends.

Sasuke stays. That is the miracle no one expected. He does not leave for his journey of atonement — not alone, anyway. Sakura goes with him, and they return together within a year. He becomes Konoha\`s head of intelligence, rebuilding the village\`s spy network from scratch, his Rinnegan turned from a weapon of war into a tool for peace.

The Akatsuki name is reclaimed. Former members of Taka — Jugo, Suigetsu, Karin — work alongside former enemies, running a rehabilitation program for rogue ninja. Orochimaru, impossibly, operates a legitimate research lab under ANBU supervision. Some things defy explanation.

A new generation grows up in a world without great wars. They are soft in ways their parents were not. They complain about homework. They do not know what it costs to keep the lights on.

That is the point. That is what you fought for.`,scene:'calm',mood:'#1a4a1a',characters:['Naruto','Sasuke','Sakura'],effects:{flags:{road_to_boruto:true}},choices:[{text:'Train the next generation. What you learned cannot die with you.',next:'nar_ending_sensei',effects:{stats:{int:1}}},{text:'One last mission. The world is at peace, but something stirs in the shadows.',next:'nar_ending_otsutsuki',check:{stat:'per',dc:12},effects:{stats:{per:1}}},{text:'Rest. You have earned it. Watch the sunset from the Hokage monument.',next:'nar_ending_peace'}]};

NARUTO_NODES.nar_ending_sensei = {text:`You take on a genin team. Three children who have never known war.

One of them is reckless and loud — reminds you of someone. One is quiet and talented and carries a weight they do not understand. One is kind and underestimated and stronger than anyone gives them credit for.

You teach them everything. Tree climbing. Water walking. How to throw a kunai, how to read a battlefield, how to see underneath the underneath. But more than techniques, you teach them what Iruka taught Naruto, what Jiraiya taught Pain, what Itachi should have told Sasuke from the start.

You are not alone. You were never supposed to carry it alone.

Your students grow. They make mistakes. They fight and make up and fight again. One of them asks you about the war and you tell them the truth — all of it. The horror and the heroism. The friends you lost and the ones you kept.

"Were you scared?" the loud one asks.

"Every single day."

"Then why did you keep going?"

You look at the three of them — young, unbroken, full of a future you helped build — and the answer is so obvious it hurts.

"Because someone had to make sure you\`d get to ask that question."

The Will of Fire passes from hand to hand. It always has. And now it burns in three new hearts.`,scene:'calm',mood:'#1a4a1a',characters:['Naruto','Iruka'],effects:{flags:{ending_sensei:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

NARUTO_NODES.nar_ending_otsutsuki = {text:`Peace is a fragile thing. You learned that in the war.

So when the sensors detect an anomaly — a chakra signature that does not belong to this world — you are the first to respond. The source is a dimensional rift above the ruins of Kaguya\`s old stronghold.

An Otsutsuki. Pale skin, horned, radiating power that makes Kaguya\`s presence feel like a candle beside a forest fire. They have come to harvest the world\`s chakra — a divine fruit, grown from centuries of human conflict.

You send word to Naruto and Sasuke. They arrive within the hour — older, scarred, slower to smile but quicker to act. Team 7 assembles one more time. Sakura\`s medical jutsu. Kakashi\`s tactical mind. Naruto\`s infinite resolve. Sasuke\`s surgical precision.

And you — the variable no prophecy accounted for.

The battle lasts three days. Dimensions crack. The moon shudders. But this time, you are not children fighting a war designed by dead men. You are veterans. You know the cost. And you pay it willingly.

The Otsutsuki is sealed. The rift is closed. The world does not even know how close it came.

Naruto buys everyone ramen afterward. The bowl is too salty and Sasuke complains and Sakura hits them both and Kakashi reads his book and you sit there in the warmth of a moment that almost never existed.

The next generation will face their own threats. But not this one. This one is yours. And you held the line.`,scene:'action',mood:'#0a2a5a',characters:['Naruto','Sasuke','Sakura','Kakashi'],effects:{flags:{ending_otsutsuki:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

NARUTO_NODES.nar_ending_peace = {text:`You sit on the Hokage monument at sunset. Naruto\`s stone face is still fresh — the carvers only finished it last month. You lean against the Fourth Hokage\`s hair and watch the village below.

Children chase each other through streets you once defended with kunai. Shops are open late. Someone is playing music near the market district — a shamisen, badly, with enthusiasm.

Sasuke\`s daughter and Naruto\`s son are sparring in the Academy yard. They argue about everything and would die for each other without hesitation. The cycle continues, but gentler now. The hatred that defined the Uchiha and the Senju, the tailed beasts and their hosts, the five nations and their wars — it fades. Not gone. Never fully gone. But fading.

Kakashi finds you up there. He sits beside you without a word. His mask is still on. Some things never change.

"Was it worth it?" he asks.

Below you, Naruto walks out of the Hokage office. He is tired, overworked, and smiling. He spots his son and yells something that makes the boy groan with embarrassment. Hinata appears with a packed dinner. Sakura waves from the hospital balcony.

The village hums with ten thousand ordinary lives. Each one a miracle. Each one purchased by someone\`s sacrifice.

"Yeah," you say. "It was worth it."

The sun sets on Konohagakure. The Will of Fire glows in every window, every laugh, every sleeping child who has never known war.

You close your eyes and breathe.

You are home.`,scene:'calm',mood:'#1a4a1a',characters:['Naruto','Sasuke','Kakashi','Sakura'],effects:{flags:{ending_peace:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

// ---- ENDINGS (~8 nodes) ----

NARUTO_NODES.nar_ending_will_of_fire = {text:`The Fourth Great Ninja War comes. The five great nations unite against Madara Uchiha and the Ten-Tails. You fight on the front lines alongside Naruto, Sasuke — who returns at the last moment — and every shinobi in the world.

The war is hell. Friends die. Enemies are reborn. The Ten-Tails reshapes the landscape. But Naruto\`s bonds — forged across a lifetime of pain and perseverance — hold the alliance together.

You are there when Naruto and Sasuke seal Kaguya, the mother of all chakra. You are there when Sasuke tries to start a revolution and Naruto talks him down with his fists. You are there when Sasuke finally comes home.

Years later, Naruto becomes the Seventh Hokage. The village thrives. Children play in streets that were once rubble. Sasuke protects the village from the shadows, finally at peace.

And you — you stand in the light of the Will of Fire, a jonin of the Leaf, having helped write the story of a generation.

The Will of Fire burns eternal.`,scene:'calm',mood:'#1a4a1a',characters:['Naruto','Sasuke','Sakura','Kakashi'],effects:{flags:{ending_will_of_fire:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

NARUTO_NODES.nar_ending_shadow = {text:`You vanish from the public eye. No one knows exactly when you stopped appearing at mission briefings, stopped eating at Ichiraku, stopped being seen at all.

But the village\`s enemies keep dying. ANBU root cells are dismantled from the inside. Akatsuki supply lines are severed by an invisible hand. When the Fourth Great Ninja War begins, critical intelligence arrives on Tsunade\`s desk from an unknown source — troop movements, weakness analyses, strategic predictions that save thousands of lives.

You are the shadow the village casts to protect itself. No rank. No recognition. No name in the history books.

Naruto becomes Hokage and searches for you once. You watch him from a rooftop as he gives up and walks home to his family. He is smiling. The village is safe.

That is enough.

In the darkness, you guard the light. The Shadow Hokage — the one who was never seen, never thanked, and never stopped fighting.`,scene:'calm',mood:'#0a2a5a',characters:['Naruto','Tsunade'],effects:{flags:{ending_shadow:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

NARUTO_NODES.nar_ending_rogue = {text:`You find Sasuke in the wilderness. He is surprised to see you. Not displeased — just surprised.

"You left the village," he says.

"The village is not the only thing worth protecting."

You travel together. Taka — Sasuke\`s team — accepts you warily. You train under no flag, hunt Akatsuki cells, and piece together the truth about the Uchiha massacre, the cycle of hatred, and the rot at the heart of the ninja system.

When the Fourth Great Ninja War erupts, you and Sasuke arrive on the battlefield not as enemies of Konoha, but as wild cards. Answering to no one. Fighting for a world that has not been built yet.

After the war, Sasuke takes his journey of atonement. You walk beside him for a while — two rogue ninja seeing the world through clear eyes for the first time.

Eventually your paths diverge. But the bond remains. Two people who chose freedom over belonging, and found that freedom is its own kind of home.`,scene:'calm',mood:'#8b0000',characters:['Sasuke'],effects:{flags:{ending_rogue:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

NARUTO_NODES.nar_ending_bridge = {text:`You become a diplomat. Not with words alone — with actions, sacrifices, and an unbreakable refusal to accept that the Five Great Nations must be enemies.

You travel to the Sand first. Gaara listens — he understands pain and redemption better than anyone. Then the Mist, where the Bloody Mist era\`s wounds are still raw. The Cloud, where distrust of the Leaf runs generations deep. The Stone, where hatred of the Fourth Hokage lingers.

One by one, you build bridges. Small ones at first — shared missions, student exchanges, trade agreements. Then larger ones — mutual defense pacts, jinchuriki protection programs, a joint council.

When the Akatsuki threat emerges, the alliance is already in place. The Fourth Great Ninja War is shorter, less devastating, because the nations fight as one from the start instead of being forced together by desperation.

At the first Five Kage Summit held in peacetime, Naruto — newly appointed Hokage — names you the architect of the Shinobi Alliance.

"I always talked about bringing people together," Naruto says, grinning. "You actually did it."

The bridge between nations stands forever.`,scene:'calm',mood:'#1a4a1a',characters:['Naruto','Gaara','Tsunade'],effects:{flags:{ending_bridge:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

NARUTO_NODES.nar_ending_sacrifice = {text:`The Ten-Tails is reforming. The jinchuriki have fallen. The tailed beasts\` chakra is being absorbed into a weapon that will end the world. Naruto is down. Sasuke is down. The allied forces are broken.

You step forward.

The sealing technique is one you have been studying since the Third Hokage\`s death — the Reaper Death Seal. It costs the user their soul. But modified, expanded, poured through with every drop of chakra you possess, it can seal the Ten-Tails\` power and scatter it harmlessly across the world.

"Do not do this," Naruto begs, blood on his face.

"Someone has to. And you have a promise to keep — to be Hokage. I am keeping mine — to protect the village."

The seal activates. Light pours from your body. The Ten-Tails screams. The chakra disperses like stars scattering across the sky.

You fall. Naruto catches you. The last thing you see is his face — crying, furious, grateful.

"Your name," he whispers. "I will make sure everyone knows your name."

They carve it into the Hokage monument. Not as a Hokage — as something rarer. A hero who chose others over themselves.

The Will of Fire was always about sacrifice. And yours burned the brightest.`,scene:'calm',mood:'#cc6600',characters:['Naruto','Sasuke'],effects:{flags:{ending_sacrifice:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

NARUTO_NODES.nar_ending_rinnegan = {text:`Your minor clan was never truly minor. The bloodline was hidden — diluted Uzumaki and Uchiha heritage buried under generations of deliberate obscurity. Your ancestors hid from the wars by becoming invisible.

But Pain\`s assault awakened something. The trauma, the chakra surge, the proximity to the Rinnegan\`s power — it triggered a dormant evolution.

Your eyes change. The Rinnegan blooms — pale purple, concentric rings, the eyes of the Sage of Six Paths himself. The power is overwhelming. You can see the flow of all chakra, manipulate gravity, touch the boundary between life and death.

It nearly destroys you. Months of isolation, learning to control power that was never meant for a single person. Naruto finds you in a cave, half-mad, eyes blazing with purple light.

"Come home," he says simply. "We will figure it out together."

With the Rinnegan and Naruto\`s support, you become the most powerful shinobi alive — not through ambition, but through the accident of blood and the choice to use power for protection.

In the Fourth Great Ninja War, you stand beside Naruto and Sasuke as an equal. Three legendary shinobi, each carrying impossible power, fighting for a world worth believing in.

The age of the ninja will remember three names. And yours is among them.`,scene:'calm',mood:'#0a2a5a',characters:['Naruto','Sasuke','Pain'],effects:{flags:{ending_rinnegan:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

// ============================================================
// SCENARIO DATA — DEMON SLAYER: BREATH OF RESOLVE
// ============================================================
window.SCEN_NODES['naruto'] = NARUTO_NODES;
})();
