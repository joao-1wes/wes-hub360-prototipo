const filterBtn = document.getElementById('alertFilterBtn');
const filterMenu = document.getElementById('alertFilterMenu');
const menuToggle = document.getElementById('menuToggle');
const appShell = document.getElementById('appShell');
const hubScopeBar = document.getElementById('hubScopeBar');
const userMenu = document.getElementById('userMenu');
const userDropdown = document.getElementById('userDropdown');
const navTriggers = document.querySelectorAll('.nav-trigger');
const insightsGrid = document.getElementById('insightsGrid');
const insightsEmpty = document.getElementById('insightsEmpty');
const insightsCount = document.getElementById('insightsCount');
const insightsGridAlt = document.getElementById('insightsGridAlt');
const insightsEmptyAlt = document.getElementById('insightsEmptyAlt');
const insightsCountAlt = document.getElementById('insightsCountAlt');
const dashboardToggle = document.getElementById('dashboardToggle');
const dashboardViewDefault = document.getElementById('dashboardViewDefault');
const dashboardViewDetail = document.getElementById('dashboardViewDetail');
const filterBtnAlt = document.getElementById('alertFilterBtnAlt');
const filterMenuAlt = document.getElementById('alertFilterMenuAlt');
const notificationsToggle = document.getElementById('notificationsToggle');
const notificationsDropdown = document.getElementById('notificationsDropdown');
const automationFilterBtn = document.getElementById('automationFilterBtn');
const automationFilterMenu = document.getElementById('automationFilterMenu');
const executorFilterBtn = document.getElementById('executorFilterBtn');
const executorFilterMenu = document.getElementById('executorFilterMenu');
const packagesFilterBtn = document.getElementById('packagesFilterBtn');
const packagesFilterMenu = document.getElementById('packagesFilterMenu');
const usersFilterBtn = document.getElementById('usersFilterBtn');
const usersFilterMenu = document.getElementById('usersFilterMenu');
const auditFilterBtn = document.getElementById('auditFilterBtn');
const auditFilterMenu = document.getElementById('auditFilterMenu');
const directChatFab = document.getElementById('directChatFab');
const agentsCreateMenu = document.getElementById('agentsCreateMenu');
const agentsCreateMenuToggle = document.getElementById('agentsCreateMenuToggle');
const agentsCreateMenuWrap = document.querySelector('.agents-create-menu-wrap');
const agentsPagePagination = document.getElementById('agentsPagePagination');
const agentsPageNumbers = document.getElementById('agentsPageNumbers');
const agentsPageEnvironmentSelect = document.getElementById('agentsPageEnvironmentSelect');
const agentsFolderAccordion = document.getElementById('agentsFolderAccordion');
const agentsFolderAccordionToggle = document.getElementById('agentsFolderAccordionToggle');
const agentsFolderAccordionPanel = document.getElementById('agentsFolderAccordionPanel');
const openAgentModal = document.getElementById('openAgentModal');
const agentModal = document.getElementById('agentModal');
const agentChatModal = document.getElementById('agentChatModal');
const agentHistoryScopeModal = document.getElementById('agentHistoryScopeModal');
const agentHistoryScopeProject = document.getElementById('agentHistoryScopeProject');
const agentHistoryScopeError = document.getElementById('agentHistoryScopeError');
const agentHistoryScopeConfirm = document.getElementById('agentHistoryScopeConfirm');
const agentChatTitle = document.getElementById('agentChatTitle');
const agentChatSubtitle = document.getElementById('agentChatSubtitle');
const chatAttachToggle = document.querySelector('.chat-attach-toggle');
const chatAttachMenu = document.querySelector('.chat-attach-menu');
const chatSkillToggle = document.querySelector('.chat-skill-toggle');
const chatSkillMenu = document.querySelector('.chat-skill-menu');
const chatSkillSwitches = document.querySelectorAll('.chat-skill-item input[type="checkbox"]');
const chatAttachGroup = document.querySelector('.chat-attach-group');
const chatSkillStatusDot = document.querySelector('.chat-skill-status .status-dot');
const chatNewButton = document.querySelector('.chat-new-btn');
const chatEmptyState = document.getElementById('chatEmpty');
const chatEmptyPrompt = document.getElementById('chatEmptyPrompt');
const chatHistoryList = document.querySelector('.chat-history');
const chatThread = document.querySelector('.chat-thread');
const agentChatHistoryEmpty = document.getElementById('agentChatHistoryEmpty');
const chatHistoryTitles = document.querySelectorAll('.chat-history-title');
const chatDictationButton = document.querySelector('.chat-mic');
const chatSendButton = document.querySelector('.chat-send');
const chatInput = document.querySelector('.chat-input');
const openBillingModal = document.getElementById('openBillingModal');
const billingModal = document.getElementById('billingModal');
const openChannelModal = document.getElementById('openChannelModal');
const channelModal = document.getElementById('channelModal');
const openTelegramConfigModal = document.getElementById('openTelegramConfigModal');
const telegramIntegrationName = document.getElementById('telegramIntegrationName');
const telegramBotToken = document.getElementById('telegramBotToken');
const toggleTelegramBotToken = document.getElementById('toggleTelegramBotToken');
const telegramValidateButton = document.getElementById('telegramValidateButton');
const telegramSaveContinueButton = document.getElementById('telegramSaveContinueButton');
const telegramBotSummary = document.getElementById('telegramBotSummary');
const telegramBotDisplayName = document.getElementById('telegramBotDisplayName');
const telegramBotDisplayHandle = document.getElementById('telegramBotDisplayHandle');
const telegramBotDisplayId = document.getElementById('telegramBotDisplayId');
const telegramBotUsername = document.getElementById('telegramBotUsername');
const telegramBotPublicLink = document.getElementById('telegramBotPublicLink');
const copyTelegramPublicLink = document.getElementById('copyTelegramPublicLink');
const telegramTestChatId = document.getElementById('telegramTestChatId');
const telegramSendTestButton = document.getElementById('telegramSendTestButton');
const telegramTestFeedback = document.getElementById('telegramTestFeedback');
const telegramTestFeedbackText = document.getElementById('telegramTestFeedbackText');
const telegramIntegrationStatus = document.getElementById('telegramIntegrationStatus');
const telegramIntegrationStatusValue = document.getElementById('telegramIntegrationStatusValue');
const telegramHelpCard = document.getElementById('telegramHelpCard');
const telegramSummaryModal = document.getElementById('telegramSummaryModal');
const telegramSummaryBackButton = document.getElementById('telegramSummaryBackButton');
const telegramSummaryConfirmButton = document.getElementById('telegramSummaryConfirmButton');
const telegramSummaryStatusChip = document.getElementById('telegramSummaryStatusChip');
const telegramSummaryName = document.getElementById('telegramSummaryName');
const telegramSummaryBot = document.getElementById('telegramSummaryBot');
const telegramSummaryHandle = document.getElementById('telegramSummaryHandle');
const telegramSummaryLink = document.getElementById('telegramSummaryLink');
const telegramSummaryBotId = document.getElementById('telegramSummaryBotId');
const telegramSummaryTestStatus = document.getElementById('telegramSummaryTestStatus');
const appToast = document.getElementById('appToast');
const appToastMessage = document.getElementById('appToastMessage');
const openAutomationModal = document.getElementById('openAutomationModal');
const automationModal = document.getElementById('automationModal');
const automationModalForm = document.getElementById('automationModalForm');
const automationModalTitle = document.getElementById('automationModalTitle');
const automationModalError = document.getElementById('automationModalError');
const automationModalName = document.getElementById('automationModalName');
const automationModalPriority = document.getElementById('automationModalPriority');
const automationModalDescription = document.getElementById('automationModalDescription');
const automationModalPackageSearch = document.getElementById('automationModalPackageSearch');
const automationModalPackage = document.getElementById('automationModalPackage');
const automationModalPackageHint = document.getElementById('automationModalPackageHint');
const automationModalVersion = document.getElementById('automationModalVersion');
const automationModalParams = document.getElementById('automationModalParams');
const automationModalSubmit = document.getElementById('automationModalSubmit');
const keysFilterBtn = document.getElementById('keysFilterBtn');
const keysFilterMenu = document.getElementById('keysFilterMenu');
const settingsTabs = document.querySelectorAll('#page-settings .settings-tab');
const settingsPanels = document.querySelectorAll('#page-settings .settings-panel');
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-item[data-route], .submenu-item[href^="#/"]');
const detailsToggles = document.querySelectorAll('.details-toggle');
const automationStatusSwitches = document.querySelectorAll('.automation-status-switch .switch input');
const automationTabs = document.querySelectorAll('#page-automations .tab');
const automationPanels = document.querySelectorAll('#page-automations .tab-panel');
const automationsTable = document.querySelector('#page-automations .automations-table');
const executorTabs = document.querySelectorAll('#page-executors .tab');
const executorPanels = document.querySelectorAll('#page-executors .tab-panel');
const usersTabs = document.querySelectorAll('#page-users .tab');
const usersPanels = document.querySelectorAll('#page-users .tab-panel');
const orgTabs = document.querySelectorAll('#page-organization .tab');
const orgPanels = document.querySelectorAll('#page-organization .tab-panel');
const orgActionButtons = document.querySelectorAll('#page-organization .org-action');

const AGENTS_PAGE_ENVIRONMENTS = [
  { id: 'operacoes', label: 'Operações' },
  { id: 'financeiro', label: 'Financeiro' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'rh', label: 'RH' },
];

const AGENT_ENVIRONMENT_OVERRIDES_STORAGE_KEY = 'wesAgentEnvironmentOverrides';
const PROJECT_ENVIRONMENT_OVERRIDES_STORAGE_KEY = 'wesProjectEnvironmentOverrides';
const PROJECT_PROMPT_OVERRIDES_STORAGE_KEY = 'wesProjectPromptOverrides';
const TELEGRAM_HELP_CARD_DISMISSED_STORAGE_KEY = 'wesTelegramHelpCardDismissed';
const AUTOMATION_PACKAGE_OPTIONS = Object.freeze([
  {
    id: 'teste_wiki',
    label: 'teste_wiki',
    description: 'Pacote criado pelo Executor WES Java',
    versions: ['v1.0.0'],
  },
  {
    id: 'reports',
    label: 'reports',
    description: 'Pacote para geração de relatórios operacionais.',
    versions: ['v2.1.0', 'v2.0.0'],
  },
  {
    id: 'queues',
    label: 'queues',
    description: 'Pacote de monitoramento e alertas de filas críticas.',
    versions: ['v1.4.0', 'v1.3.0'],
  },
]);

let agentsPageEnvironmentId = '';
let agentEnvironmentOverrides = readAgentEnvironmentOverrides();
let projectEnvironmentOverrides = readProjectEnvironmentOverrides();
let projectPromptOverrides = readProjectPromptOverrides();
const periodFilterBtn = document.getElementById('periodFilterBtn');
const periodFilterMenu = document.getElementById('periodFilterMenu');
const periodOptions = document.querySelectorAll('.period-option');
const rangeFields = document.querySelectorAll('.period-field.range-only');
const singleField = document.querySelector('.period-field.single-only');
const addToggles = document.querySelectorAll('.add-toggle');
const licenseToggles = document.querySelectorAll('.license-toggle');
const firstTimeBanner = document.getElementById('firstTimeBanner');
const settingsSaveBtn = document.getElementById('settingsSaveBtn');
const settingsPage = document.getElementById('page-settings');
const AGENTS_PAGE_SIZE = 5;
const AGENTS_AUTO_REFRESH_MS = 15000;
const AGENTS_AUTO_REFRESH_ENABLED = false;
let agentsCurrentPage = 1;
let agentsAutoRefreshTimer = null;
let lucideRefreshQueued = false;
let activeChatSpeechButton = null;
let projectModalAvailableAgents = [];
let appToastTimer = null;
let telegramConnectionValidated = false;
let telegramTestSent = false;

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

function resetDashboardScrollPosition() {
  const targets = [
    document.scrollingElement,
    document.documentElement,
    document.body,
    document.querySelector('.main'),
    document.querySelector('.content'),
  ].filter(Boolean);

  targets.forEach((target) => {
    target.scrollTop = 0;
    target.scrollLeft = 0;
  });

  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

let routeScrollLockTimer = null;

function forceRouteScrollTop(routeKey) {
  if (routeScrollLockTimer) {
    clearInterval(routeScrollLockTimer);
    routeScrollLockTimer = null;
  }

  const shouldLock = routeKey === 'dashboard/channels' || routeKey.startsWith('dashboard/channels/');
  if (!shouldLock) {
    resetDashboardScrollPosition();
    return;
  }

  const startedAt = Date.now();
  resetDashboardScrollPosition();
  routeScrollLockTimer = window.setInterval(() => {
    resetDashboardScrollPosition();
    if (Date.now() - startedAt >= 1500) {
      clearInterval(routeScrollLockTimer);
      routeScrollLockTimer = null;
    }
  }, 32);
}

function scheduleLucideRefresh() {
  if (!window.lucide?.createIcons || lucideRefreshQueued) return;
  lucideRefreshQueued = true;
  window.requestAnimationFrame(() => {
    lucideRefreshQueued = false;
    try {
      window.lucide.createIcons();
    } catch {
      /* ignore */
    }
  });
}

window.scheduleLucideRefresh = scheduleLucideRefresh;
enhanceFilterOptionIcons();

function normalizeTelegramUsername(value) {
  return value.replace(/^@+/, '').replace(/\s+/g, '').trim();
}

function updateTelegramPublicLink() {
  if (!telegramBotUsername || !telegramBotPublicLink) return;
  const username = normalizeTelegramUsername(telegramBotUsername.value);
  telegramBotUsername.value = username;
  telegramBotPublicLink.value = username ? `https://t.me/${username}` : '';
}

function syncTelegramBotSummaryVisibility() {
  if (!telegramBotSummary) return;
  telegramBotSummary.hidden = !telegramConnectionValidated;
}

function syncTelegramBotTokenVisibility() {
  if (!telegramBotToken || !toggleTelegramBotToken) return;
  const isVisible = telegramBotToken.type === 'text';
  const icon = toggleTelegramBotToken.querySelector('.material-symbols-rounded');
  toggleTelegramBotToken.setAttribute('aria-label', isVisible ? 'Ocultar bot token' : 'Mostrar bot token');
  toggleTelegramBotToken.setAttribute('aria-pressed', isVisible ? 'true' : 'false');
  if (icon) {
    icon.textContent = isVisible ? 'visibility_off' : 'visibility';
  }
}

function toggleTelegramBotTokenVisibility() {
  if (!telegramBotToken) return;
  telegramBotToken.type = telegramBotToken.type === 'password' ? 'text' : 'password';
  syncTelegramBotTokenVisibility();
}

function syncTelegramSaveContinueState() {
  if (!telegramSaveContinueButton) return;
  telegramSaveContinueButton.disabled = !telegramConnectionValidated;
}

function isTelegramChatIdValid(value) {
  return /^-?\d{5,}$/.test(String(value || '').trim());
}

function syncTelegramSendTestState() {
  if (!telegramSendTestButton) return;
  const chatId = String(telegramTestChatId?.value || '').trim();
  telegramSendTestButton.disabled = !(telegramConnectionValidated && isTelegramChatIdValid(chatId));
}

function syncTelegramFlowState() {
  syncTelegramSaveContinueState();
  syncTelegramBotSummaryVisibility();
  syncTelegramSendTestState();
}

function resetTelegramTestState() {
  telegramTestSent = false;
  if (telegramTestFeedback) telegramTestFeedback.hidden = true;
  syncTelegramSendTestState();
}

function closeTelegramSummaryModal() {
  if (!telegramSummaryModal) return;
  telegramSummaryModal.classList.remove('open');
  telegramSummaryModal.setAttribute('aria-hidden', 'true');
}

function resetTelegramConnectionValidation() {
  telegramConnectionValidated = false;
  resetTelegramTestState();
  closeTelegramSummaryModal();
  syncTelegramFlowState();
}

function isTelegramTokenFormatValid(value) {
  return /^\d{5,}:[A-Za-z0-9_-]{10,}$/.test(String(value || '').trim());
}

function validateTelegramConnection() {
  const token = String(telegramBotToken?.value || '').trim();
  const isValid = isTelegramTokenFormatValid(token);

  telegramConnectionValidated = isValid;
  if (!isValid) resetTelegramTestState();
  syncTelegramFlowState();

  if (!isValid) {
    showAppToast('Informe um bot token válido antes de continuar');
    telegramBotToken?.focus();
    telegramBotToken?.select();
    return;
  }

  showAppToast('Conexão validada com sucesso');
}

function sendTelegramTestMessage() {
  const chatId = String(telegramTestChatId?.value || '').trim();
  if (!telegramConnectionValidated) {
    showAppToast('Valide a conexão antes de enviar o teste');
    return;
  }
  if (!isTelegramChatIdValid(chatId)) {
    showAppToast('Informe um Chat ID numérico válido');
    telegramTestChatId?.focus();
    telegramTestChatId?.select();
    return;
  }

  telegramTestSent = true;
  if (telegramTestFeedbackText) {
    telegramTestFeedbackText.textContent = `Mensagem de teste enviada para o Chat ID ${chatId}.`;
  }
  if (telegramTestFeedback) telegramTestFeedback.hidden = false;
  syncTelegramSendTestState();
  showAppToast('Mensagem de teste enviada com sucesso');
}

function populateTelegramSummary() {
  const integrationName = String(telegramIntegrationName?.value || '').trim() || 'Não definido';
  const botName = String(telegramBotDisplayName?.textContent || '').trim() || 'Bot não identificado';
  const botHandle = String(telegramBotDisplayHandle?.textContent || '').trim() || 'Não definido';
  const botId = String(telegramBotDisplayId?.textContent || '').trim() || 'Não definido';
  const publicLink = String(telegramBotPublicLink?.value || '').trim();
  const isActive = Boolean(telegramIntegrationStatus?.checked);
  const testStatus = telegramTestSent
    ? `Enviado para ${String(telegramTestChatId?.value || '').trim()}`
    : 'Pulado';

  if (telegramSummaryName) telegramSummaryName.textContent = integrationName;
  if (telegramSummaryBot) telegramSummaryBot.textContent = botName;
  if (telegramSummaryHandle) telegramSummaryHandle.textContent = botHandle;
  if (telegramSummaryBotId) telegramSummaryBotId.textContent = botId;
  if (telegramSummaryTestStatus) telegramSummaryTestStatus.textContent = testStatus;

  if (telegramSummaryLink) {
    telegramSummaryLink.textContent = publicLink || 'Não disponível';
    if (publicLink) {
      telegramSummaryLink.setAttribute('href', publicLink);
    } else {
      telegramSummaryLink.removeAttribute('href');
    }
  }

  if (telegramSummaryStatusChip) {
    telegramSummaryStatusChip.textContent = isActive ? 'Ativa' : 'Pausada';
    telegramSummaryStatusChip.classList.toggle('success', isActive);
    telegramSummaryStatusChip.classList.toggle('warning', !isActive);
  }
}

function openTelegramSummaryModal() {
  if (!telegramConnectionValidated) return;
  populateTelegramSummary();
  if (!telegramSummaryModal) return;
  telegramSummaryModal.classList.add('open');
  telegramSummaryModal.setAttribute('aria-hidden', 'false');
}

function completeTelegramConfiguration() {
  closeTelegramSummaryModal();
  showAppToast('Integração criada com sucesso');
  window.setTimeout(() => {
    window.location.hash = '#/dashboard/channels';
  }, 180);
}

function showAppToast(message) {
  if (!appToast || !appToastMessage) return;
  appToastMessage.textContent = message;
  appToast.hidden = false;

  window.requestAnimationFrame(() => {
    appToast.classList.add('is-visible');
  });

  if (appToastTimer) window.clearTimeout(appToastTimer);
  appToastTimer = window.setTimeout(() => {
    appToast.classList.remove('is-visible');
    window.setTimeout(() => {
      if (!appToast.classList.contains('is-visible')) appToast.hidden = true;
    }, 220);
  }, 2200);
}

async function copyTelegramPublicLinkValue() {
  if (!telegramBotPublicLink?.value) return;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(telegramBotPublicLink.value);
    } else {
      telegramBotPublicLink.removeAttribute('readonly');
      telegramBotPublicLink.select();
      document.execCommand('copy');
      telegramBotPublicLink.setAttribute('readonly', 'readonly');
    }

    showAppToast('Link copiado');
  } catch {
    telegramBotPublicLink.focus();
    telegramBotPublicLink.select();
  }
}

function syncTelegramIntegrationStatus() {
  if (!telegramIntegrationStatus || !telegramIntegrationStatusValue) return;
  const statusWrap = telegramIntegrationStatus.closest('.telegram-status-toggle');
  const isActive = telegramIntegrationStatus.checked;
  telegramIntegrationStatusValue.textContent = isActive ? 'Ativa' : 'Pausada';
  statusWrap?.classList.toggle('is-active', isActive);
  statusWrap?.classList.toggle('is-paused', !isActive);
}

function syncAutomationStatusSwitch(input) {
  const wrap = input?.closest('.automation-status-switch');
  const label = wrap?.querySelector('.automation-status-switch-label');
  if (!wrap || !label) return;
  const isActive = input.checked;
  wrap.classList.toggle('is-active', isActive);
  wrap.classList.toggle('is-inactive', !isActive);
  label.textContent = isActive ? 'Ativo' : 'Inativo';
}

