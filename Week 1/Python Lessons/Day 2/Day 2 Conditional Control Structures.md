# Day 2: Conditional Control Structures

## Introduction
Welcome to the lesson on branching control structures in Python! 

In this lesson, we will cover: 
* The Boolean data type
* Comparison operators `<`, `>`, `<=,` `>=,` `==,` and `!=`
* `if` / `elif` / `else` statements
* Logical operators `and`, `or`, and `not`
* Short-circuiting
* Nested conditional structures

This will allow you to make your programs more dynamic and versatile, as they will be able to adapt and respond to different inputs and scenarios.

This is a fairly long lesson, so let's try to move through it fast and get to the fun part of applying it in our lab and project!

---

## Boolean Data Type
In programming, a Boolean data type is a variable that has one of two possible values: True or False.

Boolean values allow you to control the flow of your code by using conditional statements. For example, if a certain condition is `True`, then you might want to execute one block of code, and if it is `False`, then you might want to execute another.

#### Boolean Naming Convention
It is common for Booleans to be given a name with a preposition in front, like is_logged_in, or is_owner. Booleans can also be given names that will "flow" better in combination with control structures, such as x_is_even or user_logged_in.

When we discuss Boolean values and Boolean logic in the abstract, we often use the letters `p`, `q`, and `r`. This is similar to the `x`, `y`, and `z` convention in Algebra for numbers.

---

## Comparison Operators
Let's start with comparison operators. We have all seen these operators in mathematics when describing the domain and range of functions, but in programming they are used to compare two values and return a Boolean True or False value.

The basic comparison operators in Python are:

* Greater than `>`
* Less than `<`
* Greater than or equal to `>=`
* Less than or equal to `<=`
* Equal to `==`
* Not equal to `!=`

For example, `3 > 2` is a comparison that returns `True`, while `2 < 1` is a comparison that returns `False`. At the same time, `4 >= 4` returns `True`, while `4 > 4` returns False.

In Python, we can use comparison operators to compare many types of values, including integers, floats, and strings.

### Integer and Float Comparison
The most obvious data types to use comparison operators on are integers and floats. For example:

    x = 5
    y = 10

    print(x < y)  # True, since 5 is less than 10
    print(x > y)  # False, since 5 is not greater than 10
    print(x == y)  # False, since 5 is not equal to 10
    print(x != y)  # True, since 5 is not equal to 10

We can also use surrounding comparisons to check if a variable is between a range of values:

    y = 20
    print(15 <= y <= 25)  # Returns True, y is between 15 and 25 (inclusive)
    print(15 >= y >= 25)  # Returns False, y is outside 15 and 25 (inclusive)
    print(15 < y < 25)  # Returns True, y is between 15 and 25 (exclusive)
    print(15 > y > 25)  # Returns False, y is outside 15 and 25 (exclusive)

Note that this syntax is not supported in all programming languages.

### String Comparison
Strings can use any of the comparison operators as well, but the most common way to compare strings is with the `==` and `!=` operators.

For example:

    name = "Turtle Cat"
    print(name == "John")  # False, because "Turtle Cat" is not "John"
    print(name != "John")  # True, because "Turtle Cat" is not "John"

A less obvious way to compare strings is by the other comparison operators: `>`, `>=`, `<`, and `<=`, but these comparisons are less intuitive.

#### The ASCII Table
String characters are represented by numbers according to the ASCII table, which is how all string data is stored in the computer's memory. 

The ASCII table consists of 127 entries that cover many things computers need to interpret the data they receive and store, including string characters.

There is absolutely no need to memorize this table at all, as it is usually just a quick Google search away.

#### ASCII Comparison
According to the ASCII table, "A" has a lower ASCII value than "Z". Therefore, we can compare them like so:

    upper_a = "A"  # ASCII: "A" = 65
    upper_z = "Z"  # ASCII: "Z" = 90
    print(upper_a > upper_z)  # False, "A" comes before "Z"
    print(upper_z > upper_a)  # True, "Z" comes after "A"

At the same time, numbers have a lower ASCII value than letters do, but numbers do not occupy positions 0 - 9 in the ASCII table--rather, they occupy positions 48 - 57.

Also, uppercase letters have a lower ASCII value than lowercase letters, and special symbols have varying values relative to both letters and numbers. 

Therefore, if you need to perform any kind of greater/lesser than comparisons on strings, then it is advised that you Google search the ASCII table first and find out which operators you will need to use.


