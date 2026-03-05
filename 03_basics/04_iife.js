// iife ko use krte h global scope k pollution ko, unke variables ko hatane keliye

/*
1. Basic Syntax of IIFE
(function(){
    console.log("DB Connected");
})();
Output
DB Connected

How it works
there are two parts:
1️⃣ Function definition wrapped in parentheses
(function(){
    console.log("DB Connected");
})

2️⃣ Immediate execution: ()
So together:
(function(){
   console.log("DB Connected");
})();


2. Why Parentheses Are Needed

Normally JavaScript expects:

function chai(){
}

But in IIFE we wrap it:

(function chai(){
})

This makes JavaScript treat it as a function expression, not a function declaration.

3. Named IIFE
(function chai(){
    console.log("DB Connected");
})();

Here chai is the name of the function.

But it cannot be called again outside.

4. Anonymous IIFE

Most common type.

(function(){
    console.log("DB Connected");
})();

No function name.

5. IIFE with Arrow Function
(() => {
   console.log("DB Connected");
})();
*/

/*
6. Passing Parameters in IIFE
(function(name){
   console.log(`Hello ${name}`);
})("Shruti");

Output

Hello Shruti

Here:

function(name)   → parameter
("Shruti")       → argument
7. Why We Use IIFE (Most Important) ⭐
1️⃣ Avoid Global Scope Pollution

Without IIFE:

let message = "Hello";

This variable goes into global scope.

But with IIFE:

(function(){
    let message = "Hello";
})();

Now message cannot be accessed outside.

So variables stay private.

2️⃣ Execute Code Immediately

Used when we want setup code to run instantly.

Example:

(function(){
   console.log("Database Connected");
})();
3️⃣ Create Private Variables

Example:

const counter = (function(){
    let count = 0
    return function(){
        count++
        console.log(count)
    }
})()

counter()
counter()

Output

1
2

Here count is private.

8. Important Rule (Very Common Interview Question) ⚠️

When writing multiple IIFEs, you must add ;

Correct:

(function(){
    console.log("First IIFE");
})();

(function(){
    console.log("Second IIFE");
})();

Without ; it may throw error.
*/