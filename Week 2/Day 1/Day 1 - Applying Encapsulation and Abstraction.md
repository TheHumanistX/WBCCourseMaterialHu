# Applying OOP Part 1: Encapsulation and Abstraction
## Introduction: The Adventure Game
Welcome to the exciting world of adventure RPG game development! 

In this game, you will take on the role of a character who is trapped in a dungeon, and must fight their way out to reclaim their rightful place as the ruler of the castle, and defeat the evil sorcerer who stole the throne from you!

As you progress through the game, you will encounter different types of enemies that have unique abilities and strengths. As you move from scene to scene, you will unlock new areas of the map and get closer to the final showdown with the evil sorcerer. Along the way, you will collect various items that will help you in your quest, such as health potions, weapons, and armor, some of which may have special effects and abilities.

Finally, you will encounter friendly NPCs who can help you on your journey, and boss battles that will put your skills to the test.

This game is quite ambitious, even for one that is solely text-based. To pull this off without creating a gigantic mess, you will need Object-Oriented Programming!

## Using OOP fo an Adventure RPG Game
OOP is all about classes. There is a class for everything imaginable, as classes are one of the most powerful programming constructs available to us. Even the fundamental data types in Python are just classes with attributes and methods *pretending* to be data types.

So how will we use classes to build this game?

We will need to create classes for each of the game's mechanics and systems, which can be inherited from by the game's entities. In game development, an "entity" is basically a tangible in-game "thing", and we will create a class for that as well. Most importantly, we will create classes for every game mechanic and gameplay system, which will allow us to create a fully modular system.

For example, we will want a Health system for all entities in the game that can participate in the combat system. Another example is an Inventory system, which allows an entity to hold Items--which are another type of class as well. Damage and Healing systems are also needed, as well as a system for tracking special Abilities. And, what kind of game would call itself an RPG without an Experience system that makes the player's character more powerful as they defeat more enemies? These are just a few examples of the mechanics we will build.

These in-game systems would be insanely complex to code without OOP, and you would inevitably end up copy-pasting the same code over and over again. However, we will use Encapsulation, Abstraction, Inheritance, and Polymorphism to guide our development of this epic adventure game.

## Introducing the Base Classes for the Adventure RPG Game

In this lesson, we will begin building the base classes for our adventure RPG game, using the principles of encapsulation and abstraction that we learned in the previous lesson. The base classes will serve as templates for all the different entities in the game, and will provide a foundation for inheritance and polymorphism.

Refer to the RPG Game Class Diagram for reference on each of these base classes, and feel free to try creating them by yourself before I do. However, we will create many more classes as we go through this project. For today, we will focus on the "entity classes", which are the tangible in-game "things", rather than the systems or mechanics that power them.

#### Entity Class
The `Entity` class simply tracks the name and description used by all in-game entities. Every "thing" inside the game the player can interact with in some capacity will have a name, a description, or both, making each one a subclass of the `Entity` class.

Every entity in the game will inherit from this class, which will provide them with a name and description, as well as methods are accessing them.

#### Scene Class
The `Scene` class represents each location or area in the game. 

It will include attributes for the chance of an enemy NPC spawning, a list of possible enemy NPCs that can spawn there, a dictionary of other `Scene`s the `Scene` is connected to, and a list of friendly NPCs the player can interact with. The `Scene` will also have a method for traveling to another `Scene`, which will update the game's `current_scene` global variable.

#### Character Class
The `Character` class represents all in-game characters, including friendly NPCs, enemy NPCs, and the player character.

The defining features of a `Character` are many, but for today's lesson it is the ability to equip certain items like weapons, armor, and trinkets. We will expand this functionality to include an inventory system tomorrow, but for today we will define a `Character` as a class that has a weapon and armor slot, and methods for interacting with those slots.

#### Item Class
The fourth entity class we will create is the `Item` class, which represents all in-game items, such as weapons, armor, consumable items, and spells. 

It will include attributes for name, description, and quantity, as well as a use method that will allow the player to use the item in the game. 

We will encapsulate and abstract data related to different types of items in the game, while also exploring the use of polymorphism to create sub-classes of items with unique properties and methods.

