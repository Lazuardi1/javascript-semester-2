const objek = {
    nama : "lazuardi",
    telp : 12345678,

    buah: ["apel","jeruk","mangga"],
    
    coba: function () {
        return "coba function dalam objek";
    },

    boleh: true,
    "tulis aja": 1234,
};

console.log(objek.buah[2]);
console.log(objek.nama);
console.log(objek.boleh);
console.log(objek.coba());
console.log(objek.telp);
console.log(objek["tulis aja"]);