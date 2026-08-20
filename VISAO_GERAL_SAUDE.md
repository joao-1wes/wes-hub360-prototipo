# Seção Saúde — Visão geral (documentação detalhada)

Documento de referência da subseção **Visão geral** da Seção Saúde do WES HUB 360:
cada página, cada botão, o que ele faz, como ele faz e de onde vêm os números.

> **Protótipo sem API.** Nada aqui chama servidor. Todos os números são derivados no
> front-end a partir de valores base fixos, então são estáveis entre recarregamentos e
> coerentes entre as páginas. Os arquivos envolvidos são
> [index.html](index.html) (marcação), [app.js](app.js) (comportamento) e
> [styles.css](styles.css) (estilo).

---

## 1. Mapa das páginas

| # | Página | Rota (hash) | id da página |
|---|--------|-------------|--------------|
| 2 | Visão geral | `#/dashboard/health/overview` | `page-health-overview` |
| 3 | O que acontece no WhatsApp | `#/dashboard/health/overview/whatsapp` | `page-health-overview-whatsapp` |
| 4 | Médicos usando o assistente | `#/dashboard/health/overview/doctors` | `page-health-overview-doctors` |
| 5 | Mnemônicos — leitura de exames | `#/dashboard/health/overview/mnemonics` | `page-health-overview-mnemonics` |
| 6 | Prestação de contas — risco de glosa | `#/dashboard/health/overview/accountability` | `page-health-overview-accountability` |
| 7 | Insights de IA | `#/dashboard/health/whatsapp/insights` | `page-health-whatsapp-insights` |

As rotas são registradas em `routeMap` e `sectionMap` ([app.js](app.js)). Nas rotas
`dashboard/health/overview/*` o menu lateral mantém **Visão geral** ativo (regra de
`navRouteKey`).

---

## 2. Página "Visão geral"

**Rota:** `#/dashboard/health/overview`

Painel consolidado dos quatro produtos de saúde. É a única página da subseção que tem
gráficos; as páginas de detalhe são tabelas.

### 2.1 Cabeçalho

| Elemento | O que faz | Como faz |
|---|---|---|
| `h2` "Visão geral — Seção Saúde" | título | estático |
| **Exportar dados** (`#healthOverviewExportBtn`, `.btn.primary`) | abre o modal de exportação | `data-health-overview-export-open` → `initHealthOverviewExportModal()` adiciona `.open` em `#healthOverviewExportModal` e foca o primeiro formato. Ao reabrir, "Opções avançadas" volta recolhido |

### 2.2 Indicadores (`.stats-cards`)

Quatro `.stat-card` estáticos, na ordem:

| Ícone | Valor | Rótulo | Detalhe |
|---|---|---|---|
| `forum` | **142** | Atendimentos por WhatsApp | +18% nos últimos 7 dias |
| `stethoscope` | **89** | Consultas com assistente médico | 6 médicos ativos |
| `receipt_long` | **320** | Documentos analisados | 58 com possível glosa (18%) |
| `biotech` | **214** | Exames lidos | 1.560 mnemônicos extraídos |

### 2.3 Painéis com gráfico

Quatro `.health-patient-panel.health-overview-panel`, cada um com título, chip de
contexto, link **Ver mais** no canto superior direito e um `<canvas>`.

| Painel | Chip | Gráfico (Chart.js) | Dados | Ver mais leva para |
|---|---|---|---|---|
| O que acontece no WhatsApp | `142 total` | rosca (`#healthOverviewWhatsappChart`) | Envio de exames 58 · Dúvidas 49 · Encaixe para renovação 35 | página 3 |
| Médicos usando o assistente | `6 médicos` | barras horizontais (`#healthOverviewDoctorsChart`) | 28 · 21 · 16 · 12 · 8 · 4 | página 4 |
| Leitura de exames — mnemônicos | `214 exames` | barras horizontais (`#healthOverviewExamsChart`) | HB 412 · GLI 388 · COL 351 · TSH 298 · CREA 254 · URE 208 | página 5 |
| Prestação de contas | `320 documentos` | rosca (`#healthOverviewAccountabilityChart`) | Risco alto 58 · médio 79 · baixo 183 | página 6 |

