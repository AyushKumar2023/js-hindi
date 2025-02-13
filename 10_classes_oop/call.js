function setUsername(username){
    // complex DB calls
    this.username = username;
}

function createUser(username, email, password){
    // setUsername(username);   // only reference of setUsername function is passing here

    setUsername.call(this, username); // .call method is used to call setUsername function explicitly
    // this is passed to setUsername to use createUser context
    this.email = email;
    this.password = password;
}

const chai=new createUser("chai", "chai@","12345");
console.log(chai);
