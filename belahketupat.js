const prompt = require('prompt-sync')({sigint: true});
let diagonal_1 = Number(prompt(`masukan diagonal 1: `));
let diagonal_2 = Number(prompt(`masukan diagonal 2: `));
let sisi = Number(prompt(`masukan sisi: `));
let luas = 0.5* diagonal_1 * diagonal_2
let keliling = 4 * sisi 
console.log("hasil nya bro") 
console.log(
    `luas belah ketupat\t\t: ${ luas.toFixed(2) } cm2
    keliling belah ketupat\t: ${keliling.toFixed(2)}cm`);