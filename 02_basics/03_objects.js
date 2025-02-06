// singleton (apne tarah ka ek hi object hai)
// Object.create  // constructor method used to create object or we can say singleton



// object literals

const mySym=Symbol("key1")

const JsUser={
    name: "Ayush",
    [mySym]: "mykey1", // using symbol in object
    age: 19,
    location: "Bhagalpur",
    email: "ayush@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday","Saturday"]
}

console.log(JsUser.email); // most frequently used
console.log(JsUser["email"]); // better method
console.log(JsUser[mySym]); // accessing symbol from object

JsUser.email="amber@gmail.com" // updating email
// Object.freeze(JsUser)  // this is prevent object from updation any more

JsUser.greeting=function(){
    console.log("hello js user");   
}

JsUser.greetingTwo=function(){
    console.log(`hello js user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




