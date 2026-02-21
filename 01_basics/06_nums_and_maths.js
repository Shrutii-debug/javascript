//for knowing more about the methods
//type everything in console you will get to know

//see the diff between both the formats of declaring

const score = 400
//console.log(score);

const balance = new Number(100) //this way we can use the methods of number
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2)); //precision value; no of points after decimal

const otherNumber = 23.8966
const otherNumber1 = 123.8966
const otherNumber2 = 1123.8966
//console.log(otherNumber.toPrecision(3)); //sbse pehle decimal k phle priority milegi uske bad decimal k baad
//see allthe outputs to understand


const hundreds = 1000000
//console.log(hundreds.toLocaleString());

// ============== MATHS ================
/*
console.log(Math)
console.log(Math.abs(-4));

console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
*/

//most important method
console.log(Math.random()); //always gives value between 0 and 1
console.log((Math.random() * 10) + 1); 
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20
// very important 
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 