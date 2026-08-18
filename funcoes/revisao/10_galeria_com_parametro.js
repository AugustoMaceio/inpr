/* ============================================================
   REVISÃO DE FUNÇÕES — 10: GALERIA "COM PASSAGEM DE PARÂMETRO"
   INPR — IFAL Maceió — Turma 911C — Prof. Augusto
   ------------------------------------------------------------
   PARTE 1 — funções com UM parâmetro
   PARTE 2 — funções com DOIS OU MAIS parâmetros

   Contextos do dia a dia: celular, escola, esporte, dinheiro,
   lanche e meio ambiente.
   ============================================================ */

function linha() {
    return "=".repeat(54)
}

function subtitulo(texto) {
    return `\n${texto}\n${"-".repeat(texto.length + 2)}`
}

/* ============================================================
   PARTE 1 — UM PARÂMETRO
   ============================================================ */

// 1 - Classifica a bateria do celular pela porcentagem recebida.
function nivelDaBateria(porcentagem) {
    if (porcentagem >= 80) return "🔋 CHEIA"
    else if (porcentagem >= 40) return "🔋 BOA"
    else if (porcentagem >= 20) return "🪫 BAIXA"
    else return "🪫 CRÍTICA — carregue agora!"
}

// 2 - Transforma a nota numérica em conceito por letra.
function notaParaConceito(nota) {
    if (nota >= 9) return "A — excelente"
    else if (nota >= 7) return "B — bom"
    else if (nota >= 6) return "C — suficiente"
    else return "D — precisa melhorar"
}

// 3 - Converte minutos em horas e minutos.
//     Math.floor(minutos / 60) -> quantas horas inteiras cabem
//     minutos % 60 -> o resto que sobrou (o operador % é o resto da divisão)
function tempoDeTela(minutos) {
    let horas = Math.floor(minutos / 60)
    let resto = minutos % 60
    return `${horas}h${resto}min de tela hoje`
}

