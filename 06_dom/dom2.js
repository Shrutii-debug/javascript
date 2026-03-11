/*
1. Creating Elements in DOM

To create a new HTML element using JavaScript, we use:

document.createElement()

Example:

const div = document.createElement("div")

Now a div element exists in memory, but it is not yet visible on the webpage.

Think of it like:

HTML page → unchanged
JavaScript → created element in memory
2. Adding Properties to the Element

After creating the element, we can add properties.

Add class
div.className = "main"
Add id
div.id = "myDiv"
Add attributes
div.setAttribute("title", "generated title")

He explains that setAttribute() overwrites existing values, while direct assignment may not.

3. Styling the Element

You can directly apply CSS styles:

div.style.backgroundColor = "green"
div.style.padding = "12px"
4. Adding Text to the Element

There are two ways he shows.

Method 1 (less efficient)
div.innerText = "Hello World"

This first creates the element, then adds text inside it.

Method 2 (better method)
const text = document.createTextNode("Hello World")
div.appendChild(text)

This is better because:

create element
create text node
attach text node

This avoids unnecessary DOM manipulation.

5. Adding Element to the Page

Right now the element exists only in memory.

To show it on the webpage:

document.body.appendChild(div)

Now the element appears on the page.

Flow:

create element
↓
add properties
↓
add text
↓
append to body
↓
visible on webpage
6. Full Example (from the video concept)
const div = document.createElement("div")

div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)

div.setAttribute("title", "generated title")

div.style.backgroundColor = "green"
div.style.padding = "12px"

const addText = document.createTextNode("Hello World")

div.appendChild(addText)

document.body.appendChild(div)

This will dynamically create:

<div class="main" id="random">
   Hello World
</div>
7. Adding Multiple List Items (Better DOM Method)

He then explains a better way to add list items.

Instead of:

li.innerHTML = "JavaScript"

Use:

const li = document.createElement("li")
li.appendChild(document.createTextNode("JavaScript"))
document.querySelector(".language").appendChild(li)

This is more optimized for performance.

8. Editing Elements

To modify an element:

Example list:

<ul class="language">
  <li>JavaScript</li>
</ul>

Select element:

const secondLang = document.querySelector("li:nth-child(2)")

Replace it:

const newLi = document.createElement("li")
newLi.textContent = "Mojo"

secondLang.replaceWith(newLi)
9. Editing Using innerHTML

Another method:

const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = "<li>TypeScript</li>"

This completely replaces the element.

10. Removing Elements

To remove an element:

const lastLang = document.querySelector("li:last-child")
lastLang.remove()

This deletes it from the DOM.

11. Full DOM Manipulation Flow

What the browser does:

JavaScript
   ↓
Create element
   ↓
Modify element
   ↓
Insert into DOM
   ↓
Browser updates UI
12. Why This Matters (Real Applications)

DOM creation is used in:

Example:

Instagram comments
Twitter feed
Notifications
Chat messages
Todo lists

Instead of refreshing the page:

User action
↓
JavaScript updates DOM
↓
UI changes instantly
Simple Visual Flow
document.createElement()
        ↓
set attributes / styles
        ↓
create text node
        ↓
appendChild()
        ↓
element appears on page

✅ Key takeaway from the second DOM video

JavaScript can dynamically create, modify, replace, and remove HTML elements using DOM methods like:

createElement()
appendChild()
replaceWith()
remove()
*/
//--------------------------IMP----------------------------------------------
/*
1. innerText
What it returns

innerText returns only the visible text on the webpage.

It respects CSS styling.

Example HTML:

<h1 id="title">
  DOM learning on Chai aur Code
  <span style="display:none">test text</span>
</h1>

JavaScript:

document.getElementById("title").innerText

Output:

DOM learning on Chai aur Code

Explanation:

Visible text → returned
Hidden text → ignored

Because the span has display: none.

2. textContent
What it returns

textContent returns all text inside the element, including hidden text.

Example:

document.getElementById("title").textContent

Output:

DOM learning on Chai aur Code test text

Explanation:

Visible text → returned
Hidden text → also returned

textContent does not care about CSS visibility.

It simply reads the raw text inside the DOM nodes.

3. innerHTML
What it returns

innerHTML returns the HTML markup inside the element.

Example:

document.getElementById("title").innerHTML

Output:

DOM learning on Chai aur Code
<span style="display:none">test text</span>

Explanation:

Returns HTML structure
Includes tags
Includes attributes

So it shows the actual HTML code inside the element.

4. Simple Comparison Table
Property	Returns	Includes hidden text	Includes HTML tags
innerText	visible text	❌ No	❌ No
textContent	all text	✅ Yes	❌ No
innerHTML	HTML + text	✅ Yes	✅ Yes
5. Example Visual

HTML:

<h1 id="title">
  Hello
  <span style="display:none">World</span>
</h1>

Results:

innerText → Hello
textContent → Hello World
innerHTML → Hello <span style="display:none">World</span>
6. When to Use Each
Use innerText

When you want what the user actually sees.

Example:

button.innerText
Use textContent

When you want all text in the DOM, regardless of visibility.

It is also faster than innerText.

Use innerHTML

When you want to read or insert HTML.

Example:

div.innerHTML = "<p>Hello</p>"
7. Important Warning He Mentions

Using innerHTML can be dangerous if you insert user input, because it can lead to:

XSS (Cross Site Scripting)

Example:

div.innerHTML = userInput

If the user sends:

<script>alert("hack")</script>

it will run.

✅ The key takeaway from the video

innerText → visible text only

textContent → all text in DOM

innerHTML → HTML markup inside element
*/