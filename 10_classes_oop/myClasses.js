

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptdPassword(){
        return `${this.password}123`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai=new User("chai", "chai@" , "chai123")
// console.log(chai);
console.log(chai.encryptdPassword());
console.log(chai.changeUsername()); 


// BEHIND THE SCENE 

function Usernew(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

Usernew.prototype.encryptdPassword= function(){
    return `${this.password}123`
}

Usernew.prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`
}

const tea=new Usernew("tea", "tea@" , "tea123")

console.log(tea.encryptdPassword());
console.log(tea.changeUsername());

