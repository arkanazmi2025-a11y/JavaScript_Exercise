const prompt = require("prompt-sync")({sigin : true});
let sisi = Number(prompt("masukan sisi"))
let luas = sisi ^ 2
let volume = 4 * sisi

console.log("hasil nya")
console.log(" luas balok : "+ luas+"cm")
console.log(" volume balok : "+ volume)
console.log(`
    luas balok\t\t: ${luas.toFixed(2)})
    volume balok\t: ${volume.toFixed(4)}
    `);