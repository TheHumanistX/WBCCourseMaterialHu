***Week 1: Intro to Programming, Intro to Web Development, Intro to Git/Github***

**NOTE:** All daily exercises are considered optional for students who want to practice their skills. While it is assumed they will be using these exercises, they are not required to.


# Day 0: Welcome To The Course!

### Welcome Video - 2 minutes
### Course Objectives, Topics, and Syllabus Overview - 3 minutes `Create this in Week 12, when everything is finished`
### Tips For Student Success - 2 minutes

### Setting Up The Development Environment - 15 minutes
* Installing Visual Studio Code - 5m
  * Useful VSC Extensions - 1m
    `USEFUL VSC EXTENSIONS SUPPLEMENTAL RESOURCE`
* Installing Python - 5m
* Installing PyCharm - 5m

`LOW PRIORITY: Create these if time permits, otherwise link to YouTube video tutorial`
### IDE Tutorials
* VSC Tutorial - 5m
* PyCharm Tutorial - 5m


# Day 1: Intro to HTML, Intro to Python
## MORNING SESSION

### Web Development I: Components Of A Web App (6 minutes)
* Welcome Message/Introduction (1 minute)
* Website/App Components (5 minutes)
  * HTML (1 minutes)
  * CSS (1 minutes)
  * JavaScript (1 minutes)
  * Node.JS (1 minutes)
  * Web Server (30 seconds)
  * DNS (30 seconds)

### Web Development II: Intro to HTML (4 minutes)
* Brief History of HTML
* HTML Structure and Syntax
* HTML Comments `Include this on Day 1 so students can make notes above HTML tags`


### HTML I: HTML Structure and Common Tags (30 minutes)
* Creating Simple Webpage - 2m
* Base HTML Structure of a Webpage - 3m
* Common HTML Tags
  * Text Tags - 5m
    * Paragraphs
    * Lists
    * Non-Semantic Text Tags
  * Media Tags - 10m
    * Images
    * Video
    * Audio
  * Anchors/HyperLinks - 3m
  * Tables - 5m
    * Table Headers
    * Rows and Colums
`COMMON HTML TAGS DIAGRAM`

* Section Teaching File(s):
  * Week 1\Day 1\Teaching.html

### HTML Structure and Common Tags Lab: (20 minutes)
* Base Personal Website
  * Week 1\Day 1\Lab.html

### Day 1 Optional (but recommended) Extra Practice
* 10 Exercises to build another webpage utilizing all the topics learned up to this point.
  * It's broken up so they could skip any topic they already find really easy and don't want to repeat.


## AFTERNOON SESSION

### Python: Variables, Data Types, Input/Output - 35 minutes
* Input/Output - 4m
  * input() and print()
* Strings - 2m
  * Concatenating strings - 1m
  * Multiplying strings - 1m
* Variables - 10m
  * What are Variables? 3m
  * The Assignment Operator - 2m
    * Not the same as mathematics! - 1m
  * Variable Naming Conventions - 3m
  * Using F-Strings and Variables - 1m
* Null/None - 1m
  * Using None as a placeholder value - 1m
* Integers and Floats - 2m
  * Integers - 1m
  * Floats - 1m
* Basic Arithmetic Operators - 6m
  * Addition - 1m
  * Subtraction - 1m
  * Multiplication - 1m
  * (Float) Division - 1m
  * Grouping and Left-to-Right Order - 2m
* Type Casting - 5m
  * int() and str() - 2m
  * Type casting user inputs - 2m
  * Integer type casting error - 1m
* Combining Variables - 5m
  * Multi-variable arithmetic - 1m
  * Copying variables in other variables - 1m
  * Assigning variables to themselves - 2m
    * Incrementing/decrementing variables - 1m


### Variables, Data Types, Basic I/O - Lab: - 10 minutes
* User input and text output - 2m
* Coding simple math equations - 2m
* Coding complex math equations - 3m
* Guess-The-Word Game Variables - 2m `Introduce project, explain use of each variable`
  * words-list = None
  * guesses-list = None
  * wrong-guesses-remaining = 5
  * secret-word = ""
  * partial-word = ""

