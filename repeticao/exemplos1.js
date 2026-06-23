const prompt = require("prompt-sync")()

/** Contar de 1 a 10 */
let contador = 1
let resultado = ''
while( contador <= 10  ){
    // console.log(contador)
    resultado = resultado + contador + " "
    contador += 1  //contador = contador + 1
}
console.log(resultado)