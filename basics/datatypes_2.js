// primptive

// 7 types
/*
string, number, boolean, null, undefined, symbol, bigInt */

//number
const n=100
const nnn=1.23
console.log(typeof(n));
console.log(typeof(nnn));
//string
let name1="abcd"
console.log(typeof(name1));
//boolean
let n1=true
console.log(typeof(n1));
//null
const mm=null
console.log(typeof(mm));
//undefined
let city;
console.log(typeof(city));
//symbol
const id=Symbol('123')
const aid=Symbol('123')
console.log(id==aid);//false
//bigint
const b=12345933318719878373876876n
console.log(typeof(b));

//references type (non-primptive)
/* 
array,object,functions */

//array
const h=["a","b","c","d"]
console.log(typeof(h));
//object
let myobj={
    name:"supriyo",
    age:21,
}
console.log(typeof(myobj));
//function
const myFun=function()
{
    console.log("hello dosto");
}
console.log(typeof(myFun));
