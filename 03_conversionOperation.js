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
//console.log(typeof(stringNumber)) // number is converted to string



// ********************** OPERATIONS ****************************

let value = 3
let negValue = -value
//console.log(negValue) // returns -3

//basic operations
/*
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/3)
console.log(2%2)
*/

let str1 = "hello"
let str2 = " shruti"

let str3 = str1 + str2
//console.log(str3) // returns hello shruti

//this is where the problem arrives

//console.log("1" + 2)
//console.log(1 + "2")
//both returns 12 but what if

//console.log("1" + 2 + 2) //returns 122, it converts everything to string
//but what if

//console.log(1 + 2 + "2") // adds 1 and 2 which is 3 and then returns 32 by treating both as strings

// overall in js , agar string first h btoh sbhi ko string ki tarah treat kiya jayega
// and agar string last h toh phle jo operation h wo hojayega aur fir string k sath jod dengey

//*****************some more operations  ******************
/*
console.log(+true)
console.log(+"")
this is not used in production
*/

//prefix and postfix operators (js mdn)
//++a a++ 

//for more study from documentation



