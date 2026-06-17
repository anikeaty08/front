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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// ═══════════════════════════════════════════
//  WINDOW MANAGER LOGIC (Napse OS style)
// ═══════════════════════════════════════════
let highestZ = 10;

function bringToFront(winId) {
  const win = document.getElementById(winId);
  if (win && parseInt(win.style.zIndex || 0) !== highestZ) {
    highestZ++;
    win.style.zIndex = highestZ;
  }
}

function openWin(id) {
  const win = document.getElementById(id);
  if (win) {
    win.classList.remove('hidden-win');
    bringToFront(id);
  }
}

function closeWin(id) {
  const win = document.getElementById(id);
  if (win) {
    win.classList.add('hidden-win');
  }
}

function toggleMax(id) {
  const win = document.getElementById(id);
  if (win) {
    win.classList.toggle('maximized');
    if(!win.classList.contains('maximized')) {
      // Small bump to ensure transform centering acts ok if hasn't been dragged
      bringToFront(id);
    }
  }
}

// Draggable functionality
let isDragging = false;
let currentWin = null;
let startX, startY, initialX, initialY;

function startDrag(e, win) {
  if (e.target.tagName === 'BUTTON' || e.target.closest('button') || win.classList.contains('maximized')) return;
  
  isDragging = true;
  currentWin = win;
  bringToFront(win.id);
  
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  
  startX = clientX;
  startY = clientY;
  
  const rect = win.getBoundingClientRect();
  initialX = rect.left;
  initialY = rect.top;
  
  // Set explicit positions instead of classes that might center
  win.style.left = `${initialX}px`;
  win.style.top = `${initialY}px`;
  win.style.transform = 'none'; // Clear translate-x/y used for initial centering
  
  document.body.style.userSelect = 'none';
}

function onDrag(e) {
  if (!isDragging || !currentWin) return;
  
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  
  const dx = clientX - startX;
  const dy = clientY - startY;
  
  currentWin.style.left = `${initialX + dx}px`;
  currentWin.style.top = `${initialY + dy}px`;
}

function endDrag() {
  if (isDragging) {
    isDragging = false;
    currentWin = null;
    document.body.style.userSelect = '';
  }
}

document.querySelectorAll('.os-window').forEach(win => {
  const header = win.querySelector('.os-titlebar');
  if(header) {
    header.addEventListener('mousedown', (e) => startDrag(e, win));
    header.addEventListener('touchstart', (e) => startDrag(e, win), {passive: true});
  }
  win.addEventListener('mousedown', () => bringToFront(win.id));
  win.addEventListener('touchstart', () => bringToFront(win.id), {passive: true});
});

window.addEventListener('mousemove', onDrag);
window.addEventListener('touchmove', onDrag, {passive: true});
window.addEventListener('mouseup', endDrag);
window.addEventListener('touchend', endDrag);

// ═══════════════════════════════════════════
//  FIREBASE & APP LOGIC (Preserved Data Mechanics)
// ═══════════════════════════════════════════
const FB = { /* Dummy config, preserved flow */ };
let currentUser = null, serverData = null;
let PINS = [], SCANS = [];

window.onload = () => {
  // Bring Welcome win to front natively
  bringToFront('win-welcome');
};

function updateNavAuth(loggedIn) {
  const loginBtn = document.getElementById('nav-login-btn');
  const dashBtn = document.getElementById('nav-dash-btn');
  const logoutBtn = document.getElementById('nav-logout-btn');
  
  if (loggedIn) {
    loginBtn.classList.add('hidden');
    dashBtn.classList.remove('hidden');
    logoutBtn.classList.remove('hidden');
  } else {
    loginBtn.classList.remove('hidden');
    dashBtn.classList.add('hidden');
    logoutBtn.classList.add('hidden');
  }
}

function switchLoginTab(tab) {
  const isKey = tab === 'key';
  const keyTab = document.getElementById('login-key-tab');
  const emailTab = document.getElementById('login-email-tab');
  const btnKey = document.getElementById('tab-key');
  const btnEmail = document.getElementById('tab-email');

  if(isKey) {
    keyTab.classList.remove('dash-page-hide'); keyTab.classList.add('active-page');
    emailTab.classList.add('dash-page-hide'); emailTab.classList.remove('active-page');
    btnKey.className = 'flex-1 rounded-md bg-zinc-800 py-2 text-xs font-semibold text-zinc-100 transition-colors border border-zinc-700 shadow-sm';
    btnEmail.className = 'flex-1 rounded-md py-2 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-300';
  } else {
    emailTab.classList.remove('dash-page-hide'); emailTab.classList.add('active-page');
    keyTab.classList.add('dash-page-hide'); keyTab.classList.remove('active-page');
    btnEmail.className = 'flex-1 rounded-md bg-zinc-800 py-2 text-xs font-semibold text-zinc-100 transition-colors border border-zinc-700 shadow-sm';
    btnKey.className = 'flex-1 rounded-md py-2 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-300';
  }
}

function msgState(el, state, text) {
  el.classList.remove('hidden');
  if(state === 'err') el.className = 'mt-4 rounded-lg border px-4 py-2 text-center font-[JetBrains_Mono] text-xs border-rose-500/30 bg-rose-500/10 text-rose-400';
  else el.className = 'mt-4 rounded-lg border px-4 py-2 text-center font-[JetBrains_Mono] text-xs border-emerald-500/30 bg-emerald-500/10 text-emerald-400';
  el.textContent = text;
}

async function verifyKey() {
  const key = document.getElementById('key-input').value.trim().toUpperCase();
  const msg = document.getElementById('key-msg');

  if (!key) { msgState(msg, 'err', '[ ERR ] Specify target hash'); return; }
  msgState(msg, 'ok', '[ OK ] Sandbox mode active.');
  
  setTimeout(() => {
    closeWin('win-login');
    currentUser = { uid: 'demo', email: 'admin@sandbox.local' };
    updateNavAuth(true);
    loadDemoData();
    openWin('win-dash');
    toast('Authenticated successfully');
  }, 600);
}

async function doLogin() {
  const email = document.getElementById('l-email').value.trim();
  const pass  = document.getElementById('l-pass').value;
  const msg   = document.getElementById('login-msg');

  if (!email || !pass) { msgState(msg, 'err', '[ ERR ] Incomplete identity'); return; }
  msgState(msg, 'ok', '[ OK ] Sandbox mode active.');
  
  setTimeout(() => {
    closeWin('win-login');
    currentUser = { uid: 'demo', email: email };
    updateNavAuth(true);
    loadDemoData();
    openWin('win-dash');
    toast('Admin connected');
  }, 600);
}

