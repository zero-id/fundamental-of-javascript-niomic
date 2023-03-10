function nestedObject() {
    var mahasiswa = {
        nama: "ilham",
        ipk: {
            smt1: 3.5,
            smt2: 3,
            smt3: 3.6,
            smt4: 3.65
        }
    }

    console.log(mahasiswa.ipk.smt3)
}

nestedObject()

