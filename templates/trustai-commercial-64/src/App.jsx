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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    // Icons
    document.addEventListener('DOMContentLoaded', function () {
      try { lucide.createIcons(); } catch (e) { /* noop */ }
    });

    // Time + TZ in hero
    function updateClock() {
      const timeEl = document.getElementById('tz-time');
      const offEl = document.getElementById('tz-offset');
      const now = new Date();
      if (timeEl) timeEl.textContent = now.toLocaleTimeString([], { hour12: false });
      if (offEl) {
        const parts = new Intl.DateTimeFormat([], { timeZoneName: 'short' }).formatToParts(now);
        const abbr = parts.find(p => p.type === 'timeZoneName')?.value || 'Local';
        offEl.textContent = `(${abbr})`;
      }
    }
    updateClock(); setInterval(updateClock, 1000);

    // Hero: crossfade highlights + rotate tiles every 3s
    (function(){
      const highlights = [document.getElementById('hl-1'), document.getElementById('hl-2'), document.getElementById('hl-3')].filter(Boolean);
      const tiles = [
        document.getElementById('tile-1'),
        document.getElementById('tile-2'),
        document.getElementById('tile-3')
      ];
      const msgs = [
        ["3 escalations applied","2 renewals ready","1 compliance issue resolved"],
        ["Escalations re-verified","2 renewals sent","All issues clear"],
        ["3 escalations synced","1 renewal approved","1 issue resolved"]
      ];
      let idx = 0;
      function cycle() {
        highlights.forEach((el,i)=> el && (el.style.opacity = (i===idx%highlights.length?'1':'0')));
        if (tiles[0]) tiles[0].textContent = msgs[idx%msgs.length][0];
        if (tiles[1]) tiles[1].textContent = msgs[idx%msgs.length][1];
        if (tiles[2]) tiles[2].textContent = msgs[idx%msgs.length][2];
        idx++;
      }
      cycle();
      setInterval(cycle, 3000);
    })();

    // Before/After slider
    (function(){
      const pane = document.getElementById('after-pane');
      const handle = document.getElementById('slider-handle');
      const sep = document.getElementById('slider-sep');
      if (!pane || !handle || !sep) return;

      function setSplit(x) {
        const parent = pane.parentElement;
        const rect = parent.getBoundingClientRect();
        const clamped = Math.max(rect.left + 40, Math.min(x, rect.right - 40));
        const pct = (clamped - rect.left) / rect.width * 100;
        pane.style.clipPath = `inset(0 0 0 ${pct}%)`;
        handle.style.left = `${pct}%`;
        sep.style.left = `${pct}%`;
      }
      // init middle
      setTimeout(()=>{
        const rect = pane.parentElement.getBoundingClientRect();
        setSplit(rect.left + rect.width/2);
      }, 0);

      let dragging = false;
      handle.addEventListener('mousedown', ()=> dragging = true);
      window.addEventListener('mouseup', ()=> dragging = false);
      window.addEventListener('mousemove', (e)=> { if (dragging) setSplit(e.clientX); });

      // Touch
      handle.addEventListener('touchstart', ()=> dragging = true, {passive:true});
      window.addEventListener('touchend', ()=> dragging = false, {passive:true});
      window.addEventListener('touchmove', (e)=> { if (dragging && e.touches[0]) setSplit(e.touches[0].clientX); }, {passive:true});
    })();

    // Footer year
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    // Back to top
    document.querySelectorAll('a[href="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        if (a.textContent?.toLowerCase().includes('back to top')) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
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
      
<div className="hidden" id="top"></div>
<div className="aura-background-component top-0 w-full -z-10 absolute h-[1300px]"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ojBMr9PbDiBpKIrmzIHh"></div>
</div>

<section className="relative w-full sm:px-6 md:px-10 mt-6 mx-auto px-4 max-w-7xl">
<div className="w-full">
<header className="flex gap-4 w-full mb-4 items-center justify-between sticky top-4 z-50 rounded-xl ring-1 ring-neutral-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-4 py-2 shadow-sm">
<div className="flex items-center gap-3">
<span className="text-lg font-semibold text-neutral-900 tracking-tight">TrustAI</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
<a className="hover:text-black transition-colors font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-1 focus-visible:ring-offset-white" href="#overview">Product</a>
<a className="hover:text-black transition-colors font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-1 focus-visible:ring-offset-white" href="#modules">Modules</a>
<a className="hover:text-black transition-colors font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-1 focus-visible:ring-offset-white" href="#integrations">Integrations</a>
<a className="hover:text-black transition-colors font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-1 focus-visible:ring-offset-white" href="#security">Security</a>
</nav>
<div className="flex items-center gap-3">
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-black/20 bg-black text-white hover:bg-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-1 focus-visible:ring-offset-white">
<svg className="h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
<a className="inline-flex items-center justify-center text-sm font-medium text-white bg-blue-600 rounded-full px-5 py-2.5 shadow-sm ring-1 ring-black/10 hover:bg-blue-500 transition-all hover:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-1 focus-visible:ring-offset-white" href="#cta">Book a Demo</a>
</div>
</header>
</div>
</section>

<section className="relative w-full sm:px-6 md:px-10 mx-auto px-4 max-w-7xl">
<div className="relative overflow-hidden rounded-[32px] border-t border-neutral-200/70 bg-gradient-to-r from-white to-[#F9FAFB] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.12)]">
<div className="p-6 sm:p-10">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">

<div className="lg:col-span-3">
<h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl leading-[1.05] font-medium text-neutral-900 tracking-tighter">Contracts that Think and Act.</h1>
<p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-[65ch]">
              AI agents built for commercial real estate — reading, validating, and executing every step of your contract lifecycle with audit-grade precision.
            </p>
<p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-[70ch]">
              No more missed escalations, buried clauses, or manual reviews. TrustAI reads, verifies, and acts — with traceable proof for every result.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 text-base font-medium text-white bg-blue-600 rounded-full px-6 py-3 shadow-lg ring-1 ring-blue-700/30 hover:bg-blue-500 transition hover:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-1 focus-visible:ring-offset-white" href="#cta">
                Book a Demo
                <svg className="w-4 h-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>

<div className="mt-6 pt-4 border-t border-neutral-200">
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-700">
<span>SOC 2 Type II</span>
<span className="text-neutral-300">•</span>
<span>Human-in-the-loop</span>
<span className="text-neutral-300">•</span>
<span>No data migration</span>
<span className="text-neutral-300">•</span>
<span>Enterprise-ready</span>
</div>
</div>
</div>

<div className="lg:col-span-2">
<div className="relative rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm overflow-hidden">

<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
<p className="text-sm text-neutral-800 font-medium">Lease.pdf — Analysis</p>
</div>
<span className="text-xs text-neutral-500" id="tz-time"></span>
</div>

<div className="grid grid-cols-5">
<div className="col-span-3 relative p-4">
<div className="h-[220px] rounded-lg bg-neutral-50 ring-1 ring-neutral-200 overflow-hidden">
<div className="px-4 py-3 flex items-center justify-between border-b border-neutral-200">
<div className="flex items-center gap-2">
<svg className="text-neutral-700" data-lucide="file-text" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-xs font-medium text-neutral-800">Lease_v7.pdf</span>
</div>
<span className="text-[11px] text-neutral-500" id="tz-offset"></span>
</div>
<div className="relative p-4 space-y-2 text-[11px] leading-relaxed text-neutral-700">
<div className="h-2 w-2/3 bg-neutral-200 rounded"></div>
<div className="h-2 w-5/6 bg-neutral-200 rounded"></div>
<div className="h-2 w-3/5 bg-neutral-200 rounded"></div>
<div className="h-2 w-4/5 bg-neutral-200 rounded"></div>
<div className="h-2 w-1/2 bg-neutral-200 rounded"></div>

<div className="absolute top-10 left-6 right-10 h-6 rounded bg-amber-200/50 ring-1 ring-amber-400/50 opacity-0 transition-opacity duration-700" id="hl-1"></div>
<div className="absolute top-24 left-6 right-24 h-6 rounded bg-blue-200/50 ring-1 ring-blue-400/50 opacity-0 transition-opacity duration-700" id="hl-2"></div>
<div className="absolute top-36 left-6 right-1/3 h-6 rounded bg-emerald-200/50 ring-1 ring-emerald-400/50 opacity-0 transition-opacity duration-700" id="hl-3"></div>
</div>
</div>
</div>

<div className="col-span-2 p-4 border-l border-neutral-200 bg-neutral-50">
<div className="space-y-3">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-3 shadow-sm">
<p className="text-xs text-neutral-500">Escalations</p>
<p className="text-sm font-medium text-neutral-900 tracking-tight" id="tile-1">3 escalations applied</p>
</div>
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-3 shadow-sm">
<p className="text-xs text-neutral-500">Renewals</p>
<p className="text-sm font-medium text-neutral-900 tracking-tight" id="tile-2">2 renewals ready</p>
</div>
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-3 shadow-sm">
<p className="text-xs text-neutral-500">Compliance</p>
<p className="text-sm font-medium text-neutral-900 tracking-tight" id="tile-3">1 compliance issue resolved</p>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-[11px] text-neutral-600">
<svg className="text-neutral-500" data-lucide="sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
<span>Live analysis • Updates every 3s</span>
</div>
</div>
</div>
</div>

<p className="mt-3 text-xs text-neutral-500">PDF analyzed → key terms highlighted → tiles update automatically.</p>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 w-full sm:px-6 md:px-10 mx-auto pt-12 px-4 max-w-7xl" id="overview">
<div className="bg-white rounded-3xl ring-1 ring-neutral-200 overflow-hidden">

<div className="p-6 sm:p-10">
<div className="mx-auto text-center max-w-3xl">
<p className="text-base sm:text-lg text-neutral-800 tracking-tight">
            You upload your leases → TrustAI reads them → flags issues → drafts renewals → routes for approval.
          </p>
<div className="mt-4 flex items-center justify-center gap-3 text-neutral-700">
<div className="inline-flex items-center gap-2 text-sm">
<span className="h-7 w-7 rounded-full bg-neutral-100 ring-1 ring-neutral-200 inline-flex items-center justify-center">
<svg className="text-neutral-700" data-lucide="upload" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</span> Upload
            </div>
<span className="text-neutral-300">→</span>
<div className="inline-flex items-center gap-2 text-sm">
<span className="h-7 w-7 rounded-full bg-neutral-100 ring-1 ring-neutral-200 inline-flex items-center justify-center">
<svg className="text-neutral-700" data-lucide="search" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</span> Read
            </div>
<span className="text-neutral-300">→</span>
<div className="inline-flex items-center gap-2 text-sm">
<span className="h-7 w-7 rounded-full bg-neutral-100 ring-1 ring-neutral-200 inline-flex items-center justify-center">
<svg className="text-neutral-700" data-lucide="alert-triangle" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</span> Flag
            </div>
<span className="text-neutral-300">→</span>
<div className="inline-flex items-center gap-2 text-sm">
<span className="h-7 w-7 rounded-full bg-neutral-100 ring-1 ring-neutral-200 inline-flex items-center justify-center">
<svg className="text-neutral-700" data-lucide="file-text" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</span> Draft
            </div>
<span className="text-neutral-300">→</span>
<div className="inline-flex items-center gap-2 text-sm">
<span className="h-7 w-7 rounded-full bg-neutral-100 ring-1 ring-neutral-200 inline-flex items-center justify-center">
<svg className="text-neutral-700" data-lucide="send" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</span> Approve
            </div>
</div>
</div>
</div>

<div className="h-px w-full" style={{background: '#EEE'}}></div>

<div className="p-6 sm:p-10">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-4 gap-3 items-start">
<div className="flex flex-col items-center text-center">
<div className="h-12 w-12 rounded-full bg-neutral-50 ring-1 ring-neutral-200 inline-flex items-center justify-center">
<svg className="text-neutral-700" data-lucide="folder" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<p className="mt-2 text-sm font-medium tracking-tight text-neutral-900">Ingest</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="h-12 w-12 rounded-full bg-neutral-50 ring-1 ring-neutral-200 inline-flex items-center justify-center">
<svg className="text-neutral-700" data-lucide="file-digit" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<p className="mt-2 text-sm font-medium tracking-tight text-neutral-900">Extract</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="h-12 w-12 rounded-full bg-neutral-50 ring-1 ring-neutral-200 inline-flex items-center justify-center">
<svg className="text-neutral-700" data-lucide="check-circle" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<p className="mt-2 text-sm font-medium tracking-tight text-neutral-900">Validate</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="h-12 w-12 rounded-full bg-neutral-50 ring-1 ring-neutral-200 inline-flex items-center justify-center">
<svg className="text-neutral-700" data-lucide="settings" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<p className="mt-2 text-sm font-medium tracking-tight text-neutral-900">Act</p>
</div>
</div>
<p className="mt-5 text-sm text-neutral-600 text-center">Deployed across 1 200+ leases · 90 % time reduction in manual review.</p>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 w-full sm:px-6 md:px-10 mx-auto pt-12 pb-12 px-4 max-w-7xl" id="modules" style={{background: '#FAFAFA'}}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

<article className="relative bg-white rounded-2xl p-6 sm:p-7 ring-1 transition-transform transition-shadow hover:-translate-y-0.5" style={{borderColor: '#E0E0E0', boxShadow: '0 8px 24px rgba(0,0,0,0.08)'}}>
<div className="flex items-center gap-3 mb-3">
<span className="h-9 w-9 rounded-xl bg-blue-50 ring-1 ring-blue-100 inline-flex items-center justify-center">
<svg className="text-blue-600" data-lucide="file-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
</span>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight">Lease Abstraction</h3>
</div>
<p className="text-neutral-700 text-sm">Extracts and normalizes rent, terms, and clauses from 100-page PDFs.</p>
<p className="mt-3 text-xs text-neutral-500">Verified accuracy 92% vs manual review.</p>
<div className="absolute inset-0 rounded-2xl ring-1 ring-transparent hover:ring-blue-100 transition"></div>
</article>
<article className="relative bg-white rounded-2xl p-6 sm:p-7 ring-1 group transition-transform transition-shadow hover:-translate-y-0.5" style={{borderColor: '#E0E0E0', boxShadow: '0 8px 24px rgba(0,0,0,0.08)'}}>
<div className="flex items-center gap-3 mb-3">
<span className="h-9 w-9 rounded-xl bg-amber-50 ring-1 ring-amber-100 inline-flex items-center justify-center">
<svg className="text-amber-600" data-lucide="gavel" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
</span>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight">Compliance Validator</h3>
</div>
<p className="text-neutral-700 text-sm">Detects risky clauses &amp; proposes compliant language.</p>
<p className="mt-3 text-xs text-neutral-500">Validated on multi-state leases.</p>
<div className="absolute inset-0 rounded-2xl ring-1 ring-transparent hover:ring-amber-100 transition"></div>
</article>
<article className="relative bg-white rounded-2xl p-6 sm:p-7 ring-1 group transition-transform transition-shadow hover:-translate-y-0.5" style={{borderColor: '#E0E0E0', boxShadow: '0 8px 24px rgba(0,0,0,0.08)'}}>
<div className="flex items-center gap-3 mb-3">
<span className="h-9 w-9 rounded-xl bg-emerald-50 ring-1 ring-emerald-100 inline-flex items-center justify-center">
<svg className="text-emerald-600" data-lucide="calendar" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
</span>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight">Renewal Agent</h3>
</div>
<p className="text-neutral-700 text-sm">Tracks expirations &amp; applies rent escalations automatically.</p>
<p className="mt-3 text-xs text-neutral-500">3h → 15min per renewal.</p>
<div className="absolute inset-0 rounded-2xl ring-1 ring-transparent hover:ring-emerald-100 transition"></div>
</article>
<article className="relative bg-white rounded-2xl p-6 sm:p-7 ring-1 group transition-transform transition-shadow hover:-translate-y-0.5" style={{borderColor: '#E0E0E0', boxShadow: '0 8px 24px rgba(0,0,0,0.08)'}}>
<div className="flex items-center gap-3 mb-3">
<span className="h-9 w-9 rounded-xl bg-indigo-50 ring-1 ring-indigo-100 inline-flex items-center justify-center">
<svg className="text-indigo-600" data-lucide="signature" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
</span>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight">Execution Agent</h3>
</div>
<p className="text-neutral-700 text-sm">Sends for signing &amp; issues digital audit certificate.</p>
<p className="mt-3 text-xs text-neutral-500">100% traceable actions.</p>
<div className="absolute inset-0 rounded-2xl ring-1 ring-transparent hover:ring-indigo-100 transition"></div>
</article>
</div>
</section>

<section className="w-full sm:px-6 md:px-10 mx-auto pt-12 pb-12 px-4 max-w-7xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Connected to your source of truth.</h2>
<p className="mt-3 text-neutral-700 text-base max-w-[60ch]">
          TrustAI syncs directly with Yardi, MRI, and RealPage — no manual uploads, no duplicates. Every extracted field is cross-verified against live rent rolls.
        </p>
</div>

<div className="relative">
<div className="grid grid-cols-5 gap-3">
<div className="col-span-2">
<div className="rounded-xl ring-1 ring-neutral-200 bg-white overflow-hidden">
<div className="px-3 py-2 border-b border-neutral-200 flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<p className="text-xs font-medium text-neutral-800">Yardi CSV</p>
</div>
<div className="p-3">
<div className="text-[11px] text-neutral-600 grid grid-cols-3 gap-2">
<span className="px-2 py-1 rounded bg-neutral-50 ring-1 ring-neutral-200">Unit</span>
<span className="px-2 py-1 rounded bg-neutral-50 ring-1 ring-neutral-200">Rent</span>
<span className="px-2 py-1 rounded bg-neutral-50 ring-1 ring-neutral-200">Esc.</span>
<span className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200">302A</span>
<span className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200">$2,450</span>
<span className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200">2%</span>
<span className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200">415B</span>
<span className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200">$3,110</span>
<span className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200">3%</span>
</div>
</div>
</div>
</div>
<div className="col-span-1 flex items-center justify-center">
<div className="relative">
<div className="h-10 w-10 rounded-full bg-blue-50 ring-2 ring-blue-200 flex items-center justify-center animate-pulse">
<svg className="text-blue-600" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
</div>
</div>
<div className="col-span-2">
<div className="rounded-xl ring-1 ring-neutral-200 bg-white overflow-hidden">
<div className="px-3 py-2 border-b border-neutral-200 flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-blue-500"></span>
<p className="text-xs font-medium text-neutral-800">TrustAI Table</p>
</div>
<div className="p-3">
<div className="text-[11px] text-neutral-600 grid grid-cols-2 gap-2">
<span className="px-2 py-1 rounded bg-neutral-50 ring-1 ring-neutral-200 col-span-2">Escalation Applied ✓ Synced to Yardi</span>
<span className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200">302A • 2%</span>
<span className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200 text-emerald-700">OK • Proof</span>
<span className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200">415B • 3%</span>
<span className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200 text-emerald-700">OK • Proof</span>
</div>
</div>
</div>
</div>
</div>
<p className="mt-3 text-xs text-neutral-500">Arrow pulses every few seconds to indicate live sync.</p>
</div>
</div>
</section>

<section className="w-full sm:px-6 md:px-10 mx-auto pt-12 pb-12 px-4 max-w-7xl">
<div className="rounded-3xl ring-1 ring-neutral-200 overflow-hidden" style={{background: 'linear-gradient(180deg,#F8F9FA,white)'}}>
<div className="p-6 sm:p-10">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Lease Abstraction — Before / After / Result</h3>

<div className="mt-6 relative">
<div className="relative overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white">
<div className="grid md:grid-cols-2">

<div className="relative p-4 md:p-6">
<div className="mb-3 flex items-center gap-2 text-sm text-neutral-700">
<span className="h-2 w-2 rounded-full bg-rose-400"></span> Before — Lease_v3.xlsx
                </div>
<div className="h-64 rounded-lg ring-1 ring-neutral-200 bg-neutral-50 p-3 overflow-auto">
<div className="grid grid-cols-6 gap-[2px] text-[11px]">

<div className="bg-white p-2">Unit</div><div className="bg-white p-2">Rent</div><div className="bg-white p-2">Esc.</div><div className="bg-white p-2">Term</div><div className="bg-white p-2">Notes</div><div className="bg-white p-2">Clause</div>
<div className="bg-white p-2">302A</div><div className="bg-white p-2">$2450</div><div className="bg-white p-2">2%?</div><div className="bg-white p-2">36</div><div className="bg-white p-2">v3 mismatch</div><div className="bg-white p-2">14b alt</div>
<div className="bg-white p-2">415B</div><div className="bg-white p-2">$3110</div><div className="bg-white p-2">3%</div><div className="bg-white p-2">24</div><div className="bg-white p-2">holdover</div><div className="bg-white p-2">—</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 md:static md:inset-auto overflow-hidden" id="after-pane">
<div className="p-4 md:p-6 h-full">
<div className="mb-3 flex items-center gap-2 text-sm text-neutral-700">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span> After — TrustAI Table
                    </div>
<div className="h-64 rounded-lg ring-1 ring-neutral-200 bg-white p-3 overflow-auto">
<div className="grid grid-cols-4 gap-2 text-[11px]">
<div className="px-2 py-1 rounded bg-neutral-50 ring-1 ring-neutral-200">Unit</div>
<div className="px-2 py-1 rounded bg-neutral-50 ring-1 ring-neutral-200">Rent</div>
<div className="px-2 py-1 rounded bg-neutral-50 ring-1 ring-neutral-200">Escalation</div>
<div className="px-2 py-1 rounded bg-neutral-50 ring-1 ring-neutral-200">Status</div>
<div className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200">302A</div>
<div className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200">$2,450</div>
<div className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200 underline decoration-emerald-400 decoration-2 underline-offset-2">2% (verified)</div>
<div className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200 text-emerald-700">Applied ✓</div>
<div className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200">415B</div>
<div className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200">$3,110</div>
<div className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200 underline decoration-emerald-400 decoration-2 underline-offset-2">3% (verified)</div>
<div className="px-2 py-1 rounded bg-white ring-1 ring-neutral-200 text-emerald-700">Applied ✓</div>
</div>
</div>
</div>
</div>

<div className="hidden md:block absolute inset-y-0 left-1/2 w-0.5 bg-neutral-200" id="slider-sep"></div>
<button className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 my-auto h-10 w-10 rounded-full bg-white ring-1 ring-neutral-200 shadow flex items-center justify-center cursor-ew-resize hover:ring-neutral-300" id="slider-handle">
<svg className="text-neutral-700" data-lucide="chevrons-left-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4 text-center">
<p className="text-2xl font-semibold tracking-tight text-neutral-900">10×</p>
<p className="text-sm text-neutral-600">faster analysis</p>
</div>
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4 text-center">
<p className="text-2xl font-semibold tracking-tight text-neutral-900">90%</p>
<p className="text-sm text-neutral-600">fewer missed escalations</p>
</div>
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4 text-center">
<p className="text-2xl font-semibold tracking-tight text-neutral-900">1 day</p>
<p className="text-sm text-neutral-600">per week saved</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 w-full sm:px-6 md:px-10 mx-auto pt-12 pb-12 px-4 max-w-7xl" id="security">
<div className="rounded-3xl ring-1 ring-neutral-200 bg-white overflow-hidden">
<div className="p-6 sm:p-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

<div>
<div className="rounded-xl ring-1 ring-neutral-200 bg-neutral-50 overflow-hidden">
<div className="px-4 py-3 border-b border-neutral-200 flex items-center gap-2">
<svg className="text-neutral-700" data-lucide="file-text" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-xs font-medium text-neutral-800">Section 14 (PDF)</span>
</div>
<div className="relative p-4 text-[12px] leading-relaxed text-neutral-800">
<p>Section 14 – Tenant shall maintain insurance as per builder’s policy. Tenant agrees to...</p>
<p className="mt-2">Coverage details may be provided upon request by Landlord...</p>
<div className="absolute top-8 left-4 right-4 h-12 rounded bg-amber-200/40 ring-1 ring-amber-400/60"></div>
<div className="mt-4 inline-flex items-center gap-2 text-[11px] text-neutral-600">
<span className="h-2 w-2 rounded-full bg-amber-400"></span>
<span>Highlighted clause</span>
</div>
</div>
</div>
</div>

<div>
<div className="rounded-xl ring-1 ring-neutral-200 bg-neutral-50 p-4">
<pre className="font-mono text-[12px] leading-relaxed text-neutral-800 whitespace-pre-wrap">Clause Detected: “Section 14 – Tenant shall maintain insurance as per builder’s policy.”
⚠ Issue: Violates Texas Property Code § 92.252 — missing liability coverage.
🧠 Suggestion: Add “Tenant shall maintain liability coverage ≥ $500,000 per occurrence.”</pre>
<div className="mt-2 text-[11px] text-neutral-600">
<span className="inline-flex items-center gap-1">
<svg className="text-neutral-500" data-lucide="info" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
                  Tooltip: Detected mismatch with jurisdictional template.
                </span>
</div>
</div>

<div className="mt-5 flex flex-wrap items-center gap-2 text-[12px] text-neutral-700">
<span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 ring-1 ring-neutral-200 px-3 py-1.5">
<svg className="text-neutral-700" data-lucide="shield-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
                SOC 2
              </span>
<span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 ring-1 ring-neutral-200 px-3 py-1.5">
<svg className="text-neutral-700" data-lucide="lock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
                Encryption
              </span>
<span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 ring-1 ring-neutral-200 px-3 py-1.5">
<svg className="text-neutral-700" data-lucide="globe" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
                GDPR
              </span>
<span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 ring-1 ring-neutral-200 px-3 py-1.5">
<svg className="text-neutral-700" data-lucide="user-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
                Human Review
              </span>
</div>
<p className="mt-3 text-xs text-neutral-600">Audited by legal teams across 4 US states · Zero hallucinated outputs.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full sm:px-6 md:px-10 mx-auto pt-12 pb-12 px-4 max-w-7xl">
<div className="rounded-3xl overflow-hidden" style={{background: '#0E1C28'}}>
<div className="p-6 sm:p-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div className="text-white">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">25 Properties · 1 Agent · <span className="underline decoration-blue-400 decoration-2 underline-offset-4">$38 K</span> Recovered in 60 Days.</h3>
<p className="mt-3 text-white/80">
              A Texas asset manager used TrustAI to analyze 1 000 leases, finding 18 missed escalations and 12 non-compliant clauses. They recovered <span className="underline decoration-blue-400 decoration-2 underline-offset-4">$38 K</span> and cut renewal prep time by <span className="underline decoration-blue-400 decoration-2 underline-offset-4">90 %</span>.
            </p>
<a className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-5 py-2.5 text-sm hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0E1C28]" href="#">
              Read the Full Story
              <svg className="" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
