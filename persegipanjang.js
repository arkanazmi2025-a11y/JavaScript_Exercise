const prompt = require(`prompt-sync`)({sigint:true});
let panjang = Number(prompt(`masukan panjang:`));
let lebar = Number(prompt(`masukan lebar:`));
let luas = panjang*lebar
let keliling = 2*luas
console.log("hasil nya bung")
console.log(
    `luas persegi\t\t ${ luas.toFixed(2) } cm2
    keliling persegi\t ${keliling.toFixed(2) } cm`);