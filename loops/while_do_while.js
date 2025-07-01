//while and do while loop

/*let i=0
while (i<=10) 
{
    console.log(`value of i is: ${i}`);
    i=i+2
}*/

//using array

/*const a=[1,2,3,4,5]
let j=1
while(j<=a.length)
{
    console.log(`array value is ${a[j]}`);
    j=j+1
}*/

const a=[1,2,3,4,5]
let j=1
while(j<=a.length)
{
    if(j%2==0)
    {
        console.log(`array value is ${j}`);
    }
    j=j+1
}

/************do while loop ****** */

let k=1
do
{
    console.log(`value is: ${k}`);
    k++
}while(k<=10);