// let myName="ayush    "
// let mychannel="chai   "

// console.log(myName.trueLength);  // how to make trueLength method



let myHeros=['thor', 'spiderman']

let heroPower={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ayush=function(){
    console.log(`ayush is present in all objects`);
    
}

Array.prototype.heyAyush = function(){
    console.log(`Ayush says hello`);
}

// heroPower.ayush();

myHeros.ayush();
myHeros.heyAyush();
// heroPower.heyAyush();  //heroPower doesn't have heyAyush function


// inheritence

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher={
    makeVideo: true
}

const TeachingSupport={
    isAvailable: false
}

const TASupport={
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"ayush".trueLength()
"iceTea".trueLength()