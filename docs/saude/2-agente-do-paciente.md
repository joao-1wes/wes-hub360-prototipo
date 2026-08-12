# Saúde · Agente do paciente

**Rota:** `#/dashboard/health/whatsapp` · **Páginas:** `page-health-whatsapp`,
`page-health-whatsapp-insights`, `page-health-whatsapp-history`
([index.html:8976](../../index.html)) · **Voltar ao índice:** [README](README.md)

---

## Propósito

Central do agente automatizado de WhatsApp que atende pacientes: autenticação por
CPF, dúvidas sobre o histórico, envio de exames e encaixe para renovação de
receita. Permite testar via simulação, integrar aos canais e compartilhar o
número do agente.

## Elementos de UI

### Página principal (`page-health-whatsapp`) — grid de 4 painéis
- **Fluxo do atendimento** → "Ver fluxo" abre o modal `healthPatientFlowModal` (diagrama com pan/zoom).
- **Integração** → "Realizar integração" → `#/dashboard/health/integrations`.
- **Compartilhar agente** → número **+55 85 98888-1048**, botões "Copiar link" (`data-health-patient-copy-link`) e "Compartilhar" (`data-health-patient-share-open`).
- **Simulação no WhatsApp** → "Abrir simulação" (`data-health-patient-preview-open`).

### Insights (`page-health-whatsapp-insights`)
2 cards de detalhe (Dúvidas sobre exames — 412 menções; Solicitação de consulta —
+18%) e tabela "Auditoria dos sinais".

### Histórico (`page-health-whatsapp-history`)
Tabela "Histórico de interações" com 5 linhas estáticas e chips de status
(Agendável, Revisão, Recebido, Transbordo, Compartilhado).

## Simulação — modal `healthPatientPreviewModal`

Emula um telefone WhatsApp ("Agente WES Saúde · Online agora"). Formulário de CPF
+ 3 botões de fluxo (`data-health-patient-flow`), inicialmente desabilitados.

**Funções JS ([app.js:18604](../../app.js) em diante):**
- `addHealthPatientPreviewMessage(content, type='agent')` — cria bolha no log (timestamp fixo "10:48", auto-scroll).
- `setHealthPatientPreviewOptionsEnabled(isEnabled)` — habilita/desabilita os 3 botões.
- `resetHealthPatientPreview()` — limpa o log, mostra o form de CPF e envia a saudação.
- `unlockHealthPatientPreview(cpf)` — valida o CPF contra `healthPatientPreviewPatients`; se não achar, orienta usar o CPF de teste **12345678900**; se achar, simula verificação por SMS/e-mail e habilita as opções.
- `runHealthPatientPreviewFlow(flow)` — roteiros pré-escritos:
  - `questions` — dúvida sobre último exame → resposta com base no histórico + disclaimer ("para diagnóstico consulte seu médico").
  - `exams` — paciente envia `exame-laboratorial.pdf` → agente confirma atualização do histórico.
  - `renewal` — pedido de encaixe → agente reforça que "o encaixe apenas agenda; quem decide é o médico" → oferece dois horários → confirma envio à agenda.

Abertura/fechamento: `openHealthPatientPreviewModal` / `closeHealthPatientPreviewModal`
([app.js:18703](../../app.js)). Diagrama de fluxo (zoom 0.5–3x, pan por pointer,
ctrl/⌘+wheel): helpers `getHealthFlowEls`, `applyHealthFlowZoom`, `fitHealthFlow`,
`zoomHealthFlow`, `setupHealthFlowZoomControls` ([app.js:18719](../../app.js)).

## Dados mock

- `healthPatientPreviewPatients` ([app.js:18236](../../app.js)) — 3 CPFs: 12345678900 (Ana Beatriz Lima), 98765432100 (Carlos Eduardo Nunes), 45678912300 (Marina Costa Rocha).
- `healthPatientSharePatients` ([app.js:18241](../../app.js)) — 5 contatos com telefone.

## Integrações

`#/dashboard/health/integrations` reaproveita a página geral `page-integrations-apis`
([index.html:6567](../../index.html)); um botão "voltar" específico (`healthIntegrationsBack`)
só aparece nessa rota.
