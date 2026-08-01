// Scenario data: soldier  (SOL_NODES)
// Split out of scenario-generator.html on 2026-08-01.
// Edit THIS file to change this scenario — the main file no longer holds node data.
window.SCEN_NODES = window.SCEN_NODES || {};
(function(){
const SOL_NODES = {
sol_start:{
text:`Your eyes open. Pain — immediate, everywhere.

A bare concrete room. A steel chair bolted to the floor. Your wrists are zip-tied behind your back. Overhead, a single bulb burns white-hot, swinging on a cord.

You do not know how long you have been here. Hours? Days? Your mouth tastes like copper and grit. There is dried blood on your shirt — some of it yours.

A metal door faces you. No windows. A camera in the corner, red light blinking.

The last thing you remember is the ambush. The convoy. Gunfire. Then darkness.

Someone is coming. You can hear boots on concrete, getting closer.`,
scene:'interrogation_room',mood:'#2d3436',characters:[],
choices:[
{text:'Sit up straight. Show them nothing.',next:'sol_composure',effects:{stats:{cou:1}}},
{text:'Slump forward. Play weak.',next:'sol_play_weak',effects:{stats:{cha:1}}},
{text:'Test the restraints.',next:'sol_test_restraints',effects:{stats:{str:1}}}
]
},

sol_composure:{
text:`You straighten your spine. Every muscle screams, but you lock your jaw and stare at the door.

When it opens, you are ready.

The man who enters is not what you expected. No uniform. No insignia. A grey civilian suit, tailored. Wire-rimmed glasses. He carries a manila folder and a paper cup of coffee. He could be an accountant.

He sits across from you, sets the coffee between you — just out of reach — and opens the folder.

"Good morning. I am Volkov." His accent is faint. Educated. "You are remarkably composed for someone in your situation. That tells me you have been trained for this." He smiles. "Good. I prefer a challenge."

He flips a page. "Shall we begin?"`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{relationships:{interrogator:1}},
choices:[
{text:'"Name, rank, serial number. That is all you get."',next:'sol_name_rank',effects:{stats:{cou:1},relationships:{interrogator:-1}}},
{text:'Say nothing. Just stare.',next:'sol_silence',effects:{stats:{cou:1}}},
{text:'"Where am I? What do you want?"',next:'sol_ask_questions',effects:{stats:{int:1},relationships:{interrogator:1}}}
]
},

sol_play_weak:{
text:`You let your head drop. Breathing shallow, deliberate — the kind of ragged gasps that sell injury. You add a groan for good measure.

The door opens. Boots stop two feet from your chair.

"I know you are awake." The voice is calm, precise. "And I know you are performing. Your breathing pattern changed three seconds before I entered."

You look up. The man standing over you wears a grey suit, no insignia. Wire-rimmed glasses. He holds a manila folder and a paper cup of coffee.

"My name is Volkov. And you are not as injured as you would like me to believe." He sits down and opens the folder. "Shall we skip the theatre?"`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{relationships:{interrogator:-1}},
choices:[
{text:'Drop the act. "Fine. What do you want?"',next:'sol_ask_questions',effects:{stats:{cha:1},relationships:{interrogator:1}}},
{text:'Keep playing hurt. Cough, wince, sell it harder.',next:'sol_sell_injury',effects:{stats:{cha:1}},check:{stat:'cha',dc:11},failNext:'sol_volkov_impatient'},
{text:'"Name, rank, serial number. That is all you get."',next:'sol_name_rank',effects:{stats:{cou:1},relationships:{interrogator:-1}}}
]
},

sol_test_restraints:{
text:`You twist your wrists. The zip ties bite into skin — tight, but plastic. Not metal. You test the chair. Bolted solid. The ties have maybe a millimeter of play.

Not enough. Not yet.

The door opens. A man in a grey suit enters — no uniform, no insignia. Wire-rimmed glasses, a manila folder, a paper cup of coffee.

"I would not bother with those," he says mildly, setting the coffee down. "The ties are rated to 150 kilos. Even if you broke free, there are two armed guards outside that door." He sits. "My name is Volkov. I think we should talk."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{flags:{tested_restraints:true}},
choices:[
{text:'"Name, rank, serial number. That is all you get."',next:'sol_name_rank',effects:{stats:{cou:1},relationships:{interrogator:-1}}},
{text:'"Talk about what, exactly?"',next:'sol_ask_questions',effects:{stats:{int:1},relationships:{interrogator:1}}},
{text:'Say nothing. Keep testing the zip ties subtly while he talks.',next:'sol_silent_work',effects:{stats:{str:1,per:1}}}
]
},

sol_sell_injury:{
text:`You double over. A convincing cough — you bite the inside of your cheek and let blood fleck your lips. The performance is masterful. Even Volkov pauses.

"Hm." He leans forward. Studies you. "Perhaps I was premature." He turns to the camera. "Medical assessment. Bring water."

A guard enters with a canteen. They cut one zip tie to let you drink. Your right hand is free — temporarily. Volkov watches you drink, making notes.

This is an opportunity. One free hand. A distracted guard. But Volkov is watching.`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{cha:2},flags:{one_hand_free:true}},
choices:[
{text:'Drink slowly. Memorize the guard layout through the open door.',next:'sol_memorize_layout',effects:{stats:{per:2},relationships:{interrogator:1}}},
{text:'Grab the guard. Use him as leverage.',next:'sol_grab_guard',effects:{stats:{str:1,cou:1}},check:{stat:'str',dc:13},failNext:'sol_grab_guard_fail'},
{text:'Be compliant. Let them re-tie you. Bank the goodwill.',next:'sol_cooperate_early',effects:{stats:{cha:1},relationships:{interrogator:2}}}
]
},

sol_volkov_impatient:{
text:`Volkov sighs. He removes his glasses, polishes them on his tie, puts them back on. The gesture is deliberate — a man performing patience he does not feel.

"Let me be direct. I have been doing this for twenty-three years. I have seen every trick. The faked injury. The defiant silence. The slow reveal." He taps the folder. "I already know who you are. I know your unit, your insertion point, your handler's call sign. What I do not know — and what you are going to tell me — is the location of the network."

He leans close. "We can do this the civilized way. Or we can do it the other way. I genuinely prefer the civilized way."`,
scene:'interrogation_room',mood:'#e17055',characters:['Volkov'],
effects:{relationships:{interrogator:-2}},
choices:[
{text:'"If you know everything, why do you need me?"',next:'sol_challenge_volkov',effects:{stats:{int:1},relationships:{interrogator:1}}},
{text:'Stone wall. Give him nothing.',next:'sol_silence',effects:{stats:{cou:1},relationships:{interrogator:-1}}},
{text:'"The other way? Go ahead. I have survived worse."',next:'sol_defiance',effects:{stats:{cou:2},relationships:{interrogator:-2}}}
]
},

sol_name_rank:{
text:`"Name, rank, serial number." Your voice is hoarse but steady. "That is all you get."

Volkov nods slowly. Almost approvingly. "Textbook. They trained you well." He sips his coffee. "But here is the problem with textbook responses — I wrote the textbook. The version your people use is based on a manual I co-authored twelve years ago."

He opens the folder. Inside: photographs. Your unit. Your team. Names, dates, coordinates.

"I do not need you to confirm your identity. I need you to help me understand something else entirely. Something your superiors did not tell you about your mission."

He slides a photograph across the table. It is a picture of your commanding officer, Colonel Harlan, shaking hands with a man you do not recognize.

"Do you know who that is?"`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{relationships:{interrogator:1}},
choices:[
{text:'Look at the photo. Try to identify the man.',next:'sol_examine_photo',effects:{stats:{per:1},relationships:{interrogator:1}}},
{text:'Refuse to look. Push the photo back.',next:'sol_refuse_photo',effects:{stats:{cou:1},relationships:{interrogator:-1}}},
{text:'"You are lying. That photo is fabricated."',next:'sol_deny_photo',effects:{stats:{int:1}}}
]
},

sol_silence:{
text:`You say nothing. You breathe. You stare at a point just past Volkov's left ear.

Minutes pass. Volkov talks. He is good — he fills the silence with questions, observations, fragments of truth mixed with guesses. He watches for micro-reactions. A twitch. A change in breathing. Anything.

You give him nothing.

After what feels like an hour, he stands. "Very well. You are strong. I expected that." He collects his folder. "I will give you time to reconsider. The cell is cold, but there is a blanket if you ask the guard nicely."

He pauses at the door. "There is another prisoner here. A woman. She was captured in the same operation. She has been less... resolute." He lets that hang in the air.

The door closes. You are alone.`,
scene:'interrogation_room',mood:'#2d3436',characters:[],
effects:{stats:{cou:1},relationships:{interrogator:-1}},
choices:[
{text:'Wait. Conserve energy. Think.',next:'sol_cell_think',effects:{stats:{int:1}}},
{text:'Call out — try to reach the other prisoner.',next:'sol_call_out',effects:{stats:{cou:1}}},
{text:'Start working the zip ties again.',next:'sol_work_ties',effects:{stats:{str:1}}}
]
},

sol_ask_questions:{
text:`"Where am I? What do you want?"

Volkov tilts his head. "Reasonable questions. You are in a facility that does not appear on any map. As for what I want — that depends on what you can give me."

He opens the folder. "Your convoy was ambushed 40 kilometers from the border. Three of your team were killed. Two were captured. You are one of the two."

He lets that sink in. "The other is being held separately. A woman — your communications specialist, yes? She is... cooperating. Slowly."

His eyes are steady. "I am not interested in troop movements or encryption codes. Those change daily. I want something more valuable." He slides a photograph across the table. Your commanding officer, Colonel Harlan, shaking hands with a man in civilian clothes.

"I want to know about MERIDIAN."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{relationships:{interrogator:2}},
choices:[
{text:'"I do not know what MERIDIAN is."',next:'sol_deny_meridian',effects:{stats:{cha:1}}},
{text:'"What makes you think I know anything about that?"',next:'sol_deflect',effects:{stats:{int:1},relationships:{interrogator:1}}},
{text:'The mention of the other prisoner hits hard. "Is she okay?"',next:'sol_concern_prisoner',effects:{stats:{cha:1},relationships:{cellmate:1}}}
]
},

sol_silent_work:{
text:`You keep your eyes on Volkov while your fingers probe the zip tie. He talks. You listen — or appear to.

The tie has a locking mechanism. Standard ratchet. If you could find something thin — a sliver of metal, a pen clip — you could shim it. For now, you flex and rotate, stretching the plastic incrementally.

Volkov notices your focus drifting. "Am I boring you?"

"Just thinking."

"About what?"

"About whether your coffee is as bad as it smells."

He almost smiles. Almost. "It is worse." He slides the cup toward you. "But it is warm. And you look like you could use warm."

A small gesture. Calculated? Genuine? Hard to tell with this one.`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{per:1},relationships:{interrogator:1},flags:{working_ties:true}},
choices:[
{text:'Take the coffee. Build rapport.',next:'sol_rapport',effects:{stats:{cha:1},relationships:{interrogator:2}}},
{text:'Ignore it. Ask about MERIDIAN before he does.',next:'sol_preempt_meridian',effects:{stats:{int:2},relationships:{interrogator:1}}},
{text:'Knock the cup off the table. Show him you cannot be bought.',next:'sol_defiance',effects:{stats:{cou:1},relationships:{interrogator:-2}}}
]
},

sol_examine_photo:{
text:`You look at the photograph. Colonel Harlan — your CO, the man who sent you on this mission — shaking hands with a civilian. The civilian is older, silver-haired, wearing an expensive suit. The background is a hotel lobby. European, from the architecture.

You do not recognize the man. But you recognize the pin on his lapel. A small meridian line — the same symbol that was on the classified briefing packet Harlan gave you before the mission.

Volkov watches your face. He sees the recognition. "You know the symbol."

"I have seen it."

"Then you know more than you think." He pulls out more photographs. Documents. Wire transfers. "MERIDIAN is not a mission code. It is a network. Arms deals, intelligence trades, black-site funding. And your Colonel Harlan is at the center of it."

He sits back. "You were not captured by the enemy. You were sent into an ambush by your own side."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{per:2},relationships:{interrogator:2},flags:{knows_meridian:true}},
choices:[
{text:'"You expect me to believe my own commander set me up?"',next:'sol_doubt_volkov',effects:{stats:{int:1}}},
{text:'"If this is true... what do you want from me?"',next:'sol_volkov_deal',effects:{stats:{int:1},relationships:{interrogator:2}}},
{text:'This changes everything. You need time to think.',next:'sol_cell_think',effects:{stats:{int:1}}}
]
},

sol_refuse_photo:{
text:`You do not look. You push the photo back with your forehead, since your hands are tied.

"I do not play games."

Volkov takes the photo. "That is unfortunate. Because whether you play or not, the game is happening." He stands. "You will be moved to a cell. Think about what I have said. The other prisoner is already thinking."

He leaves. Guards enter. They haul you up, walk you down a concrete corridor — you count steps, note doors, file everything away — and shove you into a small cell. Concrete walls. A cot. A bucket. A thin blanket.

Through the wall, you hear tapping. Faint, rhythmic. Someone is using morse code.

T-R-U-S-T N-O O-N-E.`,
scene:'cell',mood:'#2d3436',characters:[],
effects:{stats:{cou:1},flags:{heard_morse:true}},
choices:[
{text:'Tap back. Identify yourself.',next:'sol_morse_respond',effects:{stats:{int:1},relationships:{cellmate:2}}},
{text:'Listen but do not respond. Not yet.',next:'sol_morse_listen',effects:{stats:{per:1}}},
{text:'Ignore it. It could be a plant.',next:'sol_cell_alone',effects:{stats:{int:1}}}
]
},

sol_deny_photo:{
text:`"You are lying. That photo is fabricated."

Volkov raises an eyebrow. "Is it? Look at the metadata stamp. The hotel lobby — that is the Grand Meridien in Vienna. Your Colonel Harlan attended a NATO conference there last March. You can verify this yourself if you ever leave this room."

He taps the photo. "I understand your skepticism. In your position, I would doubt everything too. That is healthy. But consider this — if I wanted to break you with lies, I would use something emotional. Your family. Your friends. Instead, I am showing you documents. I am appealing to your intelligence."

He stands. "I will have you moved to a cell. Think it over. And when you are ready to have a real conversation, tell the guard."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{int:1},relationships:{interrogator:1}},
choices:[
{text:'Go to the cell. Think.',next:'sol_cell_think',effects:{stats:{int:1}}},
{text:'"Wait. Tell me more about MERIDIAN."',next:'sol_volkov_deal',effects:{stats:{int:1},relationships:{interrogator:2}}},
{text:'"I want to see the other prisoner first."',next:'sol_demand_prisoner',effects:{stats:{cou:1},relationships:{cellmate:1}}}
]
},

sol_challenge_volkov:{
text:`"If you know everything, why do you need me?"

Volkov pauses. For the first time, something shifts behind his glasses. Not anger — respect, maybe. Or recognition.

"Because I do not know everything. I know pieces. And I suspect you have pieces I am missing." He opens the folder wider. "MERIDIAN. Does that word mean anything to you?"

You keep your face neutral, but your mind races. MERIDIAN was the operation code Harlan used in your pre-mission briefing. Classified. Need-to-know.

"I see it does." Volkov misses nothing. "We are on the same side of something here. You just do not know it yet."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{int:1},relationships:{interrogator:2}},
choices:[
{text:'"Prove it. Show me what you have."',next:'sol_volkov_deal',effects:{stats:{int:1},relationships:{interrogator:2}}},
{text:'"We are not on the same side of anything."',next:'sol_defiance',effects:{stats:{cou:1},relationships:{interrogator:-2}}},
{text:'Stay silent. Let him keep talking.',next:'sol_let_talk',effects:{stats:{per:1},relationships:{interrogator:1}}}
]
},

sol_defiance:{
text:`You stare Volkov down. "Do your worst."

His expression does not change. He closes the folder, finishes his coffee, and stands. "As you wish."

He leaves. The lights go out. All of them. Total darkness.

Then the sound starts. A high-pitched tone, just above comfortable. It fills the room, fills your skull. You cannot cover your ears — your hands are tied.

Hours pass. Maybe. Time dissolves in the dark. The tone shifts pitch every few minutes, just enough to prevent adaptation. Your head pounds. Your thoughts fragment.

When the lights finally slam back on, Volkov is sitting across from you again. Same suit. Same coffee. As if no time has passed.

"Shall we try again?"`,
scene:'interrogation_room',mood:'#e17055',characters:['Volkov'],
effects:{stats:{cou:1,str:-1},relationships:{interrogator:-3}},
choices:[
{text:'Endure. Give him nothing.',next:'sol_endure',effects:{stats:{cou:2}},check:{stat:'cou',dc:12},failNext:'sol_break_partial'},
{text:'"Fine. I will listen. But I will not betray my people."',next:'sol_conditional_talk',effects:{stats:{int:1},relationships:{interrogator:2}}},
{text:'You need to get out of here. Agree to cooperate — then plan your escape.',next:'sol_false_cooperate',effects:{stats:{cha:1,int:1}}}
]
},

sol_deny_meridian:{
text:`"I do not know what MERIDIAN is."

Volkov studies you. "I believe you believe that. But I think you know more than you realize." He pulls out a second photograph — a satellite image of a compound. You recognize it. It is the staging area your unit used before the mission.

"This facility was supposed to be a forward operating base. But the supply manifests do not match a military operation. Weapons shipments going out. Money coming in. All routed through your Colonel Harlan."

He leans forward. "You were not on a reconnaissance mission. You were delivering something. What was in the case your team carried?"

The case. You remember it — locked, heavy, Harlan said it was communication equipment. You never questioned it.`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{per:1},flags:{knows_case:true}},
choices:[
{text:'"Communication equipment. That is what we were told."',next:'sol_honest_answer',effects:{stats:{cha:1},relationships:{interrogator:2}}},
{text:'"I am not answering any more questions."',next:'sol_silence',effects:{stats:{cou:1},relationships:{interrogator:-1}}},
{text:'"What do YOU think was in it?"',next:'sol_turn_tables',effects:{stats:{int:1},relationships:{interrogator:1}}}
]
},

sol_deflect:{
text:`"What makes you think I know anything about that?"

"Because you were hand-picked for this mission by Colonel Harlan himself. Not through normal channels — he bypassed the unit commander and selected your team personally." Volkov adjusts his glasses. "Men do not hand-pick teams for routine operations. They hand-pick teams for operations where they need absolute loyalty — or absolute expendability."

The word hangs in the air. Expendability.

"Which are you, I wonder?"`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{int:1},relationships:{interrogator:1}},
choices:[
{text:'That hits a nerve. Harlan DID bypass the chain of command...',next:'sol_doubt_harlan',effects:{stats:{per:1}}},
{text:'"You are trying to make me doubt my commanding officer. Textbook."',next:'sol_recognize_tactic',effects:{stats:{int:1},relationships:{interrogator:1}}},
{text:'"Take me to the other prisoner. I want to hear her side."',next:'sol_demand_prisoner',effects:{stats:{cou:1},relationships:{cellmate:1}}}
]
},

sol_concern_prisoner:{
text:`"Is she okay?"

Something flickers across Volkov's face. "She is unharmed. I do not use physical methods — they produce unreliable intelligence." He pauses. "Her name is Sergeant Torres. You know her?"

Torres. Kat Torres. Your comms specialist. The best in the unit — steady hands, steady nerve. If she is alive, there is hope.

"She is frightened. Disoriented. She was separated from the team during the ambush and woke up here alone." Volkov folds his hands. "She has been asking about you."

He lets the silence work. "I can arrange for you to see her. Briefly. If you are willing to have a conversation first."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{relationships:{cellmate:2,interrogator:1}},
choices:[
{text:'"What kind of conversation?"',next:'sol_conditional_talk',effects:{stats:{int:1},relationships:{interrogator:1}}},
{text:'"Let me see her first. Then we talk."',next:'sol_demand_prisoner',effects:{stats:{cou:1},relationships:{cellmate:2}}},
{text:'"I do not believe you. She could be dead for all I know."',next:'sol_doubt_volkov',effects:{stats:{int:1},relationships:{interrogator:-1}}}
]
},

sol_memorize_layout:{
text:`You drink slowly, eyes scanning through the open door. Two guards in the corridor — one left, one right. The corridor runs about 20 meters and turns. You see three other cell doors, all closed. A camera at the bend. Emergency lighting — a red EXIT sign at the far end.

The guard watching you has a sidearm. Holster is snapped. A keycard hangs from a retractable lanyard on his belt.

You file it all away and hand back the canteen. They re-tie your right hand. The zip tie is fresh but you kept your wrist slightly flexed — there is a fraction more play now.

Volkov is watching you with something close to admiration. "You are observant. That is the quality I value most."

He opens his folder again. "MERIDIAN. Tell me what you know."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{per:2},flags:{memorized_layout:true,extra_play:true}},
choices:[
{text:'"Show me what you have first."',next:'sol_volkov_deal',effects:{stats:{int:1},relationships:{interrogator:2}}},
{text:'Keep playing dumb. You need more information.',next:'sol_deny_meridian',effects:{stats:{cha:1}}},
{text:'Ask to be taken to your cell. You need to plan.',next:'sol_cell_think',effects:{stats:{int:1}}}
]
},

sol_grab_guard:{
text:`You move fast — one hand free is all you need. You seize the guard's wrist and twist, pulling his sidearm from the holster while using him as a shield. The guard yells. Volkov does not flinch.

"Impressive reflexes," Volkov says calmly. He has not moved from his chair. "But consider — there are two more guards outside. A locked security door at the end of the corridor. And even if you got through all of that, you are in the middle of a compound surrounded by forest, 40 kilometers from the nearest road."

He sips his coffee. "Sit down. Please."

You have the gun. You have a hostage. But he is right about the math.`,
scene:'interrogation_room',mood:'#e17055',characters:['Volkov'],
effects:{stats:{str:2,cou:1},flags:{grabbed_gun:true}},
choices:[
{text:'Force Volkov to lead you out.',next:'sol_force_escape',effects:{stats:{cou:2}},check:{stat:'cou',dc:14},failNext:'sol_escape_fail_early'},
{text:'Take the guard keycard and go alone.',next:'sol_solo_escape_early',effects:{stats:{str:1}},check:{stat:'per',dc:13},failNext:'sol_escape_fail_early'},
{text:'Lower the gun. You are not ready yet — but now you know it is possible.',next:'sol_conditional_talk',effects:{stats:{int:2},flags:{knows_gun_location:true}}}
]
},

sol_grab_guard_fail:{
text:`You lunge — but the guard is faster than he looks. He sidesteps, drives an elbow into your ribs. You double over, gasping. Two more guards rush in and pin you to the chair.

Volkov watches calmly as they re-tie both hands. Tighter this time.

"That was expected." He adjusts his glasses. "The question is whether it was desperation or reconnaissance. I suspect the latter." He almost sounds impressed.

"Now. Shall we continue our conversation? Or would you prefer another demonstration?"`,
scene:'interrogation_room',mood:'#e17055',characters:['Volkov'],
effects:{stats:{str:-1},relationships:{interrogator:-1}},
choices:[
{text:'"We can talk."',next:'sol_conditional_talk',effects:{stats:{cha:1},relationships:{interrogator:1}}},
{text:'Stony silence.',next:'sol_silence',effects:{stats:{cou:1},relationships:{interrogator:-1}}},
{text:'"Tell me about MERIDIAN."',next:'sol_volkov_deal',effects:{stats:{int:1},relationships:{interrogator:2}}}
]
},

sol_cooperate_early:{
text:`You let them re-tie your wrist without resistance. The guard steps back. Volkov notes your compliance.

"Thank you. Civility makes everything easier." He opens a second folder — thicker than the first. "I want to show you something. It will not be pleasant, but I think you deserve to know."

Photographs. Your convoy. The aftermath of the ambush. Three body bags. And a wide shot of the road — the ambush point.

"Look at the geometry. The kill zone. The positioning." Volkov taps the photo. "This was not an enemy ambush. The firing angles are wrong for a roadside attack. Your convoy was hit from elevated positions — positions that only someone with your exact route could have pre-staged."

He lets that sink in.

"Your own people set the ambush. Colonel Harlan gave them the route."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{per:1},relationships:{interrogator:2},flags:{knows_betrayal:true}},
choices:[
{text:'"Why would Harlan want his own team dead?"',next:'sol_why_betrayal',effects:{stats:{int:1},relationships:{interrogator:2}}},
{text:'"Prove it. Show me the route data."',next:'sol_volkov_deal',effects:{stats:{int:1},relationships:{interrogator:1}}},
{text:'This could still be a manipulation. Stay guarded.',next:'sol_doubt_volkov',effects:{stats:{per:1}}}
]
},

