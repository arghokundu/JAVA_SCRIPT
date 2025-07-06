//object literal

const user={
    username:"supriyo",
    loginid:3,
    signin:true,
    getuserdetails:()=>
    {
        console.log("got details user");
        //console.log(`user name is${this.username}`);
    }
}
console.log(user);
console.log(user.getuserdetails());


//here override
/*const sstore=function(a,b,c){
    this.a=a
    this.b=b
    this.c=c
    return this
}
const result=sstore("supriyo",1,2)
const re2=sstore("argho",5,6)
console.log(result);*/

const sstore=function(a,b,c){
    this.a=a
    this.b=b
    this.c=c
    return this
}
const result=new sstore("supriyo",1,2)
const re2=new sstore("argho",5,6)
console.log(result);













