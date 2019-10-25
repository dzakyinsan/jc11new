// let z=''
// for(var i =1;i<10;i+=2){
//     z+=i
//     console.log(z)
// }
// latihan
// let z=''
// for(let i=1;i<6;i++){
//     for(let j=1;j<6;j++){
//         z+=j
//     }if(i<5){
//         z+='\n'
//     }
// }
// console.log(z)
function segitigabolabalik(tinggi){
    let z=''
    for(let i =0;i<tinggi;i++){
        for(let j=i;j<tinggi;j++){
            z+='*'
        }
        if(i==tinggi-2){
            break
        }       
        if(i<=tinggi){
            z+='\n'
        }
        
    }
    z+='\n'
    var x=''
    for(let a =0;a<tinggi;a++){
        for(let b=0;b<=a;b++){
            x+='*'
        }
        if(a<tinggi-1){
            x+='\n'
        }
    }
    var output=z+x 
    return output  
}
// console.log(segitigabolabalik(3))
// segitigabolabalik()
function segitigabesar(tinggi){
    let z=''
    for(a=0;a<tinggi;a++){
        for(b=a;b<tinggi-1;b++){
            z+=' '
        }
        for(c=0;c<=a;c++){
            z+='*'
        }
        for(d=0;d<=a-1;d++){
            z+='*'
        }
        if(a<tinggi-1){
            z+='\n'
        }
    }
    console.log(z)
}
// segitigabesar(4)
function segitagabesarterbalik(tinggi){
    let z=''

    for(let a=0;a<tinggi;a++){
        for(let b=0;b<=a;b++){
            z+=' '
        }
        for(let c=a;c<tinggi;c++){
            z+='*'
        }
        for(let d=a+1;d<tinggi;d++){
            z+='*'
        }
        if(a<tinggi-1){
            z+='\n'
        }
    }
    console.log(z)
}
// segitagabesarterbalik(3)








// var output=''
// let z=''
// let x=''
// for(k=0;k<5;k++){
//     if(k<3){
//         for(let i =0;i<3;i++){
//             for(let j=i;j<3;j++){
//                 z+='*'
//             }
//             if(i==3-2){
//                 break
//             }       
//             if(i<=5){
//                 z+='\n'
//             } 
//         }
//         z+='\n'
//     }else{
//         for(let a =0;a<2;a++){
//             for(let b=0;b<=a;b++){
//                 x+='*'
//             }
//             if(a<2-1){
//                 x+='\n'
//             }
//         }
//     }
    
// }
// output=z
// console.log(output)