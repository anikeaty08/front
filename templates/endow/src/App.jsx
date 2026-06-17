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



      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
      });

      // Theme
      const themeToggle = document.getElementById('theme-toggle');
      const applyTheme = (t) => {
        if (t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      };
      const getTheme = () => localStorage.getItem('theme') || 'system';
      applyTheme(getTheme());
      themeToggle?.addEventListener('click', () => {
        const current = getTheme();
        const next = current === 'light' ? 'dark' : current === 'dark' ? 'system' : 'light';
        localStorage.setItem('theme', next);
        applyTheme(next);
        toast('Theme: ' + next);
      });

      // Toast helper
      function toast(msg, type='info') {
        const wrap = document.getElementById('toast-wrap');
        const el = document.createElement('div');
        el.className = 'pointer-events-auto rounded-xl border px-4 py-2 shadow backdrop-blur ' +
          (type === 'error' ? 'border-red-200 bg-red-50/90 text-red-800 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-200'
                             : type === 'success' ? 'border-emerald-200 bg-emerald-50/90 text-emerald-800 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200'
                             : 'border-slate-200 bg-white/90 text-slate-800 dark:border-white/10 dark:bg-white/10 dark:text-slate-100');
        el.textContent = msg;
        wrap.appendChild(el);
        setTimeout(() => el.remove(), 3000);
      }

      // Routing
      const routesPublic = ['#/', '#/product', '#/help', '#/terms', '#/privacy', '#/faqs', '#/start'];
      const protectedRoutes = ['#/dashboard', '#/links', '#/analytics', '#/settings', '#/create'];
      const pages = {
        home: document.getElementById('page-home'),
        dashboard: document.getElementById('page-dashboard'),
        links: document.getElementById('page-links'),
        analytics: document.getElementById('page-analytics'),
        settings: document.getElementById('page-settings'),
        create: document.getElementById('page-create')
      };

      // Firebase
      const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        appId: "YOUR_APP_ID",
      };
      firebase.initializeApp(firebaseConfig);
      const auth = firebase.auth();

      // API Client
      const API_BASE = 'https://api.example.com'; // Replace with actual base URL
      let ID_TOKEN = null;
      async function fetchWithAuth(url, options = {}) {
        const headers = Object.assign(
          { 'Content-Type': 'application/json' },
          ID_TOKEN ? { 'Authorization': 'Bearer ' + ID_TOKEN } : {},
          options.headers || {}
        );
        const res = await fetch(API_BASE + url, { ...options, headers });
        if (!res.ok) {
          const t = await res.text();
          throw new Error(t || ('HTTP ' + res.status));
        }
        const ct = res.headers.get('content-type') || '';
        return ct.includes('application/json') ? res.json() : res.text();
      }

      const api = {
        me: () => fetchWithAuth('/api/v1/user/me'),
        logout: () => fetchWithAuth('/api/v1/user/logout', { method: 'POST' }),
        txAll: (page=1, pageSize=10) => fetchWithAuth(`/api/v1/transaction/all?page=${page}&pageSize=${pageSize}`),
        txOne: (id) => fetchWithAuth(`/api/v1/transaction/${id}`),
        linksAll: () => fetchWithAuth('/api/v1/payment-link/all'),
        linkDelete: (id) => fetchWithAuth(`/api/v1/payment-link/${id}`, { method: 'DELETE' }),
        analytics: () => fetchWithAuth('/api/v1/analytics'),
        cashoutCreate: (payload) => fetchWithAuth('/api/v1/cashout/create', { method: 'POST', body: JSON.stringify(payload) }),
        accountsList: () => fetchWithAuth('/api/v1/user/account'),
        accountAdd: (payload) => fetchWithAuth('/api/v1/user/account', { method: 'POST', body: JSON.stringify(payload) }),
        accountDelete: (code) => fetchWithAuth(`/api/v1/user/account/${code}`, { method: 'DELETE' }),
        userUpdate: (payload) => fetchWithAuth('/api/v1/user/me', { method: 'PUT', body: JSON.stringify(payload) }),
        profileUpload: (file) => {
          const fd = new FormData(); fd.append('photo', file);
          return fetch(API_BASE + '/api/v1/user/profile/photo-upload/', {
            method: 'POST',
            headers: ID_TOKEN ? { 'Authorization': 'Bearer ' + ID_TOKEN } : {},
            body: fd
          }).then(r => r.json());
        },
        validatePath: (path) => fetchWithAuth(`/api/v1/payment-link/validate/${encodeURIComponent(path)}`),
        createLink: (payload) => fetchWithAuth('/api/v1/payment-link/create', { method: 'POST', body: JSON.stringify(payload) }),
        uploadLinkImages: (files) => {
          const fd = new FormData();
          [...files].forEach(f => fd.append('images', f));
          return fetch(API_BASE + '/api/v1/payment-link/upload-images/', {
            method: 'POST',
            headers: ID_TOKEN ? { 'Authorization': 'Bearer ' + ID_TOKEN } : {},
            body: fd
          }).then(r => r.json());
        }
      };

      // State
      let CURRENT_USER = null;
      let TX_PAGE = 1;
      let charts = {};

      // UI helpers
      function showSection(key) {
        Object.entries(pages).forEach(([k, el]) => el?.classList.add('hidden'));
        pages[key]?.classList.remove('hidden');
        if (window.lucide) lucide.createIcons();
      }
      function setAuthedUI(isAuthed) {
        document.getElementById('nav-public').classList.toggle('hidden', isAuthed);
        document.getElementById('actions-public').classList.toggle('hidden', isAuthed);
        document.getElementById('nav-authed').classList.toggle('hidden', !isAuthed);
        document.getElementById('actions-authed').classList.toggle('hidden', !isAuthed);
        document.getElementByIddocument.getElementById('mobile-nav').classList.toggle('hidden', !isAuthed);
        // Home vs. app emphasis
        if (!isAuthed) {
          showSection('home');
        }
      }

      // Helpers
      const fmtCurrency = (n, c='USD') => {
        if (isNaN(n)) return '$0.00';
        return new.NumberFormat(undefined, { style: 'currency', currency: c, maximumFractionDigits: 2 }).format(n);
      };
      const fmtDate = (d) => {
        const dt = new Date(d);
        return isNaN(dt) ? '—' : dt.toLocaleString();
      };
      const qs = (sel, root) => root.querySelector(sel);
      const qsa = (sel, root=document) => Array.from(root.querySelectorAll(sel));

      // Auth UI + Avatar
      function updateUserUI(user) {
        if (!user) return;
        const photo = user.photoURL || 'https://api.dicebear.com/7.x/identicon/svg?seed=' + encodeURIComponent(user.email || user.uid);
        const name = user.displayName || (user.email ? user.email.split('@')[0] : 'User');
        const email = user.email || '—';
        const avatarEls = [qs('#avatar-img'), qs('#settings-avatar')];
        avatarEls.forEach(el => { if (el) el.src = photo; });
        const nameEl = qs('#profile-name');
        const emailEl = qs('#profile-email');
        if (nameEl) nameEl.value = name;
        if (emailEl) emailEl.value = email;
        const sessionEmail = qs('#session-email');
        if (sessionEmail) sessionEmail.textContent = email;
      }

      // Page data loaders
      async function loadDashboard() {
        try {
          await Promise.all([loadSummary(), loadTransactions(true), loadLinksSidebar()]);
        } catch (e) {
          console.error(e);
          toast('Failed to load dashboard', 'error');
        }
      }
      async function loadSummary() {
        try {
          const data = await api.analytics();
          // Fallback shapes
          const currency = data?.currency || 'USD';
          qs('#summary-balance').textContent = fmtCurrency(data?.balance ?? 0, currency);
          qs('#summary-updated').textContent = data?.updatedAt ? 'Updated ' + fmtDate(data.updatedAt) : '—';
          qs('#summary-collected').textContent = fmtCurrency(data?.collected30d ?? 0, currency);
          qs('#summary-collected-sub').textContent = (data?.collectedCount30d ?? 0) + ' payments';
          qs('#summary-conv').textContent = ((data?.conversionRate ?? 0) * 100).toFixed(1) + '%';
          qs('#summary-conv-sub').textContent = (data?.visits30d ?? 0) + ' visits';
        } catch (e) {
          console.warn('summary error', e);
        }
      }

      function txRow(tx) {
        const statusColor =
          tx.status === 'succeeded' ? 'text-emerald-600 dark:text-emerald-400' :
          tx.status === 'pending' ? 'text-amber-600 dark:text-amber-400' : 'text-rose-600 dark:text-rose-400';
        return `
          <div class="flex items-center justify-between gap-3 py-3">
            <div class="flex items-center gap-3">
              <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200">
                <i data-lucide="${tx.methodIcon || 'credit-card'}" class="h-4 w-4"></i>
              </div>
              <div>
                <div class="text-sm font-medium">${tx.payerName || 'Anonymous'}</div>
                <div class="text-xs text-slate-500 dark:text-slate-400">${fmtDate(tx.createdAt)}</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm font-semibold">${fmtCurrency(tx.amount || 0, tx.currency || 'USD')}</div>
              <div class="text-xs ${statusColor}">${(tx.status || 'unknown').toUpperCase()}</div>
            </div>
          </div>
        `;
      }

      async function loadTransactions(reset=false) {
        try {
          if (reset) {
            TX_PAGE = 1;
            qs('#tx-list').innerHTML = '';
          }
          const pageSize = 10;
          const res = await api.txAll(TX_PAGE, pageSize);
          const items = Array.isArray(res?.items) ? res.items : (Array.isArray(res) ? res : []);
          const html = items.map(txRow).join('');
          qs('#tx-list').insertAdjacentHTML('beforeend', html || `<div class="py-6 text-sm text-slate-500 text-center">No transactions yet.</div>`);
          if (window.lucide) lucide.createIcons();
          // Paging control
          const more = res?.hasMore ?? (items.length === pageSize);
          qs('#tx-load-more').classList.toggle('hidden', !more);
          if (more) TX_PAGE += 1;
        } catch (e) {
          console.error(e);
          toast('Could not fetch transactions', 'error');
        }
      }

      async function loadLinksSidebar() {
        try {
          const res = await api.linksAll();
          const list = Array.isArray(res) ? res : (res?.items || []);
          const wrap = qs('#links-list');
          wrap.innerHTML = list.slice(0, 5).map(linkCardSmall).join('') || `<div class="text-sm text-slate-500">No links yet.</div>`;
          if (window.lucide) lucide.createIcons();
        } catch (e) {
          console.error(e);
        }
      }

      function linkCardSmall(l) {
        const url = 'https://ndow.link/' + (l.path || l.id);
        const collected = fmtCurrency(l.collected || 0, l.currency || 'USD');
        return `
          <div class="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white/70 p-3 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 transition">
            <div class="min-w-0">
              <div class="truncate text-sm font-medium">${l.description || 'Untitled link'}</div>
              <a href="${url}" target="_blank" class="truncate text-xs text-violet-600 hover:underline dark:text-violet-400">${url}</a>
            </div>
            <div class="text-right">
              <div class="text-sm font-semibold">${collected}</div>
              <div class="text-[11px] text-slate-500 dark:text-slate-400">${l.payments || 0} payments</div>
            </div>
          </div>
        `;
      }

      async function loadLinksPage() {
        try {
          const res = await api.linksAll();
          const list = Array.isArray(res) ? res : (res?.items || []);
          const grid = qs('#links-grid');
          grid.innerHTML = list.map(linkCard).join('') || `<div class="col-span-full rounded-2xl border border-slate-200 p-6 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">No links yet. Create your first link!</div>`;
          if (window.lucide) lucide.createIcons();
          bindLinkCardEvents();
        } catch (e) {
          console.error(e);
          toast('Failed to load links', 'error');
        }
      }

      function linkCard(l) {
        const url = 'https://ndow.link/' + (l.path || l.id);
        const collected = fmtCurrency(l.collected || 0, l.currency || 'USD');
        const expired = l.expiresAt && (new Date(l.expiresAt) < new Date());
        return `
          <div class="rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div class="flex items-start justify-between gap-3">
              <div class="min-w-0">
                <div class="truncate text-base font-semibold">${l.description || 'Untitled link'}</div>
                <a href="${url}" target="_blank" class="truncate text-sm text-violet-600 hover:underline dark:text-violet-400">${url}</a>
              </div>
              <div class="flex items-center gap-2">
                ${expired ? '<span class="rounded-full bg-rose-500/10 px-2 py-0.5 text-[11px] font-medium text-rose-600 dark:text-rose-300">Expired</span>' : ''}
                <button data-copy="${url}" class="btn-copy rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-white/10" title="Copy link"><i data-lucide="copy" class="h-4 w-4"></i></button>
                <button data-open="${url}" class="btn-open rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-white/10" title="Open"><i data-lucide="external-link" class="h-4 w-4"></i></button>
                <button data-delete="${l.id}" class="btn-delete rounded-xl p-2 hover:bg-slate-100 text-rose-600 dark:hover:bg-white/10 dark:text-rose-400" title="Delete"><i data-lucide="trash-2" class="h-4 w-4"></i></button>
              </div>
            </div>
            <div class="mt-4 flex items-center justify-between text-sm">
              <div class="text-slate-500 dark:text-slate-400">Payments: <span class="font-medium text-slate-700 dark:text-slate-200">${l.payments || 0}</span></div>
              <div class="font-semibold">${collected}</div>
            </div>
          </div>
        `;
      }

      function bindLinkCardEvents() {
        qsa('.btn-copy').forEach(b => b.addEventListener('click', async (e) => {
          const url = e.currentTarget.getAttribute('data-copy');
          try { await navigator.clipboard.writeText(url); toast('Link copied', 'success'); } catch { toast('Copy failed', 'error'); }
        }));
        qsa('.btn-open').forEach(b => b.addEventListener('click', (e) => {
          const url = e.currentTarget.getAttribute('data-open');
          window.open(url, '_blank');
        }));
        qsa('.btn-delete').forEach(b => b.addEventListener('click', async (e) => {
          const id = e.currentTarget.getAttribute('data-delete');
          if (!confirm('Delete this link?')) return;
          try { await api.linkDelete(id); toast('Link deleted', 'success'); await Promise.all([loadLinksSidebar(), loadLinksPage()]); } catch { toast('Delete failed', 'error'); }
        }));
      }

      // Analytics & Charts
      function ensureChart(id, config) {
        const ctx = document.getElementById(id)?.getContext('2d');
        if (!ctx) return null;
        if (charts[id]) {
          charts[id].data = config.data;
          charts[id].options = config.options || charts[id].options;
          charts[id].update();
          return charts[id];
        }
        charts[id] = new Chart(ctx, config);
        return charts[id];
      }

      async function loadAnalytics() {
        try {
          const data = await api.analytics();
          const labels = data?.series?.labels || Array.from({ length: 12 }, (_, i) => `W${i + 1}`);
          const collected = data?.series?.collected || labels.map(() => Math.round(Math.random() * 500) + 50);
          const conv = data?.series?.conversion || labels.map(() => Math.random() * 0.2 + 0.05);
          const methods = data?.series?.methods || { Card: 55, Bank: 25, Wallet: 15, Other: 5 };

          ensureChart('chart-total-collected', {
            type: 'line',
            data: {
              labels,
              datasets: [{
                label: 'Collected',
                data: collected,
                borderWidth: 2,
                tension: 0.35,
                borderColor: 'rgb(139,92,246)',
                backgroundColor: 'rgba(139,92,246,0.15)',
                fill: true,
                pointRadius: 2
              }]
            },
            options: {
              plugins: { legend: { display: false } },
              scales: {
                x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
                y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148,163,184,.2)' } }
              }
            }
          });

          ensureChart('chart-conversion', {
            type: 'bar',
            data: {
              labels,
              datasets: [{
                label: 'Conversion',
                data: conv.map(v => +(v * 100).toFixed(2)),
                backgroundColor: 'rgba(236,72,153,0.5)',
                borderColor: 'rgb(236,72,153)',
                borderWidth: 1,
                borderRadius: 6
              }]
            },
            options: {
              plugins: { legend: { display: false } },
              scales: {
                x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
                y: { ticks: { color: '#94a3b8', callback: v => v + '%' }, grid: { color: 'rgba(148,163,184,.2)' }, suggestedMax: 20 }
              }
            }
          });

          const methodLabels = Object.keys(methods);
          const methodVals = Object.values(methods);
          ensureChart('chart-methods', {
            type: 'doughnut',
            data: {
              labels: methodLabels,
              datasets: [{
                data: methodVals,
                backgroundColor: ['#8b5cf6','#ec4899','#06b6d4','#f59e0b'],
                borderWidth: 0
              }]
            },
            options: { plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8' } } }, cutout: '60%' }
          });
        } catch (e) {
          console.error(e);
          toast('Failed to load analytics', 'error');
        }
      }

      // Accounts
      async function loadAccounts() {
        try {
          const res = await api.accountsList();
          const list = Array.isArray(res) ? res : (res?.items || []);
          const wrap = qs('#accounts-list');
          wrap.innerHTML = list.map(acc => `
            <div class="flex items-center justify-between rounded-xl border border-slate-200 bg-white/70 p-3 dark:border-white/10 dark:bg-white/5">
              <div>
                <div class="text-sm font-medium">${acc.name}</div>
                <div class="text-xs text-slate-500 dark:text-slate-400">${acc.code}</div>
              </div>
              <button data-del="${acc.code}" class="acc-del inline-flex items-center gap-1 rounded-xl px-3 py-1 text-sm text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-500/10">
                <i data-lucide="trash-2" class="h-4 w-4"></i> Remove
              </button>
            </div>
          `).join('') || `<div class="text-sm text-slate-500">No accounts added.</div>`;
          if (window.lucide) lucide.createIcons();
          // Cashout select
          const sel = qs('#cashout-account');
          if (sel) {
            sel.innerHTML = list.map(a => `<option value="${a.code}">${a.name}</option>`).join('');
          }
          // Bind deletes
          qsa('.acc-del').forEach(btn => btn.addEventListener('click', async (e) => {
            const code = e.currentTarget.getAttribute('data-del');
            if (!confirm('Remove this account?')) return;
            try { await api.accountDelete(code); toast('Account removed', 'success'); await loadAccounts(); } catch { toast('Failed to remove', 'error'); }
          }));
        } catch (e) {
          console.error(e);
        }
      }

      // Create Link Wizard
      let CREATE_STATE = { desc: '', amount: '', expiry: '', path: '', images: [], imageUrls: [] };
      function stepTo(n) {
        [1,2,3,4].forEach(i => {
          qs('#create-step-' + i).classList.toggle('hidden', i !== n);
          qs('#stepbar-' + i).className = 'h-2 rounded-full ' + (i <= n ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500' : 'bg-slate-200 dark:bg-white/10');
        });
      }
      function bindCreateWizard() {
        qsa('.btn-next').forEach(b => b.addEventListener('click', () => {
          const to = +b.getAttribute('data-to');
          if (to === 2) {
            CREATE_STATE.desc = qs('#cl-desc').value.trim();
            CREATE_STATE.amount = parseFloat(qs('#cl-amount').value || '0') || 0;
            CREATE_STATE.expiry = qs('#cl-expiry').value || '';
            if (!CREATE_STATE.desc) { toast('Please add a description', 'error'); return; }
          }
          if (to === 4) {
            // Build preview
            const prev = qs('#cl-preview');
            const expiryText = CREATE_STATE.expiry ? `${CREATE_STATE.expiry} days` : 'No expiry';
            const pathTxt = CREATE_STATE.path || '(not set)';
            prev.innerHTML = `
              <div><span class="text-slate-500">Description:</span> <span class="font-medium">${CREATE_STATE.desc}</span></div>
              <div><span class="text-slate-500">Amount:</span> <span class="font-medium">${fmtCurrency(CREATE_STATE.amount)}</span></div>
              <div><span class="text-slate-500">Expiry:</span> <span class="font-medium">${expiryText}</span></div>
              <div><span class="text-slate-500">Path:</span> <span class="font-medium">ndow.link/${pathTxt}</span></div>
              <div class="pt-2"><span class="text-slate-500">Images:</span>
                <div class="mt-2 grid grid-cols-4 gap-2">
                  ${CREATE_STATE.imageUrls.map(u => `<img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="h-16 w-full rounded-lg object-cover" alt="upload">`).join('')}
                </div>
              </div>
            `;
          }
          stepTo(to);
        }));
        qsa('.btn-prev').forEach(b => b.addEventListener('click', () => {
          const to = +b.getAttribute('data-to');
          stepTo(to);
        }));
        // Path validation
        qs('#btn-validate-path')?.addEventListener('click', async () => {
          const path = (qs('#cl-path').value || '').trim();
          if (!/^[a-zA-Z0-9\-]{3,40}$/.test(path)) { toast('Invalid path', 'error'); return; }
          try {
            const res = await api.validatePath(path);
            if (res?.available === false) { toast('Path taken', 'error'); return; }
            CREATE_STATE.path = path;
            qs('#cl-path-status').textContent = 'Looks good! ' + 'ndow.link/' + path;
            qs('#cl-path-status').className = 'text-sm text-emerald-600';
            toast('Path available', 'success');
          } catch (e) {
            toast('Validation failed', 'error');
          }
        });
        // Images
        const imgInput = qs('#cl-images');
        const imgPrev = qs('#cl-images-preview');
        imgInput?.addEventListener('change', async (e) => {
          const files = e.target.files || [];
          CREATE_STATE.images = files;
          imgPrev.innerHTML = '';
          [...files].forEach(f => {
            const url = URL.createObjectURL(f);
            imgPrev.insertAdjacentHTML('beforeend', `<img src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" class="h-24 w-full rounded-xl object-cover" alt="preview">`);
          });
          if (files.length) {
            try {
              const uploaded = await api.uploadLinkImages(files);
              CREATE_STATE.imageUrls = uploaded?.urls || [];
              toast('Images uploaded', 'success');
            } catch {
              toast('Image upload failed', 'error');
            }
          }
        });
        // Submit
        qs('#btn-create-submit')?.addEventListener('click', async () => {
          if (!CREATE_STATE.path) { toast('Please validate a custom path', 'error'); stepTo(2); return; }
          try {
            const payload = {
              description: CREATE_STATE.desc,
              amount: CREATE_STATE.amount,
              expiresInDays: CREATE_STATE.expiry || null,
              path: CREATE_STATE.path,
              images: CREATE_STATE.imageUrls
            };
            await api.createLink(payload);
            toast('Link created!', 'success');
            window.location.hash = '#/links';
            await Promise.all([loadLinksSidebar(), loadLinksPage()]);
          } catch (e) {
            console.error(e);
            toast('Failed to create link', 'error');
          }
        });
      }

      // Routing controller
      function setActiveLinks(hash) {
        qsa('.link-nav').forEach(a => {
          const active = a.getAttribute('href') === hash;
          a.classList.toggle('text-slate-900', active);
          a.classList.toggle('dark:text-white', active);
        });
        qsa('#mobile-nav .mobile-link').forEach(a => {
          const active = a.getAttribute('href') === hash;
          a.classList.toggle('bg-white', active && !document.documentElement.classList.contains('dark'));
          a.classList.toggle('dark:bg-white/10', active && document.documentElement.classList.contains('dark'));
        });
      }

      async function handleRoute(force=false) {
        let hash = window.location.hash || '#/';
        setActiveLinks(hash);
        const authed = !!CURRENT_USER;
        // Guard
        if (protectedRoutes.includes(hash) && !authed) {
          showSection('home');
          openAuthModal();
          return;
        }
        // Page switching and data
        switch (hash) {
          case '#/':
          case '#/product':
          case '#/help':
          case '#/terms':
          case '#/privacy':
          case '#/faqs':
          case '#/start':
            showSection('home');
            break;
          case '#/dashboard':
            showSection('dashboard');
            if (force) { TX_PAGE = 1; }
            await loadDashboard();
            break;
          case '#/links':
            showSection('links');
            await Promise.all([loadLinksSidebar(), loadLinksPage()]);
            break;
          case '#/analytics':
            showSection('analytics');
            await loadAnalytics();
            break;
          case '#/settings':
            showSection('settings');
            await Promise.all([loadAccounts()]);
            break;
          case '#/create':
            showSection('create');
            break;
          default:
            window.location.hash = '#/';
            break;
        }
      }
      window.addEventListener('hashchange', () => handleRoute());

      // Modals
      const authModal = qs('#auth-modal');
      const cashoutModal = qs('#cashout-modal');
      function openAuthModal() { authModal?.classList.remove('hidden'); authModal?.classList.add('flex'); }
      function closeAuthModal() { authModal?.classList.add('hidden'); authModal?.classList.remove('flex'); }
      function openCashoutModal() { cashoutModal?.classList.remove('hidden'); cashoutModal?.classList.add('flex'); }
      function closeCashoutModal() { cashoutModal?.classList.add('hidden'); cashoutModal?.classList.remove('flex'); }

      // Auth handlers (Firebase)
      async function refreshIdToken(user) {
        try {
          const token = await user.getIdToken(/* forceRefresh */ true);
          ID_TOKEN = token;
          return token;
        } catch (e) {
          console.error('Token error', e);
          ID_TOKEN = null;
          return null;
        }
      }

      // Listen for magic link completion
      (async function handleEmailLinkSignIn() {
        try {
          if (auth.isSignInWithEmailLink(window.location.href)) {
            let email = window.localStorage.getItem('endow_email_for_signin');
            if (!email) {
              email = window.prompt('Please confirm your email for sign-in');
            }
            const result = await auth.signInWithEmailLink(email, window.location.href);
            window.localStorage.removeItem('endow_email_for_signin');
            toast('Signed in', 'success');
            // Clean URL
            history.replaceState(null, '', window.location.pathname + '#/dashboard');
          }
        } catch (e) {
          console.warn('Email link sign-in failed', e);
        }
      })();

      auth.onIdTokenChanged(async (user) => {
        if (user) {
          await refreshIdToken(user);
        }
      });

      auth.onAuthStateChanged(async (user) => {
        CURRENT_USER = user || null;
        setAuthedUI(!!user);
        if (user) {
          updateUserUI(user);
          await refreshIdToken(user);
          if (['#/', '', '#/start'].includes(window.location.hash)) {
            window.location.hash = '#/dashboard';
          } else {
            handleRoute(true);
          }
        } else {
          ID_TOKEN = null;
          if (protectedRoutes.includes(window.location.hash)) {
            window.location.hash = '#/';
          } else {
            handleRoute(true);
          }
        }
      });

      // Event bindings
      // Open/close auth
      qs('#btn-login-modal')?.addEventListener('click', openAuthModal);
      qs('#auth-close')?.addEventListener('click', closeAuthModal);

      // Google sign-in (popup)
      qs('#btn-google')?.addEventListener('click', async () => {
        try {
          const provider = new firebase.auth.GoogleAuthProvider();
          await auth.signInWithPopup(provider);
          closeAuthModal();
          toast('Signed in', 'success');
        } catch (e) {
          console.error(e);
          toast('Google sign-in failed', 'error');
        }
      });

      // Magic link form
      qs('#magic-form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = qs('#magic-email').value.trim();
        if (!email) return;
        try {
          const actionCodeSettings = {
            url: window.location.origin + window.location.pathname + '#/dashboard',
            handleCodeInApp: true
          };
          await auth.sendSignInLinkToEmail(email, actionCodeSettings);
          window.localStorage.setItem('endow_email_for_signin', email);
          toast('Magic link sent to ' + email, 'success');
        } catch (err) {
          console.error(err);
          toast('Failed to send magic link', 'error');
        }
      });

      // Logout
      async function doLogout() {
        try {
          await api.logout().catch(() => {});
        } catch (_) {}
        await auth.signOut().catch(() => {});
        toast('Logged out', 'success');
      }
      qs('#btn-logout')?.addEventListener('click', doLogout);
      qs('#settings-logout')?.addEventListener('click', doLogout);

      // Hero form -> Create link wizard path
      qs('#hero-create-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const path = qs('#hero-path').value.trim();
        if (CURRENT_USER) {
          window.location.hash = '#/create';
          setTimeout(() => {
            qs('#cl-path').value = path;
            CREATE_STATE.path = '';
            stepTo(2);
          }, 50);
        } else {
          openAuthModal();
          toast('Sign in to create your link', 'info');
        }
      });

      // Create link entry points
      const goCreate = () => { window.location.hash = '#/create'; stepTo(1); };
      qs('#btn-create-link')?.addEventListener('click', goCreate);
      qs('#btn-create-link-side')?.addEventListener('click', goCreate);
      qs('#btn-create-link-top')?.addEventListener('click', goCreate);

      // Transactions controls
      qs('#tx-refresh')?.addEventListener('click', () => loadTransactions(true));
      qs('#tx-load-more')?.addEventListener('click', () => loadTransactions(false));

      // Analytics refresh
      qs('#btn-analytics-refresh')?.addEventListener('click', loadAnalytics);

      // Cashout
      qs('#btn-cashout')?.addEventListener('click', async () => { await loadAccounts(); openCashoutModal(); });
      qs('#cashout-close')?.addEventListener('click', closeCashoutModal);
      qs('#cashout-form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const code = qs('#cashout-account').value;
        const amt = parseFloat(qs('#cashout-amount').value || '0');
        if (!code || !amt || amt <= 0) { toast('Enter amount and account', 'error'); return; }
        try {
          await api.cashoutCreate({ accountCode: code, amount: amt });
          toast('Cashout requested', 'success');
          closeCashoutModal();
          await loadSummary();
        } catch (err) {
          console.error(err);
          toast('Cashout failed', 'error');
        }
      });

      // Accounts add
      qs('#account-form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = qs('#account-name').value.trim();
        const code = qs('#account-code').value.trim();
        if (!name || !code) { toast('Enter account name and code', 'error'); return; }
        try {
          await api.accountAdd({ name, code });
          qs('#account-name').value = '';
          qs('#account-code').value = '';
          toast('Account added', 'success');
          await loadAccounts();
        } catch {
          toast('Failed to add account', 'error');
        }
      });

      // Profile photo
      qs('#profile-photo-input')?.addEventListener('change', async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        try {
          const res = await api.profileUpload(file);
          if (res?.url) {
            qs('#settings-avatar').src = res.url;
            qs('#avatar-img').src = res.url;
            await auth.currentUser?.updateProfile({ photoURL: res.url }).catch(()=>{});
            toast('Profile photo updated', 'success');
          } else {
            throw new Error('No URL');
          }
        } catch (err) {
          console.error(err);
          toast('Photo upload failed', 'error');
        }
      });

      // Profile form
      qs('#profile-form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = qs('#profile-name').value.trim();
        try {
          await api.userUpdate({ name });
          await auth.currentUser?.updateProfile({ displayName: name }).catch(()=>{});
          toast('Profile updated', 'success');
        } catch {
          toast('Failed to update profile', 'error');
        }
      });

      // Create wizard binds
      bindCreateWizard();

      // Avatar button -> Settings
      qs('#btn-avatar')?.addEventListener('click', () => { window.location.hash = '#/settings'; });

      // Init
      (async function init() {
        // First route render (auth listener will re-run)
        handleRoute(true);
      })();
    
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-violet-50 via-fuchsia-50 to-white dark:from-[#0b0b10] dark:via-[#0b0b10] dark:to-[#0b0b10]"></div>
<div className="absolute inset-0 opacity-70 dark:opacity-40" style={{background: 'radial-gradient(600px 400px at 20% 20%, rgba(var(--grad-from),0.18), transparent 60%), radial-gradient(700px 500px at 80% 30%, rgba(var(--grad-to),0.22), transparent 60%)'}}></div>
</div>

<div className="flex min-h-full flex-col" id="app">

<header className="sticky top-0 z-40">
<div className="glass mx-auto w-full border-b border-slate-200/60 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/5">
<div className="mx-auto max-w-7xl flex items-center justify-between gap-4">

<a className="flex items-center gap-2" href="#/">
</a><a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dd4a7b63-4a8b-4141-932b-861a0026a942_320w.png)] bg-cover rounded" href="#"></a>