#### Ability Class
Finally, we will create the Ability class, which represents all in-game combat abilities, both offensive and defensive. 

It will include attributes for damage, defense, and other relevant information, as well as methods for using the ability in the game. 

We will apply polymorphism to different types of combat abilities with shared attributes and methods, while also exploring the use of inheritance to create sub-classes of abilities with unique properties and methods.

## Building Base Classes
### Scene Class

The `Scene` class represents each location or area in the game. It will include attributes for the scene's name, description, the chance of an enemy NPC spawning in the scene, a list of possible enemy NPCs that can spawn there, a dictionary of other Scenes the `Scene` is connected to, and a list of friendly NPCs the player can interact with. It will also include methods for all of these attributes.

    class Scene:
        def __init__(self, name, description, possible_enemies=[], connected_scenes={}, friendly_npcs=[], enemy_chance=0):
            self.__name = name
            self.__description = description
            self.__enemy_chance = enemy_chance
            self.__possible_enemies = possible_enemies
            self.__connected_scenes = connected_scenes
            self.__friendly_npcs = friendly_npcs

In this code, we define the `Scene` class with an `__init__` method that takes in several arguments, including the scene's `name`, `description`, and other attributes. We then assign these attributes to instance variables using the `self` keyword.

Next, let's add a method for traveling to another `Scene`:

class Scene:
        
    def travel_to(self, scene_name):
        if scene_name in self.connected_scenes:
            current_scene = self.connected_scenes[scene_name]
            print(f"You have traveled to {current_scene.name}.")
        else:
            print("You cannot travel to that scene.")

In this code, we define a `travel_to` method that takes in a `scene_name` argument. If the `scene_name` argument is in the current `Scene`'s `connected_scenes` dictionary, we update the `current_scene` global variable to the new `Scene` and print a message indicating that the player has traveled to the new `Scene`. Otherwise, we print a message indicating that the player cannot travel to that `Scene`.

However, we will run into a programming challenge regarding enemies and connected scenes: we can't create a `Scene` while simultaneously knowing which not-yet-created `Scenes` will be connected to it! We could potentially encounter the same issue with the enemies too.

The easiest way to solve this dependency problem is to create an initializer method that allows us to set these attributes after the `Scene` has been created, and to use a private Boolean attribute `__is_initialized` to restrict access to this method so it can only be called once. This will make our lives much easier when it is time to create the loading script for the game.

    class Scene:
        def __init__(self, name, description, possible_enemies=[], connected_scenes={}, friendly_npcs=[], enemy_chance=0):
            self.__name = name
            self.__description = description
            self.__enemy_chance = enemy_chance
            self.__possible_enemies = possible_enemies
            self.__connected_scenes = connected_scenes
            self.__friendly_npcs = friendly_npcs
            self.__is_initialized = False

        def get_name(self):
            return self.__name

        def get_description(self):
            return self.__description

        def initialize(self, enemies, scenes, friendlies=[], enemy_chance=0):
            if self.__is_initialized:
                return
            self.__enemy_chance = enemy_chance
            self.__possible_enemies = enemies
            self.__connected_scenes = scenes
            self.__friendly_npcs = friendlies

        def travel_to(self, scene_name):
            if scene_name in self.__connected_scenes:
                current_scene = self.__connected_scenes[scene_name]
                print(f"You have traveled to {current_scene.name}.")
            else:
                print("You cannot travel to that scene.")

An important method to think about is the ability to spawn an enemy NPC when the player visits a `Scene`. The game should roll a random number from 0 to 100, and if it's below the Scene's enemy spawn chance then the game will pick a random enemy from the `Scene`'s enemy list and then enter a combat state. However, we will build the combat state on a later date.

        def get_enemies(self):
            return self.__possible_enemies

        def get_enemy(self, enemy_key):
            enemy_index = self.__possible_enemies.index(enemy_key)
            return self.__possible_enemies[enemy_index]

        def spawn_enemy(self):
            if random.randint(100) < self.__enemy_chance:
                enemy = random.choice(self.get_enemies())
                print(f"You are attacked by a {enemy.get_name()}!")
                return enemy  # Later, we will initialize a combat state for this enemy
            else:
                return None

        def interact_with_npc(self, npc_name):
            if npc_name in self.__friendly_npcs:
                npc = self.__friendly_npcs[npc_name]
                print(f"{npc.name} says: {npc.dialogue}")
            else:
                print("There is no one here to interact with.")