sol_rapport:{
text:`You take the coffee. It IS terrible — instant, bitter, lukewarm. But it is warm, and your body is cold, and sometimes small comforts matter more than pride.

"Thank you."

Volkov nods. Something between you shifts — just slightly. Not trust. Not friendship. But acknowledgment that you are both human beings in a room.

"You know," he says, "I was a soldier once. Different army, different war. Same room." He gestures at the concrete walls. "I sat where you are sitting. For eleven days."

He is sharing something real. Or performing the sharing of something real. With Volkov, you cannot always tell.

"What I learned in those eleven days is that the truth is the only weapon that works in a room like this. Everything else — silence, defiance, lies — they all have an expiration date."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{relationships:{interrogator:3}},
choices:[
{text:'"What truth are you looking for?"',next:'sol_volkov_deal',effects:{stats:{int:1},relationships:{interrogator:2}}},
{text:'"Did you break? In those eleven days?"',next:'sol_volkov_past',effects:{stats:{per:1},relationships:{interrogator:2}}},
{text:'"Nice story. But I am not you."',next:'sol_cell_think',effects:{stats:{cou:1},relationships:{interrogator:-1}}}
]
},

sol_preempt_meridian:{
text:`"MERIDIAN. That is what this is about, is it not?"

Volkov goes very still. His coffee cup pauses halfway to his lips. "That is... not what I expected you to say."

"I am not stupid. You have not asked about troop positions, encryption keys, or anything with tactical value. You want something specific. And the only specific thing my unit was carrying was something my CO called MERIDIAN."

"What did Harlan tell you it was?"

"Communication equipment."

"And you believed that?"

You hesitate. "I believed my commanding officer."

Volkov sets down his coffee. "Colonel Harlan has been selling classified intelligence to three different buyers for the past eighteen months. MERIDIAN is not communication equipment. It is a list — names, locations, and payment records for every asset in his network. He sent you to deliver it. And then he sent the ambush to make sure you never came back."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{int:2},relationships:{interrogator:3},flags:{knows_meridian:true,knows_betrayal:true}},
choices:[
{text:'"If Harlan wanted the list delivered, why ambush us?"',next:'sol_why_betrayal',effects:{stats:{int:1}}},
{text:'"And you — what side are you on?"',next:'sol_volkov_agenda',effects:{stats:{per:1},relationships:{interrogator:1}}},
{text:'You need time to process this. Ask for your cell.',next:'sol_cell_think',effects:{stats:{int:1}}}
]
},

sol_volkov_deal:{
text:`Volkov lays it all out. Photographs, wire transfers, intercepted communications. A web of arms deals, intelligence trades, and black-money pipelines all running through one man: Colonel James Harlan, your commanding officer.

MERIDIAN is a master list — every asset, every payment, every dead drop in Harlan's network. He sent your team to deliver it to a buyer. Then he arranged the ambush to kill the couriers and leave no witnesses.

"I have been building this case for two years," Volkov says. "But I need the list itself. Without it, Harlan walks free and the network continues."

He folds his hands. "The list was in a reinforced case your team carried. Where is that case now?"

You remember. During the ambush, before you went down — Torres grabbed the case. She ran.`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{relationships:{interrogator:3},flags:{knows_meridian:true,knows_betrayal:true}},
choices:[
{text:'"I need to see Torres before I tell you anything."',next:'sol_meet_torres',effects:{stats:{cou:1},relationships:{cellmate:2}}},
{text:'"Torres has it. She ran during the ambush."',next:'sol_reveal_torres',effects:{stats:{cha:-1},relationships:{interrogator:3,cellmate:-2}}},
{text:'"What guarantee do I have that you are not just another buyer?"',next:'sol_volkov_agenda',effects:{stats:{int:1},relationships:{interrogator:1}}}
]
},

sol_cell_think:{
text:`They move you to a cell. Small — three meters by two. Concrete walls, a cot with a thin mattress, a bucket, a wool blanket. The door is solid steel with a slot at the bottom for food trays.

You lie on the cot and think.

The mission. Harlan picking your team personally. The case — heavy, locked, supposedly comms equipment. The ambush that hit with surgical precision. And now Volkov, with his photographs and his quiet certainty.

Something is wrong. Something has been wrong since before you left base.

Through the wall, faint tapping. Morse code again.

A-R-E Y-O-U O-K-A-Y.`,
scene:'cell',mood:'#2d3436',characters:[],
effects:{stats:{int:1}},
choices:[
{text:'Tap back. "Y-E-S. W-H-O A-R-E Y-O-U."',next:'sol_morse_respond',effects:{stats:{int:1},relationships:{cellmate:2}}},
{text:'Rest. Conserve your strength for tomorrow.',next:'sol_flashback_harlan',effects:{stats:{str:1}}},
{text:'Examine the cell for weaknesses.',next:'sol_cell_search',effects:{stats:{per:1}}}
]
},

