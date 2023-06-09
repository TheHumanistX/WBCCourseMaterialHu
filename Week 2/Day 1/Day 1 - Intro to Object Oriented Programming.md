# Programming Fundamentals: Intro to Object Oriented Programming

### Lesson Objectives:
* Understand the importance of Object Oriented Programming (OOP).
* Learn how OOP is used in various development fields.
* Compare OOP to procedural programming.
* Introduce the four pillars of OOP: encapsulation, abstraction, inheritance, and polymorphism.

## Lesson Outline:
In this lesson, we will cover the basics of Object Oriented Programming, or OOP for short. We'll discuss its importance in the world of software development and explore how OOP is used across various development fields. We will also compare OOP to procedural programming to understand their differences.

By the end of this lesson, you will have a good understanding of the four pillars of OOP – encapsulation, abstraction, inheritance, and polymorphism – and how they relate to software development. We will also provide practical examples to demonstrate these concepts in action.

## Intro to Object Oriented Programming
In this section, we will introduce the concept of Object Oriented Programming. OOP is a programming paradigm that represents the real world in terms of objects and their interactions. Instead of focusing on the sequence of actions to perform, as in procedural programming, OOP focuses on organizing code around objects and their behavior.

Object Oriented Programming offers several advantages over procedural programming. Some of the benefits include:

* **Modularity:** OOP allows for better organization of code, making it easier to maintain and expand upon.
* **Code reuse:** OOP promotes the reuse of code through inheritance, reducing the need to write repetitive code.
* **Abstraction:** OOP provides a way to hide the complexity of a system and only expose the necessary details to the user.

As we progress through this lesson, we will discuss these benefits in more detail, and explore how they apply to various development fields. We will also introduce the four pillars of OOP – encapsulation, abstraction, inheritance, and polymorphism – which are the fundamental principles that guide the design and organization of object-oriented programs.

## The importance of Object Oriented Programming (OOP)
In this section, we will discuss the importance of OOP in the software development landscape. OOP has become a widely-used paradigm across various development fields, such as web development, game development, mobile app development, and enterprise software development. This is because OOP provides a more natural way to model and design software systems that are flexible, maintainable, and scalable.

The benefits of using OOP in software development include:

* **Code reuse:** OOP encourages the reuse of code through inheritance, which allows developers to create new classes based on existing ones. This promotes the DRY (Don't Repeat Yourself) principle, reducing the amount of repetitive code that needs to be written.
* **Modularity:** OOP promotes the organization of code into modules, which represent individual components of a system. This makes it easier to maintain, test, and modify the code, as each module can be developed and tested independently of the others.
* **Easier maintenance:** Due to its modularity, OOP code is generally easier to maintain and update, as changes to one part of the system often have minimal impact on other parts.
* **Improved collaboration:** OOP's modular design allows multiple developers to work on different parts of the system simultaneously, leading to more efficient collaboration and faster development cycles.

In contrast to procedural programming, which focuses on the sequence of actions to perform, OOP organizes code around objects and their behavior. This shift in focus results in code that is more maintainable, flexible, and easier to understand.

By adopting OOP principles, developers can create software systems that are more robust and easier to manage, leading to better overall software quality and reduced development time.


## The Four pillars of OOP
In this section, we will introduce the four main principles of Object Oriented Programming, often referred to as the four pillars of OOP. These principles are the foundation of OOP and guide developers in designing and organizing object-oriented programs. The four pillars are:

* Encapsulation
* Abstraction
* Inheritance
* Polymorphism

#### 1. Encapsulation

Encapsulation is the principle of bundling data (attributes) and methods (functions) that operate on that data within a single unit, called an object. It's a way to hide the internal implementation details of an object and only expose the necessary attributes and methods to the outside world. Encapsulation helps to protect the object's data from unintended modification and ensures that the object's behavior is consistent and predictable.

#### 2. Abstraction

Abstraction is the process of simplifying complex systems by breaking them down into smaller, more manageable parts. In OOP, this is done by creating classes that represent high-level concepts, and using these classes to build more specific subclasses. Abstraction allows developers to focus on the essential features of an object, hiding the complexity and implementation details. It promotes code readability, maintainability, and modularity.

#### 3. Inheritance

Inheritance is the principle that allows one class (subclass) to inherit properties and methods from another class (parent class or superclass). This promotes code reuse and modularity, as common functionality can be defined in the parent class and extended or overridden in the subclass. Inheritance provides a natural way to model relationships between classes, making the code more organized and easier to understand.

#### 4. Polymorphism

Polymorphism is perhaps the most difficult to understand until you can see it in action. It is the ability of objects and methods to take on different forms, allowing them to be treated as objects of a common superclass--without actually inheriting from one.

Polymorphism can be achieved through method overloading, method overriding, and duck typing, each providing different ways to create objects that share a common interface or behavior. 

Note that Python only supports method overriding and duck typing, but not method overloading. Out of those two techniques we will use method overriding the most.

Again, polymorphism is easy to understand once you can see how it works, but trying to describe it now will only result in confusion.


## Practical Examples
Let's see how Object Oriented Programming is implemented using some practical examples.

### Encapsulation

Encapsulation is the process of bundling data and methods that operate on that data within a single unit, called an object. Objects are instances of classes, which are simply templates or "blueprints" of objects.

If you remember from last week, we already learned how to create classes and objects in Python, and this week we will *primarily* be working with classes and objects. If you were confused or lost about what we need classes and objects for, then this week will dispel all confusion, and you will see why they are so powerful for achieving encapsulation.

Let's create a simple BankAccount class to demonstrate encapsulation:

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

In this example, we've created a BankAccount class with private attributes `__account_number` and `__balance`. The methods `get_account_number()`, `get_balance()`, `deposit()`, and `withdraw()` are used to interact with these private attributes, thus encapsulating the object's data. 

Note that we used double-underscores `__` to "mangle" the attribute names, which makes them completely invisible to outside classes. Only using a single-underscore `_` will not hide the attributes to other classes, but PyCharm will complain if you attempt to access them. However, other IDEs may not care, and other developers may not be as OOP-savvy as you.

While I prefer to use double-underscores to make private attributes *truly* private, it is not necessary to do so. However, even allowing the ability to access these attributes is--in my opinion--a potentially bad idea if you are working with people whose competence you can't fully trust. 

This is actually part of the reason why we use Encapsulation in the first place: To prevent people less competent than ourselves from modifying extremely important attributes that can cause serious bugs and fatal errors if they are used directly.

Now let's move on to the next principle, Abstraction.

### Abstraction
Abstraction is the process of simplifying complex systems by breaking them down into smaller, more manageable parts. In OOP, abstraction is achieved by creating classes and objects that only expose the necessary information and functionality to the outside world.

Continuing with our BankAccount example, let's add a new class called `Bank` to demonstrate abstraction:

    class Bank:
        def __init__(self):
            self._accounts = {}

        def create_account(self, account_number, initial_balance):
            if account_number not in self._accounts:
                self._accounts[account_number] = BankAccount(account_number, initial_balance)
            else:
                print("Account number already exists.")

        def get_account(self, account_number):
            if account_number in self._accounts:
                return self._accounts[account_number]
            else:
                print("Account number not found.")

        def deposit(self, account_number, amount):
            account = self.get_account(account_number)
            if account:
                account.deposit(amount)

        def withdraw(self, account_number, amount):
            account = self.get_account(account_number)
            if account:
                account.withdraw(amount)

In this example, we've created a `Bank` class that manages multiple `BankAccount` objects. The `Bank` class exposes methods like `create_account()`, `deposit()`, and `withdraw()` to interact with the `BankAccount` objects without exposing their internal implementation details. This is an example of abstraction at work.

Note that I'm only using the single-underscore convention in this example. However, you can use double-underscores if you wish, I'm just using single-underscores to show you an example of how they look compared to double-underscores. 

In this particular example it actually makes more sense to use double-underscores for individual `BankAccount`s, as they hold *extremely* sensitive attributes that absolutely **nobody** should be accessing or modifying outside of the methods provided to interact with them! Meanwhile, the `Bank` class uses a simple single-underscore to signal that its `accounts` are a private attribute, but that doesn't stop anyone from actually accessing them. However, this would still only give them access to the `BankAccount` methods, rather than their attributes, thanks to attribute name-mangling.

#### Example Scenario
Let's consider a real-world scenario where you are writing a bank's software in Python. In this scenario, existing programs cannot be updated, but new programs can be added. In this case, by mangling the attributes inside `BankAccount` you are *forever* protecting them from anyone who attempts to create a new Python module that tries to access them, but you are also allowing new Python modules to be created that can use the `Bank`'s `accounts` private attribute to build a new set of functions that use it.

Meanwhile, whis design decision could help protect customers against a hacker who uploads a malicious Python module into the bank's system, only to find that they can't arbitrarily modify the data stored inside of individual accounts--like everyone else, they would have to use the `get_account_number()`, `get_balance()`, `deposit()`, and `withdraw()` methods that are exposed for every `BankAccount` object.

This is why Encapsulation and Abstraction are very important when used wisely!

Now let's move on to the next principle, Inheritance.


### Inheritance
Inheritance allows one class to inherit attributes and methods from another class, promoting code reusability and modularity. The class that inherits is called the "subclass", or "child class", and the class being inherited from is called the "base class", "superclass", or "parent class".

Let's extend our example by creating a `SavingsAccount` class that inherits from the `BankAccount` class to demonstrate inheritance:

    class SavingsAccount(BankAccount):
        def __init__(self, account_number, balance, interest_rate):
            super().__init__(account_number, balance)
            self._interest_rate = interest_rate

        def get_interest_rate(self):
            return self._interest_rate

        def apply_interest(self):
            interest = self._balance * self._interest_rate
            self._balance += interest

In this example, we've created a `SavingsAccount` subclass that inherits from the `BankAccount` superclass. The `SavingsAccount` class has access to all attributes and methods from the `BankAccount` class, and it adds its own `_interest_rate` attribute and `apply_interest()` method. Note that only `SavingsAccount` instances can use these new methods, while regular `BankAccount` instances cannot.

Now let's move on to the last principle, Polymorphism.


### Polymorphism
Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables us to write more flexible and reusable code by providing a common interface for different classes.

These definitions for polymorphism are textbook common, but they are also incredibly vague and not very useful. So, let's actually see what polymorphism means! 

To demonstrate polymorphism, let's create another class called `CheckingAccount` that also inherits from `BankAccount` and adds its own functionality:

    class CheckingAccount(BankAccount):
        def __init__(self, account_number, balance, overdraft_limit):
            super().__init__(account_number, balance)
            self._overdraft_limit = overdraft_limit

        def get_overdraft_limit(self):
            return self._overdraft_limit

        def withdraw(self, amount):
            if self._balance - amount >= -self._overdraft_limit:
                self._balance -= amount
            else:
                print("Insufficient funds, including overdraft limit.")

In this example, we've created a `CheckingAccount` subclass that also inherits from the `BankAccount` superclass. The `CheckingAccount` class adds an `_overdraft_limit` attribute and overrides the `withdraw()` method to support overdrafts.

The key part of this example that is polymorphism is the overridden `withdraw()` method. Take a moment to go look at how `BankAccount` implements this method, and then compare that to how `CheckingAccount` implements it. They are slightly different from each other. So, when an instance of `CheckingAccount` calls its `withdraw()` method, it will use the `CheckingAccount` version of that method instead of its parent class's method.

This is the essence of what polymorphism is.

Now, let's see how we can use polymorphism in our `Bank` class to manage both `SavingsAccount` and `CheckingAccount` objects:

    class Bank:
        # ...

        def create_savings_account(self, account_number, initial_balance, interest_rate):
            if account_number not in self._accounts:
                self._accounts[account_number] = SavingsAccount(account_number, initial_balance, interest_rate)
            else:
                print("Account number already exists.")

        def create_checking_account(self, account_number, initial_balance, overdraft_limit):
            if account_number not in self._accounts:
                self._accounts[account_number] = CheckingAccount(account_number, initial_balance, overdraft_limit)
            else:
                print("Account number already exists.")

        # ...

Take a moment to look at the regular `create_account()` method, and specifically notice that it creates a `BankAccount` object, whereas our two new methods create `SavingsAccount` and `CheckingAccount` objects--despite both being stored in the same `accounts` dictionary. By treating `SavingsAccount` and `CheckingAccount` objects as `BankAccount` objects, the `Bank` class can manage different account types using the same interface.

This is also what Polymorphism means: Treating objects of different classes (`SavingsAccount`, `CheckingAccount`) as objects of a common superclass (`BankAccount`).


## Lesson Summary

In this lesson, we've introduced Object-Oriented Programming (OOP) and its importance in the field of software development. We also discussed the benefits of using OOP, such as code reuse, modularity, and easier maintenance.

We covered the four pillars of OOP:

* **Encapsulation:** Bundling data and methods that operate on that data within a single unit (class) and restricting access to certain components.
* **Abstraction:** Simplifying complex systems by exposing only essential details and hiding the internal complexity.
* **Inheritance:** Enabling code reuse by allowing new classes to inherit properties and methods from existing classes.
* **Polymorphism:** Allowing objects of different classes to be treated as objects of a common superclass, providing flexibility and reusability in code.

We also demonstrated practical examples of each principle in Python, building a simple bank account management system that employs all OOP principles.

By understanding and applying OOP concepts, you will be better equipped to design and build efficient, modular, and maintainable software applications. As you progress through this course, you will continue to build on these foundational concepts.

Our project for this week--a text-based adventure RPG game--will be fairly complex. However, by planning ahead and using OOP we can not only make it much easier, but we can also make it modular and easier to expand upon. Whether you have any interest in game development or not, this project will look very good in a portfolio, as it clearly demonstrates how Object-Oriented Programming works.