In this code, we define methods that allow for enemy NPCs to spawn and for the player to interact with friendly NPCs. The `spawn_enemy` method randomly determines if an enemy NPC should spawn based on the `enemy_chance` attribute, and if so, chooses a random enemy type from the `possible_enemies` list and creates an instance of the `Character` class.

The `interact_with_npc` method allows the player to interact with a friendly NPC in the `Scene`, if one exists. If the `npc_name` argument is in the current `Scene`'s `friendly_npcs` dictionary, we retrieve the corresponding NPC instance and print a message indicating their dialogue. Otherwise, we print a message indicating that there is no one to interact with.

By encapsulating and abstracting the data related to different scenes, we have created a flexible and reusable `Scene` class that can be used throughout the game.

### Character Class

The `Character` class represents all characters in the game, including friendly and hostile NPCs. It includes attributes for `__name`, `__description`, `__max_health`, `__health`, and damage (`__min_damage` and `__max_damage`), as well as methods for attacking other `Characters` and increasing or decreasing health. It also includes an attribute for `__energy` that is used when casting `Abilities`, and a dictionary that holds all the `Abilities` each Character knows, and all methods needed to use those `Abilities`.


    class Character:
        def __init__(self, name, description, max_health, max_damage, min_damage=0, energy=100, abilities={}):
            self.__name = name
            self.__description = description

            self.__max_health = max_health
            self.__health = max_health

            self.__max_energy = energy
            self.__energy = energy
            self.__abilities = abilities

            self.__min_damage = min_damage
            self.__max_damage = max_damage

        def _get_min_damage(self):
            return self.__min_damage

        def _get_max_damage(self):
            return self.__max_damage

        def get_damage(self):
            return random.randrange(self._get_min_damage(), self._get_max_damage())

        def get_name(self):
            return self.__name

        def get_description(self):
            return self.__description

        def get_max_health(self):
            return self.__max_health

        def get_health(self):
            return self.__health
        
        def get_max_energy(self):
            return self.__max_energy
        
        def get_energy(self):
            return self.__energy
        
        def set_energy(self, energy):
            if energy <= 0:
                energy = 0
            elif energy > self.get_max_energy():
                energy = self.get_max_energy()
            self.__energy = energy

        def set_health(self, health):
            # Adjust health parameter if it is out of bounds
            if health <= 0:  # Character dies
                health = 0
            elif health > self.get_max_health():
                health = self.get_max_health()

            self.__health = health  # Set Character's health

            # Print health update message
            if self.get_health() > 0:
                print(f"{self.get_name()} health: {self.get_health()}")
            else:
                print(f"{self.get_name()} has died.")

        def attack(self, target, extra_damage=0):
            damage = self.get_damage() + extra_damage
            target.set_health(target.get_health() - damage)
            print(f"{self.get_name()} attacked {target.get_name()} for {damage} damage.")


In this code, we define the `Character` class with an `__init__` method that takes in several arguments, including the `Character`'s `name`, `description`, `max_health`, `min_damage`, and `max_damage`. We then assign these attributes to instance variables using the `__` prefix to make them private.

We also define several getter methods for retrieving the `Character`'s `__name`, `__description`, `__max_health`, `__health`, `__min_damage`, and `__max_damage`. We create the `get_damage` method that generates a random integer based on the `Character`'s minimum and maximum damage output.

We define a `set_health` method that allows the `Character`'s `health` to be set to a new value, ensuring that it cannot exceed the `Character`'s `max_health` attribute, nor can it ever drop below `0`.

Finally, we define an `attack` method that takes in a `target` argument, generates a random integer according to the `Character`'s damage stats, reduces the `target`'s `health` by the `Character`'s damage, and prints a message indicating the attack.