sol_morse_respond:{
text:`You tap back on the wall. Your morse is rusty but functional.

Y-E-S. W-H-O A-R-E Y-O-U.

A pause. Then: T-O-R-R-E-S.

Your heart hammers. Kat Torres. She is alive. She is in the next cell.

T-H-E-Y W-A-N-T T-H-E C-A-S-E.

You tap: W-H-E-R-E I-S I-T.

Long pause. Then: H-I-D I-T. B-E-F-O-R-E C-A-P-T-U-R-E. T-H-E-Y D-O-N-T K-N-O-W.

She hid the case. Volkov does not have it. That changes everything — it is your bargaining chip, your leverage, your lifeline.

D-O-N-T T-R-U-S-T V-O-L-K-O-V. She taps. H-E H-A-S H-I-S O-W-N A-G-E-N-D-A.`,
scene:'cell',mood:'#2d3436',characters:[],
effects:{stats:{int:1},relationships:{cellmate:3},flags:{torres_alive:true,case_hidden:true}},
choices:[
{text:'Tap: C-A-N W-E E-S-C-A-P-E.',next:'sol_plan_escape',effects:{stats:{int:1},relationships:{cellmate:2}}},
{text:'Tap: W-H-A-T I-S H-I-S A-G-E-N-D-A.',next:'sol_torres_warning',effects:{stats:{per:1},relationships:{cellmate:1}}},
{text:'Tap: S-T-A-Y S-T-R-O-N-G. Then rest.',next:'sol_flashback_harlan',effects:{stats:{cou:1},relationships:{cellmate:1}}}
]
},

sol_morse_listen:{
text:`You listen. The tapping continues.

T-R-U-S-T N-O O-N-E. V-O-L-K-O-V L-I-E-S. C-A-S-E I-S S-A-F-E.

Then silence. Whoever is on the other side is waiting for a response.

The message is clear — the case Harlan sent you to deliver is hidden somewhere. Volkov does not have it. And whoever is tapping does not trust your interrogator.

You wait. After a few minutes, more tapping: I-F Y-O-U A-R-E F-R-I-E-N-D T-A-P T-W-I-C-E.`,
scene:'cell',mood:'#2d3436',characters:[],
effects:{stats:{per:1},flags:{case_hidden:true}},
choices:[
{text:'Tap twice.',next:'sol_morse_respond',effects:{relationships:{cellmate:2}}},
{text:'Tap three times — a signal that you are not who they think.',next:'sol_cell_alone',effects:{stats:{int:1}}},
{text:'Do not tap. Sleep instead.',next:'sol_flashback_harlan',effects:{stats:{str:1}}}
]
},

sol_cell_alone:{
text:`You do not respond. Trust is a luxury you cannot afford.

The tapping stops eventually. You are alone with your thoughts and the hum of the ventilation system.

You think about Harlan. About the mission briefing — his hand on your shoulder, his voice saying "I trust you with this." About the case and what might really be inside it.

You think about the ambush. The precision of it. How the first shots took out the driver and the turret gunner — the two people who could have gotten the convoy moving.

Volkov might be lying. But the geometry of that ambush does not lie.

Sleep comes in fragments. Cold. Restless. Full of dreams that might be memories.`,
scene:'cell',mood:'#2d3436',characters:[],
effects:{stats:{int:1}},
choices:[
{text:'In the dream, you remember the mission briefing.',next:'sol_flashback_harlan',effects:{stats:{per:1}}},
{text:'You wake to the sound of your cell door opening.',next:'sol_morning_interrogation',effects:{stats:{cou:1}}},
{text:'You wake to tapping again — more urgent this time.',next:'sol_urgent_morse',effects:{stats:{per:1}}}
]
},

sol_flashback_harlan:{
text:`The memory surfaces like oil on water.

Three weeks ago. Harlan's office. Maps on the wall, coffee rings on the desk. He looked tired — the kind of tired that goes deeper than sleep.

"This is off the books," he said. "No official orders. I picked you because I need someone I can trust absolutely." He slid a locked case across the desk. Heavy. "Communication equipment for a forward listening post. Sensitive — encrypted hardware, classified frequencies. You deliver it, you come back, nobody talks about it. Clear?"

You did not question it. He was your CO. He had earned your trust in Fallujah, in Kandahar, in a dozen places where trust was the only thing keeping you alive.

But now, in this cell, the memory looks different. His eyes were not just tired. They were afraid.`,
scene:'flashback',mood:'#636e72',characters:['Commander'],
effects:{stats:{per:1},relationships:{commander:1}},
choices:[
{text:'Remember more. What else was unusual about the briefing?',next:'sol_flashback_details',effects:{stats:{int:1},relationships:{commander:1}}},
{text:'Wake up. Face the day.',next:'sol_morning_interrogation',effects:{stats:{cou:1}}},
{text:'The dream shifts — you remember the ambush itself.',next:'sol_flashback_ambush',effects:{stats:{per:1}}}
]
},

sol_flashback_details:{
text:`You push deeper into the memory. Details surface.

Harlan dismissed his aide before the briefing — unusual. He closed the blinds. He checked his phone twice, then turned it off and removed the battery.

He gave you a sat phone. "Emergency channel only. Frequency 7734. If everything goes wrong — and I mean everything — call this number. Someone will answer. Use the phrase 'the meridian is clear.'"

You never used the phone. It was in your vest pocket when the ambush hit. Is it still there? You check — your vest was taken, but you can feel something hard in the lining of your boot. You always keep a backup.

The sat phone. Tiny, military-grade, wedged into your boot sole. They missed it in the search.`,
scene:'flashback',mood:'#636e72',characters:['Commander'],
effects:{stats:{int:2,per:1},flags:{has_sat_phone:true},relationships:{commander:2}},
choices:[
{text:'Hide it better. This is your lifeline.',next:'sol_morning_interrogation',effects:{stats:{per:1}}},
{text:'Try to use it now, in the dark.',next:'sol_use_phone_cell',effects:{stats:{cou:1}},check:{stat:'per',dc:12},failNext:'sol_phone_almost_caught'},
{text:'Remember the number. 7734. File it away for later.',next:'sol_morning_interrogation',effects:{stats:{int:1}}}
]
},

sol_flashback_ambush:{
text:`The ambush replays in slow motion.

The convoy was on a mountain road. Two vehicles. Your team of five plus a driver. Standard route — or what you thought was standard.

The first RPG hit the lead vehicle. Perfect shot — took out the engine block. The second hit the rear truck's tires. Boxed in.

Then rifle fire from the ridgeline. Coordinated, disciplined. Not insurgents — these were professionals. Military-grade weapons, military-grade tactics.

Kowalski went down first. Then Chen. You grabbed Torres and ran for the tree line. She had the case. You laid down cover fire until a round caught you in the vest and the world went black.

One detail stands out now: the attackers did not pursue Torres. They pursued you. As if they wanted the people, not the case.

Or as if they already knew where the case would end up.`,
scene:'flashback',mood:'#e17055',characters:[],
effects:{stats:{per:2},flags:{ambush_memory:true}},
choices:[
{text:'Wake up with new clarity. Volkov needs to hear this.',next:'sol_morning_interrogation',effects:{stats:{int:1},relationships:{interrogator:1}}},
{text:'The attackers wanted prisoners, not cargo. Why?',next:'sol_morning_interrogation',effects:{stats:{int:2}}},
{text:'Torres. She is the key to all of this.',next:'sol_urgent_morse',effects:{stats:{per:1},relationships:{cellmate:1}}}
]
},

sol_use_phone_cell:{
text:`You wait until the small hours. The guard patrols past every fifteen minutes — you have timed it. In the gap, you ease the sat phone from your boot.

It is tiny, battered, but the power light blinks green. You dial 7734. Static. Then a voice — scrambled, mechanical.

"Authenticate."

"The meridian is clear."

Silence. Then: "Confirm identity."

You give your name and service number. More silence.

"We know your position. Extraction is not currently possible. The compound is under hostile surveillance — not just Volkov. A third party is watching. Do NOT reveal the location of the package. We will make contact again in 48 hours. Destroy this phone."

The line goes dead.

A third party. Someone else is in play.`,
scene:'cell',mood:'#2d3436',characters:['Handler'],
effects:{stats:{int:1,per:1},relationships:{handler:3},flags:{handler_contact:true,third_party:true}},
choices:[
{text:'Destroy the phone as instructed.',next:'sol_destroy_phone',effects:{stats:{cou:1},relationships:{handler:2}}},
{text:'Keep the phone hidden. You might need it again.',next:'sol_morning_interrogation',effects:{stats:{int:1},flags:{kept_phone:true}}},
{text:'Tell Torres about the call through the wall.',next:'sol_tell_torres_phone',effects:{stats:{cha:1},relationships:{cellmate:2}}}
]
},

sol_phone_almost_caught:{
text:`You dial in the dark, but your fingers are clumsy from the cold. The phone emits a faint beep — too loud in the silence.

Footsteps outside. A guard. You shove the phone back into your boot and throw yourself onto the cot, pulling the blanket up.

The slot in the door opens. A flashlight beam sweeps across you. Pauses. Moves on.

Your heart is hammering so hard you are sure they can hear it. But the footsteps recede.

Too close. You cannot try again tonight.`,
scene:'cell',mood:'#2d3436',characters:[],
effects:{stats:{per:-1},flags:{has_sat_phone:true,phone_risk:true}},
choices:[
{text:'Try again tomorrow night, more carefully.',next:'sol_morning_interrogation',effects:{stats:{int:1}}},
{text:'Sleep. You will need your strength.',next:'sol_morning_interrogation',effects:{stats:{str:1}}},
{text:'Tap the wall. Tell Torres you have a phone.',next:'sol_tell_torres_phone',effects:{stats:{cha:1},relationships:{cellmate:2}}}
]
},

sol_destroy_phone:{
text:`You snap the phone in half and drop the pieces into the waste bucket. The SIM card you crack between your teeth and swallow.

It is gone. Your one lifeline. But the handler knows you are alive, knows your position. 48 hours.

You lie back on the cot. For the first time since the ambush, you feel something other than fear and confusion. You feel the faintest trace of hope.

48 hours. You just have to survive 48 hours.`,
scene:'cell',mood:'#2d3436',characters:[],
effects:{stats:{cou:1},relationships:{handler:2},flags:{phone_destroyed:true}},
choices:[
{text:'Sleep. Conserve energy for what comes next.',next:'sol_morning_interrogation',effects:{stats:{str:1}}},
{text:'Tap the wall. Coordinate with Torres.',next:'sol_plan_escape',effects:{stats:{int:1},relationships:{cellmate:2}}},
{text:'Plan. Think through every scenario.',next:'sol_morning_interrogation',effects:{stats:{int:2}}}
]
},

sol_tell_torres_phone:{
text:`You tap the wall. Slow, careful morse.

M-A-D-E C-O-N-T-A-C-T. H-A-N-D-L-E-R K-N-O-W-S. 4-8 H-O-U-R-S.

Pause. Then Torres taps back: T-H-I-R-D P-A-R-T-Y?

She already knows. Smart.

Y-E-S. W-H-O?

Another pause. Longer this time. Then: H-A-R-L-A-N S-E-N-T C-L-E-A-N-U-P T-E-A-M. T-H-E-Y A-R-E C-L-O-S-E.

Harlan sent a cleanup team. Not to rescue you — to finish what the ambush started. To make sure no witnesses survive.

The clock just got faster.`,
scene:'cell',mood:'#e17055',characters:[],
effects:{stats:{per:1},relationships:{cellmate:2},flags:{cleanup_team:true}},
choices:[
{text:'We need to escape before the cleanup team arrives.',next:'sol_plan_escape',effects:{stats:{int:1,cou:1},relationships:{cellmate:2}}},
{text:'Tell Volkov. He needs to know his facility is compromised.',next:'sol_morning_interrogation',effects:{stats:{int:1},relationships:{interrogator:1}}},
{text:'48 hours. Can you hold out that long?',next:'sol_morning_interrogation',effects:{stats:{cou:1}}}
]
},

sol_work_ties:{
text:`You work the zip ties methodically. Flex, rotate, flex, rotate. The plastic digs into your skin, drawing blood, but you keep going.

After what feels like an hour, you have gained maybe two millimeters of play. Not enough to escape, but enough to know the ties CAN be stretched.

If you had something thin — a wire, a pin, a splinter — you could shim the ratchet mechanism. The cell might have something.

Your wrists are raw and bleeding, but you have learned something valuable: escape is not impossible. Just difficult.`,
scene:'cell',mood:'#2d3436',characters:[],
effects:{stats:{str:1},flags:{worked_ties:true}},
choices:[
{text:'Search the cell for something useful.',next:'sol_cell_search',effects:{stats:{per:1}}},
{text:'Rest. You will try again after the bleeding stops.',next:'sol_flashback_harlan',effects:{stats:{str:1}}},
{text:'Listen at the wall. Is the other prisoner still tapping?',next:'sol_morse_respond',effects:{stats:{per:1},relationships:{cellmate:1}}}
]
},

sol_call_out:{
text:`"Hey!" Your voice echoes off concrete. "Is anyone there?"

Silence. Then a guard bangs on the door. "Quiet."

You wait. Minutes pass. Then — faintly — a voice through the wall. A woman's voice. "...hello?"

Torres. It has to be Torres.

"It is me," you say, pressing your face to the wall.

"Keep it down," the guard warns again, footsteps approaching.

The voice through the wall, barely a whisper now: "They want the case. I hid it. Do not tell them anything."

Then silence. The guard is at your door.`,
scene:'cell',mood:'#2d3436',characters:[],
effects:{stats:{cou:1},relationships:{cellmate:2},flags:{torres_alive:true,case_hidden:true}},
choices:[
{text:'Switch to tapping. Safer.',next:'sol_plan_escape',effects:{stats:{int:1},relationships:{cellmate:1}}},
{text:'Go silent. The guard is suspicious.',next:'sol_cell_alone',effects:{stats:{per:1}}},
{text:'Demand to see your fellow prisoner.',next:'sol_demand_prisoner_guard',effects:{stats:{cou:1}}}
]
},

sol_cell_search:{
text:`You go over every centimeter of the cell. The cot is welded steel — no loose parts. The mattress is thin foam, no springs. The bucket is plastic.

But the wall. The concrete wall near the floor has a hairline crack. You probe it with your fingernail. A thin sliver of metal is embedded in the concrete — probably from the original construction. You work it free. It is about three centimeters long, thin as a pin.

Perfect for shimming a zip tie.

You hide it in the seam of your boot. If they search you, they probably will not find it. Probably.`,
scene:'cell',mood:'#2d3436',characters:[],
effects:{stats:{per:2},flags:{has_shim:true}},
choices:[
{text:'Try to shim the ties now.',next:'sol_shim_ties',effects:{stats:{str:1}},check:{stat:'per',dc:10},failNext:'sol_shim_fail'},
{text:'Save it. Wait for the right moment.',next:'sol_morning_interrogation',effects:{stats:{int:1}}},
{text:'Tap the wall. Tell Torres you have a tool.',next:'sol_plan_escape',effects:{stats:{int:1},relationships:{cellmate:2}}}
]
},

