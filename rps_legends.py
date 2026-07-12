#!/usr/bin/env python3
"""
RPS LEGENDS - A Rock-Paper-Scissors Roguelike
Terminal game using only: random, json, os, time
"""

import random
import json
import os
import time

# ─────────────────────────────────────────────
# CONSTANTS & DATA TABLES
# ─────────────────────────────────────────────

VERSION = "1.0.0"
SAVE_DIR = os.path.expanduser("~/.rps_legends")
SAVE_FILE = os.path.join(SAVE_DIR, "saves.json")
META_FILE = os.path.join(SAVE_DIR, "meta.json")

TYPE_CHART = {
    ("Rock",     "Scissors"): 1.5,
    ("Scissors", "Paper"):    1.5,
    ("Paper",    "Rock"):     1.5,
    ("Rock",     "Paper"):    0.5,
    ("Paper",    "Scissors"): 0.5,
    ("Scissors", "Rock"):     0.5,
}

RARITY_WEIGHTS = {"Common": 50, "Uncommon": 25, "Rare": 15, "Epic": 8, "Legendary": 2}
RARITY_COLORS  = {"Common": "", "Uncommon": "*", "Rare": "**", "Epic": "***", "Legendary": "****"}

PERK_POOL = [
    {"name": "Vampiric",    "desc": "Heal 15% of damage dealt"},
    {"name": "Tough Skin",  "desc": "+10% DEF permanently"},
    {"name": "Sharp Edge",  "desc": "+10% ATK permanently"},
    {"name": "Lucky",       "desc": "+5% CRIT chance permanently"},
    {"name": "Merchant",    "desc": "Shop prices -20%"},
    {"name": "Scavenger",   "desc": "Find extra gold on floors"},
]

ENEMY_TYPES = [
    {"name": "Slime",    "emoji": "blob",   "floors": (1, 10),  "base_hp": 30,  "base_atk": 8,  "base_def": 3},
    {"name": "Rat",      "emoji": "rat",    "floors": (1, 20),  "base_hp": 40,  "base_atk": 12, "base_def": 4},
    {"name": "Goblin",   "emoji": "goblin", "floors": (5, 30),  "base_hp": 55,  "base_atk": 15, "base_def": 6},
    {"name": "Wolf",     "emoji": "wolf",   "floors": (10, 40), "base_hp": 70,  "base_atk": 18, "base_def": 8},
    {"name": "Skeleton", "emoji": "skull",  "floors": (15, 50), "base_hp": 80,  "base_atk": 20, "base_def": 10},
    {"name": "Orc",      "emoji": "ogre",   "floors": (25, 60), "base_hp": 110, "base_atk": 24, "base_def": 14},
    {"name": "Troll",    "emoji": "troll",  "floors": (35, 70), "base_hp": 140, "base_atk": 28, "base_def": 18},
    {"name": "Vampire",  "emoji": "vamp",   "floors": (50, 80), "base_hp": 120, "base_atk": 32, "base_def": 20},
    {"name": "Demon",    "emoji": "demon",  "floors": (60, 95), "base_hp": 160, "base_atk": 38, "base_def": 24},
    {"name": "Dragon",   "emoji": "dragon", "floors": (75, 100),"base_hp": 200, "base_atk": 45, "base_def": 30},
]

BOSS_POOL = [
    {"name": "King Slime",       "emoji": "[KING SLIME]",       "type": "Rock"},
    {"name": "Rat King",         "emoji": "[RAT KING]",         "type": "Scissors"},
    {"name": "Goblin Chief",     "emoji": "[GOBLIN CHIEF]",     "type": "Paper"},
    {"name": "Alpha Wolf",       "emoji": "[ALPHA WOLF]",       "type": "Rock"},
    {"name": "Lich",             "emoji": "[LICH]",             "type": "Paper"},
    {"name": "War Orc",          "emoji": "[WAR ORC]",          "type": "Rock"},
    {"name": "Stone Troll",      "emoji": "[STONE TROLL]",      "type": "Rock"},
    {"name": "Blood Vampire",    "emoji": "[BLOOD VAMPIRE]",    "type": "Scissors"},
    {"name": "Arch Demon",       "emoji": "[ARCH DEMON]",       "type": "Paper"},
    {"name": "Elder Dragon",     "emoji": "[ELDER DRAGON]",     "type": "Rock"},
    {"name": "Plague Doctor",    "emoji": "[PLAGUE DOCTOR]",    "type": "Paper"},
    {"name": "Banshee",          "emoji": "[BANSHEE]",          "type": "Scissors"},
    {"name": "Iron Golem",       "emoji": "[IRON GOLEM]",       "type": "Rock"},
    {"name": "Necromancer",      "emoji": "[NECROMANCER]",      "type": "Paper"},
    {"name": "Pirate Captain",   "emoji": "[PIRATE CAPTAIN]",   "type": "Scissors"},
    {"name": "Frost Giant",      "emoji": "[FROST GIANT]",      "type": "Rock"},
    {"name": "Shadow Assassin",  "emoji": "[SHADOW ASSASSIN]",  "type": "Scissors"},
    {"name": "Lava Titan",       "emoji": "[LAVA TITAN]",       "type": "Rock"},
    {"name": "Storm Witch",      "emoji": "[STORM WITCH]",      "type": "Paper"},
    {"name": "Void Reaper",      "emoji": "[VOID REAPER]",      "type": "Scissors"},
    {"name": "Cursed Knight",    "emoji": "[CURSED KNIGHT]",    "type": "Rock"},
    {"name": "Sea Serpent",      "emoji": "[SEA SERPENT]",      "type": "Paper"},
    {"name": "Chimera",          "emoji": "[CHIMERA]",          "type": "Rock"},
    {"name": "Death Knight",     "emoji": "[DEATH KNIGHT]",     "type": "Scissors"},
    {"name": "Phoenix",          "emoji": "[PHOENIX]",          "type": "Paper"},
    {"name": "Kraken",           "emoji": "[KRAKEN]",           "type": "Paper"},
    {"name": "Wyvern",           "emoji": "[WYVERN]",           "type": "Rock"},
    {"name": "Mind Flayer",      "emoji": "[MIND FLAYER]",      "type": "Scissors"},
    {"name": "Colossus",         "emoji": "[COLOSSUS]",         "type": "Rock"},
    {"name": "Abyssal Horror",   "emoji": "[ABYSSAL HORROR]",   "type": "Scissors"},
]

GUARDIAN_BOSSES = {
    30: {"name": "Guardian of Stone", "emoji": "[GUARDIAN OF STONE]", "type": "Rock",     "stat_mult": 1.5},
    60: {"name": "Guardian of Wind",  "emoji": "[GUARDIAN OF WIND]",  "type": "Paper",    "stat_mult": 1.5},
    90: {"name": "Guardian of Blades","emoji": "[GUARDIAN OF BLADES]","type": "Scissors", "stat_mult": 1.5},
}

FINAL_BOSS = {
    "name": "The RPS Overlord",
    "emoji": "[THE RPS OVERLORD]",
    "phase1": {"hp_mult": 3.0, "atk_mult": 2.5, "def_mult": 2.5},
    "phase2": {"hp_mult": 2.0, "atk_mult": 3.5, "def_mult": 1.5},
}

SHOP_ITEMS = [
    {"name": "Small Potion",    "emoji": "[Potion]",   "cost": 20,  "type": "consumable", "effect": "heal",       "value": 30,  "rarity": "Common"},
    {"name": "Medium Potion",   "emoji": "[Potion+]",  "cost": 40,  "type": "consumable", "effect": "heal",       "value": 60,  "rarity": "Uncommon"},
    {"name": "Large Potion",    "emoji": "[Potion++]", "cost": 70,  "type": "consumable", "effect": "heal",       "value": 100, "rarity": "Rare"},
    {"name": "Max Potion",      "emoji": "[MaxPot]",   "cost": 120, "type": "consumable", "effect": "heal_full",  "value": 0,   "rarity": "Epic"},
    {"name": "Bomb",            "emoji": "[Bomb]",     "cost": 35,  "type": "consumable", "effect": "damage",     "value": 50,  "rarity": "Common"},
    {"name": "Smoke Bomb",      "emoji": "[Smoke]",    "cost": 25,  "type": "consumable", "effect": "escape",     "value": 0,   "rarity": "Uncommon"},
    {"name": "PP Restore",      "emoji": "[PP]",       "cost": 30,  "type": "consumable", "effect": "pp_restore", "value": 5,   "rarity": "Common"},
    {"name": "Full PP Restore", "emoji": "[PPMax]",    "cost": 80,  "type": "consumable", "effect": "pp_full",    "value": 0,   "rarity": "Rare"},
    {"name": "Shield Potion",   "emoji": "[Shield]",   "cost": 45,  "type": "consumable", "effect": "shield",     "value": 40,  "rarity": "Uncommon"},
    {"name": "Revive Crystal",  "emoji": "[Revive]",   "cost": 150, "type": "consumable", "effect": "revive",     "value": 50,  "rarity": "Epic"},
    {"name": "Mystery Box",     "emoji": "[?Box]",     "cost": 50,  "type": "consumable", "effect": "mystery",    "value": 0,   "rarity": "Rare"},
    {"name": "Power Sword",     "emoji": "[Sword]",    "cost": 100, "type": "permanent",  "effect": "atk_up",     "value": 10,  "rarity": "Rare"},
    {"name": "Iron Armor",      "emoji": "[Armor]",    "cost": 100, "type": "permanent",  "effect": "def_up",     "value": 10,  "rarity": "Rare"},
    {"name": "Lucky Charm",     "emoji": "[Charm]",    "cost": 80,  "type": "permanent",  "effect": "crit_up",    "value": 5,   "rarity": "Uncommon"},
    {"name": "Speed Boots",     "emoji": "[Boots]",    "cost": 90,  "type": "permanent",  "effect": "spd_up",     "value": 8,   "rarity": "Uncommon"},
    {"name": "HP Crystal",      "emoji": "[HPCryst]",  "cost": 110, "type": "permanent",  "effect": "hp_up",      "value": 20,  "rarity": "Rare"},
]

ENCOUNTERS = [
    {
        "name": "Mysterious Merchant",
        "emoji": "[Merchant]",
        "desc": "A hooded figure offers rare wares at a steep discount.",
        "choices": [
            {"text": "Buy a random rare item (50g)",  "action": "buy_rare"},
            {"text": "Trade a perk for gold (+100g)", "action": "sell_perk"},
            {"text": "Leave",                         "action": "leave"},
        ]
    },
    {
        "name": "Wishing Well",
        "emoji": "[Well]",
        "desc": "A shimmering well hums with ancient energy.",
        "choices": [
            {"text": "Toss 30g (random stat +5)",     "action": "wish_stat"},
            {"text": "Toss 80g (full heal)",          "action": "wish_heal"},
            {"text": "Leave the well alone",          "action": "leave"},
        ]
    },
    {
        "name": "Lost Spirit",
        "emoji": "[Spirit]",
        "desc": "A wandering spirit begs for help crossing over.",
        "choices": [
            {"text": "Help the spirit (gain XP)",     "action": "spirit_xp"},
            {"text": "Absorb the spirit (gain HP)",   "action": "spirit_hp"},
            {"text": "Banish the spirit (gain gold)", "action": "spirit_gold"},
        ]
    },
    {
        "name": "Gambler's Den",
        "emoji": "[Dice]",
        "desc": "A shady den. A skeleton rattles dice on a table.",
        "choices": [
            {"text": "Bet 30g (50/50 triple or lose)", "action": "gamble_low"},
            {"text": "Bet 80g (50/50 triple or lose)", "action": "gamble_high"},
            {"text": "Walk away",                      "action": "leave"},
        ]
    },
    {
        "name": "Fortune Teller",
        "emoji": "[Crystal]",
        "desc": "A cloaked seer gazes into a crystal ball.",
        "choices": [
            {"text": "Ask about next boss (preview)",  "action": "fortune_boss"},
            {"text": "Ask for power (random perk)",    "action": "fortune_perk"},
            {"text": "Ignore the seer",                "action": "leave"},
        ]
    },
    {
        "name": "Blacksmith",
        "emoji": "[Anvil]",
        "desc": "A sturdy dwarf hammers at his forge.",
        "choices": [
            {"text": "Upgrade a move (power +5)",      "action": "smith_move"},
            {"text": "Reinforce armor (DEF +8)",       "action": "smith_def"},
            {"text": "Walk on",                        "action": "leave"},
        ]
    },
    {
        "name": "Field Hospital",
        "emoji": "[Cross]",
        "desc": "A makeshift camp with a tired healer.",
        "choices": [
            {"text": "Rest and heal (heal 40% HP)",    "action": "hospital_heal"},
            {"text": "Donate blood (lose 20 HP, +60g)","action": "hospital_donate"},
            {"text": "Move along",                     "action": "leave"},
        ]
    },
    {
        "name": "Dark Shrine",
        "emoji": "[Shrine]",
        "desc": "An ominous altar pulses with dark energy.",
        "choices": [
            {"text": "Offer HP (lose 30, ATK +15)",    "action": "shrine_atk"},
            {"text": "Offer gold (lose 50g, random buff)", "action": "shrine_buff"},
            {"text": "Leave the shrine be",            "action": "leave"},
        ]
    },
    {
        "name": "Abandoned Camp",
        "emoji": "[Tent]",
        "desc": "A hastily abandoned campsite with scattered supplies.",
        "choices": [
            {"text": "Search for supplies (random item)", "action": "camp_search"},
            {"text": "Rest here (heal 25 HP)",         "action": "camp_rest"},
            {"text": "Keep moving",                    "action": "leave"},
        ]
    },
    {
        "name": "Wounded Creature",
        "emoji": "[Paw]",
        "desc": "A wounded creature whimpers in the path.",
        "choices": [
            {"text": "Heal it (spend 20 HP, gain ally buff)", "action": "creature_heal"},
            {"text": "Pass by quietly (gain 30g)",     "action": "creature_pass"},
            {"text": "Keep walking",                   "action": "leave"},
        ]
    },
]