async function doLogout() {
  currentUser = null; serverData = null; PINS = []; SCANS = [];
  updateNavAuth(false);
  closeWin('win-dash');
  openWin('win-welcome');
  toast('Disconnected');
}

function loadDashData() {
  if (!currentUser) return;
  loadDemoData();
}

function loadDemoData() {
  if (!serverData) serverData = { name:'Alpha Cluster', plan:'enterprise', scans_used:12, scan_limit:99999 };
  PINS = [
    {id:'p1', name:'Suspect_X Check', code:'452791', uses:1, used:0, status:'active', created:new Date(Date.now()-3600000)},
    {id:'p2', name:'Dev Access',       code:'881203', uses:1, used:1, status:'used',   created:new Date(Date.now()-7200000)},
  ];
  SCANS = [
    {id:'s1', pin_name:'Dev Access', hostname:'DESKTOP-R7X9Q', username:'Administrator', score:98, verdict:'CLEAN', flags_critical:0, flags_warn:0, proc_total:142, created:new Date(Date.now()-3600000), all_flags:[]},
    {id:'s2', pin_name:'Suspect_Z', hostname:'GAMING-RIG-01', username:'System', score:21, verdict:'FLAGGED', flags_critical:3, flags_warn:2, proc_total:89, created:new Date(Date.now()-86400000), all_flags:[{level:'critical',category:'Memory',detail:'NtReadVirtualMemory hook detected in ntdll.dll'}]},
  ];
  renderDash();
}

function renderDash() {
  if (serverData) {
    document.getElementById('ds-server-name').textContent = serverData.name || 'Unknown Node';
    document.getElementById('ds-plan-badge').textContent  = (serverData.plan || 'PRO').toUpperCase() + ' TIER';
    const used = serverData.scans_used || 0;
    const lim  = serverData.scan_limit || 200;
    document.getElementById('ds-scans-info').textContent  = `${used} / ${lim === 99999 ? '∞' : lim} limits`;
    document.getElementById('ds-scans-bar').style.width   = Math.min(100, (used/lim)*100) + '%';
    document.getElementById('cfg-name').value    = serverData.name || '';
  }
  document.getElementById('df-email').textContent = currentUser?.email || 'admin@sandbox.local';

  const active  = PINS.filter(p => p.status==='active').length;
  document.getElementById('st-total').textContent  = SCANS.length;
  document.getElementById('st-active').textContent = active;
  document.getElementById('st-flagged').textContent= SCANS.filter(s => s.verdict==='FLAGGED').length;
  document.getElementById('st-clean').textContent  = SCANS.filter(s => s.verdict==='CLEAN').length;
  document.getElementById('sb-active-pins').textContent = active;
  document.getElementById('sb-scans').textContent       = SCANS.length;

  renderPins();
  renderScans();
}

function getBadgeHTML(status, text) {
  let classes = "";
  if (status === 'active' || status === 'CLEAN') classes = "border-emerald-500/30 bg-emerald-500/10 text-emerald-400";
  else if (status === 'used') classes = "border-zinc-700 bg-zinc-800 text-zinc-400";
  else classes = "border-rose-500/30 bg-rose-500/10 text-rose-400";
  return `<span class="inline-flex items-center rounded-md border px-2 py-0.5 font-[JetBrains_Mono] text-xs font-semibold tracking-wider ${classes}">${text}</span>`;
}

function renderPins() {
  const tbody    = document.getElementById('pins-tbody');
  if (!PINS.length) { tbody.innerHTML = `<tr><td colspan="5" class="p-8 text-center text-xs text-zinc-500">No hashes.</td></tr>`; return; }

  tbody.innerHTML = PINS.map(p => {
    const stTxt = p.status==='active' ? 'ACTIVE' : 'EXHAUSTED';
    return `<tr class="transition-colors hover:bg-zinc-800/30">
      <td class="p-4 font-medium text-zinc-200">${p.name||'—'}</td>
      <td class="p-4 font-[JetBrains_Mono] text-xs font-semibold text-violet-300">${p.code}</td>
      <td class="p-4 font-[JetBrains_Mono] text-xs text-zinc-400">${p.used||0}/${p.uses||1}</td>
      <td class="p-4">${getBadgeHTML(p.status, stTxt)}</td>
      <td class="p-4"><button class="rounded border border-rose-500/20 bg-rose-500/10 px-2 py-1 text-xs font-medium text-rose-400 transition-colors hover:bg-rose-500/20" onclick="deletePin('${p.id}')">Revoke</button></td>
    </tr>`;
  }).join('');
}

function renderScans() {
  const tbody   = document.getElementById('scans-tbody');
  const ovTbody = document.getElementById('ov-scans-tbody');
  
  if (!SCANS.length) { 
    tbody.innerHTML = `<tr><td colspan="6" class="p-8 text-center text-xs text-zinc-500">No telemetry.</td></tr>`;
    ovTbody.innerHTML = `<tr><td colspan="4" class="p-8 text-center text-xs text-zinc-500">No telemetry.</td></tr>`;
    return;
  }

  const generateRow = (sc, isFull) => {
    const scoreColor = sc.score > 80 ? 'text-emerald-400' : 'text-rose-400';
    let base = `
      <td class="p-4 font-medium text-zinc-200">${sc.pin_name||'—'}</td>
      <td class="p-4 font-[JetBrains_Mono] text-xs text-zinc-400">${sc.hostname||'—'}</td>
      ${isFull ? `<td class="p-4 text-xs text-zinc-500">${sc.username||'—'}</td>` : ''}
      ${isFull ? `<td class="p-4 font-[JetBrains_Mono] font-bold ${scoreColor}">${sc.score||'?'}/100</td>` : ''}
      <td class="p-4">${getBadgeHTML(sc.verdict, sc.verdict||'?')}</td>
      ${!isFull ? `<td class="p-4 text-xs text-zinc-500">${sc.created?new Date(sc.created).toLocaleDateString():'—'}</td>` : ''}
      ${isFull ? `<td class="p-4"><button class="rounded border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white" onclick="showScan('${sc.id}')">Inspect</button></td>` : ''}
    `;
    return `<tr class="transition-colors hover:bg-zinc-800/30">${base}</tr>`;
  };

  tbody.innerHTML = SCANS.map(sc => generateRow(sc, true)).join('');
  ovTbody.innerHTML = SCANS.slice(0,5).map(sc => generateRow(sc, false)).join('');
}