sol_shim_ties:{
text:`You work the metal sliver into the zip tie ratchet. Careful, delicate — one slip and the shim bends, useless.

Click. The ratchet releases. The tie slides open.

Your hands are free.

You re-loop the tie loosely around your wrists so it looks intact at a glance. If a guard checks, they might not notice. But you can slip free in a second.

The advantage is yours now. The question is when to use it.`,
scene:'cell',mood:'#2d3436',characters:[],
effects:{stats:{per:2,int:1},flags:{hands_free:true}},
choices:[
{text:'Wait for the guard rotation. Time your escape.',next:'sol_plan_escape',effects:{stats:{int:1}}},
{text:'Tap Torres. Tell her you are ready.',next:'sol_plan_escape',effects:{stats:{int:1},relationships:{cellmate:2}}},
{text:'Wait for the next interrogation session. Surprise Volkov.',next:'sol_morning_interrogation',effects:{stats:{cou:1}}}
]
},

sol_shim_fail:{
text:`The sliver slips. It bends against the ratchet, almost breaks. You pull it out before it snaps.

Still usable, but you will need steadier hands. Your fingers are cold and the light is bad. Morning might be better — or you could try again after you warm up.

You hide the shim and pull the blanket tight. Not a failure. A postponement.`,
scene:'cell',mood:'#2d3436',characters:[],
effects:{stats:{per:-1},flags:{has_shim:true}},
choices:[
{text:'Try again after warming your hands.',next:'sol_shim_ties',effects:{stats:{str:1}},check:{stat:'per',dc:9},failNext:'sol_morning_interrogation'},
{text:'Save it for a better moment.',next:'sol_morning_interrogation',effects:{stats:{int:1}}},
{text:'Tap the wall. Talk to Torres.',next:'sol_plan_escape',effects:{stats:{int:1},relationships:{cellmate:1}}}
]
},

sol_morning_interrogation:{
text:`Morning comes with the scrape of a food tray through the slot. Grey porridge, black bread, water. You eat everything — fuel is fuel.

An hour later, the door opens. A guard you have not seen before — younger, nervous. He avoids eye contact as he escorts you back to the interrogation room.

Volkov is already there. Same suit, fresh coffee. But something is different today. He looks tense. Distracted. He keeps glancing at the door.

"Sit down. We need to talk — and we may not have much time."

He leans forward. "I will be honest with you. There are people coming. People I do not control. They want what I want — the MERIDIAN list — but they will not ask as politely as I do."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{relationships:{interrogator:1}},
choices:[
{text:'"Who is coming?"',next:'sol_who_coming',effects:{stats:{int:1},relationships:{interrogator:1}}},
{text:'"Sounds like you need me more than I need you."',next:'sol_leverage',effects:{stats:{cha:1},relationships:{interrogator:1}}},
{text:'"Let me and Torres go. We will get you the list."',next:'sol_propose_deal',effects:{stats:{int:1,cha:1},relationships:{interrogator:2}}}
]
},

sol_urgent_morse:{
text:`The tapping is frantic now. Fast, sloppy — Torres is scared.

G-U-A-R-D-S M-O-V-I-N-G. S-O-M-E-T-H-I-N-G W-R-O-N-G. H-E-A-R-D S-H-O-U-T-I-N-G.

You press your ear to the wall. Distant voices — raised, angry. The facility is agitated about something. A door slams somewhere down the corridor.

N-E-W P-E-O-P-L-E A-R-R-I-V-E-D. N-O-T V-O-L-K-O-V-S.

Torres taps: W-E N-E-E-D T-O G-O. N-O-W.`,
scene:'cell',mood:'#e17055',characters:[],
effects:{stats:{per:1},relationships:{cellmate:2},flags:{cleanup_arriving:true}},
choices:[
{text:'Wait for the guard to come for you. Ambush him.',next:'sol_ambush_guard',effects:{stats:{str:1,cou:1}},check:{stat:'str',dc:11},failNext:'sol_ambush_fail'},
{text:'Bang on the door. Demand to see Volkov.',next:'sol_demand_volkov',effects:{stats:{cou:1},relationships:{interrogator:1}}},
{text:'Stay calm. Chaos is opportunity.',next:'sol_wait_chaos',effects:{stats:{int:1,per:1}}}
]
},

sol_demand_prisoner:{
text:`"I want to see the other prisoner. Torres. Before I say another word."

Volkov considers. "That can be arranged. But understand — I am offering this as a gesture of good faith. I expect the same in return."

He opens the door and speaks to a guard. Five minutes later, they bring her in.

Kat Torres. She looks rough — bruised, tired, but unbroken. Her eyes find yours immediately. Something passes between you — relief, warning, solidarity.

"Two minutes," Volkov says, and steps outside.

Torres leans close. Her whisper is barely audible. "The case is buried under the old oak, 200 meters north of the ambush site. Do NOT tell him. He is not what he seems."`,
scene:'interrogation_room',mood:'#636e72',characters:['Torres'],
effects:{relationships:{cellmate:4},flags:{torres_alive:true,case_location:true}},
choices:[
{text:'"What do you mean, not what he seems?"',next:'sol_torres_warning',effects:{stats:{per:1},relationships:{cellmate:2}}},
{text:'"We need to escape. Are you strong enough?"',next:'sol_plan_escape',effects:{stats:{cou:1},relationships:{cellmate:2}}},
{text:'"I made contact with a handler. Extraction in 48 hours."',next:'sol_torres_extraction',effects:{stats:{int:1},relationships:{cellmate:2}}}
]
},

sol_demand_prisoner_guard:{
text:`"I want to see the other prisoner," you tell the guard through the door.

"That is not my decision."

"Then get someone whose decision it is."

The guard does not respond. But an hour later, the door opens — not for a visit, but for another interrogation session. Volkov is waiting.

"I hear you have been asking for Sergeant Torres. Interesting." He sits down. "I can arrange that. But first — tell me about MERIDIAN."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{cou:1},relationships:{interrogator:1}},
choices:[
{text:'"Torres first. Then we talk."',next:'sol_demand_prisoner',effects:{stats:{cou:1},relationships:{cellmate:1}}},
{text:'Give him something small. Build toward the meeting.',next:'sol_conditional_talk',effects:{stats:{cha:1},relationships:{interrogator:2}}},
{text:'"Why is MERIDIAN so important to you personally?"',next:'sol_volkov_agenda',effects:{stats:{per:1},relationships:{interrogator:1}}}
]
},

sol_let_talk:{
text:`You say nothing. Volkov keeps going.

"MERIDIAN is a list of every intelligence asset your Colonel Harlan has been running off the books. Double agents, arms dealers, politicians on payroll. If that list gets to the wrong buyer, dozens of people die. If it gets to the right people — meaning me — Harlan goes to prison and the network collapses."

He pauses. "I am not your enemy. I am a career intelligence officer who has spent two years trying to stop an arms pipeline that is getting people killed. Your Colonel Harlan is the pipeline."

He sits back. "But I am running out of time. There are other parties interested in this list. Less civilized parties. And they are closer than you think."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{per:1},relationships:{interrogator:2},flags:{knows_meridian:true}},
choices:[
{text:'"If you are legitimate, prove it. Show me credentials."',next:'sol_volkov_agenda',effects:{stats:{int:1},relationships:{interrogator:1}}},
{text:'"I need to talk to Torres."',next:'sol_demand_prisoner',effects:{stats:{cou:1},relationships:{cellmate:1}}},
{text:'"What happens to us if you get the list?"',next:'sol_propose_deal',effects:{stats:{int:1},relationships:{interrogator:2}}}
]
},

sol_doubt_volkov:{
text:`"Everything you have shown me could be fabricated. Photographs can be doctored. Documents can be forged."

Volkov nods. "You are right. They can. But ask yourself this — why would I go to this trouble? If I simply wanted information, I have other methods. Faster methods." He gestures at the bare room. "I am showing you evidence because I want you to understand the situation. Allies are more useful than broken prisoners."

He removes his glasses. Without them, he looks older. Tired. "I was in your position once. An asset I trusted turned out to be playing both sides. I lost three agents. Good people. Because I did not ask the right questions soon enough."

He puts the glasses back on. "I am asking you to ask the right questions."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{int:1},relationships:{interrogator:1}},
choices:[
{text:'"Fine. Show me everything you have on Harlan."',next:'sol_volkov_deal',effects:{stats:{int:1},relationships:{interrogator:2}}},
{text:'"I need to talk to my fellow prisoner first."',next:'sol_demand_prisoner',effects:{stats:{cou:1},relationships:{cellmate:1}}},
{text:'He might be sincere. But you are not ready to commit.',next:'sol_cell_think',effects:{stats:{per:1}}}
]
},

sol_volkov_past:{
text:`"Did you break? In those eleven days?"

Volkov is quiet for a long time. "Yes," he says finally. "On day nine. I told them everything. Names, locations, operational details. Three of my colleagues were arrested. One died in custody."

He meets your eyes. "I broke because I was alone. Because no one told me the truth about what I was carrying, what I was risking, or who I was really working for. Sound familiar?"

The parallel is deliberate. And effective.

"I survived because eventually, someone on the other side — my interrogator — realized we had a common enemy. He let me go. We worked together for six years after that. He is dead now. Heart attack, not a bullet. Small mercy."

He folds his hands. "I am not asking you to break. I am asking you to see clearly."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{per:1},relationships:{interrogator:3}},
choices:[
{text:'"Tell me about MERIDIAN. The truth."',next:'sol_volkov_deal',effects:{stats:{int:1},relationships:{interrogator:2}}},
{text:'"I need time. And I need to see Torres."',next:'sol_demand_prisoner',effects:{stats:{cou:1},relationships:{cellmate:1}}},
{text:'"You broke. I will not."',next:'sol_endure',effects:{stats:{cou:2},relationships:{interrogator:-1}}}
]
},

sol_endure:{
text:`You hold the line. Through the noise, through the cold, through the darkness and the light and the questions that never stop. You give them nothing.

Your training holds. Compartmentalize. Retreat to the fortress inside your mind. Name, rank, serial number. Everything else is locked away behind walls of discipline and willpower.

Volkov cycles through techniques — rapport, confrontation, silence, revelation. None of it works. You are stone.

Finally, he stops. He sits across from you and simply looks at you for a long time.

"You are the strongest subject I have ever encountered," he says quietly. "And I say that with professional admiration and personal frustration."

He closes his folder. "I cannot break you. So I will trust you instead."

He slides the entire folder across the table. MERIDIAN. All of it. Unredacted.

"Read it. Everything. Then decide for yourself."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{cou:3},relationships:{interrogator:2}},
choices:[
{text:'Read it all.',next:'sol_read_file',effects:{stats:{int:2},relationships:{interrogator:2}}},
{text:'"I want Torres here when I read this."',next:'sol_meet_torres',effects:{stats:{cou:1},relationships:{cellmate:2}}},
{text:'Push the folder back. You are done with Volkov.',next:'sol_plan_escape',effects:{stats:{cou:1},relationships:{interrogator:-2}}}
]
},

sol_break_partial:{
text:`The noise. The dark. The cold. It wears you down — not in one blow but in a thousand small cuts.

On what might be the second day — you have lost count — you say something. Not everything. Not the important things. But something. A detail about the convoy route. A name. Crumbs.

Volkov takes the crumbs and gives you water, a blanket, silence. The relief is so intense it almost feels like gratitude. That is the trap, and you know it. But knowing does not make it easier.

"You are not weak," Volkov says. "Everyone has a limit. What matters is what you do next."

He opens his folder.`,
scene:'interrogation_room',mood:'#e17055',characters:['Volkov'],
effects:{stats:{cou:-1},relationships:{interrogator:2}},
choices:[
{text:'You gave them crumbs. Now use their trust to plan your escape.',next:'sol_false_cooperate',effects:{stats:{int:2}}},
{text:'Ask to see Torres. You need an ally.',next:'sol_meet_torres',effects:{stats:{cha:1},relationships:{cellmate:2}}},
{text:'Keep talking. Maybe Volkov is telling the truth about Harlan.',next:'sol_read_file',effects:{stats:{int:1},relationships:{interrogator:2}}}
]
},

sol_conditional_talk:{
text:`"I will listen. But I will not betray my people."

"That is all I ask." Volkov opens the folder. "Here is what I know. Colonel Harlan has been running an off-books intelligence network for eighteen months. Code name: MERIDIAN. Selling classified information to multiple buyers — state actors, private military contractors, organized crime."

He slides documents across the table. Wire transfers. Intercepted communications. A web of money and secrets.

"Your mission was to deliver a master list of the network assets — names, locations, payments. Harlan was consolidating his operation, preparing to disappear. You were the courier."

He pauses. "And then the expendable courier."

Everything he is saying aligns with the doubts you have been carrying since the ambush.`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{int:1},relationships:{interrogator:2},flags:{knows_meridian:true}},
choices:[
{text:'"What do you want me to do?"',next:'sol_propose_deal',effects:{stats:{cha:1},relationships:{interrogator:2}}},
{text:'"I need to verify this. Let me see Torres."',next:'sol_meet_torres',effects:{stats:{int:1},relationships:{cellmate:1}}},
{text:'"Who are you really, Volkov? Who do you work for?"',next:'sol_volkov_agenda',effects:{stats:{per:1},relationships:{interrogator:1}}}
]
},

sol_false_cooperate:{
text:`You start talking — but not really. You feed Volkov half-truths, outdated information, things that sound valuable but lead nowhere. Just enough to buy time and freedom of movement.

It works. The guards relax around you. You get better food. You get to walk the corridor — escorted, but mobile. You map the facility in your head: six cells, two interrogation rooms, a communications center, the main entrance with a vehicle bay.

Torres watches through her cell window as you pass. You tap your thigh twice — a signal from your unit. "Playing along. Stand by."

She blinks once. Understood.

The trap is set. Now you just need the moment.`,
scene:'corridor',mood:'#636e72',characters:[],
effects:{stats:{cha:2,int:1},flags:{false_cooperating:true,memorized_layout:true}},
choices:[
{text:'The moment comes during a guard change. Go.',next:'sol_escape_attempt',effects:{stats:{cou:1}},check:{stat:'per',dc:11},failNext:'sol_escape_caught'},
{text:'Wait for nightfall. Better odds in the dark.',next:'sol_night_escape',effects:{stats:{int:1,per:1}}},
{text:'Volkov leaves the facility briefly. His absence is your window.',next:'sol_volkov_away',effects:{stats:{per:1}}}
]
},

