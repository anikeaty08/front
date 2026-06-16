import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // ------------------------------
    // Utilitaires
    // ------------------------------
    const $ = (s, root=document) => root.querySelector(s);
    const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));
    const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36);
    const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
    const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
    const nowISO = () => new Date().toISOString();
    const showToast = (msg, t=2200) => {
      const toast = $('#toast'); toast.firstElementChild.textContent = msg;
      toast.classList.remove('hidden'); setTimeout(()=>toast.classList.add('hidden'), t);
    };

    // ------------------------------
    // Données (localStorage)
    // ------------------------------
    const KEYS = {
      users: 'moxas_users',
      session: 'moxas_session',
      agents: 'moxas_agents',
      convs: 'moxas_conversations',
      msgs: 'moxas_messages',
      files: 'moxas_files',
      theme: 'moxas_theme'
    };

    const db = {
      get users(){ return load(KEYS.users, []); },
      set users(v){ save(KEYS.users, v); },
      get agents(){ return load(KEYS.agents, []); },
      set agents(v){ save(KEYS.agents, v); },
      get conversations(){ return load(KEYS.convs, []); },
      set conversations(v){ save(KEYS.convs, v); },
      get messages(){ return load(KEYS.msgs, []); },
      set messages(v){ save(KEYS.msgs, v); },
      get files(){ return load(KEYS.files, []); },
      set files(v){ save(KEYS.files, v); },
      get session(){ return load(KEYS.session, null); },
      set session(v){ save(KEYS.session, v); },
    };

    const getCurrentUser = () => {
      const s = db.session; if(!s) return null;
      return db.users.find(u=>u.id===s.userId) || null;
    };

    // Seed demo
    function seedDemo() {
      if (db.users.length === 0) {
        const userId = uid();
        db.users = [{
          id: userId,
          email: 'demo@moxas.ai',
          password: 'demo123',
          name: 'Utilisateur Démo',
          abonnement: 'free',
          quota: '—'
        }];
        db.session = { userId };
        const agent1 = { id: uid(), userId, nom: 'Aline Support', description: 'Agent de support client empathique', instructions: 'Tu es Aline, agent de support. Sois claire, concise et amicale.', voix: 'Femme douce' };
        const agent2 = { id: uid(), userId, nom: 'Dev Mentor', description: 'Mentor technique pour devs', instructions: 'Tu es mentor technique. Donne des explications structurées et des exemples.', voix: 'Neutre' };
        db.agents = [agent1, agent2];
        const convId = uid();
        db.conversations = [{ id: convId, agentId: agent1.id, userId, titre: 'Bienvenue', createdAt: nowISO() }];
        db.messages = [
          { id: uid(), conversationId: convId, userIdOrAgent: 'agent', role: 'assistant', texte: 'Salut! Comment puis-je vous aider aujourd’hui ?', createdAt: nowISO() },
          { id: uid(), conversationId: convId, userIdOrAgent: userId, role: 'user', texte: 'Bonjour Aline, j’ai un souci de connexion.', createdAt: nowISO() }
        ];
        db.files = [];
      }
    }

    // ------------------------------
    // Thème
    // ------------------------------
    function applyTheme() {
      const mode = localStorage.getItem(KEYS.theme) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.body.classList.toggle('dark', mode === 'dark');
    }
    function toggleTheme() {
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem(KEYS.theme, isDark ? 'light' : 'dark');
      applyTheme();
    }

    // ------------------------------
    // Routing
    // ------------------------------
    const routes = ['/', '/login', '/signup', '/dashboard', '/chat', '/profil', '/aura'];
    function routeGuard(path) {
      const user = getCurrentUser();
      const protectedPaths = ['/dashboard','/chat','/profil'];
      if (!user && protectedPaths.includes(path)) return '/login';
      if (user && (path==='/login' || path==='/signup')) return '/dashboard';
      return path;
    }
    function showPage(path) {
      const map = {
        '/': '#pageHome',
        '/login': '#pageAuth',
        '/signup': '#pageAuth',
        '/dashboard': '#pageDashboard',
        '/chat': '#pageChat',
        '/profil': '#pageProfil',
        '/aura': '#pageAura'
      };
      Object.values(map).forEach(sel => $(sel).classList.add('hidden'));
      const target = map[path] || '#pageHome';
      $(target).classList.remove('hidden');

      if (path==='/login' || path==='/signup') {
        if(path==='/login'){ $('#tabLogin').classList.add('bg-white','dark:bg-neutral-900','border'); $('#tabSignup').classList.remove('bg-white','dark:bg-neutral-900','border'); $('#loginForm').classList.remove('hidden'); $('#signupForm').classList.add('hidden'); }
        else { $('#tabSignup').classList.add('bg-white','dark:bg-neutral-900','border'); $('#tabLogin').classList.remove('bg-white','dark:bg-neutral-900','border'); $('#signupForm').classList.remove('hidden'); $('#loginForm').classList.add('hidden'); }
      }
      if (path        === '/dashboard') {
        renderDashboard();
      }
      if (path === '/chat') {
        renderChatPage();
      }
      if (path === '/profil') {
        renderProfilePage();
      }
      if (path === '/aura') {
        initAuraGuide();
      }
      setActiveNav(path);
      closeUserMenu();
      $('#mobileMenu')?.classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function pathFromHash() {
      const raw = (location.hash || '#/').slice(1);
      const p = raw.startsWith('/') ? raw : `/${raw}`;
      return routes.includes(p) ? p : '/';
    }

    function navigate(to) {
      location.hash = to.startsWith('#') ? to : `#${to}`;
    }

    function setActiveNav(path) {
      $$('a[data-nav]').forEach(a => {
        const isActive = a.getAttribute('href') === `#${path}`;
        a.classList.toggle('text-neutral-900', isActive);
        a.classList.toggle('dark:text-white', isActive);
        a.classList.toggle('bg-neutral-100', isActive);
        a.classList.toggle('dark:bg-neutral-800', isActive);
      });
    }

    // ------------------------------
    // Auth UI
    // ------------------------------
    function renderAuthArea() {
      const user = getCurrentUser();
      const btnSignin = $('#btnSignin');
      const userBtn = $('#userMenuBtn');
      if (user) {
        btnSignin.classList.add('hidden');
        userBtn.classList.remove('hidden');
        $('#userName').textContent = user.name || user.email;
      } else {
        btnSignin.classList.remove('hidden');
        userBtn.classList.add('hidden');
      }
    }

    // ------------------------------
    // Dashboard
    // ------------------------------
    function renderDashboard() {
      const user = getCurrentUser(); if (!user) return;
      // Agents grid
      renderAgentsGrid();
      // Recent conversations
      renderRecentConversations();
      // Plan & Quota
      $('#userPlan').textContent = user.plan || user.abonnement || 'free';
      $('#userQuota').textContent = user.quota || '—';
    }

    function renderAgentsGrid(filter = '') {
      const user = getCurrentUser(); if (!user) return;
      const wrap = $('#agentsGrid');
      const items = db.agents.filter(a => a.userId === user.id && (a.nom?.toLowerCase().includes(filter) || a.description?.toLowerCase().includes(filter)));
      wrap.innerHTML = items.map(a => {
        return `
          <div class="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900 flex flex-col" data-shadow="card">
            <div class="flex items-start gap-3">
              <div class="h-9 w-9 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5 text-neutral-600 dark:text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 8c-2.2 0-4 1.8-4 4v6h8v-6c0-2.2-1.8-4-4-4Z"/><path d="M9 8a3 3 0 1 1 6 0"/></svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-medium truncate">${a.nom || 'Module'}</p>
                <p class="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2">${a.description || ''}</p>
              </div>
            </div>
            <div class="mt-4 flex items-center gap-2">
              <button data-chat-agent="${a.id}" class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 text-xs hover:bg-neutral-100 dark:hover:bg-neutral-800">
                Ouvrir le Chat
              </button>
              <button data-edit-agent="${a.id}" class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 text-xs hover:bg-neutral-100 dark:hover:bg-neutral-800">Éditer</button>
              <button data-delete-agent="${a.id}" class="ml-auto inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-red-300/40 text-red-600 dark:text-red-400 text-xs hover:bg-red-50 dark:hover:bg-red-950/40">Supprimer</button>
            </div>
          </div>
        `;
      }).join('') || `<div class="text-sm text-neutral-500">Aucun module. Créez-en un pour commencer.</div>`;

      // Bind actions
      $$('[data-chat-agent]').forEach(b => b.onclick = () => { navigate('/chat'); setTimeout(()=>selectAgentForChat(b.getAttribute('data-chat-agent')), 0); });
      $$('[data-edit-agent]').forEach(b => b.onclick = () => openAgentModal(b.getAttribute('data-edit-agent')));
      $$('[data-delete-agent]').forEach(b => b.onclick = () => deleteAgent(b.getAttribute('data-delete-agent')));
    }

    function renderRecentConversations() {
      const user = getCurrentUser(); if (!user) return;
      const cont = $('#recentConversations');
      const items = db.conversations.filter(c => c.userId === user.id)
        .sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt)).slice(0,5);
      cont.innerHTML = items.map(c => {
        const agent = db.agents.find(a=>a.id===c.agentId);
        return `
          <button data-open-conv="${c.id}" class="w-full flex items-center gap-3 px-2.5 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <div class="h-8 w-8 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-neutral-600 dark:text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            </div>
            <div class="text-left">
              <p class="text-sm font-medium">${c.titre || 'Sans titre'}</p>
              <p class="text-xs text-neutral-600 dark:text-neutral-400">${agent?.nom || 'Module'} • ${new Date(c.createdAt).toLocaleDateString()}</p>
            </div>
          </button>
        `;
      }).join('') || `<div class="text-sm text-neutral-500">Pas encore de conversations.</div>`;
      $$('[data-open-conv]').forEach(b => b.onclick = () => { navigate('/chat'); setTimeout(()=>openConversation(b.getAttribute('data-open-conv')), 0); });
    }

    // ------------------------------
    // Agents CRUD (Modal)
    // ------------------------------
    function openAgentModal(agentId=null) {
      const user = getCurrentUser(); if (!user) return;
      $('#agentModal').classList.remove('hidden','opacity-0');
      $('#agentModal').classList.add('flex');
      $('#agentId').value = agentId || '';
      $('#agentModalTitle').textContent = agentId ? 'Éditer le module' : 'Créer un module';
      if (agentId) {
        const a = db.agents.find(x=>x.id===agentId && x.userId===user.id);
        $('#agentName').value = a?.nom || '';
        $('#agentVoice').value = a?.voix || 'Neutre';
        $('#agentDesc').value = a?.description || '';
        $('#agentSystem').value = a?.instructions || '';
      } else {
        $('#agentForm').reset();
      }
    }
    function closeAgentModal() {
      $('#agentModal').classList.add('hidden');
      $('#agentModal').classList.remove('flex');
    }
    function deleteAgent(agentId) {
      const user = getCurrentUser(); if(!user) return;
      if (!confirm('Supprimer cet agent et ses conversations ?')) return;
      db.conversations = db.conversations.filter(c=>!(c.agentId===agentId && c.userId===user.id));
      const convIds = db.conversations.filter(c=>c.agentId===agentId).map(c=>c.id);
      db.messages = db.messages.filter(m=>!convIds.includes(m.conversationId));
      db.agents = db.agents.filter(a=>!(a.id===agentId && a.userId===user.id));
      renderAgentsGrid($('#agentSearch').value.trim().toLowerCase());
      renderChatAgentsList();
      renderChatConversationsList();
      showToast('Module supprimé');
    }

    // ------------------------------
    // Chat
    // ------------------------------
    let currentChat = {
      agentId: null,
      conversationId: null
    };

    function renderChatPage() {
      renderChatAgentsList();
      renderChatConversationsList();
      if (!currentChat.conversationId) {
        $('#chatFeed').innerHTML = `<div class="text-center text-sm text-neutral-500 mt-6">Aucune conversation. Démarrez-en une nouvelle.</div>`;
        $('#chatAgentName').textContent = 'Sélectionnez un module';
        $('#chatAgentDesc').textContent = 'Instructions système affichées ici.';
        $('#chatAgentVoice').textContent = '-';
      }
    }

    function renderChatAgentsList(filter='') {
      const user = getCurrentUser(); if(!user) return;
      const list = $('#chatAgentsList');
      const items = db.agents.filter(a=>a.userId===user.id && (a.nom?.toLowerCase().includes(filter) || a.description?.toLowerCase().includes(filter)));
      list.innerHTML = items.map(a => `
        <button data-chat-select-agent="${a.id}" class="w-full flex items-center gap-3 px-2.5 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 ${currentChat.agentId===a.id?'bg-neutral-100 dark:bg-neutral-800':''}">
          <div class="h-8 w-8 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-neutral-600 dark:text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 8c-2.2 0-4 1.8-4 4v6h8v-6c0-2.2-1.8-4-4-4Z"/><path d="M9 8a3 3 0 1 1 6 0"/></svg>
          </div>
          <div class="text-left">
            <p class="text-sm font-medium">${a.nom}</p>
            <p class="text-[11px] text-neutral-600 dark:text-neutral-400 line-clamp-1">${a.description || ''}</p>
          </div>
        </button>
      `).join('') || `<div class="text-sm text-neutral-500 px-2.5 py-2">Aucun module.</div>`;
      $$('[data-chat-select-agent]').forEach(b => b.onclick = () => selectAgentForChat(b.getAttribute('data-chat-select-agent')));
    }

    function selectAgentForChat(agentId) {
      const agent = db.agents.find(a=>a.id===agentId);
      currentChat.agentId = agentId;
      currentChat.conversationId = null;
      $('#chatAgentName').textContent = agent?.nom || 'Module';
      $('#chatAgentDesc').textContent = agent?.instructions || '';
      $('#chatAgentVoice').textContent = agent?.voix || '-';
      renderChatAgentsList($('#chatAgentSearch').value.trim().toLowerCase());
      $('#chatFeed').innerHTML = `<div class="text-center text-sm text-neutral-500 mt-6">Cliquez sur "Nouvelle conv." pour commencer.</div>`;
    }

    function renderChatConversationsList() {
      const user = getCurrentUser(); if(!user) return;
      const list = $('#chatConversationsList');
      const items = db.conversations.filter(c=>c.userId===user.id).sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
      list.innerHTML = items.map(c=>{
        const agent = db.agents.find(a=>a.id===c.agentId);
        const active = currentChat.conversationId===c.id ? 'bg-neutral-100 dark:bg-neutral-800' : '';
        return `
          <button data-open-conv="${c.id}" class="w-full text-left px-2.5 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 ${active}">
            <p class="text-xs font-medium">${c.titre || 'Sans titre'}</p>
            <p class="text-[11px] text-neutral-600 dark:text-neutral-400">${agent?.nom || 'Module'} • ${new Date(c.createdAt).toLocaleDateString()}</p>
          </button>
        `;
      }).join('') || `<div class="text-xs text-neutral-500">Aucune conversation.</div>`;
      $$('[data-open-conv]').forEach(b => b.onclick = () => openConversation(b.getAttribute('data-open-conv')));
    }

    function openConversation(convId) {
      const conv = db.conversations.find(c=>c.id===convId);
      if (!conv) return;
      currentChat.conversationId = conv.id;
      currentChat.agentId = conv.agentId;
      const agent = db.agents.find(a=>a.id===conv.agentId);
      $('#chatAgentName').textContent = agent?.nom || 'Module';
      $('#chatAgentDesc').textContent = agent?.instructions || '';
      $('#chatAgentVoice').textContent = agent?.voix || '-';
      renderChatConversationsList();
      renderChatFeed(conv.id);
      renderChatAgentsList($('#chatAgentSearch').value.trim().toLowerCase());
    }

    function renderChatFeed(convId) {
      const messages = db.messages.filter(m=>m.conversationId===convId).sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt));
      const feed = $('#chatFeed');
      feed.innerHTML = messages.map(m => {
        const isUser = m.role === 'user';
        return `
          <div class="flex ${isUser?'justify-end':''}">
            <div class="max-w-[75%] rounded-lg px-3 py-2 text-sm border ${isUser?'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 border-neutral-900/10 dark:border-white/10':'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border-neutral-200 dark:border-neutral-800'}">
              ${escapeHTML(m.texte)}
            </div>
          </div>
        `;
      }).join('');
      feed.scrollTop = feed.scrollHeight;
    }

    function ensureConversation() {
      const user = getCurrentUser(); if(!user) return null;
      if (currentChat.conversationId) return currentChat.conversationId;
      if (!currentChat.agentId) { showToast('Sélectionnez un module'); return null; }
      const agent = db.agents.find(a=>a.id===currentChat.agentId);
      const conv = { id: uid(), agentId: agent.id, userId: user.id, titre: `Discussion avec ${agent.nom}`, createdAt: nowISO(), updatedAt: nowISO() };
      db.conversations = [conv, ...db.conversations];
      currentChat.conversationId = conv.id;
      renderChatConversationsList();
      return conv.id;
    }

    function sendMessage(text) {
      const user = getCurrentUser(); if(!user) return;
      const convId = ensureConversation(); if(!convId) return;
      const trimmed = text.trim(); if (!trimmed) return;
      db.messages = [...db.messages, { id: uid(), conversationId: convId, userIdOrAgent: user.id, role: 'user', texte: trimmed, createdAt: nowISO() }];
      renderChatFeed(convId);
      $('#chatInput').value = '';
      autoResizeTextarea($('#chatInput'));
      simulateAssistantResponse(convId);
    }

    function simulateAssistantResponse(convId) {
      const conv = db.conversations.find(c=>c.id===convId); if(!conv) return;
      const agent = db.agents.find(a=>a.id===conv.agentId);
      const reply = `(${agent?.nom || 'Module'}) Merci ! Je traite votre demande. ${agent?.instructions ? 'Contexte: ' + agent.instructions.slice(0,80) + (agent.instructions.length>80?'…':'') : ''}`;
      setTimeout(() => {
        db.messages = [...db.messages, { id: uid(), conversationId: convId, userIdOrAgent: 'agent', role: 'assistant', texte: reply, createdAt: nowISO() }];
        renderChatFeed(convId);
        renderRecentConversations();
      }, 600);
    }

    // ------------------------------
    // Profil
    // ------------------------------
    function renderProfilePage() {
      const user = getCurrentUser(); if(!user) return;
      $('#profileName').value = user.name || '';
      $('#profileEmail').value = user.email || '';
      $('#profilePlan').textContent = user.plan || user.abonnement || 'free';
      $('#profileQuota').textContent = user.quota || '—';
    }

    // ------------------------------
    // Aura Guide interactions
    // ------------------------------
    function initAuraGuide() {
      // Accordions
      $$('[data-accordion]').forEach(btn => {
        btn.onclick = () => {
          const candidate = btn.nextElementSibling;
          if (candidate) {
            candidate.classList.toggle('hidden');
          }
        };
      });
      // Copy buttons
      $$('[data-copy]').forEach(btn => {
        btn.onclick = async () => {
          const sel = btn.getAttribute('data-copy');
          const el = $(sel);
          if (!el) return;
          const text = el.textContent;
          try {
            await navigator.clipboard.writeText(text);
            showToast('Copié dans le presse-papiers');
          } catch {
            showToast('Copie impossible');
          }
        };
      });
    }

    // ------------------------------
    // Helpers UI
    // ------------------------------
    function escapeHTML(str='') {
      return str.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
    }

    function autoResizeTextarea(el) {
      el.style.height = 'auto';
      el.style.height = (el.scrollHeight) + 'px';
    }

    function closeUserMenu() {
      $('#userMenu')?.classList.add('hidden');
    }

    // ------------------------------
    // Events & Listeners
    // ------------------------------
    // Theme
    $('#themeToggle').addEventListener('click', toggleTheme);

    // Year
    $('#year').textContent = new Date().getFullYear();

    // Mobile menu
    $('#mobileMenuBtn').addEventListener('click', () => {
      $('#mobileMenu').classList.toggle('hidden');
    });

    // User menu
    $('#userMenuBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      $('#userMenu').classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      if (!$('#userMenu').classList.contains('hidden')) {
        if (!$('#userMenu').contains(e.target) && e.target !== $('#userMenuBtn')) {
          closeUserMenu();
        }
      }
    });

    // Auth Tabs
    $('#tabLogin').addEventListener('click', () => navigate('/login'));
    $('#tabSignup').addEventListener('click', () => navigate('/signup'));

    // Login
    $('#loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = e.target.querySelector('input[type="email"]').value.trim().toLowerCase();
      const password = e.target.querySelector('input[type="password"]').value;
      const existing = db.users.find(u=>u.email?.toLowerCase()===email && u.password===password);
      if (!existing) return showToast('Identifiants invalides');
      db.session = { userId: existing.id };
      renderAuthArea();
      showToast('Connexion réussie');
      navigate('/dashboard');
    });

    // Signup
    $('#signupForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const [nameEl, emailEl, passEl] = e.target.querySelectorAll('input');
      const name = nameEl.value.trim();
      const email = emailEl.value.trim().toLowerCase();
      const password = passEl.value;
      if (db.users.some(u=>u.email?.toLowerCase()===email)) return showToast('Email déjà utilisé');
      const id = uid();
      const user = { id, name, email, password, plan: 'free', quota: '—' };
      db.users = [...db.users, user];
      db.session = { userId: id };
      showToast('Compte créé');
      renderAuthArea();
      navigate('/dashboard');
    });

    // Logout
    $('#logoutBtn').addEventListener('click', () => {
      db.session = null;
      renderAuthArea();
      navigate('/login');
      showToast('Déconnecté');
    });

    // Create agent button
    $('#btnCreateAgent').addEventListener('click', () => openAgentModal());

    // Agent modal close/cancel
    $('#closeAgentModal').addEventListener('click', closeAgentModal);
    $('#agentCancel').addEventListener('click', closeAgentModal);

    // Agent form submit
    $('#agentForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const user = getCurrentUser(); if(!user) return;
      const id = $('#agentId').value || uid();
      const payload = {
        id,
        userId: user.id,
        nom: $('#agentName').value.trim() || 'Module',
        voix: $('#agentVoice').value,
        description: $('#agentDesc').value.trim(),
        instructions: $('#agentSystem').value.trim()
      };
      const exists = db.agents.some(a=>a.id===id);
      if (exists) {
        db.agents = db.agents.map(a => a.id===id ? {...a, ...payload} : a);
        showToast('Module mis à jour');
      } else {
        db.agents = [payload, ...db.agents];
        showToast('Module créé');
      }
      closeAgentModal();
      renderAgentsGrid($('#agentSearch').value.trim().toLowerCase());
      renderChatAgentsList();
    });

    // Agents search
    $('#agentSearch').addEventListener('input', (e) => {
      renderAgentsGrid(e.target.value.trim().toLowerCase());
    });

    // Chat: new conversation
    $('#chatNewConvBtn').addEventListener('click', () => {
      if (!currentChat.agentId) return showToast('Sélectionnez un module');
      currentChat.conversationId = null;
      const convId = ensureConversation();
      if (convId) {
        renderChatFeed(convId);
        showToast('Nouvelle conversation');
      }
    });

    // Chat: agent search in sidebar
    $('#chatAgentSearch').addEventListener('input', (e) => {
      renderChatAgentsList(e.target.value.trim().toLowerCase());
    });

    // Chat: textarea behaviors
    const chatInput = $('#chatInput');
    chatInput.addEventListener('input', () => autoResizeTextarea(chatInput));
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        $('#sendBtn').click();
      }
    });

    // Chat: send
    $('#sendBtn').addEventListener('click', () => {
      const text = chatInput.value;
      sendMessage(text);
    });

    // Mic placeholder
    $('#micBtn').addEventListener('click', () => showToast('Micro (placeholder)'));

    // Files attach
    $('#fileInput').addEventListener('change', (e) => {
      const user = getCurrentUser(); if(!user) return;
      const files = Array.from(e.target.files || []);
      const wrap = $('#attachedFiles');
      files.forEach(f => {
        const fileObj = {
          id: uid(),
          userId: user.id,
          name: f.name,
          type: f.type || 'application/octet-stream',
          url: URL.createObjectURL(f),
          size: f.size,
          uploadedAt: nowISO()
        };
        db.files = [fileObj, ...db.files];
        const chip = document.createElement('span');
        chip.className = 'inline-flex items-center gap-1 text-xs px-2 py-1 rounded border border-neutral-200 dark:border-neutral-800';
        chip.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-neutral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>${fileObj.name}`;
        wrap.appendChild(chip);
      });
      e.target.value = '';
      showToast('Fichier(s) attaché(s)');
    });

    // Profile actions
    $('#saveProfileBtn').addEventListener('click', () => {
      const user = getCurrentUser(); if(!user) return;
      const name = $('#profileName').value.trim();
      db.users = db.users.map(u => u.id===user.id ? {...u, name} : u);
      showToast('Profil sauvegardé');
      renderAuthArea();
    });

    $('#changePasswordBtn').addEventListener('click', () => {
      const user = getCurrentUser(); if(!user) return;
      const cur = $('#currentPassword').value;
      const next = $('#newPassword').value;
      const conf = $('#confirmPassword').value;
      if (!next || next.length < 6) return showToast('Mot de passe trop court');
      if (next !== conf) return showToast('Confirmation invalide');
      const real = db.users.find(u=>u.id===user.id);
      if (real.password && real.password !== cur) return showToast('Mot de passe actuel incorrect');
      db.users = db.users.map(u=>u.id===user.id ? {...u, password: next} : u);
      $('#currentPassword').value = $('#newPassword').value = $('#confirmPassword').value = '';
      showToast('Mot de passe mis à jour');
    });

    $('#deleteAccountBtn').addEventListener('click', () => {
      const user = getCurrentUser(); if(!user) return;
      if (!confirm('Confirmer la suppression de votre compte ?')) return;
      // delete data
      const uid_ = user.id;
      const myAgentIds = db.agents.filter(a=>a.userId===uid_).map(a=>a.id);
      const myConvIds = db.conversations.filter(c=>c.userId===uid_).map(c=>c.id);
      db.messages = db.messages.filter(m=>!myConvIds.includes(m.conversationId));
      db.conversations = db.conversations.filter(c=>c.userId!==uid_);
      db.agents = db.agents.filter(a=>a.userId!==uid_);
      db.files = db.files.filter(f=>f.userId!==uid_);
      db.users = db.users.filter(u=>u.id!==uid_);
      db.session = null;
      showToast('Compte supprimé');
      navigate('/signup');
      renderAuthArea();
    });

    // Global: click outside modal to close
    $('#agentModal').addEventListener('click', (e) => {
      if (e.target === $('#agentModal')) closeAgentModal();
    });

    // Hash routing boot
    function boot() {
      applyTheme();
      seedDemo();
      renderAuthArea();
      const guarded = routeGuard(pathFromHash());
      showPage(guarded);
      if (`#${guarded}` !== location.hash) navigate(guarded);
      window.addEventListener('hashchange', () => {
        const p = routeGuard(pathFromHash());
        showPage(p);
      });
    }

    // Esc to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeUserMenu();
        closeAgentModal();
      }
    });

    boot();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col" id="app">

