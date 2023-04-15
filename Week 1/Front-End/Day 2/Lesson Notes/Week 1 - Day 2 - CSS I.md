# CSS I - CSS Syntax, Height/Width, Colors, Texts and Fonts, Backgrouns, Images, Border-Collapse
## CSS syntax

* Basic syntax: A CSS rule consists of a selector, property, and value in the following format: selector {property: value;}. The selector targets HTML elements, the property defines the style attribute to be modified, and the value specifies the new style.
  * Example:
    ```css
    selector {property: value;}
    ```
* Inline styles: CSS styles can be applied directly to an HTML element using the style attribute. However, this method is discouraged in favor of using external or internal stylesheets for better organization and maintainability.
  * Example
    ```html
    <p style="color: red;">Text</p>
    ```

## Height/Width

Control the dimensions of HTML elements by specifying the height and width using percentages or pixels as units of measurement. Percentages are relative to the parent container, while pixels are fixed measurements.

* Height: Sets the vertical measurement of an element. If a percentage is used, it is relative to the height of the parent container.
  * Example
    ```html
    <div style="height: 25%;">
    <div style="height: 200px;">
    ```
* Width: Sets the horizontal measurement of an element. If a percentage is used, it is relative to the width of the parent container.
  * Example
    ```html
    <div style="width: 45%;">
    <div style="width: 325px;">
    ```

## Colors

* HEX: A 6-digit color code preceded by a # that represents a color using a combination of red, green, and blue values in hexadecimal format. 
    * Example: #FF0000
    * Example:
        ```html
        <div style="background-color: #FF0000;">
        ```
* RGB(A): A color representation using red, green, and blue values (0-255). The optional alpha channel (0-1) allows for transparency. 
    * Example: rgba(255, 0, 0, 0.5)
    * Example:
        ```html
        <p style="color: rgba(255, 0, 0, 0.5);">
        ```
* HSL(A): A color representation using hue (0-360), saturation (0%-100%), and lightness (0%-100%). The optional alpha channel (0-1) allows for transparency. HSL colors are considered more human-readable. 
    * Example: hsla(0, 100%, 50%, 0.5)
    * Example:
        ```html
        <div style="background-color: hsla(0, 100%, 50%, 0.5);">
        ```

## Text and Fonts

* Font Family: Specify the font for text elements using available system fonts, fallback fonts, or imported Google Fonts. Fallback fonts are used if the primary font fails to load.
    * Example of common font, Arial, with fallback font, generic sans-serif:
        ```html
        <body style="font-family: Arial, sans-serif;">
        ```
    * Example of importing a google font and using it in your html:
        ```html
        <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
        </head>
        <body style="font-family: 'Roboto', Arial, sans-serif;">
        ```
* Font Style: Set the style of the font, such as italic or normal, using the font-style property.
    * Example:
        ```html
        <p style="font-style: italic;">
        ```
* Font Size: Set the size of the font using the font-size property with pixels as the unit of measurement.
    * Example:
        ```html
        <p style="font-size: 16px;">
        ```
* Font Weight: Set the weight (thickness) of the font, such as bold or normal, using the font-weight property.
    * Example:
        ```html 
        <p style="font-weight: bold;">
        ```
* Text Color: Set the color of the text using the color property.
    * Example:
        ```html
        <p style="color: blue;">
        ```
* Text Alignment: Set the horizontal alignment of the text, such as left, center, or right, using the text-align property.
    * Example:
        ```html
        <p style="text-align: center;">
        ```
* Line Height: Set the spacing between lines of text using the line-height property. This can improve readability.
    * Example:
        ```html
        <p style="line-height: 1.5;">
        ```
* Text formatting: Utilize the span tag to format inline grouped text, avoid formatting text within HTML, and separate content (HTML) and presentation (CSS) for better maintainability and accessibility.
    * Example:
        ```html
        <p>This is some text and this is some <span style="font-weight: 700; text-decoration: underline;">more important text</span>.</p>
        ```
* Anchor formatting: Style links using the a selector to control properties such as color and text-decoration.
    * Example:
        ```html
        <a href="website.com" style="color: blue; text-decoration: none;">
        ```

## Backgrounds

* Background Color: Set the background color of an element using the background-color property.
    * Example
        ```html
        <div style="height: 200px; background-color: yellow;">
        ```
* Background Image: Add a background image to an element using the background-image property and control its repetition using the background-repeat property.
    * Example
        ```html
        <body style="background-image: url('image.jpg'); background-repeat: no-repeat;">
        <body style="background-image: url('image.jpg'); background-repeat: repeat-x;">
        <body style="background-image: url('image.jpg'); background-repeat: repeat-y;">
        ```

* Gradients: Create smooth transitions between colors using linear and radial gradients with the background-image property. Linear gradients follow a straight line, while radial gradients radiate from a center point.
    * Example
        ```html
        <body style="background-image: linear-gradient(to right, red, blue);">
        <body style="background-image: linear-gradient(to bottom left, red, blue);">
        <body style="background-image: radial-gradient(at right, red, blue);">
        <body style="background-image: radial-gradient(at top middle, red, blue);">
        ```
* Background Size and Position: Control the size and position of the background image or gradient. Use the background-size property to adjust the size (e.g., cover, contain, or specific dimensions) and the background-position property to control the position (e.g., center, top left, or specific coordinates).
    * Example
        ```html
        <body style="background-size: cover; background-position: center;">
        <body style="background-size: contain; background-position: top left;">
        <body style="background-size: 100px 400px; background-position: 10% 20%;">
        ```

## Images

* Filter: Apply visual effects to images using the filter property. Filters can be combined to create unique styles.
    * Blur: Apply a blurring effect using the blur() function. Adjust the intensity by specifying a radius value in pixels.
      * Example:
        ```html
        <img src="image.jpg" style="filter: blur(5px);">
        ```
    * Grayscale: Convert the image to grayscale using the grayscale() function. Adjust the intensity by specifying a percentage.
      * Example:
        ```html
        <img src="image.jpg" style="filter: grayscale(50%);">
        ```
    * Opacity: Adjust the transparency of the image using the opacity() function. Set the level of opacity by specifying a percentage.
      * Example:
        ```html
        <img src="image.jpg" style="filter: opacity(80%);">
        ```
    * Sepia: Apply a sepia-tone effect to the image using the sepia() function. Adjust the intensity by specifying a percentage.
      * Example:
        ```html
        <img src="image.jpg" style="filter: sepia(100%);">
        ```
    * Saturate: Increase or decrease the color saturation of the image using the saturate() function. Set the level of saturation by specifying a percentage.
      * Example:
        ```html
        <img src="image.jpg" style="filter: saturate(200%);">
        ```
    * You can combine any filters you want.
      * Example:
        ```html
        <img src="image.jpg" style="filter: saturate(200%) grayscale: (40%);">
        ```

## Border-collapse for tables

The border-collapse property controls the appearance of table borders. Set the value to collapse to combine adjacent borders into a single border or separate to display individual borders for each cell. The default value is separate.
  * Example
    ```html
    <table border="2" style="border-collapse: collapse;">
    ```
