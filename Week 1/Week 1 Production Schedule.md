## Intro To The Course
* Welcome to the Boot Camp - Video
* Course Objectives, Topics, and Syllabus - Video
    - Dependency: Completed syllabus
* Tips for Student Success - Video
* Tips for Student Success - Text
### MEDIUM PRIORITY
* Installing VSC
* Installing Python
* Installing PyCharm
### LOW PRIORITY
* VSC Tutorial
* PyCharm Tutorial


## Web Development Lessons
### D1: Components of a Web App - Lesson Text
### D1: Components of a Web App - Lesson Video
  * HTML `Skeleton/frame of web page`
  * CSS `Styling and positioning of HTML elements`
  * JS `Adds programmability and advanced functionality`
  * Node/Express `Manages server-side scripts necessary for serving web pages`
  * Servers `Stores web page data and Node/Express scripts`
  * DNS `Provides a human-readable name to website addresses`

### D1: Intro to HTML - Lesson Text
### D1: Intro to HTML - Lesson Video - 10m
  * Brief History - 5m `Briefly discuss features added to each version of HTML at a good pace` 
  * Structure and Syntax - 5m
        - Tags `Discuss angle-bracket syntax, opening and closing tags, and self-closing tags`
        - Tag Attributes `If that's the right term--discuss attributes like src and href as examples`
        - Document text `Non-tag text, everything that goes between the tags`
  * Comments

### D2: Intro to CSS - Lesson Text
### D2: Intro to CSS - Lesson Video
  * Box Model - 5m `Demonstrate by inspecting a website page element`
  * Page Layout Design `Discuss headers, body, footers, nav-bars, and general design tips`

### D4: Sections and Layouts - Lesson Text
### D4: Sections and Layouts - Lesson Video
* Intro to UI/UX Design - 5m `Moved from Day 2, it fits better here`
* Header and Navigation Design (10 minutes)
* Hero Section Design (10 minutes)
* Content Design (10 minutes)
* Footer Design (5 minutes)
  `CSS UI/UX GOOD DESIGN FORMAT`

### D5: Accessibility, Testing and Iteration
* Designing For Accessibility
* Testing and Iteration

## HTML Lessons
### D1: HTML Structure and Common Tags - Lesson Text
### D1: HTML Structure and Common Tags - Lesson Video
  * Base HTML Structure `Doctype tag, html tag, title, body, etc.`
  * Text Tags `Paragraphs and lists`
  * Media Tags `Images, videos, and audio files (discourage auto-playing audio)`
  * Anchors `Hyperlinks and buttons`
  * Tables `Not used as often, but show table headers, rows, columns, etc.`

### D2: HTML Div, Span, Forms, and Inputs - Lesson Text
### D2: HTML Div, Span, Forms, and Inputs - Lesson Video
  * Div and Span `Div for creating containers, span for styling sub-sections of text and elements`
  * Forms and Input `Discuss difference between forms and inputs, forms seem to be used more in combination with a server to process form data, while inputs are much simpler and will be used more extensively with Web3 dApps`
  * Additional Tags `Any additional tags you want to briefly talk about can go here, such as semantic tags for accessibility`

### D5: Accessibility - Lesson Text
### D5: Accessibility - Lesson Video
`This is a very short video that covers the basics of screen-readers and design considerations for people with color blindness, and how semantic HTML tags make websites accessible for them`
* Semantic HTML Tags - 1m
* ARIA - 2m
* Color Contrast - 2m

## HTML Labs
### D1: Structure and Tags: Base Personal Website - Lab Video
### D1: Structure and Tags: Base Personal Website - Lab Text

### D2: Div, Span, Form, and Input: Add Divs to Website - Lab Videeo
### D2: Div, Span, Form, and Input - Lab Text

## HTML Exercises
### D1: HTML Structure and Common Tags - Exercise Text
  * 10 exercises to create simple website skeletons


## CSS Lessons
### D2: Syntax, Text, Background - Lesson Video
    `This video should keep the CSS fairly simplistic, as students will still be very new to coding and may still be wrapping their minds around all this. The goal is to demonstrate how HTML is used purely to outline the content of the webpage, while CSS is used to style and position the content`
  * Syntax `For this intro lesson, show how inline attributes are declared and set, and on D3 you can show how stylesheet attributes are declared and set inside curly braces. If it makes sense to do so, you could show an external stylesheet with its class name, selector, and curly brace syntax, but state that you'll stick with inline CSS for today--otherwise you may just want to leave that lesson for D3.`
  * Height/Width
  * Colors
  * Text and Fonts
  * Anchor Tags `Can this limited intro lesson show how to turn an anchor tag into a primitive button?`
  * Character Entities
  * Backgrounds `This should probably be combined with divs to show how divs work`
  * Images