By encapsulating the `Character`'s attributes and using getter and setter methods, we ensure that the `Character`'s internal state is protected from outside manipulation. By defining an `attack` method, we abstract away the implementation details of the `attack` action, allowing us to easily reuse this method for other classes that will have attacking capabilities.

In tomorrow's lesson, we use inheritance and polymorphism to build more specialized classes, such as `EnemyNPC` and `Player`, that inherit from the `Character` class.


### Item Class

The `Item` class represents all items in the game, including weapons, armor, and consumable items. It includes attributes for `name`, `description`, and `quantity`, as well as a `use` method that reduces the quantity when called.

    class Item:
        def __init__(self, name, description, quantity=1):
            self.__name = name
            self.__description = description
            self.__quantity = quantity
            
        def get_name(self):
            return self.__name
        
        def get_description(self):
            return self.__description
        
        def get_quantity(self):
            return self.__quantity
        
        def set_quantity(self, quantity):
            self.__quantity = quantity

        def use(self, user, target, amount=1):
            if self.get_name() not in user.abilities:
                print(f"{user.get_name()} does not have {self.get_name()}")
            if self.get_quantity() is not None:
                if self.get_quantity() == 0:
                    return
                self.set_quantity(self.get_quantity() - amount)
                # More logic to be added tomorrow!

In this code, we define the `Item` class with an `__init__` method that takes in several arguments, including the `Item`'s `name`, `description`, and `quantity`. We then assign these attributes to instance variables using the `_` prefix to indicate that they are intended to be private.

We also define several getter methods for retrieving the `Item`'s `name`, `description`, and `quantity`. We define a `set_quantity` method that allows the `Item`'s `quantity` to be set to a new value. 

Finally, we define a `use` method, which will be implemented in the sub-classes for different types of items. This method allows us to abstract away the implementation details of item usage and ensures that each type of item has its own unique functionality.

By encapsulating the `Item`'s attributes and using getter and setter methods, we ensure that the `Item`'s internal state is protected from outside manipulation. By defining a `use` method, we abstract away the implementation details of item usage, allowing us to easily reuse this method for different types of items.

In tomorrow's lesson, we will use inheritance and polymorphism to build more specialized classes, such as `Weapon`, `Armor`, and `HealthPotion`, that inherit from the `Item` class.


### Ability Class

The `Ability` class represents all abilities that characters can use in the game, including offensive and defensive abilities. The primary distinguishing feature between `Abilities` and Items is that `Abilities` rely on a `Character`'s energy level, while `Items` are based on quantity in the player's inventory. It includes attributes for `name`, `description`, and `energy_cost`, as well as a `use` method.

    class Ability:
        def __init__(self, name, description, energy_cost=None):
            self.__name = name
            self.__description = description
            self.__energy_cost = energy_cost
            
        def get_name(self):
            return self.__name
        
        def get_description(self):
            return self.__description
        
        def get_charges(self):
            return self.__energy_cost

        # We can include the base logic for consuming Ability charges here
        # We will implement the exact details tomorrow
        def use(self, user, target, charges=1):
            if self not in user.abilities:
                print(f"{user.get_name()} does not have ")
            if self.get_energy_cost() is not None:
                if self.get_energy_cost() == 0:
                    return  # Later, we will switch this out for an exception
                user.set_energy(self.get_energy_cost() - charges)

In this code, we define the `Ability` class with an `__init__` method that takes in several arguments, including the `Ability`'s `name`, `description`, and `charges`. We then assign these attributes to instance variables using the `_` prefix to indicate that they are intended to be private.

We also define several getter methods for retrieving the `Ability`'s `name`, `description`, and `charges`. Finally, we define a `use` method, which will be implemented in the sub-classes for different types of abilities.

By encapsulating the `Ability`'s attributes and using getter methods, we ensure that the `Ability`'s internal state is protected from outside manipulation. By defining a `use` method, we abstract away the implementation details of ability usage, allowing us to easily reuse this method for different types of abilities.


## Lesson Summary

In this lesson, we have built the base classes for our adventure RPG game, including `Scene`, `Character`, `Item`, and `Ability`. We have explored how we can use encapsulation and abstraction to ensure that each class is flexible and reusable, and we have laid the foundation for inheritance and polymorphism in the next lesson.



