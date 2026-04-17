// var c = 300;

// let a= 200;

// if(true){
//     let a= 10
// const b= 20
// console.log("inner a", a);
 
// }



// console.log("Outer a", a);

// // console.log(b);

// console.log(c);



function one(){
    const userName= "Pankaj"

    function two(){
        const website= "Youtube"
        console.log(userName);
        
    }
    
    two()
    
}

// one()

if(true){
    const userName="pankaj"
    if(userName==="pankaj"){
        const website = "  Insta"
        console.log(userName + website)
    }
// console.log(website);

}

// console.log(userName);
//+++++++++++++++++++++++++++++++++++++

function addOne(num){
 return num + 1
}

const sum= addOne(5);

console.log(sum);
