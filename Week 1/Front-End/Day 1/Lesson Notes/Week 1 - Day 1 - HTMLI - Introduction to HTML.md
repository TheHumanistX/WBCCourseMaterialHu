# HTML 1 - HTML Structure, Text Tags, Lists, Links and Anchors, Tables

##  Introduction to HTML

### Definition of HTML
  * HTML stands for Hypertext Markup Language.
  * HTML is a markup language used to create and structure content on the web.
  * HTML consists of a series of elements and tags that define the content and layout of a webpage.
### Uses of HTML
  * HTML is used to create and format text, images, videos, and other multimedia content on the web.
  * HTML is used to structure and organize information on a webpage, making it easier to read and navigate.
  * HTML is used to create links between web pages, allowing users to easily navigate between different parts of a website.
### Importance of HTML in web development
  * HTML is the foundation of web development and is required knowledge for anyone interested in building websites.
  * Understanding HTML is essential for creating visually appealing and functional web pages.

## Basic HTML Structure

### HTML Document Declaration
  * Purpose of the declaration
    * The HTML document declaration, <!DOCTYPE html>, tells the browser that the document is an HTML file and specifies the version of HTML being used.
  * Syntax of the declaration
    * The HTML document declaration is placed at the beginning of an HTML document, before the <html> tag.
    * The syntax of the HTML document declaration is <!DOCTYPE html>.
### HTML Document Structure
  * Html Tag
    * The html tag is the outermost tag in an HTML document and encloses the entire document.
    * The html tag has two main attributes: lang and dir.
    * The syntax of the html tag is `<html>`.
    * Example:
        
        ```html
        <!DOCTYPE html>
        <html>
            <head>
                <title></title>
            </head>
            <body>
            </body>
        </html>
        ```

### Head Section
  * The head section contains information about the document that is not displayed on the webpage, such as the title, author, and keywords.
    * `meta` tag is used to provide metadata about an HTML document.
      * `charset` attribute specifies the character encoding for the HTML document.
        *  Set to `UTF-8`, which is a widely used character encoding that supports a broad range of characters from different languages.
     *  Viewport attribute specifies how the content of the page should be displayed on different devices
        *  In this example, it's set to `width=device-width`, `initial-scale=1.0`, which means that the width of the viewport (the visible area of the screen) should be set to the width of the device's screen, and the initial zoom level should be set to 1.0 (i.e., not zoomed in or out).
  * The head section also includes links to CSS and JavaScript files, as well as the meta tag, which provides additional information about the document.
  * The syntax of the head section is `<head>...</head>`.
  * Example:

      ```html
      <head>
        <title>My Webpage</title>
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
      </head>
      ```
        
### Body Section
  * The body section contains the content that will be displayed on the webpage, including text, images, videos, and other multimedia elements.
  * The syntax of the body section is `<body>...</body>`.
  * Example:

      ```html
      <body>
        <h1>Welcome to my Webpage!</h1>
        <p>This is some text that describes my webpage.</p>
        <img src="image.jpg" alt="A beautiful image">
      </body>
      ```

## Text Tags

### Paragraph Tags
  * Used to group related text together and create distinct blocks of content
  * Denoted by the <p> tag
  * Automatically formats text into a block of text
  * Creates a new paragraph with a space between the previous paragraph and the current one
  * Example:

```html
<p>This is a paragraph of text.</p>
```

### Heading Tags
  * Used to create titles and headings for sections of a webpage
  * Denoted by the h1 to h6 tags, with h1 being the largest and most important and h6 being the smallest and least important
  * Should be used semantically to reflect the content and hierarchy of the page
  * Improves readability and accessibility of content
  * Example:

```html
<h1>This is a heading 1</h1>
<h2>This is a heading 2</h2>
<h3>This is a heading 3</h3>
<h4>This is a heading 4</h4>
<h5>This is a heading 5</h5>
<h6>This is a heading 6</h6>
```

### Non-Semantic Text Tags
  * Used purely for visual styling and do not provide any additional meaning or structure to the content
  * Examples: `<b>` tag for bold text, `<i>` tag for italicized text, `<u>` for underlined text, `<s>` for strikethrough text, and `<center>` tag for centering text
  * Overuse can make the webpage harder to read and less accessible
  * Example:

```html
<p><b>This text is bold</b></p>
<p><i>This text is italicized</i></p>
<p><u>This text is underlined</u></p>
<p><s>This text is strikethrough</s></p>
<p><center>This text is centered</center></p>
```