O painel de mnemônicos ainda lista, abaixo do gráfico, os **menos identificados**
(T4L 14, HbA1c 22, PCR 28, FERR 39, VITD 47) em chips.
O painel de prestação de contas mostra os três totais de risco em destaque.

**Como os gráficos são criados** — `syncHealthOverviewCharts(routeKey)`:
- só cria quando `routeKey === 'dashboard/health/overview'`; fora dela chama
  `destroyHealthOverviewCharts()`;
- se o container ainda está com altura 0 (carregamento direto na rota), reagenda com
  `requestAnimationFrame` e cria quando houver dimensão.

### 2.4 Painel "Insights de IA"

Dois cards de destaque e o link **Ver mais** → página 7.

### 2.5 Modal "Exportar dados" (`#healthOverviewExportModal`)

Monta um pacote único a partir do que está renderizado na Visão geral: indicadores,
risco de glosa e as tabelas de médicos e mnemônicos (`buildDataset()` lê o DOM).

| Botão | O que faz | Arquivo gerado |
|---|---|---|
| **Excel** | HTML com `xmlns:x` que o Excel abre como planilha | `saude-visao-geral.xls` |
| **CSV** | blocos separados por seção, `;` como separador, BOM UTF-8 | `saude-visao-geral.csv` |
| **PDF** | PDF montado à mão (Helvetica, até 52 linhas) | `saude-visao-geral.pdf` |
| **Dados brutos (JSON)** | `JSON.stringify(dataset, null, 2)` | `saude-visao-geral.json` |

Cada exportação mostra um toast ("Dados exportados em …") e fecha o modal; em erro,
"Não foi possível exportar os dados".

| Outros controles | O que faz |
|---|---|
| **Opções avançadas** (`data-health-overview-advanced-toggle`) | expande/recolhe o bloco `#healthOverviewExportAdvanced` (`aria-expanded` + `hidden`) |
| Endpoint `https://api.weshub360.com/v1/health/overview` + ícone de cópia | copia via `copyTextToClipboard()`, com toast de confirmação |
| Chave `wes_live_sk_9f3c1a7b42e8` + ícone de cópia | idem |
| Snippet `curl` | apenas leitura |
| **Fechar** / X / `Esc` | fecha o modal |

---

## 3. Páginas de detalhe (WhatsApp, Médicos, Mnemônicos, Prestação de contas)

As quatro têm a mesma estrutura. O que muda é o dataset (entidade, unidade e itens).

### 3.1 Cabeçalho

| Elemento | O que faz | Como faz |
|---|---|---|
| **← Voltar para Visão geral** | volta para a página 2 | link `href="#/dashboard/health/overview"` |
| `h2` + subtítulo | título e explicação | estático |
| **Comparar** (`.btn.outline`, à esquerda) | abre o modal de comparação daquela página | `data-health-compare-open` → descobre a página pelo `closest('.page')`, lê o `data-health-history` do bloco e chama `openCompare(key)` |
| **Baixar dados** (`.btn.primary`, à direita) | exporta em CSV a tabela **da aba ativa** | `data-health-history-export` → `exportRanking(key)` |

O CSV do "Baixar dados" leva um cabeçalho de contexto antes da tabela:
título da página, **Aba** (Cenário atual/Histórico), **Período** e **Intervalo**. O nome
do arquivo é `<prefixo>-<periodo>.csv` (ex.: `medicos-assistente-ago-de-2026.csv`).
Colunas: `Posição · <entidade> · <valor> · % do total` (+ `Ação sugerida` quando houver).
Em Prestação de contas não há coluna Posição e o CSV grava o rótulo completo
("Risco alto"), não só o texto do chip.

### 3.2 Abas (`.tabs.tabs-underline`)

| Aba | Conteúdo |
|---|---|
| **Cenário atual** (padrão) | linha-resumo + tabela do período corrente |
| **Histórico** | barra de período + tabela da janela escolhida |

`setTab(key, tab)` alterna `.active` nos botões (`aria-selected`) e nos painéis
`[data-health-history-panel]`. As duas abas são renderizadas com o mesmo espaçamento
(faixa de 52px + 20px até a tabela), então a tabela não muda de posição ao trocar.

### 3.3 Aba "Cenário atual"

