# Day 3: Web Development: Introduction to the DOM and Basic React Concepts
## Lesson Objectives
By the end of this lesson, you should be able to:
* Understand the structure of the DOM and the relationship between elements and attributes.
* Traverse and manipulate the DOM using JavaScript, including accessing and modifying elements and attributes.
* Implement event handling in JavaScript using event listeners and respond to common events such as clicks, keyboard input, and form submission.

---

## Introduction to the DOM: structure, elements, and attributes

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document, such as an HTML or XML file, as a tree-like structure where each node in the tree represents a part of the document. The nodes in the DOM tree are called elements, and they can be accessed and manipulated using JavaScript.

In the DOM, elements are represented as objects, and these objects have properties and methods that you can use to interact with the elements. Elements can have attributes, which are additional information associated with the element, such as an id, class, or src attribute.

The DOM allows you to:

* Access elements and their attributes within a web page
* Modify elements and their attributes
* Add or remove elements from the DOM tree
* Create new elements and attributes
* Navigate and traverse the DOM tree

When you manipulate the DOM using JavaScript, the changes you make are reflected in the web page's appearance and behavior. This makes the DOM a powerful tool for creating dynamic and interactive web applications.

---

## DOM Traversal and Manipulation: accessing and modifying elements and attributes

DOM traversal refers to the process of navigating through the DOM tree to locate specific elements or groups of elements. JavaScript provides various methods to access and select elements in the DOM, allowing you to manipulate their content, attributes, and styling.

Here are some common methods for accessing elements:

* `getElementById(id)`: Access an element by its id attribute
* `getElementsByClassName(className)`: Access a collection of elements with a specific class name
* `getElementsByTagName(tagName)`: Access a collection of elements with a specific tag name
* `querySelector(selector)`: Access the first element that matches the given CSS selector
* `querySelectorAll(selector)`: Access a collection of elements that match the given CSS selector

Once you have accessed an element or a collection of elements, you can modify their content, attributes, and styling using various methods and properties:

* `innerHTML`: Get or set the HTML content of an element
* `innerText`: Get or set the text content of an element
* `setAttribute(attributeName, value)`: Set the value of an attribute
* `getAttribute(attributeName)`: Get the value of an attribute
* `removeAttribute(attributeName)`: Remove an attribute from an element
* `style`: Access the inline styles of an element

You can also add, remove, or replace elements in the DOM tree:

* `createElement(tagName)`: Create a new element with the specified tag name
* `appendChild(element)`: Add a new element as the last child of a parent element
* `insertBefore(newElement, referenceElement)`: Insert a new element before the reference element
* `replaceChild(newElement, oldElement)`: Replace an existing element with a new one
* `removeChild(element)`: Remove an element from the DOM tree

These methods allow you to traverse the DOM tree and manipulate elements and their attributes, enabling you to create dynamic and interactive web applications.

---

## Event handling: introduction to event listeners and common events

Events are actions or occurrences that happen in the browser, such as a user clicking on a button, a page finishing loading, or an element being updated. Event handling is the process of responding to these events using JavaScript code.

Event listeners are functions that "listen" for specific events to occur on an element and then execute a callback function when the event is detected. You can add event listeners to elements using the `addEventListener()` method:

    element.addEventListener(eventType, callbackFunction);

The `eventType` is a string representing the type of event to listen for, such as `'click'`, `'mouseover'`, or `'keydown'`. The `callbackFunction` is the function that will be executed when the event occurs.

Here are some common event types:

* `'click'`: Triggered when the user clicks on an element
* `'dblclick'`: Triggered when the user double-clicks on an element
* `'mousedown'`, 'mouseup': Triggered when the user presses/releases a mouse button over an element
* `'mousemove'`: Triggered when the user moves the mouse over an element
* `'mouseover'`, 'mouseout': Triggered when the mouse pointer enters/leaves an element
* `'keydown'`, 'keyup': Triggered when the user presses/releases a key on the keyboard
* `'submit'`: Triggered when a form is submitted
* `'load'`: Triggered when a resource (e.g., an image or the document) has finished loading
* `'resize'`: Triggered when the browser window is resized

Here's an example of adding a click event listener to a button:

    <button id="myButton">Click me!</button>

    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', () => {
        console.log('Button clicked');
    });

