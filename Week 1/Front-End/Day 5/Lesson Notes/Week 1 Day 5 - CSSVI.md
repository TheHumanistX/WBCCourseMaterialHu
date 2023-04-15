# CSS VI

## Flexbox

The Flexbox Model - A CSS layout module designed to efficiently distribute space and align content within a container. Flexbox simplifies complex layout designs, making it easier to create responsive layouts without relying on floats or other positioning properties.
Flex Containers and Items - A flex container is an element with display: flex or display: inline-flex, which creates a flex formatting context for its direct children. Flex items are the direct children of a flex container and can be manipulated using various flexbox properties.

## Flexbox Properties

* flex-direction - Specifies the direction in which flex items are placed within the flex container. It determines the main axis along which items will be distributed.
    * Example:
        ```css
        .container {
          display: flex;
          flex-direction: row; /* row | row-reverse | column | column-reverse */
        }
        ```

* justify-content - Aligns flex items along the main axis of the flex container. It controls how extra space is distributed among the items and can be used to create different spacing patterns.
    * Example:
        ```css
        .container {
          display: flex;
          justify-content: flex-start; /* flex-start | center | flex-end | space-between | space-around | space-evenly */
        }
        ```

* align-items - Aligns flex items along the cross axis of the flex container. It controls the alignment of items perpendicular to the main axis and can be used to vertically align items in a horizontal flex container or horizontally align items in a vertical flex container.
    * Example:
        ```css
        .container {
          display: flex;
          align-items: flex-start; /* flex-start | center | flex-end | stretch | baseline */
        }
        ```

* flex-wrap - Specifies whether flex items should wrap onto multiple lines or not. By default, flex items try to fit on a single line, but this can be changed using the wrap or wrap-reverse values.
    * Example:
        ```css
        .container {
          display: flex;
          flex-wrap: nowrap; /* nowrap | wrap | wrap-reverse */
        }
        ```

* align-content - Aligns the flex lines within the flex container when there's extra space in the cross axis. It behaves similarly to align-items, but instead of aligning individual items, it aligns groups of items that wrap onto multiple lines.
    * Example:
        ```css
        .container {
          display: flex;
          align-content: flex-start; /* flex-start | center | flex-end | stretch | space-between | space-around | space-evenly */
        }
        ```

* gap - Specifies the size of the gap between flex items. It allows for easy and consistent spacing between items without the need for margin calculations.
    * Example:
        ```css
        .container {
          display: flex;
          gap: 10px;
        }
        ```

* flex-basis - Specifies the initial size of a flex item before it's adjusted by the flex-grow and flex-shrink properties. It can be set to a length value or a percentage.
    * Example:
        ```css
        .item {
          flex-basis: 100px;
        }
        ```

* flex-grow - Specifies how much a flex item should grow relative to other items in the flex container when there's extra space available. The value represents a proportion, so an item with a flex-grow value of 2 will grow twice as much as an item with a flex-grow value of 1.
    * Example:
        ```css
        .item {
          flex-grow: 1;
        }
        ```

* flex-shrink - Specifies how much a flex item should shrink relative to other items in the flex container when there's not enough space to accommodate their initial size. Like flex-grow, the value represents a proportion.
    * Example:
        ```css
        .item {
            flex-shrink: 1;
        }
        ```

* flex-order - Specifies the order in which flex items appear within the flex container. By default, all items have an order of 0, and they appear in the order they are placed in the source HTML. You can change the order by setting a positive or negative integer value for this property.
    * Example:
        ```css
        .item1 {
          order: 1;
        }
        .item2 {
          order: 2;
        }
        ```

In summary, Flexbox is a powerful layout module in CSS that allows for easy alignment, distribution, and sizing of items within a container. By using a combination of properties like flex-direction, justify-content, align-items, and others, you can create complex and responsive layouts with ease. Remember to consider the main and cross axes when applying flex properties, and experiment with different values to achieve the desired layout.