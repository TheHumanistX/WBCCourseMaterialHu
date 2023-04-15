# CSS III - Padding, Margin, Borders, Shadows, Units of Measure, Wrappers and Containers, Display and Positioning, Box Sizing

## Padding and Margin

### Uses of Padding and Margin

* Padding: Space between the content and the border of an element, used to separate the content from its border.
  * Example:
    ```css
    p {
      padding: 10px;
    }
    ```

* Margin: Space between the border of an element and the surrounding elements, used to create space around elements.
* Example:
    ```css
    h1 {
      margin: 20px 0;
    }
    ```


### Margin auto for alignment

* Center-align block elements horizontally by setting equal left and right margins to 'auto'.
* Example:
    ```css
    .center {
        margin: 0 auto;
    }
    ```


### Padding and Margin and the Box Model

* Box Model: A layout model that defines how space is distributed around elements.
* Components: content, padding, border, margin
* Importance: Understanding the box model helps create consistent layouts and manage space effectively, avoiding layout issues and improving the user experience.

### Things to remember to avoid problems with CSS

* Consider the box model when adding padding and margins, ensuring elements don't unintentionally overlap or create undesired layout effects.
* Use the appropriate units of measurement for different scenarios.
* Be aware of margin collapse and learn how to prevent or work with it.

### Margin Collapse

* Occurs when the top and bottom margins of adjacent elements collapse into a single margin, which takes the larger of the two values.
* Prevent margin collapse by using padding, border, or by applying overflow: auto; to the parent element.

## Borders

### Border Width, Style, and Color

* Set the width, style, and color of an element's border individually or using shorthand.
  * Style can be solid, dotted, dashed, etc.
  * Example:
    ```css
    .element {
        border: 3px solid blue;
    }
    ```


### Border Radius

* Create rounded corners on an element's border by specifying the radius of curvature.
    * Example:
    ```css
    .rounded {
        border-radius: 10px;
    }
    ```
* Supports individual corner values and elliptical borders.



## Shadows

### box-shadow

* Apply a shadow to an element's box, providing horizontal and vertical offsets, blur radius, spread radius, and color.
    * Example:
    ```css
    .box {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    ```
* Multiple box-shadows can be applied to a single element.



### inset

* Create an inner shadow by adding the inset keyword to the box-shadow property.
* Useful for creating depth or simulating inner borders.
  * Example:
    ```css
    .inner-shadow {
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    ```



## Units of Measurement

### Absolute Units

* px: Pixels, common for screen-based design, relative to the display resolution.
  * Example:
    ```css
    .pixel {
        font-size: 16px;
    }
    ```
* pt: Points, common for print design, relative to the print resolution.
* mm, cm, in: Millimeters, centimeters, inches, common for print design, relative to real-world measurements.

### Relative Units

* rem: Relative to the font-size of the root element, useful for consistent scaling across the entire document.
    * Example:
    ```css
    .rem {
        font-size: 1.2rem;
    }
    ```
* em: Relative to the font-size of the parent element, useful for scaling within a specific context.
    * Example:
    ```css
    .em {
      font-size: 1.1em;
    }
    ```
* vw, vh: Relative to viewport width and height, useful for responsive design and fluid layouts.
    * Example:
    ```css
    .viewport {
      width: 80vw;
      height: 50vh;
    }
    ```
* vmin, vmax: Relative to the smaller/larger dimension of the viewport, useful for maintaining aspect ratios and creating responsive designs.
    * Example:
    ```css
    .vmin-vmax {
      width: 50vmin;
      height: 40vmax;
    }
    ```

### Best practices for unit selection

* Use relative units (e.g., rem, em) for responsive design, as they scale with the user's preferences and device settings.
* Use absolute units (e.g., px, pt) for fixed-size elements or when precise control over dimensions is required, such as in print design or specific interface components.

## Wrappers and Containers

### The role of containers in layouts

* Group and structure content, making it easier to apply styles and manage the layout of a page.
* Containers can be used to create grid systems or apply consistent styles and spacing to related elements.

### Nesting and specificity

* Nesting containers can create hierarchy and structure within a layout.
* Be mindful of CSS specificity when applying styles to nested elements to ensure the correct styles are applied in the intended order.

## Layouts and Positioning

### Display Properties

* block: Elements that take up the full width of their parent container, stacking vertically.
    * Example:
    ```css
    a {
        display: block;
    }
    ```
* inline: Elements that take up only the necessary width and stack horizontally within a line of text.
    * Example:
    ```css
    div {
        display: inline;
    }
    ```
* inline-block: Elements that behave like inline elements but allow for width and height adjustments.
    * Example:
    ```css
    div {
        display: inline-block;
    }
    ```

### Position Properties

* static: Default position value; elements follow the normal flow of the document.
* relative: Elements are positioned relative to their normal position, without affecting the position of other elements.
    * Example:
    ```css
    .relative {
        position: relative;
        top: 10px;
        left: 20px;
    }
    ```

* absolute: Elements are positioned relative to the nearest positioned ancestor, removed from the normal flow.
    * Example:
    ```css
    .absolute {
        position: absolute;
        top: 30px;
        right: 40px;
    }
    ```

* fixed: Elements are positioned relative to the browser window, remaining in place when scrolling.
    * Example:
    ```css
    .fixed {
      position: fixed;
      bottom: 10px;
      left: 20px;
    }
    ```

* sticky: Elements are positioned based on the user's scroll position, behaving like a combination of relative and fixed positioning.
    * Example:
    ```css
    .sticky {
      position: sticky;
      top: 0;
    }
    ```

* left, right, top, bottom properties: Used to specify the position of an element when using relative, absolute, fixed, or sticky positioning.
    * Example:
    ```css

    ```


## Floats

* Float: property that allows an element to be pushed to the left or right of its container, enabling other content to wrap around it. 
  * Example:
    ```css
    img {
      float: left;
    }    
    ```
* Clearing: Clear floated elements using the clear property to control the flow of content.
  * Example:
    ```css
    p {
        clear: left
    }
    ```
* Useful in certain situations only: Floats were initially used for layout, but modern techniques like Flexbox and CSS Grid are now preferred. Floats are still useful for wrapping text around images or other small elements.

## Z-index
* Z-Index: CSS property that controls the stacking order of overlapping elements on a web page. It only applies to positioned elements (relative, absolute, fixed, or sticky). Elements with a higher z-index value will appear on top of elements with lower values. By default, elements have a z-index value of "auto," which translates to 0.
  * Example:
    ```css
    .element-1 {
      position: absolute;
      z-index: 1;
    }
    .element-2 {
      position: absolute;
      z-index: 2;
    }    
    ```

* Stacking Context: Concept in CSS that determines the order in which elements overlap each other on a webpage. A new stacking context is created when an element has a z-index other than "auto" and a position value other than "static." Elements within a stacking context are ordered based on their z-index values. If elements share the same stacking context, the one with the higher z-index appears on top. When elements have different stacking contexts, the entire context is compared, meaning a higher z-index value in a parent context takes precedence over any z-index value in a child context, regardless of the specific values.

## Box Sizing

* Content-box: Default box-sizing model. Width and height properties only affect the content area, not padding, border, or margin.
    * Example:
    ```css
    .content-box {
      box-sizing: content-box;
      width: 100px;
      padding: 10px;
      border: 5px solid black;
    }
    ```
* Border-box: Alternative box-sizing model. Width and height properties include content, padding, and border (but not margin).
    * Example:
    ```css
    .border-box {
      box-sizing: border-box;
      width: 100px;
      padding: 10px;
      border: 5px solid black;
    }
    ```