<nav className="hidden md:flex items-center gap-6 text-sm" id="nav-public">
<a className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium font-montserrat" href="#/" style={{}}>Home</a>
<a className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium font-montserrat" href="#/product" style={{}}>Product</a>
<a className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium font-montserrat" href="#/help" style={{}}>Help Center</a>
</nav>

<nav className="hidden md:flex items-center gap-6 text-sm" id="nav-authed">
<a className="link-nav font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-montserrat" data-link="dashboard" href="#/dashboard" style={{}}>Dashboard</a>
<a className="link-nav font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-montserrat" data-link="links" href="#/links" style={{}}>Links</a>
<a className="link-nav font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-montserrat" data-link="analytics" href="#/analytics" style={{}}>Analytics</a>
<a className="link-nav font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-montserrat" data-link="settings" href="#/settings" style={{}}>Settings</a>
</nav>

<div className="flex items-center gap-2">
<button className="inline-flex h-9 items-center gap-2 rounded-xl px-3.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10" id="theme-toggle">
<i className="h-4 w-4" data-lucide="moon-star"></i>
<span className="hidden sm:inline font-montserrat" style={{}}>Theme</span>
</button>
<div className="hidden items-center gap-2" id="actions-public">
<button className="inline-flex h-9 items-center rounded-xl px-4 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10 font-montserrat" id="btn-login-modal" style={{}}>Log in</button>
<a className="inline-flex h-9 items-center rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 text-sm font-semibold tracking-tight text-white shadow-sm hover:brightness-110 font-montserrat" href="#/start" style={{}}>Try for Free</a>
</div>
<div className="hidden items-center gap-2" id="actions-authed">
<button className="hidden md:inline-flex h-9 items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 text-sm font-semibold tracking-tight text-white shadow-sm hover:brightness-110 font-montserrat" id="btn-create-link" style={{}}>
<i className="h-4 w-4" data-lucide="plus"></i>
                  Create Link
                </button>
