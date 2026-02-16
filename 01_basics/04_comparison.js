// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1); // these are basic comparisons


// comparisons with diff data type
//you should never  compare two diff datatypes , typescript isiliye hi use hota h kyunki wo allow hi ni krta do diff data type m comparison

console.log(null > 0); //false
console.log(null == 0); // returns false
console.log(null >= 0);//but this returns true

//the reason is that an equality check == and comaprisons < > <= >= work differently
// comparisons convert null to a number, treating it as 0
//thats why null >= 0 is true and null > 0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
//returns false in all cases

//avoid such type of comparisons above everytime


// strict check === (checks value as well as datatype)
console.log("2" === 2)