function enhanceFilterOptionIcons() {
  const filterOptions = document.querySelectorAll('.filter-option');
  if (!filterOptions.length) return;

  filterOptions.forEach((option) => {
    if (option.querySelector('.filter-option-check')) return;
    const icon = document.createElement('span');
    icon.className = 'filter-option-check';
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M20 6 9 17l-5-5"></path>
      </svg>
    `;
    option.appendChild(icon);
  });
}

function getAutomationPackageById(packageId) {
  return AUTOMATION_PACKAGE_OPTIONS.find((item) => item.id === packageId) || null;
}

function filterAutomationPackages(searchText = '') {
  const normalized = String(searchText || '').trim().toLowerCase();
  if (!normalized) return [...AUTOMATION_PACKAGE_OPTIONS];
  return AUTOMATION_PACKAGE_OPTIONS.filter((item) => {
    const haystack = `${item.label} ${item.description}`.toLowerCase();
    return haystack.includes(normalized);
  });
}

function getAutomationPriorityLabel(priority) {
  if (priority === 'high') return 'Alta';
  if (priority === 'low') return 'Baixa';
  return 'Média';
}

function getAutomationPriorityClass(priority) {
  if (priority === 'high') return 'priority-high';
  if (priority === 'low') return 'priority-low';
  return 'priority-medium';
}

function slugifyAutomationName(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function formatAutomationPackageDisplay(packageId, version) {
  const pkg = getAutomationPackageById(packageId);
  const label = pkg?.label || String(packageId || '').trim();
  return version ? `${label} • ${version}` : label;
}

function formatAutomationParamsValue(rawValue) {
  const fallback = '{}';
  const sourceText = String(rawValue || '').trim();
  if (!sourceText) return fallback;

  try {
    return JSON.stringify(JSON.parse(sourceText), null, 2);
  } catch {
    return sourceText;
  }
}

function createAutomationRow(data) {
  const row = document.createElement('div');
  const automationId = String(data.id || '').trim() || `automacao-${Date.now()}`;
  const status = data.status === 'inactive' ? 'inactive' : 'active';
  const switchId = `automationStatus${automationId.replace(/[^a-zA-Z0-9]+/g, '') || Date.now()}`;
  const priority = data.priority === 'high' || data.priority === 'low' ? data.priority : 'medium';
  const packageDisplay = formatAutomationPackageDisplay(data.packageId, data.version);

  row.className = 'data-row automation-row';
  row.dataset.automationId = automationId;
  row.dataset.automationName = data.name;
  row.dataset.automationDescription = data.description;
  row.dataset.automationPackage = data.packageId;
  row.dataset.automationVersion = data.version;
  row.dataset.automationPriority = priority;
  row.dataset.automationParams = JSON.stringify(data.paramsObject || {});
  row.dataset.automationStatus = status;

  row.innerHTML = `
    <span>${escapeHtmlWes(data.name)}</span>
    <span class="muted">${escapeHtmlWes(data.description)}</span>
    <span>${escapeHtmlWes(packageDisplay)}</span>
    <span>${escapeHtmlWes(data.lastExecution || 'Ainda não executada')}</span>
    <span class="chip ${getAutomationPriorityClass(priority)}">${getAutomationPriorityLabel(priority)}</span>
    <span class="automation-status-switch ${status === 'active' ? 'is-active' : 'is-inactive'}">
      <label class="switch small" for="${escapeHtmlWes(switchId)}">
        <input type="checkbox" id="${escapeHtmlWes(switchId)}" ${status === 'active' ? 'checked' : ''} />
        <span class="switch-track"></span>
      </label>
      <span class="automation-status-switch-label">${status === 'active' ? 'Ativo' : 'Inativo'}</span>
    </span>
    <span class="row-actions">
      <button class="icon-btn action-icon" aria-label="Executar" type="button">
        <span class="material-symbols-rounded">play_arrow</span>
      </button>
      <button class="icon-btn action-icon automation-edit-trigger" aria-label="Editar" type="button">
        <span class="material-symbols-rounded">edit</span>
      </button>
      <button class="icon-btn action-icon danger automation-delete-trigger" aria-label="Excluir" type="button">
        <span class="material-symbols-rounded">delete</span>
      </button>
    </span>
  `;

  return row;
}

function readAutomationRowData(row) {
  if (!row) return null;
  const cells = row.querySelectorAll(':scope > span');
  const paramsValue = formatAutomationParamsValue(row.dataset.automationParams);
  const statusInput = row.querySelector('.automation-status-switch input');

  return {
    id: String(row.dataset.automationId || '').trim(),
    name: String(row.dataset.automationName || cells[0]?.textContent || '').trim(),
    description: String(row.dataset.automationDescription || cells[1]?.textContent || '').trim(),
    packageId: String(row.dataset.automationPackage || '').trim(),
    version: String(row.dataset.automationVersion || '').trim(),
    priority: String(row.dataset.automationPriority || 'medium').trim(),
    params: paramsValue,
    lastExecution: String(cells[3]?.textContent || '').trim(),
    status: statusInput?.checked ? 'active' : 'inactive',
  };
}

function clearChatSpeechState() {
  if (!activeChatSpeechButton) return;
  activeChatSpeechButton.classList.remove('is-speaking');
  activeChatSpeechButton.setAttribute('aria-label', 'Ouvir mensagem');
  activeChatSpeechButton.setAttribute('title', 'Ouvir mensagem');
  activeChatSpeechButton = null;
}

function stopChatSpeechPlayback() {
  if (window.speechSynthesis?.speaking || window.speechSynthesis?.pending) {
    window.speechSynthesis.cancel();
  }
  clearChatSpeechState();
}

function getPreferredChatVoice() {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  if (!voices.length) return null;
  return (
    voices.find((voice) => String(voice.lang || '').toLowerCase() === 'pt-br') ||
    voices.find((voice) => String(voice.lang || '').toLowerCase().startsWith('pt')) ||
    voices.find((voice) => voice.default) ||
    null
  );
}

function playChatMessageAudio(button) {
  if (!button || !window.speechSynthesis || typeof window.SpeechSynthesisUtterance === 'undefined') return;
  const bubble = button.closest('.chat-message')?.querySelector('.chat-bubble');
  const text = bubble?.textContent?.trim();
  if (!text) return;

  const isSameButton = activeChatSpeechButton === button && button.classList.contains('is-speaking');
  stopChatSpeechPlayback();
  if (isSameButton) return;

  const utterance = new window.SpeechSynthesisUtterance(text);
  const voice = getPreferredChatVoice();
  utterance.lang = voice?.lang || 'pt-BR';
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;
  if (voice) utterance.voice = voice;

  utterance.onstart = () => {
    activeChatSpeechButton = button;
    button.classList.add('is-speaking');
    button.setAttribute('aria-label', 'Parar leitura');
    button.setAttribute('title', 'Parar leitura');
  };

  utterance.onend = () => {
    clearChatSpeechState();
  };

  utterance.onerror = () => {
    clearChatSpeechState();
  };

  window.speechSynthesis.speak(utterance);
}

// Futuro ditado: transcrever a fala para o input sem envio automático,
// para o usuário revisar e corrigir antes de enviar manualmente.
function setChatDictationState(isActive) {
  if (!chatDictationButton) return;
  const nextTooltip = isActive ? 'Encerrar ditado' : 'Ditar mensagem';
  chatDictationButton.dataset.dictating = isActive ? 'true' : 'false';
  chatDictationButton.classList.toggle('is-active', isActive);
  chatDictationButton.setAttribute('aria-label', nextTooltip);
  chatDictationButton.dataset.tooltip = nextTooltip;
  chatDictationButton.innerHTML = `<i data-lucide="${isActive ? 'circle-stop' : 'mic'}"></i>`;
  scheduleLucideRefresh();
}

function isValidAgentsPageEnvironmentId(environmentId) {
  return AGENTS_PAGE_ENVIRONMENTS.some((item) => item.id === environmentId);
}

function readAgentEnvironmentOverrides() {
  try {
    const raw = window.localStorage?.getItem(AGENT_ENVIRONMENT_OVERRIDES_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
    return Object.fromEntries(
      Object.entries(parsed).filter(([, environmentId]) => isValidAgentsPageEnvironmentId(environmentId))
    );
  } catch {
    return {};
  }
}

function persistAgentEnvironmentOverrides() {
  try {
    window.localStorage?.setItem(
      AGENT_ENVIRONMENT_OVERRIDES_STORAGE_KEY,
      JSON.stringify(agentEnvironmentOverrides)
    );
  } catch {
    /* ignore */
  }
}

function getAgentEnvironmentOverride(agentId) {
  const normalizedAgentId = String(agentId || '').trim();
  if (!normalizedAgentId) return '';
  const environmentId = agentEnvironmentOverrides[normalizedAgentId];
  return isValidAgentsPageEnvironmentId(environmentId) ? environmentId : '';
}

function setAgentEnvironmentOverride(agentId, environmentId) {
  const normalizedAgentId = String(agentId || '').trim();
  if (!normalizedAgentId || !isValidAgentsPageEnvironmentId(environmentId)) return;
  agentEnvironmentOverrides[normalizedAgentId] = environmentId;
  persistAgentEnvironmentOverrides();
}

function clearAgentEnvironmentOverride(agentId) {
  const normalizedAgentId = String(agentId || '').trim();
  if (!normalizedAgentId || !(normalizedAgentId in agentEnvironmentOverrides)) return;
  delete agentEnvironmentOverrides[normalizedAgentId];
  persistAgentEnvironmentOverrides();
}

function buildProjectEnvironmentOverrideKeys({
  projectId = '',
  orgSlug = '',
  projectSlug = '',
} = {}) {
  const keys = [];
  const normalizedProjectId = String(projectId || '').trim();
  const normalizedOrgSlug = String(orgSlug || '').trim();
  const normalizedProjectSlug = String(projectSlug || '').trim();
  if (normalizedProjectId) keys.push(`id:${normalizedProjectId}`);
  if (normalizedOrgSlug && normalizedProjectSlug) keys.push(`slug:${normalizedOrgSlug}:${normalizedProjectSlug}`);
  return keys;
}

function readProjectEnvironmentOverrides() {
  try {
    const raw = window.localStorage?.getItem(PROJECT_ENVIRONMENT_OVERRIDES_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
    return Object.fromEntries(
      Object.entries(parsed).filter(([, environmentId]) => isValidAgentsPageEnvironmentId(environmentId))
    );
  } catch {
    return {};
  }
}

function persistProjectEnvironmentOverrides() {
  try {
    window.localStorage?.setItem(
      PROJECT_ENVIRONMENT_OVERRIDES_STORAGE_KEY,
      JSON.stringify(projectEnvironmentOverrides)
    );
  } catch {
    /* ignore */
  }
}

function getProjectEnvironmentOverride(projectMeta = {}) {
  const keys = buildProjectEnvironmentOverrideKeys(projectMeta);
  for (const key of keys) {
    const environmentId = projectEnvironmentOverrides[key];
    if (isValidAgentsPageEnvironmentId(environmentId)) return environmentId;
  }
  return '';
}

function setProjectEnvironmentOverride(projectMeta = {}, environmentId = '') {
  if (!isValidAgentsPageEnvironmentId(environmentId)) return;
  const keys = buildProjectEnvironmentOverrideKeys(projectMeta);
  if (!keys.length) return;
  keys.forEach((key) => {
    projectEnvironmentOverrides[key] = environmentId;
  });
  persistProjectEnvironmentOverrides();
}

function readProjectPromptOverrides() {
  try {
    const raw = window.localStorage?.getItem(PROJECT_PROMPT_OVERRIDES_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
    return Object.fromEntries(
      Object.entries(parsed).filter(([, prompt]) => typeof prompt === 'string')
    );
  } catch {
    return {};
  }
}

function persistProjectPromptOverrides() {
  try {
    window.localStorage?.setItem(
      PROJECT_PROMPT_OVERRIDES_STORAGE_KEY,
      JSON.stringify(projectPromptOverrides)
    );
  } catch {
    /* ignore */
  }
}

function getProjectPromptOverride(projectMeta = {}) {
  const keys = buildProjectEnvironmentOverrideKeys(projectMeta);
  for (const key of keys) {
    if (typeof projectPromptOverrides[key] === 'string') {
      return projectPromptOverrides[key];
    }
  }
  return '';
}

function setProjectPromptOverride(projectMeta = {}, prompt = '') {
  const keys = buildProjectEnvironmentOverrideKeys(projectMeta);
  if (!keys.length) return;
  const normalizedPrompt = String(prompt || '').trim();
  if (!normalizedPrompt) {
    keys.forEach((key) => {
      delete projectPromptOverrides[key];
    });
  } else {
    keys.forEach((key) => {
      projectPromptOverrides[key] = normalizedPrompt;
    });
  }
  persistProjectPromptOverrides();
}

function slugifyProjectTitle(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function closeAgentsCreateMenu() {
  agentsCreateMenu?.classList.remove('open');
  agentsCreateMenuToggle?.setAttribute('aria-expanded', 'false');
}

function getVisibleAgentsRows() {
  const table = document.getElementById('agentsAllAgentsTable');
  if (!table) return [];
  return Array.from(table.querySelectorAll('.agents-row:not(.header)')).filter((row) => {
    return !row.classList.contains('agents-row--scope-hide') && !row.classList.contains('agents-row--search-hide');
  });
}

function renderAgentsPagination() {
  const table = document.getElementById('agentsAllAgentsTable');
  if (!table || !agentsPagePagination || !agentsPageNumbers) return;

  const visibleRows = getVisibleAgentsRows();
  const totalPages = Math.max(1, Math.ceil(visibleRows.length / AGENTS_PAGE_SIZE));
  agentsCurrentPage = Math.min(Math.max(agentsCurrentPage, 1), totalPages);

  table.querySelectorAll('.agents-row:not(.header)').forEach((row) => {
    row.classList.remove('agents-row--page-hide');
  });

  const start = (agentsCurrentPage - 1) * AGENTS_PAGE_SIZE;
  const end = start + AGENTS_PAGE_SIZE;
  visibleRows.forEach((row, index) => {
    row.classList.toggle('agents-row--page-hide', index < start || index >= end);
  });

  agentsPageNumbers.innerHTML = '';
  for (let page = 1; page <= totalPages; page += 1) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'page-number';
    button.textContent = String(page);
    if (page === agentsCurrentPage) {
      button.classList.add('active');
      button.setAttribute('aria-current', 'page');
      button.disabled = true;
    }
    button.addEventListener('click', () => {
      agentsCurrentPage = page;
      renderAgentsPagination();
    });
    agentsPageNumbers.appendChild(button);
  }

  const navButtons = agentsPagePagination.querySelectorAll('.icon-btn');
  const prevBtn = navButtons[0];
  const nextBtn = navButtons[1];
  if (prevBtn) prevBtn.disabled = agentsCurrentPage <= 1;
  if (nextBtn) nextBtn.disabled = agentsCurrentPage >= totalPages;
  agentsPagePagination.hidden = visibleRows.length === 0;
  agentsPagePagination.classList.toggle('is-hidden', visibleRows.length === 0);
}

function resetAgentsPagination() {
  agentsCurrentPage = 1;
  renderAgentsPagination();
}

if (filterBtn && filterMenu) {
  filterBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    filterMenu.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    filterMenu.classList.remove('open');
  });

  filterMenu.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      filterMenu.classList.remove('open');
    });
  });
}

if (filterBtnAlt && filterMenuAlt) {
  filterBtnAlt.addEventListener('click', (event) => {
    event.stopPropagation();
    filterMenuAlt.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    filterMenuAlt.classList.remove('open');
  });

  filterMenuAlt.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      filterMenuAlt.classList.remove('open');
    });
  });
}

if (automationFilterBtn && automationFilterMenu) {
  automationFilterBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    automationFilterMenu.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    automationFilterMenu.classList.remove('open');
  });

  const filterOptions = automationFilterMenu.querySelectorAll('.filter-option');
  const clearButton = automationFilterMenu.querySelector('.filter-clear');

  filterOptions.forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.filter;
      automationFilterMenu
        .querySelectorAll(`.filter-option[data-filter="${group}"]`)
        .forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      automationFilterMenu.classList.remove('open');
    });
  });

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      automationFilterMenu
        .querySelectorAll('.filter-option')
        .forEach((item) => item.classList.remove('active'));
      automationFilterMenu
        .querySelectorAll('.filter-option[data-value=\"\"]')
        .forEach((item) => item.classList.add('active'));
      automationFilterMenu.classList.remove('open');
    });
  }
}

if (executorFilterBtn && executorFilterMenu) {
  executorFilterBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    executorFilterMenu.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    executorFilterMenu.classList.remove('open');
  });

  const filterOptions = executorFilterMenu.querySelectorAll('.filter-option');
  const clearButton = executorFilterMenu.querySelector('.filter-clear');

  filterOptions.forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.filter;
      executorFilterMenu
        .querySelectorAll(`.filter-option[data-filter="${group}"]`)
        .forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      executorFilterMenu.classList.remove('open');
    });
  });

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      executorFilterMenu
        .querySelectorAll('.filter-option')
        .forEach((item) => item.classList.remove('active'));
      executorFilterMenu
        .querySelectorAll('.filter-option[data-value=\"\"]')
        .forEach((item) => item.classList.add('active'));
      executorFilterMenu.classList.remove('open');
    });
  }
}

if (packagesFilterBtn && packagesFilterMenu) {
  packagesFilterBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    packagesFilterMenu.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    packagesFilterMenu.classList.remove('open');
  });

  const filterOptions = packagesFilterMenu.querySelectorAll('.filter-option');
  const clearButton = packagesFilterMenu.querySelector('.filter-clear');

  filterOptions.forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.filter;
      packagesFilterMenu
        .querySelectorAll(`.filter-option[data-filter="${group}"]`)
        .forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      packagesFilterMenu.classList.remove('open');
    });
  });

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      packagesFilterMenu
        .querySelectorAll('.filter-option')
        .forEach((item) => item.classList.remove('active'));
      packagesFilterMenu
        .querySelectorAll('.filter-option[data-value=\"\"]')
        .forEach((item) => item.classList.add('active'));
      packagesFilterMenu.classList.remove('open');
    });
  }
}

if (usersFilterBtn && usersFilterMenu) {
  usersFilterBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    usersFilterMenu.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    usersFilterMenu.classList.remove('open');
  });

  const filterOptions = usersFilterMenu.querySelectorAll('.filter-option');
  const clearButton = usersFilterMenu.querySelector('.filter-clear');

  filterOptions.forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.filter;
      usersFilterMenu
        .querySelectorAll(`.filter-option[data-filter="${group}"]`)
        .forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      usersFilterMenu.classList.remove('open');
    });
  });

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      usersFilterMenu
        .querySelectorAll('.filter-option')
        .forEach((item) => item.classList.remove('active'));
      usersFilterMenu
        .querySelectorAll('.filter-option[data-value=\"\"]')
        .forEach((item) => item.classList.add('active'));
      usersFilterMenu.classList.remove('open');
    });
  }
}

if (auditFilterBtn && auditFilterMenu) {
  auditFilterBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    auditFilterMenu.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    auditFilterMenu.classList.remove('open');
  });

  const filterOptions = auditFilterMenu.querySelectorAll('.filter-option');
  const clearButton = auditFilterMenu.querySelector('.filter-clear');

  filterOptions.forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.filter;
      auditFilterMenu
        .querySelectorAll(`.filter-option[data-filter=\"${group}\"]`)
        .forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      auditFilterMenu.classList.remove('open');
    });
  });

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      auditFilterMenu
        .querySelectorAll('.filter-option')
        .forEach((item) => item.classList.remove('active'));
      auditFilterMenu
        .querySelectorAll('.filter-option[data-value=\"\"]')
        .forEach((item) => item.classList.add('active'));
      auditFilterMenu.classList.remove('open');
    });
  }
}

if (keysFilterBtn && keysFilterMenu) {
  keysFilterBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    keysFilterMenu.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    keysFilterMenu.classList.remove('open');
  });

  const filterOptions = keysFilterMenu.querySelectorAll('.filter-option');
  const clearButton = keysFilterMenu.querySelector('.filter-clear');

  filterOptions.forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.filter;
      keysFilterMenu
        .querySelectorAll(`.filter-option[data-filter="${group}"]`)
        .forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      keysFilterMenu.classList.remove('open');
    });
  });

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      keysFilterMenu
        .querySelectorAll('.filter-option')
        .forEach((item) => item.classList.remove('active'));
      keysFilterMenu
        .querySelectorAll('.filter-option[data-value=""]')
        .forEach((item) => item.classList.add('active'));
      keysFilterMenu.classList.remove('open');
    });
  }
}

if (openAgentModal && agentModal) {
  openAgentModal.addEventListener('click', async () => {
    closeAgentsCreateMenu();
    if (typeof refreshHubScopeFromApi === 'function' && window.WesDashboardAuth?.isAuthenticated()) {
      try {
        await refreshHubScopeFromApi();
      } catch (error) {
        console.warn('Não foi possível atualizar o escopo antes de abrir o modal de agente.', error);
      }
    }
    if (typeof hubSyncFromState === 'function') hubSyncFromState();
    const errEl = document.getElementById('agentModalError');
    const newCtxInput = document.getElementById('agentModalNewContextName');
    const showNewCtxLink = document.getElementById('agentModalShowNewContextLink');
    const backToExistingLink = document.getElementById('agentModalBackToExistingLink');
    const newCtxPanel = document.getElementById('agentModalNewContextPanel');
    const ctxSelect = document.getElementById('agentModalContext');
    const ctxWrap = ctxSelect?.closest('.hub-select-wrap');
    const form = document.getElementById('agentModalForm');
    const descInput = document.getElementById('agentModalDescription');
    const nameCounter = document.getElementById('agentModalNameCounter');
    const descCounter = document.getElementById('agentModalDescriptionCounter');
    const promptInput = document.getElementById('agentModalSystemPrompt');
    const promptCounter = document.getElementById('agentModalPromptCounter');
    const ragInput = document.getElementById('agentModalUseRag');
    const submitBtn = document.getElementById('agentModalSubmit');
    const voiceInput = document.getElementById('agentModalVoiceEnabled');
    const voiceOptions = document.getElementById('agentModalVoiceOptions');
    const voiceLocale = document.getElementById('agentModalVoiceLocale');
    const voiceSelect = document.getElementById('agentModalVoice');
    const voicePreviewButton = document.getElementById('agentModalVoicePreview');
    const audioPlayback = document.getElementById('agentModalAudioPlayback');
    const headphoneMode = document.getElementById('agentModalHeadphoneMode');
    const muteMicWhileSpeaking = document.getElementById('agentModalMuteMicWhileSpeaking');
    const micProfile = document.getElementById('agentModalMicProfile');
    const interruptSensitivity = document.getElementById('agentModalInterruptSensitivity');
    const audioPanelBody = document.getElementById('agentModalAudioPanelBody');
    const audioPanelToggle = document.getElementById('agentModalAudioToggle');
    if (errEl) {
      errEl.textContent = '';
      errEl.hidden = true;
    }
    form?.reset();
    if (descInput) descInput.value = '';
    if (promptInput) promptInput.value = '';
    if (nameCounter) nameCounter.textContent = '0/200';
    if (descCounter) descCounter.textContent = '0/4000';
    if (promptCounter) promptCounter.textContent = '0/20000';
    if (ragInput) ragInput.checked = false;
    if (voiceInput) voiceInput.checked = false;
    if (voiceOptions) {
      voiceOptions.classList.add('is-hidden');
      voiceOptions.hidden = true;
    }
    if (voiceLocale) voiceLocale.value = 'pt-BR';
    if (voiceSelect) voiceSelect.value = 'Antonio';
    if (voiceLocale) voiceLocale.disabled = true;
    if (voiceSelect) voiceSelect.disabled = true;
    if (voicePreviewButton) voicePreviewButton.disabled = true;
    if (audioPanelToggle) audioPanelToggle.disabled = true;
    if (audioPlayback) audioPlayback.disabled = true;
    if (headphoneMode) headphoneMode.disabled = true;
    if (muteMicWhileSpeaking) muteMicWhileSpeaking.disabled = true;
    if (micProfile) micProfile.disabled = true;
    if (interruptSensitivity) interruptSensitivity.disabled = true;
    if (audioPlayback) audioPlayback.checked = true;
    if (headphoneMode) headphoneMode.checked = false;
    if (muteMicWhileSpeaking) muteMicWhileSpeaking.checked = false;
    if (micProfile) micProfile.value = 'default';
    if (interruptSensitivity) interruptSensitivity.value = 'default';
    if (audioPanelBody) {
      audioPanelBody.classList.remove('is-hidden');
      audioPanelBody.hidden = false;
    }
    if (audioPanelToggle) {
      audioPanelToggle.setAttribute('aria-expanded', 'true');
    }
    if (newCtxInput) newCtxInput.value = '';
    if (newCtxPanel) {
      newCtxPanel.classList.add('is-hidden');
      newCtxPanel.hidden = true;
    }
    if (ctxSelect) {
      ctxSelect.disabled = false;
      ctxSelect.toggleAttribute('aria-disabled', false);
    }
    ctxWrap?.classList.remove('is-muted-select');
    if (showNewCtxLink) {
      showNewCtxLink.classList.remove('is-hidden');
      showNewCtxLink.hidden = false;
    }
    if (backToExistingLink) {
      backToExistingLink.classList.add('is-hidden');
      backToExistingLink.hidden = true;
    }
    if (agentModal) agentModal.dataset.contextMode = 'existing';
    if (submitBtn) submitBtn.disabled = true;
    agentModal.classList.add('open');
    agentModal.setAttribute('aria-hidden', 'false');
    if (typeof hubRefreshCustomSelects === 'function') hubRefreshCustomSelects();
    document.getElementById('agentModalName')?.focus();
  });

  agentModal.addEventListener('click', (event) => {
    const closeTarget = event.target.closest('[data-modal-close]');
    if (closeTarget) {
      agentModal.classList.remove('open');
      agentModal.setAttribute('aria-hidden', 'true');
    }
  });
}