# ─────────────────────────────────────────────
# MOVE DEFINITIONS
# ─────────────────────────────────────────────

def make_move(name, mtype, power, accuracy, pp, effect=None):
    return {"name": name, "type": mtype, "power": power, "accuracy": accuracy, "pp": pp, "pp_max": pp, "effect": effect}

STONE_MOVES = [
    make_move("Rock Throw",     "Rock",     40, 95, 20),
    make_move("Boulder Smash",  "Rock",     65, 85, 15, "stun_10"),
    make_move("Earthquake",     "Rock",     80, 75, 10, "lower_def"),
    make_move("Meteor Strike",  "Rock",    110, 65, 5,  "high_crit"),
    make_move("Stone Wall",     "Rock",     20, 100,20, "raise_def"),
    make_move("Avalanche",      "Rock",     90, 70, 8,  "stun_20"),
    make_move("Core Drill",     "Rock",    130, 60, 5,  "armor_pierce"),
]

PAPER_MOVES = [
    make_move("Paper Slash",    "Paper",    35, 100,25),
    make_move("Wrap",           "Paper",    50, 90, 15, "stun_turn"),
    make_move("Origami Blade",  "Paper",    70, 85, 12),
    make_move("Ink Storm",      "Paper",    85, 80, 10, "lower_atk"),
    make_move("Library Crush",  "Paper",   100, 75, 8,  "high_crit"),
    make_move("Paper Coffin",   "Paper",   120, 65, 5,  "stun_turn"),
    make_move("Tome of Doom",   "Paper",   150, 55, 3,  "lower_def"),
]

SCISSORS_MOVES = [
    make_move("Quick Snip",     "Scissors", 30, 100,25),
    make_move("Critical Cut",   "Scissors", 55, 90, 15, "double_crit"),
    make_move("Blade Dance",    "Scissors", 70, 85, 12, "multi_hit"),
    make_move("Shred",          "Scissors", 85, 80, 10, "bleed"),
    make_move("Razor Wind",     "Scissors", 100,75, 8),
    make_move("Twin Blades",    "Scissors", 60, 90, 10, "hits_twice"),
    make_move("Final Snip",     "Scissors", 160,55, 3,  "high_crit"),
]

DYNAMITE_MOVES = [
    make_move("Spark",          "Rock",     40, 95, 20),
    make_move("Explosion",      "Rock",     80, 80, 12, "aoe_50"),
    make_move("Napalm",         "Paper",    70, 85, 12, "bleed"),
    make_move("Megaton Blast",  "Rock",    120, 65, 6,  "stun_20"),
    make_move("Shrapnel",       "Scissors", 50, 90, 15, "multi_hit"),
    make_move("Nuke",           "Rock",    200, 50, 2,  "recoil_30"),
]

SHIELD_MOVES = [
    make_move("Shield Bash",    "Rock",     45, 95, 20),
    make_move("Counter",        "Rock",     60, 90, 15, "counter"),
    make_move("Fortress",       "Rock",     20, 100,15, "raise_def_big"),
    make_move("Parry",          "Scissors", 50, 95, 15, "counter"),
    make_move("Iron Wall",      "Rock",     30, 100,10, "shield_self"),
    make_move("Retaliate",      "Rock",     90, 80, 8,  "after_hit"),
]

GLUE_MOVES = [
    make_move("Sticky Shot",    "Paper",    30, 95, 20, "lower_spd"),
    make_move("Glue Trap",      "Paper",    50, 90, 15, "stun_turn"),
    make_move("Adhesive Web",   "Paper",    40, 90, 15, "lower_def"),
    make_move("Viscous Wave",   "Paper",    70, 80, 10, "lower_atk"),
    make_move("Hardened Shell", "Rock",     20, 100,15, "raise_def"),
    make_move("Dissolution",    "Paper",   100, 70, 6,  "lower_all"),
]

MAGNET_MOVES = [
    make_move("Attract",        "Paper",    35, 95, 20, "steal_buff"),
    make_move("Repel",          "Rock",     50, 90, 15, "lower_atk"),
    make_move("Magnetic Pulse", "Rock",     70, 85, 12, "lower_def"),
    make_move("Polarity Flip",  "Scissors", 80, 80, 10, "steal_buff"),
    make_move("Iron Rain",      "Rock",     90, 75, 8),
    make_move("Singularity",    "Rock",    130, 60, 4,  "lower_all"),
]

CHARACTER_MOVES = {
    "Stone":    STONE_MOVES,
    "Paper":    PAPER_MOVES,
    "Scissors": SCISSORS_MOVES,
    "Dynamite": DYNAMITE_MOVES,
    "Shield":   SHIELD_MOVES,
    "Glue":     GLUE_MOVES,
    "Magnet":   MAGNET_MOVES,
}

LEARN_LEVELS = [5, 10, 15, 25, 40]

# ─────────────────────────────────────────────
# ARTIFACTS
# ─────────────────────────────────────────────

ARTIFACTS = {
    "Stone": [
        {"name": "Obsidian Heart",   "desc": "ATK +15, DEF +10"},
        {"name": "Ancient Bedrock",  "desc": "Max HP +40, DEF +8"},
        {"name": "Tectonic Core",    "desc": "Rock moves +20% power"},
        {"name": "Granite Fist",     "desc": "CRIT +10%, ATK +10"},
        {"name": "Stone Skin",       "desc": "Take 10% less damage"},
        {"name": "Petrify Aura",     "desc": "10% chance to stun on hit"},
        {"name": "Earthbound Seal",  "desc": "Max PP +5 for all moves"},
        {"name": "Boulder Shield",   "desc": "First hit each fight: ignore damage"},
        {"name": "Geode Fragment",   "desc": "Heal 8 HP each turn"},
        {"name": "World Pillar",     "desc": "DEF doubles when below 30% HP"},
    ],
    "Paper": [
        {"name": "Ancient Scroll",   "desc": "Paper moves +20% power"},
        {"name": "Ink Well",         "desc": "ATK +12, SPD +8"},
        {"name": "Library Key",      "desc": "Learn one extra move slot (5 total)"},
        {"name": "Papyrus Shield",   "desc": "Max HP +30, DEF +12"},
        {"name": "Blank Canvas",     "desc": "PP restores +2 per floor"},
        {"name": "Origami Crane",    "desc": "SPD +15, CRIT +8%"},
        {"name": "Tome of Wisdom",   "desc": "Gain +10% XP from all fights"},
        {"name": "Paper Fortress",   "desc": "DEF +20 when HP < 50%"},
        {"name": "Ink Vampire",      "desc": "Heal 12% of damage dealt"},
        {"name": "Void Page",        "desc": "Once per fight: negate lethal hit (survive at 1 HP)"},
    ],
    "Scissors": [
        {"name": "Twin Fang Blades", "desc": "CRIT +15%, ATK +8"},
        {"name": "Razor Focus",      "desc": "First turn: guaranteed crit"},
        {"name": "Blood Edge",       "desc": "Bleeding targets take 20% more damage"},
        {"name": "Speed Scalpel",    "desc": "SPD +20, CRIT +5%"},
        {"name": "Executioner's Shear", "desc": "+50% damage vs enemies below 25% HP"},
        {"name": "Glass Blade",      "desc": "ATK +25 but DEF -10"},
        {"name": "Dual Wield Charm", "desc": "Multi-hit moves +1 extra hit"},
        {"name": "Predator's Eye",   "desc": "See enemy HP and moves"},
        {"name": "Whirlwind Anklet", "desc": "SPD +12; outrunning enemy = +10% dmg"},
        {"name": "Crimson Edge",     "desc": "Bleeds deal 15 HP/turn (up from 8)"},
    ],
    "Dynamite": [
        {"name": "Blast Radius",     "desc": "AoE moves +30% power"},
        {"name": "Fuse Upgrade",     "desc": "Explosion-type move PP +5"},
        {"name": "Shrapnel Core",    "desc": "Multi-hit +1 extra hit"},
        {"name": "Nitro Flask",      "desc": "ATK +20 for 3 turns after using Nuke"},
        {"name": "Detonator Helm",   "desc": "CRIT +12%, ATK +8"},
        {"name": "Pyromaniac",       "desc": "All attacks cause bleed 20% of the time"},
        {"name": "Chain Reaction",   "desc": "Killing blow causes 30 splash damage"},
        {"name": "Volatile Core",    "desc": "On death: deal 80 damage to enemy"},
        {"name": "Smoke Screen",     "desc": "Enemies miss 15% more often"},
        {"name": "Mega Bomb",        "desc": "Bomb item deals double damage"},
    ],
    "Shield": [
        {"name": "Aegis Fragment",   "desc": "Counter deals +50% damage"},
        {"name": "Mirror Plate",     "desc": "Reflect 20% of damage taken"},
        {"name": "Iron Bulwark",     "desc": "DEF +20, Max HP +30"},
        {"name": "Parry Master",     "desc": "Parry PP +5, +15% counter bonus"},
        {"name": "Invincible Wall",  "desc": "Once per fight: block all damage for 1 turn"},
        {"name": "Guardian Crest",   "desc": "ATK +10, DEF +10"},
        {"name": "Fortress Plate",   "desc": "Take 15% less damage always"},
        {"name": "Reactive Armor",   "desc": "DEF increases by 2 each turn of combat"},
        {"name": "Shield Spike",     "desc": "Enemies who hit you take 10 damage back"},
        {"name": "Unbreakable Oath", "desc": "Cannot be stunned"},
    ],
    "Glue": [
        {"name": "Adhesive Aura",    "desc": "All hits have 25% chance to lower enemy SPD"},
        {"name": "Trap Network",     "desc": "Glue Trap PP +5, stun 2 turns"},
        {"name": "Viscous Shell",    "desc": "DEF +15, ATK -5 (net positive)"},
        {"name": "Debuff Master",    "desc": "All debuffs last 1 extra turn"},
        {"name": "Symbiote Slime",   "desc": "Heal 10 HP whenever enemy is debuffed"},
        {"name": "Corrosive Gel",    "desc": "Lower DEF also reduces max DEF by 5"},
        {"name": "Static Glue",      "desc": "Stunned enemies take +25% damage"},
        {"name": "Gluey Reflexes",   "desc": "SPD +10, dodge 10% of attacks"},
        {"name": "Tar Bomb",         "desc": "Once per fight: lower enemy ATK by 20"},
        {"name": "Molecular Bond",   "desc": "When you survive lethal: all stats +5"},
    ],
    "Magnet": [
        {"name": "Polarity Core",    "desc": "Steal buff success +30%"},
        {"name": "Lodestone Heart",  "desc": "ATK +8 for each buff stolen"},
        {"name": "Magnetic Field",   "desc": "Enemy SPD -5 permanently in combat"},
        {"name": "Repulsion Mantle", "desc": "10% chance to reflect projectile moves"},
        {"name": "Attract Mastery",  "desc": "Attract PP +5, steal 2 buffs at once"},
        {"name": "Iron Harvest",     "desc": "Gain +10g for each enemy buff stolen"},
        {"name": "Gravity Well",     "desc": "Singularity power +30"},
        {"name": "Magnetar",         "desc": "All stats +5 when all enemy buffs stolen"},
        {"name": "Flux Regulator",   "desc": "DEF +12, never lose buffs"},
        {"name": "Arc Reactor",      "desc": "SPD +15, Iron Rain +20 power"},
    ],
}