sol_meet_torres:{
text:`They bring Torres to the interrogation room. She is thinner than you remember, dark circles under her eyes, but her gaze is sharp and steady. Volkov stands by the door, watching.

"Five minutes," he says.

Torres sits across from you. She holds your eyes. Then, casually, she scratches her left ear — your unit's signal for "We are being recorded."

"Are you okay?" you ask.

"Alive. You?"

"Same."

She leans forward. Under the table, her hand moves — sign language your unit uses for field communication. Quick, subtle.

CASE SAFE. 200M NORTH OF AMBUSH. OAK TREE. DO NOT TRUST. ESCAPE TONIGHT.`,
scene:'interrogation_room',mood:'#636e72',characters:['Torres','Volkov'],
effects:{relationships:{cellmate:4},flags:{torres_alive:true,case_location:true}},
choices:[
{text:'Sign back: AGREED. WHAT IS THE PLAN.',next:'sol_escape_plan_torres',effects:{stats:{int:1},relationships:{cellmate:2}}},
{text:'Sign back: HANDLER CONTACT. EXTRACTION 48 HOURS.',next:'sol_torres_wait',effects:{stats:{int:1},relationships:{cellmate:1,handler:1}}},
{text:'Ignore the signing. Ask Volkov to leave the room.',next:'sol_volkov_agenda',effects:{stats:{cha:1},relationships:{interrogator:-1}}}
]
},

sol_reveal_torres:{
text:`"Torres has it. She grabbed the case during the ambush and ran."

Volkov's eyes sharpen. "Where did she hide it?"

"I do not know. But she does."

Volkov stands immediately. "Guard. Bring Sergeant Torres." He turns back to you. "If this is true, you have made the right choice."

But as you wait, doubt gnaws at you. Torres trusted you. She hid the case to keep it safe. And you just pointed Volkov straight at her.

When Torres is brought in, her eyes find yours. She reads the situation in a heartbeat. The betrayal on her face is worse than any interrogation technique.`,
scene:'interrogation_room',mood:'#e17055',characters:['Torres','Volkov'],
effects:{stats:{cha:-2},relationships:{cellmate:-5,interrogator:3},flags:{betrayed_torres:true}},
choices:[
{text:'"I am sorry, Kat. But I think Volkov is telling the truth about Harlan."',next:'sol_double_agent_path',effects:{stats:{cha:1},relationships:{cellmate:-1,interrogator:2}}},
{text:'You made a mistake. Try to protect her now.',next:'sol_protect_torres',effects:{stats:{cou:1},relationships:{cellmate:1}}},
{text:'Stay quiet. What is done is done.',next:'sol_double_agent_path',effects:{stats:{int:1},relationships:{interrogator:2}}}
]
},

sol_volkov_agenda:{
text:`"Who are you really, Volkov? Not just a name. Who do you work for?"

Volkov removes his glasses, polishes them, puts them back. The gesture you have come to recognize as his version of honesty.

"I am a senior officer in military counterintelligence. My government — I will not name which one — has been tracking MERIDIAN for two years. We identified Harlan six months ago. The problem is that Harlan has protectors. Powerful people who benefit from his network."

He leans forward. "I captured you because your convoy crossed into territory I control. But I am not your enemy. Harlan is." He pauses. "My superiors want the list to use as leverage — political bargaining chips. I want the list to burn the entire network. We have... different goals."

He is telling you that he might disobey his own people. That is either profound honesty or masterful manipulation.`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{per:2},relationships:{interrogator:2},flags:{volkov_honest:true}},
choices:[
{text:'"Help me and Torres escape. We will get you the list."',next:'sol_propose_deal',effects:{stats:{cha:1},relationships:{interrogator:2}}},
{text:'"What about the third party? The cleanup team?"',next:'sol_who_coming',effects:{stats:{int:1}}},
{text:'"I believe you. But I need Torres to confirm."',next:'sol_meet_torres',effects:{stats:{int:1},relationships:{cellmate:1}}}
]
},

sol_recognize_tactic:{
text:`"You are trying to make me doubt my commanding officer. Classic interrogation technique — isolate the subject from their chain of trust."

Volkov actually smiles. "Yes. It is. And the fact that you recognize it tells me you are well-trained." He leans back. "But consider — recognizing a technique does not invalidate the information delivered through it. I AM trying to make you doubt Harlan. Because you should."

He opens the folder to a new page. "Your convoy route was classified. Only three people had it: you, Harlan, and the mission planner at HQ. The ambush was positioned perfectly along that route. Someone gave it to the attackers."

"The mission planner is in custody. She did not leak the route. Which leaves..."

He does not finish the sentence. He does not need to.`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{int:2},relationships:{interrogator:2}},
choices:[
{text:'The logic is sound. "Show me everything on Harlan."',next:'sol_volkov_deal',effects:{stats:{int:1},relationships:{interrogator:2}}},
{text:'"Even if you are right, that does not make us allies."',next:'sol_cell_think',effects:{stats:{cou:1}}},
{text:'"I need to see Torres."',next:'sol_demand_prisoner',effects:{stats:{cou:1},relationships:{cellmate:1}}}
]
},

sol_doubt_harlan:{
text:`The seed takes root. Harlan DID bypass the chain of command. He DID hand-pick your team. He DID give you a locked case with instructions not to open it.

And the ambush. Professional. Precise. Positioned along a classified route.

You do not want to believe it. Harlan saved your life in Kandahar. He stood by you during the tribunal after the civilian incident. He is the closest thing you have to a mentor.

But the facts do not care about loyalty.

"I need time to think," you tell Volkov.

"You have until tonight. After that, the situation changes."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{per:1,int:1},relationships:{commander:-2}},
choices:[
{text:'Go to your cell. Plan your next move.',next:'sol_cell_think',effects:{stats:{int:1}}},
{text:'"What changes tonight?"',next:'sol_who_coming',effects:{stats:{per:1}}},
{text:'"Let me talk to Torres first."',next:'sol_demand_prisoner',effects:{stats:{cou:1},relationships:{cellmate:1}}}
]
},

sol_who_coming:{
text:`"Who is coming?"

Volkov stands and walks to the camera in the corner. He reaches up and turns it off. The red light dies.

"Harlan's cleanup team. Six operators, private military. They have been tracking this facility for 48 hours. They will be here by nightfall."

He turns back to you. "They are not coming to rescue you. They are coming to kill everyone in this facility — you, Torres, me, and my staff. Then they will sanitize the site and MERIDIAN disappears forever."

His calm is cracking for the first time. "I have twelve personnel, lightly armed. This is an intelligence facility, not a military base. I cannot hold against a trained assault team."

He looks at you directly. "I need your help. And you need mine. Because if we do not work together, none of us survive the night."`,
scene:'interrogation_room',mood:'#e17055',characters:['Volkov'],
effects:{stats:{per:1},relationships:{interrogator:3},flags:{cleanup_arriving:true}},
choices:[
{text:'"Cut us loose. Torres and I will fight alongside you."',next:'sol_alliance',effects:{stats:{cou:2},relationships:{interrogator:3,cellmate:2}}},
{text:'"Give me Torres and a vehicle. We disappear, we get you the list later."',next:'sol_propose_deal',effects:{stats:{cha:1},relationships:{interrogator:1}}},
{text:'"Or I let them come. They kill you. Torres and I take our chances."',next:'sol_cold_calculus',effects:{stats:{int:1},relationships:{interrogator:-3}}}
]
},

sol_honest_answer:{
text:`"Communication equipment. That is what we were told."

"And you believed Colonel Harlan?"

"He was my commanding officer. I had no reason not to."

Volkov nods slowly. "I understand. Loyalty is not a weakness. But blind loyalty is." He opens a new section of the folder. "The case contained a data drive. On that drive is the master list of every asset in the MERIDIAN network. Harlan was not sending communication equipment — he was sending his insurance policy to a buyer."

He taps a photograph. "This buyer. A man named Kirsch. Former intelligence, now private sector. He was going to use the list to blackmail half the intelligence community."

"You were the delivery service. And the ambush was the cancellation."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{cha:1,int:1},relationships:{interrogator:2},flags:{knows_meridian:true}},
choices:[
{text:'"Why cancel his own delivery?"',next:'sol_why_betrayal',effects:{stats:{int:1}}},
{text:'"I need to see Torres. She had the case."',next:'sol_demand_prisoner',effects:{stats:{cou:1},relationships:{cellmate:1}}},
{text:'You need time to think.',next:'sol_cell_think',effects:{stats:{int:1}}}
]
},

sol_turn_tables:{
text:`"What do YOU think was in the case?"

Volkov tilts his head. Surprised, perhaps. "I think it was a data drive containing the MERIDIAN network list. Names, locations, payment records for every covert asset your Colonel Harlan has been running off the books."

"And what would you do with it?"

"Burn the network. Every arms deal, every intelligence trade, every black-site slush fund. Shut it all down."

"And Harlan?"

"Goes to prison. Or worse, depending on how many bodies we find."

He is either telling the truth or he is the best liar you have ever met. And you have met some good liars.`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{int:1},relationships:{interrogator:2},flags:{knows_meridian:true}},
choices:[
{text:'"I believe you. Let us make a deal."',next:'sol_propose_deal',effects:{stats:{cha:1},relationships:{interrogator:3}}},
{text:'"I need more proof before I commit."',next:'sol_volkov_agenda',effects:{stats:{per:1},relationships:{interrogator:1}}},
{text:'"Take me back to my cell. I need to think."',next:'sol_cell_think',effects:{stats:{int:1}}}
]
},

sol_why_betrayal:{
text:`"Why would Harlan ambush his own delivery team?"

Volkov steeples his fingers. "Because the deal changed. Kirsch — the buyer — was arrested by Interpol two weeks before your mission. Harlan found out, but the mission was already in motion. He could not cancel without raising suspicion."

"So he arranged the ambush. Kill the couriers, recover the case, and try again with a different buyer." Volkov pauses. "But something went wrong. Sergeant Torres escaped with the case. You were captured by my people instead of his."

He spreads his hands. "Now Harlan does not have the list. I do not have the list. Torres has the list. And Harlan is sending a team to make sure nobody else ever gets it."

The chess board becomes clear. You, Torres, Volkov, Harlan — four players, one list, and a clock ticking toward midnight.`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{int:2},relationships:{interrogator:2},flags:{full_picture:true}},
choices:[
{text:'"We need to get Torres and get out before the team arrives."',next:'sol_alliance',effects:{stats:{cou:1},relationships:{interrogator:2,cellmate:1}}},
{text:'"I want to make a deal. The list for our freedom."',next:'sol_propose_deal',effects:{stats:{cha:1},relationships:{interrogator:2}}},
{text:'"What if I get the list and take it to MY people instead?"',next:'sol_cold_calculus',effects:{stats:{int:1},relationships:{interrogator:-2}}}
]
},

sol_propose_deal:{
text:`"Here is what I am proposing. You release Torres and me. Give us a vehicle and a head start. We recover the list and deliver it to you at a location of your choosing."

Volkov studies you. "And I am supposed to trust that you will not simply disappear?"

"You have spent days studying me. You know what kind of person I am."

A long silence. Volkov removes his glasses. Puts them back. "I will counter-offer. I release you both. I give you a vehicle, a radio, and 24 hours. You recover the list and deliver it to me. In return, I give you everything I have on Harlan — enough to ensure he faces a military tribunal."

He extends his hand. "Do we have an agreement?"`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{relationships:{interrogator:3}},
choices:[
{text:'Shake his hand. The deal is made.',next:'sol_deal_made',effects:{stats:{cha:2},relationships:{interrogator:3}}},
{text:'"Add one thing. Guarantee our safety from prosecution."',next:'sol_deal_made',effects:{stats:{int:1},relationships:{interrogator:2}}},
{text:'"No deal. I will do this my own way."',next:'sol_plan_escape',effects:{stats:{cou:1},relationships:{interrogator:-3}}}
]
},

sol_leverage:{
text:`"Sounds like you need me more than I need you."

Volkov's jaw tightens. "Perhaps. But consider that the people coming will not distinguish between you and me. We are both obstacles to them."

"Then cut me loose. Give me a weapon. Let me and Torres fight our way out — and I will consider helping you afterward."

Volkov stands. He paces. For the first time, he looks uncertain. "You are asking me to trust a prisoner."

"You are asking a prisoner to trust an interrogator. We are both taking a leap."

He stops pacing. Nods once. "All right."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{cha:2},relationships:{interrogator:2}},
choices:[
{text:'Seal the alliance. Fight together.',next:'sol_alliance',effects:{stats:{cou:1},relationships:{interrogator:2}}},
{text:'Get Torres. Plan the escape together.',next:'sol_escape_plan_torres',effects:{stats:{int:1},relationships:{cellmate:2}}},
{text:'Take the weapon and go. No alliance, no deals.',next:'sol_solo_escape',effects:{stats:{cou:2},relationships:{interrogator:-3}}}
]
},

sol_cold_calculus:{
text:`You consider letting Harlan's team come. They kill Volkov. In the chaos, you and Torres slip out. You recover the list yourselves and take it to your own people.

It is cold. Ruthless. And it might work.

But Volkov sees it in your eyes. "You are calculating whether my death benefits you."

"It crossed my mind."

"Let me add a variable to your equation. If I die, my organization assumes you killed me. They will hunt you and Torres until they find you. And they are very, very good at finding people."

He leans close. "Also — and this is the variable I think you have not considered — I am the only person in this building who knows the radio frequencies Harlan's team is using. If you want to know when they are coming and from which direction, you need me alive."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{int:1},relationships:{interrogator:-1}},
choices:[
{text:'"Fine. We work together."',next:'sol_alliance',effects:{stats:{int:1},relationships:{interrogator:2}}},
{text:'"Give me the frequencies and I will think about it."',next:'sol_alliance',effects:{stats:{cha:1},relationships:{interrogator:1}}},
{text:'You do not need him. Plan your own escape.',next:'sol_plan_escape',effects:{stats:{cou:1},relationships:{interrogator:-2}}}
]
},

sol_read_file:{
text:`You read everything. Every page. Every photograph. Every wire transfer receipt.

The picture is damning. Harlan's network spans three continents. Arms flowing to conflict zones. Intelligence traded like currency. Dead agents, burned assets, blown operations — all traced back to one man.

And there, on the last page, a list of the team members Harlan selected for the courier mission. Your name. Torres. Kowalski. Chen. Park.

Next to each name, a single word: EXPENDABLE.

You close the folder. Your hands are steady, but something inside you has broken and reformed into something harder.

"I believe you," you say.`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{int:2,per:1},relationships:{interrogator:3,commander:-5},flags:{full_picture:true,knows_meridian:true}},
choices:[
{text:'"Let us end this. Together."',next:'sol_alliance',effects:{stats:{cou:1},relationships:{interrogator:3}}},
{text:'"I want Torres. And I want a weapon."',next:'sol_alliance',effects:{stats:{cou:1},relationships:{cellmate:1}}},
{text:'"I will get you the list. But on my terms."',next:'sol_propose_deal',effects:{stats:{cha:1},relationships:{interrogator:2}}}
]
},

