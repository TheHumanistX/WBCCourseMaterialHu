## Day 2: Guess The Word Project
Let's do some work on our Guess The Word mini-game! Now that we have conditional control structures, we can begin adding some logic to our game. Begin by opening the GTW project file in PyCharm

### GTW Game new game / exit game logic
Let's start with the new game and exit game logic. In our game intro message, let's prompt the user to type "N" to begin a new game, "R" to view the rules of the game, or "E" to exit. We will also include a block for if neither of these things were entered, which we will later use to repeat the main menu.

We can start by dividing our intro message to accomodate the new conditional blocks. We will need to use escape characters to add quotes around our print message characters, and we will set the user's input to uppercase characters to remove case sensitivity from the program:

    # Main Menu
    print("Welcome to Guess The Word!")
    print("\"N\" - New Game")
    print("\"R\" - Game Rules")
    print("\"E\" - Exit Game")
    user_input = input("Select an option: ").upper()
    
    # Game Rules
    print("In this game, a random word will be chosen, and you will have to guess each letter in the word.")
    print("If you guess wrong, then you lose a life.") 
    print("If you guess correct, then the new letter is added to the partially complete word.")
    print("If you guess all the characters, then you win! If you lose all your lives, then you lose!")
    input("Press Enter to return to the Main Menu")

    # New Game
    # Initialize new game variables
    # Display game loop UI

    # Exit Game
    print("Exiting game")

Now we add the conditional blocks around the messages:

    # Main Menu
    print("Welcome to Guess The Word!")
    print("\"N\" - New Game")
    print("\"R\" - Game Rules")
    print("\"E\" - Exit Game")
    
    # Game Rules
    if user_input == "R":
        print("In this game, a random word will be chosen, and you will have to guess each letter in the word.")
        print("If you guess wrong, then you lose a life.") 
        print("If you guess correct, then the new letter is added to the partially complete word.")
        print("If you guess all the characters, then you win! If you lose all your lives, then you lose!")
        input("Press Enter to return to the Main Menu")

    # New Game
    elif user_input == "N":
        # Initialize new game variables
        # Display game loop UI

    # Exit Game
    elif user_input == "E":
        print("Exiting game")

    # Incorrect Input
    else:
        print("Please enter one of the main menu choices")

Next, let's move the new game logic into the New Game selection. However, before we do this we need to declare all of our game variables **outside** the `elif` block. We can use a `None` value as a placeholder. This is due to how "scope" works in programming, which we will discuss when we learn about loops.

First, we need to add the placeholder variables to the top of our program:

    # Game global variables
    easy_words = ["Expeditious"]  # This is a list with only one element in it. Our final game will have 50 words in it
    medium_words = ["Vehicle"]
    hard_words = ["Cow"]  # Three-letter words with no repeating letters and one vowel are very hard to guess

    # Game Variables
    guessed_letters = None
    secret_word = None 
    partial_word = None
    player_lives = None
    guess = None

Because we declared these variables outside of any conditional blocks, they will be available to us outside the blocks as well as inside. We will be assigning their values from inside the blocks, and those values will remain once the blocks are finished. Again, this is a scoping problem that we will learn about later. 

Now, we can provide actual values for these variables inside the New Game block:

    # New Game
    elif user_input == "N":
        # New Game: Assign values to game's variables
        guessed_letters = []  # This is an empty list
        secret_word = easy_words[0]  # This accesses the first (and only) element of the easy_words list
        partial_word = "_" * len(secret_word)
        player_lives = 6
        
        # Game loop display
        print(f"Partial Word: {partial_word}")
        print(f"Guessed Letters: {guessed_letters}")
        print(f"Lives: {player_lives}")
        guess = input(f"Guess a letter: ")

That will do for our main menu, and without loops or functions our main menu is very limited in what it can do. But, we will get there later this week.

### GTW Game win/lose logic
Let's create the logic that compares variables to determine if the player won or lost the game. For the Game Over logic, we check if the player has `0` lives remaining:

    # Game Over
    if player_lives == 0:
        print("You have lost all your lives! Game over man!")
        input("Play again? Y/N: ")

For the Game Won logic, we check if the `partial_word` is equal to the `secret_word`:

    # Game Won
    if partial_word == secret_word:
        print(f"You won! The secret word is {secret_word}!")
        input("Play again? Y/N: ")

We can test this by setting `player_lives` to `0`, and setting `partial_word` to `secret_word`.

Notice how both of these outcomes have the same "Play again? Y/N: " message. Just like with the main menu, we need to convert the user's input to uppercase or lowercase, and then check if it's valid. 

Later, when we learn how to create our own functions we will create a function for this part of the program. However, for now let's build out the input checking logic for one of these, and then copy-paste it into the other:

    user_input = input("Play again? Y/N: ").upper()
    if user_input == "Y":
        print("Starting new game")
    elif user_input == "N":
        print("Exiting game")
    else:
        print("Invalid input, please type \"Y\" or \"N\"")