<div className="rounded-xl overflow-hidden ring-1 ring-white/10">
<div className="h-64 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
<div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full sm:px-6 md:px-10 mx-auto pt-12 pb-12 px-4 max-w-7xl">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
<div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-5">
<div className="flex items-center gap-2 mb-2">
<svg className="text-neutral-700" data-lucide="wallet" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
<p className="text-sm font-medium tracking-tight">CFO</p>
</div>
<p className="text-sm text-neutral-700">Recurring revenue integrity — every escalation captured, every action traced.</p>
</div>
<div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-5">
<div className="flex items-center gap-2 mb-2">
<svg className="text-neutral-700" data-lucide="clipboard-list" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
<p className="text-sm font-medium tracking-tight">Property Manager</p>
</div>
<p className="text-sm text-neutral-700">Automated renewals and escalations — no spreadsheets, no surprises.</p>
</div>
<div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-5">
<div className="flex items-center gap-2 mb-2">
<svg className="text-neutral-700" data-lucide="scale" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
<p className="text-sm font-medium tracking-tight">Legal</p>
</div>
<p className="text-sm text-neutral-700">Clause-level explainability with jurisdictional checks and redlines.</p>
</div>
<div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-5">
<div className="flex items-center gap-2 mb-2">
<svg className="text-neutral-700" data-lucide="building-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
<p className="text-sm font-medium tracking-tight">Asset</p>
</div>
<p className="text-sm text-neutral-700">Portfolio-wide insights and automated actions against the source of truth.</p>
</div>
</div>