(function wireAgentCreateModal() {
  const modal = document.getElementById('agentModal');
  const form = document.getElementById('agentModalForm');
  const errEl = document.getElementById('agentModalError');
  const environmentSel = document.getElementById('agentModalEnvironment');
  const projectSel = document.getElementById('agentModalProject');
  const ctxSel = document.getElementById('agentModalContext');
  const showNewCtxLink = document.getElementById('agentModalShowNewContextLink');
  const backToExistingLink = document.getElementById('agentModalBackToExistingLink');
  const newCtxPanel = document.getElementById('agentModalNewContextPanel');
  const newCtxNameInput = document.getElementById('agentModalNewContextName');
  const ctxWrap = ctxSel?.closest('.hub-select-wrap');
  const nameInput = document.getElementById('agentModalName');
  const nameCounter = document.getElementById('agentModalNameCounter');
  const descInput = document.getElementById('agentModalDescription');
  const descCounter = document.getElementById('agentModalDescriptionCounter');
  const promptInput = document.getElementById('agentModalSystemPrompt');
  const promptCounter = document.getElementById('agentModalPromptCounter');
  const promptEnhanceBtn = document.getElementById('agentModalPromptEnhance');
  const voiceEnabledInput = document.getElementById('agentModalVoiceEnabled');
  const voiceOptions = document.getElementById('agentModalVoiceOptions');
  const voiceLocaleSelect = document.getElementById('agentModalVoiceLocale');
  const voiceSelect = document.getElementById('agentModalVoice');
  const voicePreviewButton = document.getElementById('agentModalVoicePreview');
  const audioToggle = document.getElementById('agentModalAudioToggle');
  const audioPanelBody = document.getElementById('agentModalAudioPanelBody');
  const audioPlaybackInput = document.getElementById('agentModalAudioPlayback');
  const headphoneModeInput = document.getElementById('agentModalHeadphoneMode');
  const muteMicWhileSpeakingInput = document.getElementById('agentModalMuteMicWhileSpeaking');
  const micProfileSelect = document.getElementById('agentModalMicProfile');
  const interruptSensitivitySelect = document.getElementById('agentModalInterruptSensitivity');
  const ragInput = document.getElementById('agentModalUseRag');
  const submitBtn = document.getElementById('agentModalSubmit');
  if (!modal || !form || !environmentSel || !projectSel || !nameInput || !promptInput || !submitBtn) return;

  function setError(msg) {
    if (!errEl) return;
    if (msg) {
      errEl.textContent = msg;
      errEl.hidden = false;
      const modalBody = modal.querySelector('.modal-body');
      if (modalBody && typeof modalBody.scrollTo === 'function') {
        modalBody.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        errEl.scrollIntoView({ block: 'nearest' });
      }
    } else {
      errEl.textContent = '';
      errEl.hidden = true;
    }
  }

  function updateCounter(input, counter, maxLength) {
    if (!input || !counter) return;
    const current = String(input.value || '').length;
    counter.textContent = `${current}/${maxLength}`;
  }

  function improveAgentSystemPrompt(rawText, context = {}) {
    const normalized = String(rawText || '')
      .replace(/\s+/g, ' ')
      .replace(/\s*([,.;:!?])/g, '$1')
      .trim();
    const fallbackObjective = [
      String(context.name || '').trim(),
      String(context.description || '').trim(),
    ].filter(Boolean).join(' - ');
    const baseText = normalized || fallbackObjective || 'Atender solicitações de forma clara, objetiva e útil';
    const objective = /[.!?]$/.test(normalized) ? normalized : `${normalized}.`;

    return [
      'Você é um agente especializado nas instruções abaixo.',
      '',
      'Objetivo principal:',
      `- ${/[.!?]$/.test(baseText) ? baseText : `${baseText}.`}`,
      '',
      'Como agir:',
      '- Responda sempre em português do Brasil.',
      '- Seja claro, simples e objetivo.',
      '- Use o contexto do ambiente e do projeto quando isso ajudar.',
      '- Se faltarem informações, peça esclarecimentos antes de assumir algo.',
      '- Organize a resposta em passos curtos quando isso facilitar a execução.',
    ].join('\n');
  }

  function syncAgentSubmitState() {
    const hasName = Boolean(nameInput.value.trim());
    const hasPrompt = Boolean(promptInput.value.trim());
    const hasEnvironment = Boolean(String(environmentSel.value || '').trim());
    submitBtn.disabled = !(hasName && hasPrompt && hasEnvironment) || submitBtn.classList.contains('is-loading');
  }

  function syncVoiceOptionsVisibility() {
    if (!voiceEnabledInput || !voiceOptions) return;
    const isEnabled = voiceEnabledInput.checked;
    voiceOptions.classList.toggle('is-hidden', !isEnabled);
    voiceOptions.hidden = !isEnabled;
    if (voiceLocaleSelect) voiceLocaleSelect.disabled = !isEnabled;
    if (voiceSelect) voiceSelect.disabled = !isEnabled;
    if (voicePreviewButton) voicePreviewButton.disabled = !isEnabled;
    if (audioToggle) audioToggle.disabled = !isEnabled;
    if (audioPlaybackInput) audioPlaybackInput.disabled = !isEnabled;
    if (headphoneModeInput) headphoneModeInput.disabled = !isEnabled;
    if (muteMicWhileSpeakingInput) muteMicWhileSpeakingInput.disabled = !isEnabled;
    if (micProfileSelect) micProfileSelect.disabled = !isEnabled;
    if (interruptSensitivitySelect) interruptSensitivitySelect.disabled = !isEnabled;
  }

  function syncAudioPanelState(isExpanded) {
    if (!audioToggle || !audioPanelBody) return;
    audioToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    audioPanelBody.classList.toggle('is-hidden', !isExpanded);
    audioPanelBody.hidden = !isExpanded;
  }

  function setAgentModalNewContextMode(isNew) {
    modal.dataset.contextMode = isNew ? 'new' : 'existing';
    if (newCtxPanel) {
      newCtxPanel.classList.toggle('is-hidden', !isNew);
      newCtxPanel.hidden = !isNew;
    }
    if (ctxSel) {
      ctxSel.disabled = isNew;
      ctxSel.toggleAttribute('aria-disabled', isNew);
    }
    ctxWrap?.classList.toggle('is-muted-select', isNew);
    if (newCtxNameInput) {
      newCtxNameInput.required = isNew;
      if (!isNew) newCtxNameInput.value = '';
    }
    if (showNewCtxLink) {
      showNewCtxLink.classList.toggle('is-hidden', isNew);
      showNewCtxLink.hidden = isNew;
    }
    if (backToExistingLink) {
      backToExistingLink.classList.toggle('is-hidden', !isNew);
      backToExistingLink.hidden = !isNew;
    }
  }

  setAgentModalNewContextMode(false);
  projectSel.addEventListener('change', () => {
    fillAgentModalContextOptions(projectSel.value, '');
    hubRefreshCustomSelects();
  });
  showNewCtxLink?.addEventListener('click', () => {
    setAgentModalNewContextMode(true);
    hubRefreshCustomSelects();
    newCtxNameInput?.focus();
  });
  backToExistingLink?.addEventListener('click', () => {
    setAgentModalNewContextMode(false);
    hubRefreshCustomSelects();
    ctxSel?.focus();
  });

  nameInput?.addEventListener('input', () => {
    updateCounter(nameInput, nameCounter, 200);
    syncAgentSubmitState();
  });
  descInput?.addEventListener('input', () => {
    updateCounter(descInput, descCounter, 4000);
  });
  promptInput?.addEventListener('input', () => {
    updateCounter(promptInput, promptCounter, 20000);
    syncAgentSubmitState();
  });
  environmentSel?.addEventListener('change', syncAgentSubmitState);
  voiceEnabledInput?.addEventListener('change', syncVoiceOptionsVisibility);
  audioToggle?.addEventListener('click', () => {
    const isExpanded = audioToggle.getAttribute('aria-expanded') !== 'true';
    syncAudioPanelState(isExpanded);
  });
  promptEnhanceBtn?.addEventListener('click', () => {
    const currentPrompt = promptInput.value.trim();
    promptInput.value = improveAgentSystemPrompt(currentPrompt, {
      name: nameInput.value.trim(),
      description: descInput?.value?.trim() || '',
    });
    updateCounter(promptInput, promptCounter, 20000);
    syncAgentSubmitState();
    promptInput.focus();
  });
  voicePreviewButton?.addEventListener('click', () => {
    if (!window.speechSynthesis || typeof window.SpeechSynthesisUtterance === 'undefined') return;
    const utterance = new window.SpeechSynthesisUtterance('Olá. Esta é uma prévia da voz configurada para o agente.');
    const selectedLocale = String(voiceLocaleSelect?.value || 'pt-BR').toLowerCase();
    const selectedVoiceName = String(voiceSelect?.value || '').trim().toLowerCase();
    const voices = window.speechSynthesis.getVoices?.() || [];
    utterance.lang = String(voiceLocaleSelect?.value || 'pt-BR');
    utterance.voice =
      voices.find((voice) => String(voice.name || '').toLowerCase().includes(selectedVoiceName) && String(voice.lang || '').toLowerCase() === selectedLocale) ||
      voices.find((voice) => String(voice.lang || '').toLowerCase() === selectedLocale) ||
      voices.find((voice) => String(voice.lang || '').toLowerCase().startsWith(selectedLocale.split('-')[0])) ||
      null;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  });

  updateCounter(nameInput, nameCounter, 200);
  updateCounter(descInput, descCounter, 4000);
  updateCounter(promptInput, promptCounter, 20000);
  syncAudioPanelState(true);
  syncVoiceOptionsVisibility();
  syncAgentSubmitState();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    setError('');
    if (typeof window.wesApiFetch !== 'function' || !window.WesDashboardAuth?.isAuthenticated()) {
      setError('Recurso indisponível sem configuração de API.');
      return;
    }
    const selectedEnvironmentId = String(environmentSel.value || '').trim();
    const projectSlug = String(projectSel.value || '').trim();
    const name = nameInput.value.trim();
    const systemPrompt = promptInput.value.trim();
    if (!name) {
      nameInput.focus();
      return;
    }
    if (!selectedEnvironmentId) {
      environmentSel.focus();
      return;
    }
    if (!systemPrompt) {
      promptInput.focus();
      return;
    }
    const description = descInput?.value?.trim() || '';
    submitBtn.disabled = true;
    submitBtn.classList.add('is-loading');
    try {
      const org = HUB_SCOPE[hubOrgId];
      const project = projectSlug ? org?.projects?.find((item) => item.slug === projectSlug) : null;

      const res = await window.wesApiFetch('/agents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          description,
          system_prompt: systemPrompt,
          environment_slug: hubOrgId,
          project_id: project?.id || null,
          use_rag: Boolean(ragInput?.checked),
        }),
      });
      const rawText = await res.text();
      let body = null;
      try {
        body = rawText ? JSON.parse(rawText) : null;
      } catch {
        body = null;
      }
      if (!res.ok) {
        const detail =
          typeof body?.detail === 'string'
            ? body.detail
            : Array.isArray(body?.detail)
              ? body.detail.map((x) => (x.msg ? x.msg : JSON.stringify(x))).join('; ')
              : rawText || res.statusText;
        setError(`Não foi possível criar (${res.status}): ${detail}`);
        return;
      }
      if (body?.id) {
        setAgentEnvironmentOverride(body.id, selectedEnvironmentId);
      }
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      form.reset();
      setAgentModalNewContextMode(false);
      syncAgentModalScope();
      updateCounter(nameInput, nameCounter, 200);
      updateCounter(descInput, descCounter, 4000);
      updateCounter(promptInput, promptCounter, 20000);
      syncAudioPanelState(true);
      syncVoiceOptionsVisibility();
      syncAgentSubmitState();
      if (typeof refreshAgentsTableFromApi === 'function') {
        void refreshAgentsTableFromApi();
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
    } finally {
      submitBtn.classList.remove('is-loading');
      syncAgentSubmitState();
    }
  });
})();

function getProjectById(org, projectId) {
  const normalizedId = String(projectId || '').trim();
  if (!normalizedId || !org || !Array.isArray(org.projects)) return null;
  return org.projects.find((project) => String(project.id || '').trim() === normalizedId) || null;
}

function getProjectBySlug(org, projectSlug) {
  const normalizedSlug = String(projectSlug || '').trim();
  if (!normalizedSlug || !org || !Array.isArray(org.projects)) return null;
  return org.projects.find((project) => String(project.slug || '').trim() === normalizedSlug) || null;
}

function isAgentsDashboardRoute() {
  const raw = String(window.location.hash || '').replace(/^#\/?/, '');
  return raw === 'dashboard/agents' || raw.startsWith('dashboard/agents/project/');
}

function buildAgentChatPayloadFromButton(button) {
  const row = button.closest('.agents-row');
  let agentName = 'Agente';
  let agentId = '';
  let rowCtxId = '';
  const environmentSlug = String(row?.dataset.hubOrg || hubOrgId || '').trim();
  const projectId = String(row?.dataset.projectId || '').trim();

  if (row) {
    const nameStrong = row.querySelector('span strong');
    if (nameStrong) agentName = nameStrong.textContent.trim();
    const uuid = row.dataset.agentUuid;
    rowCtxId = String(row.dataset.hubContext || '').trim();
    if (!rowCtxId) {
      rowCtxId = String(row.closest('.agents-context-block')?.dataset.hubContext || '').trim();
    }
    if (uuid) {
      agentId = uuid;
    } else {
      const cells = Array.from(row.children).filter(
        (child) => child.tagName === 'SPAN' && !child.classList.contains('row-actions')
      );
      if (cells[1]) agentId = cells[1].textContent.trim();
    }
  }

  const org = HUB_SCOPE?.[environmentSlug] || null;
  const project = getProjectById(org, projectId);
  return {
    agentName,
    agentId,
    rowCtxId,
    environmentSlug,
    projectId,
    projectSlug: project?.slug || '',
    projectTitle: project?.title || ''
  };
}

function openAgentChatModalWithPayload(payload) {
  if (!payload) return;
  if (payload.environmentSlug) {
    hubOrgId = payload.environmentSlug;
  }
  openAgentChatModalFromToggle({
    closest(selector) {
      if (selector !== '.agents-row') return null;
      return {
        dataset: {
          agentUuid: payload.agentId || '',
          hubContext: payload.rowCtxId || '',
          hubOrg: payload.environmentSlug || hubOrgId || '',
          projectId: payload.projectId || ''
        },
        querySelector(query) {
          if (query === 'span strong') {
            return { textContent: payload.agentName || 'Agente' };
          }
          return null;
        },
        closest() {
          return null;
        },
        children: [
          { tagName: 'SPAN', classList: { contains: () => false }, textContent: payload.agentName || 'Agente' },
          { tagName: 'SPAN', classList: { contains: () => false }, textContent: payload.agentId || '' }
        ]
      };
    }
  });
  const projectSlug = String(payload.projectSlug || getCurrentAgentsProjectSlugFromRoute() || '').trim();
  if (agentChatModal) {
    agentChatModal.dataset.projectSlug = projectSlug;
  }
  if (agentChatScopeLine) agentChatScopeLine.hidden = true;
  syncAgentChatHistoryScope();
}

function openAgentHistoryScopeModalForPayload(payload) {
  openAgentChatModalWithPayload(payload);
}

function openAgentChatModalFromToggle(button) {
  const row = button.closest('.agents-row');
  let agentName = 'Agente';
  let agentId = '';
  let rowCtxId = '';

  if (row) {
    const nameStrong = row.querySelector('span strong');
    if (nameStrong) agentName = nameStrong.textContent.trim();
    const uuid = row.dataset.agentUuid;
    rowCtxId = String(row.dataset.hubContext || '').trim();
    if (!rowCtxId) {
      rowCtxId = String(row.closest('.agents-context-block')?.dataset.hubContext || '').trim();
    }
    if (uuid) {
      agentId = uuid;
    } else {
      const cells = Array.from(row.children).filter(
        (child) => child.tagName === 'SPAN' && !child.classList.contains('row-actions')
      );
      if (cells[1]) agentId = cells[1].textContent.trim();
    }
  }

  if (agentChatTitle) {
    agentChatTitle.textContent = `Chat com ${agentName}`;
  }
  agentChatModal.dataset.agentId = agentId;
  agentChatModal.dataset.contextId = rowCtxId || String(hubContextId || '').trim();
  if (agentChatScopeLine) agentChatScopeLine.hidden = true;
  syncAgentChatHistoryScope();
  if (agentChatSubtitle) {
    const activeHistory = chatHistoryList?.querySelector('.chat-history-item.active:not([hidden])');
    if (activeHistory) {
      const historyTitle = activeHistory.querySelector('.chat-history-title')?.value || 'Conversa';
      const historyDate = activeHistory.querySelector('.chat-history-date')?.textContent?.trim() || 'Hoje';
      agentChatSubtitle.textContent = `${historyTitle} • Última conversa ${historyDate}`;
    } else {
      agentChatSubtitle.textContent = agentId ? `${agentId} • Online agora` : 'Online agora';
    }
  }

  agentChatModal.classList.add('open');
  agentChatModal.setAttribute('aria-hidden', 'false');
  if (window.lucide) {
    scheduleLucideRefresh();
  }
  updateSkillStatus();
  updateChatSendState();
  updateChatEmptyState();
}

const agentsPageForChat = document.getElementById('page-agents');
if (agentChatModal && agentsPageForChat) {
  agentsPageForChat.addEventListener('click', (event) => {
    const chatBtn = event.target.closest('.agent-chat-toggle');
    if (!chatBtn || !agentsPageForChat.contains(chatBtn)) return;
    event.stopPropagation();
    openAgentHistoryScopeModalForPayload(buildAgentChatPayloadFromButton(chatBtn));
  });
  agentsPageForChat.addEventListener('click', (event) => {
    const deleteBtn = event.target.closest('.agent-delete-toggle');
    if (!deleteBtn || !agentsPageForChat.contains(deleteBtn)) return;
    event.stopPropagation();
    void deleteAgentWithConfirmation(deleteBtn.closest('.agents-row'));
  });
}

if (agentHistoryScopeModal) {
  agentHistoryScopeModal.addEventListener('click', (event) => {
    const closeTarget = event.target.closest('[data-modal-close]');
    if (!closeTarget) return;
    agentHistoryScopeModal.classList.remove('open');
    agentHistoryScopeModal.setAttribute('aria-hidden', 'true');
  });
}

if (agentHistoryScopeConfirm && agentHistoryScopeProject) {
  agentHistoryScopeConfirm.addEventListener('click', () => {
    const projectSlug = String(agentHistoryScopeProject.value || '').trim();
    if (!projectSlug) {
      if (agentHistoryScopeError) {
        agentHistoryScopeError.hidden = false;
        agentHistoryScopeError.textContent = 'Selecione uma pasta para continuar.';
      }
      return;
    }

    let payload = null;
    try {
      payload = JSON.parse(agentHistoryScopeModal?.dataset.pendingChat || '{}');
    } catch {
      payload = null;
    }
    if (!payload) return;

    const org = HUB_SCOPE?.[payload.environmentSlug || hubOrgId] || null;
    const project = org?.projects?.find((item) => item.slug === projectSlug) || null;
    const originalAgentProjectId = String(payload.projectId || '').trim();
    if (payload.environmentSlug) {
      hubOrgId = payload.environmentSlug;
    }
    if (typeof hubSyncFromState === 'function') hubSyncFromState();
    const selectedHash = `#/dashboard/agents/project/${encodeURIComponent(projectSlug)}`;
    if (window.location.hash !== selectedHash) {
      window.location.hash = selectedHash;
    } else {
      applyAgentsProjectRoute();
    }

    agentHistoryScopeModal.classList.remove('open');
    agentHistoryScopeModal.setAttribute('aria-hidden', 'true');

    if (project) {
      payload.projectSlug = project.slug;
      payload.projectTitle = project.title;
      payload.projectId = String(project.id || '');
    }

    const agentMatchesProject = Boolean(originalAgentProjectId) && originalAgentProjectId === String(project?.id || '').trim();
    if (agentMatchesProject) {
      requestAnimationFrame(() => openAgentChatModalWithPayload(payload));
    }
  });
}

if (agentChatModal) {
  agentChatModal.addEventListener('click', (event) => {
    const closeTarget = event.target.closest('[data-modal-close]');
    if (closeTarget) {
      agentChatModal.classList.remove('open');
      agentChatModal.setAttribute('aria-hidden', 'true');
      const scopeLine = document.getElementById('agentChatScopeLine');
      if (scopeLine) scopeLine.hidden = true;
      if (chatAttachMenu) {
        chatAttachMenu.classList.remove('open');
      }
      if (chatSkillMenu) {
        chatSkillMenu.classList.remove('open');
      }
    }
  });
}

/** Painel de histórico: cliques em projeto (expandir/recolher) e em conversa (abrir chat) */
document.addEventListener('click', (event) => {
  const contextToggle = event.target.closest('.history-context-toggle');
  if (contextToggle) {
    const card = contextToggle.closest('.history-context-card');
    if (!card) return;
    const listId = contextToggle.getAttribute('aria-controls');
    const list = listId ? document.getElementById(listId) : card.querySelector('.history-thread-list');
    const isExpanded = contextToggle.getAttribute('aria-expanded') === 'true';
    card.classList.toggle('is-collapsed', isExpanded);
    contextToggle.setAttribute('aria-expanded', !isExpanded);
    const caret = contextToggle.querySelector('.history-context-caret');
    if (caret) caret.textContent = isExpanded ? 'expand_more' : 'expand_less';
    return;
  }

  const threadRow = event.target.closest('.history-thread-row');
  if (threadRow && agentChatModal && agentChatTitle && agentChatSubtitle) {
    const titleEl = threadRow.querySelector('.history-thread-title');
    const agentEl = threadRow.querySelector('.history-thread-agent');
    const dateEl = threadRow.querySelector('.history-thread-date');
    const contextCard = threadRow.closest('.history-context-card');
    const contextId = String(contextCard?.dataset.hubContext || '').trim();
    const agentName = agentEl ? agentEl.textContent.replace(/^Agente\s*•\s*/i, '').trim() : 'Agente';
    const threadTitle = titleEl?.textContent?.trim() || 'Conversa';
    const date = dateEl?.textContent?.trim() || '';

    agentChatTitle.textContent = `Chat com ${agentName}`;
    agentChatSubtitle.textContent = date ? `${threadTitle} • Última conversa ${date}` : threadTitle;
    agentChatModal.dataset.contextId = contextId;
    const scopeLine = document.getElementById('agentChatScopeLine');
    if (scopeLine) scopeLine.hidden = true;
    syncAgentChatHistoryScope();
    agentChatModal.classList.add('open');
    agentChatModal.setAttribute('aria-hidden', 'false');
    scheduleLucideRefresh();
    updateSkillStatus?.();
    updateChatSendState?.();
    updateChatEmptyState?.();
  }
});

const updateSubtitleFromItem = (item) => {
  if (!agentChatSubtitle || !item) return;
  const title = item.querySelector('.chat-history-title')?.value || 'Conversa';
  const date = item.querySelector('.chat-history-date')?.textContent?.trim() || 'Hoje';
  agentChatSubtitle.textContent = `${title} • Última conversa ${date}`;
};

const getVisibleChatHistoryItems = () => {
  if (!chatHistoryList) return [];
  return Array.from(chatHistoryList.querySelectorAll('.chat-history-item')).filter((item) => !item.hidden);
};

const syncAgentChatHistoryScope = () => {
  if (!chatHistoryList || !agentChatModal) return;
  const currentContextId = String(agentChatModal.dataset.contextId || '').trim();
  const currentProjectSlug = String(agentChatModal.dataset.projectSlug || '').trim();
  const items = Array.from(chatHistoryList.querySelectorAll('.chat-history-item'));
  let firstVisible = null;

  items.forEach((item) => {
    const itemContextId = String(item.dataset.hubContext || '').trim();
    const itemProjectSlug = String(item.dataset.projectSlug || '').trim();
    const projectOk = !currentProjectSlug || !itemProjectSlug || itemProjectSlug === currentProjectSlug;
    const contextOk = !currentContextId || !itemContextId || itemContextId === currentContextId;
    const visible = projectOk && contextOk;
    item.hidden = !visible;
    item.classList.toggle('is-hidden', !visible);
    if (visible && !firstVisible) firstVisible = item;
  });

  const activeItem = chatHistoryList.querySelector('.chat-history-item.active:not([hidden])');
  if (!activeItem) {
    chatHistoryList.querySelectorAll('.chat-history-item').forEach((item) => item.classList.remove('active'));
    if (firstVisible) firstVisible.classList.add('active');
  }

  if (agentChatHistoryEmpty) {
    agentChatHistoryEmpty.hidden = Boolean(firstVisible);
  }

  const currentActive = chatHistoryList.querySelector('.chat-history-item.active:not([hidden])');
  if (currentActive) {
    updateSubtitleFromItem(currentActive);
  } else if (agentChatSubtitle) {
    agentChatSubtitle.textContent = 'Nenhuma conversa neste projeto';
  }
};

const setActiveHistoryItem = (item) => {
  if (!item || item.hidden) return;
  stopChatSpeechPlayback();
  document.querySelectorAll('.chat-history-item').forEach((card) => card.classList.remove('active'));
  item.classList.add('active');
  updateSubtitleFromItem(item);
};

const closeHistoryMenus = () => {
  document.querySelectorAll('.chat-history-menu').forEach((menu) => {
    menu.classList.remove('open', 'is-floating');
    menu.style.top = '';
    menu.style.left = '';
    menu.style.right = '';
  });
};

const positionHistoryMenu = (menuEl, toggleEl) => {
  if (!menuEl || !toggleEl) return;
  menuEl.classList.add('is-floating');
  const toggleRect = toggleEl.getBoundingClientRect();
  const menuRect = menuEl.getBoundingClientRect();
  const spacing = 10;
  let left = toggleRect.right + spacing;
  const maxLeft = window.innerWidth - menuRect.width - 12;
  if (left > maxLeft) {
    left = toggleRect.left - menuRect.width - spacing;
  }
  const top = Math.min(toggleRect.top, window.innerHeight - menuRect.height - 12);
  menuEl.style.left = `${Math.max(12, left)}px`;
  menuEl.style.top = `${Math.max(12, top)}px`;
  menuEl.style.right = 'auto';
};

const startRenameHistory = (item) => {
  const input = item?.querySelector('.chat-history-title');
  if (!input) return;
  input.dataset.prevValue = input.value;
  input.removeAttribute('readonly');
  item.classList.add('editing');
  input.focus();
  input.select();
};

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const bindHistoryTitleInput = (input) => {
  if (!input) return;
  input.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  input.addEventListener('input', () => {
    const parent = input.closest('.chat-history-item');
    if (parent && parent.classList.contains('active')) {
      updateSubtitleFromItem(parent);
    }
  });

  input.addEventListener('blur', () => {
    input.setAttribute('readonly', 'true');
    const parent = input.closest('.chat-history-item');
    if (parent) {
      parent.classList.remove('editing');
    }
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      input.blur();
    }
    if (event.key === 'Escape') {
      const previous = input.dataset.prevValue;
      if (typeof previous === 'string') {
        input.value = previous;
      }
      input.blur();
    }
  });
};

