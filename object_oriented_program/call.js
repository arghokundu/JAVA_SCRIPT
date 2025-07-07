function setusername(username){
    this.username=username
    console.log("called");
}

function createUser(username,email,password) {
    setusername.call(this,username)
    this.email=email
    this.password=password
}

const nuser=new createUser("supriyo","abc@gmail.com","1234")
console.log(nuser);
