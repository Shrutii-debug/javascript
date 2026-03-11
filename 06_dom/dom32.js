/*
1. Opening the Console to Explore the DOM

He starts by opening Developer Tools → Console and typing:

document

Explanation:

document represents the entire HTML page.

It is the entry point to the DOM.

So the hierarchy starts like this:

window
  └── document
        └── HTML page
2. Inspecting the Document Object

When you print:

console.dir(document)

It shows the document object as a JavaScript object.

He explains:

Command	What it shows
console.log(document)	HTML structure
console.dir(document)	JavaScript object representation
3. Accessing Page Properties

He then explores some document properties.

Page title
document.title

Output:

DOM learning

Change title:

document.title = "JavaScript DOM"
URL of the page
document.URL

Returns the page address.

Links on the page
document.links

Returns all anchor tags (<a>).

But he shows an important concept:

HTMLCollection

Meaning:

document.links → HTMLCollection

which is array-like but not a real array.

4. Selecting Elements Using getElementById

Example HTML:

<h1 id="title">DOM learning</h1>

Selecting element:

document.getElementById("title")

This returns the entire HTML element.

Example output:

<h1 id="title">DOM learning</h1>
5. Storing Element in a Variable

He then does:

const title = document.getElementById("title")

Now title is a DOM element object.

You can access properties like:

title.id
title.className
title.innerText
6. Accessing Attributes
Getting attribute
title.getAttribute("id")

Output:

"title"
Getting class
title.getAttribute("class")
Setting attribute
title.setAttribute("class", "heading")

Important concept he mentions:

setAttribute overwrites the attribute

So if a class already exists, it gets replaced.

7. Changing Styles with DOM

He demonstrates styling directly.

Example:

title.style.backgroundColor = "green"
title.style.padding = "15px"
title.style.borderRadius = "10px"

Now the element changes visually.

Example:

DOM learning (green background)
8. Understanding innerText

Example HTML:

<h1 id="title">
  DOM learning on Chai aur Code
  <span style="display:none">test</span>
</h1>

Command:

title.innerText

Output:

DOM learning on Chai aur Code

Hidden text is not returned.

9. Understanding textContent
title.textContent

Output:

DOM learning on Chai aur Code test

Hidden text is included.

10. Understanding innerHTML
title.innerHTML

Output:

DOM learning on Chai aur Code
<span style="display:none">test</span>

It returns HTML markup.

11. Selecting Elements with querySelector

He then introduces modern DOM selectors.

Syntax:

document.querySelector(selector)

It returns the first matching element.

Examples:

Select by id
document.querySelector("#title")
Select by class
document.querySelector(".heading")
Select by tag
document.querySelector("h1")
12. Selecting List Items

Example HTML:

<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>

Selecting first item:

document.querySelector("li")

Output:

<li>one</li>

Because querySelector always returns first match.

13. Changing Styles of Selected Element

Example:

const myul = document.querySelector("ul")

Select first list item:

const turnGreen = myul.querySelector("li")

Change style:

turnGreen.style.backgroundColor = "green"

Change text:

turnGreen.innerText = "five"
14. Selecting Multiple Elements

Using:

document.querySelectorAll("li")

This returns a NodeList.

Example:

NodeList(3)

Containing:

li
li
li
15. Accessing Elements in NodeList

Example:

const tempList = document.querySelectorAll("li")

Access element:

tempList[0]

Change style:

tempList[0].style.color = "green"
16. Looping Through NodeList

Important concept he explains:

NodeList supports forEach

Example:

tempList.forEach((li) => {
  li.style.backgroundColor = "green"
})

Now all list items change color.

17. HTMLCollection vs NodeList

He highlights this difference.

Feature	NodeList	HTMLCollection
Returned by	querySelectorAll	getElementsByClassName
Supports forEach	Yes	No
Array-like	Yes	Yes

Example:

document.querySelectorAll("li") → NodeList
document.getElementsByClassName("list-item") → HTMLCollection
18. Converting HTMLCollection to Array

Because HTMLCollection does not support forEach.

Convert using:

Array.from(htmlCollection)

Example:

const tempClassList = document.getElementsByClassName("list-item")

const arr = Array.from(tempClassList)

Now you can use:

arr.forEach()
arr.map()
Final Concept of the Video

The video teaches DOM selection techniques.

Main methods covered:

getElementById()
getElementsByClassName()
getElementsByTagName()
querySelector()
querySelectorAll()

And also the differences between:

innerText
textContent
innerHTML

✅ Main takeaway from Video 32

JavaScript can access and manipulate HTML elements using DOM selectors, allowing dynamic interaction with the webpage.
*/


/*

ere is the DOM practice exercise that directly uses everything from Video 32 (selectors, NodeList, styling, attributes).
This is the same type of structure he was experimenting with in the console.

1. Create This HTML Page
<!DOCTYPE html>
<html>
<head>
    <title>DOM Practice</title>
</head>
<body class="bg-black">

    <div class="parent">
        <h1 id="title" class="heading">
            DOM learning on Chai aur Code
            <span style="display:none">test text</span>
        </h1>

        <ul class="language">
            <li class="list-item">JavaScript</li>
            <li class="list-item">Python</li>
            <li class="list-item">Java</li>
            <li class="list-item">C++</li>
        </ul>

    </div>

</body>
</html>

Open the page → Inspect → Console.

Now perform the exercises.

2. Exercise 1 — Access the Title

Try:

document.getElementById("title")

Output → full <h1> element.

Now store it.

const title = document.getElementById("title")

Check attributes:

title.id
title.className
3. Exercise 2 — Check Text Properties

Run these one by one.

title.innerText

Then:

title.textContent

Then:

title.innerHTML

Observe the difference.

4. Exercise 3 — Change Styles
title.style.backgroundColor = "green"
title.style.padding = "10px"
title.style.borderRadius = "10px"

Your heading should change appearance.

5. Exercise 4 — Select First List Item
document.querySelector("li")

Output:

<li>JavaScript</li>

Because querySelector returns first match.

6. Exercise 5 — Change First List Item
const myul = document.querySelector("ul")

const firstItem = myul.querySelector("li")

firstItem.style.color = "red"

Now change its text:

firstItem.innerText = "TypeScript"
7. Exercise 6 — Select All List Items
document.querySelectorAll("li")

Output:

NodeList(4)

Store it:

const items = document.querySelectorAll("li")

Access element:

items[2]
8. Exercise 7 — Loop Through NodeList
items.forEach(function(li) {
    li.style.backgroundColor = "green"
})

Now all <li> elements change color.

9. Exercise 8 — Using getElementsByClassName
document.getElementsByClassName("list-item")

Output:

HTMLCollection

Try this:

const list = document.getElementsByClassName("list-item")

list.forEach()

You will get error.

Why?

Because:

HTMLCollection does not support forEach
10. Fix the Error

Convert to array.

const arr = Array.from(list)

Now:

arr.forEach(function(li){
    li.style.color = "yellow"
})

Now it works.

11. Bonus Practice (Very Important)

Select second list item using CSS selector.

document.querySelector("li:nth-child(2)")

Change color:

document.querySelector("li:nth-child(2)").style.color = "blue"
What This Exercise Covers

You just practiced everything from Video 32:

Selectors:

getElementById
querySelector
querySelectorAll
getElementsByClassName

Text properties:

innerText
textContent
innerHTML

Collections:

NodeList
HTMLCollection
Array.from()

DOM manipulation:

style changes
text changes
loops
*/