# Intro to the DOM and Event Handling
Here's a simple HTML/CSS file you can use as a base for creating JavaScript event listeners and common event exercises, which includes a button and a paragraph. You can use this as a starting point to create exercises that involve adding event listeners for common events such as click and mouseover events. Save this HTML file as `index.html` and start a live server for it.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Event Listeners Exercise</title>
        <style>
            body {
                font-family: Arial, sans-serif;
            }

            button {
                background-color: #4CAF50;
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }

            p {
                font-size: 18px;
            }
        </style>
    </head>
    <body>
        <h1>Event Listeners Exercise</h1>
        <button id="myButton">Click me!</button>
        <p id="myParagraph">This is a paragraph. Hover over me!</p>

        <script>
            // Add your JavaScript event listeners and common events here
        </script>
    </body>
    </html>

## Accessing and Modifying DOM Elements and Attributes
### Accessing Elements and Attributes
Here are 5 exercises for accessing elements and attributes on the HTML page using JavaScript:

1. Access the button element with the ID "myButton" and store it in a variable named buttonElement.
1. Access the paragraph element with the ID "myParagraph" and store it in a variable named paragraphElement.
1. Access all the p elements on the page and store them in a variable named allParagraphs.
1. Get the textContent of the paragraphElement and store it in a variable named paragraphText.
1. Get the id attribute of the buttonElement and store it in a variable named buttonId.

### Modifying Elements and Attributes
Here are 5 exercises for modifying elements and attributes on the HTML page using JavaScript:

1. Change the textContent of the paragraphElement to "This is the new paragraph text."
1. Add a new h2 element with the text "New Heading" to the page using JavaScript.
1. Change the backgroundColor style property of the buttonElement to "red".
1. Add a new attribute data-custom with the value "example" to the paragraphElement.
1. Remove the id attribute from the buttonElement.

### DOM Traversal and Manipulation
Here are 5 exercises to practice DOM traversal and manipulation with JavaScript:

1. Create a new ul element, then create 3 li elements with the text "Item 1", "Item 2", and "Item 3". Append the li elements to the ul, then append the ul to the body of the HTML document.
1. Select the first li element in the ul you created in the previous exercise and store it in a variable named firstItem.
1. Select the last li element in the ul you created in exercise 1 and store it in a variable named lastItem.
1. Create a new li element with the text "Item 4" and insert it after the lastItem in the ul.
1. Remove the firstItem from the ul.

## Event Listeners and Handlers
Here's a code sample to add to the previous HTML/CSS file for practicing event listeners. This sample includes a button, an input field, and a form with a submit button. Save this HTML code as `index2.html`, dispose of your previous live server, and start a new live server with it.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Event Handling Practice</title>
        <style>
            body {
                font-family: Arial, sans-serif;
            }
        </style>
    </head>
    <body>
        <h1>Event Handling Practice</h1>

        <button id="clickButton">Click me!</button>
        <p id="clickMessage"></p>

        <br>

        <label for="inputField">Type something:</label>
        <input type="text" id="inputField" />
        <p id="inputMessage"></p>

        <br>

        <form id="myForm">
            <label for="formInput">Form input:</label>
            <input type="text" id="formInput" />
            <button type="submit">Submit</button>
        </form>
        <p id="formMessage"></p>

        <script>
            // Add your JavaScript event handling code here
        </script>
    </body>
    </html>

### Event Listeners

1. Add an event listener to the button with the ID "clickButton" that logs a message to the console when the button is clicked.
1. Add an event listener to the input field with the ID "inputField" that displays the text entered by the user in the paragraph with the ID "inputMessage".
1. Add an event listener to the form with the ID "myForm" that prevents the form from being submitted and instead displays the form input value in the paragraph with the ID "formMessage".
1. Modify the event listener for the "clickButton" to change the background color of the button when it is clicked.
1. Add an event listener to the input field with the ID "inputField" that changes the text color of the input field when the user presses a key.
1. Add an event listener to a button that changes its text content when clicked.
1. Add an event listener to an input field that counts the number of characters entered and displays the count in a paragraph.
1. Add an event listener to a form that validates if the entered email address is in the correct format before submission.
1. Add an event listener to a button that toggles the visibility of a paragraph when clicked.
1. Add an event listener to an input field that prevents the user from entering more than 10 characters.
1. Add an event listener to a button that creates and adds a new list item to an unordered list when clicked.
1. Add an event listener to a form that displays a success message in a paragraph after the form is submitted.
1. Add an event listener to an input field that changes the background color of the field when it is focused.
1. Add an event listener to a button that removes a specific element from the DOM when clicked.
1. Add an event listener to a form that stores the form data in an object when submitted.

