var angka='abcdef'.split('')
// console.log(angka)
var huruf='123'.split('')
// console.log([...angka,...huruf])
var bebas= a => 'aku'+ a
// console.log(bebas('anak'))

var x=(a)=>{
    console.log('ini x'+a)
}
var z=()=>{
    console.log('ini z')
}
var y=(cb=(a)=>{console.log('ini cb'+a)},numb)=>{
    console.log('ini y')
    cb(numb)
}
// y(x,2)

// var w = [0,1,2,3,4,5]
// var x = w.filter((W) => W !== 2);
// var y = w.filter((val) => val % 2 == 0);
// var z = w.filter((val) => val % 2 !== 0);
// console.log(w)
// console.log(x);
// console.log(y);
// console.log(z);
var w = [1,4,9,16,25]
var x = w.map(Math.sqrt);
var y = w.map((val,index)=>{ 
    if(val==9){ 
       return index+ '.angka'+val
    }
    return false
    });
var z = w.map((val)=> val!==9);
console.log(x);
console.log(y);
console.log(z);


