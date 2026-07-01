(function () {
  const STYLE_ID = 'wes-environment-ui-style';
  const selectedEnvironmentSlugs = new Set();
  const baseRefreshAgentsTableFromApi =
    typeof refreshAgentsTableFromApi === 'function' ? refreshAgentsTableFromApi.bind(window) : null;

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .agents-scope-selects {
        align-items: stretch;
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
      }
      .wes-env-hidden {
        display: none !important;
      }
      .wes-env-filter {
        position: relative;
        min-width: 200px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex: 0 0 auto;
      }
      .wes-env-filter-btn {
        min-width: 200px;
        min-height: 54px;
        justify-content: center;
        gap: 10px;
        background: linear-gradient(90deg, #38bcff 0%, #20a4fe 35%, #1991fa 65%, #016ff4 100%);
        border: none;
        box-shadow: 0 8px 24px rgba(1, 111, 244, 0.18);
      }
      .wes-env-filter-btn .lucide {
        width: 18px;
        height: 18px;
      }
      .wes-env-menu {
        position: absolute;
        top: calc(100% + 12px);
        left: 0;
        width: min(360px, calc(100vw - 32px));
        padding: 16px;
        border-radius: 24px;
        background: #fff;
        border: 1px solid rgba(1, 111, 244, 0.12);
        box-shadow: 0 20px 48px rgba(0, 16, 53, 0.14);
        z-index: 40;
      }
      .wes-env-menu[hidden] {
        display: none !important;
      }
      .wes-env-menu-top {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 8px;
      }
      .wes-env-clear {
        appearance: none;
        border: none;
        background: transparent;
        color: #016ff4;
        font-weight: 700;
        font-size: 14px;
        cursor: pointer;
        padding: 0;
      }
      .wes-env-title {
        font-size: 28px;
        line-height: 1.2;
        font-weight: 700;
        color: #001035;
        margin: 0 0 14px;
      }
      .wes-env-options {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .wes-env-option {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 14px 16px;
        border: none;
        border-radius: 18px;
        background: transparent;
        color: #001035;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        text-align: left;
      }
      .wes-env-option:hover {
        background: #eef5ff;
      }
      .wes-env-option.is-active {
        background: #e7f0ff;
        color: #016ff4;
      }
      .wes-env-option-check {
        opacity: 0;
        color: #016ff4;
      }
      .wes-env-option.is-active .wes-env-option-check {
        opacity: 1;
      }
      .wes-env-create {
        margin-top: 14px;
        padding-top: 14px;
        border-top: 1px solid rgba(1, 111, 244, 0.12);
      }
      .wes-env-create-btn {
        appearance: none;
        border: none;
        background: transparent;
        color: #016ff4;
        font-weight: 700;
        font-size: 14px;
        cursor: pointer;
        padding: 0;
      }
      .wes-env-filter-summary {
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: rgba(12, 13, 14, 0.5);
        margin-bottom: 6px;
      }
      .wes-env-filter-summary-wrap {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        flex: 0 0 328px;
        width: 328px;
        min-width: 328px;
        max-width: 328px;
      }
      .wes-env-filter-current {
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 0;
        padding: 12px 14px;
        border-radius: 16px;
        background: #fff;
        border: 1px solid rgba(1, 111, 244, 0.18);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        overflow: hidden;
      }
      .wes-env-filter-current strong {
        flex: 1 1 auto;
        color: #001035;
        font-size: 15px;
        line-height: 1.4;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      @media (max-width: 980px) {
        .wes-env-filter-summary-wrap {
          flex: 1 1 100%;
          width: 100%;
          min-width: 0;
          max-width: none;
        }
        .wes-env-filter-current strong {
          white-space: normal;
          text-overflow: clip;
        }
      }
      .wes-env-modal-note {
        margin-top: 8px;
        color: #6b7280;
        font-size: 13px;
        line-height: 1.5;
      }
      .wes-project-agent-box {
        margin-top: 18px;
        padding: 16px;
        border-radius: 18px;
        background: linear-gradient(180deg, rgba(56, 188, 255, 0.08), rgba(1, 111, 244, 0.03));
        border: 1px solid rgba(1, 111, 244, 0.14);
      }
      .wes-project-agent-title {
        margin: 0 0 6px;
        font-size: 15px;
        font-weight: 700;
        color: #001035;
      }
      .wes-project-agent-help {
        margin: 0 0 12px;
        color: #6b7280;
        font-size: 13px;
        line-height: 1.45;
      }
      .wes-project-agent-choice {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 12px 0;
      }
      .wes-project-agent-fields {
        display: grid;
        gap: 12px;
        margin-top: 12px;
      }
      .wes-project-agent-fields[hidden] {
        display: none !important;
      }
      .wes-project-edit-btn {
        margin-left: auto;
      }
      .wes-project-delete-btn {
        margin-left: 8px;
      }
    `;
    document.head.appendChild(style);
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function ensureHiddenScopeSelects() {
    let host = byId('agentsScopeSelectHost');
    if (!host) {
      host = document.createElement('div');
      host.id = 'agentsScopeSelectHost';
      host.hidden = true;
      host.className = 'wes-env-hidden';
      document.body.appendChild(host);
    }
    if (!host) return;
    if (!byId('agentsPageOrgSelect')) {
      const orgSelect = document.createElement('select');
      orgSelect.id = 'agentsPageOrgSelect';
      orgSelect.className = 'hub-select';
      orgSelect.setAttribute('aria-label', 'Setor');
      orgSelect.hidden = true;
      orgSelect.classList.add('wes-env-hidden');
      host.appendChild(orgSelect);
    }
    if (!byId('agentsPageContextSelect')) {
      const ctxSelect = document.createElement('select');
      ctxSelect.id = 'agentsPageContextSelect';
      ctxSelect.className = 'hub-select';
      ctxSelect.setAttribute('aria-label', 'Projeto');
      ctxSelect.hidden = true;
      ctxSelect.classList.add('wes-env-hidden');
      host.appendChild(ctxSelect);
    }
  }

  function slugify(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 120);
  }

  function getOrgSelect() {
    return byId('agentsPageOrgSelect');
  }

  function getAllEnvironmentSlugs() {
    const orgSel = getOrgSelect();
    if (!orgSel) return [];
    return Array.from(orgSel.options)
      .map((option) => String(option.value || '').trim())
      .filter(Boolean);
  }

  function getSelectedEnvironmentSlugs() {
    return Array.from(selectedEnvironmentSlugs).filter(Boolean);
  }

  function getEffectiveEnvironmentSlugs() {
    const selected = getSelectedEnvironmentSlugs();
    return selected.length ? selected : getAllEnvironmentSlugs();
  }

  function syncUnderlyingEnvironmentSelect() {
    const orgSel = getOrgSelect();
    if (!orgSel) return;
    const preferred = getSelectedEnvironmentSlugs()[0] || '';
    if (preferred && orgSel.value !== preferred) {
      orgSel.value = preferred;
    }
  }

  function closeMenu() {
    const menu = byId('wesEnvironmentMenu');
    const btn = byId('wesEnvironmentFilterBtn');
    if (menu) menu.hidden = true;
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  function refreshContextFilter(clearSelection) {
    const ctxSel = byId('agentsPageContextSelect');
    if (!ctxSel) return;
    if (clearSelection) {
      ctxSel.value = '';
      ctxSel.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  function clearSearchFilter() {
    const search = byId('agentsSearchInput');
    if (!search) return;
    search.value = '';
    search.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function resolveOrgSlugForContext(contextId) {
    if (!contextId || typeof HUB_SCOPE === 'undefined') return '';
    return (
      Object.entries(HUB_SCOPE).find(([, org]) =>
        Array.isArray(org?.contexts) && org.contexts.some((ctx) => String(ctx.id).trim() === String(contextId).trim())
      )?.[0] || ''
    );
  }

  function applyEnvironmentFilterToDom() {
    const selectedSlugs = getSelectedEnvironmentSlugs();
    const selectedSet = new Set(selectedSlugs);
    const agentsPage = byId('page-agents');
    if (agentsPage) {
      agentsPage.querySelectorAll('.agents-org-panel[data-hub-org]').forEach((panel) => {
        const matches = !selectedSet.size || selectedSet.has(String(panel.dataset.hubOrg || '').trim());
        panel.classList.toggle('is-hidden', !matches);
        panel.hidden = !matches;
      });
    }

    const allTable = byId('agentsAllAgentsTable');
    if (allTable) {
      allTable.querySelectorAll('.agents-row:not(.header)').forEach((row) => {
        const rowOrgSlug = String(row.dataset.hubOrg || '').trim();
        if (rowOrgSlug) row.dataset.hubOrg = rowOrgSlug;
        const matches = !selectedSet.size || !rowOrgSlug || selectedSet.has(rowOrgSlug);
        row.classList.toggle('agents-row--scope-hide', !matches);
      });
    }

    if (typeof resetAgentsPagination === 'function') resetAgentsPagination();
    if (typeof applyAgentsProjectRoute === 'function') applyAgentsProjectRoute();
  }

  function renderEnvironmentFilteredAgents(agents) {
    const table = byId('agentsAllAgentsTable');
    if (!table) return;
    table.querySelectorAll('.agents-row:not(.header)').forEach((row) => row.remove());
    const frag = document.createDocumentFragment();
    agents.forEach((agent) => {
      let row = null;
      if (typeof buildAgentRowElement === 'function') {
        row = buildAgentRowElement(agent);
      } else {
        const hasProject = Boolean(agent?.project_id);
        const desc = `${agent.description || ''}${hasProject ? '' : ' • Sem projeto'}`.trim();
        const visibility = String(agent?.visibility || agent?.access || agent?.scope || '').trim().toLowerCase();
        const isPublic =
          Boolean(agent?.public_url || agent?.share_url || agent?.public_link) ||
          ['public', 'público', 'publico', 'shared', 'open', 'true', '1', 'yes'].includes(visibility) ||
          Boolean(agent?.is_public === true || agent?.public === true);
        const rawPublicLink = String(agent?.public_url || agent?.share_url || agent?.public_link || '').trim();
        const publicLink = isPublic
          ? (rawPublicLink || `#/agent-chat?agent=${encodeURIComponent(String(agent?.id || '').trim())}`)
          : '';
        row = document.createElement('div');
        row.className = 'agents-row';
        row.dataset.fromApi = 'true';
        row.dataset.agentUuid = agent.id;
        row.dataset.projectId = agent.project_id || '';
        row.dataset.hubOrg = agent.environment_slug || '';
        row.dataset.agentsEnvironment = agent.environment_slug || '';
        row.dataset.voiceEnabled = agent.voice_enabled ? 'true' : 'false';
        const actionIcon = agent?.voice_enabled ? 'audio-lines' : 'message-circle';
        const actionLabel = agent?.voice_enabled ? 'Conversar por voz' : 'Conversar';
        row.innerHTML = `<span><strong>${agent.name || ''}</strong></span><span>${desc}</span><span>${String(agent.id || '').slice(0, 8)}...</span><span><span class="agents-rag-badge${agent.use_rag ? ' agents-rag-badge--yes' : ''}">${agent.use_rag ? 'Sim' : 'Não'}</span></span><span class="agents-row-environment"><span class="agents-environment-badge">${agent.environment_slug || ''}</span></span><span class="agents-row-visibility"><span class="agents-visibility-badge${isPublic ? ' agents-visibility-badge--public' : ''}">${isPublic ? 'Público' : 'Privado'}</span></span><span class="row-actions"><button type="button" class="icon-btn action-icon ${isPublic && publicLink ? 'agents-copy-link-btn' : 'muted-icon'}" data-agent-public-link="${publicLink.replace(/"/g, '&quot;')}" aria-label="Compartilhar agente"${isPublic && publicLink ? '' : ' disabled'}><i data-lucide="share"></i></button><button type="button" class="icon-btn action-icon danger agent-delete-toggle" aria-label="Excluir agente"><span class="material-symbols-rounded">delete</span></button><button type="button" class="icon-btn action-icon agent-chat-toggle" aria-label="${actionLabel}"><i data-lucide="${actionIcon}"></i></button></span>`;
      }
      const orgSlug = agent.environment_slug || '';
      if (orgSlug) row.dataset.hubOrg = orgSlug;
      frag.appendChild(row);
    });
    table.appendChild(frag);
    if (typeof renderAgentsProjectDetailsFromApi === 'function') renderAgentsProjectDetailsFromApi(agents);
    if (typeof window.lucide !== 'undefined') window.lucide.createIcons();
    if (typeof window.applyAgentsAdvancedFilters === 'function') window.applyAgentsAdvancedFilters();
    applyEnvironmentFilterToDom();
  }

  async function refreshAgentsForSelectedEnvironments() {
    const selected = getSelectedEnvironmentSlugs();
    if (!selected.length) {
      if (typeof window.wesApiFetch !== 'function' || !window.WesDashboardAuth?.isAuthenticated()) {
        applyEnvironmentFilterToDom();
        return;
      }
      if (typeof setAgentsApiStatus === 'function') {
        setAgentsApiStatus('Carregando agentes de todos os setores...', false);
      }
      const res = await window.wesApiFetch('/agents');
      const body = await res.json().catch(() => []);
      if (res.ok && Array.isArray(body)) {
        renderEnvironmentFilteredAgents(body);
        if (typeof setAgentsApiStatus === 'function') {
          setAgentsApiStatus(body.length ? '' : 'Nenhum agente encontrado para este usuário.', false);
        }
      } else {
        applyEnvironmentFilterToDom();
      }
      return;
    }
    if (selected.length === 1) {
      if (baseRefreshAgentsTableFromApi) {
        await baseRefreshAgentsTableFromApi();
        applyEnvironmentFilterToDom();
      }
      return;
    }
    if (typeof window.wesApiFetch !== 'function' || !window.WesDashboardAuth?.isAuthenticated()) {
      applyEnvironmentFilterToDom();
      return;
    }
    if (typeof setAgentsApiStatus === 'function') {
      setAgentsApiStatus('Carregando agentes dos setores selecionados...', false);
    }
    const agents = [];
    const seenIds = new Set();
    for (const slug of selected) {
      const org = typeof HUB_SCOPE !== 'undefined' ? HUB_SCOPE[slug] : null;
      if (!org?.id) continue;
      const params = new URLSearchParams();
      params.set('environment_id', org.id);
      const res = await window.wesApiFetch(`/agents?${params.toString()}`);
      const body = await res.json().catch(() => []);
      if (!res.ok || !Array.isArray(body)) continue;
      body.forEach((agent) => {
        if (!agent?.id || seenIds.has(agent.id)) return;
        seenIds.add(agent.id);
        agents.push(agent);
      });
    }
    renderEnvironmentFilteredAgents(agents);
    if (typeof setAgentsApiStatus === 'function') {
      setAgentsApiStatus(agents.length ? '' : 'Nenhum agente nos setores selecionados.', false);
    }
  }

  async function applyEnvironmentSelection(options = {}) {
    const { clearSearch = false, clearContext = false, close = false } = options;
    const orgSel = getOrgSelect();
    if (!orgSel) return;
    syncUnderlyingEnvironmentSelect();
    if (clearContext) refreshContextFilter(true);
    if (clearSearch) clearSearchFilter();
    if (close) closeMenu();
    try {
      await refreshAgentsForSelectedEnvironments();
    } catch {
      applyEnvironmentFilterToDom();
    }
    applyEnvironmentFilterToDom();
    if (typeof syncAgentsScopeStatus === 'function') syncAgentsScopeStatus();
    syncFilterUi();
    if (typeof window.lucide !== 'undefined') window.lucide.createIcons();
  }

  function syncFilterUi() {
    const optionsWrap = byId('wesEnvironmentOptions');
    const orgSel = getOrgSelect();
    if (!optionsWrap || !orgSel) return;
    optionsWrap.innerHTML = '';
    Array.from(orgSel.options).forEach((option) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'wes-env-option';
      if (selectedEnvironmentSlugs.has(option.value)) btn.classList.add('is-active');
      btn.innerHTML = `<span>${option.textContent}</span><i data-lucide="check" class="wes-env-option-check"></i>`;
      btn.addEventListener('click', async () => {
        if (selectedEnvironmentSlugs.has(option.value)) {
          selectedEnvironmentSlugs.delete(option.value);
        } else {
          selectedEnvironmentSlugs.add(option.value);
        }
        await applyEnvironmentSelection();
      });
      optionsWrap.appendChild(btn);
    });
  }

  function ensureFilterUi() {
    ensureHiddenScopeSelects();
    /*const toolbar = byId('agentsScopeControls') || byId('agentsEnvironmentToolbar') || document.querySelector('.agents-scope-toolbar .agents-scope-selects');*/
    const toolbar = document.querySelector('.agents-environment-toolbar-controls');
    if (!toolbar) return;
    toolbar.innerHTML = '';

    const filter = document.createElement('div');
    filter.className = 'wes-env-filter';
    filter.id = 'wesEnvironmentFilter';
    filter.innerHTML = `
      <button type="button" class="btn primary with-icon wes-env-filter-btn" id="wesEnvironmentFilterBtn" aria-expanded="false">
        <i data-lucide="funnel"></i>
        Filtrar setores
      </button>
      <div class="wes-env-menu" id="wesEnvironmentMenu" hidden>
        <div class="wes-env-menu-top">
          <button type="button" class="wes-env-clear" id="wesEnvironmentClearBtn">Limpar filtros</button>
        </div>
        <div class="wes-env-title">Setor</div>
        <div class="wes-env-options" id="wesEnvironmentOptions"></div>
        <div class="wes-env-create">
          <button type="button" class="wes-env-create-btn" id="wesEnvironmentCreateBtn">Não encontrou o setor? Crie um novo setor</button>
        </div>
      </div>
    `;

    toolbar.prepend(filter);

    byId('wesEnvironmentFilterBtn')?.addEventListener('click', (event) => {
      event.stopPropagation();
      const menu = byId('wesEnvironmentMenu');
      const btn = byId('wesEnvironmentFilterBtn');
      const next = Boolean(menu?.hidden);
      if (menu) menu.hidden = !next;
      if (btn) btn.setAttribute('aria-expanded', next ? 'true' : 'false');
      syncFilterUi();
      if (typeof window.lucide !== 'undefined') window.lucide.createIcons();
    });

    byId('wesEnvironmentClearBtn')?.addEventListener('click', async () => {
      selectedEnvironmentSlugs.clear();
      await applyEnvironmentSelection({ clearSearch: true, clearContext: true, close: true });
    });

    document.addEventListener('click', (event) => {
      const filterRoot = byId('wesEnvironmentFilter');
      if (!filterRoot?.contains(event.target)) closeMenu();
    });

    if (typeof window.lucide !== 'undefined') window.lucide.createIcons();
    syncFilterUi();
  }

  function ensureEnvironmentModal() {
    if (byId('wesEnvironmentModal')) return;
    const section = document.querySelector('#page-agents') || document.body;
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'wesEnvironmentModal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="modal-backdrop" data-wes-environment-close></div>
      <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="wesEnvironmentModalTitle">
        <div class="modal-header">
          <h3 id="wesEnvironmentModalTitle">Criar setor</h3>
          <button type="button" class="icon-btn" aria-label="Fechar" data-wes-environment-close>
            <span class="material-symbols-rounded">close</span>
          </button>
        </div>
        <form id="wesEnvironmentForm" class="modal-body">
          <p id="wesEnvironmentError" class="modal-form-error" role="alert" hidden></p>
          <label class="modal-label" for="wesEnvironmentName">Nome do setor</label>
          <input class="modal-input" id="wesEnvironmentName" type="text" maxlength="120" autocomplete="off" placeholder="Ex.: WES Brasil" required />
          <label class="modal-label" for="wesEnvironmentSlug">Identificador interno do setor (opcional)</label>
          <input class="modal-input" id="wesEnvironmentSlug" type="text" maxlength="120" autocomplete="off" placeholder="Ex.: wes-brasil" />
          <p class="wes-env-modal-note">Se você não preencher, o sistema gera esse identificador automaticamente a partir do nome do setor.</p>
        </form>
        <div class="modal-footer">
          <button type="button" class="btn outline" data-wes-environment-close>Cancelar</button>
          <button type="submit" form="wesEnvironmentForm" class="btn primary">Criar setor</button>
        </div>
      </div>
    `;
    section.appendChild(modal);

    const close = () => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    };
    const open = () => {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      byId('wesEnvironmentName')?.focus();
    };

    document.addEventListener('click', (event) => {
      if (event.target?.id === 'wesEnvironmentCreateBtn' || event.target?.id === 'agentsOpenEnvironmentModal') {
        closeMenu();
        open();
      }
      if (event.target?.closest('[data-wes-environment-close]')) {
        close();
      }
    });

    byId('wesEnvironmentForm')?.addEventListener('submit', async (event) => {
      event.preventDefault();
      const error = byId('wesEnvironmentError');
      const name = byId('wesEnvironmentName')?.value?.trim() || '';
      const orgSel = getOrgSelect();
      if (!name || !orgSel) return;
      let slug = byId('wesEnvironmentSlug')?.value?.trim() || slugify(name);
      if (!slug) slug = slugify(name);
      const exists = Array.from(orgSel.options).some((opt) => opt.value === slug);
      if (exists) {
        if (error) {
          error.hidden = false;
          error.textContent = 'Ja existe um setor com esse identificador interno.';
        }
        return;
      }
      if (error) {
        error.hidden = true;
        error.textContent = '';
      }
      try {
        let persistedId = slug;
        if (typeof window.wesApiFetch === 'function' && window.WesDashboardAuth?.isAuthenticated()) {
          const res = await window.wesApiFetch('/environments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, slug }),
          });
          const raw = await res.text();
          let body = null;
          try {
            body = raw ? JSON.parse(raw) : null;
          } catch {
            body = null;
          }
          if (!res.ok) {
            const detail =
              typeof body?.detail === 'string'
                ? body.detail
                : Array.isArray(body?.detail)
                  ? body.detail.map((x) => (x.msg ? x.msg : JSON.stringify(x))).join('; ')
                  : raw || res.statusText;
            throw new Error(detail);
          }
          persistedId = body?.environment_id || slug;
        }
        if (typeof HUB_SCOPE !== 'undefined') {
          HUB_SCOPE[slug] = { id: persistedId, name, contexts: [], projects: [] };
        }
        if (typeof syncAgentsPageScopeSelects === 'function') syncAgentsPageScopeSelects();
        if (typeof syncProjectModalSelects === 'function') syncProjectModalSelects();
        if (typeof syncAgentModalScope === 'function') syncAgentModalScope();
        selectedEnvironmentSlugs.clear();
        selectedEnvironmentSlugs.add(slug);
        await applyEnvironmentSelection({ clearSearch: true, clearContext: true });
        close();
      } catch (err) {
        if (error) {
          error.hidden = false;
          error.textContent = err instanceof Error ? err.message : String(err);
        }
      }
    });
  }

  function patchAgentModal() {
    const scopeBox = byId('agentModalScopeBox');
    if (!scopeBox || byId('agentModalEnvironment')) return;
    const orgRow = scopeBox.querySelector('.modal-scope-row');
    if (orgRow) {
      orgRow.innerHTML = `
        <label class="modal-scope-key" for="agentModalEnvironment">Setor</label>
        <div class="hub-select-wrap hub-select-wrap--block">
          <span class="material-symbols-rounded hub-select-icon" aria-hidden="true">corporate_fare</span>
          <select class="hub-select" id="agentModalEnvironment" aria-label="Setor do agente"></select>
          <span class="material-symbols-rounded hub-select-chevron" aria-hidden="true">expand_more</span>
        </div>
      `;
      orgRow.classList.add('modal-scope-row--stack');
    }
    const contextRow = byId('agentModalContext')?.closest('.modal-scope-row');
    contextRow?.classList.add('wes-env-hidden');
    const note = scopeBox.querySelector('.modal-scope-note');
    note?.classList.add('wes-env-hidden');
  }

  function patchProjectModal() {
    const label = document.querySelector('label[for="projectModalOrg"]');
    if (label) label.textContent = 'Setor';
    const nameInput = byId('projectModalName');
    if (nameInput) {
      nameInput.placeholder = 'Ex.: Operações integradas';
    }
    const orgSelect = byId('projectModalOrg');
    if (orgSelect) {
      orgSelect.setAttribute('aria-label', 'Setor do projeto');
    }
    const contextBlock = byId('projectModalContext')?.closest('.project-modal-context-block');
    contextBlock?.classList.add('wes-env-hidden');
    const form = byId('projectModalForm');
    if (!form) return;
    if (!byId('wesProjectDescription')) {
      nameInput?.insertAdjacentHTML(
        'afterend',
        `
          <label class="modal-label" for="wesProjectDescription">Descrição do projeto</label>
          <textarea class="modal-textarea" id="wesProjectDescription" rows="3" maxlength="4000" placeholder="Descreva o objetivo do projeto"></textarea>
        `
      );
    }
    if (byId('wesProjectAgentBox')) return;
    form.insertAdjacentHTML(
      'beforeend',
      `
        <div class="wes-project-agent-box" id="wesProjectAgentBox">
          <h4 class="wes-project-agent-title">Agente do projeto</h4>
          <p class="wes-project-agent-help">Opcionalmente, associe um agente existente ou informe os dados para criar um agente novo.</p>
          <label class="wes-project-agent-choice">
            <input type="radio" name="projectAgentMode" value="existing" checked />
            <span>Adicionar um agente existente</span>
          </label>
          <label class="wes-project-agent-choice">
            <input type="radio" name="projectAgentMode" value="new" />
            <span>Criar um agente novo</span>
          </label>
          <div class="wes-project-agent-fields" id="wesProjectAgentExistingFields">
            <label class="modal-label" for="wesProjectExistingAgent">Agente existente</label>
            <div class="hub-select-wrap hub-select-wrap--block">
              <span class="material-symbols-rounded hub-select-icon" aria-hidden="true">smart_toy</span>
              <select id="wesProjectExistingAgent" class="hub-select" aria-label="Agente existente do projeto"></select>
              <span class="material-symbols-rounded hub-select-chevron" aria-hidden="true">expand_more</span>
            </div>
          </div>
          <div class="wes-project-agent-fields" id="wesProjectAgentNewFields" hidden>
            <label class="modal-label" for="wesProjectNewAgentName">Nome do novo agente</label>
            <input class="modal-input" id="wesProjectNewAgentName" type="text" maxlength="200" autocomplete="off" placeholder="Ex.: Agente de Atendimento" />
            <label class="modal-label" for="wesProjectNewAgentDescription">Descrição do novo agente</label>
            <textarea class="modal-textarea" id="wesProjectNewAgentDescription" rows="3" maxlength="4000" placeholder="Descreva o papel do agente"></textarea>
            <label class="modal-label" for="wesProjectNewAgentPrompt">Prompt do sistema</label>
            <textarea class="modal-textarea" id="wesProjectNewAgentPrompt" rows="5" maxlength="12000" placeholder="Defina como o agente deve responder e se comportar"></textarea>
            <label class="switch-row" for="wesProjectNewAgentUseRag">
              <span class="agents-header-tooltip" data-tooltip="Conhecimento interno">RAG</span>
              <span class="switch">
                <input id="wesProjectNewAgentUseRag" type="checkbox" checked />
                <span class="slider"></span>
              </span>
            </label>
          </div>
        </div>
      `
    );
  }

  function normalizeProjectModalPortuguese() {
    const nameInput = byId('projectModalName');
    if (nameInput) {
      nameInput.placeholder = 'Ex.: Opera\u00e7\u00f5es integradas';
    }
    const projectDescriptionLabel = document.querySelector('label[for="wesProjectDescription"]');
    if (projectDescriptionLabel) {
      projectDescriptionLabel.textContent = 'Descri\u00e7\u00e3o do projeto';
    }
    const newAgentDescriptionLabel = document.querySelector('label[for="wesProjectNewAgentDescription"]');
    if (newAgentDescriptionLabel) {
      newAgentDescriptionLabel.textContent = 'Descri\u00e7\u00e3o do novo agente';
    }
    const newAgentPromptLabel = document.querySelector('label[for="wesProjectNewAgentPrompt"]');
    if (newAgentPromptLabel) {
      newAgentPromptLabel.textContent = 'Prompt do sistema';
    }
  }

  function syncProjectAgentMode() {
    const mode = document.querySelector('input[name="projectAgentMode"]:checked')?.value || 'existing';
    const existing = byId('wesProjectAgentExistingFields');
    const fresh = byId('wesProjectAgentNewFields');
    if (existing) existing.hidden = mode !== 'existing';
    if (fresh) fresh.hidden = mode !== 'new';
  }

  function syncProjectAgentSelect() {
    const select = byId('wesProjectExistingAgent');
    if (!select) return;
    select.innerHTML = '';
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Sem agente';
    select.appendChild(placeholder);
    const seen = new Set();
    const detailRows = document.querySelectorAll('#agentsAllAgentsTable .agents-row[data-from-api="true"]');
    detailRows.forEach((row) => {
      const id = row.dataset.agentUuid || '';
      const name = row.querySelector('strong')?.textContent?.trim() || id;
      if (!id || seen.has(id)) return;
      seen.add(id);
      const option = document.createElement('option');
      option.value = id;
      option.textContent = name;
      select.appendChild(option);
    });
  }

  function ensureProjectEditButtons() {
    document.querySelectorAll('.agents-project-folder-head').forEach((head) => {
      const detail = head.closest('.agents-project-detail');
      if (!head.querySelector('.wes-project-edit-btn')) {
        const editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.className = 'btn outline wes-project-edit-btn';
        editBtn.innerHTML = '<i data-lucide="pencil"></i>Editar projeto';
        editBtn.addEventListener('click', () => openProjectEditModal(detail));
        head.appendChild(editBtn);
      }
      if (!head.querySelector('.wes-project-delete-btn')) {
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'btn outline wes-project-delete-btn';
        deleteBtn.innerHTML = '<i data-lucide="trash-2"></i>Excluir projeto';
        deleteBtn.addEventListener('click', async () => {
          await deleteProjectWithConfirmation(detail);
        });
        head.appendChild(deleteBtn);
      }
    });
  }

  async function deleteProjectWithConfirmation(detail) {
    if (!detail || typeof window.wesApiFetch !== 'function' || !window.WesDashboardAuth?.isAuthenticated()) return;
    const projectId = String(detail.dataset.projectId || '').trim();
    const projectTitle = String(detail.dataset.projectTitle || 'este projeto').trim() || 'este projeto';
    if (!projectId) return;

    const proceed = window.confirm(`Deseja excluir o projeto "${projectTitle}"?`);
    if (!proceed) return;

    const performDelete = async (params = '') => {
      const res = await window.wesApiFetch(`/projects/${encodeURIComponent(projectId)}${params}`, {
        method: 'DELETE',
      });
      const raw = await res.text();
      let body = null;
      try {
        body = raw ? JSON.parse(raw) : null;
      } catch {
        body = null;
      }
      return { res, body, raw };
    };

    try {
      const first = await performDelete();
      if (first.res.status === 409 && first.body?.detail?.detail === 'PROJECT_DELETE_CONFIRMATION_REQUIRED') {
        const exclusiveAgents = Array.isArray(first.body?.detail?.exclusive_agents) ? first.body.detail.exclusive_agents : [];
        const names = exclusiveAgents.map((agent) => agent?.name).filter(Boolean);
        const namesText = names.length ? `\n\nAgentes exclusivos:\n- ${names.join('\n- ')}` : '';
        const deleteBoth = window.confirm(
          `Este projeto possui agentes exclusivos.${namesText}\n\nDeseja excluir o projeto e tambem esses agentes?`
        );
        if (deleteBoth) {
          const confirmed = await performDelete('?confirm=true&delete_exclusive_agents=true');
          if (!confirmed.res.ok) throw new Error(confirmed.body?.detail || confirmed.raw || confirmed.res.statusText);
        } else {
          const deleteOnlyProject = window.confirm(
            'Deseja excluir somente o projeto e manter esses agentes como "Sem projeto"?'
          );
          if (!deleteOnlyProject) return;
          const confirmed = await performDelete('?confirm=true&delete_exclusive_agents=false');
          if (!confirmed.res.ok) throw new Error(confirmed.body?.detail || confirmed.raw || confirmed.res.statusText);
        }
      } else if (!first.res.ok) {
        throw new Error(first.body?.detail || first.raw || first.res.statusText);
      }

      if (window.location.hash.includes(`/dashboard/agents/project/${encodeURIComponent(detail.dataset.agentsProject || '')}`)) {
        window.location.hash = '#/dashboard/agents';
      }
      if (typeof refreshHubScopeFromApi === 'function') await refreshHubScopeFromApi();
      if (typeof refreshAgentsTableFromApi === 'function') await refreshAgentsTableFromApi();
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      window.alert(message || 'Nao foi possivel excluir o projeto.');
    }
  }

  function openProjectEditModal(detail) {
    const modal = byId('projectModal');
    const title = byId('projectModalTitle');
    const submit = byId('projectModalSubmit');
    const nameInput = byId('projectModalName');
    if (!modal || !detail || !nameInput) return;
    modal.dataset.mode = 'edit';
    modal.dataset.projectSlug = detail.dataset.agentsProject || '';
    if (title) title.textContent = 'Editar projeto';
    if (submit) submit.textContent = 'Salvar projeto';
    if (nameInput) nameInput.value = detail.dataset.projectTitle || '';
    const descInput = byId('wesProjectDescription');
    if (descInput) descInput.value = detail.dataset.projectDescription || '';
    const orgSel = byId('projectModalOrg');
    if (orgSel && detail.closest('.agents-org-panel')?.dataset.hubOrg) {
      orgSel.value = detail.closest('.agents-org-panel').dataset.hubOrg;
    }
    syncProjectAgentSelect();
    syncProjectAgentMode();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    nameInput.focus();
  }

  function resetProjectModalState() {
    const modal = byId('projectModal');
    const title = byId('projectModalTitle');
    const submit = byId('projectModalSubmit');
    if (!modal) return;
    modal.dataset.mode = 'create';
    modal.dataset.projectSlug = '';
    if (title) title.textContent = 'Criar projeto';
    if (submit) submit.textContent = 'Criar projeto';
    const existingSel = byId('wesProjectExistingAgent');
    const newAgentName = byId('wesProjectNewAgentName');
    const newAgentDesc = byId('wesProjectNewAgentDescription');
    const newAgentPrompt = byId('wesProjectNewAgentPrompt');
    const newAgentUseRag = byId('wesProjectNewAgentUseRag');
    const projectDesc = byId('wesProjectDescription');
    const existingRadio = document.querySelector('input[name="projectAgentMode"][value="existing"]');
    if (existingRadio) existingRadio.checked = true;
    if (existingSel) existingSel.value = '';
    if (newAgentName) newAgentName.value = '';
    if (newAgentDesc) newAgentDesc.value = '';
    if (newAgentPrompt) newAgentPrompt.value = '';
    if (newAgentUseRag) newAgentUseRag.checked = true;
    if (projectDesc) projectDesc.value = '';
    syncProjectAgentMode();
  }

  function overrideProjectSubmitValidation() {
    const form = byId('projectModalForm');
    if (!form || form.dataset.wesProjectValidation === 'true') return;
    form.dataset.wesProjectValidation = 'true';
    form.addEventListener(
      'submit',
      (event) => {
        const mode = document.querySelector('input[name="projectAgentMode"]:checked')?.value || 'existing';
        const err = byId('projectModalError');
        const existing = byId('wesProjectExistingAgent')?.value || '';
        const newName = byId('wesProjectNewAgentName')?.value?.trim() || '';
        const newDescription = byId('wesProjectNewAgentDescription')?.value?.trim() || '';
        const newPrompt = byId('wesProjectNewAgentPrompt')?.value?.trim() || '';
        if (mode === 'new' && (!newName || !newDescription || !newPrompt)) {
          event.stopImmediatePropagation();
          event.preventDefault();
          if (err) {
            err.hidden = false;
            err.textContent = 'Preencha nome, descrição e prompt do sistema do novo agente.';
          }
          byId('wesProjectNewAgentName')?.focus();
          return;
        }
      },
      true
    );
  }

  function syncAgentEnvironmentSelect() {
    const envSel = byId('agentModalEnvironment');
    const orgSel = getOrgSelect();
    if (!envSel) return;

    envSel.innerHTML = '';

    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Selecione um setor';
    envSel.appendChild(placeholder);

    let added = 0;

    if (typeof HUB_SCOPE !== 'undefined' && HUB_SCOPE && Object.keys(HUB_SCOPE).length) {
      Object.keys(HUB_SCOPE).forEach((slug) => {
        const env = HUB_SCOPE[slug];
        const option = document.createElement('option');
        option.value = slug;
        option.textContent = env.name;
        envSel.appendChild(option);
        added += 1;
      });
    } else if (orgSel) {
      Array.from(orgSel.options).forEach((option) => {
        if (!option.value) return;
        const clone = document.createElement('option');
        clone.value = option.value;
        clone.textContent = option.textContent;
        envSel.appendChild(clone);
        added += 1;
      });
    }

    envSel.value = hubOrgId || '';
    if (!envSel.value && added > 0) {
      envSel.value = envSel.options[1]?.value || '';
    }
    if (envSel.value && hubOrgId !== envSel.value) {
      hubOrgId = envSel.value;
    }
  }

  function captureUiState() {
    const active = document.activeElement;
    const search = byId('agentsSearchInput');
    return {
      windowScrollY: window.scrollY,
      agentsSectionScrollTop: byId('agentsAllAgentsSection')?.scrollTop || 0,
      activeId: active?.id || '',
      activeTag: active?.tagName || '',
      searchValue: search?.value || '',
    };
  }

  function restoreUiState(state) {
    if (!state) return;
    requestAnimationFrame(() => {
      window.scrollTo({ top: state.windowScrollY, left: 0, behavior: 'auto' });
      const section = byId('agentsAllAgentsSection');
      if (section) section.scrollTop = state.agentsSectionScrollTop;
      if (state.activeId) {
        const el = byId(state.activeId);
        if (el && typeof el.focus === 'function' && !document.querySelector('.modal.open')) {
          el.focus({ preventScroll: true });
        }
      }
    });
  }

  function isUserInteracting() {
    const active = document.activeElement;
    const tag = active?.tagName || '';
    if (document.querySelector('.modal.open')) return true;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
    if (active?.isContentEditable) return true;
    return false;
  }

  let queuedSilentRefresh = null;
  let silentRefreshTimer = null;

  function queueSilentRefresh(task) {
    queuedSilentRefresh = task;
    if (silentRefreshTimer) window.clearTimeout(silentRefreshTimer);
    silentRefreshTimer = window.setTimeout(async () => {
      if (isUserInteracting()) {
        queueSilentRefresh(task);
        return;
      }
      const next = queuedSilentRefresh;
      queuedSilentRefresh = null;
      if (typeof next === 'function') {
        await next();
      }
    }, 220);
  }

  function wrapSilentRefresh(fn, after) {
    return async function (...args) {
      const run = async () => {
        const state = captureUiState();
        const result = await fn.apply(this, args);
        if (typeof after === 'function') after();
        restoreUiState(state);
        return result;
      };
      if (isUserInteracting()) {
        queueSilentRefresh(run);
        return;
      }
      return run();
    };
  }

  function overrideFunctions() {
    const baseSyncAgentsPageScopeSelects = typeof syncAgentsPageScopeSelects === 'function' ? syncAgentsPageScopeSelects : null;
    const baseSyncAgentModalScope = typeof syncAgentModalScope === 'function' ? syncAgentModalScope : null;
    const baseSyncProjectModalSelects = typeof syncProjectModalSelects === 'function' ? syncProjectModalSelects : null;
    const baseRefreshHubScopeFromApi = typeof refreshHubScopeFromApi === 'function' ? refreshHubScopeFromApi : null;
    const baseRefreshAgentsTableFromApi = typeof refreshAgentsTableFromApi === 'function' ? refreshAgentsTableFromApi : null;

    if (baseSyncAgentsPageScopeSelects) {
      syncAgentsPageScopeSelects = function () {
        baseSyncAgentsPageScopeSelects();
        ensureFilterUi();
        syncFilterUi();
      };
    }

    if (baseSyncAgentModalScope) {
      syncAgentModalScope = function () {
        baseSyncAgentModalScope();
        patchAgentModal();
        syncAgentEnvironmentSelect();
      };
    }

    if (baseSyncProjectModalSelects) {
      syncProjectModalSelects = function () {
        baseSyncProjectModalSelects();
        patchProjectModal();
        normalizeProjectModalPortuguese();
        syncProjectAgentSelect();
        syncProjectAgentMode();
      };
    }

    if (baseRefreshHubScopeFromApi) {
      refreshHubScopeFromApi = wrapSilentRefresh(baseRefreshHubScopeFromApi, () => {
        ensureFilterUi();
        ensureProjectEditButtons();
        syncFilterUi();
      });
    }

    if (baseRefreshAgentsTableFromApi) {
      refreshAgentsTableFromApi = wrapSilentRefresh(baseRefreshAgentsTableFromApi, () => {
        ensureProjectEditButtons();
      });
    }
  }

  function wireModalEnvironmentChanges() {
    document.addEventListener('change', (event) => {
      if (event.target?.id === 'agentModalEnvironment') {
        selectedEnvironmentSlugs.clear();
        if (event.target.value) selectedEnvironmentSlugs.add(event.target.value);
        applyEnvironmentSelection();
        if (typeof syncAgentModalScope === 'function') syncAgentModalScope();
        if (typeof hubRefreshCustomSelects === 'function') hubRefreshCustomSelects();
      }
      if (event.target?.name === 'projectAgentMode') {
        syncProjectAgentMode();
      }
    });
    document.addEventListener('click', (event) => {
      if (event.target?.id === 'agentsCreateProjectBtn' || event.target?.closest('#agentsCreateProjectBtn')) {
        resetProjectModalState();
        syncProjectAgentSelect();
      }
    });
  }

  function init() {
    injectStyle();
    ensureHiddenScopeSelects();
    if (baseRefreshAgentsTableFromApi) {
      refreshAgentsTableFromApi = refreshAgentsForSelectedEnvironments;
    }
    overrideFunctions();
    ensureFilterUi();
    ensureEnvironmentModal();
    patchAgentModal();
    patchProjectModal();
    normalizeProjectModalPortuguese();
    ensureProjectEditButtons();
    syncFilterUi();
    syncAgentEnvironmentSelect();
    syncProjectAgentSelect();
    syncProjectAgentMode();
    overrideProjectSubmitValidation();
    wireModalEnvironmentChanges();
    applyEnvironmentFilterToDom();
    if (typeof window.lucide !== 'undefined') window.lucide.createIcons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
