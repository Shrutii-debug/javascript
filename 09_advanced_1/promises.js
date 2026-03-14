
const promiseOne = new Promise(function(resolve, reject){
    //do an async task like
    //db calls, network calls, cryptography

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    }, 1000)
})
//.then has direct connection with resolve
promiseOne.then(function(){
    console.log("promise consumed");
    
})

//another syntax
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Shruti", email: "shruti@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        //let error =  true
        let error = false
        if (!error) {
            resolve({username: "Shruti", password: "12345"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

//const username = promiseFour.then((user) => {
    promiseFour
    .then((user) => {
    console.log(user);
    return user.username
    
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(() => {
    console.log("the promise is either resolved or rejected");
    
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error =  true
        //let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

//async await
async function consumePromiseFive() {
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
    
}
consumePromiseFive()

//next part
/*
async function getAllUsers() {
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
} catch (error) {
    console.log("E:",error);
    
}
}

getAllUsers()
*/

//how to write the same in .then and .catch

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);   
})

//the output of this part is received first, then the output of others is printed
//because there is a special queue for fetch  known as callback queue
//ye call stack m sbse pehle add hogi
//read theory of fetch
/*
1. The Code at the Top
response = fetch('something')

What many beginners think:

fetch → immediately returns the response

But actually:

fetch → immediately returns a Promise

So response does NOT contain the data yet.

Instead it contains a Promise object.

Example:

const response = fetch("https://api.github.com/users")
console.log(response)

Output:

Promise { <pending> }
2. What Happens When fetch() Runs

The moment JavaScript sees:

fetch("url")

The following happens internally:

1. JS Engine calls fetch()
2. Request goes to Web APIs (browser or Node runtime)
3. Network request is sent
4. Promise object is returned immediately

So the program does not wait.

3. The Promise States (Important Part of Diagram)

In the diagram you see:

Data
OnFulfilled []
OnRejection []

This represents the internal structure of a Promise.

A promise has three states:

State	Meaning
Pending	request still running
Fulfilled	request succeeded
Rejected	request failed

Example:

fetch("url")
.then()
.catch()

Internally:

onFulfilled → .then()
onRejected → .catch()
4. The Web Browser / Node Section

In the diagram:

Web Browser / Node
↓
Network request

This means the actual HTTP request happens outside the JS engine.

JavaScript sends the request to:

Web APIs

Examples:

fetch()
setTimeout()
DOM APIs

These are provided by the browser runtime, not the JS language itself.

5. Network Request Result

The network request can have two outcomes.

Success
✔ request completed

Example response:

HTTP 200
data received

The promise becomes:

Fulfilled

Then .then() runs.

Failure
✖ request failed

Example:

network error
invalid URL
server down

The promise becomes:

Rejected

Then .catch() runs.

6. Global Memory Section (Right Side of Diagram)

In the diagram you see:

Global Memory
response:

When you write:

const response = fetch("url")

JavaScript stores a reference to the Promise in global memory.

So the memory contains:

response → Promise

Later when the promise resolves:

response → fulfilled promise
7. Where .then() Goes

Example:

fetch("url")
.then(data => console.log(data))
.catch(err => console.log(err))

Internally:

onFulfilled → stored in promise
onRejected → stored in promise

These callbacks wait until the promise resolves.

8. Event Loop Interaction

Once the request finishes:

Promise resolution
↓
Microtask Queue
↓
Event Loop
↓
Call Stack
↓
.then() executes

Important:

Promises use Microtask Queue

Which has higher priority than normal callbacks.

9. Example Full Flow

Code:

console.log("Start")

fetch("https://api.github.com/users")
.then(res => res.json())
.then(data => console.log(data))

console.log("End")

Execution:

Start
End
(data prints later)

Why?

Because fetch is asynchronous.

10. Internal Flow of Fetch (Step-by-Step)
JS Engine
   ↓
fetch()
   ↓
Promise created
   ↓
Network request sent (Web API)
   ↓
Response received
   ↓
Promise resolved/rejected
   ↓
Microtask Queue
   ↓
Event Loop
   ↓
.then() / .catch() executes
11. Important Concept: Promise Resolution

When a request succeeds:

Promise → Fulfilled

Then:

.then()

runs.

When it fails:

Promise → Rejected

Then:

.catch()

runs.

12. Real Example
fetch("https://api.github.com/users/octocat")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))

Flow:

fetch → Promise
↓
Network request
↓
Response received
↓
.then() executes
13. Important Beginner Confusion

Many people think:

fetch() returns data

But actually:

fetch() returns Promise

So this is wrong:

const data = fetch("url")
console.log(data)

Correct:

fetch("url")
.then(res => res.json())
.then(data => console.log(data))
14. Why JavaScript Uses This Model

Because JavaScript is:

Single-threaded

If fetch waited synchronously:

the browser would freeze

So instead:

send request → continue running → handle result later
15. Short Mental Model
fetch()
↓
returns Promise
↓
network request
↓
Promise resolves/rejects
↓
.then() / .catch()

✅ Main takeaway from this diagram

fetch does not return data
fetch returns a Promise

The actual data arrives later through the promise resolution system.
*/