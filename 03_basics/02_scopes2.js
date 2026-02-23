//take the example of icecream for block and global scopes
//agar bacche bade se icecream cheen k khaate h toh theek hai
//lekin agar bade cheen k khayengey toh acha ni lagega na bas wahi h global aur block scope


function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username);
    }

    // console.log(website);

    two();
}

one();


/*
🔥 Step-by-Step Scope Explanation
🟢 Step 1: one() is called
one();

Execution goes inside function one.

Inside one, we create:

username = "hitesh"

This variable is function-scoped to one().

That means:

Accessible inside one

Accessible inside any nested function inside one

NOT accessible outside one

🟢 Step 2: Function two() is defined inside one()

Now we have:

one
 └── two

This creates a nested scope.

This is called Lexical Scope.

🔥 Very Important Concept: Lexical Scope

In JavaScript:

Inner functions can access variables of outer functions.

But outer functions cannot access variables of inner functions.

🟢 Step 3: Inside two()
const website = "youtube";
console.log(username);

Now when console.log(username) runs:

JS looks for username in this order:

1️⃣ Inside two() → Not found
2️⃣ Go to parent scope (one()) → Found ✅

So it prints:

hitesh
🔥 Why does this work?

Because of Scope Chain.

JavaScript searches variables:

Current scope

Then outer scope

Then outer of outer

Until global scope

🟢 Step 4: What if we uncomment this?
// console.log(website);

If you move it outside two():

console.log(website);

You will get:

ReferenceError: website is not defined

Why?

Because:

website belongs ONLY to two()

one() cannot access variables inside two()

🔥 Visual Representation
Global Scope
   ↓
function one()
   username = "hitesh"
      ↓
   function two()
       website = "youtube"

Access Rules:

From Where	Can Access
two()	website + username
one()	username only
Global	nothing inside
🎯 Final Output

When you run:

one();

Output will be:

hitesh

Because:

two() gets called

two() logs username

It finds username in parent scope
*/

if (true) {
    const username = "hitesh";

    if (username === "hitesh") {
        const website = " youtube";
        console.log(username + website);
    }

    //console.log(website);
}

//console.log(username);

/*
🟢 Step 1: Outer Block
if (true) {
    const username = "hitesh";

username is block-scoped.

It exists ONLY inside this first { }.

🟢 Step 2: Inner Block
if (username === "hitesh") {
    const website = " youtube";
    console.log(username + website);
}

Here:

website is scoped ONLY inside inner block.

username is accessible here because inner blocks can access outer variables.

This works because of scope chain.

✅ First Console Output
console.log(username + website);

JavaScript looks for variables:

website → found in inner block ✅

username → not in inner block → go one level up → found ✅

So output will be:

hitesh youtube
🔴 Step 3: This Line
console.log(website);

This is outside the inner block.

Now JavaScript looks for website:

Current scope → not found

No parent inside outer block (because website was inside inner block)

So ❌ ERROR:

ReferenceError: website is not defined
🔴 Step 4: Outside Everything
console.log(username);

Now we are outside the first block too.

username was declared inside the first if block.

So ❌ ERROR:

ReferenceError: username is not defined
🔥 Important Rule Demonstrated Here
Inner blocks can access outer variables.
Outer blocks CANNOT access inner variables.

Scope works outward only, never inward.

🧠 Scope Flow Example

When JS searches for a variable:

1️⃣ Look in current block
2️⃣ If not found → go to parent block
3️⃣ Keep going up
4️⃣ Stop at global

It never looks inside child blocks.

🎯 Final Output Summary

If you run this code exactly as written:

It will print:

hitesh youtube

Then it will crash with:

ReferenceError: website is not defined

So the last console.log(username) will never execute because execution stops at error.

🔥 If You Comment Error Lines

If you comment:

// console.log(website);
// console.log(username);

Then only output will be:

hitesh youtube
*/


//***********************HOISTING ************************** */

console.log(addone(5))

function addone(num){
    return num + 1
}


addTwo(5)

const addTwo = function(num){
    return num + 2
}

/*
PART 1 — Function Declaration
console.log(addone(5))

function addone(num){
    return num + 1
}
🟢 Why This Works (Hoisting)

In JavaScript:

👉 Function Declarations are fully hoisted.

That means:

Before execution, JS internally moves this to the top:

function addone(num){
    return num + 1
}

So memory phase becomes:

addone → function reference stored

So when this runs:

console.log(addone(5))

It works perfectly.

✅ Output
6
🔥 PART 2 — Function Expression
addTwo(5)

const addTwo = function(num){
    return num + 2
}
🟥 Why This Fails

Here:

const addTwo = function(num){...}

This is NOT a function declaration.

This is:

A variable declaration (const addTwo) + anonymous function assigned to it.

🔥 Hoisting Behavior Here

const is hoisted BUT:

It is placed in Temporal Dead Zone (TDZ)

It is NOT initialized

It cannot be accessed before declaration

So during memory phase:

addTwo → uninitialized (TDZ)

Then when this runs:

addTwo(5)

JS says:

❌ Cannot access 'addTwo' before initialization

🚨 Error
ReferenceError: Cannot access 'addTwo' before initialization

Execution stops here.

🔥 KEY DIFFERENCE
Feature	Function Declaration	Function Expression
Hoisted?	Yes (fully)	No (only variable is hoisted)
Can call before definition?	✅ Yes	❌ No
Stored in memory phase?	Entire function	Only variable placeholder
🧠 What Happens Internally

JavaScript runs in 2 phases:

1️⃣ Memory Phase (Creation Phase)

Function declarations → stored completely

Variables (var) → undefined

let/const → TDZ (not usable)

2️⃣ Execution Phase

Code runs line by line.

🔥 Why const Makes It Worse

If it was:

var addTwo = function(num){
    return num + 2
}

Then calling before declaration gives:

TypeError: addTwo is not a function

Because:

var addTwo is hoisted as undefined

So you're trying to call undefined(5)

🎯 Final Output of Your Code

The first line:

6

Then execution crashes with:

ReferenceError: Cannot access 'addTwo' before initialization
*/