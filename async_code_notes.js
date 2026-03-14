/*
1. javascript --> (Default js behaviour)
            synchronous
            single threaded

2. execution context-->
            execute one line of code at a time
            console log --> 1
            console log --> 2
//jabtak purana statement execute nhi hojata h tabtak naya statement execute nhi hoskta
//each operation waits for the last one to complete before executing

3. blocking code vs non blocking code
blocking code --> block the flow of program ----> read file: sync
 
non blocking code --> does not block execution -----> read file: async

//agar hum non blocking code use krte h toh humara file read hoke ata h aur program ka execution rukta ni h, wo chalta h

//lekin for example : database, wo v end of the day ek file hi toh h
//toh maanlo aisa hua ki merepas ek user aaya h, uska details leke merko database m daalna h aur usko message dena h registration successful ka
//agar non blocking code likhte ho toh database v toh yahi h ki  ek read write operation horha h file m
//toh iss case m  yahi hoga ki wo apna write horha h lekin uss se pehle hi hum user ko msg derhe h ki registration successful
//hoskta h koi error aajaye toh iss case m toh blocking code hi likhna sahi h,

//toh kounsa code likhna h depend krta h use case pe





*/

/*

1. What “Async” Means

He starts by explaining synchronous vs asynchronous code.

Synchronous execution

JavaScript normally runs one line at a time.

Example:

console.log("one")
console.log("two")
console.log("three")

Output:

one
two
three

Because JavaScript is:

single-threaded

Meaning only one task runs at a time.

2. The Problem With Synchronous Code

He explains a real scenario.

Example:

User clicks login
↓
Server request
↓
Wait for response

If everything was synchronous:

the whole application would freeze

Until the response arrives.

Example problem:

console.log("start")

// imagine a heavy task
for(let i=0; i<1000000000; i++){}

console.log("end")

During the loop, the browser cannot do anything else.

This is called blocking code.

3. Blocking vs Non-Blocking Code

He introduces two terms.

Blocking code
Blocks the program execution

Example:

reading a large file synchronously
Non-Blocking code
Does not block the program

Example:

API request
database call
timers

JavaScript prefers non-blocking operations.

4. Why JavaScript Needs Async

He explains that many tasks take time:

API requests
database queries
file reading
timers

Instead of stopping the program, JavaScript says:

Do this work and tell me later when it's done

That is asynchronous programming.

5. JavaScript Engine Basics

He then explains the JavaScript runtime architecture.

Main parts:

JS Engine
Web APIs
Callback Queue
Event Loop
6. JS Engine Components

Inside the JS engine there are two main parts:

Memory Heap
Stores variables and objects

Example:

let name = "Hitesh"

Stored in heap.

Call Stack
Executes functions

Example:

function one(){
  two()
}

function two(){
  console.log("Hello")
}

one()

Stack execution:

one()
two()
console.log()

Functions are pushed and popped from the stack.

7. What Happens With Async Code

Now comes the important part.

Example:

setTimeout(function(){
   console.log("Hello")
}, 2000)

He explains the flow.

Step-by-step:

1 JS engine sees setTimeout
2 It sends it to Web API
3 Timer starts
4 After 2 sec → callback goes to queue
5 Event loop checks stack
6 If stack empty → callback runs
8. Web APIs

He explains that browsers provide Web APIs.

Examples:

setTimeout
setInterval
DOM APIs
fetch

These run outside the JavaScript engine.

So JS can keep executing other code.

9. Callback Queue

After async work finishes:

callbacks go into queue

Example:

setTimeout callback
event listeners
API responses

Queue structure:

First In → First Out
10. Event Loop

This is the most important concept.

The event loop constantly checks:

Is call stack empty?

If yes:

Take a callback from queue
Push it to stack
Execute it

Flow:

Call Stack empty
↓
Event Loop checks queue
↓
Push callback to stack
↓
Execute callback
11. Example Execution

Code:

console.log("start")

setTimeout(function(){
  console.log("inside timeout")
},2000)

console.log("end")

Output:

start
end
inside timeout

Why?

Execution flow:

1 start → printed
2 setTimeout → sent to Web API
3 end → printed
4 after 2 sec → callback executes
12. High Priority Queue (Promises)

He also mentions that Promises have a higher priority queue.

Queues:

Microtask Queue → Promises
Callback Queue → setTimeout

Priority order:

Microtask Queue first
Then Callback Queue
13. Key Idea He Wants Students to Understand

Before learning:

Promises
Async/Await
Fetch API

You must understand:

How async JavaScript works internally

Otherwise the syntax will make no sense.

14. Final Mental Model

JavaScript runtime:

Call Stack
   ↓
Web APIs
   ↓
Callback Queue
   ↓
Event Loop
   ↓
Call Stack
15. The Core Takeaway

JavaScript is:

single threaded
synchronous by nature
but handles async tasks using the event loop

So it appears to run multiple tasks without blocking.

✅ The main point of the video

He is preparing you for the next topics:

Callbacks
Promises
Async/Await
Fetch API

By explaining how asynchronous JavaScript actually works internally.
*/


