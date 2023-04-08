# Day 1: Intro to Figma, Object Oriented Programming (Encapsulation and Abstraction)

## MORNING SESSION

### CSS Week 1 Review of Topics Lab

### Git/Github: Branching and Merging - 20 minutes
* Skills: Branching, merging, resolving conflicts, submitting pull requests
* Branching
* Merging
* Conflicts
	* Resolving conflicts
* Pull Requests
	* Submitting pull requests
	* Accepting pull requests

### Git/Github: Branching and Merging - Practice Exercises
* In the works...


## AFTERNOON SESSION

### Programming Fundamentals: Intro to Object Oriented Programming - 5 minutes
* MAJOR TOPIC EXAMPLE - time estimation
	* MINOR TOPIC EXAMPLE - time estimation `Note on what to focus on for this day`
	* MINOR TOPIC EXAMPLE - time estimation

### Python OOP: Encapsulation and Abstraction - 15 minutes
* What is Object Oriented Programming (OOP)? - 5m
	* Using objects to represent programs - 2m
	* Internal vs external functions - 2m
	* A brief aside on Functional Programming - 1m
* OOP Principles - 10m `Focus on encapsulation and abstraction today`
	* Encapsulation - 4m
		* Why hide attributes?
		* Declaring private attributes - 1m
	* Abstraction - 4m
		* Setter/getter (accessor/mutator) functions - 1m
		* Public methods - 1m
	* Inheritance - 1m 	`Provide short explanation, but focus on these tomorrow`		
	* Polymorphism - 1m	`Provide short explanation, but focus on these tomorrow`

### OOP Fundamentals Encapsulation Lab - 10 minutes
* Demonstrate Encapsulation - 10m
	* Set RPGCharacter class attributes to private access using double-underscores
	* Create setter and getter functions for class attributes
		* Examples: set-health, set-defense, set-attack, get-health, get-defense, get-attack, get-stats
	* Set Scene class next-scenes list to private access
		* Create getter function to return each neighboring scene's name

### OOP Fundamentals Abstraction Lab - 10 minutes
* Demonstrate Abstraction - 10m
	* Simplify existing RPG combat loop functions by abstracting their internal logic
		* Example: damage-after-defense calculates damage taken after defense stat is factored
		* Example: defend and attack abilities call set-defense method

### Development: Universal Modeling Language and Diagrams - 15 minutes
* Intro to Universal Modeling Language (UML) Diagrams 10m
	* Component Diagrams - 3m `Useful for everything, especially complex systems`
	* Class Diagrams - 3m `Useful for everything`
	* State Machine Diagrams - 4m `Useful for smart contracts and complex systems`
	* Use Case Diagrams - 1m `These are not focused on in this course`
	* Activity Diagrams - 1m `These are not focused on in this course`
	* Sequence Diagrams - 1m `These are not focused on in this course`
	`UML DIAGRAMS EXAMPLES`

`LucidChart doesn't need to be very complex or detailed, it just needs enough to introduce the UI`
### Development: Intro to LucidChart - 5 minutes
* Intro to LucidChart
	* Shapes - 2m
	* Text - 1m
	* Drawing Arrows - 30s
	* Shapes Properties - 3m
		* Color - 1m
		* Shadow - 1m
		* Borders - 1m

### Development UML Diagrams and LucidChart Lab: - 15 minutes
* Component: CYOA game class diagrams 
	* RPGCharacter
	* Player - Inherits from RPGCharacter parent class
	* EnemyNPC - Inherits from RPGCharacter parent class
	* Scene
	* SceneWithLockedDoors
	* `Keep these as simple as possible to save on time, won't need more than 15 minutes for all`


### LucidChart Practice: 
* 3 class description exercises for Class Diagrams
* Create a state machine diagram that shows how a subway turnstile works

`Just getting some ideas ready, this will need to be worked out in detail later`
### Object Oriented Programming Practice:
* Create Weapon class with stats and methods
* Create Consumable class with a description attribute, charges attribute, and setter/getter methods
* Create dictionary in RPGCharacter class called 'abilities' with setters and getters to add, remove, and get abilities
* Create Ability class with description, is-active attribute, use method, and activate/deactivate methods
	* Use method should accept a target=None input parameter, check state of is-active via public getter function, and print error message if ability is inactive
* Modify Scene class to include an 'enemies' attribute to store list of enemy objects, an 'enemy-spawn-chance' attribute, an 'min-enemy-level' and 'max-enemy-level' attributes, which are all set in the class constructor via input parameters.

---

# Day 2: Advanced Figma, Git/Github, Object Oriented Programming (Inheritance and Polymorphism)

## MORNING SESSION: CSS Functions and Variables

