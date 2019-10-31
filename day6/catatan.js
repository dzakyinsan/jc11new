// function litres(time) {
//     var times=Math.floor(time)
//     var litres=0
//     for(var i=0;i<times;i++){
//       litres+=0.5
//     }
//     return Math.floor(litres)
// }

//1. // Because Nathan knows it is important to stay hydrated, 
// he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of 
// litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

//2. membuat perkalian 1*1=1 sampai perkalian 10
// 1x1=1 1 sampai perkalian berapapun




















function perkalian(angka){
    var output=''
    for(i=1;i<11;i++){
        output+=(angka+'x'+i+'=')+(angka*i)
        output+='\n'
    }
    return output
}




















console.log(perkalian(12))

// budi mendapat kan permen setiap hari kelipatan 2  berapa permen yang didapatkan budi selama x hari 
// x ini kita bisa isi dengan apapun 

// buat diteminal ko kita input 10 akan mereturn 1 sampai 10
//tiap keliapatan 3 akan menganntikan angka menjadi purwa kelipatan 5 dhika dan 3 dan 5 menjadi purwadhika