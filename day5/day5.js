function nama (){
    console.log('nama kalian')
}
function contoh(tinggi){
    var output=''
    for(var i=0;i<tinggi;i++){
        for(var j=i;j<tinggi;j++){
            output+='*'
        }
        if(i<tinggi-1){
            output+='\n'
        }
    }
    return output
}
// var segitigatgkat3=contoh(3)
// console.log(segitigatgkat3)
// contoh(3)
// contoh(10)

// var x=1
// var y=2
// contoh()

function namaku(nama,usia,hobby){
    console.log('namaku '+nama+' usiaku adalah '+(usia*2)+' hobbyku adalah '+hobby)
}
var x='dino'
// namaku(x,'dasda','ngoding')
// namaku('bambang',6,'berbohong')
// namaku('bombom',24,'tidur')
var angka1=1
var z='dasdadsad'
function tambahan(x,y){
    var z=x+y
    z+=angka1
    return z+angka1   

}
// var hasilakhir=tambahan(1,2)
// console.log(hasilakhir)







// var hasiloperator=operator(2,3,'asdsada')
// console.log(hasiloperator)
// console.log(operator(2,3,'tambah'))
// function operator(x,y,operator){
//     var hasil
//     if(operator=='tambah'){
//         hasil=x+y
//         return hasil

//     }else if(operator=='kurang'){
//         hasil=x-y
//         // return hasil

//     }else if(operator=='bagi'){
//         hasil=x/y
//         // return hasil
//     }else{
//         hasil=x*y
//     }
//     console.log('masuk sini 1')
//     return hasil
// }
function gaji(jammasuk,jamkeluar,jabatan){
    var gaji
    if(jabatan=='staff'){
        gaji=2000*(jamkeluar-jammasuk)
    }else if(jabatan='ceo'){
        gaji=1000*(jamkeluar-jammasuk)
    }else if(jabatan='manager'){
        gaji=700*(jamkeluar-jammasuk)
    }else{
        gaji='nggak ada gajinya'
    }
    return gaji
}
console.log('gajinya '+gaji(8,15,'ceo'))
console.log(gaji(8,19,'staff'))
console.log(gaji(8,20,'manager'))











