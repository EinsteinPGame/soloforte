// Scenario data: examcrunch  (EC_NODES)
// Split out of scenario-generator.html on 2026-08-01.
// Edit THIS file to change this scenario — the main file no longer holds node data.
window.SCEN_NODES = window.SCEN_NODES || {};
(function(){
const EC_NODES = {};
EC_NODES['ec_start'] = {text:`You are in your dorm room, phone buzzing. Alex (your roommate and best friend) just sent a text: "Organic Chem final in 72 hours. Have you started?"\n\nYou look at your textbook — still in the shrink wrap.\n\nThree days. An entire semester of material. The clock is ticking.\n\nYour phone buzzes again. Alex: "Please tell me you have at least opened the textbook."\n\nYou have not opened the textbook.`,scene:'dorm',mood:'#ffeaa7',characters:['Alex'],choices:[{text:'Open the textbook. Start from page 1.',next:'ec_solo_cram',effects:{stats:{int:1}}},{text:'Text the class group chat. Someone must have notes.',next:'ec_find_help',effects:{stats:{cha:1}}},{text:'Have a full panic attack first. You have earned it.',next:'ec_panic',effects:{stats:{per:1}}}]};
EC_NODES['ec_solo_cram'] = {text:`You crack the shrink wrap. Chapter 1: Introduction to Organic Chemistry. Okay. Hydrocarbons. Carbon bonds. This is... not impossible? Two hours in, you have covered 3 of 24 chapters. At this rate you will finish the textbook in 16 hours. That leaves time for practice problems and sleep. Maybe.\n\nAlex walks in with coffee.\n\n"You actually started? I am impressed. And concerned. Both."`,scene:'dorm',mood:'#ffeaa7',characters:['Alex'],choices:[{text:'Go to the library. Fewer distractions.',next:'ec_library',effects:{stats:{int:1}}},{text:'Stay in the dorm. Comfort is key.',next:'ec_dorm_grind',effects:{stats:{per:1}}},{text:'Accept Alex\'s coffee and ask what their strategy is.',next:'ec_alex_plan',effects:{relationships:{alex:2}}}]};
EC_NODES['ec_find_help'] = {text:`You open the group chat. 47 unread messages. Most of them are other people panicking. But buried in the chaos: "I have complete notes. Color-coded. — Priya."\n\nYou also see Marcus: "exam is gonna be curved anyway lol who is coming to Sigma Chi tonight?"\n\nAnd someone shared a link to a graduate tutor named Sana who does cram sessions for $30/hour.`,scene:'dorm',mood:'#ffeaa7',characters:['Priya','Marcus','Sana'],choices:[{text:'Message Priya directly. Those notes are gold.',next:'ec_ask_priya',effects:{relationships:{priya:1},stats:{cha:1}}},{text:'Message Marcus. Maybe the party will clear your head.',next:'ec_marcus_party',effects:{relationships:{marcus:1},stats:{cou:1}}},{text:'Book Sana the tutor. Professional help.',next:'ec_book_tutor',effects:{stats:{int:1}}}]};
EC_NODES['ec_panic'] = {text:`You sit on your bed and stare at the ceiling for 40 minutes. Then you eat an entire bag of chips. Then you watch three episodes of a show you have already seen. Then you cry a little.\n\nThen Alex finds you in this state.\n\n"Okay," Alex says, sitting down. "We are going to make a plan."\n\nAlex looks at the chip crumbs on your shirt. "After you clean up."`,scene:'dorm',mood:'#ffeaa7',characters:['Alex'],choices:[{text:'Let Alex take charge. You clearly cannot be trusted.',next:'ec_alex_plan',effects:{relationships:{alex:2}}},{text:'"I need to find someone smarter than me."',next:'ec_find_help',effects:{stats:{cha:1}}},{text:'"I am going to the library and I am not coming out until I know organic chemistry."',next:'ec_library',effects:{stats:{cou:1}}}]};
EC_NODES['ec_alex_plan'] = {text:`Alex pulls out a whiteboard. "72 hours. 24 chapters. That is 3 hours per chapter — impossible. BUT. Dr. Chen always tests heavy on chapters 8-16. The functional groups, reactions, and mechanisms. We skip the intro and the advanced stuff. Focus on the core 60%."\n\nIt is not a perfect plan. But it is a plan.\n\n"Also," Alex adds, "I stole the practice exam from last year's TA."\n\nYou stare. "You WHAT?"\n\n"Stole is a strong word. I asked politely and they left it on their desk and I happened to have my phone."`,scene:'dorm',mood:'#ffeaa7',characters:['Alex'],choices:[{text:'Follow Alex\'s plan. 60% of the material, 100% focus.',next:'ec_focused_study',effects:{relationships:{alex:2},stats:{int:1}}},{text:'Use the practice exam to reverse-engineer what Dr. Chen tests.',next:'ec_practice_exam',effects:{stats:{int:1}},check:{stat:'int',dc:11},failNext:'ec_practice_confused'},{text:'"We should get Priya in on this. She actually understands this stuff."',next:'ec_recruit_priya',effects:{relationships:{alex:1},stats:{cha:1}}}]};
EC_NODES['ec_library'] = {text:`The university library at 11 PM. Fluorescent lights. The smell of old coffee and desperation. Every table is full of students who also waited until the last minute. You find a spot in the back near the medical journals. Nobody sits there because it smells like formaldehyde.\n\nPerfect — no distractions.\n\nYou spread your notes (all 4 pages of them) and the textbook. Let us do this.`,scene:'library',mood:'#ffeaa7',characters:[],choices:[{text:'Grind. Chapter by chapter. No breaks until chapter 12.',next:'ec_library_breakthrough',check:{stat:'int',dc:12},failNext:'ec_library_burnout',effects:{}},{text:'Find other Organic Chem students in the library and form an impromptu study group.',next:'ec_library_group',effects:{stats:{cha:1}}},{text:'Put on headphones and use flashcard apps. Modern problems, modern solutions.',next:'ec_flashcards',effects:{stats:{per:1}}}]};
EC_NODES['ec_dorm_grind'] = {text:`Your dorm room. Your rules. You put on lo-fi beats, make a blanket fort around your desk (for focus, obviously), and start grinding.\n\nChapter 4: Stereochemistry. Chapter 5: Reactions of Alkenes. The hours blur together.\n\nAt 3 AM, you realize you have been reading the same paragraph for 20 minutes.`,scene:'dorm',mood:'#ffeaa7',characters:[],choices:[{text:'Power through. Sleep is for the weak.',next:'ec_allnighter_success',check:{stat:'cou',dc:12},failNext:'ec_allnighter_crash',effects:{}},{text:'Take a 2-hour power nap. You will be sharper after.',next:'ec_power_nap',effects:{stats:{per:1}}},{text:'Switch tactics — watch YouTube lectures instead of reading.',next:'ec_youtube',effects:{stats:{int:1}}}]};
EC_NODES['ec_ask_priya'] = {text:`You DM Priya: "Hey, heard you have notes. Any chance I could get a copy?"\n\nHer reply comes in 30 seconds: "I have notes for the entire semester. Color-coded by topic, with mnemonics and practice problems."\n\nThen: "But I am not just giving them away. I need a study partner who will actually show up. My last three flaked."\n\nThen: "Library. Tomorrow. 8 AM. If you are late, I block you."\n\nShe is not kidding. You can tell she is not kidding.`,scene:'dorm',mood:'#ffeaa7',characters:['Priya'],choices:[{text:'Accept. Show up at 7:55 AM. Prove you are serious.',next:'ec_priya_study',effects:{relationships:{priya:2},stats:{int:1}}},{text:'"Can I bring my roommate Alex too? Two partners are better than one."',next:'ec_priya_group',effects:{relationships:{priya:1,alex:1},stats:{cha:1}}},{text:'Try to charm your way into getting the notes without committing to the study sessions.',next:'ec_got_notes',check:{stat:'cha',dc:13},failNext:'ec_priya_blocked',effects:{}}]};
EC_NODES['ec_marcus_party'] = {text:`Marcus picks you up at 10 PM. "Bro, stressing will not help. You need to reset your brain. Science says so."\n\nYou are pretty sure Marcus has never read a scientific paper, but here you are at Sigma Chi, holding a red cup, watching your future evaporate in real time.\n\nSurprisingly, you run into someone you did not expect — Sana, the graduate tutor, also at the party.\n\n"Even tutors need breaks," she says, sipping water. "You look like you are calculating the molecular weight of regret."`,scene:'party',mood:'#fdcb6e',characters:['Marcus','Sana'],choices:[{text:'Talk to Sana. Maybe you can negotiate a tutoring deal right here.',next:'ec_party_tutor',effects:{relationships:{sana:2},stats:{cha:1}}},{text:'Commit to the party. Dance it out. Study tomorrow with a clear head.',next:'ec_party_full',effects:{relationships:{marcus:2},stats:{lck:1}}},{text:'Leave early. This was a mistake. Go home and study.',next:'ec_midnight_cram',effects:{stats:{cou:1}}}]};
EC_NODES['ec_book_tutor'] = {text:`You book Sana for a 3-hour session tomorrow. $90. That is grocery money for two weeks. But passing Organic Chemistry is worth eating ramen exclusively.\n\nShe sends a pre-session questionnaire: "Rate your understanding of: functional groups, reaction mechanisms, stereochemistry, spectroscopy, synthesis..."\n\nYou rate everything 2/10 except stereochemistry which you rate 1/10 because you are not even sure what it is.\n\nHer reply: "Okay. We have work to do. Bring coffee."`,scene:'dorm',mood:'#ffeaa7',characters:['Sana'],choices:[{text:'Show up prepared with specific questions from the textbook.',next:'ec_tutor_session',effects:{relationships:{sana:2},stats:{int:1}}},{text:'Show up with nothing but vibes and desperation.',next:'ec_tutor_win',check:{stat:'cha',dc:11},failNext:'ec_tutor_struggle',effects:{relationships:{sana:1}}},{text:'Ask if she does group rates — bring Alex.',next:'ec_tutor_group',effects:{relationships:{sana:1,alex:1},stats:{cha:1}}}]};
EC_NODES['ec_focused_study'] = {text:`Alex's plan works. You attack chapters 8-16 with laser focus. Functional groups click first — OH is alcohol, COOH is carboxylic acid, NH2 is amine. The naming conventions start to make sense.\n\nBy hour 6, you can draw a benzene ring from memory. By hour 10, you understand why SN1 and SN2 reactions are different.\n\nAlex quizzes you every 2 hours. "What is the product of HBr addition to propene?"\n\n"MARKOVNIKOV'S RULE!" you scream.\n\nYour neighbors bang on the wall.`,scene:'dorm',mood:'#ffeaa7',characters:['Alex'],choices:[{text:'Keep this momentum. 48 hours of focused study left.',next:'ec_day2_strong',effects:{stats:{int:1},relationships:{alex:1}}},{text:'You are learning but some concepts are foggy. Get a tutor for the hard stuff.',next:'ec_tutor_supplement',effects:{stats:{int:1}}},{text:'Celebrate the progress with a coffee break. You have earned 20 minutes.',next:'ec_coffee_break',effects:{stats:{per:1}}}]};
EC_NODES['ec_practice_exam'] = {text:`You crack the code. Dr. Chen's practice exam from last year reveals his patterns: 40% mechanisms, 30% nomenclature, 20% synthesis, 10% spectroscopy. He recycles question types. The specific molecules change but the logic is identical.\n\nYou essentially have a blueprint.\n\n"Alex," you whisper. "Dr. Chen is predictable."\n\nAlex grins. "Now we are cooking with gas. Organic gas. Get it?"\n\nYou throw a pillow at them.`,scene:'dorm',mood:'#ffeaa7',characters:['Alex'],choices:[{text:'Drill mechanism problems until you can do them in your sleep.',next:'ec_day2_strong',effects:{stats:{int:1},relationships:{alex:2}}},{text:'Share this insight with the group chat. Help everyone.',next:'ec_share_insight',effects:{stats:{cha:1},relationships:{alex:1}}}]};
EC_NODES['ec_practice_confused'] = {text:`The practice exam is in front of you but it might as well be in Sanskrit. You recognize maybe 15% of the questions.\n\n"Alex... what is a Diels-Alder reaction?"\n\nAlex stares. "That is chapter 14."\n\n"I have not gotten to chapter 14."\n\n"It is one of the most tested topics."\n\nSilence.\n\n"I need help," you admit.`,scene:'dorm',mood:'#ffeaa7',characters:['Alex'],choices:[{text:'Find Priya. She can explain this.',next:'ec_recruit_priya',effects:{stats:{cha:1}}},{text:'Book the tutor. No more DIY.',next:'ec_book_tutor',effects:{stats:{int:1}}}]};
EC_NODES['ec_recruit_priya'] = {text:`You find Priya in the library (where else). She has three different colored pens, a tablet, and what appears to be a hand-drawn periodic table.\n\nYou and Alex explain the plan. Priya listens.\n\nThen: "Your plan is decent but incomplete. You are missing synthesis pathways — Dr. Chen always has at least one multi-step synthesis. I will join but we study MY way."\n\nAlex looks at you.`,scene:'library',mood:'#ffeaa7',characters:['Priya','Alex'],choices:[{text:'Accept Priya\'s terms. She is the expert.',next:'ec_priya_boot_camp',effects:{relationships:{priya:2,alex:1},stats:{int:1}}},{text:'Negotiate — blend both plans.',next:'ec_priya_boot_camp',check:{stat:'cha',dc:11},failNext:'ec_priya_reluctant',effects:{relationships:{priya:1,alex:1}}}]};
EC_NODES['ec_priya_study'] = {text:`7:55 AM. You are there. Priya looks surprised. "You actually came."\n\nHer notes are a work of art. Every reaction mechanism drawn step by step. Every functional group with a mnemonic. She has literally color-coded by exam probability.\n\nShe slides you a stack. "Read chapters 8-12 notes. I will quiz you in 90 minutes. If you cannot answer 60% correctly, we are starting over from scratch."\n\nThis is boot camp. Academic boot camp.`,scene:'library',mood:'#ffeaa7',characters:['Priya'],choices:[{text:'Absorb everything. You are a sponge now.',next:'ec_day2_strong',check:{stat:'int',dc:10},failNext:'ec_day2_shaky',effects:{relationships:{priya:2},stats:{int:1}}},{text:'Ask questions about everything you do not understand rather than just memorizing.',next:'ec_deep_learning',effects:{relationships:{priya:2},stats:{int:1}}}]};
EC_NODES['ec_priya_boot_camp'] = {text:`Priya is relentless. Flash cards. Whiteboard problems. She makes you explain concepts back to her — "If you cannot teach it, you do not know it."\n\nBy the end of 6 hours, your brain is mush but something is happening. Patterns are emerging. Reaction mechanisms are not random — they follow rules. Nucleophiles attack electrophiles. Electrons flow downhill.\n\nIt is not memorization. It is logic.\n\n"You are getting it," Priya says, almost smiling. Almost.`,scene:'library',mood:'#ffeaa7',characters:['Priya'],choices:[{text:'Ask Priya to keep going. You are on a roll.',next:'ec_day2_strong',effects:{relationships:{priya:2},stats:{int:1}}},{text:'Take a food break together. Bonding might help retention.',next:'ec_coffee_break',effects:{relationships:{priya:1},stats:{cha:1}}}]};
EC_NODES['ec_priya_reluctant'] = {text:`Priya sighs. "Fine. But if this becomes a waste of my time, I am out."\n\nThe hybrid plan is clunky at first — Alex's shortcut approach clashing with Priya's comprehensive method. But slowly, it merges into something workable: Priya's depth on the key topics, Alex's strategic exam targeting.\n\nYou are the glue holding it together. It is not glamorous, but it works.`,scene:'library',mood:'#ffeaa7',characters:['Priya','Alex'],effects:{relationships:{priya:1,alex:1}},choices:[{text:'Keep pushing through with the hybrid plan.',next:'ec_day2_shaky',effects:{}}]};
EC_NODES['ec_priya_blocked'] = {text:`Priya's response: "I have heard that line before. Good luck with the exam."\n\nShe blocks you.\n\nAlex winces. "Smooth."\n\nThe notes are gone. But you still have the textbook, the group chat, and 68 hours.`,scene:'dorm',mood:'#ffeaa7',characters:['Alex'],choices:[{text:'Library. Alone. No more shortcuts.',next:'ec_library',effects:{stats:{cou:1}}},{text:'Book the tutor instead.',next:'ec_book_tutor',effects:{stats:{int:1}}}]};
EC_NODES['ec_priya_group'] = {text:`Priya agrees but sets ground rules: phones off, 2-hour study blocks with 15-minute breaks, and absolutely no complaining.\n\nAlex and you form a study trio. Priya teaches, Alex strategizes, and you... absorb.\n\n"This might actually work," Alex whispers. Priya shushes them immediately.`,scene:'library',mood:'#ffeaa7',characters:['Priya','Alex'],effects:{relationships:{priya:1,alex:1}},choices:[{text:'Dive into Priya\'s boot camp method.',next:'ec_priya_boot_camp',effects:{}}]};
EC_NODES['ec_got_notes'] = {text:`Your charm offensive works. Priya rolls her eyes but sends you the notes — all 47 pages, color-coded, with her personal mnemonics.\n\n"Do not make me regret this," she texts.\n\nThese notes are incredible. It is like having the textbook translated into human.`,scene:'dorm',mood:'#ffeaa7',characters:['Priya'],choices:[{text:'Study the notes religiously.',next:'ec_day2_strong',effects:{stats:{int:1}}},{text:'Share them with Alex so you can quiz each other.',next:'ec_focused_study',effects:{relationships:{alex:2}}}]};
EC_NODES['ec_party_tutor'] = {text:`Sana laughs when you explain your situation. "72 hours, zero prep? You are my favorite kind of client. The desperate ones actually listen."\n\nShe offers a deal: two 3-hour sessions, $150 total, but she guarantees you will understand mechanisms and nomenclature — the two highest-weight sections.\n\n"Meet me at the science building study room. 9 AM. And I mean 9 AM."`,scene:'party',mood:'#fdcb6e',characters:['Sana'],effects:{relationships:{sana:2},stats:{cha:1}},choices:[{text:'Show up at 9 AM sharp. Time to learn.',next:'ec_tutor_session',effects:{}}]};
EC_NODES['ec_party_full'] = {text:`You dance. You play beer pong. You briefly forget that organic chemistry exists.\n\nAt 2 AM, Marcus drives you home. "Feel better?"\n\n"Actually... yeah."\n\nYou sleep like the dead and wake up at noon. 56 hours left. You lost 16 hours. But your head is clear and your motivation is back.\n\nSometimes you need to empty the cup before you can fill it. (Or that is what you tell yourself.)`,scene:'dorm',mood:'#ffeaa7',characters:['Marcus'],choices:[{text:'Hit the library with renewed energy.',next:'ec_library',effects:{stats:{lck:1}}},{text:'Text Priya or the tutor. Time to get serious.',next:'ec_find_help',effects:{stats:{cha:1}}}]};
EC_NODES['ec_midnight_cram'] = {text:`You leave the party at 11 PM. Marcus calls you boring. You do not care.\n\nBack in the dorm, textbook open, energy drink cracked, you start grinding. The silence is productive. No one is awake to bother you.\n\nChapter 5, 6, 7... the reactions start blurring together.`,scene:'dorm',mood:'#ffeaa7',characters:[],effects:{stats:{cou:1}},choices:[{text:'Keep grinding through the night.',next:'ec_dorm_grind',effects:{}}]};
EC_NODES['ec_tutor_session'] = {text:`Sana is the real deal. She does not waste a second.\n\n"Forget memorization. Every reaction in organic chemistry follows electron flow. Nucleophile attacks electrophile. That is it. Everything else is just details."\n\nIn 3 hours, she rewires your brain. Reactions are not random — they are patterns. She draws mechanisms on the whiteboard and makes you predict the product before she draws the arrow.\n\nBy the end, you are getting 7 out of 10 right.\n\n"Not bad for someone who did not know what a functional group was three hours ago," Sana says.`,scene:'study',mood:'#ffeaa7',characters:['Sana'],choices:[{text:'Book another session. Worth every penny.',next:'ec_day2_strong',effects:{relationships:{sana:2},stats:{int:1}}},{text:'Take what you learned and study alone. Save the money.',next:'ec_day2_strong',effects:{stats:{int:1}}}]};
EC_NODES['ec_tutor_win'] = {text:`Despite showing up with nothing, your raw enthusiasm wins Sana over. "I respect the honesty," she says. "Most students pretend they studied. You are just... here."\n\nShe adjusts her teaching style — visual, practical, lots of analogies.\n\n"SN2 is like a backside attack in basketball. The nucleophile comes from behind."\n\nIt clicks. It actually clicks.`,scene:'study',mood:'#ffeaa7',characters:['Sana'],effects:{relationships:{sana:2}},choices:[{text:'Continue studying with this momentum.',next:'ec_day2_strong',effects:{}}]};
EC_NODES['ec_tutor_struggle'] = {text:`Sana is patient but frustrated. "I need something to work with. Have you read ANYTHING?"\n\nYou shake your head.\n\nShe sighs. "Okay. Emergency protocol."\n\nShe gives you a 5-page cheat sheet of the absolute minimum you need to know. "Memorize this. Come back when you can recite it."`,scene:'study',mood:'#ffeaa7',characters:['Sana'],effects:{relationships:{sana:1}},choices:[{text:'Memorize the cheat sheet and come back stronger.',next:'ec_day2_shaky',effects:{}}]};
EC_NODES['ec_tutor_group'] = {text:`Sana gives a group rate: $120 for both of you, 3 hours. Alex is skeptical until Sana explains reaction mechanisms using basketball analogies (Alex is on the team).\n\n"SN2 is like a fast break — one motion, complete inversion."\n\nAlex: "WAIT. That actually makes sense."\n\nYou have never seen Alex this engaged with chemistry. Ever.`,scene:'study',mood:'#ffeaa7',characters:['Sana','Alex'],effects:{relationships:{sana:1,alex:2}},choices:[{text:'Dive deep into the session.',next:'ec_tutor_session',effects:{}}]};
EC_NODES['ec_library_breakthrough'] = {text:`The formaldehyde smell fades into background noise. You enter The Zone — that rare state where information flows in and sticks.\n\nChapter after chapter, concept after concept. At 4 AM, you look up and realize you have covered 8 chapters in 5 hours. Your hand is cramped from writing notes but your brain is firing on all cylinders.`,scene:'library',mood:'#ffeaa7',characters:[],effects:{stats:{int:1}},choices:[{text:'Ride this momentum into day 2.',next:'ec_day2_strong',effects:{}}]};
EC_NODES['ec_library_burnout'] = {text:`By 2 AM, the words are swimming. You have read the same mechanism 4 times and it is less clear each time. Your eyes burn. Your back aches. The formaldehyde smell is giving you a headache.\n\nYou fall asleep on your textbook and wake up at 6 AM with "Chapter 9: Alcohols" imprinted on your cheek.\n\nA librarian is staring at you with a mixture of pity and recognition. "Organic Chemistry?" she asks. You nod. "Good luck, sweetie."`,scene:'library',mood:'#ffeaa7',characters:[],effects:{stats:{per:1}},choices:[{text:'Regroup and try a different approach.',next:'ec_day2_shaky',effects:{}}]};
EC_NODES['ec_library_group'] = {text:`You find 4 other students in the organic chemistry spiral. Together, you divide and conquer — each person takes 4 chapters, makes a summary, and teaches the others.\n\nIt is chaotic but effective. One guy explains stereochemistry using his shoes. A girl draws every mechanism as a battle between electron armies.\n\nYou learn more from their explanations than the textbook.`,scene:'library',mood:'#ffeaa7',characters:[],effects:{stats:{cha:1}},choices:[{text:'Carry this group energy into day 2.',next:'ec_day2_strong',effects:{}}]};
EC_NODES['ec_flashcards'] = {text:`Anki flashcards become your religion. You download a shared deck of 500 organic chemistry cards and start grinding.\n\nThe spaced repetition algorithm is merciless — if you get one wrong, it comes back in 5 minutes. By midnight, you have reviewed 200 cards and can name every functional group on sight.\n\nYour thumbs hurt. Progress. But something nags — you can recognize the answers, but can you actually solve problems?`,scene:'library',mood:'#ffeaa7',characters:[],effects:{stats:{per:1}},choices:[{text:'Keep flashcarding into the night.',next:'ec_day2_shaky',effects:{}}]};
EC_NODES['ec_allnighter_success'] = {text:`You power through. 3 AM, 4 AM, 5 AM — the clock is just a number. Red Bull is a food group now.\n\nBy dawn, you have brute-forced through 12 chapters. Your understanding is surface-level but broad. You know the names, the shapes, the basic reactions.\n\nAlex finds you at 7 AM, still upright, vibrating slightly.\n\n"Are you... okay?"\n\n"I can name every functional group. I might also be hallucinating. Hard to tell."`,scene:'dorm',mood:'#ffeaa7',characters:['Alex'],effects:{stats:{cou:1}},choices:[{text:'Ride the caffeine wave into day 2.',next:'ec_day2_strong',effects:{}},{text:'You are vibrating. Your vision is doing things. Maybe this was a mistake.',next:'ec_sleep_spiral',effects:{stats:{per:1}}}]};
EC_NODES['ec_allnighter_crash'] = {text:`You crash at 4 AM. Hard. Wake up at 2 PM the next day, having lost 10 hours and retained maybe 30% of what you studied.\n\nYour body is punishing you. Alex leaves a glass of water and a note: "We will figure it out."\n\nYou stare at the ceiling. 48 hours left. Maybe less.`,scene:'dorm',mood:'#ffeaa7',characters:['Alex'],effects:{relationships:{alex:1}},choices:[{text:'Get up. There is still time.',next:'ec_day2_shaky',effects:{}}]};
EC_NODES['ec_power_nap'] = {text:`You set an alarm for 2 hours. You actually sleep 4. But when you wake up, your brain has somehow organized the mess — concepts that were tangled at 3 AM make sense at 7 AM.\n\nSleep is, in fact, not for the weak. Sleep is for people who want to actually remember things.`,scene:'dorm',mood:'#ffeaa7',characters:[],effects:{stats:{per:1}},choices:[{text:'Back to studying, refreshed.',next:'ec_day2_shaky',effects:{}}]};
EC_NODES['ec_youtube'] = {text:`Professor Dave Explains. Organic Chemistry Tutor. Khan Academy. You binge lectures at 1.5x speed.\n\nVisual learners, rejoice — seeing the mechanisms animated is 10x better than static textbook diagrams. You watch 14 videos and actually understand electrophilic addition.\n\n"Why did I buy a textbook when YouTube exists?" you mutter. Then you remember: because YouTube does not give you a degree. Yet.`,scene:'dorm',mood:'#ffeaa7',characters:[],effects:{stats:{int:1}},choices:[{text:'Continue learning online into day 2.',next:'ec_day2_shaky',effects:{}}]};
EC_NODES['ec_coffee_break'] = {text:`The campus coffee shop at midnight. You order the largest thing they sell. The barista — who is also clearly cramming for something — gives you a solidarity nod.\n\nYou check your phone: 12 missed messages from Marcus about the party, 1 from Priya ("Still studying. Are you?"), and a notification from the university: "Reminder: CHEM 201 Final Examination — 48 hours."\n\nYou take a breath. You take a sip. You go back to work.`,scene:'campus',mood:'#ffeaa7',characters:[],effects:{stats:{per:1}},choices:[{text:'Back to the grind.',next:'ec_day2_shaky',effects:{}}]};
EC_NODES['ec_share_insight'] = {text:`You post in the group chat: "Heads up — Dr. Chen recycles question types. 40% mechanisms, 30% nomenclature, 20% synthesis, 10% spectroscopy. Focus your studying accordingly."\n\nThe chat explodes. 15 thank-you messages. Priya DMs you: "Smart. I knew that but I appreciate you sharing it." Marcus: "legend."\n\nEven a TA likes the message. You feel like a hero. A very tired hero.`,scene:'dorm',mood:'#ffeaa7',characters:['Priya','Marcus'],effects:{stats:{cha:1},relationships:{priya:1,marcus:1}},choices:[{text:'Ride the good vibes into day 2.',next:'ec_day2_strong',effects:{}}]};
EC_NODES['ec_deep_learning'] = {text:`Instead of memorizing, you ask "why" for every mechanism. "Why does the nucleophile attack from the back in SN2?" "Because of steric hindrance and orbital overlap."\n\nUnderstanding the WHY makes the WHAT stick. Priya is impressed.\n\n"Most people just memorize. You are actually learning." She starts drawing parallels between different reaction types that blow your mind.\n\n"OH. So E1 and SN1 are basically the SAME first step?!"\n\n"Now you are getting it."`,scene:'library',mood:'#ffeaa7',characters:['Priya'],effects:{stats:{int:1},relationships:{priya:2}},choices:[{text:'Keep this deep learning approach going.',next:'ec_day2_strong',effects:{}}]};
EC_NODES['ec_tutor_supplement'] = {text:`You book a quick session with Sana to fill in the gaps. She zeroes in on your weak spots like a heat-seeking missile.\n\n"Your nomenclature is solid but your synthesis is nonexistent. Let us fix that."\n\nTwo hours later, you can map out a 3-step synthesis pathway. Not perfectly, but the logic is there.`,scene:'study',mood:'#ffeaa7',characters:['Sana'],effects:{relationships:{sana:1},stats:{int:1}},choices:[{text:'Back to studying with renewed clarity.',next:'ec_day2_strong',effects:{}}]};
EC_NODES['ec_day2_strong'] = {text:`48 hours left. You have covered the core material. Reactions make sense. Nomenclature is click-and-drag. You can draw mechanisms with arrows.\n\nYou are not an expert, but you are not lost anymore. The panic has been replaced by something cautious: confidence.\n\nYour phone buzzes. Group chat: "Who else is studying at the library?" About 30 people respond. The entire class is in crisis mode. But you? You are in control mode.`,scene:'campus',mood:'#ffeaa7',characters:[],choices:[{text:'Do practice problems until your hand falls off.',next:'ec_exam_ready',check:{stat:'int',dc:11},failNext:'ec_exam_nervous',effects:{stats:{int:1}}},{text:'Find Dr. Chen\'s office hours. Ask about the exam directly.',next:'ec_chen_hint',check:{stat:'cha',dc:12},failNext:'ec_chen_nohint',effects:{stats:{cha:1}}},{text:'Someone slides a note under your door: "I have the answer key. $200."',next:'ec_cheat_offer',effects:{stats:{per:1}}},{text:'Visit Dr. Chen during office hours. Ask the professor directly.',next:'ec_chen_office',effects:{stats:{int:1}}}]};
EC_NODES['ec_day2_shaky'] = {text:`48 hours left. You know... some things. Functional groups, mostly. Basic nomenclature. But mechanisms are still foggy, synthesis is a mystery, and spectroscopy is actual hieroglyphics.\n\nThe panic is back but quieter — controlled panic. Productive panic. You have been through worse. (You have not been through worse. But telling yourself that helps.)`,scene:'campus',mood:'#ffeaa7',characters:[],choices:[{text:'Double down. Study harder.',next:'ec_exam_nervous',check:{stat:'cou',dc:11},failNext:'ec_exam_unprepared',effects:{}},{text:'Get help NOW. No more pride.',next:'ec_emergency_help',effects:{stats:{cha:1}}},{text:'The cheat note is under your door.',next:'ec_cheat_offer',effects:{stats:{per:1}}},{text:'Something is wrong. You cannot focus. Your body is shutting down.',next:'ec_burnout',effects:{stats:{per:1}}},{text:'Wait — where is your textbook? It was right here...',next:'ec_textbook_gone',effects:{stats:{per:1}}}]};
EC_NODES['ec_exam_ready'] = {text:`24 hours left. You have done over 200 practice problems. Your accuracy is 75% on mechanisms, 80% on nomenclature, 65% on synthesis. Not perfect. But solid.\n\nYou review your weak spots one more time, eat a real meal for the first time in 2 days, and set an alarm for the morning.\n\n"You are going to be fine," Alex says.\n\n"Probably," you reply.\n\nYou almost believe it.`,scene:'dorm',mood:'#ffeaa7',characters:['Alex'],effects:{},choices:[{text:'Get some sleep. Tomorrow is the day.',next:'ec_exam_morning',effects:{}}]};
EC_NODES['ec_exam_nervous'] = {text:`24 hours left. You know enough to be dangerous — which is also enough to second-guess everything. Every concept you learned has three exceptions you might have missed.\n\nYou could study more or you could sleep. Your body votes sleep. Your anxiety votes study.\n\nThey are both making compelling arguments.`,scene:'dorm',mood:'#ffeaa7',characters:[],choices:[{text:'Sleep. Trust what you have learned.',next:'ec_exam_morning',effects:{stats:{per:1}}},{text:'One more review session. Cover the weak spots.',next:'ec_exam_morning',effects:{stats:{int:1}}}]};
EC_NODES['ec_exam_unprepared'] = {text:`24 hours left. You know maybe 40% of the material. Not enough to pass comfortably. Enough to recognize the questions, maybe.\n\nYou are running on caffeine and prayers. Alex looks at you with the expression of someone watching a nature documentary about an animal that probably will not make it.\n\n"You have got this," Alex lies.`,scene:'dorm',mood:'#ffeaa7',characters:['Alex'],effects:{stats:{lck:1}},choices:[{text:'Cram until your eyes cross, then sleep.',next:'ec_exam_morning',effects:{}}]};
EC_NODES['ec_chen_hint'] = {text:`Dr. Chen's office. He is eating a sandwich. You ask about the exam — what topics to prioritize, what format to expect. He studies you over his glasses.\n\nThen he pauses. "I will not tell you what is on the exam. But I will tell you this: if you understand mechanisms — truly understand why electrons move where they move — you can derive any answer from first principles. Do not memorize products. Understand electron flow."\n\nHe goes back to his sandwich. That is the biggest hint anyone has ever given you.`,scene:'office',mood:'#ffeaa7',characters:['Dr. Chen'],effects:{stats:{int:1}},choices:[{text:'Take Dr. Chen\'s advice to heart.',next:'ec_exam_ready',effects:{}}]};
EC_NODES['ec_chen_nohint'] = {text:`Dr. Chen's office. He is eating a sandwich. You ask about the exam.\n\n"Study everything," Dr. Chen says flatly. "The exam covers the entire course."\n\nHe goes back to his sandwich. Well. That was useless. Or maybe it was not — at least you know there is no shortcut.\n\nThe sandwich looks really good though. You have not eaten in 18 hours.`,scene:'office',mood:'#ffeaa7',characters:['Dr. Chen'],choices:[{text:'Back to studying. No shortcuts.',next:'ec_exam_nervous',effects:{}}]};
EC_NODES['ec_cheat_offer'] = {text:`Anonymous note. Printed, not handwritten. "Complete answer key for CHEM 201 Final. $200. Venmo @ChemGhost. 24-hour access, then the file self-deletes."\n\nYour stomach twists. You stare at the note for a long time.\n\nTwo hundred dollars. Certainty. Or... whatever you have been building these last 48 hours.`,scene:'dorm',mood:'#fdcb6e',characters:[],choices:[{text:'No. Absolutely not. Throw the note away.',next:'ec_final_push',effects:{stats:{int:1}}},{text:'Report it to Dr. Chen. This is academic fraud.',next:'ec_report_cheat',effects:{relationships:{chen:3},stats:{int:1}}},{text:'...How do you know it is real?',next:'ec_consider_cheat',effects:{stats:{lck:1}}}]};
EC_NODES['ec_report_cheat'] = {text:`You bring the note to Dr. Chen. He reads it slowly. Takes off his glasses.\n\n"Thank you. This has been happening for three semesters. You just helped me catch them."\n\nHe looks at you. "I will not forget this."\n\nHe does not promise anything about the exam. But there is a warmth in his voice that was not there before. And something that might be respect.`,scene:'office',mood:'#ffeaa7',characters:['Dr. Chen'],effects:{relationships:{chen:3}},choices:[{text:'Back to studying. You did the right thing.',next:'ec_exam_nervous',effects:{}}]};
EC_NODES['ec_consider_cheat'] = {text:`You stare at the note. $200. You could pass with certainty. Or it could be a scam. Or it could be a trap set by the university. Or the answers could be wrong on purpose.\n\nYour hands are shaking. Not from caffeine this time.`,scene:'dorm',mood:'#fdcb6e',characters:[],choices:[{text:'Walk away. The risk is not worth it.',next:'ec_final_push',effects:{stats:{per:1}}},{text:'Buy it. Desperate times.',next:'ec_cheat_bought',effects:{stats:{lck:1}}}]};
EC_NODES['ec_cheat_bought'] = {text:`You Venmo the money. The file arrives. It looks real — same format as previous exams.\n\nBut something nags at you. The answers are TOO clean. And one of the "answers" uses a reaction you are pretty sure Dr. Chen has not taught.\n\nYour gut is screaming. Your desperation is whispering.`,scene:'dorm',mood:'#d63031',characters:[],choices:[{text:'Use the answers anyway.',next:'ec_end_cheat_caught',effects:{}},{text:'Throw them out and study for real. The scare was enough motivation.',next:'ec_final_push',effects:{stats:{cou:1}}}]};
EC_NODES['ec_final_push'] = {text:`The final 24 hours. You lock yourself in. Flashcards, practice problems, YouTube tutorials at 2x speed.\n\nYou call Priya for a last-minute review. She walks you through synthesis pathways — the stuff Dr. Chen loves.\n\nBy midnight, you are exhausted but you know more organic chemistry than you ever thought possible. Not mastery. Survival knowledge.\n\nYou set your alarm. You close your eyes. Tomorrow, one way or another, this ends.`,scene:'dorm',mood:'#ffeaa7',characters:['Priya'],choices:[{text:'Get whatever sleep you can.',next:'ec_exam_morning',effects:{}}]};
EC_NODES['ec_emergency_help'] = {text:`You swallow your pride and send a mass text: "I am behind. I need help. Someone please explain synthesis pathways and spectroscopy to me."\n\nAlex shows up first. Then, surprisingly, Marcus — "I am bad at chemistry but I am good at moral support."\n\nAnd finally Priya, who sighs deeply and says, "Sit down. We have 36 hours."\n\nYou have never been more grateful for other humans in your life.`,scene:'dorm',mood:'#ffeaa7',characters:['Alex','Marcus','Priya'],effects:{relationships:{alex:1,marcus:1,priya:1}},choices:[{text:'Let Priya take the lead.',next:'ec_priya_boot_camp',effects:{}}]};
EC_NODES['ec_exam_morning'] = {text:`The alarm goes off. Exam day.\n\nYour brain feels like a compressed file — everything you crammed is in there, densely packed, ready to decompress. Or crash.\n\nYou eat breakfast (first time in 3 days). Brush your teeth. Put on your "lucky" hoodie. Walk to the exam hall.\n\n500 students filing in. You see Alex, Priya, Marcus, and dozens of faces from the group chat. Everyone looks exactly as terrified as you feel.\n\nDr. Chen stands at the front. "You have 3 hours. Begin."`,scene:'exam',mood:'#fdcb6e',characters:['Alex','Priya','Marcus','Dr. Chen'],choices:[{text:'Flip the exam over. Let us see what we are dealing with.',next:'ec_the_exam',effects:{stats:{int:1}}},{text:'Take 2 minutes to breathe and review your mental notes before starting.',next:'ec_the_exam',effects:{stats:{per:1}}},{text:'Wait — something is wrong. Your alarm almost did not go off...',next:'ec_exam_day_crisis',effects:{stats:{per:1}}}]};
EC_NODES['ec_the_exam'] = {text:`Question 1: Draw the mechanism for an SN2 reaction of bromomethane with sodium hydroxide. You know this. Your hand is moving before your brain catches up.\n\nQuestion 5: Name this compound (it is a branched alkene with two substituents). You know this too.\n\nQuestion 12: Multi-step synthesis. This is the hard one. But you remember Priya's explanation... or Sana's analogy... or Alex's practice exam pattern.\n\nThe 3 hours vanish like 30 minutes.\n\nYou put your pen down. You look at the clock. You look at your answers. You have no idea how you did.`,scene:'exam',mood:'#fdcb6e',characters:['Dr. Chen'],choices:[{text:'You walk out feeling... cautiously optimistic.',next:'ec_end_ace',check:{stat:'int',dc:14},failNext:'ec_end_pass',effects:{}},{text:'You walk out unsure. Could go either way.',next:'ec_end_pass',check:{stat:'int',dc:11},failNext:'ec_end_scrape',effects:{}},{text:'You walk out knowing you guessed on at least 30% of it.',next:'ec_end_scrape',effects:{}},{text:'You walk out and the whole group is waiting on the quad.',next:'ec_post_exam_wait',effects:{stats:{cha:1}}}]};
EC_NODES['ec_end_ace'] = {text:`ENDING: THE COMEBACK KID\n\nGrade posted: B+.\n\nNot an A. But for someone who started with a shrink-wrapped textbook 72 hours ago? That is a miracle.\n\nAlex screams. Marcus picks you up. Priya sends a text: "Told you mechanisms matter."\n\nYou stare at the grade and feel something you have not felt all semester: earned confidence. You did not just survive. You actually learned something. Maybe not the whole course — but enough to know that you CAN learn anything if the pressure is right.\n\n"So," Alex says, "finals week is in 4 months. Want to start studying early?"\n\n"...Let me think about it."\n\n---\n\nEXAM CRUNCH: THE COMEBACK KID\n\nFrom shrink-wrapped textbook to B+ in 72 hours. They will tell this story for semesters.`,scene:'end',mood:'#ffeaa7',ending:'The Comeback Kid',characters:['Alex','Priya','Marcus'],choices:[{text:'Continue — Dr. Chen has noticed your potential.',next:'ec_chen_mentorship',effects:{stats:{int:1}}}]};
EC_NODES['ec_end_pass'] = {text:`ENDING: SURVIVAL MODE\n\nGrade posted: C.\n\nYou passed. Not pretty, not proud, but passed. The relief hits you like a truck. You collapse on your bed and sleep for 14 hours straight.\n\nWhen you wake up, there is a text from Marcus: "We survived!!! Boba?" and one from Priya: "A C is not something to celebrate."\n\nBut it is. For you, right now, it absolutely is.\n\n---\n\nEXAM CRUNCH: SURVIVAL MODE\n\nA C never looked so beautiful. You will take it. You will take it and run.`,scene:'end',mood:'#ffeaa7',ending:'Survival Mode',characters:['Marcus','Priya'],choices:[]};
EC_NODES['ec_end_scrape'] = {text:`ENDING: BY THE SKIN OF YOUR TEETH\n\nGrade posted: D.\n\nThe lowest passing grade. You stare at it for 5 minutes. D. As in "Did it." As in "Done." As in "Do not ever do this again."\n\nAlex pats your shoulder. "A pass is a pass."\n\nYou know two things: you never want to feel this way again, and you will absolutely feel this way again.\n\n---\n\nEXAM CRUNCH: SKIN OF YOUR TEETH\n\nYou passed. Barely. The story you tell people will be significantly more heroic than what actually happened.`,scene:'end',mood:'#fdcb6e',ending:'Skin of Your Teeth',characters:['Alex'],choices:[]};
EC_NODES['ec_end_cheat_caught'] = {text:`ENDING: ACADEMIC PROBATION\n\nThe exam goes perfectly — too perfectly. Dr. Chen notices. He compares your answers to the leaked key (which, it turns out, he planted as a trap).\n\nYour exam is flagged. Academic integrity hearing. The verdict: zero on the exam and academic probation for one semester.\n\nMarcus: "Dude."\n\nAlex will not look at you.\n\nPriya blocks you again.\n\nThe lesson is learned the hardest way possible. But it is learned.\n\n---\n\nEXAM CRUNCH: ACADEMIC PROBATION\n\nThere are no shortcuts. There were never any shortcuts. Now you know.`,scene:'end',mood:'#d63031',ending:'Academic Probation',characters:['Dr. Chen','Alex','Marcus','Priya'],choices:[]};

// ---- ARC 2: EXAM DAY CRISIS ----

EC_NODES['ec_exam_day_crisis'] = {text:`Exam morning. 7:14 AM. Your alarm did not go off.

You bolt upright. The exam is at 9:00 AM. You have 106 minutes to shower, eat, review, and get across campus to the science building.

But that is not the crisis.

The crisis is that your phone is dead. Completely dead. The charger was not plugged in properly — the cable was bent, and it charged to 3% before dying at some point in the night. Your alarm lives on your phone. Your notes are on your phone. Your flashcard app, your practice problems, your group chat — all on your phone.

Alex is already gone. A note on the whiteboard: "Left at 7. See you there. YOU GOT THIS."

You plug in the phone. It takes four agonizing minutes to reach 5% and boot up. When it does, the notifications cascade: 47 group chat messages, 3 texts from Priya ("Where are you?"), and a university alert: "CHEM 201 Final — Room 302 Science Building — Doors close at 8:55 AM sharp."

Your printed notes — the ones you scrawled at 2 AM — are scattered across the floor. You grab them. They are barely legible. Your handwriting at 2 AM looks like a seismograph reading.

You have 98 minutes. You have not eaten in 14 hours. And the walk to the science building takes 20 minutes.

This is fine. This is totally fine.`,scene:'dorm',mood:'#d63031',characters:['Alex'],effects:{stats:{cou:1}},choices:[{text:'Skip everything. Grab notes. Run.',next:'ec_mad_dash',effects:{stats:{cou:1}}},{text:'Take 10 minutes: eat something, quick review, THEN run.',next:'ec_calm_morning',effects:{stats:{per:1}}},{text:'Call Priya. She is already there. Maybe she can stall.',next:'ec_priya_stall',effects:{stats:{cha:1},relationships:{priya:1}}}]};

EC_NODES['ec_mad_dash'] = {text:`You are running across campus in mismatched shoes. One sneaker, one slide. You did not notice until the third block.

The morning air hits you like a cold shower — which is good, because you did not take an actual shower. Your notes are clenched in one fist. Your half-dead phone is in the other, playing a voice recording of yourself explaining SN2 mechanisms at 1 AM. Past-you sounds unhinged but technically correct.

You pass three other students in full sprint. The universal body language of "I also did not set an alarm." There is a grim solidarity in it.

At 8:41 AM, you reach the science building. The doors are open. Students stream in, clutching coffees and calculators and the desperate hope that they studied the right chapters.

You find your seat. You are sweating. You are hungry. You are wearing mismatched shoes.

But you are here.

Alex sees you and exhales visibly. "I was about to text search and rescue."

"I am fine," you wheeze.

"You are wearing two different shoes."

"I am AWARE."

Dr. Chen walks to the front. "You have 3 hours. Begin."`,scene:'exam',mood:'#fdcb6e',characters:['Alex','Dr. Chen'],effects:{stats:{cou:1}},choices:[{text:'Channel the adrenaline. Let the panic fuel the focus.',next:'ec_the_exam',effects:{stats:{cou:1}}},{text:'Take 30 seconds to breathe. Center yourself. Then begin.',next:'ec_the_exam',effects:{stats:{per:1}}}]};

EC_NODES['ec_calm_morning'] = {text:`You force yourself to stop. Ten minutes. That is all.

You eat a granola bar. You drink water. You look at your notes — not all of them, just the summary page. The one Priya helped you write. The key reactions. The key mechanisms. The electron flow logic Dr. Chen emphasized.

It takes five minutes. You spend the remaining five minutes walking — not running — to the science building. Fast walk. Very fast walk. But not a sprint.

You arrive at 8:48 AM with twelve minutes to spare. Your heart rate is elevated but manageable. You are hungry but not starving. Your brain is... functioning. Barely. But functioning.

Alex saved you a seat near the window. Natural light. Smart.

"You look surprisingly calm," Alex says suspiciously.

"I ate a granola bar. It changed everything."

"A granola bar."

"Do not underestimate carbohydrates."

Dr. Chen distributes the exams face-down. The room goes silent — the particular silence of 500 students collectively holding their breath.

"Three hours," Dr. Chen says. "Begin."`,scene:'exam',mood:'#ffeaa7',characters:['Alex','Dr. Chen'],effects:{stats:{per:1}},choices:[{text:'Flip it over. Steady hands. You are ready for this.',next:'ec_the_exam',effects:{stats:{per:1}}}]};

EC_NODES['ec_priya_stall'] = {text:`Priya picks up on the first ring. "Where ARE you?"

"Alarm did not go off. I am leaving now. Can you—"

"Can I what? Delay a university exam? I am a student, not the dean."

"I know, I know, but—"

"But nothing. Get here. I saved you a seat. Third row, left side, near the window. I put a pencil on the desk because I KNEW you would forget one."

She hangs up.

You stare at the phone. She saved you a seat. She left you a pencil. Priya, who blocked you on the first day, who made you earn every scrap of help, who shushed Alex for whispering — she saved you a seat and left you a pencil.

You grab your notes and run. Not for the grade. For the seat. For the pencil. For the person who showed up for you even when you could not show up for yourself.

You arrive at 8:51 AM. The pencil is freshly sharpened.

"Thank you," you whisper as you sit down.

"Pass the exam," Priya replies. "That is how you thank me."

Dr. Chen begins the exam.`,scene:'exam',mood:'#ffeaa7',characters:['Priya','Dr. Chen'],effects:{stats:{cha:1},relationships:{priya:2}},choices:[{text:'Pick up Priya\'s pencil and begin.',next:'ec_the_exam',effects:{stats:{int:1},relationships:{priya:1}}}]};

// ---- ARC 3: BURNOUT AND MENTAL HEALTH ----

EC_NODES['ec_burnout'] = {text:`Day 2. Hour 36 of studying. And something breaks.

Not a concept. Not a pencil. Something inside you. The thing that has been holding the anxiety at bay, the mechanism that converts panic into productivity — it snaps like an overstretched rubber band.

You cannot read. The words are there but they do not connect. You stare at a benzene ring and forget what carbon is. You know what carbon is. You KNOW you know. But the knowledge is behind a wall of static, and the wall is getting thicker.

Your hands are shaking. Your breathing is fast and shallow. Your vision tunnels. Is this a panic attack? A breakdown? Both?

Alex finds you in the bathroom, sitting on the floor, textbook open to a page you have not turned in twenty minutes.

"Hey. Hey. Look at me." Alex kneels down. "How long have you slept in the last two days?"

"...Four hours? Maybe three?"

"When did you last eat a meal? A real meal, not a granola bar?"

"I do not remember."

Alex takes the textbook away. Physically removes it from your hands. "Okay. New plan. The plan is: you are a human being, not a studying machine, and you are going to eat food and sleep for six hours and THEN we figure out chemistry."

"The exam is in—"

"The exam is in 30 hours. You have 30 hours. But zero of those hours matter if your brain is offline." Alex's voice is gentle but immovable. "Trust me. Please."

The bathroom floor is cold. The fluorescent light hums. Somewhere in the building, someone is also crying. You can hear them through the wall.

You are not alone in this. That helps more than any flashcard.`,scene:'dorm',mood:'#d63031',characters:['Alex'],effects:{stats:{per:1},relationships:{alex:3}},choices:[{text:'Let Alex take care of you. Eat. Sleep. Reset.',next:'ec_burnout_recovery',effects:{stats:{per:1},relationships:{alex:2}}},{text:'Compromise — eat something, take a 2-hour nap, then back to studying.',next:'ec_burnout_compromise',effects:{stats:{cou:1}}},{text:'Call the university counseling hotline. You need to talk to someone professional.',next:'ec_counseling',effects:{stats:{per:1,cha:1}}},{text:'You cannot sleep. Your body forgot how. The spiral is getting worse.',next:'ec_sleep_spiral',effects:{}}]};

EC_NODES['ec_burnout_recovery'] = {text:`Alex feeds you pasta. Real pasta — not ramen, not a granola bar. Actual food with actual nutritional value. You do not remember where Alex got it at 2 AM, and you do not ask.

Then: sleep. Alex sets an alarm for 7 AM — six hours. They turn off the lights, close the curtains, and sit at their own desk reading, staying in the room. Not studying. Just... being there.

You sleep like you have been drugged. Deep, dreamless, restorative sleep. The kind your body has been begging for since this whole nightmare began.

When you wake up, the world has edges again. Colors look right. Words make sense. Your hands are steady.

The panic is still there — it is EXAM DAY TOMORROW, of course the panic is there — but it is manageable now. Productive-level panic. The kind that sharpens rather than paralyzes.

You have 24 hours left. You have slept. You have eaten. And your brain, for the first time in three days, is actually functioning at capacity.

"Thank you," you tell Alex. And you mean it on a level that goes well beyond organic chemistry.

"Study group is meeting in an hour," Alex replies. "Priya is bringing her whiteboard. Marcus is bringing coffee. And I am bringing the practice exam."

"Marcus is in the study group now?"

"Marcus failed this class last semester. He knows which questions Chen recycles."

Your eyebrows shoot up. "Marcus is a secret weapon?"

"Marcus is FULL of surprises."`,scene:'dorm',mood:'#ffeaa7',characters:['Alex'],effects:{stats:{per:1},relationships:{alex:2}},choices:[{text:'Join the study group. Rested brain, fresh start.',next:'ec_study_group_final',effects:{stats:{cha:1}}},{text:'Solo review first, then join. Maximize both approaches.',next:'ec_study_group_final',effects:{stats:{int:1}}}]};

EC_NODES['ec_burnout_compromise'] = {text:`Two hours. That is all you will allow yourself.

You eat a sandwich — actual protein, actual carbs — and set a timer. The nap is fitful. Your brain keeps trying to review material behind your closed eyelids, projecting reaction mechanisms on the inside of your skull like a malfunctioning projector.

But when the timer goes off, you feel... marginally human. Not great. Not rested. But the static wall between you and your knowledge has thinned. You can access things again.

The compromise costs you. You are operating at maybe 60% capacity instead of the 80% that full rest would have given you. But you have those two extra hours of study time, and in crunch mode, two hours is a lot.

You spend them on mechanisms. Just mechanisms. Dr. Chen's favorite topic. Arrow-pushing. Electron flow. Nucleophile attacks electrophile.

By the time you finish, you can draw an SN2 mechanism in your sleep. Which is good, because you are essentially doing this in your sleep.

The exam is tomorrow. You are tired, scared, and running on fumes and a sandwich.

But you are still in the fight.`,scene:'dorm',mood:'#ffeaa7',characters:[],effects:{stats:{cou:1}},choices:[{text:'Final review session and then bed.',next:'ec_exam_morning',effects:{stats:{int:1}}},{text:'Join whatever study group is still running at this hour.',next:'ec_study_group_final',effects:{stats:{cha:1}}}]};

EC_NODES['ec_counseling'] = {text:`The university counseling hotline answers on the third ring. The voice on the other end is calm, warm, and not at all surprised to hear from a student at 2 AM during finals week.

"You are not the first call tonight," the counselor says. "And you will not be the last. Tell me what is going on."

You talk. About the exam. About the 72 hours. About the panic attack on the bathroom floor. About the feeling that you are drowning in a subject you should have studied all semester but did not, and now the wave is about to hit and you do not know if you can swim.

The counselor listens. Does not interrupt. Does not judge.

"Here is what I hear," she says after you finish. "You are dealing with acute academic stress compounded by sleep deprivation and inadequate nutrition. Those are fixable things. The anxiety you are feeling is your body telling you that it needs care."

She gives you a plan. Not a study plan — a self-care plan. Eat a real meal. Sleep at least five hours. Take a walk outside before the exam. Breathe.

"The exam matters," she says. "But you matter more. A failed exam is a setback. A burned-out student is a tragedy. Do not become a tragedy."

You hang up. You cry a little. Then you eat a meal, set an alarm, and sleep.

The counselor was right about one thing: you are not the only one calling tonight. The line is busy all night. An entire campus of students, realizing simultaneously that they are human beings with limits.

Some lessons are not in the textbook.`,scene:'dorm',mood:'#ffeaa7',characters:[],effects:{stats:{per:2,cha:1}},choices:[{text:'Follow the counselor\'s advice. Take care of yourself first.',next:'ec_burnout_recovery',effects:{stats:{per:1}}},{text:'Share the hotline number with the group chat. Others need this too.',next:'ec_burnout_recovery',effects:{stats:{cha:1}}}]};

// ---- ARC 4: STUDY GROUP DYNAMICS & COMPETITIVE RIVALRIES ----

EC_NODES['ec_study_group_final'] = {text:`The study group assembles at 8 AM in the library's large study room. It is more people than you expected.

Alex brought the practice exam. Priya brought her whiteboard and three colors of marker. Marcus — MARCUS — brought a typed document titled "Dr. Chen's Recycled Questions: A Three-Semester Analysis."

"You FAILED this class," Priya says, staring at the document.

"Yeah, and I memorized every question that destroyed me. Pain is an excellent teacher." Marcus taps the document. "He uses the same SN2 question every year. Just changes the substrate. The mechanism is identical."

The room goes quiet. Then Priya — perfectionist, color-coded-notes Priya — smiles.

"Marcus, this is the most useful thing you have ever produced."

"I am also emotionally intelligent and an excellent dancer."

"Do not push it."

The study group clicks. Priya teaches the theory. Marcus identifies the patterns. Alex runs the practice problems. You synthesize — pulling threads together, asking the questions that connect one concept to another.

But there is tension. Another study group has formed across the hall — led by Derek, a pre-med student with a 4.0 and a competitive streak that borders on pathological. Derek's group has a whiteboard too. And a tutor. And energy drinks arranged in a pyramid.

Derek catches your eye through the glass partition. He smirks.

"Ignore him," Priya says. "He is performative. Half his group is just watching him study and hoping intelligence is contagious."

But Derek texts Marcus: "Your group is going to bomb. My group has Sana as a tutor. Good luck with your... whiteboard."

Marcus shows you the text. "Should we be worried?"

You look at your group. Priya's depth. Marcus's pattern recognition. Alex's strategy. Your ability to connect dots.

"No," you say. "We should not be worried."`,scene:'library',mood:'#ffeaa7',characters:['Alex','Priya','Marcus'],effects:{stats:{cha:1},relationships:{alex:1,priya:1,marcus:1}},choices:[{text:'Focus on your group. Derek is noise.',next:'ec_group_breakthrough',effects:{stats:{int:1}}},{text:'Invite Derek\'s group to merge. More brains, more coverage.',next:'ec_group_merge',effects:{stats:{cha:2}}},{text:'Challenge accepted. Outstudy Derek. Make it a competition.',next:'ec_group_rivalry',effects:{stats:{cou:1}}},{text:'The tension is building. Priya and Marcus are about to clash.',next:'ec_group_meltdown',effects:{stats:{per:1}}}]};

EC_NODES['ec_group_breakthrough'] = {text:`The breakthrough happens at hour three.

Priya is explaining retrosynthetic analysis — working backwards from a target molecule to identify the starting materials and reagents. It is the hardest topic on the exam. Most students memorize specific pathways. Priya teaches the logic.

"Think of it like a maze," she says, drawing on the whiteboard. "But instead of starting at the entrance, you start at the exit and work backwards. What bond do you need to BREAK to get here? What reaction MAKES that bond? What starting material HAS the right functional group?"

Something clicks. Not just for you — for everyone in the room simultaneously. You can see it on their faces. The collective "oh" of understanding.

Marcus: "Wait. So EVERY synthesis problem is just the same logic applied differently?"

Priya: "Yes. That is literally what I have been saying for three days."

Alex starts working practice problems at twice the speed. You realize you can predict the products before drawing the mechanism. The room is buzzing — that electric feeling when a group of people cross a threshold together.

By the end of the session, your group has worked through every synthesis problem from the last three years of Dr. Chen's exams. Your accuracy rate: 78%. Not perfect. But solid.

Marcus high-fives everyone. Priya allows it, which is basically her version of a standing ovation.

You look across the hall. Derek's group is arguing about nomenclature. Their whiteboard is a mess.

You do not say anything. You do not need to.`,scene:'library',mood:'#ffeaa7',characters:['Priya','Marcus','Alex'],effects:{stats:{int:2},relationships:{priya:2,marcus:1}},choices:[{text:'One final review tonight, then rest for the exam.',next:'ec_exam_morning',effects:{stats:{int:1}}},{text:'The breakthrough gave you confidence. You are ready. Go home and sleep.',next:'ec_exam_morning',effects:{stats:{per:1}}}]};

EC_NODES['ec_group_merge'] = {text:`You walk across the hall. Derek looks up from his whiteboard with the expression of a territorial cat.

"We should combine groups," you say. "More people, more perspectives, more practice problems."

Derek's eyebrow goes up. "My group has Sana. What does your group have?"

"Marcus has three semesters of Dr. Chen's recycled questions mapped. Priya has the best notes in the class. Alex has a strategic study plan. And I am the person walking across the hall to suggest this instead of competing over a test that is going to wreck all of us individually."

Derek considers. Sana — sitting behind him — speaks first.

"Merge. I have been tutoring Derek's group for two hours and half of them are not listening anyway. Fresh blood would help."

The merged group is chaotic. Twelve students, two whiteboards, one tutor, and enough caffeine to fuel a small rocket. But the diversity works. Derek's group has strong spectroscopy knowledge. Your group has mechanisms and synthesis. Sana bridges the gaps.

By the end, you have covered the entire exam syllabus as a team. Not perfectly — twelve students cannot master an entire course in one day — but thoroughly enough that every person in the room has SOMEONE they can ask about SOMETHING.

Derek shakes your hand afterward. "Good call," he admits.

Priya looks mildly horrified at having studied with a pre-med. But she also looks prepared.

Everyone looks prepared.`,scene:'library',mood:'#ffeaa7',characters:['Priya','Alex','Marcus','Sana','Derek'],effects:{stats:{cha:2},relationships:{priya:1,sana:1}},choices:[{text:'Final solo review, then bed.',next:'ec_exam_morning',effects:{stats:{int:1}}},{text:'Group dinner. Everyone. Together.',next:'ec_exam_morning',effects:{stats:{cha:1},relationships:{alex:1,priya:1,marcus:1}}}]};

EC_NODES['ec_group_rivalry'] = {text:`You do not start the rivalry. Derek does. The smirk through the glass was a declaration of war, and you are too exhausted and too caffeinated to be the bigger person.

"We are going to outscore them," you announce to your group.

Priya: "This is not a competition."

Marcus: "This is ABSOLUTELY a competition."

Alex: "I am uncomfortable with this but also strangely motivated."

The next six hours are the most productive of your academic career. Your group drills with an intensity that would make a military boot camp look relaxed. Priya abandons her measured teaching style and goes full drill sergeant. Marcus times every practice problem. Alex trash-talks Derek's group through the glass partition.

Derek responds by having Sana deliver a lecture on spectroscopy so loudly that both rooms can hear it. Your group retaliates by solving synthesis problems on the whiteboard in large, visible handwriting.

It is petty. It is ridiculous. It is the most motivated you have ever been to learn organic chemistry.

By 11 PM, both groups are spent. Derek walks over.

"Your synthesis pathways are wrong on problem 7," he says.

"Your spectroscopy interpretation is wrong on problem 3," Priya fires back.

They stare at each other. Then Derek pulls up a chair.

"Show me what you got wrong. I will show you what we got wrong."

The rivalry becomes a collaboration at the exact moment it needs to. Both groups share their mistakes, correct each other, and walk out at midnight with a comprehensive understanding of every topic Dr. Chen could possibly test.

Competition, it turns out, is just collaboration with extra steps.`,scene:'library',mood:'#ffeaa7',characters:['Alex','Priya','Marcus','Derek'],effects:{stats:{cou:1,int:1},relationships:{priya:1,marcus:1}},choices:[{text:'Go home. Sleep. The exam is tomorrow and you are actually ready.',next:'ec_exam_morning',effects:{stats:{per:1}}}]};

// ---- ARC 5: POST-EXAM AFTERMATH ----

EC_NODES['ec_post_exam_wait'] = {text:`The exam is over. The pencil is down. The three hours are gone.

You walk out of the science building into sunlight that feels personal — like the universe specifically arranged this golden afternoon for people who just survived organic chemistry.

The group assembles on the quad. Alex. Priya. Marcus. Even Derek and Sana, hovering at the edge of the group like satellites that got pulled into orbit.

"Question 12," Marcus says immediately. "The multi-step synthesis. What did you get?"

"Do NOT discuss answers," Priya warns. "It will only cause anxiety about things you cannot change."

"I got propanol," Alex says.

"I got butanol," Marcus says.

"I got... I do not remember what I got," you admit.

There is a moment of silence. Then everyone starts talking at once, comparing answers despite Priya's explicit instruction not to, getting increasingly frantic about whether they drew the right stereochemistry on question 8.

Priya throws up her hands. "I told you. I TOLD YOU."

But even she looks relieved. The weight is gone. Whatever happens — A, B, C, D, F — the work is done. The 72-hour crucible is over.

Marcus suggests boba. Everyone goes. Even Priya, who claims she does not like boba but orders a large taro milk tea and drinks it in four minutes.

The grades post in 72 hours. Three more days of waiting. But this time, the waiting is not filled with panic. It is filled with exhaustion, camaraderie, and the strange peace of having done your absolute best with the time you had.

You sip your boba. You look at the people around you — people who were strangers three days ago, or acquaintances at best, now bonded by 72 hours of shared crisis.

"Same time next semester?" Marcus asks.

"START STUDYING EARLY," Priya and Alex say in unison.

Everyone laughs. You laugh too. And for the first time in three days, the laughter does not feel like coping. It feels like joy.`,scene:'campus',mood:'#ffeaa7',characters:['Alex','Priya','Marcus'],effects:{stats:{cha:1},relationships:{alex:1,priya:1,marcus:1}},choices:[{text:'Wait for grades. Hope for the best.',next:'ec_end_ace',check:{stat:'int',dc:14},failNext:'ec_end_pass',effects:{}},{text:'Check in on yourself. The exam is done, but the burnout is real.',next:'ec_post_exam_reflection',effects:{stats:{per:1}}},{text:'Head to the boba shop. Time for the answer autopsy.',next:'ec_answer_autopsy',effects:{stats:{cha:1}}}]};

EC_NODES['ec_post_exam_reflection'] = {text:`The first night after the exam, you sleep for twelve hours. Not by choice — your body simply refuses to remain conscious. It has been running on caffeine and cortisol for three days, and it is done negotiating.

When you wake up, you feel... strange. Not bad. Not anxious. Just empty. The panic that has been your constant companion for 72 hours is gone, and its absence leaves a void.

You lie in bed and think about the last three days. About what you learned — not just organic chemistry, but about yourself.

You learned that you can learn anything under pressure, but that pressure has a cost. You learned that asking for help is not weakness. You learned that Priya's coldness was not hostility but high standards. You learned that Marcus, beneath the party-boy surface, is observant and kind. You learned that Alex has been quietly holding you together since day one.

And you learned that Dr. Chen's hint — "understand electron flow" — was not just about chemistry. It was about everything. Understand the underlying logic, and you can navigate any surface-level complexity.

Your phone buzzes. Group chat.

Priya: "Regardless of grades, I want to say: you all impressed me. Nobody gave up."

Marcus: "priya being NICE?? screenshot this"

Alex: "She is right though. We did something kind of amazing."

You type: "Same study group next semester. But we start on day 1. Not day negative-3."

Priya: "Agreed."

Marcus: "...I will try."

Alex: "We will hold you to it."

The grades will come when they come. You have done what you could. And the people who helped you do it are still here.

That matters more than any letter on a transcript.`,scene:'dorm',mood:'#ffeaa7',characters:['Alex','Priya','Marcus'],effects:{stats:{per:1,cha:1},relationships:{alex:2,priya:2,marcus:1}},choices:[{text:'The grade arrives...',next:'ec_end_ace',check:{stat:'int',dc:13},failNext:'ec_end_pass',effects:{}},{text:'The notification arrives. Grades are posted.',next:'ec_grade_drop',effects:{stats:{per:1}}}]};

// ---- ARC 6: TEACHER MENTORSHIP — DR. CHEN ----

EC_NODES['ec_chen_mentorship'] = {text:`Two weeks after the exam, you get an email from Dr. Chen.

"Please come to my office. Not about the grade."

Your stomach drops. Then rises. Then does something complicated involving both dropping and rising simultaneously.

Dr. Chen's office is exactly as you remember: sandwich wrappers, stacked papers, and a periodic table poster that has coffee stains on the noble gases. He gestures to a chair.

"You reported the answer key leak," he says. "That took integrity. Especially during finals week, when the temptation must have been significant."

"I did not look at the answers," you say. Which is true. Mostly true. Technically true.

"I know." He pulls up something on his computer. "I also reviewed your exam. You made mistakes — your stereochemistry needs work, and your synthesis in question 12 took a roundabout pathway that I can only describe as 'creative.' But your mechanism work was excellent. You understood electron flow."

He turns to face you. "You learned an entire semester of organic chemistry in 72 hours. That is not sustainable. But it tells me something: you have the capacity. You just lack the discipline."

He pushes a piece of paper across the desk. "I run a summer research lab. Organic synthesis. Paid position. I need a student who can learn fast under pressure and who has demonstrated that they will not cheat when the opportunity presents itself."

You stare at the paper.

"Think about it," Dr. Chen says. "And for the next semester — start studying on day one."

He goes back to his sandwich.

You walk out of his office holding a research application and a feeling you cannot name. It is somewhere between disbelief and the terrifying realization that someone saw your potential in the middle of your worst moment.`,scene:'office',mood:'#ffeaa7',characters:['Dr. Chen'],effects:{stats:{int:1,cha:1},relationships:{chen:3}},choices:[{text:'Accept the research position. A chance to do this right.',next:'ec_end_mentorship',effects:{stats:{int:1},relationships:{chen:2}}},{text:'Think about it. You need to prove to yourself first that you can maintain the discipline.',next:'ec_end_mentorship',effects:{stats:{per:1}}}]};

EC_NODES['ec_end_mentorship'] = {text:`ENDING: THE LONG GAME

Summer in Dr. Chen's lab is nothing like the 72-hour cram.

It is slow. Methodical. You run reactions that take eight hours and yield two milliliters of product. You read papers that take a week to understand. You make mistakes that cost days, not points.

And you love it.

The organic chemistry that was hieroglyphics three months ago becomes a language you speak fluently — not because you crammed, but because you lived it. Day by day. Reaction by reaction. Understanding building on understanding.

Dr. Chen is a demanding mentor. He does not accept sloppy work, vague explanations, or shortcuts. But he also stays late when you are struggling, explains concepts three different ways until one clicks, and occasionally shares his sandwich.

"You are not the smartest student I have had," he tells you one afternoon. "But you might be the most resilient. Most students who start where you started give up. You did not."

By fall, you are a different student. Not smarter — but disciplined. You study daily. You attend office hours. You form a study group on week one, not week fourteen.

Priya is in your advanced chemistry class. She sees you with a planner and color-coded notes and does a visible double take.

"Who ARE you?"

"Someone who learned the hard way that 72-hour cramming is not a lifestyle."

She almost smiles. "Want to be study partners?"

"I thought you would never ask."

Alex frames the B+ exam on your shared dorm wall. Marcus tells the story at every party, embellishing wildly. Dr. Chen writes your grad school recommendation letter three years later.

And every finals week, when some wide-eyed freshman posts in the group chat "Has anyone started studying?", you reply:

"Start now. Trust me. Start now."

---

EXAM CRUNCH: THE LONG GAME

The 72-hour crunch was the worst best thing that ever happened to you. It taught you everything about who you are — and who you could be.`,scene:'end',mood:'#00cc00',ending:'The Long Game',characters:['Dr. Chen','Priya','Alex','Marcus'],choices:[]};


// ---- ARC 7: THE GROUP STUDY MELTDOWN ----
EC_NODES['ec_group_meltdown'] = {text:`Hour five of the study group. The honeymoon is over.\n\nIt starts with highlighting. Priya highlights in yellow — key concepts only, surgical precision. Marcus highlights in blue — entire paragraphs, which defeats the purpose of highlighting. Alex does not highlight at all, preferring to write notes in the margins in handwriting so small it looks like an ant learned cursive.\n\nNone of this matters until Marcus tries to explain stereochemistry.\n\n"Okay, so R and S configurations — you just use your hands, right? Like, left hand is S, right hand is R—"\n\n"That is NOT how it works," Priya cuts in. Her voice has an edge you have not heard before. "Cahn-Ingold-Prelog priority rules. You rank the substituents by atomic number. The hand thing is a shortcut that FAILS for complex molecules."\n\n"It worked on the practice exam—"\n\n"It worked ONCE. On the easiest possible example. Chen will not give you the easiest possible example."\n\nMarcus puts his pen down. "Cool. Sorry for trying to contribute."\n\n"You can contribute by learning the ACTUAL method—"\n\n"Maybe I would if you did not make me feel stupid every time I open my mouth."\n\nThe room goes silent. Alex freezes mid-note. You can hear the clock on the wall ticking. Somewhere in the building, a printer is running. The mundane sounds of a world that does not care about your study group imploding.\n\nPriya opens her mouth. Closes it. Opens it again. "I am not trying to make you feel stupid."\n\n"Well, you are succeeding anyway."\n\nYou look at the whiteboard. Half the synthesis pathways are incomplete. The practice exam is only 40% finished. And your two best resources — Priya's knowledge and Marcus's pattern recognition — are currently not speaking to each other.\n\nAlex catches your eye. The look says: FIX THIS.\n\nGreat. You are now the group therapist. This was not in the syllabus.`,scene:'library',mood:'#fdcb6e',characters:['Alex','Priya','Marcus'],effects:{stats:{cha:1},relationships:{priya:-1,marcus:-1}},choices:[{text:'Mediate. Acknowledge both sides. Get them back on track.',next:'ec_group_reconcile',effects:{stats:{cha:1},relationships:{priya:1,marcus:1}}},{text:'Side with Priya. The correct method matters more than feelings right now.',next:'ec_group_fracture',effects:{stats:{int:1},relationships:{priya:1,marcus:-1}}},{text:'Side with Marcus. Priya needs to stop gatekeeping knowledge.',next:'ec_group_fracture',effects:{stats:{cou:1},relationships:{marcus:1,priya:-1}}}]};
EC_NODES['ec_group_reconcile'] = {text:`You take a breath. Then you do something you have never done in an academic setting: you facilitate.\n\n"Marcus. The hand trick works for simple molecules, and it got you through the practice problems. That is valid. But Priya is right that Chen will throw something more complex at us, and the priority rules are the only method that works every time."\n\nMarcus crosses his arms. But he is listening.\n\n"Priya. You are the best chemist in this room by a mile. But when you correct people, it lands like a verdict. Marcus is not wrong to feel that."\n\nPriya's jaw tightens. But she does not argue.\n\nSilence. The clock ticks. The printer finishes. Someone walks past the study room and glances in at the four of you, frozen in a tableau of academic tension, and keeps walking.\n\nThen Marcus sighs. "Okay. Show me the priority rules. But explain them like I am a person, not a textbook."\n\nPriya hesitates. Then she picks up the blue marker — Marcus's color, not hers. A small gesture. But you see Marcus notice it.\n\n"Cahn-Ingold-Prelog. Step one: look at the atoms directly bonded to the chiral center. Higher atomic number gets higher priority." She draws slowly, clearly. No shortcuts. No condescension.\n\nMarcus follows along. Asks a question. Priya answers without sighing. He asks another. She draws another example.\n\nBy the third example, Marcus is predicting the configurations before Priya finishes drawing. "WAIT. So it is just ranking and then checking the direction?"\n\n"Yes."\n\n"That is... that is actually simpler than the hand thing."\n\n"I KNOW."\n\nThey almost smile at each other. Almost.\n\nAlex exhales so hard their notes flutter. "Can we please go back to studying now? I have aged seven years in the last ten minutes."\n\nThe group reassembles. Something has shifted — not fixed, exactly, but renegotiated. Priya teaches with more patience. Marcus listens with more trust. Alex keeps the peace by timing practice problems and declaring winners, turning the tension into productive competition.\n\nAnd you? You learned something that is not on any exam: the hardest reactions to catalyze are the ones between people.\n\nThe study session runs three more hours. It is the most productive three hours yet. Not because the friction is gone, but because you found a way to make the friction generative instead of destructive.\n\nSometimes the group project IS the project.`,scene:'library',mood:'#ffeaa7',characters:['Alex','Priya','Marcus'],effects:{stats:{cha:2},relationships:{priya:2,marcus:2,alex:1}},choices:[{text:'Ride the momentum. This group is ready for the exam.',next:'ec_exam_morning',effects:{stats:{cha:1}}},{text:'One more breakthrough session before the big day.',next:'ec_group_breakthrough',effects:{stats:{int:1}}}]};
EC_NODES['ec_group_fracture'] = {text:`You pick a side. It is a mistake. You know it is a mistake the moment the words leave your mouth, the way you know a reaction has gone wrong when the solution turns the wrong color.\n\nThe person you sided against does not yell. That would be easier. Instead, they go quiet. They close their notebook. They cap their pen with a deliberate click that somehow sounds louder than anything else in the room.\n\n"Cool," they say. Just that. Cool.\n\nThey pack up. Not dramatically — no slammed books, no stormed-out door. Just a calm, surgical disengagement that is worse than anger because it is permanent.\n\n"Wait—" you start.\n\n"No, it is fine. I have other places to study." The study room door closes softly. The softness is devastating.\n\nAlex stares at you. "Well. That happened."\n\nThe remaining three of you try to continue. But the dynamic is broken. Priya without Marcus is all theory and no pattern recognition. Marcus without Priya is all instinct and no rigor. The study group is a three-legged table now, and every problem you attempt wobbles.\n\nYou check your phone. No messages from the person who left. You type "hey, I am sorry" three times and delete it three times. What would you even say? You were right? You were wrong? You were tired and scared and you picked the wrong moment to have an opinion about stereochemistry?\n\nAn hour passes. Productivity drops to near zero. Alex is valiantly trying to fill the gap but they are one person doing the work of two, and the strain shows.\n\nFinally, at 11 PM, you do the only thing left. You swallow your pride, walk out of the study room, and go find them.\n\nThey are in the coffee shop downstairs. Alone. Textbook open. Headphones in. Working. Because that is what people do when they are hurt and have an exam tomorrow — they work through it.\n\nYou sit down across from them. They do not look up.\n\n"I should not have taken sides," you say. "The group needs all of us. I need all of us. I am sorry."\n\nA long pause. They pull out one earbud.\n\n"You were kind of a jerk."\n\n"I was completely a jerk."\n\nAnother pause. Then: "Buy me a coffee and we will call it even."\n\nYou buy two coffees. You go back upstairs. The group reforms. It is not the same — it is more careful, more considerate, more aware of the cracks. But it holds.\n\nSometimes the repair is stronger than the original.`,scene:'library',mood:'#fdcb6e',characters:['Alex','Priya','Marcus'],effects:{stats:{cha:1,per:1},relationships:{alex:1}},choices:[{text:'Study through the night with the patched-up group.',next:'ec_exam_nervous',effects:{stats:{cou:1}}},{text:'Call it a night. Everyone needs space and sleep.',next:'ec_exam_morning',effects:{stats:{per:1}}}]};
// ---- ARC 8: PROFESSOR CHEN'S OFFICE HOURS ----
EC_NODES['ec_chen_office'] = {text:`You have never been to office hours. Not once, all semester. The concept felt like admitting defeat — walking into the gladiator's den and saying "I do not understand anything you have taught me for four months. Please help."\n\nBut here you are. Third floor of the chemistry building. Room 312. The door is open. Dr. Chen is inside, eating a sandwich. (Does he always eat sandwiches? Does he have a sandwich sponsorship? These are the questions your sleep-deprived brain generates instead of useful thoughts.)\n\nYou knock on the open door. He looks up. His expression does not change — it is the same neutral, slightly tired look he wears in lecture. The look of a man who has seen ten thousand panicking students and will see ten thousand more.\n\n"Office hours do not start for twenty minutes," he says.\n\n"I know. I thought — I wanted to—"\n\n"Sit down."\n\nYou sit. The chair is uncomfortable. There is a stack of exams on his desk — graded, from another class — and you can see red ink everywhere. Your stomach clenches.\n\nDr. Chen finishes chewing. "Let me guess. You have not studied all semester. The exam is soon. You are here because you are desperate, not because you are curious. And you want me to tell you what is on the exam."\n\nIt is so accurate that you briefly wonder if he has cameras in your dorm room.\n\n"I..." You search for words that make you sound less pathetic and find none. "Yes. All of that. Except I am also a little curious now, because you explained electron flow in that one lecture and it was the first time chemistry made sense to me, and I have been thinking about it since."\n\nSomething shifts in his face. Micro-expression. Barely visible. But the neutrality cracks, just for a second, and behind it you see something unexpected: recognition.\n\n"Which lecture?" he asks.\n\n"Week seven. You drew the SN2 mechanism and said 'electrons are not random — they are logical. Every arrow tells a story.' And then you showed how the nucleophile's lone pair literally displaces the leaving group, like one billiard ball hitting another. I remember thinking — that is ELEGANT. Chemistry is not chaos. It is narrative."\n\nDr. Chen puts down his sandwich. He takes off his glasses. He cleans them slowly on his shirt, which is a move you recognize from lecture as his "I am about to say something important" tell.\n\n"Most students come to office hours and ask 'what is on the exam.' You just described why a mechanism works using the word 'narrative.' Those are very different things."\n\nHe stands up and walks to his whiteboard. Picks up a marker. "I will not tell you what is on the exam. But I will show you something that will help you with every problem on it."`,scene:'office',mood:'#ffeaa7',characters:['Dr. Chen'],effects:{stats:{int:1},relationships:{chen:2}},choices:[{text:'Listen carefully. This might be the most important lesson of the semester.',next:'ec_chen_revelation',effects:{stats:{int:1},relationships:{chen:1}}}]};
EC_NODES['ec_chen_revelation'] = {text:`Dr. Chen draws a single molecule on the whiteboard. Nothing fancy — just ethanol. Two carbons, an oxygen, a hydrogen. First-week material.\n\nThen he asks: "Where are the electrons?"\n\n"In the bonds. And the lone pairs on oxygen."\n\n"Good. Now — where do the electrons WANT to go?"\n\nYou stare at the molecule. Want? Electrons do not want things. Electrons are... electrons. They follow rules. Electronegativity. Orbital theory. Quantum mechanics. They do not have desires.\n\nBut as you stare at the drawing, something clicks. The oxygen is electronegative. It PULLS electron density toward itself. The O-H bond is polarized. The hydrogen is slightly positive — electron-poor. Vulnerable. Available for attack.\n\n"The hydrogen," you say slowly. "The hydrogen on the oxygen is electron-poor. A base could take it. And then the oxygen has two lone pairs, so it could act as a nucleophile—"\n\n"Keep going."\n\n"So ethanol is BOTH an acid AND a nucleophile depending on the conditions. And if I know that — if I know where the electrons are and where they want to go — I can predict what it will do in ANY reaction."\n\nDr. Chen caps the marker. "That is the entire course."\n\nYou stare at him. "What?"\n\n"Twenty-four chapters. Hundreds of reactions. Thousands of molecules. It is all the same question: where are the electrons, and where do they want to go? If you understand that — truly understand it — you do not need to memorize a single reaction. You can derive them all."\n\nHe sits back down and picks up his sandwich. "Every student who comes to my office hours asks for a shortcut. You just found the only real one."\n\nYour brain is doing something it has not done all semester — it is reorganizing. All those disconnected reactions, all those arbitrary-seeming rules, all those mechanisms you tried to memorize — they are not disconnected. They are the same story, told with different characters. Electrons moving from high density to low density. Nucleophiles attacking electrophiles. The logic underneath every single reaction is IDENTICAL.\n\nYou stand up. Your legs are shaking, and not from caffeine this time. From the vertigo of understanding.\n\n"Dr. Chen?"\n\n"Mm?" He is mid-bite.\n\n"Why did you not teach it this way from the beginning?"\n\nHe almost smiles. Almost. "I did. Week seven. Electrons are not random — they are logical. You were the only student who remembered it."\n\nYou walk out of his office and the hallway looks different. The fluorescent lights are the same, the linoleum is the same, but you are carrying something new — a framework that makes every chapter in the textbook a variation on a single theme.\n\nYou do not have much time left. But for the first time, you do not need much time. You just need to apply one idea, over and over, until the exam.\n\nElectrons. Where they are. Where they want to go.\n\nThat is the whole game.`,scene:'office',mood:'#ffeaa7',characters:['Dr. Chen'],effects:{stats:{int:2,per:1},relationships:{chen:3}},choices:[{text:'Go study with this new framework. Everything looks different now.',next:'ec_exam_ready',effects:{stats:{int:1}}},{text:'Share this insight with the group. Everyone needs to hear this.',next:'ec_share_insight',effects:{stats:{cha:1},relationships:{alex:1,priya:1}}}]};
// ---- ARC 9: THE MISSING TEXTBOOK CRISIS ----
EC_NODES['ec_textbook_gone'] = {text:`You reach for your textbook at 6 AM. The textbook that has been your grudging companion for two days. The textbook you finally cracked from its shrink wrap and annotated with desperate marginalia.\n\nIt is gone.\n\nYou check under the bed. Behind the desk. In the bathroom. In the hallway. In the common room. Under Alex's bed, in case it migrated. It has not migrated. It is simply gone.\n\n"Alex. Did you move my textbook?"\n\nAlex, half-asleep: "Your textbook is YOUR problem."\n\n"It was on my desk. Right here. I was using it four hours ago."\n\nYou both look at the desk. There is a coffee ring where the textbook was. A ghost outline in spilled eraser dust. The forensic evidence of a book that existed and no longer does.\n\nThen you remember. 4 AM. You went to the common room to photocopy the reaction summary tables. You brought the textbook. You photocopied pages 340 through 380. And then—\n\n"I left it in the common room."\n\nYou sprint downstairs in your socks. The common room is empty. The photocopier is cold. The table where you sat is bare except for a Mountain Dew can and someone's abandoned flashcards (Psych 101 — not helpful).\n\nYour textbook — YOUR textbook, with YOUR annotations, YOUR sticky notes, YOUR three-color highlighting system that Priya would call "chaotic but functional" — is gone. Someone took it. Borrowed it, stole it, mistook it for theirs. The distinction does not matter because the result is the same: you have no textbook 27 hours before the final exam.\n\nYou check the library. The front desk person looks at you with the particular pity reserved for finals-week casualties. "All four copies of Morrison and Boyd are checked out. Have been since last week. Wait list has eleven names on it."\n\nEleven. ELEVEN people ahead of you. For a book you OWNED six hours ago.\n\nYour phone buzzes. Group chat: "Anyone have a spare Orgo textbook?" You type it and delete it. Then type it again. Then send it, because pride is a luxury you cannot afford right now.\n\nThree crying-laughing emojis. Two "same lol" replies. Zero offers of a textbook.\n\nYou slump against the library counter. The front desk person leans forward.\n\n"Have you tried the digital copy? The university has an e-textbook license. It is terrible — slow, DRM-locked, cannot highlight — but it is free and it is available right now."\n\nA lifeline. A janky, frustrating, low-resolution lifeline. But a lifeline.`,scene:'library',mood:'#fdcb6e',characters:['Alex'],effects:{stats:{per:1}},choices:[{text:'Use the university e-textbook. Ugly but functional.',next:'ec_textbook_scramble',effects:{stats:{int:1}}},{text:'Call everyone you know. Someone in this building has that textbook.',next:'ec_textbook_scramble',effects:{stats:{cha:1}}}]};
EC_NODES['ec_textbook_scramble'] = {text:`You find a way. Of course you find a way. You are 27 hours from a final exam — resourcefulness is not optional, it is biological.\n\nThe e-textbook is exactly as bad as the librarian warned: pages load in three seconds, you cannot search across chapters, and the DRM software crashes every twenty minutes, forcing you to log in again with your student ID, which requires two-factor authentication to a phone that is at 12% battery because your charger is ALSO missing (it is tangled in your sheets, but you will not discover this for six hours).\n\nBut it works. Barely. You prop the laptop on a library table and start reviewing synthesis pathways from the digital pages, cross-referencing with the photocopies you made at 4 AM — the ones that inadvertently saved your entire exam preparation, because they contain the reaction summary tables for chapters 8 through 16. The exact chapters Alex said Dr. Chen tests heavy on.\n\nYou made those photocopies on a whim. At 4 AM. While exhausted. And they might be the most important thing you have done all semester.\n\nAt noon, Priya texts: "I have a second copy of the textbook. My high school edition. The chapter numbers are different but the reactions are the same."\n\n"WHY do you have two copies?"\n\n"I bought the new edition because two diagrams changed. I am thorough."\n\nPriya is not thorough. Priya is a force of nature disguised as a college student.\n\nShe drops off the book at the library. It is dog-eared and annotated from her first pass through organic chemistry — in HIGH SCHOOL, because of course Priya took organic chemistry in high school — and her notes in the margins are clearer than the textbook itself.\n\nYou spend the next five hours with Priya's annotated high school textbook, the janky e-textbook for the current edition's practice problems, and your 4 AM photocopies for the reaction tables. It is a Frankenstein study setup. Three sources, none of them ideal, all of them together forming something that is almost, barely, possibly enough.\n\nAt 5 PM, you find your original textbook. It is in the recycling bin by the common room photocopier. SOMEONE PUT YOUR TEXTBOOK IN THE RECYCLING BIN. You cannot tell if it was malicious, accidental, or the work of an overzealous custodian. You pull it out, dust off a coffee filter, and clutch it to your chest like a rescued child.\n\n"Found it," you text the group.\n\nMarcus: "the textbook saga is the most dramatic thing that has happened to anyone in this class and we are all taking the same exam"\n\nPriya: "Glad it is back. You can keep my high school copy. Consider it a backup for the rest of your academic career."\n\nAlex: "Can you please come home? You have been at the library for 11 hours and I am worried."\n\nYou go home. You have your textbook. You have Priya's backup. You have photocopies of every important page. You have lost half a day to a crisis that should not have happened.\n\nBut you also learned something: you can study organic chemistry from a recycling-bin-rescued textbook, a DRM-locked laptop, and a high schooler's margin notes. If that is not adaptability, nothing is.`,scene:'library',mood:'#ffeaa7',characters:['Priya','Alex','Marcus'],effects:{stats:{per:1,int:1},relationships:{priya:2,alex:1}},choices:[{text:'Back to studying. The textbook detour cost time but you survived.',next:'ec_exam_nervous',effects:{stats:{per:1}}},{text:'You have renewed energy from the relief. Final study push.',next:'ec_final_push',effects:{stats:{cou:1}}}]};
// ---- ARC 10: SLEEP DEPRIVATION SPIRAL ----
EC_NODES['ec_sleep_spiral'] = {text:`Hour 42 without real sleep. You have had two 45-minute naps that your body accepted like a starving person accepts a single cracker — technically food, not actually sustaining.\n\nThe first sign is the reading. The textbook words start moving. Not metaphorically — you watch the letters in "nucleophilic substitution" rearrange themselves into "substitutional nucleophilia" and then into something that is not a word in any language. You blink. The letters settle back. You read the sentence again. It moves again.\n\nThe second sign is the emotions. A video of a dog reuniting with its owner appears on your phone (you were not even on social media — it was a notification from an app you forgot you had) and you cry for four minutes. Full, heaving sobs. Over a dog. On a stranger's phone. In the library.\n\nThe third sign is the shadows. Not hallucinations, exactly. More like your peripheral vision is... generating content. Shapes in the corner of your eye. The feeling that someone is standing behind you. You turn around: nobody. You turn back: the feeling returns. Your brain, deprived of the REM cycles it uses to calibrate reality, is improvising.\n\nYou text Alex: "I think the benzene ring on page 204 is looking at me."\n\nAlex: "Come home. Now."\n\n"I cannot. I have not finished chapter 15."\n\n"You just said a drawing is looking at you. Chapter 15 can wait. Your sanity cannot."\n\nYou look at the benzene ring again. It is not looking at you. Obviously it is not looking at you. It is a hexagon with alternating double bonds. It does not have eyes.\n\nBut the circle in the middle kind of looks like a pupil. And the hydrogen atoms kind of look like eyelashes.\n\nOkay. Maybe Alex has a point.\n\nYour hands are trembling. Not shaking — trembling. A fine, constant vibration, like a phone on silent. You try to write a mechanism and the arrows come out wavy, uncertain. Your handwriting looks like a seismograph during a 4.0.\n\nThe student at the next table glances at you. Then does a double take. Then leans over.\n\n"Hey. Are you okay? You look... I mean, no offense, but you look like you are going to pass out."\n\n"I am fine. I have an exam tomorrow."\n\n"We ALL have an exam tomorrow. You still look like you are going to pass out."`,scene:'library',mood:'#d63031',characters:['Alex'],effects:{stats:{per:-1}},choices:[{text:'Go home. Sleep. Your brain is not working anyway.',next:'ec_sleep_rescue',effects:{stats:{per:1},relationships:{alex:1}}},{text:'One more hour. Just one more hour. Then sleep.',next:'ec_sleep_collapse',effects:{stats:{cou:1}}},{text:'Call someone. You need another human being right now.',next:'ec_sleep_rescue',effects:{stats:{cha:1},relationships:{alex:2}}}]};
EC_NODES['ec_sleep_collapse'] = {text:`One more hour. You promised yourself one more hour. That was the deal.\n\nYou make it twenty-three minutes.\n\nYou do not remember falling asleep. One moment you are reading about elimination reactions — E1 versus E2, the bane of every organic chemistry student — and the next moment a librarian is shaking your shoulder and it is three hours later and there is drool on page 312 and your neck is at an angle that will require chiropractic intervention.\n\n"We are closing in fifteen minutes," the librarian says. She has seen this before. The gentleness in her voice is the gentleness of someone who has woken up a hundred sleeping students during finals week and has stopped being surprised.\n\nYou sit up. The world tilts. Your vision takes several seconds to focus, like an old camera auto-adjusting. The library lights are too bright. Your mouth tastes like stale coffee and regret.\n\nThree hours. You lost three hours. Three hours you could have spent studying, or sleeping properly in a bed, or eating, or doing literally anything other than drooling on a textbook in a public space.\n\nYou check your phone. Seven missed calls from Alex. Four from Priya. One from Marcus, accompanied by the text: "alex says you disappeared. are you alive? please be alive. I cannot handle the emotional weight of a dead study partner during finals week."\n\nYou call Alex. They pick up on the first ring.\n\n"WHERE—"\n\n"I fell asleep in the library."\n\nA long exhale. "I am coming to get you. Do not move. Do not try to study. Do not try to do ANYTHING. Just sit there and exist until I arrive."\n\nAlex arrives in eleven minutes. You did not know they could walk that fast. They take your textbook, your notes, and your phone. They hand you a water bottle and a banana — where did they get a banana at midnight? — and walk you home in silence.\n\nThe silence is not angry. It is worried. The particular worried silence of a friend who has been watching you destroy yourself for 42 hours and has finally reached the intervention stage.\n\nIn bed, under actual blankets, in actual darkness, your body surrenders. Sleep comes like a wave — fast, total, merciful. Your last thought before consciousness leaves is about electrons. Where they are. Where they want to go.\n\nEven in collapse, some part of your brain is still studying. You hate it. You are also a little proud of it.`,scene:'library',mood:'#d63031',characters:['Alex','Priya','Marcus'],effects:{stats:{per:1},relationships:{alex:2}},choices:[{text:'Wake up. However many hours are left, make them count.',next:'ec_exam_nervous',effects:{stats:{per:1}}}]};
EC_NODES['ec_sleep_rescue'] = {text:`You give in. Not gracefully — you do not stand up and announce "I am choosing self-care." You sort of melt out of your chair, gather your things with the coordination of a person wearing oven mitts, and shuffle toward the exit like a zombie in a hoodie.\n\nAlex meets you at the library doors. They take one look at you and their expression goes from worried to alarmed.\n\n"How long has it been since you slept?"\n\n"Define slept."\n\n"Unconscious in a bed for more than two consecutive hours."\n\n"...Tuesday?"\n\n"It is THURSDAY."\n\n"Then the answer is Tuesday."\n\nAlex takes your backpack. They steer you across campus with a hand on your elbow, which is necessary because you keep drifting toward the grass median like a shopping cart with a bad wheel. The night air is cold and it helps — the sensory input gives your brain something real to process instead of phantom shadows and animated benzene rings.\n\nBack at the dorm, Alex enacts what they call the "Emergency Protocol." You did not know there was an Emergency Protocol. Apparently Alex created it on day one of the cram, hoping it would never be needed.\n\nStep one: water. A full glass. You drink it and immediately feel thirty percent more human.\n\nStep two: food. Alex heated up leftover pasta. Real food. With vegetables. You eat it standing at the counter because sitting down feels dangerous — you might fall asleep in the chair.\n\nStep three: hygiene. "Brush your teeth. Wash your face. I know it sounds pointless but your body needs the signal that the day is ending."\n\nStep four: darkness. Alex closes every curtain, turns off every light, and puts your phone in a drawer. "It charges there. You sleep here. Six hours minimum."\n\n"The exam—"\n\n"Is in twenty hours. You will have fourteen waking hours to study after you sleep. Fourteen FUNCTIONAL hours instead of twenty hours of what you have been doing, which is staring at pages and hallucinating."\n\nThe math is annoyingly correct.\n\nYou lie down. The pillow is unreasonably comfortable. Your body releases tension you did not know it was holding — shoulders dropping, jaw unclenching, hands finally still.\n\n"Alex?"\n\n"Yeah?"\n\n"You are a really good roommate."\n\n"I know. Go to sleep."\n\nYou sleep for seven hours. Not six — Alex lets the alarm run an extra hour because they check on you at the six-hour mark and you are in deep REM and they make the executive decision that an hour of sleep is worth more than an hour of studying.\n\nThey are right. When you wake up, the world is solid again. The letters stay where they belong. The benzene ring is just a hexagon. Your hands are steady.\n\nYou have thirteen hours until the exam. Your brain is back online. And the person who brought you back from the edge is sitting at their desk, already studying, a fresh cup of coffee waiting for you on your nightstand.\n\nSome debts do not fit on a transcript.`,scene:'dorm',mood:'#ffeaa7',characters:['Alex'],effects:{stats:{per:2},relationships:{alex:3}},choices:[{text:'Study smart. No more marathons. Focused sprints with breaks.',next:'ec_exam_ready',effects:{stats:{int:1,per:1}}},{text:'Join the study group for the final push.',next:'ec_study_group_final',effects:{stats:{cha:1}}}]};
// ---- ARC 11: POST-EXAM AFTERMATH EXPANDED ----
EC_NODES['ec_answer_autopsy'] = {text:`The boba shop. Forty-five minutes after the exam. The five of you are crammed into a booth designed for three, sharing two orders of fries and five different milk teas, conducting what Marcus calls "the answer autopsy."\n\nPriya explicitly forbade this. She said — correctly — that comparing answers after an exam you cannot change is psychological self-harm. She said this while sipping her taro milk tea. She is now leading the autopsy.\n\n"Question 7. The Diels-Alder reaction. What diene did you use?"\n\n"Butadiene," you say.\n\n"Same," Alex says.\n\n"I used cyclopentadiene," Marcus says.\n\nEveryone turns to Marcus.\n\n"What? It is a better diene. More reactive. Chen talked about it in week nine."\n\nPriya's eye twitches. "Cyclopentadiene was not one of the provided reagents."\n\n"...It was not?"\n\n"Marcus. The reagent list was ON THE EXAM PAGE."\n\nMarcus goes pale. Then he goes through all five stages of grief in approximately eight seconds, ending on acceptance with remarkable speed. "Okay. I lost that one. Moving on. Question 12."\n\nQuestion 12. The synthesis question. The big one. The one worth 15 points. The one that separates the survivors from the casualties.\n\nYou described a three-step synthesis. Bromination, then nucleophilic substitution, then elimination. Clean. Logical. Exactly how Priya taught it.\n\nAlex described a four-step synthesis. Same starting point, same product, different pathway. More steps but technically valid.\n\nPriya described a two-step synthesis. Because of course she did.\n\n"TWO steps?!" Marcus nearly chokes on his boba. "That is not possible."\n\n"It is if you use a concerted mechanism instead of breaking it into discrete steps."\n\n"Priya, I need you to understand that the rest of us are mere mortals."\n\nYou sit with your milk tea and listen to the chaos. Every comparison brings a spike of anxiety — did I get that one right? Did I lose points there? What about the nomenclature section, where you hesitated on question 3 and changed your answer twice and then changed it back?\n\nThe not-knowing is its own special torture. The exam is graded in Chen's office right now, or it will be soon, and every answer is already locked in. Your fate is determined. You just do not have access to the information yet.\n\nBut here, in this booth, with fries and boba and the people who got you through it — the not-knowing feels survivable. You are not waiting alone.\n\nMarcus raises his cup. "To organic chemistry. May we never speak of it again."\n\n"We have Organic Chemistry II next semester," Priya says.\n\nThe table goes silent.\n\n"I am changing my major," Marcus announces.\n\n"You said that last semester."\n\n"I MEAN it this semester."\n\nHe does not mean it this semester.`,scene:'campus',mood:'#ffeaa7',characters:['Alex','Priya','Marcus'],effects:{stats:{cha:1},relationships:{alex:1,priya:1,marcus:1}},choices:[{text:'Go home. Sleep for a year. Wait for the grade.',next:'ec_grade_drop',effects:{stats:{per:1}}},{text:'Organize a group dinner later this week. These people deserve celebration.',next:'ec_grade_drop',effects:{stats:{cha:1},relationships:{alex:1,priya:1,marcus:1}}}]};
EC_NODES['ec_grade_drop'] = {text:`Three days later. 6:47 AM. Your phone buzzes.\n\nUniversity notification: "CHEM 201 — Final Exam grades have been posted."\n\nYou stare at the notification for eleven minutes. You know it is eleven minutes because you watch every one of them tick by on the clock, your thumb hovering over the screen like a person deciding whether to open a letter that might contain either a check or an eviction notice.\n\nThe group chat is already on fire. Marcus sent seventeen messages in the time it took you to read the notification once.\n\nMarcus: "GRADES ARE UP"\nMarcus: "I CANNOT LOOK"\nMarcus: "SOMEONE LOOK FOR ME"\nMarcus: "ACTUALLY DO NOT LOOK FOR ME"\nMarcus: "okay i looked"\nMarcus: "..."\nMarcus: "C+!!!!!!!!!!!"\nMarcus: "A C PLUS"\nMarcus: "I PASSED"\nMarcus: "I ACTUALLY PASSED"\nMarcus: "TAKE THAT DR CHEN"\nMarcus: "respectfully take that dr chen he is a great professor"\n\nPriya, three minutes later: "A-. The stereochemistry section cost me. I will address this."\n\nAlex: "B. I am content. I am at peace. I am going back to sleep."\n\nThey are all waiting for you. You can see the typing indicators — three people, watching, holding their breath across three different dorm rooms.\n\nYou open the portal. You navigate to grades. You click on CHEM 201.\n\nThe page loads in two seconds. The longest two seconds of your academic life. Longer than the exam itself. Longer than the 72-hour cram. Longer than every all-nighter combined.\n\nThe grade appears.\n\nYou stare at it. You read it three times to make sure your sleep-deprived brain (you STILL have not fully recovered) is not inventing things.\n\nThen you type it into the group chat.\n\nThe response is immediate and deafening — a cascade of capital letters and exclamation points and emoji that your phone struggles to render.\n\nYou put the phone down. You lie on your back and stare at the ceiling. The same ceiling you stared at three days ago when this all started. When the textbook was still in shrink wrap. When 72 hours felt like an impossible deadline and organic chemistry felt like an alien language.\n\nYou did it. However you did it — through luck or grit or Priya's notes or Alex's plan or Marcus's pattern recognition or Dr. Chen's sandwich-adjacent wisdom or sheer, unreasonable, beautiful stubbornness — you did it.\n\nThe ceiling looks the same as it did three days ago. But you do not. You are someone who walked into a fire and came out the other side. Singed. Exhausted. Running on residual caffeine and the ghosts of a hundred flashcards.\n\nBut through.\n\nAlex rolls over in their bed. "So? How did we do?"\n\nYou smile. It is the first real smile in four days.\n\n"We did okay. We did okay."`,scene:'dorm',mood:'#ffeaa7',characters:['Alex','Priya','Marcus'],effects:{stats:{per:1,cha:1},relationships:{alex:2,priya:1,marcus:1}},choices:[{text:'You passed. The nightmare is over. For now.',next:'ec_end_pass',effects:{}},{text:'The grade is good enough for Dr. Chen to notice.',next:'ec_chen_mentorship',check:{stat:'int',dc:13},failNext:'ec_end_pass',effects:{}}]};

EC_NODES['ec_all_nighter'] = {text:`The library closes at midnight. You discover this by being in it at midnight when the lights do a warning flicker.

You move to the 24-hour study lounge on the third floor of the science building, which smells like old ambition and industrial carpet cleaner. There are four other students already installed — the kind of serious, hollow-eyed presence that tells you they have been here since at least 10 PM and have transcended normal human affect.

It is 12:30 AM. Your exam is in nine hours.

You open the textbook to Chapter 14: Carbonyl Chemistry. It is the chapter you have been avoiding because the reaction mechanisms look like someone tried to describe a catastrophe using only arrows and hexagons.

At 2 AM, you break through.

It is not metaphorical. Something in your brain, running on caffeine and the specific desperation of a person who has no fallback option, clicks into a pattern-recognition mode you did not know you possessed. The reaction mechanisms stop looking random. They start looking — inevitable. Of course the nucleophile attacks there. Of course that proton leaves. The molecules are just doing the thing they were always going to do, following rules you can now read.

You write twelve pages of notes in forty minutes.

At 4 AM, you see Alex's coffee cup talking to you. This is not a metaphor.

"You need to sleep," the coffee cup says. In Alex's voice, which makes sense because Alex is sitting across from you, having arrived at some point you do not remember, head down on folded arms.

At 5 AM you understand stereochemistry in a way that feels personal. You feel that you and a chiral center have an understanding.

At 6 AM the lounge window goes grey, then pink, then gold. The other serious students are still there. You make eye contact with the one nearest you — a person whose name you do not know but whose suffering you completely understand — and something passes between you. Solidarity. Survivor recognition.

Alex lifts their head. Looks at you. Looks at your twelve pages of notes.

"How are you functional right now?"

"I do not think I am," you say honestly. "I think I am running on something past functional. I think there is a mode beyond functional and I have found it and it is made of carbonyl chemistry and questionable choices."

The exam is in three hours. You know more organic chemistry than you have ever known. You are also not entirely sure the wall is real.`,scene:'daily',mood:'#ffeaa7',characters:['Alex'],effects:{stats:{int:3,cou:1},flags:{all_nighter_done:true}},choices:[{text:'Push through to the exam. You are in the zone. Do not stop.',next:'ec_exam_morning',effects:{stats:{int:1,cou:1}}},{text:'Get two hours of sleep. A rested brain retains better than a running one.',next:'ec_exam_morning',effects:{stats:{per:1,int:1}}}]};


EC_NODES['ec_study_group_betrayal'] = {text:`The exam question is one you have seen before.

Not similar. Not adjacent. The exact problem — the same reaction sequence, the same substituents, the same impossible-to-guess stereochemical outcome — from the private practice set Marcus shared with the group two days ago. The one Marcus said he got from "a reliable source."

You put your pen down. The exam hall continues around you, five hundred people doing what you came here to do, but you are suddenly outside the moment, looking at it from the wrong angle.

After the exam, in the parking lot, with that specific post-exam decompression where people say what actually happened:

"That practice problem," Priya says. She is looking at Marcus with a precision that has nothing to do with affection. "The one on the real exam. Where did you get that set?"

Marcus is very still.

"Marcus."

"A TA had them," he says. "Former TA. I did not think anyone would—"

"You shared stolen exam content," Priya says. "With the study group. And then presumably with other people."

"I did not know it was—"

"You did know." She has perfect recall. This has always been true about Priya. "You said it was from a reliable source. You said the source was confident these problems were relevant. Those are not the words of someone who accidentally stumbled on something."

The parking lot is very quiet.

You look at Alex. Alex looks at their shoes. The thing that held the study group together — the trust that Priya's notes were given freely, that Marcus's energy was genuine, that the whole improbable collaboration meant something — is separating at its seams. Not dramatically. Just: cleanly. The way a well-made thing fails when you apply exactly the right pressure to exactly the right place.

You passed the exam. Almost certainly you passed it, with the help of a question you should not have had.

That is a sentence with more weight in it than you expected.`,scene:'confrontation',mood:'#fdcb6e',characters:['Alex','Priya','Marcus'],effects:{stats:{per:2,int:1},relationships:{priya:-1,marcus:-2},flags:{exam_compromised:true}},choices:[{text:'Report it. It is the right thing. The cost is real but you cannot build on a bad foundation.',next:'ec_professor_mercy',effects:{stats:{cha:1,cou:2},relationships:{priya:2}}},{text:'Stay silent. You needed to pass. The exam is done. Let it be done.',next:'ec_post_exam_reflection',effects:{stats:{per:1},relationships:{alex:1}}}]};


EC_NODES['ec_professor_mercy'] = {text:`Dr. Chen's office hours end at 4 PM. You arrive at 3:47.

The door is open. She is grading, her red pen moving in patterns that are either efficient or merciless — it is difficult to tell from the doorway. The office is smaller than you expected for someone whose exam has terrorized an entire department. Stacks of papers. A cactus on the windowsill. A photograph of a very young Dr. Chen at what is clearly a commencement ceremony, holding a diploma and looking like she has just survived something.

She sees you. She does not tell you to come in, but she does not tell you to go away.

You come in. You sit in the chair across from her desk. You explain.

Not the study group catastrophe. Not Marcus or Priya or the parking lot conversation. You explain the three days. The shrink-wrapped textbook. The decisions you made and the ones that were made for you and the point at which the two became difficult to tell apart. You explain the all-nighter and the carbonyl breakthrough and the moment in the exam hall when you realized the question on the paper was one you had seen before.

Dr. Chen's pen stops moving.

She is quiet for long enough that you start counting ceiling tiles.

"I have been teaching this course for twelve years," she says finally. "I write a new exam every semester. I have written forty-seven versions of this exam." She sets the pen down. "I know what a student who has genuinely learned organic chemistry looks like on paper. And I know what a student who has seen the questions looks like." She looks at you directly. "Your exam looks like both."

You wait.

"The question you are describing — that was a variant," she says. "I use the same underlying reaction with different molecules each year. Whoever gave Marcus that practice set gave him last year's version. Similar enough to recognize. Different enough that knowing the answer did not actually help unless you understood the mechanism." She picks up the pen again. "Did you understand the mechanism?"

"Yes," you say. "I do now."

She makes a note. You cannot see what it says.

"Come to my lab next week," she says. "I have a research position I cannot fill because undergraduates consistently convince me they are not serious. You have just convinced me otherwise, in the least conventional way possible."

You are not sure if you just passed or failed the hardest test of the semester.

Maybe both.`,scene:'revelation',mood:'#fdcb6e',characters:['Dr. Chen'],effects:{stats:{int:1,cha:2},relationships:{dr_chen:3},flags:{professor_knows:true}},choices:[{text:'Accept the research position — this is where the real learning starts.',next:'ec_chen_mentorship',effects:{stats:{int:2},relationships:{dr_chen:2}}},{text:'Ask about the exam first. You need to know where you actually stand.',next:'ec_post_exam_reflection',effects:{stats:{per:1,int:1},relationships:{dr_chen:1}}}]};


EC_NODES['ec_last_question'] = {text:`Question 25. The last question on the exam.

You have been through 24 before this. Mechanisms, nomenclature, synthesis pathways, spectroscopy interpretation — the whole topography of a semester compressed into three hours, and you have covered most of it in a way that feels, if not masterful, then at least honest. You know what you know. You have shown it.

Question 25 is not a chemistry question.

Or rather: it is, technically, a chemistry question. It asks you to design a synthesis for a compound that would neutralize a specific environmental contaminant that is poisoning a municipal water supply, given a set of starting materials and a three-step constraint.

But at the bottom of the problem, in Dr. Chen's neat print, is an addendum you have never seen on an exam: "In two or three sentences, explain not only your synthetic approach but why the problem of environmental contamination is worth solving. No points will be deducted for any sincere answer."

The exam hall is very quiet. The scratch of pens. The occasional cough. The institutional clock doing its slow, institutional counting.

You look at the addendum for a long time.

The synthesis is manageable — you work through it, check your mechanism, verify the atom economy. That part is the chemistry. That part is what three days of studying bought you.

The two or three sentences are something else.

You think about why problems are worth solving. You have spent seventy-two hours learning to solve a very specific problem under pressure, which might mean you have thought about this more recently than most people in this room. You think about the all-nighter and Alex asleep across from you and Priya's color-coded notes and the study group that almost fell apart and somehow did not. You think about what it is to choose to learn something.

You write two sentences. They are not about chemistry.

You put the pen down with one minute on the clock. Around you, other students are still writing. You look at your answer to question 25 and understand that it is the truest thing you have produced this semester, possibly in some time.

Dr. Chen will either think it is exactly right or completely wrong. You find, with some surprise, that you are okay with either.`,scene:'action',mood:'#fdcb6e',characters:['Dr. Chen'],effects:{stats:{int:1,cha:2,per:1}},choices:[{text:'Walk out and find your people — the exam is done and you have things to say.',next:'ec_post_exam_wait',effects:{stats:{cha:1},relationships:{alex:2,priya:1}}},{text:'Stay seated until the last possible moment. Let the silence be what it is.',next:'ec_post_exam_reflection',effects:{stats:{per:2,int:1}}}]};

// ==================================================================
// ==================================================================

// ============================================================
// SCENARIO DATA — NEON ABYSS (Neo-Tokyo 2087)
// ============================================================
window.SCEN_NODES['examcrunch'] = EC_NODES;
})();