### CSS: Variables - 15m
* What are CSS variables? - 2m
* How to declare and use CSS variables - 3m
* Scoping and inheritance of CSS variables - 5m	`Explain here, Demonstrate in lab`
* Using CSS variables to create reusable styles and themes - 5m `Explain here, demonstrate in lab`

### CSS Variables Lab: - 20m
* Create a theme-switcher CSS stylesheet that switches between two Coolors-generated color palettes, apply to website
	* Demonstrate how variable scoping and inheritance works as part of the lab

### CSS: Functions - 12m
* Functions in CSS - 3m `Briefly discuss how functions in CSS work, show some pre-made examples`
* Common Functions - 10m `Lean heavily on the CSS Common Functions diagram for this part to reduce lecture time`
	* Calc() - 3m `Spend some time demonstrating what this one does, and why it's useful`
	* Min() - 2m `This is an easy to grasp topic, doesn't need much time`
	* Max() - 2m `Same with this one`
	* Clamp() - 3m `This one is also easy to understand when min and max are understood`
	`CSS COMMON FUNCTIONS DIAGRAM`

`This probably won't take much longer than about 15 minutes, as you will only be working on a single page`
### CSS Functions Lab: - 15m
* Add some responsiveness to the website landing page using CSS functions
	* Use calc to create text blocks that respond to the size of the VW
	* Use clamp to adjust the image size

### CSS Variables and Functions Practice Exercises:
* Provide an HTML document for students to work with
	* 5-10 simple CSS styling exercises to review last week's skills
	* 5 styling exercises that require variables
	* 5 styling exercises that require functions
	* A theme-switcher system would be ideal for this



## AFTERNOON SESSION

### Python: OOP Inheritance and Polymorphism - 15 minutes
* Review of Object Oriented Programming Principles - 7m
	* Review Encapsulation - 30s `Quick review`
	* Review Abstraction - 30s `Quick review`
	* Review Inheritance - 3m `Go into better detail`
		* Parent/base classes vs child classes - 1m
		* 'super' keyword - 1m
	* Review Polymorphism - 3m `Go into better detail`
		* Overriding: Same inputs, different action - 1m
		* Overloading: Different inputs, same action - 1m
* OOP in Game Design - 5m
	* Characters - 2m
	* Scenes and Levels - 2m
	* Game Items - 1m

### OOP Fundamentals Inheritance Lab: 15 minutes
* Demonstrate Inheritance - 15m
	* Create a Player sub-class, which inherits from RPGCharacter
		* Player class has strength, endurance, and agility private attributes, with setters/getters for each
		* Player class has private inventory dictionary, with setter and getter functions
	* Create an EnemyNPC sub-class, which inherits from RPGCharacter
		* EnemyNPC has private list dropped-loot
		* EnemyNPC initializer takes input enemy-loot
		* Create method collect-loot that adds all EnemyNPC loot to Player's inventory dictionary
	* Create a SceneWithLockedDoors sub-class, which inherits from Scene
		* Create private dictionary locked-scenes: Stores list index of locked scenes, and which key unlocks them
			* Create method scene-is-locked that returns True if scene is locked
			* Create method unlock-scene that removes a Scene's entry from locked-scenes
			* Create method player-has-key that returns True if Player's inventory has the correct scene-key inside it

### OOP Fundamentals Polymorphism Lab: 15 minutes
* Demonstrate Polymorphism - 15m
	* Override Player class's attack method to factor in strength modifier
	* Override Player class's defend method to factor in agility modifier
	* Override Player class's get-health method to factor in endurance modifier
	* Override Player class's get-defense method to factor in agility modifier
	* Override SceneWithLockedDoors class's next-scene method to call player-has-key
* Create simple constructor function that builds a Scene connected to a SceneWithLockedDoors, and an enemy NPC with the key

### LucidChart Lab: Scene Connections Graph - 10 minute
* Create Component diagram of every Scene in CYOA game and all their connections
	* Final game will have 14 Scenes, and 1 SceneWithLockedDoors
	`CYOA GAME SCENE GRAPH CONNECTIONS DIAGRAM`

---

# Day 3: CSS Functions and Variables, Python Exceptions and Error Handling

## MORNING SESSION: CSS Functions and Variables

### 
* To Be Determined CSS Project/Lab


## AFTERNOON SESSION

### Python: Exception and Error Handling - 15 minutes
* What Are Exceptions and Errors? - 3m
	* Common exceptions - 3m
* Raising Exceptions - 2m
	* Why use exceptions instead of returning?
* Catching and Handling Exceptions - 5m
	* Try/Catch Blocks in Programming - 2m
	* Handling Different Exceptions - 3m
* Python try/except/else blocks - 3m

### Exception Handling - Lab: - 15 minutes
* Implement error handling for CYOA game loop to 