<button className="inline-flex h-9 items-center rounded-xl px-4 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10 font-montserrat" id="btn-logout" style={{}}>Log out</button>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden" id="btn-avatar">
<img alt="avatar" className="h-9 w-9 object-cover" id="avatar-img" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</button>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1">

<section className="page-route" id="page-home">
<div className="mx-auto max-w-7xl px-4">
<div className="flex min-h-[70vh] relative items-center justify-center">
<div className="mx-auto w-full max-w-2xl text-center">
<p className="mb-4 text-sm font-medium text-slate-500 dark:text-slate-400 font-montserrat" style={{}}>Simple • Fast •
          Secure</p>
<h1 className="mb-4 text-5xl md:text-6xl font-semibold tracking-tight">
<span className="dark:text-white font-semibold text-slate-900 font-poppins" style={{}}>Create.</span>
<span className="dark:text-white font-semibold text-slate-900 font-poppins" style={{}}> Share.</span>
<span className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 font-poppins" style={{}}> Receive.</span>
</h1>
<p className="dark:text-slate-300 text-base text-slate-600 font-montserrat max-w-xl mr-auto mb-8 ml-auto pr-auto pl-auto">
          Craft a personalized link, share it anywhere, and collect contributions instantly.</p>

<form className="flex shadow-violet-500/5 dark:border-white/10 dark:bg-white/5 bg-white w-full max-w-xl border-slate-200 border rounded-3xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 shadow-lg items-center" id="hero-create-form">
<div className="flex dark:text-slate-300 font-montserrat rounded-xl pt-2 pr-0 pb-2 pl-3 gap-x-2 gap-y-2 items-center">
            ndow.link/</div>
