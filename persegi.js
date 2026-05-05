const prompt = require('prompt-sync')({sigint: true});
let sisi = Number(prompt('masukan sisi: '));
let luas = sisi * sisi;
let keliling = 4 * sisi;

console.log("===============================");
console.log("              hasil            ");
console.log("===============================");

console.log(`luas persegi : ${ luas.toFixed(2) } cm`);
console.log(`keliling persegi : ${ keliling.toFixed(2) } cm`);
console.log(
`luas persegi\t\t:  ${ luas.toFixed(2) } cm2
    keliling persegi\t:  ${ keliling.toFixed(2) } cm`);