### D3 Stylesheets and Selectors - Lesson Text
### D3 Stylesheets and Selectors - Lesson Video
* Inline CSS vs Stylesheets - 5m `Discuss why stylesheets are preferred`
  * Linking CSS to HTML (2 minutes) 
  * CSS Hierarchy - 3m `Replicate an inline/stylesheet hierarchy conflict to demonstrate CSS hierarchy. Discuss other topics of hierarchy. Use diagram to illustrate hierarchy visually.`
* CSS selectors - 10m `Delve much deeper into selectors and tags, and discuss the hierarchy and syntax between class and id tag attributes`
* BEM Naming Convention - 5m `Probably don't need 5 minutes on this, it's pretty straightforward and is best demonstrated through labs and context`

### D3: Padding, Borders, and Positioning - 40 minutes
* Padding/Margin - 5m `Take some time on these and show simple examples`
* Borders - 2m `These are pretty simple`
* Shadows - 2m `Also pretty simple`
* More Units of Measurement - 5m
  * Absolute Units `Expand upon units briefly mentioned on Day 2`
  * Relative Units `Discuss importance of relative units for responsive design`
* Wrappers and Containers - 10m
* Layouts and Positioning - 15m

### D4: CSS Reset - Lesson Text
### D4: CSS Reset - Lesson Video
* Why CSS Reset?
* Browser Default Styles - 3m
  * Show screenshot of same HTML/CSS code in two browsers
* Using A CSS Reset To Override Browser Styling 5m

### D4 Nesting and Combinators - Lesson Text
### D4 Nesting and Combinators - Lesson Video
* Nesting Selectors 
* CSS Combinators
  `COMBINATORS DIAGRAM`

### D5: Flexbox, Grid, and Pseudoclasses - Lesson Text
### D5: Flexbox, Grid, and Pseudoclasses - Lesson Video
`Link students over to Flexbox Zombies game if they're interested in gaining proficiency with the Flexbox syntax and commands`
* Flexbox - 10m
* Grid - 10m
* Pseudoclasses - 10m
  `PSEUDOCLASSES DIAGRAM`

## CSS Labs
### D2: Syntax, Text, Background - Lab Video `This should be pretty simplistic, demonstrate a little bit of each topic discussed for the personal website, or even have Chat generate some generic HTML skeletons and quickly style them up to show more than one example`
### D2: Intro to Coolors app - Lab Video `Follow the first lab with the second lab, which uses Coolors to generate color palettes, and then apply a color palette to the personal website. The nice thing about doing it this way is that each student's website will come out with a different color palette suitable to their tastes, rather than a rigid palette chosen by the instructors.`

### D3: Stylesheets, Selectors, Padding, and Positioning Lab:
* Personal Website (if any of these are still needed)
  * Move all remaining inline CSS to external stylesheet, create attribute names with BEM naming convention
  * Apply positioning, layouts, and wrappers
  * Convert appropriate units of measurement to relative units, show difference by adjusting VW

### D4: Resets and Nesting Lab: 
* Create fresh webpage with all sections discussed in Web Development IV and topics discussed in CSS II. Will be different website from the personal site from days 1 and 2.  

### D5: Flexbox, Grid, and Pseudoclasses
* If personal website needs it, then use Flexbox or grid to align page elements
* If not, then generate a generic HTML document--or use a dummy document from an earlier lesson or lab--and demonstrate Flexbox and grid on them.
* Demonstrate pseudoclasses by changing the color of buttons when hovered over

## CSS Exercises
### D2: Syntax, Text, Background - Exercise Text
  * 10 exercises to style text and background

### D3: 10 Exercises to Practice Further
* 5 exercises that practice padding/margin, borders, and shadows
* 5 exercises to wrap and reposition elements

### D4: Resets and Nesting Practice:
* 5 exercises that require selecting and styling nested elements within a pre-made HTML document

