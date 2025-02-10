// jyadatar time ham promises ko consume kar rahe hote hai

// creating promises
const promiseOne=new Promise(function(resolve, reject){
    // do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log("async task is complete");
        resolve();  // it will connect this function with .then 
    },1000)
})

// consuming promise
promiseOne.then(function(){
    console.log("promise consumed");
    
})


// creating and consuming promise without storing it in any variable

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    })
},1000).then(function(){
    console.log("promise consumed 2");
    
})


// creating promise and passing object in resolve function 

const promiseThree=new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve({username: "chai", email: "chai@a.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user.username);
    
})


// nested then promise consuming

const promiseFour=new Promise(function(resolve, reject){

    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username: "Ayush", password: "123"})
        }else{
            reject("ERROR: something went wrong")
        }
    }, 1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error); 
})
.finally(function(){
    console.log("successfully executed");
})



const promiseFive=new Promise(function(resolve, reject){

    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username: "javascript", password: "123"})
        }else{
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

// consuming using async and await which cannot handle errors directly

async function consumePromiseFive(){

    
    try{
        const response=await promiseFive
    console.log(response);
    }catch(error){
        console.log(error);
         
    }
}

consumePromiseFive()