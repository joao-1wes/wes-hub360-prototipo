# Seção Saúde — Documentação de referência

Este documento descreve, de ponta a ponta, a seção **Saúde** do protótipo WES Hub360.

> **Natureza do protótipo:** aplicação estática (HTML/CSS/JS puro), sem backend
> nem API. O roteamento é feito por *hash* (`#/dashboard/health/...`). Toda
> "IA", "OCR", "extração" e "classificação" é **simulada** com dados mock e
> barras de progresso (`wait(ms)`). O único processamento real de arquivo é a
> conversão para base64 na Leitura de exames — e mesmo assim o conteúdo é
> ignorado e o resultado é fixo.

**Arquivos principais**
- [index.html](index.html) — markup de todas as páginas e modais.
- [app.js](app.js) — lógica, dados mock, roteamento e renderização.
- [styles.css](styles.css) — estilos (classes `health-*`, `glosa-chip*`, `health-ai-audit-*`).

---

## Índice

1. [Visão geral da seção](#1-visão-geral-da-seção)
2. [Navegação e cadastro](#2-navegação-e-cadastro)
3. [Mapa de rotas](#3-mapa-de-rotas)
4. [Subseção: Visão geral](#4-subseção-visão-geral)
5. [Subseção: Agente do paciente](#5-subseção-agente-do-paciente)
6. [Subseção: Atendimento](#6-subseção-atendimento)
7. [Subseção: Agenda](#7-subseção-agenda)
8. [Subseção: Prestação de contas](#8-subseção-prestação-de-contas)
9. [Subseção: Leitura de exames](#9-subseção-leitura-de-exames)
10. [Notas técnicas transversais](#10-notas-técnicas-transversais)

---

## 1. Visão geral da seção

A seção Saúde reúne quatro produtos de automação para operações clínicas, mais
uma tela consolidada e uma agenda. Cada subseção é um fluxo independente:

| # | Subseção | O que resolve |
|---|----------|----------------|
| 1 | **Visão geral** | Painel único com KPIs e gráficos de todos os produtos de saúde. |
| 2 | **Agente do paciente** | Atendimento automatizado por WhatsApp (CPF, dúvidas, envio de exames, encaixe para renovação). |
| 3 | **Atendimento** | Registro de atendimentos + histórico médico do paciente com auxiliar de IA e linha do tempo clínica. |
| 4 | **Agenda** | Agenda semanal do médico + fila de encaixes para renovação. |
| 5 | **Prestação de contas** | Auditoria de contas hospitalares com estimativa de **chance de glosa**. |
| 6 | **Leitura de exames** | Extração de códigos/mnemônicos de exames a partir de PDF/imagem. |

---

## 2. Navegação e cadastro

### Submenu lateral — [index.html:466](index.html)
Grupo de navegação `data-menu="health"`, ícone `health_and_safety`, rótulo
"Saúde". O `#submenu-health` tem 6 links, nesta ordem: **Visão geral · Agente do
paciente · Atendimento · Agenda · Prestação de contas · Leitura de exames**.

### Card no dashboard — [index.html:862](index.html)
`article.dashboard-navigation-card` "Saúde" ("Acesse rotinas de saúde.") com os
mesmos 6 links.

### Formulário de criação de organização — [index.html:312](index.html)
Checkbox-pai `organization_sections` de valor `health` (marcado). As subseções
são checkboxes `organization_subsections`, todos marcados por padrão:

| Value | Rótulo |
|-------|--------|
| `health-whatsapp` | Agente do paciente |
| `health-service` | Atendimento |
| `health-agenda` | Agenda |
| `health-accountability` | Prestação de contas |
| `health-exam-reading` | Leitura de exames |

> A "Visão geral" **não** é uma subseção configurável — não há checkbox para ela.

---

## 3. Mapa de rotas

Mapeamento rota → id de página em [app.js:21495](app.js); títulos em
[app.js:21554](app.js).

| Rota (hash) | Página (id) |
|-------------|-------------|
| `dashboard/health/overview` | `page-health-overview` |
| `dashboard/health/overview/doctors` | `page-health-overview-doctors` |
| `dashboard/health/overview/mnemonics` | `page-health-overview-mnemonics` |
| `dashboard/health/overview/whatsapp` | `page-health-overview-whatsapp` |
| `dashboard/health/overview/accountability` | `page-health-overview-accountability` |
| `dashboard/health/whatsapp` | `page-health-whatsapp` |
| `dashboard/health/whatsapp/insights` | `page-health-whatsapp-insights` |
| `dashboard/health/whatsapp/history` | `page-health-whatsapp-history` |
| `dashboard/health/service` | `page-health-service` |
| `dashboard/health/service/patient` | `page-health-service-patient` |
| `dashboard/health/agenda` | `page-health-agenda` |
| `dashboard/health/accountability` | `page-health-accountability` |
| `dashboard/health/accountability/results` | `page-health-accountability-results` |
| `dashboard/health/exam-reading` | `page-health-exam-reading` |
| `dashboard/health/exam-reading/results` | `page-health-exam-reading-results` |
| `dashboard/health/integrations` | `page-integrations-apis` (reaproveita a página geral de Integrações) |

---

## 4. Subseção: Visão geral

**Rota:** `#/dashboard/health/overview` · **Página:** `page-health-overview`
([index.html:8834](index.html))

**Propósito.** Painel consolidado que reúne, em uma tela, os quatro produtos de
saúde com KPIs, gráficos e insights de IA.

### Elementos de UI
- **4 stat-cards** ([index.html:8843](index.html)):
  1. `forum` — **142** Atendimentos por WhatsApp · "+18% nos últimos 7 dias"
  2. `stethoscope` — **89** Consultas com assistente médico · "6 médicos ativos"
  3. `receipt_long` — **320** Documentos analisados · "58 com possível glosa (18%)"
  4. `biotech` — **214** Exames lidos · "1.560 mnemônicos extraídos"
- **4 gráficos** (`<canvas>`, [index.html:8878](index.html)): WhatsApp, Médicos, Leitura de exames, Prestação de contas.
- **Painel "Insights de IA"** ([index.html:8947](index.html)) com link "Ver mais" → `#/dashboard/health/whatsapp/insights`.
- **Todos os quatro painéis têm "Ver mais"**, cada um abrindo uma página de detalhe
  com consulta de períodos passados (ver 4.1).

### Lógica JS — `syncHealthOverviewCharts(routeKey)` ([app.js:2691](app.js))
- Só cria os gráficos na rota `dashboard/health/overview`; fora dela chama
  `destroyHealthOverviewCharts()` ([app.js:2677](app.js)).
- Guarda de layout: se o container ainda tem altura 0, reagenda via `requestAnimationFrame`.
- Usa **Chart.js** (`window.Chart`). Datasets (todos hardcoded):

| Gráfico | Tipo | Dados |
|---------|------|-------|
| WhatsApp | doughnut | Envio de exames / Dúvidas / Encaixe = **[58, 49, 35]** |
| Médicos | bar horizontal | 6 médicos = **[28, 21, 16, 12, 8, 4]** |
| Prestação de contas | doughnut | Sem glosa / Com glosa = **[262, 58]** |
| Exames (mnemônicos) | bar horizontal | HB/GLI/COL/TSH/CREA/URE = **[412, 388, 351, 298, 254, 208]** |

---

## 4.1 Páginas "Ver mais" com histórico

> Documentação detalhada da subseção, página por página e botão por botão:
> [VISAO_GERAL_SAUDE.md](VISAO_GERAL_SAUDE.md).

Cada painel da Visão geral abre uma página de detalhe que mostra **o período atual e
também o passado**, para consulta:

| Página | Bloco (`data-health-history`) | Tabela (id) |
|--------|-------------------------------|-------------|
| Médicos usando o assistente | `doctors` | `healthOverviewDoctorsRankingTable` |
| Mnemônicos — leitura de exames | `mnemonics` | `healthOverviewMnemonicsTable` |
| O que acontece no WhatsApp | `whatsapp` | `healthOverviewWhatsappRankingTable` |
| Prestação de contas — risco de glosa | `accountability` | `healthOverviewAccountabilityRankingTable` |

> A página **Insights de IA** (`#/dashboard/health/whatsapp/insights`) tem outro papel:
> ela **lê os dados das quatro páginas acima** e devolve leituras — pontos de atenção e
> oportunidades de melhoria. Não tem abas, histórico, "Comparar" nem "Baixar dados".
> Cada insight é um `.health-patient-detail-card` com chip de tipo (Atenção / Revisar /
> Oportunidade / Destaque) e o link **"Ver mais"** no canto superior direito, seguidos do
> texto com os números e da ação sugerida. O link leva à página de origem e carrega o
> nome dela no `aria-label`. Os valores vêm de `buildAiInsights()` ([app.js](app.js)), calculados
> a partir dos mesmos datasets — nunca contradizem a Visão geral.

### Estrutura: duas abas (iguais nas quatro páginas)
Cada página usa `.tabs.tabs-underline` + `.tab-panel` (padrão do projeto):

**Aba "Cenário atual"** — retrato do período corrente (últimos 7 dias), sem filtro:
- **Linha-resumo** colada na tabela (8px): `Total: 142 atendimentos` em
  `--md-label-large`/700 e, à direita, o chip `Análise válida para hoje, 17/08/2026`.
- `.stats-cards` + `.stat-card`: total, variação vs. os 7 dias anteriores e líder.
- Tabela do ranking (`.data-table`) com a coluna de variação em `.chip`
  (`success`/`danger`/`neutral`). Mantém os ids originais
  (`healthOverviewDoctorsRankingTable`, `healthOverviewMnemonicsTable`, …), que o modal
  "Exportar dados" da Visão geral continua lendo.

**Aba "Histórico"** — a mesma tabela do cenário atual, na janela que o usuário escolher.
Abre no mês mais recente (ago. de 2026) e não tem cards nem gráficos:
- **Granularidade**: `.tabs`/`.tab` com **Semana / Mês / Ano**. Ao trocar, sempre vai
  para a janela mais recente daquela granularidade.
- **Navegador** `‹ ago. de 2026 ›`: as setas (`.icon-btn` circulares, azul primário)
  andam janela por janela e ficam `disabled` nos limites da base (01/03/2026 a
  17/08/2026).
- **Escolha do período**: clicar no rótulo abre o `.menu.filter-menu` padrão do projeto.
  Em **Mês**, um grupo "Mês" (mar. a ago. de 2026) — escolher fecha o menu. Em
  **Semana**, dois grupos: "Mês" só troca a lista, e "Semana" traz as semanas daquele
  mês ("01 – 07 de jun.", "29 de jun. – 05 de jul.") — escolher fecha o menu. Em
  **Ano** o gatilho fica `disabled`, porque só existe uma janela.
- Trocar a granularidade preserva a data de referência: de "04 – 10 de mai." para Mês
  abre "mai. de 2026", não o mês mais recente.
- **Tabela do ranking** da janela (tabelas `…HistoryTable`), com as mesmas colunas do
  cenário atual: posição, item, valor e **% do total**. Em Prestação de contas a
  coluna Classificação usa o chip de risco da própria seção (`.glosa-chip--high/medium/low`,
  o mesmo da tabela de Prestação de contas); no CSV vai o rótulo completo ("Risco alto"). Janelas incompletas (o mês e a
  semana correntes, o ano de 2026) somam apenas os dias com dado — nada é extrapolado.
- Na página de médicos, a barra tem o botão **Filtros** (`filter_list`) com o grupo
  "Médicos" em **seleção múltipla**: marcar/desmarcar mantém o menu aberto, o rótulo
  mostra a contagem ("Filtros · 2") e a tabela passa a listar só os médicos marcados,
  preservando a posição e o % do total do ranking cheio. "Limpar filtros" volta a
  mostrar todos.
- **"Baixar dados"** exporta a tabela da aba ativa em CSV, com aba, período e intervalo
  no cabeçalho do arquivo.

Consistência dos números: o total de cada mês (o mesmo do ranking) é distribuído entre
os dias com um perfil de dia da semana e arredondamento cumulativo. Por isso qualquer
janela — semana, mês ou ano — fecha com os mesmos totais.

---

## 5. Subseção: Agente do paciente

**Rota:** `#/dashboard/health/whatsapp` · **Páginas:** `page-health-whatsapp`,
`page-health-whatsapp-insights`, `page-health-whatsapp-history`
([index.html:8976](index.html))

**Propósito.** Central do agente automatizado de WhatsApp que atende pacientes:
autenticação por CPF, dúvidas sobre o histórico, envio de exames e encaixe para
renovação de receita. Permite testar via simulação, integrar aos canais e
compartilhar o número.

### Elementos de UI
- **Ações do cabeçalho** — `.page-actions` com dois `.icon-btn` no canto superior direito:
  - `account_tree` → abre o modal `healthPatientFlowModal` (fluxo do atendimento, com pan/zoom).
  - `chat` → abre o modal `healthPatientPreviewModal` (simulação no WhatsApp).
- **Página principal** — grid de 2 painéis:
  - *Integração* → "Realizar integração" → `#/dashboard/health/integrations`.
  - *Compartilhar agente* → número **+55 85 98888-1048**, "Copiar link" e "Compartilhar".
- **Insights** — 2 cards de detalhe + tabela "Auditoria dos sinais".
- **Histórico** — tabela "Histórico de interações" (5 linhas estáticas com chips de status).

### Simulação (modal `healthPatientPreviewModal`)
Emula um telefone WhatsApp. Formulário de CPF + 3 botões de fluxo (inicialmente desabilitados).

**Funções JS ([app.js:18604](app.js) em diante):**
- `addHealthPatientPreviewMessage(content, type)` — cria bolha no log (timestamp fixo "10:48").
- `resetHealthPatientPreview()` — limpa, mostra form de CPF e envia a saudação.
- `unlockHealthPatientPreview(cpf)` — valida o CPF contra `healthPatientPreviewPatients`; se não achar, orienta usar o CPF de teste **12345678900**; se achar, simula verificação por SMS/e-mail e habilita as opções.
- `runHealthPatientPreviewFlow(flow)` — roteiros pré-escritos:
  - `questions` — dúvida sobre último exame → resposta com base no histórico + disclaimer ("para diagnóstico consulte seu médico").
  - `exams` — paciente envia `exame-laboratorial.pdf` → agente confirma atualização do histórico.
  - `renewal` — pedido de encaixe → agente reforça que "o encaixe apenas agenda; quem decide é o médico" → oferece dois horários → confirma envio à agenda.

**Dados mock:**
- `healthPatientPreviewPatients` ([app.js:18236](app.js)) — 3 CPFs: 12345678900 (Ana Beatriz Lima), 98765432100 (Carlos Eduardo Nunes), 45678912300 (Marina Costa Rocha).
- `healthPatientSharePatients` ([app.js:18241](app.js)) — 5 contatos.

> **Integrações** (`#/dashboard/health/integrations`) reaproveitam a página geral
> `page-integrations-apis`; um botão "voltar" específico só aparece nessa rota.

---

## 6. Subseção: Atendimento

**Rota:** `#/dashboard/health/service` · **Páginas:** `page-health-service`,
`page-health-service-patient` ([index.html:9179](index.html))

**Propósito.** Registro e consulta de atendimentos. O operador inicia um
atendimento carregando o paciente por CPF; a tela de histórico médico reúne
resumo clínico, exames recentes, um auxiliar de IA restrito ao histórico e uma
linha do tempo clínica interativa.

### Elementos de UI
- **Lista de atendimentos** (`page-health-service`):
  - Botão "Iniciar atendimento" (`data-health-service-start`).
  - Filtros: busca por nome + menu de período (modos "Período" e "Data específica").
  - Tabela `healthServiceTable` (Nome / Plano / Data e hora / Ações), preenchida por JS.
- **Histórico médico** (`page-health-service-patient`):
  - *Resumo clínico* — perfil, resumo (última consulta, medicamentos, exames) e "Exames recentes" agrupados (Laboratoriais / Imagem).
  - *Auxiliar médico* — chat restrito ao histórico do paciente.
  - *Linha do tempo* — gráfico interativo com 8 tipos de evento (plano, consultas, exames, diagnósticos, internações, cirurgias, medicamentos, atendimento atual), filtros por ano/tipo e zoom.

### Lógica JS — `initHealthServiceControls()` ([app.js:19628](app.js))
- No init: `renderHealthServiceAttendanceTable()`, `renderHealthServiceTimelineYearOptions()`, `syncHealthServiceTimelineFilterOptions()`, `renderHealthServiceTimeline()`.
- Liga iniciar/encerrar atendimento, ditado, busca e o menu de período.
- `getHealthServicePatientByCpf(cpf)` ([app.js:18833](app.js)) — busca com fallback para Ana Beatriz Lima.

**Dados mock:**
- `healthServicePatientRecords` ([app.js:18248](app.js)) — 3 pacientes por CPF.
- `healthServiceAttendanceRecords` ([app.js:18271](app.js)) — 3 atendimentos (alimentam a tabela).
- `healthServiceExamRecords` ([app.js:18294](app.js)) — exames por id (metabolic-panel, blood-count, abdominal-ultrasound) com resultado, laudo e linhas marcador/referência/status.
- `healthServiceTimelineEvents` ([app.js:18368](app.js)) — eventos clínicos com `kind`, datas, ícone, resumo e detalhes.

---

## 7. Subseção: Agenda

**Rota:** `#/dashboard/health/agenda` · **Página:** `page-health-agenda`
([index.html:9437](index.html))

**Propósito.** Agenda operacional do médico — consultas, retornos e janelas de
encaixe. Exibe a fila de encaixes para renovação (originados pelo Agente do
paciente) e um calendário semanal por horário/status/modalidade, com ajustes de
dias, horários e planos aceitos.

### Elementos de UI
- Botão de ajustes (`openHealthAgendaSettings`) → modal `healthAgendaSettingsModal`
  (dias de atendimento `doctor_weekdays` seg–sex marcados, horários e planos aceitos).
- Card **"Encaixes para renovação"** — kicker "Notificações", contador
  "3 pendentes", lista `data-health-agenda-renewal-list` (populada por JS).
- Board **"Agenda semanal"** — legenda (Consulta / Encaixe), container
  `healthAgendaCalendar`, navegação (semana anterior/próxima, "Hoje"), título
  "13 - 19 de jul. de 2026", switch de visualização (Dia/Semana/Mês/Lista) e uma
  grade seg–dom com eventos exemplo `is-consult` / `is-return`.

### Lógica JS (a partir de [app.js:22955](app.js))
- `healthAgendaRenewalQueue` ([app.js:22955](app.js)) — fila renderizada
  mostrando os 3 primeiros itens (`.slice(0, 3)`); aprovar/recusar remove o item
  (`splice`).
- `AGENDA_WEEKDAY_DEFS` ([app.js:22988](app.js)) — mapeia value/idx/label dos dias.
- Helpers de slot: `formatAgendaSlotDuration`, `clampAgendaAppointmentMinutes`
  (15–30 min), `addAgendaMinutesToIso`.

### Dados mock
`healthAgendaRenewalQueue` ([app.js:22955](app.js)) — 5 pacientes com `start`/`end`
ISO (Ana Beatriz Lima, Carlos Eduardo Nunes, Marina Costa Rocha, Paulo Henrique
Alves, Luciana Martins), mas o card exibe só "3 pendentes".

> Os eventos do calendário semanal são **HTML estático**; apenas a fila de
> encaixes é dinâmica.

---

## 8. Subseção: Prestação de contas

**Rota:** `#/dashboard/health/accountability` · **Páginas:**
`page-health-accountability`, `page-health-accountability-results`
([index.html:9672](index.html)) · **Lógica:** `initHealthAccountabilityWorkflow()`
([app.js:15370](app.js)–[16175](app.js))

**Propósito.** Auditoria documental de contas hospitalares. O operador envia um
PDF de pacote hospitalar; o sistema classifica as páginas por tipo de documento,
resume cada documento, consolida a conta analítica e estima a **chance de glosa**
(risco de o convênio recusar a cobrança), justificando com uma auditoria de IA
baseada em critérios configuráveis.

### Fluxo do usuário
1. **Iniciar prestação** → modal `healthAccountabilityModal`: upload de PDF + select de Hospital + identificação do operador.
2. **Processar** → barra de progresso simulada (12 → 38 → 68 → 88 → 100%).
3. O sistema gera o resultado, insere no topo do histórico (`records.unshift`) e navega para a página de resultado.

### Página de histórico
- Filtros: busca livre + grupos **Hospital**, **Risco de glosa** (Alto/Médio/Baixo) e **Classificação**.
- Tabela `healthAccountabilityHistoryTable` (Arquivo / Hospital / Operador / Classificação / Processado em / Risco de glosa / Ações). 3 linhas iniciais com chips `glosa-chip--high/medium/low`.

### Página de resultado
- Resumo (arquivo, hospital, operador, páginas, documentos) + card lateral **"Chance de glosa"** (valor + chip de risco).
- **Auditoria de IA** (colapsável): resumo + lista de achados por documento.
- **Documentos por página** (Página / Categoria / Confiança / Resumo).
- **Resumo detalhado por documento** (cards).
- **Resumo da conta analítica** (Indicador / Valor) — oculto se não houver conta.

### Peças-chave da lógica
- **`documentCatalog`** ([app.js:15412](app.js)) — 6 tipos, cada um com `key` / `label` / `canonical` / `tokens`:
  Conta analítica, Descrição cirúrgica, Folha anestésica, Pré-anestésica, Endoscopia, Outro exame. Os `tokens` alimentam a inferência por nome de arquivo/hospital.
- **`initialRecords`** ([app.js:15421](app.js)) — 3 prestações-semente com `pages`, `documents`, `accountSummary`, `audit` e `glosaChance` (68 / 41 / 12).
- **Chance de glosa** — `getGlosaRisk(chance)` ([app.js:15661](app.js)): **≥60 Alto · ≥30 Médio · <30 Baixo** (clamp 0–100). `renderGlosaRiskChip` monta o chip.
- **Auditoria de IA** — `aiAuditReasonByDoc` ([app.js:15788](app.js)) associa cada tipo de documento a um motivo de glosa (ex.: Folha anestésica → "faltam horários de início/fim ou assinatura do anestesista"). `renderAiAudit(result)` ([app.js:15796](app.js)) calcula os achados: quanto maior a chance, mais critérios marcados como *fail/warn*.
- **Processamento mock** — handler do botão ([app.js:16121](app.js)):
  - `inferDocumentTypes(file, hospital)` ([app.js:15922](app.js)) — detecta tipos pelos tokens; regras de coerência (folha→pré-anestésica; descrição→conta).
  - `createAccountSummary` ([app.js:15935](app.js)) — indicadores financeiros a partir de um *seed* (só se houver Conta analítica).
  - `createMockResult` ([app.js:15950](app.js)) — páginas com confiança decrescente (96 − 5·i, mínimo 72%); **`glosaChance = round(clamp(5..95, (100 − confiança média) + (needsReview ? 12 : 0)))`**.
- **Download de relatório** — `buildResultPdfBlob` ([app.js:16005](app.js)) gera um PDF válido montado manualmente (objetos + xref), sem biblioteca.

### Ajustes de prestação (modal `healthHospitalsModal`)
3 abas: **Base de hospitais**, **Tipos de documento** e **Regras/critérios de
auditoria** (gerais ou por tipo de documento). Alimenta o select de hospitais do
modal de nova prestação.

> **Exemplo (1ª prestação-semente):** `guia-intercambio-10482.pdf`, hospital
> HMoinhos, operador 48291, 4 documentos, conta R$ 18.742,35 / 44 itens,
> glosa **68% (Alto)**.

---

## 9. Subseção: Leitura de exames

**Rota:** `#/dashboard/health/exam-reading` · **Páginas:**
`page-health-exam-reading`, `page-health-exam-reading-results`
([index.html:10075](index.html)) · **Lógica:** `initHealthExamReadingWorkflow()`
([app.js:16177](app.js)–[16603](app.js))

**Propósito.** Extrair automaticamente os códigos/mnemônicos de exames a partir
de um arquivo (PDF/PNG/JPG), listando código + nome padrão, com busca, cópia
(individual e em massa) e exportação (CSV/PDF). Objetivo de negócio: agilizar o
lançamento de exames em sistemas externos (menção a Pixeon/Oracle).

### Fluxo do usuário
1. **Iniciar leitura** → modal `healthExamReadingModal`: dropzone (`.pdf,.png,.jpg,.jpeg`) + "Número do operador" (usado junto ao ID Pixeon).
2. **Processar** → converte o arquivo para dataURL (base64), aguarda ~1200ms e mostra o resultado.
3. Resultado: tabela Código / Nome / Ações, com busca e "Copiar todos".

> Botão **"Gerar PDF teste"** cria um PDF de exemplo (`buildTestPdfBlob`) já com mnemônicos, seleciona-o e faz download — útil para testar o fluxo sem um arquivo real.

### Peças-chave da lógica
- Extensões válidas: `pdf, png, jpg, jpeg` ([app.js:16205](app.js)).
- **`mockMnemonics`** ([app.js:16206](app.js)) — os 6 códigos "extraídos" fixos: HEM, HGB, HTC, LEU, PLAQ, GLI.
- Processamento — handler ([app.js:16489](app.js)): valida arquivo + operador (`/^\d{2,}$/`), chama `readFileAsDataUrl` (conversão **real** para base64, mas o conteúdo é ignorado), e sempre define `currentMnemonics = mockMnemonics`.
- Cópia: individual (`data-health-exam-copy-result`) e "Copiar todos" (códigos separados por `\n`), via `copyTextToClipboard` + `showAppToast`.
- Exportação: `downloadResultsCsvReport` (CSV `código;nome`) e `buildExamResultsPdfBlob`/`downloadResultsPdfReport` (PDF montado manualmente).

### Bases de dados mock
- **`healthExamMnemonicBase`** ([app.js:2](app.js)) — dicionário de 12 códigos → nomes (HEM, HGB, HTC, LEU, PLAQ, GLI, CRE, URE, TGO, RXTO, OBS, LAU). Resolve os nomes dos códigos guardados nas linhas de histórico.
- **`healthExamMnemonicSynonyms`** ([app.js:18](app.js)) — sinônimos por código (ex.: HEM → Hemograma, HMG, CBC).
- **`mockMnemonics`** ([app.js:16206](app.js)) — os 6 códigos "extraídos" fixos.
- **Base de mnemônicos** (modal `healthMnemonicsModal`) — importação de CSV (`código, nome, sinônimos` separados por `;`), download de modelo e tabela.

---

## 10. Notas técnicas transversais

- **Tudo é simulado.** "Extração", "classificação" e "OCR" usam dados mock +
  `wait(ms)` + barras de progresso. O único processamento real de arquivo é
  `readFileAsDataUrl` (Leitura de exames), que converte para base64 mas **ignora
  o conteúdo** e retorna sempre `mockMnemonics`.
- **PDFs de download** (prestação e leitura) são gerados no client montando a
  estrutura PDF na mão (`%PDF-1.4`, objetos, xref) — sem biblioteca externa.
- **Gráficos** usam Chart.js (`window.Chart`), criados/destruídos conforme a rota
  ativa para evitar vazamento de instâncias.
- **Helpers globais** (fora do escopo de saúde): `showAppToast` (toasts),
  `copyTextToClipboard` (cópia), `escapeHtmlWes` (escape de HTML).
- **Persistência:** não há. Registros criados numa sessão (nova prestação, nova
  leitura) vivem apenas em memória (arrays `records` / histórico) e se perdem ao
  recarregar a página.
- **Classes de estilo relevantes:** `health-*`, `glosa-chip--high/medium/low`,
  `health-ai-audit-*` em [styles.css](styles.css).
