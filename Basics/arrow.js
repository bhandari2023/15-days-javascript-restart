// const user= {
//     username: "pankaj",
//     price: 999,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
        
//     }

// }
// user.welcomeMessage()

// user.username="bhandari";
// user.welcomeMessage()

// console.log(this);

// function coffee(){
//     const obj1={
//         userName:"Pankaj",
//         codeId:"100ght",
//         message: function(){
//             console.log(this)
//         }
       
       
//     }
// obj1.message();

//     // console.log(this);
    
// }
// coffee()

// const addTwo= (num1,num2)=>{

//     return num1 + num2

// }
// const addTwo= (num1,num2) => (num1 + num2) // use bracekts so we dont have to use the return like for {}

const addTwo= (num1,num2) => (num1 + num2)

console.log(addTwo(2,5));


(function coder1(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

((name)=>{
    //Simple Iffe
    console.log(`db connected two  ${ name} `)
})("Pankaj");

 
