// Scenario data: deathnote  (DN_NODES)
// Split out of scenario-generator.html on 2026-08-01.
// Edit THIS file to change this scenario — the main file no longer holds node data.
window.SCEN_NODES = window.SCEN_NODES || {};
(function(){
const DN_NODES = {};

// ---- ARC 1: THE DISCOVERY (~25 nodes) ----

DN_NODES.dn_find_note = {text:`Rain hammers the campus. You are walking home from a late lecture — organic chemistry, the kind that makes you question every life choice — when something pale catches your eye on the wet grass beside the library.

A black notebook. Elegant. Unmarked except for two words on the cover in silver script: DEATH NOTE.

You almost walk past it. Almost. But something pulls you back. A gravity that has nothing to do with physics. Your fingers close around it before your brain catches up.

The leather is warm. That is wrong. It has been lying in the rain and it is warm.

You flip it open. The first page is covered in rules, written in English, in a hand that is too precise to be human.

"The human whose name is written in this note shall die."

Your blood goes cold.`,scene:'dark',mood:'#3d0066',choices:[{text:'Read all the rules carefully.',next:'dn_read_rules',effects:{stats:{int:1}}},{text:'Look around — who dropped this?',next:'dn_look_around',effects:{stats:{per:1}}},{text:'Shove it in your bag and keep walking.',next:'dn_take_it',effects:{stats:{cou:1}}}]};

DN_NODES.dn_read_rules = {text:`You stand in the rain, reading every rule. Your hands are shaking but your mind is razor sharp.

"The human whose name is written in this note shall die."
"This note will not take effect unless the writer has the person\`s face in mind when writing their name."
"If the cause of death is written within the next 40 seconds of writing the person\`s name, it will happen."
"If the cause of death is not specified, the person will simply die of a heart attack."
"After writing the cause of death, details of the death should be written in the next 6 minutes and 40 seconds."

There are more. Pages of them. Rules about ownership, about Shinigami — death gods. About eyes that can see anyone\`s name and lifespan.

This is either the most elaborate prank in history, or you are holding something that should not exist.

A sound behind you. Like dry leaves scraping stone. But there are no leaves on the ground.`,scene:'dark',mood:'#3d0066',effects:{flags:{read_rules:true}},choices:[{text:'Turn around slowly.',next:'dn_meet_sidoh'},{text:'Run. Take the notebook and run.',next:'dn_run_home'}]};

DN_NODES.dn_look_around = {text:`You scan the area. The library courtyard is empty — it is past 10 PM and the rain has driven everyone inside. Security lights cast long shadows across the wet concrete.

No one nearby. No one watching from the windows. But you notice something strange — the grass around where the notebook was lying is dead. A perfect circle of brown, withered blades in the middle of green lawn, as if something toxic radiated from the spot.

You pick it up. The cover reads DEATH NOTE. Inside, rules. Impossible rules about killing people by writing their names.

Then you hear breathing behind you. Wet, rasping breathing that does not sound human.`,scene:'dark',mood:'#3d0066',effects:{flags:{noticed_dead_grass:true}},choices:[{text:'Turn around.',next:'dn_meet_sidoh'},{text:'Grip the notebook tight and bolt.',next:'dn_run_home'}]};

DN_NODES.dn_take_it = {text:`You stuff the notebook into your bag without reading it. Something about it makes you want to get away from this spot immediately. Instinct. Survival instinct you did not know you had.

You walk fast. Then faster. The rain intensifies. By the time you reach your apartment, you are soaked through and breathing hard.

You lock the door. Drop your bag. Pull the notebook out.

DEATH NOTE.

You open it and start reading the rules. Each one is more impossible than the last. Names. Faces. Death by heart attack. Shinigami.

Then something moves in the corner of your room. Something large and hunched that was not there before.`,scene:'dark',mood:'#2a2a2a',choices:[{text:'Freeze. Stare at it.',next:'dn_meet_sidoh_home'},{text:'Grab the nearest heavy object.',next:'dn_meet_sidoh_home'}]};

DN_NODES.dn_run_home = {text:`You sprint across campus, the notebook jammed under your jacket. The rain is blinding. You do not stop until you are inside your apartment with the deadbolt thrown.

You stand there, dripping on the floor, heart hammering. Then you pull the notebook out and stare at it.

DEATH NOTE.

For ten minutes you sit on the floor reading every rule. The implications crash over you in waves. If this is real — if even a fraction of it is real —

A scraping sound. From your closet. Something is in your apartment. Something that was not here when you left.`,scene:'dark',mood:'#2a2a2a',choices:[{text:'Open the closet door.',next:'dn_meet_sidoh_home'},{text:'Call out: "Who is there?"',next:'dn_meet_sidoh_home'}]};

DN_NODES.dn_meet_sidoh = {text:`You turn around and your brain short-circuits.

It is tall — eight feet at least — with pale, papery skin stretched over a skeletal frame. Its face is a mask of bone-white plates with too-wide eyes that glow faintly amber. Tattered wrappings hang from its body like a burial shroud caught in a wind that is not there.

It looks terrified. More terrified than you are.

"M-my notebook," it stammers, its voice like wind through a cracked window. "You... you picked up my notebook. I dropped it. I did not mean to. Please — I need it back. The other Shinigami will — they will —"

It wrings its massive, skeletal hands. This is Sidoh. A Shinigami. A god of death. And it is having a panic attack.

"Wait," you say, because your brain has latched onto one word. "OTHER Shinigami?"

Sidoh\`s eyes go wider. "You... you do not know about the other notebook? The one the human called Light Yagami has?"`,scene:'dark',mood:'#3d0066',characters:['Sidoh'],choices:[{text:'"Tell me everything about this Light Yagami."',next:'dn_sidoh_explains',effects:{stats:{int:1}}},{text:'"Take your notebook back. I do not want it."',next:'dn_refuse_note'},{text:'"Another notebook? Another killer?"',next:'dn_sidoh_explains',effects:{stats:{per:1}}}]};

DN_NODES.dn_meet_sidoh_home = {text:`The closet door swings open on its own.

The creature that steps out has to bend double to fit through the frame. Eight feet of skeletal, bone-white nightmare wrapped in tattered burial cloth. Its eyes glow amber and they are full of something you did not expect.

Fear.

"P-please," it says, its voice a dry rasp. "My notebook. You have my notebook. I dropped it by accident. I need it back before — before they find out."

You are pressed against the wall. Your heart has stopped, restarted, and stopped again. But the creature — the Shinigami, your brain supplies from the rules you just read — is not threatening you. It is begging.

"My name is Sidoh," it says. "I am a Shinigami. And I have made a terrible mistake. There is another notebook in this world. Another human is using it to kill. His name is Light Yagami. He calls himself Kira."

The word hits you like a brick. Kira. The mysterious figure killing criminals worldwide. Heart attacks. Unexplainable deaths. The news has been covering it for months.

Kira has a Death Note. And now, so do you.`,scene:'dark',mood:'#3d0066',characters:['Sidoh'],choices:[{text:'"Tell me everything. Who is Kira? How does he operate?"',next:'dn_sidoh_explains',effects:{stats:{int:1}}},{text:'"Take it back. I want nothing to do with this."',next:'dn_refuse_note'},{text:'"So I have the same power as Kira..."',next:'dn_realize_power',effects:{stats:{cou:1}}}]};

DN_NODES.dn_refuse_note = {text:`You hold the notebook out to Sidoh. "Take it. I do not want this."

Sidoh reaches for it — then stops. His skeletal fingers hover an inch from the cover. His amber eyes are wide with something like shame.

"I... I cannot. The rules. Once a human has touched a Death Note that has entered the human world, it belongs to them until they forfeit ownership or die. If I take it back now, your memories of me, of the notebook, of everything — they will be erased."

He pauses. "But Light Yagami will still have his. Kira will continue killing. And no one in your world seems able to stop him. The detective they call L is trying, but..."

Sidoh looks at you with those frightened, ancient eyes. "You are the only other human who knows the truth about how Kira kills. If you give the notebook back, that knowledge dies with your erased memories."

The weight of that sinks in. Keep the notebook and carry the burden of its existence. Or walk away and let Kira operate unopposed.`,scene:'dark',mood:'#2a2a2a',characters:['Sidoh'],choices:[{text:'"Fine. I will keep it. But I am NOT using it to kill."',next:'dn_keep_no_kill',effects:{stats:{int:1},flags:{vowed_no_kill:true}}},{text:'"If I am the only one who can stop Kira... then I have to try."',next:'dn_keep_to_stop_kira',effects:{stats:{cou:1},flags:{motive_stop_kira:true}}},{text:'"Erase my memories. I do not want this responsibility."',next:'dn_memories_erased'}]};

DN_NODES.dn_realize_power = {text:`The words hang in the air. Sidoh stares at you with those luminous eyes.

"Yes," he says quietly. "You have the same power. But Light Yagami — Kira — he has been using his for months. He has killed hundreds. He has a Shinigami of his own. Ryuk. And Ryuk is... not like me. Ryuk finds humans entertaining."

You look down at the notebook. A weapon that can kill anyone in the world, as long as you know their name and face. No trace. No evidence. No defense.

Light Yagami used this power to become a god. What will you do with it?`,scene:'dark',mood:'#8b0000',characters:['Sidoh'],effects:{flags:{realized_power:true}},choices:[{text:'Test it. Write a name. A criminal from the news.',next:'dn_first_test',effects:{stats:{cou:1}}},{text:'Research Kira first. Knowledge before action.',next:'dn_research_kira',effects:{stats:{int:1}}},{text:'Hide the notebook somewhere safe. Think before acting.',next:'dn_hide_note',effects:{stats:{per:1}}}]};

DN_NODES.dn_sidoh_explains = {text:`Sidoh talks for hours. He is nervous, rambling, but the information is gold.

Light Yagami is a university student in Tokyo — a genius, top of his class, son of the NPA deputy director. His Shinigami is Ryuk, who dropped his notebook into the human world purely out of boredom.

Light has been systematically killing criminals using the notebook, creating the persona of "Kira" — a god of justice worshipped by millions and hunted by the world\`s greatest detective, known only as L.

"L is getting close," Sidoh says. "He has already narrowed Kira\`s identity to the Kanto region. Light is brilliant, but L is... different. Cold. Relentless."

Sidoh wrings his hands. "I just want my notebook back eventually. But the rules say you own it now. And there is a war coming between Light and L. A war that will kill many humans."

He looks at you. "What will you do?"`,scene:'dark',mood:'#3d0066',characters:['Sidoh'],effects:{flags:{knows_kira_identity:true}},choices:[{text:'Research L and the Kira investigation publicly.',next:'dn_research_kira',effects:{stats:{int:1}}},{text:'Test the notebook. Write one name. See if it works.',next:'dn_first_test',effects:{stats:{cou:1}}},{text:'Hide the notebook. Process what you have learned.',next:'dn_hide_note',effects:{stats:{per:1}}}]};

DN_NODES.dn_keep_no_kill = {text:`You lock the Death Note in your desk drawer. Sidoh hovers in the corner of your room, relieved you kept it but confused by your restraint.

"You will not use it? Not even once?"

"Not to kill. But I will use what I know." You pull up news articles on your laptop. The Kira case. L\`s encrypted broadcasts. Forums full of Kira worshippers and skeptics.

If you know how Kira kills — the mechanism, the rules — you have an advantage no investigator on Earth possesses. You can prove Kira exists. You can prove the Death Note exists. You can help L.

Or you can find Light Yagami yourself.

The question is not whether to act. It is how.`,scene:'dark',mood:'#1a1a3e',characters:['Sidoh'],choices:[{text:'Find a way to contact L anonymously.',next:'dn_contact_l',effects:{stats:{int:1}}},{text:'Go to Tokyo. Find Light Yagami in person.',next:'dn_go_tokyo',effects:{stats:{cou:1}}},{text:'Study the notebook\`s rules for loopholes.',next:'dn_study_rules',effects:{stats:{per:1}}}]};

DN_NODES.dn_keep_to_stop_kira = {text:`You grip the notebook. "If Kira is killing people with one of these, then someone needs to stop him. And I might be the only person who understands how."

Sidoh tilts his head. "You want to fight another Death Note user? That is... extremely dangerous. Light Yagami is cunning. He has already outmaneuvered the entire Japanese police force."

"Then I need to be smarter."

You spend the night planning. The Kira investigation is public knowledge — L made sure of that. But you have something L does not: you know exactly how Kira kills, because you are holding the murder weapon.

The question is approach. Work alone? Work with L? Or confront Kira directly?`,scene:'dark',mood:'#1a1a3e',characters:['Sidoh'],choices:[{text:'Find a way to contact L.',next:'dn_contact_l',effects:{stats:{int:1}}},{text:'Go to Tokyo. Confront Light directly.',next:'dn_go_tokyo',effects:{stats:{cou:1}}},{text:'Study the rules — find a weakness in how the Death Note works.',next:'dn_study_rules',effects:{stats:{per:1}}}]};

DN_NODES.dn_memories_erased = {text:`Sidoh takes the notebook. His skeletal fingers close around it and the world goes white.

When you open your eyes, you are standing in the rain outside the library. Your clothes are soaked. You have no idea how long you have been standing here. Your phone says 10:47 PM.

You walk home. Something feels wrong — an absence you cannot name, like forgetting a word that was on the tip of your tongue. You check your bag. Nothing unusual. You check your pockets. Nothing.

You watch the news before bed. Another Kira killing. Twelve criminals dead of heart attacks in the last 24 hours. The world is divided — half worshipping Kira as a savior, half calling him a monster.

You feel like you should do something. But you do not know what. Or why.

You go to sleep. The feeling does not go away.

ENDING: THE ONE WHO WALKED AWAY

Some truths are too heavy to carry. You chose to set yours down. The Kira investigation continues without you. Light and L play their deadly game. The world holds its breath.

You never remember. But sometimes, in dreams, you see amber eyes.`,scene:'dark',mood:'#2a2a2a',effects:{flags:{ending_walked_away:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

DN_NODES.dn_first_test = {text:`Your hands are trembling. You turn on the television — a news broadcast showing a hostage situation in Yokohama. A man named Takeshi Moriyama has taken three people hostage in a bank. His face is on screen. His name is in the ticker.

You open the notebook. Pick up a pen.

Sidoh watches with those amber eyes. "You do not have to do this."

But you write it. Takeshi Moriyama. You picture his face from the broadcast. Your pen moves. You write the name.

Forty seconds. The longest forty seconds of your life.

On screen, the reporter pauses. Touches her earpiece. "We are... we are receiving reports that the hostage-taker has collapsed. Paramedics are moving in. It appears... cardiac arrest."

The pen falls from your fingers.

It works. The Death Note is real. You just killed a man.`,scene:'dark',mood:'#8b0000',characters:['Sidoh'],effects:{flags:{tested_note:true,first_kill:true},stats:{cou:1}},choices:[{text:'Feel sick. Lock the notebook away.',next:'dn_guilt',effects:{stats:{int:1}}},{text:'Feel... powerful. This changes everything.',next:'dn_embrace_power',effects:{stats:{cou:1}}},{text:'Focus. Now you know it works. Time to plan.',next:'dn_research_kira',effects:{stats:{per:1}}}]};

DN_NODES.dn_guilt = {text:`You barely make it to the bathroom before you vomit. You killed someone. With a pen and paper. From your apartment.

Sidoh hovers outside the door. "The human world is strange. You kill each other constantly — with weapons, with words, with neglect. But when the mechanism changes, suddenly it matters?"

"Shut up." You rinse your mouth. Stare at yourself in the mirror. Same face. Same eyes. But something behind them has shifted.

You lock the Death Note in your closet safe. You will not use it again. Not like that. But you cannot give it up either — not while Kira is out there, using an identical notebook to kill hundreds.

You need to stop Light Yagami. And you need to do it without becoming him.`,scene:'dark',mood:'#2a2a2a',characters:['Sidoh'],effects:{flags:{guilt_phase:true}},choices:[{text:'Research how to contact L.',next:'dn_contact_l',effects:{stats:{int:1}}},{text:'Study the rules. There must be limits, weaknesses.',next:'dn_study_rules',effects:{stats:{per:1}}}]};

DN_NODES.dn_embrace_power = {text:`The trembling stops. Your breathing steadies. A calm you have never felt before settles over you like armor.

You just killed a man who was going to kill three innocent people. No trial. No lengthy negotiation. No risk to the hostages. One name, forty seconds, and it was over.

Kira kills criminals too. But Kira kills indiscriminately — petty thieves, white-collar fraudsters, anyone who offends his sense of justice. You could be more precise. More strategic. Better.

Sidoh watches you with mounting unease. "That look on your face. Light Yagami had the same look the first time he used the notebook."

"I am not Light Yagami."

"He said that too."`,scene:'dark',mood:'#8b0000',characters:['Sidoh'],effects:{flags:{embraced_power:true}},choices:[{text:'Go to Tokyo. Find Kira. Propose an alliance.',next:'dn_go_tokyo',effects:{stats:{cou:1}}},{text:'Start building your own network. Become a second Kira — but smarter.',next:'dn_second_kira_plan',effects:{stats:{int:1}}},{text:'No — use this power to help L take Kira down.',next:'dn_contact_l',effects:{stats:{per:1}}}]};

DN_NODES.dn_hide_note = {text:`You wrap the Death Note in a plastic bag and hide it inside a hollowed-out textbook on your shelf. Not perfect, but it will do for now.

Sidoh perches on your bookshelf like a gargoyle. "You are being cautious. That is... unusual for humans who find a Death Note."

"What do they usually do?"

"Write names immediately. Light Yagami filled five pages his first night."

That tells you everything about the kind of person you are dealing with. Someone impulsive behind a mask of genius. Someone who killed dozens before even understanding the full implications.

You are going to be different. Research first. Action second.`,scene:'dark',mood:'#2a2a2a',characters:['Sidoh'],effects:{flags:{hid_note:true}},choices:[{text:'Research the Kira investigation online.',next:'dn_research_kira',effects:{stats:{int:1}}},{text:'Ask Sidoh everything he knows about Ryuk and Light.',next:'dn_sidoh_intel',effects:{stats:{per:1}}}]};

DN_NODES.dn_research_kira = {text:`You spend three days consuming everything public about the Kira case. News articles, forum discussions, leaked NPA memos, L\`s televised challenges.

The picture that emerges is chilling. L broadcast a fake "worldwide" announcement using a condemned prisoner — Lind L. Tailor — and Kira killed him on live television, proving Kira could kill remotely and confirming the Kanto region as his base.

Since then, the investigation has been a chess match. L suspects someone connected to the Japanese police. The killings follow patterns — criminals whose cases were publicized, deaths timed to suggest a student\`s schedule.

You pull up To-Oh University\`s public directory. Light Yagami. Top entrance exam score in the nation. Photos from campus events. That face — intelligent, composed, the kind of face that smiles at everyone and trusts no one.

You know who Kira is. You know how he kills. The question is what you do with that knowledge.`,scene:'dark',mood:'#1a1a3e',characters:['L','Light'],effects:{flags:{researched_kira:true}},choices:[{text:'Contact L. Send anonymous evidence.',next:'dn_contact_l',effects:{stats:{int:1}}},{text:'Go to Tokyo. Infiltrate To-Oh University.',next:'dn_go_tokyo',effects:{stats:{cou:1}}},{text:'Study the rules more. Find exploits before engaging.',next:'dn_study_rules',effects:{stats:{per:1}}}]};

DN_NODES.dn_study_rules = {text:`You read the rules fifty times. Then a hundred. You take notes, cross-reference, look for contradictions and gaps.

Key findings: The Death Note requires a name AND a face. You can specify cause and time of death. Ownership can be transferred. Memories can be erased by relinquishing the notebook. And the Shinigami Eyes — a trade of half your remaining lifespan to see any person\`s real name and remaining lifespan just by looking at their face.

"Sidoh. If I made the eye deal with you, I would see everyone\`s real name?"

"Yes. But you would lose half your remaining life."

"And Light? Did he make the deal?"

"No. But there is a girl — Misa Amane. She has Shinigami Eyes. She made the deal with a Shinigami named Rem. She is the Second Kira in your world\`s terminology."

Another player. Misa Amane. Second Kira. Shinigami Eyes. This is more complex than you realized.`,scene:'dark',mood:'#3d0066',characters:['Sidoh','Misa'],effects:{flags:{studied_rules:true,knows_misa:true}},choices:[{text:'Contact L with what you know about Misa.',next:'dn_contact_l',effects:{stats:{int:1}}},{text:'Approach Misa directly — she is a vulnerability.',next:'dn_approach_misa',effects:{stats:{cou:1},flags:{target_misa:true}}},{text:'Head to Tokyo. Time to get into the game.',next:'dn_go_tokyo',effects:{stats:{per:1}}}]};

DN_NODES.dn_sidoh_intel = {text:`Sidoh tells you everything. He is not brave or cunning, but he is observant, and he has been watching the human world from the Shinigami realm.

"Ryuk is bored. He dropped his Death Note into your world for entertainment. He does not care if Light wins or loses — he just wants to watch. He will not help Light, but he will not hinder him either."

"Light is methodical. He hides the Death Note inside a drawer with a fire-based trap. He has a second user — Misa Amane — who possesses Shinigami Eyes and worships him."

"The detective L has set up surveillance in the Yagami household. Light knows about it and has been acting innocent. They are both pretending while planning to kill each other."

Sidoh hesitates. "There is something else. I... I was supposed to get my notebook back. The one Ryuk has is actually mine. He stole it from me in the Shinigami realm. Light\`s notebook is my original property."

This changes things. Sidoh has a legitimate claim on Light\`s notebook. That could be leverage.`,scene:'dark',mood:'#3d0066',characters:['Sidoh','Ryuk','Light'],effects:{flags:{sidoh_intel:true,knows_stolen_note:true}},choices:[{text:'Use Sidoh\`s claim on the notebook as leverage against Light.',next:'dn_go_tokyo',effects:{stats:{int:1}}},{text:'Contact L. You have too much intelligence to waste.',next:'dn_contact_l',effects:{stats:{per:1}}},{text:'Approach this like a detective — observe before engaging.',next:'dn_research_kira',effects:{stats:{int:1}}}]};

// ---- ARC 2: THE GAME (~35 nodes) ----

DN_NODES.dn_contact_l = {text:`Contacting L is not simple. The detective is a ghost — no name, no face, working through proxies and encrypted channels. But L\`s televised challenges to Kira were broadcast through specific NHK channels, and the NPA task force communicates through a dedicated server.

You write a message. Carefully. Every word chosen to prove you know things no one else could.

"L. I know how Kira kills. It is not a virus, a poison, or a psychic ability. It is a physical instrument — a notebook. Write a name while thinking of the person\`s face, and they die. There are two notebooks in the human world. I possess one. I am not Kira. Contact me at this secure address if you want to end this."

You route it through seven proxies and send it to the NPA task force\`s external tip line.

Three hours later, a response. A single line. An encrypted address and three words: "Prove it. — L"`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{contacted_l:true}},choices:[{text:'Send L a page from the Death Note with rules visible.',next:'dn_prove_to_l',effects:{stats:{int:1}}},{text:'Offer to demonstrate — let L choose a condemned prisoner.',next:'dn_demonstrate_to_l',effects:{stats:{cou:1}},check:{stat:'int',dc:12}},{text:'Send information about Misa Amane being the Second Kira.',next:'dn_reveal_misa_to_l',effects:{stats:{per:1}}}]};

DN_NODES.dn_prove_to_l = {text:`You photograph two pages of rules from the Death Note and send them encrypted. No fingerprints on the pages — you wore gloves. No metadata in the image — you stripped it.

L\`s response comes in twelve minutes. For a man investigating the biggest case in history, that is fast.

"These rules are consistent with observed patterns. Heart attacks as default. The timing correlations. This explains everything. But possession of this object makes you either my greatest asset or my most dangerous suspect. I need to meet you. In person. Alone."

Alone. With L. The world\`s greatest detective wants to sit in a room with someone who holds a weapon that could kill him with a pen stroke.

You realize: this is also a test. L wants to see if you will agree to be vulnerable.`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{proved_to_l:true}},choices:[{text:'Agree to meet, but on your terms — neutral location.',next:'dn_meet_l',effects:{stats:{int:1}}},{text:'Refuse to meet in person. Insist on digital only.',next:'dn_digital_alliance',effects:{stats:{per:1}}},{text:'Agree to meet. Show complete trust.',next:'dn_meet_l_trust',effects:{stats:{cou:1}}}]};

DN_NODES.dn_demonstrate_to_l = {text:`"Choose a condemned prisoner scheduled for execution within the week," you write. "Give me their name and ensure a camera is on them. I will demonstrate at a time of your choosing. You will see exactly how Kira kills."

L\`s silence lasts six hours. Then: "Watari will send details at 0900 tomorrow. If this works, everything changes. If this is a trick, I will find you."

The next morning, you receive a name and a photo. A convicted serial killer on death row. Execution scheduled in four days.

You write the name. Specify the time — 3:00 PM exactly. Cause: heart attack.

At 3:00 PM, your phone buzzes. L: "Confirmed. My God. Meet me."`,scene:'dark',mood:'#8b0000',characters:['L'],effects:{flags:{demonstrated_to_l:true,killed_for_l:true}},choices:[{text:'Meet L in person.',next:'dn_meet_l',effects:{stats:{cou:1}}},{text:'Insist on digital contact only — too risky.',next:'dn_digital_alliance',effects:{stats:{per:1}}}]};

DN_NODES.dn_reveal_misa_to_l = {text:`You send L everything you know about Misa Amane. Model, actress, Shinigami Eye holder, devoted to Kira. You explain the eye deal — half your lifespan in exchange for seeing anyone\`s true name.

L\`s response is electric. "This explains the Second Kira\`s ability to kill with only a face. Amane Misa was already a person of interest — she lost her parents to a criminal Kira killed. Your information provides motive, mechanism, and means. I am moving to detain her within 48 hours."

Then a pause. A second message: "You know too much to be a bystander. You possess a Death Note. You know Kira\`s identity. Either you are the most valuable informant in history, or you are playing a game I have not yet understood. Meet me. Let me determine which."`,scene:'dark',mood:'#1a1a3e',characters:['L','Misa'],effects:{flags:{revealed_misa:true}},choices:[{text:'Meet L. Help him take down Kira.',next:'dn_meet_l',effects:{stats:{int:1}}},{text:'Stay hidden. Feed L information remotely.',next:'dn_digital_alliance',effects:{stats:{per:1}}},{text:'Warn Light that L knows about Misa — play both sides.',next:'dn_warn_light',effects:{stats:{cou:1},flags:{playing_both_sides:true}}}]};

DN_NODES.dn_go_tokyo = {text:`You take the bullet train to Tokyo. The Death Note is in a hidden compartment in your bag that you constructed yourself — lined with lead foil, sealed with a combination lock. Sidoh follows invisibly overhead.

Tokyo is electric. Kira worship is everywhere — graffiti, stickers, whispered conversations. "Kira is justice." "Kira protects us." Half the city worships a serial killer and does not even know it.

You find a cheap apartment in Shinjuku. From here, To-Oh University — where Light Yagami attends — is thirty minutes by train.

You have several options. Light Yagami is a public figure to some extent — top student, visible on campus. But approaching him means risking exposure. He is Kira. He kills people who threaten him.

Alternatively, the Kira investigation task force operates out of a hotel somewhere in the city. L is here. So is Light\`s father, NPA Deputy Director Soichiro Yagami.`,scene:'dark',mood:'#2a2a2a',characters:['Light','L'],effects:{flags:{in_tokyo:true}},choices:[{text:'Enroll at To-Oh University. Get close to Light as a student.',next:'dn_enroll_tooh',effects:{stats:{int:1}},check:{stat:'int',dc:10}},{text:'Stake out the Yagami household. Observe from a distance.',next:'dn_stakeout_yagami',effects:{stats:{per:1}}},{text:'Find the task force hotel. Approach L directly.',next:'dn_find_task_force',effects:{stats:{per:1}},check:{stat:'per',dc:11}}]};

DN_NODES.dn_meet_l = {text:`The meeting point is a suite on the 23rd floor of a luxury hotel in Akasaka. You are escorted by an elderly gentleman who introduces himself as Watari.

L is nothing like you expected. Barefoot. Hunched. Wild black hair. He sits in an armchair with his knees pulled to his chest, eating strawberry cake with his fingers.

But his eyes. His eyes are the sharpest thing you have ever encountered. They take you apart in seconds.

"You brought the notebook," he says. Not a question.

You set it on the table between you. L stares at it. Then, slowly, reaches out and touches it.

Sidoh materializes beside you. L\`s eyes go wide — the only crack in his composure you will ever see.

"A Shinigami," L whispers. "So it is all real."

"All of it," you say. "And I know who Kira is."

L\`s eyes lock onto yours. "Then we have a great deal to discuss."`,scene:'dark',mood:'#1a1a3e',characters:['L','Sidoh'],effects:{flags:{met_l:true},relationships:{l:3}},choices:[{text:'"Light Yagami is Kira. Here is how I know."',next:'dn_reveal_kira_to_l',effects:{stats:{int:1},relationships:{l:2}}},{text:'"Before I tell you anything, I need guarantees. Immunity. Protection."',next:'dn_negotiate_with_l',effects:{stats:{cha:1}}},{text:'"I will help you catch Kira. But I keep my notebook."',next:'dn_alliance_terms',effects:{stats:{cou:1}}}]};

DN_NODES.dn_meet_l_trust = {text:`You walk into the hotel suite unarmed, the Death Note in a plain backpack. Complete vulnerability. Complete trust.

L watches you enter. His dark eyes track every movement. When you set the Death Note on the table, his hand twitches — but he does not reach for it.

"You came alone. You brought the notebook. You know I could have you detained and the notebook confiscated." His voice is flat, analytical. "Either you are genuinely altruistic, or this is a trap so elegant I cannot see its edges."

"It is not a trap."

"That is exactly what a trap would say." But there is the ghost of a smile. L picks up a sugar cube and places it on top of his coffee. "Tell me everything. Start with how you found it."

You talk for four hours. L listens, eats, and dismantles every statement looking for lies. He finds none, because there are none.

"I believe you," he says finally. "That troubles me, because I almost never believe anyone."`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{met_l:true,full_trust_l:true},relationships:{l:5}},choices:[{text:'Reveal Light Yagami as Kira.',next:'dn_reveal_kira_to_l',effects:{relationships:{l:2}}},{text:'Ask L what his current evidence against Kira is.',next:'dn_l_evidence',effects:{stats:{int:1}}}]};

DN_NODES.dn_digital_alliance = {text:`You refuse to meet in person. Too risky. L could be compromised. Light could be watching.

Instead, you establish an encrypted channel. You share intelligence — the rules of the Death Note, Misa Amane\`s involvement, the mechanics of Shinigami Eyes — while L feeds you updates on the investigation.

It works. For a while. L\`s trust in you grows slowly, measured in the quality of information he shares back. He confirms Light Yagami is his primary suspect. He tells you about the surveillance in the Yagami household.

But operating remotely has limits. You cannot read body language. You cannot react in real time. And Light Yagami is making moves that require someone on the ground.

"I need you in Tokyo," L writes one night. "Kira is escalating. I cannot do this alone."`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{digital_ally:true},relationships:{l:2}},choices:[{text:'Go to Tokyo. Join the task force in person.',next:'dn_join_task_force',effects:{stats:{cou:1}}},{text:'Stay remote but increase intelligence gathering.',next:'dn_remote_war',effects:{stats:{int:1}}},{text:'Go to Tokyo, but operate independently — not under L.',next:'dn_go_tokyo',effects:{stats:{per:1}}}]};

DN_NODES.dn_warn_light = {text:`You are playing a dangerous game. You send Light Yagami an anonymous message through a Kira worship forum he is known to monitor: "L knows about Misa Amane. 48 hours before she is detained. You have a friend who understands your mission. Respond at this address."

Six hours of silence. Then a reply, routed through so many proxies the origin is untraceable: "Who are you. How do you know this. Prove you are not L."

"I own a Death Note. Not yours — a second one. Dropped by a Shinigami named Sidoh. I know you are Light Yagami. I know Ryuk is your Shinigami. I know the rules."

The silence that follows lasts three days. Then: "Meet me. Aoyama. The coffee shop on the third floor of the mall. Sunday, 2 PM. Come alone. If I see anything suspicious, you will die of a heart attack within 40 seconds."

Your pulse races. You are about to sit across from the most dangerous person on Earth.`,scene:'dark',mood:'#8b0000',characters:['Light'],effects:{flags:{warned_light:true,approaching_kira:true}},choices:[{text:'Go to the meeting. Alone. As requested.',next:'dn_meet_light',effects:{stats:{cou:1}}},{text:'Go, but set up contingencies — if you die, evidence goes to L.',next:'dn_meet_light_safe',effects:{stats:{int:1}},check:{stat:'int',dc:11}},{text:'Back out. This was a mistake. Contact L instead.',next:'dn_contact_l',effects:{stats:{per:1}}}]};

DN_NODES.dn_approach_misa = {text:`You find Misa Amane at a fashion shoot in Shibuya. She is smaller than she looks on TV — bright, energetic, performing for the cameras with practiced ease.

But you can see something behind the smile. A hardness. This is a girl who traded half her life for the power to kill with a glance. She worships Light Yagami with an intensity that borders on madness.

After the shoot, you approach her. "Amane-san. I need to talk to you about Kira."

Her expression freezes. For one second, her eyes flick to the space above your head — checking for your name and lifespan with her Shinigami Eyes.

"I do not know what you are talking about," she says sweetly. But her hand is moving toward her bag, where you know she keeps scraps of Death Note paper.

"I have a Death Note too," you say quickly. "I am not your enemy. But we need to talk before L finds you."`,scene:'dark',mood:'#8b0000',characters:['Misa'],effects:{flags:{approached_misa:true}},choices:[{text:'"I can help protect you from L. But I need to meet Light."',next:'dn_misa_to_light',effects:{stats:{cha:1},relationships:{misa:2}},check:{stat:'cha',dc:11}},{text:'"Light is using you. He does not love you. I can prove it."',next:'dn_turn_misa',effects:{stats:{per:1}},check:{stat:'per',dc:13}},{text:'Show her your Death Note as proof.',next:'dn_show_misa_note',effects:{stats:{cou:1}}}]};

DN_NODES.dn_second_kira_plan = {text:`If Light Yagami can be Kira, you can be something better. Not a reckless god of judgment — a surgical instrument. A shadow Kira who operates so differently from Light that L will never connect you.

You begin with research. Not criminals — you target something different. Corrupt executives. Politicians who have escaped prosecution. Human traffickers who operate in the open because money shields them.

People the justice system cannot touch. People whose names are public, whose faces are on record, who have caused immeasurable suffering with zero consequences.

You write your first name with cold precision. A pharmaceutical executive who suppressed data on a lethal drug side effect, causing 47 deaths. Heart attack at his desk. Clean. Untraceable.

Within a week, you have written six names. The patterns are different from Kira\`s. Different targets, different timing, different methodology.

But someone notices. A post appears on an encrypted forum: "There is a Third Kira."`,scene:'dark',mood:'#8b0000',characters:['Sidoh'],effects:{flags:{third_kira:true,killed_multiple:true}},choices:[{text:'Stop killing immediately. You have been noticed.',next:'dn_third_kira_noticed',effects:{stats:{per:1}}},{text:'Continue. Let them call you the Third Kira. Own it.',next:'dn_own_third_kira',effects:{stats:{cou:1}}},{text:'Reach out to Light. Two Kiras are better than one... or three.',next:'dn_contact_light_direct',effects:{stats:{cha:1}}}]};

DN_NODES.dn_enroll_tooh = {text:`You ace the transfer examination. Not as high as Light Yagami\`s legendary score, but top five percent. Good enough to be noticed. Good enough to share classes.

The first time you see Light in person, you understand why no one suspects him. He is flawless. The smile, the posture, the way he engages with professors and peers — every interaction is calibrated. Warm but not intimate. Helpful but not desperate.

And behind those brown eyes, a god of death counts his kills.

You sit three rows behind him in criminal psychology. The irony is not lost on you.

Building a relationship takes weeks. Study groups. Casual conversations. Light is friendly but guarded — testing every new person for threats, filing away information behind that perfect smile.

Then one day, he turns to you after class. "You have been watching me," he says pleasantly. "Most people think I do not notice. I always notice."`,scene:'dark',mood:'#2a2a2a',characters:['Light'],effects:{flags:{enrolled_tooh:true},relationships:{light:1}},choices:[{text:'"I admire your work ethic. Top score in the nation is impressive."',next:'dn_befriend_light',effects:{stats:{cha:1},relationships:{light:1}}},{text:'"You are right. I have been watching you, Kira."',next:'dn_confront_light',effects:{stats:{cou:2}},check:{stat:'cou',dc:13}},{text:'Deflect. Laugh it off. "Everyone watches the smartest person in the room."',next:'dn_deflect_light',effects:{stats:{per:1},relationships:{light:1}}}]};

DN_NODES.dn_stakeout_yagami = {text:`You rent a room in an apartment building with a sightline to the Yagami residence. For a week, you observe. Sidoh helps — floating invisibly between buildings, reporting what he sees.

Light\`s routine is military-precise. Class, library, home. His room light goes on at 8 PM, off at midnight. No suspicious visitors. No late-night excursions.

But Sidoh sees what cameras cannot. "Ryuk is in his room," Sidoh reports, shaking nervously. "He is eating apples and watching Light write in the notebook. Light writes names every evening between 9 and 10 PM."

You document everything. Times, patterns, the glow of his desk lamp. This is the evidence L needs — but it is evidence from a Shinigami, which no court would accept.

Then one evening, Sidoh freezes. "Someone else is watching this house. From the building across the street. Cameras. Microphones. Professional equipment."

L\`s surveillance team. You are not the only one watching Light Yagami.`,scene:'dark',mood:'#2a2a2a',characters:['Light','Sidoh','Ryuk'],effects:{flags:{staked_out_yagami:true}},choices:[{text:'Contact L. Reveal your presence and offer to collaborate.',next:'dn_contact_l',effects:{stats:{int:1}}},{text:'Observe L\`s team too. Learn their methods before approaching.',next:'dn_watch_watchers',effects:{stats:{per:1}},check:{stat:'per',dc:11}},{text:'Approach Light directly. You have enough intelligence.',next:'dn_contact_light_direct',effects:{stats:{cou:1}}}]};

DN_NODES.dn_find_task_force = {text:`Finding the task force takes three days of careful observation. You follow NPA personnel who have been publicly connected to the Kira case, tracking their movements through Tokyo.

Deputy Director Yagami — Light\`s father — leads you to a luxury hotel in Roppongi. The security is subtle but professional. Watari\`s work.

You leave a note at the front desk addressed to "Ryuzaki" — a name you gleaned from careful research into L\`s known aliases. Inside: "I know how Kira kills. I have proof. I am not a threat. Room 1408, Hotel Cerulean, Shinjuku. Come alone or send Watari."

Two days later, Watari knocks on your door.`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{found_task_force:true}},choices:[{text:'Show Watari the Death Note. Full transparency.',next:'dn_meet_l',effects:{stats:{cou:1}}},{text:'Give Watari a sealed envelope for L. Information only.',next:'dn_prove_to_l',effects:{stats:{int:1}}}]};

