// Scenario data: aot  (AOT_NODES)
// Split out of scenario-generator.html on 2026-08-01.
// Edit THIS file to change this scenario — the main file no longer holds node data.
window.SCEN_NODES = window.SCEN_NODES || {};
(function(){
const AOT_NODES = {};

// ---- ARC 1: TRAINING & TROST ----

AOT_NODES.aot_start = {text:`The year is 845. You remember the day the world ended.

You were a child in Shiganshina District when the Colossal Titan appeared above Wall Maria. Sixty meters of skinless muscle and steam, peering over the wall like it was a garden fence. Then the gate exploded inward and the titans poured through.

You lost everything that day. Home. Family. Safety. The illusion that the walls would protect humanity forever.

Now it is 847. You are fifteen years old, standing in a muddy field with two hundred other recruits. The 104th Training Corps. Commander Keith Shadis is walking the line, screaming in faces, breaking spirits before breakfast.

He stops in front of you. His eyes are sunken, haunted — the eyes of a man who has seen the worst the world has to offer and survived only through stubbornness.

"And what are YOU here for, maggot?"`,scene:'action',mood:'#2a3a1a',characters:['Shadis'],choices:[{text:`"To kill every last titan. Every single one."`,next:'aot_vow_kill',effects:{stats:{cou:1}}},{text:`"To understand why the titans exist — and find a way to stop them."`,next:'aot_vow_understand',effects:{stats:{int:1}}},{text:'Say nothing. Hold his gaze without flinching.',next:'aot_vow_silent',effects:{stats:{str:1}}}]};

AOT_NODES.aot_vow_kill = {text:`Shadis leans in close enough that you can smell the coffee and despair on his breath. "Kill every titan? I have heard that speech from a hundred dead soldiers. You want to be different from them? Survive training first."

He moves on. A few spots down the line, a brown-haired boy with furious green eyes is making the exact same vow — louder, angrier, with enough conviction to shake the ground. Eren Jaeger. You have heard his name. Shiganshina survivor, like you.

A dark-haired girl stands beside him like a shadow. Mikasa Ackerman. And behind them both, a small blond boy who looks like a strong wind would snap him in half. Armin Arlert.

Training begins tomorrow. Tonight, the barracks.`,scene:'action',mood:'#2a3a1a',characters:['Shadis','Eren','Mikasa','Armin'],effects:{flags:{vow_kill:true}},choices:[{text:'Find a bunk near Eren and his friends.',next:'aot_barracks_eren'},{text:'Sit with the other recruits — Jean, Sasha, Connie.',next:'aot_barracks_others'},{text:'Keep to yourself. You are here to train, not make friends.',next:'aot_barracks_alone'}]};

AOT_NODES.aot_vow_understand = {text:`Shadis stares at you for a long moment. Something flickers in his eyes — surprise, maybe. Or recognition. "Understand them," he repeats, almost to himself. Then he moves on without another word.

You notice a small blond boy a few spots down watching you with interest. Armin Arlert. Beside him, Eren Jaeger is vibrating with barely contained rage, and Mikasa Ackerman watches everything with those calm, lethal eyes.

Training begins tomorrow. Tonight, the barracks.`,scene:'action',mood:'#2a3a1a',characters:['Shadis','Eren','Mikasa','Armin'],effects:{flags:{vow_understand:true}},choices:[{text:'Find a bunk near Eren and his friends.',next:'aot_barracks_eren'},{text:'Sit with the other recruits — Jean, Sasha, Connie.',next:'aot_barracks_others'},{text:'Keep to yourself. You are here to train, not make friends.',next:'aot_barracks_alone'}]};

AOT_NODES.aot_vow_silent = {text:`Shadis waits. You do not speak. Your eyes say everything — the fire, the loss, the refusal to break. He nods once, almost imperceptibly, and moves on.

Down the line, a boy named Eren Jaeger is screaming his vow to the sky. Mikasa Ackerman stands beside him, and Armin Arlert behind. Shiganshina survivors, all of them.

Training begins tomorrow. Tonight, the barracks.`,scene:'action',mood:'#2a3a1a',characters:['Shadis','Eren','Mikasa','Armin'],effects:{flags:{vow_silent:true}},choices:[{text:'Find a bunk near Eren and his friends.',next:'aot_barracks_eren'},{text:'Sit with the other recruits — Jean, Sasha, Connie.',next:'aot_barracks_others'},{text:'Keep to yourself. You are here to train, not make friends.',next:'aot_barracks_alone'}]};

AOT_NODES.aot_barracks_eren = {text:`You grab the bunk next to Eren. He is still fired up from the initiation, pacing like a caged animal.

"You are from Shiganshina too, right?" He turns to you with those intense green eyes. "I saw it. The Colossal Titan. The Armored Titan breaking through Wall Maria. I watched my mother get eaten."

He says it flatly. Like stating the weather. But his hands are shaking.

Armin speaks up from the lower bunk. "Eren wants to join the Survey Corps. So do I. The only way to take back Wall Maria is to go beyond the walls." He looks at you. "What about you?"

Mikasa says nothing, but she is listening.`,scene:'calm',mood:'#2a3a1a',characters:['Eren','Mikasa','Armin'],effects:{rel:{eren:2,armin:1,mikasa:1}},choices:[{text:`"Survey Corps. No question. The walls are a cage."`,next:'aot_eren_bond',effects:{stats:{cou:1},flags:{survey_intent:true}}},{text:`"I have not decided yet. I want to see where I rank first."`,next:'aot_graduation_feast',effects:{stats:{int:1}}},{text:`"I just want to survive. Is that so wrong?"`,next:'aot_training_montage',effects:{stats:{per:1}}}]};

AOT_NODES.aot_barracks_others = {text:`You settle in with the louder crowd. Jean Kirstein is already arguing with Eren across the room about which regiment is worth joining. "The Military Police," Jean says, flipping his hair back. "Top ten graduate, live in the interior, never see a titan. That is the smart play."

Sasha Blouse is eating a stolen potato — her third today. Connie Springer is trying to balance on a bunk rail.

"So what is your deal?" Jean turns to you. "You look like you have actually seen some action."`,scene:'calm',mood:'#2a3a1a',characters:['Jean','Sasha'],effects:{rel:{jean:2,sasha:1}},choices:[{text:`"Shiganshina. I was there when the wall fell."`,next:'aot_training_montage',effects:{stats:{cou:1},rel:{jean:1}}},{text:`"Does it matter? We are all here for the same reason."`,next:'aot_training_montage',effects:{stats:{int:1}}},{text:'Steal a piece of Sasha\`s potato. Assert dominance.',next:'aot_training_montage',effects:{stats:{cha:1},rel:{sasha:-1,jean:1}}}]};

AOT_NODES.aot_barracks_alone = {text:`You take a bunk in the corner. The noise of the barracks washes over you — arguments, boasts, nervous laughter. You do not need friends. You need skill.

Through the window, the stars are visible above Wall Rose. Somewhere beyond that wall, beyond Wall Maria, the titans roam. Waiting.

A shadow falls across your bunk. Mikasa Ackerman. She does not say anything — just nods at the empty bunk across from yours and takes it. She does not need conversation either, apparently.

For a brief moment, you have something that almost feels like understanding.`,scene:'calm',mood:'#1a3a5a',characters:['Mikasa'],effects:{rel:{mikasa:2},stats:{per:1}},choices:[{text:'Nod back. Appreciate the silence.',next:'aot_training_montage',effects:{rel:{mikasa:1}}},{text:`"Ackerman, right? I have heard of you."`,next:'aot_training_montage',effects:{stats:{int:1}}}]};

AOT_NODES.aot_training_montage = {text:`Three years pass. Three years of blood, sweat, and broken bones.

ODM gear training — learning to fly through the trees on gas-powered cables, blades singing through the air. You crash. You bruise. You get back up. Hand-to-hand combat under Shadis\`s merciless eye. Endurance runs until your lungs burn. Titan anatomy lectures — the nape of the neck, the only kill zone, fourteen centimeters deep.

Bonds form whether you want them to or not. Eren\`s relentless fury. Armin\`s quiet brilliance. Mikasa\`s superhuman skill. Jean\`s sharp tongue hiding real talent. Sasha\`s wild instincts. Reiner\`s steady leadership. Bertholdt\`s nervous height.

Graduation day arrives. The top ten are announced. You made the cut.

Now comes the choice that will define your life.`,scene:'action',mood:'#2a3a1a',characters:['Eren','Mikasa','Armin','Jean','Sasha','Reiner','Bertholdt'],choices:[{text:'Choose the Survey Corps — fight titans beyond the walls.',next:'aot_choose_survey',effects:{stats:{cou:2},flags:{regiment_survey:true}}},{text:'Choose the Garrison — defend the walls and the cities.',next:'aot_choose_garrison',effects:{stats:{per:1,int:1},flags:{regiment_garrison:true}}},{text:'Choose the Military Police — you earned the interior.',next:'aot_choose_mp',effects:{stats:{int:1,cha:1},flags:{regiment_mp:true}}}]};

AOT_NODES.aot_choose_survey = {text:`You step forward when Commander Erwin Smith calls for Survey Corps volunteers. The man is terrifying in his conviction — blond, blue-eyed, with a gaze that makes you feel simultaneously valued and expendable.

Beside him stands Captain Levi. Humanity\`s Strongest Soldier. He looks bored. He looks dangerous. He looks like he has not slept in a decade.

Eren steps forward too. And Armin. And Mikasa. Jean hesitates — then follows. Sasha, Connie, Reiner, Bertholdt, all of them.

"You have all chosen to die," Levi says flatly. "The question is whether you will die usefully."

Before you can settle into your new regiment, alarms split the air. Bells. Screaming. Smoke rising from the south.

The Colossal Titan has appeared at Trost District.`,scene:'action',mood:'#cc4400',characters:['Erwin','Levi','Eren','Mikasa','Armin'],effects:{rel:{erwin:1,levi:1}},choices:[{text:'Gear up immediately. No hesitation.',next:'aot_trost_battle'},{text:'Rally the other recruits — organize before chaos hits.',next:'aot_trost_rally'}]};

AOT_NODES.aot_choose_garrison = {text:`The Garrison is not glamorous. It is guard duty, wall maintenance, cannon drills. But someone has to hold the line.

You are assigned to Trost District under Captain Hannes — a man who drinks too much and laughs too loud, but whose eyes go dark when he talks about Shiganshina.

The routine lasts exactly three days.

On the third day, a flash of lightning illuminates the sky behind the wall. A massive hand grips the top of Wall Rose. The Colossal Titan. Again.

The gate of Trost shatters inward. Titans pour through.

You are already on the wall when it happens.`,scene:'action',mood:'#cc4400',characters:['Eren'],effects:{stats:{per:1}},choices:[{text:'Man the cannons — fire at the breach.',next:'aot_trost_rally',effects:{stats:{int:1}}},{text:'Drop down with ODM gear — engage the titans directly.',next:'aot_trost_battle',effects:{stats:{cou:1}}}]};

AOT_NODES.aot_choose_mp = {text:`You choose the Military Police. Jean nods approvingly. Annie Leonhart — the quiet blonde who fights like a demon — makes the same choice.

But you never make it to the interior.

On your last day in Trost, waiting for transfer orders, the sky splits open with lightning. The Colossal Titan appears at the wall. The gate shatters. Titans flood the district.

Every soldier is conscripted. Military Police trainees included.

Annie\`s expression does not change. Not even a flicker of surprise. Something about that bothers you.

"Move," she says. "Or die standing still."`,scene:'action',mood:'#cc4400',characters:['Annie','Jean'],effects:{rel:{annie:1,jean:1}},choices:[{text:'Follow Annie — she clearly knows what she is doing.',next:'aot_trost_battle',effects:{rel:{annie:1}}},{text:'Find Eren and the others — strength in numbers.',next:'aot_trost_rally',effects:{stats:{int:1}}}]};

AOT_NODES.aot_trost_rally = {text:`You find the other recruits in chaos. Some are frozen. Some are crying. Daz is having a full breakdown against a wall. The squad leaders are dead or scattered.

"Listen to me!" You grab the nearest recruits and start giving orders. "Mikasa, take point — you are the best blade we have. Armin, I need you mapping escape routes for civilians. Jean, get anyone who can still hold a sword into formation."

Jean stares at you. "Who put you in charge?"

"Nobody. But someone has to be. Are you in or not?"

He grits his teeth. Then nods.

From the rooftops, you see them — titans streaming through the breach. Five-meter class. Seven-meter. A fourteen-meter aberrant sprinting down the main street faster than a horse.

And somewhere in the chaos, Eren Jaeger charges straight at them.`,scene:'action',mood:'#cc4400',characters:['Mikasa','Armin','Jean','Eren'],effects:{stats:{cha:1,int:1},rel:{jean:1,armin:1}},choices:[{text:'Follow Eren — cover his reckless charge.',next:'aot_trost_battle'},{text:'Hold position — protect the evacuation route.',next:'aot_trost_defend'}]};

AOT_NODES.aot_trost_battle = {text:`You launch into the air on ODM cables. The wind screams past your face. Below, a ten-meter titan reaches for a cluster of fleeing civilians, its grinning face frozen in mindless hunger.

You swing wide, building momentum. The titan\`s nape is exposed — fourteen centimeters of vulnerable flesh at the back of the neck. Your blades are sharp. Your aim is true.

You strike. Steam erupts from the wound as the titan collapses. Your first kill.

There is no time to celebrate. Three more are coming up the street. And somewhere ahead, you hear Eren screaming — not in rage this time. In pain.

By the time you reach his position, it is too late. A titan has Eren in its jaws. His arm is gone. Blood rains down on Armin, who is frozen, screaming.

Mikasa is not here. She does not know yet.

Then something impossible happens. Lightning strikes inside the titan. A roar shakes the district. A new titan — fifteen meters, muscular, burning with fury — erupts from inside the other one.

Eren. Eren is a titan.`,scene:'action',mood:'#cc4400',characters:['Eren','Armin'],effects:{stats:{str:1},flags:{first_kill:true}},choices:[{text:'Trust Eren — help his titan form fight.',next:'aot_eren_titan',effects:{rel:{eren:2},stats:{cou:1}}},{text:'Pull Armin to safety first — he is in shock.',next:'aot_save_armin',effects:{rel:{armin:2},stats:{per:1}}},{text:'Fall back — that thing could be an enemy.',next:'aot_eren_distrust',effects:{stats:{int:1}}}]};

AOT_NODES.aot_trost_defend = {text:`You hold the evacuation corridor with everything you have. Three titans breach your line. You kill two. The third — an aberrant that moves on all fours like a spider — nearly takes your head off before Jean drops it from above.

"We are even," Jean says, breathing hard. Blood is running down his face from a gash on his forehead. "Do not read into it."

The evacuation succeeds. Hundreds of civilians make it through the inner gate. But the cost is high — half your squad is dead.

Then the ground shakes. A roar unlike anything you have ever heard echoes through Trost. From your vantage point, you see it — a titan fighting other titans. Punching them, tearing them apart with calculated fury.

"What the hell is that?" Jean whispers.

You recognize the shape. The brown hair. The green eyes blazing with light.

"Eren," you say. "That is Eren."`,scene:'action',mood:'#cc4400',characters:['Jean','Eren'],effects:{stats:{str:1,per:1},rel:{jean:2},flags:{defended_evacuation:true}},choices:[{text:'Move toward Eren\`s titan — he needs support.',next:'aot_eren_titan'},{text:'Help Jean with the fallen — Marco is missing.',next:'aot_marco_death',effects:{rel:{jean:1}}},{text:'Report to command — they need to know about this.',next:'aot_report_eren'}]};

AOT_NODES.aot_eren_titan = {text:`Eren\`s titan form is devastating. He tears through the smaller titans like paper, each punch sending shockwaves through the street. But he is losing control — his movements are becoming erratic, unfocused. He swings at a building and brings half of it crashing down.

"Eren! EREN!" You shout from the rooftop, but the titan does not hear you. Or does not care.

Armin appears beside you, eyes wide but mind working. "He is in there somewhere. We just need to reach him. If we can get to the nape—"

Mikasa arrives, blades drawn, face unreadable. "I will get him out."

The plan forms quickly: someone needs to distract the erratic titan form while another approaches the nape to cut Eren free. The Garrison is preparing to fire cannons at him — they think he is a threat.`,scene:'action',mood:'#cc4400',characters:['Eren','Armin','Mikasa'],choices:[{text:'Distract Eren\`s titan — draw its attention while Mikasa approaches.',next:'aot_trost_plug',check:{stat:'cou',dc:12,pass:'aot_trost_plug',fail:'aot_trost_plug_fail'}},{text:'Talk Armin through a plan to reach the nape safely.',next:'aot_trost_plug',effects:{stats:{int:1},rel:{armin:1}}},{text:'Race to the Garrison cannons — stop them from firing on Eren.',next:'aot_trost_plug',effects:{stats:{cha:1},flags:{stopped_cannons:true}}}]};

AOT_NODES.aot_save_armin = {text:`You grab Armin and haul him behind cover. He is hyperventilating, covered in Eren\`s blood, eyes seeing nothing.

"Armin. ARMIN." You shake him. "I need you here. Eren is gone—" No. You look up. The new titan is fighting, destroying the others. "Eren is... something happened to Eren. But I need you thinking. Can you do that?"

Armin blinks. Swallows. His hands stop shaking. That terrifying intelligence clicks back into his blue eyes.

"That titan came out of the one that swallowed Eren," he says slowly. "It is fighting the other titans. It is... it is Eren. Eren is controlling a titan."

Mikasa lands next to you both. "Where is Eren?"

"There." Armin points at the rampaging titan. "He is inside that."

Mikasa\`s expression does not change. She draws her blades.`,scene:'action',mood:'#cc4400',characters:['Armin','Mikasa','Eren'],effects:{rel:{armin:2,mikasa:1}},choices:[{text:'Help Mikasa extract Eren from the titan.',next:'aot_trost_plug'},{text:'Get Armin to a command post — his analysis could save lives.',next:'aot_report_eren',effects:{rel:{armin:1}}}]};

AOT_NODES.aot_eren_distrust = {text:`You pull back, watching the titan fight from a safe distance. It is brutal, efficient — but also erratic. It crushes a building while pursuing a smaller titan. Friendly fire from a mindless weapon.

Other soldiers are gathering, equally confused. "Is that thing on our side?" someone asks.

Captain Levi appears on the rooftop beside you, arriving from somewhere in the chaos with the casual ease of a predator. He watches the titan fight.

"Interesting," he says. Then: "Oi. You. Recruit. What did you see?"

You report what you witnessed — Eren being swallowed, the lightning strike, the titan emerging. Levi listens without expression.

"So the brat can turn into a titan." A pause. "That changes things."`,scene:'action',mood:'#cc4400',characters:['Levi'],effects:{rel:{levi:2},stats:{int:1}},choices:[{text:`"Sir, we can use him to seal the breach."`,next:'aot_trost_plug',effects:{stats:{int:1}}},{text:`"Sir, he is losing control. We need to pull him out."`,next:'aot_trost_plug'}]};

AOT_NODES.aot_report_eren = {text:`You find Commander Pyxis on the wall — the bald, flask-carrying Garrison commander who looks half-drunk but thinks faster than anyone in the room.

"A titan that fights other titans," he muses, taking a sip. "Controlled by a human boy. This is either humanity\`s salvation or its most dangerous weapon."

He turns to you. "You know this Eren Jaeger?"

"Yes sir. He is a good soldier. Reckless, but his heart is in the right place."

"Hearts do not matter when you are sixty feet tall and crushing buildings." Pyxis stares at the chaos below. "But I will take any weapon I can get. We need that breach sealed, and we have a boulder near the gate large enough to do it. If this boy can carry it in titan form..."`,scene:'action',mood:'#2a3a1a',characters:['Eren'],effects:{stats:{int:1,cha:1}},choices:[{text:'Volunteer to be part of the escort squad.',next:'aot_trost_plug'},{text:'Suggest a tactical formation to protect Eren.',next:'aot_trost_plug',effects:{stats:{int:1}}}]};

AOT_NODES.aot_trost_plug = {text:`The plan is desperate and simple: Eren transforms, lifts a massive boulder, and carries it to the breach to seal the gate. Everyone else keeps the titans off him.

It nearly fails. Eren\`s titan form goes berserk at first — he even swings at Mikasa before Armin screams him back to consciousness. But it works. Slowly, painfully, Eren lifts the boulder and staggers toward the breach.

You are part of the escort. Titans converge from every direction. Your blades are dull. Your gas is low. Soldiers die around you.

A titan lunges for Eren\`s legs. You have one charge of gas left, one shot.`,scene:'action',mood:'#660000',characters:['Eren','Mikasa','Armin'],choices:[{text:'Burn your last gas — kill the titan attacking Eren.',next:'aot_trost_victory',check:{stat:'str',dc:13,pass:'aot_trost_victory',fail:'aot_trost_wounded'}},{text:'Signal Mikasa — she is closer and better.',next:'aot_trost_victory',effects:{stats:{int:1},rel:{mikasa:1}}},{text:'Throw your blade like a javelin at its eye — buy time.',next:'aot_trost_victory',effects:{stats:{per:1}}}]};

AOT_NODES.aot_trost_plug_fail = {text:`You charge in to distract Eren\`s titan, but the sheer force of his movements catches you off guard. A massive hand swats you out of the air — not maliciously, just carelessly, like brushing away a fly.

You slam into a rooftop, ribs cracking. The world goes white with pain. When your vision clears, Mikasa is standing over you and Armin is cutting Eren free from the titan nape.

"Stay down," Mikasa says. It is not a suggestion.

You missed the critical moment, but the plan still moves forward. Eren will carry the boulder. You will just have to do it with broken ribs.`,scene:'action',mood:'#660000',characters:['Mikasa','Armin','Eren'],effects:{stats:{str:-1}},choices:[{text:'Get up. Broken ribs or not, you are fighting.',next:'aot_trost_plug',effects:{stats:{cou:1}}},{text:'Direct the operation from the rooftop — you can still think.',next:'aot_trost_plug',effects:{stats:{int:1}}}]};

AOT_NODES.aot_trost_victory = {text:`The boulder drops into place. The breach is sealed. Trost is saved.

The cost is staggering. Over two hundred soldiers dead. Entire city blocks reduced to rubble. But for the first time since Wall Maria fell, humanity has won a battle.

Eren is pulled from his titan form, unconscious and steaming. The Military Police want him in chains. The Survey Corps want him as a weapon. The Garrison just wants to know if there are more like him.

You are summoned to a military tribunal as a witness. Eren is on trial for his life.

Captain Levi kicks Eren in the face three times in front of the judges — a calculated performance to prove the military can control him. It works. Eren is remanded to the Survey Corps under Levi\`s direct supervision.

And you have a choice to make about your own future.`,scene:'calm',mood:'#2a3a1a',characters:['Eren','Levi','Erwin'],effects:{flags:{trost_complete:true}},choices:[{text:'Follow Eren into the Survey Corps — this is where the fight is.',next:'aot_survey_join',effects:{stats:{cou:1},rel:{eren:1}}},{text:'Request transfer to Levi\`s squad specifically.',next:'aot_levi_squad',effects:{rel:{levi:1}}},{text:'Stay with your current regiment but volunteer for the next expedition.',next:'aot_expedition_prep'}]};

AOT_NODES.aot_trost_wounded = {text:`You burn your last gas and attack. The strike lands — but not deep enough. The titan swats you away. You crash through a window, bleeding from a deep gash across your side.

Mikasa finishes the kill. The boulder drops into place. Trost is sealed.

You survive, but only barely. The medical tent is overflowing. A field medic stitches your wound while you bite down on a leather strap to keep from screaming.

When the tribunal comes, you testify in Eren\`s defense from a wheelchair. Levi notes your attendance.

"You showed up half-dead to defend a comrade," he says afterward. "That is either loyalty or stupidity. Both are useful."`,scene:'calm',mood:'#660000',characters:['Levi','Eren','Mikasa'],effects:{stats:{str:-1,cou:1},rel:{levi:2,eren:1}},choices:[{text:'Join the Survey Corps as soon as you can stand.',next:'aot_survey_join'},{text:'Request placement in Levi\`s squad.',next:'aot_levi_squad',effects:{rel:{levi:1}}}]};

// ---- ARC 2: THE FEMALE TITAN ----

AOT_NODES.aot_survey_join = {text:`The Survey Corps headquarters is a castle that has seen better centuries. The walls are stone, the food is bad, and the company is worse — soldiers who have watched their friends die so many times they have stopped counting.

But the energy is different here. These people are not hiding behind walls. They are fighting.

Commander Erwin Smith briefs the new recruits. "The 57th Expedition Beyond the Walls launches in one week. Our objective: establish a supply route to Shiganshina. But I have intelligence suggesting we may encounter something new. Something dangerous."

He does not elaborate. Erwin never elaborates.

Hange Zoe corners you after the briefing, eyes gleaming with the particular madness of a scientist who studies monsters. "You were at Trost! You saw Eren transform! Tell me EVERYTHING. Do his eyes change first or does the lightning come first? What did it smell like? Was there a trigger?"`,scene:'calm',mood:'#2a3a1a',characters:['Erwin','Hange'],effects:{rel:{erwin:1,hange:1}},choices:[{text:'Answer Hange\`s questions in detail — science matters.',next:'aot_hange_experiment',effects:{rel:{hange:2},stats:{int:1}}},{text:'Ask Erwin what he is not telling you.',next:'aot_erwin_secret',effects:{stats:{per:1}}},{text:'Focus on training — you need to be ready for what is coming.',next:'aot_levi_tea',effects:{stats:{str:1}}}]};

AOT_NODES.aot_levi_squad = {text:`Levi reads your request. Then reads it again. Then looks at you with those flat, intimidating eyes.

"You want to join my squad." It is not a question. "Do you know what happened to the last squad I personally selected?"

You do. They were the best soldiers in the Survey Corps. Petra Ral. Oluo Bozado. Eld Jinn. Gunther Schultz. All of them legendary.

"They are not dead yet," Levi says. "But on the next expedition, some of them might be. Are you prepared for that?"

"Yes sir."

"Clean the barracks first. Then we will see if you can fight half as well as you can fill out paperwork."

You spend the next three days scrubbing floors to Levi\`s impossible standards. But you are in.`,scene:'calm',mood:'#2a3a1a',characters:['Levi'],effects:{rel:{levi:2},flags:{levi_squad:true}},choices:[{text:'Train obsessively — prove you belong with the best.',next:'aot_expedition_prep',effects:{stats:{str:1,cou:1}}},{text:'Build rapport with Petra and the others.',next:'aot_expedition_prep',effects:{stats:{cha:1},rel:{levi:1}}}]};

AOT_NODES.aot_erwin_secret = {text:`Erwin regards you for a long moment. The man has a poker face carved from granite.

"You are perceptive," he says finally. "I will tell you this much: we have reason to believe there are other humans who can transform into titans. Not allies."

The weight of that statement hits you like a physical blow. Other titan shifters. Enemies within the walls.

"The 57th Expedition is as much about drawing them out as it is about reaching Shiganshina. You will be briefed on your role before we depart."

He pauses at the door. "Tell no one what I have told you. Trust is a luxury we cannot afford."`,scene:'calm',mood:'#1a3a5a',characters:['Erwin'],effects:{rel:{erwin:2},stats:{int:1},flags:{knows_erwin_plan:true}},choices:[{text:'Keep Erwin\`s secret. Trust his judgment.',next:'aot_expedition_prep',effects:{rel:{erwin:1}}},{text:'Warn Eren — he deserves to know he is bait.',next:'aot_expedition_prep',effects:{rel:{eren:1},rel:{erwin:-1}}}]};

AOT_NODES.aot_expedition_prep = {text:`The night before the 57th Expedition, the Survey Corps camp is quiet. Tomorrow, many of these people will die. Everyone knows it. Nobody says it.

You find yourself on the ramparts, staring at the moonlit countryside beyond Wall Rose. Somewhere out there, Wall Maria still stands — abandoned, titan-infested, holding secrets in Eren\`s basement that could change everything.

Footsteps behind you. You are not alone.`,scene:'calm',mood:'#1a3a5a',characters:['Eren','Armin','Mikasa','Jean','Sasha','Levi'],choices:[{text:'It is Armin — he wants to discuss strategy.',next:'aot_armin_plan',effects:{rel:{armin:1},stats:{int:1}}},{text:'It is Sasha — sharing stolen rations on watch.',next:'aot_sasha_bond',effects:{rel:{sasha:1}}},{text:'It is Jean — he cannot sleep either.',next:'aot_57th_begin',effects:{rel:{jean:1},stats:{cou:1}}}]};

AOT_NODES.aot_57th_begin = {text:`The 57th Expedition launches at dawn. Six hundred soldiers ride through the gate in the Long-Range Scouting Formation — Erwin\`s masterpiece of tactical organization. Scouts spread across a two-kilometer front, using signal flares to communicate titan positions.

Green flare: advance. Red flare: titan spotted. Black flare: aberrant titan.

For the first hour, it works beautifully. The formation flows around titan encounters like water around stones. You ride with your squad, eyes scanning the horizon.

Then the black flares start. Not one. Not two. A wall of them from the right flank.

Something is coming. Something fast.

A figure appears on the horizon — a titan, but wrong. Female. Athletic build. Intelligent eyes. Moving with purpose, not hunger. It tears through the right flank like a blade through paper, killing soldiers with precise, calculated strikes.

The Female Titan.`,scene:'action',mood:'#cc4400',characters:['Erwin','Levi','Eren'],effects:{flags:{female_titan_encounter:true}},choices:[{text:'Engage the Female Titan directly.',next:'aot_female_fight',check:{stat:'str',dc:14,pass:'aot_female_fight',fail:'aot_female_fight_fail'}},{text:'Fall back to Eren\`s position — protect the asset.',next:'aot_protect_eren'},{text:'Fire signal flares — warn the formation.',next:'aot_forest_chase',effects:{stats:{int:1}}}]};

AOT_NODES.aot_female_fight = {text:`You attack the Female Titan. Your ODM cables bite into a nearby tree as you swing in fast, blades aimed at the nape.

The titan turns. Those intelligent eyes lock onto you. It raises one hand and catches your cable mid-swing. You are yanked off course, spinning wildly.

But your second cable finds purchase. You redirect, coming in from below — an angle most titans cannot defend. Your blade scores a deep cut across the back of her knee. The Female Titan stumbles.

It is not a kill. But it is a wound that slows her down. And it tells you something important: this titan knows how to fight. It anticipates attacks. It protects its nape.

This is not a mindless monster. This is a soldier.`,scene:'action',mood:'#cc4400',characters:['Annie'],effects:{stats:{str:1,per:1},flags:{wounded_female_titan:true}},choices:[{text:'Press the attack — keep her off balance.',next:'aot_forest_chase'},{text:'Disengage and report what you learned — she fights like a human.',next:'aot_forest_chase',effects:{stats:{int:1}}}]};

AOT_NODES.aot_female_fight_fail = {text:`You attack the Female Titan. It is a mistake.

She sees you coming. One massive hand swats you out of the air with terrifying precision. You crash through tree branches, your ODM gear snagging and spinning you like a ragdoll.

When you finally stop, you are hanging upside down from a branch, bleeding from a dozen cuts. Your left arm is dislocated. Below, the Female Titan continues her advance without a backward glance.

She does not even consider you worth killing. That is somehow worse.

You cut yourself free with your remaining blade and drag yourself back to formation. Humbled. Alive.`,scene:'action',mood:'#660000',characters:['Annie'],effects:{stats:{str:-1}},choices:[{text:'Regroup and follow the Female Titan from a distance.',next:'aot_forest_chase',effects:{stats:{per:1}}},{text:'Fall back to the supply wagons — you are too injured to fight.',next:'aot_forest_chase'}]};

AOT_NODES.aot_protect_eren = {text:`You ride hard toward Eren\`s position in the center of the formation. Levi\`s squad is escorting him — Petra, Oluo, Eld, Gunther — the best soldiers in the Corps.

"What is happening on the right flank?" Petra calls out as you approach.

"A titan. Female form. Intelligent. It is targeting soldiers specifically and moving toward the center — toward Eren."

Eren\`s jaw tightens. "Let me transform. I can fight it."

"No," Levi says from the front. "We follow the plan. Into the forest."

The trees of the Giant Forest rise ahead — massive trunks wider than houses. Erwin is leading the formation directly into them. It makes no tactical sense for cavalry. Unless it is a trap.`,scene:'action',mood:'#2a3a1a',characters:['Levi','Eren'],effects:{rel:{eren:1,levi:1}},choices:[{text:'Trust Levi and Erwin — follow orders into the forest.',next:'aot_forest_trap'},{text:'Stay close to Eren — if the trap fails, he will need protection.',next:'aot_forest_trap',effects:{rel:{eren:1}}}]};

AOT_NODES.aot_forest_chase = {text:`Erwin leads the formation into the Giant Forest. The Female Titan follows — exactly as planned.

Deep in the forest, hidden among the massive trees, the trap springs. Specialized restraint weapons fire from concealed positions — barrels of hardened wire that wrap around the Female Titan\`s limbs, pinning her against a tree trunk.

She is caught. Levi and his squad move in.

But the Female Titan screams. Not a roar — a scream. High-pitched, piercing, carrying across kilometers. And from the forest, dozens of mindless titans begin converging on her position, drawn by the call.

They are not coming to help her. They are coming to devour her — to destroy the evidence.

"She is calling them to eat her body," Hange realizes. "She would rather die than be captured."

Levi moves in to cut the human out of the nape before the titans arrive. You have seconds to act.`,scene:'action',mood:'#cc4400',characters:['Levi','Hange','Erwin'],effects:{flags:{forest_trap:true}},choices:[{text:'Help Levi — cover him while he extracts the shifter.',next:'aot_annie_escape',effects:{rel:{levi:1},stats:{cou:1}}},{text:'Fight the incoming titans — hold the perimeter.',next:'aot_annie_escape',check:{stat:'str',dc:13,pass:'aot_annie_escape',fail:'aot_squad_losses'}},{text:'Study the Female Titan\`s face before she is consumed — memorize it.',next:'aot_recognize_annie',effects:{stats:{per:2},flags:{saw_female_face:true}}}]};

AOT_NODES.aot_forest_trap = {text:`The trap springs in the heart of the Giant Forest. Wire restraints pin the Female Titan to a massive tree. She struggles, crystallizing her skin to protect the nape — a hardening ability nobody expected.

Levi\`s blades shatter against the crystal armor. "Tch. This one has tricks."

Then she screams, calling titans to devour her. Chaos erupts as mindless titans swarm the forest.

Levi\`s squad holds position around Eren. But the Female Titan breaks free — she sacrificed her restraints by tearing off her own arms, which are already regenerating.

She heads directly for Eren\`s squad.`,scene:'action',mood:'#660000',characters:['Levi','Eren'],effects:{flags:{forest_trap:true}},choices:[{text:'Stay with Levi\`s squad — protect Eren at all costs.',next:'aot_squad_fight'},{text:'Break off and flank the Female Titan.',next:'aot_annie_escape',effects:{stats:{int:1}}},{text:'Tell Eren to transform — now or never.',next:'aot_eren_vs_female',effects:{rel:{eren:1}}}]};

AOT_NODES.aot_squad_fight = {text:`Levi\`s squad engages the Female Titan. Gunther. Eld. Petra. Oluo. The best soldiers in the Survey Corps, moving in perfect coordination.

It is not enough.

The Female Titan is too fast, too smart. She kills Gunther first — a surprise attack from behind that snaps his ODM cable mid-flight. Eld goes next, bitten in half. Petra is kicked into a tree with enough force to shatter her spine. Oluo\`s blades break against the crystallized nape.

You watch them die. One by one. The finest soldiers you have ever known.

Eren screams. Bites his hand. Lightning strikes. His titan form erupts with a roar of pure fury, and he charges the Female Titan.`,scene:'action',mood:'#660000',characters:['Eren','Levi'],effects:{flags:{squad_dead:true},stats:{cou:1}},choices:[{text:'Support Eren\`s titan fight — use ODM to blind the Female Titan.',next:'aot_eren_vs_female',effects:{stats:{cou:1}}},{text:'Wait for Levi — he is coming and he is furious.',next:'aot_levi_rage',effects:{rel:{levi:1}}}]};

AOT_NODES.aot_eren_vs_female = {text:`Eren\`s titan fights the Female Titan with raw, uncontrolled fury. Fists the size of boulders slam into crystallized armor. The forest shakes with each impact.

But fury is not enough. The Female Titan fights with technique — precise, practiced, military combat adapted to a fifteen-meter body. She baits Eren into overextending, then delivers a crystallized kick that shatters his titan\`s jaw.

Eren regenerates. Attacks again. She takes him apart piece by piece.

Finally, she bites into the nape of his titan form and pulls Eren\`s human body out with her teeth. She runs.

Mikasa appears beside you, moving so fast she is almost a blur. "She has Eren."

"I know."

"Then we go."`,scene:'action',mood:'#660000',characters:['Eren','Mikasa'],effects:{flags:{eren_captured:true}},choices:[{text:'Pursue with Mikasa — cut Eren free at any cost.',next:'aot_levi_rage',effects:{rel:{mikasa:1},stats:{cou:1}}},{text:'Wait — Levi is close. He can do what we cannot.',next:'aot_levi_rage',effects:{stats:{int:1}}}]};

AOT_NODES.aot_levi_rage = {text:`Captain Levi arrives. He has just seen the bodies of his entire squad. His face shows nothing. His eyes show everything.

He moves like nothing you have ever seen. ODM cables singing through the trees, blades flashing in arcs too fast to follow. He does not fight the Female Titan — he dismantles her. Tendons in both ankles. Muscles in both arms. Eyes. Jaw.

In under sixty seconds, Levi carves Eren free from the Female Titan\`s mouth and retreats before she can regenerate.

The Female Titan flees, steaming and blind, eventually emerging from the forest and disappearing into the wilderness.

The expedition is over. The Survey Corps retreats to the walls with their dead.

But Levi is not done. "That titan fought like a trained soldier," he says on the ride back. "Someone in our ranks is the enemy."`,scene:'action',mood:'#1a3a5a',characters:['Levi','Eren','Mikasa'],effects:{rel:{levi:1}},choices:[{text:`"I have a theory about who it might be."`,next:'aot_annie_suspect',effects:{stats:{int:1}}},{text:`"How do we find a traitor among hundreds of soldiers?"`,next:'aot_annie_investigation'},{text:'Stay silent. Think. Watch.',next:'aot_annie_investigation',effects:{stats:{per:1}}}]};

AOT_NODES.aot_annie_escape = {text:`The Female Titan escapes in the chaos. Titans devour her discarded body parts while the real shifter — still hidden in the nape — hardens a cocoon of crystal and vanishes in the confusion.

The expedition retreats. Bodies are loaded onto carts. Too many carts. Levi stares at the wagon carrying Petra\`s body with an expression that would make stones weep.

"All that death," Levi says quietly, "and she got away."

Back within the walls, Erwin calls a secret meeting. "The Female Titan will try again. We need to identify the shifter before the next attack."

Armin raises his hand. "I have a theory. During the expedition, the Female Titan specifically targeted Eren. She knew our formation. She avoided killing certain people. And she used a fighting style I have seen before."

He looks at you. "In training. Annie Leonhart."`,scene:'calm',mood:'#1a3a5a',characters:['Levi','Armin','Erwin'],effects:{rel:{armin:1}},choices:[{text:`"Annie. It makes sense. She was always too skilled, too detached."`,next:'aot_annie_suspect',effects:{stats:{int:1}}},{text:`"We need proof before we accuse anyone."`,next:'aot_annie_investigation',effects:{stats:{per:1}}}]};

AOT_NODES.aot_recognize_annie = {text:`You get close enough to see through the steam. The Female Titan\`s face — before the other titans reach her — has features you recognize. The nose. The jaw. The cold, calculating eyes.

Annie Leonhart. The quiet girl from training who fought like she was born for war. The one who chose the Military Police and never seemed to care about anything.

Annie is the Female Titan.

You fall back before the swarming titans reach you, heart pounding. This changes everything. The enemy is not out there. The enemy graduated alongside you.

When the expedition retreats, you carry this knowledge like a bomb. Who do you tell?`,scene:'calm',mood:'#1a3a5a',characters:['Annie'],effects:{flags:{identified_annie:true}},choices:[{text:'Go directly to Erwin — chain of command.',next:'aot_annie_suspect',effects:{rel:{erwin:1},stats:{int:1}}},{text:'Tell Armin first — he is the smartest person you know.',next:'aot_annie_suspect',effects:{rel:{armin:2}}},{text:'Confront Annie alone.',next:'aot_confront_annie',effects:{stats:{cou:1}}}]};

AOT_NODES.aot_annie_suspect = {text:`The evidence points to Annie Leonhart. Armin\`s analysis is damning: she used Marco\`s ODM gear after his death, suggesting she was involved in killing him. Her fighting style matches the Female Titan. She was absent during key moments of the expedition.

Erwin devises a plan. Lure Annie underground where she cannot transform — the confined space would kill her. Use Eren as bait in Stohess District, within Wall Sina itself.

It is a gamble. If Annie transforms inside the city, hundreds of civilians will die.

"The risk is acceptable," Erwin says with the calm certainty of a man who counts lives like chess pieces.

You are assigned to the capture team. Armin will lead Annie into the underground passage. Eren and Mikasa will be waiting. And you—`,scene:'calm',mood:'#1a3a5a',characters:['Erwin','Armin','Annie'],effects:{flags:{annie_plan:true}},choices:[{text:'Take point in the tunnel — be the first line of defense.',next:'aot_stohess_battle',effects:{stats:{cou:1}}},{text:'Position yourself at the exit — cut off her escape.',next:'aot_stohess_battle',effects:{stats:{int:1}}},{text:'Watch from the surface — if she transforms, you need eyes above.',next:'aot_stohess_battle',effects:{stats:{per:1}}}]};

AOT_NODES.aot_annie_investigation = {text:`The investigation takes days. You watch the Military Police trainees — looking for anyone who seems too calm, too skilled, too detached.

Annie Leonhart barely reacts when questioned. She answers with one-word responses and empty eyes. But you notice things. The way she watches Eren when she thinks nobody is looking. The slight tension in her jaw when someone mentions the Female Titan. The fact that she has no verifiable alibi for the expedition.

You also notice something about Reiner Braun. He is always nearby when conversations about titans happen. Always steering the discussion. Always watching.

And Bertholdt. Quiet, sweating Bertholdt. Who flinches every time someone says "Colossal Titan."

Something is very wrong with those two. But first — Annie.

Armin approaches you with a plan to lure Annie underground in Stohess District.`,scene:'calm',mood:'#1a3a5a',characters:['Annie','Reiner','Bertholdt','Armin'],effects:{stats:{per:1},flags:{suspects_rb:true}},choices:[{text:'Focus on Annie first. One traitor at a time.',next:'aot_stohess_battle'},{text:'Tell Armin about your suspicions regarding Reiner and Bertholdt.',next:'aot_stohess_battle',effects:{rel:{armin:2},flags:{told_armin_rb:true}}}]};

AOT_NODES.aot_confront_annie = {text:`You find Annie alone in the Military Police barracks, cleaning her ring — that strange ring she always wears. She looks up at you with those ice-blue eyes.

"You know," she says. It is not a question.

"I saw your face. In the forest. Through the steam."

Annie is quiet for a long moment. Then: "What are you going to do about it?"

"That depends on you. Why? Why are you doing this?"

Her expression fractures, just for a moment. Pain. Real, deep pain. "Because I have no choice. There is a world beyond the walls. People I have to protect. A father I promised to come home to."

She stands. Her thumb moves to the ring. You see the blade hidden inside — a cutting edge. One scratch and she transforms.

"I do not want to fight you," she says. "But I will if I have to."`,scene:'calm',mood:'#660000',characters:['Annie'],effects:{rel:{annie:2},stats:{cou:1}},choices:[{text:`"Then do not fight. Help us instead. You do not have to be their weapon."`,next:'aot_stohess_battle',check:{stat:'cha',dc:14,pass:'aot_annie_hesitates',fail:'aot_stohess_battle'}},{text:'Attack first — do not give her time to transform.',next:'aot_stohess_battle',effects:{stats:{str:1}}}]};

AOT_NODES.aot_annie_hesitates = {text:`Annie\`s hand trembles on the ring. For one impossible moment, you see the girl behind the soldier — tired, scared, desperately alone.

"You do not understand," she whispers. "They have my father. If I fail, he dies."

"Who? Who are 'they'?"

"The Marleyan military. We — Reiner, Bertholdt, me — we were sent here as children. Warriors. Weapons. We were told the people inside the walls were devils. We were told—" Her voice breaks.

This is it. The truth. The enemy beyond the walls has a name: Marley.

But the moment shatters. Footsteps in the hallway. Annie\`s walls slam back up. She flicks the ring blade across her thumb. Blood. Lightning.

The Female Titan erupts through the building.`,scene:'action',mood:'#660000',characters:['Annie'],effects:{flags:{marley_revealed_early:true},rel:{annie:3},stats:{int:1,cha:1}},choices:[{text:'Dodge the debris and get to Eren — he needs to transform.',next:'aot_stohess_battle'},{text:'Try to reach Annie in the nape — she was wavering.',next:'aot_stohess_battle',effects:{stats:{cou:1}}}]};

AOT_NODES.aot_stohess_battle = {text:`Stohess District becomes a battlefield. Annie transforms inside the city — the Female Titan erupting through buildings, crushing walls, sending civilians running for their lives.

Eren transforms to meet her. Two titans clash in the streets of humanity\`s most protected city. Each punch demolishes a building. Each step cracks the earth.

You fight alongside Mikasa and the Survey Corps, using ODM gear to navigate the collapsing cityscape. Your job is to prevent Annie from escaping over the wall.

The battle is devastating. Annie fights with desperation — crystallizing parts of her body for armor, using buildings as weapons. Eren fights with fury, roaring with each strike.

Finally, Eren pins her. Mikasa moves in for the kill.

"WAIT!" Eren\`s human voice echoes from inside his titan, remembering Annie from training. The hesitation costs a moment.

Annie begins to cry. Then she encases herself in a crystal cocoon — impenetrable, preserving her in suspended animation. Alive but unreachable.`,scene:'action',mood:'#cc4400',characters:['Eren','Mikasa','Annie'],effects:{flags:{annie_captured:true}},choices:[{text:'Examine the crystal — there must be a way to break through.',next:'aot_aftermath_annie',effects:{stats:{int:1}}},{text:'Survey the damage — count the civilian casualties.',next:'aot_aftermath_annie',effects:{stats:{per:1}}},{text:'Find Erwin — demand answers about what comes next.',next:'aot_aftermath_annie',effects:{rel:{erwin:1}}}]};

AOT_NODES.aot_aftermath_annie = {text:`Annie\`s crystal sits in a Survey Corps dungeon. Impenetrable. Hange has tried everything — blades, explosives, even concentrated acid. Nothing works.

But Annie\`s capture has consequences. The government is furious. The Military Police want the Survey Corps dissolved. And Erwin faces charges of treason for endangering civilians.

In the chaos, you receive a quiet visitor. Reiner Braun. He looks terrible — dark circles under his eyes, jaw clenched tight, massive frame somehow seeming diminished.

"Some fight in Stohess, huh?" he says, trying to sound casual. But his eyes are calculating.

If you suspected him before, every alarm in your body is screaming now.

Armin catches your eye from across the room. He sees it too.`,scene:'calm',mood:'#1a3a5a',characters:['Reiner','Armin','Hange'],effects:{flags:{arc2_complete:true}},choices:[{text:'Play along with Reiner — gather information.',next:'aot_night_patrol',effects:{stats:{per:1},rel:{armin:1}}},{text:'Confront Reiner directly — no more games.',next:'aot_reiner_reveal',effects:{stats:{cou:1}}},{text:'Report to Erwin immediately.',next:'aot_reiner_reveal',effects:{stats:{int:1},rel:{erwin:1}}}]};

AOT_NODES.aot_squad_losses = {text:`The incoming titans overwhelm the perimeter. You kill one — blades biting deep into the nape — but another catches your cable and yanks you out of the air.

You hit the ground hard. A boot pins you down — not a titan\`s. A soldier pulls you up. Jean.

"You look terrible," he says.

"You should see the other guy."

Around you, the Female Titan has escaped in the chaos. Levi\`s squad is engaged deeper in the forest. Explosions of steam mark where titans are dying — or being eaten.

The cost of the ambush is mounting. Bodies everywhere. The Female Titan called reinforcements and the trap has become a deathtrap.`,scene:'action',mood:'#660000',characters:['Jean'],effects:{stats:{str:-1},rel:{jean:1}},choices:[{text:'Rally with Jean — find surviving soldiers.',next:'aot_annie_escape',effects:{rel:{jean:1}}},{text:'Push toward Levi\`s position — they might need help.',next:'aot_forest_trap',effects:{stats:{cou:1}}}]};

AOT_NODES.aot_hange_experiment = {text:`Between expeditions, Hange drags you into the titan research lab. Two captured titans — Sawney and Bean — are chained in the courtyard, snapping their jaws at anyone who gets close.

"Watch this," Hange says with terrifying enthusiasm. "When I remove a piece of flesh from the left flank—" They slice a chunk off Sawney with a polearm. The titan screeches. "—it regenerates in four minutes and thirty-two seconds. But from the right flank? Seven minutes! The asymmetry is FASCINATING."

You are mildly horrified. Hange is in heaven.

"I need someone to help me test pain responses. You in?"

Before you can answer, something happens in the night. Both titans are killed — throats slit by someone using ODM gear. An inside job. A traitor in the ranks.

Hange is devastated. But the implications are clear: whoever killed the test subjects did not want humanity learning titan biology. The enemy is among you.`,scene:'calm',mood:'#2a3a1a',characters:['Hange'],effects:{rel:{hange:2},flags:{titans_killed:true}},choices:[{text:'Help Hange investigate who killed Sawney and Bean.',next:'aot_annie_investigation',effects:{stats:{per:1},rel:{hange:1}}},{text:'Focus on the upcoming expedition — the investigation can wait.',next:'aot_expedition_prep',effects:{stats:{int:1}}}]};

AOT_NODES.aot_sasha_bond = {text:`Night watch on Wall Rose. The wind is bitter and the stars are hidden behind clouds. Your companion for the shift: Sasha Blouse.

She produces a wrapped package from inside her jacket. Dried meat. Premium quality.

"Want some? I stole it from the officers\` pantry." She grins without a shred of guilt.

You eat together in companionable silence. Then Sasha gets serious — a rare event.

"You know, people think I am just the food girl. And they are not wrong. But I joined the military because titans destroyed my village\`s hunting grounds. My family is starving. The Wall Maria refugees are packed into the interior with nothing."

She stares at the darkness beyond the wall. "I fight so my dad can hunt in peace again. That is all."

For a moment, you see the real Sasha — not the comedian, but the hunter who would kill for her family.`,scene:'calm',mood:'#2a3a1a',characters:['Sasha'],effects:{rel:{sasha:2},stats:{per:1}},choices:[{text:'Share your own reason for fighting.',next:'aot_expedition_prep',effects:{rel:{sasha:1},stats:{cou:1}}},{text:'Promise to help reclaim the territory her family needs.',next:'aot_expedition_prep',effects:{rel:{sasha:2}}}]};

AOT_NODES.aot_levi_tea = {text:`You find Captain Levi alone in the mess hall at midnight, drinking tea. He holds the cup from the rim — never the handle. A peculiarity that somehow makes the most dangerous man alive seem almost human.

"Sit," he says without looking up. It is not a request.

You sit. He pours you tea.

"You fight well," he says. "You think before you swing. That is rare."

Coming from Levi, this is equivalent to a standing ovation.

"I am going to tell you something I do not tell recruits. The Survey Corps has a thirty percent survival rate per expedition. After five expeditions, less than ten percent of the original soldiers remain. I have been on more than twenty."

He drinks. "Survival is not about strength. It is about choosing correctly which fights to take and which to avoid. Remember that."`,scene:'calm',mood:'#2a3a1a',characters:['Levi'],effects:{rel:{levi:2},stats:{int:1}},choices:[{text:`"Why do you keep fighting, Captain?"`,next:'aot_expedition_prep',effects:{rel:{levi:1}}},{text:'Take the lesson to heart — fight smarter, not harder.',next:'aot_expedition_prep',effects:{stats:{per:1}}}]};

AOT_NODES.aot_night_patrol = {text:`A routine night patrol along Wall Rose turns deadly. Three titans are spotted moving in the moonlight — which should be impossible. Titans need sunlight to function.

Your squad scrambles. These titans are different — faster, more coordinated, and they are coming from INSIDE the wall territory. Not from a breach. From within.

"That is impossible," Jean hisses beside you. "There is no breach. Where are they coming from?"

Then you see it — a figure on a nearby rooftop. Not a titan. A person. Watching the titans move with calculating eyes.

The figure sees you and disappears into the darkness.

The titans attack your squad. You have to fight now and investigate later.`,scene:'action',mood:'#cc4400',characters:['Jean'],effects:{flags:{night_titans:true}},choices:[{text:'Fight the titans — protect your squad.',next:'aot_aftermath_annie',check:{stat:'str',dc:12,pass:'aot_aftermath_annie',fail:'aot_aftermath_annie'},effects:{stats:{cou:1}}},{text:'Pursue the mysterious figure — they might be controlling the titans.',next:'aot_aftermath_annie',effects:{stats:{per:1},flags:{saw_spy:true}}}]};

AOT_NODES.aot_eren_bond = {text:`Training yard, late evening. Eren is still practicing hand-to-hand combat long after everyone else has gone to bed. His technique is sloppy — all aggression, no finesse.

"You are dropping your guard on the left," you say from the doorway.

He turns, sweating, breathing hard. "Then show me how to fix it."

You spar for an hour. He is not the most talented fighter — that is Mikasa by a mile — but his determination is frightening. Every time you knock him down, he gets up faster. Every correction you give, he absorbs instantly.

"You know," he says during a water break, "most people think I am just angry. And I am. But it is not blind rage. I remember every face from Shiganshina. Every person who died. I carry them. That is what keeps me going."

He looks at you. "What keeps you going?"`,scene:'calm',mood:'#2a3a1a',characters:['Eren'],effects:{rel:{eren:2},stats:{str:1}},choices:[{text:`"Same as you. The ones we lost."`,next:'aot_training_montage',effects:{rel:{eren:1},stats:{cou:1}}},{text:`"The future. I fight for what comes after."`,next:'aot_training_montage',effects:{stats:{int:1}}},{text:`"Honestly? I do not know anymore. But I am still here."`,next:'aot_training_montage',effects:{stats:{per:1}}}]};

AOT_NODES.aot_armin_plan = {text:`Armin finds you in the library, surrounded by maps of the territory beyond Wall Maria. His eyes are bright with that particular intensity that means he has had an idea.

"Look at this." He spreads a hand-drawn chart across the table. "Titan migration patterns from the last three expeditions. They are not random. There is a corridor — a path they follow between the walls and the ocean."

He traces the route with his finger. "If we could map this corridor, we could predict where titans will be and plan expeditions around them. It would triple our survival rate."

You study the data. He is right. The patterns are there — subtle, but undeniable.

"The problem is we need more data. From deeper beyond the walls than anyone has gone."

His voice drops to a whisper. "I think there is something out there. Something the titans are moving toward. Or away from."`,scene:'calm',mood:'#1a3a5a',characters:['Armin'],effects:{rel:{armin:2},stats:{int:1}},choices:[{text:'Help Armin refine the analysis — present it to Erwin.',next:'aot_expedition_prep',effects:{rel:{armin:1},stats:{int:1}}},{text:`"This is incredible. But be careful who you share it with."`,next:'aot_expedition_prep',effects:{stats:{per:1}}}]};

AOT_NODES.aot_graduation_feast = {text:`The night before graduation, the 104th Training Corps holds an unofficial feast. Stolen food, smuggled drink, and three years of tension finally released.

Jean and Eren are arguing again — this time about whether combat skill or strategic thinking matters more. Sasha has acquired an entire roast ham through means nobody questions. Connie is attempting to arm-wrestle Reiner and losing spectacularly.

Mikasa sits quietly, watching Eren with those eyes that see everything and reveal nothing.

Annie is absent. She is always absent from social events.

The mood is bittersweet. Tomorrow, the top ten choose their regiments. Some of these people will join the Survey Corps and likely die within the year. Others will retreat to the interior and never hold a blade again.

Reiner raises a mug. "To the 104th. Whatever happens tomorrow — we are comrades."

Bertholdt sweats nervously and raises his mug too.

Knowing what you know now, that toast tastes like betrayal.`,scene:'calm',mood:'#2a3a1a',characters:['Jean','Sasha','Reiner','Bertholdt','Mikasa','Eren'],effects:{stats:{cha:1}},choices:[{text:'Enjoy the night. These moments are rare and precious.',next:'aot_training_montage',effects:{stats:{per:1}}},{text:'Talk to Annie — find out why she isolates herself.',next:'aot_training_montage',effects:{rel:{annie:1},stats:{per:1}}},{text:'Challenge Reiner to arm-wrestling. Show the big man what you have got.',next:'aot_training_montage',check:{stat:'str',dc:11,pass:'aot_training_montage',fail:'aot_training_montage'},effects:{rel:{reiner:1}}}]};

AOT_NODES.aot_marco_death = {text:`In the aftermath of Trost, you help with the body identification detail. Hundreds of corpses. Soldiers who were alive this morning, laughing at breakfast, complaining about the weather.

Jean finds Marco.

Half of Marco. The right half is missing. Jean drops to his knees and does not get up for a long time.

You notice something wrong. Marco\`s ODM gear is missing. Not damaged — missing entirely. Someone took it off him before or after he died.

Why would anyone strip a dead soldier\`s gear?

Later, much later, you learn the truth: Reiner and Bertholdt were overheard by Marco discussing their identities. Annie restrained Marco while they took his gear and left him for the titans.

But right now, all you see is Jean\`s grief. Raw, ugly, honest grief for a boy who should not have died.

"He was the best of us," Jean whispers. "And it did not matter."`,scene:'dark',mood:'#660000',characters:['Jean'],effects:{rel:{jean:2},stats:{per:1},flags:{marco_noticed:true}},choices:[{text:'Stay with Jean. He should not be alone right now.',next:'aot_trost_victory',effects:{rel:{jean:2}}},{text:'Investigate the missing gear — something is wrong here.',next:'aot_trost_victory',effects:{stats:{per:1},flags:{marco_gear:true}}}]};

// ---- ARC 3: THE TRUTH ----

AOT_NODES.aot_reiner_reveal = {text:`It happens on top of Wall Rose. Reiner corners Eren during a routine patrol, Bertholdt hovering nearby. You are close enough to hear.

"Eren," Reiner says. His voice is flat. Dead. "I am the Armored Titan. Bertholdt is the Colossal Titan. We are the ones who destroyed Wall Maria five years ago."

He says it like he is discussing the weather. Like confession is just another mission briefing.

"Come with us. Quietly. We will take you to our homeland and this can all be over."

Eren stares at him. You stare at him. Even Bertholdt looks like he wants to disappear.

"Reiner," Bertholdt whispers, "you were not supposed to—"

"I know what I was supposed to do!" Reiner snaps. Then, softer: "I am tired, Bertholdt. I am so tired of pretending."

The moment shatters. Mikasa draws her blades. Lightning splits the sky.`,scene:'action',mood:'#cc4400',characters:['Reiner','Bertholdt','Eren','Mikasa'],effects:{flags:{rb_revealed:true}},choices:[{text:'Attack Reiner before he transforms — go for the nape.',next:'aot_wall_battle',check:{stat:'str',dc:14,pass:'aot_wound_reiner',fail:'aot_wall_battle'}},{text:'Grab Eren and get him away — he is the priority.',next:'aot_wall_battle',effects:{stats:{int:1},rel:{eren:1}}},{text:'Try to reason with Bertholdt — he is the weak link.',next:'aot_appeal_bert',effects:{stats:{cha:1}}}]};

AOT_NODES.aot_wound_reiner = {text:`You move before Reiner\`s hand reaches his mouth. Your blade catches him across the forearm — deep, to the bone. He staggers back, blood spraying.

"You knew," Reiner says, almost impressed. "How long?"

"Long enough."

But it is not enough to stop him. Reiner bites his other hand. Lightning erupts. The Armored Titan materializes on the wall — fifteen meters of plated muscle and rage. Bertholdt transforms beside him. The Colossal Titan. Sixty meters of steam and devastation.

The wall cracks under their combined weight. But your strike bought precious seconds. Eren is already in the air, Mikasa hauling him clear, and your people are in fighting position instead of caught flat-footed.

Those seconds save lives.`,scene:'action',mood:'#cc4400',characters:['Reiner','Bertholdt','Eren','Mikasa'],effects:{stats:{str:1},flags:{wounded_reiner:true}},choices:[{text:'Engage the Armored Titan with the Survey Corps.',next:'aot_chase_rb'},{text:'Focus on the Colossal Titan — take out the bigger threat.',next:'aot_chase_rb',effects:{stats:{cou:1}}}]};

AOT_NODES.aot_appeal_bert = {text:`"Bertholdt!" you shout. "You do not have to do this! Annie is alive — she chose to stop fighting. You can too!"

Bertholdt\`s face crumples. Tears stream down his cheeks. "You think I want this? I never wanted any of this! We were children — they sent children to do this!"

For a moment, you see the boy he was. Scared. Obedient. Trapped.

Then Reiner grabs his shoulder. "Do it, Bertholdt. Now."

Bertholdt closes his eyes. "I am sorry," he whispers.

Lightning consumes the wall.`,scene:'action',mood:'#cc4400',characters:['Bertholdt','Reiner'],effects:{rel:{bertholdt:2},stats:{cha:1}},choices:[{text:'Retreat — the blast wave from the Colossal Titan will kill you.',next:'aot_chase_rb',effects:{stats:{per:1}}},{text:'Shield Eren from the blast.',next:'aot_chase_rb',effects:{rel:{eren:1},stats:{cou:1}}}]};

AOT_NODES.aot_wall_battle = {text:`Two titans materialize on the wall. The Armored Titan — Reiner — charges Eren, grabbing him before he can transform. The Colossal Titan — Bertholdt — releases a wave of superheated steam that forces everyone back.

Eren transforms in Reiner\`s grip. The two titans grapple on top of the wall, each punch sending tremors through the stone. Mikasa and the Survey Corps attack the Armored Titan\`s joints — the only places the armor has gaps.

You are in the fight of your life. ODM cables strain against the wind from the Colossal Titan\`s steam. Your blades are dulling against armored plate. Soldiers fall around you.

Reiner leaps from the wall with Eren in his grip. Bertholdt falls with them. They are trying to escape — to take Eren beyond the walls.`,scene:'action',mood:'#660000',characters:['Reiner','Bertholdt','Eren','Mikasa','Levi'],choices:[{text:'Follow them over the wall — pursue at any cost.',next:'aot_chase_rb',effects:{stats:{cou:2}}},{text:'Coordinate with Erwin for a rescue formation.',next:'aot_chase_rb',effects:{stats:{int:1},rel:{erwin:1}}}]};

AOT_NODES.aot_chase_rb = {text:`The rescue mission launches into titan territory. Erwin leads the charge personally — the Survey Corps and a contingent of Garrison soldiers riding hard to catch Reiner and Bertholdt before they can escape with Eren.

They find them in a massive forest clearing. Reiner\`s Armored Titan sits with Eren trapped against his chest. Bertholdt perches on his shoulder. They are resting — waiting for nightfall.

Erwin\`s plan is insane. A direct cavalry charge to distract while Mikasa and the elite soldiers cut Eren free.

"Advance!" Erwin roars, drawing his blade. "Dedicate your hearts!"

A titan bites his arm clean off. Erwin does not stop charging.

In the chaos that follows — swords flashing, titans falling, soldiers dying — you reach Reiner\`s hand. Eren is inside, barely conscious.`,scene:'action',mood:'#660000',characters:['Erwin','Eren','Mikasa','Reiner','Bertholdt'],effects:{flags:{erwin_arm:true}},choices:[{text:'Cut Eren free yourself — you are close enough.',next:'aot_coordinate_scream',check:{stat:'str',dc:13,pass:'aot_coordinate_scream',fail:'aot_eren_scream'}},{text:'Create an opening for Mikasa — she has the skill.',next:'aot_eren_scream',effects:{rel:{mikasa:1}}},{text:'Target Bertholdt — take out the Colossal Titan.',next:'aot_eren_scream',effects:{stats:{int:1}}}]};

AOT_NODES.aot_coordinate_scream = {text:`You land on the Armored Titan\`s wrist and drive both blades between the armored plates. The gap is tiny — barely wide enough for a sword edge. But you find it.

Reiner\`s fingers loosen. Eren tumbles free. You catch him mid-fall, ODM cables arresting your descent.

"I have him!" you shout. "RETREAT!"

Mikasa covers your escape. Levi appears from nowhere to hamstring Reiner\`s titan form. The Survey Corps falls back with Eren secured.

But Reiner is not done. He throws titans — actual titans, picked up and hurled like boulders — at the retreating formation.

One of them is heading straight for you and Eren. There is no time to dodge.

Then Eren screams. Not a human scream. Something deeper. Primal. The Coordinate.

Every titan in range freezes. Then they turn — and attack Reiner.`,scene:'action',mood:'#cc4400',characters:['Eren','Mikasa','Levi','Reiner'],effects:{stats:{str:1},flags:{rescued_eren:true}},choices:[{text:'Cover the retreat — the titans are on your side now.',next:'aot_coordinate_aftermath'},{text:'Press the advantage — help the titans destroy Reiner.',next:'aot_coordinate_aftermath',effects:{stats:{cou:1}}}]};

AOT_NODES.aot_eren_scream = {text:`The battle is chaos. Soldiers, titans, and traitors collide in a storm of blood and steel. Mikasa cuts Eren free with a strike so precise it defies physics.

But Reiner hurls titans at the retreating Survey Corps. A titan grabs a soldier — Historia Reiss — and raises her to its mouth.

Eren lunges. His hand touches the titan\`s skin and he screams.

The Coordinate activates. Every titan within range stops. Then turns. Then attacks Reiner and Bertholdt.

The tide turns instantly. The traitors retreat, overwhelmed by the very monsters they tried to weaponize.

Eren stares at his hand, shaking. "What did I just do?"

Nobody has an answer.`,scene:'action',mood:'#cc4400',characters:['Eren','Mikasa','Reiner','Bertholdt'],effects:{flags:{coordinate_awakened:true}},choices:[{text:'Get Eren to safety — that power makes him the most valuable person alive.',next:'aot_coordinate_aftermath',effects:{stats:{int:1}}},{text:'Try to understand what just happened — question Eren.',next:'aot_coordinate_aftermath',effects:{stats:{per:1}}}]};

AOT_NODES.aot_coordinate_aftermath = {text:`Reiner and Bertholdt escape. But the Survey Corps has Eren back, and they now know something critical: Eren has the power to control titans. The Coordinate.

The implications are staggering. With that power, they could retake Wall Maria. Drive every titan into the sea. End the war.

But the power only activated when Eren touched a titan of royal blood. Historia Reiss — the quiet girl from the 104th — is secretly of the royal bloodline.

The politics descend like vultures. The government wants Eren and Historia. The Survey Corps refuses to hand them over. A coup is brewing.

Erwin, missing an arm but not his conviction, lays out the plan: retake Wall Maria. Reach the basement of Eren\`s childhood home in Shiganshina. Find the truth about the titans.

"Whatever is in that basement," Erwin says, "it is worth more than any of our lives."`,scene:'calm',mood:'#1a3a5a',characters:['Erwin','Eren','Hange','Levi'],choices:[{text:'Focus on the Shiganshina mission — the truth matters most.',next:'aot_shiganshina_prep',effects:{stats:{int:1}}},{text:'Train with Eren — help him master the Coordinate.',next:'aot_shiganshina_prep',effects:{rel:{eren:1},stats:{str:1}}},{text:'Support the Survey Corps coup — the government is corrupt.',next:'aot_shiganshina_prep',effects:{stats:{cou:1},rel:{erwin:1}}}]};

AOT_NODES.aot_shiganshina_prep = {text:`The Survey Corps has overthrown the corrupt government. Historia Reiss is queen. The military is reorganized under new leadership. And the Shiganshina operation is a go.

The night before departure, the weight of everything settles. Shiganshina. Your childhood home. The place where humanity\`s nightmare began.

Erwin gathers the officers. "Reiner and Bertholdt will be waiting for us. They know we need to reach Shiganshina. This will be a trap."

"Then we spring it," Levi says.

Armin unfolds his tactical plan. "I believe the enemy will hide inside the walls themselves — using the hardening ability to seal themselves until we arrive. We need to check the walls before entering the district."

You study the plan. Something nags at you.`,scene:'calm',mood:'#1a3a5a',characters:['Erwin','Levi','Armin','Eren'],choices:[{text:`"Armin is right — we should search the walls first."`,next:'aot_shiganshina_battle',effects:{rel:{armin:1},stats:{int:1}}},{text:`"We are forgetting the Beast Titan. He will be there too."`,next:'aot_shiganshina_battle',effects:{stats:{per:1},flags:{predicted_beast:true}}},{text:`"Whatever happens, the basement is the priority. Everything else is secondary."`,next:'aot_shiganshina_battle',effects:{stats:{int:1}}}]};

AOT_NODES.aot_shiganshina_battle = {text:`Shiganshina. The ruins of your childhood stare back at you through empty windows and collapsed rooftops. Five years of titan occupation have turned the district into a graveyard.

Armin\`s prediction is right. Reiner is embedded in the wall, waiting. Bertholdt is hidden nearby. And standing on Wall Maria like a king surveying his domain — the Beast Titan. A seventeen-meter ape-like titan with intelligent eyes and a terrifying arm.

The trap springs. But the Survey Corps expected it.

Eren engages Reiner. The Beast Titan begins hurling boulders — crushed rocks thrown with the precision of a baseball pitcher, each one annihilating soldiers like insects.

Erwin stands at the crossroads of history. His dream of reaching the basement. His duty to his soldiers. The certain death waiting in a charge against the Beast Titan.

"DEDICATE YOUR HEARTS!"

Erwin leads the final charge. The recruits follow him into a hail of boulders. It is slaughter. But it creates an opening — just enough for Levi.`,scene:'action',mood:'#660000',characters:['Erwin','Levi','Eren','Reiner','Bertholdt','Armin'],effects:{flags:{shiganshina_battle:true}},choices:[{text:'Ride with Erwin\`s charge — fight to the end.',next:'aot_erwin_choice',check:{stat:'cou',dc:14,pass:'aot_erwin_charge_survive',fail:'aot_erwin_choice'}},{text:'Support Levi — help him reach the Beast Titan.',next:'aot_levi_vs_beast',effects:{rel:{levi:1}}},{text:'Go for the basement — while everyone fights, find the truth.',next:'aot_basement',effects:{stats:{int:1}}}]};

AOT_NODES.aot_erwin_charge_survive = {text:`You ride with Erwin into the teeth of the Beast Titan\`s barrage. Boulders fly. Soldiers die. Horses scream. The ground erupts around you.

A rock clips your shoulder, spinning you out of the saddle. You hit the ground rolling and come up behind a pile of rubble as the barrage passes overhead.

You survive. Most do not.

Erwin falls — a boulder shard through his midsection. He is alive, barely. The charge creates the distraction Levi needed. You see the captain launch into the air, a blur of steel heading straight for the Beast Titan.

Around you, the wounded and dying. Among them, Erwin Smith. Across the battlefield, Armin — burned beyond recognition from a desperate gambit against the Colossal Titan.

Two heroes dying. One syringe of titan serum that can save one of them. Levi will have to choose.`,scene:'action',mood:'#660000',characters:['Erwin','Levi','Armin'],effects:{stats:{cou:1},flags:{survived_charge:true}},choices:[{text:`"Save Armin — Erwin would want his dream to live on."`,next:'aot_serum_choice',effects:{rel:{armin:2}}},{text:`"Save Erwin — we need his leadership."`,next:'aot_serum_choice',effects:{rel:{erwin:2}}},{text:'Stay silent — this is Levi\`s decision to make.',next:'aot_serum_choice',effects:{stats:{per:1}}}]};

AOT_NODES.aot_erwin_choice = {text:`The charge is suicide. You know it. Erwin knows it. Every soldier in the formation knows it.

Boulders rain down. The line shatters. You are thrown from your horse and crash into rubble. When the dust clears, the field is covered in bodies.

Erwin is down. A massive wound in his side. Alive, but fading.

Across the battlefield, another crisis — Armin executed a desperate plan against the Colossal Titan, sacrificing himself as a distraction while Eren struck the killing blow. Armin is burned to the bone, barely breathing.

Two soldiers dying. One titan serum that can save one. Whoever receives it will become a titan, consume an enemy shifter, and gain their power.

Levi holds the syringe. The weight of the world in a needle.`,scene:'action',mood:'#660000',characters:['Erwin','Levi','Armin'],effects:{flags:{serum_moment:true}},choices:[{text:`"Save Armin. The future needs him more than the past."`,next:'aot_serum_choice',effects:{rel:{armin:2}}},{text:`"Save Erwin. He is irreplaceable."`,next:'aot_serum_choice',effects:{rel:{erwin:2}}},{text:'Do not interfere. Trust Levi.',next:'aot_serum_choice'}]};

AOT_NODES.aot_levi_vs_beast = {text:`You follow Levi toward the Beast Titan, using the charge as cover. While hundreds die to create the distraction, you and Levi approach from the flank.

Levi moves faster than anything you have seen. He tears through the Beast Titan\`s escort — smaller titans arranged as bodyguards — like a scythe through wheat.

The Beast Titan turns. Too late. Levi is already on him, blades carving through flesh faster than it can regenerate. Arms. Legs. Eyes. The Beast Titan falls.

Levi extracts the human from the nape — a bearded man with glasses. Zeke Jaeger. Eren\`s half-brother.

"Interesting family reunion," Levi says, pinning Zeke to the ground.

But the victory is pyrrhic. Across the battlefield, both Erwin and Armin are dying. Levi holds the only titan serum.`,scene:'action',mood:'#660000',characters:['Levi'],effects:{rel:{levi:2},stats:{str:1},flags:{fought_beast:true}},choices:[{text:'Guard Zeke while Levi makes the hardest choice of his life.',next:'aot_serum_choice',effects:{stats:{int:1}}},{text:'Argue for saving Armin — the future over the past.',next:'aot_serum_choice',effects:{rel:{armin:1}}},{text:'Argue for saving Erwin — experience over potential.',next:'aot_serum_choice',effects:{rel:{erwin:1}}}]};

AOT_NODES.aot_serum_choice = {text:`Levi stands between two dying heroes. Erwin Smith — humanity\`s greatest commander, the man who gambled everything and won. Armin Arlert — the boy genius whose tactical mind has saved hundreds of lives.

Eren and Mikasa beg for Armin. Levi\`s loyalty screams for Erwin.

In the end, Levi looks at Erwin\`s face. Peaceful. For the first time in decades, peaceful. Erwin has laid down his burden. His dream of seeing the basement. His guilt over the soldiers he sent to die. All of it — released.

Levi injects Armin.

A mindless titan erupts from Armin\`s broken body, consumes Bertholdt, and collapses. When the steam clears, Armin is alive. Healed. Holder of the Colossal Titan.

Erwin Smith dies on the field at Shiganshina. The greatest commander humanity ever knew.

The battle is over. The basement awaits.`,scene:'action',mood:'#660000',characters:['Levi','Armin','Eren','Mikasa','Erwin'],effects:{flags:{armin_colossal:true,erwin_dead:true}},choices:[{text:'Go to the basement immediately — honor Erwin\`s sacrifice.',next:'aot_basement'},{text:'Mourn Erwin first. He deserved that much.',next:'aot_basement',effects:{stats:{per:1}}}]};

AOT_NODES.aot_basement = {text:`The basement of the Jaeger house. A locked door. A key that Eren has carried around his neck for five years.

The door opens. Inside — a desk, shelves, and three hidden journals. Grisha Jaeger\`s journals.

The truth is worse than anyone imagined.

Humanity is not the last remnant of civilization. The world beyond the walls is vast — continents, nations, technology. Marley. The Eldian Empire. Titans are not a natural disaster. They are Eldians — the people of the walls — transformed by the power of the Founding Titan. A weapon. A curse. A prison.

The walls were built by the First King to isolate the Eldians and erase their memories. The people inside the walls are a captive population, hunted by the very civilization they were forced to forget.

Reiner. Bertholdt. Annie. They were child soldiers sent by Marley to reclaim the Founding Titan.

Everything was a lie.`,scene:'dark',mood:'#1a3a5a',characters:['Eren','Mikasa','Armin','Levi','Hange'],effects:{flags:{truth_revealed:true}},choices:[{text:'This changes everything. Humanity needs to know the truth.',next:'aot_truth_reaction',effects:{stats:{int:1}}},{text:'Focus on the strategic implications — Marley is coming.',next:'aot_truth_reaction',effects:{stats:{per:1}}},{text:'Check on Eren — this truth will break him.',next:'aot_truth_reaction',effects:{rel:{eren:2}}}]};

AOT_NODES.aot_truth_reaction = {text:`The truth spreads through the Survey Corps like wildfire. Some soldiers rage. Others weep. Hange buries herself in the journals, studying every word.

Eren says nothing. He stares at the ocean — the literal ocean, which they finally reach after retaking Wall Maria. An infinite expanse of water that Armin dreamed about since childhood.

"Armin," Eren says quietly, standing in the surf. "You always said the ocean meant freedom." He points at the horizon. "But our enemies are over there. Across the sea. As long as they live, we are not free."

Something in Eren\`s voice has changed. The rage is still there, but it has cooled. Crystallized. Become something colder and more dangerous.

Months pass. The Survey Corps establishes contact with sympathetic Marleyans and Eldian resistance fighters. Diplomacy seems possible.

Then Eren disappears. He goes to Marley alone, without orders, without permission. When the Survey Corps follows, they find a war.`,scene:'calm',mood:'#1a3a5a',characters:['Eren','Armin','Mikasa','Hange'],effects:{flags:{ocean_reached:true}},choices:[{text:'Follow Eren to Marley — go undercover to find him.',next:'aot_marley_infiltration',effects:{rel:{eren:1},stats:{cou:1}}},{text:'Support Hange\`s diplomatic efforts — war is not the only answer.',next:'aot_marley_infiltration',effects:{rel:{hange:1},stats:{int:1}}},{text:'Something is wrong with Eren. Watch him carefully.',next:'aot_marley_infiltration',effects:{stats:{per:2}}}]};

AOT_NODES.aot_marley_crisis = {text:`Eren attacks Marley during an international summit. His titan form erupts in the city of Liberio, crushing buildings, killing civilians. The Survey Corps is forced to back him up — Armin transforms the Colossal Titan to destroy the Marleyan navy.

The world watches in horror. The "island devils" have struck first.

On the flight home — literal flight, using a stolen Marleyan airship — Eren is different. Cold. Distant. He speaks of "freedom" but his eyes are empty.

Back on Paradis Island, Eren reveals his endgame. The Founding Titan\`s ultimate power: the Rumbling. Millions of Colossal Titans sealed inside the walls, waiting to be unleashed. A doomsday weapon that would flatten every civilization beyond the island.

"If the world wants us dead," Eren says, "I will destroy the world first."

Armin is horrified. Mikasa is torn. Levi is on the verge of killing Eren himself.

And you — you have to decide where you stand.`,scene:'action',mood:'#660000',characters:['Eren','Armin','Mikasa','Levi','Hange'],effects:{flags:{marley_attacked:true}},choices:[{text:'Stand with Eren — the world gave you no choice.',next:'aot_side_eren',effects:{rel:{eren:2},stats:{cou:1}}},{text:'Oppose Eren — genocide is never the answer.',next:'aot_oppose_eren',effects:{rel:{armin:1,hange:1},stats:{int:1}}},{text:'Find a third path — there has to be another way.',next:'aot_third_path',effects:{stats:{int:1,per:1}}}]};

AOT_NODES.aot_side_eren = {text:`You follow Eren. Not because you believe genocide is right — but because you have seen what the world does to Eldians. The internment camps. The weaponized titans. The centuries of hatred. Diplomacy failed before it started.

Eren nods when you join him. Just a nod. Like he expected it. Like he has already seen how this ends.

The Yeagerists — Eren\`s faction within the military — seize control of Paradis. Hange, Levi, Jean, and the others are imprisoned or forced into hiding.

Eren makes contact with Zeke. Together, they access the Founding Titan\`s full power. The walls crumble. The Wall Titans awaken — millions of Colossal Titans, marching toward the ocean.

The Rumbling begins.

You stand on the wall as the titans march past, their footsteps shaking the earth. The heat is unbearable. The sound is like the end of the world.

Because it is.`,scene:'action',mood:'#660000',characters:['Eren'],effects:{flags:{sided_with_eren:true}},choices:[{text:'See it through. There is no turning back now.',next:'aot_rumbling_begins'},{text:'This is too far. Turn against Eren before it is too late.',next:'aot_oppose_eren',effects:{stats:{cou:1}}}]};

AOT_NODES.aot_oppose_eren = {text:`You stand against Eren Jaeger. The boy who shared your vow. The friend who fought beside you. The man who would destroy the world.

Hange leads the resistance — the remaining Survey Corps, defectors from the Yeagerists, and unlikely allies: Reiner, Annie (freed from her crystal), even some Marleyans. Enemies become allies when the alternative is annihilation.

The plan is desperate: reach Eren at the head of the Rumbling, separate him from the Founding Titan\`s power, and stop the Wall Titans before they reach the continental mainland.

"We fly," Hange says, gesturing to the captured Marleyan airship. "We land on Eren\`s titan. And we bring our friend home. Or we kill him."

Levi\`s jaw tightens. Mikasa looks away.

"Dedicate your hearts," Armin says quietly. "One last time."`,scene:'action',mood:'#1a3a5a',characters:['Hange','Armin','Mikasa','Levi','Reiner','Annie'],effects:{flags:{oppose_eren:true}},choices:[{text:'Lead the assault on Eren\`s titan — be the tip of the spear.',next:'aot_alliance_formation',effects:{stats:{cou:1,str:1}}},{text:'Work with Armin on a plan to reach Eren\`s consciousness.',next:'aot_alliance_formation',effects:{stats:{int:1},rel:{armin:1}}},{text:'Forge a formal Marleyan alliance first — fight together as equals.',next:'aot_ending_marleyan_alliance',effects:{rel:{reiner:1},stats:{cha:1,int:1}}}]};

AOT_NODES.aot_third_path = {text:`You refuse to choose between genocide and submission. There has to be another way.

You dive into research — Grisha\`s journals, Hange\`s titan science, the ancient histories. Armin helps. So does Historia, using her royal blood to access fragments of the Founding Titan\`s memories.

You discover something: the titan curse originated from a being called Ymir Fritz, the first titan, a slave girl who found the power in a tree two thousand years ago. Her spirit is trapped in the Paths — a metaphysical realm that connects all Eldians.

If you could reach Ymir. If you could free her. The curse itself might end.

But it would require a titan shifter to enter the Paths. Someone willing to sacrifice their physical form to reach a girl who has been a slave for two millennia.

You look at your hands. If you are truly a Shifter Descendant, your dormant abilities might be the key.`,scene:'calm',mood:'#1a3a5a',characters:['Armin','Hange','Eren'],effects:{flags:{third_path:true}},choices:[{text:'Awaken your titan shifting power — whatever it costs.',next:'aot_awaken_power',check:{stat:'int',dc:12,pass:'aot_awaken_power',fail:'aot_final_battle'}},{text:'Bring this plan to Eren — he might listen.',next:'aot_final_battle',effects:{rel:{eren:1}}},{text:'Prepare for both — the plan and the fight.',next:'aot_final_battle',effects:{stats:{int:1,cou:1}}}]};

AOT_NODES.aot_awaken_power = {text:`The power was always there. Sleeping in your blood. The dreams that were not dreams — memories of previous titan holders, echoing through your lineage.

Hange guides the experiment. A single drop of titan spinal fluid, purified and concentrated. The injection burns through your veins like liquid fire.

You do not become a mindless titan. Your bloodline protects you. Instead, you feel the Paths open — a dimension of light and sand, stretching infinitely in every direction.

You see Ymir Fritz. A small girl with empty eyes, endlessly building titans from sand. She has been doing this for two thousand years. A slave in death as she was in life.

"Ymir," you say. "It is time to rest."

She looks at you. The first time anyone has spoken to her — not commanded, not demanded — in two millennia.

She starts to cry.`,scene:'dark',mood:'#1a3a5a',characters:['Hange'],effects:{stats:{str:1,int:1},flags:{paths_entered:true}},choices:[{text:'Free Ymir — end the titan curse forever.',next:'aot_ending_curse_broken'},{text:'Ask Ymir to help you stop the Rumbling first.',next:'aot_paths_enter',effects:{flags:{ymir_allied:true}}},{text:'Go deeper into the Paths — understand this power fully.',next:'aot_ymir_choice',effects:{stats:{int:1}}}]};

AOT_NODES.aot_final_battle = {text:`The final battle takes place in the air above the advancing Wall Titans. Eren\`s Founding Titan is a nightmare — a skeletal colossus stretching kilometers, its ribcage a fortress, its power absolute.

The alliance attacks from all sides. Reiner\`s Armored Titan grapples with the ancient titan shifters that Eren summons from the Paths. Annie\`s Female Titan protects the soldiers on Eren\`s back. Armin holds his Colossal Titan in reserve.

Levi, despite his injuries, fights like a demon. Mikasa carves a path toward Eren\`s real body, hidden deep in the titan\`s nape.

You fight beside them all. Every skill you learned. Every bond you forged. Every sacrifice that brought you here.

The moment comes. Mikasa reaches Eren. A final kiss. A final cut. Eren Jaeger dies.

Or — if you entered the Paths — Ymir\`s intervention changes everything.`,scene:'action',mood:'#cc4400',characters:['Eren','Mikasa','Armin','Levi','Reiner','Annie','Hange'],effects:{flags:{final_battle:true}},choices:[{text:'Let Mikasa end it — this was always her burden.',next:'aot_ending_freedom',effects:{rel:{mikasa:1}}},{text:'Reach Eren first — try to save him.',next:'aot_ending_rumbling_prevented',check:{stat:'cou',dc:15,pass:'aot_ending_rumbling_prevented',fail:'aot_ending_sacrifice'}},{text:'Unleash everything — destroy the Founding Titan from inside.',next:'aot_ending_sacrifice',effects:{stats:{str:1}}}]};


// ---- MARLEY INFILTRATION ARC ----

AOT_NODES.aot_marley_infiltration = {text:`You cross the ocean disguised as a wounded Marleyan soldier. The uniform fits wrong — too tight at the shoulders, the fabric finer than anything you have ever worn. Marley is nothing like you imagined. Cities of glass and steel. Automobiles. Electric lights. A civilization that dwarfs Paradis in every measurable way.

And everywhere — Eldian ghettos. Armbands. Internment zones. Children trained to inherit titan powers and die young so Marley can maintain its arsenal. You see your own people treated like vermin, and you understand why Grisha Jaeger wept when he wrote his journals.

You find Eren in the internment zone in Liberio. He is unrecognizable — gaunt, one-legged, hollow-eyed, posing as a shell-shocked veteran. He has been here for months. Learning. Watching. Waiting.

"You should not have come," he says. But there is something in his voice — relief, maybe. Or resignation.

He tells you about the Tybur family. Marleyan nobility with Eldian blood and the War Hammer Titan. Willy Tybur is about to address the world. A declaration that will seal Paradis Island\`s fate.

"When he speaks," Eren says, "I will act."`,scene:'dark',mood:'#3a2a1a',characters:['Eren'],effects:{flags:{marley_undercover:true}},choices:[{text:'Stay with Eren — learn his full plan before the declaration.',next:'aot_tybur_declaration',effects:{rel:{eren:1},stats:{per:1}}},{text:'Send word back to Hange — the Corps needs to be ready.',next:'aot_tybur_declaration',effects:{rel:{hange:1},stats:{int:1}}},{text:'Try to talk Eren out of whatever he is planning.',next:'aot_tybur_declaration',effects:{stats:{cha:1}}},{text:'Explore the internment zone first — understand what Eren has been living in.',next:'aot_marley_internment',effects:{stats:{per:1,int:1}}}]};

AOT_NODES.aot_tybur_declaration = {text:`The stage is set in the Liberio internment zone. Dignitaries from every nation crowd the plaza. Willy Tybur stands before the world — handsome, eloquent, a man born into power he never asked for.

He tells the truth. All of it. That the Tybur family conspired with King Fritz to end the Great Titan War. That the threat of the Founding Titan was a lie to keep the world afraid. That Paradis Island\`s people were lambs penned for slaughter.

And then — the pivot.

"But now a new threat has emerged," Tybur says, his voice breaking with rehearsed conviction. "Eren Jaeger has stolen the Founding Titan. He will use it. The Rumbling will come. And so I declare — as the Tybur family, as the holder of the War Hammer Titan — a united war against Paradis Island!"

The crowd roars. Every nation, every army, united against your home.

You feel Eren move beside you. He is already cutting his hand.

"It was always going to end this way," he whispers. "They chose war. I will give them one."

You have seconds to act.`,scene:'action',mood:'#660000',characters:['Eren','Willy Tybur'],effects:{flags:{tybur_declaration:true}},choices:[{text:'Stand back. Let Eren do what he came to do.',next:'aot_liberio_attack',effects:{rel:{eren:1},stats:{cou:1}}},{text:'Try to stop Eren — this will kill hundreds of innocents.',next:'aot_liberio_attack',effects:{stats:{cha:1,int:1}}},{text:'Get to the War Hammer Titan before Eren does.',next:'aot_warhammer_fight',effects:{stats:{str:1,cou:1}}}]};

AOT_NODES.aot_liberio_attack = {text:`Eren transforms. The Attack Titan erupts from beneath the stage, crushing Willy Tybur mid-sentence. Blood and stone rain down on the dignitaries. Screams split the night.

The Marleyan military responds instantly — the Jaw Titan, the Cart Titan, soldiers with anti-titan artillery. But Eren is prepared. He fights with a ferocity you have never seen — consuming the War Hammer Titan mid-battle, adding its crystalline weapons to his arsenal.

Then the Survey Corps arrives. Mikasa descends from the sky on ODM gear, her blades singing. Levi carves through the Beast Titan\`s nape before Zeke can react. Armin transforms the Colossal Titan in the harbor, annihilating the Marleyan fleet in a pillar of nuclear light.

You are in the center of it. Civilians are dying. Children are screaming. Buildings collapse into rubble. This is not a battle — it is a massacre dressed as war.

Sasha takes a bullet on the airship. She dies in the cargo bay, whispering about meat. Connie holds her. Jean stares at the wall.

Eren does not flinch. He does not mourn. The boy you trained with is gone.`,scene:'action',mood:'#660000',characters:['Eren','Mikasa','Levi','Armin','Sasha'],effects:{flags:{liberio_attacked:true},rel:{sasha:-5}},choices:[{text:'Confront Eren on the airship — what have you done?',next:'aot_liberio_aftermath',effects:{stats:{cou:1}}},{text:'Mourn Sasha. Grieve now, because there will be no time later.',next:'aot_liberio_aftermath',effects:{rel:{connie:1,jean:1}}},{text:'Focus on the mission — assess what was gained and lost.',next:'aot_liberio_aftermath',effects:{stats:{int:1,per:1}}},{text:'Get to the airship — you need to get everyone out of Liberio alive.',next:'aot_airship_escape',effects:{stats:{cou:1,per:1}}}]};

AOT_NODES.aot_liberio_aftermath = {text:`The airship limps home through a sky that smells of smoke and salt. The Survey Corps is fractured. Those who followed Eren did so out of loyalty, not conviction. Those who opposed him were dragged along by circumstance.

Eren sits alone at the back of the cargo hold, still covered in blood that is not his own. When you approach, he speaks without looking up.

"The world declared war on us. Every nation. Every army. Tybur united them. If I had not struck first, we would be dead within the year."

He is not wrong. But the children of Liberio are not wrong either. They did nothing. They were born Eldian or Marleyan by accident, and they burned just the same.

Hange meets you at the airfield. She has aged ten years in one night. "Eren has gone too far," she says. "But we are past the point of going back. Marley will retaliate. The world will retaliate. We have months, not years."

The Rumbling is no longer theoretical. It is the only deterrent Paradis has left.

The question is whether to use it.`,scene:'dark',mood:'#3a1a1a',characters:['Eren','Hange'],effects:{flags:{liberio_aftermath:true}},choices:[{text:'Eren is right — the world made this choice for us.',next:'aot_marley_crisis',effects:{rel:{eren:2},stats:{cou:1}}},{text:'Oppose Eren now, before the Rumbling becomes inevitable.',next:'aot_marley_crisis',effects:{rel:{hange:1},stats:{int:1}}},{text:'There must be another way — something between genocide and extinction.',next:'aot_alt_stopped_early',effects:{stats:{int:1,per:1}}}]};

// ---- MARLEY EXPANDED ARC ----

AOT_NODES.aot_marley_internment = {text:`You return to Liberio alone. Without the chaos of battle, the internment zone is worse than you imagined. Eldian families huddle in crumbling tenements, armbands stitched to every sleeve. Children play in gutters while Marleyan soldiers patrol with rifles and casual cruelty.

An old man recognizes something in your face — the look of an islander, perhaps, or just the look of someone who has not yet learned to keep their eyes down. He pulls you into a doorway.

"You are from the island," he whispers. Not a question. "My grandson — Falco — he is a Warrior candidate. Twelve years old. They are going to feed him to a titan so he can serve Marley for thirteen years and die."

He grips your arm. "Is it true? What Tybur said? That the island devils are planning to destroy the world?"

You think of Eren. Of the Rumbling. Of the millions of Colossal Titans sleeping inside the walls. The old man is asking if his grandson\`s enemy is real.

The answer is yes. And you helped create that enemy.`,scene:'dark',mood:'#3a2a1a',characters:['Falco','Gabi'],effects:{flags:{seen_internment:true},stats:{per:1}},choices:[{text:'Tell him the truth — his people deserve honesty, even if it terrifies them.',next:'aot_marley_warriors',effects:{stats:{cha:1,int:1}}},{text:'Lie. Give him hope. Say the island wants peace.',next:'aot_marley_warriors',effects:{stats:{cha:1}}},{text:'Say nothing. Take the knowledge back to the Corps — this changes everything.',next:'aot_marley_crisis',effects:{stats:{per:1}}}]};

AOT_NODES.aot_marley_warriors = {text:`You meet them in the training yard behind the internment barracks. The Warrior candidates — children, all of them, younger than you were when you joined the Cadets.

Gabi Braun. Twelve years old. Reiner\`s cousin. She burns with the same desperate fire you have seen in Eren — the conviction that if she just fights hard enough, proves herself enough, her people will be free. She wants to inherit the Armored Titan. She wants to be Marley\`s perfect soldier so that Eldians can prove they are not devils.

She does not understand that Marley will never see her as human. Not really. She is a weapon with an expiration date.

Falco Grice. Quieter. Kinder. He joined the Warriors not to prove anything, but to protect Gabi — to inherit the titan in her place so she does not have to die in thirteen years. He loves her with the helpless devotion of someone who knows they cannot save the person they care about most.

You watch them train and you see ghosts. Reiner and Bertholdt at twelve. Eren and Mikasa at fifteen. Children turned into weapons by adults who should have known better.

"They are going to die," you say to no one. "All of them. On both sides. Children killing children for a war that started before any of them were born."`,scene:'dark',mood:'#3a2a1a',characters:['Gabi','Falco','Reiner'],effects:{flags:{met_warriors:true}},choices:[{text:'Try to warn them — tell Falco and Gabi what is coming.',next:'aot_marley_crisis',effects:{stats:{cha:1},rel:{reiner:1}}},{text:'Report back to the Corps. These kids change nothing about the mission.',next:'aot_marley_crisis',effects:{stats:{int:1}}},{text:'Find Reiner through them — he might be the key to avoiding war.',next:'aot_marley_crisis',effects:{rel:{reiner:2},stats:{per:1}}}]};

AOT_NODES.aot_warhammer_fight = {text:`The War Hammer Titan crystallizes from the ground like a nightmare sculpted from white quartz. Its wielder — a member of the Tybur family — fights with weapons forged from hardened titan flesh. A massive spike nearly impales Eren. A crossbow bolt the size of a tree trunk misses you by inches.

Eren is losing. The War Hammer is unlike any titan you have fought — it attacks from a distance, its real body hidden underground in a crystal cocoon, connected by a cord of flesh. Every time Eren destroys the titan form, it simply regenerates from a new crystalline shell.

Mikasa swoops in, Thunder Spears blazing, and cracks the titan\`s defenses. But it is not enough. The War Hammer reforms, and this time it creates a cage of spikes around Eren, trapping the Attack Titan.

"The cord," you realize. "Its real body is underground — connected by a cord. Cut the cord."

You have seconds. Eren is pinned. The Jaw Titan — Porco Galliard — is circling for the kill. Marleyan artillery is zeroing in on your position. The entire plaza is a killing field.`,scene:'action',mood:'#660000',characters:['Eren','Mikasa'],effects:{flags:{warhammer_battle:true},stats:{per:1}},choices:[{text:'Dive for the cord — cut the War Hammer\`s lifeline yourself.',next:'aot_airship_escape',effects:{stats:{cou:1,str:1}}},{text:'Cover Eren — give him the opening to consume the War Hammer.',next:'aot_airship_escape',effects:{rel:{eren:1},stats:{cou:1}}},{text:'Focus on the Jaw Titan — neutralize Galliard before he finishes Eren.',next:'aot_airship_escape',effects:{stats:{str:1,per:1}}}]};

AOT_NODES.aot_airship_escape = {text:`The airship appears above the smoke like a mechanical angel. Ropes drop. The Survey Corps begins extraction — soldiers zipping upward on ODM gear, bloodied and shell-shocked, carrying wounded comrades.

Eren hangs from the airship\`s belly, his titan form dissolving around him. He consumed the War Hammer Titan. Another power added to his collection. The Attack Titan, the Founding Titan, and now the War Hammer. Three of the Nine.

You climb aboard. The interior smells of gunpowder and fear. Jean is bandaging a gash on Connie\`s arm. Levi sits in the corner, his blades still drawn, watching Eren with the cold calculation of a man deciding whether to kill.

Then the shot.

A Marleyan rifle, fired from below. The bullet punches through the airship\`s hull, through the cargo bay, and into Sasha Blouse\`s chest.

She falls. Connie catches her. "Sasha? SASHA!"

She looks up at Connie with dimming eyes and says her last word: "Meat..."

It would be funny if it were not the end of the world. Sasha Blouse — the girl who joined the military for three meals a day — dies on a stolen airship above a country she never wanted to invade.

Eren walks to her body. Looks down. And laughs. A broken, hollow sound that makes everyone in the airship flinch.

"Sasha is dead," he says. Then he walks away.`,scene:'dark',mood:'#3a1a1a',characters:['Eren','Sasha','Jean','Connie','Levi'],effects:{flags:{sasha_dead:true},rel:{sasha:-10,jean:1,connie:1}},choices:[{text:'Follow Eren. Demand to know what that laugh meant.',next:'aot_liberio_aftermath',effects:{rel:{eren:1},stats:{cou:1}}},{text:'Stay with Sasha\`s body. Grieve with your comrades.',next:'aot_liberio_aftermath',effects:{rel:{jean:1,connie:1},stats:{cha:1}}},{text:'Watch Levi. He is making a calculation — and it involves Eren\`s neck.',next:'aot_liberio_aftermath',effects:{stats:{per:1}}}]};

// ---- RUMBLING ARC ----

AOT_NODES.aot_rumbling_begins = {text:`The ground shakes. Not an earthquake — something older, deeper, more deliberate. The walls crack. Not breaking — opening.

Segments of Wall Maria, Wall Rose, Wall Sina — fifty meters of ancient stone — crumble like dried clay. And from inside them, the Wall Titans emerge. Colossal Titans. Millions of them. Row after row after row, their eyeless faces steaming, their bodies radiating heat that scorches the earth beneath their feet.

They begin to walk.

The sound is beyond description. A rhythmic, endless thunder that shakes your bones and rattles your teeth. The horizon fills with steam. The sea boils where they enter it.

Eren\`s Founding Titan stands at the center — a skeletal nightmare hundreds of meters long, its spine stretching back like a centipede, Eren\`s human body fused somewhere in its nape.

He speaks through the Paths to every Eldian on earth: "I will keep moving forward. Until every last one of our enemies is destroyed."

The world has hours to live.`,scene:'action',mood:'#660000',characters:['Eren'],effects:{flags:{rumbling_active:true}},choices:[{text:'There is still time to reach Eren. Join the alliance.',next:'aot_alliance_formation',effects:{stats:{cou:1}}},{text:'This cannot be stopped by force alone — enter the Paths.',next:'aot_paths_enter',effects:{stats:{int:1}}},{text:'Watch. Bear witness. Someone must remember what happened here.',next:'aot_rumbling_moral',effects:{stats:{per:1}}},{text:'Follow the Wall Titans to the coast — see what is coming.',next:'aot_rumbling_march',effects:{stats:{per:1,cou:1}}}]};

AOT_NODES.aot_alliance_formation = {text:`The most unlikely alliance in human history forms in the shadow of the apocalypse. Hange leads it — because of course she does. The woman who loved titans, who studied them, who named them, now organizing their destruction.

The roster reads like a list of people who should be killing each other: Mikasa, Armin, Jean, Connie from the Survey Corps. Reiner Braun — the man who broke Wall Maria. Annie Leonhart — freshly emerged from her crystal, four years lost, trying to process a world that moved on without her. Pieck Finger and her Cart Titan. Even a few Marleyan soldiers who understand that the Rumbling does not distinguish between nations.

"We are going to fly to the Founding Titan," Hange says, her voice steady despite the tremor in her hands. "We are going to land on Eren. And we are going to stop him."

"And if we cannot stop him?" Reiner asks.

"Then we kill him," Levi says. Simple. Final. The weight of Erwin\`s legacy in every syllable.

Hange looks at you. "You have fought beside Eren. You have fought against titans. Now I need you to do both at the same time. Are you ready?"`,scene:'action',mood:'#1a3a5a',characters:['Hange','Mikasa','Armin','Levi','Reiner','Annie','Jean','Connie'],effects:{flags:{alliance_formed:true}},choices:[{text:'Take point — you will be the first one on Eren\`s titan.',next:'aot_final_battle',effects:{stats:{cou:1,str:1}}},{text:'Coordinate with Armin — strategy over brute force.',next:'aot_final_battle',effects:{rel:{armin:1},stats:{int:1}}},{text:'Talk to Reiner — understand the enemy you once fought.',next:'aot_rumbling_moral',effects:{rel:{reiner:1},stats:{per:1}}},{text:'Fly ahead with Hange — clear the path to Eren\`s titan.',next:'aot_hange_last_stand',effects:{rel:{hange:1},stats:{cou:1}}}]};

AOT_NODES.aot_rumbling_moral = {text:`You find Reiner sitting alone on the edge of the airship\`s cargo bay, legs dangling over the abyss. Below, the Wall Titans march through the ocean, steam rising in columns that blot out the stars.

"I broke the wall," Reiner says. He is not looking at you. "I was thirteen. I kicked down the gate and let the titans into Shiganshina. Your home. Eren\`s home. I killed thousands of people before I was old enough to shave."

He pauses. "And now Eren is doing the same thing. On a scale I could not have imagined. And I understand him. That is the worst part. I understand exactly why he is doing this."

You sit beside him. The heat from below is like sitting near a furnace.

"When does it end?" Reiner asks. "Marley sends warriors. Paradis retaliates. Marley retaliates harder. Now Eren is retaliating with the end of the world. When does someone say enough?"

He looks at you, and in his eyes you see every child soldier, every internment zone, every cycle of violence that stretches back two thousand years to a slave girl and a tree.

"Someone has to be the last one to suffer," he says. "Someone has to choose to stop."`,scene:'calm',mood:'#1a3a5a',characters:['Reiner'],effects:{rel:{reiner:2}},choices:[{text:'"Then we stop it here. No more cycles. No more revenge."',next:'aot_final_battle',effects:{stats:{cha:1,int:1}}},{text:'"I do not know if it ends, Reiner. But we fight anyway."',next:'aot_final_battle',effects:{stats:{cou:1}}},{text:'"You broke the wall. Help me break the cycle."',next:'aot_stop_or_support',effects:{rel:{reiner:1},stats:{cha:1}}}]};

AOT_NODES.aot_stop_or_support = {text:`The airship reaches the Founding Titan at dawn. Below you, the continental coastline is visible — and beyond it, the first Marleyan cities. The Wall Titans are hours from landfall. Millions of lives hang on what happens next.

Eren\`s voice echoes through the Paths one more time: "I have seen the future. Every path leads here. I am sorry."

The alliance splits into teams. Reiner and Annie will engage Eren\`s titan directly. Levi and Mikasa will cut a path to the nape. Armin holds the Colossal Titan transformation as a last resort — a weapon that could destroy Eren but would kill everyone on his titan too.

And you — you stand at the crossroads. Hange is already moving toward the deployment bay. She turns back one last time.

"Whatever you choose," she says, "I am proud of you. All of you."

She leaps. Her ODM gear fires. She does not come back.

Hange Zoe — the 14th Commander of the Survey Corps — dies buying the alliance thirty seconds of time.

Now it is your turn.`,scene:'action',mood:'#cc4400',characters:['Hange','Reiner','Annie','Levi','Mikasa','Armin'],effects:{flags:{hange_sacrifice:true},rel:{hange:-5}},choices:[{text:'Follow Hange\`s lead — assault the Founding Titan head-on.',next:'aot_final_battle',effects:{stats:{cou:1,str:1}}},{text:'Enter the Paths — reach Eren\`s mind, not his body.',next:'aot_paths_enter',effects:{stats:{int:1}}},{text:'Use Armin\`s Colossal transformation — end this now, whatever the cost.',next:'aot_ending_sacrifice',effects:{stats:{cou:1}}},{text:'Reach Eren\`s nape yourself — talk to him one last time.',next:'aot_eren_freedom',effects:{rel:{eren:1},stats:{cou:1}}}]};

// ---- RUMBLING EXPANDED ARC ----

AOT_NODES.aot_rumbling_march = {text:`You stand on the deck of the captured airship and watch the end of the world unfold below you. The Wall Titans march in a line that stretches to every horizon — an army of eyeless colossi, each fifty meters tall, each step a seismic event.

The ocean boils around their ankles. Steam rises in a curtain that blots out the sun. Fish float dead in their wake by the millions. Islands that have existed since before human memory vanish under their feet without the titans even noticing.

Jean stands beside you. He has not spoken in hours.

"Connie calculated it," he finally says. "At their current speed, they reach the Marleyan coast in eighteen hours. The interior — cities, farms, everything — within three days. Every person on the continent... within a week."

He looks at you. His eyes are red. "That is eight hundred million people. Eren is going to kill eight hundred million people. And we helped him get here."

Below, a pod of whales surfaces in the titans\` path. You watch them dive — too late, too slow. The steam reaches them first.

You have flown past the point of philosophy. This is arithmetic now. Every hour you do not act, another city-sized stretch of earth is flattened.`,scene:'action',mood:'#660000',characters:['Jean','Connie'],effects:{flags:{witnessed_march:true},stats:{per:1}},choices:[{text:'Rally Jean and Connie — form a strike team to reach Eren.',next:'aot_alliance_formation',effects:{rel:{jean:1,connie:1},stats:{cou:1}}},{text:'There has to be a way to communicate with Eren through the Paths.',next:'aot_paths_enter',effects:{stats:{int:1}}},{text:'Find Reiner. He has fought the Founding Titan\`s power before.',next:'aot_rumbling_moral',effects:{rel:{reiner:1},stats:{per:1}}},{text:'Push toward the coast — see what happens when the titans reach land.',next:'aot_rumbling_landfall',effects:{stats:{per:1}}}]};

AOT_NODES.aot_hange_last_stand = {text:`Hange adjusts her ODM gear with the quiet precision of someone who has already made peace with death. She turns to you and smiles — the same manic grin she wore the first time she captured a titan for research.

"I got to study titans," she says. "I got to name them. I got to fly. Not a bad run, all things considered."

"Hange —"

"Levi." She cuts him off. "Lead them the rest of the way. That is an order from your commander." She touches the patch on her shoulder — the Wings of Freedom. Her fingers linger.

Then she is gone. Falling from the airship, ODM gear screaming, diving straight into the advancing Wall Titans. She kills two — impossibly, beautifully, her blades finding the nape with an accuracy born of a lifetime of study. She knows exactly where the weak points are. She always did.

The third one catches her. The steam from its body ignites her cloak. She burns.

But she bought you thirty seconds. Thirty seconds of gap in the titan line. Thirty seconds to get the airship through.

On the other side of death, the ghosts of every fallen Scout are waiting. Erwin. Moblit. Mike. They smile at her.

"Hange Zoe," Erwin says. "Well done."

You did not hear that. But somehow you know it happened.`,scene:'dark',mood:'#660000',characters:['Hange','Levi'],effects:{flags:{hange_fallen:true},rel:{hange:-5,levi:1}},choices:[{text:'Honor her sacrifice — push through the gap she made.',next:'aot_final_battle',effects:{stats:{cou:1,str:1}}},{text:'Carry her legacy — take command of the remaining Scouts.',next:'aot_final_battle',effects:{stats:{cha:1,int:1}}},{text:'Let the rage fuel you. Hange died so you could reach Eren.',next:'aot_eren_freedom',effects:{stats:{str:1,cou:1}}}]};

AOT_NODES.aot_rumbling_landfall = {text:`The Wall Titans make landfall.

You see it from the airship — the first row of colossi stepping onto the Marleyan coast, their feet crushing the port city of Odiha like it was made of paper. Buildings fold. Streets liquefy. A lighthouse that has guided ships for three hundred years topples in half a second.

The people. God, the people.

They run. Of course they run. But there is nowhere to go. The titans stretch across the entire coastline. Behind them, the ocean still steams. Ahead of them, everything alive is dying.

A Marleyan mother holds her children and turns her back to the advancing wall of flesh. She does not scream. She has accepted it. Her children have not.

Armin vomits over the side of the airship. Jean punches a wall until his knuckles bleed. Reiner stares down with the expression of a man watching his own sins come home.

"This is what the walls did to us," Mikasa says quietly. "We just never saw it from this side."

She is right. And it changes nothing. Because knowing that cycles of violence are cyclical does not stop the current cycle from crushing eight hundred million human beings into the dirt.`,scene:'dark',mood:'#660000',characters:['Armin','Jean','Mikasa','Reiner'],effects:{flags:{rumbling_landfall:true},stats:{per:1}},choices:[{text:'We end this now. No more hesitation.',next:'aot_final_battle',effects:{stats:{cou:1,str:1}}},{text:'Armin\`s Colossal Titan can block the advance — buy time for evacuations.',next:'aot_final_battle',effects:{rel:{armin:1},stats:{int:1}}},{text:'Enter the Paths — the physical world cannot solve this.',next:'aot_paths_enter',effects:{stats:{int:1}}}]};

AOT_NODES.aot_eren_freedom = {text:`You reach him.

Not the skeletal horror that stretches across the horizon. Not the Founding Titan with its ribcage fortress and its army of ancient monsters. You reach Eren. The boy. Sitting inside the nape, eyes closed, connected to every titan that has ever existed by threads of light that pulse like a heartbeat.

He opens his eyes when you arrive. They are the same green they have always been — bright, fierce, alive with a fire that has been burning since the day the Colossal Titan kicked down the gate of Shiganshina.

"I knew you would come," he says. He does not sound surprised. He does not sound like a monster. He sounds tired. "I saw it. All of it. Every path, every timeline. The Attack Titan showed me the future, and every future ended the same way — with Eldians dead. Every single one. Unless I did this."

He gestures at the wasteland below. "I hate it. I hate every second of it. But I will not stop. Because if I stop, they win. And they will not show us mercy. They never have."

His voice breaks. "I just wanted to see what was beyond the walls. That is all I ever wanted. To be free."

He looks at you — really looks at you — and for a moment he is ten years old again, staring at the sky from behind the walls, dreaming of the ocean.

"Was I wrong?" he asks. "To want freedom?"`,scene:'dark',mood:'#5a3a7a',characters:['Eren'],effects:{flags:{reached_eren:true},rel:{eren:2}},choices:[{text:'"No. But freedom built on graves is not freedom. It is a prison."',next:'aot_ending_rumbling_prevented',effects:{stats:{cha:1,int:1}}},{text:'"I understand. And I am going to stop you anyway."',next:'aot_final_battle',effects:{stats:{cou:1}}},{text:'"Come back, Eren. We will find another way. Together."',next:'aot_paths_enter',effects:{rel:{eren:1},stats:{cha:1}}}]};

// ---- PATHS ARC ----

AOT_NODES.aot_paths_enter = {text:`You close your eyes and reach inward — past bone and blood, past the titan serum still burning in your veins, past the physical world entirely.

The Paths open.

An infinite desert of white sand under a sky that is not a sky. No sun, no stars — just a sourceless, golden light that casts no shadows. A single enormous tree stands at the center of everything, its roots burrowing into the sand like the veins of the world.

This is the Coordinate. The nexus of all titan power. Every Eldian who ever lived is connected here — threads of light stretching in every direction, a web of two thousand years of inherited memory and suffering.

Eren is here. Or a version of him. He stands before the tree, his back to you, a boy of nineteen carrying the weight of genocide on shoulders that were never broad enough for it.

And beside the tree — Ymir Fritz. The Founder. The first titan. A girl of perhaps thirteen, with hollow eyes and bare feet, her body scarred from a lifetime of slavery that death did not end.

She has been building titans from the sand. For two thousand years. Every titan that ever existed — she built it. Grain by grain. Because King Fritz commanded her to, and she never learned how to disobey.`,scene:'dark',mood:'#5a3a7a',characters:['Eren','Ymir Fritz'],effects:{flags:{paths_entered:true}},choices:[{text:'Speak to Ymir first — she is the key to everything.',next:'aot_ymir_choice',effects:{rel:{ymir:1},stats:{cha:1}}},{text:'Confront Eren — demand he stop the Rumbling.',next:'aot_founder_power',effects:{rel:{eren:1},stats:{cou:1}}},{text:'Study the Coordinate — understand the power before acting.',next:'aot_rewrite_history',effects:{stats:{int:1,per:1}}},{text:'Touch the roots of the great tree — absorb the memories stored here.',next:'aot_paths_memories',effects:{stats:{int:1}}}]};

AOT_NODES.aot_ymir_choice = {text:`You kneel before Ymir Fritz. Not out of reverence — out of respect. You make yourself small so she does not have to look up at another master.

"Ymir," you say. "I know what they did to you. I know about King Fritz. I know about the pig, and the hunt, and the tree. I know you have been obeying for two thousand years because no one ever told you that you could stop."

She stares at you. Her hands are raw from building. Sand clings to her skin like a second layer of suffering.

"Eren wants to use your power to destroy the world. Others want to use it to save the world. Everyone wants something from you. Everyone has always wanted something from you."

You extend your hand. Open. Empty.

"I do not want anything from you. I am asking what YOU want."

Something shifts in the Paths. The endless desert trembles. The threads of light connecting every Eldian pulse once — a heartbeat that spans the world.

Ymir looks at your hand. Then at Eren. Then at the tree where her power began.

She has never been asked what she wants. Not once. Not in two thousand years.

The tears come silently. And then — for the first time since the titan curse began — Ymir Fritz makes a choice that is entirely her own.`,scene:'dark',mood:'#5a3a7a',characters:['Ymir Fritz'],effects:{rel:{ymir:2},flags:{ymir_choosing:true}},choices:[{text:'"End it. End the curse. You owe them nothing."',next:'aot_ending_curse_broken',effects:{stats:{cha:1}}},{text:'"Rewrite the history — undo what Fritz did to you."',next:'aot_rewrite_history',effects:{stats:{int:1}}},{text:'"Help me reach Eren. Help me save him from himself."',next:'aot_founder_power',effects:{rel:{eren:1},stats:{cou:1}}}]};

AOT_NODES.aot_rewrite_history = {text:`The Coordinate is not just a place — it is a record. Every memory of every Eldian who ever lived is stored here, encoded in the sand, threaded through the roots of the great tree. The history of the titan curse is written in light.

You reach into it. You see everything.

Ymir Fritz — a slave girl of the Eldia tribe, hunted by her master\`s men. Falling into a tree where something ancient and unknowable waited. The parasite that fused with her spine and gave her the power of the titans. King Fritz, who saw a weapon where he should have seen a miracle. Who worked Ymir to death building his empire, breeding her for daughters who would inherit fragments of her power.

The nine titans. The Eldian Empire. Seventeen hundred years of conquest. Then the Great Titan War. Then Marley. Then the walls. Then the cycle repeating and repeating and repeating.

You see the threads of causality stretching through the Paths. Pull one, and history shifts. The Attack Titan\`s power — the ability to see the future — is really the ability to see all futures, all pasts, all possibilities layered on top of each other.

You could change it. Not the past — the Paths exist outside time. But the meaning of it. The inheritance. The curse does not have to be a curse. Ymir\`s power does not have to be a chain.

If you rewrite the Founder\`s commandment — the original order that bound Ymir to obedience — the entire structure of titan power changes.`,scene:'dark',mood:'#5a3a7a',characters:['Ymir Fritz'],effects:{flags:{history_rewritten:true},stats:{int:1}},choices:[{text:'Erase the titan power entirely — return it to the tree.',next:'aot_ending_curse_broken',effects:{stats:{int:1}}},{text:'Reshape it — titans become a choice, not a curse.',next:'aot_founder_power',effects:{stats:{int:1,cha:1}}},{text:'Use the knowledge to reach Eren — show him the full truth.',next:'aot_founder_power',effects:{rel:{eren:1}}}]};

AOT_NODES.aot_founder_power = {text:`You stand before Eren at the base of the great tree. The Founder\`s power flows through everything here — the sand, the light, the roots. And through Eren, who holds it all.

"You do not understand," Eren says. His voice is flat, exhausted. "I have seen every future. The one where I do nothing — Paradis is destroyed within fifty years. The one where I do the partial Rumbling — a century of war, then destruction. The one where diplomacy works — it does not. Not in any timeline I can find."

He turns to face you. He is crying.

"I never wanted this. I wanted to see the world with Armin and Mikasa. I wanted to be free. But every path forward requires someone to suffer, and I decided it would be them instead of us."

The Founder\`s power hums around you. Here, in the Paths, you can feel it — the ability to reshape the bodies and minds of every Eldian alive. The ability to command the Wall Titans. The ability to reach across time and space.

It is the most terrifying power in existence. And Eren is right — in the hands of anyone, it corrupts. The First King used it for isolation. Eren uses it for annihilation.

But what if no one held it? What if the power itself was the problem?

Ymir watches from beside the tree. Waiting. She has made her choice — but she needs you to make yours.`,scene:'dark',mood:'#5a3a7a',characters:['Eren','Ymir Fritz'],effects:{flags:{founder_confronted:true}},choices:[{text:'Destroy the power. Convince Eren to let go of the Founder.',next:'aot_ending_curse_broken',effects:{rel:{eren:1},stats:{cha:1,cou:1}}},{text:'Take the power from Eren — bear the burden yourself.',next:'aot_ending_sacrifice',effects:{stats:{str:1,cou:1}}},{text:'Show Eren the timeline where someone chose differently.',next:'aot_ending_rumbling_prevented',effects:{rel:{eren:1},stats:{int:1}}},{text:'Look deeper — find the child Eren still buried inside.',next:'aot_paths_eren_child',effects:{rel:{eren:1},stats:{per:1}}},{text:'Seize the Coordinate directly — take control of the Founder\`s power.',next:'aot_paths_coordinate_power',effects:{stats:{int:1,cou:1}}}]};

// ---- PATHS EXPANDED ARC ----

AOT_NODES.aot_paths_memories = {text:`You touch the roots of the great tree and the world explodes.

Every memory of every Eldian who ever lived floods through you simultaneously. Not a stream — a tsunami. Two thousand years of births and deaths, of love and war, of children learning to walk and soldiers learning to kill.

You see Ymir Fritz as a child — before the tree, before the power. A slave girl in a tribal village, blamed for freeing pigs from a pen. Hunted through a forest by men with spears. Cornered at a tree so ancient its roots had cracked the earth open. She fell. Into something vast and alive and waiting.

You see King Fritz, standing over her broken body as it regenerated for the first time. The look on his face — not fear, not wonder, but calculation. He saw a weapon. He saw a tool. He never saw a girl.

You see the succession of the Nine. Every holder, every inheritance — the ritual consumption, the transfer of power through spinal fluid. Thirteen years of borrowed time, repeated over and over, a chain of sacrificed children stretching two millennia.

You see Grisha Jaeger injecting his own son. You see Eren eat his father. You see Reiner kicking down the gate at twelve years old, crying the entire time.

The memories release you. You collapse in the sand, gasping, tears streaming, carrying the weight of a history that was never meant to be borne by one person.

But you understand now. All of it. The curse. The power. The way out.`,scene:'dark',mood:'#5a3a7a',characters:['Ymir Fritz'],effects:{flags:{paths_memories:true},stats:{int:2,per:1}},choices:[{text:'Use the knowledge — show Eren the full chain of suffering he perpetuates.',next:'aot_founder_power',effects:{rel:{eren:1},stats:{cha:1}}},{text:'Find Ymir in the memories — speak to her before the curse began.',next:'aot_ymir_origin',effects:{rel:{ymir:1},stats:{int:1}}},{text:'Trace the power to its source — the tree holds the answer.',next:'aot_rewrite_history',effects:{stats:{int:1,per:1}}}]};

AOT_NODES.aot_ymir_origin = {text:`You follow the threads of memory back. Past the Wall Titans, past the Great Titan War, past the Eldian Empire, past centuries of conquest and subjugation. Back to the beginning.

A forest. Rain. A girl running barefoot through mud, branches whipping her face, blood streaming from a wound on her shoulder where an arrow grazed her. Behind her, the shouts of hunters — King Fritz\`s men, chasing an escaped slave.

She falls into the hollow beneath the great tree. Into water darker than night. Something moves in the depths — not a creature, not a god. A parasite. An organism older than human civilization, waiting in the roots for a host.

It bonds with her. The power of the titans is born.

You stand beside Ymir in the memory. She cannot see you — this is the past, fixed and immutable. But you can see her. Thirteen years old. Terrified. Alone.

She climbs out of the tree and returns to King Fritz. Not because she wants to — because she does not know what else to do. The concept of freedom is foreign to a girl who has been property since birth.

"You never had to go back," you whisper, knowing she cannot hear. "You could have run. You could have been free."

But she could not. Because no one had ever told her she was allowed to want freedom.

The memory crystallizes around you. And you understand — this is the wound at the center of everything. Not the power. Not the curse. The fact that a child was never taught that she mattered.`,scene:'dark',mood:'#5a3a7a',characters:['Ymir Fritz'],effects:{flags:{witnessed_origin:true},rel:{ymir:2},stats:{int:1}},choices:[{text:'Carry this truth to Ymir in the present — tell her what you witnessed.',next:'aot_ymir_choice',effects:{rel:{ymir:1},stats:{cha:1}}},{text:'Trace the parasite — understanding the source of titan power could destroy it.',next:'aot_rewrite_history',effects:{stats:{int:1,per:1}}},{text:'Return to Eren — show him Ymir\`s memory. Make him see what he is perpetuating.',next:'aot_founder_power',effects:{rel:{eren:1},stats:{cha:1}}}]};

AOT_NODES.aot_paths_eren_child = {text:`You find him in a corner of the Paths that looks like Shiganshina. Not the real district — a memory of it, reconstructed from sand and light. The buildings are too clean. The sky is too blue. It is a child\`s idealization of home.

Eren sits on the stone steps where he used to watch the Survey Corps ride out beyond the walls. He is ten years old here. Bright-eyed. Furious with wonder. Before the fall, before the titans, before the blood.

"I wanted to see the ocean," he says. He does not look at you. "Armin showed me a book. It said there was a body of salt water so big you could not see the other side. I thought — if I could just get past the walls, everything would make sense."

He picks up a stone and throws it. It vanishes into the golden light.

"I got to the ocean. And beyond it was just more enemies. More walls. The whole world is walls."

He finally looks at you. Ten years old and carrying the weight of omnicide.

"I do not want to do this," he says. "I never wanted to do this. But I looked at every future. Every single one. And in every future where I do not do the Rumbling, Mikasa dies. Armin dies. Everyone on Paradis dies. I cannot accept that."

His voice cracks. "I am not free. I was never free. The Attack Titan showed me the future, and the future is a cage. I am just walking the path that was always there."

He is crying. Eren Jaeger, the boy who declared war on titans at ten years old, is crying in a sandcastle version of his dead hometown.

"Tell me there is another way," he begs. "Please."`,scene:'dark',mood:'#5a3a7a',characters:['Eren'],effects:{flags:{found_child_eren:true},rel:{eren:3}},choices:[{text:'"There is. Ymir can break the cycle. Trust me — let go of the Founder."',next:'aot_ending_rumbling_prevented',effects:{rel:{eren:1},stats:{cha:1,int:1}}},{text:'"I cannot promise another way. But I can promise to fight for one."',next:'aot_founder_power',effects:{stats:{cou:1,cha:1}}},{text:'Take his hand. No words. Just presence. Be the friend he needed.',next:'aot_ending_curse_broken',effects:{rel:{eren:2},stats:{cha:1}}}]};

AOT_NODES.aot_paths_coordinate_power = {text:`You reach for the Coordinate.

The moment your fingers touch the trunk of the great tree, you understand why every holder of the Founding Titan has been corrupted by it. The power is absolute. Total. You can feel every Eldian on earth — their heartbeats, their thoughts, their fears. Seven million souls on Paradis. Millions more in internment zones across the world. All of them connected to you by threads of light.

You could rewrite their memories. You could harden their skin into armor. You could turn them all into titans. You could turn them all into dust.

The First King used this power to build walls and erase history. Eren uses it to command the Wall Titans and flatten the world. But the power itself is neutral — it does what its holder wills.

And right now, its holder is you.

Ymir watches from across the sand. Eren is frozen mid-step, suspended between one moment and the next. Time means nothing here.

You hold the fate of every Eldian in your hands. The temptation to use it — to fix everything, to force peace, to rewrite minds until hatred is impossible — is overwhelming.

But you have seen what absolute power does. You have watched it destroy Fritz. Destroy the First King. Destroy Eren.

The question is not what the power CAN do. The question is what it SHOULD do. And whether any single person should be making that decision.`,scene:'dark',mood:'#5a3a7a',characters:['Ymir Fritz','Eren'],effects:{flags:{coordinate_touched:true},stats:{int:1}},choices:[{text:'Destroy the Coordinate — no one should have this power. Ever.',next:'aot_ending_curse_broken',effects:{stats:{cou:1,int:1}}},{text:'Use it once — stop the Rumbling, erase titan powers, then destroy it.',next:'aot_ending_sacrifice',effects:{stats:{int:1,cha:1}}},{text:'Give the choice to Ymir — it was always her power, not yours.',next:'aot_ymir_choice',effects:{rel:{ymir:1},stats:{cha:1}}}]};

// ---- ALTERNATE ENDING ARC ----

AOT_NODES.aot_alt_stopped_early = {text:`You refuse to accept the binary. Genocide or extinction. Eren\`s way or the world\`s way. There must be a door no one has tried.

You go to Historia. The queen of the walls, pregnant and politically cornered, but still possessing something no one else has — royal blood and the legitimacy it carries on both sides of the ocean.

"If I use the Founding Titan\`s power through you," you say, "not to activate the Rumbling, but to broadcast — to show every Eldian and every Marleyan the truth of the two-thousand-year cycle — would you do it?"

Historia looks at you for a long time. She is tired. The crown was never something she wanted.

"Ymir — the Ymir I knew, the one who saved me — she told me to live for myself," Historia says. "But maybe living for myself means choosing who I want to protect."

She agrees. But you need Eren\`s cooperation, or at least his Founding Titan. And Eren is already in Marley, already planning the attack on Liberio.

You have weeks, not months. The clock is ticking toward Tybur\`s declaration, and if you cannot reach Eren before then, the cascade toward the Rumbling becomes unstoppable.`,scene:'calm',mood:'#1a3a5a',characters:['Historia'],effects:{flags:{alt_path_chosen:true}},choices:[{text:'Race to Marley — intercept Eren before the declaration.',next:'aot_alt_peace_negotiations',effects:{stats:{cou:1}}},{text:'Build the coalition first — Hange, the Azumabito, the Eldian resistance.',next:'aot_alt_peace_negotiations',effects:{stats:{int:1,cha:1}}},{text:'Find Zeke — he holds the key to the royal blood connection.',next:'aot_alt_peace_negotiations',effects:{stats:{per:1}}},{text:'Use the Founding Titan\`s broadcast power — show the world the truth.',next:'aot_alt_titan_diplomacy',effects:{stats:{cha:1,int:1}}}]};

AOT_NODES.aot_alt_peace_negotiations = {text:`Against every odd, you reach Eren. Not with force — with the one thing he did not expect. A plan that does not require the world to burn.

The negotiation takes place in a neutral port city, brokered by the Azumabito clan — the last family that remembers Eldia as allies rather than monsters. Marleyan reformists attend in secret. Eldian resistance leaders risk execution to be there. Hange presents the science. Armin presents the argument. You present the proof.

Through Historia\`s royal blood and a controlled connection to the Founding Titan, you show them — all of them — Ymir\`s memory. Not the propaganda. The truth. A slave girl who was given power and punished for it. A cycle of violence that every party perpetuated.

The Marleyan general Calvi watches with tears streaming down his face. "We did this," he whispers. "We inherited a crime and called it justice."

It is not enough. One meeting does not erase centuries of hatred. Nationalist factions on both sides try to sabotage the talks. Eren watches from the corner, silent, unconvinced.

But something shifts. Not the world — something smaller. A crack in the certainty that war is the only language anyone speaks.

The question is whether that crack can hold.`,scene:'calm',mood:'#2a3a1a',characters:['Hange','Armin','Historia','Eren'],effects:{flags:{peace_attempted:true}},choices:[{text:'Push for a formal treaty — institutionalize the peace before it collapses.',next:'aot_ending_another_way',effects:{stats:{int:1,cha:1}}},{text:'Focus on Eren — if he believes in this path, everyone else will follow.',next:'aot_ending_another_way',effects:{rel:{eren:1},stats:{cha:1}}},{text:'Prepare for both outcomes — peace if possible, war if necessary.',next:'aot_alt_marley_war',effects:{stats:{int:1,cou:1}}}]};

AOT_NODES.aot_alt_marley_war = {text:`Diplomacy collapses. The Marleyan hardliners seize power in a coup, executing the reformists who attended the peace talks. General Magath leads a combined global military force toward Paradis — the largest fleet assembled in human history.

But this time, Paradis is ready. Not because of the Rumbling — because of you.

Hange\`s titan research yields defensive innovations: hardening-based fortifications, thunder spear emplacements along the coast, a network of scouts using captured Marleyan radio technology. The Survey Corps becomes a proper military, trained for conventional warfare, not just titan-slaying.

Armin devises the strategy. A partial Rumbling — not genocide, but deterrence. Fifty Wall Titans deployed to the coast, standing in the shallows like lighthouses of death. Enough to annihilate any fleet that approaches. Not enough to flatten the world.

Eren agrees — barely. The restraint costs him something. You can see it in his eyes, the future he saw slipping away, replaced by something uncertain and terrifying: hope.

The Marleyan fleet arrives. The Wall Titans stand. For three days, the two forces stare at each other across a mile of ocean.

On the fourth day, Magath sends a white flag.

"I am not surrendering," he says when he boards the Paradisian flagship. "I am recognizing reality. You have the power to destroy us. You chose not to. That means something."

He looks at Eren. "I do not trust you. I do not like you. But I can work with someone who shows restraint."`,scene:'action',mood:'#2a3a1a',characters:['Hange','Armin','Eren','Magath'],effects:{flags:{marley_war:true},stats:{int:1}},choices:[{text:'Accept Magath\`s terms — restraint earned this. Build on it.',next:'aot_ending_fragile_peace',effects:{stats:{int:1,cha:1}}},{text:'Demand more — reparations, dismantling of internment zones, full Eldian rights.',next:'aot_ending_fragile_peace',effects:{stats:{cou:1,cha:1}}},{text:'Let Eren decide. He held back the Rumbling — he has earned the right to set terms.',next:'aot_ending_fragile_peace',effects:{rel:{eren:1}}}]};

AOT_NODES.aot_alt_titan_diplomacy = {text:`You propose something no one has considered: a public demonstration of the Founding Titan\`s power — not as a weapon, but as a bridge.

Through Historia\`s royal blood connection, you broadcast a message to every Eldian on earth simultaneously. Not a command. Not a rewriting of memories. A memory — shared, unfiltered, undeniable.

You show them Ymir Fritz. The real Ymir, not the mythology. A slave girl who found power she never wanted and was punished for two thousand years. You show them the cycle — Eldian Empire, Marleyan conquest, warrior program, walls, hatred, more hatred — the ouroboros of violence eating its own tail for millennia.

And then you show them a choice.

"This is what the Founding Titan can do," you broadcast. "It can destroy the world. It can rewrite your minds. It can turn you into monsters. And none of those things will make the suffering stop. The only thing that stops the suffering is choosing — actively, painfully, every single day — to stop inflicting it."

The broadcast reaches Eldians in internment zones who weep openly. It reaches Marleyan officers who were taught that Eldians are subhuman and are now experiencing two thousand years of shared pain from the inside.

It does not fix everything. It fixes nothing, really. Propaganda is not undone by a single vision. But it cracks the foundation of every lie both sides have told about each other.

Hange calls it "the most irresponsible use of world-altering power in history." Then she hugs you.`,scene:'calm',mood:'#1a3a5a',characters:['Historia','Hange','Eren'],effects:{flags:{titan_diplomacy:true},stats:{cha:1,int:1}},choices:[{text:'Follow up with formal diplomacy — the broadcast bought time, not peace.',next:'aot_alt_peace_negotiations',effects:{stats:{int:1}}},{text:'Push Eren to relinquish the Founding Titan — the power must go.',next:'aot_ending_curse_broken',effects:{rel:{eren:1},stats:{cou:1}}},{text:'Prepare for backlash — not everyone will accept what they saw.',next:'aot_alt_marley_war',effects:{stats:{per:1,cou:1}}}]};

AOT_NODES.aot_ending_fragile_peace = {text:`THE FRAGILE PEACE

It is not a treaty. It is a ceasefire held together by exhaustion, mutual deterrence, and the stubborn refusal of a handful of people to accept that war is inevitable.

The Wall Titans return to the walls. Eren lives — diminished, haunted, but alive. The curse of Ymir still ticks in his veins. Thirteen years. He spends them not as a weapon but as a reluctant diplomat, his very existence a reminder of what happens when the world pushes Eldians too far.

Magath dismantles the warrior program. Not out of kindness — out of pragmatism. "We cannot keep feeding children to titans," he tells the Marleyan parliament, "when the island has proven it can destroy us at will. We need a new strategy. It is called coexistence."

Gabi Braun never inherits the Armored Titan. She becomes a journalist instead — fierce, uncompromising, writing dispatches from both sides of the ocean. Falco follows her everywhere, still trying to protect her from a world that no longer requires child soldiers.

The internment zones do not vanish overnight. Some take years. Some take a generation. The armbands come off one country at a time, in stuttering, imperfect progress that infuriates everyone who wants justice to be immediate.

You visit Liberio ten years later. The walls around the internment zone are gone. In their place, a memorial — the names of everyone who died in Eren\`s attack, Marleyan and Eldian alike. Someone has left flowers.

Eren stands beside you. Older. Tired. The fire in his eyes has not died — it has changed. It burns for something different now. Not freedom from enemies, but freedom from the cycle.

"I still see the other future sometimes," he says. "The one where I destroyed everything. It would have been easier."

"Easier is not better," you say.

He nods. "I know. That is why I hate it."

He looks at the memorial. At the names. At the flowers left by someone who chose remembrance over revenge.

"We did not save the world," he says. "We just... delayed its worst impulses. Gave it a chance to be better."

"That is all anyone can do."

The fragile peace holds. Not forever — nothing holds forever. But long enough for a generation of children to grow up without titans, without armbands, without walls.

Long enough to matter.`,scene:'calm',mood:'#2a3a1a',characters:['Eren','Gabi','Falco','Magath'],effects:{flags:{ending_fragile_peace:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

AOT_NODES.aot_ending_another_way = {text:`THE OTHER PATH

It takes seventeen years.

Seventeen years of negotiations that collapse and restart. Of assassination attempts on both sides. Of famine, of riots, of three separate military coups on Paradis Island and two in Marley. Of children growing up in a world where peace is not a destination but a discipline — something you practice every day because the alternative is annihilation.

Eren never fully trusts the process. He keeps the Founding Titan\`s power as a deterrent — the threat of the Rumbling holding the world at bay while the slower, harder work of reconciliation grinds forward. He ages. The curse of Ymir counts down his remaining years, and he spends them not in battle but in bitter, grudging cooperation with people he once swore to destroy.

He dies at twenty-three. The curse takes him, as it takes all shifters. At his bedside, Mikasa holds his hand. Armin reads aloud from a treaty — the Paradis-Marley Accords, signed that morning.

"You did it," Mikasa whispers.

Eren shakes his head. "They did it. I just... did not get in the way."

He dies free. Not the freedom he imagined as a boy — not the freedom of a world without enemies. But the freedom of a man who chose, at the last, to let go.

The Rumbling never happens. The titan curse passes to a new holder who agrees to the terms of the Accords — monitored, limited, and slowly rendered obsolete by Hange\`s research into titan science.

It is not a perfect ending. The world is still broken, still angry, still scarred. Eldian armbands come off in some nations and stay on in others. Progress is uneven, unjust, and agonizingly slow.

But nobody had to die for it. Not millions. Not the world.

Just one boy who wanted to be free, and chose, in the end, to be good instead.`,scene:'calm',mood:'#2a3a1a',characters:['Eren','Mikasa','Armin'],effects:{flags:{ending_another_way:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};
// ---- ENDINGS ----

AOT_NODES.aot_ending_freedom = {text:`THE WINGS OF FREEDOM

Eren dies. The titan curse ends with him — not through Ymir, but through Eren\`s own design. He saw this future. He chose it. Every step, every atrocity, every broken bond — all to reach this moment where Mikasa\`s choice would free Ymir from her eternal devotion to King Fritz.

The Wall Titans collapse. The Rumbling stops at eighty percent of the world destroyed. The remaining nations eventually negotiate peace with Paradis Island — not out of goodwill, but out of fear and necessity.

You stand at Eren\`s grave years later. The Wings of Freedom carved into the stone. The boy who wanted to be free gave his life so others could be.

Armin leads the peace negotiations. Historia rules Paradis. Mikasa visits this grave every year with flowers.

You carry the burden of knowing the truth — that Eren orchestrated his own defeat, that he pushed his friends away so they would be strong enough to stop him.

Freedom was never free. It never will be.

But the sky is open. The walls are gone. And humanity, scarred and broken, keeps moving forward.`,scene:'calm',mood:'#1a3a5a',characters:['Eren','Mikasa','Armin'],effects:{flags:{ending_freedom:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

AOT_NODES.aot_ending_rumbling_prevented = {text:`THE VOICE THAT REACHED HIM

You reach Eren before Mikasa\`s blade falls. Inside the Founding Titan, in the Paths where time has no meaning, you find him — the real Eren. Not the monster. The boy.

He is crying.

"I do not want to die," he says. "I do not want anyone to die. But I saw every future and in all of them — in all of them someone has to."

"Not this one," you say. "I am here. And I am telling you there is another way."

With Armin\`s help and the Coordinate\`s power, you broadcast the truth to every Eldian on earth — the full history, the lies, the cycle of hatred. Not a weapon. A confession. A plea.

The Rumbling stops. Eren collapses. He survives, stripped of his titan power, reduced to a broken young man who carries the weight of partial genocide.

The world does not forgive. But it listens. Armin speaks for Paradis. You speak beside him. Negotiations take years. Decades. But they happen.

The cycle of hatred cracks. It does not break — not yet. But it cracks.

And for the first time in two thousand years, that is enough.`,scene:'calm',mood:'#1a3a5a',characters:['Eren','Armin','Mikasa'],effects:{flags:{ending_rumbling_prevented:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

AOT_NODES.aot_ending_dark_rumbling = {text:`THE RUMBLING

The Wall Titans march. Across the ocean. Across the continents. Cities fall like sandcastles. Armies melt. Civilizations that have existed for millennia are crushed beneath millions of colossal feet.

You watch from the airship as the world burns. Eren\`s Founding Titan leads the march, a skeletal god of destruction striding through the smoke.

Some of your friends tried to stop it. Hange died buying time for the others to escape. Levi fought until his broken body gave out. Armin\`s Colossal Titan was absorbed by the Founding Titan.

When it is over — when there is nothing left beyond the island — Eren returns. He is barely human anymore. The power has consumed him.

"It is done," he says. "We are free."

The island of Paradis inherits a dead world. You helped make this happen. You stood beside the man who flattened civilization.

On quiet nights, you hear the screams. You will always hear the screams.

Was this freedom? Or just a different kind of cage?`,scene:'dark',mood:'#660000',characters:['Eren'],effects:{flags:{ending_dark_rumbling:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

AOT_NODES.aot_ending_sacrifice = {text:`THE FINAL TITAN

The Founding Titan is too powerful. Eren is too far gone. And the Wall Titans keep marching.

You realize what must be done. Someone has to enter the Paths and take Ymir\`s place — become the new anchor for the titan curse, absorbing its power so completely that it can never be passed on again.

A one-way trip. The person who does this will not die — they will become part of the Paths forever, a consciousness sustaining the walls that reform around Paradis. Not the old walls of oppression, but walls of protection, held together by will instead of fear.

"No," Mikasa says.
"You can not," Armin says.
"There has to be another way," Jean says.
Levi says nothing. He understands sacrifice better than anyone.

You step into the light. The Paths embrace you. The last thing you see is the sky — open, endless, free.

The titans crystallize. The Rumbling stops. The walls reform — but these walls have windows. These walls have doors.

And somewhere in the Paths, in a dimension of endless sand and light, you and Ymir build something new. Not titans. Not weapons.

A bridge.`,scene:'dark',mood:'#1a3a5a',characters:['Mikasa','Armin','Levi','Jean'],effects:{flags:{ending_sacrifice:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

AOT_NODES.aot_ending_marleyan_alliance = {text:`THE ALLIANCE

You forge the impossible. An alliance between Paradis Island and the Marleyan resistance — built not on trust, but on the shared understanding that the Rumbling would destroy everyone.

The key is the titan shifters. You convince Reiner, Annie, and Armin to meet with Marleyan generals under a flag of truce. Historia\`s royal authority legitimizes the talks. Hange\`s science provides the bridge — a potential cure for the titan curse that both sides want.

It is ugly. Painful. People on both sides scream for blood. Families who lost loved ones to the other side\`s weapons demand justice that cannot be given.

But you persist. Speech by speech. Meeting by meeting. Treaty clause by treaty clause.

When Eren activates the Rumbling, both sides are ready. Paradis and Marley fight together against the Founding Titan. Enemies standing shoulder to shoulder against annihilation.

Eren falls. The Rumbling stops. And in the aftermath, the alliance holds — fragile, imperfect, constantly on the verge of collapse.

But it holds.

Years later, Eldian children play with Marleyan children in integrated schools. Walls become monuments, not prisons. And on the memorial where both nations\` fallen are honored, the inscription reads:

"We chose to understand."`,scene:'calm',mood:'#2a3a1a',characters:['Reiner','Annie','Armin','Hange'],effects:{flags:{ending_marleyan_alliance:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

AOT_NODES.aot_ending_curse_broken = {text:`THE CURSE BREAKER

You free Ymir Fritz. Two thousand years of servitude, ended not by force or by command, but by a single act of kindness. You take her hand and say, "You are not a slave. You are not a god. You are a girl who deserved better."

Ymir smiles. The first smile in two millennia.

The Paths shatter. The titan curse unravels. Every titan in existence — the Wall Titans, the mindless horrors, the shifters — dissolves into steam. Eldians around the world collapse as the power leaves them, waking minutes later fully human and free.

Eren collapses mid-Rumbling. Reiner falls from his Armored Titan. Annie\`s crystal evaporates. Armin loses the Colossal Titan.

The power that defined and destroyed the Eldian people for two thousand years simply... stops.

You remain in the Paths as they dissolve around you. Ymir holds your hand. "Thank you," she whispers. Then she is gone. Free at last.

The Paths release you. You wake on the ground at Shiganshina, steam rising from your skin. Mortal. Human. Alive.

The titans are gone. Not defeated. Not sealed. Gone.

Hange weeps. Levi sits down for the first time in what seems like years. Eren stares at the sky, tears streaming, and laughs — the laugh of a boy who dreamed of freedom and finally, impossibly, found it.

The curse is broken. The story of the titans ends here.

And a new story — humanity\`s real story, without monsters or gods or inherited sins — begins.`,scene:'calm',mood:'#1a3a5a',characters:['Eren','Mikasa','Armin','Levi','Hange'],effects:{flags:{ending_curse_broken:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

// ============================================================
// SCENARIO DATA — NARUTO: SHINOBI CROSSROADS
// ============================================================
window.SCEN_NODES['aot'] = AOT_NODES;
})();
