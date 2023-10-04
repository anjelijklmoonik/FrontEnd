// class di javascript
// class berhubungan dengan object
// setiap class bisa mempunyai child class

// objek literal
// const mobil1 = {
//     transmisi: "Manual",
//     bahanBakar: "Bensin",
//     mesin: 1500,
//     nyalakan: function () {
//         console.log(`Mobil $(this.transmisi) dinyalakan`)
//     },
// };

// const mobil2 = {
//     transmisi: "Manual",
//     bahanBakar: "Bensin",
//     mesin: 1500,
//     nyalakan: function () {
//         console.log(`Mobil $(this.transmisi) dinyalakan`)
//     },
// };


class Mobil {
    constructor(transmisi, bahanBakar, mesin){
        this.transmisi = transmisi;
        this.bahanBakar = bahanBakar;
        this.mesin = mesin;
    }
    nyalakanMesin () {
        console.log(`Mobil $(this.transmisi) dinyalakan`);
    }
}

const mobil1 = new Mobil ("Automatic", "Bensin", 1500);
mobil1.nyalakanMesin();
const mobil2 = new Mobil ("Manual", "Solar", 2000);
mobil2.nyalakanMesin();

class Toyota extends Mobil {
    constructor(transmisi, bahanBakar, mesin, merk, warna) {
        super(transmisi, bahanBakar, mesin)
        this.merk = merk;
        this.warna = warna;
    }
}

const agya = new Toyota ("Manual", "Bensin", 1500, "Agya", "Putih");
console.log(agya);
agya.nyalakanMesin();