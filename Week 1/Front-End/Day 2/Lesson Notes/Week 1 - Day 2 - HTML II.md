# HTML II - Grouping Elements, Forms
## Grouping Elements

* Grouping Elements: Used to organize content and improve structure.

    * div: Generic container, non-semantic. <div></div>
    * section: Groups related content, semantic. <section></section>
    * header: Contains intro or navigation, semantic. <header></header>
    * nav: Contains navigation links, semantic. <nav></nav>
    * main: Contains main content, semantic. <main></main>
    * footer: Contains footer info, semantic. <footer></footer>
 
### Applying Styles: Used for inline styling.
span: Inline container, non-semantic. <span style="color:red;"></span>
Horizontal Rule: Represents a thematic break.
hr: Creates a horizontal line. <hr>

## Forms

* Creating Forms: Used to collect user input.
  * form: Container for form elements. 
    * `<form></form>`
* Labeling Form Inputs: Provides labels for inputs.
    * label: Describes input, improves accessibility. 
        * `<label for="inputID">Label</label>`
    * for/id attributes: Associates label with input. 
        * `<input id="inputID">`
* Input Types: Various types of input fields.
    * Text: Single-line text input. 
        * `<input type="text" name="name" placeholder="Enter your name">`
    * Email: Input for email addresses. 
        * `<input type="email" name="email">`
    * Password: Hides input text. 
        * `<input type="password" name="password" minlength="8" maxlength="16">`
    * Required: Makes input mandatory. 
        * `<input type="text" name="requiredField" required>`
    * Checkbox: Allows multiple selections. 
        * `<input type="checkbox" name="option1" value="1">`
    * Radio Button: Allows single selection. 
        * `<input type="radio" name="optionGroup" value="option1">`
    * Date/Time: Input for date or time. 
        * `<input type="date" name="date">`
    * Textarea: Multi-line text input. 
        * `<textarea rows="4" cols="50"></textarea>`
    * Submit: Sends form data. 
        * `<input type="submit" value="Submit">`
    * Reset: Resets form fields. 
        * `<input type="reset" value="Reset">`
    * Dropdown Menus: Allows single or multiple selection.
      * select: Container for options. 
        * `<select name="options">`
      * option: dropdown choices. 
        * `<option value="option1">Option 1</option>
        * </select>`
    * Button: Creates clickable buttons.
      * Button: 
        * `<button type="button">Click me!</button>`
* Form Attributes: Determines form behavior.
    * action: Specifies URL for form submission. 
        * `<form action="/submit-url">`
    * method: Specifies HTTP method. 
        * `<form method="POST">`
        * `<form method="GET">`
          * GET vs. POST: 
            * GET appends data to URL.
              * Less secure .
              * Will show all submitted data in address bar on submission. 
              * Not good for forms with sensitive data.
            * POST sends data in request body and is the more secure option.
