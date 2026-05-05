const prompt = require('prompt-sync')({sigint: true});
let alas = Number(prompt(`masukan alas: `));
let tinggi = Number(prompt(`masukan tinggi: `));
let luas = 1/2 * alas * tinggi;
let keliling = alas + tinggi + (Math.sqrt(alas ^ 2 + tinggi ^ 2))
console.log("hasil nya well")
console.log(
    `luas segitiga\t\t: ${ luas.toFixed(2) } cm2
    keliling segitiga\t: ${keliling.toFixed(2)}cm`);