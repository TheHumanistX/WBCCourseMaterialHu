# Day 3: Functions
---
## Introduction to Functions
Welcome to today's lesson on Functions in Python! Functions are a crucial aspect of programming, allowing you to create reusable blocks of code that perform specific tasks. Functions can be called with input values, known as parameters or arguments, and can return a value as output. By using functions, you can:

* Improve code organization and readability.
* Reduce code duplication.
* Simplify complex tasks by breaking them into smaller, more manageable pieces.

In Python, functions can be built-in, such as `print()`, `len()`, and `input()`, or user-defined, which are the functions that you create yourself. In this lesson, we will focus on creating and working with user-defined functions.

Throughout the lesson, we will cover essential aspects of Python functions, including creating, calling, and naming functions, understanding variable scope, working with optional parameters, and implementing getters and setters. 

As optional lessons, we will also learn about recursion and the use of the `pass` keyword.

Let's begin by diving into creating functions

---
## Creating Functions
To create a function in Python, you use the `def` keyword, followed by the function name and a pair of parentheses containing any input parameters. The function body is indented, similar to other control structures in Python, such as loops and conditionals. 

Here's the basic structure of a function:

    def function_name(parameters):
        # Code to be executed

### Defining a Function with `def`
Let's define a simple function that prints `"Hello, World!"` when called:

    def greet():
        print("Hello, World!")

In this example, we've created a function called `greet()` that takes no parameters. When called, it will print `"Hello, World!"`.


### Parameters Intro
Parameters are input values that you can pass to a function when calling it. They allow you to customize the behavior of a function based on the provided arguments. Here's an example of a function that takes a parameter:

    def greet(name):
        print(f"Hello, {name}!")

In this example, we've modified the `greet()` function to accept a parameter called `name`. When called with an argument, it will print a personalized greeting using the provided name.

To call this function, you would use the following syntax:

    greet("Alice")

This would output: `"Hello, Alice!"`

### The return Keyword
Functions can also return a value as output. To return a value from a function, use the `return` keyword, followed by the value or expression you want to return.

Here's an example of a function that adds two numbers and returns the result:

    def add(x, y):
        result = x + y
        return result

### Return Values
To use the returned value of a function, you can either assign it to a variable or use it directly in an expression. Here's an example of using the `add()` function:

    sum_result = add(5, 3)
    print(sum_result)  # Output: 8
    print(add(10, 20))  # Output: 30

In this example, we first call the `add()` function with the arguments `5` and `3`, assign the result to the variable `sum_result`, and then print the value. We also demonstrate calling the `add()` function directly within a `print()` statement.

Now that you know the basics of creating functions, let's move on to calling functions and understanding how parameters and return values work.

### Returning Early from a Function
In addition to returning a value, the `return` keyword can be used to exit a function prematurely, similar to how the `break` keyword is used to break out of a loop. 

This technique can be especially helpful for implementing guard clauses, which are checks placed at the beginning of a function to ensure that certain conditions are met before the function proceeds with its main operation.

Guard clauses can help improve the readability and structure of your code by reducing nested if-else statements and handling edge cases early in the function. Here's an example:

    def divide(x, y):
        if y == 0:
            print("Error: Division by zero")
            return

        result = x / y
        print(f"The result is: {result}")

    divide(10, 0)  # Output: Error: Division by zero

In this example, we have a function called `divide()` that takes two parameters, `x` and `y`, and prints the result of dividing `x` by `y`. We use a guard clause at the beginning of the function to check if `y` is equal to zero, which would cause a division by zero error. If `y` is zero, we print an error message and use the `return` keyword to exit the function early, without executing the rest of the code.

By using the `return` keyword in this way, you can create cleaner, more efficient, and easier-to-read functions that handle edge cases and preconditions effectively.

### Optional Parameters
In Python, you can define optional parameters for your functions. Optional parameters have default values, which will be used if the caller does not provide a value for that parameter.

Here's an example of a function with an optional parameter:

    def greet(name, greeting="Hello"):
        print(f"{greeting}, {name}!")

    greet("Alice")  # Output: Hello, Alice!
    greet("Bob", "Hi")  # Output: Hi, Bob!

