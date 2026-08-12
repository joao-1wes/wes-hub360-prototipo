# Saúde · Leitura de exames

**Rota:** `#/dashboard/health/exam-reading` · **Páginas:**
`page-health-exam-reading`, `page-health-exam-reading-results`
([index.html:10075](../../index.html)) · **Lógica:** `initHealthExamReadingWorkflow()`
([app.js:16177](../../app.js)–[16603](../../app.js)) · **Voltar ao índice:** [README](README.md)

---

## Propósito

Extrair automaticamente os códigos/mnemônicos de exames a partir de um arquivo
(PDF/PNG/JPG), listando código + nome padrão, com busca, cópia (individual e em
massa) e exportação (CSV/PDF). Objetivo de negócio: agilizar o lançamento de
exames em sistemas externos (menção a Pixeon/Oracle).

## Fluxo do usuário

1. **Iniciar leitura** → modal `healthExamReadingModal`: dropzone (`.pdf,.png,.jpg,.jpeg`) + "Número do operador" (usado junto ao ID Pixeon).
2. **Processar** → converte o arquivo para dataURL (base64), aguarda ~1200 ms e mostra o resultado.
3. Resultado: tabela Código / Nome / Ações, com busca e "Copiar todos".

> Botão **"Gerar PDF teste"** (`buildTestPdfBlob`) cria um PDF de exemplo já com
> mnemônicos, seleciona-o e faz download — útil para testar o fluxo sem um
> arquivo real.

## Elementos de UI

### Página principal (`page-health-exam-reading`)
- Header: base de mnemônicos (`openHealthExamReadingSettings` → modal `healthMnemonicsModal`) e "Iniciar leitura" (`openHealthExamReadingModal`).
- Busca `healthExamReadingSearch`.
- Tabela de histórico `healthExamReadingHistoryTable` (Arquivo / Operador / Processado em / Códigos identificados / Ações). 3 linhas estáticas. Ações: ver resultado (`data-health-exam-open-history-result`) e copiar códigos (`data-health-exam-copy-history="HEM,LEU,PLAQ,HGB,HTC"`).

### Página de resultado (`page-health-exam-reading-results`)
- Header: "Nova leitura" e menu "Baixar relatório" com CSV (`downloadHealthExamReportCsvBtn`) e PDF (`downloadHealthExamReportPdfBtn`).
- Resumo (códigos encontrados / status / operador / arquivo via `data-health-exam-result-*`).
- Toolbar: busca `healthExamMnemonicSearchInput` + "Copiar todos" (`copyAllHealthExamMnemonicsBtn`).
- Tabela `healthExamResultsTable` (Código / Nome / Ações) + vazio `healthExamResultsEmpty`.

## Peças-chave da lógica

- Extensões válidas: `pdf, png, jpg, jpeg` ([app.js:16205](../../app.js)).
- **`mockMnemonics`** ([app.js:16206](../../app.js)) — os 6 códigos "extraídos" fixos: HEM, HGB, HTC, LEU, PLAQ, GLI.
- Processamento — handler ([app.js:16489](../../app.js)): valida arquivo + operador (`/^\d{2,}$/`), chama `readFileAsDataUrl` (conversão **real** para base64, mas o conteúdo é ignorado), aguarda 1200 ms e sempre define `currentMnemonics = mockMnemonics`.
- Histórico — `addHistoryRow` ([app.js:16321](../../app.js)); `getHistoryRowResult` ([app.js:16278](../../app.js)) reconstrói o resultado a partir das células e do atributo `data-health-exam-copy-history`, resolvendo nomes via `mnemonicNameByCode`.
- Cópia: individual (`data-health-exam-copy-result`) e "Copiar todos" (códigos separados por `\n`), via `copyTextToClipboard` + `showAppToast`.
- Exportação: `downloadResultsCsvReport` ([app.js:16394](../../app.js), CSV `código;nome`) e `buildExamResultsPdfBlob`/`downloadResultsPdfReport` ([app.js:16412](../../app.js), PDF montado manualmente).

## Bases de dados mock

- **`healthExamMnemonicBase`** ([app.js:2](../../app.js)) — dicionário de 12 códigos → nomes (HEM, HGB, HTC, LEU, PLAQ, GLI, CRE, URE, TGO, RXTO, OBS, LAU). Resolve os nomes dos códigos guardados nas linhas de histórico.
- **`healthExamMnemonicSynonyms`** ([app.js:18](../../app.js)) — sinônimos por código (ex.: HEM → Hemograma, HMG, CBC).
- **`mockMnemonics`** ([app.js:16206](../../app.js)) — os 6 códigos "extraídos" fixos.
- **Base de mnemônicos** (modal `healthMnemonicsModal`) — importação de CSV (`código, nome, sinônimos` separados por `;`), download de modelo e tabela.