DN_NODES.dn_reveal_kira_to_l = {text:`"Light Yagami. Son of Deputy Director Soichiro Yagami. Top student at To-Oh University. He found his Death Note approximately six months ago, dropped by a Shinigami named Ryuk."

L sets down his cake fork. His expression does not change, but something shifts in his posture — a stillness that was not there before.

"I have suspected Light Yagami for months," L says quietly. "But suspicion without proof is meaningless. The surveillance in his home showed nothing — he is too careful. He uses the notebook while the cameras are blocked, writes names during carefully constructed blind spots."

"He also has an accomplice. Misa Amane. She possesses Shinigami Eyes — she can kill by seeing a face alone, without knowing the name."

L is silent for thirty seconds. When he speaks, his voice is ice. "You have just given me more actionable intelligence in five minutes than my entire task force has produced in four months. The question is: why?"

"Because someone has to stop him. And you cannot do it alone."`,scene:'dark',mood:'#1a1a3e',characters:['L','Light'],effects:{flags:{revealed_kira:true},relationships:{l:3}},choices:[{text:'"Let me join the task force. I can help from inside."',next:'dn_join_task_force',effects:{stats:{int:1}}},{text:'"I will handle Light. You handle Misa. Divide and conquer."',next:'dn_divide_strategy',effects:{stats:{per:1}}},{text:'"There is a complication. I have also been in contact with Light."',next:'dn_admit_double_agent',requires:{warned_light:true},effects:{stats:{cou:1}}}]};