<header className="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>M</div>
<span className="text-[17px] tracking-tight font-semibold">MoxasAI</span>
<nav className="hidden md:flex items-center gap-1 ml-6">
<a className="px-3 py-2 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800" data-nav="home" href="#/">Accueil</a>
<a className="px-3 py-2 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800" data-nav="dashboard" href="#/dashboard">Dashboard</a>
<a className="px-3 py-2 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800" data-nav="chat" href="#/chat">Chat</a>
<a className="px-3 py-2 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800" data-nav="aura" href="#/aura">Guide Aura</a>
<a className="px-3 py-2 rounded-md text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800" data-nav="profil" href="#/profil">Profil</a>
</nav>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-2.5 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm" id="themeToggle" title="Basculer le thème">
<svg className="h-4.5 w-4.5 hidden dark:block" fill="none" id="iconSun" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="4"></circle>
<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
</svg>
<svg className="h-4.5 w-4.5 dark:hidden block" fill="none" id="iconMoon" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"></path>
</svg>
</button>
<div className="flex items-center gap-2" id="authArea">
<a className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm" href="#/login" id="btnSignin">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h4a2 2 0 012 2v4"></path><path d="M10 14L21 3"></path><path d="M21 10v10a2 2 0 01-2 2H9"></path><path d="M3 15v4a2 2 0 002 2h4"></path></svg>
              Se connecter
            </a>
