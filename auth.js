/**
 * Bootstrap mínimo de sessão.
 * A tela de login foi removida, mas as credenciais salvas continuam compatíveis
 * para os trechos do painel que ainda falam com a API.
 */
(function () {
  const STORAGE_KEY = 'wes_dashboard_auth';
  const LAST_BASE_KEY = 'wes_dashboard_api_base_last';

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

  function ensureAppVisible() {
    const shell = document.getElementById('appShell');
    const login = document.getElementById('loginScreen');
    if (shell) shell.hidden = false;
    if (login) {
      login.hidden = true;
      login.remove();
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
      ensureAppVisible();
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
    ensureAppVisible();
    WesDashboardAuth.applyUserToUI();
    if (window.location.hash === '#/login') {
      window.location.hash = '#/dashboard';
    }
    if (typeof window.scheduleLucideRefresh === 'function') {
      window.scheduleLucideRefresh();
    } else if (window.lucide?.createIcons) {
      window.lucide.createIcons();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuthUi);
  } else {
    initAuthUi();
  }
})();
