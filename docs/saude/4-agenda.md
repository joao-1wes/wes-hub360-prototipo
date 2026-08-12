# Saúde · Agenda

**Rota:** `#/dashboard/health/agenda` · **Página:** `page-health-agenda`
([index.html:9437](../../index.html)) · **Voltar ao índice:** [README](README.md)

---

## Propósito

Agenda operacional do médico — consultas, retornos e janelas de encaixe. Exibe a
fila de encaixes para renovação (originados pelo [Agente do paciente](2-agente-do-paciente.md))
e um calendário semanal por horário/status/modalidade, com ajustes de dias,
horários e planos aceitos.

## Elementos de UI

- Botão de ajustes (`openHealthAgendaSettings`) → modal `healthAgendaSettingsModal`
  (dias de atendimento `doctor_weekdays` seg–sex marcados, horários e planos aceitos).
- Card **"Encaixes para renovação"** — kicker "Notificações", contador
  "3 pendentes", lista `data-health-agenda-renewal-list` (populada por JS).
- Board **"Agenda semanal"** — legenda (Consulta / Encaixe), container
  `healthAgendaCalendar`, navegação (semana anterior/próxima, "Hoje"), título
  "13 - 19 de jul. de 2026", switch de visualização (Dia/Semana/Mês/Lista) e uma
  grade seg–dom com eventos exemplo `is-consult` / `is-return`.

## Lógica JS (a partir de [app.js:22955](../../app.js))

- `healthAgendaRenewalQueue` ([app.js:22955](../../app.js)) — fila renderizada
  mostrando os 3 primeiros itens (`.slice(0, 3)`); aprovar/recusar remove o item
  (`splice`).
- `AGENDA_WEEKDAY_DEFS` ([app.js:22988](../../app.js)) — mapeia value/idx/label dos dias.
- Helpers de slot: `formatAgendaSlotDuration`, `clampAgendaAppointmentMinutes`
  (15–30 min), `addAgendaMinutesToIso`.

## Dados mock

`healthAgendaRenewalQueue` ([app.js:22955](../../app.js)) — 5 pacientes com
`start`/`end` ISO (Ana Beatriz Lima, Carlos Eduardo Nunes, Marina Costa Rocha,
Paulo Henrique Alves, Luciana Martins), mas o card exibe só "3 pendentes".

> Os eventos do calendário semanal são **HTML estático**; apenas a fila de
> encaixes é dinâmica.
