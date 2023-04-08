# Error Handling
## Lesson Objectives
In this lesson, we will cover the fundamental concepts of error handling and exceptions in Python. We will learn about the different types of exceptions and how to catch and handle them using try, except, else, and finally blocks. 

We will also explore how to implement error handling techniques in a simple Python project. By the end of this lesson, you should:

* Understand the concept of error handling and exceptions in Python OOP.
* Know how to implement error handling using try, except, else, and finally blocks.
* Apply error handling techniques in a simple Python project.


## Introduction:
As your program grows in complexity, it becomes more and more difficult to guarantee that everything works as expected all the time. You may encounter situations where errors and exceptions occur due to invalid input, runtime errors, or other unforeseen circumstances. This is where error handling comes in handy.

In Python, error handling is done through the use of exceptions. An exception is an error that occurs during the execution of a program. When an exception occurs, the program stops executing and an error message is displayed, unless the error is caught by an exception handler. By using error handling techniques such as try-except blocks, you can gracefully handle exceptions and ensure that your program keeps running without crashing.

So, let's get started!


## Exceptions in Python

In Python, an exception is a type of error that occurs during program execution. When an exception occurs, the program terminates abruptly unless the exception is caught and handled properly.

There are several built-in exception types in Python, such as:

* `TypeError`: Raised when an operation or function is applied to an object of inappropriate type.
* `ValueError`: Raised when a function receives an argument of correct type but inappropriate value.
* `IndexError`: Raised when a sequence index is out of range.
* `KeyError`: Raised when a key is not found in a dictionary.
* `AttributeError`: Raised when an attribute reference or assignment fails.
* `NameError`: Raised when a local or global name is not found.
* `ZeroDivisionError`: Raised when division or modulo operation is performed on a number with a zero divisor.

There are many other exception types available in Python, and you can also create your own custom exceptions.

Next, we can move on to discussing try/except blocks.


### Try/Except Blocks

Try/except blocks are used to catch exceptions in Python. Code that may potentially raise an exception is placed in the `try` block, and if an exception is raised, it is caught by the `except` block.

Here's the basic syntax of a `try`/`except` block:

    try:
        # some code that may raise an exception
    except ExceptionType:
        # code to handle the exception

The `try` block contains the code that may potentially raise an exception. If an exception is raised, the program jumps to the `except` block and executes the code there. The ExceptionType in the `except` block is the type of exception that the block is designed to catch.

Let's see an example:

    try:
        num = int(input("Enter a number: "))
        result = 10 / num
        print(result)
    except ZeroDivisionError:
        print("You can't divide by zero!")

In this example, we try to get an integer from the user using the input function, and then divide 10 by the number entered. If the user enters 0, a `ZeroDivisionError` will be raised. The `except` block will catch this exception and print a message to the user, rather than crashing the program.

Now, let's move on to the else and finally blocks.

### Else/Finally
Else and finally blocks are other ways of handling exceptions in Python.

An else block is executed only if there is no exception raised in the try block. It is placed after all except blocks. It is generally used to add some code after a successful try block execution.

A finally block is executed whether an exception is raised or not in the try block. It is used to clean up any resources used by the program. Finally block is optional and is placed after the else block.

Here's the basic syntax:

    try:
        # some code
    except ValueError as e:
        # handle the error
    else:
        # executed if no exception raised
    finally:
        # always executed

The finally block will always execute, even if there was no exception raised in the try block.

Note that if there is no except block, else block will not be executed.

Let's look at a realistic example of how this can be used when opening and reading a file with Python:

    def read_file(filename):
        try:
            with open(filename, 'r') as file:
                content = file.read()
        except FileNotFoundError:
            print("Error: file not found")
        else:
            print("File content:")
            print(content)
        finally:
            print("Execution complete")

    read_file("example.txt")

In this example, we define a function `read_file` that takes a `filename` as a parameter. The function opens the file, reads its contents, and prints them to the console. However, if the file is not found, the function catches the `FileNotFoundError` exception and prints an error message to the console.

If the file is successfully opened and read, the function uses the `else` block to print the file's contents to the console. Finally, regardless of whether an exception is caught or not, the function uses the `finally` block to print a message indicating that the function has completed execution.

This structure allows for effective error handling while ensuring that the program continues to run smoothly.


### Handling Multiple Errors
When dealing with multiple errors, you can catch them in a single except block using parentheses to group them together. For example, you might want to catch both a `TypeError` and a `ValueError`:

    try:
        some_code()
    except (TypeError, ValueError):
        print("An error occurred")

Alternatively, you can have multiple except blocks, each catching a different type of error. This can be useful if you need to handle different types of errors differently.

    try:
        some_code()
    except TypeError:
        print("A TypeError occurred")
    except ValueError:
        print("A ValueError occurred")
    except:
        print("An unknown error occurred")

The `except` block without an argument will catch any type of error that is not caught by the previous `except` blocks. However, it is generally better to be as specific as possible about the errors you are catching, so you can handle them appropriately.


## Implementing Error Handling
In this section, we will explore different techniques for implementing error handling in Python. We will first learn how to catch specific exceptions in Python, such as `ValueError` or `TypeError`. 

Next, we will explore how to use `else` and `finally` blocks to perform actions after exceptions are handled. 

Finally, we will look at implementing error handling techniques to create more robust code, including best practices for handling errors in Python.

### Catching Specific Exceptions in Python
In Python, we can catch specific exceptions by specifying the type of exception we want to catch in the `except` block. This allows us to handle different types of exceptions differently, depending on what went wrong in the code.

For example, if we want to catch a `ValueError`, we can do the following:

    try:
        x = int(input("Enter a number: "))
    except ValueError:
        print("Invalid input. Please enter a valid number.")

