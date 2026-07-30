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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

      // Icon init
      function renderIcons() {
        try { lucide.createIcons(); } catch (e) {}
      }

      // Toast
      const toast = document.getElementById('toast');
      const toastText = document.getElementById('toastText');
      function showToast(msg = 'Saved successfully', timeout = 2000) {
        if (!toast) return;
        toastText.textContent = msg;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), timeout);
      }

      // Section toggling (Public vs App)
      const publicHeader = document.getElementById('publicHeader');
      const appHeader = document.getElementById('appHeader');
      const landing = document.getElementById('landing');
      const login = document.getElementById('login');
      const app = document.getElementById('app');
      let isAuthed = false;

      function showPublic(section = 'landing') {
        app.classList.add('hidden');
        appHeader.classList.add('hidden');
        publicHeader.classList.remove('hidden');
        landing.classList.toggle('hidden', section !== 'landing');
        login.classList.toggle('hidden', section !== 'login');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderIcons();
      }

      function showApp(initialSectionId = 'dashboard') {
        isAuthed = true;
        publicHeader.classList.add('hidden');
        landing.classList.add('hidden');
        login.classList.add('hidden');
        appHeader.classList.remove('hidden');
        app.classList.remove('hidden');
        // set active section
        document.querySelectorAll('.app-section').forEach(s => s.classList.add('hidden'));
        document.getElementById(initialSectionId)?.classList.remove('hidden');
        // sidebar active
        document.querySelectorAll('.app-nav-item').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.section === initialSectionId);
        });
        renderIcons();
      }

      // Header logo interactions
      const logoHome = document.getElementById('logoHome');
      logoHome?.addEventListener('click', () => showPublic('landing'));
      logoHome?.addEventListener('keydown', (e) => { if (e.key === 'Enter') showPublic('landing'); });

      const appLogoHome = document.getElementById('appLogoHome');
      appLogoHome?.addEventListener('click', () => showApp('dashboard'));
      appLogoHome?.addEventListener('keydown', (e) => { if (e.key === 'Enter') showApp('dashboard'); });

      // CTA buttons
      document.getElementById('ctaGetStarted')?.addEventListener('click', () => showPublic('login'));
      document.getElementById('ctaGetStartedHero')?.addEventListener('click', () => showPublic('login'));
      document.getElementById('gotoLoginFromHeader')?.addEventListener('click', () => showPublic('login'));

      // Login form
      document.getElementById('togglePassword')?.addEventListener('click', () => {
        const inp = document.getElementById('loginPassword');
        if (!inp) return;
        inp.type = inp.type === 'password' ? 'text' : 'password';
      });

      document.getElementById('loginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showApp('dashboard');
        showToast('Welcome back, Alex!');
      });

      // Sign out
      document.getElementById('signOut')?.addEventListener('click', () => {
        isAuthed = false;
        showPublic('landing');
        showToast('Signed out');
      });

      // Sidebar mobile toggle
      document.getElementById('sidebarToggle')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.toggle('hidden');
      });

      // Sidebar navigation
      document.querySelectorAll('.app-nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
          const section = btn.dataset.section;
          const subtab = btn.dataset.subtab;
          document.querySelectorAll('.app-section').forEach(s => s.classList.add('hidden'));
          document.getElementById(section)?.classList.remove('hidden');
          document.querySelectorAll('.app-nav-item').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          if (section === 'workflow-modules' && subtab) {
            // switch top tabs
            switchWfTab(subtab);
          }
          renderIcons();
        });
      });

      // Features cards -> navigate to app sections
      document.getElementById('feature-workflow')?.addEventListener('click', () => { showApp('workflow-modules'); switchWfTab('workflow-designer'); });
      document.getElementById('feature-form')?.addEventListener('click', () => showApp('form-editor'));
      document.getElementById('feature-api')?.addEventListener('click', () => showApp('api-config'));

      // WF Module top tabs
      function switchWfTab(key) {
        document.querySelectorAll('.wf-tab').forEach(t => {
          const match = t.dataset.wftab === key;
          t.classList.toggle('active', match);
          t.classList.toggle('text-blue-700', match);
          t.classList.toggle('ring-blue-200', match);
          t.classList.toggle('text-slate-700', !match);
          t.classList.toggle('ring-slate-200', !match);
        });
        document.getElementById('tab-business-logic')?.classList.toggle('hidden', key !== 'business-logic');
        document.getElementById('tab-workflow-designer')?.classList.toggle('hidden', key !== 'workflow-designer');
        document.getElementById('tab-application-workflow')?.classList.toggle('hidden', key !== 'application-workflow');
      }

      document.querySelectorAll('.wf-tab').forEach(t => {
        t.addEventListener('click', () => switchWfTab(t.dataset.wftab));
      });

      // Save/Publish actions (show toast)
      document.getElementById('saveFlow')?.addEventListener('click', () => showToast('Flow saved'));
      document.getElementById('publishFlow')?.addEventListener('click', () => showToast('Flow published'));
      document.getElementById('saveDesigner')?.addEventListener('click', () => showToast('Designer saved'));
      document.getElementById('publishDesigner')?.addEventListener('click', () => showToast('Workflow published'));
      document.getElementById('refreshWfChart')?.addEventListener('click', () => { initWfChart(true); showToast('Refreshed'); });

      // Application workflow buttons (delegated)
      document.getElementById('tab-application-workflow')?.addEventListener('click', (e) => {
        const target = e.target.closest('button');
        if (!target) return;
        if (target.textContent.includes('Refresh')) showToast('Workflows refreshed');
        if (target.textContent.includes('Trigger')) showToast('Workflow triggered');
      });

      // Form Editor: tabs and DnD
      const tabsHeader = document.getElementById('formTabsHeader');
      const tabsContent = document.getElementById('formTabsContent');
      let tabCount = 0;
      let activeTabId = null;

      function makeActiveTab(id) {
        activeTabId = id;
        [...tabsHeader.children].forEach(b => b.classList.toggle('ring-2', b.dataset.tabId === id));
        [...tabsContent.children].forEach(p => p.classList.toggle('hidden', p.dataset.tabId !== id));
      }

      function addTab(name = `Tab ${tabCount + 1}`) {
        const id = `tab-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        tabCount++;
        // Header pill
        const pill = document.createElement('button');
        pill.dataset.tabId = id;
        pill.className = 'inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 ring-slate-200 hover:bg-slate-200';
        pill.innerHTML = `<i data-lucide="folder" class="h-3.5 w-3.5"></i> ${name}
          <span class="ml-1 rounded bg-white px-1.5 py-0.5 text-[10px] text-slate-500">0</span>`;
        pill.addEventListener('click', () => makeActiveTab(id));
        tabsHeader.appendChild(pill);

        // Content panel
        const panel = document.createElement('div');
        panel.dataset.tabId = id;
        panel.className = 'rounded-md border border-dashed border-slate-300 bg-slate-50 p-4 text-xs text-slate-500';
        panel.innerHTML = `
          <div class="mb-3 flex items-center justify-between">
            <div>Drag components here</div>
            <button class="clear-tab rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] hover:border-rose-300 hover:text-rose-700">
              <i data-lucide="eraser" class="h-3.5 w-3.5"></i> Clear
            </button>
          </div>
          <div class="canvas-drop grid grid-cols-1 gap-3 sm:grid-cols-2"></div>
        `;
        tabsContent.appendChild(panel);

        // Clear button
        panel.querySelector('.clear-tab').addEventListener('click', () => {
          panel.querySelector('.canvas-drop').innerHTML = '';
          const badge = pill.querySelector('span');
          if (badge) badge.textContent = '0';
          renderIcons();
        });

        makeActiveTab(id);
        renderIcons();
      }

      document.getElementById('addFormTab')?.addEventListener('click', () => addTab());
      // Create default tab
      addTab('Details');

      // Drag setup
      let draggedType = null;
      document.querySelectorAll('[draggable="true"][data-form-el]').forEach(el => {
        el.addEventListener('dragstart', () => draggedType = el.dataset.formEl);
        el.addEventListener('dragend', () => draggedType = null);
      });

      function makeDroppable(panel) {
        const drop = panel.querySelector('.canvas-drop');
        if (!drop) return;
        drop.addEventListener('dragover', (e) => { e.preventDefault(); drop.classList.add('bg-blue-50'); });
        drop.addEventListener('dragleave', () => drop.classList.remove('bg-blue-50'));
        drop.addEventListener('drop', (e) => {
          e.preventDefault();
          drop.classList.remove('bg-blue-50');
          if (!draggedType) return;
          const item = createFormItem(draggedType);
          drop.appendChild(item);
          // Update count badge
          const pill = [...tabsHeader.children].find(p => p.dataset.tabId === activeTabId);
          const badge = pill?.querySelector('span');
          if (badge) badge.textContent = drop.children.length.toString();
          renderIcons();
        });
      }
      // Observe panels
      const observer = new MutationObserver(() => {
        [...tabsContent.children].forEach(makeDroppable);
      });
      observer.observe(tabsContent, { childList: true, subtree: true });

      function createFormItem(type) {
        const base = document.createElement('div');
        base.className = 'group relative rounded-md border border-slate-200 bg-white p-3 text-xs shadow-sm hover:border-blue-300';
        base.innerHTML = `
          <button class="absolute right-1 top-1 hidden rounded-md border border-slate-200 bg-white p-1 text-slate-600 group-hover:block hover:border-rose-300 hover:text-rose-700" title="Remove">
            <i data-lucide="x" class="h-3.5 w-3.5"></i>
          </button>
          <div class="mb-2 font-medium capitalize">${type.replace('snippet-', '').replace('-', ' ')}</div>
          <div class="content space-y-2"></div>
        `;
        base.querySelector('button')?.addEventListener('click', () => base.remove());
        const content = base.querySelector('.content');

        const inputCls = 'w-full rounded-md border border-slate-300 px-2 py-1.5 text-xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200';

        const map = {
          textbox: () => content.appendChild(Object.assign(document.createElement('input'), { className: inputCls, placeholder: 'Text' })),
          textarea: () => content.appendChild(Object.assign(document.createElement('textarea'), { className: inputCls, placeholder: 'Multiline' })),
          date: () => content.appendChild(Object.assign(document.createElement('input'), { className: inputCls, type: 'date' })),
          time: () => content.appendChild(Object.assign(document.createElement('input'), { className: inputCls, type: 'time' })),
          file: () => content.appendChild(Object.assign(document.createElement('input'), { className: inputCls, type: 'file' })),
          dropdown: () => {
            const sel = Object.assign(document.createElement('select'), { className: inputCls });
            ['Select', 'Option A', 'Option B'].forEach(t => sel.appendChild(new Option(t, t)));
            content.appendChild(sel);
          },
          radio: () => {
            const wrap = document.createElement('div');
            wrap.className = 'flex items-center gap-3';
            ['Yes', 'No'].forEach(t => {
              const lbl = document.createElement('label');
              lbl.className = 'inline-flex items-center gap-1.5';
              const r = document.createElement('input'); r.type = 'radio'; r.name = `r-${Math.random().toString(36).slice(2,7)}`;
              lbl.appendChild(r); lbl.appendChild(document.createTextNode(t)); wrap.appendChild(lbl);
            });
            content.appendChild(wrap);
          },
          checkbox: () => {
            const lbl = document.createElement('label');
            lbl.className = 'inline-flex items-center gap-1.5';
            const c = document.createElement('input'); c.type = 'checkbox';
            lbl.appendChild(c); lbl.appendChild(document.createTextNode('Accept'));
            content.appendChild(lbl);
          },
          button: () => {
            const b = document.createElement('button');
            b.className = 'rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700';
            b.textContent = 'Submit';
            content.appendChild(b);
          },
          label: () => {
            const l = document.createElement('div');
            l.className = 'text-[11px] text-slate-600';
            l.textContent = 'Helper text or label';
            content.appendChild(l);
          },
          'snippet-contact': () => {
            map.textbox(); map.textbox(); map.textbox();
            content.children[0].placeholder = 'Full Name';
            content.children[1].placeholder = 'Email';
            content.children[2].placeholder = 'Phone';
          },
          'snippet-address': () => {
            map.textbox(); map.textbox(); map.textbox();
            content.children[0].placeholder = 'Street';
            content.children[1].placeholder = 'City';
            content.children[2].placeholder = 'ZIP';
          }
        };
        (map[type] || map.textbox)();
        return base;
      }

      document.getElementById('saveForm')?.addEventListener('click', () => showToast('Form saved'));

      // API Config interactions
      document.getElementById('addEndpoint')?.addEventListener('click', () => {
        const list = document.getElementById('endpointList');
        const id = Date.now();
        const btn = document.createElement('button');
        btn.className = 'endpoint-item flex w-full items-center justify-between px-4 py-3 text-left text-sm hover:bg-slate-50';
        btn.dataset.id = String(id);
        btn.innerHTML = `<div><div class="font-medium">GET /new-endpoint</div><div class="text-xs text-slate-500">Public: false</div></div>
                         <span class="rounded bg-slate-100 px-2 py-0.5 text-[10px]">v1</span>`;
        btn.addEventListener('click', () => loadEndpoint({ method: 'GET', version: 'v1', path: '/new-endpoint', auth: 'None', timeout: 10000, headers: '{}', body: '{}' }));
        list.prepend(btn);
        loadEndpoint({ method: 'GET', version: 'v1', path: '/new-endpoint', auth: 'None', timeout: 10000, headers: '{}', body: '{}' });
        showToast('Endpoint added');
        renderIcons();
      });

      function loadEndpoint(data) {
        document.getElementById('apiMethod').value = data.method || 'GET';
        document.getElementById('apiVersion').value = data.version || 'v1';
        document.getElementById('apiPath').value = data.path || '/resource';
        document.getElementById('apiAuth').value = data.auth || 'None';
        document.getElementById('apiTimeout').value = data.timeout || 15000;
        document.getElementById('apiHeaders').value = data.headers || '{}';
        document.getElementById('apiBody').value = data.body || '{}';
        document.getElementById('apiResponse').textContent = '—';
      }

      document.querySelectorAll('.endpoint-item').forEach(btn => {
        btn.addEventListener('click', () => {
          const text = btn.querySelector('.font-medium').textContent.trim();
          const [method, path] = text.split(' ');
          const auth = btn.textContent.includes('Bearer') ? 'Bearer' : (btn.textContent.includes('API Key') ? 'API Key' : 'None');
          loadEndpoint({ method, version: 'v1', path, auth, timeout: 15000, headers: '{ "Content-Type": "application/json" }', body: '{}' });
        });
      });

      document.getElementById('testEndpoint')?.addEventListener('click', async () => {
        const method = document.getElementById('apiMethod').value;
        const path = document.getElementById('apiPath').value;
        const respPre = document.getElementById('apiResponse');
        respPre.textContent = 'Testing...';
        // Demo only: simulate response
        await new Promise(r => setTimeout(r, 800));
        respPre.textContent = JSON.stringify({ ok: true, method, path, timestamp: new Date().toISOString() }, null, 2);
        showToast('Test completed');
      });

      document.getElementById('saveEndpoint')?.addEventListener('click', () => showToast('Endpoint saved'));

      // Master Addition interactions
      document.getElementById('addEntry')?.addEventListener('click', () => {
        const row = document.querySelector('.entry-row').cloneNode(true);
        row.querySelectorAll('input').forEach(i => i.value = '');
        row.querySelector('.remove-entry').addEventListener('click', () => row.remove());
        document.getElementById('entries').appendChild(row);
        renderIcons();
      });
      document.querySelector('.remove-entry')?.addEventListener('click', (e) => {
        const row = e.currentTarget.closest('.entry-row');
        if (row && document.querySelectorAll('.entry-row').length > 1) row.remove();
      });
      document.getElementById('saveMaster')?.addEventListener('click', () => showToast('Master saved'));

      // Workflow chart
      let wfChart;
      function initWfChart(refresh = false) {
        const ctx = document.getElementById('wfChart');
        if (!ctx) return;
        if (wfChart && refresh) { wfChart.destroy(); }
        if (wfChart) return;
        wfChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Live', 'Pending', 'Draft'],
            datasets: [{ data: [12, 5, 8], backgroundColor: ['#16a34a', '#f59e0b', '#94a3b8'], borderWidth: 0 }]
          },
          options: { plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } } }, cutout: '60%' }
        });
      }

      // Init
      document.addEventListener('DOMContentLoaded', () => {
        renderIcons();
        initWfChart();
      });
    
}
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
      

<div className="fixed top-4 right-4 z-[9999] hidden" id="toast">
<div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-lg">
<i className="text-green-600" data-lucide="check-circle-2" style={{strokeWidth: `1.5`}}></i>
<div className="text-sm font-medium text-slate-800" id="toastText">Saved successfully</div>
</div>
</div>

<header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur" id="publicHeader">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
<div className="flex cursor-pointer items-center gap-3" id="logoHome" role="button" tabindex="0" title="Go to Home">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-800 shadow-sm">
<span className="text-sm font-semibold tracking-tight">DDS</span>
</div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight">Digital Deer Solutions Pvt Ltd</span>
<span className="text-xs text-slate-500">We see, we hear, we deliver</span>
</div>
</div>
<nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 sm:flex">

<a className="hover:text-blue-700" href="#features">Products</a>
<a className="hover:text-blue-700" href="#about">About</a>
<a className="hover:text-blue-700" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 hover:border-blue-300 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" id="gotoLoginFromHeader">
<i className="h-4 w-4" data-lucide="log-in" style={{strokeWidth: `1.5`}}></i>
            Sign in
          </button>
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold tracking-tight text-white shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" id="ctaGetStarted">
            Get Started
            <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: `1.5`}}></i>
</button>
</div>
</div>
</header>

<header className="sticky top-0 z-40 hidden border-b border-slate-200 bg-white/70 backdrop-blur" id="appHeader">
<div className="mx-auto flex max-w-full items-center justify-between px-4 py-3 lg:px-6">
<div className="flex items-center gap-3">
<button className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-2 text-slate-700 hover:border-blue-300 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden" id="sidebarToggle">
<i className="h-5 w-5" data-lucide="panel-left" style={{strokeWidth: `1.5`}}></i>
</button>
<div className="flex cursor-pointer items-center gap-3" id="appLogoHome" role="button" tabindex="0" title="Go to Home">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-800 shadow-sm">
<span className="text-sm font-semibold tracking-tight">DDS</span>
</div>
<span className="text-base font-semibold tracking-tight">FlexCode Studio</span>
</div>
</div>
<div className="hidden items-center gap-2 rounded-md border border-slate-200 bg-white px-2 sm:flex">
<i className="h-4 w-4 text-slate-400" data-lucide="search" style={{strokeWidth: `1.5`}}></i>
<input className="w-64 border-0 bg-transparent px-2 py-2 text-sm focus:outline-none" placeholder="Search..." type="text" />
</div>
<div className="flex items-center gap-3">
<button className="relative inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-2 text-slate-700 hover:border-blue-300 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
<i className="h-5 w-5" data-lucide="bell" style={{strokeWidth: `1.5`}}></i>
<span className="absolute -right-0 -top-0 inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
</button>
<div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-1">
<img alt="Avatar" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=120&auto=format&fit=crop" />
<div className="hidden text-sm sm:block">
<div className="font-medium">Alex Morgan</div>
<div className="text-xs text-slate-500">Admin</div>
</div>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-full">

<section className="relative" id="landing">
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2">
<div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Build workflows, forms, and automations — visually
              </h1>
<p className="mt-4 text-base leading-relaxed text-slate-600">
                FlexCode empowers business users to design multi-tab forms, automate business logic, configure APIs, and monitor workflows — all without heavy coding.
              </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold tracking-tight text-white shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" id="ctaGetStartedHero">
                  Get Started
                  <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: `1.5`}}></i>
</button>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:border-blue-300 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" href="#features">
                  Explore features
                  <i className="h-4 w-4" data-lucide="sparkles" style={{strokeWidth: `1.5`}}></i>
</a>
</div>
<div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<i className="h-6 w-6 text-blue-600" data-lucide="workflow" style={{strokeWidth: `1.5`}}></i>
<div className="mt-3 text-sm font-medium">Low-code workflow builder</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<i className="h-6 w-6 text-blue-600" data-lucide="square-mouse-pointer" style={{strokeWidth: `1.5`}}></i>
<div className="mt-3 text-sm font-medium">Form Designer</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<i className="h-6 w-6 text-blue-600" data-lucide="server-cog" style={{strokeWidth: `1.5`}}></i>
<div className="mt-3 text-sm font-medium">API Configuration</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<i className="h-6 w-6 text-blue-600" data-lucide="bot" style={{strokeWidth: `1.5`}}></i>
<div className="mt-3 text-sm font-medium">Business Logic Automation</div>
</div>
</div>
</div>
<div className="relative">
<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<img alt="Dashboard preview" className="h-72 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop" />
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-slate-200 bg-white p-3">
<div className="text-xs text-slate-500">Active Workflows</div>
<div className="text-2xl font-semibold tracking-tight">28</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-3">
<div className="text-xs text-slate-500">Forms Created</div>
<div className="text-2xl font-semibold tracking-tight">142</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-3">
<div className="text-xs text-slate-500">APIs Linked</div>
<div className="text-2xl font-semibold tracking-tight">36</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 border-t border-slate-200 pt-10">
<div className="text-center text-xs uppercase tracking-wider text-slate-500">Trusted by teams</div>
<div className="mt-4 flex flex-wrap items-center justify-center gap-6">
<div className="flex items-center gap-2 text-slate-600">
<div className="rounded-md border border-slate-200 bg-white px-2 py-1 text-sm font-semibold tracking-tight">ALPHA</div>
<span className="text-sm">Tech</span>
</div>
<div className="flex items-center gap-2 text-slate-600">
<div className="rounded-md border border-slate-200 bg-white px-2 py-1 text-sm font-semibold tracking-tight">NOVA</div>
<span className="text-sm">Finance</span>
</div>
<div className="flex items-center gap-2 text-slate-600">
<div className="rounded-md border border-slate-200 bg-white px-2 py-1 text-sm font-semibold tracking-tight">ACME</div>
<span className="text-sm">Group</span>
</div>
<div className="flex items-center gap-2 text-slate-600">
<div className="rounded-md border border-slate-200 bg-white px-2 py-1 text-sm font-semibold tracking-tight">ORBIT</div>
<span className="text-sm">Bank</span>
</div>
<div className="flex items-center gap-2 text-slate-600">
<div className="rounded-md border border-slate-200 bg-white px-2 py-1 text-sm font-semibold tracking-tight">ZEN</div>
<span className="text-sm">Capital</span>
</div>
</div>
</div>

<section className="py-16" id="features">
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="rounded-xl border border-slate-200 bg-white p-6 hover:border-blue-300 hover:shadow-sm cursor-pointer" id="feature-workflow">
<div className="flex items-center gap-3">
<i className="h-6 w-6 text-blue-600" data-lucide="sitemap" style={{strokeWidth: `1.5`}}></i>
<h3 className="text-lg font-semibold tracking-tight">Visual Workflow Designer</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Drag-and-drop nodes, connect logic, and publish flows that scale with your business.</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 hover:border-blue-300 hover:shadow-sm cursor-pointer" id="feature-form">
<div className="flex items-center gap-3">
<i className="h-6 w-6 text-blue-600" data-lucide="layout-template" style={{strokeWidth: `1.5`}}></i>
<h3 className="text-lg font-semibold tracking-tight">Tabbed Form Builder</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Create multi-tab forms with reusable components and structured validation.</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6 hover:border-blue-300 hover:shadow-sm cursor-pointer" id="feature-api">
<div className="flex items-center gap-3">
<i className="h-6 w-6 text-blue-600" data-lucide="plug" style={{strokeWidth: `1.5`}}></i>
<h3 className="text-lg font-semibold tracking-tight">API Configuration</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Secure endpoints, methods, and authentication settings in one place.</p>
</div>
</div>
</section>

<section className="py-12">
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" />
<div>
<div className="text-sm font-medium">Priya Sharma</div>
<div className="text-xs text-slate-500">Operations Lead</div>
</div>
</div>
<p className="mt-3 text-sm text-slate-600">“We built onboarding workflows in hours, not weeks. FlexCode is a game-changer for our team.”</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" />
<div>
<div className="text-sm font-medium">Daniel Weber</div>
<div className="text-xs text-slate-500">Head of Risk</div>
</div>
</div>
<p className="mt-3 text-sm text-slate-600">“The visual business logic flow reduced errors and improved transparency across stakeholders.”</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop" />
<div>
<div className="text-sm font-medium">Sarah Nguyen</div>
<div className="text-xs text-slate-500">Product Manager</div>
</div>
</div>
<p className="mt-3 text-sm text-slate-600">“Flexible form builder with tabs and snippets made our internal tools delightful to maintain.”</p>
</div>
</div>
</section>
</div>

<footer className="border-t border-slate-200 bg-white" id="contact">
<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
<div>
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-800 shadow-sm">
<span className="text-xs font-semibold tracking-tight">DDS</span>
</div>
<span className="text-sm font-semibold tracking-tight">Digital Deer Solutions Pvt Ltd</span>
</div>
<p className="mt-3 text-sm text-slate-600">We see, we hear, we deliver.</p>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Company</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-blue-700" href="#">About</a></li>
<li><a className="hover:text-blue-700" href="#">Careers</a></li>
<li><a className="hover:text-blue-700" href="#">Contact</a></li>
</ul>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Resources</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-blue-700" href="#">Docs</a></li>
<li><a className="hover:text-blue-700" href="#">Community</a></li>
<li><a className="hover:text-blue-700" href="#">Support</a></li>
</ul>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Legal</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-blue-700" href="#">Privacy</a></li>
<li><a className="hover:text-blue-700" href="#">Terms</a></li>
<li><a className="hover:text-blue-700" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-4">
<div className="text-xs text-slate-500">© 2025 Digital Deer Solutions Pvt Ltd</div>
<div className="flex items-center gap-3 text-slate-500">
<a className="rounded-md p-1 hover:text-blue-700" href="#"><i className="h-4 w-4" data-lucide="mail" style={{strokeWidth: `1.5`}}></i></a>
<a className="rounded-md p-1 hover:text-blue-700" href="#"><i className="h-4 w-4" data-lucide="github" style={{strokeWidth: `1.5`}}></i></a>
<a className="rounded-md p-1 hover:text-blue-700" href="#"><i className="h-4 w-4" data-lucide="twitter" style={{strokeWidth: `1.5`}}></i></a>
</div>
</div>
</div>
</footer>
</section>

<section className="hidden" id="login">
<div className="mx-auto flex min-h-[80vh] max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
<div className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:grid-cols-2">
<div className="relative hidden md:block">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<div className="flex items-center gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-800 shadow-sm">
<span className="text-sm font-semibold tracking-tight">DDS</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Digital Deer Solutions Pvt Ltd</div>
<div className="text-xs text-slate-600">We see, we hear, we deliver</div>
</div>
</div>
</div>
</div>
<div className="p-8">
<h2 className="text-2xl font-semibold tracking-tight">Welcome back</h2>
<p className="mt-1 text-sm text-slate-600">Sign in to continue to FlexCode Studio</p>
<form className="mt-6 space-y-4" id="loginForm">
<div>
<label className="mb-1 block text-sm font-medium">Email or Username</label>
<input className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="you@company.com" required type="text" />
</div>
<div>
<div className="mb-1 flex items-center justify-between">
<label className="block text-sm font-medium">Password</label>
<a className="text-xs text-blue-700 hover:underline" href="#">Forgot Password?</a>
</div>
<div className="relative">
<input className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" id="loginPassword" placeholder="••••••••" required type="password" />
<button className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-slate-700" id="togglePassword" type="button">
<i className="h-4 w-4" data-lucide="eye" style={{strokeWidth: `1.5`}}></i>
</button>
</div>
</div>
<div className="flex items-center justify-between">
<label className="inline-flex cursor-pointer items-center gap-2">
<input className="peer sr-only" type="checkbox" />
<span className="flex h-4 w-7 items-center rounded-full border border-slate-300 bg-slate-200 transition peer-checked:border-blue-500 peer-checked:bg-blue-500">
<span className="ml-[2px] h-3 w-3 rounded-full bg-white transition peer-checked:ml-[18px]"></span>
</span>
<span className="text-sm text-slate-700">Remember me</span>
</label>
<a className="text-xs text-slate-600 hover:text-blue-700" href="#">New here? Create account</a>
</div>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold tracking-tight text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" type="submit">
<i className="h-4 w-4" data-lucide="log-in" style={{strokeWidth: `1.5`}}></i>
                  Login
                </button>
<div className="text-center text-xs text-slate-500">Need help? <a className="text-blue-700 hover:underline" href="#">Contact Support</a></div>
</form>
</div>
</div>
</div>
</section>

<section className="hidden" id="app">
<div className="flex">

<aside className="fixed bottom-0 top-[57px] z-30 hidden w-72 border-r border-slate-200 bg-white lg:block" id="sidebar">
<div className="flex h-full flex-col">
<div className="px-4 py-3">
<div className="text-xs uppercase tracking-wider text-slate-500">Products</div>
<nav className="mt-3 space-y-1">
<button className="app-nav-item active flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700" data-section="dashboard">
<i className="h-4 w-4" data-lucide="home" style={{strokeWidth: `1.5`}}></i>
                    Dashboard
                  </button>
<button className="app-nav-item flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700" data-section="workflow-modules">
<i className="h-4 w-4" data-lucide="workflow" style={{strokeWidth: `1.5`}}></i>
                    Work Flow Modules
                  </button>
<button className="app-nav-item flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700" data-section="form-editor">
<i className="h-4 w-4" data-lucide="square-mouse-pointer" style={{strokeWidth: `1.5`}}></i>
                    Form Editor
                  </button>
<button className="app-nav-item flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700" data-section="workflow-modules" data-subtab="workflow-designer">
<i className="h-4 w-4" data-lucide="squares-connected" style={{strokeWidth: `1.5`}}></i>
                    Workflow Execution
                  </button>
<button className="app-nav-item flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700" data-section="api-config">
<i className="h-4 w-4" data-lucide="server-cog" style={{strokeWidth: `1.5`}}></i>
                    API Configuration
                  </button>
<button className="app-nav-item flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700" data-section="master-addition">
<i className="h-4 w-4" data-lucide="database" style={{strokeWidth: `1.5`}}></i>
                    Master Addition
                  </button>
</nav>
</div>
<div className="mt-auto border-t border-slate-200 p-4">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700" id="signOut">
<i className="h-4 w-4" data-lucide="log-out" style={{strokeWidth: `1.5`}}></i>
                  Sign out
                </button>
</div>
</div>
</aside>

<div className="min-h-[calc(100vh-57px)] w-full lg:pl-72">
<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

<div className="app-section" id="dashboard">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight">Get started with a Studio template</h2>
<p className="mt-1 text-sm text-slate-600">Choose a template to accelerate your build.</p>
</div>
<div className="hidden items-center gap-2 sm:flex">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700">
<i className="h-4 w-4" data-lucide="download" style={{strokeWidth: `1.5`}}></i>
                      Import
                    </button>
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold tracking-tight text-white hover:bg-blue-700">
<i className="h-4 w-4" data-lucide="plus" style={{strokeWidth: `1.5`}}></i>
                      New Template
                    </button>
</div>
</div>
<div className="mt-6 overflow-x-auto">
<div className="flex min-w-max gap-4">

<div className="w-72 shrink-0 rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-300">
<img alt="" className="h-36 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop" />
<div className="mt-3 text-sm font-medium">Corporate Template</div>
<div className="mt-1 text-xs text-slate-500">A general corporate workflow stack.</div>
<div className="mt-3 flex items-center gap-2">
<button className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium hover:border-blue-300 hover:text-blue-700">Preview</button>
<button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold tracking-tight text-white hover:bg-blue-700">Use</button>
</div>
</div>
<div className="w-72 shrink-0 rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-300">
<img alt="" className="h-36 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="mt-3 text-sm font-medium">Banking Template</div>
<div className="mt-1 text-xs text-slate-500">Customer onboarding and KYC workflows.</div>
<div className="mt-3 flex items-center gap-2">
<button className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium hover:border-blue-300 hover:text-blue-700">Preview</button>
<button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold tracking-tight text-white hover:bg-blue-700">Use</button>
</div>
</div>
<div className="w-72 shrink-0 rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-300">
<img alt="" className="h-36 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="mt-3 text-sm font-medium">Financial Template</div>
<div className="mt-1 text-xs text-slate-500">Expense approvals and reporting automation.</div>
<div className="mt-3 flex items-center gap-2">
<button className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium hover:border-blue-300 hover:text-blue-700">Preview</button>
<button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold tracking-tight text-white hover:bg-blue-700">Use</button>
</div>
</div>
<div className="w-72 shrink-0 rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-300">
<img alt="" className="h-36 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1200&auto=format&fit=crop" />
<div className="mt-3 text-sm font-medium">Investment Template</div>
<div className="mt-1 text-xs text-slate-500">Deal flow and investor relations pipelines.</div>
<div className="mt-3 flex items-center gap-2">
<button className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium hover:border-blue-300 hover:text-blue-700">Preview</button>
<button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold tracking-tight text-white hover:bg-blue-700">Use</button>
</div>
</div>
</div>
</div>

<div className="mt-10">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Modified Templates</h3>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700">
<i className="h-4 w-4" data-lucide="sliders-horizontal" style={{strokeWidth: `1.5`}}></i>
                      Manage
                    </button>
</div>
<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Corporate Template — v2</div>
<span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs text-blue-700">Draft</span>
</div>
<div className="mt-2 text-xs text-slate-500">Last modified: 2 days ago</div>
<div className="mt-3 flex items-center gap-2">
<button className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium hover:border-blue-300 hover:text-blue-700">Edit</button>
<button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold tracking-tight text-white hover:bg-blue-700">Publish</button>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Banking Template — Onboarding</div>
<span className="rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-xs text-green-700">Live</span>
</div>
<div className="mt-2 text-xs text-slate-500">Last modified: 5 hours ago</div>
<div className="mt-3 flex items-center gap-2">
<button className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium hover:border-blue-300 hover:text-blue-700">View</button>
<button className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium hover:border-blue-300 hover:text-blue-700">Duplicate</button>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Investment Template — Due Diligence</div>
<span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs text-amber-700">Pending</span>
</div>
<div className="mt-2 text-xs text-slate-500">Last modified: 1 week ago</div>
<div className="mt-3 flex items-center gap-2">
<button className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium hover:border-blue-300 hover:text-blue-700">Edit</button>
<button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold tracking-tight text-white hover:bg-blue-700">Publish</button>
</div>
</div>
</div>
</div>
</div>

<div className="app-section hidden" id="form-editor">
<div className="grid grid-cols-1 gap-4 lg:grid-cols-4">

<div className="lg:col-span-1">
<div className="rounded-xl border border-slate-200 bg-white">
<div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
<h3 className="text-sm font-semibold tracking-tight">Form Elements</h3>
<span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600">Drag</span>
</div>
<div>
<div className="flex">
<button className="flex-1 border-b-2 border-blue-600 px-4 py-2 text-sm font-medium text-blue-700" id="tabComponents">Components</button>
<button className="flex-1 border-b-2 border-transparent px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-700" id="tabSnippets">Snippets</button>
</div>

<div className="grid grid-cols-2 gap-3 p-4" id="componentsList">

<div className="flex cursor-grab items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:border-blue-300" data-form-el="textbox" draggable="true">
<i className="h-4 w-4 text-blue-600" data-lucide="type" style={{strokeWidth: `1.5`}}></i> Textbox
                          </div>
<div className="flex cursor-grab items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:border-blue-300" data-form-el="radio" draggable="true">
<i className="h-4 w-4 text-blue-600" data-lucide="circle-dot" style={{strokeWidth: `1.5`}}></i> Radio
                          </div>
<div className="flex cursor-grab items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:border-blue-300" data-form-el="checkbox" draggable="true">
<i className="h-4 w-4 text-blue-600" data-lucide="check-square" style={{strokeWidth: `1.5`}}></i> Checkbox
                          </div>
<div className="flex cursor-grab items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:border-blue-300" data-form-el="dropdown" draggable="true">
<i className="h-4 w-4 text-blue-600" data-lucide="chevron-down" style={{strokeWidth: `1.5`}}></i> Dropdown
                          </div>
<div className="flex cursor-grab items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:border-blue-300" data-form-el="button" draggable="true">
<i className="h-4 w-4 text-blue-600" data-lucide="mouse-pointer-click" style={{strokeWidth: `1.5`}}></i> Button
                          </div>
<div className="flex cursor-grab items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:border-blue-300" data-form-el="label" draggable="true">
<i className="h-4 w-4 text-blue-600" data-lucide="badge-info" style={{strokeWidth: `1.5`}}></i> Label
                          </div>
<div className="flex cursor-grab items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:border-blue-300" data-form-el="date" draggable="true">
<i className="h-4 w-4 text-blue-600" data-lucide="calendar" style={{strokeWidth: `1.5`}}></i> Date
                          </div>
<div className="flex cursor-grab items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:border-blue-300" data-form-el="time" draggable="true">
<i className="h-4 w-4 text-blue-600" data-lucide="clock" style={{strokeWidth: `1.5`}}></i> Time
                          </div>
<div className="flex cursor-grab items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:border-blue-300" data-form-el="file" draggable="true">
<i className="h-4 w-4 text-blue-600" data-lucide="file-up" style={{strokeWidth: `1.5`}}></i> File
                          </div>
<div className="flex cursor-grab items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:border-blue-300" data-form-el="textarea" draggable="true">
<i className="h-4 w-4 text-blue-600" data-lucide="align-left" style={{strokeWidth: `1.5`}}></i> Textarea
                          </div>
</div>

<div className="hidden space-y-3 p-4" id="snippetsList">
<div className="flex cursor-grab items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:border-blue-300" data-form-el="snippet-contact" draggable="true">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-blue-600" data-lucide="users" style={{strokeWidth: `1.5`}}></i>
                              Contact Details
                            </div>
<span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">Name, Email, Phone</span>
</div>
<div className="flex cursor-grab items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:border-blue-300" data-form-el="snippet-address" draggable="true">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-blue-600" data-lucide="home" style={{strokeWidth: `1.5`}}></i>
                              Address Block
                            </div>
<span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">Street, City, Zip</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3">
<div className="rounded-xl border border-slate-200 bg-white">
<div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="layout-template" style={{strokeWidth: `1.5`}}></i>
<h3 className="text-sm font-semibold tracking-tight">Form Builder</h3>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700" id="addFormTab">
<i className="h-4 w-4" data-lucide="plus" style={{strokeWidth: `1.5`}}></i>
                            Add Tab
                          </button>
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold tracking-tight text-white hover:bg-blue-700" id="saveForm">
<i className="h-4 w-4" data-lucide="save" style={{strokeWidth: `1.5`}}></i>
                            Save Form
                          </button>
</div>
</div>
<div className="px-4 py-3">

<div className="flex flex-wrap items-center gap-2" id="formTabsHeader">

</div>

<div className="mt-4" id="formTabsContent">

</div>
</div>
</div>
</div>
</div>
</div>

<div className="app-section hidden" id="workflow-modules">
<div className="rounded-xl border border-slate-200 bg-white">
<div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="workflow" style={{strokeWidth: `1.5`}}></i>
<h3 className="text-sm font-semibold tracking-tight">Workflow Modules</h3>
</div>
</div>

<div className="flex flex-wrap gap-1 px-4 pt-3">
<button className="wf-tab active rounded-md px-3 py-1.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200" data-wftab="business-logic">Business Logic Flow</button>
<button className="wf-tab rounded-md px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200 hover:text-blue-700" data-wftab="workflow-designer">Workflow Designer</button>
<button className="wf-tab rounded-md px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200 hover:text-blue-700" data-wftab="application-workflow">Application Workflow</button>
</div>

<div className="px-4 py-4" id="tab-business-logic">
<div className="grid grid-cols-1 gap-4 xl:grid-cols-6">

<div className="xl:col-span-1">
<div className="rounded-lg border border-slate-200 bg-white">
<div className="border-b border-slate-200 px-3 py-2 text-xs font-semibold tracking-tight">Existing Flows</div>
<div className="p-3">
<div className="space-y-2 text-sm">
<button className="w-full rounded-md border border-slate-200 px-2 py-1 text-left hover:border-blue-300 hover:text-blue-700">LoginInput</button>
<button className="w-full rounded-md border border-slate-200 px-2 py-1 text-left hover:border-blue-300 hover:text-blue-700">ProposalInput</button>
<button className="w-full rounded-md border border-slate-200 px-2 py-1 text-left hover:border-blue-300 hover:text-blue-700">ProductTypeInput</button>
</div>
<div className="mt-4">
<label className="mb-1 block text-xs font-medium">Type Workflow Name</label>
<input className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" id="flowName" placeholder="e.g., CustomerApproval" />
</div>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold tracking-tight text-white hover:bg-blue-700" id="saveFlow">
<i className="h-3.5 w-3.5" data-lucide="save" style={{strokeWidth: `1.5`}}></i> Save Flow
                              </button>
<button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700" id="publishFlow">
<i className="h-3.5 w-3.5" data-lucide="rocket" style={{strokeWidth: `1.5`}}></i> Publish
                              </button>
</div>
</div>
</div>
</div>

<div className="xl:col-span-1">
<div className="rounded-lg border border-slate-200 bg-white">
<div className="border-b border-slate-200 px-3 py-2 text-xs font-semibold tracking-tight">Flowchart Symbols</div>
<div className="grid grid-cols-2 gap-3 p-3 text-xs">
<div className="flex cursor-grab items-center gap-2 rounded-md border border-slate-200 bg-white px-2 py-1.5 hover:border-blue-300" data-symbol="start" draggable="true">
<i className="h-4 w-4 text-emerald-600" data-lucide="play-circle" style={{strokeWidth: `1.5`}}></i> Start
                            </div>
<div className="flex cursor-grab items-center gap-2 rounded-md border border-slate-200 bg-white px-2 py-1.5 hover:border-blue-300" data-symbol="input" draggable="true">
<i className="h-4 w-4 text-blue-600" data-lucide="download" style={{strokeWidth: `1.5`}}></i> Input/Output
                            </div>
<div className="flex cursor-grab items-center gap-2 rounded-md border border-slate-200 bg-white px-2 py-1.5 hover:border-blue-300" data-symbol="process" draggable="true">
<i className="h-4 w-4 text-slate-700" data-lucide="cog" style={{strokeWidth: `1.5`}}></i> Process
                            </div>
<div className="flex cursor-grab items-center gap-2 rounded-md border border-slate-200 bg-white px-2 py-1.5 hover:border-blue-300" data-symbol="decision" draggable="true">
<i className="h-4 w-4 text-amber-600" data-lucide="git-branch" style={{strokeWidth: `1.5`}}></i> Decision
                            </div>
<div className="flex cursor-grab items-center gap-2 rounded-md border border-slate-200 bg-white px-2 py-1.5 hover:border-blue-300" data-symbol="end" draggable="true">
<i className="h-4 w-4 text-rose-600" data-lucide="square" style={{strokeWidth: `1.5`}}></i> End
                            </div>
</div>
</div>
</div>

<div className="xl:col-span-4">
<div className="relative h-[520px] rounded-lg border border-slate-200 bg-slate-50" id="flowCanvas">

<div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs shadow-sm" data-node="">
<i className="h-4 w-4 text-emerald-600" data-lucide="play-circle" style={{strokeWidth: `1.5`}}></i> Start
                          </div>
<div className="absolute left-6 top-40 rounded-md border border-slate-200 bg-white p-2 text-xs shadow-sm" data-node="">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-blue-600" data-lucide="download" style={{strokeWidth: `1.5`}}></i>
                              Login Input
                            </div>
</div>
<div className="absolute left-56 top-40 rounded-md border border-slate-200 bg-white p-2 text-xs shadow-sm" data-node="">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-700" data-lucide="cog" style={{strokeWidth: `1.5`}}></i>
                              Validate User
                            </div>
</div>
<div className="absolute left-[420px] top-40 rounded-md border border-amber-200 bg-white p-2 text-xs shadow-sm" data-node="">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-amber-600" data-lucide="git-branch" style={{strokeWidth: `1.5`}}></i>
                              Decision: KYC?
                            </div>
</div>
<div className="absolute left-[640px] top-20 rounded-md border border-slate-200 bg-white p-2 text-xs shadow-sm" data-node="">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-600" data-lucide="square" style={{strokeWidth: `1.5`}}></i>
                              Approved
                            </div>
</div>
<div className="absolute left-[640px] top-64 rounded-md border border-slate-200 bg-white p-2 text-xs shadow-sm" data-node="">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-rose-600" data-lucide="square" style={{strokeWidth: `1.5`}}></i>
                              Rejected
                            </div>
</div>

<svg className="pointer-events-none absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrow" markerheight="8" markerwidth="8" orient="auto-start-reverse" refx="6" refy="4">
<path fill="#2563eb"></path>
</marker>
</defs>
<line marker-end="url(#arrow)" stroke="#2563eb" strokeWidth="2"></line>
<line marker-end="url(#arrow)" stroke="#2563eb" strokeWidth="2"></line>
<line marker-end="url(#arrow)" stroke="#2563eb" strokeWidth="2"></line>
<line marker-end="url(#arrow)" stroke="#2563eb" strokeWidth="2"></line>
<line marker-end="url(#arrow)" stroke="#2563eb" strokeWidth="2"></line>
</svg>
</div>
</div>
</div>
</div>

<div className="hidden px-4 py-4" id="tab-workflow-designer">
<div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
<div className="lg:col-span-1">
<div className="rounded-lg border border-slate-200 bg-white">
<div className="border-b border-slate-200 px-3 py-2 text-xs font-semibold tracking-tight">Node Library</div>
<div className="space-y-2 p-3 text-xs">
<div className="flex cursor-grab items-center justify-between rounded-md border border-slate-200 bg-white px-2 py-1.5 hover:border-blue-300" data-node-type="trigger" draggable="true">
<span className="flex items-center gap-2"><i className="h-4 w-4 text-amber-600" data-lucide="zap" style={{strokeWidth: `1.5`}}></i> Trigger</span>
<span className="rounded bg-slate-100 px-2 py-0.5">Start</span>
</div>
<div className="flex cursor-grab items-center justify-between rounded-md border border-slate-200 bg-white px-2 py-1.5 hover:border-blue-300" data-node-type="task" draggable="true">
<span className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-600" data-lucide="check-circle-2" style={{strokeWidth: `1.5`}}></i> Task</span>
<span className="rounded bg-slate-100 px-2 py-0.5">Action</span>
</div>
<div className="flex cursor-grab items-center justify-between rounded-md border border-slate-200 bg-white px-2 py-1.5 hover:border-blue-300" data-node-type="condition" draggable="true">
<span className="flex items-center gap-2"><i className="h-4 w-4 text-amber-600" data-lucide="forklift" style={{strokeWidth: `1.5`}}></i> Condition</span>
<span className="rounded bg-slate-100 px-2 py-0.5">If/Else</span>
</div>
<div className="flex cursor-grab items-center justify-between rounded-md border border-slate-200 bg-white px-2 py-1.5 hover:border-blue-300" data-node-type="api" draggable="true">
<span className="flex items-center gap-2"><i className="h-4 w-4 text-blue-600" data-lucide="plug" style={{strokeWidth: `1.5`}}></i> API</span>
<span className="rounded bg-slate-100 px-2 py-0.5">Call</span>
</div>
</div>
</div>
<div className="mt-4 rounded-lg border border-slate-200 bg-white p-3">
<div className="text-xs font-semibold tracking-tight">Controls</div>
<div className="mt-2 flex items-center gap-2">
<button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold tracking-tight text-white hover:bg-blue-700" id="saveDesigner">
<i className="h-3.5 w-3.5" data-lucide="save" style={{strokeWidth: `1.5`}}></i> Save
                            </button>
<button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700" id="publishDesigner">
<i className="h-3.5 w-3.5" data-lucide="rocket" style={{strokeWidth: `1.5`}}></i> Publish
                            </button>
</div>
</div>
</div>
<div className="lg:col-span-3">
<div className="relative h-[520px] rounded-lg border border-slate-200 bg-slate-50" id="designerCanvas">

<div className="absolute left-6 top-6 w-52 rounded-md border border-slate-200 bg-white p-3 text-xs shadow-sm" data-designer-node="">
<div className="flex items-center justify-between">
<span className="flex items-center gap-2 font-medium"><i className="h-4 w-4 text-amber-600" data-lucide="zap" style={{strokeWidth: `1.5`}}></i> On Form Submit</span>
<span className="rounded bg-slate-100 px-2 py-0.5">Trigger</span>
</div>
<div className="mt-2 space-y-2">
<label className="block text-[11px] text-slate-600">Source</label>
<select className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
<option>Corporate Template v2</option>
<option>Banking Onboarding</option>
</select>
</div>
</div>
<div className="absolute left-[320px] top-[180px] w-60 rounded-md border border-slate-200 bg-white p-3 text-xs shadow-sm" data-designer-node="">
<div className="flex items-center justify-between">
<span className="flex items-center gap-2 font-medium"><i className="h-4 w-4 text-blue-600" data-lucide="plug" style={{strokeWidth: `1.5`}}></i> Call KYC API</span>
<span className="rounded bg-slate-100 px-2 py-0.5">API</span>
</div>
<div className="mt-2 space-y-2">
<label className="block text-[11px] text-slate-600">Endpoint</label>
<input className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="/kyc/verify" />
</div>
</div>
<div className="absolute left-[620px] top-[100px] w-56 rounded-md border border-slate-200 bg-white p-3 text-xs shadow-sm" data-designer-node="">
<div className="flex items-center justify-between">
<span className="flex items-center gap-2 font-medium"><i className="h-4 w-4 text-emerald-600" data-lucide="check-circle-2" style={{strokeWidth: `1.5`}}></i> Approve</span>
<span className="rounded bg-slate-100 px-2 py-0.5">Task</span>
</div>
<div className="mt-2 space-y-2">
<label className="block text-[11px] text-slate-600">Assignee</label>
<input className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Ops Team" />
</div>
</div>

<svg className="pointer-events-none absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrow2" markerheight="8" markerwidth="8" orient="auto-start-reverse" refx="6" refy="4">
<path fill="#0ea5e9"></path>
</marker>
</defs>
<line marker-end="url(#arrow2)" stroke="#0ea5e9" strokeWidth="2"></line>
<line marker-end="url(#arrow2)" stroke="#0ea5e9" strokeWidth="2"></line>
</svg>
</div>
</div>
</div>
</div>

<div className="hidden px-4 py-4" id="tab-application-workflow">
<div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
<div className="rounded-lg border border-slate-200 bg-white p-4 lg:col-span-2">
<div className="flex items-center justify-between">
<h4 className="text-sm font-semibold tracking-tight">Active Workflows</h4>
<div className="flex items-center gap-2">
<button className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium hover:border-blue-300 hover:text-blue-700">Refresh</button>
<button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold tracking-tight text-white hover:bg-blue-700">Trigger Selected</button>
</div>
</div>
<div className="mt-3 overflow-hidden rounded-md border border-slate-200">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 text-xs text-slate-600">
<tr>
<th className="px-3 py-2">Workflow
<th className="px-3 py-2">Status</th>
<th className="px-3 py-2">Runs</th>
<th className="px-3 py-2">Last run</th>
<th className="px-3 py-2 text-right">Action</th>
</th></tr>
</thead>
<tbody className="divide-y divide-slate-100 bg-white">
<tr className="hover:bg-slate-50">
<td className="px-3 py-2">
<div className="font-medium">Onboarding — KYC</div>
<div className="text-xs text-slate-500">Triggers: Form Submit</div>
</td>
<td className="px-3 py-2">
<span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[11px] font-medium text-green-700 ring-1 ring-inset ring-green-200">
<span className="h-1.5 w-1.5 rounded-full bg-green-600"></span> Live
                                  </span>
</td>
<td className="px-3 py-2">1,284</td>
<td className="px-3 py-2">2 mins ago</td>
<td className="px-3 py-2">
<div className="flex items-center justify-end gap-2">
<button className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs hover:border-blue-300 hover:text-blue-700">View</button>
<button className="rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white hover:bg-blue-700">Trigger</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-3 py-2">
<div className="font-medium">Loan Approval</div>
<div className="text-xs text-slate-500">Triggers: API Webhook</div>
</td>
<td className="px-3 py-2">
<span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700 ring-1 ring-inset ring-amber-200">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> Pending
                                  </span>
</td>
<td className="px-3 py-2">412</td>
<td className="px-3 py-2">1 hour ago</td>
<td className="px-3 py-2">
<div className="flex items-center justify-end gap-2">
<button className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs hover:border-blue-300 hover:text-blue-700">View</button>
<button className="rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white hover:bg-blue-700">Trigger</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-3 py-2">
<div className="font-medium">Expense Reimbursement</div>
<div className="text-xs text-slate-500">Triggers: Schedule</div>
</td>
<td className="px-3 py-2">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span> Draft
                                  </span>
</td>
<td className="px-3 py-2">89</td>
<td className="px-3 py-2">Yesterday</td>
<td className="px-3 py-2">
<div className="flex items-center justify-end gap-2">
<button className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs hover:border-blue-300 hover:text-blue-700">Edit</button>
<button className="rounded-md bg-blue-600 px-2 py-1 text-xs font-semibold text-white hover:bg-blue-700">Trigger</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between">
<h4 className="text-sm font-semibold tracking-tight">Status Overview</h4>
<button className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs hover:border-blue-300 hover:text-blue-700" id="refreshWfChart">Refresh</button>
</div>
<div className="mt-3">
<canvas className="h-48 w-full" id="wfChart"></canvas>
</div>
<div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
<div className="rounded-md bg-green-50 p-2">
<div className="text-[10px] uppercase tracking-wide text-green-700">Live</div>
<div className="text-base font-semibold text-green-700">12</div>
</div>
<div className="rounded-md bg-amber-50 p-2">
<div className="text-[10px] uppercase tracking-wide text-amber-700">Pending</div>
<div className="text-base font-semibold text-amber-700">5</div>
</div>
<div className="rounded-md bg-slate-100 p-2">
<div className="text-[10px] uppercase tracking-wide text-slate-700">Draft</div>
<div className="text-base font-semibold text-slate-700">8</div>
</div>
</div>
</div>
</div>
</div> 
</div>
</div>

<div className="app-section hidden" id="api-config">
<div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

<div className="lg:col-span-1">
<div className="rounded-xl border border-slate-200 bg-white">
<div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
<h3 className="text-sm font-semibold tracking-tight">Endpoints</h3>
<button className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-700" id="addEndpoint">
<i className="h-3.5 w-3.5" data-lucide="plus" style={{strokeWidth: `1.5`}}></i>
                          New
                        </button>
</div>
<div className="divide-y divide-slate-100" id="endpointList">
<button className="endpoint-item flex w-full items-center justify-between px-4 py-3 text-left text-sm hover:bg-slate-50" data-id="1">
<div>
<div className="font-medium">GET /users</div>
<div className="text-xs text-slate-500">Public: false</div>
</div>
<span className="rounded bg-slate-100 px-2 py-0.5 text-[10px]">v1</span>
</button>
<button className="endpoint-item flex w-full items-center justify-between px-4 py-3 text-left text-sm hover:bg-slate-50" data-id="2">
<div>
<div className="font-medium">POST /kyc/verify</div>
<div className="text-xs text-slate-500">Auth: Bearer</div>
</div>
<span className="rounded bg-slate-100 px-2 py-0.5 text-[10px]">v1</span>
</button>
<button className="endpoint-item flex w-full items-center justify-between px-4 py-3 text-left text-sm hover:bg-slate-50" data-id="3">
<div>
<div className="font-medium">PUT /loan/{"{"}id{"}"}</div>
<div className="text-xs text-slate-500">Auth: API Key</div>
</div>
<span className="rounded bg-slate-100 px-2 py-0.5 text-[10px]">v2</span>
</button>
</div>
</div>
</div>

<div className="lg:col-span-2">
<div className="rounded-xl border border-slate-200 bg-white">
<div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="server-cog" style={{strokeWidth: `1.5`}}></i>
<h3 className="text-sm font-semibold tracking-tight">Endpoint Editor</h3>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium hover:border-blue-300 hover:text-blue-700" id="testEndpoint">
<i className="h-4 w-4" data-lucide="play"></i> Test
                          </button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700" id="saveEndpoint">
<i className="h-4 w-4" data-lucide="save"></i> Save
                          </button>
</div>
</div>
<div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
<div>
<label className="mb-1 block text-xs font-medium text-slate-600">Method</label>
<select className="w-full rounded-md border border-slate-300 px-2 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" id="apiMethod">
<option>GET</option>
<option>POST</option>
<option>PUT</option>
<option>PATCH</option>
<option>DELETE</option>
</select>
</div>
<div className="md:col-span-1">
<label className="mb-1 block text-xs font-medium text-slate-600">Version</label>
<input className="w-full rounded-md border border-slate-300 px-2 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" id="apiVersion" placeholder="v1" value="v1" />
</div>
<div className="md:col-span-2">
<label className="mb-1 block text-xs font-medium text-slate-600">Path</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" id="apiPath" placeholder="/resource" value="/users" />
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-600">Authentication</label>
<select className="w-full rounded-md border border-slate-300 px-2 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" id="apiAuth">
<option>None</option>
<option selected>Bearer</option>
<option>API Key</option>
</select>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-600">Timeout (ms)</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" id="apiTimeout" type="number" value="15000" />
</div>
<div className="md:col-span-2">
<label className="mb-1 block text-xs font-medium text-slate-600">Headers (JSON)</label>
<textarea className="min-h-[80px] w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" id="apiHeaders">{"{"} "Content-Type": "application/json" {"}"}</textarea>
</div>
<div className="md:col-span-2">
<label className="mb-1 block text-xs font-medium text-slate-600">Body (JSON)</label>
<textarea className="min-h-[120px] w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" id="apiBody">{"{"}{"}"}</textarea>
</div>
<div className="md:col-span-2">
<label className="mb-1 block text-xs font-medium text-slate-600">Response</label>
<pre className="min-h-[120px] w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700 overflow-x-auto" id="apiResponse">—</pre>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="app-section hidden" id="master-addition">
<div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
<div className="lg:col-span-2">
<div className="rounded-xl border border-slate-200 bg-white">
<div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="database" style={{strokeWidth: `1.5`}}></i>
<h3 className="text-sm font-semibold tracking-tight">Master Data</h3>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700" id="saveMaster">
<i className="h-4 w-4" data-lucide="save"></i> Save
                          </button>
</div>
</div>
<div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
<div className="md:col-span-1">
<label className="mb-1 block text-xs font-medium text-slate-600">Master Name</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" id="masterName" placeholder="e.g., Product Type" />
</div>
<div className="md:col-span-1">
<label className="mb-1 block text-xs font-medium text-slate-600">Code</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" id="masterCode" placeholder="e.g., PROD_TYPE" />
</div>
<div className="md:col-span-2">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-slate-600">Entries</label>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium hover:border-blue-300 hover:text-blue-700" id="addEntry">
<i className="h-3.5 w-3.5" data-lucide="plus"></i>
                              Add Entry
                            </button>
</div>
<div className="mt-2 space-y-2" id="entries">

<div className="entry-row grid grid-cols-12 items-center gap-2 rounded-md border border-slate-200 bg-white p-2">
<div className="col-span-5">
<input className="entry-key w-full rounded-md border border-slate-300 px-2 py-1.5 text-xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Key (e.g., RETAIL)" />
</div>
<div className="col-span-6">
<input className="entry-value w-full rounded-md border border-slate-300 px-2 py-1.5 text-xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Value (e.g., Retail Customer)" />
</div>
<div className="col-span-1 text-right">
<button className="remove-entry inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-2 text-slate-600 hover:border-rose-300 hover:text-rose-700" title="Remove">
<i className="h-3.5 w-3.5" data-lucide="trash-2"></i>
</button>
</div>
</div>
</div>
</div>
<div className="md:col-span-2">
<label className="mb-1 block text-xs font-medium text-slate-600">Description</label>
<textarea className="min-h-[80px] w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" id="masterDesc" placeholder="Describe this master..."></textarea>
</div>
</div>
</div>
</div>
<div>
<div className="rounded-xl border border-slate-200 bg-white">
<div className="border-b border-slate-200 px-4 py-3">
<h4 className="text-sm font-semibold tracking-tight">Existing Masters</h4>
</div>
<div className="divide-y divide-slate-100">
<div className="px-4 py-3">
<div className="text-sm font-medium">Product Type</div>
<div className="mt-1 flex flex-wrap gap-1">
<span className="rounded bg-slate-100 px-2 py-0.5 text-[10px]">RETAIL</span>
<span className="rounded bg-slate-100 px-2 py-0.5 text-[10px]">SME</span>
<span className="rounded bg-slate-100 px-2 py-0.5 text-[10px]">CORP</span>
</div>
</div>
<div className="px-4 py-3">
<div className="text-sm font-medium">Risk Category</div>
<div className="mt-1 flex flex-wrap gap-1">
<span className="rounded bg-slate-100 px-2 py-0.5 text-[10px]">LOW</span>
<span className="rounded bg-slate-100 px-2 py-0.5 text-[10px]">MEDIUM</span>
<span className="rounded bg-slate-100 px-2 py-0.5 text-[10px]">HIGH</span>
</div>
</div>
<div className="px-4 py-3">
<div className="text-sm font-medium">Document Type</div>
<div className="mt-1 flex flex-wrap gap-1">
<span className="rounded bg-slate-100 px-2 py-0.5 text-[10px]">PAN</span>
<span className="rounded bg-slate-100 px-2 py-0.5 text-[10px]">AADHAAR</span>
<span className="rounded bg-slate-100 px-2 py-0.5 text-[10px]">PASSPORT</span>
</div>
</div>
</div>
</div>
<div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
<div className="text-xs font-semibold tracking-tight">Usage Tips</div>
<ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-600">
<li>Keep keys uppercase and without spaces.</li>
<li>Use descriptive values visible to users.</li>
<li>Masters update instantly across forms and workflows.</li>
</ul>
</div>
</div>
</div>
</div>
</div> 
</div> 
</div> 
</section>
</main>



    </>
  );
}
