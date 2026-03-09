const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
3. map() – Transforming Array Elements
Purpose

map() creates a new array where each element is modified or transformed.

Syntax
array.map(callback)

Callback runs on each element.

Example
const numbers = [1,2,3,4]

const newNums = numbers.map((num) => {
    return num + 10
})

Output

[11,12,13,14]

Explanation:

Each element is transformed.

1 → 11
2 → 12
3 → 13
4 → 14
Important Concept

Unlike filter():

filter	map
selects elements	transforms elements
returns subset	returns same length array
*/


const newNums = myNumbers.map( (num) => num + 10) //map function automatically returns the value just like filter so we can store it in a variable
//console.log(newNums);
//other concepts are same as filter like scope, using return keyword when using a scope

//like we used foreach in filter, we can useforeach here as well

//chaining methods - hum  kitne bar v koi bhi cheez laga skte h like filter, map 
//JavaScript allows method chaining, meaning:
//You can use multiple array methods together.

const newNums2 = myNumbers
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)

console.log(newNums2);

/*
Step by step:

[1,2,3,4,5]

map *10
[10,20,30,40,50]

map +1
[11,21,31,41,51]

filter >40
[41,51]

This is called method chaining.
*/
