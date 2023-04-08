## Guess-The-Word (Hangman) Game Project
Welcome to our first project lab! Every week, we will work on one project that applies the lessons taught throughout the week. Each day, we will work on different pieces of the project, especially those that pertain to what we just learned each day.

This week, our primary project will be a simple Guess The Word game. This game is also known as the Hangman game, though drawing a gallows and stick-figure body parts using Python print functions would be incredibly tedious and time-consuming, and wouldn't really teach us any useful skills. So, I'm calling this game "Guess The Word", because that's what we will be doing.

The game is simple: 
* A random word is drawn from a list of words 
* A "partial-word" is printed with one underscore character for each secret-word character
* The player is prompted to guess a letter.

* If the player guesses a letter that is in the secret-word, then the letter is added to the partial-word in the same locations (and same case) as it occurs in the secret-word. 

* If the player guesses a letter that is not in the secret-word, then they lose a life. 

* If they guess all the letters in the secret-word, then they win the game.

* If they lose all 6 of their lives, then they lose the game.

For example, if the secret-word is "Expeditious", then the partial-word will start off as "\_\_\_\_\_\_\_\_\_\_\_". If the player guesses "e", then the partial-word will become "E\_\_e\_\_\_\_\_\_\_". If they guess i, the partial-word becomes "E\_\_e\_i\_i\_\_\_", and so on.

The game will print the partial-word, a list of characters they have already guessed, and how many lives they have remaining. The game's interface should look like this:
```
Partial Word: E__e_i_i___
Guessed Letters: E, I
Lives Remaining: 6

Guess a letter:
```

So, let's set up the basic components that we will need for this game. 

### Opening message
##### Skills: Output and input
Since we know how to use `input()` and `print()`, let's set up some of our input/output expressions that we know we will need later on. A good place to start is with the opening message for the game.

One problem we will run into is that parts of our message are simply too long, and PyCharm doesn't like it when our code is too long. So, we will need to break apart some of our `print()` functions into multiple lines. Luckily, this is very easy.

    # Opening message
    print("Welcome to Guess The Word! In this game, a random word will be chosen, and you will have to guess each "
      "character in the word.")
    print("If you guess wrong, then you lose a life. If you guess correct, then the new character"
        "is added to the partially complete word.")
    print("If you guess all the characters, then you win! If you lose all your lives, then you lose!")
    input("Press Enter to begin playing")

### Secret word lists
##### Skills: Declaring variables, single element lists
In this game, we will have several variables, but they don't need to be set until the game begins. 

However, three variables that will remain constant throughout the game are the lists of words that can be chosen as secret-words, which we will "hard-code" into the game's program data. When we learn about lists, I will give you three lists with 50 words on them corresponding to easy, medium, and hard difficulty settings for the game.

For now, since we haven't learned about lists, we will create three lists with just one element in each:

    # Game global variables
    easy_words = ["Expeditious"] 
    medium_words = ["Vehicle"]
    hard_words = ["Cow"]

### New game variables
##### Skills: Declaring variables, string multiplication, empty lists
Now, let's think about what happens when a new game is started. We will need declare and set a few game variables during the game's loading process, which will include an empty array of guessed letters, a variable holding the randomly chosen secret-word, a variable holding the partial-word that has one underscore for each secret-word letter, and a variable containing the number of lives the player has.

#### Guessed letters array
For the guessed letters, we can create an empty list like this:

    # This is an empty list
    guessed_letters = []  

#### Secret word
For the secret-word, we can pick the first element of the `easy_words` list by accessing element 0 inside square brackets. This will assign the string `"Expeditious"` to `secret_word`. We will learn more about the square bracket syntax when we discuss lists:

    # This accesses the first element of the easy_words list
    secret_word = easy_words[0]  

#### Partial word
For the partial-word, we can use string multiplication to automatically add one underscore character for each letter in the secret word, but we will need to know the length of the secret-word. If you remember from the lesson, we can use the `len()` function to get the number of characters in a string, and we can multiply a string by an integer to duplicate it. Let's apply that with the underscore character to populate the `partial_word` variable:

    # Use string length and string multiplication to make this easy
    partial_word = "_" * len(secret_word)

#### Player lives
Finally, we can create a variable for the player's lives which we will start at 6 for now. When we add difficulty settings, we will adjust this starting value based on what the player chooses for the difficulty:

    player_lives = 6

In total, our new game variables should all look like this:

    # New Game: Assign values to game's variables
    guessed_letters = []
    secret_word = easy_words[0]
    partial_word = "_" * len(secret_word)
    player_lives = 6