This code will catch a `ValueError` if the user inputs something that cannot be converted to an integer, and will print an error message instead of crashing the program.

We can also catch multiple specific exceptions by listing them in the `except` block, separated by commas:

    try:
        # some code
    except (ValueError, TypeError):
        # handle ValueError or TypeError

Now let's implement some of these ideas in code.

### Using else and finally blocks
In addition to the `try` and `except` blocks, there are two additional blocks that can be used with error handling: `else` and `finally`.

#### The else block

The `else` block is executed if no exceptions are raised in the `try` block. This can be useful if you want to perform additional actions only if the `try` block executes successfully. Here is an example:

    try:
        x = int(input("Please enter a number: "))
    except ValueError:
        print("Oops!  That was not a valid number.  Try again...")
    else:
        print("You entered:", x)

In this example, if the user enters a non-numeric value, the `except` block is executed, and the user is prompted to try again. However, if the user enters a valid number, then the `else` block is executed, and the program prints out the number that was entered.

#### The finally block

The `finally` block is executed regardless of whether an exception is raised or not. This can be useful for performing cleanup actions, such as closing files or network connections, regardless of whether an error occurred or not. Here is an example:

    try:
        f = open("myfile.txt")
        # perform some operations
    finally:
        f.close()

In this example, the file is opened in the `try` block, and some operations are performed on it. However, regardless of whether an exception is raised or not, the `finally` block will execute, and the file will be closed.

#### Combining else and finally

It is possible to combine the `else` and `finally` blocks in a single `try`-`except` statement. In this case, the `else` block is executed if no exceptions are raised, and the `finally` block is executed regardless of whether an exception is raised or not. Here is an example:

    try:
        x = int(input("Please enter a number: "))
    except ValueError:
        print("Oops!  That was not a valid number.  Try again...")
    else:
        print("You entered:", x)
    finally:
        print("Thank you for using our program.")

In this example, if the user enters a non-numeric value, the `except` block is executed, and the user is prompted to try again. However, if the user enters a valid number, the `else` block is executed, and the program prints out the number that was entered. 

Regardless of whether an exception is raised or not, the `finally` block will execute, and the program will print out a thank you message.

#### Using assert for Error Handling
`assert` statements can be used for error checking and handling as well. It is often used for debugging code and testing assumptions made by the code. The assert statement takes an expression and raises an exception if the expression is `False`.

Here's an example:

    def divide(a, b):
        assert b != 0, "Cannot divide by zero"
        return a / b

In the example above, we check if `b` is not zero using assert. If it is zero, then the program raises an `AssertionError` with the message `"Cannot divide by zero"`.

`assert` is useful when you want to check for certain conditions that should always be true, and raise an exception if they are not. It can help catch errors early on in development, and help with debugging.

Note that `assert` statements should not be used to handle expected errors that can be caught using `try`/`except` blocks. They should be used only for catching unexpected conditions that may arise during program execution. 

Knowing when it is appropriate to use `assert` is a skill that takes some experience to develop, so don't feel like you need to immediately know when to use `assert`. However, knowing when to check for conditions with an `assert` statement is a requirement for Solidity developers, as failing to assert that certain conditions are true will result in devastating smart contract bugs.

Now that we've covered `assert`, let's move on to building a simple project using error handling.


## Building a Simple Project with Error Handling

For our simple project, let's create a function that takes a list of integers as input and returns the sum of those integers. However, our function should be able to handle errors such as non-integer inputs and empty lists.

Here's some code to get us started:

    def sum_integers(int_list):
        try:
            total = 0
            for num in int_list:
                total += int(num)
            return total
        except ValueError:
            print("Error: non-integer input detected.")
        except TypeError:
            print("Error: input must be a list of integers.")
        except:
            print("An unknown error occurred.")
        finally:
            print("Program finished.")

In this code, we define a function `sum_integers` that takes a list of integers as input. We then use a `try`-`except` block to handle any errors that may occur when trying to sum the integers.

The `try` block contains a `for` loop that iterates over each integer in the input list and adds it to a running total. If any of the values in the list are not integers, a `ValueError` will be raised and the program will move to the `except` block that handles that error. Similarly, if the input is not a list or if the list is empty, a `TypeError` will be raised and the program will move to the appropriate `except` block.

If any other unexpected errors occur, the `except` block that catches all exceptions will run. Finally, the program will always print `"Program finished"` regardless of whether an error occurred or not, thanks to the `finally` block.

We could then call this function with various inputs to test its error handling capabilities:

    sum_integers([1, 2, 3]) # Output: 6
    sum_integers([1, 2, 'a', 3]) # Output: "Error: non-integer input detected."
    sum_integers('1, 2, 3') # Output: "Error: input must be a list of integers."
    sum_integers([]) # Output: "Error: input must be a list of integers."

This is just a simple example, but it should give you an idea of how error handling can be used to make your programs more robust and prevent them from crashing unexpectedly.


## Lesson Summary

In this lesson, we learned about error handling and exceptions in Python. We started by discussing the concept of error handling and how it can help to create more robust code. Then, we talked about the different keywords used for error handling in Python, such as `try`, `except`, `else`, and `finally`. We also discussed how to catch multiple exceptions in a single `except` block.

Next, we went on to implement error handling in a simple Python project. We learned how to catch specific exceptions in Python, use `else` and `finally` blocks to perform actions after exceptions are handled, and implement error handling techniques to create more robust code. Finally, we explored the use of `assert` statements for error handling.

Overall, error handling is an important skill for any programmer, and can help to create more reliable and bug-free programs. By understanding the different ways to handle errors and exceptions in Python, we can write code that is both more readable and more reliable.

