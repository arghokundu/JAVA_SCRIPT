const course={
    cname:"js",
    price:"999",
    teacher:"supriyo"
}

//course.cname

/*const {cname}=course
console.log(cname);*/

//destructure
const {cname:cn}=course
console.log(cn);

//json 
/*{
    name:"abcd",
    "coursename":"js",
    "price":"free"
}*/