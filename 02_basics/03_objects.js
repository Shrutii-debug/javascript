// singleton - constructor se humesha singleton banega,
//jab v hum literals k trh define karengey tab singleton nahi banega
//Object.create// constructor method jis se singleton banta h



// object literals
//ye h jis se singleton nhi banta

const mySym = Symbol("key1")

const JsUser = {
    name: "Shruti", //by default the system processes 'name' variable or key also as string 
    age: 18,
    "full name": "shruti agarwal",// ab agar aise declared hai toh koi bhi tareeka nahi hai
    //ki dot se access kr sake isiliye dusra method use krna chahiye
    [mySym]: "mykey1", //symbol ko object k andar declare aise kiya jata h square brackets m
    //agar aise hi likhoge toh wo usko as string hi lega
    //and print krte waqt v fir double quotes dene ka zarurat ni h
    //value pe koi fark ni padega but syntax yahi h
    location: "bbsr",
    email: "shruti@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//oneway of accessing is
//console.log(JsUser.email)

//console.log(JsUser["email"]); //string format m process hota h isiliye double quotes m daal k access krna hota h

//console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com" // to change the data
//Object.freeze(JsUser) // iss se hum fir uss variable ka data change ni krskte
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
    
}
//interpolation
JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
    
}
//console.log(JsUser.greeting); //this returns refernce of function


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