In this example, the event listener is attached to the button element, and when the button is clicked, the text "Button clicked" will be logged to the console.

Event handling allows you to create interactive web applications that respond to user actions, providing a more engaging user experience.

---

## Lesson Summary
In this lesson, we covered the following topics related to the DOM and event handling:

* **Introduction to the DOM:** We discussed the structure, elements, and attributes of the DOM, which is a tree-like representation of an HTML document used by browsers. The DOM allows JavaScript to interact with HTML elements and modify their properties and content.

* **DOM traversal and manipulation:** We learned how to access and modify elements and attributes in the DOM using JavaScript. We covered various methods such as `getElementById()`, `querySelector()`, `querySelectorAll()`, `innerHTML`, `textContent`, and `setAttribute()`.

* **Event handling:** We introduced event listeners and common events in JavaScript, which allow us to respond to user actions, such as clicks or keyboard input. We discussed how to add event listeners using the `addEventListener()` method and went over some common event types.

With the knowledge gained in this lesson, you will be able to interact with web pages more dynamically using JavaScript, allowing you to create more engaging and interactive user experiences.

---
---

# Introduction to React
## Lesson Objectives

By the end of this lesson, you should be able to:

* Understand the purpose of React and its benefits in modern web development.
* Set up a development environment for working with React.
* Learn the basic concepts of React, such as components, JSX, state, and props.
* Create simple React components and understand how to combine them to build a web application.
* Understand the React component lifecycle and how to use it to manage state and side effects.

---

## Introduction to React: What is React and why use it?
React is a popular JavaScript library developed and maintained by Facebook, specifically designed to build user interfaces for web applications. The main purpose of React is to make it easier to build, maintain, and update the UI of web applications by breaking it down into smaller, reusable components.

Before diving into React, it was essential to learn about the DOM and its traversal and manipulation techniques. The reason is that React builds upon the fundamental concepts of the DOM to provide a more efficient and powerful way to work with the structure of a web page.

Understanding the basics of DOM traversal and manipulation helps you to grasp how React interacts with the web page and streamlines the process of updating the UI based on the application's state. React improves upon these concepts by introducing a virtual DOM, which allows it to update only the necessary parts of the actual DOM, making the web application more performant and responsive.

In summary, learning DOM manipulation techniques was a necessary step to lay the foundation for understanding React and the way it simplifies and enhances web development. By using React, developers can focus on building reusable components, maintain a clean and organized codebase, and create a more performant and engaging user experience.

---

## Setting up the React Environment

In this section, we'll guide you through the process of setting up a React environment using NPM (Node Package Manager) and provide an overview of the typical structure of a React app.

### Creating a New React App

To create a new React app, you'll need to have Node.js and NPM installed on your machine. You can download Node.js from the official website (https://nodejs.org/) and NPM will be included with it. Once Node.js and NPM are installed, you can create a new React app using the following steps:

1. Open your terminal or command prompt and navigate to the folder where you want to create your React app (Remember: `cd` is the command to "change directory", `cd ..` will go up a level, `cd "some example directory"` will navigate down a level, and `dir` will list everything inside the current directory).
1. Run the command `npx create-react-app your-app-name`, replacing "your-app-name" with the desired name for your app. This command will create a new folder with the specified name and set up a basic React app template inside it.
1. Navigate into the newly created folder by running the command `cd your-app-name`.
1. Start the development server by running the command `npm start`. This will open your new React app in your default web browser, and it will automatically reload when you make changes to the code.

### React App Structure

When you create a new React app using the method above, it will come with a predefined folder structure. Here's a brief overview of the main folders and files:

* `public/`: This folder contains static assets like images, the `index.html` file, and the `manifest.json` file for configuring the app's appearance on mobile devices.
* `src/`: This folder contains the source code of your React app, including JavaScript, CSS, and other assets.
    * `App.js`: This is the main component of your app, and it's where you'll build your application's UI.
    * `index.js`: This file is the entry point of your app, and it's responsible for rendering the main App component.
    * `index.css`: This file contains global CSS styles for your app.
    * `App.css`: This file contains CSS styles specifically for the App component.
    * `App.test.js`: This file contains basic tests for the App component.
* `package.json`: This file contains metadata about your project, such as its name, version, and dependencies.

