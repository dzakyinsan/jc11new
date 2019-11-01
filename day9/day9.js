// console.log(day9(2)[1]()) 


function day9(a){
    return [0,function bebas (){
        return [1,2,3][a]
    },3]
}
function jc11(a){
    return [1,2,function(){return a}(),4,5][2]
}
// console.log(jc11(10))
var obj={
    print:function(a){
        return a
    }
}
var print=print(12)
console.log(obj[print])
var arrnew=[1,2,3]
var arr=[1,2,3][1]
// console.log(arr)
// function jc11(){

// }