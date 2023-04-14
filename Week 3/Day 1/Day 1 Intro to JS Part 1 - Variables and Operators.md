# Day 1: Introduction to JavaScript and Transition from Python
## Introduction
Welcome, everyone! I'm excited to have you all here for our week-long course on transitioning from Python to JavaScript. During this week, we'll be focusing on understanding the key concepts and syntax of JavaScript, comparing it with Python, and getting hands-on experience with a project that utilizes both JavaScript and jQuery.

### JavaScript vs Python: Similarities, Differences, and Key Concepts

JavaScript and Python are both popular programming languages, each with its own strengths and use cases. At a high level, here are some similarities and differences between the two languages:

#### Similarities:

* Both are high-level, interpreted languages.
* Both are dynamically-typed and support various data types, such as numbers, strings, and booleans.
* Both have similar control structures, like if-else statements, loops, and functions.
* Both languages support object-oriented programming.

#### Differences:

* JavaScript is primarily used for client-side web development, while Python is a versatile language used for various purposes, such as web development, data analysis, artificial intelligence, and more.
* JavaScript uses curly braces {} for blocks and relies on semicolons to separate statements, while Python uses indentation and does not require semicolons.
* JavaScript uses prototypal inheritance, while Python uses class-based inheritance.
* JavaScript has a more complex scoping system, with block scope and function scope, while Python has a simpler scoping system with only function scope.

---

## JavaScript Syntax: Semicolons and Curly Braces
In JavaScript, semicolons and curly braces play important roles in organizing and delimiting code. They help define the structure of the code and indicate how statements and blocks are related.

### Semicolons

Semicolons `;` are used to separate statements in JavaScript. They mark the end of a statement, allowing multiple statements to be written on a single line or split across multiple lines. While JavaScript has an automatic semicolon insertion (ASI) mechanism that inserts semicolons where they are expected, it's generally a good practice to include semicolons explicitly to avoid potential issues and improve code readability.

For example:

    let a = 1;
    let b = 2;
    let c = a + b;

In this example, each statement ends with a semicolon, making it clear where one statement ends and another begins. We don't need to use semicolons for every one of these lines, as JavaScript's ASI mechanism will figure out where the semicolons are supposed to go. However, this means entrusting our code to a machine, which may sometimes interpret things wrong. 

Therefore, it is always better to use semicolons than not. However, if you forget, then it probably won't be a big deal.

In Week 7 and beyond, when we get to Solidity, this flexibility will no longer exist. Solidity requires that you terminate every statement with a semicolon, and its compiler will throw vaguely worded erros if you forget. So, get in the habit now of using semicolons, as it will reduce the headache of working with Solidity later.

### Curly Braces

Curly braces `{}` are used in JavaScript to define blocks of code. They are particularly important for organizing code within control structures, such as loops, conditionals, and functions. Curly braces help to group related statements together and to visually indicate the scope of variables and the flow of the code.

For example:

    if (a > b) {
        console.log("a is greater than b");
    } else {
        console.log("a is less than or equal to b");
    }

In this example, the curly braces are used to group the statements within the if and else blocks, making it clear which statements are executed depending on the condition.

Another example is the use of curly braces in functions:

    function greet(name) {
        let message = `Hello, ${name}!`;
        console.log(message);
    }

Here, the curly braces indicate the start and end of the function body and enclose the statements that make up the function.

It should be noted that--unlike Python--we syntactically don't need to indent any of the code in our JavaScript programs. In Python, we use indentation to declare new blocks of code that have a lower scope than the code around them. But, in JavaScript and many other C-based languages we use curly braces to declare new blocks of code with a lower scope, and the indentation is purely for aesthetic reasons. However, it is still good practice to indent all code that exists in a lower scope than the code around it, as this practice can make a huge difference during debugging.

In summary, semicolons and curly braces are essential for structuring JavaScript code and making it more readable and understandable. They help to separate statements, define code blocks, and indicate the scope of variables and control structures.


## JavaScript Syntax: Comments, Input/Output, Strings

Let's discuss how JavaScript handles comments and input/ouput functionality compared to Python.

### Comments
In Python, we write single-line comments with the hash symbol `#`, while in JavaScript (and most languages) we use double-forward-slashes `//`. Multi-line comments in Python are opened and closed by triple-quotes `"""` and `'''`, while in JavaScript (and most languages) they are opened by a forward-slash-asterisk `/*` and then closed by an asterisk-forward-slash `*/`.

For example, JavaScript we write:

    // This is a single-line comment,
    // which needs a double-slash on every line

    /* This is a
    multi-line comment, which
    does not need a slash-asterisk on
    every line.
    */

This syntax is very common across C-based languages, and Python is actually the exception.

