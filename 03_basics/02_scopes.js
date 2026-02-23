 //  {} --> isiko bolte h scope , curly braces ko
 /*
 🔹 1. Global Scope in JavaScript

A variable has global scope when it is declared outside any function or block.

That means:

It can be accessed anywhere in the program

Inside functions

Inside blocks

Anywhere after declaration

✅ Example:
let name = "Tanisha";  // Global scope

function greet() {
    console.log(name);  // Accessible here
}

greet();
console.log(name);      // Accessible here too

Here, name is available everywhere.

🔹 2. Block Scope in JavaScript

A variable has block scope when it is declared inside { }.

Blocks are created by:

if

for

while

switch

{} manually

Only let and const follow block scope.

✅ Example with let
if (true) {
    let age = 20;
    console.log(age); // ✅ Works
}

console.log(age); // ❌ Error (age is not defined)

Because age is block-scoped.

🔹 3. Function Scope (Important for var)

var is NOT block scoped.
It is function scoped.

That means:

It is only restricted inside functions

But NOT restricted inside blocks like if or for

❌ Example with var
if (true) {
    var marks = 90;
}

console.log(marks); // ✅ Works (unexpected!)

Even though marks was declared inside if, it is accessible outside.

This is the problem.

🔹 Why var is Not Used (Scope Problem)

Now the main question 👀

🚨 Problem 1: No Block Scope
for (var i = 0; i < 3; i++) {
    // some code
}

console.log(i); // 3 😳

i should ideally not exist outside the loop.
But because var is function-scoped, it leaks outside the block.

With let:

for (let i = 0; i < 3; i++) {
}

console.log(i); // ❌ Error

Much safer ✅

🚨 Problem 2: Variable Redeclaration

var allows redeclaration in the same scope.

var x = 10;
var x = 20;  // No error

But with let:

let x = 10;
let x = 20;  // ❌ Error

This prevents bugs.

🚨 Problem 3: Hoisting Issues

var is hoisted and initialized with undefined.

console.log(a); // undefined
var a = 5;

This can cause unexpected bugs.

But with let:

console.log(a); // ❌ ReferenceError
let a = 5;

This is safer because it prevents accidental access before declaration


that is why we dont talk about var in javascript and only limit ourselves to let and const
 */

/*
let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    console.log("INNER: ", a);
}

console.log(a);
// console.log(b);


1️⃣ let a = 300;

A variable a is created in the global scope.

Its value is 300.

This a is accessible everywhere unless shadowed.

2️⃣ if (true) { ... }

This creates a block scope because of { }.

Everything inside { } is a separate scope.

3️⃣ Inside the block:
let a = 10;

This creates a new variable a, but only inside the block.

👉 This does NOT change the outer a.

This is called variable shadowing.

It means:

The inner a temporarily hides the outer a.

4️⃣ const b = 20;

b is also block-scoped.

It exists ONLY inside the if block.

It cannot be accessed outside.

5️⃣ console.log("INNER:", a);

Inside the block:

JavaScript first looks for a in the current scope.

It finds let a = 10.

So it prints:

INNER: 10
6️⃣ After the block ends

Now the block scope is destroyed.

The inner a and b are gone.

Only the global a = 300 remains.

7️⃣ console.log(a);

Now JavaScript looks for a:

It does NOT see the inner a anymore (because block ended).

So it uses the global a.

It prints:

300


🧠 Important Concepts Happening Here
✅ 1. Block Scope

let and const are limited to { }.

✅ 2. Variable Shadowing
let a = 300;

if (true) {
    let a = 10;
}

The inner a does NOT modify the outer a.

It only temporarily hides it.

🚨 What If It Was var Instead?

If inside block you wrote:

var a = 10;

Then:

It would NOT create block scope.

It would overwrite the global a.

And final output would be:

INNER: 10
10

That’s why var is dangerous.
*/

// ********************IMPORTANT CONCEPT********************

/*
🔥 Scope in Browser vs Node Environment
🌍 1️⃣ Scope in Browser Environment

In a browser, the global object is:

window

So when you declare a variable globally using var, it becomes a property of window.

✅ Example (Browser)
var a = 10;
let b = 20;
const c = 30;

console.log(window.a); // 10
console.log(window.b); // undefined
console.log(window.c); // undefined
Why?

var attaches to window

let and const do NOT attach to window

They are global but not properties of window

🔹 Global Scope in Browser

If you write in a script tag:

<script>
  var x = 100;
</script>

It becomes:

window.x = 100

That means any other script can access it.

🖥️ 2️⃣ Scope in Node.js Environment

In Node.js, the global object is:

global

BUTTTT 👀 there is a twist.

Node wraps every file inside a function like this:

(function(exports, require, module, __filename, __dirname) {
   // your code here
});

This means:

👉 Every file in Node has its own module scope.

So even if you write:

var a = 10;

It does NOT become global automatically.

✅ Example (Node)
var a = 10;
let b = 20;
const c = 30;

console.log(global.a); // undefined

Why?

Because in Node:

Top-level variables are module-scoped

They are NOT attached to global

🔥 Major Difference
Feature	Browser	Node
Global Object	window	global
Top-level var	Attached to window	Not attached to global
File Scope	Shared globally	Each file is a module
Module System	Script-based	CommonJS / ES Modules
🧠 Why Node Does This?

Node isolates each file so:

Variables in one file don’t accidentally affect another file

Prevents global pollution

Makes code modular and safe

🎯 Important Interview Point

If examiner asks:

👉 What is the difference between browser and Node global scope?

You say:

In browsers, global variables declared using var become properties of the window object. In Node.js, each file is treated as a module and wrapped inside a function, so top-level variables are module-scoped and do not become properties of the global object.

🔥 Extra Important Concept
In Browser:
console.log(this);

At global level → this === window

In Node:
console.log(this);

At top level → this === module.exports (not global)

*/