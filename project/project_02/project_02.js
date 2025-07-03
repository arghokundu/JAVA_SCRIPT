const form=document.querySelector('form')

//this use case will gives empty value
//const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    if(height=='' || height<0 || isNaN(height))
    {
        results.innerHTML=`please give a valid height${height}`
    }
    //results.innerHTML=`${height}`
    else if(weight=='' || weight<0 || isNaN(weight))
    {
        results.innerHTML=`please give A valid weight${weight}`
    }
    else
    {
        const bmi=(weight/((height*weight)/10000)).toFixed(2)
        //show the result
        results.innerHTML=`<span>${bmi}</span>`
        
        //msg printing
        /*Under Weight = Less than 18.6
        Normal Range = 18.6 and 24.9
        Overweight = Greater than 24.9*/
        switch(bmi)
        {
            case 'bmi<18.6':
                results.innerHTML=`<span>under weight</span>`
                break
            case 'bmi>=18.6' && 'bmi<=24.9':
                results.innerHTML=`<span>normal</span>`
                break
            case 'bmi>24.9':
                results.innerHTML=`<span>overweight</span>`
        }
    }
})

