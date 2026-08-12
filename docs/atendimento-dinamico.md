# Atendimento dinâmico

**Menu:** "Atendimento dinâmico" (`data-menu="dynamic-service"`, ícone `account_tree`)
· **Voltar ao índice:** [README](README.md)

Submenu `#submenu-dynamic-service` ([index.html:441](../index.html)) com 4 itens:
Campanhas, Canais, Fluxos híbridos, Mensageria por voz.

> **Persistência:** Fluxos híbridos e operações de voz **criados pelo usuário** vão
> para localStorage (`hybridFlowsCreated`, `voiceMessagingCreated`). Campanhas e
> Canais/Telegram **não** persistem (só DOM/memória). Todas as validações/testes
> (Telegram, conexão de voz) são **simulações locais** (regex ou `setTimeout`).

---

## 1. Campanhas

**Rotas:** `#/dashboard/campaigns` (`page-campaigns`, [index.html:4521](../index.html))
e `#/dashboard/campaigns/new` (`page-campaigns-create`, [index.html:4585](../index.html))

**Propósito.** Disparo em massa de mensagens de texto por um canal integrado
(Telegram principal; WhatsApp e SMS também), usando um **agente de IA** e um
**roteiro** com variáveis (`{{nome}}`, `{{empresa}}`, `{{protocolo}}`, `{{vencimento}}`).

### Lista
- Botão "Nova campanha", busca e filtro de status (Rascunho / Agendada / Em execução / Pausada / Concluída / Falhou).
- Tabela `.campaigns-data-table` (Nome / Agente / Canal / Destinatários / Status / Ações) com estado-vazio. Linhas injetadas por JS.
- **Lógica**: `CAMPAIGN_STATUS_META` ([app.js:821](../app.js)), `applyCampaignFilters` ([app.js:4859](../app.js)), `createCampaignRowElement` ([app.js:4876](../app.js), grava `dataset.campaignPayload`), `seedInitialCampaignRows` ([app.js:4953](../app.js)).
- **Mock**: `INITIAL_CAMPAIGNS` ([app.js:4749](../app.js)) — 6 campanhas, uma por status.

### Criação/edição
Mesma página nos dois modos (`setCampaignFormMode` [app.js:4616](../app.js)). Campos:
nome, agendamento opcional, descrição, **agente de IA** (Atlas Core / Nimbus Ops /
Pulse Finance / WES AI Agent), **integração** (Telegram/WhatsApp/SMS via rádios),
alvo do canal, **roteiro** (+ "Otimizar com IA"), **destinatários** (+ importar CSV).
- Alvos por canal: `campaignIntegrationTargets` ([app.js:4528](../app.js)).
- Revisão em modal → confirmação `appendCampaignRow`/`replaceCampaignRowById` ([app.js:5069](../app.js)).

---

## 2. Canais

**Rota:** `#/dashboard/channels` (`page-channels`, [index.html:5390](../index.html))

**Propósito.** Gerenciar integrações de mensageria. Um "canal" é uma conexão
externa (bot Telegram, conta WhatsApp).

### Lista
- Botão "Nova integração" + tabela `.channels-table` (Canal / Tipo / Nome / Identificador / Status / Descrição / Ações). Duas linhas mock: **Telegram** (`@wes_hub_bot`) e **WhatsApp** (`+55 11 99999-1234`).
- **Modal "Qual canal conectar?"** (`channelModal`): Telegram (habilitado), WhatsApp (WABA) e SMS ("Em breve").
- **Modal "Editar canal"** (`channelEditForm`): nome, tipo, identificador, link público, bot token, status, descrição.
- **Lógica**: tooltips `syncChannelTableTooltips` ([app.js:1799](../app.js)); editar `openChannelEditModal` ([app.js:12275](../app.js)); card Telegram → navega para config ([app.js:12282](../app.js)).

### Configuração do Telegram
**Rota:** `#/dashboard/channels/telegram` (`page-telegram-config`, [index.html:5469](../index.html))

Passo a passo: nome interno → **bot token** + "Validar conexão" → resumo do bot →
username + link público → status → **teste de envio** (Chat ID) → "Salvar e continuar".
- **Validação (mock)**: `isTelegramTokenFormatValid` ([app.js:3005](../app.js), regex `^\d{5,}:[A-Za-z0-9_-]{10,}$`) e `validateTelegramConnection` ([app.js:3009](../app.js)) — **sem rede**; só valida formato.
- Conclusão: `completeTelegramConfiguration` ([app.js:3090](../app.js)) → toast e volta para Canais.

