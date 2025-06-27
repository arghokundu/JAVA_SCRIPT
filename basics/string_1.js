console.log("hi"+"dosto");
let a="abcd"
let b="sdfg"

let con=a+b
console.log(con + "hello gyus");

//string interpolation
let name="supriyo"
let hobby="software developer"
console.log(`my name is ${name} and my hobby is ${hobby}`);

//string using string object class
const s=new String("supriyo kundu")
console.log(s);
console.log(s[0]);
console.log(s[5]);

console.log(s.length);

console.log(s.toUpperCase());

console.log(s.charAt(2));
console.log(s.indexOf('s'));



const s1=new String("supriyo-kundu")
const ss=s1.substring(1,5)
console.log(ss);

const aa=s1.slice(-13,4)
console.log(aa);


const nn="     abcd     "
console.log(nn);
console.log(nn.trim());

const mm="abs"
console.log(mm);
console.log(mm.replace('a','z'));


const aaa="abc-def-ghi"
console.log(aaa.split('-'));
