class  AA{
    constructor(username,email,password) {
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `password:${this.password}`
    }
}
const n=new AA("supriyo","supriyo@gmail.com","1223")
console.log(n);
console.log(n.encryptPassword());


