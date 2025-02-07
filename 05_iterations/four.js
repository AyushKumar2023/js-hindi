const myobj={
    js: "javascript",
    cpp: "c++",
    swift: "swift"
}

// we can iterate object usin forIn loop

for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);
}

const programming= ["is", "rb","java","cpp"]

for (const key in programming) {
   console.log(programming[key]);
}


// const map=new Map()
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("FR", "France")

// for (const key in object) {
//     console.log(key);        // not iterable
    
// }