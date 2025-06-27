//memory types
// stack and heap
//stack (primptive memory)   and   heap (non-primptive memory)

let n="supriyo"
let anothetN=n
anothetN="argho"

console.log(n);
console.log(anothetN);

let userOne={
    email:"supriyo@gmail.com",
    id:"user@ui",
}

let userTwo=userOne

console.log(userOne);
console.log(userTwo);

//changes value userone and access object values

userTwo.email="argho@gmail.com"

console.log(userOne);
console.log(userTwo);