In this example, we've modified the `greet()` function to accept an optional parameter called `greeting`, which has a default value of `"Hello"`. When calling the function, we can either provide a value for the `greeting` parameter or rely on the default value.

When using optional parameters, it's important to note that they must be defined after all required parameters in the function definition. 

For example, the following function definition would result in a syntax error:

    def greet(greeting="Hello", name):
        print(f"{greeting}, {name}!")


---

## Calling Functions
Once you have defined a function, you can call (or invoke) it by using its name followed by parentheses `()`. If the function requires any input parameters, you need to pass the appropriate arguments within the parentheses.

### Parameters
When calling a function with parameters, you must provide the required arguments in the same order as they were defined in the function. Here's an example using the `greet()` function we defined earlier:

    def greet(name):
        print(f"Hello, {name}!")

    greet("Alice")  # Output: Hello, Alice!

In this example, we call the `greet()` function with the argument `"Alice"`, which corresponds to the `name` parameter in the function definition. The function then prints a personalized greeting using the provided name.

### Return Values
If a function returns a value, you can use the returned value directly in an expression or assign it to a variable. Here's an example using the `add()` function we defined earlier:

    def add(x, y):
        result = x + y
        return result

    sum_result = add(5, 3)
    print(sum_result)  # Output: 8
    print(add(10, 20))  # Output: 30

In this example, we first call the `add()` function with the arguments 5 and 3, assign the result to the variable `sum_result`, and then print the value. We also demonstrate calling the `add()` function directly within a `print()` statement.

---

## Variable Scope
In Python, variables have a specific "scope", which determines their visibility and lifetime within a program. Understanding variable scope is important for properly managing variables and avoiding potential issues when working with functions.

There are two main types of variable scope: global scope and local scope.

### Global Variables
Global variables are defined outside of any function and can be accessed from anywhere in your program, including inside functions. However, if you want to modify a global variable from within a function, you need to use the `global` keyword.

Here's an example of using a global variable:

    count = 0

    def increment_count():
        global count
        count += 1


    print(count)  # Output: 0
    increment_count()
    print(count)  # Output: 1

In this example, we define a global variable `count`, create a function `increment_count()` that modifies the global variable, and then call the function to increment the value of `count`. Note the use of the `global` keyword within the function to indicate that we want to modify the global variable.

### Local Variables
Local variables are defined within a function and can only be accessed within that function. When a function is called, local variables are created, and when the function returns, those local variables are destroyed.

Here's an example of using a local variable:

    def greet(name):
        greeting = f"Hello, {name}!"
        print(greeting)

    greet("Alice")  # Output: Hello, Alice!

In this example, the `greeting` variable is local to the `greet()` function. It is created when the function is called and destroyed when the function returns. The `greeting` variable is not accessible outside of the `greet()` function.

### Global and Local Variables in Functions
When working with functions, it's important to understand the difference between global and local variables. If a local variable has the same name as a global variable, the local variable will take precedence within the function, effectively "hiding" the global variable. Here's an example:

    count = 0

    def increment_count():
        count = 1
        print(count)

    increment_count()  # Output: 1
    print(count)  # Output: 0

In this example, the `increment_count()` function has a local variable named `count`, which takes precedence over the global variable with the same name. The function prints the local variable's value, which is `1`, while the global variable remains unchanged at `0`.

Now that you understand variable scope in Python, let's move on to optional parameters in functions.
---

## Naming Functions
When creating functions in Python, it's important to choose meaningful and descriptive names that clearly convey the purpose of the function. This helps improve the readability and maintainability of your code.

Here are some guidelines for naming functions in Python:

* **Use lowercase letters and underscores:** Function names should be lowercase, with words separated by underscores. This is known as the snake_case naming convention. For example: process_data(), calculate_total(), or find_average().

* **Be descriptive:** Choose names that clearly describe the function's purpose or the action it performs. For example, instead of naming a function f(), use a more descriptive name like convert_temperature().

* **Avoid abbreviations:** Avoid using abbreviations or short forms unless they are widely understood. For example, instead of using calc_avg(), use the full form calculate_average().