### Semantic Text Tags
  * Provide additional meaning and structure to the content on a webpage
  * Used to indicate the purpose and context of different sections of text, making the page more readable and accessible
    * `<strong>` tag for important or emphasized text 
    * `<em>` tag for stressed or emphasized text
    * `<sup>` and `<sub>` tags for superscript and subscript text
  * Example:

        <p><strong>This text is important</strong></p>
        <p><em>This text is emphasized</em></p>
        <p>This text is <sup>superscript</sup></p>
        <p>This text is <sub>subscript</sub></p>
        


### Best Practices
  * Use text tags judiciously and appropriately
  * Use semantic tags whenever possible to provide meaning and structure to content
  * Use text tags consistently throughout your website for a cohesive look and feel
  * Consider accessibility when using text tags, especially for users with disabilities or who rely on screen readers to access content on the web.

## Lists

###  Unordered Lists
  * Definition
    * Unordered lists are a type of HTML list used to present a series of items that do not have a specific order or hierarchy.
  * Syntax
    * Unordered lists are created using the <ul> tag.
    * Individual list items are denoted by the <li> tag.
    * Example:
     
        ```html
        <ul> 
          <li>Item 1</li> 
          <li>Item 2</li> 
          <li>Item 3</li> 
        </ul>
        ```
    * Here's an example of an unordered list:
        <ul> 
          <li>Apple</li> 
          <li>Banana</li> 
          <li>Orange</li> 
        </ul> 
  * Default rendering
    * By default, unordered lists are rendered with bullet points to the left of each item.

###  Ordered Lists
  * Definition
    * Ordered lists are a type of HTML list used to present a series of items that have a specific order or hierarchy.
  * Syntax
    * Ordered lists are created using the <ol> tag.
    * Individual list items are denoted by the <li> tag.
    * Example:
        ```html
        <ol> 
          <li>Item 1</li> 
          <li>Item 2</li> 
          <li>Item 3</li> 
        </ol>
        ```
    * Here's an example of an ordered list:
        <ol> <li>First item</li> <li>Second item</li> <li>Third item</li> </ol>
  * Default rendering
    * By default, ordered lists are rendered with numbers to the left of each item, starting with 1.
  
### Nested Lists
  * Definition
    * Any ordered or unordered list that is nested inside the list element of another ordered or unordered list.
  * Syntax
    * Simply insert a list inside the element of another list
    * Example:
      ```html
        <ol> 
          <li>Item 1</li> 
          <li>
            <ul> 
              <li>Nested List Item 1</li> 
              <li>Nested List Item 2</li> 
              <li>Nested List Item 3</li> 
            </ul>
          </li> 
          <li>Item 3</li> 
        </ol>
        ```


## Links and Anchors

### Links
  * Syntax
    * Links are created using the `<a>` tag with the href attribute that specifies the URL or file path to link to.
    * Example:

        ```html
        <a href="https://www.google.com/">Go to Google</a>
        ```

  * Example
    * Here's an example of a link:

        ```html
        <a href="https://www.example.com/">Go to Example</a>
        ```

### Anchors
  * Definition
    * Anchors are created using the `<a>` tag to link to specific sections within a webpage or to move to the top or bottom of the page.
  * Syntax
    * Anchors are created using the `<a>` tag with the href attribute that specifies the section ID to link to, and the name or id attribute is used to define the ID of the section.
  * Example:

        ```html  
        <a href="#section1">Go to Section 1</a> <h2 id="section1">This is       Section 1</h2>
        ``` 

### Link target
  * Definition
    * The target attribute can be used to specify where the linked page or resource should be opened.
  * Syntax
    * The target attribute is added to the `<a>` tag with the value of `_blank` to open the link in a new tab or window.
  * Example
    * Here's an example of a link with target attribute:
  
    ```html
    <a href="https://www.example.com" target="_blank">Open Example in a new tab</a>
    ```

### Linking to email addresses
  * Definition
    * Links can also be used to create email links that allow users to send an email to a specific address.
  * Syntax
    * Email links are created using the `<a>` tag with the `mailto:` protocol in the href attribute.
    * Example:

        ```html
        <a href="mailto:info@example.com">Send us an email</a> 
        ```