DN_NODES.dn_negotiate_with_l = {text:`L tilts his head. "Immunity. Protection. You want to be treated as an ally, not a suspect."

"I am holding a weapon that can kill anyone on Earth. If you were in my position, you would want guarantees too."

L considers this while stacking sugar cubes into a tower. "I can offer protection. Watari\`s resources are considerable. As for immunity — from prosecution for possessing the notebook? Certainly. From prosecution for using it?" His eyes sharpen. "Have you used it?"

The question hangs in the air. Sidoh shifts nervously beside you.`,scene:'dark',mood:'#1a1a3e',characters:['L','Sidoh'],choices:[{text:'Be honest. "Once. A hostage-taker. I had to know if it was real."',next:'dn_admit_use',requires:{first_kill:true},effects:{stats:{cou:1},relationships:{l:-1}}},{text:'"No. I have never written a name."',next:'dn_deny_use',requires:{vowed_no_kill:true},effects:{stats:{int:1},relationships:{l:2}}},{text:'"What matters is stopping Kira. My past is irrelevant."',next:'dn_redirect_l',effects:{stats:{cha:1}}}]};

DN_NODES.dn_alliance_terms = {text:`"I keep the notebook. Non-negotiable."

L\`s eyes narrow. "You are asking me to allow a second Death Note to remain in civilian hands while I hunt the first."

"I am asking you to trust the person who came to you voluntarily with information that could end this case. If I wanted to use the notebook against you, we would not be having this conversation."

L stares at you for a very long time. Then he reaches for a strawberry.

"Acceptable. Provisionally. You keep the notebook. You do not use it without my authorization. And Watari will know your location at all times."

"Agreed."

"Then welcome to the Kira Task Force. I hope you survive the experience."`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{joined_l:true,kept_notebook:true},relationships:{l:2}},choices:[{text:'Reveal Light Yagami as Kira.',next:'dn_reveal_kira_to_l'},{text:'Ask L to share what he already knows first.',next:'dn_l_evidence',effects:{stats:{per:1}}}]};

DN_NODES.dn_l_evidence = {text:`L walks you through the case. His methods are extraordinary — layered deductions built on behavioral analysis, timing patterns, and psychological profiling.

"Kira requires a name and a face. The FBI agents I deployed were killed after they began investigating NPA families — specifically after one agent, Raye Penber, was assigned to follow Light Yagami. Penber died on a train. His fiancee, Naomi Misora — a brilliant FBI agent — disappeared shortly after. I believe Light killed them both."

"The Second Kira — Misa Amane — sent video tapes to Sakura TV that L intercepted. Her messages to Kira suggested worship, obsession. She can kill without knowing a name, which means a different mechanism — the Shinigami Eyes you described."

"And Light himself. Perfect grades. Perfect behavior. Perfect alibi for every killing. Nobody is that perfect unless they are performing."

L looks at you with those hollow, brilliant eyes. "With your knowledge of the Death Note\`s rules, we can construct a trap Light cannot escape."`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{knows_l_evidence:true},relationships:{l:1}},choices:[{text:'"I have an idea. A trap using the notebook\`s ownership rules."',next:'dn_trap_plan',effects:{stats:{int:1}}},{text:'"We should confront Light while he does not expect it."',next:'dn_confront_plan',effects:{stats:{cou:1}}},{text:'"Target Misa first. She is the weak link."',next:'dn_target_misa_plan',effects:{stats:{per:1}}}]};

DN_NODES.dn_join_task_force = {text:`You meet the task force in L\`s hotel headquarters. Deputy Director Soichiro Yagami — Light\`s father — stares at the Death Note with horror. Matsuda gasps. Aizawa\`s jaw tightens.

"This is how Kira kills," L says flatly. "Our new associate has provided proof. The question now is how we proceed."

Soichiro\`s voice is steady despite the devastation in his eyes. "And you say my son..."

"Is the primary suspect. Yes." L does not soften the blow.

The room is silent. You watch Soichiro Yagami process the possibility that his son is the most prolific killer in human history. It is the most painful thing you have ever witnessed.

"Then we catch him," Soichiro says. "If Light is Kira... we catch him. And we do it right."`,scene:'dark',mood:'#1a1a3e',characters:['L','Light'],effects:{flags:{on_task_force:true},relationships:{l:2}},choices:[{text:'Propose using the notebook\`s rules to trap Light.',next:'dn_trap_plan',effects:{stats:{int:1}}},{text:'Volunteer to get close to Light as a fellow student.',next:'dn_enroll_tooh',effects:{stats:{cha:1}}},{text:'Focus on Misa Amane — she will crack first.',next:'dn_target_misa_plan',effects:{stats:{per:1}}}]};

DN_NODES.dn_meet_light = {text:`The coffee shop is crowded. Sunday afternoon in Aoyama — couples, students, tourists. The perfect place for a meeting nobody should notice.

Light Yagami is already seated. Two coffees on the table. He sees you and smiles — warm, welcoming, the smile of a friend. It is terrifying because it is flawless.

Ryuk hovers behind him, invisible to everyone except Death Note owners. The Shinigami is enormous, grotesque, grinning with permanent amusement. His yellow eyes find you immediately.

"So there IS another one," Ryuk laughs. "This is getting interesting."

Light\`s smile does not waver. "Sit down. We have a lot to discuss." His eyes are calm, calculating, measuring you the way a chess grandmaster evaluates a new opponent.

"Show me your notebook," he says. "And I will show you mine."`,scene:'dark',mood:'#8b0000',characters:['Light','Ryuk','Sidoh'],effects:{flags:{met_light:true},relationships:{light:1}},choices:[{text:'Show the notebook. Establish mutual trust.',next:'dn_mutual_reveal',effects:{stats:{cou:1},relationships:{light:2}}},{text:'"You first. You are the one who has been killing for months."',next:'dn_challenge_light',effects:{stats:{int:1}}},{text:'"I did not come to show notebooks. I came to propose an alliance."',next:'dn_propose_alliance',effects:{stats:{cha:1}}}]};

DN_NODES.dn_meet_light_safe = {text:`Before the meeting, you set up contingencies. A sealed envelope with a trusted associate — if you do not check in within two hours, it goes to every major news outlet. Inside: Light Yagami\`s identity, the Death Note rules, and Misa Amane\`s involvement.

You also write a single entry in a separate note, sealed: your own cause of death, in case Light tries to use the notebook. "If I die by heart attack or any suspicious cause, the contents of the envelope prove Kira\`s identity."

It is not perfect. But it is something.

Light is waiting in the coffee shop. He smiles when he sees you. Behind him, Ryuk\`s grotesque grin stretches wider.

"You came prepared," Light says, glancing at your bag. "I can tell. That is smart. I would have done the same."

"Then we understand each other."`,scene:'dark',mood:'#8b0000',characters:['Light','Ryuk'],effects:{flags:{met_light:true,has_contingency:true},relationships:{light:1}},choices:[{text:'"I want to work with you. Together we can build a new world."',next:'dn_propose_alliance',effects:{stats:{cha:1},relationships:{light:2}}},{text:'"I want to understand your vision before I commit to anything."',next:'dn_light_vision',effects:{stats:{int:1}}},{text:'"Let me be direct — L is closing in on Misa. You need my help."',next:'dn_leverage_light',effects:{stats:{per:1}}}]};

DN_NODES.dn_befriend_light = {text:`Light\`s smile warms by exactly the right number of degrees. "Thank you. I take my studies seriously." He tilts his head. "You transferred in this semester? What is your area of focus?"

You talk. For weeks, you build a friendship — or what passes for friendship with someone who trusts no one. Study sessions. Coffee runs. Discussions about justice and morality that feel like they have double meanings.

Light is brilliant. Genuinely, staggeringly brilliant. It would be easy to admire him if you did not know what he does every evening between 9 and 10 PM.

Then one night, studying late at his house, you excuse yourself to the bathroom. You pass his room. The door is slightly open.

You see Ryuk. The Shinigami is floating by the window, eating an apple. He sees you through the crack.

His yellow eyes lock with yours and his grin splits wider. He can tell you see him. Which means you have touched a Death Note.

Light comes up the stairs behind you. "Everything okay?"`,scene:'dark',mood:'#2a2a2a',characters:['Light','Ryuk'],effects:{flags:{befriended_light:true,ryuk_saw_you:true},relationships:{light:2}},choices:[{text:'"Fine. Just admiring your house." Play dumb.',next:'dn_play_dumb',effects:{stats:{per:1}},check:{stat:'per',dc:12}},{text:'Turn and face Light. The game is up. "We need to talk, Kira."',next:'dn_confront_light',effects:{stats:{cou:1}}},{text:'Act casual but leave immediately. Ryuk will tell Light.',next:'dn_emergency_exit',effects:{stats:{int:1}}}]};

DN_NODES.dn_confront_light = {text:`Light\`s expression does not change. Not a flicker. Not a twitch. The smile stays exactly where it was.

"Kira?" He laughs. "That is quite an accusation. Are you feeling alright?"

"I know about the Death Note. I know about Ryuk. I know about Misa and her Shinigami Eyes." You meet his gaze without flinching. "I know because I have one too."

The silence that follows is the most dangerous moment of your life. Behind Light, you can feel Ryuk\`s excitement radiating like heat.

Then Light\`s smile changes. The warmth drains out of it, replaced by something cold, sharp, and absolutely real for the first time. This is the true Light Yagami. The god behind the mask.

"Interesting," he says. "You have known this entire time. And you are still alive. Which means you either have protection I cannot see, or you are useful to me." His eyes narrow. "Which is it?"`,scene:'dark',mood:'#8b0000',characters:['Light','Ryuk'],effects:{flags:{confronted_light:true},relationships:{light:-1}},choices:[{text:'"Both. I have contingencies AND I am useful."',next:'dn_power_play',effects:{stats:{int:1},relationships:{light:1}}},{text:'"I want to help you create your new world."',next:'dn_propose_alliance',effects:{stats:{cha:1},relationships:{light:2}}},{text:'"Neither. I am here to give you a choice — surrender or be exposed."',next:'dn_ultimatum',effects:{stats:{cou:2}},check:{stat:'cou',dc:14}}]};

DN_NODES.dn_deflect_light = {text:`You laugh and shrug. "Everyone watches the smartest person in the room. Occupational habit — I am competitive."

Light\`s smile returns to its calibrated warmth. "Fair enough. I appreciate honesty." He does not believe you — you can see it in the micro-expressions — but he files it away for later.

Over the following weeks, you become study partners. Light is careful, controlled, never revealing anything beyond the perfect student facade. But you learn his patterns. His schedule. The way his expression tightens when the news reports on the Kira case.

You also notice something else — Light is being followed. A young man with messy hair and poor posture who sits too close in lectures and asks too many questions.

L\`s agent. Or L himself.`,scene:'dark',mood:'#2a2a2a',characters:['Light','L'],effects:{flags:{deflected_light:true},relationships:{light:2}},choices:[{text:'Observe the person following Light. Try to identify them.',next:'dn_spot_l',effects:{stats:{per:1}},check:{stat:'per',dc:10}},{text:'Warn Light about the tail — build trust.',next:'dn_warn_light_tail',effects:{stats:{cha:1},relationships:{light:2}}},{text:'Contact the follower. If it is L, offer to help.',next:'dn_contact_l',effects:{stats:{int:1}}}]};

DN_NODES.dn_play_dumb = {text:`"Fine, just looking at the family photos in the hallway." You keep your expression neutral, your heartbeat steady.

Light studies your face. For three agonizing seconds, every microsecond of your expression is analyzed by a genius who has been deceiving the world\`s greatest detective for months.

"My mother keeps adding more every year," Light says with a warm laugh. "Come on, let us finish the problem set."

You survived. But Ryuk saw you. And Ryuk does not keep secrets for fun — he keeps them until revealing them is more entertaining.

You have days, maybe hours, before Ryuk tells Light that you can see Shinigami. You need to act.`,scene:'dark',mood:'#2a2a2a',characters:['Light','Ryuk'],effects:{flags:{played_dumb:true}},choices:[{text:'Contact L immediately. Time is running out.',next:'dn_contact_l',effects:{stats:{int:1}}},{text:'Confront Light tomorrow on your terms, not his.',next:'dn_preemptive_reveal',effects:{stats:{cou:1}}},{text:'Disappear. New identity. Regroup.',next:'dn_go_underground',effects:{stats:{per:1}}}]};