### D5: Exercises. 
* A bunch of tiny, creative exercises to let them really practice flex, grid, pseudo classes. Stuff like, "Make a blue square, insde the blue square center a yellow circle, have two red triangles with one straddling the right side of the circle and one straddling the left side of the circle. Stuff like that.


## Git/Github Lessons
### D5: Intro to Version Control - Lesson Text
### D5: Intro to Version Control - Lesson Video
* What is version control? - 13m
  * Use of Git/Github in professional development - 3m
  * Creating a Github account - 5m
  * Installing Git - 5m

### D5: Pushing, Pulling, and Cloning - Lesson Text
### D5: Pushing, Pulling, and Cloning - Lesson Video 
* Using Git and remote repositories - 21m
  * Adding to local repo - 3m
  * Committing changes to local repo - 3m
  * Pushing changes to Github - 5m
  * Pulling repositories - 5m
  * Cloning repositories - 5m

## Python Lessons
`### D1: Variables, Data Types, I/O - Lesson Text` COMPLETE
`### D1: Variables, Data Types, I/O - Lesson Video` COMPLETE - TOUCH UP SLIDE TRANSITIONS

`### D2: Arithmetic Operators - Lesson Text` COMPLETE
`### D2: Arithmetic Operators - Lesson Video` COMPLETE  - TOUCH UP SLIDE TRANSITIONS

`### D2: Branching Control Structures - Lesson Text` COMPLETE
`### D2: Branching Control Structures - Lesson Video` COMPLETE - TOUCH UP SLIDE TRANSITIONS


`### D3: Looping Control Structures - Lesson Text` COMPLETE
`### D3: Looping Control Structures - Lesson Video` COMPLETE - TOUCH UP SLIDE TRANSITIONS
  
`### D3: Functions - Lesson Text` COMPLETE 
`### D3: Functions - Lesson Video` COMPLETE

`### D4: Classes and Objects - Lesson Text` COMPLETE
`### D4: Classes and Objects - Lesson Video` NEEDS EDITING

`### D4: Built-In Data Structures  - Lesson Text` COMPLETE
`### D4: Built-In Data Structures  - Lesson Video` NEEDS RENDERING

`### D5: Random Numbers - Lesson Text` COMPLETE
`### D5: Random Numbers - Lesson Video` COMPLETE


## Python Labs
`### D1: Variables, Data Types, I/O - Lab Text` COMPLETE
`### D1: Variables, Data Types, I/O - Lab Video` COMPLETE, MAY REDO

### D2: Arithmetic and Control Structures - Lab Text
### D2: Arithmetic and Control Structures - Lab Video
  * Combining and comparing math formulas
  * Math formula selection menu
  * GTW Game new game / exit game logic
  * GTW Game win/lose logic - 2m
    * Lose -> wrong-guesses-remaining == 0
    * Win -> partial-word == secret-word
  * GTW Game string character comparison logic - 2m

### D3: Looping Control Structures and Functions - Lab Text
### D3: Looping Control Structures and Functions - Lab Video
* Clear screen function - 2m `This is a useful universal function that basically just prints a crapload of newlines to the terminal. There does not appear to be any other way to clear the terminal that actually works for all devices, at least not that I can find.`
* Win/lose functions - 2m `These simply display the winning or losing message`
* Setters, getters, and printers for game variables - 2m `Simple functions to set game variable values and to return them. Students should be told that while it is not necessary to do this, it is part of a design philosophy we will be learning about in week 2, and it does make code easier to read, maintain, and upgrade--even if it results in a ton of tiny functions.`
* Main menu recursive functions - 3m `These functions welcome the user to the game, and then prompts for user input and will do one of three things: start a new game, exit the game by returning from the function, or print an invalid input error to the user and call the inner recursive function again`
* New game / game loop function - 5m `This sets up local variables needed for the game, and then initiates the game's while loop. The loop prints the current partial word, the number of wrong guesses remaining, and which letters the user has guessed already. It then calls the appropriate functions given user input.`
* Placeholder function for choosing new word - 1m `This is called by the new game function, and picks a new secret-word. Students will know that this function will implement randomness on Day 5, but for now we will leave it as a non-random function, and we will leave a placeholder comment where the random number generator should go.`
* Function for building partial word from character input - 5m `Takes a string character as input, iterates over each character of both the partial-word and the secret-word, and if there's a match replaces the partial-word's underscore character with the guessed character. Rebuilds the partial-word in a temporary variable character by character.`
* String character comparison function - 3m `This iterates over the secret-word and compares a single string character to each character in the secret-word. If it detects a match, then it returns True. If it reaches the end of the word without detecting a match, then it returns False.`

