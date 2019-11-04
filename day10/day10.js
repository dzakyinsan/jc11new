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