- **Linha-resumo**: `Total: 142 atendimentos` à esquerda e o chip
  `Análise válida para hoje, 17/08/2026` à direita.
- **Tabela** (`.data-table.health-overview-ranking-table`) com posição, entidade, valor e
  **% do total**, em ordem decrescente. Mantém os ids originais
  (`healthOverviewWhatsappRankingTable`, `healthOverviewDoctorsRankingTable`,
  `healthOverviewMnemonicsTable`, `healthOverviewAccountabilityRankingTable`) porque o
  modal de exportação da Visão geral lê dois deles pelo DOM.
- Sem filtros: o cenário atual é sempre o período corrente.

### 3.4 Aba "Histórico"

Barra de controles em três colunas: filtro (só em Médicos) à esquerda, navegação ao
centro, granularidade à direita.

| Controle | O que faz | Como faz |
|---|---|---|
| **Semana / Mês / Ano** (`.tabs.tabs-underline`) | troca a granularidade da janela | `data-health-history-grain` → `setGrain()`. Preserva a data de referência: de "04 – 10 de mai." para Mês abre "mai. de 2026" |
| **‹** e **›** (`.icon-btn` circulares azuis) | andam uma janela para trás/frente | `data-health-history-nav` → `moveWindow(±1)`. Ficam `disabled` nos limites da base |
| **Rótulo do período** (ex.: "17 – 23 de ago. de 2026") | abre o menu de escolha do período | `data-health-history-picker-toggle` → `.menu.filter-menu` com o grupo **Mês** (mar. a ago. de 2026) e, em Semana, o grupo **Semana** com as semanas daquele mês. Em Mês, escolher fecha o menu; em Semana, o grupo "Mês" só troca a lista. Em **Ano** o rótulo fica `disabled` (só existe uma janela) |
| **Filtros** (só em Médicos) | filtra a tabela por médicos | `data-health-doctor-filter-btn` → menu com o grupo **Médicos** em seleção múltipla. Marcar/desmarcar mantém o menu aberto, o rótulo mostra a contagem ("Filtros · 2") e a tabela lista só os marcados, preservando posição e % do total do ranking cheio. **Limpar filtros** volta a mostrar todos |

A tabela da aba é a mesma do cenário atual, recalculada para a janela. Janelas
incompletas (mês e semana correntes, e o ano de 2026) somam apenas os dias com dado —
nada é extrapolado, e itens sem movimento aparecem com 0.

### 3.5 Modal "Comparar" (`#healthCompareModal`)

Compara os itens da própria página ao longo do histórico.

| Elemento | O que faz |
|---|---|
| Título | "Comparar — médicos / tipos de solicitação / mnemônicos / classificações de risco" |
| Checkboxes (`.health-compare-check`) | ligam/desligam itens; abre com os três primeiros marcados |
| Gráfico de barras agrupadas | um grupo por mês (mar. a ago. de 2026), uma cor por item |
| Tabela | `<entidade> · Total (6 meses) · Média por mês · Mês mais forte`, com a bolinha da cor do item |
| Nada marcado | o lugar do gráfico recebe "Nenhum item selecionado" (o mesmo estado vazio das tabelas) e a tabela fica oculta |
| Fechar | X do cabeçalho, clique fora ou `Esc` — o modal não tem rodapé. O gráfico é destruído no fechamento e recriado na abertura seguinte |

### 3.6 Diferenças por página

| Página | Entidade | Valor | Itens (período corrente) | Particularidades |
|---|---|---|---|---|
| WhatsApp | Tipo de solicitação | Atendimentos | Envio de exames 58 · Dúvidas 49 · Encaixe 35 (142) | — |
| Médicos | Médico | Consultas com assistente | 28 · 21 · 16 · 12 · 8 · 4 (89) | tem o botão **Filtros** no histórico |
| Mnemônicos | Mnemônico | Ocorrências | 11 itens, de HB 412 a T4L 14 (2.061) | — |
| Prestação de contas | Classificação | Documentos | Alto 58 · Médio 79 · Baixo 183 (320) | ordem por risco (não ranqueia), sem coluna Posição e com o chip de risco (`.glosa-chip`) na coluna |

---

## 4. Página "Insights de IA"

**Rota:** `#/dashboard/health/whatsapp/insights`

