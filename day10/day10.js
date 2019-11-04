// var orang = {
//     namaDpn:'Andi',
//     usia:50,
//     pekerjaan:'Politisi',
//     namaFull: function() {
//     return this.namaDpn + " " + " Karno"+this.usia;}
// };
// class Orang{
//     constructor(nama,usia,pekerjaan){
//         this.nama=nama,
//         this.usia=usia,
//         this.pekejaanorang=pekerjaan
//     }
// }
// var namakelas=[]
// var name='nama'
// namakelas.push(new Orang('bobi',35,'pengacara'))
// namakelas.push(new Orang('zaky',17,'ojol'))
// console.log(namakelas[1][name])
// namakelas[0].usia+=15
// console.log(namakelas)
// var age='usia'
// delete namakelas[0][age]
// console.log(namakelas)
// var name='budi'
// var usia=12
// var Manusia={
//     name,
//     usia
// }
// console.log(Manusia)

// console.log(orang.namaDpn)
// var namadepan='namaDpn'
// var namaandi=orang.namadepan
// var {namaDpn}=orang
// orang.namaDpn='eza'

// console.log(orang.namaFull())
// console.log(orang.namaDpn)
// console.log(namaDpn)

// var orang = {
//     namaDpn : "Andi",
//     namaBlk : "Susilo",
//     usia : 50,
//     namaFull : function() {
//     return this.namaDpn + " " + this.namaBlk;
//     }
// }; 


// console.log(orang.namaFull)
// console.log(orang.namaFull())


var manusia = {
    kepala: 1,
    mata: 2,
    telinga: 2,
    tangan: 2,
    kaki: 2,
};
// var namaProp;
// for (var i in manusia) {
//     console.log( manusia[i]);
// }


// function Orang(nama, lahir, job) {
//     this.nama = nama;
//     this.lahir = lahir;
//     this.job = job;
// }
//     Orang.prototype.marga = 'Hasibuan';
//     Orang.prototype.usia = function() {
//         return 2019 - this.lahir;
//     };
//     var budi = new Orang('Budi', 1992, 'PNS');
//     console.log(new Orang('kenang',1999,'exmud').usia())
//     console.log(budi.marga);
//     console.log(budi.usia());

var kelas='jc13'
var namamurid=kelas=='jc11'?'farhan':kelas=='jc12'?'budi':'bambang'
console.log(namamurid)


// var a='hallo'
// console.log()
// var a=new Array(5)
// // console.log(a)
// for (let i=0;i<5;i++){
//     if(i===3){
//         continue
//     }
//     console.log(i)
//
class Manusia {
    constructor(nama,pekerjaan,umur){
        // console.log(nama)
        this.nama=nama
        this.pekerjaan=pekerjaan
        this.umur=umur
    }
    get kalimat(){
        console.log(`${this.nama} bekerja sebagai ${this.pekerjaan}, dan berumur ${this.umur} `)
    }

}
// console.log(new kelas("joey","actor",14))
// var arr=[]
// arr.push(new Manusia("joey","actor",31))
// console.log(new Manusia("joey","actor",31).kalimat)
// new Manusia("joey","actor",31).kalimat

class Persegi{
    constructor(sisi){
        this.panjang=sisi
        this.lebar=sisi
        this.luaspersegi=function(){
            return this.panjang*this.lebar
        }
    }
    get luas (){
        return this.panjang*this.lebar
    }
    set luas(a){
        this.panjang=Math.sqrt(a)
        this.lebar=Math.sqrt(a)
    }
    static inipersegi(Sisi1,Sisi2){
        return Sisi1===Sisi2?"ini persegi":"ini bukan persegi"
    }
}
// let persegi1=new Persegi(4)
// console.log(persegi1.luaspersegi())
// console.log(persegi1.luas)
// persegi1.luas=36
// console.log(persegi1.inipersegi(2,3))
// console.log(Persegi.inipersegi(12,13))

class Orang{
    constructor(nama,b){
        this.nama=nama
        this.usia=b
    }
    deskripsi(){
        console.log(`nama ${this.nama}, usia saya ${this.usia}`)
    }
}
class Programmer extends Orang{
    constructor(nama,usia,pengalaman){
        super(nama,usia)
        //super(nama,usia)//arus urutan sesuai dengan yang diextend
        this.pengalaman=pengalaman
    }
    code(){
        console.log(`nama ${this.nama}, usia saya ${this.usia} dan pengalaman ngoding${this.pengalaman}`)
    }
    deskrip(){
        super.deskripsi()
        console.log('ini deskrip')
    }
    
}
console.log(new Programmer('dino',22,2).deskripsi())
// var j='dadas'
// console.log(Math.round(4.7))