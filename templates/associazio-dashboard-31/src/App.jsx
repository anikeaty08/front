import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && lucide.createIcons) {
          lucide.createIcons();
        }

        // Profile dropdown
        const profileBtn = document.getElementById('profileBtn');
        const profileDropdown = document.getElementById('profileDropdown');
        const profileMenuContent = document.getElementById('profileMenuContent');
        const avatarInitials = document.getElementById('avatarInitials');

        function closeOnOutsideClick(container, trigger) {
          document.addEventListener('click', (e) => {
            if (!container.contains(e.target) && !trigger.contains(e.target)) {
              container.classList.add('hidden');
            }
          });
        }

        if (profileBtn && profileDropdown) {
          profileBtn.addEventListener('click', () => {
            profileDropdown.classList.toggle('hidden');
          });
          closeOnOutsideClick(profileDropdown, profileBtn);
        }

        // Auth modal logic
        const authModal = document.getElementById('authModal');
        const openAuthFromMenu = document.getElementById('openAuthFromMenu');
        const authOverlay = authModal?.querySelector('[data-auth-overlay]');
        const authCloseBtns = document.querySelectorAll('[data-close-auth]');
        const tabLogin = document.getElementById('authTabLogin');
        const tabRegister = document.getElementById('authTabRegister');
        const panelLogin = document.getElementById('authPanelLogin');
        const panelRegister = document.getElementById('authPanelRegister');

        function openAuth() {
          authModal.classList.remove('hidden');
          setTimeout(() => {
            document.getElementById('loginEmail')?.focus();
          }, 50);
        }
        function closeAuth() {
          authModal.classList.add('hidden');
        }
        function setAuthTab(which = 'login') {
          const isLogin = which === 'login';
          tabLogin.setAttribute('aria-selected', isLogin);
          tabRegister.setAttribute('aria-selected', !isLogin);
          tabLogin.classList.toggle('bg-white', isLogin);
          tabLogin.classList.toggle('shadow-sm', isLogin);
          tabLogin.classList.toggle('text-neutral-600', !isLogin);
          tabRegister.classList.toggle('bg-white', !isLogin);
          tabRegister.classList.toggle('shadow-sm', !isLogin);
          tabRegister.classList.toggle('text-neutral-600', isLogin);
          panelLogin.classList.toggle('hidden', !isLogin);
          panelRegister.classList.toggle('hidden', isLogin);
          if (window.lucide && lucide.createIcons) lucide.createIcons();
        }

        openAuthFromMenu?.addEventListener('click', () => {
          profileDropdown?.classList.add('hidden');
          setAuthTab('login');
          openAuth();
        });
        authOverlay?.addEventListener('click', closeAuth);
        authCloseBtns.forEach(btn => btn.addEventListener('click', closeAuth));
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAuth(); });
        tabLogin?.addEventListener('click', () => setAuthTab('login'));
        tabRegister?.addEventListener('click', () => setAuthTab('register'));

        // Simulated auth flows
        const loginBtn = document.getElementById('loginSubmit');
        const registerBtn = document.getElementById('registerSubmit');

        function updateUIAfterLogin(nameOrEmail = 'Utente') {
          // Set avatar initials
          const initials = (nameOrEmail.trim()[0] || 'U').toUpperCase();
          avatarInitials.textContent = initials;
          avatarInitials.classList.remove('hidden');
          profileBtn.querySelector('[data-lucide="user"]')?.classList.add('hidden');

          // Update dropdown content
          profileMenuContent.innerHTML = `
            <div class="px-2 py-2">
              <div class="text-sm font-medium text-neutral-900">Connesso come</div              <div class="text-sm text-neutral-600 truncate">${nameOrEmail}</div>
            </div>
            <div class="my-1 h-px bg-neutral-200"></div>
            <button class="w-full text-left px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" data-lucide="settings" class="w-4 h-4 text-neutral-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.15.08a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.09a2 2 0 0 1 1 1.73v.36a2 2 0 0 1-1 1.73l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.73v-.36a2 2 0 0 1 1-1.73l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38A2 2 0 0 0 12.22 2z"></path><circle cx="12" cy="12" r="3"></circle></svg> Impostazioni
            </button>
            <button id="logoutBtn" class="w-full text-left px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm inline-flex items-center gap-2 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" data-lucide="log-out" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> Esci
            </button>
          `;
          if (window.lucide && lucide.createIcons) lucide.createIcons();

          document.getElementById('logoutBtn')?.addEventListener('click', () => {
            // Reset UI on logout
            avatarInitials.classList.add('hidden');
            profileBtn.querySelector('[data-lucide="user"]')?.classList.remove('hidden');
            profileMenuContent.innerHTML = `
              <div class="px-2 py-1.5 text-sm text-neutral-600">Non sei connesso</div>
              <button id="openAuthFromMenu" class="w-full text-left px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" data-lucide="log-in" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg> Accedi o registrati
              </button>
            `;
            if (window.lucide && lucide.createIcons) lucide.createIcons();
            document.getElementById('openAuthFromMenu')?.addEventListener('click', () => {
              profileDropdown?.classList.add('hidden');
              setAuthTab('login'); openAuth();
            });
          });

          closeAuth();
        }

        loginBtn?.addEventListener('click', (e) => {
          e.preventDefault();
          const email = document.getElementById('loginEmail').value || 'utente@example.com';
          updateUIAfterLogin(email);
        });

        registerBtn?.addEventListener('click', (e) => {
          e.preventDefault();
          const name = (document.getElementById('regFirstName').value || 'Nuovo') + ' ' + (document.getElementById('regLastName').value || 'Utente');
          updateUIAfterLogin(name.trim());
        });

        // Utility: toggle menu popovers
        function toggleMenu(btn, menu) {
          btn?.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('hidden');
          });
          document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !btn.contains(e.target)) {
              menu.classList.add('hidden');
            }
          });
        }

        // Add Org modal open/close
        const orgModal = document.getElementById('orgModal');
        const openOrgBtn = document.getElementById('addOrgBtn');
        const closeOrgBtns = orgModal?.querySelectorAll('[data-close-org]');
        const orgOverlay = orgModal?.querySelector('.absolute.inset-0');

        function openOrgModal() { orgModal.classList.remove('hidden'); }
        function closeOrgModal() { orgModal.classList.add('hidden'); }

        openOrgBtn?.addEventListener('click', openOrgModal);
        orgOverlay?.addEventListener('click', closeOrgModal);
        closeOrgBtns?.forEach(b => b.addEventListener('click', closeOrgModal));

        // Contact modal open/close
        const contactModal = document.getElementById('contactModal');
        const contactOverlay = contactModal?.querySelector('.absolute.inset-0');
        const closeContactBtns = contactModal?.querySelectorAll('[data-close-contact]');
        function openContactModal(orgId) {
          document.getElementById('contactOrgInput').value = orgId;
          contactModal.classList.remove('hidden');
        }
        function closeContactModal() { contactModal.classList.add('hidden'); }
        contactOverlay?.addEventListener('click', closeContactModal);
        closeContactBtns?.forEach(b => b.addEventListener('click', closeContactModal));

        // Edit Org modal open/close
        const editOrgModal = document.getElementById('editOrgModal');
        const editOverlay = editOrgModal?.querySelector('.absolute.inset-0');
        const closeEditBtns = editOrgModal?.querySelectorAll('[data-close-edit-org]');
        function openEditOrgModal() { editOrgModal.classList.remove('hidden'); }
        function closeEditOrgModal() { editOrgModal.classList.add('hidden'); }
        editOverlay?.addEventListener('click', closeEditOrgModal);
        closeEditBtns?.forEach(b => b.addEventListener('click', closeEditOrgModal));

        // Toggle initial contact fields
        document.getElementById('toggleInitialContact')?.addEventListener('click', () => {
          document.getElementById('initialContactFields')?.classList.toggle('hidden');
        });

        // Select menus (Create)
        const typeSelectBtn = document.getElementById('typeSelectBtn');
        const typeSelectMenu = document.getElementById('typeSelectMenu');
        const typeSelectLabel = document.getElementById('typeSelectLabel');
        const typesInput = document.getElementById('typesInput');
        toggleMenu(typeSelectBtn, typeSelectMenu);

        document.getElementById('clearTypeSelect')?.addEventListener('click', () => {
          document.querySelectorAll('.type-option').forEach(cb => cb.checked = false);
          typeSelectLabel.textContent = 'Seleziona uno o più tipi';
          typesInput.value = '';
        });
        document.getElementById('confirmTypeSelect')?.addEventListener('click', () => {
          const values = Array.from(document.querySelectorAll('.type-option:checked')).map(i => i.value);
          typesInput.value = values.join(',');
          typeSelectLabel.textContent = values.length ? values.join(', ') : 'Seleziona uno o più tipi';
          typeSelectMenu.classList.add('hidden');
        });

        const methodSelectBtn = document.getElementById('methodSelectBtn');
        const methodSelectMenu = document.getElementById('methodSelectMenu');
        const methodSelectLabel = document.getElementById('methodSelectLabel');
        const methodInput = document.getElementById('methodInput');
        toggleMenu(methodSelectBtn, methodSelectMenu);
        methodSelectMenu?.addEventListener('change', (e) => {
          if (e.target.classList.contains('method-option')) {
            methodInput.value = e.target.value;
            methodSelectLabel.textContent = e.target.value;
            methodSelectMenu.classList.add('hidden');
          }
        });

        // Select menus (Edit)
        const editTypeSelectBtn = document.getElementById('editTypeSelectBtn');
        const editTypeSelectMenu = document.getElementById('editTypeSelectMenu');
        const editTypeSelectLabel = document.getElementById('editTypeSelectLabel');
        const editTypesInput = document.getElementById('editTypesInput');
        toggleMenu(editTypeSelectBtn, editTypeSelectMenu);

        document.getElementById('editClearTypeSelect')?.addEventListener('click', () => {
          document.querySelectorAll('.edit-type-option').forEach(cb => cb.checked = false);
          editTypeSelectLabel.textContent = 'Seleziona uno o più tipi';
          editTypesInput.value = '';
        });
        document.getElementById('editConfirmTypeSelect')?.addEventListener('click', () => {
          const values = Array.from(document.querySelectorAll('.edit-type-option:checked')).map(i => i.value);
          editTypesInput.value = values.join(',');
          editTypeSelectLabel.textContent = values.length ? values.join(', ') : 'Seleziona uno o più tipi';
          editTypeSelectMenu.classList.add('hidden');
        });

        const editMethodSelectBtn = document.getElementById('editMethodSelectBtn');
        const editMethodSelectMenu = document.getElementById('editMethodSelectMenu');
        const editMethodSelectLabel = document.getElementById('editMethodSelectLabel');
        const editMethodInput = document.getElementById('editMethodInput');
        toggleMenu(editMethodSelectBtn, editMethodSelectMenu);
        editMethodSelectMenu?.addEventListener('change', (e) => {
          if (e.target.classList.contains('edit-method-option')) {
            editMethodInput.value = e.target.value;
            editMethodSelectLabel.textContent = e.target.value;
            editMethodSelectMenu.classList.add('hidden');
          }
        });

        // Data and rendering helpers
        const orgContainer = document.getElementById('orgContainer');
        const resultCount = document.getElementById('resultCount');

        function updateResultCount() {
          const visible = Array.from(orgContainer.children).filter(c => !c.classList.contains('hidden')).length;
          resultCount.textContent = `${visible} ${visible === 1 ? 'risultato' : 'risultati'}`;
        }

        // Attach handlers to dynamic elements
        function bindOrgCardEvents(card) {
          // Add contact
          card.querySelectorAll('[data-add-contact]').forEach(btn => {
            btn.addEventListener('click', () => openContactModal(btn.getAttribute('data-add-contact')));
          });
          // Remove contact
          card.querySelectorAll('[data-remove-contact]').forEach(btn => {
            btn.addEventListener('click', () => {
              btn.closest('.flex.items-start.justify-between.rounded-md')?.remove();
              updateResultCount();
            });
          });
          // Edit org
          card.querySelectorAll('[data-edit-org]').forEach(btn => {
            btn.addEventListener('click', () => {
              const cardEl = btn.closest('.rounded-2xl.border');
              const id = btn.getAttribute('data-edit-org');
              const name = cardEl.querySelector('[data-editable]')?.textContent.trim() || '';
              const chips = Array.from(cardEl.querySelectorAll('.mt-2 span')).map(s => s.textContent.trim());
              const types = chips.filter(t => !/Online|In presenza|Ibrido/.test(t));
              const method = chips.find(t => /Online|In presenza|Ibrido/.test(t)) || '';

              document.getElementById('editOrgId').value = id;
              document.getElementById('editName').value = name;
              document.getElementById('editAbout').value = cardEl.querySelector('p.mt-3')?.textContent.trim() || '';

              // set types
              document.querySelectorAll('.edit-type-option').forEach(cb => {
                cb.checked = types.includes(cb.value);
              });
              editTypesInput.value = types.join(',');
              editTypeSelectLabel.textContent = types.length ? types.join(', ') : 'Seleziona uno o più tipi';

              // set method
              document.querySelectorAll('.edit-method-option').forEach(r => {
                r.checked = r.value === method;
              });
              editMethodInput.value = method;
              editMethodSelectLabel.textContent = method || 'Seleziona un metodo';

              openEditOrgModal();
            });
          });
          // Delete org
          card.querySelectorAll('[data-delete-org]').forEach(btn => {
            btn.addEventListener('click', () => {
              if (confirm('Sei sicuro di voler eliminare questa organizzazione?')) {
                btn.closest('.rounded-2xl.border')?.remove();
                updateResultCount();
              }
            });
          });
          // Inline edit name
          card.querySelectorAll('[data-editable]').forEach(el => {
            el.addEventListener('dblclick', () => {
              const current = el.textContent.trim();
              const input = document.createElement('input');
              input.type = 'text';
              input.value = current;
              input.className = 'w-full text-lg tracking-tight font-semibold leading-6 border-b border-neutral-300 outline-none';
              el.replaceWith(input);
              input.focus();
              function commit() {
                const h3 = document.createElement('h3');
                h3.className = 'text-lg tracking-tight font-semibold leading-6 cursor-text';
                h3.setAttribute('data-editable', '');
                h3.setAttribute('data-id', el.getAttribute('data-id') || '');
                h3.textContent = input.value || current;
                input.replaceWith(h3);
                bindOrgCardEvents(card); // rebind
              }
              input.addEventListener('blur', commit);
              input.addEventListener('keydown', (e) => { if (e.key === 'Enter') commit(); });
            });
          });
        }

        // Bind existing cards
        Array.from(orgContainer.children).forEach(bindOrgCardEvents);
        updateResultCount();

        // Contact form submit
        document.getElementById('contactForm')?.addEventListener('submit', (e) => {
          e.preventDefault();
          const orgId = document.getElementById('contactOrgInput').value;
          const name = document.getElementById('contactName').value.trim() || 'Nuovo Contatto';
          const role = document.getElementById('contactRole').value.trim();
          const email = document.getElementById('contactEmail').value.trim();
          const phone = document.getElementById('contactPhone').value.trim();

          const card = Array.from(orgContainer.querySelectorAll('[data-edit-org]')).find(b => b.getAttribute('data-edit-org') === orgId)?.closest('.rounded-2xl.border');
          const list = card?.querySelector('.space-y-2');
          if (list) {
            const block = document.createElement('div');
            block.className = 'flex items-start justify-between rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2';
            block.innerHTML = `
              <div class="min-w-0">
                <div class="flex items-center gap-2">
                  <span class="text-sm font-medium text-neutral-900">${name}</span>
                  ${role ? `<span class="text-xs text-neutral-500">• ${role}</span>` : ''}
                </div>
                <div class="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-600">
                  ${email ? `<span class="inline-flex items-center gap-1"><svg data-lucide="mail" class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>${email}</span>` : ''}
                  ${phone ? `<span class="inline-flex items-center gap-1"><svg data-lucide="phone" class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>${phone}</span>` : ''}
                </div>
              </div>
              <button class="p-1.5 rounded-md hover:bg-neutral-200/60" title="Rimuovi">
                <svg data-lucide="trash-2" class="w-4 h-4 text-neutral-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            `;
            list.appendChild(block);
            bindOrgCardEvents(card);
            if (window.lucide && lucide.createIcons) lucide.createIcons();
            closeContactModal();
            e.target.reset();
          }
        });

        // Create org submit
        document.getElementById('orgForm')?.addEventListener('submit', (e) => {
          e.preventDefault();
          const form = e.target;
          const name = form.name.value.trim() || 'Nuova organizzazione';
          const about = form.about.value.trim() || 'Descrizione non disponibile.';
          const types = (form.types.value || '').split(',').filter(Boolean);
          const method = form.method.value || '';
          const contactName = form.contact?.value?.trim();
          const contactRole = form.contact_role?.value?.trim();
          const contactEmail = form.contact_email?.value?.trim();
          const contactPhone = form.contact_phone?.value?.trim();

          const id = crypto?.randomUUID ? crypto.randomUUID() : ('id-' + Date.now());
          // Build chips
          const typeChips = types.map(t => `
            <span class="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-xs">
              <svg data-lucide="badge-check" class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>${t}
            </span>
          `).join('');
          const methodChip = method ? `
            <span class="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1">
              ${method === 'Online' ? `<svg data-lucide="video" class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg>` : method === 'In presenza' ? `<svg data-lucide="users" class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>` : `<svg data-lucide="split" class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path><path d="m15 9 6-6"></path></svg>`}
              ${method}
            </span>
          ` : '';

          const contactBlock = contactName ? `
            <div class="flex items-start justify-between rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
              <div class="min-w-0">
                <div class="flex items-center gap-2">
                  <span class="text-sm font-medium text-neutral-900">${contactName}</span>
                  ${contactRole ? `<span class="text-xs text-neutral-500">• ${contactRole}</span>` : ''}
                </div>
                <div class="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-600">
                  ${contactEmail ? `<span class="inline-flex items-center gap-1"><svg data-lucide="mail" class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>${contactEmail}</span>` : ''}
                  ${contactPhone ? `<span class="inline-flex items-center gap-1"><svg data-lucide="phone" class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>${contactPhone}</span>` : ''}
                </div>
              </div>
              <button class="p-1.5 rounded-md hover:bg-neutral-200/60" title="Rimuovi">
                <svg data-lucide="trash-2" class="w-4 h-4 text-neutral-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            </div>
          ` : '<div class="text-sm text-neutral-500">Nessun contatto</div>';

          const card = document.createElement('div');
          card.className = 'rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition';
          card.innerHTML = `
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0">
                <h3 class="text-lg tracking-tight font-semibold leading-6 cursor-text" data-editable data-id="${id}">${name}</h3>
                <div class="mt-2 flex flex-wrap items-center gap-2 text-xs">
                  ${typeChips}
                  ${methodChip}
                </div>
              </div>
              <div class="flex items-center gap-1.5 shrink-0">
                <button class="rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs hover:bg-neutral-50 inline-flex items-center gap-1.5" data-edit-org="${id}">
                  <svg data-lucide="pencil" class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg> Modifica
                </button>
                <button class="rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs hover:bg-neutral-50 inline-flex items-center gap-1.5 text-red-600" data-delete-org="${id}">
                  <svg data-lucide="trash-2" class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Elimina
                </button>
              </div>
            </div>
            <p class="mt-3 text-sm text-neutral-600 line-clamp-2">${about}</p>
            <div class="mt-4">
              <div class="flex items-center justify-between mb-2">
                <p class="text-xs font-medium text-neutral-500">Contatti</p>
                <button class="rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs hover:bg-neutral-50 inline-flex items-center gap-1.5" data-add-contact="${id}">
                  <svg data-lucide="user-plus" class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg> Aggiungi
                </button>
              </div>
              <div class="space-y-2">
                ${contactBlock}
              </div>
            </div>
          `;
          orgContainer.prepend(card);
          bindOrgCardEvents(card);
          if (window.lucide && lucide.createIcons) lucide.createIcons();
          updateResultCount();
          form.reset();
          // Reset labels
          typeSelectLabel.textContent = 'Seleziona uno o più tipi';
          methodSelectLabel.textContent = 'Seleziona un metodo';
          closeOrgModal();
        });

        // Edit org submit
        document.getElementById('editOrgForm')?.addEventListener('submit', (e) => {
          e.preventDefault();
          const id = document.getElementById('editOrgId').value;
          const name = document.getElementById('editName').value.trim();
          const about = document.getElementById('editAbout').value.trim();
          const types = (document.getElementById('editTypesInput').value || '').split(',').filter(Boolean);
          const method = document.getElementById('editMethodInput').value;

          const card = Array.from(orgContainer.querySelectorAll('[data-edit-org]')).find(b => b.getAttribute('data-edit-org') === id)?.closest('.rounded-2xl.border');
          if (!card) { closeEditOrgModal(); return; }

          // Update name
          const nameEl = card.querySelector('[data-editable]'); if (nameEl) nameEl.textContent = name || nameEl.textContent;

          // Update about
          const aboutEl = card.querySelector('p.mt-3'); if (aboutEl) aboutEl.textContent = about || aboutEl.textContent;

          // Update chips
          const chipsWrap = card.querySelector('.mt-2.flex.flex-wrap'); if (chipsWrap) {
            chipsWrap.innerHTML = '';
            types.forEach(t => {
              const span = document.createElement('span');
              span.className = 'inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-xs';
              span.innerHTML = `<svg data-lucide="badge-check" class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>${t}`;
              chipsWrap.appendChild(span);
            });
            if (method) {
              const span = document.createElement('span');
              span.className = 'inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1';
              let icon = 'split';
              if (method === 'Online') icon = 'video';
              if (method === 'In presenza') icon = 'users';
              span.innerHTML = `<svg data-lucide="${icon}" class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></svg>${method}`;
              chipsWrap.appendChild(span);
            }
          }
          if (window.lucide && lucide.createIcons) lucide.createIcons();
          closeEditOrgModal();
        });

        // Filters and search
        const chipGroups = [
          { el: document.getElementById('typeFilter'), type: 'type' },
          { el: document.getElementById('methodFilter'), type: 'method' }
        ];
        chipGroups.forEach(group => {
          group.el?.querySelectorAll('.chip').forEach(chip => {
            chip.addEventListener('click', () => {
              const active = chip.getAttribute('data-active') === 'true';
              chip.setAttribute('data-active', String(!active));
              chip.classList.toggle('bg-neutral-900', !active);
              chip.classList.toggle('text-white', !active);
              chip.classList.toggle('border-neutral-200', active);
              chip.classList.toggle('border-neutral-900', !active);
              applyFilters();
            });
          });
        });

        const searchInputs = [
          document.getElementById('searchInputTop'),
          document.getElementById('searchInputMobileBar'),
          document.getElementById('searchInputMobile')
        ].filter(Boolean);

        searchInputs.forEach(inp => inp.addEventListener('input', applyFilters));
        document.getElementById('clearFiltersBtn')?.addEventListener('click', () => {
          document.querySelectorAll('.chip[data-active="true"]').forEach(chip => {
            chip.setAttribute('data-active', 'false');
            chip.classList.remove('bg-neutral-900', 'text-white', 'border-neutral-900');
            chip.classList.add('border-neutral-200');
          });
          searchInputs.forEach(i => i.value = '');
          applyFilters();
        });

        function applyFilters() {
          const activeTypes = Array.from(document.querySelectorAll('#typeFilter .chip[data-active="true"]')).map(c => c.getAttribute('data-value'));
          const activeMethods = Array.from(document.querySelectorAll('#methodFilter .chip[data-active="true"]')).map(c => c.getAttribute('data-value'));
          const q = (searchInputs.find(i => i.value)?.value || '').toLowerCase();

          Array.from(orgContainer.children).forEach(card => {
            const text = card.textContent.toLowerCase();
            const matchesSearch = q ? text.includes(q) : true;

            const chipTexts = Array.from(card.querySelectorAll('.mt-2 span')).map(s => s.textContent.trim());
            const matchesTypes = activeTypes.length ? activeTypes.every(t => chipTexts.some(c => c.includes(t))) : true;
            const matchesMethod = activeMethods.length ? activeMethods.some(m => chipTexts.some(c => c.includes(m))) : true;

            const show = matchesSearch && matchesTypes && matchesMethod;
            card.classList.toggle('hidden', !show);
          });
          updateResultCount();
        }

        // View toggle
        const gridBtn = document.getElementById('viewGridBtn');
        const listBtn = document.getElementById('viewListBtn');
        gridBtn?.addEventListener('click', () => {
          gridBtn.setAttribute('aria-pressed', 'true');
          listBtn.setAttribute('aria-pressed', 'false');
          orgContainer.className = 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6';
        });
        listBtn?.addEventListener('click', () => {
          listBtn.setAttribute('aria-pressed', 'true');
          gridBtn.setAttribute('aria-pressed', 'false');
          orgContainer.className = 'grid grid-cols-1 gap-4 lg:gap-6';
        });

        // Delegate clicks for dynamically added controls
        orgContainer.addEventListener('click', (e) => {
          const addBtn = e.target.closest('[data-add-contact]');
          if (addBtn) {
            openContactModal(addBtn.getAttribute('data-add-contact'));
          }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/80 glass">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-neutral-900 flex items-center justify-center">
<svg className="lucide lucide-layers w-4 h-4 text-white" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-[22px] leading-6 tracking-tight font-semibold">Associazioni</span>
<span className="text-xs text-neutral-500 -mt-0.5">Dashboard gestione organizzazioni</span>
</div>
</div>
<div className="flex items-center gap-2">
<div className="hidden md:flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2">
<input className="w-72 outline-none text-sm placeholder-neutral-400" id="searchInputTop" placeholder="Cerca per nome o contatto..." type="text"/>
</div>
<button className="hidden md:inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-black transition" id="addOrgBtn">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
            Aggiungi organizzazione
          </button>

<div className="relative">
<button className="h-9 w-9 rounded-full border border-neutral-200 bg-white flex items-center justify-center hover:bg-neutral-50" id="profileBtn">
<span className="text-sm font-medium text-neutral-700 hidden" id="avatarInitials">U</span>
<svg className="lucide lucide-user w-4 h-4 text-neutral-700" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
<div className="hidden absolute right-0 mt-2 w-64 rounded-xl border border-neutral-200 bg-white shadow-lg p-2" id="profileDropdown">
<div id="profileMenuContent">
<div className="px-2 py-1.5 text-sm text-neutral-600">Non sei connesso</div>
<button className="w-full text-left px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm inline-flex items-center gap-2" id="openAuthFromMenu">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg> Accedi o registrati
                </button>
</div>
</div>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-neutral-200" id="mobileSearchBar">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
<div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2">
<input className="w-full outline-none text-sm placeholder-neutral-400" id="searchInputMobileBar" placeholder="Cerca per nome o contatto..." type="text"/>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

<aside className="lg:col-span-3">
<div className="rounded-2xl border border-neutral-200 bg-white p-5 lg:sticky lg:top-24" id="filtersPanel">
<div className="flex items-center justify-between mb-3">
<h2 className="text-xl tracking-tight font-semibold">Filtri</h2>
<button className="text-sm text-neutral-500 hover:text-neutral-700" id="clearFiltersBtn">Pulisci</button>
</div>
<div className="mb-4 md:hidden">
<div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2">
<input className="w-full outline-none text-sm placeholder-neutral-400" id="searchInputMobile" placeholder="Cerca per nome o contatto..." type="text"/>
</div>
</div>
<div className="space-y-6">
<div className="">
<p className="text-xs font-medium text-neutral-500 mb-2">Tipo di progetto</p>
<div className="flex flex-wrap gap-2" id="typeFilter"><button className="chip px-3 py-1.5 text-sm rounded-full border border-neutral-200 bg-white hover:border-neutral-300" data-active="false" data-value="Mobilità giovanile" type="button">Mobilità giovanile</button><button className="chip px-3 py-1.5 text-sm rounded-full border border-neutral-200 bg-white hover:border-neutral-300" data-active="false" data-value="Leadership" type="button">Leadership</button><button className="chip px-3 py-1.5 text-sm rounded-full border border-neutral-200 bg-white hover:border-neutral-300" data-active="false" data-value="Volontariato" type="button">Volontariato</button><button className="chip px-3 py-1.5 text-sm rounded-full border border-neutral-200 bg-white hover:border-neutral-300" data-active="false" data-value="Formazione" type="button">Formazione</button><button className="chip px-3 py-1.5 text-sm rounded-full border border-neutral-200 bg-white hover:border-neutral-300" data-active="false" data-value="Inclusione" type="button">Inclusione</button><button className="chip px-3 py-1.5 text-sm rounded-full border border-neutral-200 bg-white hover:border-neutral-300" data-active="false" data-value="Partnership" type="button">Partnership</button></div>
</div>
<div className="">
<p className="text-xs font-medium text-neutral-500 mb-2">Metodo di lavoro</p>
<div className="flex flex-wrap gap-2" id="methodFilter"><button className="chip px-3 py-1.5 text-sm rounded-full border border-neutral-200 bg-white hover:border-neutral-300" data-active="false" data-value="Online" type="button">Online</button><button className="chip px-3 py-1.5 text-sm rounded-full border border-neutral-200 bg-white hover:border-neutral-300" data-active="false" data-value="In presenza" type="button">In presenza</button><button className="chip px-3 py-1.5 text-sm rounded-full border border-neutral-200 bg-white hover:border-neutral-300" data-active="false" data-value="Ibrido" type="button">Ibrido</button></div>
</div>
<div className="border-neutral-200 border-t pt-3 hidden md:block">
<p className="text-xs font-medium text-neutral-500 mb-2">Vista</p>
<div className="segmented inline-flex bg-neutral-50 border-neutral-200 border rounded-lg pt-1 pr-1 pb-1 pl-1">
<button aria-pressed="true" className="hidden md:inline-flex gap-1.5 text-sm rounded-md pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1.5 gap-y-1.5 items-center" id="viewGridBtn" type="button">
<svg className="lucide lucide-layout-grid w-4 h-4" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg> Grid
    </button>
<button aria-pressed="false" className="px-3 py-1.5 text-sm rounded-md inline-flex items-center gap-1.5" id="viewListBtn" type="button">
<svg className="lucide lucide-list w-4 h-4" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h.01"></path><path d="M3 12h.01"></path><path d="M3 19h.01"></path><path d="M8 5h13"></path><path d="M8 12h13"></path><path d="M8 19h13"></path></svg> Lista
    </button>
</div>
</div>
</div>
</div>
</aside>

<section className="lg:col-span-9">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2 text-sm text-neutral-600">
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
<span className="" id="resultCount">3 risultati</span>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<svg className="lucide lucide-info w-3.5 h-3.5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              Doppio clic sul nome per modificare in linea
            </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6" id="orgContainer">
<div className="rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<h3 className="text-lg tracking-tight font-semibold leading-6 cursor-text" data-editable="" data-id="88d5caa9-ad3f-46a8-afe9-4d6cf9284a01">Associazione Giovani Europa</h3>
<div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-xs">
<svg className="lucide lucide-badge-check w-3.5 h-3.5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>Mobilità giovanile
                    </span>
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1">
<svg className="lucide lucide-users w-3.5 h-3.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>In presenza
                    </span>
</div>
</div>
<div className="flex items-center gap-1.5 shrink-0">
<button className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs hover:bg-neutral-50 inline-flex items-center gap-1.5" data-edit-org="88d5caa9-ad3f-46a8-afe9-4d6cf9284a01">
<svg className="lucide lucide-pencil w-3.5 h-3.5" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg> Modifica
                  </button>
<button className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs hover:bg-neutral-50 inline-flex items-center gap-1.5 text-red-600" data-delete-org="88d5caa9-ad3f-46a8-afe9-4d6cf9284a01">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Elimina
                  </button>
</div>
</div>
<p className="mt-3 text-sm text-neutral-600 line-clamp-2">Promuove scambi culturali e opportunità di formazione per i giovani in Europa.</p>
<div className="mt-4">
<div className="flex items-center justify-between mb-2">
<p className="text-xs font-medium text-neutral-500">Contatti</p>
<button className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs hover:bg-neutral-50 inline-flex items-center gap-1.5" data-add-contact="88d5caa9-ad3f-46a8-afe9-4d6cf9284a01">
<svg className="lucide lucide-user-plus w-3.5 h-3.5" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg> Aggiungi
                  </button>
</div>
<div className="space-y-2">
<div className="flex items-start justify-between rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-neutral-900">Mario Rossi</span>
<span className="text-xs text-neutral-500">• Project Manager</span>
</div>
<div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-mail w-3.5 h-3.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>mario.rossi@example.com</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-phone w-3.5 h-3.5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>+39 333 111 2222</span>
</div>
</div>
<button className="p-1.5 rounded-md hover:bg-neutral-200/60" data-remove-contact="88d5caa9-ad3f-46a8-afe9-4d6cf9284a01:8be71784-a343-4734-ba92-db998497448a" title="Rimuovi">
<svg className="lucide lucide-trash-2 w-4 h-4 text-neutral-600" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
<div className="flex items-start justify-between rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-neutral-900">Giulia Bianchi</span>
<span className="text-xs text-neutral-500">• Mentor</span>
</div>
<div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-mail w-3.5 h-3.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>giulia.bianchi@example.com</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-phone w-3.5 h-3.5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>+39 333 555 7777</span>
</div>
</div>
<button className="p-1.5 rounded-md hover:bg-neutral-200/60" data-remove-contact="88d5caa9-ad3f-46a8-afe9-4d6cf9284a01:0ffb4520-f70b-46c8-a095-801ee25c7c18" title="Rimuovi">
<svg className="lucide lucide-trash-2 w-4 h-4 text-neutral-600" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<h3 className="text-lg tracking-tight font-semibold leading-6 cursor-text" data-editable="" data-id="228c3372-3b73-453a-ab12-a4f205533a34">Volontari Uniti</h3>
<div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-xs">
<svg className="lucide lucide-badge-check w-3.5 h-3.5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>Volontariato
                    </span>
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1">
<svg className="lucide lucide-video w-3.5 h-3.5" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>Online
                    </span>
</div>
</div>
<div className="flex items-center gap-1.5 shrink-0">
<button className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs hover:bg-neutral-50 inline-flex items-center gap-1.5" data-edit-org="228c3372-3b73-453a-ab12-a4f205533a34">
<svg className="lucide lucide-pencil w-3.5 h-3.5" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg> Modifica
                  </button>
<button className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs hover:bg-neutral-50 inline-flex items-center gap-1.5 text-red-600" data-delete-org="228c3372-3b73-453a-ab12-a4f205533a34">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Elimina
                  </button>
</div>
</div>
<p className="mt-3 text-sm text-neutral-600 line-clamp-2">Rete di volontari per supporto remoto a progetti sociali e ambientali.</p>
<div className="mt-4">
<div className="flex items-center justify-between mb-2">
<p className="text-xs font-medium text-neutral-500">Contatti</p>
<button className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs hover:bg-neutral-50 inline-flex items-center gap-1.5" data-add-contact="228c3372-3b73-453a-ab12-a4f205533a34">
<svg className="lucide lucide-user-plus w-3.5 h-3.5" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg> Aggiungi
                  </button>
</div>
<div className="space-y-2">
<div className="flex items-start justify-between rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-neutral-900">Luca Verdi</span>
<span className="text-xs text-neutral-500">• Coordinatore</span>
</div>
<div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-mail w-3.5 h-3.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>luca.verdi@example.com</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-phone w-3.5 h-3.5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>+39 333 000 1111</span>
</div>
</div>
<button className="p-1.5 rounded-md hover:bg-neutral-200/60" data-remove-contact="228c3372-3b73-453a-ab12-a4f205533a34:a2474fd9-9f6a-4642-8139-f2553f3187c6" title="Rimuovi">
<svg className="lucide lucide-trash-2 w-4 h-4 text-neutral-600" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<h3 className="text-lg tracking-tight font-semibold leading-6 cursor-text" data-editable="" data-id="a180d539-ac4d-4dd7-a12f-2219ccf17fea">Leadership Lab</h3>
<div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-xs">
<svg className="lucide lucide-badge-check w-3.5 h-3.5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>Leadership
                    </span>
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1">
<svg className="lucide lucide-split w-3.5 h-3.5" data-lucide="split" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path><path d="m15 9 6-6"></path></svg>Ibrido
                    </span>
</div>
</div>
<div className="flex items-center gap-1.5 shrink-0">
<button className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs hover:bg-neutral-50 inline-flex items-center gap-1.5" data-edit-org="a180d539-ac4d-4dd7-a12f-2219ccf17fea">
<svg className="lucide lucide-pencil w-3.5 h-3.5" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg> Modifica
                  </button>
<button className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs hover:bg-neutral-50 inline-flex items-center gap-1.5 text-red-600" data-delete-org="a180d539-ac4d-4dd7-a12f-2219ccf17fea">
<svg className="lucide lucide-trash-2 w-3.5 h-3.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Elimina
                  </button>
</div>
</div>
<p className="mt-3 text-sm text-neutral-600 line-clamp-2">Laboratori e mentorship per sviluppare competenze di leadership giovani.</p>
<div className="mt-4">
<div className="flex items-center justify-between mb-2">
<p className="text-xs font-medium text-neutral-500">Contatti</p>
<button className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs hover:bg-neutral-50 inline-flex items-center gap-1.5" data-add-contact="a180d539-ac4d-4dd7-a12f-2219ccf17fea">
<svg className="lucide lucide-user-plus w-3.5 h-3.5" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg> Aggiungi
                  </button>
</div>
<div className="space-y-2"><div className="text-sm text-neutral-500">Nessun contatto</div></div>
</div>
</div>
</div>
</section>
</div>
</main>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="orgModal">
<div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
<div className="relative w-[92%] max-w-xl rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-xl modal-enter max-h-[85vh] overflow-y-auto" data-scrollbar="soft">
<div className="flex items-start justify-between mb-4 pb-3 border-b border-neutral-200">
<div>
<h3 className="text-[22px] tracking-tight font-semibold">Aggiungi organizzazione</h3>
<p className="text-sm text-neutral-500">Compila i dettagli principali</p>
</div>
<button className="p-2 rounded-lg hover:bg-neutral-100" data-close-org="">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<form className="space-y-4" id="orgForm">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Nome dell’organizzazione</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" name="name" placeholder="Es. Giovani Europa" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Tipo di progetto</label>
<div className="relative">
<button className="w-full flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-left" id="typeSelectBtn" type="button">
<span className="text-sm text-neutral-500" id="typeSelectLabel">Seleziona uno o più tipi</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<input id="typesInput" name="types" type="hidden" value=""/>
<div className="hidden absolute z-10 mt-1 w-full rounded-lg border border-neutral-200 bg-white shadow-lg p-2" id="typeSelectMenu">
<div className="max-h-52 overflow-auto" data-scrollbar="soft">
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="type-option accent-neutral-900" type="checkbox" value="Mobilità giovanile"/>
<span className="text-sm">Mobilità giovanile</span>
</label>
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="type-option accent-neutral-900" type="checkbox" value="Leadership"/>
<span className="text-sm">Leadership</span>
</label>
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="type-option accent-neutral-900" type="checkbox" value="Volontariato"/>
<span className="text-sm">Volontariato</span>
</label>
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="type-option accent-neutral-900" type="checkbox" value="Formazione"/>
<span className="text-sm">Formazione</span>
</label>
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="type-option accent-neutral-900" type="checkbox" value="Inclusione"/>
<span className="text-sm">Inclusione</span>
</label>
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="type-option accent-neutral-900" type="checkbox" value="Partnership"/>
<span className="text-sm">Partnership</span>
</label>
</div>
<div className="mt-2 flex items-center justify-between gap-2">
<button className="text-xs px-2 py-1 rounded-md hover:bg-neutral-100 text-neutral-600" id="clearTypeSelect" type="button">Pulisci</button>
<button className="text-xs px-2.5 py-1.5 rounded-md bg-neutral-900 text-white hover:bg-black" id="confirmTypeSelect" type="button">Conferma</button>
</div>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Metodo di lavoro</label>
<div className="relative">
<button className="w-full flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-left" id="methodSelectBtn" type="button">
<span className="text-sm text-neutral-500" id="methodSelectLabel">Seleziona un metodo</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<input id="methodInput" name="method" type="hidden" value=""/>
<div className="hidden absolute z-10 mt-1 w-full rounded-lg border border-neutral-200 bg-white shadow-lg p-2" id="methodSelectMenu">
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="method-option accent-neutral-900" name="methodRadio" type="radio" value="Online"/>
<span className="text-sm">Online</span>
</label>
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="method-option accent-neutral-900" name="methodRadio" type="radio" value="In presenza"/>
<span className="text-sm">In presenza</span>
</label>
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="method-option accent-neutral-900" name="methodRadio" type="radio" value="Ibrido"/>
<span className="text-sm">Ibrido</span>
</label>
</div>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Descrizione</label>
<textarea className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10 placeholder-neutral-400" name="about" placeholder="Breve descrizione dell’organizzazione e delle sue attività" rows="4"></textarea>
</div>
<div>
<button className="inline-flex items-center gap-2 text-sm px-2.5 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50" id="toggleInitialContact" type="button">
<svg className="lucide lucide-user-plus w-4 h-4 text-neutral-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v3"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" x2="20" y1="8" y2="14"></line><line x1="23" x2="17" y1="11" y2="11"></line></svg>
              Aggiungi contatto iniziale (opzionale)
            </button>
<div className="hidden mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3" id="initialContactFields">
<div>
<label className="block text-xs font-medium text-neutral-600 mb-1.5">Nome e cognome</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" name="contact" placeholder="Es. Maria Neri" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-600 mb-1.5">Ruolo</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" name="contact_role" placeholder="Es. Coordinatrice" type="text"/>
</div>
<div>
<label classblock="" font-medium="" mb-1.5"="" text-neutral-600="" text-xs="">Email</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" name="contact_email" placeholder="nome@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-600 mb-1.5">Telefono</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" name="contact_phone" placeholder="+39 ..." type="tel"/>
</div>
</div>
</div>
<div className="pt-2 flex items-center justify-between">
<p className="text-xs text-neutral-500">I dati possono essere modificati anche dopo il salvataggio.</p>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-sm" data-close-org="" type="button">Annulla</button>
<button className="px-4 py-2.5 rounded-lg bg-neutral-900 text-white text-sm font-semibold hover:bg-black" type="submit">Salva</button>
</div>
</div>
</form>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="contactModal">
<div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
<div className="relative w-[92%] max-w-md rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-xl modal-enter">
<div className="flex items-start justify-between mb-4 pb-3 border-b border-neutral-200">
<div>
<h3 className="text-[22px] tracking-tight font-semibold">Nuovo contatto</h3>
<p className="text-sm text-neutral-500">Aggiungi un contatto all’organizzazione</p>
</div>
<button className="p-2 rounded-lg hover:bg-neutral-100" data-close-contact="">
<svg className="lucide lucide-x w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<form className="space-y-3" id="contactForm">
<input id="contactOrgInput" name="org_id" type="hidden" value=""/>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Nome e cognome</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" id="contactName" placeholder="Es. Anna Blu" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Ruolo</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" id="contactRole" placeholder="Es. Coordinatrice" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Telefono</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" id="contactPhone" placeholder="+39 ..." type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" id="contactEmail" placeholder="nome@example.com" type="email"/>
</div>
<div className="pt-2 flex items-center justify-end gap-2">
<button className="px-3 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-sm" data-close-contact="" type="button">Annulla</button>
<button className="px-4 py-2.5 rounded-lg bg-neutral-900 text-white text-sm font-semibold hover:bg-black" type="submit">Aggiungi</button>
</div>
</form>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="editOrgModal">
<div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
<div className="relative w-[92%] max-w-xl rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-xl modal-enter max-h-[85vh] overflow-y-auto" data-scrollbar="soft">
<div className="flex items-start justify-between mb-4 pb-3 border-b border-neutral-200">
<div>
<h3 className="text-[22px] tracking-tight font-semibold">Modifica organizzazione</h3>
<p className="text-sm text-neutral-500">Aggiorna i campi principali</p>
</div>
<button className="p-2 rounded-lg hover:bg-neutral-100" data-close-edit-org="">
<svg className="lucide lucide-x w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<form className="space-y-4" id="editOrgForm">
<input id="editOrgId" type="hidden" value=""/>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Nome dell’organizzazione</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" id="editName" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Tipo di progetto</label>
<div className="relative">
<button className="w-full flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-left" id="editTypeSelectBtn" type="button">
<span className="text-sm text-neutral-500" id="editTypeSelectLabel">Seleziona uno o più tipi</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<input id="editTypesInput" type="hidden" value=""/>
<div className="hidden absolute z-10 mt-1 w-full rounded-lg border border-neutral-200 bg-white shadow-lg p-2" id="editTypeSelectMenu">
<div className="max-h-52 overflow-auto" data-scrollbar="soft">
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="edit-type-option accent-neutral-900" type="checkbox" value="Mobilità giovanile"/>
<span className="text-sm">Mobilità giovanile</span>
</label>
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="edit-type-option accent-neutral-900" type="checkbox" value="Leadership"/>
<span className="text-sm">Leadership</span>
</label>
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="edit-type-option accent-neutral-900" type="checkbox" value="Volontariato"/>
<span className="text-sm">Volontariato</span>
</label>
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="edit-type-option accent-neutral-900" type="checkbox" value="Formazione"/>
<span className="text-sm">Formazione</span>
</label>
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="edit-type-option accent-neutral-900" type="checkbox" value="Inclusione"/>
<span className="text-sm">Inclusione</span>
</label>
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="edit-type-option accent-neutral-900" type="checkbox" value="Partnership"/>
<span className="text-sm">Partnership</span>
</label>
</div>
<div className="mt-2 flex items-center justify-between gap-2">
<button className="text-xs px-2 py-1 rounded-md hover:bg-neutral-100 text-neutral-600" id="editClearTypeSelect" type="button">Pulisci</button>
<button className="text-xs px-2.5 py-1.5 rounded-md bg-neutral-900 text-white hover:bg-black" id="editConfirmTypeSelect" type="button">Conferma</button>
</div>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Metodo di lavoro</label>
<div className="relative">
<button className="w-full flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-left" id="editMethodSelectBtn" type="button">
<span className="text-sm text-neutral-500" id="editMethodSelectLabel">Seleziona un metodo</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<input id="editMethodInput" type="hidden" value=""/>
<div className="hidden absolute z-10 mt-1 w-full rounded-lg border border-neutral-200 bg-white shadow-lg p-2" id="editMethodSelectMenu">
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="edit-method-option accent-neutral-900" name="editMethodRadio" type="radio" value="Online"/>
<span className="text-sm">Online</span>
</label>
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="edit-method-option accent-neutral-900" name="editMethodRadio" type="radio" value="In presenza"/>
<span className="text-sm">In presenza</span>
</label>
<label className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-neutral-50">
<input className="edit-method-option accent-neutral-900" name="editMethodRadio" type="radio" value="Ibrido"/>
<span className="text-sm">Ibrido</span>
</label>
</div>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Descrizione</label>
<textarea className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10 placeholder-neutral-400" id="editAbout" placeholder="Breve descrizione dell’organizzazione e delle sue attività" rows="4"></textarea>
</div>
<div className="pt-2 flex items-center justify-between">
<p className="text-xs text-neutral-500">Le modifiche saranno applicate immediatamente.</p>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-sm" data-close-edit-org="" type="button">Annulla</button>
<button className="px-4 py-2.5 rounded-lg bg-neutral-900 text-white text-sm font-semibold hover:bg-black" type="submit">Salva modifiche</button>
</div>
</div>
</form>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="authModal">
<div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" data-auth-overlay=""></div>
<div className="relative w-[92%] max-w-md rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-xl modal-enter">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-neutral-900 flex items-center justify-center">
<svg className="w-4 h-4 text-white" data-lucide="lock" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div>
<h3 className="text-[22px] tracking-tight font-semibold leading-6">Autenticazione</h3>
<p className="text-sm text-neutral-500 -mt-0.5">Accedi al tuo account o creane uno</p>
</div>
</div>
<button className="p-2 rounded-lg hover:bg-neutral-100" data-close-auth="">
<svg className="w-5 h-5" data-lucide="x" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="mb-4">
<div aria-label="Auth Tabs" className="grid grid-cols-2 rounded-lg border border-neutral-200 bg-neutral-50 p-1" role="tablist">
<button aria-selected="true" className="px-3 py-2 text-sm rounded-md font-medium bg-white shadow-sm" id="authTabLogin" role="tab">Accedi</button>
<button aria-selected="false" className="px-3 py-2 text-sm rounded-md font-medium text-neutral-600 hover:text-neutral-800" id="authTabRegister" role="tab">Registrati</button>
</div>
</div>
<div aria-labelledby="authTabLogin" className="space-y-3" id="authPanelLogin" role="tabpanel">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" id="loginEmail" placeholder="tuo.nome@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Password</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" id="loginPassword" placeholder="••••••••" type="password"/>
</div>
<div className="flex items-center justify-between">
<label className="inline-flex items-center gap-2 text-sm text-neutral-600">
<input className="accent-neutral-900" id="loginRemember" type="checkbox"/> Ricordami
            </label>
<a className="text-sm text-neutral-600 hover:text-neutral-800" href="#">Password dimenticata?</a>
</div>
<button className="w-full mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 text-white px-4 py-2.5 text-sm font-semibold hover:bg-black" id="loginSubmit">
<svg className="w-4 h-4" data-lucide="log-in" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15 3 6 6-6 6"></path><path d="M21 9H9a4 4 0 0 0-4 4v7"></path></svg> Accedi
          </button>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm hover:bg-neutral-50" id="loginWithGoogle">
<svg className="w-4 h-4" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M43.611 20.083H42V20H24v8h11.303C33.915 31.427 29.353 35 24 35c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.676 5.098 29.676 3 24 3 12.955 3 4 11.955 4 23s8.955 20 20 20 19.5-9 19.5-20c0-1.341-.138-2.652-.389-3.917z" fill="#FFC107"></path><path d="M6.306 14.691l6.571 4.818C14.406 16.155 18.85 13 24 13c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.676 5.098 29.676 3 24 3 16.318 3 9.656 7.337 6.306 14.691z" fill="#FF3D00"></path><path d="M24 43c5.286 0 10.062-2.026 13.657-5.343l-6.29-5.323C29.256 33.465 26.774 35 24 35c-5.326 0-9.823-3.623-11.303-7.917l-6.57 5.06C9.637 39.26 16.345 43 24 43z" fill="#4CAF50"></path><path d="M43.611 20.083H42V20H24v8h11.303c-1.088 3.181-3.49 5.741-6.303 7.124l6.29 5.323C37.467 41.099 43.5 37 43.5 23c0-1.341-.138-2.652-.389-3.917z" fill="#1976D2"></path></svg>
            Accedi con Google
          </button>
</div>
<div aria-labelledby="authTabRegister" className="hidden space-y-3" id="authPanelRegister" role="tabpanel">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Nome</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" id="regFirstName" placeholder="Nome" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Cognome</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" id="regLastName" placeholder="Cognome" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" id="regEmail" placeholder="tuo.nome@example.com" type="email"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Password</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" id="regPassword" placeholder="••••••••" type="password"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1">Conferma password</label>
<input className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-neutral-900/10" id="regPassword2" placeholder="••••••••" type="password"/>
</div>
</div>
<button className="w-full mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 text-white px-4 py-2.5 text-sm font-semibold hover:bg-black" id="registerSubmit">
<svg className="w-4 h-4" data-lucide="user-plus" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v3"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" x2="20" y1="8" y2="14"></line><line x1="23" x2="17" y1="11" y2="11"></line></svg> Crea account
          </button>
</div>
</div>
</div>



    </>
  );
}
