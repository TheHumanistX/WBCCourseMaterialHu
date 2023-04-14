## Intro to JS Exercises - Part 1
### Variable Declarations
Here are 5 exercises for practicing variable declarations in JavaScript:

1. Declare a variable named `city` with the value `"New York"` using the `let` keyword.
1. Declare a variable named `population` with the value `8_336_817` using the `const` keyword.
1. Declare a variable named `isSunny` with the value `true` using the `let` keyword.
1. Declare a variable named `languages` with an array containing `"English"`, `"Spanish"`, and `"Chinese"` using the `const` keyword.
1. Declare a variable named `country` without assigning a value using the `let` keyword. Assign the value `"USA"` to the `country` variable.

### Basic Operators
Here are 5 exercises for practicing basic operators in JavaScript. Note that these may sometimes include a mix of arithmetic and comparison operators!

1. Calculate the area of a rectangle with a length of 10 and a width of 5. Assign the result to a variable named `area`.
1. Determine if the sum of 15 and 10 is greater than the product of 3 and 8. Assign the result to a variable named `isGreater`.
1. Calculate the average of the numbers 45, 30, and 15. Assign the result to a variable named `average`.
1. Increment the value of a variable named `count` by 5. Then, multiply the result by 3 and assign the new value to a variable named `finalCount`.
1. Calculate the remainder of the division between 100 and 9. Assign the result to a variable named `remainder`.
1. Calculate the square of a number 7. Assign the result to a variable named `square`.
1. Calculate the cube root of 64. Assign the result to a variable named `cubeRoot`.
1. Subtract 12 from 50, then divide the result by 6. Assign the final result to a variable named `result`.
1. Calculate the floor division of 17 by 3 using `Math.floor()`. Assign the result to a variable named `floorDiv`.
1. Find the absolute difference between 10 and 20. Assign the result to a variable named `absDifference`.
1. Calculate the perimeter of a triangle with sides 5, 8, and 11. Assign the result to a variable named `perimeter`.
1. Calculate the sum of the integers from 1 to 10. Assign the result to a variable named `sumIntegers`.
1. Determine the quotient and remainder of dividing 24 by 5. Assign the quotient to a variable named `quotient` and the remainder to a variable named `remainder2`.
1. Multiply 5 by 9, add 15, then divide the result by 3. Assign the final result to a variable named `complexOperation`.
1. Calculate the floor division of 1234 by 7 using `Math.floor()`. Assign the result to a variable named `floorDiv2`.

### Comparison and Logical Operators
These exercises will practice comparison and logical operators in JavaScript:

1. Determine if the number 42 is equal to the number 42.0. Assign the result to a variable named `isEqual`.
1. Determine if the number 25 is greater than the number 20 and smaller than the number 30. Assign the result to a variable named `isInRange`.
1. Determine if the string "apple" is not equal to the string "orange". Assign the result to a variable named `isNotEqual`.
1. Determine if the number 15 is divisible by 3 and not divisible by 5. Assign the result to a variable named `isDivisibleBy3NotBy5`.
1. Determine if the number 100 is greater than or equal to the number 99 and less than or equal to the number 101. Assign the result to a variable named `isCloseToOneHundred`.
1. Determine if the string "javascript" is equal to the string "JavaScript". Assign the result to a variable named `isSameString`.
1. Determine if the number 3 is either greater than 10 or smaller than 5. Assign the result to a variable named `isInRangeOrOutOfRange`.
1. Determine if the number -10 is both smaller than -20 and greater than -30. Assign the result to a variable named `isBetweenMinusTwentyAndMinusThirty`.
1. Determine if the number 7 is an odd number. Assign the result to a variable named `isOdd`.
1. Determine if the string "hello" has the same length as the string "world". Assign the result to a variable named `isSameLength`.

---
---

## Control Structures and Inheritance
### Translating Python Conditional Statements and Loops into JavaScript

1. Convert the following Python if statement to JavaScript:

        x = 10
        if x > 5:
            print("x is greater than 5")

2. Convert the following Python if-else statement to JavaScript:

        y = 8
        if y % 2 == 0:
            print("y is even")
        else:
            print("y is odd")

3. Convert the following Python if-elif-else statement to JavaScript:

        age = 25
        if age < 18:
            print("Minor")
        elif age >= 18 and age < 65:
            print("Adult")
        else:
            print("Senior")

4. Convert the following Python for loop to JavaScript:

        for i in range(1, 6):
            print(i)

4. Convert the following Python while loop to JavaScript:

        count = 1
        while count <= 5:
            print(count)
            count += 1

5. Convert the following Python for loop that iterates over a list to JavaScript:

        fruits = ["apple", "banana", "cherry"]
        for fruit in fruits:
            print(fruit)

5. Convert the following Python for loop that iterates over a dictionary to JavaScript:

        person = {"name": "John", "age": 30, "city": "New York"}
        for key in person:
            print(key, person[key])

5. Convert the following Python list comprehension to JavaScript using a for loop:

        squares = [x * x for x in range(1, 6)]
        print(squares)

5. Convert the following Python for loop with an if statement to JavaScript:

        for i in range(1, 11):
            if i % 2 == 0:
                print(i)

5. Convert the following Python for loop with a break statement to JavaScript:

        for i in range(1, 11):
            if i == 6:
                break
            print(i)

### Exercises: Rewriting Python Functions in JavaScript, Including Arrow Functions

1. Rewrite the following Python function in JavaScript:

        def square(x):
            return x * x

        print(square(5))

1. Rewrite the following Python function in JavaScript using an arrow function:

        def double(x):
            return x * 2

        print(double(4))

1. Rewrite the following Python function with a default parameter value in JavaScript:

        def greet(name, greeting="Hello"):
            print(greeting + ", " + name + "!")

        greet("John")
        greet("Jane", "Hi")

