# Variables, Data Types, Input and Output Lab
## Intro
Welcome to the lab portion of today's lesson. In these lab lessons, I will show you a few examples of the topics that were taught so you may follow along with me. After the lab we will apply today's lesson towards building our weekly programming project.

Once you are all done with today's guided learning, you are encouraged to try the unguided exercises by yourself. Solving programming problems without any guidance is the most effective way to master your coding skills, so I highly recommend you do a few exercises each day on the topics you struggle with the most.

## User input and output
Let's review how to gather input from our user and how to output data to the console. First, let's write a program that asks the user for their name, and then prints a personalized greeting message to the console.

    name = input("What is your name? ")
    print("Hello, " + name + "! Nice to meet you!")

Now, let's gather some numbers as inputs, remembering to perform type conversion on the numbers.

    user_input = int(input("Please enter a number: "))
    print("You provided the number", user_input)

Let's recall how to print f-strings, as they are much cleaner and nicer looking, once you get past the syntax.

    user_input = int(input("Please enter a number: "))
    print(f"You provided the number {user_input}")

## Coding basic arithmetic
Let's write a program that asks the user for two numbers, and then calculates and prints the sum (addition) of the two numbers, as well as their difference (subtraction). We will convert the input to a float, and then print the results as f-strings so the code looks cleaner.

    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))
    sum = num1 + num2
    difference = num1 - num2
    print(f"The sum of {num1} and {num2} is {sum}")
    print(f"The difference of {num1} and {num2} is {difference}")

Let's do the same thing for the product (multiplication) and the quotient (division). We can take a huge shortcut by highlighting and copy-pasting the existing code, and then changing the parts that are different.

    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))
    product = num1 * num2
    quotient = num1 / num2
    print(f"The product of {num1} and {num2} is {product}")
    print(f"The quotient of {num1} and {num2} is {quotient}")

When we copy-paste and modify code, we need to be extra careful and make sure we changed everything that needed to be changed. This practice carries a very high risk of introducing errors and bugs to your code, so be sure to test your code right away to make sure you got everything!

## Coding simple math equations
Now, let's solve some basic math problems given a simple description.

#### Your age in dog years
First, let's calculate the user's age in dog years, which is approximately 7 years for every 1 human year.

    age = int(input("Please enter your age: "))
    dog_years_age = age * 7
    print(f"Your age is {age}, which means you are {dog_years_age} in dog years!")

#### Days you have been alive
Next, let's write a program that asks the user for their age, and then calculates and prints the number of days they have been alive. Let's assume there are exactly 365 days per year.

    age = int(input("Enter your age: "))
    days_alive = age * 365
    print(f"You have been alive for approximately {days_alive} days")

#### Celsius-to-Fahrenheit converter
Next, let's do something more practical. Let's write a program that asks the user for a temperature in Celsius, and then converts and prints the temperature in Fahrenheit. 

The formula for this is: $F = (C \times \frac{9}{5}) + 32$


    celsius = float(input("Enter the temperature in Celsius: "))
    fahrenheit = (celsius * 9/5) + 32
    print(f"The temperature in Fahrenheit is {fahrenheit}")

#### Area of a circle
Now, let's calculate the area of a circle. 

Recall that the formula for this is: $A = \pi r^2$

To perform exponentiation in Python, we simply use the double-asterisk `**`, which we will learn more about tomorrow. We can either approximate the value of $\pi$ by writing 3.14, or we can import Python's math module and use `math.pi` to get a highly accurate result. We do this by writing `import` followed by the name of the module at the top of our Python program.

    import math

    radius = float(input("Enter the radius of the circle: "))
    area = math.pi * radius ** 2
    print(f"The area of the circle is {area}")


## Coding complex math equations
Those are all quite simple. Any one-line formula can be quickly and easily translated into code. However, let's tackle some much more complex math equations that are mathematically written as fractions. These will require using our grouping operators to translate them into one-line Python expressions.

Let's try this one first: 
### $\frac{(x + 5)} {(1 - x)}$

    x = float(input("Enter the value of x: "))
    result = (x + 5) / (1 - x)
    print(f"The result is {result}")

This formula helped us out a bit by telling us where to put the parantheses. But, what if it doesn't? And, what if it has a few parts to it? Let's try one that is a lot more complex:
### $\frac{x - 1}{(y + 5)(x + 3)} - \frac{x  y}{z}$

This one doesn't tell us where to put all the parantheses, the multiplication is implied by the terms $(y+5)(x+3)$ and $xy$, and it takes *three* user inputs. This may seem daunting to a beginner, but turning a formula like this into Python code is just a matter of breaking down its parts and remembering to fill in the implied operators. So, let's do that.

We know that the top term $x-1$ is going to need its own group so the subtraction is performed correctly, which we can write as `(x - 1)`. 

Then, the bottom term $(y+5)(x+3)$ will need its own group as well, plus two nested groups for each term, *and* we need to remember to tell Python to multiply both terms. We can write that as `((y + 5)*(x + 3))`. 

Note that I chose to put spaces around the addition and subtraction, but not around the multiplication. This is purely for aesthetics and to help the terms "group" together visually just like they are in the math formula. It is conventional to put spaces around your arithmetic operators, as it generally looks cleaner and is easier to follow.

Next, we know that the top and bottom terms are a division operation, so we simply combine them with a division operator: `(x - 1) / ((y + 5)*(x + 3))`

Alright, that's the left half. We will ignore the subtraction for now, and focus on multiplication and division--the same way we would in Algebra. The right half is the triple-variable $\frac{xy}{z}$ term.

First, $xy$ is a *grouped* multiplication operation, so we can simply write `(x*y)`. Then, $z$ is just a lone input variable, so we just write that as `z`. Finally, we combine the two pieces just like the first: `(x*y) / z`.

Now, we are ready to assemble the two halves of the formula with the subtraction operator:

    (x - 1) / ((y + 5)*(x + 3)) - (x*y) / z

While the above code should work due to the order of operations requiring that division be performed before subtraction, this may not be so clear to other developers. If we want to be extra-clear about our intentions for how to evaluate this formula, we can use more grouping symbols around the left and right terms:

    ((x - 1) / ((y + 5)*(x + 3))) - ((x*y) / z)

Now our code will be more clear to other developers, who can now see the left and right terms more clearly defined within their respective groups.

Finally, we are ready to implement our new formula into a Python program. We will prompt the user to provide inputs for x, y, and z, and then output the result:

    x = float(input("Enter a value for x: "))
    y = float(input("Enter a value for y: "))
    z = float(input("Enter a value for z: "))

    result = (x - 1) / ((y + 5)*(x + 3)) - (x * y) / z

    print(f"The result is: {result}")

While this may seem like quite a process, remember how tedious it would be to enter all this on a calculator, and then use it to crunch dozens (perhaps even thousands) of combinations of x, y, and z! 

When we learn about loops later this week, we will unleash the full power of programming by crunching thousands of values in complex formulas. We will do in seconds what would have taken us weeks to do with a calculator, or our predecessors *years* to do by hand!

While most of what you will do in Web3 development won't involve math, you will occasionally encounter the need to convert math formulas into code as part of your program's operation, especially if you focus on Solidity smart contracts. Understanding how to convert mathematics into code is a key skill to master for designing tokens with unique tokenomics and monetary policies.
