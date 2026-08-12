# WES Hub360 — Documentação completa do protótipo

Documento único de referência com a explicação de **todas as seções** do
protótipo WES Hub360.

> **Natureza do protótipo.** Aplicação web **estática** (HTML/CSS/JS puro), **sem
> backend**. Roteamento por *hash* (`#/dashboard/...`). Toda "IA", "OCR",
> "validação" e "processamento" é **simulada** no cliente (dados mock +
> `setTimeout`/barras de progresso). Chamadas a `wesApiFetch` só operam se houver
> uma API configurada; sem ela, a UI cai nos mocks.

**Arquivos-fonte** (raiz do repositório)
- [index.html](index.html) — markup de todas as páginas e modais.
- [app.js](app.js) — lógica, dados mock, roteamento (~23,6k linhas).
- [agents-environment-ui.js](agents-environment-ui.js) — camada de setores/ambientes dos Agentes.
- [auth.js](auth.js) — login e sessão (mock).
- [styles.css](styles.css) — estilos.

---

## Índice

1. [Visão geral e arquitetura](#1-visão-geral-e-arquitetura)
2. [Painel, Login e Modelo de Acesso](#2-painel-login-e-modelo-de-acesso)
3. [Agentes](#3-agentes)
4. [Máquinas virtuais](#4-máquinas-virtuais)
5. [Fluxos de Trabalho](#5-fluxos-de-trabalho)
6. [Atendimento dinâmico](#6-atendimento-dinâmico)
7. [Integrações](#7-integrações)
8. [Saúde](#8-saúde)
9. [Administração](#9-administração)
10. [Persistência e simulações](#10-persistência-e-simulações)

---

## 1. Visão geral e arquitetura

O WES Hub360 é uma plataforma (protótipo) que reúne automação de processos,
agentes de IA, atendimento multicanal e um módulo vertical de Saúde. As seções de
topo, acessíveis pelo menu lateral, são:

| Seção | Rota base | O que resolve |
|-------|-----------|----------------|
| **Painel** | `#/dashboard` | Home, login, perfis de acesso e páginas de conta. |
| **Agentes** | `#/dashboard/agents` | Criar/gerir agentes de IA, conversar (texto/voz), organizar por setor/projeto. |
| **Máquinas virtuais** | `#/dashboard/vm-monitoring` | Monitorar a frota de VMs por organização. |
| **Fluxos de Trabalho** | `#/dashboard/automations` | Automações (scripts), análise de documentos e processos/BPMN. |
| **Atendimento dinâmico** | `#/dashboard/campaigns` | Campanhas, canais (Telegram), fluxos híbridos e mensageria por voz. |
| **Integrações** | `#/dashboard/integrations` | Documentação e conectores/API. |
| **Saúde** | `#/dashboard/health/*` | Agente do paciente, atendimento, agenda, prestação de contas, leitura de exames. |
| **Administração** | `#/dashboard/audit` | Auditoria, conexões (MCP), estrutura e pessoas, habilidades. |

### Roteamento
- `routeMap` ([app.js:21479](app.js)) mapeia cada hash → id de página; `sectionMap` ([app.js:21536](app.js)) mapeia hash → título de seção.
- `updateActivePage()` ([app.js:22053](app.js)) é o router central, chamado por `auth.js` a cada `hashchange`; aplica o controle de acesso antes de ativar a página.

---

## 2. Painel, Login e Modelo de Acesso

**Menu:** "Painel" (`#/dashboard`)

Base do protótipo: fluxo de login (mock), perfis de acesso que controlam a
visibilidade das seções, a home do Painel e as páginas de conta.

> **Sem backend.** "Autenticar" = navegar por hashes. Persistência: **sessionStorage**
> para sessão/seleções; **localStorage** apenas para `wes_dashboard_api_base_last`,
> `dashboardQuickActionsSelection` e chaves de MCP.

### 2.1 Autenticação / Login ([auth.js](auth.js))
Telas públicas alternadas por CSS. `syncPublicRoute()` ([auth.js:97](auth.js))
decide entre chat standalone, tela pública ou app.

- **Sessão demo (mock)** — `ensureDemoSession()` ([auth.js:87](auth.js)): **qualquer** acesso cria o usuário demo `admin@1wes.com` / "Alfeu Vinicius Souza", independentemente do que foi digitado.
- **Telas** ([index.html](index.html)): Hero "Automação Simplificada" ([index.html:36](index.html)); Login "Bem-vindo de Volta" com campos **pré-preenchidos** (`admin@1wes.com` / `12345678`) — o submit **não valida** e vai para `#/select-organization`; "Selecione uma organização" (3 cards: `adm-wes`, `cedae`, `user-cedae`); "Selecione uma empresa"; modal "Criar empresa/organização".

### 2.2 Perfis de acesso ([app.js:21605](app.js))
`getSelectedOrganizationAccess()` ([app.js:21635](app.js)) lê o perfil gravado;
**fallback = `adm-wes`**.

| id | Nome | Administração | Escopo | Gerencia orgs | Gerencia empresas | Troca de org |
|----|------|:---:|:---:|:---:|:---:|:---:|
| `adm-wes` | ADM WES (super-admin) | ✔ | `all` | ✔ | ✔ | ✔ |
| `cedae` | ADM Cliente | ✔ | `cedae` | ✗ | ✔ | ✗ |
| `user-cedae` | Usuário Cliente | ✗ | `cedae` | ✗ | ✗ | ✗ |

`applyOrganizationAccessControls(routeKey)` ([app.js:21922](app.js)) é a função
central: grava datasets de escopo no `<body>`, aplica visibilidade do grupo
Administração e **bloqueia rotas** de admin para perfis sem permissão. Empresas
mock: `AVAS Energia`/`TechCorp Brasil` (org `avas-group`), `Águas Rio`/`CEDAE
Saneamento` (org `cedae`).

### 2.3 Home do Painel — `page-dashboard` ([index.html:614](index.html))
Três variantes na mesma página:
1. **`#dashboardViewDefault`** — visão admin "zerada" (stat-cards, atividade recente, estatísticas de execução, card de VMs, "Insights de IA" estáticos).
2. **`#dashboardCommonHome`** — home do usuário comum: 4 `dashboard-navigation-card` (Agentes, Fluxos de Trabalho, Atendimento dinâmico, Saúde).
3. **`#dashboardViewDetail`** — visão admin "com dados" mock.

**Ações rápidas** (persistidas em localStorage): catálogo `DASHBOARD_QUICK_ACTIONS_CATALOG`
([app.js:767](app.js), 14 ações, limite 4), render por `renderDashboardQuickActions()`
([app.js:3313](app.js)).

### 2.4 Páginas de conta
- **Perfil** — `#/dashboard/profile` ([index.html:10451](index.html)): alterar e-mail/senha com verificação por código (simulada; qualquer 6 dígitos é aceito). Bloco `if (profilePage)` ([app.js:21133](app.js)).
- **Configurações** — `#/dashboard/settings` ([index.html:10590](index.html)): notificações, "Sessões ativas" e "Log de segurança" (mock). Botão salvar não persiste.
- **Painel de histórico** — `#/dashboard/history` ([index.html:6905](index.html)): conversas na hierarquia **Ambiente > Contexto > Conversas**, isolado por organização. Estático.

---

## 3. Agentes

**Rota:** `#/dashboard/agents` (e `#/dashboard/agents/project/<slug>`) · **Página:**
`page-agents` ([index.html:2345](index.html)–4087)

Seção central do produto. Um **agente** é um assistente de IA configurável (nome,
descrição, prompt de sistema, conhecimento interno/RAG, voz/TTS), pertencente a um
**setor/ambiente** e, opcionalmente, a um **projeto**.

### 3.1 Modelo de escopo — `HUB_SCOPE` ([app.js:14622](app.js))
Objeto global `{ [orgSlug]: { id, name, contexts[], projects[] } }`. Normalmente de
`GET /me/scope`; sem API, derivado do markup (`ensureHubScopeFromStaticMarkup`
[app.js:14656](app.js)) ou dos agentes (`ensureHubScopeFromAgents`
[app.js:18041](app.js)). `hubOrgId` = setor ativo; `hubContextId` vazio = todos os
projetos.

> A UI renomeia "Organização/Contexto" → "Setor/Projeto" via
> [agents-environment-ui.js](agents-environment-ui.js), mas o código legado ainda
> usa `hubOrg`/`hubContext`/`agents-context-block` internamente.

### 3.2 Estrutura da página
Cabeçalho com botão split **"Novo"** (Criar projeto / Criar agente); breadcrumb de
projeto; bloco de projetos (carrossel de cards); toolbar (busca + filtros Setor/RAG/
Visibilidade); lista "Todos os agentes" (`agentsAllAgentsTable`) e blocos por projeto.

Agentes mock (5):

| Nome | ID | Setor/Contexto | RAG | Visibilidade | Voz |
|------|----|----------------|-----|--------------|-----|
| Atlas Core | AGT-1024 | avas/backoffice | Sim | Público | ✔ |
| Nimbus Ops | AGT-2077 | avas/backoffice | Não | Privado | – |
| Pulse Finance | AGT-3310 | avas/financeiro | Sim | Público | – |
| Sentinel API | AGT-8841 | techcorp/api | Sim | Público | – |
| Stream ETL | AGT-9902 | techcorp/pipeline | Não | Privado | – |

### 3.3 Chat do agente — `agentChatModal` ([index.html:3483](index.html))
Sidebar de histórico + área principal, com **modo texto** e **modo voz** (`voice-mode`:
orb, transcrição, seletor de voz Francisca/Antonio/Brenda/Donato, sensibilidade de
interrupção). Funções: `buildAgentChatPayloadFromRow` ([app.js:10546](app.js)),
`applyAgentConversationMode` ([app.js:10583](app.js)),
`openAgentChatModalFromToggle` ([app.js:10696](app.js)),
`openAgentChatFromRouteParam` ([app.js:10747](app.js), link público standalone). Em
modo voz o envio simula fala + resposta após 1200 ms. **Skills do chat**:
`CHAT_SKILL_CATALOG` ([app.js:1488](app.js)) — 8 skills mock.

### 3.4 Criar / editar agente — `agentModal` ([index.html:2926](index.html))
Campos: nome, descrição, **prompt do sistema** (+ "Melhorar com IA"), switch **RAG**,
setor, projeto e card **Resposta por voz (TTS)**. Lógica: `improveAgentSystemPrompt()`
([app.js:10108](app.js), mock), `setAgentModalMode()` ([app.js:10140](app.js)),
submit ([app.js:10340](app.js)) → `POST /agents` / `PATCH /agents/{id}`. Excluir:
`deleteAgentWithConfirmation()` ([app.js:19992](app.js)). Publicar: `agentShareModal`
(link `#/agent-chat?agent=<id>`). Criar projeto: `projectModal` ([index.html:3199](index.html)).

### 3.5 `agents-environment-ui.js`
Camada (~1184 linhas) que renomeia Organização/Contexto → Setor/Projeto e adiciona
seleção multi-setor; **substitui** `refreshAgentsTableFromApi` por
`refreshAgentsForSelectedEnvironments()`; injeta o select "Setor" nos modais; trata
edição/exclusão de projeto; faz refresh silencioso preservando scroll/foco.

### 3.6 Agente público de saúde
`HEALTH_PATIENT_AGENT_PUBLIC_ID = 'agente-do-paciente'` ([app.js:18190](app.js)).
**Não aparece na lista**; no chat, `applyAgentChatThreadForAgent()`
([app.js:18224](app.js)) troca a thread para o roteiro do paciente. Ver §8.2.

---

## 4. Máquinas virtuais

**Rota:** `#/dashboard/vm-monitoring` · **Página:** `page-vm-monitoring` ([index.html:1048](index.html))

**Propósito.** Acompanhar saúde, consumo e disponibilidade da frota de VMs por
organização.

**UI**: filtro de organização (`vmOrganizationFilter`: all / cedae / avas-group);
painel de métricas da frota (4 fleet-cards CPU/Memória/Disco/Rede com barras);
tendência 24h; acordeão "Máquinas" (grade de `vm-machine-card` com `data-vm-*`).

**Lógica JS**: `updateVmFleetMetrics()` ([app.js:17123](app.js)) — **núcleo**:
calcula médias sobre os cards visíveis; `syncVmOrganizationFilter()`
([app.js:17157](app.js)); `applyVmOrganizationAccessScope()` ([app.js:17180](app.js)).

**Mock** — 4 VMs ([index.html:1122](index.html)):

| Máquina | Org / Ambiente | CPU | Mem | Disco | Rede |
|---------|----------------|-----|-----|-------|------|
| `04d1f883…` | ADM Cliente / Produção | 18 | 46 | 32 | 2 |
| `vm-api-02` | ADM Cliente / Produção | 74 | 68 | 57 | 8 |
| `vm-worker-07` | Grupo AVAS / Operações | 41 | 52 | 39 | 5 |
| `vm-db-01` | Grupo AVAS / Banco de dados | 63 | 81 | 91 | 11 |

> As métricas do painel são **derivadas** desses `data-*`; os valores no HTML são placeholders sobrescritos.

---

## 5. Fluxos de Trabalho

**Menu:** "Fluxos de Trabalho" (`data-menu="automation"`, submenu [index.html:407](index.html)).
Itens visíveis: Automações, Análise de documentos, Processos. Ocultos/comentados:
Agendamentos, Arquivos de entrada, Credenciais, Executores, Pacotes.

### 5.1 Automações
**Rotas:** `#/dashboard/automations` (`page-automations`, [index.html:1157](index.html))
e `/new` (`page-automations-create`, [index.html:1683](index.html)).

Uma automação = nome, descrição, pacote+versão, prioridade, linguagem (C#/Java/Python),
parâmetros JSON, status e código. **Lista**: 5 abas (Automações, Execuções,
Agendamento, Arquivos, Credenciais); tabela `.automations-table`. **Criação**: dados
iniciais → recursos → agendamento → **descrição + gerador de código** ("Gerar código
com IA" ou upload `.cs/.java/.py/.zip`, com histórico de versões e aprovar/reprovar).

Lógica: `createAutomationRow` ([app.js:3754](app.js)), `readAutomationFormData`
([app.js:13405](app.js)), `persistAutomationData` ([app.js:13510](app.js)).

> ⚠️ A "IA" é **mockada**: `buildAutomationMockAiDescription` ([app.js:13132](app.js)) gera texto fixo; código gerado marca `source: 'mock_ai', mocked: true`.

### 5.2 Análise de documentos
**Rota:** `#/dashboard/document-analysis` · **Página:** `page-document-analysis` ([index.html:1981](index.html))

Enviar documento (PDF/imagem) para OCR, classificação e extração para JSON. **Tudo
simulado** (`isMockMode = true` [app.js:15055](app.js); ~10 s de progresso). UI:
dropzone; configurações (classes esperadas, limiar, idioma OCR, pré-processamento);
card de resultado (Classificação / OCR / Extração / Metadados) + "Exportar JSON".

Lógica: `initDocumentAnalysisValidationPage()` ([app.js:14940](app.js)). **Modo
exame vs documento**: `isExamMode` ([app.js:14944](app.js)) — **o mesmo código serve
esta página e a Leitura de exames de Saúde**; `buildMockResult()`
([app.js:15160](app.js)) devolve payload clínico (Hemograma) ou genérico.

### 5.3 Processos / BPMN
**Rotas:** `#/dashboard/bpmn` ([index.html:10427](index.html)) e `#/dashboard/fluxos`
([index.html:10439](index.html)). **Apenas placeholders "em desenvolvimento"** — sem
diagramas nem lógica.

### 5.4 Páginas ocultas / infraestrutura
Existem como rotas mas com links de menu comentados (acessíveis por URL e via abas de
Automações): **Agendamentos** (`/schedules`), **Executores** (`/executors`),
**Pacotes** (`/packages`), **Credenciais** (`/credentials`), **Arquivos de entrada**
(`/input-files`).

> **Nomenclatura**: o menu diz "Fluxos de Trabalho" (interno `data-menu="automation"`); "Processos" leva à página cujo `data-title` é "BPMN".

---

## 6. Atendimento dinâmico

**Menu:** "Atendimento dinâmico" (`data-menu="dynamic-service"`, submenu [index.html:441](index.html)).

> **Persistência:** Fluxos híbridos e operações de voz **criados pelo usuário** vão
> para localStorage (`hybridFlowsCreated`, `voiceMessagingCreated`). Campanhas e
> Canais/Telegram **não** persistem. Validações/testes são **simulações locais**.

### 6.1 Campanhas
**Rotas:** `#/dashboard/campaigns` ([index.html:4521](index.html)) e `/new` ([index.html:4585](index.html)).

Disparo em massa de mensagens por canal (Telegram/WhatsApp/SMS), com **agente de IA**
e **roteiro** com variáveis (`{{nome}}`, `{{empresa}}`…). Lista com filtro de status;
`INITIAL_CAMPAIGNS` ([app.js:4749](app.js)) — 6 campanhas (uma por status). Criação:
nome, agente, integração, roteiro (+ "Otimizar com IA"), destinatários (+ CSV),
revisão em modal. Lógica: `createCampaignRowElement` ([app.js:4876](app.js)).

### 6.2 Canais
**Rota:** `#/dashboard/channels` ([index.html:5390](index.html)).

Um "canal" é uma conexão externa. Tabela com 2 linhas mock (Telegram `@wes_hub_bot`,
WhatsApp). Modal "Qual canal conectar?" (Telegram habilitado; WhatsApp/SMS "Em breve").
- **Config do Telegram** (`/channels/telegram`, [index.html:5469](index.html)): token → "Validar conexão" → resumo → teste de envio → "Salvar e continuar". Validação **mock** (regex, `isTelegramTokenFormatValid` [app.js:3005](app.js)); conclusão `completeTelegramConfiguration` ([app.js:3090](app.js)).
- **Guia BotFather** (`/channels/telegram/botfather`, [index.html:5681](index.html)): página estática com 6 passos.

### 6.3 Fluxos híbridos
Combina **coleta por voz** + **confirmação por texto no Telegram**; o **telefone** é
o dado-chave da transição.
- **Lista** (`page-hybrid-flows`, [index.html:4753](index.html)) — storage `hybridFlowsCreated` ([app.js:761](app.js)).
- **Criação/edição** ([index.html:4886](index.html)) — dados iniciais, **campos** (editor com tipos text/phone/cpf/email/number/boolean), integrações (agente texto/voz, saudação, Telegram). `readHybridFlowFormData` ([app.js:1188](app.js)).
- **Histórico** ([index.html:8636](index.html)) e **Detalhe da sessão** ([index.html:8749](index.html), abas Resumo/Linha do tempo/Conversa).

### 6.4 Mensageria por voz
Campanhas de **chamadas automatizadas** via **Oktor**/**NVoIP**, com **modo simulação**.
- **Lista** (`page-voice-messaging`, [index.html:4088](index.html)) — storage `voiceMessagingCreated` ([app.js:762](app.js)); só `draft`/`error` editáveis.
- **Insights** ([index.html:4191](index.html)) — stat-cards + gráfico "Por horário" (`syncVoiceMessagingInsightsChart` [app.js:2504](app.js), Chart.js barras empilhadas).
- **Criação** ([index.html:4342](index.html)) — agente de voz (prévia via `speechSynthesis`), conexão (provedor, "Testar conexão" mock que alterna sucesso/erro [app.js:5430](app.js)), mensagem, destinatários.

---

## 7. Integrações

**Menu:** "Integrações" (nav-item único, [index.html:449](index.html)) → renderiza
`page-integrations-apis`.

> **Legado:** antes era submenu (Documentação + API's), agora comentado. A mesma
> página `page-integrations-apis` é reaproveitada por 3 rotas (`/integrations`,
> `/integrations/apis`, `/health/integrations`), resolvido em [app.js:22056](app.js).

### 7.1 Documentação
**Rota:** `/integrations/documentation` · **Página:** `page-integrations-docs` ([index.html:6523](index.html)).
Vitrine de 3 cards (Guias de implementação, Contratos e webhooks, Ambientes e
credenciais). **Sem lógica** — botões estáticos.

### 7.2 API's / Integrações
**Página:** `page-integrations-apis` ([index.html:6567](index.html)). 4 cards de
conectores (plano de saúde, WhatsApp Business API, agenda, integração personalizada).
Só a **Integração personalizada** tem ação: modal `healthCustomIntegrationModal`
([index.html:6664](index.html)) com chave de API mock fixa `wes_live_sk_9f3c1a7b42e8`
+ snippet. Lógica: `initHealthCustomIntegrationModal` ([app.js:23595](app.js)).

> ⚠️ O nome "API's" é enganoso: **não há geração nem revogação de tokens** — apenas uma chave mock e um snippet num modal cujo submit não salva nada.

---

## 8. Saúde

**Menu:** "Saúde" (`data-menu="health"`, submenu [index.html:466](index.html)).
Rotas `#/dashboard/health/*` → `sectionMap` "Saúde" ([app.js:21554](app.js)). Módulo
vertical com 6 subseções. No formulário de criação de organização, as subseções são
checkboxes `organization_subsections` ([index.html:312](index.html)).

### 8.1 Visão geral
**Rota:** `/health/overview` · **Página:** `page-health-overview` ([index.html:8834](index.html)).
Painel consolidado: 4 stat-cards (142 atendimentos WhatsApp; 89 consultas; 320
documentos; 214 exames) e 4 gráficos (Chart.js). Lógica `syncHealthOverviewCharts()`
([app.js:2691](app.js)). Datasets: WhatsApp `[58,49,35]`, Médicos `[28,21,16,12,8,4]`,
Prestação `[262,58]`, Exames `[412,388,351,298,254,208]`.

### 8.2 Agente do paciente
**Rota:** `/health/whatsapp` · **Páginas:** `page-health-whatsapp` (+ insights, history)
([index.html:8976](index.html)).
Agente automatizado de WhatsApp: autenticação por CPF, dúvidas sobre histórico, envio
de exames, encaixe para renovação. Painéis: fluxo, integração, compartilhar
(**+55 85 98888-1048**), simulação. **Simulação** (`healthPatientPreviewModal`):
`unlockHealthPatientPreview(cpf)` ([app.js:18634](app.js), CPF de teste `12345678900`)
e `runHealthPatientPreviewFlow(flow)` ([app.js:18649](app.js), fluxos questions/exams/
renewal). Integrações reaproveitam `page-integrations-apis` (ver §7).

### 8.3 Atendimento
**Rota:** `/health/service` · **Páginas:** `page-health-service`, `page-health-service-patient`
([index.html:9179](index.html)).
Inicia atendimento por CPF; a tela de **histórico médico** reúne resumo clínico,
exames recentes (Laboratoriais/Imagem), **auxiliar de IA** restrito ao histórico e
uma **linha do tempo clínica** interativa (8 tipos de evento, filtros por ano/tipo,
zoom). Lógica `initHealthServiceControls()` ([app.js:19628](app.js)); mocks
`healthServicePatientRecords`/`AttendanceRecords`/`ExamRecords`/`TimelineEvents`
([app.js:18248](app.js)+).

### 8.4 Agenda
**Rota:** `/health/agenda` · **Página:** `page-health-agenda` ([index.html:9437](index.html)).
Agenda operacional do médico: card **"Encaixes para renovação"** (fila
`healthAgendaRenewalQueue` [app.js:22955](app.js), 5 itens, mostra 3) + board semanal
(HTML estático) com ajustes (dias, horários, planos).

### 8.5 Prestação de contas
**Rota:** `/health/accountability` · **Páginas:** `page-health-accountability` (+ results)
([index.html:9672](index.html)) · **Lógica:** `initHealthAccountabilityWorkflow()`
([app.js:15370](app.js)–16175).
Auditoria de contas hospitalares. Upload de PDF → classifica páginas por tipo de
documento (`documentCatalog` [app.js:15412](app.js), 6 tipos) → resume → consolida a
conta → estima a **chance de glosa**. Faixas: **≥60 Alto · ≥30 Médio · <30 Baixo**
(`getGlosaRisk` [app.js:15661](app.js)). Auditoria de IA (`aiAuditReasonByDoc`
[app.js:15788](app.js)). Processamento mock (`createMockResult` [app.js:15950](app.js));
`glosaChance = round(clamp(5..95, (100 − confiança média) + (needsReview ? 12 : 0)))`.
Download de PDF montado à mão (`buildResultPdfBlob` [app.js:16005](app.js)).

### 8.6 Leitura de exames
**Rota:** `/health/exam-reading` · **Páginas:** `page-health-exam-reading` (+ results)
([index.html:10075](index.html)) · **Lógica:** `initHealthExamReadingWorkflow()`
([app.js:16177](app.js)–16603).
Extrai códigos/mnemônicos de exames de um arquivo (PDF/PNG/JPG). Upload → converte
para base64 (`readFileAsDataUrl`, **conteúdo ignorado**) → sempre retorna
`mockMnemonics` ([app.js:16206](app.js): HEM, HGB, HTC, LEU, PLAQ, GLI). Busca, cópia
individual/em massa, exportação CSV/PDF. Base `healthExamMnemonicBase` ([app.js:2](app.js)).

---

## 9. Administração

**Menu:** "Administração" (`data-menu="administration"`, [index.html:483](index.html)).
Só aparece para perfis com `showAdministration` (`adm-wes`, `cedae`); rotas de admin
sem permissão redirecionam para `#/dashboard`.

### 9.1 Auditoria
**Rota:** `/audit` · **Página:** `page-agent-history` ([index.html:7594](index.html)).
Central única de **ações dos usuários** + **uso dos agentes**. Duas abas; a página
legada `page-audit` é **movida em runtime** para a aba "Ações dos usuários"
([app.js:9648](app.js)). A aba "Uso dos agentes" tem toggle **interna/cliente** (oculta
tokens/custos). Mock: 12 linhas de ações + `AGENT_HISTORY_ITEMS` ([app.js:17305](app.js), 4 registros).

### 9.2 Conexões (MCPs)
**Rota:** `/mcps` · **Página:** `page-mcps` ([index.html:6476](index.html)).
Servidores **MCP** e fontes de dados para agentes. Cards/tabela + modais (editar,
auth, criar). Fluxo de provisão animado `runMcpConnectionProvisionFlow`
([app.js:2191](app.js)). **Persiste** em localStorage. Mock: `MCP_CONNECTIONS_CATALOG`
([app.js:791](app.js)) — 21 conexões (Google Drive, Gmail, GitHub, Slack… conectadas;
demais disponíveis).

### 9.3 Estrutura e Pessoas
**Rota de entrada:** `/people-management` → `page-organizations`. Abas: **Organizações
· Empresas · Setores · Usuários · Funções**.

> **Terminologia:** "Setores" (UI) = **environment** (código). Modelo conceitual em
> [estrutura-organizacao-empresa-setores-usuarios-funcoes.txt](estrutura-organizacao-empresa-setores-usuarios-funcoes.txt).

Hierarquia: **Organização → Empresa → Setor → {Projetos, Agentes, Usuários,
Auditoria}**; e **Usuário → {Função, Organização, Empresa atual, Setores}**.

| Página | Rota | Mock |
|--------|------|------|
| Organizações ([index.html:7776](index.html)) | `/organizations` | ADM Cliente (`cedae`), Grupo AVAS (`avas-group`) |
| Empresas ([index.html:7921](index.html)) | `/companies` | AVAS Energia, TechCorp Brasil, Águas Rio, CEDAE Saneamento |
| Setores ([index.html:7058](index.html)) | `/environments` | Operações, Financeiro, Marketing, RH |
| Usuários ([index.html:6101](index.html)) | `/users` | WES ADMIN, Alfeu Vinicius Souza |
| Funções ([index.html:6247](index.html)) | `/roles` | Administrador (36 perms), Superusuário, Usuário, Visualizador |

Majoritariamente HTML estático + binds. `page-organization` ([index.html:8159](index.html),
plano/faturamento/chaves) **não está roteada** — o detalhe usado é o modal
`organizationDetailsModal`.

### 9.4 Habilidades
**Rota:** `/skills` · **Página:** `page-skills` ([index.html:6348](index.html)).
"Habilidades" (skills) reutilizáveis por agentes (empacotadas em `.zip`/`.md`).
Tabela + modal (nome, descrição, upload, status). Lógica: bloco
[app.js:6434](app.js)–6800. Mock: **CEP** e **Clima** (novas vão só para o DOM).

---

## 10. Persistência e simulações

### O que sobrevive a um reload
- **sessionStorage** — sessão de login e organização/empresa selecionadas.
- **localStorage** — ações rápidas do dashboard, conexões MCP (`mcpsConnectionsState`,
  `mcpsCustomConnections`), fluxos híbridos (`hybridFlowsCreated`), operações de voz
  (`voiceMessagingCreated`), última base de API e flags de UI.
- **Somente DOM/memória** (perde ao recarregar) — a maioria dos registros criados:
  agentes, campanhas, canais, prestações de contas, leituras de exame, habilidades.

### O que é simulado
- **Login** não valida credenciais; qualquer acesso cria o usuário demo.
- **"API's"** (Integrações) não gera nem revoga tokens — chave mock fixa.
- **Geração de código com IA** (Automações), **OCR/extração** (Análise de documentos),
  **validação do Telegram** e **teste de conexão de voz** são mock (regex ou `setTimeout`).
- **Processos/BPMN** são apenas placeholders "em desenvolvimento".
- **Leitura de exames** converte o arquivo para base64 de verdade, mas ignora o
  conteúdo e sempre retorna os mesmos 6 mnemônicos.
- **PDFs de download** (prestação e leitura) são gerados no client montando a
  estrutura PDF na mão, sem biblioteca.

### Detalhes que podem confundir
- Na UI, **"Setores" = `environment`** no código.
- `#/dashboard/audit` e `#/dashboard/agent-history` apontam para a **mesma** página; `page-audit` é legada e absorvida como aba.
- A página de "Integrações" (`page-integrations-apis`) serve três rotas, incluindo `#/dashboard/health/integrations`.
