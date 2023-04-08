`NOTE: It should be noted that a lot of these are just ideas for exercises. Some may be too difficult or irrelevant for this course (such as un-nesting conditionals), so we will assess whether to include them later.`


# Day 2 Unguided Exercises
---------
# Part 1: All Arithmetic Operators
------------
These exercises are **optional**. If you can look at a problem and *immediately* know how to code it, then skip over it and look for a bigger challenge! However, if a problem looks *too* challenging, then skip it and come back to it when you've run out of smaller challenges.

I suggest doing one of each type of problem, and then doing more if you have time to spend on them.

Feel free to visit during office hours to get some tips on how to solve these problems.

## Arithmetic Operators
For this section's exercises, begin by creating a main menu that accepts an integer as an input, and will use that input to determine which branch to take. You may do all or some of these exercises, but use the user's input to determine which one is loaded. That means you will need to choose your own numbers

Once a formula has been selected, prompt the user for inputs for each of the variables in the formula, code the formula, and then print its result to the terminal.

#### Basic Arithmetic
These are very basic exercises for yesterday's arithmetic and grouping operators.
1. $a = b + c$
2. $d = e - f$
3. $g = h \times i$
1. $i = j \times k + l$
1. $j = \frac{k}{l}$
1. $a = (b + c) \times d$
1. $e = f \times (g - h)$
1. $a = (b + c) \times \frac{d}{e}$

#### Complex Fractions
These will challenge your grouping operator skills.
1. $r = s \times \frac{t}{u} - v$
1. $m = n \times \frac{o + p}{q}$
3. $w = x \times \frac{y + z}{2}$
1. $w = x + \frac{y \times z}{a - b}$
1. $k = \frac{l + m}{n} - \frac{o}{p}$
1. $q = \frac{r \times (s - t)}{u + v}$
1. $d = \frac{e \times f}{g - h}$

#### Exponents and Roots
These are all exponents, which use the double-asterisk `**` operator. Remember that in Python you can use fractional exponents for roots.
1. $s = t^2$
1. $i = j \times (k^2 - l)$
1. $a = (b + c)^3$
1. $m = \frac{n^2 + o^2}{p + q}$
3. $u = v^{\frac{1}{3}}$
1. $a = \sqrt{b}$
1. $c = \sqrt[3]{d}$
1. $e = \sqrt{f^2 + g^2}$
1. $h = \sqrt[4]{i \times j}$
1. $k = \frac{\sqrt{m} + \sqrt{n}}{p}$

#### Floor/Integer Division
Floor division in math uses the weird incomplete square bracket symbol wrapped around a division operation, and it removes the decimal part of whatever's on the inside. While the mathematic floor operator is **not** directly correlated with integer division, we will use it for that purpose today. 

The floor operator should tell you that the division occurring inside is an *integer* division, not a regular float division.

1. $m = \lfloor \frac{n}{o} \rfloor$
1. $e = f \times \lfloor \frac{g}{h} \rfloor$
1. $i = j - k \times \lfloor \frac{l}{m} \rfloor$
3. $\text{gcd}(a, b) = a - k \times \lfloor \frac{a}{b} \rfloor$
    * For this, use `gcd_a_b` to store the result
1. $a = \lfloor \frac{b + c}{d} \rfloor$
1. $n = \lfloor \frac{o + p}{q} \rfloor \times r$
1. $s = t^{\lfloor \frac{u}{v} \rfloor}$

**Challenge**: Rewrite these problems using float division and type conversion to perform the floor operation, instead of using the integer division operator.

#### Modulus
The $mod$ operation is performed by the `%` operator.
1. $p = q \mod r$
1. $w = x \times (y \mod z)$
1. $a = (b + c) \mod d$
1. $e = f \times (g \mod h) + i$
1. $j = k - l \times (m \mod n)$
1. $o = p + (q - r) \mod s$

#### Challenge Problems: All Operators
These brain-teasers will master your Python arithmetic skills. You are almost certainly never going to need to convert these kinds of equations into code in the real-world, but they are great exercise nonetheless.

