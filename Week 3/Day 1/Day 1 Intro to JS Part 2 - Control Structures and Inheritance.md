# Control Structures, Functions, and Inheritance in JavaScript - Introduction
## Introduction
Welcome to the second session of the day! In this lesson, we'll be diving deeper into JavaScript and exploring the differences between JavaScript and Python when it comes to control structures, functions, and inheritance.

By the end of this lesson, you should be able to:

* Understand and use conditionals and loops in JavaScript, and compare them to their Python counterparts.
* Write and use functions in JavaScript, including arrow functions, and understand how they differ from Python functions.
* Explain the difference between JavaScript's prototypal inheritance and Python's class-based inheritance, and implement simple inheritance in JavaScript using prototypes.

Throughout the lesson, we'll provide examples and exercises to help you solidify your understanding of these concepts. In the lab, you'll have the opportunity to rewrite simple Python programs in JavaScript, allowing you to practice and apply what you've learned.

Let's get started by comparing control structures in JavaScript and Python!


## Control Structures: Conditionals and Loops in JavaScript vs Python

Control structures, such as conditionals and loops, are essential in any programming language for creating logic and flow in your code. Let's explore the similarities and differences between JavaScript and Python when it comes to these control structures.

### Conditionals

JavaScript:

    if (condition) {
        // code to execute if condition is true
    } else if (anotherCondition) {
        // code to execute if anotherCondition is true
    } else {
        // code to execute if all conditions are false
    }

Python:

    if condition:
        # code to execute if condition is true
    elif anotherCondition:
        # code to execute if anotherCondition is true
    else:
        # code to execute if all conditions are false

As you can see, the syntax is quite similar. However, JavaScript uses curly braces `{}` to define code blocks, whereas Python relies on indentation.

## Loops


### For Loops
In JavaScript, the `for` loop is initialized with a counter variable, a condition, and an increment or decrement statement--all of which are separated by semicolons. In contrast, Python's `for` loop utilizes the `range()` function to determine the number of iterations.

#### JavaScript:

    for (let i = 0; i < 10; i++) {
        // code to execute
    }

#### Python:

    for i in range(10):
        # code to execute

For example, if we want to print every number from 0 to 1000000 to the console in JavaScript, then we would do so like this:

    for (let i = 0; i <= 1000000; i++){
        console.log(i);
    }

While in Python we would write:

    for i in range(1000000):
        print(i)

JavaScript's `for` loop syntax takes some getting used to, as it is a shorthand way of writing a `while` loop with a counter variable and loop condition built into it. They are useful when we know how many iterations the loop needs to perform, and they are especially useful for iterating over arrays.

### While Loops
`while` loops in both JavaScript and Python execute a block of code as long as the specified condition remains true. The syntax is quite similar, with JavaScript using curly braces for code blocks and Python relying on indentation.

#### JavaScript:

    while (condition) {
        // code to execute while condition is true
    }

#### Python:

    while condition:
        # code to execute while condition is true

For example, in JavaScript we can log every multiple of 5 from 0 to 1000 using a `while` loop:

    let i = 0
    while (i < 1000) {
        i += 5;
        console.log(i)
    }

We could do the same thing in Python like this:

    i = i
    while i < 1000:
        i += 5
        print(i)

### For...in Loop (JavaScript only):
JavaScript also has for...in and for...of loops, which are useful for iterating over the properties of an object or the elements of an array, respectively.

The for...in loop in JavaScript iterates through the properties of an object, providing access to the property names (keys) during each iteration.

    for (let key in object) {
        // code to execute for each property in the object
    }

Let's see an example of how we could use this special kind of loop:

    const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
    };

    for (let key in person) {
        console.log(`Key: ${key}, Value: ${person[key]}`);
    }

    // Output:
    // Key: firstName, Value: John
    // Key: lastName, Value: Doe
    // Key: age, Value: 30

In this example, we are using a loop to iterate over all of the attributes of the `person` object, and then print them to the console. We won't be using this type of loop very often, so we won't focus on it very much.


