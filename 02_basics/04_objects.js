//inspect krke console m jaa k dekho humesha



// in the last video we used object literals , now we will see how to declare using constructors
// that will result in singleton

//const tinderUser = new Object() //ye ek singleton obj h
const tinderUser = {} //ye ek singleton obj nhi h 
//bas yahi diff h dono m

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
// we can do nestings like these as much as required(objects k andar objects)
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sruti",
            lastname: "agarwal"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.firstname); 

//? represents ki agar value ni h toh wo handle krleta h warna if else lagana padta h bar bar

//combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1, obj2 }
// iss wale m wahi dikkat hoga ki objects k andar object aajayega


//object.assign returns a modified object
//humesha ye {} dena chahiye which acts as target aur jo v baaki h wo sb source h
//sabkuch ja k iss empty array m store hota h
//warna aise toh sbkuch pehla wala source m jaa k store hota h
//jaise ki isme obj1


//const obj3 = Object.assign({}, obj1, obj2) //object.assign ko v hum kam hi use karengey
//console.log(obj3);

//hum use karnegey spread 

const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gamil.com"
    },
    {
        id: 1,
        email: "h@gamil.com"
    },
    {
        id: 1,
        email: "h@gamil.com"
    },
    {
        id: 1,
        email: "h@gamil.com"
    }
]

users[1].email // jab aise bohot sare objects ho

//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));


//the output value of this is an array
// which is very helpful and important jab v unme loop lagana ho ya kuch v krna ho
//while working in a database

//console.log(Object.entries(tinderUser));

//array k andar array milta h
//har ek ko ek array bana diya jata h jisme pehla key h and second value h

//while looping through objects, aisa hoskta h ki value present na ho
//waise m crash krskta h toh hum error kam krne ye puch v skte h ki
//wo property h ya ni 
//it will return true ya fir false

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//**********************PART 03**********************
// value destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor // we can access using this but a more bettwe way of
//writing and accessing is there that imrpoves readability

const {courseInstructor : instructor} = course

//console.log(courseInstructor); //here we dont have to write .course everytime


console.log(instructor); //kyunki abhi humnr usko destructure krdiya toh hum aur chota naam se use kr skte

// APIS
// json object hi h bas uska koi naam ni h


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//kayi baar apis array ki format m v milti h

[
    {},
    {},
    {}
]