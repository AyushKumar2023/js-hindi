// older method to use getter and setter


// function based get and set syntax 

function User(email,password){

    this._email=email;
    this._password = password;

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set funtion(value){
            this._email=value
        }
    })
}

const chai=new User("chai@chai.com","chai")
// console.log(chai.email);