DN_NODES.dn_emergency_exit = {text:`"I just remembered — I have an assignment due at midnight. I have got to go." You grab your bag and head for the door, keeping your pace casual.

Light watches you go. "Sure. See you in class."

You do not run until you are two blocks away. Then you sprint.

Ryuk will tell Light. It might take hours — the Shinigami loves dramatic timing — but it will happen. And once Light knows you can see Ryuk, he will know you have touched a Death Note.

From that moment, you become either an asset or a target. And Light Yagami does not leave threats alive.

You need allies. You need a plan. And you need both before tomorrow morning.`,scene:'dark',mood:'#8b0000',characters:['Light','Ryuk'],effects:{flags:{emergency_exit:true}},choices:[{text:'Contact L. Emergency. Full disclosure.',next:'dn_contact_l',effects:{stats:{int:1}}},{text:'Preemptive strike — contact Light first, reveal on your terms.',next:'dn_preemptive_reveal',effects:{stats:{cou:1}}},{text:'Go underground. New location, prepaid phone, new identity.',next:'dn_go_underground',effects:{stats:{per:1}}}]};

DN_NODES.dn_propose_alliance = {text:`"A new world needs more than one god," you say carefully. "You have been building something remarkable, Light. But L is closing in. Misa is a liability. You need someone who understands the notebook at your level."

Light listens. His expression is unreadable — but behind his eyes, you can see the gears turning. The calculation. The cost-benefit analysis.

"What do you bring that I do not already have?"

"A second notebook. Independent operations. A Shinigami who is not Ryuk — one who might actually help instead of watching for entertainment. And information about L that you do not have."

Light\`s eyes sharpen at that last point. "You know something about L?"

"I know how to find him. The question is: do you want to find him, or do you want to keep playing this game forever?"`,scene:'dark',mood:'#8b0000',characters:['Light','Ryuk','Sidoh'],effects:{flags:{proposed_alliance:true},relationships:{light:3}},choices:[{text:'Offer to help kill L — prove your commitment to the new world.',next:'dn_offer_kill_l',effects:{stats:{cou:1},relationships:{light:2}}},{text:'Suggest a strategic partnership — you handle L, Light builds the new world.',next:'dn_strategic_alliance',effects:{stats:{int:1},relationships:{light:2}}},{text:'Secretly plan to betray Light once L is safe.',next:'dn_double_agent_plan',effects:{stats:{per:1},flags:{planning_betrayal:true}}}]};

DN_NODES.dn_light_vision = {text:`Light leans back. The mask drops — not entirely, but enough to show the conviction beneath.

"Imagine a world without crime. Without corruption. Without the powerful preying on the weak. Every dictator, every cartel leader, every war criminal — gone. Not in decades of diplomatic hand-wringing. Now. Instantly."

His voice is calm, measured, but underneath it burns something that is not quite madness and not quite sanity.

"L thinks I am a murderer. The police think I am a criminal. But tell me — the world\`s crime rate has dropped 70% since I began. Wars have stopped. People feel safe. Is that evil?"

He looks at you with absolute certainty. "I am building a new world. The question is whether you want to help build it, or be left behind when it arrives."`,scene:'dark',mood:'#8b0000',characters:['Light'],effects:{flags:{heard_vision:true}},choices:[{text:'"You are right. The results speak for themselves."',next:'dn_strategic_alliance',effects:{relationships:{light:3}}},{text:'"The results do not justify the method. You are still killing people."',next:'dn_challenge_morality',effects:{stats:{int:1},relationships:{light:-2}}},{text:'"I need time to think about this."',next:'dn_stall_light',effects:{stats:{per:1}}}]};

DN_NODES.dn_leverage_light = {text:`Light\`s composure cracks — just a fraction. "How do you know about Misa and L?"

"Because I have been watching. Both of you. Kira and L. I know things that would end your operation overnight. But I am not here to threaten you."

"Then what are you here for?"

"I am here because you need an ally. Misa is devoted but reckless. Ryuk is entertained but useless. L is methodical and getting closer every day. You are brilliant, Light, but you are fighting a war on multiple fronts alone."

Light studies you. The calculation behind his eyes is almost visible — threat assessment, probability matrices, strategic value.

"And what do you want in return?"

"A seat at the table. When your new world arrives, I want to be part of shaping it."`,scene:'dark',mood:'#8b0000',characters:['Light','Misa'],effects:{flags:{leveraged_light:true},relationships:{light:2}},choices:[{text:'Mean it. Join Light fully.',next:'dn_strategic_alliance',effects:{relationships:{light:3}}},{text:'You are lying. You are buying time for L.',next:'dn_double_agent_plan',effects:{stats:{per:1},flags:{planning_betrayal:true}}},{text:'You are not sure what you want yet. Play along.',next:'dn_stall_light',effects:{stats:{int:1}}}]};

DN_NODES.dn_divide_strategy = {text:`"I will handle Light. You handle Misa. Divide and conquer."

L considers this, stacking sugar cubes thoughtfully. "It has merit. If I move on Misa Amane simultaneously while you neutralize Light\`s network, he loses his Shinigami Eyes and his most devoted follower in one stroke."

"Exactly. Without Misa, Light is brilliant but blind. No more killing with just a face. He needs names — and names take time to research. That window is where we catch him."

L nods slowly. "You take the field operation against Light. I will orchestrate Misa\`s detention. We move in 72 hours."

The clock is ticking.`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{divide_strategy:true},relationships:{l:2}},choices:[{text:'Prepare to confront Light.',next:'dn_final_confrontation',effects:{stats:{int:1}}},{text:'Enroll at To-Oh to get close to Light first.',next:'dn_enroll_tooh',effects:{stats:{per:1}}}]};

DN_NODES.dn_admit_double_agent = {text:`"There is a complication," you say. L\`s expression does not change — but his stillness deepens.

"I have been in contact with Light Yagami. He believes I am his ally."

L places his cake fork down with deliberate precision. "You have been playing both sides."

"I have been gathering intelligence from both sides. There is a difference."

"The difference is trust. And you have just damaged mine considerably." L\`s voice is ice. "However — your position inside Kira\`s circle is invaluable. If you are willing to continue the deception, feeding Light false information while reporting to me, you become the most important asset in this investigation."

"A double agent."

"Precisely. The question is whether I can trust you to be MY double agent and not his."`,scene:'dark',mood:'#1a1a3e',characters:['L','Light'],effects:{flags:{admitted_double:true},relationships:{l:-1}},choices:[{text:'"I am yours. Tell me what false information to feed Light."',next:'dn_trap_plan',effects:{stats:{int:1},relationships:{l:2}}},{text:'"I will do it. But I want full task force access in return."',next:'dn_join_task_force',effects:{stats:{cha:1}}}]};

// Connector and transition nodes

DN_NODES.dn_watch_watchers = {text:`You spend three days observing L\`s surveillance team. They are good — rotating positions, using directional microphones, cameras disguised as everyday objects. But they have a blind spot: they do not know about Shinigami.

Sidoh floats through their equipment, reading their notes, listening to their communications. He reports back to you with meticulous detail.

"They have cameras in every room of the Yagami house. But Light writes names in a way the cameras cannot detect — using a miniature TV hidden in a chip bag. He writes while appearing to eat snacks and watch television."

This is genius-level concealment. Light Yagami is not just smart — he is operating under full surveillance and STILL killing. L knows this and it drives him mad.

You now have intelligence on both sides. The question is what to do with it.`,scene:'dark',mood:'#2a2a2a',characters:['Light','L','Sidoh'],effects:{flags:{watched_watchers:true}},choices:[{text:'Go to L with everything. Both sides of the chess board.',next:'dn_contact_l',effects:{stats:{int:1}}},{text:'Approach Light. Tell him you know about L\`s surveillance.',next:'dn_contact_light_direct',effects:{stats:{cou:1}}},{text:'Keep watching. The more you know, the more power you have.',next:'dn_remote_war',effects:{stats:{per:1}}}]};

DN_NODES.dn_contact_light_direct = {text:`You find Light at the university library. Casually, you sit beside him and open a textbook. Then you write on a scrap of paper: "I know you are Kira. I have a Death Note. We need to talk. Nod if you understand."

Light reads the note. For five seconds, nothing. Then the smallest nod you have ever seen.

He writes back: "The cafe on Meiji-dori. 8 PM. Burn this paper."

You burn it in the bathroom sink and walk out. Tonight, you meet Kira face to face.`,scene:'dark',mood:'#8b0000',characters:['Light'],effects:{flags:{arranged_meeting:true}},choices:[{text:'Go to the meeting prepared.',next:'dn_meet_light_safe',effects:{stats:{int:1}}},{text:'Go openly. Show strength, not fear.',next:'dn_meet_light',effects:{stats:{cou:1}}}]};

DN_NODES.dn_remote_war = {text:`You operate from the shadows. Feeding L intelligence through encrypted channels. Monitoring Light\`s patterns through Sidoh. Never showing your face to either side.

It works — until it does not. L is getting frustrated with your refusal to meet. Light\`s patterns are shifting, becoming unpredictable, as if he senses someone new in the game.

Then Misa Amane is detained by L. Light activates a contingency plan you did not foresee — he relinquishes ownership of his Death Note, erasing his memories of being Kira. Without memories, without guilt, he is genuinely innocent.

The investigation stalls. L has no evidence against a man who genuinely does not remember being Kira. And you are the only person in the world who knows the truth.`,scene:'dark',mood:'#1a1a3e',characters:['L','Light','Misa'],effects:{flags:{remote_war:true,light_lost_memories:true}},choices:[{text:'Tell L about the memory erasure rule. It explains everything.',next:'dn_reveal_memory_rule',effects:{stats:{int:1}}},{text:'Find Light\`s hidden Death Note before he reclaims it.',next:'dn_find_hidden_note',effects:{stats:{per:1}},check:{stat:'per',dc:13}},{text:'Contact the amnesiac Light. Test whether he is truly innocent.',next:'dn_test_innocent_light',effects:{stats:{int:1}}}]};

DN_NODES.dn_spot_l = {text:`The follower is not hard to identify once you know what to look for. Messy black hair. Dark circles under his eyes. He sits with his knees pulled to his chest in the lecture hall and holds a pen between two fingers like it is contaminated.

This is L. Not an agent — L himself. The world\`s greatest detective, sitting three seats from the world\`s greatest mass murderer, hiding in plain sight.

The audacity is breathtaking.

L catches you staring. His dark eyes fix on you for two seconds — analyzing, categorizing, filing you away. Then he looks back at the lecture.

You have been noticed by both Kira and L. This is either the most dangerous position in the world or the most powerful.`,scene:'dark',mood:'#1a1a3e',characters:['L','Light'],effects:{flags:{spotted_l:true}},choices:[{text:'Approach L after class. Discreetly.',next:'dn_contact_l',effects:{stats:{int:1}}},{text:'Do nothing. Let both of them come to you.',next:'dn_wait_game',effects:{stats:{per:1}}},{text:'Approach Light and L together. Force a confrontation.',next:'dn_force_meeting',effects:{stats:{cou:1}},check:{stat:'cou',dc:13}}]};

DN_NODES.dn_warn_light_tail = {text:`After class, you walk beside Light. "You are being followed," you say quietly. "Dark hair, poor posture, sits with his knees up. He has been in three of your classes this week."

Light\`s stride does not break. "I know," he says pleasantly. "He calls himself Ryuga Hideki. But thank you for the concern."

He glances at you sideways. Something flickers in his expression — reassessment. You just demonstrated observational skills and willingness to help. In Light\`s mental calculus, your value just increased.

"You are perceptive," he says. "I appreciate people who pay attention."

That night, Sidoh reports that Ryuk mentioned you to Light. "The Shinigami said you were \`more interesting than the others.\`" Coming from Ryuk, that is dangerous praise.`,scene:'dark',mood:'#2a2a2a',characters:['Light','Ryuk'],effects:{flags:{warned_about_l:true},relationships:{light:3}},choices:[{text:'Keep building trust with Light. Become indispensable.',next:'dn_befriend_light',effects:{stats:{cha:1}}},{text:'You have gotten too close. Pull back and contact L.',next:'dn_contact_l',effects:{stats:{per:1}}},{text:'Time to reveal your Death Note to Light.',next:'dn_confront_light',effects:{stats:{cou:1}}}]};

// More Arc 2 connector nodes

DN_NODES.dn_show_misa_note = {text:`You pull the Death Note from your bag. Misa\`s eyes go wide. Behind her, a massive Shinigami materializes — Rem. Tall, bone-white, with a single cold eye fixed on you.

"Another notebook," Rem says. "Who are you?"

"A friend. Or an enemy. That depends on Misa\`s next move."

Misa stares at the notebook, then at you, then at Rem. Her hand moves away from her bag. "You are... like Light? You have the same power?"

"Yes. And I know L is coming for you. Forty-eight hours at most."

Misa\`s face hardens with a devotion that borders on insanity. "Then I need to tell Light. He will protect me. He always protects me."

You are not sure if that is devotion or delusion. But Misa is your way to Light.`,scene:'dark',mood:'#3d0066',characters:['Misa','Sidoh'],effects:{flags:{showed_misa_note:true},relationships:{misa:2}},choices:[{text:'"Take me to Light. We can protect each other."',next:'dn_misa_to_light',effects:{stats:{cha:1}}},{text:'"Misa, Light does not love you. He is using your eyes."',next:'dn_turn_misa',effects:{stats:{per:1}},check:{stat:'per',dc:12}},{text:'"Before we go to Light — tell me everything about L\`s investigation."',next:'dn_misa_intel',effects:{stats:{int:1}}}]};

DN_NODES.dn_misa_to_light = {text:`Misa calls Light. The conversation is brief — her end is breathless excitement, his is controlled calm. Within an hour, you are in a private room at a restaurant in Omotesando.

Light Yagami sits across from you. Misa beside him, clinging to his arm. Ryuk lurks in the corner, eating an apple with grotesque enthusiasm. Sidoh trembles near the ceiling.

"So," Light says, his smile perfectly calibrated. "The Third Death Note owner. I have been wondering when you would appear."

"You knew?"

"I knew a second notebook was missing from the Shinigami realm. Ryuk mentioned it. I have been waiting to see who would find it." His eyes are cold assessment wrapped in warm courtesy. "The question is: are you here to help me, or to challenge me?"`,scene:'dark',mood:'#8b0000',characters:['Light','Misa','Ryuk','Sidoh'],effects:{flags:{met_light_via_misa:true},relationships:{light:1}},choices:[{text:'"Help. I believe in your vision."',next:'dn_strategic_alliance',effects:{relationships:{light:3}}},{text:'"Neither. I am here to propose a partnership of equals."',next:'dn_propose_alliance',effects:{stats:{int:1}}},{text:'"That depends on how you treat your allies. Ask Misa how she feels."',next:'dn_challenge_morality',effects:{stats:{per:1},relationships:{light:-1}}}]};

DN_NODES.dn_turn_misa = {text:`"Misa. Look at me. When Light talks to you, does he say he loves you? Or does he say \`you are useful\`? Does he hold you, or does he use your eyes and send you away?"

Misa\`s lip trembles. "He... he loves me. He said—"

"He said what he needed to say to keep you loyal. You traded HALF YOUR LIFE for Shinigami Eyes. What did Light trade? Nothing. He has never sacrificed anything for you."

The silence is brutal. Rem — Misa\`s Shinigami — watches you with that single, unreadable eye. But there is something there. Agreement, maybe. Rem cares about Misa in a way Shinigami are not supposed to care about humans.

"She is right, Misa," Rem says quietly. "Light Yagami does not love you. I have watched him. He never has."

Misa\`s world cracks. Tears stream down her face. But beneath the tears — anger. The kind of anger that changes everything.`,scene:'dark',mood:'#3d0066',characters:['Misa','Sidoh'],effects:{flags:{turned_misa:true},relationships:{misa:4}},choices:[{text:'"Help me stop Light. Help me help L."',next:'dn_misa_joins_you',effects:{stats:{cha:1},relationships:{misa:2}}},{text:'"Give up your notebook. Forget all of this. Be free."',next:'dn_misa_freedom',effects:{stats:{per:1}}},{text:'"Together we can take Light\`s notebook. End Kira ourselves."',next:'dn_misa_revenge_plan',effects:{stats:{cou:1}}}]};

DN_NODES.dn_misa_intel = {text:`Misa talks freely. She is not strategic — she shares everything because she trusts anyone who might help Light.

"L captured me once. He put me in restraints. It was horrible." She shudders. "But I gave up my notebook, so my memories were erased. L could not prove anything. Light got me released."

"L is working from a hotel in Roppongi. He has a team — Light\`s father, some NPA detectives. And Light is ON the team now. L invited him to join the investigation."

This stops you cold. Light Yagami — Kira — is working alongside L on the Kira case. The fox is in the henhouse. Every move L makes, Light sees it in real time.

The situation is far more dangerous than you realized.`,scene:'dark',mood:'#1a1a3e',characters:['Misa','L','Light'],effects:{flags:{misa_intel:true}},choices:[{text:'Go to L. Warn him that Light is sabotaging from inside.',next:'dn_join_task_force',effects:{stats:{int:1}}},{text:'Use this information to approach Light from a position of strength.',next:'dn_meet_light_safe',effects:{stats:{per:1}}},{text:'Play both sides. Feed L info about Light, feed Light info about L.',next:'dn_double_agent_plan',effects:{stats:{int:1},flags:{playing_both_sides:true}}}]};

// Arc 2 deeper nodes