const createHistoryItem = (title, date) => {
  const item = document.createElement('div');
  item.className = 'chat-history-item';
  item.setAttribute('role', 'button');
  item.setAttribute('tabindex', '0');
  item.dataset.hubContext = String(agentChatModal?.dataset.contextId || hubContextId || '');
  item.dataset.projectSlug = String(agentChatModal?.dataset.projectSlug || getCurrentAgentsProjectSlugFromRoute() || '');

  item.innerHTML = `
    <div class="chat-history-date">${date}</div>
    <div class="chat-history-title-row">
      <input class="chat-history-title" type="text" value="${title}" readonly />
      <button class="icon-btn chat-history-menu-toggle" type="button" aria-label="Opções">
        <i data-lucide="more-vertical"></i>
      </button>
      <div class="chat-menu chat-history-menu">
        <button type="button" class="ui-menu-item chat-history-rename">
          <i data-lucide="edit-3"></i>
          <span>Renomear</span>
        </button>
        <button type="button" class="ui-menu-item danger chat-history-delete">
          <i data-lucide="trash-2"></i>
          <span>Excluir</span>
        </button>
      </div>
    </div>
  `;

  const titleInput = item.querySelector('.chat-history-title');
  bindHistoryTitleInput(titleInput);

  return item;
};

if (chatHistoryList) {
  chatHistoryList.addEventListener('click', (event) => {
    const menuToggle = event.target.closest('.chat-history-menu-toggle');
    const renameAction = event.target.closest('.chat-history-rename');
    const deleteAction = event.target.closest('.chat-history-delete');
    const menu = event.target.closest('.chat-history-menu');
    const item = event.target.closest('.chat-history-item');

    if (menuToggle && item) {
      event.stopPropagation();
      const menuEl = item.querySelector('.chat-history-menu');
      if (!menuEl) return;
      const willOpen = !menuEl.classList.contains('open');
      closeHistoryMenus();
      if (willOpen) {
        menuEl.classList.add('open');
        requestAnimationFrame(() => positionHistoryMenu(menuEl, menuToggle));
      }
      return;
    }

    if (renameAction && item) {
      event.stopPropagation();
      closeHistoryMenus();
      startRenameHistory(item);
      return;
    }

    if (deleteAction && item) {
      event.stopPropagation();
      closeHistoryMenus();
      const wasActive = item.classList.contains('active');
      const nextItem = item.nextElementSibling?.classList.contains('chat-history-item')
        ? item.nextElementSibling
        : item.previousElementSibling?.classList.contains('chat-history-item')
        ? item.previousElementSibling
        : null;
      item.remove();
      if (wasActive) {
        setActiveHistoryItem(nextItem);
      }
      return;
    }

    if (menu) {
      event.stopPropagation();
      return;
    }

    if (item) {
      setActiveHistoryItem(item);
    }
  });

  chatHistoryList.addEventListener('keydown', (event) => {
    const item = event.target.closest('.chat-history-item');
    if (!item) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveHistoryItem(item);
    }
  });
}

if (chatHistoryTitles.length) {
  chatHistoryTitles.forEach((input) => {
    bindHistoryTitleInput(input);
  });
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('.chat-history-menu')) {
    closeHistoryMenus();
  }
});

window.addEventListener('resize', closeHistoryMenus);
window.addEventListener('scroll', closeHistoryMenus, true);

if (chatDictationButton) {
  setChatDictationState(false);
  chatDictationButton.addEventListener('click', () => {
    const isActive = chatDictationButton.dataset.dictating === 'true';
    setChatDictationState(!isActive);
    chatInput?.focus();
  });
}

if (chatSendButton) {
  chatSendButton.addEventListener('click', () => {
    if (chatSendButton.disabled) return;
    setChatDictationState(false);
    const activeHistory = document.querySelector('.chat-history-item.active');
    if (!activeHistory) return;
    const date = new Date();
    const formatted = formatDate(date);
    const dateEl = activeHistory.querySelector('.chat-history-date');
    if (dateEl) {
      dateEl.textContent = formatted;
    }
    updateSubtitleFromItem(activeHistory);
    updateChatEmptyState();
  });
}

const closeChatMenus = () => {
  if (chatAttachMenu) {
    chatAttachMenu.classList.remove('open');
  }
  if (chatSkillMenu) {
    chatSkillMenu.classList.remove('open');
  }
  if (chatAttachGroup) {
    chatAttachGroup.classList.remove('is-open');
    chatAttachGroup.classList.remove('is-skill-open');
  }
  if (chatAttachToggle) {
    chatAttachToggle.setAttribute('aria-expanded', 'false');
  }
};

document.addEventListener('click', (event) => {
  const attachToggleTarget = event.target.closest('.chat-attach-toggle');
  const skillToggleTarget = event.target.closest('.chat-skill-toggle');
  const insideAttachGroup = chatAttachGroup && chatAttachGroup.contains(event.target);

  if (attachToggleTarget && chatAttachMenu) {
    event.stopPropagation();
    const isOpen = chatAttachMenu.classList.toggle('open');
    if (chatAttachGroup) {
      chatAttachGroup.classList.toggle('is-open', isOpen);
      chatAttachGroup.classList.remove('is-skill-open');
    }
    if (chatAttachToggle) {
      chatAttachToggle.setAttribute('aria-expanded', String(isOpen));
    }
    if (!isOpen && chatSkillMenu) {
      chatSkillMenu.classList.remove('open');
    }
    return;
  }

  if (skillToggleTarget && chatSkillMenu) {
    event.stopPropagation();
    const isOpen = chatSkillMenu.classList.toggle('open');
    if (chatAttachGroup) {
      chatAttachGroup.classList.toggle('is-skill-open', isOpen);
      chatAttachGroup.classList.add('is-open');
    }
    return;
  }

  if (insideAttachGroup) {
    return;
  }

  closeChatMenus();
});

const updateSkillStatus = () => {
  if (!chatSkillStatusDot) return;
  const anyEnabled = Array.from(chatSkillSwitches).some((toggle) => toggle.checked);
  chatSkillStatusDot.classList.toggle('is-active', anyEnabled);
  chatSkillStatusDot.classList.toggle('is-inactive', !anyEnabled);
  const statusWrapper = chatSkillStatusDot.closest('.chat-skill-status');
  if (statusWrapper) {
    statusWrapper.dataset.tooltip = anyEnabled ? 'Habilidades ativas' : 'Habilidades inativas';
  }
};

const updateChatSendState = () => {
  if (!chatInput || !chatSendButton) return;
  const hasText = chatInput.value.trim().length > 0;
  chatSendButton.disabled = !hasText;
};

const resetChatThread = () => {
  const thread = document.querySelector('.chat-thread');
  if (!thread) return;
  stopChatSpeechPlayback();
  thread.innerHTML = '';
};

const getAgentName = () => {
  if (!agentChatTitle) return '';
  return agentChatTitle.textContent.replace(/^Chat com\s+/i, '').trim();
};

const getAgentPrompt = (agentName) => {
  const name = agentName.toLowerCase();
  if (name.includes('finance') || name.includes('financ')) {
    return 'Quer um resumo financeiro, conciliações ou indicadores do dia?';
  }
  if (name.includes('ops') || name.includes('opera') || name.includes('nimbus')) {
    return 'Quer status de filas, SLAs ou alertas críticos?';
  }
  if (name.includes('atlas') || name.includes('core')) {
    return 'Quer um resumo dos pipelines, integrações ou relatórios atuais?';
  }
  return 'Sobre o que você quer conversar hoje?';
};

const updateChatEmptyState = () => {
  if (!chatEmptyState || !chatEmptyPrompt) return;
  const thread = document.querySelector('.chat-thread');
  const hasMessages = thread && thread.children.length > 0;
  chatEmptyState.classList.toggle('is-hidden', hasMessages);
  if (!hasMessages) {
    const agentName = getAgentName();
    chatEmptyPrompt.textContent = getAgentPrompt(agentName);
  }
};

if (chatSkillSwitches.length) {
  chatSkillSwitches.forEach((toggle) => {
    toggle.addEventListener('change', updateSkillStatus);
  });
  updateSkillStatus();
}

if (chatThread) {
  chatThread.addEventListener('click', (event) => {
    const audioButton = event.target.closest('.chat-meta-audio');
    if (!audioButton) return;
    playChatMessageAudio(audioButton);
  });
}

if (chatInput && chatSendButton) {
  updateChatSendState();
  chatInput.addEventListener('input', updateChatSendState);
}

if (chatNewButton) {
  let floatingTooltip = null;

  const showTooltip = () => {
    const text = chatNewButton.dataset.tooltip || '';
    if (!text) return;
    if (!floatingTooltip) {
      floatingTooltip = document.createElement('div');
      floatingTooltip.className = 'floating-tooltip';
      document.body.appendChild(floatingTooltip);
    }
    floatingTooltip.textContent = text;
    floatingTooltip.classList.add('is-visible');

    const buttonRect = chatNewButton.getBoundingClientRect();
    const tooltipRect = floatingTooltip.getBoundingClientRect();
    const spacing = 8;
    let top = buttonRect.bottom + spacing;
    if (top + tooltipRect.height > window.innerHeight) {
      top = buttonRect.top - tooltipRect.height - spacing;
    }
    let left = buttonRect.left + buttonRect.width / 2 - tooltipRect.width / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - tooltipRect.width - 8));
    floatingTooltip.style.top = `${top}px`;
    floatingTooltip.style.left = `${left}px`;
  };

  const hideTooltip = () => {
    if (floatingTooltip) {
      floatingTooltip.classList.remove('is-visible');
    }
  };

  chatNewButton.addEventListener('mouseenter', showTooltip);
  chatNewButton.addEventListener('mouseleave', hideTooltip);
  chatNewButton.addEventListener('focus', showTooltip);
  chatNewButton.addEventListener('blur', hideTooltip);
  window.addEventListener('scroll', hideTooltip, true);
  window.addEventListener('resize', hideTooltip);

  chatNewButton.addEventListener('click', () => {
    if (!chatHistoryList) return;
    setChatDictationState(false);
    const today = formatDate(new Date());
    const newItem = createHistoryItem('Novo chat', today);
    chatHistoryList.prepend(newItem);
    syncAgentChatHistoryScope();
    if (window.lucide) {
      scheduleLucideRefresh();
    }
    setActiveHistoryItem(newItem);
    resetChatThread();
    updateChatEmptyState();
    if (chatInput) {
      chatInput.value = '';
      chatInput.focus();
    }
    updateChatSendState();
  });
}

if (openBillingModal && billingModal) {
  openBillingModal.addEventListener('click', () => {
    billingModal.classList.add('open');
    billingModal.setAttribute('aria-hidden', 'false');
  });

  billingModal.addEventListener('click', (event) => {
    const closeTarget = event.target.closest('[data-modal-close]');
    if (closeTarget) {
      billingModal.classList.remove('open');
      billingModal.setAttribute('aria-hidden', 'true');
    }
  });
}

if (openChannelModal && channelModal) {
  openChannelModal.addEventListener('click', () => {
    channelModal.classList.add('open');
    channelModal.setAttribute('aria-hidden', 'false');
    channelModal.querySelector('.channel-picker-card')?.focus();
  });

  channelModal.addEventListener('click', (event) => {
    const closeTarget = event.target.closest('[data-modal-close]');
    if (closeTarget) {
      channelModal.classList.remove('open');
      channelModal.setAttribute('aria-hidden', 'true');
    }
  });
}

if (openTelegramConfigModal && channelModal) {
  openTelegramConfigModal.addEventListener('click', () => {
    channelModal.classList.remove('open');
    channelModal.setAttribute('aria-hidden', 'true');
    window.location.hash = '#/dashboard/channels/telegram';
  });
}

if (telegramBotUsername && telegramBotPublicLink) {
  updateTelegramPublicLink();
  telegramBotUsername.addEventListener('input', updateTelegramPublicLink);
  telegramBotUsername.addEventListener('blur', updateTelegramPublicLink);
}

if (copyTelegramPublicLink) {
  copyTelegramPublicLink.addEventListener('click', () => {
    copyTelegramPublicLinkValue();
  });
}

if (telegramBotToken && toggleTelegramBotToken) {
  toggleTelegramBotToken.addEventListener('click', toggleTelegramBotTokenVisibility);
  syncTelegramBotTokenVisibility();
}

if (telegramBotToken) {
  telegramBotToken.addEventListener('input', resetTelegramConnectionValidation);
}

if (telegramValidateButton) {
  telegramValidateButton.addEventListener('click', validateTelegramConnection);
}

if (telegramTestChatId) {
  telegramTestChatId.addEventListener('input', () => {
    if (telegramTestSent) {
      resetTelegramTestState();
      return;
    }
    syncTelegramSendTestState();
  });
}

if (telegramSendTestButton) {
  telegramSendTestButton.addEventListener('click', sendTelegramTestMessage);
}

if (telegramSaveContinueButton) {
  telegramSaveContinueButton.addEventListener('click', openTelegramSummaryModal);
}

if (telegramSummaryModal) {
  telegramSummaryModal.addEventListener('click', (event) => {
    const closeTarget = event.target.closest('[data-telegram-summary-close]');
    if (closeTarget) {
      closeTelegramSummaryModal();
    }
  });
}

if (telegramSummaryBackButton) {
  telegramSummaryBackButton.addEventListener('click', closeTelegramSummaryModal);
}

if (telegramSummaryConfirmButton) {
  telegramSummaryConfirmButton.addEventListener('click', completeTelegramConfiguration);
}

syncTelegramFlowState();

if (telegramIntegrationStatus) {
  telegramIntegrationStatus.addEventListener('change', syncTelegramIntegrationStatus);
  syncTelegramIntegrationStatus();
}

if (automationStatusSwitches.length) {
  automationStatusSwitches.forEach((input) => {
    input.addEventListener('change', () => {
      syncAutomationStatusSwitch(input);
    });
    syncAutomationStatusSwitch(input);
  });
}

(function wireAutomationModal() {
  if (
    !openAutomationModal ||
    !automationModal ||
    !automationModalForm ||
    !automationModalTitle ||
    !automationModalName ||
    !automationModalPriority ||
    !automationModalDescription ||
    !automationModalPackageSearch ||
    !automationModalPackage ||
    !automationModalPackageHint ||
    !automationModalVersion ||
    !automationModalParams ||
    !automationModalSubmit ||
    !automationsTable
  ) {
    return;
  }

  let activeAutomationRow = null;

  function setAutomationModalError(message) {
    if (!automationModalError) return;
    if (message) {
      automationModalError.textContent = message;
      automationModalError.hidden = false;
      const modalBody = automationModal.querySelector('.modal-body');
      if (modalBody && typeof modalBody.scrollTo === 'function') {
        modalBody.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    automationModalError.textContent = '';
    automationModalError.hidden = true;
  }

  function renderAutomationVersionOptions(packageId, selectedVersion = '') {
    const pkg = getAutomationPackageById(packageId);
    automationModalVersion.innerHTML = '';

    if (!pkg) {
      const option = document.createElement('option');
      option.value = '';
      option.textContent = 'Selecione o pacote primeiro';
      automationModalVersion.appendChild(option);
      automationModalVersion.value = '';
      automationModalVersion.disabled = true;
      return;
    }

    pkg.versions.forEach((version) => {
      const option = document.createElement('option');
      option.value = version;
      option.textContent = version;
      automationModalVersion.appendChild(option);
    });

    automationModalVersion.disabled = false;
    if (selectedVersion && pkg.versions.includes(selectedVersion)) {
      automationModalVersion.value = selectedVersion;
    } else {
      automationModalVersion.value = pkg.versions[0] || '';
    }
  }

  function renderAutomationPackageOptions(searchText = '', selectedPackageId = '', selectedVersion = '') {
    const matches = filterAutomationPackages(searchText);
    const hasSelectedOutsideFilter =
      selectedPackageId &&
      !matches.some((item) => item.id === selectedPackageId) &&
      getAutomationPackageById(selectedPackageId);
    const packagesToRender = hasSelectedOutsideFilter
      ? [getAutomationPackageById(selectedPackageId), ...matches]
      : matches;

    automationModalPackage.innerHTML = '';

    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = packagesToRender.length ? 'Selecione o pacote' : 'Nenhum pacote encontrado';
    automationModalPackage.appendChild(placeholder);

    packagesToRender.forEach((pkg) => {
      if (!pkg) return;
      const option = document.createElement('option');
      option.value = pkg.id;
      option.textContent = `${pkg.label} • ${pkg.description}`;
      automationModalPackage.appendChild(option);
    });

    automationModalPackage.disabled = packagesToRender.length === 0;
    automationModalPackageHint.textContent = `${matches.length} pacote${matches.length === 1 ? '' : 's'} disponível${matches.length === 1 ? '' : 'is'}.`;

    if (selectedPackageId && packagesToRender.some((item) => item?.id === selectedPackageId)) {
      automationModalPackage.value = selectedPackageId;
    } else {
      automationModalPackage.value = '';
    }

    renderAutomationVersionOptions(automationModalPackage.value, selectedVersion);
  }

  function openAutomationModalPanel(mode, row = null) {
    activeAutomationRow = row;
    const isEdit = mode === 'edit' && row;
    const currentData = isEdit ? readAutomationRowData(row) : null;

    automationModal.dataset.mode = isEdit ? 'edit' : 'create';
    automationModalTitle.textContent = isEdit ? 'Editar automação' : 'Criar automação';
    automationModalSubmit.textContent = isEdit ? 'Atualizar automação' : 'Criar automação';

    automationModalForm.reset();
    setAutomationModalError('');

    automationModalPriority.value = currentData?.priority || 'medium';
    automationModalName.value = currentData?.name || '';
    automationModalDescription.value = currentData?.description || '';
    automationModalPackageSearch.value = '';
    automationModalParams.value = currentData?.params || '{}';

    renderAutomationPackageOptions('', currentData?.packageId || '', currentData?.version || '');

    automationModal.classList.add('open');
    automationModal.setAttribute('aria-hidden', 'false');
    automationModalName.focus();
  }

  function closeAutomationModalPanel() {
    activeAutomationRow = null;
    automationModal.classList.remove('open');
    automationModal.setAttribute('aria-hidden', 'true');
    setAutomationModalError('');
  }

  openAutomationModal.addEventListener('click', () => {
    openAutomationModalPanel('create');
  });

  automationModalPackageSearch.addEventListener('input', () => {
    renderAutomationPackageOptions(
      automationModalPackageSearch.value,
      automationModalPackage.value,
      automationModalVersion.value,
    );
  });

  automationModalPackage.addEventListener('change', () => {
    renderAutomationVersionOptions(automationModalPackage.value);
  });

  automationModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-modal-close]')) {
      closeAutomationModalPanel();
    }
  });

  automationsTable.addEventListener('click', (event) => {
    const editButton = event.target.closest('.automation-edit-trigger');
    if (editButton) {
      const row = editButton.closest('.automation-row');
      if (row) openAutomationModalPanel('edit', row);
      return;
    }

    const deleteButton = event.target.closest('.automation-delete-trigger');
    if (deleteButton) {
      const row = deleteButton.closest('.automation-row');
      if (!row) return;
      row.remove();
      showAppToast('Automação excluída');
    }
  });

  automationsTable.addEventListener('change', (event) => {
    const input = event.target.closest('.automation-status-switch input');
    if (!input) return;
    syncAutomationStatusSwitch(input);
    const row = input.closest('.automation-row');
    if (row) {
      row.dataset.automationStatus = input.checked ? 'active' : 'inactive';
    }
  });

  automationModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    setAutomationModalError('');

    const name = String(automationModalName.value || '').trim();
    const priority = String(automationModalPriority.value || '').trim() || 'medium';
    const description = String(automationModalDescription.value || '').trim();
    const packageId = String(automationModalPackage.value || '').trim();
    const version = String(automationModalVersion.value || '').trim();
    const paramsSource = String(automationModalParams.value || '').trim() || '{}';

    if (!name) {
      setAutomationModalError('Informe o nome da automação.');
      automationModalName.focus();
      return;
    }

    if (!packageId) {
      setAutomationModalError('Selecione um pacote para a automação.');
      automationModalPackage.focus();
      return;
    }

    if (!version) {
      setAutomationModalError('Selecione uma versão para o pacote.');
      automationModalVersion.focus();
      return;
    }

    let paramsObject;
    try {
      paramsObject = JSON.parse(paramsSource);
    } catch {
      setAutomationModalError('Os parâmetros precisam estar em JSON válido.');
      automationModalParams.focus();
      return;
    }

    const currentRowData = activeAutomationRow ? readAutomationRowData(activeAutomationRow) : null;
    const rowData = {
      id:
        currentRowData?.id ||
        `${slugifyAutomationName(name) || 'automacao'}-${Date.now().toString(36).slice(-4)}`,
      name,
      description,
      packageId,
      version,
      priority,
      paramsObject,
      lastExecution: currentRowData?.lastExecution || 'Ainda não executada',
      status: currentRowData?.status || 'active',
    };

    const nextRow = createAutomationRow(rowData);
    if (activeAutomationRow) {
      activeAutomationRow.replaceWith(nextRow);
      showAppToast('Automação atualizada com sucesso');
    } else {
      const headerRow = automationsTable.querySelector('.data-row.header');
      if (headerRow?.nextSibling) {
        automationsTable.insertBefore(nextRow, headerRow.nextSibling);
      } else {
        automationsTable.appendChild(nextRow);
      }
      showAppToast('Automação criada com sucesso');
    }

    closeAutomationModalPanel();
  });
})();

if (periodFilterBtn && periodFilterMenu) {
  periodFilterBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    periodFilterMenu.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    periodFilterMenu.classList.remove('open');
  });
}

if (periodOptions.length) {
  periodOptions.forEach((option) => {
    option.addEventListener('click', () => {
      periodOptions.forEach((item) => item.classList.remove('active'));
      option.classList.add('active');

      const isRange = option.dataset.mode === 'range';
      rangeFields.forEach((field) => field.classList.toggle('is-hidden', !isRange));
      if (singleField) {
        singleField.classList.toggle('is-hidden', isRange);
      }
    });
  });
}

if (notificationsToggle && notificationsDropdown) {
  notificationsToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    notificationsDropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    notificationsDropdown.classList.remove('open');
  });
}

if (detailsToggles.length) {
  detailsToggles.forEach((toggle) => {
    toggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const card = toggle.closest('.row-actions')?.querySelector('.details-card');
      if (!card) return;

      document.querySelectorAll('.details-card').forEach((item) => {
        if (item !== card) item.classList.remove('open');
      });

      card.classList.toggle('open');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.details-card').forEach((item) => item.classList.remove('open'));
  });
}

if (addToggles.length) {
  addToggles.forEach((toggle) => {
    toggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const menu = toggle.nextElementSibling;
      if (!menu || !menu.classList.contains('add-menu')) return;

      document.querySelectorAll('.add-menu').forEach((item) => {
        if (item !== menu) {
          item.classList.remove('open');
          const itemToggle = item.previousElementSibling;
          if (itemToggle?.classList.contains('add-toggle')) {
            itemToggle.setAttribute('aria-expanded', 'false');
          }
        }
      });

      menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.add-menu').forEach((item) => {
      item.classList.remove('open');
      const itemToggle = item.previousElementSibling;
      if (itemToggle?.classList.contains('add-toggle')) {
        itemToggle.setAttribute('aria-expanded', 'false');
      }
    });
    closeAgentsCreateMenu();
  });
}

if (agentsCreateMenuWrap) {
  agentsCreateMenuWrap.addEventListener('click', (event) => {
    event.stopPropagation();
  });
}

if (agentsCreateMenu) {
  agentsCreateMenu.addEventListener('click', (event) => {
    event.stopPropagation();
  });
}

if (agentsPagePagination) {
  const navButtons = agentsPagePagination.querySelectorAll('.icon-btn');
  const prevBtn = navButtons[0];
  const nextBtn = navButtons[1];
  prevBtn?.addEventListener('click', () => {
    if (agentsCurrentPage <= 1) return;
    agentsCurrentPage -= 1;
    renderAgentsPagination();
  });
  nextBtn?.addEventListener('click', () => {
    const totalPages = Math.max(1, Math.ceil(getVisibleAgentsRows().length / AGENTS_PAGE_SIZE));
    if (agentsCurrentPage >= totalPages) return;
    agentsCurrentPage += 1;
    renderAgentsPagination();
  });
}