### For...of Loop (JavaScript only):
The for...of loop in JavaScript iterates over the elements of an iterable object, such as an array (JavaScript's version of a list), providing access to the element values during each iteration. This functions basically the same as Python's `for` loop, as the variable we declare before the `of` takes on the value of each element in an array.

    for (let element of array) {
        // code to execute for each element in the array
    }

For example:

    const colors = ['red', 'green', 'blue'];

    for (let element of colors) {
        console.log(element);
    }

    // Output:
    // red
    // green
    // blue


Now that we've covered the basics of conditionals and loops in JavaScript compared to Python, let's move on to discussing functions in JavaScript.

---

## Functions in JavaScript

Functions are an essential part of any programming language, allowing you to create reusable blocks of code. In this section, we will discuss how to declare functions, work with parameters, handle return values, and use arrow functions in JavaScript.

### Function Declaration

In JavaScript, you can declare a function using the `function` keyword, followed by the function name, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.

**JavaScript:**

    function functionName(parameters) {
        // code to execute
    }

**Python:**

    def function_name(parameters):
        # code to execute

As you can see, the syntax is similar to Python, with JavaScript using the `function` keyword instead of `def` and curly braces for code blocks instead of an indent (though we always indent anyways).

For example:

    function sayHello(name) {
        alert("Hello ", name);
    }

### Function Parameters and Return Values

Function parameters in JavaScript work similarly to Python. You can pass arguments to a function by including them as a comma-separated list within the parentheses during the function call. The function can then access these arguments using the corresponding parameter names.

To return a value from a function, use the `return` keyword, followed by the value you want to return.

**JavaScript:**

    function add(a, b) {
        return a + b;
    }

    const sum = add(5, 3); // sum will be 8

While this example uses `const sum`, we could have also used `let sum` if we need to modify `sum`'s value later.

**Python:**

    def add(a, b):
        return a + b

    sum = add(5, 3)  # sum will be 8

### Optional Parameters in JavaScript Functions
In JavaScript, just like in Python, you can define functions with optional parameters. To specify an optional parameter, you can assign a default value to the parameter in the function declaration. If the function is called without providing a value for that parameter, the default value will be used instead.

Here's an example of a JavaScript function with optional parameters:

    function greet(name, greeting = "Hello") {
        console.log(greeting + ", " + name + "!");
    }

    greet("John"); // Output: "Hello, John!"
    greet("Jane", "Hi"); // Output: "Hi, Jane!"

In this example, the greeting parameter has a default value of "Hello". If the greet function is called without providing a value for the greeting parameter, the default value "Hello" will be used. Note that the syntax for specifying default values in JavaScript is similar to Python, using the = operator in the function declaration.

### Arrow Functions
JavaScript also supports "arrow functions," which provide a shorter syntax for defining functions. Arrow functions are particularly useful for creating small, "anonymous" functions or for use in functional programming patterns.

For example:

    const add = (a, b) => a + b;

    const sum = add(5, 3); // sum will be 8

In this example, the add function has been defined using the arrow function syntax. The parameters are enclosed in parentheses, followed by the "fat arrow" => and the function body. If the function body is a single expression, you can omit the curly braces and return keyword, as the value of the expression will be returned automatically.

We use arrow functions a lot in "callback functions", which are used frequently in JavaScript and React development. However, we won't worry about those today, as they are a more advanced topic.

Now that we've covered the basics of functions in JavaScript, let's move on to discussing JavaScript's objects and prototypal inheritance and how it differs from Python's class-based inheritance.

## JavaScript Objects and Prototypes

JavaScript is an object-oriented language, and almost everything in JavaScript is an object. Objects in JavaScript are key-value pairs, similar to dictionaries in Python.
JavaScript Objects

To create an object in JavaScript, you can use the object literal syntax:

    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30
    };

You can access the properties of an object using the dot notation or bracket notation, just like in Python:

    console.log(person.firstName); // Output: "John"
    console.log(person["lastName"]); // Output: "Doe"

### Prototypes and Prototypal Inheritance
In JavaScript, every object has a special hidden property called the prototype. The prototype is another object that the current object inherits properties and methods from. This is called prototypal inheritance.

