/*

7️⃣ Truthy and Falsy Values

JavaScript sometimes converts values to true or false automatically.

Falsy values:

false
0
-0
BigInt 0n
""
null
undefined
NaN

Example

let username = ""

if(username){
   console.log("User exists")
}
else{
   console.log("No user")
}

Output

No user

Because empty string is falsy.

*/

/*
---------------------------- FALSY VALUES------------------------
false, 0, -0, BigInt 0n, null, undefined, NaN
apart from these all are truthy

----------- SOME TRUTHY VALUES--> "0", 'false' (kyunki string k andar h), " "(string k andar space h toh truthy)
[], {}, function(){} //this is empty function
*/


//to check if an array is empty

/*
if(arrayName.length === 0){
    console.log("array is empty")
}
*/

//to check if object is empty

/*
const emptyObj = {}

if(Object.keys(emptyObj)) { //this returns an array
so we can use .length here

}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}
*/


/*
    false == 0 //returns true
    false == '' //returns true
    0 == '' // returns true
*/