<button className="items-center gap-3 px-2.5 py-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800" id="userMenuBtn">
<img alt="avatar" className="h-8 w-8 rounded-full object-cover ring-1 ring-neutral-200 dark:ring-neutral-800" id="userAvatar" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="text-sm font-medium text-neutral-700 dark:text-neutral-200" id="userName">Utilisateur Démo</span>
<svg className="h-4 w-4 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute top-14 right-4 w-52 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-1" data-shadow="soft" id="userMenu">
<a className="flex items-center gap-2 px-3 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm" href="#/dashboard">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="9" width="7" x="3" y="3"></rect><rect height="5" width="7" x="14" y="3"></rect><rect height="9" width="7" x="14" y="12"></rect><rect height="5" width="7" x="3" y="16"></rect></svg>
                Dashboard
              </a>
<a className="flex items-center gap-2 px-3 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm" href="#/profil">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 00-3-3.87"></path><path d="M4 21v-2a4 4 0 013-3.87"></path><circle cx="12" cy="7" r="4"></circle></svg>
                Profil
              </a>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-left text-sm text-red-600 dark:text-red-400" id="logoutBtn">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h4a2 2 0 012 2v4"></path><path d="M10 14L21 3"></path><path d="M21 10v10a2 2 0 01-2 2H9"></path><path d="M3 15v4a2 2 0 002 2h4"></path></svg>
                Se déconnecter
              </button>
