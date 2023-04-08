# Applying OOP Part 2: Inheritance and Polymorphism
## Introduction: Sub-classes
Welcome back! In the previous lesson, we built the base classes for our game, including `Scene`, `Character`, `Item`, and `Ability`, and explored how we can use encapsulation and abstraction to ensure that each class is flexible and reusable. Today, we will continue building our game by using inheritance and polymorphism to create more specialized classes for the game.

We will create the following sub-classes:

* `EnemyNPC`: A sub-class of `Character` that defines the specific properties and methods of enemies in the game.
* `Player`: A sub-class of `Character` that defines the specific properties and methods of the player character in the game.
* `Weapon`: A sub-class of `Item` that defines the specific properties and methods of weapons in the game.
* `Armor`: A sub-class of `Item` that defines the specific properties and methods of armor in the game.
* `HealthPotion`: A sub-class of `Item` that defines the specific properties and methods of health potions in the game.

Each of these sub-classes will inherit from the base classes we created in the previous lesson and will add more specific functionality for the game. We will use polymorphism to ensure that these sub-classes can be used interchangeably with the base classes, allowing for more flexibility and reusability in our code.

## Character Sub-Classes
### EnemyNPC Class

The `EnemyNPC` class is a sub-class of the `Character` class, which defines the specific properties and methods of enemies in the game. It include an attribute for the `EnemyNPC`'s `ability` used in combat. Because `EnemyNPC` inherits from `Character`, it also inherits all of `Character`'s attributes as well, which must be set by the `super` function.

    class EnemyNPC(Character):
        def __init__(self, name, description, health, min_damage, max_damage, ability):
            super().__init__(name, description, health, min_damage, max_damage)
            self._ability = ability
        
        def get_ability(self):
            return self._ability
        
        def use_ability(self, target):
            self._ability.use(target)

In this code, we define the `EnemyNPC` class as a sub-class of the `Character` class. We pass in the `EnemyNPC`'s `name`, `description`, `health`, `damage`, and ability to the `__init__` method of the parent class using the `super()` function. This ensures that the `EnemyNPC` inherits all the attributes and methods of the `Character` class.

We also define a getter method for retrieving the `EnemyNPC`'s ability, which allows us to access the ability outside of the `EnemyNPC` class. Finally, we define a `use_ability` method, which allows the `EnemyNPC` to use its ability on a target.

By inheriting from the `Character` class, we are able to reuse code that we defined earlier and only need to define additional functionality unique to `EnemyNPC`s. By defining a `use_ability` method, we ensure that each `EnemyNPC`'s `ability` has its own unique functionality, while also abstracting away the details of how the `ability` works.

In this section, we have built the `EnemyNPC` sub-class by inheriting from the `Character` class and using polymorphism to define the specific properties and methods of enemies in the game. We have also used encapsulation and abstraction to ensure that each `EnemyNPC`'s internal state is protected and that the details of how their ability works are abstracted away.

### Player Class

The `Player` class is a sub-class of the `Character` class, which defines the specific properties and methods of the player character in the game. It includes attributes for the player's `name`, `description`, `health`,  `min_damage`, `max_damage`, and the `inventory` of items they are carrying.

    class Player(Character):
        def __init__(self, name, description, health,  min_damage, max_damage):
            super().__init__(name, description, health, min_damage, max_damage)
            self._inventory = []
        
        def get_inventory(self):
            return self._inventory
        
        def add_to_inventory(self, item):
            self._inventory.append(item)
        
        def remove_from_inventory(self, item):
            self._inventory.remove(item)

In this code, we define the `Player` class as a sub-class of the `Character` class. We pass in the player's `name`, `description`, `health`, and damages to the `__init__` method of the parent class using the `super()` function. This ensures that the `Player` inherits all the attributes and methods of the `Character` class.

We also define a private attribute _inventory to store the player's `inventory`, as well as getter and setter methods for the `inventory`. The `add_to_inventory` method allows the player to add an item to their `inventory`, and the `remove_from_inventory` method allows the player to remove an item from their `inventory`.

By inheriting from the `Character` class, we are able to reuse code that we defined earlier and only need to define additional functionality unique to the `Player`. By defining `inventory` methods, we ensure that each player has their own unique `inventory`, while also abstracting away the details of how the `inventory` is managed.

In this section, we have built the `Player` sub-class by inheriting from the `Character` class and using polymorphism to define the specific properties and methods of the player character in the game. We have also used encapsulation and abstraction to ensure that each `Player`'s internal state is protected and that the details of how their `inventory` is managed are abstracted away.


### Weapon Class

The `Weapon` class is a sub-class of the `Item` class, which defines the specific properties and methods of weapons in the game. It includes attributes for the weapon's `name`, `description`, and `damage`.

    class Weapon(Item):
        def __init__(self, name, description, damage):
            super().__init__(name, description)
            self._damage = damage

        def get_damage(self):
            return self._damage

        def use(self, player):
            if self in player.inventory:
                player.equip_weapon(self)


In this code, we define the `Weapon` class as a sub-class of the `Item` class. We pass in the weapon's name and description to the `__init__` method of the parent class using the `super()` function. This ensures that the `Weapon` inherits all the attributes and methods of the `Item` class.

We also define a private attribute `_damage` to store the weapon's damage, as well as a getter method for the damage.

In this section, we have created the `Weapon` sub-class, which uses inheritance to define the specific properties and methods of weapons in the game, and uses encapsulation and abstraction to hide the inner-workings of those properties.

