// //singleton
//  //object litrals
 
// const mySym= Symbol("key1")

//   const JsUser ={
//     name: "pankaj",
//     "fullname": "pankaj bhandari",
//     [mySym]:"myKey1",
//     age: "38",
//     location: "haldwani",
//     email:"pankajbhandari2010@gmail.com",
//     isLoggedin: false,
//     lastLoginDays:["monday","saturday"]

//  }

// //  console.log(JsUser[mySym]);
// //  console.log(typeof JsUser[mySym]);

// //  JsUser.email = "pankajbhandari9950@gmail.com";
// //  console.log(JsUser.email)
// //  console.log(JsUser[email])
 
 

// //  console.log(JsUser.email);
// //  console.log(JsUser["name"]);
// // console.log(JsUser.fullname);

// const newUser1={};

// newUser1.id="pankaj123"
// newUser1.name="PankajBhandari"
// newUser1.isLoggedIn=false;

// console.log(newUser1)

// function checker(obj){
//   if(obj.isLoggedIn= false){
//     console.log(`${obj.name} is logged out` )
//   }else{
//     console.log(`${obj.name} is logged in`)
//   }
// }

// checker(newUser1)



const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
const obj3={5:"e", 6:"f"}

// const obj4= Object.assign({},obj1,obj2,obj3);

const obj4={...obj1,...obj2,...obj3}


console.log(obj4);

const usersList =[
  {
    id:1,
    email:"abc@gmail.com"

  },    
  {
    id:2,
    email:"xyz@gmail.com"
  }
]

const objEmail= usersList[0].email;
console.log(Object.values(usersList[1].email));

const course={
  courseName:"jsHindi",
  coursePrice:"999",
  courseInstructor:"pankaj Bhandari"

}

const {courseInstructor:instructor }= course

console.log(instructor);