DN_NODES.dn_strategic_alliance = {text:`The alliance with Light is intoxicating and terrifying. He is everything they say — brilliant, ruthless, visionary. When he explains his plan, it has the crystalline logic of a mathematical proof.

"L will be dealt with. The task force is already compromised — I am on the inside. With your notebook, we can eliminate targets L is tracking, making it appear Kira has access to police databases. L will suspect a mole. The investigation will collapse from within."

He pauses. "But I need something from you first. A test of commitment. L has an associate — Watari. An elderly man who manages his operations. Write his name."

He slides a photo across the table. An old man with kind eyes.

"This is how I know you are serious," Light says. "Watari dies, L loses his support network, and we proceed with the plan."

This is the moment. The line you cannot uncross.`,scene:'dark',mood:'#8b0000',characters:['Light'],effects:{flags:{allied_with_light:true},relationships:{light:3}},choices:[{text:'Write the name. Commit fully to Light\`s vision.',next:'dn_kill_watari',effects:{stats:{cou:1},flags:{killed_watari:true}}},{text:'Refuse. "I choose my own targets. That is the deal."',next:'dn_refuse_order',effects:{stats:{int:1},relationships:{light:-2}}},{text:'Agree, but write a fake name. Buy time.',next:'dn_fake_compliance',effects:{stats:{per:1}},check:{stat:'int',dc:13}}]};

DN_NODES.dn_double_agent_plan = {text:`You are playing the most dangerous game in history. Feeding L intelligence about Light. Feeding Light intelligence about L. Standing in the middle of two geniuses who would both kill you if they knew.

It requires perfect balance. Every piece of information you share must be true enough to be valuable, but incomplete enough to keep both sides dependent on you. You are not on anyone\`s side. You are on your side.

Sidoh watches this with growing anxiety. "Humans are terrifying," he mutters. "Ryuk was right about that."

The balance holds for three weeks. Then L sends you a message: "I know you are in contact with Kira. I have known for nine days. We need to discuss this. — L"

Your blood freezes. L knows.`,scene:'dark',mood:'#1a1a3e',characters:['L','Light','Sidoh'],effects:{flags:{double_agent:true}},choices:[{text:'Come clean to L. Explain your strategy.',next:'dn_confess_to_l',effects:{stats:{int:1},relationships:{l:-1}}},{text:'Deny everything. Bluff your way through.',next:'dn_bluff_l',effects:{stats:{cha:1}},check:{stat:'cha',dc:14}},{text:'Cut contact with Light immediately. Commit to L\`s side.',next:'dn_commit_to_l',effects:{stats:{per:1},relationships:{l:2}}}]};

DN_NODES.dn_preemptive_reveal = {text:`You find Light on campus the next morning. Before he can speak, before Ryuk can gloat, you take control.

"Light. I own a Death Note. Sidoh\`s notebook, not Ryuk\`s. I have known you are Kira for weeks. I am not your enemy — but I will not let you make me one."

Light\`s mask slips for half a second — genuine surprise. Then it resets. "Bold. I suppose Ryuk would have told me anyway."

"He would have. I prefer to control the timing of my own revelations."

A smile — real this time, not performed. "You are interesting. Most people with a Death Note either use it immediately or panic. You strategized." He extends his hand. "I think we should talk properly."`,scene:'dark',mood:'#8b0000',characters:['Light','Ryuk'],effects:{flags:{preemptive_reveal:true},relationships:{light:2}},choices:[{text:'Take his hand. Enter the alliance.',next:'dn_propose_alliance',effects:{stats:{cou:1},relationships:{light:2}}},{text:'"Talk, yes. But not here. Somewhere without cameras."',next:'dn_meet_light_safe',effects:{stats:{per:1}}},{text:'"I will talk. But know that if anything happens to me, evidence goes to L."',next:'dn_power_play',effects:{stats:{int:1}}}]};

DN_NODES.dn_go_underground = {text:`You disappear. New apartment, prepaid phone, cash only. You stop attending classes. Sidoh is your only companion in a cramped room in Ikebukuro.

For two weeks, you monitor the situation from the dark. The Kira case continues. L and Light play their chess game. Misa is detained, released, detained again. The death toll climbs.

From the shadows, you have clarity. You can see the entire board. Both players are making mistakes — L\`s overreliance on surveillance, Light\`s need for control. Either one could be exploited.

But you cannot stay hidden forever. Eventually, you must choose a side. Or create your own.`,scene:'dark',mood:'#2a2a2a',characters:['Sidoh'],effects:{flags:{underground:true}},choices:[{text:'Contact L from your hidden position.',next:'dn_contact_l',effects:{stats:{int:1}}},{text:'Build your own network. Become the Third Kira properly.',next:'dn_third_kira_noticed',effects:{stats:{cou:1}}},{text:'Reach out to Mello and Near — L\`s successors.',next:'dn_contact_successors',effects:{stats:{per:1}}}]};

DN_NODES.dn_third_kira_noticed = {text:`The news picks it up first. "Pattern analysis suggests a Third Kira may be operating independently from the original." Forums explode. L releases a statement: "I am aware of the anomalous killings. The Third Kira will be found."

Light is furious — Sidoh reports that Ryuk overheard him raging about "an amateur ruining everything." Misa is confused. L is intrigued.

You have become a player on the board. Not a pawn — not yet a king — but something no one predicted.

Then a message arrives on your encrypted channel. Not from L. Not from Light. From someone who signs themselves "N."

"Third Kira. I know who you are. I know where you are. We should meet. — N"

Near. L\`s successor. The next generation is already moving.`,scene:'dark',mood:'#1a1a3e',characters:['L','Light','Near'],effects:{flags:{noticed_third_kira:true}},choices:[{text:'Meet Near. A new alliance could change everything.',next:'dn_contact_successors',effects:{stats:{int:1}}},{text:'Ignore Near. Contact L directly.',next:'dn_contact_l',effects:{stats:{per:1}}},{text:'Contact Light. If L\`s successors know about you, you need protection.',next:'dn_contact_light_direct',effects:{stats:{cou:1}}}]};

DN_NODES.dn_own_third_kira = {text:`You do not hide. You broadcast. Encrypted messages on the same channels Kira uses. A manifesto that distinguishes your philosophy from Light\`s indiscriminate killing.

"I am not Kira. I am what Kira should have been. Targeted. Precise. The powerful who exploit the weak will answer to me."

The response is immediate. Half of Kira\`s followers shift to you. Forums split into factions. "True Kira" versus "Third Kira." Light is publicly silent but privately enraged.

L contacts you within 48 hours: "You are as guilty as Kira. But you are also useful. Talk to me."

You are now the most wanted and the most wanted-as-an-ally person in the world.`,scene:'dark',mood:'#8b0000',characters:['L','Light'],effects:{flags:{owned_third_kira:true}},choices:[{text:'Talk to L. Use your position to negotiate.',next:'dn_contact_l',effects:{stats:{int:1}}},{text:'Talk to Light. Merge operations.',next:'dn_contact_light_direct',effects:{stats:{cha:1}}},{text:'Talk to neither. Operate independently.',next:'dn_solo_path',effects:{stats:{cou:1}}}]};

DN_NODES.dn_contact_successors = {text:`Near meets you in a sterile white room in an undisclosed location. He sits on the floor surrounded by toys — puzzles, dice, model figurines arranged in what you realize is a recreation of the Kira case.

He is young. Disturbingly young. White hair, pale skin, enormous dark eyes that miss nothing.

"You are the Third Kira," Near says, placing a new figurine on his model. "This piece represents you. I have been trying to determine where you fit on the board."

Beside him, a figure with a scar and blond hair leans against the wall with arms crossed. Mello. His eyes burn with an intensity Near lacks — passionate where Near is cold.

"I say we take the notebook from you and end this," Mello growls.

"And I say we use you," Near counters calmly. "You have a Death Note. You have intelligence on Kira. And you have something neither Light Yagami nor L possesses — you are not emotionally invested in winning."

Near looks up at you. "Help us catch Kira. And we will ensure you are treated as a cooperating witness, not a criminal."`,scene:'dark',mood:'#1a1a3e',characters:['Near','Mello'],effects:{flags:{met_successors:true},relationships:{near:2,mello:1}},choices:[{text:'Accept. Work with the next generation.',next:'dn_near_alliance',effects:{stats:{int:1},relationships:{near:2}}},{text:'"I want Mello on board too. Both of you or neither."',next:'dn_unite_successors',effects:{stats:{cha:1}},check:{stat:'cha',dc:12}},{text:'"I will not be anyone\`s pawn. Partners or nothing."',next:'dn_negotiate_successors',effects:{stats:{cou:1}}}]};

// Connector nodes for various paths

DN_NODES.dn_power_play = {text:`"Both," you say. "I have a dead man\`s switch — evidence packet that goes to L, Interpol, and every major news outlet if I miss a check-in. And I have intelligence you cannot get anywhere else."

Light\`s respect increases visibly. This is his language — calculated power, mutual leverage, strategic necessity.

"Good. I do not trust people who have no leverage. It means they have nothing to lose." He extends his hand. "Let us build a new world."

You shake it. Your palm is steady. Your mind is racing.`,scene:'dark',mood:'#8b0000',characters:['Light'],effects:{flags:{power_play:true},relationships:{light:3}},choices:[{text:'Work with Light. For now.',next:'dn_strategic_alliance',effects:{relationships:{light:1}}},{text:'Work with Light while secretly feeding information to L.',next:'dn_double_agent_plan',effects:{stats:{per:1},flags:{planning_betrayal:true}}}]};

DN_NODES.dn_challenge_morality = {text:`"You have killed thousands, Light. Petty criminals. People whose worst crime was stealing a car. Is that the precision of a god, or the paranoia of a tyrant?"

Light\`s expression hardens. "Every death serves the greater good. Fear is the only language humanity respects. When criminals know they will die, they stop committing crimes. The mathematics are clear."

"The mathematics of a man who has never been wrong. What happens when you make a mistake? When you kill an innocent person?"

Silence. For the first time, you see something flicker behind Light\`s eyes. Not doubt — Light does not experience doubt. But awareness. The awareness that this question has an answer he does not want to face.

"I do not make mistakes," he says quietly. But the conviction is hollow. You both hear it.`,scene:'dark',mood:'#8b0000',characters:['Light'],effects:{flags:{challenged_morality:true},relationships:{light:-2}},choices:[{text:'Press harder. "You already have. I can prove it."',next:'dn_ultimatum',effects:{stats:{int:1}}},{text:'Back off. You have planted the seed of doubt.',next:'dn_stall_light',effects:{stats:{per:1}}},{text:'"Then prove it. Give me one month without killing. If crime rises, I will help you."',next:'dn_dare_light',effects:{stats:{cou:1}}}]};

DN_NODES.dn_stall_light = {text:`You leave the meeting without committing. Light watches you go with an expression that is equal parts curiosity and caution. You are an unknown variable in his equation, and Light Yagami does not tolerate unknowns for long.

Over the next week, you feel the pressure building. Sidoh reports that Light has Misa watching for you — her Shinigami Eyes scanning crowds, searching for your name and face. Ryuk drops hints about "the interesting new player" that keep Light on edge.

You are running out of neutral ground. Soon, you will have to choose — Light\`s side, L\`s side, or your own.`,scene:'dark',mood:'#2a2a2a',characters:['Light','Misa','Sidoh'],effects:{flags:{stalling:true}},choices:[{text:'Go to L. Commit to justice.',next:'dn_commit_to_l',effects:{stats:{int:1}}},{text:'Return to Light. Commit to the new world.',next:'dn_strategic_alliance',effects:{stats:{cou:1}}},{text:'Forge your own path. Contact Near and Mello.',next:'dn_contact_successors',effects:{stats:{per:1}}}]};

DN_NODES.dn_wait_game = {text:`You wait. Both L and Light are aware of you now — a new variable they cannot classify. You attend classes, study, maintain normalcy while the greatest intellectual duel in history plays out around you.

L makes his move first. A note slipped into your bag during a lecture: "I know you can see things others cannot. Room 1412, Imperial Hotel. Tonight."

Light makes his move second. A text from an unknown number: "Whoever you are, you are not as invisible as you think. We should meet before L gets to you. — K"

Both of them. Same night. You cannot meet both.`,scene:'dark',mood:'#2a2a2a',characters:['L','Light'],effects:{flags:{both_contacted:true}},choices:[{text:'Meet L. He is the side of justice.',next:'dn_meet_l',effects:{stats:{int:1}}},{text:'Meet Light. Know your enemy.',next:'dn_meet_light',effects:{stats:{cou:1}}},{text:'Meet neither. Send both a message: "Tomorrow. Together. The three of us."',next:'dn_force_meeting',effects:{stats:{per:1}},check:{stat:'int',dc:14}}]};

DN_NODES.dn_force_meeting = {text:`The message goes to both: "I have a Death Note. I know who Kira is. I know who L is. Tomorrow, 3 PM, the observation deck of Tokyo Tower. All three of us. No weapons, no tricks, no aliases. If either of you refuses, I send everything I know to Interpol."

L\`s response: "Reckless. Brilliant. I will be there."

Light\`s response takes longer: "You are either the bravest or the stupidest person I have ever encountered. Fine."

Tomorrow, three people who could reshape the world will stand in the same room. The detective, the killer, and the wild card.

You.`,scene:'dark',mood:'#1a1a3e',characters:['L','Light'],effects:{flags:{forced_meeting:true}},choices:[{text:'Go with a plan to help L arrest Light.',next:'dn_tower_arrest',effects:{stats:{int:1}}},{text:'Go with a genuine proposal for all three to cooperate.',next:'dn_tower_truce',effects:{stats:{cha:1}}},{text:'Go planning to eliminate whoever threatens you.',next:'dn_tower_survival',effects:{stats:{cou:1}}}]};

// ---- ARC 3: THE RECKONING (~25 nodes) ----

DN_NODES.dn_commit_to_l = {text:`You walk into L\`s hotel headquarters and set the Death Note on the table. "I am done playing both sides. Light Yagami is Kira. Here is every piece of evidence I have gathered. And here is how we end this."

L stares at the notebook, then at you. For the first time, something like warmth enters his expression. "I was beginning to wonder if you would ever fully commit."

"I needed to be sure."

"Sure of what?"

"That justice was worth fighting for. Even against someone as brilliant as Light Yagami."

L picks up a sugar cube. "It is. It always has been. Now — let us build a trap he cannot escape."`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{committed_to_l:true},relationships:{l:4}},choices:[{text:'Plan a trap using the notebook\`s ownership transfer rules.',next:'dn_trap_plan',effects:{stats:{int:1}}},{text:'Propose a direct confrontation — force Light to reveal himself.',next:'dn_confront_plan',effects:{stats:{cou:1}}},{text:'Target Misa first to cut off Light\`s resources.',next:'dn_target_misa_plan',effects:{stats:{per:1}}}]};

DN_NODES.dn_trap_plan = {text:`You and L work through the night. The plan is elegant: use the Death Note\`s ownership rules against Light.

"If Light relinquishes his notebook, he loses his memories," you explain. "He has done this before — temporarily giving up the notebook to clear himself during investigations. But the notebook has to go somewhere. He must have given it to someone he trusts."

L\`s eyes light up. "Higuchi. The Yotsuba Group executive. Kira\`s killings continued through a proxy — that is how Light maintained the illusion of innocence while under surveillance."

"Exactly. And when Light touches the notebook again, his memories return. If we can set up a situation where Light touches his notebook in front of witnesses — in front of his father — the mask falls."

L smiles. It is a rare, unsettling thing. "I have been waiting for someone who understands the game at this level."`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{trap_planned:true}},choices:[{text:'Execute the trap immediately.',next:'dn_execute_trap',effects:{stats:{int:1}}},{text:'Add a failsafe — use your notebook as insurance.',next:'dn_trap_failsafe',effects:{stats:{per:1}}},{text:'Bring the task force in on the plan.',next:'dn_task_force_trap',effects:{stats:{cha:1}}}]};

DN_NODES.dn_confront_plan = {text:`"No more chess. No more surveillance. We confront him directly. With the Death Note as evidence, with his father as a witness, in a room he cannot leave."

L shakes his head slowly. "A direct confrontation is risky. Light is brilliant under pressure. He will have contingencies."

"Then we dismantle his contingencies first. Secure Misa. Locate his hidden notebook. Remove Ryuk\`s entertainment value so the Shinigami does not interfere."

L tilts his head. "You have been thinking about this."

"Every day since I found the notebook."`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{confront_planned:true}},choices:[{text:'Execute the confrontation.',next:'dn_final_confrontation',effects:{stats:{cou:1}}},{text:'Secure Misa first, then confront.',next:'dn_target_misa_plan',effects:{stats:{per:1}}}]};

DN_NODES.dn_target_misa_plan = {text:`Misa Amane is Light\`s weak point. She loves him blindly. She has Shinigami Eyes. And she is emotionally unstable — the perfect person to crack under the right pressure.

"If we turn Misa," you tell L, "Light loses his eyes, his alibi, and his most loyal follower. He will be exposed."

L nods. "I have detained her before. She gave up her notebook and her memories. But this time, we need her to keep her memories AND turn against Light."

"Leave that to me. I know what buttons to push."

You prepare to confront the second Kira — not as an enemy, but as someone who knows what it is like to carry a Death Note\`s weight.`,scene:'dark',mood:'#1a1a3e',characters:['L','Misa'],effects:{flags:{targeting_misa:true}},choices:[{text:'Approach Misa with empathy. Show her the truth about Light.',next:'dn_turn_misa',effects:{stats:{cha:1}}},{text:'Approach Misa with evidence. Cold facts break illusions.',next:'dn_evidence_for_misa',effects:{stats:{int:1}}}]};

