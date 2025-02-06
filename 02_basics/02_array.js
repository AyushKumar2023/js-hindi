const marvel=["thor", "ironman", "spiderman"]
const dc=["superman","flash","batman"]

// marvel.push(dc)  // take dc array as single element
// console.log(marvel);
// console.log(marvel[3][1]);  // not good method

const allHeros=marvel.concat(dc) // return new array
console.log(allHeros);

const allnewheros=[...marvel,...dc] // same as concat and most widely used
console.log(allnewheros);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity); // remove all sub array from another_array and return flat array
console.log(real_another_array);


console.log(Array.isArray("Ayush")); // check is "Ayush" is array or not and return true or false
console.log(Array.from("Ayush")); // convert "Ayush" into an array

console.log(Array.from({name: "Ayush"})); // interesting as it not able to convert it into array and returns empty array


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