### D4: Classes and Data Structures - Lab Text
### D4: Classes and Data Structures - Lab Video
`This lab focuses entirely on the Guess The Word game components`
* Fill out secret-words list, initialize guessed-characters list - 2m `Both the secret words and guess-characters lists were left as None before, so in this lab we will create lists for them. I will use a pre-made list of 50 secret words, which I will share in the lab text document.`
* Function for adding new guessed character, checks if character exists first - 3m `This shows how to use a loop to check if a character was already guessed, and how to append the character to the end if it was not.`
* Function for printing list of guessed characters to console - 2m `A simple getter function for printing the list of guessed characters to the user interface`
* Function for storing new secret word in GTW game variable - 2m `This function takes a number, picks its corresponding list element, and stores it in the secret-word variable`
* Add lists to game loop - 5m
  * Adds each guessed character to list, and reprints list of guesses
  * Calls guess-checking function and stores returned value in variable
    * Checks returned value, and branches appropriately
  * Checks if wrong-guesses-remaining is 0, calls lose-game if so
  * Checks if partial word has any underscore characters, calls win-game and breaks loop if not

### D5: Python Random Numbers and Algorithms  - Lab Text
### D5: Python Random Numbers and Algorithms  - Lab Video
`There most likely isn't anything left to work on here. This part of the lab will be very short.`
* Implement randomness into function for picking secret word
* Finalize game, should be fully complete now

### Python Random Numbers and Algorithms Part II - Lab Text
### Python Random Numbers and Algorithms Part II - Lab Video
`See "Week 1 Topics Final" for more details`
* Create a turn-based RPG combat game involving a Gladiator class, attack and defend functions, and a random ability picker function for the computer opponent.

## Python Exercises
`### D1: Variables, Data Types, I/O - Exercise Text` COMPLETE

`### D2: Arithmetic and Control Structures - Exercise Text` COMPLETE
  
### D3: Looping Control Structures and Functions (Easy) - Exercises Text
* Print even numbers from 0 to n
* 4 exercises in looping structures
* 5 exercises in functions

### D3: Looping Control Structures and Functions (Challenging) - Exercises Text
* Fizz-Buzz Challenge
* Prime Numbers Challenge
* Recursive Factorial Challenge

### D4: Classes and Objects - Exercises Text
* 5 practice exercises for creating classes

### D4: Data Structures - Exercises Text
* 5 practice exercises involving lists and list methods
* 5 practice exercises involving dictionaries and dictionary methods
* 2 optional practice exercises for tuples
* 2 optional practice exercises for sets

### D5: Random Numbers and Algorithms (Easy):
* Create a dice rolling program that simulates rolling 2 6-sided dice
* Create a list containing every character on the keyboard, then create a function 'generate-password()' that builds a string called 'password' out of 8 randomly chosen characters from the list, and returns 'password'. Then, the function should print the message, f"Your new password is: {password}"
* Create a function 'selection-sort(list)' that uses Selection Sort to sort a 'list' input.
* Create a function 'insertion-sort(list)' that uses Insertion Sort to sort a 'list' input.
* Create a function that produces a list of 20 integers from 0 to 20, then use the random module's shuffle() function to shuffle the list. Then, sort the shuffled list with the two sorting functions you just created.

### D5: Random Numbers and Algorithms (Challenging):
* Create a list of 1000 random numbers between 0 and 1000, then sort and print the list with either the Selection Sort or Insertion Sort algorithm created in the easy exercises
* Once the list from the previous exercise is sorted, create a function that generates a random number between 0 and 1000, and then uses both Linear Search and Binary Search to look for the number in the list, and then returns the number of array accesses each algorithm made and whether the number was found. 
  * Use a for-each loop to call this function 20 times to maximize your chances of generating a number that exists.





## Development Lessons
### D3: Doxygen Tags and Documentation - 15 minutes
* What are Doxygen tags? - 3m
* How to use Doxygen tags - 5m
* Using Doxygen to create documentation - 5m
  `DOXYGEN TAGS DIAGRAM`



