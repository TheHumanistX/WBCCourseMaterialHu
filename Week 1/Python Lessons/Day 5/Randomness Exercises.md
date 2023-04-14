# Randomness Exercises
**NOTE:** The term "inclusive" means the numbers are included in the randomly generated set of numbers, while the term "exclusive" means the numbers are not included in the randomly generated set of numbers. So, if you are producing a set of integers between 1 and 20, inclusive, then you may have to use 0 and 21, depending upon how the random function works.

## 1. Exercises for randint()

1.1. Generate a random integer between 5 and 15, inclusive, and print it.

1.2. Generate a random integer between -10 and 10, inclusive, and print it.

1.3. Generate a random integer between 100 and 200, inclusive, and print it.

1.4. Generate a random integer between 1 and 1000, inclusive, and print it.

1.5. Generate a random integer between 50 and 150, inclusive, and print it.

## 2. Exercises for randrange()

2.1. Generate a random integer from the range 0 to 10, exclusive, and print it.

2.2. Generate a random even integer between 2 and 20, inclusive, and print it.

2.3. Generate a random multiple of 3 between 6 and 30, inclusive, and print it.

2.4. Generate a random integer from the range 100 to 200, exclusive, with a step of 10, and print it.

2.5. Generate a random integer from the range -20 to 0, exclusive, with a step of 2, and print it.

## 3. Exercises for random()

3.1. Generate a random float between 0 and 1, and print it.

3.2. Generate a random float between 0 and 1, and print it.

3.3. Generate a random float between 0 and 1, and print it.

3.4. Generate a random float between 0 and 1, and print it.

3.5. Generate a random float between 0 and 1, and print it.

## 4. Exercises for uniform()

4.1. Generate a random float between 2.5 and 7.5, inclusive, and print it.

4.2. Generate a random float between -5 and 5, inclusive, and print it.

4.3. Generate a random float between 10 and 20, inclusive, and print it.

4.4. Generate a random float between 0.1 and 1.0, inclusive, and print it.

4.5. Generate a random float between 100 and 200, inclusive, and print it.

## 5. Exercises for choice() and shuffle()

5.1. Create a list of animals and use random.choice() to select and print a random animal from the list.

5.2. Create a list of numbers from 1 to 10, use random.shuffle() to shuffle the list, and print the shuffled list.

5.3. Create a list of colors and use random.choice() to select and print a random color from the list.

5.4. Create a list of words and use random.shuffle() to shuffle the list, then print the shuffled list.

5.5. Create a list of fruits and use random.choice() to select and print a random fruit from the list.

## Exercises: Combining Random Functions

6.1. Create a list of numbers from 1 to 20. Use random.shuffle() to shuffle the list, then use random.choice() to select and print a random number from the shuffled list.

6.2. Generate a random integer between 1 and 10, inclusive, using random.randint(). Then, create a list of that many colors (e.g., if the random integer is 3, create a list with 3 different colors). Use random.choice() to select and print a random color from the list.

6.3. Generate two random float numbers between 0 and 1 using random.random(). Then, use these two float numbers as the range (min and max) for generating a random float using random.uniform(), and print the result.

6.4. Create a list of strings, and use random.shuffle() to shuffle the list. Next, generate a random integer between 1 and the length of the shuffled list using random.randint(). Finally, use this random integer to print the first n elements from the shuffled list, where n is the random integer generated.

6.5. Generate a random integer between 2 and 10 using random.randint(). Then, create a list of that many random integers between 1 and 100, inclusive, using a loop and random.randint(). Use random.choice() to select and print a random number from the list of random integers.