/*
                    ┌─────────────────────────────┐
                    │          JS ENGINE          │
                    │                             │
                    │   ┌──────────────┐          │
                    │   │ Memory Heap  │          │
                    │   │              │          │
                    │   │ Variables    │          │
                    │   │ Objects      │          │
                    │   └──────────────┘          │
                    │                             │
                    │   ┌──────────────┐          │
                    │   │   Call Stack │          │
                    │   │              │          │
                    │   │   fn()       │
                    │   │   fn()       │
                    │   │   fn()       │
                    │   │   Global()   │
                    │   └──────────────┘
                    └──────────┬──────────────────┘
                               │
                               │ async calls
                               ▼
                ┌──────────────────────────────────┐
                │             WEB APIs             │
                │                                  │
                │  DOM API                         │
                │  setTimeout()                    │
                │  setInterval()                   │
                │  fetch()                         │
                │                                  │
                │  register callback               │
                └───────────────┬──────────────────┘
                                │
                                │
                                ▼

                    ┌─────────────────────┐
                    │   MICROTASK QUEUE   │
                    │  (High Priority)    │
                    │                     │
                    │  Promise callbacks │
                    │  .then()           │
                    │  fetch() results   │
                    └──────────┬──────────┘
                               │
                               │
                               ▼

                    ┌─────────────────────┐
                    │      TASK QUEUE     │
                    │   (Callback Queue)  │
                    │                     │
                    │ setTimeout CB      │
                    │ setInterval CB     │
                    │ DOM events         │
                    │                    │
                    │ FIFO execution     │
                    └──────────┬──────────┘
                               │
                               │
                               ▼

                         ┌──────────────┐
                         │  EVENT LOOP  │
                         │              │
                         │ checks stack │
                         │ if empty →   │
                         │ move task to │
                         │ call stack   │
                         └──────┬───────┘
                                │
                                ▼

                         ┌──────────────┐
                         │  CALL STACK  │
                         │  executes CB │
                         └──────────────┘



                         
Example Flow with setTimeout

Example code:

console.log("start")

setTimeout(() => {
   console.log("inside timeout")
}, 2000)

console.log("end")

Execution order:

Call Stack:
start → printed

setTimeout → sent to Web API

Call Stack continues:
end → printed

After 2 seconds:
callback → Task Queue

Event Loop → moves callback to Call Stack

inside timeout → printed

Output:

start
end
inside timeout
Queue Priority (Important)
1️⃣ Microtask Queue (Promises, fetch)
2️⃣ Task Queue (setTimeout, events)

The event loop always processes microtasks first.
*/


