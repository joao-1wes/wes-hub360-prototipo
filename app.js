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
const agentsFilterBtn = document.getElementById('agentsFilterBtn');
const agentsFilterMenu = document.getElementById('agentsFilterMenu');
agentsFilterMenu?.classList.remove('two-col');
const FILTER_MENU_LAYOUT_CLASSES = [
  'filter-menu--groups-1',
  'filter-menu--groups-2',
  'filter-menu--groups-3',
  'filter-menu--groups-4',
  'filter-menu--groups-many',
];

function syncFilterMenuLayout(menu) {
  if (!menu) return;
  const filterGroups = Array.from(menu.children).filter((child) => (
    child.classList?.contains('filter-group') && !child.hidden
  ));
  if (!filterGroups.length) return;

  menu.classList.add('filter-menu', 'filter-menu--standard');
  menu.classList.remove(...FILTER_MENU_LAYOUT_CLASSES);
  menu.dataset.filterGroupCount = String(filterGroups.length);

  if (filterGroups.length >= 1 && filterGroups.length <= 4) {
    menu.classList.add(`filter-menu--groups-${filterGroups.length}`);
  } else {
    menu.classList.add('filter-menu--groups-many');
  }
}

function syncFilterMenuLayouts(root = document) {
  root.querySelectorAll('.menu').forEach((menu) => syncFilterMenuLayout(menu));
}

syncFilterMenuLayouts();
const languageSwitcher = document.querySelector('[data-language-switcher]');
const languageToggle = document.querySelector('[data-language-toggle]');
const languageMenu = document.querySelector('[data-language-menu]');
const languageOptions = Array.from(document.querySelectorAll('[data-language-option]'));
const currentLanguageFlag = document.querySelector('[data-language-flag]');
const currentLanguageLabel = document.querySelector('[data-language-label]');
const themeLightLabel = document.querySelector('[data-theme-light-label]');
const themeDarkLabel = document.querySelector('[data-theme-dark-label]');
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
const openCredentialModalBtn = document.getElementById('openCredentialModalBtn');
const automationCredentialsAddButton = document.getElementById('automationCredentialsAddButton');
const credentialsTable = document.getElementById('credentialsTable');
const credentialModal = document.getElementById('credentialModal');
const credentialModalForm = document.getElementById('credentialModalForm');
const credentialModalTitle = document.getElementById('credentialModalTitle');
const credentialNameInput = document.getElementById('credentialNameInput');
const credentialDescriptionInput = document.getElementById('credentialDescriptionInput');
const credentialTypeSelect = document.getElementById('credentialTypeSelect');
const credentialDynamicFields = document.getElementById('credentialDynamicFields');
const credentialModalSubmitBtn = document.getElementById('credentialModalSubmitBtn');
const inputFilesTable = document.getElementById('inputFilesTable');
const inputFileModal = document.getElementById('inputFileModal');
const inputFileModalForm = document.getElementById('inputFileModalForm');
const inputFileNameInput = document.getElementById('inputFileNameInput');
const inputFileTypeSelect = document.getElementById('inputFileTypeSelect');
const inputFileModalUploadInput = document.getElementById('inputFileModalUploadInput');
const inputFileModalUploadButton = document.getElementById('inputFileModalUploadButton');
const inputFileModalUploadTitle = document.getElementById('inputFileModalUploadTitle');
const inputFileModalUploadMeta = document.getElementById('inputFileModalUploadMeta');
const inputFileModalUploadHint = document.getElementById('inputFileModalUploadHint');
const voiceMessagingFilterBtn = document.getElementById('voiceMessagingFilterBtn');
const voiceMessagingFilterMenu = document.getElementById('voiceMessagingFilterMenu');
const openVoiceMessagingInsightsPage = document.getElementById('openVoiceMessagingInsightsPage');
const openVoiceMessagingCreatePage = document.getElementById('openVoiceMessagingCreatePage');
const voiceMessagingInsightsBackBtn = document.getElementById('voiceMessagingInsightsBackBtn');
const voiceMessagingInsightsChartCanvas = document.getElementById('voiceMessagingInsightsChart');
const voiceMessagingCreateBackBtn = document.getElementById('voiceMessagingCreateBackBtn');
const voiceMessagingCreateCancelBtn = document.getElementById('voiceMessagingCreateCancelBtn');
const voiceMessagingNextBtn = document.getElementById('voiceMessagingNextBtn');
const voiceMessagingCampaignMessageInput = document.getElementById('voiceMessagingCampaignMessageInput');
const voiceMessagingOperationNameInput = document.getElementById('voiceMessagingOperationNameInput');
const voiceMessagingAgentSelect = document.getElementById('voiceMessagingAgentSelect');
const voiceMessagingAgentPreview = document.getElementById('voiceMessagingAgentPreview');
const voiceMessagingAgentHint = document.getElementById('voiceMessagingAgentHint');
const voiceMessagingProviderOptions = Array.from(document.querySelectorAll('.voice-messaging-provider-option'));
const voiceMessagingProviderRadios = Array.from(document.querySelectorAll('.voice-messaging-provider-radio'));
const voiceMessagingSimulationMode = document.getElementById('voiceMessagingSimulationMode');
const voiceMessagingConnectionNameInput = document.getElementById('voiceMessagingConnectionNameInput');
const voiceMessagingConnectionEndpointInput = document.getElementById('voiceMessagingConnectionEndpointInput');
const voiceMessagingConnectionAccountInput = document.getElementById('voiceMessagingConnectionAccountInput');
const voiceMessagingConnectionTokenInput = document.getElementById('voiceMessagingConnectionTokenInput');
const voiceMessagingTestConnectionBtn = document.getElementById('voiceMessagingTestConnectionBtn');
const voiceMessagingConnectionFeedback = document.getElementById('voiceMessagingConnectionFeedback');
const voiceMessagingConnectionProgress = document.getElementById('voiceMessagingConnectionProgress');
const voiceMessagingConnectionStatus = document.getElementById('voiceMessagingConnectionStatus');
const voiceMessagingConnectionStatusIcon = document.getElementById('voiceMessagingConnectionStatusIcon');
const voiceMessagingConnectionStatusMessage = document.getElementById('voiceMessagingConnectionStatusMessage');
const voiceMessagingRecipientsInput = document.getElementById('voiceMessagingRecipientsInput');
const voiceMessagingReviewModal = document.getElementById('voiceMessagingReviewModal');
const voiceMessagingReviewList = document.getElementById('voiceMessagingReviewList');
const voiceMessagingReviewConfirmBtn = document.getElementById('voiceMessagingReviewConfirmBtn');
const campaignsSearchInput = document.getElementById('campaignsSearchInput');
const campaignsFilterBtn = document.getElementById('campaignsFilterBtn');
const campaignsFilterBtnLabel = document.getElementById('campaignsFilterBtnLabel');
const campaignsFilterMenu = document.getElementById('campaignsFilterMenu');
const campaignsCreateBtns = document.querySelectorAll('.campaigns-create-btn');
const campaignsCreateBackBtn = document.getElementById('campaignsCreateBackBtn');
const campaignsCreateCancelBtn = document.getElementById('campaignsCreateCancelBtn');
const campaignNameInput = document.getElementById('campaignNameInput');
const campaignDescriptionInput = document.getElementById('campaignDescriptionInput');
const campaignAgentSelect = document.getElementById('campaignAgentSelect');
const campaignIntegrationRadios = document.querySelectorAll('input[name="campaignIntegration"]');
const campaignIntegrationTargetSelect = document.getElementById('campaignIntegrationTargetSelect');
const campaignIntegrationTargetIcon = document.getElementById('campaignIntegrationTargetIcon');
const campaignIntegrationTargetHint = document.getElementById('campaignIntegrationTargetHint');
const campaignScheduleInput = document.getElementById('campaignScheduleInput');
const campaignScriptInput = document.getElementById('campaignScriptInput');
const campaignRecipientsInput = document.getElementById('campaignRecipientsInput');
const campaignImportCsvBtn = document.getElementById('campaignImportCsvBtn');
const campaignCsvInput = document.getElementById('campaignCsvInput');
const campaignCsvHint = document.getElementById('campaignCsvHint');
const automationFilesAddButton = document.getElementById('automationFilesAiImprove');
const inputFilesUploadButton = document.getElementById('inputFilesUploadButton');
const inputFilesUploadInput = document.getElementById('inputFilesUploadInput');
const campaignOptimizeScriptBtn = document.getElementById('campaignOptimizeScriptBtn');
const campaignCreatePageTitle = document.getElementById('campaignCreatePageTitle');
const campaignCreatePageSubtitle = document.getElementById('campaignCreatePageSubtitle');
const campaignCreateReviewBtn = document.getElementById('campaignCreateReviewBtn');
const campaignReviewModal = document.getElementById('campaignReviewModal');
const campaignReviewList = document.getElementById('campaignReviewList');
const campaignReviewConfirmBtn = document.getElementById('campaignReviewConfirmBtn');
const campaignDetailsModal = document.getElementById('campaignDetailsModal');
const campaignDetailsList = document.getElementById('campaignDetailsList');
const campaignsTable = document.querySelector('#page-campaigns .campaigns-data-table');
const hybridFlowsFilterBtn = document.getElementById('hybridFlowsFilterBtn');
const hybridFlowsFilterMenu = document.getElementById('hybridFlowsFilterMenu');
const hybridHistoryFilterBtn = document.getElementById('hybridHistoryFilterBtn');
const hybridHistoryFilterMenu = document.getElementById('hybridHistoryFilterMenu');
const openManageRolesModal = document.getElementById('openManageRolesModal');
const manageRolesModal = document.getElementById('manageRolesModal');
const manageRolesModalForm = document.getElementById('manageRolesModalForm');
const manageRolesName = document.getElementById('manageRolesName');
const manageRolesSubmit = document.getElementById('manageRolesSubmit');
const openCreateUserModal = document.getElementById('openCreateUserModal');
const usersTable = document.querySelector('#page-users .users-table');
const organizationsTable = document.querySelector('#page-organizations .organizations-table');
const companiesTable = document.querySelector('#page-companies .companies-table');
const historyTabs = document.querySelectorAll('#page-agent-history .tab');
const historyPanels = document.querySelectorAll('#page-agent-history .tab-panel');
const historyAuditPanel = document.getElementById('historyAuditPanel');
const auditLegacyPage = document.getElementById('page-audit');
const agentHistoryPage = document.getElementById('page-agent-history');
const agentHistorySearchInput = document.getElementById('agentHistorySearchInput');
const agentHistoryClientViewToggle = document.getElementById('agentHistoryClientViewToggle');
const agentHistoryViewToggleTitle = document.getElementById('agentHistoryViewToggleTitle');
const agentHistoryViewToggleLabel = document.getElementById('agentHistoryViewToggleLabel');
const agentHistoryMetricsFilterField = document.getElementById('agentHistoryMetricsFilterField');
const agentHistoryFilterBtn = document.getElementById('agentHistoryFilterBtn');
const agentHistoryFilterBtnLabel = document.getElementById('agentHistoryFilterBtnLabel');
const agentHistoryFilterMenu = document.getElementById('agentHistoryFilterMenu');
const agentHistoryPeriodBtn = document.getElementById('agentHistoryPeriodBtn');
const agentHistoryPeriodMenu = document.getElementById('agentHistoryPeriodMenu');
const agentHistoryPeriodOptions = Array.from(document.querySelectorAll('#agentHistoryPeriodMenu .audit-period-option'));
const agentHistoryRangeFields = Array.from(document.querySelectorAll('#agentHistoryPeriodMenu .audit-range-only'));
const agentHistorySingleField = document.querySelector('#agentHistoryPeriodMenu .audit-single-only');
const agentHistoryStartDateInput = document.getElementById('agentHistoryStartDate');
const agentHistoryEndDateInput = document.getElementById('agentHistoryEndDate');
const agentHistorySingleDateInput = document.getElementById('agentHistorySingleDate');
const agentHistoryApplyPeriodBtn = document.getElementById('agentHistoryApplyPeriodBtn');
const agentHistoryTable = document.getElementById('agentHistoryTable');
const agentHistoryConversationModal = document.getElementById('agentHistoryConversationModal');
const agentHistoryConversationTitle = document.getElementById('agentHistoryConversationTitle');
const agentHistoryConversationSubtitle = document.getElementById('agentHistoryConversationSubtitle');
const agentHistoryConversationBody = document.getElementById('agentHistoryConversationBody');
const agentHistoryDetailsModal = document.getElementById('agentHistoryDetailsModal');
const agentHistoryDetailsSubtitle = document.getElementById('agentHistoryDetailsSubtitle');
const agentHistoryDetailsGrid = document.getElementById('agentHistoryDetailsGrid');
const agentHistoryKnowledgeCount = document.getElementById('agentHistoryKnowledgeCount');
const agentHistoryKnowledgeList = document.getElementById('agentHistoryKnowledgeList');
const agentHistoryOpenConversationBtn = document.getElementById('agentHistoryOpenConversationBtn');
const companyUsersModal = document.getElementById('companyUsersModal');
const companyUsersModalTitle = document.getElementById('companyUsersModalTitle');
const companyUserSelect = document.getElementById('companyUserSelect');
const companyAddUserButton = document.getElementById('companyAddUserButton');
const companyUsersList = document.getElementById('companyUsersList');
const companyUsersCount = document.getElementById('companyUsersCount');
const companyUsersSaveButton = document.getElementById('companyUsersSaveButton');
const createUserModal = document.getElementById('createUserModal');
const createUserModalForm = document.getElementById('createUserModalForm');
const createUserTitle = document.getElementById('createUserTitle');
const createUserName = document.getElementById('createUserName');
const createUserEmail = document.getElementById('createUserEmail');
const createUserPassword = document.getElementById('createUserPassword');
const createUserStatus = document.getElementById('createUserStatus');
const createUserRole = document.getElementById('createUserRole');
const createUserSubmit = document.getElementById('createUserSubmit');
const openSkillModal = document.getElementById('openSkillModal');
const skillModal = document.getElementById('skillModal');
const skillModalForm = document.getElementById('skillModalForm');
const skillsTable = document.getElementById('skillsTable');
const skillModalTitle = document.getElementById('skillModalTitle');
const skillNameInput = document.getElementById('skillNameInput');
const skillStatusInput = document.getElementById('skillStatusInput');
const skillStatusValue = document.getElementById('skillStatusValue');
const skillDescriptionInput = document.getElementById('skillDescriptionInput');
const skillFileInput = document.getElementById('skillFileInput');
const skillFileName = document.getElementById('skillFileName');
const skillFileSection = document.getElementById('skillFileSection');
const skillUploadDropzone = document.getElementById('skillUploadDropzone');
const skillUploadChooseLink = document.getElementById('skillUploadChooseLink');
const skillUploadEmptyState = document.getElementById('skillUploadEmptyState');
const skillUploadSelectedState = document.getElementById('skillUploadSelectedState');
const skillFileDeleteButton = document.getElementById('skillFileDeleteButton');
const skillFileFeedback = document.getElementById('skillFileFeedback');
const skillModalSubmit = document.getElementById('skillModalSubmit');
const mcpsGrid = document.getElementById('mcpsGrid');
const mcpsTable = document.getElementById('mcpsTable');
const mcpsSearchInput = document.getElementById('mcpsSearchInput');
const mcpsEmptyState = document.getElementById('mcpsEmptyState');
const mcpsGridViewBtn = document.getElementById('mcpsGridViewBtn');
const mcpsListViewBtn = document.getElementById('mcpsListViewBtn');
const openMcpCreateModalBtn = document.getElementById('openMcpCreateModalBtn');
const mcpConnectionModal = document.getElementById('mcpConnectionModal');
const mcpConnectionModalLogo = document.getElementById('mcpConnectionModalLogo');
const mcpConnectionModalName = document.getElementById('mcpConnectionModalName');
const mcpConnectionModalStatus = document.getElementById('mcpConnectionModalStatus');
const mcpConnectionModalDescription = document.getElementById('mcpConnectionModalDescription');
const mcpConnectionDisconnectBtn = document.getElementById('mcpConnectionDisconnectBtn');
const mcpConnectionReconnectBtn = document.getElementById('mcpConnectionReconnectBtn');
const mcpAuthModal = document.getElementById('mcpAuthModal');
const mcpAuthForm = document.getElementById('mcpAuthForm');
const mcpAuthModalLogo = document.getElementById('mcpAuthModalLogo');
const mcpAuthModalName = document.getElementById('mcpAuthModalName');
const mcpAuthModalDescription = document.getElementById('mcpAuthModalDescription');
const mcpAuthModalNotice = document.getElementById('mcpAuthModalNotice');
const mcpAuthSubmitBtn = document.getElementById('mcpAuthSubmitBtn');
const mcpCreateModal = document.getElementById('mcpCreateModal');
const mcpCreateForm = document.getElementById('mcpCreateForm');
const mcpCreateName = document.getElementById('mcpCreateName');
const mcpCreateUrl = document.getElementById('mcpCreateUrl');
const mcpCreateAuthType = document.getElementById('mcpCreateAuthType');
const mcpCreateBasicFields = document.getElementById('mcpCreateBasicFields');
const mcpCreateBasicUsername = document.getElementById('mcpCreateBasicUsername');
const mcpCreateBasicPassword = document.getElementById('mcpCreateBasicPassword');
const mcpCreateCredentialField = document.getElementById('mcpCreateCredentialField');
const mcpCreateCredentialLabel = document.getElementById('mcpCreateCredentialLabel');
const mcpCreateCredentialHint = document.getElementById('mcpCreateCredentialHint');
const mcpCreateCredential = document.getElementById('mcpCreateCredential');
const mcpCreateProgress = document.getElementById('mcpCreateProgress');
const mcpCreateProgressTitle = document.getElementById('mcpCreateProgressTitle');
const mcpCreateProgressStatus = document.getElementById('mcpCreateProgressStatus');
const mcpCreateSubmitBtn = document.getElementById('mcpCreateSubmitBtn');
const auditFilterBtn = document.getElementById('auditFilterBtn');
const auditFilterMenu = document.getElementById('auditFilterMenu');
const auditPeriodBtn = document.getElementById('auditPeriodBtn');
const auditPeriodMenu = document.getElementById('auditPeriodMenu');
const auditSearchInput = document.getElementById('auditSearchInput');
const auditTableRows = Array.from(document.querySelectorAll('#page-audit .audit-table .data-row:not(.header)'));
const auditPagePagination = document.getElementById('auditPagePagination');
const auditPageNumbers = document.getElementById('auditPageNumbers');
const auditPeriodOptions = Array.from(document.querySelectorAll('#auditPeriodMenu .audit-period-option'));
const auditRangeFields = Array.from(document.querySelectorAll('#auditPeriodMenu .audit-range-only'));
const auditSingleField = document.querySelector('#auditPeriodMenu .audit-single-only');
const auditStartDateInput = document.getElementById('auditStartDate');
const auditEndDateInput = document.getElementById('auditEndDate');
const auditSingleDateInput = document.getElementById('auditSingleDate');
const auditApplyPeriodBtn = document.getElementById('auditApplyPeriodBtn');
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
const agentChatTitle = document.getElementById('agentChatTitle');
const agentChatSubtitle = document.getElementById('agentChatSubtitle');
const chatAttachToggle = document.querySelector('.chat-attach-toggle');
const chatAttachMenu = document.querySelector('.chat-attach-menu');
const chatSkillToggle = document.querySelector('.chat-skill-toggle');
const chatSkillMenu = document.getElementById('chatSkillTopList')?.closest('[data-chat-skill-menu-root]')
  || document.querySelector('.chat-attach-group [data-chat-skill-menu-root]');
const chatVoiceSkillWrap = document.getElementById('chatVoiceSkillWrap');
const chatVoiceSkillToggle = document.getElementById('chatVoiceSkillToggle');
const chatVoiceSkillMenu = document.getElementById('chatVoiceSkillMenu');
const chatSkillMenus = Array.from(document.querySelectorAll('[data-chat-skill-menu-root]'));
const chatSkillTopLists = Array.from(document.querySelectorAll('[data-chat-skill-top-list]'));
const chatSkillAllLists = Array.from(document.querySelectorAll('[data-chat-skill-all-list]'));
const chatSkillSearchInputs = Array.from(document.querySelectorAll('[data-chat-skill-search-input]'));
const chatSkillEmptyStates = Array.from(document.querySelectorAll('[data-chat-skill-empty-state]'));
const chatSkillCountBadges = Array.from(document.querySelectorAll('[data-chat-skill-count-badge]'));
const chatSkillViewAllButtons = Array.from(document.querySelectorAll('[data-chat-skill-view-all-button]'));
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
const chatVoiceStartButton = document.getElementById('chatVoiceStartBtn');
const chatVoiceMuteButton = document.getElementById('chatVoiceMuteBtn');
const chatVoiceHistoryButton = document.getElementById('chatVoiceHistoryBtn');
const chatVoiceMenuPopover = document.getElementById('chatVoiceMenuPopover');
const chatVoiceSelector = document.getElementById('chatVoiceSelector');
const chatVoiceSelectorTrigger = document.getElementById('chatVoiceSelectorTrigger');
const chatVoiceSelectorValue = document.getElementById('chatVoiceSelectorValue');
const chatVoiceInterruptToggle = document.getElementById('chatVoiceInterruptToggle');
const chatVoiceInterruptSensitivity = document.getElementById('chatVoiceInterruptSensitivity');
const chatVoiceInterruptSensitivityValue = document.getElementById('chatVoiceInterruptSensitivityValue');
const chatVoiceInterruptSensitivityDescription = document.getElementById('chatVoiceInterruptSensitivityDescription');
const chatVoiceSensitivityGroup = document.getElementById('chatVoiceSensitivityGroup');
const chatVoiceStatus = document.getElementById('chatVoiceStatus');
const chatVoiceUserLine = document.getElementById('chatVoiceUserLine');
const chatVoiceAgentLine = document.getElementById('chatVoiceAgentLine');
const openBillingModal = document.getElementById('openBillingModal');
const billingModal = document.getElementById('billingModal');
const confirmActionModal = document.getElementById('confirmActionModal');
const confirmActionModalMessage = document.getElementById('confirmActionModalMessage');
const confirmActionModalConfirm = document.getElementById('confirmActionModalConfirm');
const rotatePublicLinkModal = document.getElementById('rotatePublicLinkModal');
const rotatePublicLinkConfirm = document.getElementById('rotatePublicLinkConfirm');
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
const profilePage = document.getElementById('page-profile');
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
const automationCreateBackBtn = document.getElementById('automationCreateBackBtn');
const automationCreateCancelBtn = document.getElementById('automationCreateCancelBtn');
const automationCreateForm = document.getElementById('automationCreateForm');
const automationCreateError = document.getElementById('automationCreateError');
const automationCreateTitle = document.getElementById('automationCreateTitle');
const automationCreateSubtitle = document.getElementById('automationCreateSubtitle');
const automationCreateName = document.getElementById('automationCreateName');
const automationCreatePriority = document.getElementById('automationCreatePriority');
const automationCreateDescription = document.getElementById('automationCreateDescription');
const automationCreateGenerateBtn = document.getElementById('automationCreateGenerateBtn');
const automationCreateUploadBtn = document.getElementById('automationCreateUploadBtn');
const automationCreateUploadInput = document.getElementById('automationCreateUploadInput');
const automationCreateUploadHint = document.getElementById('automationCreateUploadHint');
const automationUploadSelectedState = document.getElementById('automationUploadSelectedState');
const automationUploadSelectedName = document.getElementById('automationUploadSelectedName');
const automationUploadSelectedMeta = document.getElementById('automationUploadSelectedMeta');
const automationUploadChangeBtn = document.getElementById('automationUploadChangeBtn');
const automationUploadZipSummary = document.getElementById('automationUploadZipSummary');
const automationUploadZipTitle = document.getElementById('automationUploadZipTitle');
const automationUploadZipList = document.getElementById('automationUploadZipList');
const automationCreateCodePreview = document.getElementById('automationCreateCodePreview');
const automationCreateCodeContent = document.getElementById('automationCreateCodeContent');
const automationCreateCodeStatus = document.getElementById('automationCreateCodeStatus');
const automationCreateCodeBadge = document.getElementById('automationCreateCodeBadge');
const automationCreateCodeApproveBtn = document.getElementById('automationCreateCodeApproveBtn');
const automationCreateCodeRejectBtn = document.getElementById('automationCreateCodeRejectBtn');
const automationCreateCodeRejectedState = document.getElementById('automationCreateCodeRejectedState');
const automationCodeHistoryToggle = document.getElementById('automationCodeHistoryToggle');
const automationCodeHistoryPanel = document.getElementById('automationCodeHistoryPanel');
const automationCodeHistoryList = document.getElementById('automationCodeHistoryList');
const automationCodeHistoryEmpty = document.getElementById('automationCodeHistoryEmpty');
const automationAiEditPrompt = document.getElementById('automationAiEditPrompt');
const automationAiEditInput = document.getElementById('automationAiEditInput');
const automationAiEditSend = document.getElementById('automationAiEditSend');
const automationCreateLanguage = document.getElementById('automationCreateLanguage');
const automationCreateScheduled = document.getElementById('automationCreateScheduled');
const automationCreateSchedulePanel = document.getElementById('automationCreateSchedulePanel');
const automationCreateScheduleTime = document.getElementById('automationCreateScheduleTime');
const automationCreateScheduleFrequency = document.getElementById('automationCreateScheduleFrequency');
const automationCreateScheduleStartDate = document.getElementById('automationCreateScheduleStartDate');
const automationCreateScheduleEndDate = document.getElementById('automationCreateScheduleEndDate');
const automationCreateCustomDays = document.getElementById('automationCreateCustomDays');
const automationCreateInputFile = document.getElementById('automationCreateInputFile');
const automationCreateInputFileSummary = document.getElementById('automationCreateInputFileSummary');
const automationCreateCredential = document.getElementById('automationCreateCredential');
const automationCreateCredentialSummary = document.getElementById('automationCreateCredentialSummary');
const automationCreateSubmit = document.getElementById('automationCreateSubmit');
const automationResourcePickerModal = document.getElementById('automationResourcePickerModal');
const automationResourcePickerTitle = document.getElementById('automationResourcePickerTitle');
const automationResourcePickerList = document.getElementById('automationResourcePickerList');
const automationResourcePickerEmpty = document.getElementById('automationResourcePickerEmpty');
const automationResourcePickerApply = document.getElementById('automationResourcePickerApply');
const executionDetailsModal = document.getElementById('executionDetailsModal');
const executionDetailsId = document.getElementById('executionDetailsId');
const executionDetailsStart = document.getElementById('executionDetailsStart');
const executionDetailsEnd = document.getElementById('executionDetailsEnd');
const executionDetailsDuration = document.getElementById('executionDetailsDuration');
const executionDetailsStatus = document.getElementById('executionDetailsStatus');
const executionDetailsRecording = document.getElementById('executionDetailsRecording');
const executionDetailsRecordingButton = document.getElementById('executionDetailsRecordingButton');
const executionLogsTitle = document.getElementById('executionLogsTitle');
const executionLogsLevelFilter = document.getElementById('executionLogsLevelFilter');
const executionLogsSearch = document.getElementById('executionLogsSearch');
const executionLogsClear = document.getElementById('executionLogsClear');
const executionLogsRows = document.getElementById('executionLogsRows');
const executionRecordingModal = document.getElementById('executionRecordingModal');
const executionRecordingModalTitle = document.getElementById('executionRecordingModalTitle');
const executionRecordingId = document.getElementById('executionRecordingId');
const executionRecordingDuration = document.getElementById('executionRecordingDuration');
const executionRecordingRecordedAt = document.getElementById('executionRecordingRecordedAt');
const executionRecordingName = document.getElementById('executionRecordingName');
const executionRecordingMode = document.getElementById('executionRecordingMode');
const executionRecordingSize = document.getElementById('executionRecordingSize');
const executionRecordingStorage = document.getElementById('executionRecordingStorage');
const executionRecordingDownload = document.getElementById('executionRecordingDownload');
const auditDetailsModal = document.getElementById('auditDetailsModal');
const auditDetailsDate = document.getElementById('auditDetailsDate');
const auditDetailsUser = document.getElementById('auditDetailsUser');
const auditDetailsAction = document.getElementById('auditDetailsAction');
const auditDetailsIp = document.getElementById('auditDetailsIp');
const auditDetailsTarget = document.getElementById('auditDetailsTarget');
const auditDetailsChange = document.getElementById('auditDetailsChange');
const auditDetailsSummary = document.getElementById('auditDetailsSummary');
const hybridFlowCancelBtn = document.getElementById('hybridFlowCancelBtn');
const hybridFlowCreateBackBtn = document.getElementById('hybridFlowCreateBackBtn');
const hybridFlowNextBtn = document.getElementById('hybridFlowNextBtn');
const hybridFlowReviewModal = document.getElementById('hybridFlowReviewModal');
const hybridFlowReviewList = document.getElementById('hybridFlowReviewList');
const hybridFlowReviewConfirmBtn = document.getElementById('hybridFlowReviewConfirmBtn');
const hybridFlowDiscardModal = document.getElementById('hybridFlowDiscardModal');
const hybridFlowDiscardConfirmBtn = document.getElementById('hybridFlowDiscardConfirmBtn');
const hybridFlowsTable = document.getElementById('hybridFlowsTable');
const hybridFlowCreatePageTitle = document.querySelector('#page-hybrid-flows-create .voice-messaging-create-title-wrap h2');
const hybridFlowCreatePageSubtitle = document.querySelector('#page-hybrid-flows-create .voice-messaging-create-title-wrap .page-subtitle');
const voiceMessagingTable = document.getElementById('voiceMessagingTable');
const voiceMessagingCreatePage = document.getElementById('page-voice-messaging-create');
const voiceMessagingCreatePageTitle = voiceMessagingCreatePage?.querySelector('.voice-messaging-create-title-wrap h2');
const voiceMessagingCreatePageSubtitle = voiceMessagingCreatePage?.querySelector('.voice-messaging-create-title-wrap .page-subtitle');
const hybridFlowHistoryFlowName = document.getElementById('hybridFlowHistoryFlowName');
const hybridFlowHistoryBackBtn = document.getElementById('hybridFlowHistoryBackBtn');
const hybridHistoryDetailsModal = document.getElementById('hybridHistoryDetailsModal');
const hybridHistoryCopyIdBtn = document.getElementById('hybridHistoryCopyIdBtn');
const hybridHistoryDetailsBackBtn = document.getElementById('hybridHistoryDetailsBackBtn');
const hybridHistoryPageCopyIdBtn = document.getElementById('hybridHistoryPageCopyIdBtn');
const environmentsTable = document.querySelector('#page-environments .environments-table');
const environmentsCompanySelect = document.getElementById('environmentsCompanySelect');
const environmentsCompanySelectWrap = document.getElementById('environmentsCompanySelectWrap');
const openCreateEnvironmentModal = document.getElementById('openCreateEnvironmentModal');
const environmentModal = document.getElementById('environmentModal');
const environmentModalForm = document.getElementById('environmentModalForm');
const environmentName = document.getElementById('environmentName');
const environmentOwner = document.getElementById('environmentOwner');
const environmentDescription = document.getElementById('environmentDescription');
const environmentModalSubmit = document.getElementById('environmentModalSubmit');
const environmentProjectsSummary = document.getElementById('environmentProjectsSummary');
const environmentAgentsSummary = document.getElementById('environmentAgentsSummary');
const environmentUsersSummary = document.getElementById('environmentUsersSummary');
const environmentProjectsList = document.getElementById('environmentProjectsList');
const environmentAgentsList = document.getElementById('environmentAgentsList');
const environmentUsersList = document.getElementById('environmentUsersList');
const dashboardQuickActionsEditButtons = document.querySelectorAll('.dashboard-quick-actions-edit');
const dashboardQuickActionsContainers = document.querySelectorAll('[data-dashboard-quick-actions]');
const dashboardQuickActionsModal = document.getElementById('dashboardQuickActionsModal');
const dashboardQuickActionsList = document.getElementById('dashboardQuickActionsList');
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
const executionsTable = document.querySelector('#page-automations .executions-table');
const schedulesTable = document.querySelector('#page-automations .schedules-table');
const exportSchedulesCsvButton = document.getElementById('exportSchedulesCsvButton');
const executorTabs = document.querySelectorAll('#page-executors .tab');
const executorPanels = document.querySelectorAll('#page-executors .tab-panel');
const usersTabs = document.querySelectorAll('#page-users .tab');
const usersPanels = document.querySelectorAll('#page-users .tab-panel');
const orgTabs = document.querySelectorAll('#page-organization .tab');
const orgPanels = document.querySelectorAll('#page-organization .tab-panel');
const orgActionButtons = document.querySelectorAll('#page-organization .org-action');

const HYBRID_FLOWS_STORAGE_KEY = 'hybridFlowsCreated';
const VOICE_MESSAGING_STORAGE_KEY = 'voiceMessagingCreated';
const DASHBOARD_QUICK_ACTIONS_STORAGE_KEY = 'dashboardQuickActionsSelection';
const MCP_VIEW_MODE_STORAGE_KEY = 'mcpsViewMode';
const MCP_CONNECTIONS_STATE_STORAGE_KEY = 'mcpsConnectionsState';
const MCP_CUSTOM_CONNECTIONS_STORAGE_KEY = 'mcpsCustomConnections';
const DASHBOARD_QUICK_ACTIONS_CATALOG = Object.freeze([
  { id: 'run-automation', label: 'Rodar automação', icon: 'bolt', variant: 'outline', route: '#/dashboard/automations', description: 'Abrir a área de automações para executar ou criar novos fluxos.' },
  { id: 'create-schedule', label: 'Criar horário', icon: 'calendar_month', variant: 'outline', route: '#/dashboard/schedules', triggerId: 'openCriarAgendamentoModal', description: 'Ir para agendamentos e abrir a criação de um novo horário.' },
  { id: 'upload-package', label: 'Subir pacote', icon: 'upload_file', variant: 'outline', route: '#/dashboard/packages', description: 'Acessar pacotes para publicar novas versões de automação.' },
  { id: 'register-executor', label: 'Registrar executor', icon: 'computer', variant: 'outline', route: '#/dashboard/executors', triggerId: 'openExecutorModal', description: 'Abrir a gestão de executores para cadastrar uma nova máquina.' },
  { id: 'create-agent', label: 'Criar agente', icon: 'smart_toy', variant: 'outline', route: '#/dashboard/agents', triggerId: 'openAgentModal', description: 'Abrir o modal de criação de agente.' },
  { id: 'create-automation', label: 'Criar automação', icon: 'bolt', variant: 'outline', route: '#/dashboard/automations/new', description: 'Abrir a página de criação de automação.' },
  { id: 'view-agents', label: 'Ver agentes', icon: 'groups', variant: 'outline', route: '#/dashboard/agents', description: 'Acessar a lista de agentes e projetos.' },
  { id: 'view-automations', label: 'Ver automações', icon: 'list_alt', variant: 'outline', route: '#/dashboard/automations', description: 'Acessar a lista de automações e execuções.' },
  { id: 'access-project', label: 'Acessar projeto', icon: 'folder_open', variant: 'outline', route: '#/dashboard/agents', description: 'Acessar a área de agentes e projetos.' },
  { id: 'manage-skills', label: 'Gerenciar habilidades', icon: 'psychology', variant: 'outline', route: '#/dashboard/skills', description: 'Abrir a tela de habilidades do painel.' },
  { id: 'manage-connections', label: 'Gerenciar conexões', icon: 'hub', variant: 'outline', route: '#/dashboard/mcps', description: 'Abrir a tela de conexões e MCPs.' },
  { id: 'view-projects', label: 'Ver projetos', icon: 'folder', variant: 'outline', route: '#/dashboard/agents', description: 'Acessar a área com os projetos vinculados aos agentes.' },
  { id: 'view-executors', label: 'Ver executores', icon: 'desktop_windows', variant: 'outline', route: '#/dashboard/executors', description: 'Abrir a lista de executores cadastrados.' },
  { id: 'view-packages', label: 'Ver pacotes', icon: 'inventory_2', variant: 'outline', route: '#/dashboard/packages', description: 'Abrir a lista de pacotes publicados.' },
]);
const DASHBOARD_QUICK_ACTIONS_DEFAULT = Object.freeze([
  'run-automation',
  'create-schedule',
  'upload-package',
  'register-executor',
]);
const DASHBOARD_QUICK_ACTIONS_LIMIT = 4;
let dashboardQuickActionsSelection = [...DASHBOARD_QUICK_ACTIONS_DEFAULT];
const MCP_CONNECTIONS_CATALOG = Object.freeze([
  { id: 'filesystem-mcp', name: 'Filesystem', description: 'Acessa arquivos e diretórios do workspace com segurança para leitura, escrita e automações internas.', accent: '#2563eb', mark: 'FS', connected: false, updatedAt: '16/06/2026' },
  { id: 'google-drive-mcp', name: 'Google Drive', description: 'Conecta documentos e pastas do Google Drive para leitura, organização e uso pelos agentes.', accent: '#16a34a', mark: 'GD', connected: true, updatedAt: '14/06/2026' },
  { id: 'gitlab-mcp', name: 'GitLab', description: 'Integra repositórios, merge requests, issues e pipelines hospedados no GitLab.', accent: '#ea580c', mark: 'GL', connected: false, updatedAt: '16/06/2026' },
  { id: 'gmail-mcp', name: 'Gmail', description: 'Permite leitura, triagem e apoio a fluxos com mensagens da caixa de entrada do Gmail.', accent: '#dc2626', mark: 'GM', connected: true, updatedAt: '15/06/2026' },
  { id: 'zoho-mcp', name: 'ZOHO', description: 'Conecta produtos Zoho para consultas operacionais, CRM e automações administrativas.', accent: '#0891b2', mark: 'ZH', connected: false, updatedAt: '16/06/2026' },
  { id: 'postgresql-mcp', name: 'PostgreSQL', description: 'Acessa bancos PostgreSQL para consultas estruturadas, relatórios e enriquecimento de contexto.', accent: '#0f766e', mark: 'PG', connected: false, updatedAt: '16/06/2026' },
  { id: 'github-mcp', name: 'GitHub', description: 'Integra repositórios, pull requests, issues, actions e arquivos versionados no GitHub.', accent: '#111827', mark: 'GH', connected: true, updatedAt: '15/06/2026' },
  { id: 'sqlite-mcp', name: 'SQLite', description: 'Permite ler e consultar bases SQLite locais para testes, protótipos e cenários embarcados.', accent: '#1d4ed8', mark: 'SQ', connected: false, updatedAt: '16/06/2026' },
  { id: 'slack-mcp', name: 'Slack', description: 'Conecta canais, mensagens e contexto operacional do Slack para alertas e colaboração.', accent: '#7c3aed', mark: 'SL', connected: true, updatedAt: '16/06/2026' },
  { id: 'teams-mcp', name: 'Teams', description: 'Integra mensagens e colaboração do Microsoft Teams em fluxos de suporte e operação.', accent: '#4f46e5', mark: 'TM', connected: false, updatedAt: '16/06/2026' },
  { id: 'google-calendar-mcp', name: 'Google Calendar', description: 'Permite acessar agendas, eventos e compromissos sincronizados no Google Calendar.', accent: '#2563eb', mark: 'GC', connected: true, updatedAt: '13/06/2026' },
  { id: 'notion-mcp', name: 'Notion', description: 'Conecta páginas, bancos e documentação do Notion para consulta e base de conhecimento.', accent: '#111827', mark: 'NO', connected: true, updatedAt: '12/06/2026' },
  { id: 'jira-mcp', name: 'Jira', description: 'Integra tickets, sprints, projetos e status operacionais gerenciados no Jira.', accent: '#1d4ed8', mark: 'JI', connected: true, updatedAt: '16/06/2026' },
  { id: 'confluence-mcp', name: 'Confluence', description: 'Permite leitura e uso de documentação corporativa hospedada no Confluence.', accent: '#0f62fe', mark: 'CF', connected: false, updatedAt: '16/06/2026' },
  { id: 'zendesk-mcp', name: 'Zendesk', description: 'Conecta tickets e históricos de atendimento para acelerar suporte assistido por agentes.', accent: '#16a34a', mark: 'ZD', connected: false, updatedAt: '16/06/2026' },
  { id: 'grafana-mcp', name: 'Grafana', description: 'Acessa dashboards, métricas e painéis do Grafana para observabilidade e monitoramento.', accent: '#f97316', mark: 'GF', connected: false, updatedAt: '16/06/2026' },
  { id: 'aws-kb-mcp', name: 'AWS / AWS KB Retrieval', description: 'Integra serviços AWS e recuperação de conhecimento para fluxos com cloud e RAG.', accent: '#b45309', mark: 'AW', connected: true, updatedAt: '15/06/2026' },
  { id: 'azure-mcp', name: 'Azure', description: 'Conecta recursos e serviços Azure para operações, dados e automações corporativas.', accent: '#0284c7', mark: 'AZ', connected: false, updatedAt: '16/06/2026' },
  { id: 'web-fetch-mcp', name: 'Web Fetch', description: 'Faz busca e leitura controlada de páginas web para coleta de informações externas.', accent: '#0f766e', mark: 'WF', connected: false, updatedAt: '16/06/2026' },
  { id: 'figma-mcp', name: 'Figma', description: 'Integra arquivos, componentes e contextos de design do Figma ao fluxo de trabalho.', accent: '#a21caf', mark: 'FG', connected: true, updatedAt: '11/06/2026' },
  { id: 'brave-search-mcp', name: 'Web Search', description: 'Permite busca web estruturada para pesquisas, verificação e coleta de contexto online.', accent: '#be123c', mark: 'WS', connected: false, updatedAt: '16/06/2026' },
]);
const VOICE_MESSAGING_CREATE_SUBTITLE = 'Configure um agente de voz e uma conexão Oktor ou NVoIP para disparar campanhas de chamadas automatizadas. As chamadas são feitas pelo provedor escolhido com a sua conta.';
const VOICE_MESSAGING_STATUS_META = {
  completed: { label: 'Concluída', chipClass: 'success' },
  'in-progress': { label: 'Em andamento', chipClass: 'warning' },
  draft: { label: 'Rascunho', chipClass: 'neutral' },
  error: { label: 'Erro', chipClass: 'error' },
};
const CAMPAIGN_STATUS_META = {
  draft: { label: 'Rascunho', chipClass: 'neutral' },
  scheduled: { label: 'Agendada', chipClass: 'warning' },
  running: { label: 'Em execução', chipClass: 'running' },
  paused: { label: 'Pausada', chipClass: 'paused' },
  completed: { label: 'Concluída', chipClass: 'success' },
  failed: { label: 'Falhou', chipClass: 'error' },
};
const CAMPAIGN_EDITABLE_STATUSES = new Set(['draft', 'scheduled', 'failed']);
let campaignFormMode = 'create';
let activeCampaignEditId = '';
const HYBRID_FLOWS_HISTORY_FLOW_NAME_STORAGE_KEY = 'hybridFlowsHistoryFlowName';

function getCampaignExecutionAction(statusValue) {
  if (statusValue === 'running') {
    return { label: 'Pausar', icon: 'pause', enabled: true };
  }

  if (statusValue === 'scheduled') {
    return { label: 'Executar', icon: 'play_arrow', enabled: true };
  }

  return { label: 'Executar', icon: 'play_arrow', enabled: false };
}

function generateCampaignId() {
  return `campaign-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
const getHybridFlowsFromStorage = () => {
  const raw = window.localStorage.getItem(HYBRID_FLOWS_STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_) {
    return [];
  }
};
const saveHybridFlowsToStorage = (flows) => {
  window.localStorage.setItem(HYBRID_FLOWS_STORAGE_KEY, JSON.stringify(flows));
};
const getVoiceMessagingFromStorage = () => {
  const raw = window.localStorage.getItem(VOICE_MESSAGING_STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_) {
    return [];
  }
};
const saveVoiceMessagingToStorage = (operations) => {
  window.localStorage.setItem(VOICE_MESSAGING_STORAGE_KEY, JSON.stringify(operations));
};
const getVoiceMessagingStatusMeta = (status = 'completed') => {
  const normalizedStatus = String(status || '').trim().toLowerCase();
  return VOICE_MESSAGING_STATUS_META[normalizedStatus] || VOICE_MESSAGING_STATUS_META.completed;
};
const isVoiceMessagingEditableStatus = (status = '') => {
  const normalizedStatus = String(status || '').trim().toLowerCase();
  return normalizedStatus === 'draft' || normalizedStatus === 'error';
};
const resolveVoiceMessagingStatus = ({ status = '', connectionName = '' } = {}) => {
  const normalizedConnectionName = String(connectionName || '').trim().toLowerCase();
  if (normalizedConnectionName === 'sem conexão') return 'error';
  const normalizedStatus = String(status || '').trim().toLowerCase();
  return normalizedStatus || 'completed';
};
const removeVoiceMessagingFromStorage = (operationId = '') => {
  const normalizedId = String(operationId || '').trim();
  if (!normalizedId) return;
  const next = getVoiceMessagingFromStorage().filter((operation) => String(operation?.id || '').trim() !== normalizedId);
  saveVoiceMessagingToStorage(next);
};
const upsertVoiceMessagingInStorage = (operation) => {
  const normalizedId = String(operation?.id || '').trim();
  if (!normalizedId) return;
  const current = getVoiceMessagingFromStorage();
  const index = current.findIndex((item) => String(item?.id || '').trim() === normalizedId);
  if (index >= 0) {
    current[index] = operation;
  } else {
    current.unshift(operation);
  }
  saveVoiceMessagingToStorage(current);
};
const formatHybridFlowDateTime = (value) => {
  const date = value ? new Date(value) : new Date();
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};
const formatVoiceMessagingDateTime = (value) => {
  const date = value ? new Date(value) : new Date();
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(date);
};
const createHybridFlowActionsHtml = () => `
  <span class="row-actions hybrid-flows-row-actions">
    <button class="icon-btn action-icon" type="button" aria-label="Copiar link">
      <span class="material-symbols-rounded">content_copy</span>
    </button>
    <button class="icon-btn action-icon" type="button" aria-label="Abrir em nova guia">
      <span class="material-symbols-rounded">open_in_new</span>
    </button>
    <button class="icon-btn action-icon" type="button" aria-label="Atualizar link">
      <span class="material-symbols-rounded">autorenew</span>
    </button>
    <button class="icon-btn action-icon" type="button" aria-label="Histórico">
      <span class="material-symbols-rounded">history</span>
    </button>
    <button class="icon-btn action-icon" type="button" aria-label="Editar">
      <span class="material-symbols-rounded">edit</span>
    </button>
    <button class="icon-btn action-icon danger" type="button" aria-label="Apagar">
      <span class="material-symbols-rounded">delete</span>
    </button>
  </span>
`;
const slugifyHybridFlowValue = (value = '') => String(value || '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

const getHybridFlowRowPublicId = (row) => {
  if (!row) return '';
  const flowId = String(row.dataset.hybridFlowId || '').trim();
  if (flowId) return flowId;
  return slugifyHybridFlowValue(row.querySelector('strong')?.textContent || '');
};

const getHybridFlowPublicLink = (row) => {
  if (!row) return '';
  const explicitLink = String(row.dataset.hybridFlowPublicLink || row.dataset.publicLink || '').trim();
  if (explicitLink) return explicitLink;

  const publicId = getHybridFlowRowPublicId(row);
  if (!publicId) return '';

  const url = new URL(window.location.href);
  url.hash = `#/hybrid-flow?flow=${encodeURIComponent(publicId)}`;
  return url.toString();
};

const findHybridFlowRowByPublicId = (flowId = '') => {
  const normalizedId = String(flowId || '').trim();
  if (!normalizedId || !hybridFlowsTable) return null;
  return Array.from(hybridFlowsTable.querySelectorAll('.data-row:not(.header)')).find((row) => {
    return getHybridFlowRowPublicId(row) === normalizedId;
  }) || null;
};

const buildHybridFlowVoicePayload = (row, fallbackFlowId = '') => {
  const flowId = getHybridFlowRowPublicId(row) || String(fallbackFlowId || '').trim();
  const fallbackName = flowId ? flowId.replace(/[-_]+/g, ' ') : 'Fluxo híbrido';
  const flowName = String(row?.querySelector('strong')?.textContent || fallbackName).trim() || 'Fluxo híbrido';
  return {
    agentName: flowName,
    agentId: flowId,
    rowCtxId: `hybrid-flow-${flowId || 'voice'}`,
    environmentSlug: String(hubOrgId || '').trim(),
    projectId: '',
    projectSlug: '',
    projectTitle: 'Fluxo híbrido',
    voiceEnabled: true,
    subtitle: 'Fluxo híbrido de voz • Voz pronta'
  };
};
let activeHybridFlowEditId = '';
let activeHybridFlowEditRow = null;

const HYBRID_FLOW_TYPE_LABEL_MAP = {
  text: 'Texto livre',
  phone: 'Telefone',
  cpf: 'CPF',
  email: 'Email',
  number: 'Número',
  boolean: 'Sim/Não'
};

const parseHybridFlowPayload = (row) => {
  if (!row?.dataset.hybridFlowPayload) return {};
  try {
    const payload = JSON.parse(row.dataset.hybridFlowPayload);
    return payload && typeof payload === 'object' ? payload : {};
  } catch {
    return {};
  }
};

const readHybridFlowRowData = (row) => {
  if (!row) return null;
  const payload = parseHybridFlowPayload(row);
  const cells = row.querySelectorAll(':scope > span');
  const title = cells[0]?.querySelector('strong')?.textContent?.trim() || payload.title || '';
  const description = cells[0]?.querySelector('small')?.textContent?.trim() || payload.description || '';
  const fieldsCount = Number(payload.fieldsCount || cells[2]?.textContent?.trim() || 0);
  return {
    ...payload,
    id: String(payload.id || row.dataset.hybridFlowId || getHybridFlowRowPublicId(row) || '').trim(),
    title,
    description: description === '\u00a0' ? '' : description,
    fieldsCount: Number.isFinite(fieldsCount) ? fieldsCount : 0,
    fields: Array.isArray(payload.fields) ? payload.fields : [],
    createdAt: payload.createdAt || row.dataset.hybridFlowCreatedAt || new Date().toISOString(),
    updatedAt: payload.updatedAt || new Date().toISOString(),
  };
};

const setHybridFlowPayload = (row, flow) => {
  if (!row || !flow) return;
  row.dataset.hybridFlowId = String(flow.id || '').trim();
  row.dataset.hybridFlowCreatedAt = String(flow.createdAt || '');
  row.dataset.hybridFlowPayload = JSON.stringify(flow);
};

const createHybridFlowFieldSummaryCard = (field = {}) => {
  const fieldRow = document.createElement('div');
  fieldRow.className = 'hybrid-flow-field-card';
  fieldRow.dataset.fieldId = String(field.id || `field-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`);
  const data = {
    name: String(field.name || '').trim(),
    label: String(field.label || '').trim(),
    type: String(field.type || 'text').trim() || 'text',
    description: String(field.description || '').trim(),
    required: field.required !== false,
  };
  fieldRow.dataset.fieldData = JSON.stringify(data);
  const typeLabel = HYBRID_FLOW_TYPE_LABEL_MAP[data.type] || HYBRID_FLOW_TYPE_LABEL_MAP.text;
  fieldRow.innerHTML = `
    <div class="hybrid-flow-field-summary">
      <button type="button" class="icon-btn hybrid-flow-drag-handle" aria-label="Mover campo">
        <span class="material-symbols-rounded">drag_indicator</span>
      </button>
      <div class="hybrid-flow-field-summary-content">
        <div class="hybrid-flow-summary-head">
          <strong>${escapeHtmlWes(data.label || data.name || '-')}</strong>
          <span class="hybrid-flow-summary-dot">•</span>
          <span>${escapeHtmlWes(typeLabel)}</span>
          ${data.required ? '<span class="hybrid-flow-summary-badge">Obrigatório</span>' : ''}
        </div>
        <div class="hybrid-flow-summary-subhead">${escapeHtmlWes(data.name || '-')}</div>
        <p class="hybrid-flow-summary-description">${escapeHtmlWes(data.description || 'Sem descrição')}</p>
      </div>
      <div class="hybrid-flow-field-summary-actions">
        <button type="button" class="icon-btn hybrid-flow-edit-btn" aria-label="Editar campo">
          <span class="material-symbols-rounded">edit</span>
        </button>
        <button type="button" class="icon-btn hybrid-flow-delete-btn" aria-label="Remover campo">
          <span class="material-symbols-rounded">delete</span>
        </button>
      </div>
    </div>
  `;
  return fieldRow;
};

const syncHybridFlowCreateModeUi = () => {
  const isEdit = Boolean(activeHybridFlowEditId || activeHybridFlowEditRow);
  if (hybridFlowCreatePage) hybridFlowCreatePage.dataset.mode = isEdit ? 'edit' : 'create';
  if (hybridFlowCreatePageTitle) hybridFlowCreatePageTitle.textContent = isEdit ? 'Editar fluxo híbrido' : 'Novo fluxo híbrido';
  if (hybridFlowCreatePageSubtitle) {
    hybridFlowCreatePageSubtitle.textContent = isEdit
      ? 'Revise os dados do atendimento híbrido e salve as alterações.'
      : 'Configure um atendimento que combina coleta por voz e confirmação no Telegram.';
  }
  if (hybridFlowNextBtn) hybridFlowNextBtn.textContent = isEdit ? 'Salvar alterações' : 'Criar';
  if (hybridFlowReviewConfirmBtn) hybridFlowReviewConfirmBtn.textContent = isEdit ? 'Salvar alterações' : 'Salvar';
};

const getHybridFlowFormElements = () => ({
  titleInput: document.getElementById('hybridFlowTitleInput'),
  descriptionInput: document.getElementById('hybridFlowDescriptionInput'),
  textAgentSelect: hybridFlowCreatePage?.querySelector('select[aria-label="Selecione o agente de texto"]') || null,
  voiceAgentSelect: hybridFlowCreatePage?.querySelector('select[aria-label="Selecione o agente de voz"]') || null,
  greetingInput: hybridFlowCreatePage?.querySelector('textarea[placeholder="Saudação inicial do agente de voz"]') || null,
  telegramSelect: hybridFlowCreatePage?.querySelector('select[aria-label="Integração do Telegram"]') || null,
  fieldsList: document.getElementById('hybridFlowFieldsList'),
  fieldsEmpty: document.getElementById('hybridFlowFieldsEmpty'),
});

const setHybridFlowSelectValue = (select, value = '') => {
  if (!select) return;
  const normalizedValue = String(value || '').trim();
  if (!normalizedValue) {
    select.value = '';
    return;
  }
  const option = Array.from(select.options).find((item) => {
    return item.value === normalizedValue || item.textContent?.trim() === normalizedValue;
  });
  select.value = option?.value || '';
};

const syncHybridFlowFieldsEmptyState = () => {
  const { fieldsList, fieldsEmpty } = getHybridFlowFormElements();
  if (fieldsEmpty && fieldsList) fieldsEmpty.hidden = fieldsList.children.length > 0;
};

const resetHybridFlowCreateForm = () => {
  activeHybridFlowEditId = '';
  activeHybridFlowEditRow = null;
  const { titleInput, descriptionInput, textAgentSelect, voiceAgentSelect, greetingInput, telegramSelect, fieldsList } = getHybridFlowFormElements();
  if (titleInput) titleInput.value = '';
  if (descriptionInput) descriptionInput.value = '';
  if (textAgentSelect) textAgentSelect.value = '';
  if (voiceAgentSelect) voiceAgentSelect.value = '';
  if (greetingInput) greetingInput.value = '';
  if (telegramSelect) telegramSelect.value = '';
  if (fieldsList) fieldsList.innerHTML = '';
  syncHybridFlowFieldsEmptyState();
  syncHybridFlowCreateModeUi();
};

const populateHybridFlowCreateForm = (flow = {}) => {
  const { titleInput, descriptionInput, textAgentSelect, voiceAgentSelect, greetingInput, telegramSelect, fieldsList } = getHybridFlowFormElements();
  if (titleInput) titleInput.value = String(flow.title || '').trim();
  if (descriptionInput) descriptionInput.value = String(flow.description || '').trim();
  setHybridFlowSelectValue(textAgentSelect, flow.textAgent);
  setHybridFlowSelectValue(voiceAgentSelect, flow.voiceAgent);
  if (greetingInput) greetingInput.value = String(flow.greeting || '').trim();
  setHybridFlowSelectValue(telegramSelect, flow.telegramIntegration);
  if (fieldsList) {
    fieldsList.innerHTML = '';
    const savedFields = Array.isArray(flow.fields) ? flow.fields : [];
    const fields = savedFields.length
      ? savedFields
      : Array.from({ length: Number(flow.fieldsCount || 0) }, (_, index) => ({
        id: `field-${index + 1}`,
        name: `campo_${index + 1}`,
        label: `Campo ${index + 1}`,
        type: 'text',
        description: '',
        required: true,
      }));
    fields.forEach((field) => {
      fieldsList.appendChild(createHybridFlowFieldSummaryCard(field));
    });
  }
  syncHybridFlowFieldsEmptyState();
  syncHybridFlowCreateModeUi();
};

const readHybridFlowFieldsFromForm = () => {
  const { fieldsList } = getHybridFlowFormElements();
  if (!fieldsList) return [];
  return Array.from(fieldsList.querySelectorAll('.hybrid-flow-field-card')).map((row) => {
    try {
      return row.dataset.fieldData ? JSON.parse(row.dataset.fieldData) : null;
    } catch {
      return null;
    }
  }).filter(Boolean);
};

const readHybridFlowFormData = () => {
  const { titleInput, descriptionInput, textAgentSelect, voiceAgentSelect, greetingInput, telegramSelect } = getHybridFlowFormElements();
  const fields = readHybridFlowFieldsFromForm();
  return {
    id: activeHybridFlowEditId || `hybrid-flow-${Date.now()}`,
    title: String(titleInput?.value || '').trim() || 'Sem título',
    description: String(descriptionInput?.value || '').trim(),
    fieldsCount: fields.length,
    fields,
    textAgent: String(textAgentSelect?.value || '').trim(),
    voiceAgent: String(voiceAgentSelect?.value || '').trim(),
    greeting: String(greetingInput?.value || '').trim(),
    telegramIntegration: String(telegramSelect?.value || '').trim(),
    createdAt: readHybridFlowRowData(activeHybridFlowEditRow)?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
};

const updateHybridFlowRow = (row, flow) => {
  if (!row || !flow) return;
  const cells = row.querySelectorAll(':scope > span');
  if (cells[0]) {
    cells[0].innerHTML = `<strong>${escapeHtmlWes(flow.title || 'Sem título')}</strong><small>${escapeHtmlWes(flow.description || '\u00a0')}</small>`;
  }
  if (cells[2]) cells[2].textContent = String(Number(flow.fieldsCount || 0));
  if (cells[4]) cells[4].textContent = escapeHtmlWes(formatHybridFlowDateTime(flow.updatedAt || new Date().toISOString()));
  setHybridFlowPayload(row, flow);
};

const upsertHybridFlowInStorage = (flow) => {
  const normalizedId = String(flow?.id || '').trim();
  if (!normalizedId) return;
  const current = getHybridFlowsFromStorage();
  const index = current.findIndex((item) => String(item?.id || '').trim() === normalizedId);
  if (index >= 0) {
    current[index] = flow;
  } else if (activeHybridFlowEditRow?.dataset.hybridFlowCreated === 'true') {
    current.unshift(flow);
  }
  saveHybridFlowsToStorage(current);
};

const openHybridFlowCreateMode = (mode = 'create', flow = null, row = null) => {
  if (mode === 'edit' && flow) {
    activeHybridFlowEditId = String(flow.id || '').trim();
    activeHybridFlowEditRow = row || null;
    populateHybridFlowCreateForm(flow);
  } else {
    resetHybridFlowCreateForm();
  }
  window.location.hash = '#/dashboard/hybrid-flows/new';
};

const appendHybridFlowRow = (flow) => {
  if (!hybridFlowsTable) return;
  const row = document.createElement('div');
  row.className = 'data-row';
  row.dataset.hybridFlowId = flow.id;
  row.dataset.hybridFlowCreated = 'true';
  row.dataset.hybridFlowCreatedAt = String(flow.createdAt || '');
  row.dataset.hybridFlowPayload = JSON.stringify(flow);
  row.innerHTML = `
    <span>
      <strong>${escapeHtmlWes(flow.title || 'Sem título')}</strong>
      <small>${escapeHtmlWes(flow.description || '\u00a0')}</small>
    </span>
    <span><span class="chip success">Ativo</span></span>
    <span>${Number(flow.fieldsCount || 0)}</span>
    <span>${escapeHtmlWes(formatHybridFlowDateTime(flow.createdAt))}</span>
    <span>${escapeHtmlWes(formatHybridFlowDateTime(flow.updatedAt || flow.createdAt))}</span>
    <span>${createHybridFlowActionsHtml()}</span>
  `;
  const firstDataRow = hybridFlowsTable.querySelector('.data-row.header + .data-row');
  if (firstDataRow) {
    firstDataRow.insertAdjacentElement('beforebegin', row);
  } else {
    hybridFlowsTable.append(row);
  }
};
const renderHybridFlowsFromStorage = () => {
  if (!hybridFlowsTable) return;
  hybridFlowsTable.querySelectorAll('.data-row[data-hybrid-flow-created="true"]').forEach((row) => row.remove());
  getHybridFlowsFromStorage().forEach((flow) => appendHybridFlowRow(flow));
};
const persistAndRenderHybridFlow = (flow) => {
  const current = getHybridFlowsFromStorage();
  current.unshift(flow);
  saveHybridFlowsToStorage(current);
  renderHybridFlowsFromStorage();
};
const createVoiceMessagingActionsHtml = (status = 'completed') => `
  <span class="row-actions hybrid-flows-row-actions">
    <button class="icon-btn action-icon${isVoiceMessagingEditableStatus(status) ? '' : ' muted-icon'}" type="button" aria-label="Editar"${isVoiceMessagingEditableStatus(status) ? '' : ' disabled'}>
      <span class="material-symbols-rounded">edit</span>
    </button>
    <button class="icon-btn action-icon danger" type="button" aria-label="Apagar">
      <span class="material-symbols-rounded">delete</span>
    </button>
  </span>
`;
const appendVoiceMessagingRow = (operation) => {
  if (!voiceMessagingTable) return;
  const status = resolveVoiceMessagingStatus(operation);
  const statusMeta = getVoiceMessagingStatusMeta(status);
  const row = document.createElement('div');
  row.className = 'data-row';
  row.dataset.voiceMessagingId = operation.id;
  row.dataset.voiceMessagingCreated = 'true';
  row.dataset.voiceMessagingCreatedAt = String(operation.createdAt || '');
  row.dataset.voiceMessagingStatus = status;
  row.innerHTML = `
    <span><strong>${escapeHtmlWes(operation.operationName || 'Sem nome')}</strong></span>
    <span><strong>${escapeHtmlWes(operation.agentName || 'Não selecionado')}</strong><small>${escapeHtmlWes(operation.agentSubtitle || '\u00a0')}</small></span>
    <span><strong>${escapeHtmlWes(operation.providerLabel || 'Oktor')}</strong><small>${escapeHtmlWes(operation.connectionName || '\u00a0')}</small></span>
    <span><span class="chip ${escapeHtmlWes(statusMeta.chipClass)}">${escapeHtmlWes(statusMeta.label)}</span></span>
    <span>${escapeHtmlWes(formatVoiceMessagingDateTime(operation.createdAt))}</span>
    <span>${createVoiceMessagingActionsHtml(status)}</span>
  `;
  const firstDataRow = voiceMessagingTable.querySelector('.data-row.header + .data-row');
  if (firstDataRow) {
    firstDataRow.insertAdjacentElement('beforebegin', row);
  } else {
    voiceMessagingTable.append(row);
  }
};
const renderVoiceMessagingFromStorage = () => {
  if (!voiceMessagingTable) return;
  voiceMessagingTable.querySelectorAll('.data-row[data-voice-messaging-created="true"]').forEach((row) => row.remove());
  getVoiceMessagingFromStorage().slice().reverse().forEach((operation) => appendVoiceMessagingRow(operation));
};
const persistAndRenderVoiceMessaging = (operation) => {
  const current = getVoiceMessagingFromStorage();
  current.unshift(operation);
  saveVoiceMessagingToStorage(current);
  renderVoiceMessagingFromStorage();
};
const updateVoiceMessagingRow = (row, operation) => {
  if (!row || !operation) return;
  const cells = row.querySelectorAll(':scope > span');
  const operationCell = cells[0];
  const agentCell = cells[1];
  const connectionCell = cells[2];
  const statusCell = cells[3];
  const createdAtCell = cells[4];
  const status = resolveVoiceMessagingStatus({
    status: operation.status || row.dataset.voiceMessagingStatus || 'completed',
    connectionName: operation.connectionName || cells[2]?.querySelector('small')?.textContent || '',
  });
  const statusMeta = getVoiceMessagingStatusMeta(status);

  row.dataset.voiceMessagingStatus = status;

  if (operationCell) {
    operationCell.innerHTML = `<strong>${escapeHtmlWes(operation.operationName || 'Sem nome')}</strong>`;
  }
  if (agentCell) {
    agentCell.innerHTML = `<strong>${escapeHtmlWes(operation.agentName || 'Não selecionado')}</strong><small>${escapeHtmlWes(operation.agentSubtitle || '\u00a0')}</small>`;
  }
  if (connectionCell) {
    connectionCell.innerHTML = `<strong>${escapeHtmlWes(operation.providerLabel || 'Oktor')}</strong><small>${escapeHtmlWes(operation.connectionName || '\u00a0')}</small>`;
  }
  if (statusCell) {
    statusCell.innerHTML = `<span class="chip ${escapeHtmlWes(statusMeta.chipClass)}">${escapeHtmlWes(statusMeta.label)}</span>`;
  }
  if (createdAtCell) {
    createdAtCell.textContent = escapeHtmlWes(formatVoiceMessagingDateTime(operation.createdAt));
  }
  const actionsCell = cells[5];
  if (actionsCell) {
    actionsCell.innerHTML = createVoiceMessagingActionsHtml(status);
  }
};
  const normalizeVoiceMessagingTableRow = (row) => {
  if (!row) return;
  const cells = row.querySelectorAll(':scope > span');
  const statusLabel = cells[3]?.querySelector('.chip')?.textContent?.trim().toLowerCase() || '';
  const connectionName = cells[2]?.querySelector('small')?.textContent?.trim() || '';
  let status = 'completed';
  if (statusLabel.includes('rascunho')) {
    status = 'draft';
  } else if (statusLabel.includes('andamento')) {
    status = 'in-progress';
  } else if (statusLabel.includes('erro')) {
    status = 'error';
  }
  status = resolveVoiceMessagingStatus({ status, connectionName });
  row.dataset.voiceMessagingStatus = status;
  const statusCell = cells[3];
  const statusMeta = getVoiceMessagingStatusMeta(status);
  if (statusCell) {
    statusCell.innerHTML = `<span class="chip ${escapeHtmlWes(statusMeta.chipClass)}">${escapeHtmlWes(statusMeta.label)}</span>`;
  }
  const actionsCell = cells[5];
  if (actionsCell) {
    actionsCell.innerHTML = createVoiceMessagingActionsHtml(status);
  }
};
const setHybridFlowHistoryFlowName = (flowName = '') => {
  const name = String(flowName || '').trim() || 'Fluxo';
  window.localStorage.setItem(HYBRID_FLOWS_HISTORY_FLOW_NAME_STORAGE_KEY, name);
  if (hybridFlowHistoryFlowName) hybridFlowHistoryFlowName.textContent = name;
};
const hydrateHybridFlowHistoryFlowName = () => {
  const name = String(window.localStorage.getItem(HYBRID_FLOWS_HISTORY_FLOW_NAME_STORAGE_KEY) || '').trim() || 'Teste';
  if (hybridFlowHistoryFlowName) hybridFlowHistoryFlowName.textContent = name;
};
const removeHybridFlowFromStorage = (flowId = '') => {
  const normalizedId = String(flowId || '').trim();
  if (!normalizedId) return;
  const next = getHybridFlowsFromStorage().filter((flow) => String(flow?.id || '').trim() !== normalizedId);
  saveHybridFlowsToStorage(next);
};

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
const SELECTED_ORG_ACCESS_STORAGE_KEY = 'wes_selected_organization_access';
const DEFAULT_LANGUAGE = 'pt-BR';
const LANGUAGE_STORAGE_KEY = 'wes-language';
const LANGUAGE_QUERY_KEY = 'lang';
const LANGUAGE_PATHS = {
  'pt-BR': '/',
  en: '/en/',
  es: '/es/',
};
const SECTION_ANCHORS = {
  'pt-BR': { where: 'onde-atuamos', about: 'sobre', solutions: 'solucoes' },
  en: { where: 'where-we-operate', about: 'about', solutions: 'solutions' },
  es: { where: 'donde-operamos', about: 'sobre', solutions: 'soluciones' },
};
const SUPPORTED_LANGUAGES = {
  'pt-BR': { label: 'PT-BR', flag: './assets/flag-pt-br.svg', documentLang: 'pt-BR' },
  en: { label: 'EN', flag: './assets/flag-en.svg', documentLang: 'en' },
  es: { label: 'ES', flag: './assets/flag-es.svg', documentLang: 'es' },
};
let currentLanguage = DEFAULT_LANGUAGE;
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
const dismissibleInfoBanners = document.querySelectorAll('.info-banner.dismissible');
const settingsSaveBtn = document.getElementById('settingsSaveBtn');
const settingsPage = document.getElementById('page-settings');
const AGENTS_PAGE_SIZE = 5;
const AUDIT_PAGE_SIZE = 6;
const AGENTS_AUTO_REFRESH_MS = 15000;
const AGENTS_AUTO_REFRESH_ENABLED = false;
let agentsCurrentPage = 1;
let auditCurrentPage = 1;
let agentsRagFilter = '';
let agentsVisibilityFilter = '';
let agentsAutoRefreshTimer = null;
let lucideRefreshQueued = false;
let activeChatSpeechButton = null;
let projectModalAvailableAgents = [];
let appToastTimer = null;
let telegramConnectionValidated = false;
let telegramTestSent = false;
let voiceMessagingInsightsChart = null;
const CHAT_SKILL_CATALOG = Object.freeze([
  {
    id: 'cep',
    name: 'CEP',
    icon: 'map-pinned',
    description: 'Busca dados de endereco a partir de um CEP informado na conversa.',
    tags: ['cep', 'endereco', 'logradouro', 'bairro'],
  },
  {
    id: 'clima',
    name: 'Clima',
    icon: 'cloud-sun',
    description: 'Consulta tempo atual e previsao para uma localidade.',
    tags: ['clima', 'tempo', 'previsao', 'temperatura'],
  },
  {
    id: 'cnh',
    name: 'Consulta CNH',
    icon: 'id-card',
    description: 'Valida situacao e dados essenciais de uma carteira de habilitacao.',
    tags: ['cnh', 'habilitacao', 'motorista', 'documento'],
  },
  {
    id: 'veiculos',
    name: 'Consulta de Veiculos',
    icon: 'car',
    description: 'Retorna dados basicos do veiculo por placa ou identificador.',
    tags: ['veiculo', 'placa', 'frota', 'automovel'],
  },
  {
    id: 'cpf-cnpj',
    name: 'CPF e CNPJ',
    icon: 'badge-check',
    description: 'Enriquece cadastros com dados resumidos de pessoas e empresas.',
    tags: ['cpf', 'cnpj', 'documento', 'cadastro'],
  },
  {
    id: 'financeiro',
    name: 'Financeiro',
    icon: 'banknote',
    description: 'Apoia consultas de saldos, conciliacoes e indicadores financeiros.',
    tags: ['financeiro', 'saldo', 'conciliacao', 'pagamento'],
  },
  {
    id: 'tickets',
    name: 'Tickets',
    icon: 'ticket',
    description: 'Busca chamados, filas e SLAs para apoiar o atendimento.',
    tags: ['ticket', 'chamado', 'sla', 'fila'],
  },
  {
    id: 'crm',
    name: 'CRM',
    icon: 'users',
    description: 'Recupera dados de clientes, funil e historico comercial.',
    tags: ['crm', 'cliente', 'lead', 'vendas'],
  },
]);
const CHAT_SKILL_AGENT_PROFILES = Object.freeze([
  { match: ['finance', 'financ', 'pulse', 'ledger'], topSkills: ['financeiro', 'cpf-cnpj', 'cep', 'crm'] },
  { match: ['ops', 'opera', 'nimbus', 'queue', 'sla'], topSkills: ['tickets', 'clima', 'cep', 'crm'] },
  { match: ['atlas', 'core', 'api', 'etl', 'stream', 'sentinel'], topSkills: ['tickets', 'crm', 'cep', 'veiculos'] },
  { match: ['people', 'rh', 'onboarding'], topSkills: ['cpf-cnpj', 'crm', 'cep', 'cnh'] },
]);
const CHAT_SKILL_DEFAULT_TOP = Object.freeze(['cep', 'clima', 'crm', 'tickets']);
const agentChatSkillSelections = new Map();
let activeAgentChatSkillQuery = '';

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

const tableEmptyStateObservers = new WeakMap();
const TABLE_EMPTY_STATE_SELECTOR = '[data-table-empty-state="true"]';

function getTableEmptyStateCopy(table) {
  const ariaLabel = table.getAttribute('aria-label') || '';
  const normalizedLabel = ariaLabel
    .replace(/^lista de\s+/i, '')
    .replace(/^historico de\s+/i, '')
    .replace(/^histórico de\s+/i, '')
    .replace(/^perfil dos\s+/i, '')
    .trim()
    .toLowerCase();

  return {
    icon: table.dataset.emptyIcon || 'inbox',
    title: table.dataset.emptyTitle || 'Nenhum registro encontrado',
    description: table.dataset.emptyDescription || (normalizedLabel
      ? `Quando houver registros em ${normalizedLabel}, eles aparecerão aqui.`
      : 'Quando houver registros, eles aparecerão aqui.'),
    actionLabel: table.dataset.emptyActionLabel || '',
    actionTarget: table.dataset.emptyActionTarget || '',
  };
}

function createTableEmptyStateContent(table, tagName = 'span') {
  const copy = getTableEmptyStateCopy(table);
  const content = document.createElement(tagName);
  content.className = 'table-empty-content';

  const icon = document.createElement('span');
  icon.className = 'material-symbols-rounded';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = copy.icon;

  const title = document.createElement('strong');
  title.textContent = copy.title;

  const description = document.createElement('small');
  description.textContent = copy.description;

  content.append(icon, title, description);

  if (copy.actionLabel) {
    const action = document.createElement('button');
    action.className = 'btn primary table-empty-action-btn';
    action.type = 'button';
    action.textContent = copy.actionLabel;
    action.addEventListener('click', () => {
      if (!copy.actionTarget) return;
      const target = document.querySelector(copy.actionTarget);
      if (target instanceof HTMLElement) target.click();
    });
    content.append(action);
  }

  return content;
}

function isTableDataRowVisible(row) {
  return !row.hidden
    && row.getAttribute('aria-hidden') !== 'true'
    && !row.classList.contains('is-hidden')
    && row.style.display !== 'none';
}

function getDataTableRows(table) {
  return Array.from(table.children).filter((row) => row.classList?.contains('data-row')
    && !row.classList.contains('header')
    && row.dataset.tableEmptyState !== 'true'
    && isTableDataRowVisible(row));
}

function getNativeTableRows(table) {
  const bodyRows = table.tBodies.length
    ? Array.from(table.tBodies).flatMap((body) => Array.from(body.rows))
    : Array.from(table.querySelectorAll('tr')).filter((row) => !row.closest('thead'));

  return bodyRows.filter((row) => row.dataset.tableEmptyState !== 'true' && isTableDataRowVisible(row));
}

function getNativeTableColumnCount(table) {
  const headerCells = table.querySelectorAll('thead th, thead td');
  if (headerCells.length) return headerCells.length;
  const firstRow = table.querySelector('tr:not([data-table-empty-state="true"])');
  return firstRow?.children.length || 1;
}

function getOrCreateDataTableEmptyRow(table) {
  let emptyRow = Array.from(table.children).find((row) => row.dataset?.tableEmptyState === 'true');
  if (emptyRow) return emptyRow;

  emptyRow = document.createElement('div');
  emptyRow.className = 'data-row table-empty-row';
  emptyRow.dataset.tableEmptyState = 'true';
  emptyRow.hidden = true;
  emptyRow.append(createTableEmptyStateContent(table, 'span'));
  table.append(emptyRow);
  return emptyRow;
}

function getOrCreateNativeTableEmptyRow(table) {
  let emptyRow = table.querySelector(TABLE_EMPTY_STATE_SELECTOR);
  if (emptyRow) return emptyRow;

  const tbody = table.tBodies[0] || table.createTBody();
  emptyRow = document.createElement('tr');
  emptyRow.className = 'table-empty-native-row';
  emptyRow.dataset.tableEmptyState = 'true';
  emptyRow.hidden = true;

  const cell = document.createElement('td');
  cell.className = 'table-empty-native-cell';
  cell.colSpan = getNativeTableColumnCount(table);
  cell.append(createTableEmptyStateContent(table, 'div'));
  emptyRow.append(cell);
  tbody.append(emptyRow);
  return emptyRow;
}

function syncTableEmptyState(table) {
  if (!table) return;
  if (table.dataset.tableEmptyStateDisabled === 'true') {
    table.querySelector(TABLE_EMPTY_STATE_SELECTOR)?.remove();
    return;
  }
  const isDataTable = table.classList.contains('data-table');
  const rows = isDataTable ? getDataTableRows(table) : getNativeTableRows(table);
  const emptyRow = isDataTable ? getOrCreateDataTableEmptyRow(table) : getOrCreateNativeTableEmptyRow(table);

  if (!isDataTable) {
    const emptyCell = emptyRow.querySelector('td');
    if (emptyCell) emptyCell.colSpan = getNativeTableColumnCount(table);
  }

  emptyRow.hidden = rows.length > 0;
}

function scheduleTableEmptyStateSync(table) {
  if (!table || table.dataset.tableEmptyStateQueued === 'true') return;
  table.dataset.tableEmptyStateQueued = 'true';
  window.requestAnimationFrame(() => {
    delete table.dataset.tableEmptyStateQueued;
    syncTableEmptyState(table);
  });
}

function bindTableEmptyState(table) {
  if (!table || tableEmptyStateObservers.has(table)) return;
  if (table.dataset.tableEmptyStateDisabled === 'true') return;
  syncTableEmptyState(table);

  const observer = new MutationObserver(() => scheduleTableEmptyStateSync(table));
  observer.observe(table, { childList: true, subtree: true });
  tableEmptyStateObservers.set(table, observer);
}

function initTableEmptyStates(root = document) {
  root.querySelectorAll('.data-table, table').forEach((table) => bindTableEmptyState(table));
}

function syncTableEmptyStates(root = document) {
  root.querySelectorAll('.data-table, table').forEach((table) => syncTableEmptyState(table));
}

window.syncTableEmptyStates = syncTableEmptyStates;
initTableEmptyStates();

const tableEmptyStateRootObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (!(node instanceof Element)) return;
      if (node.matches('.data-table, table')) bindTableEmptyState(node);
      node.querySelectorAll?.('.data-table, table').forEach((table) => bindTableEmptyState(table));
    });
  });
});

if (document.body) {
  tableEmptyStateRootObserver.observe(document.body, { childList: true, subtree: true });
}

function syncChannelTableTooltips() {
  const tooltipTargets = document.querySelectorAll('#page-channels .channel-tooltip-target');
  if (!tooltipTargets.length) return;

  tooltipTargets.forEach((el) => {
    const text = el.textContent?.trim() || '';
    const isTruncated = el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight;

    if (text && isTruncated) {
      el.setAttribute('title', text);
    } else {
      el.removeAttribute('title');
    }
  });
}

window.addEventListener('resize', syncChannelTableTooltips);
window.requestAnimationFrame(syncChannelTableTooltips);

function buildMcpLogoDataUri(item) {
  const logoById = {
    'filesystem-mcp': './assets/logos%20MCP/Filesystem_logo.png',
    'google-drive-mcp': './assets/logos%20MCP/Google_Drive_logo.svg',
    'gitlab-mcp': './assets/logos%20MCP/GitLab_logo.svg',
    'gmail-mcp': './assets/logos%20MCP/Gmail_logo.svg',
    'zoho-mcp': './assets/logos%20MCP/Zoho_logo.svg',
    'postgresql-mcp': './assets/logos%20MCP/PostgreSQL_logo.svg',
    'github-mcp': './assets/logos%20MCP/GitHub_logo.svg',
    'sqlite-mcp': './assets/logos%20MCP/SQLite_logo.svg',
    'slack-mcp': './assets/logos%20MCP/Slack_logo.svg',
    'teams-mcp': './assets/logos%20MCP/Teams_logo.svg',
    'google-calendar-mcp': './assets/logos%20MCP/Google_Calendar_logo.svg',
    'notion-mcp': './assets/logos%20MCP/Notion_logo.svg',
    'jira-mcp': './assets/logos%20MCP/Jira_logo.svg',
    'confluence-mcp': './assets/logos%20MCP/Confluence_logo.svg',
    'zendesk-mcp': './assets/logos%20MCP/Zendesk_logo.svg',
    'grafana-mcp': './assets/logos%20MCP/Grafana_logo.svg',
    'aws-kb-mcp': './assets/logos%20MCP/AWS_logo.svg',
    'azure-mcp': './assets/logos%20MCP/Azure_logo.svg',
    'figma-mcp': './assets/logos%20MCP/Figma_logo.svg',
  };

  const explicitLogo = logoById[item?.id];
  if (explicitLogo) return explicitLogo;

  const safeAccent = String(item?.accent || '#016ff4');
  const safeMark = String(item?.mark || 'MC').slice(0, 2).toUpperCase();
  const isNeutralInitialBadge = item?.id === 'web-fetch-mcp' || item?.id === 'brave-search-mcp' || Boolean(item?.isCustom);
  const badgeFontSize = isNeutralInitialBadge ? 32 : 26;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
      <defs>
        <linearGradient id="g" x1="12" y1="10" x2="82" y2="84" gradientUnits="userSpaceOnUse">
          <stop stop-color="${safeAccent}"/>
          <stop offset="1" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="84" height="84" rx="24" fill="${isNeutralInitialBadge ? '#ffffff' : 'url(#g)'}"/>
      ${isNeutralInitialBadge ? '' : '<circle cx="72" cy="24" r="8" fill="rgba(255,255,255,0.22)"/>'}
      ${isNeutralInitialBadge ? '' : '<path d="M25 66c8-16 16-24 23-24 8 0 12 10 23 10" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round"/>'}
      <text x="48" y="56" text-anchor="middle" fill="${isNeutralInitialBadge ? '#016ff4' : 'white'}" font-family="Inter, Arial, sans-serif" font-size="${badgeFontSize}" font-weight="700">${safeMark}</text>
    </svg>
  `.trim();
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getDefaultMcpConnectionsState() {
  return MCP_CONNECTIONS_CATALOG.reduce((acc, item) => {
    acc[item.id] = {
      connected: Boolean(item.connected),
      updatedAt: String(item.updatedAt || '16/06/2026'),
      url: String(item.url || ''),
      authType: String(item.authType || 'bearer'),
      credential: String(item.credential || ''),
      basicUsername: String(item.basicUsername || ''),
      basicPassword: String(item.basicPassword || ''),
      toolCount: Number(item.toolCount || 0),
    };
    return acc;
  }, {});
}

function getCustomMcpConnections() {
  const raw = window.localStorage.getItem(MCP_CUSTOM_CONNECTIONS_STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((item, index) => {
        const name = String(item?.name || '').trim();
        const url = String(item?.url || '').trim();
        const authType = String(item?.authType || 'bearer').trim() || 'bearer';
        const credential = String(item?.credential || '').trim();
        if (!name || !url) return null;
        const fallbackId = `custom-mcp-${index + 1}`;
        return {
          id: String(item?.id || fallbackId).trim() || fallbackId,
          name,
          description: String(item?.description || `Conexão MCP personalizada vinculada a ${url}.`).trim(),
          accent: String(item?.accent || '#0f766e'),
          mark: String(item?.mark || name.split(/\s+/).map((part) => part[0] || '').join('').slice(0, 2).toUpperCase()).slice(0, 2) || 'MC',
          connected: Boolean(item?.connected ?? true),
          updatedAt: String(item?.updatedAt || formatMcpDate()),
          isCustom: true,
          url,
          authType,
          credential,
          basicUsername: String(item?.basicUsername || ''),
          basicPassword: String(item?.basicPassword || ''),
          toolCount: Number(item?.toolCount || 0),
        };
      })
      .filter(Boolean);
  } catch (_) {
    return [];
  }
}

function saveCustomMcpConnections(connections) {
  window.localStorage.setItem(MCP_CUSTOM_CONNECTIONS_STORAGE_KEY, JSON.stringify(connections));
}

function getAllMcpConnectionsCatalog() {
  return [...MCP_CONNECTIONS_CATALOG, ...getCustomMcpConnections()];
}

function getMcpConnectionsState() {
  const defaults = getDefaultMcpConnectionsState();
  const raw = window.localStorage.getItem(MCP_CONNECTIONS_STATE_STORAGE_KEY);
  const customConnections = getCustomMcpConnections();
  customConnections.forEach((item) => {
    defaults[item.id] = {
      connected: Boolean(item.connected),
      updatedAt: String(item.updatedAt || formatMcpDate()),
      url: String(item.url || ''),
      authType: String(item.authType || 'bearer'),
      credential: String(item.credential || ''),
      basicUsername: String(item.basicUsername || ''),
      basicPassword: String(item.basicPassword || ''),
      toolCount: Number(item.toolCount || 0),
    };
  });
  if (!raw) return defaults;
  try {
    const parsed = JSON.parse(raw);
    return Object.keys(defaults).reduce((acc, key) => {
      const value = parsed?.[key];
      acc[key] = {
        connected: typeof value?.connected === 'boolean' ? value.connected : defaults[key].connected,
        updatedAt: String(value?.updatedAt || defaults[key].updatedAt),
        url: String(value?.url || defaults[key].url || ''),
        authType: String(value?.authType || defaults[key].authType || 'bearer'),
        credential: String(value?.credential || defaults[key].credential || ''),
        basicUsername: String(value?.basicUsername || defaults[key].basicUsername || ''),
        basicPassword: String(value?.basicPassword || defaults[key].basicPassword || ''),
        toolCount: Number(value?.toolCount || defaults[key].toolCount || 0),
      };
      return acc;
    }, {});
  } catch (_) {
    return defaults;
  }
}

function saveMcpConnectionsState(state) {
  window.localStorage.setItem(MCP_CONNECTIONS_STATE_STORAGE_KEY, JSON.stringify(state));
}

function formatMcpDate(date = new Date()) {
  return new Intl.DateTimeFormat('pt-BR').format(date);
}

function getMcpConnectionById(connectionId = '') {
  const normalizedId = String(connectionId || '').trim();
  return getAllMcpConnectionsCatalog().find((item) => item.id === normalizedId) || null;
}

function getMcpConnectionViewModel(item) {
  const state = getMcpConnectionsState();
  const connectionState = state[item.id] || {};
  const isConnected = Boolean(connectionState.connected);
  return {
    ...item,
    isConnected,
    updatedAt: String(connectionState.updatedAt || item.updatedAt || '16/06/2026'),
    url: String(connectionState.url || item.url || ''),
    authType: String(connectionState.authType || item.authType || 'bearer'),
    credential: String(connectionState.credential || item.credential || ''),
    basicUsername: String(connectionState.basicUsername || item.basicUsername || ''),
    basicPassword: String(connectionState.basicPassword || item.basicPassword || ''),
    toolCount: Number(connectionState.toolCount || item.toolCount || 0),
    statusLabel: isConnected ? 'Conectado' : 'Disponível',
    statusClass: isConnected ? 'success' : 'neutral',
    actionLabel: isConnected ? 'Editar conexão' : 'Conectar',
    actionIcon: isConnected ? 'edit' : 'link',
  };
}

function closeMcpConnectionModal() {
  if (!mcpConnectionModal) return;
  mcpConnectionModal.classList.remove('open');
  mcpConnectionModal.setAttribute('aria-hidden', 'true');
  delete mcpConnectionModal.dataset.mcpId;
}

function openMcpConnectionModal(connection) {
  if (!mcpConnectionModal || !connection) return;
  mcpConnectionModal.dataset.mcpId = connection.id;
  if (mcpConnectionModalLogo) {
    mcpConnectionModalLogo.src = buildMcpLogoDataUri(connection);
    mcpConnectionModalLogo.alt = `Logo ${connection.name}`;
  }
  if (mcpConnectionModalName) mcpConnectionModalName.textContent = connection.name;
  if (mcpConnectionModalStatus) {
    mcpConnectionModalStatus.textContent = 'Conectado';
    mcpConnectionModalStatus.className = 'chip success';
  }
  if (mcpConnectionModalDescription) {
    mcpConnectionModalDescription.textContent =
      `Desconecte ${connection.name} ou tente conectar novamente caso alguma habilidade vinculada precise ser restabelecida.`;
  }
  mcpConnectionModal.classList.add('open');
  mcpConnectionModal.setAttribute('aria-hidden', 'false');
}

function closeMcpAuthModal() {
  if (!mcpAuthModal) return;
  mcpAuthModal.classList.remove('open');
  mcpAuthModal.setAttribute('aria-hidden', 'true');
  delete mcpAuthModal.dataset.mcpId;
  if (mcpAuthSubmitBtn) {
    mcpAuthSubmitBtn.disabled = false;
    mcpAuthSubmitBtn.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">open_in_new</span>Abrir autenticação';
  }
}

function openMcpAuthModal(connection) {
  if (!mcpAuthModal || !connection) return;
  const normalizedConnection = getMcpConnectionViewModel(connection);
  mcpAuthModal.dataset.mcpId = normalizedConnection.id;
  if (mcpAuthModalLogo) {
    mcpAuthModalLogo.src = buildMcpLogoDataUri(normalizedConnection);
    mcpAuthModalLogo.alt = `Logo ${normalizedConnection.name}`;
  }
  if (mcpAuthModalName) mcpAuthModalName.textContent = normalizedConnection.name;
  if (mcpAuthModalDescription) {
    mcpAuthModalDescription.textContent = normalizedConnection.url || normalizedConnection.description;
  }
  if (mcpAuthModalNotice) {
    mcpAuthModalNotice.textContent = `O modal de autenticação de ${normalizedConnection.name} será aberto.`;
  }
  if (mcpAuthSubmitBtn) {
    mcpAuthSubmitBtn.disabled = false;
    mcpAuthSubmitBtn.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">open_in_new</span>Abrir autenticação';
  }
  mcpAuthModal.classList.add('open');
  mcpAuthModal.setAttribute('aria-hidden', 'false');
}

function triggerMcpAuthOpening(connection, shouldCloseModal = false) {
  if (!connection) return;
  if (shouldCloseModal && mcpAuthSubmitBtn) {
    mcpAuthSubmitBtn.disabled = true;
    mcpAuthSubmitBtn.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">open_in_new</span>Abrindo...';
  }
  if (shouldCloseModal) {
    window.setTimeout(() => closeMcpAuthModal(), 350);
  }
  showAppToast(`O modal de autenticação de ${connection.name} será aberto`);
}

function setMcpCreateProgressVisible(isVisible) {
  if (!mcpCreateProgress) return;
  mcpCreateProgress.hidden = !isVisible;
  mcpCreateProgress.setAttribute('aria-hidden', isVisible ? 'false' : 'true');
}

function resetMcpCreateProgress() {
  if (mcpCreateProgressTitle) mcpCreateProgressTitle.textContent = 'Validando conexão';
  if (mcpCreateProgressStatus) mcpCreateProgressStatus.textContent = 'Preparando cadastro...';
  mcpCreateProgress?.querySelectorAll('[data-mcp-step]').forEach((step) => {
    step.classList.remove('is-active', 'is-complete');
    const icon = step.querySelector('.material-symbols-rounded');
    if (icon) icon.textContent = 'radio_button_unchecked';
  });
}

function syncMcpCreateCredentialField() {
  if (!mcpCreateCredential || !mcpCreateAuthType) return;
  const authType = mcpCreateAuthType.value;
  const isBasic = authType === 'basic';
  const hasNoAuth = authType === 'none';

  if (mcpCreateBasicFields) mcpCreateBasicFields.hidden = !isBasic;
  if (mcpCreateCredentialField) mcpCreateCredentialField.hidden = isBasic || hasNoAuth;

  if (mcpCreateBasicUsername) {
    mcpCreateBasicUsername.required = isBasic;
    mcpCreateBasicUsername.disabled = !isBasic;
    if (!isBasic) mcpCreateBasicUsername.value = '';
  }
  if (mcpCreateBasicPassword) {
    mcpCreateBasicPassword.required = isBasic;
    mcpCreateBasicPassword.disabled = !isBasic;
    if (!isBasic) mcpCreateBasicPassword.value = '';
  }

  const requiresCredential = !isBasic && !hasNoAuth;
  mcpCreateCredential.required = requiresCredential;
  mcpCreateCredential.disabled = isBasic || hasNoAuth;

  if (hasNoAuth) {
    mcpCreateCredential.value = '';
    mcpCreateCredential.placeholder = 'Não é necessário informar credencial para esta opção';
    if (mcpCreateCredentialLabel) mcpCreateCredentialLabel.textContent = 'Credencial';
    if (mcpCreateCredentialHint) mcpCreateCredentialHint.textContent = 'Não será necessário informar credenciais para esta conexão.';
  } else if (authType === 'api-key') {
    if (mcpCreateCredentialLabel) mcpCreateCredentialLabel.textContent = 'Chave de API';
    if (mcpCreateCredentialHint) mcpCreateCredentialHint.textContent = 'Informe a chave de API usada para autenticar no endpoint.';
    mcpCreateCredential.placeholder = 'Cole aqui a chave de API';
  } else {
    if (mcpCreateCredentialLabel) mcpCreateCredentialLabel.textContent = 'Token';
    if (mcpCreateCredentialHint) mcpCreateCredentialHint.textContent = 'O valor informado será usado no teste inicial e salvo na configuração da conexão.';
    mcpCreateCredential.placeholder = 'Cole aqui o token';
  }

}

function closeMcpCreateModal() {
  if (!mcpCreateModal || !mcpCreateForm) return;
  mcpCreateModal.classList.remove('open');
  mcpCreateModal.setAttribute('aria-hidden', 'true');
  delete mcpCreateModal.dataset.connectionId;
  delete mcpCreateModal.dataset.mode;
  mcpCreateForm.reset();
  if (mcpCreateAuthType) mcpCreateAuthType.value = 'bearer';
  syncMcpCreateCredentialField();
  setMcpCreateProgressVisible(false);
  resetMcpCreateProgress();
  if (mcpCreateSubmitBtn) {
    mcpCreateSubmitBtn.disabled = false;
    mcpCreateSubmitBtn.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">link</span>Conectar';
  }
}

function openMcpCreateModal(connection = null) {
  if (!mcpCreateModal || !mcpCreateForm) return;
  const normalizedConnection = connection ? getMcpConnectionViewModel(connection) : null;
  mcpCreateModal.dataset.mode = normalizedConnection ? 'existing' : 'custom';
  if (normalizedConnection?.id) mcpCreateModal.dataset.connectionId = normalizedConnection.id;
  if (mcpCreateName) mcpCreateName.value = normalizedConnection?.name || '';
  if (mcpCreateUrl) mcpCreateUrl.value = normalizedConnection?.url || '';
  if (mcpCreateAuthType) mcpCreateAuthType.value = normalizedConnection?.authType || 'bearer';
  if (mcpCreateCredential) mcpCreateCredential.value = normalizedConnection?.credential || '';
  if (mcpCreateBasicUsername) mcpCreateBasicUsername.value = normalizedConnection?.basicUsername || '';
  if (mcpCreateBasicPassword) mcpCreateBasicPassword.value = normalizedConnection?.basicPassword || '';
  syncMcpCreateCredentialField();
  setMcpCreateProgressVisible(false);
  resetMcpCreateProgress();
  if (mcpCreateSubmitBtn) {
    mcpCreateSubmitBtn.disabled = false;
    mcpCreateSubmitBtn.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">link</span>Conectar';
  }
  mcpCreateModal.classList.add('open');
  mcpCreateModal.setAttribute('aria-hidden', 'false');
}

function setMcpProgressStepState(stepKey, state) {
  const step = mcpCreateProgress?.querySelector(`[data-mcp-step="${stepKey}"]`);
  if (!step) return;
  step.classList.remove('is-active', 'is-complete');
  const icon = step.querySelector('.material-symbols-rounded');
  if (state === 'active') {
    step.classList.add('is-active');
    if (icon) icon.textContent = 'progress_activity';
    return;
  }
  if (state === 'complete') {
    step.classList.add('is-complete');
    if (icon) icon.textContent = 'check_circle';
    return;
  }
  if (icon) icon.textContent = 'radio_button_unchecked';
}

function waitMcpFlowStep(delay = 450) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, delay);
  });
}

async function runMcpConnectionProvisionFlow(payload) {
  const steps = [
    { key: 'connection-test', label: 'Executando teste de conexão...' },
    { key: 'handshake', label: 'Realizando handshake com o servidor MCP...' },
    { key: 'discovery', label: 'Descobrindo ferramentas e capacidades...' },
    { key: 'storage', label: 'Armazenando credenciais e configuração...' },
  ];

  for (const step of steps) {
    if (mcpCreateProgressStatus) mcpCreateProgressStatus.textContent = step.label;
    setMcpProgressStepState(step.key, 'active');
    await waitMcpFlowStep();
    setMcpProgressStepState(step.key, 'complete');
  }

  const normalizedName = String(payload.name || '').trim();
  const existingId = String(payload.connectionId || '').trim();
  const normalizedId = existingId || `custom-mcp-${Date.now()}`;
  const discoveredTools = Math.max(3, Math.min(12, Math.ceil(normalizedName.length / 2)));
  const normalizedDescription = existingId
    ? String(payload.description || `Integração MCP configurada para ${normalizedName}.`).trim()
    : `Conexão MCP personalizada vinculada a ${payload.url}.`;
  const connectionRecord = {
    id: normalizedId,
    name: normalizedName,
    description: normalizedDescription,
    accent: payload.accent || '#0f766e',
    mark: payload.mark || normalizedName.slice(0, 2).toUpperCase() || 'MC',
    connected: true,
    updatedAt: formatMcpDate(),
    isCustom: !existingId,
    url: payload.url,
    authType: payload.authType,
    credential: payload.credential,
    basicUsername: payload.basicUsername || '',
    basicPassword: payload.basicPassword || '',
    toolCount: discoveredTools,
  };

  if (!existingId) {
    const currentConnections = getCustomMcpConnections();
    currentConnections.unshift(connectionRecord);
    saveCustomMcpConnections(currentConnections);
  } else {
    const currentConnections = getCustomMcpConnections();
    const index = currentConnections.findIndex((item) => item.id === normalizedId);
    if (index >= 0) {
      currentConnections[index] = { ...currentConnections[index], ...connectionRecord };
      saveCustomMcpConnections(currentConnections);
    }
  }

  updateMcpConnectionState(normalizedId, {
    connected: true,
    updatedAt: connectionRecord.updatedAt,
    url: connectionRecord.url,
    authType: connectionRecord.authType,
    credential: connectionRecord.credential,
    basicUsername: connectionRecord.basicUsername,
    basicPassword: connectionRecord.basicPassword,
    toolCount: connectionRecord.toolCount,
  });

  if (mcpCreateProgressTitle) mcpCreateProgressTitle.textContent = 'Conexão pronta';
  if (mcpCreateProgressStatus) {
    mcpCreateProgressStatus.textContent = `${discoveredTools} ferramentas identificadas e salvas com sucesso.`;
  }

  return { connectionRecord, discoveredTools };
}

function updateMcpConnectionState(connectionId, nextState) {
  const state = getMcpConnectionsState();
  const current = state[connectionId] || {};
  state[connectionId] = {
    connected: typeof nextState.connected === 'boolean' ? nextState.connected : Boolean(current.connected),
    updatedAt: String(nextState.updatedAt || current.updatedAt || formatMcpDate()),
    url: String(nextState.url || current.url || ''),
    authType: String(nextState.authType || current.authType || 'bearer'),
    credential: String(nextState.credential || current.credential || ''),
    basicUsername: String(nextState.basicUsername || current.basicUsername || ''),
    basicPassword: String(nextState.basicPassword || current.basicPassword || ''),
    toolCount: Number(nextState.toolCount || current.toolCount || 0),
  };
  saveMcpConnectionsState(state);
}

function renderMcpConnections() {
  if (!mcpsGrid || !mcpsTable) return;
  const query = String(mcpsSearchInput?.value || '').trim().toLowerCase();
  const visibleConnections = getAllMcpConnectionsCatalog()
    .map((item) => getMcpConnectionViewModel(item))
    .filter((item) => {
    const haystack = `${item.name} ${item.description} ${item.url || ''}`.toLowerCase();
    return haystack.includes(query);
  });

  mcpsGrid.replaceChildren();
  mcpsTable.querySelectorAll('.data-row:not(.header)').forEach((row) => row.remove());

  visibleConnections.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'mcps-card';

    const logo = document.createElement('img');
    logo.className = 'mcps-card-logo';
    logo.dataset.mcpId = item.id;
    logo.src = buildMcpLogoDataUri(item);
    logo.alt = `Logo ${item.name}`;

    const copy = document.createElement('div');
    copy.className = 'mcps-card-copy';

    const title = document.createElement('h3');
    title.textContent = item.name;

    const description = document.createElement('p');
    description.textContent = item.description;

    copy.append(title, description);

    const footer = document.createElement('div');
    footer.className = 'mcps-card-footer';

    const button = document.createElement('button');
    button.className = 'btn primary';
    button.type = 'button';
    button.dataset.mcpId = item.id;
    button.dataset.mcpAction = item.isConnected ? 'edit' : 'connect';
    button.innerHTML = `
      <span class="material-symbols-rounded" aria-hidden="true">${item.actionIcon}</span>
      ${item.actionLabel}
    `;

    footer.append(button);
    card.append(logo, copy, footer);
    mcpsGrid.append(card);

    const row = document.createElement('div');
    row.className = 'data-row';
    row.innerHTML = `
      <span><strong>${escapeHtmlWes(item.name)}</strong></span>
      <span class="muted">${escapeHtmlWes(item.description)}</span>
      <span class="chip ${escapeHtmlWes(item.statusClass)}">${escapeHtmlWes(item.statusLabel)}</span>
      <span>${escapeHtmlWes(item.updatedAt)}</span>
      <span class="row-actions">
        <button class="icon-btn action-icon" type="button" data-mcp-id="${escapeHtmlWes(item.id)}" data-mcp-action="${escapeHtmlWes(item.isConnected ? 'edit' : 'connect')}" aria-label="${escapeHtmlWes(item.actionLabel)} ${escapeHtmlWes(item.name)}" title="${escapeHtmlWes(item.actionLabel)} ${escapeHtmlWes(item.name)}">
          <span class="material-symbols-rounded" aria-hidden="true">${escapeHtmlWes(item.actionIcon)}</span>
        </button>
      </span>
    `;
    mcpsTable.append(row);
  });

  mcpsEmptyState?.classList.toggle('is-hidden', visibleConnections.length > 0);
}

function setMcpsViewMode(mode) {
  if (!mcpsGrid || !mcpsTable || !mcpsGridViewBtn || !mcpsListViewBtn) return;
  const normalizedMode = mode === 'list' ? 'list' : 'grid';
  const isGrid = normalizedMode === 'grid';

  mcpsGrid.classList.toggle('is-hidden', !isGrid);
  mcpsTable.classList.toggle('is-hidden', isGrid);
  mcpsGridViewBtn.classList.toggle('is-active', isGrid);
  mcpsListViewBtn.classList.toggle('is-active', !isGrid);
  mcpsGridViewBtn.setAttribute('aria-pressed', isGrid ? 'true' : 'false');
  mcpsListViewBtn.setAttribute('aria-pressed', isGrid ? 'false' : 'true');
  window.localStorage.setItem(MCP_VIEW_MODE_STORAGE_KEY, normalizedMode);
}

if (mcpsGrid && mcpsTable) {
  renderMcpConnections();
  setMcpsViewMode(window.localStorage.getItem(MCP_VIEW_MODE_STORAGE_KEY) || 'grid');
  mcpsSearchInput?.addEventListener('input', renderMcpConnections);
  mcpsGridViewBtn?.addEventListener('click', () => setMcpsViewMode('grid'));
  mcpsListViewBtn?.addEventListener('click', () => setMcpsViewMode('list'));
  openMcpCreateModalBtn?.addEventListener('click', () => openMcpCreateModal());
  const handleMcpConnect = (event) => {
    const button = event.target.closest('[data-mcp-action][data-mcp-id]');
    if (!button) return;
    const connection = getMcpConnectionById(button.dataset.mcpId);
    if (!connection) return;
    if (button.dataset.mcpAction === 'edit') {
      openMcpConnectionModal(getMcpConnectionViewModel(connection));
      return;
    }
    triggerMcpAuthOpening(connection);
  };
  mcpsGrid.addEventListener('click', handleMcpConnect);
  mcpsTable.addEventListener('click', handleMcpConnect);
}

if (mcpAuthModal && mcpAuthForm) {
  mcpAuthModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-mcp-auth-close]')) closeMcpAuthModal();
  });

  mcpAuthSubmitBtn?.addEventListener('click', () => {
    const connection = getMcpConnectionById(mcpAuthModal.dataset.mcpId);
    if (!connection) return;
    triggerMcpAuthOpening(connection, true);
  });
}

if (mcpCreateModal && mcpCreateForm) {
  mcpCreateModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-mcp-create-close]')) closeMcpCreateModal();
  });

  mcpCreateAuthType?.addEventListener('change', syncMcpCreateCredentialField);
  syncMcpCreateCredentialField();

  mcpCreateForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const authType = String(mcpCreateAuthType?.value || 'bearer').trim();
    const basicUsername = String(mcpCreateBasicUsername?.value || '').trim();
    const basicPassword = String(mcpCreateBasicPassword?.value || '').trim();
    const credential = authType === 'basic'
      ? `${basicUsername}:${basicPassword}`
      : String(mcpCreateCredential?.value || '').trim();
    const payload = {
      connectionId: mcpCreateModal.dataset.mode === 'existing' ? mcpCreateModal.dataset.connectionId : '',
      name: String(mcpCreateName?.value || '').trim(),
      url: String(mcpCreateUrl?.value || '').trim(),
      authType,
      credential,
      basicUsername,
      basicPassword,
    };
    if (!payload.name || !payload.url) return;
    if (payload.authType === 'basic' && (!payload.basicUsername || !payload.basicPassword)) return;
    if (payload.authType !== 'basic' && payload.authType !== 'none' && !payload.credential) return;
    const baseConnection = payload.connectionId ? getMcpConnectionById(payload.connectionId) : null;
    if (baseConnection) {
      payload.description = baseConnection.description;
      payload.accent = baseConnection.accent;
      payload.mark = baseConnection.mark;
    }

    if (mcpCreateSubmitBtn) {
      mcpCreateSubmitBtn.disabled = true;
      mcpCreateSubmitBtn.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">progress_activity</span>Conectando...';
    }
    setMcpCreateProgressVisible(true);
    resetMcpCreateProgress();

    try {
      const { connectionRecord, discoveredTools } = await runMcpConnectionProvisionFlow(payload);
      renderMcpConnections();
      window.setTimeout(() => {
        closeMcpCreateModal();
      }, 650);
      showAppToast(`Conexão ${connectionRecord.name} criada com sucesso (${discoveredTools} ferramentas encontradas)`);
    } catch (_) {
      if (mcpCreateProgressTitle) mcpCreateProgressTitle.textContent = 'Falha na conexão';
      if (mcpCreateProgressStatus) mcpCreateProgressStatus.textContent = 'Não foi possível concluir o provisionamento desta conexão.';
      if (mcpCreateSubmitBtn) {
        mcpCreateSubmitBtn.disabled = false;
        mcpCreateSubmitBtn.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">refresh</span>Tentar novamente';
      }
    }
  });
}

if (mcpConnectionModal && mcpConnectionDisconnectBtn && mcpConnectionReconnectBtn) {
  mcpConnectionModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-mcp-connection-close]')) closeMcpConnectionModal();
  });

  mcpConnectionDisconnectBtn.addEventListener('click', () => {
    const connection = getMcpConnectionById(mcpConnectionModal.dataset.mcpId);
    if (!connection) return;
    updateMcpConnectionState(connection.id, {
      connected: false,
      updatedAt: formatMcpDate(),
    });
    closeMcpConnectionModal();
    renderMcpConnections();
    showAppToast(`Conexão ${connection.name} desconectada`);
  });

  mcpConnectionReconnectBtn.addEventListener('click', () => {
    const connection = getMcpConnectionById(mcpConnectionModal.dataset.mcpId);
    if (!connection) return;
    closeMcpConnectionModal();
    openMcpAuthModal(connection);
  });
}

function destroyVoiceMessagingInsightsChart() {
  if (!voiceMessagingInsightsChart) return;
  voiceMessagingInsightsChart.destroy();
  voiceMessagingInsightsChart = null;
}

function getVoiceMessagingInsightsBarRadius(context) {
  const { chart, dataIndex, datasetIndex } = context;
  const datasets = chart?.data?.datasets || [];
  const currentValue = Number(datasets[datasetIndex]?.data?.[dataIndex] || 0);
  if (currentValue <= 0) return 0;

  let topDatasetIndex = -1;
  datasets.forEach((dataset, index) => {
    if (Number(dataset?.data?.[dataIndex] || 0) > 0) {
      topDatasetIndex = index;
    }
  });

  if (datasetIndex !== topDatasetIndex) return 0;
  return { topLeft: 12, topRight: 12 };
}

function syncVoiceMessagingInsightsChart(routeKey = '') {
  const isInsightsRoute = routeKey === 'dashboard/voice-messaging/insights';
  if (!isInsightsRoute) {
    destroyVoiceMessagingInsightsChart();
    return;
  }
  if (!voiceMessagingInsightsChartCanvas || !window.Chart) return;
  if (voiceMessagingInsightsChart) return;

  voiceMessagingInsightsChart = new window.Chart(voiceMessagingInsightsChartCanvas, {
    type: 'bar',
    data: {
      labels: ['10h', '14h'],
      datasets: [
        {
          label: 'Confirmadas',
          data: [1, 1],
          backgroundColor: '#0b82f9',
          borderRadius: getVoiceMessagingInsightsBarRadius,
          borderSkipped: false,
          stack: 'calls',
          maxBarThickness: 86,
        },
        {
          label: 'Atendidas',
          data: [0, 1],
          backgroundColor: '#60a5fa',
          borderRadius: getVoiceMessagingInsightsBarRadius,
          borderSkipped: false,
          stack: 'calls',
          maxBarThickness: 86,
        },
        {
          label: 'Recusadas',
          data: [0, 0],
          backgroundColor: '#dbeafe',
          borderRadius: getVoiceMessagingInsightsBarRadius,
          borderSkipped: false,
          stack: 'calls',
          maxBarThickness: 86,
        },
        {
          label: 'Sem resposta',
          data: [0, 1],
          backgroundColor: '#94a3b8',
          borderRadius: getVoiceMessagingInsightsBarRadius,
          borderSkipped: false,
          stack: 'calls',
          maxBarThickness: 86,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      layout: {
        padding: { top: 8, right: 18, bottom: 0, left: 0 },
      },
      plugins: {
        legend: {
          position: 'right',
          align: 'center',
          labels: {
            usePointStyle: true,
            pointStyle: 'rectRounded',
            boxWidth: 12,
            boxHeight: 12,
            color: '#475569',
            font: {
              family: 'inherit',
              size: 13,
              weight: '600',
            },
            padding: 16,
          },
        },
        tooltip: {
          backgroundColor: '#0f172a',
          titleColor: '#f8fafc',
          bodyColor: '#e2e8f0',
          padding: 12,
          displayColors: true,
          callbacks: {
            title(items) {
              const hour = items[0]?.label || '';
              return `Horário ${hour}`;
            },
            label(context) {
              const value = Number(context.parsed.y || 0);
              const suffix = value === 1 ? 'chamada' : 'chamadas';
              return `${context.dataset.label}: ${value} ${suffix}`;
            },
            footer(items) {
              const total = items.reduce((sum, item) => sum + Number(item.parsed.y || 0), 0);
              return `Total no horário: ${total}`;
            },
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
            drawBorder: false,
          },
          border: {
            display: false,
          },
          ticks: {
            color: '#475569',
            font: {
              family: 'inherit',
              size: 13,
              weight: '600',
            },
          },
          title: {
            display: true,
            text: 'Horário do disparo',
            color: '#64748b',
            font: {
              family: 'inherit',
              size: 12,
              weight: '600',
            },
            padding: { top: 10 },
          },
        },
        y: {
          stacked: true,
          beginAtZero: true,
          suggestedMax: 4,
          ticks: {
            stepSize: 1,
            precision: 0,
            color: '#64748b',
            font: {
              family: 'inherit',
              size: 12,
              weight: '500',
            },
          },
          grid: {
            color: 'rgba(214, 224, 237, 0.9)',
            drawBorder: false,
          },
          border: {
            display: false,
          },
          title: {
            display: true,
            text: 'Quantidade de chamadas',
            color: '#64748b',
            font: {
              family: 'inherit',
              size: 12,
              weight: '600',
            },
            padding: { bottom: 8 },
          },
        },
      },
    },
  });
}

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

function getDashboardQuickActionById(actionId) {
  return DASHBOARD_QUICK_ACTIONS_CATALOG.find((action) => action.id === actionId) || null;
}

function saveDashboardQuickActionsSelection() {
  try {
    window.localStorage.setItem(DASHBOARD_QUICK_ACTIONS_STORAGE_KEY, JSON.stringify(dashboardQuickActionsSelection));
  } catch (error) {
    console.warn('Nao foi possivel salvar as acoes rapidas do painel.', error);
  }
}

function normalizeDashboardQuickActionsSelection(value) {
  if (!Array.isArray(value)) return [...DASHBOARD_QUICK_ACTIONS_DEFAULT];
  const unique = [];
  value.forEach((item) => {
    const actionId = String(item || '').trim();
    if (!actionId || unique.includes(actionId) || !getDashboardQuickActionById(actionId)) return;
    unique.push(actionId);
  });
  return unique.slice(0, DASHBOARD_QUICK_ACTIONS_LIMIT);
}

function loadDashboardQuickActionsSelection() {
  try {
    const raw = window.localStorage.getItem(DASHBOARD_QUICK_ACTIONS_STORAGE_KEY);
    if (!raw) return;
    const parsed = normalizeDashboardQuickActionsSelection(JSON.parse(raw));
    dashboardQuickActionsSelection =
      parsed.length === DASHBOARD_QUICK_ACTIONS_DEFAULT.length
        ? parsed
        : [...DASHBOARD_QUICK_ACTIONS_DEFAULT];
  } catch (error) {
    dashboardQuickActionsSelection = [...DASHBOARD_QUICK_ACTIONS_DEFAULT];
  }
}

function buildDashboardQuickActionButton(action) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `btn ${action.variant || 'outline'}`;
  button.dataset.quickActionId = action.id;

  const label = document.createElement('span');
  label.textContent = action.label;

  button.append(label);
  button.addEventListener('click', () => {
    if (action.route) window.location.hash = action.route;
    if (action.triggerId) {
      window.setTimeout(() => {
        document.getElementById(action.triggerId)?.click();
      }, 120);
    }
  });
  return button;
}

function renderDashboardQuickActions() {
  if (!dashboardQuickActionsContainers.length) return;
  const actions = normalizeDashboardQuickActionsSelection(dashboardQuickActionsSelection)
    .map((actionId) => getDashboardQuickActionById(actionId))
    .filter(Boolean);

  dashboardQuickActionsContainers.forEach((container) => {
    container.replaceChildren(...actions.map((action) => buildDashboardQuickActionButton(action)));
  });
}

function persistDashboardQuickActionsSelection() {
  dashboardQuickActionsSelection = normalizeDashboardQuickActionsSelection(dashboardQuickActionsSelection);
  saveDashboardQuickActionsSelection();
  renderDashboardQuickActions();
  renderDashboardQuickActionsModal();
}

function removeDashboardQuickAction(actionId) {
  dashboardQuickActionsSelection = dashboardQuickActionsSelection.filter((id) => id !== actionId);
  persistDashboardQuickActionsSelection();
  showAppToast('Ação rápida removida');
}

function addDashboardQuickAction(actionId) {
  if (!actionId || dashboardQuickActionsSelection.includes(actionId)) return;
  if (dashboardQuickActionsSelection.length >= DASHBOARD_QUICK_ACTIONS_LIMIT) {
    showAppToast('Remova uma ação rápida antes de adicionar outra');
    return;
  }
  dashboardQuickActionsSelection = [...dashboardQuickActionsSelection, actionId];
  persistDashboardQuickActionsSelection();
  showAppToast('Ação rápida adicionada');
}

function createDashboardQuickActionDraggable(action, index) {
  const item = document.createElement('article');
  item.className = 'dashboard-quick-actions-selected-item';
  item.dataset.quickActionId = action.id;
  item.dataset.quickActionIndex = String(index);

  const content = document.createElement('div');
  content.className = 'dashboard-quick-actions-selected-content';

  const title = document.createElement('p');
  title.className = 'dashboard-quick-actions-selected-title';
  title.textContent = action.label;

  const description = document.createElement('p');
  description.className = 'dashboard-quick-actions-selected-desc';
  description.textContent = action.description;

  content.append(title, description);

  const removeButton = document.createElement('button');
  removeButton.type = 'button';
  removeButton.className = 'icon-btn dashboard-quick-actions-remove';
  removeButton.setAttribute('aria-label', `Remover ${action.label}`);
  removeButton.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">close</span>';
  removeButton.addEventListener('click', () => removeDashboardQuickAction(action.id));

  item.append(content, removeButton);
  return item;
}

function createDashboardQuickActionAvailableCard(action) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = `btn ${action.variant || 'outline'} dashboard-quick-actions-available-btn`;
  card.dataset.quickActionId = action.id;
  card.textContent = action.label;

  card.addEventListener('click', () => addDashboardQuickAction(action.id));
  return card;
}

function renderDashboardQuickActionsModal() {
  if (!dashboardQuickActionsList) return;
  const wrapper = document.createElement('div');
  wrapper.className = 'dashboard-quick-actions-editor';

  const selectedSection = document.createElement('section');
  selectedSection.className = 'dashboard-quick-actions-panel';

  const selectedHeader = document.createElement('div');
  selectedHeader.className = 'dashboard-quick-actions-panel-header';
  selectedHeader.innerHTML = `
    <div>
      <p class="dashboard-quick-actions-slot-label">Selecionados</p>
      <p class="dashboard-quick-actions-panel-desc">Use o X para remover uma ação rápida.</p>
    </div>
    <span class="dashboard-quick-actions-current-badge">${dashboardQuickActionsSelection.length}/${DASHBOARD_QUICK_ACTIONS_LIMIT}</span>
  `;

  const selectedList = document.createElement('div');
  selectedList.className = 'dashboard-quick-actions-selected-list';

  if (dashboardQuickActionsSelection.length) {
    dashboardQuickActionsSelection
      .map((actionId) => getDashboardQuickActionById(actionId))
      .filter(Boolean)
      .forEach((action, index) => {
        selectedList.append(createDashboardQuickActionDraggable(action, index));
      });
  } else {
    const emptyState = document.createElement('div');
    emptyState.className = 'dashboard-quick-actions-empty';
    emptyState.textContent = 'Clique em um botão da lista abaixo para começar.';
    selectedList.append(emptyState);
  }

  selectedSection.append(selectedHeader, selectedList);

  const availableSection = document.createElement('section');
  availableSection.className = 'dashboard-quick-actions-panel';

  const availableHeader = document.createElement('div');
  availableHeader.className = 'dashboard-quick-actions-panel-header';
  availableHeader.innerHTML = `
    <div>
      <p class="dashboard-quick-actions-slot-label">Disponíveis</p>
      <p class="dashboard-quick-actions-panel-desc">Clique para adicionar uma ação rápida.</p>
    </div>
  `;

  const availableGrid = document.createElement('div');
  availableGrid.className = 'dashboard-quick-actions-options';

  DASHBOARD_QUICK_ACTIONS_CATALOG
    .filter((action) => !dashboardQuickActionsSelection.includes(action.id))
    .forEach((action) => {
      availableGrid.append(createDashboardQuickActionAvailableCard(action));
    });

  if (!availableGrid.children.length) {
    const emptyState = document.createElement('div');
    emptyState.className = 'dashboard-quick-actions-empty';
    emptyState.textContent = 'Todas as ações disponíveis já foram selecionadas.';
    availableGrid.append(emptyState);
  }

  availableSection.append(availableHeader, availableGrid);

  wrapper.append(selectedSection, availableSection);
  dashboardQuickActionsList.replaceChildren(wrapper);
}

function closeDashboardQuickActionsModal() {
  if (!dashboardQuickActionsModal) return;
  dashboardQuickActionsModal.classList.remove('open');
  dashboardQuickActionsModal.setAttribute('aria-hidden', 'true');
}

function openDashboardQuickActionsModal() {
  if (!dashboardQuickActionsModal) return;
  renderDashboardQuickActionsModal();
  dashboardQuickActionsModal.classList.add('open');
  dashboardQuickActionsModal.setAttribute('aria-hidden', 'false');
}

loadDashboardQuickActionsSelection();
saveDashboardQuickActionsSelection();
renderDashboardQuickActions();

if (dashboardQuickActionsEditButtons.length && dashboardQuickActionsModal) {
  dashboardQuickActionsEditButtons.forEach((button) => {
    button.addEventListener('click', openDashboardQuickActionsModal);
  });

  dashboardQuickActionsModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-modal-close]')) closeDashboardQuickActionsModal();
  });
}

function confirmDeletionAction(targetLabel = 'este item') {
  const message =
    `Você tem certeza que deseja excluir ${targetLabel}? ` +
    'Se você excluir ficará registrado que seu usuário fez isso e a ação não poderá ser desfeita.';
  if (!confirmActionModal || !confirmActionModalMessage || !confirmActionModalConfirm) {
    return Promise.resolve(window.confirm(message));
  }

  confirmActionModalMessage.textContent = message;
  confirmActionModal.classList.add('open');
  confirmActionModal.setAttribute('aria-hidden', 'false');

  return new Promise((resolve) => {
    const close = (confirmed) => {
      confirmActionModal.classList.remove('open');
      confirmActionModal.setAttribute('aria-hidden', 'true');
      confirmActionModalConfirm.removeEventListener('click', onConfirm);
      confirmActionModal.removeEventListener('click', onCancelClick);
      document.removeEventListener('keydown', onEsc);
      resolve(confirmed);
    };
    const onConfirm = () => close(true);
    const onCancelClick = (event) => {
      if (event.target.closest('[data-confirm-action-cancel]')) close(false);
    };
    const onEsc = (event) => {
      if (event.key === 'Escape') close(false);
    };

    confirmActionModalConfirm.addEventListener('click', onConfirm);
    confirmActionModal.addEventListener('click', onCancelClick);
    document.addEventListener('keydown', onEsc);
  });
}

function confirmRotatePublicLinkAction() {
  if (!rotatePublicLinkModal || !rotatePublicLinkConfirm) {
    return Promise.resolve(window.confirm('O link atual será invalidado imediatamente. Deseja rotacionar o link público?'));
  }

  rotatePublicLinkModal.classList.add('open');
  rotatePublicLinkModal.setAttribute('aria-hidden', 'false');

  return new Promise((resolve) => {
    const close = (confirmed) => {
      rotatePublicLinkModal.classList.remove('open');
      rotatePublicLinkModal.setAttribute('aria-hidden', 'true');
      rotatePublicLinkConfirm.removeEventListener('click', onConfirm);
      rotatePublicLinkModal.removeEventListener('click', onCancelClick);
      document.removeEventListener('keydown', onEsc);
      resolve(confirmed);
    };
    const onConfirm = () => close(true);
    const onCancelClick = (event) => {
      if (event.target.closest('[data-rotate-link-cancel]')) close(false);
    };
    const onEsc = (event) => {
      if (event.key === 'Escape') close(false);
    };

    rotatePublicLinkConfirm.addEventListener('click', onConfirm);
    rotatePublicLinkModal.addEventListener('click', onCancelClick);
    document.addEventListener('keydown', onEsc);
  });
}

function bindStaticTableDeleteConfirmation(table, {
  buttonSelector = '.row-actions .action-icon.danger',
  getTargetLabel = () => 'este item',
  getSuccessMessage = () => 'Item excluído',
} = {}) {
  if (!table) return;

  table.addEventListener('click', async (event) => {
    const deleteButton = event.target.closest(buttonSelector);
    if (!deleteButton || !table.contains(deleteButton)) return;
    if (deleteButton.disabled || deleteButton.getAttribute('disabled') !== null || deleteButton.classList.contains('muted-icon')) return;

    const row = deleteButton.closest('.data-row, .agents-row');
    if (!row || row.classList.contains('header')) return;

    const targetLabel = getTargetLabel(row, deleteButton);
    if (!(await confirmDeletionAction(targetLabel))) return;

    row.remove();
    showAppToast(getSuccessMessage(row, deleteButton));
  });
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

function getAutomationLanguageLabel(language) {
  const labels = {
    csharp: 'C#',
    java: 'Java',
    python: 'Python',
  };
  return labels[String(language || '').trim()] || String(language || '').trim() || 'Não definida';
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

function parseAutomationParams(rawValue) {
  const sourceText = String(rawValue || '').trim();
  if (!sourceText) return {};

  try {
    const parsed = JSON.parse(sourceText);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function normalizeAutomationArrayValue(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item || '').trim()).filter(Boolean);
  }
  const singleValue = String(value || '').trim();
  return singleValue ? [singleValue] : [];
}

function getTodayDateInputValue() {
  const now = new Date();
  const timezoneOffset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - timezoneOffset).toISOString().slice(0, 10);
}

function getFutureDateInputValue(yearsAhead = 5) {
  const now = new Date();
  now.setFullYear(now.getFullYear() + yearsAhead);
  const timezoneOffset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - timezoneOffset).toISOString().slice(0, 10);
}

function createAutomationRow(data) {
  const row = document.createElement('div');
  const automationId = String(data.id || '').trim() || `automacao-${Date.now()}`;
  const status = data.status === 'inactive' ? 'inactive' : 'active';
  const switchId = `automationStatus${automationId.replace(/[^a-zA-Z0-9]+/g, '') || Date.now()}`;
  const priority = data.priority === 'high' || data.priority === 'low' ? data.priority : 'medium';
  const language = String(data.language || data.paramsObject?.language || '').trim() || 'csharp';

  row.className = 'data-row automation-row';
  row.dataset.automationId = automationId;
  row.dataset.automationName = data.name;
  row.dataset.automationDescription = data.description;
  row.dataset.automationPackage = data.packageId;
  row.dataset.automationVersion = data.version;
  row.dataset.automationPriority = priority;
  row.dataset.automationParams = JSON.stringify(data.paramsObject || {});
  row.dataset.automationStatus = status;
  row.dataset.automationLanguage = language;
  row.dataset.automationScheduled = data.scheduled ? 'true' : 'false';

  row.innerHTML = `
    <span>${escapeHtmlWes(data.name)}</span>
    <span class="muted">${escapeHtmlWes(data.description)}</span>
    <span>${escapeHtmlWes(data.lastExecution || 'Ainda não executada')}</span>
    <span><span class="chip automation-language-chip">${escapeHtmlWes(getAutomationLanguageLabel(language))}</span></span>
    <span><span class="chip ${getAutomationPriorityClass(priority)}">${getAutomationPriorityLabel(priority)}</span></span>
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
  const paramsObject = parseAutomationParams(paramsValue);
  const scheduleParams = paramsObject.schedule && typeof paramsObject.schedule === 'object'
    ? paramsObject.schedule
    : {};
  const packageId = String(row.dataset.automationPackage || '').trim();
  const language = String(
    row.dataset.automationLanguage ||
    paramsObject.language ||
    (['csharp', 'java', 'python'].includes(packageId) ? packageId : '') ||
    'csharp'
  ).trim();
  const isScheduled = row.dataset.automationScheduled === 'true' ||
    paramsObject.scheduled === true ||
    Boolean(paramsObject.schedule) ||
    Boolean(paramsObject.horario_agendamento);
  const statusInput = row.querySelector('.automation-status-switch input');

  return {
    id: String(row.dataset.automationId || '').trim(),
    name: String(row.dataset.automationName || cells[0]?.textContent || '').trim(),
    description: String(row.dataset.automationDescription || cells[1]?.textContent || '').trim(),
    packageId,
    version: String(row.dataset.automationVersion || '').trim(),
    priority: String(row.dataset.automationPriority || 'medium').trim(),
    params: paramsValue,
    paramsObject,
    language,
    scheduled: isScheduled,
    schedule: isScheduled ? {
      time: String(scheduleParams.time || paramsObject.horario_agendamento || '09:00').trim(),
      frequency: String(scheduleParams.frequency || paramsObject.repeticao || paramsObject.periodicidade || 'daily').trim(),
      startDate: String(scheduleParams.start_date || paramsObject.data_inicio || getTodayDateInputValue()).trim(),
      endDate: String(scheduleParams.end_date || paramsObject.data_termino || getFutureDateInputValue(5)).trim(),
      weekdays: normalizeAutomationArrayValue(scheduleParams.weekdays || paramsObject.dias_semana),
    } : null,
    inputFiles: normalizeAutomationArrayValue(paramsObject.input_files || paramsObject.input_file),
    credentials: normalizeAutomationArrayValue(paramsObject.credentials || paramsObject.credential),
    generatedCode: String(paramsObject.generated_code || '').trim(),
    lastExecution: String(cells[2]?.textContent || '').trim(),
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

function setVoiceConversationState(isActive) {
  if (!agentChatModal?.classList.contains('voice-mode')) return;
  if (chatVoiceStatus) {
    chatVoiceStatus.textContent = isActive ? 'Ouvindo...' : 'Pronto para começar';
  }
  agentChatModal.dataset.voiceStage = isActive ? 'listening' : 'idle';
  if (chatVoiceStartButton) {
    chatVoiceStartButton.dataset.voiceActive = isActive ? 'true' : 'false';
    chatVoiceStartButton.innerHTML = isActive
      ? '<i data-lucide="square"></i><span>Encerrar conversa</span>'
      : '<i data-lucide="play"></i><span>Iniciar conversa</span>';
  }
  scheduleLucideRefresh();
}

function setVoiceStageSpeaking() {
  if (!agentChatModal?.classList.contains('voice-mode')) return;
  agentChatModal.dataset.voiceStage = 'speaking';
  if (chatVoiceStatus) chatVoiceStatus.textContent = 'Falando...';
}

function setVoiceStageIdle() {
  if (!agentChatModal?.classList.contains('voice-mode')) return;
  agentChatModal.dataset.voiceStage = 'idle';
  if (chatVoiceStatus) chatVoiceStatus.textContent = 'Pronto para começar';
}

function syncChatVoiceInterruptSensitivity() {
  if (!chatVoiceInterruptSensitivity) return;
  const sensitivity = Number(chatVoiceInterruptSensitivity.value || 1);
  const levels = [
    {
      label: 'Baixa',
      description: 'Prioriza a fala da IA e só interrompe quando a sua fala estiver bem clara.',
    },
    {
      label: 'Média',
      description: 'Equilibra fluidez e resposta para interromper sem cortar cedo demais.',
    },
    {
      label: 'Alta',
      description: 'Reage às pausas mais rápido, ideal para interromper a IA com menos esforço.',
    },
  ];
  const current = levels[Math.min(Math.max(sensitivity, 0), levels.length - 1)] || levels[1];
  if (chatVoiceInterruptSensitivityValue) {
    chatVoiceInterruptSensitivityValue.textContent = current.label;
  }
  if (chatVoiceInterruptSensitivityDescription) {
    chatVoiceInterruptSensitivityDescription.textContent = current.description;
  }
}

function syncChatVoiceInterruptSensitivityEnabled() {
  if (!chatVoiceInterruptSensitivity) return;
  const enabled = Boolean(chatVoiceInterruptToggle?.checked);
  chatVoiceInterruptSensitivity.disabled = !enabled;
  chatVoiceSensitivityGroup?.classList.toggle('is-disabled', !enabled);
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
    return !row.classList.contains('agents-row--scope-hide') && !row.classList.contains('agents-row--search-hide') && !row.classList.contains('agents-row--filter-hide');
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

if (voiceMessagingFilterBtn && voiceMessagingFilterMenu) {
  voiceMessagingFilterBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    voiceMessagingFilterMenu.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    voiceMessagingFilterMenu.classList.remove('open');
  });

  const filterOptions = voiceMessagingFilterMenu.querySelectorAll('.filter-option');
  const clearButton = voiceMessagingFilterMenu.querySelector('.filter-clear');

  filterOptions.forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.filter;
      voiceMessagingFilterMenu
        .querySelectorAll(`.filter-option[data-filter="${group}"]`)
        .forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      voiceMessagingFilterMenu.classList.remove('open');
    });
  });

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      voiceMessagingFilterMenu
        .querySelectorAll('.filter-option')
        .forEach((item) => item.classList.remove('active'));
      voiceMessagingFilterMenu
        .querySelectorAll('.filter-option[data-value=\"\"]')
        .forEach((item) => item.classList.add('active'));
      voiceMessagingFilterMenu.classList.remove('open');
    });
  }
}

if (hybridFlowsFilterBtn && hybridFlowsFilterMenu) {
  hybridFlowsFilterBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    hybridFlowsFilterMenu.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    hybridFlowsFilterMenu.classList.remove('open');
  });

  const filterOptions = hybridFlowsFilterMenu.querySelectorAll('.filter-option');
  const clearButton = hybridFlowsFilterMenu.querySelector('.filter-clear');

  filterOptions.forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.filter;
      hybridFlowsFilterMenu
        .querySelectorAll(`.filter-option[data-filter="${group}"]`)
        .forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      hybridFlowsFilterMenu.classList.remove('open');
    });
  });

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      hybridFlowsFilterMenu
        .querySelectorAll('.filter-option')
        .forEach((item) => item.classList.remove('active'));
      hybridFlowsFilterMenu
        .querySelectorAll('.filter-option[data-value=\"\"]')
        .forEach((item) => item.classList.add('active'));
      hybridFlowsFilterMenu.classList.remove('open');
    });
  }
}

if (campaignsFilterBtn && campaignsFilterMenu) {
  campaignsFilterBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    campaignsFilterMenu.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    campaignsFilterMenu.classList.remove('open');
  });

  const filterOptions = campaignsFilterMenu.querySelectorAll('.filter-option');
  const clearButton = campaignsFilterMenu.querySelector('.filter-clear');

  filterOptions.forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.filter;
      campaignsFilterMenu
        .querySelectorAll(`.filter-option[data-filter="${group}"]`)
        .forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      campaignsFilterMenu.classList.remove('open');
      updateCampaignFilterButtonLabel();
      applyCampaignFilters();
    });
  });

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      campaignsFilterMenu
        .querySelectorAll('.filter-option')
        .forEach((item) => item.classList.remove('active'));
      campaignsFilterMenu
        .querySelectorAll('.filter-option[data-value=\"\"]')
        .forEach((item) => item.classList.add('active'));
      campaignsFilterMenu.classList.remove('open');
      updateCampaignFilterButtonLabel();
      applyCampaignFilters();
    });
  }
}

openVoiceMessagingCreatePage?.addEventListener('click', () => {
  openVoiceMessagingCreateMode('create');
});

campaignsCreateBtns.forEach((button) => {
  button.addEventListener('click', () => {
    resetCampaignCreateForm();
    window.location.hash = '#/dashboard/campaigns/new';
  });
});

function getSelectedCampaignIntegrationLabel() {
  const selected = document.querySelector('input[name="campaignIntegration"]:checked');
  if (!selected) return 'Telegram';
  const tab = selected.closest('.voice-messaging-provider-option')?.querySelector('.voice-messaging-provider-tab');
  return tab?.textContent?.trim() || selected.value || 'Telegram';
}

const campaignIntegrationTargets = {
  telegram: {
    icon: 'smart_toy',
    hint: 'Escolha qual bot do Telegram será usado no envio.',
    options: [
      { value: 'telegram-wes-hub-bot', label: 'wes_hub_bot' },
      { value: 'telegram-operacoes-bot', label: 'operacoes_bot' },
      { value: 'telegram-atendimento-bot', label: 'atendimento_bot' },
    ],
  },
  whatsapp: {
    icon: 'smart_toy',
    hint: 'Escolha qual bot do WhatsApp será usado no envio.',
    options: [
      { value: 'whatsapp-atendimento-bot', label: 'Atendimento WhatsApp Bot' },
      { value: 'whatsapp-comercial-bot', label: 'Comercial WhatsApp Bot' },
      { value: 'whatsapp-suporte-bot', label: 'Suporte WhatsApp Bot' },
    ],
  },
  sms: {
    icon: 'call',
    hint: 'Escolha qual número SMS será usado no envio.',
    options: [
      { value: 'sms-5511999991234', label: '+55 11 99999-1234' },
      { value: 'sms-5521999995678', label: '+55 21 99999-5678' },
      { value: 'sms-5531999999012', label: '+55 31 99999-9012' },
    ],
  },
};

function getSelectedCampaignIntegrationValue() {
  return document.querySelector('input[name="campaignIntegration"]:checked')?.value || 'telegram';
}

function syncCampaignIntegrationTarget() {
  if (!campaignIntegrationTargetSelect) return;
  const integration = getSelectedCampaignIntegrationValue();
  const config = campaignIntegrationTargets[integration] || campaignIntegrationTargets.telegram;
  campaignIntegrationTargetSelect.innerHTML = config.options
    .map((option) => `<option value="${escapeHtmlWes(option.value)}">${escapeHtmlWes(option.label)}</option>`)
    .join('');
  if (campaignIntegrationTargetIcon) campaignIntegrationTargetIcon.textContent = config.icon;
  if (campaignIntegrationTargetHint) campaignIntegrationTargetHint.textContent = config.hint;
}

function getSelectedCampaignIntegrationTargetLabel() {
  const selectedOption = campaignIntegrationTargetSelect?.options[campaignIntegrationTargetSelect.selectedIndex];
  return selectedOption?.textContent?.trim() || 'Não selecionado';
}

function getCampaignRecipientsCount() {
  const recipients = String(campaignRecipientsInput?.value || '').trim();
  if (!recipients) return 0;
  return recipients.split(/\r?\n/).map((line) => line.trim()).filter(Boolean).length;
}

function formatCampaignSchedule(value) {
  if (!value) return 'Não agendado';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

function parseCampaignScheduleToInputValue(value) {
  const normalized = String(value || '').trim();
  if (!normalized || normalized === 'Não agendado') return '';
  const match = normalized.match(/^(\d{2})\/(\d{2})\/(\d{4}),\s*(\d{2}):(\d{2})$/);
  if (!match) return '';
  const [, day, month, year, hour, minute] = match;
  return `${year}-${month}-${day}T${hour}:${minute}`;
}

function ensureCampaignAgentOption(agentLabel) {
  if (!campaignAgentSelect || !agentLabel || agentLabel === 'Não selecionado') return;
  const existing = Array.from(campaignAgentSelect.options).find((option) => option.textContent?.trim() === agentLabel);
  if (existing) return;
  const option = document.createElement('option');
  option.value = `custom-${agentLabel.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  option.textContent = agentLabel;
  campaignAgentSelect.appendChild(option);
}

function setCampaignFormMode(mode = 'create') {
  campaignFormMode = mode === 'edit' ? 'edit' : 'create';
  if (campaignCreatePageTitle) campaignCreatePageTitle.textContent = campaignFormMode === 'edit' ? 'Editar campanha' : 'Nova campanha';
  if (campaignCreatePageSubtitle) {
    campaignCreatePageSubtitle.textContent = campaignFormMode === 'edit'
      ? 'Revise os dados da campanha, ajuste os campos necessários e salve as alterações.'
      : 'Configure uma campanha de mensagens no Telegram usando um agente de IA e um canal integrado.';
  }
  if (campaignCreateReviewBtn) campaignCreateReviewBtn.textContent = campaignFormMode === 'edit' ? 'Salvar alterações' : 'Criar';
  if (campaignReviewConfirmBtn) campaignReviewConfirmBtn.textContent = campaignFormMode === 'edit' ? 'Salvar alterações' : 'Criar campanha';
}

function resetCampaignCreateForm() {
  setCampaignFormMode('create');
  activeCampaignEditId = '';
  if (campaignNameInput) campaignNameInput.value = '';
  if (campaignDescriptionInput) campaignDescriptionInput.value = '';
  if (campaignAgentSelect) campaignAgentSelect.value = '';
  if (campaignScheduleInput) campaignScheduleInput.value = '';
  if (campaignScriptInput) campaignScriptInput.value = '';
  if (campaignRecipientsInput) campaignRecipientsInput.value = '';
  if (campaignCsvInput) campaignCsvInput.value = '';
  if (campaignCsvHint) campaignCsvHint.textContent = 'Cole uma linha por destinatário ou importe um CSV com nome e contato.';
  const telegramRadio = document.querySelector('input[name="campaignIntegration"][value="telegram"]');
  if (telegramRadio) telegramRadio.checked = true;
  syncCampaignIntegrationTarget();
}

function populateCampaignCreateForm(data = {}) {
  resetCampaignCreateForm();
  setCampaignFormMode('edit');
  if (campaignNameInput) campaignNameInput.value = String(data.name || '').trim();
  if (campaignDescriptionInput) campaignDescriptionInput.value = String(data.description || '').trim();
  ensureCampaignAgentOption(String(data.agent || '').trim());
  if (campaignAgentSelect) {
    const option = Array.from(campaignAgentSelect.options).find((item) => item.textContent?.trim() === String(data.agent || '').trim());
    if (option) campaignAgentSelect.value = option.value;
  }
  const integrationValue = String(data.integration || '').trim().toLowerCase();
  const integrationRadio = document.querySelector(`input[name="campaignIntegration"][value="${integrationValue}"]`);
  if (integrationRadio) integrationRadio.checked = true;
  syncCampaignIntegrationTarget();
  if (campaignIntegrationTargetSelect) {
    const targetOption = Array.from(campaignIntegrationTargetSelect.options).find((item) => item.textContent?.trim() === String(data.integrationTarget || '').trim());
    if (targetOption) campaignIntegrationTargetSelect.value = targetOption.value;
  }
  if (campaignScheduleInput) campaignScheduleInput.value = parseCampaignScheduleToInputValue(data.schedule);
  if (campaignScriptInput) campaignScriptInput.value = String(data.script || '').trim();
  if (campaignRecipientsInput) campaignRecipientsInput.value = String(data.recipients || '').trim();
}

function closeCampaignReviewModal() {
  if (!campaignReviewModal) return;
  campaignReviewModal.classList.remove('open');
  campaignReviewModal.setAttribute('aria-hidden', 'true');
}

function closeCampaignDetailsModal() {
  if (!campaignDetailsModal) return;
  campaignDetailsModal.classList.remove('open');
  campaignDetailsModal.setAttribute('aria-hidden', 'true');
}

function validateCampaignCreateForm() {
  const requiredFields = [
    campaignNameInput,
    campaignAgentSelect,
    campaignIntegrationTargetSelect,
    campaignScriptInput,
    campaignRecipientsInput,
  ].filter(Boolean);

  const invalidField = requiredFields.find((field) => typeof field.checkValidity === 'function' && !field.checkValidity());
  if (invalidField) {
    invalidField.reportValidity?.();
    invalidField.focus?.();
    return false;
  }

  return true;
}

function readCampaignCreateData() {
  const selectedAgent = campaignAgentSelect?.options[campaignAgentSelect.selectedIndex];
  return {
    campaignId: activeCampaignEditId || '',
    name: String(campaignNameInput?.value || '').trim() || 'Não informado',
    description: String(campaignDescriptionInput?.value || '').trim() || 'Não informado',
    agent: selectedAgent?.textContent?.trim() || 'Não selecionado',
    integration: getSelectedCampaignIntegrationLabel(),
    integrationTarget: getSelectedCampaignIntegrationTargetLabel(),
    schedule: formatCampaignSchedule(String(campaignScheduleInput?.value || '').trim()),
    script: String(campaignScriptInput?.value || '').trim() || 'Não informado',
    recipients: String(campaignRecipientsInput?.value || '').trim() || 'Não informado',
    recipientsCount: getCampaignRecipientsCount(),
  };
}

function renderCampaignReview(data) {
  if (!campaignReviewList) return;
  const recipientsPreview = String(data.recipients || '').trim() || 'Não informado';
  campaignReviewList.innerHTML = `
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Nome da campanha</span><span class="hybrid-flow-review-value">${escapeHtmlWes(data.name)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Descrição</span><span class="hybrid-flow-review-value">${escapeHtmlWes(data.description)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Agente de IA</span><span class="hybrid-flow-review-value">${escapeHtmlWes(data.agent)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Integração</span><span class="hybrid-flow-review-value">${escapeHtmlWes(data.integration)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Bot ou número</span><span class="hybrid-flow-review-value">${escapeHtmlWes(data.integrationTarget)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Agendamento</span><span class="hybrid-flow-review-value">${escapeHtmlWes(data.schedule)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Destinatários</span><span class="hybrid-flow-review-value">${escapeHtmlWes(String(data.recipientsCount))}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Lista de destinatários</span><span class="hybrid-flow-review-value">${escapeHtmlWes(recipientsPreview)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Roteiro</span><span class="hybrid-flow-review-value">${escapeHtmlWes(data.script)}</span></div>
  `;
}

function renderCampaignDetails(data) {
  if (!campaignDetailsList) return;
  const statusMeta = getCampaignStatusMeta(data);
  const recipientsPreview = String(data.recipients || '').trim() || 'Não informado';
  const scriptPreview = String(data.script || '').trim() || 'Não informado';
  campaignDetailsList.innerHTML = `
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Nome da campanha</span><span class="hybrid-flow-review-value">${escapeHtmlWes(data.name)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Agendar envio</span><span class="hybrid-flow-review-value">${escapeHtmlWes(data.schedule)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Descrição</span><span class="hybrid-flow-review-value">${escapeHtmlWes(data.description)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Agente de IA</span><span class="hybrid-flow-review-value">${escapeHtmlWes(data.agent)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Integração</span><span class="hybrid-flow-review-value">${escapeHtmlWes(data.integration)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Bot ou número da integração</span><span class="hybrid-flow-review-value">${escapeHtmlWes(data.integrationTarget)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Lista de destinatários</span><span class="hybrid-flow-review-value hybrid-flow-review-value--rich"><span class="campaign-details-content-block">${escapeHtmlWes(recipientsPreview)}</span></span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Quantidade de destinatários</span><span class="hybrid-flow-review-value">${escapeHtmlWes(String(data.recipientsCount))}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Roteiro</span><span class="hybrid-flow-review-value hybrid-flow-review-value--rich"><span class="campaign-details-content-block campaign-details-content-block--script">${escapeHtmlWes(scriptPreview)}</span></span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Status atual</span><span class="hybrid-flow-review-value">${escapeHtmlWes(statusMeta.label)}</span></div>
  `;
}

const INITIAL_CAMPAIGNS = [
  {
    name: 'Boas-vindas onboarding',
    description: 'Sequência inicial para novos contatos que ainda não receberam a primeira abordagem.',
    status: 'Rascunho',
    statusValue: 'draft',
    agent: 'WES AI Voice Agent',
    integration: 'Telegram',
    integrationTarget: 'wes_hub_bot',
    schedule: 'Não agendado',
    script: 'Olá {{nome}}, seja bem-vindo(a) à WES Hub360. Responda esta mensagem para iniciarmos seu onboarding.',
    recipients: 'Maria Silva, @maria_silva\nJoão Souza, @joao_souza',
    recipientsCount: 32,
  },
  {
    name: 'Reativacao de leads frios',
    description: 'Disparo segmentado para leads sem interação nos últimos 30 dias.',
    status: 'Agendada',
    statusValue: 'scheduled',
    agent: 'WES AI Voice Agent',
    integration: 'Telegram',
    integrationTarget: 'wes_hub_bot',
    schedule: '24/06/2026, 09:30',
    script: 'Olá {{nome}}, notamos que sua conversa ficou em aberto. Posso te ajudar a retomar o atendimento agora?',
    recipients: 'Camila Rocha, @camila_rocha\nBruno Lima, @bruno_lima',
    recipientsCount: 184,
  },
  {
    name: 'Lembrete de renovacao premium',
    description: 'Campanha focada em clientes com plano próximo do vencimento.',
    status: 'Em execução',
    statusValue: 'running',
    agent: 'Agente Comercial BR',
    integration: 'WhatsApp',
    integrationTarget: 'Comercial WhatsApp Bot',
    schedule: '19/06/2026, 10:00',
    script: 'Olá {{nome}}, seu plano premium está perto do vencimento. Posso te apresentar as condições de renovação?',
    recipients: 'Patricia Melo, +55 11 98888-4567\nCarlos Nunes, +55 21 97777-1122',
    recipientsCount: 57,
  },
  {
    name: 'Follow-up comercial Q2',
    description: 'Fluxo pausado temporariamente para revisão da copy comercial e da segmentação.',
    status: 'Pausada',
    statusValue: 'paused',
    agent: 'Agente Comercial BR',
    integration: 'WhatsApp',
    integrationTarget: 'Atendimento WhatsApp Bot',
    schedule: '18/06/2026, 15:00',
    script: 'Olá {{nome}}, temos uma condição especial válida até o fim da semana para sua empresa.',
    recipients: 'Fernanda Costa, +55 31 96666-7788\nRafael Dias, +55 41 95555-3344',
    recipientsCount: 91,
  },
  {
    name: 'Renovacao anual enterprise',
    description: 'Campanha concluída com clientes enterprise que tinham vencimento neste mês.',
    status: 'Concluída',
    statusValue: 'completed',
    agent: 'Agente CS Premium',
    integration: 'SMS',
    integrationTarget: '+55 11 99999-1234',
    schedule: '17/06/2026, 11:00',
    script: 'Olá {{nome}}, sua renovação anual foi processada. Caso precise, nossa equipe está disponível para suporte.',
    recipients: 'Empresa Atlas, +55 11 94444-2211\nGrupo Prisma, +55 21 93333-8899',
    recipientsCount: 43,
  },
  {
    name: 'Alerta de instabilidade crítica',
    description: 'Tentativa encerrada após falha na entrega para a base de contatos prioritária.',
    status: 'Falhou',
    statusValue: 'failed',
    agent: 'Agente Operacoes 24x7',
    integration: 'Telegram',
    integrationTarget: 'operacoes_bot',
    schedule: '19/06/2026, 08:15',
    script: 'Alerta: identificamos instabilidade crítica no ambiente monitorado. Confirme o recebimento desta mensagem.',
    recipients: 'Time SRE, @sre_plantao\nGestao Infra, @infra_gestao',
    recipientsCount: 18,
  },
];

function getActiveCampaignStatusFilter() {
  const active = campaignsFilterMenu?.querySelector('.filter-option[data-filter="status"].active');
  return String(active?.dataset.value || '').trim();
}

function getCampaignStatusMeta(data = {}) {
  const explicitValue = String(data.statusValue || '').trim();
  if (explicitValue && CAMPAIGN_STATUS_META[explicitValue]) {
    return { value: explicitValue, ...CAMPAIGN_STATUS_META[explicitValue] };
  }

  const normalizedStatus = String(data.status || '').trim().toLowerCase();
  const matchByLabel = Object.entries(CAMPAIGN_STATUS_META)
    .find(([, meta]) => meta.label.toLowerCase() === normalizedStatus);
  if (matchByLabel) {
    const [value, meta] = matchByLabel;
    return { value, ...meta };
  }

  const scheduleLabel = String(data.schedule || '').trim();
  const fallbackValue = scheduleLabel && scheduleLabel !== 'Não agendado' ? 'scheduled' : 'draft';
  return { value: fallbackValue, ...CAMPAIGN_STATUS_META[fallbackValue] };
}

function updateCampaignFilterButtonLabel() {
  if (!campaignsFilterBtnLabel) return;
  campaignsFilterBtnLabel.textContent = 'Filtros';
}

function applyCampaignFilters() {
  if (!campaignsTable) return;
  const searchTerm = String(campaignsSearchInput?.value || '').trim().toLowerCase();
  const selectedStatus = getActiveCampaignStatusFilter();
  const rows = campaignsTable.querySelectorAll('.data-row:not(.header):not([data-table-empty-state="true"])');

  rows.forEach((row) => {
    const rowStatus = String(row.dataset.campaignStatus || '').trim();
    const searchable = String(row.dataset.campaignSearch || '').trim().toLowerCase();
    const matchesStatus = !selectedStatus || rowStatus === selectedStatus;
    const matchesSearch = !searchTerm || searchable.includes(searchTerm);
    row.hidden = !(matchesStatus && matchesSearch);
  });

  scheduleTableEmptyStateSync(campaignsTable);
}

function createCampaignRowElement(data) {
  const campaignData = {
    ...data,
    campaignId: String(data.campaignId || '').trim() || generateCampaignId(),
  };
  const statusMeta = getCampaignStatusMeta(campaignData);
  const isEditable = CAMPAIGN_EDITABLE_STATUSES.has(statusMeta.value);
  const executionAction = getCampaignExecutionAction(statusMeta.value);
  const row = document.createElement('div');
  row.className = 'data-row';
  row.dataset.campaignCreated = 'true';
  row.dataset.campaignId = campaignData.campaignId;
  row.dataset.campaignStatus = statusMeta.value;
  row.dataset.campaignPayload = JSON.stringify({
    ...campaignData,
    schedule: String(campaignData.schedule || '').trim() || 'Não agendado',
    recipients: String(campaignData.recipients || '').trim() || 'Não informado',
    script: String(campaignData.script || '').trim() || 'Não informado',
    statusValue: statusMeta.value,
    status: statusMeta.label,
  });
  row.dataset.campaignSearch = [
    campaignData.name,
    campaignData.description,
    campaignData.agent,
    campaignData.integration,
    campaignData.integrationTarget,
    statusMeta.label,
  ].filter(Boolean).join(' ');
  row.innerHTML = `
    <span><strong>${escapeHtmlWes(campaignData.name)}</strong><small>${escapeHtmlWes(campaignData.description === 'Não informado' ? '\u00a0' : campaignData.description)}</small></span>
    <span>${escapeHtmlWes(campaignData.agent)}</span>
    <span><strong>${escapeHtmlWes(campaignData.integration)}</strong><small>${escapeHtmlWes(campaignData.integrationTarget)}</small></span>
    <span>${escapeHtmlWes(String(campaignData.recipientsCount))}</span>
    <span><span class="chip ${escapeHtmlWes(statusMeta.chipClass)}">${escapeHtmlWes(statusMeta.label)}</span></span>
    <span class="row-actions hybrid-flows-row-actions">
      <button class="icon-btn action-icon${executionAction.enabled ? '' : ' muted-icon'}" type="button" aria-label="${escapeHtmlWes(executionAction.label)}"${executionAction.enabled ? '' : ' disabled'}>
        <span class="material-symbols-rounded">${escapeHtmlWes(executionAction.icon)}</span>
      </button>
      <button class="icon-btn action-icon${isEditable ? '' : ' muted-icon'}" type="button" aria-label="Editar campanha"${isEditable ? '' : ' disabled'}>
        <span class="material-symbols-rounded">edit</span>
      </button>
      <button class="icon-btn action-icon danger" type="button" aria-label="Excluir">
        <span class="material-symbols-rounded">delete</span>
      </button>
      <button class="icon-btn action-icon campaign-details-trigger" type="button" aria-label="Ver detalhes">
        <span class="material-symbols-rounded">more_vert</span>
      </button>
    </span>
  `;
  return row;
}

function appendCampaignRow(data) {
  if (!campaignsTable) return;
  const row = createCampaignRowElement(data);
  const emptyRow = campaignsTable.querySelector('[data-table-empty-state="true"]');
  if (emptyRow) {
    emptyRow.insertAdjacentElement('beforebegin', row);
  } else {
    campaignsTable.append(row);
  }
}

function replaceCampaignRow(row, data) {
  if (!row) return;
  const nextRow = createCampaignRowElement(data);
  row.replaceWith(nextRow);
}

function replaceCampaignRowById(campaignId, data) {
  if (!campaignId || !campaignsTable) return;
  const row = campaignsTable.querySelector(`.data-row[data-campaign-id="${campaignId}"]`);
  if (!row) return;
  replaceCampaignRow(row, data);
}

function seedInitialCampaignRows() {
  if (!campaignsTable) return;
  const existingRows = campaignsTable.querySelectorAll('.data-row:not(.header):not([data-table-empty-state="true"])');
  if (existingRows.length > 0) return;
  INITIAL_CAMPAIGNS.forEach((campaign) => appendCampaignRow(campaign));
  applyCampaignFilters();
}

seedInitialCampaignRows();
updateCampaignFilterButtonLabel();

campaignsSearchInput?.addEventListener('input', applyCampaignFilters);

campaignsCreateBackBtn?.addEventListener('click', () => {
  resetCampaignCreateForm();
  window.location.hash = '#/dashboard/campaigns';
});

campaignsCreateCancelBtn?.addEventListener('click', () => {
  resetCampaignCreateForm();
  window.location.hash = '#/dashboard/campaigns';
});

campaignIntegrationRadios.forEach((radio) => {
  radio.addEventListener('change', syncCampaignIntegrationTarget);
});
syncCampaignIntegrationTarget();

campaignOptimizeScriptBtn?.addEventListener('click', () => {
  const currentScript = String(campaignScriptInput?.value || '').trim();
  if (campaignScriptInput) {
    campaignScriptInput.value = currentScript
      ? `${currentScript}\n\nPara confirmar o interesse, responda esta mensagem e nossa equipe dará continuidade ao atendimento.`
      : 'Olá {{nome}}, tudo bem? Aqui é a WES Hub360. Temos uma atualização importante sobre seu atendimento. Para continuar, responda esta mensagem e nossa equipe dará continuidade.';
    campaignScriptInput.focus();
  }
});

campaignImportCsvBtn?.addEventListener('click', () => {
  campaignCsvInput?.click();
});

campaignCsvInput?.addEventListener('change', () => {
  const file = campaignCsvInput.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    const content = String(reader.result || '').trim();
    if (campaignRecipientsInput && content) campaignRecipientsInput.value = content;
    if (campaignCsvHint) campaignCsvHint.textContent = `CSV importado: ${file.name}`;
  });
  reader.readAsText(file);
});

campaignCreateReviewBtn?.addEventListener('click', () => {
  if (!validateCampaignCreateForm() || !campaignReviewModal) return;
  const data = readCampaignCreateData();
  campaignReviewModal.dataset.campaignReviewPayload = JSON.stringify(data);
  renderCampaignReview(data);
  const reviewTitle = document.getElementById('campaignReviewTitle');
  const reviewSubtitle = campaignReviewModal.querySelector('.voice-messaging-review-subtitle');
  if (reviewTitle) reviewTitle.textContent = campaignFormMode === 'edit' ? 'Revisar alterações da campanha' : 'Revisar campanha';
  if (reviewSubtitle) {
    reviewSubtitle.textContent = campaignFormMode === 'edit'
      ? 'Confira os dados antes de salvar as alterações da campanha.'
      : 'Confira os dados antes de criar a campanha.';
  }
  campaignReviewModal.classList.add('open');
  campaignReviewModal.setAttribute('aria-hidden', 'false');
});

campaignReviewModal?.addEventListener('click', (event) => {
  if (event.target.closest('[data-campaign-review-close]')) closeCampaignReviewModal();
});

campaignDetailsModal?.addEventListener('click', (event) => {
  if (event.target.closest('[data-campaign-details-close]')) closeCampaignDetailsModal();
});

campaignsTable?.addEventListener('click', (event) => {
  const editButton = event.target.closest('.action-icon[aria-label="Editar campanha"]');
  if (editButton) {
    if (editButton.disabled || editButton.getAttribute('disabled') !== null || editButton.classList.contains('muted-icon')) return;
    const row = editButton.closest('.data-row');
    if (!row || row.classList.contains('header')) return;
    let data = null;
    try {
      data = JSON.parse(row.dataset.campaignPayload || 'null');
    } catch {
      data = null;
    }
    if (!data) return;
    populateCampaignCreateForm(data);
    activeCampaignEditId = row.dataset.campaignId || data.campaignId || '';
    window.location.hash = '#/dashboard/campaigns/new';
    return;
  }

  const detailsButton = event.target.closest('.campaign-details-trigger[aria-label="Ver detalhes"]');
  if (!detailsButton) return;
  const row = detailsButton.closest('.data-row');
  if (!row || row.classList.contains('header') || !campaignDetailsModal) return;

  let data = null;
  try {
    data = JSON.parse(row.dataset.campaignPayload || 'null');
  } catch {
    data = null;
  }
  if (!data) return;

  renderCampaignDetails(data);
  campaignDetailsModal.classList.add('open');
  campaignDetailsModal.setAttribute('aria-hidden', 'false');
});

campaignReviewConfirmBtn?.addEventListener('click', () => {
  const isEditMode = campaignFormMode === 'edit';
  const editCampaignId = activeCampaignEditId;
  let data = null;
  try {
    data = JSON.parse(campaignReviewModal?.dataset.campaignReviewPayload || 'null');
  } catch {
    data = null;
  }
  if (!data) return;
  if (isEditMode && editCampaignId) {
    replaceCampaignRowById(editCampaignId, data);
  } else {
    appendCampaignRow(data);
  }
  applyCampaignFilters();
  closeCampaignReviewModal();
  resetCampaignCreateForm();
  window.location.hash = '#/dashboard/campaigns';
  showAppToast(isEditMode ? 'Campanha atualizada' : 'Campanha criada');
});

openVoiceMessagingInsightsPage?.addEventListener('click', () => {
  window.location.hash = '#/dashboard/voice-messaging/insights';
});

voiceMessagingInsightsBackBtn?.addEventListener('click', () => {
  window.location.hash = '#/dashboard/voice-messaging';
});

voiceMessagingCreateBackBtn?.addEventListener('click', () => {
  resetVoiceMessagingCreateForm();
  window.location.hash = '#/dashboard/voice-messaging';
});

voiceMessagingCreateCancelBtn?.addEventListener('click', () => {
  resetVoiceMessagingCreateForm();
  window.location.hash = '#/dashboard/voice-messaging';
});

function syncVoiceMessagingAgentHint() {
  if (!voiceMessagingAgentSelect || !voiceMessagingAgentHint) return;
  const selectedOption = voiceMessagingAgentSelect.options[voiceMessagingAgentSelect.selectedIndex];
  if (!selectedOption) return;
  const voiceName = String(selectedOption.dataset.voiceName || '').trim() || 'Padrão';
  const voiceLocale = String(selectedOption.dataset.voiceLocale || '').trim() || 'pt-BR';
  const description = String(selectedOption.dataset.agentDescription || '').trim();
  voiceMessagingAgentHint.textContent = `Voz ${voiceName} · ${voiceLocale}.${description ? ` ${description}` : ''}`;
}

const voiceMessagingProviderFieldConfig = {
  oktor: {
    accountLabel: 'ID da conta',
    accountHint: 'Identificador da conta no provedor.',
    accountPlaceholder: '',
    accountType: 'text',
    accountDefaultValue: 'admin@1wes.com',
    tokenLabel: 'Token da API',
    tokenHint: 'Token de API que autoriza as chamadas.',
    tokenPlaceholder: '',
    tokenType: 'password',
    tokenDefaultValue: '12345678',
  },
  nvoip: {
    accountLabel: 'Usuário',
    accountHint: 'Usuário da conta NVoIP.',
    accountPlaceholder: '',
    accountType: 'text',
    accountDefaultValue: '',
    tokenLabel: 'ID da rota',
    tokenHint: 'Identificador da rota de saída.',
    tokenPlaceholder: '',
    tokenType: 'text',
    tokenDefaultValue: '',
  },
};

const voiceMessagingProviderFieldValues = {
  oktor: {
    account: String(voiceMessagingConnectionAccountInput?.value || ''),
    token: String(voiceMessagingConnectionTokenInput?.value || ''),
  },
  nvoip: {
    account: '',
    token: '',
  },
};

let voiceMessagingConnectionTestTimer = null;
let voiceMessagingConnectionTestAttempt = 0;
let activeVoiceMessagingEditId = '';
let activeVoiceMessagingEditRow = null;

function getVoiceMessagingCreateMode() {
  return activeVoiceMessagingEditId || activeVoiceMessagingEditRow ? 'edit' : 'create';
}

function syncVoiceMessagingCreateModeUi() {
  const isEdit = getVoiceMessagingCreateMode() === 'edit';
  if (voiceMessagingCreatePage) {
    voiceMessagingCreatePage.dataset.mode = isEdit ? 'edit' : 'create';
    voiceMessagingCreatePage.dataset.title = isEdit ? 'Editar mensageria por voz' : 'Nova mensageria de voz';
  }
  if (voiceMessagingCreatePageTitle) {
    voiceMessagingCreatePageTitle.textContent = isEdit ? 'Editar mensageria por voz' : 'Nova mensageria de voz';
  }
  if (voiceMessagingCreatePageSubtitle) {
    voiceMessagingCreatePageSubtitle.textContent = VOICE_MESSAGING_CREATE_SUBTITLE;
  }
  if (voiceMessagingReviewConfirmBtn) {
    voiceMessagingReviewConfirmBtn.textContent = isEdit ? 'Salvar alterações' : 'Continuar';
  }
}

function findVoiceMessagingAgentOption(value = '', fallbackLabel = '') {
  if (!voiceMessagingAgentSelect) return null;
  const normalizedValue = String(value || '').trim().toLowerCase();
  const normalizedFallback = String(fallbackLabel || '').trim().toLowerCase();
  return Array.from(voiceMessagingAgentSelect.options).find((option) => {
    const optionValue = String(option.value || '').trim().toLowerCase();
    const optionLabel = String(option.textContent || '').trim().toLowerCase();
    return (normalizedValue && optionValue === normalizedValue)
      || (normalizedFallback && optionLabel === normalizedFallback);
  }) || null;
}

function readVoiceMessagingRowData(row) {
  if (!row) return null;
  const cells = row.querySelectorAll(':scope > span');
  if (cells.length < 5) return null;

  const operationName = cells[0]?.querySelector('strong')?.textContent?.trim() || '';
  const agentName = cells[1]?.querySelector('strong')?.textContent?.trim() || '';
  const agentSubtitle = cells[1]?.querySelector('small')?.textContent?.trim() || '';
  const providerLabel = cells[2]?.querySelector('strong')?.textContent?.trim() || cells[2]?.textContent?.trim() || 'Oktor';
  const connectionName = cells[2]?.querySelector('small')?.textContent?.trim() || '';

  return {
    id: String(row.dataset.voiceMessagingId || '').trim(),
    operationName,
    agentId: findVoiceMessagingAgentOption('', agentName)?.value || '',
    agentName,
    agentSubtitle,
    status: String(row.dataset.voiceMessagingStatus || '').trim().toLowerCase() || 'draft',
    provider: providerLabel.toLowerCase() === 'nvoip' ? 'nvoip' : 'oktor',
    providerLabel,
    connectionName,
    endpoint: '',
    account: '',
    token: '',
    simulationMode: false,
    message: '',
    recipients: '',
    createdAt: new Date().toISOString(),
  };
}

function populateVoiceMessagingForm(operation = {}) {
  const operationData = operation || {};
  if (voiceMessagingOperationNameInput) {
    voiceMessagingOperationNameInput.value = String(operationData.operationName || '').trim();
  }

  if (voiceMessagingAgentSelect) {
    const matchingAgent = findVoiceMessagingAgentOption(operationData.agentId, operationData.agentName);
    voiceMessagingAgentSelect.value = matchingAgent?.value || voiceMessagingAgentSelect.options[0]?.value || '';
  }

  if (voiceMessagingSimulationMode) {
    voiceMessagingSimulationMode.checked = operationData.simulationMode === true;
  }

  const provider = String(operationData.provider || '').trim().toLowerCase() === 'nvoip' ? 'nvoip' : 'oktor';
  if (voiceMessagingProviderRadios.length) {
    voiceMessagingProviderRadios.forEach((radio) => {
      radio.checked = radio.value === provider;
    });
  }

  if (voiceMessagingConnectionNameInput) {
    voiceMessagingConnectionNameInput.value = String(operationData.connectionName || '').trim();
  }
  if (voiceMessagingConnectionEndpointInput) {
    voiceMessagingConnectionEndpointInput.value = String(operationData.endpoint || '').trim();
  }

  voiceMessagingProviderFieldValues[provider].account = String(operationData.account || '').trim();
  voiceMessagingProviderFieldValues[provider].token = String(operationData.token || '').trim();
  syncVoiceMessagingProviderFields(provider);

  if (voiceMessagingCampaignMessageInput) {
    voiceMessagingCampaignMessageInput.value = String(operationData.message || '').trim();
  }
  if (voiceMessagingRecipientsInput) {
    voiceMessagingRecipientsInput.value = String(operationData.recipients || '').trim();
  }

  resetVoiceMessagingConnectionFeedback();
  syncVoiceMessagingAgentHint();
}

function openVoiceMessagingCreateMode(mode = 'create', operation = null, row = null) {
  if (mode === 'edit') {
    activeVoiceMessagingEditId = String(operation?.id || '').trim();
    activeVoiceMessagingEditRow = row || null;
    populateVoiceMessagingForm(operation || {});
  } else {
    activeVoiceMessagingEditId = '';
    activeVoiceMessagingEditRow = null;
    resetVoiceMessagingCreateForm();
  }

  syncVoiceMessagingCreateModeUi();
  window.location.hash = '#/dashboard/voice-messaging/new';
}

function clearVoiceMessagingConnectionTestTimer() {
  if (!voiceMessagingConnectionTestTimer) return;
  window.clearTimeout(voiceMessagingConnectionTestTimer);
  voiceMessagingConnectionTestTimer = null;
}

function resetVoiceMessagingConnectionFeedback() {
  clearVoiceMessagingConnectionTestTimer();
  if (voiceMessagingConnectionFeedback) {
    voiceMessagingConnectionFeedback.hidden = true;
    delete voiceMessagingConnectionFeedback.dataset.state;
  }
  if (voiceMessagingConnectionProgress) {
    voiceMessagingConnectionProgress.hidden = true;
    voiceMessagingConnectionProgress.setAttribute('aria-hidden', 'true');
  }
  if (voiceMessagingConnectionStatusIcon) {
    voiceMessagingConnectionStatusIcon.textContent = 'check_circle';
  }
  if (voiceMessagingConnectionStatusMessage) {
    voiceMessagingConnectionStatusMessage.textContent = '';
  }
  if (voiceMessagingTestConnectionBtn) {
    voiceMessagingTestConnectionBtn.disabled = false;
    voiceMessagingTestConnectionBtn.setAttribute('aria-busy', 'false');
  }
}

function setVoiceMessagingConnectionFeedback(state, message) {
  if (!voiceMessagingConnectionFeedback || !voiceMessagingConnectionProgress || !voiceMessagingConnectionStatusIcon || !voiceMessagingConnectionStatusMessage) return;
  voiceMessagingConnectionFeedback.hidden = false;
  voiceMessagingConnectionFeedback.dataset.state = state;
  voiceMessagingConnectionStatusMessage.textContent = message;

  if (state === 'loading') {
    voiceMessagingConnectionProgress.hidden = false;
    voiceMessagingConnectionProgress.setAttribute('aria-hidden', 'false');
    voiceMessagingConnectionStatusIcon.textContent = 'progress_activity';
    if (voiceMessagingTestConnectionBtn) {
      voiceMessagingTestConnectionBtn.disabled = true;
      voiceMessagingTestConnectionBtn.setAttribute('aria-busy', 'true');
    }
    return;
  }

  voiceMessagingConnectionProgress.hidden = true;
  voiceMessagingConnectionProgress.setAttribute('aria-hidden', 'true');
  voiceMessagingConnectionStatusIcon.textContent = state === 'success' ? 'check_circle' : 'cancel';
  if (voiceMessagingTestConnectionBtn) {
    voiceMessagingTestConnectionBtn.disabled = false;
    voiceMessagingTestConnectionBtn.setAttribute('aria-busy', 'false');
  }
}

function validateVoiceMessagingConnectionFields() {
  const connectionName = String(voiceMessagingConnectionNameInput?.value || '').trim();
  const endpoint = String(voiceMessagingConnectionEndpointInput?.value || '').trim();
  const account = String(voiceMessagingConnectionAccountInput?.value || '').trim();
  const token = String(voiceMessagingConnectionTokenInput?.value || '').trim();

  if (!connectionName || !endpoint || !account || !token) {
    return false;
  }

  try {
    const normalizedUrl = new URL(endpoint);
    return normalizedUrl.protocol === 'http:' || normalizedUrl.protocol === 'https:';
  } catch (error) {
    return false;
  }
}

function getSelectedVoiceMessagingProvider() {
  return String(voiceMessagingProviderRadios.find((radio) => radio.checked)?.value || 'oktor').trim().toLowerCase();
}

function storeVoiceMessagingProviderFieldValues(provider = getSelectedVoiceMessagingProvider()) {
  const key = String(provider || '').trim().toLowerCase();
  if (!voiceMessagingProviderFieldValues[key]) return;
  if (voiceMessagingConnectionAccountInput) {
    voiceMessagingProviderFieldValues[key].account = voiceMessagingConnectionAccountInput.value;
  }
  if (voiceMessagingConnectionTokenInput) {
    voiceMessagingProviderFieldValues[key].token = voiceMessagingConnectionTokenInput.value;
  }
}

function syncVoiceMessagingProviderFields(provider = getSelectedVoiceMessagingProvider()) {
  if (!voiceMessagingConnectionAccountInput || !voiceMessagingConnectionTokenInput) return;
  const normalizedProvider = String(provider || '').trim().toLowerCase();
  const config = voiceMessagingProviderFieldConfig[normalizedProvider] || voiceMessagingProviderFieldConfig.oktor;
  const savedValues = voiceMessagingProviderFieldValues[normalizedProvider] || {
    account: config.accountDefaultValue,
    token: config.tokenDefaultValue,
  };

  const accountLabel = document.querySelector('label[for="voiceMessagingConnectionAccountInput"]');
  const tokenLabel = document.querySelector('label[for="voiceMessagingConnectionTokenInput"]');
  const accountHint = voiceMessagingConnectionAccountInput.nextElementSibling;
  const tokenHint = voiceMessagingConnectionTokenInput.nextElementSibling;

  if (accountLabel) accountLabel.textContent = config.accountLabel;
  if (tokenLabel) tokenLabel.textContent = config.tokenLabel;
  if (accountHint) accountHint.textContent = config.accountHint;
  if (tokenHint) tokenHint.textContent = config.tokenHint;

  voiceMessagingConnectionAccountInput.type = config.accountType;
  voiceMessagingConnectionTokenInput.type = config.tokenType;
  voiceMessagingConnectionAccountInput.placeholder = config.accountPlaceholder;
  voiceMessagingConnectionTokenInput.placeholder = config.tokenPlaceholder;
  voiceMessagingConnectionAccountInput.value = savedValues.account || config.accountDefaultValue || '';
  voiceMessagingConnectionTokenInput.value = savedValues.token || config.tokenDefaultValue || '';
}

voiceMessagingAgentSelect?.addEventListener('change', syncVoiceMessagingAgentHint);
syncVoiceMessagingAgentHint();

voiceMessagingProviderRadios.forEach((radio) => {
  const syncFromRadio = () => {
    if (!radio.checked) return;
    resetVoiceMessagingConnectionFeedback();
    syncVoiceMessagingProviderFields(radio.value);
  };
  radio.addEventListener('change', syncFromRadio);
  radio.addEventListener('input', syncFromRadio);
});
voiceMessagingProviderOptions.forEach((option) => {
  option.addEventListener('click', () => {
    window.requestAnimationFrame(() => {
      syncVoiceMessagingProviderFields();
    });
  });
});
voiceMessagingConnectionAccountInput?.addEventListener('input', () => {
  storeVoiceMessagingProviderFieldValues();
  resetVoiceMessagingConnectionFeedback();
});
voiceMessagingConnectionTokenInput?.addEventListener('input', () => {
  storeVoiceMessagingProviderFieldValues();
  resetVoiceMessagingConnectionFeedback();
});
voiceMessagingConnectionNameInput?.addEventListener('input', resetVoiceMessagingConnectionFeedback);
voiceMessagingConnectionEndpointInput?.addEventListener('input', resetVoiceMessagingConnectionFeedback);
syncVoiceMessagingProviderFields();

voiceMessagingTestConnectionBtn?.addEventListener('click', () => {
  clearVoiceMessagingConnectionTestTimer();
  setVoiceMessagingConnectionFeedback('loading', 'Testando a conexão com o provedor...');
  voiceMessagingConnectionTestTimer = window.setTimeout(() => {
    voiceMessagingConnectionTestAttempt += 1;
    const shouldSucceed = voiceMessagingConnectionTestAttempt % 2 === 0;
    if (shouldSucceed) {
      setVoiceMessagingConnectionFeedback('success', 'Conexão validada com sucesso.');
    } else {
      setVoiceMessagingConnectionFeedback('error', 'Falha ao validar a conexão. Verifique os campos e tente novamente.');
    }
    voiceMessagingConnectionTestTimer = null;
  }, 1400);
});

function closeVoiceMessagingReviewModal() {
  if (!voiceMessagingReviewModal) return;
  voiceMessagingReviewModal.classList.remove('open');
  voiceMessagingReviewModal.setAttribute('aria-hidden', 'true');
}

function getVoiceMessagingRecipientsCount() {
  return String(voiceMessagingRecipientsInput?.value || '')
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean).length;
}

function buildVoiceMessagingReviewHtml() {
  const operationName = String(voiceMessagingOperationNameInput?.value || '').trim() || 'Não informado';
  const selectedAgent = voiceMessagingAgentSelect?.options?.[voiceMessagingAgentSelect.selectedIndex];
  const agentName = String(selectedAgent?.textContent || '').trim() || 'Não selecionado';
  const provider = getSelectedVoiceMessagingProvider();
  const providerLabel = provider === 'nvoip' ? 'NVoIP' : 'Oktor';
  const connectionName = String(voiceMessagingConnectionNameInput?.value || '').trim() || 'Não informado';
  const endpoint = String(voiceMessagingConnectionEndpointInput?.value || '').trim() || 'Não informado';
  const account = String(voiceMessagingConnectionAccountInput?.value || '').trim() || 'Não informado';
  const recipientsCount = getVoiceMessagingRecipientsCount();
  const simulation = voiceMessagingSimulationMode?.checked ? 'Ativado' : 'Desativado';
  const message = String(voiceMessagingCampaignMessageInput?.value || '').trim() || 'Não informada';
  return `
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Operação</span><span class="hybrid-flow-review-value">${escapeHtmlWes(operationName)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Agente de voz</span><span class="hybrid-flow-review-value">${escapeHtmlWes(agentName)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Provedor</span><span class="hybrid-flow-review-value">${escapeHtmlWes(providerLabel)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Conexão</span><span class="hybrid-flow-review-value">${escapeHtmlWes(connectionName)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Endpoint</span><span class="hybrid-flow-review-value">${escapeHtmlWes(endpoint)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">${escapeHtmlWes(provider === 'nvoip' ? 'Usuário' : 'ID da conta')}</span><span class="hybrid-flow-review-value">${escapeHtmlWes(account)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Modo simulação</span><span class="hybrid-flow-review-value">${escapeHtmlWes(simulation)}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Destinatários</span><span class="hybrid-flow-review-value">${escapeHtmlWes(String(recipientsCount))}</span></div>
    <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Mensagem</span><span class="hybrid-flow-review-value">${escapeHtmlWes(message)}</span></div>
  `;
}

function resetVoiceMessagingCreateForm() {
  activeVoiceMessagingEditId = '';
  activeVoiceMessagingEditRow = null;
  resetVoiceMessagingConnectionFeedback();
  if (voiceMessagingOperationNameInput) voiceMessagingOperationNameInput.value = '';
  if (voiceMessagingAgentSelect) voiceMessagingAgentSelect.selectedIndex = 0;
  if (voiceMessagingSimulationMode) voiceMessagingSimulationMode.checked = false;
  if (voiceMessagingConnectionNameInput) voiceMessagingConnectionNameInput.value = '';
  if (voiceMessagingConnectionEndpointInput) voiceMessagingConnectionEndpointInput.value = '';
  if (voiceMessagingCampaignMessageInput) voiceMessagingCampaignMessageInput.value = '';
  if (voiceMessagingRecipientsInput) voiceMessagingRecipientsInput.value = '';
  if (voiceMessagingProviderRadios.length) {
    voiceMessagingProviderRadios.forEach((radio) => {
      radio.checked = radio.value === 'oktor';
    });
  }
  voiceMessagingProviderFieldValues.oktor.account = voiceMessagingProviderFieldConfig.oktor.accountDefaultValue;
  voiceMessagingProviderFieldValues.oktor.token = voiceMessagingProviderFieldConfig.oktor.tokenDefaultValue;
  voiceMessagingProviderFieldValues.nvoip.account = voiceMessagingProviderFieldConfig.nvoip.accountDefaultValue;
  voiceMessagingProviderFieldValues.nvoip.token = voiceMessagingProviderFieldConfig.nvoip.tokenDefaultValue;
  syncVoiceMessagingProviderFields('oktor');
  syncVoiceMessagingAgentHint();
  syncVoiceMessagingCreateModeUi();
}

voiceMessagingReviewModal?.addEventListener('click', (event) => {
  if (event.target.closest('[data-voice-messaging-review-close]')) closeVoiceMessagingReviewModal();
});

voiceMessagingNextBtn?.addEventListener('click', () => {
  if (!voiceMessagingReviewModal || !voiceMessagingReviewList) return;
  voiceMessagingReviewList.innerHTML = buildVoiceMessagingReviewHtml();
  voiceMessagingReviewModal.classList.add('open');
  voiceMessagingReviewModal.setAttribute('aria-hidden', 'false');
});

voiceMessagingReviewConfirmBtn?.addEventListener('click', () => {
  const selectedAgent = voiceMessagingAgentSelect?.options?.[voiceMessagingAgentSelect.selectedIndex];
  const provider = getSelectedVoiceMessagingProvider();
  const isEdit = getVoiceMessagingCreateMode() === 'edit';
  const existingOperation = activeVoiceMessagingEditId
    ? getVoiceMessagingFromStorage().find((item) => String(item?.id || '').trim() === activeVoiceMessagingEditId) || null
    : null;
  const operation = {
    id: activeVoiceMessagingEditId || `voice-messaging-${Date.now()}`,
    operationName: String(voiceMessagingOperationNameInput?.value || '').trim() || 'Sem nome',
    agentId: String(selectedAgent?.value || '').trim(),
    agentName: String(selectedAgent?.textContent || '').trim() || 'Não selecionado',
    agentSubtitle: voiceMessagingAgentHint?.textContent?.trim() || '',
    status: existingOperation?.status || 'in-progress',
    provider,
    providerLabel: provider === 'nvoip' ? 'NVoIP' : 'Oktor',
    connectionName: String(voiceMessagingConnectionNameInput?.value || '').trim() || 'Sem conexão',
    endpoint: String(voiceMessagingConnectionEndpointInput?.value || '').trim(),
    account: String(voiceMessagingConnectionAccountInput?.value || '').trim(),
    token: String(voiceMessagingConnectionTokenInput?.value || '').trim(),
    simulationMode: voiceMessagingSimulationMode?.checked === true,
    message: String(voiceMessagingCampaignMessageInput?.value || '').trim(),
    recipients: String(voiceMessagingRecipientsInput?.value || '').trim(),
    createdAt: existingOperation?.createdAt || activeVoiceMessagingEditRow?.dataset.voiceMessagingCreatedAt || new Date().toISOString()
  };
  if (activeVoiceMessagingEditId) {
    upsertVoiceMessagingInStorage(operation);
    renderVoiceMessagingFromStorage();
  } else if (activeVoiceMessagingEditRow) {
    updateVoiceMessagingRow(activeVoiceMessagingEditRow, operation);
  } else {
    persistAndRenderVoiceMessaging(operation);
  }
  closeVoiceMessagingReviewModal();
  resetVoiceMessagingCreateForm();
  showAppToast(isEdit ? 'Mensageria atualizada com sucesso' : 'Mensageria criada com sucesso');
  window.location.hash = '#/dashboard/voice-messaging';
});

voiceMessagingAgentPreview?.addEventListener('click', () => {
  if (!window.speechSynthesis || typeof window.SpeechSynthesisUtterance === 'undefined' || !voiceMessagingAgentSelect) return;
  const selectedOption = voiceMessagingAgentSelect.options[voiceMessagingAgentSelect.selectedIndex];
  if (!selectedOption) return;
  const selectedLocale = String(selectedOption.dataset.voiceLocale || 'pt-BR').toLowerCase();
  const selectedVoiceName = String(selectedOption.dataset.voiceName || '').trim().toLowerCase();
  const fallbackPreviewText = String(selectedOption.dataset.previewText || '').trim() || 'Olá. Esta é uma prévia da voz configurada para este agente.';
  const messagePreviewText = String(voiceMessagingCampaignMessageInput?.value || '').trim();
  const previewText = messagePreviewText || fallbackPreviewText;
  const utterance = new window.SpeechSynthesisUtterance(previewText);
  const voices = window.speechSynthesis.getVoices?.() || [];
  utterance.lang = String(selectedOption.dataset.voiceLocale || 'pt-BR');
  utterance.voice =
    voices.find((voice) => String(voice.name || '').toLowerCase().includes(selectedVoiceName) && String(voice.lang || '').toLowerCase() === selectedLocale) ||
    voices.find((voice) => String(voice.lang || '').toLowerCase() === selectedLocale) ||
    voices.find((voice) => String(voice.lang || '').toLowerCase().startsWith(selectedLocale.split('-')[0])) ||
    null;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
});

if (hybridHistoryFilterBtn && hybridHistoryFilterMenu) {
  hybridHistoryFilterBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    hybridHistoryFilterMenu.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    hybridHistoryFilterMenu.classList.remove('open');
  });

  const filterOptions = hybridHistoryFilterMenu.querySelectorAll('.filter-option');
  const clearButton = hybridHistoryFilterMenu.querySelector('.filter-clear');

  filterOptions.forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.filter;
      hybridHistoryFilterMenu
        .querySelectorAll(`.filter-option[data-filter="${group}"]`)
        .forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      hybridHistoryFilterMenu.classList.remove('open');
    });
  });

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      hybridHistoryFilterMenu
        .querySelectorAll('.filter-option')
        .forEach((item) => item.classList.remove('active'));
      hybridHistoryFilterMenu
        .querySelectorAll('.filter-option[data-value="total"]')
        .forEach((item) => item.classList.add('active'));
      hybridHistoryFilterMenu.classList.remove('open');
    });
  }
}

if (openManageRolesModal && manageRolesModal && manageRolesModalForm) {
  const closeManageRolesModal = () => {
    manageRolesModal.classList.remove('open');
    manageRolesModal.setAttribute('aria-hidden', 'true');
  };

  const syncManageRolesSubmit = () => {
    const hasName = Boolean(String(manageRolesName?.value || '').trim());
    if (manageRolesSubmit) manageRolesSubmit.disabled = !hasName;
  };

  openManageRolesModal.addEventListener('click', () => {
    manageRolesModalForm.reset();
    syncManageRolesSubmit();
    manageRolesModal.classList.add('open');
    manageRolesModal.setAttribute('aria-hidden', 'false');
    manageRolesName?.focus();
  });

  manageRolesName?.addEventListener('input', syncManageRolesSubmit);

  manageRolesModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-modal-close]')) closeManageRolesModal();
  });

  manageRolesModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    closeManageRolesModal();
  });
}

if (openCreateUserModal && createUserModal && createUserModalForm) {
  let editingUserRow = null;

  const roleTextToValue = (value) => {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized.includes('super')) return 'superuser';
    if (normalized.includes('admin')) return 'admin';
    if (normalized.includes('visual')) return 'viewer';
    if (normalized.includes('usu')) return 'user';
    return '';
  };

  const statusTextToValue = (value) => {
    const normalized = String(value || '').trim().toLowerCase();
    return normalized.includes('inativo') ? 'inactive' : 'active';
  };

  const closeCreateUserModal = () => {
    editingUserRow = null;
    createUserModal.classList.remove('open');
    createUserModal.setAttribute('aria-hidden', 'true');
  };

  const syncCreateUserSubmit = () => {
    const hasName = Boolean(String(createUserName?.value || '').trim());
    const hasEmail = Boolean(String(createUserEmail?.value || '').trim());
    const hasPassword = editingUserRow ? true : String(createUserPassword?.value || '').length >= 8;
    const hasRole = Boolean(String(createUserRole?.value || '').trim());
    if (createUserSubmit) createUserSubmit.disabled = !(hasName && hasEmail && hasPassword && hasRole);
  };

  openCreateUserModal.addEventListener('click', () => {
    editingUserRow = null;
    createUserModalForm.reset();
    if (createUserTitle) createUserTitle.textContent = 'Criar novo usuário';
    if (createUserSubmit) createUserSubmit.textContent = 'Criar usuário';
    syncCreateUserSubmit();
    createUserModal.classList.add('open');
    createUserModal.setAttribute('aria-hidden', 'false');
    createUserName?.focus();
  });

  [createUserName, createUserEmail, createUserPassword, createUserRole].forEach((field) => {
    field?.addEventListener('input', syncCreateUserSubmit);
    field?.addEventListener('change', syncCreateUserSubmit);
  });

  createUserModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-modal-close]')) closeCreateUserModal();
  });

  createUserModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (editingUserRow) {
      const name = String(createUserName?.value || '').trim();
      const email = String(createUserEmail?.value || '').trim();
      const roleLabel = createUserRole?.selectedOptions?.[0]?.textContent?.trim() || '';
      const statusLabel = createUserStatus?.selectedOptions?.[0]?.textContent?.trim() || '';
      const nameCell = editingUserRow.querySelector('.user-cell strong');
      const emailCell = editingUserRow.children[1];
      const roleCell = editingUserRow.children[2];
      const statusCell = editingUserRow.children[3];

      if (nameCell) nameCell.textContent = name;
      if (emailCell) emailCell.textContent = email;
      if (roleCell) roleCell.textContent = roleLabel;
      if (statusCell) {
        statusCell.textContent = statusLabel;
        statusCell.classList.toggle('success', String(createUserStatus?.value || '') === 'active');
      }

      closeCreateUserModal();
      showAppToast('Usuário atualizado com sucesso');
      return;
    }

    closeCreateUserModal();
  });

  usersTable?.addEventListener('click', (event) => {
    const editButton = event.target.closest('.icon-btn.action-icon[aria-label="Editar"]');
    if (!editButton || editButton.disabled || editButton.classList.contains('muted-icon')) return;

    const row = editButton.closest('.data-row');
    if (!row || row.classList.contains('header')) return;

    const name = row.querySelector('.user-cell strong')?.textContent?.trim() || '';
    const email = row.children[1]?.textContent?.trim() || '';
    const roleText = row.children[2]?.textContent?.trim() || '';
    const statusText = row.children[3]?.textContent?.trim() || '';

    editingUserRow = row;
    createUserModalForm.reset();
    if (createUserTitle) createUserTitle.textContent = 'Editar usuário';
    if (createUserSubmit) createUserSubmit.textContent = 'Salvar alterações';
    if (createUserName) createUserName.value = name;
    if (createUserEmail) createUserEmail.value = email;
    if (createUserStatus) createUserStatus.value = statusTextToValue(statusText);
    if (createUserRole) createUserRole.value = roleTextToValue(roleText);
    if (createUserPassword) createUserPassword.value = '';

    syncCreateUserSubmit();
    createUserModal.classList.add('open');
    createUserModal.setAttribute('aria-hidden', 'false');
    createUserName?.focus();
  });

  usersTable?.addEventListener('click', async (event) => {
    const deleteButton = event.target.closest('.row-actions .action-icon.danger[aria-label="Excluir"]');
    if (!deleteButton || !usersTable.contains(deleteButton)) return;
    if (deleteButton.disabled || deleteButton.getAttribute('disabled') !== null || deleteButton.classList.contains('muted-icon')) return;

    const row = deleteButton.closest('.data-row');
    if (!row || row.classList.contains('header')) return;

    const userName = row.querySelector('.user-cell strong')?.textContent?.trim() || 'este usuário';
    if (!(await confirmDeletionAction(`o usuário "${userName}"`))) return;

    row.remove();
    showAppToast('Usuário excluído');
  });
}

if (openSkillModal && skillModal && skillModalForm && skillsTable) {
  let editingSkillRow = null;
  let skillFileValidationState = 'empty';
  let skillFileValidationRun = 0;

  const closeSkillModal = () => {
    editingSkillRow = null;
    skillModal.classList.remove('open');
    skillModal.setAttribute('aria-hidden', 'true');
  };

  const setSkillModalMode = (mode = 'create') => {
    const isEdit = mode === 'edit';
    skillModal.dataset.mode = isEdit ? 'edit' : 'create';
    if (skillModalTitle) skillModalTitle.textContent = isEdit ? 'Editar habilidade' : 'Adicionar nova habilidade';
    if (skillModalSubmit) skillModalSubmit.textContent = isEdit ? 'Salvar alterações' : 'Salvar habilidade';
    skillFileSection?.classList.toggle('is-hidden', isEdit);
  };

  const getSkillStatusMeta = (isActive) => ({
    label: isActive ? 'Ativa' : 'Inativa',
    className: isActive ? 'success' : 'warning',
  });

  const readSkillRowData = (row) => {
    const cells = row?.querySelectorAll(':scope > span') || [];
    const name = cells[0]?.querySelector('strong')?.textContent?.trim() || '';
    const description = cells[1]?.textContent?.trim() || '';
    const statusText = cells[2]?.querySelector('.chip')?.textContent?.trim().toLowerCase() || '';
    return {
      name,
      description,
      isActive: !statusText.includes('inativa'),
    };
  };

  const syncSkillStatus = () => {
    if (!skillStatusInput || !skillStatusValue) return;
    const statusWrap = skillStatusInput.closest('.skill-status-toggle');
    const isActive = skillStatusInput.checked;
    skillStatusValue.textContent = isActive ? 'Ativa' : 'Inativa';
    statusWrap?.classList.toggle('is-active', isActive);
    statusWrap?.classList.toggle('is-inactive', !isActive);
  };

  const isSupportedSkillFile = (file) => {
    if (!file) return false;
    const normalizedName = String(file.name || '').trim().toLowerCase();
    return normalizedName.endsWith('.zip') || normalizedName.endsWith('.md');
  };

  const resetSkillFileValidation = () => {
    skillFileValidationRun += 1;
    skillFileValidationState = 'empty';

    if (skillFileName) skillFileName.value = '';
    if (skillFileFeedback) {
      skillFileFeedback.hidden = true;
      skillFileFeedback.textContent = '';
      skillFileFeedback.classList.remove('is-error', 'is-success', 'is-warning', 'is-loading');
    }
    skillUploadDropzone?.classList.remove('is-invalid', 'is-valid', 'is-loading', 'has-file');
    if (skillUploadEmptyState) skillUploadEmptyState.hidden = false;
    if (skillUploadSelectedState) skillUploadSelectedState.hidden = true;
  };

  const setSkillFileValidationFeedback = (state, message, file = null) => {
    skillFileValidationState = state;

    const hasValidFile = state === 'valid' && file;
    skillUploadDropzone?.classList.toggle('is-invalid', state === 'invalid' || state === 'dangerous');
    skillUploadDropzone?.classList.toggle('is-valid', hasValidFile);
    skillUploadDropzone?.classList.toggle('is-loading', state === 'loading');
    skillUploadDropzone?.classList.toggle('has-file', hasValidFile);

    if (skillUploadEmptyState) skillUploadEmptyState.hidden = hasValidFile;
    if (skillUploadSelectedState) skillUploadSelectedState.hidden = !hasValidFile;
    if (skillFileName) skillFileName.value = hasValidFile ? file.name : '';

    if (skillFileFeedback) {
      skillFileFeedback.hidden = !message;
      skillFileFeedback.textContent = message || '';
      skillFileFeedback.classList.remove('is-error', 'is-success', 'is-warning', 'is-loading');
      if (state === 'valid') skillFileFeedback.classList.add('is-success');
      if (state === 'invalid') skillFileFeedback.classList.add('is-error');
      if (state === 'dangerous') skillFileFeedback.classList.add('is-warning');
      if (state === 'loading') skillFileFeedback.classList.add('is-loading');
    }
  };

  const isZipArchiveCompatible = async (file) => {
    const buffer = await file.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    const hasZipHeader = bytes.length >= 4
      && bytes[0] === 0x50
      && bytes[1] === 0x4b
      && [0x03, 0x05, 0x07].includes(bytes[2])
      && [0x04, 0x06, 0x08].includes(bytes[3]);

    if (!hasZipHeader) {
      return {
        valid: false,
        message: 'Erro ao processar o arquivo: o `.zip` enviado é incompatível com o catálogo de habilidades.',
      };
    }

    const zipText = new TextDecoder('utf-8', { fatal: false }).decode(bytes);
    const hasSkillDescriptor = /(^|\/)SKILL\.md\b/i.test(zipText) || /(^|\/)[^/\0]+\.md\b/i.test(zipText);

    if (!hasSkillDescriptor) {
      return {
        valid: false,
        message: 'Erro ao processar o arquivo: o `.zip` não contém uma estrutura compatível de habilidade.',
      };
    }

    return {
      valid: true,
      message: 'Arquivo validado com sucesso pelo sistema.',
    };
  };

  const findDangerousMarkdownPattern = (content) => {
    const rules = [
      /<script\b/i,
      /javascript:/i,
      /onerror\s*=/i,
      /<iframe\b/i,
      /rm\s+-rf\b/i,
      /curl\b[\s\S]{0,80}\|\s*(sh|bash)\b/i,
      /wget\b[\s\S]{0,80}\|\s*(sh|bash)\b/i,
      /powershell\b/i,
      /invoke-webrequest\b/i,
      /eval\s*\(/i,
      /chmod\s+\+x\b/i,
      /base64\s+-d\b/i,
    ];

    return rules.find((rule) => rule.test(content)) || null;
  };

  const inspectMarkdownSafety = async (file) => {
    const content = await file.text();
    const suspiciousPattern = findDangerousMarkdownPattern(content);

    if (suspiciousPattern) {
      return {
        valid: false,
        dangerous: true,
        message: 'O arquivo foi considerado perigoso pelo sistema e não pode ser implementado.',
      };
    }

    return {
      valid: true,
      message: 'Arquivo validado com sucesso pelo sistema.',
    };
  };

  const validateSkillFile = async (file) => {
    if (!file) {
      resetSkillFileValidation();
      syncSkillSubmit();
      return;
    }

    if (!isSupportedSkillFile(file)) {
      setSkillFileValidationFeedback('invalid', 'Erro ao processar o arquivo: envie um `.zip` ou `.md` válido.');
      syncSkillSubmit();
      return;
    }

    const currentRun = ++skillFileValidationRun;
    setSkillFileValidationFeedback('loading', 'Analisando arquivo enviado...');
    syncSkillSubmit();

    try {
      const normalizedName = String(file.name || '').trim().toLowerCase();
      const result = normalizedName.endsWith('.zip')
        ? await isZipArchiveCompatible(file)
        : await inspectMarkdownSafety(file);

      if (currentRun !== skillFileValidationRun) return;

      if (result.valid) {
        setSkillFileValidationFeedback('valid', result.message, file);
      } else if (result.dangerous) {
        if (skillFileInput) skillFileInput.value = '';
        setSkillFileValidationFeedback('dangerous', result.message);
      } else {
        if (skillFileInput) skillFileInput.value = '';
        setSkillFileValidationFeedback('invalid', result.message);
      }
    } catch (error) {
      if (currentRun !== skillFileValidationRun) return;
      if (skillFileInput) skillFileInput.value = '';
      setSkillFileValidationFeedback('invalid', 'Erro ao processar o arquivo enviado. Tente novamente com outro pacote.');
    }

    syncSkillSubmit();
  };

  const syncSkillSubmit = () => {
    const hasName = Boolean(String(skillNameInput?.value || '').trim());
    const isEdit = skillModal.dataset.mode === 'edit';
    const hasValidFile = isEdit || skillFileValidationState === 'valid';
    const isBusy = skillFileValidationState === 'loading';
    if (skillModalSubmit) skillModalSubmit.disabled = !(hasName && hasValidFile) || isBusy;
  };

  const openSkillDialog = () => {
    editingSkillRow = null;
    setSkillModalMode('create');
    skillModalForm.reset();
    if (skillStatusInput) skillStatusInput.checked = true;
    syncSkillStatus();
    resetSkillFileValidation();
    syncSkillSubmit();
    skillModal.classList.add('open');
    skillModal.setAttribute('aria-hidden', 'false');
    const skillModalBody = skillModal.querySelector('.skill-modal-body');
    if (skillModalBody) skillModalBody.scrollTop = 0;
    skillNameInput?.focus();
  };

  openSkillModal.addEventListener('click', openSkillDialog);
  skillNameInput?.addEventListener('input', syncSkillSubmit);
  skillFileInput?.addEventListener('change', (event) => {
    const file = event.target?.files?.[0] || null;
    validateSkillFile(file);
  });
  skillStatusInput?.addEventListener('change', syncSkillStatus);
  skillUploadChooseLink?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    skillFileInput?.click();
  });
  skillFileDeleteButton?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (skillFileInput) skillFileInput.value = '';
    resetSkillFileValidation();
    syncSkillSubmit();
  });
  skillUploadDropzone?.addEventListener('click', () => skillFileInput?.click());
  skillUploadDropzone?.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    skillFileInput?.click();
  });
  skillUploadDropzone?.addEventListener('dragover', (event) => {
    event.preventDefault();
    skillUploadDropzone.classList.add('is-dragover');
  });
  skillUploadDropzone?.addEventListener('dragleave', () => {
    skillUploadDropzone.classList.remove('is-dragover');
  });
  skillUploadDropzone?.addEventListener('drop', (event) => {
    event.preventDefault();
    skillUploadDropzone.classList.remove('is-dragover');
    const droppedFile = event.dataTransfer?.files?.[0] || null;
    if (!skillFileInput) return;
    if (!droppedFile) {
      resetSkillFileValidation();
      syncSkillSubmit();
      return;
    }
    const transfer = new DataTransfer();
    transfer.items.add(droppedFile);
    skillFileInput.files = transfer.files;
    validateSkillFile(droppedFile);
  });

  skillModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-modal-close]')) closeSkillModal();
  });

  skillModalForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = String(skillNameInput?.value || '').trim();
    const description = String(skillDescriptionInput?.value || '').trim();
    const file = skillFileInput?.files?.[0];
    const isActive = skillStatusInput?.checked !== false;
    const status = isActive ? 'active' : 'inactive';
    const isEdit = skillModal.dataset.mode === 'edit';

    if (!name || (!isEdit && skillFileValidationState !== 'valid')) {
      syncSkillSubmit();
      return;
    }

    const statusMeta = getSkillStatusMeta(isActive);
    const updatedAt = new Intl.DateTimeFormat('pt-BR').format(new Date());
    const safeName = escapeHtmlWes(name);
    const safeDescription = escapeHtmlWes(description || (!isEdit && file ? `Arquivo enviado: ${file.name}` : 'Sem descrição'));

    if (isEdit && editingSkillRow) {
      const cells = editingSkillRow.querySelectorAll(':scope > span');
      if (cells[0]) cells[0].innerHTML = `<strong>${safeName}</strong>`;
      if (cells[1]) cells[1].textContent = description || 'Sem descrição';
      if (cells[2]) cells[2].innerHTML = `<span class="chip ${statusMeta.className}">${statusMeta.label}</span>`;
      if (cells[3]) cells[3].textContent = updatedAt;

      closeSkillModal();
      showAppToast('Habilidade atualizada com sucesso');
      return;
    }

    const rowMarkup = `
      <div class="data-row">
        <span><strong>${safeName}</strong></span>
        <span class="muted">${safeDescription}</span>
        <span class="chip ${statusMeta.className}">${statusMeta.label}</span>
        <span>${updatedAt}</span>
        <span class="row-actions">
          <button class="icon-btn action-icon" aria-label="Editar habilidade" data-skill-edit type="button">
            <span class="material-symbols-rounded">edit</span>
          </button>
          <button class="icon-btn action-icon danger" aria-label="Excluir habilidade">
            <span class="material-symbols-rounded">delete</span>
          </button>
        </span>
      </div>
    `;

    const firstDataRow = skillsTable.querySelector('.data-row.header + .data-row');
    if (firstDataRow) {
      firstDataRow.insertAdjacentHTML('beforebegin', rowMarkup);
    } else {
      skillsTable.insertAdjacentHTML('beforeend', rowMarkup);
    }

    closeSkillModal();
    showAppToast('Habilidade criada com sucesso');
  });

  skillsTable.addEventListener('click', async (event) => {
    const editButton = event.target.closest('[data-skill-edit]');
    if (!editButton) return;

    const row = editButton.closest('.data-row');
    if (!row || row.classList.contains('header')) return;

    const skillData = readSkillRowData(row);
    editingSkillRow = row;
    setSkillModalMode('edit');
    skillModalForm.reset();
    if (skillNameInput) skillNameInput.value = skillData.name;
    if (skillDescriptionInput) skillDescriptionInput.value = skillData.description;
    if (skillStatusInput) skillStatusInput.checked = skillData.isActive;
    if (skillFileInput) skillFileInput.value = '';
    resetSkillFileValidation();
    syncSkillStatus();
    syncSkillSubmit();
    skillModal.classList.add('open');
    skillModal.setAttribute('aria-hidden', 'false');
    const skillModalBody = skillModal.querySelector('.skill-modal-body');
    if (skillModalBody) skillModalBody.scrollTop = 0;
    skillNameInput?.focus();
  });

  skillsTable.addEventListener('click', async (event) => {
    const deleteButton = event.target.closest('.row-actions .action-icon.danger[aria-label="Excluir habilidade"]');
    if (!deleteButton || !skillsTable.contains(deleteButton)) return;
    if (deleteButton.disabled || deleteButton.getAttribute('disabled') !== null || deleteButton.classList.contains('muted-icon')) return;

    const row = deleteButton.closest('.data-row');
    if (!row || row.classList.contains('header')) return;

    const skillName = row.querySelector('strong')?.textContent?.trim() || 'esta habilidade';
    if (!(await confirmDeletionAction(`a habilidade "${skillName}"`))) return;

    row.remove();
    showAppToast('Habilidade excluída');
  });
}

if (organizationsTable) {
  organizationsTable.addEventListener('click', async (event) => {
    const deleteButton = event.target.closest('.row-actions .action-icon.danger[aria-label="Excluir organização"]');
    if (!deleteButton) return;
    if (deleteButton.disabled || deleteButton.getAttribute('disabled') !== null || deleteButton.classList.contains('muted-icon')) return;
    const row = deleteButton.closest('[data-organization-row]');
    if (!row) return;
    const organizationName = row.dataset.organizationName || row.querySelector('strong')?.textContent?.trim() || 'esta organização';
    if (!(await confirmDeletionAction(`a organização "${organizationName}"`))) return;
    row.remove();
    showAppToast('Organização excluída');
  });
}

if (companiesTable && companyUsersModal && companyUsersList && companyUserSelect) {
  let activeCompanyRow = null;
  let activeCompanyId = '';
  let draftCompanyUsers = [];

  const fallbackCompanyUsers = [
    { id: 'admin@wes.com', name: 'WES ADMIN', email: 'admin@wes.com', role: 'Administrador' },
    { id: 'viniciusaires@hotmail.com', name: 'Alfeu Vinicius Souza', email: 'viniciusaires@hotmail.com', role: 'Administrador' },
    { id: 'ana.silva@cedae.com', name: 'Ana Silva', email: 'ana.silva@cedae.com', role: 'Usuário' },
    { id: 'carlos.santos@cedae.com', name: 'Carlos Santos', email: 'carlos.santos@cedae.com', role: 'Usuário' },
  ];

  const companyUsersByCompany = {
    avas: [
      { userId: 'admin@wes.com', active: true },
      { userId: 'viniciusaires@hotmail.com', active: true },
    ],
    techcorp: [
      { userId: 'admin@wes.com', active: false },
      { userId: 'ana.silva@cedae.com', active: true },
    ],
    'aguas-rio': [
      { userId: 'ana.silva@cedae.com', active: true },
      { userId: 'carlos.santos@cedae.com', active: true },
    ],
    'cedae-saneamento': [
      { userId: 'ana.silva@cedae.com', active: true },
    ],
  };

  const normalizeCompanyUserId = (value) => String(value || '').trim().toLowerCase();

  const getCompanyUserInitial = (user) => {
    const source = String(user?.name || user?.email || '?').trim();
    return (source[0] || '?').toUpperCase();
  };

  const getAllCompanyUsers = () => {
    const byId = new Map();
    fallbackCompanyUsers.forEach((user) => {
      byId.set(normalizeCompanyUserId(user.id), { ...user, id: normalizeCompanyUserId(user.id) });
    });

    usersTable?.querySelectorAll('.data-row:not(.header)').forEach((row) => {
      const name = row.querySelector('.user-cell strong')?.textContent?.trim() || '';
      const email = row.children[1]?.textContent?.trim() || '';
      const role = row.children[2]?.textContent?.trim() || 'Usuário';
      const id = normalizeCompanyUserId(email);
      if (!id) return;
      byId.set(id, { id, name: name || email, email, role });
    });

    return Array.from(byId.values());
  };

  const findCompanyUser = (userId) => {
    const normalizedId = normalizeCompanyUserId(userId);
    return getAllCompanyUsers().find((user) => user.id === normalizedId) || {
      id: normalizedId,
      name: normalizedId,
      email: normalizedId,
      role: 'Usuário',
    };
  };

  const updateCompanyUserCount = (companyId, count) => {
    const row = companiesTable.querySelector(`[data-company-row][data-company-id="${companyId}"]`);
    const countCell = row?.querySelector('[data-company-user-count]');
    if (countCell) countCell.textContent = String(count);
  };

  const updateCompanyUserSelect = () => {
    const linkedUserIds = new Set(draftCompanyUsers.map((item) => normalizeCompanyUserId(item.userId)));
    const availableUsers = getAllCompanyUsers().filter((user) => !linkedUserIds.has(user.id));

    companyUserSelect.innerHTML = '';
    if (availableUsers.length === 0) {
      const option = document.createElement('option');
      option.value = '';
      option.textContent = 'Todos os usuários já estão vinculados';
      companyUserSelect.appendChild(option);
      companyUserSelect.disabled = true;
      if (companyAddUserButton) companyAddUserButton.disabled = true;
      return;
    }

    const emptyOption = document.createElement('option');
    emptyOption.value = '';
    emptyOption.textContent = 'Selecione um usuário';
    companyUserSelect.appendChild(emptyOption);
    availableUsers.forEach((user) => {
      const option = document.createElement('option');
      option.value = user.id;
      option.textContent = `${user.name} · ${user.email}`;
      companyUserSelect.appendChild(option);
    });
    companyUserSelect.disabled = false;
    if (companyAddUserButton) companyAddUserButton.disabled = true;
  };

  const renderCompanyUsers = () => {
    companyUsersList.innerHTML = '';
    draftCompanyUsers.forEach((membership) => {
      const user = findCompanyUser(membership.userId);
      const row = document.createElement('div');
      const switchId = `companyUser${activeCompanyId}${user.id}`.replace(/[^a-zA-Z0-9]+/g, '');
      row.className = 'company-user-row';
      row.dataset.companyUserId = user.id;
      row.innerHTML = `
        <span class="company-user-identity">
          <span class="user-avatar small">${escapeHtmlWes(getCompanyUserInitial(user))}</span>
          <span>
            <strong>${escapeHtmlWes(user.name)}</strong>
            <span class="muted">${escapeHtmlWes(user.role)}</span>
          </span>
        </span>
        <span class="company-user-email">${escapeHtmlWes(user.email)}</span>
        <span class="company-user-status">
          <label class="switch small" for="${escapeHtmlWes(switchId)}">
            <input type="checkbox" id="${escapeHtmlWes(switchId)}" data-company-user-status ${membership.active ? 'checked' : ''} />
            <span class="switch-track"></span>
          </label>
          <span class="switch-label">${membership.active ? 'Ativo' : 'Inativo'}</span>
        </span>
        <span class="row-actions">
          <button class="icon-btn action-icon danger" type="button" data-company-user-remove aria-label="Remover usuário da empresa">
            <span class="material-symbols-rounded">delete</span>
          </button>
        </span>
      `;
      companyUsersList.appendChild(row);
    });

    if (companyUsersCount) {
      const count = draftCompanyUsers.length;
      companyUsersCount.textContent = `${count} ${count === 1 ? 'usuário' : 'usuários'}`;
    }
    updateCompanyUserSelect();
  };

  const closeCompanyUsersModal = () => {
    companyUsersModal.classList.remove('open');
    companyUsersModal.setAttribute('aria-hidden', 'true');
    activeCompanyRow = null;
    activeCompanyId = '';
    draftCompanyUsers = [];
  };

  const openCompanyUsersModal = (companyRow) => {
    activeCompanyRow = companyRow;
    activeCompanyId = companyRow.dataset.companyId || '';
    const companyName = companyRow.dataset.companyName || companyRow.querySelector('strong')?.textContent?.trim() || 'Empresa';
    const currentUsers = companyUsersByCompany[activeCompanyId] || [];
    draftCompanyUsers = currentUsers.map((item) => ({ ...item, userId: normalizeCompanyUserId(item.userId) }));

    if (companyUsersModalTitle) companyUsersModalTitle.textContent = `Editar empresa · ${companyName}`;
    renderCompanyUsers();
    companyUsersModal.classList.add('open');
    companyUsersModal.setAttribute('aria-hidden', 'false');
    companyUserSelect.focus();
  };

  companiesTable.addEventListener('click', async (event) => {
    const editButton = event.target.closest('[data-company-edit]');
    if (editButton) {
      const row = editButton.closest('[data-company-row]');
      if (!row) return;
      openCompanyUsersModal(row);
      return;
    }

    const deleteButton = event.target.closest('.row-actions .action-icon.danger[aria-label="Excluir empresa"]');
    if (!deleteButton) return;
    if (deleteButton.disabled || deleteButton.getAttribute('disabled') !== null || deleteButton.classList.contains('muted-icon')) return;
    const row = deleteButton.closest('[data-company-row]');
    if (!row) return;
    const companyName = row.dataset.companyName || row.querySelector('strong')?.textContent?.trim() || 'esta empresa';
    if (!(await confirmDeletionAction(`a empresa "${companyName}"`))) return;
    row.remove();
    showAppToast('Empresa excluída');
  });

  companyUserSelect.addEventListener('change', () => {
    if (companyAddUserButton) companyAddUserButton.disabled = !companyUserSelect.value;
  });

  companyAddUserButton?.addEventListener('click', () => {
    const userId = normalizeCompanyUserId(companyUserSelect.value);
    if (!userId || draftCompanyUsers.some((item) => normalizeCompanyUserId(item.userId) === userId)) return;
    draftCompanyUsers.push({ userId, active: true });
    renderCompanyUsers();
  });

  companyUsersList.addEventListener('change', (event) => {
    const input = event.target.closest('[data-company-user-status]');
    if (!input) return;
    const row = input.closest('[data-company-user-id]');
    const userId = normalizeCompanyUserId(row?.dataset.companyUserId);
    const membership = draftCompanyUsers.find((item) => normalizeCompanyUserId(item.userId) === userId);
    if (!membership) return;
    membership.active = input.checked;
    const label = row.querySelector('.switch-label');
    if (label) label.textContent = input.checked ? 'Ativo' : 'Inativo';
  });

  companyUsersList.addEventListener('click', async (event) => {
    const removeButton = event.target.closest('[data-company-user-remove]');
    if (!removeButton) return;
    const row = removeButton.closest('[data-company-user-id]');
    const userId = normalizeCompanyUserId(row?.dataset.companyUserId);
    if (!(await confirmDeletionAction('este usuário da empresa'))) return;
    draftCompanyUsers = draftCompanyUsers.filter((item) => normalizeCompanyUserId(item.userId) !== userId);
    renderCompanyUsers();
  });

  companyUsersModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-modal-close]')) closeCompanyUsersModal();
  });

  companyUsersSaveButton?.addEventListener('click', () => {
    if (!activeCompanyId) return;
    companyUsersByCompany[activeCompanyId] = draftCompanyUsers.map((item) => ({ ...item }));
    updateCompanyUserCount(activeCompanyId, draftCompanyUsers.length);
    closeCompanyUsersModal();
    showAppToast('Usuários da empresa atualizados');
  });
}

bindStaticTableDeleteConfirmation(document.querySelector('#page-schedules .data-table'), {
  getTargetLabel: (row) => {
    const name = row.querySelector('span:first-child')?.textContent?.trim() || 'este agendamento';
    return `o agendamento "${name}"`;
  },
  getSuccessMessage: () => 'Agendamento excluído',
});

bindStaticTableDeleteConfirmation(document.querySelector('#page-executors .executors-table'), {
  getTargetLabel: (row) => {
    const name = row.querySelector('span:first-child')?.textContent?.trim() || 'este executor';
    return `o executor "${name}"`;
  },
  getSuccessMessage: () => 'Executor excluído',
});

bindStaticTableDeleteConfirmation(document.querySelector('#page-executors .tab-panel[data-panel="executors-service"] .data-table'), {
  getTargetLabel: (row) => {
    const name = row.querySelector('span:first-child')?.textContent?.trim() || 'esta conta de serviço';
    return `a conta de serviço "${name}"`;
  },
  getSuccessMessage: () => 'Conta de serviço excluída',
});

bindStaticTableDeleteConfirmation(document.querySelector('#page-packages .packages-table'), {
  getTargetLabel: (row) => {
    const name = row.querySelector('span:first-child')?.textContent?.trim() || 'este pacote';
    return `o pacote "${name}"`;
  },
  getSuccessMessage: () => 'Pacote excluído',
});

bindStaticTableDeleteConfirmation(document.querySelector('#page-channels .channels-table'), {
  getTargetLabel: (row) => {
    const name = row.querySelector('.channel-cell strong')?.textContent?.trim() || 'este canal';
    return `o canal "${name}"`;
  },
  getSuccessMessage: () => 'Canal excluído',
});

bindStaticTableDeleteConfirmation(document.querySelector('#page-campaigns .campaigns-data-table'), {
  getTargetLabel: (row) => {
    const name = row.querySelector('span:first-child strong')?.textContent?.trim() || 'esta campanha';
    return `a campanha "${name}"`;
  },
  getSuccessMessage: () => 'Campanha excluída',
});

bindStaticTableDeleteConfirmation(document.querySelector('#page-credentials .credentials-table'), {
  getTargetLabel: (row) => {
    const name = row.querySelector('span:first-child')?.textContent?.trim() || 'esta credencial';
    return `a credencial "${name}"`;
  },
  getSuccessMessage: () => 'Credencial excluída',
});

const CREDENTIAL_TYPE_LABEL_MAP = {
  Database: 'Banco de Dados',
  'Banco de Dados': 'Banco de Dados',
  AWS: 'AWS',
  'Chave de API': 'Chave de API',
  'Chave SSH': 'Chave SSH',
  'Token OAuth': 'Token OAuth',
  Personalizada: 'Personalizada',
};

let activeCredentialRow = null;
let activeCredentialSelectTarget = null;
let activeInputFileSelectTarget = null;
let activeAutomationResourcePickerType = null;

function normalizeCredentialTypeLabel(type = '') {
  const normalizedType = String(type || '').trim();
  return CREDENTIAL_TYPE_LABEL_MAP[normalizedType] || 'Personalizada';
}

function getCredentialFieldDefinitions(type, values = {}) {
  const normalizedType = normalizeCredentialTypeLabel(type);
  const sshAuthMethod = values.auth_method || 'Chave privada';
  const oauthGrantType = values.grant_type || 'Credenciais do cliente';
  const fieldsByType = {
    AWS: [
      { name: 'access_key_id', label: 'ID da chave de acesso', required: true, placeholder: 'AKIA...', hint: 'Identificador público da chave AWS.' },
      { name: 'secret_access_key', label: 'Chave de acesso secreta', required: true, sensitive: true, placeholder: 'Informe o segredo AWS' },
      { name: 'region', label: 'Região', placeholder: 'us-east-1', hint: 'Opcional. Se vazio, o padrão será us-east-1.' },
      { name: 'session_token', label: 'Token de sessão', sensitive: true, placeholder: 'Somente para credenciais temporárias STS', hint: 'Opcional, usado apenas em credenciais temporárias.' },
    ],
    'Banco de Dados': [
      { name: 'engine', label: 'Mecanismo', required: true, kind: 'select', options: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle', 'MongoDB'], hint: 'Define o driver e a porta padrão.' },
      { name: 'port', label: 'Porta', required: true, placeholder: '5432', hint: 'PostgreSQL 5432, MySQL 3306, SQL Server 1433, Oracle 1521, MongoDB 27017.' },
      { name: 'host', label: 'Host', required: true, placeholder: 'db.exemplo.local' },
      { name: 'database', label: 'Banco de dados', required: true, placeholder: 'app_producao' },
      { name: 'username', label: 'Usuário', required: true, placeholder: 'usuario_app' },
      { name: 'password', label: 'Senha', required: true, sensitive: true, placeholder: 'Informe a senha' },
      { name: 'ssl_mode', label: 'Modo SSL', kind: 'select', options: ['Desativado', 'Obrigatório', 'Verificação completa'], hint: 'Opcional. Use conforme a política do banco.' },
      { name: 'connection_string', label: 'String de conexão', sensitive: true, placeholder: 'postgresql://...', hint: 'Opcional. Se preenchida, sobrescreve os campos discretos.' },
    ],
    'Chave de API': [
      { name: 'api_key', label: 'Chave de API', required: true, sensitive: true, placeholder: 'Cole a chave de API' },
      { name: 'base_url', label: 'URL base', placeholder: 'https://api.exemplo.com' },
      { name: 'header_name', label: 'Nome do cabeçalho', placeholder: 'Authorization', hint: 'Opcional. Padrão Authorization ou X-API-Key.' },
      { name: 'auth_scheme', label: 'Esquema de autenticação', placeholder: 'Bearer', hint: 'Opcional. Use "nenhum" para enviar a chave sem prefixo.' },
    ],
    'Chave SSH': [
      { name: 'username', label: 'Usuário', required: true, placeholder: 'deploy' },
      { name: 'auth_method', label: 'Método de autenticação', required: true, kind: 'select', options: ['Chave privada', 'Senha'], rerender: true, hint: 'Alterna os campos obrigatórios abaixo.' },
      ...(sshAuthMethod === 'Senha'
        ? [{ name: 'password', label: 'Senha', required: true, sensitive: true, placeholder: 'Informe a senha SSH' }]
        : [
          { name: 'private_key', label: 'Chave privada', required: true, sensitive: true, multiline: true, placeholder: '-----BEGIN OPENSSH PRIVATE KEY-----', hint: 'Cole a chave privada em formato PEM/OpenSSH.' },
          { name: 'passphrase', label: 'Frase secreta', sensitive: true, placeholder: 'Opcional, para a chave privada' },
        ]),
      { name: 'host_port', label: 'Host / porta', placeholder: 'servidor.exemplo.com:22', hint: 'Opcional. Porta padrão 22; o host pode ser informado no uso.' },
    ],
    'Token OAuth': [
      { name: 'grant_type', label: 'Tipo de concessão', required: true, kind: 'select', options: ['Credenciais do cliente', 'Token'], rerender: true },
      ...(oauthGrantType === 'Token'
        ? [
          { name: 'access_token', label: 'Token de acesso', required: true, sensitive: true, placeholder: 'Cole o token de acesso' },
          { name: 'refresh_token', label: 'Token de atualização', sensitive: true, placeholder: 'Opcional' },
          { name: 'token_type_expires_at', label: 'Tipo do token / expira em', placeholder: 'Bearer · 2026-12-31T23:59:59Z', hint: 'Opcional. Padrão Bearer.' },
        ]
        : [
          { name: 'client_id', label: 'ID do cliente', required: true, placeholder: 'id-do-cliente' },
          { name: 'client_secret', label: 'Segredo do cliente', required: true, sensitive: true, placeholder: 'Informe o segredo do cliente' },
          { name: 'token_url', label: 'URL do token', required: true, placeholder: 'https://auth.exemplo.com/oauth/token' },
          { name: 'scope', label: 'Escopo', placeholder: 'leitura escrita', hint: 'Opcional.' },
        ]),
    ],
    Personalizada: [
      { name: 'custom_pairs', label: 'Pares dinâmicos', multiline: true, sensitive: true, placeholder: '{\n  "chave": "valor"\n}', hint: 'Informe pares de chave e valor. Valores sensíveis serão mascarados.' },
    ],
  };
  return fieldsByType[normalizedType] || fieldsByType.Personalizada;
}

function collectCredentialDynamicValues() {
  if (!credentialDynamicFields) return {};
  return Array.from(credentialDynamicFields.querySelectorAll('[data-credential-field]')).reduce((acc, field) => {
    acc[field.dataset.credentialField] = field.value;
    return acc;
  }, {});
}

function refreshCredentialSelectWraps(root = credentialModal) {
  if (typeof hubEnhanceSelectWrap !== 'function') return;
  root?.querySelectorAll('.credential-select-wrap').forEach(hubEnhanceSelectWrap);
}

function renderCredentialDynamicFields(type, values = {}) {
  if (!credentialDynamicFields) return;
  const normalizedType = normalizeCredentialTypeLabel(type);
  const definitions = getCredentialFieldDefinitions(normalizedType, values);
  const fieldsHtml = definitions.map((field) => {
    const value = values[field.name] ?? '';
    const requiredClass = field.required ? ' modal-label--required' : '';
    const requiredAttr = field.required ? ' required' : '';
    const hintHtml = field.hint
      ? `<p class="modal-field-hint">${escapeHtmlWes(field.hint)}</p>`
      : '';
    const compactClass = field.hint ? '' : ' credential-dynamic-field--compact';
    const rerenderAttr = field.rerender ? ' data-credential-rerender' : '';
    const inputId = `credentialField_${field.name}`;
    let controlHtml = '';

    if (field.kind === 'select') {
      const optionsHtml = field.options.map((option) => (
        `<option value="${escapeHtmlWes(option)}"${String(value || field.options[0]) === option ? ' selected' : ''}>${escapeHtmlWes(option)}</option>`
      )).join('');
      controlHtml = `
        <div class="hub-select-wrap hub-select-wrap--block credential-select-wrap">
          <select class="hub-select" id="${escapeHtmlWes(inputId)}" data-credential-field="${escapeHtmlWes(field.name)}"${requiredAttr}${rerenderAttr}>${optionsHtml}</select>
          <span class="material-symbols-rounded hub-select-chevron" aria-hidden="true">expand_more</span>
        </div>
      `;
    } else if (field.multiline) {
      const textareaType = field.sensitive ? ' data-credential-sensitive="true"' : '';
      controlHtml = `
        <div class="credential-sensitive-wrap">
          <textarea class="modal-textarea${field.sensitive ? ' is-concealed' : ''}" id="${escapeHtmlWes(inputId)}" data-credential-field="${escapeHtmlWes(field.name)}"${textareaType}${requiredAttr} rows="4" placeholder="${escapeHtmlWes(field.placeholder || '')}">${escapeHtmlWes(value)}</textarea>
          ${field.sensitive ? '<button class="icon-btn credential-secret-toggle" type="button" data-credential-secret-toggle aria-label="Mostrar valor"><span class="material-symbols-rounded">visibility</span></button>' : ''}
        </div>
      `;
    } else {
      const inputType = field.sensitive ? 'password' : 'text';
      controlHtml = `
        <div class="${field.sensitive ? 'credential-sensitive-wrap' : ''}">
          <input class="modal-input" id="${escapeHtmlWes(inputId)}" data-credential-field="${escapeHtmlWes(field.name)}" type="${inputType}" value="${escapeHtmlWes(value)}" placeholder="${escapeHtmlWes(field.placeholder || '')}" autocomplete="off"${requiredAttr} />
          ${field.sensitive ? '<button class="icon-btn credential-secret-toggle" type="button" data-credential-secret-toggle aria-label="Mostrar valor"><span class="material-symbols-rounded">visibility</span></button>' : ''}
        </div>
      `;
    }

    return `
      <div class="credential-dynamic-field${compactClass}">
        <label class="modal-label${requiredClass}" for="${escapeHtmlWes(inputId)}">${escapeHtmlWes(field.label)}</label>
        ${controlHtml}
        ${hintHtml}
      </div>
    `;
  }).join('');

  credentialDynamicFields.innerHTML = `
    <div class="credential-dynamic-header">
      <strong>Dados de ${escapeHtmlWes(normalizedType)}</strong>
    </div>
    <div class="credential-dynamic-grid">${fieldsHtml}</div>
  `;
  refreshCredentialSelectWraps(credentialDynamicFields);
}

function formatCredentialUpdatedAt(date = new Date()) {
  const parts = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).formatToParts(date).reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});
  return `${parts.day}/${parts.month}/${parts.year} • ${parts.hour}:${parts.minute}`;
}

function readCredentialRowData(row) {
  if (!row) return null;
  const cells = row.querySelectorAll(':scope > span');
  let payload = {};
  try {
    payload = row.dataset.credentialPayload ? JSON.parse(row.dataset.credentialPayload) : {};
  } catch (_) {
    payload = {};
  }
  return {
    name: String(row.dataset.credentialName || cells[0]?.textContent || '').trim(),
    type: normalizeCredentialTypeLabel(row.dataset.credentialType || cells[1]?.textContent || ''),
    description: String(row.dataset.credentialDescription || '').trim(),
    updatedAt: String(row.dataset.credentialUpdatedAt || cells[2]?.textContent || '').trim(),
    payload,
  };
}

function setCredentialRowData(row, data) {
  if (!row || !data) return;
  const isAutomationCredentialRow = Boolean(row.closest('.automation-credentials-table'));
  const usageCellHtml = isAutomationCredentialRow
    ? row.querySelector(':scope > span:nth-child(3)')?.innerHTML || '<span>-</span>'
    : '';
  const name = String(data.name || '').trim();
  const type = normalizeCredentialTypeLabel(data.type);
  const description = String(data.description || '').trim();
  const updatedAt = String(data.updatedAt || formatCredentialUpdatedAt()).trim();
  row.dataset.credentialName = name;
  row.dataset.credentialType = type;
  row.dataset.credentialDescription = description;
  row.dataset.credentialUpdatedAt = updatedAt;
  row.dataset.credentialPayload = JSON.stringify(data.payload || {});
  if (isAutomationCredentialRow) {
    row.innerHTML = `
      <span>${escapeHtmlWes(name)}</span>
      <span><span class="chip credential-type-chip">${escapeHtmlWes(type)}</span></span>
      <span class="automation-file-usage">${usageCellHtml}</span>
      <span>${escapeHtmlWes(updatedAt)}</span>
      <span class="row-actions">
        <button class="icon-btn action-icon" aria-label="Editar" data-credential-edit type="button">
          <span class="material-symbols-rounded">edit</span>
        </button>
        <button class="icon-btn action-icon danger" aria-label="Excluir" type="button">
          <span class="material-symbols-rounded">delete</span>
        </button>
      </span>
    `;
    return;
  }
  row.innerHTML = `
    <span>${escapeHtmlWes(name)}</span>
    <span class="chip">${escapeHtmlWes(type)}</span>
    <span>${escapeHtmlWes(updatedAt)}</span>
    <span class="row-actions">
      <button class="icon-btn action-icon" aria-label="Editar" data-credential-edit type="button">
        <span class="material-symbols-rounded">edit</span>
      </button>
      <button class="icon-btn action-icon danger" aria-label="Excluir" type="button">
        <span class="material-symbols-rounded">delete</span>
      </button>
    </span>
  `;
}

function syncSingleHubSelect(select) {
  if (typeof hubEnhanceSelectWrap === 'function') {
    const wrap = select.closest('.hub-select-wrap');
    if (wrap) hubEnhanceSelectWrap(wrap);
  }
}

function readAutomationSelectedResources(select) {
  if (!select) return [];
  try {
    const values = JSON.parse(select.dataset.selectedValues || '[]');
    return Array.isArray(values) ? values.map((value) => String(value || '').trim()).filter(Boolean) : [];
  } catch {
    return [];
  }
}

function writeAutomationSelectedResources(select, values = []) {
  if (!select) return;
  const nextValues = Array.from(new Set(values.map((value) => String(value || '').trim()).filter(Boolean)));
  select.dataset.selectedValues = JSON.stringify(nextValues);
}

function updateAutomationResourceSummary(select, summaryEl, singularLabel, pluralLabel) {
  const values = readAutomationSelectedResources(select);
  if (!summaryEl) return;
  if (!values.length) {
    summaryEl.textContent = '';
    summaryEl.hidden = true;
    return;
  }
  const label = values.length === 1 ? singularLabel : pluralLabel;
  const selectedText = singularLabel === 'credencial'
    ? `selecionada${values.length === 1 ? '' : 's'}`
    : `selecionado${values.length === 1 ? '' : 's'}`;
  summaryEl.textContent = `${values.length} ${label} ${selectedText}: ${values.join(', ')}`;
  summaryEl.hidden = false;
}

function addAutomationSelectedResource(select, value, summaryEl, singularLabel, pluralLabel) {
  if (!select || !value) return;
  const values = readAutomationSelectedResources(select);
  writeAutomationSelectedResources(select, [...values, value]);
  select.value = '__existing__';
  select.dataset.previousValue = '__existing__';
  syncSingleHubSelect(select);
  updateAutomationResourceSummary(select, summaryEl, singularLabel, pluralLabel);
}

function closeCredentialModal() {
  if (!credentialModal || !credentialModalForm) return;
  if (activeCredentialSelectTarget && activeCredentialSelectTarget.value === '__new__') {
    activeCredentialSelectTarget.value = readAutomationSelectedResources(activeCredentialSelectTarget).length ? '__existing__' : '';
    syncSingleHubSelect(activeCredentialSelectTarget);
  }
  credentialModal.classList.remove('open');
  credentialModal.setAttribute('aria-hidden', 'true');
  credentialModalForm.reset();
  if (credentialDynamicFields) credentialDynamicFields.innerHTML = '';
  activeCredentialRow = null;
  activeCredentialSelectTarget = null;
}

function openCredentialModal(row = null, options = {}) {
  if (!credentialModal || !credentialModalForm) return;
  activeCredentialRow = row;
  activeCredentialSelectTarget = options.targetSelect || null;
  const isEdit = Boolean(row);
  const rowData = readCredentialRowData(row);
  if (credentialModalTitle) credentialModalTitle.textContent = isEdit ? 'Editar credencial' : 'Adicionar credencial';
  if (credentialModalSubmitBtn) credentialModalSubmitBtn.textContent = isEdit ? 'Salvar alterações' : 'Salvar credencial';
  if (credentialNameInput) credentialNameInput.value = rowData?.name || '';
  if (credentialDescriptionInput) credentialDescriptionInput.value = rowData?.description || '';
  if (credentialTypeSelect) credentialTypeSelect.value = rowData?.type || 'AWS';
  refreshCredentialSelectWraps();
  renderCredentialDynamicFields(credentialTypeSelect?.value || 'AWS', rowData?.payload || {});
  credentialModal.classList.add('open');
  credentialModal.setAttribute('aria-hidden', 'false');
  window.setTimeout(() => credentialNameInput?.focus(), 0);
}

if (credentialsTable && credentialModal && credentialModalForm) {
  openCredentialModalBtn?.addEventListener('click', () => openCredentialModal());
  automationCredentialsAddButton?.addEventListener('click', () => openCredentialModal());

  credentialModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-credential-modal-close]')) closeCredentialModal();

    const secretToggle = event.target.closest('[data-credential-secret-toggle]');
    if (secretToggle) {
      const wrap = secretToggle.closest('.credential-sensitive-wrap');
      const field = wrap?.querySelector('[data-credential-field]');
      const icon = secretToggle.querySelector('.material-symbols-rounded');
      if (!field) return;
      const isHidden = field.type === 'password' || field.classList.contains('is-concealed');
      if (field.tagName === 'TEXTAREA') {
        field.classList.toggle('is-concealed', !isHidden);
      } else {
        field.type = isHidden ? 'text' : 'password';
      }
      secretToggle.setAttribute('aria-label', isHidden ? 'Ocultar valor' : 'Mostrar valor');
      if (icon) icon.textContent = isHidden ? 'visibility_off' : 'visibility';
    }
  });

  credentialTypeSelect?.addEventListener('change', () => {
    renderCredentialDynamicFields(credentialTypeSelect.value, {});
  });

  credentialDynamicFields?.addEventListener('change', (event) => {
    if (!event.target.closest('[data-credential-rerender]')) return;
    const values = collectCredentialDynamicValues();
    renderCredentialDynamicFields(credentialTypeSelect?.value || 'AWS', values);
  });

  document.querySelectorAll('.credentials-table').forEach((table) => table.addEventListener('click', (event) => {
    const editButton = event.target.closest('[data-credential-edit]');
    if (!editButton) return;
    const row = editButton.closest('.data-row:not(.header)');
    if (row) openCredentialModal(row);
  }));

  credentialModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const payload = {
      name: String(credentialNameInput?.value || '').trim(),
      description: String(credentialDescriptionInput?.value || '').trim(),
      type: normalizeCredentialTypeLabel(credentialTypeSelect?.value || ''),
      payload: collectCredentialDynamicValues(),
      updatedAt: formatCredentialUpdatedAt(),
    };
    if (!payload.name) return;

    const isEdit = Boolean(activeCredentialRow);
    const row = activeCredentialRow || document.createElement('div');
    const targetSelect = activeCredentialSelectTarget;
    row.className = 'data-row';
    setCredentialRowData(row, payload);
    if (!isEdit) {
      const headerRow = credentialsTable.querySelector('.data-row.header');
      if (headerRow?.nextElementSibling) {
        credentialsTable.insertBefore(row, headerRow.nextElementSibling);
      } else {
        credentialsTable.appendChild(row);
      }
    }
    if (!isEdit && targetSelect) {
      addAutomationSelectedResource(
        targetSelect,
        payload.name,
        automationCreateCredentialSummary,
        'credencial',
        'credenciais',
      );
    }
    closeCredentialModal();
    showAppToast(isEdit ? 'Credencial atualizada' : 'Credencial criada');
  });
}

function closeInputFileModal() {
  if (!inputFileModal || !inputFileModalForm) return;
  if (activeInputFileSelectTarget && activeInputFileSelectTarget.value === '__new__') {
    activeInputFileSelectTarget.value = readAutomationSelectedResources(activeInputFileSelectTarget).length ? '__existing__' : '';
    syncSingleHubSelect(activeInputFileSelectTarget);
  }
  inputFileModal.classList.remove('open');
  inputFileModal.setAttribute('aria-hidden', 'true');
  inputFileModalForm.reset();
  activeInputFileSelectTarget = null;
}

function getInputFileTypeFromName(fileName = '') {
  const extension = String(fileName || '').split('.').pop()?.toLowerCase() || '';
  if (extension === 'csv') return 'CSV';
  if (extension === 'json') return 'JSON';
  if (extension === 'txt') return 'TXT';
  if (extension === 'xlsx' || extension === 'xls') return 'XLSX';
  if (extension === 'pdf') return 'PDF';
  return '';
}

function resetInputFileModalUploadState() {
  if (inputFileModalUploadInput) inputFileModalUploadInput.value = '';
  if (inputFileModalUploadTitle) inputFileModalUploadTitle.textContent = 'Fazer upload do arquivo';
  if (inputFileModalUploadMeta) inputFileModalUploadMeta.textContent = 'CSV, JSON, TXT, XLSX ou PDF';
  if (inputFileModalUploadHint) {
    inputFileModalUploadHint.textContent = 'Selecione o arquivo que será usado nas automações.';
    inputFileModalUploadHint.classList.remove('is-error', 'is-success');
  }
}

function syncInputFileModalUploadState(file) {
  if (!file) {
    resetInputFileModalUploadState();
    return;
  }
  const detectedType = getInputFileTypeFromName(file.name);
  if (detectedType && inputFileTypeSelect) {
    inputFileTypeSelect.value = detectedType;
  }
  if (inputFileNameInput && !String(inputFileNameInput.value || '').trim()) {
    inputFileNameInput.value = file.name;
  }
  if (inputFileModalUploadTitle) inputFileModalUploadTitle.textContent = file.name;
  if (inputFileModalUploadMeta) {
    const size = typeof formatAutomationFileSize === 'function' ? formatAutomationFileSize(file.size) : '';
    inputFileModalUploadMeta.textContent = [detectedType || 'Arquivo', size].filter(Boolean).join(' · ');
  }
  if (inputFileModalUploadHint) {
    inputFileModalUploadHint.textContent = 'Arquivo selecionado para upload.';
    inputFileModalUploadHint.classList.remove('is-error');
    inputFileModalUploadHint.classList.add('is-success');
  }
  refreshCredentialSelectWraps(inputFileModal);
}

function openInputFileModal(options = {}) {
  if (!inputFileModal || !inputFileModalForm) return;
  activeInputFileSelectTarget = options.targetSelect || null;
  inputFileModalForm.reset();
  resetInputFileModalUploadState();
  if (inputFileTypeSelect) inputFileTypeSelect.value = 'CSV';
  refreshCredentialSelectWraps(inputFileModal);
  inputFileModal.classList.add('open');
  inputFileModal.setAttribute('aria-hidden', 'false');
  window.setTimeout(() => inputFileNameInput?.focus(), 0);
}

if (inputFileModal && inputFileModalForm) {
  inputFileModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-input-file-modal-close]')) closeInputFileModal();
  });

  inputFileModalUploadButton?.addEventListener('click', () => {
    inputFileModalUploadInput?.click();
  });

  inputFileModalUploadInput?.addEventListener('change', () => {
    syncInputFileModalUploadState(inputFileModalUploadInput.files?.[0] || null);
  });

  inputFileModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = String(inputFileNameInput?.value || '').trim();
    const type = String(inputFileTypeSelect?.value || '').trim() || 'CSV';
    const file = inputFileModalUploadInput?.files?.[0] || null;
    const visibility = 'Privado';
    if (!name) return;
    if (!file) {
      if (inputFileModalUploadHint) {
        inputFileModalUploadHint.textContent = 'Faça upload de um arquivo para salvar.';
        inputFileModalUploadHint.classList.add('is-error');
        inputFileModalUploadHint.classList.remove('is-success');
      }
      inputFileModalUploadButton?.focus();
      return;
    }

    if (inputFilesTable) {
      const row = document.createElement('div');
      row.className = 'data-row cols-5';
      row.innerHTML = `
        <span>${escapeHtmlWes(name)}</span>
        <span class="chip">${escapeHtmlWes(type)}</span>
        <span>${escapeHtmlWes(visibility)}</span>
        <span>${escapeHtmlWes(formatCredentialUpdatedAt())}</span>
        <span class="row-actions">
          <button class="icon-btn action-icon" aria-label="Baixar" type="button">
            <span class="material-symbols-rounded">download</span>
          </button>
          <button class="icon-btn action-icon danger" aria-label="Excluir" type="button">
            <span class="material-symbols-rounded">delete</span>
          </button>
        </span>
      `;
      const headerRow = inputFilesTable.querySelector('.data-row.header');
      if (headerRow?.nextElementSibling) {
        inputFilesTable.insertBefore(row, headerRow.nextElementSibling);
      } else {
        inputFilesTable.appendChild(row);
      }
    }

    if (activeInputFileSelectTarget) {
      addAutomationSelectedResource(
        activeInputFileSelectTarget,
        name,
        automationCreateInputFileSummary,
        'arquivo',
        'arquivos',
      );
    }
    closeInputFileModal();
    showAppToast('Arquivo de entrada criado');
  });
}

if (inputFilesUploadButton && inputFilesUploadInput) {
  inputFilesUploadButton.addEventListener('click', () => {
    inputFilesUploadInput.value = '';
    inputFilesUploadInput.click();
  });

  automationFilesAddButton?.addEventListener('click', () => {
    inputFilesUploadInput.value = '';
    inputFilesUploadInput.click();
  });

  inputFilesUploadInput.addEventListener('change', () => {
    const fileName = inputFilesUploadInput.files?.[0]?.name;
    if (fileName) showAppToast(`Arquivo selecionado: ${fileName}`);
  });
}

function getAutomationResourcePickerItems(type) {
  if (type === 'input-file') {
    return Array.from(inputFilesTable?.querySelectorAll('.data-row:not(.header)') || [])
      .map((row) => {
        const cells = row.querySelectorAll(':scope > span');
        const name = String(cells[0]?.textContent || '').trim();
        const meta = String(cells[1]?.textContent || '').trim();
        return name ? { value: name, label: name, meta } : null;
      })
      .filter(Boolean);
  }

  return Array.from(credentialsTable?.querySelectorAll('.data-row:not(.header)') || [])
    .map((row) => {
      const name = String(row.dataset.credentialName || row.querySelector(':scope > span:first-child')?.textContent || '').trim();
      const meta = String(row.dataset.credentialType || row.querySelector(':scope > span:nth-child(2)')?.textContent || '').trim();
      return name ? { value: name, label: name, meta } : null;
    })
    .filter(Boolean);
}

function getAutomationResourceControls(type) {
  if (type === 'input-file') {
    return {
      select: automationCreateInputFile,
      summary: automationCreateInputFileSummary,
      singularLabel: 'arquivo',
      pluralLabel: 'arquivos',
      title: 'Selecionar arquivos',
      emptyText: 'Nenhum arquivo salvo disponível.',
    };
  }

  return {
    select: automationCreateCredential,
    summary: automationCreateCredentialSummary,
    singularLabel: 'credencial',
    pluralLabel: 'credenciais',
    title: 'Selecionar credenciais',
    emptyText: 'Nenhuma credencial salva disponível.',
  };
}

function closeAutomationResourcePicker() {
  automationResourcePickerModal?.classList.remove('open');
  automationResourcePickerModal?.setAttribute('aria-hidden', 'true');
  activeAutomationResourcePickerType = null;
}

function openAutomationResourcePicker(type) {
  if (!automationResourcePickerModal || !automationResourcePickerList) return;
  const controls = getAutomationResourceControls(type);
  const items = getAutomationResourcePickerItems(type);
  const selectedValues = readAutomationSelectedResources(controls.select);

  activeAutomationResourcePickerType = type;
  if (automationResourcePickerTitle) automationResourcePickerTitle.textContent = controls.title;
  if (automationResourcePickerEmpty) {
    automationResourcePickerEmpty.textContent = controls.emptyText;
    automationResourcePickerEmpty.hidden = items.length > 0;
  }
  if (automationResourcePickerApply) automationResourcePickerApply.disabled = items.length === 0;

  automationResourcePickerList.innerHTML = items.map((item) => {
    const isChecked = selectedValues.includes(item.value);
    return `
      <label class="automation-resource-picker-item">
        <input type="checkbox" value="${escapeHtmlWes(item.value)}" ${isChecked ? 'checked' : ''} />
        <span class="automation-resource-picker-main">
          <span class="automation-resource-picker-name">${escapeHtmlWes(item.label)}</span>
          <span class="automation-resource-picker-meta">${escapeHtmlWes(item.meta || 'Disponível')}</span>
        </span>
      </label>
    `;
  }).join('');

  automationResourcePickerModal.classList.add('open');
  automationResourcePickerModal.setAttribute('aria-hidden', 'false');
}

automationResourcePickerModal?.addEventListener('click', (event) => {
  if (event.target.closest('[data-automation-resource-picker-close]')) {
    closeAutomationResourcePicker();
  }
});

automationResourcePickerApply?.addEventListener('click', () => {
  if (!activeAutomationResourcePickerType) return;
  const controls = getAutomationResourceControls(activeAutomationResourcePickerType);
  const values = Array.from(automationResourcePickerList?.querySelectorAll('input:checked') || [])
    .map((input) => input.value)
    .filter(Boolean);

  writeAutomationSelectedResources(controls.select, values);
  controls.select.value = values.length ? '__existing__' : '';
  controls.select.dataset.previousValue = controls.select.value;
  syncSingleHubSelect(controls.select);
  updateAutomationResourceSummary(controls.select, controls.summary, controls.singularLabel, controls.pluralLabel);
  closeAutomationResourcePicker();
});

bindStaticTableDeleteConfirmation(document.querySelector('#page-input-files .data-table'), {
  getTargetLabel: (row) => {
    const name = row.querySelector('span:first-child')?.textContent?.trim() || 'este arquivo';
    return `o arquivo "${name}"`;
  },
  getSuccessMessage: () => 'Arquivo excluído',
});

bindStaticTableDeleteConfirmation(document.querySelector('#page-users .roles-table'), {
  getTargetLabel: (row) => {
    const roleCell = row.querySelector('.role-cell');
    const iconText = roleCell?.querySelector('.material-symbols-rounded')?.textContent?.trim() || '';
    const name = (roleCell?.textContent || '').replace(iconText, '').trim() || 'esta função';
    return `a função "${name}"`;
  },
  getSuccessMessage: () => 'Função excluída',
});

bindStaticTableDeleteConfirmation(document.querySelector('#page-organization .tab-panel[data-panel="org-keys"] .data-table'), {
  getTargetLabel: (row) => {
    const name = row.querySelector('span:first-child')?.textContent?.trim() || 'esta chave de API';
    return `a chave de API "${name}"`;
  },
  getSuccessMessage: () => 'Chave de API excluída',
});

bindStaticTableDeleteConfirmation(document.querySelector('#page-settings .sessions-table'), {
  buttonSelector: '.row-actions .action-icon.danger[aria-label="Encerrar sessão"]',
  getTargetLabel: (row) => {
    const name = row.querySelector('span:first-child')?.textContent?.trim() || 'esta sessão';
    return `a sessão "${name}"`;
  },
  getSuccessMessage: () => 'Sessão encerrada',
});

if (environmentsTable && environmentModal && environmentModalForm) {
  let activeEnvironmentRow = null;
  let isCreatingEnvironment = false;
  let activeEnvironmentCode = '';
  let draftEnvironmentCode = '';
  let activeRelationPickerType = '';
  let activeRelationPickerButton = null;

  const environmentRelations = {
    'env-operacoes': {
      projects: [
        'Operações integradas',
        'Backoffice comercial',
        'Atendimento multicanal',
        'Controle de filas',
        'Qualidade operacional',
        'SLA e escalonamento',
      ],
      agents: [
        'Atlas Core',
        'Nimbus Ops',
        'Queue Watch',
        'SLA Sentinel',
        'Triagem Assistida',
        'Orquestrador de Tarefas',
        'Backoffice Helper',
        'Monitor de Incidentes',
        'Qualidade de Atendimento',
        'Resumo de Plantão',
        'Classificador de Chamados',
        'Roteador de Prioridade',
        'Validador de Evidências',
        'Auditor Operacional',
      ],
      users: [
        'Alfeu Vinicius Souza',
        'Mariana Costa',
        'Lucas Almeida',
      ],
    },
    'env-financeiro': {
      projects: [
        'Controladoria e fechamento',
        'Conciliação bancária',
        'Contas a pagar',
        'Relatórios financeiros',
      ],
      agents: [
        'Pulse Finance',
        'Ledger Check',
        'Conciliação Express',
        'Fechamento Mensal',
        'Analista de Despesas',
        'Previsor de Caixa',
        'Validador Fiscal',
        'Resumo Financeiro',
      ],
      users: [
        'Paula Ribeiro',
        'Rafael Moura',
      ],
    },
    'env-marketing': {
      projects: [
        'Campanhas digitais',
        'Segmentação de clientes',
        'Performance e mídia',
      ],
      agents: [
        'Campaign Copilot',
        'Segment Builder',
        'Mídia Performance',
        'Copy Review',
        'Lead Scoring',
      ],
      users: [
        'Camila Rocha',
        'Bruno Martins',
      ],
    },
    'env-rh': {
      projects: [
        'Admissões e onboarding',
        'Comunicação interna',
      ],
      agents: [
        'People Assist',
        'Onboarding Guide',
        'Comunicados RH',
        'Trilhas de Desenvolvimento',
      ],
      users: [
        'Fernanda Lima',
        'Renato Pires',
      ],
    },
  };

  const renderEnvironmentRelationList = (listEl, items, icon, type) => {
    if (!listEl) return;
    listEl.replaceChildren();

    items.forEach((item, index) => {
      const li = document.createElement('li');
      const iconEl = document.createElement('span');
      const labelEl = document.createElement('span');
      const removeBtn = document.createElement('button');
      const removeIcon = document.createElement('span');

      iconEl.className = 'material-symbols-rounded';
      iconEl.setAttribute('aria-hidden', 'true');
      iconEl.textContent = icon;
      labelEl.className = 'environment-relation-label';
      labelEl.textContent = item;
      removeBtn.className = 'icon-btn action-icon danger environment-relation-remove';
      removeBtn.type = 'button';
      removeBtn.dataset.relationType = type;
      removeBtn.dataset.relationIndex = String(index);
      removeBtn.setAttribute('aria-label', `Remover ${item}`);
      removeIcon.className = 'material-symbols-rounded';
      removeIcon.setAttribute('aria-hidden', 'true');
      removeIcon.textContent = 'delete';
      removeBtn.appendChild(removeIcon);

      li.append(iconEl, labelEl, removeBtn);
      listEl.appendChild(li);
    });
  };

  const summarizeRelationCount = (count, singular) => `${count} ${singular}${count === 1 ? '' : 's'} vinculado${count === 1 ? '' : 's'}`;

  const environmentRelationPickerMenu = document.createElement('div');
  environmentRelationPickerMenu.id = 'environmentRelationPickerMenu';
  environmentRelationPickerMenu.className = 'menu filter-menu two-col environment-relation-picker-menu';
  environmentRelationPickerMenu.innerHTML = `
    <div class="search-field environment-relation-picker-search">
      <span class="material-symbols-rounded" aria-hidden="true">search</span>
      <input id="environmentRelationPickerSearch" type="search" autocomplete="off" placeholder="Buscar ou adicionar" aria-label="Buscar item para vincular" />
    </div>
    <div class="environment-relation-picker-list" id="environmentRelationPickerList"></div>
  `;
  const environmentRelationPickerSearch = environmentRelationPickerMenu.querySelector('#environmentRelationPickerSearch');
  const environmentRelationPickerList = environmentRelationPickerMenu.querySelector('#environmentRelationPickerList');

  const closeEnvironmentRelationPicker = () => {
    environmentRelationPickerMenu.classList.remove('open');
    activeRelationPickerType = '';
    activeRelationPickerButton = null;
    if (environmentRelationPickerSearch) environmentRelationPickerSearch.value = '';
  };

  const getEnvironmentRelationRecentItems = (relationType, limit = 4) => {
    const entries = [];
    Object.values(environmentRelations).forEach((relation) => {
      const items = Array.isArray(relation?.[relationType]) ? relation[relationType] : [];
      for (let index = items.length - 1; index >= 0; index -= 1) {
        entries.push(String(items[index] || '').trim());
      }
    });

    const seen = new Set();
    const unique = [];
    entries.forEach((item) => {
      if (!item) return;
      const key = item.toLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      unique.push(item);
    });
    return unique.slice(0, limit);
  };

  const environmentRelationSuggestionPool = {
    projects: [
      'Operações integradas',
      'Backoffice comercial',
      'Atendimento multicanal',
      'Controle de filas',
      'Qualidade operacional',
      'SLA e escalonamento',
      'Controladoria e fechamento',
      'Conciliação bancária',
      'Campanhas digitais',
      'Segmentação de clientes',
      'Admissões e onboarding',
      'Comunicação interna',
    ],
    agents: [
      'Atlas Core',
      'Nimbus Ops',
      'Queue Watch',
      'SLA Sentinel',
      'Pulse Finance',
      'Ledger Check',
      'Campaign Copilot',
      'Segment Builder',
      'People Assist',
      'Onboarding Guide',
    ],
    users: [
      'Alfeu Vinicius Souza',
      'Mariana Costa',
      'Lucas Almeida',
      'Paula Ribeiro',
      'Rafael Moura',
      'Camila Rocha',
      'Bruno Martins',
      'Fernanda Lima',
      'Renato Pires',
    ],
  };
  const defaultProjectExamples = [
    'Operações integradas',
    'Backoffice comercial',
    'Atendimento multicanal',
    'Controle de filas',
  ];
  const defaultAgentExamples = [
    'Atlas Core',
    'Nimbus Ops',
    'Queue Watch',
    'SLA Sentinel',
  ];
  const defaultUserExamples = [
    'Alfeu Vinicius Souza',
    'Mariana Costa',
    'Lucas Almeida',
    'Paula Ribeiro',
  ];

  const defaultExamplesByType = {
    projects: defaultProjectExamples,
    agents: defaultAgentExamples,
    users: defaultUserExamples,
  };

  const normalizeRelationPickerValue = (value) => String(value || '').trim().toLowerCase();

  const getEnvironmentRelationPickerOptions = (relationType, limit = null) => {
    const defaults = Array.isArray(defaultExamplesByType[relationType]) ? defaultExamplesByType[relationType] : [];
    const recents = getEnvironmentRelationRecentItems(relationType, 8);
    const pool = Array.isArray(environmentRelationSuggestionPool[relationType]) ? environmentRelationSuggestionPool[relationType] : [];
    const seen = new Set();
    const options = [];

    [...defaults, ...recents, ...pool].forEach((item) => {
      const value = String(item || '').trim();
      const key = normalizeRelationPickerValue(value);
      if (!value || seen.has(key)) return;
      seen.add(key);
      options.push(value);
    });

    return Number.isInteger(limit) ? options.slice(0, limit) : options;
  };

  const addItemToActiveEnvironmentRelation = (relationType, rawValue) => {
    const nextValue = String(rawValue || '').trim();
    if (!relationType || !activeEnvironmentCode || !nextValue) return false;
    const relation = ensureEnvironmentRelationRecord(activeEnvironmentCode);
    const targetList = Array.isArray(relation[relationType]) ? relation[relationType] : [];
    relation[relationType] = targetList;
    const alreadyExists = targetList.some((item) => String(item || '').trim().toLowerCase() === nextValue.toLowerCase());
    if (alreadyExists) return false;
    targetList.push(nextValue);
    renderEnvironmentRelations(activeEnvironmentRow);
    const listId = environmentRelationListIdByType[relationType];
    if (listId) setEnvironmentRelationExpanded(listId, true);
    return true;
  };

  const renderEnvironmentRelationPickerItems = () => {
    if (!environmentRelationPickerList || !activeRelationPickerType) return;
    const query = String(environmentRelationPickerSearch?.value || '').trim().toLowerCase();
    const rawQuery = String(environmentRelationPickerSearch?.value || '').trim();
    const allOptions = getEnvironmentRelationPickerOptions(activeRelationPickerType);
    const baseItems = getEnvironmentRelationPickerOptions(activeRelationPickerType, 4);
    const visibleItems = query
      ? allOptions.filter((item) => normalizeRelationPickerValue(item).includes(query))
      : baseItems;
    const hasExactMatch = allOptions.some((item) => normalizeRelationPickerValue(item) === query);
    environmentRelationPickerList.replaceChildren();

    const createPickerOption = (value, iconName, label) => {
      const option = document.createElement('button');
      option.type = 'button';
      option.className = 'ui-menu-item';
      option.dataset.relationAddValue = value;
      const icon = document.createElement('span');
      icon.className = 'material-symbols-rounded';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = iconName;
      const text = document.createElement('span');
      text.textContent = label;
      option.append(icon, text);
      return option;
    };

    if (query && !hasExactMatch) {
      environmentRelationPickerList.appendChild(
        createPickerOption(rawQuery, 'add', `Adicionar "${environmentRelationPickerSearch.value.trim()}"`)
      );
    }

    visibleItems.forEach((item) => {
      environmentRelationPickerList.appendChild(createPickerOption(item, 'history', item));
    });

    if (!environmentRelationPickerList.childElementCount && !query) {
      baseItems.forEach((item) => {
        environmentRelationPickerList.appendChild(createPickerOption(item, 'history', item));
      });
    }

    if (!environmentRelationPickerList.childElementCount) {
      const empty = document.createElement('div');
      empty.className = 'environment-relation-picker-empty';
      empty.textContent = 'Nenhum item encontrado';
      environmentRelationPickerList.appendChild(empty);
    }
  };

  const positionEnvironmentRelationPicker = () => {
    if (!activeRelationPickerButton || !environmentRelationPickerMenu.parentElement) return;
    const panelRect = environmentRelationPickerMenu.parentElement.getBoundingClientRect();
    const buttonRect = activeRelationPickerButton.getBoundingClientRect();
    const left = Math.max(8, buttonRect.left - panelRect.left);
    const maxLeft = Math.max(8, panelRect.width - environmentRelationPickerMenu.offsetWidth - 8);

    environmentRelationPickerMenu.style.top = `${buttonRect.bottom - panelRect.top + 8}px`;
    environmentRelationPickerMenu.style.left = `${Math.min(left, maxLeft)}px`;
    environmentRelationPickerMenu.style.right = 'auto';
  };

  const scrollEnvironmentRelationPickerIntoView = () => {
    if (!environmentRelationPickerMenu.classList.contains('open')) return;
    const scrollContainer = environmentModal.querySelector('.environment-body') || environmentModal.querySelector('.modal-dialog');
    if (!scrollContainer) return;

    const menuRect = environmentRelationPickerMenu.getBoundingClientRect();
    const containerRect = scrollContainer.getBoundingClientRect();
    const bottomOverflow = menuRect.bottom - containerRect.bottom + 12;
    const topOverflow = containerRect.top - menuRect.top + 12;

    if (bottomOverflow > 0) {
      scrollContainer.scrollBy({ top: bottomOverflow, behavior: 'smooth' });
    } else if (topOverflow > 0) {
      scrollContainer.scrollBy({ top: -topOverflow, behavior: 'smooth' });
    }
  };

  const openEnvironmentRelationPicker = (button, relationType) => {
    if (activeRelationPickerButton === button && environmentRelationPickerMenu.classList.contains('open')) {
      closeEnvironmentRelationPicker();
      return;
    }
    activeRelationPickerType = relationType;
    activeRelationPickerButton = button;
    const panel = button.closest('.environment-relation-panel');
    if (panel && environmentRelationPickerMenu.parentElement !== panel) panel.appendChild(environmentRelationPickerMenu);
    if (environmentRelationPickerSearch) environmentRelationPickerSearch.value = '';
    renderEnvironmentRelationPickerItems();
    environmentRelationPickerMenu.classList.add('open');
    positionEnvironmentRelationPicker();
    window.requestAnimationFrame(scrollEnvironmentRelationPickerIntoView);
    environmentRelationPickerSearch?.focus();
  };

  const environmentRelationListIdByType = {
    projects: 'environmentProjectsList',
    agents: 'environmentAgentsList',
    users: 'environmentUsersList',
  };

  const setEnvironmentRelationToggleAvailability = (listId, hasItems) => {
    const listEl = document.getElementById(listId);
    const toggleEl = environmentModal.querySelector(`.environment-relation-toggle[data-relation-target="${listId}"]`);
    if (!toggleEl) return;
    toggleEl.hidden = !hasItems;
    toggleEl.disabled = !hasItems;
    if (!hasItems) {
      toggleEl.setAttribute('aria-expanded', 'false');
      if (listEl) {
        listEl.classList.add('is-hidden');
        listEl.hidden = true;
      }
    }
  };

  const setEnvironmentRelationExpanded = (listId, expanded) => {
    const listEl = document.getElementById(listId);
    const toggleEl = environmentModal.querySelector(`.environment-relation-toggle[data-relation-target="${listId}"]`);
    if (!listEl || !toggleEl || toggleEl.hidden || toggleEl.disabled) return;
    toggleEl.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    listEl.classList.toggle('is-hidden', !expanded);
    listEl.hidden = !expanded;
  };

  const ensureEnvironmentRelationRecord = (code) => {
    if (!code) return { projects: [], agents: [], users: [] };
    if (!environmentRelations[code]) {
      environmentRelations[code] = { projects: [], agents: [], users: [] };
    }
    if (!Array.isArray(environmentRelations[code].projects)) environmentRelations[code].projects = [];
    if (!Array.isArray(environmentRelations[code].agents)) environmentRelations[code].agents = [];
    if (!Array.isArray(environmentRelations[code].users)) environmentRelations[code].users = [];
    return environmentRelations[code];
  };

  const syncEnvironmentRowMetrics = (row) => {
    if (!row) return;
    const relation = ensureEnvironmentRelationRecord(row.dataset.environmentCode || '');
    const projectCount = relation.projects.length;
    const agentCount = relation.agents.length;
    const userCount = relation.users.length;
    row.dataset.environmentProjects = String(projectCount);
    row.dataset.environmentAgents = String(agentCount);
    row.dataset.environmentUsers = String(userCount);
    const projectsCell = row.querySelector('.environment-projects-cell');
    const agentsCell = row.querySelector('.environment-agents-cell');
    const usersCell = row.querySelector('.environment-users-cell');
    if (projectsCell) projectsCell.textContent = String(projectCount);
    if (agentsCell) agentsCell.textContent = String(agentCount);
    if (usersCell) usersCell.textContent = String(userCount);
  };

  const applyEnvironmentCompanyFilter = () => {
    const organizationScope = String(document.body.dataset.organizationScope || 'all').trim() || 'all';
    const selectorVisible = Boolean(
      environmentsCompanySelectWrap
      && !environmentsCompanySelectWrap.hidden
      && !environmentsCompanySelectWrap.classList.contains('is-hidden')
    );
    const selectedCompany = selectorVisible
      ? (environmentsCompanySelect?.value || 'all')
      : 'all';
    environmentsTable.querySelectorAll('.environment-row').forEach((row) => {
      const inScope = organizationScope === 'all' || String(row.dataset.environmentOrganization || '').trim() === organizationScope;
      const showRow = inScope && (selectedCompany === 'all' || row.dataset.environmentCompany === selectedCompany);
      row.hidden = !showRow;
      row.classList.toggle('is-hidden', !showRow);
    });
  };

  const renderEnvironmentRelations = (row = null) => {
    if (row) {
      activeEnvironmentCode = String(row?.dataset?.environmentCode || '').trim();
    }
    const relation = ensureEnvironmentRelationRecord(activeEnvironmentCode);
    const projectCount = relation.projects.length;
    const agentCount = relation.agents.length;
    const userCount = relation.users.length;

    if (environmentProjectsSummary) {
      environmentProjectsSummary.textContent = summarizeRelationCount(projectCount, 'projeto');
    }

    if (environmentAgentsSummary) {
      environmentAgentsSummary.textContent = summarizeRelationCount(agentCount, 'agente');
    }

    if (environmentUsersSummary) {
      environmentUsersSummary.textContent = summarizeRelationCount(userCount, 'usuário');
    }

    renderEnvironmentRelationList(environmentProjectsList, relation.projects, 'folder', 'projects');
    renderEnvironmentRelationList(environmentAgentsList, relation.agents, 'smart_toy', 'agents');
    renderEnvironmentRelationList(environmentUsersList, relation.users, 'person', 'users');

    setEnvironmentRelationToggleAvailability('environmentProjectsList', projectCount > 0);
    setEnvironmentRelationToggleAvailability('environmentAgentsList', agentCount > 0);
    setEnvironmentRelationToggleAvailability('environmentUsersList', userCount > 0);
  };

  const closeEnvironmentModal = () => {
    closeEnvironmentRelationPicker();
    activeEnvironmentRow = null;
    isCreatingEnvironment = false;
    activeEnvironmentCode = '';
    if (draftEnvironmentCode) {
      delete environmentRelations[draftEnvironmentCode];
      draftEnvironmentCode = '';
    }
    environmentModal.classList.remove('open');
    environmentModal.setAttribute('aria-hidden', 'true');
  };

  const syncEnvironmentSubmit = () => {
    const hasName = Boolean(String(environmentName?.value || '').trim());
    const hasOwner = Boolean(String(environmentOwner?.value || '').trim());
    if (environmentModalSubmit) environmentModalSubmit.disabled = !(hasName && hasOwner);
  };

  const openEnvironmentModal = (row) => {
    isCreatingEnvironment = false;
    activeEnvironmentRow = row;
    environmentModalForm.reset();
    const modalTitle = document.getElementById('environmentModalTitle');
    if (modalTitle) modalTitle.textContent = 'Editar setor';
    if (environmentModalSubmit) environmentModalSubmit.textContent = 'Salvar alterações';
    if (environmentName) environmentName.value = row.dataset.environmentName || '';
    if (environmentOwner) environmentOwner.value = row.dataset.environmentOwner || '';
    if (environmentDescription) environmentDescription.value = row.dataset.environmentDescription || '';
    renderEnvironmentRelations(row);
    syncEnvironmentSubmit();
    environmentModal.classList.add('open');
    environmentModal.setAttribute('aria-hidden', 'false');
    environmentName?.focus();
  };

  const openCreateEnvironmentDialog = () => {
    isCreatingEnvironment = true;
    activeEnvironmentRow = null;
    draftEnvironmentCode = `env-draft-${Date.now()}`;
    activeEnvironmentCode = draftEnvironmentCode;
    environmentModalForm.reset();
    const modalTitle = document.getElementById('environmentModalTitle');
    if (modalTitle) modalTitle.textContent = 'Criar setor';
    environmentRelations[draftEnvironmentCode] = { projects: [], agents: [], users: [] };
    renderEnvironmentRelations();
    if (environmentModalSubmit) environmentModalSubmit.textContent = 'Criar setor';
    syncEnvironmentSubmit();
    environmentModal.classList.add('open');
    environmentModal.setAttribute('aria-hidden', 'false');
    environmentName?.focus();
  };

  openCreateEnvironmentModal?.addEventListener('click', openCreateEnvironmentDialog);
  environmentsCompanySelect?.addEventListener('change', applyEnvironmentCompanyFilter);

  environmentsTable.addEventListener('click', async (event) => {
    const editButton = event.target.closest('.environment-edit-trigger');
    if (editButton) {
      const row = editButton.closest('.environment-row');
      if (row) openEnvironmentModal(row);
      return;
    }

    const deleteButton = event.target.closest('.environment-delete-trigger');
    if (!deleteButton) return;

    const row = deleteButton.closest('.environment-row');
    if (!row) return;

    const name = row.dataset.environmentName || 'setor';
    const confirmed = await confirmDeletionAction(`o setor "${name}"`);
    if (!confirmed) return;

    row.remove();
    showAppToast('Setor excluído');
  });

  [environmentName, environmentOwner].forEach((field) => {
    field?.addEventListener('input', syncEnvironmentSubmit);
    field?.addEventListener('change', syncEnvironmentSubmit);
  });

  environmentModal.addEventListener('click', async (event) => {
    const relationToggle = event.target.closest('.environment-relation-toggle');
    if (relationToggle) {
      const listId = relationToggle.dataset.relationTarget;
      if (!listId) return;
      const isExpanded = relationToggle.getAttribute('aria-expanded') === 'true';
      setEnvironmentRelationExpanded(listId, !isExpanded);
      return;
    }

    const addButton = event.target.closest('.environment-relation-add');
    if (addButton) {
      const relationType = addButton.dataset.relationType;
      if (!relationType || !activeEnvironmentCode) return;
      openEnvironmentRelationPicker(addButton, relationType);
      return;
    }

    const removeButton = event.target.closest('.environment-relation-remove');
    if (removeButton) {
      const relationType = removeButton.dataset.relationType;
      const relationIndex = Number.parseInt(removeButton.dataset.relationIndex || '-1', 10);
      if (!relationType || relationIndex < 0 || !activeEnvironmentCode) return;
      if (!(await confirmDeletionAction('este item do setor'))) return;

      const relation = ensureEnvironmentRelationRecord(activeEnvironmentCode);
      if (!Array.isArray(relation[relationType]) || relationIndex >= relation[relationType].length) return;
      relation[relationType].splice(relationIndex, 1);

      renderEnvironmentRelations(activeEnvironmentRow);
      showAppToast('Item removido do setor');
      return;
    }

    if (event.target.closest('[data-modal-close]')) closeEnvironmentModal();
  });

  environmentModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = String(environmentName?.value || '').trim();
    const owner = String(environmentOwner?.value || '').trim();
    const description = String(environmentDescription?.value || '').trim();
    if (!name || !owner) return;

    if (isCreatingEnvironment) {
      const sourceCode = activeEnvironmentCode;
      const createdRow = createEnvironmentRow({
        name,
        owner,
        description,
        company: environmentsCompanySelect?.value && environmentsCompanySelect.value !== 'all'
          ? environmentsCompanySelect.value
          : (Array.from(environmentsCompanySelect?.options || []).find((option) => option.value !== 'all' && !option.disabled && !option.hidden)?.value || 'avas'),
      });
      const nextCode = String(createdRow?.dataset?.environmentCode || '').trim();
      if (sourceCode && nextCode && sourceCode !== nextCode && environmentRelations[sourceCode]) {
        environmentRelations[nextCode] = {
          projects: [...(environmentRelations[sourceCode].projects || [])],
          agents: [...(environmentRelations[sourceCode].agents || [])],
          users: [...(environmentRelations[sourceCode].users || [])],
        };
        delete environmentRelations[sourceCode];
      }
      syncEnvironmentRowMetrics(createdRow);
      applyEnvironmentCompanyFilter();
      closeEnvironmentModal();
      showAppToast('Setor criado com sucesso');
      return;
    }

    if (!activeEnvironmentRow) return;

    activeEnvironmentRow.dataset.environmentName = name;
    activeEnvironmentRow.dataset.environmentOwner = owner;
    activeEnvironmentRow.dataset.environmentDescription = description;

    const nameCell = activeEnvironmentRow.querySelector('.environment-name-cell strong');
    const ownerCell = activeEnvironmentRow.querySelector('.environment-owner-cell');
    const descriptionCell = activeEnvironmentRow.querySelector('.environment-description-cell');

    if (nameCell) nameCell.textContent = name;
    if (ownerCell) ownerCell.textContent = owner;
    if (descriptionCell) descriptionCell.textContent = description || '-';
    syncEnvironmentRowMetrics(activeEnvironmentRow);

    closeEnvironmentModal();
    showAppToast('Setor atualizado com sucesso');
  });

  ['environmentProjectsList', 'environmentAgentsList', 'environmentUsersList'].forEach((listId) => {
    setEnvironmentRelationExpanded(listId, false);
  });

  environmentRelationPickerSearch?.addEventListener('input', renderEnvironmentRelationPickerItems);
  environmentsTable.querySelectorAll('.environment-row').forEach(syncEnvironmentRowMetrics);
  applyEnvironmentCompanyFilter();
  window.addEventListener('resize', positionEnvironmentRelationPicker);
  environmentRelationPickerSearch?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeEnvironmentRelationPicker();
      return;
    }
    if (event.key !== 'Enter') return;
    event.preventDefault();
    const value = String(environmentRelationPickerSearch.value || '').trim();
    if (!value || !activeRelationPickerType) return;
    const added = addItemToActiveEnvironmentRelation(activeRelationPickerType, value);
    if (added) {
      showAppToast('Item adicionado com sucesso');
      closeEnvironmentRelationPicker();
    } else {
      showAppToast('Item já está vinculado');
    }
  });

  environmentRelationPickerList?.addEventListener('click', (event) => {
    const option = event.target.closest('[data-relation-add-value]');
    if (!option || !activeRelationPickerType) return;
    const value = String(option.dataset.relationAddValue || '').trim();
    if (!value) return;
    const added = addItemToActiveEnvironmentRelation(activeRelationPickerType, value);
    if (added) {
      showAppToast('Item adicionado com sucesso');
      closeEnvironmentRelationPicker();
      return;
    }
    showAppToast('Item já está vinculado');
  });

  document.addEventListener('click', (event) => {
    if (!environmentRelationPickerMenu.classList.contains('open')) return;
    const clickedOnAdd = event.target.closest('.environment-relation-add');
    if (clickedOnAdd) return;
    if (environmentRelationPickerMenu.contains(event.target)) return;
    closeEnvironmentRelationPicker();
  });

}

const parseAuditDate = (value) => {
  const match = String(value || '').trim().match(/^(\d{2})\/(\d{2})\/(\d{4})/);
  if (!match) return null;
  const [, day, month, year] = match;
  return new Date(Number(year), Number(month) - 1, Number(day));
};

const getActiveAuditFilterValue = (menuEl, filterName) =>
  menuEl?.querySelector(`.filter-option.active[data-filter="${filterName}"]`)?.dataset.value || '';

if (historyAuditPanel && auditLegacyPage) {
  const legacyAuditSection = auditLegacyPage.querySelector('.section');
  if (legacyAuditSection) {
    Array.from(legacyAuditSection.children).forEach((child) => {
      if (child.classList?.contains('page-header')) return;
      historyAuditPanel.appendChild(child);
    });
    auditLegacyPage.classList.add('is-hidden');
    auditLegacyPage.hidden = true;
  }
}

if (historyTabs.length && historyPanels.length) {
  historyTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      historyTabs.forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
      historyPanels.forEach((panel) => {
        panel.classList.toggle('active', panel.dataset.panel === target);
      });
    });
  });
}

function setActiveHistoryTab(tabKey = 'history-audit') {
  if (!historyTabs.length || !historyPanels.length) return;
  historyTabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.tab === tabKey);
  });
  historyPanels.forEach((panel) => {
    panel.classList.toggle('active', panel.dataset.panel === tabKey);
  });
}

const renderAuditPagination = () => {
  if (!auditPagePagination || !auditPageNumbers) return;
  const matchedRows = auditTableRows.filter((row) => row.dataset.auditFilterMatch === '1');
  const totalPages = Math.max(1, Math.ceil(matchedRows.length / AUDIT_PAGE_SIZE));
  auditCurrentPage = Math.min(Math.max(auditCurrentPage, 1), totalPages);

  auditTableRows.forEach((row) => {
    row.hidden = row.dataset.auditFilterMatch !== '1';
  });

  const start = (auditCurrentPage - 1) * AUDIT_PAGE_SIZE;
  const end = start + AUDIT_PAGE_SIZE;
  matchedRows.forEach((row, index) => {
    row.hidden = index < start || index >= end;
  });

  auditPageNumbers.innerHTML = '';
  for (let page = 1; page <= totalPages; page += 1) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'page-number';
    button.textContent = String(page);
    if (page === auditCurrentPage) {
      button.classList.add('active');
      button.setAttribute('aria-current', 'page');
      button.disabled = true;
    }
    button.addEventListener('click', () => {
      auditCurrentPage = page;
      renderAuditPagination();
    });
    auditPageNumbers.appendChild(button);
  }

  const navButtons = auditPagePagination.querySelectorAll('.icon-btn');
  const prevBtn = navButtons[0];
  const nextBtn = navButtons[1];
  if (prevBtn) prevBtn.disabled = auditCurrentPage <= 1;
  if (nextBtn) nextBtn.disabled = auditCurrentPage >= totalPages;
  auditPagePagination.hidden = matchedRows.length === 0;
  auditPagePagination.classList.toggle('is-hidden', matchedRows.length === 0);
};

const applyAuditTableFilters = () => {
  if (!auditTableRows.length) return;
  const typeValue = getActiveAuditFilterValue(auditFilterMenu, 'type');
  const query = String(auditSearchInput?.value || '').trim().toLowerCase();
  const activePeriodMode = auditPeriodMenu?.dataset.mode === 'single' ? 'single' : 'range';
  const startDateValue = String(auditStartDateInput?.value || '').trim();
  const endDateValue = String(auditEndDateInput?.value || '').trim();
  const singleDateValue = String(auditSingleDateInput?.value || '').trim();
  const startDate = startDateValue ? new Date(`${startDateValue}T00:00:00`) : null;
  const endDate = endDateValue ? new Date(`${endDateValue}T23:59:59`) : null;
  const singleDate = singleDateValue ? new Date(`${singleDateValue}T00:00:00`) : null;
  auditTableRows.forEach((row) => {
    const cells = row.querySelectorAll('span');
    const userText = (cells[0]?.textContent || '').trim().toLowerCase();
    const dateText = cells[1]?.textContent || '';
    const ipText = (cells[3]?.textContent || '').trim().toLowerCase();
    const typeText = String(row.dataset.auditType || '').trim().toLowerCase();
    const rowDate = parseAuditDate(dateText);

    const matchesType = !typeValue || typeValue === typeText;

    let matchesPeriod = true;
    if (rowDate) {
      if (activePeriodMode === 'single' && singleDate) {
        matchesPeriod = rowDate.getTime() === singleDate.getTime();
      } else if (activePeriodMode === 'range') {
        if (startDate && endDate) matchesPeriod = rowDate >= startDate && rowDate <= endDate;
        else if (startDate) matchesPeriod = rowDate >= startDate;
        else if (endDate) matchesPeriod = rowDate <= endDate;
      }
    } else if (activePeriodMode === 'single' && singleDate) {
      matchesPeriod = false;
    } else if ((activePeriodMode === 'range' && startDate) || (activePeriodMode === 'range' && endDate)) {
      matchesPeriod = false;
    }

    const matchesSearch = !query || userText.includes(query) || ipText.includes(query);
    row.dataset.auditFilterMatch = matchesType && matchesPeriod && matchesSearch ? '1' : '0';
  });
  renderAuditPagination();
};

if (auditFilterBtn && auditFilterMenu) {
  auditFilterBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    auditPeriodMenu?.classList.remove('open');
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
      auditCurrentPage = 1;
      applyAuditTableFilters();
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
      auditCurrentPage = 1;
      applyAuditTableFilters();
    });
  }
}

if (auditPeriodBtn && auditPeriodMenu) {
  if (!auditPeriodMenu.dataset.mode) auditPeriodMenu.dataset.mode = 'range';

  const syncAuditPeriodMode = () => {
    const isSingle = auditPeriodMenu.dataset.mode === 'single';
    auditRangeFields.forEach((field) => field.classList.toggle('is-hidden', isSingle));
    if (auditSingleField) auditSingleField.classList.toggle('is-hidden', !isSingle);
  };

  auditPeriodBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    auditFilterMenu?.classList.remove('open');
    auditPeriodMenu.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    auditPeriodMenu.classList.remove('open');
  });

  const clearButton = auditPeriodMenu.querySelector('.filter-clear');

  auditPeriodOptions.forEach((button) => {
    button.addEventListener('click', () => {
      auditPeriodOptions.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      auditPeriodMenu.dataset.mode = button.dataset.mode === 'single' ? 'single' : 'range';
      syncAuditPeriodMode();
      auditCurrentPage = 1;
      applyAuditTableFilters();
    });
  });

  [auditStartDateInput, auditEndDateInput, auditSingleDateInput].forEach((input) => {
    input?.addEventListener('change', () => {
      auditCurrentPage = 1;
      applyAuditTableFilters();
    });
  });

  auditApplyPeriodBtn?.addEventListener('click', () => {
    auditCurrentPage = 1;
    applyAuditTableFilters();
    auditPeriodMenu.classList.remove('open');
  });

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      auditStartDateInput.value = '';
      auditEndDateInput.value = '';
      auditSingleDateInput.value = '';
      auditPeriodMenu.dataset.mode = 'range';
      auditPeriodOptions.forEach((item) => item.classList.remove('active'));
      const defaultOption = auditPeriodOptions.find((item) => item.dataset.mode === 'range');
      if (defaultOption) defaultOption.classList.add('active');
      syncAuditPeriodMode();
      auditCurrentPage = 1;
      applyAuditTableFilters();
    });
  }

  syncAuditPeriodMode();
}

if (auditSearchInput) {
  auditSearchInput.addEventListener('input', () => {
    auditCurrentPage = 1;
    applyAuditTableFilters();
  });
}

applyAuditTableFilters();
if (auditPagePagination) {
  const navButtons = auditPagePagination.querySelectorAll('.icon-btn');
  navButtons[0]?.addEventListener('click', () => {
    if (auditCurrentPage <= 1) return;
    auditCurrentPage -= 1;
    renderAuditPagination();
  });
  navButtons[1]?.addEventListener('click', () => {
    auditCurrentPage += 1;
    renderAuditPagination();
  });
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
  const titleEl = document.getElementById('agentModalTitle');
  if (!modal || !form || !environmentSel || !projectSel || !nameInput || !promptInput || !submitBtn) return;
  const state = {
    mode: 'create',
    agentId: '',
    sourceAgent: null,
  };

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
    submitBtn.disabled = !(hasName && hasPrompt) || submitBtn.classList.contains('is-loading');
  }

  function setAgentModalMode(mode, agent = null) {
    state.mode = mode;
    state.sourceAgent = agent;
    state.agentId = String(agent?.id || '').trim();
    if (titleEl) titleEl.textContent = mode === 'edit' ? 'Editar agente' : 'Criação de agentes';
    submitBtn.textContent = mode === 'edit' ? 'Salvar alterações' : 'Criar agente';
    modal.dataset.mode = mode;
    modal.dataset.agentId = state.agentId;
  }

  function populateAgentModal(agent) {
    if (!agent) return;
    syncAgentModalScope(agent.environment_slug || '');
    nameInput.value = agent.name || '';
    descInput && (descInput.value = agent.description || '');
    promptInput.value = agent.system_prompt || '';
    if (ragInput) ragInput.checked = Boolean(agent.use_rag);
    if (voiceEnabledInput) voiceEnabledInput.checked = Boolean(agent.voice_enabled);
    if (voiceLocaleSelect) voiceLocaleSelect.value = agent.voice_locale || 'pt-BR';
    if (voiceSelect) voiceSelect.value = agent.voice_name || 'Antonio';
    if (audioPlaybackInput) audioPlaybackInput.checked = agent.audio_playback !== false;
    if (headphoneModeInput) headphoneModeInput.checked = Boolean(agent.headphone_mode);
    if (muteMicWhileSpeakingInput) muteMicWhileSpeakingInput.checked = Boolean(agent.mute_mic_while_speaking);
    if (micProfileSelect) micProfileSelect.value = agent.mic_profile || 'default';
    if (interruptSensitivitySelect) interruptSensitivitySelect.value = agent.interrupt_sensitivity || 'default';
    if (environmentSel) environmentSel.value = agent.environment_slug || '';
    if (projectSel) projectSel.value = fillAgentModalProjectOptions(agent.project_slug || '', agent.project_id || '');
    setAgentModalNewContextMode(false);
    syncVoiceOptionsVisibility();
    syncAudioPanelState(true);
    updateCounter(nameInput, nameCounter, 200);
    updateCounter(descInput, descCounter, 4000);
    updateCounter(promptInput, promptCounter, 20000);
    syncAgentSubmitState();
  }

  function buildAgentFromRow(row) {
    if (!row) return null;
    const name = String(row.querySelector('strong')?.textContent || '').trim();
    const description = String(row.querySelector('.agents-row-description')?.textContent || '').replace(/\s*•\s*Sem projeto\s*$/i, '').trim();
    const agentId = String(row.dataset.agentUuid || row.dataset.agentId || row.children?.[2]?.textContent || '').replace(/\.\.\.$/, '').trim();
    const environmentSlug = String(row.dataset.hubOrg || row.dataset.agentsEnvironment || '').trim();
    const useRag = row.querySelector('.agents-rag-badge--yes') != null;
    const isPublic = row.querySelector('.agents-visibility-badge--public') != null;
    return {
      id: agentId,
      name,
      description,
      system_prompt: description ? `Agente ${name}. ${description}` : `Agente ${name}.`,
      environment_slug: environmentSlug,
      project_id: String(row.dataset.projectId || '').trim() || null,
      project_slug: '',
      use_rag: useRag,
      voice_enabled: row.dataset.voiceEnabled === 'true',
      voice_locale: 'pt-BR',
      voice_name: 'Antonio',
      audio_playback: true,
      headphone_mode: false,
      mute_mic_while_speaking: false,
      mic_profile: 'default',
      interrupt_sensitivity: 'default',
      share_permission: isPublic ? 'viewer' : 'private',
      public_permission: isPublic ? 'viewer' : 'private',
    };
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

  document.addEventListener('click', (event) => {
    const editBtn = event.target.closest('.agent-edit-toggle');
    if (!editBtn) return;
    const row = editBtn.closest('.agents-row');
    if (!row) return;
    const agentId = String(row.dataset.agentUuid || '').trim();
    const agent =
      window.__wesAgentsCache?.find((item) => String(item.id || '').trim() === agentId) ||
      buildAgentFromRow(row);
    if (!agent) return;
    setError('');
    form.reset();
    populateAgentModal(agent);
    setAgentModalMode('edit', agent);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    if (typeof hubRefreshCustomSelects === 'function') hubRefreshCustomSelects();
    nameInput.focus();
  });

  updateCounter(nameInput, nameCounter, 200);
  updateCounter(descInput, descCounter, 4000);
  updateCounter(promptInput, promptCounter, 20000);
  syncAudioPanelState(true);
  syncVoiceOptionsVisibility();
  setAgentModalMode('create');
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
      const payload = {
        name,
        description,
        system_prompt: systemPrompt,
        environment_slug: selectedEnvironmentId || null,
        project_id: project?.id || null,
        use_rag: Boolean(ragInput?.checked),
        voice_enabled: Boolean(voiceEnabledInput?.checked),
        voice_locale: voiceLocaleSelect?.value || 'pt-BR',
        voice_name: voiceSelect?.value || 'Antonio',
        audio_playback: Boolean(audioPlaybackInput?.checked),
        headphone_mode: Boolean(headphoneModeInput?.checked),
        mute_mic_while_speaking: Boolean(muteMicWhileSpeakingInput?.checked),
        mic_profile: micProfileSelect?.value || 'default',
        interrupt_sensitivity: interruptSensitivitySelect?.value || 'default',
      };
      const endpoint = state.mode === 'edit' && state.agentId ? `/agents/${encodeURIComponent(state.agentId)}` : '/agents';
      const method = state.mode === 'edit' ? 'PATCH' : 'POST';
      const requestInit = {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      };
      let res = await window.wesApiFetch(endpoint, requestInit);
      if (state.mode === 'edit' && res.status === 405) {
        res = await window.wesApiFetch(endpoint, { ...requestInit, method: 'PUT' });
      }
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
      setError(`Não foi possível ${state.mode === 'edit' ? 'salvar' : 'criar'} (${res.status}): ${detail}`);
        return;
      }
      if (body?.id) {
        if (selectedEnvironmentId) {
          setAgentEnvironmentOverride(body.id, selectedEnvironmentId);
        } else {
          clearAgentEnvironmentOverride(body.id);
        }
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
      setAgentModalMode('create');
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

(function initAgentsHeaderTooltips() {
  const active = { el: null, tip: null };

  function removeTip() {
    if (active.tip) active.tip.remove();
    active.el = null;
    active.tip = null;
  }

  function showTip(el) {
    const text = String(el?.dataset?.tooltip || '').trim();
    if (!text) return;
    removeTip();
    const tip = document.createElement('div');
    tip.className = 'agents-tooltip-float';
    tip.textContent = text;
    document.body.appendChild(tip);
    const rect = el.getBoundingClientRect();
    const tipRect = tip.getBoundingClientRect();
    let top = rect.top - tipRect.height - 10;
    let left = rect.left + rect.width / 2 - tipRect.width / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - tipRect.width - 8));
    if (top < 8) top = rect.bottom + 10;
    tip.style.left = `${Math.round(left)}px`;
    tip.style.top = `${Math.round(top)}px`;
    active.el = el;
    active.tip = tip;
  }

  document.addEventListener('mouseover', (event) => {
    const el = event.target.closest('.agents-header-tooltip');
    if (!el) return;
    showTip(el);
  });

  document.addEventListener('mouseout', (event) => {
    if (!active.el) return;
    if (event.target === active.el || event.relatedTarget === active.el || active.el.contains(event.relatedTarget)) return;
    if (!event.target.closest('.agents-header-tooltip')) removeTip();
  });

  document.addEventListener('scroll', removeTip, true);
  window.addEventListener('resize', removeTip);
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

function getHashRouteInfo(hash = window.location.hash) {
  const raw = String(hash || '').replace(/^#\/?/, '');
  const queryStart = raw.indexOf('?');
  const routeKey = (queryStart >= 0 ? raw.slice(0, queryStart) : raw) || 'dashboard';
  const query = queryStart >= 0 ? raw.slice(queryStart + 1) : '';
  return {
    routeKey,
    queryParams: new URLSearchParams(query),
  };
}

function isStandaloneAgentChatRoute(routeKey = getHashRouteInfo().routeKey) {
  return routeKey === 'agent-chat' || routeKey === 'chat/agent';
}

function isStandaloneHybridFlowRoute(routeKey = getHashRouteInfo().routeKey) {
  return routeKey === 'hybrid-flow';
}

function isStandaloneChatRoute(routeKey = getHashRouteInfo().routeKey) {
  return isStandaloneAgentChatRoute(routeKey) || isStandaloneHybridFlowRoute(routeKey);
}

function isAgentsDashboardRoute() {
  const { routeKey } = getHashRouteInfo();
  return routeKey === 'dashboard/agents' || routeKey.startsWith('dashboard/agents/project/');
}

function getAgentIdFromRow(row) {
  if (!row) return '';
  const uuid = String(row.dataset.agentUuid || '').trim();
  if (uuid) return uuid;
  const cells = Array.from(row.children).filter(
    (child) => child.tagName === 'SPAN' && !child.classList.contains('row-actions')
  );
  return String(cells[2]?.textContent || cells[1]?.textContent || '').trim();
}

function findAgentRowById(agentId) {
  const normalizedId = String(agentId || '').trim();
  if (!normalizedId || !agentsPageForChat) return null;
  return Array.from(agentsPageForChat.querySelectorAll('.agents-row')).find((row) => {
    if (row.classList.contains('header')) return false;
    return getAgentIdFromRow(row) === normalizedId;
  }) || null;
}

function buildAgentChatPayloadFromRow(row, fallbackAgentId = '') {
  let agentName = 'Agente';
  let rowCtxId = '';
  const agentId = getAgentIdFromRow(row) || String(fallbackAgentId || '').trim();
  const environmentSlug = String(row?.dataset.hubOrg || hubOrgId || '').trim();
  const projectId = String(row?.dataset.projectId || '').trim();

  if (row) {
    const nameStrong = row.querySelector('span strong');
    if (nameStrong) agentName = nameStrong.textContent.trim();
    rowCtxId = String(row.dataset.hubContext || '').trim();
    if (!rowCtxId) {
      rowCtxId = String(row.closest('.agents-context-block')?.dataset.hubContext || '').trim();
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
    voiceEnabled: false,
    projectSlug: project?.slug || '',
    projectTitle: project?.title || ''
  };
}

function buildAgentChatPayloadFromButton(button) {
  return buildAgentChatPayloadFromRow(button.closest('.agents-row'));
}

function applyAgentConversationMode(payload = {}) {
  if (!agentChatModal) return;
  const voiceMode = Boolean(payload.voiceEnabled);
  agentChatModal.classList.toggle('voice-mode', voiceMode);
  if (!voiceMode) {
    agentChatModal.classList.remove('voice-history-open');
    if (chatVoiceMenuPopover) {
      chatVoiceMenuPopover.hidden = true;
      chatVoiceMenuPopover.setAttribute('aria-hidden', 'true');
    }
  }
  agentChatModal.classList.remove('has-voice-transcript');
  agentChatModal.dataset.voiceMode = voiceMode ? 'true' : 'false';
  agentChatModal.dataset.voiceStage = 'idle';
  if (voiceMode) {
    if (chatVoiceUserLine) chatVoiceUserLine.textContent = '...';
    if (chatVoiceAgentLine) chatVoiceAgentLine.textContent = '...';
    if (chatVoiceStatus) chatVoiceStatus.textContent = 'Pronto para começar';
    setVoiceConversationState(false);
  }
}

function getCurrentAgentChatName() {
  if (!agentChatTitle) return 'Agente';
  return agentChatTitle.textContent
    .replace(/^Conversa por voz com\s+/i, '')
    .replace(/^Chat com\s+/i, '')
    .trim() || 'Agente';
}

function openAgentVoiceConversationStage() {
  if (!agentChatModal) return;
  setChatDictationState(false);
  const agentName = getCurrentAgentChatName();
  applyAgentConversationMode({ voiceEnabled: true });
  setVoiceConversationState(false);
  if (agentChatTitle) {
    agentChatTitle.textContent = `Conversa por voz com ${agentName}`;
  }
  if (agentChatSubtitle) {
    const activeHistory = chatHistoryList?.querySelector('.chat-history-item.active:not([hidden])');
    if (activeHistory) {
      const historyTitle = activeHistory.querySelector('.chat-history-title')?.value || 'Conversa';
      const historyDate = activeHistory.querySelector('.chat-history-date')?.textContent?.trim() || 'Hoje';
      agentChatSubtitle.textContent = `${historyTitle} • Última conversa por voz ${historyDate}`;
    } else {
      const agentId = String(agentChatModal.dataset.agentId || '').trim();
      agentChatSubtitle.textContent = agentId ? `${agentId} • Voz pronta` : 'Voz pronta';
    }
  }
  scheduleLucideRefresh();
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
    agentChatModal.classList.toggle('agent-chat-modal--standalone', isStandaloneChatRoute());
    applyAgentConversationMode(payload);
  }
  if (agentChatTitle && payload.agentName) {
    agentChatTitle.textContent = payload.voiceEnabled
      ? `Conversa por voz com ${payload.agentName}`
      : `Chat com ${payload.agentName}`;
  }
  if (agentChatSubtitle && payload.subtitle) {
    agentChatSubtitle.textContent = payload.subtitle;
  }
  activeAgentChatSkillQuery = '';
  chatSkillSearchInputs.forEach((input) => {
    input.value = '';
  });
  renderAgentChatSkillMenu();
  if (agentChatScopeLine) agentChatScopeLine.hidden = true;
  syncAgentChatHistoryScope();
  if (agentChatSubtitle && payload.subtitle) {
    agentChatSubtitle.textContent = payload.subtitle;
  }
}

function openAgentChatModalFromToggle(button) {
  const row = button.closest('.agents-row');
  let agentName = 'Agente';
  let agentId = '';
  let rowCtxId = '';

  if (row) {
    const nameStrong = row.querySelector('span strong');
    if (nameStrong) agentName = nameStrong.textContent.trim();
    rowCtxId = String(row.dataset.hubContext || '').trim();
    if (!rowCtxId) {
      rowCtxId = String(row.closest('.agents-context-block')?.dataset.hubContext || '').trim();
    }
    agentId = getAgentIdFromRow(row);
  }

  if (agentChatTitle) {
    agentChatTitle.textContent = `Chat com ${agentName}`;
  }
  applyAgentConversationMode({ voiceEnabled: false });
  agentChatModal.dataset.agentId = agentId;
  agentChatModal.dataset.contextId = rowCtxId || String(hubContextId || '').trim();
  activeAgentChatSkillQuery = '';
  chatSkillSearchInputs.forEach((input) => {
    input.value = '';
  });
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
  renderAgentChatSkillMenu();
  updateSkillStatus();
  updateChatSendState();
  updateChatEmptyState();
}

const agentsPageForChat = document.getElementById('page-agents');
let lastAgentChatRouteOpenKey = '';

function openAgentChatFromRouteParam() {
  if (!agentChatModal || !agentsPageForChat) return;
  const { routeKey, queryParams } = getHashRouteInfo();
  const isStandaloneRoute = isStandaloneAgentChatRoute(routeKey);
  const isHybridFlowRoute = isStandaloneHybridFlowRoute(routeKey);
  const onAgentsPage = routeKey === 'dashboard/agents' || routeKey.startsWith('dashboard/agents/project/');
  if (!isStandaloneRoute && !isHybridFlowRoute && !onAgentsPage) {
    lastAgentChatRouteOpenKey = '';
    return;
  }

  if (isHybridFlowRoute) {
    const flowId = String(queryParams.get('flow') || queryParams.get('id') || '').trim();
    if (!flowId) {
      lastAgentChatRouteOpenKey = '';
      return;
    }

    const openKey = `${routeKey}?flow=${flowId}`;
    const row = findHybridFlowRowByPublicId(flowId);
    const isHydrated = agentChatModal.dataset.routeHybridFlowHydrated === 'true';
    if (lastAgentChatRouteOpenKey === openKey && agentChatModal.classList.contains('open') && (isHydrated || !row)) return;

    if (agentChatModal.parentElement !== document.body) {
      document.body.appendChild(agentChatModal);
    }
    openAgentChatModalWithPayload(buildHybridFlowVoicePayload(row, flowId));
    agentChatModal.classList.add('agent-chat-modal--standalone');
    agentChatModal.dataset.routeHybridFlowHydrated = row ? 'true' : 'false';
    lastAgentChatRouteOpenKey = openKey;
    return;
  }

  const agentId = String(queryParams.get('agent') || queryParams.get('chat') || '').trim();
  if (!agentId) {
    lastAgentChatRouteOpenKey = '';
    return;
  }

  const openKey = `${routeKey}?agent=${agentId}`;
  const row = findAgentRowById(agentId);
  const isHydrated = agentChatModal.dataset.routeAgentHydrated === 'true';
  if (lastAgentChatRouteOpenKey === openKey && agentChatModal.classList.contains('open') && (isHydrated || !row)) return;

  if (isStandaloneRoute && agentChatModal.parentElement !== document.body) {
    document.body.appendChild(agentChatModal);
  }
  openAgentChatModalWithPayload(buildAgentChatPayloadFromRow(row, agentId));
  agentChatModal.classList.toggle('agent-chat-modal--standalone', isStandaloneRoute);
  agentChatModal.dataset.routeAgentHydrated = row ? 'true' : 'false';
  lastAgentChatRouteOpenKey = openKey;
}

if (agentChatModal && agentsPageForChat) {
  agentsPageForChat.addEventListener('click', (event) => {
    const chatBtn = event.target.closest('.agent-chat-toggle');
    if (!chatBtn || !agentsPageForChat.contains(chatBtn)) return;
    event.stopPropagation();
    openAgentChatModalWithPayload(buildAgentChatPayloadFromButton(chatBtn));
  });
  agentsPageForChat.addEventListener('click', (event) => {
    const deleteBtn = event.target.closest('.agent-delete-toggle, .agents-row .row-actions .action-icon.danger[aria-label="Excluir"]');
    if (!deleteBtn || !agentsPageForChat.contains(deleteBtn)) return;
    event.stopPropagation();
    void deleteAgentWithConfirmation(deleteBtn.closest('.agents-row'));
  });
  agentsPageForChat.addEventListener('click', async (event) => {
    const copyBtn = event.target.closest('.agents-copy-link-btn');
    if (!copyBtn || !agentsPageForChat.contains(copyBtn)) return;
    if (copyBtn.disabled || copyBtn.getAttribute('disabled') !== null) return;
    event.stopPropagation();
    const row = copyBtn.closest('.agents-row');
    if (!row) return;
    const agent = {
      id: row.dataset.agentUuid || '',
      name: row.querySelector('strong')?.textContent?.trim() || '',
      public_url: copyBtn.dataset.agentPublicLink || '',
      use_rag: row.querySelector('.agents-rag-badge--yes') != null,
      voice_enabled: row.dataset.voiceEnabled === 'true',
    };
    openAgentShareModal(agent, copyBtn);
  });
}

const hybridFlowsPage = document.getElementById('page-hybrid-flows');
if (hybridFlowsPage) {
  hydrateHybridFlowHistoryFlowName();
  renderHybridFlowsFromStorage();
  const openCreatePageBtn = hybridFlowsPage.querySelector('#openHybridFlowCreatePage');
  if (openCreatePageBtn) {
    openCreatePageBtn.addEventListener('click', () => {
      openHybridFlowCreateMode('create');
    });
  }

  hybridFlowsPage.addEventListener('click', async (event) => {
    const copyLinkBtn = event.target.closest('.hybrid-flows-row-actions .action-icon[aria-label="Copiar link"]');
    if (!copyLinkBtn || !hybridFlowsPage.contains(copyLinkBtn)) return;
    event.stopPropagation();
    const link = getHybridFlowPublicLink(copyLinkBtn.closest('.data-row'));
    const copied = await copyTextToClipboard(link);
    if (copied) showAppToast('Link copiado');
  });

  hybridFlowsPage.addEventListener('click', (event) => {
    const openLinkBtn = event.target.closest('.hybrid-flows-row-actions .action-icon[aria-label="Abrir em nova guia"]');
    if (!openLinkBtn || !hybridFlowsPage.contains(openLinkBtn)) return;
    event.stopPropagation();
    const link = getHybridFlowPublicLink(openLinkBtn.closest('.data-row'));
    if (link) window.open(link, '_blank', 'noopener,noreferrer');
  });

  hybridFlowsPage.addEventListener('click', async (event) => {
    const refreshLinkBtn = event.target.closest('.hybrid-flows-row-actions .action-icon[aria-label="Atualizar link"]');
    if (!refreshLinkBtn || !hybridFlowsPage.contains(refreshLinkBtn)) return;
    event.stopPropagation();
    const confirmed = await confirmRotatePublicLinkAction();
    if (!confirmed) return;
    showAppToast('Link atualizado');
  });

  hybridFlowsPage.addEventListener('click', async (event) => {
    const deleteBtn = event.target.closest('.hybrid-flows-row-actions .action-icon.danger[aria-label="Apagar"]');
    if (!deleteBtn || !hybridFlowsPage.contains(deleteBtn)) return;
    event.stopPropagation();
    const row = deleteBtn.closest('.data-row');
    if (!row) return;
    const flowName = row.querySelector('strong')?.textContent?.trim() || 'este fluxo';
    const confirmed = await confirmDeletionAction(`o fluxo "${flowName}"`);
    if (!confirmed) return;
    const flowId = row.dataset.hybridFlowId || '';
    if (flowId) removeHybridFlowFromStorage(flowId);
    row.remove();
    showAppToast('Fluxo excluído');
  });

  hybridFlowsPage.addEventListener('click', (event) => {
    const historyBtn = event.target.closest('.hybrid-flows-row-actions .action-icon[aria-label="Histórico"]');
    if (!historyBtn || !hybridFlowsPage.contains(historyBtn)) return;
    event.stopPropagation();
    const row = historyBtn.closest('.data-row');
    const flowName = row?.querySelector('strong')?.textContent?.trim() || 'Fluxo';
    setHybridFlowHistoryFlowName(flowName);
    window.location.hash = '#/dashboard/hybrid-flows/history';
  });

  hybridFlowsPage.addEventListener('click', (event) => {
    const editBtn = event.target.closest('.hybrid-flows-row-actions .action-icon[aria-label="Editar"]');
    if (!editBtn || !hybridFlowsPage.contains(editBtn)) return;
    event.stopPropagation();
    const row = editBtn.closest('.data-row');
    const flow = readHybridFlowRowData(row);
    if (!row || !flow) return;
    openHybridFlowCreateMode('edit', flow, row);
  });
}

const voiceMessagingPage = document.getElementById('page-voice-messaging');
if (voiceMessagingPage) {
  voiceMessagingPage.querySelectorAll('#voiceMessagingTable .data-row:not(.header)').forEach((row) => {
    normalizeVoiceMessagingTableRow(row);
  });
  renderVoiceMessagingFromStorage();

  voiceMessagingPage.addEventListener('click', async (event) => {
    const editBtn = event.target.closest('.hybrid-flows-row-actions .action-icon[aria-label="Editar"]');
    if (editBtn && voiceMessagingPage.contains(editBtn)) {
      event.stopPropagation();
      const row = editBtn.closest('.data-row');
      if (!isVoiceMessagingEditableStatus(row?.dataset.voiceMessagingStatus || '')) return;
      const operationId = String(row?.dataset.voiceMessagingId || '').trim();
      const storedOperation = operationId
        ? getVoiceMessagingFromStorage().find((item) => String(item?.id || '').trim() === operationId) || null
        : null;
      const operation = storedOperation || readVoiceMessagingRowData(row);
      if (row && operation) openVoiceMessagingCreateMode('edit', operation, row);
      return;
    }

    const deleteBtn = event.target.closest('.hybrid-flows-row-actions .action-icon.danger[aria-label="Apagar"]');
    if (!deleteBtn || !voiceMessagingPage.contains(deleteBtn)) return;
    event.stopPropagation();
    const row = deleteBtn.closest('.data-row');
    if (!row) return;
    const operationName = row.querySelector('strong')?.textContent?.trim() || 'esta mensageria';
    const confirmed = await confirmDeletionAction(`a mensageria "${operationName}"`);
    if (!confirmed) return;
    const operationId = String(row.dataset.voiceMessagingId || '').trim();
    if (operationId) removeVoiceMessagingFromStorage(operationId);
    row.remove();
    showAppToast('Mensageria excluída');
  });
}

const hybridHistoryPage = document.getElementById('page-hybrid-flows-history');
if (hybridHistoryPage && hybridHistoryDetailsModal) {
  hybridHistoryPage.addEventListener('click', (event) => {
    const detailsBtn = event.target.closest('.hybrid-history-table .action-icon[aria-label="Ver detalhes"]');
    if (!detailsBtn || !hybridHistoryPage.contains(detailsBtn)) return;
    event.stopPropagation();
    window.location.hash = '#/dashboard/hybrid-flows/history/details';
  });

  hybridHistoryDetailsModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-hybrid-history-details-close]')) {
      hybridHistoryDetailsModal.classList.remove('open');
      hybridHistoryDetailsModal.setAttribute('aria-hidden', 'true');
    }
    const tabBtn = event.target.closest('[data-details-tab]');
    if (!tabBtn) return;
    const tab = tabBtn.dataset.detailsTab;
    hybridHistoryDetailsModal
      .querySelectorAll('[data-details-tab]')
      .forEach((btn) => btn.classList.toggle('is-active', btn.dataset.detailsTab === tab));
    hybridHistoryDetailsModal
      .querySelectorAll('[data-details-panel]')
      .forEach((panel) => panel.classList.toggle('is-active', panel.dataset.detailsPanel === tab));
  });

  hybridHistoryCopyIdBtn?.addEventListener('click', async () => {
    const idValue = '8a71a24f...';
    const copied = await copyTextToClipboard(idValue);
    if (copied) showAppToast('ID copiado');
  });
}

const hybridHistoryDetailsPage = document.getElementById('page-hybrid-flows-history-details');
if (hybridHistoryDetailsPage) {
  hybridHistoryDetailsBackBtn?.addEventListener('click', () => {
    window.location.hash = '#/dashboard/hybrid-flows/history';
  });

  hybridHistoryDetailsPage.addEventListener('click', (event) => {
    const tabBtn = event.target.closest('[data-page-details-tab]');
    if (!tabBtn) return;
    const tab = tabBtn.dataset.pageDetailsTab;
    hybridHistoryDetailsPage
      .querySelectorAll('[data-page-details-tab]')
      .forEach((btn) => btn.classList.toggle('is-active', btn.dataset.pageDetailsTab === tab));
    hybridHistoryDetailsPage
      .querySelectorAll('[data-page-details-panel]')
      .forEach((panel) => panel.classList.toggle('is-active', panel.dataset.pageDetailsPanel === tab));
  });

  hybridHistoryPageCopyIdBtn?.addEventListener('click', async () => {
    const copied = await copyTextToClipboard('8a71a24f...');
    if (copied) showAppToast('ID copiado');
  });
}

hybridFlowHistoryBackBtn?.addEventListener('click', () => {
  window.location.hash = '#/dashboard/hybrid-flows';
});

const hybridFlowCreatePage = document.getElementById('page-hybrid-flows-create');
if (hybridFlowCreatePage) {
  const closeReviewModal = () => {
    if (!hybridFlowReviewModal) return;
    hybridFlowReviewModal.classList.remove('open');
    hybridFlowReviewModal.setAttribute('aria-hidden', 'true');
  };

  const closeDiscardModal = () => {
    if (!hybridFlowDiscardModal) return;
    hybridFlowDiscardModal.classList.remove('open');
    hybridFlowDiscardModal.setAttribute('aria-hidden', 'true');
  };

  hybridFlowCancelBtn?.addEventListener('click', () => {
    if (!hybridFlowDiscardModal) return;
    hybridFlowDiscardModal.classList.add('open');
    hybridFlowDiscardModal.setAttribute('aria-hidden', 'false');
  });

  hybridFlowCreateBackBtn?.addEventListener('click', () => {
    window.location.hash = '#/dashboard/hybrid-flows';
  });

  hybridFlowDiscardModal?.addEventListener('click', (event) => {
    if (event.target.closest('[data-hybrid-flow-discard-close]')) closeDiscardModal();
  });

  hybridFlowReviewModal?.addEventListener('click', (event) => {
    if (event.target.closest('[data-hybrid-flow-review-close]')) closeReviewModal();
  });

  hybridFlowDiscardConfirmBtn?.addEventListener('click', () => {
    closeDiscardModal();
    window.location.hash = '#/dashboard/hybrid-flows';
  });

  hybridFlowNextBtn?.addEventListener('click', () => {
    if (!hybridFlowReviewModal || !hybridFlowReviewList) return;
    const title = String(document.getElementById('hybridFlowTitleInput')?.value || '').trim() || 'Não informado';
    const description = String(document.getElementById('hybridFlowDescriptionInput')?.value || '').trim() || 'Não informado';
    const fieldsCount = hybridFlowFieldsList ? hybridFlowFieldsList.children.length : 0;
    const textAgent = String(hybridFlowCreatePage.querySelector('select[aria-label="Selecione o agente de texto"]')?.value || '').trim() || 'Não selecionado';
    const voiceAgent = String(hybridFlowCreatePage.querySelector('select[aria-label="Selecione o agente de voz"]')?.value || '').trim() || 'Não selecionado';
    const telegramIntegration = String(hybridFlowCreatePage.querySelector('select[aria-label="Integração do Telegram"]')?.value || '').trim() || 'Não selecionada';

    hybridFlowReviewList.innerHTML = `
      <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Título</span><span class="hybrid-flow-review-value">${escapeHtmlWes(title)}</span></div>
      <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Descrição</span><span class="hybrid-flow-review-value">${escapeHtmlWes(description)}</span></div>
      <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Campos configurados</span><span class="hybrid-flow-review-value">${fieldsCount}</span></div>
      <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Agente de texto</span><span class="hybrid-flow-review-value">${escapeHtmlWes(textAgent)}</span></div>
      <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Agente de voz</span><span class="hybrid-flow-review-value">${escapeHtmlWes(voiceAgent)}</span></div>
      <div class="hybrid-flow-review-item"><span class="hybrid-flow-review-label">Integração do Telegram</span><span class="hybrid-flow-review-value">${escapeHtmlWes(telegramIntegration)}</span></div>
    `;
    hybridFlowReviewModal.classList.add('open');
    hybridFlowReviewModal.setAttribute('aria-hidden', 'false');
  });

  hybridFlowReviewConfirmBtn?.addEventListener('click', () => {
    const isEditMode = Boolean(activeHybridFlowEditId || activeHybridFlowEditRow);
    const flow = readHybridFlowFormData();
    if (isEditMode && activeHybridFlowEditRow) {
      updateHybridFlowRow(activeHybridFlowEditRow, flow);
      upsertHybridFlowInStorage(flow);
    } else {
      persistAndRenderHybridFlow(flow);
    }
    closeReviewModal();
    showAppToast(isEditMode ? 'Fluxo atualizado com sucesso' : 'Fluxo salvo com sucesso');
    activeHybridFlowEditId = '';
    activeHybridFlowEditRow = null;
    syncHybridFlowCreateModeUi();
    window.location.hash = '#/dashboard/hybrid-flows';
  });
}

const hybridFlowAddFieldBtn = document.getElementById('hybridFlowAddFieldBtn');
const hybridFlowFieldsList = document.getElementById('hybridFlowFieldsList');
const hybridFlowFieldsEmpty = document.getElementById('hybridFlowFieldsEmpty');
if (hybridFlowAddFieldBtn && hybridFlowFieldsList && hybridFlowFieldsEmpty) {
  const syncHybridFlowFieldsEmpty = () => {
    hybridFlowFieldsEmpty.hidden = hybridFlowFieldsList.children.length > 0;
  };
  const hybridFlowTypeLabelMap = {
    text: 'Texto livre',
    phone: 'Telefone',
    cpf: 'CPF',
    email: 'Email',
    number: 'Número',
    boolean: 'Sim/Não'
  };
  const renderHybridFlowFieldEdit = (row, data) => {
    row.innerHTML = `
      <div class="hybrid-flow-field-top">
        <button type="button" class="icon-btn hybrid-flow-drag-handle" aria-label="Mover campo">
          <span class="material-symbols-rounded">drag_indicator</span>
        </button>
        <div>
          <input class="modal-input hybrid-flow-field-input" type="text" placeholder="Nome (chave JSON) *" value="${escapeHtmlWes(data.name || '')}" />
        </div>
        <div>
          <input class="modal-input hybrid-flow-field-input" type="text" placeholder="Rótulo exibido *" value="${escapeHtmlWes(data.label || '')}" />
        </div>
        <div class="form-field hybrid-flow-field-type">
          <label class="modal-label">Tipo</label>
          <div class="hub-select-wrap hub-select-wrap--block">
            <select class="hub-select" aria-label="Tipo do campo">
              <option value="text"${data.type === 'text' ? ' selected' : ''}>Texto livre</option>
              <option value="phone"${data.type === 'phone' ? ' selected' : ''}>Telefone</option>
              <option value="cpf"${data.type === 'cpf' ? ' selected' : ''}>CPF</option>
              <option value="email"${data.type === 'email' ? ' selected' : ''}>Email</option>
              <option value="number"${data.type === 'number' ? ' selected' : ''}>Número</option>
              <option value="boolean"${data.type === 'boolean' ? ' selected' : ''}>Sim/Não</option>
            </select>
          </div>
        </div>
        <button type="button" class="icon-btn hybrid-flow-delete-btn" aria-label="Remover campo">
          <span class="material-symbols-rounded">delete</span>
        </button>
      </div>
      <div class="hybrid-flow-field-middle">
        <div class="hybrid-flow-middle-spacer" aria-hidden="true"></div>
        <textarea class="modal-textarea hybrid-flow-field-description" rows="3" placeholder="Descrição para o agente (opcional)">${escapeHtmlWes(data.description || '')}</textarea>
      </div>
      <div class="hybrid-flow-field-bottom">
        <div class="hybrid-flow-middle-spacer" aria-hidden="true"></div>
        <div class="hybrid-flow-required">
          <label class="switch small">
            <input type="checkbox"${data.required ? ' checked' : ''} />
            <span class="switch-track"></span>
          </label>
          <span>Obrigatório</span>
        </div>
        <button type="button" class="btn primary hybrid-flow-save-btn">Salvar</button>
      </div>
    `;
    if (typeof hubEnhanceSelectWrap === 'function') {
      row.querySelectorAll('.hub-select-wrap').forEach(hubEnhanceSelectWrap);
    }
  };
  const renderHybridFlowFieldSummary = (row, data) => {
    const typeLabel = hybridFlowTypeLabelMap[data.type] || hybridFlowTypeLabelMap.text;
    row.innerHTML = `
      <div class="hybrid-flow-field-summary">
        <button type="button" class="icon-btn hybrid-flow-drag-handle" aria-label="Mover campo">
          <span class="material-symbols-rounded">drag_indicator</span>
        </button>
        <div class="hybrid-flow-field-summary-content">
          <div class="hybrid-flow-summary-head">
            <strong>${escapeHtmlWes(data.label || data.name || '-')}</strong>
            <span class="hybrid-flow-summary-dot">•</span>
            <span>${escapeHtmlWes(typeLabel)}</span>
            ${data.required ? '<span class="hybrid-flow-summary-badge">Obrigatório</span>' : ''}
          </div>
          <div class="hybrid-flow-summary-subhead">${escapeHtmlWes(data.name || '-')}</div>
          <p class="hybrid-flow-summary-description">${escapeHtmlWes(data.description || 'Sem descrição')}</p>
        </div>
        <div class="hybrid-flow-field-summary-actions">
          <button type="button" class="icon-btn hybrid-flow-edit-btn" aria-label="Editar campo">
            <span class="material-symbols-rounded">edit</span>
          </button>
          <button type="button" class="icon-btn hybrid-flow-delete-btn" aria-label="Remover campo">
            <span class="material-symbols-rounded">delete</span>
          </button>
        </div>
      </div>
    `;
  };

  hybridFlowAddFieldBtn.addEventListener('click', () => {
    const fieldRow = document.createElement('div');
    const fieldId = `field-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    fieldRow.className = 'hybrid-flow-field-card';
    fieldRow.dataset.fieldId = fieldId;
    renderHybridFlowFieldEdit(fieldRow, { name: '', label: '', type: 'text', description: '', required: true });

    hybridFlowFieldsList.appendChild(fieldRow);
    syncHybridFlowFieldsEmpty();
  });

  hybridFlowFieldsList.addEventListener('click', (event) => {
    const deleteBtn = event.target.closest('.hybrid-flow-delete-btn');
    if (!deleteBtn) return;
    const row = deleteBtn.closest('.hybrid-flow-field-card');
    if (!row) return;
    row.remove();
    syncHybridFlowFieldsEmpty();
  });

  hybridFlowFieldsList.addEventListener('click', (event) => {
    const saveBtn = event.target.closest('.hybrid-flow-save-btn');
    if (!saveBtn) return;
    const row = saveBtn.closest('.hybrid-flow-field-card');
    if (!row) return;

    const name = row.querySelector('input[placeholder="Nome (chave JSON) *"]')?.value?.trim() || '';
    const label = row.querySelector('input[placeholder="Rótulo exibido *"]')?.value?.trim() || '';
    const type = row.querySelector('select[aria-label="Tipo do campo"]')?.value || 'text';
    const description = row.querySelector('textarea[placeholder="Descrição para o agente (opcional)"]')?.value?.trim() || '';
    const required = Boolean(row.querySelector('.hybrid-flow-required input[type="checkbox"]')?.checked);

    const storageKey = 'hybridFlowFieldDrafts';
    const raw = window.localStorage.getItem(storageKey);
    let drafts = [];
    try {
      drafts = raw ? JSON.parse(raw) : [];
    } catch (_) {
      drafts = [];
    }
    const nextDrafts = Array.isArray(drafts) ? drafts.filter((item) => item?.id !== row.dataset.fieldId) : [];
    nextDrafts.push({
      id: row.dataset.fieldId,
      name,
      label,
      type,
      description,
      required
    });
    window.localStorage.setItem(storageKey, JSON.stringify(nextDrafts));
    row.dataset.fieldData = JSON.stringify({ name, label, type, description, required });
    renderHybridFlowFieldSummary(row, { name, label, type, description, required });
    showAppToast('Campo salvo');
  });

  hybridFlowFieldsList.addEventListener('click', (event) => {
    const editBtn = event.target.closest('.hybrid-flow-edit-btn');
    if (!editBtn) return;
    const row = editBtn.closest('.hybrid-flow-field-card');
    if (!row) return;
    let data = { name: '', label: '', type: 'text', description: '', required: true };
    try {
      data = row.dataset.fieldData ? JSON.parse(row.dataset.fieldData) : data;
    } catch (_) {
      data = { name: '', label: '', type: 'text', description: '', required: true };
    }
    renderHybridFlowFieldEdit(row, data);
  });

  syncHybridFlowFieldsEmpty();
}

const agentShareModalEl = document.getElementById('agentShareModal');
const agentShareCopyBtnEl = document.getElementById('agentShareCopyBtn');
const agentShareOpenBtnEl = document.getElementById('agentShareOpenBtn');
const agentShareSaveBtnEl = document.getElementById('agentShareSaveBtn');
const agentSharePrivateToggleEl = document.getElementById('agentSharePrivateToggle');
if (agentShareCopyBtnEl) {
  agentShareCopyBtnEl.addEventListener('click', async () => {
    const link = String(document.getElementById('agentShareLink')?.value || '').trim();
    if (!link) return;
    const copied = await copyTextToClipboard(link);
    if (copied) {
      agentShareCopyBtnEl.classList.add('is-copied');
      window.setTimeout(() => agentShareCopyBtnEl.classList.remove('is-copied'), 1200);
    }
  });
}
if (agentShareOpenBtnEl) {
  agentShareOpenBtnEl.addEventListener('click', () => {
    const link = String(document.getElementById('agentShareLink')?.value || '').trim();
    if (!link) return;
    window.open(link, '_blank', 'noopener');
  });
}
  if (agentShareSaveBtnEl && agentShareModalEl) {
    agentShareSaveBtnEl.addEventListener('click', () => {
      agentShareModalEl.classList.remove('open');
      agentShareModalEl.setAttribute('aria-hidden', 'true');
    });
  }
if (agentShareModalEl) {
  if (agentSharePrivateToggleEl) {
    agentSharePrivateToggleEl.addEventListener('change', () => {
      const isPrivate = agentSharePrivateToggleEl.checked;
      const linkInput = document.getElementById('agentShareLink');
      const statusChip = document.getElementById('agentShareStatusChip');
      const linkCard = agentShareModalEl.querySelector('.agent-share-link-card');
      if (linkInput) linkInput.disabled = isPrivate;
      if (statusChip) {
        statusChip.textContent = isPrivate ? 'Privado' : 'Público';
        statusChip.classList.toggle('agents-visibility-badge--public', !isPrivate);
        statusChip.classList.toggle('agents-visibility-badge--private', isPrivate);
      }
      if (agentShareCopyBtnEl) {
        const linkValue = String(document.getElementById('agentShareLink')?.value || '').trim();
        agentShareCopyBtnEl.disabled = isPrivate || !linkValue;
      }
      if (agentShareOpenBtnEl) {
        const linkValue = String(document.getElementById('agentShareLink')?.value || '').trim();
        agentShareOpenBtnEl.disabled = isPrivate || !linkValue;
      }
      linkCard?.classList.toggle('is-disabled', isPrivate);
    });
  }
  agentShareModalEl.addEventListener('click', (event) => {
    const closeTarget = event.target.closest('[data-modal-close]');
    if (!closeTarget) return;
    agentShareModalEl.classList.remove('open');
    agentShareModalEl.setAttribute('aria-hidden', 'true');
  });
}

if (agentChatModal) {
  agentChatModal.addEventListener('click', (event) => {
    const closeTarget = event.target.closest('[data-modal-close]');
    if (closeTarget) {
      if (isStandaloneChatRoute()) return;
      agentChatModal.classList.remove('open');
      agentChatModal.classList.remove('voice-history-open');
      agentChatModal.setAttribute('aria-hidden', 'true');
      if (chatVoiceMenuPopover) {
        chatVoiceMenuPopover.hidden = true;
        chatVoiceMenuPopover.setAttribute('aria-hidden', 'true');
      }
      if (chatVoiceSelector) {
        chatVoiceSelector.classList.remove('is-open');
        chatVoiceSelectorTrigger?.setAttribute('aria-expanded', 'false');
      }
      const scopeLine = document.getElementById('agentChatScopeLine');
      if (scopeLine) scopeLine.hidden = true;
      if (chatAttachMenu) {
        chatAttachMenu.classList.remove('open');
      }
      if (chatSkillMenu) {
        chatSkillMenu.classList.remove('open');
      }
      activeAgentChatSkillQuery = '';
      chatSkillSearchInputs.forEach((input) => {
        input.value = '';
      });
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
    activeAgentChatSkillQuery = '';
    chatSkillSearchInputs.forEach((input) => {
      input.value = '';
    });
    const scopeLine = document.getElementById('agentChatScopeLine');
    if (scopeLine) scopeLine.hidden = true;
    syncAgentChatHistoryScope();
    agentChatModal.classList.add('open');
    agentChatModal.setAttribute('aria-hidden', 'false');
    scheduleLucideRefresh();
    renderAgentChatSkillMenu();
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
  chatHistoryList.addEventListener('click', async (event) => {
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
      if (!(await confirmDeletionAction('este histórico de chat'))) return;
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
  if (
    agentChatModal?.classList.contains('voice-history-open') &&
    !event.target.closest('#chatVoiceMenuPopover') &&
    !event.target.closest('#chatVoiceHistoryBtn')
  ) {
    agentChatModal.classList.remove('voice-history-open');
    if (chatVoiceMenuPopover) {
      chatVoiceMenuPopover.hidden = true;
      chatVoiceMenuPopover.setAttribute('aria-hidden', 'true');
    }
    if (chatVoiceSelector) {
      chatVoiceSelector.classList.remove('is-open');
      chatVoiceSelectorTrigger?.setAttribute('aria-expanded', 'false');
    }
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

if (chatVoiceStartButton) {
  chatVoiceStartButton.addEventListener('click', () => {
    const isActive = chatVoiceStartButton.dataset.voiceActive === 'true';
    setVoiceConversationState(!isActive);
  });
}

if (chatVoiceMuteButton) {
  chatVoiceMuteButton.addEventListener('click', () => {
    const isMuted = chatVoiceMuteButton.dataset.muted === 'true';
    const nextMuted = !isMuted;
    chatVoiceMuteButton.dataset.muted = nextMuted ? 'true' : 'false';
    chatVoiceMuteButton.setAttribute('aria-label', nextMuted ? 'Ativar microfone' : 'Silenciar microfone');
    chatVoiceMuteButton.innerHTML = `<i data-lucide="${nextMuted ? 'mic' : 'mic-off'}"></i>`;
    scheduleLucideRefresh();
  });
}

if (chatVoiceHistoryButton && agentChatModal) {
  chatVoiceHistoryButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = agentChatModal.classList.toggle('voice-history-open');
    if (chatVoiceMenuPopover) {
      chatVoiceMenuPopover.hidden = !isOpen;
      chatVoiceMenuPopover.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    }
    if (!isOpen && chatVoiceSelector) {
      chatVoiceSelector.classList.remove('is-open');
      chatVoiceSelectorTrigger?.setAttribute('aria-expanded', 'false');
    }
  });
}

if (chatVoiceSelectorTrigger && chatVoiceSelector) {
  chatVoiceSelectorTrigger.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = chatVoiceSelector.classList.toggle('is-open');
    chatVoiceSelectorTrigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

chatVoiceInterruptSensitivity?.addEventListener('input', syncChatVoiceInterruptSensitivity);
chatVoiceInterruptToggle?.addEventListener('change', syncChatVoiceInterruptSensitivityEnabled);
syncChatVoiceInterruptSensitivity();
syncChatVoiceInterruptSensitivityEnabled();

if (chatVoiceMenuPopover && chatVoiceSelectorValue) {
  chatVoiceMenuPopover.addEventListener('click', (event) => {
    const option = event.target.closest('.chat-voice-selector-option');
    if (!option) return;
    const selectedVoice = String(option.dataset.voiceOption || option.textContent || '').trim();
    if (!selectedVoice) return;
    chatVoiceSelectorValue.textContent = selectedVoice;
    chatVoiceMenuPopover.querySelectorAll('.chat-voice-selector-option').forEach((item) => {
      item.classList.toggle('is-active', item === option);
    });
    chatVoiceSelector?.classList.remove('is-open');
    chatVoiceSelectorTrigger?.setAttribute('aria-expanded', 'false');
  });
}

if (chatSendButton) {
  chatSendButton.addEventListener('click', () => {
    const hasText = Boolean(chatInput?.value.trim());
    if (!hasText) {
      openAgentVoiceConversationStage();
      return;
    }
    setChatDictationState(false);
    const activeHistory = document.querySelector('.chat-history-item.active');
    if (!activeHistory) return;
    const date = new Date();
    const formatted = formatDate(date);
    const dateEl = activeHistory.querySelector('.chat-history-date');
    if (dateEl) {
      dateEl.textContent = formatted;
    }
    if (agentChatModal?.classList.contains('voice-mode')) {
      const userText = String(chatInput?.value || '').trim();
      if (userText && chatVoiceUserLine) {
        chatVoiceUserLine.textContent = userText;
        agentChatModal.classList.add('has-voice-transcript');
      }
      setVoiceStageSpeaking();
      const activeBubble = chatThread?.querySelector('.chat-message.agent:last-child .chat-bubble');
      const agentText = String(activeBubble?.textContent || 'Entendi. Vou te ajudar com isso agora.').trim();
      window.setTimeout(() => {
        if (chatVoiceAgentLine) {
          chatVoiceAgentLine.textContent = agentText;
          agentChatModal.classList.add('has-voice-transcript');
        }
        setVoiceStageIdle();
      }, 1200);
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
  if (chatVoiceSkillMenu) {
    chatVoiceSkillMenu.classList.remove('open');
  }
  if (chatAttachGroup) {
    chatAttachGroup.classList.remove('is-open');
    chatAttachGroup.classList.remove('is-skill-open');
  }
  if (chatAttachToggle) {
    chatAttachToggle.setAttribute('aria-expanded', 'false');
  }
  if (chatVoiceSkillToggle) {
    chatVoiceSkillToggle.setAttribute('aria-expanded', 'false');
  }
  chatVoiceSkillWrap?.classList.remove('is-open');
};

function setVoiceSkillMenuOpen(nextOpen) {
  if (!chatVoiceSkillMenu || !chatVoiceSkillToggle) return;
  const isOpen = Boolean(nextOpen);
  chatVoiceSkillMenu.classList.toggle('open', isOpen);
  chatVoiceSkillToggle.setAttribute('aria-expanded', String(isOpen));
  chatVoiceSkillWrap?.classList.toggle('is-open', isOpen);
  if (!isOpen) return;
  if (chatAttachMenu) chatAttachMenu.classList.remove('open');
  if (chatSkillMenu) chatSkillMenu.classList.remove('open');
  if (chatAttachGroup) {
    chatAttachGroup.classList.remove('is-open');
    chatAttachGroup.classList.remove('is-skill-open');
  }
  if (chatAttachToggle) {
    chatAttachToggle.setAttribute('aria-expanded', 'false');
  }
  if (agentChatModal) {
    agentChatModal.classList.remove('voice-history-open');
  }
  if (chatVoiceMenuPopover) {
    chatVoiceMenuPopover.hidden = true;
    chatVoiceMenuPopover.setAttribute('aria-hidden', 'true');
  }
  if (chatVoiceSelector) {
    chatVoiceSelector.classList.remove('is-open');
    chatVoiceSelectorTrigger?.setAttribute('aria-expanded', 'false');
  }
  renderAgentChatSkillMenu();
  window.requestAnimationFrame(() => {
    positionVoiceSkillMenu();
    const targetInput = chatVoiceSkillMenu.querySelector('[data-chat-skill-search-input]');
    targetInput?.focus();
  });
}

function positionVoiceSkillMenu() {
  if (!chatVoiceSkillMenu?.classList.contains('open') || !chatVoiceSkillToggle) return;
  const buttonRect = chatVoiceSkillToggle.getBoundingClientRect();
  const viewportPadding = 12;
  const offset = 12;

  chatVoiceSkillMenu.style.left = '0px';
  chatVoiceSkillMenu.style.top = '0px';

  const menuRect = chatVoiceSkillMenu.getBoundingClientRect();
  const maxLeft = Math.max(viewportPadding, window.innerWidth - menuRect.width - viewportPadding);
  const preferredLeft = buttonRect.right - menuRect.width;
  const left = Math.min(Math.max(viewportPadding, preferredLeft), maxLeft);

  const preferredTop = buttonRect.top - menuRect.height - offset;
  const fallbackTop = buttonRect.bottom + offset;
  const top = preferredTop >= viewportPadding
    ? preferredTop
    : Math.min(
        Math.max(viewportPadding, fallbackTop),
        Math.max(viewportPadding, window.innerHeight - menuRect.height - viewportPadding)
      );

  chatVoiceSkillMenu.style.left = `${Math.round(left)}px`;
  chatVoiceSkillMenu.style.top = `${Math.round(top)}px`;
}

document.addEventListener('click', (event) => {
  const attachToggleTarget = event.target.closest('.chat-attach-toggle');
  const skillToggleTarget = event.target.closest('.chat-skill-toggle');
  const voiceSkillToggleTarget = event.target.closest('.chat-voice-skill-toggle');
  const insideAttachGroup = chatAttachGroup && chatAttachGroup.contains(event.target);
  const insideVoiceSkillWrap = chatVoiceSkillWrap && chatVoiceSkillWrap.contains(event.target);

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
    if (chatVoiceSkillMenu) {
      chatVoiceSkillMenu.classList.remove('open');
    }
    if (chatVoiceSkillToggle) {
      chatVoiceSkillToggle.setAttribute('aria-expanded', 'false');
    }
    if (isOpen) {
      renderAgentChatSkillMenu();
      window.setTimeout(() => chatSkillMenu?.querySelector('[data-chat-skill-search-input]')?.focus(), 0);
    }
    return;
  }

  if (voiceSkillToggleTarget && chatVoiceSkillMenu) {
    event.stopPropagation();
    setVoiceSkillMenuOpen(!chatVoiceSkillMenu.classList.contains('open'));
    return;
  }

  if (insideAttachGroup) {
    return;
  }

  if (insideVoiceSkillWrap) {
    return;
  }

  closeChatMenus();
});

if (chatVoiceSkillToggle) {
  chatVoiceSkillToggle.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    setVoiceSkillMenuOpen(!chatVoiceSkillMenu?.classList.contains('open'));
  });
}

window.addEventListener('resize', () => {
  positionVoiceSkillMenu();
});

window.addEventListener('scroll', () => {
  positionVoiceSkillMenu();
}, true);

function getActiveAgentChatSkillKey() {
  const agentId = String(agentChatModal?.dataset.agentId || '').trim();
  if (agentId) return agentId;
  const agentName = getAgentName().toLowerCase();
  return agentName || 'default-agent-chat';
}

function getSelectedAgentSkillIds() {
  const key = getActiveAgentChatSkillKey();
  if (!agentChatSkillSelections.has(key)) {
    agentChatSkillSelections.set(key, new Set());
  }
  return agentChatSkillSelections.get(key);
}

function getTopSkillsForActiveAgent() {
  const agentName = getAgentName().toLowerCase();
  const profile = CHAT_SKILL_AGENT_PROFILES.find(({ match }) => match.some((term) => agentName.includes(term)));
  const topSkillIds = Array.isArray(profile?.topSkills) && profile.topSkills.length ? profile.topSkills : CHAT_SKILL_DEFAULT_TOP;
  return topSkillIds
    .map((id) => CHAT_SKILL_CATALOG.find((skill) => skill.id === id))
    .filter(Boolean)
    .slice(0, 4);
}

function matchesChatSkillQuery(skill, query) {
  if (!query) return true;
  const haystack = [skill.name, skill.description, ...(skill.tags || [])]
    .join(' ')
    .toLowerCase();
  return haystack.includes(query);
}

function buildChatSkillItem(skill, selectedIds, isFeatured = false) {
  const item = document.createElement('div');
  item.className = `chat-skill-item${isFeatured ? ' is-featured' : ''}`;
  item.dataset.skillId = skill.id;

  const info = document.createElement('div');
  info.className = 'chat-skill-item-info';

  const textWrap = document.createElement('div');
  textWrap.className = 'chat-skill-item-copy';
  const title = document.createElement('span');
  title.className = 'chat-skill-item-title';
  title.textContent = skill.name;
  const description = document.createElement('span');
  description.className = 'chat-skill-item-description';
  description.textContent = skill.description;
  description.title = skill.description;
  textWrap.append(title, description);
  info.append(textWrap);

  const toggle = document.createElement('span');
  toggle.className = 'chat-skill-item-toggle';
  const toggleLabel = document.createElement('label');
  toggleLabel.className = 'switch small';
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.dataset.skillId = skill.id;
  input.checked = selectedIds.has(skill.id);
  const track = document.createElement('span');
  track.className = 'switch-track';
  toggleLabel.append(input, track);

  toggle.appendChild(toggleLabel);
  item.append(info, toggle);
  item.addEventListener('click', (event) => {
    if (event.target.closest('.switch')) return;
    input.checked = !input.checked;
    input.dispatchEvent(new Event('change', { bubbles: true }));
  });
  return item;
}

function getChatSkillMenuSections(root) {
  if (!root) return null;
  return {
    topList: root.querySelector('[data-chat-skill-top-list]'),
    allList: root.querySelector('[data-chat-skill-all-list]'),
    emptyState: root.querySelector('[data-chat-skill-empty-state]'),
    countBadge: root.querySelector('[data-chat-skill-count-badge]'),
  };
}

function renderAgentChatSkillMenu() {
  if (!chatSkillMenus.length) return;
  const selectedIds = getSelectedAgentSkillIds();
  const query = activeAgentChatSkillQuery.trim().toLowerCase();
  const topSkills = getTopSkillsForActiveAgent();
  const topSkillIds = new Set(topSkills.map((skill) => skill.id));
  const visibleTopSkills = topSkills.filter((skill) => matchesChatSkillQuery(skill, query));
  const visibleCatalogSkills = CHAT_SKILL_CATALOG
    .filter((skill) => !topSkillIds.has(skill.id))
    .filter((skill) => matchesChatSkillQuery(skill, query));

  chatSkillMenus.forEach((root) => {
    const sections = getChatSkillMenuSections(root);
    if (!sections?.topList || !sections?.allList) return;

    sections.topList.replaceChildren();
    sections.allList.replaceChildren();

    visibleTopSkills.forEach((skill) => {
      sections.topList.appendChild(buildChatSkillItem(skill, selectedIds, true));
    });
    visibleCatalogSkills.forEach((skill) => {
      sections.allList.appendChild(buildChatSkillItem(skill, selectedIds));
    });

    const topSection = sections.topList.closest('.chat-skill-section');
    const allSection = sections.allList.closest('.chat-skill-section');
    if (topSection) topSection.hidden = visibleTopSkills.length === 0;
    if (allSection) allSection.hidden = visibleCatalogSkills.length === 0;
    if (sections.emptyState) {
      sections.emptyState.hidden = visibleTopSkills.length + visibleCatalogSkills.length > 0;
    }
  });

  updateSkillStatus();
  scheduleLucideRefresh();
}

const updateSkillStatus = () => {
  if (!chatSkillStatusDot) return;
  const selectedIds = getSelectedAgentSkillIds();
  const activeCount = selectedIds.size;
  const anyEnabled = activeCount > 0;
  chatSkillStatusDot.classList.toggle('is-active', anyEnabled);
  chatSkillStatusDot.classList.toggle('is-inactive', !anyEnabled);
  const statusWrapper = chatSkillStatusDot.closest('.chat-skill-status');
  if (statusWrapper) {
    statusWrapper.dataset.tooltip = anyEnabled
      ? `${activeCount} habilidade${activeCount > 1 ? 's' : ''} ativa${activeCount > 1 ? 's' : ''}`
      : 'Habilidades inativas';
  }
  chatSkillCountBadges.forEach((badge) => {
    badge.textContent = anyEnabled
      ? `${activeCount} ativa${activeCount > 1 ? 's' : ''}`
      : '0 ativas';
  });
};

const updateChatSendState = () => {
  if (!chatInput || !chatSendButton) return;
  const hasText = chatInput.value.trim().length > 0;
  const nextIcon = hasText ? 'send' : 'audio-lines';
  const nextLabel = hasText ? 'Enviar' : 'Conversar por voz';
  chatSendButton.disabled = false;
  chatSendButton.dataset.chatMode = hasText ? 'send' : 'voice';
  chatSendButton.dataset.tooltip = nextLabel;
  chatSendButton.setAttribute('aria-label', nextLabel);
  chatSendButton.innerHTML = `<i data-lucide="${nextIcon}"></i>`;
  scheduleLucideRefresh();
};

const resetChatThread = () => {
  const thread = document.querySelector('.chat-thread');
  if (!thread) return;
  stopChatSpeechPlayback();
  thread.innerHTML = '';
};

const getAgentName = () => {
  if (!agentChatTitle) return '';
  return agentChatTitle.textContent.replace(/^(Chat com|Conversa por voz com)\s+/i, '').trim();
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

if (chatSkillSearchInputs.length) {
  chatSkillSearchInputs.forEach((input) => input.addEventListener('input', () => {
    activeAgentChatSkillQuery = String(input.value || '').trim();
    chatSkillSearchInputs.forEach((field) => {
      if (field !== input) field.value = activeAgentChatSkillQuery;
    });
    renderAgentChatSkillMenu();
  }));
}

chatSkillMenus.forEach((menu) => {
  menu.addEventListener('change', (event) => {
    const target = event.target.closest('input[type="checkbox"][data-skill-id]');
    if (!target) return;
    const selectedIds = getSelectedAgentSkillIds();
    const skillId = String(target.dataset.skillId || '').trim();
    if (!skillId) return;
    if (target.checked) {
      selectedIds.add(skillId);
    } else {
      selectedIds.delete(skillId);
    }
    updateSkillStatus();
  });
});

chatSkillViewAllButtons.forEach((button) => button.addEventListener('click', () => {
  closeChatMenus();
  hubCloseAgentChatIfOpen();
  window.location.hash = '#/dashboard/skills';
}));

renderAgentChatSkillMenu();

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
  const hasAutomationModalForm = Boolean(
    automationModal &&
    automationModalForm &&
    automationModalTitle &&
    automationModalName &&
    automationModalPriority &&
    automationModalDescription &&
    automationModalPackageSearch &&
    automationModalPackage &&
    automationModalPackageHint &&
    automationModalVersion &&
    automationModalParams &&
    automationModalSubmit
  );
  const hasAutomationCreateForm = Boolean(
    automationCreateForm &&
    automationCreateName &&
    automationCreatePriority &&
    automationCreateDescription &&
    automationCreateLanguage &&
    automationCreateScheduled &&
    automationCreateScheduleTime &&
    automationCreateScheduleFrequency &&
    automationCreateScheduleStartDate &&
    automationCreateScheduleEndDate &&
    automationCreateInputFile &&
    automationCreateCredential &&
    automationCreateSubmit
  );

  if (!openAutomationModal || !automationsTable || (!hasAutomationModalForm && !hasAutomationCreateForm)) {
    return;
  }

  let activeAutomationRow = null;

  function getAutomationModalControls() {
    if (!hasAutomationModalForm) return null;
    return {
      form: automationModalForm,
      error: automationModalError,
      name: automationModalName,
      priority: automationModalPriority,
      description: automationModalDescription,
      packageSearch: automationModalPackageSearch,
      packageSelect: automationModalPackage,
      packageHint: automationModalPackageHint,
      version: automationModalVersion,
      params: automationModalParams,
      scrollTarget: automationModal?.querySelector('.modal-body'),
    };
  }

  function getAutomationCreateControls() {
    if (!hasAutomationCreateForm) return null;
    return {
      form: automationCreateForm,
      error: automationCreateError,
      name: automationCreateName,
      priority: automationCreatePriority,
      description: automationCreateDescription,
      language: automationCreateLanguage,
      scheduled: automationCreateScheduled,
      schedulePanel: automationCreateSchedulePanel,
      scheduleTime: automationCreateScheduleTime,
      scheduleFrequency: automationCreateScheduleFrequency,
      scheduleStartDate: automationCreateScheduleStartDate,
      scheduleEndDate: automationCreateScheduleEndDate,
      customDays: automationCreateCustomDays,
      inputFile: automationCreateInputFile,
      inputFileSummary: automationCreateInputFileSummary,
      credential: automationCreateCredential,
      credentialSummary: automationCreateCredentialSummary,
      codePreview: automationCreateCodePreview,
      codeContent: automationCreateCodeContent,
      codeStatus: automationCreateCodeStatus,
      codeBadge: automationCreateCodeBadge,
      codeApprove: automationCreateCodeApproveBtn,
      codeReject: automationCreateCodeRejectBtn,
      codeRejectedState: automationCreateCodeRejectedState,
      uploadSelectedState: automationUploadSelectedState,
      uploadSelectedName: automationUploadSelectedName,
      uploadSelectedMeta: automationUploadSelectedMeta,
      uploadChange: automationUploadChangeBtn,
      uploadZipSummary: automationUploadZipSummary,
      uploadZipTitle: automationUploadZipTitle,
      uploadZipList: automationUploadZipList,
      historyToggle: automationCodeHistoryToggle,
      historyPanel: automationCodeHistoryPanel,
      historyList: automationCodeHistoryList,
      historyEmpty: automationCodeHistoryEmpty,
      aiPrompt: automationAiEditPrompt,
      aiInput: automationAiEditInput,
      aiSend: automationAiEditSend,
      submit: automationCreateSubmit,
      scrollTarget: document.getElementById('page-automations-create'),
    };
  }

  function setAutomationFormError(controls, message) {
    if (!controls?.error) return;
    if (message) {
      controls.error.textContent = message;
      controls.error.hidden = false;
      if (controls.scrollTarget && typeof controls.scrollTarget.scrollTo === 'function') {
        controls.scrollTarget.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    controls.error.textContent = '';
    controls.error.hidden = true;
  }

  function renderAutomationVersionOptions(versionSelect, packageId, selectedVersion = '') {
    if (!versionSelect) return;
    const pkg = getAutomationPackageById(packageId);
    versionSelect.innerHTML = '';

    if (!pkg) {
      const option = document.createElement('option');
      option.value = '';
      option.textContent = 'Selecione o pacote primeiro';
      versionSelect.appendChild(option);
      versionSelect.value = '';
      versionSelect.disabled = true;
      return;
    }

    pkg.versions.forEach((version) => {
      const option = document.createElement('option');
      option.value = version;
      option.textContent = version;
      versionSelect.appendChild(option);
    });

    versionSelect.disabled = false;
    if (selectedVersion && pkg.versions.includes(selectedVersion)) {
      versionSelect.value = selectedVersion;
    } else {
      versionSelect.value = pkg.versions[0] || '';
    }
  }

  function renderAutomationPackageOptions(controls, searchText = '', selectedPackageId = '', selectedVersion = '') {
    if (!controls?.packageSelect || !controls?.version) return;
    const matches = filterAutomationPackages(searchText);
    const hasSelectedOutsideFilter =
      selectedPackageId &&
      !matches.some((item) => item.id === selectedPackageId) &&
      getAutomationPackageById(selectedPackageId);
    const packagesToRender = hasSelectedOutsideFilter
      ? [getAutomationPackageById(selectedPackageId), ...matches]
      : matches;

    controls.packageSelect.innerHTML = '';

    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = packagesToRender.length ? 'Selecione o pacote' : 'Nenhum pacote encontrado';
    controls.packageSelect.appendChild(placeholder);

    packagesToRender.forEach((pkg) => {
      if (!pkg) return;
      const option = document.createElement('option');
      option.value = pkg.id;
      option.textContent = `${pkg.label} • ${pkg.description}`;
      controls.packageSelect.appendChild(option);
    });

    controls.packageSelect.disabled = packagesToRender.length === 0;
    if (controls.packageHint) {
      const availabilityLabel = matches.length === 1 ? 'disponível' : 'disponíveis';
      controls.packageHint.textContent = `${matches.length} pacote${matches.length === 1 ? '' : 's'} ${availabilityLabel}.`;
    }

    if (selectedPackageId && packagesToRender.some((item) => item?.id === selectedPackageId)) {
      controls.packageSelect.value = selectedPackageId;
    } else {
      controls.packageSelect.value = '';
    }

    renderAutomationVersionOptions(controls.version, controls.packageSelect.value, selectedVersion);
  }

  function rememberAutomationSelectValue(select) {
    if (!select || select.value === '__new__') return;
    select.dataset.previousValue = select.value;
  }

  function syncAutomationCreateSelectLabels(controls = getAutomationCreateControls()) {
    if (!controls?.form) return;
    controls.form.querySelectorAll('.hub-select-wrap').forEach((wrap) => {
      if (typeof hubEnhanceSelectWrap === 'function') {
        hubEnhanceSelectWrap(wrap);
      }
    });
  }

  function getAutomationCustomDayInputs(controls = getAutomationCreateControls()) {
    return Array.from(controls?.customDays?.querySelectorAll('input[name="automation_create_weekday"]') || []);
  }

  function getAutomationUploadDefaultHint() {
    return 'Use a descrição para pedir mudanças com IA ou envie um arquivo .cs, .java, .py ou .zip.';
  }

  function setAutomationUploadHint(message = getAutomationUploadDefaultHint(), state = '') {
    if (!automationCreateUploadHint) return;
    automationCreateUploadHint.textContent = message;
    automationCreateUploadHint.classList.toggle('is-error', state === 'error');
    automationCreateUploadHint.classList.toggle('is-success', state === 'success');
  }

  function formatAutomationFileSize(size = 0) {
    const bytes = Number(size || 0);
    if (!Number.isFinite(bytes) || bytes <= 0) return '';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  function getAutomationZipDisplayEntries(entryNames = []) {
    const uniqueEntries = Array.from(new Set(
      entryNames
        .map((name) => String(name || '').trim())
        .filter(Boolean),
    ));
    const fileEntries = uniqueEntries.filter((name) => !name.endsWith('/'));
    return fileEntries.length ? fileEntries : uniqueEntries;
  }

  function clearAutomationUploadSelectedState(controls = getAutomationCreateControls()) {
    if (controls?.uploadSelectedState) controls.uploadSelectedState.hidden = true;
    if (controls?.uploadSelectedName) controls.uploadSelectedName.textContent = '';
    if (controls?.uploadSelectedMeta) controls.uploadSelectedMeta.textContent = '';
    if (controls?.uploadZipSummary) controls.uploadZipSummary.hidden = true;
    if (controls?.uploadZipTitle) controls.uploadZipTitle.textContent = 'Arquivos dentro do ZIP';
    if (controls?.uploadZipList) controls.uploadZipList.innerHTML = '';
  }

  function renderAutomationUploadSelectedState(controls, file, options = {}) {
    if (!controls?.uploadSelectedState || !file) return;
    const languageLabel = options.language
      ? getAutomationLanguageLabel(options.language)
      : 'Linguagem não detectada';
    const fileSize = formatAutomationFileSize(file.size);
    const fileKind = options.isZip ? 'Pacote ZIP selecionado' : 'Arquivo de código selecionado';
    const metaParts = [fileKind, languageLabel, fileSize].filter(Boolean);

    if (controls.uploadSelectedName) controls.uploadSelectedName.textContent = file.name;
    if (controls.uploadSelectedMeta) controls.uploadSelectedMeta.textContent = metaParts.join(' · ');

    const zipEntries = options.isZip ? getAutomationZipDisplayEntries(options.zipEntryNames || []) : [];
    if (controls.uploadZipSummary && controls.uploadZipList) {
      controls.uploadZipSummary.hidden = !options.isZip;
      controls.uploadZipList.innerHTML = '';
      if (options.isZip) {
        const listedEntries = zipEntries.slice(0, 30);
        if (controls.uploadZipTitle) {
          controls.uploadZipTitle.textContent = zipEntries.length
            ? `Arquivos dentro do ZIP (${zipEntries.length})`
            : 'Arquivos dentro do ZIP';
        }
        if (listedEntries.length) {
          controls.uploadZipList.innerHTML = listedEntries
            .map((name) => `<li><span class="material-symbols-rounded" aria-hidden="true">description</span><span>${escapeHtmlWes(name)}</span></li>`)
            .join('');
          if (zipEntries.length > listedEntries.length) {
            controls.uploadZipList.insertAdjacentHTML(
              'beforeend',
              `<li class="automation-upload-zip-more"><span class="material-symbols-rounded" aria-hidden="true">more_horiz</span><span>Mais ${zipEntries.length - listedEntries.length} arquivo(s)</span></li>`,
            );
          }
        } else {
          controls.uploadZipList.innerHTML = '<li><span class="material-symbols-rounded" aria-hidden="true">error</span><span>Não foi possível listar os arquivos deste ZIP.</span></li>';
        }
      }
    }

    controls.uploadSelectedState.hidden = false;
  }

  function detectAutomationLanguageFromNames(names = []) {
    const scores = { csharp: 0, java: 0, python: 0 };
    names.forEach((name) => {
      const normalized = String(name || '').toLowerCase();
      if (!normalized) return;
      if (
        normalized.endsWith('.cs') ||
        normalized.endsWith('.csproj') ||
        normalized.endsWith('.sln') ||
        normalized.includes('csharp') ||
        normalized.includes('c-sharp') ||
        normalized.includes('dotnet') ||
        normalized.includes('c#')
      ) {
        scores.csharp += 1;
      }
      if (
        normalized.endsWith('.java') ||
        normalized.endsWith('/pom.xml') ||
        normalized === 'pom.xml' ||
        normalized.endsWith('build.gradle') ||
        normalized.endsWith('gradlew')
      ) {
        scores.java += 1;
      }
      if (
        normalized.endsWith('.py') ||
        normalized.endsWith('/requirements.txt') ||
        normalized === 'requirements.txt' ||
        normalized.endsWith('/pyproject.toml') ||
        normalized === 'pyproject.toml' ||
        normalized.endsWith('/setup.py') ||
        normalized === 'setup.py'
      ) {
        scores.python += 1;
      }
    });

    return Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .find(([, score]) => score > 0)?.[0] || '';
  }

  function detectAutomationCodeFileLanguageFromNames(names = []) {
    const scores = { csharp: 0, java: 0, python: 0 };
    names.forEach((name) => {
      const normalized = String(name || '').toLowerCase();
      if (normalized.endsWith('.cs')) scores.csharp += 1;
      if (normalized.endsWith('.java')) scores.java += 1;
      if (normalized.endsWith('.py')) scores.python += 1;
    });

    return Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .find(([, score]) => score > 0)?.[0] || '';
  }

  async function readAutomationZipEntryNames(file) {
    const buffer = await file.arrayBuffer();
    const view = new DataView(buffer);
    const decoder = new TextDecoder();
    const names = [];
    for (let offset = 0; offset <= view.byteLength - 46 && names.length < 300; offset += 1) {
      if (view.getUint32(offset, true) !== 0x02014b50) continue;
      const nameLength = view.getUint16(offset + 28, true);
      const extraLength = view.getUint16(offset + 30, true);
      const commentLength = view.getUint16(offset + 32, true);
      const nameStart = offset + 46;
      const nameEnd = nameStart + nameLength;
      if (nameEnd > view.byteLength) break;
      names.push(decoder.decode(new Uint8Array(buffer, nameStart, nameLength)));
      offset = nameEnd + extraLength + commentLength - 1;
    }
    return names;
  }

  async function detectAutomationUploadLanguage(file) {
    const fromName = detectAutomationLanguageFromNames([file?.name]);
    if (fromName) return fromName;
    try {
      return detectAutomationLanguageFromNames(await readAutomationZipEntryNames(file));
    } catch {
      return '';
    }
  }

  function isAutomationZipUpload(file) {
    return String(file?.name || '').toLowerCase().endsWith('.zip');
  }

  function isAutomationSourceCodeUpload(file) {
    return /\.(cs|java|py)$/i.test(String(file?.name || ''));
  }

  async function readAutomationUploadedSourceCode(file) {
    if (!file || !isAutomationSourceCodeUpload(file)) return '';
    return file.text();
  }

  function getAutomationCodeLanguageMeta(language) {
    if (language === 'java') {
      return { label: 'Java', className: 'AutomacaoGerada', functionName: 'executar' };
    }
    if (language === 'python') {
      return { label: 'Python', className: 'automacao_gerada', functionName: 'executar' };
    }
    return { label: 'C#', className: 'AutomacaoGerada', functionName: 'RunAsync' };
  }

  function toAutomationCodeIdentifier(value, fallback = 'AutomacaoGerada') {
    const cleaned = String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9]+/g, ' ')
      .trim()
      .split(/\s+/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
    return cleaned || fallback;
  }

  function buildAutomationGeneratedCode(controls, draftParams) {
    const language = String(draftParams?.language || controls?.language?.value || 'csharp');
    const meta = getAutomationCodeLanguageMeta(language);
    const name = String(controls?.name?.value || 'Automação gerada').trim();
    const description = String(draftParams?.description || controls?.description?.value || 'Sem descrição').trim();
    const className = toAutomationCodeIdentifier(name, meta.className);
    const scheduleLine = draftParams?.schedule
      ? `${draftParams.schedule.frequency} às ${draftParams.schedule.time}`
      : 'execução manual';
    const resourceLines = [];
    if (draftParams?.input_files?.length) resourceLines.push(`Arquivos: ${draftParams.input_files.join(', ')}`);
    if (draftParams?.credentials?.length) resourceLines.push(`Credenciais: ${draftParams.credentials.join(', ')}`);
    const resources = resourceLines.length ? resourceLines.join(' | ') : 'Sem recursos externos';

    if (language === 'python') {
      return [
        'import json',
        'from datetime import datetime',
        '',
        '',
        `def ${meta.functionName}():`,
        `    """${description.replace(/"/g, '\\"')}"""`,
        '    contexto = {',
        `        "nome": "${name.replace(/"/g, '\\"')}",`,
        `        "agendamento": "${scheduleLine.replace(/"/g, '\\"')}",`,
        `        "recursos": "${resources.replace(/"/g, '\\"')}",`,
        '        "gerado_em": datetime.utcnow().isoformat(),',
        '    }',
        '    print(json.dumps(contexto, ensure_ascii=False))',
        '    return contexto',
        '',
        '',
        'if __name__ == "__main__":',
        `    ${meta.functionName}()`,
      ].join('\n');
    }

    if (language === 'java') {
      return [
        'import java.time.Instant;',
        '',
        `public class ${className} {`,
        `    public void ${meta.functionName}() {`,
        `        String nome = "${name.replace(/"/g, '\\"')}";`,
        `        String descricao = "${description.replace(/"/g, '\\"')}";`,
        `        String agendamento = "${scheduleLine.replace(/"/g, '\\"')}";`,
        `        String recursos = "${resources.replace(/"/g, '\\"')}";`,
        '        System.out.println("Executando " + nome);',
        '        System.out.println(descricao);',
        '        System.out.println("Agendamento: " + agendamento);',
        '        System.out.println("Recursos: " + recursos);',
        '        System.out.println("Gerado em: " + Instant.now());',
        '    }',
        '}',
      ].join('\n');
    }

    return [
      'using System;',
      'using System.Threading.Tasks;',
      '',
      `public class ${className}`,
      '{',
      `    public async Task ${meta.functionName}()`,
      '    {',
      `        var nome = "${name.replace(/"/g, '\\"')}";`,
      `        var descricao = "${description.replace(/"/g, '\\"')}";`,
      `        var agendamento = "${scheduleLine.replace(/"/g, '\\"')}";`,
      `        var recursos = "${resources.replace(/"/g, '\\"')}";`,
      '        Console.WriteLine($"Executando {nome}");',
      '        Console.WriteLine(descricao);',
      '        Console.WriteLine($"Agendamento: {agendamento}");',
      '        Console.WriteLine($"Recursos: {recursos}");',
      '        await Task.CompletedTask;',
      '    }',
      '}',
    ].join('\n');
  }

  function buildAutomationZipPreviewCode(file, entryNames = []) {
    const listedEntries = entryNames.slice(0, 20);
    const lines = [
      `// Pacote de código enviado: ${file?.name || 'automacao.zip'}`,
      '// O ZIP será usado como novo código da automação.',
      '// Arquivos identificados no pacote:',
      ...(
        listedEntries.length
          ? listedEntries.map((name) => `// - ${name}`)
          : ['// - Não foi possível listar os arquivos do ZIP neste navegador.']
      ),
    ];
    if (entryNames.length > listedEntries.length) {
      lines.push(`// - ... mais ${entryNames.length - listedEntries.length} arquivo(s)`);
    }
    return lines.join('\n');
  }

  function getAutomationCodeHistory(paramsObject = {}) {
    const history = Array.isArray(paramsObject.code_history) ? paramsObject.code_history : [];
    return history
      .map((entry, index) => ({
        id: String(entry?.id || `version-${index + 1}`).trim(),
        version: Number(entry?.version || index + 1),
        title: String(entry?.title || `Versão ${index + 1}`).trim(),
        source: String(entry?.source || 'Código').trim(),
        description: String(entry?.description || '').trim(),
        code: String(entry?.code || '').trim(),
        createdAt: String(entry?.createdAt || '').trim(),
      }))
      .filter((entry) => entry.code || entry.description);
  }

  function formatAutomationHistoryTimestamp(value = '') {
    const date = value ? new Date(value) : new Date();
    if (Number.isNaN(date.getTime())) return 'Hoje';
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  function getAutomationHistorySourceLabel(paramsObject = {}) {
    if (paramsObject.source === 'file') return 'Upload';
    if (paramsObject.source === 'mock_ai') return 'IA';
    if (paramsObject.source === 'saved_code') return 'Salvo';
    return 'Criação';
  }

  function createAutomationCodeHistoryEntry(paramsObject, code, overrides = {}) {
    const history = getAutomationCodeHistory(paramsObject);
    const version = history.length + 1;
    return {
      id: `code-${Date.now().toString(36)}-${version}`,
      version,
      title: overrides.title || (version === 1 ? 'Código inicial' : `Versão ${version}`),
      source: overrides.source || getAutomationHistorySourceLabel(paramsObject),
      description: String(overrides.description || paramsObject.description || '').trim(),
      code: String(code || paramsObject.generated_code || '').trim(),
      createdAt: overrides.createdAt || new Date().toISOString(),
    };
  }

  function ensureAutomationCodeHistory(paramsObject = {}, code = '') {
    const nextParams = paramsObject && typeof paramsObject === 'object' ? paramsObject : {};
    const history = getAutomationCodeHistory(nextParams);
    if (history.length) {
      nextParams.code_history = history;
      return nextParams;
    }
    const initialCode = String(code || nextParams.generated_code || '').trim();
    if (!initialCode) {
      nextParams.code_history = [];
      return nextParams;
    }
    nextParams.code_history = [
      createAutomationCodeHistoryEntry(nextParams, initialCode, {
        title: 'Código inicial',
        source: nextParams.current_preview ? 'Criação' : getAutomationHistorySourceLabel(nextParams),
        description: nextParams.description || 'Primeira versão registrada para esta automação.',
      }),
    ];
    return nextParams;
  }

  function appendAutomationCodeHistory(paramsObject = {}, code = '', overrides = {}) {
    const nextParams = ensureAutomationCodeHistory(paramsObject, paramsObject.generated_code || code);
    const history = getAutomationCodeHistory(nextParams);
    const entry = createAutomationCodeHistoryEntry(nextParams, code, overrides);
    nextParams.code_history = [...history, entry].map((item, index) => ({
      ...item,
      version: index + 1,
      title: item.title || `Versão ${index + 1}`,
    }));
    return nextParams;
  }

  function renderAutomationCodeHistory(controls = getAutomationCreateControls()) {
    if (!controls?.form || !controls.historyList || !controls.historyEmpty) return;
    let paramsObject = {};
    try {
      paramsObject = JSON.parse(controls.form.dataset.generatedDraft || '{}');
    } catch {
      paramsObject = {};
    }
    const history = getAutomationCodeHistory(paramsObject);
    controls.historyEmpty.hidden = history.length > 0;
    controls.historyList.innerHTML = history.length
      ? history.slice().reverse().map((entry) => `
        <article class="automation-code-history-item">
          <div class="automation-code-history-item-head">
            <div>
              <h6 class="automation-code-history-item-title">Versão ${escapeHtmlWes(entry.version)} · ${escapeHtmlWes(entry.title)}</h6>
              <p class="automation-code-history-item-meta">${escapeHtmlWes(formatAutomationHistoryTimestamp(entry.createdAt))}</p>
            </div>
            <span class="automation-code-history-source">${escapeHtmlWes(entry.source)}</span>
          </div>
          <p class="automation-code-history-description">${escapeHtmlWes(entry.description || 'Sem descrição registrada.')}</p>
          <pre class="automation-code-history-code"><code>${escapeHtmlWes(entry.code || '// Código não disponível')}</code></pre>
        </article>
      `).join('')
      : '';
  }

  function updateAutomationGeneratedDraftCode(controls, code, extraParams = {}) {
    if (!controls?.form) return;
    let draftParams = {};
    try {
      draftParams = JSON.parse(controls.form.dataset.generatedDraft || '{}');
    } catch {
      draftParams = {};
    }
    const shouldAppendHistory = Boolean(extraParams.appendHistory);
    const historyTitle = extraParams.historyTitle;
    const historySource = extraParams.historySource;
    const historyDescription = extraParams.historyDescription;
    draftParams = {
      ...draftParams,
      ...extraParams,
      language: controls.language?.value || draftParams.language || 'csharp',
      generated_code: code,
    };
    delete draftParams.appendHistory;
    delete draftParams.historyTitle;
    delete draftParams.historySource;
    delete draftParams.historyDescription;

    const currentHistory = getAutomationCodeHistory(draftParams);
    if (shouldAppendHistory && currentHistory.length) {
      draftParams.code_history = currentHistory;
      draftParams = appendAutomationCodeHistory(draftParams, code, {
        title: historyTitle,
        source: historySource,
        description: historyDescription || draftParams.description,
      });
    } else if (shouldAppendHistory && draftParams.previous_code) {
      draftParams = ensureAutomationCodeHistory(draftParams, draftParams.previous_code);
      draftParams = appendAutomationCodeHistory(draftParams, code, {
        title: historyTitle,
        source: historySource,
        description: historyDescription || draftParams.description,
      });
    } else if (shouldAppendHistory) {
      draftParams.code_history = [
        createAutomationCodeHistoryEntry(draftParams, code, {
          title: historyTitle || 'Código inicial',
          source: historySource || getAutomationHistorySourceLabel(draftParams),
          description: historyDescription || draftParams.description,
        }),
      ];
    } else {
      draftParams = ensureAutomationCodeHistory(draftParams, code);
    }
    controls.form.dataset.generatedDraft = JSON.stringify(draftParams);
    renderAutomationCodeHistory(controls);
  }

  function setAutomationCodePreviewState(controls, state, code = '') {
    if (!controls?.form || !controls.codePreview || !controls.codeContent) return;
    const isRejected = state === 'rejected';
    const hasCode = Boolean(code);
    controls.codePreview.hidden = !hasCode && !isRejected;
    controls.codeContent.textContent = code;
    controls.form.dataset.codeApproval = hasCode || isRejected ? state : '';
    if (!hasCode && !isRejected) {
      delete controls.form.dataset.generatedCode;
      controls.codePreview.removeAttribute('data-state');
      if (controls.codeApprove) controls.codeApprove.hidden = false;
      if (controls.codeReject) controls.codeReject.hidden = false;
      if (controls.codeRejectedState) controls.codeRejectedState.hidden = true;
      if (controls.submit) controls.submit.disabled = false;
      return;
    }

    if (hasCode) {
      controls.form.dataset.generatedCode = code;
    } else {
      delete controls.form.dataset.generatedCode;
    }
    controls.codePreview.dataset.state = state;
    if (controls.submit) controls.submit.disabled = state === 'pending' || state === 'rejected';
    if (controls.codeApprove) controls.codeApprove.hidden = state !== 'pending';
    if (controls.codeReject) controls.codeReject.hidden = state !== 'pending';
    if (controls.codeRejectedState) controls.codeRejectedState.hidden = state !== 'rejected';
    if (state === 'rejected') scheduleLucideRefresh();
    if (controls.codeStatus) {
      if (state === 'current') {
        controls.codeStatus.textContent = 'Código atual da automação. Use a descrição para pedir mudanças com IA ou envie um novo arquivo.';
      } else if (state === 'approved') {
        controls.codeStatus.textContent = 'Código aprovado. A automação já pode ser criada.';
      } else if (state === 'uploaded') {
        controls.codeStatus.textContent = 'Pacote ZIP selecionado. Revise os arquivos identificados e salve a automação para usar este código.';
      } else if (state === 'rejected') {
        controls.codeStatus.textContent = 'A primeira versão não ficou como esperado. Ajuste a descrição e gere uma nova tentativa.';
      } else {
        controls.codeStatus.textContent = 'Revise o código gerado antes de criar a automação.';
      }
    }
    if (controls.codeBadge) {
      controls.codeBadge.textContent = state === 'current'
        ? 'Atual'
        : state === 'approved'
        ? 'Aprovado'
        : state === 'uploaded'
        ? 'Upload'
        : state === 'rejected'
          ? 'Reprovado'
          : 'Pendente';
    }
    renderAutomationCodeHistory(controls);
  }

  function clearAutomationCodePreview(controls = getAutomationCreateControls()) {
    if (!controls?.form) return;
    delete controls.form.dataset.codeApproval;
    delete controls.form.dataset.generatedCode;
    clearAutomationUploadSelectedState(controls);
    if (controls.historyPanel) controls.historyPanel.hidden = true;
    if (controls.historyToggle) controls.historyToggle.setAttribute('aria-expanded', 'false');
    if (controls.historyList) controls.historyList.innerHTML = '';
    if (controls.historyEmpty) controls.historyEmpty.hidden = true;
    setAutomationCodePreviewState(controls, '', '');
  }

  function closeAutomationAiEditPrompt(controls = getAutomationCreateControls()) {
    if (controls?.aiPrompt) controls.aiPrompt.hidden = true;
    if (controls?.aiInput) controls.aiInput.value = '';
    if (controls?.aiSend) controls.aiSend.disabled = true;
  }

  function openAutomationAiEditPrompt(controls = getAutomationCreateControls()) {
    if (!controls?.aiPrompt) return;
    controls.aiPrompt.hidden = false;
    if (controls.aiSend) controls.aiSend.disabled = !String(controls.aiInput?.value || '').trim();
    window.setTimeout(() => controls.aiInput?.focus(), 0);
  }

  function loadAutomationCurrentCodePreview(controls, currentData) {
    if (!controls?.form || !currentData) return;
    const currentCode = currentData.generatedCode || buildAutomationGeneratedCode(controls, {
      ...(currentData.paramsObject || {}),
      source: currentData.generatedCode ? 'saved_code' : 'current_preview',
      language: currentData.language || controls.language?.value || 'csharp',
      scheduled: Boolean(currentData.scheduled),
      description: currentData.description || controls.description?.value || '',
      schedule: currentData.schedule ? {
        time: currentData.schedule.time,
        frequency: currentData.schedule.frequency,
      } : null,
    });
    updateAutomationGeneratedDraftCode(controls, currentCode, {
      ...(currentData.paramsObject || {}),
      source: currentData.generatedCode ? (currentData.paramsObject?.source || 'saved_code') : 'current_preview',
      current_preview: !currentData.generatedCode,
      description: currentData.description || '',
    });
    setAutomationCodePreviewState(controls, 'current', currentCode);
  }

  function buildAutomationMockAiDescription(promptText, controls) {
    const request = String(promptText || '').trim();
    const name = String(controls?.name?.value || 'esta automação').trim();
    const revisionTag = Date.now().toString(36).slice(-5).toUpperCase();
    const requestSummary = request
      ? `A mudança solicitada foi interpretada como: ${request}.`
      : 'A mudança solicitada foi interpretada como uma revisão geral do fluxo.';
    return [
      `Versão IA ${revisionTag} para ${name}.`,
      requestSummary,
      'A automação passa a validar entradas, registrar logs de execução, tratar falhas esperadas e entregar um resumo operacional para acompanhamento.',
    ].join(' ');
  }

  function generateAutomationCodeFromPrompt(controls, promptText = '') {
    if (!controls?.form) return false;
    const isEditMode = controls.form.dataset.mode === 'edit';
    const rawPrompt = String(promptText || controls.description?.value || '').trim();
    const description = isEditMode && rawPrompt
      ? buildAutomationMockAiDescription(rawPrompt, controls)
      : rawPrompt || 'Exemplo mockado: validar dados de entrada, registrar logs de execução e gerar um resumo operacional.';

    if (controls.description) controls.description.value = description;

    const resourceParams = readAutomationCreateResources(controls);
    if (!resourceParams) return false;
    const scheduleConfig = readAutomationScheduleConfig(controls, true);
    if (scheduleConfig === false) return false;

    let previousDraft = {};
    try {
      previousDraft = JSON.parse(controls.form.dataset.generatedDraft || '{}');
    } catch {
      previousDraft = {};
    }
    const previousHistory = getAutomationCodeHistory(previousDraft);
    const draftParams = {
      source: 'mock_ai',
      mocked: true,
      mock_description: isEditMode,
      language: controls.language?.value || 'csharp',
      scheduled: Boolean(controls.scheduled?.checked),
      description,
      ai_prompt: isEditMode ? rawPrompt : '',
      change_request: isEditMode,
      previous_code: isEditMode ? (controls.form.dataset.generatedCode || '') : '',
      code_history: previousHistory,
      ...resourceParams,
    };
    if (scheduleConfig) {
      draftParams.schedule = scheduleConfig;
      draftParams.horario_agendamento = scheduleConfig.time;
      draftParams.repeticao = scheduleConfig.frequency;
      draftParams.periodicidade = scheduleConfig.frequency;
      draftParams.data_inicio = scheduleConfig.start_date;
      draftParams.data_termino = scheduleConfig.end_date;
      draftParams.dias_semana = scheduleConfig.weekdays;
    }
    const generatedCode = buildAutomationGeneratedCode(controls, draftParams);
    draftParams.generated_code = generatedCode;
    controls.form.dataset.generatedDraft = JSON.stringify(draftParams);
    clearAutomationUploadSelectedState(controls);
    setAutomationCodePreviewState(controls, 'pending', generatedCode);
    setAutomationFormError(controls, '');
    closeAutomationAiEditPrompt(controls);
    showAppToast(isEditMode ? 'Prévia da mudança gerada com IA' : 'Código mockado gerado com IA');
    return true;
  }

  function syncAutomationScheduleDateBounds(controls = getAutomationCreateControls()) {
    if (!controls?.scheduleStartDate || !controls.scheduleEndDate) return;
    const startDate = controls.scheduleStartDate.value || getTodayDateInputValue();
    controls.scheduleEndDate.min = startDate;
    if (controls.scheduleEndDate.value && controls.scheduleEndDate.value < startDate) {
      controls.scheduleEndDate.value = startDate;
    }
  }

  function syncAutomationSchedulePanel(controls = getAutomationCreateControls(), options = {}) {
    if (!controls?.scheduled || !controls.schedulePanel) return;
    const isScheduled = controls.scheduled.checked;
    const isCustomFrequency = isScheduled && controls.scheduleFrequency?.value === 'custom';
    controls.schedulePanel.hidden = !isScheduled;
    controls.scheduled.setAttribute('aria-expanded', String(isScheduled));

    [controls.scheduleTime, controls.scheduleFrequency, controls.scheduleStartDate, controls.scheduleEndDate].forEach((field) => {
      if (field) field.disabled = !isScheduled;
    });

    if (controls.customDays) {
      controls.customDays.hidden = !isCustomFrequency;
    }
    getAutomationCustomDayInputs(controls).forEach((input) => {
      input.disabled = !isCustomFrequency;
      if (!isCustomFrequency) input.checked = false;
    });

    if (isScheduled) {
      if (controls.scheduleTime && !controls.scheduleTime.value) controls.scheduleTime.value = '09:00';
      if (controls.scheduleFrequency && !controls.scheduleFrequency.value) controls.scheduleFrequency.value = 'daily';
      if (controls.scheduleStartDate && !controls.scheduleStartDate.value) controls.scheduleStartDate.value = getTodayDateInputValue();
      if (controls.scheduleEndDate && !controls.scheduleEndDate.value) controls.scheduleEndDate.value = getFutureDateInputValue(5);
      syncAutomationScheduleDateBounds(controls);
      if (options.focus) {
        window.setTimeout(() => controls.scheduleTime?.focus(), 0);
      }
    }

    syncAutomationCreateSelectLabels(controls);
  }

  function handleAutomationResourceSelect(select, type) {
    if (!select) return;
    const controls = type === 'input-file'
      ? getAutomationResourceControls('input-file')
      : getAutomationResourceControls('credential');

    if (!select.value) {
      writeAutomationSelectedResources(select, []);
      updateAutomationResourceSummary(select, controls.summary, controls.singularLabel, controls.pluralLabel);
      return;
    }

    if (select.value === '__existing__') {
      rememberAutomationSelectValue(select);
      openAutomationResourcePicker(type);
      return;
    }

    if (type === 'input-file') {
      openInputFileModal({ targetSelect: select });
      return;
    }
    openCredentialModal(null, { targetSelect: select });
  }

  function readAutomationCreateResources(controls) {
    const resources = {};
    if (!controls) return resources;

    const inputFileValues = readAutomationSelectedResources(controls.inputFile);
    const credentialValues = readAutomationSelectedResources(controls.credential);

    if (inputFileValues.length) {
      resources.input_file_mode = 'existing';
      resources.input_files = inputFileValues;
      resources.input_file = inputFileValues[0];
    }

    if (credentialValues.length) {
      resources.credential_mode = 'existing';
      resources.credentials = credentialValues;
      resources.credential = credentialValues[0];
    }

    return resources;
  }

  function readAutomationScheduleConfig(controls, shouldValidate = false) {
    if (!controls?.scheduled?.checked) return null;

    const time = String(controls.scheduleTime?.value || '').trim();
    const frequency = String(controls.scheduleFrequency?.value || '').trim();
    const startDate = String(controls.scheduleStartDate?.value || '').trim();
    const endDate = String(controls.scheduleEndDate?.value || '').trim();
    const customWeekdays = getAutomationCustomDayInputs(controls)
      .filter((input) => input.checked)
      .map((input) => input.value);

    if (shouldValidate && !time) {
      setAutomationFormError(controls, 'Informe o horário do agendamento.');
      controls.scheduleTime?.focus();
      return false;
    }

    if (shouldValidate && !frequency) {
      setAutomationFormError(controls, 'Selecione a repetição do agendamento.');
      controls.scheduleFrequency?.focus();
      return false;
    }

    if (shouldValidate && !startDate) {
      setAutomationFormError(controls, 'Informe a data de início do agendamento.');
      controls.scheduleStartDate?.focus();
      return false;
    }

    if (shouldValidate && !endDate) {
      setAutomationFormError(controls, 'Informe a data de término do agendamento.');
      controls.scheduleEndDate?.focus();
      return false;
    }

    if (shouldValidate && startDate && endDate && endDate < startDate) {
      setAutomationFormError(controls, 'A data de término precisa ser igual ou posterior à data de início.');
      controls.scheduleEndDate?.focus();
      return false;
    }

    if (shouldValidate && frequency === 'custom' && customWeekdays.length === 0) {
      setAutomationFormError(controls, 'Selecione pelo menos um dia da semana.');
      getAutomationCustomDayInputs(controls)[0]?.focus();
      return false;
    }

    return {
      enabled: true,
      time,
      frequency,
      start_date: startDate,
      end_date: endDate,
      weekdays: frequency === 'custom' ? customWeekdays : [],
    };
  }

  function resetAutomationForm(controls, currentData = null) {
    if (!controls?.form) return;
    controls.form.reset();
    setAutomationFormError(controls, '');

    controls.priority.value = currentData?.priority || 'medium';
    controls.name.value = currentData?.name || '';
    controls.description.value = currentData?.description || '';
    if (controls.language) controls.language.value = currentData?.language || 'csharp';
    if (controls.scheduled) controls.scheduled.checked = Boolean(currentData?.scheduled);
    if (controls.scheduleTime) controls.scheduleTime.value = currentData?.schedule?.time || '09:00';
    if (controls.scheduleFrequency) controls.scheduleFrequency.value = currentData?.schedule?.frequency || 'daily';
    if (controls.scheduleStartDate) controls.scheduleStartDate.value = currentData?.schedule?.startDate || getTodayDateInputValue();
    if (controls.scheduleEndDate) controls.scheduleEndDate.value = currentData?.schedule?.endDate || getFutureDateInputValue(5);
    getAutomationCustomDayInputs(controls).forEach((input) => {
      input.checked = Boolean(currentData?.schedule?.weekdays?.includes(input.value));
    });
    if (controls.inputFile) {
      const inputFiles = currentData?.inputFiles || [];
      controls.inputFile.value = inputFiles.length ? '__existing__' : '';
      controls.inputFile.dataset.previousValue = '';
      writeAutomationSelectedResources(controls.inputFile, inputFiles);
    }
    if (controls.credential) {
      const credentials = currentData?.credentials || [];
      controls.credential.value = credentials.length ? '__existing__' : '';
      controls.credential.dataset.previousValue = '';
      writeAutomationSelectedResources(controls.credential, credentials);
    }
    if (controls.packageSearch) controls.packageSearch.value = '';
    if (controls.params) controls.params.value = currentData?.params || '{}';
    if (controls.form === automationCreateForm) {
      clearAutomationCodePreview(controls);
      closeAutomationAiEditPrompt(controls);
      if (currentData) {
        controls.form.dataset.generatedDraft = JSON.stringify(currentData.paramsObject || {});
        loadAutomationCurrentCodePreview(controls, currentData);
        setAutomationUploadHint('Peça uma mudança na descrição para a IA ou envie um novo arquivo de código para substituir a versão atual.');
      } else {
        delete controls.form.dataset.generatedDraft;
        setAutomationUploadHint();
      }
    } else if (!currentData && controls.form) {
      delete controls.form.dataset.generatedDraft;
    }

    if (controls.packageSelect && controls.version) {
      renderAutomationPackageOptions(controls, '', currentData?.packageId || '', currentData?.version || '');
    }

    rememberAutomationSelectValue(controls.inputFile);
    rememberAutomationSelectValue(controls.credential);
    updateAutomationResourceSummary(controls.inputFile, controls.inputFileSummary, 'arquivo', 'arquivos');
    updateAutomationResourceSummary(controls.credential, controls.credentialSummary, 'credencial', 'credenciais');
    syncAutomationSchedulePanel(controls);
    syncAutomationCreateSelectLabels(controls);
  }

  function readAutomationFormData(controls, row = null) {
    if (!controls) return null;
    setAutomationFormError(controls, '');

    const name = String(controls.name.value || '').trim();
    const priority = String(controls.priority.value || '').trim() || 'medium';
    const description = String(controls.description.value || '').trim();
    const packageId = String(controls.packageSelect?.value || '').trim();
    const version = String(controls.version?.value || '').trim();
    const language = String(controls.language?.value || '').trim();
    const isScheduled = Boolean(controls.scheduled?.checked);
    const paramsSource = String(controls.params?.value || controls.form?.dataset.generatedDraft || '').trim() || '{}';

    if (!name) {
      setAutomationFormError(controls, 'Informe o nome da automação.');
      controls.name.focus();
      return null;
    }

    if (controls.packageSelect && !packageId) {
      setAutomationFormError(controls, 'Selecione um pacote para a automação.');
      controls.packageSelect.focus();
      return null;
    }

    if (controls.version && !version) {
      setAutomationFormError(controls, 'Selecione uma versão para o pacote.');
      controls.version.focus();
      return null;
    }

    if (controls.language && !language) {
      setAutomationFormError(controls, 'Selecione a linguagem do código.');
      controls.language.focus();
      return null;
    }

    let paramsObject;
    try {
      paramsObject = JSON.parse(paramsSource);
    } catch {
      setAutomationFormError(controls, 'Os parâmetros precisam estar em JSON válido.');
      controls.params?.focus();
      return null;
    }
    paramsObject.language = language;
    paramsObject = ensureAutomationCodeHistory(paramsObject, paramsObject.generated_code || controls.form?.dataset.generatedCode || controls.codeContent?.textContent || '');

    const resourceParams = readAutomationCreateResources(controls);
    if (!resourceParams) return null;
    paramsObject = { ...paramsObject, ...resourceParams };
    if (!resourceParams.input_files) {
      delete paramsObject.input_file_mode;
      delete paramsObject.input_files;
      delete paramsObject.input_file;
    }
    if (!resourceParams.credentials) {
      delete paramsObject.credential_mode;
      delete paramsObject.credentials;
      delete paramsObject.credential;
    }

    const scheduleConfig = readAutomationScheduleConfig(controls, true);
    if (scheduleConfig === false) return null;
    if (scheduleConfig) {
      paramsObject.schedule = scheduleConfig;
      paramsObject.scheduled = true;
      paramsObject.horario_agendamento = scheduleConfig.time;
      paramsObject.repeticao = scheduleConfig.frequency;
      paramsObject.periodicidade = scheduleConfig.frequency;
      paramsObject.data_inicio = scheduleConfig.start_date;
      paramsObject.data_termino = scheduleConfig.end_date;
      paramsObject.dias_semana = scheduleConfig.weekdays;
    } else {
      delete paramsObject.schedule;
      delete paramsObject.horario_agendamento;
      delete paramsObject.repeticao;
      delete paramsObject.periodicidade;
      delete paramsObject.data_inicio;
      delete paramsObject.data_termino;
      delete paramsObject.dias_semana;
      paramsObject.scheduled = false;
    }

    const currentRowData = row ? readAutomationRowData(row) : null;
    return {
      id:
        currentRowData?.id ||
        `${slugifyAutomationName(name) || 'automacao'}-${Date.now().toString(36).slice(-4)}`,
      name,
      description,
      packageId: packageId || currentRowData?.packageId || language,
      version: version || currentRowData?.version || language,
      packageDisplay: controls.packageSelect
        ? ''
        : getAutomationLanguageLabel(language),
      priority,
      paramsObject,
      language,
      scheduled: isScheduled,
      lastExecution: currentRowData?.lastExecution || 'Ainda não executada',
      status: currentRowData?.status || 'active',
    };
  }

  function persistAutomationData(rowData, row = null) {
    const nextRow = createAutomationRow(rowData);
    if (row) {
      row.replaceWith(nextRow);
      showAppToast('Automação atualizada com sucesso');
      return;
    }

    const headerRow = automationsTable.querySelector('.data-row.header');
    if (headerRow?.nextSibling) {
      automationsTable.insertBefore(nextRow, headerRow.nextSibling);
    } else {
      automationsTable.appendChild(nextRow);
    }
    showAppToast('Automação criada com sucesso');
  }

  function setAutomationCreatePageMode(currentData = null) {
    const isEdit = Boolean(currentData);
    if (automationCreateForm) {
      automationCreateForm.dataset.mode = isEdit ? 'edit' : 'create';
      if (isEdit && currentData?.id) {
        automationCreateForm.dataset.editingAutomationId = currentData.id;
      } else {
        delete automationCreateForm.dataset.editingAutomationId;
      }
    }
    if (automationCreateTitle) automationCreateTitle.textContent = isEdit ? 'Editar automação' : 'Criar automação';
    if (automationCreateSubtitle) {
      automationCreateSubtitle.textContent = isEdit
        ? 'Atualize os dados principais e edite o código por descrição ou upload.'
        : 'Configure os dados principais e gere uma automação por descrição ou arquivo.';
    }
    if (automationCreateSubmit) automationCreateSubmit.textContent = isEdit ? 'Salvar alterações' : 'Criar automação';
    if (automationCreateGenerateBtn) {
      automationCreateGenerateBtn.innerHTML = `
        <span class="material-symbols-rounded" aria-hidden="true">auto_awesome</span>
        ${isEdit ? 'Editar com IA' : 'Gerar código com IA'}
      `;
    }
    if (automationCreateUploadBtn) {
      automationCreateUploadBtn.innerHTML = `
        <span class="material-symbols-rounded" aria-hidden="true">upload_file</span>
        ${isEdit ? 'Fazer upload de novo código' : 'Fazer upload do código'}
      `;
    }
    document.getElementById('page-automations-create')?.setAttribute('data-title', isEdit ? 'Editar automação' : 'Criar automação');
  }

  function findAutomationRowById(automationId) {
    const normalizedId = String(automationId || '').trim();
    if (!normalizedId) return null;
    return Array.from(automationsTable.querySelectorAll('.automation-row'))
      .find((row) => String(row.dataset.automationId || '').trim() === normalizedId) || null;
  }

  function openAutomationCreatePage(row = null, options = {}) {
    const controls = getAutomationCreateControls();
    if (!controls) return;
    activeAutomationRow = row;
    const currentData = row ? readAutomationRowData(row) : null;
    resetAutomationForm(controls, currentData);
    setAutomationCreatePageMode(currentData);
    const nextHash = currentData?.id
      ? `#/dashboard/automations/new?edit=${encodeURIComponent(currentData.id)}`
      : '#/dashboard/automations/new';
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
    if (options.focus !== false) {
      window.setTimeout(() => controls.name.focus(), 0);
    }
  }

  function syncAutomationCreateRouteState() {
    const { routeKey, queryParams } = getHashRouteInfo();
    if (routeKey !== 'dashboard/automations/new') return;
    const editId = queryParams.get('edit');
    if (!editId) {
      if (activeAutomationRow || automationCreateForm?.dataset.mode === 'edit') {
        activeAutomationRow = null;
        resetAutomationForm(getAutomationCreateControls());
        setAutomationCreatePageMode(null);
      }
      return;
    }
    const row = findAutomationRowById(editId);
    if (!row) {
      activeAutomationRow = null;
      resetAutomationForm(getAutomationCreateControls());
      setAutomationCreatePageMode(null);
      setAutomationFormError(getAutomationCreateControls(), 'Não foi possível encontrar a automação para edição.');
      return;
    }
    if (row !== activeAutomationRow || automationCreateForm?.dataset.mode !== 'edit') {
      openAutomationCreatePage(row, { focus: false });
    }
  }

  function openAutomationModalPanel(mode, row = null) {
    if (!hasAutomationModalForm) return;
    activeAutomationRow = row;
    const isEdit = mode === 'edit' && row;
    const currentData = isEdit ? readAutomationRowData(row) : null;
    const controls = getAutomationModalControls();

    automationModal.dataset.mode = isEdit ? 'edit' : 'create';
    automationModalTitle.textContent = isEdit ? 'Editar automação' : 'Criar automação';
    automationModalSubmit.textContent = isEdit ? 'Atualizar automação' : 'Criar automação';

    resetAutomationForm(controls, currentData);

    automationModal.classList.add('open');
    automationModal.setAttribute('aria-hidden', 'false');
    automationModalName.focus();
  }

  openAutomationModal.addEventListener('click', () => {
    openAutomationCreatePage();
  });

  resetAutomationForm(getAutomationCreateControls());
  setAutomationCreatePageMode(null);
  syncAutomationCreateRouteState();
  window.addEventListener('hashchange', syncAutomationCreateRouteState);

  function closeAutomationModalPanel() {
    activeAutomationRow = null;
    automationModal?.classList.remove('open');
    automationModal?.setAttribute('aria-hidden', 'true');
    setAutomationFormError(getAutomationModalControls(), '');
  }

  automationCreateBackBtn?.addEventListener('click', () => {
    activeAutomationRow = null;
    setAutomationCreatePageMode(null);
    resetAutomationForm(getAutomationCreateControls());
    window.location.hash = '#/dashboard/automations';
  });

  automationCreateCancelBtn?.addEventListener('click', () => {
    activeAutomationRow = null;
    setAutomationCreatePageMode(null);
    resetAutomationForm(getAutomationCreateControls());
    window.location.hash = '#/dashboard/automations';
  });

  automationCodeHistoryToggle?.addEventListener('click', () => {
    const controls = getAutomationCreateControls();
    if (!controls?.historyPanel) return;
    const shouldOpen = controls.historyPanel.hidden;
    controls.historyPanel.hidden = !shouldOpen;
    controls.historyToggle?.setAttribute('aria-expanded', String(shouldOpen));
    if (shouldOpen) renderAutomationCodeHistory(controls);
  });

  automationAiEditInput?.addEventListener('input', () => {
    const controls = getAutomationCreateControls();
    if (controls?.aiSend) {
      controls.aiSend.disabled = !String(controls.aiInput?.value || '').trim();
    }
  });

  automationAiEditInput?.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || event.shiftKey) return;
    event.preventDefault();
    const controls = getAutomationCreateControls();
    const promptText = String(controls?.aiInput?.value || '').trim();
    if (promptText) generateAutomationCodeFromPrompt(controls, promptText);
  });

  automationAiEditSend?.addEventListener('click', () => {
    const controls = getAutomationCreateControls();
    const promptText = String(controls?.aiInput?.value || '').trim();
    if (promptText) generateAutomationCodeFromPrompt(controls, promptText);
  });

  automationCreateInputFile?.addEventListener('focus', () => {
    rememberAutomationSelectValue(automationCreateInputFile);
  });

  automationCreateInputFile?.addEventListener('change', () => {
    handleAutomationResourceSelect(automationCreateInputFile, 'input-file');
  });

  automationCreateCredential?.addEventListener('focus', () => {
    rememberAutomationSelectValue(automationCreateCredential);
  });

  automationCreateCredential?.addEventListener('change', () => {
    handleAutomationResourceSelect(automationCreateCredential, 'credential');
  });

  automationCreateScheduled?.addEventListener('change', () => {
    syncAutomationSchedulePanel(getAutomationCreateControls(), { focus: automationCreateScheduled.checked });
  });

  automationCreateScheduleFrequency?.addEventListener('change', () => {
    syncAutomationSchedulePanel(getAutomationCreateControls());
  });

  automationCreateScheduleStartDate?.addEventListener('change', () => {
    syncAutomationScheduleDateBounds(getAutomationCreateControls());
  });

  automationCreateGenerateBtn?.addEventListener('click', () => {
    const controls = getAutomationCreateControls();
    if (controls?.form?.dataset.mode === 'edit') {
      openAutomationAiEditPrompt(controls);
      return;
    }
    generateAutomationCodeFromPrompt(controls);
  });

  automationCreateCodeApproveBtn?.addEventListener('click', () => {
    const controls = getAutomationCreateControls();
    const code = controls?.form?.dataset.generatedCode || controls?.codeContent?.textContent || '';
    if (!code) return;
    let draftParams = {};
    try {
      draftParams = JSON.parse(controls.form.dataset.generatedDraft || '{}');
    } catch {
      draftParams = {};
    }
    const isEditMode = controls.form.dataset.mode === 'edit';
    const isUploadApproval = draftParams.source === 'file';
    updateAutomationGeneratedDraftCode(controls, code, {
      appendHistory: true,
      historyTitle: isUploadApproval
        ? 'Código enviado por upload'
        : isEditMode
          ? 'Alteração aprovada com IA'
          : 'Código inicial',
      historySource: isUploadApproval ? 'Upload' : 'IA',
      historyDescription: draftParams.description || controls.description?.value || '',
    });
    setAutomationCodePreviewState(controls, 'approved', code);
    setAutomationFormError(controls, '');
    showAppToast('Código aprovado');
  });

  automationCreateCodeRejectBtn?.addEventListener('click', () => {
    const controls = getAutomationCreateControls();
    if (controls?.form) {
      try {
        const draftParams = JSON.parse(controls.form.dataset.generatedDraft || '{}');
        delete draftParams.generated_code;
        controls.form.dataset.generatedDraft = JSON.stringify(draftParams);
      } catch {
        controls.form.dataset.generatedDraft = '{}';
      }
    }
    setAutomationCodePreviewState(controls, 'rejected', '');
    showAppToast('Código reprovado. Ajuste a descrição e gere novamente');
  });

  automationCreateUploadBtn?.addEventListener('click', () => {
    automationCreateUploadInput?.click();
  });

  automationUploadChangeBtn?.addEventListener('click', () => {
    automationCreateUploadInput?.click();
  });

  automationCreateUploadInput?.addEventListener('change', async () => {
    const file = automationCreateUploadInput.files?.[0];
    const controls = getAutomationCreateControls();
    if (!file) {
      clearAutomationUploadSelectedState(controls);
      setAutomationUploadHint();
      return;
    }

    const isZipUpload = isAutomationZipUpload(file);
    const isSourceUpload = isAutomationSourceCodeUpload(file);
    if (!isZipUpload && !isSourceUpload) {
      automationCreateUploadInput.value = '';
      clearAutomationUploadSelectedState(controls);
      const message = 'Envie um arquivo .cs, .java, .py ou .zip com código C#, Java ou Python.';
      setAutomationFormError(controls, message);
      setAutomationUploadHint(message, 'error');
      showAppToast(message);
      return;
    }

    setAutomationFormError(controls, '');
    const zipEntryNames = isZipUpload ? await readAutomationZipEntryNames(file).catch(() => []) : [];
    const zipDetectedLanguage = isZipUpload ? detectAutomationCodeFileLanguageFromNames(zipEntryNames) : '';
    const detectedLanguage = isZipUpload
      ? zipDetectedLanguage
      : await detectAutomationUploadLanguage(file);
    if (isZipUpload && !detectedLanguage) {
      automationCreateUploadInput.value = '';
      clearAutomationUploadSelectedState(controls);
      const message = 'O ZIP precisa conter pelo menos um arquivo de código .cs, .java ou .py.';
      setAutomationFormError(controls, message);
      setAutomationUploadHint(message, 'error');
      showAppToast(message);
      return;
    }
    if (detectedLanguage && controls?.language && controls.language.value !== detectedLanguage) {
      controls.language.value = detectedLanguage;
      syncAutomationCreateSelectLabels(controls);
      showAppToast(`Linguagem alterada para ${getAutomationLanguageLabel(detectedLanguage)}`);
    }

    renderAutomationUploadSelectedState(controls, file, {
      isZip: isZipUpload,
      language: controls?.language?.value || detectedLanguage,
      zipEntryNames,
    });

    const languageLabel = detectedLanguage
      ? ` Linguagem detectada: ${getAutomationLanguageLabel(detectedLanguage)}.`
      : ' Não foi possível detectar a linguagem automaticamente.';
    setAutomationUploadHint(
      isZipUpload
        ? `ZIP selecionado: ${file.name}.${languageLabel} Revise os arquivos listados antes de salvar.`
        : `Código selecionado: ${file.name}.${languageLabel} Revise a pré-visualização e aprove se este for o código correto.`,
      'success',
    );

    let paramsObject = {};
    try {
      paramsObject = JSON.parse(automationCreateForm.dataset.generatedDraft || '{}');
    } catch {
      paramsObject = {};
    }
    paramsObject.source = 'file';
    paramsObject.reference_file = file.name;
    paramsObject.reference_file_type = file.type || 'desconhecido';
    paramsObject.reference_file_size = file.size || 0;
    paramsObject.zip_entries = isZipUpload ? getAutomationZipDisplayEntries(zipEntryNames) : [];
    paramsObject.language = controls?.language?.value || detectedLanguage || 'csharp';
    Object.assign(paramsObject, readAutomationCreateResources(controls));
    const scheduleConfig = readAutomationScheduleConfig(controls, true);
    if (scheduleConfig === false) return;
    paramsObject.scheduled = Boolean(controls?.scheduled?.checked);
    if (scheduleConfig) {
      paramsObject.schedule = scheduleConfig;
      paramsObject.horario_agendamento = scheduleConfig.time;
      paramsObject.repeticao = scheduleConfig.frequency;
      paramsObject.periodicidade = scheduleConfig.frequency;
      paramsObject.data_inicio = scheduleConfig.start_date;
      paramsObject.data_termino = scheduleConfig.end_date;
      paramsObject.dias_semana = scheduleConfig.weekdays;
    }
    const uploadedCode = isSourceUpload
      ? await readAutomationUploadedSourceCode(file)
      : buildAutomationZipPreviewCode(file, zipEntryNames);
    paramsObject.generated_code = uploadedCode;
    automationCreateForm.dataset.generatedDraft = JSON.stringify(paramsObject);
    setAutomationCodePreviewState(controls, isZipUpload ? 'uploaded' : 'pending', uploadedCode);
  });

  automationModalPackageSearch?.addEventListener('input', () => {
    const controls = getAutomationModalControls();
    renderAutomationPackageOptions(
      controls,
      automationModalPackageSearch.value,
      automationModalPackage.value,
      automationModalVersion.value,
    );
  });

  automationModalPackage?.addEventListener('change', () => {
    renderAutomationVersionOptions(automationModalVersion, automationModalPackage.value);
  });

  automationModal?.addEventListener('click', (event) => {
    if (event.target.closest('[data-modal-close]')) closeAutomationModalPanel();
  });

  automationsTable.addEventListener('click', async (event) => {
    const editButton = event.target.closest('.automation-edit-trigger');
    if (editButton) {
      const row = editButton.closest('.automation-row');
      if (row) openAutomationCreatePage(row);
      return;
    }

    const deleteButton = event.target.closest('.automation-delete-trigger');
    if (deleteButton) {
      const row = deleteButton.closest('.automation-row');
      if (!row) return;
      if (!(await confirmDeletionAction('esta automação'))) return;
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

  automationCreateForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const controls = getAutomationCreateControls();
    if (controls?.form?.dataset.codeApproval === 'pending') {
      setAutomationFormError(controls, 'Aprove ou reprove o código gerado antes de criar a automação.');
      controls.codePreview?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (controls?.form?.dataset.codeApproval === 'rejected') {
      setAutomationFormError(controls, 'Altere a descrição para gerar o código como deseja e gere novamente.');
      controls.codePreview?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    const rowData = readAutomationFormData(controls, activeAutomationRow);
    if (!rowData) return;
    persistAutomationData(rowData, activeAutomationRow);
    activeAutomationRow = null;
    setAutomationCreatePageMode(null);
    resetAutomationForm(controls);
    window.location.hash = '#/dashboard/automations';
  });

  automationModalForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const rowData = readAutomationFormData(getAutomationModalControls(), activeAutomationRow);
    if (!rowData) return;
    persistAutomationData(rowData, activeAutomationRow);
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

if (executionsTable && executionDetailsModal) {
  let activeExecutionRecording = null;
  let executionRecordingDownloadUrl = '';
  let activeExecutionLogs = [];

  const executionLogSeedRows = [
    { date: '07/05/2026, 23:48:04', level: 'DEBUG', message: 'ExecutionContext initialized for src', runtime: '0,00' },
    { date: '07/05/2026, 23:48:04', level: 'DEBUG', message: 'Signal handlers registered (Windows-compatible)', runtime: '0,00' },
    { date: '07/05/2026, 23:48:04', level: 'INFO', message: 'Windows Skipper wrapper initialized for job 490404b5-8d20-43e4-b9df-c7ebf9b05343', runtime: '0,00' },
    { date: '07/05/2026, 23:48:04', level: 'INFO', message: 'Starting execution of main_tok.py', runtime: '0,00' },
    { date: '07/05/2026, 23:48:04', level: 'INFO', message: 'Status: running (10.0%) - Initializing execution', runtime: '0,00' },
    { date: '07/05/2026, 23:48:05', level: 'INFO', message: 'Loading automation package and runtime dependencies', runtime: '0,12' },
    { date: '07/05/2026, 23:48:05', level: 'DEBUG', message: 'Resolved working directory and environment variables', runtime: '0,18' },
    { date: '07/05/2026, 23:48:05', level: 'INFO', message: 'Input validation completed successfully', runtime: '0,26' },
    { date: '07/05/2026, 23:48:05', level: 'WARNING', message: 'Optional cache file not found; continuing with default configuration', runtime: '0,31' },
    { date: '07/05/2026, 23:48:06', level: 'INFO', message: 'Execution finished with status completed', runtime: '1,32' },
  ];

  const buildExecutionLogs = () => Array.from({ length: 40 }, (_, index) => {
    const item = executionLogSeedRows[index % executionLogSeedRows.length];
    return {
      ...item,
      runtime: index < 5 ? '0,00' : item.runtime,
    };
  });

  const getExecutionStatusMeta = (status) => {
    const normalized = String(status || '').toLowerCase();
    if (normalized.includes('conclu') || normalized.includes('complet')) {
      return { icon: 'check', className: 'success', label: status || 'Concluída' };
    }
    if (normalized.includes('interromp') || normalized.includes('paus')) {
      return { icon: 'pause', className: 'warning', label: status || 'Interrompida' };
    }
    if (normalized.includes('erro') || normalized.includes('falh')) {
      return { icon: 'close', className: 'danger', label: status || 'Falha' };
    }
    return { icon: 'sync', className: 'running', label: status || '-' };
  };

  const renderExecutionLogs = () => {
    if (!executionLogsRows || !executionLogsTitle) return;
    const level = executionLogsLevelFilter?.value || 'all';
    const query = String(executionLogsSearch?.value || '').trim().toLowerCase();
    const filteredLogs = activeExecutionLogs.filter((item) => {
      const matchesLevel = level === 'all' || item.level.toLowerCase() === level;
      const matchesQuery = !query || item.message.toLowerCase().includes(query) || item.date.toLowerCase().includes(query);
      return matchesLevel && matchesQuery;
    });

    executionLogsTitle.textContent = `Registros (${filteredLogs.length} de ${activeExecutionLogs.length})`;
    executionLogsRows.innerHTML = filteredLogs.map((item) => `
      <div class="data-row execution-logs-row">
        <span>${escapeHtmlWes(item.date)}</span>
        <span><span class="execution-log-level execution-log-level--${escapeHtmlWes(item.level.toLowerCase())}">${escapeHtmlWes(item.level)}</span></span>
        <span class="execution-log-message">${escapeHtmlWes(item.message)}</span>
        <span>${escapeHtmlWes(item.runtime)}</span>
      </div>
    `).join('');

    if (executionLogsClear) {
      executionLogsClear.disabled = level === 'all' && !query;
    }
  };

  const resetExecutionLogFilters = () => {
    if (executionLogsLevelFilter) {
      executionLogsLevelFilter.value = 'all';
      const wrap = executionLogsLevelFilter.closest('.hub-select-wrap');
      if (wrap) hubCustomSelectRefresh(wrap);
    }
    if (executionLogsSearch) {
      executionLogsSearch.value = '';
    }
  };

  const revokeExecutionRecordingDownloadUrl = () => {
    if (executionRecordingDownloadUrl) {
      URL.revokeObjectURL(executionRecordingDownloadUrl);
      executionRecordingDownloadUrl = '';
    }
  };

  const getExecutionRecordingData = (row) => {
    const hasRecording = row.dataset.executionRecordingAvailable === 'true' || row.dataset.executionRecording === 'Sim';
    const name = row.dataset.executionRecordingTitle || row.dataset.executionAutomation || '-';
    return {
      available: hasRecording,
      id: row.dataset.executionId || '-',
      name,
      title: `Gravação — ${name}`,
      duration: row.dataset.executionDuration || '-',
      recordedAt: row.dataset.executionRecordingRecordedAt || row.dataset.executionEnd || '-',
      mode: row.dataset.executionRecordingMode || 'Automático (até conclusão)',
      size: row.dataset.executionRecordingSize || '-',
      storage: row.dataset.executionRecordingStorage || '-',
      download: row.dataset.executionRecordingDownload || `${name.toLowerCase().replace(/\s+/g, '-')}.webm`,
    };
  };

  const fillExecutionRecordingModal = (recording) => {
    if (!recording || !executionRecordingModal) return;
    executionRecordingModalTitle.textContent = recording.title;
    executionRecordingId.textContent = recording.id;
    executionRecordingDuration.textContent = recording.duration;
    executionRecordingRecordedAt.textContent = recording.recordedAt;
    executionRecordingName.textContent = recording.name;
    executionRecordingMode.textContent = recording.mode;
    executionRecordingSize.textContent = recording.size;
    executionRecordingStorage.textContent = recording.storage;

    if (executionRecordingDownload) {
      revokeExecutionRecordingDownloadUrl();
      const payload = [
        `Gravação: ${recording.name}`,
        `ID da execução: ${recording.id}`,
        `Duração: ${recording.duration}`,
        `Gravado: ${recording.recordedAt}`,
        `Armazenamento: ${recording.storage}`,
      ].join('\n');
      executionRecordingDownloadUrl = URL.createObjectURL(new Blob([payload], { type: 'application/octet-stream' }));
      executionRecordingDownload.href = executionRecordingDownloadUrl;
      executionRecordingDownload.download = recording.download;
      executionRecordingDownload.setAttribute('aria-disabled', 'false');
    }
  };

  const openExecutionRecordingModal = () => {
    if (!executionRecordingModal || !activeExecutionRecording?.available) return;
    fillExecutionRecordingModal(activeExecutionRecording);
    closeExecutionDetailsModal();
    executionRecordingModal.classList.add('open');
    executionRecordingModal.setAttribute('aria-hidden', 'false');
  };

  const closeExecutionRecordingModal = () => {
    if (!executionRecordingModal) return;
    executionRecordingModal.classList.remove('open');
    executionRecordingModal.setAttribute('aria-hidden', 'true');
  };

  const fillExecutionDetailsModal = (row) => {
    if (!row) return;
    executionDetailsId.textContent = row.dataset.executionId || '-';
    executionDetailsStart.textContent = row.dataset.executionStart || '-';
    executionDetailsEnd.textContent = row.dataset.executionEnd || '-';
    executionDetailsDuration.textContent = row.dataset.executionDuration || '-';
    const statusMeta = getExecutionStatusMeta(row.dataset.executionStatus || '-');
    executionDetailsStatus.innerHTML = `
      <span class="execution-status-indicator execution-status-indicator--${escapeHtmlWes(statusMeta.className)}">
        <span class="material-symbols-rounded" aria-hidden="true">${escapeHtmlWes(statusMeta.icon)}</span>
      </span>
      <span>${escapeHtmlWes(statusMeta.label)}</span>
    `;
    activeExecutionLogs = buildExecutionLogs();
    resetExecutionLogFilters();
    renderExecutionLogs();
    activeExecutionRecording = getExecutionRecordingData(row);
    if (executionDetailsRecording) {
      executionDetailsRecording.textContent = row.dataset.executionRecording || '-';
    }
    if (executionDetailsRecordingButton) {
      executionDetailsRecordingButton.disabled = !activeExecutionRecording.available;
      executionDetailsRecordingButton.innerHTML = activeExecutionRecording.available
        ? '<span class="material-symbols-rounded" aria-hidden="true">play_circle</span>Ver gravação'
        : '<span class="material-symbols-rounded" aria-hidden="true">videocam_off</span>Sem gravação';
      executionDetailsRecordingButton.setAttribute(
        'aria-label',
        activeExecutionRecording.available ? 'Ver gravação' : 'Sem gravação disponível',
      );
    }
  };

  const openExecutionDetailsModal = () => {
    executionDetailsModal.classList.add('open');
    executionDetailsModal.setAttribute('aria-hidden', 'false');
  };

  const closeExecutionDetailsModal = () => {
    executionDetailsModal.classList.remove('open');
    executionDetailsModal.setAttribute('aria-hidden', 'true');
  };

  executionsTable.addEventListener('click', (event) => {
    const detailsButton = event.target.closest('.execution-details-trigger');
    if (!detailsButton) return;
    const row = detailsButton.closest('.execution-row');
    if (!row) return;
    fillExecutionDetailsModal(row);
    openExecutionDetailsModal();
  });

  executionDetailsModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-modal-close]')) {
      closeExecutionDetailsModal();
    }
  });

  executionLogsLevelFilter?.addEventListener('change', renderExecutionLogs);
  executionLogsSearch?.addEventListener('input', renderExecutionLogs);
  executionLogsClear?.addEventListener('click', () => {
    resetExecutionLogFilters();
    renderExecutionLogs();
  });

  executionDetailsRecordingButton?.addEventListener('click', openExecutionRecordingModal);

  executionRecordingModal?.addEventListener('click', (event) => {
    if (event.target.closest('[data-recording-modal-close]')) {
      closeExecutionRecordingModal();
    }
  });

  executionRecordingDownload?.addEventListener('click', (event) => {
    if (!activeExecutionRecording?.available) {
      event.preventDefault();
    }
  });
}

if (auditTableRows.length && auditDetailsModal) {
  const fillAuditDetailsModal = (row) => {
    if (!row) return;
    const cells = row.querySelectorAll('span');
    auditDetailsUser.textContent = cells[0]?.textContent?.trim() || '-';
    auditDetailsDate.textContent = cells[1]?.textContent?.trim() || '-';
    auditDetailsAction.textContent = cells[2]?.textContent?.trim() || '-';
    auditDetailsIp.textContent = cells[3]?.textContent?.trim() || '-';
    const kind = String(row.dataset.auditTargetKind || '').trim();
    const targetName = String(row.dataset.auditTargetName || '').trim();
    const field = String(row.dataset.auditField || '').trim();
    const from = String(row.dataset.auditFrom || '').trim();
    const to = String(row.dataset.auditTo || '').trim();
    const summary = String(row.dataset.auditSummary || '').trim();
    const type = String(row.dataset.auditType || '').trim().toLowerCase();

    auditDetailsTarget.textContent = kind && targetName ? `${kind}: ${targetName}` : targetName || kind || '-';

    let changeText = '-';
    if (type === 'create') {
      changeText = `Criado: ${targetName || 'item'}${kind ? ` (${kind})` : ''}`;
    } else if (type === 'delete') {
      changeText = `Apagado: ${targetName || 'item'}${kind ? ` (${kind})` : ''}`;
    } else if (type === 'edit') {
      if (field && (from || to)) changeText = `${field}: ${from || '-'} -> ${to || '-'}`;
      else if (from || to) changeText = `${from || '-'} -> ${to || '-'}`;
      else changeText = `Editado: ${targetName || 'item'}${kind ? ` (${kind})` : ''}`;
    }
    auditDetailsChange.textContent = changeText;
    auditDetailsSummary.textContent = summary || '-';
  };

  const openAuditDetailsModal = () => {
    auditDetailsModal.classList.add('open');
    auditDetailsModal.setAttribute('aria-hidden', 'false');
  };

  const closeAuditDetailsModal = () => {
    auditDetailsModal.classList.remove('open');
    auditDetailsModal.setAttribute('aria-hidden', 'true');
  };

  auditTableRows.forEach((row) => {
    const detailsButton = row.querySelector('.audit-view-btn');
    detailsButton?.addEventListener('click', () => {
      fillAuditDetailsModal(row);
      openAuditDetailsModal();
    });
  });

  auditDetailsModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-modal-close]')) {
      closeAuditDetailsModal();
    }
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

function normalizeLanguage(language) {
  const value = String(language || '').trim().toLowerCase();
  if (!value) return null;
  if (value === 'pt' || value === 'pt-br' || value === 'pt_br') return 'pt-BR';
  if (value.startsWith('en')) return 'en';
  if (value.startsWith('es')) return 'es';
  return Object.prototype.hasOwnProperty.call(SUPPORTED_LANGUAGES, language) ? language : null;
}

function isSupportedLanguage(language) {
  const normalized = normalizeLanguage(language);
  return Boolean(normalized && Object.prototype.hasOwnProperty.call(SUPPORTED_LANGUAGES, normalized));
}

function getLanguagePath(language = currentLanguage) {
  const normalizedLanguage = normalizeLanguage(language) || DEFAULT_LANGUAGE;
  return LANGUAGE_PATHS[normalizedLanguage] || LANGUAGE_PATHS[DEFAULT_LANGUAGE];
}

function resolveLanguageFromPath(pathname) {
  const value = String(pathname || '/').toLowerCase();
  if (/^\/en(?:\/|$)/.test(value)) return 'en';
  if (/^\/es(?:\/|$)/.test(value)) return 'es';
  return null;
}

function getSectionAnchor(sectionKey, language = currentLanguage) {
  const normalizedLanguage = normalizeLanguage(language) || DEFAULT_LANGUAGE;
  const anchors = SECTION_ANCHORS[normalizedLanguage] || SECTION_ANCHORS[DEFAULT_LANGUAGE];
  return anchors?.[sectionKey] || null;
}

function resolveSectionKeyFromHash(hash) {
  const value = decodeURIComponent(String(hash || ''))
    .replace(/^#/, '')
    .trim()
    .toLowerCase();
  if (!value) return null;
  for (const anchors of Object.values(SECTION_ANCHORS)) {
    const match = Object.entries(anchors).find(([, slug]) => slug === value);
    if (match) return match[0];
  }
  return null;
}

function getLocalizedHash(hash = window.location.hash, language = currentLanguage) {
  const sectionKey = resolveSectionKeyFromHash(hash);
  if (!sectionKey) return hash;
  const localizedAnchor = getSectionAnchor(sectionKey, language);
  return localizedAnchor ? `#${localizedAnchor}` : hash;
}

function syncLanguageUrl({ restoreHashTarget = false } = {}) {
  if (!window.history?.replaceState) return;
  const url = new URL(window.location.href);
  const localizedHash = getLocalizedHash(url.hash, currentLanguage);
  if (!window.location.hash.startsWith('#/')) {
    url.pathname = getLanguagePath(currentLanguage);
    url.searchParams.delete(LANGUAGE_QUERY_KEY);
  } else {
    url.searchParams.set(LANGUAGE_QUERY_KEY, currentLanguage);
  }
  url.hash = localizedHash;
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  if (!restoreHashTarget || !localizedHash || localizedHash.startsWith('#/')) return;
  window.requestAnimationFrame(() => {
    const target = document.getElementById(localizedHash.slice(1));
    target?.scrollIntoView();
  });
}

function syncLanguageUI() {
  const languageConfig = SUPPORTED_LANGUAGES[currentLanguage];
  if (!languageConfig) return;
  document.documentElement.lang = languageConfig.documentLang;
  if (currentLanguageFlag) currentLanguageFlag.setAttribute('src', languageConfig.flag);
  if (currentLanguageLabel) currentLanguageLabel.textContent = languageConfig.label;
  if (themeLightLabel && themeDarkLabel) {
    const isEnglish = currentLanguage === 'en';
    themeLightLabel.textContent = isEnglish ? 'Light' : 'Claro';
    themeDarkLabel.textContent = isEnglish ? 'Dark' : 'Escuro';
  }
  languageOptions.forEach((option) => {
    const isActive = option.dataset.languageOption === currentLanguage;
    option.classList.toggle('is-active', isActive);
    option.setAttribute('aria-pressed', String(isActive));
  });
}

function setLanguageMenuState(isOpen) {
  if (!languageSwitcher || !languageToggle || !languageMenu) return;
  languageSwitcher.classList.toggle('is-open', isOpen);
  languageToggle.setAttribute('aria-expanded', String(isOpen));
  languageMenu.hidden = !isOpen;
}

function persistLanguage(language) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // ignore storage failures
  }
}

function resolveInitialLanguage() {
  const pathLanguage = resolveLanguageFromPath(window.location.pathname);
  if (pathLanguage) return pathLanguage;
  const urlLanguage = normalizeLanguage(new URL(window.location.href).searchParams.get(LANGUAGE_QUERY_KEY));
  if (urlLanguage) return urlLanguage;
  const pageLanguage = normalizeLanguage(document.documentElement.dataset.pageLanguage);
  if (pageLanguage && isSupportedLanguage(pageLanguage)) return pageLanguage;
  try {
    const storedLanguage = normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
    if (storedLanguage && isSupportedLanguage(storedLanguage)) return storedLanguage;
  } catch {
    // ignore storage failures
  }
  return DEFAULT_LANGUAGE;
}

function setLanguage(language, { persist = true, restoreHashTarget = false } = {}) {
  currentLanguage = normalizeLanguage(language) || DEFAULT_LANGUAGE;
  syncLanguageUI();
  syncLanguageUrl({ restoreHashTarget });
  if (persist) persistLanguage(currentLanguage);
}

if (languageToggle && languageSwitcher && languageMenu) {
  currentLanguage = resolveInitialLanguage();
  syncLanguageUI();
  syncLanguageUrl();
  languageToggle.addEventListener('click', () => {
    const isOpen = !languageSwitcher.classList.contains('is-open');
    setLanguageMenuState(isOpen);
  });

  languageOptions.forEach((option) => {
    option.addEventListener('click', () => {
      const language = option.dataset.languageOption;
      if (!language) return;
      setLanguage(language);
      setLanguageMenuState(false);
    });
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (languageSwitcher.contains(target)) return;
    setLanguageMenuState(false);
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setLanguageMenuState(false);
  }
});

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

if (dismissibleInfoBanners.length) {
  dismissibleInfoBanners.forEach((banner) => {
    const closeButton = banner.querySelector('.banner-close');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        banner.remove();
      });
    }
  });
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

function escapeCsvCell(value) {
  return `"${String(value ?? '').replace(/\s+/g, ' ').trim().replace(/"/g, '""')}"`;
}

function downloadTextFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function exportSchedulesCsv() {
  if (!schedulesTable) return;

  const headers = ['Agendamento', 'Automação', 'Frequência', 'Status', 'Próxima execução'];
  const rows = Array.from(schedulesTable.querySelectorAll('.data-row:not(.header)'))
    .map((row) => Array.from(row.children)
      .slice(0, headers.length)
      .map((cell) => cell.textContent));

  if (!rows.length) {
    showAppToast('Nenhum agendamento para exportar');
    return;
  }

  const csv = [
    headers.map(escapeCsvCell).join(';'),
    ...rows.map((row) => row.map(escapeCsvCell).join(';')),
  ].join('\n');

  downloadTextFile('agendamentos.csv', `\uFEFF${csv}`, 'text/csv;charset=utf-8');
  showAppToast('Agendamentos exportados em CSV');
}

exportSchedulesCsvButton?.addEventListener('click', exportSchedulesCsv);

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

function hubCustomSelectResetMenuPosition(menu) {
  if (!menu) return;
  menu.style.position = '';
  menu.style.left = '';
  menu.style.right = '';
  menu.style.top = '';
  menu.style.bottom = '';
  menu.style.width = '';
  menu.style.maxHeight = '';
  menu.style.zIndex = '';
}

function hubCustomSelectCloseAll() {
  document.querySelectorAll('.hub-custom-select.is-open').forEach((wrap) => {
    wrap.classList.remove('is-open');
    wrap.classList.remove('open-up');
    const menu = wrap.querySelector('.hub-custom-menu');
    const tr = wrap.querySelector('.hub-custom-trigger');
    const chev = wrap.querySelector('.hub-select-chevron');
    if (menu) {
      menu.hidden = true;
      hubCustomSelectResetMenuPosition(menu);
    }
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
  dialog.classList.remove('has-open-select');
}

function hubPositionCustomMenu(wrap, menu) {
  if (!wrap || !menu) return;
  hubCustomSelectResetMenuPosition(menu);
  wrap.classList.remove('open-up');
  const wrapRect = wrap.getBoundingClientRect();
  const viewportPadding = 12;
  const maxMenuHeight = 260;
  const estimatedMenuHeight = Math.min(menu.scrollHeight || maxMenuHeight, maxMenuHeight);

  if (wrap.closest('.modal-dialog')) {
    const menuWidth = Math.max(wrapRect.width, 200);
    const left = Math.max(
      viewportPadding,
      Math.min(wrapRect.left, window.innerWidth - menuWidth - viewportPadding)
    );
    const spaceBelow = window.innerHeight - wrapRect.bottom - viewportPadding;
    const spaceAbove = wrapRect.top - viewportPadding;
    const openUp = spaceBelow < Math.max(estimatedMenuHeight, 180) && spaceAbove > spaceBelow;
    const availableSpace = Math.max(120, (openUp ? spaceAbove : spaceBelow) - 6);
    const menuHeight = Math.min(estimatedMenuHeight, availableSpace, maxMenuHeight);
    const top = openUp
      ? Math.max(viewportPadding, wrapRect.top - menuHeight - 6)
      : Math.min(window.innerHeight - viewportPadding - menuHeight, wrapRect.bottom + 6);

    if (openUp) wrap.classList.add('open-up');
    menu.style.position = 'fixed';
    menu.style.left = `${Math.round(left)}px`;
    menu.style.right = 'auto';
    menu.style.top = `${Math.round(top)}px`;
    menu.style.bottom = 'auto';
    menu.style.width = `${Math.round(menuWidth)}px`;
    menu.style.maxHeight = `${Math.round(menuHeight)}px`;
    menu.style.zIndex = '10000';
    return;
  }

  const boundsRect = wrap.closest('.modal-dialog')?.getBoundingClientRect() || {
    top: 0,
    bottom: window.innerHeight,
  };
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
  if (wrap.classList.contains('is-open') && !menu.hidden) {
    hubPositionCustomMenu(wrap, menu);
  }
}

function hubEnhanceSelectWrap(wrap) {
  const sel = wrap.querySelector('select.hub-select');
  if (!sel) return;
  if (!wrap.dataset.hubCustomReady) {
    wrap.dataset.hubCustomReady = 'true';
    wrap.classList.add('hub-custom-select');
    const icon = wrap.querySelector('.hub-select-icon');
    let chev = wrap.querySelector('.hub-select-chevron');
    if (!chev) {
      chev = document.createElement('span');
      chev.className = 'material-symbols-rounded hub-select-chevron';
      chev.setAttribute('aria-hidden', 'true');
      chev.textContent = 'expand_more';
    }
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
    trigger.appendChild(chev);
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
        chev.classList.add('is-open');
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

function initDocClassesMultiSelect() {
  const root = document.querySelector('[data-doc-classes-multiselect]');
  if (!root || root.dataset.bound === 'true') return;
  root.dataset.bound = 'true';

  const trigger = root.querySelector('.doc-classes-trigger');
  const label = root.querySelector('[data-doc-classes-label]');
  const menu = root.querySelector('[data-doc-classes-menu]');
  const options = Array.from(root.querySelectorAll('[data-doc-class-option]'));
  if (!trigger || !label || !menu || !options.length) return;

  const updateLabel = () => {
    const toLabel = (value) =>
      String(value || '')
        .replaceAll('_', ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
    const selected = options.filter((option) => option.checked).map((option) => toLabel(option.value));
    label.textContent = selected.length ? selected.join(', ') : 'Selecione ao menos uma classe';
  };

  const setOpen = (open) => {
    root.classList.toggle('is-open', open);
    menu.hidden = !open;
    trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  trigger.addEventListener('click', (event) => {
    event.stopPropagation();
    setOpen(!root.classList.contains('is-open'));
  });

  options.forEach((option) => {
    option.addEventListener('change', () => {
      const selected = options.filter((item) => item.checked);
      if (!selected.length) option.checked = true;
      updateLabel();
    });
  });

  document.addEventListener('click', (event) => {
    if (!root.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  updateLabel();
}

function initDocumentAnalysisValidation() {
  const page = document.getElementById('page-document-analysis');
  if (!page || page.dataset.validationBound === 'true') return;
  page.dataset.validationBound = 'true';

  const uploadInput = page.querySelector('#docUploadInput');
  const chooseLink = page.querySelector('#docUploadChooseLink');
  const uploadDropzone = page.querySelector('.document-upload-dropzone');
  const fileNameEl = page.querySelector('#docUploadFileName');
  const processBtn = page.querySelector('#docProcessButton');
  const formAreaEl = page.querySelector('#docAnalysisFormArea');
  const resultEl = page.querySelector('#docAnalysisResult');
  const statusCardEl = page.querySelector('#docAnalysisStatusCard');
  const resultContentEl = page.querySelector('#docAnalysisResultContent');
  const progressBarEl = page.querySelector('#docAnalysisProgressBar');
  const progressTextEl = page.querySelector('#docAnalysisProgressText');
  const exportBtn = page.querySelector('#docExportJsonButton');
  const changeFileBtn = page.querySelector('#docChangeFileButton');
  const skipPreprocessInput = page.querySelector('#docSkipPreprocessing');
  const handwritingHintsInput = page.querySelector('#docHandwritingHints');
  const resultFileNameEl = page.querySelector('#docResultFileName');
  const resultSummaryEl = page.querySelector('#docResultSummary');
  const resultClassesEl = page.querySelector('#docResultClasses');
  const resultClassEl = page.querySelector('#docResultClass');
  const resultConfidenceEl = page.querySelector('#docResultConfidence');
  const resultNeedsReviewEl = page.querySelector('#docResultNeedsReview');
  const resultOcrTextEl = page.querySelector('#docResultOcrText');
  const resultPage1El = page.querySelector('#docResultPage1');
  const resultPage2El = page.querySelector('#docResultPage2');
  const resultPage3El = page.querySelector('#docResultPage3');
  const resultFieldsEl = page.querySelector('#docResultFields');
  const resultTablesEl = page.querySelector('#docResultTables');
  const resultAlertsListEl = page.querySelector('#docResultAlertsList');
  const resultErrorsEl = page.querySelector('#docResultErrors');
  const resultCorrelationIdEl = page.querySelector('#docResultCorrelationId');
  const resultProcessingMsEl = page.querySelector('#docResultProcessingMs');
  const resultModelInfoEl = page.querySelector('#docResultModelInfo');
  const stepValidationEl = page.querySelector('#docStepValidation');
  const stepPreprocessEl = page.querySelector('#docStepPreprocess');
  const stepOcrEl = page.querySelector('#docStepOcr');
  const stepChunksEl = page.querySelector('#docStepChunks');
  const stepLlmChunksEl = page.querySelector('#docStepLlmChunks');
  const stepLlmConsolidationEl = page.querySelector('#docStepLlmConsolidation');
  const stepNormalizationEl = page.querySelector('#docStepNormalization');
  const stepTotalEl = page.querySelector('#docStepTotal');
  const stepOverheadEl = page.querySelector('#docStepOverhead');
  const resultThresholdEl = page.querySelector('#docResultThreshold');
  const resultLocaleEl = page.querySelector('#docResultLocale');
  const resultPreprocessEl = page.querySelector('#docResultPreprocess');
  const resultSkipPreprocessEl = page.querySelector('#docResultSkipPreprocess');
  const resultHandwritingHintsEl = page.querySelector('#docResultHandwritingHints');
  const thresholdInput = page.querySelector('#docClassificationThreshold');
  const localeSelect = page.querySelector('#docOcrLocale');
  const preprocessSelect = page.querySelector('#docPreprocessProfile');
  const classOptions = Array.from(page.querySelectorAll('[data-doc-class-option]'));
  if (
    !uploadInput ||
    !chooseLink ||
    !uploadDropzone ||
    !processBtn ||
    !formAreaEl ||
    !resultEl ||
    !statusCardEl ||
    !resultContentEl ||
    !progressBarEl ||
    !progressTextEl ||
    !exportBtn ||
    !changeFileBtn ||
    !skipPreprocessInput ||
    !handwritingHintsInput ||
    !resultFileNameEl ||
    !resultSummaryEl ||
    !resultClassEl ||
    !resultConfidenceEl ||
    !resultNeedsReviewEl ||
    !resultOcrTextEl ||
    !resultPage1El ||
    !resultPage2El ||
    !resultPage3El ||
    !resultFieldsEl ||
    !resultTablesEl ||
    !resultAlertsListEl ||
    !resultErrorsEl ||
    !resultCorrelationIdEl ||
    !resultProcessingMsEl ||
    !resultModelInfoEl ||
    !stepValidationEl ||
    !stepPreprocessEl ||
    !stepOcrEl ||
    !stepChunksEl ||
    !stepLlmChunksEl ||
    !stepLlmConsolidationEl ||
    !stepNormalizationEl ||
    !stepTotalEl ||
    !stepOverheadEl ||
    !resultClassesEl ||
    !resultThresholdEl ||
    !resultLocaleEl ||
    !resultPreprocessEl ||
    !resultSkipPreprocessEl ||
    !resultHandwritingHintsEl ||
    !thresholdInput ||
    !localeSelect ||
    !preprocessSelect ||
    !classOptions.length
  ) return;

  const allowedExt = new Set(['jpg', 'jpeg', 'png', 'pdf', 'bmp', 'tif', 'tiff']);
  let selectedFile = null;
  let isProcessing = false;
  const isMockMode = true;

  const getThresholdValue = () => {
    const raw = String(thresholdInput.value || '').trim().replace(',', '.');
    const parsed = Number(raw);
    return Number.isFinite(parsed) ? parsed : NaN;
  };

  const hasRequiredFields = () => {
    const hasClass = classOptions.some((option) => option.checked);
    const threshold = getThresholdValue();
    const validThreshold = threshold >= 0 && threshold <= 1;
    const hasLocale = Boolean(String(localeSelect.value || '').trim());
    const hasPreprocess = Boolean(String(preprocessSelect.value || '').trim());
    return hasClass && validThreshold && hasLocale && hasPreprocess;
  };

  const isAllowedFile = (file) => {
    if (!file || !file.name) return false;
    const ext = String(file.name).toLowerCase().split('.').pop();
    return allowedExt.has(ext || '');
  };

  const updateFileVisual = () => {
    if (!fileNameEl) return;
    if (!selectedFile) {
      fileNameEl.hidden = true;
      fileNameEl.textContent = '';
      return;
    }
    fileNameEl.hidden = false;
    fileNameEl.textContent = `Arquivo: ${selectedFile.name}`;
  };

  const updateButtonState = () => {
    if (isProcessing) {
      processBtn.disabled = true;
      return;
    }
    if (isMockMode) {
      processBtn.disabled = false;
      return;
    }
    const valid = Boolean(selectedFile) && hasRequiredFields();
    processBtn.disabled = !valid;
  };

  const assignFile = (file) => {
    if (!isAllowedFile(file)) {
      selectedFile = null;
      uploadInput.value = '';
      updateFileVisual();
      updateButtonState();
      return;
    }
    selectedFile = file;
    updateFileVisual();
    updateButtonState();
  };

  chooseLink.addEventListener('click', (event) => {
    event.preventDefault();
    uploadInput.click();
  });

  uploadDropzone.addEventListener('click', () => uploadInput.click());
  uploadDropzone.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    uploadInput.click();
  });

  uploadInput.addEventListener('change', () => {
    assignFile(uploadInput.files?.[0] || null);
  });

  uploadDropzone.addEventListener('dragover', (event) => {
    event.preventDefault();
    uploadDropzone.classList.add('is-dragover');
  });

  uploadDropzone.addEventListener('dragleave', () => {
    uploadDropzone.classList.remove('is-dragover');
  });

  uploadDropzone.addEventListener('drop', (event) => {
    event.preventDefault();
    uploadDropzone.classList.remove('is-dragover');
    const droppedFile = event.dataTransfer?.files?.[0] || null;
    assignFile(droppedFile);
  });

  thresholdInput.addEventListener('input', updateButtonState);
  thresholdInput.addEventListener('change', updateButtonState);
  localeSelect.addEventListener('change', updateButtonState);
  preprocessSelect.addEventListener('change', updateButtonState);
  classOptions.forEach((option) => option.addEventListener('change', updateButtonState));

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const setProgress = (value) => {
    const bounded = Math.max(0, Math.min(100, Math.round(value)));
    progressBarEl.style.width = `${bounded}%`;
    progressTextEl.textContent = `${bounded}%`;
  };

  const buildMockResult = () => ({
    resumo:
      'Documento processado em modo demonstração. A estrutura exibe resumo, classificação, OCR consolidado e detalhes por página para validação de layout e fluxo.',
    classificacao: {
      classePrevista: 'Documento Geral',
      confianca: 0.93,
      revisaoNecessaria: 'Não'
    },
    ocr: {
      textoCompleto:
        'Texto OCR mockado para demonstração.\n\nEste conteúdo simula a extração integral do documento com quebras de linha e organização pronta para leitura.',
      paginas: [
        'Página 1: Cabeçalho, identificação e contexto inicial do documento.',
        'Página 2: Corpo principal com informações organizadas por blocos.',
        'Página 3: Encerramento, observações e seção final.'
      ]
    },
    extracaoEstruturada: {
      campos: 'Nenhum campo',
      tabelas: 'Nenhuma tabela'
    },
    alertas: [
      'page 1: preprocess: upscaled low-resolution image',
      'page 2: preprocess: upscaled low-resolution image',
      'page 3: preprocess: upscaled low-resolution image'
    ],
    erros: 'Nenhum',
    metadados: {
      correlationId: 'de6f1fe2-ed48-4d8b-a5b5-33754d377426',
      processingMs: 27330,
      timings: {
        validation: 0,
        preprocess: 16819,
        ocr: 4890,
        chunks: 0,
        llmChunks: 5373,
        llmConsolidation: 0,
        normalization: 0,
        total: 27082,
        overhead: 248
      }
    },
    modelInfo: {
      wesOcrModel: 'prebuilt-read',
      wesAiApiVersion: '2024-12-01-preview',
      wesAiDeployment: 'wes-ai-gpt-5.2-chat'
    }
  });

  const getSelectedClasses = () =>
    classOptions
      .filter((option) => option.checked)
      .map((option) => String(option.value || '').replaceAll('_', ' '))
      .map((value) => value.replace(/\b\w/g, (char) => char.toUpperCase()));

  const fillResultMeta = () => {
    resultFileNameEl.textContent = selectedFile?.name || 'Sem arquivo selecionado';
    resultClassesEl.textContent = getSelectedClasses().join(', ') || '-';
    resultThresholdEl.textContent = thresholdInput.options[thresholdInput.selectedIndex]?.textContent || String(thresholdInput.value || '-');
    resultLocaleEl.textContent = localeSelect.options[localeSelect.selectedIndex]?.textContent || String(localeSelect.value || '-');
    resultPreprocessEl.textContent = preprocessSelect.options[preprocessSelect.selectedIndex]?.textContent || String(preprocessSelect.value || '-');
    resultSkipPreprocessEl.textContent = skipPreprocessInput.checked ? 'Sim' : 'Não';
    resultHandwritingHintsEl.textContent = handwritingHintsInput.checked ? 'Sim' : 'Não';
    const mock = buildMockResult();
    resultSummaryEl.textContent = mock.resumo;
    resultClassEl.textContent = mock.classificacao.classePrevista;
    const confidencePercent = `${Math.round(Number(mock.classificacao.confianca || 0) * 100)}%`;
    resultConfidenceEl.textContent = confidencePercent;
    resultNeedsReviewEl.textContent = mock.classificacao.revisaoNecessaria;
    resultOcrTextEl.textContent = mock.ocr.textoCompleto;
    resultPage1El.textContent = mock.ocr.paginas[0];
    resultPage2El.textContent = mock.ocr.paginas[1];
    resultPage3El.textContent = mock.ocr.paginas[2];
    resultFieldsEl.textContent = mock.extracaoEstruturada.campos;
    resultTablesEl.textContent = mock.extracaoEstruturada.tabelas;
    resultErrorsEl.textContent = mock.erros;
    resultCorrelationIdEl.textContent = mock.metadados.correlationId;
    resultProcessingMsEl.textContent = `${mock.metadados.processingMs} ms`;
    stepValidationEl.textContent = String(mock.metadados.timings.validation);
    stepPreprocessEl.textContent = String(mock.metadados.timings.preprocess);
    stepOcrEl.textContent = String(mock.metadados.timings.ocr);
    stepChunksEl.textContent = String(mock.metadados.timings.chunks);
    stepLlmChunksEl.textContent = String(mock.metadados.timings.llmChunks);
    stepLlmConsolidationEl.textContent = String(mock.metadados.timings.llmConsolidation);
    stepNormalizationEl.textContent = String(mock.metadados.timings.normalization);
    stepTotalEl.textContent = String(mock.metadados.timings.total);
    stepOverheadEl.textContent = String(mock.metadados.timings.overhead);
    resultAlertsListEl.innerHTML = '';
    mock.alertas.forEach((alert) => {
      const li = document.createElement('li');
      li.textContent = alert;
      resultAlertsListEl.appendChild(li);
    });
    resultModelInfoEl.textContent = JSON.stringify(mock.modelInfo, null, 2);
  };

  const buildExportPayload = () => ({
    ...buildMockResult(),
    status: 'processed',
    processedAt: new Date().toISOString(),
    fileName: selectedFile?.name || null,
    sections: buildMockResult()
  });

  processBtn.addEventListener('click', async () => {
    if (processBtn.disabled || isProcessing) return;
    isProcessing = true;
    processBtn.textContent = 'Processando documento...';
    fillResultMeta();
    formAreaEl.hidden = true;
    resultEl.hidden = false;
    statusCardEl.hidden = false;
    resultContentEl.hidden = true;
    setProgress(0);
    updateButtonState();
    const totalMs = 10000;
    const intervalMs = 100;
    const steps = totalMs / intervalMs;
    for (let i = 1; i <= steps; i += 1) {
      await wait(intervalMs);
      setProgress((i / steps) * 100);
    }
    statusCardEl.hidden = true;
    resultContentEl.hidden = false;
    processBtn.textContent = 'Processar documento';
    isProcessing = false;
    updateButtonState();
  });

  changeFileBtn.addEventListener('click', () => {
    uploadInput.click();
  });

  exportBtn.addEventListener('click', () => {
    const payload = JSON.stringify(buildExportPayload(), null, 2);
    const blob = new Blob([payload], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'document-analysis-result.json';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  });

  updateFileVisual();
  updateButtonState();
}

/** Markup do icone de pasta (Lucide `folder`) para projetos - usar ao criar cards/detalhes via JS; depois chame `lucide.createIcons()`. */
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

initDocClassesMultiSelect();
initDocumentAnalysisValidation();

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
  setVoiceConversationState(false);
  const scopeLine = document.getElementById('agentChatScopeLine');
  if (scopeLine) scopeLine.hidden = true;
  if (chatAttachMenu) chatAttachMenu.classList.remove('open');
  if (chatSkillMenu) chatSkillMenu.classList.remove('open');
  activeAgentChatSkillQuery = '';
  chatSkillSearchInputs.forEach((input) => {
    input.value = '';
  });
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
  const { routeKey } = getHashRouteInfo();
  const match = routeKey.match(/^dashboard\/agents\/project\/([^/?#]+)$/);
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

function fillAgentModalProjectOptions(preferredProjectSlug = '', preferredProjectId = '') {
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
      : preferredProjectId && org.projects.some((project) => String(project.id || '').trim() === String(preferredProjectId || '').trim())
        ? org.projects.find((project) => String(project.id || '').trim() === String(preferredProjectId || '').trim())?.slug || ''
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

const AGENT_HISTORY_ITEMS = [
  {
    id: 'hist-001',
    userName: 'Mariana Costa',
    userEmail: 'mariana.costa@avas.com',
    companyName: 'Avas Energia',
    occurredAt: '2026-06-22T09:14:00-03:00',
    agentName: 'Atlas Core',
    agentContext: 'Operações integradas',
    tokens: 18432,
    costUsd: 0.37,
    costBrl: 2.03,
    sourceLabel: 'Web + interno',
    sourceType: 'web',
    sourceDescription: 'O agente consultou a web e cruzou o resultado com arquivos do conhecimento interno.',
    agentIp: '34.117.182.91',
    userIp: '187.54.22.104',
    knowledgeFiles: [
      { name: 'playbook-operacoes-v3.pdf', path: '/knowledge/operacoes/playbook-operacoes-v3.pdf' },
      { name: 'sla-clientes-enterprise.xlsx', path: '/knowledge/operacoes/sla-clientes-enterprise.xlsx' },
    ],
    conversation: [
      { role: 'Usuário', at: '09:14', text: 'Quais clientes enterprise estão com SLA crítico hoje e quais passos devo seguir?' },
      { role: 'Agente', at: '09:14', text: 'Cruzei o playbook interno com a busca web de incidentes do dia. Há 3 clientes críticos e o procedimento prioritário é acionar a célula de contingência, validar backlog e disparar atualização preventiva.' },
      { role: 'Usuário', at: '09:16', text: 'Resuma em tópicos e informe quais fontes você utilizou.' },
      { role: 'Agente', at: '09:16', text: 'Usei os arquivos internos playbook-operacoes-v3.pdf e sla-clientes-enterprise.xlsx, além de pesquisa web para confirmar incidentes e janelas de manutenção.' },
    ],
  },
  {
    id: 'hist-002',
    userName: 'Carlos Henrique',
    userEmail: 'carlos.henrique@techcorp.com',
    companyName: 'TechCorp Brasil',
    occurredAt: '2026-06-22T10:02:00-03:00',
    agentName: 'Ledger AI',
    agentContext: 'Controladoria e fechamento',
    tokens: 9230,
    costUsd: 0.18,
    costBrl: 0.99,
    sourceLabel: 'Somente interno',
    sourceType: 'internal',
    sourceDescription: 'A resposta foi construída apenas com base no conhecimento interno do agente.',
    agentIp: '34.117.182.97',
    userIp: '179.189.44.211',
    knowledgeFiles: [
      { name: 'fechamento-mensal-checklist.docx', path: '/knowledge/controladoria/fechamento-mensal-checklist.docx' },
      { name: 'politica-contabil-2026.pdf', path: '/knowledge/controladoria/politica-contabil-2026.pdf' },
      { name: 'centros-de-custo.csv', path: '/knowledge/controladoria/centros-de-custo.csv' },
    ],
    conversation: [
      { role: 'Usuário', at: '10:02', text: 'Liste o passo a passo para fechamento do mês e valide o centro de custo de marketing.' },
      { role: 'Agente', at: '10:03', text: 'Segui exclusivamente o checklist interno e a política contábil. O centro de custo de marketing permanece ativo e deve entrar na conciliação da rodada 2.' },
    ],
  },
  {
    id: 'hist-003',
    userName: 'Juliana Prado',
    userEmail: 'juliana.prado@avas.com',
    companyName: 'Avas Energia',
    occurredAt: '2026-06-22T11:28:00-03:00',
    agentName: 'Nexus Sales',
    agentContext: 'CRM e campanhas',
    tokens: 15108,
    costUsd: 0.29,
    costBrl: 1.59,
    sourceLabel: 'Web + interno',
    sourceType: 'web',
    sourceDescription: 'O agente pesquisou benchmarks públicos na web e combinou com playbooks internos de campanha.',
    agentIp: '34.117.182.103',
    userIp: '201.48.92.17',
    knowledgeFiles: [
      { name: 'roteiro-campanha-q3.md', path: '/knowledge/marketing/roteiro-campanha-q3.md' },
    ],
    conversation: [
      { role: 'Usuário', at: '11:28', text: 'Monte uma recomendação de abordagem para leads frios do segmento industrial.' },
      { role: 'Agente', at: '11:29', text: 'Usei o roteiro interno da campanha Q3 e referências web de benchmark B2B. Recomendo sequência em 3 contatos com CTA financeiro e prova operacional.' },
    ],
  },
  {
    id: 'hist-004',
    userName: 'Roberto Lima',
    userEmail: 'roberto.lima@techcorp.com',
    companyName: 'TechCorp Brasil',
    occurredAt: '2026-06-22T14:07:00-03:00',
    agentName: 'Support Sentinel',
    agentContext: 'Suporte e integrações',
    tokens: 6734,
    costUsd: 0.13,
    costBrl: 0.71,
    sourceLabel: 'Somente interno',
    sourceType: 'internal',
    sourceDescription: 'A interação foi resolvida apenas com base no repositório interno de suporte técnico.',
    agentIp: '34.117.182.120',
    userIp: '45.167.121.55',
    knowledgeFiles: [
      { name: 'runbook-api-clientes.pdf', path: '/knowledge/suporte/runbook-api-clientes.pdf' },
      { name: 'faq-erros-webhook.txt', path: '/knowledge/suporte/faq-erros-webhook.txt' },
    ],
    conversation: [
      { role: 'Usuário', at: '14:07', text: 'Como tratar falha 401 no webhook do cliente Delta?' },
      { role: 'Agente', at: '14:08', text: 'O runbook interno orienta verificar rotação do token, sincronismo do relógio do servidor e a whitelist do endpoint antes de reprocessar o webhook.' },
    ],
  },
];

let agentHistoryTokensFilter = '';
let agentHistoryUsdFilter = '';
let agentHistoryBrlFilter = '';
let activeAgentHistoryItemId = '';
let agentHistoryAudienceMode = 'internal';

function formatAgentHistoryDateTime(value) {
  const date = value ? new Date(value) : null;
  if (!date || Number.isNaN(date.getTime())) return '-';
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date);
}

function formatAgentHistoryTokens(value) {
  return new Intl.NumberFormat('pt-BR').format(Number(value) || 0);
}

function formatAgentHistoryCurrency(value, currency) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(Number(value) || 0);
}

function getAgentHistorySourceChipClass(item) {
  return item?.sourceType === 'internal'
    ? 'agent-history-source-chip agent-history-source-chip--internal'
    : 'agent-history-source-chip';
}

function updateAgentHistoryFilterButtonLabel() {
  if (!agentHistoryFilterBtnLabel) return;
  const parts = [];
  if (agentHistoryTokensFilter) parts.push('Tokens');
  if (agentHistoryUsdFilter) parts.push('USD');
  if (agentHistoryBrlFilter) parts.push('BRL');
  agentHistoryFilterBtnLabel.textContent = parts.length ? parts.join(' • ') : 'Filtros';
}

function resetAgentHistoryMetricFilters() {
  agentHistoryTokensFilter = '';
  agentHistoryUsdFilter = '';
  agentHistoryBrlFilter = '';
  agentHistoryFilterMenu
    ?.querySelectorAll('.filter-option')
    .forEach((item) => item.classList.remove('active'));
  agentHistoryFilterMenu
    ?.querySelectorAll('.filter-option[data-value=""]')
    .forEach((item) => item.classList.add('active'));
  updateAgentHistoryFilterButtonLabel();
}

function syncAgentHistoryAudienceMode() {
  const isClientView = agentHistoryAudienceMode === 'client';
  if (agentHistoryPage) agentHistoryPage.dataset.agentHistoryView = agentHistoryAudienceMode;
  if (agentHistoryClientViewToggle) agentHistoryClientViewToggle.checked = isClientView;
  if (agentHistoryViewToggleTitle) {
    agentHistoryViewToggleTitle.textContent = isClientView ? 'Versão do cliente' : 'Versão interna';
  }
  if (agentHistoryViewToggleLabel) {
    agentHistoryViewToggleLabel.textContent = isClientView
      ? 'Oculta tokens e custos'
      : 'Exibe tokens e custos';
  }
  if (isClientView) {
    agentHistoryFilterMenu?.classList.remove('open');
    resetAgentHistoryMetricFilters();
  }
  if (agentHistoryMetricsFilterField) agentHistoryMetricsFilterField.hidden = isClientView;
  applyAgentHistoryFilters();
  if (agentHistoryDetailsModal?.classList.contains('open')) {
    const item = AGENT_HISTORY_ITEMS.find((entry) => String(entry.id || '') === activeAgentHistoryItemId);
    if (item) renderAgentHistoryDetails(item);
  }
}

function matchesAgentHistoryNumericRange(value, filterValue) {
  if (!filterValue) return true;
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return false;
  const [operator, rawStart, rawEnd] = String(filterValue).split(':');
  const start = Number(rawStart);
  const end = Number(rawEnd);
  if (operator === 'lte' && Number.isFinite(start)) return numericValue <= start;
  if (operator === 'gte' && Number.isFinite(start)) return numericValue >= start;
  if (operator === 'between' && Number.isFinite(start) && Number.isFinite(end)) {
    return numericValue >= start && numericValue <= end;
  }
  return true;
}

function applyAgentHistoryFilters() {
  if (!agentHistoryTable) return;
  const query = String(agentHistorySearchInput?.value || '').trim().toLowerCase();
  const activePeriodMode = agentHistoryPeriodMenu?.dataset.mode === 'single' ? 'single' : 'range';
  const startDateValue = String(agentHistoryStartDateInput?.value || '').trim();
  const endDateValue = String(agentHistoryEndDateInput?.value || '').trim();
  const singleDateValue = String(agentHistorySingleDateInput?.value || '').trim();
  const startDate = startDateValue ? new Date(`${startDateValue}T00:00:00`) : null;
  const endDate = endDateValue ? new Date(`${endDateValue}T23:59:59`) : null;
  const singleDate = singleDateValue ? new Date(`${singleDateValue}T00:00:00`) : null;
  agentHistoryTable.querySelectorAll('.data-row:not(.header):not([data-table-empty-state="true"])').forEach((row) => {
    const text = String(row.dataset.agentHistorySearch || '').toLowerCase();
    const occurredAt = String(row.dataset.agentHistoryOccurredAt || '').trim();
    const tokens = Number(row.dataset.agentHistoryTokens || 0);
    const costUsd = Number(row.dataset.agentHistoryCostUsd || 0);
    const costBrl = Number(row.dataset.agentHistoryCostBrl || 0);
    const rowDate = occurredAt ? new Date(occurredAt) : null;
    const matchesQuery = !query || text.includes(query);
    const matchesTokens = matchesAgentHistoryNumericRange(tokens, agentHistoryTokensFilter);
    const matchesUsd = matchesAgentHistoryNumericRange(costUsd, agentHistoryUsdFilter);
    const matchesBrl = matchesAgentHistoryNumericRange(costBrl, agentHistoryBrlFilter);

    let matchesPeriod = true;
    if (rowDate && !Number.isNaN(rowDate.getTime())) {
      if (activePeriodMode === 'single' && singleDate) {
        matchesPeriod = rowDate >= singleDate && rowDate < new Date(singleDate.getTime() + 86400000);
      } else if (activePeriodMode === 'range') {
        if (startDate && endDate) matchesPeriod = rowDate >= startDate && rowDate <= endDate;
        else if (startDate) matchesPeriod = rowDate >= startDate;
        else if (endDate) matchesPeriod = rowDate <= endDate;
      }
    } else if (activePeriodMode === 'single' && singleDate) {
      matchesPeriod = false;
    } else if ((activePeriodMode === 'range' && startDate) || (activePeriodMode === 'range' && endDate)) {
      matchesPeriod = false;
    }

    row.hidden = !(matchesQuery && matchesTokens && matchesUsd && matchesBrl && matchesPeriod);
  });
  if (typeof syncTableEmptyState === 'function') syncTableEmptyState(agentHistoryTable);
}

function openAgentHistoryModal(modal) {
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeAgentHistoryModal(modal) {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function renderAgentHistoryConversation(item) {
  if (!agentHistoryConversationBody || !agentHistoryConversationSubtitle || !item) return;
  if (agentHistoryConversationTitle) agentHistoryConversationTitle.textContent = `Chat com ${item.agentName}`;
  agentHistoryConversationSubtitle.textContent = `${item.agentContext} • Última conversa ${formatAgentHistoryDateTime(item.occurredAt)}`;
  agentHistoryConversationBody.innerHTML = `
    <section class="agent-history-readonly-chat" aria-label="Conversa completa somente para visualização">
      ${item.conversation.map((message) => `
        <article class="agent-history-chat-message${String(message.role).toLowerCase() === 'agente' ? ' agent-history-chat-message--agent' : ' agent-history-chat-message--user'}">
          <div class="agent-history-chat-meta">
            <span>${String(message.role).toLowerCase() === 'agente' ? 'Agente' : 'Você'}${message.at ? ` • ${escapeHtmlWes(message.at)}` : ''}</span>
            <span class="agent-history-chat-audio" aria-hidden="true">
              <span class="material-symbols-rounded">volume_up</span>
            </span>
          </div>
          <div class="agent-history-chat-bubble">${escapeHtmlWes(message.text || '')}</div>
        </article>
      `).join('')}
    </section>
  `;
  openAgentHistoryModal(agentHistoryConversationModal);
}

function renderAgentHistoryDetails(item) {
  if (!agentHistoryDetailsGrid || !agentHistoryKnowledgeList || !agentHistoryKnowledgeCount || !agentHistoryDetailsSubtitle || !item) return;
  activeAgentHistoryItemId = String(item.id || '');
  agentHistoryDetailsSubtitle.textContent = `${item.userName} • ${item.agentName} • ${formatAgentHistoryDateTime(item.occurredAt)}`;
  agentHistoryDetailsGrid.classList.toggle('agent-history-details-grid--client', agentHistoryAudienceMode === 'client');
  const usageCardMarkup = agentHistoryAudienceMode === 'client'
    ? ''
    : `
    <article class="agent-history-detail-card">
      <span>Consumo e custo</span>
      <strong>${escapeHtmlWes(formatAgentHistoryTokens(item.tokens))} tokens</strong>
      <small>${escapeHtmlWes(formatAgentHistoryCurrency(item.costUsd, 'USD'))} • ${escapeHtmlWes(formatAgentHistoryCurrency(item.costBrl, 'BRL'))}</small>
    </article>
  `;
  agentHistoryDetailsGrid.innerHTML = `
    <article class="agent-history-detail-card">
      <span>Origem da resposta</span>
      <strong>${escapeHtmlWes(item.sourceLabel)}</strong>
      <small>${escapeHtmlWes(item.sourceDescription)}</small>
    </article>
    <article class="agent-history-detail-card">
      <span>Endereço IP do usuário</span>
      <strong>${escapeHtmlWes(item.userIp)}</strong>
      <small>IP capturado no momento em que a conversa foi iniciada.</small>
    </article>
    <article class="agent-history-detail-card">
      <span>Endereço IP do agente</span>
      <strong>${escapeHtmlWes(item.agentIp)}</strong>
      <small>Origem da infraestrutura que processou a execução do agente.</small>
    </article>
    ${usageCardMarkup}
  `;
  const files = Array.isArray(item.knowledgeFiles) ? item.knowledgeFiles : [];
  agentHistoryKnowledgeCount.textContent = `${files.length} ${files.length === 1 ? 'arquivo' : 'arquivos'}`;
  agentHistoryKnowledgeList.innerHTML = files.length
    ? files.map((file) => `
        <article class="agent-history-knowledge-item">
          <span class="material-symbols-rounded" aria-hidden="true">description</span>
          <div class="agent-history-knowledge-item-copy">
            <strong>${escapeHtmlWes(file.name || '-')}</strong>
            <small>${escapeHtmlWes(file.path || '-')}</small>
          </div>
        </article>
      `).join('')
    : '<p class="agent-history-knowledge-empty">Nenhum arquivo interno foi utilizado nesta execução.</p>';
  openAgentHistoryModal(agentHistoryDetailsModal);
}

function renderAgentHistoryTable() {
  if (!agentHistoryTable) return;
  agentHistoryTable.querySelectorAll('.data-row:not(.header):not([data-table-empty-state="true"])').forEach((row) => row.remove());
  const frag = document.createDocumentFragment();
  AGENT_HISTORY_ITEMS.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'data-row';
    row.dataset.agentHistoryIndex = String(index);
    row.dataset.agentHistoryOccurredAt = String(item.occurredAt || '');
    row.dataset.agentHistoryTokens = String(Number(item.tokens) || 0);
    row.dataset.agentHistoryCostUsd = String(Number(item.costUsd) || 0);
    row.dataset.agentHistoryCostBrl = String(Number(item.costBrl) || 0);
    row.dataset.agentHistorySearch = [
      item.userName,
      item.userEmail,
      item.companyName,
      item.agentName,
      item.agentContext,
      item.userIp,
      item.sourceLabel,
    ].filter(Boolean).join(' ');
    row.innerHTML = `
      <span class="agent-history-user-cell">
        <strong>${escapeHtmlWes(item.userName)}</strong>
        <small>${escapeHtmlWes(item.userEmail)}</small>
      </span>
      <span class="agent-history-company-cell">${escapeHtmlWes(item.companyName || '-')}</span>
      <span>${escapeHtmlWes(formatAgentHistoryDateTime(item.occurredAt))}</span>
      <span class="agent-history-agent-cell">
        <strong>${escapeHtmlWes(item.agentName)}</strong>
        <small>${escapeHtmlWes(item.agentContext)}</small>
      </span>
      <span class="agent-history-ip-cell">${escapeHtmlWes(item.userIp)}</span>
      <span class="agent-history-token-cell">${escapeHtmlWes(formatAgentHistoryTokens(item.tokens))}</span>
      <span class="agent-history-currency-cell">${escapeHtmlWes(formatAgentHistoryCurrency(item.costUsd, 'USD'))}</span>
      <span class="agent-history-currency-cell">${escapeHtmlWes(formatAgentHistoryCurrency(item.costBrl, 'BRL'))}</span>
      <span class="row-actions">
        <button class="icon-btn action-icon" type="button" data-agent-history-action="conversation" data-agent-history-index="${escapeHtmlWes(index)}" aria-label="Visualizar conversa completa" title="Visualizar conversa completa">
          <span class="material-symbols-rounded">chat</span>
        </button>
        <button class="icon-btn action-icon audit-view-btn" type="button" data-agent-history-action="details" data-agent-history-index="${escapeHtmlWes(index)}" aria-label="Ver detalhes" title="Ver detalhes">
          <span class="material-symbols-rounded">more_vert</span>
        </button>
      </span>
    `;
    frag.appendChild(row);
  });
  agentHistoryTable.appendChild(frag);
  applyAgentHistoryFilters();
  if (typeof syncTableEmptyState === 'function') syncTableEmptyState(agentHistoryTable);
}

if (agentHistoryPage && agentHistoryTable) {
  syncAgentHistoryAudienceMode();
  updateAgentHistoryFilterButtonLabel();
  renderAgentHistoryTable();

  agentHistoryTable.addEventListener('click', (event) => {
    const actionBtn = event.target.closest('[data-agent-history-action]');
    if (!actionBtn || !agentHistoryTable.contains(actionBtn)) return;
    const index = Number(actionBtn.dataset.agentHistoryIndex);
    const item = AGENT_HISTORY_ITEMS[index];
    if (!item) return;
    if (actionBtn.dataset.agentHistoryAction === 'conversation') {
      renderAgentHistoryConversation(item);
      return;
    }
    if (actionBtn.dataset.agentHistoryAction === 'details') {
      renderAgentHistoryDetails(item);
    }
  });
}

if (agentHistoryClientViewToggle) {
  agentHistoryClientViewToggle.addEventListener('change', () => {
    agentHistoryAudienceMode = agentHistoryClientViewToggle.checked ? 'client' : 'internal';
    syncAgentHistoryAudienceMode();
  });
}

if (agentHistorySearchInput) {
  agentHistorySearchInput.addEventListener('input', () => {
    applyAgentHistoryFilters();
  });
}

if (agentHistoryFilterBtn && agentHistoryFilterMenu) {
  agentHistoryFilterBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    agentHistoryPeriodMenu?.classList.remove('open');
    agentHistoryFilterMenu.classList.toggle('open');
  });

  agentHistoryFilterMenu.addEventListener('click', (event) => {
    const button = event.target.closest('.filter-option');
    if (button) {
      const group = button.dataset.filter;
      agentHistoryFilterMenu
        .querySelectorAll(`.filter-option[data-filter="${group}"]`)
        .forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      if (group === 'tokens') agentHistoryTokensFilter = String(button.dataset.value || '').trim();
      if (group === 'usd') agentHistoryUsdFilter = String(button.dataset.value || '').trim();
      if (group === 'brl') agentHistoryBrlFilter = String(button.dataset.value || '').trim();
      agentHistoryFilterMenu.classList.remove('open');
      updateAgentHistoryFilterButtonLabel();
      applyAgentHistoryFilters();
      return;
    }

    const clearButton = event.target.closest('.filter-clear');
    if (!clearButton) return;
    agentHistoryTokensFilter = '';
    agentHistoryUsdFilter = '';
    agentHistoryBrlFilter = '';
    agentHistoryFilterMenu
      .querySelectorAll('.filter-option')
      .forEach((item) => item.classList.remove('active'));
    agentHistoryFilterMenu
      .querySelectorAll('.filter-option[data-value=""]')
      .forEach((item) => item.classList.add('active'));
    agentHistoryFilterMenu.classList.remove('open');
    updateAgentHistoryFilterButtonLabel();
    applyAgentHistoryFilters();
  });

  document.addEventListener('click', (event) => {
    if (!agentHistoryFilterMenu.contains(event.target) && !agentHistoryFilterBtn.contains(event.target)) {
      agentHistoryFilterMenu.classList.remove('open');
    }
  });
}

if (agentHistoryPeriodBtn && agentHistoryPeriodMenu) {
  if (!agentHistoryPeriodMenu.dataset.mode) agentHistoryPeriodMenu.dataset.mode = 'range';

  const syncAgentHistoryPeriodMode = () => {
    const isSingle = agentHistoryPeriodMenu.dataset.mode === 'single';
    agentHistoryRangeFields.forEach((field) => field.classList.toggle('is-hidden', isSingle));
    if (agentHistorySingleField) agentHistorySingleField.classList.toggle('is-hidden', !isSingle);
  };

  agentHistoryPeriodBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    agentHistoryFilterMenu?.classList.remove('open');
    agentHistoryPeriodMenu.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    agentHistoryPeriodMenu.classList.remove('open');
  });

  const clearButton = agentHistoryPeriodMenu.querySelector('.filter-clear');

  agentHistoryPeriodOptions.forEach((button) => {
    button.addEventListener('click', () => {
      agentHistoryPeriodOptions.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      agentHistoryPeriodMenu.dataset.mode = button.dataset.mode === 'single' ? 'single' : 'range';
      syncAgentHistoryPeriodMode();
      applyAgentHistoryFilters();
    });
  });

  [agentHistoryStartDateInput, agentHistoryEndDateInput, agentHistorySingleDateInput].forEach((input) => {
    input?.addEventListener('change', () => {
      applyAgentHistoryFilters();
    });
  });

  agentHistoryApplyPeriodBtn?.addEventListener('click', () => {
    applyAgentHistoryFilters();
    agentHistoryPeriodMenu.classList.remove('open');
  });

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      agentHistoryStartDateInput.value = '';
      agentHistoryEndDateInput.value = '';
      agentHistorySingleDateInput.value = '';
      agentHistoryPeriodMenu.dataset.mode = 'range';
      agentHistoryPeriodOptions.forEach((item) => item.classList.remove('active'));
      const defaultOption = agentHistoryPeriodOptions.find((item) => item.dataset.mode === 'range');
      if (defaultOption) defaultOption.classList.add('active');
      syncAgentHistoryPeriodMode();
      applyAgentHistoryFilters();
    });
  }

  syncAgentHistoryPeriodMode();
}

if (agentHistoryOpenConversationBtn) {
  agentHistoryOpenConversationBtn.addEventListener('click', () => {
    const item = AGENT_HISTORY_ITEMS.find((entry) => String(entry.id || '') === activeAgentHistoryItemId);
    if (!item) return;
    closeAgentHistoryModal(agentHistoryDetailsModal);
    renderAgentHistoryConversation(item);
  });
}

if (agentHistoryConversationModal) {
  agentHistoryConversationModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-modal-close]')) closeAgentHistoryModal(agentHistoryConversationModal);
  });
}

if (agentHistoryDetailsModal) {
  agentHistoryDetailsModal.addEventListener('click', (event) => {
    if (event.target.closest('[data-modal-close]')) closeAgentHistoryModal(agentHistoryDetailsModal);
  });
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
  const currentValue = isValidAgentsPageEnvironmentId(agentsPageEnvironmentId)
    ? agentsPageEnvironmentId
    : '';

  if (agentsPageEnvironmentSelect) {
    agentsPageEnvironmentSelect.innerHTML = '';

    const allOpt = document.createElement('option');
    allOpt.value = '';
    allOpt.textContent = 'Todos os setores';
    agentsPageEnvironmentSelect.appendChild(allOpt);

    AGENTS_PAGE_ENVIRONMENTS.forEach((item) => {
      const opt = document.createElement('option');
      opt.value = item.id;
      opt.textContent = item.label;
      agentsPageEnvironmentSelect.appendChild(opt);
    });

    agentsPageEnvironmentSelect.value = currentValue;
  }

  document
    .querySelectorAll('#agentsFilterMenu .filter-option[data-filter="sector"]')
    .forEach((option) => {
      option.classList.toggle('active', String(option.dataset.value || '').trim() === currentValue);
    });
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
  emptyOpt.textContent = 'Sem setor';
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
  emptyOpt.textContent = 'Selecione o setor';
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

function getAgentVisibilityInfo(agent = {}) {
  const rawVisibility = String(
    agent.visibility || agent.access || agent.scope || agent.is_public || agent.public || ''
  )
    .trim()
    .toLowerCase();
  const isPublic =
    Boolean(agent.public_url || agent.share_url || agent.public_link || agent.public_link_url) ||
    ['public', 'público', 'publico', 'shared', 'open', 'true', '1', 'yes'].includes(rawVisibility) ||
    Boolean(agent.is_public === true || agent.public === true);
  return {
    label: isPublic ? 'Público' : 'Privado',
    isPublic,
  };
}

function buildStandaloneAgentChatLink(agentId) {
  const normalizedId = String(agentId || '').trim();
  if (!normalizedId) return '';
  const url = new URL(window.location.href);
  url.hash = `#/agent-chat?agent=${encodeURIComponent(normalizedId)}`;
  return url.toString();
}

function normalizeAgentPublicLink(link) {
  const value = String(link || '').trim();
  if (!value) return '';
  const match = value.match(/#\/dashboard\/agents(?:\/project\/[^?/#]+)?\?[^#]*\bagent=([^&#]+)/);
  if (!match) return value;
  return buildStandaloneAgentChatLink(decodeURIComponent(match[1]));
}

function getAgentPublicLink(agent = {}) {
  const explicitLink = String(
    agent.public_url || agent.share_url || agent.public_link || agent.public_link_url || ''
  ).trim();
  if (explicitLink) return normalizeAgentPublicLink(explicitLink);
  const agentId = String(agent.id || agent.agent_id || '').trim();
  if (!agentId || !getAgentVisibilityInfo(agent).isPublic) return '';
  return buildStandaloneAgentChatLink(agentId);
}

function getAgentActionLabel(agent = {}) {
  return 'Conversar';
}

async function copyTextToClipboard(text) {
  const value = String(text || '').trim();
  if (!value) return false;
  const copyWithTextarea = () => {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', 'readonly');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, value.length);
    const copied = document.execCommand('copy');
    textarea.remove();
    return copied;
  };
  try {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(value);
        return true;
      } catch {
        return copyWithTextarea();
      }
    }
    return copyWithTextarea();
  } catch {
    return false;
  }
}

function getAgentSharePermission(agent = {}) {
  return String(agent.share_permission || agent.public_permission || 'viewer').trim() || 'viewer';
}

function getAgentShareSettings(agent = {}) {
  return {
    public: getAgentVisibilityInfo(agent).isPublic,
    permission: getAgentSharePermission(agent),
    canCopy: agent.share_allow_copy !== false,
    canChat: agent.share_allow_chat !== false,
    canEdit: agent.share_allow_edit === true,
    canComment: agent.share_allow_comment !== false,
  };
}

function setAgentShareModal(agent = {}) {
  const modal = document.getElementById('agentShareModal');
  const nameEl = document.getElementById('agentShareAgentName');
  const linkEl = document.getElementById('agentShareLink');
  const statusEl = document.getElementById('agentShareStatusChip');
  const privateToggleEl = document.getElementById('agentSharePrivateToggle');
  const linkCardEl = document.querySelector('#agentShareModal .agent-share-link-card');
  const copyBtn = document.getElementById('agentShareCopyBtn');
  const openBtn = document.getElementById('agentShareOpenBtn');
  if (!modal || !nameEl || !linkEl || !statusEl) return;

  const settings = getAgentShareSettings(agent);
  const name = String(agent.name || agent.id || 'Agente').trim();
  const link = getAgentPublicLink(agent);
  const isPrivate = !settings.public;

  nameEl.textContent = name;
  linkEl.value = link;
  if (privateToggleEl) privateToggleEl.checked = isPrivate;
  statusEl.textContent = isPrivate ? 'Privado' : 'Público';
  statusEl.classList.toggle('agents-visibility-badge--public', !isPrivate);
  statusEl.classList.toggle('agents-visibility-badge--private', isPrivate);
  linkEl.disabled = isPrivate;
  if (copyBtn) copyBtn.disabled = isPrivate || !link;
  if (openBtn) openBtn.disabled = isPrivate || !link;
  linkCardEl?.classList.toggle('is-disabled', isPrivate);
  modal.dataset.agentId = String(agent.id || '');
}

function openAgentShareModal(agent, triggerButton) {
  const modal = document.getElementById('agentShareModal');
  if (!modal || !agent) return;
  setAgentShareModal(agent);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  modal.dataset.triggerButtonId = triggerButton?.id || '';
  window.setTimeout(() => document.getElementById('agentShareLink')?.focus(), 0);
}

async function copyAgentLinkToClipboard(agent) {
  const link = getAgentPublicLink(agent);
  if (!link) return false;
  return copyTextToClipboard(link);
}

function buildAgentRowElement(agent) {
  const row = document.createElement('div');
  row.className = 'agents-row';
  row.dataset.fromApi = 'true';
  row.dataset.agentUuid = agent.id;
  row.dataset.projectId = agent.project_id || '';
  row.dataset.hubOrg = agent.environment_slug || '';
  row.dataset.voiceEnabled = agent.voice_enabled ? 'true' : 'false';
  row.dataset.agentsEnvironment = resolveAgentsPageEnvironmentIdForAgent(agent);
  const environmentLabel = getAgentsPageEnvironmentLabel(row.dataset.agentsEnvironment);
  const name = escapeHtmlWes(agent.name || '');
  const idCell = escapeHtmlWes(`${String(agent.id).slice(0, 8)}...`);
  const rag = agent.use_rag ? 'Sim' : 'Não';
  const ragClass = agent.use_rag ? 'agents-rag-badge agents-rag-badge--yes' : 'agents-rag-badge';
  const visibility = getAgentVisibilityInfo(agent);
  const publicLink = visibility.isPublic ? getAgentPublicLink(agent) : '';
  const hasProject = Boolean(agent.project_id);
  const desc = escapeHtmlWes(`${(agent.description || '').trim()}${hasProject ? '' : ' • Sem projeto'}`.trim());
  const actionLabel = getAgentActionLabel(agent);
  row.innerHTML = `<span><strong>${name}</strong></span><span class="agents-row-description">${desc}</span><span title="${escapeHtmlWes(agent.id)}">${idCell}</span><span><span class="${ragClass}">${rag}</span></span><span class="agents-row-environment"><span class="agents-environment-badge">${escapeHtmlWes(environmentLabel)}</span></span><span class="agents-row-visibility"><span class="agents-visibility-badge${visibility.isPublic ? ' agents-visibility-badge--public' : ''}">${escapeHtmlWes(visibility.label)}</span></span><span class="row-actions"><button type="button" class="icon-btn action-icon agent-edit-toggle" data-agent-id="${escapeHtmlWes(agent.id)}" aria-label="Editar agente"><span class="material-symbols-rounded">edit</span></button><button type="button" class="icon-btn action-icon ${visibility.isPublic && publicLink ? 'agents-copy-link-btn' : 'muted-icon'}" data-agent-public-link="${escapeHtmlWes(publicLink)}" aria-label="Compartilhar agente"${visibility.isPublic && publicLink ? '' : ' disabled'}><i data-lucide="share"></i></button><button type="button" class="icon-btn action-icon danger agent-delete-toggle" aria-label="Excluir agente"><span class="material-symbols-rounded">delete</span></button><button type="button" class="icon-btn action-icon agent-chat-toggle" aria-label="${escapeHtmlWes(actionLabel)}"><span class="material-symbols-rounded">chat</span></button></span>`;
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
  if (!row) return;
  const fallbackIdCell = String(row.querySelector('span[title]')?.getAttribute('title') || row.children[2]?.textContent || '').trim();
  const agentId = String(row.dataset.agentUuid || fallbackIdCell).trim();
  const agentName = row.querySelector('strong')?.textContent?.trim() || 'este agente';
  if (!(await confirmDeletionAction(`o agente "${agentName}"`))) return;
  if (typeof window.wesApiFetch !== 'function' || !window.WesDashboardAuth?.isAuthenticated()) {
    row.remove();
    showAppToast('Agente excluído');
    return;
  }
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
      if (!(await confirmDeletionAction(`o agente "${agentName}"`))) return;
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

/** Substitui linhas demo pela lista filtrada por usuario (GET /agents + X-User-Id). */
async function refreshAgentsTableFromApi() {
  const table = document.getElementById('agentsAllAgentsTable');
  if (!table || typeof window.wesApiFetch !== 'function') {
    setAgentsApiStatus('', false);
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
      console.warn(`Não foi possível listar agentes (${res.status}): ${detail}`);
      setAgentsApiStatus('', false);
      return;
    }
    const agents = body;
    if (!Array.isArray(agents)) {
      setAgentsApiStatus('Resposta invalida da API (esperado um array de agentes).', true);
      return;
    }
    window.__wesAgentsCache = agents;
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
    applyAgentsAdvancedFilters();
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
    console.warn(`Falha ao chamar GET /agents no modo mock: ${msg}`);
    setAgentsApiStatus('', false);
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
                <span>Descrição</span>
                <span>ID</span>
                <span>RAG</span>
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

  const { routeKey } = getHashRouteInfo();
  const match = routeKey.match(/^dashboard\/agents\/project\/([^/?#]+)$/);
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

function applyVmMonitoringRoute() {
  const vmPage = document.getElementById('page-vm-monitoring');
  if (!vmPage || !vmPage.classList.contains('is-active')) return;

  const { routeKey } = getHashRouteInfo();
  const machineMatch = routeKey.match(/^dashboard\/vm-monitoring\/machine\/([^/?#]+)$/);
  const machineId = machineMatch ? decodeURIComponent(machineMatch[1]) : null;
  const cards = Array.from(vmPage.querySelectorAll('.vm-machine-card[data-vm-machine]'));
  const selectedCard = machineId ? cards.find((card) => card.dataset.vmMachine === machineId) : null;

  if (machineId && !selectedCard) {
    const fallback = '#/dashboard/vm-monitoring';
    if (window.location.hash !== fallback) {
      window.location.replace(fallback);
    }
    return;
  }

  const metricState = selectedCard
    ? {
        title: `Visão geral da máquina: ${selectedCard.dataset.vmMachineTitle || machineId}`,
        cpu: selectedCard.dataset.vmCpu,
        cpuBar: selectedCard.dataset.vmCpuBar,
        memory: selectedCard.dataset.vmMemory,
        memoryBar: selectedCard.dataset.vmMemoryBar,
        disk: selectedCard.dataset.vmDisk,
        diskBar: selectedCard.dataset.vmDiskBar,
        network: selectedCard.dataset.vmNetwork,
        networkBar: selectedCard.dataset.vmNetworkBar,
      }
    : {
        title: 'Visão geral da frota (4 máquinas)',
        cpu: '49%',
        cpuBar: '49%',
        memory: '62%',
        memoryBar: '62%',
        disk: '55%',
        diskBar: '55%',
        network: '6.5 MB/s',
        networkBar: '48%',
      };

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };
  const setBar = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.style.width = value;
  };

  setText('vmMetricsTitle', metricState.title);
  setText('vmCpuLabel', 'Uso médio de CPU');
  setText('vmMemoryLabel', 'Uso médio de memória');
  setText('vmDiskLabel', 'Uso médio de disco');
  setText('vmNetworkLabel', 'Carga média de rede');
  setText('vmCpuValue', metricState.cpu);
  setText('vmMemoryValue', metricState.memory);
  setText('vmDiskValue', metricState.disk);
  setText('vmNetworkValue', metricState.network);
  setText('vmTrendText', `CPU média: ${metricState.cpu} · Memória média: ${metricState.memory} · Disco médio: ${metricState.disk} · Rede média: ${metricState.network}`);
  setBar('vmCpuBar', metricState.cpuBar);
  setBar('vmMemoryBar', metricState.memoryBar);
  setBar('vmDiskBar', metricState.diskBar);
  setBar('vmNetworkBar', metricState.networkBar);

  cards.forEach((card) => {
    const active = card === selectedCard;
    card.classList.toggle('is-active', active);
    if (active) {
      card.setAttribute('aria-current', 'true');
    } else {
      card.removeAttribute('aria-current');
    }
  });
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

function applyAgentsRowFilters(row) {
  if (!row || row.classList.contains('header')) return;
  const ragText = String(row.querySelector('.agents-rag-badge')?.textContent || '').trim().toLowerCase();
  const visibilityText = String(row.querySelector('.agents-visibility-badge')?.textContent || '').trim().toLowerCase();
  const ragOk = !agentsRagFilter || ragText === agentsRagFilter;
  const visibilityOk = !agentsVisibilityFilter || visibilityText === agentsVisibilityFilter;
  row.classList.toggle('agents-row--filter-hide', !(ragOk && visibilityOk));
}

function applyAgentsAdvancedFilters() {
  if (!agentsByOrg) return;
  agentsByOrg.querySelectorAll('.agents-table').forEach((table) => {
    table.querySelectorAll('.agents-row').forEach((row) => applyAgentsRowFilters(row));
  });
  const allTable = document.getElementById('agentsAllAgentsTable');
  if (allTable) {
    allTable.querySelectorAll('.agents-row').forEach((row) => applyAgentsRowFilters(row));
  }
  resetAgentsPagination();
}
window.applyAgentsAdvancedFilters = applyAgentsAdvancedFilters;

if (agentsFilterBtn && agentsFilterMenu) {
  const filterOptions = agentsFilterMenu.querySelectorAll('.filter-option');
  const clearButton = agentsFilterMenu.querySelector('.filter-clear');

  agentsFilterBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    agentsFilterMenu.classList.toggle('open');
  });

  filterOptions.forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.filter;
      agentsFilterMenu
        .querySelectorAll(`.filter-option[data-filter="${group}"]`)
        .forEach((option) => option.classList.remove('active'));
      button.classList.add('active');

      if (group === 'rag') agentsRagFilter = String(button.dataset.value || '').trim().toLowerCase();
      if (group === 'visibility') agentsVisibilityFilter = String(button.dataset.value || '').trim().toLowerCase();
      if (group === 'sector') {
        agentsPageEnvironmentId = String(button.dataset.value || '').trim();
        syncAgentsProjectCardsEnvironmentFilter();
        syncAgentsAllListScope();
      }
      applyAgentsAdvancedFilters();
    });
  });

  clearButton?.addEventListener('click', () => {
    agentsRagFilter = '';
    agentsVisibilityFilter = '';
    agentsPageEnvironmentId = '';
    agentsFilterMenu.querySelectorAll('.filter-option').forEach((option) => option.classList.remove('active'));
    syncAgentsProjectCardsEnvironmentFilter();
    syncAgentsAllListScope();
    applyAgentsAdvancedFilters();
  });

  document.addEventListener('click', (event) => {
    if (!agentsFilterMenu.contains(event.target) && !agentsFilterBtn.contains(event.target)) {
      agentsFilterMenu.classList.remove('open');
    }
  });
}

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
    const { routeKey } = getHashRouteInfo();
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
    const { routeKey } = getHashRouteInfo();
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
    if (deleteConfirm) {
      deleteConfirm.checked = false;
    }
    if (deleteBtn) {
      deleteBtn.disabled = true;
      deleteBtn.classList.remove('is-loading');
    }
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

  deleteConfirm?.addEventListener('change', () => {
    if (!deleteBtn) return;
    deleteBtn.disabled = !deleteConfirm.checked;
  });

  deleteBtn?.addEventListener('click', async () => {
    if (modal.dataset.mode !== 'edit') return;
    const projectId = String(modal.dataset.projectId || '').trim();
    if (!projectId) {
      setProjectModalError('Projeto inválido para exclusão.');
      return;
    }
    if (!deleteConfirm?.checked) return;
    if (typeof window.wesApiFetch !== 'function' || !window.WesDashboardAuth?.isAuthenticated()) {
      setProjectModalError('Recurso indisponível sem configuração de API para excluir projeto.');
      return;
    }
    const confirmed = await confirmDeletionAction('este projeto');
    if (!confirmed) return;
    setProjectModalError('');
    deleteBtn.disabled = true;
    deleteBtn.classList.add('is-loading');
    try {
      const res = await window.wesApiFetch(`/projects/${encodeURIComponent(projectId)}`, { method: 'DELETE' });
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
        setProjectModalError(`Não foi possível excluir (${res.status}): ${detail}`);
        return;
      }
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
      if (deleteBtn) {
        deleteBtn.classList.remove('is-loading');
        deleteBtn.disabled = !deleteConfirm?.checked;
      }
    }
  });

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

if (profilePage) {
  const auth = window.WesDashboardAuth?.read?.();
  let currentEmail = auth?.userId || 'admin@1wes.com';
  const displayName = auth?.displayName || document.querySelector('.user-name')?.textContent?.trim() || 'Usuário';
  const tenantName = document.querySelector('.user-tenant')?.textContent?.trim() || 'AVAS';
  const profileEmailModal = document.getElementById('profileEmailModal');
  const profilePasswordModal = document.getElementById('profilePasswordModal');
  const profileSummaryAvatar = document.getElementById('profileSummaryAvatar');
  const profileSummaryName = document.getElementById('profileSummaryName');
  const profileSummaryEmail = document.getElementById('profileSummaryEmail');
  const profileSummaryTenant = document.getElementById('profileSummaryTenant');
  const profileCurrentEmail = document.getElementById('profileCurrentEmail');
  const profileCurrentEmailCode = document.getElementById('profileCurrentEmailCode');
  const profileSendNewEmailCode = document.getElementById('profileSendNewEmailCode');
  const profileEmailForm = document.getElementById('profileEmailForm');
  const profilePasswordForm = document.getElementById('profilePasswordForm');
  const profileNewEmail = document.getElementById('profileNewEmail');
  const profileNewEmailCode = document.getElementById('profileNewEmailCode');
  const profileEmailSubmit = document.getElementById('profileEmailSubmit');
  const profileEmailFeedback = document.getElementById('profileEmailFeedback');
  const profilePasswordEmail = document.getElementById('profilePasswordEmail');
  const profileNewPassword = document.getElementById('profileNewPassword');
  const profileConfirmPassword = document.getElementById('profileConfirmPassword');
  const profilePasswordCode = document.getElementById('profilePasswordCode');
  const profilePasswordSubmit = document.getElementById('profilePasswordSubmit');
  const profilePasswordFeedback = document.getElementById('profilePasswordFeedback');
  let currentEmailCodeSent = false;
  let newEmailCodeSent = false;
  let passwordCodeSent = false;

  const setProfileFeedback = (el, message = '', isError = false) => {
    if (!el) return;
    el.textContent = message;
    el.hidden = !message;
    el.classList.toggle('is-error', Boolean(isError));
  };

  const normalizeCode = (input) => String(input?.value || '').replace(/\D/g, '').slice(0, 6);
  const isValidProfileEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());

  const syncProfileEmailDisplay = () => {
    if (profileSummaryEmail) profileSummaryEmail.textContent = currentEmail;
    if (profileCurrentEmail) profileCurrentEmail.value = currentEmail;
    if (profilePasswordEmail) profilePasswordEmail.value = currentEmail;
  };

  const openProfileModal = (modal) => {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('input, button')?.focus();
  };

  const closeProfileModal = (modal) => {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  };

  const resetProfileEmailForm = () => {
    profileEmailForm?.reset();
    currentEmailCodeSent = false;
    newEmailCodeSent = false;
    syncProfileEmailDisplay();
    setProfileFeedback(profileEmailFeedback);
    updateProfileEmailState();
  };

  const resetProfilePasswordForm = () => {
    profilePasswordForm?.reset();
    passwordCodeSent = false;
    syncProfileEmailDisplay();
    setProfileFeedback(profilePasswordFeedback);
    updateProfilePasswordState();
  };

  const updateProfileEmailState = () => {
    if (!profileEmailSubmit) return;
    const typedCurrentEmail = String(profileCurrentEmail?.value || '').trim();
    const nextEmail = String(profileNewEmail?.value || '').trim();
    const currentCode = normalizeCode(profileCurrentEmailCode);
    const nextCode = normalizeCode(profileNewEmailCode);
    const currentEmailConfirmed = currentEmailCodeSent && typedCurrentEmail.toLowerCase() === currentEmail.toLowerCase() && currentCode.length === 6;
    const nextEmailReady = isValidProfileEmail(nextEmail) && nextEmail.toLowerCase() !== currentEmail.toLowerCase();
    if (profileSendNewEmailCode) profileSendNewEmailCode.disabled = !(currentEmailConfirmed && nextEmailReady);
    profileEmailSubmit.disabled = !(currentEmailConfirmed && newEmailCodeSent && nextEmailReady && nextCode.length === 6);
  };

  const updateProfilePasswordState = () => {
    if (!profilePasswordSubmit) return;
    const passwordEmail = String(profilePasswordEmail?.value || '').trim();
    const password = String(profileNewPassword?.value || '');
    const confirmation = String(profileConfirmPassword?.value || '');
    const code = normalizeCode(profilePasswordCode);
    const emailReady = passwordEmail.toLowerCase() === currentEmail.toLowerCase();
    profilePasswordSubmit.disabled = !(passwordCodeSent && emailReady && password.length >= 8 && password === confirmation && code.length === 6);
  };

  if (profileSummaryAvatar) profileSummaryAvatar.textContent = (displayName[0] || currentEmail[0] || 'U').toUpperCase();
  if (profileSummaryName) profileSummaryName.textContent = displayName;
  if (profileSummaryTenant) profileSummaryTenant.textContent = tenantName;
  syncProfileEmailDisplay();

  document.getElementById('openProfileEmailModal')?.addEventListener('click', () => {
    resetProfileEmailForm();
    openProfileModal(profileEmailModal);
    profileCurrentEmail?.focus();
  });

  document.getElementById('openProfilePasswordModal')?.addEventListener('click', () => {
    resetProfilePasswordForm();
    openProfileModal(profilePasswordModal);
    profilePasswordEmail?.focus();
  });

  document.querySelectorAll('[data-profile-modal-close]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const modal = trigger.closest('.modal');
      if (modal === profileEmailModal) resetProfileEmailForm();
      if (modal === profilePasswordModal) resetProfilePasswordForm();
      closeProfileModal(modal);
    });
  });

  document.getElementById('profileSendCurrentEmailCode')?.addEventListener('click', () => {
    const typedCurrentEmail = String(profileCurrentEmail?.value || '').trim();
    if (typedCurrentEmail.toLowerCase() !== currentEmail.toLowerCase()) {
      currentEmailCodeSent = false;
      setProfileFeedback(profileEmailFeedback, 'Informe o email atual do usuário para receber o código.', true);
      updateProfileEmailState();
      return;
    }
    currentEmailCodeSent = true;
    setProfileFeedback(profileEmailFeedback, `Código enviado para ${currentEmail}.`);
    showAppToast('Código de verificação enviado ao email atual');
    updateProfileEmailState();
  });

  profileSendNewEmailCode?.addEventListener('click', () => {
    const nextEmail = String(profileNewEmail?.value || '').trim();
    if (!isValidProfileEmail(nextEmail) || nextEmail.toLowerCase() === currentEmail.toLowerCase()) {
      newEmailCodeSent = false;
      setProfileFeedback(profileEmailFeedback, 'Informe um novo email válido para receber o código.', true);
      updateProfileEmailState();
      return;
    }
    newEmailCodeSent = true;
    setProfileFeedback(profileEmailFeedback, `Código de confirmação enviado para ${nextEmail}.`);
    showAppToast('Código enviado ao novo email');
    updateProfileEmailState();
  });

  document.getElementById('profileSendPasswordCode')?.addEventListener('click', () => {
    const passwordEmail = String(profilePasswordEmail?.value || '').trim();
    if (passwordEmail.toLowerCase() !== currentEmail.toLowerCase()) {
      passwordCodeSent = false;
      setProfileFeedback(profilePasswordFeedback, 'Informe o email deste usuário para receber o código.', true);
      updateProfilePasswordState();
      return;
    }
    passwordCodeSent = true;
    setProfileFeedback(profilePasswordFeedback, `Código enviado para ${currentEmail}.`);
    showAppToast('Código de verificação enviado ao email atual');
    updateProfilePasswordState();
  });

  [profileCurrentEmail, profileCurrentEmailCode, profileNewEmail, profileNewEmailCode].forEach((field) => {
    field?.addEventListener('input', () => {
      if (field === profileCurrentEmail) currentEmailCodeSent = false;
      if (field === profileNewEmail) newEmailCodeSent = false;
      if (field === profileCurrentEmailCode || field === profileNewEmailCode) field.value = normalizeCode(field);
      updateProfileEmailState();
    });
  });

  [profilePasswordEmail, profileNewPassword, profileConfirmPassword, profilePasswordCode].forEach((field) => {
    field?.addEventListener('input', () => {
      if (field === profilePasswordEmail) passwordCodeSent = false;
      if (field === profilePasswordCode) field.value = normalizeCode(field);
      updateProfilePasswordState();
    });
  });

  profileEmailForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (profileEmailSubmit?.disabled) return;
    const nextEmail = String(profileNewEmail?.value || '').trim();
    currentEmail = nextEmail;
    syncProfileEmailDisplay();
    showAppToast('Email alterado com confirmação por código');
    closeProfileModal(profileEmailModal);
    profileEmailForm.reset();
    currentEmailCodeSent = false;
    newEmailCodeSent = false;
    updateProfileEmailState();
  });

  profilePasswordForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (profilePasswordSubmit?.disabled) return;
    showAppToast('Senha alterada com sucesso');
    closeProfileModal(profilePasswordModal);
    profilePasswordForm.reset();
    passwordCodeSent = false;
    updateProfilePasswordState();
  });

  updateProfileEmailState();
  updateProfilePasswordState();
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
      list.setAttribute('title', items.join(' · '));
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
  'dashboard/automations/new': 'page-automations-create',
  'dashboard/document-analysis': 'page-document-analysis',
  'dashboard/schedules': 'page-schedules',
  'dashboard/agents': 'page-agents',
  'dashboard/voice-messaging': 'page-voice-messaging',
  'dashboard/voice-messaging/insights': 'page-voice-messaging-insights',
  'dashboard/voice-messaging/new': 'page-voice-messaging-create',
  'dashboard/campaigns': 'page-campaigns',
  'dashboard/campaigns/new': 'page-campaigns-create',
  'dashboard/hybrid-flows': 'page-hybrid-flows',
  'dashboard/hybrid-flows/new': 'page-hybrid-flows-create',
  'dashboard/hybrid-flows/history': 'page-hybrid-flows-history',
  'dashboard/hybrid-flows/history/details': 'page-hybrid-flows-history-details',
  'dashboard/vm-monitoring': 'page-vm-monitoring',
  'dashboard/executors': 'page-executors',
  'dashboard/packages': 'page-packages',
  'dashboard/channels': 'page-channels',
  'dashboard/channels/telegram': 'page-telegram-config',
  'dashboard/channels/telegram/botfather': 'page-telegram-botfather',
  'dashboard/credentials': 'page-credentials',
  'dashboard/input-files': 'page-input-files',
  'dashboard/users': 'page-users',
  'dashboard/mcps': 'page-mcps',
  'dashboard/skills': 'page-skills',
  'dashboard/audit': 'page-agent-history',
  'dashboard/agent-history': 'page-agent-history',
  'dashboard/organizations': 'page-organizations',
  'dashboard/companies': 'page-companies',
  // 'dashboard/organization': 'page-organization',
  'dashboard/environments': 'page-environments',
  'dashboard/bpmn': 'page-bpmn',
  'dashboard/fluxos': 'page-fluxos',
  'dashboard/history': 'page-history',
  'dashboard/profile': 'page-profile',
  'dashboard/settings': 'page-settings'
};

const sectionMap = {
  'dashboard': 'Painel',
  'dashboard/automations': 'Fluxos de Trabalho',
  'dashboard/automations/new': 'Fluxos de Trabalho',
  'dashboard/document-analysis': 'Fluxos de Trabalho',
  'dashboard/input-files': 'Fluxos de Trabalho',
  'dashboard/schedules': 'Fluxos de Trabalho',
  'dashboard/credentials': 'Fluxos de Trabalho',
  'dashboard/agents': 'Painel',
  'dashboard/voice-messaging': 'Atendimento dinâmico',
  'dashboard/voice-messaging/insights': 'Atendimento dinâmico',
  'dashboard/voice-messaging/new': 'Atendimento dinâmico',
  'dashboard/campaigns': 'Atendimento dinâmico',
  'dashboard/campaigns/new': 'Atendimento dinâmico',
  'dashboard/hybrid-flows': 'Atendimento dinâmico',
  'dashboard/hybrid-flows/new': 'Atendimento dinâmico',
  'dashboard/hybrid-flows/history': 'Atendimento dinâmico',
  'dashboard/hybrid-flows/history/details': 'Atendimento dinâmico',
  'dashboard/vm-monitoring': 'Máquinas virtuais',
  'dashboard/executors': 'Infraestrutura',
  'dashboard/packages': 'Infraestrutura',
  'dashboard/channels': 'Atendimento dinâmico',
  'dashboard/channels/telegram': 'Atendimento dinâmico',
  'dashboard/channels/telegram/botfather': 'Atendimento dinâmico',
  'dashboard/users': 'Administração',
  'dashboard/mcps': 'Administração',
  'dashboard/skills': 'Administração',
  'dashboard/audit': 'Administração',
  'dashboard/agent-history': 'Administração',
  'dashboard/organizations': 'Administração',
  'dashboard/companies': 'Administração',
  'dashboard/environments': 'Administração',
  // 'dashboard/organization': 'Organização',
  'dashboard/bpmn': 'Processos',
  'dashboard/fluxos': 'Processos',
  'dashboard/history': 'Painel de histórico',
  'dashboard/profile': 'Perfil',
  'dashboard/settings': 'Configurações'
};

const organizationAccessProfiles = {
  'adm-wes': {
    id: 'adm-wes',
    name: 'ADM WES',
    showAdministration: true,
    organizationScope: 'all',
    canManageOrganizations: true,
    canManageCompanies: true,
    canSwitchOrganization: true,
  },
  cedae: {
    id: 'cedae',
    name: 'ADM Cliente',
    showAdministration: true,
    organizationScope: 'cedae',
    canManageOrganizations: false,
    canManageCompanies: true,
    canSwitchOrganization: false,
  },
  'user-cedae': {
    id: 'user-cedae',
    name: 'Usuário Cliente',
    showAdministration: false,
    organizationScope: 'cedae',
    canManageOrganizations: false,
    canManageCompanies: false,
    canSwitchOrganization: false,
  },
};

const getSelectedOrganizationAccess = () => {
  try {
    const raw = sessionStorage.getItem(SELECTED_ORG_ACCESS_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    const profile = organizationAccessProfiles[parsed?.id];
    if (profile) return profile;
  } catch {
    /* ignore */
  }
  return organizationAccessProfiles['adm-wes'];
};

const setAccessVisibility = (element, isVisible) => {
  if (!element) return;
  element.classList.toggle('is-hidden', !isVisible);
  element.toggleAttribute('hidden', !isVisible);
  element.setAttribute('aria-hidden', isVisible ? 'false' : 'true');
};

const isInOrganizationScope = (organizationId, access) => {
  const scope = String(access?.organizationScope || access?.id || '').trim();
  if (!scope || scope === 'all') return true;
  return String(organizationId || '').trim() === scope;
};

const applyCompaniesOrganizationScope = (access) => {
  if (!companiesTable) return;
  companiesTable.querySelectorAll('[data-company-row]').forEach((row) => {
    const showRow = isInOrganizationScope(row.dataset.companyOrganization, access);
    row.hidden = !showRow;
    row.classList.toggle('is-hidden', !showRow);
  });
};

const applyEnvironmentCompanyOptionsScope = (access) => {
  if (!environmentsCompanySelect) return;
  Array.from(environmentsCompanySelect.options).forEach((option) => {
    const organizationId = option.dataset.organization || '';
    const showOption = option.value === 'all' || isInOrganizationScope(organizationId, access);
    option.hidden = !showOption;
    option.disabled = !showOption;
  });
  const selected = environmentsCompanySelect.selectedOptions[0];
  if (!selected || selected.disabled || selected.hidden) {
    environmentsCompanySelect.value = 'all';
  }
};

const applyOrganizationAccessControls = (routeKey) => {
  const access = getSelectedOrganizationAccess();
  const administrationGroup = document.querySelector('[data-access-section="administration"]');
  const organizationsLink = document.querySelector('[data-access-item="organizations"]');
  const companiesLink = document.querySelector('[data-access-item="companies"]');
  const switchOrganizationLink = document.querySelector('[data-access-item="switch-organization"]');
  const tenantEl = document.querySelector('#userMenu .user-tenant');

  document.body.dataset.organizationAccess = access.id;
  document.body.dataset.organizationScope = access.organizationScope || access.id || 'all';
  if (tenantEl) tenantEl.textContent = access.name;

  setAccessVisibility(administrationGroup, access.showAdministration);
  setAccessVisibility(organizationsLink, access.showAdministration && access.canManageOrganizations);
  setAccessVisibility(companiesLink, access.showAdministration && access.canManageCompanies);
  setAccessVisibility(switchOrganizationLink, access.canSwitchOrganization);
  setAccessVisibility(environmentsCompanySelectWrap, access.showAdministration && access.canManageCompanies);
  applyCompaniesOrganizationScope(access);
  applyEnvironmentCompanyOptionsScope(access);
  if (environmentsCompanySelect) {
    environmentsCompanySelect.value = 'all';
    environmentsCompanySelect.dispatchEvent(new Event('change'));
  }

  const isAdministrationRoute = sectionMap[routeKey] === 'Administração';
  const isOrganizationsRoute = routeKey === 'dashboard/organizations';
  const isCompaniesRoute = routeKey === 'dashboard/companies';
  const blockedRoute =
    (!access.showAdministration && isAdministrationRoute) ||
    (!access.canManageOrganizations && isOrganizationsRoute) ||
    (!access.canManageCompanies && isCompaniesRoute);

  if (blockedRoute) {
    window.location.hash = '#/dashboard';
    return false;
  }

  return true;
};

const normalizeAutomationLabels = () => {
  const automationTrigger = document.querySelector('.nav-trigger[data-menu="automation"] .nav-label');
  if (automationTrigger) automationTrigger.textContent = 'Fluxos de Trabalho';

  const automationsLink = document.querySelector('#submenu-automation a[href="#/dashboard/automations"] .submenu-label');
  if (automationsLink) automationsLink.textContent = 'Automa\u00e7\u00f5es';

  const documentAnalysisLink = document.querySelector('#submenu-automation a[href="#/dashboard/document-analysis"] .submenu-label');
  if (documentAnalysisLink) documentAnalysisLink.textContent = 'An\u00e1lise de documentos';
};

const normalizeVisiblePortugueseLabels = () => {
  normalizeAutomationLabels();

  const replacements = [
    ['.nav-trigger[data-menu="administration"] .nav-label', 'Administra\u00e7\u00e3o'],
    ['#submenu-administration a[href="#/dashboard/audit"] .submenu-label', 'Auditoria'],
    ['#submenu-administration a[href="#/dashboard/mcps"] .submenu-label', 'Conex\u00f5es'],
    ['#submenu-administration a[href="#/dashboard/organizations"] .submenu-label', 'Organiza\u00e7\u00f5es'],
    ['#submenu-administration a[href="#/dashboard/companies"] .submenu-label', 'Empresas'],
    ['#submenu-administration a[href="#/dashboard/skills"] .submenu-label', 'Habilidades'],
    ['#submenu-administration a[href="#/dashboard/environments"] .submenu-label', 'Setores'],
    ['#submenu-administration a[href="#/dashboard/users"] .submenu-label', 'Usu\u00e1rios'],
    ['#wesProjectDescription', null],
  ];

  replacements.forEach(([selector, text]) => {
    const el = document.querySelector(selector);
    if (el && text) el.textContent = text;
  });

  const dashboardTitle = document.getElementById('dashboardToggle');
  if (dashboardTitle) {
    dashboardTitle.textContent = dashboardTitle.textContent
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
  const { routeKey } = getHashRouteInfo();
  if (!isStandaloneChatRoute(routeKey) && agentChatModal?.classList.contains('agent-chat-modal--standalone')) {
    agentChatModal.classList.remove('open', 'agent-chat-modal--standalone', 'voice-mode', 'voice-history-open', 'has-voice-transcript');
    agentChatModal.setAttribute('aria-hidden', 'true');
    agentChatModal.dataset.routeAgentHydrated = 'false';
    agentChatModal.dataset.routeHybridFlowHydrated = 'false';
  }
  if (!applyOrganizationAccessControls(routeKey)) return;
  let pageId = routeMap[routeKey];
  if (!pageId && routeKey.startsWith('dashboard/agents/project/')) {
    pageId = 'page-agents';
  }
  if (!pageId && routeKey.startsWith('dashboard/vm-monitoring/machine/')) {
    pageId = 'page-vm-monitoring';
  }
  if (!pageId) pageId = 'page-dashboard';
  const page = document.getElementById(pageId);

  pages.forEach((pageEl) => pageEl.classList.remove('is-active'));
  if (page) {
    page.classList.add('is-active');
    page.tabIndex = -1;
  }
  if (pageId === 'page-agent-history') {
    setActiveHistoryTab(routeKey === 'dashboard/agent-history' ? 'history-agents' : 'history-audit');
  }
  forceRouteScrollTop(routeKey);
  window.requestAnimationFrame(() => forceRouteScrollTop(routeKey));
  window.setTimeout(() => forceRouteScrollTop(routeKey), 0);
  window.setTimeout(() => forceRouteScrollTop(routeKey), 50);
  window.setTimeout(() => forceRouteScrollTop(routeKey), 250);

  const navRouteKey = routeKey.startsWith('dashboard/agents/project/')
    ? 'dashboard/agents'
    : routeKey.startsWith('dashboard/vm-monitoring/machine/')
      ? 'dashboard/vm-monitoring'
    : routeKey.startsWith('dashboard/automations/')
      ? 'dashboard/automations'
    : routeKey.startsWith('dashboard/voice-messaging/')
      ? 'dashboard/voice-messaging'
    : routeKey.startsWith('dashboard/campaigns/')
      ? 'dashboard/campaigns'
    : routeKey.startsWith('dashboard/channels/')
      ? 'dashboard/channels'
      : routeKey;

  if (hubScopeBar) {
    const hideHubScopeRoutes = [
      'dashboard/automations',
      'dashboard/document-analysis',
      'dashboard/schedules',
      'dashboard/voice-messaging',
      'dashboard/voice-messaging/new',
      'dashboard/campaigns',
      'dashboard/hybrid-flows',
      'dashboard/agents',
      'dashboard/vm-monitoring',
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
      navRouteKey === 'dashboard/document-analysis' ||
      navRouteKey === 'dashboard/schedules'
    ) {
      dashboardToggle.textContent = 'Fluxos de Trabalho';
    }
  }

  navLinks.forEach((link) => link.classList.remove('active'));
  navTriggers.forEach((trigger) => {
    trigger.classList.remove('open');
    trigger.classList.remove('active');
  });
  document.querySelectorAll('.submenu').forEach((menu) => menu.classList.remove('open'));

  const directNavLink = document.querySelector(`.nav-item[data-route="${navRouteKey}"]`);
  if (directNavLink) {
    directNavLink.classList.add('active');
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
  applyVmMonitoringRoute();
  openAgentChatFromRouteParam();

  if (window.WesDashboardAuth?.isAuthenticated?.()) {
    void refreshHubScopeFromApi();
  }
  if (navRouteKey === 'dashboard/agents' || routeKey.startsWith('dashboard/agents/project/')) {
    void refreshAgentsTableFromApi().then(() => openAgentChatFromRouteParam());
  }
  if (directChatFab) {
    const hideDirectChatFab = routeKey === 'dashboard/agents' || routeKey.startsWith('dashboard/agents/project/');
    directChatFab.hidden = hideDirectChatFab;
    directChatFab.setAttribute('aria-hidden', hideDirectChatFab ? 'true' : 'false');
  }
  document.body.classList.toggle('route-agents', routeKey === 'dashboard/agents' || routeKey.startsWith('dashboard/agents/project/'));
  document.body.classList.toggle('route-automation-create', routeKey === 'dashboard/automations/new');
  document.body.classList.toggle('route-executors', routeKey === 'dashboard/executors');
  document.body.classList.toggle('route-vm-monitoring', routeKey === 'dashboard/vm-monitoring' || routeKey.startsWith('dashboard/vm-monitoring/machine/'));
  document.body.classList.toggle('route-channels', routeKey === 'dashboard/channels' || routeKey.startsWith('dashboard/channels/'));
  document.body.classList.toggle('route-profile', routeKey === 'dashboard/profile');
  syncVoiceMessagingInsightsChart(routeKey);
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

document.addEventListener('click', (event) => {
  const openVoiceMessagingPopovers = document.querySelectorAll('.voice-messaging-hint-popover[open]');
  if (!openVoiceMessagingPopovers.length) return;
  if (event.target.closest('.voice-messaging-hint-popover')) return;
  openVoiceMessagingPopovers.forEach((popover) => popover.removeAttribute('open'));
});
 
/** Painel lateral - chat direto (POST /chat, sem agente) */
(function initDirectChatDrawer() {
  const drawer = document.getElementById('directChatDrawer');
  const fab = document.getElementById('directChatFab');
  const thread = document.getElementById('directChatThread');
  const emptyEl = document.getElementById('directChatEmpty');
  const input = document.getElementById('directChatInput');
  const sendBtn = document.getElementById('directChatSend');
  const errEl = document.getElementById('directChatError');
  const newBtn = document.getElementById('directChatNewBtn');
  const historyBtn = document.getElementById('directChatHistoryBtn');
  const suggestionButtons = drawer.querySelectorAll('[data-direct-chat-prompt]');
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

  historyBtn?.addEventListener('click', () => {
    if (typeof showAppToast === 'function') showAppToast('Histórico visual em breve');
  });

  suggestionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      input.value = button.dataset.directChatPrompt || '';
      updateSendState();
      input.focus();
    });
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
  const slugifyEnvironmentName = (value) =>
    String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

  const getUniqueEnvironmentCode = (name) => {
    const base = `env-${slugifyEnvironmentName(name) || 'novo-setor'}`;
    const rows = Array.from(environmentsTable.querySelectorAll('.environment-row'));
    const used = new Set(rows.map((row) => String(row.dataset.environmentCode || '').trim().toLowerCase()));
    if (!used.has(base)) return base;
    let suffix = 2;
    while (used.has(`${base}-${suffix}`)) suffix += 1;
    return `${base}-${suffix}`;
  };

  const getEnvironmentCompanyLabel = (companyValue) => {
    const value = String(companyValue || '').trim();
    if (!value) return '-';
    const option = environmentsCompanySelect?.querySelector(`option[value="${CSS.escape(value)}"]`);
    return option ? option.textContent.trim() : value.toUpperCase();
  };

  const getEnvironmentOrganizationId = (companyValue) => {
    const value = String(companyValue || '').trim();
    const option = value ? environmentsCompanySelect?.querySelector(`option[value="${CSS.escape(value)}"]`) : null;
    return option?.dataset.organization || String(getSelectedOrganizationAccess().organizationScope || '').trim() || 'avas-group';
  };

  const createEnvironmentRow = ({ name, owner, description, company = 'avas', users = 0 }) => {
    const row = document.createElement('div');
    row.className = 'data-row environment-row';

    const code = getUniqueEnvironmentCode(name);
    row.dataset.environmentName = name;
    row.dataset.environmentCode = code;
    row.dataset.environmentDescription = description;
    row.dataset.environmentOwner = owner;
    row.dataset.environmentCompany = company;
    row.dataset.environmentOrganization = getEnvironmentOrganizationId(company);
    row.dataset.environmentProjects = '0';
    row.dataset.environmentAgents = '0';
    row.dataset.environmentUsers = String(users);

    row.innerHTML = `
      <span class="environment-name-cell">
        <span>
          <strong>${escapeHtmlWes(name)}</strong>
        </span>
      </span>
      <span class="environment-description-cell">${escapeHtmlWes(description || '-')}</span>
      <span class="environment-company-cell">${escapeHtmlWes(getEnvironmentCompanyLabel(company))}</span>
      <span class="environment-owner-cell">${escapeHtmlWes(owner)}</span>
      <span class="environment-projects-cell">0</span>
      <span class="environment-agents-cell">0</span>
      <span class="environment-users-cell">${escapeHtmlWes(users)}</span>
      <span class="row-actions">
        <button class="icon-btn action-icon environment-edit-trigger" aria-label="Editar setor" type="button">
          <span class="material-symbols-rounded">edit</span>
        </button>
        <button class="icon-btn action-icon danger environment-delete-trigger" aria-label="Excluir setor" type="button">
          <span class="material-symbols-rounded">delete</span>
        </button>
      </span>
    `;

    environmentsTable.appendChild(row);
    return row;
  };
