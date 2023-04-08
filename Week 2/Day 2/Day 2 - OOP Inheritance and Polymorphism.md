# OOP: Inheritance and Polymorphism

## Lesson Objectives:
Welcome to today's lesson on Inheritance and Polymorphism in Python OOP. In this lesson, we will explore how inheritance and polymorphism are used in Python OOP to promote code reuse, flexibility, and reusability.
Lesson Objectives:

By the end of this lesson, you should be able to:

* Understand the concepts of inheritance and polymorphism in Python OOP.
* Learn about different types of inheritance and how to implement them in Python.
* Explore the flexibility and reusability in code through polymorphism.

Inheritance and polymorphism are fundamental concepts in OOP, and are widely used in modern programming languages. By the end of this lesson, you will have a solid understanding of how inheritance and polymorphism work in Python, and how to apply them in your own code.

## Introduction
Inheritance and polymorphism are two of the most important concepts in Object-Oriented Programming (OOP). Inheritance allows us to create new classes that inherit properties and methods from existing classes, promoting code reuse and making our code more efficient and maintainable.

Polymorphism, on the other hand, allows us to use a single interface to represent different data types or objects, making our code more flexible and reusable.

In this lesson, we will cover different types of inheritance, such as single inheritance, multiple inheritance, and multilevel inheritance. We will also explore how to use polymorphism in Python, including method overloading, method overriding, and duck typing.

Additionally, we will provide practical examples and a project for you to apply these concepts in a real-world application.

So let's get started and dive into the world of inheritance and polymorphism in Python OOP!


## Inheritance
Inheritance is a way of creating new classes that are built upon existing classes. The new class, called a derived class or subclass, inherits all the properties and methods of the existing class, called the base class or superclass.

There are three types of inheritance in Python:

* Single Inheritance: In this type of inheritance, a derived class inherits from a single base class.

* Multiple Inheritance: In this type of inheritance, a derived class inherits from multiple base classes.

* Multilevel Inheritance: In this type of inheritance, a derived class inherits from a base class, which in turn inherits from another base class.

To implement inheritance in Python, we use the syntax of `class DerivedClass(BaseClass)`. The derived class can then access all the properties and methods of the base class, and can also override or add new properties and methods as needed.

#### Single Inheritance

Let's take a look at an example of single inheritance in Python:

    class Animal:
        def __init__(self, name, age):
            self.name = name
            self.age = age

        def eat(self):
            print(f"{self.name} is eating.")

    class Dog(Animal):
        def bark(self):
            print("Woof!")

    dog = Dog("Fido", 2)
    print(dog.name)
    dog.eat()
    dog.bark()

In this example, we have defined two classes: Animal and Dog. The Animal class has an init method that initializes the name and age properties of the animal, and an eat method that prints a message indicating that the animal is eating.

The Dog class inherits from the Animal class, and has an additional method called bark that prints a message indicating that the dog is barking. We have then created an instance of the Dog class, and accessed the name and age properties of the Animal class through the derived class.

#### Multiple Inheritance
Multiple inheritance is a type of inheritance in Python where a derived class can inherit from multiple base classes. This means that the derived class will have access to all the properties and methods of all the base classes.

To implement multiple inheritance in Python, we simply list the base classes separated by commas in the parentheses after the class name. For example:

    class BaseClass1:
        def method1(self):
            print("Method 1 from Base Class 1")

    class BaseClass2:
        def method2(self):
            print("Method 2 from Base Class 2")

    class DerivedClass(BaseClass1, BaseClass2):
        pass

    instance = DerivedClass()
    instance.method1()
    instance.method2()

In this example, we have defined two base classes: BaseClass1 and BaseClass2. Both classes have a different method. We then defined a DerivedClass that inherits from both BaseClass1 and BaseClass2. We did not add any additional methods to DerivedClass.

When we create an instance of DerivedClass, we can call the methods from both BaseClass1 and BaseClass2, even though we did not define them in DerivedClass.

Multiple inheritance can be useful in certain situations, such as when we want to create a derived class that combines the functionality of multiple base classes. However, it can also be more complicated to manage, as it can lead to method name clashes and potential confusion about where a particular method is inherited from. Therefore, it is important to use multiple inheritance carefully and thoughtfully.

#### Multilevel Inheritance
Multilevel inheritance is a type of inheritance in Python where a derived class is created by inheriting from a class, which itself is derived from another class. This means that the derived class will have access to all the properties and methods of both base classes.

To implement multilevel inheritance in Python, we simply define a class that inherits from another class, which in turn inherits from another class, and so on. For example:

    class BaseClass:
        def method1(self):
            print("Method 1 from Base Class")

    class DerivedClass1(BaseClass):
        def method2(self):
            print("Method 2 from Derived Class 1")

    class DerivedClass2(DerivedClass1):
        def method3(self):
            print("Method 3 from Derived Class 2")

    instance = DerivedClass2()
    instance.method1()
    instance.method2()
    instance.method3()

In this example, we have defined three classes: `BaseClass`, `DerivedClass1`, and `DerivedClass2`. BaseClass defines `method1`, while `DerivedClass1` inherits from `BaseClass` and defines `method2`, and `DerivedClass2` inherits from `DerivedClass1` and defines `method3`.

When we create an instance of `DerivedClass2`, we can call the methods from all three classes: `BaseClass`, `DerivedClass1`, and `DerivedClass2`.

Multilevel inheritance can be useful in situations where we want to create a derived class that has access to the properties and methods of multiple base classes. However, it can also make the code more complex and harder to maintain. Therefore, it is important to use multilevel inheritance carefully and thoughtfully.

#### Inheritance Summary

