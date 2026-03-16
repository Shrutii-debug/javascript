const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

//console.log(descriptor); //see the output, writable and all is false and it is so hard coded that it almost cant be changed


//console.log(Math.PI);
//Math.PI = 5
//console.log(Math.PI); //doesnt chsnge the value even if we have overwritten it

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");
        
    }
}
console.log(chai);
//does this object also has descriptor properties
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

/*
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
*/

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    }
    //if we do enumerable false, then that specific property will not be iterable
}