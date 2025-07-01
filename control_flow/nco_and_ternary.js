//mullish coalescing operator (??):null undefine

let v;
//v=5??10
//v=null??20
//v=undefined??30
v=null??50??100
console.log(v);

//ternary operator
//condition ? true : false

const price=100
price >=80 ? console.log("grater than 80") : console.log("less than 80");



