//shallow copy and deep copy

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[0]);

// array methods
/*
myArr.push(6)
myArr.pop()
console.log(myArr);
*/

//myArr.unshift(9)
//myArr.shift()
/*
console.log(myArr.includes(9));
console.log(myArr.indexOf(9)); //returns -1 if the element is not present
console.log(myArr.indexOf(3));
*/

/*
const newArr = myArr.join()

console.log(newArr);

console.log(myArr);
console.log(typeof newArr); //gets converted to string
*/


//slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);

// diff between slice and splice
//in slice , the original array is not manipulated but in splice the original array is manipulated
