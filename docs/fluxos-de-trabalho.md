# Fluxos de Trabalho

**Menu:** "Fluxos de Trabalho" (`data-menu="automation"`) · **Voltar ao índice:** [README](README.md)

Submenu `#submenu-automation` ([index.html:407](../index.html)). Itens **visíveis**:
Automações, Análise de documentos, Processos. Itens **comentados/ocultos**:
Agendamentos, Arquivos de entrada, Credenciais (+ grupo "Infraestrutura" inteiro:
Executores, Pacotes).

---

## 1. Automações

**Rotas:** `#/dashboard/automations` (`page-automations`, [index.html:1157](../index.html))
e `#/dashboard/automations/new` (`page-automations-create`, [index.html:1683](../index.html))

**Propósito.** Gerenciar automações (scripts/robôs executáveis), suas execuções,
agendamentos, arquivos e credenciais. Uma automação = nome, descrição,
pacote+versão, prioridade, linguagem (C#/Java/Python), parâmetros JSON, status e
código associado.

### Lista (`page-automations`)
- Botão "Criar automação" + **5 abas**: Automações, Execuções, Agendamento, Arquivos, Credenciais.
- **Aba Automações**: busca + filtros (Status, Prioridade) + tabela `.automations-table` (Automação / Descrição / Última execução / Linguagem / Prioridade / Status / Ações). Linhas `.automation-row` com estado em `data-automation-*`.
- **Aba Execuções**: filtro de período + tabela `.executions-table` (com metadados de gravação).
- **Abas Agendamento / Arquivos / Credenciais**: espelham as páginas ocultas correspondentes.

**Lógica JS**: `createAutomationRow` ([app.js:3754](../app.js)), `readAutomationRowData` ([app.js:3803](../app.js)), helpers de prioridade/linguagem/pacote ([app.js:3660](../app.js)+). Pacotes disponíveis: `AUTOMATION_PACKAGE_OPTIONS` ([app.js:1434](../app.js)).

**Mock**: "Relatório diário" (pacote `reports` v2.1.0, C#, média, ativo) e "Monitoramento de filas" (`queues` v1.4.0, C#, alta, inativo).

### Criação (`page-automations-create`)
Página com passos:
1. **Dados iniciais** — nome, prioridade.
2. **Recursos** — linguagem, arquivos, credenciais.
3. **Agendamento** — switch "Agendada" revela horário/repetição/datas/dias.
4. **Descrição + gerador de código** — "Gerar código com IA" ou "Fazer upload" (`.cs/.java/.py/.zip`); pré-visualização com histórico de versões e aprovar/reprovar.

**Lógica JS** (fábrica a partir de [app.js:12403](../app.js)): geração de código `buildAutomationGeneratedCode` ([app.js:12771](../app.js)) / `generateAutomationCodeFromPrompt` ([app.js:13146](../app.js)); leitura/persistência `readAutomationFormData` ([app.js:13405](../app.js)) / `persistAutomationData` ([app.js:13510](../app.js)).

> ⚠️ A "IA" é **totalmente mockada**: `buildAutomationMockAiDescription` ([app.js:13132](../app.js)) gera texto fixo e o código gerado é marcado `source: 'mock_ai', mocked: true`.

---

## 2. Análise de documentos

**Rota:** `#/dashboard/document-analysis` · **Página:** `page-document-analysis`
([index.html:1981](../index.html))

**Propósito.** Enviar um documento (PDF/imagem) para OCR, classificação automática
e extração estruturada para JSON. **Tudo simulado** (`isMockMode = true`
[app.js:15055](../app.js); processamento de ~10s com barra de progresso).

**UI**: dropzone de upload; "Configurações necessárias" (classes esperadas
nota_fiscal/recibo/contrato, limiar 75–95%, idioma OCR, perfil de
pré-processamento); card de resultado com Configurações / Resumo / Classificação /
OCR / Extração estruturada / Alertas / Metadados; ações "Alterar arquivo" e
"Exportar JSON".

**Lógica JS**:
- `initDocumentAnalysisValidationPage(page)` ([app.js:14940](../app.js)) — toda a lógica (upload, drag-drop, progresso, resultado, export).
- **Modo exame vs documento**: `isExamMode = page.dataset.docAnalysisContext === 'exam'` ([app.js:14944](../app.js)). **O mesmo código serve esta página e a Leitura de exames de Saúde** — `buildMockResult()` ([app.js:15160](../app.js)) retorna payload clínico (Hemograma) no modo exame, ou genérico no modo documento; muda também o nome do arquivo de download.

**Mock**: dois payloads fixos — Exame (classe "Hemograma", conf. 0.94, paciente Ana Beatriz Lima) e Documento (classe "Documento Geral", conf. 0.93).

---

## 3. Processos / BPMN

**Rotas:** `#/dashboard/bpmn` (`page-bpmn`, [index.html:10427](../index.html)) e
`#/dashboard/fluxos` (`page-fluxos`, [index.html:10439](../index.html))

**Propósito.** Áreas de processos/fluxos BPMN. **Ambas são apenas placeholders "em
desenvolvimento"** — sem diagramas nem funcionalidade. Só o item "Processos"
aparece no menu (→ `#/dashboard/bpmn`); `page-fluxos` não tem link. Sem lógica JS
dedicada nem dados.

---

## 4. Páginas ocultas / de infraestrutura

Existem como rotas, mas os links de menu estão **comentados**. Acessíveis por URL
direta e via abas de Automações.

| Página | Rota | Propósito |
|--------|------|-----------|
| Agendamentos | `#/dashboard/schedules` ([index.html:2243](../index.html)) | Execuções programadas. Alerta que sem executor não funciona. |
| Executores | `#/dashboard/executors` ([index.html:4992](../index.html)) | Executores e contas de serviço (grupo Infraestrutura). |
| Pacotes | `#/dashboard/packages` ([index.html:5276](../index.html)) | Upload, versão e implantação de pacotes. |
| Credenciais | `#/dashboard/credentials` ([index.html:5872](../index.html)) | Credenciais criptografadas reutilizáveis. Também é aba em Automações. |
| Arquivos de entrada | `#/dashboard/input-files` ([index.html:5975](../index.html)) | Arquivos usados em automações. Também é aba em Automações. |

> **Nomenclatura**: o menu diz "Fluxos de Trabalho" (internamente `data-menu="automation"`),
> e o item "Processos" leva à página cujo `data-title` é "BPMN".
