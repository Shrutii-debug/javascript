/* 
switch(value){
   case x:
      code
      break
}

Example

let day = 2

switch(day){
   case 1:
      console.log("Monday")
      break
   case 2:
      console.log("Tuesday")
      break
   case 3:
      console.log("Wednesday")
      break
   default:
      console.log("Invalid day")
}

Output

Tuesday
Why break is important

Without break, execution continues.

Example

let day = 1

switch(day){
   case 1:
      console.log("Monday")
   case 2:
      console.log("Tuesday")
}

Output

Monday
Tuesday

This is called fall-through.
*/

//agar string se match krna h toh waise v kr skte h
let day = "monday"
switch(day){
case "monday":
    console.log("it is monday");
    break;
case "tuesday":
    console.log("it is tuesday");
    break;

    //and so on
}