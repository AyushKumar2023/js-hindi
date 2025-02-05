//  ************************ CONVERSION ********************************

let score="23"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN 
// true => 1 ; false => 0

let isLoggedIn=1

let BooleanIsLoggedIn=Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn);


// 1 => true; 0 => false;
// "" => false;
// "Ayush" => true;

let someNumber=33

let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *********************************** OPERATIONS **********************************

let value=3
let negvalue=-value
console.log(negvalue);

let str1="Hello"
let str2=" Ayush"
let str3=str1+str2

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+ture);
console.log(+"");

// Link to study 
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion






