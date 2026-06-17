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



      // Initialize icons with desired stroke width
      function mountIcons() {
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // Clock
      function updateClock() {
        const el = document.getElementById('clock');
        const d = new Date();
        let h = d.getHours();
        const m = d.getMinutes().toString().padStart(2, '0');
        const ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12 || 12;
        el.textContent = `${h}:${m} ${ampm}`;
      }
      setInterval(updateClock, 1000);
      updateClock();

      // Window management
      const windowStates = {};
      function bringToFront(id) {
        document.querySelectorAll('.app-window').forEach(w => w.style.zIndex = 20);
        const el = document.getElementById(id);
        if (el) el.style.zIndex = 60;
      }
      function openApp(id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.remove('hidden');
        bringToFront(id);
        mountIcons();
      }
      function closeApp(id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.add('hidden');
        const icon = document.querySelector(`#minimized-tray [data-app="${id}"]`);
        if (icon) icon.remove();
      }
      function minimizeApp(id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.add('hidden');
        // add to tray
        if (!document.querySelector(`#minimized-tray [data-app="${id}"]`)) {
          const tray = document.getElementById('minimized-tray');
          const b = document.createElement('button');
          b.setAttribute('data-app', id);
          b.className = 'w-10 h-10 rounded-lg bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center hover:scale-110 transition';
          b.innerHTML = '<i data-lucide="app-window" class="w-5 h-5"></i>';
          b.onclick = () => { el.classList.remove('hidden'); b.remove(); bringToFront(id); mountIcons(); };
          tray.appendChild(b);
          mountIcons();
        }
      }
      function maximizeApp(id) {
        const el = document.getElementById(id);
        if (!el) return;
        const st = windowStates[id] || { maximized: false, prev: {} };
        if (!st.maximized) {
          st.prev = { top: el.style.top, left: el.style.left, width: el.style.width, height: el.style.height, transform: el.style.transform };
          el.style.top = '56px';
          el.style.left = '50%';
          el.style.transform = 'translateX(-50%)';
          el.style.width = 'min(96vw, 1200px)';
          el.style.height = 'calc(100vh - 96px)';
          st.maximized = true;
        } else {
          el.style.top = st.prev.top || '';
          el.style.left = st.prev.left || '';
          el.style.width = st.prev.width || '';
          el.style.height = st.prev.height || '';
          el.style.transform = st.prev.transform || '';
          st.maximized = false;
        }
        windowStates[id] = st;
        bringToFront(id);
      }
      function makeDraggable(winId, headerId) {
        const el = document.getElementById(winId);
        const header = document.getElementById(headerId);
        if (!el || !header) return;
        let pos1=0,pos2=0,pos3=0,pos4=0;
        header.onmousedown = dragMouseDown;
        function dragMouseDown(e) {
          bringToFront(winId);
          e.preventDefault();
          pos3 = e.clientX; pos4 = e.clientY;
          document.onmouseup = closeDrag;
          document.onmousemove = elementDrag;
        }
        function elementDrag(e) {
          e.preventDefault();
          pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY;
          pos3 = e.clientX; pos4 = e.clientY;
          el.style.top = (el.offsetTop - pos2) + "px";
          el.style.left = (el.offsetLeft - pos1) + "px";
        }
        function closeDrag() {
          document.onmouseup = null; document.onmousemove = null;
        }
      }

      // Attach draggable behavior
      function initDrag() {
        makeDraggable('browser-app', 'browser-header');
        makeDraggable('console-app', 'console-header');
        makeDraggable('settings-app', 'settings-header');
      }

      // Demo feeds
      const lines = [
        'Initializing hologram grid…',
        'Calibrating liquid glass refractions…',
        'Loading neon edge shaders…',
        'Synthesizing depth blur (14px)…',
        'Enabling ambient aura…',
        'Optimizing motion pipeline…',
        'Ready.'
      ];
      function mountFeed() {
        const feed = document.getElementById('feed');
        if (!feed) return;
        feed.innerHTML = '';
        let i=0;
        const timer = setInterval(() => {
          if (i >= lines.length) { clearInterval(timer); return; }
          const row = document.createElement('div');
          row.className = 'flex items-center gap-2';
          row.innerHTML = `<span class="text-cyan-300/90">•</span><span>${lines[i]}</span>`;
          feed.appendChild(row);
          feed.scrollTop = feed.scrollHeight;
          i++;
        }, 420);
      }

      // Console stream
      function mountConsole() {
        const el = document.getElementById('console-stream');
        if (!el) return;
        el.innerHTML = '';
        const msgs = [
          '[OK] Holo bus online @ 60fps',
          '[OK] Glass kernel mounted',
          '[OK] XR layer negotiated',
          '[INFO] Neon edge width=1.5',
          '[WARN] Ring diffusion capped at 0.28',
          '[OK] Scene: stabilized',
        ];
        let n = 0;
        const t = setInterval(() => {
          const line = document.createElement('div');
          line.className = 'text-slate-200/90';
          line.innerHTML = `<span class="text-emerald-300/90 mr-2">›</span>${msgs[n % msgs.length]}`;
          el.appendChild(line);
          el.scrollTop = el.scrollHeight;
          n++;
          if (n > 18) clearInterval(t);
        }, 260);
      }

      // Settings toggles
      const glowBtn = () => document.getElementById('toggle-glow');
      const ringsBtn = () => document.getElementById('toggle-rings');
      function bindSettings() {
        // Glow toggle
        if (glowBtn()) {
          glowBtn().onclick = () => {
            const on = glowBtn().classList.contains('bg-cyan-400/40');
            if (on) {
              glowBtn().className = 'relative inline-flex h-6 w-11 items-center rounded-full transition bg-white/20 ring-1 ring-white/20';
              glowBtn().firstElementChild.className = 'translate-x-1 inline-block w-4 h-4 transform bg-white rounded-full transition';
              document.body.style.boxShadow = '';
            } else {
              glowBtn().className = 'relative inline-flex h-6 w-11 items-center rounded-full transition bg-cyan-400/40 ring-1 ring-white/20';
              glowBtn().firstElementChild.className = 'translate-x-6 inline-block w-4 h-4 transform bg-white rounded-full transition';
              document.body.style.boxShadow = 'inset 0 0 120px rgba(99,102,241,0.12)';
            }
          };
        }
        // Rings toggle
        if (ringsBtn()) {
          ringsBtn().onclick = () => {
            const on = ringsBtn().classList.contains('bg-white/20');
            const ringLayer = document.querySelector('#browser-app svg');
            if (!ringLayer) return;
            if (on) {
              ringsBtn().className = 'relative inline-flex h-6 w-11 items-center rounded-full transition bg-cyan-400/40 ring-1 ring-white/20';
              ringsBtn().firstElementChild.className = 'translate-x-6 inline-block w-4 h-4 transform bg-white rounded-full transition';
              ringLayer.parentElement.style.opacity = '.28';
            } else {
              ringsBtn().className = 'relative inline-flex h-6 w-11 items-center rounded-full transition bg-white/20 ring-1 ring-white/20';
              ringsBtn().firstElementChild.className = 'translate-x-1 inline-block w-4 h-4 transform bg-white rounded-full transition';
              ringLayer.parentElement.style.opacity = '0';
            }
          };
        }
        // Depth buttons
        document.querySelectorAll('.depth-btn').forEach((b) => {
          b.onclick = () => {
            document.querySelectorAll('.depth-btn').forEach(x => x.className = 'depth-btn rounded-lg px-2 py-1 text-[12px] bg-white/0 border border-white/10');
            b.className = 'depth-btn rounded-lg px-2 py-1 text-[12px] bg-white/10 border border-white/10';
            const depth = b.getAttribute('data-depth');
            const shells = document.querySelectorAll('.app-window > div > div.rounded-[20px], .app-window > div > div.rounded-[18px]');
            shells.forEach(s => {
              if (depth === 'low') s.style.backdropFilter = 'blur(8px)';
              if (depth === 'med') s.style.backdropFilter = 'blur(14px)';
              if (depth === 'high') s.style.backdropFilter = 'blur(22px)';
            });
          };
        });
      }

      // Open primary window by default and mount
      window.addEventListener('DOMContentLoaded', () => {
        mountIcons();
        initDrag();
        openApp('browser-app');
        mountFeed();
        bindSettings();
      });
      // When opening console, initialize stream
      document.addEventListener('click', (e) => {
        if (e.target.closest('[onclick*="openApp(\'console-app\')"]')) {
          setTimeout(() => { mountConsole(); mountIcons(); }, 50);
        }
      });
      // Re-mount icons after any action that inserts elements
      document.addEventListener('transitionend', mountIcons);
      document.addEventListener('animationend', mountIcons);
    
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
      

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-40 -left-20 w-[38rem] h-[38rem] rounded-full blur-3xl opacity-40" style={{background: 'radial-gradient(closest-side, rgba(34,211,238,0.18), rgba(34,211,238,0) 70%)'}}></div>
<div className="absolute -bottom-32 -right-24 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-40" style={{background: 'radial-gradient(closest-side, rgba(168,85,247,0.2), rgba(168,85,247,0) 70%)'}}></div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70%] h-[65%] rounded-[32px] blur-2xl opacity-20" style={{background: 'conic-gradient(from 120deg at 50% 50%, rgba(56,189,248,0.1), rgba(168,85,247,0.12), rgba(99,102,241,0.10), rgba(56,189,248,0.1))'}}></div>
</div>

