const prompt = require('prompt-sync')({sigint: true});
let luasalas = Number(prompt('masukan luas alas: '));
let tinggi = Number(prompt('masukan tinggi: '));
let luasselubung = Number(prompt('masukan luas selubung: '));

let volume = 1/3 * luasalas * tinggi;
let luasp = luasalas + luasselubung;

console.log(
    `volume limas\t\t: ${volume.toFixed(2)} cm2
    luasp\t: ${luasp.toFixed(2)} cm`
);