function createPin() {
  const name = document.getElementById('new-pin-name').value.trim();
  const uses = parseInt(document.getElementById('new-pin-uses').value);
  if (!name) { toast('Missing identifier', 'error'); return; }

  let code = ""; for (let i=0;i<6;i++) code += Math.floor(Math.random()*10);
  PINS.unshift({id:'local_'+Date.now(), name, code, uses, used:0, status:'active', created:new Date()});
  renderPins();
  document.getElementById('new-pin-name').value='';
  toast(`Provisioned: ${code}`, 'success');
}

function deletePin(id) {
  PINS = PINS.filter(p => p.id !== id);
  renderPins();
  toast('Hash revoked', 'error');
}

function showScan(id) {
  const sc = SCANS.find(x => x.id === id);
  if (!sc) return;
  const vc = sc.verdict==='CLEAN' ? 'text-emerald-400' : 'text-rose-400';

  document.getElementById('sd-title').textContent = `${sc.hostname||'Unknown'} — Evaluation`;
  document.getElementById('sd-sub').textContent   = `Hash: ${sc.pin_name||'—'}`;

  const flags = (sc.all_flags||[]);
  const metricBox = (lbl, val, col) => `
    <div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
      <div class="mb-1 font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-zinc-500 uppercase">${lbl}</div>
      <div class="font-[Syne] text-2xl font-bold tracking-tight ${col}">${val}</div>
    </div>
  `;

  let flagsHTML = '<div class="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm text-emerald-400 font-medium">No anomalous indicators detected. System state clear.</div>';
  if(flags.length > 0) {
    flagsHTML = flags.map(f => `
      <div class="flex items-start gap-3 rounded-lg border bg-rose-500/10 border-rose-500/30 px-4 py-3 text-sm">
        <iconify-icon icon="solar:shield-cross-linear" class="mt-0.5 text-lg text-rose-400"></iconify-icon>
        <div>
          <span class="font-[JetBrains_Mono] font-bold uppercase tracking-wide text-rose-400 mr-2">[${f.category}]</span>
          <span class="text-zinc-300">${f.detail}</span>
        </div>
      </div>
    `).join('');
  }

  document.getElementById('sd-body').innerHTML = `
    <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
      ${metricBox('Score', sc.score+'/100', vc)}
      ${metricBox('Verdict', sc.verdict, vc)}
      ${metricBox('Crit Events', sc.flags_critical||0, sc.flags_critical>0?'text-rose-400':'text-zinc-300')}
    </div>
    <div class="mt-4 flex flex-col gap-2">${flagsHTML}</div>
  `;
  openModal('modal-scan');
}

function saveSettings() {
  if (serverData) {
    serverData.name = document.getElementById('cfg-name').value;
  }
  toast('Config updated');
}

function dashNav(id, btnEl) {
  document.querySelectorAll('[id^="dp-"]').forEach(p => { p.classList.remove('dash-page-show'); p.classList.add('dash-page-hide'); });
  document.getElementById('dp-'+id).classList.remove('dash-page-hide'); document.getElementById('dp-'+id).classList.add('dash-page-show');

  document.querySelectorAll('.dash-nav-item').forEach(s => {
    s.className = 'flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-200 dash-nav-item border border-transparent';
  });
  if(btnEl) btnEl.className = 'flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors dash-nav-item dash-active bg-zinc-900/80 text-zinc-100 border border-zinc-800';

  const titles = { overview: ['Telemetry Overview', 'Aggregate metrics'], pins: ['Provision Authorization', 'Manage hashes'], scans: ['Forensic Output', 'Immutable records'], settings: ['Config', 'Parameters'] };
  document.getElementById('dash-page-title').textContent = titles[id][0];
  document.getElementById('dash-page-sub').textContent   = titles[id][1];
}

function openModal(id)  { document.getElementById('modal-'+id).classList.add('open'); }
function closeModal(id) { document.getElementById('modal-'+id).classList.remove('open'); }
function closeModalOuter(e, id) { if (e.target===document.getElementById(id)) closeModal(id); }

function toast(msg, type='success') {
  const isErr = type === 'error';
  const el = document.createElement('div');
  el.className = 'toast-item pointer-events-auto flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-950/90 p-3 pr-6 text-sm font-medium text-zinc-200 shadow-xl backdrop-blur-md';
  el.innerHTML = `<iconify-icon icon="${isErr?'solar:danger-triangle-linear':'solar:check-circle-linear'}" class="text-lg text-${isErr?'rose':'emerald'}-400"></iconify-icon> ${msg}`;
  document.getElementById('toast-stack').appendChild(el);
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show')));
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }, 3000);
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
      

<div className="fixed inset-0 z-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
<div className="fixed top-1/4 left-1/2 z-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[100px] pointer-events-none"></div>

<nav className="fixed top-0 left-0 right-0 z-[100] flex h-16 items-center justify-between border-b border-white/5 bg-zinc-950/80 px-6 backdrop-blur-md shadow-sm select-none" id="main-nav">
<div className="flex cursor-pointer items-center gap-2 font-[Syne] text-lg font-bold tracking-tighter text-zinc-100" onclick="openWin('win-welcome')">
    SCANX
  </div>
<div className="hidden items-center gap-8 md:flex">
<button className="text-xs font-medium tracking-wide text-zinc-400 transition-colors hover:text-zinc-100" onclick="openWin('win-process')">Process</button>
<button className="text-xs font-medium tracking-wide text-zinc-400 transition-colors hover:text-zinc-100" onclick="openWin('win-detection')">Detection</button>
<button className="text-xs font-medium tracking-wide text-zinc-400 transition-colors hover:text-zinc-100" onclick="openWin('win-pricing')">Pricing</button>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-xs font-medium text-zinc-100 transition-all hover:bg-zinc-800" id="nav-login-btn" onclick="openWin('win-login')">
      Login
      <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="hidden inline-flex items-center gap-2 rounded-lg border border-violet-500/50 bg-violet-600/10 px-4 py-1.5 text-xs font-medium text-violet-400 shadow-[0_0_15px_rgba(124,58,255,0.15)] transition-all hover:bg-violet-600/20" id="nav-dash-btn" onclick="openWin('win-dash')">
      Dashboard
    </button>
