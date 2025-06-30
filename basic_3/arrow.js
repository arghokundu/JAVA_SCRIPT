const user={
    uname:"supriyo",
    price:8574,
    welcomeMsg :function()
    {
        console.log(`${this.uname},welcome to website`);
        //console.log(this);
        
    }
}

//in the browser global is window object
/*user.welcomeMsg()
user.uname="argho"          
user.welcomeMsg()*/

//console.log(this);



//********* this doesn't work inside the function ***********/
/*function a()
{
    let name="supriyo"
    console.log(this.name);
}
a()*/



/*const n=function aa()
{
    let name="supriyo"
    console.log(this.name);
}
n()*/

//************arrow function********* */
//declaration only paranthesis() and arrow=>        symbol () => {}

const aaa=()=>
{
    let name="supriyo"
    console.log(this);
    //console.log(this.name);
}
aaa()

/**********arrow function uses********* */
/*const add=(a,b)=>
{
    return a+b
}
console.log(add(5,7))*/


//********************implicit return ************ */
//doesn't require paranthisis and return keyword coz single line statement

//const add=(a,b)=>a+b

//const add=(a,b)=>(a+b)  //if use () do not use return

//return object
const add=(a,b)=>({n:10})

console.log(add(5,7))

