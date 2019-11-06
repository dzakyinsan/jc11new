var a=['1','2','3']
var output=''
// for(var i=0;i<a.length;i++){
//     output+='No.'+ (i+1)+' '+ a[i]+'\n'
// }
var c=a.map((val)=>parseInt(val))
console.log(c)
a.forEach((ragiel,index)=>output+='No.'+ (index+1)+' '+ ragiel+'\n')
console.log(output)