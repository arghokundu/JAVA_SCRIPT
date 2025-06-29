function print()
{
    console.log("hi");   
}
print();

/*function add(a,b)
{
    c=a+b
    console.log(c);
}
add(2,3);

function add(a,b)  //parameters
{
    c=a+b
    console.log(c);
}
add(2,"3"); //arguments */

function add(a,b)
{
    c=a+b
    return c;
}
const re=add(2,3);
console.log(re);

/*function userLoggedin(username)
{
     return `${username} just logged in `;
}
const a=userLoggedin()
console.log(a);*/


function userLoggedin(username="ram")   //default value ram
{
    if(username===undefined)
    {
        console.log("please define user name");
        return;
    }
    return `${username} just logged in `;
}
const a=userLoggedin("supriyo")
console.log(a);
