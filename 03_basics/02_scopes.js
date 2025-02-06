function one(){
    const username="ayush"

    function two(){
        const website="youtube"
        // console.log(username);
        
    }
    // console.log(website); // not accessible
    two();
}

one();

if(true){
    const username="ayush"

    if(username==="ayush"){
        const website=" youtube"
        // console.log(username+website);
    }
}

// console.log(username); // not accessible






// ********************************** interesting ******************************

function addone(num){
    return num+1
}

addone(5) // we can also write this function call above function definition


const addTwo=function(num){
    return num + 2
}

addTwo(6) // we cannot write this function call above function defintion because function is getting stored in some varibles and this is known as hoisting