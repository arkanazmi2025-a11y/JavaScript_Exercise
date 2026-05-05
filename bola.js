const prompt  = require(`prompt-sync`)({ sigint : true});
let r = Number(prompt(`masukan jari-jari :`))

let volume = 4/3 * 3.14 * r^3
let luasp = 4 * 3.14 * r^2

console.log(
    `volume kerucut\t\t: ${volume.toFixed(2)} cm2
    luasp\t ${luasp.toFixed(2)} cm`);