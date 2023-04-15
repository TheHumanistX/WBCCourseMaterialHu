# Day 1: Intro to HTML
## Introduction (2 minutes)
Hello, and welcome to today's lesson on HTML Structure and Common Tags! I'm excited to help you get started with web development.

HTML, or HyperText Markup Language, is the backbone of every webpage you visit. It's used to structure and present content on the web. In this lesson, we'll cover the basics of HTML, including creating a simple webpage, understanding the base structure of an HTML document, and working with common HTML tags such as text, media, hyperlinks, and tables.

By the end of this lesson, you'll have a solid foundation in HTML and be one step closer to building your own websites!

Are you ready to dive in? Let's get started!

## Creating a Simple Webpage (2 minutes)
To begin, let's create a new, empty HTML file in Visual Studio Code. Let's name it `my_first_webpage.html`. It's important to put the `.html` after so your computer knows how to load it.

Now, open this file in your preferred web browser by either double-clicking it, or by right-clicking on the file and selecting "Open with" followed by your browser's name.

Currently, our HTML file is empty, so you won't see anything in the browser. But don't worry, we'll be adding content to our webpage in the upcoming sections.

## Base HTML Structure of a Webpage (3 minutes)
Every HTML document follows a standard structure that includes a few essential elements. Let's go over these elements and their purpose:

* `<!DOCTYPE html>` This declaration should be the first line of your HTML document. It informs the browser that the document is an HTML5 document.

* `<html>` This is the root element of the page. All other HTML elements will be nested inside this element.

* `<head>` This element contains metadata and other information about the document, such as the `<title>`, which is displayed in the browser's title bar or tab. It can also contain links to stylesheets, scripts, and other resources.

* `<body>` This element is written below the `</head>` closing tag and above the `</html>` closing tag. It contains the content that will be displayed on the webpage. This is where you'll add text, images, links, and other elements to create your webpage.

Here's an example of a basic HTML document structure:

    <!DOCTYPE html>
    <html>
    <head>
        <title>My First Webpage</title>
    </head>
    <body>
        <!-- Your webpage content goes here -->
    </body>
    </html>

Now that you're familiar with the base structure of an HTML document, let's start adding some content to our webpage using common HTML tags.

--------------

## Common HTML Tags: Text Tags (5 minutes)

Text tags are used to format and structure the text content on your webpage. Let's go over some of the most common text tags:

**Paragraphs:** The `<p>` tag is used to define a paragraph. Browsers automatically add some space (margin) before and after each paragraph to separate them visually.

Example:

    <p>This is a paragraph of text.</p>
    <p>Here is another paragraph of text.</p>

<p>This is a paragraph of text.</p>
<p>Here is another paragraph of text.</p>

---------------


**Lists:** There are two types of lists in HTML: ordered lists and unordered lists. Ordered lists use the `<ol>` tag, while unordered lists use the `<ul>` tag. Each list item is created using the `<li>` tag.

Example:

    <ol>
    <li>First item in an ordered list</li>
    <li>Second item in an ordered list</li>
    </ol>

    <ul>
    <li>First item in an unordered list</li>
    <li>Second item in an unordered list</li>
    </ul>

<ol>
<li>First item in an ordered list</li>
<li>Second item in an ordered list</li>
</ol>

<ul>
<li>First item in an unordered list</li>
<li>Second item in an unordered list</li>
</ul>

--------------

## Non-Semantic Text Tags:
These tags are used to format text without conveying any additional meaning. Some common non-semantic text tags include `<b>` for bold text, `<i>` for italic text, and `<u>` for underlined text.

Example:

    <p>This is a <b>bold</b> word in a paragraph.</p>
    <p>This is an <i>italic</i> word in a paragraph.</p>
    <p>This is an <u>underlined</u> word in a paragraph.</p>

<p>This is a <b>bold</b> word in a paragraph.</p>
<p>This is an <i>italic</i> word in a paragraph.</p>
<p>This is an <u>underlined</u> word in a paragraph.</p>

----------