1. $a = \lfloor \frac{b^2 + \sqrt[3]{c}}{d \times (e \mod f)} \rfloor$
1. $g = \frac{h \times \lfloor \frac{i}{j} \rfloor}{k^3 - l \mod m}$
1. $n = \frac{o \times p}{q} + r^2 \times \lfloor \frac{s + \sqrt{t}}{u} \rfloor$
1. $v = \sqrt[4]{w \times (x \mod y)} + \frac{z}{a^2}$
1. $b = \lfloor \frac{c^2 \times d}{e - \sqrt{f}} \rfloor + \frac{g \mod h}{i}$

-------------------
# Part 2: Conditional Control Structures
----------------
### Integer/Float Comparisons
For each exercise, determine if the Boolean expression is True or False for the following values:

    x = 10
    y = 0
    z = -5

Check your answers by printing each expression in PyCharm.

1. `x > 0`
1. `x == y`
1. `z < 100`
1. `x < y`
1. `y == z`
1. `y > z`
1. `x != z`
1. `x == 10`
1. `y >= 0`
1. `5 < x < 15`
1. `-10 <= z <= 0`
1. `0 < y <= 5`
1. `-15 < z < -3`
1. `15 > x >= 5`
1. `10 < x < 20`
1. `5 < y < 10`
1. `10 > y > -5`
1. `-5 <= z < 5`
1. `0 < x < 20`



### String Comparisons
For the following string comparison exercises, determine if the comparison will produce a True or False value. No special character comparisons will be included, for simplicity. However, we will be using some Boolean string methods, which do exactly what their name implies. 

Check your answers by printing each expression in PyCharm

    password = "BadPassword1234"
    empty_string = ""
    upper_a = "A"

1. `password == "Bad_Password1234"`
1. `len(password) > len(empty_string)`
1. `password.lower() == "badpassword1234"`
1. `upper_a.isupper()`
1. `password.startswith("Bad")`
1. `password.endswith("123")`

For these exercises, use the ASCII table to help you predict the Boolean value of each expression. Again, use PyCharm to check your answers:

1. `"apple" < "banana"`
1. `"Python" > "Java"`
1. `"cat" < "dog"`
1. `"Hello" < "hello"`
1. `"Zebra" > "aardvark"`





## Boolean Logic and Logical Operators
The following exercises will help solidify your intuition around Boolean logic and the rules of logic. Some exercises are for rewriting the same logic in a simpler form, some are for applying short-circuiting, and some exercise using guard clauses to remove comparisons.

Again, only pick the exercises you find challenging.

### Logical Expressions
Given the following values, determine if the Boolean expressions are `True` or `False`. Remember to check your answer by printing each expression in PyCharm.

    p = True
    q = False
    x = 10
    y = 0
    z = -3.5

1. `(x > y) and p`
1. `(x == y) or q`
1. `not ((x < y) or (z > 0))`
1. `(z < 0) and (y <= x)`
1. `(x > 15) or (z < y)`
1. `(x != y) and not q`
1. `not p and (x > y)`
1. `(z < 0) or (y >= x)`
1. `(x < z) and (y == 0)`
1. `not ((x > z) and (z < y))`

### Logical Precedence
Given the following values, use the logical order of precedence to determine if each expression is `True` or `False`. Check your answer by printing each expression in PyCharm.

    p = True
    q = False
    x = 10
    y = 0
    z = -3.5


1. `not x > y and p`
1. `x != y or not q and z < 0`
1. `not (x == y) and p or q`
1. `x > y and not p or z < y`
1. `not (p and q) or x < y and z < 0`

### If / Elif / Else Control Structures
These exercises will provide you with a description of a small program, which you must figure out how to code using comparisons and `if`/ `elif` / `else` structures.

