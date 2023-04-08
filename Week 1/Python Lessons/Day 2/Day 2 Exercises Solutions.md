# Day 2 Exercise Solutions

## Arithmetic Solutions
#### Basic Arithmetic
1. $a = b + c$
    `a = b + c`
2. $d = e - f$
    `d = e - f`
3. $g = h \times i$
    `g = h * i`
1. $a = (b + c) \times d$
   ` a = (b + c) * d`
1. $e = f \times (g - h)$
   ` e = f * (g - h)`
1. $i = j \times k + l$
   ` i = j * k + l`
1. $a = (b + c) \times \frac{d}{e}$
    `a = (b + c) * (d / e)`
1. $j = \frac{k}{l}$
    `j = k / l`


#### Grouping
1. $r = s \times \frac{t}{u} - v$
   ` r = s * (t / u) - v`

1. $m = n \times \frac{o + p}{q}$
    `m = n * ((o + p) / q)`

3. $w = x \times \frac{y + z}{2}$
    `w = x * ((y + z) / 2)`

1. $w = x + \frac{y \times z}{a - b}$
   ` w = x + (y * z) / (a - b)`

1. $k = \frac{l + m}{n} - \frac{o}{p}$
   ` k = (l + m) / n - (o / p)`

1. $q = \frac{r \times (s - t)}{u + v}$
    `q = (r * (s - t)) / (u + v)`

1. $d = \frac{e \times f}{g - h}$
    `d = (e * f) / (g - h)`


#### Exponents
1. $s = t^2$
    `s = t ** 2`

1. $i = j \times (k^2 - l)$
    `i = j * (k ** 2 - l)`

1. $a = (b + c)^3$
    `a = (b + c) ** 3`

1. $m = \frac{n^2 + o^2}{p + q}$
   ` m = (n ** 2 + o ** 2) / (p + q)`

3. $u = v^{\frac{1}{3}}$
    `u = v ** (1 / 3)`

1. $a = \sqrt{b}$
    `a = b ** 0.5`

1. $c = \sqrt[3]{d}$
    `c = d ** (1 / 3)`

1. $e = \sqrt{f^2 + g^2}$
    `e = (f ** 2 + g ** 2) ** 0.5`

1. $h = \sqrt[4]{i \times j}$
    `h = (i * j) ** 0.25`

1. $k = \frac{\sqrt{m} + \sqrt{n}}{p}$
    `k = ((m ** 0.5) + (n ** 0.5)) / p`

#### Floor/Integer Division
1. $m = \lfloor \frac{n}{o} \rfloor$
   ` m = n // o`
1. $e = f \times \lfloor \frac{g}{h} \rfloor$   
   ` e = f * (g // h)`

1. $i = j - k \times \lfloor \frac{l}{m} \rfloor$
    `i = j - k * (l // m)`

3. $\text{gcd}(a, b) = a - k \times \lfloor \frac{a}{b} \rfloor$
   ` gcd_a_b = a - k * (a // b)`

1. $a = \lfloor \frac{b + c}{d} \rfloor$
   ` a = (b + c) // d`

1. $n = \lfloor \frac{o + p}{q} \rfloor \times r$
    `n = ((o + p) // q) * r`

1. $s = t^{\lfloor \frac{u}{v} \rfloor}$
    `s = t ** (u // v)`


#### Modulus
1. $p = q \mod r$
    `p = q % r`

1. $w = x \times (y \mod z)$
   ` w = x * (y % z)`

1. $a = (b + c) \mod d$
   ` a = (b + c) % d`

1. $e = f \times (g \mod h) + i$
   ` e = f * (g % h) + i`

1. $j = k - l \times (m \mod n)$
    `j = k - l * (m % n)`

1. $o = p + (q - r) \mod s$
    `o = p + (q - r) % s`

### Challenge Problems
1. $a = \lfloor \frac{b^2 + \sqrt[3]{c}}{d \times (e \mod f)} \rfloor$
    `a = ((b ** 2 + c ** (1 / 3)) / (d * (e % f))) // 1`

1. $g = \frac{h \times \lfloor \frac{i}{j} \rfloor}{k^3 - l \mod m}$
    `g = (h * (i // j)) / (k ** 3 - l % m)`

1. $n = \frac{o \times p}{q} + r^2 \times \lfloor \frac{s + \sqrt{t}}{u} 
\rfloor$
    `n = (o * p) / q + r ** 2 * ((s + t ** 0.5) // u)`