if (licenseToggles.length) {
  licenseToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const card = toggle.closest('.license-card');
      if (card) {
        card.classList.toggle('is-collapsed');
      }
    });
  });
}

if (firstTimeBanner) {
  const closeButton = firstTimeBanner.querySelector('.banner-close');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      firstTimeBanner.remove();
    });
  }
}

if (telegramHelpCard) {
  try {
    telegramHelpCard.hidden = window.localStorage?.getItem(TELEGRAM_HELP_CARD_DISMISSED_STORAGE_KEY) === '1';
  } catch (error) {
    console.warn('Não foi possível ler preferência do card de ajuda do Telegram.', error);
  }

  const closeButton = telegramHelpCard.querySelector('.telegram-help-card-close');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      telegramHelpCard.hidden = true;
      try {
        window.localStorage?.setItem(TELEGRAM_HELP_CARD_DISMISSED_STORAGE_KEY, '1');
      } catch (error) {
        console.warn('Não foi possível salvar preferência do card de ajuda do Telegram.', error);
      }
    });
  }
}

if (automationTabs.length && automationPanels.length) {
  automationTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      automationTabs.forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
      automationPanels.forEach((panel) => {
        panel.classList.toggle('active', panel.dataset.panel === target);
      });
    });
  });
}

if (executorTabs.length && executorPanels.length) {
  executorTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      executorTabs.forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
      executorPanels.forEach((panel) => {
        panel.classList.toggle('active', panel.dataset.panel === target);
      });
    });
  });
}

if (usersTabs.length && usersPanels.length) {
  usersTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      usersTabs.forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
      usersPanels.forEach((panel) => {
        panel.classList.toggle('active', panel.dataset.panel === target);
      });
    });
  });
}

if (orgTabs.length && orgPanels.length) {
  const updateOrgActions = (activeTab) => {
    const isKeys = activeTab === 'org-keys';
    orgActionButtons.forEach((button) => {
      const isKeysAction = button.dataset.orgAction === 'keys';
      button.classList.toggle('is-hidden', isKeysAction !== isKeys);
    });
  };

  orgTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      orgTabs.forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
      orgPanels.forEach((panel) => {
        panel.classList.toggle('active', panel.dataset.panel === target);
      });
      updateOrgActions(target);
    });
  });

  const initialTab = document.querySelector('#page-organization .tab.active');
  updateOrgActions(initialTab ? initialTab.dataset.tab : 'org-overview');
}

/** Escopo global: preenchido por GET /me/scope ap?s login (environment_members no banco). */
let HUB_SCOPE = {};

let hubOrgId = '';
/** string vazia = todos os projetos do ambiente; senão, id do projeto em HUB_SCOPE */
let hubContextId = '';

const hubOrgNameEl = document.getElementById('hubOrgName');
const hubContextNameEl = document.getElementById('hubContextName');
const hubOrgMenu = document.getElementById('hubOrgMenu');
const hubContextMenu = document.getElementById('hubContextMenu');
const hubOrgTrigger = document.getElementById('hubOrgTrigger');
const hubContextTrigger = document.getElementById('hubContextTrigger');
const hubOrgDropdown = document.getElementById('hubOrgDropdown');
const hubContextDropdown = document.getElementById('hubContextDropdown');
const agentsByOrg = document.getElementById('agentsByOrg');
const historyOrgOnlyNotice = document.getElementById('historyOrgOnlyNotice');
const agentModalProject = document.getElementById('agentModalProject');
const agentModalContext = document.getElementById('agentModalContext');
const agentModalOrgName = document.getElementById('agentModalOrgName');
const agentChatScopeLine = document.getElementById('agentChatScopeLine');
const userTenantEl = document.querySelector('.user-tenant');
const userNameEl = document.querySelector('.user-name');

function formatHubOrgNameFromSlug(slug) {
  const normalized = String(slug || '').trim();
  if (!normalized) return '';
  if (normalized.length <= 4) return normalized.toUpperCase();
  return normalized
    .split(/[-_]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function ensureHubScopeFromStaticMarkup() {
  if (Object.keys(HUB_SCOPE).length) return;
  const panels = document.querySelectorAll('#page-agents .agents-org-panel[data-hub-org]');
  if (!panels.length) return;

  const fallbackScope = {};
  panels.forEach((panel) => {
    const orgSlug = String(panel.dataset.hubOrg || '').trim();
    if (!orgSlug || fallbackScope[orgSlug]) return;

    const seenProjects = new Set();
    const projects = [];

    panel.querySelectorAll('[data-agents-project]').forEach((item) => {
      const projectSlug = String(item.dataset.agentsProject || '').trim();
      if (!projectSlug || seenProjects.has(projectSlug)) return;
      seenProjects.add(projectSlug);

      const projectTitle = String(
        item.dataset.projectTitle ||
          item.querySelector('.agents-project-card-name')?.textContent ||
          item.querySelector('.agents-project-folder-name')?.textContent ||
          projectSlug
      ).trim();

      projects.push({
        id: projectSlug,
        slug: projectSlug,
        title: projectTitle || projectSlug,
        description: String(item.dataset.projectDescription || '').trim(),
        contexts: [],
      });
    });

    fallbackScope[orgSlug] = {
      id: orgSlug,
      name: formatHubOrgNameFromSlug(orgSlug),
      contexts: [],
      projects,
    };
  });

  if (!Object.keys(fallbackScope).length) return;
  HUB_SCOPE = fallbackScope;
  const keys = Object.keys(HUB_SCOPE);
  if (!hubOrgId && keys.length) {
    hubOrgId = keys[0];
  }
  rebuildHubOrgMenu();
}

function hubCustomSelectCloseAll() {
  document.querySelectorAll('.hub-custom-select.is-open').forEach((wrap) => {
    wrap.classList.remove('is-open');
    wrap.classList.remove('open-up');
    const menu = wrap.querySelector('.hub-custom-menu');
    const tr = wrap.querySelector('.hub-custom-trigger');
    const chev = wrap.querySelector('.hub-select-chevron');
    if (menu) menu.hidden = true;
    if (tr) tr.setAttribute('aria-expanded', 'false');
    chev?.classList.remove('is-open');
  });
  document.querySelectorAll('.modal-dialog.has-open-select').forEach((dialog) => {
    dialog.classList.remove('has-open-select');
  });
}

function hubSyncModalSelectOverflow(wrap) {
  const dialog = wrap?.closest('.modal-dialog');
  if (!dialog) return;
  const hasOpenSelect = Boolean(dialog.querySelector('.hub-custom-select.is-open'));
  dialog.classList.toggle('has-open-select', hasOpenSelect);
}

function hubPositionCustomMenu(wrap, menu) {
  if (!wrap || !menu) return;
  wrap.classList.remove('open-up');
  const wrapRect = wrap.getBoundingClientRect();
  const boundsRect = wrap.closest('.modal-dialog')?.getBoundingClientRect() || {
    top: 0,
    bottom: window.innerHeight,
  };
  const estimatedMenuHeight = Math.min(menu.scrollHeight || 0, 260);
  const requiredSpace = Math.max(estimatedMenuHeight, 180);
  const spaceBelow = boundsRect.bottom - wrapRect.bottom - 20;
  const spaceAbove = wrapRect.top - boundsRect.top - 20;
  if (spaceBelow < requiredSpace && spaceAbove > spaceBelow) {
    wrap.classList.add('open-up');
  }
}

function hubCustomSelectRefresh(wrap) {
  const sel = wrap.querySelector('select.hub-select');
  const menu = wrap.querySelector('.hub-custom-menu');
  const label = wrap.querySelector('.hub-custom-label');
  if (!sel || !menu || !label) return;
  const v = sel.value;
  const optSel = sel.options[sel.selectedIndex];
  label.textContent = optSel ? optSel.textContent : '';
  menu.innerHTML = '';
  Array.from(sel.options).forEach((opt) => {
    const li = document.createElement('li');
    li.setAttribute('role', 'none');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('role', 'option');
    const selected = opt.value === v;
    btn.setAttribute('aria-selected', String(selected));
    btn.dataset.value = opt.value;
    btn.textContent = opt.textContent;
    if (selected) btn.classList.add('is-selected');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      hubCustomSelectCloseAll();
      if (sel.value === opt.value) return;
      sel.value = opt.value;
      sel.dispatchEvent(new Event('change', { bubbles: true }));
      hubCustomSelectRefresh(wrap);
    });
    li.appendChild(btn);
    menu.appendChild(li);
  });
}

function hubEnhanceSelectWrap(wrap) {
  const sel = wrap.querySelector('select.hub-select');
  if (!sel) return;
  if (!wrap.dataset.hubCustomReady) {
    wrap.dataset.hubCustomReady = 'true';
    wrap.classList.add('hub-custom-select');
    const icon = wrap.querySelector('.hub-select-icon');
    const chev = wrap.querySelector('.hub-select-chevron');
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'hub-custom-trigger';
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');
    const label = document.createElement('span');
    label.className = 'hub-custom-label';
    const menu = document.createElement('ul');
    menu.className = 'hub-custom-menu';
    menu.setAttribute('role', 'listbox');
    menu.hidden = true;
    menu.addEventListener('click', (e) => e.stopPropagation());
    wrap.insertBefore(trigger, sel);
    if (icon) trigger.appendChild(icon);
    trigger.appendChild(label);
    if (chev) trigger.appendChild(chev);
    wrap.appendChild(menu);
    sel.classList.add('hub-select-native');
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const wasOpen = wrap.classList.contains('is-open');
      hubCustomSelectCloseAll();
      if (!wasOpen) {
        hubCustomSelectRefresh(wrap);
        wrap.classList.add('is-open');
        menu.hidden = false;
        hubPositionCustomMenu(wrap, menu);
        hubSyncModalSelectOverflow(wrap);
        trigger.setAttribute('aria-expanded', 'true');
        chev?.classList.add('is-open');
      }
    });
    sel.addEventListener('change', () => hubCustomSelectRefresh(wrap));
  }
  hubCustomSelectRefresh(wrap);
}

function hubRefreshCustomSelects() {
  document.querySelectorAll('.hub-select-wrap').forEach(hubEnhanceSelectWrap);
  scheduleLucideRefresh();
}

/** Markup do ÃÂ­cone de pasta (Lucide `folder`) para projetos Ã¢â¬â usar ao criar cards/detalhes via JS; depois chame `lucide.createIcons()`. */
window.wesLucideProjectFolderIconHtml = function wesLucideProjectFolderIconHtml(role) {
  const inner = '<i data-lucide="folder"></i>';
  if (role === 'detail') {
    return `<span class="agents-project-folder-icon agents-project-folder-icon--lucide" aria-hidden="true">${inner}</span>`;
  }
  return `<span class="agents-project-card-icon agents-project-card-icon--lucide" aria-hidden="true">${inner}</span>`;
};

window.wesProjectCardEditButtonHtml = function wesProjectCardEditButtonHtml() {
  return '<button type="button" class="icon-btn agents-project-card-edit" aria-label="Editar projeto"><span class="material-symbols-rounded" aria-hidden="true">edit</span></button>';
};

function ensureProjectCardEditButtons(root = document) {
  if (!root || !root.closest?.('#page-agents')) return;
  root.querySelectorAll?.('.agents-project-card').forEach((card) => {
    if (card.querySelector('.agents-project-card-edit')) return;
    const actionHtml = typeof window.wesProjectCardEditButtonHtml === 'function'
      ? window.wesProjectCardEditButtonHtml()
      : '';
    if (!actionHtml) return;
    card.insertAdjacentHTML('beforeend', actionHtml);
  });
}

function hubCloseDropdowns() {
  if (hubOrgMenu) hubOrgMenu.hidden = true;
  if (hubContextMenu) hubContextMenu.hidden = true;
  hubOrgTrigger?.setAttribute('aria-expanded', 'false');
  hubContextTrigger?.setAttribute('aria-expanded', 'false');
}

function hubRebuildContextMenu() {
  if (!hubContextMenu) return;
  const org = getHubScopeCurrentOrg();
  if (!org) return;
  const contexts = getScopedContextsForCurrentRoute(org);
  hubContextMenu.innerHTML = '';
  const allLi = document.createElement('li');
  const allBtn = document.createElement('button');
  allBtn.type = 'button';
  allBtn.className = 'hub-scope-dd-item';
  allBtn.dataset.context = '';
  allBtn.setAttribute('role', 'option');
  allBtn.textContent = 'Selecione o projeto';
  if (!hubContextId) allBtn.classList.add('is-active');
  allBtn.addEventListener('click', () => {
    hubContextId = '';
    hubSyncFromState();
    void refreshAgentsTableFromApi();
    hubCloseDropdowns();
  });
  allLi.appendChild(allBtn);
  hubContextMenu.appendChild(allLi);
  if (hubContextId && !contexts.some((ctx) => ctx.id === hubContextId)) {
    hubContextId = '';
  }
  contexts.forEach((ctx) => {
    if (hubContextId && ctx.id === hubContextId) return;
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'hub-scope-dd-item';
    btn.dataset.context = ctx.id;
    btn.setAttribute('role', 'option');
    btn.textContent = ctx.label;
    if (ctx.id === hubContextId) btn.classList.add('is-active');
    btn.addEventListener('click', () => {
      hubContextId = ctx.id;
      hubSyncFromState();
      void refreshAgentsTableFromApi();
      hubCloseDropdowns();
    });
    li.appendChild(btn);
    hubContextMenu.appendChild(li);
  });
}

function hubCloseAgentChatIfOpen() {
  if (!agentChatModal || !agentChatModal.classList.contains('open')) return;
  agentChatModal.classList.remove('open');
  agentChatModal.setAttribute('aria-hidden', 'true');
  stopChatSpeechPlayback();
  setChatDictationState(false);
  const scopeLine = document.getElementById('agentChatScopeLine');
  if (scopeLine) scopeLine.hidden = true;
  if (chatAttachMenu) chatAttachMenu.classList.remove('open');
  if (chatSkillMenu) chatSkillMenu.classList.remove('open');
}

function syncAgentsPageScopeSelects() {
  ensureHubScopeFromStaticMarkup();
  const orgSel = document.getElementById('agentsPageOrgSelect');
  const ctxSel = document.getElementById('agentsPageContextSelect');
  syncAgentsPageEnvironmentSelect();
  if (orgSel) {
    orgSel.innerHTML = '';
    const orgIds = Object.keys(HUB_SCOPE);
    if (!orgIds.length) {
      const emptyOpt = document.createElement('option');
      emptyOpt.value = '';
      emptyOpt.textContent = 'Nenhuma organização disponível';
      orgSel.appendChild(emptyOpt);
      orgSel.disabled = true;
    } else {
      orgIds.forEach((id) => {
        const opt = document.createElement('option');
        opt.value = id;
        opt.textContent = HUB_SCOPE[id].name;
        orgSel.appendChild(opt);
      });
      const nextOrgId = HUB_SCOPE[hubOrgId] ? hubOrgId : orgIds[0];
      if (nextOrgId && hubOrgId !== nextOrgId) hubOrgId = nextOrgId;
      orgSel.value = nextOrgId || '';
      orgSel.disabled = false;
    }
  }
  if (ctxSel) {
    const org = getHubScopeCurrentOrg();
    const contexts = getScopedContextsForCurrentRoute(org);
    ctxSel.innerHTML = '';
    const allOpt = document.createElement('option');
    allOpt.value = '';
    allOpt.textContent = 'Selecione o projeto';
    ctxSel.appendChild(allOpt);
    contexts.forEach((c) => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = c.label;
      ctxSel.appendChild(opt);
    });
    if (hubContextId && !contexts.some((c) => c.id === hubContextId)) {
      hubContextId = '';
    }
    ctxSel.value = hubContextId || '';
  }
}

