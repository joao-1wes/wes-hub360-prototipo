# Seção Saúde — Documentação

Documentação de referência da seção **Saúde** do protótipo WES Hub360, dividida
em um arquivo por subseção.

> **Natureza do protótipo:** aplicação estática (HTML/CSS/JS puro), sem backend
> nem API. Roteamento por *hash* (`#/dashboard/health/...`). Toda "IA", "OCR",
> "extração" e "classificação" é **simulada** com dados mock e barras de
> progresso (`wait(ms)`). O único processamento real de arquivo é a conversão
> para base64 na Leitura de exames — e mesmo assim o conteúdo é ignorado e o
> resultado é fixo.

**Arquivos-fonte** (na raiz do repositório)
- [index.html](../../index.html) — markup de todas as páginas e modais.
- [app.js](../../app.js) — lógica, dados mock, roteamento e renderização.
- [styles.css](../../styles.css) — estilos (`health-*`, `glosa-chip*`, `health-ai-audit-*`).

---

## Subseções

| # | Subseção | O que resolve | Documento |
|---|----------|----------------|-----------|
| 1 | **Visão geral** | Painel único com KPIs e gráficos de todos os produtos de saúde. | [1-visao-geral.md](1-visao-geral.md) |
| 2 | **Agente do paciente** | Atendimento automatizado por WhatsApp (CPF, dúvidas, envio de exames, encaixe para renovação). | [2-agente-do-paciente.md](2-agente-do-paciente.md) |
| 3 | **Atendimento** | Registro de atendimentos + histórico médico com auxiliar de IA e linha do tempo clínica. | [3-atendimento.md](3-atendimento.md) |
| 4 | **Agenda** | Agenda semanal do médico + fila de encaixes para renovação. | [4-agenda.md](4-agenda.md) |
| 5 | **Prestação de contas** | Auditoria de contas hospitalares com estimativa de **chance de glosa**. | [5-prestacao-de-contas.md](5-prestacao-de-contas.md) |
| 6 | **Leitura de exames** | Extração de códigos/mnemônicos de exames a partir de PDF/imagem. | [6-leitura-de-exames.md](6-leitura-de-exames.md) |

---

## Navegação e cadastro

### Submenu lateral — [index.html:466](../../index.html)
Grupo `data-menu="health"`, ícone `health_and_safety`, rótulo "Saúde". O
`#submenu-health` tem 6 links: **Visão geral · Agente do paciente · Atendimento ·
Agenda · Prestação de contas · Leitura de exames**.

### Card no dashboard — [index.html:862](../../index.html)
`article.dashboard-navigation-card` "Saúde" ("Acesse rotinas de saúde.") com os
mesmos 6 links.

### Formulário de criação de organização — [index.html:312](../../index.html)
Checkbox-pai `organization_sections` de valor `health` (marcado). Subseções
(`organization_subsections`, todas marcadas):

| Value | Rótulo |
|-------|--------|
| `health-whatsapp` | Agente do paciente |
| `health-service` | Atendimento |
| `health-agenda` | Agenda |
| `health-accountability` | Prestação de contas |
| `health-exam-reading` | Leitura de exames |

> A "Visão geral" **não** é subseção configurável — não há checkbox para ela.

---

## Mapa de rotas

Rota → id de página em [app.js:21495](../../app.js); títulos em [app.js:21554](../../app.js).

| Rota (hash) | Página (id) |
|-------------|-------------|
| `dashboard/health/overview` | `page-health-overview` |
| `dashboard/health/whatsapp` | `page-health-whatsapp` |
| `dashboard/health/whatsapp/insights` | `page-health-whatsapp-insights` |
| `dashboard/health/whatsapp/history` | `page-health-whatsapp-history` |
| `dashboard/health/service` | `page-health-service` |
| `dashboard/health/service/patient` | `page-health-service-patient` |
| `dashboard/health/agenda` | `page-health-agenda` |
| `dashboard/health/accountability` | `page-health-accountability` |
| `dashboard/health/accountability/results` | `page-health-accountability-results` |
| `dashboard/health/exam-reading` | `page-health-exam-reading` |
| `dashboard/health/exam-reading/results` | `page-health-exam-reading-results` |
| `dashboard/health/integrations` | `page-integrations-apis` (reaproveita a página geral de Integrações) |

---

## Notas técnicas transversais

- **Tudo é simulado.** "Extração", "classificação" e "OCR" usam dados mock +
  `wait(ms)` + barras de progresso. O único processamento real de arquivo é
  `readFileAsDataUrl` (Leitura de exames), que converte para base64 mas **ignora
  o conteúdo** e retorna sempre `mockMnemonics`.
- **PDFs de download** (prestação e leitura) são gerados no client montando a
  estrutura PDF na mão (`%PDF-1.4`, objetos, xref) — sem biblioteca externa.
- **Gráficos** usam Chart.js (`window.Chart`), criados/destruídos conforme a rota
  ativa para evitar vazamento de instâncias.
- **Helpers globais** (fora do escopo de saúde): `showAppToast` (toasts),
  `copyTextToClipboard` (cópia), `escapeHtmlWes` (escape de HTML).
- **Persistência:** não há. Registros criados numa sessão vivem apenas em memória
  e se perdem ao recarregar a página.
