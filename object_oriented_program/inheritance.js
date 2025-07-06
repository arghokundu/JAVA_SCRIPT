const user={
    uname:"abcd",
    id:1234
}

const Teacher={
    makevideo:true
}

const asstTeacher={
    isAvailable:false
}

const TAsupportTeacher={
    makeassignment:"js assignment",
    fulltime:true,
    __proto__:asstTeacher
}

Teacher.__proto__=user
Object.setPrototypeOf(asstTeacher,Teacher)

////////////////////////////////////////////////

let name="supriyo          "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is:${this.trim().length}`);   
}
name.trueLength()














