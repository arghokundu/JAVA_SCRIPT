//singleton
//object literal

//Object.create

const s=Symbol("key1")


const jUser={
    name:"supriyo",
    "full name":"argho kundu",
    [s]:"keyyyyy",
    age:21,
    loc:"kgp",
    email:"supriyo@gmail.com",
    isLoggedin:false,
    lastLoggedindays:["monday","saturday"]
}

//console.log(jUser.email);
//console.log(jUser["email"]);
//console.log(jUser["full name"]);
//console.log(jUser[s]);


//here change and lock the value
jUser.email="argho@gmail.com"
//Object.freeze(jUser)
jUser.email="abcd@gmail.com"
//console.log(jUser);

jUser.greeting=function()
{
    console.log("hello guys");   
}
jUser.greeting2=function()
{
    console.log(`my name is ${this.name}`);   
}
console.log(jUser.greeting());
console.log(jUser.greeting2());

