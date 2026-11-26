const tarefas = []

function adicionar(texto) {
  tarefas.push({ texto, feita: false })
}

function concluir(indice) {
  if (!tarefas[indice]) throw new Error('Tarefa não existe')
  tarefas[indice].feita = true
}

function listar() {
  tarefas.forEach((t, i) => {
    console.log(`${i + 1}. [${t.feita ? 'x' : ' '}] ${t.texto}`)
  })
}

adicionar('Estudar funções')
adicionar('Fazer exercícios')
concluir(0)
listar()
