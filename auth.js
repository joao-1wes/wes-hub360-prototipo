/**
 * Bootstrap mínimo de sessão e fluxo público.
 * As telas de entrada são estáticas; ao acessar o painel, uma sessão local
 * compatível com os trechos que ainda falam com a API é criada.
 */
(function () {
  const STORAGE_KEY = 'wes_dashboard_auth';
  const LAST_BASE_KEY = 'wes_dashboard_api_base_last';
  const SELECTED_ORG_KEY = 'wes_selected_organization_access';
  const PUBLIC_ROUTE_SCREENS = {
    '': 'landingScreen',
    login: 'loginScreen',
    'select-organization': 'organizationSelectScreen',
  };

  function getDefaultApiBase() {
    const { protocol, origin, hostname, port } = window.location;
    if (protocol === 'http:' || protocol === 'https:') {
      if ((hostname === '127.0.0.1' || hostname === 'localhost') && (!port || port === '3000' || port === '4173' || port === '5173' || port === '5500')) {
        return `${protocol}//127.0.0.1:8080`;
      }
      return origin.replace(/\/+$/, '');
    }
    return 'http://127.0.0.1:8080';
  }

  function normalizeBase(url) {
    const trimmed = String(url || '').trim().replace(/\/+$/, '');
    if (!trimmed) return getDefaultApiBase();
    try {
      const parsed = new URL(trimmed.startsWith('http') ? trimmed : `https://${trimmed}`);
      if (parsed.hostname === 'localhost') {
        parsed.hostname = '127.0.0.1';
      }
      return parsed.toString().replace(/\/+$/, '');
    } catch {
      return getDefaultApiBase();
    }
  }

  function getRouteKey() {
    return decodeURIComponent(String(window.location.hash || '').replace(/^#\/?/, '').split('?')[0]);
  }

  function isPublicRoute(routeKey = getRouteKey()) {
    return Object.prototype.hasOwnProperty.call(PUBLIC_ROUTE_SCREENS, routeKey);
  }

  function ensureAppVisible() {
    const shell = document.getElementById('appShell');
    const publicFlow = document.getElementById('publicFlow');
    if (shell) shell.hidden = false;
    if (publicFlow) publicFlow.hidden = true;
    document.body.classList.remove('public-route');
  }

  function ensurePublicVisible(routeKey = getRouteKey()) {
    const shell = document.getElementById('appShell');
    const publicFlow = document.getElementById('publicFlow');
    if (shell) shell.hidden = true;
    if (publicFlow) publicFlow.hidden = false;
    document.body.classList.add('public-route');

    document.querySelectorAll('[data-public-route]').forEach((screen) => {
      const isActive = screen.id === PUBLIC_ROUTE_SCREENS[routeKey];
      screen.classList.toggle('is-active', isActive);
      screen.toggleAttribute('hidden', !isActive);
    });
  }

  function ensureDemoSession() {
    if (WesDashboardAuth.isAuthenticated()) return;
    WesDashboardAuth.write({
      apiBase: getDefaultApiBase(),
      apiKey: '',
      userId: 'admin@1wes.com',
      displayName: 'Alfeu Vinicius Souza',
    });
  }

  function syncPublicRoute() {
    const routeKey = getRouteKey();
    if (isPublicRoute(routeKey)) {
      ensurePublicVisible(routeKey);
      if (routeKey !== '') {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    } else {
      ensureDemoSession();
      ensureAppVisible();
      WesDashboardAuth.applyUserToUI();
    }

    if (typeof window.updateActivePage === 'function') {
      window.updateActivePage();
    }
    if (typeof window.scheduleLucideRefresh === 'function') {
      window.scheduleLucideRefresh();
    } else if (window.lucide?.createIcons) {
      window.lucide.createIcons();
    }
  }

  const WesDashboardAuth = {
    read() {
      try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed.apiBase !== 'string' || typeof parsed.userId !== 'string') return null;
        return {
          ...parsed,
          apiBase: normalizeBase(parsed.apiBase),
          apiKey: typeof parsed.apiKey === 'string' ? parsed.apiKey : '',
          displayName: typeof parsed.displayName === 'string' ? parsed.displayName : '',
        };
      } catch {
        return null;
      }
    },

    write(payload) {
      const nextPayload = {
        apiBase: normalizeBase(payload?.apiBase),
        apiKey: String(payload?.apiKey || '').trim(),
        userId: String(payload?.userId || '').trim(),
        displayName: String(payload?.displayName || '').trim(),
      };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(nextPayload));
      try {
        localStorage.setItem(LAST_BASE_KEY, nextPayload.apiBase);
      } catch {
        /* ignore */
      }
      this.applyUserToUI();
    },

    clear() {
      sessionStorage.removeItem(STORAGE_KEY);
    },

    isAuthenticated() {
      return Boolean(this.read());
    },

    getHeaders() {
      const auth = this.read();
      if (!auth) return null;
      const headers = { 'X-User-Id': auth.userId };
      if (auth.apiKey) {
        headers['X-API-Key'] = auth.apiKey;
      }
      return headers;
    },

    applyUserToUI() {
      const auth = this.read();
      if (!auth) return;
      const nameEl = document.querySelector('#userMenu .user-name');
      const tenantEl = document.querySelector('#userMenu .user-tenant');
      const avatar = document.querySelector('#userMenu .user-avatar');
      const shortId = auth.userId ? `${auth.userId.slice(0, 8)}…` : 'API';
      if (nameEl) {
        nameEl.textContent = auth.displayName || `Usuário ${shortId}`;
      }
      if (tenantEl) {
        try {
          tenantEl.textContent = new URL(auth.apiBase).host || 'API';
        } catch {
          tenantEl.textContent = 'API';
        }
      }
      if (avatar) {
        const letter = (auth.displayName && auth.displayName[0]) || auth.userId[0] || '?';
        avatar.textContent = letter.toUpperCase();
      }
    },

    logout() {
      this.clear();
      window.location.hash = '#/login';
    },
  };

  window.wesApiFetch = function wesApiFetch(path, init) {
    const auth = WesDashboardAuth.read();
    if (!auth) {
      return Promise.reject(new Error('Recurso indisponível sem configuração de API.'));
    }
    const headers = new Headers(init && init.headers ? init.headers : undefined);
    headers.set('X-User-Id', auth.userId);
    if (auth.apiKey) {
      headers.set('X-API-Key', auth.apiKey);
    }
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const url = `${auth.apiBase.replace(/\/$/, '')}${normalizedPath}`;
    return fetch(url, { ...init, headers });
  };

  window.WesDashboardAuth = WesDashboardAuth;

  function initAuthUi() {
    const appShell = document.getElementById('appShell');
    const loginForm = document.getElementById('publicLoginForm');
    const openCreateCompanyModalButtons = Array.from(document.querySelectorAll('[data-open-create-company-modal], #openCreateCompanyModal'));
    const createCompanyModal = document.getElementById('createCompanyModal');
    const createCompanyForm = document.getElementById('createCompanyForm');
    const companyName = document.getElementById('companyName');
    const createCompanyAdminUserLink = document.getElementById('createCompanyAdminUserLink');
    const orgChoices = document.querySelectorAll('[data-org-choice]');
    loginForm?.addEventListener('submit', (event) => {
      event.preventDefault();
      window.location.hash = '#/select-organization';
    });

    orgChoices.forEach((choice) => {
      choice.addEventListener('click', () => {
        const orgId = choice.getAttribute('data-org-choice') || 'adm-wes';
        const orgName = choice.getAttribute('data-org-name') || choice.querySelector('strong')?.textContent?.trim() || 'ADM WES';
        try {
          sessionStorage.setItem(SELECTED_ORG_KEY, JSON.stringify({ id: orgId, name: orgName }));
        } catch {
          /* ignore */
        }
      });
    });

    const closeCreateCompanyModal = () => {
      if (!createCompanyModal) return;
      createCompanyModal.classList.remove('is-open');
      createCompanyModal.classList.remove('public-modal--app');
      createCompanyModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('public-modal-open');
    };

    const showCreateCompanyModal = () => {
      if (!createCompanyModal) return;
      if (createCompanyModal.parentElement !== document.body) {
        document.body.appendChild(createCompanyModal);
      }
      createCompanyModal.classList.toggle('public-modal--app', Boolean(appShell && !appShell.hidden));
      createCompanyModal.classList.add('is-open');
      createCompanyModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('public-modal-open');
      window.setTimeout(() => companyName?.focus(), 50);
    };

    openCreateCompanyModalButtons.forEach((button) => {
      button.addEventListener('click', showCreateCompanyModal);
    });
    document.querySelectorAll('[data-create-company-close]').forEach((button) => {
      button.addEventListener('click', closeCreateCompanyModal);
    });
    createCompanyAdminUserLink?.addEventListener('click', () => {
      if (createCompanyAdminUserLink.classList.contains('is-loading')) return;
      createCompanyAdminUserLink.classList.add('is-loading');
      createCompanyAdminUserLink.disabled = true;
      createCompanyAdminUserLink.setAttribute('aria-busy', 'true');

      window.setTimeout(() => {
        closeCreateCompanyModal();
        ensureDemoSession();
        ensureAppVisible();
        WesDashboardAuth.applyUserToUI();
        window.location.hash = '#/dashboard/users';
        window.setTimeout(() => {
          if (typeof window.updateActivePage === 'function') {
            window.updateActivePage();
          }
          createCompanyAdminUserLink.classList.remove('is-loading');
          createCompanyAdminUserLink.disabled = false;
          createCompanyAdminUserLink.removeAttribute('aria-busy');
          document.getElementById('openCreateUserModal')?.click();
        }, 120);
      }, 5000);
    });
    createCompanyForm?.addEventListener('submit', (event) => {
      event.preventDefault();
      createCompanyForm.reset();
      closeCreateCompanyModal();
      window.location.hash = '#/select-organization';
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && createCompanyModal?.classList.contains('is-open')) {
        closeCreateCompanyModal();
      }
    });

    document.querySelectorAll('.auth-ghost-icon').forEach((button) => {
      button.addEventListener('click', () => {
        const input = button.closest('.auth-input-wrap')?.querySelector('input');
        if (!input) return;
        const visible = input.type === 'text';
        input.type = visible ? 'password' : 'text';
        button.setAttribute('aria-label', visible ? 'Mostrar senha' : 'Ocultar senha');
        const icon = button.querySelector('.material-symbols-rounded');
        if (icon) icon.textContent = visible ? 'visibility' : 'visibility_off';
      });
    });

    syncPublicRoute();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuthUi);
  } else {
    initAuthUi();
  }
  window.addEventListener('hashchange', syncPublicRoute);
})();
