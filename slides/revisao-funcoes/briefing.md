# Briefing: revisao-funcoes

**Fonte:** `funcoes/` (projeto INPR) + especificação de conteúdo `spec-revisao-funcoes.md` e adendo `spec-exemplos-extras.md`
**Público:** ensino médio integrado, 1º ano, turma 911C, IFAL Maceió
**Professor:** Augusto
**Tema visual:** `light-minimal` (padrão do Mira)
**Deck:** `slides/revisao-funcoes/index.html`
**Data do plano:** 2026-08-17

---

## Essência em uma frase

Uma função é uma máquina que você escreve uma vez e chama quantas vezes quiser: entra um argumento, acontece o processamento, sai um valor pelo `return`.

## Decisão técnica: CDN x offline

O esqueleto `templates/decks/aula-capitulo/index.html` do Mira depende de **quatro CDNs** (Tailwind, AOS, Lucide, D3 e Google Fonts). Com duplo clique em um computador sem internet, o deck abriria sem estilo, sem ícones e **sem nenhuma animação**. Como a prioridade era abrir com duplo clique e animar de verdade, o caminho escolhido foi:

| Dependência original | O que foi feito |
|---|---|
| `d3js.org/d3.v7.min.js` | **D3 v7.9.0 embutido inline** no `<head>` do próprio `index.html` (não havia cópia em `mira-animator/node_modules`, então foi baixado e embutido). Toda a API D3 usada pelos blueprints do Mira continua disponível. |
| `cdn.tailwindcss.com` | Substituído por uma **camada utilitária local** escrita à mão dentro do `<style>`, com exatamente as classes usadas (`min-h-screen`, `glass-card`, `text-4xl`, `md:grid-cols-4`, etc.). A marcação HTML continua idêntica à do padrão Mira. |
| `unpkg.com/aos` | Substituído por um **reveal próprio** de ~8 linhas com `IntersectionObserver`, honrando os mesmos atributos `data-aos="fade-up" / "zoom-in"`. |
| `unpkg.com/lucide` | Substituído por um **mapa local de ícones** em SVG (mesmo traço outline 24x24 do Lucide), injetado nas tags `<i data-lucide="...">`. |
| Google Fonts (Inter) | Trocado por pilha de fontes do sistema com `Inter` primeiro: quem tiver Inter instalada vê Inter, os demais veem `Segoe UI` / `system-ui`. |

**Resultado:** arquivo único de ~384 KB, `0` requisições de rede, abre com duplo clique. Tema, `base.css` e `light-minimal.css` foram injetados verbatim entre os marcadores `/* @MIRA:THEME:START */` e `/* @MIRA:THEME:END */`, e **nenhuma cor é escrita à mão** no JS: as animações leem tudo de CSS variables (`--mira-primary`, `--mira-svg-line`, `--mira-alert`, `--mira-ok`, etc., estas últimas em um bloco declarado de "extensão do tema").

## Plano de slides

Total: **10 slides**. Todos os palcos carregam o marcador `<!-- @MIRA:SIZE 3/10 -->` e seguem a regra zero: entrada coreografada e, depois, **loop interno perpétuo**.

