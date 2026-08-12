# Saúde · Prestação de contas

**Rota:** `#/dashboard/health/accountability` · **Páginas:**
`page-health-accountability`, `page-health-accountability-results`
([index.html:9672](../../index.html)) · **Lógica:** `initHealthAccountabilityWorkflow()`
([app.js:15370](../../app.js)–[16175](../../app.js)) · **Voltar ao índice:** [README](README.md)

---

## Propósito

Auditoria documental de contas hospitalares. O operador envia um PDF de pacote
hospitalar; o sistema classifica as páginas por tipo de documento, resume cada
documento, consolida a conta analítica e estima a **chance de glosa** (risco de o
convênio recusar a cobrança), justificando com uma auditoria de IA baseada em
critérios configuráveis.

## Fluxo do usuário

1. **Iniciar prestação** → modal `healthAccountabilityModal`: upload de PDF + select de Hospital + identificação do operador.
2. **Processar** → barra de progresso simulada (12 → 38 → 68 → 88 → 100%).
3. O sistema gera o resultado, insere no topo do histórico (`records.unshift`) e navega para a página de resultado.

## Elementos de UI

### Página de histórico (`page-health-accountability`)
- Header: ajustes (`openHealthAccountabilitySettings` → modal `healthHospitalsModal`) e "Iniciar prestação" (`openHealthAccountabilityModal`).
- Filtros ([index.html:9689](../../index.html)): busca livre (`healthAccountabilityOperatorSearch`) + grupos **Hospital**, **Risco de glosa** (Alto/Médio/Baixo) e **Classificação**.
- Tabela `healthAccountabilityHistoryTable` (Arquivo / Hospital / Operador / Classificação / Processado em / Risco de glosa / Ações). 3 linhas iniciais com chips `glosa-chip--high/medium/low` (68% Alto, 41% Médio, 12% Baixo). Ações: abrir resultado (`data-health-accountability-open-result`) e baixar PDF (`data-health-accountability-download-result`).

### Página de resultado (`page-health-accountability-results`)
- Header com "Baixar PDF" (`downloadHealthAccountabilityReportBtn`).
- Resumo (arquivo/hospital/operador/páginas/documentos/processado-em via `data-health-accountability-result-*`) + card lateral **"Chance de glosa"** (`data-health-accountability-glosa`, valor + chip de risco).
- **Auditoria de IA** colapsável (ícone `auto_awesome`, `...AiAuditSummary` + `...AiAuditList`).
- **Documentos por página** — tabela `healthAccountabilityPagesTable` (Página / Categoria / Confiança / Resumo).
- **Resumo detalhado por documento** — cards `healthAccountabilityDocumentsTable`.
- **Resumo da conta analítica** — tabela `healthAccountabilityAccountTable` (Indicador / Valor), oculta se não houver conta.

## Peças-chave da lógica

- **`documentCatalog`** ([app.js:15412](../../app.js)) — 6 tipos com `key`/`label`/`canonical`/`tokens`:

  | key | label | canonical |
  |-----|-------|-----------|
  | conta_analitica | Conta analítica | ContaAnalitica |
  | descricao_cirurgica | Descrição cirúrgica | DescricaoCirurgica |
  | folha_anestesica | Folha anestésica | FolhaAnestesica |
  | pre_anestesica | Pré-anestésica | PreAnestesica |
  | endoscopia | Endoscopia | Endoscopia |
  | outro_exame | Outro exame | OutroExame |

  Os `tokens` alimentam a inferência por nome de arquivo/hospital.
- **`initialRecords`** ([app.js:15421](../../app.js)) — 3 prestações-semente com `pages`, `documents`, `accountSummary`, `audit` e `glosaChance` (68 / 41 / 12).
- **Chance de glosa** — `getGlosaRisk(chance)` ([app.js:15661](../../app.js)): **≥60 Alto · ≥30 Médio · <30 Baixo** (clamp 0–100). `renderGlosaRiskChip` monta o chip com `title="Chance de glosa: X%"`.
- **Histórico/filtros** — `recordMatchesFilters` ([app.js:15671](../../app.js), busca normalizada + filtros hospital/risk/classification), `renderHistory` ([app.js:15697](../../app.js)), `populateAccountabilityFilters` ([app.js:15728](../../app.js)).
- **Auditoria de IA** — `aiAuditReasonByDoc` ([app.js:15788](../../app.js)) associa cada tipo de documento a um motivo de glosa (ex.: Folha anestésica → "faltam horários de início/fim ou assinatura do anestesista"). `renderAiAudit(result)` ([app.js:15796](../../app.js)) calcula os achados: quanto maior a chance, mais critérios marcados como *fail/warn* (≥55 → 1º fail, 2º warn; ≥30 → 1º warn). Começa colapsada.
- **Processamento mock** — handler do botão ([app.js:16121](../../app.js)):
  - `inferDocumentTypes(file, hospital)` ([app.js:15922](../../app.js)) — detecta tipos pelos tokens; regras de coerência (folha→pré-anestésica; descrição→conta).
  - `createAccountSummary` ([app.js:15935](../../app.js)) — indicadores financeiros a partir de um *seed* (só se houver Conta analítica).
  - `createMockResult` ([app.js:15950](../../app.js)) — páginas com confiança decrescente (96 − 5·i, mínimo 72%); **`glosaChance = round(clamp(5..95, (100 − confiança média) + (needsReview ? 12 : 0)))`**.
- **Download de relatório** — `buildResultPdfBlob` ([app.js:16005](../../app.js)) gera um PDF válido montado manualmente (objetos + xref), sem biblioteca.

## Ajustes de prestação — modal `healthHospitalsModal`

3 abas: **Base de hospitais**, **Tipos de documento** e **Regras/critérios de
auditoria** (gerais ou por tipo de documento). Alimenta o select de hospitais do
modal de nova prestação.

## Dados mock

`documentCatalog`, `initialRecords` e `aiAuditReasonByDoc` (acima).

> **Exemplo (1ª prestação-semente):** `guia-intercambio-10482.pdf`, hospital
> HMoinhos, operador 48291, 4 documentos, conta R$ 18.742,35 / 44 itens, glosa
> **68% (Alto)**.