sol_torres_warning:{
text:`Torres keeps her voice barely above a whisper. "Volkov is not just an interrogator. I found documents in my cell — left deliberately, I think. He is former SVR. Russian foreign intelligence. He was burned by his own agency and has been operating independently."

"What does he really want?"

"Leverage. The MERIDIAN list is worth millions to the right buyer. He says he wants to burn the network, but a burned spy with no agency backing needs money to survive." She pauses. "He might do the right thing. Or he might auction it to the highest bidder."

She grabs your arm. "We need to get out, get the case, and take it to someone we can actually trust."`,
scene:'interrogation_room',mood:'#636e72',characters:['Torres'],
effects:{stats:{per:2},relationships:{cellmate:3},flags:{volkov_truth:true}},
choices:[
{text:'"Then we escape tonight."',next:'sol_escape_plan_torres',effects:{stats:{cou:1},relationships:{cellmate:2}}},
{text:'"Or we use Volkov. Let him think we are cooperating, then disappear."',next:'sol_false_cooperate',effects:{stats:{int:1,cha:1}}},
{text:'"What if we give Volkov the list but keep a copy for ourselves?"',next:'sol_double_agent_path',effects:{stats:{int:2}}}
]
},

sol_torres_extraction:{
text:`Torres processes this quickly. Military mind — adapt, overcome.

"48 hours might be too long. New people arrived today. Not Volkov's — different uniforms, different attitude. I think Harlan found us."

"Can you hold out?"

"I will hold out until you get us out of here." Her jaw sets. "But if the extraction window opens, we take it. Both of us. No one gets left behind."

Volkov knocks on the door. "Time."

Torres stands. As she passes you, she squeezes your hand once. Hard.

"Stay alive," she whispers.`,
scene:'interrogation_room',mood:'#636e72',characters:['Torres','Volkov'],
effects:{relationships:{cellmate:3},flags:{torres_extraction:true}},
choices:[
{text:'Work with Volkov to prepare for the cleanup team.',next:'sol_alliance',effects:{stats:{int:1},relationships:{interrogator:2}}},
{text:'Wait for the extraction. Hunker down.',next:'sol_wait_extraction',effects:{stats:{cou:1},relationships:{handler:2}}},
{text:'Do not wait. Escape tonight.',next:'sol_escape_plan_torres',effects:{stats:{cou:1},relationships:{cellmate:2}}}
]
},

sol_torres_wait:{
text:`Torres frowns when you sign EXTRACTION 48 HOURS. She signs back: TOO LONG. CLEANUP TEAM CLOSE.

You sign: TRUST THE HANDLER.

She hesitates, then nods reluctantly. As Volkov re-enters, you both fall silent.

"Touching reunion," Volkov says. "Now — shall we discuss business?"

You and Torres exchange a look. For now, you play along. Buy time. Keep Volkov talking, keep the guards relaxed, keep counting the hours.

48 hours. You just have to survive.`,
scene:'interrogation_room',mood:'#636e72',characters:['Torres','Volkov'],
effects:{relationships:{cellmate:2,handler:2}},
choices:[
{text:'Feed Volkov information to keep him engaged.',next:'sol_false_cooperate',effects:{stats:{cha:1},relationships:{interrogator:1}}},
{text:'Negotiate — information for better conditions.',next:'sol_conditional_talk',effects:{stats:{int:1},relationships:{interrogator:1}}},
{text:'Stall. Every hour is an hour closer to extraction.',next:'sol_wait_extraction',effects:{stats:{cou:1}}}
]
},

sol_alliance:{
text:`The alliance is made. Volkov cuts your ties, returns your boots, and hands you a sidearm. He does the same for Torres, who looks at you with guarded relief.

"The compound has one road in and one road out," Volkov says, spreading a map on the interrogation table. "My perimeter team reports movement in the tree line. They will hit us at nightfall — 2100 hours, most likely. Standard assault pattern."

He points to the map. "I have two options and I need your tactical assessment. We can fortify the compound and fight, or we can evacuate now and sacrifice the facility."

Torres speaks for the first time to Volkov. "There is a third option. We let them in — and trap them inside."

Volkov looks at her with something like surprise. Then respect. "Go on."`,
scene:'compound',mood:'#636e72',characters:['Volkov','Torres'],
effects:{stats:{cou:1},relationships:{interrogator:3,cellmate:3}},
choices:[
{text:'Support Torres. Set a trap.',next:'sol_set_trap',effects:{stats:{int:1},relationships:{cellmate:2}}},
{text:'Fortify and fight. Meet them head-on.',next:'sol_fortify',effects:{stats:{str:1,cou:1}},check:{stat:'cou',dc:11},failNext:'sol_fight_desperate'},
{text:'Evacuate. Live to fight another day.',next:'sol_evacuate',effects:{stats:{int:1}}}
]
},

sol_plan_escape:{
text:`You and Torres coordinate through the wall — morse code, patient and precise.

The facility has six cells, two interrogation rooms, a comms center, and a vehicle bay. Guard rotation every four hours. Three guards on night shift. The weakest point is the vehicle bay — one guard, one camera, and a roller door that can be opened manually.

Torres adds: "The ventilation shaft in my cell connects to the corridor ceiling. Too small for a person, but I can pass small objects through."

You have a rough plan forming: neutralize the night guard during the 0200 rotation gap, reach the vehicle bay, hotwire one of the trucks, and drive.

The question is timing. And what to do about Volkov.`,
scene:'cell',mood:'#2d3436',characters:[],
effects:{stats:{int:2},relationships:{cellmate:2}},
choices:[
{text:'Escape tonight. Leave Volkov behind.',next:'sol_night_escape',effects:{stats:{cou:1}}},
{text:'Tell Volkov. Bring him into the plan.',next:'sol_alliance',effects:{stats:{cha:1},relationships:{interrogator:2}}},
{text:'Wait for the right moment. Patience is a weapon too.',next:'sol_wait_chaos',effects:{stats:{per:1}}}
]
},

sol_escape_plan_torres:{
text:`Torres outlines the plan. She has been observing for days — counting guards, timing rotations, mapping blind spots.

"The young guard — Petrov — takes the night shift alone from 0200 to 0400. He smokes by the vehicle bay door. When he steps outside, there is a 90-second window where the corridor is unmonitored."

"Can we get the cell doors open?"

"Mine has a fault in the lock mechanism. I have been working it for two days. Yours — if you have a shim, you can pop the zip ties and work the door hinge. These cells were built for interrogation, not long-term holding. The hinges are on the inside."

She looks at you steadily. "Tonight. 0200. Are you in?"`,
scene:'cell',mood:'#2d3436',characters:['Torres'],
effects:{stats:{int:1},relationships:{cellmate:3}},
choices:[
{text:'"I am in. 0200. Let us go home."',next:'sol_night_escape',effects:{stats:{cou:2},relationships:{cellmate:2}}},
{text:'"What about Volkov? He could help or hunt us."',next:'sol_alliance',effects:{stats:{int:1},relationships:{interrogator:1}}},
{text:'"The cleanup team might hit before 0200. We need a backup plan."',next:'sol_wait_chaos',effects:{stats:{int:1}}}
]
},

sol_protect_torres:{
text:`"Leave her out of this. She does not know anything."

Volkov raises an eyebrow. "You just told me she has the case."

"I lied. I have the case. I hid it before I was captured." You meet Torres's eyes. "She was not involved."

Torres stares at you. The betrayal fades — replaced by confusion, then understanding. You are trying to undo the damage. Poorly, but trying.

Volkov looks between you. "One of you is lying. I am patient enough to find out which." He stands. "Take them both back to their cells. Separately."

As the guards lead you away, Torres catches your eye. She taps her thigh twice. The unit signal for "I understand."

You are not forgiven. But you are not abandoned either.`,
scene:'interrogation_room',mood:'#636e72',characters:['Torres','Volkov'],
effects:{stats:{cou:1},relationships:{cellmate:1,interrogator:-1}},
choices:[
{text:'Back in the cell, plan the escape. Make this right.',next:'sol_plan_escape',effects:{stats:{int:1},relationships:{cellmate:1}}},
{text:'Wait for Volkov to summon you again. Play the long game.',next:'sol_morning_interrogation',effects:{stats:{cha:1}}},
{text:'Tap the wall. Apologize to Torres.',next:'sol_morse_respond',effects:{stats:{cha:1},relationships:{cellmate:2}}}
]
},

sol_double_agent_path:{
text:`You commit to the longest game. Cooperate with Volkov — feed him enough truth to build trust, enough lies to protect the essentials. Meanwhile, work with Torres through the walls. Build your escape. Keep your options open.

Days blur together. Interrogation sessions become conversations. Volkov shares more than he should — or exactly as much as he intends. You share carefully curated truths.

You learn the compound layout. You learn the guard schedules. You learn that Volkov has a satellite phone in his office and a vehicle key in his desk drawer.

And you learn something Volkov does not want you to know: he has been in contact with a buyer. Not a government. A private buyer, willing to pay seven figures for the MERIDIAN list.

Torres was right. Volkov has his own agenda.

Now you have to decide — expose him, use him, or beat him to the prize.`,
scene:'compound',mood:'#636e72',characters:['Volkov','Torres'],
effects:{stats:{int:2,cha:1},relationships:{interrogator:1},flags:{double_agent:true}},
choices:[
{text:'Confront Volkov. Force the truth.',next:'sol_confront_volkov',effects:{stats:{cou:1},relationships:{interrogator:-2}}},
{text:'Say nothing. Use the information to escape and take the list.',next:'sol_night_escape',effects:{stats:{int:1}}},
{text:'Become the broker. Offer the list to the highest bidder yourself.',next:'sol_ending_broker',effects:{stats:{cha:2,int:1}}}
]
},

sol_confront_volkov:{
text:`You wait until you are alone with Volkov. Then you lay it out.

"I know about the buyer. I know you have been shopping the list to a private party. Seven figures."

Volkov goes very still. His coffee cup pauses. Then, slowly, he sets it down.

"How did you—" He stops. Composes himself. "You are better than I gave you credit for."

"The question is simple, Volkov. Are you going to burn the network like you said? Or are you going to sell it?"

He is quiet for a long time. When he speaks, his voice is different. Stripped of performance. "I have been a spy for thirty years. I have nothing. No pension. No country that will claim me. The list is my retirement."

He meets your eyes. "But I do not want blood on my retirement. If you can give me another way out, I will take it."`,
scene:'interrogation_room',mood:'#636e72',characters:['Volkov'],
effects:{stats:{per:1,cou:1},relationships:{interrogator:1}},
choices:[
{text:'"Help me escape. I will make sure you are included in any deal."',next:'sol_deal_made',effects:{stats:{cha:1},relationships:{interrogator:3}}},
{text:'"You do not get a golden parachute. The list goes to the right people."',next:'sol_night_escape',effects:{stats:{cou:1},relationships:{interrogator:-3}}},
{text:'"We split it. Half the list to authorities, half to your buyer."',next:'sol_ending_broker',effects:{stats:{int:1}}}
]
},

sol_set_trap:{
text:`Torres's plan is elegant. Let the cleanup team breach the facility, funnel them through the corridor chokepoint, then collapse the entry behind them with the emergency fire doors. Trapped between steel doors in a concrete corridor, their weapons and training become irrelevant.

You spend the afternoon preparing. Volkov's staff is skeptical but efficient. By 2000 hours, the trap is set.

At 2100, exactly as predicted, the perimeter sensors trigger. Six figures moving through the tree line. Professional. Silent.

They breach the vehicle bay door with a shaped charge. Flood into the corridor.

Torres hits the fire doors. CLANG. CLANG. Sealed.

"Drop your weapons," you announce over the intercom. "You are contained."

Silence. Then gunfire — wild, panicked, bouncing off concrete walls. Then it stops. They know they are trapped.

Over the radio, a voice: "This is Strike Lead. We have authority from Colonel Harlan, United States Army. Release us immediately."

Volkov picks up the radio. "Colonel Harlan has no authority here. But I have a recording of this transmission. Thank you."`,
scene:'compound',mood:'#636e72',characters:['Volkov','Torres'],
effects:{stats:{int:2,cou:1},relationships:{interrogator:3,cellmate:3},flags:{trapped_team:true}},
choices:[
{text:'Interrogate the team leader. Get confirmation of Harlan ordering the hit.',next:'sol_ending_expose',effects:{stats:{int:1}}},
{text:'Take the team radio. Contact your handler for extraction.',next:'sol_ending_rescue',effects:{stats:{per:1},relationships:{handler:2}}},
{text:'Let Volkov handle it. Take Torres and go get the list.',next:'sol_deal_made',effects:{stats:{cou:1}}}
]
},

sol_fortify:{
text:`You choose to fight. Head-on. Fortify the compound and meet the assault team with everything you have.

You organize Volkov's people — most are intelligence officers, not soldiers, but they can shoot. You position them at windows and doorways, set up crossfire lanes, improvise barricades from furniture and filing cabinets.

Torres takes the high ground — the communications tower roof, with a scoped rifle Volkov produced from an arms locker.

At 2100, they come. Six professionals against your ragtag defense. The firefight is brutal, chaotic, and terrifyingly loud.

You hold. Barely. Two of Volkov's staff are wounded. One of the attackers goes down. The rest fall back to regroup.

In the lull, Torres's voice crackles over the radio. "Two retreating east. Two holding position northwest. One down. One unaccounted for."

One unaccounted for. That is the dangerous one.`,
scene:'compound',mood:'#e17055',characters:['Volkov','Torres'],
effects:{stats:{cou:2,str:1},relationships:{interrogator:2,cellmate:2}},
choices:[
{text:'Find the missing operator. Hunt them before they hunt you.',next:'sol_ending_expose',effects:{stats:{per:1,cou:1}},check:{stat:'per',dc:12},failNext:'sol_fight_desperate'},
{text:'Hold position. Wait for dawn.',next:'sol_ending_rescue',effects:{stats:{cou:1}}},
{text:'Call for extraction now. The fight is won enough.',next:'sol_ending_rescue',effects:{stats:{int:1},relationships:{handler:2}}}
]
},

