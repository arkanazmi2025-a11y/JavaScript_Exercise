const prompt = require(`prompt-sync`)({sigint:true});
let diagonal1 = Number(prompt(`masukan diagonal1 :`))
let diagonal2 = Number(prompt(`masukan diagonal2 :`))
let a = Number(prompt(`masukan a :`))
let b = Number(prompt(`masukan b :`))

let luas = 1/2 * diagonal1 * diagonal2
let keliling = 2 * (a + b)

console.log(`luas layang-layang\t\t: ${luas.toFixed(2)} cm2
keliling layamg-layang\t: ${keliling.toFixed(2)} cm`);