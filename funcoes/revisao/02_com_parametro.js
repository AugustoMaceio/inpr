/* ============================================================
   REVISÃO DE FUNÇÕES — 02: FUNÇÕES COM PASSAGEM DE PARÂMETRO
   INPR — IFAL Maceió — Turma 911C — Prof. Augusto
   ------------------------------------------------------------
   Voltando à MÁQUINA DE SUCO: agora a máquina vem VAZIA.
   Quem coloca a fruta é quem chama a função.
   A fruta entra pelos parênteses -> essa é a PASSAGEM DE PARÂMETRO.

        entrada (parâmetro) -> processamento -> saída (return)
   ============================================================ */

function linha() {
    return "-".repeat(46)
}

// 1 - Um parâmetro de texto: a função monta a saudação com o nome recebido.
function saudar(nome) {
    return `Bom dia, ${nome}!`
}

// 2 - Dois parâmetros numéricos: a função só sabe somar o que recebe.
function somar(a, b) {
    return a + b
}

// 3 - Um parâmetro: área do círculo = π * raio²
//     Math.PI é o valor de π já pronto no JavaScript.
function areaCirculo(raio) {
    return Math.PI * raio ** 2
}

// 4 - Quatro parâmetros: média das quatro notas recebidas.
function media(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4
}

// 5 - Conversão de temperatura: F = C * 9 / 5 + 32
function celsiusParaFahrenheit(c) {
    return c * 9 / 5 + 32
}

// 6 - Dois parâmetros: preço original e o desconto em PORCENTAGEM.
//     preco * desconto / 100 é quanto vale o desconto em reais.
function precoComDesconto(preco, desconto) {
    return preco - preco * desconto / 100
}

// 7 - IMC = peso / altura², com peso em quilos e altura em metros.
function IMC(peso, altura) {
    return peso / altura ** 2
}

/* ------------------------------------------------------------
   CHAMANDO COM VALORES DIFERENTES
   A mesma função serve para infinitos valores. Essa é a mágica.
   ------------------------------------------------------------ */

console.log(linha())
console.log("👋 saudar(nome)")
console.log(linha())
console.log(saudar("turma 911C"))
console.log(saudar("Augusto"))
console.log(saudar("Maria Clara"))
console.log()

console.log(linha())
console.log("➕ somar(a, b)")
console.log(linha())
console.log(`4 + 6 = ${somar(4, 6)}`)
console.log(`-4 + 6 = ${somar(-4, 6)}`)
console.log(`2.5 + 0.5 = ${somar(2.5, 0.5)}`)
console.log()

console.log(linha())
console.log("⭕ areaCirculo(raio)")
console.log(linha())
// toFixed(2) deixa o número com 2 casas decimais (vira texto).
console.log(`Raio 1 m  -> área = ${areaCirculo(1).toFixed(2)} m²`)
console.log(`Raio 6 m  -> área = ${areaCirculo(6).toFixed(2)} m²`)
console.log(`Raio 10 m -> área = ${areaCirculo(10).toFixed(2)} m²`)
console.log()

console.log(linha())
console.log("📚 media(n1, n2, n3, n4)")
console.log(linha())
console.log(`Notas 6, 7, 8, 9   -> média = ${media(6, 7, 8, 9)}`)
console.log(`Notas 10, 10, 9, 8 -> média = ${media(10, 10, 9, 8).toFixed(2)}`)
console.log(`Notas 4, 5, 3, 6   -> média = ${media(4, 5, 3, 6)}`)
console.log()

console.log(linha())
console.log("🌡️ celsiusParaFahrenheit(c)")
console.log(linha())
console.log(`0 °C   = ${celsiusParaFahrenheit(0)} °F`)
console.log(`32 °C  = ${celsiusParaFahrenheit(32)} °F   (dia quente em Maceió)`)
console.log(`100 °C = ${celsiusParaFahrenheit(100)} °F  (água fervendo)`)
console.log()

console.log(linha())
console.log("🏷️ precoComDesconto(preco, desconto)")
console.log(linha())
console.log(`R$ 100,00 com 10% -> R$ ${precoComDesconto(100, 10).toFixed(2)}`)
console.log(`R$ 250,00 com 25% -> R$ ${precoComDesconto(250, 25).toFixed(2)}`)
console.log(`R$ 79,90 com 5%   -> R$ ${precoComDesconto(79.9, 5).toFixed(2)}`)
console.log()

console.log(linha())
console.log("⚖️ IMC(peso, altura)")
console.log(linha())
console.log(`60 kg e 1.70 m -> IMC = ${IMC(60, 1.7).toFixed(2)}`)
console.log(`80 kg e 1.75 m -> IMC = ${IMC(80, 1.75).toFixed(2)}`)
console.log(`52 kg e 1.60 m -> IMC = ${IMC(52, 1.6).toFixed(2)}`)
console.log()

console.log(linha())
console.log("💡 O resultado do return pode ser GUARDADO em uma variável")
console.log(linha())

// Como as funções acima usam return, dá para guardar o resultado
// e usar depois, quantas vezes quiser.
let areaDaPraca = areaCirculo(15)
let precoFinal = precoComDesconto(120, 30)
console.log(`Área da praça circular: ${areaDaPraca.toFixed(2)} m²`)
console.log(`Metade dessa área: ${(areaDaPraca / 2).toFixed(2)} m²`)
console.log(`Preço final da camisa: R$ ${precoFinal.toFixed(2)}`)
console.log(`Comprando 3 camisas: R$ ${(precoFinal * 3).toFixed(2)}`)
console.log()

console.log(linha())
console.log("Fim do arquivo 02. Próximo: node 03_parametro_vs_argumento.js")
console.log(linha())
