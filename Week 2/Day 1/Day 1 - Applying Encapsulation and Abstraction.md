# Applying OOP Part 1: Encapsulation and Abstraction
## Introduction: The Adventure Game
Welcome to the exciting world of adventure RPG game development! 

In this game, you will take on the role of a character who is trapped in a dungeon, and must fight their way out to reclaim their rightful place as the ruler of the castle, and defeat the evil sorcerer who stole the throne from them!

To do this, you will need to create a variety of classes that represent the game's entities, such as characters, enemies, weapons, armor, health potions, and spells.

As you progress through the game, you will encounter different types of enemies that have unique abilities and strengths. To defeat them, you will need to utilize the principles of encapsulation and abstraction to protect your character's data and simplify the combat system. You will also need to use inheritance and polymorphism to create sub-classes of characters and enemies that have unique properties and methods.

Along the way, you will collect various items that will help you in your quest, such as health potions, weapons, and armor. You will need to apply encapsulation and abstraction to these items as well, to make sure that they are used appropriately and do not interfere with the game's balance.

Finally, you will encounter friendly NPCs who can help you on your journey, and boss battles that will put your skills to the test. Through it all, you will learn how to use the principles of object-oriented programming to create a dynamic and exciting game that will challenge and entertain players for hours on end.

## Introducing the Base Classes for the Adventure RPG Game

In this lesson, we will begin building the base classes for our adventure RPG game, using the principles of encapsulation and abstraction that we learned in the previous lesson. The base classes will serve as templates for all the different entities in the game, and will provide a foundation for inheritance and polymorphism.

Refer to the RPG Game Class Diagram for reference on each of these base classes, and feel free to try creating them by yourself before I do.

#### Scene Class
The first base class we will create is the Scene class, which represents each location or area in the game. 

It will include attributes for the scene's name, description, the chance of an enemy NPC spawning in the scene, a list of possible enemy NPCs that can spawn there, a dictionary of other Scenes the Scene is connected to, and a list of friendly NPCs the player can interact with. The Scene will also have a method for traveling to it, which will update the game's `current_scene` global variable. 

We will encapsulate and abstract the data related to different scenes, while also exploring the use of graph data structures in programming.

#### Character Class
The second base class we will create is the Character class, which represents all in-game characters, including friendly NPCs, enemy NPCs, and the player character. 

It will include attributes for health, damage, and other relevant information, as well as a method for attacking other Characters, and a method for increasing or decreasing their health. 

We will apply inheritance and polymorphism to different types of characters with shared attributes and methods.

#### Item Class
The third base class we will create is the Item class, which represents all in-game items, such as weapons, armor, consumable items, and spells. 

It will include attributes for name, description, and quantity, as well as a use method that will allow the player to use the item in the game. 

We will encapsulate and abstract data related to different types of items in the game, while also exploring the use of polymorphism to create sub-classes of items with unique properties and methods.

#### Ability Class
Finally, we will create the Ability class, which represents all in-game combat abilities, both offensive and defensive. 

It will include attributes for damage, defense, and other relevant information, as well as methods for using the ability in the game. 

We will apply polymorphism to different types of combat abilities with shared attributes and methods, while also exploring the use of inheritance to create sub-classes of abilities with unique properties and methods.

## Building Base Classes
### Scene Class

The `Scene` class represents each location or area in the game. It will include attributes for the scene's name, description, the chance of an enemy NPC spawning in the scene, a list of possible enemy NPCs that can spawn there, a dictionary of other Scenes the `Scene` is connected to, and a list of friendly NPCs the player can interact with.

First, let's define the `Scene` class and add some initial attributes:

    class Scene:
        def __init__(self, name, description, enemy_chance, possible_enemies, connected_scenes, friendly_npcs):
            self.name = name
            self.description = description
            self.enemy_chance = enemy_chance
            self.possible_enemies = possible_enemies
            self.connected_scenes = connected_scenes
            self.friendly_npcs = friendly_npcs

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

Finally, let's add some additional methods for interacting with the `Scene`:

    class Scene:
        def __init__(self, name, description, enemy_chance, possible_enemies, connected_scenes, friendly_npcs):
            self.name = name
            self.description = description
            self.enemy_chance = enemy_chance
            self.possible_enemies = possible_enemies
            self.connected_scenes = connected_scenes
            self.friendly_npcs = friendly_npcs
            
        def travel_to(self, scene_name):
            if scene_name in self.connected_scenes:
                current_scene = self.connected_scenes[scene_name]
                print(f"You have traveled to {current_scene.name}.")
            else:
                print("You cannot travel to that scene.")
                
        def spawn_enemy(self):
            if random.random() < self.enemy_chance:
                enemy_type = random.choice(self.possible_enemies)
                enemy = EnemyNPC(enemy_type)
                print(f"You have encountered a {enemy.name}.")
                return enemy
            else:
                return None
            
        def interact_with_npc(self, npc_name):
            if npc_name in self.friendly_npcs:
                npc = self.friendly_npcs[npc_name]
                print(f"{npc.name} says: {npc.dialogue}")
            else:
                print("There is no one here to interact with.")

In this code, we define methods that allow for enemy NPCs to spawn and for the player to interact with friendly NPCs. The `spawn_enemy` method randomly determines if an enemy NPC should spawn based on the `enemy_chance` attribute, and if so, chooses a random enemy type from the `possible_enemies` list and creates an instance of the `EnemyNPC` class.

