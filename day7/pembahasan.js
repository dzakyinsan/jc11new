// var fungsiku=function(a,b='dadsas',c){
//     return 'ini '+b
// }
// console.log(fungsiku())

// function litres(jam){
//    return Math.floor(0.5*jam)
// }
// var hasil=litres(3)
// console.log(hasil)

// var job='coders'


// switch(job){
//     case 'coders':
//         console.log('kerjaannya ngetik doang')
//     case 'student':
//         console.log('kerjaannya belajar')
//         break
//     default:
//         console.log('anda pengannguran')
// }


function pangkat(a,pang){
    if(pang==0){
        return 1
    }else{
        var output=a
        for(i=0;i<pang-1;i++){
            output*=a
        }
        return output
    }
}
console.log(pangkat(7,2))

