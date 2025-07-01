/*for (let i = 0; i <=10; i++) 
{
    console.log(`outer loop values ${i}`);
    for (let j = 0; j <=10; j++) 
    {
        console.log(`inner loop value j : ${j} and inner i : ${i}`);               
    }    
}*/

//multiplicaton table upto 10

/*for(i=1;i<=10;i++)
{
    console.log(`outer ${i}`);
    for(j=1;j<=10;j++)
    {
        console.log(i,"X",j,"=",i*j);
    }
}*/


//using array
/*let a=["a","b","c"]
for (let i = 0; i <a.length; i++) 
{
    const element = a[i];
    console.log(element);
}*/

//*****break and continue ********* */

//break

/*let i
for (i = 1; i <=20; i++) 
{
    //console.log(`value of i ${i}`);
    if(i==5)
    {
        break
    }
    console.log(`value of i ${i}`);
}*/


//continue

let i
for (i = 1; i <=20; i++) 
{
    //console.log(`value of i ${i}`);
    if(i==5)
    {
        console.log("detected");
        continue
    }
    console.log(`value of i ${i}`);
}

