var kata='hello'
const cloneincl= function (a,b){
    if(b.length==1){
        for(i=0;i<a.length;i++){
            if(b==a[i]){
                return true
            }
        }
        return false
    }else{
        for(i=0;i<a.length;i++){
            if(b==a.substr(i,b.length)){
                return true
            }
        }
        return false
    }
}
// console.log(cloneincl('hello','el'))
var abc='abcdefghijklmnopqrstuvwxyz'.split('').reverse()
var numbstring=12345566
numbstring= numbstring.toString().split('')
for(i=0;i<numbstring.length;i++){
    numbstring[i]=parseInt(numbstring[i])
}
// console.log(numbstring)
function tanggalharini(){
    var a=new Date()
    var hari="minggu senin selasa rabu kamis jum'at sabtu".split(' ')
    var bulan='januari februari maret april mei juni juli agustus september oktober november desember'.split(' ')
    return 'Tanggal hari ini '+hari[a.getDay()]+', '+a.getDate()+' '+bulan[a.getMonth()]+' '+a.getFullYear()
}
// console.log(tanggalharini())

function latihan(num=0){
    var str=String(num).split('')
    var output=''
    for(i=0;i<str.length;i++){
        str[i]=parseInt(str[i])
        output+=str[i]*Math.pow(10,str.length-1-i)
        if(i<str.length-1){
            output+='+'
        }
    }
    return output  
}
console.log(latihan(1234))