---

## If / Elif / Else Statements
In programming, we often want our code to make decisions based on certain conditions. This is where conditional control structures come in - they allow us to execute different blocks of code based on whether or not a particular condition is `True`.

The three conditional statements in Python are `if`, `elif`, and `else`.

However, there are three important things you need to know right away about conditional block syntax:
1. All blocks begin with a colon `:` character after the conditional
2. All code inside each conditional block is indented
3. All code outside each conditional block is *not* indented
4. Blocks with one line of code can be written on the same line after the colon `:`

#### If Statements
The `if` statement is used in Python to execute code if a condition is true. Here's the basic syntax:

    p = True

    if p:
        # code to execute if p is True

If `p` is `True`, then the code block indented under the `if` statement will be executed. If the condition is `False`, then the code block will be skipped.

Note that these two statements are exactly the same:

    if p == True:
        # Some code
    if p:
        # Some code

Let's see an example of how an `if` block is used:

    user_input = input("Please enter the password: ")

    if user_input == "TurtleCat2023":
        print("Welcome to the boot camp!")

We can also make this code easier to read by storing our comparison in a variable:

    user_input = input("Please enter the password: ")
    password_is_correct = (user_input == "TurtleCat2023")

    if password_is_correct:
        print("Welcome to the boot camp!")

Notice that storing our comparison in a variable with a Boolean name allows the conditional block to read like an English sentence.

We can also write an `if` block's code on the same line if there is only one line of code inside it:

    password_correct = True
    if password_correct: login_user()


#### Chaining Ifs Together
We can chain together multiple `if` conditions, and whichever ones are `True` will be run independently of the others. 

For example:

    x = 200

    if x > 0:
        print("x is greater than 0")

    if x > 10:
        print("x is greater than 10")

    if x > 100:
        print("x is greater than 100")


### Elif Statements
The `elif` statement is used when you want to check for multiple conditions, but only execute the first one that evaluates to `True`. Here's the syntax:

    if p:
        # code to execute if p is True
    elif q:
        # code to execute if p is False but q is True

You can only use an `elif` statement after an `if` statement, as it relies on the `if` statement failing.

#### Chaining Elifs Together
You can chain multiple `elif` blocks together in the same conditional structure. For example:

    if p_is_true:
        # code to execute if p is true
    elif q_is_true:
        # code to execute if q is true
    elif r_is_true:
        # code to execute if r is true
    elif s_is_true:
        # code to execute if s is true

Remember that only the first `True` block will be executed, and the rest will be skipped. This will be very important later.

### Else Statements
The `else` statement is used when you want to execute a block of code if none of the previous conditions in a conditional structure were `True`. Here's the syntax:

    if p:
        # code to execute if p is true
    elif q:
        # code to execute if q is true
    else:
        # code to execute if neither p nor q is true

One thing to keep in mind is that `else` does not perform any comparisons, so it is much more efficient to run. `else` implies the logical *opposite* of all the conditions that preceded it.

For example:

    if p:
        # Runs if p == True
    else:
        # Runs if p == False

Also:

    if p < 10:
        # p is less than 10
    elif p > 20:
        # p is greater than 20
    else:
        # Implies that p is between 10 and 20

---

## Logical Operators
In addition to comparison operators, Python also includes logical operators to allow us to evaluate more complex conditions. Logical operators only accept Boolean values as their operands, and are used to combine multiple Boolean expressions together.

### AND / OR / NOT
The three logical operators in Python (and programming in general) are `and`, `or`, and `not`.

#### AND Operator
The `and` operator evaluates to `True` only if both of its operands are `True`. For example, `x > 5 and y < 10` will be `True` only if `x` is between `5` and `10`.

    x = 20
    y = 1
    print(x > 5 and y < 10)  # True: x > 5 and y < 10 are both True
    print(x < 5 and y > 0)  # False: x < 5 is False

#### OR Operator
The `or` operator, on the other hand, evaluates to `True` if *either or both* of its conditions are `True`. For example, `x < 5 or y > 10` will be `True` for any value of `x` less than `5` or any value of `y` greater than `10`.

    x = 20
    y = 1
    print(x > 5 or y > 10)  # True, because x > 5 is True

