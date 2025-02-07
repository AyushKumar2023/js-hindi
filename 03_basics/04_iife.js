// Immediately Invoked Function Expression (IIFE)

// ()()  : first parenthesis for function defintion and second for function call
// global scope ke pollution se bachne ke liye ham iife ka use karte hai

(function chai(){
    console.log("I love You");
})();    // yaha par ; compulsory hai

(()=>{
    console.log("I love you");
})(); // yaha par ; compulsory hai

((name)=>{
    console.log(`I love you ${name}`);
})("Ayush"); // yaha par ; compulsory hai