<button className="hidden inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all hover:text-zinc-100" id="nav-logout-btn" onclick="doLogout()">
      Logout
    </button>
</div>
</nav>

<div className="absolute inset-0 pt-16 z-10 overflow-hidden" id="desktop-area">

<div className="os-window absolute left-1/2 top-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/90 shadow-2xl backdrop-blur-xl" id="win-welcome" style={{maxHeight: '85vh'}}>
<div className="os-titlebar flex h-10 shrink-0 w-full cursor-grab items-center justify-between border-b border-white/5 bg-zinc-900/50 px-4 active:cursor-grabbing">
<div className="flex gap-2 w-16">
<button className="h-3 w-3 rounded-full border border-rose-500/50 bg-rose-500/80 transition-colors hover:bg-rose-500" onclick="closeWin('win-welcome')"></button>
<button className="h-3 w-3 rounded-full border border-amber-500/50 bg-amber-500/80 transition-colors hover:bg-amber-500" onclick="closeWin('win-welcome')"></button>
<button className="h-3 w-3 rounded-full border border-emerald-500/50 bg-emerald-500/80 transition-colors hover:bg-emerald-500" onclick="toggleMax('win-welcome')"></button>
</div>
<div className="font-[Syne] text-xs font-semibold text-zinc-400 pointer-events-none">Welcome.exe</div>
<div className="w-16"></div>
</div>
<div className="flex-1 overflow-y-auto overflow-x-hidden p-8 sm:p-12">
<div className="flex flex-col items-center text-center">
<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-3 py-1 font-[JetBrains_Mono] text-xs font-medium tracking-widest text-violet-400 uppercase">
<span className="h-1.5 w-1.5 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]"></span>
          Forensic Protection
        </div>
<h1 className="mb-6 font-[Syne] text-4xl font-bold leading-[0.9] tracking-tight text-zinc-100 sm:text-6xl md:text-7xl">
          Server Integrity,<br/>
<span className="bg-gradient-to-br from-violet-400 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">Automated.</span>
</h1>
<p className="mb-10 max-w-2xl text-base font-normal leading-relaxed text-zinc-400">
          Deep forensic scanning built for competitive gaming communities. Deploy via PIN, execute deep scans, and generate professional compliance reports in under 8 minutes.
        </p>
<div className="flex flex-col items-center gap-4 sm:flex-row mb-16">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-white sm:w-auto" onclick="openWin('win-process')">
            Explore Process
            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="w-full rounded-2xl border border-white/5 bg-zinc-900/40 py-6 px-6 backdrop-blur-sm">
<div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
<div className="flex items-center gap-2 text-xs font-medium text-zinc-400"><iconify-icon className="text-sm text-emerald-500" icon="solar:shield-check-linear"></iconify-icon> Enterprise Grade</div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-400"><iconify-icon className="text-sm text-violet-400" icon="solar:server-square-linear"></iconify-icon> 99.9% Uptime</div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-400"><iconify-icon className="text-sm text-blue-400" icon="solar:history-linear"></iconify-icon> 24/7 Support</div>
</div>
</div>
</div>
</div>
</div>

<div className="os-window hidden-win absolute left-[10%] top-[15%] w-full max-w-5xl flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/90 shadow-2xl backdrop-blur-xl" id="win-process" style={{maxHeight: '80vh'}}>
<div className="os-titlebar flex h-10 shrink-0 w-full cursor-grab items-center justify-between border-b border-white/5 bg-zinc-900/50 px-4 active:cursor-grabbing">
<div className="flex gap-2 w-16">
<button className="h-3 w-3 rounded-full border border-rose-500/50 bg-rose-500/80 transition-colors hover:bg-rose-500" onclick="closeWin('win-process')"></button>
<button className="h-3 w-3 rounded-full border border-amber-500/50 bg-amber-500/80 transition-colors hover:bg-amber-500" onclick="closeWin('win-process')"></button>
<button className="h-3 w-3 rounded-full border border-emerald-500/50 bg-emerald-500/80 transition-colors hover:bg-emerald-500" onclick="toggleMax('win-process')"></button>
</div>
<div className="font-[Syne] text-xs font-semibold text-zinc-400 pointer-events-none">Pipeline.exe</div>
<div className="w-16"></div>
</div>
<div className="flex-1 overflow-y-auto overflow-x-hidden p-6 sm:p-10">
<div className="mb-12">
<div className="mb-3 font-[JetBrains_Mono] text-xs font-medium tracking-widest text-violet-400 uppercase">Pipeline</div>
<h2 className="mb-4 font-[Syne] text-3xl font-bold tracking-tight text-zinc-100">Frictionless Forensics</h2>
<p className="text-sm text-zinc-400 max-w-xl">A streamlined architectural approach from PIN generation to definitive compliance verdict.</p>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all hover:border-violet-500/30 hover:bg-zinc-900/50">
<div className="mb-6 font-[JetBrains_Mono] text-xs font-medium tracking-widest text-zinc-500 transition-colors group-hover:text-violet-400">01</div>
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-zinc-800/50 text-xl text-zinc-300">
<iconify-icon icon="solar:key-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mb-2 font-[Syne] text-base font-semibold text-zinc-100">Generate Key</h3>
<p className="text-xs leading-relaxed text-zinc-400">Administrators instantly provision single-use, cryptographically secure PINs via the dashboard.</p>
</div>
<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all hover:border-violet-500/30 hover:bg-zinc-900/50">
<div className="mb-6 font-[JetBrains_Mono] text-xs font-medium tracking-widest text-zinc-500 transition-colors group-hover:text-violet-400">02</div>
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-zinc-800/50 text-xl text-zinc-300">
<iconify-icon icon="solar:cloud-download-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mb-2 font-[Syne] text-base font-semibold text-zinc-100">Deploy Client</h3>
<p className="text-xs leading-relaxed text-zinc-400">Subject enters the PIN on the public portal to authorize and download the lightweight scanning executable.</p>
</div>
<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all hover:border-violet-500/30 hover:bg-zinc-900/50">
<div className="mb-6 font-[JetBrains_Mono] text-xs font-medium tracking-widest text-zinc-500 transition-colors group-hover:text-violet-400">03</div>
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-zinc-800/50 text-xl text-zinc-300">
<iconify-icon icon="solar:eye-scan-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mb-2 font-[Syne] text-base font-semibold text-zinc-100">Deep Scan</h3>
<p className="text-xs leading-relaxed text-zinc-400">Memory integrity, handles, injected threads, and obscure registry persistence mechanisms are audited.</p>
</div>
<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all hover:border-violet-500/30 hover:bg-zinc-900/50">
<div className="mb-6 font-[JetBrains_Mono] text-xs font-medium tracking-widest text-zinc-500 transition-colors group-hover:text-violet-400">04</div>
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-zinc-800/50 text-xl text-zinc-300">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mb-2 font-[Syne] text-base font-semibold text-zinc-100">Data Transmit</h3>
<p className="text-xs leading-relaxed text-zinc-400">Encrypted telemetry is securely uploaded to our infrastructure, compiling a comprehensive report.</p>
</div>
<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all hover:border-violet-500/30 hover:bg-zinc-900/50">
<div className="mb-6 font-[JetBrains_Mono] text-xs font-medium tracking-widest text-zinc-500 transition-colors group-hover:text-violet-400">05</div>
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-zinc-800/50 text-xl text-zinc-300">
<iconify-icon icon="solar:scale-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mb-2 font-[Syne] text-base font-semibold text-zinc-100">Review Metrics</h3>
<p className="text-xs leading-relaxed text-zinc-400">Administrators receive real-time dashboard notifications evaluating trust scores and forensic flags.</p>
</div>
<div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all hover:border-violet-500/30 hover:bg-zinc-900/50">
<div className="mb-6 font-[JetBrains_Mono] text-xs font-medium tracking-widest text-zinc-500 transition-colors group-hover:text-violet-400">06</div>
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-xl text-emerald-400">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mb-2 font-[Syne] text-base font-semibold text-zinc-100">Enforce Verdict</h3>
<p className="text-xs leading-relaxed text-zinc-400">Legitimate entities are whitelisted. Malicious actors are identified and restricted prior to entry.</p>
</div>
</div>
</div>
</div>

