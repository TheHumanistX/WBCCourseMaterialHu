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

However, you probably noticed by now that all of our base classes have the same `name` and `description` attributes, along with identical getter methods for them. We can use inheritance to create a new super-class that all in-game assets inherit from, which we will call `Entity`:

    # This is the Entity class, from which all in-game assets are derived
    class Entity:
        def __init__(self, name, description):
            self.__name = name
            self.__description = description

        def get_name(self):
            return self.__name

        def get_description(self):
            return self.__description


## Character Sub-Classes
### EnemyNPC Class

The `EnemyNPC` class is a sub-class of the `Character` class. We don't have anything to give to `EnemyNPC` that isn't already inside `Character`, so I am leaving this one open for you to decide if you want to implement anything that only the `EnemyNPC` can do.

    class EnemyNPC(Character):
        def __init__(self, name, description, health, min_damage, max_damage, abilities, weapon=None, armor=None):
            super().__init__(name, description, health, min_damage, max_damage, abilities, weapon, armor)
        # We will leave this empty in case you want to do anything that needs it!

In this code, we define the `EnemyNPC` class as a sub-class of the `Character` class, and we pass it all the attributes of its base class. By inheriting from the `Character` class, we are able to reuse code that we defined earlier and only need to define additional functionality unique to `EnemyNPC`s.

### Player Class

The `Player` class is a sub-class of the `Character` class, and is the player's `Character` instance. It includes the `inventory` of items they are carrying, initialized as an empty list.

    class Player(Character):
        def __init__(self, name, description, health,  min_damage, max_damage):
            super().__init__(name, description, health, min_damage, max_damage)
            self.__inventory = []
        
        def get_inventory(self):
            return self.__inventory
        
        def add_to_inventory(self, item):
            self.__inventory.append(item)
        
        def remove_from_inventory(self, item):
            self.__inventory.remove(item)

Just like the `EnemyNPC` class, the `Player` class inherits from the `Character` class, and must provide initial values to the `Character` class's attributes in the `super()` constructor function.

We also define a private attribute `__inventory` to store the player's inventory, as well as getter and setter methods for the `inventory`. The `add_to_inventory` method allows the player to add an item to their inventory, and the `remove_from_inventory` method allows the player to remove an item from their inventory.

By defining inventory methods, we ensure that each player has their own unique inventory, while also abstracting away the details of how the inventory is managed.

We have now built the `Player` sub-class by inheriting from the `Character` class and using inheritance to make the `Player` a special type of `Character` in the game. We have also used encapsulation and abstraction to ensure that the details of how the `Player`'s inventory is managed are abstracted away.


### Weapon Class

The `Weapon` class is a sub-class of the `Item` class, which defines the specific properties and methods of weapons in the game. It includes attributes for the weapon's `name`, `description`, and `damage`.

    class Weapon(Item):
        def __init__(self, name, description, damage):
            super().__init__(name, description)
            self.__damage = damage

        def get_damage(self):
            return self.__damage

        def use(self, player):
            if self in player.inventory:
                player.equip_weapon(self)
            else:
                print("Weapon not found!")


In this code, we define the `Weapon` class as a sub-class of the `Item` class. We define a private attribute `__damage` to store the weapon's damage, as well as a getter method for the damage. Then, we use polymorphism to override the `use` method so that it equips the `Weapon` when called.

**Challenge:** Create a MagicWand class that inherits from the Weapon class and has a new attribute `__min_damage`. Use polymorphism to override `get_damage()` so that it returns a random range of values. This will create a weapon with randomized damage output using multilevel inheritance and polymorphism.


### Armor Class

The `Armor` class is a sub-class of the `Item` class, which defines the specific properties and methods of armor in the game. It includes attributes for the armor's `name`, `description`, and `armor` rating.

    class Armor(Item):
        def __init__(self, name, description, armor):
            super().__init__(name, description)
            self.__armor = armor

        def get_armor(self):
            return self.__armor

        def use(self, player):
            if self in player.inventory:
                player.equip_armor(self)
            else:
                print("Armor not found")

In this sub-class, we define a private attribute `__armor` to store the armor's damage reduction rating, as well as a getter method for it. Notice that the `use()` method is very similar to the `Weapon` class, but not exact--this is an example of polymorphism allowing the same function to do different things.