/*
1. The Whole System (Big Picture)

The diagram shows how JavaScript handles asynchronous operations even though JavaScript is single-threaded.

Main components in the diagram:

JS Engine
Web APIs
Callback Queue
Microtask Queue
Event Loop

Flow:

Call Stack
↓
Web APIs
↓
Queues
↓
Event Loop
↓
Back to Call Stack
2. JS Engine (Left Yellow Box)

Inside the JS Engine there are two parts.

1️⃣ Memory Heap
Memory Heap

Purpose:

Stores variables and objects

Example:

let name = "chai aur code"

The variable name is stored in heap memory.

2️⃣ Call Stack
Call Stack

This is where functions execute.

Example:

function one(){
   two()
}

function two(){
   console.log("Hello")
}

one()

Stack execution:

Global()
one()
two()
console.log()

Functions are:

pushed → executed → popped
3. Web APIs (Green Box)

These are not part of JavaScript itself.

They are provided by the browser environment.

Examples shown in the diagram:

DOM API
setTimeout
setInterval
fetch()

When JavaScript encounters async functions, it sends them here.

4. Example — setTimeout

Example code:

setTimeout(function(){
   console.log("hello")
},2000)

Step-by-step execution:

Step 1

JS Engine sees:

setTimeout

It sends it to:

Web API
Step 2

Web API starts the timer.

Timer = 2000ms

Meanwhile JavaScript continues executing other code.

Step 3

After the timer finishes:

The callback function is registered.

Diagram shows:

Register Callback

Then it moves to the Task Queue.

5. Task Queue (Callback Queue)

The bottom white box represents the:

Task Queue

Also called:

Callback Queue

It stores callbacks like:

setTimeout callbacks
event listeners
DOM events

Structure:

FIFO
First In First Out

Example queue:

CB
CB
CB
6. Microtask Queue (High Priority Queue)

The pink box represents:

Microtask Queue

This is used by:

Promises

Example:

fetch()
.then()

When a promise resolves, its callback goes to the microtask queue.

He highlights in the diagram:

High Priority

Meaning:

Microtask Queue executes before Callback Queue
7. Event Loop (Bottom)

The event loop is the manager.

It constantly checks:

Is the call stack empty?

If yes:

Take a task from queue
Push it to call stack
Execute it

Flow:

Queue → Event Loop → Call Stack
8. Complete Flow of setTimeout

Example:

console.log("start")

setTimeout(()=>{
  console.log("inside timeout")
},2000)

console.log("end")

Execution:

Step 1
start

Printed immediately.

Step 2
setTimeout

Sent to Web API timer.

Step 3

Next line runs.

end

Printed immediately.

Step 4

After 2 seconds:

callback → task queue
Step 5

Event loop checks:

Is stack empty?

Yes.

Step 6

Callback moves to stack.

console.log("inside timeout")

Output:

start
end
inside timeout
9. Important Point About setTimeout

Many beginners think:

setTimeout(fn,2000)

means:

function will run exactly after 2 seconds

But actually:

minimum delay = 2 seconds

Because the callback will run only when the call stack is empty.

Example:

setTimeout(()=>console.log("A"),0)

console.log("B")

Output:

B
A

Even though delay = 0.

Reason:

Callback goes to queue
Waits for stack to clear
10. fetch() in the Diagram

The diagram shows:

fetch()

It behaves differently.

Instead of going to the normal queue:

Promise → Microtask Queue

Since microtask queue has higher priority, promise callbacks execute first.

Priority order:

1 Microtask Queue
2 Task Queue
11. Why JavaScript Uses This System

Because JavaScript is:

Single Threaded

It cannot run multiple tasks simultaneously.

So async operations are handled by:

Web APIs
Event Loop
Queues

This makes JavaScript non-blocking.

12. Final Mental Model

Complete flow:

JS Engine
   ↓
Call Stack
   ↓
Async task → Web APIs
   ↓
Queues
   ↓
Event Loop
   ↓
Back to Call Stack
13. The Key Lesson from the Diagram

JavaScript doesn't run async code directly.

Instead it:

delegates async tasks
waits for completion
then executes callbacks

✅ Core takeaway of the video

JavaScript handles async behavior using:

Call Stack
Web APIs
Microtask Queue
Task Queue
Event Loop
*/

