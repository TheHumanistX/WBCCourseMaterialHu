# Web Development V: More Theory

## Designing for Accessibility

### Why accessibility is important:

* Inclusivity: Ensuring that websites and applications are usable by as many people as possible, including those with disabilities, promotes a more inclusive web experience.
* Legal requirements: Complying with accessibility guidelines may be required by law in some jurisdictions.
* Improved SEO: Accessible websites often have better search engine rankings because they are more easily parsed by search engine crawlers.
* Broader audience: Accessible websites reach a wider audience, including people with temporary or situational impairments.

### Accessibility guidelines:

* Web Content Accessibility Guidelines (WCAG): A set of guidelines developed by the World Wide Web Consortium (W3C) to ensure that web content is accessible to people with disabilities.
* Principles of WCAG: The guidelines are organized around four principles: Perceivable, Operable, Understandable, and Robust (POUR).

### Examples of Designing for Accessibility:
* Use appropriate HTML elements and semantic markup to provide context and structure.
  * Example:
    ```html
    <header>
      <nav>
        <!-- Use an unordered list for navigation menus -->
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
        <h1>Article Title</h1>
        <p>Article content...</p>
      </article>
    </main>
    <footer>
      <!-- Footer content -->
    </footer>
    ```
* Provide alternative text for images to convey meaning to users who cannot see them.
  * Example:
    ```html
    <img src="example-image.jpg" alt="Description of the image">
    ```
* Ensure adequate color contrast between text and background to make content more legible.
  * Example:
    ```css
    body {
      color: #333; /* Dark gray text on a white background for better contrast */
      background-color: #fff;
    }
    ```
* Make navigation keyboard-friendly for users who cannot use a mouse or have difficulty using one.
  * Example:
    ```html
    <nav>
      <ul>
        <li><a href="#" tabindex="1">Home</a></li>
        <li><a href="#" tabindex="2">About</a></li>
        <li><a href="#" tabindex="3">Contact</a></li>
      </ul>
    </nav>
    ```
* Use clear and concise language to make content more understandable.
  * Example:
    ```html
    <h1>Improve Your Life with Our Product</h1>
    <p>Experience the benefits of our revolutionary product and start living a happier, healthier life today.</p>
    ```