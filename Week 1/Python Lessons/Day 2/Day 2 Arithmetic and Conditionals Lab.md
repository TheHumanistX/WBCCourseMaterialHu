`NOTE: I'm still up in the air about the labs. It is tempting to make them as lengthy as this document, but there's just not enough time to do so, and there may be very little point in it as far as the overall boot camp goes. A 15 minute lab session that simply demonstrates the core concept of each lesson should be sufficient.`

# Day 2: Arithmetic and Control Structures Lab
## Arithmetic Lab Exercises:
Convert the following formulas into Python code:
<br></br>

**Pythagorean Theorem:** $c^2 = a^2 + b^2$
<br></br>

**Distance Formula:** $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$
<br></br>

**Some Crazy Nonexistent Formula** $a = \lfloor \frac{b^2 + \sqrt[3]{c}}{d \times (e \mod f)} \rfloor$

<br></br>

---
## Arithmetic Lab Solutions:
### Pythagorean Theorem<br></br>

Remember that square roots are just fractional exponents:

    print("Pythagorean Theorem: c^2 = a^2 + b^2")
    a = float(input("Enter a value for a: "))
    b = float(input("Enter a value for b: "))

    c = (a**2 + b**2)**0.5
    print(f"For sides a = {a} and b = {b}, the length of the hypotenuse c is {c}")

<br></br>
### Distance Formula
<br></br>

This one appears more challenging than it actually is, but it's not that hard. We can declare two variables for x and y to simplify the final expression:

    print("Distance Formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2)")
    x1 = float(input("Enter a value for x1: "))
    x2 = float(input("Enter a value for x2: "))
    y1 = float(input("Enter a value for y1: "))
    y2 = float(input("Enter a value for y2: "))

    x = (x2 - x1)**2
    y = (y2 - y1)**2

    distance = (x + y)**0.5

    print(f"For points ({x1}, {y1}) and ({x2}, {y2}), the distance between them is {distance}")

<br></br>

### Some Crazy Formula
<br></br>

We can break this one into multiple smaller pieces to make it easier to work with. On top of the user inputs, let's create two additional variables to represent the numerator and denominator.

    b = float(input("Enter a value for b: "))
    c = float(input("Enter a value for c: "))
    d = float(input("Enter a value for d: "))
    e = float(input("Enter a value for e: "))
    f = float(input("Enter a value for f: "))

    numerator = (b ** 2) + (c ** (1/3))
    denominator = d * (e % f)

    a = numerator // denominator

Yep, that's it. Easy, right?

---
<br></br>
<br></br>

# Control Structures Lab

## Main Menu Exercise:
Create a main menu that prompts the user to enter a number, then selects one of the three formulas we just created, prompts the user for the values needed by the formula selected, and then calculates the result.

The user should see the following when the program runs:

    Welcome to the formula selector program! Please enter the number of the formula you wish to use:
    1. Pythagorean Theorem
    2. Distance Formula
    3. Some Crazy Formula
    ### user input goes here ###

If the user enters number less than 1, greater than 3, or doesn't provide any input at all, then the program should say,

    Invalid choice, closing program...

If the user enters a valid number, then the program should prompt the user to enter values for each variable. For example:

    Enter a value for x: 

---

<br></br>

## Main Menu Solution

We will start by greeting the user and creating their menu selections:

    print("Welcome to the formula selector program! Please enter the number of the formula you wish to use:")
    print("1. Pythagorean Theorem")
    print("2. Distance Formula")
    print("3. Some Crazy Formula")
    selection = int(input())
    
Now we need to check the input to see that they entered a number in the correct selection range, and close the program if they chose a number less than `1` or greater than `5`.

    if not selection or selection > 3 or selection < 1: 
        print("Invalid choice, closing program...")

The rest of our logic can go inside `elif` blocks:

    elif selection == 1:
        # Pythagorean Theorem Here
    elif selection == 2:
        # Distance Formula Here
    elif selection == 3:
        # Quadratic Formula Here