Inheritance provides several benefits, including code reuse, modularity, and ease of maintenance. By using inheritance, we can create new classes that inherit properties and methods from existing classes, and add or modify them as needed. This promotes code reuse and makes our code more efficient and maintainable.

In the next section, we will discuss polymorphism in Python and how it can be used to make our code more flexible and reusable.


## Polymorphism
Polymorphism is a concept in OOP that allows objects of different classes to be treated as if they are objects of the same class. This means that a single interface can be used to represent different types of objects.

There are three types of polymorphism in Python:

* **Method Overriding:** In this type of polymorphism, we define a method in the derived class with the same name as a method in the base class. The method in the derived class overrides the method in the base class.

* **Method Overloading:** In this type of polymorphism, we define multiple methods with the same name in the same class, but with different parameters.

* **Duck Typing:** In this type of polymorphism, we don't care about the class of the object, but only about the methods that the object implements.

Let's look at each of these types of polymorphism with some examples.

#### Method Overriding

Here's an example of method overriding:

    class Animal:
        def __init__(self, name):
            self.name = name

        def make_sound(self):
            pass

    class Dog(Animal):
        def make_sound(self):
            print("Woof!")

    class Cat(Animal):
        def make_sound(self):
            print("Meow!")

    def animal_sound(animal):
        animal.make_sound()

    dog = Dog("Fido")
    cat = Cat("Whiskers")

    animal_sound(dog)
    animal_sound(cat)

In this example, we have defined three classes: `Animal`, `Dog`, and `Cat`. The `Animal` class has an `init` method that initializes the `name` property of the animal, and a `make_sound` method that is overridden by the `make_sound` methods in the derived classes.

We have then defined a function called `animal_sound` that takes an `animal` object as a parameter and calls the `make_sound` method on it. We have created instances of the `Dog` and `Cat` classes, and passed them to the `animal_sound` function.

Because the `make_sound` method is implemented differently in each class, the `animal_sound` function produces different output for each type of `animal`. This is an example of method overriding in polymorphism, where different types of objects are treated as if they are of the same class, allowing us to write more flexible and reusable code.

#### Method Overloading
Method overloading is a concept in OOP that allows a class to define multiple methods with the same name, but with different parameters. This means that the method will perform different actions depending on the type and number of parameters that are passed to it.

In Python, method overloading is not directly supported. However, we can use default arguments to achieve similar functionality. For example:

    class MyClass:
        def my_method(self, arg1, arg2=None):
            if arg2:
                print(f"My method with {arg1} and {arg2}")
            else:
                print(f"My method with {arg1}")

    instance = MyClass()
    instance.my_method("argument 1")
    instance.my_method("argument 1", "argument 2")

In this example, we have defined a method called `my_method` that takes two arguments. The second argument, `arg2`, is set to `None` by default. We then use an `if` statement to check whether `arg2` has a value, and print different output depending on whether it does or not.

When we call `my_method` on an instance of `MyClass`, we can pass in one or two arguments, and the method will behave accordingly.

While method overloading is not directly supported in Python, we can achieve similar functionality using default arguments and conditional statements. However, it is important to use this technique carefully, as it can make the code more complex and harder to maintain if used excessively.


#### Duck Typing
Duck typing is a concept in OOP that allows us to define objects by their behavior, rather than by their class or type. The name comes from the phrase "If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck."

In Python, duck typing means that if an object has a certain behavior or method, we can assume that it is of a certain type, even if we don't know its actual class. For example:

    class Duck:
        def quack(self):
            print("Quack!")

    class Person:
        def quack(self):
            print("I'm quacking like a duck!")

    def duck_test(obj):
        obj.quack()

    duck1 = Duck()
    duck2 = Person()

    duck_test(duck1)
    duck_test(duck2)

In this example, we have defined two classes: `Duck` and `Person`. Both classes have a method called `quack`. We then define a function called `duck_test` that takes an object as an argument and calls its `quack` method.

When we call `duck_test` on an instance of `Duck` and an instance of `Person`, both instances behave in the same way, even though they belong to different classes. This is because they both have the same behavior - the ability to quack like a duck.

A good example of duck typing that we have already encountered multiple times is the `len` method, which behaves the same across multiple different data types. Calling `len` on a string, list, or set will produce the same result: returning the number of elements in the object, even though they are all completely different classes.

Duck typing can be useful when working with different objects that have similar behavior or methods, but which belong to different classes or types. However, it is important to use duck typing carefully, as it can lead to unexpected behavior if objects with different behavior are passed to the same method.


#### Polymorphism Summary

In conclusion, polymorphism allows us to write more flexible and reusable code by using a single interface to represent different types of objects. There are several types of polymorphism in Python, including method overloading, method overriding, and duck typing. By using these concepts, we can create more modular and maintainable code.



## Lesson Summary
In this lesson, we have covered the following topics:

* Inheritance: a way of creating new classes that are built upon existing classes, promoting code reuse and making our code more efficient and maintainable. We explored the three types of inheritance in Python: single inheritance, multiple inheritance, and multilevel inheritance.

* Polymorphism: a concept in OOP that allows objects of different classes to be treated as if they are objects of the same class, making our code more flexible and reusable. We explored the three types of polymorphism in Python: method overloading, method overriding, and duck typing.

* Practical Examples: we used a choose-your-own-adventure RPG game as an example to demonstrate how inheritance and polymorphism can be used to create a flexible and modular code structure that promotes code reuse and makes our code more efficient and maintainable.

By understanding these concepts and how to implement them in Python, we can create more modular and maintainable code that is easier to read, write, and debug. We hope that this lesson has provided you with a solid understanding of inheritance and polymorphism in Python OOP, and has given you the tools to apply these concepts in your own projects.
