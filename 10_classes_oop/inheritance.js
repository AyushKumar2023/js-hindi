class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{

    constructor(username, email, password){
        super(username);   // super constructor is used to avoid .call method
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`${this.username} added a new course`);
    }
}

const teacher = new Teacher("ChaiAurCode", "chai@gmail.com", "password123")

teacher.logMe();
teacher.addCourse();

const masalaChai=new User("masalaChai")
masalaChai.logMe();

console.log(teacher instanceof Teacher);
console.log(teacher instanceof User);
