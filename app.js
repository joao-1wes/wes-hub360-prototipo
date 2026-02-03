const filterBtn = document.getElementById('alertFilterBtn');
const filterMenu = document.getElementById('alertFilterMenu');
const menuToggle = document.getElementById('menuToggle');
const appShell = document.getElementById('appShell');
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
const openAgentModal = document.getElementById('openAgentModal');
const agentModal = document.getElementById('agentModal');
const agentChatModal = document.getElementById('agentChatModal');
const agentChatTitle = document.getElementById('agentChatTitle');
const agentChatSubtitle = document.getElementById('agentChatSubtitle');
const agentChatButtons = document.querySelectorAll('.agent-chat-toggle');
const chatAttachToggle = document.querySelector('.chat-attach-toggle');
const chatAttachMenu = document.querySelector('.chat-attach-menu');
const chatSkillToggle = document.querySelector('.chat-skill-toggle');
const chatSkillMenu = document.querySelector('.chat-skill-menu');
const chatSkillSwitches = document.querySelectorAll('.chat-skill-item input[type="checkbox"]');
const chatAttachGroup = document.querySelector('.chat-attach-group');
const chatSkillStatusDot = document.querySelector('.chat-skill-status .status-dot');
const chatHistoryItems = document.querySelectorAll('.chat-history-item');
const chatHistoryTitles = document.querySelectorAll('.chat-history-title');
const chatHistoryEdits = document.querySelectorAll('.chat-history-edit');
const chatSendButton = document.querySelector('.chat-send');
const openBillingModal = document.getElementById('openBillingModal');
const billingModal = document.getElementById('billingModal');
const keysFilterBtn = document.getElementById('keysFilterBtn');
const keysFilterMenu = document.getElementById('keysFilterMenu');
const settingsTabs = document.querySelectorAll('#page-settings .settings-tab');
const settingsPanels = document.querySelectorAll('#page-settings .settings-panel');
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-item[data-route], .submenu-item[href^="#/"]');
const detailsToggles = document.querySelectorAll('.details-toggle');
const automationTabs = document.querySelectorAll('#page-automations .tab');
const automationPanels = document.querySelectorAll('#page-automations .tab-panel');
const executorTabs = document.querySelectorAll('#page-executors .tab');
const executorPanels = document.querySelectorAll('#page-executors .tab-panel');
const usersTabs = document.querySelectorAll('#page-users .tab');
const usersPanels = document.querySelectorAll('#page-users .tab-panel');
const orgTabs = document.querySelectorAll('#page-organization .tab');
const orgPanels = document.querySelectorAll('#page-organization .tab-panel');
const orgActionButtons = document.querySelectorAll('#page-organization .org-action');
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
  openAgentModal.addEventListener('click', () => {
    agentModal.classList.add('open');
    agentModal.setAttribute('aria-hidden', 'false');
  });

  agentModal.addEventListener('click', (event) => {
    const closeTarget = event.target.closest('[data-modal-close]');
    if (closeTarget) {
      agentModal.classList.remove('open');
      agentModal.setAttribute('aria-hidden', 'true');
    }
  });
}

if (agentChatModal && agentChatButtons.length) {
  agentChatButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const row = button.closest('.agents-row');
      let agentName = 'Agente';
      let agentId = '';

      if (row) {
        const cells = Array.from(row.children).filter(
          (child) => child.tagName === 'SPAN' && !child.classList.contains('row-actions')
        );
        if (cells[0]) agentName = cells[0].textContent.trim();
        if (cells[1]) agentId = cells[1].textContent.trim();
      }

      if (agentChatTitle) {
        agentChatTitle.textContent = `Chat com ${agentName}`;
      }
      if (agentChatSubtitle) {
        const activeHistory = document.querySelector('.chat-history-item.active');
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
        window.lucide.createIcons();
      }
      updateSkillStatus();
    });
  });

  agentChatModal.addEventListener('click', (event) => {
    const closeTarget = event.target.closest('[data-modal-close]');
    if (closeTarget) {
      agentChatModal.classList.remove('open');
      agentChatModal.setAttribute('aria-hidden', 'true');
      if (chatAttachMenu) {
        chatAttachMenu.classList.remove('open');
      }
      if (chatSkillMenu) {
        chatSkillMenu.classList.remove('open');
      }
    }
  });
}

if (chatHistoryItems.length) {
  chatHistoryItems.forEach((item) => {
    item.addEventListener('click', () => {
      chatHistoryItems.forEach((card) => card.classList.remove('active'));
      item.classList.add('active');
      const title = item.querySelector('.chat-history-title')?.value || 'Conversa';
      const date = item.querySelector('.chat-history-date')?.textContent?.trim() || 'Hoje';
      if (agentChatSubtitle) {
        agentChatSubtitle.textContent = `${title} • Última conversa ${date}`;
      }
    });

    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        item.click();
      }
    });
  });
}