### Printing/Logging
In Python, when we want to "print" something to the terminal for the user to see, we use the `print()` function. However, in JavaScript we use `console.log()`. This may take a little getting used to, as the `console` object is an actual object with various methods we can call (but probably won't need), and one of them is the `log` method.

For example:

    console.log("Hello World!")

This has the exact same effect as using `print("Hello World!")` in Python.

One major difference between Python and JavaScript is that `print()` in Python is used as a means of communicating with the user, while `console.log()` in JavaScript is used exclusively for debugging and development purposes. 

Because JavaScript is focused on web-development, we communicate to the user through the website itself, which we can use to change page elements.

However, if we need to get the user's attention with a pop-up box, then we can use the `alert()` function to do so. For example:

    alert("Welcome to our website!");

However, we should only use this during development to *simulate* a pop-up window, until you or someone on your front-end team can build a proper window that looks more professional.

### User Input
In Python, we use the `input()` function to prompt the user for input, but in JavaScript we can use the `prompt()` function. For example:

    let name = prompt("What is your name?");
    console.log(`Hello, ${name}!`);

However, just like `prompt()` this is only a temporary solution for development purposes, as eventually we should build actual `input` or `form` HTML elements to handle user inputs, for which we can use JavaScript to validate and format the inputs.

It should be noted that `alert()` and `prompt()` are both specific to web browsers, and cannot be used in other JavaScript environments, such as Node.js

### Strings
### String Concatenation
String concatenation in JavaScript is almost identical to Python--except JavaScript never inserts whitespace between strings that use commas to separate them. For example, in Python we would write:

    name = "Alice"
    age = 30
    print(name + " is " + age + " years old.")
    print(name, "is", age, "years old.")  # No need for whitespaces

While in JavaScript we write:

    let name = "Alice"
    let age = 30
    print(name + " is " + age + " years old.")
    print(name, " is ", age, " years old.")  // We need to use whitespaces

It's a very subtle difference, but a mostly inconsequential one. However, we will focus more on using string interpolation rather than concatenation, as it is easier to read and looks better overall.

#### String Formatting and Interpolation
In Python, when we want to print a string interpolated with variables without the hot mess of string concatenation, we often use f-strings. For example:

    name = "Alice"
    age = 30
    print(f"{name} is {age} years old.")

In JavaScript, we can achieve the same result using "template literals". Template literals are enclosed by backticks (\`) instead of single or double quotes, and variables are placed inside a dollar sign and curly braces `${}`. Here's an example:

    let name = "Alice";
    let age = 30;
    console.log(`${name} is ${age} years old.`);

This will produce the same output as the Python example: `"Alice is 30 years old."`

Using template literals and `console.log()`, you can effectively log strings mixed with variables in JavaScript, similar to Python's f-strings or `.format()` method.

## JavaScript Syntax: Variables and Data Types
### Variables:
JavaScript uses the `let`, `const`, and `var` keywords to declare variables. `let` and `const` are block-scoped, while `var` is function-scoped--this difference won't be very important though, as we will only use `let` and `const`. By comparison, Python does not use keywords to declare variables, as it only needs to use a simple assignment for variable declaration.

#### JavaScript:

    let name = "John";
    const age = 30;

#### Python

    name = "John"
    age = 30

`let` and `const` are two variable declaration keywords in JavaScript. Both are used to create block-scoped variables, which means the variables are only accessible within the block in which they are declared. However, there are key differences between them.

#### let

The `let` keyword is used to declare variables that can be reassigned during the lifetime of the program. It is suitable for variables that may change their values over time or need to be updated. Here's an example:

    let count = 0;
    count = 1; // Allowed, as variables declared with let can be reassigned

#### const

The `const` keyword, on the other hand, is used to declare variables that should not be reassigned after their initial assignment. These are effectively constants, and their values should remain the same throughout the program. Attempting to reassign a value to a `const` variable will result in an error. Here's an example:

    const pi = 3.14159;
    pi = 3.14; // Error, as variables declared with const cannot be reassigned

In summary, you should use `let` when you have a variable that may change its value during the execution of the program and use `const` when you have a variable that should never change its value. Using `const` for constant values can help prevent accidental changes to values and make your code more predictable and easier to understand.

---

### Data Types:

JavaScript has several data types, such as `Number`, `String`, `Boolean`, `Object`, `Array`, `null`, and `undefined` (as well as the mysterious `NaN`). Python has similar data types like `int`, `float`, `str`, `bool`, `list`, `dict`, `tuple`, `None`, and more.

Just like Python, you won't visually see these data types until you explicitly check them. The thing to watch out for in JavaScript is that it uses "soft-typing", meaning any variable can hold any type of data. This means your apps can encounter bugs or errors if you accidentally change the data type inside a variable.

#### Type Coercion and Unexpected Behavior

JavaScript is a dynamically-typed language, which means it performs type coercion to convert values from one type to another. Type coercion can be both implicit and explicit. Implicit type coercion occurs automatically when JavaScript tries to convert values during an operation, while explicit type coercion requires the use of specific functions or operators.

However, type coercion can lead to unexpected behavior in your code. For example, JavaScript might treat a number as a string or vice versa, producing unexpected results. Let's look at an example:

    let a = 5;
    let b = "5";
    console.log(a + b); // Output: "55" (a string, not the number 10)

In this case, JavaScript coerces the number `5` to the string `"5"` and concatenates the two strings, resulting in the unexpected output of `"55"` instead of the intended numeric sum of `10`.

This is different from Python, which would throw an error in a similar situation, because Python does not automatically coerce types in this manner.

To avoid unexpected behavior and improve code readability, it's important to be aware of type coercion and use explicit type conversion functions when necessary.

#### Why Does Type Coercion Exist?
JavaScript uses type coercion because of its design philosophy, which prioritizes ease of use and flexibility. When JavaScript was created, it was intended to be a simple scripting language for non-programmers to use for adding interactivity to web pages. As a result, its design favored being forgiving and flexible, rather than strict and explicit.

Type coercion is one of the mechanisms JavaScript employs to achieve this goal. When developers perform operations between incompatible types, instead of throwing errors, JavaScript tries to automatically convert one or both of the operands to a common type that makes the operation possible. 

This feature can make it easier for beginners to write code without having to worry about explicit type conversions, but more often than not it introduces bugs that are very difficult to locate.

#### Error and Type-Checking
You may be wondering how we can enforce data types in JavaScript to prevent the unwanted results of type coercion. For that, we have a few error and type-checking tools, which come in handy to prevent issues related to soft-typing and type coercion. 

JavaScript provides the `typeof` operator and the strict equality operator `===`. The `typeof` operator simply returns an operand's data type, while the strict equality operator will only produce `true` if both operands are simultaneously the same data type and the same value. 

We will cover these methods and techniques in more detail later.

---

## JavaScript Syntax: Arithmetic, Compound Assignment, Comparison, and Logical Operators

Arithmetic and comparison operators in JavaScript are similar to Python, but the logical operators are completely different. 

#### Arithmetic
Let's first see how JavaScript handles all arithmetic operators that we are now familiar with in Python:

    let addition = 10 + 20;
    let subtraction = 20 - 10;
    let multiplication = 10 * 20;
    let division = 20 / 10;
    let modulus = 13 % 5;
    let exponentiation = 2 ** 8;
    let floorDivision = Math.floor(15 / 4)
    let sqrRoot = 2 ** (1/2);

You'll notice that floor/integer division in JavaScript doesn't technically exist, as it instead uses a function from the `Math` library. Like Python, we can also use fractional exponents to calculate roots, but the faster method is by using `Math.pow()`.

#### Compound Assignment
JavaScript offers all the compound assignment operators that Python uses, and it also has increment `++` and decrement `--` operators. Let's take a look at some examples:

    let someNumber = 10;
    someNumber += 5;    // 15
    someNumber -= 7;    // 8
    someNumber *= 3;    // 24
    someNumber /= 4;    // 6
    someNumber %= 4;    // 2
    someNumber **= 8;   // 256
    someNumber++;       // 257, Adds 1 to someNumber
    someNumber--;       // 256, Subtracts 1 from someNumber

You'll notice our two new operators are `++` and `--`, and you may wonder why we would ever need to only add or subtract 1 from a number--let alone we why don't just use `+=` and `-=` like in Python. This is due to how JavaScript handles looping control structures, primarily the `for` loop, which in most cases we want to increment a counter variable by only 1 each time. Increment and decrement operators are simply shorthand so `for` loops can be written shorter and easier. We will discuss `for` loops later.

#### Comparison
Now, let's look at comparison operators:

    let isEqualTo = p == q;
    let isNotEqualTo = p != q;
    let isGreaterThan = p > q;
    let isLessThan = p < q;
    let isGreaterThanOrEqualTo = p >= q;
    let isLessThanOrEqualTo = p <= q;

These operators are identical to Python, so there's nothing new here. However, if we remember from earlier, JavaScript also has "strict equality" operators, which compare both value and data type:

    let isStrictlyEqualTo = p === q;
    let isNotStrictlyEqualTo = p !== q;

We will use strict equality operators frequently, as the standard equality operators are subject to "truthy" and "falsey" values, which will occasionally mess up our program's intended functionality--especially when we are using objects in conditionals. 

This will make more sense in context, so we won't talk about it today.

#### Logic
Finally, we have the logical operators, which in Python are `and`, `or`, and `not`. However, JavaScript uses the C/C++ operators `&&`, `||`, and `!`, like so:

    let andOperator = a && b;
    let orOperator = a || b;
    let notOperator = !a;

These will take the most getting used to, but Python is actually the exception to the rule here--as most languages use these symbols for their logical operators. This will carry over into Solidity as well.

### Lesson Summary

In this lesson, we have covered the similarities and differences between JavaScript and Python, and looked at the basic syntax of JavaScript. As we proceed with the course, we'll dive deeper into JavaScript concepts, comparing them with Python, and getting hands-on experience with various exercises and a project.

Now, let's do a few practice exercises to reinforce our knowledge, and then we will continue with the next lesson for today.
