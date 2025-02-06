// *** Primitive data types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id = Symbol("123")
const anotherId=Symbol("123")

console.log(id===anotherId);


// *** Reference type / Non-Primitive data types

// Array, Objects, Functions
// all has return types of FUNCTION

const heros=["shaktiman","nagaraj","doga"];

let myObj={
    name: "Ayush",
    age: 22,
}

const myFunction=function(){
    console.log("hello world");
}

console.log(typeof myFunction);

// link to study 
// https://262.ecma-internatiohal.org/5.1/#sec-11.4.3