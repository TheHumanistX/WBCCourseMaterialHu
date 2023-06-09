
# OOP Encapsulation and Abstraction
## Lesson Objectives
Welcome to the lesson on Encapsulation and Abstraction. In our previous lesson, we introduced you to the fundamentals of Object-Oriented Programming and the four pillars of OOP: encapsulation, abstraction, inheritance, and polymorphism. Today, we will delve deeper into two of those principles--encapsulation and abstraction--and learn how to implement them effectively in Python classes.

The objectives of this lesson are to:
* Understand the concepts of encapsulation and abstraction in OOP.
* Learn how to implement encapsulation and abstraction in Python classes.
* Apply encapsulation and abstraction principles in a simple Python project.

By the end of this lesson, you will have a strong grasp of encapsulation and abstraction principles and be able to incorporate them into your Python projects to create cleaner, more efficient, and maintainable code.

---

## Introduction - Encapsulation and Abstraction
Let's first review what encapsulation and abstraction are.

Encapsulation and abstraction are two fundamental principles in Object-Oriented Programming that help us create clean, organized, and efficient code. They promote modularity and separation of concerns, making it easier to understand, maintain, and expand our programs.

Encapsulation is the concept of bundling data (attributes) and methods (functions) that operate on the data within a single unit called a class. This allows us to hide the implementation details of a class from the outside world, protecting the data from unintended modifications and providing a clear interface for interacting with the class.

Abstraction, on the other hand, focuses on simplifying complex systems by breaking them down into smaller, more manageable components. It provides a high-level interface for interacting with a class, hiding the underlying complexity and implementation details. Abstraction ensures that a class only exposes what is necessary for the outside world to interact with it, while keeping the inner workings hidden.

Together, encapsulation and abstraction make it easier to design and maintain large-scale applications, as well as promote code reuse and modular programming.

In this lesson, we will explore the concepts of encapsulation and abstraction in Python, learn how to implement them in classes, and apply them in a simple project. Let's begin by discussing encapsulation in more detail.

---

## Encapsulation
Encapsulation is the process of hiding data or information within a class to prevent outside access or modification. In Python, encapsulation is achieved through the use of private and public attributes.

Public attributes are accessible from outside the class and can be accessed and modified freely. On the other hand, private attributes are only accessible from within the class itself and cannot be accessed or modified directly from outside the class.

To define private attributes in Python, we can use either the single-underscore (_) prefix or the double-underscore prefix (__). For example, if we define a private attribute `__password`, this attribute can only be accessed and modified from within the class. It is completely invisible to outside classes. We call this "name mangling", which is a different topic altogether.

On the other hand, if we define the same attribute as `_password`, then other classes can technically still access and modify it, but Python-specific IDEs like PyCharm will complain fiercely if you try to access a private attribute or method from another class.

Here is an example of encapsulation in Python:

    class User:
        def __init__(self, username, password):
            self.username = username
            self.__password = password

        def login(self, username, password):
            if self.username == username and self.__password == password:
                print("Login successful!")
            else:
                print("Login failed. Incorrect username or password.")