### Accessibility Considerations
  * Descriptive link text
    * Use descriptive link text that accurately reflects the content of the linked page or resource.
    * Avoid using generic text like "click here".
  * Alternative text
    * Provide alternative text for links and anchors to ensure accessibility for users with visual impairments.
    * Use the `alt` attribute to describe the linked resource when linking to images or other media files.
    * Example:
  
       ```html
       <a href="https://www.example.com/"><img src="example.jpg" alt="Example website"></a>
       ```
  * Distinguishable links
    * Make sure links and anchors are easily distinguishable from other content on the page.
    * Underlining or using a different color for links can help users understand that they are clickable.
  * By following these accessibility considerations, you can ensure that your links and anchors are usable and accessible for all users, including those with disabilities.

## Tables:

### Basic Table Structure
* Tables are a useful tool for displaying information in a structured and organized format on a webpage.
* Tables are commonly used for displaying data such as financial information, schedules, and product listings.
* In HTML, tables are created using the table tag, which is used to define the boundaries of the table.
* Within the table tag, there are several other tags that are used to structure the table:
    * The thead tag is used to define the header section of the table.
    * The th tag is used to define the header cells for each column in the table.
    * The tbody tag is used to define the body section of the table.
    * The tr tag is used to define the rows in the table.
    * The td tag is used to define the cells in the table.
* A basic table structure includes a table tag, thead, tbody, tr, and td tags. Here's an example of a basic table structure:

    ```css
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Widget</td>
          <td>$10.00</td>
        </tr>
        <tr>
          <td>Gadget</td>
          <td>$15.00</td>
        </tr>
      </tbody>
    </table>
    ```

### Merging Table Cells:
* HTML allows you to merge cells across rows and columns using the `colspan` and `rowspan` attributes.
  * These attributes are used to specify the number of columns or rows that a cell should span across.
* Here's an example of a table with merged cells that also shows some text formatting inside some of the table cells:

    ```css
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Description</th>
          <th colspan="2">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2"><center>Widget</center></td>
          <td>A small, handheld device</td>
          <td>$<em>10.00</em></td>
        </tr>
        <tr>
          <td colspan="3"><center><strong>Out of Stock</    strong><center></td>
        </tr>
        <tr>
          <td><center>Gadget</center></td>
          <td>A larger, more complex device</td>
          <td>$<em>20.00<em></td>
        </tr>
      </tbody>
    </table>
    ```

### Nested Tables:
* It's possible to use nested tables to create more complex table structures.
* This involves placing a table within a table cell, allowing you to create more intricate layouts and designs.
* Here's an example of a table with a nested table:

    ```css
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Contact Information</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Smith</td>
          <td>
            <table>
              <tr>
                <td>Phone:</td>
                <td>555-1234</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>j.smith@example.com</td>
              </tr>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    ```
  In the example above, we see an example of a nested table, where a smaller table is nested within a cell of a larger table. This technique can be used to create more complex layouts and designs in web development.

### Common Table Properties
* In addition to the specific tags used to define tables, there are several common properties that can be applied to tables to further customize their appearance and behavior. We will not go over these in the video lessons due to time constraints but I wanted to make you aware of some of them.
* Here are a few examples:

    * border: specifies the width of the border around the table and its cells
    * cellspacing: specifies the spacing between adjacent cells in the table
    * cellpadding: specifies the amount of space between the content of a cell and its border
    * width: specifies the width of the table
    * height: specifies the height of the table
    * align: specifies the horizontal alignment of the table within its containing element
    * bgcolor: specifies the background color of the table
    * bordercolor: specifies the color of the table's border
    * summary: provides a summary of the table's contents for accessibility purposes
* Here's an example of how some of these properties can be applied to a table:

    ```css
    <table border="1" cellspacing="0" cellpadding="5" width="50%"   align="center" bgcolor="#FFFFFF" summary="Sales Data">
      <tr>
        <th>Product</th>
        <th>Units Sold</th>
        <th>Revenue</th>
      </tr>
      <tr>
        <td>Widget</td>
        <td>100</td>
        <td>$1,000</td>
      </tr>
      <tr>
        <td>Gadget</td>
        <td>50</td>
        <td>$750</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>150</td>
        <td>$1,750</td>
      </tr>
    </table>
    ```

### Accessibility Considerations
* When using tables, important to consider accessibility for visually impaired users. 
* Screen readers can struggle with tables that are not properly structured 
  * Can make it difficult for visually impaired users to navigate the content. 
* Some accessibility considerations to keep in mind when using tables:
  * Use Semantic Table Markup
    * Using the appropriate HTML tags to define the different parts of the table. 
  * Use Row and Column Headers
    * Important to provide row and column headers to help users understand the information being presented. 
  * Avoid Using Tables for Layout
    * Use CSS for layout purposes, such as the grid or flexbox layout.
  * Test with Screen Readers