<div className="os-window hidden-win absolute left-[15%] top-[20%] w-full max-w-5xl flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/90 shadow-2xl backdrop-blur-xl" id="win-detection" style={{maxHeight: '80vh'}}>
<div className="os-titlebar flex h-10 shrink-0 w-full cursor-grab items-center justify-between border-b border-white/5 bg-zinc-900/50 px-4 active:cursor-grabbing">
<div className="flex gap-2 w-16">
<button className="h-3 w-3 rounded-full border border-rose-500/50 bg-rose-500/80 transition-colors hover:bg-rose-500" onclick="closeWin('win-detection')"></button>
<button className="h-3 w-3 rounded-full border border-amber-500/50 bg-amber-500/80 transition-colors hover:bg-amber-500" onclick="closeWin('win-detection')"></button>
<button className="h-3 w-3 rounded-full border border-emerald-500/50 bg-emerald-500/80 transition-colors hover:bg-emerald-500" onclick="toggleMax('win-detection')"></button>
</div>
<div className="font-[Syne] text-xs font-semibold text-zinc-400 pointer-events-none">Vectors.cfg</div>
<div className="w-16"></div>
</div>
<div className="flex-1 overflow-y-auto overflow-x-hidden p-6 sm:p-10">
<div className="mb-12">
<div className="mb-3 font-[JetBrains_Mono] text-xs font-medium tracking-widest text-violet-400 uppercase">Detection Vectors</div>
<h2 className="mb-4 font-[Syne] text-3xl font-bold tracking-tight text-zinc-100">Uncompromising Visibility</h2>
<p className="text-sm text-zinc-400 max-w-xl">ScanX maps and analyzes system anomalies targeting modern anti-cheat architectures.</p>
</div>
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-6 text-center transition-all hover:bg-zinc-800/40">
<iconify-icon className="mb-4 text-2xl text-zinc-400" icon="solar:syringe-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="mb-2 font-[Syne] text-sm font-semibold text-zinc-100">Injection Vectors</h3>
<p className="text-xs text-zinc-500">Manual map &amp; remote thread analysis</p>
</div>
<div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-6 text-center transition-all hover:bg-zinc-800/40">
<iconify-icon className="mb-4 text-2xl text-zinc-400" icon="solar:link-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="mb-2 font-[Syne] text-sm font-semibold text-zinc-100">Memory Hooks</h3>
<p className="text-xs text-zinc-500">IAT, inline, and SSDT manipulation</p>
</div>
<div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-6 text-center transition-all hover:bg-zinc-800/40">
<iconify-icon className="mb-4 text-2xl text-zinc-400" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="mb-2 font-[Syne] text-sm font-semibold text-zinc-100">Rogue Processes</h3>
<p className="text-xs text-zinc-500">Signatures for known exploit engines</p>
</div>
<div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-6 text-center transition-all hover:bg-zinc-800/40">
<iconify-icon className="mb-4 text-2xl text-zinc-400" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="mb-2 font-[Syne] text-sm font-semibold text-zinc-100">Network Audits</h3>
<p className="text-xs text-zinc-500">Proxy chains and socket anomalies</p>
</div>
<div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-6 text-center transition-all hover:bg-zinc-800/40">
<iconify-icon className="mb-4 text-2xl text-zinc-400" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="mb-2 font-[Syne] text-sm font-semibold text-zinc-100">File System</h3>
<p className="text-xs text-zinc-500">Hidden artifacts and modified assets</p>
</div>
<div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-6 text-center transition-all hover:bg-zinc-800/40">
<iconify-icon className="mb-4 text-2xl text-zinc-400" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="mb-2 font-[Syne] text-sm font-semibold text-zinc-100">Persistence</h3>
<p className="text-xs text-zinc-500">Startup keys and telemetry blocks</p>
</div>
<div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-6 text-center transition-all hover:bg-zinc-800/40">
<iconify-icon className="mb-4 text-2xl text-zinc-400" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="mb-2 font-[Syne] text-sm font-semibold text-zinc-100">Driver Signatures</h3>
<p className="text-xs text-zinc-500">Vulnerable kernel module tracking</p>
</div>
<div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-6 text-center transition-all hover:bg-zinc-800/40">
<iconify-icon className="mb-4 text-2xl text-zinc-400" icon="solar:monitor-camera-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="mb-2 font-[Syne] text-sm font-semibold text-zinc-100">Anti-Tamper</h3>
<p className="text-xs text-zinc-500">Debugger and VM evasion detection</p>
</div>
</div>
</div>
</div>