</div>
<button aria-label="Menu" className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800" id="mobileMenuBtn">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>
</div>
</div>
</div>
<div className="md:hidden hidden border-t border-neutral-200 dark:border-neutral-800" id="mobileMenu">
<nav className="px-4 py-2">
<a className="block px-3 py-2 rounded-md text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800" href="#/">Accueil</a>
<a className="block px-3 py-2 rounded-md text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800" href="#/dashboard">Dashboard</a>
<a className="block px-3 py-2 rounded-md text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800" href="#/chat">Chat</a>
<a className="block px-3 py-2 rounded-md text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800" href="#/aura">Guide Aura</a>
<a className="block px-3 py-2 rounded-md text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800" href="#/profil">Profil</a>
<a className="block px-3 py-2 rounded-md text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800" href="#/login">Se connecter</a>
</nav>
</div>
</header>

<main className="flex-1">

<section className="relative" id="pageHome">
<div className="relative">
<div className="absolute inset-0 pointer-events-none opacity-[0.07] dark:opacity-[0.09]">
<div className="h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.3),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.3),transparent_40%)]"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<p className="inline-flex items-center gap-2 text-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-1.5 rounded border border-indigo-100 dark:border-indigo-900">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
                  Workspace IA modulaire
                </p>
<h1 className="mt-5 text-4xl sm:text-5xl tracking-tight font-semibold leading-tight">Organisez, discutez et automatisez avec vos modules IA</h1>
<p className="mt-4 text-neutral-600 dark:text-neutral-300 text-[15px] leading-relaxed">MoxasAI vous permet d’orchestrer des modules IA (règles, rôles, voix) et d’interagir en texte ou audio. Historique, profil et gestion centralisés.</p>
<div className="mt-8 flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 border border-neutral-900/10 dark:border-white/10" href="#/signup">
                    Commencer
                    <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-100 text-neutral-900 border-neutral-200 border rounded-md pt-2.5 pr-4 pb-2.5 pl-4" href="/dashboard">
                    Voir le Dashboard
                  </a>
