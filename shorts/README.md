# Roteiros de Shorts: Construindo Apps Simples em JavaScript

Roteiros de vídeos curtos (até 60 segundos) que mostram, passo a passo, a construção de uma aplicação simples em JavaScript. Cada código está em `codigo/` e roda com Node.js.

> Observação: não consegui assistir ao vídeo de referência (YouTube), então a estrutura abaixo é um formato padrão de shorts educativos. Se você me disser como é o estilo do vídeo (ritmo, tela, narração), eu ajusto os roteiros.

## Estrutura padrão de cada short

| Tempo | Bloco | O que fazer |
|-------|-------|-------------|
| 0-3 s | **Gancho** | Mostrar o resultado final pronto e uma frase de impacto |
| 3-10 s | **Problema** | Dizer o que vamos construir e por quê |
| 10-45 s | **Passos** | 3 a 4 passos, cada um com um trecho curto de código na tela |
| 45-55 s | **Resultado** | Rodar o programa e mostrar a saída |
| 55-60 s | **Chamada** | Pedir para seguir, comentar ou tentar o desafio |

Dicas de produção:

- Formato vertical 9:16, fonte do código grande (mínimo 28 pt)
- Um conceito por passo, no máximo 5 linhas de código por vez
- Legendas na tela, porque muita gente assiste sem som
- Gravar a tela do editor com o terminal visível

---

## Short 1: Calculadora em 60 segundos

**Código:** `codigo/calculadora.js` · **Conceitos:** funções, `switch`, `throw`

| Tempo | Cena | Narração |
|-------|------|----------|
| 0-3 s | Terminal mostrando `15`, `2.5`, `Erro: Divisão por zero` | "Uma calculadora que não quebra nem dividindo por zero." |
| 3-10 s | Arquivo vazio | "Vamos criar uma função que recebe dois números e um operador." |
| 10-20 s | Digitar `function calcular(a, operador, b) {` | "Passo 1: a função com três parâmetros." |
| 20-32 s | Digitar o `switch` com `+`, `-`, `*` | "Passo 2: o switch escolhe a operação pelo operador." |
| 32-42 s | Digitar o caso `/` com o `if (b === 0)` | "Passo 3: proteger a divisão. Se for zero, lançamos um erro." |
| 42-55 s | Rodar `node calculadora.js` | "Passo 4: chamar a função e ver o resultado." |
| 55-60 s | Tela com o desafio | "Desafio: adicione o operador de potência `**`. Comenta aí!" |

## Short 2: Lista de tarefas

**Código:** `codigo/tarefas.js` · **Conceitos:** arrays, objetos, `forEach`

| Tempo | Cena | Narração |
|-------|------|----------|
| 0-3 s | Terminal com a lista e um item marcado `[x]` | "Sua própria lista de tarefas, em 20 linhas." |
| 3-10 s | Arquivo vazio | "Cada tarefa é um objeto com texto e um estado: feita ou não." |
| 10-18 s | `const tarefas = []` e função `adicionar` | "Passo 1: um array guarda tudo, e `push` adiciona." |
| 18-30 s | Função `concluir(indice)` | "Passo 2: marcar como feita e avisar se a tarefa não existe." |
| 30-42 s | Função `listar` com `forEach` e o operador ternário | "Passo 3: percorrer a lista e mostrar `[x]` ou `[ ]`." |
| 42-55 s | Chamar as funções e rodar | "Passo 4: adicionar duas tarefas, concluir uma e listar." |
| 55-60 s | Tela com o desafio | "Desafio: crie a função `remover`. Quem acerta?" |

## Short 3: Quiz de programação

**Código:** `codigo/quiz.js` · **Conceitos:** array de objetos, `for`, contador

| Tempo | Cena | Narração |
|-------|------|----------|
| 0-3 s | Terminal: `Você acertou 2 de 2` | "Um quiz que corrige sozinho." |
| 3-10 s | Arquivo vazio | "As perguntas ficam num array. A resposta certa é o índice da opção." |
| 10-22 s | Array `perguntas` com texto, opções e `certa` | "Passo 1: cada pergunta é um objeto." |
| 22-38 s | Função `corrigir` com `for` e `acertos++` | "Passo 2: percorrer as perguntas e contar os acertos." |
| 38-55 s | Chamar `corrigir` e mostrar o placar | "Passo 3: passar as respostas e mostrar o resultado." |
| 55-60 s | Tela com o desafio | "Desafio: mostre também a porcentagem de acerto." |

---

## Como executar os exemplos

```bash
node shorts/codigo/calculadora.js
node shorts/codigo/tarefas.js
node shorts/codigo/quiz.js
```

## Outros shorts

- [`black-friday-api-java/`](black-friday-api-java/README.md) — API REST com Java na Black Friday (DNS, TCP, latência, cache e filas), com o vídeo pronto em HTML

## Próximos roteiros sugeridos

1. Conversor de temperatura
2. Jogo de adivinhação (usa `while`, como na aula de repetição)
3. Gerador de senha segura (liga com a aula de DevSecOps)
4. Cadastro de alunos com cálculo de média
