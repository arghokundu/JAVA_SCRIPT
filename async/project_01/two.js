 const supriyo = function()
    {
        console.log("Hitesh");
    }
    const changeText = function()
    {
        document.querySelector('h1').innerHTML = "best JS series"
        //document.getElementById('#h11').innerHTML="hello"
    }

const changeme=setTimeout(changeText,2000)

document.querySelector('#stop').addEventListener('click',function()
{
    clearTimeout(changeme)
    console.log("stopped");
})