<div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl" style={{top: 'calc(0.75rem + env(safe-area-inset-top))'}}>
<div className="rounded-2xl p-[1px] bg-gradient-to-r from-cyan-400/40 via-fuchsia-400/40 to-indigo-400/40">
<div className="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 px-3 py-2" style={{boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 8px 30px rgba(59,130,246,0.15)'}}>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400/70 to-fuchsia-400/70 ring-1 ring-white/20 flex items-center justify-center" style={{boxShadow: '0 0 24px rgba(34, 211, 238, 0.35), inset 0 0 28px rgba(168, 85, 247, 0.18)'}}>
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
</div>
<div className="hidden sm:flex items-center gap-4 text-[12px] text-slate-200/90">
<button className="hover:text-white transition" onclick="openApp('browser-app')">Finder</button>
<button className="hover:text-white transition">File</button>
<button className="hover:text-white transition">Edit</button>
<button className="hover:text-white transition">View</button>
<div className="mx-1 h-4 w-px bg-white/10"></div>
<button className="hover:text-white transition" onclick="openApp('settings-app')">Settings</button>
</div>
</div>
<div className="flex items-center gap-3 text-[12px]">
<div className="hidden md:flex items-center gap-2">
<i className="w-4 h-4 text-cyan-300" data-lucide="wifi"></i>
<i className="w-4 h-4 text-slate-200" data-lucide="battery"></i>
</div>
<div className="h-4 w-px bg-white/10 mx-1 hidden md:block"></div>
<span className="tabular-nums text-slate-100" id="clock">--:--</span>
</div>
</div>
</div>
</div>

<div className="relative pt-24 pb-28 max-w-[1600px] mx-auto w-[94%]" style={{paddingBottom: 'calc(7rem + env(safe-area-inset-bottom))'}}>

<div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<pattern height="6" id="grid" patternunits="userSpaceOnUse" width="6">
<path d="M 6 0 L 0 0 0 6" fill="none" stroke="url(#grad)" strokeWidth="0.3"></path>
</pattern>
<lineargradient id="grad" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#22d3ee"></stop>
<stop offset="100%" stop-color="#a855f7"></stop>
</lineargradient>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="grid grid-cols-3 sm:grid-cols-1 gap-4 sm:gap-6 w-full sm:w-24">
<button className="group flex flex-col items-center focus:outline-none" onclick="openApp('browser-app')">
<div className="w-16 h-16 rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/40 via-fuchsia-400/40 to-indigo-400/40 transition-transform group-hover:scale-105">
<div className="w-full h-full rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 flex items-center justify-center" style={{boxShadow: '0 0 40px rgba(59, 130, 246, 0.25), inset 0 0 80px rgba(34,211,238,0.15)'}}>
<i className="w-8 h-8 text-cyan-200" data-lucide="compass"></i>
</div>
</div>
<span className="text-[11px] mt-2 text-center text-slate-200/90">Quantum</span>
</button>
<button className="group flex flex-col items-center focus:outline-none" onclick="openApp('console-app')">
<div className="w-16 h-16 rounded-2xl p-[1px] bg-gradient-to-br from-fuchsia-400/40 via-indigo-400/40 to-cyan-400/40 transition-transform group-hover:scale-105">
<div className="w-full h-full rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 flex items-center justify-center" style={{boxShadow: '0 0 40px rgba(168, 85, 247, 0.25), inset 0 0 80px rgba(99,102,241,0.15)'}}>
<i className="w-8 h-8 text-fuchsia-200" data-lucide="terminal"></i>
</div>
</div>
<span className="text-[11px] mt-2 text-center text-slate-200/90">Holo Console</span>
</button>
<button className="group flex flex-col items-center focus:outline-none" onclick="openApp('settings-app')">
<div className="w-16 h-16 rounded-2xl p-[1px] bg-gradient-to-br from-indigo-400/40 via-cyan-400/40 to-fuchsia-400/40 transition-transform group-hover:scale-105">
<div className="w-full h-full rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 flex items-center justify-center" style={{boxShadow: '0 0 40px rgba(99, 102, 241, 0.25), inset 0 0 80px rgba(34,211,238,0.15)'}}>
<i className="w-8 h-8 text-indigo-200" data-lucide="settings"></i>
</div>
</div>
<span className="text-[11px] mt-2 text-center text-slate-200/90">Settings</span>
</button>
</div>

<div className="absolute left-1/2 top-[18%] -translate-x-1/2 hidden md:block">
<div className="rounded-full w-72 h-72 opacity-40 blur-3xl" style={{background: 'radial-gradient(closest-side, rgba(99,102,241,0.28), rgba(99,102,241,0) 70%)'}}></div>
</div>

<div className="app-window hidden absolute left-1/2 top-24 sm:top-40 -translate-x-1/2 w-[94%] max-w-5xl h-[70vh] z-20" id="browser-app">
<div className="p-[1px] rounded-[20px] bg-gradient-to-br from-cyan-400/50 via-fuchsia-400/50 to-indigo-400/50">
<div className="rounded-[20px] overflow-hidden bg-white/10 backdrop-blur-xl border border-white/15" style={{boxShadow: '0 24px 80px rgba(30, 41, 59, 0.6), 0 0 0 1px rgba(255,255,255,0.04) inset'}}>

<div className="cursor-move flex items-center justify-between px-3 py-2 bg-white/5 border-b border-white/10" id="browser-header">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-rose-400/90"></span>
<span className="w-3 h-3 rounded-full bg-amber-300/90"></span>
<span className="w-3 h-3 rounded-full bg-emerald-300/90"></span>
</div>
<div className="flex-1 mx-3">
<div className="w-full rounded-xl bg-white/10 border border-white/10 px-3 py-1.5 flex items-center gap-2">
<i className="w-3.5 h-3.5 text-slate-300/80" data-lucide="lock"></i>
<input className="bg-transparent text-[12px] w-full outline-none text-slate-100/90" readonly="" value="https://holo.desktop"/>
</div>
</div>
<div className="flex items-center gap-2">
<button className="rounded-lg px-2 py-1 bg-white/5 border border-white/10 hover:bg-white/10 transition" onclick="minimizeApp('browser-app')">
<i className="w-3.5 h-3.5" data-lucide="minus"></i>
</button>
<button className="rounded-lg px-2 py-1 bg-white/5 border border-white/10 hover:bg-white/10 transition" onclick="maximizeApp('browser-app')">
<i className="w-3.5 h-3.5" data-lucide="maximize-2"></i>
</button>
<button className="rounded-lg px-2 py-1 bg-white/5 border border-white/10 hover:bg-white/10 transition" onclick="closeApp('browser-app')">
<i className="w-3.5 h-3.5" data-lucide="x"></i>
</button>
</div>
</div>

<div className="relative h-[calc(70vh-48px)] flex flex-col md:flex-row">

<div className="pointer-events-none absolute inset-0" style={{maskImage: 'radial-gradient(50% 50% at 50% 50%, black 30%, transparent 75%)', opacity: '.28'}}>
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 600 600">
<defs>
<lineargradient id="hgrad" x1="0" x2="1">
<stop offset="0%" stop-color="#22d3ee"></stop>
<stop offset="50%" stop-color="#a855f7"></stop>
<stop offset="100%" stop-color="#6366f1"></stop>
</lineargradient>
</defs>
<g fill="none" stroke="url(#hgrad)" strokeWidth="0.6">
<circle cx="300" cy="300" r="80"></circle>
<circle cx="300" cy="300" r="140"></circle>
<circle cx="300" cy="300" r="200"></circle>
<circle cx="300" cy="300" r="260"></circle>
</g>
</svg>
</div>
<div className="w-full md:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
<h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold text-white" style={{fontFamily: '\'Tomorrow\', Inter, ui-sans-serif, system-ui'}}>
                  Holographic Desktop Simulation
                </h1>
<p className="mt-3 text-slate-300/90 text-sm md:text-base">
                  A futuristic, liquid-glass interface with hologram layers. Drag windows, open apps, and explore a next‑gen landing experience.
                </p>
<div className="mt-6 flex items-center gap-3">
<button className="rounded-xl px-4 py-2.5 bg-gradient-to-r from-cyan-400/80 to-fuchsia-500/80 text-slate-900 font-medium hover:from-cyan-300 hover:to-fuchsia-400 transition" onclick="openApp('console-app')" style={{boxShadow: '0 10px 30px rgba(34,211,238,0.25)'}}>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="zap"></i>
                      Launch Demo
                    </div>
</button>
<button className="rounded-xl px-4 py-2.5 bg-white/10 border border-white/15 hover:bg-white/15 font-medium transition" onclick="openApp('settings-app')">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="sliders"></i>
                      Customize
                    </div>
</button>
</div>
<div className="mt-6 grid grid-cols-2 gap-3 text-[12px]">
<div className="rounded-xl bg-white/5 border border-white/10 p-3">
<div className="flex items-center gap-2 text-slate-100/90">
<i className="w-4 h-4 text-cyan-300" data-lucide="sparkle"></i>
                      Liquid Glass
                    </div>
<p className="mt-1 text-slate-300/80">Backlit translucency with realistic depth.</p>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3">
<div className="flex items-center gap-2 text-slate-100/90">
<i className="w-4 h-4 text-fuchsia-300" data-lucide="grid"></i>
                      Hologram Layers
                    </div>
<p className="mt-1 text-slate-300/80">Concentric scans, neon edges, soft glow.</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2 p-6 lg:p-8">
<div className="rounded-2xl h-full bg-white/5 border border-white/10 backdrop-blur-xl p-4 md:p-6 flex flex-col" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400/60 to-fuchsia-500/60 ring-1 ring-white/20 flex items-center justify-center" style={{boxShadow: '0 0 20px rgba(34, 211, 238, 0.35)'}}>
<i className="w-4 h-4" data-lucide="compass"></i>
</div>
<span className="text-sm">Quantum Overview</span>
</div>
<button className="text-[12px] px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition" onclick="openApp('console-app')">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="play"></i> Run
                      </div>
</button>
</div>
<div className="mt-4 flex-1 rounded-xl bg-black/30 border border-white/5 overflow-hidden">
<div className="px-3 py-2 text-[11px] border-b border-white/10 flex items-center gap-2 bg-white/5">
<i className="w-3.5 h-3.5 text-slate-300/80" data-lucide="chevron-right"></i>
<span className="text-slate-300/90">Holographic status feed</span>
</div>
<div className="p-4 space-y-2 text-[12px]" id="feed">

</div>
</div>
<p className="mt-3 text-[11px] text-slate-300/70">Drag window by its header. Use dock or icons to reopen.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="app-window hidden absolute left-1/2 top-28 sm:top-52 -translate-x-1/2 w-[94%] max-w-3xl h-[54vh] z-30" id="console-app">
<div className="p-[1px] rounded-[18px] bg-gradient-to-r from-fuchsia-400/50 via-indigo-400/50 to-cyan-400/50">
<div className="rounded-[18px] overflow-hidden bg-black/55 backdrop-blur-xl border border-white/15" style={{boxShadow: '0 24px 80px rgba(30, 41, 59, 0.55), inset 0 0 0 1px rgba(255,255,255,0.04)'}}>
<div className="cursor-move flex items-center justify-between px-3 py-2 bg-white/5 border-b border-white/10" id="console-header">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-rose-400/90"></span>
<span className="w-3 h-3 rounded-full bg-amber-300/90"></span>
<span className="w-3 h-3 rounded-full bg-emerald-300/90"></span>
</div>
<span className="text-[12px] text-slate-300/90">Holo Console</span>
<div className="flex items-center gap-2">
<button className="rounded-lg px-2 py-1 bg-white/5 border border-white/10 hover:bg-white/10 transition" onclick="minimizeApp('console-app')">
<i className="w-3.5 h-3.5" data-lucide="minus"></i>
</button>
<button className="rounded-lg px-2 py-1 bg-white/5 border border-white/10 hover:bg-white/10 transition" onclick="maximizeApp('console-app')">
<i className="w-3.5 h-3.5" data-lucide="maximize-2"></i>
</button>
<button className="rounded-lg px-2 py-1 bg-white/5 border border-white/10 hover:bg-white/10 transition" onclick="closeApp('console-app')">
<i className="w-3.5 h-3.5" data-lucide="x"></i>
</button>
</div>
</div>
<div className="h-[calc(54vh-44px)] flex">
<div className="w-28 hidden sm:flex flex-col gap-2 p-3 border-r border-white/10 bg-white/5">
<div className="rounded-lg px-2 py-1.5 bg-white/5 border border-white/10 text-[11px] text-slate-300/90 flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-cyan-300" data-lucide="list-tree"></i> Logs
                </div>
<div className="rounded-lg px-2 py-1.5 bg-white/0 border border-white/10 text-[11px] text-slate-300/90 flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-fuchsia-300" data-lucide="cpu"></i> System
                </div>
<div className="rounded-lg px-2 py-1.5 bg-white/0 border border-white/10 text-[11px] text-slate-300/90 flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-indigo-300" data-lucide="box"></i> Apps
                </div>
</div>
<div className="flex-1 p-3 md:p-5">
<div className="rounded-xl h-full bg-white/5 border border-white/10 overflow-hidden">
<div className="px-3 py-2 text-[11px] border-b border-white/10 flex items-center gap-2 bg-white/5">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="activity"></i>
                    Live stream
                  </div>
<div className="p-4 h-[calc(100%-34px)] overflow-y-auto text-[12px] font-medium leading-6" id="console-stream">

</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="app-window hidden absolute left-1/2 top-32 sm:top-56 -translate-x-1/2 w-[94%] max-w-2xl h-[56vh] z-40" id="settings-app">
<div className="p-[1px] rounded-[18px] bg-gradient-to-r from-cyan-400/50 via-indigo-400/50 to-fuchsia-400/50">
<div className="rounded-[18px] overflow-hidden bg-white/10 backdrop-blur-xl border border-white/15" style={{boxShadow: '0 24px 80px rgba(30, 41, 59, 0.5), inset 0 0 0 1px rgba(255,255,255,0.05)'}}>
<div className="cursor-move flex items-center justify-between px-3 py-2 bg-white/5 border-b border-white/10" id="settings-header">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-rose-400/90"></span>
<span className="w-3 h-3 rounded-full bg-amber-300/90"></span>
<span className="w-3 h-3 rounded-full bg-emerald-300/90"></span>
</div>
<span className="text-[12px] text-slate-300/90">System Settings</span>
<div className="flex items-center gap-2">
<button className="rounded-lg px-2 py-1 bg-white/5 border border-white/10 hover:bg-white/10 transition" onclick="minimizeApp('settings-app')">
<i className="w-3.5 h-3.5" data-lucide="minus"></i>
</button>
<button className="rounded-lg px-2 py-1 bg-white/5 border border-white/10 hover:bg-white/10 transition" onclick="maximizeApp('settings-app')">
<i className="w-3.5 h-3.5" data-lucide="maximize-2"></i>
</button>
<button className="rounded-lg px-2 py-1 bg-white/5 border border-white/10 hover:bg-white/10 transition" onclick="closeApp('settings-app')">
<i className="w-3.5 h-3.5" data-lucide="x"></i>
</button>
</div>
</div>
<div className="h-[calc(56vh-44px)] flex">

<div className="w-40 p-3 border-r border-white/10 bg-white/5 hidden sm:block">
<div className="space-y-2">
<button className="w-full flex items-center gap-2 text-[12px] rounded-lg px-2 py-1.5 bg-white/10 border border-white/10">
<i className="w-3.5 h-3.5 text-cyan-300" data-lucide="sparkles"></i> General
                  </button>
<button className="w-full flex items-center gap-2 text-[12px] rounded-lg px-2 py-1.5 bg-white/0 border border-white/10">
<i className="w-3.5 h-3.5 text-fuchsia-300" data-lucide="palette"></i> Appearance
                  </button>
<button className="w-full flex items-center gap-2 text-[12px] rounded-lg px-2 py-1.5 bg-white/0 border border-white/10">
<i className="w-3.5 h-3.5 text-indigo-300" data-lucide="shield"></i> Security
                  </button>
</div>
</div>

<div className="flex-1 p-4 md:p-6 overflow-y-auto">
<h2 className="text-xl tracking-tight font-semibold text-white" style={{fontFamily: '\'Tomorrow\', Inter, ui-sans-serif, system-ui'}}>Appearance</h2>
<p className="text-[13px] text-slate-300/80 mt-1">Adjust hologram intensity, glow, and glass depth.</p>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-300" data-lucide="sun-medium"></i>
<span className="text-[13px]">Hologram Glow</span>
</div>
<button className="relative inline-flex h-6 w-11 items-center rounded-full transition bg-cyan-400/40 ring-1 ring-white/20" id="toggle-glow">
<span className="translate-x-6 inline-block w-4 h-4 transform bg-white rounded-full transition"></span>
</button>
</div>
<p className="text-[12px] text-slate-300/70 mt-2">Enhances aura and neon edges across windows.</p>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-cyan-300" data-lucide="glass-water"></i>
<span className="text-[13px]">Glass Depth</span>
</div>
<div className="flex items-center gap-2">
<button className="depth-btn rounded-lg px-2 py-1 text-[12px] bg-white/10 border border-white/10" data-depth="low">Low</button>
<button className="depth-btn rounded-lg px-2 py-1 text-[12px] bg-white/0 border border-white/10" data-depth="med">Med</button>
<button className="depth-btn rounded-lg px-2 py-1 text-[12px] bg-white/0 border border-white/10" data-depth="high">High</button>
</div>
</div>
<p className="text-[12px] text-slate-300/70 mt-2">Controls blur and refraction richness.</p>
</div>
</div>
<div className="mt-4 rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-fuchsia-300" data-lucide="grid"></i>
<span className="text-[13px]">Hologram Rings</span>
</div>
<button className="relative inline-flex h-6 w-11 items-center rounded-full transition bg-white/20 ring-1 ring-white/20" id="toggle-rings">
<span className="translate-x-1 inline-block w-4 h-4 transform bg-white rounded-full transition"></span>
</button>
</div>
<p className="text-[12px] text-slate-300/70 mt-2">Toggle concentric scanner rings in windows.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 flex gap-2" id="minimized-tray" style={{bottom: 'calc(6rem + env(safe-area-inset-bottom))'}}></div>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50" style={{bottom: 'calc(1rem + env(safe-area-inset-bottom))'}}>
<div className="rounded-2xl px-2 py-2 bg-white/10 backdrop-blur-xl border border-white/15 flex items-center gap-2" style={{boxShadow: '0 18px 60px rgba(2, 6, 23, 0.55), inset 0 1px 0 rgba(255,255,255,0.06)'}}>
<button className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl p-[1px] bg-gradient-to-br from-cyan-400/50 via-fuchsia-400/50 to-indigo-400/50 hover:scale-110 transition" onclick="openApp('browser-app')">
<div className="w-full h-full rounded-xl bg-white/10 border border-white/15 flex items-center justify-center" style={{boxShadow: '0 0 24px rgba(34, 211, 238, 0.25), inset 0 0 48px rgba(168,85,247,0.15)'}}>
<i className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-200" data-lucide="compass"></i>
</div>
</button>
<button className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl p-[1px] bg-gradient-to-br from-fuchsia-400/50 via-indigo-400/50 to-cyan-400/50 hover:scale-110 transition" onclick="openApp('console-app')">
<div className="w-full h-full rounded-xl bg-white/10 border border-white/15 flex items-center justify-center" style={{boxShadow: '0 0 24px rgba(168, 85, 247, 0.25), inset 0 0 48px rgba(99,102,241,0.15)'}}>
<i className="w-5 h-5 sm:w-6 sm:h-6 text-fuchsia-200" data-lucide="terminal"></i>
</div>
</button>
<button className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl p-[1px] bg-gradient-to-br from-indigo-400/50 via-cyan-400/50 to-fuchsia-400/50 hover:scale-110 transition" onclick="openApp('settings-app')">
<div className="w-full h-full rounded-xl bg-white/10 border border-white/15 flex items-center justify-center" style={{boxShadow: '0 0 24px rgba(99, 102, 241, 0.25), inset 0 0 48px rgba(34,211,238,0.15)'}}>
<i className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-200" data-lucide="settings"></i>
</div>
</button>
</div>
<div className="flex justify-center mt-1">
<div className="h-1 w-24 rounded-full bg-white/10"></div>
</div>
</div>
</div>


    </>
  );
}
