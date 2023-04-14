# Day 2: JavaScript: Functions, Error Handling, and Array/Objects
## Introduction
In this lesson, we will dive deeper into functions, scope, and error handling in JavaScript. 

We will begin by reviewing callback functions, which are important concepts in JavaScript programming. 

Next, we will compare the scope of variables in JavaScript and Python, understanding how they differ in terms of global, local, and block scope, as well as hoisting and the temporal dead zone. 

Finally, we will explore error handling in JavaScript using `try`, `catch`, and `finally` blocks, and learn how to create custom error classes.

By the end of this lesson, you will have a solid understanding of advanced function concepts, scope, and error handling in JavaScript, and how they compare to their Python counterparts. You will also be able to translate Python code with error handling into JavaScript code using the concepts you have learned.

---

## Functions Review: Callback Functions
In this section, we will discuss callback functions in JavaScript.

### Callback Functions
Callback functions are functions that are passed as arguments to other functions and are executed at a later time, usually after some event or condition has occurred. They are used in various situations, such as handling events, implementing asynchronous programming, or working with iterators.

Here is an example of a callback function:

    function greet(name, callback) {
        console.log("Hello, " + name);
        callback();
    }

    function farewell() {
        console.log("Goodbye!");
    }

    greet("John", farewell);

In this example, the `farewell` function is passed as a callback to the greet function, which is executed after the greeting message is displayed.

---

## Scope in JavaScript compared to Python

Scope refers to the visibility and lifetime of variables in a programming language. It defines where a variable can be accessed and modified within a program. JavaScript and Python handle variable scoping differently.

### JavaScript Scope vs Python Scope

In JavaScript, there are two types of scope: global scope and local scope. Variables declared outside any function or block have a global scope, which means they can be accessed from anywhere in the code. Variables declared inside a function or block have a local scope, which means they can only be accessed within that function or block.

Python uses block-level scoping for variables. Variables declared inside a function are local to that function and can only be accessed within that function. Variables declared outside any function have a global scope and can be accessed from anywhere in the code. In Python, if you want to use a global variable inside a function, you need to use the `global` keyword to indicate that the variable is global.

In JavaScript, you don't need to use any keyword to access a global variable, you simply refer to the variable by name. This means you can't give local variables the same names as global variables.

For example:

    // Global variable
    let globalVar = "I'm a global variable!";

    function outerFunction() {
        // Local variable in outerFunction
        let outerVar = "I'm a local variable in outerFunction!";
    
        console.log(globalVar); // Output: I'm a global variable!
        console.log(outerVar);  // Output: I'm a local variable in outerFunction!

        function innerFunction() {
            // Local variable in innerFunction
            let innerVar = "I'm a local variable in innerFunction!";
            
            console.log(globalVar); // Output: I'm a global variable!
            console.log(outerVar);  // Output: I'm a local variable in outerFunction!
            console.log(innerVar);  // Output: I'm a local variable in innerFunction!
        }

        innerFunction();
    }

    outerFunction();

    console.log(globalVar); // Output: I'm a global variable!
    console.log(outerVar);  // Error: outerVar is not defined
    console.log(innerVar);  // Error: innerVar is not defined

Scope is fairly universal across programming languages, and it is very intuitive once you understand it.


## Error Handling: `try`, `catch`, `finally`

Error handling is essential in programming to ensure that your application can gracefully handle unexpected situations and continue to run properly--rather than crashing and burning. Both JavaScript and Python have mechanisms for handling errors using `try`, `catch`, and `finally` blocks.

### JavaScript Error Handling

In JavaScript, errors can be caught and handled using `try`, `catch`, and `finally` blocks. 

The `try` block contains the code that might throw an error. If an error occurs within the `try` block, it is caught and passed to the `catch` block, where you can handle the error. The `finally` block is optional and contains code that will be executed regardless of whether an error occurred or not.

Here's an example of error handling in JavaScript:

    try {
        // Code that might throw an error
        let result = someFunctionThatMightFail();
        console.log(result);
    } catch (error) {
        // Handle the error
        console.error("An error occurred:", error.message);
    } finally {
        // Code that runs regardless of errors
        console.log("Error handling completed.");
    }

