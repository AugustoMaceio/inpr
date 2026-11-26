# Short: API REST com Java na Black Friday

Short vertical 9:16 de 60 segundos para graduação (nível iniciante). Ensina **DNS, TCP, latência, cache e filas** mostrando, passo a passo, como uma loja virtual sobrevive à Black Friday.

- **Vídeo pronto:** [`video.html`](video.html). Abra no navegador e clique em **Reproduzir**.
- **Gerado com:** [`prompts/prompt-master-videos-ti.md`](../../prompts/prompt-master-videos-ti.md), no modo sem ferramentas externas.

## Como usar o vídeo

1. Abra `video.html` no Chrome ou no Edge. A narração em pt-BR usa a voz do próprio navegador.
2. Use **Reproduzir**, **Pausar** (ou a tecla espaço) e **Reiniciar**.
3. Para baixar o arquivo, clique em **Gravar vídeo (.webm)**. O arquivo contém só a imagem; a voz do navegador fica de fora. Para gravar com som, use a gravação de tela do sistema: Win+Alt+R no Windows ou Cmd+Shift+5 no macOS. Outra opção é gravar a narração à parte (TTS) e juntar no CapCut.

Os textos, as cores e os tempos ficam no array `CENAS` dentro do HTML, com um comentário em cada cena.

---

## 1. Resumo

| Item | Definição |
|------|-----------|
| Tema | API REST com Java aguentando o pico da Black Friday |
| Área | Programação e sistemas distribuídos |
| Público | Graduação, iniciante |
| Formato | Short vertical 9:16, 60 s |
| Estilo | Diagramas técnicos animados com trechos mínimos de Java/Spring |
| Tom | Português do Brasil, direto e didático |

## 2. Desenho pedagógico

**Problema âncora:** à meia-noite da Black Friday, 10 mil clientes clicam em "Comprar" ao mesmo tempo. O banco de dados não dá conta, a API Java passa a responder `503` e a loja perde vendas a cada segundo.

| Conceito | Definição simples | Metáfora visual | Passo | Equívoco a desfazer |
|----------|-------------------|-----------------|-------|---------------------|
| DNS | Traduz `loja.com` para o endereço IP do servidor | Lista telefônica | 1 | "O navegador conhece o servidor pelo nome" |
| TCP | Abre uma conexão confiável e garante que os dados cheguem inteiros e em ordem | Aperto de mão (SYN, SYN-ACK, ACK) e envelopes numerados com confirmação | 1 | "O HTTP manda dados soltos, sem controle de entrega" |
| Latência | Tempo de espera entre pedir e receber a resposta | Cronômetro vermelho | 2 | Confundir latência (atraso) com largura de banda (capacidade) |
| Cache | Memória rápida (ex.: Redis) que guarda respostas repetidas | Gaveta ao lado da mesa | 3 | "Toda requisição precisa ir ao banco" |
| Fila | Guarda os pedidos para processar depois, no ritmo do sistema (ex.: RabbitMQ, Kafka) | Esteira de envelopes | 4 | "A API precisa terminar o pagamento antes de responder" |

**Trilha da solução**

1. O celular encontra o servidor (DNS) e abre uma conexão confiável (TCP) com a API.
2. Com o banco lotado, cada consulta leva 2 segundos (latência).
3. Os produtos mais vistos vão para o cache, e a resposta da API cai para cerca de 10 ms.
4. No pagamento, a API coloca o pedido numa fila, responde `202 Accepted` e um worker processa no ritmo que o banco aguenta.

**Critério de sucesso:** antes, 2.000 ms e sistema fora do ar. Depois, cerca de 10 ms nas consultas repetidas e pedidos enfileirados sem quedas.

## 3. Roteiro (narração final)

| Bloco | Tempo | Narração |
|-------|-------|----------|
| Gancho | 0:00–0:04 | Meia-noite, Black Friday. Dez mil cliques em comprar. Sua API Java caiu. |
| Problema | 0:04–0:11 | O cliente só quer ver o preço e pagar. Mas o banco de dados não aguenta dez mil pedidos por segundo. |
| Tentativa ingênua | 0:11–0:15 | Aumentar a memória do servidor? O gargalo continua no banco. |
| Passo 1: DNS | 0:15–0:20 | Primeiro, o celular traduz loja.com em um endereço IP. Isso é o DNS. |
| Passo 1: TCP | 0:20–0:25 | Depois, abre uma conexão confiável com a API Java. Isso é o TCP. |
| Passo 2: Latência | 0:25–0:32 | A API consulta o banco lotado. A resposta leva dois segundos. Essa espera é a latência. |
| Passo 3: Cache | 0:32–0:42 | Para consultas repetidas, guardamos a resposta numa memória rápida: o cache. No Spring, basta a anotação Cacheable. A resposta cai para dez milissegundos. |
| Passo 4: Fila | 0:42–0:51 | E na hora de pagar? A API põe o pedido numa fila e responde na hora. O banco processa no ritmo que aguenta. |
| Recapitulação | 0:51–0:57 | Resumo: DNS acha o servidor, TCP garante a entrega, o cache corta a latência e a fila segura o pico. |
| Chamada | 0:57–1:00 | Qual desses conceitos já salvou um sistema seu? Comenta aqui! |