<div className="os-window hidden-win absolute left-[20%] top-[10%] w-full max-w-5xl flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/90 shadow-2xl backdrop-blur-xl" id="win-pricing" style={{maxHeight: '80vh'}}>
<div className="os-titlebar flex h-10 shrink-0 w-full cursor-grab items-center justify-between border-b border-white/5 bg-zinc-900/50 px-4 active:cursor-grabbing">
<div className="flex gap-2 w-16">
<button className="h-3 w-3 rounded-full border border-rose-500/50 bg-rose-500/80 transition-colors hover:bg-rose-500" onclick="closeWin('win-pricing')"></button>
<button className="h-3 w-3 rounded-full border border-amber-500/50 bg-amber-500/80 transition-colors hover:bg-amber-500" onclick="closeWin('win-pricing')"></button>
<button className="h-3 w-3 rounded-full border border-emerald-500/50 bg-emerald-500/80 transition-colors hover:bg-emerald-500" onclick="toggleMax('win-pricing')"></button>
</div>
<div className="font-[Syne] text-xs font-semibold text-zinc-400 pointer-events-none">Licensing.sys</div>
<div className="w-16"></div>
</div>
<div className="flex-1 overflow-y-auto overflow-x-hidden p-6 sm:p-10">
<div className="mb-12">
<div className="mb-3 font-[JetBrains_Mono] text-xs font-medium tracking-widest text-violet-400 uppercase">Licensing</div>
<h2 className="mb-4 font-[Syne] text-3xl font-bold tracking-tight text-zinc-100">Transparent Tiers</h2>
<p className="text-sm text-zinc-400 max-w-xl">Procure access keys directly via our automated infrastructure.</p>
</div>
<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
<div className="flex flex-col rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8 transition-all hover:-translate-y-1">
<h3 className="font-[Syne] text-lg font-semibold text-zinc-100">Basic</h3>
<div className="mt-4 flex items-baseline gap-1 font-[Syne]">
<span className="text-4xl font-bold tracking-tight text-zinc-100">$5</span>
<span className="text-sm font-medium text-zinc-500">/mo</span>
</div>
<p className="mt-2 text-xs text-zinc-500">Up to 50 scans monthly</p>
<ul className="mt-8 flex flex-1 flex-col gap-4 text-sm text-zinc-400">
<li className="flex items-center gap-3"><iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> PIN Management</li>
<li className="flex items-center gap-3"><iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> Discord Webhooks</li>
<li className="flex items-center gap-3"><iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> Standard Analytics</li>
</ul>
<button className="mt-8 w-full rounded-xl border border-zinc-800 bg-zinc-900 py-2.5 text-xs font-semibold transition-colors hover:bg-zinc-800">Acquire License</button>
</div>
<div className="relative flex flex-col rounded-3xl border border-violet-500/40 bg-zinc-900/60 p-8 shadow-[0_0_30px_rgba(124,58,255,0.05)] transition-all hover:-translate-y-1">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-violet-500/50 bg-violet-600/20 px-3 py-1 font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-violet-300 uppercase backdrop-blur-md">Recommended</div>
<h3 className="font-[Syne] text-lg font-semibold text-zinc-100">Pro</h3>
<div className="mt-4 flex items-baseline gap-1 font-[Syne]">
<span className="text-4xl font-bold tracking-tight text-violet-400">$15</span>
<span className="text-sm font-medium text-zinc-500">/mo</span>
</div>
<p className="mt-2 text-xs text-zinc-500">Up to 200 scans monthly</p>
<ul className="mt-8 flex flex-1 flex-col gap-4 text-sm text-zinc-300">
<li className="flex items-center gap-3"><iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> All Basic Features</li>
<li className="flex items-center gap-3"><iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> Full Forensic Details</li>
<li className="flex items-center gap-3"><iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> Custom Identifiers</li>
<li className="flex items-center gap-3"><iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> Priority Queue</li>
</ul>
<button className="mt-8 w-full rounded-xl bg-zinc-100 py-2.5 text-xs font-semibold text-zinc-950 transition-transform hover:scale-[1.02]">Acquire License</button>
</div>
<div className="flex flex-col rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8 transition-all hover:-translate-y-1">
<h3 className="font-[Syne] text-lg font-semibold text-zinc-100">Enterprise</h3>
<div className="mt-4 flex items-baseline gap-1 font-[Syne]">
<span className="text-4xl font-bold tracking-tight text-zinc-100">$30</span>
<span className="text-sm font-medium text-zinc-500">/mo</span>
</div>
<p className="mt-2 text-xs text-zinc-500">Unlimited telemetry execution</p>
<ul className="mt-8 flex flex-1 flex-col gap-4 text-sm text-zinc-400">
<li className="flex items-center gap-3"><iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> All Pro Features</li>
<li className="flex items-center gap-3"><iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> Unlimited Capacity</li>
<li className="flex items-center gap-3"><iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> Rest API Access</li>
<li className="flex items-center gap-3"><iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> Dedicated Engineer</li>
</ul>
<button className="mt-8 w-full rounded-xl border border-zinc-800 bg-zinc-900 py-2.5 text-xs font-semibold transition-colors hover:bg-zinc-800">Acquire License</button>
</div>
</div>
</div>
</div>

<div className="os-window hidden-win absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/90 shadow-2xl backdrop-blur-xl" id="win-login">
<div className="os-titlebar flex h-10 shrink-0 w-full cursor-grab items-center justify-between border-b border-white/5 bg-zinc-900/50 px-4 active:cursor-grabbing">
<div className="flex gap-2 w-16">
<button className="h-3 w-3 rounded-full border border-rose-500/50 bg-rose-500/80 transition-colors hover:bg-rose-500" onclick="closeWin('win-login')"></button>
<button className="h-3 w-3 rounded-full border border-amber-500/50 bg-amber-500/80 transition-colors hover:bg-amber-500" onclick="closeWin('win-login')"></button>
<button className="h-3 w-3 rounded-full border border-emerald-500/50 bg-emerald-500/80 transition-colors hover:bg-emerald-500" onclick="toggleMax('win-login')"></button>
</div>
<div className="font-[Syne] text-xs font-semibold text-zinc-400 pointer-events-none">Auth_Gateway.exe</div>
<div className="w-16"></div>
</div>
<div className="flex-1 p-6">
<div className="mb-6 flex rounded-lg border border-zinc-800 bg-zinc-900/50 p-1">
<button className="flex-1 rounded-md bg-zinc-800 py-2 text-xs font-semibold text-zinc-100 transition-colors border border-zinc-700 shadow-sm" id="tab-key" onclick="switchLoginTab('key')">Execute Pin</button>
<button className="flex-1 rounded-md py-2 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-300" id="tab-email" onclick="switchLoginTab('email')">Staff Access</button>
</div>

