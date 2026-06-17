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



      document.addEventListener('DOMContentLoaded', function () {
        // Initialize icons with 1.5 stroke width
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        // Default to dark mode
        const body = document.body;
        if (!body.classList.contains('dark')) {
          body.classList.add('dark');
        }
        // Theme toggle
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
          toggle.addEventListener('click', function () {
            const isDark = body.classList.toggle('dark');
            toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
            if (window.lucide) {
              lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            }
          });
        }
        // Year
        var y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
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
      

<div className="relative w-full overflow-hidden">

<div className="pointer-events-none absolute inset-0 hidden dark:block">

<div className="absolute inset-0" style={{background: 'radial-gradient(1200px 600px at 20% -10%, rgba(0, 224, 199, 0.12) 0%, rgba(0, 224, 199, 0.06) 20%, transparent 55%), radial-gradient(800px 600px at 90% 10%, rgba(255, 210, 76, 0.10) 0%, rgba(255, 210, 76, 0.06) 30%, transparent 60%), linear-gradient(180deg, #0B172A 0%, #0A1526 40%, #091223 100%)'}}></div>

<svg className="absolute inset-0 opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="36" id="grid" patternunits="userSpaceOnUse" width="36">
<path d="M36 0H0v36" fill="none" stroke="#ffffff" stroke-opacity="0.09"></path>
</pattern>
<symbol id="lock" viewbox="0 0 24 24">
<path d="M7 10V8a5 5 0 0 1 10 0v2" fill="none" stroke="#00E0C7" stroke-opacity="0.5" strokeWidth="1.5"></path>
<rect fill="none" height="10" rx="2" stroke="#00E0C7" stroke-opacity="0.45" strokeWidth="1.5" width="14" x="5" y="10"></rect>
<circle cx="12" cy="15" fill="#00E0C7" fillOpacity="0.45" r="1.5"></circle>
</symbol>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
<g>

<use href="#lock" x="5%" y="12%"></use>
<use href="#lock" x="35%" y="18%"></use>
<use href="#lock" x="72%" y="10%"></use>
<use href="#lock" x="12%" y="42%"></use>
<use href="#lock" x="56%" y="40%"></use>
<use href="#lock" x="88%" y="36%"></use>
</g>
</svg>

<div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full blur-3xl" style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,224,199,0.24) 0%, rgba(0,224,199,0.00) 70%)'}}></div>
</div>

<div className="pointer-events-none absolute inset-0 dark:hidden">
<div className="absolute inset-0" style={{background: 'radial-gradient(1200px 600px at 80% -10%, rgba(0, 224, 199, 0.10) 0%, rgba(0, 224, 199, 0.05) 25%, transparent 60%), linear-gradient(180deg, #FFFFFF 0%, #F9FBFF 45%, #F4F7FB 100%)'}}></div>
<svg className="absolute inset-0 opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="36" id="gridLight" patternunits="userSpaceOnUse" width="36">
<path d="M36 0H0v36" fill="none" stroke="#2C3E50" stroke-opacity="0.08"></path>
</pattern>
<symbol id="lockLight" viewbox="0 0 24 24">
<path d="M7 10V8a5 5 0 0 1 10 0v2" fill="none" stroke="#2C3E50" stroke-opacity="0.55" strokeWidth="1.5"></path>
<rect fill="none" height="10" rx="2" stroke="#2C3E50" stroke-opacity="0.50" strokeWidth="1.5" width="14" x="5" y="10"></rect>
<circle cx="12" cy="15" fill="#2C3E50" fillOpacity="0.45" r="1.5"></circle>
</symbol>
</defs>
<rect fill="url(#gridLight)" height="100%" width="100%"></rect>
<g>
<use href="#lockLight" x="10%" y="10%"></use>
<use href="#lockLight" x="40%" y="14%"></use>
<use href="#lockLight" x="76%" y="8%"></use>
<use href="#lockLight" x="18%" y="42%"></use>
<use href="#lockLight" x="60%" y="36%"></use>
<use href="#lockLight" x="88%" y="38%"></use>
</g>
</svg>
</div>

<header className="relative z-10">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="flex items-center justify-between py-5">

<a className="group inline-flex items-center gap-3" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-slate-200/70 bg-white text-[#0B172A] dark:bg-[#0E1C33] dark:text-white dark:ring-white/10 transition-colors">
<span className="text-sm font-semibold tracking-tight">B</span>
</span>
<span className="text-[18px] md:text-[20px] font-semibold tracking-tight">Boult</span>
</a>

<div className="flex items-center gap-2 sm:gap-4">
<nav className="hidden md:flex items-center gap-6 text-[14px] font-medium">
<a className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors" href="#features">Features</a>
<a className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors" href="#security">Security</a>
<a className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors" href="#docs">Docs</a>
</nav>

<button aria-label="Toggle theme" aria-pressed="true" className="relative inline-flex h-9 w-[66px] items-center rounded-full ring-1 ring-slate-200/80 bg-white/80 backdrop-blur-sm pl-1 pr-1 transition-all hover:ring-slate-300 dark:bg-[#0E1C33]/70 dark:ring-white/10 dark:hover:ring-white/20" id="theme-toggle">
<span className="sr-only">Toggle dark mode</span>
<span className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
<i className="h-4 w-4 text-slate-700 dark:text-slate-400" data-lucide="sun"></i>
<i className="h-4 w-4 text-slate-700 dark:text-slate-300" data-lucide="moon"></i>
</span>
<span className="translate-x-[36px] dark:translate-x-0 transition-transform inline-block h-7 w-7 rounded-full bg-[#FFD24C] ring-1 ring-black/10 dark:ring-white/10 shadow-sm"></span>
</button>
<a className="hidden sm:inline-flex items-center justify-center rounded-md px-4 py-2 text-[14px] font-semibold tracking-tight shadow-sm ring-1 ring-black/10 transition-all" href="#get-started" style={{backgroundColor: '#FFD24C', color: '#0B172A'}}>
<span>Get Started</span>
</a>
</div>
</div>
</div>
</header>

<section className="relative z-10">
<div className="mx-auto max-w-7xl px-6 md:px-8 pb-16 pt-10 md:pt-16 lg:pt-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-medium ring-1 ring-slate-200/80 bg-white/70 text-slate-700 backdrop-blur dark:bg-white/5 dark:text-slate-300 dark:ring-white/10">
<i className="h-3.5 w-3.5 text-[#00E0C7]" data-lucide="shield-check"></i>
<span>Privacy-first accounting</span>
</div>
<h1 className="mt-5 text-[34px] leading-[1.1] md:text-[48px] lg:text-[56px] font-semibold tracking-tight">
                Boult — Private, powerful accounting for modern businesses
              </h1>
<p className="mt-4 text-[16px] md:text-[18px] text-slate-700 dark:text-slate-300">
<span className="font-medium text-slate-900 dark:text-white">Private. Encrypted. Boult.</span> Your financial data stays yours—end-to-end encrypted with real-time visibility when you need it.
              </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center rounded-md px-5 py-3 text-[15px] font-semibold tracking-tight ring-1 ring-black/10 shadow-sm transition-all hover:brightness-[.95] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD24C] focus:ring-offset-white dark:focus:ring-offset-[#0B172A]" href="#cta" id="get-started" style={{backgroundColor: '#FFD24C', color: '#0B172A'}}>
<i className="mr-2 h-5 w-5" data-lucide="lock"></i>
                  Get Started Securely
                </a>
<a className="inline-flex items-center justify-center rounded-md px-5 py-3 text-[15px] font-medium ring-1 ring-slate-200/80 text-slate-800 bg-white/70 backdrop-blur hover:bg-white transition-all dark:bg-white/5 dark:text-slate-200 dark:ring-white/10 dark:hover:bg-white/10" href="#features">
<i className="mr-2 h-5 w-5 text-[#00E0C7]" data-lucide="arrow-right"></i>
                  Explore Features
                </a>
</div>

<div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] text-slate-600 dark:text-slate-400">
<div className="inline-flex items-center gap-2 rounded-md px-3 py-2 ring-1 ring-slate-200/80 bg-white/70 backdrop-blur dark:bg-white/5 dark:ring-white/10">
<i className="h-4 w-4 text-[#00E0C7]" data-lucide="fingerprint"></i>
                  Zero-knowledge encryption
                </div>
<div className="inline-flex items-center gap-2 rounded-md px-3 py-2 ring-1 ring-slate-200/80 bg-white/70 backdrop-blur dark:bg-white/5 dark:ring-white/10">
<i className="h-4 w-4 text-[#00E0C7]" data-lucide="file-check-2"></i>
                  SOC 2 Type II aligned
                </div>
<div className="inline-flex items-center gap-2 rounded-md px-3 py-2 ring-1 ring-slate-200/80 bg-white/70 backdrop-blur dark:bg-white/5 dark:ring-white/10">
<i className="h-4 w-4 text-[#00E0C7]" data-lucide="shield"></i>
                  GDPR-ready
                </div>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative aspect-[5/4] w-full">

<div className="absolute inset-0 rounded-2xl ring-1 ring-slate-200/80 bg-white/70 backdrop-blur dark:bg-white/5 dark:ring-white/10 overflow-hidden">

<div className="absolute inset-0">
<div className="absolute -top-16 -left-10 h-64 w-64 rounded-full blur-3xl" style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,224,199,0.24) 0%, rgba(0,224,199,0.00) 70%)'}}></div>
<div className="absolute -bottom-16 -right-10 h-64 w-64 rounded-full blur-3xl" style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(255,210,76,0.20) 0%, rgba(255,210,76,0.00) 70%)'}}></div>
</div>
<div className="relative h-full w-full p-6 md:p-8 flex flex-col justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center ring-1 ring-slate-200/80 bg-white/70 dark:bg-white/5 dark:ring-white/10">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="shield-lock"></i>
</div>
<div className="text-[15px] font-medium">Encrypted Accounting Core</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3 text-[13px]">
<div className="rounded-lg p-3 ring-1 ring-slate-200/80 bg-white/70 dark:bg-white/5 dark:ring-white/10">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-[#00E0C7]" data-lucide="key-round"></i>
<span className="font-medium">E2E Encryption</span>
</div>
<p className="mt-1 text-slate-600 dark:text-slate-400">Keys split and isolated from compute.</p>
</div>
<div className="rounded-lg p-3 ring-1 ring-slate-200/80 bg-white/70 dark:bg-white/5 dark:ring-white/10">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-[#00E0C7]" data-lucide="activity"></i>
<span className="font-medium">Live Integrity</span>
</div>
<p className="mt-1 text-slate-600 dark:text-slate-400">Tamper-evident logs with secure audit.</p>
</div>
<div className="rounded-lg p-3 ring-1 ring-slate-200/80 bg-white/70 dark:bg-white/5 dark:ring-white/10">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-[#00E0C7]" data-lucide="server"></i>
<span className="font-medium">Data Residency</span>
</div>
<p className="mt-1 text-slate-600 dark:text-slate-400">Choose compliant regions globally.</p>
</div>
<div className="rounded-lg p-3 ring-1 ring-slate-200/80 bg-white/70 dark:bg-white/5 dark:ring-white/10">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-[#00E0C7]" data-lucide="sparkles"></i>
<span className="font-medium">Smart Controls</span>
</div>
<p className="mt-1 text-slate-600 dark:text-slate-400">Granular access &amp; secure sharing.</p>
</div>
</div>
<div className="mt-6 flex items-center gap-3 text-[12px]-slate-600 dark:text-slate-400">
<i className="h- w-4 text-[#00E0C7]" data-lucide="shield-check"></i>
                      Independently assessed by leading auditors
                    </div>
</div>
</div>
</div>
</div>
</div>
</div></section>

<div className="relative z-10 mx-auto max-w7xl px-6 md:px-8">
<div className="h-px w-full bg-slate-200 dark:bg-white/10"></div>
</div>

<section className="relative z-10" id="features">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-16 lg:py-20">
<div className="max-w-2xl">
<h2 className="text-[28px] md:text-[34px] font-semibold tracking-tight">Built for trust. Designed for clarity.</h2>
<p className="mt-3 text-[16px] text-slate-700 dark:text-slate-300">Everything you need to run accounting securely—without sacrificing speed or insight.</p>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-xl p-6 ring-1 ring-slate-200/80 bg-white/70 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-sm hover:ring-slate-300 dark:bg-white/5 dark:ring-white/10 dark:hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center ring-1 ring-slate-200/80 bg-white/70 dark:bg-white/5 dark:ring-white/10">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="lock"></i>
</div>
<h3 className="text-[18px] font-semibold tracking-tight">End‑to‑End Encryption</h3>
</div>
<p className="mt-3 text-[14px] text-slate-700 dark:text-slate-300">Data is encrypted at rest and in transit with client-side keys and split-key management. We can’t see your books—only you can.</p>
<ul className="mt-4 space-y-2 text-[14px]">
<li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
<i className="mt-0.5 h-4 w-4 text-[#00E0C7]" data-lucide="check-circle-2"></i>
                  AES‑256 &amp; TLS 1.3 with forward secrecy
                </li>
<li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
<i className="mt-0.5 h-4 w-4 text-[#00E0C7]" data-lucide="check-circle-2"></i>
                  Hardware-backed HSM key storage
                </li>
</ul>
</div>

<div className="group relative rounded-xl p-6 ring-1 ring-slate-200/80 bg-white/70 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-sm hover:ring-slate-300 dark:bg-white/5 dark:ring-white/10 dark:hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center ring-1 ring-slate-200/80 bg-white/70 dark:bg-white/5 dark:ring-white/10">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="activity"></i>
</div>
<h3 className="text-[18px] font-semibold tracking-tight">Real‑Time Insights</h3>
</div>
<p className="mt-3 text-[14px] text-slate-700 dark:text-slate-300">Instant visibility into balances, cash flow, and expense trends—computed securely without exposing raw data.</p>
<ul className="mt-4 space-y-2 text-[14px]">
<li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
<i className="mt-0.5 h-4 w-4 text-[#00E0C7]" data-lucide="check-circle-2"></i>
                  Live reconciliations with anomaly alerts
                </li>
<li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
<i className="mt-0.5 h-4 w-4 text-[#00E0C7]" data-lucide="check-circle-2"></i>
                  Privacy-preserving analytics
                </li>
</ul>
</div>

<div className="group relative rounded-xl p-6 ring-1 ring-slate-200/80 bg-white/70 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-sm hover:ring-slate-300 dark:bg-white/5 dark:ring-white/10 dark:hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center ring-1 ring-slate-200/80 bg-white/70 dark:bg-white/5 dark:ring-white/10">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="layout-dashboard"></i>
</div>
<h3 className="text-[18px] font-semibold tracking-tight">Smart Dashboards</h3>
</div>
<p className="mt-3 text-[14px] text-slate-700 dark:text-slate-300">Custom views with role-based privacy. Share securely with auditors, advisors, or teams—on your terms.</p>
<ul className="mt-4 space-y-2 text-[14px]">
<li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
<i className="mt-0.5 h-4 w-4 text-[#00E0C7]" data-lucide="check-circle-2"></i>
                  Granular permissions &amp; scoped data access
                </li>
<li className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
<i className="mt-0.5 h-4 w-4 text-[#00E0C7]" data-lucide="check-circle-2"></i>
                  Export with cryptographic integrity
                </li>
</ul>
</div>
</div>

<div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="rounded-xl p-6 ring-1 ring-slate-200/80 bg-white/70 backdrop-blur dark:bg-white/5 dark:ring-white/10">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center ring-1 ring-slate-200/80 bg-white/70 dark:bg-white/5 dark:ring-white/10">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="coins"></i>
</div>
<h3 className="text-[18px] font-semibold tracking-tight">Multi‑entity &amp; Multicurrency</h3>
</div>
<p className="mt-3 text-[14px] text-slate-700 dark:text-slate-300">Operate across subsidiaries and currencies with consistent controls and consolidated rollups.</p>
</div>
<div className="rounded-xl p-6 ring-1 ring-slate-200/80 bg-white/70 backdrop-blur dark:bg-white/5 dark:ring-white/10">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center ring-1 ring-slate-200/80 bg-white/70 dark:bg-white/5 dark:ring-white/10">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="git-branch"></i>
</div>
<h3 className="text-[18px] font-semibold tracking-tight">Audit‑ready Workflows</h3>
</div>
<p className="mt-3 text-[14px] text-slate-700 dark:text-slate-300">Immutable activity trails and approvals, built to satisfy auditors without slowing teams.</p>
</div>
<div className="rounded-xl p-6 ring-1 ring-slate-200/80 bg-white/70 backdrop-blur dark:bg-white/5 dark:ring-white/10">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center ring-1 ring-slate-200/80 bg-white/70 dark:bg-white/5 dark:ring-white/10">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="cog"></i>
</div>
<h3 className="text-[18px] font-semibold tracking-tight">API &amp; Automation</h3>
</div>
<p className="mt-3 text-[14px] text-slate-700 dark:text-slate-300">Automate reconciliations, categorization, and reporting with secure API keys and fine-grained scopes.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="security">
<div className="mx-auto max-w-7xl px-6 md:px-8 pb-16 lg:pb-20">
<div className="rounded-2xl ring-1 ring-slate-200/80 bg-white/70 backdrop-blur p-8 md:p-10 dark:bg-white/5 dark:ring-white/10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-5">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center ring-1 ring-slate-200/80 bg-white/70 dark:bg-white/5 dark:ring-white/10">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="shield"></i>
</div>
<h2 className="text-[24px] md:text-[28px] font-semibold tracking-tight">Security you can verify</h2>
</div>
<p className="mt-3 text-[15px] text-slate-700 dark:text-slate-300">Boult is engineered for confidentiality and integrity at every layer—architecture, ops, and user experience.</p>
<ul className="mt-6 space-y-3 text-[14px]">
<li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
<i className="mt-0.5 h-4 w-4 text-[#00E0C7]" data-lucide="check-circle-2"></i>
                    End-to-end encryption with customer-managed keys option
                  </li>
<li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
<i className="mt-0.5 h-4 w-4 text-[#00E0C7]" data-lucide="check-circle-2"></i>
                    Role-based access, SSO/SAML, and mandatory MFA
                  </li>
<li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
<i className="mt-0.5 h-4 w-4 text-[#00E0C7]" data-lucide="check-circle-2"></i>
                    Immutable audit logs and anomaly detection
                  </li>
<li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
<i className="mt-0.5 h-4 w-4 text-[#00E0C7]" data-lucide="check-circle-2"></i>
                    Data residency controls and regional failover
                  </li>
</ul>
</div>
<div className="lg:col-span-7">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-xl p-5 ring-1 ring-slate-200/80 bg-white/70 backdrop-blur dark:bg-white/5 dark:ring-white/10">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="badge-check"></i>
<div className="text-[15px] font-medium">Compliance &amp; Controls</div>
</div>
<p className="mt-2 text-[14px] text-slate-700 dark:text-slate-300">Aligned to SOC 2 Type II, ISO 27001, and GDPR principles. Annual third‑party assessments.</p>
</div>
<div className="rounded-xl p-5 ring-1 ring-slate-200/80 bg-white/70 backdrop-blur dark:bg-white/5 dark:ring-white/10">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="cloud-lock"></i>
<div className="text-[15px] font-medium">Infrastructure Hardening</div>
</div>
<p className="mt-2 text-[14px] text-slate-700 dark:text-slate-300">Isolated VPCs, hardened images, and continuous patching. All secrets rotated and monitored.</p>
</div>
<div className="rounded-xl p-5 ring-1 ring-slate-200/80 bg-white/70 backdrop-blur dark:bg-white/5 dark:ring-white/10">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="file-lock-2"></i>
<div className="text-[15px] font-medium">Data Lifecycle</div>
</div>
<p className="mt-2 text-[14px] text-slate-700 dark:text-slate-300">Lifecycle policies with secure deletion. Backups encrypted and regionally redundant.</p>
</div>
<div className="rounded-xl p-5 ring-1 ring-slate-200/80 bg-white/70 backdrop-blur dark:bg-white/5 dark:ring-white/10">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="user-check"></i>
<div className="text-[15px] font-medium">Access Governance</div>
</div>
<p className="mt-2 text-[14px] text-slate-700 dark:text-slate-300">Least privilege by default, with continuous access reviews and just‑in‑time elevation.</p>
</div>
</div>

<div className="mt-4 flex items-center justify-between rounded-lg px-4 py-3 ring-1 ring-slate-200/80 bg-white/60 backdrop-blur dark:bg-white/5 dark:ring-white/10">
<div className="flex items-center gap-2 text-[14px] text-slate-700 dark:text-slate-300">
<i className="h-4 w-4 text-[#00E0C7]" data-lucide="lock-keyhole"></i>
                    Request our latest security brief and audit summary.
                  </div>
<a className="inline-flex items-center gap-2 text-[14px] font-medium text-slate-900 hover:text-slate-700 dark:text-white/90 dark:hover:text-white" href="#cta">
                    Learn more
                    <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
<div className="h-px w-full bg-slate-200 dark:bg-white/10"></div>
</div>

<section className="relative z-10 bg-white" id="integrations">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-16 lg:py-20">
<div className="max-w-2xl">
<h2 className="text-[28px] md:text-[34px] font-semibold tracking-tight text-slate-900">Integrations that meet you where you are</h2>
<p className="mt-3 text-[16px] text-slate-700">Connect your banks, payments, billing, ERP, and data stack—securely and quickly.</p>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-xl p-6 ring-1 ring-slate-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center ring-1 ring-slate-200 bg-white">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="banknote"></i>
</div>
<h3 className="text-[18px] font-semibold tracking-tight text-slate-900">Banking &amp; Feeds</h3>
</div>
<p className="mt-3 text-[14px] text-slate-700">Direct bank connections with secure tokenization and automatic categorization.</p>
</div>
<div className="rounded-xl p-6 ring-1 ring-slate-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center ring-1 ring-slate-200 bg-white">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="credit-card"></i>
</div>
<h3 className="text-[18px] font-semibold tracking-tight text-slate-900">Payments &amp; Billing</h3>
</div>
<p className="mt-3 text-[14px] text-slate-700">Sync invoices, payouts, and disputes with line‑item fidelity.</p>
</div>
<div className="rounded-xl p-6 ring-1 ring-slate-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center ring-1 ring-slate-200 bg-white">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="building-2"></i>
</div>
<h3 className="text-[18px] font-semibold tracking-tight text-slate-900">ERP &amp; Finance</h3>
</div>
<p className="mt-3 text-[14px] text-slate-700">Two‑way sync to your finance systems with robust mapping and guardrails.</p>
</div>
<div className="rounded-xl p-6 ring-1 ring-slate-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center ring-1 ring-slate-200 bg-white">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="users"></i>
</div>
<h3 className="text-[18px] font-semibold tracking-tight text-slate-900">HR &amp; Expenses</h3>
</div>
<p className="mt-3 text-[14px] text-slate-700">Import payroll, reimbursements, and cards with policy checks built‑in.</p>
</div>
<div className="rounded-xl p-6 ring-1 ring-slate-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center ring-1 ring-slate-200 bg-white">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="database"></i>
</div>
<h3 className="text-[18px] font-semibold tracking-tight text-slate-900">Data Warehouse</h3>
</div>
<p className="mt-3 text-[14px] text-slate-700">Push encrypted aggregates to your lake/warehouse for advanced analysis.</p>
</div>
<div className="rounded-xl p-6 ring-1 ring-slate-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md flex items-center justify-center ring-1 ring-slate-200 bg-white">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="workflow"></i>
</div>
<h3 className="text-[18px] font-semibold tracking-tight text-slate-900">Automation &amp; Webhooks</h3>
</div>
<p className="mt-3 text-[14px] text-slate-700">Event‑driven workflows with signed webhooks and replay protection.</p>
</div>
</div>

<div className="mt-8 rounded-xl ring-1 ring-slate-200 bg-white p-4">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
<div className="h-10 rounded-md ring-1 ring-slate-200 bg-white flex items-center justify-center">
<span className="text-[12px] font-medium text-slate-600">Bank APIs</span>
</div>
<div className="h-10 rounded-md ring-1 ring-slate-200 bg-white flex items-center justify-center">
<span className="text-[12px] font-medium text-slate-600">Payments</span>
</div>
<div className="h-10 rounded-md ring-1 ring-slate-200 bg-white flex items-center justify-center">
<span className="text-[12px] font-medium text-slate-600">Billing</span>
</div>
<div className="h-10 rounded-md ring-1 ring-slate-200 bg-white flex items-center justify-center">
<span className="text-[12px] font-medium text-slate-600">ERP</span>
</div>
<div className="h-10 rounded-md ring-1 ring-slate-200 bg-white flex items-center justify-center">
<span className="text-[12px] font-medium text-slate-600">HRIS</span>
</div>
<div className="h-10 rounded-md ring-1 ring-slate-200 bg-white flex items-center justify-center">
<span className="text-[12px] font-medium text-slate-600">Warehouse</span>
</div>
</div>
</div>
</div>
</section>

<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
<div className="h-px w-full bg-slate-200"></div>
</div>

<section className="relative z-10 bg-white" id="testimonials">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-16 lg:py-20">
<div className="max-w-2xl">
<h2 className="text-[28px] md:text-[34px] font-semibold tracking-tight text-slate-900">Trusted by finance teams</h2>
<p className="mt-3 text-[16px] text-slate-700">See how teams protect their books without sacrificing speed.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-xl p-6 ring-1 ring-slate-200 bg-white">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="quote"></i>
<p className="mt-3 text-[14px] text-slate-700">We closed our month 2× faster while keeping sensitive data fully locked down.</p>
<div className="mt-5 flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center">
<span className="text-[12px] font-medium text-slate-700">AK</span>
</div>
<div>
<div className="text-[14px] font-medium text-slate-900">Ari Kumar</div>
<div className="text-[12px] text-slate-600">VP Finance, SaaS</div>
</div>
</div>
</div>
<div className="rounded-xl p-6 ring-1 ring-slate-200 bg-white">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="quote"></i>
<p className="mt-3 text-[14px] text-slate-700">Auditors loved the immutable logs. Access reviews that used to take days now take minutes.</p>
<div className="mt-5 flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center">
<span className="text-[12px] font-medium text-slate-700">JS</span>
</div>
<div>
<div className="text-[14px] font-medium text-slate-900">Jordan Smith</div>
<div className="text-[12px] text-slate-600">Controller, Marketplace</div>
</div>
</div>
</div>
<div className="rounded-xl p-6 ring-1 ring-slate-200 bg-white">
<i className="h-5 w-5 text-[#00E0C7]" data-lucide="quote"></i>
<p className="mt-3 text-[14px] text-slate-700">Migration was painless. The API let us automate reconciliations we’d been doing by hand.</p>
<div className="mt-5 flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center">
<span className="text-[12px] font-medium text-slate-700">LM</span>
</div>
<div>
<div className="text-[14px] font-medium text-slate-900">Leah Martinez</div>
<div className="text-[12px] text-slate-600">Head of Ops, Fintech</div>
</div>
</div>
</div>
</div>

<div className="mt-8 flex items-center justify-between rounded-lg px-4 py-3 ring-1 ring-slate-200 bg-white">
<div className="flex items-center gap-2 text-[14px] text-slate-700">
<i className="h-4 w-4 text-[#00E0C7]" data-lucide="sparkles"></i>
              Want to share your story? Join the customer advisory group.
            </div>
<a className="inline-flex items-center gap-2 text-[14px] font-medium text-slate-900 hover:text-slate-700" href="#get-started">
              Get involved
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
<div className="h-px w-full bg-slate-200 dark:bg-white/10"></div>
</div>

<section className="relative z-10" id="cta">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-16 lg:py-20">
<div className="relative overflow-hidden rounded-2xl p-8 md:p-10 ring-1 ring-slate-200/80 bg-white/70 backdrop-blur dark:bg-white/5 dark:ring-white/10">

<div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full blur-2xl" style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,224,199,0.25) 0%, rgba(0,224,199,0.00) 70%)'}}></div>
<div className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full blur-2xl" style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(255,210,76,0.25) 0%, rgba(255,210,76,0.00) 70%)'}}></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-8">
<h3 className="text-[26px] md:text-[32px] font-semibold tracking-tight">Your accounting, your privacy, your Boult.</h3>
<p className="mt-2 text-[15px] text-slate-700 dark:text-slate-300">Move fast with uncompromising privacy. Start in minutes—migrate when ready.</p>
<div className="mt-6 flex flex-wrap items-center gap-3 text-[12px] text-slate-600 dark:text-slate-400">
<div className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 ring-1 ring-slate-200/80 bg-white/70 dark:bg-white/5 dark:ring-white/10">
<i className="h-4 w-4 text-[#00E0C7]" data-lucide="clock"></i>
                    5‑minute secure onboarding
                  </div>
<div className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 ring-1 ring-slate-200/80 bg-white/70 dark:bg-white/5 dark:ring-white/10">
<i className="h-4 w-4 text-[#00E0C7]" data-lucide="refresh-cw"></i>
                    Risk‑free migration
                  </div>
<div className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 ring-1 ring-slate-200/80 bg-white/70 dark:bg-white/5 dark:ring-white/10">
<i className="h-4 w-4 text-[#00E0C7]" data-lucide="life-buoy"></i>
                    Priority support
                  </div>
</div>
</div>
<div className="lg:col-span-4">
<div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-3">
<a className="inline-flex items-center justify-center rounded-md px-5 py-3 text-[15px] font-semibold tracking-tight ring-1 ring-black/10 shadow-sm transition-all hover:brightness-[.95] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD24C] focus:ring-offset-white dark:focus:ring-offset-transparent" href="#get-started" style={{backgroundColor: '#FFD24C', color: '#0B172A'}}>
<i className="mr-2 h-5 w-5" data-lucide="sparkles"></i>
                    Get Started Securely
                  </a>
<a className="inline-flex items-center justify-center rounded-md px-5 py-3 text-[15px] font-medium ring-1 ring-slate-200/80 text-slate-800 bg-white/70 backdrop-blur hover:bg-white transition-all dark:bg-white/5 dark:text-slate-200 dark:ring-white/10 dark:hover:bg-white/10" href="#security">
<i className="mr-2 h-5 w-5 text-[#00E0C7]" data-lucide="shield-check"></i>
                    Review Security
                  </a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 pb-10">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="h-px w-full bg-slate-200 dark:bg-white/10 mb-6"></div>
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-slate-200/70 bg-white text-[#0B172A] dark:bg-[#0E1C33] dark:text-white dark:ring-white/10">
<span className="text-sm font-semibold tracking-tight">B</span>
</span>
<div>
<div className="text-[16px] font-semibold tracking-tight">Boult</div>
<div className="text-[12px] text-slate-600 dark:text-slate-400">Private. Encrypted. Boult.</div>
</div>
</div>
<nav className="grid grid-cols-2 sm:flex gap-x-8 gap-y-2 text-[14px]">
<a className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors" href="#features">Features</a>
<a className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors" href="#security">Security</a>
<a className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors" href="#" id="pricing">Pricing</a>
<a className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors" href="#" id="docs">Docs</a>
<a className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors" href="#">Contact</a>
</nav>
</div>
<div className="mt-6 text-[12px] text-slate-600 dark:text-slate-400">
            © <span id="year">2025</span> Boult, Inc. All rights reserved.
          </div>
</div>
</footer>
</div>



    </>
  );
}
