const prompt = require('prompt-sync')({sigint: true});
let luasalas = Number(prompt('masukan luas alas: '))
let tinggi = Number(prompt('masukan tinggi: '))
let kelilingalas = Number(prompt('masukan keliling alas: '))

let volume = luasalas * tinggi
let luasp = 2 * luasalas + kelilingalas * tinggi

console.log(
    `volume prisma segitiga\t: ${volume.toFixed(2)} cm2
    luasp\t: ${luasp.toFixed(2)} cm`);