### Guia BotFather
**Rota:** `#/dashboard/channels/telegram/botfather` (`page-telegram-botfather`, [index.html:5681](../index.html))
— página-guia estática (6 passos para criar o bot no `@BotFather` e obter o token).

---

## 3. Fluxos híbridos

Combina **coleta por voz** (agente de voz) + **confirmação por texto no Telegram**
(agente de texto). O **telefone** é o dado-chave da transição entre os dois agentes.

### Lista — `#/dashboard/hybrid-flows` (`page-hybrid-flows`, [index.html:4753](../index.html))
- Busca + filtro Ativo/Inativo; tabela `#hybridFlowsTable` (Nome / Status / Campos / Criado / Atualizado / Ações). Ações: copiar link, abrir em nova guia, atualizar link, histórico, editar, apagar.
- **Storage**: `HYBRID_FLOWS_STORAGE_KEY = 'hybridFlowsCreated'` ([app.js:761](../app.js)); helpers `getHybridFlowsFromStorage` ([app.js:849](../app.js)), `renderHybridFlowsFromStorage` ([app.js:1267](../app.js)).

### Criação/edição — `page-hybrid-flows-create` ([index.html:4886](../index.html))
Três blocos: **Dados iniciais** (título/descrição), **Campos** (o que a voz coleta e
o texto confirma — editor de campos com tipos text/phone/cpf/email/number/boolean),
**Integrações** (agente de texto, agente de voz, saudação, integração Telegram).
- Editor de campos: `renderHybridFlowFieldEdit` ([app.js:11092](../app.js)).
- Leitura/persistência: `readHybridFlowFormData` ([app.js:1188](../app.js)); confirmar revisão → `persistAndRenderHybridFlow` ([app.js:11059](../app.js)).

### Histórico — `page-hybrid-flows-history` ([index.html:8636](../index.html))
Sessões de atendimento (da voz à confirmação no Telegram): 4 stat-cards, busca por
telefone/ID, tabela `.hybrid-history-table`. 3 linhas mock.

### Detalhe da sessão — `page-hybrid-flows-history-details` ([index.html:8749](../index.html))
Abas **Resumo** (resumo por IA + dados validados), **Linha do tempo** (6 eventos) e
**Conversa**. Conteúdo estático.

---

## 4. Mensageria por voz

Configura agentes de voz e dispara **campanhas de chamadas automatizadas** via
provedores **Oktor** ou **NVoIP**, com **modo simulação**.

### Lista — `#/dashboard/voice-messaging` (`page-voice-messaging`, [index.html:4088](../index.html))
- Botões "Ver insights" e "Nova mensageria de voz"; busca + filtro de status; tabela `#voiceMessagingTable` (Operação / Agente / Conexão / Status / Criada / Ações).
- **Storage**: `VOICE_MESSAGING_STORAGE_KEY = 'voiceMessagingCreated'` ([app.js:762](../app.js)); só `draft`/`error` são editáveis ([app.js:879](../app.js)).
- **Mock**: 3 operações ("Teste POC" Concluída, "Campanha em revisão" Rascunho, "Disparo carteira ativa" Erro).

### Insights — `page-voice-messaging-insights` ([index.html:4191](../index.html))
4 stat-cards, card "Insights da IA" (melhor janela: 14h), gráfico "Por horário" e
tabela de destinatários. Gráfico: `syncVoiceMessagingInsightsChart` ([app.js:2504](../app.js))
— Chart.js de barras empilhadas (labels `['10h','14h']`, 4 datasets), só instanciado na rota.

### Criação/edição — `page-voice-messaging-create` ([index.html:4342](../index.html))
Fluxo: nome → **agente de voz** (Antonio/Clara/Marina, com prévia via
`speechSynthesis`) → **conexão** (modo simulação, provedor Oktor/NVoIP, campos que
mudam por provedor, "Testar conexão") → **mensagem** (+ "Otimizar com IA") →
**destinatários** (+ CSV) → revisão.
- Campos por provedor: `voiceMessagingProviderFieldConfig` ([app.js:5119](../app.js), defaults Oktor `admin@1wes.com` / `12345678`).
- **Teste de conexão (mock)**: [app.js:5430](../app.js) — `setTimeout` 1400 ms, alterna sucesso/erro.
- Salvar: `buildVoiceMessagingReviewHtml` ([app.js:5458](../app.js)) + confirmação ([app.js:5519](../app.js)).
