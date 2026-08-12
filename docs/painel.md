# Painel, Login e Modelo de Acesso

**Menu:** "Painel" (`#/dashboard`) · **Voltar ao índice:** [README](README.md)

Este documento cobre a base do protótipo: o fluxo de login (mock), os perfis de
acesso que controlam a visibilidade das seções, a home do Painel e as páginas de
conta (Perfil, Configurações, Painel de histórico).

> **Sem backend.** "Autenticar" = navegar por hashes. O router central é
> `updateActivePage()` ([app.js:22053](../app.js)), chamado por `auth.js` a cada
> `hashchange`. Persistência: **sessionStorage** para sessão/seleções;
> **localStorage** apenas para `wes_dashboard_api_base_last`,
> `dashboardQuickActionsSelection` e chaves de MCP.

---

## 1. Autenticação / Login ([auth.js](../auth.js))

### Fluxo
Telas públicas alternadas por CSS. Mapa de rotas públicas ([auth.js:11](../auth.js)):
`''` → landing · `login` → login · `select-organization` · `select-company`.
`syncPublicRoute()` ([auth.js:97](../auth.js)) decide entre chat standalone, tela
pública ou app; ao entrar no app chama `ensureDemoSession()` + `applyUserToUI()`.

### Sessão demo (credenciais mock)
`ensureDemoSession()` ([auth.js:87](../auth.js)): **qualquer** acesso ao painel
cria automaticamente o usuário demo — `admin@1wes.com` / "Alfeu Vinicius Souza" —
independentemente do que foi digitado. O objeto de sessão `WesDashboardAuth`
([auth.js:124](../auth.js)) faz `read`/`write`/`clear`/`logout` em sessionStorage.

### Telas ([index.html](../index.html))
- **Hero "Automação Simplificada"** ([index.html:36](../index.html)) — botão "Entrar" → `#/login`.
- **"Bem-vindo de Volta" / Login** ([index.html:49](../index.html)) — form `publicLoginForm` com campos **pré-preenchidos** (`admin@1wes.com` / `12345678`). O submit ([auth.js:242](../auth.js)) só faz `preventDefault` e vai para `#/select-organization`; **não valida credenciais**.
- **"Selecione uma organização"** ([index.html:110](../index.html)) — 3 cards + "Criar organização":
  - `adm-wes` "ADM WES" → `#/dashboard`
  - `cedae` "ADM Cliente" → `#/select-company`
  - `user-cedae` "Usuário Cliente" → `#/dashboard`
  - O clique grava `wes_selected_organization_access` ([auth.js:247](../auth.js)).
- **"Selecione uma empresa"** ([index.html:163](../index.html)) — grid preenchido por `renderCompanySelectScreen()` ([app.js:21845](../app.js)).
- **Modal "Criar empresa/organização"** `createCompanyModal` — muda rótulos por contexto (`syncCreateCompanyModalCopy`, [auth.js:271](../auth.js)); no modo organização mostra o picker de seções (checkboxes hierárquicos).

---

## 2. Perfis de acesso ([app.js:21605](../app.js))

`organizationAccessProfiles` define 3 perfis. `getSelectedOrganizationAccess()`
([app.js:21635](../app.js)) lê o id gravado; **fallback = `adm-wes`**.

| id | Nome | Administração | Escopo | Gerencia organizações | Gerencia empresas | Troca de org |
|----|------|:---:|:---:|:---:|:---:|:---:|
| `adm-wes` | ADM WES (super-admin) | ✔ | `all` | ✔ | ✔ | ✔ |
| `cedae` | ADM Cliente | ✔ | `cedae` | ✗ | ✔ | ✗ |
| `user-cedae` | Usuário Cliente | ✗ | `cedae` | ✗ | ✗ | ✗ |

### Controle de visibilidade
- `setAccessVisibility(el, visible)` ([app.js:21661](../app.js)) — alterna `is-hidden`/`hidden`/`aria-hidden`.
- `syncDashboardHomeForAccess(access)` ([app.js:21647](../app.js)) — usuário sem administração vê `#dashboardCommonHome` (home simplificada).
- `applyOrganizationAccessControls(routeKey)` ([app.js:21922](../app.js)) — função central: grava datasets de escopo no `<body>`, aplica visibilidade do grupo Administração/Organizações e **bloqueia rotas** de admin para perfis sem permissão (redireciona para `#/dashboard`).

### Empresas mock (escopo dos perfis) — [index.html:7962](../index.html)
`AVAS Energia` e `TechCorp Brasil` (org `avas-group`); `Águas Rio` e
`CEDAE Saneamento` (org `cedae`).

---

## 3. Home do Painel — `#page-dashboard` ([index.html:614](../index.html))

Três variantes dentro da mesma página, escolhidas por perfil/toggle:

1. **`#dashboardViewDefault`** ([index.html:615](../index.html)) — visão admin "zerada" (valores 0): ações rápidas, 4 stat-cards (Automações/Executores/Execuções/Pacotes), atividade recente, estatísticas de execução (donut), card de VMs e "Insights de IA" (4 cards estáticos).
2. **`#dashboardCommonHome`** ([index.html:804](../index.html)) — home do usuário comum: ações rápidas + os **4 `dashboard-navigation-card`** (Agentes, Fluxos de Trabalho, Atendimento dinâmico, Saúde).
3. **`#dashboardViewDetail`** ([index.html:883](../index.html)) — visão admin "com dados" mock (12 Automações/5 ativas, 4 Executores/3 online, 28 Execuções, 8 Pacotes).

### Lógica JS
- **Toggle Default↔Detail**: listener em `#dashboardToggle` ([app.js:21461](../app.js)).
- **Ações rápidas** (persistidas em localStorage): catálogo `DASHBOARD_QUICK_ACTIONS_CATALOG` (14 ações, [app.js:767](../app.js)), default de 4, limite 4. Render por `renderDashboardQuickActions()` ([app.js:3313](../app.js)); editor via modal.
- **Insights de IA**: bloco `if (insightsGrid)` ([app.js:21408](../app.js)) apenas conta/rotula cards estáticos — não há geração real.

---

## 4. Páginas de conta

### Perfil — `#/dashboard/profile` · `page-profile` ([index.html:10451](../index.html))
Alterar e-mail e senha com verificação por código (simulada). Resumo do usuário +
dois modais (e-mail em 2 passos; senha com código + confirmação, mín. 8). Lógica:
bloco `if (profilePage)` ([app.js:21133](../app.js)); qualquer código de 6 dígitos
é aceito; submits só atualizam a UI local.

### Configurações — `#/dashboard/settings` · `page-settings` ([index.html:10590](../index.html))
Preferências (notificações e-mail/push), abas "Sessões ativas" e "Log de
segurança" (dados mock). Botão salvar habilita ao detectar alteração
([app.js:21108](../app.js)); não persiste.

### Painel de histórico — `#/dashboard/history` · `page-history` ([index.html:6905](../index.html))
Histórico de conversas na hierarquia **Ambiente > Contexto de projeto >
Conversas**, isolado por organização (AVAS / TechCorp, com contextos e threads
mock). Cards de contexto colapsáveis. Página majoritariamente estática.
