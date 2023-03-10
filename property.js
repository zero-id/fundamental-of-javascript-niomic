function panggilaObjects() {
    var mobil = {
        type: 'Sedan',
        harga: 2000000000,
        warna: 'Putih',
        tahun: [2001, 2002, 2003, 2004]
    }

    mobil.harga = 1234567890000

    console.log(mobil)
    console.log(mobil.harga)
    console.log(mobil.tahun[1])
}

panggilaObjects()