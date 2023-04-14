## Callback Functions Exercises

1. Write a function called printResult that takes a single argument and logs it to the console. Then, write a function called calculateSum that takes two numbers and a callback function as arguments. calculateSum should add the two numbers together and call the callback function with the result.

1. Create a function called applyToAllElements that takes an array and a callback function as arguments. The function should apply the callback function to each element in the array and return a new array with the results. Test it by using a callback function that doubles the value of each element.

1. Write a function called filterArray that takes an array and a callback function as arguments. The function should return a new array containing only the elements that satisfy the condition specified in the callback function. Test it with a callback function that checks if a number is even.

1. Create a function called getData that simulates an asynchronous operation (e.g., fetching data from a server) using setTimeout. The function should take a callback function as its only argument and call the callback function with a hardcoded string after 2 seconds.

1. Write a function called sortedArray that takes an array of numbers and a callback function as arguments. The function should sort the array based on the logic provided in the callback function. Test it with a callback function that sorts the numbers in descending order.

## Variable and Function Scope Exercises

1. Create a function called `outer` that declares a local variable called `x` with a value of 10. Inside `outer`, create another function called `inner` that increments the value of `x` by 5. Call `inner` from within `outer` and then log the value of `x`. What will be the output, and why?

1. Write a function called `calculateArea` that takes the length and width of a rectangle as arguments. Declare a variable called `area` within the function scope, calculate the area, and assign it to the `area` variable. Log the value of `area` from outside the function. What will be the output, and why?

1. Create a function called `greet` that takes a `name` parameter and logs a greeting message using the `name` parameter. Inside the function, declare a variable called `greeting` and assign it a value. Attempt to log the value of `greeting` outside the function. What will be the output, and why?

1. Write a function called `calculateSumAndProduct` that takes three parameters: `a`, `b`, and a callback function. The function should calculate the sum and product of `a` and `b` and call the callback function with an object containing the sum and product as properties. Test it with a callback function that logs the sum and product.

1. Create a global variable called `counter`. Write a function called `incrementCounter` that increments the value of `counter` by 1. Write another function called `resetCounter` that resets the value of `counter` to 0. Call `incrementCounter` several times, log the value of `counter`, call `resetCounter`, and log the value of `counter` again. What will be the output, and why?

## Error Handling Exercises

1. Write a function called `divide` that takes two numbers as arguments and returns the result of dividing the first number by the second number. Use a `try` block to catch any errors that may occur during the division operation, such as dividing by zero. If an error occurs, log a custom error message to the console.

1. Create a function called `calculateSquareRoot` that takes a number as an argument and returns the square root of the number. Use a try block to catch any errors that may occur during the calculation, such as attempting to calculate the square root of a negative number. If an error occurs, log a custom error message to the console.

1. Write a function called `fetchData` that simulates fetching data from an API. The function should take a URL string as an argument and use a `try` block to catch any errors that may occur during the fetch operation, such as an invalid URL. If an error occurs, log a custom error message to the console.