DN_NODES.dn_execute_trap = {text:`The trap springs over 72 hours.

First: you leak false information through Light\`s channels that L has found a way to detect Death Note usage. Light panics — subtly, invisibly to most, but you see the change in his patterns.

Second: L arranges for the Yotsuba Group\`s Kira — Higuchi — to be captured in a sting operation. The notebook is recovered. Light volunteers to examine it.

Third: the moment of truth. Light touches his old notebook. You watch his face through a hidden camera. The transformation is instantaneous — his eyes go cold, his posture shifts, the mask of the innocent student dissolves.

But Light is faster than you expected. He has already written contingency names on a scrap of notebook paper hidden in his watch. He reaches for it.

This is the moment everything hangs on.`,scene:'dark',mood:'#8b0000',characters:['Light','L'],effects:{flags:{trap_sprung:true}},choices:[{text:'Tackle Light before he can read from the scrap.',next:'dn_tackle_light',effects:{stats:{str:1}},check:{stat:'cou',dc:12}},{text:'Shout a warning to L — protect the detective.',next:'dn_protect_l',effects:{stats:{per:1}}},{text:'Use your own Death Note — write a non-lethal entry for Light.',next:'dn_note_counter',effects:{stats:{int:1}},check:{stat:'int',dc:14}}]};

DN_NODES.dn_tackle_light = {text:`You lunge. Light sees you coming — his reflexes are sharp, but you have surprise and desperation on your side.

Your hand closes around his wrist. The scrap of paper crumples between your fingers. You wrestle him to the ground as task force members flood the room.

Light\`s mask is gone. The god of the new world stares up at you with naked fury. "You do not understand what you are destroying! The world NEEDS me!"

"The world needs justice, Light. Not a god."

Soichiro Yagami stands in the doorway. His face is shattered. His son — his brilliant, perfect son — pinned to the floor, confessing to mass murder.

"Light..." the old man whispers. "My son..."

Light\`s fury crumbles into something more terrible. Shame.`,scene:'dark',mood:'#8b0000',characters:['Light','L'],effects:{flags:{tackled_light:true}},choices:[{text:'Step back. Let the father and son have this moment.',next:'dn_ending_justice',effects:{stats:{per:1}}},{text:'Secure the Death Notes immediately. Sentiment later.',next:'dn_secure_notes',effects:{stats:{int:1}}}]};

DN_NODES.dn_protect_l = {text:`"L! MOVE!"

Your warning gives L half a second. Enough. The detective throws himself sideways as Light activates his contingency — a name written on paper hidden in his watch.

The scrap reads: "L Lawliet."

But L is already moving. Watari tackles Light from behind. The watch-scrap is torn free. And you are standing between Light and L with the Death Note in your hands.

"It is over, Light," you say. "L knows. The task force knows. Your father knows."

Light\`s eyes dart around the room. For the first time, you see fear. Real, genuine fear. Not of death — of failure.

"Ryuk," Light whispers. "Kill them. Kill them all."

Ryuk grins. "Sorry, Light. I told you from the beginning — I am not on your side. Or anyone\`s."`,scene:'dark',mood:'#8b0000',characters:['Light','L','Ryuk'],effects:{flags:{protected_l:true}},choices:[{text:'Demand Light\`s surrender.',next:'dn_ending_justice',effects:{stats:{cou:1}}},{text:'Offer Light a deal — surrender the notebook, keep his life.',next:'dn_offer_deal',effects:{stats:{cha:1}}}]};

DN_NODES.dn_note_counter = {text:`You open your Death Note and write with trembling precision: "Light Yagami — incapacitated. Loses consciousness for 24 hours beginning at the moment he next attempts to write in or read from any Death Note. No lasting physical harm."

The rules allow specifying non-lethal incapacitation if the conditions are met. You tested this theory with Sidoh. It is a gamble — the Death Note is designed to kill, and bending it toward mercy is uncharted territory.

Light reaches for his hidden scrap. His fingers brush the paper. And then — his eyes roll back and he collapses like a puppet with cut strings.

The room erupts. L stares at you. "What did you do?"

"Used the notebook to save you. He had your name on that paper."

L\`s face goes pale as he reads the crumpled scrap. His own name, in Light\`s handwriting. One second from death.

"You... wrote in the Death Note. To save my life."

"Yes."

L is silent for a long time. "Thank you," he says finally. It sounds like the first time he has ever said those words.`,scene:'dark',mood:'#1a1a3e',characters:['Light','L','Sidoh'],effects:{flags:{used_note_to_save:true},relationships:{l:5}},choices:[{text:'Secure Light and the notebooks while he is unconscious.',next:'dn_ending_justice',effects:{stats:{int:1}}},{text:'Destroy both notebooks now, while you have the chance.',next:'dn_destroy_notes',effects:{stats:{cou:1}}}]};

DN_NODES.dn_trap_failsafe = {text:`Before the trap springs, you add insurance. You write in your Death Note — not a name, but a condition. A rule exploit Sidoh helped you discover.

If you die during the operation, a sealed entry activates: every scrap of Death Note paper Light has hidden will combust. The Shinigami realm\`s rules allow conditional entries tied to the owner\`s fate.

It is grim insurance. But against Light Yagami, you cannot be over-prepared.

The trap proceeds as planned. When the moment comes, you are ready.`,scene:'dark',mood:'#2a2a2a',characters:['Sidoh'],effects:{flags:{trap_failsafe:true}},choices:[{text:'Execute the trap.',next:'dn_execute_trap',effects:{stats:{int:1}}}]};

DN_NODES.dn_task_force_trap = {text:`You brief the full task force. Soichiro Yagami listens with the stoicism of a man who has already accepted the worst. Matsuda looks sick. Aizawa is granite.

"When Light touches the notebook, he becomes Kira again," you explain. "We need to be ready for anything — contingency plans, hidden scraps of paper, signals to Misa. Every possibility must be covered."

Soichiro speaks: "I will be there. If my son is Kira... I will be the one to put the cuffs on him."

The room is silent with respect and grief.`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{task_force_briefed:true}},choices:[{text:'Execute the trap with the full team.',next:'dn_execute_trap',effects:{stats:{cou:1}}}]};

DN_NODES.dn_final_confrontation = {text:`You, L, and the task force corner Light in the investigation headquarters. The evidence is laid out. The Death Note sits on the table between you.

"Light Yagami," L says, his voice flat and final. "You are Kira."

Light looks at each face in the room. His father. The detectives he has worked alongside. You. L.

And then Light smiles. Not the perfect, calibrated smile. Something broken and brilliant and terrifying.

"Yes," he says. "I am. And I have made the world a better place. Can any of you say the same?"

He reaches into his sleeve. A hidden piece of Death Note paper. A pen.

Time stops.`,scene:'dark',mood:'#8b0000',characters:['Light','L'],effects:{flags:{final_confrontation:true}},choices:[{text:'Lunge for the paper before he can write.',next:'dn_tackle_light',effects:{stats:{cou:1}},check:{stat:'str',dc:11}},{text:'Call Ryuk\`s name. Appeal to the Shinigami.',next:'dn_appeal_ryuk',effects:{stats:{cha:1}},check:{stat:'cha',dc:13}},{text:'You already wrote Light\`s name — non-lethal. Activate it.',next:'dn_note_counter',requires:{trap_failsafe:true},effects:{stats:{int:1}}}]};

DN_NODES.dn_appeal_ryuk = {text:`"RYUK! This is it! The most entertaining moment in human history — the fall of Kira! You would not want to miss the ending by letting Light write his way out, would you?"

Ryuk\`s grin freezes. Then expands. The Shinigami\`s cackling laughter fills the room like breaking glass.

"You know what? The human is right. This IS the best part." Ryuk plucks the pen from Light\`s hand with one enormous claw. "Sorry, Light. But the show must go on."

Light stares at Ryuk with betrayal that cuts deeper than any blade. "Ryuk... you..."

"I told you when we started. I am on nobody\`s side. And endings are the most interesting part of any story."

Light\`s shoulders sag. Without the pen, without Ryuk\`s cooperation, without any contingency left — Kira falls.`,scene:'dark',mood:'#3d0066',characters:['Light','Ryuk','L'],effects:{flags:{appealed_ryuk:true}},choices:[{text:'Step forward. End this with dignity.',next:'dn_ending_justice',effects:{stats:{cou:1}}},{text:'Let L handle the arrest. This is his victory.',next:'dn_ending_justice',effects:{stats:{per:1},relationships:{l:2}}}]};

DN_NODES.dn_tower_arrest = {text:`You arrive at Tokyo Tower with a wire, three hidden cameras, and L\`s team positioned on every exit. This is not a negotiation — it is an arrest in progress.

Light arrives in a tailored coat, smiling. L arrives in jeans and a white shirt, barefoot in his sneakers. They see each other for the first time knowing the other\`s true identity.

"L," Light says.

"Kira," L replies.

You step between them. "This ends today. Light — I know you have contingencies. L has neutralized them. Misa is in custody. Rem has been informed that harming L will not save Misa."

Light\`s eyes narrow. "You have been thorough."

"I learned from the best. Both of you."

Light looks at the exits. The task force members. The cameras. And for the first time, sees no way out.`,scene:'dark',mood:'#8b0000',characters:['Light','L'],effects:{flags:{tower_arrest:true}},choices:[{text:'Read Light his rights. Do it properly.',next:'dn_ending_justice',effects:{stats:{int:1}}},{text:'Give Light one last chance to surrender voluntarily.',next:'dn_offer_deal',effects:{stats:{cha:1}}}]};

DN_NODES.dn_tower_truce = {text:`Three chairs. Three people. The observation deck is empty — you paid for a private booking.

"Here is what I propose," you say. "Light — you stop killing. Permanently. L — you stop hunting. The Death Notes are destroyed. All of them. The knowledge dies with us."

Light laughs. "You want me to abandon everything I have built?"

L tilts his head. "You want me to let a mass murderer walk free?"

"I want the killing to stop. Both the murders and the investigation. Because this war between you will destroy far more than either of you can save."

Silence. The wind howls around the tower. Below, Tokyo stretches to the horizon — millions of lives caught between a god and a detective.`,scene:'dark',mood:'#1a1a3e',characters:['Light','L'],effects:{flags:{proposed_truce:true}},choices:[{text:'Press for the truce. Make them see reason.',next:'dn_ending_stalemate',effects:{stats:{cha:1}},check:{stat:'cha',dc:15}},{text:'Realize the truce is impossible. Side with L.',next:'dn_ending_justice',effects:{stats:{int:1}}},{text:'Realize the truce is impossible. Side with Light.',next:'dn_ending_new_world',effects:{stats:{cou:1}}}]};

DN_NODES.dn_tower_survival = {text:`You arrive with your Death Note hidden and a plan that serves only one master — yourself. If L and Light destroy each other, you inherit the board.

But standing between them, watching two of the most brilliant minds in human history stare each other down, something shifts inside you. This is not a game. These are real people. Real consequences.

Light\`s hand moves toward his watch. L\`s hand moves toward his phone. Both reaching for their weapons.

You are the only one who can stop this from becoming a massacre. But stopping it means choosing a side. Or sacrificing yourself.`,scene:'dark',mood:'#8b0000',characters:['Light','L'],effects:{flags:{tower_survival:true}},choices:[{text:'Protect L. Tackle Light.',next:'dn_tackle_light',effects:{stats:{cou:1}}},{text:'Protect both. Put yourself between them.',next:'dn_ending_sacrifice',effects:{stats:{per:1}}},{text:'Use the Death Note. Write a non-lethal entry for Light.',next:'dn_note_counter',effects:{stats:{int:1}}}]};

DN_NODES.dn_offer_deal = {text:`"Light. Surrender the Death Note. Confess. Cooperate with L\`s investigation. In exchange — life imprisonment, not execution. Your father\`s reputation protected. Misa goes free."

Light stares at you. The calculation behind his eyes is visible — probability matrices, outcome assessments, strategic evaluations all running simultaneously.

"And the notebooks?"

"Destroyed. All of them. Including mine."

"And the Shinigami?"

"Return to their realm. The Death Notes leave the human world forever."

Light closes his eyes. When he opens them, the god is gone. What remains is a 23-year-old university student who is very, very tired.

"Fine," he whispers. "I accept."`,scene:'dark',mood:'#2a2a2a',characters:['Light','L'],effects:{flags:{light_surrendered:true}},choices:[{text:'Proceed with the deal. Justice tempered with mercy.',next:'dn_ending_justice'},{text:'Destroy the notebooks immediately.',next:'dn_destroy_notes'}]};

DN_NODES.dn_kill_watari = {text:`You write the name. Watari. The old man\`s kind face fills your mind as the pen moves.

Three hours later, L\`s support network collapses. Watari dies of a heart attack in the hotel kitchen. L is alone. Vulnerable.

Light smiles. "Welcome to the new world."

But the old man\`s face does not leave your mind. It stays there, behind your eyes, in the dark quiet hours when Light is not watching. The face of a kind man you killed because a god told you to.

Sidoh will not look at you. Even a Shinigami has limits.

You are Kira\`s ally now. The question is: can you live with what that means?`,scene:'dark',mood:'#8b0000',characters:['Light','Sidoh'],effects:{flags:{killed_watari:true,fully_allied_light:true},relationships:{light:5}},choices:[{text:'Commit fully. Help Light eliminate L.',next:'dn_ending_new_world',effects:{stats:{cou:1}}},{text:'This was a mistake. Find a way to betray Light from inside.',next:'dn_inner_betrayal',effects:{stats:{int:1},flags:{planning_betrayal:true}}}]};

DN_NODES.dn_refuse_order = {text:`"No. I choose my own targets. That was the agreement."

Light\`s eyes go cold. "There was no agreement. There is what serves the new world and what does not. Watari serves L. L opposes us. The logic is clear."

"The logic of a dictator. I did not sign up to kill innocent old men."

The temperature in the room drops. Light stands slowly. "Then we have a problem. Because I do not tolerate dissent."

Behind him, Ryuk\`s grin widens with anticipation. Behind you, Sidoh trembles.

You are now in the most dangerous position imaginable — an enemy of Kira who is standing in Kira\`s room.`,scene:'dark',mood:'#8b0000',characters:['Light','Ryuk','Sidoh'],effects:{flags:{refused_light:true},relationships:{light:-4}},choices:[{text:'"Write my name, Light. See what happens. I have contingencies."',next:'dn_bluff_contingency',effects:{stats:{cou:1}},check:{stat:'cou',dc:14}},{text:'Run. Get to L before Light can act.',next:'dn_run_to_l',effects:{stats:{per:1}},check:{stat:'per',dc:12}},{text:'"Sidoh — tell him. Tell him about the claim on his notebook."',next:'dn_sidoh_claim',effects:{stats:{int:1}}}]};

DN_NODES.dn_fake_compliance = {text:`You write a name. Not Watari\`s real name — a fabricated one, similar enough to pass a glance but wrong by two characters. Light watches you write with satisfaction.

"Good," he says. "I will verify the results."

You have bought yourself time. But not much. When Watari does not die, Light will know you faked it. You have hours — maybe a day — before the deception is discovered.

You need to move. Fast.`,scene:'dark',mood:'#2a2a2a',characters:['Light'],effects:{flags:{faked_compliance:true}},choices:[{text:'Go to L immediately. Full confession, full alliance.',next:'dn_commit_to_l',effects:{stats:{int:1}}},{text:'Disappear before Light discovers the deception.',next:'dn_go_underground',effects:{stats:{per:1}}},{text:'Prepare a counter-strike. When Light comes for you, be ready.',next:'dn_counter_strike',effects:{stats:{cou:1}}}]};

DN_NODES.dn_inner_betrayal = {text:`You smile at Light while your soul screams. You nod at his plans while memorizing every detail. You are inside the fortress now. The most trusted position possible.

Over weeks, you document everything. Light\`s schedule. His hidden Death Note locations. His contingency plans. The names he has written. The names he plans to write.

Then one night, you copy it all onto a flash drive and walk to L\`s hotel.

"I have been working with Kira for three weeks," you tell L. "Here is everything."

L takes the drive. Studies your face. "Why?"

"Because I killed someone for him. And I can still see his face when I close my eyes."

L is quiet for a long time. "Guilt is not redemption. But it is a start."`,scene:'dark',mood:'#1a1a3e',characters:['L','Light'],effects:{flags:{inner_betrayal:true},relationships:{l:3}},choices:[{text:'Help L spring the final trap on Light.',next:'dn_execute_trap',effects:{stats:{int:1}}},{text:'"I want to confront Light myself. I owe him that."',next:'dn_final_confrontation',effects:{stats:{cou:1}}}]};

DN_NODES.dn_bluff_contingency = {text:`"Go ahead, Light. Write my name. But know this — if I die, a package arrives at NHK, the BBC, and Interpol within six hours. Your identity. Your photo. The rules of the Death Note. Misa\`s involvement. Everything."

Light\`s pen hovers over the paper. His eyes bore into yours, searching for the bluff.

You hold his gaze. Your heart is hammering but your face is stone.

"You are lying," Light says.

"Try me."

Ten seconds of silence. Then Light sets the pen down. "Get out. We are done."

You walk out of Kira\`s room alive. Barely. The bluff held — but you are now a marked target. You need protection. You need L.`,scene:'dark',mood:'#8b0000',characters:['Light'],effects:{flags:{bluffed_light:true},relationships:{light:-5}},choices:[{text:'Go straight to L. No more games.',next:'dn_commit_to_l',effects:{stats:{int:1}}},{text:'Disappear. Regroup. Plan your next move.',next:'dn_go_underground',effects:{stats:{per:1}}}]};

DN_NODES.dn_run_to_l = {text:`You run. Through the Yagami house, out the door, into the night streets of Tokyo. You do not look back.

Your phone. L\`s encrypted channel. You type while running: "Light Yagami is Kira. Confirmed. He tried to make me kill for him. I refused. I am exposed. I need extraction."

L\`s response: "Location?"

You send your GPS coordinates. Twelve minutes later, a black car pulls up. Watari at the wheel. You throw yourself into the back seat.

"Take me to L. Now."

From Kira\`s inner circle to L\`s headquarters in one night. The game has changed completely.`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{ran_to_l:true},relationships:{l:3}},choices:[{text:'Help L plan the final operation against Light.',next:'dn_trap_plan',effects:{stats:{int:1}}},{text:'"We need to move fast. Light will be making contingency plans right now."',next:'dn_final_confrontation',effects:{stats:{cou:1}}}]};