#### NOT
Finally, the `not` operator is used to negate a Boolean value. For instance, `not (x > 5)` will be `True` if `x` is *not* greater than `5`. However, this is the exact same thing as saying `x <= 5`, and it is often easier to rewrite a `not` operator as its equivalent expression.

On that subject, all comparison operators have an opposite equivalent with `not`:

* `x != y` is the same as `not x == y` 
* `x <= y` is the same as `not x > y` 
* `x >= y` is the same as `not x < y` 
* `x < y` is the same as `not x >= y` 
* `x > y` is the same as `not x <= y`


### Logical Precedence
Just like with arithmetic operators, there is a specific order of operations for logical operators. `not` is evaluated first, followed by `and`, and then `or`. Parentheses can be used to explicitly control the order of evaluation.

Let's take a look at an example to demonstrate logical precedence:

    p = True
    q = False
    r = False

    result = p or not q and r
    print(result)

Because `and` has higher precedence than `or`, the `and` operation will be evaluated first, and then `or` will be evaluated last. This means that the expression is equivalent to:

    result = p or ((not q) and r)  # True, because p == True

It is important to remember that the order in which these operations are evaluated matters a great deal, just like it does in Algebra. For example:

    result = (p or (not q)) and r  # False, because r == False

---

## Short-Circuiting
"Short-circuiting" refers to the logical behavior where the second operand of a logical operator is not evaluated if the first operand determines the output.

So, if the first operand of an `and` operator is `False`, then the entire expression will be `False`.

Likewise, if the first operand of an `or` operator is `True`, then the entire expression will be `True`.

If either of these conditions occur, then the second operand will be skipped, which results in the following behavior:

* `and` will short-circuit if the first operand is `False`, and will not execute its conditional block
* `or` will short-circuit if the first operand is `True`, and will execute its conditional block