As you build your React app, you'll typically create new components inside the `src/` folder and import them into your main `App.js` component. Each component will have its own JavaScript and CSS files, making it easy to keep your code organized and maintainable.

In the next sections, we'll dive deeper into React components and learn how to build and manage them effectively.

---

## Building a Basic React App

In this section, we'll guide you through creating a basic React app that serves as a starting point for learning how React works. We'll explain the different pieces that a React app needs to function and highlight any syntax differences between React and plain JavaScript.
Creating a Simple React Component

A React app is made up of components, which are reusable and self-contained elements that represent parts of your UI. Let's create a simple component that displays a welcome message:

    In your src/ folder, create a new file called WelcomeMessage.js.

    Add the following code to WelcomeMessage.js:

import React from 'react';

    function WelcomeMessage() {
        return (
                <div>
                    <h1>Welcome to our React App!</h1>
                    <p>This is a simple example to help you learn React.</p>
                </div>
        );
    }

    export default WelcomeMessage;

This code defines a new React component called WelcomeMessage that renders a div containing an h1 and a p element. The component is a JavaScript function that returns JSX, which is a syntax extension for JavaScript that allows you to write HTML-like code inside your JavaScript code. Notice the use of the import and export statements, which enable you to use ES6 modules to organize and share code between components.
Adding the WelcomeMessage Component to App.js

Now that we have created the WelcomeMessage component, let's add it to our main App.js component:

    Open the App.js file in your src/ folder.

    Modify the App.js file to include the following code:

    import React from 'react';
    import './App.css';
    import WelcomeMessage from './WelcomeMessage';

    function App() {
        return (
                <div className="App">
                    <WelcomeMessage />
                </div>
        );
    }

    export default App;

In this modified App.js file, we import the WelcomeMessage component and include it in our JSX by adding <WelcomeMessage />. This demonstrates the reusability of React components.
Syntax Differences Between React and JavaScript

While working with React, you'll notice some syntax differences compared to plain JavaScript:

    JSX: As mentioned earlier, JSX is a syntax extension that allows you to write HTML-like code inside your JavaScript. It makes it easy to create and manage your UI components. Keep in mind that JSX must be compiled into JavaScript before it can run in the browser, which is handled automatically by the React build system.
    Curly braces ({}): In JSX, you can use curly braces to embed JavaScript expressions. For example, you can render variables or call functions inside JSX using this syntax: <p>{yourVariable}</p> or <p>{yourFunction()}</p>.
    Component naming: React components must be named using the PascalCase convention (e.g., MyComponent). This helps distinguish them from regular HTML elements in your JSX code.
    Props: Components can accept input through "props" (short for "properties"). Props are passed as attributes in JSX, similar to how you would set attributes on an HTML element. You can access props inside a component using the props object. For example, <WelcomeMessage message="Hello, World!" /> would pass a message prop to the WelcomeMessage component.

With this basic React app in place, you're ready to start learning more about React components, state management, and other core concepts.

## React Components and JSX

In this section, we'll provide a deeper understanding of React components and JSX. We'll clarify what JSX is, and provide various examples to help you see it in action. You can copy and paste these code samples into the lesson's React app example to see how JSX works.
What is JSX?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. JSX makes it easier to work with UI components by making the code more readable and visually similar to the resulting HTML. Under the hood, JSX is compiled into JavaScript, creating React elements that can be rendered in the browser.
JSX Examples

Here are some examples of JSX and explanations to help you understand how it works. You can add these examples to your React app by modifying the WelcomeMessage component in the WelcomeMessage.js file.

1. Embedding JavaScript expressions in JSX

You can use curly braces ({}) to embed JavaScript expressions within your JSX code. This allows you to display variables, perform calculations, or call functions directly in your JSX.

    function WelcomeMessage() {
        const name = "John Doe";
        const currentDate = new Date().toLocaleDateString();
        
        return (
                <div>
                    <h1>Welcome, {name}!</h1>
                    <p>Today's date is {currentDate}.</p>
                </div>
        );
    }

In this example, we define two variables, name and currentDate, and embed them in our JSX using curly braces. This allows us to display the variable values directly in our rendered HTML.

2. Rendering lists in JSX

