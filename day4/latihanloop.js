// for(var i=0;i<10;i++){
//     if(i%2==0){
//         console.log(i)
//     }
//     console.log('looping ke'+i)
// }
// for(var i=0;i<10;i+=2){
//     console.log(i)
// }
// for(var i=1;i<6;i++){
//     console.log(i)
// }
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// var jumlahbintang=10
// var output=''
// for(var i=0;i<jumlahbintang;i++){
//     output+='*\n'
// }
// console.log(output)
var output=''
for(var i=0;i<5;i++){
    for(var j=i;j<5;j++){
        output+='*'
    }
    if(i<4){
        output+='\n'
    }
}
// console.log(output)
// let z=''
// for(let a=0;a<5;a++){
//     for(let b=0;b<=a;b++){
//         z+=' '
//     }
//     for(let c=a;c<5;c++){
//         z+='*'
//     }
//     for(let d=a+1;d<5;d++){
//         z+='*'
//     }
//     if(a<5-1){
//         z+='\n'
//     }
// }
let z=''
for(a=0;a<5;a++){
    for(b=a;b<5-1;b++){
        z+=' '
    }
    for(c=0;c<=a;c++){
        z+='*'
    }
    for(d=0;d<=a-1;d++){
        z+='*'
    }
    if(a<5-1){
        z+='\n'
    }
}
console.log(z)