1. Check if a given number `a` is positive, negative, or zero.
1. Compare two integers `x` and `y`. Print `"Equal"` if they are equal, `"Greater"` if `x` is greater than `y`, or `"Smaller"` if `x` is smaller than `y`.
1. Check if a given number `n` is even or odd.
1. Given an integer `age`, check if the person is eligible to vote. If they are 18 or older, print `"Eligible to vote"`, otherwise print `"Not eligible to vote"`.
1. Calculate the absolute value of a number `x` and store it in a variable `abs_val`.
    * **Hint:** Declare `abs_val` outside the conditional block first, then assign its value inside the block.
1. **Challenge:** Compare two floating-point numbers `a` and `b` with a tolerance `tol` of `0.01`. Print `"Approximately equal"` if the absolute difference between them is less than or equal to `tol`, otherwise print `"Not equal"`.
    * **Hint:** Use `abs(x)` to return the absolute value of some number `x`, or use the conditional blocks from exercise 

1. Check if a given string `s` is empty or not.
1. Compare two strings `str1` and `str2`. Print `"Equal"` if they are equal, otherwise print `"Not equal"`.
1. Compare two strings `str1` and `str2` alphabetically. Print `"Comes first"` if `str1` comes before `str2` in alphabetical order, otherwise print `"Comes later"`.
1. Given a string `word`, check if the first character of `word` is an uppercase letter.
    * **Hint:** Strings have a *method* called `isupper()`
    * https://www.w3schools.com/python/ref_string_isupper.asp
1. Check if a given string `password` has a minimum length of 8 characters.


### Logical Short-Circuiting: Number Comparisons
In these exercises, you are given a logical expression that will throw an error under certain conditions. Your task is to figure out what these conditions are, and use logical short-circuiting to eliminate the error.

**Hint:** You can systematically test each expression in PyCharm by creating variables `x`, `y`, and `z` and testing what happens when each one is given `None` and `0` values.

1. `(10 / y > 5) or (y == 0 and x > 5)`
1. `(x != None and y < 100) or (x == None and x > y)`
1. `(x > 0 and y == 1) or (x % y == 0)`
1. `(x == 0 and y > 10) or (z / x > 3)`
1. `(x == 0 and y > 0) or (z > 0 and 10 / (x * y) > 1)`

### Conditional Short-Circuiting (Medium)
In each of these exercises, you are presented with a conditional structure knowing that one of the blocks inside it is unreachable due to conditional short-circuiting. To solve these problems, you must identify which block is unreachable, and reorganize the structure so that the unreachable block can be reached.

Remember:
* The `and` operator short-circuits and skips to the next conditional block when the first operand is `False`
* The `or` operator short-circuits and executes its own conditional block when the first operand is `True`

##### Problem 1:
    if A > 0 and B < 10:
        print("First conditional")
    elif A > 0 or 15 > B > 5:
        print("Second conditional")
    elif A == 0 and 5 < B < 10:
        print("Third conditional")
    else:
        print("Fourth conditional")

##### Problem 2:
    if P <= 10 or R >= 20:
        print("First conditional")
    elif P > 10 and R < 20:
        print("Second conditional")
    elif P <= 10 and R < 20:
        print("Third conditional")
    else:
        print("Fourth conditional")

##### Problem 3:
    if X >= 0 and Y < 5:
        print("First conditional")
    elif X >= 0 or Y >= 3:
        print("Second conditional")
    elif X < 0 and Y < 5:
        print("Third conditional")
    else:
        print("Fourth conditional")

##### Problem 4:
    if E < 5 and F >= 10:
        print("First conditional")
    elif E >= 5 or F > 8:
        print("Second conditional")
    elif E == 5 and F == 10:
        print("Third conditional")
    else:
        print("Fourth conditional")

##### Problem 5:
    if I == 0 and J < 10:
        print("First conditional")
    elif I != 0 or J >= 5:
        print("Second conditional")
    elif I == 0 and J >= 10:
        print("Third conditional")
    else:
        print("Fourth conditional")