**Callenge:** Create a `MagicArmor` class that includes a `__deflect_chance` private attribute alongside its normal `__armor` attribute, and uses polymorphism to override the `get_armor()` method so that it generates a random integer from `0` - `100` first, and if the integer is less than or equal to the `__deflect_chance` then it returns `1000000` armor points--otherwise it just returns the regular armor points. This will create a suit of armor that has a chance to negate all damage.

### HealthPotion Class
The `HealthPotion` class is a sub-class of the `Item` class, and it includes the potion's `healing` amount.

class HealthPotion(Item):
    def __init__(self, name, description, healing):
        super().__init__(name, description)
        self.__healing = healing
    
    def get_healing(self):
        return self.__healing
    
    def use(self, character):
        character.heal(self.__healing)

Here, define a private attribute `__healing` to store the potion's healing amount, as well as a getter method for the healing amount. When then use polymorphism to override the `use` method so the player can use the potion, which calls the `heal` method of the `Character` class with the potion's `__healing` amount as the argument.


### Implementing New Character Methods

We need to add several new methods to the `Character` class that allow for equipping weapons and armor, as well as drinking healing potions. Let's implement these methods now. 

    import random
                                                                                                                                                                                                                                    
    # Let's add an abilities dictionary to our Character base class, and a method for accessing one
    # Let's also add weapon and armor slots, and methods to equip weapons and armor
    class Character(Entity):
        # This is getting stupidly long, so let's write it vertically
        def __init__(
                self,
                name,
                description,
                max_health,
                min_damage,
                max_damage,
                abilities=None,
                weapon=None,
                armor=None
        ):
            super().__init__(name, description)
            self.__max_health = max_health
            self.__health = max_health
            self.__max_energy = energy
            self.__energy = energy
            self.__min_damage = min_damage
            self.__max_damage = max_damage
            self.__abilities = abilities
            self.__weapon = weapon
            self.__armor = armor

        # Damage Methods
        def _get_min_damage(self):
            return self.__min_damage

        def _get_max_damage(self):
            return self.__max_damage

        def get_damage(self):
            return random.randrange(self._get_min_damage(), self._get_max_damage())

        def attack(self, target, extra_damage=0):
            damage = self.get_damage() + extra_damage

            if self.__weapon is not None:
                damage += self.__weapon.get_damage()

            target.take_damage(damage)
            print(f"{self.get_name()} attacked {target.get_name()} for {damage} damage.")

        def take_damage(self, damage):
            damage_taken = damage
            if self.__armor is not None:
                damage_taken = max(0, damage - self.__armor.get_armor())
            self.set_health(self.__health - damage_taken)

        # Health Methods
        def get_max_health(self):
            return self.__max_health

        def get_health(self):
            return self.__health

        def set_health(self, health):
            if health <= 0:  # Character dies
                self.__health = 0
                print(f"{self.get_name()} has died.")
                return
            elif health > self.get_max_health():
                self.__health = self.__max_health
            else:
                self.__health = health  # Normal health modification
            print(f"{self.get_name()} health: {self.get_health()}")

        def heal(self, amount):
            self.set_health(self.__health + amount)

        # Energy Methods
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

        # Equipment and Inventory Methods
        def equip_weapon(self, weapon):
            self.__weapon = weapon

        def equip_armor(self, armor):
            self.__armor = armor


We have added two new attributes `__weapon` and `__armor` to the `Character` class, which are initialized to `None`. The `equip_weapon` and `equip_armor` methods allow the player to equip a `Weapon` or `Armor`, respectively. The `take_damage` method calculates the amount of damage taken based on the character's armor and reduces the character's health accordingly. The `heal` method increases the character's health by a specified amount.

By adding these new methods to the `Character` class, we have increased the functionality of the RPG game and provided more ways for players to customize and enhance their characters.


## Lesson Summary
In today's lesson, we continued building our adventure RPG game. We created several sub-classes that inherit from the base classes of `Character` and `Item`, including `EnemyNPC`, `Player`, `Weapon`, `Armor`, and `HealthPotion`.

We also implemented several methods in the `Character` class, including `equip_weapon`, `equip_armor`, `take_damage`, `heal`, and `defense`, which make use of the attributes of the `Weapon` and `Armor` sub-classes that we created. These methods utilize the concepts of inheritance and polymorphism to allow for flexible and reusable code.

Overall, today's lesson focused on building more specialized classes that inherit from the base classes and using the methods and attributes of those sub-classes in the `Character` class. The use of inheritance and polymorphism allowed us to create specialized classes that shared many properties and methods with the base classes, while still having unique properties and methods.



