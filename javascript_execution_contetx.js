/*
JavaScript creates an Execution Context whenever it runs code.

There are 3 types shown in the diagram:

1️⃣ Global Execution Context (GEC)

Created when the program starts running.

Example:

let a = 10

When the JS file runs:

Global Execution Context is created

Important things created here:

Global Object
this
Memory for variables

In browser:

this → window
2️⃣ Function Execution Context (FEC)

Whenever a function runs, a new execution context is created.

Example:

function add(a,b){
  return a+b
}

add(2,3)

When add() runs:

Function Execution Context created

So each function call gets its own environment.

3️⃣ Eval Execution Context

Used when JavaScript executes code inside:

eval()

Example:

eval("let x = 10")

But this is rarely used and mostly avoided.

2️⃣ Global Execution + Memory Phase (second screenshot)

Now look at the code written on the board:

let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

JavaScript runs this in two phases.

3️⃣ Phase 1 — Memory Creation Phase

In your screenshot the board shows:

val1 → undefined
val2 → undefined
addNum → definition
result1 → undefined
result2 → undefined

This phase is called hoisting phase.

JavaScript scans the entire code and allocates memory.

Result in memory:

val1 = undefined
val2 = undefined
addNum = function definition
result1 = undefined
result2 = undefined

Important rule:

Variables → undefined
Functions → full definition
4️⃣ Phase 2 — Execution Phase

Now JavaScript runs code line by line.

Step 1:

val1 = 10

Step 2:

val2 = 5

Step 3:

Function addNum is already stored.

Nothing happens yet.

Step 4:

result1 = addNum(val1,val2)

Now the function is called.

So JavaScript creates a new Function Execution Context.

5️⃣ Function Execution Context (third screenshot)

Inside addNum() the board shows another memory phase.

num1 → undefined
num2 → undefined
total → undefined

Then execution phase:

num1 = 10
num2 = 5
total = 15

Return value:

15

So:

result1 = 15

After the function finishes:

Function Execution Context is deleted

(You can see "Delete" written in the screenshot.)

6️⃣ Same Process Happens Again

Next line:

result2 = addNum(10,2)

Again:

New Function Execution Context created

Memory phase:

num1 → undefined
num2 → undefined
total → undefined

Execution phase:

num1 = 10
num2 = 2
total = 12

Return:

result2 = 12
7️⃣ What the Big Arrows Mean in the Diagram

The arrows in your screenshot represent Call Stack flow.

Execution order:

Global Execution Context
        ↓
addNum() execution context
        ↓
Delete after return
        ↓
addNum() execution context again
        ↓
Delete
8️⃣ Final Values After Execution

After the entire program runs:

val1 = 10
val2 = 5
result1 = 15
result2 = 12
9️⃣ The Box on the Right (Important)

In the screenshot you see a box:

New Variable Environment
Execution Thread

This means every execution context contains:

1️⃣ Variable Environment

Stores variables and functions.

Example:

val1
val2
total
2️⃣ Execution Thread

Executes code line by line.

JavaScript is single-threaded, meaning:

One command at a time
🔟 Whole Flow in One Simple Diagram
GLOBAL EXECUTION CONTEXT
       ↓
Memory Phase
(val1,val2,addNum,result1,result2)

       ↓
Execution Phase

val1 = 10
val2 = 5

result1 = addNum()
       ↓
Function Execution Context
       ↓
return 15

result2 = addNum()
       ↓
Function Execution Context
       ↓
return 12
*/


//____________________________________ CALL STACK _______________________________________

/*
1️⃣ What is a Call Stack?

The Call Stack is a data structure that keeps track of function execution.

It follows the rule:

LIFO → Last In First Out

Meaning:

Last function added → First function removed

Think of it like a stack of plates 🍽️.

Add plate → top
Remove plate → top
2️⃣ How Call Stack Works

Example:

function one() {
  console.log("one");
}

function two() {
  one();
  console.log("two");
}

function three() {
  two();
  console.log("three");
}

three();
3️⃣ Step-by-Step Call Stack Flow
Step 1 — Global Execution Context

When JS starts running:

CALL STACK

| Global() |
Step 2 — three() is called
CALL STACK

| three() |
| Global()|
Step 3 — two() is called
CALL STACK

| two()   |
| three() |
| Global()|
Step 4 — one() is called
CALL STACK

| one()   |
| two()   |
| three() |
| Global()|
Step 5 — one() finishes

It gets removed.

| two()   |
| three() |
| Global()|
Step 6 — two() finishes
| three() |
| Global()|
Step 7 — three() finishes
| Global()|
4️⃣ Visual Representation
CALL STACK

| one()   |  ← runs first
| two()   |
| three() |
| Global()|

When a function finishes, it is popped off the stack.

5️⃣ Example with the Code from Your Video

From the lecture:

let val1 = 10
let val2 = 5

function addNum(num1, num2){
  let total = num1 + num2
  return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10,2)
Call Stack Flow

Start:

| Global() |

Call addNum() for result1:

| addNum() |
| Global() |

After returning:

| Global() |

Call addNum() again:

| addNum() |
| Global() |

After return:

| Global() |

End of program:

(empty)
6️⃣ Stack Overflow (Important)

If functions keep calling each other without stopping, the stack fills up.

Example:

function test(){
   test()
}

test()

This causes:

Maximum call stack size exceeded

This is called Stack Overflow.

7️⃣ Why Call Stack is Important

It helps JavaScript:

track which function is running

know where to return after execution

manage nested function calls

detect recursion errors

8️⃣ Simple Definition (Interview Style)

Call Stack is a stack data structure used by JavaScript to keep track of function execution order.

9️⃣ Very Simple Mental Model
Function called → push to stack
Function finished → pop from stack

💡 One important thing most beginners miss:

The call stack works together with Web APIs and the Event Loop for async JavaScript (setTimeout, promises, etc.).
*/