Here are 5 bonus exercises for JavaScript event handling:

1. Add an event listener to a button that changes the size and color of a div element when clicked, and restores the original size and color when clicked again.
1. Add an event listener to an input field that displays an error message if the entered value is not a number.
1. Add an event listener to a button that sorts the elements of a list alphabetically when clicked.
1. Add an event listener to a form that displays a progress bar and updates it based on the percentage of fields filled in the form.
1. Add an event listener to an image that displays the image's caption in a paragraph when the mouse hovers over the image, and hides the caption when the mouse leaves the image.

---
---

# Intro to jQuery: Syntax and Form Handling
## jQuery Selectors
Here are 10 exercises that use the HTML page from the previous lesson, focusing on jQuery selectors to target elements on the page:

1. Using jQuery, select all paragraphs and change their font size to 18 pixels.
1. Using jQuery, select a button with a specific ID and change its background color to blue when clicked.
1. Using jQuery, select all input fields with a specific class and add a red border to them.
1. Using jQuery, select the first list item in an unordered list and change its text color to green.
1. Using jQuery, select an image with a specific attribute value and change its width to 200 pixels.
1. Using jQuery, select all even rows in a table and change their background color to light gray.
1. Using jQuery, select a specific div element and add a new paragraph with text content inside it.
1. Using jQuery, select all elements with a specific data attribute and hide them.
1. Using jQuery, select all checkboxes in a form and uncheck them when a button is clicked.
1. Using jQuery, select a specific element using a combination of tag, class, and attribute selectors, and change its font style to italic.

## jQuery Chaining
Here are 5 exercises that use chaining in jQuery to interact with the HTML page from the previous lesson:

1. Using jQuery and chaining, select all paragraphs, change their font size to 18 pixels, and set their text color to red.
1. Using jQuery and chaining, select a specific div element, add a new paragraph with text content inside it, and change the background color of the div to light blue.
1. Using jQuery and chaining, select all list items in an unordered list, change their font weight to bold, and set their text color to green.
1. Using jQuery and chaining, select a button with a specific ID, change its background color to blue when clicked, and disable the button after it has been clicked.
1. Using jQuery and chaining, select all even rows in a table, change their background color to light gray, and set their font size to 14 pixels.

## Forms and Inputs
Here's an extension of the previous lesson's HTML that includes a form and inputs. Save this to a new HTML file called `index3.html` and restart your live server.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>jQuery Form Exercises</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <body>
        <h1>Registration Form</h1>
        <form id="registration-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br><br>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br><br>

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required><br><br>

                <label for="age">Age:</label>
                <input type="number" id="age" name="age" required><br><br>

                <label for="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select><br><br>

                <input type="submit" value="Submit">
        </form>
        <script>
            // Add your jQuery code here
        </script>
    </body>
    </html>

## Storing and Retrieving Data
Here are 15 exercises involving storing and retrieving data from forms and inputs with jQuery using methods like `.val()`, `.prop()`, and `.attr()`:

1. Retrieve the value of the "Name" input field using the `.val()` method and display it in an alert.
1. Change the value of the "Email" input field to "test@example.com" using the `.val()` method.
1. Use the `.prop()` method to check if the "Password" input field has the required property.
1. Use the `.attr()` method to add a placeholder attribute with the text "Enter your name" to the "Name" input field.
1. Retrieve the value of the "Age" input field using the `.val()` method, and display it in the browser console.
1. Set the value of the "Gender" dropdown to "Female" using the `.val()` method.
1. Use the `.prop()` method to remove the required property from the "Age" input field.
1. Use the `.attr()` method to change the type attribute of the "Password" input field to "text".
1. Retrieve the value of the for attribute of the "Name" label using the `.attr()` method, and display it in an alert.
1. When the form is submitted, use the `.val()` method to retrieve the values of all the input fields and display them in the browser console. Prevent the default form submission behavior.
1. Use the `.prop()` method to disable the "Submit" button.
1. Use the `.attr()` method to set a min attribute with a value of "18" for the "Age" input field.
1. When the "Age" input field loses focus, check if the entered value is less than 18. If so, display an alert saying that the user must be at least 18 years old.
1. Use the `.val()` method to clear the values of all input fields when the form is submitted. Prevent the default form submission behavior.
1. Use the `.attr()` method to add a pattern attribute to the "Password" input field, ensuring that the password entered has at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number.














