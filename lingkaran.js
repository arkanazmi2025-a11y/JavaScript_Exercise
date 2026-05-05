const prompt = require('prompt-sync')({sigint: true});
let jariJari = Number(prompt('masukan jarijari: '));

let luas = 3.14 * jariJari * jariJari;
let keliling = 2 * 3.14 * jariJari;

console.log("hasil nya mpruy");
console.log(`luas lingkaran : ${ luas.toFixed(2)} cm2
keliling lingkaran : ${ keliling.toFixed(2)} cm`);