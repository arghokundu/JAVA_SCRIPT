class A{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`A username=${this.username}`);
    }
}

class B extends A
{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    display(){
        super.logme()
        console.log(`B username=${this.username}`);
        console.log(`email:${this.email}`);
        console.log(`password:${this.password}`);
    }
}

const n=new B("abc","abc@gmail.com","123")
n.display()

const m=new A("abc")
m.logme()

console.log(n===m);