## 4. Storyboard

Paleta: fundo `#0F172A`, tráfego `#38BDF8`, erro `#EF4444`, solução `#22C55E`, destaque Java `#F59E0B`, palavra-chave na legenda `#FACC15`.

| Cena | Tempo | Visual | Texto na tela |
|------|-------|--------|---------------|
| 1 | 0:00–0:04 | Relógio vira 00:00; enxurrada de pontos azuis atinge a caixa "API Java", que fica vermelha, treme e racha | `10.000 req/s` · `503 Service Unavailable` |
| 2 | 0:04–0:11 | Celular → API (`GET /produtos/42`); requisições se empilham sobre o banco, que treme em vermelho | `Banco sobrecarregado` · `CPU 100%` |
| 3 | 0:11–0:15 | A caixa da API cresce (8 GB → 64 GB), mas o funil até o banco continua entupido; um X vermelho aparece | `Mais RAM ≠ solução` |
| 4 | 0:15–0:20 | `loja.com` viaja até o DNS, e `203.0.113.10` volta ao celular | `DNS` · `nome → endereço IP` |
| 5 | 0:20–0:25 | Setas SYN, SYN-ACK e ACK; depois, envelopes 1, 2 e 3 com "✓ recebido" | `TCP · conexão confiável` |
| 6 | 0:25–0:32 | Pacote desce lentamente até o banco, espera e volta; cronômetro sobe até 2.000 ms | `LATÊNCIA: 2.000 ms` · "latência = atraso (não é velocidade da internet)" |
| 7 | 0:32–0:42 | Caixa verde "Cache (Redis)" surge entre a API e o banco. A 1ª consulta vai ao banco (2.000 ms); as seguintes batem no cache e voltam (10 ms). O código `@Cacheable` aparece | `CACHE` · `10 ms` |
| 8 | 0:42–0:51 | `POST /pedidos` → API devolve `202 Accepted` ao celular; envelopes andam numa esteira até o worker, que grava no banco | `FILA · processamento assíncrono` · `processados: N · quedas: 0` |
| 9 | 0:51–0:57 | Os blocos DNS → TCP → Cache → Fila acendem em verde conforme são citados | `2.000 ms → 10 ms` |
| 10 | 0:57–1:00 | Os 5 conceitos pulsando e uma seta apontando para os comentários | `Comenta aqui` |

Código mostrado na cena 7:

```java
@Cacheable("produtos")
public Produto buscar(Long id) {
  return repo.findById(id).orElseThrow();
}
```

## 5. Prompt de narração (TTS)

> Voz pt-BR, ritmo 1.05x a 1.1x, tom didático e firme.

```text
Meia-noite, Black Friday. [pausa 0.3s] Dez mil cliques em comprar. [pausa 0.3s] Sua API Java *caiu*. [pausa 0.4s]
O cliente só quer ver o preço e pagar. Mas o banco de dados não aguenta *dez mil pedidos por segundo*. [pausa 0.4s]
Aumentar a memória do servidor? [pausa 0.2s] O gargalo continua no *banco*. [pausa 0.4s]
Primeiro, o celular traduz loja ponto com em um endereço IP. Isso é o *DNS*. [pausa 0.3s]
Depois, abre uma conexão confiável com a API Java. Isso é o *TCP*. [pausa 0.4s]
A API consulta o banco lotado. A resposta leva *dois segundos*. Essa espera é a *latência*. [pausa 0.4s]
Para consultas repetidas, guardamos a resposta numa memória rápida: o *cache*. [pausa 0.2s]
No Spring, basta a anotação *arroba Cacheable*. A resposta cai para *dez milissegundos*. [pausa 0.4s]
E na hora de pagar? [pausa 0.2s] A API põe o pedido numa *fila* e responde na hora. O banco processa no ritmo que aguenta. [pausa 0.4s]
Resumo: *DNS* acha o servidor, *TCP* garante a entrega, o *cache* corta a *latência* e a *fila* segura o pico. [pausa 0.3s]
Qual desses conceitos já salvou um sistema seu? Comenta aqui!
```

