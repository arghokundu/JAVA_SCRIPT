const score=400
console.log(score);

const balance=new Number(10000)
console.log(balance);

//console.log(balance.toString());
//console.log(typeof balance);
console.log(balance.toFixed(2));

const otherNumber=23.4567
console.log(otherNumber.toPrecision(3));

const n=1000000
console.log(n.toLocaleString('en-IN'));

//**************************************math*****************************************

/*console.log(Math);
console.log(Math.abs(-55));

console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));

console.log(Math.max(1,5,2,7,3,7,4,8,9,2));
console.log(Math.min(1,8,3,5,2,6,3));*/

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1))+min);