<div className="h-px w-full my-8 bg-neutral-200"></div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
<div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full grayscale object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;h=200&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight">Lisa M.</p>
<p className="text-xs text-neutral-500">Property Manager</p>
</div>
</div>
<p className="mt-3 text-sm text-neutral-700">“We stopped losing rent we didn’t even know was missing.”</p>
</div>
<div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full grayscale object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;h=200&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight">Rachel N.</p>
<p className="text-xs text-neutral-500">Director of Compliance</p>
</div>
</div>
<p className="mt-3 text-sm text-neutral-700">“Every number links back to its clause.”</p>
</div>
<div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full grayscale object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=200&amp;h=200&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight">David C.</p>
<p className="text-xs text-neutral-500">CFO</p>
</div>
</div>
<p className="mt-3 text-sm text-neutral-700">“It could save my analysts a month per quarter.”</p>
</div>
</div>
</section>

<section className="scroll-mt-24 w-full sm:px-6 md:px-10 mx-auto pt-12 pb-12 px-4 max-w-7xl" id="integrations">
<div className="rounded-3xl ring-1 ring-neutral-200 bg-white p-6 sm:p-10">
<div className="text-center">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Built for the Modern CRE Stack.</h3>
<p className="mt-2 text-neutral-700">Proof of Concept in under 1 hour.</p>
</div>
<div className="mt-6 rounded-xl ring-1 ring-neutral-200 bg-neutral-50 p-4">
<div className="grid grid-cols-2 sm:grid-cols-6 gap-4 items-center justify-items-center">
<div className="h-10 w-28 bg-neutral-200/60 rounded-md"></div>
<div className="h-10 w-28 bg-neutral-200/60 rounded-md"></div>
<div className="h-10 w-28 bg-neutral-200/60 rounded-md"></div>
<div className="h-10 w-28 bg-neutral-200/60 rounded-md"></div>
<div className="h-10 w-28 bg-neutral-200/60 rounded-md"></div>
<div className="h-10 w-28 bg-neutral-200/60 rounded-md"></div>
</div>
<p className="mt-3 text-center text-xs text-neutral-500">Yardi • MRI • RealPage • Salesforce • Drive • DocuSign (logos shown in grayscale)</p>
</div>
</div>
</section>

