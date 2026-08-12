# Administração

**Menu:** "Administração" (`data-menu="administration"`, [index.html:483](../index.html))
· **Voltar ao índice:** [README](README.md)

Submenu `#submenu-administration` com 4 itens: **Auditoria** (`#/dashboard/audit`),
**Conexões** (`#/dashboard/mcps`), **Estrutura e Pessoas** (`#/dashboard/people-management`),
**Habilidades** (`#/dashboard/skills`).

> **Acesso:** a seção inteira só aparece para perfis com `showAdministration`
> (`adm-wes`, `cedae`). O usuário comum (`user-cedae`) não a vê; rotas de admin
> acessadas por URL redirecionam para `#/dashboard` ([app.js:21969](../app.js)).
> Ver [Painel · Perfis de acesso](painel.md).

---

## 1. Auditoria

**Rota:** `#/dashboard/audit` · **Página:** `page-agent-history` ([index.html:7594](../index.html))

**Propósito.** Central única que combina **ações dos usuários** (criar/editar/apagar)
e **uso dos agentes** (execuções, tokens, custo, conversas).

> Há **duas páginas** no HTML: `page-agent-history` (roteada) e `page-audit`
> ([index.html:7331](../index.html), **legada não roteada**), cujo conteúdo é
> **movido em runtime** para a aba "Ações dos usuários" ([app.js:9648](../app.js)).

### Abas
- **Ações dos usuários** — busca por e-mail/IP, filtros Tipo (Criar/Editar/Apagar) e Período; tabela `.audit-table` (Usuário / Data / Ação / IP / Ações); modal de detalhe (item afetado, o que mudou). **12 linhas mock** ([index.html:7405](../index.html)).
- **Uso dos agentes** — busca, filtros numéricos (Tokens, Custo USD/BRL) e Período; toggle **"Versão interna" / "Versão do cliente"** (oculta tokens/custos); tabela `#agentHistoryTable`; modais de conversa e de detalhes (arquivos de conhecimento usados).

### Lógica JS
- Merge das abas e paginação do legado: [app.js:9648](../app.js), `applyAuditTableFilters` ([app.js:9726](../app.js)).
- Uso dos agentes: `applyAgentHistoryFilters` ([app.js:17504](../app.js)), `syncAgentHistoryAudienceMode` ([app.js:17465](../app.js)), `renderAgentHistoryTable` ([app.js:17628](../app.js)).
- **Mock**: `AGENT_HISTORY_ITEMS` ([app.js:17305](../app.js)) — 4 registros com `knowledgeFiles[]`, `conversation[]`, `sourceType`.

---

## 2. Conexões (MCPs)

**Rota:** `#/dashboard/mcps` · **Página:** `page-mcps` ([index.html:6476](../index.html))

**Propósito.** "Conexões" = servidores **MCP (Model Context Protocol)** e fontes de
dados que dão ferramentas aos agentes (Google Drive, GitHub, Slack, PostgreSQL…).

**UI**: busca, toggle grade/lista, "Adicionar nova conexão"; `#mcpsGrid` (cards) e
`#mcpsTable` (Conexão / Descrição / Status / Atualizado / Ações). Modais:
`mcpConnectionModal` (editar/desconectar), `mcpAuthModal` (fluxo de auth mock) e o
modal de criação (tipos de auth: bearer/token, api-key, basic, none).

**Lógica JS** (bloco [app.js:1818](../app.js)–2400):
- Persistência em localStorage (`mcpsConnectionsState`, `mcpsCustomConnections`).
- `runMcpConnectionProvisionFlow` ([app.js:2191](../app.js)) — 4 passos animados (teste → handshake → descoberta de ferramentas → armazenamento).
- `renderMcpConnections` ([app.js:2278](../app.js)) — filtra e monta cards+linhas.

**Mock**: `MCP_CONNECTIONS_CATALOG` ([app.js:791](../app.js)) — **21 conexões**; conectadas por padrão (Google Drive, Gmail, GitHub, Slack, Calendar, Notion, Jira, AWS, Figma), demais "Disponíveis". Conexões criadas pelo usuário **persistem** (`isCustom`).

---

## 3. Estrutura e Pessoas