To render a list of items in JSX, you can use the JavaScript map function to loop through an array and create a new JSX element for each item.

    function WelcomeMessage() {
        const colors = ["red", "green", "blue"];

        return (
                <div>
                    <h1>Color List:</h1>
                    <ul>
                            {colors.map((color) => (
                                <li key={color}>{color}</li>
                            ))}
                    </ul>
                </div>
        );
    }

In this example, we define an array of colors and use the map function to generate an li element for each color in the array. Note the use of the key attribute, which is required when rendering lists in React to help with efficient updates and re-rendering.

3. Conditional rendering in JSX

You can use JavaScript ternary operators or logical && operators to conditionally render JSX elements based on certain conditions.

    function WelcomeMessage() {
        const isRegistered = true;

        return (
                <div>
                    <h1>Welcome!</h1>
                        {isRegistered ? (
                            <p>You are registered for the event.</p>
                    ) : (
                            <p>Please register for the event.</p>
                    )}
                </div>
        );
    }

In this example, we define a boolean variable isRegistered and use a ternary operator to conditionally render a message based on whether the user is registered or not. If isRegistered is true, the "You are registered" message will be displayed; otherwise, the "Please register" message will be shown.

These examples demonstrate how JSX allows you to write more intuitive and maintainable code for your UI components, and how it seamlessly integrates with your JavaScript code.

## State Management and Props

In this section, we'll discuss React hooks, what "state" refers to in a React component, and how state management and props work in React. We'll provide code samples that you can copy and paste into the example React app to see these concepts in action.
React Hooks

React hooks are functions that allow you to "hook" into React state and lifecycle features from function components. They were introduced in React 16.8 and enable you to use state and other React features without having to write a class component.
State in React Components

In React, "state" refers to the data that a component manages and can change over time. State is local and private to the component that manages it. When a component's state changes, React re-renders the component and updates the UI accordingly.
State Management with useState Hook

To use state in a function component, you can use the useState hook. The useState function returns an array with two elements: the current state value and a function to update the state value.

Here's an example of using the useState hook to manage a counter state in the example React app:

import React, { useState } from 'react';

    function Counter() {
        const [count, setCount] = useState(0);

        return (
                <div>
                    <p>Current count: {count}</p>
                    <button onClick={() => setCount(count + 1)}>Increase</button>
                </div>
        );
    }

State Management and Props

In this section, we'll discuss React hooks, what "state" refers to in a React component, and how state management and props work in React. We'll provide code samples that you can copy and paste into the example React app to see these concepts in action.
React Hooks

React hooks are functions that allow you to "hook" into React state and lifecycle features from function components. They were introduced in React 16.8 and enable you to use state and other React features without having to write a class component.
State in React Components

In React, "state" refers to the data that a component manages and can change over time. State is local and private to the component that manages it. When a component's state changes, React re-renders the component and updates the UI accordingly.
State Management with useState Hook

To use state in a function component, you can use the useState hook. The useState function returns an array with two elements: the current state value and a function to update the state value.

Here's an example of using the useState hook to manage a counter state in the example React app:

javascript

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

In this example, we import useState from 'react' and use it to manage the count state. We initialize the state with a value of 0, and then use the setCount function to update the state when the "Increase" button is clicked.
Props in React Components

Props, short for "properties", are a way to pass data from a parent component to a child component. Props are read-only and should not be modified by the child component. They allow for a more modular and reusable component structure.

Here's an example of using props to pass data from a parent component to a child component in the example React app:

    // ParentComponent.js
    import React from 'react';
    import ChildComponent from './ChildComponent';

    function ParentComponent() {
        const message = 'Hello from the parent component!';

        return (
                <div>
                    <h1>Parent Component</h1>
                    <ChildComponent message={message} />
                </div>
        );
    }

    // ChildComponent.js
    import React from 'react';

    function ChildComponent(props) {
        return (
                <div>
                    <h2>Child Component</h2>
                    <p>{props.message}</p>
                </div>
        );
    }

In this example, we have a ParentComponent and a ChildComponent. The ParentComponent passes a message prop to the ChildComponent. The ChildComponent then uses the props object to access the message prop and render its value.

These examples demonstrate how state management and props work in React, allowing you to create more dynamic and interactive UI components that respond to user input and changes in data.


























