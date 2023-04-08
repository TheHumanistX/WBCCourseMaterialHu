# Python Looping Control Structures (15 minutes)

## Introduction to Looping Control Structures (1 minute)
Welcome to today's lesson on Looping Control Structures in Python! Looping control structures play a crucial role in programming, allowing us to automate repetitive tasks and execute a block of code multiple times. By using loops, we can significantly reduce the amount of code we need to write and improve the overall efficiency of our programs.

There are two main types of looping control structures in Python: while loops and for loops. While loops repeatedly execute a block of code as long as a specific condition is true, and for loops iterate over a sequence of items, such as a range of numbers or elements in a list.

In this lesson, we'll dive into the basics of while loops and for loops, learn how to control their execution using break and continue statements, and explore the concept of nested loops. By the end of this lesson, you should have a solid understanding of how to use loops in Python to create more efficient and powerful programs. Let's get started!

## While Loops (6 minutes)
A while loop is a looping control structure that repeatedly executes a block of code as long as a specified condition is true. The basic structure of a while loop in Python is as follows:

    condition == True  # Boolean value
    while condition:
        # Code to be executed

### Setting up a While Loop (2 minutes)

Here's a simple example of a while loop that counts from 1 to 5:

    count = 1

    while count <= 5:
        print(count)
        count += 1

In this example, the loop starts with the variable count set to 1. The loop will continue executing as long as the value of count is less than or equal to 5. Inside the loop, we print the current value of count and then increment it by 1 using the += operator. Once the value of count becomes greater than 5, the condition count <= 5 becomes false, and the loop stops executing.

It's important to update the loop control variable (in this case, count) inside the loop to ensure that the loop's condition eventually becomes false. Otherwise, the loop will continue executing indefinitely, resulting in an infinite loop.


### Breaking and Continuing (2 minutes)
Sometimes, we may want to control the execution of a loop based on certain conditions. In Python, we can use the break and continue statements to achieve this.

#### Break Statement

The break statement allows us to exit a loop prematurely when a specific condition is met. Here's an example of a while loop that prints numbers from 1 to 10 but stops when it reaches 5:

    count = 1

    while count <= 10:
        if count == 5:
            break
        print(count)
        count += 1

In this example, the loop would normally continue until count reaches 11. However, when count is equal to 5, the break statement is executed, and the loop is terminated immediately.

    count = 0

    while count < 10:
        count += 1
        if count % 2 == 0:
            continue
        print(count)

In this example, we check if count is even by using the modulus operator (%). If count is even, the continue statement is executed, and the rest of the loop iteration is skipped, meaning the current even number is not printed. The loop then proceeds to the next iteration, incrementing count and checking the condition again.

Using break and continue statements can give you more control over the execution of your loops and allow you to handle complex scenarios more efficiently.

#### Continue Statement

The continue statement allows us to skip the rest of the current loop iteration and move to the next one. Here's an example of a while loop that prints odd numbers from 1 to 10:

    count = 0

    while count < 10:
        count += 1
        if count % 2 == 0:
            continue
        print(count)

In this example, we check if `count` is even by using the modulus operator (%). If `count` is even, the `continue` statement is executed, and the rest of the loop iteration is skipped, meaning the current even number is not printed. The loop then proceeds to the next iteration, incrementing `count` and checking the condition again.

Using `break` and `continue` statements can give you more control over the execution of your loops and allow you to handle complex scenarios more efficiently.


### Infinite Loops (1 minute)
An infinite loop is a loop that continues executing indefinitely because its condition never becomes false. Infinite loops are generally considered undesirable, as they can cause your program to freeze or become unresponsive. It's important to recognize and avoid creating infinite loops in your code.

Here's an example of an infinite loop:

    count = 1

    while count <= 5:
        print(count)
        # count += 1 (this line is commented out or missing)

In this example, the loop control variable count is not updated inside the loop. As a result, the condition count <= 5 remains true forever, and the loop never stops executing.

Common causes of infinite loops include:

* Forgetting to update the loop control variable, as shown in the example above.
* Using a condition that never becomes false, e.g., while True.
* Updating the loop control variable incorrectly or in a way that does not lead to the loop condition becoming false.

To fix an infinite loop, ensure that you properly update the loop control variable and use a condition that will eventually become false. In some cases, you can also use a break statement to exit the loop when a specific condition is met, as demonstrated in the previous section.


### Do-While Loops (1 minute)
Python does not have a built-in do-while loop structure. However, you can simulate a do-while loop using a while True statement combined with a break statement. The main characteristic of a do-while loop is that it always executes the loop body at least once, regardless of the loop condition, and only checks the condition after executing the loop body.

Here's an example of how to simulate a do-while loop in Python:

    while True:
        user_input = input("Please enter a number between 1 and 10: ")
        number = int(user_input)

        if 1 <= number <= 10:
            break
        else:
            print("Invalid input. Please try again.")

In this example, the loop is set up with a while True statement, meaning it will continue executing indefinitely until a break statement is encountered. 
 - We prompt the user for input and convert it to an integer. 
 - We check if the input number is between 1 and 10 (inclusive). 
 - If the input is valid, we break out of the loop; otherwise, we print an error message and ask the user to try again. 

This ensures that the loop keeps running until the user provides a valid input, simulating the behavior of a do-while loop.


