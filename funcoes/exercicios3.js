const prompt = require("prompt-sync")()

//1 - Acesso Simples - Você está construindo um sistema de gerenciamento de alunos. 
// O array notas contém as notas dos alunos. 
// Acesse e imprima a nota do terceiro aluno.
notas = [7, 6.5, 8, 5.5, 9, 9.5, 10, 4.5, 8.5, 6] 
console.log(notas[2])  // 8

// Acesso a Elemento Específico - Em um sistema de armazenamento de produtos, o array produtos contém nome de diferentes produtos. 
// Acesse e imprima o nome do último produto.
produtos = ["caneta","caderno","lápis","borracha","livro"] // length=4
ultimaPos = produtos.length - 1
console.log(ultimaPos, produtos[ultimaPos]) // 3 = borracha    

//Atribuição de Desconto - : Em uma loja online, o array precos contém os preços dos produtos. 
// Atribua um desconto de 10% a todos os preços
precos = [100, 200, 50, 67]
console.log(precos)
desconto = 10/100 // 10%
for(i=0; i<precos.length; i++){
    precos[i] = precos[i] - precos[i]*desconto
}
console.log(`Com desconto ${desconto}:`, precos)

//Atribuição com Base em Condição -  
// Em um jogo, você tem um array pontuacoes e 
// deseja aumentar a pontuação do jogador se ela estiver abaixo de 100.
//  Atribua 10 pontos a todas as pontuações abaixo de 100.
pontuacoes = [93, 54, 100, 103, 205, 67]
console.log(pontuacoes)
for (i=0; i<pontuacoes.length; i++){
    if (pontuacoes[i]<100)
        pontuacoes[i] += 10
}
console.log("Com +10 para menores de 100:",pontuacoes)

//Percorrendo array com for - Em um aplicativo de listagem de tarefas, 
// o array tarefas contém as descrições das tarefas. 
// Utilize o loop for para imprimir cada tarefa no console.
tarefas = ["Estudar INPR", "Treino físico", "Fazer atividade de PWEB1","Estuda Matemática", "Ler livro de Filosofia"]


//Percorrendo e Somando -  Em um sistema financeiro, o array gastos contém os gastos mensais.
//  Percorra o array e calcule o total de gastos.
gastos = []
total = 0
