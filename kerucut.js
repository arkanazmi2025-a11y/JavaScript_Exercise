const prompt = require(`prompt-sync`)({ sigint : true});
let r = Number(prompt(`masukan jari-jari : `))
let t = Number(prompt(`masukan tinggi : `))

let volume = (1/3) * 3.14 * r * r * t
let s = (r ^ 2 + t ^ 2)
let luasp = 3.14 * r *(r + s)

console.log(
    `volume kerucut\t\t: ${volume.toFixed(2)} cm2 
    luasp\t: ${luasp.toFixed(2)} cm`);