1. Rewrite the following Python function that calculates the factorial of a number in JavaScript:

        def factorial(n):
            if n == 0:
                return 1
            else:
                return n * factorial(n-1)

        print(factorial(5))

1. Rewrite the following Python function that returns the sum of a list of numbers in JavaScript:

        def sum_of_list(numbers):
            total = 0
            for number in numbers:
                total += number
            return total

        print(sum_of_list([1, 2, 3, 4, 5]))

1. Rewrite the following Python function that checks if a string is a palindrome in JavaScript:

        def is_palindrome(s):
            return s == s[::-1]

        print(is_palindrome("racecar"))
        print(is_palindrome("hello"))

1. Rewrite the following Python function that calculates the nth Fibonacci number in JavaScript:

        def fibonacci(n):
            if n <= 1:
                return n
            else:
                return fibonacci(n - 1) + fibonacci(n - 2)

        print(fibonacci(6))

1. Rewrite the following Python function that returns the minimum and maximum values of a list in JavaScript:

        def min_max(numbers):
            return (min(numbers), max(numbers))

        print(min_max([7, 2, 5, 9, 1, 8]))

1. Rewrite the following Python function that reverses a string in JavaScript using an arrow function:

        def reverse_string(s):
            return s[::-1]

        print(reverse_string("hello"))

1. Rewrite the following Python function that returns the length of the longest word in a list of strings in JavaScript:

        def longest_word_length(words):
            return max(len(word) for word in words)

        print(longest_word_length(["cat", "dog", "elephant"]))

### Exercises: JavaScript Prototypal Inheritance

1. Convert the following Python class definition to JavaScript using prototypes:

        class Animal:
            def __init__(self, name):
                self.name = name

            def speak(self):
                return "I am an animal"

        class Dog(Animal):
            def speak(self):
                return "Woof!"

        dog = Dog("Buddy")
        print(dog.name)
        print(dog.speak())

1. Convert the following Python class definition to JavaScript using prototypes:

        class Shape:
            def __init__(self, color):
                self.color = color

        class Circle(Shape):
            def __init__(self, color, radius):
                super().__init__(color)
                self.radius = radius

        circle = Circle("red", 5)
        print(circle.color)
        print(circle.radius)

1. Convert the following Python class definition to JavaScript using prototypes:

        class Vehicle:
            def __init__(self, make, model):
                self.make = make
                self.model = model

            def display(self):
                return f"Make: {self.make}, Model: {self.model}"

        class Car(Vehicle):
            def __init__(self, make, model, year):
                super().__init__(make, model)
                self.year = year

        car = Car("Toyota", "Camry", 2020)
        print(car.display())
        print(car.year)

1. Convert the following Python class definition to JavaScript using prototypes:

        class Person:
            def __init__(self, name, age):
                self.name = name
                self.age = age

            def greet(self):
                return f"Hello, my name is {self.name} and I am {self.age} years old."

        class Employee(Person):
            def __init__(self, name, age, job_title):
                super().__init__(name, age)
                self.job_title = job_title

        employee = Employee("John", 30, "Software Developer")
        print(employee.greet())
        print(employee.job_title)

1. Convert the following Python class definition to JavaScript using prototypes:

        class Book:
            def __init__(self, title, author):
                self.title = title
                self.author = author

            def get_info(self):
                return f"Title: {self.title}, Author: {self.author}"

        class Novel(Book):
            def __init__(self, title, author, genre):
                super().__init__(title, author)
                self.genre = genre

        novel = Novel("To Kill a Mockingbird", "Harper Lee", "Fiction")
        print(novel.get_info())
        print(novel.genre)

1. Convert the following Python class definition to JavaScript using prototypes:

        class Player:
            def __init__(self, name, position):
                self.name = name
                self.position = position

        class BasketballPlayer(Player):
            def __init__(self, name, position, points_per_game):
                super().__init__(name, position)
                self.points_per_game = points_per_game

        player = BasketballPlayer("LeBron James", "Forward", 27.0)
        print(player.name)
        print(player.position)
        print(player.points_per_game)

1. Convert the following Python class definition to JavaScript using prototypes:

        class Instrument:
            def __init__(self, name):
                self.name = name

            def play(self):
                return "Playing the instrument"

        class Guitar(Instrument):
            def play(self):
                return "Strumming the guitar"

        guitar = Guitar("Acoustic Guitar")
        print(guitar.name)
        print(guitar.play())

1. Convert the following Python class definition to JavaScript using prototypes:

        class Device:
            def __init__(self, brand):
                self.brand = brand

            def power_on(self):
                return "Device is powered on"

        class Smartphone(Device):
            def __init__(self, brand, model):
                super().__init__(brand)
                self.model = model

        smartphone = Smartphone("Apple", "iPhone 12")
        print(smartphone.brand)
        print(smartphone.model)
        print(smartphone.power_on())

1. Convert the following Python class definition to JavaScript using prototypes:

        class Animal:
            def __init__(self, name):
                self.name = name

            def make_sound(self):
                return "Some generic animal sound"

        class Cat(Animal):
            def make_sound(self):
                return "Meow"

        cat = Cat("Fluffy")
        print(cat.name)
        print(cat.make_sound())

1. Convert the following Python class definition to JavaScript using prototypes:

        class Bird:
            def __init__(self, species):
                self.species = species

            def fly(self):
                return "I can fly"

        class Penguin(Bird):
            def __init__(self, species, name):
                super().__init__(species)
                self.name = name

            def fly(self):
                return "I can't fly"

        penguin = Penguin("Emperor Penguin", "Pingu")
        print(penguin.species)
        print(penguin.name)
        print(penguin.fly())