### Game loop message
##### Skills: Print, input, f-strings
Once a new game has been started, we will enter a "game loop". While we don't currently know how to build loops, we can still think about what happens during an individual loop.

In our game loop, we want to print the game's current statistics and prompt the user to guess a letter. We will print the partial-word, the list of guessed letters, and the player's remaining lives, and then we will prompt the player to guess a letter. After that point, the game will run its logic to determine if the letter was correct or incorrect, and it will alter the game variables appropriately.

Let's use f-strings to write these messages, as they are much easier to read than strings that use concatenation:

    print(f"Partial Word: {partial_word}")
    print(f"Guessed Letters: {guessed_letters}")
    print(f"Lives: {player_lives}")
    guess = input(f"Guess a character: ")

### Correct Guess
##### Skills: String concatenation, combining variables
Let's assume the player makes a correct guess, and now we need to update the partial-word to show the new letter in the correct places. We are missing several skills required to build this logic, but we can simulate the process it will need to go through so you understand how it works.

Because strings are "immutable" data types, we can't just use square brackets to access the character position we want to change and then change it. Instead, we need to rebuild the entire string using an "intermediate variable" to store the string in its various phases as we rebuild it letter by letter.

#### Initialize correct guess
When the user guesses a correct letter, we want to print "Correct!" and declare our intermediate variable initialized with an empty string:

    print("Correct!")
    new_partial_word = ""

Normally, this is where we would begin a for loop, but we don't know those yet, so we will pretend like we are inside a loop.

#### Simulate looping operations
Now, let's assume the first letter of the secret-word is the same as the letter the player guessed, which in this case is "E". We concatenate the player's guess onto the intermediate variable:

    new_partial_word = new_partial_word + guess

But, the next two letters are not "E", so they will remain as underscores:

    new_partial_word = new_partial_word + ("_" * 2)

Then, the fourth letter is "E", so we add it again just like the first time:

    new_partial_word = new_partial_word + guess

Finally, the next seven letters are not "E":

    new_partial_word = new_partial_word + ("_" * 7)

Once the new partial-word is finished, we can now replace the current partial-word with it, and add the player's guess to our list of guessed letters:

    partial_word = new_partial_word
    guessed_letters = [guess]

To summarize, this is what our test code for a correct guess should look like:

    print("Correct!")
    new_partial_word = ""

    # Loop begins
    # guess matches:
    new_partial_word = new_partial_word + guess
    # guess does not match 2x:
    new_partial_word = new_partial_word + ("_" * 2)
    # guess matches:
    new_partial_word = new_partial_word + guess
    # guess does not match 7x:
    new_partial_word = new_partial_word + ("_" * 7)
    # Loop ends

    partial_word = new_partial_word
    guessed_letters = [guess]


#### Test correct guess
Now, test the code by copy-pasting your game loop user interface messages:

    print(f"Partial Word: {partial_word}")
    print(f"Guessed Letters: {guessed_letters}")
    print(f"Lives: {player_lives}")
    guess = input(f"Guess a character: ")

When you run the code with "e" as the guess, it should produce "e__e_______" for the Partial Word message, and ['E'] for the Guessed Characters list.

### Incorrect guess
##### Skills: Variable arithmetic
When the player makes an incorrect guess, we will decrement the player's lives count. We will also add the player's guess to the guessed words list, but we will wait until we know how to use the `append()` list method before we do that.

This is a lot simpler than getting a correct guess:

    print("Incorrect! You lost a life!")
    player_lives = player_lives - 1
    # Add guess to guessed_letters list

We simply tell the player they lost a life, take one life away, and add their guess to the guessed_letters list.

### Game Over and Game Won
##### Skills: Input and output
When the player runs out of lives, they lose the game. This will result in a game over message, followed by a prompt for them to choose to play again:

    print("You have lost all your lives! Game over man!")
    input("Play again? Y/N: ")

When the player guesses all the letters in the secret-word, they win the game. This results in a winning message, followed by a prompt for them to play again:

    print(f"You won! The secret word is {secret_word}!")
    input("Play again? Y/N: ")

## Summary
That will tie up today's project building lab. There is a **lot** more left to be built on this project, and we will be putting the pieces together throughout the week. I hope today's lab has helped you better understand how to use input/output, variables, strings, and arithmetic, and I hope the project has helped you understand how to think about the way your program needs to run.

If you are itching for some unguided practice, then I recommend checking out the exercises section of today's lesson.