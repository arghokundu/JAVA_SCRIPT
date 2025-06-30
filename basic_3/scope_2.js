function one() 
{
    const uName="supriyo"

    function two()
    {
        const website="github"
        console.log(uName);
    }
    //console.log(website);

    two()
    
}

//one()



if(true)
{
    const uName="supriyo"
    if(uName=="supriyo")
    {
        const website="github"
        //console.log(uName + website);
    }
    //console.log(website);
}
//console.log(uName);



/**********************interesting******************** */

//accessable
console.log(addone(5));

function addone(num)
{
    return num+1
}

//not accessable coz variable declare function
console.log(addtwo(5));

const addtwo=function(num)
{
    return num+2
}

