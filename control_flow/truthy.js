//const useremail="abc@gmail.com"
//const useremail=""
const useremail=[]
if(useremail)
{
    console.log("got user email");
}
else
{
    console.log("not found");
}

/**********falsy values********* */
//false,0,-0,Bigint 0n,"",null,undefined,nan

/*******truthy values************/
//"0",'false'," ",[],{},function(){}

if(useremail===0)
{
    console.log("array is empty");
}
else
{
    console.log("array not empty");
}


const n={}
if(Object.keys(n).length===0)
{
    console.log("object empty")
}
else
{
    console.log("object not empty");
}