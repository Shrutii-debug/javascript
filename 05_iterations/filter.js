const coding = ["js", "ruby", "python", "java", "cpp"]

const values = coding.forEach( (item) => {
    //console.log(item);
    /*
    What Happens When forEach() Is Stored in a Variable
Step 1 – The loop runs normally

forEach() will still iterate through the array and print each element.

Output:

js
ruby
java
python
cpp
Step 2 – The variable gets assigned

The variable values receives the return value of forEach().

But the key concept he explains is:

forEach() does NOT return anything.

So internally it returns:

undefined

What Happens When forEach() Is Stored in a Variable
Step 1 – The loop runs normally

forEach() will still iterate through the array and print each element.

Output:

js
ruby
java
python
cpp
Step 2 – The variable gets assigned

The variable values receives the return value of forEach().

But the key concept he explains is:

forEach() does NOT return anything.

So internally it returns:

undefined



He demonstrates this to explain why map() and filter() exist.

Because sometimes we want:

loop + create new array

But forEach() cannot do that automatically.

    */
    
})

//console.log(values); //as for each doesnt return anything this returns undefined


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//this also takes callback
/*
const newNums = myNums.filter( (num) => num > 4 ) //ye sb foreach m v hota h lekin wo kuch return ni krta isiliye filter use krte h
console.log(newNums);
*/


//if you write this way the filter function using {} then:
/*
const newNums = myNums.filter( (num) => {
    return num > 4
    //When you use {}, JavaScript assumes you are writing a function body.
    //So you must explicitly write return. //this is a concept from arrow fucntion related to scopes and all
})
//console.log(newNums);

*/



//ab agar for each se hi krna h filter use hi ni krna toh kaise kr skte h?

/*
const newNums = []
myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);

*/


// more on filters

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 }
];

const userBooks = books.filter( (bk) => bk.genre === 'History' )

//console.log(userBooks);
//if you want to overwrite the name userBooks use let keyword , it lets you overwrite the same variable or just use a diff variable name
//const wont let you overwrite
const userBooks1 = books.filter( (bk) => {
    return bk.publish >= 2000
})
//console.log(userBooks1);

const userBooks2 = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
})
console.log(userBooks2);