function getCurrentAgentsProjectSlugFromRoute() {
  const raw = (window.location.hash || '').replace(/^#\/?/, '');
  const match = raw.match(/^dashboard\/agents\/project\/([^/?#]+)$/);
  return match ? decodeURIComponent(match[1]) : '';
}

function getHubScopeCurrentOrg() {
  return HUB_SCOPE[hubOrgId] || null;
}

function getScopedProjectForCurrentRoute(org = getHubScopeCurrentOrg()) {
  if (!org || !Array.isArray(org.projects)) return null;
  const projectSlug = getCurrentAgentsProjectSlugFromRoute();
  if (!projectSlug) return null;
  return org.projects.find((project) => project.slug === projectSlug) || null;
}

function getScopedContextsForCurrentRoute(org = getHubScopeCurrentOrg()) {
  const project = getScopedProjectForCurrentRoute(org);
  if (project && Array.isArray(project.contexts)) return project.contexts;
  return Array.isArray(org?.contexts) ? org.contexts : [];
}

function syncUserHeaderName() {
  if (!userNameEl || !window.WesDashboardAuth?.read) return;
  const auth = window.WesDashboardAuth.read();
  if (!auth) return;
  const displayName = String(auth.displayName || '').trim();
  userNameEl.textContent = displayName || 'Usuário';
}

function syncAgentsScopeStatus() {
  const el = document.getElementById('agentsScopeStatus');
  if (!el) return;
  const org = getHubScopeCurrentOrg();
  const project = getScopedProjectForCurrentRoute(org);
  const orgName = org?.name || 'Todas as organizações';
  const projectName = project?.title || 'Todos os projetos';
  el.innerHTML = `<span>Organização:</span> <strong>${escapeHtmlWes(orgName)}</strong><span>/</span><span>Projeto:</span> <strong>${escapeHtmlWes(projectName)}</strong>`;
}

function fillAgentModalProjectOptions(preferredProjectSlug = '') {
  if (!agentModalProject) return '';
  const selectedOrgId = hubOrgId || Object.keys(HUB_SCOPE || {})[0] || '';
  const org = HUB_SCOPE[selectedOrgId];
  agentModalProject.innerHTML = '';
  const noneOpt = document.createElement('option');
  noneOpt.value = '';
  noneOpt.textContent = 'Sem projeto';
  agentModalProject.appendChild(noneOpt);
  if (!org || !Array.isArray(org.projects) || org.projects.length === 0) {
    agentModalProject.value = '';
    return '';
  }

  org.projects.forEach((project) => {
    const opt = document.createElement('option');
    opt.value = project.slug;
    opt.textContent = project.title;
    agentModalProject.appendChild(opt);
  });

  const routeProjectSlug = getCurrentAgentsProjectSlugFromRoute();
  const selected =
    preferredProjectSlug && org.projects.some((project) => project.slug === preferredProjectSlug)
      ? preferredProjectSlug
      : routeProjectSlug && org.projects.some((project) => project.slug === routeProjectSlug)
        ? routeProjectSlug
        : '';
  agentModalProject.value = selected;
  return selected;
}

function fillAgentModalContextOptions(projectSlug = '', preferredContextId = '') {
  if (!agentModalContext) return '';
  agentModalContext.innerHTML = '';
  const opt = document.createElement('option');
  opt.value = '';
  opt.textContent = 'Sem projeto';
  agentModalContext.appendChild(opt);
  agentModalContext.value = '';
  return '';
}

function syncAgentModalScope(preferredEnvironmentId = '') {
  syncAgentModalEnvironmentSelect(preferredEnvironmentId);
  const selectedOrgId = hubOrgId || Object.keys(HUB_SCOPE || {})[0] || '';
  const org = HUB_SCOPE[selectedOrgId];
  if (!org) {
    fillAgentModalProjectOptions();
    fillAgentModalContextOptions('');
    return;
  }
  if (selectedOrgId && hubOrgId !== selectedOrgId) {
    hubOrgId = selectedOrgId;
  }
  if (agentModalOrgName) agentModalOrgName.textContent = org.name;
  const projectSlug = fillAgentModalProjectOptions();
  fillAgentModalContextOptions(projectSlug);
}

function getProjectModalSelectedAgents() {
  const agentList = document.getElementById('projectModalAgentsList');
  if (!agentList) return [];
  return Array.from(agentList.querySelectorAll('.project-modal-agent-chip')).map((item) => ({
    id: String(item.dataset.agentId || '').trim(),
    name: String(item.dataset.agentName || '').trim(),
  })).filter((agent) => agent.id);
}

function getProjectModalSelectedAgentIds() {
  return getProjectModalSelectedAgents().map((agent) => agent.id);
}

function renderProjectModalSelectedAgents(selectedAgents = []) {
  const agentList = document.getElementById('projectModalAgentsList');
  if (!agentList) return [];

  agentList.innerHTML = '';
  if (!selectedAgents.length) {
    agentList.innerHTML = '<p class="project-modal-agents-empty">Nenhum agente vinculado.</p>';
    return [];
  }

  const frag = document.createDocumentFragment();
  selectedAgents.forEach((agent) => {
    const agentId = String(agent?.id || '').trim();
    if (!agentId) return;
    const item = document.createElement('span');
    item.className = 'project-modal-agent-chip';
    item.dataset.agentId = agentId;
    item.dataset.agentName = String(agent?.name || agentId).trim() || agentId;
    item.innerHTML = `<span class="project-modal-agent-chip-label">${escapeHtmlWes(item.dataset.agentName)}</span><button type="button" class="project-modal-agent-chip-remove" data-agent-id="${escapeHtmlWes(agentId)}" aria-label="Remover agente"><span class="material-symbols-rounded" aria-hidden="true">close</span></button>`;
    frag.appendChild(item);
  });

  agentList.appendChild(frag);
  return getProjectModalSelectedAgentIds();
}

function getProjectModalAutoSelectedAgentIds(agents = []) {
  const modal = document.getElementById('projectModal');
  const currentProjectId = String(modal?.dataset.projectId || '').trim();
  const currentProjectSlug = String(modal?.dataset.projectSlug || '').trim();
  return agents
    .filter((agent) => {
      const agentProjectId = String(agent?.project_id || '').trim();
      const agentProjectSlug = String(agent?.project_slug || '').trim();
      return (currentProjectId && agentProjectId === currentProjectId) || (currentProjectSlug && agentProjectSlug === currentProjectSlug);
    })
    .map((agent) => String(agent?.id || '').trim())
    .filter(Boolean);
}

function renderProjectModalAvailableAgentSelect(agents = [], selectedAgentIds = []) {
  const select = document.getElementById('projectModalAvailableAgent');
  if (!select) return [];

  const normalizedSelectedIds = new Set(
    (Array.isArray(selectedAgentIds) ? selectedAgentIds : [selectedAgentIds])
      .map((agentId) => String(agentId || '').trim())
      .filter(Boolean)
  );

  select.innerHTML = '';
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = agents.length ? 'Selecione o agente' : 'Nenhum agente disponível';
  select.appendChild(placeholder);

  agents.forEach((agent) => {
    const agentId = String(agent?.id || '').trim();
    if (!agentId || normalizedSelectedIds.has(agentId)) return;
    const opt = document.createElement('option');
    opt.value = agentId;
    opt.textContent = String(agent?.name || agentId).trim() || agentId;
    select.appendChild(opt);
  });

  select.value = '';
  select.disabled = !agents.length || select.options.length <= 1;
  return Array.from(normalizedSelectedIds);
}

function syncProjectModalAgentPicker(agents = [], preferredAgentIds = []) {
  const normalizedAgents = Array.isArray(agents) ? agents : [];
  projectModalAvailableAgents = normalizedAgents;
  const nextSelectedIds = (
    Array.isArray(preferredAgentIds) && preferredAgentIds.length
      ? preferredAgentIds
      : getProjectModalAutoSelectedAgentIds(normalizedAgents)
  )
    .map((agentId) => String(agentId || '').trim())
    .filter(Boolean);

  const selectedSet = new Set(nextSelectedIds);
  const selectedAgents = normalizedAgents.filter((agent) => selectedSet.has(String(agent?.id || '').trim()));
  renderProjectModalSelectedAgents(selectedAgents);
  renderProjectModalAvailableAgentSelect(normalizedAgents, nextSelectedIds);
  return nextSelectedIds;
}

function collectProjectModalFallbackAgents(selectedOrgId = '', selectedEnvironmentId = '') {
  const rows = Array.from(document.querySelectorAll('#page-agents .agents-row:not(.header)'));
  const seen = new Set();
  return rows
    .map((row, index) => {
      const orgSlug = String(row.dataset.hubOrg || row.closest('.agents-org-panel')?.dataset.hubOrg || '').trim();
      if (!orgSlug || (selectedOrgId && orgSlug !== selectedOrgId)) return null;
      const environmentId = resolveAgentsPageEnvironmentIdForRow(row, index);
      if (selectedEnvironmentId && environmentId !== selectedEnvironmentId) return null;
      const agentId = String(
        row.dataset.agentUuid ||
        row.querySelector('span[title]')?.getAttribute('title') ||
        row.children[1]?.textContent ||
        ''
      ).trim();
      if (!agentId || seen.has(agentId)) return null;
      seen.add(agentId);
      const projectDetail = row.closest('.agents-project-detail');
      return {
        id: agentId,
        name: String(row.querySelector('strong')?.textContent || agentId).trim() || agentId,
        project_id: String(row.dataset.projectId || projectDetail?.dataset.projectId || '').trim(),
        project_slug: String(projectDetail?.dataset.agentsProject || '').trim(),
        project_title: String(projectDetail?.dataset.projectTitle || '').trim(),
        environment_slug: orgSlug,
        description: String(row.querySelector('.agents-row-description')?.textContent || '').trim(),
      };
    })
    .filter(Boolean)
    .sort((a, b) => String(a.name || '').localeCompare(String(b.name || ''), 'pt-BR', { sensitivity: 'base' }));
}

async function fillProjectModalAgentOptions(preferredAgentIds = []) {
  const orgSel = document.getElementById('projectModalOrg');
  const environmentSel = document.getElementById('projectModalEnvironment');
  if (!orgSel || !environmentSel) return [];

  const selectedOrgId = String(orgSel.value || '').trim();
  const selectedEnvironmentId = String(environmentSel.value || '').trim();
  if (!selectedOrgId) {
    projectModalAvailableAgents = [];
    renderProjectModalSelectedAgents([]);
    renderProjectModalAvailableAgentSelect([], []);
    return [];
  }
  if (typeof window.wesApiFetch !== 'function' || !window.WesDashboardAuth?.isAuthenticated()) {
    return syncProjectModalAgentPicker(
      collectProjectModalFallbackAgents(selectedOrgId, selectedEnvironmentId),
      preferredAgentIds
    );
  }

  try {
    const res = await window.wesApiFetch('/agents');
    const rawText = await res.text();
    let agents = null;
    try {
      agents = rawText ? JSON.parse(rawText) : [];
    } catch {
      agents = null;
    }
    if (!res.ok || !Array.isArray(agents)) {
      return syncProjectModalAgentPicker(
        collectProjectModalFallbackAgents(selectedOrgId, selectedEnvironmentId),
        preferredAgentIds
      );
    }

    const seen = new Set();
    const availableAgents = agents
      .filter((agent) => String(agent?.environment_slug || '').trim() === selectedOrgId)
      .filter((agent) => !selectedEnvironmentId || resolveAgentsPageEnvironmentIdForAgent(agent) === selectedEnvironmentId)
      .sort((a, b) =>
        String(a?.name || '').localeCompare(String(b?.name || ''), 'pt-BR', { sensitivity: 'base' })
      );

    const dedupedAgents = availableAgents.filter((agent) => {
      const agentId = String(agent?.id || '').trim();
      if (!agentId || seen.has(agentId)) return false;
      seen.add(agentId);
      return true;
    });

    const normalizedPreferredIds = (Array.isArray(preferredAgentIds) ? preferredAgentIds : [preferredAgentIds])
      .map((agentId) => String(agentId || '').trim())
      .filter((agentId) => seen.has(agentId));

    return syncProjectModalAgentPicker(dedupedAgents, normalizedPreferredIds);
  } catch {
    return syncProjectModalAgentPicker(
      collectProjectModalFallbackAgents(selectedOrgId, selectedEnvironmentId),
      preferredAgentIds
    );
  }
}

async function syncProjectModalSelects(preferredEnvironmentId = '', preferredAgentIds = []) {
  const orgSel = document.getElementById('projectModalOrg');
  if (!orgSel || typeof HUB_SCOPE === 'undefined') return;
  orgSel.innerHTML = '';
  const currentOrgId = hubOrgId || Object.keys(HUB_SCOPE)[0] || '';
  const currentOrg = currentOrgId ? HUB_SCOPE[currentOrgId] : null;
  if (currentOrgId && currentOrg) {
    const opt = document.createElement('option');
    opt.value = currentOrgId;
    opt.textContent = currentOrg.name;
    orgSel.appendChild(opt);
  }
  orgSel.value = currentOrgId;
  syncProjectModalEnvironmentSelect(preferredEnvironmentId);
  await fillProjectModalAgentOptions(preferredAgentIds);
}


/** Pastas de projeto: todos os blocos de agentes ficam visíveis (sem filtro adicional por projeto). */
function syncAgentsFolderBlocksVisibility() {
  if (!agentsByOrg) return;
  agentsByOrg.querySelectorAll('.agents-org-panel').forEach((panel) => {
    if (panel.dataset.hubOrg !== hubOrgId) return;
    panel.querySelectorAll('.agents-project-detail').forEach((folder) => {
      folder.querySelectorAll('.agents-context-block').forEach((block) => {
        const blockContextId = String(block.dataset.hubContext || '').trim();
        const isProjectAggregateBlock = !blockContextId;
        const matchesCurrentContext =
          isProjectAggregateBlock || !hubContextId || blockContextId === String(hubContextId).trim();
        block.classList.toggle('is-hidden', !matchesCurrentContext);
        block.hidden = !matchesCurrentContext;
        block.classList.toggle('is-active-context', matchesCurrentContext && !!hubContextId);
      });
    });
  });
}

function setAgentsFolderAccordionExpanded(expanded) {
  if (!agentsFolderAccordion || !agentsFolderAccordionToggle || !agentsFolderAccordionPanel) return;
  agentsFolderAccordion.classList.toggle('is-open', expanded);
  agentsFolderAccordionToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  agentsFolderAccordionPanel.hidden = !expanded;
}

function hubSyncFromState() {
  const org = getHubScopeCurrentOrg();
  if (!org) return;
  syncUserHeaderName();
  const contexts = getScopedContextsForCurrentRoute(org);
  if (hubContextId && !contexts.some((c) => c.id === hubContextId)) {
    hubContextId = '';
  }
  const ctx = hubContextId ? contexts.find((c) => c.id === hubContextId) : null;

  if (hubOrgNameEl) hubOrgNameEl.textContent = org.name;
  if (hubContextNameEl) hubContextNameEl.textContent = ctx ? ctx.label : 'Selecione o projeto';
  if (userTenantEl) userTenantEl.textContent = org.name;

  hubOrgMenu?.querySelectorAll('.hub-scope-dd-item').forEach((b) => {
    b.classList.toggle('is-active', b.dataset.org === hubOrgId);
  });

  hubRebuildContextMenu();

  const agentsPageEl = document.getElementById('page-agents');
  if (agentsPageEl) {
    agentsPageEl.querySelectorAll('.agents-org-panel[data-hub-org]').forEach((panel) => {
      panel.classList.toggle('is-hidden', panel.dataset.hubOrg !== hubOrgId);
    });
    syncAgentsFolderStripScroller();
  }

  document.querySelectorAll('.history-org-block[data-hub-org]').forEach((orgBlock) => {
    const orgMatch = orgBlock.dataset.hubOrg === hubOrgId;
    orgBlock.classList.toggle('is-hidden', !orgMatch);
    orgBlock.querySelectorAll('.history-context-card[data-hub-context]').forEach((card) => {
      if (!orgMatch) {
        card.classList.remove('is-hidden');
        return;
      }
      const showCard = !hubContextId || card.dataset.hubContext === hubContextId;
      card.classList.toggle('is-hidden', !showCard);
    });
  });

  if (historyOrgOnlyNotice) {
    if (ctx) {
      historyOrgOnlyNotice.textContent = `Histórico da organização "${org.name}", projeto "${ctx.label}". Escolha "Selecione o projeto" para ver conversas de todos os projetos.`;
    } else {
      historyOrgOnlyNotice.textContent = `Histórico da organização "${org.name}" em todos os projetos. Selecione um projeto para ver somente aquele projeto.`;
    }
  }

  syncAgentsFolderBlocksVisibility();

  syncAgentModalScope();

  if (agentChatScopeLine) agentChatScopeLine.hidden = true;

  syncAgentsPageScopeSelects();
  syncAgentsProjectCardsEnvironmentFilter();
  syncAgentsAllListScope();
  syncAgentsScopeStatus();
  hubRefreshCustomSelects();
  applyAgentsProjectRoute();
}

/** Tabela única de agentes: ambiente + projeto (vazio = todos os projetos do ambiente). */
function syncAgentsAllListScope() {
  const table = document.getElementById('agentsAllAgentsTable');
  if (!table) return;
  const currentProject = getScopedProjectForCurrentRoute();
  const currentProjectId = String(currentProject?.id || '').trim();
  table.querySelectorAll('.agents-row:not(.header)').forEach((row, index) => {
    const environmentId = resolveAgentsPageEnvironmentIdForRow(row, index);
    const environmentOk = !agentsPageEnvironmentId || environmentId === agentsPageEnvironmentId;
    if (row.dataset.fromApi === 'true') {
      const orgOk = !hubOrgId || !row.dataset.hubOrg || row.dataset.hubOrg === hubOrgId;
      const projectOk = !currentProjectId || String(row.dataset.projectId || '').trim() === currentProjectId;
      row.classList.toggle('agents-row--scope-hide', !orgOk || !projectOk || !environmentOk);
      return;
    }
    const org = row.dataset.hubOrg;
    const ctx = row.dataset.hubContext || '';
    const orgOk = org === hubOrgId;
    const ctxOk = !hubContextId || ctx === hubContextId;
    row.classList.toggle('agents-row--scope-hide', !orgOk || !ctxOk || !environmentOk);
  });
  resetAgentsPagination();
}

function escapeHtmlWes(text) {
  if (text == null) return '';
  const d = document.createElement('div');
  d.textContent = String(text);
  return d.innerHTML;
}

function hashAgentsPageEnvironmentSeed(value) {
  const text = String(value || '');
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = ((hash << 5) - hash + text.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function inferAgentsPageEnvironmentId({
  projectTitle = '',
  projectSlug = '',
  agentName = '',
  description = '',
  contextId = '',
  fallbackSeed = '',
} = {}) {
  const text = [projectTitle, projectSlug, agentName, description, contextId]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  if (/(controladoria|fechamento|finance|fiscal|concil|contab)/.test(text)) return 'financeiro';
  if (/(opera|backoffice|ops|pipeline|etl|api|suporte|integra|logistic)/.test(text)) return 'operacoes';
  if (/(mkt|market|campanh|conteud|crm|social|growth|branding|comunica)/.test(text)) return 'marketing';
  if (/(rh|people|pessoa|gente|talent|recrut|cultura|onboard)/.test(text)) return 'rh';

  const seed = fallbackSeed || projectSlug || projectTitle || agentName || description || contextId;
  return AGENTS_PAGE_ENVIRONMENTS[hashAgentsPageEnvironmentSeed(seed) % AGENTS_PAGE_ENVIRONMENTS.length]?.id || '';
}

function resolveAgentsPageEnvironmentIdForAgent(agent) {
  return (
    getAgentEnvironmentOverride(agent?.id) ||
    inferAgentsPageEnvironmentId({
      projectTitle: agent?.project_title || '',
      projectSlug: agent?.project_slug || '',
      agentName: agent?.name || '',
      description: agent?.description || '',
      fallbackSeed: agent?.id || agent?.name || '',
    })
  );
}

function resolveAgentsPageEnvironmentIdForProject(projectMeta = {}) {
  return (
    getProjectEnvironmentOverride(projectMeta) ||
    inferAgentsPageEnvironmentId({
      projectTitle: projectMeta.projectTitle || '',
      projectSlug: projectMeta.projectSlug || '',
      fallbackSeed: projectMeta.fallbackSeed || '',
    })
  );
}

function getAgentsPageEnvironmentLabel(environmentId) {
  return AGENTS_PAGE_ENVIRONMENTS.find((item) => item.id === environmentId)?.label || 'Não definido';
}

function syncAgentsPageEnvironmentSelect() {
  if (!agentsPageEnvironmentSelect) return;
  const currentValue = isValidAgentsPageEnvironmentId(agentsPageEnvironmentId)
    ? agentsPageEnvironmentId
    : '';

  agentsPageEnvironmentSelect.innerHTML = '';

  const allOpt = document.createElement('option');
  allOpt.value = '';
  allOpt.textContent = 'Todos os ambientes';
  agentsPageEnvironmentSelect.appendChild(allOpt);

  AGENTS_PAGE_ENVIRONMENTS.forEach((item) => {
    const opt = document.createElement('option');
    opt.value = item.id;
    opt.textContent = item.label;
    agentsPageEnvironmentSelect.appendChild(opt);
  });

  agentsPageEnvironmentSelect.value = currentValue;
}

function syncAgentModalEnvironmentSelect(preferredEnvironmentId = '') {
  const modalEnvironment = document.getElementById('agentModalEnvironment');
  if (!modalEnvironment) return '';

  const currentValue = isValidAgentsPageEnvironmentId(preferredEnvironmentId)
    ? preferredEnvironmentId
    : isValidAgentsPageEnvironmentId(modalEnvironment.value)
      ? modalEnvironment.value
      : isValidAgentsPageEnvironmentId(agentsPageEnvironmentId)
        ? agentsPageEnvironmentId
        : '';

  modalEnvironment.innerHTML = '';

  const emptyOpt = document.createElement('option');
  emptyOpt.value = '';
  emptyOpt.textContent = 'Selecione o ambiente';
  modalEnvironment.appendChild(emptyOpt);

  AGENTS_PAGE_ENVIRONMENTS.forEach((item) => {
    const opt = document.createElement('option');
    opt.value = item.id;
    opt.textContent = item.label;
    modalEnvironment.appendChild(opt);
  });

  modalEnvironment.value = currentValue;
  return currentValue;
}

function syncProjectModalEnvironmentSelect(preferredEnvironmentId = '') {
  const environmentSelect = document.getElementById('projectModalEnvironment');
  if (!environmentSelect) return '';

  const currentValue = isValidAgentsPageEnvironmentId(preferredEnvironmentId)
    ? preferredEnvironmentId
    : isValidAgentsPageEnvironmentId(environmentSelect.value)
      ? environmentSelect.value
      : isValidAgentsPageEnvironmentId(agentsPageEnvironmentId)
        ? agentsPageEnvironmentId
        : '';

  environmentSelect.innerHTML = '';

  const emptyOpt = document.createElement('option');
  emptyOpt.value = '';
  emptyOpt.textContent = 'Selecione o ambiente';
  environmentSelect.appendChild(emptyOpt);

  AGENTS_PAGE_ENVIRONMENTS.forEach((item) => {
    const opt = document.createElement('option');
    opt.value = item.id;
    opt.textContent = item.label;
    environmentSelect.appendChild(opt);
  });

  environmentSelect.value = currentValue;
  return currentValue;
}

function resolveAgentsPageEnvironmentIdForProjectCard(card, index = 0) {
  if (!card) return '';
  if (card.dataset.agentsEnvironment) return card.dataset.agentsEnvironment;
  const envId = resolveAgentsPageEnvironmentIdForProject({
    projectId: card.dataset.projectId || '',
    orgSlug: card.closest('.agents-org-panel')?.dataset.hubOrg || '',
    projectSlug: card.dataset.agentsProject || '',
    projectTitle: card.querySelector('.agents-project-card-name')?.textContent || '',
    fallbackSeed: `${card.dataset.agentsProject || 'project'}-${index}`,
  });
  card.dataset.agentsEnvironment = envId;
  return envId;
}

function resolveAgentsPageEnvironmentIdForRow(row, index = 0) {
  if (!row || row.classList.contains('header')) return '';
  if (row.dataset.agentsEnvironment) return row.dataset.agentsEnvironment;
  const detail = row.closest('.agents-project-detail');
  const envId = resolveAgentsPageEnvironmentIdForProject({
    projectId: detail?.dataset.projectId || row.dataset.projectId || '',
    orgSlug: detail?.closest('.agents-org-panel')?.dataset.hubOrg || row.dataset.hubOrg || '',
    projectSlug: detail?.dataset.agentsProject || '',
    projectTitle: detail?.dataset.projectTitle || '',
    agentName: row.querySelector('strong')?.textContent || '',
    fallbackSeed: `${row.dataset.agentUuid || row.dataset.projectId || 'row'}-${index}`,
  });
  row.dataset.agentsEnvironment = envId;
  return envId;
}

function syncAgentsProjectCardsEnvironmentFilter() {
  const strip = document.getElementById('agentsFolderStrip');
  if (!strip) return;

  strip.querySelectorAll('.agents-project-card').forEach((card, index) => {
    const envId = resolveAgentsPageEnvironmentIdForProjectCard(card, index);
    const envOk = !agentsPageEnvironmentId || envId === agentsPageEnvironmentId;
    const searchOk = !card.classList.contains('agents-project-card--search-hide');
    card.hidden = !envOk || !searchOk;
  });

  strip.querySelectorAll('.agents-org-panel').forEach((panel) => {
    const hasVisibleCards = Array.from(panel.querySelectorAll('.agents-project-card')).some((card) => !card.hidden);
    panel.classList.toggle('is-hidden-by-environment', !hasVisibleCards);
  });

  syncAgentsFolderStripScroller();
}

function ensureHubScopeFromAgents(agents) {
  const normalized = Array.isArray(agents) ? agents : [];
  if (Object.keys(HUB_SCOPE).length) return;

  const grouped = new Map();
  normalized.forEach((agent) => {
    const orgSlug = String(agent?.environment_slug || '').trim();
    if (!orgSlug) return;

    if (!grouped.has(orgSlug)) {
      grouped.set(orgSlug, {
        id: String(agent?.environment_id || '').trim(),
        name: String(agent?.environment_name || orgSlug).trim() || orgSlug,
        contexts: [],
        projects: [],
      });
    }

    const org = grouped.get(orgSlug);
    const projectId = String(agent?.project_id || '').trim();
    const projectTitle = String(agent?.project_title || '').trim();
    if (projectId && !org.projects.some((project) => project.id === projectId)) {
      const projectSlug =
        projectTitle
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '') || `project-${org.projects.length + 1}`;
      org.projects.push({
        id: projectId,
        slug: projectSlug,
        title: projectTitle || 'Projeto',
        description: '',
        contexts: [],
      });
    }
  });

  if (!grouped.size) return;

  HUB_SCOPE = {};
  Array.from(grouped.entries()).forEach(([slug, org]) => {
    HUB_SCOPE[slug] = org;
  });

  const keys = Object.keys(HUB_SCOPE);
  if (!hubOrgId && keys.length) {
    hubOrgId = keys[0];
  }

  rebuildHubOrgMenu();
  syncAgentsPageScopeSelects();
}

function setAgentsApiStatus(message, isError) {
  const el = document.getElementById('agentsApiStatus');
  if (!el) return;
  if (!message) {
    el.textContent = '';
    el.hidden = true;
    el.classList.toggle('agents-api-status--error', false);
    return;
  }
  el.textContent = message;
  el.hidden = false;
  el.classList.toggle('agents-api-status--error', Boolean(isError));
}

function buildAgentRowElement(agent) {
  const row = document.createElement('div');
  row.className = 'agents-row';
  row.dataset.fromApi = 'true';
  row.dataset.agentUuid = agent.id;
  row.dataset.projectId = agent.project_id || '';
  row.dataset.hubOrg = agent.environment_slug || '';
  row.dataset.agentsEnvironment = resolveAgentsPageEnvironmentIdForAgent(agent);
  const environmentLabel = getAgentsPageEnvironmentLabel(row.dataset.agentsEnvironment);
  const name = escapeHtmlWes(agent.name || '');
  const idCell = escapeHtmlWes(`${String(agent.id).slice(0, 8)}...`);
  const rag = agent.use_rag ? 'Sim' : 'Não';
  const hasProject = Boolean(agent.project_id);
  const desc = escapeHtmlWes(`${(agent.description || '').trim()}${hasProject ? '' : ' • Sem projeto'}`.trim());
  row.innerHTML = `<span><strong>${name}</strong></span><span title="${escapeHtmlWes(agent.id)}">${idCell}</span><span class="link">${rag}</span><span class="agents-row-environment"><span class="agents-environment-badge">${escapeHtmlWes(environmentLabel)}</span></span><span class="agents-row-description">${desc}</span><span class="row-actions"><button type="button" class="icon-btn action-icon danger agent-delete-toggle" aria-label="Excluir agente"><span class="material-symbols-rounded">delete</span></button><button type="button" class="icon-btn action-icon agent-chat-toggle" aria-label="Conversar"><span class="material-symbols-rounded">chat</span></button></span>`;
  return row;
}

function renderAgentsProjectDetailsFromApi(agents) {
  if (!agentsByOrg) return;
  const normalized = Array.isArray(agents) ? agents : [];
  agentsByOrg.querySelectorAll('.agents-project-detail').forEach((detail) => {
    const table = detail.querySelector('.agents-table');
    const empty = detail.querySelector('.agents-context-empty');
    if (!table) return;
    table.querySelectorAll('.agents-row:not(.header)').forEach((row) => row.remove());

    const projectAgents = normalized.filter(
      (agent) => String(agent.project_id || '').trim() === String(detail.dataset.projectId || '').trim()
    );

    const frag = document.createDocumentFragment();
    projectAgents.forEach((agent) => frag.appendChild(buildAgentRowElement(agent)));
    table.appendChild(frag);

    if (empty) {
      empty.textContent = 'Nenhum agente neste projeto.';
      empty.hidden = projectAgents.length > 0;
    }
  });
}

async function deleteAgentWithConfirmation(row) {
  if (!row || typeof window.wesApiFetch !== 'function' || !window.WesDashboardAuth?.isAuthenticated()) return;
  const agentId = String(row.dataset.agentUuid || '').trim();
  const agentName = row.querySelector('strong')?.textContent?.trim() || 'este agente';
  if (!agentId) return;

  const performDelete = async (params = '') => {
    const res = await window.wesApiFetch(`/agents/${encodeURIComponent(agentId)}${params}`, { method: 'DELETE' });
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
    if (first.res.status === 409 && first.body?.detail?.detail === 'AGENT_DELETE_CONFIRMATION_REQUIRED') {
      const detail = first.body.detail;
      const projects = Array.isArray(detail.projects) ? detail.projects : [];
      const count = Number(detail.project_count || projects.length || 0);
      const names = projects.map((project) => project?.title).filter(Boolean);
      const namesText = names.length ? `\n\nProjetos vinculados:\n- ${names.join('\n- ')}` : '';
      const message =
        count > 1
          ? `O agente "${agentName}" está vinculado a ${count} projetos e será excluído de todos.${namesText}\n\nDeseja continuar?`
          : count === 1
            ? `O agente "${agentName}" será excluído definitivamente.${namesText}\n\nDeseja continuar?`
            : `O agente "${agentName}" está sem projeto e será excluído definitivamente.\n\nDeseja continuar?`;
      if (!window.confirm(message)) return;
      const confirmed = await performDelete('?confirm=true');
      if (!confirmed.res.ok) {
        throw new Error(confirmed.body?.detail || confirmed.raw || confirmed.res.statusText);
      }
    } else if (!first.res.ok) {
      throw new Error(first.body?.detail || first.raw || first.res.statusText);
    }
    clearAgentEnvironmentOverride(agentId);
    if (typeof refreshHubScopeFromApi === 'function') await refreshHubScopeFromApi();
    if (typeof refreshAgentsTableFromApi === 'function') await refreshAgentsTableFromApi();
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    window.alert(message || 'Não foi possível excluir o agente.');
  }
}

/** Substitui linhas demo pela lista filtrada por usuÃÂ¡rio (GET /agents + X-User-Id). */
async function refreshAgentsTableFromApi() {
  const table = document.getElementById('agentsAllAgentsTable');
  if (!table || typeof window.wesApiFetch !== 'function') {
    setAgentsApiStatus('Carregamento da API indisponivel (auth.js nao carregou).', true);
    return;
  }
  if (!window.WesDashboardAuth || !window.WesDashboardAuth.isAuthenticated()) {
    setAgentsApiStatus('', false);
    return;
  }
  setAgentsApiStatus('Carregando agentes da API...', false);
  try {
    const res = await window.wesApiFetch('/agents');
    const rawText = await res.text();
    let body = null;
    try {
      body = rawText ? JSON.parse(rawText) : null;
    } catch {
      body = { detail: rawText || res.statusText };
    }
    if (!res.ok) {
      const detail =
        typeof body?.detail === 'string'
          ? body.detail
          : Array.isArray(body?.detail)
            ? body.detail.map((x) => (x.msg ? x.msg : JSON.stringify(x))).join('; ')
            : rawText || res.statusText;
      setAgentsApiStatus(`Não foi possível listar agentes (${res.status}): ${detail}`, true);
      return;
    }
    const agents = body;
    if (!Array.isArray(agents)) {
      setAgentsApiStatus('Resposta invalida da API (esperado um array de agentes).', true);
      return;
    }
    ensureHubScopeFromAgents(agents);
    if (hubOrgId) {
      hubSyncFromState();
    }
    table.querySelectorAll('.agents-row:not(.header)').forEach((r) => r.remove());
    const frag = document.createDocumentFragment();
    agents.forEach((a) => frag.appendChild(buildAgentRowElement(a)));
    table.appendChild(frag);
    scheduleLucideRefresh();
    syncAgentsAllListScope();
    renderAgentsProjectDetailsFromApi(agents);
    if (agents.length === 0) {
      setAgentsApiStatus(
        'Nenhum agente para este usuário na organização selecionada.',
        false
      );
    } else {
      setAgentsApiStatus('', false);
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    setAgentsApiStatus(
      `Falha de rede ou CORS ao chamar GET /agents. Abra o painel pelo mesmo host da API ou defina WESAI_CORS_ORIGINS no wes-ai. Detalhe: ${msg}`,
      true
    );
  }
}

function rebuildHubOrgMenu() {
  const menu = document.getElementById('hubOrgMenu');
  if (!menu) return;
  menu.innerHTML = '';
  Object.keys(HUB_SCOPE).forEach((slug) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'hub-scope-dd-item';
    btn.dataset.org = slug;
    btn.setAttribute('role', 'option');
    btn.textContent = HUB_SCOPE[slug].name;
    if (slug === hubOrgId) btn.classList.add('is-active');
    li.appendChild(btn);
    menu.appendChild(li);
  });
}

function syncAgentsFolderStripScroller() {
  const strip = document.getElementById('agentsFolderStrip');
  const viewport = strip?.querySelector('.agents-folder-strip-viewport');
  const prevBtn = strip?.querySelector('.agents-folder-strip-nav--prev');
  const nextBtn = strip?.querySelector('.agents-folder-strip-nav--next');
  if (!strip || !viewport || !prevBtn || !nextBtn) return;

  const maxScrollLeft = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
  const hasOverflow = maxScrollLeft > 4;
  const atStart = viewport.scrollLeft <= 4;
  const atEnd = viewport.scrollLeft >= maxScrollLeft - 4;

  prevBtn.hidden = !hasOverflow || atStart;
  nextBtn.hidden = !hasOverflow || atEnd;
}

function scrollAgentsFolderStrip(direction) {
  const strip = document.getElementById('agentsFolderStrip');
  const viewport = strip?.querySelector('.agents-folder-strip-viewport');
  if (!viewport) return;

  const visibleCards = Array.from(viewport.querySelectorAll('.agents-project-card')).filter((card) => {
    const style = window.getComputedStyle(card);
    return style.display !== 'none';
  });
  const firstCard = visibleCards[0];
  const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 0;
  const gap = visibleCards.length > 1
    ? Math.max(0, visibleCards[1].getBoundingClientRect().left - firstCard.getBoundingClientRect().right)
    : 10;
  const delta = cardWidth ? (cardWidth + gap) * Math.max(1, Math.floor(viewport.clientWidth / (cardWidth + gap))) : viewport.clientWidth * 0.8;

  viewport.scrollBy({
    left: direction === 'prev' ? -delta : delta,
    behavior: 'smooth',
  });
}

function wireAgentsFolderStripControls(strip) {
  const root = strip || document.getElementById('agentsFolderStrip');
  const viewport = root?.querySelector('.agents-folder-strip-viewport');
  const prevBtn = root?.querySelector('.agents-folder-strip-nav--prev');
  const nextBtn = root?.querySelector('.agents-folder-strip-nav--next');
  if (!root || !viewport || !prevBtn || !nextBtn) return;

  if (!viewport.dataset.wesStripBound) {
    viewport.addEventListener('scroll', syncAgentsFolderStripScroller);
    viewport.dataset.wesStripBound = 'true';
  }
  if (!prevBtn.dataset.wesStripBound) {
    prevBtn.addEventListener('click', () => scrollAgentsFolderStrip('prev'));
    prevBtn.dataset.wesStripBound = 'true';
  }
  if (!nextBtn.dataset.wesStripBound) {
    nextBtn.addEventListener('click', () => scrollAgentsFolderStrip('next'));
    nextBtn.dataset.wesStripBound = 'true';
  }
}

if (agentsFolderAccordionToggle && agentsFolderAccordionPanel) {
  setAgentsFolderAccordionExpanded(!agentsFolderAccordionPanel.hidden);
  agentsFolderAccordionToggle.addEventListener('click', () => {
    setAgentsFolderAccordionExpanded(agentsFolderAccordionPanel.hidden);
  });
}

function rebuildAgentsFolderStrip(environments) {
  const strip = document.getElementById('agentsFolderStrip');
  if (!strip) return;
  strip.innerHTML = '';
  const prevBtn = document.createElement('button');
  prevBtn.type = 'button';
  prevBtn.className = 'icon-btn agents-folder-strip-nav agents-folder-strip-nav--prev';
  prevBtn.setAttribute('aria-label', 'Projetos anteriores');
  prevBtn.innerHTML = '<span class="material-symbols-rounded">chevron_left</span>';

  const nextBtn = document.createElement('button');
  nextBtn.type = 'button';
  nextBtn.className = 'icon-btn agents-folder-strip-nav agents-folder-strip-nav--next';
  nextBtn.setAttribute('aria-label', 'Próximos projetos');
  nextBtn.innerHTML = '<span class="material-symbols-rounded">chevron_right</span>';

  const viewport = document.createElement('div');
  viewport.className = 'agents-folder-strip-viewport';

  for (const org of environments) {
    const panel = document.createElement('div');
    panel.className = 'agents-org-panel';
    panel.dataset.hubOrg = org.slug;
    const grid = document.createElement('div');
    grid.className = 'agents-projects-grid';
    for (const p of org.projects || []) {
      const link = document.createElement('a');
      link.className = 'agents-project-card';
      link.href = `#/dashboard/agents/project/${encodeURIComponent(p.slug)}`;
      link.dataset.agentsProject = p.slug;
      link.dataset.projectId = p.id || '';
      link.dataset.agentsEnvironment = resolveAgentsPageEnvironmentIdForProject({
        projectId: p.id || '',
        orgSlug: org.slug || '',
        projectSlug: p.slug || '',
        projectTitle: p.title || '',
        fallbackSeed: `${org.slug || 'org'}-${p.slug || p.id || grid.children.length}`,
      });
      const iconHtml = window.wesLucideProjectFolderIconHtml
        ? window.wesLucideProjectFolderIconHtml('card')
        : '';
      const editButtonHtml = typeof window.wesProjectCardEditButtonHtml === 'function'
        ? window.wesProjectCardEditButtonHtml()
        : '';
      link.innerHTML = `${editButtonHtml}${iconHtml}<span class="agents-project-card-kicker">Projeto</span><strong class="agents-project-card-name">${escapeHtmlWes(p.title)}</strong>`;
      grid.appendChild(link);
    }
    panel.appendChild(grid);
    viewport.appendChild(panel);
  }
  strip.appendChild(prevBtn);
  strip.appendChild(viewport);
  strip.appendChild(nextBtn);

  wireAgentsFolderStripControls(strip);
  ensureProjectCardEditButtons(strip);

  scheduleLucideRefresh();
  syncAgentsFolderStripScroller();
}

function rebuildAgentsByOrgFromScope(environments) {
  const root = document.getElementById('agentsByOrg');
  if (!root) return;
  root.innerHTML = '';
  for (const org of environments) {
    const panel = document.createElement('div');
    panel.className = 'agents-org-panel';
    panel.dataset.hubOrg = org.slug;
    for (const p of org.projects || []) {
      const detail = document.createElement('div');
      detail.className = 'agents-project-detail is-hidden';
      detail.hidden = true;
      detail.dataset.agentsProject = p.slug;
      detail.dataset.projectId = p.id;
      detail.dataset.projectTitle = p.title;
      detail.dataset.projectDescription = p.description || '';
      detail.dataset.agentsEnvironment = resolveAgentsPageEnvironmentIdForProject({
        projectId: p.id || '',
        orgSlug: org.slug || '',
        projectSlug: p.slug || '',
        projectTitle: p.title || '',
        fallbackSeed: `${org.slug || 'org'}-${p.slug || p.id || panel.children.length}`,
      });
      const iconHtml = window.wesLucideProjectFolderIconHtml
        ? window.wesLucideProjectFolderIconHtml('detail')
        : '';
      detail.innerHTML = `
        <div class="agents-project-folder-head">
          ${iconHtml}
          <div class="agents-project-folder-titles">
            <h3 class="agents-project-folder-name">${escapeHtmlWes(p.title)}</h3>
          </div>
        </div>
        <div class="agents-project-folder-body">
          <section class="agents-context-block agents-context-block--project">
            <div class="agents-table" aria-label="Agentes do projeto ${escapeHtmlWes(p.title)}">
              <div class="agents-row header">
                <span>Nome do agente</span>
                <span>ID</span>
                <span>RAG</span>
                <span>Descrição</span>
                <span>Ações</span>
              </div>
            </div>
            <p class="agents-api-scope-hint agents-context-empty">Nenhum agente neste projeto.</p>
          </section>
        </div>`;
      panel.appendChild(detail);
    }
    root.appendChild(panel);
  }
}

async function refreshHubScopeFromApi() {
  if (typeof window.wesApiFetch !== 'function' || !window.WesDashboardAuth?.isAuthenticated()) return;
  try {
    const normalizeScopeEnvironments = (environments) => {
      return (Array.isArray(environments) ? environments : []).map((org) => ({
        id: org.id,
        name: org.name,
        slug: org.slug,
        projects: (org.projects || []).map((p) => ({
          id: p.id,
          slug: p.slug,
          title: p.title,
          description: p.description || '',
          contexts: [],
        })),
      }));
    };

    const res = await window.wesApiFetch('/me/scope');
    if (!res.ok) return;
    const body = await res.json();
    let orgs = normalizeScopeEnvironments(body?.environments);

    const hasProjects = orgs.some((org) => Array.isArray(org.projects) && org.projects.length > 0);
    if (!hasProjects) {
      const projectsRes = await window.wesApiFetch('/projects');
      if (projectsRes.ok) {
        const projectsBody = await projectsRes.json();
        const grouped = new Map();
        (Array.isArray(projectsBody) ? projectsBody : []).forEach((project) => {
          const orgSlug = String(project.environment_slug || '').trim();
          if (!orgSlug) return;
          if (!grouped.has(orgSlug)) {
            grouped.set(orgSlug, {
              id: project.environment_id,
              name: project.environment_name || orgSlug,
              slug: orgSlug,
              projects: [],
            });
          }
          grouped.get(orgSlug).projects.push({
            id: project.project_id,
            slug: project.project_slug,
            title: project.project_title,
            description: project.description || '',
            contexts: [],
          });
        });
        if (grouped.size) {
          orgs = Array.from(grouped.values());
        }
      }
    }

    HUB_SCOPE = {};
    orgs.forEach((org) => {
      const projects = [];
      (org.projects || []).forEach((p) => {
        projects.push({ id: p.id, slug: p.slug, title: p.title, description: p.description || '', contexts: [] });
      });
      HUB_SCOPE[org.slug] = { id: org.id, name: org.name, contexts: [], projects };
    });
    const keys = Object.keys(HUB_SCOPE);
    if (keys.length && !keys.includes(hubOrgId)) {
      hubOrgId = keys[0];
      hubContextId = '';
    }
    rebuildHubOrgMenu();
    rebuildAgentsFolderStrip(orgs);
    rebuildAgentsByOrgFromScope(
      orgs.map((org) => ({
        ...org,
        projects: (org.projects || []).map((p) => ({
          id: p.id,
          slug: p.slug,
          title: p.title,
          description: p.description || '',
          contexts: [],
        })),
      }))
    );
    syncAgentsPageScopeSelects();
    hubRebuildContextMenu();
    hubSyncFromState();
    hubRefreshCustomSelects();
  } catch {
    /* rede */
  }
}

/** Lista de projetos (cards) vs. detalhe com projeto + agentes/chats na rota #/dashboard/agents/project/:slug */
function applyAgentsProjectRoute() {
  const agentsPage = document.getElementById('page-agents');
  if (!agentsPage || !agentsPage.classList.contains('is-active')) return;

  const raw = (window.location.hash || '').replace(/^#\/?/, '');
  const match = raw.match(/^dashboard\/agents\/project\/([^/?#]+)$/);
  const slug = match ? decodeURIComponent(match[1]) : null;

  const breadcrumb = document.getElementById('agentsProjectBreadcrumb');
  const titleEl = document.getElementById('agentsProjectBreadcrumbTitle');
  const pag = agentsPage.querySelector('.agents-page-pagination');
  const allAgentsSection = document.getElementById('agentsAllAgentsSection');
  const environmentFilter = document.getElementById('wesEnvironmentFilter');

  const detailEl = (() => {
    if (!slug) return null;
    const esc = typeof CSS !== 'undefined' && CSS.escape ? CSS.escape(slug) : slug;
    return agentsPage.querySelector(`.agents-project-detail[data-agents-project="${esc}"]`);
  })();

  let validDetail = false;
  if (detailEl) {
    const pan = detailEl.closest('.agents-org-panel');
    validDetail = Boolean(pan && !pan.classList.contains('is-hidden'));
  }

  if (slug && !validDetail) {
    const fallback = '#/dashboard/agents';
    if (window.location.hash !== fallback) {
      window.location.replace(fallback);
    }
    return;
  }

  agentsPage.querySelectorAll('.agents-projects-grid').forEach((grid) => {
    const panel = grid.closest('.agents-org-panel');
    const panelVisible = panel && !panel.classList.contains('is-hidden');
    const samePanelAsDetail =
      validDetail && detailEl && panel === detailEl.closest('.agents-org-panel');
    const hideThisGrid = Boolean(validDetail && samePanelAsDetail && panelVisible);
    grid.classList.toggle('is-hidden', hideThisGrid);
    grid.hidden = hideThisGrid;
  });

  agentsPage.querySelectorAll('.agents-project-detail').forEach((d) => {
    const show = Boolean(validDetail && d === detailEl);
    d.classList.toggle('is-hidden', !show);
    d.hidden = !show;
  });

  if (breadcrumb) {
    const showBr = Boolean(validDetail);
    breadcrumb.classList.toggle('is-hidden', !showBr);
    breadcrumb.hidden = !showBr;
    if (titleEl && detailEl) {
      titleEl.textContent = detailEl.dataset.projectTitle || '';
    }
  }

  if (pag) {
    const hidePag = Boolean(validDetail);
    pag.classList.toggle('is-hidden', hidePag);
    pag.hidden = hidePag;
  }

  if (allAgentsSection) {
    const hideAll = Boolean(validDetail);
    allAgentsSection.classList.toggle('is-hidden', hideAll);
    allAgentsSection.hidden = hideAll;
  }

  if (environmentFilter) {
    environmentFilter.classList.remove('is-hidden');
    environmentFilter.hidden = false;
  }

  syncAgentsScopeStatus();

  if (validDetail) {
    syncAgentsFolderBlocksVisibility();
    hubRefreshCustomSelects();
  }
  syncAgentsFolderStripScroller();
}

(function initAgentsFolderStripControls() {
  wireAgentsFolderStripControls(document.getElementById('agentsFolderStrip'));
  syncAgentsFolderStripScroller();
})();

(function wireAgentsSearchFilter() {
  const input = document.getElementById('agentsSearchInput');
  if (!input || !agentsByOrg) return;
  const applyRowSearch = (row, q) => {
    if (row.classList.contains('header')) return;
    const text = row.textContent.toLowerCase();
    row.classList.toggle('agents-row--search-hide', q.length > 0 && !text.includes(q));
  };
  const run = () => {
    const q = input.value.trim().toLowerCase();
    agentsByOrg.querySelectorAll('.agents-table').forEach((table) => {
      table.querySelectorAll('.agents-row').forEach((row) => applyRowSearch(row, q));
    });
    const allTable = document.getElementById('agentsAllAgentsTable');
    if (allTable) {
      allTable.querySelectorAll('.agents-row').forEach((row) => applyRowSearch(row, q));
    }
    agentsByOrg.querySelectorAll('.agents-project-card').forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.classList.toggle('agents-project-card--search-hide', q.length > 0 && !text.includes(q));
    });
    syncAgentsProjectCardsEnvironmentFilter();
    resetAgentsPagination();
  };
  input.addEventListener('input', run);
  input.addEventListener('search', run);
})();

if (hubOrgTrigger && hubOrgMenu) {
  hubOrgTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = hubOrgMenu.hidden;
    hubCloseDropdowns();
    if (open) {
      hubOrgMenu.hidden = false;
      hubOrgTrigger.setAttribute('aria-expanded', 'true');
    }
  });
  hubOrgMenu.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-org]');
    if (!btn) return;
    const nextOrg = btn.dataset.org;
    if (nextOrg !== hubOrgId) {
      hubCloseAgentChatIfOpen();
    }
    hubOrgId = nextOrg;
    hubContextId = '';
    hubSyncFromState();
    void refreshAgentsTableFromApi();
    hubCloseDropdowns();
  });
}

if (hubContextTrigger && hubContextMenu) {
  hubContextTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    hubRebuildContextMenu();
    const open = hubContextMenu.hidden;
    hubCloseDropdowns();
    if (open) {
      hubContextMenu.hidden = false;
      hubContextTrigger.setAttribute('aria-expanded', 'true');
    }
  });
}

