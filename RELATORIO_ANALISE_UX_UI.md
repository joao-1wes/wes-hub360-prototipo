# Relatório de Análise UX/UI — WES HUB360 (Protótipo)

**Data:** 11/08/2026
**Escopo:** consistência de componentes, tipografia e contraste de cores (WCAG AA, rácio mínimo **4.5:1**)
**Referências:** [Styleguide 1WES](https://styleguide.1wes.com/) · [Verificador de Contraste](https://verificador-de-contraste.vercel.app/) · Relatório Executivo de Evidências QA (29/07/2026)

> **Contexto importante:** este é um protótipo estático (sem backend, dados mockados). Todas as correções recomendadas são **exclusivamente de CSS/HTML** — nenhuma depende de API ou de novas dependências pesadas. As evidências 2, 4, 10 e 11 do QA foram desconsideradas conforme solicitado.

---

## 1. Sumário executivo

| Área | Situação |
|---|---|
| **Evidências do QA avaliadas** | 8 avaliadas (1, 3, 5, 6, 7, 8, 9, 12) — **todas válidas e confirmadas no código** |
| **Componentes** | 1 causa-raiz explica 3 evidências (chip `success` fora do padrão); badges duplicados na tabela de agentes; indicador de sucesso sem semântica |
| **Tipografia** | Família (Inter) conforme styleguide; porém **349 declarações com px fixo** fora da escala de tokens e 4 stacks monospace divergentes |
| **Contraste** | **22 pares texto/fundo abaixo de 4.5** — incluindo o chip padrão (usado em ~35 regras), links primários sobre o fundo da página e subtítulos de página |

---

## 2. Avaliação das evidências do QA

### ✅ Evidência 01 — Status "Concluída" na Mensageria por voz — **VÁLIDA**
### ✅ Evidência 05 — Status "Ativa" em Estrutura e Pessoas — **VÁLIDA**
### ✅ Evidência 09 — Status "Concluída" nas Campanhas — **VÁLIDA**

**Causa-raiz única (as 3 evidências):** o `.chip.success` ([styles.css:20355](styles.css:20355)) usa **fundo sólido verde-escuro `#15803d` com texto branco**, enquanto todos os demais chips do sistema (`warning`, `danger`, `running`, `paused`, `neutral`) usam o padrão *soft* — fundo claro + texto escuro. É exatamente o "preenchimento e opacidade mais intensos" que o QA apontou.

**Como corrigir** — trocar para o padrão soft já usado no próprio sistema (o par `#166534` sobre `#dcfce7` já existe em `.create-user-review-list` e passa com rácio **6.49**):

```css
/* styles.css:20355 — substituir */
.chip.success {
  background: #dcfce7;
  color: #166534;
  box-shadow: none;
}
```

Uma única alteração corrige as 3 evidências (Mensageria por voz, Organizações e Campanhas usam o mesmo `.chip.success` — [index.html:1368](index.html:1368), [index.html:5433](index.html:5433), [index.html:4146](index.html:4146)).

---

### ✅ Evidência 03 — Diferenciar ações da auditoria (Criar/Editar/Apagar) — **VÁLIDA**

Todas as ações usam o mesmo `.chip.audit-action-chip` azul ([index.html:7482](index.html:7482)). A boa notícia: as linhas **já carregam** o atributo `data-audit-type="create|edit|delete"`, então a diferenciação é CSS puro:

```css
/* adicionar após styles.css:8195 */
.data-row[data-audit-type="create"] .audit-action-chip { background: #dcfce7; color: #166534; }
.data-row[data-audit-type="edit"]   .audit-action-chip { background: #e0f2fe; color: #0369a1; }
.data-row[data-audit-type="delete"] .audit-action-chip { background: #fee2e2; color: #b91c1c; }
```

Os 3 pares passam no contraste (6.49, 5.17 e 5.30). Para não depender só de cor (como o próprio QA recomenda), adicionar um ícone Material Symbols dentro do chip (`add_circle` / `edit` / `delete`) — no protótipo basta inserir o `<span class="material-symbols-rounded">` no markup mockado.

---

### ✅ Evidência 06 — Indicador "Bem-sucedido" azul em vez de verde — **VÁLIDA**

Confirmado: o HTML usa `<div class="mini-card success">` ([index.html:679](index.html:679) e [index.html:990](index.html:990)), mas **a classe `.mini-card.success` não existe no CSS** — só `.mini-card.danger` foi estilizada ([styles.css:21713](styles.css:21713)). Por isso o "Bem-sucedido" herda o azul do `.mini-card` base.

**Como corrigir** — criar a variante que falta (par verde já validado, rácio **6.47**):

```css
/* adicionar após styles.css:21713 */
.mini-card.success {
  background: #eaf7f0;
  color: #166534;
}
```

---

### ✅ Evidência 07 — Marcadores da tabela de agentes muito semelhantes — **VÁLIDA**

`.agents-rag-badge` e `.agents-visibility-badge` ([styles.css:20929](styles.css:20929) e [styles.css:20950](styles.css:20950)) têm **estilos literalmente idênticos** (mesmo fundo `#f3f4f6`, mesma borda, mesma cor `#374151`), e as variantes `--yes`/`--public` também são idênticas entre si (azul `#016ff4` sobre `rgba(1,111,244,0.08)` — que ainda reprova no contraste, rácio ~4.1).

**Como corrigir:**
1. **RAG** → manter neutro, mas com ícone (`database`/`book`): é um atributo técnico.
2. **Visibilidade** → usar ícone semântico (`public` / `lock`) + cor própria, ex. verde soft para público (`#166534` sobre `#dcfce7`) e neutro para privado.
3. **Setor** → manter o chip azul padrão (com a correção de contraste da seção 4).
4. **Alinhamento cabeçalho × linhas:** garantir que `.agents-row.header` e `.agents-row` usem exatamente o mesmo `grid-template-columns` (hoje há override só para o header em [styles.css:20883](styles.css:20883) — revisar para que cada título fique sobre sua coluna).

---

### ✅ Evidência 08 — Campo "Linguagem" sem contexto — **VÁLIDA**

A coluna ([index.html:1212](index.html:1212)) exibe só "C#". O modal de criação já usa o rótulo correto — "Linguagem do código" ([index.html:1735](index.html:1735)) — então a lista está inconsistente com o próprio produto.

**Como corrigir (custo zero, protótipo-friendly):**
1. Renomear o cabeçalho para **"Linguagem do código"** (consistente com o modal); e/ou
2. Reaproveitar o padrão de tooltip que já existe no CSS (`.has-tooltip::after`, [styles.css](styles.css)) no `<span>` do cabeçalho, com texto "Linguagem em que o código da automação foi implementado".

---

### ✅ Evidência 12 — Calendário nativo na auditoria — **VÁLIDA, com ressalva de protótipo**

Há **14 ocorrências** de `<input type="date">` (ex.: [index.html:1321](index.html:1321)), que abrem o datepicker do navegador/SO — aparência varia por dispositivo e não segue o design system.

**Ressalva:** em um protótipo estático, trocar todos por um datepicker custom tem custo alto e valor demonstrativo baixo. Recomendação em 2 níveis:
- **Agora (baixo custo):** padronizar o que o CSS alcança — altura, borda, tipografia Inter e `::-webkit-calendar-picker-indicator` com a cor primária — e garantir `lang="pt-BR"` no `<html>` para localizar o calendário nativo.
- **Produto final:** o projeto **já usa FullCalendar** na agenda de saúde (`.health-agenda-calendar .fc`, [styles.css](styles.css)) — adotar o mesmo componente/estilo como calendário padrão da aplicação, com seleção de intervalo e pt-BR, como o QA sugere.

---

## 3. Inconsistências de componentes (achados adicionais)

1. **Proliferação de azuis:** além dos 5 azuis oficiais do styleguide (`#38BCFF`, `#20A4FE`, `#1991FA`, `#0B82F9`, `#016FF4`), o CSS usa **mais de 15 azuis ad-hoc** como cor de texto/ícone: `#3478f6`, `#2468e8`, `#2f73f4`, `#36a3ff`, `#2563eb`, `#1859c9`, `#0f54b6`, `#0b5fe3`, `#1d4ed8`, `#1f6feb`, `#2d69d9`, `#3949ab`, `#0d47a1`, `#0b73f6`, `#89a6d9`… Consolidar em tokens (`--primary`, `--primary-2` + 1 variante acessível, ver seção 5).
2. **Cinzas duplicados:** `#6b7280`, `#64748b`, `#4b5563`, `#475569`, `#565656`, `#334155`, `#374151` convivem como "texto secundário". O styleguide define um único *Muted* (`#6B7280`). Unificar em 2 tokens (`--muted` para secundário, `--text-subtle` para terciário).
3. **Avatar do usuário** (`.user-avatar`): branco sobre `#0b82f9` (rácio 3.77). Usar `--primary` `#016ff4` de fundo resolve (4.58) e ainda alinha ao styleguide.
4. **Botões de rejeitar** (`.automation-code-reject-btn`, `.health-agenda-renewal-reject`): usam um vermelho fora de paleta `#dc5f5f` que reprova em todas as combinações. Padronizar no vermelho semântico do sistema (`#b91c1c`/`#dc2626`).
5. **Tag "Atenção" do Painel** (`.insight-tag`, [styles.css:21953](styles.css:21953)): branco sobre amarelo `#f7c76b` — rácio **1.57**, o pior do sistema. Usar o padrão de warning já existente: `#a05a00` sobre `#fff4e5` (4.88).
6. **Stepper da Mensageria por voz** (`.voice-step span`, [styles.css:13164](styles.css:13164)): `#89a6d9` sobre `#d7e4f9` — rácio **1.92**; os números das etapas inativas são quase ilegíveis.

---

## 4. Tipografia

**Conforme o styleguide:** família **Inter** correta no `body` ([styles.css:41](styles.css:41)); escala de tokens `--md-*` definida no `:root` e coerente com os tamanhos do styleguide (Body 16/24, Label 14/16, Headline 32); pesos 400–700 respeitados.

**Fora do padrão:**

| # | Problema | Onde | Correção |
|---|---|---|---|
| T1 | **349 `font-size` com px fixo** vs. 486 com token — quase metade do CSS ignora a escala. Piores casos: `13px` (41×), `10px` (15×), `15px`, `17px` — tamanhos que **não existem** na escala do styleguide (11/12/14/16/22/24/28/32…) | todo o styles.css | Mapear: 13px→`--md-label-large` (14) ou `--md-body-small` (12); 10px→`--md-label-small` (11); 15px→16; 17px→16 |
| T2 | Texto abaixo de 11px (10px em 15 regras) prejudica legibilidade | styles.css | Mínimo 11px (`--md-label-small`) |
| T3 | Stack de fallback divergente: `"Inter", "Segoe UI", Helvetica, Arial` em [styles.css:10599](styles.css:10599) difere do stack global (`"Helvetica Neue"`) | styles.css:10599 | Remover a redeclaração e herdar do `body` |
| T4 | **4 stacks monospace diferentes** ([styles.css:14950](styles.css:14950), 9094, 16158, 11056, 11413 — um deles repete `SFMono-Regular` duas vezes) | styles.css | Criar `--font-mono` no `:root` e usar em todos |
| T5 | SVG do fluxo com cores/fontes fixas (`.flow-t`, `.flow-elabel` — `fill: #1e293b`/`#475569`, [styles.css:4731](styles.css:4731)) fora dos tokens | styles.css:4731 | Usar `fill: var(--text)` / `var(--muted)` |

---

## 5. Contraste de cores (WCAG AA — mínimo 4.5:1)

Rácios calculados e validados no [Verificador de Contraste](https://verificador-de-contraste.vercel.app/). **Sugestões aparecem apenas quando o rácio é inferior a 4.5** (pares aprovados não precisam de mudança). A sugestão listada é a primeira retornada pelo verificador (a mais próxima da cor original); a segunda, entre parênteses, dá margem extra.

### 5.1 Texto global

| Cor do texto | Cor de fundo | Rácio | Resultado | Sugestão do verificador |
|---|---|---|---|---|
| `#0c0d0e` (texto padrão) | `#f4f6f9` (fundo página) | 17.97 | ✅ Passa | — |
| `#111827` (títulos) | `#ffffff` | 17.74 | ✅ Passa | — |
| `#0f172a` | `#ffffff` | 17.85 | ✅ Passa | — |
| `#475569` | `#ffffff` | 7.58 | ✅ Passa | — |
| `#6b7280` (muted) | `#ffffff` (painéis) | 4.83 | ✅ Passa | — |
| `#6b7280` (muted — subtítulos de página) | `#f4f6f9` | **4.47** | ❌ Reprova | texto → `#6b717f` (4.52) ou `#666b79` (4.92) |
| `#64748b` | `#ffffff` | 4.76 | ✅ Passa | — |
| `#64748b` | `#f4f6f9` | **4.40** | ❌ Reprova | texto → `#637289` (4.51) ou `#5e6c82` (4.92) |
| `#64748b` (badge muted agentes) | `#f1f5f9` | **4.34** | ❌ Reprova | texto → `#627188` (4.52) |
| `#94a3b8` (hints/placeholders) | `#ffffff` | **2.56** | ❌ Reprova | texto → `#6d7787` (4.53) |
| `#9ca3af` (placeholders) | `#ffffff` | **2.54** | ❌ Reprova | texto → `#727780` (4.50) |

### 5.2 Azul primário e derivados

| Cor do texto | Cor de fundo | Rácio | Resultado | Sugestão do verificador |
|---|---|---|---|---|
| `#016ff4` (links/ações) | `#ffffff` | 4.58 | ✅ Passa | — |
| `#ffffff` (botões primários) | `#016ff4` | 4.58 | ✅ Passa | — |
| `#016ff4` (links sobre fundo da página) | `#f4f6f9` | **4.23** | ❌ Reprova | texto → `#016beb` (4.51) ou `#0166df` (4.89) |
| `#016ff4` (**chip padrão**, ~35 regras) | `#eef6ff` | **4.20** | ❌ Reprova | texto → `#016aea` (4.53) ou `#0165de` (4.92) |
| `#016ff4` (menu selecionado) | `#e6f0ff` | **3.99** | ❌ Reprova | texto → `#0167e3` (4.51) |
| `#016ff4` (badge fluxo híbrido) | `#e8f2ff` | **4.05** | ❌ Reprova | texto → `#0168e6` (4.50) |
| `#ffffff` (avatar do usuário) | `#0b82f9` | **3.77** | ❌ Reprova | fundo → `#0a75e1` (4.52) — ou usar `--primary` `#016ff4` (4.58) |
| `#3478f6` (tags de organização) | `#f1f7ff` | **3.77** | ❌ Reprova | texto → `#2f6cde` (4.51) |
| `#3478f6` (toggle de seção) | `#f1f5f9` | **3.71** | ❌ Reprova | texto → `#2f6bdc` (4.50) |
| `#2468e8` (voltar — mensageria) | `#d9e7fb` | **3.97** | ❌ Reprova | texto → `#2160d7` (4.51) |
| `#89a6d9` (stepper inativo) | `#d7e4f9` | **1.92** | ❌ Reprova | texto → `#556686` (4.50) |
| `#ffffff` (badge chat direto) | `#36a3ff` | **2.68** | ❌ Reprova | fundo → `#297ac0` (4.53) |

> **Recomendação estrutural:** em vez de corrigir ponto a ponto, criar um token único `--primary-text: #0162d8` (variante acessível do azul da marca — passa com folga sobre **todas** as superfícies claras do sistema: 4.89 sobre `#e6f0ff`, ~4.9+ sobre `#eef6ff`/`#f4f6f9`) e usá-lo para texto/ícone azul sobre fundos claros. `#016ff4` continua para botões sólidos com texto branco, onde já passa.

### 5.3 Cores semânticas (status, chips, alertas)

| Cor do texto | Cor de fundo | Rácio | Resultado | Sugestão do verificador |
|---|---|---|---|---|
| `#ffffff` (chip success atual) | `#15803d` | 5.02 | ✅ Passa* | — (*passa no contraste, mas reprova em consistência — ver Evidências 1/5/9) |
| `#166534` (chip success proposto) | `#dcfce7` | 6.49 | ✅ Passa | — |
| `#a05a00` (chip warning) | `#fff4e5` | 4.88 | ✅ Passa | — |
| `#b91c1c` (chip danger) | `#fee2e2` | 5.30 | ✅ Passa | — |
| `#0369a1` (chip running) | `#e0f2fe` | 5.17 | ✅ Passa | — |
| `#475569` (chip paused) | `#f1f5f9` | 6.92 | ✅ Passa | — |
| `#16a34a` (texto de sucesso avulso) | `#ffffff` | **3.30** | ❌ Reprova | texto → `#12883e` (4.55) |
| `#a16207` (badge Telegram soft) | `#fff1cc` | **4.39** | ❌ Reprova | texto → `#9f6007` (4.51) |
| `#a16207` (badge preview automação) | `#fff4cc` | **4.47** | ❌ Reprova | texto → `#a06107` (4.53) |
| `#dc5f5f` (botão rejeitar outline) | `#ffffff` | **3.59** | ❌ Reprova | texto → `#c15454` (4.50) — melhor: usar `#dc2626` (4.83) do sistema |
| `#dc5f5f` (rejeitar hover) | `#fdecec` | **3.15** | ❌ Reprova | texto → `#b34d4d` (4.50) — melhor: `#b91c1c` (padrão danger) |
| `#ffffff` (botão rejeitar sólido) | `#dc5f5f` | **3.59** | ❌ Reprova | fundo → `#c15454` (4.50) — melhor: `#dc2626` |
| `#ffffff` (license pill danger) | `#ef4444` | **3.76** | ❌ Reprova | fundo → `#d83d3d` (4.51) |
| `#ffffff` (tag "Atenção" do Painel) | `#f7c76b` | **1.57** | ❌ Reprova | fundo → `#8e723e` (4.54) — melhor: inverter para o padrão warning `#a05a00` sobre `#fff4e5` (4.88) |

### 5.4 Estados desabilitados (nota)

`#8aa2c8` sobre `#dbe4f1` (botão primário disabled, 2.03) e `#94a3b8` sobre `#f8fafc` (outline disabled, 2.45) reprovam, mas **WCAG isenta componentes desabilitados** do requisito de contraste. Nenhuma ação obrigatória; apenas evitar usar esses mesmos pares em elementos ativos.

### 5.5 Ícones e elementos não textuais (critério 3:1 — WCAG 1.4.11)

| Elemento | Par | Rácio | Resultado |
|---|---|---|---|
| Ícone stat-card warning | `#f59e0b` / `#fff4e5` | 1.98 | ❌ (mín. 3.0) → usar `#b45309` |
| Ícone WhatsApp saúde | `#22c55e` / `#f0fdf4` | 2.18 | ❌ → usar `#15803d` |
| Ícone stat verde (histórico híbrido) | `#23a35a` / `#e8f8ef` | 2.96 | ❌ (limítrofe) → `#15803d` |
| Ícone navegação dashboard | `#0b82f9` / `#eef6ff` | 3.45 | ✅ como ícone; ❌ se acompanhar texto |

---

## 6. Priorização (considerando protótipo estático)

**P0 — alto impacto, custo mínimo (só CSS, corrige QA + acessibilidade):**
1. `.chip.success` → padrão soft (resolve Evidências 1, 5 e 9 de uma vez).
2. `.mini-card.success` verde (Evidência 6).
3. Chips de auditoria por tipo via `data-audit-type` (Evidência 3).
4. Chip padrão `#016ff4 → #016aea` (ou token `--primary-text`) — corrige ~35 regras de uma vez.
5. `.insight-tag` e stepper da mensageria (rácios 1.57 e 1.92 — piores do sistema).

**P1 — consistência visível:**
6. Badges da tabela de agentes com semântica própria + alinhamento do grid (Evidência 7).
7. Cabeçalho "Linguagem do código" + tooltip (Evidência 8).
8. Subtítulos (`--muted`) e placeholders escurecidos conforme tabela 5.1.
9. Vermelho `#dc5f5f` → paleta semântica oficial.

**P2 — dívida de design system (pode esperar o produto real):**
10. Datepicker padronizado reaproveitando o FullCalendar existente (Evidência 12).
11. Consolidação dos 15+ azuis e 7+ cinzas em tokens.
12. Migração dos 349 `font-size` fixos para a escala `--md-*`.

---

*Relatório gerado por análise estática de `styles.css` (24.029 linhas), `index.html` e `app.js`, com rácios verificados no verificador-de-contraste.vercel.app segundo a fórmula de luminância relativa do WCAG 2.1.*
