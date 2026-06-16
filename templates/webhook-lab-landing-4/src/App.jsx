import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Utilities
    const $ = (s, el=document) => el.querySelector(s);
    const $$ = (s, el=document) => [...el.querySelectorAll(s)];
    const uid = () => (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2,10));
    const now = () => new Date().toISOString();

    // State
    let state = {
      inboxId: localStorage.getItem('wh_inbox') || uid().slice(0,8),
      items: JSON.parse(localStorage.getItem('wh_items') || '[]'),
      selectedId: null,
      autoPretty: true,
      private: false,
      example: 'curl'
    };

    // Elements
    const endpointInput = $('#endpointInput');
    const inboxIdBadge = $('#inboxIdBadge');
    const inboxList = $('#inboxList');
    const reqMethod = $('#reqMethod');
    const reqPath = $('#reqPath');
    const reqTime = $('#reqTime');
    const reqIp = $('#reqIp');
    const headersList = $('#headersList');
    const bodyViewer = $('#bodyViewer');
    const queryList = $('#queryList');
    const trafficCanvas = $('#trafficChart');

    // Build endpoint from location
    function computeEndpoint() {
      const origin = location.origin || 'https://example.test';
      return `${origin}/i/${state.inboxId}`;
    }

    function setEndpoint() {
      const ep = computeEndpoint();
      endpointInput.value = ep;
      inboxIdBadge.textContent = state.inboxId;
    }

    // Render list
    function methodColor(m) {
      const map = {
        GET: 'text-emerald-700 bg-emerald-50 ring-emerald-200',
        POST: 'text-sky-700 bg-sky-50 ring-sky-200',
        PUT: 'text-amber-700 bg-amber-50 ring-amber-200',
        PATCH: 'text-fuchsia-700 bg-fuchsia-50 ring-fuchsia-200',
        DELETE: 'text-rose-700 bg-rose-50 ring-rose-200'
      };
      return map[m] || 'text-slate-700 bg-slate-50 ring-slate-200';
    }

    function statusColor(s) {
      if (s >= 500) return 'text-rose-700 bg-rose-50 ring-rose-200';
      if (s >= 400) return 'text-amber-700 bg-amber-50 ring-amber-200';
      if (s >= 200) return 'text-emerald-700 bg-emerald-50 ring-emerald-200';
      return 'text-slate-700 bg-slate-50 ring-slate-200';
    }

    function renderList(filter='') {
      inboxList.innerHTML = '';
      const items = state.items.filter(it => {
        if (!filter) return true;
        const blob = JSON.stringify(it).toLowerCase();
        return blob.includes(filter.toLowerCase());
      }).sort((a,b)=> b.ts - a.ts);

      if (!items.length) {
        inboxList.innerHTML = `
          <li class="px-4 py-10 text-center text-sm text-slate-500">
            Waiting for requests… Try “Send mock request”.
          </li>`;
      }

      items.forEach(it => {
        const li = document.createElement('li');
        li.className = "group px-3 py-3 hover:bg-slate-50 cursor-pointer";
        li.dataset.id = it.id;
        li.innerHTML = `
          <div class="flex items-center gap-3">
            <span class="inline-flex items-center px-2 h-6 rounded-md text-xs ring-1 ${methodColor(it.method)}">${it.method}</span>
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2">
                <span class="truncate text-sm text-slate-900">${it.path}</span>
                <span class="inline-flex items-center px-1.5 h-5 rounded-md text-[11px] ring-1 ${statusColor(it.status)}">${it.status}</span>
              </div>
              <div class="text-xs text-slate-500 truncate">${new Date(it.ts).toLocaleTimeString()} • ${it.ip}</div>
            </div>
            <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 group-hover:text-slate-600"></i>
          </div>`;
        inboxList.appendChild(li);
      });

      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    // Render inspector
    function renderInspector(item) {
      if (!item) {
        reqMethod.textContent = '—';
        reqPath.textContent = 'No request selected';
        reqTime.textContent = '';
        reqIp.textContent = '';
        headersList.innerHTML = '';
        bodyViewer.textContent = '';
        queryList.innerHTML = '';
        return;
      }

      reqMethod.textContent = item.method;
      reqMethod.className = `inline-flex items-center gap-2 rounded-md px-2.5 h-7 ring-1 ${methodColor(item.method)}`;
      reqPath.textContent = item.path;
      reqTime.textContent = new Date(item.ts).toLocaleString();
      reqIp.textContent = item.ip;

      headersList.innerHTML = '';
      Object.entries(item.headers || {}).forEach(([k,v]) => {
        const row = document.createElement('div');
        row.className = 'grid grid-cols-[160px_1fr] gap-2';
        row.innerHTML = `<dt class="text-slate-500">${k}</dt><dd class="text-slate-800 break-all">${v}</dd>`;
        headersList.appendChild(row);
      });

      // Query params
      queryList.innerHTML = '';
      const q = item.query || {};
      if (Object.keys(q).length === 0) {
        queryList.innerHTML = '<div class="text-slate-500 text-sm">None</div>';
      } else {
        Object.entries(q).forEach(([k,v]) => {
          const chip = document.createElement('div');
          chip.className = 'flex items-center justify-between gap-3 bg-slate-50 ring-1 ring-slate-200 rounded-md px-3 py-2';
          chip.innerHTML = `<span class="text-slate-600">${k}</span><span class="text-slate-800 break-all">${String(v)}</span>`;
          queryList.appendChild(chip);
        });
      }

      // Body
      setBody(item.body || '');

      // Update metrics
      updateMetrics();
    }

    function setBody(raw) {
      let out = raw;
      if (state.autoPretty) {
        try {
          out = JSON.stringify(typeof raw === 'string' ? JSON.parse(raw) : raw, null, 2);
        } catch {}
      }
      bodyViewer.textContent = typeof out === 'string' ? out : JSON.stringify(out, null, 2);
    }

    // Persist
    function persist() {
      localStorage.setItem('wh_inbox', state.inboxId);
      localStorage.setItem('wh_items', JSON.stringify(state.items));
    }

    // Mock request generator
    function randomRequest() {
      const methods = ['GET','POST','PUT','PATCH','DELETE'];
      const paths = ['/checkout/complete','/webhooks/stripe','/api/users','/orders','/cart/apply-coupon','/events'];
      const statuses = [200,201,202,204,400,401,403,404,409,422,500,502];
      const method = methods[Math.floor(Math.random()*methods.length)];
      const status = statuses[Math.floor(Math.random()*statuses.length)];
      const id = uid().slice(0,8);
      const ts = Date.now();
      const ip = `95.103.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;
      const path = `${paths[Math.floor(Math.random()*paths.length)]}?trace=${id}`;
      const query = { trace: id };
      const headers = {
        host: location.host || 'localhost',
        'user-agent': 'WebhookLab/1.0',
        'content-type': 'application/json'
      };
      const bodyObj = { id, ok: status < 400, ts: now(), event: 'demo.ping' };
      const body = JSON.stringify(bodyObj);
      return { id, method, path, status, ts, ip, headers, body, query };
    }

    // Select item
    function selectItem(id) {
      state.selectedId = id;
      const item = state.items.find(x => x.id === id);
      renderInspector(item);
      persist();
    }

    // Copy helpers
    async function copy(text) {
      try {
        await navigator.clipboard.writeText(text);
        toast('Copied to clipboard');
      } catch {
        toast('Copy failed');
      }
    }

    // Toast
    let toastTimer;
    function toast(msg) {
      let el = $('#toast');
      if (!el) {
        el = document.createElement('div');
        el.id = 'toast';
        el.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-3 py-2 rounded-lg bg-slate-900 text-xs text-white ring-1 ring-slate-900';
        document.body.appendChild(el);
      }
      el.textContent = msg;
      el.style.opacity = '1';
      clearTimeout(toastTimer);
      toastTimer = setTimeout(()=> el.style.opacity = '0', 1600);
    }

    // Traffic chart
    let chart;
    function ensureChart() {
      if (chart) return chart;
      chart = new Chart(trafficCanvas.getContext('2d'), {
        type: 'line',
        data: { labels: [], datasets: [{
          label: 'Requests',
          data: [],
          tension: 0.35,
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99,102,241,0.15)',
          fill: true,
          pointRadius: 0
        }]},
        options: {
          responsive: true,
          scales: {
            x: { ticks: { color: '#64748b', maxRotation: 0 }, grid: { color: 'rgba(0,0,0,0.06)'} },
            y: { ticks: { color: '#64748b' }, grid: { color: 'rgba(0,0,0,0.06)' }, beginAtZero: true }
          },
          plugins: { legend: { display:false } }
        }
      });
      return chart;
    }

    function updateMetrics() {
      const total = state.items.length;
      $('#metricTotal').textContent = String(total);
      const codes = { '2xx':0, '4xx':0, '5xx':0 };
      state.items.forEach(it => {
        if (it.status >= 500) codes['5xx']++;
        else if (it.status >= 400) codes['4xx']++;
        else if (it.status >= 200) codes['2xx']++;
      });
      $('#metric2xx').textContent = codes['2xx'];
      $('#metric4xx').textContent = codes['4xx'];
      $('#metric5xx').textContent = codes['5xx'];

      const c = ensureChart();
      // last 12 buckets (5s each)
      const nowTs = Date.now();
      const buckets = Array.from({length:12}, (_,i)=> nowTs - (11-i)*5000);
      c.data.labels = buckets.map(t => new Date(t).toLocaleTimeString([], { minute:'2-digit', second:'2-digit'}));
      c.data.datasets[0].data = buckets.map(t => state.items.filter(it => it.ts >= t-5000 && it.ts < t).length);
      c.update();
    }

    // Examples
    function renderExample() {
      const ep = computeEndpoint();
      const blocks = {
        curl: `curl -X POST '${ep}' \\
  -H 'Content-Type: application/json' \\
  -d '{"event":"demo.ping","ts":"${now()}"}'`,
        node: `import fetch from 'node-fetch';

await fetch('${ep}', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ event: 'demo.ping', ts: '${now()}' })
});`,
        python: `import requests