document.addEventListener('click', () => {
  hubCloseDropdowns();
  hubCustomSelectCloseAll();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hubCustomSelectCloseAll();
});

if (hubOrgDropdown) {
  hubOrgDropdown.addEventListener('click', (e) => e.stopPropagation());
}
if (hubContextDropdown) {
  hubContextDropdown.addEventListener('click', (e) => e.stopPropagation());
}

ensureHubScopeFromStaticMarkup();
ensureProjectCardEditButtons(document.getElementById('agentsFolderStrip'));
hubSyncFromState();

(function wireAgentsAutoRefresh() {
  async function runAgentsAutoRefresh() {
    if (document.hidden) return;
    const raw = window.location.hash.replace('#/', '');
    const routeKey = raw || 'dashboard';
    const onAgentsPage = routeKey === 'dashboard/agents' || routeKey.startsWith('dashboard/agents/project/');
    if (!onAgentsPage) return;
    if (!window.WesDashboardAuth?.isAuthenticated?.()) return;
    await refreshHubScopeFromApi();
    await refreshAgentsTableFromApi();
  }

  function stopAgentsAutoRefresh() {
    if (agentsAutoRefreshTimer) {
      window.clearInterval(agentsAutoRefreshTimer);
      agentsAutoRefreshTimer = null;
    }
  }

  function ensureAgentsAutoRefresh() {
    stopAgentsAutoRefresh();
    const raw = window.location.hash.replace('#/', '');
    const routeKey = raw || 'dashboard';
    const onAgentsPage = routeKey === 'dashboard/agents' || routeKey.startsWith('dashboard/agents/project/');
    if (!AGENTS_AUTO_REFRESH_ENABLED || !onAgentsPage || !window.WesDashboardAuth?.isAuthenticated?.()) return;
    agentsAutoRefreshTimer = window.setInterval(() => {
      void runAgentsAutoRefresh();
    }, AGENTS_AUTO_REFRESH_MS);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAgentsAutoRefresh();
      return;
    }
    ensureAgentsAutoRefresh();
    void runAgentsAutoRefresh();
  });

  window.addEventListener('hashchange', () => {
    ensureAgentsAutoRefresh();
  });

  window.ensureAgentsAutoRefresh = ensureAgentsAutoRefresh;
  window.stopAgentsAutoRefresh = stopAgentsAutoRefresh;

  if (window.WesDashboardAuth?.isAuthenticated?.()) {
    syncUserHeaderName();
    ensureAgentsAutoRefresh();
    void runAgentsAutoRefresh();
  }
})();

(function wireAgentsPageScopeSelects() {
  const orgSel = document.getElementById('agentsPageOrgSelect');
  const environmentSel = document.getElementById('agentsPageEnvironmentSelect');
  const ctxSel = document.getElementById('agentsPageContextSelect');
  if (orgSel) {
    orgSel.addEventListener('change', () => {
      if (orgSel.value === hubOrgId) return;
      hubCloseAgentChatIfOpen();
      hubOrgId = orgSel.value;
      hubContextId = '';
      hubSyncFromState();
      void refreshAgentsTableFromApi();
      hubCloseDropdowns();
    });
  }
  if (environmentSel) {
    environmentSel.addEventListener('change', () => {
      const next = String(environmentSel.value || '').trim();
      if (next === agentsPageEnvironmentId) return;
      agentsPageEnvironmentId = next;
      syncAgentsProjectCardsEnvironmentFilter();
      syncAgentsAllListScope();
      hubCloseDropdowns();
    });
  }
  if (ctxSel) {
    ctxSel.addEventListener('change', () => {
      const next = ctxSel.value;
      if (next === hubContextId) return;
      hubContextId = next;
      hubSyncFromState();
      void refreshAgentsTableFromApi();
      hubCloseDropdowns();
    });
  }
})();