Now that you're familiar with these common text tags, you can start adding formatted text content to your webpage.


## Common HTML Tags: Media Tags (10 minutes)

Media tags are used to embed multimedia content, such as images, audio, and video, into your webpage. In this lesson, we'll focus on the most common media tag, the `<img>` tag, which is used for adding images.

**Images:** The `<img>` tag is a self-closing tag that embeds an image into your webpage. 
* It requires a `src` attribute, which specifies the URL or file path of the image. 
* Two other optional attributes that you should include for accessibility are `alt` and `title`. 
  * The `alt` attribute provides a textual description of the image for screen readers
  * The `title` attribute displays additional information when the user hovers over the image with their cursor.

Example:

    <img src="path/to/your/image.jpg" alt="A description of the image" title="Additional information about the image">

<img src="path/to/your/image.jpg" alt="A description of the image" title="Additional information about the image"><br>

To add an image to your webpage, simply replace the `src` attribute's value with the correct URL or file path for your image. Make sure to also provide meaningful `alt` text to describe the image for accessibility purposes.

Now that you know how to add images to your webpage, you can enhance your content with visuals to create a more engaging user experience.

## Common HTML Tags: Anchors/Hyperlinks (3 minutes)

Anchors or hyperlinks are an essential part of the web, as they allow users to navigate between pages and access different resources. The `<a>` tag is used to create hyperlinks in HTML.

**Hyperlinks:** The `<a>` tag requires an `href` attribute, which specifies the URL or file path of the linked resource. You can link to external websites, internal pages within your own website, or even email addresses. The content between the opening and closing `<a>` tags is what the user will click on to activate the link.

Let's look at some examples.

**Linking to an external website:**

    <a href="https://www.example.com">Visit Example.com</a>

<a href="https://www.example.com">Visit Example.com</a>

**Linking to an internal page within your own website:**

    <a href="about.html">About Us</a>

<a href="about.html">About Us</a>

By using the `<a>` tag and setting the appropriate `href` attribute, you can easily create navigation and resource links within your webpage, making it more useful and interactive for your visitors.


## Common HTML Tags: Tables (5 minutes)

Tables are used to display data in a structured, grid-like format, with rows and columns. In HTML, tables are created using a combination of tags: `<table>`, `<tr>`, `<th>`, and `<td>`.

* `<table>` This tag defines the table itself and serves as a container for the other table-related elements.

* `<tr>` This tag defines a table row, and it should be nested inside the `<table>` element. Each `<tr>` element represents one row in the table.

* `<th>` This tag defines a table header cell, which is used to label the columns in the table. It should be nested inside a `<tr>` element.

Here's an example of a simple table with headers, rows, and columns:

    <table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Row 1, Column 1</td>
        <td>Row 1, Column 2</td>
    </tr>
    <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
    </tr>
    </table>

<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Column 1</td>
    <td>Row 1, Column 2</td>
  </tr>
  <tr>
    <td>Row 2, Column 1</td>
    <td>Row 2, Column 2</td>
  </tr>
</table>

----------


## Wrap-up and Next Steps (3 minutes)
That wraps up today's lesson on HTML Structure and Common Tags! You've learned about the base structure of an HTML document and how to use various tags to create paragraphs, lists, images, hyperlinks, and tables. With this foundation, you're well on your way to building your own websites.

To recap, today we covered:

* Creating a simple webpage
* The base structure of an HTML document
* Common HTML tags:
  * Text tags: paragraphs, lists, and non-semantic text formatting
  * Media tags: images
  * Anchors/Hyperlinks
  * Tables: headers, rows, and columns

Before our next lesson, I encourage you to practice using these HTML tags on your own. Create webpages, experiment with different elements, and get comfortable with writing HTML code.

In our next lesson, we'll dive into Cascading Style Sheets (CSS), which is used to style HTML elements and control the appearance of your webpage. CSS will allow you to change colors, fonts, spacing, and much more, giving you full control over the look and feel of your website.

I'm looking forward to seeing you in our next lesson!
