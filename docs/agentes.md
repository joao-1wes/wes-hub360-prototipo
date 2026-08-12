# Agentes

**Rota:** `#/dashboard/agents` (e `#/dashboard/agents/project/<slug>`) · **Página:**
`page-agents` ([index.html:2345](../index.html)–4087) · **Voltar ao índice:** [README](README.md)

Seção central do produto. Arquivos: [index.html](../index.html) (markup),
[app.js](../app.js) (lógica), [agents-environment-ui.js](../agents-environment-ui.js)
(camada de setores/ambientes) e [styles.css](../styles.css).

---

## 1. Conceito

Um **agente** é um assistente de IA configurável: nome, descrição, prompt de
sistema, conhecimento interno (RAG), voz/TTS. Pertence a um **setor/ambiente** e,
opcionalmente, a um **projeto**.

### Modelo de escopo — `HUB_SCOPE` ([app.js:14622](../app.js))
Objeto global `{ [orgSlug]: { id, name, contexts[], projects[] } }`. Normalmente
carregado de `GET /me/scope`; sem API, é derivado do markup estático
(`ensureHubScopeFromStaticMarkup` [app.js:14656](../app.js)) ou dos agentes
(`ensureHubScopeFromAgents` [app.js:18041](../app.js)).
- `hubOrgId` — setor/ambiente ativo. `hubContextId` — vazio = todos os projetos.
- Helpers: `getProjectById` ([app.js:10487](../app.js)), `getProjectBySlug` ([app.js:10493](../app.js)).

> A UI renomeia "Organização/Contexto" → "Setor/Projeto" via
> [agents-environment-ui.js](../agents-environment-ui.js), mas o código legado
> ainda usa `hubOrg`/`hubContext`/`agents-context-block` internamente.

---

## 2. Estrutura da página

- **Cabeçalho** — título + botão split **"Novo"** (`agentsCreateMenuToggle`): "Criar projeto" (`projectModal`) e "Criar agente" (`agentModal`).
- **Breadcrumb de projeto** (`agentsProjectBreadcrumb`) — visível na subrota de projeto.
- **Bloco de projetos** — acordeão "Projetos" + carrossel de `agents-project-card` (`href="#/dashboard/agents/project/<slug>"`). Mock: **avas** → `avas-operacoes`, `avas-controladoria`; **techcorp** → `techcorp-integracoes`, `techcorp-pipeline`.
- **Toolbar** — busca `agentsSearchInput` + `agentsFilterBtn` (grupos Setor / RAG / Visibilidade).
- **Lista "Todos os agentes"** (`agentsAllAgentsTable`) — colunas Nome / Descrição / ID / RAG / Setor / Visibilidade / Ações. Cada `.agents-row` traz `data-hub-org`, `data-hub-context`, `data-agents-environment`, `data-voice-enabled`. Ações por linha: editar, compartilhar link, adicionar RAG (arquivo/texto), conversar, excluir.
- **Blocos por projeto** (`agentsByOrg`) — visão detalhada ao entrar num projeto.

### Agentes mock (5)
| Nome | ID | Setor/Contexto | RAG | Visibilidade | Voz |
|------|----|----------------|-----|--------------|-----|
| Atlas Core | AGT-1024 | avas/backoffice | Sim | Público | ✔ |
| Nimbus Ops | AGT-2077 | avas/backoffice | Não | Privado | – |
| Pulse Finance | AGT-3310 | avas/financeiro | Sim | Público | – |
| Sentinel API | AGT-8841 | techcorp/api | Sim | Público | – |
| Stream ETL | AGT-9902 | techcorp/pipeline | Não | Privado | – |

### Busca / filtros / rota de projeto
- Busca: IIFE em [app.js:20504](../app.js) (marca `.agents-row--search-hide`).
- Filtros: `applyAgentsAdvancedFilters()` ([app.js:20540](../app.js)).
- Rota de projeto: `getCurrentAgentsProjectSlugFromRoute()` ([app.js:16753](../app.js)); render show/hide em [app.js:20415](../app.js).

---

## 3. Chat do agente — `agentChatModal` ([index.html:3483](../index.html))

Layout `chat-layout`: sidebar de histórico + área principal, com **modo texto** e
**modo voz** (`voice-mode`).

- **Sidebar** — histórico por contexto/projeto (`syncAgentChatHistoryScope` [app.js:11395](../app.js)), "Novo chat", renomear/excluir.
- **Modo voz** (`chatVoiceStage`) — orb, transcrição, controles (mute, iniciar/encerrar), popover com seletor de voz (Francisca/Antonio/Brenda/Donato), idioma, tipo de voz e sensibilidade de interrupção.
- **Thread + composer** — mensagens `chat-message.agent/.user`, anexos, ditar (`chat-mic`), enviar/conversar por voz.

