//Immediately Invoked Function Expression (iife)

(function a()
{
    //named iife
    console.log(`DB connected`);
})();          

//if semicolon not put in the last function it it not work

(function ab()
{
    console.log(`DB connected ab`);
})()

/*sometimes Global scope polution occur when we removes the 
polution use the iife*/ 

/*(function one()
{
    console.log(`DB connected one`);
})();          

( ()=>
{
    console.log(`DB connected two`);
})()*/