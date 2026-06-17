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



    // Typography
    document.body.style.fontFamily = "Inter, 'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji','Segoe UI Emoji'";

    // Icon render
    function renderIcons() {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    // Router
    const routes = [...document.querySelectorAll('[data-route]')];
    function showRoute(hash) {
      const route = (hash || '#/').replace('#', '');
      routes.forEach(s => {
        s.classList.toggle('hidden', s.getAttribute('data-route') !== route);
      });
      const titles = {
        '/': 'FitchTech — Simple, Everyday Finance',
        '/blog': 'Blog — FitchTech',
        '/about': 'About — FitchTech',
        '/contact': 'Contact — FitchTech',
        '/stats': 'Statistics — FitchTech',
        '/scan': 'Scan & Pay — FitchTech',
        '/settings': 'Settings — FitchTech',
        '/profile': 'Profile — FitchTech'
      };
      document.title = titles[route] || 'FitchTech';
      renderIcons();
    }
    function navigate(hash) {
      window.location.hash = hash;
    }
    window.addEventListener('hashchange', () => showRoute(window.location.hash));
    window.addEventListener('DOMContentLoaded', () => {
      // Theme init
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark');
      }
      renderIcons();
      showRoute(window.location.hash || '#/');

      // Footer year
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();

      // Quick nav anchors
      document.querySelectorAll('[data-link]').forEach(a => {
        a.addEventListener('click', () => {});
      });

      // Command palette
      const modal = document.getElementById('cmdkModal');
      const input = document.getElementById('cmdkInput');
      const list = document.getElementById('cmdkList');
      function openCmdk() {
        modal.classList.remove('hidden');
        input.value = '';
        filterCmdk('');
        setTimeout(() => input.focus(), 0);
      }
      function closeCmdk() {
        modal.classList.add('hidden');
      }
      function filterCmdk(q) {
        const term = q.toLowerCase().trim();
        list.querySelectorAll('.cmdk-item').forEach(item => {
          const text = item.textContent.toLowerCase();
          item.classList.toggle('hidden', term && !text.includes(term));
        });
      }
      function activateFirstVisible() {
        const first = Array.from(list.querySelectorAll('.cmdk-item')).find(i => !i.classList.contains('hidden'));
        if (first) first.click();
      }
      document.getElementById('cmdk')?.addEventListener('click', openCmdk);
      document.getElementById('heroCmdk')?.addEventListener('click', openCmdk);
      modal.querySelector('[data-cmdk-close]')?.addEventListener('click', closeCmdk);
      input?.addEventListener('input', (e) => filterCmdk(e.target.value));
      input?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          activateFirstVisible();
        }
        if (e.key === 'Escape') closeCmdk();
      });
      list?.addEventListener('click', (e) => {
        const li = e.target.closest('.cmdk-item');
        if (!li) return;
        closeCmdk();
        navigate(li.dataset.action);
      });

      // Keyboard: open with /
      document.addEventListener('keydown', (e) => {
        if (e.key === '/') {
          e.preventDefault();
          openCmdk();
        }
        if (e.key.toLowerCase() === 'p' && (e.metaKey || e.ctrlKey)) {
          navigate('#/profile');
        }
      });

      // Settings toggles (custom)
      document.querySelectorAll('[data-toggle]').forEach(btn => {
        btn.addEventListener('click', () => {
          const isOn = btn.getAttribute('aria-checked') === 'true';
          btn.setAttribute('aria-checked', String(!isOn));
          const knob = btn.querySelector('span');
          if (isOn) {
            btn.classList.remove('bg-blue-600');
            btn.classList.add('bg-white/10');
            knob.style.transform = 'translateX(0px)';
          } else {
            btn.classList.add('bg-blue-600');
            btn.classList.remove('bg-white/10');
            knob.style.transform = 'translateX(1.25rem)';
          }
          if (btn.dataset.toggle === 'theme') {
            const nowDark = !isOn;
            if (nowDark) {
              document.body.classList.add('dark');
              localStorage.setItem('theme', 'dark');
            } else {
              document.body.classList.remove('dark');
              localStorage.setItem('theme', 'light');
            }
          }
        });
      });

      // Header theme toggle
      const themeToggle = document.getElementById('themeToggle');
      themeToggle?.addEventListener('click', () => {
        const dark = document.body.classList.toggle('dark');
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        const tbtn = document.querySelector('[data-toggle="theme"]');
        if (tbtn) {
          const isOn = tbtn.getAttribute('aria-checked') === 'true';
          if (!dark && isOn) tbtn.click();
          if (dark && !isOn) tbtn.click();
        }
      });

      // Stats counters animation
      const animateCount = (el, to, prefix = '', duration = 1200) => {
        const start = performance.now();
        const from = 0;
        const step = (t) => {
          const p = Math.min(1, (t - start) / duration);
          const val = Math.floor(from + (to - from) * (0.5 - Math.cos(Math.PI * p) / 2));
          el.textContent = prefix + val.toLocaleString();
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const kpiVolume = document.getElementById('kpiVolume');
      const kpiUsers = document.getElementById('kpiUsers');
      if (kpiVolume && kpiUsers) {
        animateCount(kpiVolume, 1200000000, '$');
        animateCount(kpiUsers, 52000, '');
      }

      // Scan: camera controls
      const video = document.getElementById('video');
      const startBtn = document.getElementById('startScan');
      const stopBtn = document.getElementById('stopScan');
      const fallback = document.getElementById('cameraFallback');
      let stream;
      async function startCamera() {
        try {
          stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
          fallback?.classList.add('hidden');
          if (video) video.srcObject = stream;
        } catch (e) {
          fallback?.classList.remove('hidden');
          console.warn('Camera error:', e);
        }
      }
      function stopCamera() {
        if (stream) {
          stream.getTracks().forEach(t => t.stop());
          stream = null;
        }
        if (video) video.srcObject = null;
      }
      startBtn?.addEventListener('click', startCamera);
      stopBtn?.addEventListener('click', stopCamera);

      // Auto-stop camera when leaving scan route
      window.addEventListener('hashchange', () => {
        if (window.location.hash !== '#/scan') stopCamera();
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
      

<div className="relative min-h-screen isolate">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950"></div>
<div className="absolute -top-32 -left-40 h-[40rem] w-[40rem] blur-3xl opacity-20 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-500 via-indigo-500 to-cyan-500 rounded-full"></div>
<div className="absolute top-1/2 -right-40 h-[36rem] w-[36rem] blur-3xl opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-s-400 via-indigo-500 to-blue-600 rounded-full"></div>
</div>

<header className="sticky top-3 z-40 backdrop-blur supports-[backdrop-filter]:-slate-950/70 bg-slate-950/60 border-b border-white/5 shadow-sm">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold tracking-tight">
<span style={{letterSpacing: '-0.04em'}}>FT</span>
</div>
<div className="hidden sm:block">
<div className="text-xl font-semibold tracking-tight">FitchTech</div>
<div className="text-xs text-slate-400">Everyday finance, simplified</div>
</div>
</div>

<nav className="hidden md:flex items-center gap-1">
<a className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition" data-link="" href="#/">Home</a>
<a className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition" data-link="" href="#/blog">Blog</a>
<a className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition" data-link="" href="#/about">About</a>
<a className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition" data-link="" href="#/contact">Contact</a>
<a className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition" data-link="" href="#/stats">Statistics</a>
<a className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition" data-link="" href="#/scan">Scan</a>
<a className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition" data-link="" href="#/settings">Settings</a>
</nav>

<div className="flex items-center gap-2">
<button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-200 transition" id="cmdk">
<i className="size-4" data-lucide="command"></i>
<span className="text-sm">Quick actions</span>
<span className="text-[0.75rem] text-slate-400 hidden lg:inline">/</span>
</button>
<button aria-label="Toggle theme" className="flex items-center justify-center h-10 w-10 rounded-md bg-white/5 hover:bg-white/10 transition" id="themeToggle">
<i className="size-5" data-lucide="moon"></i>
</button>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white transition" data-link="" href="#/scan">
<i className="size-4" data-lucide="scan"></i>
<span className="text-sm font-medium">Pay / Scan</span>
</a>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

<section className="space-y-16" data-route="/">

<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
<span className="inline-flex items-center gap-1 text-sky-300">
<i className="size-3.5" data-lucide="sparkles"></i>
                New
              </span>
<span className="text-slate-400">Utilities + Bulk Payments live</span>
</div>

<div className="flex items-center gap-3 flex-wrap">
<h1 className="text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight grow">
                Everyday finance, <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">beautifully simple</span>
</h1>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-100 transition" id="heroCmdk">
<i className="size-4" data-lucide="zap"></i>
<span className="text-sm">Quick actions</span>
</button>
</div>
<p className="text-slate-300/90 max-w-2xl">
              Your simplicity is our concern. Pay merchants via QR, send bulk payouts, swap assets, settle in fiat, and buy utilities like data, airtime, and electricity — all in one place.
            </p>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white transition" data-link="" href="#/scan">
<i className="size-5" data-lucide="scan"></i>
                Get Started
              </a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/5 hover:bg-white/10 text-slate-100 transition" data-link="" href="#/about">
<i className="size-5" data-lucide="info"></i>
                Learn more
              </a>
<div className="flex items-center gap-2 pl-1">
<span className="text-sm text-slate-400">Ecosystem</span>
<div className="flex items-center gap-1.5">
<span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-300 text-xs border border-blue-500/20">BTC</span>
<span className="px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-xs border border-indigo-500/20">ETH</span>
<span className="px-2 py-1 rounded-md bg-fuchsia-500/10 text-fuchsia-300 text-xs border border-fuchsia-500/20">DOT</span>
<span className="px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-300 text-xs border border-cyan-500/20">XLM</span>
<span className="px-2 py-1 rounded-md bg-sky-500/10 text-sky-300 text-xs border border-sky-500/20">STRK</span>
</div>
</div>
</div>

<div className="grid sm:grid-cols-3 gap-4 pt-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-3xl font-semibold tracking-tight">50k+</div>
<div className="text-sm text-slate-400">Active users</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-3xl font-semibold tracking-tight">$1.2B+</div>
<div className="text-sm text-slate-400">Processed volume</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-3xl font-semibold tracking-tight">99.99%</div>
<div className="text-sm text-slate-400">Uptime</div>
</div>
</div>
</div>

<div className="relative">
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/70 to-slate-900/30 p-6 shadow-2xl">
<div className="flex items-center justify-between mb-4">
<div className="text-sm text-slate-400">Quick actions</div>
<div className="flex items-center gap-2">
<button className="h-8 w-8 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center transition" title="Notifications">
<i className="size-4" data-lucide="bell"></i>
</button>
<button className="h-8 w-8 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center transition" data-link="" onclick="navigate('#/settings')" title="Settings">
<i className="size-4" data-lucide="settings"></i>
</button>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">

<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 mb-2">
<i className="size-5 text-blue-300" data-lucide="qr-code"></i>
<div className="font-medium">Merchant QR Payment</div>
</div>
<p className="text-sm text-slate-400 mb-3">Show code or scan to pay in seconds.</p>
<div className="aspect-square rounded-lg bg-slate-950/60 border border-white/10 flex items-center justify-center">
<i className="size-10 text-slate-400" data-lucide="scan"></i>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm transition" data-link="" onclick="navigate('#/scan')">Open Scanner</button>
<button className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-100 text-sm transition">Show My QR</button>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 mb-2">
<i className="size-5 text-indigo-300" data-lucide="arrows-left-right"></i>
<div className="font-medium">Swap Assets</div>
</div>
<p className="text-sm text-slate-400 mb-3">Low-fee swaps across BTC, ETH, DOT, XLM, STRK.</p>
<div className="space-y-3">
<div className="grid grid-cols-3 gap-2 items-center">
<label className="text-sm text-slate-300">From</label>
<select className="col-span-2 w-full rounded-md bg-slate-900/70 border border-white/10 px-3 py-2 text-sm">
<option>ETH</option><option>BTC</option><option>DOT</option><option>XLM</option><option>STRK</option>
</select>
</div>
<div className="grid grid-cols-3 gap-2 items-center">
<label className="text-sm text-slate-300">To</label>
<select className="col-span-2 w-full rounded-md bg-slate-900/70 border border-white/10 px-3 py-2 text-sm">
<option>USDC</option><option>BTC</option><option>ETH</option><option>XLM</option><option>STRK</option>
</select>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-sm transition">
<i className="size-4" data-lucide="repeat-2"></i>
                      Preview Rate
                    </button>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 mb-2">
<i className="size-5 text-sky-300" data-lucide="users"></i>
<div className="font-medium">Bulk Payments</div>
</div>
<p className="text-sm text-slate-400 mb-3">Upload recipients and settle in one go.</p>
<div className="rounded-lg border border-dashed border-white/10 bg-slate-950/40 p-4 text-center">
<i className="size-8 mx-auto text-slate-400 mb-2" data-lucide="upload-cloud"></i>
<div className="text-sm text-slate-400">Drop CSV or <span className="text-sky-300">browse</span></div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 mb-2">
<i className="size-5 text-cyan-300" data-lucide="utility-pole"></i>
<div className="font-medium">Utilities</div>
</div>
<p className="text-sm text-slate-400 mb-3">Buy data, airtime, electricity instantly.</p>
<div className="grid grid-cols-3 gap-2">
<button className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-100 text-sm transition">Data</button>
<button className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-100 text-sm transition">Airtime</button>
<button className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-100 text-sm transition">Electricity</button>
</div>
</div>
</div>
</div>

<div className="hidden lg:block absolute -bottom-6 -right-4 rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur p-4 shadow-xl">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
<i className="size-5 text-white" data-lucide="shield-check"></i>
</div>
<div>
<div className="font-medium tracking-tight">Bank-grade security</div>
<div className="text-xs text-slate-400">Biometric &amp; multi-sig supported</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-8">
<div className="flex items-center justify-between">
<h2 className="text-3xl font-semibold tracking-tight">What you can do</h2>
<a className="text-sm text-slate-300 hover:text-white transition" data-link="" href="#/about">Explore our approach →</a>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 mb-2">
<i className="size-5 text-blue-300" data-lucide="qr-code"></i>
<div className="font-medium">Merchant QR</div>
</div>
<p className="text-slate-400 text-sm">Pay in-store or online with instant QR — secure, fast, universal.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 mb-2">
<i className="size-5 text-green-300" data-lucide="banknote"></i>
<div className="font-medium">Fiat Payments</div>
</div>
<p className="text-slate-400 text-sm">On/off ramp with local currencies and bank settlement.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 mb-2">
<i className="size-5 text-indigo-300" data-lucide="arrows-left-right"></i>
<div className="font-medium">Swaps</div>
</div>
<p className="text-slate-400 text-sm">Cross-asset swaps with transparent pricing and low fees.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 mb-2">
<i className="size-5 text-sky-300" data-lucide="users"></i>
<div className="font-medium">Bulk Payouts</div>
</div>
<p className="text-slate-400 text-sm">Automate payroll, vendor, and community disbursements.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 mb-2">
<i className="size-5 text-cyan-300" data-lucide="utility-pole"></i>
<div className="font-medium">Utilities</div>
</div>
<p className="text-slate-400 text-sm">Top up data, airtime, and electricity in seconds.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 mb-2">
<i className="size-5 text-fuchsia-300" data-lucide="shield"></i>
<div className="font-medium">Security</div>
</div>
<p className="text-slate-400 text-sm">Multi-sig, device trust, fraud checks, and 24/7 monitoring.</p>
</div>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-2xl font-semibold tracking-tight">Supported ecosystem</h3>
<a className="text-sm text-slate-300 hover:text-white transition" data-link="" href="#/stats">See market stats →</a>
</div>
<div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="font-medium">BTC</div>
<span className="text-xs text-amber-300">Bitcoin</span>
</div>
<div className="mt-3 h-2 rounded bg-white/10 overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-amber-400 to-orange-500"></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="font-medium">ETH</div>
<span className="text-xs text-indigo-300">Ethereum</span>
</div>
<div className="mt-3 h-2 rounded bg-white/10 overflow-hidden">
<div className="h-full w-4/5 bg-gradient-to-r from-indigo-400 to-violet-500"></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="font-medium">DOT</div>
<span className="text-xs text-fuchsia-300">Polkadot</span>
</div>
<div className="mt-3 h-2 rounded bg-white/10 overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-fuchsia-400 to-pink-500"></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="font-medium">XLM</div>
<span className="text-xs text-cyan-300">Stellar</span>
</div>
<div className="mt-3 h-2 rounded bg-white/10 overflow-hidden">
<div className="h-full w-3/5 bg-gradient-to-r from-cyan-400 to-sky-500"></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="font-medium">STRK</div>
<span className="text-xs text-sky-300">Stark</span>
</div>
<div className="mt-3 h-2 rounded bg-white/10 overflow-hidden">
<div className="h-full w-1/2 bg-gradient-to-r from-sky-400 to-blue-500"></div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/50 to-slate-900/20 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div>
<div className="text-2xl font-semibold tracking-tight">Ready to simplify your money?</div>
<div className="text-sm text-slate-400">Join thousands using FitchTech daily for payments and utilities.</div>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-100 text-sm transition" data-link="" href="#/settings">
<i className="size-4" data-lucide="settings"></i>
              Configure
            </a>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm transition" data-link="" href="#/scan">
<i className="size-4" data-lucide="arrow-right"></i>
              Start now
            </a>
</div>
</div>
</section>

<section className="hidden space-y-10" data-route="/blog">
<div className="flex items-center justify-between">
<h2 className="text-4xl font-semibold tracking-tight">Insights &amp; updates</h2>
<div className="relative">
<i className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="search"></i>
<input className="pl-9 pr-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm w-64 placeholder:text-slate-500" placeholder="Search articles" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<article className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
<div className="h-36 bg-gradient-to-br from-blue-600/40 to-indigo-600/30"></div>
<div className="p-5 space-y-3">
<div className="text-xs text-slate-400">Product • 4 min read</div>
<h3 className="text-xl font-semibold tracking-tight">Merchant QR goes global</h3>
<p className="text-sm text-slate-400">Tap-to-pay meets QR for seamless in-store and web checkout.</p>
<a className="inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200 transition" href="#">
                Read more <i className="size-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>
<article className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
<div className="h-36 bg-gradient-to-br from-cyan-600/40 to-blue-600/30"></div>
<div className="p-5 space-y-3">
<div className="text-xs text-slate-400">Engineering • 6 min read</div>
<h3 className="text-xl font-semibold tracking-tight">How we secure swaps</h3>
<p className="text-sm text-slate-400">A peek into our routing engine, oracles, and monitoring.</p>
<a className="inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200 transition" href="#">
                Read more <i className="size-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>
<article className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
<div className="h-36 bg-gradient-to-br from-fuchsia-600/40 to-indigo-600/30"></div>
<div className="p-5 space-y-3">
<div className="text-xs text-slate-400">Guides • 3 min read</div>
<h3 className="text-xl font-semibold tracking-tight">Bulk payouts 101</h3>
<p className="text-sm text-slate-400">Set up compliant vendor or community disbursements.</p>
<a className="inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200 transition" href="#">
                Read more <i className="size-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>
</div>
</section>

<section className="hidden space-y-12" data-route="/about">
<div className="grid lg:grid-cols-2 gap-10">
<div className="space-y-5">
<h2 className="text-4xl font-semibold tracking-tight">Money that works for everyone</h2>
<p className="text-slate-300/90">We build simple financial rails for daily life — whether you’re buying breakfast, paying a bill, or running a business. Our mission is to bring speed, fairness, and clarity to everyday finance.</p>
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-3xl font-semibold tracking-tight">2019</div>
<div className="text-sm text-slate-400">Founded</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-3xl font-semibold tracking-tight">18</div>
<div className="text-sm text-slate-400">Markets</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-6">
<div className="flex items-start gap-4">
<div className="h-11 w-11 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
<i className="size-5 text-white" data-lucide="target"></i>
</div>
<div>
<div className="font-medium mb-1">Our principles</div>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex gap-2"><i className="size-4 text-green-300 mt-0.5" data-lucide="check"></i>Security first, always-on privacy</li>
<li className="flex gap-2"><i className="size-4 text-green-300 mt-0.5" data-lucide="check"></i>Simple by default, powerful when needed</li>
<li className="flex gap-2"><i className="size-4 text-green-300 mt-0.5" data-lucide="check"></i>Transparency in pricing and support</li>
</ul>
</div>
</div>
<div className="mt-6">
<div className="text-sm text-slate-400">Backed by a global team across engineering, compliance, and support.</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-8" data-route="/contact">
<h2 className="text-4xl font-semibold tracking-tight">Contact us</h2>
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
<form className="space-y-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-sm text-slate-300">Name</label>
<input className="mt-1 w-full rounded-md bg-slate-900/70 border border-white/10 px-3 py-2 text-sm" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="text-sm text-slate-300">Email</label>
<input className="mt-1 w-full rounded-md bg-slate-900/70 border border-white/10 px-3 py-2 text-sm" placeholder="you@company.com" type="email"/>
</div>
</div>
<div>
<label className="text-sm text-slate-300">Topic</label>
<select className="mt-1 w-full rounded-md bg-slate-900/70 border border-white/10 px-3 py-2 text-sm">
<option>Support</option>
<option>Sales</option>
<option>Partnership</option>
<option>Compliance</option>
</select>
</div>
<div>
<label className="text-sm text-slate-300">Message</label>
<textarea className="mt-1 w-full rounded-md bg-slate-900/70 border border-white/10 px-3 py-2 text-sm" placeholder="How can we help?" rows="5"></textarea>
</div>
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm transition" type="submit">
<i className="size-4" data-lucide="send"></i>
                Send message
              </button>
</form>
</div>
<div className="space-y-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<i className="size-5 text-blue-300" data-lucide="mail"></i>
<div>
<div className="font-medium">Email</div>
<div className="text-sm text-slate-400">support@fitch.tech</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<i className="size-5 text-sky-300" data-lucide="message-square"></i>
<div>
<div className="font-medium">Chat</div>
<div className="text-sm text-slate-400">Mon–Fri, 24h response</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<i className="size-5 text-indigo-300" data-lucide="shield"></i>
<div>
<div className="font-medium">Compliance</div>
<div className="text-sm text-slate-400">KYC/AML ready</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-8" data-route="/stats">
<div className="flex items-center justify-between">
<h2 className="text-4xl font-semibold tracking-tight">Statistics</h2>
<div className="flex items-center gap-2">
<select className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm" id="statRange">
<option>24H</option><option>7D</option><option>30D</option><option>1Y</option>
</select>
<button className="h-10 w-10 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center">
<i className="size-4" data-lucide="download"></i>
</button>
</div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-sm text-slate-400">Tx Volume</div>
<div className="text-3xl font-semibold tracking-tight" id="kpiVolume">$0</div>
<div className="mt-2 text-xs text-emerald-300 inline-flex items-center gap-1"><i className="size-3.5" data-lucide="trending-up"></i><span>+4.8%</span></div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-sm text-slate-400">Active Users</div>
<div className="text-3xl font-semibold tracking-tight" id="kpiUsers">0</div>
<div className="mt-2 text-xs text-emerald-300 inline-flex items-center gap-1"><i className="size-3.5" data-lucide="trending-up"></i><span>+2.1%</span></div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-sm text-slate-400">Avg Fee</div>
<div className="text-3xl font-semibold tracking-tight">0.18%</div>
<div className="mt-2 text-xs text-slate-400">Blended</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-sm text-slate-400">Success Rate</div>
<div className="text-3xl font-semibold tracking-tight">99.99%</div>
<div className="mt-2 text-xs text-emerald-300 inline-flex items-center gap-1"><i className="size-3.5" data-lucide="shield-check"></i><span>Excellent</span></div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between mb-3">
<div className="font-medium">Volume over time</div>
<div className="text-xs text-s-400">USD</div>
</div>
<div className="h-56 grid grid-cols-12 gap-1 items-end">

<div className="bg-gradient-to-t from-blue-600/60 to-indigo-500/60 rounded-t h-12"></div>
<div className="bg-gradient-to-t from-blue-600/60 to-indigo-500/60 rounded-t h-16"></div>
<div className="bg-gradient-to-t from-blue-600/60 to-indigo-500/60 rounded-t h-24"></div>
<div className="bg-gradient-to-t from-blue-600/60 to-indigo-500/60 rounded-t h-20"></div>
<div className="bg-gradient-to-t from-blue-600/60 to-indigo-500/60 rounded-t h-28"></div>
<div className="bg-gradient-to-t from-blue-600/60 to-indigo-500/60 rounded-t h-36"></div>
<div className="bg-gradient-to-t from-blue-600/60 to-indigo-500/60 rounded-t h-28"></div>
<div className="bg-gradient-to-t from-blue-600/60 to-indigo-500/60 rounded-t h-40"></div>
<div className="bg-gradient-to-t from-blue-600/60 to-indigo-500/60 rounded-t h-28"></div>
<div className="bg-gradient-to-t from-blue-600/60 to-indigo-500/60 rounded-t h-24"></div>
<div className="bg-gradient-to-t from-blue-600/60 to-indigo-500/60 rounded-t h-32"></div>
<div className="bg-gradient-to-t from-blue-600/60 to-indigo-500/60 rounded-t h-28"></div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between mb-3">
<div className="font-medium">Asset share</div>
<div className="text-xs text-slate-400">BTC/ETH/DOT/XLM/STRK</div>
</div>
<div className="h-56 flex items-center justify-center">
<div className="relative h-40 w-40">
<div className="absolute inset-0 rounded-full border-8 border-blue-500/60"></div>
<div className="absolute inset-0 rounded-full border-8 border-t-indigo-500/70 border-b-transparent rotate-45"></div>
<div className="absolute inset-6 rounded-full bg-slate-950/80 border border-white/10 flex items-center justify-center">
<div className="text-sm text-slate-300">ETH 36%</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-8" data-route="/scan">
<div className="flex items-center justify-between">
<h2 className="text-4xl font-semibold tracking-tight">Scan &amp; pay</h2>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm transition" id="startScan">
<i className="size-4" data-lucide="camera"></i>
              Start camera
            </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-100 text-sm transition" id="stopScan">
<i className="size-4" data-lucide="square"></i>
              Stop
            </button>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="aspect-video rounded-lg bg-slate-950/60 border border-white/10 relative overflow-hidden flex items-center justify-center">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" id="video" playsinline=""></video>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
<div className="absolute inset-10 border-2 border-sky-400/60 rounded-lg pointer-events-none"></div>
<div className="absolute inset-0 hidden items-center justify-center text-slate-400" id="cameraFallback">
<div className="flex flex-col items-center gap-2">
<i className="size-8" data-lucide="camera-off"></i>
<div className="text-sm">Camera unavailable. Use upload instead.</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-100 text-sm transition">
<i className="size-4" data-lucide="upload"></i>
                Upload code
              </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm transition">
<i className="size-4" data-lucide="check"></i>
                Confirm payment
              </button>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4">
<div className="font-medium">Payment details</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-sm text-slate-300">Amount</label>
<input className="mt-1 w-full rounded-md bg-slate-900/70 border border-white/10 px-3 py-2 text-sm" placeholder="0.00" type="number"/>
</div>
<div>
<label className="text-sm text-slate-300">Currency</label>
<select className="mt-1 w-full rounded-md bg-slate-900/70 border border-white/10 px-3 py-2 text-sm">
<option>USD</option><option>NGN</option><option>EUR</option><option>GHS</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-slate-300">Memo (optional)</label>
<input className="mt-1 w-full rounded-md bg-slate-900/70 border border-white/10 px-3 py-2 text-sm" placeholder="e.g. Order #7423" type="text"/>
</div>
</div>
<div className="pt-2 flex items-center justify-between">
<div className="text-sm text-slate-400">Network fee: ~$0.03</div>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-600 hover:bg-green-500 text-white text-sm transition">
<i className="size-4" data-lucide="send"></i>
                Pay now
              </button>
</div>
</div>
</div>
</section>

<section className="hidden space-y-8" data-route="/settings">
<h2 className="text-4xl font-semibold tracking-tight">Settings</h2>
<div className="grid lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4">
<div className="font-medium">Preferences</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm">Dark mode</div>
<div className="text-xs text-slate-400">Reduce glare and save battery</div>
</div>

<button aria-checked="true" className="relative h-7 w-12 rounded-full transition bg-blue-600" data-toggle="theme" role="switch">
<span className="absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow translate-x-5 transition-transform"></span>
</button>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm">Notifications</div>
<div className="text-xs text-slate-400">Product and payment alerts</div>
</div>
<button aria-checked="true" className="relative h-7 w-12 rounded-full transition bg-blue-600" data-toggle="notify" role="switch">
<span className="absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow translate-x-5 transition-transform"></span>
</button>
</div>
<div>
<label className="text-sm">Language</label>
<select className="mt-1 w-full rounded-md bg-slate-900/70 border border-white/10 px-3 py-2 text-sm">
<option>English</option><option>Français</option><option>Deutsch</option><option>العربية</option>
</select>
</div>
<div>
<label className="text-sm">Base currency</label>
<select className="mt-1 w-full rounded-md bg-slate-900/70 border border-white/10 px-3 py-2 text-sm">
<option>USD</option><option>EUR</option><option>NGN</option><option>GHS</option>
</select>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4">
<div className="font-medium">Security</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm">Biometric unlock</div>
<div className="text-xs text-slate-400">Face/Touch ID on supported devices</div>
</div>
<button aria-checked="false" className="relative h-7 w-12 rounded-full transition bg-white/10" data-toggle="bio" role="switch">
<span className="absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow translate-x-0 transition-transform"></span>
</button>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm">Two-factor auth</div>
<div className="text-xs text-slate-400">Extra login protection</div>
</div>
<button aria-checked="false" className="relative h-7 w-12 rounded-full transition bg-white/10" data-toggle="2fa" role="switch">
<span className="absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow translate-x-0 transition-transform"></span>
</button>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm">Trusted device</div>
<div className="text-xs text-slate-400">Skip OTP on this device</div>
</div>
<button aria-checked="true" className="relative h-7 w-12 rounded-full transition bg-blue-600" data-toggle="trust" role="switch">
<span className="absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow translate-x-5 transition-transform"></span>
</button>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4">
<div className="font-medium">Account</div>
<div className="space-y-3 text-sm">
<div className="flex items-center justify-between">
<span>Email</span>
<span className="text-slate-400">you@company.com</span>
</div>
<div className="flex items-center justify-between">
<span>Plan</span>
<span className="text-slate-400">Personal</span>
</div>
</div>
<div className="flex items-center gap-3 pt-2">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-100 text-sm transition">
<i className="size-4" data-lucide="log-out"></i>
                Sign out
              </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-rose-600/90 hover:bg-rose-600 text-white text-sm transition">
<i className="size-4" data-lucide="trash-2"></i>
                Delete account
              </button>
</div>
</div>
</div>
</section>

<section className="hidden space-y-8" data-route="/profile">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-4">
<div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-medium" style={{letterSpacing: '-0.02em'}}>JD</div>
<div>
<div className="text-2xl font-semibold tracking-tight">Jane Doe</div>
<div className="text-sm text-slate-400">Member since 2021</div>
</div>
</div>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
<div className="text-sm text-slate-400">Default currency</div>
<div className="text-xl font-semibold tracking-tight">USD</div>
</div>
<div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
<div className="text-sm text-slate-400">Limits</div>
<div className="text-xl font-semibold tracking-tight">$10,000/day</div>
</div>
<div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
<div className="text-sm text-slate-400">Tier</div>
<div className="text-xl font-semibold tracking-tight">KYC 2</div>
</div>
</div>
</div>
</section>
</main>

<nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
<div className="mx-auto flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur px-3 py-2">
<a className="flex flex-col items-center px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5" data-link="" href="#/">
<i className="size-5" data-lucide="home"></i><span className="text-[0.7rem]">Home</span>
</a>
<a className="flex flex-col items-center px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5" data-link="" href="#/scan">
<i className="size-5" data-lucide="scan"></i><span className="text-[0.7rem]">Scan</span>
</a>
<a className="flex flex-col items-center px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5" data-link="" href="#/stats">
<i className="size-5" data-lucide="bar-chart-3"></i><span className="text-[0.7rem]">Stats</span>
</a>
<a className="flex flex-col items-center px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5" data-link="" href="#/settings">
<i className="size-5" data-lucide="settings"></i><span className="text-[0.7rem]">Settings</span>
</a>
</div>
</nav>

<footer className="mt-16 border-t border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold" style={{letterSpacing: '-0.04em'}}>FT</div>
<div className="text-sm text-slate-400">© <span id="year"></span> FitchTech. All rights reserved.</div>
</div>
<div className="flex items-center gap-4 text-sm">
<a className="text-slate-300 hover:text-white" data-link="" href="#/about">About</a>
<a className="text-slate-300 hover:text-white" data-link="" href="#/blog">Blog</a>
<a className="text-slate-300 hover:text-white" data-link="" href="#/contact">Contact</a>
</div>
</div>
</div>
</footer>
</div>

<div className="fixed inset-0 z-50 hidden" id="cmdkModal">
<div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" data-cmdk-close=""></div>
<div className="relative mx-auto mt-24 w-full max-w-2xl px-4">
<div className="rounded-xl border border-white/10 bg-slate-900/90 shadow-2xl">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
<i className="size-4 text-slate-400" data-lucide="command"></i>
<input autofocus="" className="w-full bg-transparent outline-none text-sm placeholder:text-slate-500" id="cmdkInput" placeholder="Type a command… (scan, settings, blog, profile, stats)" type="text"/>
<span className="text-[0.7rem] text-slate-500">Esc</span>
</div>
<ul className="p-2 max-h-72 overflow-auto" id="cmdkList">
<li className="cmdk-item flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer" data-action="#/scan">
<i className="size-4 text-sky-300" data-lucide="scan"></i>
<span className="text-sm">Open scanner</span>
</li>
<li className="cmdk-item flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer" data-action="#/settings">
<i className="size-4 text-indigo-300" data-lucide="settings"></i>
<span className="text-sm">Open settings</span>
</li>
<li className="cmdk-item flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer" data-action="#/blog">
<i className="size-4 text-slate-300" data-lucide="newspaper"></i>
<span className="text-sm">View blog</span>
</li>
<li className="cmdk-item flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer" data-action="#/stats">
<i className="size-4 text-emerald-300" data-lucide="bar-chart-3"></i>
<span className="text-sm">See statistics</span>
</li>
<li className="cmdk-item flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer" data-action="#/profile">
<i className="size-4 text-fuchsia-300" data-lucide="user"></i>
<span className="text-sm">Open profile</span>
</li>
</ul>
</div>
</div>
</div>



    </>
  );
}