# ─────────────────────────────────────────────
# CHARACTER DEFINITIONS
# ─────────────────────────────────────────────

STARTER_CHARACTERS = [
    {
        "id": "Stone", "name": "Stone", "emoji": "[Rock]",
        "hp": 150, "atk": 30, "def": 20, "spd": 10, "crit": 5,
        "special": "Fortify",
        "special_desc": "Block 50% damage next hit",
        "cost": 0,
        "desc": "High DEF tank. Slow but unstoppable.",
        "evolutions": {
            25: [
                {"name": "Granite Warrior", "stat_boost": {"def": 15, "hp": 30}, "new_move_idx": 4},
                {"name": "Iron Fist",       "stat_boost": {"atk": 20, "crit": 5}, "new_move_idx": 3},
            ],
            50: {
                "Granite Warrior": [
                    {"name": "Mountain Fortress", "stat_boost": {"def": 20, "hp": 40}, "new_move_idx": 6},
                    {"name": "Living Bastion",    "stat_boost": {"def": 15, "hp": 20, "atk": 10}, "new_move_idx": 5},
                ],
                "Iron Fist": [
                    {"name": "Wrecking Ball",     "stat_boost": {"atk": 25, "crit": 10}, "new_move_idx": 6},
                    {"name": "Siege Breaker",     "stat_boost": {"atk": 15, "def": 10, "crit": 5}, "new_move_idx": 5},
                ],
            }
        }
    },
    {
        "id": "Paper", "name": "Paper", "emoji": "[Scroll]",
        "hp": 100, "atk": 35, "def": 12, "spd": 18, "crit": 8,
        "special": "Wrap",
        "special_desc": "Stun enemy for 1 turn",
        "cost": 0,
        "desc": "Balanced fighter. Versatile and adaptable.",
        "evolutions": {
            25: [
                {"name": "Sage",       "stat_boost": {"spd": 12, "atk": 10}, "new_move_idx": 4},
                {"name": "Archivist", "stat_boost": {"hp": 25, "def": 8}, "new_move_idx": 3},
            ],
            50: {
                "Sage": [
                    {"name": "Grand Sage",     "stat_boost": {"spd": 15, "atk": 15, "crit": 8}, "new_move_idx": 6},
                    {"name": "Battle Scholar", "stat_boost": {"spd": 10, "atk": 20}, "new_move_idx": 5},
                ],
                "Archivist": [
                    {"name": "War Archivist",  "stat_boost": {"hp": 30, "def": 15, "atk": 5}, "new_move_idx": 6},
                    {"name": "Living Library", "stat_boost": {"hp": 20, "def": 10, "spd": 10}, "new_move_idx": 5},
                ],
            }
        }
    },
    {
        "id": "Scissors", "name": "Scissors", "emoji": "[Scissors]",
        "hp": 75, "atk": 45, "def": 8, "spd": 22, "crit": 15,
        "special": "Critical Cut",
        "special_desc": "2x damage on next attack",
        "cost": 0,
        "desc": "High ATK/CRIT glass cannon. Fast and lethal.",
        "evolutions": {
            25: [
                {"name": "Blade Dancer",  "stat_boost": {"spd": 15, "crit": 10}, "new_move_idx": 4},
                {"name": "Executioner",   "stat_boost": {"atk": 20, "crit": 5}, "new_move_idx": 3},
            ],
            50: {
                "Blade Dancer": [
                    {"name": "Whirlwind",     "stat_boost": {"spd": 20, "crit": 12, "atk": 5}, "new_move_idx": 6},
                    {"name": "Shadow Blade",  "stat_boost": {"spd": 15, "crit": 8, "atk": 10}, "new_move_idx": 5},
                ],
                "Executioner": [
                    {"name": "Grand Reaper",  "stat_boost": {"atk": 25, "crit": 10}, "new_move_idx": 6},
                    {"name": "Blood Reaper",  "stat_boost": {"atk": 20, "crit": 8, "spd": 5}, "new_move_idx": 5},
                ],
            }
        }
    },
]

UNLOCKABLE_CHARACTERS = [
    {
        "id": "Dynamite", "name": "Dynamite", "emoji": "[Dynamite]",
        "hp": 90, "atk": 42, "def": 10, "spd": 14, "crit": 12,
        "special": "Chain Blast",
        "special_desc": "Deal 60 damage + 30 splash",
        "cost": 10,
        "desc": "AoE hybrid. Explosive damage dealer.",
        "evolutions": {25: [], 50: {}}
    },
    {
        "id": "Shield", "name": "Shield", "emoji": "[Shield]",
        "hp": 130, "atk": 28, "def": 25, "spd": 12, "crit": 5,
        "special": "Iron Guard",
        "special_desc": "Counter next attack for 2x damage",
        "cost": 15,
        "desc": "Tank/counter. Punishes aggressive enemies.",
        "evolutions": {25: [], 50: {}}
    },
    {
        "id": "Glue", "name": "Glue", "emoji": "[Glue]",
        "hp": 85, "atk": 32, "def": 14, "spd": 16, "crit": 8,
        "special": "Adhesive Trap",
        "special_desc": "Lower enemy SPD by 10, stun 50%",
        "cost": 20,
        "desc": "Trap/debuff specialist. Control the battlefield.",
        "evolutions": {25: [], 50: {}}
    },
    {
        "id": "Magnet", "name": "Magnet", "emoji": "[Magnet]",
        "hp": 95, "atk": 36, "def": 15, "spd": 18, "crit": 10,
        "special": "Steal Aura",
        "special_desc": "Steal all enemy buffs",
        "cost": 25,
        "desc": "Buff stealer. Gets stronger as enemies do.",
        "evolutions": {25: [], 50: {}}
    },
]

ALL_CHARACTERS = STARTER_CHARACTERS + UNLOCKABLE_CHARACTERS

# ─────────────────────────────────────────────
# UTILITY FUNCTIONS
# ─────────────────────────────────────────────

def clear():
    os.system("cls" if os.name == "nt" else "clear")

def pause(msg="Press ENTER to continue..."):
    input(f"\n  {msg}")

def hp_bar(current, maximum, width=20):
    if maximum <= 0:
        maximum = 1
    filled = int(width * max(0, current) / maximum)
    bar = "[" + "#" * filled + "." * (width - filled) + "]"
    return f"{bar} {max(0,current)}/{maximum}"

def weighted_choice(choices, weights):
    total = sum(weights)
    r = random.uniform(0, total)
    cumulative = 0
    for choice, weight in zip(choices, weights):
        cumulative += weight
        if r <= cumulative:
            return choice
    return choices[-1]

def roll_rarity():
    names = list(RARITY_WEIGHTS.keys())
    weights = list(RARITY_WEIGHTS.values())
    return weighted_choice(names, weights)

def type_effectiveness(move_type, target_type):
    return TYPE_CHART.get((move_type, target_type), 1.0)

def ensure_save_dir():
    os.makedirs(SAVE_DIR, exist_ok=True)

def load_meta():
    ensure_save_dir()
    if os.path.exists(META_FILE):
        try:
            with open(META_FILE, "r") as f:
                return json.load(f)
        except Exception:
            pass
    return {"soul_crystals": 0, "unlocked_chars": [], "eternal_upgrades": {}}

def save_meta(meta):
    ensure_save_dir()
    with open(META_FILE, "w") as f:
        json.dump(meta, f, indent=2)

def load_saves():
    ensure_save_dir()
    if os.path.exists(SAVE_FILE):
        try:
            with open(SAVE_FILE, "r") as f:
                return json.load(f)
        except Exception:
            pass
    return {1: None, 2: None, 3: None}

def save_game(slot, state):
    saves = load_saves()
    saves[str(slot)] = state
    with open(SAVE_FILE, "w") as f:
        json.dump(saves, f, indent=2)

def delete_save(slot):
    saves = load_saves()
    saves[str(slot)] = None
    with open(SAVE_FILE, "w") as f:
        json.dump(saves, f, indent=2)

def print_title():
    clear()
    print("=" * 60)
    print("       RPS LEGENDS  -  A Rock-Paper-Scissors Roguelike")
    print("=" * 60)

def print_separator(char="-", width=60):
    print(char * width)

def get_input(prompt, valid=None, allow_empty=False):
    while True:
        raw = input(prompt).strip()
        if allow_empty and raw == "":
            return raw
        if valid is None:
            if raw:
                return raw
        else:
            if raw in valid:
                return raw
        print("  Invalid input. Try again.")

# ─────────────────────────────────────────────
# PLAYER CLASS
# ─────────────────────────────────────────────

