//always use let or const kyunki var scope wali cheezon m v output dedeta h jabki error dena chahiye usme

/*
1️⃣ Basic Control Flow (Default Behavior)

JavaScript executes code line by line.

Example:

console.log("Start")
console.log("Middle")
console.log("End")

Output

Start
Middle
End

Execution order:

Start → Middle → End

But sometimes we want to run code only if some condition is true.

That’s where control flow statements come in.

2️⃣ if Statement

Used to run code only when a condition is true.

Syntax

if(condition){
   code
}

Example

let age = 20

if(age >= 18){
   console.log("You can vote")
}

Output

You can vote

Explanation

Condition → age >= 18
If true → run code
If false → skip
3️⃣ if...else

If condition is false, run another block.

let age = 16

if(age >= 18){
   console.log("Adult")
}else{
   console.log("Minor")
}

Output

Minor

Flow

Condition true? → Yes → run IF
Condition true? → No → run ELSE
4️⃣ else if

Used when there are multiple conditions.

let marks = 75

if(marks >= 90){
   console.log("Grade A")
}
else if(marks >= 70){
   console.log("Grade B")
}
else{
   console.log("Grade C")
}

Output

Grade B

JavaScript checks conditions one by one.

5️⃣ Comparison Operators

Used in conditions.

Operator	Meaning
==	equal value
===	equal value + type
!==   
!=	not equal
>	greater
<	smaller
>=	greater or equal
<=	smaller or equal

Example

console.log(5 == "5")   // true
console.log(5 === "5")  // false

Why?

==  → checks only value
=== → checks value + type
6️⃣ Logical Operators

Used to combine conditions.

AND (&&)

Both conditions must be true.

if(age > 18 && age < 60){
   console.log("Working age")
}
OR (||)

At least one condition must be true.

if(role === "admin" || role === "manager"){
   console.log("Access allowed")
}
NOT (!)

Reverses a condition.

let isLoggedIn = false

if(!isLoggedIn){
   console.log("Please login")
}

*/


/*
 
if(true){

} //ye wala humesha execute hota h

if(false){
} //ye wala condition kbhi execute ni hoga kyunki false h
*/


// Nullish Coalescing Operator (??): null undefined
//made only for null and undefined values to handle them

/* 
let val1
val1 = 5 ?? 10 //output is 5
val1 = null ?? 10 //output is 10

val1 = undefined ?? 15 //returns 15

val1 = null ?? 10 ?? 20 //returns 10

console.log(val1)
*/


/*
9️⃣ Ternary Operator

Short version of if...else.

Syntax

condition ? trueCode : falseCode

Example

let age = 20

age >= 18 ? console.log("Adult") : console.log("Minor")

Output

Adult
*/