**Rota de entrada:** `#/dashboard/people-management` → `page-organizations`. Todas
as páginas compartilham o título "Estrutura e Pessoas" e a barra de abas:
**Organizações · Empresas · Setores · Usuários · Funções**.

> **Terminologia:** na UI "Setores" = **environment** no código
> (`page-environments`, rota `environments`). Modelo conceitual documentado em
> [estrutura-organizacao-empresa-setores-usuarios-funcoes.txt](../estrutura-organizacao-empresa-setores-usuarios-funcoes.txt).

### Modelo conceitual
Hierarquia: **Organização → Empresa → Setor → {Projetos, Agentes, Usuários,
Auditoria}**; e **Usuário → {Função, Organização, Empresa atual, Setores permitidos}**.
- **Organização** — nível mais alto (cliente/grupo). ADM WES alterna organizações; demais ficam restritos.
- **Empresa** — divisão operacional (opcional). Existe "empresa atual" + "Alternar empresa".
- **Setor** — operação interna (Marketing, Financeiro, Operações, RH).
- **Usuário** — acesso individual vinculado a org/empresas/setores/funções.
- **Função** — permissões (espelha `organizationAccessProfiles`).

### Páginas

| Página | Rota | Conteúdo | Mock |
|--------|------|----------|------|
| **Organizações** ([index.html:7776](../index.html)) | `/organizations` | Tabela (Organização / ADM / Empresas / Setores / Usuários / Status), modal de detalhe/edição | ADM Cliente (`cedae`), Grupo AVAS (`avas-group`) |
| **Empresas** ([index.html:7921](../index.html)) | `/companies` | "Empresa atual", tabela + modal (usuários da empresa) | AVAS Energia, TechCorp Brasil, Águas Rio, CEDAE Saneamento |
| **Setores** ([index.html:7058](../index.html)) | `/environments` | Seletor de empresa, tabela (+ Projetos/Agentes/Usuários), modal editar setor | Operações, Financeiro, Marketing, RH |
| **Usuários** ([index.html:6101](../index.html)) | `/users` | Busca, filtros Status/Função, tabela com card de permissões | WES ADMIN, Alfeu Vinicius Souza |
| **Funções** ([index.html:6247](../index.html)) | `/roles` | Tabela (Função / Descrição / Permissões / Usuários), modal | Administrador (36 perms), Superusuário, Usuário, Visualizador |

**Lógica JS**: majoritariamente HTML estático + binds. Organizações: `openOrganizationDetailsModal` ([app.js:7202](../app.js)); Empresas: `openCompanyUsersModal` ([app.js:7664](../app.js)); Setores: `openEnvironmentModal` ([app.js:9256](../app.js)), detalhes mock `structureSectorDetailsByCode` ([app.js:6863](../app.js)); Funções: `openRolesModal` ([app.js:5643](../app.js)). Escopo por perfil aplicado em `applyOrganizationAccessControls` ([app.js:21922](../app.js)).

> `page-organization` ([index.html:8159](../index.html), "plano/faturamento/chaves de
> API") **não está roteada** (entrada comentada). O detalhe de organização usado
> hoje é o **modal** `organizationDetailsModal`.

---

## 4. Habilidades

**Rota:** `#/dashboard/skills` · **Página:** `page-skills` ([index.html:6348](../index.html))

**Propósito.** "Habilidades" (skills) são capacidades/ferramentas reutilizáveis
(empacotadas em `.zip` ou `.md`) cadastradas no catálogo e usadas pelos agentes
(também aparecem no seletor de skills do [chat do agente](agentes.md)).

**UI**: "Adicionar nova habilidade", busca, tabela `#skillsTable` (Habilidade /
Descrição / Status / Atualizado / Ações). Modal `skillModal`: nome, descrição,
**upload** (`.zip`/`.md`), status Ativa/Inativa.

**Lógica JS** (bloco [app.js:6434](../app.js)–6800): `openSkillDialog`, validação
(exige nome + arquivo), submit cria/edita linha na tabela.

**Mock**: 2 habilidades estáticas — **CEP** e **Clima**. Novas habilidades vão só
para o DOM (não persistem).
