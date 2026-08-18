# Revisão de Funções — INPR

**IFAL — Campus Maceió · Ensino Médio Integrado · Turma 911C · Prof. Augusto**

Material de revisão sobre **funções em JavaScript**, para rodar no **Node.js**.
Todos os arquivos executam sozinhos, sem precisar digitar nada.

---

## Objetivos da revisão

Ao final desta revisão você deve ser capaz de:

- explicar o que é uma função usando a metáfora da **máquina de suco** (entrada → processamento → saída);
- escrever funções **sem passagem de parâmetro** (parênteses vazios);
- escrever funções **com passagem de parâmetro** (a função recebe valores de fora);
- diferenciar **parâmetro** (nome na definição) de **argumento** (valor na chamada) e perceber que a **ordem importa**;
- decidir entre **`return`** e **`console.log`**, sabendo que função sem `return` devolve `undefined`;
- entender **escopo**: variável local, variável global e o parâmetro como variável local;
- **encadear** funções: `analisarIMC(IMC(peso, altura))`;
- fazer **teste de mesa** no caderno, rastreando a execução linha a linha.

---

## Como rodar

Abra o terminal na pasta desta revisão e chame o Node com o nome do arquivo:

```bash
cd funcoes/revisao
node 01_sem_parametro.js
```

Troque o nome do arquivo para rodar os outros:

```bash
node 02_com_parametro.js
node 03_parametro_vs_argumento.js
node 04_return_vs_console.js
node 05_escopo.js
node 06_exercicios_resolvidos.js
node 07_exercicios_propostos.js
node 08_teste_de_mesa.js
node 09_galeria_sem_parametro.js
node 10_galeria_com_parametro.js
node 11_quatro_versoes.js
node 12_mini_projetos.js
node 13_galeria_de_erros.js
```

> Nenhum arquivo desta pasta pede dados ao usuário. As poucas partes que usam
> `prompt-sync` estão **comentadas** — descomente só se quiser experimentar.

---

## Mapa dos arquivos

### Parte 1 — Conceitos (a base da aula)

| Arquivo | Assunto |
|---|---|
| `01_sem_parametro.js` | Funções sem passagem de parâmetro: `ifal()`, `linha()`, `sortearDado()`, `boasVindas()`. Mostra o erro de chamar sem parênteses. |
| `02_com_parametro.js` | Funções com parâmetro: `saudar`, `somar`, `areaCirculo`, `media`, `celsiusParaFahrenheit`, `precoComDesconto`, `IMC`. |
| `03_parametro_vs_argumento.js` | Parâmetro × argumento e a **ordem** dos argumentos, usando `estacao(dia, mes)` do professor. |
| `04_return_vs_console.js` | `return` × `console.log`, `undefined`, `NaN` e o encadeamento `analisarIMC(IMC(peso, altura))`. |
| `05_escopo.js` | Variável local × global, parâmetro como variável local, `ReferenceError` explicado. |

### Parte 2 — Exercícios

| Arquivo | Assunto |
|---|---|
| `06_exercicios_resolvidos.js` | R1 a R5 com solução comentada passo a passo. |
| `07_exercicios_propostos.js` | P1 a P8 com esqueleto `// TODO` para você completar. |
| `08_teste_de_mesa.js` | T1 a T10 — o gabarito executável do teste de mesa. |

### Parte 3 — Exemplos extras

| Arquivo | Assunto |
|---|---|
| `09_galeria_sem_parametro.js` | `caraOuCoroa`, `emojiDoDia`, `cabecalho`, `senhaAleatoria`, `menu`. Rode duas vezes e compare! |
| `10_galeria_com_parametro.js` | Bateria, conceito, tempo de tela, bissexto, frequência, troco, pontos, juros e mais. |
| `11_quatro_versoes.js` | ⭐ A mesma `areaDoQuadrado` em 4 versões, com tabela comparativa. **O mais importante.** |
| `12_mini_projetos.js` | Boletim escolar, lanchonete do IFAL, jogo de dados e pegada ecológica. |
| `13_galeria_de_erros.js` | Os 8 erros clássicos em formato errado × certo, executando de verdade. |

---

## Qual arquivo estudar para qual conceito