</div>
<div className="mt-10 grid grid-cols-3 gap-4 text-sm text-neutral-600 dark:text-neutral-300">
<div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-3" data-shadow="soft">Auth complète</div>
<div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-3" data-shadow="soft">Chat moderne</div>
<div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-3" data-shadow="soft">Historique &amp; Fichiers</div>
</div>
</div>
<div className="relative">
<img alt="Hero" className="w-full h-[380px] object-cover rounded-xl border border-neutral-200 dark:border-neutral-800" data-shadow="card" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute -bottom-6 left-6 right-6 bg-white/80 dark:bg-neutral-900/80 backdrop-blur rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-neutral-200 dark:ring-neutral-800" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div>
<p className="text-sm font-medium">Module: Aline (Support)</p>
<p className="text-xs text-neutral-600 dark:text-neutral-400">“Besoin d’aide ? Discutons !”</p>
</div>
<span className="ml-auto inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> En ligne
                    </span>
</div>
</div>
</div>
</div>
<div className="mt-16 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5" data-shadow="card">
<div className="h-9 w-9 rounded-md bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path></svg>
</div>
<h3 className="text-lg tracking-tight font-semibold">Modules sur-mesure</h3>
<p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Nom, description, instructions système, voix. Pilotez la personnalité et le ton.</p>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5" data-shadow="card">
<div className="h-9 w-9 rounded-md bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path></svg>
</div>
<h3 className="text-lg tracking-tight font-semibold">Chat texte + audio</h3>
<p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Interface moderne avec pièces jointes et bouton micro (placeholder).</p>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5" data-shadow="card">
<div className="h-9 w-9 rounded-md bg-amber-600/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h18"></path><path d="M8 5v14"></path><path d="M16 5v14"></path><path d="M3 19h18"></path></svg>
</div>
<h3 className="text-lg tracking-tight font-semibold">Historique &amp; Profil</h3>
<p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Conversations et fichiers liés à vos modules. Gestion du compte.</p>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="pageAuth">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="mx-auto max-w-lg">
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900" data-shadow="card">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-semibold" style={{letterSpacing: '-0.02em'}}>M</div>
<h2 className="text-2xl tracking-tight font-semibold">Bienvenue</h2>
</div>
<div className="mt-6 grid grid-cols-2 p-1 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
<button className="px-3 py-2 rounded-md text-sm font-medium bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800" id="tabLogin">Se connecter</button>
<button className="px-3 py-2 rounded-md text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:bg-white/60 dark:hover:bg-neutral-900/50" id="tabSignup">Créer un compte</button>
</div>

