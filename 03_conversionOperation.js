let score = 33
let score1 = "33" //inside double quotes a number becomes a string
let score2 = "33abc"
let score3 = null
let score4 = undefined
let score5 = true
let score6 = "shruti"

//console.log(typeof score);
//console.log(typeof (score1)); //as a method

//agar humko 100% number pe kaam krna h , toh hum aise string ko num m convert kr skte h


let valueInNumber = Number(score1)
//console.log(typeof valueInNumber)

let valueInNumber2 = Number(score2)
//console.log(typeof valueInNumber2)
//console.log(valueInNumber2)



/*
33 => 33
"33abc" => NaN
true  => 1; false => 0
*/
// null ka type aayega 0

// agar koi string h maanlo "shruti" toh obviously ye number m convert ni hoskta toh iska aayega NaN

/*
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)   // this returns true and O rehne se false aayega

let isLoggedIn2 = ""

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)  // this returns false

let isLoggedIn3 = "shruti"

let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3)   // this returns true

*/


let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof(stringNumber)) // number is converted to string