| Conceito | Estude em |
|---|---|
| O que é uma função | `01`, `09` |
| Função sem passagem de parâmetro | `01`, `09` |
| Função com passagem de parâmetro | `02`, `10` |
| Parâmetro × argumento | `03`, `13` (erro 3) |
| Ordem dos argumentos | `03`, `10`, `08` (T4 e T7) |
| `return` × `console.log` | `04`, `11`, `06` (R5) |
| `undefined` e `NaN` | `04`, `13` (erros 1 e 4) |
| Encadeamento de funções | `04`, `11`, `12` |
| Escopo (local × global) | `05`, `08` (T2), `13` (erros 6 e 7) |
| Funções trabalhando juntas | `12` |
| Teste de mesa | `08` |
| Erros clássicos | `13` |

---

## Resumo: sem parâmetro × com parâmetro

| | **Sem passagem de parâmetro** | **Com passagem de parâmetro** |
|---|---|---|
| Como fica a definição | `function ifal() { ... }` | `function saudar(nome) { ... }` |
| Parênteses na definição | vazios | com um ou mais nomes |
| Recebe valores de fora? | não | sim |
| Como se chama | `ifal()` | `saudar("Ana")` |
| O resultado muda? | em geral é sempre o mesmo (a menos que use sorteio, como `sortearDado()`) | muda conforme os argumentos |
| Quando usar | quando a função já sabe tudo o que precisa: cabeçalho, menu, linha decorativa, sorteio | quando o cálculo depende de dados: notas, preços, medidas |
| Exemplos daqui | `ifal()`, `linha()`, `menu()`, `caraOuCoroa()` | `somar(a, b)`, `IMC(peso, altura)`, `estacao(dia, mes)` |

Na metáfora da máquina de suco: **sem parâmetro** é a máquina que já vem com a
fruta dentro; **com parâmetro** é a máquina em que você coloca a fruta.

---

## Erros clássicos (o que mais derruba nota na prova)

1. **Esquecer o `return`** e tentar usar o resultado → vem `undefined`.
2. **Chamar a função sem os parênteses** (`ifal` em vez de `ifal()`) → aparece `[Function: ifal]`.
3. **Trocar a ordem dos argumentos** (`estacao(12, 25)`) → resposta errada **sem** mensagem de erro.
4. **Faltar argumento** (`somar(5)`) → `NaN`, porque `b` é `undefined`.
5. **Sobrar argumento** (`somar(1, 2, 3)`) → o `3` é ignorado silenciosamente.
6. **Usar variável local fora da função** → `ReferenceError: x is not defined`.
7. **Nome do parâmetro diferente do nome usado no corpo** → `ReferenceError`.
8. **Texto onde se esperava número** (`somar("2", 3)`) → `"23"`, porque o `+` concatenou.
   Cuidado: `prompt()` sempre devolve texto — use `Number(...)` ou `parseFloat(...)`.
9. **Definir a função depois de usar** — com `function` isso **funciona** (hoisting),
   mas escreva as funções antes das chamadas para o código ficar legível.

Todos eles estão demonstrados, rodando, em `13_galeria_de_erros.js`.

---

## Para o caderno

O teste de mesa é feito **à mão**, com papel e caneta — é ele que treina você a
"pensar como o computador" e é o formato que mais cai na prova.

1. Copie no caderno o código de cada caso **T1 a T10** (estão em `08_teste_de_mesa.js`,
   cada um dentro do seu comentário de bloco).
2. Monte a tabela indicada no comentário de cada caso, por exemplo:

   | chamada | x | retorno |
   |---|---|---|
   | `f(4)` | 4 | 7 |

   Sugestões de colunas por caso:
   - **T1** chamada · `x` · retorno
   - **T2** `n` (dentro) · `valor` (fora) · retorno
   - **T3** `a` · `b` · o que é impresso · o que `r` recebe
   - **T4** `dia` · `mes` · qual `if` foi verdadeiro · retorno
   - **T5** `i` · `total` (uma linha por volta do `for`)
   - **T6** `a` · `b` · retorno
   - **T7** `vitorias` · `empates` · retorno
   - **T8** `i` · `saida` (uma linha por volta do `for`)
   - **T9** `p` · qual `if` foi verdadeiro · retorno
   - **T10** `a` · `b` · tipo dos valores · retorno
3. Escreva a **saída final** que você espera ver no terminal.
4. **Só então** rode `node 08_teste_de_mesa.js` e confira.
5. Errou algum? Refaça o teste de mesa daquele caso até entender **por quê** —
   e volte ao arquivo indicado na tabela "qual arquivo estudar para qual conceito".

Bom estudo! 🚀