class Player:
    def __init__(self, char_data, meta):
        self.char_id    = char_data["id"]
        self.name       = char_data["name"]
        self.emoji      = char_data["emoji"]
        self.special    = char_data["special"]
        self.special_desc = char_data["special_desc"]
        self.evolutions = char_data.get("evolutions", {})
        self.evo_path   = None   # set at floor 25
        self.evo_path2  = None   # set at floor 50

        base_atk = char_data["atk"]
        base_def = char_data["def"]
        base_spd = char_data["spd"]
        base_crit = char_data["crit"]

        eternal = meta.get("eternal_upgrades", {})
        self.max_hp    = char_data["hp"] + eternal.get("hp", 0)
        self.hp        = self.max_hp
        self.atk       = base_atk + eternal.get("atk", 0)
        self.def_       = base_def + eternal.get("def", 0)
        self.spd       = base_spd + eternal.get("spd", 0)
        self.crit      = base_crit + eternal.get("crit", 0)

        self.level     = 1
        self.xp        = 0
        self.xp_to_next = 30
        self.gold      = 50
        self.floor     = 1

        all_moves      = CHARACTER_MOVES.get(self.char_id, [])
        self.move_pool = [dict(m) for m in all_moves]
        self.moves     = [dict(all_moves[0]), dict(all_moves[1])]
        self.special_uses = 3

        self.inventory  = []
        self.perks      = []
        self.artifacts  = []
        self.stat_points = 0
        self.shield_hp  = 0

        # status effects
        self.stunned       = False
        self.crit_boost    = False
        self.damage_block  = False
        self.buffs         = {}   # {"atk": +n, "def": +n, ...}
        self.debuffs       = {}
        self.bleed         = 0
        self.reactive_armor = 0
        self.void_page     = False
        self.first_turn    = True
        self.combat_def_bonus = 0

    def to_dict(self):
        return {
            "char_id": self.char_id, "name": self.name, "emoji": self.emoji,
            "special": self.special, "special_desc": self.special_desc,
            "evo_path": self.evo_path, "evo_path2": self.evo_path2,
            "max_hp": self.max_hp, "hp": self.hp, "atk": self.atk,
            "def_": self.def_, "spd": self.spd, "crit": self.crit,
            "level": self.level, "xp": self.xp, "xp_to_next": self.xp_to_next,
            "gold": self.gold, "floor": self.floor,
            "moves": self.moves, "move_pool": self.move_pool,
            "special_uses": self.special_uses,
            "inventory": self.inventory, "perks": self.perks, "artifacts": self.artifacts,
            "stat_points": self.stat_points,
        }

    @classmethod
    def from_dict(cls, d, meta):
        # Find char data
        char_data = None
        for c in ALL_CHARACTERS:
            if c["id"] == d["char_id"]:
                char_data = c
                break
        if char_data is None:
            char_data = ALL_CHARACTERS[0]
        p = cls.__new__(cls)
        p.char_id    = d["char_id"]
        p.name       = d["name"]
        p.emoji      = d["emoji"]
        p.special    = d["special"]
        p.special_desc = d["special_desc"]
        char = next((c for c in ALL_CHARACTERS if c["id"] == d["char_id"]), ALL_CHARACTERS[0])
        p.evolutions = char.get("evolutions", {})
        p.evo_path   = d.get("evo_path")
        p.evo_path2  = d.get("evo_path2")
        p.max_hp     = d["max_hp"]
        p.hp         = d["hp"]
        p.atk        = d["atk"]
        p.def_       = d["def_"]
        p.spd        = d["spd"]
        p.crit       = d["crit"]
        p.level      = d["level"]
        p.xp         = d["xp"]
        p.xp_to_next = d["xp_to_next"]
        p.gold       = d["gold"]
        p.floor      = d["floor"]
        p.moves      = d["moves"]
        p.move_pool  = d.get("move_pool", [dict(m) for m in CHARACTER_MOVES.get(d["char_id"], [])])
        p.special_uses = d.get("special_uses", 3)
        p.inventory  = d.get("inventory", [])
        p.perks      = d.get("perks", [])
        p.artifacts  = d.get("artifacts", [])
        p.stat_points = d.get("stat_points", 0)
        p.shield_hp  = 0
        p.stunned    = False
        p.crit_boost = False
        p.damage_block = False
        p.buffs      = {}
        p.debuffs    = {}
        p.bleed      = 0
        p.reactive_armor = 0
        p.void_page  = False
        p.first_turn = True
        p.combat_def_bonus = 0
        return p

    def effective_atk(self):
        total = self.atk + self.buffs.get("atk", 0) - self.debuffs.get("atk", 0)
        if "Sharp Edge" in [pk["name"] for pk in self.perks]:
            total = int(total * 1.1)
        return max(1, total)

    def effective_def(self):
        total = self.def_ + self.buffs.get("def", 0) - self.debuffs.get("def", 0) + self.combat_def_bonus
        if "Tough Skin" in [pk["name"] for pk in self.perks]:
            total = int(total * 1.1)
        return max(0, total)

    def effective_spd(self):
        total = self.spd + self.buffs.get("spd", 0) - self.debuffs.get("spd", 0)
        return max(1, total)

    def effective_crit(self):
        total = self.crit + self.buffs.get("crit", 0)
        if "Lucky" in [pk["name"] for pk in self.perks]:
            total += 5
        return min(75, total)

    def heal(self, amount):
        self.hp = min(self.max_hp, self.hp + amount)

    def take_damage(self, amount):
        if self.shield_hp > 0:
            if self.shield_hp >= amount:
                self.shield_hp -= amount
                return 0
            else:
                amount -= self.shield_hp
                self.shield_hp = 0
        if self.damage_block:
            amount = amount // 2
            self.damage_block = False
        # Void Page artifact
        if self.void_page and amount >= self.hp:
            self.hp = 1
            self.void_page = False
            return amount
        self.hp -= amount
        return amount

    def gain_xp(self, amount):
        msgs = []
        self.xp += amount
        while self.xp >= self.xp_to_next:
            self.xp -= self.xp_to_next
            self.level += 1
            self.xp_to_next = int(self.xp_to_next * 1.4)
            self.stat_points += 3
            msgs.append(f"Level Up! Now Lv{self.level}. +3 stat points!")
            # Check move learning
            learn_msg = self.check_learn_move()
            if learn_msg:
                msgs.append(learn_msg)
            # Perk at every 5 levels
            if self.level % 5 == 0:
                msgs.append("PERK_CHOICE")
        return msgs

    def check_learn_move(self):
        all_moves = CHARACTER_MOVES.get(self.char_id, [])
        for i, lv in enumerate(LEARN_LEVELS):
            if self.level == lv:
                move_idx = i + 2  # moves 3,4,5,6,7
                if move_idx < len(all_moves):
                    return f"NEW_MOVE:{move_idx}"
        return None

    def add_move(self, move):
        if len(self.moves) < 4:
            self.moves.append(dict(move))
            return f"Learned {move['name']}!"
        else:
            return "REPLACE_MOVE"

    def restore_pp(self, amount=5):
        for m in self.moves:
            m["pp"] = min(m["pp_max"], m["pp"] + amount)

    def restore_pp_full(self):
        for m in self.moves:
            m["pp"] = m["pp_max"]

    def show_stats(self):
        print(f"\n  {self.emoji} {self.name}  Lv{self.level}")
        print(f"  HP : {hp_bar(self.hp, self.max_hp)}")
        if self.shield_hp > 0:
            print(f"  Shield: {self.shield_hp}")
        print(f"  ATK:{self.atk} DEF:{self.def_} SPD:{self.spd} CRIT:{self.crit}%")
        print(f"  XP : {self.xp}/{self.xp_to_next}  Gold: {self.gold}g")
        print(f"  Floor: {self.floor}  Special: {self.special} ({self.special_uses} uses)")
        if self.evo_path:
            print(f"  Evolution: {self.evo_path}" + (f" > {self.evo_path2}" if self.evo_path2 else ""))
        if self.perks:
            print(f"  Perks: {', '.join(pk['name'] for pk in self.perks)}")
        if self.artifacts:
            print(f"  Artifacts: {', '.join(a['name'] for a in self.artifacts)}")
        if self.inventory:
            counts = {}
            for item in self.inventory:
                counts[item["name"]] = counts.get(item["name"], 0) + 1
            print(f"  Bag: {', '.join(f'{v}x {k}' for k,v in counts.items())}")

# ─────────────────────────────────────────────
# ENEMY CLASS
# ─────────────────────────────────────────────

def generate_enemy_moves(char_type, count=3):
    all_enemy_moves = []
    for mtype in ["Rock", "Paper", "Scissors"]:
        all_enemy_moves.append(make_move(f"{mtype} Strike", mtype, random.randint(30,55), 90, 20))
        all_enemy_moves.append(make_move(f"Heavy {mtype}", mtype, random.randint(60,85), 80, 12))
    all_enemy_moves.append(make_move("Wild Slash", "Scissors", 70, 85, 10))
    all_enemy_moves.append(make_move("Crush", "Rock", 80, 75, 8, "lower_def"))
    all_enemy_moves.append(make_move("Wrap Attack", "Paper", 55, 90, 12, "stun_10"))
    random.shuffle(all_enemy_moves)
    return all_enemy_moves[:count]

class Enemy:
    def __init__(self, etype, floor_num, is_boss=False, boss_data=None, multiplier=1.0):
        self.floor = floor_num
        self.is_boss = is_boss
        scale = 1.0 + (floor_num - 1) * 0.06

        if boss_data:
            self.name = boss_data["name"]
            self.emoji = boss_data["emoji"]
            btype = boss_data.get("type", "Rock")
            mult = boss_data.get("stat_mult", 1.0) * multiplier
            base = {"base_hp": 80, "base_atk": 20, "base_def": 10}
            self.max_hp  = int(base["base_hp"] * scale * 3 * mult)
            self.hp      = self.max_hp
            self.atk     = int(base["base_atk"] * scale * 2.5 * mult)
            self.def_    = int(base["base_def"] * scale * 2.5 * mult)
            self.spd     = int(10 * scale * mult)
            self.crit    = 10
            self.xp_reward   = int(80 * scale * mult)
            self.gold_reward = int(60 * scale * mult)
            self.sc_reward   = 1 if floor_num >= 50 else 0
            self.moves   = generate_enemy_moves(btype, 4)
            self.moves.append(make_move("Ultimate Strike", btype, int(100 * mult), 70, 3, "stun_turn"))
        else:
            self.name  = etype["name"]
            self.emoji = f"[{etype['emoji']}]"
            self.max_hp  = int(etype["base_hp"] * scale * multiplier)
            self.hp      = self.max_hp
            self.atk     = int(etype["base_atk"] * scale * multiplier)
            self.def_    = int(etype["base_def"] * scale * multiplier)
            self.spd     = int(8 * scale)
            self.crit    = 5
            self.xp_reward   = int(20 * scale)
            self.gold_reward = int(15 * scale)
            self.sc_reward   = 0
            self.moves   = generate_enemy_moves(etype["name"], random.randint(2, 4))

        self.stunned   = False
        self.buffs     = {}
        self.debuffs   = {}
        self.bleed     = 0

    def effective_atk(self):
        return max(1, self.atk + self.buffs.get("atk", 0) - self.debuffs.get("atk", 0))

    def effective_def(self):
        return max(0, self.def_ + self.buffs.get("def", 0) - self.debuffs.get("def", 0))

    def effective_spd(self):
        return max(1, self.spd - self.debuffs.get("spd", 0))

    def choose_move(self, player_type_hint="Rock"):
        available = [m for m in self.moves if m["pp"] > 0]
        if not available:
            for m in self.moves:
                m["pp"] = m["pp_max"]
            available = self.moves[:]
        # Prefer super-effective
        for m in available:
            if type_effectiveness(m["type"], player_type_hint) > 1.0:
                return m
        return random.choice(available)

    def show_hp(self):
        return f"{self.emoji} {self.name}  HP: {hp_bar(self.hp, self.max_hp)}"

# ─────────────────────────────────────────────
# COMBAT ENGINE
# ─────────────────────────────────────────────

def calc_damage(attacker_atk, move, target_def, crit_chance, attacker_type_hint="Rock", target_type_hint="Rock"):
    if random.random() * 100 > move["accuracy"]:
        return 0, False, "miss"
    effectiveness = type_effectiveness(move["type"], target_type_hint)
    is_crit = random.random() * 100 < crit_chance
    crit_mult = 2.0 if is_crit else 1.0
    raw = move["power"] * (attacker_atk / 50.0) * crit_mult * effectiveness
    damage = max(1, int(raw - target_def * 0.5))
    eff_str = "super effective" if effectiveness > 1.0 else ("not very effective" if effectiveness < 1.0 else "")
    return damage, is_crit, eff_str

def apply_move_effect(effect, attacker, target, msgs):
    if effect == "stun_10" and random.random() < 0.10:
        target.stunned = True
        msgs.append("Target is stunned!")
    elif effect == "stun_20" and random.random() < 0.20:
        target.stunned = True
        msgs.append("Target is stunned!")
    elif effect == "stun_turn":
        target.stunned = True
        msgs.append("Target is stunned for a turn!")
    elif effect == "lower_def":
        target.debuffs["def"] = target.debuffs.get("def", 0) + 8
        msgs.append("Target's DEF fell!")
    elif effect == "lower_atk":
        target.debuffs["atk"] = target.debuffs.get("atk", 0) + 8
        msgs.append("Target's ATK fell!")
    elif effect == "lower_spd":
        target.debuffs["spd"] = target.debuffs.get("spd", 0) + 6
        msgs.append("Target's SPD fell!")
    elif effect == "lower_all":
        target.debuffs["atk"] = target.debuffs.get("atk", 0) + 5
        target.debuffs["def"] = target.debuffs.get("def", 0) + 5
        target.debuffs["spd"] = target.debuffs.get("spd", 0) + 5
        msgs.append("Target's stats fell!")
    elif effect == "raise_def":
        attacker.buffs["def"] = attacker.buffs.get("def", 0) + 10
        msgs.append("DEF rose!")
    elif effect == "raise_def_big":
        attacker.buffs["def"] = attacker.buffs.get("def", 0) + 20
        msgs.append("DEF greatly rose!")
    elif effect == "high_crit":
        pass  # handled by crit_chance modifier
    elif effect == "double_crit":
        attacker.crit_boost = True
        msgs.append("Next hit has double CRIT chance!")
    elif effect == "bleed":
        target.bleed = max(target.bleed, 8)
        msgs.append("Target is bleeding!")
    elif effect == "multi_hit":
        pass  # handled in combat
    elif effect == "hits_twice":
        pass
    elif effect == "counter":
        attacker.buffs["counter"] = 1
        msgs.append("Primed for counter!")
    elif effect == "shield_self":
        if hasattr(attacker, "shield_hp"):
            attacker.shield_hp += 30
            msgs.append("Shield gained!")
    elif effect == "steal_buff":
        if hasattr(target, "buffs") and target.buffs:
            stolen_key = random.choice(list(target.buffs.keys()))
            val = target.buffs.pop(stolen_key)
            attacker.buffs[stolen_key] = attacker.buffs.get(stolen_key, 0) + val
            msgs.append(f"Stole {stolen_key} buff!")
    elif effect == "armor_pierce":
        target.debuffs["def"] = target.debuffs.get("def", 0) + 15
        msgs.append("Armor pierced!")
    elif effect == "recoil_30":
        if hasattr(attacker, "hp"):
            recoil = int(attacker.max_hp * 0.30)
            attacker.hp = max(1, attacker.hp - recoil)
            msgs.append(f"Recoil! Lost {recoil} HP!")
    elif effect == "aoe_50":
        pass  # treated as bonus damage in boss context

