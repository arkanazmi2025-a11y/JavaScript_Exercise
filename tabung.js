const prompt = require(`prompt-sync`)({sigin : true});
let r = Number(prompt(`masukan jari-jari : `))
let tinggi = Number(prompt(`masukan tinggi : `))

let volume = 3.14 * r ^ 2 * tinggi
let luasp = 2 * 3.14 * r * (r + tinggi)

console.log(
    `volume tabung\t\t: ${volume.toFixed(2)} cm2
    luasp\t: ${luasp.toFixed(2)} cm`);