<input className="flex-1 placeholder:text-slate-400 focus:outline-none dark:text-white text-slate-900 bg-transparent pt-2 pr-2 pb-2 pl-1" id="hero-path" maxlength="40" minlength="3" pattern="[a-zA-Z0-9\-]+" placeholder="your-campaign" required=""/>
<button className="inline-flex hover:brightness-110 text-lg font-semibold text-white bg-violet-500 rounded-full pt-4 pr-8 pb-4 pl-8 shadow gap-x-2 gap-y-2 items-center font-montserrat" style={{}} type="submit">Create</button>
</form>

<div className="mt-6 flex items-center justify-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-montserrat" style={{}}>
<i className="h-4 w-4" data-lucide="lock"></i>
          No setup fees. Cancel anytime.
        </div>
</div>
</div>
</div>

<footer className="w-full max-w-7xl mt-8 mr-auto ml-auto pr-4 pb-10 pl-4">
<div className="relative overflow-hidden ring-1 ring-white/10 text-white bg-zinc-950 rounded-3xl mb-8">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10"></div>
<div className="sm:px-10 lg:px-14 lg:py-16 font-montserrat pt-12 pr-6 pb-12 pl-6 relative">

<div className="flex flex-col lg:flex-row gap-10 gap-x-10 gap-y-10 items-start justify-between">
<div className="max-w-md">
<a className="inline-flex items-center gap-3" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center ring-1 ring-white/10 text-zinc-900 bg-white rounded-full shadow-sm">
<svg className="lucide lucide-circle h-4 w-4" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<span className="text-base font-medium tracking-tight font-geist">Endow</span>
</a>
<p className="mt-4 text-sm text-white/70 leading-relaxed font-geist">
        We design brands and products that move people to act. Strategy, systems, and craft—delivered with
        clarity.
      </p>