def run_combat(player, enemy, save_callback=None):
    """
    Main combat loop. Returns "win", "lose", or "escaped".
    """
    clear()
    print_separator("=")
    print(f"  BATTLE: {player.emoji} {player.name}  vs  {enemy.emoji} {enemy.name}")
    print_separator("=")
    time.sleep(0.5)

    # Reset per-combat state
    player.stunned     = False
    player.crit_boost  = False
    player.damage_block = False
    player.buffs       = {}
    player.debuffs     = {}
    player.bleed       = 0
    player.reactive_armor = 0
    player.first_turn  = True
    player.combat_def_bonus = 0

    # Artifact: Razor Focus -> guaranteed crit turn 1
    razor_focus = any(a["name"] == "Razor Focus" for a in player.artifacts)
    # Artifact: Boulder Shield -> negate first hit
    boulder_shield = any(a["name"] == "Boulder Shield" for a in player.artifacts)
    used_boulder_shield = False
    # Artifact: Void Page
    void_page_art = any(a["name"] == "Void Page" for a in player.artifacts)
    player.void_page = void_page_art
    # Artifact: Reactive Armor
    reactive_armor_art = any(a["name"] == "Reactive Armor" for a in player.artifacts)
    # Artifact: Mirror Plate
    mirror_plate = any(a["name"] == "Mirror Plate" for a in player.artifacts)
    mirror_plate_pct = 0.20 if mirror_plate else 0.0
    # Artifact: Geode Fragment
    geode_frag = any(a["name"] == "Geode Fragment" for a in player.artifacts)
    # Artifact: Predator's Eye
    predators_eye = any(a["name"] == "Predator's Eye" for a in player.artifacts)

    turn = 0
    while True:
        turn += 1
        clear()
        print_separator("=")
        print(f"  Floor {player.floor} | Turn {turn}")
        print_separator()
        print(f"  {enemy.show_hp()}")
        if enemy.stunned:
            print("  [STUNNED]")
        if enemy.bleed:
            print(f"  [BLEEDING: {enemy.bleed}/turn]")
        print_separator()
        print(f"  {player.emoji} {player.name}  Lv{player.level}")
        print(f"  HP : {hp_bar(player.hp, player.max_hp)}")
        if player.shield_hp > 0:
            print(f"  Shield: {player.shield_hp}")
        if player.stunned:
            print("  [STUNNED - SKIP TURN]")
        if player.bleed:
            print(f"  [BLEEDING: {player.bleed}/turn]")
        print_separator()

        # Geode heal
        if geode_frag:
            player.heal(8)

        # Reactive armor
        if reactive_armor_art:
            player.combat_def_bonus += 2

        # Show moves
        print("  MOVES:")
        for i, m in enumerate(player.moves):
            eff = ""
            if predators_eye:
                eff_val = type_effectiveness(m["type"], enemy.name if enemy.name in ["Rock","Paper","Scissors"] else "Rock")
            print(f"  [{i+1}] {m['name']} ({m['type']}) Pwr:{m['power']} Acc:{m['accuracy']} PP:{m['pp']}/{m['pp_max']}")
        print(f"  [5] Use Special: {player.special} ({player.special_uses} uses left)")
        print(f"  [6] Use Item")
        print(f"  [7] Run")
        print_separator()

        action = get_input("  Action: ", valid=["1","2","3","4","5","6","7"])

        msgs = []
        player_dealt = 0

        if action == "7":
            # Run
            if random.random() < 0.5 or "Smoke Bomb" in [it["name"] for it in player.inventory]:
                # Remove smoke bomb if used
                for idx, it in enumerate(player.inventory):
                    if it["name"] == "Smoke Bomb":
                        player.inventory.pop(idx)
                        break
                print("  Escaped successfully!")
                pause()
                return "escaped"
            else:
                print("  Couldn't escape!")
                msgs.append("Couldn't escape!")

        elif action == "6":
            # Use item
            usable = [it for it in player.inventory]
            if not usable:
                print("  No items!")
                pause("Press ENTER...")
                continue
            print("\n  ITEMS:")
            for i, it in enumerate(usable):
                print(f"  [{i+1}] {it['emoji']} {it['name']}")
            choice = get_input("  Choose item (0=cancel): ", valid=[str(i) for i in range(len(usable)+1)])
            if choice == "0":
                continue
            item = usable[int(choice)-1]
            result = use_item(player, item, enemy)
            print(f"  {result}")
            player.inventory.remove(item)
            pause()

        elif action == "5":
            # Special
            if player.special_uses <= 0:
                print("  No special uses left!")
                pause()
                continue
            player.special_uses -= 1
            result = use_special(player, enemy)
            msgs.extend(result)
            player_dealt = 0  # special handles its own damage

        else:
            # Move
            move_idx = int(action) - 1
            if move_idx >= len(player.moves):
                print("  Invalid move!")
                pause()
                continue
            move = player.moves[move_idx]
            if move["pp"] <= 0:
                print("  No PP left for that move!")
                pause()
                continue
            move["pp"] -= 1

            if player.stunned:
                player.stunned = False
                print("  You are stunned and cannot move!")
                pause()
            else:
                crit_chance = player.effective_crit()
                if razor_focus and player.first_turn:
                    crit_chance = 100
                if player.crit_boost:
                    crit_chance = min(100, crit_chance * 2)
                    player.crit_boost = False

                # Multi-hit check
                hits = 1
                if move.get("effect") in ("multi_hit", "hits_twice"):
                    hits = random.randint(2, 4) if move["effect"] == "multi_hit" else 2
                    # Dual Wield artifact
                    if any(a["name"] == "Dual Wield Charm" for a in player.artifacts):
                        hits += 1

                total_dmg = 0
                for h in range(hits):
                    dmg, is_crit, eff_str = calc_damage(
                        player.effective_atk(), move,
                        enemy.effective_def(),
                        crit_chance
                    )
                    if dmg == 0:
                        msgs.append(f"{move['name']} missed!" if h == 0 else "Hit missed!")
                    else:
                        if boulder_shield and not used_boulder_shield:
                            used_boulder_shield = True
                        else:
                            enemy.hp -= dmg
                            total_dmg += dmg
                        crit_str = " CRITICAL!" if is_crit else ""
                        eff_part = f" ({eff_str})" if eff_str else ""
                        msgs.append(f"{move['name']} dealt {dmg} dmg{crit_str}{eff_part}")

                player_dealt = total_dmg

                # Apply effect
                if move.get("effect") and total_dmg > 0:
                    apply_move_effect(move["effect"], player, enemy, msgs)

                # Vampiric perk
                if "Vampiric" in [pk["name"] for pk in player.perks] and total_dmg > 0:
                    heal_amt = int(total_dmg * 0.15)
                    player.heal(heal_amt)
                    msgs.append(f"Vampiric: healed {heal_amt} HP!")

                # Ink Vampire artifact
                if any(a["name"] == "Ink Vampire" for a in player.artifacts) and total_dmg > 0:
                    heal_amt = int(total_dmg * 0.12)
                    player.heal(heal_amt)

        player.first_turn = False

        # Enemy bleed damage
        if enemy.bleed > 0:
            enemy.hp -= enemy.bleed
            msgs.append(f"Enemy bleeds for {enemy.bleed} damage!")

        # Check enemy death
        if enemy.hp <= 0:
            for m in msgs:
                print(f"  {m}")
            print(f"\n  {enemy.name} defeated!")
            pause()
            return "win"

        # Enemy turn
        if not enemy.stunned:
            e_move = enemy.choose_move(player.char_id)
            e_move["pp"] -= 1
            e_crit = random.random() * 100 < 8
            e_eff = type_effectiveness(e_move["type"], player.char_id)
            if random.random() * 100 > e_move["accuracy"]:
                e_dmg = 0
                msgs.append(f"  {enemy.name}'s {e_move['name']} missed!")
            else:
                e_crit_mult = 2.0 if e_crit else 1.0
                e_raw = e_move["power"] * (enemy.effective_atk() / 50.0) * e_crit_mult * e_eff
                e_dmg = max(1, int(e_raw - player.effective_def() * 0.5))
                # Boulder Shield first hit
                if boulder_shield and not used_boulder_shield:
                    used_boulder_shield = True
                    e_dmg = 0
                    msgs.append(f"  Boulder Shield blocked the hit!")
                else:
                    actual = player.take_damage(e_dmg)
                    e_crit_str = " CRIT!" if e_crit else ""
                    e_eff_str = " (super effective)" if e_eff > 1.0 else (" (not very effective)" if e_eff < 1.0 else "")
                    msgs.append(f"  {enemy.name}'s {e_move['name']}: {actual} dmg{e_crit_str}{e_eff_str}")
                    # Mirror plate
                    if mirror_plate_pct > 0 and actual > 0:
                        reflect = int(actual * mirror_plate_pct)
                        enemy.hp -= reflect
                        msgs.append(f"  Mirror Plate reflects {reflect}!")
                    # Shield spike artifact
                    if any(a["name"] == "Shield Spike" for a in player.artifacts) and actual > 0:
                        enemy.hp -= 10
                        msgs.append("  Shield Spike: 10 dmg back!")
                # Apply move effect to player
                if e_move.get("effect") and e_dmg > 0:
                    apply_move_effect(e_move["effect"], enemy, player, msgs)
        else:
            enemy.stunned = False
            msgs.append(f"  {enemy.name} is stunned and skips a turn!")

        # Player bleed
        if player.bleed > 0:
            player.hp -= player.bleed
            msgs.append(f"  You bleed for {player.bleed} damage!")

        # Print messages
        for m in msgs:
            print(f"  {m}")
        time.sleep(0.3)

        if player.hp <= 0:
            print(f"\n  You were defeated by {enemy.name}!")
            pause()
            return "lose"

def use_special(player, enemy):
    msgs = []
    sp = player.special
    if sp == "Fortify":
        player.damage_block = True
        msgs.append("Fortify activated! Next hit deals 50% damage!")
    elif sp == "Wrap":
        enemy.stunned = True
        msgs.append(f"{enemy.name} is wrapped and stunned!")
    elif sp == "Critical Cut":
        # Guaranteed double-damage hit
        move = player.moves[0] if player.moves else None
        if move:
            dmg = int(move["power"] * (player.effective_atk() / 50.0) * 2.0)
            enemy.hp -= dmg
            msgs.append(f"Critical Cut! Dealt {dmg} damage!")
    elif sp == "Chain Blast":
        dmg = 60
        enemy.hp -= dmg
        msgs.append(f"Chain Blast! {dmg} damage + splash!")
    elif sp == "Iron Guard":
        player.buffs["counter"] = 1
        player.buffs["def"] = player.buffs.get("def", 0) + 20
        msgs.append("Iron Guard! DEF +20, primed for counter!")
    elif sp == "Adhesive Trap":
        enemy.debuffs["spd"] = enemy.debuffs.get("spd", 0) + 10
        if random.random() < 0.5:
            enemy.stunned = True
            msgs.append("Adhesive Trap! Enemy stunned!")
        else:
            msgs.append("Adhesive Trap! Enemy SPD lowered!")
    elif sp == "Steal Aura":
        stolen = list(enemy.buffs.keys())
        for k in stolen:
            player.buffs[k] = player.buffs.get(k, 0) + enemy.buffs[k]
        enemy.buffs.clear()
        msgs.append(f"Steal Aura! Stole {len(stolen)} buffs!")
    return msgs

