const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//for in loop for object

for(const key in myObject){
    //console.log(key); //this returns all the  keys

    //but what if we need values as well
    //console.log(myObject[key]);

    console.log(`${key} shortcut is for ${myObject[key]}`);
}

//now lets see if thi for in works for arrays

const programming = ["ruby", "java", "js", "cpp", "r"]

for(const key in programming){
    console.log(key); //returns only keys of array, i.e ,the indexes
    //to print values
    console.log(programming[key]);
    
}
//this is the basic diff between for of and for in
//for in prints keys
//for of prints values

//for in loop cant be used for maps as maps are not iterable