// 4 - Ano bissexto: divisível por 4 e não por 100, ou divisível por 400.
//     Devolve true ou false (um valor booleano).
function ehBissexto(ano) {
    return (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0
}

// 5 - Par ou ímpar: se o resto da divisão por 2 for zero, é par.
function parOuImpar(n) {
    return n % 2 == 0 ? "PAR" : "ÍMPAR"
}

// 6 - Primeira letra do nome, em maiúscula, seguida de ponto.
//     nome[0] pega o caractere da posição 0 (o primeiro).
function iniciais(nome) {
    return nome[0].toUpperCase() + "."
}

// 7 - Verifica se a legenda cabe no limite de 280 caracteres.
//     texto.length é a quantidade de caracteres do texto.
function legendaCabe(texto) {
    return texto.length <= 280 ? `✅ cabe (${texto.length}/280)` : `❌ passou (${texto.length}/280)`
}

// 8 - Desenha uma barra de progresso com blocos cheios e vazios.
function barraDeProgresso(percentual) {
    let cheios = Math.round(percentual / 10)
    return "█".repeat(cheios) + "░".repeat(10 - cheios) + ` ${percentual}%`
}

console.log(linha())
console.log("PARTE 1 — FUNÇÕES COM UM PARÂMETRO")
console.log(linha())

console.log(subtitulo("🔋 nivelDaBateria(porcentagem)"))
console.log(`100% -> ${nivelDaBateria(100)}`)
console.log(`80%  -> ${nivelDaBateria(80)}`)
console.log(`55%  -> ${nivelDaBateria(55)}`)
console.log(`25%  -> ${nivelDaBateria(25)}`)
console.log(`7%   -> ${nivelDaBateria(7)}`)

console.log(subtitulo("📚 notaParaConceito(nota)"))
console.log(`Nota 10  -> ${notaParaConceito(10)}`)
console.log(`Nota 8.5 -> ${notaParaConceito(8.5)}`)
console.log(`Nota 6   -> ${notaParaConceito(6)}`)
console.log(`Nota 4   -> ${notaParaConceito(4)}`)

console.log(subtitulo("📱 tempoDeTela(minutos)"))
console.log(`45 minutos  -> ${tempoDeTela(45)}`)
console.log(`125 minutos -> ${tempoDeTela(125)}`)
console.log(`300 minutos -> ${tempoDeTela(300)}`)

console.log(subtitulo("📅 ehBissexto(ano)"))
console.log(`2024 -> ${ehBissexto(2024)}`)
console.log(`2025 -> ${ehBissexto(2025)}`)
console.log(`1900 -> ${ehBissexto(1900)}   (divisível por 100, não é bissexto)`)
console.log(`2000 -> ${ehBissexto(2000)}   (divisível por 400, é bissexto)`)

console.log(subtitulo("🔢 parOuImpar(n)"))
console.log(`8  -> ${parOuImpar(8)}`)
console.log(`7  -> ${parOuImpar(7)}`)
console.log(`0  -> ${parOuImpar(0)}`)
console.log(`-3 -> ${parOuImpar(-3)}`)

console.log(subtitulo("🔤 iniciais(nome)"))
console.log(`"ana" -> ${iniciais("ana")}`)
console.log(`"Bruno" -> ${iniciais("Bruno")}`)
console.log(`"carla" -> ${iniciais("carla")}`)

console.log(subtitulo("💬 legendaCabe(texto)"))
console.log(`"Bom dia, turma 911C!" -> ${legendaCabe("Bom dia, turma 911C!")}`)
console.log(`Texto com 300 letras -> ${legendaCabe("a".repeat(300))}`)

console.log(subtitulo("📊 barraDeProgresso(percentual)"))
console.log(`0%   ${barraDeProgresso(0)}`)
console.log(`30%  ${barraDeProgresso(30)}`)
console.log(`70%  ${barraDeProgresso(70)}`)
console.log(`100% ${barraDeProgresso(100)}`)
console.log()

/* ============================================================
   PARTE 2 — DOIS OU MAIS PARÂMETROS
   ============================================================ */

// 1 - Frequência em porcentagem: presenças sobre o total de aulas.
function frequencia(presencas, totalDeAulas) {
    return presencas / totalDeAulas * 100
}

// 2 - Recebe a frequência JÁ CALCULADA e diz se aprova ou não.
//     Perfeita para encadear com a função acima.
function aprovadoPorFrequencia(percentual) {
    return percentual >= 75 ? "✅ APROVADO na frequência" : "❌ REPROVADO por falta"
}

// 3 - Divide a conta do lanche entre as pessoas.
function dividirConta(total, pessoas) {
    return total / pessoas
}

// 4 - Troco: o que sobra do que foi pago.
function troco(valorPago, valorDaCompra) {
    return valorPago - valorDaCompra
}

// 5 - Pontuação no campeonato: vitória vale 3, empate vale 1.
function pontosDoTime(vitorias, empates) {
    return vitorias * 3 + empates
}

// 6 - Velocidade média = distância dividida pelo tempo.
function velocidadeMedia(distancia, tempo) {
    return distancia / tempo
}

// 7 - Consumo de água acumulado em vários dias.
function consumoDeAgua(litrosPorDia, dias) {
    return litrosPorDia * dias
}

// 8 - Juros simples: montante = capital * (1 + taxa/100 * tempo)
//     TRÊS parâmetros. A ordem importa muito aqui!
function montante(capital, taxa, tempo) {
    return capital * (1 + taxa / 100 * tempo)
}

// 9 - Preço por grama, útil para comparar embalagens no mercado.
function precoPorGrama(preco, gramas) {
    return preco / gramas
}

console.log(linha())
console.log("PARTE 2 — FUNÇÕES COM DOIS OU MAIS PARÂMETROS")
console.log(linha())

console.log(subtitulo("🏫 frequencia(presencas, totalDeAulas) + aprovadoPorFrequencia"))
console.log(`36 de 40 aulas -> ${frequencia(36, 40).toFixed(1)}% -> ${aprovadoPorFrequencia(frequencia(36, 40))}`)
console.log(`28 de 40 aulas -> ${frequencia(28, 40).toFixed(1)}% -> ${aprovadoPorFrequencia(frequencia(28, 40))}`)
console.log(`30 de 40 aulas -> ${frequencia(30, 40).toFixed(1)}% -> ${aprovadoPorFrequencia(frequencia(30, 40))}   (bem no limite!)`)

console.log(subtitulo("🍔 dividirConta(total, pessoas)"))
console.log(`R$ 120,00 para 4 pessoas -> R$ ${dividirConta(120, 4).toFixed(2)} cada`)
console.log(`R$ 87,50 para 5 pessoas  -> R$ ${dividirConta(87.5, 5).toFixed(2)} cada`)
console.log(`⚠️ dividirConta(4, 120) -> R$ ${dividirConta(4, 120).toFixed(2)} — ordem trocada, resultado sem sentido!`)

console.log(subtitulo("💵 troco(valorPago, valorDaCompra)"))
console.log(`Pagou R$ 50,00 numa compra de R$ 37,80 -> troco de R$ ${troco(50, 37.8).toFixed(2)}`)
console.log(`Pagou R$ 20,00 numa compra de R$ 20,00 -> troco de R$ ${troco(20, 20).toFixed(2)}`)

console.log(subtitulo("⚽ pontosDoTime(vitorias, empates)"))
console.log(`10 vitórias e 4 empates -> ${pontosDoTime(10, 4)} pontos`)
console.log(`4 vitórias e 10 empates -> ${pontosDoTime(4, 10)} pontos   (ordem muda tudo!)`)

console.log(subtitulo("🚴 velocidadeMedia(distancia, tempo)"))
console.log(`120 km em 2 h -> ${velocidadeMedia(120, 2)} km/h`)
console.log(`15 km em 0.5 h -> ${velocidadeMedia(15, 0.5)} km/h`)

console.log(subtitulo("💧 consumoDeAgua(litrosPorDia, dias)"))
console.log(`110 L/dia em 30 dias -> ${consumoDeAgua(110, 30)} litros`)
console.log(`110 L/dia em 365 dias -> ${consumoDeAgua(110, 365)} litros em um ano`)

console.log(subtitulo("🏦 montante(capital, taxa, tempo) — três parâmetros"))
console.log(`R$ 1000,00 a 2% por 6 meses -> R$ ${montante(1000, 2, 6).toFixed(2)}`)
console.log(`R$ 500,00 a 1.5% por 12 meses -> R$ ${montante(500, 1.5, 12).toFixed(2)}`)

console.log(subtitulo("🛒 precoPorGrama(preco, gramas)"))
console.log(`Pacote A: R$ 8,00 / 400 g -> R$ ${precoPorGrama(8, 400).toFixed(4)} por grama`)
console.log(`Pacote B: R$ 13,50 / 750 g -> R$ ${precoPorGrama(13.5, 750).toFixed(4)} por grama`)
console.log("O pacote B é mais barato por grama — funções ajudam a decidir!")
console.log()

console.log(linha())
console.log("Fim do arquivo 10. Próximo: node 11_quatro_versoes.js")
console.log(linha())