<form className="flex gap-2 mt-6 gap-x-2 gap-y-2 items-center" id="nl-form">
<div className="flex-1">
<label className="sr-only" htmlFor="nl-email">Email</label>
<input className="w-full rounded-full bg-white/5 text-white placeholder-white/50 px-4 py-3 text-sm ring-1 ring-white/10 focus:ring-2 focus:ring-white/30 outline-none" id="nl-email" placeholder="Your email" required="" type="email"/>
</div>
<button className="inline-flex gap-2 hover:bg-zinc-100 transition text-sm text-zinc-900 font-geist bg-white ring-white/10 ring-1 rounded-full pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 items-center" type="submit">Contact Us</button>
</form>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 w-full lg:w-auto">
<div className="">
<p className="text-sm font-medium text-white/80 tracking-tight font-geist">Resources</p>
<ul className="mt-3 space-y-2 text-sm text-white/60 font-geist">
<li className=""><a className="hover:text-white" href="#">Newsletter</a></li>
<li className=""><a className="hover:text-white" href="#">Playbook</a></li>
<li className=""><a className="hover:text-white" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>

<div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/60 font-geist">© 2025 Endow. All rights reserved.</p>
<div className="flex items-center gap-2">
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10" href="#">
<svg className="lucide lucide-instagram h-4 w-4 text-white/80" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10" href="#">
<svg className="lucide lucide-twitter h-4 w-4 text-white/80" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10" href="#">
<svg className="lucide lucide-linkedin h-4 w-4 text-white/80" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle className="" cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</div>
</div>
</footer>
</section>

