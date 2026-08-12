# Saúde · Atendimento

**Rota:** `#/dashboard/health/service` · **Páginas:** `page-health-service`,
`page-health-service-patient` ([index.html:9179](../../index.html)) · **Voltar ao
índice:** [README](README.md)

---

## Propósito

Registro e consulta de atendimentos de saúde. O operador inicia um atendimento
carregando o paciente por CPF; a tela de histórico médico reúne resumo clínico,
exames recentes, um auxiliar de IA restrito ao histórico do paciente e uma linha
do tempo clínica interativa.

## Elementos de UI

### Lista de atendimentos (`page-health-service`)
- Botão **"Iniciar atendimento"** (`data-health-service-start`) → modal de CPF.
- Filtros: busca por nome (`healthServiceSearchInput`) + menu de período
  (`healthServicePeriodBtn`) com modos "Período" (range) e "Data específica"
  (single) e "Aplicar período".
- Tabela `healthServiceTable` (Nome / Plano / Data e hora / Ações), preenchida por JS.

### Histórico médico (`page-health-service-patient`)
- Link de volta + botão "Encerrar atendimento" (`data-health-service-end`).
- **Resumo clínico** — perfil (nome/idade/CPF/plano via `data-health-service-patient-*`),
  grid resumo (última consulta, medicamentos, exames) e "Exames recentes"
  agrupados em Laboratoriais (Painel metabólico, Hemograma completo) e Imagem
  (Ultrassom abdominal), com botões `data-health-service-exam-id`.
- **Auxiliar médico** — chat restrito ao histórico do paciente (input
  `healthServiceConsultReason`, envio `data-health-service-consult-chat`).
- **Linha do tempo** — gráfico interativo com legenda de 8 tipos de evento
  (plano, consultas, exames, diagnósticos, internações, cirurgias, medicamentos,
  atendimento atual), filtros por ano e por tipo (`data-health-service-timeline-kind`)
  e zoom (`data-health-service-timeline-zoom` in/out/fit).

## Lógica JS — `initHealthServiceControls()` ([app.js:19628](../../app.js))

- No init chama `renderHealthServiceAttendanceTable()`,
  `renderHealthServiceTimelineYearOptions()`,
  `syncHealthServiceTimelineFilterOptions()` e `renderHealthServiceTimeline()`.
- Liga iniciar/encerrar atendimento, ditado (`startHealthServiceEndDictation`),
  busca (`applyHealthServiceAttendanceFilters`) e todo o menu de período.
- `getHealthServicePatientByCpf(cpf)` ([app.js:18833](../../app.js)) — busca em
  `healthServicePatientRecords` com fallback para Ana Beatriz Lima.
- Modais associados: `healthServiceCpfModal`, `healthServiceEndModal`,
  `healthServiceExamModal`, `healthServiceTimelineModal`.

## Dados mock

- `healthServicePatientRecords` ([app.js:18248](../../app.js)) — 3 pacientes por CPF (Ana Beatriz Lima/Unimed Premium; Marina Costa/Unimed Fortaleza; Roberto Lima/Bradesco Saúde).
- `healthServiceAttendanceRecords` ([app.js:18271](../../app.js)) — 3 atendimentos com plano e `occurredAt` ISO (alimentam a tabela).
- `healthServiceExamRecords` ([app.js:18294](../../app.js)) — exames por id (`metabolic-panel`, `blood-count`, `abdominal-ultrasound`) com resultado, laudo e linhas marcador/referência/status.
- `healthServiceTimelineEvents` ([app.js:18368](../../app.js)) — eventos clínicos com `kind`, datas, ícone, resumo e detalhes.
