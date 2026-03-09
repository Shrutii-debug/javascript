const coding = ["js", "ruby", "python", "java", "cpp"]

coding.forEach( function (item) {
   // console.log(item);
    
} )

//using arrow function
//see this video for reference

coding.forEach((item) => {
    //console.log(item);
    
})

/*

function printMe(item){
    console.log(item);
    
}

coding.forEach(printMe)

*/

coding.forEach((item, index, arr) => {
    //console.log((item, index, arr));
    
})

//very imp to learn this type of array and iterations on it

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
      {
        languageName: "java",
        languageFileName: "java"
    },
      {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})