The `interact_with_npc` method allows the player to interact with a friendly NPC in the `Scene`, if one exists. If the `npc_name` argument is in the current `Scene`'s `friendly_npcs` dictionary, we retrieve the corresponding NPC instance and print a message indicating their dialogue. Otherwise, we print a message indicating that there is no one to interact with.

By encapsulating and abstracting the data related to different scenes, we have created a flexible and reusable `Scene` class that can be used throughout the game.

### Character Class

The `Character` class represents all characters in the game, including friendly and hostile NPCs. It includes attributes for `name`, `description`, `health`, and damage (`min_damage` and `max_damage`), as well as methods for attacking other `Characters` and increasing or decreasing `health`.

    class Character:
        def __init__(self, name, description, max_health, min_damage, max_damage):
            self._name = name
            self._description = description
            self._max_health = max_health
            self._health = max_health
            self._min_damage = min_damage
            self._max_damage = max_damage
            
        def get_name(self):
            return self._name
        
        def get_description(self):
            return self._description
        
        def get_max_health(self):
            return self._max_health
        
        def get_health(self):
            return self._health
        
        def get_damage(self):
            return self._damage
        
        def set_health(self, health):
            if health <= 0:
                self._health = 0
            elif health >= self._max_health:
                self._health = self._max_health
            else:
                self._health = health
        
        def attack(self, target):
            damage = random.randrange(self.min_damage, self.max_damage)
            target.set_health(target.get_health() - damage)
            print(f"{self._name} attacked {target.get_name()} for {self._damage} damage.")

In this code, we define the `Character` class with an `__init__` method that takes in several arguments, including the `Character`'s `name`, `description`, `max_health`, `min_damage`, and `max_damage`. We then assign these attributes to instance variables using the `_` prefix to indicate that they are intended to be private.

We also define several getter methods for retrieving the `Character`'s `name`, `description`, `max_health`, `health`, `min_damage`, and `max_damage`. We define a `set_health` method that allows the `Character`'s `health` to be set to a new value, ensuring that it cannot exceed the `Character`'s `max_health` attribute. 

Finally, we define an `attack` method that takes in a `target` argument, generates a random integer according to the `Character`'s damage stats, reduces the `target`'s `health` by the `Character`'s damage, and prints a message indicating the attack.

By encapsulating the `Character`'s attributes and using getter and setter methods, we ensure that the `Character`'s internal state is protected from outside manipulation. By defining an `attack` method, we abstract away the implementation details of the `attack` action, allowing us to easily reuse this method for other classes that will have attacking capabilities.

In tomorrow's lesson, we use inheritance and polymorphism to build more specialized classes, such as `EnemyNPC` and `Player`, that inherit from the `Character` class.


### Item Class

The `Item` class represents all items in the game, including weapons, armor, consumable items, and spells. It includes attributes for `name`, `description`, and `quantity`, as well as a `use` method.

    class Item:
        def __init__(self, name, description, quantity=1):
            self._name = name
            self._description = description
            self._quantity = quantity
            
        def get_name(self):
            return self._name
        
        def get_description(self):
            return self._description
        
        def get_quantity(self):
            return self._quantity
        
        def set_quantity(self, quantity):
            self._quantity = quantity
        
        def use(self):
            pass

In this code, we define the `Item` class with an `__init__` method that takes in several arguments, including the `Item`'s `name`, `description`, and `quantity`. We then assign these attributes to instance variables using the `_` prefix to indicate that they are intended to be private.

We also define several getter methods for retrieving the `Item`'s `name`, `description`, and `quantity`. We define a `set_quantity` method that allows the `Item`'s `quantity` to be set to a new value. Finally, we define a `use` method, which will be implemented in the sub-classes for different types of items. This method allows us to abstract away the implementation details of item usage and ensures that each type of item has its own unique functionality.

By encapsulating the `Item`'s attributes and using getter and setter methods, we ensure that the `Item`'s internal state is protected from outside manipulation. By defining a `use` method, we abstract away the implementation details of item usage, allowing us to easily reuse this method for different types of items.

In tomorrow's lesson, we will use inheritance and polymorphism to build more specialized classes, such as `Weapon`, `Armor`, and `HealthPotion`, that inherit from the `Item` class.


### Ability Class

The `Ability` class represents all abilities that characters can use in the game, including offensive and defensive abilities. It includes attributes for `name`, `description`, and `power`, as well as a `use` method.

    class Ability:
        def __init__(self, name, description, power):
            self._name = name
            self._description = description
            self._power = power
            
        def get_name(self):
            return self._name
        
        def get_description(self):
            return self._description
        
        def get_power(self):
            return self._power
        
        def use(self, target):
            pass

In this code, we define the `Ability` class with an `__init__` method that takes in several arguments, including the `Ability`'s `name`, `description`, and `power`. We then assign these attributes to instance variables using the `_` prefix to indicate that they are intended to be private.

We also define several getter methods for retrieving the `Ability`'s `name`, `description`, and `power`. Finally, we define a `use` method, which will be implemented in the sub-classes for different types of abilities.

By encapsulating the `Ability`'s attributes and using getter methods, we ensure that the `Ability`'s internal state is protected from outside manipulation. By defining a `use` method, we abstract away the implementation details of ability usage, allowing us to easily reuse this method for different types of abilities.


## Lesson Summary

In this lesson, we have built the base classes for our adventure RPG game, including `Scene`, `Character`, `Item`, and `Ability`. We have explored how we can use encapsulation and abstraction to ensure that each class is flexible and reusable, and we have laid the foundation for inheritance and polymorphism in the next lesson.



