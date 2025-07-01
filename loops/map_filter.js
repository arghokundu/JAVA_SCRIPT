const pro=["js","java","c++","c","c#","python"]

//for each doesn't return item
/*const val=pro.forEach((item)=>{
    console.log(item);
    return item
})
console.log(val);*/

const a=[1,2,3,4,5,6,7,8,9,10]

//let n=a.filter((num)=> {num>5})  //doesn't return value if return then write return keyword  a.filter((num)=> return {num>5}) 
/*let n=a.filter((num)=> (num>5))
console.log(n);*/

const b=[]
a.forEach( (num)=>{
    if(num>5)
    {
        b.push(num)
    }
})

console.log(b)
 

/*********map****** */

const nn=[1,2,3,4,5,6,7,8,9,10]

/*const nnn=nn.map((num)=>{
    return num+10
})*/

//chaning
const newn=nn.map(
    (num)=>num *10).map(
        (num)=>num +10).filter(
            (num)=>num>50)
console.log(newn);


