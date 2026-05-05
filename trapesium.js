const prompt = require('prompt-sync')({sigint: true});
let tinggi = Number(prompt(`masukan tinggi: `));
let sisi_atas = Number(prompt(`masukan sisi atas: `));
let sisi_bawah = Number(prompt(`masukan sisi bawah: `));
let sisi_kanan = Number(prompt(`masukan sisi kanan: `));
let sisi_kiri = Number(prompt(`masukan sisi kiri: `));

let luas = 1/2 * (sisi_atas + sisi_bawah) * tinggi
let keliling = sisi_atas + sisi_bawah + sisi_kanan + sisi_kiri

console.log("hasil nya well")
console.log(
    `luas trapesium\t\t: ${ luas.toFixed(2) } cm2
    keliling trapesium\t: ${keliling.toFixed(2)}cm`);