| # | Título | Tipo de card | Mensagem central | Animação e loop interno |
|---|---|---|---|---|
| 1 | Funções em JavaScript · Revisão | `card_capa` | Abertura: INPR · IFAL Maceió · turma 911C · Prof. Augusto | Partículas e tokens de código (`function`, `return`, `( )`, `undefined`) orbitando o título. **Loop:** as órbitas nunca param. |
| 2 | A função é uma máquina | conceito + fluxo (`card_fluxo`) | Entrada → processamento → saída, com a metáfora oficial da máquina de suco | A máquina entra com `easeBackOut`, engrenagens giram sempre e os tubos tracejados escoam. **Loop:** `"Ana"` entra, a máquina pulsa, `"Bom dia, Ana!"` sai; troca de nome e recomeça. |
| 3 | Anatomia de uma função | código montado (`card_code` animado) | `function nome(parâmetros) { return }`: cada peça tem nome | As 6 peças entram uma a uma com snap e ganham rótulo com linha de chamada. **Loop:** um holofote percorre peça por peça, para sempre, com cursor piscando. |
| 4 | Sem passagem de parâmetro | grid de 3 (`card_grid` animado) | Parênteses vazios: a função já sabe o que fazer sozinha | Três botões (`ifal()`, `sortearDado()`, `caraOuCoroa()`) entram em cascata. **Loop:** um botão é acionado por vez e a bolha de resultado estoura acima; o dado e a moeda **sorteiam de novo a cada ciclo**, provando que a função executa outra vez. |
| 5 | Com passagem de parâmetro | fluxo com slots | O valor viaja de fora para dentro e muda a saída | Chips de argumento viajam pelo tubo e preenchem os slots dos parâmetros, o orbe de retorno sai pela direita. **Loop:** cicla `saudar("Ana")`, `somar(3, 4)`, `areaCirculo(5)`, `nivelDaBateria(15)`; embaixo, `barraDeProgresso(percentual)` enche de 0% a 100% sem parar, com a saída em blocos atualizando ao vivo. |
| 6 | Parâmetro ou argumento? | **comparação** (`card_comparacao`) | Parâmetro é o nome na definição; argumento é o valor na chamada, e a ordem importa | Banda superior com os dois conceitos lado a lado. **Loop 1:** holofote alternando entre PARÂMETRO e ARGUMENTO. **Loop 2:** `25` e `12` trocam de lugar em arco sobre os rótulos fixos `dia` e `mes`: `estacao(25, 12)` → `☀️ VERÃO`, `estacao(12, 25)` → `undefined`, e volta. |
| 7 | `return` devolve, `console.log` só mostra | **escada** (`card_escada`) | Sem `return`, quem chamou recebe `undefined` | Escada com `areaDoQuadrado` v1 a v4 (série do adendo). **Loop:** um orbe sobe os quatro degraus; em cada um acende o veredito (v3 em vermelho: "só mostra: devolve undefined"), no topo aparece `console.log(classificarArea(areaDoQuadrado4(12)))` → `"GRANDE"`, e o orbe volta ao primeiro degrau. |
| 8 | O que nasce dentro, fica dentro | conceito espacial (caixas) | Variável local só existe enquanto a função roda | Caixa global com `let valor = 5` e, dentro, a caixa de `function dobrar(n)`. **Loop:** a caixa local abre, `n = 5` e `let total = 10` nascem, a função termina e elas evaporam; de fora, `console.log(total)` dispara um raio que bate na parede e vira `ReferenceError`. A global pulsa o tempo todo. |
| 9 | Teste de mesa | **tabela** (`card_tabela` animada) | A ferramenta do caderno: rastrear linha a linha, à mão | Código `f(x) { return x + 3 }` à esquerda, tabela `chamada / x / retorno` à direita. **Loop:** as linhas se preenchem célula a célula (`f(4)|4|7`, `f(1)|1|4`, `f(4)|4|7`), a linha de código correspondente acende, aparece `saída: 7 e 7`, apaga e recomeça. Cursor pulsando sempre. |
| 10 | Agora é com vocês | **encerramento / CTA** (`card_encerramento`) | Mão na massa: rodar no Node, abrir a página interativa e fazer o teste de mesa no caderno | Gradiente respirando + partículas subindo. **Loop:** o terminal digita `cd funcoes/revisao` e `node 06_exercicios_resolvidos.js`, mostra a saída, apaga e digita de novo. Pílulas apontam `funcoes/revisao-funcoes.html`, os arquivos `09` a `13` (galerias de exemplos, mini-projetos e galeria de erros) e os exercícios de caderno. |

## Exemplos usados (todos vindos das specs)

- Sem parâmetro: `ifal()`, `sortearDado()`, `caraOuCoroa()`; citados nas pílulas: `linha()`, `menu()`, `emojiDoDia()`, `senhaAleatoria()`
- Com parâmetro: `saudar(nome)`, `somar(a, b)`, `areaCirculo(raio)`, `nivelDaBateria(porcentagem)`, `barraDeProgresso(percentual)`
- Do professor: `estacao(dia, mes)` (de `funcoes/estacoes.js`), com o par `estacao(25, 12)` × `estacao(12, 25)`
- Série do adendo: `areaDoQuadrado1()` a `areaDoQuadrado4(lado)` + `classificarArea(area)`
- Escopo: `function dobrar(n)` com `n` e `total` locais
- Teste de mesa: T1 da spec (`f(x) { return x + 3 }`, `f(4)` e `f(f(1))`)

## Navegação

Mantido o sistema de passagem do esqueleto Mira, com um reforço: barra de progresso `#mira-progress`, botão flutuante `#mira-next`, contador `NN / 10` e teclado (setas, PageUp/PageDown, espaço, Home, End, `F` para tela cheia). O índice do slide passou a ser **explícito** em vez de deduzido da rolagem, para que cliques rápidos avancem exatamente um slide mesmo com a rolagem suave em andamento.

Cada palco tem botão **Replay** e é disparado por `IntersectionObserver` ao entrar na tela, rearmando ao sair. Como aba em segundo plano congela o `requestAnimationFrame` do navegador, foi adicionada uma rede de segurança: ao voltar o foco (`visibilitychange` / `focus`), os palcos visíveis reanimam sozinhos.

## Lacunas e observações

- Os arquivos citados no slide 10 (`funcoes/revisao/06_exercicios_resolvidos.js`, `funcoes/revisao-funcoes.html`, `09` a `13`) estão sendo produzidos em paralelo por outros agentes; o deck apenas os referencia pelo nome combinado.
- O `sortearDado()` e o `caraOuCoroa()` do slide 4 usam `Math.random()` de verdade a cada ciclo: em aula, vale parar e perguntar por que o número muda.
- A percepção de tamanho das animações está em **3/10** (padrão do `mira-animator`). Para deixá-las maiores, é o caso de acionar o `mira-size-animator`.
