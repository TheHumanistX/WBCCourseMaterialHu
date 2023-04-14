# Day 4 Exercises
## Adding, Removing, Modifying Elements
### Source Code: index.html
Use the following HTML file for these exercises:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>jQuery DOM Manipulation Exercises</title>
        <style>
            body {
                font-family: Arial, sans-serif;
            }
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 50px;
            }
            ul {
                list-style-type: none;
                padding: 0;
            }
            li {
                margin: 10px 0;
                padding: 10px;
                border: 1px solid #ccc;
                width: 200px;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Task List</h1>
            <ul id="task-list">
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
                <li>Task 4</li>
            </ul>
        </div>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script>
            // Add your jQuery code here
        </script>
    </body>
    </html>

This template includes a simple task list in a `<ul>` element. You can use this as a starting point for practicing jQuery methods to add, remove, and modify elements. Save this code to a new file called `index.html`, and start a new live server. Then, you'll be ready to begin the exercises.

### jQuery Adding, Removing, and Modifying Elements

Here are 10 exercises for adding, removing, and modifying elements with jQuery methods:

1. Add a new task item to the end of the task list with the text "Task 5".
1. Remove the first task item from the task list.
1. Change the text of the second task item to "Completed Task 2".
1. Add a new task item to the beginning of the task list with the text "Task 0".
1. Add a CSS class "completed" to all task items with the text "Completed Task 2". The "completed" class should have a text-decoration: line-through style.
1. Remove all task items with the "completed" class.
1. Create a new task item with the text "Task 6" and insert it after "Task 3".
1. Create a new task item with the text "Task 2.5" and insert it before "Task 3".
1. Wrap each task item in a <div> element with a class "task-container".
1. Change the background color of every odd task item to light gray.

Here are 10 additional--and very similar--exercises for adding, removing, and modifying elements with jQuery methods:

1. Add a new list item to the end of the unordered list with the text "Item 5".
1. Remove the first list item from the unordered list.
1. Change the text of the second list item to "Updated Item 2".
1. Add a new list item to the beginning of the unordered list with the text "Item 0".
1. Add a CSS class "highlighted" to all list items with the text "Updated Item 2". The "highlighted" class should have a font-weight: bold style.
1. Remove all list items with the "highlighted" class.
1. Create a new list item with the text "Item 6" and insert it after "Item 3".
1. Create a new list item with the text "Item 2.5" and insert it before "Item 3".
1. Wrap each list item in a <div> element with a class "list-container".
1. Change the background color of every odd list item to light gray.

## jQuery Event Handling
### Source Code: index2.html
For these exercises, create a new HTML file called `index2.html`, copy-paste the following code into it, and restart your live server:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>jQuery Event Handling Exercises</title>
        <style>
            .highlighted {
                font-weight: bold;
            }
            .list-container {
                display: inline-block;
                padding: 5px;
            }
            .bg-lightgray {
                background-color: lightgray;
            }
            button {
                margin-bottom: 10px;
            }
        </style>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <body>
        <h1>Event Handling with jQuery</h1>
        <button id="btnClick">Click me!</button>
        <button id="btnHover">Hover over me!</button>
        <input type="text" id="inputKey" placeholder="Type something here">
        <ul>
            <li class="list-item">Item 1</li>
            <li class="list-item">Item 2</li>
            <li class="list-item">Item 3</li>
            <li class="list-item">Item 4</li>
        </ul>
        <script>
            // Add your jQuery code here
        </script>
    </body>
    </html>

This extended HTML file includes buttons and an input field for creating exercises involving jQuery event handling, such as click events, hover events, and keyboard events.

### Event Handling

Here are 10 exercises for jQuery event handling using the HTML file I provided earlier:

1. Create an event listener that highlights the `<h1>` element when the "Click me!" button is clicked. Use the `toggleClass()` method to toggle the highlighted class.

1. Create an event listener that toggles the `bg-lightgray` class on the "Hover over me!" button when the mouse pointer is over the button.

1. Create an event listener that listens for the `keyup` event on the input field and alerts the user with the current input value.

1. Create an event listener that changes the background color of the page to a random color when the "Click me!" button is double-clicked.

1. Create an event listener that hides the input field when the "Hover over me!" button is right-clicked. (Hint: Use the `contextmenu` event.)

1. Create an event listener that displays the index of a list item in an alert box when it is clicked.

1. Create an event listener that listens for the focus and blur events on the input field and changes its border color to green when focused and red when not focused.

1. Create an event listener that appends a new list item to the unordered list when the "Click me!" button is clicked.

1. Create an event listener that removes the last list item from the unordered list when the "Hover over me!" button is clicked.

1. Create an event listener that listens for the keydown event on the input field and prevents the user from entering numbers. (Hint: Use the event.preventDefault() method.)

### Keyboard and Mouse Events
Here are 10 exercises for handling keyboard and mouse events in jQuery:

1. Create an event listener that shows an alert when the Enter key is pressed in the input field.

1. Create an event listener that changes the text of the `<h1>` element to the current input value when the Enter key is pressed in the input field.

1. Create an event listener that clears the input field when it is clicked.

1. Create an event listener that makes the "Click me!" button change color when the mouse pointer is over it.

1. Create an event listener that listens for the `mousemove` event on the page and displays the current mouse coordinates in a `<span>` element.

1. Create an event listener that listens for the `mousedown` and `mouseup` events on the "Click me!" button and changes the button's text to "Mouse down!" and "Mouse up!" accordingly.

1. Create an event listener that listens for the `mouseleave` event on the "Hover over me!" button and resets the button's background color.

1. Create an event listener that listens for the `keypress` event on the input field and only allows the user to enter lowercase letters.

1. Create an event listener that listens for the `wheel` event on the unordered list and changes the font size of the list items based on the `wheel` scroll direction.

1. Create an event listener that listens for the `copy` event on the input field and shows an alert to inform the user that copying text is not allowed.

---
---

## Form Validation and User Interaction
### Source Code: index3.html
For these exercises, create a new HTML file called index3.html, copy-paste the code below, and restart your live server:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Validation</title>
        <style>
            .error {
                color: red;
            }
        </style>
    </head>
    <body>
        <form id="registrationForm">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <span class="error" id="usernameError"></span>
            <br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <span class="error" id="emailError"></span>
            <br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <span class="error" id="passwordError"></span>
            <br>

            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>
            <span class="error" id="confirmPasswordError"></span>
            <br>

            <input type="submit" value="Register">
        </form>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script>
            // jQuery and form validation code will go here
        </script>
    </body>
    </html>

This HTML file contains a registration form with username, email, password, and confirm password fields. Each field has a corresponding error message span with a class of "error". You can use this file to practice form validation using JavaScript and jQuery techniques.

### Form Validation Exercises
The following exercises will challenge your form validation skills in JavaScript:

1. Write a jQuery function that checks if the username field is empty on form submission. If it is empty, display an error message "Username is required" in the corresponding error span.

1. Write a jQuery function that checks if the password field is empty on form submission. If it is empty, display an error message "Password is required" in the corresponding error span.

1. Write a jQuery function that checks if the confirm password field is empty on form submission. If it is empty, display an error message "Please confirm your password" in the corresponding error span.

1. Write a jQuery function that checks if the password and confirm password fields match on form submission. If they don't match, display an error message "Passwords do not match" in the confirm password error span.

1. Write a jQuery function that checks if the username field contains any special characters or spaces on form submission. If it does, display an error message "Username can only contain letters and numbers" in the corresponding error span.

1. Write a jQuery function that checks if the password field contains at least one uppercase letter, one lowercase letter, and one number on form submission. If it doesn't, display an error message "Password must contain at least one uppercase letter, one lowercase letter, and one number" in the corresponding error span.

1. Write a jQuery function that checks if the password field is at least 8 characters long on form submission. If it's not, display an error message "Password must be at least 8 characters long" in the corresponding error span.

1. Write a jQuery function that removes any error messages displayed when the user starts typing in the corresponding input field.

1. Combine all the validation functions into a single function that runs on form submission. If any validation errors are found, prevent the form from submitting and display the appropriate error messages. If there are no validation errors, display a success message to the user.














