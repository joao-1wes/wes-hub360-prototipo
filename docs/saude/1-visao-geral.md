# Saúde · Visão geral

**Rota:** `#/dashboard/health/overview` · **Página:** `page-health-overview`
([index.html:8834](../../index.html)) · **Voltar ao índice:** [README](README.md)

---

## Propósito

Painel consolidado que reúne, em uma única tela, os quatro produtos de saúde
(Agente do paciente, Assistente médico, Prestação de contas e Leitura de exames)
com KPIs, gráficos e insights de IA.

## Elementos de UI

- **4 stat-cards** ([index.html:8843](../../index.html)):
  1. `forum` — **142** Atendimentos por WhatsApp · "+18% nos últimos 7 dias"
  2. `stethoscope` — **89** Consultas com assistente médico · "6 médicos ativos"
  3. `receipt_long` — **320** Documentos analisados · "58 com possível glosa (18%)"
  4. `biotech` — **214** Exames lidos · "1.560 mnemônicos extraídos"
- **4 gráficos** (`<canvas>`, [index.html:8878](../../index.html)): WhatsApp, Médicos, Leitura de exames, Prestação de contas.
- **Painel "Insights de IA"** ([index.html:8947](../../index.html)) com link "Ver mais" → `#/dashboard/health/whatsapp/insights` e 2 itens (Dúvidas sobre exames 31%; Solicitação de consulta +18%).

## Lógica JS — `syncHealthOverviewCharts(routeKey)` ([app.js:2691](../../app.js))

- Só cria os gráficos na rota `dashboard/health/overview`; fora dela chama
  `destroyHealthOverviewCharts()` ([app.js:2677](../../app.js)).
- Guarda de layout: se o container ainda tem altura 0 (carga direta na rota),
  reagenda via `requestAnimationFrame`.
- Usa **Chart.js** (`window.Chart`).

### Datasets (todos hardcoded)

| Gráfico | Tipo | Labels | Dados |
|---------|------|--------|-------|
| WhatsApp | doughnut (cutout 56%) | Envio de exames / Dúvidas / Encaixe | **[58, 49, 35]** |
| Médicos | bar horizontal | 6 médicos (Helena Prado, Rafael Duarte, Camila Nunes, Marcos Vinícius, Luciana Martins, Paulo Reis) | **[28, 21, 16, 12, 8, 4]** |
| Prestação de contas | doughnut | Sem glosa / Com glosa | **[262, 58]** |
| Exames (mnemônicos) | bar horizontal | HB / GLI / COL / TSH / CREA / URE | **[412, 388, 351, 298, 254, 208]** |

Sob o gráfico de exames há um bloco estático "Menos identificados" (T4L·14,
HbA1c·22, PCR·28, Ferritina·39, Vitamina D·47). Sob o de prestação, o bloco
`health-overview-glosa-stats` (320 analisados / 58 com glosa / 23% risco médio).

## Dados mock

Todos hardcoded — nos stat-cards/insights (HTML) e nos datasets dos gráficos (JS acima).