DN_NODES.dn_sidoh_claim = {text:`Sidoh steps forward — trembling, terrified, but determined. "L-Light Yagami. The Death Note you possess was stolen from me by Ryuk. It is my property. I... I demand its return."

Light stares at the Shinigami. Then at Ryuk.

Ryuk shrugs. "He is right. I did take it. Rules are rules, Light."

"Rules," Light repeats. "You are invoking RULES?"

"The Shinigami King\`s rules are absolute," Sidoh says, gaining courage. "Even for Death Note owners. If I demand my notebook back, you must return it. Or face consequences from the realm."

Light\`s face cycles through fury, calculation, and cold assessment. Losing his Death Note means losing his memories. Losing Kira. Losing everything.

Unless he has a backup plan. And Light Yagami always has a backup plan.`,scene:'dark',mood:'#3d0066',characters:['Light','Ryuk','Sidoh'],effects:{flags:{sidoh_claimed:true}},choices:[{text:'Press the advantage while Light is off-balance.',next:'dn_press_advantage',effects:{stats:{cou:1}}},{text:'Offer Light a deal — return the note, keep his memories, go free.',next:'dn_offer_deal',effects:{stats:{cha:1}}},{text:'Grab Light\`s notebook while he is distracted.',next:'dn_grab_note',effects:{stats:{per:1}},check:{stat:'per',dc:13}}]};

DN_NODES.dn_press_advantage = {text:`"It is over, Light. The Shinigami realm supersedes human ownership. Your notebook goes back to Sidoh. Your memories of being Kira vanish. And when they are gone, the evidence against you — evidence I have collected for weeks — will speak for itself."

Light\`s composure shatters. For one raw, terrifying second, you see the real person beneath the god and the genius — a young man who built a kingdom on sand and is watching the tide come in.

Then the mask returns. "Fine," he says. "Take it."

He holds out the Death Note. Sidoh reaches for it.

And Light\`s other hand slides a scrap of paper from his watch.`,scene:'dark',mood:'#8b0000',characters:['Light','Sidoh'],effects:{flags:{pressing_advantage:true}},choices:[{text:'Grab his wrist. You saw the motion.',next:'dn_tackle_light',effects:{stats:{cou:1}},check:{stat:'per',dc:11}},{text:'Shout for Sidoh to take the notebook NOW.',next:'dn_sidoh_grabs_note',effects:{stats:{int:1}}}]};

DN_NODES.dn_grab_note = {text:`While Light argues with Sidoh, you lunge. Your hand closes around Light\`s Death Note.

The moment you touch it, you see Ryuk clearly — grotesque, amused, towering over the scene. The Shinigami laughs.

Light\`s hand clamps onto your wrist. "Let. Go."

"No."

You are both holding the notebook. Two Death Note owners. Two killers. And between you, a weapon that has shaped the fate of the world.

Sidoh reaches in and snatches it from both of you. "MINE!" he shrieks, and clutches it to his chest. "It was always mine!"

Light\`s eyes go blank. The memories drain. In seconds, he is blinking in confusion. "What... where am I? What is happening?"

Kira is gone. Light Yagami — the real Light Yagami, without the burden of godhood — stares at you with innocent, bewildered eyes.`,scene:'dark',mood:'#3d0066',characters:['Light','Ryuk','Sidoh'],effects:{flags:{notebook_recovered:true}},choices:[{text:'Secure Light. Get him to L while he is innocent.',next:'dn_ending_justice',effects:{stats:{int:1}}},{text:'Let him go. Without memories, he is not guilty.',next:'dn_ending_stalemate',effects:{stats:{per:1}}}]};

DN_NODES.dn_sidoh_grabs_note = {text:`"SIDOH! NOW!"

The Shinigami snatches his original notebook from Light\`s hands with a speed that belies his nervous demeanor. The moment the notebook leaves Light\`s possession, the change is instantaneous.

Light\`s eyes go vacant. The intelligence is still there — but the darkness behind it evaporates. The god of the new world blinks and becomes a confused university student.

"I... what?" Light looks around. "Where am I? Why am I—" He sees Sidoh and screams.

Ryuk doubles over laughing. "Oh, this is PRICELESS. The great Kira, undone by the most pathetic Shinigami in the realm."

Sidoh clutches both notebooks — his original and yours — to his chest. Two Death Notes, safely in Shinigami hands.

The Kira case is over. But the aftermath is just beginning.`,scene:'dark',mood:'#3d0066',characters:['Light','Ryuk','Sidoh'],effects:{flags:{sidoh_recovered:true}},choices:[{text:'Take Light to L. Let justice sort out the rest.',next:'dn_ending_justice',effects:{stats:{int:1}}},{text:'Let Light go. Without memories, he is innocent.',next:'dn_ending_stalemate',effects:{stats:{per:1}}},{text:'Ask Sidoh for the notebooks. You are not done yet.',next:'dn_ending_third_kira',effects:{stats:{cou:1}}}]};

DN_NODES.dn_destroy_notes = {text:`You gather both Death Notes. Light\`s and yours. Sidoh watches with wide eyes as you hold them over the fireplace.

"If I destroy these," you ask Sidoh, "what happens?"

"The memories of every human who touched them will be erased. The Shinigami connected to them will return to the realm. The deaths already caused... cannot be undone."

"But no new deaths."

"No new deaths."

You look at L. The detective nods slowly. "Do it."

You drop both notebooks into the fire. The flames turn purple — an otherworldly color that hurts to look at. Sidoh shimmers and begins to fade.

"Thank you," Sidoh says. "For being kind. Most humans who find Death Notes are not kind."

And then he is gone. The notebooks crumble to ash. The Death Notes leave the human world forever.`,scene:'dark',mood:'#3d0066',characters:['L','Sidoh'],effects:{flags:{destroyed_notes:true}},choices:[{text:'Watch them burn. It is finally over.',next:'dn_ending_sacrifice'}]};

DN_NODES.dn_counter_strike = {text:`You prepare for Light\`s retaliation. Hidden location, burner phones, dead man\`s switch with evidence packets ready to send. And one crucial advantage — Sidoh.

"Sidoh. I need you to watch Light. Tell me the moment he reaches for his Death Note."

When Light moves against you — and he will — you will be ready. Not with violence. With information. Every name he writes, every plan he makes, Sidoh will report to you.

And when the moment is right, you will bring it all to L.

The final game begins.`,scene:'dark',mood:'#2a2a2a',characters:['Sidoh'],effects:{flags:{counter_strike:true}},choices:[{text:'Wait for Light to make his move, then strike.',next:'dn_final_confrontation',effects:{stats:{per:1}}},{text:'Go to L now with what you have. End this.',next:'dn_commit_to_l',effects:{stats:{int:1}}}]};

DN_NODES.dn_solo_path = {text:`Neither L nor Light. You walk your own road.

Using the Death Note with surgical precision, you eliminate targets that both Kira and the justice system have missed — arms dealers who supply war zones, pharmaceutical executives poisoning communities, oligarchs funding genocide.

You do not kill petty criminals like Light. You do not hunt killers like L. You operate in the space between, targeting the untouchable.

Months pass. The world changes. Crime lords who thought themselves immune start dying. Corrupt politicians resign in terror. The "Third Kira" becomes a legend — more feared by the powerful than Light\`s Kira ever was.

But legends attract attention. And L, Light, Near, and Mello are all looking for you.`,scene:'dark',mood:'#8b0000',characters:['Sidoh'],effects:{flags:{solo_path:true}},choices:[{text:'Accept the consequences. This is who you are now.',next:'dn_ending_third_kira',effects:{stats:{cou:1}}},{text:'The weight is too heavy. Turn yourself in to L.',next:'dn_ending_sacrifice',effects:{stats:{per:1}}},{text:'Seek out the Shinigami realm. There must be a better way.',next:'dn_ending_shinigami',effects:{stats:{int:1}}}]};

DN_NODES.dn_misa_joins_you = {text:`Misa\`s devotion shifts from Light to you. Not romantic — something rawer. The loyalty of someone who has been shown the truth and chooses justice over love.

"What do you need me to do?" she asks, wiping her eyes.

"Tell L everything. The notebooks, the eyes, Light\`s methods. And when the time comes — testify."

Misa nods. Her jaw sets with the determination of someone who has lost everything and has nothing left to fear.

With Misa\`s testimony and your evidence, the case against Light is ironclad. All that remains is the confrontation.`,scene:'dark',mood:'#1a1a3e',characters:['Misa'],effects:{flags:{misa_allied:true},relationships:{misa:5}},choices:[{text:'Take Misa to L. Present the combined evidence.',next:'dn_final_confrontation',effects:{stats:{int:1}}},{text:'Confront Light with Misa at your side.',next:'dn_final_confrontation',effects:{stats:{cou:1}}}]};

DN_NODES.dn_misa_freedom = {text:`"Give up the notebook, Misa. Let Rem take it back. Your memories of the Death Note, of being the Second Kira — they will be erased. You will be free."

"But... Light..."

"Light used you. Without the notebook, without the memories, you will not love a man who never loved you back. You will just be Misa Amane. Model. Actress. Free."

Misa looks at Rem. The Shinigami nods. "I want you to be free, Misa. I have always wanted that."

Misa hands the notebook to Rem. Her eyes go blank for a moment, then refocus with innocent confusion. "I... where am I? Who are you?"

You smile sadly. "Nobody important. You should go home."

One Kira down. One to go.`,scene:'dark',mood:'#3d0066',characters:['Misa'],effects:{flags:{freed_misa:true}},choices:[{text:'Focus on Light. Go to L with everything.',next:'dn_commit_to_l',effects:{stats:{int:1}}},{text:'Confront Light alone. Without Misa, he is weaker.',next:'dn_final_confrontation',effects:{stats:{cou:1}}}]};

DN_NODES.dn_misa_revenge_plan = {text:`Misa\`s eyes harden. The grief transforms into something cold and sharp.

"Light has a backup notebook hidden in a safety deposit box," she says. "I know the bank. I know the account. He thought I did not pay attention. He was wrong."

"We take the backup, we cut off his contingency. Then we take his primary notebook."

"And then?"

"Then Kira falls. Not by L\`s hand or mine. By the hand of the woman he underestimated."

Misa smiles. It is not a nice smile. It is the smile of someone who finally sees clearly.`,scene:'dark',mood:'#8b0000',characters:['Misa'],effects:{flags:{misa_revenge:true},relationships:{misa:3}},choices:[{text:'Execute the plan. Take Light\`s backup notebook.',next:'dn_final_confrontation',effects:{stats:{int:1}}},{text:'Bring L in on this plan. More allies, better odds.',next:'dn_commit_to_l',effects:{stats:{per:1}}}]};

DN_NODES.dn_secure_notes = {text:`You move fast. Light is restrained. You locate his hidden Death Note scraps — the watch compartment, the belt buckle, the false pen. Every contingency, stripped away.

L coordinates with the task force to secure Misa\`s notebook simultaneously. Within an hour, both Death Notes are in L\`s possession.

"What do we do with them?" Matsuda asks, staring at the notebooks with undisguised horror.

L looks at you. "That is the question, is it not? The most powerful weapons in human history. We cannot use them. We cannot let anyone else use them. But can we destroy them?"

Sidoh steps forward. "I can take them back to the Shinigami realm. They will never return to the human world."

The choice is yours.`,scene:'dark',mood:'#1a1a3e',characters:['L','Sidoh'],effects:{flags:{notes_secured:true}},choices:[{text:'Give them to Sidoh. Let the notebooks leave this world.',next:'dn_ending_justice',effects:{stats:{int:1}}},{text:'Destroy them. Fire. Ash. Nothing left.',next:'dn_destroy_notes',effects:{stats:{cou:1}}},{text:'Keep one. Just in case. The world might need it again.',next:'dn_ending_third_kira',effects:{stats:{per:1}}}]};

DN_NODES.dn_admit_use = {text:`"Once. A hostage-taker. I needed to know if it was real."

L\`s expression does not change. But something in the room shifts — a weight that was not there before.

"You killed someone to test a hypothesis." L\`s voice is neutral. Clinical. "That tells me two things. First: you are pragmatic enough to be useful. Second: you are capable of killing, which means I cannot fully trust you."

"I am not asking for trust. I am asking for an alliance."

L places a sugar cube in his coffee. "Accepted. Provisionally. But understand — if you use that notebook again without my authorization, you become my enemy. And I have never lost to an enemy."`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{admitted_use:true},relationships:{l:1}},choices:[{text:'Accept the terms. Reveal Light as Kira.',next:'dn_reveal_kira_to_l',effects:{stats:{int:1}}},{text:'Negotiate for more autonomy.',next:'dn_alliance_terms',effects:{stats:{cha:1}}}]};

DN_NODES.dn_deny_use = {text:`"No. I have never written a name. The notebook terrifies me. That is why I came to you."

L studies your face for fifteen seconds. Searching for the lie. Finding none, because it is the truth.

"Good," he says simply. "A person who possesses the power to kill anyone on Earth and chooses not to use it is either a saint or a coward. In your case, I believe it is neither. It is principle."

He offers his hand — an unusual gesture for L. "Welcome to the right side of this war."`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{denied_use:true},relationships:{l:3}},choices:[{text:'Take his hand. Full alliance.',next:'dn_reveal_kira_to_l',effects:{stats:{cou:1},relationships:{l:1}}}]};

DN_NODES.dn_redirect_l = {text:`"I did not come here to discuss my past. I came here to stop Kira. Are we going to do that, or are we going to interrogate each other?"

L\`s lip twitches — almost a smile. "Direct. I appreciate that." He picks up a strawberry. "Fine. Tell me about Kira."`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{relationships:{l:1}},choices:[{text:'Reveal everything about Light Yagami.',next:'dn_reveal_kira_to_l',effects:{stats:{int:1}}}]};

DN_NODES.dn_confess_to_l = {text:`"You are right. I have been in contact with Light. I was trying to gather intelligence from both sides."

L\`s expression is unreadable. "You were playing both sides. Like a double agent."

"Like someone who did not know which side to trust."

"And now?"

"Now I am choosing. I am choosing you. I am choosing justice. Here is everything Light told me."

You share it all. Every conversation, every plan, every weakness Light revealed. L listens without interrupting.

"Your methods are questionable," L says when you finish. "But your information is invaluable. I will work with you. But you will earn my trust back slowly."`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{confessed_double:true},relationships:{l:1}},choices:[{text:'Help L build the final trap.',next:'dn_trap_plan',effects:{stats:{int:1}}},{text:'Propose confronting Light directly.',next:'dn_final_confrontation',effects:{stats:{cou:1}}}]};

DN_NODES.dn_bluff_l = {text:`"I do not know what you are talking about. I have had no contact with Kira."

L places a sugar cube on top of another sugar cube with surgical precision. "You are lying. Your encrypted channel has been compromised for twelve days. I have read every message you sent to Light Yagami."

Your blood freezes.

"The question is not whether you are a double agent. The question is whether you are MY double agent or Kira\`s. Your answer in the next thirty seconds determines which category I place you in."`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{caught_bluffing:true},relationships:{l:-3}},choices:[{text:'Come clean immediately. Full confession.',next:'dn_confess_to_l',effects:{stats:{int:1}}},{text:'"I am yours. Always was. Light thinks I am his, but I am feeding him false intel."',next:'dn_commit_to_l',effects:{stats:{cha:1}},check:{stat:'cha',dc:12}}]};

DN_NODES.dn_reveal_memory_rule = {text:`"L. Listen carefully. The Death Note has a rule about memory. When ownership is relinquished, ALL memories of using the notebook are erased. Light is not pretending to be innocent — he IS innocent right now. His memories of being Kira are gone."

L goes still. "That explains everything. The behavioral changes. The genuine confusion. He is not acting because he genuinely does not remember."

"But the notebook still exists somewhere. And whoever has it is continuing to kill. When Light reclaims it — and he will have planned for this — the memories return instantly."

L\`s eyes light up with that terrible, beautiful intelligence. "Then we let him reclaim it. Under controlled conditions. In front of witnesses. And when the mask falls, we catch the real Kira in the act of remembering."`,scene:'dark',mood:'#1a1a3e',characters:['L'],effects:{flags:{revealed_memory_rule:true}},choices:[{text:'Help set the trap.',next:'dn_execute_trap',effects:{stats:{int:1}}},{text:'"We should find the notebook first. Whoever has it now is killing."',next:'dn_find_hidden_note',effects:{stats:{per:1}}}]};

DN_NODES.dn_find_hidden_note = {text:`The hunt for Light\`s hidden Death Note leads you through Tokyo\`s underground. Sidoh tracks the notebook\`s energy — faint but distinctive.

You find it with a Yotsuba Group executive named Higuchi, who has been using it to eliminate business rivals. The man is sloppy — no strategy, no vision, just greed. A pale imitation of Kira.

You and L orchestrate Higuchi\`s capture. The notebook is recovered. And now the trap is set — when Light touches his notebook again, Kira returns.`,scene:'dark',mood:'#2a2a2a',characters:['L','Sidoh'],effects:{flags:{found_note:true}},choices:[{text:'Spring the trap. Let Light touch the notebook.',next:'dn_execute_trap',effects:{stats:{int:1}}}]};

