const user = {
    username: "shruti",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("got user details from database");
        //console.log(`Username: ${this.username}`);
        //console.log(this); //see the output
    
    }

}

/*
console.log(user.username);
console.log(getUserDetails());
console.log(this); //also see here and compare both the outputs of this
*/


//constructor function
// the new keyword is the constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    //left side is variable name, right side is what we are passing
    //"this" keyword gives us the context
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

    return this // - even if you dont write this, the values still get returned
}

/*
const userOne = User("shrutii", 12, true)
const userTwo = User("ashish", 11, false) 

//now even if we r printing user one
//usertwo overwrites the values of userone and we ofc dont want this
//so we use the "new" keyword to create a separate instance everytime

console.log(userOne);
*/
const userOne = new User("shrutii", 12, true)
const userTwo = new User("ashish", 11, false)
console.log(userOne)
//console.log(userOne.constructor);

console.log(userTwo)

//new keyword
//whenever we use the new keyword an empty object is created which is called an instance
//a constructor function is called due to the new keyword
//thirdly jo this create hua h usme add hojayengey and lastly sav values return hojayengey

console.log(userOne instanceof User) // true
//"Isse check karte hain ki yeh object kisi particular constructor se bana hai ya nahi."