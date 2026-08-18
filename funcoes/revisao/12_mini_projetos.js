/* ============================================================
   REVISÃO DE FUNÇÕES — 12: MINI-PROJETOS
   INPR — IFAL Maceió — Turma 911C — Prof. Augusto
   ------------------------------------------------------------
   Até aqui vimos funções isoladas. Agora elas trabalham JUNTAS:
   uma função chama outra, e o retorno de uma vira a entrada da
   seguinte. É assim que programas de verdade são construídos.

   E1 — Boletim escolar
   E2 — Lanchonete do IFAL
   E3 — Jogo de dados
   E4 — Pegada ecológica da turma
   ============================================================ */

function cabecalho(titulo) {
    return `\n${"=".repeat(52)}\n${titulo}\n${"=".repeat(52)}`
}

/* ============================================================
   E1 — BOLETIM ESCOLAR
   Três funções: uma calcula, uma classifica, uma monta o texto.
   ============================================================ */

// Calcula a média de três notas.
function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}

// Recebe a média já calculada e devolve a situação.
function situacao(m) {
    if (m >= 6) return "✅ APROVADO"
    else if (m >= 4) return "🟡 RECUPERAÇÃO"
    else return "❌ REPROVADO"
}

// Junta tudo: chama media() e situacao() e monta a linha do boletim.
// Repare: boletim não faz conta nenhuma — ela DELEGA para as outras.
function boletim(nome, n1, n2, n3) {
    let m = media(n1, n2, n3)
    return `${nome} — média ${m.toFixed(1)} — ${situacao(m)}`
}

console.log(cabecalho("E1 — 📚 BOLETIM ESCOLAR — turma 911C"))
console.log(boletim("Ana", 8, 7, 9))
console.log(boletim("Bruno", 5, 6, 4))
console.log(boletim("Carla", 3, 4, 2))
console.log(boletim("Diego", 10, 9, 10))
console.log(boletim("Elisa", 6, 6, 6))
console.log()
console.log("Uma função (boletim) chamando duas outras (media e situacao).")
console.log("Cada uma faz uma coisa só — é a receita do código organizado.")

/* ============================================================
   E2 — LANCHONETE DO IFAL
   ============================================================ */

// Devolve o preço do item pedido. Se não existir, devolve 0.
function precoDoLanche(item) {
    if (item == "coxinha") return 5.00
    else if (item == "pastel") return 6.50
    else if (item == "suco") return 4.00
    else if (item == "refrigerante") return 5.50
    else if (item == "bolo") return 3.50
    else return 0
}

// Preço unitário vezes a quantidade.
function totalDoPedido(preco, quantidade) {
    return preco * quantidade
}

// O que sobra do dinheiro entregue.
function trocoDoPedido(valorPago, total) {
    return valorPago - total
}

console.log(cabecalho("E2 — 🍔 LANCHONETE DO IFAL"))
console.log("Cardápio:")
console.log(`  coxinha ......... R$ ${precoDoLanche("coxinha").toFixed(2)}`)
console.log(`  pastel .......... R$ ${precoDoLanche("pastel").toFixed(2)}`)
console.log(`  suco ............ R$ ${precoDoLanche("suco").toFixed(2)}`)
console.log(`  refrigerante .... R$ ${precoDoLanche("refrigerante").toFixed(2)}`)
console.log(`  bolo ............ R$ ${precoDoLanche("bolo").toFixed(2)}`)
console.log()

// Fechando um pedido completo, chamando as três funções em sequência.
let item = "coxinha"
let quantidade = 3
let valorPago = 20.00

let preco = precoDoLanche(item)
let total = totalDoPedido(preco, quantidade)
let meuTroco = trocoDoPedido(valorPago, total)

console.log("--- CUPOM ---")
console.log(`Item: ${item} (R$ ${preco.toFixed(2)} cada)`)
console.log(`Quantidade: ${quantidade}`)
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`Pago: R$ ${valorPago.toFixed(2)}`)
console.log(`Troco: R$ ${meuTroco.toFixed(2)}`)
console.log()

