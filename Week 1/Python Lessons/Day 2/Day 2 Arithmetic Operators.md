# Day 2: Arithmetic Operators
## Introduction
Welcome to our lesson on arithmetic operators in Python! These operators are an essential part of programming and allow us to perform all kinds of calculations and operations on numerical data.

In this lesson, we will review the basic arithmetic operators and then move on to more advanced concepts, such as exponentiation, integer vs. float division, modulo, compound assignment operators, and grouping.

We'll also discuss how to code complex math formulas that use multiple operators and variables. By the end of this lesson, you'll have a solid understanding of arithmetic operators in Python and be able to use them effectively in your own programs. So let's get started!

## Arithmetic Operators
Arithmetic operators are used to perform mathematical operations in Python. There are several arithmetic operators available in Python, including the basic arithmetic operators, exponentiation, integer vs. float division, modulo, compound assignment operators, and grouping.

I'm including a diagram of every arithmetic operator in Python for your convenience. Don't feel like you need to memorize every operator right away! Instead, refer to the diagram frequently to refresh your memory on which operators do what.

### Review Basic Arithmetic Operators
The basic arithmetic operators in Python include addition (+), subtraction (-), multiplication (*), and division (/). These operators work just like they do in everyday math.

    x = 5
    y = 3

    print(x + y)  # Output: 8
    print(x - y)  # Output: 2
    print(x * y)  # Output: 15
    print(x / y)  # Output: 1.6666666666666667

If you did yesterday's exercises, then by now you should be **very** comfortable with these basic operators.

### Exponentiation
The exponentiation operator (**), also known as the power operator, raises the value of the left operand to the power of the right operand.

    x = 2
    y = 3

    print(x ** y)  # Output: 8

We can use grouping operators on each side of the power operator to create more sophisticated exponentials as well:

    x = 2
    y = 2
    print ((2 + x) ** (y * 5))  # Output: 1073741824

