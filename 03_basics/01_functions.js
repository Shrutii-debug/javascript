//the whole is function syntax

function sayMyName(){
    //the below lines mentioned are called function definition
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("U");
    console.log("T");
    console.log("I");
}


//  sayMyName --> this is function reference

//  sayMyName()   //--> this is execution


/*
function addTwoNumbers(number1, number2){ //ab kyunki idhr numbers add krna h toh number dena v toh padega
    //ye jo number yahan pe diya h isko bolte h parameters jab hum func ki definition banate h toh
    //jo v usme input daalte h usko parameters bolte h
    console.log(number1 + number2);
    
}
*/



// yahan neeche jab hum function call kr rhe toh tab hum jo input dete h usko bolte h arguments

 // addTwoNumbers(3, 4); //returns 7
// addTwoNumbers(3, "4"); //returns 34

//kyunki humne koi type nai diya h value ka jo ki JS m hi sirf allowed h ni dena toh
//gar normally numbers dengey toh wo toh hojyega
//but maanlo kisine aise double quotes m dediya toh ab JS apna dimag laga k usko convert krke khud return krdegi 34

// addTwoNumbers(3, "a"); //returns 3a kyunki humne toh koi type diya hi ni na
// addTwoNumbers(3, null);//returns 3

//ab ek aur cheez
//maanlo function k result ko hum ek variable m store kr rhe jaise ki

//  const result = addTwoNumbers(3, 5) //ye toh 8 output derha but
// console.log("Result: ", result); //yahan undefined arha  kyunki console log ka ye mtlb ni ki wo return hi kr rha kuch wo bs print krrha

// ab dekhte h iska tareeka

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result //ek function kabhi v return statement k baad wala line skabhi execute ni krta

    //variable ko directly return krdo

    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

// function loginUserMessage(username = "sam") //agar hum khud hi aise default value paas krdein toh
//undefined wali situation aayegi hi nhi
//agar kuch pass nhi kiya toh sam print hoga aur agar kiya h toh wahi print hojayega
function loginUserMessage(username){
    if(username === undefined){ // this is also equal to if(!username)
        // console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("shruti"))

//ab maanlo kisine koi value hi nhi pass ki


//console.log(loginUserMessage()); //null nhi aata hai undefined aata hai
//returns undefined just logged in


// ***************************** part 2 ******************

/*


function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2));
// ab ye toh 2 return krdega but problem tab aati h jab humne ek parameter diya ho but arguments uss se zyada ho jaise ki
console.log(calculateCartPrice(200, 400, 600));
// iss case m sirf pehla wala hi print hoga
//so how to handle this jab humko pta hi nhi ki kitne arguments hone wale h
//ans -  using rest operator
// ... ---> issiko rest operator aur spread operator dono bola jata h but dono k use case alag alag h
// ... iska mtlb yahi h ki sbkuch bohot bikhra hua h isko ek bundle m daalo aur mujhe return krdo

*/

function calculateCartPrice(...num1){ //isme ab kitna v values dedo aajayega
    return num1
}

// console.log(calculateCartPrice(200, 400, 600)); //returns an array of [200, 400, 600]

//ab ek aur case
function calculateCartPrice2(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice2(200, 300, 500, 600));
//iss case m val1 200 lejayega, val2 300 and baaki jo bache wo num1 m aajayengey as an array

// HANDLING OBJECTS IN FUNCTION

const user = {
    username: "hitesh",
    price: 199
    //prices: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
//yahan tak toh sb sahi h but abhi maanlo price ko prices krdiya
//tab aajayega ki username is hitesh and price is undefined toh type safety check krni padti h

//ek aur tareeke se v pass kr skte the
/*
handleObject({
    username: "sam",
    price: 399
})
*/


//PASSING ARRAYS

const myNewArray = [200, 400, 100, 800]
function returnSecondValue(getArray){ //hum kuch v parameter deskte h lekin jo parameter pass karoge wahi return krna hota h 
    //kyunki upar jo array bana h wo toh generic h kuch v hoskta tha
    //func ko ye mtlb h ki uske pas kounsa parameter aarha
    return getArray[1]
}
console.log(myNewArray); //yahan pe koi v argument do jiska v chahiye

// console.log(returnSecondValue([200, 400, 100, 800])) //aise v pass krkste h argument
