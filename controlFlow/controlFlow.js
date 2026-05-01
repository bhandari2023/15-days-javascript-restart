// const isUserLoggedIn = true
let temperature= 51

// if(temperature <= 50){
//     console.log("temperature is less than 50");
// }else{
//     console.log("temperature is greater than 50");
    
// }

// const score = 200
// if(score>100){
//     const power ="fly"
//     console.log(`user power: ${power}`);
    
// }

// const balance = 1000;
// if (balance < 500){
// console.log("Less Than 500")

// }else if(balance<750){
// console.log("Less Than 750")
// }else if(balance<900){
// console.log("Less Than 900")
// }else{
//     console.log("less Than 1200")
// }

const userLoggedIn= true;
const debitCard = true;
const loggedInFromGoogle = false
const LoggedInFromEmail = true
if(userLoggedIn && debitCard ){
    console.log("Allow to buy course");
    
}

if(loggedInFromGoogle || LoggedInFromEmail ){
    console.log(("User Logged in"));
    

}