### Integer vs Float Division
Python has two division operators: / and //. As we remember from yesterday, the / operator performs regular division and returns a float. However, the // operator performs integer division and returns an integer. This means any decimals in the result will cut off.

    x = 5
    y = 2

    print(x / y)  # Output: 2.5
    print(x // y)  # Output: 2

If you did yesterday's exercises on type conversion, then you may remember an exercise that used type conversion from float to integer to cut off the decimal part of a number. While that totally works, you now have a much easier way to do it with the integer division operator.


### Modulo
The modulo operator (%) returns the remainder of dividing the left operand by the right operand.

    x = 5
    y = 2

    print(x % y)  # Output: 1

If you are a beginner in programming, then you have probably never seen this operator before. Odds are, the last time you encountered math that intentionally uses remainders instead of decimals was probably early grade school. However, modulo and "modular arithmetic" are extremely important topics for programming and computer science.

Modulo can be useful in many applications, such as determining if a number is even or odd, checking if a number is divisible by another number, or wrapping values around a circular range. It is also commonly used in cryptographic algorithms and hashing functions, and it is an essential component of the cryptography that blockchain technology and cryptocurrencies are built on.

Let's check out two big uses that you will definitely be using modulo for: Checking for parity (evennes or oddness), and checking divisibility.

#### Checking for parity
In mathematics, we call a number's evenness or oddness its "parity". Even numbers are defined as any number divisible by 2, including 0. Odd numbers are numbers that are not divisible by 2.

    x = 5
    remainder = x % 2

If `remainder` is `1`, then it means `x` is an odd number, and if it's `0` then it means `x` is an even number. These are the only two remainders that will ever result from `x % 2` for any value of `x`. 

Later today, when we learn about branching control structures and comparison operators we will use this relationship to branch our code based on if the number is even or odd.

#### Checking divisibility
Just like parity checking, we know if a number is divisible by another number if its modulo returns `0`. For example:

    x = 10
    y = 2
    remainder = x % y

In this case, if `remainder` is `0` then it means `x` is divisible by `y`, and if it's anything other than `0` then it is not divisible. Part of today's exercises is a common programming challenge that requires this relationship, so be ready for that!

### Compound Assignment Operators
Compound assignment operators combine an arithmetic operator with the assignment operator to perform an operation and assign the result to the same variable in one step. They are the shorthand way of writing `x = x + a` and similar operations.

    x = 5
    x += 3  # Equivalent to x = x + 3
    print(x)  # Output: 8

    x = 5
    x *= 3  # Equivalent to x = x * 3
    print(x)  # Output: 15

There exists a compound assignment operator for every arithmetic operator, and they all work the same:

    x = 5

    x += 3  # Equivalent to x = x + 3
    print(x)  # Output: 8

    x -= 3  # Equivalent to x = x - 3
    print(x)  # Output: 2
    
    x *= 3  # Equivalent to x = x * 3
    print(x)  # Output: 15
    
    x **= 3  # Equivalent to x = x ** 3
    print(x)  # Output: 125
    
    x /= 3  # Equivalent to x = x / 3
    print(x)  # Output: 1.66666667
    
    x //= 3  # Equivalent to x = x // 3
    print(x)  # Output: 1
    
    x %= 3  # Equivalent to x = x % 3
    print(x)  # Output: 2

## Coding Complex Math Formulas

The process for turning complex math formulas into code is exactly the same for these extended operators as it is for the basic arithmetic operators. So, if you did the exercises from yesterday then you are off to a good start!

These new operators do introduce some mathematical syntax that you might have never seen before, such as the floor operator and the $mod$ operator. Fortunately, if you aren't going into any kind of serious scientific discipline then you likely won't need to work with these things often--if ever. But, it does help to be able to recognize them.

Let's look at three examples of how mathematics represents exponentiation, floor/integer division, and modulo, and how we write the same expressions in Python:

**Exponentiation (Math):** ${(x + 5)}^{y + 1}$
**Exponentiation (Python):** `(x + 5)**(y + 1)`

**Floor Division (Math):** $ \lfloor x / y \rfloor$
**Integer Division (Python):** `x // y`

**Modulo (Math):** $x \bmod{y}$
**Modulo (Python):** `x % y`

Usually, when you work with these things you aren't thinking about them in terms of mathematics, you are usually thinking about them in terms of the program you are writing and some particular thing it needs to do. You don't need to know advanced mathematics or cryptography to know how to use floor division and modulo either.

## Square Roots
You may notice that there are no operators for square roots. If we recall our Algebra, a square root is just a fractional exponent. In Python, you can perform a square root operation by writing it in exponential form:

**Square Root (Math):** $\sqrt{x}$
**Square Root (Python):** `x**(1/2)`
**Nth Root (Math):** $\sqrt[n]{x}$
**Nth Root (Python):** `x**(1/n)`

Many programming languages do **not** support this syntax, however, and rely on external libraries to import a root functions, usually with the function name `sqrt()`. Fortunately, you rarely ever need to find roots.

## Conclusion
In this short lesson we covered the full range of arithmetic operators in Python:

* `+`: Adds two numbers together
* `-`: Subtracts one number from another
* `*`: Multiplies two numbers together
* `/`: Divides one number by another (float division)
* `//`: Divides one number by another and rounds down to the nearest integer (integer/floor division)
* `%`: Computes the remainder of dividing one number by another
* `**`: Raises a number to a power, including fractional powers for roots

We also learned about compound assignment operators:

* `+=`: Adds the right operand to the left operand and assigns the result to the left operand. For example, x += 5 is the same as x = x + 5.
* `-=`: Subtracts the right operand from the left operand and assigns the result to the left operand. For example, x -= 5 is the same as x = x - 5.
* `*=`: Multiplies the left operand by the right operand and assigns the result to the left operand. For example, x *= 5 is the same as x = x * 5.
* `/=`: Divides the left operand by the right operand and assigns the result to the left operand. For example, x /= 5 is the same as x = x / 5.
* `%=`: Performs modulus division on the left operand with the right operand and assigns the remainder to the left operand. For example, x %= 5 is the same as x = x % 5.
* `//=`: Performs integer division on the left operand with the right operand and assigns the quotient to the left operand. For example, x //= 5 is the same as x = x // 5.
* `**=`: Raises the left operand to the power of the right operand and assigns the result to the left operand. For example, x **= 5 is the same as x = x ** 5.

You now know all of the arithmetic operators available to you in Python! Refer to the lesson diagram to get a quick refresher on the operators whenever you forget them!