<section className="page-route hidden" id="page-dashboard">
<div className="mx-auto max-w-7xl px-4 py-8">

<div className="mb-6 hidden items-center justify-center gap-6 md:flex">
<a className="tab-link text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-montserrat" href="#/dashboard" style={{}}>Dashboard</a>
<a className="tab-link text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-montserrat" href="#/links" style={{}}>Links</a>
<a className="tab-link text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-montserrat" href="#/analytics" style={{}}>Analytics</a>
<a className="tab-link text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-montserrat" href="#/settings" style={{}}>Settings</a>
</div>

<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="col-span-1 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
<div className="mb-3 flex items-center justify-between">
<span className="text-sm font-medium text-slate-600 dark:text-slate-300 font-montserrat" style={{}}>Available Balance</span>
<i className="h-5 w-5 text-violet-500" data-lucide="wallet"></i>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-4xl tracking-tight font-semibold font-poppins" id="summary-balance" style={{}}>$0.00</div>
<p className="mt-2 text-xs text-slate-500 font-montserrat" id="summary-updated" style={{}}>—</p>
</div>
<button className="inline-flex h-10 items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 text-sm font-semibold tracking-tight text-white shadow hover:brightness-110 font-montserrat" id="btn-cashout" style={{}}>
<i className="h-4 w-4" data-lucide="arrow-down-circle"></i>
                    Cash Out
                  </button>
</div>
</div>
<div className="col-span-1 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
<div className="mb-2 flex items-center justify-between">
<span className="text-sm font-medium text-slate-600 dark:text-slate-300 font-montserrat" style={{}}>Collected (30d)</span>
<i className="h-5 w-5 text-violet-500" data-lucide="trending-up"></i>
</div>
<div className="text-3xl tracking-tight font-semibold font-poppins" id="summary-collected" style={{}}>$0.00</div>
<p className="mt-2 text-xs text-slate-500 font-montserrat" id="summary-collected-sub" style={{}}>—</p>
</div>
<div className="col-span-1 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
<div className="mb-2 flex items-center justify-between">
<span className="text-sm font-medium text-slate-600 dark:text-slate-300 font-montserrat" style={{}}>Conversion Rate</span>
<i className="h-5 w-5 text-violet-500" data-lucide="sparkles"></i>
</div>
<div className="text-3xl tracking-tight font-semibold font-poppins" id="summary-conv" style={{}}>0%</div>
<p className="mt-2 text-xs text-slate-500 font-montserrat" id="summary-conv-sub" style={{}}>—</p>
</div>
</div>

<div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

<div className="col-span-2 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
<div className="mb-4 flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight font-montserrat" style={{}}>Transactions</h3>
<div className="flex items-center gap-2">
<button className="inline-flex h-9 items-center gap-2 rounded-xl px-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10 font-montserrat" id="tx-refresh" style={{}}>
<i className="h-4 w-4" data-lucide="refresh-ccw"></i> Refresh
                    </button>
</div>
</div>
<div className="divide-y divide-slate-200 dark:divide-white/10" id="tx-list">

</div>
<div className="mt-4 flex justify-center">
<button className="inline-flex h-9 items-center gap-2 rounded-xl px-4 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10 font-montserrat" id="tx-load-more" style={{}}>
<i className="h-4 w-4" data-lucide="chevron-down"></i> Load more
                  </button>
</div>
</div>

<div className="col-span-1 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
<div className="mb-4 flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight font-montserrat" style={{}}>Payment Links</h3>
<button className="inline-flex h-9 items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 text-sm font-semibold tracking-tight text-white shadow hover:brightness-110 font-montserrat" id="btn-create-link-side" style={{}}>
<i className="h-4 w-4" data-lucide="plus"></i>
                    New
                  </button>
</div>
<div className="space-y-3" id="links-list">

