const a=["a","b","c"]
const b=["d","e","f"]
//a.push(b)

//console.log(a);
//console.log(a[3]);
//console.log(a[3][0]);

//const na=a.concat(b)
//console.log(na);

//const nn=[...a,...b]
//console.log(nn);

const an=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const rr=an.flat(Infinity)
console.log(rr);

console.log(Array.from("supriyo"));

let a1=100
let a2=200
let a3=300

console.log(Array.of(a1,a2,a3));
