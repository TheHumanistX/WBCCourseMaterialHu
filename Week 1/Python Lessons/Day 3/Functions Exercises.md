# Functions Exercises
## 1. Defining Functions with No Parameters (5 exercises)

1.1. Write a function `greet` that prints `"Hello, world!"`.

1.2. Write a function `print_square` that prints the square of the number `5`.

1.3. Write a function `display_info` that prints your name, age, and favorite color.

1.4. Write a function `print_sum` that prints the sum of the numbers `10` and `20`.

1.5. Write a function `tell_joke` that prints a funny joke.

## 2. Defining Functions with Input Parameters (5 exercises)

2.1. Modify the `greet` function to accept a `name` parameter and print `"Hello, {name}!"`.

2.2. Modify the `print_square` function to accept a `number` parameter and print the square of the given `number`.

2.3. Modify the `display_info` function to accept `name`, `age`, and `favorite_color` parameters, and print them.

2.4. Write a function `multiply` that accepts two numbers as input parameters and prints their product.

2.5. Write a function `print_full_name` that accepts `first_name` and `last_name` parameters and **prints** the `full_name`.

## 3. Defining Functions with Return Parameters (5 exercises)

3.1. Modify the `print_square` function to be called `get_square` and return the square of the given number instead of printing it.

3.2. Modify the `multiply` function to return the product of the given numbers instead of printing it.

3.3. Write a function `add` that accepts two numbers as input parameters and returns their sum.

3.4. Write a function `divide` that accepts two numbers as input parameters and returns their quotient.

3.5. Write a function `get_full_name` that accepts `first_name` and `last_name` parameters and **returns** the full name.

## 4. Functions that Use Return Values of Other Functions (5 exercises)

4.1. Write a function `calculate_area` that accepts the `length` and `width` of a rectangle and uses the `multiply` function to return the `area` of the rectangle.

4.2. Write a function `calculate_volume` that accepts the `length`, `width`, and `height` of a rectangular prism and uses the `multiply` and `calculate_area` functions to return the volume.

4.3. Write a function `print_welcome_message` that uses the `get_full_name` function to print a welcome message with the user's full name.

4.4. Write a function `calculate_average` that accepts three numbers and uses the `add` function to calculate and return the average of the numbers.

4.5. Write a function `compare_squares` that accepts two numbers and uses the `print_square` function to print which number has a larger square.

## 5. Functions with Guard Clauses (4 exercises)

5.1. Modify the `divide` function to include a guard clause that returns "Cannot divide by zero" if the divisor is zero.

5.2. Write a function calculate_bmi that accepts weight (in kg) and height (in meters) as input parameters and returns the BMI using a guard clause to check if height is zero.

5.3. Write a function print_grade that accepts a grade value and uses a guard clause to check if the grade is within the range 0-100. If it is not, return "Invalid grade".

5.4. Modify the print_full_name function to include a guard clause that checks if the first_name or last_name is an empty string. If either is empty, return "Name cannot be empty".

## 6. Exercises with Global Variables (5 exercises)

6.1. Declare a global variable counter with an initial value of 0. Write a function increment_counter that increments the global variable by 1.

6.2. Declare a global variable greeting with an initial value of "Hello". Write a function change_greeting that accepts a new greeting as a parameter and updates the global variable with the new greeting.

6.3. Declare a global variable pi with a value of 3.14159. Write a function calculate_circle_area that accepts the radius as a parameter and returns the area of the circle using the global variable pi.

6.4. Declare a global variable username with an initial empty value. Write a function set_username that accepts a new username as a parameter and updates the global variable username.

6.5. Declare a global variable temperature with an initial value of 20. Write a function increase_temperature that increments the global variable by the given value.

## 7. Exercises with Local Variables in Different Scopes (5 exercises)

7.1. Write a function find_largest that accepts two numbers and returns the largest number using a local variable.

7.2. Write a function print_even_or_odd that accepts a number and prints "Even" if the number is even or "Odd" if the number is odd, using local variables.

7.3. Write a function print_age_group that accepts an age and prints the age group ("Child", "Teen", "Adult", "Senior") using local variables and nested if-else blocks.

7.4. Write a function get_letter_grade that accepts a grade and returns the corresponding letter grade ("A", "B", "C", "D", "F") using local variables and if-elif-else blocks.

7.5. Write a function calculate_discount that accepts a price and a discount percentage, and returns the final price after applying the discount using local variables.

## 8. Exercises Combining Global and Local Variables and Scope (5 exercises)

8.1. Declare a global variable exchange_rate with an initial value of 1.1. Write a function convert_currency that accepts an amount in dollars and returns the amount in euros using both the global variable exchange_rate and a local variable.

8.2. Declare a global variable tax_rate with a value of 0.15. Write a function calculate_tax that accepts an amount and returns the tax amount using both the global variable tax_rate and a local variable.

8.3. Declare a global variable default_username with a value of "Guest". Write a function greet_user that accepts an optional username parameter. If a username is provided, greet the user with the provided username, otherwise, use the global variable default_username.

8.4. Declare a global variable speed_limit with a value of 65. Write a function check_speed that accepts a speed and returns "Speeding" if the speed is greater than the global variable speed_limit, and "OK" otherwise.

8.5. Declare a global variable base_salary with a value of 50000. Write a function calculate_bonus that accepts a bonus percentage and calculates the bonus amount using both the global variable base_salary and a local variable.

## 9. Function Naming Exercises (10 exercises)
Given a description of a function's purpose, as a badly-chosen name for that function, come up with a better function name that follows the tips provided in today's lesson:

* **Use lowercase letters and underscores**
* **Be descriptive**
* **Avoid abbreviations**
* **Use setter verbs for action-oriented functions**
* **Use getter verbs or nouns for functions that return values**

9.1. **Function purpose:** Calculate the area of a rectangle.
**Bad function name:** calc


9.2. **Function purpose:** Check if a given number is prime.
**Bad function name:** prime


9.3. **Function purpose:** Convert a temperature from Celsius to Fahrenheit.
**Bad function name:** cf


9.4. **Function purpose:** Find the maximum value in a list of numbers.
**Bad function name:** find


9.5. **Function purpose:** Encrypt a given text using Caesar cipher.
**Bad function name:** change


9.6. **Function purpose:** Calculate the compound interest for a given principal, rate, and time.
**Bad function name:** ci


9.7. **Function purpose:** Determine the distance between two points in a 2D plane.
**Bad function name:** dist


9.8. **Function purpose:** Get the average of a list of numbers.
**Bad function name:** avg


9.9. **Function purpose:** Check if a string is a palindrome.
**Bad function name:** check


9.10. **Function purpose:** Count the number of occurrences of a word in a given text.
**Bad function name:** count


## 10. Recursion Exercises (2 exercises, OPTIONAL)

10.1. Write a recursive function `factorial` that calculates the factorial of a given non-negative integer `n`. The factorial of a number `n` is the product of all positive integers less than or equal to `n` (e.g., factorial(5) = 5 * 4 * 3 * 2 * 1 = 120).

10.2. Write a recursive function `fibonacci` that calculates the n-th number in the Fibonacci sequence. The Fibonacci sequence starts with `0` and `1`, and each subsequent number is the sum of the previous two numbers (e.g., fibonacci(5) = 0, 1, 1, 2, 3, 5).

**Hint:** The definition of the Fibonnaci sequence is the following:
$f(n) = f(n-1) + f(n - 2), f(0) = 0, f(1) = 1$

**Challenge:** Using Google searching, create a non-recursive version of this function that uses the Algebraic definition of the Fibonacci sequence instead of the recursive definition.