</div>
<div className="mt-4 flex justify-center">
<a className="text-sm font-medium text-violet-600 hover:underline dark:text-violet-400 font-montserrat" href="#/links" style={{}}>View all</a>
</div>
</div>
</div>
</div>
</section>

<section className="page-route hidden" id="page-links">
<div className="mx-auto max-w-7xl px-4 py-8">
<div className="mb-6 flex items-center justify-between">
<h2 className="text-2xl tracking-tight font-semibold font-poppins" style={{}}>Your Links</h2>
<button className="inline-flex h-10 items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 text-sm font-semibold tracking-tight text-white shadow hover:brightness-110 font-montserrat" id="btn-create-link-top" style={{}}>
<i className="h-4 w-4" data-lucide="link"></i>Create Link
              </button>
</div>
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" id="links-grid">

</div>
</div>
</section>

<section className="page-route hidden" id="page-analytics">
<div className="mx-auto max-w-7xl px-4 py-8">
<div className="mb-6 flex items-center justify-between">
<h2 className="text-2xl tracking-tight font-semibold font-poppins" style={{}}>Analytics</h2>
<button className="inline-flex h-9 items-center gap-2 rounded-xl px-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10 font-montserrat" id="btn-analytics-refresh" style={{}}>
<i className="h-4 w-4" data-lucide="refresh-ccw"></i> Refresh
              </button>
</div>
<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

<div className="col-span-1 rounded-3xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5">
<h3 className="text-lg font-semibold tracking-tight font-montserrat" style={{}}>Total Collected</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 font-montserrat" style={{}}>Last 30 days</p>
<div className="mt-4">
<div className="rounded-2xl border border-slate-200 p-3 dark:border-white/10">
<div className="relative">
<div>
<canvas height="120" id="chart-total-collected"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 rounded-3xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5">
<h3 className="text-lg font-semibold tracking-tight font-montserrat" style={{}}>Conversion Rate</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 font-montserrat" style={{}}>Visitors → Payments</p>
<div className="mt-4">
<div className="rounded-2xl border border-slate-200 p-3 dark:border-white/10">
<div className="relative">
<div>
<canvas height="120" id="chart-conversion"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 rounded-3xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5">
<h3 className="text-lg font-semibold tracking-tight font-montserrat" style={{}}>Popular Payment Methods</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 font-montserrat" style={{}}>Distribution</p>
<div className="mt-4">
<div className="rounded-2xl border border-s-200 p-3 dark:border-white/10">
<div className="relative">
<div>
<canvas height="120" id="chart-methods"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-route hidden" id="page-settings">
<div className="mx-auto max-w-7xl px-4 py-8">
<h2 className="mb-6 text-2xl tracking-tight font-semibold font-poppins" style={{}}>Settings</h2>
<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

<div className="col-span-1 rounded-3xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5">
<h3 className="text-lg font-semibold tracking-tight font-montserrat" style={{}}>Profile</h3>
<div className="mt-4 flex items-center gap-4">
<img className="h-14 w-14 rounded-full object-cover" id="settings-avatar" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<label className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15 font-montserrat" style={{}}>
<i className="h-4 w-4" data-lucide="upload"></i>
                      Upload
                      <input accept="image/*" className="hidden" id="profile-photo-input" type="file"/>
</label>
</div>
</div>
<form className="mt-4 space-y-3" id="profile-form">
<div>
<label className="mb-1 block text-sm font-medium text-slate-600 dark:text-slate-300 font-montserrat" style={{}}>Full Name</label>
<input className="w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white" id="profile-name" placeholder="Your name"/>
</div>
<div>
<label className="mb-1 block text-sm font-medium text-slate-600 dark:text-slate-300 font-montserrat" style={{}}>Email</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-900 dark:border-white/10 dark:bg-white/10 dark:text-white" disabled="" id="profile-email"/>
</div>
<button className="inline-flex h-10 items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 text-sm font-semibold tracking-tight text-white shadow hover:brightness-110 font-montserrat" style={{}} type="submit">
<i className="h-4 w-4" data-lucide="save"></i>
                    Save Changes
                  </button>
</form>
</div>

<div className="col-span-1 rounded-3xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5">
<h3 className="text-lg font-semibold tracking-tight font-montserrat" style={{}}>Transfer Accounts</h3>
<div className="mt-3 space-y-3" id="accounts-list">

</div>
<form className="mt-4 grid grid-cols-1 gap-3" id="account-form">
<input className="w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm focus:outline-none dark:border-white/10 dark:bg-white/5" id="account-name" placeholder="Account name (e.g., Bank ****1234)"/>
<input className="w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm focus:outline-none dark:border-white/10 dark:bg-white/5" id="account-code" placeholder="Account code / ID"/>
<button className="inline-flex h-9 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-semibold tracking-tight text-white hover:brightness-110 dark:bg-white dark:text-slate-900 font-montserrat" style={{}}>
<i className="h-4 w-4" data-lucide="plus"></i>
                    Add Account
                  </button>
</form>
</div>

<div className="col-span-1 rounded-3xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5">
<h3 className="text-lg font-semibold tracking-tight font-montserrat" style={{}}>Security</h3>
<div className="mt-4 space-y-3 text-sm">
<div className="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-white/10">
<div>
<div className="font-medium font-montserrat" style={{}}>Session</div>
<div className="text-slate-500 dark:text-slate-400 font-montserrat" id="session-email" style={{}}>—</div>
</div>
<button className="inline-flex h-9 items-center gap-2 rounded-xl px-3 font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10 font-montserrat" id="settings-logout" style={{}}>
<i className="h-4 w-4" data-lucide="log-out"></i>
                      Log out
                    </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-route hidden" id="page-create">
<div className="mx-auto max-w-3xl px-4 py-8">
<div className="mb-6 flex items-center justify-between">
<h2 className="text-2xl tracking-tight font-semibold font-poppins" style={{}}>Create Payment Link</h2>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-montserrat" href="#/links" style={{}}>Cancel</a>
</div>
<div className="rounded-3xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5">
<div className="mb-6 grid grid-cols-4 gap-2">
<div className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" id="stepbar-1"></div>
<div className="h-2 rounded-full bg-slate-200 dark:bg-white/10" id="stepbar-2"></div>
<div className="h-2 rounded-full bg-slate-200 dark:bg-white/10" id="stepbar-3"></div>
<div className="h-2 rounded-full bg-slate-200 dark:bg-white/10" id="stepbar-4"></div>
</div>
<div className="space-y-4" id="create-step-1">
<h3 className="text-lg font-semibold tracking-tight font-montserrat" style={{}}>Details</h3>
<input className="w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 focus:outline-none dark:border-white/10 dark:bg-white/5" id="cl-desc" placeholder="Description (e.g., Meryem's farewell support)"/>
<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
<input className="w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 focus:outline-none dark:border-white/10 dark:bg-white/5" id="cl-amount" placeholder="Amount (e.g., 25.00)" step="0.01" type="number"/>
<select className="w-full rounded-xl border border-slate-200 bg-white/70 px-3 py-2 focus:outline-none dark:border-white/10 dark:bg-white/5" id="cl-expiry">
<option className="font-montserrat" style={{}} value="">No expiry</option>
<option className="font-montserrat" style={{}} value="7">Expires in 7 days</option>
<option className="font-montserrat" style={{}} value="30">Expires in 30 days</option>
<option className="font-montserrat" style={{}} value="90">Expires in 90 days</option>
</select>
</div>
<div className="flex justify-end">
<button className="btn-next inline-flex h-10 items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 text-sm font-semibold tracking-tight text-white hover:brightness-110 font-montserrat" data-to="2" style={{}}>
                    Next <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="hidden space-y-4" id="create-step-2">
