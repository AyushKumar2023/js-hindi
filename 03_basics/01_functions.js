
function sayMyName() {
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}

// sayMyName();

function addtwonumbers(a,b){
    return a+b;
}

console.log(addtwonumbers(5,6));

function loginusermessage(username){

    if(username===undefined){
        console.log("please enter a username");
        
    }
    return `${username} just logged in.`
}

console.log(loginusermessage("Ayush"));



function calculateCartPrice(...num1){   // use of REST operator(...) which return answer as an array
    return num1;
}

console.log(calculateCartPrice(200));
console.log(calculateCartPrice(200,300,400));


// passing object into functions

const user={
    username: "Ayush",
    price: 199
}

function handleObject(anyobject){
    console.log(`User is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user);
handleObject({
    username: "Amber",
    price: 200
});


// passing array into functions

const myNewArr=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArr));


