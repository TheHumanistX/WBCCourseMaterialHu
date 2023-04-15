# Web Dev. III - Intro To CSS

## What is CSS?

* CSS (Cascading Style Sheets): A language that styles and formats HTML elements. It helps separate content from presentation, making web pages more visually appealing and easier to maintain.
* 
## The Box Model and Stylesheets

* Box Model: A fundamental concept in CSS that describes the rectangular layout of HTML elements, including content, padding, border, and margin. Each of these properties can be styled independently.
* Stylesheet: A file containing CSS rules. There are three ways to include styles:
    * Inline: `<p style="color:red;">Text</p>`
    * Internal: `<style>body { background-color: red; }</style>`
    * External: `<link rel="stylesheet" href="styles.css">`

## Hierarchy

* Cascading: Refers to the process of merging multiple styles and determining which style should be applied when conflicts arise. Styles are applied based on the order they appear in the code and their importance (e.g., !important).
* CSS Specificity: A set of rules that helps the browser decide which styles to apply when multiple rules target the same element. The basic hierarchy of specificity is: 
  * inline styles > ID selectors > class selectors > element selectors.
* Cascading example:
    ```css
    /* Second rule will override */
    p { color: red; }
    p { color: blue; }
    ```
* Specificity example:
    ```css
    /* More specific selector will take precedence */
    #special { color: red; }
    p { color: blue; }
    ```

## Page Layout Design

* Page layout design principles: Techniques for creating visually appealing layouts, including balance (symmetrical or asymmetrical), contrast (colors, sizes, shapes), consistency (repeated design elements), and alignment (grid-based layouts, vertical or horizontal alignment).
* Understanding grids: Grid systems provide a structure for organizing content on a web page, making it more readable and aesthetically pleasing. Grids often have columns and rows with consistent spacing (gutters) between them.
* The importance of white space: White space (empty space between elements) enhances readability, aesthetics, and overall design by giving the content room to breathe.
* How to use negative space: Negative space is the area surrounding a design element, which can be used to create visual interest, guide the viewer's eye, and direct attention to important content.

## Commenting in CSS

* Comments: Text in the code that provides explanations or descriptions. Comments are ignored by browsers and do not affect the rendering of the web page. CSS comments are enclosed in /* and */.

* Commenting in CSS Example:
    ```css
    /* This is a comment describing the following rule */
    body {
      background-color: white;
    }
    ```

### Two Good Resources
* Introducing W3Schools for CSS
  * https://www.w3schools.com/css/default.asp
* Introducing CSS Tricks
  * https://css-tricks.com/