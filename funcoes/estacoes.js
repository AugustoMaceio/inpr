
/*Crie uma função que informe a estação do ano, conforme o dia e mês do ano:
Período								Estação
De 23 setembro a 21 dezembro		PRIMAVERA
De 21 de dezembro a 21 de março.	VERÃO
De 21 de março a 21 de junho		OUTONO
De 21 de junho a 23 de setembro		INVERNO
*/
function estacao(dia, mes){
    if ((mes == 9 && dia > 21) || mes == 10 || mes == 11  || (mes == 12 && dia < 21) )
        return "💐 PRIMAVERA"
    if ( (mes == 12 && dia >= 21) || mes == 1 || mes == 2 || (mes == 3 && dia < 20))
        return "☀️ VERÃO"
    if ((mes == 3 && dia >= 20) || mes == 4 || mes == 5 || (mes== 6 && dia < 21) )
        return "🍂 OUTONO"
    if ((mes== 6 && dia >= 21) || mes == 7 || mes == 8 || (mes == 9 && dia <= 21))
        return "☂️ INVERNO"
}
/*
const prompt = require("prompt-sync")()
console.log("   ---   ESTAÇÔES DO ANO   ---")
let mes = prompt("Informe o mês: ")
let dia = prompt("Informe o dia: ")
console.log(`A estação do ano no dia ${dia}/${mes} é ${estacao(dia,mes)}`)

*/