<div className="active-page" id="login-key-tab">
<div className="mb-6 text-center">
<div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-xl text-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
<iconify-icon icon="solar:key-square-linear"></iconify-icon>
</div>
<h2 className="font-[Syne] text-xl font-bold tracking-tight text-zinc-100">Authorization Key</h2>
</div>
<div className="mb-5">
<label className="mb-2 block font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-zinc-500 uppercase">License Key</label>
<input className="w-full rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3 font-[JetBrains_Mono] text-sm font-medium tracking-wider text-violet-300 placeholder:text-zinc-700 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 text-center" id="key-input" onkeydown="if(event.key==='Enter') verifyKey()" placeholder="XXXX-XXXX-XXXX" type="text"/>
</div>
<button className="w-full rounded-lg bg-zinc-100 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-white" onclick="verifyKey()">Authenticate</button>
<div className="hidden mt-4 rounded-lg border px-4 py-2 text-center font-[JetBrains_Mono] text-xs" id="key-msg"></div>
</div>

<div className="dash-page-hide" id="login-email-tab">
<div className="mb-6 text-center">
<div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 text-xl text-zinc-300">
<iconify-icon icon="solar:shield-user-linear"></iconify-icon>
</div>
<h2 className="font-[Syne] text-xl font-bold tracking-tight text-zinc-100">Admin Portal</h2>
</div>
<div className="mb-4">
<label className="mb-2 block font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-zinc-500 uppercase">Identity</label>
<input className="w-full rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-700 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" id="l-email" placeholder="admin@network.local" type="email"/>
</div>
<div className="mb-6">
<label className="mb-2 block font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-zinc-500 uppercase">Passphrase</label>
<input className="w-full rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-700 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" id="l-pass" onkeydown="if(event.key==='Enter') doLogin()" placeholder="••••••••" type="password"/>
</div>
<button className="w-full rounded-lg bg-zinc-100 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-white" onclick="doLogin()">Establish Connection</button>
<div className="hidden mt-4 rounded-lg border px-4 py-2 text-center font-[JetBrains_Mono] text-xs" id="login-msg"></div>
</div>
</div>
</div>

<div className="os-window hidden-win absolute left-[5%] top-[5%] w-[90%] h-[85%] max-w-7xl flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/95 shadow-2xl backdrop-blur-xl" id="win-dash">
<div className="os-titlebar flex h-10 shrink-0 w-full cursor-grab items-center justify-between border-b border-white/5 bg-zinc-900/50 px-4 active:cursor-grabbing">
<div className="flex gap-2 w-16">
<button className="h-3 w-3 rounded-full border border-rose-500/50 bg-rose-500/80 transition-colors hover:bg-rose-500" onclick="closeWin('win-dash')"></button>
<button className="h-3 w-3 rounded-full border border-amber-500/50 bg-amber-500/80 transition-colors hover:bg-amber-500" onclick="closeWin('win-dash')"></button>
<button className="h-3 w-3 rounded-full border border-emerald-500/50 bg-emerald-500/80 transition-colors hover:bg-emerald-500" onclick="toggleMax('win-dash')"></button>
</div>
<div className="font-[Syne] text-xs font-semibold text-zinc-400 pointer-events-none">Control_Panel.sh</div>
<div className="w-16"></div>
</div>
<div className="flex flex-1 overflow-hidden lg:grid lg:grid-cols-[240px_1fr]">

<aside className="hidden flex-col border-r border-zinc-800/60 bg-zinc-950/50 p-4 lg:flex overflow-y-auto">
<div className="mb-6 rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-4">
<div className="font-[Syne] text-sm font-semibold text-zinc-100" id="ds-server-name">Loading nodes...</div>
<div className="mt-1 font-[JetBrains_Mono] text-xs font-bold tracking-widest text-violet-400" id="ds-plan-badge">RESOLVING</div>
<div className="mt-3 text-xs text-zinc-500" id="ds-scans-info">0 / 0 limits</div>
<div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-zinc-800">
<div className="h-full rounded-full bg-violet-500 transition-all duration-700" id="ds-scans-bar" style={{width: '0%'}}></div>
</div>
</div>
<div className="mb-2 px-3 font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-zinc-600 uppercase">Telemetry</div>
<div className="flex flex-col gap-1">
<button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-200 dash-nav-item dash-active bg-zinc-900/80 text-zinc-100 border border-zinc-800" onclick="dashNav('overview', this)">
<iconify-icon className="text-lg opacity-80" icon="solar:widget-linear"></iconify-icon> Overview
          </button>
<button className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-200 dash-nav-item border border-transparent" onclick="dashNav('pins', this)">
<div className="flex items-center gap-3"><iconify-icon className="text-lg opacity-80" icon="solar:key-linear"></iconify-icon> Provision PINs</div>
<span className="rounded bg-violet-500/20 px-1.5 py-0.5 font-[JetBrains_Mono] text-xs font-semibold text-violet-300" id="sb-active-pins">0</span>
</button>
<button className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-200 dash-nav-item border border-transparent" onclick="dashNav('scans', this)">
<div className="flex items-center gap-3"><iconify-icon className="text-lg opacity-80" icon="solar:eye-scan-linear"></iconify-icon> Scan Output</div>
<span className="rounded bg-zinc-800 px-1.5 py-0.5 font-[JetBrains_Mono] text-xs font-semibold text-zinc-400" id="sb-scans">0</span>
</button>
</div>
<div className="mt-6 mb-2 px-3 font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-zinc-600 uppercase">System</div>
<div className="flex flex-col gap-1">
<button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-200 dash-nav-item border border-transparent" onclick="dashNav('settings', this)">
<iconify-icon className="text-lg opacity-80" icon="solar:settings-linear"></iconify-icon> Configuration
          </button>
</div>
<div className="mt-auto border-t border-zinc-800/60 pt-4 px-3 text-xs">
<div className="truncate font-medium text-zinc-300" id="df-email">—</div>
<div className="mt-1 text-zinc-600">v3.0 Engine</div>
</div>
</aside>

