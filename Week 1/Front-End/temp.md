# W1D2 Section 10
## Text Color and Alignment
 
Text Color and Alignment
In this section, we'll be discussing text color and alignment.
 
Text color is an important aspect of web design, as it can impact the readability and overall look and feel of your website. In CSS, you can specify text color using a variety of methods, including color names, RGB values, and hex codes. Here's an example:
 
```html
<h1 style="color: blue;">This heading is BLUE!</h1>
<p style="color: red;">This text is in red.</p>
<p>This is some text that is black by default but then <span style="color: purple;">we introduce a span tag and now this section of text is purple!</span></p>
```
 
When it comes to text alignment, there are several options to choose from, including left, right, center, and justify. The text-align property is used to set the text alignment in CSS. Here's an example:
 
```html
<p style="text-align: center;">This text is centered.</p>
<p style="text-align: left;">This text is aligned left.</p>
<p style="text-align: right;">This text is aligned right.</p>
<p style="text-align: justify; width: 150px;">This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. This text is aligned justify. </p>
```
All of these are intuitive. THe one that is a little odd is justify but all that is doing it creating white space that is needed to have the text reach the edge of that paragraph element on both sides evenly.
 
This is that same paragraph with no text alignment:
 
<p style="width: 150px;">This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. This text is not aligned justify. </p>
 
You can see the visual difference there.
 
Now it's your turn to practice! In your HTML file go and experiment with different text colors and alignments using inline CSS. Try using hex codes, RGB, and HSL for colors and different alignments to see how they impact the look of your text.