class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username${this.username}`);
    }
    static createid(){
        return `123`
    }
}
const n=new user("abcd")
console.log(n.createid());