<form className="mt-6 space-y-4" id="loginForm">
<div>
<label className="text-sm font-medium">Email</label>
<input className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="vous@exemple.com" required="" type="email"/>
</div>
<div>
<label className="text-sm font-medium">Mot de passe</label>
<input className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 border border-neutral-900/10 dark:border-white/10">Se connecter</button>
<p className="text-xs text-neutral-600 dark:text-neutral-400">En continuant, vous acceptez nos conditions.</p>
</form>

<form className="hidden mt-6 space-y-4" id="signupForm">
<div className="grid grid-cols-1 gap-4">
<div>
<label className="text-sm font-medium">Nom</label>
<input className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Prénom Nom" required="" type="text"/>
</div>
<div>
<label className="text-sm font-medium">Email</label>
<input className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="vous@exemple.com" required="" type="email"/>
</div>
<div>
<label className="text-sm font-medium">Mot de passe</label>
<input className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" minlength="6" placeholder="••••••••" required="" type="password"/>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 border border-neutral-900/10 dark:border-white/10">Créer mon compte</button>
</form>
</div>
</div>
</div>
</section>

<section className="hidden" id="pageDashboard">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-3xl tracking-tight font-semibold">Dashboard</h2>
<p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Gérez vos modules IA, conversations et fichiers.</p>
</div>
<button className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 border border-neutral-900/10 dark:border-white/10" id="btnCreateAgent">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
              Créer un module
            </button>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold">Vos modules</h3>
<div className="relative">
<input className="w-64 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" id="agentSearch" placeholder="Rechercher un module..."/>
<svg className="h-4 w-4 absolute left-2.5 top-2.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
</div>
<div className="mt-4 grid sm:grid-cols-2 xl:grid-cols-3 gap-4" id="agentsGrid"></div>
</div>

<div className="space-y-6">
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900" data-shadow="card">
<h4 className="text-base tracking-tight font-semibold">Dernières conversations</h4>
<div className="mt-3 space-y-3" id="recentConversations"></div>
<a className="mt-3 inline-flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline" href="#/chat">Ouvrir le Chat
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900" data-shadow="card">
<h4 className="text-base tracking-tight font-semibold">Abonnement</h4>
<div className="mt-2 text-sm">
<div className="flex items-center justify-between py-1">
<span>Plan</span><span className="px-2 py-0.5 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200" id="userPlan">free</span>
</div>
<div className="flex items-center justify-between py-1">
<span>Quota</span><span id="userQuota">-</span>
</div>
</div>
<p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">Paiements et quotas arrivent en V2.</p>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="pageChat">
<div className="h-[calc(100vh-64px)]">
<div className="grid grid-cols-12 h-full">

<aside className="col-span-12 md:col-span-4 lg:col-span-3 border-r border-neutral-200 dark:border-neutral-800 flex flex-col">
<div className="p-4 flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold">Modules</h3>
<button className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm" id="chatNewConvBtn">
                  Nouvelle conv.
                </button>
</div>
<div className="px-4 pb-3">
<div className="relative">
<input className="w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" id="chatAgentSearch" placeholder="Rechercher un module..."/>
<svg className="h-4 w-4 absolute left-2.5 top-2.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
</div>
<div className="px-2 overflow-y-auto flex-1 space-y-1" id="chatAgentsList"></div>
<div className="border-t border-neutral-200 dark:border-neutral-800 p-3">
<h4 className="text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2">Conversations</h4>
<div className="space-y-1 max-h-60 overflow-y-auto" id="chatConversationsList"></div>
</div>
</aside>

<div className="col-span-12 md:col-span-8 lg:col-span-9 flex flex-col">
<div className="h-14 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border border-neutral-200 dark:border-neutral-700" id="chatAgentBadge">
<svg className="h-5 w-5 text-neutral-700 dark:text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8c-2.2 0-4 1.8-4 4v6h8v-6c0-2.2-1.8-4-4-4Z"></path><path d="M9 8a3 3 0 1 1 6 0"></path></svg>
</div>
<div>
<p className="text-sm font-medium" id="chatAgentName">Sélectionnez un module</p>
<p className="text-xs text-neutral-600 dark:text-neutral-400" id="chatAgentDesc">Instructions système affichées ici.</p>
</div>
</div>
<div className="flex items-center gap-2">
<label className="inline-flex items-center gap-2 text-xs px-2 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800">
<svg className="h-4 w-4 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 10l-4 4-4-4"></path></svg>
                    Voix: <span className="font-medium ml-1" id="chatAgentVoice">-</span>
</label>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4" id="chatFeed">
<div className="text-center text-sm text-neutral-500 mt-6">Aucune conversation. Démarrez-en une nouvelle.</div>
</div>
<div className="border-t border-neutral-200 dark:border-neutral-800 p-3">
<div className="flex items-end gap-2">
<label className="relative group">
<input accept=".txt,.pdf" className="hidden" id="fileInput" type="file"/>
<div className="h-10 w-10 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center cursor-pointer">
<svg className="h-5 w-5 text-neutral-600 dark:text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path></svg>
</div>
</label>
<div className="flex-1">
<div className="flex flex-wrap gap-2 mb-2" id="attachedFiles"></div>
<div className="relative">
<textarea className="w-full resize-none rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 pr-20 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" id="chatInput" placeholder="Écrivez votre message..." rows="1"></textarea>
<div className="absolute right-1 bottom-1 flex items-center gap-1">
<button className="h-8 w-8 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center" id="micBtn" title="Audio (placeholder)">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1v11a3 3 0 0 1-6 0V6"></path><path d="M19 10a7 7 0 0 1-14 0"></path><path d="M12 19v4"></path><path d="M8 23h8"></path></svg>
</button>
<button className="h-8 px-3 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 border border-neutral-900/10 dark:border-white/10 inline-flex items-center gap-2" id="sendBtn">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                          Envoyer
                        </button>
