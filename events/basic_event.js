/*document.getElementById('owl').onclick=function(){
    alert("owl click")
}*/


//type,timestamp,defaultprevented
//target,toElement,srcElement
//clientX,clientY,screenX,screenY
//altkey,ctrlkey,shiftkey,keycode

//attachEvent()
//jquery -on

/*document.getElementById('images').addEventListener('click',function(e){
    console.log("click inside the ul");
},false)


document.getElementById('owl').addEventListener('click',function(e){
    console.log("owl click");
    e.stopPropagation()
},false)


document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation()
    console.log("google clicked");
},false)*/

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if(e.target.tagName==='IMG')
    {
        console.log(e.target.id);
        let removeit=e.target.parentNode
        removeit.remove()  
    } 
})