### Funções-chave ([app.js](../app.js))
- `buildAgentChatPayloadFromRow(row)` ([app.js:10546](../app.js)) — extrai nome/id/contexto/setor/projeto da linha.
- `applyAgentConversationMode(payload)` ([app.js:10583](../app.js)) — alterna texto/voz.
- `openAgentChatModalFromToggle(button)` ([app.js:10696](../app.js)) — abre o chat a partir da linha.
- `openAgentChatFromRouteParam()` ([app.js:10747](../app.js)) — abre via `#/agent-chat?agent=` (link público standalone).
- Envio: handler `chatSendButton` ([app.js:11717](../app.js)) — em modo voz, simula fala do usuário + resposta após 1200 ms.
- **Skills do chat**: catálogo `CHAT_SKILL_CATALOG` ([app.js:1488](../app.js)) — 8 skills mock (cep, clima, cnh, veículos, cpf-cnpj, financeiro, tickets, crm); menu por agente via `renderAgentChatSkillMenu()` ([app.js:12000](../app.js)).

---

## 4. Criar / editar agente — `agentModal` ([index.html:2926](../index.html))

Campos: **Nome**, **Descrição**, **Prompt do sistema** (+ botão "Melhorar com IA"),
switch **RAG**, **Setor**, **Projeto**, e card **Resposta por voz (TTS)** (idioma,
voz + preview, playback, modo fone, perfil de mic, sensibilidade de interrupção).

### Lógica
- `improveAgentSystemPrompt()` ([app.js:10108](../app.js)) — gera prompt estruturado (mock "Melhorar com IA").
- `setAgentModalMode(mode, agent)` ([app.js:10140](../app.js)) — alterna criar/editar.
- `populateAgentModal(agent)` ([app.js:10150](../app.js)) — preenche na edição.
- **Submit** ([app.js:10340](../app.js)) — monta payload e chama `POST /agents` (criar) ou `PATCH /agents/{id}` (editar). Sem API, cai nos mocks.
- **Excluir**: `deleteAgentWithConfirmation(row)` ([app.js:19992](../app.js)) — `DELETE /agents/{id}`, trata confirmação de projetos vinculados.
- **Publicar/compartilhar**: `agentShareModal` ([index.html:3148](../index.html)) — toggle privado + link público `#/agent-chat?agent=<id>`.
- **Criar projeto**: `projectModal` ([index.html:3199](../index.html)) — nome, setor, descrição, agentes do projeto, prompt, zona de perigo.

---

## 5. `agents-environment-ui.js`

Camada (IIFE, ~1184 linhas) que **renomeia Organização/Contexto → Setor/Projeto**
e adiciona seleção multi-setor. Destaques:
- Injeta CSS próprio (prefixo `.wes-env-*`) e mantém `selectedEnvironmentSlugs` (Set).
- `refreshAgentsForSelectedEnvironments()` (~linha 404) — **substitui** `refreshAgentsTableFromApi`: 0 setores → `GET /agents`; vários → itera por `environment_id` e deduplica.
- `patchAgentModal()` / `patchProjectModal()` — injetam o select "Setor" e o bloco de agente do projeto.
- `ensureProjectEditButtons()` / `deleteProjectWithConfirmation()` — edição/exclusão de projeto.
- Refresh silencioso preservando scroll/foco (`captureUiState`/`restoreUiState`).

---

## 6. Agente público de saúde

`HEALTH_PATIENT_AGENT_PUBLIC_ID = 'agente-do-paciente'` ([app.js:18190](../app.js)),
nome "Agente do paciente". **Não aparece na lista** de agentes — tem tratamento
especial no chat: `applyAgentChatThreadForAgent()` ([app.js:18224](../app.js))
troca a thread para o roteiro do paciente (CPF → confirmação → encaixe/renovação).
Link standalone: `#/agent-chat?agent=agente-do-paciente`. Ver
[Saúde · Agente do paciente](saude/2-agente-do-paciente.md).

---

## 7. Origem dos dados

- **Agentes reais**: `GET /agents` (cache `window.__wesAgentsCache`); render por `buildAgentRowElement` ([app.js:19945](../app.js)) e `refreshAgentsTableFromApi()` ([app.js:20049](../app.js)).
- **Demo estático**: 5 agentes + 4 projetos embutidos no HTML (fallback/esqueleto).
- **Toda "IA"** (respostas, voz, RAG, "Melhorar com IA") é **simulada** no cliente; `wesApiFetch` só opera com auth/API configurada.