When you try to access a property or method on an object, JavaScript first checks if the property or method exists on the object itself. If it doesn't, JavaScript then checks if it exists on the object's prototype. This process continues up the prototype chain until the property or method is found or the chain ends (reaching null).

Consider the following example:

    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    Person.prototype.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };

    const person = new Person("John", "Doe", 30);
    console.log(person.getFullName()); // Output: "John Doe"

In this example, we define a `Person` constructor function, which creates a new object with the given `firstName`, `lastName`, and `age` properties. We then add a `getFullName` method to the `Person` prototype. When we create a new `person` object and call the `getFullName` method, JavaScript looks for the method on the `person` object itself, and then on the `Person` prototype, where it finds and executes the method.

This is just a brief introduction to JavaScript objects and prototypes. Understanding the concept of prototypes and how they work in JavaScript is crucial to mastering the language, especially when working with inheritance.

### JavaScript Inheritance vs Python Inheritance
Inheritance is a key concept in object-oriented programming, allowing you to create new objects that inherit properties and methods from existing objects. While both JavaScript and Python support inheritance, they use different mechanisms to achieve it.

### Python's Class-Based Inheritance
In order to better understand this, let's start with Python, which uses class-based inheritance. In Python, you define classes with their own properties and methods, and then create objects (instances) of those classes. You can also create subclasses that inherit properties and methods from their parent classes.

Here's a simple example of class-based inheritance in Python:

    class Person:
        def __init__(self, name):
            self.name = name

        def speak(self):
            print(f"My name is {self.name}")

    class Student(Person):
        pass

    john = Student("John")
    john.speak()  # Output: My name is John

In this example, we define a `Person` class with a speak method. We then create a `Student` class that inherits from `Person`. When we create a `john` object, an instance of the `Student` class, and call the `speak()` method on it, Python looks for the method in the `Student` class. Since it's not defined there, Python checks the parent `Person` class and finds the method there.

### JavaScript's Prototypal Inheritance
JavaScript uses "prototypal inheritance", which we just discussed. Here's a simple example of prototypal inheritance in JavaScript:

    const person = {
        speak: function() {
            console.log(`My name is ${this.name}`);
        }
    };

    const john = Object.create(person);
    john.name = 'John';

    john.speak(); // Output: My name is John

In this example, the `person` object acts as a prototype for the `john` object. Note that we only defined a `speak` attribute, which we then assigned a function to. When the `speak()` method is called on `john`, JavaScript looks for the method on `john` itself, and when it doesn't find it there, it checks the `person` object (the prototype) and finds it there instead.

The `john` object inherited the `person` prototype when we used `const john = Object.create(person)`, which we then gave the `name` attribute after creation. The `person` prototype's `speak()` method was able to find this attribute and use it in its function. If we didn't define a `name` attribute, then `john.name` would have come back as `undefined`.

While both JavaScript and Python support object inheritance, they use different mechanisms: JavaScript uses prototypal inheritance based on object prototypes, while Python uses class-based inheritance with parent and child classes. Understanding these differences is important when transitioning between the two languages, but that understanding will come as a result of repetition and exercises.

## Lesson Summary
In this lesson, we explored the differences between JavaScript and Python in terms of control structures, functions, and inheritance. We compared the syntax and behavior of these constructs in both languages to help you transition from Python to JavaScript.

In this lesson, we:
* Compared if, else, and else if statements in JavaScript and Python.
* Compared for and while loops in JavaScript and Python.
* Introduced for...in and for...of loops in JavaScript.
* Compared function declaration in JavaScript and Python.
* Discussed parameters and default values in JavaScript.
* Explained the use of return values in JavaScript functions.
* Introduced arrow functions in JavaScript.
* Briefly explained the difference between prototypal and class-based inheritance.
* Introduced JavaScript objects and prototypes.
* Explained the prototype chain and how it works in JavaScript.
* Compared inheritance in JavaScript to inheritance in Python.

By understanding these differences and practicing the exercises, you should now have a better grasp of how to transition from Python to JavaScript when working with control structures, functions, and inheritance.

