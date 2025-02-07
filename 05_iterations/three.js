// high order array loops

// ["", "", ""] 
// [{}, {}, {}]


// for of loop
const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings="hello world"

for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}


// Maps



// console.log(map);

// for of loop on map
for (const [key,value] of map) {
    // console.log(key,":-",value);
}

const myobj={
    name: "Ayush",
    age: 23,
    country: "India"
}

// for (const ele of myobj) {
//     console.log(ele);          // for of loop is not able to iterate on object in javascript
// }