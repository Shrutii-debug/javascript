/* 
JavaScript is a dynamically typed language. This means that you do not need to explicitly declare the data type of a variable when you define it, and the type of a variable can change during the execution of the program. Type checking is performed at runtime, not at compile time. 
Key Characteristics of Dynamically Typed Languages (like JavaScript)
No Explicit Declaration: You can declare a variable without specifying whether it will hold a number, a string, or an array.
javascript
let x = 5; // x is a number
x = "Hello"; // x is now a string
x = [1, 2, 3]; // x is now an array
Runtime Type Checking: Errors related to type mismatches are caught when the program is running, not before it runs (at compile time).
Flexibility and Rapid Prototyping: The lack of strict type definitions allows for faster prototyping and a more flexible coding style, making it easier for beginners.
Weak Typing: JavaScript is also a weakly typed language, which means it performs implicit type coercion, automatically converting between different data types during operations (e.g., adding a number to a string). 
For developers who prefer static typing, the language TypeScript, a superset of JavaScript, adds optional static typing features that allow for type checks during development (compile time). 
*/

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null //null means empty not 0
let userEmail; //value is simply undefined as we have not initialized anything


const id = Symbol('123')
const anotherId = Symbol('123') //iska typeof bhi symbol hi aata h

console.log(id === anotherId);

// in symbol even if you give the same values, both the variables will not return equal values



// const bigNumber = 3456543576654356754n //js uses bigInt to store such data

// TO MASTER JS, MASTER OBJECTS AND WEB BROWSER EVENTS

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];


let myObj = {
    name: "hitesh",
    age: 22,
}
 //function() is a function and we are storing it in a variable myFunction
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction) //returns function , the datatype of func is "object function"

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/*
| Type of val                                         | Result                                                                                         |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Undefined                                           | `"undefined"`                                                                                  |
| Null                                                | `"object"`                                                                                     |
| Boolean                                             | `"boolean"`                                                                                    |
| Number                                              | `"number"`                                                                                     |
| String                                              | `"string"`                                                                                     |
| Object (native and does not implement [[Call]])     | `"object"`                                                                                     |
| Object (native or host and does implement [[Call]]) | `"function"`                                                                                   |
| Object (host and does not implement [[Call]])       | Implementation-defined except may not be `"undefined"`, `"boolean"`, `"number"`, or `"string"` |
*/
