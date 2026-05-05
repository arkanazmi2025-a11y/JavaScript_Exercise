const prompt = require(`prompt-sync`)({sigint: true});
let sisi = Number(prompt(`masukan sisi :`))

let volume = sisi ^ 3
let luasp = 6 * sisi ^ 2

console.log(
    `volume kubus\t\t: ${volume.toFixed(2)} cm2
    luasp\t: ${luasp.tofixed(2)} cm`);