### Development: Debugging Techniques - 20 minutes
* Logging
	* Tracking control flow
	* Inspecting variables
* IDE Debugging Tools:
	* Stepping
		* Step In
		* Step Out
		* Step Over
	* Breakpoints

### LucidChart State Machine Diagrams Lab - 10 minutes
* Component: CYOA state machine diagram - Combat system state transition

---

# Day 4: CSS Transform, CYOA Game Development Day

## MORNING SESSION

`Let's start with transitions first, as they are simpler conceptually, and can lead into transform and animations better. Primarily use transitions to teach hover effects and timing`

### CSS: Transitions - 20 minutes
* Transitions - 20m
	* CSS transition properties 3-4m
		* Duration - 1m `This is pretty obvious`
		* Delay - 1m `This is also pretty obvious`
		* Timing - 1m `This is discussed in the next sub-topic, introduce it briefly`
	* Transition timing and easing 5m
		* Linear timing - 2m `Easy to understand, probably doesn't need 2 minutes`
		* Ease in and ease out - 3m `Requires more explanation and demonstration to show, use lab time`
	* Applying transitions to hover effects - 5m `This is the primary use for transitions in this course`
	* Applying transitions to page loading and transitions - 5m `This will make dApps look very good`

### CSS: Transitions Lab: - 10 minutes
* Add hover glowing effects to website landing page buttons

### CSS: Intro to Transform
* Intro to Transform
  * What is CSS Transform and why is it used?
  * Understanding the 2D and 3D coordinate systems
  * The syntax of the transform property
* 2D Transforms
  * Translate, Rotate, Scale, and Skew functions
  * Combining transform functions
  * Using transform-origin to control the pivot point
  * Backface-visibility

### Intro to Transform Lab: Fanning and Flipping Cards
* Create stack of 5 cards, one of top of the other. Only the top card is visible.
* When you click, the cards fan out as if you are holding a poker hand.
* When you click any of the fanned out cards, they flip to reveal the reverse side.

### Intro to 2D Transform Practice Exercises:
* Variety of exercises to work with the various transform functions learned today. Simpler exercises except maybe the last one or two.

## AFTERNOON SESSION

### Python: Choose Your Own Adventure Terminal RPG Game Development - 60 minutes
`This requires having a graph diagram of every scene in the game, and hard-coding a data structure that fills in all the graph nodes. It will be more tedious than most parts`
* Game Loading Module - 20m(?)
	* Phase 1: Construct all Scenes without connections and Scene data
		* This includes spawning enemy NPCs and loot
	* Phase 2: Connect all Scenes to each other
	* Phase 3: Set starting scene


# Day 5: CSS Transitions and Animations, CYOA Game Development Completion

## MORNING SESSION

## MORNING SESSION

### CSS: Combining Transformations


* Combining Transformations
  * Using transform-style to control the transformation of child elements
  * Nesting transforms and applying multiple transforms to an element
  * Advanced examples and use cases of combined transformations

### Combining Transformations Lab
* In the works

### Combining Transformations Practice Exercises
* In the works... 


### CSS: Animations - 20-25 minutes
* Animations
	* Animation syntax and keywords - 2m `Just a quick intro to important keywords for initiating an animation`
	* Using animations for hover effects - 3m `Students will already be primed for this topic from transitions`
	* Keyframe animations - 5m `This is basically a multi-stage transition, so it shouldn't be too hard to teach`
	* CSS animation properties - 6m `Lean on CSS Animation Properties diagram to save time`
		* Animation name and duration - 1m `This is pretty simple to understand`
		* Timing functions - 1m `Students are already primed from transitions`
		* Iteration count - 1m `This is pretty easy to understand`
		* Fill modes - 3m `This one requires live demonstration to understand, create a supplemental material for it`
		`CSS ANIMATION FILL MODES AND TIMING SUPPLEMENTAL MATERIAL`
	* Animation timing and easing - 3m `These should be the same as transitions`
	* Looping animations - 2m `Very easy and intuitive, doesn't need much to show`
  * Using animations for page loading - 3m `Build on transitions for page loading to make this faster`
	* Combining transitions with animations for more complex effects - 2m `Don't go too deep here, just a simple intro`
		* https://codepen.io/hjdesigner/pen/jvyJdX

	`CSS ANIMATION PROPERTIES DIAGRAM`

### CSS: Animations Lab: - 10 minutes
* Create a mock navigation bar that drops down using an ease-in and ease-out effect.

### CSS Transitions and Animations Practice:
* 10 simple exercises to teach transitions and basic animations
* Encourage students who want to learn more to follow this site's instructions:
	* https://coolcssanimation.com/

## AFTERNOON SESSION
### Python: Choose Your Own Adventure Terminal RPG Game Development