* **Use setter verbs for action-oriented functions:** If a function performs an action or causes a change, use a verb as the first word in the function name. For example: print_report(), save_data(), or update_record().

* **Use getter verbs or nouns for functions that return values:** If a function returns a value, consider using a verb for retrieving something along with the noun of what is being retrieved, or just the noun itself. For example: get_name(), name(), find_minimum(), minimum(), calculate_sum(), sum().

By following these guidelines, you can create clear and consistent function names that help make your code easier to understand and maintain.

---

## The Pass Keyword (Optional)
In Python, the `pass` keyword is used as a placeholder when you want to create a block of code, such as a function or a loop, but don't want to execute any specific action yet. The `pass` keyword does nothing; it simply allows the code block to be syntactically correct.

The `pass` keyword can be particularly useful when you're sketching out the structure of your code or when you want to create an empty function, class, or loop for later implementation. 

Here are a few examples of how you can use the `pass` keyword:

    def do_nothing():
        pass

    do_nothing()  # No output, does nothing

    for i in range(5):
        pass  # No output, does nothing for each iteration

Now let's move on to the final (optional) topic of today's lesson: recursive functions.

---

## Recursive Functions (Optional)

A recursive function is a function that calls itself to solve a problem. Recursion is a powerful programming technique that can be used to solve problems that can be broken down into smaller, similar subproblems. Let's discuss how recursive functions work and how to use them effectively.

### Recursion vs Looping

Recursion is an alternative to looping when solving problems that involve repeating a process. The main difference between recursion and looping is that in recursion, the function calls itself with a modified input, while in looping, the same block of code is executed repeatedly until a condition is met.

Let's see an example of this, using functions to calculate the factorial of a number (if you don't know, a factorial is a number multiplied by the sequence of numbers that came before it, such as 5\*4\*3\*2\*1 for the factorial of 5, and in mathematics is represented with the):

    # This function uses a for loop
    def factorial_loop(n):
        result = 1
        for i in range(1, n + 1):
            result *= i
        return result


    n = 5
    print(f"Factorial of {n} using for loop: {factorial_loop(n)}")


    # This function uses a while loop
    def factorial_while_loop(n):
        i = 1
        result = 1
        while i < n:
            i += 1
            result *= i
        return result


    n = 5
    print(f"Factorial of {n} using while loop: {factorial_while_loop(n)}")


    # This function uses recursion
    def factorial_recursive(n):
        if n == 0:
            return 1
        else:
            return n * factorial_recursive(n - 1)


    n = 5
    print(f"Factorial of {n} using recursion: {factorial_recursive(n)}")


In some cases, recursion can provide a more elegant and easier-to-understand solution than looping, while in other cases recursion only makes the function far more difficult to understand. 

Recursion can also be less efficient than looping due to the overhead of function calls and the potential for increased memory usage. However, some problems are easier to solve with recursion than with looping, such as binary searching

### How to Avoid Infinite Recursive Loops
As you've probably already guessed, recursive functions can easily end up in a recursive loop. For example:

    def infinite_loop(n):
        print(f"Recursive loop number {n}")
        infinite_loop(n + 1)

While PyCharm will forcibly stop a program that goes too deep into recursion, we need to design recursive functions so that never happens in the first place.

To prevent infinite loops, you need to define a base case that stops the recursion. A base case is a simple problem that can be solved directly without any further recursion. 

In our factorial function, the base case is the conditional statement `if n == 0`:

    def factorial(n):
        if n == 0:
            return 1  # Base case
        else:
            return n * factorial(n - 1)  # Recursive case

    print(factorial(5))  # Output: 120

In this example, the base case is when the function returns `1` without any further recursion. The recursive case is when `n > 0`, at which point the function calls itself with a modified input `(n - 1)`. By defining a base case, we ensure that the recursion will eventually stop.

---

## Lesson Summary
That wraps up today's lesson on functions. To recap, today we discussed:

* Creating functions
* Calling functions
* Function naming tips
* Variable scope

Be sure to practice using functions in different scenarios to become more comfortable with them.

Now, let's work on today's lab exercises.