## For Each Loops (5 minutes)
For each loop, also known as a "for loop" in Python, is another type of looping control structure that allows you to iterate over a sequence of items. Unlike while loops, which execute a block of code as long as a specific condition is true, for loops automatically iterate over a given sequence (such as a range of numbers, elements in a list, or characters in a string), executing the loop body for each item in the sequence.

In Python, you can use two primary styles of for loops:

* `for x in range(y)`: This style of for loop iterates over a range of numbers from `0` to `y-1` (or within a specified range) using the `range()` function.
* `for x in y`: This style of for loop iterates over the elements of a sequence, such as a list, tuple, or string, directly accessing the elements one by one and storing them in the variable `x`.

In the following sections, we will dive deeper into both styles of for loops and discuss their usage with examples.


### for x in range(y) (3 minutes)
The `for x in range(y)` loop is a common type of for loop in Python, which iterates over a range of numbers from `0` to `y-1`. The `range()` function is used to create a sequence of numbers that the loop iterates over. Here's the basic structure of this type of for loop:

    for x in range(y):
        # Code to be executed

Here's an example of a for loop that prints the first 10 numbers using `range()`:

    for i in range(10):
        print(i)

In this example, the loop iterates over the numbers `0` to `9` and prints each number. The loop variable `i` takes on each value in the range one by one.

The `range()` function can also take optional parameters to define a custom range:

* `range(stop)`: Generates a sequence of numbers from `0` to `stop-1`.
* `range(start, stop)`: Generates a sequence of numbers from `start` to `stop-1`.
* `range(start, stop, step)`: Generates a sequence of numbers from `start` to `stop-1`, incremented by the `step` value.

Here's an example of a for loop that prints odd numbers from `1` to `20` using a custom range:

    for i in range(1, 21, 2):
        print(i)

In this example, the loop iterates over the numbers `1` to `20` with a step value of `2`, effectively printing only the odd numbers in this range.

Using `for x in range(y)` loops allows you to iterate over a range of numbers easily, providing a concise and readable way to perform repetitive tasks on number sequences.

### for x in y (2 minutes)
The `for x in y loop` is another type of `for` loop in Python that iterates directly over the elements of a sequence, such as a list, tuple, or string. This loop is particularly useful when you want to process each element in a sequence without the need for indexing.

Here's the basic structure of this type of for loop:

    for element in sequence:
        # Code to be executed

Here's an example of a for loop that iterates over a list of names and prints each name:

    names = ["Alice", "Bob", "Charlie", "David"]

    for name in names:
        print(name)

In this example, the loop iterates over the elements of the `names` list. The loop variable `name` takes on each value in the list one by one, and the loop body prints the current `name`.

Here's another example that iterates over a string and counts the number of vowels:

    text = "hello world"
    vowels = "aeiou"
    count = 0

    for char in text:
        if char.lower() in vowels:
            count += 1

    print("Number of vowels:", count)

In this example, the loop iterates over the characters in the text string. The loop variable `char` takes on each character one by one, and the loop body checks if the current character is a vowel (ignoring case). If the character is a vowel, the `count` variable is incremented.

Using `for x in y` loops provides a clean and efficient way to iterate over the elements of a sequence, making it easier to work with various data structures and perform operations on their elements.

## Nested Loops (3 minutes)
Nested loops are loops within loops, meaning one loop is placed inside the body of another loop. This concept allows you to perform more complex operations and work with multi-dimensional data structures, such as lists of lists or matrices.

The basic structure of nested loops in Python is as follows:

    for outer_variable in outer_sequence:
        for inner_variable in inner_sequence:
            # Code to be executed

Here's an example of nested loops that prints the multiplication table for numbers `1` to `10`:

    for i in range(1, 11):
        for j in range(1, 11):
            print(i * j, end="\t")
        print()

In this example, the outer loop iterates over the numbers `1` to `10`, and the inner loop also iterates over the numbers `1` to `10`. The inner loop multiplies the current values of `i` and `j` and prints the result with a tab character for formatting. After each iteration of the inner loop, the `print()` function is called without any arguments to create a new line, effectively creating a multiplication table.

Nested loops can also be used with different types of loops, such as a `for` loop inside a `while` loop or vice versa, depending on the specific requirements of your program.

Keep in mind that nested loops can significantly increase the complexity of your code and the time it takes to execute, especially when dealing with large data sets. It is essential to use nested loops judiciously and optimize your code whenever possible to avoid performance bottlenecks.

When we begin learning about Solidity, nested loops will be one of the core things that we will take great pains to avoid. However, outside the blockchain we can get away with using them for many situations.

## Closing Remarks (1 minute)
Today, we explored various looping control structures in Python, including `while` loops and `for` loops. 

For `while` loops, we learned: 
* How to set up `while` loops
* Use `break` and `continue` statements to control loop execution
* Simulate do-while loops

We also discussed for loops, particularly: 
* Using `for x in range(y)` 
* Using `for x in y` 
* Working with nested loops

Looping control structures are essential in programming, as they allow you to perform repetitive tasks and handle data in a more efficient and readable manner. As you continue your programming journey, you will find these concepts applicable in many different scenarios and problems.

Now, let's practice creating these structures in today's lab lesson!