### Variables, Data Types, Basic I/O - Practice:
  * Greeting I/O
  * More math I/O
  * +8 exercises



# Day 2: HTML Forms and Inputs, Intro to CSS, Python Arithmetic and Branching Control Structures
## MORNING SESSION

### HTML Div, Span, Form, and Input (20 minutes)
* Div and Span - 10m
* Forms and Input - 10m
* Additional Tags - 3m
  `HTML ADDITIONAL TAGS DIAGRAM`

### HTML Lab: Splitting Day 1 Website Into Divs - 5 minutes
### HTML Lab: Contact Form - 5 minutes

### Web Development III: Intro to CSS (15 minutes)
* What is CSS? - 3m
* Box Model - 5m
* Page Layout Design - 5m
* Two Good Resources - 1m

`Idea: For Day 2, only use inline CSS, and only cover background/text coloring and text/image resizing. You can demonstrate how div tags work by coloring them with background colors and special fonts. That will keep the lesson very simple, so it balances better with HTML.`
### CSS I: Syntax, Text, and Background (15 minutes)
* CSS Syntax          `Show basic syntax via inline CSS`
* Height/Width
* Colors
* Text and Fonts      `Use px for sizing, introduce new units Day 3`
* Anchor Tag Formats  `Super quick`
* Character Entities  `Super Quick`
* Backgrounds
* Images              `Use px for sizing, introduce new units Day 3`

### CSS Syntax, Text, and Background Lab: - 30 minutes
* Adding Sections, spans, inline styling to the website - 20 minutes
* Introduce and use Coolors app to create basic color theme for website - 10 minutes

### CSS Syntax, Text, and Background Extra Practice
* 10+ Exercises utilizing all the topics learned up to this point.


## AFTERNOON SESSION

### Python: Arithmetic Operators - 15 minutes
* Arithmetic Operators - 10m
  * Basic Arithmetic Operators Review - 1m
  * Exponentiation - 1m
  * Integer vs Float Division - 2m
  * Modulo - 1m `Keep this surface-level`
  * Compound Assignment Operators - 3m
* Coding Complex Math Formulas - 5m

### Python: Branching Control Structures - 20 minutes
* Intro to Boolean Data Type - 1m
* Comparison Operators - 5m
  * Greater than / less than
  * Equal / not equal
* Logical Operators - 5m
  * AND, OR, NOT operators - 3m
  * Logical precedence - 2m
* If / Else If / Else - 7m
  * Python if/elif/else blocks - 3m
  * When to use elif/else - 1m
  * Chaining multiple elif statements - 2m
  * Chaining multiple if statements - 2m
* Nested Control Structures - 3m
  * Avoid nesting when possible
* Coding Piecewise Math Equations - 3m

### Python Arithmetic and Control Structures Lab - 10 minutes
* Combining and comparing math formulas
* Math formula selection menu
* GTW Game new game / exit game logic
* GTW Game win/lose logic - 2m
  * Lose -> wrong-guesses-remaining == 0
  * Win -> partial-word == secret-word
* GTW Game character comparison logic - 2m

### Arithmetic and Control Structures - Practice:
* Turn 10 math formulas into code
  * Temperature Converter
  * Area Calculator
  * Tip Calculator
* Turn 5 piecewise formulas into code `These practice branches very well`


# Day 3: CSS Stylesheets and Element Positioning, Python Loops and Logic
## MORNING SESSION
### CSS II: Stylesheets and Selectors - 20 minutes
* Inline CSS vs Stylesheets - 5m    `Doesn't need much explaining, other than why stylesheets are preferred`
  * Linking CSS to HTML (2 minutes) `Removed JS from this, as it may fit better in a later lesson`
  * CSS Hierarchy - 3m              `Use inline vs stylesheets to directly demonstrate CSS hierarchy`