(function wireProjectModal() {
  const btn = document.getElementById('agentsCreateProjectBtn');
  const modal = document.getElementById('projectModal');
  const form = document.getElementById('projectModalForm');
  const titleEl = document.getElementById('projectModalTitle');
  const orgSel = document.getElementById('projectModalOrg');
  const environmentSel = document.getElementById('projectModalEnvironment');
  const errEl = document.getElementById('projectModalError');
  const nameInput = document.getElementById('projectModalName');
  const descriptionInput = document.getElementById('wesProjectDescription');
  const availableAgentSelect = document.getElementById('projectModalAvailableAgent');
  const agentsList = document.getElementById('projectModalAgentsList');
  const promptBlock = document.getElementById('projectModalPromptBlock');
  const promptInput = document.getElementById('projectModalPrompt');
  const dangerZone = document.getElementById('projectModalDangerZone');
  const deleteConfirm = document.getElementById('projectModalDeleteConfirm');
  const deleteBtn = document.getElementById('projectModalDeleteBtn');
  const submitBtn = document.getElementById('projectModalSubmit');
  if (!btn || !modal || !form || !orgSel || !environmentSel || !nameInput || !descriptionInput || !availableAgentSelect || !agentsList || !submitBtn) return;
  let projectModalInitialState = null;

  function setProjectModalError(msg) {
    if (!errEl) return;
    if (msg) {
      errEl.textContent = msg;
      errEl.hidden = false;
    } else {
      errEl.textContent = '';
      errEl.hidden = true;
    }
  }

  function syncProjectModalMode(mode = 'create') {
    const isEdit = mode === 'edit';
    modal.dataset.mode = isEdit ? 'edit' : 'create';
    if (titleEl) titleEl.textContent = isEdit ? 'Editar projeto' : 'Criar projeto';
    submitBtn.textContent = isEdit ? 'Salvar projeto' : 'Criar projeto';
    if (promptBlock) {
      promptBlock.hidden = !isEdit;
    }
    if (dangerZone) {
      dangerZone.hidden = !isEdit;
    }
    if (deleteConfirm) deleteConfirm.checked = false;
    if (deleteBtn) deleteBtn.disabled = true;
  }

  function serializeProjectModalState() {
    return {
      name: nameInput.value.trim(),
      environment: String(environmentSel.value || '').trim(),
      description: descriptionInput.value.trim(),
      prompt: String(promptInput?.value || '').trim(),
      agentIds: getProjectModalSelectedAgentIds().slice().sort(),
    };
  }

  function syncProjectModalSubmitState() {
    const isEdit = modal.dataset.mode === 'edit';
    if (!isEdit || !projectModalInitialState) {
      submitBtn.disabled = false;
      return;
    }
    const currentState = serializeProjectModalState();
    const hasChanges =
      currentState.name !== projectModalInitialState.name ||
      currentState.environment !== projectModalInitialState.environment ||
      currentState.description !== projectModalInitialState.description ||
      currentState.prompt !== projectModalInitialState.prompt ||
      currentState.agentIds.join('|') !== projectModalInitialState.agentIds.join('|');
    submitBtn.disabled = !hasChanges;
  }

  function resetProjectModalState() {
    modal.dataset.projectSlug = '';
    modal.dataset.projectId = '';
    modal.dataset.orgSlug = '';
    projectModalInitialState = null;
    form.reset();
    if (promptInput) promptInput.value = '';
    projectModalAvailableAgents = [];
    renderProjectModalSelectedAgents([]);
    renderProjectModalAvailableAgentSelect([], []);
    syncProjectModalMode('create');
    syncProjectModalSubmitState();
  }

  const closeModal = () => {
    hubCustomSelectCloseAll();
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  };

  async function openProjectModal({ mode = 'create', orgSlug = '', projectSlug = '', project = null } = {}) {
    closeAgentsCreateMenu();
    hubCustomSelectCloseAll();
    setProjectModalError('');
    const nextMode = mode === 'edit' ? 'edit' : 'create';
    const selectedOrgSlug = String(orgSlug || hubOrgId || '').trim();
    const org = HUB_SCOPE[selectedOrgSlug] || getHubScopeCurrentOrg();
    const targetProject = nextMode === 'edit'
      ? project || getProjectBySlug(org, projectSlug)
      : null;

    projectModalInitialState = null;
    syncProjectModalMode(nextMode);
    modal.dataset.projectSlug = String(targetProject?.slug || '').trim();
    modal.dataset.projectId = String(targetProject?.id || '').trim();
    modal.dataset.orgSlug = selectedOrgSlug;
    nameInput.value = String(targetProject?.title || '').trim();
    descriptionInput.value = String(targetProject?.description || '').trim();
    if (promptInput) {
      promptInput.value = targetProject
        ? getProjectPromptOverride({
            projectId: targetProject.id || '',
            orgSlug: selectedOrgSlug,
            projectSlug: targetProject.slug || '',
          })
        : '';
    }
    projectModalAvailableAgents = [];
    renderProjectModalSelectedAgents([]);
    renderProjectModalAvailableAgentSelect([], []);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');

    const preferredEnvironmentId = targetProject
      ? resolveAgentsPageEnvironmentIdForProject({
          projectId: targetProject.id || '',
          orgSlug: selectedOrgSlug,
          projectSlug: targetProject.slug || '',
          projectTitle: targetProject.title || '',
          fallbackSeed: targetProject.id || targetProject.slug || targetProject.title || '',
        })
      : '';

    await syncProjectModalSelects(preferredEnvironmentId);
    projectModalInitialState = serializeProjectModalState();
    syncProjectModalSubmitState();
    hubCustomSelectCloseAll();
    hubRefreshCustomSelects();
    nameInput.focus();
  }

  btn.addEventListener('click', async () => {
    resetProjectModalState();
    await openProjectModal({ mode: 'create' });
  });

  document.getElementById('agentsFolderStrip')?.addEventListener('click', (e) => {
    if (!isAgentsDashboardRoute()) return;
    const editBtn = e.target.closest('.agents-project-card-edit');
    if (!editBtn) return;
    const card = editBtn.closest('.agents-project-card');
    const orgSlug = String(card?.closest('.agents-org-panel')?.dataset.hubOrg || hubOrgId || '').trim();
    const org = HUB_SCOPE[orgSlug] || null;
    const projectSlug = String(card?.dataset.agentsProject || '').trim();
    const project = getProjectBySlug(org, projectSlug);
    if (!card || !project) return;
    e.preventDefault();
    e.stopPropagation();
    void openProjectModal({ mode: 'edit', orgSlug, project });
  });

  modal.addEventListener('click', (e) => {
    if (e.target.closest('[data-modal-close]')) {
      closeModal();
      resetProjectModalState();
    }
  });

  deleteConfirm?.addEventListener('change', () => {
    if (deleteBtn) deleteBtn.disabled = !deleteConfirm.checked;
  });

  deleteBtn?.addEventListener('click', async () => {
    if (modal.dataset.mode !== 'edit') return;
    if (!deleteConfirm?.checked) return;
    const projectId = String(modal.dataset.projectId || '').trim();
    const projectTitle = String(nameInput.value || 'este projeto').trim() || 'este projeto';
    if (!projectId || typeof window.wesApiFetch !== 'function' || !window.WesDashboardAuth?.isAuthenticated()) return;
    const confirmed = window.confirm(
      `Tem certeza que quer fazer isso? Essa ação não poderá ser desfeita.\n\nProjeto: ${projectTitle}`
    );
    if (!confirmed) return;
    try {
      const res = await window.wesApiFetch(`/projects/${encodeURIComponent(projectId)}`, {
        method: 'DELETE',
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
      closeModal();
      resetProjectModalState();
      window.location.hash = '#/dashboard/agents';
      if (typeof refreshHubScopeFromApi === 'function') await refreshHubScopeFromApi();
      if (typeof refreshAgentsTableFromApi === 'function') await refreshAgentsTableFromApi();
    } catch (error) {
      window.alert(`Não foi possível excluir o projeto. ${error?.message || ''}`.trim());
    }
  });

  environmentSel.addEventListener('change', async () => {
    hubCustomSelectCloseAll();
    await fillProjectModalAgentOptions(getProjectModalSelectedAgentIds());
    syncProjectModalSubmitState();
    hubRefreshCustomSelects();
  });

  availableAgentSelect.addEventListener('change', () => {
    const nextAgentId = String(availableAgentSelect.value || '').trim();
    if (!nextAgentId) return;
    const selectedIds = new Set(getProjectModalSelectedAgentIds());
    selectedIds.add(nextAgentId);
    syncProjectModalAgentPicker(projectModalAvailableAgents, Array.from(selectedIds));
    syncProjectModalSubmitState();
    hubRefreshCustomSelects();
  });

  agentsList.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.project-modal-agent-chip-remove');
    if (!removeBtn) return;
    const agentId = String(removeBtn.dataset.agentId || '').trim();
    if (!agentId) return;
    const nextSelectedIds = getProjectModalSelectedAgentIds().filter((id) => id !== agentId);
    syncProjectModalAgentPicker(projectModalAvailableAgents, nextSelectedIds);
    syncProjectModalSubmitState();
    hubRefreshCustomSelects();
  });

  form.addEventListener('input', syncProjectModalSubmitState);
  form.addEventListener('change', syncProjectModalSubmitState);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    setProjectModalError('');
    const isEdit = modal.dataset.mode === 'edit';
    const projectTitle = nameInput.value.trim();
    const projectDescription = descriptionInput.value.trim();
    const projectPrompt = String(promptInput?.value || '').trim();
    const selectedEnvironmentId = String(environmentSel.value || '').trim();
    const selectedAgentIds = getProjectModalSelectedAgentIds();
    if (!projectTitle) {
      nameInput.focus();
      return;
    }
    if (!projectDescription) {
      descriptionInput.focus();
      return;
    }
    if (!orgSel.value) {
      setProjectModalError('Selecione uma organização. Se a lista estiver vazia, confira o acesso em /me/scope.');
      return;
    }
    if (!selectedEnvironmentId) {
      environmentSel.focus();
      return;
    }
    if (typeof window.wesApiFetch !== 'function' || !window.WesDashboardAuth?.isAuthenticated()) {
      setProjectModalError(`Recurso indisponível sem configuração de API para ${isEdit ? 'editar' : 'criar'} um projeto.`);
      return;
    }
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('is-loading');
    }
    try {
      const projectSlug = form.closest('.modal')?.dataset.projectSlug || '';
      const org = HUB_SCOPE[orgSel.value];
      const existingProject = getProjectBySlug(org, projectSlug);
      const canEdit = Boolean(isEdit && existingProject?.id);
      const res = await window.wesApiFetch(isEdit ? `/projects/${encodeURIComponent(existingProject.id)}` : '/projects', {
        method: canEdit ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          environment_slug: orgSel.value,
          title: projectTitle,
          description: projectDescription,
          agent_ids: selectedAgentIds,
        }),
      });
      const rawText = await res.text();
      let data = null;
      try {
        data = rawText ? JSON.parse(rawText) : null;
      } catch {
        data = null;
      }
      if (!res.ok) {
        const detail =
          typeof data?.detail === 'string'
            ? data.detail
            : Array.isArray(data?.detail)
              ? data.detail.map((x) => (x.msg ? x.msg : JSON.stringify(x))).join('; ')
              : rawText || res.statusText;
        setProjectModalError(`Não foi possível ${canEdit ? 'salvar' : 'criar'} (${res.status}): ${detail}`);
        return;
      }
      const resolvedProjectId = String(data?.id || data?.project_id || existingProject?.id || '').trim();
      const resolvedProjectSlug =
        String(data?.slug || data?.project_slug || existingProject?.slug || projectSlug || slugifyProjectTitle(projectTitle)).trim();
      const projectMeta = {
        projectId: resolvedProjectId,
        orgSlug: orgSel.value,
        projectSlug: resolvedProjectSlug,
      };
      setProjectEnvironmentOverride(projectMeta, selectedEnvironmentId);
      setProjectPromptOverride(projectMeta, projectPrompt);
      closeModal();
      resetProjectModalState();
      if (typeof refreshHubScopeFromApi === 'function') {
        await refreshHubScopeFromApi();
      }
      hubRefreshCustomSelects();
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setProjectModalError(msg);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('is-loading');
      }
    }
  });
})();

if (menuToggle && appShell) {
  menuToggle.addEventListener('click', () => {
    appShell.classList.toggle('sidebar-collapsed');
  });
}

if (settingsPage && settingsSaveBtn) {
  const settingsFields = settingsPage.querySelectorAll('input, select, textarea');
  const initialValues = new Map();

  const readValue = (field) => {
    if (field.type === 'checkbox' || field.type === 'radio') {
      return field.checked;
    }
    return field.value;
  };

  const updateSaveState = () => {
    const dirty = Array.from(settingsFields).some((field) => readValue(field) !== initialValues.get(field));
    settingsSaveBtn.disabled = !dirty;
  };

  settingsFields.forEach((field) => {
    initialValues.set(field, readValue(field));
    field.addEventListener('input', updateSaveState);
    field.addEventListener('change', updateSaveState);
  });

  updateSaveState();
}

if (settingsTabs.length && settingsPanels.length) {
  settingsTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      settingsTabs.forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
      settingsPanels.forEach((panel) => {
        panel.classList.toggle('active', panel.dataset.panel === target);
      });
    });
  });
}

if (navTriggers.length) {
  navTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      if (appShell && appShell.classList.contains('sidebar-collapsed')) {
        return;
      }

      const targetId = `submenu-${trigger.dataset.menu}`;
      const targetMenu = document.getElementById(targetId);

      navTriggers.forEach((item) => {
        if (item !== trigger) {
          item.classList.remove('open');
        }
      });

      document.querySelectorAll('.submenu').forEach((menu) => {
        if (menu !== targetMenu) {
          menu.classList.remove('open');
        }
      });

      trigger.classList.toggle('open');
      if (targetMenu) {
        targetMenu.classList.toggle('open');
      }

      if (trigger.dataset.menu === 'automation') {
        window.location.hash = '#/dashboard/automations';
      }
    });
  });
}

if (userMenu && userDropdown) {
  userMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    userDropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    userDropdown.classList.remove('open');
  });
}

if (insightsGrid) {
  const cards = Array.from(insightsGrid.querySelectorAll('.insight-card'))
    .filter((card) => !card.classList.contains('placeholder'));

  if (insightsCount) {
    insightsCount.textContent = cards.length;
  }

  if (cards.length === 0 && insightsEmpty) {
    insightsGrid.style.display = 'none';
    insightsEmpty.style.display = 'block';
  }

  if (cards.length > 0) {
    const isOdd = cards.length % 2 !== 0;
    if (isOdd) {
      const placeholder = document.createElement('div');
      placeholder.className = 'insight-card placeholder';
      insightsGrid.appendChild(placeholder);
    }
  }

  cards.forEach((card) => {
    const title = card.querySelector('.insight-title');
    const desc = card.querySelector('.insight-desc');
    const list = card.querySelector('.insight-list');

    if (title) {
      title.setAttribute('title', title.textContent.trim());
    }

    if (desc) {
      desc.setAttribute('title', desc.textContent.trim());
    }

    if (list) {
      const listItems = Array.from(list.querySelectorAll('li'));
      const items = listItems.map((item) => item.textContent.trim());

      listItems.forEach((item) => {
        item.setAttribute('title', item.textContent.trim());
      });
      list.setAttribute('title', items.join(' ÃÂ· '));
    }
  });
}

if (insightsGridAlt && insightsEmptyAlt && insightsCountAlt) {
  insightsCountAlt.textContent = '0';
  insightsGridAlt.classList.add('is-hidden');
  insightsEmptyAlt.classList.add('is-visible');
}

if (dashboardToggle && dashboardViewDefault && dashboardViewDetail) {
  dashboardToggle.addEventListener('click', () => {
    const currentPage = document.querySelector('.page.is-active');
    if (!currentPage || currentPage.id !== 'page-dashboard') {
      window.location.hash = '#/dashboard';
      return;
    }

    dashboardViewDefault.classList.toggle('is-hidden');
    dashboardViewDetail.classList.toggle('is-hidden');
  });
}

const routeMap = {
  'dashboard': 'page-dashboard',
  'dashboard/automations': 'page-automations',
  'dashboard/schedules': 'page-schedules',
  'dashboard/agents': 'page-agents',
  'dashboard/voice-messaging': 'page-voice-messaging',
  'dashboard/campaigns': 'page-campaigns',
  'dashboard/hybrid-flows': 'page-hybrid-flows',
  'dashboard/executors': 'page-executors',
  'dashboard/packages': 'page-packages',
  'dashboard/channels': 'page-channels',
  'dashboard/channels/telegram': 'page-telegram-config',
  'dashboard/channels/telegram/botfather': 'page-telegram-botfather',
  'dashboard/credentials': 'page-credentials',
  'dashboard/input-files': 'page-input-files',
  'dashboard/users': 'page-users',
  'dashboard/audit': 'page-audit',
  'dashboard/organization': 'page-organization',
  'dashboard/environments': 'page-environments',
  'dashboard/bpmn': 'page-bpmn',
  'dashboard/fluxos': 'page-fluxos',
  'dashboard/history': 'page-history',
  'dashboard/settings': 'page-settings'
};

const sectionMap = {
  'dashboard': 'Painel',
  'dashboard/automations': 'Automa\u00e7\u00e3o',
  'dashboard/schedules': 'Automa\u00e7\u00e3o',
  'dashboard/agents': 'Automa\u00e7\u00e3o',
  'dashboard/voice-messaging': 'Automa\u00e7\u00e3o',
  'dashboard/campaigns': 'Automa\u00e7\u00e3o',
  'dashboard/hybrid-flows': 'Automa\u00e7\u00e3o',
  'dashboard/executors': 'Infraestrutura',
  'dashboard/packages': 'Infraestrutura',
  'dashboard/channels': 'Integrações',
  'dashboard/channels/telegram': 'Integrações',
  'dashboard/channels/telegram/botfather': 'Integrações',
  'dashboard/credentials': 'Armazenamento',
  'dashboard/input-files': 'Armazenamento',
  'dashboard/users': 'Administração',
  'dashboard/audit': 'Administração',
  'dashboard/organization': 'Administração',
  'dashboard/environments': 'Administração',
  'dashboard/bpmn': 'Processos',
  'dashboard/fluxos': 'Processos',
  'dashboard/history': 'Painel de histórico',
  'dashboard/settings': 'Configurações'
};

const normalizeAutomationLabels = () => {
  const automationTrigger = document.querySelector('.nav-trigger[data-menu="automation"] .nav-label');
  if (automationTrigger) automationTrigger.textContent = 'Automa\u00e7\u00e3o';

  const automationLink = document.querySelector('#submenu-automation a[href="#/dashboard/automations"] .submenu-label');
  if (automationLink) automationLink.textContent = 'Automa\u00e7\u00f5es';
};

const normalizeVisiblePortugueseLabels = () => {
  normalizeAutomationLabels();

  const replacements = [
    ['.nav-trigger[data-menu="administration"] .nav-label', 'Administra\u00e7\u00e3o'],
    ['#submenu-administration a[href="#/dashboard/users"] .submenu-label', 'Usu\u00e1rios'],
    ['#submenu-administration a[href="#/dashboard/organization"] .submenu-label', 'Organiza\u00e7\u00e3o'],
    ['#submenu-administration a[href="#/dashboard/environments"] .submenu-label', 'Ambientes'],
    ['#wesProjectDescription', null],
  ];

  replacements.forEach(([selector, text]) => {
    const el = document.querySelector(selector);
    if (el && text) el.textContent = text;
  });

  const dashboardTitle = document.getElementById('dashboardToggle');
  if (dashboardTitle) {
    dashboardTitle.textContent = dashboardTitle.textContent
      .replace(/Automa.+/i, 'Automa\u00e7\u00e3o')
      .replace(/Administra.+/i, 'Administra\u00e7\u00e3o')
      .replace(/Configura.+/i, 'Configura\u00e7\u00f5es');
  }

  document.querySelectorAll('.agents-project-card-name, .agents-project-folder-name').forEach((el) => {
    if (/Opera/.test(el.textContent || '')) {
      el.textContent = 'Opera\u00e7\u00f5es integradas';
    }
  });
};

const updateActivePage = () => {
  normalizeVisiblePortugueseLabels();
  const hash = window.location.hash.replace('#/', '');
  const routeKey = hash || 'dashboard';
  let pageId = routeMap[routeKey];
  if (!pageId && routeKey.startsWith('dashboard/agents/project/')) {
    pageId = 'page-agents';
  }
  if (!pageId) pageId = 'page-dashboard';
  const page = document.getElementById(pageId);

  pages.forEach((pageEl) => pageEl.classList.remove('is-active'));
  if (page) {
    page.classList.add('is-active');
    page.tabIndex = -1;
  }
  forceRouteScrollTop(routeKey);
  window.requestAnimationFrame(() => forceRouteScrollTop(routeKey));
  window.setTimeout(() => forceRouteScrollTop(routeKey), 0);
  window.setTimeout(() => forceRouteScrollTop(routeKey), 50);
  window.setTimeout(() => forceRouteScrollTop(routeKey), 250);

  const navRouteKey = routeKey.startsWith('dashboard/agents/project/')
    ? 'dashboard/agents'
    : routeKey.startsWith('dashboard/channels/')
      ? 'dashboard/channels'
      : routeKey;

  if (hubScopeBar) {
    const hideHubScopeRoutes = [
      'dashboard/automations',
      'dashboard/schedules',
      'dashboard/voice-messaging',
      'dashboard/campaigns',
      'dashboard/hybrid-flows',
      'dashboard/agents',
      'dashboard/environments'
    ];
    const hideHubScope = hideHubScopeRoutes.includes(navRouteKey);
    hubScopeBar.classList.toggle('is-hidden', hideHubScope);
    hubScopeBar.toggleAttribute('hidden', hideHubScope);
    hubScopeBar.setAttribute('aria-hidden', hideHubScope ? 'true' : 'false');
  }

  if (dashboardToggle) {
    const sectionTitle = sectionMap[navRouteKey] || sectionMap[routeKey] || 'Painel';
    dashboardToggle.textContent = sectionTitle;
    if (
      navRouteKey === 'dashboard/automations' ||
      navRouteKey === 'dashboard/schedules' ||
      navRouteKey === 'dashboard/agents' ||
      navRouteKey === 'dashboard/voice-messaging' ||
      navRouteKey === 'dashboard/campaigns' ||
      navRouteKey === 'dashboard/hybrid-flows'
    ) {
      dashboardToggle.textContent = 'Automação';
    }
  }

  navLinks.forEach((link) => link.classList.remove('active'));
  navTriggers.forEach((trigger) => {
    trigger.classList.remove('open');
    trigger.classList.remove('active');
  });
  document.querySelectorAll('.submenu').forEach((menu) => menu.classList.remove('open'));

  if (navRouteKey === 'dashboard') {
    const dashboardLink = document.querySelector('.nav-item[data-route="dashboard"]');
    if (dashboardLink) {
      dashboardLink.classList.add('active');
    }
  } else {
    const activeLink = document.querySelector(`.submenu-item[href="#/${navRouteKey}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
      const navGroup = activeLink.closest('.nav-group');
      if (navGroup) {
        const trigger = navGroup.querySelector('.nav-trigger');
        const submenu = navGroup.querySelector('.submenu');
        if (trigger) {
          trigger.classList.add('active');
          if (appShell && !appShell.classList.contains('sidebar-collapsed')) {
            trigger.classList.add('open');
          }
        }
        if (submenu && appShell && !appShell.classList.contains('sidebar-collapsed')) {
          submenu.classList.add('open');
        }
      }
    }
  }

  applyAgentsProjectRoute();

  if (window.WesDashboardAuth?.isAuthenticated?.()) {
    void refreshHubScopeFromApi();
  }
  if (navRouteKey === 'dashboard/agents' || routeKey.startsWith('dashboard/agents/project/')) {
    void refreshAgentsTableFromApi();
  }
  if (directChatFab) {
    const hideDirectChatFab = routeKey === 'dashboard/agents' || routeKey.startsWith('dashboard/agents/project/');
    directChatFab.hidden = hideDirectChatFab;
    directChatFab.setAttribute('aria-hidden', hideDirectChatFab ? 'true' : 'false');
  }
  document.body.classList.toggle('route-agents', routeKey === 'dashboard/agents' || routeKey.startsWith('dashboard/agents/project/'));
  document.body.classList.toggle('route-executors', routeKey === 'dashboard/executors');
  document.body.classList.toggle('route-channels', routeKey === 'dashboard/channels' || routeKey.startsWith('dashboard/channels/'));
  if (typeof window.ensureAgentsAutoRefresh === 'function') {
    window.ensureAgentsAutoRefresh();
  }
};

window.refreshHubScopeFromApi = refreshHubScopeFromApi;

updateActivePage();
window.updateActivePage = updateActivePage;
window.addEventListener('hashchange', updateActivePage);
window.addEventListener('resize', syncAgentsFolderStripScroller);

scheduleLucideRefresh();

/** Painel lateral Ã¢â¬â chat direto (POST /chat, sem agente) */
(function initDirectChatDrawer() {
  const drawer = document.getElementById('directChatDrawer');
  const fab = document.getElementById('directChatFab');
  const thread = document.getElementById('directChatThread');
  const emptyEl = document.getElementById('directChatEmpty');
  const input = document.getElementById('directChatInput');
  const sendBtn = document.getElementById('directChatSend');
  const errEl = document.getElementById('directChatError');
  const newBtn = document.getElementById('directChatNewBtn');
  if (!drawer || !fab || !thread || !input || !sendBtn) return;

  let conversationId = null;

  function toggleEmpty() {
    if (!emptyEl) return;
    emptyEl.hidden = thread.children.length > 0;
  }

  function appendLine(role, text) {
    const wrap = document.createElement('div');
    wrap.className = `direct-chat-msg direct-chat-msg--${role}`;
    const meta = document.createElement('div');
    meta.className = 'direct-chat-msg-meta';
    meta.textContent = role === 'user' ? 'Você' : 'Assistente';
    const bubble = document.createElement('div');
    bubble.className = 'direct-chat-msg-bubble';
    bubble.textContent = text;
    wrap.appendChild(meta);
    wrap.appendChild(bubble);
    thread.appendChild(wrap);
    thread.scrollTop = thread.scrollHeight;
    toggleEmpty();
  }

  function setError(msg) {
    if (!errEl) return;
    if (!msg) {
      errEl.hidden = true;
      errEl.textContent = '';
      return;
    }
    errEl.textContent = msg;
    errEl.hidden = false;
  }

  function updateSendState() {
    sendBtn.disabled = !input.value.trim();
  }

  function openDrawer() {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('direct-chat-open');
    updateSendState();
    setTimeout(() => input.focus(), 50);
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('direct-chat-open');
  }

  function resetConversation() {
    conversationId = null;
    thread.innerHTML = '';
    toggleEmpty();
    setError('');
  }

  fab.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof window.wesApiFetch !== 'function' || !window.WesDashboardAuth?.isAuthenticated()) {
      window.alert('Chat direto indisponível sem configuração de API.');
      return;
    }
    openDrawer();
  });

  drawer.addEventListener('click', (e) => {
    if (e.target.closest('[data-direct-chat-close]')) closeDrawer();
  });

  newBtn?.addEventListener('click', () => {
    resetConversation();
    input.focus();
  });

  input.addEventListener('input', updateSendState);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendBtn.click();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
  });

  sendBtn.addEventListener('click', async () => {
    const text = input.value.trim();
    if (!text) return;
    setError('');
    if (typeof window.wesApiFetch !== 'function' || !window.WesDashboardAuth?.isAuthenticated()) {
      setError('Chat direto indisponível sem configuração de API.');
      return;
    }
    appendLine('user', text);
    input.value = '';
    updateSendState();
    sendBtn.disabled = true;
    try {
      const payload = {
        messages: [{ role: 'user', content: text }],
        temperature: 0.2,
      };
      if (conversationId) payload.conversation_id = conversationId;
      const res = await window.wesApiFetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const raw = await res.text();
      let data = null;
      try {
        data = raw ? JSON.parse(raw) : null;
      } catch {
        data = { detail: raw };
      }
      if (!res.ok) {
        let msg = raw || res.statusText;
        if (data && typeof data.detail === 'string') msg = data.detail;
        else if (Array.isArray(data?.detail)) {
          msg = data.detail.map((x) => (x.msg ? x.msg : JSON.stringify(x))).join('; ');
        }
        throw new Error(msg);
      }
      if (data.conversation_id) conversationId = data.conversation_id;
      const reply = data.reply != null ? String(data.reply) : '';
      appendLine('assistant', reply);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
    } finally {
      updateSendState();
    }
  });
})();
