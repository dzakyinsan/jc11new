function urutan(angka){
    var output=''
    for(i=1;i<=angka;i++){
        if((i)%3==0&&(i)%5==0){
            output+='PurwaDhika '
        }else if((i)%3==0){
            output+='Purwa '
        }else if((i)%5==0){
            output+='Dhika '
        }else{
            output+=(i)+' '
        }
    }
    return output
}
// console.log(urutan(30))

var Permen=function(hari){
    let output=0
    for(i=1;i<=hari;i++){
        if(i%10==0){
            output+=2
        }else if(i%2==0){
            output-=-1
        }
    }
    return output
}
// console.log(Permen(100))

function perkalian(angka,perkalian){
    var output=''
    for(i=1;i<=perkalian;i++){
        output+=angka+'X'+i+'='+(angka*i)
        output+='\n'
    }
    return output
}
console.log(perkalian(10,12))