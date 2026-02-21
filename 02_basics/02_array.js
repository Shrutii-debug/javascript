const marvel_heroes =["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]
//PUSH
//marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes); 
//array ke andar array aajata hai
//it took array as a data element, as a single data element, i.e, it is the 4th element(3)

//console.log(marvel_heroes[3][1]);
//CONCAT

//const all_heroes = marvel_heroes.concat(dc_heroes)
//console.log(all_heroes);


//push original array m hi push krdeta h aur return krta hai
//but concat ek naya array return krta h and sbko individual elements ke tarah treat krta h of the seconf arrayy


//concat nahi use krke SPREAD operator V use krte h
const all_new_heroes = [...marvel_heroes, ...dc_heroes] //we can add more arrays also
//console.log(all_new_heroes);


//how to handle such arrays?
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// float ke bracket m humko provide krna hota h ki
//kitne depth tak array ko return krna h
//kyunki ye sara elements ek hi array m return krdeta h
//agar nahi pata chal parha toh infinity dedo wo apne aap sara krke dedega

//console.log(real_another_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) //converts any value to array
//imp
console.log(Array.from({name: "hitesh"})); //this returns an empty array as it cant directly convert this
//we have to specify how to make the array, that is, either by keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //returns an array [100, 200, 300]

