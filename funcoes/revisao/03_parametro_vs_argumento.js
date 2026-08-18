/* ============================================================
   REVISÃO DE FUNÇÕES — 03: PARÂMETRO × ARGUMENTO
   INPR — IFAL Maceió — Turma 911C — Prof. Augusto
   ------------------------------------------------------------
   PARÂMETRO  -> o NOME que aparece na DEFINIÇÃO da função.
                 É uma caixa vazia esperando um valor.
   ARGUMENTO  -> o VALOR que a gente entrega na CHAMADA da função.

        function estacao(dia, mes) { ... }   <- dia e mes: PARÂMETROS
        estacao(25, 12)                      <- 25 e 12: ARGUMENTOS

   ⚠️ A ORDEM IMPORTA! O primeiro argumento entra no primeiro
   parâmetro, o segundo no segundo, e assim por diante.
   ============================================================ */

function linha() {
    return "=".repeat(50)
}

/* Função do professor (arquivo funcoes/estacoes.js)
   Informa a estação do ano conforme o dia e o mês:
   De 23 setembro a 21 dezembro     PRIMAVERA
   De 21 de dezembro a 21 de março  VERÃO
   De 21 de março a 21 de junho     OUTONO
   De 21 de junho a 23 de setembro  INVERNO           */
function estacao(dia, mes) {
    if ((mes == 9 && dia > 21) || mes == 10 || mes == 11 || (mes == 12 && dia < 21))
        return "💐 PRIMAVERA"
    if ((mes == 12 && dia >= 21) || mes == 1 || mes == 2 || (mes == 3 && dia < 20))
        return "☀️ VERÃO"
    if ((mes == 3 && dia >= 20) || mes == 4 || mes == 5 || (mes == 6 && dia < 21))
        return "🍂 OUTONO"
    if ((mes == 6 && dia >= 21) || mes == 7 || mes == 8 || (mes == 9 && dia <= 21))
        return "☂️ INVERNO"
}

console.log(linha())
console.log("PARÂMETRO × ARGUMENTO")
console.log(linha())
console.log("Definição:  function estacao(dia, mes)  -> dia e mes são PARÂMETROS")
console.log("Chamada:    estacao(25, 12)             -> 25 e 12 são ARGUMENTOS")
console.log()

console.log(linha())
console.log("🗓️ A FUNÇÃO estacao FUNCIONANDO NORMALMENTE")
console.log(linha())

// Aqui a ordem está certa: primeiro o DIA, depois o MÊS.
console.log(`25/12 -> ${estacao(25, 12)}`)
console.log(`05/05 -> ${estacao(5, 5)}`)
console.log(`10/07 -> ${estacao(10, 7)}`)
console.log(`30/09 -> ${estacao(30, 9)}`)
console.log(`01/01 -> ${estacao(1, 1)}`)
console.log()

console.log(linha())
console.log("⚠️ O ERRO CLÁSSICO: TROCAR A ORDEM DOS ARGUMENTOS")
console.log(linha())

// Ordem CERTA: dia = 25, mes = 12 -> 25 de dezembro -> verão.
console.log(`estacao(25, 12) -> dia = 25, mes = 12 -> ${estacao(25, 12)}`)

// Ordem TROCADA: dia = 12, mes = 25 -> não existe mês 25!
// Nenhum if é verdadeiro, a função termina sem return
// e devolve undefined. O programa NÃO dá erro — ele fica errado
// silenciosamente, que é o pior tipo de problema.
console.log(`estacao(12, 25) -> dia = 12, mes = 25 -> ${estacao(12, 25)}`)
console.log()
console.log("Lição: o JavaScript não sabe que 25 era o dia. Ele só obedece a ORDEM.")
console.log()

console.log(linha())
console.log("🔁 OUTRO EXEMPLO DE ORDEM: DIVISÃO E POTÊNCIA")
console.log(linha())

// Em somar(a, b) a ordem não muda o resultado (4 + 6 = 6 + 4).
// Mas em dividir e em potência a ordem muda TUDO.
function dividir(a, b) {
    return a / b
}

function potencia(base, expoente) {
    return base ** expoente
}

console.log(`dividir(10, 2) = ${dividir(10, 2)}`)
console.log(`dividir(2, 10) = ${dividir(2, 10)}   <- ordem trocada, resultado diferente!`)
console.log(`potencia(2, 3) = ${potencia(2, 3)}   -> 2 * 2 * 2`)
console.log(`potencia(3, 2) = ${potencia(3, 2)}   -> 3 * 3`)
console.log()

console.log(linha())
console.log("📛 O NOME DO PARÂMETRO É SÓ UM APELIDO INTERNO")
console.log(linha())

// Repare: a variável de fora se chama "diaDaFesta", mas dentro da
// função ela é conhecida como "dia". O que viaja é o VALOR, não o nome.
let diaDaFesta = 24
let mesDaFesta = 6
console.log(`Festa junina em ${diaDaFesta}/${mesDaFesta} -> ${estacao(diaDaFesta, mesDaFesta)}`)
console.log("Dentro da função, diaDaFesta virou o parâmetro dia. Só o VALOR foi passado.")
console.log()

console.log(linha())
console.log("Fim do arquivo 03. Próximo: node 04_return_vs_console.js")
console.log(linha())
