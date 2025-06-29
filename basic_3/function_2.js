/*function cla(...n) //...rest operator or split operator
{
    return n
}
console.log(cla(1,2,3));*/


function cla(n1,n2,...n)
{
    return n
}
//console.log(cla(1,2,3,4,5));   //here 1 is in n1 and 2 is in n2


//using object
const u={
    username:"argho",
    price:12345678
}

function obj(anyobj){
    console.log(`user name is ${anyobj.username} and price is ${anyobj.price}`);    
}

obj(u);

//using array
function val(getarray)
{
    return getarray[0];
}
const a=[1,2,3,4,5,6]
console.log(a);
