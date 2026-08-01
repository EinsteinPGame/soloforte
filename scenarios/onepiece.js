// Scenario data: onepiece  (OP_NODES)
// Split out of scenario-generator.html on 2026-08-01.
// Edit THIS file to change this scenario — the main file no longer holds node data.
window.SCEN_NODES = window.SCEN_NODES || {};
(function(){
const OP_NODES = {};

// ---- ARC 1: EAST BLUE & JOINING THE CREW ----

OP_NODES.op_start = {text:`The East Blue. The weakest of the four seas — and the birthplace of the Pirate King.

You have been dreaming of the sea since you were old enough to walk. The stories of Gold Roger — the man who conquered the Grand Line, found the legendary treasure One Piece, and laughed at his own execution — set a fire in your chest that has never gone out.

Today, you are sitting in a port town bar when chaos erupts. A rubber arm stretches across the room, grabs a plate of meat, and snaps back to a grinning boy in a straw hat.

"Shishishi! That was good!" Monkey D. Luffy. Future Pirate King. Currently annoying the local marines.

A marine captain storms in — Captain Morgan\`s son, Helmeppo, demanding arrests. Luffy punches him through a wall without breaking stride.

"Hey!" Luffy turns to you with that impossible grin. "You look strong! Wanna join my crew?"`,scene:'action',mood:'#0a2a5a',characters:['Luffy'],choices:[{text:`"Join a pirate crew? You do not even have a ship!" Say yes anyway.`,next:'op_join_luffy',effects:{rel:{luffy:2},stats:{cou:1}}},{text:`"Prove to me you are worth following, Straw Hat."`,next:'op_test_luffy',effects:{stats:{int:1}}},{text:`"I have my own dream to chase. But our paths might cross."`,next:'op_solo_start',effects:{stats:{per:1},flags:{solo_path:true}}}]};

OP_NODES.op_join_luffy = {text:`And just like that, you are a pirate.

Luffy\`s crew is small but growing. Roronoa Zoro — a three-sword swordsman who sleeps more than he fights and fights better than anyone you have ever seen. Nami — a navigator who steals from pirates and trusts no one. Usopp — a liar and a sniper with the heart of a hero hiding behind the cowardice.

Your first ship is barely seaworthy. Luffy does not care. "A pirate ship just needs to float and go forward! Like me!"

The crew sets sail for the Grand Line — the most dangerous sea in the world. But first, the East Blue has one more challenge.

Baratie — the floating restaurant. And the man who will become your cook.`,scene:'calm',mood:'#0066cc',characters:['Luffy','Zoro','Nami','Usopp'],effects:{flags:{joined_crew:true},rel:{luffy:1,zoro:1}},choices:[{text:'Head to Baratie. The crew needs a cook.',next:'op_baratie'},{text:'Suggest recruiting more crew members first.',next:'op_baratie',effects:{stats:{int:1}}}]};

OP_NODES.op_test_luffy = {text:`Luffy tilts his head. "Prove it? Okay!" He stretches his arm back twenty feet and launches a punch at your face.

You dodge — barely. He is fast. Faster than rubber should be. His attacks are unpredictable, wild, and backed by the kind of raw power that does not come from training alone. It comes from conviction.

The bar is destroyed. Marines show up. You and Luffy fight side by side against an entire platoon, back to back, grinning like idiots.

"So?" Luffy asks afterward, picking splinters out of his hair. "You joining or what?"

He is insane. He is reckless. He is going to get everyone killed.

He is also the most free person you have ever met.`,scene:'action',mood:'#0a2a5a',characters:['Luffy'],effects:{rel:{luffy:2},stats:{str:1}},choices:[{text:`"Fine. But I am not calling you Captain."`,next:'op_join_luffy',effects:{rel:{luffy:1}}},{text:`"Lead the way, Captain."`,next:'op_join_luffy',effects:{rel:{luffy:2}}}]};

OP_NODES.op_solo_start = {text:`You part ways with Luffy, but the East Blue is small. You hear stories — the rubber boy beating Buggy the Clown, tearing through Don Krieg\`s armada, toppling Arlong\`s tyranny over Nami\`s village.

Each story is more impossible than the last. And each one pulls you closer.

At Loguetown — the town where Gold Roger was born and executed — you see Luffy standing on the execution platform, a blade at his neck, grinning at the sky.

"I AM THE MAN WHO WILL BECOME PIRATE KING!"

Lightning strikes the platform. He survives. The universe itself seems to be keeping this boy alive.

You are at the dock when his ship — the Going Merry — sails past. Luffy spots you and waves.

"Last chance! Grand Line\`s gonna be fun!"`,scene:'action',mood:'#0a2a5a',characters:['Luffy'],effects:{rel:{luffy:1}},choices:[{text:'Jump aboard. Your solo journey ends here.',next:'op_grand_line',effects:{rel:{luffy:2},stats:{cou:1}}},{text:'Follow in your own boat. Parallel the Straw Hats.',next:'op_grand_line',effects:{stats:{per:1},flags:{own_ship:true}}}]};

OP_NODES.op_baratie = {text:`The Baratie — a restaurant on the sea, run by cooks who fight like pirates and cook like gods. Head chef Zeff, a retired pirate who sacrificed his own leg to save a boy named Sanji.

Sanji. Blond hair, curly eyebrow, kicks like a cannonball. He feeds anyone who is hungry — pirate, marine, doesn\`t matter. Food is food. Hunger does not discriminate.

Don Krieg\`s fleet arrives — fifty ships, a thousand men, all starving. Krieg demands the restaurant. Sanji feeds his crew anyway.

Then Dracule Mihawk appears. The World\`s Greatest Swordsman. Golden eyes, a black blade six feet long, an aura that makes the sea itself hold its breath.

Zoro challenges him. Three swords against one. The fight lasts thirty seconds. Mihawk cuts Zoro down with a knife — not even his real sword. Then, seeing Zoro\`s refusal to turn his back, he draws the black blade Yoru and delivers a chest wound that should kill.

"Surpass me," Mihawk says. "I will wait."

Zoro raises his swords above his head, bleeding, dying. "I WILL NEVER LOSE AGAIN!"`,scene:'action',mood:'#0a2a5a',characters:['Luffy','Zoro','Sanji'],effects:{rel:{zoro:1,sanji:1}},choices:[{text:'Help fight Don Krieg alongside Luffy.',next:'op_arlong',effects:{rel:{luffy:1},stats:{str:1}}},{text:'Tend to Zoro\`s wounds. He needs someone.',next:'op_arlong',effects:{rel:{zoro:2},stats:{per:1}}},{text:'Talk to Sanji. Convince him to join the crew.',next:'op_arlong',effects:{rel:{sanji:2},stats:{cha:1}}}]};

OP_NODES.op_arlong = {text:`Nami betrayed the crew. Stole the treasure and vanished.

Except she did not betray anyone. She has been buying back her village from Arlong — a fish-man pirate who murdered her mother and enslaved her people. Eight years of stealing, saving, enduring — all to buy their freedom.

And then Arlong bribes the marines to steal Nami\`s savings. Eight years of work — gone.

You find Nami in the tangerine grove, stabbing Arlong\`s tattoo on her arm with a knife. Screaming. Crying. Finally, she whispers: "Luffy... help me."

Luffy puts his straw hat on her head and walks toward Arlong Park.

"Of course."`,scene:'calm',mood:'#cc6600',characters:['Luffy','Nami'],effects:{rel:{nami:2}},choices:[{text:'Storm Arlong Park with the crew. No plan, just fury.',next:'op_arlong_fight',effects:{stats:{cou:1},rel:{luffy:1}}},{text:'Take on one of Arlong\`s officers. Pull your weight.',next:'op_arlong_fight',effects:{stats:{str:1}}}]};

OP_NODES.op_arlong_fight = {text:`Arlong Park falls. Each crew member takes an officer — Zoro fights despite wounds that should have killed him twice. Sanji battles underwater. Usopp faces his own cowardice and wins.

You fight alongside them, cutting through fish-men with everything you have.

Luffy faces Arlong alone in Nami\`s map room — the prison where she drew charts for eight years. He sees the bloodstains on the desk. The tears in the paper. The pen she used until her fingers bled.

Luffy destroys it. Every wall. Every map. Every chain. He tears the building apart with his bare rubber hands.

"You made my navigator CRY!"

Arlong falls. Nami is free. The village that has been suffering for a decade erupts in celebration.

Nami joins the crew for real. She is going to draw a map of the entire world. And she is going to do it with the Straw Hat Pirates.`,scene:'action',mood:'#d4a017',characters:['Luffy','Nami','Zoro','Sanji','Usopp'],effects:{rel:{nami:2,luffy:1},stats:{str:1}},choices:[{text:'Set sail for the Grand Line. The real adventure begins.',next:'op_grand_line'}]};

// ---- ARC 2: GRAND LINE — ALABASTA ----

OP_NODES.op_grand_line = {text:`Reverse Mountain. The entrance to the Grand Line. The Going Merry rides the upward current — sailing UP a mountain — and crashes into the Grand Line on the other side.

Your first encounter: a giant whale named Laboon, headbutting the Red Line. Waiting for a pirate crew that left fifty years ago and never came back. Luffy punches the whale, declares them rivals, and paints a terrible Jolly Roger on its forehead as a promise to return.

The Grand Line is everything they warned about. Unpredictable weather. Islands with eternal seasons. Pirates, marines, and monsters that make the East Blue look like a kiddie pool.

At Whiskey Peak, you meet someone unexpected — Nico Robin. An archaeologist with the power of the Flower-Flower Fruit and the last survivor of Ohara, an island the World Government burned for getting too close to the truth.

But more immediately, you meet Princess Nefertari Vivi of Alabasta — a kingdom being torn apart by a civil war engineered by one man.

Crocodile. One of the Seven Warlords of the Sea. A sand-man with a god complex.`,scene:'action',mood:'#d4a017',characters:['Luffy','Robin'],effects:{flags:{grand_line:true}},choices:[{text:'Help Vivi save Alabasta. It is the right thing to do.',next:'op_alabasta',effects:{stats:{cou:1},rel:{luffy:1}}},{text:'This is above your pay grade. Suggest avoiding Crocodile.',next:'op_alabasta_cautious',effects:{stats:{int:1}}}]};

OP_NODES.op_alabasta_cautious = {text:`"Crocodile is a Warlord," you say. "He has the backing of the World Government and a Logia Devil Fruit. Sand. We cannot even touch him."

Luffy stares at you. Then he grins. "So we figure out how to touch him."

There is no talking Luffy out of helping someone. Vivi is crying. A million people are about to kill each other in a war they do not even understand. And Crocodile is pulling the strings from the shadows.

"Nami, plot a course for Alabasta."

You are going to fight a Warlord. Because that is what this crew does.`,scene:'calm',mood:'#d4a017',characters:['Luffy','Nami'],effects:{stats:{int:1}},choices:[{text:'Research Crocodile\`s weakness on the way.',next:'op_alabasta',effects:{stats:{int:1}}},{text:'Train for the fight. You need to be stronger.',next:'op_alabasta',effects:{stats:{str:1}}}]};

OP_NODES.op_alabasta = {text:`Alabasta is dying. The desert kingdom is split by civil war — the royal army against the rebels. One million soldiers on each side. And Crocodile\`s organization, Baroque Works, has been feeding both sides lies for years.

The crew splits up. Vivi races to stop the armies. Each Straw Hat faces a Baroque Works officer. Zoro cuts steel for the first time. Sanji impersonates an agent. Chopper — the reindeer doctor who joined in Drum Island — fights with seven transformations.

You face your own opponent. The battles rage across the capital city as the clock counts down to a bomb that will kill everyone.

And in the underground tomb, Luffy fights Crocodile. Sand against rubber. A Warlord against a teenager. Luffy loses. Twice. He is impaled, dried out, and left for dead.

He gets back up. He always gets back up.

Water defeats sand. Luffy\`s blood-soaked fists connect. Crocodile — the untouchable — falls.`,scene:'action',mood:'#cc6600',characters:['Luffy','Zoro','Sanji','Nami'],effects:{stats:{str:1,cou:1},flags:{crocodile_defeated:true}},choices:[{text:'Celebrate with the crew. Vivi saved her country.',next:'op_skypiea',effects:{rel:{luffy:1}}},{text:'This victory cost too much. Reflect on what is coming next.',next:'op_skypiea',effects:{stats:{int:1}}}]};

// ---- ARC 3: SKYPIEA & WATER 7 ----

OP_NODES.op_skypiea = {text:`An island in the sky. Ten thousand meters above the sea. Skypiea — a land of clouds, angels, and a god who calls himself Enel.

Enel has the Thunder-Thunder Fruit — he IS lightning. He can destroy anything, hear everything across the island, and restart hearts with electrical shocks. He has declared himself God and plans to destroy Skypiea entirely.

The crew fights through his priests. You battle in the forests of Upper Yard — a chunk of Jaya island launched into the sky four hundred years ago.

The climax: Luffy versus Enel. Rubber versus lightning. The one matchup where Enel\`s invincibility means nothing. Luffy\`s rubber body is a natural insulator.

"Why... why doesn\`t it WORK?!" Enel\`s face — twisted in disbelief — becomes legendary.

Luffy rings the golden bell that has been silent for four centuries, sending its sound across the sky and the sea below. A signal to a man on the ground who has been searching for proof that the City of Gold existed.

The bell rings. Dreams come true. Even the impossible ones.`,scene:'action',mood:'#d4a017',characters:['Luffy','Nami','Zoro'],effects:{stats:{str:1},flags:{skypiea_complete:true}},choices:[{text:'Continue to the next island. Water 7 awaits.',next:'op_water7'}]};

OP_NODES.op_water7 = {text:`Water 7. The city of water, built on sinking foundations. Home of Galley-La Company — the best shipwrights in the world.

The Going Merry is dying. The keel is broken. No repair can save her.

This breaks the crew. Usopp refuses to accept it — the Merry was their first ship, their home. He challenges Luffy for ownership.

They fight. Luffy wins. Usopp leaves the crew.

Then everything gets worse. Robin vanishes. She has turned herself over to the World Government — CP9, a secret assassination unit operating from within the Galley-La Company. Their leader, Rob Lucci, is a human weapon. Leopard Zoan fruit. The strongest Rokushiki user alive.

Robin is being taken to Enies Lobby — the judicial island — where she will be executed. She says she wants to die.

She is lying. She wants to live. She is sacrificing herself to save the crew from the World Government\`s wrath.`,scene:'calm',mood:'#0a2a5a',characters:['Luffy','Robin','Usopp'],effects:{flags:{water7:true}},choices:[{text:'We are going to Enies Lobby. We are getting Robin back.',next:'op_enies_lobby',effects:{stats:{cou:2},rel:{luffy:1,robin:1}}},{text:'This is the World Government. We need a plan first.',next:'op_enies_plan',effects:{stats:{int:1}}}]};

OP_NODES.op_enies_plan = {text:`Nami coordinates. Franky — a cyborg shipwright who was initially an enemy — provides the Sea Train that will take you to Enies Lobby. Galley-La\`s shipwrights back you up. Even Kokoro, the old drunk mermaid, steers the train through the underwater tunnel.

You study CP9. Six agents, each a master of Rokushiki — the six superhuman martial arts. Iron Body. Moon Walk. Finger Pistol. Tempest Kick. Shave. Paper Art.

Rob Lucci alone is worth a Buster Call. The others are not far behind.

"We are declaring war on the World Government," Nami says, looking at the crew. "Everyone understands that, right?"

Luffy nods. "Yeah. Robin is our friend."

That is the entire plan.`,scene:'action',mood:'#0a2a5a',characters:['Luffy','Nami'],effects:{stats:{int:1},rel:{robin:1}},choices:[{text:'Board the Sea Train. Go get Robin.',next:'op_enies_lobby',effects:{stats:{cou:1}}}]};

OP_NODES.op_enies_lobby = {text:`Enies Lobby. The island of justice. Ten thousand marines, CP9, and the Gates of Justice itself.

Luffy stands on the courthouse tower. Robin is across the gap, on the Bridge of Hesitation, surrounded by agents.

"Robin!" Luffy shouts. "SAY YOU WANT TO LIVE!"

Tears stream down her face. Twenty years of running. Twenty years of being hunted for the crime of existing. Every person she ever trusted betrayed her or died.

"I WANT TO LIVE!" Robin screams. "TAKE ME OUT TO SEA WITH YOU!"

Luffy turns to Usopp — disguised as "Sogeking" — and points to the World Government flag flying above the tower.

"Shoot it down."

The flag burns. The Straw Hat Pirates have declared war on the World Government. There is no going back.`,scene:'action',mood:'#cc2200',characters:['Luffy','Robin','Usopp'],effects:{rel:{robin:3,luffy:1},flags:{war_declared:true}},choices:[{text:'Fight through CP9. Each crew member takes one.',next:'op_cp9_fight',effects:{stats:{str:1}}},{text:'Go straight for Rob Lucci with Luffy.',next:'op_lucci_fight',effects:{stats:{cou:1},rel:{luffy:1}}}]};

OP_NODES.op_cp9_fight = {text:`The crew splits. Every Straw Hat faces a CP9 agent in a one-on-one battle across the island.

Zoro versus Kaku — the giraffe swordsman. Sanji versus Jabra — the wolf. Nami versus Kalifa — the soap woman. Chopper goes berserk. Franky reveals his full cyborg arsenal.

You face your own agent. Rokushiki is terrifying — Iron Body turns their skin to steel, Shave makes them vanish, Finger Pistol pierces like a bullet. But you have something they do not: you are fighting for someone you love.

Every battle pushes the crew to their absolute limits. New techniques are born in desperation. Zoro invents Asura. Sanji\`s legs catch fire. Chopper transforms into a monster.

One by one, CP9 falls.

But the final battle — Luffy versus Rob Lucci — is still raging.`,scene:'action',mood:'#cc2200',characters:['Zoro','Sanji','Nami'],effects:{stats:{str:2,cou:1}},choices:[{text:'Go support Luffy against Lucci.',next:'op_lucci_fight',effects:{rel:{luffy:1}}},{text:'Get Robin to safety. That is the mission.',next:'op_escape',effects:{rel:{robin:1}}}]};

OP_NODES.op_lucci_fight = {text:`Luffy versus Rob Lucci. The fight that defines an era.

Lucci in his hybrid leopard form is a killing machine — each Rokushiki technique amplified by his Zoan power. His Finger Pistol pierces Luffy\`s rubber. His Tempest Kick slices through buildings.

Luffy unleashes Gear Second — steam erupts from his body as he pumps blood at superhuman speed. Then Gear Third — inflating his bones to giant size.

The battle destroys half of Enies Lobby. For the first time, Luffy is fighting someone who matches him in raw determination. Lucci fights to kill. Luffy fights to save.

The final exchange: Lucci\`s strongest Six King Gun versus Luffy\`s Jet Gatling. Hundreds of rubber punches, each one carrying the weight of every person Luffy has ever promised to protect.

Lucci falls. He does not get back up.

But Luffy cannot move. His body is broken. The Buster Call — a fleet of warships authorized to annihilate the entire island — is incoming.`,scene:'action',mood:'#cc0000',characters:['Luffy'],effects:{stats:{cou:1},flags:{lucci_defeated:true}},choices:[{text:'Carry Luffy. Get everyone to the escape point.',next:'op_escape',effects:{rel:{luffy:2},stats:{str:1}}},{text:'Hold the bridge. Buy time for the crew to escape.',next:'op_escape',effects:{stats:{cou:2}}}]};

OP_NODES.op_escape = {text:`The Buster Call fires. Warships fill the horizon. Cannonballs rain down.

And then — a miracle. The Going Merry sails into the bombardment. Alone. No one at the helm.

The ship came to save its crew one last time.

Everyone boards. The Merry carries them through the Gates of Justice, through the bombardment, through the impossible. And then, with a groan that sounds almost like a voice, the keel snaps.

The Going Merry is dying. Truly, finally dying.

Luffy lights the funeral pyre himself. The crew stands in the ocean, watching their first ship burn. Merry\`s voice echoes across the water — a klabautermann, the spirit of a beloved ship:

"I am sorry. I wanted to carry you just a little farther."

Everyone cries. Even Zoro.

"Thank you, Merry. For everything."

The flag burns. The mast falls. The Going Merry sinks into the sea.`,scene:'calm',mood:'#0a2a5a',characters:['Luffy','Zoro','Nami','Sanji','Usopp','Robin'],effects:{flags:{merry_funeral:true},rel:{luffy:1}},choices:[{text:'The crew needs a new ship. Head to Franky\`s workshop.',next:'op_new_world_prep',effects:{rel:{luffy:1}}},{text:'Mourn. Then move forward. That is what pirates do.',next:'op_new_world_prep',effects:{stats:{cou:1}}},{text:'Yoriichi had a twin brother. Michikatsu. The one who became Upper Moon One. Face that legacy now.',next:'ds_kokushibo_moon',effects:{stats:{cou:2},flags:{kokushibo_confrontation:true}}}]};

// ---- ARC 4: SUMMIT WAR & NEW WORLD ----

OP_NODES.op_new_world_prep = {text:`Franky builds the Thousand Sunny — a ship worthy of the Pirate King\`s crew. Adam Wood hull, Coup de Burst cannon, soldier dock system. She is beautiful.

The crew sails on. Thriller Bark — an island-ship of the dead where Brook, a living skeleton musician, joins after decades of solitude. The Sabaody Archipelago — where the crew meets the dark truth of the World Government: the Celestial Dragons, the slave trade, the admirals.

At Sabaody, everything falls apart. Admiral Kizaru — a man made of light — appears. Bartholomew Kuma — a Warlord converted into a government weapon — launches each crew member to a different corner of the world.

The crew is scattered. Luffy lands on Amazon Lily, befriends Empress Boa Hancock, and learns that his brother Ace — Portgas D. Ace, son of Gold Roger himself — has been captured by the marines and sentenced to execution at Marineford.

Luffy charges to rescue him. You are separated too, thrown to a distant island. But you hear the news.

The Summit War is coming. The greatest battle the world has ever seen.`,scene:'action',mood:'#1a0a2e',characters:['Luffy'],effects:{flags:{crew_scattered:true}},choices:[{text:'Find a way to Marineford. Luffy needs all the help he can get.',next:'op_marineford',effects:{stats:{cou:2},rel:{luffy:1}}},{text:'Use this time to train. Get stronger for what comes next.',next:'op_timeskip',effects:{stats:{str:2},flags:{trained_2y:true}}},{text:'Try to reunite the crew. Strength in numbers.',next:'op_timeskip',effects:{stats:{int:1},rel:{zoro:1,sanji:1}}}]};

OP_NODES.op_marineford = {text:`Marineford. The headquarters of the Marine forces. Three admirals. The Fleet Admiral. One hundred thousand marines.

Against them: Whitebeard. Edward Newgate. The Strongest Man in the World. His crew and allies — forty-three pirate ships, the last great fleet of the old era.

And Luffy. A teenager who broke into Impel Down, freed hundreds of prisoners including former Warlords, and sailed straight into the war to save his brother.

You made it. Barely. The war has already begun when you arrive — Whitebeard\`s Tremor-Tremor Fruit cracks the sky and tilts the sea. Admirals clash with commanders. The ice melts, the ground shatters, the world holds its breath.`,scene:'action',mood:'#cc0000',characters:['Luffy'],effects:{stats:{cou:1},flags:{marineford:true}},choices:[{text:'Fight through the marines to reach Luffy.',next:'op_mf_fight_through',effects:{stats:{str:1}}},{text:'Support from range — draw admiral attention away from Luffy.',next:'op_mf_distraction',effects:{stats:{int:1}}},{text:'Find Whitebeard\`s crew. Coordinate with them.',next:'op_mf_whitebeard',effects:{stats:{per:1}}}]};

OP_NODES.op_mf_fight_through = {text:`You carve a path through the marine ranks. Vice admirals, captains, thousands of soldiers — the battlefield is madness given form.

Luffy is ahead of you, running on pure willpower. His body is breaking — Impel Down\`s poison, Ivankov\`s hormonal treatment, and now this war. He should not be standing. He does not care.

You watch him unlock Conqueror\`s Haki mid-battle — a shockwave of pure willpower that drops hundreds of marines where they stand.

"He has it," Whitebeard says, watching from the rear. "The qualities of a king."

You catch up to Luffy at the execution platform. Ace is there — chained, waiting to die.`,scene:'action',mood:'#cc0000',characters:['Luffy'],effects:{stats:{str:1}},choices:[{text:'Help clear the path to the platform.',next:'op_mf_rescue_ace',effects:{stats:{cou:1}}},{text:'Watch Luffy\`s back. Protect him from behind.',next:'op_mf_rescue_ace',effects:{stats:{per:1}}}]};

OP_NODES.op_mf_distraction = {text:`You draw fire. Hit marine positions. Make noise. Anything to pull attention away from Luffy\`s charge toward the execution platform.

Admiral Kizaru appears in front of you — a man made of light. He moves at light speed. His kicks are laser beams.

"Ohhh scary~" he drawls, firing a beam that vaporizes the ground beside you. You barely dodge.

You cannot beat an admiral. But you can make him waste ten seconds — and ten seconds is everything in this war.

Whitebeard notices your diversion. His commanders exploit the opening. The push toward the platform accelerates.`,scene:'action',mood:'#cc0000',effects:{stats:{int:1,cou:1}},choices:[{text:'Fall back to the main force. You did your part.',next:'op_mf_rescue_ace',effects:{stats:{per:1}}},{text:'Keep drawing fire. Every second counts.',next:'op_mf_rescue_ace',effects:{stats:{cou:2}}}]};

OP_NODES.op_mf_whitebeard = {text:`You find Marco the Phoenix — Whitebeard\`s first division commander. Blue flames wrap his body as he regenerates from wounds that should kill any normal person.

"Another one of Straw Hat\`s crew?" Marco grins. "Your captain is insane. I like him."

You coordinate with the Whitebeard Pirates. Marco provides air support — his phoenix form can fly and regenerate. Vista\`s swordsmanship keeps the marines off balance. Jozu\`s diamond body tanks cannon fire.

Together, you push the line forward. Luffy is almost at the platform.

Whitebeard himself stands at the rear, his bisento splitting the earth with every swing. He is old. He is wounded. IV lines still trail from his arms. But every marine who gets close learns why he is called the Strongest Man in the World.`,scene:'action',mood:'#cc0000',characters:['Luffy'],effects:{stats:{per:1}},choices:[{text:'Push with the final charge to the platform.',next:'op_mf_rescue_ace',effects:{stats:{cou:1}}}]};

OP_NODES.op_mf_rescue_ace = {text:`Luffy reaches the platform. Mr. 3 — a former villain from the Grand Line — creates a wax key that unlocks Ace\`s shackles. Ace is free.

Fire erupts. Ace\`s Flame-Flame Fruit roars back to life. Brothers fighting side by side — rubber and fire — they cut through marines like legends.

For one brief, shining moment, it looks like they will escape.

Then Akainu speaks. "Whitebeard is a failure of his era."

Ace stops. Turns back. Fire versus magma.

Magma consumes fire. Akainu\`s fist punches through Ace\`s chest — the chest he threw in front of Luffy to protect his little brother.

Ace dies in Luffy\`s arms. "Thank you for loving me."

Luffy breaks. Completely.

Whitebeard dies standing. 267 sword wounds, 152 gunshot wounds, 46 cannon blasts. Zero wounds on his back — he never ran. His final words shake the world: "ONE PIECE IS REAL!"

The war ends. The old era dies with it. Shanks arrives and declares the war over. No one argues.`,scene:'action',mood:'#cc0000',characters:['Luffy'],effects:{flags:{ace_dies:true}},choices:[{text:'Stay with Luffy. He cannot be alone right now.',next:'op_mf_aftermath',effects:{rel:{luffy:3}}},{text:'Mourn the fallen. Then prepare for what comes next.',next:'op_mf_aftermath',effects:{stats:{cou:1}}},{text:'[WHAT IF] You saw Akainu move. What if you pushed Ace out of the way in time?',next:'op_mf_save_ace',effects:{stats:{cou:2,per:1}}}]};

// ---- MARINEFORD WHAT-IF: ACE LIVES ----

OP_NODES.op_mf_save_ace = {text:`Time slows. You see Akainu\`s magma fist rising. You see Ace turning back, pride overriding survival. You see Luffy, exhausted, defenseless behind his brother.

You move. Not thinking. Not planning. Pure instinct forged in every battle since the East Blue.

Your body slams into Ace at full speed, throwing him sideways. Akainu\`s fist passes through the space where Ace\`s chest was a heartbeat ago. The magma sears your shoulder — agony like nothing you have felt — but the killing blow misses its mark.

Ace hits the ground, stunned. Luffy stares. Marco swoops in — blue phoenix flames wrapping your burned flesh, regenerating just enough to keep you conscious.

"YOU IDIOT!" Ace screams at you, fire blazing. But he is alive. He is ALIVE.

Whitebeard sees the opening. His bisento cracks the earth beneath Akainu, dropping the admiral into a chasm. "TAKE MY SONS AND RUN!"

The old man turns to face the entire marine force alone. He knows he is dying. He chooses how.

His final quake splits Marineford in half. The marines cannot pursue. Shanks arrives and draws the line.

Whitebeard dies standing. But this time, when his final words echo — "ONE PIECE IS REAL!" — Ace is there to hear them. And the fire in his eyes burns brighter than magma.`,scene:'action',mood:'#cc6600',characters:['Luffy'],effects:{stats:{cou:2},flags:{ace_saved:true,what_if:true}},choices:[{text:'Stay at Ace\`s side as you escape. You saved him — see it through.',next:'op_mf_ace_lives',effects:{rel:{luffy:2}}},{text:'Fall back with the Whitebeard crew. Get your wounds treated.',next:'op_mf_ace_lives',effects:{stats:{per:1}}}]};

OP_NODES.op_mf_ace_lives = {text:`Recovery takes weeks. Law\`s submarine becomes a floating hospital — Luffy, you, Ace, Jinbe, all of you broken in different ways.

Luffy wakes up and cries. But this time they are not screams of despair. They are tears of relief. His brother is in the next bed, bandaged, sleeping, breathing.

Ace wakes three days later. The first thing he does is find you.

"You almost died for me." His voice cracks. "Why?"

You do not have a grand speech. You tell him the truth — whatever that truth is for you. That you could not watch Luffy lose everything. That no one deserves to die for someone else\`s insult. That the world is better with Portgas D. Ace in it.

Ace does not cry in front of people. But his hat hides his face for a long time.

Luffy sends the same message — the sixteen bells, the flowers, the two-year promise. But this time, the message carries different weight. Train. Grow. Come back. And this time, Ace adds his own fire to the signal — a column of flame visible across the ocean.

The world takes notice. The son of Roger lives. The era is not ending — it is transforming.

Sengoku resigns. Akainu rises to Fleet Admiral, obsessed with the one that got away. And in the shadows, Blackbeard accelerates his plans, knowing the board has changed.`,scene:'calm',mood:'#0a2a5a',characters:['Luffy'],effects:{flags:{ace_alive:true},rel:{luffy:2}},choices:[{text:'Train with Ace during the two years. Fire and will — an unstoppable combination.',next:'op_mf_ace_newworld',effects:{stats:{str:2,cou:1}}},{text:'Follow the original plan. Train separately, reunite stronger.',next:'op_mf_ace_newworld',effects:{stats:{str:1,int:1}}}]};

OP_NODES.op_mf_ace_newworld = {text:`Two years pass. The crew reunites at Sabaody. But this time, there is an extra face at the dock.

Portgas D. Ace. Former Second Division Commander of the Whitebeard Pirates. Son of the Pirate King. And now — an ally sailing alongside the Straw Hats into the New World.

He is different. The recklessness that nearly killed him at Marineford has been tempered into controlled fury. His flames burn hotter, denser — he has awakened his Devil Fruit, turning the air itself into an inferno at will. The Flame Emperor technique creates a miniature sun in his palm.

"I am not here as your crew member," Ace tells Luffy. "I am here as your brother. And I am going to make sure you become the Pirate King — even if I have to burn the whole world down to clear the path."

Luffy grins. "Shishishi! You sound cool, Ace!"

"Shut up."

The New World hits different with Ace at your side. Doflamingo\`s Birdcage? Ace melts the strings before they can close. Big Mom\`s homies? Fire consumes them. The underworld trembles — the son of Roger is on the warpath, and he has nothing left to prove to anyone except himself.

But Blackbeard watches. The man who traded Ace\`s life for a Warlord title still carries the Yami-Yami no Mi and the Gura-Gura no Mi — darkness and earthquakes in one body. The rematch is inevitable.

And when it comes, Ace will not run. Not this time. This time, he fights for the future instead of the past.`,scene:'action',mood:'#cc4400',characters:['Luffy','Zoro','Sanji'],effects:{stats:{str:2},flags:{ace_newworld:true}},choices:[{text:'Sail into the New World with the Fire Fist at your side.',next:'op_dressrosa',effects:{rel:{luffy:2},stats:{cou:1}}},{text:'Help Ace settle his score with Blackbeard first.',next:'op_dressrosa',effects:{stats:{str:1,cou:1}}}]};

OP_NODES.op_mf_aftermath = {text:`Jinbe carries Luffy\`s broken body to safety. Law — the Surgeon of Death — performs emergency surgery on the submarine. Luffy flatlines twice.

He wakes up on Amazon Lily. And for the first time, he does not smile. He does not laugh. He does not say he will become Pirate King.

He screams.

He tears through a forest, punching trees until his fists bleed. Jinbe finds him and knocks sense into him — literally.

"What do you still have?"

Luffy stops. Thinks. Through the grief, through the agony, one thing remains.

"I still have my crew."

That is when the message arrives: Luffy appears at Marineford one more time, rings the Ox Bell sixteen times, throws a bouquet of flowers, and bows his head. The message, decoded by the crew: "Wait two years. Train. Come back stronger."

The Straw Hat Pirates separate. Each to their own island, their own training, their own growth. The promise holds.

Two years.`,scene:'calm',mood:'#0a2a5a',characters:['Luffy'],effects:{flags:{marineford_aftermath:true}},choices:[{text:'Train for two years. Become strong enough that no one you love dies again.',next:'op_timeskip',effects:{stats:{str:2}}},{text:'Find where the crew scattered. Make sure everyone is safe.',next:'op_timeskip',effects:{stats:{per:1},rel:{zoro:1,sanji:1,nami:1}}}]};

OP_NODES.op_timeskip = {text:`Two years pass. The crew trains in separate corners of the world.

Luffy trains under Rayleigh — the Dark King, first mate of Gold Roger himself. He masters all three forms of Haki.

Zoro trains under Mihawk — the man who nearly killed him. He conquers the black blade.

Each Straw Hat returns to Sabaody two years later. Stronger. Harder. Ready.

You have changed too. Two years of relentless training, pushing your body and abilities beyond every limit you thought you had. The New World will demand nothing less.

The Thousand Sunny descends to Fish-Man Island — ten thousand meters below the sea — and then rises into the New World. The second half of the Grand Line. Emperor territory.

The seas here are ruled by four pirates: Big Mom, Kaido, Shanks, and Blackbeard. Each one commands territories, armies, and power that dwarfs anything in the first half.

The crew\`s first destination: Punk Hazard, an island of ice and fire. And from there — Dressrosa, where a Warlord named Doflamingo pulls the strings of an entire kingdom.`,scene:'calm',mood:'#0a2a5a',characters:['Luffy','Zoro','Sanji','Nami'],effects:{stats:{str:2,per:1},flags:{timeskip_done:true}},choices:[{text:'Follow Luffy\`s lead into the New World.',next:'op_dressrosa',effects:{rel:{luffy:1}}},{text:'Suggest alliances. They cannot take on Emperors alone.',next:'op_alliance',effects:{stats:{int:1}}},{text:'Savor the reunion at Sabaody — two years apart deserves a proper gathering.',next:'op_sabaody_return',effects:{stats:{cha:1},rel:{zoro:1,sanji:1}}}]};

OP_NODES.op_alliance = {text:`Your instinct is right. Luffy forms an alliance with Trafalgar Law — the Surgeon of Death, a former Warlord with the Op-Op Fruit and a burning vendetta against Doflamingo.

"This is not about friendship," Law says coldly. "This is strategy. We take down Doflamingo, then Kaido. That is the plan."

Luffy agrees to the alliance for entirely different reasons. "You seem cool. Let\`s be friends!"

Law stares at him. "Did you hear anything I said?"

The alliance is forged — and it will reshape the world.`,scene:'calm',mood:'#0a2a5a',characters:['Luffy'],effects:{flags:{law_alliance:true},stats:{int:1}},choices:[{text:'Head to Dressrosa.',next:'op_dressrosa'}]};

OP_NODES.op_dressrosa = {text:`Dressrosa. The kingdom of passion. Ruled by Donquixote Doflamingo — a Warlord, a former Celestial Dragon, and the puppet master behind the underworld\`s weapons trade. His String-String Fruit lets him control people like marionettes.

The kingdom looks peaceful. It is not. Doflamingo has turned thousands of citizens into living toys — erased from memory, forced to serve. The rebellion lives underground, led by the toy soldier Kyros and the dwarves of Tontatta.

The arena — the Corrida Colosseum — hosts a battle royale for the prize of a Devil Fruit. The Flame-Flame Fruit. Ace\`s fruit. Luffy enters under a disguise.

The battles escalate. Law is captured. Doflamingo activates his Birdcage — strings surrounding the entire island, shrinking, cutting everything they touch. A death trap with a time limit.

Luffy awakens Gear Fourth — Boundman. His rubber body, infused with Haki, becomes a bouncing, devastating weapon of pure force.

Doflamingo falls. The Birdcage vanishes. The toys become human. An entire kingdom remembers the people it forgot.`,scene:'action',mood:'#cc6600',characters:['Luffy','Zoro','Sanji'],effects:{stats:{str:1,cou:1},flags:{doflamingo_defeated:true}},choices:[{text:'Press on to Whole Cake Island. Sanji is in trouble.',next:'op_wci',effects:{rel:{sanji:1}}},{text:'Head straight for Wano. Kaido is the real target.',next:'op_wano',effects:{stats:{cou:1}}},{text:'Train your Haki before the next Emperor battle — Doflamingo exposed your limits.',next:'op_haki_awakening',effects:{stats:{per:1,str:1}}}]};

// ---- ARC 5: WANO & ENDINGS ----

OP_NODES.op_wci = {text:`Sanji is gone. Taken by his family — the Vinsmokes, a royal lineage of genetically modified assassins. He is being forced to marry Charlotte Pudding, daughter of Big Mom — one of the Four Emperors.

Luffy takes half the crew to rescue him. You are among them.

Whole Cake Island is Big Mom\`s territory — an entire archipelago made of food, populated by creatures born from her Soul-Soul Fruit. Homies — living objects infused with stolen human souls. The sun, the clouds, the trees — everything is alive and loyal to Big Mom.

Luffy finds Sanji. Sanji kicks him. Again and again. Trying to drive him away. Trying to protect the crew by sacrificing himself.

Luffy takes every hit. Does not fight back. "I cannot become the Pirate King without you."

Sanji breaks down crying. He comes back.

The escape from Whole Cake Island is legendary. Luffy fights Big Mom\`s strongest son — Katakuri, who can see the future. The battle lasts twelve hours. Luffy unlocks Advanced Observation Haki and defeats a billion-berry commander through sheer refusal to stay down.

The crew escapes. Barely. Big Mom swears revenge.`,scene:'action',mood:'#cc6600',characters:['Luffy','Sanji','Nami'],effects:{rel:{sanji:3,luffy:1},flags:{wci_complete:true}},choices:[{text:'Head to Wano. The war against Kaido awaits.',next:'op_wano'}]};

OP_NODES.op_wano = {text:`Wano Country. A samurai nation isolated from the world for centuries, ruled by Kaido — the King of the Beasts. The Strongest Creature in the World. A dragon who cannot be killed.

Kaido has enslaved Wano. The people starve while his Beast Pirates feast. The samurai resistance — led by the ghost of Kozuki Oden\`s retainers, who traveled twenty years forward in time — prepares for war.

The alliance assembles: the Straw Hats, Heart Pirates, Kid Pirates, the samurai of Wano, the mink tribe of Zou. Against them: Kaido, his crew of a thousand Zoan users, and Big Mom, who has arrived for revenge.

Two Emperors. Against an alliance of pirates, samurai, and minks.

The raid on Onigashima begins.`,scene:'action',mood:'#1a0a2e',characters:['Luffy','Zoro','Sanji',{text:'The drums of liberation echo — Luffy\'s true power awakens.',next:'op_nika_awakening'}],effects:{flags:{wano_raid:true}},choices:[{text:'Infiltrate Onigashima quietly. Sabotage from within before the battle.',next:'op_wano_infiltration',effects:{stats:{int:1}}},{text:'Fight on the Live Floor. Face Kaido\`s commanders.',next:'op_kaido_battle',effects:{stats:{str:1}}},{text:'Go to the rooftop. Fight Kaido and Big Mom directly.',next:'op_rooftop',effects:{stats:{cou:2}},check:{stat:'str',dc:13,pass:'op_rooftop',fail:'op_kaido_battle'}}]};

// ---- ARC 5a: WANO WAR — EXPANDED ----

OP_NODES.op_wano_infiltration = {text:`Onigashima looms ahead — a skull-shaped island carried on Kaido\`s back, floating above Wano\`s sea. The plan is simple: the samurai disguise themselves as Beast Pirates, infiltrate the banquet, and strike when Kaido is drunk.

You slip inside wearing stolen armor. The halls reek of sake and roasted meat. Beast Pirates carouse in every chamber, oblivious. Gifters — soldiers who ate artificial Zoan fruits — stumble around with animal parts grafted grotesquely onto their bodies.

You pass the armory. Thousands of weapons manufactured by Wano\`s enslaved smiths. Enough to arm an army ten times over. This is what Kaido has been building — a war machine powered by a nation\`s suffering.

Yamato finds you. Kaido\`s own child — horned, wild-eyed, wielding a kanabo club. "I have been waiting for someone like you. I am Oden!" Yamato has been carrying the samurai\`s will for twenty years, chained to this island by explosive shackles.

"I read Oden\`s journal. I know what Joy Boy promised. And I know your captain — Straw Hat Luffy — is the one we have been waiting for."

The shackles need to come off. And the explosives Kaido rigged throughout Onigashima need to be disarmed — or the floating island will drop on the Flower Capital and kill everyone below.`,scene:'action',mood:'#1a0a2e',characters:['Luffy','Zoro'],effects:{stats:{int:1},flags:{wano_infiltration:true}},choices:[{text:'Help Yamato break free. An Emperor\`s child is a powerful ally.',next:'op_onigashima_raid',effects:{stats:{str:1},rel:{luffy:1}}},{text:'Sabotage the armory. Deny Kaido his weapons supply.',next:'op_onigashima_raid',effects:{stats:{int:1}}},{text:'Head straight to the Live Floor. The battle cannot wait.',next:'op_kaido_battle',effects:{stats:{cou:1}}}]};

OP_NODES.op_onigashima_raid = {text:`The raid erupts. Thousands of samurai throw off their disguises. The Akazaya Nine — Oden\`s retainers who traveled through time itself — charge Kaido on the rooftop and draw first blood. Red Scabbards, scarlet with rage and twenty years of grief, stab their blades into the dragon\`s hide.

Kaido bleeds. For the first time in years, he bleeds.

Below, the Live Floor becomes a warzone. Queen the Plague releases Ice Oni — a virus that freezes and zombifies anyone it touches. Chopper races to synthesize an antidote while the infected turn on their allies.

You fight through corridors choked with smoke and screaming. Sasaki\`s armored corps, Who\`s Who\`s guerrilla units, Black Maria\`s web traps — every floor is a different nightmare.

Jinbe arrives — the former Warlord, now officially a Straw Hat — and his Fish-Man Karate shatters a platoon. "I told Big Mom to her face: I quit! Now let me show you what freedom fights like."

The tide turns when the samurai of Wano — the civilians Kaido thought he had broken — pick up weapons and join the fight. Farmers, fishermen, smiths. Twenty years of suffering forged into steel resolve.

Onigashima is floating toward the Flower Capital. Momonosuke — an eight-year-old boy carrying the weight of a nation — must use his dragon form to push the island off course. He is terrified. He does it anyway.`,scene:'action',mood:'#cc0000',characters:['Luffy','Zoro','Sanji'],effects:{stats:{str:1,cou:1},flags:{onigashima_full:true}},choices:[{text:'Join the Worst Generation on the rooftop. The real battle is above.',next:'op_rooftop_supernova',effects:{stats:{cou:2}}},{text:'Hold the Live Floor. If it falls, the whole raid fails.',next:'op_kaido_battle',effects:{stats:{str:1}}}]};

OP_NODES.op_rooftop_supernova = {text:`The rooftop of Onigashima. Open sky, hurricane winds, two Emperors.

Kaido in his azure dragon form coils across the heavens — a hundred meters of mythical power. Big Mom rides Zeus, her thundercloud homie, lightning crackling between her fingers. Together they are the strongest force on the planet.

Against them: five members of the Worst Generation. Luffy. Zoro. Law. Kid. Killer. And you.

"Worororo! Is this the best the new era can muster?" Kaido\`s Blast Breath — a beam of pure destruction — carves a trench across the rooftop. You dodge by inches. The heat singes your hair.

Law\`s Room expands. "Shambles!" He teleports Kid\`s metal constructs inside Kaido\`s guard. Kid\`s Punk Gibson — a massive electromagnetic arm — slams into the dragon\`s jaw.

Zoro draws Enma — Oden\`s cursed blade that drains its wielder\`s Haki. The sword screams. Zoro screams louder. He channels everything into a single slash — Conqueror\`s Haki coating the blade black and red.

The cut lands. A scar opens across Kaido\`s chest in the shape of a cross, overlaying Oden\`s original wound. The dragon ROARS. "You... you remind me of Oden!"

Luffy grins. His fists turn black with Armament Haki. "I am going to surpass all of them."

Then Big Mom combines her attack with Kaido\`s. A fusion of lightning and flame — Conquest of the Sea. The rooftop explodes. You are thrown backward. Killer catches you.

"Get up," he says. "We are not done."`,scene:'action',mood:'#cc0000',characters:['Luffy','Zoro'],effects:{stats:{str:2,cou:1}},choices:[{text:'Focus on Big Mom. Separate the Emperors.',next:'op_gear5_awakening',effects:{stats:{int:1}}},{text:'Go all-in on Kaido with Luffy.',next:'op_gear5_awakening',effects:{stats:{cou:2},rel:{luffy:1}}}]};

OP_NODES.op_gear5_awakening = {text:`Big Mom falls. Law and Kid push her off the island with everything they have — awakened Devil Fruits burning through their life force. She plummets into the magma beneath Wano, screaming curses.

But Kaido remains. And Luffy is alone with him now.

Kaido in his hybrid form — part man, part dragon, all destruction. His kanabo swings crack the air itself. Thunder Bagua. Luffy dodges. Barely. Again. Again.

Then Kaido lands it. A direct hit coated in Conqueror\`s Haki. Luffy\`s eyes go blank. His heartbeat stops. He falls off Onigashima and plunges into the sea below.

The raid freezes. Word spreads: Straw Hat is dead. Joy Boy is gone.

You feel it before you hear it. A rhythm. Deep. Primal. Like the earth itself has a pulse.

Ba-dum. Ba-dum. Ba-DUM.

The Drums of Liberation.

Luffy\`s body rises from the ocean. His skin turns white. His hair flows like flame. His eyes are round, wild, ancient. He is laughing — a laugh that shakes Onigashima to its foundations.

This is not Gear Fourth. This is not rubber.

This is the Mythical Zoan: Human-Human Fruit, Model Nika. The Sun God. The Warrior of Liberation. The most ridiculous power in the world — and the most free.

Luffy grabs Kaido\`s dragon form and stretches the ground like rubber beneath them. He inflates his fists to the size of the island. He runs through the air like a cartoon, defying physics, defying logic, defying despair itself.

"I can do anything now," Luffy laughs. "I can fight however I want!"

Kaido stares. For the first time in decades, he feels something he had forgotten: joy.

"Show me, Joy Boy. Show me the dawn the world has been waiting for!"`,scene:'action',mood:'#ffcc00',characters:['Luffy'],effects:{stats:{cou:2},flags:{gear5_awakened:true}},choices:[{text:'Watch the Sun God fight. Protect the alliance below.',next:'op_kaido_final',effects:{stats:{per:1}}},{text:'Channel every ounce of your strength into one final push alongside Luffy.',next:'op_kaido_final',effects:{stats:{str:2,cou:1},rel:{luffy:2}}}]};

OP_NODES.op_kaido_final = {text:`Luffy\`s final attack. Gear Fifth at maximum output. He leaps into the upper atmosphere, inflates his fist until it is larger than Onigashima itself, coats it in Conqueror\`s Haki so dense the air turns black and red, and plummets downward.

Kaido meets him. Rising dragon against falling god. Blazing Bagua — the strongest attack of the strongest creature — against Bajrang Gun — the fist of liberation.

They collide. The sky does not split. It shatters. The clouds evaporate in a ring that stretches to the horizon. The sea below parts. Wano\`s volcanoes erupt from the shockwave.

Kaido\`s kanabo cracks. His scales shatter. The dragon falls, punched through Onigashima, through the ground, into the magma beneath Wano where Big Mom already lies buried.

Silence. Then the announcement echoes across the battlefield, carried by Mary — Kaido\`s own communication network:

"Kaido has fallen. Winner: Monkey D. Luffy."

Wano explodes into celebration. Twenty years of oppression, starvation, and despair — over in a single night. Fireworks launch from the Flower Capital. Children who have never smiled in their lives are laughing.

Momonosuke — no longer a boy but Wano\`s Shogun — weeps as he proclaims the dawn of a new era. Hiyori plays her shamisen as lanterns float into the sky, carrying the wishes of the dead.

You stand on the battlefield, covered in blood and ash and tears, watching the sunrise paint Wano gold.

The dawn has come at last.`,scene:'action',mood:'#ffcc00',characters:['Luffy','Zoro','Sanji','Nami'],effects:{stats:{str:1,cou:1},flags:{kaido_fallen:true}},choices:[{text:'Celebrate with Wano. You have earned this.',next:'op_ending_choices',effects:{rel:{luffy:1}}},{text:'Look ahead. The final island awaits.',next:'op_ending_choices',effects:{stats:{int:1}}},{text:'Zoro has unfinished business — challenge Mihawk for the title of Greatest Swordsman.',next:'op_mihawk_duel',effects:{stats:{str:1},rel:{zoro:2}}},{text:'Explore an uncharted island the Log Pose detected during the raid.',next:'op_new_island_discovery',effects:{stats:{int:1,per:1}}}]};

OP_NODES.op_kaido_battle = {text:`The Live Floor of Onigashima is chaos. Queen — a cyborg dinosaur — unleashes plagues. King — a lunarian pteranodon — rains fire. Thousands of Beast Pirates clash with the alliance.

Zoro cuts fire. Sanji\`s body evolves — his Vinsmoke genetics activate, giving him an exoskeleton. Chopper cures the plague. Robin unleashes a demon form. Franky fights in a giant robot.

You battle through the carnage. Every ally fights at their absolute limit.

Above you, on the rooftop, five pirates face two Emperors. Luffy, Zoro, Law, Kid, and Killer against Kaido and Big Mom. The sky splits. The island shakes.

Luffy falls. Kaido knocks him off the island into the sea. The alliance\`s hopes plummet.

Then — Drums of Liberation. A heartbeat echoes across Onigashima. Luffy rises. His body turns white. His hair floats. He is laughing.

Gear Fifth. The awakening of the Mythical Zoan — Human-Human Fruit, Model: Nika. The Sun God. The warrior of liberation who fights with the power of imagination itself.

Luffy versus Kaido. Joy Boy versus the world\`s strongest creature. The fight that will free Wano.`,scene:'action',mood:'#cc0000',characters:['Luffy','Zoro','Sanji'],effects:{stats:{str:2}},choices:[{text:'Support the alliance from below. Hold the line.',next:'op_ending_choices',effects:{stats:{str:1,per:1}}},{text:'Find a way to the roof. Stand with Luffy.',next:'op_ending_choices',effects:{stats:{cou:2},rel:{luffy:2}}}]};

OP_NODES.op_rooftop = {text:`The Skull Dome rooftop. Open sky. Two Emperors.

Kaido in his dragon form fills the sky — a hundred meters of scales, flame, and raw power that has been called unkillable. Big Mom\`s Soul-Soul Fruit turns the weather itself into weapons.

You fight alongside Luffy, Zoro, Law, Kid, and Killer. The Worst Generation versus the Old Generation.

Zoro scars Kaido — a wound that will never fully heal. Law and Kid drive Big Mom off the roof. And Luffy... Luffy awakens.

Gear Fifth. The Sun God Nika. His body becomes rubber in its purest form — able to stretch, bounce, and reshape reality. He grabs Kaido\`s dragon form and jumps rope with it.

Kaido\`s strongest attack — a Flame Bagua coated in Conqueror\`s Haki — meets Luffy\`s fist. The sky splits not once, but three times.

Kaido falls. The Beast Pirates\` flag burns. Wano is free.`,scene:'action',mood:'#cc0000',characters:['Luffy','Zoro'],effects:{stats:{str:2,cou:2},flags:{kaido_defeated:true}},choices:[{text:'Celebrate with Wano. The dawn has come.',next:'op_ending_choices'}]};

OP_NODES.op_ending_choices = {text:`Wano is free. Kaido and Big Mom are defeated. The alliance has done the impossible — toppled two Emperors in a single night.

Luffy is declared one of the new Four Emperors. The world trembles. The balance of power has shifted forever.

The final island awaits. Laugh Tale — where Gold Roger found the One Piece. The treasure that the Pirate King left behind.

But the path forward holds one more choice. The Red Poneglyph — the key to finding Laugh Tale — is within reach. The crew\`s dream of finding the One Piece is closer than ever.

How do you face the final stretch?`,scene:'calm',mood:'#d4a017',characters:['Luffy','Zoro','Sanji','Nami','Robin'],effects:{flags:{emperor_luffy:true}},choices:[{text:'Sail straight for Laugh Tale. Claim the One Piece.',next:'op_ending_king',effects:{stats:{cou:2}}},{text:'Challenge Shanks first. Luffy must surpass his hero.',next:'op_ending_shanks',effects:{stats:{str:1},rel:{luffy:2}}},{text:'Seek the Void Century truth first. Robin\`s dream matters as much as Luffy\`s.',next:'op_laugh_tale_discovery',effects:{stats:{int:2},rel:{robin:2}}},{text:'Confront the World Government. The true enemy is the system itself.',next:'op_final_war_rally',effects:{stats:{int:1,cou:1}}},{text:'Sail to Elbaf first. The land of giants holds a Road Poneglyph.',next:'op_elbaf_arrival',effects:{stats:{cou:1,str:1}}},{text:'Recruit Yamato. Kaido\'s child wants to see the world.',next:'op_recruit_yamato',effects:{stats:{cha:1},rel:{yamato:2}}},{text:'Settle the score with Blackbeard. The final rival must fall.',next:'op_blackbeard_ambush',effects:{stats:{cou:2,str:1}}}]};

// ---- ARC 6: VOID CENTURY — THE TRUE HISTORY ----

OP_NODES.op_laugh_tale_discovery = {text:`The four Road Poneglyphs. Indestructible red stones scattered across the world, each one holding a coordinate. Together, they reveal the location of the final island — Laugh Tale.

Robin reads them. Her fingers trace the ancient script — the language of the scholars of Ohara, the civilization the World Government annihilated to keep this secret buried. She is the last person alive who can read these words. The world tried to kill her for it. She survived. And now she will finish what Ohara started.

"I have the coordinates," Robin says, her voice trembling. Not with fear. With wonder.

Nami plots the course. The Thousand Sunny cuts through waters no Log Pose can track — the sea itself seems to resist, currents swirling in impossible patterns, as if the ocean is testing whether you are worthy.

Three days of sailing through storms that glow with unnatural light. Seas that run uphill. Stars that move in the wrong direction. And then — calm. Perfect, absolute calm.

An island appears on the horizon. Small. Green. Covered in wildflowers and ancient trees. No port. No buildings. Just nature, untouched for eight hundred years.

Laugh Tale.

The crew sets foot on the final island. The air smells like salt and something older — like the scent of a promise kept across centuries.

In the center of the island, half-buried in roots and flowers, sits a chamber carved from Poneglyph stone. The door bears a single inscription in the ancient language.

Robin reads it aloud: "To whoever reaches this place — I am sorry I could not change the world in my time. I leave this truth, and my will, to you. — Joy Boy"`,scene:'calm',mood:'#d4a017',characters:['Luffy','Robin','Nami'],effects:{stats:{int:1},flags:{laugh_tale_reached:true}},choices:[{text:'Enter the chamber with Luffy. Witness the truth together.',next:'op_void_century_truth',effects:{rel:{luffy:2,robin:1}}},{text:'Let Robin go first. This is her dream — the True History.',next:'op_void_century_truth',effects:{rel:{robin:3}}},{text:'First, return to Ohara — Robin needs the complete translation guide to read this perfectly.',next:'op_poneglyph_ohara',effects:{stats:{int:2},rel:{robin:2}}}]};

OP_NODES.op_void_century_truth = {text:`The chamber opens into a vast underground hall. Walls lined with Poneglyphs — dozens of them, more than anyone knew existed. The complete, unredacted history of the Void Century.

Robin reads. And she weeps.

Eight hundred years ago, there was a kingdom. The Great Kingdom — a civilization that spanned the world, united races and species under a banner of freedom. Humans, fish-men, giants, minks, sky people — all equal. Their king was not a ruler but a liberator. His name was Joy Boy.

Joy Boy possessed the power of Nika — the Sun God — the same fruit that now beats in Luffy\`s chest. He made a promise to the world: that he would destroy the systems of oppression, free the slaves, and create an era where everyone could live as they chose.

He failed. Twenty royal families — the ancestors of the Celestial Dragons — united against him. They could not defeat Nika\`s power, so they erased it from history. They burned libraries. Killed scholars. Sank islands. They created the World Government on a throne of lies and declared a Void Century — eight hundred years of history that never happened.

The Ancient Weapons — Pluton, Poseidon, Uranus — were not weapons of destruction. They were Joy Boy\`s tools of liberation. Pluton: a warship to break the Red Line. Poseidon: the power to command Sea Kings and unite the oceans. Uranus: the ability to reshape the very sky.

Joy Boy\`s final message: "I could not keep my promise. But someone will come who can. Someone who will bear my will, eat the fruit of the Sun God, and laugh in the face of the impossible. When that person arrives — use the weapons. Break the Red Line. Unite the seas. Let the dawn come at last."

Luffy reads the message. Silence. Then — he laughs. That huge, joyful, ridiculous laugh that has carried him across every ocean.

"That guy was just like me! He wanted everyone to be free. And he left it to us because he trusted us!"

Robin cannot stop crying. "This is it. This is the True History. Ohara — Professor Clover — my mother — they all died for this. And it is real. It is REAL."

She laughs through her tears. The crew surrounds her. Luffy puts his hand on her shoulder.

"We are going to finish what Joy Boy started."`,scene:'calm',mood:'#d4a017',characters:['Luffy','Robin'],effects:{stats:{int:2},flags:{void_century_known:true}},choices:[{text:'The Ancient Weapons must be found and activated. Joy Boy\`s plan can still work.',next:'op_ancient_weapons',effects:{stats:{int:1,cou:1}}},{text:'The truth must be shared with the world first. Everyone deserves to know.',next:'op_ancient_weapons',effects:{stats:{cha:1},rel:{robin:1}}}]};

OP_NODES.op_ancient_weapons = {text:`The pieces fall into place. Everything the crew has encountered — every arc, every island, every friend made along the way — was leading here.

Pluton sleeps beneath Wano. The ancient warship, built during the Void Century, hidden when Wano sealed its borders. Momonosuke, as Wano\`s Shogun, can open the borders and release it. A ship capable of destroying — or reshaping — the Red Line itself.

Poseidon is Shirahoshi — the Mermaid Princess of Fish-Man Island. The gentle girl who can command the Sea Kings, the continent-sized creatures that patrol the Calm Belt. She is not a weapon. She is a voice — the voice that can call the ocean itself to action.

Uranus remains the deepest mystery. The final weapon. Whispered about in fragments across the Poneglyphs. Its nature is unclear — some texts call it a power over the heavens, others a living will that can reshape the world\`s geography. Robin believes it may be connected to the moon, to the ancient civilization that once lived there.

But one thing is clear: the Ancient Weapons were never meant to destroy. They were meant to break the Red Line — the massive continent that divides the world\`s oceans — and merge all four seas into one. The All Blue. Sanji\`s dream. A world without barriers.

"If we break the Red Line," Nami says, studying her maps with trembling hands, "every ocean becomes one. The Grand Line, the Calm Belts — they all disappear. The world becomes... connected."

"Fish-Man Island would be destroyed by the falling debris," Jinbe says gravely. "Unless the Sea Kings carry every citizen to the surface first."

"That is what Joy Boy promised," Robin whispers. "He promised the fish-men he would bring them to the surface. He failed. We will not."

Luffy stands at the prow of the Sunny, staring at the horizon. The wind catches his straw hat. He does not look like a boy anymore. He looks like the man the world has been waiting eight hundred years for.

"Let\`s go. We have a world to free."`,scene:'calm',mood:'#d4a017',characters:['Luffy','Robin','Nami','Sanji'],effects:{stats:{int:1,per:1},flags:{ancient_weapons_known:true}},choices:[{text:'Rally every ally. This is the final war.',next:'op_final_war_rally',effects:{stats:{cou:2},rel:{luffy:1}}},{text:'Sail to Mary Geoise. Strike at the heart of the World Government.',next:'op_mariejois_assault',effects:{stats:{cou:2,str:1}}},{text:'Let Luffy handle the war. Spread the truth to every corner of the world.',next:'op_ending_freedom',effects:{stats:{int:1,cha:1}}},{text:'Join Dragon\'s Revolutionary Army — reshape the world after the war.',next:'op_revolutionary_path',effects:{stats:{int:2,cha:1}}},{text:'Work with Coby to reform the Marines — justice needs protectors.',next:'op_marine_admiral_path',effects:{stats:{int:1,cha:2}}}]};

// ---- ARC 7: THE FINAL WAR ----

OP_NODES.op_final_war_rally = {text:`The call goes out across every ocean. Every Den Den Mushi. Every newspaper. Every whisper network the underworld has ever built.

The Straw Hat Grand Fleet answers first — Bartolomeo\`s barrier pirates, Cavendish\`s beautiful pirates, Sai\`s Happo Navy, Leo\`s Tontatta warriors, Hajrudin\`s giant mercenaries, Orlumbus\`s armada. Fifty-six hundred pirates who swore allegiance not because Luffy asked, but because he never would.

Then the kingdoms. Alabasta — Vivi stands before her father\`s council and declares: "The Straw Hats saved our country. Now we save theirs." Dressrosa sends its fleet under King Riku and Kyros. Wano opens its borders for the first time in centuries — samurai pour out onto the sea. The Mink Tribe of Zou descends from their living elephant.

The Revolutionaries emerge from the shadows. Monkey D. Dragon — Luffy\`s father, the World\`s Most Wanted Man — commits his entire army. Sabo, alive and burning with Ace\`s inherited Flame-Flame Fruit, leads the vanguard. Ivankov, Kuma\`s shell, commanders from every corner of the world.

The former Warlords choose sides. Hancock fights for love. Mihawk fights because Zoro is there. Crocodile fights because he has his own score to settle. Buggy somehow rallies an army of thousands by being in the right place at the wrong time.

Even the marines fracture. Coby — the boy Luffy saved in the East Blue, now a rear admiral — leads a faction that refuses to fight for the Celestial Dragons. Smoker. Fujitora. Soldiers who believe in justice, not tyranny.

The fleet assembles at the Red Line. Thousands of ships. Millions of fighters. Every race, every nation, every dream — converging on the seat of the World Government.

You stand on the Sunny\`s deck and look out at the armada stretching to every horizon. This is what one boy\`s dream built. Not through conquest. Through friendship.

The final war begins at dawn.`,scene:'action',mood:'#1a0a2e',characters:['Luffy','Zoro','Sanji','Nami','Robin'],effects:{stats:{cou:1},flags:{final_war:true}},choices:[{text:'Lead a strike team to Mary Geoise. Cut the head off the snake.',next:'op_mariejois_assault',effects:{stats:{str:1,cou:1}}},{text:'Command the fleet from the front lines. The marines will not break through.',next:'op_mariejois_assault',effects:{stats:{int:1,per:1}}}]};

OP_NODES.op_mariejois_assault = {text:`Mary Geoise. The Holy Land. Built atop the Red Line, a thousand meters above the sea. Home of the Celestial Dragons — the self-proclaimed gods who have ruled the world for eight hundred years from golden palaces built on the bones of slaves.

The assault begins on every front. Luffy\`s fleet hits the Red Port — the massive elevator system that connects the sea to the summit. Revolutionary forces strike from the Bondola transit lines. Giants scale the cliff face itself.

The marines meet them. Fleet Admiral Akainu\`s magma rains down. The Seraphim — child clones of former Warlords, enhanced with Lunarian DNA — are unleashed. Kizaru fights at light speed across the battlefield. Green Bull\`s forest consumes entire platoons.

But the alliance holds. Zoro crosses blades with an admiral and does not flinch. Sanji\`s Ifrit Jambe burns hotter than magma. Law\`s awakened Room turns the battlefield inside out. Kid\`s Damned Punk fires electromagnetic railgun blasts through warships.

You fight through the gates of Mary Geoise itself. The golden streets run red. Celestial Dragons flee screaming — for the first time in eight centuries, no one is protecting them. Their bubble helmets shatter. Their slaves tear off their chains.

The Empty Throne room awaits at the summit of the world. And on that throne — the one who was never supposed to exist — sits a figure the world has never seen.

Imu. The shadow ruler. The true king of the world. The one who sits on the throne the original twenty kings swore would remain empty forever.

Imu rises. And the temperature drops across the entire Grand Line.`,scene:'action',mood:'#cc0000',characters:['Luffy','Zoro','Sanji'],effects:{stats:{str:2,cou:1},flags:{mariejois:true}},choices:[{text:'Follow Luffy to the Empty Throne. This is his fight — and yours.',next:'op_luffy_vs_imu',effects:{stats:{cou:2},rel:{luffy:2}}},{text:'Hold the gate. Keep the marines from flanking Luffy.',next:'op_luffy_vs_imu',effects:{stats:{str:2}}}]};

OP_NODES.op_luffy_vs_imu = {text:`The Empty Throne room. A chamber so vast it swallows sound. The throne itself — a massive stone seat ringed by the weapons of the twenty founding kings — sits at the center.

Imu stands before it. A figure draped in shadow, features obscured, radiating an aura that makes the air itself recoil. In Imu\`s hand — the power of Uranus. Not a weapon, but a will — the ability to erase islands, redirect oceans, reshape the world\`s very geography. The power that sank God Valley. The power that erased Lulusia from the map.

"You are the new Joy Boy." Imu\`s voice carries no emotion. No rage. Only the cold certainty of someone who has ruled unchallenged for eight centuries. "I destroyed the last one. I will destroy you."

The earth splits. An attack that could delete an island lances toward Luffy. He dodges — Gear Fifth turning his body into rubber that bends reality. The floor becomes elastic. The walls stretch. The throne room transforms into a cartoon battlefield where physics is a suggestion.

Luffy punches. Imu blocks — a barrier of pure erasure that unmakes whatever it touches. Luffy\`s fist stretches around it, finds a gap, connects. Imu flies backward into the throne.

"You erased people!" Luffy roars. "Islands! History! You erased everything you were afraid of!"

Imu stands. Darkness pours from the throne — eight hundred years of stolen power, every life taken to maintain the lie, every truth buried.

"I erased chaos. I created order. Without me, the world falls apart."

"GOOD!" Luffy screams, his body blazing white, the Drums of Liberation shaking the entire Red Line. "THEN WE WILL BUILD A BETTER ONE!"

Bajrang Gun. The fist that defeated Kaido, now amplified by the will of every person who has ever suffered under the World Government\`s lie. It grows larger than the throne room. Larger than Mary Geoise. A fist made of freedom itself.

Imu deploys everything. Uranus. The void. Eight hundred years of absolute power concentrated into a single point of annihilation.

Freedom meets oblivion.

The Red Line cracks.`,scene:'action',mood:'#cc0000',characters:['Luffy'],effects:{stats:{str:2,cou:2},flags:{imu_battle:true}},choices:[{text:'Pour everything you have into supporting Luffy. Every last drop.',next:'op_dawn_of_world',effects:{stats:{str:1,cou:2},rel:{luffy:3}}},{text:'Protect the crew. Make sure everyone survives to see the dawn.',next:'op_dawn_of_world',effects:{stats:{per:1},rel:{zoro:1,sanji:1,nami:1,robin:1}}}]};

OP_NODES.op_dawn_of_world = {text:`The Red Line shatters. Not from Luffy\`s fist alone — from Pluton\`s cannon, fired from below. From Poseidon\`s voice, the Sea Kings catching the falling debris before it crushes Fish-Man Island. From the will of a world that has chosen to be free.

Imu vanishes. Not defeated in a blaze of glory — simply... gone. Eight hundred years of shadow, erased by the light. Whether destroyed or simply rendered powerless without the system that sustained them, no one will ever know.

The Empty Throne crumbles to dust.

Mary Geoise falls. Not in fire — in liberation. The slaves walk free. The Celestial Dragons touch the ground for the first time in their bloodline\`s history. The gold halls become shelters for the wounded.

And the world... the world changes.

The Red Line is gone. All four oceans merge. The Grand Line, the Calm Belts, the barriers that kept nations apart for millennia — dissolved. Sanji stares at the horizon where every sea has become one and whispers, through tears: "The All Blue. It is real."

Fish-Man Island rises to the surface. Shirahoshi — Poseidon herself — sees the sun for the first time unfiltered by ten thousand meters of ocean. She cries. Jinbe stands beside her and weeps without shame.

Nami unfurls a new chart — the first true map of the unified world. "I need to redraw everything," she says, laughing. "This is going to take forever."

Robin publishes the True History. Every library in the world receives a copy. Ohara\`s scholars are vindicated. The Void Century is void no more.

Luffy does not claim the throne. He does not rule. He does not even stay.

He sails away on the Thousand Sunny with his crew, because that is what pirates do. The horizon is bigger now — one ocean, endless possibilities, adventures that no one has dreamed of yet.

You stand at the stern, watching the last of the Red Line\`s dust settle into the sea. The straw hat catches the wind. Luffy is laughing. The crew is bickering about dinner. Brook is playing a song.

Everything is different. Everything is the same. And the dawn — the dawn Joy Boy promised eight hundred years ago — paints the whole world gold.

This is not the end of the story. It is the beginning of a new era.

And you were there. Sail on.`,scene:'calm',mood:'#ffcc00',characters:['Luffy','Zoro','Nami','Sanji','Robin','Usopp'],effects:{flags:{dawn:true,ending_dawn:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

OP_NODES.op_ending_king = {text:`Laugh Tale.

The final island. The place where Joy Boy left his treasure eight hundred years ago. The place where Gold Roger laughed until he cried.

The Straw Hat Pirates sail through the final stretch of the Grand Line. Every challenge, every battle, every loss has led to this moment. The four Road Poneglyphs guide the way — Robin reads them, Nami plots the course, and the Thousand Sunny cuts through the waves.

The island is small. Unassuming. Covered in flowers.

And in its center — the One Piece. The truth of the Void Century. The history the World Government erased. Joy Boy\`s final message to the future.

Luffy reads it. And he laughs. He laughs so hard he falls over, just like Roger did. The crew stares at him, confused, then one by one, they start laughing too.

You will never tell anyone what the One Piece is. That is not the point. The point is the journey. The friends. The dreams. The freedom to chase them.

Monkey D. Luffy — the boy who ate a rubber fruit and refused to give up — becomes the Pirate King.

Every crew member\`s dream comes true. Zoro becomes the World\`s Greatest Swordsman. Nami draws her map of the world. Sanji finds the All Blue. Usopp becomes a brave warrior of the sea. Chopper cures every disease. Robin learns the True History. Franky\`s ship carried the King. Brook reunites with Laboon.

And you? You sailed with the Pirate King. You were there when the world changed.

That is a dream worth living.`,scene:'calm',mood:'#d4a017',characters:['Luffy','Zoro','Nami','Sanji','Usopp','Robin'],effects:{flags:{ending_king:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

OP_NODES.op_ending_shanks = {text:`Before Laugh Tale, there is one fight Luffy must have. The man who gave him the straw hat. The man who bet his arm on a boy\`s dream.

Red-Haired Shanks. One of the Four Emperors. The pirate who ended the Summit War with a single sentence.

The two crews meet on a nameless island. Shanks looks at Luffy — no longer a crying boy but an Emperor in his own right — and smiles.

"You have gotten strong, Luffy."

"I came to return this." Luffy removes the straw hat. "And to prove I have surpassed you."

The battle between mentor and student shakes the sea. Conqueror\`s Haki clashes — the sky splits, the clouds part, the ocean rises. Luffy in Gear Fifth against Shanks at full power.

It is not just a fight. It is a conversation. Every punch says what words cannot.

Luffy wins. Barely. Shanks takes the straw hat back, looks at it one last time, and places it on Luffy\`s head.

"It suits you better."

The Straw Hat Pirates sail to Laugh Tale. Luffy becomes the Pirate King with the hat on his head and tears in his eyes.

The promise is fulfilled. The dream is complete. And somewhere, Roger and Shanks are both smiling.`,scene:'calm',mood:'#cc4400',characters:['Luffy'],effects:{flags:{ending_shanks:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

OP_NODES.op_ending_freedom = {text:`The One Piece is not just treasure. It is truth. And the truth is that the World Government has been lying for eight hundred years.

The Void Century. The Ancient Kingdom. Joy Boy\`s promise to the world. The Celestial Dragons — the twenty families who destroyed the original civilization and built their throne on its ashes.

Robin deciphers the final Poneglyph. The True History is revealed. And Luffy makes his decision.

"I do not just want to be the Pirate King. I want everyone to be free."

The Straw Hat Grand Fleet — fifty-six hundred pirates from across the world — rallies. The Revolutionary Army, led by Luffy\`s father Dragon, joins. Kingdoms freed by Luffy\`s actions — Alabasta, Dressrosa, Wano, Fish-Man Island — send their forces.

The final war is not against pirates or marines. It is against the system itself. The Celestial Dragons. The Empty Throne. The lie that some people are born to rule and others are born to serve.

Luffy sits on the Empty Throne — and destroys it. Shatters it with a single punch. "No one sits above everyone else. That is not freedom."

The world changes. Not overnight. Not perfectly. But the chains break. The slaves are freed. The truth is spoken. And across every ocean, people look at the sky and see something they have not seen in eight hundred years:

Dawn.

Monkey D. Luffy does not rule the world. He liberates it. And then he sails away, because that is what pirates do — they chase the horizon.

The straw hat catches the wind. The Thousand Sunny cuts through the waves. And the boy who ate a rubber fruit laughs at the future, because whatever comes next is going to be an adventure.`,scene:'calm',mood:'#d4a017',characters:['Luffy','Robin','Zoro','Nami','Sanji'],effects:{flags:{ending_freedom:true}},choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

// ---- ARC 7: GRAND LINE DEEPER EXPLORATION ----

OP_NODES.op_elbaf_arrival = {text:`The island of giants. Elbaf — the strongest country in the world, where warriors stand sixty feet tall and their ships dwarf the Thousand Sunny like a bathtub toy beside a galleon.\n\nUsopp is shaking. Not with fear — with awe. This is his dream. The village of warriors, the place his mother told him stories about, the island where Dorry and Brogy hail from.\n\n"I always said I would come here," Usopp whispers. "Since I was a kid lying about being a brave warrior of the sea. And now..."\n\n"Now you ARE a brave warrior of the sea," Luffy says, grinning. "You just forget sometimes."\n\nThe giants greet you with thunderous voices and mead barrels the size of houses. Their prince — Loki, a troubled young giant with ambitions that worry his elders — takes interest in the crew.\n\n"You sail with Straw Hat Luffy? The man who toppled Kaido?" Loki leans down, his breath like a warm gale. "Tell me — is he as strong as they say?"\n\nLuffy picks his nose. "I am going to be the Pirate King!"\n\nLoki laughs — a sound like rolling thunder. "Then prove it. We have something here that might interest you. A Road Poneglyph — hidden in our sacred forest. But to earn the right to see it, you must pass the Trial of Elbaf."`,scene:'adventure',mood:'#d4a017',characters:['Luffy','Usopp','Loki'],effects:{stats:{cou:1},flags:{elbaf_arrived:true}},choices:[{text:'Accept the Trial of Elbaf — prove your worth to the giants',next:'op_elbaf_trial',effects:{stats:{cou:2}}},{text:'Let Usopp lead — this is HIS dream island',next:'op_usopp_warrior',effects:{stats:{cha:1},rel:{usopp:3}}},{text:'Investigate Loki — something about the giant prince feels wrong',next:'op_elbaf_loki',effects:{stats:{per:2}}}]};

OP_NODES.op_elbaf_trial = {text:`The Trial of Elbaf is not what you expected. No arena. No fighting. The giants lead you into the sacred forest — trees so tall their canopy blocks the sun, each trunk wider than a city block.\n\nIn the center stands the World Tree. The oldest living thing on the planet. Its roots extend beneath the ocean itself, connecting islands across the Grand Line.\n\n"The trial is simple," the Elder of Elbaf says, her voice gentle despite her size. "Sit beneath the World Tree. Listen. It will show you the truth of your heart — your greatest fear and your deepest wish. If you can face both without running, you have earned the right to see the Poneglyph."\n\nLuffy sits down immediately. "Easy!"\n\nIt is not easy. The World Tree's roots pulse with ancient energy. Visions flood your mind — the worst moments of your journey and the best. Losses you have not grieved. Dreams you are afraid to speak aloud.\n\nLuffy screams once — Ace's death, relived in perfect detail. Tears stream down his face. But he does not run. He sits, and he grieves, and he lets it pass through him.\n\nZoro sees Kuina falling down the stairs. Nami sees her mother bleeding. Sanji sees himself starving on the rock. Robin sees Ohara burning. Each Straw Hat faces their abyss.\n\nAnd each one stays.\n\nThe World Tree blooms — flowers of pure white light cascading from branches that have not flowered in centuries. The giants kneel.\n\n"You have earned Elbaf's respect," the Elder says. "The Poneglyph is yours."`,scene:'trial',mood:'#d4a017',characters:['Luffy','Zoro','Nami','Sanji','Robin','Usopp'],effects:{stats:{per:2,cou:1},flags:{elbaf_trial_passed:true}},choices:[{text:'Read the Road Poneglyph — one step closer to Laugh Tale',next:'op_laugh_tale_discovery',effects:{stats:{int:1},rel:{robin:2}}},{text:'Stay in Elbaf longer — there is more to learn from the giants',next:'op_elbaf_loki',effects:{stats:{str:1}}}]};

OP_NODES.op_usopp_warrior = {text:`You step back and let Usopp lead. For once, the crew follows the sniper.\n\nUsopp is terrified. He is always terrified. But he walks into the giant's great hall with his shoulders straight and his slingshot at his hip, and he tells them the truth.\n\n"My name is Usopp. I am a liar. I have been a liar my whole life — I told stories about being a pirate captain, about having eight thousand followers, about fighting sea monsters. None of it was true."\n\nThe giants stare.\n\n"But I kept telling those lies because I wanted them to be true. And you know what? Some of them ARE true now. I DID fight sea monsters. I DID sail with the future Pirate King. I stood against a god in Skypiea. I sniped a World Government flag at Enies Lobby from a distance no one thought possible."\n\nHe pulls off his mask — the Sogeking mask he has not worn in years but still carries. "I am not the bravest man on my crew. I am not the strongest. I cannot cut steel or kick through walls or stretch like rubber. But I am here. On Elbaf. The island I dreamed about since I was five years old."\n\nHe looks up at the warriors, tears streaming. "Is that... is that brave enough?"\n\nSilence. Then the giants erupt. They slam their fists on tables, they roar approval, they lift Usopp onto a giant's shoulder.\n\n"THAT," the Elder booms, "is the bravest thing we have heard in a hundred years. A man who admits his fear and walks forward anyway — THAT is a warrior of Elbaf."`,scene:'character',mood:'#2196F3',characters:['Usopp'],effects:{stats:{cha:2},rel:{usopp:3},flags:{usopp_warrior:true}},choices:[{text:'Celebrate with the giants — Usopp has earned this moment',next:'op_elbaf_trial',effects:{stats:{cha:1}}},{text:'Ask the giants about the ancient weapons — they know more than they let on',next:'op_ancient_weapons',effects:{stats:{int:2}}}]};

OP_NODES.op_elbaf_loki = {text:`Prince Loki is not what he seems. While the elder giants welcome you, Loki whispers to his followers in the shadows. You catch fragments — "World Government," "deal," "the Straw Hats are the key."\n\nYou confront him alone, in the armory of the giant castle. Loki towers over you, a spear in hand that could split a mountain.\n\n"You heard," he says. Not a question. "Fine. I will tell you. The World Government offered me the throne of Elbaf — secured, legitimate, recognized — in exchange for the Straw Hat Pirates. Luffy's bounty alone could fund our kingdom for a century."\n\n"And you are considering it."\n\n"I am a prince whose people are divided. Half the giants want isolation. Half want to rejoin the world. The Government's offer unifies both factions — gold for the isolationists, legitimacy for the globalists. All it costs is one pirate crew."\n\nHis grip tightens on the spear. "But... your sniper. The one who cried and called himself a coward. My people cheered for him. They have not cheered like that since Dorry and Brogy sailed to Little Garden a hundred years ago."\n\nLoki sets the spear down. "I cannot betray people my giants respect. That is not how a king rules." He meets your eyes. "The Government will not take this well. They will send an admiral. Elbaf may need allies."\n\n"Then it is good you have the future Pirate King as a friend," you say.`,scene:'intrigue',mood:'#636e72',characters:['Loki'],effects:{stats:{per:2,cha:1},flags:{loki_allied:true}},choices:[{text:'Prepare Elbaf for the Government\'s response — war is coming',next:'op_final_war_rally',effects:{stats:{cou:1,str:1}}},{text:'Take the Road Poneglyph and sail before the admiral arrives',next:'op_laugh_tale_discovery',effects:{stats:{int:1}}}]};

// ---- ARC 8: HAKI AWAKENING ----

OP_NODES.op_haki_awakening = {text:`The New World breaks the unprepared. Every pirate who enters thinking strength alone is enough learns the same lesson: without Haki, you are food.\n\nRayleigh taught you the basics during the timeskip. Observation Haki — sensing presences, predicting attacks. Armament Haki — hardening your body, striking Devil Fruit users. And the rarest: Conqueror's Haki — the spirit of a king, imposing your will on the world itself.\n\nBut basics are not enough against Emperors.\n\nYou sit on the Sunny's deck at midnight, meditating. The ocean hums beneath you — the Grand Line's currents, chaotic and alive. You have been pushing your Observation Haki for weeks, trying to see further, sense deeper.\n\nThen it happens. A crack in perception. Like a door opening in a wall you did not know existed.\n\nYou see the future. Not vaguely — with crystal clarity. Three seconds ahead. Nami will sneeze. Zoro will roll over in his sleep. A wave will crest at exactly the point where moonlight hits the water.\n\nAll three happen. Exactly as you saw.\n\nAdvanced Observation Haki. Future sight. The same ability that made Katakuri nearly unbeatable.`,scene:'training',mood:'#2196F3',characters:['Luffy','Zoro'],effects:{stats:{per:2},flags:{advanced_haki:true}},choices:[{text:'Push deeper into Observation — master future sight completely',next:'op_haki_observation',effects:{stats:{per:3}}},{text:'Focus on Armament — learn to project Haki beyond your body',next:'op_haki_armament',effects:{stats:{str:3}}},{text:'Explore Conqueror\'s Haki — the power that shakes the world',next:'op_haki_conqueror',effects:{stats:{cou:3}}}]};

OP_NODES.op_haki_observation = {text:`Future sight is intoxicating. Three seconds becomes five. Five becomes ten. You sit in the crow's nest and see storms before they form, sea kings before they surface, enemy ships before they crest the horizon.\n\nBut Katakuri's weakness was emotional disruption. When Luffy damaged his calm, his future sight failed. You need something beyond prediction — something that cannot be disrupted by rage or fear.\n\n"The Voice of All Things," Robin says, finding you on deck one morning. "Roger had it. Luffy has it. The ability to hear the world itself — the sea, the Poneglyphs, the creatures of the deep."\n\n"That is different from Observation Haki."\n\n"Is it? Or is it the same ability pushed to its absolute limit? Observation Haki senses living things. The Voice of All Things senses... everything. The planet. The history. The will of the world."\n\nYou try. You extend your senses beyond people, beyond animals, beyond the ship. Into the ocean. Into the current. Into the Red Line itself.\n\nAnd you hear it. A whisper. Ancient. Patient. The voice of the world — not words, but intention. A current that flows beneath all things, connecting every island, every creature, every raindrop.\n\n"The One Piece," you whisper. "It is not IN the world. It IS the world. The connection between everything — that is what Roger found."`,scene:'revelation',mood:'#d4a017',characters:['Robin'],effects:{stats:{per:3,int:1},flags:{voice_of_all_things:true}},choices:[{text:'Share this revelation with Luffy — it changes everything',next:'op_laugh_tale_discovery',effects:{stats:{cha:1},rel:{luffy:2}}},{text:'Keep listening — the Voice has more to tell you',next:'op_void_century_truth',effects:{stats:{int:2,per:1}}}]};

OP_NODES.op_haki_armament = {text:`Armament Haki hardens your body. Advanced Armament projects force beyond your body — striking without touching, destroying from the inside out. Rayleigh demonstrated it once: touching a tree and blasting it apart from within.\n\nYou train with Zoro. The swordsman has already achieved Advanced Armament — his Enma blade demands it, drinking his Haki like a vampire drinks blood.\n\n"Stop thinking about hitting harder," Zoro says between sword swings. "Think about flowing through. Your Haki is a river. Stop trying to be a wall."\n\nWeeks of failure. Bruised fists, shattered training dummies, Chopper's increasingly exasperated medical attention. Then, one dawn, you punch a boulder.\n\nYour fist stops at the surface. The Haki flows through — into the rock, past the molecules, through the crystalline structure. The boulder explodes from the inside out. Clean. Surgical. Like alchemy without a circle.\n\nZoro grunts. For Zoro, that is a standing ovation.\n\n"Now try it on something that hits back," he says, drawing Enma.\n\nThe sparring match lasts four seconds. You land one hit — a palm strike that bypasses Zoro's guard entirely, Haki flowing through his crossed swords to impact his chest. He stumbles back.\n\nThen he grins. The terrifying Zoro grin.\n\n"Good. Now I do not have to hold back."`,scene:'training',mood:'#cc0000',characters:['Zoro','Chopper'],effects:{stats:{str:3,cou:1},flags:{advanced_armament:true}},choices:[{text:'Train further with Zoro — push Armament to its absolute limit',next:'op_ending_choices',effects:{stats:{str:2}}},{text:'Apply your new power in battle — the New World has no shortage of enemies',next:'op_wano',effects:{stats:{cou:1,str:1}}}]};

OP_NODES.op_haki_conqueror = {text:`Conqueror's Haki cannot be trained. It awakens. One in a million people are born with it — the disposition of a king, the will to stand above all others.\n\nLuffy has it. Zoro has it. And on the night the Marines corner the Thousand Sunny with three warships and an admiral, YOU discover you have it too.\n\nThe admiral — Kizaru, the light-speed man — materializes on the Sunny's deck with a lazy smile. "Oh my. The Straw Hats. How troublesome."\n\nHe raises a finger. A beam of light that could cut through steel. Aimed at Nami.\n\nSomething inside you BREAKS. Not like a bone — like a dam. A pressure you did not know you were holding erupts from your body in a wave of invisible force.\n\nThe Marine soldiers on the warships collapse. Hundreds of them, unconscious before they hit the deck. The sea itself parts around the Sunny. Kizaru's light wavers.\n\n"Oh?" He lowers his hand. His lazy expression sharpens. "Conqueror's Haki. How rare."\n\nLuffy lands beside you. His own Conqueror's Haki radiates like heat from a forge. The two waves meet — not clashing, but harmonizing. The sky splits. Thunder without clouds. Lightning without rain.\n\nKizaru vanishes. Even an admiral knows when the math changes.\n\nLuffy claps you on the back. "Shishishi! I KNEW you had that in you!"`,scene:'awakening',mood:'#cc0000',characters:['Luffy','Kizaru'],effects:{stats:{cou:3,cha:1},flags:{conqueror_haki:true}},choices:[{text:'Learn to coat your attacks with Conqueror\'s Haki — the power of Emperors',next:'op_ending_choices',effects:{stats:{str:2,cou:1}}},{text:'This power draws attention — prepare for the Emperors who will test you',next:'op_kaido_battle',effects:{stats:{cou:2}}}]};

// ---- ARC 9: CREW RECRUITMENT AND NEW ISLANDS ----

OP_NODES.op_new_island_discovery = {text:`The Log Pose spins wildly. Three needles, each pointing to a different island — the New World's way of saying "good luck."\n\nNami studies the needles. "The most unstable needle points to the most dangerous island. That is where the biggest adventure is."\n\nLuffy grins. "Then that is where we go."\n\nThe island has no name on any chart. It exists in the space between islands, hidden by perpetual fog and currents that shred normal ships. Only the Sunny — reinforced with Adam Wood and sailed by the best navigator alive — makes it through.\n\nWhat you find defies explanation. An island frozen in time. Buildings intact, food still warm on tables, but not a single person. An entire civilization, vanished mid-meal.\n\nRobin examines the architecture. "This style predates the Void Century. This island was part of the Ancient Kingdom — the civilization the World Government erased."\n\nIn the central plaza, a Poneglyph. Not red, not blue — black. Robin has never seen one this color.\n\n"It is a warning," she translates, her voice barely a whisper. "It says: The weapon is not a thing. It is a person. And they are already awake."`,scene:'mystery',mood:'#0a0a2e',characters:['Luffy','Nami','Robin'],effects:{stats:{int:2,per:1},flags:{mystery_island:true}},choices:[{text:'Investigate the vanished people — what happened here could happen everywhere',next:'op_void_century_truth',effects:{stats:{int:2}}},{text:'The weapon is a person — could it be someone you know?',next:'op_ancient_weapons',effects:{stats:{per:2}}},{text:'Take the warning seriously — sail for Laugh Tale before it is too late',next:'op_laugh_tale_discovery',effects:{stats:{cou:1,int:1}}}]};

OP_NODES.op_recruit_yamato = {text:`Wano is liberated, but one warrior stands at the port, staring at the open sea with desperate longing.\n\nYamato. Kaido's child — born in chains, raised in a cage, inspired by Oden's journal to dream of freedom. For twenty years, Yamato has worn Oden's identity like armor against a father who saw offspring as nothing more than a weapon.\n\n"I want to sail with you," Yamato says to Luffy, clutching Oden's journal to their chest. The Guardian Deity form — the mythical Inu-Inu no Mi, Model: Okuchi no Makami — shimmers beneath the skin, ice crystals forming and melting on their arms. "Oden sailed with Roger. I want to see what he saw. I want to be FREE."\n\nLuffy tilts his head. "Hmm. Can you fight?"\n\nYamato swings the kanabo — the massive spiked club that once belonged to Kaido himself. The dock shatters. A wave rises fifty feet. Three nearby Marine ships capsize.\n\n"I fought my father for you," Yamato says. "On the rooftop of Onigashima. I held him off so you could rest. My Conqueror's Haki can match an Emperor's."\n\nLuffy picks his nose, considering. Then grins. "Yeah, okay. You seem fun! But you have to be YOU — not Oden. Oden was Oden. You are you."`,scene:'character',mood:'#2196F3',characters:['Luffy','Yamato'],effects:{stats:{cha:1},rel:{yamato:3},flags:{yamato_recruited:true}},choices:[{text:'Welcome Yamato aboard — the crew grows stronger',next:'op_elbaf_arrival',effects:{stats:{str:1,cha:1}}},{text:'Suggest Yamato protect Wano in the crew\'s absence — Oden would want that',next:'op_ending_choices',effects:{stats:{int:1},rel:{yamato:1}}}]};

OP_NODES.op_sabaody_return = {text:`Sabaody Archipelago. The last stop before the New World — and the place where the Straw Hat Pirates were separated two years ago. Scattered by Bartholomew Kuma across the world, each member sent to an island perfectly suited to make them stronger.\n\nThe crew reunites. Two years of training, growth, and lonely nights staring at the sky wondering if your friends were alive.\n\nLuffy arrives last, wearing the same straw hat, the same grin, but carrying himself differently. The boy is gone. The king is arriving.\n\n"Everyone is here!" Luffy shouts, bouncing. "You all got so COOL!"\n\nZoro has one eye now — a scar that he refuses to explain. Nami's Clima-Tact hums with new weather science. Sanji's legs glow with the heat of Diable Jambe perfected. Chopper has mastered his Monster Point. Robin can bloom giant limbs. Franky is more machine than man, with laser cannons. Brook's soul can leave his body.\n\nAnd then there is you. Whatever you trained in — whatever island Kuma sent you to — you are not the same person who was separated.\n\n"The New World," Luffy says, staring at the Red Line. "That is where the One Piece is. Let's go!"`,scene:'reunion',mood:'#2196F3',characters:['Luffy','Zoro','Nami','Sanji','Robin','Chopper','Franky','Brook'],effects:{stats:{cha:1},flags:{crew_reunited:true}},choices:[{text:'Sail straight into the New World — no more waiting',next:'op_new_world_prep',effects:{stats:{cou:2}}},{text:'Train your Haki further before entering — the New World eats the unprepared',next:'op_haki_awakening',effects:{stats:{per:1,str:1}}}]};

// ---- ARC 10: WARLORD AND EMPEROR ENCOUNTERS ----

OP_NODES.op_mihawk_duel = {text:`Dracule Mihawk. The World's Greatest Swordsman. Zoro's ultimate goal — the man he must surpass to fulfill his promise to Kuina.\n\nYou encounter him on a desolate island at the edge of the New World. Mihawk sits on a stone chair, drinking wine, his black blade Yoru resting against the wall. His hawk eyes track you before you even land.\n\n"Straw Hats," he says. "I wondered when you would appear. Your swordsman has been sharpening his fangs for two years. I can feel his intent from here."\n\nZoro is already on the shore, three swords drawn. Enma. Wado Ichimonji. Sandai Kitetsu. His single eye burns.\n\n"I promised Kuina," Zoro says. "One of us would become the greatest. She died. So it has to be me. And that means going through you."\n\nMihawk stands. Yoru — the Supreme Grade black blade, twelve feet of obsidian steel — slides into his hand like it weighs nothing.\n\n"When we first met," Mihawk says, "I told you to come find me when you had surpassed your limits. Have you?"\n\nZoro's Haki erupts. Green and black, Conqueror's coating wrapped around all three blades. The island cracks beneath his feet.\n\n"Find out," Zoro says.\n\nThe duel begins. The sky splits. You have never seen anything so beautiful or so terrifying.`,scene:'battle',mood:'#cc0000',characters:['Zoro','Mihawk'],effects:{stats:{str:1,cou:2},rel:{zoro:2}},choices:[{text:'Watch the duel — this is Zoro\'s fight, not yours',next:'op_mihawk_aftermath',effects:{stats:{per:1},rel:{zoro:2}}},{text:'Support the crew — if Mihawk wins, you need a plan',next:'op_mihawk_aftermath',effects:{stats:{int:1}}}]};

OP_NODES.op_mihawk_aftermath = {text:`The duel lasts three hours. Three hours of sword clashes that split the sea, Haki bursts that shatter clouds, and techniques that redefine what is possible with a blade.\n\nIn the end, Zoro stands. Barely. His bandages are soaked through. Enma's blade is chipped. But Yoru — the supreme black blade — lies on the ground.\n\nMihawk kneels. Not in defeat — in acknowledgment. His coat is torn. A single cut crosses his chest — the first wound he has received in over a decade.\n\n"You have surpassed me," Mihawk says. "The title is yours. The World's Greatest Swordsman." He picks up Yoru and offers it to Zoro. "Take it. A supreme blade should belong to the supreme swordsman."\n\nZoro pushes it away. "I have my own swords. Kuina's sword. The cursed blade that chose me. And Enma — Oden's blade that I earned in Wano." He sheathes his three swords. "I do not need yours. I surpassed you with MY blades."\n\nMihawk smiles. The first genuine smile anyone has ever seen on the World's Greatest Swordsman.\n\n"Roronoa Zoro. The man who became the greatest not by taking the strongest sword — but by making his own swords the strongest." He turns away. "Your captain is lucky to have you. Now go make him the Pirate King."\n\nZoro walks back to the Sunny. He does not celebrate. He sits in the crow's nest, holds Wado Ichimonji across his lap, and speaks quietly to a girl who died twenty years ago.\n\n"I did it, Kuina. We did it."`,scene:'resolution',mood:'#d4a017',characters:['Zoro','Mihawk'],effects:{stats:{str:2,per:1},rel:{zoro:3},flags:{zoro_greatest:true}},choices:[{text:'Sail onward — the crew has never been stronger',next:'op_ending_choices',effects:{stats:{cou:1,cha:1}}},{text:'Head to Elbaf — the land of warriors should witness the new greatest swordsman',next:'op_elbaf_arrival',effects:{stats:{str:1}}}]};

OP_NODES.op_blackbeard_ambush = {text:`Marshall D. Teach. Blackbeard. The only man alive with two Devil Fruit powers — the Yami-Yami no Mi that creates absolute darkness and the Gura-Gura no Mi that creates earthquakes. The man who traded Ace's life for a Warlord title, who broke into Impel Down, who stole Whitebeard's power from his cooling corpse.\n\nHe finds you. Not the other way around. The sea goes dark — literally dark, as if someone threw a blanket over the sun. The Black Vortex pulls the Thousand Sunny toward a massive ship with a skull-and-crossbones flag grinning with broken teeth.\n\n"Zehahaha!" Blackbeard's laugh echoes across the void. "Straw Hat! I have been waiting for this! You and me — we are the only ones left in the race!"\n\nLuffy's face hardens. This is the man who caused Ace's death. The man who represents everything Luffy despises: ambition without loyalty, power without love, a crown claimed by betrayal.\n\n"You are not a real pirate," Luffy says. "You do not have friends. You have tools."\n\nBlackbeard grins. "Friends? FRIENDS? I have something better. I have two Devil Fruits and the strongest crew in the world. That is enough to take the One Piece."\n\n"No," Luffy says, Gear Fifth already rippling across his skin. "It is not."`,scene:'confrontation',mood:'#0a0a2e',characters:['Luffy','Blackbeard'],effects:{stats:{cou:2},flags:{blackbeard_encountered:true}},choices:[{text:'Fight Blackbeard now — end the rivalry before Laugh Tale',next:'op_blackbeard_battle',effects:{stats:{str:2,cou:2}}},{text:'Escape the Black Vortex — Laugh Tale must come first',next:'op_laugh_tale_discovery',effects:{stats:{int:1,per:1}}}]};

OP_NODES.op_blackbeard_battle = {text:`Gear Fifth versus Yami-Yami. Joy Boy's power against the embodiment of darkness.\n\nLuffy's body becomes rubber in its purest form — white hair, laughing eyes, a god of freedom who can turn the ground into rubber, the air into trampolines, his enemies into cartoons. The Nika Nika no Mi unleashed.\n\nBlackbeard counters with gravity. His darkness swallows light, nullifies Devil Fruit powers on contact, creates vortexes that eat the ocean itself. And when that is not enough — the Gura-Gura no Mi. Earthquakes that split the island they fight on. Tsunamis that drown the battlefield.\n\nThe crew fights Blackbeard's commanders. Zoro versus Shiryu, the invisible swordsman. Sanji versus Van Augur, the teleporting sniper. Each matchup is a war in miniature.\n\nBut the main event is Luffy and Teach. Two D's. Two inheritors of the Will of D. One who carries joy, one who carries darkness.\n\nBlackbeard grabs Luffy — his darkness nullifying the rubber body, making Luffy vulnerable. He cocks back the earthquake fist.\n\n"This is the end, Straw Hat! I will be the Pirate King!"\n\nLuffy grins through the pain. "A king... does not need to steal... a crown." His Conqueror's Haki erupts — the sky splits in half, and even Blackbeard's darkness cannot absorb a will this strong.\n\nThe fist connects. Not the earthquake fist. Luffy's fist — coated in Conqueror's Haki, free from the darkness grip, aimed straight at the grin that has haunted him since Marineford.\n\nBlackbeard falls. The darkness recedes. The sun returns.`,scene:'climax',mood:'#cc0000',characters:['Luffy','Blackbeard','Zoro','Sanji'],effects:{stats:{str:3,cou:2},flags:{blackbeard_defeated:true}},choices:[{text:'Claim victory and sail for Laugh Tale — nothing stands in the way now',next:'op_laugh_tale_discovery',effects:{stats:{cou:1}}},{text:'Show mercy to Blackbeard — the cycle of hatred ends here',next:'op_ending_choices',effects:{stats:{cha:2}}}]};

// ---- ARC 11: REVOLUTIONARY PATH AND MARINE ADMIRAL PATH ----

OP_NODES.op_revolutionary_path = {text:`Dragon finds you. Monkey D. Dragon — the World's Most Wanted Man, leader of the Revolutionary Army, Luffy's father. He appears from a storm, as he always does, wrapped in a green cloak that catches wind that does not exist.\n\n"I have watched my son from afar," Dragon says. "I could not be his father — the Government would have killed him as a child. So I let Garp raise him. Let him find his own path."\n\nHis eyes — Luffy's eyes, the same fierce determination — fix on you. "But now the paths converge. The One Piece, the Void Century, the Ancient Kingdom — they all point to the same truth. The World Government must fall. Not from piracy. From revolution."\n\nHe spreads a map across the table. The entire world — but marked differently than any map you have seen. Supply lines. Communication networks. The locations of every Cipher Pol agent, every Marine base, every kingdom secretly funding the resistance.\n\n"Luffy will be the Pirate King. That is his dream. But the King of Pirates alone cannot topple eight hundred years of tyranny. He needs someone to reshape the world after the throne falls."\n\nHe looks at you. "I am asking you to join the Revolution. Not as a pirate — as an architect of the new world."`,scene:'recruitment',mood:'#2d3436',characters:['Dragon'],effects:{stats:{int:2,cha:1},flags:{dragon_met:true}},choices:[{text:'Join the Revolutionary Army — reshape the world from its foundations',next:'op_ending_revolutionary',effects:{stats:{int:2,cha:2}}},{text:'Decline — your place is with the Straw Hats on the open sea',next:'op_ending_choices',effects:{stats:{cou:1},rel:{luffy:2}}},{text:'Propose an alliance — pirates and revolutionaries working together for the final war',next:'op_final_war_rally',effects:{stats:{cha:2,int:1}}}]};

OP_NODES.op_ending_revolutionary = {text:`You leave the Straw Hats. It is the hardest choice you have ever made — harder than any battle, any storm, any sea king. Luffy does not understand at first. Then he does.\n\n"You are going to go change the world, right?"\n\n"Something like that."\n\n"Shishishi! That sounds like an adventure!" He puts his straw hat on your head for one moment. "Do a good job. I will handle the pirate stuff."\n\nYou work with Dragon. With Sabo — Luffy's other brother, the Revolutionary Army's Chief of Staff, the man who inherited Ace's flame. With Ivankov, Koala, the commanders who have spent decades building a network that spans every sea.\n\nWhen Luffy finds the One Piece, when the truth of the Void Century shakes the world, you are ready. The Revolutionary Army moves — not with violence, but with truth. Every kingdom receives the real history. Every citizen learns what the Celestial Dragons did. Every slave is offered a door.\n\nThe World Government does not fall in a day. It crumbles over months, as kingdoms withdraw their support, as Marines defect, as the Celestial Dragons find themselves alone in a golden palace with no one willing to serve them.\n\nYou help build what comes next. A council of nations. No empty throne. No world nobles. Just people, governing themselves, making mistakes, and fixing them.\n\nLuffy sails past the new capital on the Thousand Sunny. He waves. You wave back.\n\nThe Pirate King and the Architect of Freedom. Both dreamers. Both free.\n\nThe dawn comes not because one person lit the sun — but because a thousand people refused to accept the dark.`,scene:'end',mood:'#d4a017',ending:'Architect of Freedom',characters:['Luffy','Dragon','Sabo'],choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

OP_NODES.op_marine_admiral_path = {text:`Coby finds you at a crossroads. Vice Admiral Coby — the boy who once cowered behind Alvida's mace, now one of the fastest-rising Marines in history. A man who believes the Marines can be saved from within.\n\n"I know what you have seen," Coby says. "Corruption. Slavery. The Celestial Dragons using Marines as personal enforcers. I have seen it too. But the answer is not to burn it all down."\n\nHe sits across from you, the Marine coat draped over his shoulders like a weight he has chosen to carry.\n\n"Garp changed the Marines from within. Fujitora challenged the Warlord system and won. Smoker risked his career to protect civilians in Alabasta. The institution is sick — but the people inside it are not all rotten."\n\nHe extends a hand. "I am building something. A new Marine force — one that serves the people, not the World Nobles. Aokiji supports us quietly. Fujitora openly. Even Sengoku, in retirement, advises us."\n\n"You want me to become a Marine."\n\n"I want you to become the Marine the world needs. Not a lapdog. Not a weapon. A protector. Someone who stands between innocent people and the storms that threaten them — pirate storms AND government storms."`,scene:'recruitment',mood:'#0a2a5a',characters:['Coby'],effects:{stats:{int:1,cha:2},flags:{coby_offer:true}},choices:[{text:'Accept — become the Marine who changes the system from within',next:'op_ending_marine',effects:{stats:{int:2,cha:1}}},{text:'Decline — you are a pirate at heart and always will be',next:'op_ending_choices',effects:{stats:{cou:1}}},{text:'Propose cooperation — Marines and pirates united against the true enemy',next:'op_final_war_rally',effects:{stats:{cha:2}}}]};

OP_NODES.op_ending_marine = {text:`You put on the coat. The white coat of the Marines — but you wear it differently. No "Absolute Justice" on the back. Instead, you have the tailors stitch three words: "The People's Justice."\n\nCoby grins. "That is going to make Akainu furious."\n\n"Good."\n\nYou rise through the ranks not by killing pirates but by protecting civilians. When Luffy finds the One Piece, when the truth shakes the world, the Marines splinter. Half follow Akainu into a final, desperate defense of the World Government. Half follow Coby, Fujitora, and you into a new era.\n\nThe war is ugly. Marines fighting Marines. But it is necessary — the rot runs too deep for half-measures.\n\nWhen it is over, the Marine headquarters moves from Marineford to a new island — central, accessible, chosen by the people it serves. Coby becomes Fleet Admiral. You become an Admiral — the first Admiral appointed not by the World Government but by a council of nations.\n\nLuffy docks at your base once. He eats all the cafeteria food. He breaks three walls by accident. He hugs you so hard your ribs creak.\n\n"You are still my friend," he says. "Even if you are a Marine now."\n\n"Someone has to keep the seas safe for idiots like you."\n\n"Shishishi!"\n\nThe Pirate King and the People's Admiral. In another era, they would be enemies. In this one, they are proof that labels do not define you — choices do.`,scene:'end',mood:'#0a2a5a',ending:'The People\'s Admiral',characters:['Luffy','Coby','Fujitora'],choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

OP_NODES.op_poneglyph_ohara = {text:`Robin leads you to a place she swore she would never return.\n\nOhara. Or what remains of it. The island the World Government obliterated with a Buster Call twenty-two years ago — because its scholars dared to study the Poneglyphs. Robin's home. Robin's graveyard.\n\nThe island is a crater. The Tree of Knowledge — the world's greatest library — is a blackened stump. But Robin walks through the ruins with dry eyes. She has cried enough for Ohara.\n\n"They threw the books into the lake," she says. "When the Buster Call began, the scholars saved the library by throwing every book into the lake. Millions of volumes. The world's knowledge, sinking to the bottom."\n\nFranky dives. His cyborg body can withstand the pressure. Hours later, he surfaces with a sealed chest.\n\nInside: the original Poneglyph translation guide. Professor Clover's life work — a complete dictionary of the ancient language, cross-referenced with known Poneglyphs. With this, Robin does not just read Poneglyphs. She reads them PERFECTLY. Every nuance. Every double meaning.\n\n"Ohara died so the truth could live," Robin says, clutching the guide. For the first time in the ruins, she smiles. "They did not lose. They just... delayed the victory."`,scene:'emotional',mood:'#636e72',characters:['Robin','Franky'],effects:{stats:{int:2,per:1},rel:{robin:3},flags:{ohara_guide:true}},choices:[{text:'Use the guide to decode every Poneglyph you have encountered',next:'op_void_century_truth',effects:{stats:{int:3}}},{text:'Sail for the Road Poneglyphs — with perfect translation, Laugh Tale is within reach',next:'op_laugh_tale_discovery',effects:{stats:{int:1,cou:1}}}]};

// ---- ARC 12: MARINEFORD EXPANDED, SABAODY, AND BEYOND ----

OP_NODES.op_marineford_war = {text:`The War of the Best. That is what the newspapers will call it — if anyone survives to write the headlines.

Marineford plaza stretches before you like a killing field. The three admirals sit in their chairs above the execution platform — Akainu, the magma man whose fists melt steel; Aokiji, the ice man who can freeze an ocean; Kizaru, the light man who moves at the speed of photons. Fleet Admiral Sengoku stands behind Ace, his voice booming across the battlefield through a Den Den Mushi the size of a house.

"Portgas D. Ace is the son of Gol D. Roger! The blood of the Pirate King runs in his veins! Today, that bloodline ends!"

Whitebeard's response is not words. It is an earthquake. He slams his bisento into the air itself — cracks the atmosphere like glass — and the sea rises. Twin tsunamis, each one tall enough to swallow a city, crash toward Marineford from both sides.

Aokiji freezes them instantly. Two walls of ice, towering over the battlefield like frozen mountains. The war has begun, and the opening exchange has already reshaped the geography of the island.

Forty-three allied pirate crews pour through gaps in the ice. Whitebeard's commanders — Marco the Phoenix, Jozu the Diamond, Vista the Flower Sword — lead the charge. Marines meet them with cannon fire, Pacifista laser beams, and the full might of the World Government's military.

You are in the middle of it. Every direction is death. Every second is a choice between fighting and dying.

And somewhere above it all, chained to the execution platform, Ace watches his family tear the world apart to save him.`,scene:'war',mood:'#cc0000',characters:['Luffy','Whitebeard','Ace'],effects:{stats:{cou:2},flags:{war_of_best:true}},choices:[{text:'Charge the plaza with Whitebeard\`s vanguard — break through the Marine line.',next:'op_mf_fight_through',effects:{stats:{str:2,cou:1}}},{text:'Join Luffy\`s desperate sprint toward the execution platform.',next:'op_ace_execution',effects:{stats:{cou:2},rel:{luffy:2}}},{text:'Rally the allied pirate crews — coordination wins wars, not bravery alone.',next:'op_mf_whitebeard',effects:{stats:{int:2,cha:1}}}]};

OP_NODES.op_ace_execution = {text:`The execution platform. Two executioners with massive blades stand behind Ace, who kneels in sea-prism stone shackles, his fire extinguished, his pride the only thing they cannot chain.

Sengoku gives the order. The blades rise.

Luffy screams. Not words — a raw, animal sound that tears from his throat and carries across the entire battlefield. His Conqueror's Haki erupts unconsciously for the first time, and fifty thousand Marines collapse where they stand. The executioners faint. The blades clatter harmlessly.

But it is not enough. Sengoku himself guards the platform now, transforming into the Great Buddha — a golden giant radiating shockwaves. Garp sits on the railing, tears streaming down his face, torn between duty and family.

"Garp! Move!" Luffy screams, charging up the ramp.

"I am a Marine," Garp says. His fist rises. The fist that cornered Roger, that fought Rocks, that earned the title Hero of the Marines. It trembles. "I have to stop you."

Luffy does not slow down. Garp's fist comes down — and misses. The old man lets himself be knocked aside by his own grandson, tears and snot streaming down his face.

"Damn you, Luffy," Garp whispers. "Damn you for making me choose."

Mr. 3 — the wax man, a former villain turned unlikely ally — molds a key from wax that fits Ace's shackles. The sea-prism stone falls away. Fire erupts across the platform like a second sun.

Ace is free. For one shining moment, Ace is free.`,scene:'action',mood:'#cc0000',characters:['Luffy','Ace','Garp','Sengoku'],effects:{stats:{cou:2},rel:{luffy:2},flags:{ace_unchained:true}},choices:[{text:'Cover the retreat — get Ace and Luffy off the platform and to the ships.',next:'op_mf_rescue_ace',effects:{stats:{str:1,cou:1}}},{text:'Face Akainu — the admiral is already moving to intercept.',next:'op_mf_save_ace',effects:{stats:{cou:3}}}]};

OP_NODES.op_whitebeard_last = {text:`Edward Newgate. Whitebeard. The Strongest Man in the World. He stands at the center of Marineford, his body a ruin — half his face burned away by Akainu's magma, a hole in his chest from the same admiral's fist, two hundred and sixty-seven sword wounds, one hundred and fifty-two gunshot wounds, forty-six cannon impacts. Not a single wound on his back. He never ran. Not once in his entire life.

The Marines surround him. Blackbeard's crew — the traitor who started all of this by selling Ace to the Government — arrives to deliver the killing blow. Teach shoots him. Stabs him. His crew piles on like jackals on a dying lion.

Whitebeard does not fall.

He grabs Blackbeard by the throat with one hand and cracks the air with the other. The earthquake splits Marineford in half. The island itself begins to sink. Blackbeard screams.

"You are not the one Roger was waiting for, Teach," Whitebeard rumbles. "Just as Roger was not waiting for me. Someday, someone will carry the weight of centuries on their shoulders and challenge the entire world to a battle. That day will come — no matter what the Government does to stop it."

He releases Teach. Stands tall one final time. Turns his back to no one. And speaks his last words to the entire world, broadcast on every Den Den Mushi across every sea:

"ONE PIECE IS REAL!"

The Strongest Man in the World dies standing up. His coat falls from his shoulders — a white coat marked with his crew's emblem. The man who called every pirate under his flag his son dies knowing his sons are free.

The era does not end. It accelerates.`,scene:'war',mood:'#cc0000',characters:['Whitebeard','Blackbeard'],effects:{stats:{cou:1,per:1},flags:{whitebeard_death:true}},choices:[{text:'Carry Whitebeard\`s will forward — escape Marineford and honor his sacrifice.',next:'op_mf_aftermath',effects:{stats:{cou:2}}},{text:'Rally the Whitebeard Pirates in retreat — their captain would want them to live.',next:'op_mf_aftermath',effects:{stats:{cha:2},rel:{luffy:1}}}]};

OP_NODES.op_sabaody_separation = {text:`Before Marineford. Before the war. Before everything broke.

Sabaody Archipelago. The crew has just punched a Celestial Dragon — an unforgivable crime that summons an admiral. Kizaru arrives in a pillar of light and dismantles the Straw Hats like they are children. Sentoumaru and his Pacifista army box them in. Every escape route is sealed.

And then Bartholomew Kuma appears. The Tyrant. A Warlord with paw-shaped pads that can repel anything — even people. He touches Zoro, and the swordsman vanishes. Gone. Sent flying through the sky to an unknown island days away.

"ZORO!" Luffy screams.

Kuma touches Usopp. Gone. Robin. Gone. Sanji, Chopper, Nami, Franky, Brook — one by one, vanishing into the sky like shooting stars in reverse.

Luffy reaches for each one. Misses. Every time. His rubber arms stretch and grab at nothing. The captain of the Straw Hat Pirates watches his entire crew disappear, powerless to stop it.

"I could not save any of them," Luffy whispers, on his knees, fists pounding the dirt. "Not a single one."

Rayleigh — the Dark King, Roger's first mate — finds him in the aftermath. "You are too weak, Luffy. The New World will kill you and everyone you love. Unless you train."

This is the moment that breaks Luffy. And the moment that remakes him. The separation is not the end of the Straw Hat Pirates. It is the crucible that forges them into legends.

Two years. That is the promise. Two years apart. Then Sabaody again. Stronger than ever.`,scene:'tragedy',mood:'#0a0a2e',characters:['Luffy','Kuma','Rayleigh'],effects:{stats:{per:1},flags:{crew_separated:true}},choices:[{text:'Train relentlessly during the separation — become strong enough that this never happens again.',next:'op_timeskip',effects:{stats:{str:2,cou:1}}},{text:'Seek out Rayleigh independently — learn the secrets of Haki before the reunion.',next:'op_haki_awakening',effects:{stats:{per:2,int:1}}}]};

OP_NODES.op_fishman_island = {text:`Ten thousand meters beneath the sea. Fish-Man Island — a kingdom encased in a giant bubble, lit by the roots of the Sunlight Tree Eve, populated by merfolk and fish-men who have endured centuries of human cruelty.

The island is beautiful. Coral palaces, currents of warm light, schools of tropical fish weaving between buildings. But the beauty hides scars that run deeper than the ocean itself.

Queen Otohime spent her life petitioning for fish-man equality — collecting signatures, begging her people to forgive humanity. She was assassinated. Shot dead in front of her children. The signatures burned.

Her daughter, Princess Shirahoshi — a giant mermaid with the power to command Sea Kings, the Ancient Weapon Poseidon incarnate — has spent ten years locked in a tower, hiding from Vander Decken's obsessive thrown projectiles.

And Hody Jones, a fish-man supremacist fueled by hatred he did not even earn — he never suffered at human hands, only inherited rage — has seized the kingdom with an army of New Fish-Man Pirates pumped full of Energy Steroids.

"Humans destroyed our people for centuries!" Hody screams, his shark teeth bared. "Fisher Tiger! Queen Otohime! Slaves in Mariejois! We will repay every drop of blood!"

Luffy stares at him. "I do not care about your grudge. I just made a promise to protect this place."

Jinbe — the former Warlord, the fish-man who carried Luffy through Marineford — stands with the crew. "Hody is not fighting for fish-men. He is fighting for hatred itself. And hatred is the one enemy that cannot be punched away."

But Luffy is going to try anyway.`,scene:'adventure',mood:'#0066cc',characters:['Luffy','Jinbe','Shirahoshi'],effects:{stats:{cha:1,cou:1},flags:{fishman_island:true}},choices:[{text:'Fight Hody Jones head-on — crush his army and free the island.',next:'op_timeskip',effects:{stats:{str:2},rel:{luffy:1}}},{text:'Protect Shirahoshi — she is the key to everything, and she does not even know it.',next:'op_ancient_weapons',effects:{stats:{per:2},rel:{luffy:1}}},{text:'Help Jinbe bridge the divide — this is about more than fighting.',next:'op_alliance',effects:{stats:{cha:2},rel:{luffy:1}}}]};

OP_NODES.op_dressrosa_colosseum = {text:`The Corrida Colosseum. Dressrosa's gladiatorial arena, where warriors from across the world fight for a prize that sends shockwaves through every sea: the Mera Mera no Mi. Ace's Devil Fruit. The Flame-Flame Fruit, recovered after Ace's death and offered as bait by Doflamingo.

Luffy enters under the alias "Lucy" — a paper-thin disguise that fools absolutely no one except the people who have never met him. The colosseum is packed with legendary fighters: Cavendish, the beautiful pirate whose alter ego Hakuba slaughters in his sleep; Bartolomeo, the cannibal-turned-fanboy whose barrier powers are fueled by pure obsession with Luffy; Rebecca, the former princess forced to fight for scraps in her own grandfather's kingdom.

But the real shock comes in Block D.

A figure in a top hat and blue coat enters the ring. He fights with a steel pipe. His movements are fluid, precise — and hauntingly familiar. When he catches a punch bare-handed and his fingers ignite with inherited flame, the arena goes silent.

Sabo. Luffy's other brother. The boy who was supposed to be dead — killed by a Celestial Dragon's cannon when he was ten years old. Saved by Dragon. Raised by the Revolutionary Army. His memories of Luffy and Ace lost to amnesia until the newspaper headline screamed Ace's death at Marineford and shattered the dam.

"I was not there for Ace," Sabo says, his voice cracking for the first and only time. "I will never forgive myself for that. But I am here now. And I am taking his fruit. His fire. His will."

Sabo eats the Mera Mera no Mi. Flames erupt from his body — Ace's flames, inherited by the brother who survived. The colosseum erupts. Luffy cries. Not sad tears. Joy.

"Sabo! YOU ARE ALIVE!"

"I am alive. And I am never leaving you again."`,scene:'action',mood:'#d4a017',characters:['Luffy','Sabo','Rebecca'],effects:{stats:{cou:1,cha:1},rel:{luffy:2},flags:{sabo_returned:true}},choices:[{text:'Join the colosseum battles — fight your way to Doflamingo through the arena.',next:'op_dressrosa',effects:{stats:{str:2,cou:1}}},{text:'Skip the games — go straight for Doflamingo\`s palace.',next:'op_dressrosa',effects:{stats:{int:1,cou:2}}},{text:'Rally the colosseum fighters into an army — you will need every blade against the Warlord.',next:'op_dressrosa',effects:{stats:{cha:2}}}]};

OP_NODES.op_wano_samurai = {text:`Wano Country rises from the sea like a painting from another century. Waterfalls cascade upward, carrying ships to the isolated nation above. Cherry blossoms drift on warm currents. Pagodas dot the mountainsides. It is Japan frozen in amber — beautiful, ancient, and suffering.

Kaido rules from Onigashima. The Beasts Pirates have strip-mined Wano's rivers, poisoned its fields, enslaved its people, and turned its proud samurai into broken laborers in weapons factories. The citizens eat scraps. The children drink contaminated water. The flower capital celebrates while the rest of the country starves.

You arrive in disguise, separated from half the crew. Luffy is captured almost immediately — thrown into a prison mine in Udon, forced to carry sea-prism stone blocks that drain his Devil Fruit power. But Luffy being Luffy, he turns the prison into a training camp.

"If this stone drains my power," Luffy says, carrying blocks that would crush a normal man, "then training with it will make me even stronger when it comes off!"

Meanwhile, Kinemon — the samurai from the past, one of Oden's retainers who traveled twenty years through time — reveals the plan. The Fire Festival. Kaido's biggest celebration. Every Beast Pirate drunk and distracted. That is when the alliance strikes.

You train alongside Wano's samurai. Their swordsmanship is different from anything you have seen — infused with Haki techniques passed down for generations. Ryuo, they call it. The flow of spiritual energy through the blade.

Hyogoro, the old yakuza boss imprisoned in Udon, teaches Luffy the secret: "Do not force the Haki through. Let it flow. Like water through a crack in the stone. That is how you bypass defenses. That is how you hurt a dragon."

The Fire Festival approaches. Five thousand samurai prepare in secret. The Straw Hat-Heart-Kid alliance gathers its forces. Wano's liberation is coming — but Kaido is the Strongest Creature in the World for a reason.`,scene:'adventure',mood:'#cc2200',characters:['Luffy','Kinemon','Hyogoro'],effects:{stats:{str:1,per:1},flags:{wano_arrived:true}},choices:[{text:'Train in Ryuo with Hyogoro — master the flowing Haki technique.',next:'op_wano_infiltration',effects:{stats:{str:2,per:1}}},{text:'Help Kinemon rally the samurai — the alliance needs numbers.',next:'op_wano_infiltration',effects:{stats:{cha:2}}},{text:'Infiltrate Onigashima early — scout the enemy before the raid.',next:'op_onigashima_raid',effects:{stats:{per:2,int:1}}},{text:'Before Wano, there was Zou — where the alliance was forged. Remember how it all came together.',next:'op_zou_alliance',effects:{stats:{int:1}}}]};

OP_NODES.op_rooftop_kaido = {text:`The rooftop of Onigashima's Skull Dome. Open sky. Stars above. An entire floating island beneath your feet, carried by Kaido's flame clouds over the Flower Capital.

Kaido in his dragon form fills the sky — azure scales, a body that stretches hundreds of feet, eyes that have seen empires crumble. He has been drunk all night, and it has not slowed him down. If anything, the alcohol makes him more dangerous — more unpredictable, more savage.

Big Mom stands beside him. Two Emperors. The combined bounty of over eight billion berries. Power that has defined the New World for decades.

Against them: five members of the Worst Generation. Luffy, Zoro, Kid, Law, and Killer. Five rookies who refuse to accept the ceiling the old generation built.

Zoro draws Enma — Oden's blade, the one sword that ever scarred Kaido. The blade drinks his Haki like a starving beast, but Zoro feeds it willingly. His attack — Ashura, the three-headed nine-sword demon technique — opens a wound on Kaido's chest that mirrors the scar Oden left twenty years ago.

"You can use Oden's Ryuo," Kaido says, blood flowing freely for the first time in decades. He is smiling. Not with cruelty — with recognition. "It has been a long time since anyone cut me."

But cutting Kaido is not the same as defeating him. He swats Zoro aside, breaks Kid's mechanical arm, hammers Law into the stone. One by one, the supernovas fall.

Luffy stays standing. Gear Fourth. Conqueror's Haki coating his fists for the first time — the technique only the very strongest can use, striking without touching.

"Kaido. I am going to surpass you."

"Wororo! Then show me, Straw Hat! Show me the strength of the next generation!"

They clash. The sky splits in half.`,scene:'battle',mood:'#cc0000',characters:['Luffy','Zoro','Kaido','Big Mom','Law','Kid'],effects:{stats:{str:2,cou:2},flags:{rooftop_battle:true}},choices:[{text:'Support the Worst Generation on the rooftop — every blade matters against two Emperors.',next:'op_gear5_joyboy',effects:{stats:{str:2,cou:1}}},{text:'Hold the line below — if the raid fails inside, the rooftop battle is meaningless.',next:'op_onigashima_raid',effects:{stats:{int:1,cou:1}}}]};

OP_NODES.op_gear5_joyboy = {text:`Luffy loses. Kaido's kanabo — the spiked thunder club — connects with a blow that stops Luffy's heartbeat. The Straw Hat captain falls. His body lies motionless on the rooftop. The Voice of All Things goes silent across the world.

Kaido descends to the Live Floor and announces victory. "Straw Hat Luffy is dead."

The alliance breaks. Hope dies. Samurai drop their swords. Pirates abandon their positions. Twenty years of planning, centuries of prophecy — extinguished by a single swing.

And then.

A heartbeat. Not a normal heartbeat — a drumbeat. Rhythmic. Ancient. A sound that has not echoed across the world in eight hundred years.

Dum. Dum-dum-dum-dum.

The Drums of Liberation.

On the rooftop, Luffy's body changes. His hair turns white. His skin becomes rubbery in a way that defies physics — elastic, cartoonish, as if reality itself has become his plaything. His eyes glow with rings of golden fire. And he laughs. A laugh so pure, so joyful, so impossibly FREE that it carries across Onigashima and makes every listener — ally and enemy — feel something stir in their chest.

"Shishishi... AHAHAHA!"

This is not Gear Fourth. This is Gear Fifth — the awakening of the Gomu Gomu no Mi. Except the Gomu Gomu no Mi was never its real name. The World Government hid the truth for eight centuries.

It is the Hito Hito no Mi, Model: Nika. The Human-Human Fruit, Mythical Type: Sun God Nika. The warrior of liberation who fought with the power of imagination itself. The most ridiculous ability in the world — and the most dangerous.

Luffy grabs the ground and turns it into rubber. He grabs Kaido's dragon body and inflates it like a balloon. He runs through the air, stretches his limbs into impossible shapes, and fights with the logic of a cartoon — because that is exactly what Nika's power does. It turns the world into rubber. It turns combat into play. It turns suffering into laughter.

Joy Boy has returned. And he is having the time of his life.`,scene:'awakening',mood:'#d4a017',characters:['Luffy','Kaido'],effects:{stats:{str:3,cou:2},flags:{gear5_awakened:true,joyboy:true}},choices:[{text:'Witness the final clash — Luffy versus Kaido, Joy Boy versus the King of Beasts.',next:'op_kaido_final',effects:{stats:{cou:1},rel:{luffy:2}}},{text:'Support the alliance below — Gear Fifth Luffy can handle Kaido alone.',next:'op_onigashima_raid',effects:{stats:{cha:1,int:1}}}]};

OP_NODES.op_laugh_tale = {text:`The four Road Poneglyphs. Four red stones, each one holding a coordinate. Robin has translated them all — every nuance, every hidden meaning. The intersection point appears on the map like a star falling into place.

Laugh Tale. The island Roger named. The final island of the Grand Line. The place where the One Piece waits.

The Thousand Sunny sails through waters no ship has crossed in twenty-two years. The sea here is different — calmer, warmer, as if the ocean itself is welcoming them. Fish swim alongside the hull in formations that feel deliberate, almost ceremonial.

The island appears at dawn. Small. Green. Unremarkable from the outside — a hill covered in flowers, surrounded by shallow reefs. Nothing about it screams treasure or destiny.

But when the crew steps ashore and enters the cave at the island's heart, they find it. Roger's treasure. Joy Boy's treasure. The treasure that made the Pirate King laugh so hard he cried.

The crew stares. For a long, long moment, no one speaks.

Then Luffy laughs. The same laugh Roger laughed. Tears streaming down his face, hat clutched to his chest, body shaking with a joy so profound it transcends language.

"So THAT is the One Piece," he says between gasps. "Of COURSE it is. AHAHAHAHA!"

Robin smiles. She understands. The Rio Poneglyph — the true history of the world — is here. Everything Ohara died for. Every scholar who was silenced. Every book that was burned. The complete, unbroken truth.

"Professor Clover," she whispers. "We found it."

The One Piece is not gold. It is not a weapon. It is a promise — left by Joy Boy eight hundred years ago for the one who would inherit his will. A promise that the world would be set free.

And now it is time to keep it.`,scene:'revelation',mood:'#d4a017',characters:['Luffy','Robin','Zoro','Nami','Sanji'],effects:{stats:{int:2,per:2},flags:{laugh_tale_reached:true}},choices:[{text:'Reveal the truth to the world — broadcast the One Piece to every sea.',next:'op_end_free_seas',effects:{stats:{cha:3,cou:2}}},{text:'Challenge Shanks first — Luffy made a promise to return the hat.',next:'op_shanks_reunion',effects:{stats:{cou:2},rel:{luffy:2}}},{text:'Prepare for the final war — the World Government will not let the truth spread.',next:'op_final_war_rally',effects:{stats:{int:2,cou:1}}}]};

OP_NODES.op_shanks_reunion = {text:`Red-Haired Shanks. The man who started everything.

Twelve years ago, in a bar in Foosha Village, a bandit poured sake on his head and Shanks laughed it off. But when that same bandit threatened a boy named Luffy, Shanks gave his arm to save him. And then he gave the boy his straw hat.

"Give it back to me someday," Shanks said. "When you have become a great pirate."

That day is today.

The Red Force and the Thousand Sunny meet in open water. Shanks stands at the bow — red hair, three scars over his left eye from Blackbeard's claws, one arm, and a smile that has not changed in twelve years.

Luffy stands at the Sunny's figurehead. He reaches up and takes the straw hat off his head. The hat that has been his identity, his shield, his promise. The hat he entrusted to Nami when she was crying, that he placed on Vivi's head in farewell, that survived Marineford and Wano and every storm in between.

"Shanks."

"Luffy."

They stare at each other across the gap between ships. Then Luffy grins — the same grin he had as a seven-year-old boy sitting on a barstool, announcing to a room full of pirates that he would be the King.

"I found it. The One Piece. I became the Pirate King." He holds out the hat. "And a great pirate keeps his promises."

Shanks takes the hat. His hand trembles. For the first time in the story, Red-Haired Shanks — the man who stared down admirals without flinching — cries.

"I bet my arm on the right kid," Shanks whispers.

"You bet your arm on the BEST kid!" Luffy shouts, laughing.

They share a drink. Sake, like twelve years ago. Captain to Captain. Emperor to Pirate King. Father figure to the boy who surpassed every expectation.

Shanks puts the hat back on Luffy's head one last time. "Keep it. It was always yours."`,scene:'reunion',mood:'#cc2200',characters:['Luffy','Shanks'],effects:{stats:{cha:2,cou:1},rel:{luffy:3},flags:{shanks_reunion:true}},choices:[{text:'Sail into the final war with Shanks at your side — the old and new era united.',next:'op_final_war_rally',effects:{stats:{cou:2,cha:1}}},{text:'This is where the story ends — the promise kept, the dream fulfilled.',next:'op_end_pirate_king',effects:{stats:{cha:2}}},{text:'Shanks looks at you the way he once looked at Ace. The memory of Marineford surfaces unbidden.',next:'op_ace_memory',effects:{stats:{emp:1,wis:1}}}]};

OP_NODES.op_end_pirate_king = {text:`Monkey D. Luffy. King of the Pirates.

Not because he conquered every sea. Not because he defeated every enemy. Not because he claimed the greatest treasure. He became the Pirate King because he was the freest man on the ocean — and freedom, in the end, is the only crown worth wearing.

The world knows his name. Every island, every kingdom, every child who stares at the horizon and wonders what lies beyond. Luffy's bounty is the highest in history. His flag — the straw hat skull and crossbones — flies on islands across all four seas, a symbol not of fear but of liberation.

The crew sails on. That is the part the newspapers never understand. They expect the Pirate King to stop — to build a throne, to claim territory, to rule. But Luffy has never wanted to rule anything.

"Being Pirate King means being the freest person on the sea," he told a reporter once, picking his nose. "Why would I stop sailing?"

Zoro is the World's Greatest Swordsman. Nami is drawing her map of the entire world. Sanji found the All Blue — a sea where every fish from every ocean swims together. Usopp is a brave warrior of the sea, and every word of it is true now. Robin has read the Rio Poneglyph and published the true history. Chopper is writing a medical encyclopedia that will cure every disease. Franky built the ship of dreams. Brook's music echoes across every ocean. Jinbe steers with the wisdom of the deep.

And you — you sailed with them. Through East Blue and the Grand Line, through Paradise and the New World, through wars and wonders and the kind of adventures that make the gods themselves lean closer to watch.

The Thousand Sunny catches the wind. Luffy sits on the figurehead, feet dangling, straw hat tilted back, grinning at an ocean that has never run out of surprises.

"Hey," he says. "What do you think is past the end of the Grand Line?"

No one knows. That is the point.

The King of the Pirates sails toward the horizon, and the horizon runs away laughing, because even the edge of the world knows it cannot outrun Monkey D. Luffy.`,scene:'end',mood:'#d4a017',ending:'King of the Pirates',characters:['Luffy','Zoro','Nami','Sanji','Usopp','Robin'],choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

OP_NODES.op_end_free_seas = {text:`The truth spreads like wildfire across every ocean.

The One Piece — the true history, Joy Boy's message, the crimes of the World Government laid bare for eight hundred years — reaches every Den Den Mushi, every newspaper, every island from East Blue to the New World. Robin's translation. Morgans' broadcast. The voice of the world itself, finally speaking after centuries of enforced silence.

The Celestial Dragons are not gods. They are the descendants of twenty kings who destroyed the Ancient Kingdom and erased a century of history to hide their crime. The slaves were innocent. The scholars of Ohara were right. The Void Century was not a mystery — it was a cover-up.

Kingdoms revolt. Not violently — most of them simply withdraw from the World Government. The Reverie dissolves. The Marines fracture. Fujitora removes his blindfold and weeps at the world he can finally see clearly.

The Celestial Dragons flee Mary Geoise as the Red Line itself — that massive wall of stone dividing the world's oceans — begins to crumble. Not from weapons. From Luffy's final act as Joy Boy: the awakened power of Nika, turning the Red Line to rubber and letting the seas do what they have wanted to do for millennia.

The oceans merge. All Blue — Sanji's dream — is born as every sea flows into one. Fish-Man Island rises to the surface, bathed in true sunlight for the first time. The world is one ocean, one connected sea, with no walls and no gates and no one standing above anyone else.

Luffy does not give speeches. He does not sit on thrones. He watches the Red Line crumble from the Sunny's deck, arms behind his head, and says:

"Now ANYONE can go ANYWHERE. That is what freedom is."

The tyranny of eight hundred years ends not with a war but with a truth. The seas are free. The people are free. The world is free.

And somewhere on that newly borderless ocean, a boy in a straw hat laughs at the sunrise, because the adventure is only beginning.`,scene:'end',mood:'#d4a017',ending:'The Free Seas',characters:['Luffy','Robin','Nami','Sanji','Jinbe'],choices:[{text:'PLAY AGAIN \u2014 Return to Menu',next:'_menu'}]};

OP_NODES.op_void_century = {text:`The truth of the Void Century. The secret the World Government killed entire civilizations to bury. The reason Ohara burned. The reason the Poneglyphs exist. The reason the world is the way it is.

Eight hundred years ago, there was a kingdom. Not just any kingdom — a civilization that spanned the entire world, connected by the one ocean that existed before the Red Line was built. They called themselves the People of the Dawn. Their king bore a title that would echo across centuries: Joy Boy.

The People of the Dawn discovered something fundamental about the world — a truth about the nature of Devil Fruits, the origin of the Grand Line's strange phenomena, the connection between all living things. They carved this knowledge into indestructible stones: the Poneglyphs.

But twenty kings — the ancestors of the Celestial Dragons — feared what this knowledge would mean. If people understood the truth, they would never submit to rulers. So the twenty kings united, built weapons of mass destruction, and waged war against the Dawn Kingdom.

The war lasted a century. The Void Century. The Dawn Kingdom fell. The twenty kings raised the Red Line — a wall of stone encircling the globe — to divide the oceans and control the world. They established Mary Geoise atop the Red Line and declared themselves gods. They erased every record of the century-long war. They banned the study of Poneglyphs on pain of death.

But Joy Boy was not defeated. He left a message. Carved into the final Poneglyph on Laugh Tale, waiting for someone with the will to find it:

"I am sorry I could not keep my promise in my time. But I will return. In a body that laughs when it should cry. In a spirit that stretches when it should break. Look for the one who carries the Drums of Liberation — they will finish what I started."

Robin reads the inscription aloud, her voice steady, her eyes streaming. Twenty-two years of searching. A lifetime of being hunted for the crime of wanting to know. And now she knows everything.

"The Void Century was not void," she says. "It was full. Full of people who fought for freedom and lost. And they left us the map to finish the fight."`,scene:'revelation',mood:'#636e72',characters:['Robin','Luffy'],effects:{stats:{int:3,per:2},flags:{void_century_revealed:true}},choices:[{text:'Take this knowledge to the world — broadcast the truth to every sea.',next:'op_end_free_seas',effects:{stats:{cha:2,cou:2}}},{text:'Use this knowledge to prepare for the final war against the World Government.',next:'op_final_war_rally',effects:{stats:{int:2,cou:1}}},{text:'Seek the Ancient Weapons — Joy Boy left tools as well as words.',next:'op_ancient_weapons',effects:{stats:{int:1,per:2}}},{text:'Robin falls silent. Her past — Ohara, the scholars, the Buster Call — it all connects to this moment.',next:'op_robin_ohara',effects:{stats:{emp:1},relationships:{robin:2}}}]};

OP_NODES.op_nika_awakening = {text:`The sky above Onigashima tears open like old cloth. You feel it before you see it — a heartbeat that does not belong to you, deep and ancient and laughing, rising up from somewhere beneath your ribs, beneath your name, beneath everything you thought you were. Then it hits. White. Brilliant, blinding, impossible white, flooding out of your skin like sunrise breaking through stone.

Your body changes. Not the way it has changed before — not the ache of bones stretching, not the pressure of blood heating to a boil — but lightly. Playfully. Like the world has decided the rules were always a suggestion. The clouds bounce. The rain bounces. Kaido's scales, black and ancient and harder than the ambitions of kings, bounce. You look down at your hands and they are white and cartoon-vast and belonging to something that has slept for eight hundred years inside a piece of fruit waiting for someone foolish enough — free enough — to wake it.

Kaido stares. For the first time in a century of war and conquest and deliberate brutality, the King of Beasts looks at something and does not understand it. "What are you?" he asks, and the question cracks through him like a fault line.

You grin. The grin is so wide it should be impossible. Everything about this moment is impossible, and that is precisely the point.

Sun God Nika. That is the name the world erased. That is the name the World Government spent eight hundred years burying under classified files and redacted histories and the blood of anyone who remembered. A god who made people laugh. A god whose only weapon was freedom itself — rubber that listens to imagination rather than physics, a body that turns the user's joy into force. They feared this more than any army. More than any Void Century secret. Because you cannot imprison an idea that wears a straw hat and refuses to stop smiling.

Kaido comes at you — full dragon, the force of his breath a pressure wave that should reduce a mountain to gravel. You stretch. You bounce it. You laugh, and the laugh echoes across Wano like a drum — boom, boom, boom, the drums of liberation, the rhythm your heart has been playing since the very beginning without you ever knowing the name of the song.

The crew can hear it. Down below, through smoke and ruin and exhaustion, every single person who has ever called you captain can hear those drums, and every single one of them stands up straighter without knowing why.

You and Kaido collide — imagination against despair, rubber against scales, a man who inherited a dream against a man who gave up on them entirely. The island shakes. The clouds part. And somewhere very far away, in a marine fortress and a government chamber and a throne room that has not feared anything in centuries, someone feels a cold and unfamiliar dread settle into their chest.

The Drums of Liberation. They told the world that god was dead. But gods do not die. They sleep. And they wake up hungry and laughing and ready to fight.`,scene:'action',mood:'#f5c842',characters:['Luffy','Kaido'],effects:{stats:{cou:3,str:2}},choices:[{text:'Push the awakening further — let Nika consume every limit you have left.',next:'op_blackbeard_showdown'},{text:'Fight smart: use the rubber-world physics to dismantle Kaido piece by piece.',next:'op_laugh_tale'},{text:'Call out to the crew. This moment belongs to all of them.',next:'op_wano'},{text:'The drums of liberation beat. This is what the alliance was built for — the Final War begins.',next:'op_final_war',effects:{stats:{cou:2},flags:{final_war_trigger:true}}}]};


OP_NODES.op_blackbeard_showdown = {text:`The sea between you and Marshall D. Teach smells like thunder. You have fought across half the world to reach this point — through grief and growth and the specific weight of a name you chose to carry — and now here he stands on the deck of his flagship with two powers no single body was ever supposed to hold, grinning the same reckless grin you remember from the stories, from the nightmares, from the long silence after Ace stopped breathing.\n\nTwo Devil Fruits. The Yami Yami no Mi — darkness that devours everything, that nullifies Devil Fruit powers on contact — and the Gura Gura no Mi, Whitebeard's quake power, stolen from a dead man's body. Together they make Teach something that should not exist: a void that can shake the world apart.\n\n"Zehahaha! You finally came!" His voice carries across the water. "I've been waiting for this. The son of Dragon, the brother of Ace — the one who keeps showing up where he shouldn't and surviving what he shouldn't."`,scene:'boss',mood:'#1a0033',characters:['Luffy'],effects:{stats:{cou:3},flags:{blackbeard_confronted:true}},choices:[{text:'Attack with everything you have. Gear Fifth.',next:'op_start',effects:{stats:{cou:3}}},{text:'Rally the alliance fleet. This fight is bigger than one person.',next:'op_start',effects:{stats:{cha:2}}}]};
OP_NODES.op_zou_alliance = {text:`The elephant walks. You have to say it several times before it stops sounding like madness: the elephant walks. Zou is not an island. Zou is a living creature — Zunesha, a thousand-year-old elephant the size of a continent, condemned to walk the ocean floor for a crime committed during the Void Century. On its back, an entire civilization has grown: the Mink Tribe, a race of animal-human hybrids who have built their cities in Zunesha's fur and fought their wars on its shoulders for eight hundred years.\n\nThe Mink Tribe fights with Electro — a combat art that channels electricity through their fur — and they have been fighting Jack the Drought, one of Kaido's All-Stars, for five days straight. Day and night shifts. The Minks do not surrender. It is not in their nature.\n\n"We have been waiting for you," Nekomamushi says, his massive cat form silhouetted against the moonlight. "The Pirate-Mink-Samurai Alliance begins here."`,scene:'exploration',mood:'#2d7a16',characters:['Luffy','Zoro','Nami'],effects:{stats:{cha:2},relationships:{luffy:1},flags:{zou_visited:true}},choices:[{text:'Form the alliance. Kaido falls next.',next:'op_start',effects:{stats:{cha:2}}},{text:'Learn more about the Void Century from the Minks.',next:'op_robin_ohara',effects:{stats:{int:2}}}]};
OP_NODES.op_robin_ohara = {text:`She tells you on a night when the sea is so calm it looks like black glass. You did not ask. You have learned, after months of sailing with Nico Robin, that she offers things when she is ready and not one second before, and that the cost of what she offers is always higher than it appears.\n\nOhara. The island of scholars. The place where the world's greatest archaeologists gathered to study the Poneglyphs — the indestructible stone tablets scattered across the world, each one containing fragments of a history the World Government has spent eight hundred years trying to erase.\n\nThe Buster Call came on a sunny day. Five Vice Admirals. Ten warships. The order to erase not just the scholars but the island itself — every man, woman, and child. Robin was eight years old.\n\n"I am the only one who can read them," she says quietly. "The last person alive who can read the True History. That is why they hunted me for twenty years."`,scene:'calm',mood:'#2d3436',characters:['Robin'],effects:{stats:{int:2,emp:2},relationships:{robin:3},flags:{ohara_story_heard:true}},choices:[{text:'"We will find the Rio Poneglyph. Together."',next:'op_start',effects:{relationships:{robin:2}}},{text:'The World Government fears this truth. That makes it worth finding.',next:'op_start',effects:{stats:{int:1}}}]};
OP_NODES.op_ace_memory = {text:`You visit the grave. You were not sure you would — the New World has a way of filling your days with emergencies that leave no room for pilgrimage — but the ship passes close enough, and something in you insists. A pull like a current beneath the waterline, steady and impossible to ignore.\n\nPortgas D. Ace. Your brother. Not by blood — by choice, which in the world of One Piece is the only kind that matters.\n\nThe grave is simple. A stone marker on a quiet island. His hat sits on top, and someone has been leaving sake. You do not know who. You hope it is someone who loved him.\n\nYou sit. You do not cry. You cried at Marineford, when Akainu's fist went through his chest and the fire went out of the world's most reckless smile. You cried until Jinbe told you that you still had things worth living for, and you believed him because you had no choice.\n\n"I'll become the Pirate King," you tell the grave. "Watch me."`,scene:'calm',mood:'#636e72',characters:['Luffy'],effects:{stats:{cou:2,emp:1},flags:{ace_grave_visited:true}},choices:[{text:'Carry his will forward. Set sail for the next island.',next:'op_start',effects:{stats:{cou:2}}},{text:'Blackbeard took everything from Ace. He will answer for it.',next:'op_blackbeard_showdown',effects:{stats:{cou:1}}}]};
OP_NODES.op_final_war = {text:`It begins the way the world ends — not with a single catastrophe but with the slow, inevitable convergence of every force that has been building since the moment Gol D. Roger smiled at his own execution and told the world his treasure was real.\n\nThe Marines. The Four Emperors. The Revolutionary Army. The Seven Warlords. The Ancient Weapons. The Void Century. Every thread the World Government has been pulling for eight hundred years — every lie, every cover-up, every island burned and every history erased — it all converges here.\n\nThis is the Final War. The one the prophecies spoke of. The one Whitebeard promised with his dying breath: "One Piece is real."\n\nAnd you — standing on the deck of the Thousand Sunny with your crew behind you, your allies at your flanks, and the weight of every promise you have ever made pressing against your chest like a second heartbeat — you are ready.`,scene:'war',mood:'#c0392b',characters:['Luffy','Zoro','Nami','Sanji'],effects:{stats:{cou:3,cha:2},flags:{final_war_begun:true}},choices:[{text:'Charge into the battle. The Pirate King does not hesitate.',next:'op_start',effects:{stats:{cou:3}}},{text:'Rally every ally. This war needs everyone.',next:'op_start',effects:{stats:{cha:3}}}]};


// ============================================================
// SCENARIO DATA — DRAGON BALL Z: SAIYAN LEGACY
// ============================================================
window.SCEN_NODES['onepiece'] = OP_NODES;
})();