</div>
</div>
</div>
</div>
<p className="mt-2 text-[11px] text-neutral-500">Utilisation de l’API OpenAI simulée. Remplacez la clé et l’endpoint pour activer.</p>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="pageProfil">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
<h2 className="text-3xl tracking-tight font-semibold">Profil</h2>
<p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Mettez à jour votre compte et vos préférences.</p>
<div className="mt-8 grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 space-y-6">
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900" data-shadow="card">
<h3 className="text-lg tracking-tight font-semibold">Informations</h3>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div>
<label className="text-sm font-medium">Nom</label>
<input className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="profileName"/>
</div>
<div>
<label className="text-sm font-medium">Email</label>
<input className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/50 px-3 py-2 text-neutral-500" disabled="" id="profileEmail"/>
</div>
</div>
<div className="mt-4">
<button className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 border border-neutral-900/10 dark:border-white/10" id="saveProfileBtn">
                    Sauvegarder
                  </button>
</div>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900" data-shadow="card">
<h3 className="text-lg tracking-tight font-semibold">Sécurité</h3>
<div className="mt-4 grid sm:grid-cols-3 gap-4">
<div>
<label className="text-sm font-medium">Mot de passe actuel</label>
<input className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="currentPassword" type="password"/>
</div>
<div>
<label className="text-sm font-medium">Nouveau mot de passe</label>
<input className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="newPassword" type="password"/>
</div>
<div>
<label className="text-sm font-medium">Confirmer</label>
<input className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="confirmPassword" type="password"/>
</div>
</div>
<div className="mt-4 flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 border border-neutral-900/10 dark:border-white/10" id="changePasswordBtn">Mettre à jour</button>
</div>
</div>
</div>
<div className="space-y-6">
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900" data-shadow="card">
<h3 className="text-lg tracking-tight font-semibold">Statut</h3>
<div className="mt-3 text-sm">
<div className="flex items-center justify-between py-1">
<span>Plan</span><span className="px-2 py-0.5 rounded-md border border-neutral-200 dark:border-neutral-800" id="profilePlan">free</span>
</div>
<div className="flex items-center justify-between py-1">
<span>Quota</span><span id="profileQuota">-</span>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900" data-shadow="card">
<h3 className="text-lg tracking-tight font-semibold text-red-600 dark:text-red-400">Danger</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Suppression irréversible de votre compte et de vos données.</p>
<button className="mt-3 inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md border border-red-300/40 text-red-700 hover:bg-red-50 dark:text-red-300 dark:border-red-900/60 dark:hover:bg-red-950/40" id="deleteAccountBtn">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>
                  Supprimer mon compte
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="pageAura">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-3xl tracking-tight font-semibold">Construction de MoxasAI sur Aura.build</h2>
<p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Guide opérationnel avec schémas de collections et extraits prêts à copier-coller.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="inline-flex items-center gap-2 text-xs px-2 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800">
<svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7 10 17l-5-5"></path></svg>
                Copiez les définitions et collez-les dans Aura
              </span>
</div>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 space-y-6">

<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900" data-shadow="card">
<div className="flex items-center gap-2 px-5 py-4 border-b border-neutral-200 dark:border-neutral-800">
<div className="h-8 w-8 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
<svg className="h-4.5 w-4.5 text-neutral-700 dark:text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="18" x="3" y="4"></rect><path d="M7 8h10M7 12h10M7 16h4"></path></svg>
</div>
<h3 className="text-lg tracking-tight font-semibold">Collections de données</h3>
</div>
<div className="px-5 py-4">

<button className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800" data-accordion="">
<span className="text-sm font-medium">Collection: Users</span>
<svg className="h-4.5 w-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden">
<pre className="mt-3 p-3 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 overflow-x-auto text-[12.5px] leading-relaxed" id="code-users"><code>{
  "collection": "Users",
  "fields": [
    { "name": "email", "type": "String", "unique": true, "required": true },
    { "name": "passwordHash", "type": "String", "required": true },
    { "name": "name", "type": "String" },
    { "name": "isPremium", "type": "Boolean", "default": false },
    { "name": "plan", "type": "String", "default": "free" },
    { "name": "messageCount", "type": "Number", "default": 0 },
    { "name": "imageCount", "type": "Number", "default": 0 },
    { "name": "lastUsageReset", "type": "DateTime" },
    { "name": "createdAt", "type": "DateTime", "default": "now" }
  ]
}</code></pre>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-xs px-2 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800" data-copy="#code-users">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="12" x="8" y="8"></rect><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"></path></svg>
                        Copier JSON
                      </button>
</div>
</div>

<div className="mt-4">
<button className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800" data-accordion="">
<span className="text-sm font-medium">Collection: Agents</span>
<svg className="h-4.5 w-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden">
<pre className="mt-3 p-3 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 overflow-x-auto text-[12.5px] leading-relaxed" id="code-agents"><code>{
  "collection": "Agents",
  "fields": [
    { "name": "name", "type": "String", "required": true },
    { "name": "type", "type": "String", "required": true },
    { "name": "modelId", "type": "String" },
    { "name": "premiumOnly", "type": "Boolean", "default": false },
    { "name": "description", "type": "String" },
    { "name": "icon", "type": "String" }
  ]
}</code></pre>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-xs px-2 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800" data-copy="#code-agents">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="12" x="8" y="8"></rect><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"></path></svg>
                          Copier JSON
                        </button>
</div>
</div>
</div>

<div className="mt-4">
<button className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800" data-accordion="">
<span className="text-sm font-medium">Collection: Conversations</span>
<svg className="h-4.5 w-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden">
<pre className="mt-3 p-3 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 overflow-x-auto text-[12.5px] leading-relaxed" id="code-conversations"><code>{
  "collection": "Conversations",
  "fields": [
    { "name": "userId", "type": "Relation", "ref": "Users", "required": true },
    { "name": "agentId", "type": "Relation", "ref": "Agents", "required": true },
    { "name": "title", "type": "String" },
    { "name": "createdAt", "type": "DateTime", "default": "now" },
    { "name": "updatedAt", "type": "DateTime", "default": "now" }
  ]
}</code></pre>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-xs px-2 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800" data-copy="#code-conversations">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="12" x="8" y="8"></rect><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"></path></svg>
                          Copier JSON
                        </button>
