// Stack, Heap
// stack memory is used in primitive datatypes and heap memory is used in non primitive datatypes

//whenever we use stack memory, whatever variable we have used we get a copy of it
//whenever we use heap memory, we get a reference to the original value, so jo v change karengey wo original value m change hoga


//example of stack

let myYoutubeName = "hiteshchoudharydotcom"

let anothername = myYoutubeName
anothername = "chaiaurcode"

console.log(myYoutubeName)
console.log(anothername);

//both returns diff values a s only the copy is changed but the original value remains the same


//example of heap
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


/*
| Memory Area | Variable / Data | Stored Value                                    | Points To       |
| ----------- | --------------- | ----------------------------------------------- | --------------- |
| **Stack**   | userTwo         | Reference                                       | Heap Object     |
| **Stack**   | userOne         | Reference                                       | Heap Object     |
| **Stack**   | myYoutubename   | Primitive value                                 | Stored directly |
| **Stack**   | anothername     | Primitive value                                 | Stored directly |
| **Stack**   | myYoutubename   | Primitive value                                 | Stored directly |
| **Heap**    | Object          | `{ email: "user@google.com", upi: "user@ybl" }` | Actual data     |


STACK                                      HEAP
---------------------------------------------------------------
userTwo  ------------------------------\
                                         \
userOne  -------------------------------\ \
                                          \ \
                                           \ \ 
                                            \ \ 
                                             \ \ 
                                              \ v
                                            {
myYoutubename                                 email: "user@google.com",
                                              upi:   "user@ybl"
anothername                                  }

myYoutubename


userOne and userTwo both point to the same object in heap

myYoutubename and anothername are primitive values → stored directly in stack

*/
