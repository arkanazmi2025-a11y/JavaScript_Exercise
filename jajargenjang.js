const prompt = require('prompt-sync')({sigint: true});
let alas = Number(prompt('masukan alas: '));
let tinggi = Number(prompt('masukan tinggi: '));
let sisi = Number(prompt('masukan sisi: '));

let luas = alas * tinggi;
let keliling = 2 * (alas + sisi);

console.log("hasil nya bjir");
console.log(
    `luas jajargenjang\t\t : ${ luas.toFixed(2)} cm2
keliling jajargenjang\t : ${ keliling.toFixed(2)} cm`);