/*
3. Step-by-Step Explanation of the Function
Step 1 — Create <li>
const li = document.createElement('li')

Creates a new element in memory:

<li></li>
Step 2 — Add the language text
li.innerHTML = `${langName}`

Now it becomes:

<li>Python</li>
Step 3 — Append to the list
document.querySelector('.language').appendChild(li)

This inserts the new <li> into the <ul>.

4. Why He Says This Is NOT Optimized

After showing this working method, he explains a problem with it.

The issue is this line:

li.innerHTML = `${langName}`

He says:

Using innerHTML is not the most optimized way
Why?

Because innerHTML makes the browser:

1. Parse HTML
2. Convert it into DOM nodes
3. Insert into DOM

Even though here it is just text, the browser still treats it as HTML parsing.

So internally the browser must re-interpret HTML again.

5. Optimized Version — addOptiLanguage()

Then he writes a better function.

function addOptiLanguage(langName){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}

Then he runs:

addOptiLanguage("Go")

Now the list becomes:

JavaScript
Python
TypeScript
Go
6. What Changed in the Optimized Version

Instead of using innerHTML, he uses:

document.createTextNode()

Step-by-step:

Create element
const li = document.createElement('li')
Create text node
document.createTextNode(langName)

Creates:

"text node"
Attach text node to <li>
li.appendChild(document.createTextNode(langName))

Now the <li> contains the text.

Append <li> to <ul>
document.querySelector('.language').appendChild(li)
7. Why This Version Is Better

He explains the optimization:

With innerHTML:

browser parses HTML

With createTextNode:

browser directly creates a text node

So it avoids unnecessary HTML parsing.

This makes it more efficient and safer.

8. The Key Concept He Is Teaching

He wants students to learn:

DOM manipulation should be minimal and efficient

Preferred approach:

createElement()
createTextNode()
appendChild()

instead of:

innerHTML
9. Final Comparison
Not Optimized
function addLanguage(langName){
    const li = document.createElement('li')
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
Optimized
function addOptiLanguage(langName){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}
10. What He Is Really Teaching Here

This small example introduces a big frontend concept:

Efficient DOM updates

This concept is actually why frameworks like React exist — to avoid unnecessary DOM work.
*/