// Scenario data: shadowprotocol  (SP_NODES)
// Split out of scenario-generator.html on 2026-08-01.
// Edit THIS file to change this scenario — the main file no longer holds node data.
window.SCEN_NODES = window.SCEN_NODES || {};
(function(){
const SP_NODES = {

// ── ARC 1: OPENING — PRAGUE ──────────────────────────────────

sp_start:{
text:`Prague at 2 AM smells like rain and diesel and old stone.

You are crouched in a doorway on Nerudova Street, earpiece cold against your skull, waiting for Viper's voice. He was supposed to check in eleven minutes ago. Field ops run on three-minute windows. Eleven minutes is not a delay. Eleven minutes is silence.

Your mission: deliver a dead-drop package to a courier at the Charles Bridge. Simple. Vetted. You have run jobs like this thirty times. But Viper has never gone dark mid-op.

You check your watch. The courier window closes in twenty minutes. Beyond the bridge, the old city glitters in the wet dark, indifferent to all of it.

Your hand moves toward the secure phone in your jacket. What do you do?`,
scene:'prague_street',mood:'#2d3436',characters:[],
choices:[
{text:'Try the emergency frequency — reach out to Director Olympus.',next:'sp_contact_olympus',effects:{stats:{int:1},relationships:{director:1}}},
{text:'Continue the mission. Complete the dead drop alone.',next:'sp_solo_drop',effects:{stats:{cha:1}}},
{text:'Go to ground. Find Whisper — the local contact.',next:'sp_find_whisper',effects:{stats:{per:1},relationships:{contact:1}}}
]
},

sp_contact_olympus:{
text:`The encryption handshake takes four seconds. Four seconds that feel like four minutes.

"Zero." The voice on the other end is calm in the particular way that people are calm when they have already decided something. Director Olympus. "We are aware. Continue the mission. Viper's status is under review."

Under review. The phrase lands like gravel. In agency language it means: we know, we are not telling you, proceed as ordered.

"Sir — if Viper has been compromised, the dead drop location may be blown."

A pause. Then: "Continue the mission, Zero. That is a direct order. Olympus out."

The line goes dead. The rain intensifies.`,
scene:'prague_street',mood:'#2d3436',characters:['director'],
effects:{relationships:{director:-1},flags:{olympus_called:true}},
choices:[
{text:'Comply. Trust the director. Complete the dead drop.',next:'sp_solo_drop',effects:{stats:{cha:1},relationships:{director:1}}},
{text:'Disobey. Find Whisper before moving.',next:'sp_find_whisper',effects:{stats:{per:1},relationships:{director:-1}}},
{text:'Abort the drop. Surveil the bridge from a distance first.',next:'sp_surveil_bridge',effects:{stats:{per:1,int:1}}}
]
},

sp_solo_drop:{
text:`You move. Hood up, hands in pockets, one of ten thousand people in the city who have somewhere to be.

The Charles Bridge is quiet at this hour — a few tourists, a pair of lovers, a man selling roasted chestnuts from a cart. You walk its length once, slow, reading the scene the way Viper taught you. Posture. Sight lines. Who looks at what.

The courier is there. Third lamppost from the south tower, right side. Gray coat, newspaper folded under one arm. The signal is correct.

You approach. The exchange takes four seconds — a brush pass, old school, package moving from your pocket to his hand. But as he turns away, he presses something back into your palm. Cold metal. A key. Room number scratched into the bow: 412.

He is already gone. And somewhere behind you, you feel the pressure of eyes.`,
scene:'charles_bridge',mood:'#636e72',characters:[],
effects:{flags:{drop_completed:true,key_412:true}},
choices:[
{text:'Follow the courier at a distance.',next:'sp_follow_courier',effects:{stats:{per:1,per:1}}},
{text:'Head to hotel room 412 immediately.',next:'sp_hotel_412',effects:{stats:{cha:1}}},
{text:'Stop and scan for surveillance.',next:'sp_detect_tail',effects:{stats:{per:2}},check:{stat:'per',dc:9},failNext:'sp_tail_missed'}
]
},

sp_surveil_bridge:{
text:`You climb to a terrace café above the river, order nothing, and watch the bridge through the rain.

Twelve minutes. You catalog everything. The chestnut vendor who repositions his cart twice without selling anything. The couple who stopped moving but keep checking the south tower. A black sedan idling on Smetanovo Embankment with fogged windows.

The courier shows. Gray coat, newspaper. Correct signal. But three seconds after he arrives, the sedan's engine turns over.

This bridge is being watched. By someone other than you.`,
scene:'charles_bridge',mood:'#636e72',characters:[],
effects:{stats:{per:2},flags:{bridge_surveillance_spotted:true}},
choices:[
{text:'Abort the drop and call Olympus with the surveillance report.',next:'sp_abort_report',effects:{stats:{int:1},relationships:{director:1}}},
{text:'Approach anyway — complete the mission despite the risk.',next:'sp_drop_under_surveillance',effects:{stats:{cha:2}},check:{stat:'per',dc:11},failNext:'sp_blown_at_bridge'},
{text:'Wait. See who is running the surveillance.',next:'sp_watch_watchers',effects:{stats:{per:1,int:1}}}
]
},

sp_find_whisper:{
text:`Whisper operates out of a tobacco shop on Mánesova Street — or rather, the back room of one. The shop front is closed at this hour, but the light above the side door burns amber. That means she is in.

You knock three times, pause, twice more. The lock turns.

Karolína — codename Whisper — has the eyes of someone who has been disappointed by professionals many times. She was CIA-adjacent once, freelance now. She knows Prague the way rats know sewers.

"Viper?" she says, before you speak.

"Dark," you say.

She looks at you for a long moment. Then she steps aside and lets you in.`,
scene:'safehouse',mood:'#4a4a6a',characters:['contact'],
effects:{relationships:{contact:2},flags:{found_whisper:true}},
choices:[
{text:'Ask her what she knows about Viper\'s last known location.',next:'sp_whisper_intel',effects:{stats:{int:1},relationships:{contact:1}}},
{text:'Ask her if she has heard anything unusual tonight.',next:'sp_whisper_street',effects:{stats:{per:1},relationships:{contact:1}}},
{text:'Ask her plainly whether she can be trusted.',next:'sp_test_whisper',effects:{stats:{int:1}},check:{stat:'per',dc:10},failNext:'sp_whisper_offended'}
]
},

sp_detect_tail:{
text:`You pause at a lamppost, ostensibly checking your phone. Your eyes sweep without moving — windows, doorways, reflections in the wet cobblestones.

There: a man in a dark jacket, thirty meters back. He stopped when you stopped. His hands are in his pockets. He is good, but not quite good enough — he has the stillness of a trained watcher, which is itself a tell against the background of a city in motion.

You have been followed from the bridge. Which means someone was already watching the drop site.

You keep your face neutral and keep walking. The tail keeps following.`,
scene:'prague_street',mood:'#e17055',characters:[],
effects:{stats:{per:2},flags:{tail_spotted:true}},
choices:[
{text:'Lead them somewhere controlled and confront them.',next:'sp_confront_tail',effects:{stats:{cha:1,per:1}}},
{text:'Lose them in the Old Town maze.',next:'sp_lose_tail',effects:{stats:{per:2}},check:{stat:'per',dc:11},failNext:'sp_tail_closes'},
{text:'Let them follow you — lead them all the way to hotel 412.',next:'sp_lead_to_412',effects:{stats:{int:1}}}
]
},

sp_tail_missed:{
text:`The hairs on your neck prickle, but you see nothing definitive. Rain. Cobblestones. Tourists. Normal.

You pocket the key and move north, toward the hotel district. The feeling of being watched doesn't leave you — but you have nothing to confirm it.

Back in the shelter of a doorway you study the key. Room 412. No hotel name. But the key fob has a small art deco clover embossed on it. Hotel Clover, Wenceslas Square. A mid-range place known for discretion.

Whoever Viper was meeting left you breadcrumbs.`,
scene:'prague_street',mood:'#636e72',characters:[],
effects:{flags:{key_412:true}},
choices:[
{text:'Go to Hotel Clover.',next:'sp_hotel_412',effects:{stats:{cha:1}}},
{text:'Call Whisper before moving.',next:'sp_find_whisper',effects:{stats:{per:1},relationships:{contact:1}}}
]
},

// ── ARC 2: THE HOTEL & FIRST LEADS ──────────────────────────

sp_hotel_412:{
text:`Hotel Clover smells of cigarette smoke and old carpet. The night clerk barely looks up as you cross the lobby.

Room 412 is at the end of a narrow corridor. The door shows no signs of forced entry. The key turns smoothly.

Inside: a standard room, bed made, curtains drawn. But the bathroom light is on, and on the desk someone has left a burner phone, a folded map of Vienna with a circle drawn near the Naschmarkt, and a handwritten note in Viper's handwriting.

Three words: THEY TURNED ME.

The burner phone buzzes. An incoming message. Anonymous number. Just two words: LEAVE NOW.`,
scene:'hotel_room',mood:'#4a0f0f',characters:[],
effects:{flags:{viper_note:true,vienna_circle:true}},
choices:[
{text:'Grab everything and go immediately.',next:'sp_flee_hotel',effects:{stats:{cha:1,per:1}}},
{text:'Check if the room is wired before touching anything.',next:'sp_sweep_room',effects:{stats:{int:2}},check:{stat:'int',dc:10},failNext:'sp_room_trap'},
{text:'Call the anonymous number back.',next:'sp_call_anonymous',effects:{stats:{per:1,int:1}}}
]
},

sp_sweep_room:{
text:`You do not touch the desk. You scan first — power outlets, picture frames, smoke detector, lamp base. There: a magnetic strip glued beneath the desk drawer, thin as a credit card. A location beacon. Live.

Someone sent you to this room expecting to track wherever you went next.

You peel the beacon free and drop it in the toilet tank. Then you pick up the burner phone — different build, clean, no GPS chip — and pocket the map and note. The beacon pulses uselessly in the water.

You are three steps ahead. Keep moving.`,
scene:'hotel_room',mood:'#4a0f0f',characters:[],
effects:{stats:{int:2},flags:{beacon_neutralized:true,viper_note:true,vienna_circle:true}},
choices:[
{text:'Call the anonymous number on the burner.',next:'sp_call_anonymous',effects:{stats:{per:1}}},
{text:'Go to Vienna. Follow Viper\'s map.',next:'sp_travel_vienna',effects:{stats:{cha:1}}},
{text:'Contact Whisper — you need local backup first.',next:'sp_find_whisper',effects:{relationships:{contact:1}}}
]
},

sp_room_trap:{
text:`You reach for the burner phone — and the desk drawer detonates.

Not a bomb. A dye pack. Compressed gas and crimson powder explode outward, coating your hands and forearms in vivid red. A chemical marker — the kind used to tag thieves. The kind that shows under ultraviolet.

You are marked. Anyone with a UV light now owns you.

The burner phone is buried in powder. You wipe your hands as best you can — it doesn't come off. You grab the map and note through your jacket, pocket both, and move.

Someone knew you were coming and prepared a greeting.`,
scene:'hotel_room',mood:'#e17055',characters:[],
effects:{stats:{per:-1},flags:{dye_marked:true,viper_note:true,vienna_circle:true}},
choices:[
{text:'Find Whisper. You need new clothes and a clean exit.',next:'sp_find_whisper',effects:{relationships:{contact:1}}},
{text:'Get out of Prague tonight. Go to Vienna.',next:'sp_travel_vienna',effects:{stats:{cha:1}}}
]
},

sp_flee_hotel:{
text:`You are out of the room in four seconds, down the stairwell, through the service exit. The alley behind Hotel Clover is dark and narrow and smells of bins.

You move three blocks at speed before slowing to a walk. Behind you, nothing. A garbage truck. A cat.

Under a streetlamp you examine what you took. Burner phone — prepaid, clean. The Vienna map — circle near Naschmarkt, a street name written in pencil: Kettenbrückengasse. The note.

THEY TURNED ME.

Viper. Your handler of six years. Either he is telling you he was turned — or someone who wants you to believe that is using his handwriting.

You need to find out which.`,
scene:'prague_street',mood:'#636e72',characters:[],
effects:{flags:{viper_note:true,vienna_circle:true}},
choices:[
{text:'Go to Vienna immediately.',next:'sp_travel_vienna',effects:{stats:{cha:1}}},
{text:'Call Whisper from the burner.',next:'sp_whisper_burner',effects:{relationships:{contact:1}}},
{text:'Try to reach Raven — your agency backup.',next:'sp_contact_raven',effects:{relationships:{ally:1}}}
]
},

sp_call_anonymous:{
text:`One ring. Two. Then: "You found the room." Not a question. The voice is filtered through distortion, but you catch stress patterns. Eastern European, possibly Czech. Calm under pressure.

"Who is this?" you say.

"Someone who wants Viper alive as much as you do. Maybe more." A pause. "The note is real. He left it himself, twelve hours ago. He is in Vienna. Kettenbrückengasse 7, third floor. He has less than forty-eight hours before Specter finds him."

"Why are you helping me?"

"Because Specter already burned my network. We have common enemies, Agent Zero." The line clicks. Dead.

You are left with the map, the note, and a name you already knew: Specter.`,
scene:'hotel_room',mood:'#4a4a6a',characters:[],
effects:{stats:{int:1},flags:{viper_location_known:true,vienna_circle:true,specter_mentioned:true}},
choices:[
{text:'Go to Vienna now.',next:'sp_travel_vienna',effects:{stats:{cha:1}}},
{text:'Verify through Whisper before moving.',next:'sp_whisper_burner',effects:{relationships:{contact:1},stats:{int:1}}}
]
},

// ── WHISPER SUBPLOT ─────────────────────────────────────────

sp_whisper_intel:{
text:`Whisper pours two glasses of slivovitz without asking. She sets them on a table covered in city maps and surveillance photographs and tells you what she knows.

"Viper was running a sub-operation I was not supposed to know about. I know anyway." She taps a photo — a building near the Vltava waterfront. "He met someone here three nights ago. I do not know who. Two hours later, a safe house two streets away was cleaned out. Not searched — sanitized. Professional."

She looks at you with those watchful eyes. "Someone inside your agency gave up that safe house. Viper knew. He was trying to get the evidence out."

She slides a memory stick across the table. "He left that with me two days ago. Said if he went dark, give it to Zero."`,
scene:'safehouse',mood:'#4a4a6a',characters:['contact'],
effects:{stats:{int:2},flags:{whisper_memory_stick:true},relationships:{contact:2}},
choices:[
{text:'Take the stick. Ask what is on it.',next:'sp_memory_stick',effects:{stats:{int:1}}},
{text:'Ask Whisper to come with you to Vienna.',next:'sp_whisper_comes',effects:{relationships:{contact:1}},check:{stat:'cha',dc:10},failNext:'sp_whisper_refuses'},
{text:'Take the stick and move immediately.',next:'sp_travel_vienna',effects:{stats:{cha:1}}}
]
},

sp_whisper_street:{
text:`"Tonight?" Whisper lights a cigarette and considers. "There was movement near Žižkov. A courier route — the kind that does not go through normal channels. Someone was running black traffic."

"Who?"

"I heard the word Specter." She says it the way people say the name of a weather system they have seen flatten a village. "He has been in Prague for seventy-two hours. That is unusual. He is normally a transit man — he does not stop somewhere unless he has a specific target."

The room feels smaller.

"Is Viper the target?" you ask.

"I think," Whisper says carefully, "that Viper is the reason Specter is here."`,
scene:'safehouse',mood:'#4a4a6a',characters:['contact'],
effects:{stats:{per:1},flags:{specter_in_prague:true},relationships:{contact:1}},
choices:[
{text:'Ask Whisper about Specter\'s known methods.',next:'sp_specter_profile',effects:{stats:{int:1},relationships:{contact:1}}},
{text:'Ask if she knows where Viper is.',next:'sp_whisper_intel',effects:{relationships:{contact:1}}},
{text:'Tell her about the Vienna lead and ask for backup.',next:'sp_whisper_comes',effects:{relationships:{contact:1}},check:{stat:'cha',dc:10},failNext:'sp_whisper_refuses'}
]
},

sp_test_whisper:{
text:`"Before we go further," you say, "I need to know where you stand. Viper trusted you. That is either a good sign or the worst possible sign."

Whisper does not flinch. She takes a long drag on her cigarette and looks at the ceiling.

"Your handler gave me something to hold," she says at last. "Two days ago. He told me if he went dark, give it to Zero and tell them: the rot starts at the top." She meets your eyes. "I have worked with Viper for four years. I have never been burned. Whether that is loyalty or self-interest, you can decide."

She reaches under the table and sets a memory stick in front of you.

You believe her. Conditionally.`,
scene:'safehouse',mood:'#4a4a6a',characters:['contact'],
effects:{stats:{per:2},flags:{whisper_memory_stick:true,whisper_verified:true},relationships:{contact:3}},
choices:[
{text:'Thank her and review the memory stick together.',next:'sp_memory_stick',effects:{relationships:{contact:1}}},
{text:'Take it and go. Vienna is waiting.',next:'sp_travel_vienna',effects:{stats:{cha:1}}}
]
},

sp_whisper_offended:{
text:`Whisper's expression shifts. Not anger — something colder.

"You walk into my house at two in the morning because your handler burned, and you ask me if I can be trusted?" She stubs out the cigarette. "Get out."

You try to walk it back, but the damage is done. She is professional enough not to shoot you, but the door is open, and she is waiting.

You leave with nothing. The memory stick — whatever was on it — stays with her.`,
scene:'safehouse',mood:'#e17055',characters:['contact'],
effects:{relationships:{contact:-3},flags:{whisper_burned:true}},
choices:[
{text:'Go to the hotel alone.',next:'sp_hotel_412',effects:{stats:{cha:1}}},
{text:'Try to call Raven for backup.',next:'sp_contact_raven',effects:{relationships:{ally:1}}}
]
},

sp_whisper_burner:{
text:`She picks up on the second ring. No greeting — she already knows it is you.

"I was expecting this call," Whisper says. "Vienna. He mentioned it."

"Kettenbrückengasse 7?"

"Third floor." A pause. "Zero — be careful with what you find there. Viper was running something you were not read into. If Specter is moving and Olympus gave you a go-order anyway, one of two things is true." Another pause. "Either Olympus does not know what Viper knows. Or Olympus is the reason Viper went dark."

She hangs up. The night is very quiet.`,
scene:'prague_street',mood:'#4a0f0f',characters:['contact'],
effects:{stats:{int:1},flags:{olympus_suspect:true},relationships:{contact:2}},
choices:[
{text:'Go to Vienna.',next:'sp_travel_vienna',effects:{stats:{cha:1}}},
{text:'Contact Raven first.',next:'sp_contact_raven',effects:{relationships:{ally:1}}}
]
},

sp_whisper_comes:{
text:`Whisper is quiet for a long moment. You can see her running the math — risk, exposure, loyalty, money.

"Vienna," she finally says. "I have not been to Vienna in two years. A long time in this business." She stands up and begins pulling on a coat. "I want double rate and a clean exit if things go wrong."

"Done."

She looks at you with something that might be approval. "I will drive. My car is clean. We leave in five minutes."

Having Whisper at your side in Vienna feels like carrying a knife you are not sure points which direction. But right now, any blade is welcome.`,
scene:'safehouse',mood:'#4a4a6a',characters:['contact'],
effects:{stats:{cha:1},flags:{whisper_with_you:true},relationships:{contact:2}},
choices:[
{text:'Get in the car. Vienna.',next:'sp_travel_vienna',effects:{stats:{cha:1}}}
]
},

sp_whisper_refuses:{
text:`"Vienna." She shakes her head. "No. I run intel. I do not run ops." She pushes the memory stick toward you. "Take this. It is everything I know. But I am not crossing that border with you. Specter has people at the checkpoints."

You cannot argue with her logic.

"One more thing," she says, as you pocket the stick. "The man Viper met three nights ago — I got a partial. Older, silver-haired, agency build. Someone called him by a code name." She hesitates. "Olympus."`,
scene:'safehouse',mood:'#4a4a6a',characters:['contact'],
effects:{flags:{olympus_suspect:true,whisper_memory_stick:true},relationships:{contact:1}},
choices:[
{text:'Go to Vienna alone.',next:'sp_travel_vienna',effects:{stats:{cha:1}}},
{text:'Call Raven.',next:'sp_contact_raven',effects:{relationships:{ally:1}}}
]
},

sp_memory_stick:{
text:`The stick contains three encrypted files. You break the first layer — Viper was careful, but he designed it to be cracked by someone with your training.

File one: a wire transfer ledger. Agency black funds routed through a Vienna shell company — thirty-two million over eighteen months. The authorization signature on each transfer is digitally watermarked with a senior-level code. You know that code. You have seen it on your own mission orders.

Olympus.

File two: a list of burned assets. Fourteen names. People you ran operations alongside. Most you believed had been retired. Three you believed were dead.

They were not dead. They were delivered.

File three is a photograph. Olympus and Specter. Shaking hands. A timestamp: six weeks ago.`,
scene:'safehouse',mood:'#4a0f0f',characters:['contact'],
effects:{stats:{int:2},flags:{olympus_traitor:true,specter_connection:true},relationships:{contact:1,director:-3}},
choices:[
{text:'Go to Vienna and find Viper before Specter does.',next:'sp_travel_vienna',effects:{stats:{cha:1}}},
{text:'Contact Raven with this intelligence — you need a witness.',next:'sp_contact_raven',effects:{relationships:{ally:2}}}
]
},

sp_specter_profile:{
text:`Whisper refills both glasses before she speaks.

"Specter's real name is Dmitri Kasakov. Former FSB, went freelance eight years ago. He does not do ideology. Only money." She exhales smoke. "He is precise. He does not leave witnesses. He does not make scenes." She pauses. "He has killed four intelligence officers in the last three years. Every death ruled an accident."

She looks at you steadily. "He likes to let people think they have escaped. Then he is already at the destination waiting."

The word Vienna hangs in the air between you.`,
scene:'safehouse',mood:'#4a0f0f',characters:['contact'],
effects:{stats:{per:1},flags:{specter_kasakov:true},relationships:{contact:1}},
choices:[
{text:'Ask who hired Specter this time.',next:'sp_whisper_intel',effects:{relationships:{contact:1}}},
{text:'Vienna. You need to move now.',next:'sp_travel_vienna',effects:{stats:{cha:1}}}
]
},

// ── ARC 3: TRAVEL & RAVEN ───────────────────────────────────

sp_contact_raven:{
text:`Raven's channel is on a rotating cipher. You run the current key and transmit in burst.

The reply takes ninety seconds. That means she is awake and mobile.

"Zero." Her voice is controlled warmth over tension — the voice of someone who cares and has learned to show it in small doses. "I heard Prague went sideways. I am in Vienna. Secondary assignment that got complicated." A beat. "I found something here you need to see. Come to Vienna. Come careful."

She sends a meet coordinate: a café near the Naschmarkt. Tomorrow, 9 AM.

For the first time tonight, you feel slightly less alone.`,
scene:'comms',mood:'#2d6a4f',characters:['ally'],
effects:{stats:{per:1},flags:{raven_contact:true,raven_vienna:true},relationships:{ally:2}},
choices:[
{text:'Head to Vienna now.',next:'sp_travel_vienna',effects:{stats:{cha:1}}},
{text:'Ask Raven what she found before moving.',next:'sp_raven_hint',effects:{stats:{int:1},relationships:{ally:1}}}
]
},

sp_raven_hint:{
text:`"Not on this channel," Raven says. "But I will say this. Your handler did not go dark because he was captured." A pause weighted with something unsaid. "He went dark because he chose to. He found something and ran with it. Whether that makes him a traitor or a hero depends on who you ask."

"Who did you ask?"

"I asked the woman who just tried to kill me," Raven says. "She was Olympus's personal security detail. She seemed very motivated to stop me finding out what I found out."

A long silence.

"Come to Vienna, Zero. Nine o'clock. Café Sperl. I will be the one drinking coffee like I have not slept in two days."`,
scene:'comms',mood:'#4a0f0f',characters:['ally'],
effects:{stats:{int:1},flags:{raven_attacked:true,olympus_traitor:true},relationships:{ally:2}},
choices:[
{text:'Get to Vienna.',next:'sp_travel_vienna',effects:{stats:{cha:1}}}
]
},

sp_travel_vienna:{
text:`The drive takes four hours. You ditch one car at the Czech border, acquire a second, cross on a different passport. Old habits.

Vienna in the morning is gilded and cold. The Ringstrasse gleams under flat November light. Coffee-house smells, tram bells, the city performing its usual civilization while underneath, in the parts only you and people like you know about, the machinery of covert war continues its patient work.

You find a room at a pension near the Naschmarkt — cash, no name, the kind of place that asks neither. You study Viper's map. Kettenbrückengasse 7 is four blocks east.

You have arrived. Now comes the hard part.`,
scene:'vienna_street',mood:'#355070',characters:[],
effects:{flags:{in_vienna:true}},
choices:[
{text:'Go directly to Kettenbrückengasse 7 to find Viper.',next:'sp_vienna_viper',effects:{stats:{cha:1}}},
{text:'Meet Raven at Café Sperl first.',next:'sp_meet_raven',effects:{relationships:{ally:1}}},
{text:'Scout the area around Kettenbrückengasse before approaching.',next:'sp_scout_kettenbruckengasse',effects:{stats:{per:1,per:1}}}
]
},

// ── ARC 4: VIENNA — FINDING VIPER ───────────────────────────

sp_scout_kettenbruckengasse:{
text:`You walk the street twice at different hours. Kettenbrückengasse 7 is a residential building, five stories, turn-of-the-century facade. Intercom panel with no names. Third floor — two windows facing the street, both curtained.

On your second pass you spot the tell: a coffee cup left on the third-floor windowsill. A signal. Viper.

But you also spot the other tell. A man reading a newspaper on the bench across the street, same bench, same newspaper, an hour apart. Either a very dedicated reader or a spotter.

Specter is already here. Or someone who works for him.`,
scene:'vienna_street',mood:'#e17055',characters:[],
effects:{stats:{per:2},flags:{specter_spotter:true}},
choices:[
{text:'Go in anyway. Get to Viper.',next:'sp_vienna_viper',effects:{stats:{cha:1}}},
{text:'Neutralize the spotter first.',next:'sp_neutralize_spotter',effects:{stats:{per:1,cha:1}},check:{stat:'per',dc:12},failNext:'sp_spotter_alert'},
{text:'Get Raven. You need a distraction.',next:'sp_meet_raven',effects:{relationships:{ally:1}}}
]
},

sp_meet_raven:{
text:`Café Sperl is exactly what Vienna says it is: dark wood, marble tabletops, newspapers on wooden poles, the smell of Melange. Raven is in the corner booth. Dark circles, good posture, a cup she has been nursing for an hour.

She looks at you with relief she almost hides.

"You made it." Under the table, she pushes a flash drive toward you. "This was on the body of the woman who tried to kill me. Encrypted. But I cracked the header."

She leans in. "Olympus compiled a list of every active field agent who knows about Operation LODESTAR. We are both on it, Zero. So is Viper." She meets your eyes. "LODESTAR is real. Viper found out what it actually is, and now everyone who might know is being eliminated."

"What is LODESTAR?"

"A mole extraction program," she says quietly. "Except the mole they are protecting is Olympus himself."`,
scene:'cafe',mood:'#355070',characters:['ally'],
effects:{stats:{int:2},flags:{lodestar_known:true,olympus_traitor:true},relationships:{ally:3}},
choices:[
{text:'Go find Viper immediately — together.',next:'sp_vienna_viper_raven',effects:{relationships:{ally:1},stats:{cha:1}}},
{text:'Ask Raven what she thinks the right move is.',next:'sp_raven_plan',effects:{relationships:{ally:1},stats:{int:1}}},
{text:'You need to warn Olympus. Maybe he doesn\'t know about the list.',next:'sp_warn_olympus',effects:{relationships:{director:1,ally:-2}}}
]
},

sp_raven_plan:{
text:`Raven thinks in the way people think when they have already run the options three times and keep getting the same answer.

"If we go back to the agency with this, Olympus buries it," she says. "He has the access. He has the relationships." A pause. "But if we get Viper out with the full LODESTAR file — the ledgers, the kill list, the handshake photo — and we deliver it to someone outside the agency... then it cannot be buried."

"Who outside?"

"There is a journalist. An investigative editor at a European paper — she has the clearance contacts to verify it. And she cannot be threatened without making more noise than Olympus can contain." Raven slides a card across. "That is who we deliver this to. After we get Viper."

It is a good plan. It is also the kind of plan that gets people killed.`,
scene:'cafe',mood:'#355070',characters:['ally'],
effects:{stats:{int:1},flags:{journalist_plan:true},relationships:{ally:2}},
choices:[
{text:'Agree. Get Viper first.',next:'sp_vienna_viper_raven',effects:{stats:{cha:1}}},
{text:'Agree, but propose going to a friendly intelligence service instead.',next:'sp_foreign_intel_plan',effects:{stats:{int:1},relationships:{ally:1}}}
]
},

sp_warn_olympus:{
text:`You step outside the café and dial the encrypted line.

Olympus answers on the first ring. No greeting. "Zero. Where are you?"

Something in the question stops you. He already knows you are not in Prague. The line trace would be running before you spoke.

"Prague," you say. Testing.

A pause. "Of course. Any developments on Viper?"

He is lying. He knows you are in Vienna. He is seeing how much you know.

You hang up. When you look up, Raven is watching you from inside the café. Her expression is not quite I told you so. It is something sadder than that.`,
scene:'vienna_street',mood:'#4a0f0f',characters:['director'],
effects:{stats:{per:1},flags:{olympus_confirmed_traitor:true},relationships:{director:-3,ally:-1}},
choices:[
{text:'Go find Viper. Now.',next:'sp_vienna_viper_raven',effects:{stats:{cha:1}}},
{text:'Get out of Vienna entirely — this is too big.',next:'sp_abort_vienna',effects:{stats:{cha:-1}}}
]
},

sp_vienna_viper:{
text:`Third floor, end of the corridor. The door is not locked. That is either a welcome or a warning.

Viper is inside. He looks twenty years older than three months ago. He has not slept, or if he has, sleep has not done its job. He is sitting at a small desk with a loaded weapon in front of him, and when you push through the door, his hand goes to it before recognition crosses his face.

"Zero." He breathes the name like something he did not expect to say again.

"Handler." You look at him. "THEY TURNED ME. Your note."

"Yes." He closes his eyes briefly. "But not the way you think. I turned myself. I went to them. To give them Olympus." He opens his eyes. "I have been running a counter-operation for four months. Alone. Without agency sanction. And now Specter is in this city and I am out of time."`,
scene:'safehouse',mood:'#4a0f0f',characters:['handler'],
effects:{flags:{viper_found:true,viper_truth_known:true},relationships:{handler:3}},
choices:[
{text:'"I believe you. What do we do now?"',next:'sp_viper_plan',effects:{relationships:{handler:2},stats:{cha:1}}},
{text:'"I need to see the evidence before I trust you."',next:'sp_viper_evidence',effects:{stats:{int:1},relationships:{handler:1}}},
{text:'"I have orders to bring you in. Come with me."',next:'sp_arrest_viper',effects:{stats:{cha:1},relationships:{handler:-2}}}
]
},

sp_vienna_viper_raven:{
text:`You and Raven take the building together. She covers the stairs while you go to the door.

Viper opens before you knock. He has been watching the street. When he sees Raven behind you, some of the tension leaves his body.

"Both of you." He steps back. "I had hoped for this." His voice is hollow with exhaustion and something that might be relief. "Then you know about LODESTAR."

"Enough," Raven says.

"Then you know what we have to do." He opens his jacket. Inside, stitched into the lining, is a micro-drive. "Everything. Ledgers, communications, the kill list, recordings. Enough to bring Olympus down if it reaches the right hands." He looks at both of you. "And Specter is forty-eight hours behind me. We have maybe less."`,
scene:'safehouse',mood:'#4a0f0f',characters:['handler','ally'],
effects:{flags:{viper_found:true,viper_truth_known:true,evidence_secured:true},relationships:{handler:3,ally:2}},
choices:[
{text:'Trust the journalist plan. Get the drive out now.',next:'sp_journalist_extraction',effects:{stats:{cha:1},relationships:{handler:1,ally:1}}},
{text:'Get out of Vienna first. Then decide the route.',next:'sp_extraction_plan',effects:{stats:{per:1}}},
{text:'"Give me the drive. I carry it. You two get out separately."',next:'sp_solo_carry',effects:{stats:{cha:2},relationships:{handler:2,ally:2}}}
]
},

sp_neutralize_spotter:{
text:`You come at him from behind through the archway on the parallel street. A precise two-fingered press to the nerve cluster below the ear — not lethal, just decisive. He goes down quiet and you move him into the archway, phone and earpiece pocketed.

His earpiece crackles. Someone asking for a check-in.

You have maybe four minutes before the absence is noticed. You climb to the third floor fast.`,
scene:'vienna_street',mood:'#636e72',characters:[],
effects:{stats:{per:2},flags:{spotter_neutralized:true}},
choices:[
{text:'Get to Viper immediately.',next:'sp_vienna_viper',effects:{stats:{cha:1}}}
]
},

sp_spotter_alert:{
text:`You move before you are quite ready and the spotter catches it. He is up off the bench and into an earpiece transmission before you close the distance.

You take him down, but the message is sent. Somewhere in the building or nearby, someone now knows the site is compromised.

You have minutes. Maybe less.`,
scene:'vienna_street',mood:'#e17055',characters:[],
effects:{stats:{per:-1},flags:{site_compromised:true}},
choices:[
{text:'Get to Viper. Go now.',next:'sp_vienna_viper_hot',effects:{stats:{cha:2}}}
]
},

sp_vienna_viper_hot:{
text:`The corridor. Door. Viper spins with his weapon up and you get the word out before he fires.

"Zero!"

He lowers the gun. "How hot?"

"The spotter sent a transmission. Minutes."

Viper moves immediately — he was already packed. A bag by the door, micro-drive inside his jacket, a second weapon on the table. He presses the second weapon into your hand.

"Out the back," he says. "There is an exit through the cellar. I have had it marked since I arrived." He is moving already. "I will explain everything when we are clear."

You do not have time to ask the questions. You have to trust him. Or you have to not trust him.`,
scene:'safehouse',mood:'#4a0f0f',characters:['handler'],
effects:{flags:{viper_found:true,hot_extraction:true},relationships:{handler:1}},
choices:[
{text:'Trust him. Go through the cellar.',next:'sp_cellar_escape',effects:{stats:{cha:1,per:1},relationships:{handler:2}}},
{text:'Take his weapon but use your own exit route.',next:'sp_own_exit',effects:{stats:{cha:1}}}
]
},

// ── ARC 5: LATE GAME — SPECTER CLOSES IN ────────────────────

sp_viper_evidence:{
text:`Viper does not look insulted. He pulls the micro-drive from his jacket lining and sets up a small laptop. The files load.

You spend twelve minutes looking at enough evidence to end several careers and start several criminal prosecutions. Wire transfers. Intercepted communications. A recording of Olympus discussing delivery of three field assets to a foreign intelligence service — assets who then died within a week.

You close the laptop.

"You were running a legitimate counter-operation," you say.

"Unauthorized. But legitimate, yes." He meets your eyes. "I could not go through agency channels. Olympus is the agency."

Below, from the street, a car door closes. Then another.`,
scene:'safehouse',mood:'#4a0f0f',characters:['handler'],
effects:{stats:{int:1},flags:{viper_truth_known:true,evidence_secured:true},relationships:{handler:3}},
choices:[
{text:'Specter is here. Get out now.',next:'sp_cellar_escape',effects:{stats:{cha:2,per:1}}},
{text:'Call Raven. You need the numbers.',next:'sp_call_raven_help',effects:{relationships:{ally:2}}}
]
},

sp_viper_plan:{
text:`Viper spreads the map on the desk. His hands are steady — the particular steadiness of exhaustion so complete it loops back around to calm.

"I need to get the drive to someone outside the agency. Not law enforcement — they have too many agency contacts. Not foreign intel — too many entanglements. There is a journalist, an editor at a major European paper who has published verified intelligence before."

He marks a location on the map. "Her office is in Istanbul. One of the cities I was scheduled to transit through before this became what it became." A pause. "The irony is that to get the drive to her, I need you to help me get out of Vienna. And to get out of Vienna, we need to get through Specter."

Footsteps on the stairs. Both of you go quiet.`,
scene:'safehouse',mood:'#4a0f0f',characters:['handler'],
effects:{stats:{int:1},flags:{istanbul_plan:true},relationships:{handler:2}},
choices:[
{text:'Fight your way out.',next:'sp_fight_out',effects:{stats:{cha:2}},check:{stat:'str',dc:12},failNext:'sp_fight_bad'},
{text:'The cellar — Viper knows a way out.',next:'sp_cellar_escape',effects:{stats:{per:2}}},
{text:'Split up. Harder target.',next:'sp_split_up',effects:{stats:{per:1,cha:1}}}
]
},

sp_arrest_viper:{
text:`"You have orders," Viper says quietly. "I know. I wrote half the protocol." He does not move for his weapon. "Zero — those orders came from Olympus. Are you certain that is the authority you want to honor right now?"

You hesitate.

In that hesitation, Viper opens his jacket and shows you the drive. He does not offer it. He just shows it to you.

"Everything on this has one person's digital signature across every transaction," he says. "You know whose code word that is. You have seen it on your own mission orders."

Your orders. From Olympus.

The footsteps on the stairs begin.`,
scene:'safehouse',mood:'#4a0f0f',characters:['handler'],
effects:{flags:{viper_found:true},relationships:{handler:-1}},
choices:[
{text:'Release him. Help him get out.',next:'sp_cellar_escape',effects:{stats:{cha:1},relationships:{handler:2}}},
{text:'Take the drive and arrest him anyway.',next:'sp_ending_arrest_viper',effects:{stats:{cha:1},relationships:{handler:-3}}}
]
},

sp_cellar_escape:{
text:`The cellar is pre-industrial Vienna — brick vaulted ceiling, centuries of cold. Viper leads, you cover the rear. Behind you, the third floor door crashes open.

The route winds under two neighboring buildings before coming up in the kitchen of a closed restaurant on a parallel street. Viper has the proprietor paid off. They do not look up from their phone as you pass through.

Outside. The city again. Cold air, tram bells.

"I know a safe house," Viper says. "Twenty minutes. Can you give me twenty minutes?"

You look back. No pursuit visible. Not yet.

"Twenty minutes," you say.`,
scene:'vienna_street',mood:'#355070',characters:['handler'],
effects:{stats:{per:1},flags:{cellar_used:true}},
choices:[
{text:'Follow Viper to the safe house.',next:'sp_vienna_safehouse',effects:{relationships:{handler:1}}},
{text:'Call Raven to coordinate the next move.',next:'sp_call_raven_help',effects:{relationships:{ally:1,handler:1}}}
]
},

sp_fight_out:{
text:`The door takes two impacts before it comes in. Specter's men — two of them, professional, suppressed weapons. You are already moving.

The fight lasts eleven seconds. You come out ahead but not clean — a shallow cut across your forearm from a blade you didn't see coming, and your left ear is ringing from a weapon discharge too close. Both men are down, secured with their own cable ties.

Viper is already at the window. "Now," he says.

You go out the fire escape at speed. The city swallows you.`,
scene:'safehouse',mood:'#e17055',characters:['handler'],
effects:{stats:{str:2,cha:2},flags:{fought_out:true}},
choices:[
{text:'Get to the Vienna safe house.',next:'sp_vienna_safehouse',effects:{relationships:{handler:1}}},
{text:'Get out of Vienna entirely tonight.',next:'sp_flee_to_istanbul',effects:{stats:{cha:1}}}
]
},

sp_fight_bad:{
text:`You are fast. They are faster, and there are three, not two. A blow to the back of your head drops you. When the stars clear, Viper is gone, and you are zip-tied to a radiator.

A man sits across from you. You recognize the face from Whisper's files. Kasakov. Specter.

"Agent Zero," he says. "How inconvenient for both of us."

You are captured. Viper is out there somewhere. The drive is with him.`,
scene:'safehouse',mood:'#4a0f0f',characters:['rival'],
effects:{stats:{cha:-2},flags:{captured:true},relationships:{rival:-3}},
choices:[
{text:'Start talking. Try to negotiate your way out.',next:'sp_captured_negotiate',effects:{stats:{cha:1}}},
{text:'Stay silent. Wait for an opening.',next:'sp_captured_wait',effects:{stats:{cha:1}}}
]
},

sp_split_up:{
text:`"Split up," you say. "You know Vienna. I will create the noise. You go."

Viper looks at you for exactly one second. That one second holds everything — six years of operations, the weight of what he found, the possibility this is the last time you see each other.

"Northwest. Safe house near the Votivkirche. Red door, number nine." He presses the micro-drive into your hand. "If I do not make it, you carry this."

Then he is out the window and down the fire escape.

You turn to face the door as it opens.`,
scene:'safehouse',mood:'#e17055',characters:['handler'],
effects:{stats:{cha:2},flags:{drive_carried:true},relationships:{handler:3}},
choices:[
{text:'Fight them. Buy Viper time.',next:'sp_rearguard_action',effects:{stats:{str:2}},check:{stat:'str',dc:11},failNext:'sp_rearguard_captured'}
]
},

sp_rearguard_action:{
text:`Two men. One door. You have the geometry advantage.

It is loud and it is brutal and you take as much as you give, but when it is done you are still standing and they are not. Your shoulder is dislocated. You slam it back against the door frame and the pain whites out your vision for three seconds.

Then you run. Northwest. Red door, number nine.

Viper is already there. He sees your shoulder and winces.

"The drive?" he asks.

You hold it up.

Something in his face changes. Not relief exactly. Something deeper.`,
scene:'vienna_street',mood:'#e17055',characters:['handler'],
effects:{stats:{str:1,cha:3},flags:{rearguard_survived:true}},
choices:[
{text:'Plan the route to Istanbul.',next:'sp_istanbul_plan',effects:{relationships:{handler:2}}}
]
},

sp_rearguard_captured:{
text:`Three men, not two. The third came through the window behind you.

When you come around, your hands are bound, the drive is gone from your pocket, and Specter is sitting across from you with the particular patience of someone who has already won.

"You bought your handler time," he says. Not unkindly. "That was brave. Unfortunately for you, I already had someone at the northwest safe house."

You are captured. Viper may be too.`,
scene:'safehouse',mood:'#4a0f0f',characters:['rival'],
effects:{stats:{cha:-1},flags:{captured:true,drive_lost:true},relationships:{rival:-2}},
choices:[
{text:'Try to reason with Specter.',next:'sp_captured_negotiate',effects:{stats:{cha:1}}},
{text:'Stay silent and wait.',next:'sp_captured_wait',effects:{stats:{cha:1}}}
]
},

// ── CAPTURED BRANCH ─────────────────────────────────────────

sp_captured_negotiate:{
text:`"Whatever Olympus is paying you," you say, "he will burn you when this is done. People who know what you know do not get retirement packages."

Specter tilts his head. A cat considering a mouse.

"You are not wrong," he says, at last. "You are also not offering me anything more compelling." He leans forward. "But I am curious. Where is the drive?"

"I don't have it."

"I know." He studies you. "But you know where it is going." He sits back. "Tell me that, and you go free. I have no interest in dead field agents. They generate paperwork."

He is either telling the truth or he is very good. Probably both.`,
scene:'safehouse',mood:'#4a0f0f',characters:['rival'],
effects:{relationships:{rival:1}},
choices:[
{text:'Give him nothing. Endure whatever comes.',next:'sp_captured_endure',effects:{stats:{cha:2}}},
{text:'Tell him it\'s going to Istanbul — vague enough to buy time.',next:'sp_misdirect_specter',effects:{stats:{cha:1,int:1}},check:{stat:'cha',dc:12},failNext:'sp_specter_unmoved'},
{text:'Offer to bring him in — testify against Olympus.',next:'sp_specter_deal',effects:{stats:{int:1}}}
]
},

sp_captured_wait:{
text:`You say nothing. You watch the room.

Specter does not seem bothered. He makes a call in low Russian while you study the restraints, the furniture, the window, the guard at the door. The guard shifts his weight every ninety seconds. Left foot dominant. The window latch is a simple lever at shoulder height.

An hour passes. Then Specter gets a call. Whatever he hears changes his expression by a fraction.

He stands. "I will be back in thirty minutes," he tells the guard. "If they move, shoot them in the knee."

Then he leaves. The guard checks his watch. A creature of routine.

You have thirty minutes and one guard.`,
scene:'safehouse',mood:'#4a0f0f',characters:['rival'],
effects:{stats:{per:2}},
choices:[
{text:'Take out the guard. Escape.',next:'sp_escape_capture',effects:{stats:{str:1,per:1}},check:{stat:'per',dc:11},failNext:'sp_escape_fail'},
{text:'Wait for Specter to return and negotiate.',next:'sp_captured_negotiate',effects:{stats:{cha:1}}}
]
},

sp_misdirect_specter:{
text:`"Istanbul," you say. "The drive is going to a journalist in Istanbul. That is all I know."

Specter watches you. A long, professional assessment.

"Which journalist?"

"The handler knows the name. I am the courier. Need-to-know."

Another long pause. Then Specter nods and makes a call. He is sending someone to Istanbul. He bought it — or he is pretending to and you cannot tell which. Either way, he releases your restraints.

"You are free," he says. "I suggest you spend some time reconsidering your employers." He hands you back your phone. "The agency that ordered the LODESTAR kill list is not an agency worth dying for."

He is gone. You are free. The drive is not with you — but Viper still has it.`,
scene:'safehouse',mood:'#636e72',characters:['rival'],
effects:{stats:{cha:2,int:1},flags:{misdirected_specter:true},relationships:{rival:2}},
choices:[
{text:'Find Viper and Raven. Get the drive to Istanbul.',next:'sp_istanbul_plan',effects:{stats:{cha:1}}},
{text:'Trust Specter\'s information and go rogue — expose Olympus yourself.',next:'sp_go_rogue',effects:{stats:{cha:2}}}
]
},

sp_specter_unmoved:{
text:`Specter watches you finish and shakes his head slowly. "Partial truth with a generous portion of misdirection. You are good. Not quite good enough." He stands. "I respect the attempt. I genuinely do."

He gestures to the guard. "Twenty-four hours. If the drive surfaces without my involvement in the next twenty-four hours, you will not enjoy what comes after."

Then he leaves.

You are still captive, and time is running out.`,
scene:'safehouse',mood:'#4a0f0f',characters:['rival'],
effects:{relationships:{rival:-1}},
choices:[
{text:'Wait for an opportunity and escape.',next:'sp_captured_wait',effects:{stats:{cha:1}}},
{text:'There is no way out. Accept what comes.',next:'sp_ending_captured'}
]
},

sp_specter_deal:{
text:`"I want a deal," you say. "I testify against Olympus. Everything I know. In exchange, you walk — complete immunity, whatever third country you want."

Specter is quiet for a long time.

"You cannot offer me immunity," he says. "You have no authority to make that deal."

"Not alone. But if you get me to Raven, she has the contacts to set it up. She has been building the case independently." You look at him steadily. "LODESTAR ends. Olympus goes down. You get a clean exit. Nobody benefits from you in a cell."

Specter considers.

Then he uncuffs you.`,
scene:'safehouse',mood:'#636e72',characters:['rival'],
effects:{stats:{cha:2,int:2},flags:{specter_deal:true},relationships:{rival:3}},
choices:[
{text:'Go to Raven. Honor the deal.',next:'sp_specter_raven_alliance',effects:{relationships:{ally:1,rival:2}}}
]
},

sp_captured_endure:{
text:`You give him nothing. Not a name, not a location, not a confirmation of anything.

Specter eventually stops asking. He is professional enough not to waste time on a wall. He makes a call, then another, then leaves the room for an hour.

You use the hour. The guard is routine. The window latch is within reach if you can work the chair two feet to the left over the next forty minutes.

It takes forty-three.`,
scene:'safehouse',mood:'#4a0f0f',characters:['rival'],
effects:{stats:{cha:3}},
choices:[
{text:'Escape. Find Viper.',next:'sp_escape_capture',effects:{stats:{per:1}},check:{stat:'per',dc:10},failNext:'sp_escape_fail'}
]
},

sp_escape_capture:{
text:`The window. Cold air. A three-story drop broken by a metal fire escape you caught with both hands — the impact almost takes your shoulder again, but you hold.

Down. Street. Into the flow of the city.

You have no phone, no weapon, and no idea where Specter is now. But you have a red door on a northwest street and the address of a Naschmarkt café. One of them holds Viper. One holds Raven. Time to choose.`,
scene:'vienna_street',mood:'#355070',characters:[],
effects:{stats:{per:2,cha:2},flags:{escaped:true}},
choices:[
{text:'Go to the Votivkirche safe house — find Viper.',next:'sp_vienna_safehouse',effects:{stats:{cha:1}}},
{text:'Go to Café Sperl — find Raven.',next:'sp_meet_raven',effects:{relationships:{ally:1}}}
]
},

sp_escape_fail:{
text:`The guard is faster than his routine suggested. A shout, a weapon drawn, and then Specter is back in the room in ninety seconds with the particular expression of someone who expected exactly this.

"Interesting," he says. "Sit down."

You sit. There are no more windows within reach.

The hours pass. Specter's patience is not infinite — eventually he makes a decision, and the decision is not in your favor.`,
scene:'safehouse',mood:'#4a0f0f',characters:['rival'],
effects:{stats:{per:-2}},
choices:[
{text:'Accept what comes.',next:'sp_ending_captured'}
]
},

// ── ARC 6: ISTANBUL & ENDINGS ───────────────────────────────

sp_vienna_safehouse:{
text:`The safe house is a two-room apartment above a tailor's shop. It smells of chalk and old fabric and something cooking downstairs.

Viper is there. And so — to your mild surprise — is Raven, who evidently came to the same conclusion by a different route.

The three of you in a small room with a micro-drive worth more than all your lives combined. The decision tree reduces to two options: get it to Istanbul, or use another channel.

"The journalist is ready," Viper says. "She has been ready for two weeks. She is expecting a source." He looks at both of you. "I just need someone to get it there."

Outside, somewhere, Specter is recalibrating.`,
scene:'safehouse',mood:'#355070',characters:['handler','ally'],
effects:{flags:{team_assembled:true}},
choices:[
{text:'You carry the drive. Go to Istanbul alone.',next:'sp_solo_istanbul',effects:{stats:{cha:2},relationships:{handler:1,ally:1}}},
{text:'All three of you go together.',next:'sp_istanbul_together',effects:{relationships:{handler:1,ally:1}}},
{text:'Send Raven. You and Viper create a diversion.',next:'sp_diversion_istanbul',effects:{stats:{cha:1},relationships:{handler:2,ally:2}}}
]
},

sp_istanbul_plan:{
text:`Viper spreads the route on the desk. Vienna to Istanbul — there are four possible routes. Three of them pass through border points Specter will have covered by now. The fourth is slower: Vienna to Ljubljana to a private boat crossing from Trieste to Greece, overland to Istanbul. Forty-eight hours. Risky. But off the grid.

"The moment Olympus knows you have the drive," Raven says, "every official crossing becomes a trap." She traces the southern route with one finger. "But this way, we control the variables."

"The journalist is in Istanbul?" you ask Viper.

"Her office. Karaköy district." He nods. "She is expecting contact. She does not know when or in what form. But she is ready."

The drive sits on the table between you like a small grenade.`,
scene:'safehouse',mood:'#355070',characters:['handler','ally'],
effects:{flags:{istanbul_route:true}},
choices:[
{text:'Take the southern route. Slow but clean.',next:'sp_istanbul_southern',effects:{stats:{per:1,int:1}}},
{text:'Make a run through official channels. Trust speed over stealth.',next:'sp_istanbul_fast',effects:{stats:{cha:2}},check:{stat:'lck',dc:10},failNext:'sp_border_caught'}
]
},

sp_istanbul_southern:{
text:`Trieste in winter. A fishing boat that smells of diesel and old nets. A Greek border guard who examines your passports for ten seconds longer than comfortable before stamping them. Overland through northern Greece.

You spend forty hours barely sleeping, trading watches, one eye always on the mirrors.

Istanbul announces itself as a skyline — minarets and concrete and the gold spread of the Bosphorus at dusk. You have made it.

Karaköy district. A building above a tea house. The journalist, when she opens the door, looks exactly like someone who has been waiting for a conversation that could get her killed and decided the story was worth it.

"You have it?" she asks.

You hand her the drive.`,
scene:'istanbul',mood:'#2d6a4f',characters:[],
effects:{stats:{per:2,int:1},flags:{drive_delivered:true}},
choices:[
{text:'Stay for the full debriefing.',next:'sp_ending_loyal',effects:{relationships:{handler:2,ally:2}}},
{text:'Leave immediately — no trace, no record.',next:'sp_ending_loyal_clean'}
]
},

sp_istanbul_fast:{
text:`You move fast and clean and the first two checkpoints go smoothly. The third does not.

At the Budapest crossing, the officer's screen flags something. He makes a call. You watch his expression and know, before the backup arrives, that it is over.

Olympus has flagged your passport.`,
scene:'border',mood:'#4a0f0f',characters:[],
effects:{stats:{lck:-2},flags:{passport_flagged:true}},
choices:[
{text:'Run. Create chaos and break through.',next:'sp_border_run',effects:{stats:{cha:1,str:1}},check:{stat:'str',dc:13},failNext:'sp_border_caught'}
]
},

sp_border_run:{
text:`Chaos is the right word. Three border guards, a locked gate, and whatever adrenaline is left in your body after forty-eight hours of running.

You make it. Barely. In a different car, a different direction, aching, you take the long southern route anyway.

Five days later you are in Istanbul.`,
scene:'istanbul',mood:'#2d6a4f',characters:[],
effects:{stats:{cha:3,str:1}},
choices:[
{text:'Deliver the drive to the journalist.',next:'sp_ending_loyal'}
]
},

sp_border_caught:{
text:`The backup arrives before you can move. Four men in suits that say nothing and mean everything.

The drive is found. Viper's evidence disappears into a black-site archive. Olympus's name never reaches a journalist.

You are processed, held, released eight months later under a prisoner exchange with documentation calling you a rogue agent. The story is already written. You had nothing to do with writing it.`,
scene:'border',mood:'#4a0f0f',characters:[],
effects:{flags:{drive_lost:true,captured:true}},
choices:[
{text:'Accept the ending.',next:'sp_ending_captured'}
]
},

sp_solo_istanbul:{
text:`"I go alone," you say. "Harder target. And if Specter is watching this building, seeing one person leave is less interesting than three."

Viper and Raven look at each other.

"If you don't make it—" Raven starts.

"Then you come up with a plan B." You pocket the drive. "But I will make it."

You leave before they can argue. The city is cold and the streets are long and somewhere behind you, Specter is adjusting.

You carry the weight of everything on a drive smaller than your thumb.`,
scene:'vienna_street',mood:'#4a0f0f',characters:[],
effects:{stats:{cha:3},flags:{drive_carried:true,solo_run:true}},
choices:[
{text:'Take the southern route to Istanbul.',next:'sp_istanbul_southern',effects:{stats:{per:1}}},
{text:'Move fast. Official route, forged passport.',next:'sp_istanbul_fast',effects:{stats:{cha:1}},check:{stat:'lck',dc:10},failNext:'sp_border_caught'}
]
},

sp_istanbul_together:{
text:`Three of you, three different passports, three different trains leaving Vienna within the same hour. You converge in Trieste.

The crossing is clean. Overland through Greece. Istanbul on the third day.

Karaköy. A tea house below an office above a story that will rewrite several careers. The journalist takes the drive without drama, pours three glasses of tea, and says:

"Tell me everything."

You tell her everything.`,
scene:'istanbul',mood:'#2d6a4f',characters:['handler','ally'],
effects:{stats:{int:1},flags:{drive_delivered:true,team_intact:true}},
choices:[
{text:'The mission ends here.',next:'sp_ending_loyal'}
]
},

sp_diversion_istanbul:{
text:`Raven takes the drive. You and Viper make noise in the other direction — two separate incidents that pull Specter's network toward Vienna's east side while Raven takes the southern route alone.

It costs you a broken rib and Viper three stitches from a knife he almost didn't see coming.

But Raven reaches Istanbul clean.`,
scene:'vienna_street',mood:'#e17055',characters:['handler','ally'],
effects:{stats:{cha:2,str:1},flags:{drive_delivered:true,raven_carries:true}},
choices:[
{text:'Get word to Raven that the mission is done.',next:'sp_ending_loyal'}
]
},

sp_journalist_extraction:{
text:`The journalist meets you on a corner near the Naschmarkt — neutral ground, public enough to be safe, quiet enough to hear trouble coming.

She is older than you expected, with the specific calm of someone who has been working on a story this dangerous for a long time and has made peace with the risks.

You hand her the drive. She pockets it without looking at it.

"How long to verify?" you ask.

"Three days." She looks at you steadily. "And then it goes to print. All of it."

Three days. You need to keep Viper and Raven alive for three days.`,
scene:'vienna_street',mood:'#2d6a4f',characters:[],
effects:{flags:{drive_delivered:true,three_days:true}},
choices:[
{text:'Stay in Vienna. Protect the source.',next:'sp_protect_source',effects:{stats:{cha:1}}},
{text:'Get everyone out of Vienna. Distance is safety.',next:'sp_flee_to_istanbul',effects:{stats:{per:1}}}
]
},

sp_protect_source:{
text:`Seventy-two hours. You move every twelve, cycling through three safe houses Whisper named before you left Prague. Raven coordinates. Viper rests — he is running on fumes and willpower and very black coffee.

On the second day, Specter finds you. Not the journalist — you. An attempt in an underground parking garage that you handle with efficiency and no small amount of violence.

On the third morning, a news alert breaks across every European outlet simultaneously.

OPERATION LODESTAR: Agency Director Implicated in Asset Murders.

Olympus's name. In print. Everywhere.

Specter's calls stop.`,
scene:'vienna_street',mood:'#2d6a4f',characters:['handler','ally'],
effects:{stats:{cha:2,per:1},flags:{story_published:true}},
choices:[
{text:'The mission is complete.',next:'sp_ending_loyal'}
]
},

sp_flee_to_istanbul:{
text:`Vienna is too hot. You pull everyone out — three different routes, one destination. Istanbul.

The Bosphorus in winter is the color of slate under a milk sky. You find each other in a tea house in Karaköy and sit there for an hour without speaking, just drinking. Even Viper, who has not slept properly in two weeks, looks something approaching peaceful.

The drive reaches the journalist from Istanbul. The story breaks four days later.`,
scene:'istanbul',mood:'#2d6a4f',characters:['handler','ally'],
effects:{flags:{drive_delivered:true}},
choices:[
{text:'End.',next:'sp_ending_loyal'}
]
},

sp_extraction_plan:{
text:`You sit with the map. Four routes. Three compromised. One long and ugly and survivable.

"Ljubljana to Trieste," you say. "Boat to Greece. Overland."

Raven nods. Viper nods.

"Two days," Viper says. "Maybe three."

"We have the time if Specter doesn't know we have the drive," you say.

"He doesn't," Raven says. "Not yet."

Not yet is enough to start with.`,
scene:'safehouse',mood:'#355070',characters:['handler','ally'],
effects:{stats:{int:1}},
choices:[
{text:'Take the southern route to Istanbul.',next:'sp_istanbul_southern',effects:{stats:{per:1}}},
{text:'You carry the drive alone. Send the others a different way.',next:'sp_solo_istanbul',effects:{stats:{cha:2}}}
]
},

sp_solo_carry:{
text:`"Give me the drive," you say. "Both of you get out separately. Three different directions, three different methods. They cannot stop all of us, and only I will have the drive."

Viper hesitates exactly long enough to show it costs him something.

Then he presses the drive into your hand.

"Istanbul," he says. "Karaköy. Her name is on the drive header — encrypted, but you have the key. The key is the first op we ran together. You remember it."

You remember it.

Raven looks at you for a long moment. "Come back," she says. It is not a request.

Then you are alone with the drive and the city and whatever comes next.`,
scene:'safehouse',mood:'#4a0f0f',characters:[],
effects:{stats:{cha:3},flags:{drive_carried:true,solo_run:true},relationships:{handler:3,ally:3}},
choices:[
{text:'Take the southern route. Slow and clean.',next:'sp_istanbul_southern',effects:{stats:{per:1}}},
{text:'Move fast. You have one shot at the official crossing.',next:'sp_istanbul_fast',effects:{stats:{cha:1}},check:{stat:'lck',dc:10},failNext:'sp_border_caught'}
]
},

// ── SPECTER ALLIANCE BRANCH ─────────────────────────────────

sp_specter_raven_alliance:{
text:`Raven looks at Specter the way she looks at a locked box she is not certain she should open.

"You want immunity," she says.

"I want assurance," Specter says. "I will not be prosecuted for contracted work done under plausible deniability."

Raven thinks. Then: "If you deliver Olympus — not just the evidence, but Olympus himself, in custody — I can make that call. I have the contacts and the credibility to make it stick."

Specter considers for exactly as long as it takes a professional to recognize the best available deal.

"Done," he says.

The three of you are an extremely strange team. But stranger alliances have won stranger wars.`,
scene:'safehouse',mood:'#636e72',characters:['ally','rival'],
effects:{stats:{cha:1,int:1},flags:{specter_allied:true},relationships:{rival:2,ally:2}},
choices:[
{text:'Set the trap for Olympus.',next:'sp_olympus_trap',effects:{stats:{int:2}}}
]
},

sp_olympus_trap:{
text:`The plan is elegant in the way that things are elegant when they are built by three people who have each been betrayed by the same institution.

You use the memory stick Whisper gave you as bait — a copy of the financial records, sent anonymously to Olympus's personal channel with a message implying you are willing to sell and the original drive has not yet reached a journalist.

Olympus comes to Vienna himself. That is the tell — a director who travels to clean up a leak personally has something very specific to protect.

He comes to the meeting. You are waiting.`,
scene:'vienna_street',mood:'#4a0f0f',characters:['director'],
effects:{stats:{int:3},flags:{olympus_trap_set:true},relationships:{director:-4}},
choices:[
{text:'Take Olympus into custody yourself.',next:'sp_ending_olympus_caught',effects:{stats:{cha:1}}},
{text:'Let Specter handle the physical confrontation.',next:'sp_ending_specter_handles'}
]
},

// ── ADDITIONAL BRANCHES ─────────────────────────────────────

sp_go_rogue:{
text:`The agency cannot be trusted. Specter, strangely, told you more truth tonight than your own director has in years.

You find Viper and Raven through the routes they gave you. You tell them what you know. You tell them you are done with the agency.

Raven does not look surprised. Viper nods slowly.

"I have been done for months," he says. "I just had one more thing to finish first."

The three of you publish the LODESTAR files through the journalist in Istanbul. No agency oversight. No controlled revelation. Everything.

It is the nuclear option. But the reactor was already melting.`,
scene:'safehouse',mood:'#355070',characters:['handler','ally'],
effects:{stats:{cha:3},flags:{rogue:true},relationships:{director:-5,handler:3,ally:3}},
choices:[
{text:'Accept the consequences.',next:'sp_ending_rogue'}
]
},

sp_abort_report:{
text:`You pull back from the bridge and transmit a surveillance report to Olympus in full: vehicle, positions, possible foreign intelligence presence.

Olympus acknowledges. Thanks you. Then: "Proceed to secondary protocol. Abort the drop."

You abort. Clean exit. Back to the pension.

But three hours later, the courier from the bridge is found in the river.

Someone cleaned up very quickly after your report. Someone who knew exactly where to look.

You stare at your ceiling and think about who received that surveillance report first.`,
scene:'prague_street',mood:'#4a0f0f',characters:['director'],
effects:{stats:{per:1,int:1},flags:{olympus_suspect:true,courier_dead:true},relationships:{director:-2}},
choices:[
{text:'Find Whisper. You cannot trust the agency.',next:'sp_find_whisper',effects:{relationships:{contact:1}}},
{text:'Go to Vienna regardless of orders.',next:'sp_travel_vienna',effects:{stats:{cha:1},relationships:{director:-1}}}
]
},

sp_watch_watchers:{
text:`You wait from your terrace position. Forty minutes.

The sedan runs watchers in thirty-minute rotations — professional setup. At the 0340 mark, the rotation happens and you catch a face at the car window. Male, mid-fifties, close-cropped silver hair. Agency build, if you have spent enough years around it.

You have spent enough years around it.

You do not have a name. But you have a face you will not forget.

The courier makes the exchange below. Someone else's op, someone else's courier. The weight of what is happening — and who is behind it — is growing.`,
scene:'charles_bridge',mood:'#4a4a6a',characters:[],
effects:{stats:{per:3},flags:{silver_hair_seen:true,olympus_seen:true}},
choices:[
{text:'Follow the sedan when it leaves.',next:'sp_follow_sedan',effects:{stats:{per:1,per:1}},check:{stat:'per',dc:11},failNext:'sp_sedan_lost'},
{text:'Go to Hotel 412. The key is still in your pocket.',next:'sp_hotel_412',effects:{stats:{int:1}}}
]
},

sp_follow_sedan:{
text:`The sedan goes south along the Vltava. You follow on foot — reckless, but this city was made for people who follow things on foot. The sedan stops at a building near the Old Town Square.

The silver-haired man goes inside. You note the building, the entrance, the timing. You photograph what you can.

The building is listed as a diplomatic representation office for a small Central European nation. Officially.

You send the photographs to Whisper from a burner. Her reply comes in four minutes: "I know that building. Your agency uses the third floor. Has for years."

Your own agency.`,
scene:'prague_street',mood:'#4a0f0f',characters:[],
effects:{stats:{per:2,int:1},flags:{agency_building_found:true,olympus_suspect:true}},
choices:[
{text:'Find Whisper urgently.',next:'sp_find_whisper',effects:{relationships:{contact:1}}},
{text:'Go to Hotel 412.',next:'sp_hotel_412',effects:{stats:{cha:1}}}
]
},

sp_sedan_lost:{
text:`The sedan makes two turns you cannot follow fast enough. It is gone.

You have the face. You have the approximate area. It is something — not enough, but something.

The courier window on the bridge has closed. The mission clock is running out.`,
scene:'prague_street',mood:'#636e72',characters:[],
effects:{stats:{per:1}},
choices:[
{text:'Go to Hotel 412.',next:'sp_hotel_412',effects:{stats:{cha:1}}},
{text:'Find Whisper.',next:'sp_find_whisper',effects:{relationships:{contact:1}}}
]
},

sp_follow_courier:{
text:`The courier moves fast through the Old Town — he knows the routes. You stay thirty meters back. He doubles through an arcade, then a side alley. Testing for a tail.

You lose him twice and find him twice. On the third recovery he has stopped at a hotel on Wenceslas Square. Hotel Clover. He does not check in — he goes straight to the elevator.

Fourth floor.

When you push through the lobby and approach the desk, you ask for room 412. The clerk checks the system.

"That room was just vacated," she says.

But the key in your pocket still turns the lock.`,
scene:'prague_street',mood:'#636e72',characters:[],
effects:{stats:{per:1,per:1},flags:{key_412:true}},
choices:[
{text:'Go to room 412.',next:'sp_hotel_412',effects:{stats:{cha:1}}}
]
},

sp_lead_to_412:{
text:`You walk a clean, undeviated route to Hotel Clover — no evasion, no countersurveillance. If they are following you, you want them at 412 when you open the door. Whatever is in that room, knowing who else wants it is intelligence.

The hotel. The elevator. Room 412.

You open the door with the key. Inside: burner phone, Vienna map, the note. The tail comes up the stairs four minutes after you. You are already in the bathroom behind the door when the room is entered.

Two men. Professional. They sweep the room, take nothing, leave a device under the desk. A tracker.

They do not find you.`,
scene:'hotel_room',mood:'#4a0f0f',characters:[],
effects:{stats:{per:2,per:2},flags:{tracker_placed:true,key_412:true,viper_note:true,vienna_circle:true}},
choices:[
{text:'Take the burner and map. Leave the tracker. Go.',next:'sp_flee_hotel',effects:{stats:{per:1}}},
{text:'Remove the tracker and sanitize the room.',next:'sp_sweep_room',effects:{stats:{int:1}}}
]
},

sp_foreign_intel_plan:{
text:`"Not a journalist," you say. "A friendly service. British, Swiss — someone with the institutional weight to take Olympus down through proper intelligence channels."

Raven considers. "Cleaner. Less visible. But if they are not fully insulated from Olympus's network, we get buried the same way."

"I have a contact at BfV," she says after a moment. "German counterintelligence. They have been independently suspicious of Olympus for two years. They have not been able to move without cause."

"Now they have cause," you say.

She looks at you with something approaching approval.`,
scene:'cafe',mood:'#355070',characters:['ally'],
effects:{stats:{int:2},flags:{bfv_plan:true},relationships:{ally:2}},
choices:[
{text:'Contact BfV. Get the drive to them.',next:'sp_bfv_handoff',effects:{stats:{int:1}}}
]
},

sp_bfv_handoff:{
text:`The BfV contact meets you in a café near the Rathaus. A woman in her fifties, methodical and precise, with the kind of eyes that file everything away permanently.

She takes the drive, photographs the note and the map, and listens to everything you tell her without writing anything down.

"This is sufficient," she says — the most German expression of total agreement you have ever heard.

Three weeks later, Olympus is indicted under an allied intelligence framework. The trial is closed, the details classified, but the names are public.

You are listed in the documents as an anonymous source. Which is exactly what you are.`,
scene:'vienna_street',mood:'#2d6a4f',characters:[],
effects:{stats:{int:2},flags:{drive_delivered:true}},
choices:[
{text:'The mission is done.',next:'sp_ending_loyal_clean'}
]
},

sp_own_exit:{
text:`You do not follow Viper's route. His safe house is known to him and possibly to others. You take your own exit — south through the building's maintenance corridor, out through the loading dock.

The night swallows you.

You carry the drive. You do not know where Viper went. You do not know if he made it.

You have to decide what to do next alone.`,
scene:'vienna_street',mood:'#4a0f0f',characters:[],
effects:{stats:{per:1,per:1},flags:{drive_carried:true}},
choices:[
{text:'Find Raven. You need backup.',next:'sp_meet_raven',effects:{relationships:{ally:1}}},
{text:'Istanbul. Solo. Now.',next:'sp_solo_istanbul',effects:{stats:{cha:2}}}
]
},

sp_call_raven_help:{
text:`Raven picks up in two rings. "Zero. Tell me you got out."

"I got out. Viper too." A pause. "I have the drive."

"I am at the Votivkirche safe house," she says. "There is also a large, very unhappy man from Specter's team outside. I have been managing the situation. Please come manage it with me."

The warmth in her voice when she says please is the most human thing you have heard in two days. You move.`,
scene:'comms',mood:'#355070',characters:['ally'],
effects:{relationships:{ally:2}},
choices:[
{text:'Get to the Votivkirche.',next:'sp_vienna_safehouse',effects:{stats:{cha:1}}}
]
},

sp_abort_vienna:{
text:`You break cover and go north. A train, a border, another train.

You surface in Berlin two days later with the drive still in your pocket and no idea whether Raven and Viper got out.

The agency marks you AWOL. Specter's network marks you as fled. Olympus's files mark you as a closed problem.

You sit in a Berlin apartment and try to decide what kind of person you want to be next.`,
scene:'berlin',mood:'#4a4a6a',characters:[],
effects:{stats:{per:1}},
choices:[
{text:'Make the decision.',next:'sp_ending_rogue'}
]
},

sp_confront_tail:{
text:`You choose your ground: a narrow arch in the old wall, a single approach, no room to maneuver. You let the tail follow you in. Then you turn.

He is younger than expected, twenties, too tense in the shoulders. Not Specter's work — Specter's people are older and colder.

"Who sent you?" you say.

He tells you. After a moment of weighing his options, he tells you. The name he gives is not Specter's.

It is Olympus's.`,
scene:'prague_street',mood:'#4a0f0f',characters:[],
effects:{stats:{cha:1,per:1},flags:{olympus_tailing:true,olympus_suspect:true}},
choices:[
{text:'Go to Hotel 412. You need the evidence.',next:'sp_hotel_412',effects:{stats:{cha:1}}},
{text:'Find Whisper urgently.',next:'sp_find_whisper',effects:{relationships:{contact:1}}}
]
},

sp_lose_tail:{
text:`Old Town Prague at three in the morning is a maze of archways, alleys, and bridges built over centuries with no particular concern for surveillance practicality. You use all of it.

The tail loses you at the corner of Malá Strana and a dead-end garden passage that is not on any map made after 1960.

You give it ten minutes on a cold bench. Nothing follows.

The weight of the key in your pocket leads you west.`,
scene:'prague_street',mood:'#636e72',characters:[],
effects:{stats:{per:2}},
choices:[
{text:'Hotel Clover. Room 412.',next:'sp_hotel_412',effects:{stats:{cha:1}}},
{text:'Find Whisper first.',next:'sp_find_whisper',effects:{relationships:{contact:1}}}
]
},

sp_tail_closes:{
text:`You move too deliberately, and the tail knows it. He closes the distance and a second man appears from a doorway ahead. You are being walked into a funnel.

You break left. A sprint through a courtyard, over a fence that costs you your jacket, down a service alley.

You lose them. But they know you are in the area, and they know you are running.

The clock on this city is shorter now.`,
scene:'prague_street',mood:'#e17055',characters:[],
effects:{stats:{per:-1,cha:1}},
choices:[
{text:'Hotel 412. Now.',next:'sp_hotel_412',effects:{stats:{cha:1}}},
{text:'Get to Whisper.',next:'sp_find_whisper',effects:{relationships:{contact:1}}}
]
},

sp_drop_under_surveillance:{
text:`You approach the bridge like you own it. No hesitation, no countersurveillance — you walk directly to the courier and make the exchange in four seconds.

The sedan's door opens as you clear the bridge. Two men, moving fast.

You run. Prague's Old Town swallows you — they are good, but you are better here, and you know the backup routes Viper mapped six months ago.

You lose them in the narrow lanes behind the Týn Church. Breathing hard, back against cold stone, the key pressed in your palm.

Room 412.`,
scene:'charles_bridge',mood:'#e17055',characters:[],
effects:{stats:{per:1,cha:2},flags:{drop_completed:true,key_412:true}},
choices:[
{text:'Get to Hotel 412 immediately.',next:'sp_hotel_412',effects:{stats:{cha:1}}}
]
},

sp_blown_at_bridge:{
text:`They are already moving when you step onto the bridge — one from the left, one from the chestnut cart. The sedan's door opens. Too many vectors.

You abort. Turn and walk fast, then faster, then run. The key is still in your pocket. The drop did not happen. The mission is compromised.

But you are still free. And you still have the key.`,
scene:'charles_bridge',mood:'#e17055',characters:[],
effects:{stats:{per:-1},flags:{drop_aborted:true,key_412:true}},
choices:[
{text:'Find Whisper. You need local intelligence.',next:'sp_find_whisper',effects:{relationships:{contact:1}}},
{text:'Go to Hotel 412 anyway. Find out what the key unlocks.',next:'sp_hotel_412',effects:{stats:{cha:1}}}
]
},

// ── ENDINGS ────────────────────────────────────────────────

sp_ending_loyal:{
text:`The story breaks on a Thursday.

By Friday evening, three agency directors in four countries have requested emergency briefings. By Saturday, Olympus is unreachable — formally described as having voluntarily stepped aside pending inquiry. The language of men who know when the walls are moving.

Viper surfaces, eventually, in a city he has never named to you, doing work he does not discuss. He sends you a single message: a call sign you both know. It means: I made it.

Raven is promoted. She finds the promotion uncomfortable in the way that good people often find recognition — it feels like the wrong reward for the right work.

You are officially listed as on extended operational leave. Unofficially, you are the person who held the line when the agency turned on itself.

You did not lose a handler. You found out who he really was. And you chose, every time the choice came, the harder right thing.

That will have to be enough.`,
scene:'end',mood:'#00b894',ending:'The Loyal Agent',characters:[],choices:[]
},

sp_ending_loyal_clean:{
text:`There is no ceremony. The drive leaves your hand and enters the machinery of accountability, and you walk away down a street in Istanbul — or Vienna, or Berlin, or wherever the last thread brought you — with the smell of something cooking and the particular relief of a person who has carried something heavy for a very long time and set it down.

Olympus falls. Not immediately — these things never happen immediately — but with the slow, inevitable weight of documented truth.

You file no report. You request no commendation. You disappear back into the field, where you have always been most comfortable.

Three weeks later, a new handler makes contact. They use the correct protocols. Their voice is careful and clean.

You listen to what they have to say. Then you get to work.`,
scene:'end',mood:'#00b894',ending:'Ghost Protocol',characters:[],choices:[]
},

sp_ending_olympus_caught:{
text:`Olympus looks at you across a Vienna parking garage with the expression of a man who has already begun calculating his options and found them considerably reduced.

Specter is behind him. Raven flanks the exit. Viper, somewhere in the shadows, is watching.

"Agent Zero," Olympus says. "You have made a very serious mistake."

"That is possible," you say. "But not the mistake you are thinking of."

What follows is not a conversation — it is a formal act. A handcuff. A phone call. A chain of custody that leads from a parking garage in Vienna to an agency tribunal that, unlike Olympus's version, has not been pre-compromised.

The operation ends here. The reckoning takes longer. But it begins.`,
scene:'end',mood:'#6c5ce7',ending:'Checkmate',characters:[],choices:[]
},

sp_ending_specter_handles:{
text:`You tell Specter: it is done. Walk away.

He looks at Olympus for a long moment. Something professional and final passes between them — two men from different ends of the same industry recognizing each other across the gap of what they have both done.

"There will be a formal arrangement," Specter tells Olympus. "You will cooperate with it."

You do not ask exactly what the arrangement is. You decide, standing there, that you do not need to know. Some accounting happens in rooms you will never see. Some justice takes forms that do not appear in official reports.

Olympus does not go free. That much you are certain of.

It will have to be enough.`,
scene:'end',mood:'#636e72',ending:'A Quiet Reckoning',characters:[],choices:[]
},

sp_ending_rogue:{
text:`You burn your credentials on a Thursday. Not symbolically — literally. In a metal bin in a Berlin apartment, the documents that make you Agent Zero turn to ash.

The files go to the journalist anyway. Viper helps. Raven, after a silence that lasted a week, helps too.

The story runs. Olympus falls. The agency is reorganized under oversight that did not exist before.

You watch it from a city that does not appear in any of your previous operational files. New name. Older face. The particular freedom of someone who stopped serving a system and started serving something that does not have a name in any field manual.

It is not comfortable. It is not safe. It is the most honest thing you have ever done.`,
scene:'end',mood:'#a29bfe',ending:'Ghost in the Cold',characters:[],choices:[]
},

sp_ending_captured:{
text:`The room you wake up in is smaller than the one in Prague. The questions are different. Specter's people are more patient than Olympus's.

Eight months pass. You do not break. Whatever they wanted, they do not get it from you.

The prisoner exchange happens on a bridge, the way these things always seem to happen — as if somewhere, long ago, someone decided bridges were the appropriate stage for this particular kind of transaction.

On the other side, there is a debrief. Then another. Then a third. The agency speaks to you with the careful neutrality of people who are not quite sure whether to be grateful or suspicious.

You never tell them about the drive. You never tell them about Viper's note. You never tell them what Whisper showed you.

Some intelligence you carry alone.`,
scene:'end',mood:'#e17055',ending:'Silence Held',characters:[],choices:[]
},

sp_ending_arrest_viper:{
text:`The drive is in your possession. Viper is bound with his own belt, sitting on the floor of the room he has called home for two weeks, watching you with an expression that contains neither anger nor betrayal. Just the particular resignation of someone who knew this was one possible outcome and accepted it.

You call in. Agency protocol. Extraction team dispatched.

They arrive in forty minutes. They take Viper and they take the drive. The case officer who signs the receipt barely looks at you.

Three months later, you hear through official channels that Viper's trial has been classified. That the evidence drive was reviewed and found to contain falsified materials. That the charges against Director Olympus — which were never officially filed — are not being pursued.

You sit with this for a long time.

You followed orders. You did your job. The system you trusted absorbed what you handed it and produced the outcome that served the system.

You wonder if Whisper was right.`,
scene:'end',mood:'#d63031',ending:'Orders Followed',characters:[],choices:[]
},

sp_ending_handler_traitor:{
text:`The evidence is there. You did not want to see it, but it is there.

Viper was not running a counter-operation. He was running a diversion — feeding both sides fragments of truth, selling what he knew, engineering his own disappearance. The note, the drive, the Vienna safe house: all of it designed to send you in the wrong direction while the real transaction happened elsewhere.

You figure it out in a hotel room with the drive in your hand and the realization settling like cold water.

You make the call. The only call left to make. When the team arrives, Viper is already gone. The money is already moved. The world is already different by the measure of one man's thirty years of loyalty becoming something else entirely.

He was your handler. You were his best asset. In the end, that was the thing he used.

You write the report. All of it. Every word.

You owe the truth that much.`,
scene:'end',mood:'#d63031',ending:'Burned Asset',characters:[],choices:[]
}

};
window.SCEN_NODES['shadowprotocol'] = SP_NODES;
})();
