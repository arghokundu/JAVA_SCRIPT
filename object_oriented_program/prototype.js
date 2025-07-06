let myname="supriyo       "
console.log(myname.length);



let a=['a','b','c','d']
let caps={
    a:"A",
    b:"B",
    c:"C",
    d:"D",
    getsCap:function(){
        console.log(`a capslock is:${this.a}`);
    }
}

Object.prototype.supriyo=function()
{
    console.log("i am present in all objects");
}
Array.prototype.supriyo11=function()
{
    console.log("i am present");
}
//caps.supriyo()
a.supriyo()
a.supriyo11()
//caps.supriyo11()



















