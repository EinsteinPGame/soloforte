// Scenario data: zombie  (ZOMBIE_NODES)
// Split out of scenario-generator.html on 2026-08-01.
// Edit THIS file to change this scenario — the main file no longer holds node data.
window.SCEN_NODES = window.SCEN_NODES || {};
(function(){
const ZOMBIE_NODES = {
  zo_wake:{
    text:`Your eyes snap open. Something is wrong.

The apartment is dark, but the sounds outside are not normal. Car alarms blaring in overlapping waves. Screaming — not the drunk-weekend kind. The raw, animal kind. A helicopter thumps overhead, searchlight sweeping through your blinds.

Your phone buzzes on the nightstand. Seventeen missed calls. A push notification from the city emergency system: "SHELTER IN PLACE. DO NOT OPEN DOORS FOR STRANGERS."

Your heart is hammering.`,
    scene:'dark',mood:'#2d3436',
    choices:[
      {text:'Pull back the blinds.',next:'zo_window'},
      {text:'Check your phone.',next:'zo_phone'},
      {text:'Get up. Get dressed.',next:'zo_weapon'}
    ]
  },
  zo_phone:{
    text:`You grab your phone. The screen blinds you for a second.

Mom — 6 missed calls. Dad — 4. Your roommate Jake — 7.

Jake's texts come in rapid fire:
"BRO GET OUT"
"something happened downtown dont know what"
"people are attacking each other"
"im at the gas station on 5th DO NOT GO OUTSIDE WITHOUT SOMETHING TO PROTECT YOURSELF"
"tyler is dead dude. tyler is dead. im not joking"

The last text was 47 minutes ago. No response since.

The emergency alert on the news app just says: "Unidentified biological outbreak. National Guard deployed. Avoid contact with infected individuals. Symptoms include aggression, loss of motor control, and—" The page fails to load.`,
    scene:'dark',mood:'#2d3436',
    choices:[
      {text:'Go to the window.',next:'zo_window'},
      {text:'Look around the apartment.',next:'zo_weapon'},
      {text:'Call Jake back.',next:'zo_call_jake'}
    ]
  },
  zo_call_jake:{
    text:`The phone rings. Once. Twice. Five times. Voicemail.

You try again. Straight to voicemail this time.

One more try. It rings — then picks up. But it's not Jake's voice. It's breathing. Wet, ragged breathing, like someone choking on their own throat. Then a sound that isn't a word, something between a growl and a moan.

The call disconnects.

Your hands are shaking.`,
    scene:'dark',mood:'#d63031',
    effects:{flags:{called_jake:true}},
    choices:[
      {text:'Go to the window.',next:'zo_window'},
      {text:'Search the apartment.',next:'zo_weapon'}
    ]
  },
  zo_window:{
    cutscene:[
      {svg:`<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="zw1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0a0a1a"/><stop offset="100%" stop-color="#1a1a2e"/></linearGradient></defs><rect width="400" height="180" fill="url(#zw1)"/><!-- Window frame --><rect x="80" y="20" width="240" height="140" rx="3" fill="none" stroke="#444" stroke-width="3"/><line x1="200" y1="20" x2="200" y2="160" stroke="#444" stroke-width="2"/><line x1="80" y1="90" x2="320" y2="90" stroke="#444" stroke-width="2"/><!-- Blinds --><g opacity=".4"><line x1="85" y1="30" x2="195" y2="30" stroke="#555" stroke-width="1.5"/><line x1="85" y1="40" x2="195" y2="40" stroke="#555" stroke-width="1.5"/><line x1="85" y1="50" x2="195" y2="50" stroke="#555" stroke-width="1.5"/><line x1="85" y1="60" x2="195" y2="60" stroke="#555" stroke-width="1.5"/></g><!-- Hand gripping blinds --><path d="M140,45 Q145,35 155,38 L160,50 Q155,55 148,52 Z" fill="#d4a574" opacity=".9"/><path d="M148,40 L152,32 L156,40" fill="none" stroke="#d4a574" stroke-width="2" stroke-linecap="round"/><!-- Orange glow outside --><rect x="205" y="25" width="110" height="60" fill="#d63031" opacity=".15"/><circle cx="260" cy="55" r="20" fill="#ff6b35" opacity=".1"/><!-- Text --><text x="200" y="175" text-anchor="middle" fill="#666" font-size="9" font-family="sans-serif">You grip the blinds...</text></svg>`,text:'You grip the blinds. Your fingers are shaking. The sounds outside are getting louder — screaming, glass breaking, something heavy hitting pavement.',caption:'The window...'},
      {svg:`<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="zw2" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#1a0a0a"/><stop offset="60%" stop-color="#2d1a1a"/><stop offset="100%" stop-color="#0a0a1a"/></linearGradient><linearGradient id="fire" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#d63031"/><stop offset="50%" stop-color="#ff6b35"/><stop offset="100%" stop-color="#fdcb6e"/></linearGradient></defs><rect width="400" height="180" fill="url(#zw2)"/><!-- Street --><rect x="0" y="130" width="400" height="50" fill="#1a1a1a"/><!-- Road lines --><rect x="50" y="148" width="30" height="3" rx="1" fill="#555" opacity=".4"/><rect x="150" y="148" width="30" height="3" rx="1" fill="#555" opacity=".4"/><rect x="300" y="148" width="30" height="3" rx="1" fill="#555" opacity=".4"/><!-- Flipped car --><g transform="translate(160,100) rotate(-95)"><rect x="-30" y="-15" width="60" height="30" rx="5" fill="#3a3a4a"/><rect x="-25" y="-12" width="20" height="12" rx="2" fill="#1a3a5a" opacity=".6"/><rect x="5" y="-12" width="20" height="12" rx="2" fill="#1a3a5a" opacity=".6"/><circle cx="-22" cy="18" r="7" fill="#222" stroke="#444" stroke-width="1.5"/><circle cx="22" cy="18" r="7" fill="#222" stroke="#444" stroke-width="1.5"/></g><!-- Flames --><ellipse cx="175" cy="105" rx="15" ry="25" fill="url(#fire)" opacity=".7"/><ellipse cx="170" cy="110" rx="8" ry="15" fill="#fdcb6e" opacity=".5"/><ellipse cx="180" cy="108" rx="6" ry="12" fill="#ff6b35" opacity=".6"/><!-- Smoke --><circle cx="175" cy="70" r="12" fill="#555" opacity=".2"/><circle cx="180" cy="55" r="18" fill="#444" opacity=".15"/><circle cx="170" cy="45" r="14" fill="#333" opacity=".1"/><!-- Streetlight (flickering) --><rect x="320" y="60" width="3" height="80" fill="#555"/><circle cx="321" cy="58" r="6" fill="#ff6b35" opacity=".4"/><line x1="321" y1="58" x2="321" y2="140" stroke="#ff6b35" stroke-width="40" opacity=".03"/><!-- Building silhouettes --><rect x="0" y="40" width="50" height="100" fill="#111"/><rect x="340" y="50" width="60" height="90" fill="#0d0d0d"/><rect x="60" y="60" width="35" height="80" fill="#0f0f0f"/></svg>`,text:'A car is flipped on its side below, still smoking. Flames lick from under the hood. The streetlights flicker, casting everything in orange and shadow.',caption:'Four floors down...'},
      {svg:`<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="zw3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1a0505"/><stop offset="100%" stop-color="#0a0a0a"/></linearGradient></defs><rect width="400" height="180" fill="url(#zw3)"/><!-- Street --><rect x="0" y="140" width="400" height="40" fill="#1a1a1a"/><!-- Running people (silhouettes) --><g fill="#333"><!-- Person 1 running --><circle cx="80" cy="118" r="5"/><line x1="80" y1="123" x2="80" y2="138" stroke="#333" stroke-width="3"/><line x1="80" y1="130" x2="73" y2="125" stroke="#333" stroke-width="2"/><line x1="80" y1="130" x2="88" y2="127" stroke="#333" stroke-width="2"/><line x1="80" y1="138" x2="73" y2="145" stroke="#333" stroke-width="2"/><line x1="80" y1="138" x2="88" y2="143" stroke="#333" stroke-width="2"/><!-- Person 2 running --><circle cx="110" cy="120" r="4.5"/><line x1="110" y1="125" x2="110" y2="138" stroke="#333" stroke-width="2.5"/><line x1="110" y1="130" x2="104" y2="126" stroke="#333" stroke-width="2"/><line x1="110" y1="138" x2="104" y2="144" stroke="#333" stroke-width="2"/><line x1="110" y1="138" x2="117" y2="142" stroke="#333" stroke-width="2"/></g><!-- Zombie figures (lurching, red-tinted) --><g fill="#8b0000" opacity=".8"><!-- Zombie 1 --><circle cx="250" cy="115" r="6"/><line x1="250" y1="121" x2="248" y2="140" stroke="#8b0000" stroke-width="3.5"/><line x1="248" y1="128" x2="260" y2="122" stroke="#8b0000" stroke-width="2.5"/><line x1="248" y1="128" x2="240" y2="132" stroke="#8b0000" stroke-width="2.5"/><line x1="248" y1="140" x2="244" y2="150" stroke="#8b0000" stroke-width="2.5"/><line x1="248" y1="140" x2="254" y2="148" stroke="#8b0000" stroke-width="2.5"/><!-- Zombie 2 --><circle cx="290" cy="118" r="5.5"/><line x1="290" y1="124" x2="292" y2="140" stroke="#8b0000" stroke-width="3"/><line x1="292" y1="130" x2="300" y2="124" stroke="#8b0000" stroke-width="2"/><line x1="292" y1="140" x2="288" y2="150" stroke="#8b0000" stroke-width="2.5"/></g><!-- Zombie grabbing person --><g transform="translate(200,110)"><circle cx="0" cy="8" r="5" fill="#8b0000" opacity=".8"/><line x1="0" y1="13" x2="-2" y2="30" stroke="#8b0000" stroke-width="3"/><line x1="-2" y1="20" x2="12" y2="14" stroke="#8b0000" stroke-width="2.5"/><circle cx="15" cy="10" r="4.5" fill="#555"/><line x1="15" y1="15" x2="14" y2="28" stroke="#555" stroke-width="2.5"/><path d="M12,14 Q13,8 16,6" stroke="#666" stroke-width="1.5" fill="none"/></g><!-- Red atmosphere --><rect x="0" y="0" width="400" height="180" fill="#d63031" opacity=".06"/><!-- Building silhouettes --><rect x="0" y="30" width="40" height="120" fill="#0a0a0a"/><rect x="350" y="45" width="50" height="105" fill="#0a0a0a"/></svg>`,text:'People are running. Behind them, others move WRONG — stumbling, lurching, impossibly fast. One catches a woman by the hair. You look away.',caption:'They\'re not human anymore.'},
      {svg:`<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="zw4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a0a1a"/><stop offset="100%" stop-color="#1a1a2a"/></linearGradient></defs><rect width="400" height="180" fill="url(#zw4)"/><!-- Street --><rect x="0" y="140" width="400" height="40" fill="#1a1a1a"/><!-- Police car --><g transform="translate(100,110)"><rect x="-25" y="0" width="50" height="22" rx="4" fill="#2a2a3a"/><rect x="-20" y="3" width="15" height="10" rx="1" fill="#1a3a5a" opacity=".5"/><rect x="5" y="3" width="15" height="10" rx="1" fill="#1a3a5a" opacity=".5"/><circle cx="-18" cy="24" r="5" fill="#222" stroke="#444" stroke-width="1"/><circle cx="18" cy="24" r="5" fill="#222" stroke="#444" stroke-width="1"/><!-- Light bar --><rect x="-12" y="-4" width="24" height="4" rx="2" fill="#333"/><circle cx="-6" cy="-2" r="2.5" fill="#3498db" opacity=".8"><animate attributeName="opacity" values=".8;.2;.8" dur="0.8s" repeatCount="indefinite"/></circle><circle cx="6" cy="-2" r="2.5" fill="#d63031" opacity=".8"><animate attributeName="opacity" values=".2;.8;.2" dur="0.8s" repeatCount="indefinite"/></circle><!-- Open doors --><rect x="-30" y="2" width="8" height="18" rx="1" fill="#2a2a3a" transform="rotate(-30,-30,2)"/><rect x="22" y="2" width="8" height="18" rx="1" fill="#2a2a3a" transform="rotate(30,30,2)"/></g><!-- Police light sweep --><polygon points="94,108 60,60 70,60" fill="#3498db" opacity=".04"/><polygon points="106,108 130,60 140,60" fill="#d63031" opacity=".04"/><!-- Humvee --><g transform="translate(280,115)"><rect x="-30" y="0" width="60" height="25" rx="2" fill="#4a5a3a"/><rect x="-25" y="-8" width="50" height="10" rx="1" fill="#3a4a2a"/><circle cx="-22" cy="27" r="6" fill="#222" stroke="#555" stroke-width="1.5"/><circle cx="22" cy="27" r="6" fill="#222" stroke="#555" stroke-width="1.5"/><!-- Mounted light --><rect x="5" y="-12" width="4" height="5" fill="#555"/><circle cx="7" cy="-14" r="3" fill="#fdcb6e" opacity=".6"/><polygon points="7,-14 -20,-40 34,-40" fill="#fdcb6e" opacity=".04"/><!-- Soldiers --><circle cx="-10" cy="-14" r="3" fill="#4a5a3a"/><line x1="-10" y1="-11" x2="-10" y2="-4" stroke="#4a5a3a" stroke-width="2.5"/><circle cx="20" cy="-14" r="3" fill="#4a5a3a"/><line x1="20" y1="-11" x2="20" y2="-4" stroke="#4a5a3a" stroke-width="2.5"/></g><!-- Buildings --><rect x="0" y="20" width="45" height="130" fill="#0d0d0d"/><rect x="350" y="35" width="50" height="115" fill="#111"/><rect x="50" y="50" width="30" height="100" fill="#0a0a0a"/><!-- Windows lit --><rect x="10" y="40" width="6" height="6" fill="#fdcb6e" opacity=".15"/><rect x="25" y="55" width="6" height="6" fill="#fdcb6e" opacity=".1"/><rect x="360" y="50" width="6" height="6" fill="#ff6b35" opacity=".12"/></svg>`,text:'Red and blue lights flash from an abandoned police cruiser. Doors open. Nobody inside. A military Humvee rumbles past, soldiers scanning rooftops.',caption:'The city is falling.'}
    ],
    text:`You pull the blinds back and freeze.

The street four floors below is chaos. A car is flipped on its side, still smoking. People are running — some in pajamas, some barefoot. And behind them, others are moving wrong. Stumbling, lurching, fast when they shouldn't be. One of them catches a woman by the hair and drags her down. You look away before you see the rest.

Red and blue lights flash from a police cruiser at the intersection, but the doors are open and nobody's inside. A military Humvee rolls past, soldiers on top scanning rooftops with mounted lights.

This isn't a riot. This isn't a protest. The city is falling apart.

You need to move. But first — you need something to fight with.`,
    scene:'dark',mood:'#d63031',
    effects:{flags:{saw_outside:true}},
    choices:[
      {text:'Turn away from the window. Look around.',next:'zo_weapon'},
      {text:'Step back. Push the bookshelf against the door.',next:'zo_barricade'}
    ]
  },
  zo_barricade:{
    text:`You shove the bookshelf against the front door. Drag the kitchen table behind it. Wedge a chair under the handle for good measure.

For twenty minutes, it feels like the right call. You sit in the dark, listening to the world end outside your window.

Then the scratching starts. Not at your door — at your neighbor's. Mrs. Chen's apartment, right next to yours. You hear her deadbolt turn. Her door opens. She says "Hello? Is someone—"

The scream cuts through the wall like it's paper.

Then silence. Then footsteps — slow, dragging — and something bumps against YOUR door. The bookshelf shifts an inch.

You can't stay here.`,
    scene:'dark',mood:'#e17055',
    effects:{flags:{tried_barricade:true}},
    choices:[
      {text:'Grab the kitchen knife and head for the fire escape',next:'zo_weapon_knife'},
      {text:'Go out the window to the fire escape — no time for weapons',next:'zo_fire_escape_bare'}
    ]
  },
  zo_weapon:{
    text:`You move through the apartment fast, adrenaline making everything sharp. What do you have?

The kitchen: a chef's knife, a cast iron skillet, a drawer full of utensils. The closet: a baseball bat from your college league days, still wrapped in athletic tape. The bathroom: nothing useful. Under the bed: a crowbar you forgot about from when you moved in.

You can carry one main weapon and one backup. Choose wisely — you don't know what's waiting in the hallway.`,
    scene:'dark',mood:'#636e72',
    choices:[
      {text:'Baseball bat — reach and power',next:'zo_hallway',effects:{inventory:['Baseball bat'],flags:{weapon:'bat'}}},
      {text:'Crowbar — versatile, can pry doors open too',next:'zo_hallway',effects:{inventory:['Crowbar'],flags:{weapon:'crowbar'}}},
      {text:'Chef\'s knife — light, fast, deadly',next:'zo_hallway',effects:{inventory:['Chef\'s knife'],flags:{weapon:'knife'}}},
      {text:'Cast iron skillet — nothing gets through this',next:'zo_hallway',effects:{inventory:['Cast iron skillet'],flags:{weapon:'skillet'}}}
    ]
  },
  zo_weapon_knife:{
    text:`You yank the biggest knife from the block. It's an 8-inch chef's knife — sharp, solid, terrifying in your shaking hand.

The thing on the other side of your door groans. The bookshelf scrapes another inch.

The fire escape. Now.`,
    scene:'dark',mood:'#e17055',
    effects:{inventory:['Chef\'s knife'],flags:{weapon:'knife'}},
    choices:[
      {text:'Go out the bedroom window to the fire escape',next:'zo_fire_escape'}
    ]
  },
  zo_fire_escape_bare:{
    text:`No time. You wrench the bedroom window open. The cold night air hits you like a wall. The fire escape is old, rusted, groaning under your weight as you climb out.

Below, the alley is empty. Above, someone's apartment has a light on — fifth floor. You're on the fourth.

You have nothing to defend yourself with. That's going to be a problem.`,
    scene:'dark',mood:'#636e72',
    effects:{flags:{no_weapon:true}},
    choices:[
      {text:'Climb down to the alley',next:'zo_alley'},
      {text:'Climb up — maybe the neighbor has supplies',next:'zo_upstairs',check:{stat:'str',dc:10}}
    ]
  },
  zo_fire_escape:{
    text:`You slide the window open and step onto the fire escape. The metal is cold under your bare feet — you didn't even grab shoes.

Four floors up, the city spreads before you like a war zone. Fires burning in three places you can see. The distant crackle of gunfire — semi-automatic, not police issue. The helicopter has moved east.

Below, the alley looks clear. Above, there's a light on — fifth floor apartment. Down is faster. Up might have supplies, allies, information.`,
    scene:'dark',mood:'#636e72',
    choices:[
      {text:'Climb down to the alley — speed matters',next:'zo_alley'},
      {text:'Climb up to the lit apartment — strength in numbers',next:'zo_upstairs',check:{stat:'str',dc:8}},
      {text:'Listen carefully before moving',next:'zo_listen',check:{stat:'per',dc:10}}
    ]
  },
  zo_hallway:{
    text:`You crack your apartment door open. The hallway fluorescents are flickering — one burned out, the other buzzing like an angry wasp.

The smell hits you first. Copper and something rotten, sweet and horrible. There's a dark smear on the wall near the elevator. The elevator doors are jammed half-open, light blinking inside, empty.

The stairwell door is at the end of the hall. Between you and it: four apartment doors. All closed. One of them has scratch marks around the handle.

Something thumps behind door 4B.`,
    scene:'dark',mood:'#e17055',
    choices:[
      {text:'Move fast — straight to the stairwell',next:'zo_stairwell',check:{stat:'cou',dc:8}},
      {text:'Move carefully, hugging the wall',next:'zo_hallway_careful',check:{stat:'per',dc:10}},
      {text:'Check door 4B — someone might need help',next:'zo_door_4b'}
    ]
  },
  zo_door_4b:{
    text:`You approach 4B. The scratch marks are deep — gouged into the wood like someone used their fingernails. Through the door, you hear the thumping again. Rhythmic. Like someone hitting their head against a wall.

You knock softly. "Hello? You okay in there?"

The thumping stops.

Silence.

Then BANG — something slams against the door from inside. The whole frame shudders. Again. BANG. The hinges groan. Whatever's in there, it's not looking for help. It's trying to get out.

And it heard you.`,
    scene:'dark',mood:'#d63031',
    effects:{flags:{alerted_4b:true}},
    choices:[
      {text:'RUN to the stairwell',next:'zo_stairwell_run'},
      {text:'Back away slowly, don\'t make more noise',next:'zo_stairwell',check:{stat:'per',dc:12}}
    ]
  },
  zo_hallway_careful:{
    text:`You press against the wall, sliding forward inch by inch. Your ears pick up everything — the fluorescent buzz, a distant scream, water running somewhere.

[PERCEPTION CHECK PASSED]

You notice two things: the dark smear on the wall isn't just blood — it trails into apartment 4C, whose door is slightly ajar. And under the stairwell door, you can see shadows moving. Multiple shadows. At least two, maybe three figures, shuffling in the stairwell below.

The fire escape at the end of the hall might be the smarter exit.`,
    scene:'dark',mood:'#636e72',
    effects:{flags:{noticed_stairwell_danger:true}},
    choices:[
      {text:'Take the fire escape instead',next:'zo_fire_escape'},
      {text:'Risk the stairwell anyway — it\'s faster',next:'zo_stairwell_danger'}
    ]
  },
  zo_stairwell:{
    text:`You push through the stairwell door. The echo of your footsteps bounces off concrete walls. Emergency lighting casts everything in a dim red glow.

You start descending. Third floor — clear. Second floor — a door hangs off its hinges, but nothing moves. First floor — the exit to the lobby is right there.

Through the small window in the door, you can see the lobby. The front desk is overturned. Glass from the entrance is shattered across the tile. And standing in the middle of it all, swaying slightly, is what used to be the building's security guard. His uniform is soaked dark. His head tilts at an angle that shouldn't be possible.

He hasn't seen you yet.`,
    scene:'dark',mood:'#d63031',
    choices:[
      {text:'Try to sneak past him to the front entrance',next:'zo_sneak_lobby',check:{stat:'per',dc:11}},
      {text:'Fight him — he\'s between you and freedom',next:'zo_fight_guard',check:{stat:'str',dc:9}},
      {text:'Go back up and use the fire escape',next:'zo_fire_escape'}
    ]
  },
  zo_stairwell_run:{
    text:`You bolt. Behind you, door 4B splinters. You don't look back.

The stairwell door slams open as you hit it at full speed. You take the stairs three at a time, hand on the railing, feet barely touching. Above you, the hallway door crashes open again — it followed you.

You can hear it. Fast. Faster than it should be. Bare feet slapping concrete, a wet snarling sound that echoes down the stairwell.

You hit the ground floor. The lobby door is right there.`,
    scene:'dark',mood:'#d63031',
    effects:{flags:{being_chased:true}},
    choices:[
      {text:'Burst through to the lobby — don\'t stop',next:'zo_lobby_run'},
      {text:'Slam the stairwell door shut behind you and barricade it',next:'zo_barricade_stair',check:{stat:'str',dc:11}}
    ]
  },
  zo_stairwell_danger:{
    text:`You know they're there. You push the door open slowly, carefully.

Two figures on the landing below. Both in pajamas — residents. One missing an arm below the elbow, still dripping. The other's jaw hangs at a wrong angle. They're not moving, just standing. Waiting.

You have one chance to get past before they react.`,
    scene:'dark',mood:'#d63031',
    choices:[
      {text:'Sprint past them — speed and surprise',next:'zo_sprint_past',check:{stat:'cou',dc:10}},
      {text:'Fight through them',next:'zo_fight_two',check:{stat:'str',dc:13}},
      {text:'Go back — take the fire escape',next:'zo_fire_escape'}
    ]
  },
  zo_alley:{
    text:`Your feet hit the alley pavement. Cold, wet, scattered with trash. The fire escape ladder retracts above you with a clang that echoes too loud.

The alley runs north-south. South leads to the main street — you can see the flashing lights, hear the chaos. North leads deeper into the block, toward the back parking lot and the convenience store on the corner.

A rat shoots past your ankle. Somewhere above, glass breaks.

You're outside now. The apartment was a cage, but at least it had walls. Out here, you're exposed.`,
    scene:'dark',mood:'#636e72',
    choices:[
      {text:'Head south to the main street — find help, find the military',next:'zo_main_street'},
      {text:'Go north to the convenience store — supplies first',next:'zo_store'},
      {text:'Check the parking lot for a car',next:'zo_parking',check:{stat:'lck',dc:10}}
    ]
  },
  zo_store:{
    text:`The QuikMart on the corner still has power — the neon "OPEN 24HRS" sign flickers blue and red. The door is ajar. One of the front windows is cracked but holding.

Inside, it's been partially looted. Shelves knocked over, cereal and chips scattered across the floor. But the back shelves — water, canned food, first aid — look mostly untouched. People grabbed the easy stuff and ran.

Behind the counter, the register is open and empty. No cashier. A small TV on the counter plays static.

Then you hear it: someone crying. Quietly. Coming from the back storage room.`,
    scene:'dark',mood:'#00b894',
    choices:[
      {text:'Call out: "Hello? I\'m not going to hurt you"',next:'zo_store_call'},
      {text:'Stay quiet, grab supplies, leave fast',next:'zo_store_grab',check:{stat:'per',dc:9}},
      {text:'Approach the storage room carefully',next:'zo_store_approach',check:{stat:'cou',dc:10}}
    ]
  },
  zo_store_call:{
    text:`"Hello? I'm not going to hurt you."

The crying stops. A pause that stretches forever.

Then a small voice: "Are you... are you normal?"

"Yeah. Yeah, I'm normal."

The storage room door cracks open. A girl — early twenties, dark hair pulled back, wearing a convenience store vest with a name tag that says MAYA. Her eyes are red, mascara streaked. She's holding a box cutter in a white-knuckle grip.

"I've been in here since it started," she says. "My manager — he turned. Right in front of me. I locked myself in and I've been—" Her voice breaks. She takes a breath. "Are there more of you? Is anyone coming to help?"`,
    scene:'dark',mood:'#00b894',
    effects:{flags:{met_maya:true},relationships:{maya:2}},
    choices:[
      {text:'"I don\'t know. But we should stick together."',next:'zo_ch1_end_maya',effects:{relationships:{maya:2},flags:{allied_maya:true}}},
      {text:'"I saw military out there. We need to reach them."',next:'zo_ch1_end_maya',effects:{relationships:{maya:1}}},
      {text:'"Honestly? I have no idea what\'s going on. But I\'m getting out of the city."',next:'zo_ch1_end_maya',effects:{relationships:{maya:1},flags:{plan_escape:true}}}
    ]
  },
  zo_ch1_end_maya:{
    text:`Maya nods slowly. She wipes her eyes with the back of her hand, then straightens up. Something in her shifts — from terrified cashier to someone deciding to survive.

"Okay," she says. "Let me grab the first aid kit. There's a back exit that leads to the loading dock. My car's parked out there — if it hasn't been taken."

She moves to the supply shelf, starts shoving water bottles and bandages into a canvas bag. Efficient. Focused. Whatever she was ten minutes ago, she's not that anymore.

You have a weapon. You have a companion. You have supplies. And outside, the city is burning.

Chapter 1 is just the beginning.

---

CHAPTER 1 COMPLETE

Your choices, your stats, and your relationships will carry forward into Chapter 2: "No Safe Haven" — where the real survival begins.`,
    scene:'dark',mood:'#00b894',
    effects:{flags:{chapter1_complete:true}},
    choices:[
      {text:'Begin Chapter 2: No Safe Haven',next:'zo_ch2_maya'}
    ]
  },
  zo_main_street:{
    text:`You step onto the main street and immediately regret it.

It's a warzone. Two cars are burning. A bus has crashed into a storefront, its passengers long gone — or worse. The military Humvee you saw earlier is stopped in the middle of the intersection, engine running, but the soldiers are gone. One of their rifles lies on the ground next to a pool of blood.

To your left: a group of survivors huddled behind an overturned delivery truck, waving at you. Five, maybe six people. To your right: the Humvee. A working vehicle with military equipment.

Something is approaching from the south. You can hear them — shuffling footsteps, dozens of them, getting closer.`,
    scene:'dark',mood:'#d63031',
    choices:[
      {text:'Join the survivor group — safety in numbers',next:'zo_ch1_end_group',effects:{flags:{joined_group:true}}},
      {text:'Go for the Humvee',next:'zo_ch1_end_humvee',check:{stat:'cou',dc:11}},
      {text:'Run north — avoid all of it',next:'zo_store'}
    ]
  },
  zo_ch1_end_group:{
    text:`You sprint to the overturned truck. Hands reach out and pull you behind cover.

"You bit?" A big guy with a shaved head and blood on his shirt grabs your shoulder. "ARE YOU BIT?"

"No! No, I'm fine."

He stares at you for three seconds, reading your face. Then nods. "Alright. I'm Marcus. We're heading for the school — it's built like a fortress. Thick walls, one entrance. We can hold it."

The group: Marcus, a retired cop. Two college students clutching each other. An older woman with a limp. A kid, maybe twelve, silent and wide-eyed.

Six strangers. One plan. And the horde is three blocks away.

---

CHAPTER 1 COMPLETE

You've found a group. But trust is fragile, supplies are low, and the school might already be overrun.

Chapter 2: "No Safe Haven" — coming soon.`,
    scene:'dark',mood:'#00b894',
    effects:{flags:{chapter1_complete:true}},
    choices:[
      {text:'Begin Chapter 2: No Safe Haven',next:'zo_ch2_group'}
    ]
  },
  zo_ch1_end_humvee:{
    text:`You run for the Humvee. Your feet pound the asphalt. The shuffling from the south is getting louder — you can see them now, a mass of figures emerging from the smoke.

You reach the Humvee. The keys are in the ignition. An M4 rifle sits in the mount. A pack of MREs and a radio on the back seat. The radio crackles: "...all units fall back to Rally Point Alpha... overrun... God, they're everywhere..."

You climb in, slam the door, and twist the key. The diesel engine roars to life.

The horde reaches the intersection behind you. Dozens of them. Hundreds.

You floor it.

---

CHAPTER 1 COMPLETE

You have a military vehicle, a weapon, and a radio. But you're alone, and Rally Point Alpha might already be gone.

Chapter 2: "No Safe Haven" — coming soon.`,
    scene:'dark',mood:'#00b894',
    effects:{flags:{chapter1_complete:true},inventory:['M4 Rifle','Military Radio','MREs']},
    choices:[
      {text:'Begin Chapter 2: No Safe Haven',next:'zo_ch2_humvee'}
    ]
  }
};

// Add pass/fail variants for stat checks
ZOMBIE_NODES.zo_listen = {
  text:`You press your ear to the railing and listen.

[PERCEPTION CHECK PASSED]

Below: two, maybe three of them shuffling on the second floor landing. Their breathing is wrong — gurgling, like fluid in the lungs.

Above: nothing. The fifth floor apartment with the light is quiet. Could be empty. Could be someone hiding. Could be a trap.

But you also hear something else — far below, in the alley. An engine idling. Someone has a car running down there.`,
  scene:'dark',mood:'#636e72',
  effects:{flags:{heard_car:true}},
  choices:[
    {text:'Go down carefully — aim for that car',next:'zo_alley',effects:{flags:{knows_car_location:true}}},
    {text:'Climb up to the fifth floor',next:'zo_upstairs'}
  ]
};
ZOMBIE_NODES.zo_upstairs = {
  text:`You climb up. The fifth floor window is cracked open, curtains blowing.

You pull yourself through into a clean, well-lit apartment. Someone was here recently — coffee still warm on the counter, laptop open on a news feed that stopped updating thirty minutes ago.

On the kitchen table: a backpack already packed. Water, granola bars, a flashlight, a first aid kit, and a note: "Going to the roof. Helicopter evac at dawn. — R.T."

The roof. If there's an evac...`,
  scene:'dark',mood:'#636e72',
  effects:{inventory:['Flashlight','First aid kit','Granola bars']},
  choices:[
    {text:'Head to the roof',next:'zo_ch1_end_roof'},
    {text:'Take the supplies and go down to the alley',next:'zo_alley'}
  ]
};
ZOMBIE_NODES.zo_ch1_end_roof = {
  text:`You take the stairs to the roof. The door is already open.

The city stretches before you in every direction. Fires painting the skyline orange. The distant thud of explosions — the military is bombing something. Somewhere east, a massive column of smoke rises from what might be the hospital.

And in the sky, a helicopter. Moving away from you, searchlight sweeping. It's heading east.

On the roof: a flare gun and two flares, left behind. And a fresh set of scratch marks on the door you just came through — from the outside.

Someone was up here. They already got picked up. Or they didn't.

You have the high ground. You have flares. Dawn is five hours away.

---

CHAPTER 1 COMPLETE

You chose the roof. Rescue might come — or the dawn might bring something worse.

Chapter 2: "No Safe Haven" — coming soon.`,
  scene:'dark',mood:'#00b894',
  effects:{flags:{chapter1_complete:true},inventory:['Flare gun','Flares x2']},
  choices:[
    {text:'Begin Chapter 2: No Safe Haven',next:'zo_ch2_roof'}
  ]
};
// Additional zombie fail nodes
ZOMBIE_NODES.zo_sneak_lobby = {text:'You crouch low and slide along the wall. The guard doesn\'t turn. You reach the entrance \u2014 shattered glass crunches under your foot. He twitches but you\'re already through. The street swallows you into the night.',scene:'dark',mood:'#636e72',choices:[{text:'Head for the main street',next:'zo_main_street'},{text:'Cut through the alley',next:'zo_alley'}]};
ZOMBIE_NODES.zo_fight_guard = {text:'You swing hard. The impact shudders up your arm. The guard stumbles, reaches for you with grey fingers. You hit again — and again. It goes down. Stays down.\n\nYour hands are shaking. That was a person. Was.\n\nThe lobby entrance is clear. Outside: the street, or the alley.',scene:'dark',mood:'#e17055',effects:{flags:{first_kill:true}},choices:[{text:'Head for the main street',next:'zo_main_street'},{text:'Cut through the alley',next:'zo_alley'}]};
ZOMBIE_NODES.zo_lobby_run = {text:'You burst through the lobby door. The security guard — what\'s left of him — turns. You don\'t slow down. You hurdle the overturned desk, your feet hit broken glass, pain flares but you keep running. Through the shattered entrance, into the night air.\n\nBehind you, the thing from 4B crashes into the lobby. But you\'re already gone.',scene:'dark',mood:'#e17055',effects:{flags:{first_kill:false}},choices:[{text:'Main street — find help',next:'zo_main_street'},{text:'Alley — stay hidden',next:'zo_alley'}]};
ZOMBIE_NODES.zo_barricade_stair = {text:'You grab a fire extinguisher from the wall mount and jam it through the door handle. The thing slams into the door — once, twice — but the handle holds. For now.\n\nYou\'re in the lobby. The entrance is right there.',scene:'dark',mood:'#636e72',choices:[{text:'Check the lobby carefully',next:'zo_stairwell'},{text:'Head straight outside',next:'zo_alley'}]};
ZOMBIE_NODES.zo_sprint_past = {text:'You take the stairs at a dead sprint. The two figures react — too slow. One grabs at your shirt, fingers scraping fabric, but you rip free. The other lunges and misses entirely.\n\nYou\'re past them. Ground floor. The lobby waits.',scene:'dark',mood:'#636e72',choices:[{text:'Enter the lobby',next:'zo_stairwell'}]};
ZOMBIE_NODES.zo_fight_two = {text:'Two on one. Bad odds.\n\nThe one-armed one is faster. It lunges — you swing and connect. It crumples against the railing. The jaw-broken one comes from your left. You dodge, slam it into the wall. It doesn\'t stay down. You hit it again. And again.\n\nBoth stop moving. You\'re breathing hard, covered in something you don\'t want to think about.\n\nGround floor. Almost out.',scene:'dark',mood:'#d63031',effects:{flags:{first_kill:true}},choices:[{text:'Continue to the lobby',next:'zo_stairwell'}]};
ZOMBIE_NODES.zo_parking = {text:'The parking lot is mostly empty. Three cars remain. One has keys in the visor — an old Honda Civic. It starts on the third try.\n\nYou have transportation. Where do you go?',scene:'dark',mood:'#636e72',effects:{inventory:['Honda Civic'],flags:{has_car:true}},choices:[{text:'Drive to the main street — find other survivors',next:'zo_main_street'},{text:'Drive to the convenience store — stock up first',next:'zo_store'}]};
ZOMBIE_NODES.zo_store_grab = {text:'You move through the store quickly, filling your pockets and a plastic bag. Water bottles, a first aid kit, two cans of beans, a lighter, batteries.\n\n[PERCEPTION CHECK PASSED]\n\nYou notice a baseball bat behind the counter — the cashier\'s. And the crying from the back has stopped. Whoever was there heard you moving around.\n\nThe loading dock exit is to your right. The front door is behind you.',scene:'dark',mood:'#636e72',effects:{inventory:['Water bottles','First aid kit','Canned food','Lighter']},choices:[{text:'Call out to whoever\'s in the back',next:'zo_store_call'},{text:'Take the bat and leave through the loading dock',next:'zo_ch1_end_solo',effects:{inventory:['Baseball bat']}}]};
ZOMBIE_NODES.zo_store_approach = {text:'You move toward the storage room. The crying gets louder, then stops abruptly — they heard you.\n\nThe door is cracked open. Through the gap, you see movement. Someone small, pressed into the corner.',scene:'dark',mood:'#636e72',choices:[{text:'"Hey. I\'m not infected. Are you okay?"',next:'zo_store_call'},{text:'Push the door open slowly',next:'zo_store_call'}]};
ZOMBIE_NODES.zo_ch1_end_solo = {text:'You step out onto the loading dock. The alley behind the store is quiet. No movement. No sound except distant gunfire and the low hum of a city dying.\n\nYou have supplies. You have a weapon. You have no one.\n\nSometimes alone is safer. Sometimes it just means no one hears you scream.\n\n---\n\nCHAPTER 1 COMPLETE\n\nYou chose to go alone. Speed and stealth are your advantages — but every fight is yours alone.',scene:'dark',mood:'#636e72',effects:{flags:{chapter1_complete:true,went_solo:true}},choices:[{text:'Begin Chapter 2: No Safe Haven',next:'zo_ch2_solo'}]};

// ============================================================
// SCENARIO DATA — ZOMBIE OUTBREAK (Chapter 2: No Safe Haven)
// ============================================================

// --- CHAPTER 2 OPENING NODES (one per Ch1 ending path) ---

ZOMBIE_NODES.zo_ch2_maya = {text:'Three hours have passed since the city started dying.\n\nMaya drives. You ride shotgun. Her car — a battered Corolla with a cracked dashboard and an air freshener shaped like a pine tree — smells like fear and antiseptic.\n\nShe hasn\'t said much. Neither have you. The radio cycles between static and fragments of emergency broadcast: "...National Guard perimeter has been moved... all civilians should proceed to..." More static. Then silence.\n\nYou\'re on the interstate now. Or what\'s left of it. Two lanes of the highway are jammed with abandoned cars stretching north as far as you can see. Maya threads the Corolla through the shoulder, headlights cutting the dark.\n\n"We need gas," she says. Her voice is flat, controlled. "And we\'re going to run out in about twelve miles."\n\nAhead, through the windshield, you can see a glow — amber and steady. A gas station. Its lights are still on.\n\n"Pull over there," you say.\n\nShe glances at you. "What if it\'s not safe?"\n\nYou look at the fuel gauge. Almost on E.\n\n"What if we don\'t?"',scene:'dark',mood:'#d63031',effects:{flags:{ch2_started:true,ch2_path:'maya'}},choices:[{text:'Tell Maya to pull in carefully — lights off.',next:'zo_ch2_station_arrive'},{text:'Scout ahead on foot first.',next:'zo_ch2_scout_station',check:{stat:'per',dc:10}}]};

ZOMBIE_NODES.zo_ch2_group = {text:'The school was supposed to be safe.\n\nMarcus had said it with such certainty — thick walls, one entrance, built like a fortress. You\'d believed him. Everyone had.\n\nThe school\'s front gate is hanging off its hinges. The parking lot is littered with overturned chairs, scattered papers, a child\'s backpack ripped open. Something happened here before you arrived. Something bad.\n\nMarcus stands at the gate, jaw tight. The two college students — Danny and Priya — are huddled behind you. The older woman, Helen, has her hand pressed to her mouth. The kid, Cody, stares at the ground.\n\n"Secondary location," Marcus says, like he\'s reading from a manual. "We need secondary location." His voice is steady but his hands aren\'t. "There\'s a gas station about two miles west. Highway 9. We regroup, we reassess."\n\nHelen makes a sound that isn\'t quite a word. Danny says, "It\'s getting light. When it gets light, they can see us."\n\nMarcus looks at you. Not the others. You.\n\n"What do you think?"',scene:'dark',mood:'#e17055',effects:{flags:{ch2_started:true,ch2_path:'group'}},choices:[{text:'"Marcus is right. The gas station. We move now."',next:'zo_ch2_group_move',effects:{relationships:{marcus:1}}},{text:'"We should check the school first — there might be survivors."',next:'zo_ch2_school_check',check:{stat:'cou',dc:11}},{text:'"Split up. Half check the school, half move to the gas station."',next:'zo_ch2_group_split',check:{stat:'int',dc:12}}]};

ZOMBIE_NODES.zo_ch2_humvee = {text:'The Humvee chews through abandoned cars like they\'re cardboard, and for a while — maybe twenty minutes — you feel untouchable.\n\nThen the radio changes.\n\n"...Rally Point Alpha is no longer viable. Repeat: Alpha is gone. All surviving personnel should fall back to..." A burst of static. "...Highway 9 overpass. Highway 9 overpass. If you\'re reading this, we\'re at the—" The signal drops.\n\nHighway 9. You know that exit. Ten miles north.\n\nYou push the Humvee harder. The diesel engine growls. In the rearview mirror, the city is a smear of fire and smoke. Ahead, the highway is dark and mostly clear — a few abandoned cars you can push through.\n\nThen the fuel warning light blinks on.\n\nThe gauge reads an eighth of a tank. These things burn through diesel. There\'s a Chevron sign glowing ahead — lone light on an otherwise dark highway exit.\n\nYou can make it to the overpass on what\'s left. Probably. Or stop and see if the station has diesel.',scene:'dark',mood:'#636e72',effects:{flags:{ch2_started:true,ch2_path:'humvee'}},choices:[{text:'Stop at the gas station — fuel is survival.',next:'zo_ch2_station_arrive'},{text:'Push straight to the Highway 9 overpass.',next:'zo_ch2_overpass_arrive'},{text:'Radio the frequency again — try to reach the soldiers.',next:'zo_ch2_radio_call',check:{stat:'int',dc:10}}]};

ZOMBIE_NODES.zo_ch2_roof = {text:'The helicopter didn\'t come.\n\nDawn arrived instead — grey and cold, turning the smoke-painted sky into something almost beautiful if you didn\'t know what was burning. You fired the first flare at 5 AM when you thought you heard rotors. The sound was a passing car alarm echoing off the towers.\n\nYou have one flare left.\n\nBelow, the streets are quieter now. Not safe — quiet is different from safe. You\'ve been watching the infected move in the early light, and they\'re slower in the cold. Sluggish. They congregate in patches, like schools of fish.\n\nThe roof door is barricaded from your side. You\'ve been alone up here for four hours. Your water is gone. The granola bars are gone. Cody from 5B had built this little camp — sleeping bag, flare gun, a half-eaten energy bar — and then he left for the helicopter that never existed.\n\nYou need to move.\n\nThe fire escape on the north side of the building is clear. Below is the alley, and through the alley — about eight blocks west — you can see a gas station sign still glowing. One reliable landmark in a city that\'s lost all of them.',scene:'dark',mood:'#636e72',effects:{flags:{ch2_started:true,ch2_path:'roof'}},choices:[{text:'Descend the fire escape now while it\'s still quiet.',next:'zo_ch2_roof_descent'},{text:'Fire the last flare first — one more try.',next:'zo_ch2_last_flare'}]};

ZOMBIE_NODES.zo_ch2_solo = {text:'Alone, you move faster. That\'s what you told yourself stepping off the loading dock. That\'s what you\'re still telling yourself four hours later, legs burning, backpack heavy, moving through a city that\'s forgotten how to be quiet.\n\nYou know the streets. You\'ve lived here three years. That counts for something.\n\nYou\'ve avoided two clusters of infected by cutting through alleys. You watched a man get dragged into a parking structure on 7th. You didn\'t stop. You kept your head down. You kept moving.\n\nNorth. That\'s the plan. North, away from the dense neighborhoods, toward the highway where there might be military checkpoints, aid stations, something.\n\nThe gas station at the highway junction is still lit up — a beacon of normalcy in the middle of everything that isn\'t normal. A Chevron sign glowing yellow-and-red against the pre-dawn sky.\n\nAs you get closer, you see a car parked at one of the pumps. Engine off, lights off. Someone else found this place first.',scene:'dark',mood:'#636e72',effects:{flags:{ch2_started:true,ch2_path:'solo'}},choices:[{text:'Approach carefully — call out to them.',next:'zo_ch2_station_arrive'},{text:'Hang back and watch them for a few minutes first.',next:'zo_ch2_scout_station',check:{stat:'per',dc:9}}]};

// --- CHAPTER 2 BRANCH NODES (pre-convergence) ---

ZOMBIE_NODES.zo_ch2_group_move = {text:'"We move." Marcus nods. He turns to the group, shoulders set. "Stay tight. Two columns. Danny, you\'re with me. Priya, Helen — stay between us. Cody, right in the middle, okay?"\n\nCody nods without looking up.\n\nThe road to the gas station is two miles through suburban streets — manicured lawns that feel wrong now, curtains drawn in every house. Twice you see infected: one standing in a driveway staring at nothing, one moving down an alley in the opposite direction. Both times, Marcus signals with his hand and the group freezes. Both times, they pass.\n\nAt the gas station, a light is on. A car is parked at one of the pumps, engine off.\n\n"Someone\'s there," Priya whispers.\n\nMarcus looks at you again.',scene:'dark',mood:'#636e72',choices:[{text:'Approach openly — show them you\'re not a threat.',next:'zo_ch2_station_arrive'},{text:'Hang back and let Marcus take point.',next:'zo_ch2_station_arrive',effects:{relationships:{marcus:1}}}]};

ZOMBIE_NODES.zo_ch2_school_check = {text:'"Two minutes," you say. "We check the school, two minutes, then we go."\n\nMarcus looks like he wants to argue but doesn\'t.\n\nInside the school, the story writes itself on the walls and floors. The cafeteria was being used as a staging area — cots, water jugs, a first aid station. Someone had a plan here. That plan ended violently. The cafeteria windows are broken inward.\n\nBut in the teachers\' lounge — locked, barricaded from the inside — you hear breathing. Then a voice:\n\n"Who\'s there?"\n\nFemale. Calm. Not panicked. The voice of someone who has already burned through her panic budget and come out the other side.\n\n"Survivors," you say. "We\'re moving to Highway 9. Do you want to come?"\n\nA pause. The sound of furniture scraping. Then the door opens.\n\nShe\'s about forty, wearing scrubs under a bloodied jacket. Short hair, practical. A metal rod in her right hand — part of a IV stand, bent into something useful. Her eyes assess you in about one second flat.\n\n"I\'m Ellen," she says. "People call me Doc. I\'m a nurse. I\'ve got medical supplies in here and I know how infections spread." She doesn\'t smile. "Tell me your plan."',scene:'dark',mood:'#e17055',effects:{flags:{met_doc:true},relationships:{doc:2}},choices:[{text:'Explain the gas station plan. Be honest about how little you know.',next:'zo_ch2_meet_doc',effects:{relationships:{doc:1}}},{text:'"We\'re figuring it out as we go. Want to help figure?"',next:'zo_ch2_meet_doc',effects:{relationships:{doc:2}}},{text:'"We have a former cop. He has a plan."',next:'zo_ch2_meet_doc'}]};

ZOMBIE_NODES.zo_ch2_group_split = {text:'"Split up. Half check the school, half move to the gas station."\n\nMarcus frowns. "Divide and conquer in a zombie apocalypse. Solid strategy."\n\n"Got a better one?"\n\nHe doesn\'t. You take Danny with you to check the school. Marcus takes the others to the gas station. You find a nurse named Ellen — Doc — barricaded in the teachers\' lounge with a bag of medical supplies and the kind of composure that comes from spending a decade in an ER.\n\nYou reunite at the gas station twenty minutes later. It costs you time, but you arrive with an extra person who knows how to suture a wound and set a bone. In the apocalypse, that\'s not nothing.\n\nDanny is pale when you arrive. Helen is sitting on the curb, shoes off, rubbing her feet. Cody hasn\'t moved from Marcus\'s side.\n\n"Found someone," you tell Marcus.\n\nHe looks at Doc. Doc looks at him. Some silent assessment happens.\n\n"Ellen," she says, extending her hand. "ER nurse. I\'m useful."\n\n"Marcus." He shakes it. "Former cop. Let\'s hope we both stay that way."',scene:'dark',mood:'#636e72',effects:{flags:{met_doc:true},relationships:{doc:1,marcus:1}},choices:[{text:'Continue to the gas station.',next:'zo_ch2_station_arrive'}]};

ZOMBIE_NODES.zo_ch2_overpass_arrive = {text:'The overpass is empty.\n\nNot abandoned-in-a-hurry empty. Empty like something swept through it. Equipment crates are overturned. A military radio setup sits on a folding table, screen dark. Two rifles leaning against the railing — no one drops their rifle unless they had no choice.\n\nYou find dog tags. Private First Class M. Reyes. You put them in your pocket.\n\nThe fuel gauge blinks. You have maybe twenty miles of diesel left.\n\nBut in one of the equipment crates, still sealed in plastic wrap, you find: four MREs, a hand-crank radio, a medical kit, and a rolled-up map of the county with notations in black marker. Highway 9 north is circled. And written beside it in the same handwriting: CAMP NORTHFIELD — REFUGEE STAGING — 20 MI.\n\nA refugee camp. Twenty miles north.\n\nYou sit in the Humvee, crank the hand radio, and wait for something to come through the static.',scene:'dark',mood:'#636e72',effects:{inventory:['Hand-crank radio','County map','MREs x4','Medical kit']},choices:[{text:'Head back south — the gas station might have diesel.',next:'zo_ch2_station_arrive'},{text:'Try the hand-crank radio.',next:'zo_ch2_radio_broadcast'}]};

ZOMBIE_NODES.zo_ch2_radio_call = {text:'You reach for the military radio. The frequency is pre-set — you try it.\n\n"This is a civilian using abandoned military equipment on Highway 9. Any survivors copy?"\n\nStatic. You try again. Third time:\n\n"Highway 9 civilian — this is Sergeant Okafor, 3rd National Guard. Where are you exactly?"\n\nYour heart hammers. "Chevron station, Highway 9 exit 14. I have a Humvee and weapons. What\'s happening out there?"\n\nA pause. "Listen carefully. Do not go to Rally Point Alpha. Do not go to the city center. There is a civilian staging area — Camp Northfield — twenty miles north of your position on Highway 9. They have medical, food, structure. But—" Static spike. "—be careful who you trust at the checkpoints. The camp has... issues. Okafor out."\n\nThe radio goes dead.\n\n\'Issues.\'\n\nThe gas station sign glows ahead of you. You need fuel. But now you have a destination.',scene:'dark',mood:'#e17055',effects:{flags:{heard_about_camp:true,camp_warning:true}},choices:[{text:'Pull into the gas station.',next:'zo_ch2_station_arrive'}]};

ZOMBIE_NODES.zo_ch2_roof_descent = {text:'The fire escape groans under your weight, each landing a negotiation between rust and gravity.\n\nThird floor: a window\'s broken, curtains flapping — don\'t look in, keep moving. Second floor: something drags below you in the alley, sees you, starts moving toward the building. You freeze. It bumps against the dumpster below and loses interest, drifts south.\n\nGround floor. The alley is empty except for the dumpster and a bicycle with a flat tire. You take the bicycle anyway — a flat tire is quieter than footsteps.\n\nEight blocks west on the busted bike, steering with your knees over cracks in the asphalt, backpack bouncing. The gas station grows from a smear of light into a recognizable building — canopy, pumps, a small convenience store. Still lit. Still standing.\n\nThere are people there. A car at the pumps. A shape moving behind the glass inside the store.\n\nYou ditch the bike behind a hedge and watch for a minute.',scene:'dark',mood:'#636e72',choices:[{text:'Head straight in — you\'re desperate for water.',next:'zo_ch2_station_arrive'},{text:'Watch a little longer before committing.',next:'zo_ch2_scout_station',check:{stat:'per',dc:9}}]};

ZOMBIE_NODES.zo_ch2_last_flare = {text:'You raise the flare gun and fire into the lightening sky.\n\nThe red star arcs up, blazing, trailing smoke. Beautiful and desperate in equal measure.\n\nYou watch it until it burns out. The sky swallows it.\n\nNo helicopter. No change. Just the distant sounds of a city that\'s stopped pretending.\n\nYou have no flares left now.\n\nThe fire escape is your only option.',scene:'dark',mood:'#d63031',effects:{flags:{fired_last_flare:true}},choices:[{text:'Descend the fire escape.',next:'zo_ch2_roof_descent'}]};

// --- CONVERGENCE: GAS STATION ---

ZOMBIE_NODES.zo_ch2_scout_station = {text:'You find a vantage point — a low wall by the station\'s edge — and watch.\n\nThe car at the pump is a blue sedan, Maine plates, one rear door hanging open like someone left in a hurry. No one inside from what you can tell.\n\nInside the station\'s convenience store, movement. A figure behind the counter — moving normally. Human-normal. Doing something with their hands, bent over the counter. No one else visible.\n\nThe lot is clean. No bodies, no blood. Someone cleared it or the station was just far enough from the blast zones to be passed over.\n\nEverything looks quiet.\n\n[PERCEPTION CHECK PASSED]\n\nYou notice something else: on the side of the building, half-hidden behind a dumpster, a motorcycle. An older model, but maintained. Running gear leaning against it. Whoever is in there arrived on that bike.',scene:'dark',mood:'#636e72',effects:{flags:{scouted_station:true,noticed_motorcycle:true}},choices:[{text:'Move in. Announce yourself.',next:'zo_ch2_station_arrive'},{text:'Watch the window — try to read the person inside.',next:'zo_ch2_station_arrive'}]};

ZOMBIE_NODES.zo_ch2_station_arrive = {text:'The gas station smells like motor oil and burned coffee and, underneath both of those, something chemical — antiseptic.\n\nThe door chimes when you push it open. Behind the counter, a woman straightens up fast, hand going to something on the shelf behind her. She\'s wearing scrubs under a battered canvas jacket, hair pulled back short and practical. One eye is half-swollen — recent, maybe six hours old. A syringe is clipped to her front pocket like a pen.\n\nShe reads you in one beat. Not infected. Probably not hostile. Calculating her odds if she\'s wrong.\n\n"Store\'s open," she says. Her voice is flat and dry. "Take what you need. But if you come behind this counter, I will put you down."\n\nYou hold your hands up, show her your palms.\n\n"I\'m not infected. I\'m just trying to survive."\n\nSomething in her face loosens — the barest fraction. "Ellen Marsh. People call me Doc. Former ER nurse, current whatever-the-hell-this-is." She tilts her head. "You alone?"',scene:'dark',mood:'#636e72',effects:{flags:{met_doc:true,at_station:true}},choices:[{text:'"Yeah. Just me." Tell her the truth.',next:'zo_ch2_doc_talk',effects:{relationships:{doc:1}}},{text:'"I have people with me — they\'re right outside." (Group path)',next:'zo_ch2_doc_group',effects:{relationships:{doc:1}}},{text:'"I have a vehicle. Military Humvee." Play your hand early.',next:'zo_ch2_doc_humvee',effects:{relationships:{doc:1}}},{text:'Just move to grab supplies — keep it transactional.',next:'zo_ch2_doc_cold'}]};

ZOMBIE_NODES.zo_ch2_doc_talk = {text:'You tell her the condensed version. The apartment. The street. Getting out.\n\nShe listens without interrupting, which tells you something about her. When you\'re done, she nods once.\n\n"I had a shift at St. Vincent\'s when it started," she says. "Patient came in through the ER bay — bites on both arms, high fever. By the time we figured out what was wrong, he\'d bitten two orderlies and a nurse." She pauses. "That was six hours ago. I walked out. Just walked out."\n\nShe doesn\'t look guilty about it. She looks like someone who made the only decision that made sense and moved on.\n\n"Here\'s what I know," she continues. "It\'s transmittable by bite. Incubation is fast — forty minutes to two hours before symptoms. I don\'t know if it\'s airborne. I don\'t know if there\'s treatment. I know the military made this worse before they made it better, and I heard a broadcast about a refugee camp twenty miles north." She meets your eyes. "Highway 9. Camp Northfield. You heard anything about it?"',scene:'dark',mood:'#636e72',effects:{relationships:{doc:1}},choices:[{text:'"I heard about it. I was thinking of going there."',next:'zo_ch2_radio_broadcast',effects:{relationships:{doc:1}}},{text:'"I heard there are issues with the camp."',next:'zo_ch2_camp_warning',effects:{relationships:{doc:2}}},{text:'"Nothing. What do you know?"',next:'zo_ch2_radio_broadcast'}]};

ZOMBIE_NODES.zo_ch2_doc_group = {text:'Marcus comes in first, hand on his weapon. He and Doc stare at each other for a solid three seconds — two people who have spent their professional lives reading threat in a room, doing exactly that.\n\n"Former cop," Marcus says.\n\n"Former nurse," Doc says. "Current problem-solver."\n\nIt\'s not warmth. It\'s professional respect, which at the end of the world is close enough.\n\nThe group fills the small station — Danny and Priya sit on the floor near the snack aisle, eating mechanically. Helen finds a spot on a low freezer unit and closes her eyes. Cody drifts to the window and watches the road.\n\nDoc gives you a look that means: talk to me privately.\n\nShe moves to the far corner, near the coffee machine, and you follow.',scene:'dark',mood:'#636e72',effects:{relationships:{doc:1}},choices:[{text:'Follow Doc. Hear what she has to say.',next:'zo_ch2_doc_talk'}]};

ZOMBIE_NODES.zo_ch2_doc_humvee = {text:'Her expression doesn\'t change. But her eyes do.\n\n"Military Humvee," she repeats.\n\n"Keys in my pocket."\n\nShe processes that. You can see her doing the math — what a vehicle like that means in terms of mobility, safety, range. "Is it fully loaded?"\n\n"M4, radio, some MREs. Low on fuel."\n\nShe nods slowly. Then she comes around the counter — no weapon drawn, hands clear, a decision made. "I\'ve been sitting here trying to figure out whether to stay or go. The question was always how." She looks at you. "A Humvee changes the math."\n\n"The diesel pump out front — does it still work?"\n\nShe blinks. "You know, I didn\'t even check."',scene:'dark',mood:'#636e72',effects:{relationships:{doc:2}},choices:[{text:'Check the diesel pump together.',next:'zo_ch2_fuel_check'},{text:'Tell her about the camp first.',next:'zo_ch2_doc_talk'}]};

ZOMBIE_NODES.zo_ch2_doc_cold = {text:'You don\'t say anything more than necessary. She watches you load a bag — water, food, a first aid kit from the medical shelf. Professional, efficient, no eye contact.\n\n"Smart," she says, after a moment. "Knowing how to take what you need without owing anything to anyone." Her tone is neutral. Impossible to read.\n\nYou\'re almost out the door when she speaks again.\n\n"There\'s a broadcast. Hand-crank radio, back shelf. Plays on loop. About a refugee camp. You might want to hear it before you decide which direction you\'re going."\n\nYou stop. Look back.\n\nShe\'s already returned to whatever she was doing at the counter.',scene:'dark',mood:'#636e72',choices:[{text:'Find the radio and listen to the broadcast.',next:'zo_ch2_radio_broadcast'},{text:'Nod and keep walking. You\'ll figure it out.',next:'zo_ch2_radio_broadcast'}]};

ZOMBIE_NODES.zo_ch2_fuel_check = {text:'The diesel pump still has pressure. Either the station\'s underground tank is intact or someone left a generator running — you don\'t ask questions you don\'t need answered.\n\nThe Humvee takes seven minutes to fill. Doc stands watch, metal rod in hand — she picked it up somewhere, bent into something you wouldn\'t want aimed at your skull.\n\n"Full tank," you say, climbing out.\n\n"Good." She looks north up the highway, then back at the store. "I\'ve been listening to a broadcast. Hand-crank radio. About a refugee camp, twenty miles north." She pauses. "I have questions about it."\n\n"What kind of questions?"\n\n"The kind that mean we should go listen to it together."',scene:'dark',mood:'#636e72',effects:{flags:{humvee_fueled:true}},choices:[{text:'Go listen to the broadcast with her.',next:'zo_ch2_radio_broadcast'}]};

// --- MID-CHAPTER: THE BROADCAST ---

ZOMBIE_NODES.zo_ch2_radio_broadcast = {text:'The hand-crank radio is on the back shelf between motor oil and a rack of road maps. You wind it up and find the frequency.\n\n"—Camp Northfield is now operational. Civilian survivors on Highway 9 should proceed north to Mile Marker 31. The camp has food, medical facilities, clean water, and security. Capacity for five hundred. This is a joint military and FEMA operation. All survivors are welcome. Repeat: all survivors are welcome. Proceed to Mile Marker 31 on Highway 9. Camp North—"\n\nIt loops. The recording is clean, professional. Too professional, maybe — no background noise, no urgency in the voice.\n\nDoc crosses her arms. "Pre-recorded. That\'s not a live emergency broadcast."\n\n"So?"\n\n"So that means they set this up before things got this bad. Which means they knew." She looks at you. "Or they were very good at guessing."\n\nMarcus — or whoever else is with you — makes a sound that might be agreement. Might be discomfort. Hard to tell.\n\n"Twenty miles," you say. "Medical. Food. Security."\n\n"That\'s what they say." Doc turns the radio off. "In my experience, what people advertise is what they\'re most worried you\'ll find out they don\'t have."',scene:'dark',mood:'#e17055',effects:{flags:{heard_broadcast:true}},choices:[{text:'"We go. We check it out. We can always leave."',next:'zo_ch2_decide_camp',effects:{flags:{plan_camp:true}}},{text:'"I want to know more before we commit to walking into a military facility."',next:'zo_ch2_skeptic',effects:{flags:{camp_skeptic:true}}},{text:'"What if we find our own place? Twenty miles north, but off-road?"',next:'zo_ch2_wildcard'}]};

ZOMBIE_NODES.zo_ch2_skeptic = {text:'"Smart," Doc says, and you can tell she means it.\n\nYou spread the county map on the counter — or pull up the memory of it. Highway 9 north. Mile Marker 31. To the east of the highway, beyond the tree line, there\'s a reservoir and a state park. To the west, farmland, and beyond that, hills.\n\n"The broadcast said military and FEMA joint operation," you say. "In every emergency situation I\'ve ever read about, the first people those operations help are the ones they can control. They\'d quarantine everyone coming in."\n\n"They\'d have to," Doc agrees. "Infection control. Anyone who entered would be screened — probably held for an incubation period." She pauses. "Which is actually correct medical procedure. But."\n\n"But."\n\n"But it means once you\'re in, you\'re not necessarily getting out on your schedule." She taps the map. "And there\'s something else. I treated a man this morning — found him on the road, wound on his arm. He was coherent. He\'d come from the north." She meets your eyes. "He said the people running the camp weren\'t letting people leave."',scene:'dark',mood:'#d63031',effects:{flags:{heard_camp_warning:true}},choices:[{text:'"We go anyway. Knowledge is better than ignorance."',next:'zo_ch2_decide_camp',effects:{flags:{plan_camp:true}}},{text:'"Then we go north but don\'t enter the camp."',next:'zo_ch2_wildcard'},{text:'"Tell me more about this man. What else did he say?"',next:'zo_ch2_camp_intel'}]};

ZOMBIE_NODES.zo_ch2_camp_warning = {text:'Doc goes still.\n\n"What did you hear?"\n\nYou tell her — whatever warning you received, whatever source. She listens with the intensity of someone cataloging every word.\n\n"Consistent with what I\'ve seen," she says quietly. "I treated a man this morning. Found him on the road, coming from the north. He had a bite on his arm — fresh, clean margins, already sutured." She pauses. "Someone at the camp sutured him. And then someone at the camp told him to leave before the daily count. He understood what that meant, even if he didn\'t want to."\n\nYou think about what she\'s not saying.\n\n"They\'re experimenting on infected," you say.\n\n"I don\'t know that." She\'s careful with it. "I know they have people who can suture wounds, which means medical staff. I know they told him to leave quietly. I know the broadcast sounds rehearsed." She looks at you directly. "I know that every time someone sets up a facility and says \'don\'t leave,\' there\'s a reason."\n\nMile Marker 31. Twenty miles north.',scene:'dark',mood:'#d63031',effects:{flags:{heard_camp_warning:true},relationships:{doc:2}},choices:[{text:'"We still go. But we go ready."',next:'zo_ch2_decide_camp',effects:{flags:{plan_camp:true,going_in_ready:true}}},{text:'"We find another way. Off-grid."',next:'zo_ch2_wildcard'}]};

ZOMBIE_NODES.zo_ch2_camp_intel = {text:'His name was Garrett. He was a high school science teacher. He\'d arrived at Camp Northfield six days ago with his sister.\n\nHis sister is still there.\n\nHe was told to leave at 3 AM, quietly, without waking the people in his tent. He was told his sister would be "looked after." He was told it was for the safety of the group.\n\nHe had a bite on his forearm — not from the infected. From a medical procedure. An injection site, sutured over to look like a bite. Doc had seen it for what it was when she cleaned the wound.\n\n"Someone injected him with something," she says. "Then sutured the wound to look like a bite. Then told him to leave before anyone noticed." She lets that sit. "That\'s not refugee management. That\'s a study."\n\nThe radio loops its cheerful broadcast about food, water, and security.\n\n"They\'re experimenting on people," you say.\n\n"I don\'t know the mechanism. But yes. That\'s what the evidence suggests." She folds the county map carefully. "His sister is still in there."',scene:'dark',mood:'#d63031',effects:{flags:{know_about_experiments:true,garretts_sister:true}},choices:[{text:'"We go to the camp. We find out the truth — and maybe his sister."',next:'zo_ch2_decide_camp',effects:{flags:{plan_camp:true,rescue_mission:true}}},{text:'"This is too dangerous. We go off-grid."',next:'zo_ch2_wildcard'}]};

ZOMBIE_NODES.zo_ch2_wildcard = {text:'"There\'s another option," you say.\n\nYou find it on the map — east of Highway 9, past the tree line: Alderman Reservoir. State park land around it. A ranger station marked with a small square. Two access roads, both dirt. Off the main routes. Off the kind of routes that attract infected and desperate people in equal measure.\n\n"Ranger station could be stocked," Doc says slowly. "Park service keeps emergency supplies. Generator, probably. And water — there\'s the reservoir."\n\n"It\'s defensible. High ground on the east bank." You trace the road with your finger. "We could be there in forty minutes."\n\n"Could be occupied."\n\n"Could be empty."\n\nShe\'s quiet for a moment. Then: "The camp doesn\'t stop being a choice if we go there first. We could scout it. Learn what it actually is before we commit."\n\n"Or we skip the camp entirely."\n\n"Or we skip the camp entirely," she agrees.',scene:'dark',mood:'#636e72',effects:{flags:{found_wildcard:true}},choices:[{text:'Head to the ranger station — go off-grid.',next:'zo_ch2_road_north'},{text:'Scout the camp first, then decide.',next:'zo_ch2_decide_camp',effects:{flags:{plan_camp:true,plan_scout:true}}}]};

ZOMBIE_NODES.zo_ch2_decide_camp = {text:'You\'re going north. That much is settled.\n\nDoc pulls a canvas bag from behind the counter — already packed. Water, medical supplies, syringes still in wrappers, a notepad covered in tight handwriting. She\'s been here since before dawn, and she\'s been preparing.\n\n"Before we leave," she says, "we should talk about the road. It\'s twenty miles, and I\'ve been watching the highway from this window all night." She pauses. "It\'s not clear."\n\nShe describes what she\'s seen: a cluster of infected near the 7-Eleven three blocks north, moving slowly but unpredictably. A group of survivors — or people who look like survivors — camped at the overpass at exit 12. And something she doesn\'t have a word for: a military vehicle, blacked out, running north about two hours ago without lights.\n\n"The people at the overpass concern me," she says. "Three of them. Watching traffic. Armed."\n\nYou think about your route.',scene:'dark',mood:'#e17055',choices:[{text:'Head straight up the highway — speed over stealth.',next:'zo_ch2_road_north'},{text:'Cut through the residential streets — longer but quieter.',next:'zo_ch2_road_residential'},{text:'Deal with the overpass people before moving through.',next:'zo_ch2_overpass_encounter',check:{stat:'cha',dc:11}}]};

// --- CHAPTER 2 MID-SECTION: THE ROAD NORTH ---

ZOMBIE_NODES.zo_ch2_road_north = {text:'The road north is a cemetery of the ordinary.\n\nEvery mile tells a different story: a minivan on its side, doors open, a child\'s car seat hanging from the seatbelt. A row of motorcycles arranged in a neat line, engines cold, no bodies. A hand-painted sign nailed to a telephone pole — HELP US PLEASE 14 WALNUT RD — and nothing moving in the direction it points.\n\nYou pass through the infected cluster near the 7-Eleven without incident — they\'re focused on something else, a sound from the east, and you slide past on the far shoulder without a head turning. Small luck. The kind that doesn\'t come twice in the same day.\n\nThe overpass at exit 12 is ahead. Three figures. Sitting on the railing, legs dangling over the lane. They see you coming well before you reach them.\n\nOne raises a hand. Unclear whether it\'s a greeting or a warning.\n\n"Slow down," Doc says quietly.',scene:'dark',mood:'#e17055',choices:[{text:'Slow down and approach carefully.',next:'zo_ch2_hostile_encounter'},{text:'Don\'t slow down — accelerate through.',next:'zo_ch2_bypass_overpass',check:{stat:'cou',dc:10}}]};

ZOMBIE_NODES.zo_ch2_road_residential = {text:'The residential detour takes forty minutes instead of twenty, threading through cul-de-sacs and one-lane roads where the houses watch you with dark windows.\n\nYou pass one house with every light on — blazing, defiant, curtains open. A family sits at a kitchen table. They don\'t wave. They just watch you pass. You don\'t stop. Nobody does anything that makes sense anymore.\n\nAt the junction back to Highway 9, before the overpass, you can see the three figures Doc mentioned from a different angle. One of them is clearly watching the highway southbound. They\'re not watching the residential junction.\n\nYou have options the highway approach wouldn\'t have given you.',scene:'dark',mood:'#636e72',effects:{flags:{took_residential:true}},choices:[{text:'Slip onto the highway behind the overpass — avoid them entirely.',next:'zo_ch2_bypass_clean'},{text:'Approach the figures from their blind side.',next:'zo_ch2_hostile_flank',check:{stat:'per',dc:10}}]};

ZOMBIE_NODES.zo_ch2_overpass_encounter = {text:'You walk up alone. Hands visible. Weapon holstered or held loose.\n\nThree of them. A woman, maybe fifty, with a compound bow and three arrows in a side quiver. A younger man with a crowbar and the look of someone who\'s used it recently. And between them, barely visible, a teenager with nothing — just hands shoved in the pockets of a hoodie.\n\nThe woman with the bow doesn\'t raise it. But she doesn\'t lower what she\'s already got in her hand.\n\n"Where you coming from?" she asks.\n\n"City. Heading north." Honest. Simple. "The broadcast mentioned a camp."\n\nShe and the man exchange a look.\n\n"We know about the camp," the man says. His voice has something in it you need to identify — fear? Experience? "We\'re trying to decide if it\'s worth it."\n\n[CHARISMA CHECK PASSED]\n\nYou read them correctly — they\'re scared, not predatory. The teenager hasn\'t moved at all, standing slightly behind, eyes somewhere far away.',scene:'dark',mood:'#e17055',effects:{flags:{met_overpass_survivors:true}},choices:[{text:'"Come with us. More people, better odds."',next:'zo_ch2_overpass_join',effects:{relationships:{doc:1}}},{text:'Share what you know about the camp — good and bad.',next:'zo_ch2_overpass_info'},{text:'"We\'re moving on. Good luck."',next:'zo_ch2_bypass_clean'}]};

ZOMBIE_NODES.zo_ch2_overpass_join = {text:'The woman — her name is Rosa — looks at the man beside her. He\'s her brother-in-law, Victor. The teenager is Victor\'s son, Mateo, who hasn\'t spoken since the first night.\n\nThey join you.\n\nIt makes your group larger. It makes your food supply smaller, your decision-making more complicated, and your sense of purpose slightly stronger. Doc introduces herself as a nurse and immediately asks if anyone has injuries. Rosa has a blister on her heel the size of a quarter, turning septic. Doc treats it on the hood of the car while Victor loads their few possessions in.\n\nMateo watches the tree line the whole time.\n\nYou look at him. He\'s not blank — he\'s listening. Hearing something you can\'t.\n\n"What do you see?" you ask him.\n\nHe looks at you for the first time. Points north. "Something big is burning up there," he says. "I\'ve been smelling smoke for an hour."',scene:'dark',mood:'#636e72',effects:{flags:{group_expanded:true}},choices:[{text:'Keep moving north. You\'ll see what\'s burning when you get there.',next:'zo_ch2_approach_camp'}]};

ZOMBIE_NODES.zo_ch2_overpass_info = {text:'You tell them. The medical experiments Doc suspects. Garrett, the science teacher. The man who was told to leave quietly at 3 AM.\n\nVictor\'s face goes grey. He sits down on the railing. "We heard the broadcast and thought — finally. Finally, something official." He runs his hands over his head. "My wife is north. We got separated in the first hour. She was heading toward the highway. If there\'s a camp..."\n\nRosa puts a hand on his arm. Doesn\'t say anything.\n\n"I don\'t know anything for certain," you say. "It could be fine. It could be exactly what they say it is." You look at him. "I\'m going to find out."\n\nHe looks up. Something hardens in him.\n\n"Then I\'m going with you."',scene:'dark',mood:'#e17055',effects:{flags:{met_overpass_survivors:true,victor_motivated:true}},choices:[{text:'Accept them. The more, the better.',next:'zo_ch2_overpass_join',effects:{flags:{group_expanded:true}}}]};

ZOMBIE_NODES.zo_ch2_bypass_overpass = {text:'You don\'t slow down.\n\nThe three figures react — one stands, one reaches for something — and then you\'re past them, engine revving, tires humming. In the rearview mirror, they watch you go. Nobody chases. Nobody shoots.\n\nDoc lets out a slow breath.\n\n"That could have gone differently," she says.\n\n"It didn\'t."\n\nShe nods. Watches the road ahead.',scene:'dark',mood:'#636e72',choices:[{text:'Keep moving north.',next:'zo_ch2_approach_camp'}]};

ZOMBIE_NODES.zo_ch2_bypass_clean = {text:'You slip back onto the highway fifty yards past the overpass. The three figures never look in your direction.\n\nClean. Quiet. The way you prefer it.\n\nThe road north opens up. Fewer abandoned cars here — whatever evacuation happened, it had thinned out by this point. The sky is getting lighter, the smoke on the horizon sharper. Something large is burning ahead.',scene:'dark',mood:'#636e72',choices:[{text:'Keep moving north.',next:'zo_ch2_approach_camp'}]};

ZOMBIE_NODES.zo_ch2_hostile_flank = {text:'You come at them from behind, from the residential junction. Not threatening — you\'re not trying to ambush, just to avoid the confrontation entirely.\n\n[PERCEPTION CHECK PASSED]\n\nClose enough now to see details. The woman is holding the bow loosely — not raised. The man has his crowbar on his shoulder, not in a fighting grip. They\'re watching the road south, scanning for something. For infected, maybe, or for other survivors.\n\nThey\'re scared. They\'re not predators.\n\nYou step into view deliberately, hands visible, before they see you by accident. Better to control the moment than have someone\'s fear pull a trigger.',scene:'dark',mood:'#636e72',choices:[{text:'"Hey. We\'re not infected. We\'re just passing through."',next:'zo_ch2_overpass_encounter'},{text:'Just wave and keep moving.',next:'zo_ch2_bypass_clean'}]};

// --- HORDE ENCOUNTER AND INFECTED FIGHT ---

ZOMBIE_NODES.zo_ch2_approach_camp = {text:'Mile Marker 26. Mile Marker 25.\n\nThe smoke is real and getting stronger. To the north, something large — a structure, or structures — is burning with a dark, greasy smoke that presses against the sky. But that\'s not the only thing wrong.\n\nAt Mile Marker 23, the road is blocked.\n\nNot by cars. By people — infected — moving south in a loose mass. Fifty, maybe sixty. Moving slow, the sluggish shuffle of the early hours, but there are enough of them to fill the highway width and both shoulders.\n\nBetween you and the camp: a horde.\n\nDoc assesses it the way she\'d assess a trauma case — fast, clinical. "They\'re moving toward something. Or away from something." She checks the wind with a wet finger. "Toward. There\'s something south of us they\'re following."\n\n"Or someone." You look at the tree line. "There\'s a service road in the tree line — county maps show a maintenance track that runs parallel to the highway. Tight, but passable."',scene:'dark',mood:'#d63031',effects:{flags:{horde_encountered:true}},choices:[{text:'Take the service road through the trees.',next:'zo_ch2_service_road'},{text:'Wait for the horde to pass — it\'s moving south.',next:'zo_ch2_wait_horde',check:{stat:'cou',dc:12}},{text:'Find another way around — check the farmland to the west.',next:'zo_ch2_farm_bypass'}]};

ZOMBIE_NODES.zo_ch2_service_road = {text:'The service road is exactly as advertised: a single lane of cracked asphalt overgrown at the edges, barely wide enough for the car, tree branches scraping the roof. Your headlights cut through it in a narrow tunnel of light.\n\nHalfway through, something steps into the road.\n\nOne. Just one. A man — or what was a man — in a park ranger uniform, the badge still pinned to what\'s left of his shirt. Moving toward your headlights.\n\nYou brake hard. Five feet of clearance. It walks toward you, relentless, arms reaching.\n\n"Don\'t get out," Doc says quietly.\n\nThe math is simple: drive through it, or back up. The road behind is long. The road ahead is short.',scene:'dark',mood:'#d63031',choices:[{text:'Drive through it. Floor it.',next:'zo_ch2_drive_through',check:{stat:'cou',dc:9}},{text:'Back up slowly — don\'t escalate.',next:'zo_ch2_service_backup'},{text:'Get out and deal with it.',next:'zo_ch2_ranger_fight',check:{stat:'str',dc:11}}]};

ZOMBIE_NODES.zo_ch2_drive_through = {text:'You floor it.\n\nThe impact is sickening — a sound you don\'t have a category for, a lurch. The car keeps moving. You don\'t look in the mirror.\n\nDoc doesn\'t say anything. Neither do you.\n\nThe service road deposits you back onto Highway 9 above the horde. Clear road ahead. The smoke is closer now. You can see light — artificial, powered light — through the tree line to the north.\n\nCamp Northfield.',scene:'dark',mood:'#d63031',effects:{flags:{cleared_horde:true}},choices:[{text:'Head for the camp.',next:'zo_ch2_camp_approach'}]};

ZOMBIE_NODES.zo_ch2_service_backup = {text:'You back out slowly. The infected follows. You back faster. At the junction, you pull a hard reverse, come out onto the farmland edge, and reevaluate.\n\nThe horde is still moving south on the highway. The service road is compromised. But the farm road to the west is clear.\n\nYou go around.',scene:'dark',mood:'#636e72',choices:[{text:'Take the farm road.',next:'zo_ch2_farm_bypass'}]};

ZOMBIE_NODES.zo_ch2_ranger_fight = {text:'You get out.\n\nIt comes at you fast — faster than you expected for something that looks half-rotted. You swing. It connects. The infected staggers. You don\'t wait for it to recover.\n\nThree hits. It goes down. Stays down.\n\nYou get back in the car, hands shaking slightly, and drive.\n\nDoc checks you over with her eyes — looking for any break in the skin, any contact. You hold your arms out so she can see.\n\n"Clean," she says. Single word. Full sentence.',scene:'dark',mood:'#e17055',effects:{flags:{cleared_horde:true}},choices:[{text:'Continue through the service road.',next:'zo_ch2_drive_through'}]};

ZOMBIE_NODES.zo_ch2_wait_horde = {text:'You cut the engine. You sit in silence and wait.\n\nThe horde takes eleven minutes to pass. You count your own heartbeats to stay calibrated. The infected move in their shuffling tide, twenty feet from the car window at the closest point. One turns and looks directly at the car — right at you through the glass — and keeps moving.\n\nDoc doesn\'t breathe for thirty seconds.\n\nThen they\'re past. The road north is clear. The smoke ahead is thicker.\n\n"Okay," Doc says. Just the one word.',scene:'dark',mood:'#636e72',effects:{flags:{cleared_horde:true}},choices:[{text:'Move north.',next:'zo_ch2_camp_approach'}]};

ZOMBIE_NODES.zo_ch2_farm_bypass = {text:'The farmland to the west is flat and open — cornfields, dormant this time of year, cut down to stubble. You cross two fences, one of which you have to cut with bolt cutters from the car\'s kit. The frozen ground is hard under the tires.\n\nYou come out on a county road that rejoins Highway 9 north of the horde. Clean. Agricultural quiet. A barn in the distance has its lights on — someone is still farming, or someone found a barn to shelter in.\n\nNeither of you mentions the barn. You\'ve both made that calculation already.',scene:'dark',mood:'#636e72',effects:{flags:{cleared_horde:true}},choices:[{text:'Get back on Highway 9 and head north.',next:'zo_ch2_camp_approach'}]};

// --- CAMP NORTHFIELD: ARRIVAL AND REVELATION ---

ZOMBIE_NODES.zo_ch2_camp_approach = {text:'Camp Northfield is real.\n\nThat\'s the first surprise — that it exists at all, that someone managed to build something out of nothing this fast. Chain-link fencing topped with razor wire, portable flood lights on generator poles. FEMA logos on the tents visible from the road. The camp sprawls across what was a regional fairground — you can still see the ghost of the old sign, half-obscured by a banner that reads CAMP NORTHFIELD SECURE ZONE.\n\nAt the entrance, two checkpoint tents flank the access road. Guards — men in a mix of military and civilian gear, armed with rifles — stand at each tent. More visible on the fence line. This is organized. Well-organized.\n\n"More than five hundred people," Doc says quietly, reading the population of the camp from the lights and tent density. "They\'ve been lying about capacity."\n\nA guard signals for you to stop. Approaches the driver\'s side.\n\n"Name and group size?" He has a clipboard. His rifle is slung, not raised. Professional. Routine.\n\nYou feel Doc watching you. Waiting to see what name you give. What story you tell.',scene:'dark',mood:'#e17055',effects:{flags:{reached_camp:true}},choices:[{text:'Give your real name. Enter openly.',next:'zo_ch2_camp_enter_open'},{text:'Give a false name. Stay anonymous.',next:'zo_ch2_camp_enter_hidden',effects:{flags:{entered_anonymous:true}}},{text:'Ask questions before you go in.',next:'zo_ch2_camp_ask',check:{stat:'cha',dc:10}}]};

ZOMBIE_NODES.zo_ch2_camp_ask = {text:'"Before we process in — what\'s the procedure? How does intake work?"\n\nThe guard pauses. He wasn\'t expecting questions. That tells you something.\n\n"Medical screening first. Forty-eight hour observation. Then full camp access." He recites it like he\'s read it off the same clipboard fifty times. "Standard infection control."\n\n"And if we want to leave? After the forty-eight hours?"\n\nNow a longer pause. His eyes go to something over your shoulder — the inner fence, the tent complex beyond.\n\n"We\'ve had a lot of demand for resources from the camp," he says carefully. "Movement in and out is... being managed for everyone\'s safety."\n\nManaged.\n\n[CHARISMA CHECK PASSED]\n\nYou read it in his face: he\'s uncomfortable. He doesn\'t believe his own answer, but he\'s decided it\'s not his problem.\n\n"Thank you," you say. "We\'ll process in."',scene:'dark',mood:'#d63031',effects:{flags:{confirmed_cant_leave:true}},choices:[{text:'Enter the camp — you\'re going in with your eyes open.',next:'zo_ch2_camp_enter_hidden',effects:{flags:{entered_anonymous:true}}},{text:'Back out. This is a trap.',next:'zo_ch2_camp_refuse'}]};

ZOMBIE_NODES.zo_ch2_camp_refuse = {text:'"Actually," you say, "we\'re going to keep moving."\n\nThe guard\'s posture changes. Not aggressive — not yet — but the hand not holding the clipboard goes to his rifle strap.\n\n"Sir — ma\'am — the camp is the safest option available. I\'d strongly recommend—"\n\n"Noted." You put the car in reverse. "Thank you."\n\nHe doesn\'t chase you. Nobody shoots.\n\nBut as you pull away, Doc looks in the side mirror. "Two of them just went inside," she says. "They\'re going to report us."\n\n"Then we need to move faster."',scene:'dark',mood:'#d63031',effects:{flags:{refused_camp:true}},choices:[{text:'Head for the ranger station. Off-grid, now.',next:'zo_ch2_ending_offgrid_begin'}]};

ZOMBIE_NODES.zo_ch2_camp_enter_open = {text:'You give your name. Group size. The guard writes it down, passes you a yellow wristband each.\n\n"Yellow means new intake. Please proceed to medical screening — tent three, past the first fence line. Your vehicle will be held at the checkpoint." He says it with a smile that\'s mostly teeth.\n\nThey take your car.\n\nYou and Doc are walked — escorted, you notice, not guided — to a large white tent. Inside: folding cots, bright fluorescent lights, the smell of antiseptic. Three other people sit on cots, sleeves rolled up, looking at the floor.\n\nA man in scrubs approaches with a clipboard. Young, efficient, eyes that don\'t quite make contact.\n\n"We\'ll need blood samples for pathogen screening," he says. "Standard protocol."\n\nDoc grabs your arm.\n\nShe doesn\'t say anything. She doesn\'t have to.',scene:'dark',mood:'#d63031',effects:{flags:{inside_camp:true}},choices:[{text:'Give the blood sample. Play along — learn more.',next:'zo_ch2_inside_camp'},{text:'Refuse. Ask to speak to whoever is in charge.',next:'zo_ch2_camp_pushback'}]};

ZOMBIE_NODES.zo_ch2_camp_enter_hidden = {text:'You give a false name. Or you give nothing revealing. The guard writes it down — he doesn\'t check ID; there\'s no infrastructure for that anymore.\n\nYellow wristbands. Your vehicle held at the checkpoint. Walk to medical tent three.\n\nInside, you clock everything: exits, staff count, where the guards stand. Three cots occupied by people who look confused and tired. A medical worker with a clipboard. Another one moving through a curtained area in the back — in and out, in and out, with the rhythm of someone running a procedure.\n\nDie curtained area in the back. That\'s where you need to look.\n\n"Blood sample for pathogen screening," the young man with the clipboard tells you. "Standard protocol."\n\nDoc leans close. Whispers so only you can hear: "Don\'t let them take blood. We need to get to that back area."',scene:'dark',mood:'#d63031',effects:{flags:{inside_camp:true,entered_anonymous:true}},choices:[{text:'Create a distraction so Doc can slip behind the curtain.',next:'zo_ch2_distraction',check:{stat:'cha',dc:10}},{text:'Go behind the curtain yourself.',next:'zo_ch2_curtain',check:{stat:'per',dc:11}},{text:'Give the blood sample. Play along.',next:'zo_ch2_inside_camp'}]};

ZOMBIE_NODES.zo_ch2_camp_pushback = {text:'"I\'d like to speak to whoever is in charge of medical protocol."\n\nThe young man blinks. This isn\'t in his script.\n\n"Dr. Vasquez is in charge of intake. She\'s busy—"\n\n"Then I\'ll wait."\n\nThe pause that follows is diagnostic. He\'s calculating whether you\'re worth the trouble. Behind him, the curtain shifts — someone behind it, listening.\n\nA woman emerges. Forties, short grey hair, the manner of someone whose exhaustion is structural, built into her bones over years. A white coat over civilian clothes. Dr. Vasquez.\n\nShe looks at you. She looks at Doc. She looks at Doc\'s scrubs.\n\n"You\'re a nurse," she says to Doc.\n\n"ER. Twelve years."\n\nSomething crosses Dr. Vasquez\'s face. She glances at the guard stationed at the tent entrance. Then she makes a small decision — you can see it land.\n\n"Come to my office," she says. "Both of you."',scene:'dark',mood:'#e17055',effects:{flags:{met_vasquez:true}},choices:[{text:'Follow Dr. Vasquez.',next:'zo_ch2_vasquez_reveal'}]};

ZOMBIE_NODES.zo_ch2_inside_camp = {text:'You give the blood sample. You follow protocol. You get moved from intake to a sleeping tent — fifty cots, half occupied, people ranging from shell-shocked to asleep.\n\nYou and Doc take adjacent cots. She pretends to sleep. You watch.\n\nHere\'s what you learn in the first four hours:\n\nThe camp staff moves on a rigid schedule. Guards rotate at the perimeter every two hours. The medical tent works all night — light leaking under the canvas, the muffled sound of equipment. People who arrived with bite wounds get yellow-and-red wristbands. You haven\'t seen any of them after intake.\n\nThere\'s a second fence. Inside the main camp perimeter, set back from the sleeping tents, another fence. Taller. Razor wire. One entrance, padlocked. Beyond it: low white tents and the hum of generators.\n\n"Research block," Doc says, very quietly, in the dark. "They\'ve segregated it. That\'s where the yellow-and-reds go."\n\nSomewhere in that block, if Doc\'s right, is Garrett\'s sister. And whatever they\'re doing to her.',scene:'dark',mood:'#d63031',effects:{flags:{inside_camp:true,saw_research_block:true}},choices:[{text:'Try to get into the research block tonight.',next:'zo_ch2_research_infiltrate',check:{stat:'per',dc:12}},{text:'Find someone who\'s been here long enough to know more.',next:'zo_ch2_camp_informant'},{text:'Get out of the camp and regroup.',next:'zo_ch2_camp_escape_plan'}]};

ZOMBIE_NODES.zo_ch2_distraction = {text:`You knock over the tray of supplies near the blood-draw station. The crash is spectacular — cotton balls, alcohol wipes, syringes, all of it across the floor.\n\n"Sorry — sorry, I'm — I'm not good with needles."\n\nThe medical worker turns, exasperated. The guard at the entrance looks over.\n\nDoc moves. She's through the curtain in two steps.\n\n[CHARISMA CHECK PASSED]\n\nYou keep the medical worker occupied for three full minutes — apologizing, asking questions about the procedure, expressing vague medical anxiety — before Doc comes back through the curtain, her expression perfectly composed.\n\nShe sits back on the cot. Gives you the blood sample you need to give.\n\nShe whispers: "There are six people behind that curtain. All with yellow-and-red bands. All with IV lines. And none of them are awake."`,scene:'dark',mood:'#d63031',effects:{flags:{saw_experiments:true}},choices:[{text:'Get out of this tent. Now.',next:'zo_ch2_camp_escape_plan'},{text:'Find the person in charge.',next:'zo_ch2_camp_pushback'}]};

ZOMBIE_NODES.zo_ch2_curtain = {text:`You slip behind the curtain.\n\n[PERCEPTION CHECK PASSED]\n\nSix people. Three on each side, on hospital-style cots. IV lines running from stands into their arms. All unconscious. All wearing yellow-and-red wristbands — the ones they give to people with bite wounds.\n\nOn a rolling table beside each cot: a tablet displaying vitals, and a labeled syringe rack. The labels are alphanumeric. Compound labels. You take a photo on your phone — screen brightness off, no flash.\n\nOne of the people on the cots is a woman. Early thirties. Sleeping. Or something that looks like sleeping.\n\nA lanyard around her neck with a staff photo ID — but the name is written in marker, hurried: SARAH G. — not a staff ID. Someone's labeling them.\n\nSarah G. Garrett's sister.\n\nYou hear footsteps approaching the curtain.`,scene:'dark',mood:'#d63031',effects:{flags:{saw_experiments:true,found_sarah:true}},choices:[{text:'Get out fast.',next:'zo_ch2_camp_escape_plan'},{text:'Try to disconnect Sarah\'s IV.',next:'zo_ch2_rescue_attempt',check:{stat:'int',dc:12}}]};

ZOMBIE_NODES.zo_ch2_vasquez_reveal = {text:`Dr. Vasquez's office is a canvas partition inside the medical tent. Barely room for a folding desk and three chairs. She pours two cups of coffee from a thermos — real coffee, which feels obscene — and hands them over.\n\n"How long were you in emergency medicine?" she asks Doc.\n\n"Twelve years. I walked out of St. Vincent's when the first cases came in." Doc doesn't touch the coffee. "I'm not proud of that."\n\n"You survived," Vasquez says. "Be proud of that." She sits back. "I need to tell you something, and I need you to understand I'm not the one who made the decision."\n\nShe tells you. Compact and clean: Camp Northfield is both what it says it is and something it doesn't say. The refugee operation is genuine — food, water, shelter, protection. The medical program is also genuine, in its way. Early infected — people who were bitten but haven't fully turned, who show delayed symptoms — are being studied. Blood draws. Spinal fluid. Tissue samples. Under sedation, without consent, because the people running the program decided consent was a luxury they didn't have time for.\n\n"There might be a treatment," she says. "That's not a lie. There might be. But they're not doing it right."\n\nShe looks at you both.\n\n"And I can't stop it from the inside."`,scene:'dark',mood:'#d63031',effects:{flags:{vasquez_told_truth:true,know_about_experiments:true}},choices:[{text:'"Then help us expose it."',next:'zo_ch2_ending_expose_begin',effects:{relationships:{doc:2},flags:{plan_expose:true}}},{text:'"What do you need from us?"',next:'zo_ch2_vasquez_plan'},{text:'"Get us out. Tonight."',next:'zo_ch2_camp_escape_plan'}]};

ZOMBIE_NODES.zo_ch2_vasquez_plan = {text:'"Evidence," Vasquez says. "The protocol documentation, the patient files, the compound logs. I have copies. I\'ve been making copies for three days, waiting for someone I could trust to get them out."\n\nShe opens a locked drawer and places a USB drive on the desk.\n\n"That goes to any functioning media outlet, any remaining government structure, any military unit not under Camp Northfield\'s direct chain of command. The people running this program are operating outside authorized parameters. If the right people see this data—"\n\n"Who\'s the right people?" you ask.\n\n"Right now?" She looks at the USB drive. "Anyone still capable of being shocked by something."\n\nDoc picks up the drive.\n\n"There\'s also one patient in the research block who has been there the longest," Vasquez says. "A woman — Sarah. She\'s shown something the compound isn\'t supposed to do. Something that might actually be useful." She looks at Doc. "If there\'s a treatment in this, it starts with her."\n\nOutside, the camp goes on. Generators humming. Lights blazing. Five hundred people believing they\'re safe.',scene:'dark',mood:'#d63031',effects:{inventory:['USB drive with evidence'],flags:{have_evidence:true,vasquez_ally:true}},choices:[{text:'Take the drive and get Sarah out. Both.',next:'zo_ch2_rescue_attempt'},{text:'Take the drive and get out. Just you.',next:'zo_ch2_camp_escape_plan'},{text:'Stay. Help Vasquez from the inside.',next:'zo_ch2_ending_stay_begin'}]};

// --- CAMP CLIMAX AND ENDINGS ---

ZOMBIE_NODES.zo_ch2_research_infiltrate = {text:'The research block fence has a padlock on a chain. Simple. But the guard rotates every two hours, and in the darkness between the sleeping tents and the perimeter lights, there\'s a shadow lane.\n\n[PERCEPTION CHECK PASSED]\n\nYou wait for the guard rotation. Thirty seconds of darkness. The padlock is a combination model — but the chain is looped through a fence post that has rust at the base. The post moves. You work it until the chain can slip over the top.\n\nYou\'re inside.\n\nSix tents in the research block. The third one has a glow from inside — the soft blue of equipment screens. You listen at the entrance. One person inside, moving around. Methodical. Working.\n\nYou pull the flap back.',scene:'dark',mood:'#d63031',effects:{flags:{infiltrated_block:true}},choices:[{text:'Step inside.',next:'zo_ch2_vasquez_reveal'}]};

ZOMBIE_NODES.zo_ch2_camp_informant = {text:'You find her two hours after lights-out — an older woman sitting against the fence of the sleeping tent, awake, wrapped in a blanket, watching the research block.\n\nHer name is Patricia. She\'s been in the camp for four days. Her son has a yellow-and-red wristband.\n\n"He got bitten on the second day," she says, without preamble. She saw you watching where she was watching, and she\'s been waiting for someone to talk to. "He was lucid. Still lucid. But they took him anyway." She looks at the fence. "I see the lights in there all night. All night, every night."\n\n"Have you seen anyone come out?"\n\n"Two." She pauses. "One of them looked different. Looked—" She searches for the word. "Like they\'d been somewhere. You know? The way people look after surgery. Like the world\'s at a slight angle."\n\n"The other one?"\n\nPatricia is quiet for a moment. Then she says: "They carried him."',scene:'dark',mood:'#d63031',effects:{flags:{heard_camp_story:true}},choices:[{text:'"Tell me everything you know about the schedule in there."',next:'zo_ch2_inside_camp'},{text:'Help her. Her son is in there — and so is Sarah.',next:'zo_ch2_rescue_attempt'}]};

ZOMBIE_NODES.zo_ch2_rescue_attempt = {text:'The research block. Sarah\'s cot.\n\nYou have the combination — either from Vasquez or from the infiltration — or you\'ve made a choice to come anyway. Either way, you\'re inside, and you\'re at her cot, and you have to do this fast.\n\nThe IV line: saline, something else. Doc is with you or you\'re working from what you\'ve learned.\n\nYou disconnect the IV, carefully, no air bubbles, the way the protocol says. Sarah\'s eyes don\'t open.\n\n"She needs at least ten minutes to start coming around," Doc says — or you calculate it yourself. "We don\'t have ten minutes."\n\nA cart nearby holds two prepacked emergency bags — staff go-bags, for if the camp has to evacuate. You take them both. You take the tablet from the bedside stand. You take Sarah, dead weight, and you move.\n\nThe night is your window. Every choice narrows it.',scene:'dark',mood:'#d63031',effects:{flags:{rescuing_sarah:true},inventory:['Camp emergency bag x2','Research tablet']},choices:[{text:'Get to the main gate — bluff your way through.',next:'zo_ch2_escape_gate',check:{stat:'cha',dc:12}},{text:'Go over the fence — the hard way.',next:'zo_ch2_escape_fence',check:{stat:'str',dc:12}},{text:'Wait for Sarah to wake up. She might know another way out.',next:'zo_ch2_escape_sarah_awake'}]};

ZOMBIE_NODES.zo_ch2_camp_escape_plan = {text:'You don\'t have a choice anymore. You know too much.\n\nThe problem with leaving Camp Northfield is that the camp doesn\'t want you to. One gate, guarded. The fence is twelve feet of chain-link and razor wire. The guards rotate but there are always at least four on the perimeter.\n\nYou have options, but none of them are easy.\n\nDoc is watching you think. "We have to decide before they do bed checks," she says. "I saw them check the sleeping tent at 2 AM. That\'s our window."\n\nYou look at the fence. Look at the gate. Look at the research block where the lights are still on.',scene:'dark',mood:'#d63031',choices:[{text:'Go for the gate. You have a story ready.',next:'zo_ch2_escape_gate',check:{stat:'cha',dc:12}},{text:'Go over the fence. Raw strength.',next:'zo_ch2_escape_fence',check:{stat:'str',dc:12}},{text:'Steal a guard\'s radio and call for a distraction.',next:'zo_ch2_escape_radio',check:{stat:'int',dc:11}},{text:'Just walk out. Act like you belong.',next:'zo_ch2_escape_bluff',check:{stat:'cou',dc:13}}]};

ZOMBIE_NODES.zo_ch2_escape_gate = {text:'"We\'re with medical. Dr. Vasquez needs supplies from the vehicles at checkpoint."\n\nThe guard looks at you. Looks at whoever you have with you. Looks at the clipboard.\n\n[CHARISMA CHECK PASSED]\n\n"Badge?"\n\nYou produce the staff ID you found — Vasquez\'s, or one you lifted, or one Doc lifted. The guard squints at it in the low light.\n\nFive seconds.\n\n"Go ahead."\n\nYou walk through the gate at a professional pace. Not fast. Not slow. The pace of someone with a task and not enough time.\n\nThirty feet past the gate, Doc lets out a slow, controlled breath.\n\nYou\'re out.',scene:'dark',mood:'#636e72',effects:{flags:{escaped_camp:true}},choices:[{text:'Get to the vehicle and go.',next:'zo_ch2_ending_expose_begin'}]};

ZOMBIE_NODES.zo_ch2_escape_fence = {text:'Twelve feet. Razor wire on top.\n\nYou use a jacket folded over the top — yours, or Doc\'s, or someone else\'s — and go over fast. The razor wire still catches your arm through the jacket. A line of fire across your forearm. Not deep. Not infected. Just pain.\n\n[STRENGTH CHECK PASSED]\n\nYou land on the other side. Help the next person over. And the next.\n\nThe guard on the east perimeter walks past thirty seconds after the last person clears the wire. Thirty seconds. That\'s the margin you had.\n\nIn the dark, crouching in the tree line, you breathe. Your arm burns. Doc is already looking at it with a small flashlight.\n\n"Superficial," she says. "It can wait." She looks up. "We\'re out."',scene:'dark',mood:'#e17055',effects:{flags:{escaped_camp:true}},choices:[{text:'Move. Head for the vehicle or go on foot.',next:'zo_ch2_ending_expose_begin'}]};

ZOMBIE_NODES.zo_ch2_escape_radio = {text:'You find an unattended radio on a mess table during the camp\'s late-hour slack period. You key the frequency, press transmit, and say: "Infected at the west fence. Multiple. West fence now."\n\nThe camp mobilizes. Not chaos — disciplined response. But for four minutes, everyone is looking west.\n\n[INTELLIGENCE CHECK PASSED]\n\nFour minutes is enough.\n\nYou go east, straight through the distracted checkpoint while the guard is turned, and into the dark beyond the lights.',scene:'dark',mood:'#636e72',effects:{flags:{escaped_camp:true}},choices:[{text:'Move fast — the distraction won\'t last.',next:'zo_ch2_ending_expose_begin'}]};

ZOMBIE_NODES.zo_ch2_escape_bluff = {text:'You walk. Straight to the gate. In the dark, wearing whatever you\'re wearing, with Sarah or without, with the USB drive in your pocket and your heart doing something irregular behind your ribs.\n\n"Authorized exit," you say, and produce nothing.\n\nThe guard looks at you.\n\n[COURAGE CHECK PASSED]\n\nYour face doesn\'t move. Your voice doesn\'t move. You meet his eyes and wait.\n\nHe looks down at his clipboard. Looks back up. Makes the decision that keeps his night simple.\n\n"Get back before 0600," he says, and opens the gate.\n\nThe night air outside the camp tastes different. You\'re not sure if that\'s real or not. You don\'t stop to find out.',scene:'dark',mood:'#636e72',effects:{flags:{escaped_camp:true}},choices:[{text:'Move.',next:'zo_ch2_ending_expose_begin'}]};

ZOMBIE_NODES.zo_ch2_escape_sarah_awake = {text:'You wait. Twelve minutes in the research block, in the dark, listening to the camp outside.\n\nSarah opens her eyes at minute nine.\n\nShe\'s disoriented. That\'s expected. But Doc is there — or you\'re there — with a hand on her arm and a quiet voice: "You\'re safe. We\'re getting you out. Don\'t make noise."\n\nShe looks at you. Then at the fence. Then at the tent flap.\n\n"There\'s a gap," she says. Her voice is cracked from disuse but clear. "In the south fence. They use it for equipment deliveries. Half the time it\'s not locked."\n\nShe knows the camp. She\'s been here, watching, for days.\n\n"Show us," you say.',scene:'dark',mood:'#636e72',effects:{flags:{sarah_conscious:true}},choices:[{text:'Follow Sarah.',next:'zo_ch2_escape_gate',effects:{flags:{escaped_camp:true}}}]};

// --- CHAPTER 2 ENDINGS ---

ZOMBIE_NODES.zo_ch2_ending_expose_begin = {text:'You have what you came for — or what you learned along the way.\n\nEvidence. A USB drive. Photos. Doc\'s testimony. Research tablets. The knowledge of what Camp Northfield actually is.\n\nThe question now is who you give it to.\n\nDoc has a contact — a public health official she treated once, years ago, who she knows is still alive based on a broadcast she heard three days ago. The man is running a liaison office for emergency services two counties north. Functional government. Small, but functional.\n\nOr you could go further. National Guard units that aren\'t under the camp\'s chain of command. Journalists — are there still journalists? There\'s an emergency radio station at 91.7 still broadcasting from somewhere north.\n\nOr you could leave it all behind. Take Sarah. Take whoever\'s with you. Go to the ranger station, the reservoir, somewhere that isn\'t this.\n\nYou\'ve seen what people in power do with a crisis. You\'ve seen what Camp Northfield built in six days. The question is whether you still believe in something larger than the next safe night.',scene:'dark',mood:'#e17055',choices:[{text:'Get the evidence to Doc\'s contact. Blow it open.',next:'zo_ch2_end_expose'},{text:'Go off-grid. Take Sarah. Take whoever you have. Disappear.',next:'zo_ch2_end_offgrid'},{text:'Go back into the camp — from the outside. Warn the people inside.',next:'zo_ch2_end_sacrifice'}]};

ZOMBIE_NODES.zo_ch2_ending_offgrid_begin = {text:'You drive past Camp Northfield without stopping.\n\nThe lights are bright from the road. You can see the silhouettes of the tents, the guard towers, the clean illuminated order of it. Five hundred people inside, probably more, probably trusting the wristbands and the intake procedures and the official FEMA logo.\n\nYou drive past.\n\nDoc doesn\'t say anything for a long time. Then: "The ranger station."\n\n"The ranger station," you agree.\n\nThe county road turns east off the highway, gravel under tires, trees closing in on both sides. The map says four miles. In the dark, it feels longer.\n\nThe ranger station has its lights off — solar backup, automatic shutoff after midnight. But the door is unlocked. And inside: a generator, a propane tank, emergency food stores, a medical kit, a hand-crank weather radio, and a logbook with entries up to six days ago in the same handwriting. Ranger Torres. He was good at his job.\n\nYou don\'t know where Ranger Torres is. But his station is still standing.',scene:'dark',mood:'#636e72',effects:{flags:{found_ranger_station:true}},choices:[{text:'Make camp. Survive. Start something small and real.',next:'zo_ch2_end_offgrid'},{text:'Think about what you left behind at the camp — and whether you can live with it.',next:'zo_ch2_end_offgrid'}]};

ZOMBIE_NODES.zo_ch2_end_expose = {text:'It takes two days. Forty-eight hours of driving, waiting, relaying, arguing with officials who were half-convinced nothing was real until Doc laid the research tablets on a folding table and played the documentation out in sequence.\n\nThe public health official — Dr. Reyes, three counties north, operating out of a converted school gymnasium — goes very still when he sees it. Then he makes three calls.\n\nBy the end of the week, Camp Northfield is under federal review. The lead researchers are detained. The medical program is suspended pending investigation. The five hundred and thirty-seven people inside are given the choice to leave or stay — for real, this time, with documentation.\n\nTwo of them are the people you cared about. One of them is Sarah, who gets transferred to a legitimate medical facility and, two weeks later, shows something in her bloodwork that three doctors in three separate labs call "anomalous and worth examining."\n\nDoc takes a position at the emergency health liaison, translating ER experience into field triage policy.\n\nYou don\'t take a position. You go back to the ranger station. You make it yours.\n\nThe world outside is still ending. But you made one piece of it slightly more honest.\n\n---\n\nCHAPTER 2 COMPLETE\n\nEnding: The Whistleblower. You brought the truth out of a place designed to contain it.',scene:'dark',mood:'#00b894',effects:{flags:{chapter2_complete:true,ending:'expose'}},choices:[{text:'Return to Menu',next:'_menu'}]};

ZOMBIE_NODES.zo_ch2_end_offgrid = {text:'The ranger station becomes something.\n\nNot quickly. Not safely. The first three days are just survival — clearing the area, securing the perimeter, figuring out the generator. Doc inventories the medical supplies with the concentration of someone writing a doctoral thesis. You handle everything else.\n\nThen others find you. They always find you — that\'s what happens when you leave a light on. A couple from the highway detour. The family from the overpass, if you picked them up. Someone who walked for two days after the camp turned them away.\n\nYou\'re not running a camp. You\'re careful about that. You don\'t have wristbands. You don\'t have a fence. You have a table where anyone can sit, and a rule: you contribute what you can, you take what you need, you don\'t make decisions for anyone else.\n\nIt\'s small. It\'s fragile. It might not last the month.\n\nBut it\'s yours, and it\'s honest, and in the mornings when the mist comes off the reservoir and the world is quiet enough to almost forget, it feels like the right choice.\n\n---\n\nCHAPTER 2 COMPLETE\n\nEnding: The Refuge. You built something real instead of inheriting something broken.',scene:'dark',mood:'#00b894',effects:{flags:{chapter2_complete:true,ending:'offgrid'}},choices:[{text:'Return to Menu',next:'_menu'}]};

ZOMBIE_NODES.zo_ch2_end_sacrifice = {text:'You go back.\n\nNot inside. From the outside, with the evidence in your hands, you find the section of fence closest to the sleeping tents. You call out. Quietly at first, then louder.\n\nPeople come to the fence. Tired, suspicious, hopeful — all of those at once, the way people look when they\'ve been surviving on someone else\'s terms.\n\nYou tell them. Everything. Fast, clear, Doc\'s voice cutting in when the medical details need precision. You show them the tablets through the fence, the photos, the USB drive.\n\nThe camp security reacts in seven minutes. That\'s how long it takes to move from sleeping tent to fence to confrontation.\n\nSeven minutes is long enough.\n\nThirty people go over or through that fence in seven minutes. Some of them make it clean. Some of them don\'t. You help every person you can reach.\n\nWhen the guards pull you away from the fence, you don\'t fight it. You\'ve already done what you came to do.\n\nThey hold you for eighteen hours. Then someone higher up makes a call and releases you — you have too many witnesses, too much documentation, too much that would look bad in a report.\n\nYou walk out of Camp Northfield\'s gate in the morning light. Doc is waiting forty yards down the road with the car and a thermos of terrible coffee.\n\nThirty people made it out because of seven minutes.\n\nYou don\'t know if that\'s enough. You suspect it\'s never going to feel like enough.\n\nBut you go anyway.\n\n---\n\nCHAPTER 2 COMPLETE\n\nEnding: The Breach. You opened a door you couldn\'t close again — and people walked through it.',scene:'dark',mood:'#fdcb6e',effects:{flags:{chapter2_complete:true,ending:'sacrifice'}},choices:[{text:'Return to Menu',next:'_menu'}]};

ZOMBIE_NODES.zo_ch2_end_captured = {text:'They take you at the fence.\n\nOr they find the evidence on you during a random check. Or someone talks — it doesn\'t matter how; what matters is that the door to Dr. Vasquez\'s partition opens and two guards are on the other side and you don\'t have time to run.\n\nThey put you in a tent inside the research block. Your own cot. Your own IV stand — not connected, not yet. A guard outside. The tablet they took from you is in someone\'s office.\n\nYou have forty-eight hours, by your count, before the situation calcifies.\n\nYou use every one of them.\n\nYou talk to the people on the other cots, through whispers at night — the ones who can still talk. You memorize every detail of the research block. You listen to the staff conversations through the canvas walls. You learn the schedule. You learn the names.\n\nOn the second night, Doc comes through the fence with a guard\'s access badge and a look on her face like she expected to find you exactly here.\n\n"Ready?" she says.\n\nYou get up.\n\nEverything you learned in forty-eight hours in that tent, you carry with you. You carry it north, to the liaison office, to Dr. Reyes, to the people who can do something with it.\n\nIt\'s not the story you planned to tell. But you\'ve got all of it.\n\n---\n\nCHAPTER 2 COMPLETE\n\nEnding: The Inside Account. You went deeper than you meant to — and came out with more than anyone expected.',scene:'dark',mood:'#e17055',effects:{flags:{chapter2_complete:true,ending:'captured'}},choices:[{text:'Return to Menu',next:'_menu'}]};

// Update additional fail-state nodes for ch2 checks
ZOMBIE_NODES.zo_ch2_bypass_overpass_fail = {text:'You accelerate — too late. One of the figures steps into the road.\n\nYou brake hard. The figure stops. Hands raised. Not hostile — scared.\n\nYou\'ve already slowed down. Might as well make this count.',scene:'dark',mood:'#e17055',choices:[{text:'Talk to them.',next:'zo_ch2_overpass_encounter'}]};

// ============================================================
// SCENARIO DATA — THE PERFECT HEIST
// ============================================================
window.SCEN_NODES['zombie'] = ZOMBIE_NODES;
})();