We can prove this very easily by attempting to compare to a `None` data type, which will always throw an error and crash our program. In the following example, run it first, then erase the blocks that say `"This will throw an error"` and run it again.

    x = None
    y = 5

    if x == 10 or y == 5:
        print("This will throw an error")
    if y == 5 or x == 10:
        print("This block short-circuited")

    if y == 5 and x == 10:
        print("This will throw an error")
    if y != 5 and x == 10:
        print("This block short-circuited)

This is important for avoiding many errors, such as divide-by-zero errors, and it can be leveraged to improve your program's efficiency.

### Short-Circuiting Bugs
Short-circuiting can sometimes introduce bugs if we are not careful.

Let's look at an example of a poorly designed conditional block where short-circuiting was *not* accounted for:

    x = 5
    y = 10

    if x > 3 and y < 5:
        print("First conditional")
    elif x > 0 or y < 100:
        print("Second conditional")
    elif x > 4 and y < 20:
        print("Third conditional")
    else:
        print("Fourth conditional")

    print("This occurs after the conditionals")

If you look very closely and analyze this structure, you'll find that the third conditional will **never** run under any conditions! It is a block of *unreachable code*, as the conditions required to reach it will always execute the block above it every time.

To fix this, we need to swap places with the second and third conditionals:

    x = 5
    y = 10

    if x > 3 and y < 5:
        print("First conditional")
    elif x > 4 and y < 20:
        print("Previously the third conditional")
    elif x > 0 or y < 100:
        print("Previously the second conditional")
    else:
        print("Fourth conditional")

    print("This occurs after the conditionals")

While this may be a rare occurrence, it *can* happen if you aren't careful.

---

## Nesting Conditionals (Optional)
You can also "nest" your conditional code blocks inside each other to reduce the number of comparisons that need to be made, but at the expense of your code's readability.

Let's take a look at two things we can learn about nesting.

### Nested 'if's are the same as 'and' operators
The following code performs the same comparison multiple times, using an `and` operator to connect each conditional's operands:

    x = 10
    y = 20

    if x > 5 and y < 15:
        print("x is greater than 5 and y is less than 15")
    elif x > 5 and y > 25:
        print("x is greater than 5 and y is greater than 25")
    elif x > 5 and 15 <= y <= 25:
        print("x is greater than 5 and y is between 15 and 25")
    else:
        print("x is less than or equal to 5")

While this code is fairly clean due to everything happening on one line, the worst case scenario involves the program making seven numerical comparisons and three logical comparisons to reach the `else` block. If this is running inside a loop, then that could severely slow down the program.

However, each line performs the same comparison of `x > 5`. We can use that fact to nest the `elif` blocks and only test for `x > 5` once:

    x = 10
    y = 20

    if x > 5:
        if y < 15:
            print("x is greater than 5 and y is less than 15")
        elif y > 25:
            print("x is greater than 5 and y is greater than 25")
        else:
            print("x is greater than 5 and y is between 15 and 25")
    else:
        print("x is less than or equal to 5")

Notice that we "nested" the `elif` blocks inside a single `if` block. Also, notice that we didn't need to use the `15 <= y <= 25` expression, as it is implied by the two expressions above it failing.

#### Guard Clause Technique (Optional)
Nested conditionals can make your code much more efficient, but they also make it harder to read. There is another technique we can learn that can be used to avoid nesting in some situations, or to even un-nest some horribly nested code.

A "guard clause" is a programming technique where a special condition is checked for in the beginning that will bypass the rest of the code if it's `True`. Sometimes, we can apply this technique to reduce the complexity of our conditional structures, and to un-nest structures that have several nested layers.

Let's revisit this piece of code:

    x = 10
    y = 20

    if x > 5 and y < 15:
        print("x is greater than 5 and y is less than 15")
    elif x > 5 and y > 25:
        print("x is greater than 5 and y is greater than 25")
    elif x > 5 and 15 <= y <= 25:
        print("x is greater than 5 and y is between 15 and 25")
    else:
        print("x is less than or equal to 5")

We can get rid of the redundant `x > 5` term by checking for its *opposite* condition `x <= 5` first. The solution becomes this:

    x = 10
    y = 20

    if x <= 5:  # This is our "guard clause"
        print("x is less than or equal to 5")
    elif y < 15:
        print("x is greater than 5 and y is less than 15")
    elif y > 25:
        print("x is greater than 5 and y is greater than 25")
    else:
        print("x is greater than 5 and y is between 15 and 25")

---

## Conclusion
Alright, that was quite a lot to take in! Let's review the important points from today's lesson.

##### Boolean data type

Boolean variables and expressions have only `True` and `False` values, and are used extensively for decision-making code. They are frequently represented by the letters `p`, `q`, and `r` when discussing Boolean logic.

##### Comparison Operators
Comparison operators produce Boolean values:
  * Greater than `>` returns `True` if the left operand is greater than the right operand
  * Less than `<` returns `True` if the left operand is less than the right operand
  * Greater than or equal to `>=` returns `True` if the left operand is greater than or the same as the right operand
  * Less than or equal to `<=` returns `True` if the left operand is less than or the same as the right operand
  * Equal to `==` returns `True` if both operands are the same value
  * Not equal to `!=` returns `True` if the operands are different

##### Comparing Numbers vs Strings
* Numbers are compared by value, just like in mathematics
* Strings are compared according to the ASCII table, with numbers less than letters, "A" less than "Z", and uppercase letters less than lowercase letters--and special characters falling in various places.

##### Conditional Control Structures
Conditional control structures allow code to make decisions based on Boolean expressions:
  * `if` executes its code when its conditional expression is `True`
    * You can chain together multiple `if` blocks, and any/all of them can execute independently
  * `elif` executes when the conditionals before it were `False` and its expression is `True`
  * `else` always executes if all conditionals in the same structure before it were `False`, and acts as a fallback block
  * Only the first block of an `if`/`elif`/`else` structure that is `True` will execute while the rest will be ignored

##### Conditional Nesting
You can "nest" your conditional blocks inside of other blocks, but it is best to avoid this if possible, and to use techniques like "guard clauses" to avoid or even undo nesting.

##### Logical Operators
Logical operators combine and return Booleans:
  * `and` returns `True` if both operands are `True`
  * `or` returns `True` if one or both operands are `True`
  * `not` negates the value of its operand, including other `not` operators

The logical order of precedence is `not`, `and`, and then `or`
  * Example: `p or not q and r` is the same as `p or ((not q) and r)`

##### Logical Short-Circuiting
Short-circuiting occurs when the first operand determines the outcome of a logical expression, which causes the code to skip over other operands or code blocks:
  * `and` short-circuits if the first operand is `False`, and will not execute
  * `or` short-circuits if the first operand is `True`, and will execute

Now that you understand the fundamentals of conditional control structures and Boolean variables, you can use them to create dynamic and complex code.

Now, let's apply these concepts to some real coding so you can see for yourself just how powerful conditional control structures are!