requests.post('${ep}', json={'event':'demo.ping','ts':'${now()}'})`
      };
      $('#exampleBlock').textContent = blocks[state.example];
    }

    // Tabs
    function switchTab(to) {
      $$('.tab-btn').forEach(b => b.setAttribute('aria-selected', b.dataset.tab === to ? 'true':'false'));
      ['inspect','examples','settings','metrics'].forEach(t => {
        const el = $('#tab-' + t);
        if (!el) return;
        el.classList.toggle('hidden', t !== to);
      });
    }

    // Init
    function init() {
      setEndpoint();
      renderList();
      renderInspector(state.items[0]);
      switchTab('inspect');
      renderExample();
      updateMetrics();
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    // Event listeners
    $('#copyEndpoint').addEventListener('click', ()=> copy(endpointInput.value));
    $('#rotateEndpoint').addEventListener('click', ()=> {
      state.inboxId = uid().slice(0,8);
      state.items = [];
      state.selectedId = null;
      setEndpoint();
      renderList();
      renderInspector(null);
      updateMetrics();
      persist();
      toast('New inbox created');
    });
    $('#newInboxBtn').addEventListener('click', ()=> $('#rotateEndpoint').click());
    $('#clearInbox').addEventListener('click', ()=> {
      state.items = [];
      state.selectedId = null;
      renderList();
      renderInspector(null);
      updateMetrics();
      persist();
    });
    $('#sendMock').addEventListener('click', ()=> {
      const item = randomRequest();
      state.items.push(item);
      state.selectedId = item.id;
      renderList($('#searchInput').value);
      selectItem(item.id);
      persist();
      updateMetrics();
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });
    inboxList.addEventListener('click', (e)=> {
      const li = e.target.closest('li[data-id]');
      if (!li) return;
      selectItem(li.dataset.id);
    });
    $('#copyHeaders').addEventListener('click', ()=> {
      const item = state.items.find(x => x.id === state.selectedId);
      if (item) copy(JSON.stringify(item.headers, null, 2));
    });
    $('#copyBody').addEventListener('click', ()=> {
      const item = state.items.find(x => x.id === state.selectedId);
      if (item) copy(typeof item.body === 'string' ? item.body : JSON.stringify(item.body));
    });
    $('#copyQuery').addEventListener('click', ()=> {
      const item = state.items.find(x => x.id === state.selectedId);
      if (item) copy(JSON.stringify(item.query || {}, null, 2));
    });
    $('#copyAsCurl').addEventListener('click', ()=> {
      const item = state.items.find(x => x.id === state.selectedId);
      if (!item) return;
      const lines = [
        `curl -X ${item.method} '${computeEndpoint()}'`,
        ...Object.entries(item.headers || {}).map(([k,v]) => `  -H '${k}: ${v}'`),
      ];
      if (item.body) lines.push(`  -d '${typeof item.body === 'string' ? item.body : JSON.stringify(item.body)}'`);
      copy(lines.join(' \\\n'));
    });
    $('#replayBtn').addEventListener('click', ()=> {
      const item = state.items.find(x => x.id === state.selectedId);
      if (!item) return toast('Select a request first');
      const url = $('#forwardUrl').value || computeEndpoint();
      $('#replayInfo').textContent = 'Sending…';
      fetch(url, {
        method: item.method,
        headers: item.headers,
        body: ['GET','HEAD'].includes(item.method) ? undefined : item.body
      }).then(r => {
        $('#replayInfo').textContent = `Replayed to ${url} — status ${r.status}`;
        updateMetrics();
      }).catch(()=>{
        $('#replayInfo').textContent = `Attempted replay to ${url} (CORS or network may block in demo)`;
      });
    });
    $('#forwardBtn').addEventListener('click', ()=> $('#replayBtn').click());
    $('#togglePretty').addEventListener('click', ()=> {
      state.autoPretty = !state.autoPretty;
      const item = state.items.find(x => x.id === state.selectedId);
      if (item) setBody(item.body || '');
    });
    $('#toggleAutoPretty').addEventListener('click', (e)=> {
      state.autoPretty = !state.autoPretty;
      e.currentTarget.querySelector('.dot').classList.toggle('translate-x-6');
      e.currentTarget.classList.toggle('bg-indigo-100');
      e.currentTarget.classList.toggle('bg-slate-200');
      const item = state.items.find(x => x.id === state.selectedId);
      if (item) setBody(item.body || '');
    });
    $('#togglePrivacy').addEventListener('click', (e)=> {
      state.private = !state.private;
      e.currentTarget.querySelector('.dot').classList.toggle('translate-x-6');
      e.currentTarget.classList.toggle('bg-slate-200');
      e.currentTarget.classList.toggle('bg-indigo-100');
      toast(state.private ? 'Inbox set to private' : 'Inbox set to public');
    });
    $('#searchInput').addEventListener('input', (e)=> renderList(e.target.value));

    // Example tabs
    $$('.ex-btn').forEach(btn => btn.addEventListener('click', (e)=> {
      $$('.ex-btn').forEach(b => { b.classList.remove('bg-slate-100','text-slate-900'); b.classList.add('text-slate-600'); });
      e.currentTarget.classList.add('bg-slate-100','text-slate-900');
      state.example = e.currentTarget.dataset.ex;
      renderExample();
    }));
    $('#copyExample').addEventListener('click', ()=> copy($('#exampleBlock').textContent));

    // Keyboard: select first item with Enter
    document.addEventListener('keydown', (e)=> {
      if (e.key === 'Enter' && !state.selectedId && state.items.length) {
        selectItem(state.items[state.items.length-1].id);
      }
    });

    // Tab switching
    $$('.tab-btn').forEach(b => b.addEventListener('click', ()=> switchTab(b.dataset.tab)));

    // Initial render
    init();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hidden"></div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
<div className="mx-auto max-w-none px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow ring-1 ring-black/5"></div>
<span className="text-lg tracking-tight font-semibold">Webhook Lab</span>
<span className="ml-3 hidden md:inline-flex text-xs text-slate-500 px-2 py-1 rounded-md ring-1 ring-slate-200 bg-white">Ephemeral endpoints</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
<a className="hover:text-slate-900" href="#">Docs</a>
<a className="hover:text-slate-900" href="#">Pricing</a>
<a className="hover:text-slate-900" href="#">Changelog</a>
<a className="hover:text-slate-900 flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="github"></i> GitHub
        </a>
</nav>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg bg-white px-3.5 h-9 text-sm text-slate-900 hover:bg-slate-50 ring-1 ring-slate-200" id="newInboxBtn">
<i className="w-4 h-4" data-lucide="plus"></i>
          New Inbox
        </button>
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-indigo-500/90 hover:bg-indigo-500 px-3.5 h-9 text-sm text-white">
<i className="w-4 h-4" data-lucide="log-in"></i>
          Sign in
        </button>
</div>
</div>
</header>

<main className="mx-auto max-w-none px-4 sm:px-6 lg:px-8 py-8">

<section className="mb-6">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<h1 className="text-3xl md:text-4xl tracking-tight font-semibold">Capture, inspect and replay webhooks instantly</h1>
<p className="mt-2 text-slate-600 text-sm md:text-base">A temporary, unique URL to receive requests. Use it in any integration while developing or debugging.</p>
</div>
<div className="grid w-full md:w-auto gap-2">
<div className="flex items-center gap-2">
<div className="flex-1 md:w-[520px]">
<div className="group flex items-center gap-2 rounded-xl bg-white ring-1 ring-slate-200 px-3 py-2.5">
<i className="w-4.5 h-4.5 text-indigo-500" data-lucide="webhook"></i>
<input className="flex-1 bg-transparent text-sm md:text-[15px] font-medium tracking-tight text-slate-900 outline-none caret-transparent" id="endpointInput" readonly="" value=""/>
<button className="shrink-0 inline-flex items-center gap-1.5 rounded-md bg-slate-50 hover:bg-slate-100 px-2.5 h-8 text-xs text-slate-700 ring-1 ring-slate-200" id="copyEndpoint">
<i className="w-3.5 h-3.5" data-lucide="copy"></i> Copy
                </button>
<button className="shrink-0 inline-flex items-center gap-1.5 rounded-md bg-slate-50 hover:bg-slate-100 px-2.5 h-8 text-xs text-slate-700 ring-1 ring-slate-200" id="rotateEndpoint">
<i className="w-3.5 h-3.5" data-lucide="rotate-ccw"></i> Rotate
                </button>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 px-3.5 h-9 text-sm text-white" id="sendMock">
<i className="w-4 h-4" data-lucide="rocket"></i> Send mock request
            </button>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live capture enabled
            </div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6">

<aside className="rounded-2xl bg-white ring-1 ring-slate-200 overflow-hidden lg:sticky lg:top-20 self-start">
<div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-900">Inbox</span>
<span className="text-[11px] text-slate-600 px-2 py-0.5 rounded-md bg-slate-50 ring-1 ring-slate-200" id="inboxIdBadge"></span>
</div>
<div className="flex items-center gap-2">
<button className="text-xs text-slate-600 hover:text-slate-900 inline-flex items-center gap-1" id="clearInbox">
<i className="w-3.5 h-3.5" data-lucide="trash-2"></i> Clear
            </button>
</div>
</div>
<div className="px-3 py-3 border-b border-slate-200 bg-white">
<div className="flex items-center gap-2">
<div className="relative flex-1">
<i className="absolute left-2.5 top-2.5 w-4 h-4 text-slate-400" data-lucide="search"></i>
<input className="w-full pl-8 pr-3 h-9 text-sm rounded-lg bg-white ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-indigo-500/50" id="searchInput" placeholder="Search headers, path, body…"/>
</div>
<button className="h-9 px-3 rounded-lg text-xs bg-slate-50 ring-1 ring-slate-200 text-slate-700 hover:bg-slate-100" id="exportBtn">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
</button>
</div>
</div>
<div className="max-h-[60vh] lg:max-h-[68vh] overflow-auto bg-white" id="listContainer">
<ul className="divide-y divide-slate-100" id="inboxList">

</ul>
</div>
</aside>

<section className="space-y-6">

<div className="rounded-2xl bg-white ring-1 ring-slate-200 overflow-hidden">
<div className="flex items-center justify-between border-b border-slate-200">
<div className="flex text-sm">
<button aria-selected="true" className="tab-btn px-4 h-10 text-slate-600 hover:text-slate-900 aria-selected:text-slate-900 aria-selected:bg-slate-50" data-tab="inspect">Inspector</button>
<button className="tab-btn px-4 h-10 text-slate-600 hover:text-slate-900" data-tab="examples">Examples</button>
<button className="tab-btn px-4 h-10 text-slate-600 hover:text-slate-900" data-tab="settings">Settings</button>
<button className="tab-btn px-4 h-10 text-slate-600 hover:text-slate-900" data-tab="metrics">Metrics</button>
</div>
<div className="flex items-center gap-2 px-3">
<button className="inline-flex items-center gap-1.5 text-xs bg-slate-50 hover:bg-slate-100 px-3 h-8 rounded-md ring-1 ring-slate-200 text-slate-700" id="replayBtn">
<i className="w-3.5 h-3.5" data-lucide="refresh-ccw"></i> Replay
              </button>
<button className="inline-flex items-center gap-1.5 text-xs bg-slate-50 hover:bg-slate-100 px-3 h-8 rounded-md ring-1 ring-slate-200 text-slate-700" id="copyAsCurl">
<i className="w-3.5 h-3.5" data-lucide="terminal"></i> Copy as cURL
              </button>
</div>
</div>

<div className="p-4 grid gap-4" id="tab-inspect">
<div className="flex flex-wrap items-center gap-2 text-sm">
<span className="inline-flex items-center gap-2 rounded-md bg-emerald-50 text-emerald-700 px-2.5 h-7 ring-1 ring-emerald-200" id="reqMethod">GET</span>
<span className="truncate text-slate-700" id="reqPath"></span>
<span className="text-slate-500 text-xs" id="reqTime"></span>
<span className="ml-auto text-slate-500 text-xs" id="reqIp"></span>
</div>
<div className="grid lg:grid-cols-2 gap-4">
<div className="rounded-xl bg-white ring-1 ring-slate-200">
<div className="flex items-center justify-between px-4 py-2 border-b border-slate-200">
<div className="flex items-center gap-2 text-sm text-slate-700">
<i className="w-4 h-4" data-lucide="list"></i> Headers
                  </div>
<button className="text-xs text-slate-600 hover:text-slate-900" id="copyHeaders">Copy</button>
</div>
<div className="p-4">
<dl className="grid grid-cols-1 gap-2 text-[13px]" id="headersList">

</dl>
</div>
</div>
<div className="rounded-xl bg-white ring-1 ring-slate-200">
<div className="flex items-center justify-between px-4 py-2 border-b border-slate-200">
<div className="flex items-center gap-2 text-sm text-slate-700">
<i className="w-4 h-4" data-lucide="file-text"></i> Body
                  </div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900" id="togglePretty">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i> Pretty JSON
                    </button>
<button className="text-xs text-slate-600 hover:text-slate-900" id="copyBody">Copy</button>
</div>
</div>
<div className="p-0">
<pre className="max-h-[300px] overflow-auto p-4 text-[13px] leading-relaxed bg-slate-50 text-slate-800" id="bodyViewer"></pre>
</div>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-4">
<div className="rounded-xl bg-white ring-1 ring-slate-200">
<div className="flex items-center justify-between px-4 py-2 border-b border-slate-200">
<div className="flex items-center gap-2 text-sm text-slate-700">
<i className="w-4 h-4" data-lucide="split"></i> Query params
                  </div>
<button className="text-xs text-slate-600 hover:text-slate-900" id="copyQuery">Copy</button>
</div>
<div className="p-4 grid gap-2 text-[13px]" id="queryList">

</div>
</div>
<div className="rounded-xl bg-white ring-1 ring-slate-200">
<div className="flex items-center justify-between px-4 py-2 border-b border-slate-200">
<div className="flex items-center gap-2 text-sm text-slate-700">
<i className="w-4 h-4" data-lucide="repeat"></i> Forward / Replay
                  </div>
</div>
<div className="p-4 grid gap-3">
<div className="flex items-center gap-2">
<input className="flex-1 h-9 rounded-lg bg-white ring-1 ring-slate-200 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-indigo-500/50" id="forwardUrl" placeholder="Forward to URL (e.g. https://localhost:3000/webhooks)"/>
<button className="h-9 px-3 rounded-lg text-xs bg-slate-50 ring-1 ring-slate-200 text-slate-700 hover:bg-slate-100" id="forwardBtn">Send</button>
</div>
<p className="text-xs text-slate-500" id="replayInfo">Replay the selected request to any URL. We’ll include original headers and body.</p>
</div>
</div>
</div>
</div>

<div className="hidden p-4" id="tab-examples">
<div className="mb-3">
<p className="text-sm text-slate-700">Use your unique URL below in any integration. Choose a language to copy a ready-made snippet.</p>
</div>
<div className="rounded-xl bg-white ring-1 ring-slate-200 overflow-hidden">
<div className="flex items-center gap-2 px-3 py-2 border-b border-slate-200">
<button className="ex-btn text-xs px-3 h-8 rounded-md bg-slate-100 text-slate-900" data-ex="curl">cURL</button>
<button className="ex-btn text-xs px-3 h-8 rounded-md text-slate-600 hover:text-slate-900" data-ex="node">Node</button>
<button className="ex-btn text-xs px-3 h-8 rounded-md text-slate-600 hover:text-slate-900" data-ex="python">Python</button>
<button className="ml-auto inline-flex items-center gap-1.5 text-xs bg-slate-50 hover:bg-slate-100 px-3 h-8 rounded-md ring-1 ring-slate-200 text-slate-700" id="copyExample">
<i className="w-3.5 h-3.5" data-lucide="copy"></i> Copy
                </button>
</div>
<div className="p-4">
<pre className="text-[13px] leading-relaxed text-slate-800 overflow-auto" id="exampleBlock"><code></code></pre>
</div>
</div>
</div>

<div className="hidden p-4" id="tab-settings">
<div className="grid md:grid-cols-2 gap-4">
<div className="rounded-xl bg-white ring-1 ring-slate-200 p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-[15px] tracking-tight font-semibold">Privacy</h3>
<p className="text-xs text-slate-500 mt-1">Hide your inbox from unlisted visitors.</p>
</div>
<button className="group relative inline-flex h-7 w-12 items-center rounded-full bg-slate-200 ring-1 ring-slate-300 transition" id="togglePrivacy">
<span className="sr-only">Toggle privacy</span>
<span className="dot translate-x-1 inline-block h-5 w-5 rounded-full bg-white transition"></span>
</button>
</div>
</div>
<div className="rounded-xl bg-white ring-1 ring-slate-200 p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-[15px] tracking-tight font-semibold">Auto-format JSON</h3>
<p className="text-xs text-slate-500 mt-1">Pretty-print JSON payloads in the inspector.</p>
</div>
<button className="group relative inline-flex h-7 w-12 items-center rounded-full bg-indigo-100 ring-1 ring-indigo-200 transition" id="toggleAutoPretty">
<span className="sr-only">Toggle pretty</span>
<span className="dot translate-x-6 inline-block h-5 w-5 rounded-full bg-white transition"></span>
</button>
</div>
</div>
</div>
</div>

<div className="hidden p-4" id="tab-metrics">
<h2 className="text-lg tracking-tight font-semibold">Traffic</h2>
<p className="text-sm text-slate-700">Requests captured over the last few minutes.</p>
<div className="mt-4 rounded-xl bg-white ring-1 ring-slate-200 p-4">
<div>
<div className="h-56">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">

<div className="h-full"><canvas id="trafficChart"></canvas></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-slate-700">
<div className="rounded-lg bg-slate-50 ring-1 ring-slate-200 p-2">
<div className="text-slate-500">Total</div>
<div className="mt-0.5 text-base font-semibold" id="metricTotal">0</div>
</div>
<div className="rounded-lg bg-slate-50 ring-1 ring-slate-200 p-2">
<div className="text-slate-500">2xx</div>
<div className="mt-0.5 text-base font-semibold" id="metric2xx">0</div>
</div>
<div className="rounded-lg bg-slate-50 ring-1 ring-slate-200 p-2">
<div className="text-slate-500">4xx</div>
<div className="mt-0.5 text-base font-semibold" id="metric4xx">0</div>
</div>
<div className="rounded-lg bg-slate-50 ring-1 ring-slate-200 p-2">
<div className="text-slate-500">5xx</div>
<div className="mt-0.5 text-base font-semibold" id="metric5xx">0</div>
</div>
</div>
</div>
</div>
</div>

<div className="text-xs text-slate-500">
          Your inbox is temporary. Keep the page open to receive requests. Data is stored locally in your browser for this demo.
        </div>
</section>
</section>
</main>
<footer className="mt-10 border-t border-slate-200">
<div className="mx-auto max-w-none px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="shield"></i>
<span>Public demo. Do not send secrets.</span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-slate-900" href="#">Status</a>
<a className="hover:text-slate-900" href="#">Security</a>
<a className="hover:text-slate-900" href="#">Privacy</a>
</div>
</div>
</footer>


    </>
  );
}