Now, it's a simple matter of copy-pasting the code we just created into each associated `elif` block:

    print("Welcome to the formula selector program! Please enter the number of the formula you wish to use:")
    print("1. Pythagorean Theorem")
    print("2. Distance Formula")
    print("3. Some Crazy Formula")
    selection = int(input())

    if 3 < selection or selection < 1: print("Invalid choice, closing program...")
        
    elif selection == 1:

        print("Pythagorean Theorem: c^2 = a^2 + b^2")
        a = float(input("Enter a value for a: "))
        b = float(input("Enter a value for b: "))

        c = (a**2 + b**2)**0.5
        print(f"For sides a = {a} and b = {b}, the length of the hypotenuse c is {c}")
        
    elif selection == 2:

        print("Distance Formula: d = sqrt((x2 - x1)^2 + (y2 - y1)^2)")
        x1 = float(input("Enter a value for x1: "))
        x2 = float(input("Enter a value for x2: "))
        y1 = float(input("Enter a value for y1: "))
        y2 = float(input("Enter a value for y2: "))

        distance = ((x2 - x1)**2 + (y2 - y1)**2)**0.5
        print(f"For points ({x1}, {y1}) and ({x2}, {y2}), the distance between them is {distance}")

    elif selection == 3:
        b = float(input("Enter a value for b: "))
        c = float(input("Enter a value for c: "))
        d = float(input("Enter a value for d: "))
        e = float(input("Enter a value for e: "))
        f = float(input("Enter a value for f: "))

        numerator = (b ** 2) + (c ** (1/3))
        denominator = d * (e % f)

        a = numerator // denominator


At this point, all we need to do is test and debug each menu choice.


## Solving If / Elif / Else Structures
Let's work on some complex `if`/`elif`/`else` problems.

### Exercise 1: Driver's License
Write a program that prompts the user for their age, whether they have a valid driver's license, and their vision status (either "corrected" or "uncorrected"). 
* If they are 16 or older, have a valid driver's license, and have corrected vision, the program should print "You are eligible to drive". 
* If they are under 16, it should print "You are not old enough to drive". 
* If they are 16 or older but do not meet any of the eligibility criteria, it should print "You are not eligible to drive".

In this program, we can identify three conditional blocks, all of which depend upon user input. So, let's start with the user input.

To write this program, we will use input() function to prompt the user for their age, driver's license status, and vision status. Then, we'll use `if`/`elif`/`else` control structures to check the eligibility criteria and print the appropriate message.

We use input() function to get user input for age, driver's license status, and vision status. We convert the age input to an integer using int() function as the input function returns a string by default.


    # Prompt the user for their age, driver's license status, and vision status
    age = int(input("Please enter your age: "))
    license_status = input("Do you have a valid driver's license? (yes/no): ")
    vision_status = input("Is your vision corrected or uncorrected? (corrected/uncorrected): ")

Next, we use an `if`/`elif`/`else` control structure to check the eligibility criteria.

Note that we should use the `.lower()` function to convert the input string to lowercase, so that the user's input is not case-sensitive when it is entered.

In the first condition, we check if the user is 16 or older, has a valid driver's license, and has corrected vision. If all conditions are met, we print "You are eligible to drive".

    if age >= 16 and license_status.lower() == "yes" and vision_status.lower() == "corrected":
        print("You are eligible to drive")

In the second condition (elif), we check if the user is under 16. If true, we print "You are not old enough to drive".

    elif age < 16:
        print("You are not old enough to drive")

Finally, in the else block, we cover the case where the user is 16 or older but does not meet any of the eligibility criteria. We print "You are not eligible to drive":

    else:
        print("You are not eligible to drive")