* CSS selectors - 10m
* BEM Naming Convention - 5m

### CSS III: Padding, Borders, and Positioning - 40 minutes
* Padding/Margin - 5m       `Take some time on these and show simple examples`
* Borders - 2m              `These are pretty simple`
* Shadows - 2m              `Also pretty simple`
* More Units of Measurement - 5m
  * Absolute Units          `Expand upon units briefly mentioned on Day 2`
  * Relative Units
* Wrappers and Containers - 10m
* Layouts and Positioning - 15m

`This should give you something to work on for Day 3 lab :) `
### CSS Stylesheets, Selectors, Padding, and Positioning Lab:
* Personal Website (if any of these are still needed)
  * Move all remaining inline CSS to external stylesheet, create attribute names with BEM naming convention
  * Apply positioning, layouts, and wrappers
  * Convert units of measurement to relative units, show difference by adjusting VW


### 10 Exercises to Practice Further
* 5 exercises that practice padding/margin, borders, and shadows
* 5 exercises to wrap and reposition elements


## AFTERNOON SESSION
### Python: Looping Control Structures - 15 minutes
* While Loops - 7m
  * Setting up a While Loop - 2m
  * Breaking and continuing - 2m
  * Infinite Loops - 1m
  * Do-While Loops - 2m
    * Python: while True - 2m
* For Each Loops - 5m
  * for x in range(y) - 3m
  * for x in y - 3m

### Python: Functions - 30 minutes
* Calling Functions - 5m
  * Parameters - 2m
  * Return Values - 3m
* Creating Functions - 10m
  * Parameters - 4m
  * The return Keyword - 1m
  * Return Values - 4m
  * Optional Parameters - 1m
* Getters and Setters - 3m
  * Getters / Accessors - 1m
  * Setters / Mutators - 1m
  * Functions should do one thing - 1m
* Naming Functions - 5m
  * Use descriptive names - 1m
  * Use verbs as names - 1m
  * Avoid abbreviations and acronyms! - 1m
  * Use consistent conventions - 1m
* The Pass Keyword - 1m
* Recursive Functions - 5m
  * Recursion vs Looping - 2m
  * How to Avoid Infinite Recursive Loops - 3m

### Development: Doxygen Tags and Documentation - 15 minutes
* What are Doxygen tags? - 3m
* How to use Doxygen tags - 5m
* Using Doxygen to create documentation - 5m
  `DOXYGEN TAGS DIAGRAM`


### Looping Control Structures and Functions Lab: - 25 minutes
* Clear screen function - 2m
* Win/lose functions - 2m
* Setters and getters for game variables - 2m
* Main menu function - 3m
* Game loop function - 5m
* Placeholder function for choosing new word - 1m
* Function for building partial word from character input - 5m
* String character comparison function - 3m

### Control Structures II - Practice (Easy):
* Print even numbers from 0 to n
* 4 exercises in control structures

### Control Structures II - Practice (Challenging):
* Fizz-Buzz Challenge
* Prime Numbers Challenge
* Create a recursive function that calculates and returns the factorial of a number

### Documentation - Practice:
* For all of the functions created today, write Doxygen tags that explain what the functions do, what their inputs are (if any), and what their return values are (if any).
* Generate documentation for the new tags using Doxygen


# Day 4 - Sections and Layouts, CSS Reset, Basic Data Structures
## MORNING SESSION

`This would be greatly benefited by having a companion graphic that shows a good UI design that we can aim to focus on for this course`
### Web Development IV: Sections and Layouts - 40 minutes
* Intro to UI/UX Design - 5m `Moved from Day 2, it fits better here`
* Header and Navigation Design (10 minutes)
* Hero Section Design (10 minutes)
* Content Design (10 minutes)
* Footer Design (5 minutes)
  `CSS UI/UX GOOD DESIGN FORMAT`