1. $v = \sqrt[4]{w \times (x \mod y)} + \frac{z}{a^2}$
    `v = ((w * (x % y)) ** 0.25) + (z / (a ** 2))`

1. $b = \lfloor \frac{c^2 \times d}{e - \sqrt{f}} \rfloor + \frac{g \mod h}{i}$
    `b = ((c ** 2 * d) / (e - f ** 0.5)) // 1 + (g % h) / i`


## Conditional Blocks and Comparison Operators: Solutions
While these are solutions to the exercises, they are just one set of solutions. Most problems in programming have many solutions, some better than others. So, if your code **works**, then it doesn't matter if it looks like these solutions. 

These solutions are simply one way that you *could have* solved the problem!

### Integer/Float Comparisons
1. Check if a given number `a` is positive, negative, or zero.

```
if a > 0:
    print("Positive")
elif a < 0:
    print("Negative")
else:
    print("Zero")
```

2. Compare two integers `x` and `y`. Print `"Equal"` if they are equal, `"Greater"` if `x` is greater than `y`, or `"Smaller"` if `x` is smaller than `y`.

```
if x > y:
    print("Greater")
elif x < y:
    print("Smaller")
else:
    print("Equal")
```

3. Check if a given number `n` is even or odd.
```
if n % 2 == 0:
    print("Even")
else:
    print("Odd")
```

4. Given an integer `age`, check if the person is eligible to vote. If they are 18 or older, print `"Eligible to vote"`, otherwise print `"Not eligible to vote"`.
```
if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible to vote")
```

5. Calculate the absolute value of a number `x` and store it in a variable `abs_val`.
```
abs_val = None
if x < 0:
    x *= -1
abs_val = x
```

6. **Challenge:** Compare two floating-point numbers `a` and `b` with a tolerance `tol` of `0.01`. Print `"Approximately equal"` if the absolute difference between them is less than or equal to `tol`, otherwise print `"Not equal"`.

**Solution 1:**
```
tol = 0.01
if abs(a - b) <= tol:
    print("Approximately equal")
else:
    print("Not equal")
```

**Solution 2:**
```
tol = 0.01
x = a - b

if x < 0:
    x *= -1

if x <= tol:
    print("Approximately equal")
else:
    print("Not equal")
```


### String Comparisons
1. Check if a given string `s` is empty or not. Print `"Empty"` if it is, or print `"Not empty"` if it isn't.
```
if s == "":
    print("Empty")
else:
    print("Not empty")
```

2. Compare two strings `str1` and `str2`. Print `"Equal"` if they are equal, otherwise print `"Not equal"`.
```
if str1 == str2:
    print("Equal")
else:
    print("Not equal")
```

3. Compare two strings `str1` and `str2` alphabetically. Print `"Comes first"` if `str1` comes before `str2` in alphabetical order, otherwise print `"Comes later"`.
```
if str1 < str2:
    print("Comes first")
else:
    print("Comes later")
```

4. Given a string `word`, check if the first character of `word` is an uppercase letter. Print `"Uppercase"` if it is, and print `"Lowercase or not a letter"` if it isn't.
```
if word[0].isupper():
    print("Uppercase")
else:
    print("Lowercase or not a letter")
```

5. Check if a given string `password` has a minimum length of 8 characters. Print `"Valid password length"` if it does, and print `"Invalid password length"` if it doesn't.
```
if len(password) >= 8:
    print("Valid password length")
else:
    print("Invalid password length")
```

## Boolean Logic and Logical Operators
### Logical Short-Circuiting: Number Comparisons
In these exercises, you are given a logical expression that will throw an error under certain conditions. Your task is to figure out what this error is, and use short-circuiting to eliminate the error.

Most of these are division by zero errors, but one of them is a comparison to None error. Not all of them are solved by rearranging the terms either, sometimes you will need to add a new term that properly accounts for the erroneous condition.

1. `(B / A > 5) or (A == 0 and C > 5)`
* `solution = (A == 0 and C > 5) or (A != 0 and B / A > 5)`

2. `(D !== None and E < F) or (D == None and G > H)`
* `solution = (D is None and G > H) or (D is not None and E < F)`

3. `(I == 0 and J == 1) or (K % I == 0)`
* `solution = (I == 0 and J == 1) or (I != 0 and K % I == 0)`

4. `(L == 0 and M > N) or (O / L > 3)`
* `solution = (L == 0 and M > N) or (L != 0 and O / L > 3)`