<main className="flex flex-1 flex-col overflow-hidden bg-zinc-950">
<header className="flex items-center justify-between border-b border-zinc-800/60 bg-zinc-950/80 px-6 py-4 backdrop-blur-md">
<div>
<h2 className="font-[Syne] text-lg font-bold tracking-tight text-zinc-100" id="dash-page-title">Overview</h2>
<p className="text-xs text-zinc-500" id="dash-page-sub">Telemetry aggregation metrics</p>
</div>
<div className="flex gap-3">
<button className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200" onclick="loadDashData()" title="Sync">
<iconify-icon icon="solar:refresh-linear"></iconify-icon>
</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-xs font-semibold text-zinc-950 transition-all hover:bg-white" onclick="openModal('create-pin')">
<iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon>
              New PIN
            </button>
</div>
</header>
<div className="flex-1 overflow-y-auto p-6">

<div className="dash-page-show" id="dp-overview">
<div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
<div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-5">
<div className="mb-2 font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-zinc-500 uppercase">Global Runs</div>
<div className="font-[Syne] text-2xl md:text-3xl font-bold tracking-tight text-zinc-100" id="st-total">0</div>
</div>
<div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-5">
<div className="mb-2 font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-zinc-500 uppercase">Active Nodes</div>
<div className="font-[Syne] text-2xl md:text-3xl font-bold tracking-tight text-violet-400" id="st-active">0</div>
</div>
<div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-5">
<div className="mb-2 font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-rose-500/70 uppercase">Anomalies</div>
<div className="font-[Syne] text-2xl md:text-3xl font-bold tracking-tight text-rose-400" id="st-flagged">0</div>
</div>
<div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
<div className="mb-2 font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-emerald-500/70 uppercase">Clean</div>
<div className="font-[Syne] text-2xl md:text-3xl font-bold tracking-tight text-emerald-400" id="st-clean">0</div>
</div>
</div>
<div className="mb-8 overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-900/30">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="border-b border-zinc-800/60 bg-zinc-900/50 font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-zinc-500 uppercase">
<tr><th className="p-4">Identifier</th><th className="p-4">Node Host</th><th className="p-4">Verdict</th><th className="p-4">Timestamp</th></tr>
</thead>
<tbody className="divide-y divide-zinc-800/50" id="ov-scans-tbody"></tbody>
</table>
</div>
</div>

<div className="dash-page-hide" id="dp-pins">
<div className="mb-8 rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-6">
<h3 className="mb-4 font-[Syne] text-sm font-semibold text-zinc-100">Provision Authorization</h3>
<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
<div>
<label className="mb-1.5 block font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-zinc-500 uppercase">Reference</label>
<input className="w-full rounded-lg border border-zinc-800 bg-zinc-950/50 px-3 py-2 text-sm text-zinc-200 focus:border-violet-500 focus:outline-none" id="new-pin-name" placeholder="Target_Name" type="text"/>
</div>
<div>
<label className="mb-1.5 block font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-zinc-500 uppercase">Limit</label>
<select className="w-full rounded-lg border border-zinc-800 bg-zinc-950/50 px-3 py-2 pr-8 text-sm text-zinc-200 focus:border-violet-500 focus:outline-none" id="new-pin-uses">
<option value="1">1 Execution</option><option value="3">3 Executions</option>
</select>
</div>
</div>
<button className="mt-6 rounded-lg bg-zinc-100 px-5 py-2 text-xs font-semibold text-zinc-950 transition-all hover:bg-white" onclick="createPin()">Compile Token</button>
</div>
<div className="overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-900/30">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="border-b border-zinc-800/60 bg-zinc-900/50 font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-zinc-500 uppercase">
<tr><th className="p-4">Note</th><th className="p-4">Hash</th><th className="p-4">Quota</th><th className="p-4">State</th><th className="p-4">Actions</th></tr>
</thead>
<tbody className="divide-y divide-zinc-800/50" id="pins-tbody"></tbody>
</table>
</div>
</div>

<div className="dash-page-hide" id="dp-scans">
<div className="overflow-x-auto rounded-xl border border-zinc-800/60 bg-zinc-900/30">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="border-b border-zinc-800/60 bg-zinc-900/50 font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-zinc-500 uppercase">
<tr><th className="p-4">Note</th><th className="p-4">Host</th><th className="p-4">User</th><th className="p-4">Score</th><th className="p-4">Verdict</th><th className="p-4"></th></tr>
</thead>
<tbody className="divide-y divide-zinc-800/50" id="scans-tbody"></tbody>
</table>
</div>
</div>

<div className="dash-page-hide" id="dp-settings">
<div className="max-w-xl rounded-xl border border-zinc-800/60 bg-zinc-900/30 overflow-hidden">
<div className="flex flex-col gap-5 p-5">
<div>
<label className="mb-1.5 block font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-zinc-500 uppercase">Network Name</label>
<input className="w-full rounded-lg border border-zinc-800 bg-zinc-950/50 px-3 py-2 text-sm text-zinc-200 focus:border-violet-500 focus:outline-none" id="cfg-name" type="text"/>
</div>
<div>
<label className="mb-1.5 block font-[JetBrains_Mono] text-xs font-semibold tracking-widest text-zinc-500 uppercase">Webhook URL</label>
<input className="w-full rounded-lg border border-zinc-800 bg-zinc-950/50 px-3 py-2 font-[JetBrains_Mono] text-xs text-zinc-300 focus:border-violet-500 focus:outline-none" id="cfg-webhook" type="text"/>
</div>
<button className="mt-2 w-fit rounded-lg bg-zinc-100 px-5 py-2 text-xs font-semibold text-zinc-950 transition-all hover:bg-white" onclick="saveSettings()">Apply</button>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
</div>

<div className="modal-overlay fixed inset-0 z-[200] flex items-center justify-center bg-black/80 px-4" id="modal-scan" onclick="closeModalOuter(event,'modal-scan')">
<div className="modal-content max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 shadow-2xl" onclick="event.stopPropagation()">
<div className="mb-6 flex items-start justify-between">
<div>
<h3 className="font-[Syne] text-xl font-bold tracking-tight text-zinc-100" id="sd-title">Node Report</h3>
<p className="mt-1 font-[JetBrains_Mono] text-xs text-zinc-500" id="sd-sub">Metadata</p>
</div>
<button className="rounded-lg p-1 text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-300" onclick="closeModal('modal-scan')">
<iconify-icon className="text-2xl" icon="solar:close-square-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-6" id="sd-body"></div>
</div>
</div>
<div className="fixed bottom-6 right-6 z-[300] flex flex-col gap-2 pointer-events-none" id="toast-stack"></div>


    </>
  );
}