`This topic merits a section of its own, though not a particularly long one--just enough that students will know that different browsers have different defaults, and sometimes those defaults will mess up your CSS`
### CSS IV: CSS Reset - 8 minutes
* Why CSS Reset?
* Browser Default Styles - 3m
  * Show screenshot of same HTML/CSS code in two browsers
* Using A CSS Reset To Override Browser Styling 5m

`This is a fairly complicated topic, so it should probably go here or in Day 5 when students will have more mental real estate to spare for the topic. Combinators should also have a diagram`
### CSS V: Nesting and Combinators - 15 minutes
* Nesting Selectors 
* CSS Combinators
  `COMBINATORS DIAGRAM`

### CSS Resets and Nesting Lab: 
* Create fresh webpage with all sections discussed in Web Development IV and topics discussed in CSS II. Will be different website from the personal site from days 1 and 2.  

### CSS Resets and Nesting Practice:
* 5 exercises that require selecting and styling nested elements within a pre-made HTML document

## AFTERNOON SESSION
  
### Python: Classes and Objects - 15 minutes
* What are Classes? - 4m `Conceptual only`
  * Classes are blueprints - 2m
  * Class attributes - 1m
  * Class methods - 1m
* Defining and Initializing Classes - 5m
  * The __init__ magic function - 2m
  * The self convention - 1m
  * Accessing attributes - 1m
  * Accessing methods - 1m
* Creating Objects from Classes - 4m
  * Programmer jargon: "instance" - 1m
  * Object variables are a memory location -1m `Demonstrate by printing an object`
  * Accessing object methods and attributes - 2m

`This lesson focuses on lists and dictionaries, as they will be used in JavaScript and Solidity later`
### Python: Native Data Structures  - 25 minutes
* What are Data Structures? - 2m
* Lists and Arrays - 12m
  * Lists vs Arrays - 2m
  * List methods - 10m
    * append() - 1m
    * insert() - 1m
    * extend() - 1m
    * pop() - 1m
    * index() - 1m
    * count() - 1m
    * sort() - 1m
    * reverse() - 1m
    * copy() - 1m
* Dictionaries - 8m
  * Dictionaries and Mappings - 2m
  * Dictionary methods - 6m
    * get() - 1m
    * keys() - 1m
    * pop() - 1m
    * popitem() - 1m
    * clear() - 1m
    * copy() - 1m
* Tuples - 2m
  * Mutable vs immutable data types - 1m
* Sets - 2m
  * Differences between sets and dictionaries - 1m

`Many of these steps should have pre-existing functions built from previous labs by now`
### Python Classes and Data Structures Lab: - 15 minutes
* Fill out secret-words list, initialize guessed-characters list - 2m `Use pre-populated word list`
* Function for printing guessed characters to console - 2m
* Function for storing new secret word in GTW game variable - 2m `No randomness`
* Function for adding new guessed character, checks if character exists first - 3m
* Finish partial word building function - 3m `Only needs to check last guess, replace underscores with correct character`
* Function that compares user input to secret-word characters, then branches appropriately - 5m
  * Checks if character is on guessed-characters list, loops for new input if so
  * Calls guessed-character list add function
  * Calls guess-checking function
    * If correct, adds new character to partial word
    * If incorrect, decrements wrong-guesses-remaining counter
  * Checks if partial word has any missing characters, calls win-game if not
  * Checks if wrong-guesses-remaining is 0, calls lose-game if so


### Classes and Objects - Practice:
* 5 practice exercises for creating classes

### Data Structures - Practice:
* 5 practice exercises involving lists and list methods
* 5 practice exercises involving dictionaries and dictionary methods
* 3 practice exercises for tuples
* 3 practice exercises for sets


# Day 5: CSS Flexbox, Grid, and Pseudoclasses, Python Random Numbers and Algorithms, Intro to Git/Github
## MORNING SESSION

### Web Development V: Accessibility, Testing and Iteration
* Designing For Accessibility
* Testing and Iteration

