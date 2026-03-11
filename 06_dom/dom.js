/*
1. What is the DOM?

DOM = Document Object Model

It is the JavaScript representation of an HTML page.

When a browser loads an HTML page, it converts it into a tree of objects.

Example HTML:

<body>
  <h1>Hello</h1>
  <p>Welcome</p>
</body>

Browser converts it to a DOM tree:

Document
   |
  html
   |
  body
  /   \
h1     p

Each element becomes a node (object) that JavaScript can manipulate.

2. Why DOM is Important

DOM allows JavaScript to:

change text

change styles

add elements

remove elements

respond to user actions

Example:

document.querySelector("h1").innerText = "Hello World"

This changes the webpage dynamically.

*/


//IMPORTANT DIAGRAM
/*
Window
│
└── Document
    │
    └── HTML
        │
        ├── Head
        │   │
        │   ├── Title
        │   │     └── "DOM learning"
        │   │
        │   └── Meta / Link / Script
        │
        └── Body
            │
            ├── Div (class="bg-black")
            │     │
            │     ├── H1 (id="title")
            │     │     │
            │     │     └── Text Node
            │     │           "DOM learning on Chai aur Code"
            │     │
            │     ├── Span
            │     │     └── Text Node
            │     │
            │     └── P
            │           └── Text Node
            │
            └── Ul
                  │
                  ├── Li
                  │     └── Text Node ("one")
                  │
                  ├── Li
                  │     └── Text Node ("two")
                  │
                  └── Li
                        └── Text Node ("three")
*/

/*
3. The document Object

In the video he opens browser console and types:

document

Explanation:

document represents the entire webpage

it is the entry point to DOM

Example access:

document.body
document.head
document.links
document.images
4. Important DOM Properties
document.title
document.title

Gets page title.

Change title:

document.title = "New Title"
document.getElementById()

Used to select an element by id.

Example HTML:

<h1 id="title">DOM Learning</h1>

JavaScript:

document.getElementById("title")

Returns the entire HTML element object.
*/

/*
5. Accessing Element Properties

If we store the element:

const title = document.getElementById("title")

We can access properties.

innerText
title.innerText

Returns visible text only.

textContent
title.textContent

Returns all text including hidden ones.

innerHTML
title.innerHTML

Returns HTML inside element.

Example:

<h1 id="title">
  Hello <span>World</span>
</h1>
innerText → Hello World
textContent → Hello World
innerHTML → Hello <span>World</span>
*/

/*
DOM allows changing CSS using JavaScript.

Example:

title.style.color = "red"
title.style.backgroundColor = "black"
title.style.padding = "15px"
title.style.borderRadius = "10px"

This directly modifies the element style.

7. Selecting Elements

He explains several selectors.

getElementById()
document.getElementById("title")

Returns one element.

getElementsByClassName()
document.getElementsByClassName("heading")

Returns HTMLCollection.

Important concept:

HTMLCollection ≠ Array

So array methods like map() do not work directly.

getElementsByTagName()
document.getElementsByTagName("li")

Returns multiple elements.

8. querySelector()

Modern way to select elements.

document.querySelector("h1")

Returns first matching element.

Example:

#id
.class
tag

Examples:

document.querySelector("#title")
document.querySelector(".heading")
document.querySelector("input")
9. querySelectorAll()

Returns all matching elements.

document.querySelectorAll("li")

Returns a NodeList.

Example:

const list = document.querySelectorAll("li")

Access element:

list[0]
10. NodeList vs HTMLCollection

Important concept he explains.

Feature	NodeList	HTMLCollection
Returned by	querySelectorAll	getElementsByClassName
Array-like	Yes	Yes
Supports forEach	Yes	No

Example:

document.querySelectorAll("li").forEach(...)

But HTMLCollection needs conversion.

11. Converting to Array

If you want array methods:

Array.from(htmlCollection)

Example:

const list = document.getElementsByClassName("item")

const arr = Array.from(list)

Now you can use:

arr.map(...)
arr.forEach(...)
12. Looping Through Elements

Example shown:

const list = document.querySelectorAll("li")

list.forEach((item) => {
    item.style.backgroundColor = "green"
})

This changes the style of all list items.

13. DOM Tree Concepts

Every DOM element is a node.

Nodes include:

Element nodes
Text nodes
Comment nodes

Example:

<li>Item</li>

Structure:

li → element node
Item → text node
14. Parent and Child Relationships

DOM elements form a hierarchy.

Example:

parent.children
parent.firstElementChild
parent.lastElementChild

Example:

document.querySelector(".parent")

Access children:

.parent.children
15. Why DOM Matters in Real Projects

DOM is used for:

dynamic websites

event handling

UI updates

animations

frameworks like React

Example:

Click button
→ JavaScript runs
→ DOM updates
→ page changes
Final Simple Definition

DOM is a programming interface that allows JavaScript to read, modify, and manipulate HTML elements in a webpage.
*/