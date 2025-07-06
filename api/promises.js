const promise1=new Promise(function(resolve,reject){
    //do an async task
    //db calls,cryptography,network call,set timeout 
    setTimeout(function(){
        console.log("async task complete");
        resolve()
    },1000)
})

promise1.then(function(){
    console.log("promise consume");
})


//another way
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 1000);
}).then(()=>{
    console.log("promise consume 2 ");
})




const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({uname:"supriyo",
            email:"supriyo@gmail.com"
        })
    },1000)
})

promise3.then((user)=>{
    console.log(user);
})



const promise4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //let error=true
        let error=false
        if(!error)
        {
            resolve({username:"abcd",
                password:"1234"})
        }
        else
        {
            reject('ERROR:something went wrong')
        }
    },1000)
})

const username=promise4
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("finally done");
})



const promise5=new Promise((resolve,reject)=>{
  setTimeout(()=>{
        //let error=true
        let error=false
        if(!error)
        {
            resolve({username:"java script",
                password:"j@124"})
        }
        else
        {
            reject('ERROR:something went wrong')
        }
    },1000)  
})

async function consumepromise5() {
    try {
        const response=await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumepromise5()


async function getalluser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //console.log(response);
        const data=await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getalluser()








