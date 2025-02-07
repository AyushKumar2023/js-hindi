const userEmail="A@gmail.com"

if(userEmail){
    console.log("got email");
    
}else{
    console.log("dont have user email");
}

// ********** falsy value *********

// false, 0, -0, BigInt 0n, null, "", undefined, NaN 


// ******** truthy values *********

// true, "0", "false", " ", [], {}, function(){}


if(userEmail.length === 0){
    console.log("array is empty");
    
}

const emptyObject={}

if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
    
}


// ********** Nullish Coalescing Operator(??) : undefined, null ***********

let val1;
// val1= 5 ?? 10
// val1=null ?? 10
// val1= undefined ?? 15
val1=null ?? 10 ?? 20
console.log(val1);


// ********* Ternary Operator **********

// condition ? true : false 

const iceteaprice=100

iceteaprice>=80 ? console.log("less than 80") : console.log("greater than 80");