### Un-Nesting Conditionals (Hard)
These exercises involve un-nesting some horrendously nested conditional blocks. You will first need to un-nest the blocks, and then use the "guard clause" technique to remove redundant comparisons. Most structures will still have some nesting left over in their simplest form.


**Problem 1:**

    if A > 10:
        if B < 20:
            print("A is greater than 10 and B is less than 20")
        else:
            if C > 30:
                print("A is greater than 10, B is greater than or equal to 20, and C is greater than 30")
            else:
                print("A is greater than 10, B is greater than or equal to 20, and C is less than or equal to 30")
    else:
        print("A is less than or equal to 10")

**Problem 2:**

    if X > 5:
        if Y > 10:
            if Z > 15:
                print("X > 5, Y > 10, Z > 15")
            else:
                print("X > 5, Y > 10, Z <= 15")
        else:
            print("X > 5, Y <= 10")
    else:
        print("X <= 5")


**Problem 3:**

    if P > 0:
        if Q > 0:
            print("P > 0 and Q > 0")
        elif R > 0:
            if S > 0:
                print("P > 0, Q <= 0, R > 0, S > 0")
            else:
                print("P > 0, Q <= 0, R > 0, S <= 0")
        else:
            print("P > 0, Q <= 0, R <= 0")
    else:
        print("P <= 0")


**Problem 4:**

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


**Problem 5:**

    if X > 0:
        if Y > 0:
            if Z > 0:
                if W > 0:
                    print("X > 0, Y > 0, Z > 0, W > 0")
                else:
                    print("X > 0, Y > 0, Z > 0, W <= 0")
            else:
                print("X > 0, Y > 0, Z <= 0")
        else:
            print("X > 0, Y <= 0")
    else:
        print("X <= 0")


## Coding Piecewise Equations (Medium)
Translate the following piecewise functions into Python code. Consider that each of the "cases" on the right belongs to an `if` / `elif` / `else` statement.

### 1.
$f(x) = \begin{cases} 
      x^2 & x \leq 0 \\
      x^3 & x > 0 
   \end{cases}$

### 2.
$g(x) = \begin{cases} 
      2x + 1 & x < -1 \\
      x^2 & -1 \leq x \leq 1 \\
      2x - 1 & x > 1 
   \end{cases}$

### 3.
$h(x) = \begin{cases} 
      -3x + 2 & x \leq 1 \\
      4x - 5 & 1 < x \leq 2 \\
      x^2 + 3 & x > 2 
   \end{cases}$

### 4.
$i(x) = \begin{cases} 
      x + 1 & x \leq -2 \\
      -x^2 & -2 < x \leq 2 \\
      x - 1 & x > 2 
   \end{cases}$
### 5.
$j(x) = \begin{cases} 
      3x - 2 & x \leq 0 \\
      x^3 + 1 & 0 < x \leq 1 \\
      -x + 4 & x > 1 
   \end{cases}$
### 6.
$k(x) = \begin{cases} 
      x^2 - 2x & x \leq 1 \\
      2x^3 - x & 1 < x \leq 2 \\
      -3x + 7 & x > 2 
   \end{cases}$
### 7.   
$l(x) = \begin{cases} 
      x^3 + 2x & x \leq -1 \\
      x^2 - 3x & -1 < x \leq 1 \\
      x + 4 & x > 1 
   \end{cases}$
### 8.
$m(x) = \begin{cases} 
      -2x + 3 & x \leq -1 \\
      x^3 - 1 & -1 < x \leq 1 \\
      2x^2 + 5 & x > 1 
   \end{cases}$
### 9.
$n(x) = \begin{cases} 
      x^2 - 4x & x \leq 0 \\
      3x + 1 & 0 < x \leq 2 \\
      -x^3 + 2x & x > 2 
   \end{cases}$
### 10.
$o(x) = \begin{cases} 
      -x^3 + 3x & x \leq -1 \\
      2x^2 - x & -1 < x \leq 1 \\
      x^2 + 4 & x > 1 
   \end{cases}$