DN_NODES.dn_test_innocent_light = {text:`You approach Light on campus. Without his memories, he is a different person — genuinely warm, genuinely concerned about the Kira case, genuinely horrified by the killings.

"Do you think Kira is evil?" you ask him over coffee.

"Of course," he says without hesitation. "Killing is wrong. No matter the justification. Kira is a murderer."

The irony is so sharp it cuts. This version of Light — the one without the Death Note — is everything he claimed to be. Brilliant, moral, just. The version of Light that could have changed the world without killing anyone.

You feel something crack inside you. Grief, maybe. For the person Light Yagami could have been.`,scene:'dark',mood:'#2a2a2a',characters:['Light'],effects:{flags:{tested_innocent:true}},choices:[{text:'Protect this version of Light. Find another way to end Kira.',next:'dn_ending_stalemate',effects:{stats:{per:1}}},{text:'The truth matters more than mercy. Help L spring the trap.',next:'dn_execute_trap',effects:{stats:{int:1}}}]};

DN_NODES.dn_near_alliance = {text:`Near\`s analytical mind combines with Mello\`s ruthless instinct and your Death Note knowledge to create a three-pronged assault on Kira.

Near maps the pattern. Mello disrupts the network. You provide the intelligence that no one else can — how the Death Note works, where Light\`s vulnerabilities are, and what it feels like to hold the power of life and death in your hands.

Together, you are unstoppable. The investigation closes like a noose around Light Yagami.

"Checkmate in three moves," Near says, placing a final piece on his board.`,scene:'dark',mood:'#1a1a3e',characters:['Near','Mello'],effects:{flags:{near_alliance:true}},choices:[{text:'Execute the final plan.',next:'dn_final_confrontation',effects:{stats:{int:1}}},{text:'Let Near and Mello handle the confrontation. Stay in the shadows.',next:'dn_ending_justice',effects:{stats:{per:1}}}]};

DN_NODES.dn_unite_successors = {text:`"Near. Mello. You two have been competing for L\`s legacy since Wammy\`s House. That competition has made you both sharp — but it has also made you vulnerable. Together, you are L\`s equal. Apart, Light Yagami will pick you off one by one."

Mello\`s jaw tightens. Near stacks a die on top of another die.

"He is right," Near says quietly. "The probability of success increases 340% with combined operations."

Mello looks like he is swallowing glass. But he nods. "Fine. But I lead the field operations."

"And I lead analysis," Near agrees.

"And I provide the Death Note intelligence," you add.

Three minds. Three approaches. One target.`,scene:'dark',mood:'#1a1a3e',characters:['Near','Mello'],effects:{flags:{united_successors:true},relationships:{near:2,mello:2}},choices:[{text:'Execute the combined operation against Light.',next:'dn_final_confrontation',effects:{stats:{int:1}}}]};

DN_NODES.dn_negotiate_successors = {text:`"I am not a witness. I am not a tool. I am a partner with unique assets and I will be treated as such."

Near blinks. Mello snorts. But both of them recalibrate.

"Fair," Near concedes. "What are your terms?"

"Equal access to intelligence. Veto power on operations that risk civilian lives. And when this is over — the notebooks are destroyed. Not stored, not studied, not weaponized. Destroyed."

"Agreed," Near says.

"Agreed," Mello echoes, with more respect than before.

The alliance is forged.`,scene:'dark',mood:'#1a1a3e',characters:['Near','Mello'],effects:{flags:{negotiated_successors:true},relationships:{near:2,mello:2}},choices:[{text:'Plan the final operation together.',next:'dn_final_confrontation',effects:{stats:{int:1}}}]};

DN_NODES.dn_dare_light = {text:`"One month. No Death Note. If crime rises, I will accept that your method works and help you. If crime stays the same — or drops — you accept that fear is not the answer."

Light\`s eyes narrow. This is a challenge to his fundamental thesis — that only Kira\`s judgment keeps humanity in line.

"Fine," he says. "One month."

The killing stops. The world holds its breath. Crime statistics fluctuate — up in some regions, down in others, but overall... stable. The world without Kira looks remarkably like the world with him.

Light does not take it well.`,scene:'dark',mood:'#2a2a2a',characters:['Light'],effects:{flags:{dared_light:true}},choices:[{text:'Present the data. "The world does not need Kira."',next:'dn_ending_stalemate',effects:{stats:{int:1}}},{text:'Light refuses to accept the results. He resumes killing.',next:'dn_final_confrontation',effects:{stats:{cou:1}}}]};

DN_NODES.dn_evidence_for_misa = {text:`You lay out the evidence with clinical precision. Dates and times Light was with other women while Misa waited. Messages between Light and Takada — another Kira proxy — that reveal his true feelings. "Misa is a tool. Nothing more. When she is no longer useful, I will dispose of her."

Misa reads Light\`s words. Each one is a knife.

"He... he really said this?"

"He really said this. Rem knows. Your Shinigami has been watching Light deceive you from the beginning."

Rem confirms. Misa crumbles, then rebuilds herself with fury.`,scene:'dark',mood:'#3d0066',characters:['Misa'],effects:{flags:{showed_evidence:true},relationships:{misa:3}},choices:[{text:'"Help me stop him, Misa. Help me help L."',next:'dn_misa_joins_you',effects:{stats:{cha:1}}},{text:'"Walk away. Forget all of this. Be free."',next:'dn_misa_freedom',effects:{stats:{per:1}}}]};

DN_NODES.dn_mutual_reveal = {text:`You place your Death Note on the table. Light places his beside it. Two notebooks. Two Shinigami. Two humans with the power of gods.

Ryuk cackles. Sidoh whimpers.

"Identical," Light observes, studying the notebooks side by side. "Same rules. Same power. But I have had months of practice." His smile sharpens. "What makes you think you can operate at my level?"

"I do not want to operate at your level, Light. I want to operate at a higher one."`,scene:'dark',mood:'#8b0000',characters:['Light','Ryuk','Sidoh'],effects:{flags:{mutual_reveal:true},relationships:{light:2}},choices:[{text:'"Together we can outmaneuver L."',next:'dn_strategic_alliance',effects:{relationships:{light:2}}},{text:'"Your methods are crude. I can refine them."',next:'dn_challenge_light',effects:{stats:{int:1}}},{text:'"Show me everything you know about the Death Note."',next:'dn_light_teaches',effects:{stats:{per:1},relationships:{light:1}}}]};

DN_NODES.dn_challenge_light = {text:`Light\`s smile falters. Nobody challenges Light Yagami. Nobody tells the god of the new world that his methods are lacking.

"Crude," he repeats. "I have reduced global crime by 70%. I have ended wars. Dictators resign in fear. You call that crude?"

"I call it a hammer when you need a scalpel. You kill petty criminals. I would target the systems that create them. Remove the corrupt executives, the compromised judges, the politicians who sell out their people. The crime drops not from fear — from structural change."

Light is silent. For the first time, he is hearing a philosophy that challenges his own without dismissing it entirely.

"You are either my greatest ally or my greatest threat," he says finally. "I have not decided which."`,scene:'dark',mood:'#8b0000',characters:['Light'],effects:{flags:{challenged_light:true},relationships:{light:1}},choices:[{text:'"Ally. If you are willing to evolve."',next:'dn_strategic_alliance',effects:{relationships:{light:2}}},{text:'"Threat. If you refuse to."',next:'dn_ultimatum',effects:{stats:{cou:1}}}]};

DN_NODES.dn_light_teaches = {text:`Light shares his methods with the pride of a master craftsman. The hidden compartments. The timing strategies. The psychological warfare against L.

"L suspects me because I am too perfect," Light explains. "He looks for cracks in my facade. So I gave him cracks — calculated imperfections designed to look like innocence under pressure."

"You are playing a character."

"I am BEING a character. The distinction matters. Method acting at the highest level."

You learn more about the Death Note in two hours with Light than in weeks of studying alone. His mastery is terrifying. But it also reveals weaknesses — arrogance, over-reliance on pattern, the assumption that everyone else is less intelligent.

These are weaknesses you file away. Just in case.`,scene:'dark',mood:'#8b0000',characters:['Light'],effects:{flags:{light_taught:true},relationships:{light:3}},choices:[{text:'Use this knowledge to help Light.',next:'dn_strategic_alliance',effects:{relationships:{light:1}}},{text:'Use this knowledge against Light when the time comes.',next:'dn_double_agent_plan',effects:{stats:{int:1},flags:{planning_betrayal:true}}}]};

DN_NODES.dn_ultimatum = {text:`"Light Yagami. You have two choices. Surrender the Death Note and confess to L. Or I expose you — your identity, your methods, Misa\`s involvement, everything — in the next 24 hours."

The air crystallizes. Light\`s eyes become something prehistoric — cold, calculating, predatory.

"You are threatening Kira," he says softly. "Nobody threatens Kira and lives."

"I am threatening Light Yagami. A 23-year-old student who found a notebook and lost his mind. You are not a god, Light. You are a serial killer with a magic pen."

The words hit harder than any weapon could. Because somewhere, deep beneath the layers of self-justification, Light Yagami knows they are true.`,scene:'dark',mood:'#8b0000',characters:['Light'],effects:{flags:{gave_ultimatum:true},relationships:{light:-5}},choices:[{text:'Hold your ground. Let him decide.',next:'dn_final_confrontation',effects:{stats:{cou:1}}},{text:'Offer an alternative — destroy the notebooks, walk away, start over.',next:'dn_offer_deal',effects:{stats:{cha:1}}}]};

DN_NODES.dn_offer_kill_l = {text:`"Give me L\`s name. I will write it myself."

Light\`s eyebrows rise. He did not expect this. "You would kill the world\`s greatest detective? For me?"

"For the new world. L is the only obstacle between us and a future without crime, without corruption, without suffering."

Light studies you. Then smiles — genuine this time. The smile of a man who has finally found a true believer.

"His name is L Lawliet," Light says. "And you just became the most important person in the new world."

The name burns in your mind. L Lawliet. Four syllables between one man and death.`,scene:'dark',mood:'#8b0000',characters:['Light'],effects:{flags:{offered_kill_l:true},relationships:{light:5}},choices:[{text:'Write the name. Commit to Kira\`s world.',next:'dn_ending_new_world',effects:{stats:{cou:1},flags:{killed_l:true}}},{text:'Hesitate. You cannot do this. Betray Light instead.',next:'dn_inner_betrayal',effects:{stats:{int:1},flags:{planning_betrayal:true}}}]};

// ---- ENDINGS (~8 nodes) ----

DN_NODES.dn_ending_justice = {text:`JUSTICE PREVAILS

Light Yagami is arrested. The trial is the most significant in human history — conducted in secret, with evidence no public court could comprehend. Death Notes. Shinigami. A university student who played god.

L presents the case with his characteristic precision. You testify — about the notebook, about Light\`s methods, about the impossible choice you faced when you found a weapon of absolute power.

Light is convicted. Life imprisonment, no parole. As they lead him away, he looks at you one last time. Not with hatred. With something worse — understanding.

"You could have been me," he says quietly. "You chose not to be. I wonder if that makes you stronger or weaker."

"It makes me human."

In the years that follow, the Death Notes are destroyed. The Shinigami return to their realm. Global crime rates stabilize — higher than under Kira, but genuine. Earned. Real.

L retires. You never learn his real name, and he never learns to fully trust. But on quiet nights, an encrypted message arrives: "Justice held today. — L"

You smile. Close your laptop. And live a life that no notebook could have given you.`,scene:'dark',mood:'#1a1a3e',characters:['Light','L'],effects:{flags:{ending_justice:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

DN_NODES.dn_ending_new_world = {text:`NEW WORLD ORDER

L falls. The investigation collapses. With two Death Note users working in concert, no detective — no matter how brilliant — can survive.

Light\`s new world takes shape. Crime plummets. Governments bow to the fear of Kira. A new global order emerges — one ruled by the threat of divine judgment.

You stand at Light\`s side as the world transforms. But the paradise is built on graves. Every name you have written haunts you. Every face. Every forty-second countdown.

Light does not share power. He never intended to. Slowly, your role diminishes from partner to enforcer to tool. The alliance was never equal — Light does not believe in equality. Only hierarchy. And he is always at the top.

One night, you find your own name on a piece of paper in Light\`s desk. Tentative. Not written yet. But there. A contingency. Just in case.

You stare at it for a long time.

In the new world, even gods are expendable.`,scene:'dark',mood:'#8b0000',characters:['Light','Ryuk'],effects:{flags:{ending_new_world:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

DN_NODES.dn_ending_third_kira = {text:`THE THIRD KIRA

You keep the notebook. You keep the power. And you use it — not like Light, not like L would have wanted, but in your own way.

The Third Kira becomes a legend. Different from the first — more precise, more strategic, targeting the untouchable. Arms dealers. War profiteers. The architects of systemic suffering who hide behind money and power.

The world does not worship you like they worshipped Light. They fear you differently — a silent, invisible hand that reaches into boardrooms and palaces.

Near and Mello hunt you. L\`s legacy lives on in their pursuit. You stay one step ahead, always moving, always watching, always carrying the weight of every name you have written.

Sidoh stays with you. The nervous Shinigami becomes something like a friend. On dark nights, he reminds you of the rules. Not the Death Note\`s rules — moral ones. "Are you sure about this name?" he asks. Every time. Without fail.

You appreciate the question. Because the day you stop questioning is the day you become Light Yagami.

And you will never be Light Yagami.`,scene:'dark',mood:'#8b0000',characters:['Sidoh','Near','Mello'],effects:{flags:{ending_third_kira:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

DN_NODES.dn_ending_sacrifice = {text:`THE SACRIFICE

Both Death Notes must be destroyed. But the rules are clear — destroying a Death Note while a Shinigami is bound to it requires a human sacrifice. A life for each notebook.

Two notebooks. Two lives. You look at the math and see only one solution.

"Sidoh. If I write my own name in the Death Note, specifying that both notebooks are destroyed upon my death — will it work?"

Sidoh\`s amber eyes fill with something you have never seen in a Shinigami. Grief. "Yes. The owner\`s death, freely chosen, can trigger the notebook\`s destruction. But you—"

"I know."

You write your name. You specify the cause: peaceful. Painless. And upon your death, both Death Notes combust and the knowledge of their existence fades from human memory.

L finds you the next morning. Sitting at your desk. Smiling. The notebooks are ash.

He reads the note you left: "The world does not need gods or notebooks. It needs people brave enough to be human. Be human, L. — Your friend."

L does not cry. But Watari later reports that the detective sat in silence for three hours, holding a sugar cube he never ate.

In the years after, crime is handled by humans. Imperfectly. Slowly. But honestly. And somewhere in the Shinigami realm, Sidoh tells the other death gods about the human who chose mortality over power.

They do not understand. But Ryuk does.

"Interesting," Ryuk says, eating an apple. "Humans really are interesting."`,scene:'dark',mood:'#3d0066',characters:['L','Sidoh','Ryuk'],effects:{flags:{ending_sacrifice:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

DN_NODES.dn_ending_stalemate = {text:`STALEMATE

Nobody wins. Nobody loses. The Kira case ends not with a bang but with a slow, exhausting fade.

Light loses his memories when the notebooks are recovered. Without them, he is innocent — genuinely, legally, provably innocent. L cannot prosecute a man who does not remember his crimes.

The Death Notes are sealed in a vault beneath L\`s headquarters. Not destroyed — L cannot bring himself to eliminate them entirely. "Knowledge should be preserved," he says, "even dangerous knowledge."

You walk away. No notebook. No power. No mission. Just a university student who once held the power of life and death and chose to set it down.

The world returns to its imperfect, grinding normalcy. Criminals walk free. Politicians lie. The powerful exploit the weak. It is unjust, infuriating, human.

And it is real. No gods. No notebooks. No forty-second countdowns. Just people, making choices, living with the consequences.

You visit Light once, years later. He is a successful prosecutor — brilliant, driven, fighting crime through the legal system. He does not remember you. He does not remember Kira.

"Have we met?" he asks.

"No," you say. "But I have a feeling we would have had a lot to talk about."`,scene:'dark',mood:'#2a2a2a',characters:['Light','L'],effects:{flags:{ending_stalemate:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

DN_NODES.dn_ending_shinigami = {text:`THE SHINIGAMI\`S SECRET

You ask Sidoh the question no human has ever asked: "Can I visit the Shinigami realm?"

Sidoh blinks. "No human has ever... it is not... well, there is no rule AGAINST it."

The journey requires surrendering your remaining lifespan to enter the realm — not dying, but converting your human years into Shinigami currency. You will exist outside of time, outside of death, in a world of dust and bones and bored gods.

You step through the portal Sidoh opens. The human world falls away.

The Shinigami realm is exactly as bleak as Sidoh described — an endless wasteland of gray rock and gambling death gods. But in the center, something unexpected: the Shinigami King. A being of incomprehensible scale, ancient beyond measure, who has watched humans play with Death Notes for millennia.

"Another one," the King rumbles. "But this one... this one did not come to bargain. This one came to understand."

"Why?" you ask. "Why create the Death Notes? Why give humans the power to kill each other?"

The King\`s laughter shakes the realm. "I did not create them for humans. Humans were never supposed to find them. The Death Notes are OURS — the tools of our existence. When they fall to your world, it is... an accident. A glitch. And I watch, every time, to see what your kind does with power it was never meant to have."

"And what do we do?"

"You destroy yourselves. Every time. Without exception. Except..."

The King leans closer. Eyes like dying stars fix on you.

"Except you. You are the first human in ten thousand years to bring a Death Note BACK. To return power to its source. To choose understanding over domination."

"What does that mean?"

"It means you have earned something no human has earned before. A question. Ask me anything. One question. And I will answer truthfully."

The weight of infinity presses on you. One question. From the being who created death itself.

You ask.

And the answer changes everything you thought you knew about life, death, and the thin line between.`,scene:'dark',mood:'#3d0066',characters:['Sidoh','Ryuk'],effects:{flags:{ending_shinigami:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

// ============================================================
// SCENARIO DATA — AOT: WINGS OF FREEDOM
// ============================================================
window.SCEN_NODES['deathnote'] = DN_NODES;
})();
