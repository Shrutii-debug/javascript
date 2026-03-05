//browser ka global object is window object

const user = {
    username: "shruti", 
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website` ); //this refers to current context(scope)
        console.log(this);
        
    }
}

/*
user.welcomeMessage()
user.username = "sam" //here we changed the context
user.welcomeMessage()
*/

console.log(this); //this returns empty parentheses as there is no global context

/* 
1. this in JavaScript (Core Concept)

this refers to the current execution context (the object that is calling the function).

But its value changes depending on where the function is used.

Example
const user = {
  username: "shruti",
  price: 999,

  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  }
}
What happens here

When you call:

user.welcomeMessage()

Output:

shruti, welcome to website
{ username: "shruti", price: 999, welcomeMessage: f }
Why?

Because the function is inside the object, so this refers to the user object.

So:

this.username  → user.username
2. Changing Object Values and Context

From your code:

user.welcomeMessage()

user.username = "sam"  // changed value

user.welcomeMessage()
Output
shruti, welcome to website
sam, welcome to website
Why?

Because this.username always refers to the current value inside the object.

So when you update the object:

username: "sam"

this.username automatically reflects the change.

3. Global Context (this outside object)

Your code:

console.log(this);
Result depends on environment.
Environment	Output
Browser	window object
Node.js	{} empty object

Your comment in the code:

// browser ka global object is window object

✔ Correct.

Example in browser:

console.log(this)

Output:

Window { ... }
4. this inside a normal function

Your second screenshot shows:

function chai(){
  let username = "hitesh"
  console.log(this.username)
}

chai()
Output
undefined
Why?

Because:

username is not a property of this.

It is just a local variable inside the function.

So:

this.username ❌
username ✔

Correct version:

function chai(){
  let username = "hitesh"
  console.log(username)
}

chai()

Output:

hitesh
*/



//Arrow functions are written like this:
//just remove the func name and give arrow


const chai = () => {
  let username = "hitesh"
  console.log(this)
}

/*
Arrow functions do NOT have their own this.
They inherit this from their parent scope.
Example:
const chai = () => {
  console.log(this)
}
chai()

In Node: {}
In Browser: Window
*/

//ways of writing arrow functions
//normal way

/* explicit return
const addTwo = (num1, num2) => {
    return num1 + num2;
}
    */

//implicit return
const addTwo = (num1, num2) =>  num1 + num2;

//{} mein likha toh return keyword use rkna hoga aur parenthesis m likha toh nahi krna h
const add = (num1, num2) =>  (num1 + num2);

//parenthesis use kr rhe h kyunki yaha  toh theek h num return kr rhe but agar object ko 
//return krna hoga wo aise ni krskte usko parenthesis m wrap krke hi return krna hota h
const addTwoo = (num1, num2) => ({username: "shruti"})

console.log(addTwo(3,4));