5. `(A == 0 and B > 0) or (C > 0 and D / (A * B) > 1)`
* `solution = (A == 0 and B > 0) or (C > 0 and A * B != 0 and D / (A * B) > 1)`


### Conditional Short-Circuiting (Medium)
In each of these exercises, you are presented with a conditional structure knowing that one of the blocks inside it is unreachable due to short-circuiting. To solve these problems, you must identify which block is unreachable, and reorganize the structure so that the unreachable block can be reached.

##### Problem 1:
    if A > 0 and B < 10:
        print("First conditional")
    elif A > 0 or 15 > B > 5:
        print("Second conditional")
    elif A == 0 and 5 < B < 10:
        print("Third conditional")
    else:
        print("Fourth conditional")

##### Solution 1:
    if A > 0 and B < 10:
        print("First conditional")
    elif A == 0 and B < 10:
        print("Previously the third conditional")
    elif A > 0 or B > 5:
        print("Second conditional")
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

##### Solution 2:
    if P <= 10 and R < 20:
        print("Previously the third conditional")
    elif P <= 10 or R >= 20:
        print("First conditional")
    elif P > 10 and R < 20:
        print("Second conditional")
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

##### Solution 3:
    if X >= 0 and Y < 5:
        print("First conditional")
    elif X < 0 and Y < 5:
        print("Previously the third conditional")
    elif X >= 0 or Y >= 3:
        print("Second conditional")
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

##### Solution 4:
    if E == 5 and F == 10:
        print("Previously the third conditional")
    elif E < 5 and F >= 10:
        print("First conditional")
    elif E >= 5 or F > 8:
        print("Second conditional")
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

##### Solution 5:
    if I == 0 and J >= 10:
        print("Previously the third conditional")
    elif I == 0 and J < 10:
        print("First conditional")
    elif I != 0 or J >= 5:
        print("Second conditional")
    else:
        print("Fourth conditional")



### Un-Nesting Conditionals (Medium)
These exercises involve un-nesting some horrendously nested conditional blocks. You will first need to un-nest the blocks, and then use the "guard clause" technique to remove redundant comparisons.

For conditional control structures, you implement guard clauses by checking for the `else` condition *first*, and then removing its opposite condition from the `if` and `elif` blocks below it.

You can also do this by turning your `else` into an `elif`, and providing the condition that triggers it. If there are blocks nested inside the `elif`, then you can "distribute" its condition to those blocks and un-nest them by one layer.

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

**Solution 1:**

    if A <= 10:
        print("A is less than or equal to 10")
    elif B < 20:
        print("A is greater than 10 and B is less than 20")
    elif C > 30:
        print("A is greater than 10, B is greater than or equal to 20, and C is greater than 30")
    else:
        print("A is greater than 10, B is greater than or equal to 20, and C is less than or equal to 30")



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

**Solution 2:**

    if X <= 5:
        print("X <= 5")
    elif Y <= 10:
        print("X > 5, Y <= 10")
    elif Z > 15:
        print("X > 5, Y > 10, Z > 15")
    else:
        print("X > 5, Y > 10, Z <= 15")


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

**Solution 3:**

    if P <= 0:
        print("P <= 0")
    elif Q > 0:
        print("P > 0 and Q > 0")
    elif R <= 0:
        print("P > 0, Q <= 0, R <= 0")
    elif S > 0:
        print("P > 0, Q <= 0, R > 0, S > 0")
    else:
        print("P > 0, Q <= 0, R > 0, S <= 0")


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

**Solution 4:**

    if A <= 10:
        print("A <= 10")
    elif B > 20:
        if C > 30:
            print("A > 10, B > 20, C > 30")
        else:
            print("A > 10, B > 20, C <= 30")
    elif D <= 40:
        print("A > 10, B <= 20, D <= 40")
    elif E > 50:
        print("A > 10, B <= 20, D > 40, E > 50")
    else:
        print("A > 10, B <= 20, D > 40, E <= 50")


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

**Solution 5:**

    if X <= 0:
        print("X <= 0")
    elif Y <= 0:
        print("X > 0, Y <= 0")
    elif Z <= 0:
        print("X > 0, Y > 0, Z <= 0")
    elif W > 0:
        print("X > 0, Y > 0, Z > 0, W > 0")
    else:
        print("X > 0, Y > 0, Z > 0, W <= 0")

