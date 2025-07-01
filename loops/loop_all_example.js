//for off

//for off
const a=[1,2,3,4,5,6]
for(const i of a) 
{
    console.log(i);
}

/*const s="supriyo kundu"
for (const j of s) 
{
    console.log(`each char is :${j}`);
}*/

/***************continue and break example in for off loop********************** */
/*const s="supriyo kundu"
for (const j of s) 
{
    if(j!=" ")
    {
        console.log(`each char is :${j}`);
        continue
    }
}*/


/*const s="supriyo kundu"
for (const j of s) 
{
    if(j==" ")
    {
        break
    }
    console.log(`each char is :${j}`);
}*/

//***********maps******** */
//unique values

/*const map=new Map()
map.set('IN',"india")
map.set("usa","united state of america")
map.set('IN',"india")
console.log(map);
 
for (const [key,values] of map) 
{
    console.log([key,"-",values]);
}*/

/*const obj=
{
    'games':'nfs',
    'games2':'spiderman'
}

for (const [key,values] of obj) 
{
    console.log([key,"-",values]);
}*/

//********************for in*****************
const obj=
{
    js:"java script",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in obj) 
{
    //console.log(key);
    console.log(`${key} shortcut is for ${obj[key]}`);
}



const pro=["js","java","c++","c","c#","python"]
for (const key in pro) 
{
    //console.log(pro[key]);
}

/*********************for each loop *********************** */

const cc=["js","java","c++","c","c#","python"]

/*cc.forEach(function (item) {
    console.log(item);
} )*/

/*cc.forEach( (val)=> {
    console.log(val);
} )*/

/*cc.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})*/

const coding=
[
    {
        programname:"java",
        extension:".java"
    },
    {
        programname:"python",
        extension:".py"
    },
    {
        programname:"java script",
        extension:".js"
    },
]

coding.forEach( (item) => {
    console.log("programnamename:",item.programname);
    console.log("extension",item.extension);
} )