We can now set our variables to the correct values to trigger these blocks, and move them to the top of the program to test each input. Our final win/lose code along with its test variables will (for now) look like this:

    # Testing Game Over block
    player_lives = 0

    # Game Over
    if player_lives == 0:
        print("You have lost all your lives! Game over man!")
        user_input = input("Play again? Y/N: ").upper()
        if user_input == "Y":
            print("Starting new game")
        elif user_input == "N":
            print("Exiting game")
        else:
            print("Invalid input, please type \"Y\" or \"N\"")

    # Testing Game Won block
    partial_word = secret_word

    # Game Won
    if partial_word == secret_word:
        print(f"You won! The secret word is {secret_word}!")
        user_input = input("Play again? Y/N: ").upper()
        if user_input == "Y":
            print("Starting new game")
        elif user_input == "N":
            print("Exiting game")
        else:
            print("Invalid input, please type \"Y\" or \"N\"")


### GTW Game letter comparison logic
Now that we have conditional blocks, we can code the string letter comparison logic. This is the engine that drives the game's mechanics, and is the most important part!

The idea of this code is to check the user's input against a letter in the `secret_word`. This code will be running inside a loop that checks each letter in the secret word, so we won't be able to finish it until we learn about loops.

The logic will flow like this:
* Compare the `guess` to the first letter of the `secret_word`, both converted to uppercase.
* If the two letters match, then add the `secret_word`'s first letter into the `new_partial_word` temporary string. By doing it this way, we will ensure that the `secret_word`'s case is preserved.
* Otherwise add the `partial_word`'s first letter into the `new_partial_word` temporary string.

Remember: We can access any individual letter of a string using `[`square brackets`]`, and for the first letter we use the number `0`. Example: `secret_word[0]` will return the letter `"E"` in the string `"Expeditious"`.

However, also remember that we will need to convert the user's input *and* the `secret_word`'s letter to uppercase or lowercase before making the comparison.

This will have the effect of adding existing underscores or letters from the `partial_word` without needing to check the `guessed_letters` list, thereby improving our code's efficiency.

Try to tackle this problem on your own before proceeding!

-------------

#### Solution

Let's start with the user input. Let's use the `guess` variable whose value is given inside the New Game block. We will build on the Correct Guess area. The first step is to move `new_partial_word = ""` and the `print("Correct!")` lines above the Correct Guess comment, so we can print the success message and access the temporary variable from inside the block.

This will result in the following:

    print("Correct!")
    new_partial_word = ""

    # Correct Guess: Use string concatenation to rebuild the partial word
    if guess.upper() == secret_word[0].upper():
        new_partial_word += secret_word[0]

If the two letters do not match, then we add the `partial_word`'s letter instead. Note that we don't need to test for the letters not matching, as that is implied by an `else` block:

    else:
        new_partial_word += partial_word[0]

This part of the code will look like this:

    print("Correct!")
    new_partial_word = ""

    # Correct Guess: Use string concatenation to rebuild the partial word
    if guess.upper() == secret_word[0].upper():
        new_partial_word += secret_word[0]
    else:
        new_partial_word += partial_word[0]

This is just a piece of the final code, as we will need a loop to iterate over every letter in the `secret_word` running this code. This code also assumes the player made a correct guess, which we will also need a loop to check for, but we won't build that today.

We can now erase the code that was used for simulating the looping mechanism adding the letters to the `new_partial_word`. Instead, let's use string slicing from yesterday's lesson to add the remaining letters of our `partial_word` to the `new_partial_word`.

Recall that string slicing is done with `[`square brackets`]`, a `:` operator, and numbers. Also remember that computers begin counting from `0`, so in order to slice from the second letter need to use the number `1`.

    # Concatenate the rest of the partial_word to the temporary word
    new_partial_word += partial_word[1:]

    # Reassign the partial_word, and add the player's guess to the guessed letters
    partial_word = new_partial_word
    guessed_letters = [guess]

### GTW Correct/Incorrect Guess Blocks
While we can't use functions or loops yet to algorithmically check if a player's guess was correct or incorrect, we can still simulate it with a Boolean variable set to a `True` or `False` value.

Let's call this variable `guess_is_correct`, and let's assign it `guess_is_correct = True`.

Let's create two conditional blocks below the Main Menu structure that compare `guess_is_correct` to make a decision:
* Correct Guess - Contains the logic we just created for adding a correctly guessed letter to the `partial_word` by adding it to `new_partial_word` first, filling in the remaining characters, and then reassigning `partial_word`
* Incorrect Guess - Decrements one of the player's lives

See if you can do this on your own.

---------------

#### Solution:

This is pretty simple:

    # Replace with algorithm to check player's guess
    guess_is_correct = True

    # Correct Guess
    if guess_is_correct:
        print("Correct!")
        new_partial_word = ""
        
        # Correct Guess: Use string concatenation to rebuild the partial word
        if guess.upper() == secret_word[0].upper():
            new_partial_word += secret_word[0]
        else:
            new_partial_word += partial_word[0]
        
        # The remaining seven letters are not "E", so we add seven underscores to the partial-word
        new_partial_word += partial_word[1:]
        
        partial_word = new_partial_word
        guessed_letters = [guess]

    # Incorrect Guess
    else:
        print("Incorrect! You lost a life!")
        player_lives -= 1

You can repeat the main game loop message below these blocks to ensure that the code works:

    print(f"Partial Word: {partial_word}")
    print(f"Guessed Letters: {guessed_letters}")
    print(f"Lives: {player_lives}")
    guess = input(f"Guess a character: ")

### Conclusion
That concludes today's project time! If you feel like you need more practice with arithmetic operators and conditional blocks, then I recommend you check out the exercises provided with this lesson.
