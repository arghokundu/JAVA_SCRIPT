//const n=new Object()

const n={}
n.id="1234"
n.name="abxjdjd"
n.logIn=false
//console.log(n);

const a={
    email:"avc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"supriyo",
            lastname:"kundu"
        }
    }
}

//console.log(a.fullname);
//console.log(a.fullname.userfullname);


const ob1={
    1:"a",
    2:"b"
}

const ob2={
    3:"a",
    4:"b"
}

//const ob3=Object.assign({},ob1,ob2)
const ob3={...ob1,...ob2}
console.log(ob3);


const user=[
    {
        uid:123,
        uemail:"a@gmail.com"
    },
    {
        uid:123,
        uemail:"a@gmail.com"
    },
    {
        uid:123,
        uemail:"a@gmail.com"
    }
]

user[1].uemail
console.log(a);
console.log(Object.keys(a));

