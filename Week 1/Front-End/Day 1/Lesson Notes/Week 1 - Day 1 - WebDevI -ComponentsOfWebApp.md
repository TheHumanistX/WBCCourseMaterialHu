# Web Development I - Components of A Website or Web App

## HTML
* Definition
    * HTML (Hypertext Markup Language) is the standard markup language for creating web pages.
* Syntax
    * HTML uses tags to define various elements on a web page, such as headings, paragraphs, images, and links.
    * Example:
        
        ```html
        <!DOCTYPE html> 
        <html> 
            <head> 
                <title>My Web Page</title> 
            </head> 
            <body> 
                <h1>Welcome to my web page!</h1> 
                <p>This is some text on my web page.</p> 
            </body> 
        </html> 
        ```

* Latest version features
    * HTML5 comes with features such as multimedia embedding, semantic elements for better accessibility and structure, and enhanced form handling.

## CSS
* Definition
    * CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML.
* Syntax
    * CSS uses selectors and declarations to target and style HTML elements.
    * Example:

        ```css
        body { 
                font-family: Arial, sans-serif      
                background-color: #f0f0f0; 
             } 
        ```

* Latest version features
    * CSS3 includes features such as animations, 3D transforms, and custom fonts.

## JavaScript
* Definition
    * JavaScript is a programming language used to make web pages interactive.
* Syntax
    * JavaScript uses functions, variables, and objects to create dynamic and interactive web pages.
    * Example:

        ```JS
        function greetUser(name) { 
            console.log("Hello, " + name + "!"); 
        } 
        ```

* Latest version features
    * ES6 (ECMAScript 2015) introduced features such as arrow functions, template literals, and destructuring assignments.

## Node.js
* Definition
    * Node.js is a server-side JavaScript runtime built on the V8 engine.
* Syntax
    * Node.js allows developers to use JavaScript on the server-side.
    * Example:

        ```JS
        const http = require('http'); 
        http.createServer((req, res) => { 
            res.writeHead(200, {'Content-Type': 'text/plain'}); 
            res.end('Hello World!'); 
        }).listen(8080); 
        ```

* Applications
    * Node.js is used for real-time web applications, such as chat applications, online games, and streaming services.

## Express.js
* Definition
    * Express.js is a minimalist and adaptable framework for crafting web applications and APIs.
* Syntax
    * Express.js simplifies handling HTTP requests, setting up middleware, and defining routes for web applications.
    * Example:

        ```JS
        const express = require('express'); 
        const app = express(); 
        app.get('/', (req, res) => { 
            res.send('Hello World!'); 
        }); 
        app.listen(3000, () => { 
            console.log('Server started on port 3000'); 
        }); 
        ```

* Applications
    * Express.js is used for developing scalable and modular web applications capable of managing numerous requests and data.

## Web Servers
* Definition
    * A web server is a computer that stores files and data for a website or app and delivers them to a user's browser upon request.
* Types
    * There are two main types of web servers: static and dynamic.
    * Static servers deliver pre-built HTML files, while dynamic servers generate HTML files on the fly based on user requests.
* Popular examples
    * Popular web servers include Apache, Nginx, and Microsoft IIS.

## DNS
* Definition
    * DNS (Domain Name System) is a system that translates easy-to-remember domain names into IP addresses that machines can understand.
* Functionality
    * Every website or app has a unique IP address, but remembering IP addresses is tricky, so DNS simplifies the process by turning domain names into their corresponding IP addresses.
    * Example: www.google.com translates to 172.217.12.238.