## Week 1 Diagrams and Illustrations
* HTML Common Tags
* HTML Additional Tags
* CSS Hierarchy
* CSS Units of Measurement
* CSS Good UI/UX Design Format
* CSS Combinators
* CSS Pseudoclasses
* Doxygen Tags
* Python List Methods
`* Python Operators` COMPLETE
`* Programming Jargon: Operand, Operator, Expression` COMPLETE


## Supplemental Materials
* D0: Useful VSC Extensions
* D2: CSS Resources




## Projects
`These are worked on throughout the week`
### Website Landing Page (HTML/CSS)
    HTML (Day 1)
    HTML/CSS (Day 2)
    CSS

### Guess-The-Word Game (Python)
  Game variables - 2m
  * Secret word
  * Partial word
  * Guesses remaining
  Clear screen function - 3m
  Winning and losing functions - 3m
  Game variable getters and setters - 3m
  Game loop - 4m
  * Prompt user input - 2m
  * Start new game branch - 1m
  * Exit game branch - 1m
  Secret word list and list functions - 4m
  * Choose random secret word - 3m
  * Store secret word in game variable - 1m
  Guesses list and functions - 10m
  * Add guess to guesses list - 1m
  * Check if letter belongs to list - 2m
  Build partially complete word from guesses array - 5m
  Guess comparison and branching function - 6m
  * Correct guess branch - 3m
  * Incorrect guess - 3m
  New Game function - 3m
  * Get new secret word - 1m
  * Reset partial word and guesses counter - 1m
  * Initiate game loop - 1m

`This is an optional project if the GTW game does not need much time on Day 5 to finish up. Because we will be applying programming concepts to create the GTW game throughout the week in lab projects, it is likely that very little word will be needed on Day 5, leaving a lot of time available. If that happens, then we will create another mini-project that will provide a foundation for Week 2's adventure game combat system`
### Turn-Based Combat Mini-Game (Time Permitting)
* Create an Gladiator class with the following attributes:
  * name = None
  * current_health = 100
  * min-attack = 0
  * max-attack = 15
  * defense = 0
  * is-defending = False
* Create the following methods for Gladiator:
  * get-health(self): Returns the current health of the Gladiator. If health is below 0, then returns 0
  * print-stats(self): Prints f"{self.name} health: {self.get-health()}"
  * reduce-health(self, amount):
    * If amount <= self.defense, then print "Attack defended!" and return
    * Otherwise, print f"{amount} damage inflicted on {self.name}!" and reduce self.current-health by 'amount' - self.defense
  * defend(self): 
    * If self.is-defending is False, sets self.is-defending to True, raises defense by 10, and returns
    * Otherwise, does nothing and returns
  * attack(self, enemy): 
    * If self.is-defending is True, sets self.is-defending to False 
    * Rolls a random number 'attack-damage' between self.min-attack and self.max-attack, and calls enemy.reduce-health(attack-damage)
* Create a function 'check-battle-status(player, enemy)' that checks if either the player or enemy's health is 0
  * If player's health is 0, then calls 'lose-game()'
  * If enemy's health is 0, then calls 'win-game()'
* Create a function 'lose-game()' that prints "You died! Play again? Y/N: " and calls 'new-battle' if the player enters Y
* Create a function 'win-game()' that prints "You have conquered your enemy! Play again? Y/N: " and calls 'new-battle' if player enters Y
* Create a function 'generate-enemy-name()' that returns a random name from a list of names (provided in supplemental materials)
* Create a function 'new-battle()' that prompts the user for their name, stores the name in 'player-name' variable, creates two objects from the Gladiator class, 'player(player-name)' and 'enemy(generate-enemy-name())', then passes both objects to another function 'start-battle(player, enemy)'
* Create a function 'start-battle(player, enemy)' that initializes a while loop, calls player.print-stats() and enemy.print-stats(), and prompts the user to pick an ability to use.
  * If the player types "attack" or "a", then call player.attack(enemy)
  * If the player types "defend" or "d, then call player.defend()
  * Call check-battle-status(player, enemy)
  * Then, call the function 'take-enemy-turn(player, enemy)'
  * Call check-battle-status(player, enemy) again
* Create a function 'take-enemy-turn' that generates a random number between 0 and 1, and calls enemy.attack(player) if 0, or enemy.defend() if 1
* Finish up any final details, and play a few rounds of the new game!