The entire conditional structure will look like this:

    # Check eligibility criteria using conditional control structures
    if age >= 16 and license_status.lower() == "yes" and vision_status.lower() == "corrected":
        print("You are eligible to drive")
    elif age < 16:
        print("You are not old enough to drive")
    else:
        print("You are not eligible to drive")

Here's the entire program:

    # Prompt the user for their age, driver's license status, and vision status
    age = int(input("Please enter your age: "))
    license_status = input("Do you have a valid driver's license? (yes/no): ")
    vision_status = input("Is your vision corrected or uncorrected? (corrected/uncorrected): ")

    # Check eligibility criteria using conditional control structures
    if age >= 16 and license_status.lower() == "yes" and vision_status.lower() == "corrected":
        print("You are eligible to drive")
    elif age < 16:
        print("You are not old enough to drive")
    else:
        print("You are not eligible to drive")

Once the program is finished, it is actually quite simple!

## Solving a Short-Circuit Problem
Let's work on an exercise that demonstrates short-circuiting in Python. The initial code provided has a bug related to short-circuiting, and the goal is to locate the bug and fix it using short-circuiting analysis.

#### Problem
A program receives input for two integers `x` and `y`. The program should check if `x` divided by `y` is greater than `2`, and also that `y` is non-zero. If both conditions are true, then the program should print `"The division result is greater than 2"`. Otherwise, it should print `"The division result is not greater than 2 or y is zero"`. 

However, when this code is tested for `y = 0` it throws an error and crashes. Locate and fix the bug, using short-circuiting to solve the problem.

Initial code with bug:

    x = int(input("Enter the value of x: "))
    y = int(input("Enter the value of y: "))

    if x / y > 2 and y != 0:
        print("The division result is greater than 2")
    else:
        print("The division result is not greater than 2 or y is zero")

Take a moment to try to solve this problem for yourself.

----------------

#### Solution and explanation:

The bug in the initial code is that we're checking if `x / y > 2` before ensuring that `y` is non-zero. This can cause a `ZeroDivisionError` if the user enters `y` as zero. To fix this bug, we should check if `y` is non-zero first, and then check if `x / y > 2`.

Here's the corrected code:

    x = int(input("Enter the value of x: "))
    y = int(input("Enter the value of y: "))

    if y != 0 and x / y > 2:
        print("The division result is greater than 2")
    else:
        print("The division result is not greater than 2 or y is zero")

By swapping the conditions in the if statement, we ensure that the division is only performed when `y` is non-zero. If `y` is zero, the second condition `(x / y > 2)` is not evaluated due to short-circuiting, thus avoiding the `ZeroDivisionError`.

---

<br></br>

## Conditional Short-Circuiting
Find out if there are any unreachable blocks of code, and if so then fix the conditional structure.

    if A > 0 and B < 10:
        print("First conditional")
    elif A > 0 or 15 > B > 5:
        print("Second conditional")
    elif A == 0 and 5 < B < 10:
        print("Third conditional")
    else:
        print("Fourth conditional")

<br></br>

## Nesting Exercise
Un-nest the following control structure:

    if A > 10:
        if B > 20:
            if C > 30:
                print("A > 10, B > 20, C > 30")
            else:
                print("A > 10, B > 20, C <= 30")
        elif D > 40:
            if E > 50:
                print("A > 10, B <= 20, D > 40, E > 50")
            else:
                print("A > 10, B <= 20, D > 40, E <= 50")
        else:
            print("A > 10, B <= 20, D <= 40")
    else:
        print("A <= 10")

<br></br>

---

<br></br>

## Nesting Solution

    if A <= 10:
        print("A <= 10")
    elif B <= 20:
        if D <= 40:
            print("A > 10, B <= 20, D <= 40")
        elif E > 50:
            print("A > 10, B <= 20, D > 40, E > 50")
        else:
            print("A > 10, B <= 20, D > 40, E <= 50")
    elif C > 30:
        print("A > 10, B > 20, C > 30")
    else:
        print("A > 10, B > 20, C <= 30")

