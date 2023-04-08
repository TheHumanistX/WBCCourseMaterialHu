# Day 1: Variables, Data Types, Input/Output
## Introduction
In this lesson, we will cover some of the basic concepts and syntax of the Python programming language, specifically input/outuput, data types, variables, and basic arithmetic operators. If you're new to programming, then don't worry, these are very simple topics.

## Input and Output
Input and output commands are essential for a program to interact with its user. In Python, the `input()` function is used to get input from the user, and the `print()` function is used to display output on the screen.

The `input()` function prompts the user to enter some data and waits for the user to enter the data, followed by pressing the enter key. For example, if we want to ask the user to enter their name, we can use the `input()` function like this:

```
name = input("Enter your name: ")
```

In this example, we are storing the user's input inside a variable named *name*. The prompt "Enter your name: " will be displayed on the screen, and the program will wait for the user to enter their name, followed by pressing the enter key. Once the user has entered their name, the value will be stored in the name variable.

The `print()` function is used to display output on the screen. For example, we can use the `print()` function to display the user's name that we got from the previous example:
```
print("Your name is", name)
```
In this example, we are using the `print()` function to display a message along with the value of the name variable. The output will be displayed on the screen as:
```
Your name is <user's name>
```

## Strings
In computer programming, a string is a sequence of characters, such as letters, digits, and symbols, that are enclosed in quotation marks. A string can be used to represent text or any other sequence of characters. In most programming languages, including Python, strings can be represented using either single quotes (') or double quotes (").

For example, the following are both valid strings in Python:


    'Hello, World!'
    "Hello, World!"

### Escape Characters
There are "illegal" characters in strings that are reserved for telling Python how to behave, rather than acting as actual characters. An immediate example is the `"` and `'` characters, which tell Python when a string ends or begins.

If we need to use these characters, then we need to "escape" them with a backslash `\`:

    print("I said, \"You need to use backslash \\ to write illegal characters.\"")

The full list of escape characters are such:

* \\'	Single Quote	
* \\\	Backslash	
* \n	New Line	
* \r	Carriage Return	
* \t	Tab

### Concatentation and F-Strings
String concatenation is the process of combining two or more strings into a single string. In Python, you can concatenate strings using the `+` operator. For example:

    greeting = "Hello"
    name = "John"
    message = greeting + " " + name + "!"
    print(message)

This will output:

    Hello John!

In addition to the `+` operator, you can also use the `+=` operator to concatenate a string to an existing string. For example:

    greeting = "Hello"
    name = "John"
    greeting += " " + name
    print(greeting)

This will output:

    Hello John

You can also use `,` to separate strings and variables in a `print()` function:

    greeting = "Hello"
    name = "John"
    print(greeting, name)

Notice how this automatically adds a space between the two variables used. These kinds of strings can also become very complicated and difficult to read. However, we may use f-strings to make strings easier to read and to control the whitespace characters ourselves, although they use a slightly more complex syntax. 

To create an f-string, use the undercase character `f` before the string quotes, and surround all variable names with {curly braces}:

    greeting = "Hello"
    name = "John"
    print(f"{greeting} {name}, how are you today?")

See how much easier that is to read and understand? I highly recommend you learn to use f-strings in Python.

Note that strings in Python are technically *immutable*, which means that you cannot modify a string once it is created. Therefore, when you concatenate strings using `+` or `+=`, you are actually creating a new string object. This won't be a problem right now, but later on it could become problematic if you aren't aware of it.

### String Length
We can easily find out how many characters a string has by using the `len()` function:

    print(len("Hello World!"))  # Returns 12

The `len()` function is not specific to strings, it can be used on any kind of list or "iterable" data type, which we will learn more about later this week.

### String Slicing
We can "slice" parts of a string with string slicing, which copies and returns a portion of the string between two "index" values. 

String slicing is performed with the `[` square brackets `]` and `:` symbols:

    print("Hello World!"[5:12])  # Returns "World!"

Note that string slicing does not alter the string you slice, it only returns a copy of the part you sliced.

Computers begin counting from 0, so if we want to slice the first character then we can use `[0:1]`. 

    print("Hello World!"[0:1])  # Returns "H"

The simpler way to slice from the beginning to some character is to leave out the first number but include the `:` operator:

    print("Hello World!"[:5])  # Returns "Hello"

Alternatively, if we want to slice everything beginning at one character all the way to the end, then we simply do the opposite:

    print("Hello World!"[6:])  # Returns "World!"

But, what happens if you put a negative number in there? It simply begins counting from the end and moves backwards:

    print("Hello World!"[-6:])  # Returns "World!"
    print("Hello World!"[:-5])  # Returns "Hello W"
    print("Hello World!"[-10:10])  # Returns "llo Worl"

The reason why slicing works on strings is because strings are a list of elements. We will learn more about lists later this week. This means that slicing will not work on numbers unless you convert them to a string first.

### Uppercase, Lowercase, and Title Methods
Strings have several functions and "methods" associated with them. Methods are special functions that are "attached" to objects, which we will dive into much more in Week 2. Everything in Python is an object, so everything has methods. 

Unlike regular functions, methods are called using dot notation:

* `some_string.lower()` will set all letters in the string to lowercase
* `some_string.upper()` will set all letters in the string to uppercase
* `some_string.title()` will set the first letter of each word to uppercase, and the rest to lowercase

Often, when taking letters for user input we want to account for them entering uppercase or lowercase letters. This will become more important when we discuss branching control structures.

A common example is a simple continuation prompt, `"Would you like to continue? Y/N: "` where the user is expected to provide a letter answer. We usually don't care if they provide an uppercase or lowercase `"Y"` or `"N"`, but the program does care. In order to make things simpler, we can convert their inputs to uppercase or lowercase, which can make the program simpler.

    user_input = input("Would you like to continue? Y/N: ").upper()
    if user_input == "Y": do_the_thing()

It isn't important to remember these right now, but there are exercises on them if you want to learn them.

### Other String Methods
A full list of all string methods in Python can be found at the W3Schools website:

https://www.w3schools.com/python/python_strings_methods.asp

## Variables and the Assignment Operator
In Python, variables are like containers that hold data, such as numbers or text. You can use variables to store any kind of data that Python recognizes, such as integers, floats, strings, and more.

When you create a variable in Python, you need to use the assignment operator (=). This operator is different from the mathematical equality symbol, as it assigns the value on the right side to the variable on the left side. 

For example, if you write `x = 5`, you are creating a variable named `x` and assigning the value `5` to it. You are **not** saying that x is equal to 5 as a mathematical identity, you are simply creating a "box", putting the label "x" on it, and storing a number 5 inside it.

### Variable Names
Choosing descriptive variable names is important for writing clean code that is easy to read and understand. Some general guidelines for variable naming include:

* Use descriptive names that reflect the purpose or meaning of the data being stored
* Use lowercase letters and underscores to separate words within the name (e.g. first_name)
* Avoid using abbreviations or acronyms that are not widely recognized or understood
* Be consistent with your naming conventions throughout your code

By following these guidelines, you can create code that is more readable and easier to maintain over time. Let's look at some examples of good variable names and bad variable names:

#### Good variable names:

    num_students (descriptive and easy to understand)
    total_sales (descriptive and easy to understand)
    customer_id (descriptive and easy to understand)
    user_input (descriptive and easy to understand)
    sqrt_two (sqrt is widely recognized as "square root")
    account_ptr (ptr is widely recognized as "pointer" to a memory location)

#### Bad variable names:

    a (not descriptive, could mean anything)
    x (not descriptive, could mean anything)
    thing (not descriptive, could mean anything)
    temp (not descriptive, doesn't convey any useful information)
    byob (non-standard acronym, could mean anything)
    some_incredibly_long_and_unnecessary_variable_name (descriptive, but too long)

As a general rule, it's important to choose variable names that are descriptive, concise, and easy to understand..

Choosing good variable and function names is one of the biggest differences between a junior developer and mid-level or senior developers. People who are fluent with programming can choose variable and function names that flow so well in the code that the code itself reads like an English sentence. However, this takes experience and seeing many examples of good and bad code, and often takes many hours of confusion dealing with other people's badly named variables and functions.

#### Some exceptions

Many times in this course, we will show abstract examples of code that is meant to show general rules or patterns. In these cases, we will often use abstract variable names like `some_var` or `some_num` to show they can represent any variable or any number, and that the concept behind the variable's value isn't as important as how it is used. These would be terrible names in any other context, so don't ever use them for practical purposes.

You'll also notice when we get to loops later this week that single-letter variables are frequently used for counter variables. The most common letters are i, j, k, and n. These four single-letter names are widely recognized as disposable counter variables that only exist to count loop repetitions, and are then erased from memory afterward. One exception is the letter `l`, which in code font is almost identical to the number `1`, and should be avoided in every context.

## Null / None Data Type
As you are coding, you will sometimes know the name of a variable that you need, but you won't know where that variable's data will be coming from yet. In many languages, you can create a variable without giving it a value. However, in Python all variables must be given a value of some kind when they are declared. 

In that case, you can create the variable and assign it a `None` value, and then replace it later.

The `None` data type is a special value that indicates the absence of a value, called a null value. Most programming languages have some kind of null data type, such as `null` in JavaScript, or `void` in C++. It is commonly used as a placeholder for when data isn't known yet but the variable name is needed.

For example:

    user_name = None

In this example, we are creating a variable whose value we don't know yet, so we are assigning it `None`.

One exception that we will encounter in this course is Ethereum's programming language Solidity, which does not have a null data type. Instead, all data types in Solidity have a default value, such as `0`, `false`, or `""`. We will discuss how this affects our coding strategy in Week 7, when we begin learning about Solidity.

## Comments
Comments in Python are used to document code and make it more readable. They do not affect the code execution in any way, and are ignored by the Python interpreter. There are two types of comments in Python: single-line comments and multi-line comments.

Single-line comments start with the hash symbol (#) and can be used to add a comment to the end of a line of code. Everything to the right of a hash symbol on one line will be interpreted as a comment. For example:

    # This is a single-line comment
    x = 5  # This is another single-line comment

Multi-line comments are enclosed in triple quotes ('''comment''') and can be used to add comments that span multiple lines. For example:

    '''
    This is a multi-line comment.
    It can span multiple lines of code.
    '''

    x = 5  # This is not part of the multi-line comment

It's important to use comments to make your code more readable and understandable to other people who may be reading or modifying it, especially when you are still learning. Good commenting practices include:

* Adding comments to explain how complex code works
* Adding comments to explain why the code is doing what it does
* Keeping comments up-to-date with the code
* Avoiding unnecessary comments that just restate what the code is already saying

Here's an example of good commenting practices:

    # This function adds two numbers together
    def add_numbers(a, b):
        # Check that the inputs are valid
        if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
            raise TypeError('Inputs must be numbers')

        # Add the numbers together and return the result
        result = a + b  # Calculate the sum of the two inputs
        return result  # Return the sum to the caller

Notice how you can still follow what the code is doing thanks to the comments inside it, even though you haven't learned many of the keywords the code uses.

When you are starting out, comments can make a big difference in helping you remember what your code does, and when you're working on a team comments are invaluable for clarifying pieces of code whose purpose isn't obvious. Just don't overdo it, as comments for code that is obvious or self-explanatory are obnoxious and annoying.

Later this week, we will learn how to create Doxygen comments used for rapidly documenting our code with comments and comment tags. Documenting your code so other developers can quickly know what it does is a very useful and appreciated habit in the real-world.

## Integers and Floats
You will have noticed by now that numbers and arithmetic are a core component in programming. Integers and floats are two different data types used to represent numbers in programming.

An integer is a whole number with no decimal places, and is every computer's native data type. All data on a computer can be represented in binary code, and binary code can be translated into integers easily (for example, 0001 is 1, 0010 is 2, 0011 is 3, and so on). 

In Python, integers are represented by numbers with no decimals. Here's an example of an integer variable:

    x = 5

A float, on the other hand, is a number with a decimal point. "Float" is short for "floating-point-number", which refers to a decimal point's ability to float around the number in different places. In Python, floats are represented by adding a decimal point and at least one digit after it, or by using scientific notation with the letter "e" to indicate the power of 10. 

Here's are some examples of float variables:

    x = 3.14e5
    y = 3.14
    z = 3.0E-5

It's important to note that in some programming languages performing arithmetic operations on integers and floats together can result in unexpected behavior or type errors. When an arithmetic operation is performed on an integer and a float in Python, the integer is automatically converted to a float before performing the operation. For example:

    x = 5
    y = 3.14
    z = x + y
    print(z)  # Output: 8.14

In this example, the integer 5 is automatically converted to the float 5.0 before being added to the float 3.14. The result is a float, 8.14.

## Arithmetic Operators
The basic arithmetic operators in Python are addition (+), subtraction (-), multiplication (*), and division (/). There are a lot more than just these four, but we will learn about them tomorrow. Arithmetic operators can be used with numbers to perform mathematical operations. For example:

    >>> 2 + 3   # Note: the >>> symbol is often used to represent terminal inputs
    5           # and is not used in actual code. Here we are using it to show
    >>> 10 - 7  # raw arithmetic operations and their outputs.
    3
    >>> 4 * 5
    20
    >>> 15 / 3
    5.0

Notice that the division operator / returns a floating-point number, even when dividing two integers.

#### Order of operations
In Python, the order of operations for arithmetic follows the usual rules of mathematics: multiplication and division are performed before addition and subtraction. However, parentheses can be used to group operations and force a certain order of evaluation. For example:

    >>> 2 + 3 * 4
    14
    >>> (2 + 3) * 4
    20
    >>> 10 / 2 * 3
    15.0
    >>> 10 / (2 * 3)
    1.6666666666666667

In the first example, Python multiplies 3 and 4 first, then adds 2 to the result. In the second example, the parentheses force Python to add 2 and 3 first, then multiply the result by 4. The third example shows that multiplication and division are performed left to right, so Python divides 10 by 2 first, then multiplies the result by 3. In the fourth example, parentheses are used to ensure that 2 is multiplied by 3 first, then the result is used to divide 10.

It's important to use parentheses to make your code more readable and to ensure that it is evaluated correctly. For example, consider the following code:

    x = 10 - 2 * 3

This code will assign the value 4 to x, because Python will multiply 2 and 3 first, then subtract the result from 10. However, if the code is written as:

    x = (10 - 2) * 3

The value 24 will be assigned to x, because the parentheses force Python to subtract 2 from 10 first, then multiply the result by 3. 

This follows the same order of operations as in mathematics, where the acronym PEMDAS can be used to remember what will be evaluated first:

* Parantheses
* Exponents
* Multiplication
* Division
* Addition
* Subtraction

We will discuss arithmetic in programming (and in general) on Day 2, when we learn about all of the arithmetic and assignment operators available in Python, and use them to tackle much more complex math problems.

## Type Conversion
Let's say we ask the user to input a number and then use it in a math operation. So, we write the following code and run it:

    num = input("Enter a number: ")
    
    result1 = num * 2
    print(result1)
    
    result2 = num + 2
    print(result2)
    
    result3 = num / 2
    print(result3)

If we provide the input `250` and hit enter, then the program will throw an error. When we look at the terminal to see what the print statements show, then `result1` will be `250250`, and the rest will be missing. Instead, we will see a bunch of red text telling us about some kind of error. 

This is because Python treats all inputs as *strings*, while numbers without quotes are treated as numbers. So, `num * 2` will duplicate the input string `"250"` 2 times, `num + 2` will throw an error, and `num / 1` doesn't even run. 

To fix this, we need to use type conversion.

Type conversion is the process of changing the data type of a value from one type to another. In Python, there are built-in functions that can be used to perform type conversion. The three most commonly used functions are int(), float(), and str(), which convert data inside the parantheses to integers, floats, and strings, respectively.

### Converting to an integer
In order for Python to treat the user's input as an integer, we need to use the `int()` type conversion function on the input, and store the result in a variable. Let's try it on the previous example above:

    input_num = input("Enter a number: ")
    num = int(input_num)  # Convert input from string to integer

    result1 = num * 2
    print(result1)

    result2 = num + 2
    print(result2)

    result3 = num / 2
    print(result3)

Giving this code 250 yields the result:

    500  # From num * 2
    252  # From num + 2
    125  # From num / 2

Which is exactly what we expected. 

In the above code, we use the `input()` function to get a number from the user, and then use the `int()` function to convert the input to an integer. We can then perform the math operation and print the result without any unexpected behavior or errors.

We can do the same thing with `float()`, especially if we are expecting the user to provide a decimal number as an input.

Many times, we don't need the string version of an input number that is produced by the `input()` function, and storing it in a variable is a waste of space in the computer's memory. Fortunately, we can convert the input on-the-spot by wrapping the `input()` function inside the `int()` type conversion function:

    # Immediately type convert the input provided by the user
    user_input = int(input("Enter a number: "))

    result = user_input * 2

This approach is more efficient and uses fewer lines and variables, so it is recommended that you practice using this whenever you don't need the string version of a user's input number. 

#### What happens if you convert a non-number to a number?
An error will be thrown if the user provides a non-integer input, which will stop the program from running. We will learn how to deal with this in Week 2, when we learn about exceptions and error handling.

However, until then we will learn a technique that doesn't require error handling this week, which will also allow us to re-prompt the user to provide a valid input.

### Converting to a string
Sometimes we want to convert a number to a string so we can use string-specific functions on it. We can do this using the `str()` function, which converts the data from an integer to a string.

Let's say we want to tell how many digits an integer has, and we also want to know what it's left-most digit is. Normally, this would require a looping structure and repeated division operations to determine the integer's order of magnitude. However, strings give us the ability to find both of these things easily without using any loops or arithmetic:

    # Convert integer to string
    num_int = 10
    num_str = str(num_int)

    # Use the length function len() to count how many digits the integer has
    num_str_length = len(num_str)
    print("The number has", num_str_length, "digits")

    # Use square brackets to access the first digit
    first_digit = num_str[0]
    print("The first digit is:", first_digit)

    # Print string
    print("The number is:", num_str)

Here we use the `len()` function to tell us how many digits are in the number, and we introduce square brackets to access the first digit. We access the first digit at index value `0`, because computers begin counting at `0`.

## Combining Variables

Combining variables together is a powerful feature of programming that allows us to manipulate and work with data in various ways. There are several ways to combine variables, including setting a variable equal to another variable to copy its value, assigning a variable to itself plus an arithmetic operation to increment or decrement its value, and mixing multiple variables in the same assignment.

Here's an example of setting a variable equal to another variable:

    x = 5
    y = x

In this example, the value of `y` is set equal to the value of `x`, which is `5`. Now `y` also holds the value of `5`. When we assign a variable to another variable, we are making a *copy* of that variable. Therefore, if we change the value of `x`, then `y` will still have the value `5`, as `y` holds a *copy* of `x` in a different memory slot:

    x = 5        # This creates a new memory slot with the integer 5 in it
    y = x        # This copies x's value into y's memory slot
    print(x, y)  # Prints 5 5
    x = 10       # Reassigns the integer 10 to x's memory slot
    print(x, y)  # Prints 10 5

We can also assign variables to themselves as part of an incrementing or decrementing operation:

    x = 5
    x = x + 3

In this example, `x` is initially set to `5`. Then we add `3` to `x`, so the value of `x` becomes `8`. If you are confused by the statement `x = x + 3`, then you are not alone!

Recall that the `=` sign is **not** the same thing in programming as it is in mathematics. In mathematics, the = sign expresses an *equality* between the left and right sides, but this would be impossible because there is (probably) no number in the universe that is equal to itself plus 3. 

However, in programming the `=` sign is not describing an equality between the left and right sides of an equation, it is *assigning* the value on the right to the variable on the left. 

In other words, we are not saying, "x is equal to itself plus 3." We are actually saying, "let x's new value be its current value plus 3." This is a major distinction between programming and mathematics that needs to be understood early on. The `=` operator changes the value of the variable it operates on.

With that in mind, we can also mix variables and arithmetic operations in the same assignment:

    x = 5
    y = 3
    z = x + y * 2

In this example, x is set to 5 and y is set to 3. We then create a new variable z and set it equal to the result of an arithmetic expression that involves x and y. The expression involves multiplication and addition, and follows the order of operations for arithmetic. The final value of z is 11.

#### Solving math equations with variable combinations
We can use these techniques to create complex math formulas that require multiple user inputs. For example, let's say we want to create a program that calculates the area of a trapezoid. We would need to prompt the user for the height, the length of the top base, and the length of the bottom base. We could then use these inputs to calculate the area:

    # Get user inputs
    height = int(input("Enter the height: "))
    top = int(input("Enter the length of the top base: "))
    bottom = int(input("Enter the length of the bottom base: "))

    # Calculate the area
    area = (top + bottom) * height / 2

    # Output the result
    print("The area of the trapezoid is:", area)

In this example, we use the input function to prompt the user for the height, top, and bottom inputs. We then use these inputs to calculate the area of the trapezoid using the formula area = (top + bottom) * height / 2. Finally, we use the print function to output the result to the console.

## Lesson Summary
Great job on making it this far! We covered a lot of details today, so here are the main takeaways from today's lesson that you should focus on remembering:

* `input()` is used for gathering user input
* `print()` will print anything inside the parantheses to the console
* `=` assigns a new value to a variable
  * `=` is **NOT** the same thing as in mathematics!
* `#` allows you to write single-line comments inside your code
  * `"""` opens and closes multi-line comments
* `+`, `-`, `*`, `/` are the basic arithmetic operators
  * Arithmetic in programming follows the same order of operations as mathematics
* `(` and `)` symbols are used for grouping expressions together
* `int()` is used to convert a string to an integer
* `float()` is used to convert a string to a decimal number
* `str()` is used to convert an integer or float to a string
* Strings can't perform arithmetic, but they can perform string operations
* Variables can be combined together to solve math problems

Now, let's do some practice with these concepts in the lab part of today's lesson!

