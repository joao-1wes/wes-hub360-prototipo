# Máquinas virtuais

**Rota:** `#/dashboard/vm-monitoring` · **Página:** `page-vm-monitoring`
([index.html:1048](../index.html)) · **Voltar ao índice:** [README](README.md)

---

## Propósito

Acompanhar saúde, consumo e disponibilidade da frota de máquinas virtuais por
organização — "Acompanhe a saúde, consumo e disponibilidade das máquinas virtuais."

## Elementos de UI

- **Filtro de organização** (`vmOrganizationFilter`): `all` / `cedae` (ADM Cliente) / `avas-group` (Grupo AVAS).
- **Painel de métricas da frota** (`vmMetricsPanel`) — 4 fleet-cards com valor + barra:
  - CPU média (`vmCpuValue` / `vmCpuBar`)
  - Memória média (`vmMemoryValue` / `vmMemoryBar`)
  - Disco médio (`vmDiskValue` / `vmDiskBar`)
  - Rede média em MB/s (`vmNetworkValue` / `vmNetworkBar`)
- **Tendência 24h** (`vmTrendText`).
- **Acordeão "Máquinas"** — grade de `vm-machine-card` (não é tabela), cada card com `data-vm-*` (cpu/memory/disk/network/organization). Estado vazio `vmMachinesEmpty`.

## Lógica JS (refs em [app.js:477](../app.js))

- `updateVmFleetMetrics(cards, org)` ([app.js:17123](../app.js)) — **núcleo**: calcula médias de CPU/memória/disco (%) e rede (MB/s) sobre os cards visíveis e escreve valores + larguras das barras.
- `syncVmOrganizationFilter()` ([app.js:17157](../app.js)) — filtra cards por organização + escopo de acesso (`isInOrganizationScope`), atualiza estado vazio e recalcula métricas.
- `applyVmOrganizationAccessScope(access)` ([app.js:17180](../app.js)) — restringe/pré-seleciona o filtro conforme o `organizationScope` do usuário.
- `setVmMachinesAccordionExpanded(expanded)` ([app.js:17097](../app.js)) — abre/fecha o acordeão.

## Dados mock — 4 VMs fixas ([index.html:1122](../index.html))

| Máquina | Org / Ambiente | CPU | Mem | Disco | Rede |
|---------|----------------|-----|-----|-------|------|
| `04d1f883…` | ADM Cliente / Produção | 18 | 46 | 32 | 2 |
| `vm-api-02` | ADM Cliente / Produção | 74 | 68 | 57 | 8 |
| `vm-worker-07` | Grupo AVAS / Operações | 41 | 52 | 39 | 5 |
| `vm-db-01` | Grupo AVAS / Banco de dados | 63 | 81 | 91 | 11 |

> As métricas do painel são **derivadas** (médias) desses `data-*`; os valores no
> HTML (CPU 49% etc.) são apenas placeholders sobrescritos por `updateVmFleetMetrics`.
