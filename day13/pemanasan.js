var output=0
var a='1plus1plus1plus1'.split('plus').map((val)=>parseInt(val)).forEach((val,index)=>output+=val)
console.log(output)