sol_fight_desperate:{
text:`The fight goes sideways. The unaccounted operator flanked the compound and hit the generator. The lights go out. In the darkness, discipline collapses.

Gunfire everywhere. Shouting. Someone screams. You grab Torres and pull her toward the vehicle bay, firing blind behind you.

A round clips your shoulder. Pain like fire. You keep moving.

The vehicle bay. A truck. Torres throws herself into the driver's seat. The engine turns over. You pile in, bleeding, and she floors it through the roller door and into the night.

Behind you, the compound lights up with muzzle flashes and flames.

Volkov is still in there. You do not look back.`,
scene:'outside',mood:'#e17055',characters:['Torres'],
effects:{stats:{str:-1,cou:1},relationships:{cellmate:2,interrogator:-2}},
choices:[
{text:'Drive to the ambush site. Recover the case.',next:'sol_deal_made',effects:{stats:{cou:1}}},
{text:'Drive until you find a phone. Call the handler.',next:'sol_ending_rescue',effects:{stats:{int:1},relationships:{handler:2}}},
{text:'Torres is hurt too. Find shelter first.',next:'sol_ending_rescue',effects:{stats:{cha:1},relationships:{cellmate:2}}}
]
},

sol_evacuate:{
text:`"We leave. Now. The facility is not worth dying for."

Volkov agrees — reluctantly. The evacuation is fast and disciplined. Two trucks, all personnel, all documents. Torres rides with you.

As the convoy pulls away from the compound, you see lights in the tree line. Headlights. The cleanup team arriving at an empty facility.

"They will find nothing," Volkov says. "I wiped the servers."

You are free. Mobile. But the MERIDIAN list is still out there — buried under an oak tree, 200 meters north of where your world fell apart.`,
scene:'outside',mood:'#636e72',characters:['Volkov','Torres'],
effects:{stats:{int:1},relationships:{interrogator:2,cellmate:2}},
choices:[
{text:'Direct the convoy to the ambush site. Recover the case.',next:'sol_deal_made',effects:{stats:{cou:1}}},
{text:'Split off from Volkov. Take Torres and disappear.',next:'sol_ending_escape',effects:{stats:{int:1},relationships:{cellmate:2}}},
{text:'Stay with Volkov. Finish this together.',next:'sol_ending_expose',effects:{stats:{cha:1},relationships:{interrogator:2}}}
]
},

sol_night_escape:{
text:`0200 hours. The compound is quiet. You slip the loosened zip tie, ease the hinge pin from your cell door, and step into the corridor.

The young guard — Petrov — is outside smoking, exactly as Torres predicted. His cigarette tip glows by the vehicle bay door.

Torres materializes from her cell like a ghost. She moves to your side without a sound. Together, you creep down the corridor toward the vehicle bay.

The keys are in a lockbox by the bay entrance. Torres picks the lock in under a minute. You take the nearest truck — a military surplus Land Cruiser.

"Go?" Torres whispers.

"Go."

She starts the engine. You hold your breath. Then you are moving — through the roller door, into the night, gravel crunching under tires.

No alarms. No pursuit. Just the dark and the road and the cold stars.

You are free.`,
scene:'outside',mood:'#2d3436',characters:['Torres'],
effects:{stats:{cou:2,per:1},relationships:{cellmate:3}},
choices:[
{text:'Drive to the ambush site. Get the case.',next:'sol_recover_case',effects:{stats:{int:1}}},
{text:'Drive until you find civilization. Call the handler.',next:'sol_ending_rescue',effects:{stats:{int:1},relationships:{handler:2}}},
{text:'Disappear. New names, new lives, the list stays buried.',next:'sol_ending_escape',effects:{stats:{cou:1}}}
]
},

sol_wait_chaos:{
text:`You wait. And when chaos comes, you are ready.

The cleanup team hits at 2100. Explosions, gunfire, shouting. The compound erupts into a warzone. Guards sprint past your cell. Smoke seeps under the door.

In the confusion, nobody is watching the prisoners. You pop the tie, work the hinge, and step into a corridor filled with smoke and panic.

Torres is already out — she meets you at the intersection, eyes sharp, bleeding from a cut on her forehead.

"This way. Vehicle bay."

You run.`,
scene:'corridor',mood:'#e17055',characters:['Torres'],
effects:{stats:{per:2,cou:1},relationships:{cellmate:2}},
choices:[
{text:'Straight to the vehicles. Do not stop for anything.',next:'sol_recover_case',effects:{stats:{cou:1}}},
{text:'Grab weapons first. The armory is on the way.',next:'sol_armed_escape',effects:{stats:{str:1}},check:{stat:'per',dc:11},failNext:'sol_escape_caught'},
{text:'Find Volkov. He has information you need.',next:'sol_find_volkov_chaos',effects:{stats:{int:1},relationships:{interrogator:1}}}
]
},

sol_armed_escape:{
text:`The armory door is hanging open — someone grabbed weapons in a hurry and did not lock up. You take two sidearms and a compact submachine gun. Torres grabs a rifle and extra magazines.

Armed and moving, you cut through the compound toward the vehicle bay. Two of the cleanup team operators round a corner — they are not expecting prisoners with weapons.

Torres drops the first one with a clean shot. You suppress the second until he retreats. The corridor is clear.

The vehicle bay. A truck. Keys in the ignition — someone was about to evacuate.

"Get in," Torres says, already behind the wheel.

You pile in. She drives through the bay door at speed, ripping it off its track. The night swallows you.

Behind you: fire, gunshots, the sound of a world collapsing. Ahead: the road. The list. The truth.`,
scene:'outside',mood:'#e17055',characters:['Torres'],
effects:{stats:{str:1,cou:1},relationships:{cellmate:2},flags:{armed:true}},
choices:[
{text:'Head for the ambush site. Recover the MERIDIAN list.',next:'sol_recover_case',effects:{stats:{int:1}}},
{text:'Find a radio frequency. Contact the handler.',next:'sol_ending_rescue',effects:{stats:{per:1},relationships:{handler:2}}},
{text:'Keep driving. Put distance between you and everyone.',next:'sol_ending_escape',effects:{stats:{cou:1}}}
]
},

sol_find_volkov_chaos:{
text:`You find Volkov in the communications room, burning files. His suit jacket is off, sleeves rolled up. He has a pistol on the desk.

"You are free," he says without surprise. "Smart."

"Come with us. The facility is lost."

He hesitates. Then grabs a hard drive from the server rack and pockets it. "The Harlan evidence. Insurance."

The three of you — former interrogator, former prisoners — run through the burning compound together. An unlikely alliance forged in fire and necessity.

The vehicle bay. One truck remaining. Torres drives. Volkov navigates. You ride shotgun with a borrowed weapon.

Into the night. Together.`,
scene:'outside',mood:'#e17055',characters:['Volkov','Torres'],
effects:{stats:{int:1,cou:1},relationships:{interrogator:3,cellmate:2}},
choices:[
{text:'Head for the ambush site. All three of you.',next:'sol_recover_case',effects:{stats:{int:1}}},
{text:'Head for the nearest town. Regroup, plan, survive.',next:'sol_ending_expose',effects:{stats:{int:1}}},
{text:'Let Volkov guide you to a safe house he knows.',next:'sol_ending_expose',effects:{stats:{per:1},relationships:{interrogator:2}}}
]
},

sol_ambush_guard:{
text:`The guard comes to check on you during the commotion. You are ready — pressed flat against the wall beside the door.

He opens it. You strike — hard, fast, precise. An elbow to the throat, a knee to the groin, and he goes down. You grab his keys and his weapon.

Torres is already banging on her door. You unlock it. She steps out, eyes blazing.

"Took you long enough."

"You are welcome."

The corridor is chaos. Smoke, shouting, distant gunfire. The cleanup team is here — and the compound is coming apart.`,
scene:'corridor',mood:'#e17055',characters:['Torres'],
effects:{stats:{str:2,cou:1},relationships:{cellmate:2},flags:{armed:true}},
choices:[
{text:'Fight through to the vehicle bay.',next:'sol_armed_escape',effects:{stats:{cou:1}}},
{text:'Use the chaos as cover. Stealth escape.',next:'sol_recover_case',effects:{stats:{per:1}}},
{text:'Find Volkov first.',next:'sol_find_volkov_chaos',effects:{stats:{int:1},relationships:{interrogator:1}}}
]
},

sol_ambush_fail:{
text:`The guard is faster than you expected. He sidesteps your lunge and slams the door shut. The lock clicks. You hear him radio for backup.

"Prisoner attempted escape. Cell four. Send reinforcements."

Two more guards arrive. They are not gentle this time. They pin you down and add a second set of restraints — wrists AND ankles.

You are more bound than before. But the chaos outside is still happening. The compound is still under assault. The guards are distracted, scared, pulled in too many directions.

Through the wall, Torres taps urgently: S-I-T T-I-G-H-T. I H-A-V-E A P-L-A-N.`,
scene:'cell',mood:'#e17055',characters:[],
effects:{stats:{str:-1},relationships:{cellmate:1}},
choices:[
{text:'Wait for Torres. Trust her.',next:'sol_wait_chaos',effects:{stats:{cou:1},relationships:{cellmate:2}}},
{text:'Scream for Volkov. He might be your best option.',next:'sol_demand_volkov',effects:{stats:{cha:1},relationships:{interrogator:1}}},
{text:'Work the new restraints. You will not give up.',next:'sol_wait_chaos',effects:{stats:{str:1}}}
]
},

sol_demand_volkov:{
text:`"VOLKOV! I know about the cleanup team! We need to talk — NOW!"

Silence. Then footsteps. Fast. The door opens — Volkov, disheveled, pistol in hand.

"How do you know about—" He stops. "Never mind. Come with me."

He cuts your restraints and hands you a weapon. "The facility is under attack. Six armed operatives. My people are outnumbered. I need every gun I can get."

He looks at you — really looks. Not interrogator to subject. Human to human.

"Will you fight?"`,
scene:'corridor',mood:'#e17055',characters:['Volkov'],
effects:{stats:{cou:1},relationships:{interrogator:2}},
choices:[
{text:'"Get Torres. Then yes."',next:'sol_alliance',effects:{stats:{cou:1},relationships:{cellmate:1,interrogator:2}}},
{text:'"Give me a vehicle and we are gone. Your fight, not mine."',next:'sol_night_escape',effects:{stats:{int:1},relationships:{interrogator:-2}}},
{text:'"Fight first, talk later."',next:'sol_fortify',effects:{stats:{cou:2,str:1},relationships:{interrogator:2}}}
]
},

sol_solo_escape:{
text:`You take the weapon and go. No alliances. No deals. No trust.

The corridor is a gauntlet — guards confused by your freed status, unsure whether to stop you. You move with authority, weapon visible but not threatening. Volkov's people let you pass — for now.

The vehicle bay. A truck with keys in the ignition. You are in and driving before anyone realizes what is happening.

But Torres is still inside.`,
scene:'outside',mood:'#2d3436',characters:[],
effects:{stats:{cou:2},relationships:{cellmate:-3,interrogator:-3}},
choices:[
{text:'Go back for Torres. You cannot leave her.',next:'sol_night_escape',effects:{stats:{cou:2},relationships:{cellmate:2}}},
{text:'Drive to the ambush site. Recover the list alone.',next:'sol_ending_sacrifice',effects:{stats:{int:1}}},
{text:'Keep driving. Save yourself.',next:'sol_ending_escape',effects:{stats:{cou:1}}}
]
},

sol_solo_escape_early:{
text:`You grab the guard's keycard in the chaos, shove past Volkov, and sprint for the corridor. The keycard beeps through two doors. A third. The vehicle bay.

A truck. Keys in the visor. You gun the engine and blast through the roller door. Behind you, shouting. A single gunshot — it pings off the tailgate.

Then you are on the road. Alone. Free.

But Torres is still in there. And the list is still out there. And Harlan is still breathing.`,
scene:'outside',mood:'#2d3436',characters:[],
effects:{stats:{per:1,cou:1},relationships:{cellmate:-3}},
choices:[
{text:'Circle back. You have to get Torres.',next:'sol_night_escape',effects:{stats:{cou:2},relationships:{cellmate:2}}},
{text:'Head for the ambush site. Recover the list solo.',next:'sol_ending_sacrifice',effects:{stats:{int:1}}},
{text:'Drive. Put as much distance as possible between you and this nightmare.',next:'sol_ending_escape',effects:{stats:{cou:1}}}
]
},

sol_escape_fail_early:{
text:`Volkov was right about the math. You make it ten meters down the corridor before three guards converge, weapons drawn. The look on their faces says they will shoot.

You lower the weapon. Hands up.

They bring you back to the interrogation room. Volkov is still there, still sitting, still calm.

"Feel better?" he asks.

He is infuriating. But he is not wrong — you needed to try.

"Now that that is out of your system," he says, "shall we have an actual conversation?"`,
scene:'interrogation_room',mood:'#e17055',characters:['Volkov'],
effects:{stats:{str:-1,cou:1},relationships:{interrogator:-1}},
choices:[
{text:'"Fine. Talk."',next:'sol_conditional_talk',effects:{stats:{cha:1},relationships:{interrogator:1}}},
{text:'Stone wall. You will find another way.',next:'sol_silence',effects:{stats:{cou:1}}},
{text:'"I want to see Torres. Then I will talk."',next:'sol_demand_prisoner',effects:{stats:{cou:1},relationships:{cellmate:1}}}
]
},

sol_escape_attempt:{
text:`The guard change. A 90-second window. You and Torres move like shadows through the corridor, past the empty guard post, into the vehicle bay.

But the camera. You forgot the camera.

An alarm blares. Red lights. Footsteps pounding.

Torres grabs a truck. "GET IN!"

You pile in. She floors it. The roller door is still closed — the truck hits it at 40 kilometers per hour. Metal screams, buckles, tears. You punch through into the night.

Gunfire behind you. A round shatters the rear window. Then you are on the road, in the dark, and the compound is shrinking in the mirror.`,
scene:'outside',mood:'#e17055',characters:['Torres'],
effects:{stats:{cou:1,str:1},relationships:{cellmate:2}},
choices:[
{text:'Drive to the ambush site.',next:'sol_recover_case',effects:{stats:{int:1}}},
{text:'Find the nearest phone. Call the handler.',next:'sol_ending_rescue',effects:{stats:{per:1},relationships:{handler:2}}},
{text:'Drive until dawn. Disappear.',next:'sol_ending_escape',effects:{stats:{cou:1}}}
]
},

sol_escape_caught:{
text:`The escape goes wrong at the worst moment. A guard rounds the corner as you reach the vehicle bay. He raises his weapon. You raise yours.

Standoff.

Then Torres, from behind you: "Drop it. We are leaving."

The guard's radio crackles. More coming. You have seconds.

Torres fires — not at the guard, at the ceiling light. Darkness. You rush the guard, drive him into the wall, and take his keys.

But the alarm is sounding now. Red lights spinning. The compound is waking up.

"Move! Now!" Torres pulls you toward the truck.`,
scene:'corridor',mood:'#e17055',characters:['Torres'],
effects:{stats:{cou:1},relationships:{cellmate:2}},
choices:[
{text:'Truck. Floor it. Go.',next:'sol_escape_attempt',effects:{stats:{cou:1}}},
{text:'The compound is surrounded by forest. Go on foot.',next:'sol_recover_case',effects:{stats:{str:1,per:1}}},
{text:'Back to the cells. Abort. Regroup.',next:'sol_wait_chaos',effects:{stats:{int:1}}}
]
},

