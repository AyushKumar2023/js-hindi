const name="Ayush"
const repoCount=50

console.log(name+ repoCount + "Value"); // do not use this syntax

console.log(`Hello my name is ${name} and repocount is ${repoCount}`); // use this syntax


const gameName=new String('AmberAyush') // here string is declared as object
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('b'));

const newString=gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-8,4);
console.log(anotherString);

const newStringOne="  Bhagalpur  ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url="https://ayushamber.com/ayush%23kumar";
console.log(url.replace("%23","-"));
console.log(url.includes("ayush"));
console.log(url.includes("bhagalpur"));


const stringX="abc-hd-cd";
console.log(stringX.split('-'));










