/*
1. DOM Hierarchy (Foundation Concept)

He first explains how the browser converts HTML into a DOM tree.

Window
 │
 └── Document
       │
       └── HTML
            │
            ├── Head
            │     ├── Title
            │     └── Meta
            │
            └── Body
                  │
                  ├── Div
                  │     ├── H1
                  │     │    └── Text Node
                  │     └── P
                  │
                  └── Ul
                        ├── Li
                        ├── Li
                        └── Li

Every element becomes a node.

Types of nodes:

Element node → <div>
Text node → "Hello"
Attribute node → class="box"
2. Entry Point of DOM

Everything starts from:

document

Examples:

document.title
document.body
document.head
document.links
document.images
3. DOM Selectors

These allow JavaScript to select HTML elements.

getElementById()

Returns single element.

document.getElementById("title")

Example:

<h1 id="title">Hello</h1>
getElementsByClassName()

Returns HTMLCollection.

document.getElementsByClassName("heading")

Important:

HTMLCollection ≠ Array
getElementsByTagName()
document.getElementsByTagName("li")

Returns HTMLCollection.

4. Modern Selectors

Preferred in modern JavaScript.

querySelector()

Returns first matching element.

document.querySelector("#title")
document.querySelector(".heading")
document.querySelector("li")

Example:

document.querySelector("li")

Returns first <li>.

querySelectorAll()

Returns NodeList.

document.querySelectorAll("li")

Example output:

NodeList(3) [li, li, li]

Access element:

list[0]
5. NodeList vs HTMLCollection
Feature	NodeList	HTMLCollection
Returned by	querySelectorAll	getElementsByClassName
forEach supported	Yes	No
Array-like	Yes	Yes

Example:

document.querySelectorAll("li").forEach()

But HTMLCollection requires conversion.

6. Converting HTMLCollection to Array
Array.from(collection)

Example:

const list = document.getElementsByClassName("item")

const arr = Array.from(list)

arr.forEach((li)=>{
   li.style.color = "red"
})
7. Element Properties

Once an element is selected:

const title = document.getElementById("title")

You can access:

title.id
title.className
title.innerText
title.textContent
title.innerHTML
8. Text Properties

These three were explained carefully.

innerText

Returns visible text only.

title.innerText

Hidden elements are ignored.

textContent

Returns all text.

title.textContent

Includes hidden text.

innerHTML

Returns HTML markup inside element.

title.innerHTML

Includes tags.

Example:

<h1>
 Hello
 <span style="display:none">World</span>
</h1>

Results:

innerText → Hello
textContent → Hello World
innerHTML → Hello <span style="display:none">World</span>
9. DOM Styling

JavaScript can modify CSS.

Example:

title.style.color = "red"
title.style.backgroundColor = "black"
title.style.padding = "15px"
title.style.borderRadius = "10px"
10. Attributes

Get attribute:

title.getAttribute("id")
title.getAttribute("class")

Set attribute:

title.setAttribute("class","heading")

Important:

setAttribute replaces existing value
11. Creating Elements (Video 33)

Create element:

document.createElement("div")

Example:

const div = document.createElement("div")
12. Adding Text Nodes

Better method:

const text = document.createTextNode("Hello World")
div.appendChild(text)
13. Adding Element to Page
document.body.appendChild(div)

Flow:

createElement
↓
add attributes
↓
add text
↓
appendChild
↓
element visible
14. Editing Elements

Replace element:

oldElement.replaceWith(newElement)

Example:

const newLi = document.createElement("li")
newLi.textContent = "Mojo"

oldLi.replaceWith(newLi)
15. Removing Elements
element.remove()

Example:

document.querySelector("li:last-child").remove()
16. Efficient DOM Manipulation

He emphasizes:

Avoid:

innerHTML +=

Prefer:

createElement
appendChild

Because:

innerHTML → rebuilds DOM
appendChild → adds node
17. Most Important DOM Methods (Summary)
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()

document.querySelector()
document.querySelectorAll()

document.createElement()
document.createTextNode()

element.appendChild()
element.replaceWith()
element.remove()

Array.from()
Final One-Line Summary
*/