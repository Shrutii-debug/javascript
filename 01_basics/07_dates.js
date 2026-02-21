let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());

//console.log(typeof myDate); //Date is an object in javascript

//let myCreatedDate = new Date(2023, 0, 23) //Month starts from 0 in javascript

//let myCreatedDate = new Date(2023, 0, 23, 5, 3)

let myCreatedDate = new Date("2023-01-14") //here month starts from 1
//console.log(myCreatedDate.toLocaleString());

//timestamps

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime()); //returns output in milliseconds

//convert to seconds

//console.log(Date.now()/1000); //but this gives decimal values which we dont want


//so we use Math.floor
//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());

console.log(newDate.getMonth() + 1); //as month starts from 0 so wen use +1 so that the end user doesn't get confused

// `${newDate.getDay()} and the time is`

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));