In this example, we have defined a User class that has two attributes, `username` and `__password`. The `__password` attribute is private and can only be accessed from within the `User` class, while the `username` attribute can be accessed and modified by anything (which, obviously, is problematic--but we'll run with it for the sake of demonstration).

We have also defined a login method that takes a `username` and `password` as input and checks if they match the `username` and `__password` attributes of the `User` object. If the login is successful, the method prints `"Login successful!"` otherwise it prints `"Login failed. Incorrect username or password."`

Encapsulation provides several benefits, including data security, code organization, and ease of maintenance. By hiding data within a class, we can prevent unwanted access or modification from outside the class and ensure that our code is more secure.

---

## Abstraction
Now that we have covered encapsulation, let's move on to discussing abstraction.

Abstraction is the process of simplifying complex systems by hiding unnecessary details while emphasizing essential features. In Python, abstraction is typically achieved through the use of public and private methods.

Public methods are accessible from outside the class and can be used to access or modify the internal state of the object. Private methods are only accessible from within the class itself and are used to perform internal operations that are not relevant to the outside world.

Defining private methods in Python is done the exact same way as attributes. We can use the single or double underscore prefix to either mark a method as private, or render it completely invisible to everything outside the class. For example, if we define a private method `__calculate_tax`, this method can only be accessed and called from within the class.

Let's revisit our `BankAccount` class from the previous lesson, except let's add two new methods, `__calculate_interest` and `add_interest`:

    class BankAccount:
        def __init__(self, account_number, balance):
            self.__account_number = account_number
            self.__balance = balance

        def get_account_number(self):
            return self.__account_number

        def get_balance(self):
            return self.__balance

        def deposit(self, amount):
            self.__balance += amount

        def withdraw(self, amount):
            if amount <= self.__balance:
                self.__balance -= amount
            else:
                print("Insufficient balance.")

        def __calculate_interest(self):
            interest_rate = 0.05
            interest = self.__balance * interest_rate
            self.__balance += interest

        def add_interest(self):
            self.__calculate_interest()
            print("Interest added. New balance:", self.__balance)

The `deposit` and `withdraw` methods are public and can be called from outside the class to modify the `__balance` attribute, while the `add_interest` method is also public and is used to add interest to the account balance.

However, the `__calculate_interest` method is private and can only be accessed from within the `BankAccount` class. This method calculates the interest on the account balance and updates the `__balance` attribute accordingly. This is abstraction in action.

Abstraction provides several benefits, including code simplicity, modularity, and ease of maintenance. By hiding unnecessary details and providing a simple interface to the outside world, we can create code that is easier to understand and maintain.

---

## Applying Encapsulation and Abstraction
Now that we have covered abstraction, let's move on to discussing how to apply encapsulation and abstraction principles in a simple Python project.

For this project, let's imagine that we are building a simple game where the player can create and manage their own character. We want to use encapsulation and abstraction principles to ensure that the player's character data is secure and that the game code is easy to understand and maintain.

Here is an example implementation of the game using encapsulation and abstraction:

    class Character:
        def __init__(self, name, health, strength):
            self.__name = name
            self.__health = health
            self.__strength = strength

        def get_name(self):
            return self.__name

        def get_health(self):
            return self.__health

        def get_strength(self):
            return self.__strength

        def set_health(self, health):
            self.__health = health

        def set_strength(self, strength):
            self.__strength = strength


    class Game:
        def __init__(self):
            self.__player_character = None

        def create_character(self, name, health, strength):
            self.__player_character = Character(name, health, strength)

        def get_character_health(self):
            return self.__player_character.get_health()

        def set_character_health(self, health):
            self.__player_character.set_health(health)

        def get_character_strength(self):
            return self.__player_character.get_strength()

        def set_character_strength(self, strength):
            self.__player_character.set_strength(strength)

In this implementation, we have defined two classes, `Character` and `Game`. The `Character` class represents the player's character and has private attributes `__name`, `__health`, and `__strength`. 

The `Game` class represents the game itself and has a private attribute `__player_character`, which is an instance of the `Character` class representing the player's character. We have defined public getter and setter methods for all attributes in both classes, allowing us to access and modify these attributes in a controlled manner.

This implementation ensures that the player's character data is secure, as the private attributes can only be accessed and modified through the getter and setter methods. It also ensures that the game code is easy to understand and maintain, as the `Character` class and its methods encapsulate the details of the character data and the `Game` class and its methods abstract away the details of the game mechanics.

To apply these principles in a real-world project, you would need to think carefully about the design of your classes and the data they represent, and carefully consider which attributes and methods should be private and which should be public. By using encapsulation and abstraction principles, you can create code that is secure, modular, and easy to maintain.

## Lesson Summary
In this lesson, we:
* Discussed the concepts of encapsulation and abstraction in OOP.
* Explained how to implement encapsulation and abstraction in Python classes.
* Demonstrated how encapsulation can be used to hide data or information within a class to prevent outside access or modification.
* Explained how abstraction can be used to simplify complex systems by hiding unnecessary details while emphasizing essential features.

We have also applied these principles in a simple Python project, where we created a game that uses encapsulation and abstraction to ensure that the player's character data is secure and that the game code is easy to understand and maintain.

To summarize, encapsulation and abstraction are two of the most fundamental concepts in OOP, and they provide several benefits, including data security, code organization, modularity, and ease of maintenance. By carefully designing your classes and using these principles, you can create code that is secure, modular, and easy to maintain.

Now, let's move on to starting this week's project!



