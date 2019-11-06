var a=['a','b','1']
var b=a.map((val,index)=>{
    if(index<2){
        return val+2
    }
    return val
})
console.log(b)
var output=''
a.forEach((val)=>{output+=val})
console.log(output)