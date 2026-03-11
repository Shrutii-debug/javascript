
/*
1. HTML Structure Used in the Video

He starts with a page similar to this:

<div class="parent">
    <div class="day">Monday</div>
    <div class="day">Tuesday</div>
    <div class="day">Wednesday</div>
    <div class="day">Thursday</div>
</div>

Visually:

parent
 ├── Monday
 ├── Tuesday
 ├── Wednesday
 └── Thursday

This structure helps explain parent-child relationships in DOM.

2. Selecting the Parent Element

First he selects the parent container.

const parent = document.querySelector('.parent')

Now the variable parent contains the <div class="parent">.

If you print it:

parent

You see the full container with all the days.

3. Accessing Children

Next he shows:

parent.children

Output:

HTMLCollection(4)

Explanation:

children returns all direct child elements

The result is an HTMLCollection

Important point he mentions:

HTMLCollection is array-like but not a real array

So you access elements like:

parent.children[0]

Output:

<div class="day">Monday</div>
4. Accessing Child Text

Then he prints the text:

parent.children[1].innerHTML

Output:

Tuesday

This shows how to navigate and read child content.

5. Looping Through Children

Since children is a collection, we can loop.

Example:

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}

Output:

Monday
Tuesday
Wednesday
Thursday

He uses this to show how DOM traversal works programmatically.

6. Changing Styles of Children

Then he changes style of the first child.

parent.children[1].style.color = "orange"

Now Tuesday becomes orange.

This demonstrates:

Selecting → Traversing → Manipulating
7. firstElementChild

Next he introduces:

parent.firstElementChild

Output:

<div class="day">Monday</div>

Meaning:

firstElementChild → first child element
8. lastElementChild

Next:

parent.lastElementChild

Output:

<div class="day">Thursday</div>

Meaning:

lastElementChild → last child element
9. Moving from Child to Parent

Now he selects one child.

const dayOne = document.querySelector('.day')

This selects Monday.

Now he shows:

dayOne.parentElement

Output:

<div class="parent">

Meaning:

child → parent navigation

So DOM navigation works both ways.

10. Moving Between Siblings

Next he explains siblings.

dayOne.nextElementSibling

Output:

<div class="day">Tuesday</div>

Meaning:

nextElementSibling → next element at same level

So the relationship is:

Monday → Tuesday → Wednesday → Thursday
11. DOM Tree Concept

He then shows something interesting in console.

parent.childNodes

Output:

NodeList(9)

Students get confused here because we only see 4 elements.

He explains:

DOM also counts text nodes

Example structure:

parent
 ├── text node (line break)
 ├── Monday
 ├── text node
 ├── Tuesday
 ├── text node
 ├── Wednesday
 ├── text node
 ├── Thursday
 └── text node

These spaces and line breaks count as nodes.

So:

childNodes ≠ children
12. Difference Between children and childNodes
Property	Returns
children	only element nodes
childNodes	all nodes (text + elements)

Example:

parent.children

returns:

4 elements

But:

parent.childNodes

returns:

9 nodes

Because text nodes are included.

13. DOM Relationships Summary

He summarizes navigation relationships:

parent → children
children → parent
child → sibling

Methods used:

parent.children
parent.firstElementChild
parent.lastElementChild

child.parentElement

child.nextElementSibling
14. Visual DOM Tree from the Video
parent
│
├── Monday
│
├── Tuesday
│
├── Wednesday
│
└── Thursday

Navigation examples:

parent.children[0] → Monday
Monday.nextElementSibling → Tuesday
Tuesday.parentElement → parent
parent.lastElementChild → Thursday
Final Concept of Video 33

The goal of this video is to teach DOM traversal — how to move inside the DOM once you select an element.

Main concepts:

Parent
Children
Siblings
Element navigation
DOM nodes vs elements

Key methods:

children
childNodes
firstElementChild
lastElementChild
parentElement
nextElementSibling
*/

/*
Here is the DOM traversal trick from Video 33 that many people miss.
It’s the difference between children and childNodes, and why developers usually prefer children.

1. Example HTML (Same as the Video)
<div class="parent">
    <div class="day">Monday</div>
    <div class="day">Tuesday</div>
    <div class="day">Wednesday</div>
    <div class="day">Thursday</div>
</div>

Looks like this:

parent
 ├── Monday
 ├── Tuesday
 ├── Wednesday
 └── Thursday

So you might expect 4 nodes.

But that’s not what the DOM actually sees.

2. Using children

Run:

const parent = document.querySelector(".parent")

parent.children

Output:

HTMLCollection(4)

Elements:

Monday
Tuesday
Wednesday
Thursday

Because:

children → returns only element nodes
3. Using childNodes

Now run:

parent.childNodes

Output:

NodeList(9)

This confuses many beginners.

Why 9 nodes when we only see 4 elements?

4. The Hidden Nodes

The browser also counts spaces and line breaks as nodes.

Actual DOM tree:

parent
 ├── text node (newline)
 ├── Monday
 ├── text node
 ├── Tuesday
 ├── text node
 ├── Wednesday
 ├── text node
 ├── Thursday
 └── text node

Those empty spaces between elements are text nodes.

So the browser counts:

4 element nodes
+
5 text nodes
=
9 nodes
5. Visual Diagram
.parent
│
├── #text
├── div.day (Monday)
├── #text
├── div.day (Tuesday)
├── #text
├── div.day (Wednesday)
├── #text
├── div.day (Thursday)
└── #text

#text = whitespace / line break.

6. Why This Matters

If you do:

parent.childNodes[0]

You might expect:

Monday

But instead you get:

#text

Because the first node is whitespace.

This causes many bugs.

7. Correct Way (What Developers Do)

Use:

parent.children

Instead of:

parent.childNodes

Example:

parent.children[0]

Output:

<div class="day">Monday</div>

No whitespace problems.

8. The Interview Trick

Many interviews ask:

What is the difference between children and childNodes?

Answer:

Property	Returns
children	only element nodes
childNodes	all nodes (elements + text + comments)
9. Extra Trick from the Video

He also shows navigation like this:

const dayOne = document.querySelector(".day")

dayOne.parentElement

Output:

.parent

And:

dayOne.nextElementSibling

Output:

Tuesday

This allows moving around the DOM tree.

Final Memory Trick

Remember this simple rule:

children → elements only
childNodes → everything in DOM
*/