## 6. Pacote de publicação

**Títulos (até 60 caracteres)**

- Como salvar sua API Java na Black Friday em 60s
- 10 mil req/s: DNS, TCP, Cache e Filas na prática
- Por que sua API REST cai no pico (e como resolver)

**Descrição**

> Sua API REST em Java aguentaria a Black Friday? Em 1 minuto, veja como DNS, TCP, latência, cache (`@Cacheable` no Spring) e filas trabalham juntos para manter um sistema de pé sob alto tráfego.
>
> Referências: RFC 1035 (DNS), RFC 9293 (TCP), RFC 9110 (semântica HTTP, status 202), documentação do Spring Framework (Cache Abstraction) e *Designing Data-Intensive Applications*, de Martin Kleppmann.

**Hashtags:** #Java #APIREST #SpringBoot #SistemasDistribuidos #ArquiteturaDeSoftware #Backend #Programacao #EngenhariaDeSoftware

**Thumbnail:** fundo escuro dividido por um raio. À esquerda, o servidor Java em vermelho com "2000 ms"; à direita, o mesmo servidor em verde com "10 ms" e os ícones de Cache e Fila. Texto no topo: "API CAIU? RESOLVA ASSIM".

**Pergunta fixada:** "Para escalar uma API Java, você começa pelo cache (Redis) ou pela fila (RabbitMQ/Kafka)? Por quê?"

**Próximo episódio:** "API REST com Java: como evitar pedidos duplicados com idempotência e locks no banco".

## 7. Revisão técnica e de ritmo (o que mudou em relação ao plano original)

| Ponto do plano original | Problema | Ajuste |
|-------------------------|----------|--------|
| Gancho com 17 palavras em 4 s | Cerca de 4 palavras/s, rápido demais para TTS em pt-BR (o limite confortável fica em torno de 3) | Encurtado para 12 palavras |
| "Essa viagem demora dois segundos" | Os 2 s vêm da espera no banco lotado, não da viagem pela rede. Chamar de "viagem" reforça a confusão entre latência e distância | "A API consulta o banco lotado. A resposta leva dois segundos" |
| "No Java, basta um @Cacheable" | `@Cacheable` é do Spring, não do Java. Também precisa de `@EnableCaching` e de um provedor de cache (Redis, Caffeine) | "No Spring, basta a anotação Cacheable". Para a aula, ver a nota abaixo |
| "A resposta cai para 10 ms" | Vale para o tempo de resposta da API num cache hit. O celular ainda soma a latência da rede | O vídeo mostra o 10 ms ao lado da API, não no celular |
| "O sistema processa um por um" | Filas costumam ter vários consumidores em paralelo; o que importa é o ritmo controlado | "O banco processa no ritmo que aguenta" |
| Checklist marcava "nenhum erro técnico" sem sinalizar simplificações | O prompt master pede que as simplificações sejam sinalizadas | Simplificações listadas abaixo para o professor comentar em aula |

**Simplificações para comentar em aula**

- **Cache tem prazo de validade.** Preço e estoque mudam durante a Black Friday, então o cache precisa de TTL (ex.: 30 s) ou de invalidação (`@CacheEvict`) quando o produto for alterado.
- **Configuração mínima do cache no Spring Boot:** dependência `spring-boot-starter-cache` (e `spring-boot-starter-data-redis` para usar Redis), mais `@EnableCaching` numa classe de configuração.
- **`202 Accepted` significa "recebido, ainda não processado".** O cliente precisa consultar o status do pedido depois (ex.: `GET /pedidos/{id}`) ou ser avisado por e-mail ou notificação.
- **Fila não cria capacidade.** Ela absorve o pico e protege o banco. Se os pedidos chegarem sempre mais rápido do que o worker processa, a fila cresce sem parar.
- **HTTPS também usa TLS** sobre o TCP. O vídeo omite o TLS para manter o foco nos conceitos pedidos.

## 8. Checklist de autoavaliação

- [x] DNS, TCP, latência, cache e fila aparecem, cada um ligado a um passo da solução.
- [x] Problema concreto (10 mil req/s na Black Friday) e resultado visível (2.000 ms → 10 ms, quedas: 0).
- [x] Termos técnicos corretos (`@Cacheable` do Spring, `202 Accepted`, SYN/SYN-ACK/ACK), com as simplificações sinalizadas.
- [x] O gancho funciona em 3 segundos e a narração cabe no tempo de cada cena.
- [x] Toda fala tem um visual correspondente, e o conceito aparece em ação antes de ser nomeado.
- [x] Duração de 60 s, linguagem para iniciantes e paleta consistente.