Papel diferente das outras: **lê os dados das quatro páginas de detalhe** e devolve
leituras — pontos de atenção e oportunidades de melhoria. Não tem abas, histórico,
"Comparar" nem "Baixar dados".

| Elemento | O que faz |
|---|---|
| **← Voltar para Visão geral** | volta para a página 2 |
| Cards de insight (`.health-insight-card`) | um por leitura, em grade responsiva |
| Chip do tipo | **Atenção** (`danger`), **Revisar** (`warning`), **Oportunidade** (`neutral`), **Destaque** (`success`) |
| **Ver mais** (canto superior direito) | leva à página que originou o insight; o nome da página fica no `aria-label` |
| Linha com ícone `lightbulb` | a ação sugerida |

Insights gerados hoje por `buildAiInsights()`:

1. **Atenção** — 18,1% dos documentos com risco alto de glosa (58 de 320; com os de risco
   médio, 42,8% precisa de conferência) → priorizar a revisão dos 58.
2. **Atenção** — uso do assistente concentrado em dois profissionais (Helena 28 e Rafael
   21 = 55,1% das 89 consultas; Paulo Reis com 4) → acompanhar quem usa menos.
3. **Oportunidade** — 40,8% dos atendimentos são envio de exames (58 de 142) →
   automatizar confirmação e orientações de preparo.
4. **Revisar** — três mnemônicos com identificação muito baixa (PCR 28, HbA1c 22, T4L 14
   = 3,1% das 2.061) → revisar o dicionário de extração.
5. **Destaque** — 9,6 mnemônicos por exame (214 exames → 2.061 mnemônicos) → usar a base
   para sugerir acompanhamento.

Títulos, números e nomes são **calculados**, não escritos à mão: quem lidera, quem usa
menos e quais são os mnemônicos mais raros saem dos mesmos datasets. Por isso a página
nunca contradiz a Visão geral.

---

## 5. De onde vêm os números

Tudo parte de `DATASETS` ([app.js](app.js)), onde cada item tem um valor `base` que é o
valor do **período corrente** (últimos 7 dias, 11/08 a 17/08/2026). Esses valores base
reproduzem exatamente os números dos cards e gráficos da Visão geral.

1. **Períodos** (`PERIODS`): cada mês de mar. a ago. de 2026 tem um peso — 2,7 · 3,1 ·
   2,9 · 3,9 · 4,3 · 2,4 (agosto é parcial, 17 dias). O valor de um item no mês é
   `base × peso × drift`.
2. **Drift** (`DRIFT` + `driftAt`): variação determinística por item/período, para o
   ranking mudar de um mês para o outro sem usar números aleatórios. O período corrente
   usa `seed 0`, que devolve o valor base intacto.
3. **Dias** (`buildDailySeries`): o total do mês é distribuído entre os dias por um perfil
   de dia da semana (`WEEKDAY_FACTOR` — segunda cheia, fim de semana fraco) com
   arredondamento cumulativo, de modo que a soma dos dias fecha exatamente com o mês.
4. **Janelas** (`buildWindowSeries`): semana, mês e ano somam os dias do intervalo. A
   série de "todos os itens" é a soma item por item, dia a dia — por isso qualquer
   granularidade fecha com o mesmo total.
5. **Base disponível**: 01/03/2026 a 17/08/2026 (`HISTORY_MIN` / `HISTORY_MAX`). É o que
   limita as setas de navegação, os meses do menu e os dias considerados.

Consequências práticas:
- o "Cenário atual" de cada página é idêntico aos números da Visão geral;
- a variação mês a mês exibida bate com os totais dos meses vizinhos;
- os números não mudam quando a página é recarregada.

---

## 6. Comportamento por rota

`window.syncHealthHistoryPages(routeKey)` ([app.js](app.js)) é chamada a cada troca de
rota, junto de `syncHealthOverviewCharts`:

- fora das rotas de detalhe, não faz nada;
- na rota ativa, re-renderiza o cenário atual e, se a aba Histórico estiver aberta,
  também a janela selecionada;
- páginas sem aba de histórico (Insights) são ignoradas pela renderização de histórico.

O estado (granularidade, janela, data de referência e médicos filtrados) vive em
`historyState`, por página, e sobrevive à troca de rota dentro da mesma sessão.
