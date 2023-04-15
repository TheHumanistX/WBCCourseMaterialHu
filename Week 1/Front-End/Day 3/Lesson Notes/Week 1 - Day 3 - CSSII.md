# CSS II: Stylesheets, Selectors, Specificity

## External Stylesheets vs. Internal Styling vs. Inline Styling

* External Stylesheets: Store CSS in a separate file, making it easier to maintain and apply styles across multiple pages. This method is the most popular as it promotes modularity and reusability.
  * Example:
    ```css
    body {
        background-color: red;
    }
    ```

* Internal Styling: Styles are defined within the `<style>` element inside the HTML document, typically in the `<head>` section. This method is useful for single-page styling and when you don't need to apply styles to multiple pages.
  * Example:
    ```html
    <style>
        body {
            background-color: red;
        }
    </style>
    ```

* Inline Styling: Styles are applied directly to HTML elements using the style attribute. Inline styling is not recommended for large projects, as it can make code difficult to maintain and can lead to inconsistent styles.
  * Example:
    ```html
    <p style="color:red;">Text</p>
    ```
* Order of popularity: External > Internal > Inline


## Classes and IDs and how they are used in CSS as selectors

* Classes: Used to define a style for a group of elements. Classes can be applied to multiple elements and are helpful for applying consistent styles across a page. Class selectors in CSS start with a period (.) followed by the class name.
  * Example:
    HTML:
    ```html
    <p class="red-text">Red text</p>
    ```
    CSS:
    ```css
    .red-text { 
        color: red; 
    }
    ```

* IDs: Used to uniquely identify a single element on a page. IDs should be unique within the entire document and are useful for applying more specific styles or targeting elements for JavaScript. ID selectors in CSS start with a hash (#) followed by the ID name.
  * Example:
    HTML:
    ```html
    <p id="special-text">Special text</p>
    ```
    CSS:
    ```css
    #special-text { 
        color: red; 
    }
    ```

## CSS Specificity

Specificity is a set of rules used by browsers to determine which CSS rule should be applied when multiple rules target the same element. Specificity is calculated based on the types and number of selectors used in the rule.

* The basic hierarchy of specificity is: inline styles > ID selectors > class selectors (including attribute and pseudo-class selectors) > element selectors (including pseudo-element selectors).
  * Example:
    HTML:
    ```html
    <p id="special-text" class="red-text">Styled text</p>
    ```
    CSS:
    ```css
    #special-text { 
        color: red; 
    }
    .red-text { 
        color: blue; 
    }
    p { 
        color: green; 
    }
    ```
    In the above example... even though the id selector `#special-text` is first, it will still win out because it has a higher specificity than class and element selectors. If we removed the id selector, the class selector would win out.

  * When two rules have the same specificity, the one that comes later in the source order will be applied.
    * Example:
      HTML:
      ```html
      <p>Styled text</p>
      ```
      CSS:
      ```css
      p {
        color: blue;
      }

      p {
        color: red;
      }
      ```
      The `color: red;` would win out here because it came later than the `color: blue`.