# Integrações

**Menu:** "Integrações" (nav-item único) · **Voltar ao índice:** [README](README.md)

O rótulo do menu virou um **link único** de primeiro nível
([index.html:449](../index.html), ícone `integration_instructions`) que aponta
para `#/dashboard/integrations` e renderiza a página `page-integrations-apis`.

> **Legado:** antes era um submenu com "Documentação" e "API's"
> ([index.html:451](../index.html), agora **comentado**/inativo). As subrotas
> continuam funcionando pelo `routeMap`, mas não há mais item de menu que as
> destaque. Sobrou código morto de highlight/labels em [app.js:22016](../app.js).

## Rotas

Rota → página em [app.js:21518](../app.js); a **mesma** página `page-integrations-apis`
é reaproveitada por 3 rotas (resolvido em [app.js:22056](../app.js)):

| Rota (hash) | Página |
|-------------|--------|
| `dashboard/integrations` | `page-integrations-apis` |
| `dashboard/integrations/documentation` | `page-integrations-docs` |
| `dashboard/integrations/apis` | `page-integrations-apis` |
| `dashboard/health/integrations` | `page-integrations-apis` (com botão "Voltar" para Saúde) |

---

## 1. Documentação

**Rota:** `#/dashboard/integrations/documentation` · **Página:** `page-integrations-docs`
([index.html:6523](../index.html))

**Propósito.** Vitrine de documentação de integração — "Centralize contratos,
guias técnicos e referências de integração usados pelos times e agentes". Página
puramente descritiva/navegacional.

**UI** — grid de 3 cards (`health-integration-card`):
1. **Guias de implementação** (ícone `description`) — botão "Abrir guias".
2. **Contratos e webhooks** (ícone `webhook`) — botão "Ver contratos".
3. **Ambientes e credenciais** (ícone `key`) — botão "Consultar acessos".

**Lógica JS.** Nenhuma — os três botões (`health-integration-action`) **não têm
handler**; são estáticos. Todo o conteúdo é markup hardcoded.

---

## 2. API's / Integrações

**Rota:** `#/dashboard/integrations/apis` · **Página:** `page-integrations-apis`
([index.html:6567](../index.html))

**Propósito.** Configuração de conectores, canais e APIs externas usados pelos
agentes — com forte viés para o domínio de Saúde. Apesar do nome "API's", o
conteúdo são cards de conectores + um fluxo de "Integração personalizada".

**UI** — grid de 4 cards (`health-integrations-cards`):
1. **Conexão com plano de saúde** — chips de operadoras (Unimed, Hapvida, NotreDame, Amil, Bradesco Saúde, SulAmérica, Porto Saúde, planos regionais). Botão "Configurar plano".
2. **WhatsApp Business API** — botão "Editar conexão".
3. **Integração com agenda** — botão "Conectar agenda".
4. **Integração personalizada** — chips (Chat no site, App próprio, API/REST, Webhook, Widget). Botão "Configurar integração" (`data-health-custom-integration-open`) — **único com ação real**.

**Modal "Integração personalizada"** `healthCustomIntegrationModal` ([index.html:6664](../index.html)):
- Tipo de canal (web-chat / mobile-app / rest-api / webhook / embed-widget), nome e endpoint.
- **Chave de API** mock fixa `wes_live_sk_9f3c1a7b42e8` + botão copiar.
- **Snippet de incorporação** (`<script src="https://cdn.weshub360.com/agent.js" ...>`).
- Submit "Ativar integração" → só mostra toast, **não persiste**.

**Lógica JS** — IIFE `initHealthCustomIntegrationModal` ([app.js:23595](../app.js)):
abre/fecha o modal, copia a chave (`copyTextToClipboard` + toast) e trata o submit
(cosmético). O botão "Voltar" para Saúde é controlado em [app.js:22209](../app.js)
(só aparece na rota `dashboard/health/integrations`). Os cards 1–3 **não têm handler**.

**Dados mock.** Chave de API fixa (`wes_live_sk_9f3c1a7b42e8`) e chips estáticos de
operadoras/canais. Nenhum estado persistido.

> ⚠️ O nome "API's" é enganoso: **não há geração nem revogação de tokens** — apenas
> uma chave mock e um snippet, dentro de um modal cujo submit não salva nada.
