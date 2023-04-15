# CSS V - CSS Reset, CSS Combinators, CSS Pseudoclasses

## CSS Reset

### Why CSS Reset? What is it?

* CSS Reset is a technique to neutralize browser-default styles, ensuring a consistent look across different browsers.
* It helps web developers create consistent designs and avoid unexpected styling issues due to browser inconsistencies.
* By resetting the styles, developers can define their own baseline styling without worrying about built-in browser styles affecting their design.

### Browser Default Styles

* Browsers have built-in default styles that can vary, causing inconsistencies in design.
* Default styles can include different font sizes, margins, and padding, which can lead to inconsistent designs across browsers.
* Some browser styles are more aggressive than others, causing certain elements to look significantly different without a CSS reset.

### CSS Reset

* What is a CSS Reset? 
  * A set of CSS rules that reset or override browser-default styles to provide a consistent baseline.
* Why use a CSS Reset? 
  * To achieve a consistent look and feel across different browsers and devices, providing a clean slate for styling.


## Nesting, Combinators, Pseudoclasses

### Nesting selectors

Writing selectors inside other selectors to target specific elements within a parent element.
Increases specificity, helps organize styles in a more modular way, and can make stylesheets more readable.
Example:
```css
.container {
  .button {
    background-color: blue;
  }
}
```

Note: Be cautious of overly nested selectors, as they can lead to increased specificity and difficulty in overriding styles. Maintain a balance between nesting and specificity for optimal maintainability.

## CSS Combinators

Combinators are used to specify relationships between selectors, enabling developers to target elements based on their location in the document hierarchy.

* Types of combinators:
    * Descendant combinator (space): Selects element(s) that is a/are descendant of another element.
```css
div p { color: blue; }
```
   * Child combinator (>): Selects element(s) that is a/are direct child of another element.
```css
div > p { color: red; }
```

   * Adjacent sibling combinator (+): Selects element(s) that is an/are immediate sibling of another element.
```css
h1 + p { font-size: 1.2rem; }
```

   * General sibling combinator (~): Selects element(s) that is a/are sibling of another element, regardless of their position in the sibling sequence.
```css
h1 ~ p { margin-top: 2rem; }
```


## Pseudoclasses

Pseudoclasses are used to apply styles to elements based on their state, position in the document, or other dynamic factors.
They allow developers to create interactive and dynamic styling effects without the need for JavaScript.
Pseudoclasses are powerful tools for creating accessible, responsive, and user-friendly designs.

* :hover - Applies styles to an element when the user hovers over it with the cursor.
```css
a:hover { text-decoration: underline; }
```

* :active - Applies styles to an element when it's being actively clicked or interacted with.

```css
button:active { background-color: red; }
```

* :focus - Applies styles to an element when it receives focus, such as when a user clicks on an input field or navigates to it with the Tab key.

```css
input:focus { outline-color: blue; }
```

* :link, :visited - Apply styles to unvisited (:link) or visited (:visited) hyperlink elements.

```css
a:link { color: blue; }
a:visited { color: purple; }
```

* :target - Applies styles to an element that is the target of a URL fragment identifier.

```css
#section:target { background-color: yellow; }
```

* :enabled, :disabled - Apply styles to enabled or disabled form elements, such as buttons or input fields.

```css
input:enabled { background-color: white; }
input:disabled { background-color: gray; }
```

* :checked - Applies styles to form elements that are checked, such as checkboxes or radio buttons.

```css
input:checked { background-color: blue; }
```

* :required, :optional - Apply styles to required or optional form elements.

```css
input:required { border-color: red; }
input:optional { border-color: green; }
```

* :first-child, :last-child - Apply styles to the first or last child element within a parent element.

```css
li:first-child { font-weight: bold; }
li:last-child { font-style: italic; }
```

* :nth-child, :nth-last-child - Apply styles to elements based on their position in a sequence of children.

```css
li:nth-child(2) { color: red; }
li:nth-last-child(2) { color: blue; }
```

* :first-of-type, :last-of-type - Apply styles to the first or last element of a specific type within a parent element.

```css
p:first-of-type { font-weight: bold; }
p:last-of-type { font-style: italic; }
```

* :nth-of-type, :nth-last-of-type - Apply styles to elements of a specific type based on their position in a sequence of children.

```css
p:nth-of-type(2) { color: red; }
p:nth-last-of-type(2) { color: blue; }
```