<section className="scroll-mt-24 w-full sm:px-6 md:px-10 mx-auto pt-24 pb-24 px-4 max-w-7xl" id="cta">
<div className="relative rounded-3xl ring-1 ring-neutral-200 bg-white overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-neutral-200"></div>
<div className="px-6 py-16 sm:px-10 sm:py-24 text-center">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let your contracts work for you.</h3>
<p className="mt-3 text-neutral-700">See how your leases perform when they can think and act for themselves.</p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-base font-medium text-white bg-blue-600 rounded-full px-7 py-3.5 shadow-lg ring-1 ring-blue-700/30 hover:bg-blue-500 transition hover:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-1 focus-visible:ring-offset-white" href="#">
            Book a Demo
            <svg className="" data-lucide="calendar-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="w-full sm:px-6 md:px-10 mx-auto pt-12 pb-10 px-4 max-w-7xl">
<div className="relative overflow-hidden rounded-3xl" style={{background: '#0A0A0A'}}>
<div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12 text-white">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div>
<h4 className="text-sm uppercase tracking-[0.2em] text-white/70">Product</h4>
<div className="mt-3 flex flex-wrap gap-4 text-sm text-white/80">
<a className="hover:text-white transition rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0A0A0A]" href="#overview">Use Cases</a>
<a className="hover:text-white transition rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0A0A0A]" href="#integrations">Integrations</a>
<a className="hover:text-white transition rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0A0A0A]" href="#security">Security</a>
<a className="hover:text-white transition rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0A0A0A]" href="#">Company</a>
</div>
</div>
<div className="lg:text-right">
<p className="text-white/80">Backed by Draper Associates and Google for Startups</p>
<div className="mt-3 inline-flex items-center gap-3 opacity-70">
<div className="h-6 w-24 bg-white/20 rounded"></div>
<div className="h-6 w-28 bg-white/20 rounded"></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<p className="text-white/60 text-sm">© <span id="year">2025</span> TrustAI — Contracts that Think and Act for Commercial Real Estate.</p>
<a className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0A0A0A]" href="#">
<svg className="" data-lucide="arrow-up" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
            Back to top
          </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
