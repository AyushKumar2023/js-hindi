// singleton

const tinderUser={} // non singleton object

// const tinderUser=new Object() // singleton object

tinderUser.id="123abc"
tinderUser.name="Ayush"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

// nested object

const regularUser={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ayush",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


// Merging Objects

const obj1={1: "a", 2: "b"}
const obj2={3: "c", 4: "d"}

// const obj3={obj1,obj2} // same problem like array

// const obj3=Object.assign({},obj1,obj2) // merging object
// const obj3=Object.assign(obj1,obj2)

const obj3={...obj1,...obj2}
// console.log(obj3);




// syntax when values are coming from databases

const users=[
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    },
    {
        id: 4,
        email: "k@gmail.com"
    }
]

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // keys of all objects are returned as an array
console.log(Object.values(tinderUser));  // values of all objects are returned as an array
console.log(Object.entries(tinderUser));  // give nested array as output

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
