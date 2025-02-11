const user = {
    username: "Ayush",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


// constructor function 
// new keyword is a constructor function
// new keyword allow us to make multiple instances from single object literals


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

// const userOne = User("hitesh", 12, true)
// const userTwo = User("ChaiAurCode", 11, false)  // this will overwrite userOne values so "new" keyword is used
// console.log(userOne);
//console.log(userTwo);

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log(userTwo);