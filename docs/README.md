# WES Hub360 — Documentação do protótipo

Documentação de referência do protótipo, com **um arquivo por seção**.

> **Natureza do protótipo.** Aplicação web **estática** (HTML/CSS/JS puro), **sem
> backend**. Roteamento por *hash* (`#/dashboard/...`). Toda "IA", "OCR",
> "validação" e "processamento" é **simulada** no cliente (dados mock +
> `setTimeout`/barras de progresso). Chamadas a `wesApiFetch` só operam se houver
> uma API configurada; sem ela, a UI cai nos mocks.

**Arquivos-fonte** (raiz do repositório)
- [index.html](../index.html) — markup de todas as páginas e modais.
- [app.js](../app.js) — lógica, dados mock, roteamento (~23,6k linhas).
- [agents-environment-ui.js](../agents-environment-ui.js) — camada de setores/ambientes dos Agentes.
- [auth.js](../auth.js) — login e sessão (mock).
- [styles.css](../styles.css) — estilos.

---

## Seções

| Seção | Rota base | Documento |
|-------|-----------|-----------|
| **Painel** (login, acesso, home, conta) | `#/dashboard` | [painel.md](painel.md) |
| **Agentes** | `#/dashboard/agents` | [agentes.md](agentes.md) |
| **Máquinas virtuais** | `#/dashboard/vm-monitoring` | [maquinas-virtuais.md](maquinas-virtuais.md) |
| **Fluxos de Trabalho** (Automações, Análise de documentos, Processos) | `#/dashboard/automations` | [fluxos-de-trabalho.md](fluxos-de-trabalho.md) |
| **Atendimento dinâmico** (Campanhas, Canais, Fluxos híbridos, Voz) | `#/dashboard/campaigns` | [atendimento-dinamico.md](atendimento-dinamico.md) |
| **Integrações** (Documentação, API's) | `#/dashboard/integrations` | [integracoes.md](integracoes.md) |
| **Saúde** (6 subseções) | `#/dashboard/health/*` | [saude/README.md](saude/README.md) |
| **Administração** (Auditoria, Conexões, Estrutura e Pessoas, Habilidades) | `#/dashboard/audit` | [administracao.md](administracao.md) |

---

## Como o roteamento funciona

- `routeMap` ([app.js:21479](../app.js)) mapeia cada hash → id de página; `sectionMap` ([app.js:21536](../app.js)) mapeia hash → título de seção.
- `updateActivePage()` ([app.js:22053](../app.js)) é o router central, chamado por `auth.js` a cada `hashchange`; aplica o controle de acesso antes de ativar a página.
- **Perfis de acesso** (`organizationAccessProfiles`, [app.js:21605](../app.js)) controlam a visibilidade das seções. Detalhes em [painel.md](painel.md).

## Persistência (o que sobrevive a um reload)

- **sessionStorage** — sessão de login e organização/empresa selecionadas.
- **localStorage** — ações rápidas do dashboard, conexões MCP, fluxos híbridos
  (`hybridFlowsCreated`), operações de voz (`voiceMessagingCreated`), última base de
  API e alguns flags de UI.
- **Somente DOM/memória** (perde ao recarregar) — a maioria dos registros criados:
  agentes, campanhas, canais, prestações de contas, leituras de exame, etc.

---

## Convenções destes documentos

- Cada seção segue a estrutura **propósito → UI → lógica JS → dados mock**.
- Referências de código no formato `arquivo:linha` são links clicáveis (usam `../`
  porque os docs ficam em `docs/`; a subseção Saúde usa `../../`).
- Alertas com ⚠️ destacam onde a funcionalidade é **simulada** ou onde um rótulo
  pode ser enganoso (ex.: "API's" não gera tokens de verdade).
