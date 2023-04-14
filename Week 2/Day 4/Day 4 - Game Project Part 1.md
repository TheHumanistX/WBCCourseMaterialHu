```
These are just an outline of the project days, but the actual outline will depend entirely on the final project file itself and what it needs. I am putting off working on this project until we can get the text files caught up for our current week of production.
```

# Day 4: Building the Adventure RPG Game - Part 1
## Lesson Objectives:
* Understand the basic structure of the game.
* Learn how to implement the game state system and UI messages.
* Create game variables and functions to support the game's core features.

## Introduction (3 minutes)
* Overview of the adventure RPG game.

## Game State and UI Messages (20 minutes)
* Creating the game state system.
* Implementing UI messages for the player.

## Game Variables and Functions (25 minutes)
* Creating and initializing game variables.
* Creating utility functions to support game functionality.

## Combat System (20 minutes)
* Implementing a basic combat loop.
* Creating the Ability class.
* Using polymorphism to create specific Ability classes.

## Utility Functions (10 minutes)
* Implementing the clear_screen function.
* Discussing the importance of well-documented code.


# Day 4: OOP Adventure RPG Game - Part 1
## Lesson Objectives
* Utilize OOP to build in-game systems and mechanics
* Create classes for in-game entities
* Use error handling and abstraction to assist with bug-hunting

## Introduction
* Using encapsulation, abstraction, inheritance, and polymorphism to build a modular RPG game

## Implementing the Base and Entity Classes
* Implement Entity class, and the following entity classes:
    * Item
    * Ability
    * Scene
    * Character
* Implement Combat class, and the following base classes it inherits from:
    * Health
    * Energy
    * Magic
    * Damage
    * Defense
    * Healing
    * Experience
* Implement inventory-based classes
    * Inventory
    * Equipment
    * Abilities
* Implement the GameState class
* Implement error-handling and type-checking functions

## Implementing the Subclasses
* Using inheritance to make in-game entities easy and fast to produce
* Items, Equippable
    * DullSword
    * RagArmor
    * GladiatorSword
    * GladiatorShield
    * GladiatorArmor
    * MinotaurAxe
    * Crossbow
    * FlamingSword
    * EnchantedShield
    * GlowingArmor
* Items, Consumable
    * HealthPotion
    * EnergyPotion
    * Arrows
* Abilities
    * Punch (unarmed, energy)
    * Slash (swords, axes, energy)
    * Thrust (swords, energy)
    * Shoot (crossbow)
    * Reload (crossbow, energy)
    * Defend (shield, energy)
    * Fireball (magic, damage)
    * MagicBarrier (magic, defense)
    * HealingSpell (magic, healing)
    * DrainLife (magic, damage, healing)
    * Berserk (energy, damage)
* Player character
* Enemy NPCs:
    * JailerMinion
    * CastleLightGuard
    * CastleGuard
    * CastleHeavyGuard
    * RoyalAssassin
    * CastleArcher
    * SorcererApprentice
* Bosses
    * Minotaur
    * 