<h3 className="text-lg font-semibold tracking-tight font-montserrat" style={{}}>Custom URL</h3>
<div className="flex items-center rounded-xl border border-slate-200 bg-white/70 p-1 dark:border-white/10 dark:bg-white/5">
<div className="rounded-lg bg-slate-100 px-3 py-2 text-slate-500 dark:bg-white/10 dark:text-slate-300 font-montserrat" style={{}}>ndow.link/</div>
<input className="flex-1 bg-transparent px-2 py-2 focus:outline-none" id="cl-path" placeholder="your-path"/>
<button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold tracking-tight text-white hover:brightness-110 dark:bg-white dark:text-slate-900 font-montserrat" id="btn-validate-path" style={{}}>
<i className="h-4 w-4" data-lucide="check"></i> Validate
                  </button>
</div>
<p className="text-sm text-slate-500 font-montserrat" id="cl-path-status" style={{}}>Enter a unique path (a–z, 0–9, -).</p>
<div className="flex items-center justify-between">
<button className="btn-prev inline-flex h-10 items-center gap-2 rounded-xl px-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10 font-montserrat" data-to="1" style={{}}>
<i className="h-4 w-4" data-lucide="arrow-left"></i> Back
                  </button>
<button className="btn-next inline-flex h-10 items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 text-sm font-semibold tracking-tight text-white hover:brightness-110 font-montserrat" data-to="3" style={{}}>
                    Next <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="hidden space-y-4" id="create-step-3">
<h3 className="text-lg font-semibold tracking-tight font-montserrat" style={{}}>Images (optional)</h3>
<input accept="image/*" className="w-full rounded-xl border border-dashed border-slate-300 px-3 py-8 text-center text-sm dark:border-white/15" id="cl-images" multiple="" type="file"/>
<div className="grid grid-cols-3 gap-3" id="cl-images-preview"></div>
<div className="flex items-center justify-between">
<button className="btn-prev inline-flex h-10 items-center gap-2 rounded-xl px-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10 font-montserrat" data-to="2" style={{}}>
<i className="h-4 w-4" data-lucide="arrow-left"></i> Back
                  </button>
<button className="btn-next inline-flex h-10 items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 text-sm font-semibold tracking-tight text-white hover:brightness-110 font-montserrat" data-to="4" style={{}}>
                    Next <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="hidden space-y-4" id="create-step-4">
<h3 className="text-lg font-semibold tracking-tight font-montserrat" style={{}}>Preview &amp; Confirm</h3>
<div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
<div className="space-y-2 text-sm" id="cl-preview"></div>
</div>
<div className="flex items-center justify-between">
<button className="btn-prev inline-flex h-10 items-center gap-2 rounded-xl px-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10 font-montserrat" data-to="3" style={{}}>
<i className="h-4 w-4" data-lucide="arrow-left"></i> Back
                  </button>
<button className="inline-flex h-10 items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 text-sm font-semibold tracking-tight text-white hover:brightness-110 font-montserrat" id="btn-create-submit" style={{}}>
<i className="h-4 w-4" data-lucide="sparkle"></i> Create Link
                  </button>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="fixed inset-x-0 bottom-3 z-40 mx-auto hidden max-w-md rounded-2xl border border-slate-200 bg-white/70 p-1.5 shadow-lg dark:border-white/10 dark:bg-white/10 glass md:hidden" id="mobile-nav">
<div className="grid grid-cols-4 gap-1">
<a className="mobile-link group flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs font-medium text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-white/10" href="#/dashboard">
<i className="h-5 w-5" data-lucide="layout-dashboard"></i>
<span className="font-montserrat" style={{}}>Dashboard</span>
</a>
<a className="mobile-link group flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs font-medium text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-white/10" href="#/links">
<i className="h-5 w-5" data-lucide="link"></i>
<span className="font-montserrat" style={{}}>Links</span>
</a>
<a className="mobile-link group flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs font-medium text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-white/10" href="#/analytics">
<i className="h-5 w-5" data-lucide="chart-line"></i>
<span className="font-montserrat" style={{}}>Analytics</span>
</a>
<a className="mobile-link group flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs font-medium text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-white/10" href="#/settings">
<i className="h-5 w-5" data-lucide="settings"></i>
<span className="font-montserrat" style={{}}>Settings</span>
</a>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center" id="auth-modal">
<div className="absolute inset-0 bg-black/40"></div>
<div className="relative mx-4 w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-[#0e0e14]">
<div className="mb-4 flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight font-montserrat" style={{}}>Welcome to Endow</h3>
<button className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-white/10" id="auth-close">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<p className="mb-4 text-sm text-slate-600 dark:text-slate-300 font-montserrat" style={{}}>Sign in to continue. No password required.</p>
<div className="space-y-3">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 font-montserrat" id="btn-google" style={{}}>
<i className="h-4 w-4" data-lucide="mail"></i> Continue with Google
          </button>
<div className="relative my-2 text-center text-xs text-slate-500 dark:text-slate-400">
<span className="bg-white px-2 dark:bg-[#0e0e14] font-montserrat" style={{}}>or</span>
<div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-1/2 bg-slate-200 dark:bg-white/10"></div>
</div>
<form className="space-y-2" id="magic-form">
<input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none dark:border-white/10 dark:bg-white/5" id="magic-email" placeholder="your@email.com" required="" type="email"/>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold tracking-tight text-white hover:brightness-110 dark:bg-white dark:text-slate-900 font-montserrat" style={{}}>
<i className="h-4 w-4" data-lucide="zap"></i> Send Magic Link
            </button>
</form>
</div>
<p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400 font-montserrat" style={{}}>By continuing you agree to our Terms &amp; Privacy.</p>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center" id="cashout-modal">
<div className="absolute inset-0 bg-black/40"></div>
<div className="relative mx-4 w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-[#0e0e14]">
<div className="mb-4 flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight font-montserrat" style={{}}>Cash Out</h3>
<button className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-white/10" id="cashout-close">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<form className="space-y-3" id="cashout-form">
<div>
<label className="mb-1 block text-sm font-medium text-slate-600 dark:text-slate-300 font-montserrat" style={{}}>Select Account</label>
<select className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none dark:border-white/10 dark:bg-white/5" id="cashout-account"></select>
</div>
<div>
<label className="mb-1 block text-sm font-medium text-slate-600 dark:text-slate-300 font-montserrat" style={{}}>Amount</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none dark:border-white/10 dark:bg-white/5" id="cashout-amount" placeholder="0.00" step="0.01" type="number"/>
</div>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold tracking-tight text-white hover:brightness-110 font-montserrat" style={{}}>
<i className="h-4 w-4" data-lucide="send"></i> Confirm Cash Out
          </button>
</form>
</div>
</div>

<div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex flex-col items-center gap-2" id="toast-wrap"></div>


<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