def use_item(player, item, enemy=None):
    effect = item["effect"]
    if effect == "heal":
        player.heal(item["value"])
        return f"Healed {item['value']} HP!"
    elif effect == "heal_full":
        player.hp = player.max_hp
        return "Full HP restored!"
    elif effect == "damage" and enemy:
        enemy.hp -= item["value"]
        return f"Bomb deals {item['value']} damage!"
    elif effect == "pp_restore":
        player.restore_pp(item["value"])
        return f"PP restored by {item['value']}!"
    elif effect == "pp_full":
        player.restore_pp_full()
        return "All PP restored!"
    elif effect == "shield":
        player.shield_hp += item["value"]
        return f"Shield of {item['value']} HP gained!"
    elif effect == "revive":
        # Store for auto-use on death (simplified: instant half-heal)
        player.heal(player.max_hp // 2)
        return "Revive Crystal used! HP restored to 50%!"
    elif effect == "mystery":
        roll = random.randint(1, 5)
        if roll == 1:
            player.heal(50)
            return "Mystery Box: +50 HP!"
        elif roll == 2:
            player.gold += 60
            return "Mystery Box: +60 gold!"
        elif roll == 3:
            player.atk += 5
            return "Mystery Box: ATK +5!"
        elif roll == 4:
            player.def_ += 5
            return "Mystery Box: DEF +5!"
        else:
            enemy.hp -= 40 if enemy else 0
            return "Mystery Box: Zapped enemy for 40 dmg!"
    elif effect == "atk_up":
        player.atk += item["value"]
        return f"ATK +{item['value']}!"
    elif effect == "def_up":
        player.def_ += item["value"]
        return f"DEF +{item['value']}!"
    elif effect == "crit_up":
        player.crit += item["value"]
        return f"CRIT +{item['value']}%!"
    elif effect == "spd_up":
        player.spd += item["value"]
        return f"SPD +{item['value']}!"
    elif effect == "hp_up":
        player.max_hp += item["value"]
        player.hp = min(player.max_hp, player.hp + item["value"])
        return f"Max HP +{item['value']}!"
    elif effect == "escape":
        return "Smoke Bomb ready (use Run in battle)!"
    return "Nothing happened."

# ─────────────────────────────────────────────
# BOSS FIGHT (with phases for floor 100)
# ─────────────────────────────────────────────

def run_boss_fight(player, floor_num, meta, save_callback=None):
    """Returns "win" or "lose"."""
    clear()
    print_separator("=")

    if floor_num == 100:
        return run_final_boss(player, meta)

    if floor_num in GUARDIAN_BOSSES:
        bd = GUARDIAN_BOSSES[floor_num]
        boss = Enemy(None, floor_num, is_boss=True, boss_data=bd, multiplier=1.0)
    else:
        used = getattr(player, "_used_bosses", [])
        pool = [b for b in BOSS_POOL if b["name"] not in used]
        if not pool:
            pool = BOSS_POOL[:]
        bd = random.choice(pool)
        used.append(bd["name"])
        player._used_bosses = used
        boss = Enemy(None, floor_num, is_boss=True, boss_data=bd, multiplier=1.0)

    print(f"  BOSS BATTLE: {boss.emoji} {boss.name}")
    print_separator("=")
    pause("Prepare yourself! Press ENTER to fight!")

    result = run_combat(player, boss, save_callback)
    return result

def run_final_boss(player, meta):
    clear()
    print_separator("=")
    print("  FINAL BOSS: THE RPS OVERLORD")
    print("  Phase 1 begins...")
    print_separator("=")
    pause("This is it! Press ENTER!")

    fb = FINAL_BOSS
    ph1 = fb["phase1"]
    base = {"base_hp": 80, "base_atk": 20, "base_def": 10}
    scale = 1.0 + 99 * 0.06

    boss_p1 = Enemy(None, 100, is_boss=True, boss_data={
        "name": "RPS Overlord (Phase 1)",
        "emoji": "[OVERLORD P1]",
        "type": "Rock",
        "stat_mult": 1.0,
    }, multiplier=1.0)
    boss_p1.max_hp = int(base["base_hp"] * scale * ph1["hp_mult"])
    boss_p1.hp     = boss_p1.max_hp
    boss_p1.atk    = int(base["base_atk"] * scale * ph1["atk_mult"])
    boss_p1.def_   = int(base["base_def"] * scale * ph1["def_mult"])
    boss_p1.xp_reward   = 500
    boss_p1.gold_reward = 300
    boss_p1.sc_reward   = 5

    result = run_combat(player, boss_p1)
    if result != "win":
        return "lose"

    clear()
    print_separator("=")
    print("  THE OVERLORD TRANSFORMS!")
    print("  Phase 2 - True Form!")
    print_separator("=")
    pause("Last chance! Press ENTER!")

    ph2 = fb["phase2"]
    boss_p2 = Enemy(None, 100, is_boss=True, boss_data={
        "name": "RPS Overlord (True Form)",
        "emoji": "[OVERLORD P2]",
        "type": "Scissors",
        "stat_mult": 1.0,
    }, multiplier=1.0)
    boss_p2.max_hp = int(base["base_hp"] * scale * ph2["hp_mult"])
    boss_p2.hp     = boss_p2.max_hp
    boss_p2.atk    = int(base["base_atk"] * scale * ph2["atk_mult"])
    boss_p2.def_   = int(base["base_def"] * scale * ph2["def_mult"])
    boss_p2.xp_reward   = 1000
    boss_p2.gold_reward = 1000
    boss_p2.sc_reward   = 20

    result = run_combat(player, boss_p2)
    return result

# ─────────────────────────────────────────────
# FLOOR REWARDS
# ─────────────────────────────────────────────

def give_combat_rewards(player, enemy, meta):
    xp_msgs = player.gain_xp(enemy.xp_reward)
    player.gold += enemy.gold_reward
    if enemy.sc_reward > 0:
        meta["soul_crystals"] = meta.get("soul_crystals", 0) + enemy.sc_reward
        save_meta(meta)
    clear()
    print_separator("=")
    print(f"  Victory! Defeated {enemy.name}")
    print_separator()
    print(f"  +{enemy.xp_reward} XP  +{enemy.gold_reward} Gold")
    if enemy.sc_reward > 0:
        print(f"  +{enemy.sc_reward} Soul Crystal(s)!")
    print_separator()
    for m in xp_msgs:
        if m == "PERK_CHOICE":
            print("  *** PERK AVAILABLE! ***")
        elif m.startswith("NEW_MOVE:"):
            print(f"  *** NEW MOVE AVAILABLE! ***")
        else:
            print(f"  {m}")
    return xp_msgs

def handle_level_events(player, xp_msgs):
    """Process perk choices and new move learning from xp_msgs."""
    for m in xp_msgs:
        if m == "PERK_CHOICE":
            choose_perk(player)
        elif m.startswith("NEW_MOVE:"):
            move_idx = int(m.split(":")[1])
            all_moves = CHARACTER_MOVES.get(player.char_id, [])
            if move_idx < len(all_moves):
                new_move = all_moves[move_idx]
                offer_new_move(player, new_move)
    # Distribute stat points
    if player.stat_points > 0:
        distribute_stats(player)

def choose_perk(player):
    clear()
    print_separator("=")
    print(f"  Lv{player.level} PERK CHOICE!")
    print_separator()
    choices = random.sample(PERK_POOL, min(3, len(PERK_POOL)))
    for i, pk in enumerate(choices):
        print(f"  [{i+1}] {pk['name']}: {pk['desc']}")
    print_separator()
    c = get_input("  Choose a perk: ", valid=[str(i+1) for i in range(len(choices))])
    chosen = choices[int(c)-1]
    player.perks.append(chosen)
    print(f"  Gained perk: {chosen['name']}!")
    pause()

def offer_new_move(player, new_move):
    clear()
    print_separator("=")
    print(f"  NEW MOVE AVAILABLE: {new_move['name']}")
    print(f"  Type:{new_move['type']}  Power:{new_move['power']}  Acc:{new_move['accuracy']}  PP:{new_move['pp']}")
    if new_move.get("effect"):
        print(f"  Effect: {new_move['effect']}")
    print_separator()
    if len(player.moves) < 4:
        player.moves.append(dict(new_move))
        print(f"  Learned {new_move['name']}!")
        pause()
    else:
        print("  Move slots full! Replace a move?")
        print("  Current moves:")
        for i, m in enumerate(player.moves):
            print(f"  [{i+1}] {m['name']} (PP:{m['pp']}/{m['pp_max']})")
        print(f"  [5] Don't learn {new_move['name']}")
        c = get_input("  Replace: ", valid=["1","2","3","4","5"])
        if c != "5":
            player.moves[int(c)-1] = dict(new_move)
            print(f"  Learned {new_move['name']}!")
        pause()

def distribute_stats(player):
    while player.stat_points > 0:
        clear()
        print_separator("=")
        print(f"  STAT POINTS: {player.stat_points}")
        print_separator()
        print(f"  [1] HP  (current: {player.max_hp})")
        print(f"  [2] ATK (current: {player.atk})")
        print(f"  [3] DEF (current: {player.def_})")
        print(f"  [4] SPD (current: {player.spd})")
        print(f"  [5] CRIT (current: {player.crit}%)")
        print_separator()
        c = get_input("  Put a point into: ", valid=["1","2","3","4","5"])
        if c == "1":
            player.max_hp += 8
            player.hp = min(player.max_hp, player.hp + 8)
        elif c == "2":
            player.atk += 3
        elif c == "3":
            player.def_ += 3
        elif c == "4":
            player.spd += 2
        elif c == "5":
            player.crit += 2
        player.stat_points -= 1
    print("  Stats updated!")
    pause()

# ─────────────────────────────────────────────
# ARTIFACTS
# ─────────────────────────────────────────────

def offer_artifact(player):
    pool = ARTIFACTS.get(player.char_id, ARTIFACTS.get("Stone", []))
    owned_names = [a["name"] for a in player.artifacts]
    available = [a for a in pool if a["name"] not in owned_names]
    if not available:
        available = pool[:]
    choices = random.sample(available, min(3, len(available)))
    clear()
    print_separator("=")
    print("  BOSS ARTIFACT - Choose 1 of 3:")
    print_separator()
    for i, art in enumerate(choices):
        print(f"  [{i+1}] {art['name']}: {art['desc']}")
    print_separator()
    c = get_input("  Choose artifact: ", valid=[str(i+1) for i in range(len(choices))])
    chosen = choices[int(c)-1]
    player.artifacts.append(chosen)
    # Apply passive stat effects
    apply_artifact_passive(player, chosen)
    print(f"  Gained artifact: {chosen['name']}!")
    pause()

def apply_artifact_passive(player, art):
    name = art["name"]
    if name == "Obsidian Heart":
        player.atk += 15; player.def_ += 10
    elif name == "Ancient Bedrock":
        player.max_hp += 40; player.def_ += 8
    elif name == "Granite Fist":
        player.crit += 10; player.atk += 10
    elif name == "Stone Skin":
        player.def_ += 5
    elif name == "Earthbound Seal":
        for m in player.moves:
            m["pp"] += 5; m["pp_max"] += 5
    elif name == "Geode Fragment":
        pass  # handled in combat
    elif name == "World Pillar":
        pass  # handled in combat (conditional)
    elif name == "Ancient Scroll":
        pass  # handled in calc_damage
    elif name == "Ink Well":
        player.atk += 12; player.spd += 8
    elif name == "Papyrus Shield":
        player.max_hp += 30; player.def_ += 12
    elif name == "Blank Canvas":
        pass  # PP per floor
    elif name == "Origami Crane":
        player.spd += 15; player.crit += 8
    elif name == "Tome of Wisdom":
        pass  # XP bonus
    elif name == "Paper Fortress":
        pass  # conditional
    elif name == "Twin Fang Blades":
        player.crit += 15; player.atk += 8
    elif name == "Speed Scalpel":
        player.spd += 20; player.crit += 5
    elif name == "Glass Blade":
        player.atk += 25; player.def_ -= 10
    elif name == "Whirlwind Anklet":
        player.spd += 12
    elif name == "Blast Radius":
        pass
    elif name == "Detonator Helm":
        player.crit += 12; player.atk += 8
    elif name == "Nitro Flask":
        pass
    elif name == "Aegis Fragment":
        pass
    elif name == "Iron Bulwark":
        player.def_ += 20; player.max_hp += 30
    elif name == "Guardian Crest":
        player.atk += 10; player.def_ += 10
    elif name == "Fortress Plate":
        player.def_ += 8
    elif name == "Adhesive Aura":
        pass
    elif name == "Viscous Shell":
        player.def_ += 15; player.atk -= 5
    elif name == "Polarity Core":
        pass
    elif name == "Lodestone Heart":
        pass
    elif name == "Iron Harvest":
        pass
    elif name == "Gravity Well":
        pass
    elif name == "Flux Regulator":
        player.def_ += 12
    elif name == "Arc Reactor":
        player.spd += 15

# ─────────────────────────────────────────────
# EVOLUTION
# ─────────────────────────────────────────────

def handle_evolution(player, floor_num):
    evo_data = player.evolutions
    if not evo_data:
        return

    if floor_num == 25:
        options = evo_data.get(25, [])
        if not options:
            return
        clear()
        print_separator("=")
        print("  EVOLUTION CHOICE (Floor 25)!")
        print_separator()
        for i, opt in enumerate(options):
            boosts = ", ".join(f"{k}+{v}" for k, v in opt["stat_boost"].items())
            print(f"  [{i+1}] {opt['name']}: {boosts}")
        print_separator()
        c = get_input("  Choose evolution: ", valid=["1","2"])
        chosen = options[int(c)-1]
        player.evo_path = chosen["name"]
        player.name = chosen["name"]
        for stat, val in chosen["stat_boost"].items():
            if stat == "hp":
                player.max_hp += val; player.hp = min(player.max_hp, player.hp + val)
            elif stat == "atk":
                player.atk += val
            elif stat == "def":
                player.def_ += val
            elif stat == "spd":
                player.spd += val
            elif stat == "crit":
                player.crit += val
        # Learn new move
        all_moves = CHARACTER_MOVES.get(player.char_id, [])
        midx = chosen.get("new_move_idx", 2)
        if midx < len(all_moves):
            offer_new_move(player, all_moves[midx])
        print(f"  Evolved into {chosen['name']}!")
        pause()

    elif floor_num == 50:
        sub_evos = evo_data.get(50, {})
        if not sub_evos or not player.evo_path:
            return
        options = sub_evos.get(player.evo_path, [])
        if not options:
            return
        clear()
        print_separator("=")
        print(f"  SUB-EVOLUTION CHOICE (Floor 50)!")
        print_separator()
        for i, opt in enumerate(options):
            boosts = ", ".join(f"{k}+{v}" for k, v in opt["stat_boost"].items())
            print(f"  [{i+1}] {opt['name']}: {boosts}")
        print_separator()
        c = get_input("  Choose sub-evolution: ", valid=["1","2"])
        chosen = options[int(c)-1]
        player.evo_path2 = chosen["name"]
        player.name = chosen["name"]
        for stat, val in chosen["stat_boost"].items():
            if stat == "hp":
                player.max_hp += val; player.hp = min(player.max_hp, player.hp + val)
            elif stat == "atk":
                player.atk += val
            elif stat == "def":
                player.def_ += val
            elif stat == "spd":
                player.spd += val
            elif stat == "crit":
                player.crit += val
        all_moves = CHARACTER_MOVES.get(player.char_id, [])
        midx = chosen.get("new_move_idx", 2)
        if midx < len(all_moves):
            offer_new_move(player, all_moves[midx])
        print(f"  Sub-evolved into {chosen['name']}!")
        pause()

# ─────────────────────────────────────────────
# SHOP
# ─────────────────────────────────────────────

def run_shop(player, floor_num):
    discount = 0.80 if "Merchant" in [pk["name"] for pk in player.perks] else 1.0
    stock = random.sample(SHOP_ITEMS, min(5, len(SHOP_ITEMS)))

    while True:
        clear()
        print_separator("=")
        print(f"  SHOP  (Floor {floor_num})  Gold: {player.gold}g")
        print_separator()
        for i, item in enumerate(stock):
            cost = int(item["cost"] * discount)
            rarity_mark = RARITY_COLORS.get(item["rarity"], "")
            print(f"  [{i+1}] {item['emoji']} {item['name']} {rarity_mark}  - {cost}g")
            print(f"       {item['type'].capitalize()}: {item['effect']}")
        print(f"\n  [6] Leave shop")
        print_separator()

        c = get_input("  Buy: ", valid=["1","2","3","4","5","6"])
        if c == "6":
            break
        idx = int(c) - 1
        item = stock[idx]
        cost = int(item["cost"] * discount)
        if player.gold < cost:
            print("  Not enough gold!")
            pause()
            continue
        player.gold -= cost
        if item["type"] == "permanent":
            result = use_item(player, item)
            print(f"  {result}")
        else:
            player.inventory.append(dict(item))
            print(f"  Bought {item['name']}!")
        stock.pop(idx)
        pause()
        if not stock:
            print("  Shop is empty!")
            pause()
            break

# ─────────────────────────────────────────────
# CHANCE ENCOUNTERS
# ─────────────────────────────────────────────

def run_encounter(player, floor_num, meta):
    enc = random.choice(ENCOUNTERS)
    clear()
    print_separator("=")
    print(f"  {enc['emoji']} CHANCE ENCOUNTER: {enc['name']}")
    print_separator()
    print(f"  {enc['desc']}")
    print_separator()
    for i, ch in enumerate(enc["choices"]):
        print(f"  [{i+1}] {ch['text']}")
    print_separator()
    valid = [str(i+1) for i in range(len(enc["choices"]))]
    c = get_input("  Choice: ", valid=valid)
    action = enc["choices"][int(c)-1]["action"]
    result = handle_encounter_action(player, action, floor_num, meta)
    print(f"\n  {result}")
    pause()

def handle_encounter_action(player, action, floor_num, meta):
    if action == "leave":
        return "You move on."
    elif action == "buy_rare":
        if player.gold >= 50:
            player.gold -= 50
            rare_items = [it for it in SHOP_ITEMS if it["rarity"] in ("Rare","Epic","Legendary")]
            item = random.choice(rare_items)
            if item["type"] == "permanent":
                return use_item(player, item)
            else:
                player.inventory.append(dict(item))
                return f"Bought {item['name']}!"
        return "Not enough gold (need 50g)."
    elif action == "sell_perk":
        if player.perks:
            perk = player.perks.pop()
            player.gold += 100
            return f"Traded perk '{perk['name']}' for 100g!"
        return "No perks to sell."
    elif action == "wish_stat":
        if player.gold >= 30:
            player.gold -= 30
            stats = ["atk","def","spd","crit","hp"]
            chosen = random.choice(stats)
            if chosen == "hp":
                player.max_hp += 5; player.hp = min(player.max_hp, player.hp + 5)
            elif chosen == "atk": player.atk += 5
            elif chosen == "def": player.def_ += 5
            elif chosen == "spd": player.spd += 5
            elif chosen == "crit": player.crit += 5
            return f"The well grants {chosen} +5!"
        return "Need 30g."
    elif action == "wish_heal":
        if player.gold >= 80:
            player.gold -= 80
            player.hp = player.max_hp
            return "Fully healed!"
        return "Need 80g."
    elif action == "spirit_xp":
        amt = 50 + floor_num * 2
        msgs = player.gain_xp(amt)
        return f"Gained {amt} XP!"
    elif action == "spirit_hp":
        player.max_hp += 10; player.heal(10)
        return "Max HP +10!"
    elif action == "spirit_gold":
        player.gold += 40
        return "+40 gold!"
    elif action == "gamble_low":
        if player.gold >= 30:
            player.gold -= 30
            if random.random() < 0.5:
                player.gold += 90
                return "Won! +90g!"
            return "Lost 30g."
        return "Need 30g."
    elif action == "gamble_high":
        if player.gold >= 80:
            player.gold -= 80
            if random.random() < 0.5:
                player.gold += 240
                return "Won! +240g!"
            return "Lost 80g."
        return "Need 80g."
    elif action == "fortune_boss":
        if floor_num % 10 == 9 or floor_num % 10 == 0:
            bd = random.choice(BOSS_POOL)
            return f"Next boss: {bd['name']} ({bd['type']} type)"
        return "No boss nearby to foresee."
    elif action == "fortune_perk":
        perk = random.choice(PERK_POOL)
        player.perks.append(perk)
        return f"Fortune grants perk: {perk['name']}!"
    elif action == "smith_move":
        if player.moves:
            m = random.choice(player.moves)
            m["power"] += 5
            return f"{m['name']} power +5!"
        return "No moves to upgrade."
    elif action == "smith_def":
        player.def_ += 8
        return "DEF +8!"
    elif action == "hospital_heal":
        amt = int(player.max_hp * 0.4)
        player.heal(amt)
        return f"Healed {amt} HP!"
    elif action == "hospital_donate":
        if player.hp > 20:
            player.hp -= 20
            player.gold += 60
            return "Donated 20 HP for 60g!"
        return "HP too low to donate."
    elif action == "shrine_atk":
        if player.hp > 30:
            player.hp -= 30
            player.atk += 15
            return "Sacrificed 30 HP for ATK +15!"
        return "HP too low."
    elif action == "shrine_buff":
        if player.gold >= 50:
            player.gold -= 50
            buff = random.choice(["atk","def","spd","crit"])
            val = random.randint(8,15)
            if buff == "hp":
                player.max_hp += val
            elif buff == "atk": player.atk += val
            elif buff == "def": player.def_ += val
            elif buff == "spd": player.spd += val
            elif buff == "crit": player.crit += val
            return f"Dark power grants {buff} +{val}!"
        return "Need 50g."
    elif action == "camp_search":
        item = random.choice(SHOP_ITEMS[:10])
        player.inventory.append(dict(item))
        return f"Found {item['name']}!"
    elif action == "camp_rest":
        player.heal(25)
        return "Rested. +25 HP!"
    elif action == "creature_heal":
        if player.hp > 20:
            player.hp -= 20
            player.buffs["atk"] = player.buffs.get("atk", 0) + 10
            return "Helped creature! ATK buff +10 for this floor!"
        return "HP too low."
    elif action == "creature_pass":
        player.gold += 30
        return "+30g (found near the creature)."
    return "Nothing happened."

# ─────────────────────────────────────────────
# GENERATE FLOOR ENEMY
# ─────────────────────────────────────────────

def get_enemy_for_floor(floor_num):
    eligible = [e for e in ENEMY_TYPES if e["floors"][0] <= floor_num <= e["floors"][1]]
    if not eligible:
        eligible = ENEMY_TYPES
    etype = random.choice(eligible)
    return Enemy(etype, floor_num)

# ─────────────────────────────────────────────
# FLOOR LOOP
# ─────────────────────────────────────────────

def run_floor(player, floor_num, meta, slot):
    clear()
    print_separator("=")
    print(f"  FLOOR {floor_num} / 100")
    print_separator()
    player.show_stats()
    print_separator()
    pause("Press ENTER to enter the floor...")

    is_boss_floor = (floor_num % 10 == 0)

    if is_boss_floor:
        result = run_boss_fight(player, floor_num, meta)
        if result == "win":
            # Give XP/gold for boss
            fake_enemy = type("E", (), {
                "xp_reward": 100 + floor_num * 3,
                "gold_reward": 80 + floor_num * 2,
                "sc_reward": 2 if floor_num >= 50 else (1 if floor_num >= 20 else 0),
                "name": "Boss",
                "hp": 0,
            })()
            xp_msgs = give_combat_rewards(player, fake_enemy, meta)
            handle_level_events(player, xp_msgs)
            # Offer artifact
            offer_artifact(player)
            # Evolution check
            if floor_num == 25 or floor_num == 50:
                handle_evolution(player, floor_num)
        else:
            return "lose"
    else:
        enemy = get_enemy_for_floor(floor_num)
        result = run_combat(player, enemy)
        if result == "win":
            xp_msgs = give_combat_rewards(player, enemy, meta)
            pause()
            handle_level_events(player, xp_msgs)
        elif result == "lose":
            return "lose"
        elif result == "escaped":
            pass

    # Between-floor events
    if floor_num < 100:
        # PP restoration (Blank Canvas artifact)
        if any(a["name"] == "Blank Canvas" for a in player.artifacts):
            player.restore_pp(2)

        # Scavenger perk: bonus gold
        if "Scavenger" in [pk["name"] for pk in player.perks]:
            bonus = random.randint(10, 25)
            player.gold += bonus

        # Shop (every 5 floors, or random 30%)
        show_shop = (floor_num % 5 == 0) or (random.random() < 0.15)
        if show_shop:
            clear()
            print(f"  [Shop] A merchant appears on Floor {floor_num}!")
            inp = get_input("  Enter shop? [y/n]: ", valid=["y","n"])
            if inp == "y":
                run_shop(player, floor_num)

        # Chance encounter (25% chance)
        if random.random() < 0.25:
            run_encounter(player, floor_num, meta)

        # Auto-save
        state = player.to_dict()
        state["meta_soul_crystals"] = meta.get("soul_crystals", 0)
        save_game(slot, state)

    player.floor = floor_num + 1
    return "continue"

# ─────────────────────────────────────────────
# ETERNAL SHOP (meta-progression)
# ─────────────────────────────────────────────

def run_eternal_shop(meta):
    ETERNAL_ITEMS = [
        {"name": "Eternal HP",   "desc": "Max HP +10 per run", "stat": "hp",   "cost": 3,  "max": 10},
        {"name": "Eternal ATK",  "desc": "ATK +3 per run",     "stat": "atk",  "cost": 4,  "max": 10},
        {"name": "Eternal DEF",  "desc": "DEF +3 per run",     "stat": "def",  "cost": 4,  "max": 10},
        {"name": "Eternal SPD",  "desc": "SPD +2 per run",     "stat": "spd",  "cost": 3,  "max": 5},
        {"name": "Eternal CRIT", "desc": "CRIT +2% per run",   "stat": "crit", "cost": 5,  "max": 5},
        {"name": "Unlock Dynamite","desc": "Unlock Dynamite",  "stat": "unlock_Dynamite", "cost": 10, "max": 1},
        {"name": "Unlock Shield", "desc": "Unlock Shield",     "stat": "unlock_Shield",   "cost": 15, "max": 1},
        {"name": "Unlock Glue",   "desc": "Unlock Glue",       "stat": "unlock_Glue",     "cost": 20, "max": 1},
        {"name": "Unlock Magnet", "desc": "Unlock Magnet",     "stat": "unlock_Magnet",   "cost": 25, "max": 1},
    ]

    while True:
        clear()
        print_separator("=")
        print(f"  ETERNAL SHOP  Soul Crystals: {meta.get('soul_crystals', 0)}")
        print_separator()
        eu = meta.get("eternal_upgrades", {})
        unlocked = meta.get("unlocked_chars", [])
        for i, item in enumerate(ETERNAL_ITEMS):
            stat = item["stat"]
            if stat.startswith("unlock_"):
                char_id = stat.split("_", 1)[1]
                owned = char_id in unlocked
                status = "[OWNED]" if owned else f"{item['cost']} SC"
            else:
                current = eu.get(stat, 0)
                at_max = current >= item["max"] * (10 if stat == "hp" else 3 if stat in ("atk","def") else 2)
                status = "[MAX]" if at_max else f"{item['cost']} SC (x{current // (10 if stat=='hp' else 3 if stat in ('atk','def') else 2 if stat == 'spd' else 2)})"
            print(f"  [{i+1}] {item['name']}: {item['desc']}  [{status}]")
        print(f"\n  [0] Back")
        print_separator()
        c = get_input("  Buy: ", valid=["0"] + [str(i+1) for i in range(len(ETERNAL_ITEMS))])
        if c == "0":
            break
        item = ETERNAL_ITEMS[int(c)-1]
        sc = meta.get("soul_crystals", 0)
        if sc < item["cost"]:
            print("  Not enough Soul Crystals!")
            pause()
            continue
        stat = item["stat"]
        if stat.startswith("unlock_"):
            char_id = stat.split("_", 1)[1]
            if char_id in meta.get("unlocked_chars", []):
                print("  Already unlocked!")
                pause()
                continue
            meta["soul_crystals"] = sc - item["cost"]
            if "unlocked_chars" not in meta:
                meta["unlocked_chars"] = []
            meta["unlocked_chars"].append(char_id)
            save_meta(meta)
            print(f"  Unlocked {char_id}!")
        else:
            incr = 10 if stat == "hp" else 3 if stat in ("atk","def") else 2 if stat == "spd" else 2
            eu = meta.get("eternal_upgrades", {})
            current = eu.get(stat, 0)
            max_val = item["max"] * incr
            if current >= max_val:
                print("  Already at max!")
                pause()
                continue
            meta["soul_crystals"] = sc - item["cost"]
            eu[stat] = current + incr
            meta["eternal_upgrades"] = eu
            save_meta(meta)
            print(f"  {item['name']} upgraded! ({stat}: +{eu[stat]} total)")
        pause()

# ─────────────────────────────────────────────
# CHARACTER SELECT
# ─────────────────────────────────────────────

def character_select(meta):
    clear()
    print_separator("=")
    print("  CHARACTER SELECT")
    print_separator()
    unlocked = meta.get("unlocked_chars", [])
    available = STARTER_CHARACTERS + [c for c in UNLOCKABLE_CHARACTERS if c["id"] in unlocked]

    for i, c in enumerate(available):
        print(f"  [{i+1}] {c['emoji']} {c['name']}")
        print(f"       {c['desc']}")
        print(f"       HP:{c['hp']} ATK:{c['atk']} DEF:{c['def']} SPD:{c['spd']} CRIT:{c['crit']}%")
        print(f"       Special: {c['special']} - {c['special_desc']}")
        print()
    print_separator()
    valid = [str(i+1) for i in range(len(available))]
    c = get_input("  Choose character: ", valid=valid)
    return available[int(c)-1]

# ─────────────────────────────────────────────
# SAVE/LOAD MENU
# ─────────────────────────────────────────────

def save_load_menu(meta):
    """Returns (player, slot) for a new or loaded game, or None to go back."""
    saves = load_saves()

    while True:
        clear()
        print_separator("=")
        print("  SAVE SLOTS")
        print_separator()
        for slot in [1, 2, 3]:
            data = saves.get(str(slot))
            if data:
                cid = data.get("char_id", "?")
                lv  = data.get("level", 1)
                fl  = data.get("floor", 1)
                print(f"  [{slot}] {cid}  Lv{lv}  Floor {fl}")
            else:
                print(f"  [{slot}] Empty")
        print(f"  [0] Back")
        print_separator()
        print("  [N] New game in slot  [L] Load slot")
        action = get_input("  Action (N1/N2/N3 or L1/L2/L3 or 0): ").upper()

        if action == "0":
            return None, None

        if len(action) == 2 and action[0] in ("N","L") and action[1] in ("1","2","3"):
            mode = action[0]
            slot = int(action[1])
            data = saves.get(str(slot))

            if mode == "N":
                if data:
                    print(f"  Slot {slot} has a save. Overwrite? [y/n]")
                    if get_input("  > ", valid=["y","n"]) != "y":
                        continue
                char_data = character_select(meta)
                player = Player(char_data, meta)
                player.floor = 1
                return player, slot

            elif mode == "L":
                if not data:
                    print("  No save in that slot!")
                    pause()
                    continue
                player = Player.from_dict(data, meta)
                # Restore SC from save if meta SC is lower
                saved_sc = data.get("meta_soul_crystals", 0)
                if saved_sc > meta.get("soul_crystals", 0):
                    meta["soul_crystals"] = saved_sc
                return player, slot
        else:
            print("  Try: N1, L2, etc.")
            pause()

# ─────────────────────────────────────────────
# GAME OVER / VICTORY SCREENS
# ─────────────────────────────────────────────

def game_over_screen(player, floor_num):
    clear()
    print_separator("=")
    print("  GAME OVER")
    print_separator()
    print(f"  Character: {player.emoji} {player.name}  (Lv{player.level})")
    print(f"  Reached Floor: {floor_num}")
    print(f"  Gold collected: {player.gold}g")
    print(f"  Artifacts: {len(player.artifacts)}")
    print(f"  Perks: {', '.join(pk['name'] for pk in player.perks) or 'None'}")
    print_separator()
    pause()

def victory_screen(player, meta):
    clear()
    print_separator("=")
    print("  *** YOU WIN! RPS OVERLORD DEFEATED! ***")
    print_separator()
    print(f"  {player.emoji} {player.name}  Lv{player.level}")
    print(f"  Floors cleared: 100")
    print(f"  Gold: {player.gold}g")
    print(f"  Soul Crystals: {meta.get('soul_crystals', 0)}")
    print(f"  Perks: {', '.join(pk['name'] for pk in player.perks) or 'None'}")
    print(f"  Artifacts: {', '.join(a['name'] for a in player.artifacts) or 'None'}")
    print_separator()
    print("  Congratulations! You are an RPS Legend!")
    print_separator()
    pause()

# ─────────────────────────────────────────────
# MAIN MENU
# ─────────────────────────────────────────────

def main_menu():
    meta = load_meta()

    while True:
        print_title()
        print(f"  Soul Crystals: {meta.get('soul_crystals', 0)}")
        print_separator()
        print("  [1] New / Continue Game")
        print("  [2] Eternal Shop")
        print("  [3] How to Play")
        print("  [4] Quit")
        print_separator()

        c = get_input("  Choice: ", valid=["1","2","3","4"])

        if c == "4":
            print("  Thanks for playing RPS Legends!")
            break

        elif c == "3":
            show_help()

        elif c == "2":
            run_eternal_shop(meta)
            meta = load_meta()

        elif c == "1":
            player, slot = save_load_menu(meta)
            if player is None:
                continue
            run_game(player, slot, meta)
            meta = load_meta()

def show_help():
    clear()
    print_separator("=")
    print("  HOW TO PLAY")
    print_separator()
    lines = [
        "- Climb 100 floors, fight enemies and bosses",
        "- Rock beats Scissors (1.5x dmg)",
        "- Scissors beats Paper (1.5x dmg)",
        "- Paper beats Rock (1.5x dmg)",
        "- Boss every 10 floors. Guardians at 30, 60, 90.",
        "- Floor 100: 2-phase final boss",
        "- After each boss: pick 1 of 3 artifacts",
        "- Every 5 levels: choose a perk",
        "- Floor 25 and 50: evolve your character",
        "- Soul Crystals from bosses -> Eternal Shop",
        "- Save is automatic after every floor",
        "- Shop appears every 5 floors or randomly",
        "- 25% chance for a Chance Encounter between floors",
        "- Distribute stat points after each level up",
        "- Special skill has limited uses per run (3)",
    ]
    for l in lines:
        print(f"  {l}")
    print_separator()
    pause()

# ─────────────────────────────────────────────
# MAIN GAME LOOP
# ─────────────────────────────────────────────

def run_game(player, slot, meta):
    start_floor = player.floor

    for floor_num in range(start_floor, 101):
        player.floor = floor_num
        result = run_floor(player, floor_num, meta, slot)

        if result == "lose":
            game_over_screen(player, floor_num)
            delete_save(slot)
            return

        if floor_num == 100 and result == "continue":
            # Victory!
            victory_screen(player, meta)
            delete_save(slot)
            return

    # Should not reach here
    victory_screen(player, meta)
    delete_save(slot)

# ─────────────────────────────────────────────
# ENTRY POINT
# ─────────────────────────────────────────────

if __name__ == "__main__":
    try:
        main_menu()
    except KeyboardInterrupt:
        print("\n\n  Game interrupted. Progress auto-saved.")
