/* 
avaScript Event Loop (with the diagram logic) 🔁

The Event Loop explains how JavaScript handles asynchronous operations (like setTimeout, API calls, promises) even though JavaScript is single-threaded.

To understand the event loop diagram, we need to know 5 components that appear in most diagrams.

1️⃣ Components of the Event Loop Diagram

Typical diagram structure:

Call Stack
    ↑
Event Loop
    ↓
Callback Queue
    ↓
Web APIs

Let's understand each.

2️⃣ Call Stack

You already learned this.

The Call Stack is where JavaScript executes functions.

Example:

console.log("Start")
console.log("End")

Execution:

Call Stack
-----------
console.log
console.log
Global

It runs synchronously (line by line).

3️⃣ Web APIs (Browser Environment)

When JavaScript encounters asynchronous code, it does not execute it directly.

Instead, the browser sends it to Web APIs.

Examples of Web APIs:

setTimeout

setInterval

fetch

DOM events

addEventListener

Example:

setTimeout(() => {
   console.log("Hello")
}, 2000)

What happens:

setTimeout → sent to Web API

The browser starts the timer outside the call stack.

4️⃣ Callback Queue (Task Queue)

After the Web API finishes its work, the callback moves to the Callback Queue.

Example after 2 seconds:

Callback Queue
--------------
console.log("Hello")

But it does not run immediately.

It must wait.

5️⃣ Event Loop (The Manager)

The Event Loop continuously checks:

Is Call Stack empty?

If YES, it pushes the first callback from the queue to the Call Stack.

Callback Queue → Call Stack

Then the callback executes.

6️⃣ Full Event Loop Flow

Example:

console.log("Start")

setTimeout(() => {
   console.log("Timer")
}, 2000)

console.log("End")
Step 1 — Global Execution
Call Stack
-----------
console.log("Start")

Output:

Start
Step 2 — setTimeout
setTimeout → Web API

Timer starts in browser.

Step 3 — Next line
console.log("End")

Output:

End
Step 4 — Timer finishes

Callback moves to Callback Queue

Callback Queue
--------------
console.log("Timer")
Step 5 — Event Loop checks stack

If Call Stack is empty:

Callback → Call Stack

Then it executes.

Output:

Timer
7️⃣ Final Output
Start
End
Timer

Even though setTimeout appears earlier in code.

8️⃣ Event Loop Diagram (Simple)
        Call Stack
             ↑
             |
        Event Loop
             |
             ↓
       Callback Queue
             ↑
             |
          Web APIs

Flow:

Async Task → Web API
        ↓
Callback Queue
        ↓
Event Loop
        ↓
Call Stack
9️⃣ Why Event Loop Exists

Because JavaScript is single-threaded.

Meaning:

One task at a time

Without the event loop, things like:

API requests

timers

UI events

would block the program.

🔟 Simple Real-Life Analogy

Imagine a restaurant waiter.

Call Stack → Chef cooking food
Web API → Kitchen staff preparing dishes
Callback Queue → Orders ready
Event Loop → Waiter checking when chef is free

When chef is free → waiter brings next order.

1️⃣1️⃣ Key Rule to Remember

The Event Loop moves tasks only when the Call Stack is empty.

✅ Interview Definition

The Event Loop is a mechanism that continuously checks the call stack and callback queue and moves callbacks to the call stack when it becomes empty, enabling asynchronous behavior in JavaScript.
*/