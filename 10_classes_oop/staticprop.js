class User{

    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){   //static iss method ko access hone se rok deta hai
        return '123'
    }
}

const ayush=new User("ayush");
// console.log(ayush.createId());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone=new Teacher("iphone", "i@phone.com");
console.log(iphone.createId());
