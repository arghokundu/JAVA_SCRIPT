//generate a random color
const randomcolor=function()
{
    const hex="0123456789ABCDEF";
    let color='#';
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16+1)];
    }
    return color;
}

console.log(randomcolor());

const startchangingcolor=function(){
    document.body.style.backgroundColor=randomcolor();
};



document.querySelector("#start").addEventListener('click',startchangingcolor());
document.querySelector("#stop").addEventListener('click',stopchangingcolor());

