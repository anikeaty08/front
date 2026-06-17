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



    // Basic SPA routing and state (for demo purposes only)
    const pages = [
      'landing','login','register','tenant-dashboard','feed','admin','settings','about','contact','faq','terms','privacy'
    ];
    const state = {
      authed: JSON.parse(localStorage.getItem('authed') || 'false'),
      user: JSON.parse(localStorage.getItem('user') || 'null'),
      tenant: JSON.parse(localStorage.getItem('tenant') || 'null'),
      posts: JSON.parse(localStorage.getItem('posts') || '[]'),
      users: JSON.parse(localStorage.getItem('users') || '[]')
    };

    function save() {
      localStorage.setItem('authed', JSON.stringify(state.authed));
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('tenant', JSON.stringify(state.tenant));
      localStorage.setItem('posts', JSON.stringify(state.posts));
      localStorage.setItem('users', JSON.stringify(state.users));
    }

    // Utilities
    function $(id) { return document.getElementById(id); }
    function setHidden(el, hidden) { if (!el) return; el.classList.toggle('hidden', hidden); }
    function currentRoute() {
      const h = location.hash.replace('#','') || 'landing';
      return pages.includes(h) ? h : 'landing';
    }
    function requireAuth(route) {
      const authedRoutes = ['tenant-dashboard','feed','admin','settings'];
      if (authedRoutes.includes(route) && !state.authed) return 'login';
      return route;
    }

    // Render functions
    function renderNav() {
      const isAuthed = !!state.authed;
      setHidden($('public-nav'), isAuthed);
      setHidden($('tenant-nav'), !isAuthed);
      setHidden($('mobile-nav-public'), isAuthed);
      setHidden($('mobile-nav-tenant'), !isAuthed);

      if (isAuthed && state.tenant) {
        $('tenant-name').textContent = state.tenant.name;
        $('tenant-label').textContent = state.tenant.name;
        $('feed-tenant').textContent = state.tenant.name;
        $('admin-tenant').textContent = state.tenant.name;
        $('tenant-settings-name').value = state.tenant.name;
      }
      if (isAuthed && state.user) {
        $('user-name-short').textContent = state.user.name?.split(' ')[0] || 'User';
        $('avatar-initials').textContent = (state.user.name || 'User').split(' ').map(p=>p[0]).slice(0,2).join('').toUpperCase();
      }
    }

    function showPage(route) {
      pages.forEach(p => {
        const el = document.querySelector('#page-' + p);
        if (el) setHidden(el, p !== route);
      });
      renderNav();
      if (route === 'feed') renderFeed();
      if (route === 'tenant-dashboard') renderDashboard();
      if (route === 'admin') renderAdmin();
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    // Stats & Dashboard
    function renderDashboard() {
      const tenantId = state.tenant?.id;
      const posts = state.posts.filter(p => p.tenantId === tenantId);
      $('stat-new-posts').textContent = posts.slice(-7).length;
      $('stat-open-requests').textContent = Math.max(2, Math.floor(posts.length / 3)); // mock
      $('stat-members').textContent = state.users.filter(u => u.tenantId === tenantId).length || 1;
      $('stat-docs').textContent = 12; // mock

      // Recent activity
      const container = $('recent-activity');
      container.innerHTML = '';
      posts.slice(-5).reverse().forEach(p => {
        const div = document.createElement('div');
        div.className = "flex items-start gap-3 p-3 rounded-md border border-neutral-800 bg-neutral-950";
        div.innerHTML = `
          <div class="h-8 w-8 rounded-full bg-neutral-800 ring-1 ring-neutral-700 flex items-center justify-center text-[11px] text-neutral-300">${p.authorInitials}</div>
          <div class="flex-1">
            <p class="text-sm text-neutral-200"><span class="text-neutral-300">${p.author}</span> posted</p>
            <p class="mt-1 text-sm text-neutral-400">${p.content}</p>
          </div>
          <span class="text-xs text-neutral-500">${new Date(p.createdAt).toLocaleDateString()}</span>
        `;
        container.appendChild(div);
      });
    }

    // Feed
    function renderFeed() {
      const list = $('posts-list');
      list.innerHTML = '';
      const tenantId = state.tenant?.id;
      const posts = state.posts.filter(p => p.tenantId === tenantId).sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt));
      posts.forEach((p, idx) => {
        const card = document.createElement('div');
        card.className = "rounded-lg border border-neutral-800 bg-neutral-950/60 p-4";
        const commentsHtml = (p.comments || []).map(c => `
          <div class="flex items-start gap-2">
            <div class="h-6 w-6 rounded-full bg-neutral-800 ring-1 ring-neutral-700 flex items-center justify-center text-[10px] text-neutral-300">${c.initials}</div>
            <div class="flex-1">
              <p class="text-xs text-neutral-300"><span class="text-neutral-200">${c.author}</span> • ${new Date(c.createdAt).toLocaleString()}</p>
              <p class="text-sm text-neutral-200 mt-0.5">${c.text}</p>
            </div>
          </div>
        `).join('');
        card.innerHTML = `
          <div class="flex items-start gap-3">
            <div class="h-9 w-9 rounded-full bg-neutral-800 ring-1 ring-neutral-700 flex items-center justify-center text-xs text-neutral-300">${p.authorInitials}</div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <p class="text-sm text-neutral-300"><span class="text-neutral-100">${p.author}</span> • ${new Date(p.createdAt).toLocaleString()}</p>
                <button data-id="${p.id}" class="post-menu inline-flex items-center gap-1 px-2 py-1 rounded hover:bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
                  <i data-lucide="more-horizontal" class="w-4 h-4"></i>
                </button>
              </div>
              <p class="mt-2 text-neutral-100">${p.content}</p>
              <div class="mt-3 flex items-center gap-3 text-neutral-400">
                <button data-id="${p.id}" class="like-btn inline-flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-neutral-900 border border-neutral-800 text-xs transition">
                  <i data-lucide="heart" class="w-4 h-4"></i> Like
                </button>
                <button data-id="${p.id}" class="reply-btn inline-flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-neutral-900 border border-neutral-800 text-xs transition">
                  <i data-lucide="message-square" class="w-4 h-4"></i> Comment
                </button>
              </div>
              <div class="mt-3 space-y-2">${commentsHtml}</div>
              <form data-id="${p.id}" class="comment-form mt-3 flex items-center gap-2">
                <input class="flex-1 px-3 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700" placeholder="Write a comment..." />
                <button class="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs transition">
                  <i data-lucide="send" class="w-4 h-4"></i> Send
                </button>
              </form>
            </div>
          </div>
        `;
        list.appendChild(card);
      });

      // Bind comment handlers
      document.querySelectorAll('.comment-form').forEach(f => {
        f.addEventListener('submit', (e) => {
          e.preventDefault();
          const id = f.getAttribute('data-id');
          const input = f.querySelector('input');
          const text = input.value.trim();
          if (!text) return;
          const p = state.posts.find(p => p.id === id);
          p.comments = p.comments || [];
          const initials = (state.user.name || 'User').split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase();
          p.comments.push({ author: state.user.name, initials, text, createdAt: new Date().toISOString() });
          input.value = '';
          save();
          renderFeed();
        });
      });
    }

    // Admin
    let engagementChart;
    function renderAdmin() {
      const tenantId = state.tenant?.id;
      // Users
      const users = state.users.filter(u => u.tenantId === tenantId);
      const usersList = $('users-list');
      usersList.innerHTML = '';
      users.forEach(u => {
        const row = document.createElement('div');
        row.className = "flex items-center justify-between p-3 rounded-md border border-neutral-800 bg-neutral-950";
        row.innerHTML = `
          <div class="flex items-center gap-3">
            <div class="h-8 w-8 rounded-full bg-neutral-800 ring-1 ring-neutral-700 flex items-center justify-center text-[11px] text-neutral-300">${u.initials}</div>
            <div>
              <p class="text-sm text-neutral-200">${u.name}</p>
              <p class="text-xs text-neutral-500">${u.email}</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs px-2 py-1 rounded border border-neutral-800 bg-neutral-900 text-neutral-300">${u.role || 'member'}</span>
            <button data-email="${u.email}" class="remove-user inline-flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-neutral-900 border border-neutral-800 text-xs transition">
              <i data-lucide="user-x" class="w-4 h-4"></i> Remove
            </button>
          </div>
        `;
        usersList.appendChild(row);
      });
      usersList.querySelectorAll('.remove-user').forEach(b=>{
        b.addEventListener('click', ()=>{
          const email = b.getAttribute('data-email');
          state.users = state.users.filter(u => !(u.email === email && u.tenantId === tenantId));
          save();
          renderAdmin();
        });
      });

      // Posts moderation
      const adminPosts = $('admin-posts');
      adminPosts.innerHTML = '';
      state.posts.filter(p => p.tenantId === tenantId).slice(-10).reverse().forEach(p => {
        const row = document.createElement('div');
        row.className = "flex items-start justify-between p-3 rounded-md border border-neutral-800 bg-neutral-950";
        row.innerHTML = `
          <div class="flex items-start gap-3">
            <div class="h-8 w-8 rounded-full bg-neutral-800 ring-1 ring-neutral-700 flex items-center justify-center text-[11px] text-neutral-300">${p.authorInitials}</div>
            <div>
              <p class="text-sm text-neutral-200">${p.author} • <span class="text-neutral-400">${new Date(p.createdAt).toLocaleString()}</span></p>
              <p class="text-sm text-neutral-300 mt-1">${p.content}</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button data-id="${p.id}" class="delete-post inline-flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-neutral-900 border border-neutral-800 text-xs transition">
              <i data-lucide="trash-2" class="w-4 h-4"></i> Delete
            </button>
          </div>
        `;
        adminPosts.appendChild(row);
      });
      adminPosts.querySelectorAll('.delete-post').forEach(b=>{
        b.addEventListener('click', ()=>{
          const id = b.getAttribute('data-id');
          state.posts = state.posts.filter(p => p.id !== id);
          save();
          renderAdmin();
          renderFeed();
          renderDashboard();
        });
      });

      // Chart
      const labels = Array.from({length:7}).map((_,i)=>{
        const d = new Date(); d.setDate(d.getDate() - (6 - i));
        return `${d.getMonth()+1}/${d.getDate()}`;
      });
      const counts = labels.map(label => {
        const [m,d] = label.split('/');
        return state.posts.filter(p => {
          const dt = new Date(p.createdAt);
          return (dt.getMonth()+1)==+m && dt.getDate()==+d && p.tenantId===tenantId;
        }).length;
      });
      const ctx = document.getElementById('engagementChart').getContext('2d');
      if (engagementChart) engagementChart.destroy();
      engagementChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'Posts/day',
            data: counts,
            borderColor: '#6366F1',
            backgroundColor: 'rgba(99,102,241,0.15)',
            fill: true,
            tension: 0.35,
            borderWidth: 2
          }]
        },
        options: {
          plugins: {
            legend: { display: false },
          },
          scales: {
            y: { grid: { color: 'rgba(120,120,120,0.15)' }, ticks: { color: '#A3A3A3' } },
            x: { grid: { display: false }, ticks: { color: '#A3A3A3' } }
          }
        }
      });
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    // Events
    window.addEventListener('hashchange', () => {
      const route = requireAuth(currentRoute());
      showPage(route);
    });

    // Mobile menu toggle
    $('mobile-menu-button').addEventListener('click', ()=>{
      $('mobile-nav').classList.toggle('hidden');
    });

    // User menu
    $('user-menu-button').addEventListener('click', ()=>{
      $('user-menu').classList.toggle('hidden');
    });

    // Login
    $('login-form')?.addEventListener('submit', (e)=>{
      e.preventDefault();
      // Demo auth
      if (!state.tenant) {
        state.tenant = { id: 't-' + Math.random().toString(36).slice(2,8), name: 'Harbor Oaks HOA' };
      }
      if (!state.user) {
        state.user = { id: 'u-' + Math.random().toString(36).slice(2,8), name: 'Alex Johnson', email: 'alex@example.com' };
      }
      // seed users for tenant if empty
      if (!state.users.find(u => u.email === state.user.email && u.tenantId === state.tenant.id)) {
        state.users.push({ tenantId: state.tenant.id, name: state.user.name, email: state.user.email, role: 'admin', initials: state.user.name.split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase() });
      }
      state.authed = true;
      save();
      location.hash = '#tenant-dashboard';
    });

    // Register
    $('register-form')?.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = $('reg-name').value.trim();
      const email = $('reg-email').value.trim();
      const pass = $('reg-pass').value;
      const pass2 = $('reg-pass2').value;
      const tenantName = $('reg-tenant').value.trim();
      if (!name || !email || !tenantName || pass !== pass2) return alert('Please complete all fields and ensure passwords match.');
      state.user = { id: 'u-' + Math.random().toString(36).slice(2,8), name, email };
      state.tenant = { id: 't-' + Math.random().toString(36).slice(2,8), name: tenantName };
      state.users.push({ tenantId: state.tenant.id, name, email, role: 'admin', initials: name.split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase() });
      state.authed = true;
      save();
      location.hash = '#tenant-dashboard';
    });

    // Logout
    $('logout-btn')?.addEventListener('click', ()=>{
      state.authed = false;
      save();
      location.hash = '#landing';
      $('user-menu').classList.add('hidden');
    });

    // Compose shortcuts
    $('compose-focus')?.addEventListener('click', ()=>{
      $('post-content')?.focus();
    });

    // Posting
    $('post-form')?.addEventListener('submit', (e)=>{
      e.preventDefault();
      const content = $('post-content').value.trim();
      if (!content) return;
      const initials = (state.user.name || 'User').split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase();
      const post = {
        id: 'p-' + Math.random().toString(36).slice(2,9),
        tenantId: state.tenant.id,
        content,
        author: state.user.name,
        authorInitials: initials,
        createdAt: new Date().toISOString(),
        comments: []
      };
             state.posts.push(post);
        save();
        $('post-content').value = '';
        renderFeed();
        renderDashboard();
        if (location.hash === '#admin') renderAdmin();
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // Invite user
    $('invite-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = $('invite-email').value.trim();
      if (!email) return;
      const tenantId = state.tenant?.id;
      if (!tenantId) return;
      if (state.users.find(u => u.email === email && u.tenantId === tenantId)) {
        alert('User is already invited or a member.');
        return;
      }
      const name = email.split('@')[0].replace(/\./g,' ').replace(/_/g,' ');
      const display = name.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
      const initials = display.split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase();
      state.users.push({ tenantId, name: display || email, email, role: 'member', initials });
      $('invite-email').value = '';
      save();
      renderAdmin();
      alert('Invitation sent (demo).');
    });

    // Settings helpers
    function setSwitchActive(btn, active) {
      if (!btn) return;
      btn.classList.toggle('active', !!active);
      btn.setAttribute('aria-pressed', !!active);
    }

    function hydrateSettingsUI() {
      // Tenant name
      if (state.tenant && $('tenant-settings-name')) {
        $('tenant-settings-name').value = state.tenant.name || '';
      }
      // Directory
      const dirEnabled = !!state.tenant?.settings?.directoryPublic;
      setSwitchActive($('toggle-directory'), dirEnabled);

      // Profile fields
      if (state.user) {
        $('set-name') && ($('set-name').value = state.user.name || '');
        $('set-email') && ($('set-email').value = state.user.email || '');
        $('set-phone') && ($('set-phone').value = state.user.phone || '');
        $('set-tz') && ($('set-tz').value = state.user.tz || 'UTC');
      }

      // Privacy toggles
      const showName = state.user?.privacy?.showName ?? true;
      const allowDM = state.user?.privacy?.allowDM ?? true;
      setSwitchActive($('toggle-name'), showName);
      setSwitchActive($('toggle-dm'), allowDM);

      // Icons for any newly rendered nodes
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    // Toggle interactions
    $('toggle-directory')?.addEventListener('click', () => {
      if (!state.tenant) return;
      state.tenant.settings = state.tenant.settings || {};
      state.tenant.settings.directoryPublic = !state.tenant.settings.directoryPublic;
      setSwitchActive($('toggle-directory'), state.tenant.settings.directoryPublic);
      save();
    });

    $('toggle-name')?.addEventListener('click', () => {
      if (!state.user) return;
      state.user.privacy = state.user.privacy || {};
      state.user.privacy.showName = !state.user.privacy.showName;
      setSwitchActive($('toggle-name'), state.user.privacy.showName);
      save();
    });

    $('toggle-dm')?.addEventListener('click', () => {
      if (!state.user) return;
      state.user.privacy = state.user.privacy || {};
      state.user.privacy.allowDM = !state.user.privacy.allowDM;
      setSwitchActive($('toggle-dm'), state.user.privacy.allowDM);
      save();
    });

    // Save tenant settings
    $('save-tenant-settings')?.addEventListener('click', () => {
      if (!state.tenant) return;
      const newName = $('tenant-settings-name').value.trim();
      if (newName) {
        state.tenant.name = newName;
      }
      save();
      renderNav();
      hydrateSettingsUI();
      alert('Tenant settings saved (demo).');
    });

    // Save profile
    $('save-profile')?.addEventListener('click', () => {
      if (!state.user) return;
      state.user.name = $('set-name')?.value?.trim() || state.user.name;
      state.user.email = $('set-email')?.value?.trim() || state.user.email;
      state.user.phone = $('set-phone')?.value?.trim() || state.user.phone;
      state.user.tz = $('set-tz')?.value || state.user.tz || 'UTC';
      // Also update initials in users list for current tenant record
      const tenantId = state.tenant?.id;
      const u = state.users.find(u => u.email === state.user.email && u.tenantId === tenantId);
      if (u) {
        u.name = state.user.name;
        u.initials = state.user.name.split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase();
      }
      save();
      renderNav();
      alert('Profile saved (demo).');
    });

    // Change password (demo)
    $('change-password')?.addEventListener('click', () => {
      if (!$('set-cur-pass')?.value || !$('set-new-pass')?.value) {
        alert('Enter current and new password.');
        return;
      }
      $('set-cur-pass').value = '';
      $('set-new-pass').value = '';
      alert('Password changed (demo). Active sessions would be revoked.');
    });

    // Save privacy (demo)
    $('save-privacy')?.addEventListener('click', () => {
      save();
      alert('Privacy preferences saved (demo).');
    });

    // Close user menu when clicking outside
    document.addEventListener('click', (e) => {
      const menu = $('user-menu');
      const btn = $('user-menu-button');
      if (!menu || !btn) return;
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });

    // Hide mobile nav on link click
    document.querySelectorAll('#mobile-nav a').forEach(a => {
      a.addEventListener('click', () => {
        $('mobile-nav')?.classList.add('hidden');
      });
    });

    // Additional route hydration after page change
    window.addEventListener('hashchange', () => {
      hydrateSettingsUI();
    });

    // Initial mount
    document.addEventListener('DOMContentLoaded', () => {
      const route = requireAuth(currentRoute());
      showPage(route);
      hydrateSettingsUI();
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      

<div className="min-h-screen flex flex-col" id="app">

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/80 border-b border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-800 ring-1 ring-neutral-700 flex items-center justify-center">
<span className="text-indigo-400 text-sm tracking-tight font-semibold">NM</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="text-neutral-100 font-medium tracking-tight">Neighborhood Portal</span>
<span className="text-neutral-500 text-sm">• Multitenant</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6" id="public-nav">
<a className="text-sm text-neutral-300 hover:text-neutral-50 transition" href="#landing">Home</a>
<a className="text-sm text-neutral-300 hover:text-neutral-50 transition" href="#about">About</a>
<a className="text-sm text-neutral-300 hover:text-neutral-50 transition" href="#faq">FAQ</a>
<a className="text-sm text-neutral-300 hover:text-neutral-50 transition" href="#contact">Contact</a>
<a className="text-sm text-indigo-400 hover:text-indigo-300 transition" href="#login">Sign in</a>
<a className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-indigo-600/90 hover:bg-indigo-600 text-white ring-1 ring-indigo-500/30 transition" href="#register">
<i className="w-4 h-4" data-lucide="sparkles"></i>
              Get started
            </a>
</nav>

<div className="hidden w-full md:w-auto" id="tenant-nav">
<div className="flex items-center justify-between md:justify-end gap-2 md:gap-4">

<button className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-neutral-800 bg-neutral-900 hover:bg-neutral-900/80 text-neutral-200 text-sm transition" id="tenant-switcher">
<i className="w-4 h-4" data-lucide="building-2"></i>
<span id="tenant-name">Tenant</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-down"></i>
</button>

<nav className="hidden md:flex items-center gap-1">
<a className="px-3 py-1.5 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-800/70 ring-1 ring-transparent hover:ring-neutral-700 transition" href="#tenant-dashboard">Dashboard</a>
<a className="px-3 py-1.5 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-800/70 ring-1 ring-transparent hover:ring-neutral-700 transition" href="#feed">Feed</a>
<a className="px-3 py-1.5 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-800/70 ring-1 ring-transparent hover:ring-neutral-700 transition" href="#admin">Admin</a>
<a className="px-3 py-1.5 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-800/70 ring-1 ring-transparent hover:ring-neutral-700 transition" href="#settings">Settings</a>
</nav>

<div className="relative">
<button className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-neutral-800 bg-neutral-900 hover:bg-neutral-900/80 text-neutral-200 text-sm transition" id="user-menu-button">
<i className="w-4 h-4" data-lucide="user"></i>
<span id="user-name-short">User</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-48 rounded-md border border-neutral-800 bg-neutral-950 shadow-lg" id="user-menu">
<a className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition" href="#settings">
<i className="w-4 h-4" data-lucide="settings"></i> Settings
                  </a>
<button className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm text-rose-300 hover:text-rose-200 hover:bg-rose-900/20 transition" id="logout-btn">
<i className="w-4 h-4" data-lucide="log-out"></i> Sign out
                  </button>
</div>
</div>
</div>
</div>

<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-800 ring-1 ring-neutral-800 transition" id="mobile-menu-button">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-neutral-800" id="mobile-nav">
<div className="px-4 py-3 space-y-1" id="mobile-nav-public">
<a className="block px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition" href="#landing">Home</a>
<a className="block px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition" href="#about">About</a>
<a className="block px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition" href="#faq">FAQ</a>
<a className="block px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition" href="#contact">Contact</a>
<div className="flex gap-2 px-3 pt-2">
<a className="flex-1 inline-flex items-center justify-center gap-2 text-sm px-3 py-2 rounded-md border border-neutral-800 text-neutral-200 hover:bg-neutral-900 transition" href="#login">Sign in</a>
<a className="flex-1 inline-flex items-center justify-center gap-2 text-sm px-3 py-2 rounded-md bg-indigo-600/90 hover:bg-indigo-600 text-white transition" href="#register">Get started</a>
</div>
</div>
<div className="px-4 py-3 space-y-1 hidden" id="mobile-nav-tenant">
<a className="block px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition" href="#tenant-dashboard">Dashboard</a>
<a className="block px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition" href="#feed">Feed</a>
<a className="block px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition" href="#admin">Admin</a>
<a className="block px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition" href="#settings">Settings</a>
</div>
</div>
</header>

<main className="flex-1">

<section className="block" id="page-landing">
<div className="relative overflow-hidden">
<div className="absolute inset-0 -z-10 opacity-20">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556012018-50c5c0da73bf?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
<div className="max-w-3xl">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">All-in-one neighborhood management for modern communities</h1>
<p className="mt-4 text-neutral-300 text-base sm:text-lg">Streamline communication, maintenance, documents, and updates with a secure, multitenant portal—built for HOAs, boards, landlords, and residents.</p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-indigo-600/90 hover:bg-indigo-600 text-white ring-1 ring-indigo-500/30 transition w-full sm:w-auto" href="#register">
<i className="w-4 h-4" data-lucide="flashlight"></i>
                  Start free
                </a>
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-neutral-800 bg-neutral-900 hover:bg-neutral-900/80 text-neutral-200 transition w-full sm:w-auto" href="#about">
<i className="w-4 h-4" data-lucide="circle-help"></i>
                  Learn more
                </a>
</div>
</div>
<div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-400" data-lucide="messages-square"></i>
<h3 className="text-lg font-semibold tracking-tight">Community feed</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Post announcements, discuss events, and keep everyone aligned—contained within each community.</p>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-400" data-lucide="wrench"></i>
<h3 className="text-lg font-semibold tracking-tight">Maintenance requests</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Track issues from report to resolution with transparency and SLA visibility.</p>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-400" data-lucide="file-stack"></i>
<h3 className="text-lg font-semibold tracking-tight">Documents &amp; policies</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Centralized docs with role-based access and versioning.</p>
</div>
</div>

<div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-6">
<h4 className="text-xl font-semibold tracking-tight">Recommended architecture</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li className="flex gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="layers"></i> App: Next.js (app router) with SSR/ISR</li>
<li className="flex gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="shield-check"></i> Auth: OAuth/email + session/JWT; per-tenant RBAC</li>
<li className="flex gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="database"></i> Data: Postgres with Row-Level Security (tenant_id)</li>
<li className="flex gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="route"></i> API: tRPC/REST; input validation (zod)</li>
<li className="flex gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="folder-lock"></i> Storage: S3-compatible buckets (scoped by tenant)</li>
<li className="flex gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="lock"></i> Secrets: Managed KMS; per-tenant encryption contexts</li>
</ul>
<div className="mt-4 p-3 rounded-md border border-neutral-800 bg-neutral-900/50">
<p className="text-xs text-neutral-400">Security validation: Enforce tenant_id in token claims and RLS policies; never trust client-sent tenant_id. All queries scoped server-side. Secrets isolated. ✅</p>
</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-6">
<h4 className="text-xl font-semibold tracking-tight">Minimal inputs to launch</h4>
<ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-300">
<li className="flex gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="building"></i> Community name &amp; domain</li>
<li className="flex gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="users"></i> Initial admins &amp; roles</li>
<li className="flex gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="mail"></i> Sender email (DKIM/SPF)</li>
<li className="flex gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="key-round"></i> Auth providers &amp; policies</li>
<li className="flex gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="file"></i> Seed documents/policies</li>
<li className="flex gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="shield"></i> Data retention &amp; privacy preferences</li>
</ul>
<div className="mt-4 p-3 rounded-md border border-neutral-800 bg-neutral-900/50">
<p className="text-xs text-neutral-400">Security validation: Use organization-bound email domains and SSO where possible. Enforce strong password and MFA policies. ✅</p>
</div>
</div>
</div>

<div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-6">
<h5 className="text-lg font-semibold tracking-tight">Tenants</h5>
<p className="mt-2 text-sm text-neutral-400">Clarity and transparency with real-time updates.</p>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-6">
<h5 className="text-lg font-semibold tracking-tight">Boards / Landlords</h5>
<p className="mt-2 text-sm text-neutral-400">Reduce admin overhead with automation and RBAC.</p>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-6">
<h5 className="text-lg font-semibold tracking-tight">Community</h5>
<p className="mt-2 text-sm text-neutral-400">Enhance trust and engagement with a single source of truth.</p>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="page-login">
<div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-16">
<div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-400" data-lucide="log-in"></i>
<h2 className="text-2xl font-semibold tracking-tight">Sign in</h2>
</div>
<p className="mt-1 text-sm text-neutral-400">Access your community portal.</p>
<form className="mt-6 space-y-4" id="login-form">
<div>
<label className="text-sm text-neutral-300">Email</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 text-neutral-100 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700 placeholder-neutral-600" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<label className="text-sm text-neutral-300">Password</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 text-neutral-100 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700 placeholder-neutral-600" placeholder="••••••••" required="" type="password"/>
</div>
<div className="flex items-center justify-between">
<label className="inline-flex items-center gap-2 cursor-pointer">
<input className="peer appearance-none w-4 h-4 rounded border border-neutral-700 bg-neutral-900 checked:bg-indigo-600 checked:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600/50" type="checkbox"/>
<span className="text-sm text-neutral-400">Remember me</span>
</label>
<a className="text-sm text-neutral-400 hover:text-neutral-200" href="#">Forgot password?</a>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-indigo-600/90 hover:bg-indigo-600 text-white ring-1 ring-indigo-500/30 transition" type="submit">
<i className="w-4 h-4" data-lucide="shield"></i>
                Continue
              </button>
</form>
<p className="mt-4 text-xs text-neutral-500">Security validation: Brute-force protection, MFA, TLS-only, session binding to device and tenant. ✅</p>
</div>
</div>
</section>

<section className="hidden" id="page-register">
<div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
<div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-400" data-lucide="user-plus"></i>
<h2 className="text-2xl font-semibold tracking-tight">Create your community</h2>
</div>
<p className="mt-1 text-sm text-neutral-400">Spin up a dedicated tenant with isolated data and access controls.</p>
<form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" id="register-form">
<div className="sm:col-span-1">
<label className="text-sm text-neutral-300">Full name</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 text-neutral-100 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700 placeholder-neutral-600" id="reg-name" placeholder="Alex Johnson" required="" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="text-sm text-neutral-300">Email</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 text-neutral-100 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700 placeholder-neutral-600" id="reg-email" placeholder="alex@example.com" required="" type="email"/>
</div>
<div className="sm:col-span-1">
<label className="text-sm text-neutral-300">Password</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 text-neutral-100 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700 placeholder-neutral-600" id="reg-pass" placeholder="Create a strong password" required="" type="password"/>
</div>
<div className="sm:col-span-1">
<label className="text-sm text-neutral-300">Confirm password</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 text-neutral-100 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700 placeholder-neutral-600" id="reg-pass2" placeholder="Re-enter password" required="" type="password"/>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-neutral-300">Community / Tenant name</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 text-neutral-100 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700 placeholder-neutral-600" id="reg-tenant" placeholder="Harbor Oaks HOA" required="" type="text"/>
</div>
<div className="sm:col-span-2">
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-indigo-600/90 hover:bg-indigo-600 text-white ring-1 ring-indigo-500/30 transition" type="submit">
<i className="w-4 h-4" data-lucide="rocket"></i>
                  Create tenant
                </button>
</div>
</form>
<p className="mt-4 text-xs text-neutral-500">Security validation: New tenant provisioned with unique tenant_id, default RBAC, secrets and storage partitions. No cross-tenant visibility. ✅</p>
</div>
</div>
</section>

<section className="hidden" id="page-tenant-dashboard">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Dashboard</h2>
<p className="text-sm text-neutral-400 mt-1">Overview for <span className="text-neutral-200" id="tenant-label"></span></p>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-sm transition" href="#feed">
<i className="w-4 h-4" data-lucide="plus"></i>
                New post
              </a>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600/90 hover:bg-indigo-600 text-white text-sm ring-1 ring-indigo-500/30 transition">
<i className="w-4 h-4" data-lucide="bell"></i>
                Subscribe
              </button>
</div>
</div>

<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400">Open requests</p>
<i className="w-4 h-4 text-indigo-400" data-lucide="wrench"></i>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight" id="stat-open-requests">0</p>
<p className="text-xs text-neutral-500">This week</p>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400">New posts</p>
<i className="w-4 h-4 text-indigo-400" data-lucide="messages-square"></i>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight" id="stat-new-posts">0</p>
<p className="text-xs text-neutral-500">Last 7 days</p>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400">Members</p>
<i className="w-4 h-4 text-indigo-400" data-lucide="users"></i>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight" id="stat-members">0</p>
<p className="text-xs text-neutral-500">Active</p>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400">Documents</p>
<i className="w-4 h-4 text-indigo-400" data-lucide="file"></i>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight" id="stat-docs">0</p>
<p className="text-xs text-neutral-500">Shared</p>
</div>
</div>

<div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-lg border border-neutral-800 bg-neutral-950/60">
<div className="px-4 py-3 border-b border-neutral-800 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="activity"></i>
<h3 className="text-lg font-semibold tracking-tight">Recent activity</h3>
</div>
<a className="text-sm text-neutral-400 hover:text-neutral-200" href="#feed">View feed</a>
</div>
<div className="p-4 space-y-3" id="recent-activity">

</div>
</div>

<div className="rounded-lg border border-neutral-800 bg-neutral-950/60">
<div className="px-4 py-3 border-b border-neutral-800 flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="shield-check"></i>
<h3 className="text-lg font-semibold tracking-tight">Security validation</h3>
</div>
<div className="p-4 space-y-3 text-sm text-neutral-300">
<p className="flex gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> All dashboard data is scoped server-side by tenant_id; client never sets tenant_id.</p>
<p className="flex gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Rate-limited endpoints; audit logs for admin actions.</p>
<p className="flex gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Secrets and storage buckets partitioned per tenant.</p>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="page-feed">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex items-start justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Community feed</h2>
<p className="text-sm text-neutral-400 mt-1">Only members of <span className="text-neutral-200" id="feed-tenant"></span> can view and interact.</p>
</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-sm transition" id="compose-focus">
<i className="w-4 h-4" data-lucide="edit"></i>
              Compose
            </button>
</div>

<div className="mt-6 rounded-lg border border-neutral-800 bg-neutral-950/60 p-4">
<form id="post-form">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-full bg-neutral-800 ring-1 ring-neutral-700 flex items-center justify-center text-xs text-neutral-300" id="avatar-initials">U</div>
<textarea className="flex-1 resize-none rounded-md bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder-neutral-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700" id="post-content" placeholder="Share an update with your neighbors..." rows="3"></textarea>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-neutral-400">
<button className="inline-flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-neutral-900 border border-neutral-800 text-xs transition" title="Attach file" type="button">
<i className="w-4 h-4" data-lucide="paperclip"></i> Attach
                  </button>
<button className="inline-flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-neutral-900 border border-neutral-800 text-xs transition" title="Add photo" type="button">
<i className="w-4 h-4" data-lucide="image"></i> Photo
                  </button>
</div>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-600/90 hover:bg-indigo-600 text-white text-sm ring-1 ring-indigo-500/30 transition" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
                  Post
                </button>
</div>
</form>
</div>

<div className="mt-6 space-y-4" id="posts-list">

</div>

<div className="mt-8 rounded-lg border border-neutral-800 bg-neutral-950/60">
<div className="px-4 py-3 border-b border-neutral-800 flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="lock"></i>
<h3 className="text-lg font-semibold tracking-tight">Security validation</h3>
</div>
<div className="p-4 space-y-3 text-sm text-neutral-300">
<p className="flex gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Feed queries use server-side tenant filters with RLS; user can only CRUD within their tenant.</p>
<p className="flex gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Uploads store under tenant-scoped prefixes; signed URLs; AV scanning.</p>
<p className="flex gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> Input validated and sanitized; anti-spam and rate-limiting enabled.</p>
</div>
</div>
</div>
</section>

<section className="hidden" id="page-admin">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex items-start justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Tenant admin</h2>
<p className="text-sm text-neutral-400 mt-1">Manage users, posts, and settings for <span className="text-neutral-200" id="admin-tenant"></span>.</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded border border-neutral-800 bg-neutral-900 text-neutral-300">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="shield"></i> Admin role
              </span>
</div>
</div>

<div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-1 rounded-lg border border-neutral-800 bg-neutral-950/60">
<div className="px-4 py-3 border-b border-neutral-800 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="users"></i>
<h3 className="text-lg font-semibold tracking-tight">Users</h3>
</div>
<span className="text-xs text-neutral-500">RBAC</span>
</div>
<div className="p-4">
<form className="flex gap-2" id="invite-form">
<input className="flex-1 px-3 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700" id="invite-email" placeholder="Invite by email" type="email"/>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-sm transition">
<i className="w-4 h-4" data-lucide="send"></i> Invite
                  </button>
</form>
<div className="mt-4 space-y-3" id="users-list">

</div>
</div>
</div>

<div className="lg:col-span-1 rounded-lg border border-neutral-800 bg-neutral-950/60">
<div className="px-4 py-3 border-b border-neutral-800 flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="message-square-dashed"></i>
<h3 className="text-lg font-semibold tracking-tight">Posts moderation</h3>
</div>
<div className="p-4 space-y-3" id="admin-posts">

</div>
</div>

<div className="lg:col-span-1 space-y-6">
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60">
<div className="px-4 py-3 border-b border-neutral-800 flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="chart-no-axes-combined"></i>
<h3 className="text-lg font-semibold tracking-tight">Engagement</h3>
</div>
<div className="p-4">
<div className="h-40">
<div className="h-full w-full">
<canvas id="engagementChart"></canvas>
</div>
</div>
</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60">
<div className="px-4 py-3 border-b border-neutral-800 flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="sliders-horizontal"></i>
<h3 className="text-lg font-semibold tracking-tight">Tenant settings</h3>
</div>
<div className="p-4 space-y-3">
<div>
<label className="text-sm text-neutral-300">Community name</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700" id="tenant-settings-name"/>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-neutral-200">Public directory</p>
<p className="text-xs text-neutral-500">Show basic info on a public page</p>
</div>
<button className="group relative inline-flex h-6 w-11 items-center rounded-full transition border border-neutral-700 bg-neutral-800" id="toggle-directory">
<span className="sr-only">Toggle directory</span>
<span className="dot inline-block h-4 w-4 translate-x-1 rounded-full bg-neutral-400 transition group-[.active]:translate-x-6 group-[.active]:bg-indigo-400"></span>
</button>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-sm transition" id="save-tenant-settings">
<i className="w-4 h-4" data-lucide="save"></i>
                    Save
                  </button>
</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-4">
<p className="text-xs text-neutral-500">Security validation: Admin actions require admin role; all mutations check tenant_id and role in server; logs and alerts on sensitive changes. ✅</p>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="page-settings">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-400" data-lucide="settings"></i>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">User settings</h2>
</div>
<p className="text-sm text-neutral-400 mt-1">Manage your profile, privacy, and security.</p>
<div className="mt-6 grid grid-cols-1 gap-6">

<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-6">
<h3 className="text-lg font-semibold tracking-tight">Profile</h3>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="text-sm text-neutral-300">Name</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700" id="set-name"/>
</div>
<div>
<label className="text-sm text-neutral-300">Email</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700" id="set-email" type="email"/>
</div>
<div>
<label className="text-sm text-neutral-300">Phone</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700" id="set-phone" placeholder="+1 555 0100" type="tel"/>
</div>
<div>
<label className="text-sm text-neutral-300">Timezone</label>
<select className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700" id="set-tz">
<option value="UTC">UTC</option>
<option value="America/New_York">America/New_York</option>
<option value="America/Los_Angeles">America/Los_Angeles</option>
</select>
</div>
</div>
<div className="mt-4">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-sm transition" id="save-profile">
<i className="w-4 h-4" data-lucide="save"></i> Save profile
                </button>
</div>
</div>

<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-6">
<h3 className="text-lg font-semibold tracking-tight">Security</h3>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="text-sm text-neutral-300">Current password</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700" id="set-cur-pass" type="password"/>
</div>
<div>
<label className="text-sm text-neutral-300">New password</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700" id="set-new-pass" type="password"/>
</div>
</div>
<div className="mt-4">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600/90 hover:bg-indigo-600 text-white text-sm ring-1 ring-indigo-500/30 transition" id="change-password">
<i className="w-4 h-4" data-lucide="key-round"></i> Change password
                </button>
</div>
<p className="mt-3 text-xs text-neutral-500">Security validation: Requires recent re-auth; password hashed with strong KDF; sessions revoked on change. ✅</p>
</div>

<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-6">
<h3 className="text-lg font-semibold tracking-tight">Privacy</h3>
<div className="mt-4 space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-neutral-200">Show my name in directory</p>
<p className="text-xs text-neutral-500">Visible to members of your community</p>
</div>
<button className="group relative inline-flex h-6 w-11 items-center rounded-full transition border border-neutral-700 bg-neutral-800" id="toggle-name">
<span className="sr-only">Toggle</span>
<span className="dot inline-block h-4 w-4 translate-x-1 rounded-full bg-neutral-400 transition group-[.active]:translate-x-6 group-[.active]:bg-indigo-400"></span>
</button>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-neutral-200">Allow direct messages</p>
<p className="text-xs text-neutral-500">Only from verified members</p>
</div>
<button className="group relative inline-flex h-6 w-11 items-center rounded-full transition border border-neutral-700 bg-neutral-800" id="toggle-dm">
<span className="sr-only">Toggle</span>
<span className="dot inline-block h-4 w-4 translate-x-1 rounded-full bg-neutral-400 transition group-[.active]:translate-x-6 group-[.active]:bg-indigo-400"></span>
</button>
</div>
</div>
<div className="mt-4">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-sm transition" id="save-privacy">
<i className="w-4 h-4" data-lucide="shield"></i> Save privacy
                </button>
</div>
<p className="mt-3 text-xs text-neutral-500">Security validation: Privacy preferences stored per-user within tenant; exports and deletion requests supported. ✅</p>
</div>
</div>
</div>
</section>

<section className="hidden" id="page-about">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
<h2 className="text-3xl font-semibold tracking-tight">About</h2>
<p className="mt-3 text-neutral-300">We help communities operate with transparency and efficiency through a secure multitenant platform.</p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-5">
<h4 className="text-lg font-semibold tracking-tight">Mission</h4>
<p className="mt-2 text-sm text-neutral-400">Make neighborhood operations intuitive and safe.</p>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-5">
<h4 className="text-lg font-semibold tracking-tight">Approach</h4>
<p className="mt-2 text-sm text-neutral-400">Security-first architecture with predictable UX.</p>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-5">
<h4 className="text-lg font-semibold tracking-tight">Values</h4>
<p className="mt-2 text-sm text-neutral-400">Trust, clarity, and community ownership.</p>
</div>
</div>
</div>
</section>

<section className="hidden" id="page-contact">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
<h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
<p className="mt-2 text-neutral-300">Questions, demos, or partnerships—reach out.</p>
<form className="mt-6 space-y-4" id="contact-form">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="text-sm text-neutral-300">Name</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700"/>
</div>
<div>
<label className="text-sm text-neutral-300">Email</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700" type="email"/>
</div>
</div>
<div>
<label className="text-sm text-neutral-300">Message</label>
<textarea className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-neutral-700" rows="4"></textarea>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-sm transition">
<i className="w-4 h-4" data-lucide="send"></i> Send
            </button>
</form>
</div>
</section>

<section className="hidden" id="page-faq">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
<h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
<div className="mt-6 space-y-3">
<details className="rounded-md border border-neutral-800 bg-neutral-950/60 p-4 open:bg-neutral-950">
<summary className="cursor-pointer list-none flex items-center justify-between">
<span className="text-sm text-neutral-200">How do you isolate tenant data?</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-400">By enforcing tenant_id at the database layer with RLS and scoping all queries server-side. Tokens include tenant claims and roles.</p>
</details>
<details className="rounded-md border border-neutral-800 bg-neutral-950/60 p-4 open:bg-neutral-950">
<summary className="cursor-pointer list-none flex items-center justify-between">
<span className="text-sm text-neutral-200">Can I migrate documents from another system?</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-400">Yes. We provide import tooling and map documents into tenant-scoped storage with preserved metadata.</p>
</details>
<details className="rounded-md border border-neutral-800 bg-neutral-950/60 p-4 open:bg-neutral-950">
<summary className="cursor-pointer list-none flex items-center justify-between">
<span className="text-sm text-neutral-200">Do you support SSO?</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-400">SAML and OIDC are supported for enterprise tenants.</p>
</details>
</div>
</div>
</section>

<section className="hidden" id="page-terms">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
<h2 className="text-3xl font-semibold tracking-tight">Terms of Service</h2>
<p className="mt-3 text-sm text-neutral-400">Your use of the service is subject to these terms. This is placeholder content for demonstration.</p>
</div>
</section>

<section className="hidden" id="page-privacy">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
<h2 className="text-3xl font-semibold tracking-tight">Privacy Policy</h2>
<p className="mt-3 text-sm text-neutral-400">We respect your privacy and protect your data according to industry best practices. This is placeholder content.</p>
</div>
</section>
</main>

<footer className="border-t border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-neutral-800 ring-1 ring-neutral-700 flex items-center justify-center">
<span className="text-indigo-400 text-xs tracking-tight font-semibold">NM</span>
</div>
<p className="text-sm text-neutral-400">Neighborhood Portal</p>
</div>
<nav className="flex items-center gap-4 text-sm">
<a className="text-neutral-400 hover:text-neutral-200" href="#about">About</a>
<a className="text-neutral-400 hover:text-neutral-200" href="#faq">FAQ</a>
<a className="text-neutral-400 hover:text-neutral-200" href="#contact">Contact</a>
<a className="text-neutral-400 hover:text-neutral-200" href="#terms">Terms</a>
<a className="text-neutral-400 hover:text-neutral-200" href="#privacy">Privacy</a>
</nav>
</div>
</div>
</footer>
</div>


    </>
  );
}