**Challenge:** Create a MagicWand class that inherits from the Weapon class and has a new attribute `_min_damage`. Use polymorphism to override `get_damage()` so that it returns a random range of values. This will create a weapon with randomized damage output.


### Armor Class

The `Armor` class is a sub-class of the `Item` class, which defines the specific properties and methods of armor in the game. It includes attributes for the armor's `name`, `description`, and `armor` rating.

    class Armor(Item):
        def __init__(self, name, description, armor):
            super().__init__(name, description)
            self._armor = armor

        def get_armor(self):
            return self._armor

        def use(self, player):
            if self in player.inventory:
                player.equip_armor(self)

In this code, we define the `Armor` class as a sub-class of the `Item` class. We pass in the armor's `name` and `description` to the `__init__` method of the parent class using the `super()` function. This ensures that the `Armor` inherits all the attributes and methods of the `Item` class.

We also define a private attribute `_armor` to store the armor's armor rating, as well as a getter method for the armor rating.

In this section, we have created the `Armor` sub-class and used inheritance to define the specific properties and methods of armor in the game, and we used encapsulation and abstraction to ensure the Armor's internal state is protected and that the details of how the armor's defense is applied are abstracted away.

**Callenge:** Create a `MagicArmor` class that includes a `_deflect_chance` private attribute, and uses polymorphism to override the `get_armor()` method so that it generates a random integer from 0 - 100 first, and if the integer is less than or equal to the `_deflect_chance` then it returns 1000000 armor points--otherwise it just returns the regular armor points. This will create a suit of armor that has a chance to negate all damage.

### HealthPotion Class

The `HealthPotion` class is a sub-class of the `Item` class, which defines the specific properties and methods of health potions in the game. It includes attributes for the potion's `name`, `description`, and `healing` amount.

class HealthPotion(Item):
    def __init__(self, name, description, healing):
        super().__init__(name, description)
        self._healing = healing
    
    def get_healing(self):
        return self._healing
    
    def use(self, character):
        character.heal(self._healing)

In this code, we define the `HealthPotion` class as a sub-class of the `Item` class. We pass in the potion's `name` and `description` to the `__init__` method of the parent class using the `super()` function. This ensures that the `HealthPotion` inherits all the attributes and methods of the `Item` class.

We also define a private attribute `_healing` to store the potion's healing amount, as well as a getter method for the healing amount. The `use` method allows the player to use the potion, which calls the `heal` method of the `Character` class with the potion's healing amount as an argument.

By defining the `use` method to heal the character, we allow the `Character` class to handle the healing in its `heal` method. This allows us to reuse the heal method of the `Character` class and only define additional functionality unique to the `HealthPotion`.

In this section, we have built the `HealthPotion` sub-class by inheriting from the `Item` class and using polymorphism to define the specific properties and methods of health potions in the game. We have also used encapsulation and abstraction to ensure that each `HealthPotion`'s internal state is protected and that the details of how the potion's healing is applied are abstracted away.


### Implementing New Character Methods

We have added several new methods to the `Character` class that allow for equipping weapons and armor and healing. Let's implement these methods now. Refer to the RPG Game Class Diagram if you'd like to try implementing these methods on your own.

Here is our new Character class:

import random

    class Character:
        def __init__(self, name, description, health):
            self._name = name
            self._description = description
            self._health = health
            self._max_health = health
            self._min_damage = 1
            self._max_damage = 1
            self._weapon = None
            self._armor = None
        
        def get_name(self):
            return self._name
        
        def get_description(self):
            return self._description
        
        def get_health(self):
            return self._health
        
        def get_min_damage(self):
            return self._min_damage
        
        def get_max_damage(self):
            return self._max_damage
        
        def equip_weapon(self, weapon):
            self._weapon = weapon
        
        def equip_armor(self, armor):
            self._armor = armor
        
        # Does not allow damage to enter negative numbers due to max function
        def take_damage(self, damage):
            if self._armor is None:
                self._health -= damage
            else:
                self._health -= max(0, damage - self._armor.get_armor())
        
        # Does not allow health to surpass max_health due to min function
        def heal(self, amount):
            self._health = min(self._max_health, self._health + amount)
        
        def attack(self, target):
            damage = random.randint(self._min_damage, self._max_damage)
            target.take_damage(damage + self.weapon.get_damage())


We have added two new attributes `_weapon` and `_armor` to the class, which are initialized to `None`. The `equip_weapon` and `equip_armor` methods allow the player to equip a `Weapon` or `Armor`, respectively. The `take_damage` method calculates the amount of damage taken based on the character's armor and reduces the character's health accordingly. The `heal` method increases the character's health by a specified amount.

By adding these new methods to the `Character` class, we have increased the functionality of the RPG game and provided more ways for players to customize and enhance their characters.


## Lesson Summary
In today's lesson, we continued building our adventure RPG game. We created several sub-classes that inherit from the base classes of `Character` and `Item`, including `EnemyNPC`, `Player`, `Weapon`, `Armor`, and `HealthPotion`.

We also implemented several methods in the `Character` class, including `equip_weapon`, `equip_armor`, `take_damage`, `heal`, and `defense`, which make use of the attributes of the `Weapon` and `Armor` sub-classes that we created. These methods utilize the concepts of inheritance and polymorphism to allow for flexible and reusable code.

Overall, today's lesson focused on building more specialized classes that inherit from the base classes and using the methods and attributes of those sub-classes in the `Character` class. The use of inheritance and polymorphism allowed us to create specialized classes that shared many properties and methods with the base classes, while still having unique properties and methods.