`This fits nicely here with Web Deb V as a practical follow-up to the topic of accessibility`
### HTML: Accessibility - 10 minutes
* Semantic HTML Tags - 1m
* ARIA - 2m
* Color Contrast - 2m

### CSS VI: Flexbox, Grid, and Pseudoclasses - 30 minutes
* Flexbox - 10m
* Grid - 10m
* Pseudoclasses - 10m
  `PSEUDOCLASSES DIAGRAM`

### CSS Lab:
* If personal website needs it, then use Flexbox or grid to align page elements
* If not, then generate a generic HTML document--or use a dummy document from an earlier lesson or lab--and demonstrate Flexbox and grid on them.
* Demonstrate pseudoclasses by changing the color of buttons when hovered over

### CSS VI Exercises. 
* A bunch of tiny, creative exercises to let them really practice flex, grid, pseudo classes. Stuff like, "Make a blue square, insde the blue square center a yellow circle, have two red triangles with one straddling the right side of the circle and one straddling the left side of the circle. Stuff like that.

### Git/Github: Intro to Version Control - 15 minutes
* What is version control? - 13m
  * Use of Git/Github in professional development - 3m
  * Creating a Github account - 5m
  * Installing Git - 5m

### Git/Github: Pushing, Pulling, and Cloning - 20 minutes 
* Using Git and remote repositories - 21m
  * Adding to local repo - 3m
  * Committing changes to local repo - 3m
  * Pushing changes to Github - 5m
  * Pulling repositories - 5m
  * Cloning repositories - 5m


## AFTERNOON SESSION

### Python: Basic Algorithms - 20 minutes
* Basics of Time Complexity - 3m
* Linear Search - 2m
* Binary Search - 4m `I'll show this algorithm, but I don't expect students to remember it--only if they want to`
* Basic Sorting Algorithms - 10m
  * Selection Sort - 5m
  * Insertion Sort - 5m

### Python: Random Numbers - 10 minutes
* Randomness in programming - 3m
  * True random vs pseudo-random - 2m
  * Randomness in Python - 1m
* Importing Random module - 1m
* Common random number functions - 5m
  * randint() - 1m
  * randrange() - 1m
  * Using randint to generate a random number - 1m
  * Using randint to generate a list of random numbers - 2m

`By this point, the majority of the Guess-The-Word game is already done, it just needs randomness and it's ready to play`
### Python Random Numbers and Algorithms Lab for Guess-The-Word Game: - 10 minutes
* Implement randomness into function for picking secret word
* Finalize game, should be fully complete now

`This creates a mini battle game that will be expanded upon next week, and demonstrates almost every topic learned this week`
### Python Random Numbers and Algorithms Lab for RPG Battle Game: - 20 minutes
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


### Python Practice (Easy):
* Create a dice rolling program that simulates rolling 2 6-sided dice
* Create a list containing every character on the keyboard, then create a function 'generate-password()' that builds a string called 'password' out of 8 randomly chosen characters from the list, and returns 'password'. Then, the function should print the message, f"Your new password is: {password}"
* Create a function 'selection-sort(list)' that uses Selection Sort to sort a 'list' input.
* Create a function 'insertion-sort(list)' that uses Insertion Sort to sort a 'list' input.
* Create a function that produces a list of 20 integers from 0 to 20, then use the random module's shuffle() function to shuffle the list. Then, sort the shuffled list with the two sorting functions you just created.

### Python Practice (Challenging):
* Create a list of 1000 random numbers between 0 and 1000, then sort and print the list with either the Selection Sort or Insertion Sort algorithm created in the easy exercises
* Once the list from the previous exercise is sorted, create a function that generates a random number between 0 and 1000, and then uses both Linear Search and Binary Search to look for the number in the list, and then returns the number of array accesses each algorithm made and whether the number was found. 
  * Use a for-each loop to call this function 20 times to maximize your chances of generating a number that exists.



# Project Components
## PROJECTS:
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