if (chatHistoryTitles.length) {
  chatHistoryTitles.forEach((input) => {
    input.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    input.addEventListener('input', () => {
      const parent = input.closest('.chat-history-item');
      if (parent && parent.classList.contains('active') && agentChatSubtitle) {
        const date = parent.querySelector('.chat-history-date')?.textContent?.trim() || 'Hoje';
        agentChatSubtitle.textContent = `${input.value || 'Conversa'} • Última conversa ${date}`;
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
  });
}

if (chatHistoryEdits.length) {
  chatHistoryEdits.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const parent = button.closest('.chat-history-item');
      const input = parent?.querySelector('.chat-history-title');
      if (!input || !parent) return;
      input.dataset.prevValue = input.value;
      input.removeAttribute('readonly');
      parent.classList.add('editing');
      input.focus();
      input.select();
    });
  });
}

if (chatSendButton) {
  chatSendButton.addEventListener('click', () => {
    const activeHistory = document.querySelector('.chat-history-item.active');
    if (!activeHistory) return;
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formatted = `${day}/${month}/${year}`;
    const dateEl = activeHistory.querySelector('.chat-history-date');
    if (dateEl) {
      dateEl.textContent = formatted;
    }
    const title = activeHistory.querySelector('.chat-history-title')?.value || 'Conversa';
    if (agentChatSubtitle) {
      agentChatSubtitle.textContent = `${title} • Última conversa ${formatted}`;
    }
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
};

if (chatSkillSwitches.length) {
  chatSkillSwitches.forEach((toggle) => {
    toggle.addEventListener('change', updateSkillStatus);
  });
  updateSkillStatus();
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
        if (item !== menu) item.classList.remove('open');
      });

      menu.classList.toggle('open');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.add-menu').forEach((item) => item.classList.remove('open'));
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
  'dashboard/schedules': 'page-schedules',
  'dashboard/agents': 'page-agents',
  'dashboard/queues': 'page-queues',
  'dashboard/executors': 'page-executors',
  'dashboard/packages': 'page-packages',
  'dashboard/credentials': 'page-credentials',
  'dashboard/input-files': 'page-input-files',
  'dashboard/users': 'page-users',
  'dashboard/audit': 'page-audit',
  'dashboard/organization': 'page-organization',
  'dashboard/environments': 'page-environments',
  'dashboard/bpmn': 'page-bpmn',
  'dashboard/fluxos': 'page-fluxos',
  'dashboard/settings': 'page-settings'
};

const sectionMap = {
  'dashboard': 'Painel',
  'dashboard/automations': 'Automação',
  'dashboard/schedules': 'Automação',
  'dashboard/agents': 'Automação',
  'dashboard/queues': 'Automação',
  'dashboard/executors': 'Infraestrutura',
  'dashboard/packages': 'Infraestrutura',
  'dashboard/credentials': 'Armazenamento',
  'dashboard/input-files': 'Armazenamento',
  'dashboard/users': 'Administração',
  'dashboard/audit': 'Administração',
  'dashboard/organization': 'Administração',
  'dashboard/environments': 'Administração',
  'dashboard/bpmn': 'Processos',
  'dashboard/fluxos': 'Processos',
  'dashboard/settings': 'Configurações'
};

const updateActivePage = () => {
  const hash = window.location.hash.replace('#/', '');
  const routeKey = hash || 'dashboard';
  const pageId = routeMap[routeKey] || 'page-dashboard';
  const page = document.getElementById(pageId);

  pages.forEach((pageEl) => pageEl.classList.remove('is-active'));
  if (page) {
    page.classList.add('is-active');
  }

  if (dashboardToggle) {
    const sectionTitle = sectionMap[routeKey] || 'Painel';
    dashboardToggle.textContent = sectionTitle;
  }

  navLinks.forEach((link) => link.classList.remove('active'));
  navTriggers.forEach((trigger) => {
    trigger.classList.remove('open');
    trigger.classList.remove('active');
  });
  document.querySelectorAll('.submenu').forEach((menu) => menu.classList.remove('open'));

  if (routeKey === 'dashboard') {
    const dashboardLink = document.querySelector('.nav-item[data-route="dashboard"]');
    if (dashboardLink) {
      dashboardLink.classList.add('active');
    }
  } else {
    const activeLink = document.querySelector(`.submenu-item[href="#/${routeKey}"]`);
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
};

updateActivePage();
window.addEventListener('hashchange', updateActivePage);

if (window.lucide) {
  window.lucide.createIcons();
}
