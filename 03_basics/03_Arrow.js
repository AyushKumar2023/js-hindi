// this keyword in detail

// current context ko refer karte samay this keyword use karte hai
// this keyword current context ki baat karta hai

const user={
    username: "Ayush",
    price: 200,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username="Amber" // context is changing here
// user.welcomeMessage()

// console.log(this);  // gives empty object


// function chai(){
//     let username ="Ayush"
//     console.log(this.username); // yaha par ham iss tarah se this keyword ko use nhi kar sakte hai
// }

// chai();

// const chai=function(){
//     let username ="Ayush"
//     console.log(this.username); // yaha par ham iss tarah se this keyword ko use nhi kar sakte hai
// }

// chai();


// *************  ARROW FUNCTION  ************

// remove function keyword and add => infront of () to make arrow function 

// const chai = () => {  
//     username: "Ayush"
//     console.log(this.username); //yaha par ham iss tarah se this keyword ko use nhi kar sakte hai 
// }

// chai();



// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }

// implicit return : isme curley braces use nhi karte hai

const addTwo = (num1,num2) => (num1+num2);

// ************* NOTE ************
// jab arrow function me curley braces use karenge to return keyword likhna padega 
// jab arrow fucntion me parenthesis use karenge to return keyword nhi likhna padega

console.log(addTwo(5,6));
