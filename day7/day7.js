// var x=setTimeout(waktu, 3000);
// function waktu() {
//     console.log('Halo');
// }
// console.log('Yuk');
// clearTimeout(x)

// var x=setInterval(waktu, 1000);
// var time=10
// function waktu() {
//     console.log(time);
//     time-=1
//     if(time==0){
//         clearInterval(x)
//     }
// }\
// function faktorial(a){
//     for(i=a-1;i>0;i--){
//         a*=i
//     }
//     return a
// }
// console.log(faktorial(3))









// function faktorial(a){
//     for(i=a-1;i>0;i--){
//         a*=i
//     }
//     return a
// }
// console.log(faktorial(9))

// function faktorial(a){
//     var output=1
//     for(i=1;i<=a;i++){
//         output*=i
//     }
//     return output
// }
// console.log(faktorial(9))

let mobil = ['Alya','Xenia','Avanza','Altis','1222','@@@'];
function pencarianmobil(a){

}
console(pencarianmobil('honda'))
// console.log(mobil)
// console.log(mobil.toString())
// console.log(mobil.join(' '))

// console.log(mobil[0])
// console.log(mobil[1])
// console.log(mobil[2])

// console.log(mobil.length)
// for(i=0;i<mobil.length;i++){
//     console.log(mobil[i])
// }
// console.log(mobil.sort())
// console.log(mobil.reverse())
// console.log(mobil.indexOf('Avanza'))
// let buah = ['Jeruk','Nanas','Apel'];
// // buah.splice(2, 0, 'Lemon', 'Kiwi');
// // console.log(buah)
// // var durian='mangga'
// buah.splice(1, 1,['aku','kamu',['apa aja','aja apa']]);
// console.log(buah[1][2][1])

// var arr=[[[1,2,3],['a','b','c']],['z','y','z1']]
// console.log(arr[0][0][1])

var nama='https://www.mentimeter.com/s/48177aa86d842d7e95fa01f7b59df084/ed0bae0de0e8'
console.log(nama.split('.')[1])

function sum(a){
    var output=0
    for(i=0;i<a.length;i++){
        output+=a[i]
    }
    return output
}
console.log(sum([1,2,3,4]))
console.log(sum('1234'))
//sum 

