const entrada = require("readline-sync");

let n : number = parseFloat(entrada.question("digite um numero: "))

for (let i = 0; i <= n; i+=2) {
    console.log(i);
}