### Python Error Handling

In Python, errors can be caught and handled using try, except, and finally blocks. The try block contains the code that might throw an error. If an error occurs within the try block, it is caught and passed to the except block, where you can handle the error. The finally block is optional and contains code that will be executed regardless of whether an error occurred or not.

Here's an example of error handling in Python:

    try:
        # Code that might throw an error
        result = some_function_that_might_fail()
        print(result)
    except Exception as error:
        # Handle the error
        print(f"An error occurred: {error}")
    finally:
        # Code that runs regardless of errors
        print("Error handling completed.")

You can also create custom errors in Python by extending the built-in Exception class:

    class CustomError(Exception):
        pass

---

## Arrays and Objects in JavaScript

JavaScript has two primary data structures for storing collections of data: arrays and objects. These are somewhat similar to Python's lists and dictionaries, but with some key differences.

### Arrays

Arrays in JavaScript are similar to lists in Python. They are ordered, indexed collections of values. To declare an array in JavaScript, you can use the following syntax:
 
    let myArray = [1, 2, 3, 4, 5];

Just like Python, you can access individual elements in an array using their index inside of square brackets:

    console.log(myArray[0]); // Output: 1

However, unlike Python, JavaScript arrays are dynamic and can grow or shrink as needed. You can also store different data types within the same array.

### Objects

Objects in JavaScript are similar to dictionaries in Python. They are collections of key-value pairs, where the keys are strings and the values can be any data type. To declare an object in JavaScript, you can use the following syntax:

    let myObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
    };

Accessing values in an object is similar to Python, but with a slightly different syntax:

    console.log(myObject.key1); // Output: "value1"
    console.log(myObject["key1"]); // Output: "value1" (alternative syntax)

One significant difference between JavaScript objects and Python dictionaries is that JavaScript objects can have methods (functions) as values.

In summary, while JavaScript arrays and objects share some similarities with Python lists and dictionaries, they have unique characteristics that make them well-suited for different tasks in JavaScript.

---

## Iterating Over Arrays and Objects in JavaScript

Iterating over arrays and objects in JavaScript is similar to Python but with some differences in syntax and available methods.

### Iterating Over Arrays

There are several ways to iterate over arrays in JavaScript:

**Using a for loop:**

    let myArray = [1, 2, 3, 4, 5];

    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }

**Using a for...of loop:**

    let myArray = [1, 2, 3, 4, 5];

    for (let element of myArray) {
        console.log(element);
    }

**Using the forEach() method:**

    let myArray = [1, 2, 3, 4, 5];

    myArray.forEach(function (element) {
        console.log(element);
    });

### Iterating Over Objects

To iterate over objects in JavaScript, you can use the following methods:

Using a for...in loop:

    let myObject = {
        key1: "value1",
        key2: "value2",
        key3: "value3"
    };

    for (let key in myObject) {
        console.log(key + ': ' + myObject[key]);
    }

Using `Object.keys()` and `forEach()`:

    let myObject = {
        key1: "value1",
        key2: "value2",
        key3: "value3"
    };

    Object.keys(myObject).forEach(function (key) {
        console.log(key + ': ' + myObject[key]);
    });

These methods allow you to iterate over arrays and objects in JavaScript, accessing each element or key-value pair in a flexible and convenient way.

---

## Lesson Summary
In this lesson, we:

* Compared arrays and objects in JavaScript to lists and dictionaries in Python.
* Described how to create and manipulate arrays and objects in JavaScript.
* Explained the similarities and differences in methods and syntax between JavaScript and Python.
* Introduced different methods for iterating over arrays in JavaScript: using a for loop, using a for...of loop, and using the forEach() method.
* Described the various ways to iterate over objects in JavaScript: using a for...in loop and using Object.keys() with forEach().

This lesson provided a comprehensive understanding of working with arrays and objects in JavaScript and how they compare to Python. The knowledge gained will help you transition from Python to JavaScript and effectively manipulate data structures in your JavaScript applications.


