/* ============================================================
   REVISÃO DE FUNÇÕES — 01: FUNÇÕES SEM PASSAGEM DE PARÂMETRO
   INPR — IFAL Maceió — Turma 911C — Prof. Augusto
   ------------------------------------------------------------
   Ideia central: a função é uma MÁQUINA DE SUCO.
   Aqui a máquina já vem com a fruta dentro: a gente só aperta o
   botão (chama a função) e ela devolve o suco sempre igual.
   Por isso os parênteses da definição ficam VAZIOS: ( )
   ============================================================ */

// 1 - Função sem parâmetro: sempre devolve o mesmo texto.
//     Não precisa de nada de fora para trabalhar.
function ifal() {
    return "Instituto Federal de Alagoas"
}

// 2 - Função sem parâmetro que devolve uma linha decorativa.
//     "=".repeat(40) monta uma string com 40 sinais de igual.
function linha() {
    return "=".repeat(40)
}

// 3 - Função sem parâmetro, mas com resultado DIFERENTE a cada chamada.
//     Math.random() sorteia um número entre 0 e 1 (sem chegar no 1).
//     Multiplicando por 6 -> de 0 até 5,999...
//     Math.floor() joga fora as casas decimais -> 0 até 5
//     Somando 1 -> 1 até 6, que é o dado de verdade.
function sortearDado() {
    return Math.floor(Math.random() * 6) + 1
}

// 4 - Função sem parâmetro que devolve um texto de várias linhas.
//     O \n dentro do texto significa "pule para a próxima linha".
function boasVindas() {
    return `Bem-vindas e bem-vindos!\nTurma 911C — Ensino Médio Integrado\nDisciplina: INPR`
}

/* ------------------------------------------------------------
   CHAMANDO AS FUNÇÕES
   Chamar = escrever o nome + os parênteses. Ex.: ifal()
   ------------------------------------------------------------ */

console.log(linha())
console.log("FUNÇÕES SEM PASSAGEM DE PARÂMETRO")
console.log(linha())

console.log(`Escola: ${ifal()}`)
console.log()

console.log(boasVindas())
console.log()

console.log(linha())
console.log("A MESMA FUNÇÃO CHAMADA VÁRIAS VEZES")
console.log(linha())

// A mesma função pode ser chamada quantas vezes a gente quiser.
// É exatamente para isso que ela existe: reaproveitar código.
console.log(`1ª chamada de ifal(): ${ifal()}`)
console.log(`2ª chamada de ifal(): ${ifal()}`)
console.log(`3ª chamada de ifal(): ${ifal()}`)
console.log()

console.log(linha())
console.log("🎲 CINCO LANÇAMENTOS DO DADO")
console.log(linha())

// sortearDado() é sem parâmetro, mas o resultado muda a cada chamada.
// Rode o arquivo de novo: os números serão outros.
for (let i = 1; i <= 5; i++) {
    console.log(`Lançamento ${i}: saiu ${sortearDado()}`)
}
console.log()

/* ------------------------------------------------------------
   ⚠️ ERRO CLÁSSICO: CHAMAR A FUNÇÃO SEM OS PARÊNTESES
   ------------------------------------------------------------
   Se a gente escrever assim (SEM os parênteses):

       console.log(ifal)

   o JavaScript NÃO executa a função. Ele mostra a própria função,
   algo parecido com:

       [Function: ifal]

   Sem os parênteses a gente está falando do NOME da máquina.
   Com os parênteses a gente APERTA O BOTÃO da máquina.

   Regra de bolso: para usar o resultado, sempre ifal() — com ( ).
   ------------------------------------------------------------ */

console.log(linha())
console.log("⚠️ COM E SEM PARÊNTESES")
console.log(linha())

console.log("Com parênteses  -> ifal()  ->", ifal())
console.log("Sem parênteses  -> ifal    ->", String(ifal).split("\n")[0], "... (é a função, não o resultado!)")
console.log()

console.log(linha())
console.log("Fim do arquivo 01. Próximo: node 02_com_parametro.js")
console.log(linha())
