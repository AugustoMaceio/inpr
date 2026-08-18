/* ============================================================
   REVISÃO DE FUNÇÕES — 09: GALERIA "SEM PASSAGEM DE PARÂMETRO"
   INPR — IFAL Maceió — Turma 911C — Prof. Augusto
   ------------------------------------------------------------
   Exemplos EXTRAS, do dia a dia: moeda, emoji, senha, menu.
   Todas elas têm os parênteses vazios: não recebem nada de fora.

   💡 GANCHO IMPORTANTE: rode este arquivo DUAS vezes.
   Algumas respostas mudam! Isso prova que a função EXECUTA de
   novo a cada chamada — ela não é um valor guardado, é uma receita
   que é preparada na hora.
   ============================================================ */

// 1 - Sorteio simples: Math.random() devolve um número entre 0 e 1.
//     Se cair abaixo de 0.5, é cara; senão, coroa.
//     O operador ? : é um if resumido: condição ? seVerdadeiro : seFalso
function caraOuCoroa() {
    return Math.random() < 0.5 ? "🪙 CARA" : "🪙 COROA"
}

// 2 - Sorteia um emoji de uma lista.
//     Math.random() * emojis.length dá um número entre 0 e 6,99...
//     Math.floor() arredonda para baixo -> uma posição válida do array.
function emojiDoDia() {
    let emojis = ["🚀", "🍕", "🎧", "⚽", "📚", "🐢", "🌻"]
    return emojis[Math.floor(Math.random() * emojis.length)]
}

// 3 - Devolve um cabeçalho pronto, sempre igual.
function cabecalho() {
    return `${"=".repeat(40)}\n   IFAL — INPR — turma 911C\n${"=".repeat(40)}`
}

// 4 - Gera uma senha numérica de 6 dígitos (de 100000 a 999999).
//     900000 possibilidades + 100000 de base garante os 6 dígitos.
function senhaAleatoria() {
    return Math.floor(Math.random() * 900000) + 100000
}

// 5 - Devolve o texto do menu do programa. Sempre o mesmo.
function menu() {
    return "1) Cadastrar\n2) Listar\n3) Sair"
}

/* ------------------------------------------------------------
   DEMONSTRAÇÃO
   ------------------------------------------------------------ */

console.log(cabecalho())
console.log("GALERIA DE FUNÇÕES SEM PASSAGEM DE PARÂMETRO")
console.log()

console.log("📋 MENU DO PROGRAMA — menu()")
console.log(menu())
console.log()

console.log("😀 EMOJI DO DIA — emojiDoDia()")
console.log(`O emoji de hoje é ${emojiDoDia()}`)
console.log()

console.log("🔐 SENHA TEMPORÁRIA — senhaAleatoria()")
console.log(`Sua senha de acesso: ${senhaAleatoria()}`)
console.log()

console.log("-".repeat(46))
console.log("🪙 DEZ LANÇAMENTOS DA MOEDA — caraOuCoroa()")
console.log("-".repeat(46))

// Contando quantas caras e coroas saíram nesta execução.
let caras = 0
let coroas = 0
for (let i = 1; i <= 10; i++) {
    let resultado = caraOuCoroa()
    console.log(`Lançamento ${i}: ${resultado}`)
    if (resultado == "🪙 CARA")
        caras = caras + 1
    else
        coroas = coroas + 1
}
console.log(`Placar desta execução: ${caras} cara(s) × ${coroas} coroa(s)`)
console.log()

console.log("-".repeat(46))
console.log("🔁 A MESMA FUNÇÃO, RESPOSTAS DIFERENTES")
console.log("-".repeat(46))
console.log(`emojiDoDia() 1ª vez: ${emojiDoDia()}`)
console.log(`emojiDoDia() 2ª vez: ${emojiDoDia()}`)
console.log(`emojiDoDia() 3ª vez: ${emojiDoDia()}`)
console.log(`senhaAleatoria() 1ª vez: ${senhaAleatoria()}`)
console.log(`senhaAleatoria() 2ª vez: ${senhaAleatoria()}`)
console.log()
console.log("Já menu() e cabecalho() devolvem sempre a MESMA coisa,")
console.log("porque não usam sorteio. Sem parâmetro não quer dizer sem variação.")
console.log()

console.log("=".repeat(46))
console.log("▶️  RODE ESTE ARQUIVO DE NOVO e compare com esta saída!")
console.log("    node 09_galeria_sem_parametro.js")
console.log("=".repeat(46))
