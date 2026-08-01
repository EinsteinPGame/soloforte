// Scenario data: heist  (HEIST_NODES)
// Split out of scenario-generator.html on 2026-08-01.
// Edit THIS file to change this scenario — the main file no longer holds node data.
window.SCEN_NODES = window.SCEN_NODES || {};
(function(){
const HEIST_NODES = {};

// ---- CHAPTER 1: ASSEMBLY ----

HEIST_NODES.h_start = {text:`The bar is called The Ninth Circle. Fitting, because the man sitting across from you looks like he crawled out of one.

His name is Viktor Sorel — fixer, broker, the kind of man who knows where every skeleton is buried because he put half of them there. He slides a black envelope across the sticky table.

"The Meridian Vault," he says, smoke curling from his cigarette. "Twelve stories underground, beneath the Kessler Tower in downtown Ashford. They keep things there that banks won't touch. Art. Bearer bonds. Diplomatic secrets. And one particular item my client wants very badly."

He taps the envelope. "Forty million dollar payday. Split however you like. But you need a crew, you need a plan, and you need to move in seventy-two hours."

He leans back. "So. Are you in?"`,scene:'dark',mood:'#0c1445',choices:[{text:`"I'm in. Tell me everything."`,next:'h_briefing'},{text:`"Forty million? What's the catch?"`,next:'h_the_catch'},{text:`"I pick my own crew. My rules."`,next:'h_my_rules'}]};

HEIST_NODES.h_briefing = {text:`Viktor opens a tablet — blueprints, security rotations, employee files. The Meridian Vault is not just secure. It is a fortress designed by paranoid architects for paranoid clients.

"Three security layers," he says. "Biometric lobby, laser grid sublevel, and the vault door itself — a Kessler-7 with a 72-digit rotating cipher. No one has ever cracked one."

He swipes to a photo of a steel door that looks like it belongs on a submarine.

"You will need specialists. I have a list of five. You can recruit three — any more and the split gets too thin, mouths get too loose."

He slides over five dossiers.`,scene:'dark',mood:'#0c1445',effects:{flags:{briefing_done:true}},choices:[{text:'Look at the dossiers.',next:'h_dossiers'}]};

HEIST_NODES.h_the_catch = {text:`Viktor smiles. It does not reach his eyes.

"The catch is that the Meridian Vault has never been robbed. Not once in forty years. Three crews have tried. Two are in prison. One was never found." He lets that hang. "My client does not care about your safety. They care about a specific item in deposit box 1471. A data drive. Everything else in the vault is yours to take or leave."

He stubs out his cigarette. "The other catch? You have seventy-two hours. The drive is being moved to a government facility on Thursday. After that, it is gone forever."

He pushes the envelope closer. "So I will ask again. Are you in?"`,scene:'dark',mood:'#0c1445',effects:{flags:{knows_catch:true}},choices:[{text:`"I'm in. Show me what you have."`,next:'h_briefing'},{text:`"Who else knows about this job?"`,next:'h_who_knows'}]};

HEIST_NODES.h_who_knows = {text:`"Just me, you, and the client," Viktor says. "And the client communicates through three layers of cutouts. I have never met them. Never will."

He finishes his drink. "This is clean. No agencies watching, no rival crews tipped off — yet. But the clock is ticking and every hour that passes is an hour someone else might catch the same scent."

He flags the bartender for another round. "I have five specialists lined up. You pick three for your crew. Each one brings something you cannot do alone."`,scene:'dark',mood:'#0c1445',choices:[{text:'Look at the dossiers.',next:'h_dossiers'}]};

HEIST_NODES.h_my_rules = {text:`Viktor raises an eyebrow, then slowly nods. "Your crew, your plan. I am just the broker." He slides a tablet across the table. "But you should know — the Meridian Vault has three security layers that require three different kinds of expertise. Choose wrong and you will end up like the last crew that tried this."

He pauses. "They were found in the ventilation system. What was left of them."

The tablet shows five dossiers. Five specialists. You can only afford to bring three.`,scene:'dark',mood:'#0c1445',effects:{flags:{own_rules:true},stats:{cou:1}},choices:[{text:'Study the dossiers.',next:'h_dossiers'}]};

HEIST_NODES.h_dossiers = {text:`Five faces stare back at you from the tablet screen.

NOVA — Hacker. Former NSA analyst turned freelance. Can break any digital system but has a reputation for being unpredictable. Currently hiding from her former employers.

SANTOS — Safecracker. Old school. Learned from his father, who learned from the legendary Moreno crew in Buenos Aires. Retired, but broke. Has arthritis in his left hand.

WHEELS — Driver. Street racer turned getaway specialist. Has never lost a tail in fourteen years. Reckless, fearless, and slightly unhinged.

BRICK — Muscle. Ex-military, dishonorably discharged. Mountain of a man with a surprisingly gentle demeanor — until things go wrong. Then he is a wrecking ball.

SILK — Con Artist. Can talk her way past any guard, any checkpoint, any lie detector. The most dangerous person in any room because you never know which version of her is real.

You need three. Choose wisely.`,scene:'dark',mood:'#1a1a6e',choices:[{text:'Start with Nova — you need a hacker.',next:'h_recruit_nova'},{text:'Start with Santos — the vault is everything.',next:'h_recruit_santos'},{text:'Start with Wheels — no plan survives without an exit.',next:'h_recruit_wheels'},{text:'Start with Brick — you need someone who can handle trouble.',next:'h_recruit_brick'},{text:'Start with Silk — getting in is the first problem.',next:'h_recruit_silk'}]};

HEIST_NODES.h_recruit_nova = {characters:['nova'],text:`You find Nova in a server farm on the east side, surrounded by monitors showing data streams you cannot begin to understand. She does not look up when you enter.

"I know why you are here," she says. Her fingers never stop moving across the keyboard. "Meridian Vault. Kessler-7 cipher lock. Biometric security grid running on a closed-loop system with no external access points."

She finally looks at you. Young — maybe twenty-five — with sharp eyes behind wire-frame glasses. "I can break their system. But I need something from you first."

"The NSA has a kill team looking for me. I stole something on my way out — proof of a domestic surveillance program. I need you to deliver a copy to a journalist. A dead drop. Then I am in."`,scene:'dark',mood:'#0984e3',choices:[{text:`"Done. Where's the drop?"`,next:'h_nova_drop'},{text:`"That sounds like it could bring heat on the whole crew."`,next:'h_nova_pushback',check:{stat:'int',dc:10}},{text:`"I will do it. But you owe me one beyond the job."`,next:'h_nova_leverage',check:{stat:'cha',dc:11}}]};

HEIST_NODES.h_nova_drop = {characters:['nova'],text:`Nova hands you a thumb drive no bigger than your fingernail. "Locker 7-C at Grand Central Bus Station. The journalist checks it every Tuesday — that is tomorrow. Just drop it and walk away. No cameras in the locker area. I already checked."

You pocket the drive. Thirty minutes later, you are at the bus station. The locker area is exactly as she described — blind spot in the security coverage. You drop the drive, close the locker, and leave.

When you text Nova the confirmation, she responds with a single word: "In."

One crew member recruited. Who is next?`,scene:'dark',mood:'#0984e3',effects:{flags:{nova_recruited:true}},choices:[{text:'Continue.',next:'h_crew_hub'}]};

HEIST_NODES.h_nova_pushback = {characters:['nova'],text:`Nova stops typing. For the first time, she gives you her full attention.

"You think I would ask if it were dangerous? The dead drop is a bus station locker. No cameras, no tail, five minutes of your time. The journalist does not even know who I am."

She turns back to her screens. "I am not asking you to fight the government. I am asking you to put a thumb drive in a locker. If that is too scary, find another hacker."

She has a point. The drop is clean.`,scene:'dark',mood:'#0984e3',effects:{stats:{int:1}},choices:[{text:`"Fair enough. I will do it."`,next:'h_nova_drop'},{text:`"I will find another way into Meridian."`,next:'h_dossiers'}]};

HEIST_NODES.h_nova_leverage = {characters:['nova'],text:`Nova narrows her eyes. Then, slowly, she smiles. "Smart. Most people just say yes. You negotiate." She nods. "Fine. One favor, after the job. No questions asked. But it goes both ways — you do the drop, I do the hack, and we both have a marker on each other."

She extends her hand. You shake it.

The dead drop goes smoothly. Bus station, locker, five minutes. Clean.

Nova is in. And you have leverage.`,scene:'dark',mood:'#0984e3',effects:{flags:{nova_recruited:true,nova_owes_favor:true},stats:{cha:1}},choices:[{text:'Continue.',next:'h_crew_hub'}]};

HEIST_NODES.h_recruit_santos = {characters:['santos'],text:`Santos lives above a watch repair shop in Little Buenos Aires. The stairs creak. The hallway smells like old wood and solder. When you knock, the door opens on a chain.

An eye peers out — dark, cautious. "Who sent you?"

"Viktor Sorel."

The chain comes off. Santos is older than you expected — sixty, maybe sixty-five — with careful hands and a face full of hard years. His apartment is immaculate. A workbench in the corner holds magnifying lenses, tension wrenches, and a half-disassembled lock that looks like it costs more than the building.

"Meridian Vault," you say.

He laughs. "The Kessler-7? Nobody cracks a Kessler-7."

"You are not nobody."

He looks at his hands. The left one trembles slightly. "I am retired. And my hands are not what they were."`,scene:'dark',mood:'#d4a017',choices:[{text:`"I have heard you are the best who ever lived. Prove it one last time."`,next:'h_santos_pride',check:{stat:'cha',dc:10}},{text:`"What if I told you the take is forty million?"`,next:'h_santos_money'},{text:`"Your father cracked the Banco Nacional in '74. This is your legacy."`,next:'h_santos_legacy'}]};

HEIST_NODES.h_santos_pride = {characters:['santos'],text:`Santos stares at you for a long moment. Then he walks to the workbench and picks up the half-assembled lock. His hands move — precise, delicate, despite the tremor. Click. Click. Click. The lock opens in under thirty seconds.

"I am the best," he says quietly. "Not was. Am."

He sets the lock down. "When do we start?"`,scene:'dark',mood:'#d4a017',effects:{flags:{santos_recruited:true},stats:{cha:1}},choices:[{text:'Brief him on the job.',next:'h_santos_in'}]};

HEIST_NODES.h_santos_money = {characters:['santos'],text:`Santos goes quiet. You can see him doing the math — his rent, his debts, the watch repair shop that barely covers either.

"How much of that forty is mine?"

"Equal split with the crew. You are looking at around ten million."

He walks to the window and looks out at the street below. A long silence. Then: "I swore I was done. After the Milan job, after prison, I swore."

He turns back. "But ten million buys a lot of retirement."

He extends his hand. Firm grip despite the tremor. "I am in."`,scene:'dark',mood:'#d4a017',effects:{flags:{santos_recruited:true}},choices:[{text:'Brief him on the details.',next:'h_santos_in'}]};

HEIST_NODES.h_santos_legacy = {characters:['santos'],text:`Santos freezes. His jaw tightens. "How do you know about my father?"

"Viktor is thorough."

He sits down slowly. The tremor in his left hand is worse now. "My father died in prison. The Banco Nacional job made him a legend and killed him. I swore I would be smarter." He looks at the workbench, at the tools that were his father's before him.

"The Kessler-7," he murmurs. "Nobody has ever cracked one. If I do it..." He trails off, but you can see it in his eyes — the hunger.

"One job," he says. "One last job. For the old man."`,scene:'dark',mood:'#d4a017',effects:{flags:{santos_recruited:true,santos_legacy:true},stats:{per:1}},choices:[{text:'Welcome him to the crew.',next:'h_santos_in'}]};

HEIST_NODES.h_santos_in = {characters:['santos'],text:`Santos pours two glasses of something amber and strong. You clink glasses.

"I will need schematics of the Kessler-7," he says. "And time with a practice lock. Viktor can source one?"

"Viktor can source anything."

"Good." He finishes his drink. "I will be ready."

Another crew member recruited.`,scene:'dark',mood:'#d4a017',effects:{flags:{santos_recruited:true}},choices:[{text:'Continue.',next:'h_crew_hub'}]};

HEIST_NODES.h_recruit_wheels = {characters:['wheels'],text:`The address leads you to a body shop in the industrial district. Inside, a woman is underneath a matte-black Dodge Charger, only her boots visible.

"Wheels?"

"Depends on who is asking." She rolls out on a creeper. Lean, wiry, mid-thirties, with grease-stained hands and a grin that suggests she is always going too fast for something.

"Viktor sent me. I need a driver for a three-day job."

She stands, wiping her hands on a rag. "What kind of driving?"

"The kind where police chase you."

Her grin gets wider. "Keep talking."`,scene:'dark',mood:'#636e72',choices:[{text:`"The Meridian Vault. Forty million. You drive us out."`,next:'h_wheels_pitch'},{text:`"I have seen your record. Fourteen years, never caught. I need that."`,next:'h_wheels_flattery',check:{stat:'cha',dc:9}},{text:`"No questions. Big money. In or out?"`,next:'h_wheels_blunt'}]};

HEIST_NODES.h_wheels_pitch = {characters:['wheels'],text:`Wheels lets out a low whistle. "Meridian. You know three crews have tried that, right?"

"I know. That is why I need the best driver in the city."

She walks around the Charger, running her hand along the fender. "I will need two vehicles. Primary and backup. And I pick the routes — no arguments."

"Done."

"And I want fifteen percent."

"Equal split with the crew."

She thinks it over. Then she pops the Charger's hood and shows you the engine — heavily modified, pushing at least 700 horsepower. "This is what forty million buys you. I am in."`,scene:'dark',mood:'#636e72',effects:{flags:{wheels_recruited:true}},choices:[{text:'Lock it in.',next:'h_wheels_in'}]};

HEIST_NODES.h_wheels_flattery = {characters:['wheels'],text:`Wheels laughs. "You did your homework. Fourteen years — Milan, Tokyo, that thing in Johannesburg that technically never happened." She leans against the car. "Most people just ask if I can drive fast. You actually know the record."

She crosses her arms. "Alright. I like someone who does research. What is the job?"

You lay it out — Meridian Vault, seventy-two hours, the whole picture. She listens without interrupting.

"I want to pick my own vehicles and routes," she says when you finish.

"Done."

"Then I am in. This sounds fun."`,scene:'dark',mood:'#636e72',effects:{flags:{wheels_recruited:true},stats:{cha:1}},choices:[{text:'Welcome aboard.',next:'h_wheels_in'}]};

HEIST_NODES.h_wheels_blunt = {characters:['wheels'],text:`Wheels studies you for a long moment. "No questions? That is either very professional or very stupid." She shrugs. "Lucky for you, I do not care which."

She slams the Charger's hood shut. "Big money, no questions. My kind of job. When do we move?"

"Seventy-two hours."

"That is tight." She grabs a duffel bag from behind the workbench — it is already packed. "Good thing I travel light."`,scene:'dark',mood:'#636e72',effects:{flags:{wheels_recruited:true}},choices:[{text:'She is in. Move on.',next:'h_wheels_in'}]};

HEIST_NODES.h_wheels_in = {characters:['wheels'],text:`Wheels starts prepping immediately — pulling up city maps on a grease-smeared laptop, marking routes, timing traffic light cycles.

"I will have primary and backup routes by tomorrow," she says without looking up. "You just worry about getting in and out of that vault. I will handle everything between the vault and freedom."

Another crew member locked in.`,scene:'dark',mood:'#636e72',effects:{flags:{wheels_recruited:true}},choices:[{text:'Continue.',next:'h_crew_hub'}]};

HEIST_NODES.h_recruit_brick = {characters:['brick'],text:`Brick is at a boxing gym in the Docks — the kind of place where the heavy bags are held together with duct tape and the floor mats smell like decades of sweat.

He is enormous. Six-five, two-sixty, with scarred knuckles and a face that has been rearranged more than once. But when he sees you approach, his expression is surprisingly gentle.

"Help you with something?" His voice is softer than you expected.

"Viktor Sorel sent me. I have a job that needs muscle."

His expression hardens. Just slightly, but you catch it. "I do not hurt people for money anymore."

"This is not that kind of job. Security work. Protection. Making sure a crew of specialists gets in and out of a building safely."

"What building?"`,scene:'dark',mood:'#e17055',choices:[{text:`"The Meridian Vault. Biggest score in history."`,next:'h_brick_honest'},{text:`"A secure facility. The less you know now, the better."`,next:'h_brick_vague',check:{stat:'cha',dc:10}},{text:`"I will be straight with you — it is a heist. But nobody gets hurt."`,next:'h_brick_promise'}]};

HEIST_NODES.h_brick_honest = {characters:['brick'],text:`Brick exhales slowly. "Meridian. You know what happened to the last crew?"

"I know. We are better."

He unwraps his hands methodically, loop by loop. "I did three tours overseas. Came back wrong. Did things for money I am not proud of. The gym — this is me trying to be better."

He pauses. "How much?"

"Equal split. You are looking at around ten million."

He stares at the heavy bag for a long time. "Ten million would buy the gym. Give these kids a real place." He looks at you. "No killing. That is my line. Cross it and I walk, money or no money."

"Deal."

He wraps his hands again, tighter this time. "Then I am in."`,scene:'dark',mood:'#e17055',effects:{flags:{brick_recruited:true,brick_no_kill:true}},choices:[{text:'Shake on it.',next:'h_brick_in'}]};

HEIST_NODES.h_brick_vague = {characters:['brick'],text:`Brick's gentle expression vanishes. He steps closer — and suddenly you understand exactly how big he is.

"I do not work blind. Ever. You want my help, you tell me everything. Or you walk out that door."

He is not bluffing. You tell him. Meridian Vault, forty million, seventy-two hours. All of it.

He listens, then nods slowly. "At least you are honest — eventually. No killing. That is my one rule."

"Agreed."

"Then we have a deal."`,scene:'dark',mood:'#e17055',effects:{flags:{brick_recruited:true,brick_no_kill:true},stats:{cha:1}},choices:[{text:'Welcome to the crew.',next:'h_brick_in'}]};

HEIST_NODES.h_brick_promise = {characters:['brick'],text:`Brick studies your face like he is reading a contract in fine print. Whatever he sees there, it passes inspection.

"A heist," he repeats. "Nobody gets hurt."

"Nobody gets hurt. You are there to make sure of that — to protect the crew if things go sideways. Intimidation, not violence."

He considers this. "I have been the wrecking ball my whole life. Maybe it is time to be the shield instead." He picks up his gym bag. "Equal split?"

"Equal split."

"I am in. But if anyone on your crew starts shooting, I shut the whole thing down. Understood?"

"Understood."`,scene:'dark',mood:'#e17055',effects:{flags:{brick_recruited:true,brick_no_kill:true},stats:{cou:1}},choices:[{text:'He is in.',next:'h_brick_in'}]};

HEIST_NODES.h_brick_in = {characters:['brick'],text:`Brick shoulders his bag and follows you out of the gym. On the way to the car, a group of teenage boxers call out to him. He waves, smiles, tells them he will be back in a few days.

"They are good kids," he says quietly. "This money could change their lives."

Another crew member recruited.`,scene:'dark',mood:'#e17055',effects:{flags:{brick_recruited:true}},choices:[{text:'Continue.',next:'h_crew_hub'}]};

HEIST_NODES.h_recruit_silk = {characters:['silk'],text:`Silk finds you before you find her.

You are at the hotel bar where Viktor said she would be. You have been waiting twenty minutes when a woman in an expensive dress sits down next to you and says, "You are here about Meridian."

She is striking — late twenties, effortlessly elegant, with eyes that miss nothing. She orders a martini without looking at the menu.

"Viktor told me you would come. He also told me you would try to pitch the job like it is an opportunity." She sips her drink. "Skip that part. I already know what Meridian is. I want to know what you are."`,scene:'dark',mood:'#fd79a8',choices:[{text:`"I am the person who is going to pull off the impossible."`,next:'h_silk_confident',check:{stat:'cou',dc:10}},{text:`"I am careful. Methodical. I do not leave things to chance."`,next:'h_silk_careful'},{text:`"I am the person writing the checks. That is all you need to know."`,next:'h_silk_cold',check:{stat:'cha',dc:11}}]};

HEIST_NODES.h_silk_confident = {characters:['silk'],text:`Silk tilts her head, studying you like a painting she is not sure she likes. Then she smiles.

"Confidence. Good. You will need it." She finishes her martini in one elegant motion. "I have been watching the Meridian building for six months. I know the security chief's name, his coffee order, and the name of his daughter's violin teacher. I know which guards are bribable and which ones are true believers."

She sets down her glass. "What I need from you is a crew worth my time. Who else do you have?"`,scene:'dark',mood:'#fd79a8',effects:{stats:{cou:1}},choices:[{text:'Tell her about the crew.',next:'h_silk_in'}]};

HEIST_NODES.h_silk_careful = {characters:['silk'],text:`Silk nods slowly. "Careful. I can work with careful. The reckless ones get people killed."

She pulls a compact mirror from her purse and checks her lipstick — but you notice her eyes are scanning the room behind you in the reflection. Professional habit.

"I have been running cons since I was sixteen. Corporate espionage, art fraud, a thing with a Saudi prince that I am contractually forbidden to discuss." She snaps the mirror shut. "Meridian is the biggest vault I have ever targeted. But every vault is just a series of people, and people are what I do."`,scene:'dark',mood:'#fd79a8',effects:{stats:{per:1}},choices:[{text:'Welcome aboard.',next:'h_silk_in'}]};

HEIST_NODES.h_silk_cold = {characters:['silk'],text:`Silk laughs — sharp, genuine, surprised. "Oh, I like you. Most people try to charm me. You just pulled rank." She raises her glass. "To professionalism."

She sets down the glass and her entire demeanor shifts — playful to precise in a heartbeat. "Fine. Business. I can get your crew past the lobby security using fabricated credentials and a distraction that will keep the guards busy for exactly seven minutes. After that, you are on your own until you need an exit."

She slides a business card across the bar. It is blank except for a phone number. "Call me when you have the rest of the crew. And do not try to find out my real name. You will not like what happens."`,scene:'dark',mood:'#fd79a8',effects:{flags:{silk_cold_intro:true},stats:{cha:1}},choices:[{text:'She is in.',next:'h_silk_in'}]};

HEIST_NODES.h_silk_in = {characters:['silk'],text:`Silk stands, smooths her dress, and leaves cash on the bar — exact change, including tip.

"I will need wardrobe access and forty-eight hours to build my cover identity for the lobby. Viktor has my measurements on file." She says this without a hint of irony.

At the door she pauses. "One more thing. I do not carry weapons. Ever. If your plan requires me to hold a gun, find someone else."

She is gone before you can respond. But she is in.

Another crew member recruited.`,scene:'dark',mood:'#fd79a8',effects:{flags:{silk_recruited:true}},choices:[{text:'Continue.',next:'h_crew_hub'}]};

// ---- CREW HUB — recruits route here to pick next or plan ----
HEIST_NODES.h_crew_hub = {text:'Your crew is taking shape. Who do you bring in next — or is the team ready?',scene:'dark',mood:'#1a1a6e',choices:[{text:'Recruit Nova the hacker.',next:'h_recruit_nova',requireFlag:'!nova_recruited'},{text:'Recruit Santos the safecracker.',next:'h_recruit_santos',requireFlag:'!santos_recruited'},{text:'Recruit Wheels the driver.',next:'h_recruit_wheels',requireFlag:'!wheels_recruited'},{text:'Recruit Brick for muscle.',next:'h_recruit_brick',requireFlag:'!brick_recruited'},{text:'Recruit Silk the con artist.',next:'h_recruit_silk',requireFlag:'!silk_recruited'},{text:'The crew is set. Plan the approach.',next:'h_plan_approach',requireFlag:'crew_3'}]};

// ---- CREW COMPLETE — PLAN THE APPROACH ----

HEIST_NODES.h_plan_approach = {text:`The crew is assembled. Three specialists, each the best at what they do. You meet in a rented warehouse on the waterfront — maps, blueprints, and coffee cups covering every surface.

Viktor joins by encrypted video call. "You have your crew. Now you need your approach. There are three ways into the Kessler Tower."

He highlights them on the blueprint:

FRONT DOOR — Walk in through the lobby disguised as authorized personnel. Requires flawless cover identities and nerves of steel. Highest risk of face-to-face contact with security.

UNDERGROUND — Access the old maintenance tunnels beneath the city that connect to Meridian's sublevel. Dark, dangerous, and partially collapsed. But no security cameras.

ROOFTOP — Rappel from the adjacent building, enter through the ventilation system on the 40th floor, work your way down. Physically demanding. Zero margin for error.

"Choose carefully," Viktor says. "Once you commit, there is no changing course."`,scene:'dark',mood:'#1a1a6e',choices:[{text:'Front Door — we walk right in.',next:'h_plan_front'},{text:'Underground — through the tunnels.',next:'h_plan_tunnels'},{text:'Rooftop — from above.',next:'h_plan_roof'}]};

HEIST_NODES.h_plan_front = {text:`You choose the front door. Bold. Audacious. Exactly the kind of move nobody expects.

The plan takes shape over the next twelve hours. Fake credentials, cover stories, a distraction to occupy the lobby guards. Every detail matters — one wrong look, one hesitation, and the whole thing unravels.

Your crew preps through the night. By dawn, everything is in place.

The Meridian Vault job begins at 9 AM sharp.`,scene:'dark',mood:'#d4a017',effects:{flags:{approach_front:true}},choices:[{text:'Begin the heist.',next:'h_ch2_front_lobby'}]};

HEIST_NODES.h_plan_tunnels = {text:`The underground approach. Old maintenance tunnels built in the 1960s, partially collapsed, running beneath three city blocks directly to Meridian's sublevel.

You spend the night studying tunnel maps, checking structural reports, packing equipment. The tunnels are tight, dark, and have not been maintained in decades. But they bypass every security checkpoint above ground.

Your crew gears up — flashlights, breaching tools, gas masks for the older sections where the air quality is unknown.

The Meridian Vault job begins at midnight.`,scene:'dark',mood:'#2d3436',effects:{flags:{approach_tunnels:true}},choices:[{text:'Enter the tunnels.',next:'h_ch2_tunnel_entry'}]};

HEIST_NODES.h_plan_roof = {text:`The rooftop approach. The building next to Kessler Tower is under renovation — empty above the 30th floor. You will cross to Kessler's roof, enter the ventilation system, and descend forty stories to the vault sublevel.

It requires climbing gear, physical endurance, and absolute precision. One wrong move and you are falling four hundred feet or setting off a motion sensor.

Your crew spends the night running the numbers — wind speed, guard rotations on the roof, vent dimensions. By midnight, the plan is solid.

The Meridian Vault job begins at 2 AM.`,scene:'dark',mood:'#0c1445',effects:{flags:{approach_roof:true}},choices:[{text:'Begin the ascent.',next:'h_ch2_roof_climb'}]};

// ---- CHAPTER 2: THE JOB — FRONT DOOR PATH ----

HEIST_NODES.h_ch2_front_lobby = {text:`9:03 AM. You walk through the revolving doors of Kessler Tower wearing a tailored suit and carrying a briefcase full of counterfeit documents. Your heart is pounding but your face is stone.

The lobby is marble and glass — intimidatingly corporate. A security desk with two guards. A biometric scanner at the elevator bank. Cameras everywhere.

A guard looks up from his monitor. "Can I help you?"

This is it. The first test.`,scene:'dark',mood:'#d4a017',choices:[{text:`"Meridian Systems audit team. We have an appointment with Director Hale."`,next:'h_front_bluff',check:{stat:'cha',dc:10}},{text:'Flash a fake badge confidently and keep walking.',next:'h_front_badge',check:{stat:'cou',dc:11}},{text:'Wait — signal your crew to trigger the distraction first.',next:'h_front_distract'}]};

HEIST_NODES.h_front_bluff = {text:`The guard checks his screen, frowning. "I do not have an audit scheduled for today."

"It was added yesterday. Emergency compliance review — your system flagged three anomalies last week. Check with Director Hale's office directly."

You keep your voice calm, bored even — like someone who does this every day and finds it tedious. The guard hesitates, then picks up the phone.

Thirty agonizing seconds. Then he nods and waves you through. "Elevators on the right. Sublevel access requires a second check at B2."

You are in.`,scene:'dark',mood:'#d4a017',effects:{stats:{cha:1}},choices:[{text:'Head to the elevators.',next:'h_front_elevator'}]};

HEIST_NODES.h_front_badge = {text:`You flash the badge — a perfect forgery, courtesy of Viktor's contacts — and keep walking without breaking stride. Confidence is the best credential.

The guard starts to say something, then stops. You are already past the desk, moving with the purposeful energy of someone who belongs here.

Behind you, the guard mutters something to his colleague and checks his computer. You have maybe ninety seconds before he realizes the badge number does not match any employee on file.

You need to move fast.`,scene:'dark',mood:'#e17055',effects:{stats:{cou:1},flags:{front_rushed:true}},choices:[{text:'Sprint for the elevator.',next:'h_front_elevator'},{text:'Duck into a side corridor.',next:'h_front_corridor'}]};

HEIST_NODES.h_front_distract = {text:`You tap your earpiece twice — the signal. Three seconds later, the lobby fire alarm goes off. Sprinklers activate on the east side of the building. People start rushing for the exits. The guards leap from their desk to manage the crowd.

In the chaos, you slip through the security gate while their backs are turned. The biometric scanner is offline — fire protocol disables the secondary locks for evacuation.

Messy, loud, but effective. You are past the first layer.`,scene:'dark',mood:'#d4a017',effects:{flags:{front_alarm:true}},choices:[{text:'Find the elevator to the sublevel.',next:'h_front_elevator'}]};

HEIST_NODES.h_front_corridor = {text:`You duck into a maintenance corridor as the guard picks up his radio. The corridor is narrow, fluorescent-lit, and leads to a service elevator at the back of the building.

The service elevator is older, less secure — no biometric scanner. You press B2 and hold your breath as the doors close.

The radio chatter fades as you descend. You are behind schedule, but you are in.`,scene:'dark',mood:'#636e72',effects:{stats:{per:1}},choices:[{text:'Descend to the sublevel.',next:'h_front_sublevel'}]};

HEIST_NODES.h_front_elevator = {text:`The elevator descends smoothly. B1. B2. The doors open to a stark white corridor — antiseptic, humming with unseen machinery. This is the transition zone between the corporate world above and the vault below.

A second checkpoint. A single guard behind reinforced glass, and a full-body scanner.

"Credentials," the guard says flatly.

Your fake credentials worked upstairs. Down here, they will get a closer look.`,scene:'dark',mood:'#1a1a6e',choices:[{text:'Hand over the credentials and bluff through.',next:'h_front_sublevel',check:{stat:'cha',dc:12}},{text:'Tell your hacker to loop the camera feeds now.',next:'h_front_sublevel_hack',check:{stat:'int',dc:10}},{text:'This is taking too long — signal Brick to handle the guard.',next:'h_front_sublevel_force'}]};

HEIST_NODES.h_front_sublevel = {text:`You hand over the credentials with practiced boredom. The guard scans them, checks his screen, looks at your face, looks at the screen again.

Ten seconds. Twenty. Your pulse is hammering behind your jaw.

Then he nods and buzzes you through. "Vault level is B5. Escort will meet you at the landing."

There is no escort coming — but you will deal with that when you get there. You are past the second checkpoint. Two down, one to go.`,scene:'dark',mood:'#1a1a6e',effects:{stats:{cha:1}},choices:[{text:'Continue to the vault level.',next:'h_vault_approach'}]};

HEIST_NODES.h_front_sublevel_hack = {text:`You tap your earpiece. "Nova, I need the sublevel cameras on a loop. Now."

A pause. Typing. Then Nova's voice, calm and precise: "Done. You have a four-minute window. The guard's screen is showing yesterday's footage."

You walk up to the checkpoint with complete confidence. The guard checks your credentials, glances at his monitors — which show an empty corridor behind you — and waves you through.

"B5 for the vault level," he says.

Four minutes. More than enough.`,scene:'dark',mood:'#1a1a6e',effects:{stats:{int:1},flags:{nova_helped_sublevel:true}},choices:[{text:'Move to the vault level.',next:'h_vault_approach'}]};

HEIST_NODES.h_front_sublevel_force = {text:`Brick steps forward. He does not say a word — just stands there, filling the corridor, looking at the guard with an expression that communicates volumes.

The guard's hand drifts toward the alarm button. Brick shakes his head slowly.

"Do not," Brick says quietly. "Nobody needs to get hurt today."

The guard looks at Brick. Looks at the alarm. Looks at Brick again. His hand moves away from the button. He buzzes you through, eyes down, jaw tight.

Brick nods to the guard as he passes. "Smart choice. Thank you."`,scene:'dark',mood:'#e17055',effects:{flags:{brick_intimidated:true}},choices:[{text:'Move quickly to the vault level.',next:'h_vault_approach'}]};

// ---- CHAPTER 2: THE JOB — TUNNEL PATH ----

HEIST_NODES.h_ch2_tunnel_entry = {text:`Midnight. The tunnel entrance is behind a condemned building in the warehouse district — a rusted grate that has not been opened in years. It takes three of you to pry it loose.

The darkness below is absolute. Your flashlight cuts a narrow beam through dust and stale air. The tunnel stretches ahead, concrete walls streaked with moisture and age.

"Stay close," you tell the crew. "These tunnels have not been maintained since the sixties. Watch for collapses."

The first hundred meters are easy. Then the tunnel forks.`,scene:'dark',mood:'#2d3436',choices:[{text:'Take the left fork — it looks more stable.',next:'h_tunnel_left'},{text:'Take the right fork — it is more direct according to the map.',next:'h_tunnel_right',check:{stat:'per',dc:10}},{text:'Check the map carefully before choosing.',next:'h_tunnel_map',check:{stat:'int',dc:9}}]};

HEIST_NODES.h_tunnel_left = {text:`The left tunnel is wider and the ceiling is intact. Good sign. You move quickly, single file, flashlights sweeping the walls.

After twenty minutes, the tunnel angles downward. Water begins pooling on the floor — ankle deep, then knee deep. Cold. Old.

"This section flooded at some point," one of your crew mutters. "Could be structurally compromised."

A low groan echoes through the tunnel — settling concrete, or something worse.`,scene:'dark',mood:'#2d3436',choices:[{text:'Push through the water. Keep moving.',next:'h_tunnel_flood',check:{stat:'cou',dc:10}},{text:'Turn back and try the right fork.',next:'h_tunnel_right'}]};

HEIST_NODES.h_tunnel_right = {text:`The right fork is tighter — you have to duck in places, and the walls press in close enough to touch both sides. But the structure is solid and the path matches the old city plans.

After thirty minutes of crawling and crouching, you hear it — a low mechanical hum. The Meridian building's environmental systems. You are close.

The tunnel opens into a wider maintenance chamber. Pipes and conduits line the ceiling. A heavy steel door is set into the far wall, stenciled: "MERIDIAN — SUBLEVEL ACCESS — AUTHORIZED ONLY."`,scene:'dark',mood:'#2d3436',effects:{stats:{per:1}},choices:[{text:'Try the door.',next:'h_tunnel_door'},{text:'Check for alarms on the door first.',next:'h_tunnel_door_check',check:{stat:'int',dc:10}}]};

HEIST_NODES.h_tunnel_map = {text:`You spread the old city maintenance map against the tunnel wall and trace the routes with your finger. The left fork curves wide but connects to a flooded section. The right fork is tighter but goes directly to a maintenance access point beneath the Meridian building.

"Right fork," you say. "It is tighter but it is the only one that gets us where we need to go without swimming."

The crew nods. You fold the map and lead the way.`,scene:'dark',mood:'#2d3436',effects:{stats:{int:1}},choices:[{text:'Take the right fork.',next:'h_tunnel_right'}]};

HEIST_NODES.h_tunnel_flood = {text:`You push forward. The water rises to your waist, cold and black. Every step is uncertain — the floor is uneven, littered with debris you cannot see.

Then your foot hits nothing. A drop-off. You grab the wall just in time, heart slamming against your ribs.

The crew helps pull you back. The tunnel ahead is completely submerged — impassable without diving equipment you do not have.

"Back to the fork," you say, water dripping from every inch of you. "Right side this time."`,scene:'dark',mood:'#2d3436',effects:{stats:{cou:1}},choices:[{text:'Take the right fork.',next:'h_tunnel_right'}]};

HEIST_NODES.h_tunnel_door = {text:`You try the handle. Locked, but the mechanism is old and corroded. A few minutes with a pry bar and it gives way with a groan that echoes through the chamber.

On the other side: a narrow service corridor, modern construction, fluorescent lights on a motion sensor. You are inside the Meridian building's infrastructure.

The crew files through. You are in.`,scene:'dark',mood:'#1a1a6e',choices:[{text:'Navigate to the vault level.',next:'h_vault_approach'}]};

HEIST_NODES.h_tunnel_door_check = {text:`You hold up a hand — stop. You run your flashlight along the door frame. There — a thin wire, barely visible, running from the door handle to a contact sensor in the frame. Opening the door without disabling it would trigger a silent alarm.

You carefully cut the wire and bypass the sensor. Then you open the door.

Modern corridor. Fluorescent lights. You are inside Meridian's infrastructure, and nobody knows you are here.`,scene:'dark',mood:'#1a1a6e',effects:{stats:{int:1},flags:{tunnel_alarm_disabled:true}},choices:[{text:'Move to the vault level.',next:'h_vault_approach'}]};

// ---- CHAPTER 2: THE JOB — ROOFTOP PATH ----

HEIST_NODES.h_ch2_roof_climb = {text:`2 AM. The wind is brutal at 400 feet. You stand on the edge of the renovation building, looking across a twenty-foot gap at the Kessler Tower's rooftop. Below you, the city is a grid of lights and distant sirens.

Your crew anchors the zipline. The cable stretches across the void, vibrating in the wind.

"You first," someone says. Nobody is eager.

Twenty feet. Four hundred feet of nothing below. One cable.`,scene:'dark',mood:'#0c1445',choices:[{text:'Clip in and go. No hesitation.',next:'h_roof_cross',check:{stat:'cou',dc:11}},{text:'Test the cable tension first — be sure.',next:'h_roof_test',check:{stat:'int',dc:9}},{text:'Let someone else go first. Watch how they do it.',next:'h_roof_watch'}]};

HEIST_NODES.h_roof_cross = {text:`You clip your harness to the cable, grip the handles, and push off. The wind hits you immediately — a wall of cold air that tries to twist you sideways. The cable sags under your weight, and for one terrible moment you are swinging over four hundred feet of empty space.

Then momentum carries you forward. Your boots hit the Kessler rooftop and you roll, disconnecting the harness. Your hands are shaking but you are across.

One by one, the crew follows. Everyone makes it.

The rooftop ventilation access hatch is fifteen meters away.`,scene:'dark',mood:'#0c1445',effects:{stats:{cou:1}},choices:[{text:'Open the ventilation hatch.',next:'h_roof_vent'}]};

HEIST_NODES.h_roof_test = {text:`You pull out a tension gauge and clip it to the cable. The reading is solid — well within safety margins. You double-check the anchor points on both sides.

"Cable is good," you announce. "But we cross one at a time. Too much weight and the sag puts us in window-view from the floor below."

The crossing goes smoothly. Methodical, controlled, one person at a time. No drama. The crew reaches the Kessler rooftop without incident.

The ventilation hatch is right where the blueprints said it would be.`,scene:'dark',mood:'#0c1445',effects:{stats:{int:1}},choices:[{text:'Access the ventilation system.',next:'h_roof_vent'}]};

HEIST_NODES.h_roof_watch = {text:`Brick goes first. He clips in, takes a breath, and crosses the gap like he has done it a hundred times. His weight makes the cable dip alarmingly, but he makes it look easy.

Watching him gives you the confidence — and the technique. You go second. The crossing is terrifying but manageable. The wind tries to spin you but you keep your eyes on the far rooftop and push through.

The whole crew is across in under five minutes.`,scene:'dark',mood:'#0c1445',choices:[{text:'Find the ventilation access.',next:'h_roof_vent'}]};

HEIST_NODES.h_roof_vent = {text:`The ventilation hatch is secured with industrial bolts. Nothing your tools cannot handle. Three minutes of quiet work and the hatch lifts free, revealing a dark shaft descending into the building.

The shaft is tight — barely wide enough for shoulders. Forty stories of vertical descent with horizontal crossover points every ten floors.

"Slow and quiet," you tell the crew. "One wrong move and the motion sensors in the ducts will light us up."

You lower yourself into the darkness.`,scene:'dark',mood:'#0c1445',choices:[{text:'Descend carefully — slow and steady.',next:'h_roof_descend',check:{stat:'per',dc:10}},{text:'Move fast — the longer you are in the ducts, the more risk.',next:'h_roof_descend_fast',check:{stat:'cou',dc:11}}]};

HEIST_NODES.h_roof_descend = {text:`You descend floor by floor, using your arms and legs to control your speed. The duct walls are cold aluminum, every tiny sound amplified and echoed. You can hear the building breathing — HVAC systems, the hum of servers, distant elevator motors.

At the B2 crossover point, you transition from vertical to horizontal, crawling through a duct that runs directly above the vault level corridor.

Through a grate below, you can see it — the vault level. Clean white corridors, security cameras, and at the far end, the massive door of the Meridian Vault itself.

You are above the target. Time to drop in.`,scene:'dark',mood:'#0c1445',effects:{stats:{per:1}},choices:[{text:'Drop into the vault level corridor.',next:'h_vault_approach'}]};

HEIST_NODES.h_roof_descend_fast = {text:`You move quickly — maybe too quickly. At the 20th floor crossover, your foot slips against the duct wall and the resulting boom echoes through the shaft like a drum.

Everyone freezes. Thirty seconds of silence. Then — nothing. No alarms. No response.

You exhale and keep moving, faster now but more carefully. The crew descends the remaining floors without incident and reaches the B2 horizontal duct above the vault level.

Through the grate below: white corridors, cameras, and the vault door at the far end.`,scene:'dark',mood:'#0c1445',effects:{stats:{cou:1},flags:{roof_noise:true}},choices:[{text:'Drop into the vault corridor.',next:'h_vault_approach'}]};

// ---- CHAPTER 2: CONVERGENCE — THE VAULT ----

HEIST_NODES.h_vault_approach = {text:`You are on the vault level. This is where all three security layers converge — and where the real challenge begins.

The corridor ahead is thirty meters of polished floor leading to the Meridian Vault door. Between you and it: a laser grid that crisscrosses the hallway in a shifting pattern, and two cameras on rotating mounts.

The vault door itself is a gleaming wall of steel — the Kessler-7. Seventy-two digits, rotating cipher, tamper-proof casing. The most secure lock ever built.

Your crew is behind you, waiting for your call. How do you handle the laser grid?`,scene:'dark',mood:'#1a1a6e',choices:[{text:'Have your hacker disable the grid remotely.',next:'h_vault_hack_grid',check:{stat:'int',dc:11}},{text:'Navigate through the grid manually — watch the pattern.',next:'h_vault_dodge_grid',check:{stat:'per',dc:12}},{text:'Cut the power to this floor. Brute force.',next:'h_vault_power_cut',check:{stat:'cou',dc:10}}]};

HEIST_NODES.h_vault_hack_grid = {text:`"Nova, the laser grid. Can you shut it down?"

"Already working on it." Keys clacking rapidly through the earpiece. "The grid runs on an isolated circuit, but it checks in with the main security server every sixty seconds. I can spoof the check-in and tell the system the grid is active when it is not."

Thirty seconds of tense silence. Then: "Grid is down. You have until someone physically inspects the corridor — I would say ten minutes, maybe fifteen."

The red beams vanish. The corridor is clear.`,scene:'dark',mood:'#0984e3',effects:{stats:{int:1},flags:{grid_hacked:true}},choices:[{text:'Move to the vault door.',next:'h_vault_door'}]};

HEIST_NODES.h_vault_dodge_grid = {text:`You study the pattern. The lasers shift every eight seconds — a complex but predictable sequence. High, low, diagonal, reset. You trace it three times to be sure.

"Follow exactly where I step," you tell the crew.

You enter the grid. Duck under the first beam. Step over the second. Twist sideways between two converging lines. The timing is everything — one second too slow and you are a silhouette on a security monitor.

Eight seconds. Reset. Move. Eight seconds. Reset. Move.

You reach the other side. Your crew follows your path exactly. Everyone makes it through.`,scene:'dark',mood:'#d4a017',effects:{stats:{per:2}},choices:[{text:'Approach the vault door.',next:'h_vault_door'}]};

HEIST_NODES.h_vault_power_cut = {text:`"Brick, the power junction. Now."

Brick finds the electrical panel on the corridor wall and rips the cover off with his bare hands. Inside: a maze of circuits. You identify the grid's dedicated power feed and pull it.

The lasers die. The lights die. Emergency reds kick in, bathing everything in crimson.

"We have maybe five minutes before security responds to the power failure," you say. "Move."

The crew sprints down the corridor in the red emergency glow.`,scene:'dark',mood:'#d63031',effects:{stats:{cou:1},flags:{power_cut:true}},choices:[{text:'Get to the vault door. Now.',next:'h_vault_door'}]};

HEIST_NODES.h_vault_door = {text:`The Kessler-7 vault door is even more imposing up close. Two meters of solid steel, a digital keypad with seventy-two character positions, and a biometric palm scanner as a secondary lock.

This is it. The heart of the heist.

If you have a safecracker, this is their moment. If not, you need another way through.`,scene:'dark',mood:'#d4a017',choices:[{text:'Let Santos work the lock.',next:'h_vault_santos',requireFlag:'santos_recruited'},{text:'Have Nova hack the digital keypad.',next:'h_vault_nova_hack',requireFlag:'nova_recruited'},{text:'Look for a way to bypass the door entirely.',next:'h_vault_bypass',check:{stat:'int',dc:12}},{text:'Brick — can you force it?',next:'h_vault_force',check:{stat:'str',dc:14}}]};

HEIST_NODES.h_vault_santos = {characters:['santos'],text:`Santos steps forward. He sets down a leather roll of tools — picks, tension wrenches, a stethoscope — and places his hands on the vault door. His eyes close.

"Everyone be quiet," he whispers.

His left hand trembles. He presses it flat against the steel, steadying it through sheer force of will. Then he begins. Tumblers clicking, the stethoscope pressed against the door, his fingers moving with impossible precision.

One digit. Ten digits. Twenty. Each one a tiny victory against the most complex lock ever built.

Forty minutes pass. Sweat beads on his forehead. His crew watches in silence.

Click. Click. Click.

The seventy-second digit falls into place. The Kessler-7 lets out a deep mechanical sigh, and the vault door swings open.

Santos steps back, hands shaking, and smiles. "For the old man."`,scene:'dark',mood:'#d4a017',effects:{stats:{per:1},flags:{vault_opened:true,santos_cracked:true}},choices:[{text:'Enter the vault.',next:'h_inside_vault'}]};

HEIST_NODES.h_vault_nova_hack = {characters:['nova'],text:`Nova plugs a device into the keypad's maintenance port — a custom rig she built herself. Code scrolls across her screen at inhuman speed.

"The cipher rotates every ninety seconds," she mutters. "I need to predict the next sequence before it changes." Her fingers fly across the keyboard.

Sixty seconds. The cipher changes. She swears, adjusts, tries again.

Forty seconds. The cipher changes again. She is sweating now.

Twenty seconds. Her fingers stop. She hits enter.

The vault door clicks. A deep mechanical hum. The Kessler-7 disengages.

Nova pulls her device free and allows herself a small, fierce grin. "Nobody tell the NSA about this."`,scene:'dark',mood:'#0984e3',effects:{stats:{int:1},flags:{vault_opened:true,nova_cracked:true}},choices:[{text:'The vault is open. Get inside.',next:'h_inside_vault'}]};

HEIST_NODES.h_vault_bypass = {text:`You study the door frame. The Kessler-7 is impenetrable — but the wall around it is reinforced concrete, not steel. Old building, modern vault. The vault was installed after construction.

"There," you point to a maintenance conduit running along the ceiling. It passes through the wall next to the vault door — too small for a person, but big enough for a camera and a mechanical arm.

Twenty minutes of careful work later, you have threaded a flexible camera through the conduit and triggered the interior manual release. The vault door opens from the inside.

Not how the architects planned it. But it works.`,scene:'dark',mood:'#1a1a6e',effects:{stats:{int:2},flags:{vault_opened:true,vault_bypassed:true}},choices:[{text:'Enter the vault.',next:'h_inside_vault'}]};

HEIST_NODES.h_vault_force = {text:`Brick looks at the vault door. The vault door looks back.

"That is two meters of solid steel," he says. "I am strong, but I am not Superman."

He pauses. "But the hinges..." He examines the door's mounting points. "These are industrial but they have a maintenance release. If I can get enough leverage..."

He wedges a steel bar into the hinge mechanism and puts his full weight — all 260 pounds — behind it. The metal groans. Brick roars. Something gives.

The hinge release pops. With the locking mechanism still engaged, the door tilts on its remaining hinge just enough to create a gap. Barely. Just enough to squeeze through.

"After you," Brick says, panting.`,scene:'dark',mood:'#e17055',effects:{stats:{str:1},flags:{vault_opened:true,vault_forced:true}},choices:[{text:'Squeeze through into the vault.',next:'h_inside_vault'}]};

HEIST_NODES.h_inside_vault = {text:`The Meridian Vault.

Rows and rows of safety deposit boxes line the walls, floor to ceiling, each one gleaming under cold fluorescent light. A central table holds display cases — art, jewelry, stacks of bearer bonds in sealed containers.

This is tens of millions of dollars in one room. Maybe hundreds of millions.

And there — deposit box 1471. The data drive Viktor's client wants. The forty-million-dollar prize.

But you also see something you did not expect: a second vault door at the back of the room, partially open, with a faint blue glow coming from behind it.

Something is in there. Something that was not on any blueprint.`,scene:'dark',mood:'#d4a017',choices:[{text:'Grab the data drive from box 1471. Stay focused.',next:'h_grab_drive'},{text:'Check the second vault door. What is back there?',next:'h_second_vault',check:{stat:'per',dc:10}},{text:'Grab everything you can carry. Fill the bags.',next:'h_grab_everything'}]};

HEIST_NODES.h_grab_drive = {text:`You find box 1471 and open it. Inside: a small titanium case containing a single data drive. Whatever is on it is worth forty million dollars to someone.

You pocket the drive. Job done. The primary objective is secure.

But then you hear it — footsteps. Heavy boots on the corridor outside. Multiple sets.

Someone knows you are here.`,scene:'dark',mood:'#d63031',effects:{flags:{drive_secured:true}},choices:[{text:'Get the crew together. We need to move NOW.',next:'h_complication'},{text:'Hide. Wait for them to pass.',next:'h_vault_hide',check:{stat:'per',dc:11}}]};

HEIST_NODES.h_second_vault = {text:`You push the second door open. Behind it is a smaller room, temperature-controlled, with a single display case at the center bathed in blue light.

Inside the case: a diamond. Not just any diamond — the Ashford Blue, a 45-carat stone that disappeared from a museum twenty years ago and was assumed destroyed. It is worth more than everything else in the vault combined.

This was not part of the plan. But holding it in your hands, feeling the weight of something worth a quarter billion dollars...

Then you hear the boots. Heavy footsteps in the corridor outside. Multiple sets, moving fast.`,scene:'dark',mood:'#0984e3',effects:{flags:{found_diamond:true},inventory:['Ashford Blue Diamond']},choices:[{text:'Take the diamond AND the data drive. Grab both.',next:'h_grab_both'},{text:'Leave the diamond. Grab the drive from 1471 and run.',next:'h_grab_drive_run'}]};

HEIST_NODES.h_grab_everything = {text:`You and the crew move fast — stuffing duffel bags with bearer bonds, jewelry, anything that is portable and valuable. In three minutes you have loaded what you estimate is twenty million dollars in portable assets.

You also grab the data drive from box 1471. The primary objective.

But greed costs time. And time is something you just ran out of.

The vault level alarm blares. Red lights flood the corridor. Heavy boots pound toward you from both directions.`,scene:'dark',mood:'#d63031',effects:{flags:{drive_secured:true,extra_loot:true},inventory:['Bearer Bonds','Data Drive']},choices:[{text:'Fight your way out.',next:'h_complication'},{text:'Is there another exit from the vault?',next:'h_vault_escape_route',check:{stat:'per',dc:11}}]};

HEIST_NODES.h_grab_both = {text:`You pocket the diamond and sprint to box 1471. The data drive goes in your other pocket. Two scores in thirty seconds.

The boots are getting closer. The alarm has not triggered yet, but the security patrol has definitely noticed something wrong.

Your crew is at the vault entrance, signaling urgently. Time to go.`,scene:'dark',mood:'#d63031',effects:{flags:{drive_secured:true,has_diamond:true},inventory:['Data Drive','Ashford Blue Diamond']},choices:[{text:'Move out. Get to the exit.',next:'h_complication'}]};

HEIST_NODES.h_grab_drive_run = {text:`You leave the diamond. A quarter billion dollars sitting in a case, and you walk away from it. It hurts — but a heist is about discipline, not greed.

Box 1471. Data drive. Into your pocket. You are out of the second vault and moving toward the exit in under ten seconds.

The boots are in the corridor but you have a head start.`,scene:'dark',mood:'#d4a017',effects:{flags:{drive_secured:true,left_diamond:true},inventory:['Data Drive'],stats:{int:1}},choices:[{text:'Regroup with the crew and move.',next:'h_complication'}]};

HEIST_NODES.h_vault_hide = {text:`You press yourself behind a row of deposit boxes, controlling your breathing. The footsteps pass the vault entrance and continue down the corridor — a routine patrol, not a response team.

You wait sixty seconds after the last boot step fades. Then you grab the data drive from box 1471 and signal the crew.

"We have a window," you whisper. "Move now, move quiet."`,scene:'dark',mood:'#636e72',effects:{flags:{drive_secured:true,avoided_patrol:true},stats:{per:1},inventory:['Data Drive']},choices:[{text:'Exit the vault level.',next:'h_complication'}]};

HEIST_NODES.h_vault_escape_route = {text:`Your eyes scan the vault. There — behind the deposit boxes on the east wall — a ventilation grate. Large enough to crawl through.

You pull the grate off and the crew files in. The vent connects to the building's HVAC system, which runs all the way to the loading dock on the ground floor.

It is not elegant, but it bypasses the security teams now swarming the corridor.`,scene:'dark',mood:'#636e72',effects:{stats:{per:1},flags:{vent_escape:true}},choices:[{text:'Crawl to the loading dock.',next:'h_complication'}]};

// ---- CHAPTER 2: THE COMPLICATION ----

HEIST_NODES.h_complication = {text:`You are moving through the building when your earpiece crackles. Viktor's voice, tight with tension:

"We have a problem. A rival crew — the Kovac brothers — somehow learned about the job. They are in the building. They want the drive."

You hear gunshots — distant but unmistakable. The Kovac crew is not subtle.

"There is more," Viktor continues. "One of your crew has been in contact with them. You have a traitor."

The line goes dead.

You look at your crew. One of them will not meet your eyes.`,scene:'dark',mood:'#d63031',effects:{flags:{complication_active:true}},choices:[{text:'Confront the crew directly. "Who is working with Kovac?"',next:'h_confront_traitor',check:{stat:'cou',dc:10}},{text:'Say nothing. Watch their behavior. The traitor will reveal themselves.',next:'h_watch_traitor',check:{stat:'per',dc:11}},{text:'Ignore it for now. Getting out alive is the priority.',next:'h_ignore_traitor'}]};

HEIST_NODES.h_confront_traitor = {text:`"Nobody moves until I get an answer. Who is talking to Kovac?"

Silence. Your crew looks at each other — suspicion replacing trust in an instant.

Then one of them speaks up. "It was me." They step forward, jaw set but eyes guilty. "Kovac had leverage — something on me from an old job. He said if I fed him intel, he would make it disappear."

"And you believed him?"

"I did not have a choice. But I am telling you now because I do not want anyone to die over this."

Another gunshot echoes from somewhere above. The Kovac crew is getting closer.`,scene:'dark',mood:'#d63031',effects:{stats:{cou:1},flags:{traitor_revealed:true}},choices:[{text:`"You are out. When this is over, you walk away with nothing."`,next:'h_traitor_exiled'},{text:`"We deal with this later. Right now we work together or we die."`,next:'h_traitor_forgiven'},{text:`"Give me your share of the take. That is the price of betrayal."`,next:'h_traitor_penalty'}]};

HEIST_NODES.h_watch_traitor = {text:`You keep moving, but you watch. And you see it — a slight hesitation at the corridor junction. A glance at a phone, quickly hidden. A suggestion to go right when the exit is clearly left.

You know who it is. And now you know something they do not — you are ahead of them.

When you reach the next stairwell, you stop. "Give me the phone."

The traitor's face goes white. They hand it over. The last text: coordinates of your position, sent to an unknown number two minutes ago.

"Kovac's people know exactly where we are," you say calmly. "Thanks to you."`,scene:'dark',mood:'#d63031',effects:{stats:{per:2},flags:{traitor_caught:true}},choices:[{text:`"You just cost yourself ten million dollars. Keep moving."`,next:'h_traitor_penalty'},{text:`"One more move and I leave you for Kovac. Understood?"`,next:'h_traitor_threatened'}]};

HEIST_NODES.h_ignore_traitor = {text:`You push the betrayal aside. The building is compromised, a rival crew is shooting their way through security, and you are twelve stories underground with the most valuable data drive in the city.

Priorities. Get out first. Deal with the traitor later — if there is a later.

"Move. Double time. We are taking the emergency stairs."

Your crew falls in behind you. Whoever the traitor is, they are keeping pace. For now, survival trumps justice.`,scene:'dark',mood:'#d63031',effects:{flags:{traitor_ignored:true}},choices:[{text:'Head for the emergency exit.',next:'h_escape_begin'}]};

HEIST_NODES.h_traitor_exiled = {text:`The traitor nods. No argument. They know the rules.

"When we get out, you disappear. New city, new name. And if I ever see you again..." You leave the threat unfinished. It does not need finishing.

Your crew is smaller now, but cleaner. No more leaks.

"Let us get out of here."`,scene:'dark',mood:'#636e72',effects:{flags:{crew_smaller:true}},choices:[{text:'Move to the exit.',next:'h_escape_begin'}]};

HEIST_NODES.h_traitor_forgiven = {text:`The traitor blinks. They expected rage, maybe violence. Not pragmatism.

"Together," they repeat. "I owe you."

"Yes. You do. But owing me is better than being dead. Now move."

The crew moves as one — fractured trust, but functional. You can sort out the damage after you survive.`,scene:'dark',mood:'#636e72',effects:{flags:{traitor_forgiven:true}},choices:[{text:'Head for the exit.',next:'h_escape_begin'}]};

HEIST_NODES.h_traitor_penalty = {text:`"Your share goes into the crew pot. Everyone else splits it. That is the cost of betrayal — not your life, your money."

The traitor swallows hard but nods. They know they are getting off easy.

"Now — are you going to help us get out alive, or do I need to worry about you too?"

"I will get you out," they say quietly. "I owe you that much."

Fair enough. Time to move.`,scene:'dark',mood:'#636e72',effects:{flags:{traitor_penalized:true}},choices:[{text:'Move to the exit.',next:'h_escape_begin'}]};

HEIST_NODES.h_traitor_threatened = {text:`The traitor raises their hands slowly. "Understood. No more. I swear."

You pocket their phone and take the lead. Trust is gone, but compliance will do for now.

The sound of boots above gets louder. Kovac's crew is on this level now, guided by the coordinates the traitor sent.

You need to change routes. Fast.`,scene:'dark',mood:'#d63031',effects:{flags:{traitor_threatened:true}},choices:[{text:'Take an alternate route to the exit.',next:'h_escape_begin'}]};

// ---- CHAPTER 3: THE GETAWAY ----

HEIST_NODES.h_escape_begin = {text:`You burst through a fire exit onto a loading dock at the back of the Kessler Tower. Cold night air hits your face. The city sprawls around you — sirens already wailing in the distance.

Your getaway vehicle is parked in the alley. A second car — the backup — is one block north.

But as you scan the street, you see them: Kovac's crew, three of them, emerging from a side entrance fifty meters away. They see you at the same time.

Behind you, inside the building, more footsteps. Security teams, finally mobilized.

You are caught between two threats.`,scene:'dark',mood:'#d63031',choices:[{text:'Sprint for the getaway car. Outrun them.',next:'h_car_sprint',check:{stat:'cou',dc:10}},{text:'Split the crew — half to each car. Divide their attention.',next:'h_car_split'},{text:'Stand your ground. Let them come.',next:'h_standoff',check:{stat:'cou',dc:12}}]};

HEIST_NODES.h_car_sprint = {text:`You run. The crew runs. Kovac's people run.

Fifty meters to the car. Your legs burn. Behind you, shouts in Serbian and the crack of a warning shot that sparks off the pavement three feet to your left.

You reach the car, wrench open the door, and the crew piles in. Wheels is already behind the wheel — engine running, because of course she planned for this.

"Go go go!"

Tires scream. The car launches forward as Kovac's crew reaches the alley. One of them slams a fist on the trunk as you pull away, but it is too late. You are gone.`,scene:'dark',mood:'#e17055',effects:{stats:{cou:1}},choices:[{text:'The chase begins.',next:'h_car_chase'}]};

HEIST_NODES.h_car_split = {text:`"Split up! Nova, Brick — take the backup car north. Everyone else, primary vehicle. We rendezvous at the warehouse."

The crew splits. Kovac's people hesitate — which car do they follow? That hesitation costs them three seconds. Three seconds is everything.

Both cars are moving before Kovac makes his choice. He sends two after the primary, one after the backup.

You are in the primary. Wheels punches the accelerator.`,scene:'dark',mood:'#e17055',effects:{flags:{crew_split:true}},choices:[{text:'Drive. Fast.',next:'h_car_chase'}]};

HEIST_NODES.h_standoff = {text:`You stop running. You turn and face them.

Kovac's crew pulls up short, surprised. Nobody runs toward three armed people — but nobody stands their ground either.

"The drive," the lead one says. Thick accent, cold eyes. "Give it to us and you walk away. Simple."

Behind you, your crew forms up. Whatever their differences, they close ranks.

"Not happening," you say.

A tense silence. Then a siren — police, getting closer. Nobody wants to be here when they arrive.

The Kovac crew exchanges a look. They back away, slowly, toward their own vehicle. "This is not over," the lead one says.

You have maybe sixty seconds before the police arrive. Time to move.`,scene:'dark',mood:'#d63031',effects:{stats:{cou:2}},choices:[{text:'Get to the car. Now.',next:'h_car_chase'}]};

HEIST_NODES.h_car_chase = {text:`Wheels drives like a woman possessed. The matte-black Charger rockets through downtown Ashford, weaving between late-night traffic, running red lights, taking corners at speeds that should be physically impossible.

Behind you: sirens. Red and blue lights reflecting off every surface. Two police cruisers, falling behind but calling for backup.

Further back: a dark SUV. Kovac's crew, still in pursuit.

"I need a direction!" Wheels shouts over the engine roar.

Three options. The highway — fastest but most exposed. The industrial district — fewer cameras, more hiding spots. The bridge — if you cross the river, you are in a different jurisdiction.`,scene:'dark',mood:'#e17055',choices:[{text:'"Highway! Outrun them!"',next:'h_chase_highway',check:{stat:'cou',dc:10}},{text:'"Industrial district! We lose them in the maze."',next:'h_chase_industrial',check:{stat:'per',dc:10}},{text:'"The bridge! Cross the river!"',next:'h_chase_bridge'}]};

HEIST_NODES.h_chase_highway = {text:`Wheels merges onto the I-94 at 120 miles per hour. The Charger's modified engine screams as she pushes it past 140. The police cruisers fall behind — their standard-issue engines cannot keep up.

The Kovac SUV stays with you longer, but at 150 mph even they start to drop back. The highway is empty this time of night — just you, the road, and the speedometer climbing.

"We are clear," Wheels says, checking the mirrors. She eases off the gas and takes the next exit, doubling back on side streets toward the rendezvous point.

The sirens fade. The SUV is gone.

You made it.`,scene:'dark',mood:'#d4a017',effects:{stats:{cou:1},flags:{escaped_clean:true}},choices:[{text:'Head to the rendezvous.',next:'h_rendezvous'}]};

HEIST_NODES.h_chase_industrial = {text:`Wheels kills the headlights and plunges into the industrial district. Warehouses, shipping containers, dead-end alleys — a maze of steel and darkness.

She takes turns that are not on any map — cutting through parking lots, doubling back, using the container yards like a labyrinth. The police lose sight of you within two minutes. The Kovac SUV lasts another three before taking a wrong turn into a dead end.

Wheels parks behind a shipping container and kills the engine. In the darkness, you hear the distant sirens pass by and fade.

"Told you I would handle the driving," Wheels says.`,scene:'dark',mood:'#636e72',effects:{stats:{per:1},flags:{escaped_clean:true}},choices:[{text:'Wait for the all-clear, then move to the rendezvous.',next:'h_rendezvous'}]};

HEIST_NODES.h_chase_bridge = {text:`The Ashford Bridge stretches across the river — four lanes, half a mile long, and right now completely empty. Wheels floors it. The Charger hits the bridge at 130 mph, the engine note echoing off the suspension cables.

Halfway across, a police roadblock materializes at the far end. Two cruisers, nose to nose, lights flashing.

Wheels does not slow down.

"Hold on to something," she says with terrifying calm.

At the last possible second, she swerves onto the pedestrian walkway — barely wide enough — and threads the gap between the roadblock and the bridge railing at 80 mph. Sparks fly as the mirror clips a cruiser.

Then you are across. New jurisdiction. The police behind you cannot follow without coordinating with the other side — and that takes time you do not intend to give them.`,scene:'dark',mood:'#e17055',effects:{stats:{cou:1},flags:{crossed_bridge:true}},choices:[{text:'Find the rendezvous point.',next:'h_rendezvous'}]};

// ---- CHAPTER 3: THE RENDEZVOUS AND ENDINGS ----

HEIST_NODES.h_rendezvous = {text:`The rendezvous is a warehouse on the waterfront — the same one where you planned the job. It feels like a lifetime ago.

The crew assembles. Everyone is here. Everyone is alive. The data drive is in your pocket, and depending on your choices, maybe a diamond worth a quarter billion dollars too.

Viktor's voice comes through the encrypted line one last time. "The client is sending a courier for the drive. Your payment will be wired within six hours."

He pauses. "What you do with the crew and the split is your business. Viktor Sorel does not meddle in partnership dynamics."

The line goes dead.

You look at your crew — these people who followed you into the most secure vault in history and came out the other side. The money is coming. How you handle the next five minutes defines who you really are.`,scene:'dark',mood:'#d4a017',choices:[{text:'Split everything equally. Fair is fair.',next:'h_ending_fair_split'},{text:'Take a larger share. You led this. You earned it.',next:'h_ending_larger_share'},{text:'Take it all. Disappear tonight.',next:'h_ending_betray',check:{stat:'cha',dc:13}},{text:'Give your share to the crew. You did this for the thrill.',next:'h_ending_generous'}]};

HEIST_NODES.h_ending_fair_split = {text:`You lay it out simply. "Equal split. Everyone risked their lives. Everyone gets the same cut."

No arguments. No drama. The crew nods — this is what they expected, what they hoped for. Honor among thieves, the real kind.

The courier takes the drive. Six hours later, the money hits. Ten million each, clean, untraceable.

Santos buys a house in Argentina. Wheels opens a custom car shop in Tokyo. Brick buys the boxing gym and turns it into a community center. Nova vanishes into the digital ether — but sends you an encrypted postcard from somewhere warm.

And you? You walk away clean. No record, no trail, no enemies. The Perfect Heist.

Months later, you read about the Meridian Vault in the news. They never figured out how you did it. They call it "the crime of the century."

You smile, fold the newspaper, and order another coffee.

---

BEST ENDING: THE PERFECT HEIST

Forty million dollars. Zero casualties. A crew that would follow you into hell.

Not bad for seventy-two hours of work.`,scene:'dark',mood:'#d4a017',effects:{flags:{ending_perfect:true,chapter1_complete:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

HEIST_NODES.h_ending_larger_share = {text:`"I planned this. I recruited all of you. I got us in and out alive. I am taking thirty percent. The rest of you split what is left."

Silence. Some of your crew looks angry. Some look like they expected this. One looks hurt.

"That was not the deal," someone says quietly.

"The deal changed when I saved all of your lives. Thirty percent or I walk with the drive and make my own arrangement with the client."

They take the deal. They do not have a choice.

The money comes through. Twelve million for you, roughly seven million each for the rest. Still a fortune — but the resentment is palpable.

You go your separate ways. Nobody says goodbye. Nobody will work with you again.

Six months later, you are rich, comfortable, and completely alone. The money bought everything except what mattered.

---

ENDING: THE LION'S SHARE

You got what you asked for. Was it worth what you lost?`,scene:'dark',mood:'#636e72',effects:{flags:{ending_lions_share:true,chapter1_complete:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

HEIST_NODES.h_ending_betray = {text:`You wait until the crew is celebrating. Then you take the drive, the diamond if you have it, and the encryption key for the payment account. You slip out the back of the warehouse and into a car you stashed earlier.

By dawn, you are on a plane. By noon, you are in a country with no extradition treaty. The full forty million hits your account — the client only cares about the drive, not who delivers it.

For three months, it is paradise. Private beaches, five-star hotels, a new identity that fits like a tailored suit.

Then the postcards start arriving. No return address. Just a single line, in different handwriting each time:

"We are coming."

You change hotels. The next postcard is on your new pillow.

You cannot outrun a crew with nothing left to lose and everything to prove.

---

BAD ENDING: THE DOUBLE CROSS

Betrayal buys you a head start. But it never buys you peace.`,scene:'dark',mood:'#d63031',effects:{flags:{ending_betrayal:true,chapter1_complete:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

HEIST_NODES.h_ending_generous = {text:`"Keep my share. Split it between you."

The crew stares at you like you just spoke a different language.

"I did not do this for the money," you say. And it is true — you realize it now, standing in this warehouse, adrenaline still buzzing in your veins. The planning, the recruiting, the execution — the heist itself was the prize.

Santos tries to argue. Brick tries to give it back. Wheels just shakes her head and laughs.

You walk out of the warehouse with nothing but the clothes on your back and the greatest story never told. No money. No loot. Just the knowledge that you beat the unbeatable vault.

The crew talks about you for years. You become a legend — the thief who cracked Meridian and walked away with nothing. People do not believe the story. That makes it better.

---

LEGENDARY ENDING: THE GHOST

Some people steal for money. Some steal for power.

You? You stole for the art of it. And that made you immortal.`,scene:'dark',mood:'#0984e3',effects:{flags:{ending_legend:true,chapter1_complete:true}},choices:[{text:'PLAY AGAIN — Return to Menu',next:'_menu'}]};

// ============================================================
// SCENARIO DATA — JJK: ALTERED FATES
// ============================================================
window.SCEN_NODES['heist'] = HEIST_NODES;
})();