sol_volkov_away:{
text:`Volkov leaves the compound in an armored SUV at 1400 hours. Meeting someone, the guards say. He will be back by evening.

This is your window.

The guard detail is lighter without Volkov. The young one — Petrov — is on duty. He looks nervous without his boss.

Torres catches your eye through her cell slot. She nods. Now.

You work the door. The hinge pin you have been loosening for days slides out. The door swings inward, quiet on its remaining hinge.

The corridor is empty. Torres is already working her door. Together, you have maybe twenty minutes before anyone notices.`,
scene:'corridor',mood:'#636e72',characters:['Torres'],
effects:{stats:{per:2},relationships:{cellmate:2}},
choices:[
{text:'Fast exit. Vehicle bay, truck, gone.',next:'sol_night_escape',effects:{stats:{cou:1}}},
{text:'Hit the communications room first. Grab evidence.',next:'sol_find_volkov_chaos',effects:{stats:{int:1}}},
{text:'Find Petrov. He might be willing to help — or easy to neutralize.',next:'sol_guard_petrov',effects:{stats:{cha:1}}}
]
},

sol_guard_petrov:{
text:`You find Petrov in the break room, hands wrapped around a cup of tea, looking miserable. He startles when you appear — then freezes when he sees Torres behind you.

"Please," he says immediately. "I am just a conscript. I did not choose this posting."

Torres covers the door while you talk to him.

"We are not going to hurt you. But we are leaving. You can help us and we forget your face. Or you can try to stop us."

He does not try to stop you. He gives you the vehicle bay codes, a set of keys, and points to the back road that avoids the main checkpoint.

"Volkov is a good man," Petrov says as you leave. "Complicated. But good."

Maybe. You will decide that later.`,
scene:'corridor',mood:'#636e72',characters:['Torres'],
effects:{stats:{cha:2},relationships:{cellmate:1,guard:3}},
choices:[
{text:'Take the back road. Clean escape.',next:'sol_recover_case',effects:{stats:{per:1}}},
{text:'Thank Petrov and go.',next:'sol_recover_case',effects:{stats:{cha:1},relationships:{guard:2}}},
{text:'Tie Petrov up so he does not get punished for letting you go.',next:'sol_recover_case',effects:{stats:{int:1},relationships:{guard:1}}}
]
},

sol_recover_case:{
text:`The ambush site is exactly as Torres described — a mountain road, still scarred with tire tracks and bullet holes. Two weeks of weather have not erased what happened here.

Torres leads you 200 meters north, through pine trees, to an old oak with a distinctive split trunk. She drops to her knees and digs.

The case. Metal, locked, still intact. She brushes off the dirt and sets it between you.

"This is it," she says. "Everything Harlan sold. Every name, every deal, every drop of blood."

The weight of it is more than physical. This case can bring down a corrupt colonel, expose an arms network, save lives — or make someone very rich.

What you do with it defines who you are.`,
scene:'outside',mood:'#636e72',characters:['Torres'],
effects:{stats:{int:1},relationships:{cellmate:2},flags:{has_case:true}},
choices:[
{text:'Take it to your handler. Let the chain of command sort it out.',next:'sol_ending_rescue',effects:{stats:{cou:1},relationships:{handler:3}}},
{text:'Give it to Volkov. He has the infrastructure to expose the network.',next:'sol_ending_expose',effects:{stats:{int:1},relationships:{interrogator:3}}},
{text:'Destroy it. Nobody gets it. The secrets die here.',next:'sol_ending_sacrifice',effects:{stats:{cou:2}}}
]
},

sol_deal_made:{
text:`The deal is sealed. You lead Volkov — or his people — to the ambush site. Torres digs up the case. The MERIDIAN list changes hands.

In return, Volkov gives you everything: the evidence against Harlan, the intercepted communications, the wire transfers. Enough to guarantee a military tribunal.

He also gives you a vehicle, clean passports, and a radio frequency to reach him if you need to.

"For what it is worth," Volkov says as you prepare to leave, "you handled yourself better than anyone I have interrogated in twenty years. I hope we never meet in a room like that again."

He extends his hand. This time it is not a negotiation. Just two people who survived something ugly together.`,
scene:'outside',mood:'#636e72',characters:['Volkov','Torres'],
effects:{stats:{cha:1,int:1},relationships:{interrogator:3,cellmate:2}},
choices:[
{text:'Shake his hand. Drive away. Expose Harlan.',next:'sol_ending_expose',effects:{stats:{cou:1},relationships:{interrogator:2}}},
{text:'Shake his hand. Then go dark. Disappear with Torres.',next:'sol_ending_escape',effects:{stats:{per:1},relationships:{cellmate:2}}},
{text:'Take the evidence to the handler. Do this by the book.',next:'sol_ending_rescue',effects:{stats:{cou:1},relationships:{handler:3}}}
]
},

sol_wait_extraction:{
text:`48 hours of hell. You count every minute.

Volkov interrogates. You deflect, stall, and give him just enough to keep him engaged. Torres holds the line from her cell. The cleanup team circles closer but does not strike — waiting for something. Maybe orders. Maybe darkness.

At hour 46, a sound you almost do not believe: helicopter rotors. Military. Friendly.

The handler kept their word.

The extraction team hits the compound with precision — flash bangs, breach charges, overwhelming force. In three minutes, it is over. Volkov's people are disarmed. You and Torres are pulled from your cells by soldiers in familiar uniforms.

"Package secure," someone says into a radio. "Both assets alive."

You are going home.`,
scene:'outside',mood:'#636e72',characters:['Torres'],
effects:{stats:{cou:2},relationships:{handler:4,cellmate:2}},
choices:[
{text:'Debrief. Tell them everything about MERIDIAN and Harlan.',next:'sol_ending_rescue',effects:{stats:{int:1}}},
{text:'Ask about Volkov. What happens to him?',next:'sol_ending_rescue',effects:{stats:{cha:1},relationships:{interrogator:1}}},
{text:'The case is still out there. Insist on recovering it first.',next:'sol_recover_case',effects:{stats:{cou:1}}}
]
},

sol_force_escape:{
text:`You press the gun to the guard's head and march toward Volkov. "You are walking me out of here. Now."

Volkov stands slowly. His face is unreadable. "This will not end well for you."

"Move."

He moves. Through the corridor, past the other guards — they part like water, weapons raised but unwilling to risk their boss. Through the security door. Into the vehicle bay.

A truck. Keys. Torres — you bang on her cell door as you pass. A guard, at Volkov's nod, opens it.

"Get in," you tell Torres. She does not ask questions. She gets in.

You shove Volkov away and drive. He stands in the vehicle bay, watching you go. He does not order pursuit.

Later, you will wonder why.`,
scene:'outside',mood:'#e17055',characters:['Torres'],
effects:{stats:{cou:3},relationships:{cellmate:2,interrogator:-2}},
choices:[
{text:'Head for the ambush site. Get the list.',next:'sol_recover_case',effects:{stats:{int:1}}},
{text:'Find a radio. Call the handler.',next:'sol_ending_rescue',effects:{stats:{per:1},relationships:{handler:2}}},
{text:'Disappear. Drive until you run out of road.',next:'sol_ending_escape',effects:{stats:{cou:1}}}
]
},

// ==================== ENDINGS ====================

sol_ending_escape:{
text:`ENDING: GHOSTS IN THE WIND

You drive through the night and into the dawn. Torres beside you, silent, watching the road.

You do not stop at the ambush site. You do not call the handler. You do not contact Volkov. You just drive.

Three days later, you are in a coastal town with new names and new documents — courtesy of a black-market contact Torres knew from a previous life. The MERIDIAN list stays buried under the oak tree. Maybe someone finds it someday. Maybe it rots.

Harlan is still out there. Volkov is still out there. The network is still running. But you are alive, and Torres is alive, and for right now, that is enough.

You rent a small apartment above a fish market. Torres takes a job at the harbor. You do not talk about the compound, the interrogation room, or the sound of zip ties tightening.

Some mornings, you wake reaching for a weapon that is not there. Some nights, Torres taps on the wall between your rooms — old morse code, just to hear you tap back.

You are ghosts now. Invisible. Free.

But you both know — the world does not let ghosts rest forever.

---

SOLDIER INTERROGATION: GHOSTS IN THE WIND

You chose survival over justice. The secrets stay buried, the guilty stay free, but you and Torres walk away with your lives and each other. Some would call it cowardice. You call it knowing when the fight is not yours anymore.`,
scene:'end',mood:'#636e72',ending:'Ghosts in the Wind',characters:['Torres'],choices:[]
},

sol_ending_rescue:{
text:`ENDING: THE LONG WAY HOME

The handler comes through. Whether by extraction team, radio contact, or sheer determination, you reach friendly forces. Debriefings follow — days of them, in windowless rooms that feel uncomfortably familiar.

You tell them everything. MERIDIAN. Harlan. The ambush. The case.

A military tribunal is convened. Colonel James Harlan is arrested at his home at 0600 on a Tuesday morning, still in his bathrobe. The evidence is overwhelming — wire transfers, intercepted communications, testimony from captured cleanup team members.

Torres testifies. You testify. Even Volkov provides a written statement, delivered through channels you do not want to think about.

Harlan goes to Leavenworth. The network is dismantled. Fourteen arms deals are disrupted. Three intelligence leaks are plugged. An estimated forty lives are saved by the operations that never happen.

You receive a commendation — classified, of course. No public ceremony. Just a piece of paper in a file that most people will never read.

Torres gets promoted. She deserves it.

On your last day of debriefing, the handler contacts you one final time. Voice only, scrambled as always.

"Well done. The meridian is clear."

The line goes dead.

---

SOLDIER INTERROGATION: THE LONG WAY HOME

You endured the room, the questions, the doubt. You held the line and brought the truth home. Harlan falls. The network burns. And somewhere, in a cell he will never leave, a colonel who betrayed his own people has a lifetime to think about the soldiers he tried to make expendable.`,
scene:'end',mood:'#2d3436',ending:'The Long Way Home',characters:['Torres'],choices:[]
},

sol_ending_expose:{
text:`ENDING: BURNED TO LIGHT

You take the list public. Not to the military — you do not trust the chain of command anymore. Not to Volkov — you cannot be sure of his motives. You go to the press.

A journalist. One you vetted, one Torres vouched for, one with a reputation for protecting sources. You hand over the MERIDIAN list with one condition: everything gets published. Every name, every deal, every payment.

The story breaks like a bomb. Front pages worldwide. Congressional hearings. International investigations. Harlan is arrested. Fourteen foreign officials resign. Three defense contractors are indicted. The arms pipeline collapses.

Volkov disappears. You do not know if he is dead, in hiding, or rebuilding. You think about him sometimes — his wire-rimmed glasses, his terrible coffee, his patient voice asking questions in a concrete room.

Torres goes into witness protection. You join her — same program, different names, different cities. You talk by encrypted phone once a month.

The world is slightly less corrupt because of what you survived. The cost was everything you were — your name, your career, your identity.

But the truth is out. And in the end, that is the only thing that matters.

---

SOLDIER INTERROGATION: BURNED TO LIGHT

You chose the hardest path — not silence, not escape, but exposure. The truth is a weapon you cannot un-fire. Harlan burns. The network burns. And you walk away with nothing except the knowledge that you did what was right when every other option was easier.`,
scene:'end',mood:'#d4a017',ending:'Burned to Light',characters:[],choices:[]
},

sol_ending_sacrifice:{
text:`ENDING: THE UNMARKED GRAVE

You destroy the list. Torres watches as you burn the drive — a lighter, gasoline from the truck, and the entire weight of MERIDIAN turns to smoke and ash.

"No one gets it," you say. "Not Volkov. Not Harlan. Not our side. It dies here."

Torres is quiet for a long time. "People on that list — some are innocent. Assets who were used."

"I know."

"And Harlan walks free."

"Maybe. But no one can weaponize this list against anyone ever again."

You bury the melted remains under the oak tree. A grave for secrets.

Harlan's network continues — but without the master list, it fragments. Deals fall apart. Contacts go silent. The machine breaks down slowly, like a body without a spine. It takes years, but it crumbles.

You return to service under a new unit. Torres requests a transfer and gets one. You do not see each other again for a long time.

When you do — at a veterans' event, seven years later — she finds you by the bar. She does not say hello. She just taps the bar top in morse code.

T-H-A-N-K Y-O-U.

You tap back: S-E-M-P-E-R F-I.

---

SOLDIER INTERROGATION: THE UNMARKED GRAVE

You chose destruction over power. No one wins. No one loses. The secrets die in the dirt where they belong. It is not justice. It is not victory. It is the only kind of peace you could find — the silence of things that will never be used to hurt anyone again.`,
scene:'end',mood:'#2d3436',ending:'The Unmarked Grave',characters:['Torres'],choices:[]
},

sol_ending_broker:{
text:`ENDING: THE DEVIL YOU BECOME

You play every side. Volkov thinks you are his ally. Torres thinks you are her partner. The handler thinks you are their asset. None of them are wrong. All of them are incomplete.

You recover the list. You copy it — twice. One copy goes to Volkov, in exchange for money. Real money, life-changing money. One copy goes to your handler, in exchange for immunity and a new identity. The original, you keep.

Harlan goes down. The network is exposed. Justice is technically served. But you walk away richer than you arrived, with leverage over a former spy and an intelligence agency, and a copy of the most dangerous document in the western hemisphere tucked into a safety deposit box in Zurich.

Torres figures it out. Of course she does. She was always the smartest person in the room.

"You sold us all out," she says, in the last conversation you ever have.

"I survived. That is what soldiers do."

"No. That is what Harlan did."

The line goes dead. She is right, and you will spend the rest of your life knowing it.

You sit in an expensive apartment in a neutral country, drinking good whiskey, watching the news report on Harlan's conviction. You won.

Then why does it feel like a cell?

---

SOLDIER INTERROGATION: THE DEVIL YOU BECOME

You played the game better than anyone. You won money, freedom, and power. You lost Torres, your integrity, and the person you used to be. In the interrogation room, you held the line. Afterward, you crossed every one. Volkov would be proud. Harlan would recognize you. And the soldier you were would not know you at all.`,
scene:'end',mood:'#e17055',ending:'The Devil You Become',characters:[],choices:[]
}

};

// ============================================================
// SCENARIO DATA — SHADOW PROTOCOL
// ============================================================
window.SCEN_NODES['soldier'] = SOL_NODES;
})();
