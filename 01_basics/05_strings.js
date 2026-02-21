const name = "shruti"
const repoCount = 10

//console.log(name + repoCount + " Value"); //this is the old way of writing
//we will use back ticks

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

//another way of declaring a string

const gameName = new String('shrutii-fc-com') //object (key value pairs)
//we can use string methods 

//console.log(gameName[0])
//console.log(gameName.__proto__)

//console.log(gameName.length);
//console.log(gameName.toUpperCase()); //but our original string wont be changed

//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //starts with zero even when negative values are provided
//console.log(newString);

const anotherString = gameName.slice(-8, 4) //allows negative values
//console.log(anotherString)

const newStringOne = "  shruti  "
//console.log(newStringOne);
//console.log(newStringOne.trim()); //works on whitespace and line terminators

const url = "http://shruti.com/shruti%20agarwal"

console.log(url.replace('%20', '-'));
 
console.log(url.includes('shruti'));

//converting string to array
// i want to split this 'shrutii-fc-com' based on the dash (-) into diff parts

console.log(gameName.split('-')); //you can split based on anything you want

//see more string methods on mdn
