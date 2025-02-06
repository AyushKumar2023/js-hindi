// Array

const myArr=[0,1,2,3,4,5,true,"Ayush"]
const myHeros=["Shaktiman","naagraj"]
const myArr2=new Array(1,2,3,4)
// console.log(myArr[0]);

// Array methods

// myArr.push(6);
// myArr.pop();

myArr.unshift(9); // insert at the beginning 
myArr.shift()  // delete at the beginning
// console.log(myArr);

// const newArr=myArr.join() // newArr as a string
// console.log(myArr);
// console.log(newArr);


// slice and splice

console.log("A ", myArr);
const myn1=myArr.slice(1,3); // includes 1 and 2 only
console.log(myn1);

console.log("B ", myArr);
const myn2=myArr.splice(1,3); // delete elements at 1,2 and 3
console.log(myn2);

console.log("C ", myArr);