// Tudo encadeado numa linha só (o retorno de uma entra na outra):
console.log("Encadeado em uma linha:")
console.log(`Troco de 2 pastéis pagando R$ 20,00 = R$ ${trocoDoPedido(20, totalDoPedido(precoDoLanche("pastel"), 2)).toFixed(2)}`)
console.log()
console.log('⚠️ Pedindo item inexistente: precoDoLanche("hambúrguer") = ' + precoDoLanche("hambúrguer").toFixed(2))
console.log("   Por isso o else final existe: ele evita undefined.")

/* ============================================================
   E3 — JOGO DE DADOS
   Une função SEM parâmetro (o dado) com função COM parâmetro (o juiz).
   ============================================================ */

// Sem parâmetro: sorteia de 1 a 6.
function sortearDado() {
    return Math.floor(Math.random() * 6) + 1
}

// Com dois parâmetros: recebe os resultados e decide quem venceu.
function vencedor(jogador1, jogador2) {
    if (jogador1 > jogador2) return "🏆 Jogador 1 venceu"
    else if (jogador2 > jogador1) return "🏆 Jogador 2 venceu"
    else return "🤝 Empate"
}

console.log(cabecalho("E3 — 🎲 JOGO DE DADOS (melhor de 5)"))

let vitorias1 = 0
let vitorias2 = 0

for (let rodada = 1; rodada <= 5; rodada++) {
    let d1 = sortearDado()
    let d2 = sortearDado()
    let resultado = vencedor(d1, d2)
    console.log(`Rodada ${rodada}: J1 tirou ${d1} × J2 tirou ${d2}  ->  ${resultado}`)
    if (d1 > d2) vitorias1 = vitorias1 + 1
    else if (d2 > d1) vitorias2 = vitorias2 + 1
}

console.log()
console.log(`Placar final: Jogador 1 = ${vitorias1} × Jogador 2 = ${vitorias2}`)
console.log(`Resultado da partida: ${vencedor(vitorias1, vitorias2)}`)
console.log()
console.log("O dado não recebe nada (sem parâmetro), mas o juiz precisa")
console.log("dos dois resultados (com parâmetro). Cada uma no seu papel.")

/* ============================================================
   E4 — PEGADA ECOLÓGICA DA TURMA
   ============================================================ */

// Um banho de chuveiro elétrico gasta cerca de 9 litros por minuto.
function litrosPorBanho(minutos) {
    return minutos * 9
}

// Quanto se economiza reduzindo o tempo do banho.
// Repare: esta função chama litrosPorBanho DUAS vezes.
function economia(minutosAntes, minutosDepois) {
    return litrosPorBanho(minutosAntes) - litrosPorBanho(minutosDepois)
}

console.log(cabecalho("E4 — 💧 PEGADA ECOLÓGICA DA TURMA"))
console.log(`Banho de 15 minutos: ${litrosPorBanho(15)} litros`)
console.log(`Banho de 10 minutos: ${litrosPorBanho(10)} litros`)
console.log(`Banho de 5 minutos:  ${litrosPorBanho(5)} litros`)
console.log()
console.log(`Reduzindo de 15 para 5 minutos: economia de ${economia(15, 5)} litros por banho`)
console.log(`Em 30 dias, uma pessoa economiza ${economia(15, 5) * 30} litros`)
console.log(`Com 35 estudantes da 911C: ${economia(15, 5) * 30 * 35} litros por mês 🌎`)
console.log()
console.log("Uma função pequena (litrosPorBanho) sustentando um cálculo grande.")
console.log("Se um dia o chuveiro mudar de 9 para 7 litros por minuto,")
console.log("basta alterar UMA linha e todo o programa se atualiza.")
console.log()

console.log("=".repeat(52))
console.log("Fim do arquivo 12. Próximo: node 13_galeria_de_erros.js")
console.log("=".repeat(52))