</div>
</div>
</div>

<div className="mt-4">
<button className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800" data-accordion="">
<span className="text-sm font-medium">Collection: Messages</span>
<svg className="h-4.5 w-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden">
<pre className="mt-3 p-3 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 overflow-x-auto text-[12.5px] leading-relaxed" id="code-messages"><code>{
  "collection": "Messages",
  "fields": [
    { "name": "conversationId", "type": "Relation", "ref": "Conversations", "required": true },
    { "name": "sender", "type": "String", "required": true },
    { "name": "content", "type": "Text", "required": true },
    { "name": "type", "type": "String", "default": "text" },
    { "name": "fileId", "type": "Relation", "ref": "Files" },
    { "name": "createdAt", "type": "DateTime", "default": "now" }
  ]
}</code></pre>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-xs px-2 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800" data-copy="#code-messages">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="12" x="8" y="8"></rect><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"></path></svg>
                          Copier JSON
                        </button>
</div>
</div>
</div>

<div className="mt-4">
<button className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800" data-accordion="">
<span className="text-sm font-medium">Collection: Files</span>
<svg className="h-4.5 w-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden">
<pre className="mt-3 p-3 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 overflow-x-auto text-[12.5px] leading-relaxed" id="code-files"><code>{
  "collection": "Files",
  "fields": [
    { "name": "userId", "type": "Relation", "ref": "Users", "required": true },
    { "name": "conversationId", "type": "Relation", "ref": "Conversations" },
    { "name": "name", "type": "String", "required": true },
    { "name": "type", "type": "String", "required": true },
    { "name": "url", "type": "String", "required": true },
    { "name": "size", "type": "Number" },
    { "name": "content", "type": "Text" },
    { "name": "uploadedAt", "type": "DateTime", "default": "now" }
  ]
}</code></pre>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-xs px-2 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800" data-copy="#code-files">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="12" x="8" y="8"></rect><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"></path></svg>
                          Copier JSON
                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900" data-shadow="card">
<div className="flex items-center gap-2 px-5 py-4 border-b border-neutral-200 dark:border-neutral-800">
<div className="h-8 w-8 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
<svg className="h-4.5 w-4.5 text-neutral-700 dark:text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H6l-4 4V5a2 2 0 0 1 2-2h8"></path><path d="M17 8h4"></path><path d="M17 12h4"></path></svg>
</div>
<h3 className="text-lg tracking-tight font-semibold">Flux &amp; Intégrations</h3>
</div>
<div className="px-5 py-4 space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
<p>Prévoyez d’utiliser des clés factices puis remplacez-les dans Aura:</p>
<ul className="list-disc pl-5">
<li>OPENAI_API_KEY="sk-openai-clé-factice"</li>
<li>ANTHROPIC_API_KEY="sk-anthropic-clé-factice"</li>
<li>STABILITY_API_KEY="sk-stability-clé-factice"</li>
<li>BING_API_KEY="sk-bing-clé-factice"</li>
</ul>
<p className="text-xs text-neutral-500">Recommandé: stockez ces clés côté serveur Aura (secrets) et proxiez les appels.</p>
</div>
</div>
</div>

<div className="space-y-6">
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5" data-shadow="card">
<h4 className="text-base tracking-tight font-semibold">Étapes rapides</h4>
<ol className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
<li className="flex items-start gap-2"><span className="text-neutral-500">1.</span> Créez les 5 collections avec les JSON ci-contre.</li>
<li className="flex items-start gap-2"><span className="text-neutral-500">2.</span> Ajoutez vos clés API dans la configuration Aura (secrets).</li>
<li className="flex items-start gap-2"><span className="text-neutral-500">3.</span> Paramétrez les règles d’accès: un utilisateur ne voit que ses données.</li>
<li className="flex items-start gap-2"><span className="text-neutral-500">4.</span> Branchez vos endpoints de paiement (Stripe) et webhooks.</li>
</ol>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5" data-shadow="card">
<h4 className="text-base tracking-tight font-semibold">Sécurité &amp; Session</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
<li>- Stockez les mots de passe sous forme de hash (SHA-256, idéalement bcrypt).</li>
<li>- Filtrez toutes les requêtes par userId côté serveur.</li>
<li>- Utilisez des tokens/HTTPOnly cookies si possible.</li>
<li>- Réinitialisez régulièrement les compteurs de quotas.</li>
</ul>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5" data-shadow="card">
<h4 className="text-base tracking-tight font-semibold">Paiements</h4>
<p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">Créez une session Checkout avec Stripe et mettez à jour l’utilisateur via webhook (checkout.session.completed ➜ isPremium=true, plan="premium").</p>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="hidden fixed inset-0 z-50 items-center justify-center" id="agentModal">
<div className="absolute inset-0 bg-black/50"></div>
<div className="relative w-full max-w-xl mx-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5" data-shadow="card">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold" id="agentModalTitle">Créer un module</h3>
<button className="h-8 w-8 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center" id="closeAgentModal">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12"></path></svg>
</button>
</div>
<form className="mt-4 space-y-4" id="agentForm">
<input id="agentId" type="hidden"/>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-sm font-medium">Nom</label>
<input className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="agentName" placeholder="Ex. Aline Support" required=""/>
</div>
<div>
<label className="text-sm font-medium">Voix</label>
<select className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="agentVoice">
<option>Neutre</option>
<option>Femme douce</option>
<option>Homme chaleureux</option>
</select>
</div>
</div>
<div>
<label className="text-sm font-medium">Description</label>
<input className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="agentDesc" placeholder="Ce que fait le module..."/>
</div>
<div>
<label className="text-sm font-medium">Instructions système</label>
<textarea className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="agentSystem" placeholder="Tu es un assistant utile, concis et professionnel..." rows="5"></textarea>
</div>
<div className="flex items-center justify-end gap-2 pt-2">
<button className="px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm" id="agentCancel" type="button">Annuler</button>
<button className="px-3.5 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 border border-neutral-900/10 dark:border-white/10 text-sm">Enregistrer</button>
</div>
</form>
</div>
</div>

<div className="pointer-events-none fixed bottom-4 left-1/2 -translate-x-1/2 hidden" id="toast">
<div className="rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-3 py-2 text-sm shadow-lg border border-neutral-800 dark:border-neutral-200" data-shadow="soft"></div>
</div>

<footer className="border-t border-neutral-200 dark:border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<p className="text-xs text-neutral-500">© <span id="year">2025</span> MoxasAI. Tous droits réservés.</p>
<div className="text-xs text-neutral-500">Démo locale — V1 (paiements/quota en V2)</div>
</div>
</footer>
</div>


    </>
  );
}
