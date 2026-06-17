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



      // Mobile nav toggle
      const menuBtn = document.getElementById('menu-btn');
      const mobileNav = document.getElementById('mobile-nav');
      if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
          mobileNav.classList.toggle('hidden');
        });
      }

      // Demo form handling
      const form = document.getElementById('demo-form');
      const success = document.getElementById('form-success');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          // Basic validation
          const required = form.querySelectorAll('[required]');
          let valid = true;
          required.forEach((el => {
            if ((el.type === 'checkbox' && !el.checked) || (el.value || '').trim() === '') {
              el.classList.add('ring-rose-300', 'border-rose-300');
              valid = false;
            } else {
              el.classList.remove('ring-rose-300', 'border-rose-300');
            }
          });
          if (!valid) return;

          // Simulated submit
          success.classList.remove('hidden');
          success.focus?.();
          form.reset();
          setTimeout(() => success.classList.add('hidden'), 5000);
        });
      }

      // Current year
      const yearEl = document.getElementById('year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      // Luc icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide?.createIcons) {
          window.lucide.createIcons();
        }
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
      

<header className="w-full">
<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4">
<div className="flex items-center justify-between rounded-2xl bg-white/80 backdrop-blur-md ring-1 ring-neutral-200 px-4 py-3">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded-md bg-neutral-900"></div>
<span className="text-lg font-medium tracking-tight">TrustAI</span>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm text-neutral-700">
<a className="hover:text-black transition-colors font-medium" href="#product">Product</a>
<a className="hover:text-black transition-colors font-medium" href="#agents">AI Agents</a>
<a className="hover:text-black transition-colors font-medium" href="#resources">Resources</a>
<a className="hover:text-black transition-colors font-medium" href="#security">Security</a>
<a className="hover:text-black transition-colors font-medium" href="#company">Company</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center justify-center text-sm font-medium text-neutral-800 bg-neutral-100 border border-neutral-200 rounded-full px-4 py-2.5 hover:bg-neutral-200/60 transition" href="#">Sign In</a>
<a className="inline-flex items-center justify-center text-sm font-medium text-white bg-neutral-900 rounded-full px-4 py-2.5 shadow-sm ring-1 ring-black/10 hover:bg-neutral-800 transition" href="#demo">Book a Demo</a>
</div>
<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100 transition" id="menu-btn">
<svg className="lucide" data-lucide="menu" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path>
</svg>
</button>
</div>
<div className="hidden md:hidden mt-2 rounded-xl bg-white ring-1 ring-neutral-200 p-2" id="mobile-nav">
<a className="block px-3 py-2 rounded-lg text-sm text-neutral-800 hover:bg-neutral-100" href="#product">Product</a>
<a className="block px-3 py-2 rounded-lg text-sm text-neutral-800 hover:bg-neutral-100" href="#agents">AI Agents</a>
<a className="block px-3 py-2 rounded-lg text-sm text-neutral-800 hover:bg-neutral-100" href="#resources">Resources</a>
<a className="block px-3 py-2 rounded-lg text-sm text-neutral-800 hover:bg-neutral-100" href="#security">Security</a>
<a className="block px-3 py-2 rounded-lg text-sm text-neutral-800 hover:bg-neutral-100" href="#company">Company</a>
<div className="mt-2 grid grid-cols-2 gap-2">
<a className="inline-flex items-center justify-center text-sm font-medium text-neutral-800 bg-neutral-100 border border-neutral-200 rounded-lg px-3 py-2 hover:bg-neutral-200/60 transition" href="#">Sign In</a>
<a className="inline-flex items-center justify-center text-sm font-medium text-white bg-neutral-900 rounded-lg px-3 py-2 shadow-sm ring-1 ring-black/10 hover:bg-neutral-800 transition" href="#demo">Book a Demo</a>
</div>
</div>
</div>
</header>

<section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mt-6" id="product">
<div className="relative w-full rounded-[36px] bg-white/90 ring-1 ring-neutral-200 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.22)] backdrop-blur-xl overflow-hidden">
<div className="p-6 sm:p-8 md:p-10">
<div className="grid grid-cols-1 gap-8 items-start">
<div className="">
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-normal tracking-tight text-neutral-900">Contracts that think — and act.</h1>
<p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-[60ch]">TrustAI reads every lease, flags hidden risks, and acts on them before revenue is lost.</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
<a className="inline-flex items-center justify-center gap-2 text-base font-medium text-white bg-neutral-900 rounded-full px-6 py-3 shadow-lg shadow-neutral-900/20 ring-1 ring-black/10 hover:bg-neutral-800 transition" href="#demo">
                  Book a Demo
                  <svg className="lucide" data-lucide="calendar" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center text-base font-medium text-neutral-800 bg-neutral-100/70 border border-neutral-200 rounded-full px-6 py-3 hover:bg-neutral-100 transition" href="#how">
                  See How It Works
                </a>
</div>
<div className="mt-6 flex items-center gap-2 text-sm text-neutral-500">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                Backed by Draper Associates and Google for Startups.
              </div>
</div>

<div className="relative">
<div className="w-full rounded-2xl bg-neutral-950 ring-1 ring-neutral-800 overflow-hidden">
<div className="grid grid-cols-12">

<div className="col-span-7 bg-neutral-900/60 border-neutral-800 border-r pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2 text-white/80 text-sm">
<svg className="lucide" data-lucide="file-stack" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m16 3 5 4-5 4-5-4Z"></path><path d="m2 7 5 4 5-4"></path><path d="m7 11 5 4 5-4"></path><path d="m12 15 5 4 5-4"></path>
</svg>
                        Leases
                      </div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded-md bg-emerald-400/10 text-emerald-300 text-[11px] ring-1 ring-emerald-300/20">Synced</span>
<span className="px-2 py-1 rounded-md bg-white/5 text-white/80 text-[11px] ring-1 ring-white/10">Yardi · SharePoint</span>
</div>
</div>
<div className="overflow-hidden rounded-xl ring-1 ring-white/10">
<table className="w-full text-left text-sm">
<thead className="bg-white/5 text-white/70">
<tr className="">
<th className="py-2.5 px-3 font-medium">Tenant</th>
<th className="py-2.5 px-3 font-medium">Base Rent</th>
<th className="py-2.5 px-3 font-medium">Escalation</th>
<th className="py-2.5 px-3 font-medium">Renewal</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/[0.03]">
<td className="py-3 px-3 text-white/90">Alaris Holdings</td>
<td className="py-3 px-3 text-white/90">$42,500</td>
<td className="py-3 px-3">
<span className="text-amber-300 underline decoration-dotted underline-offset-2 cursor-pointer">3% annual</span>
</td>
<td className="py-3 px-3">
<span className="text-emerald-300 underline decoration-dotted underline-offset-2 cursor-pointer">2 x 3yr</span>
</td>
</tr>
<tr className="hover:bg-white/[0.03]">
<td className="py-3 px-3 text-white/90">Centerline Partners</td>
<td className="py-3 px-3 text-white/90">$28,900</td>
<td className="py-3 px-3">
<span className="text-amber-300 underline decoration-dotted underline-offset-2 cursor-pointer">CPI ≥ 2%</span>
</td>
<td className="py-3 px-3">
<span className="text-rose-300 underline decoration-dotted underline-offset-2 cursor-pointer">Expired</span>
</td>
</tr>
<tr className="hover:bg-white/[0.03]">
<td className="py-3 px-3 text-white/90">ABL Capital</td>
<td className="py-3 px-3 text-white/90">$19,750</td>
<td className="py-3 px-3">
<span className="text-amber-300 underline decoration-dotted underline-offset-2 cursor-pointer">5% Y2, 3% thereafter</span>
</td>
<td className="py-3 px-3">
<span className="text-emerald-300 underline decoration-dotted underline-offset-2 cursor-pointer">Auto-renew</span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-white/60 text-xs">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span> 3 escalations verified
                      </div>
<a className="text-xs text-white/80 hover:text-white inline-flex items-center gap-1" href="#how">
                        See verification
                        <svg className="lucide" data-lucide="arrow-up-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>

<div className="col-span-5 p-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 h-full">
<div className="flex items-center justify-between">
<p className="text-white/80 text-sm">Extracted Clause</p>
<span className="px-2 py-1 rounded-md bg-emerald-400/10 text-emerald-300 text-[11px] ring-1 ring-emerald-300/20">Verified</span>
</div>
<h3 className="mt-2 text-white text-lg font-medium tracking-tight">Escalation — 3% annual</h3>
<p className="mt-2 text-white/80 text-sm leading-relaxed">“Base Rent shall increase by three percent (3%) each anniversary of the Commencement Date.”</p>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-xs text-white/60">Effective</p>
<p className="text-sm text-white">Jan 1, 2025</p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-xs text-white/60">Applies to</p>
<p className="text-sm text-white">Base Rent</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-xs text-white/90 hover:text-white" href="#">
<svg className="lucide" data-lucide="link-2" fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17H7a5 5 0 0 1 0-10h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><path d="M8 12h8"></path>
</svg>
                          View source in PDF
                        </a>
<button className="inline-flex items-center gap-2 text-xs text-neutral-900 bg-white rounded-md px-3 py-1.5 ring-1 ring-white/40 hover:bg-white/90 transition">
                          Highlight
                          <svg className="lucide" data-lucide="highlighter" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 11-6 6v3h9l3-3"></path><path d="M9 11 22 4"></path><path d="m16 4 4 4"></path><path d="M3 20h9"></path>
</svg>
</button>
</div>
<div className="mt-4 overflow-hidden rounded-lg ring-1 ring-white/10">
<div className="bg-white/5 p-2 flex items-center justify-between">
<span className="text:[11px] text-white/60">PDF — Page 12</span>
<span className="text-[11px] text-white/60">Alaris_Lease.pdf</span>
</div>
<div className="h-28 bg-gradient-to-br from-neutral-800 to-neutral-900 relative">
<div className="absolute inset-x-4 top-3 h-16 rounded-md bg-amber-400/20 ring-1 ring-amber-300/30"></div>
<div className="absolute bottom-2 left-4 right-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-white/40"></div>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-white/70">
<svg className="lucide" data-lucide="shield-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path>
</svg>
                        Verified by Compliance Validator Agent
                      </div>
</div>
</div>
</div>
</div>
<p className="mt-3 text-xs text-neutral-500 text-right">Demo data for illustration.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mt-8">
<div className="rounded-3xl bg-white ring-1 ring-neutral-200 p-4 sm:p-6">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<p className="text-sm text-neutral-600">Trusted by forward-thinking companies in real estate and finance:</p>
<div className="grid grid-cols-2 sm:grid-cols-6 gap-2 sm:gap-3">
<div className="inline-flex items-center justify-center rounded-xl bg-neutral-100 text-neutral-800 text-xs px-3 py-2 ring-1 ring-neutral-200">Draper Associates</div>
<div className="inline-flex items-center justify-center rounded-xl bg-neutral-100 text-neutral-800 text-xs px-3 py-2 ring-1 ring-neutral-200">Google for Startups</div>
<div className="inline-flex items-center justify-center rounded-xl bg-neutral-100 text-neutral-800 text-xs px-3 py-2 ring-1 ring-neutral-200">Alaris</div>
<div className="inline-flex items-center justify-center rounded-xl bg-neutral-100 text-neutral-800 text-xs px-3 py-2 ring-1 ring-neutral-200">Centerline</div>
<div className="inline-flex items-center justify-center rounded-xl bg-neutral-100 text-neutral-800 text-xs px-3 py-2 ring-1 ring-neutral-200">ABL</div>
<div className="inline-flex items-center justify-center rounded-xl bg-neutral-100 text-neutral-800 text-xs px-3 py-2 ring-1 ring-neutral-200">SMC</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mt-10">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-neutral-800 bg-neutral-900">
<div className="relative z-10 p-6 sm:p-10">
<h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight leading-[1.05]">Hidden revenue. Invisible risk. Buried in your leases.</h2>
<p className="mt-3 text-neutral-300 text-base max-w-[70ch]">Most portfolios hide unbilled escalations, outdated clauses, and missed renewals. TrustAI audits every lease automatically — finding what humans miss and fixing it before it costs you.</p>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 text-emerald-300 text-sm">
<svg className="lucide" data-lucide="trending-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
                Missed rent escalations detected automatically
              </div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 text-amber-300 text-sm">
<svg className="lucide" data-lucide="link" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
                Clause errors flagged with source link
              </div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 text-sky-300 text-sm">
<svg className="lucide" data-lucide="file-text" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>
</svg>
                Renewal drafts generated and routed for signature
              </div>
</div>
</div>
</div>
<div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"></div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mt-12" id="how">
<div className="flex items-end justify-between mb-4">
<div>
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-[0.2em]">Process</p>
<h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">How it works</h2>
<p className="mt-2 text-neutral-600">Five simple steps to turn lease chaos into clean, automated intelligence.</p>
</div>
</div>
<div className="grid md:grid-cols-5 gap-4 sm:gap-5">

<div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5 flex flex-col">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-500">(01)</span>
<span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-400/10 px-2 py-1 rounded-md ring-1 ring-emerald-300/30">Upload</span>
</div>
<div className="mt-3 flex items-center gap-2 text-neutral-900">
<div className="h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-neutral-200 flex items-center justify-center">
<svg className="lucide" data-lucide="upload-cloud" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12v9"></path><path d="m16 16-4-4-4 4"></path><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
</svg>
</div>
<h3 className="text-base font-medium tracking-tight">Upload or Sync Leases</h3>
</div>
<p className="mt-2 text-sm text-neutral-600">Connect your Yardi, AppFolio, or SharePoint — or drag and drop PDFs and DOCX files.</p>
</div>
<div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5 flex flex-col">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-500">(02)</span>
<span className="inline-flex items-center gap-1.5 text-[11px] text-indigo-700 bg-indigo-400/10 px-2 py-1 rounded-md ring-1 ring-indigo-300/30">AI</span>
</div>
<div className="mt-3 flex items-center gap-2 text-neutral-900">
<div className="h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-neutral-200 flex items-center justify-center">
<svg className="lucide" data-lucide="brain" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path>
</svg>
</div>
<h3 className="text-base font-medium tracking-tight">AI Abstraction &amp; Reading</h3>
</div>
<p className="mt-2 text-sm text-neutral-600">Extracts rent terms, dates, clauses, and key financials — with full context, not just fields.</p>
</div>
<div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5 flex flex-col">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-500">(03)</span>
<span className="inline-flex items-center gap-1.5 text-[11px] text-rose-700 bg-rose-400/10 px-2 py-1 rounded-md ring-1 ring-rose-300/30">Risk</span>
</div>
<div className="mt-3 flex items-center gap-2 text-neutral-900">
<div className="h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-neutral-200 flex items-center justify-center">
<svg className="lucide" data-lucide="shield-alert" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path>
</svg>
</div>
<h3 className="text-base font-medium tracking-tight">Verification &amp; Risk Detection</h3>
</div>
<p className="mt-2 text-sm text-neutral-600">Agents flag revenue gaps, missing escalations, or compliance risks based on local/state rules.</p>
</div>
<div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5 flex flex-col">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-500">(04)</span>
<span className="inline-flex items-center gap-1.5 text-[11px] text-amber-700 bg-amber-400/10 px-2 py-1 rounded-md ring-1 ring-amber-300/30">Review</span>
</div>
<div className="mt-3 flex items-center gap-2 text-neutral-900">
<div className="h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-neutral-200 flex items-center justify-center">
<svg className="lucide" data-lucide="check-square" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 11 3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H7l-4-4V5a2 2 0 0 1 2-2h8"></path>
</svg>
</div>
<h3 className="text-base font-medium tracking-tight">Human Review &amp; Execution</h3>
</div>
<p className="mt-2 text-sm text-neutral-600">Approve findings. TrustAI drafts renewals, updates clauses, and generates compliant contracts.</p>
</div>
<div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5 flex flex-col">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-500">(05)</span>
<span className="inline-flex items-center gap-1.5 text-[11px] text-sky-700 bg-sky-400/10 px-2 py-1 rounded-md ring-1 ring-sky-300/30">Sync</span>
</div>
<div className="mt-3 flex items-center gap-2 text-neutral-900">
<div className="h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-neutral-200 flex items-center justify-center">
<svg className="lucide" data-lucide="replace" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4h6v6"></path><path d="M4 20h6v-6"></path><path d="M20 4 13 11"></path><path d="m11 13-7 7"></path>
</svg>
</div>
<h3 className="text-base font-medium tracking-tight">Push to CRM / ERP Systems</h3>
</div>
<p className="mt-2 text-sm text-neutral-600">Verified data syncs to Yardi, Salesforce, or internal dashboards — always up to date.</p>
</div>
</div>
<div className="mt-6 rounded-2xl bg-neutral-900 text-white ring-1 ring-neutral-800 p-4 sm:p-5 flex items-center justify-between">
<p className="text-sm text-white/80">Every output is grounded in source documents. No hallucinations. Full audit trace.</p>
<div className="hidden sm:flex items-center gap-2 text-white/70 text-sm">
<svg className="lucide" data-lucide="search-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.3-4.3"></path><circle cx="11" cy="11" r="8"></circle><path d="m9 11 2 2 4-4"></path>
</svg>
          Audit-ready
        </div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mt-12">
<div className="flex items-end justify-between mb-6 sm:mb-8">
<div>
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-[0.2em]">Results</p>
<h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">Proof from the field.</h2>
</div>
</div>
<div className="grid md:grid-cols-3 gap-4 sm:gap-6">
<article className="rounded-3xl bg-white ring-1 ring-neutral-200 p-5 flex flex-col">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-emerald-100 ring-1 ring-emerald-200 flex items-center justify-center text-emerald-700">
<svg className="lucide" data-lucide="quote" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7h5v10H3z"></path><path d="M14 7h7v10h-7z"></path>
</svg>
</div>
<p className="text-neutral-800 text-sm leading-relaxed">“We found missed rent escalations in 11% of our leases. TrustAI flagged them, drafted amendments, and recovered $38K in annual rent.”</p>
</div>
<p className="mt-4 text-xs text-neutral-500">— Rachel N., Director of Compliance</p>
</article>
<article className="rounded-3xl bg-white ring-1 ring-neutral-200 p-5 flex flex-col">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-amber-100 ring-1 ring-amber-200 flex items-center justify-center text-amber-700">
<svg className="lucide" data-lucide="quote" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7h5v10H3z"></path><path d="M14 7h7v10h-7z"></path>
</svg>
</div>
<p className="text-neutral-800 text-sm leading-relaxed">“We stopped losing rent we didn’t even know we were missing.”</p>
</div>
<p className="mt-4 text-xs text-neutral-500">— Lisa M., Senior Property Manager</p>
</article>
<article className="rounded-3xl bg-white ring-1 ring-neutral-200 p-5 flex flex-col">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-sky-100 ring-1 ring-sky-200 flex items-center justify-center text-sky-700">
<svg className="lucide" data-lucide="quote" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7h5v10H3z"></path><path d="M14 7h7v10h-7z"></path>
</svg>
</div>
<p className="text-neutral-800 text-sm leading-relaxed">“Every number links back to its clause. That’s how you build trust.”</p>
</div>
<p className="mt-4 text-xs text-neutral-500">— David K., CFO</p>
</article>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mt-12" id="agents">
<div className="flex items-end justify-between mb-6">
<div>
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-[0.2em]">Automation</p>
<h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">AI agents for your entire contract lifecycle</h2>
<p className="mt-2 text-neutral-600">Each agent handles a core part of lease management — from reading and verifying to drafting and execution.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-4 sm:gap-6">
<article className="relative bg-white ring-1 ring-neutral-200 rounded-3xl p-5 sm:p-6 hover:-translate-y-0.5 transition">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200 text-neutral-900">
<svg className="lucide" data-lucide="file-search" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 16.5 20 22"></path><path d="M14 2H6a2 2 0 0 0-2 2v12a4 4 0 0 0 4 4h8"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
</svg>
</span>
<h3 className="text-lg font-medium tracking-tight">Lease Abstraction Agent</h3>
</div>
<p className="mt-2 text-sm text-neutral-600">Extracts rent terms, escalations, and penalties — every clause linked to its source.</p>
</article>
<article className="relative bg-white ring-1 ring-neutral-200 rounded-3xl p-5 sm:p-6 hover:-translate-y-0.5 transition">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200 text-neutral-900">
<svg className="lucide" data-lucide="shield-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path>
</svg>
</span>
<h3 className="text-lg font-medium tracking-tight">Compliance Validator Agent</h3>
</div>
<p className="mt-2 text-sm text-neutral-600">Detects risky language and proposes compliant revisions across state and local rules.</p>
</article>
<article className="relative bg-white ring-1 ring-neutral-200 rounded-3xl p-5 sm:p-6 hover:-translate-y-0.5 transition">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200 text-neutral-900">
<svg className="lucide" data-lucide="coins" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6c4.97 0 9-1.79 9-4s-4.03-4-9-4-9 1.79-9 4 4.03 4 9 4Z" transform="translate(0 6)"></path><path d="M3 10v4c0 2.21 4.03 4 9 4s9-1.79 9-4v-4"></path>
</svg>
</span>
<h3 className="text-lg font-medium tracking-tight">Revenue Audit Agent</h3>
</div>
<p className="mt-2 text-sm text-neutral-600">Cross-checks lease terms against ERP data to find missed escalations or unbilled fees.</p>
</article>
<article className="relative bg-white ring-1 ring-neutral-200 rounded-3xl p-5 sm:p-6 hover:-translate-y-0.5 transition">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200 text-neutral-900">
<svg className="lucide" data-lucide="send" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2 11 13"></path><path d="M22 2 15 22l-4-9-9-4Z"></path>
</svg>
</span>
<h3 className="text-lg font-medium tracking-tight">Renewal &amp; Execution Agent</h3>
</div>
<p className="mt-2 text-sm text-neutral-600">Tracks expirations, applies escalations, and sends contracts for signing via SMS, email, or Face ID.</p>
</article>
</div>
<div className="mt-6 flex items-center justify-center">
<div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 ring-1 ring-neutral-200 px-4 py-2 text-sm text-neutral-700">
          Proof of concept in hours. Deployment in days.
        </div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mt-12">
<div className="rounded-3xl bg-white ring-1 ring-neutral-200 p-5 sm:p-8">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">Why teams choose TrustAI</h2>
<div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-2xl ring-1 ring-neutral-200 bg-neutral-50 p-4">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-lg bg-white ring-1 ring-neutral-200 flex items-center justify-center text-neutral-900">
<svg className="lucide" data-lucide="link-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17H7a5 5 0 0 1 0-10h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><path d="M8 12h8"></path>
</svg>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Verifiable outputs</p>
<p className="text-sm text-neutral-600 mt-1">Every number links back to its source PDF.</p>
</div>
</div>
</div>
<div className="rounded-2xl ring-1 ring-neutral-200 bg-neutral-50 p-4">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-lg bg-white ring-1 ring-neutral-200 flex items-center justify-center text-neutral-900">
<svg className="lucide" data-lucide="workflow" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><path d="M10 8h4"></path><path d="M7 10v4"></path><path d="M17 14v-4"></path>
</svg>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Agentic automation</p>
<p className="text-sm text-neutral-600 mt-1">Step-based AI agents handle analysis and execution.</p>
</div>
</div>
</div>
<div className="rounded-2xl ring-1 ring-neutral-200 bg-neutral-50 p-4">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-lg bg-white ring-1 ring-neutral-200 flex items-center justify-center text-neutral-900">
<svg className="lucide" data-lucide="plug" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22v-5"></path><path d="M9 7V2"></path><path d="M15 7V2"></path><path d="M5 8h14"></path><path d="M8 12h8"></path>
</svg>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Seamless integrations</p>
<p className="text-sm text-neutral-600 mt-1">Works with Yardi, MRI, RealPage, Salesforce, and more.</p>
</div>
</div>
</div>
<div className="rounded-2xl ring-1 ring-neutral-200 bg-neutral-50 p-4">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-lg bg-white ring-1 ring-neutral-200 flex items-center justify-center text-neutral-900">
<svg className="lucide" data-lucide="user-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0"></path><path d="M12 14a7 7 0 0 0-7 7h8"></path><path d="m15 19 2 2 4-4"></path>
</svg>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Human-in-loop</p>
<p className="text-sm text-neutral-600 mt-1">You approve every change with one click.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mt-12">
<div className="rounded-3xl ring-1 ring-neutral-200 bg-white p-5 sm:p-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">From spreadsheets to structured intelligence.</h2>
<p className="mt-2 text-neutral-600">No more manual audits — just live, searchable data connected to every lease.</p>
</div>
</div>
<div className="mt-6 grid md:grid-cols-2 gap-4 sm:gap-6">
<div className="relative rounded-2xl overflow-hidden ring-1 ring-neutral-200 bg-neutral-50">
<div className="absolute top-3 left-3 z-10 inline-flex items-center gap-2 text-xs text-neutral-700 bg-white ring-1 ring-neutral-200 px-2.5 py-1.5 rounded-md">Before — Excel</div>
<div className="p-4">
<div className="h-56 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:16px_32px,64px_32px] rounded-lg"></div>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden ring-1 ring-neutral-200 bg-neutral-900">
<div className="absolute top-3 left-3 z-10 inline-flex items-center gap-2 text-xs text-white bg-white/10 ring-1 ring-white/20 px-2.5 py-1.5 rounded-md">After — TrustAI</div>
<div className="p-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center justify-between">
<p className="text-white/80 text-sm">Portfolio Insights</p>
<span className="text-[11px] text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-300/20 px-2 py-1 rounded">Compliant</span>
</div>
<div className="mt-3 grid grid-cols-3 gap-3">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-xs text-white/60">Recovered</p>
<p className="text-white font-medium">$38K ARR</p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-xs text-white/60">Escalations</p>
<p className="text-white font-medium">+11%</p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<p className="">Renewals due</p>
<p className="text-white font-medium">9 in 90d</p>
</div>
</div>
<div className="mt-4 overflow-hidden rounded-lg ring-1 ring-white/10">
<div className="flex items-center justify-between bg-white/5 px-3 py-2">
<p 60"="" className="text-white/80 text-smUpcoming Renewalsp &lt;span class=" text-[11px]="" text-white="">Next 90 days
                  </p></div>
<div className="-y-white/5">
<div className="flex items-center justify-between px-3 py-2 hover:bg-white/[0.03]">
<div className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-amber-300"></span>
<p className="text-sm-white">Centerline Partners</p>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-amber-300 bg-amber-400/10 ring-1 ring-amber-300/30 px-2 py-0.5 rounded">Renewal</span>
<p className="text-xs text-white/70">Aug 12</p>
</div>
</div>
<div className="flex items-center justify-between px-3 py-2 hover:bg-white/[0.03]">
<div className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-300"></span>
<p className="text-sm text-white">ABL Capital</p>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-emerald-300-emerald-400/10 ring-1 ring-emerald-300/30 px-2 py-0.5 rounded">Auto-escalate</span>
<p className="text-xs text-white/70">Sep 01</p>
</div>
</div>
<div className="flex items-center justify-between px-3 py-2 hover:bg-white/[0.03] &lt;div class=" flex="" gap-2"="" items-center="">
<span className="inline-flex h-2 w-2 rounded-full bg-rose-300"></span>
<p className="text-sm text-white">Northview Labs
                      </p></div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-rose-300 bg-rose-400/10 ring-1 ring-rose-300/30 px-2 py-0.5 rounded">Expired</span>
<p className="text-xs text-white/70">Jul </p>
</div>
</div>
</div>
</div>
<div className="mt-4">
<div className="rounded-lg bg-gradient-to-br from-white/5 to-white/[0.03] ring-1 ring-white/10 p-3">
<div className="flex items-center justify-between">
<p className="text-white/80 text-sm">Recovery Trend</p>
<span className="text-[11px] text-white/60">Last 6 months</span>
</div>
<div className="mt-2 h-20 relative">
<div className="absolute inset-0 -skew-x-12 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
<svg className="relative w-full h-full" viewbox="0 0 240 80">
<defs>
<lineargradient id="grad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgb(16 185 129)"></stop>
<stop offset="100%" stop-color="rgb(16 185 129 / 0.2)"></stop>
</lineargradient>
</defs>
<path d="M0,65 C20,60 ,55 60,48 C80,41 100,45 120,36 C140,27 160,22 180,28 C200,34 220,30 240,24" fill="none" stroke="url(#grad)" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mt-12" id="security">
<div className="rounded-3xl bg-neutral-900 text-white ring-1 ring-neutral-800 p-6 sm:p-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<p className="text-[11px] sm:text-xs uppercase text-white/60 tracking-[0.2em]">Security</p>
<h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">Enterprise-grade privacy and protection</h2>
<p className="mt-2 text-white/70 max-w-[65ch]">Data is encrypted at rest and in transit. Environments are isolated per tenant. Access is auditable and least-privilege by default.</p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
<span className="inline-flex-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-xs">SOC 2</span>
<span className="inline-flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-xs">GDPR</span>
<span className="inline-flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-xs">SSO / SAML</span>
<span className="inline-flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-xs">Audit Logs</span>
</div>
</div>
<div className="-6 grid md:grid-cols-3 gap-4">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start gap-2">
<div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
<svg 0="" 24="" 24"="" className="text-white/80 viewBox=" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0  1 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<p className="text-sm font-medium">Encryption</p>
<p className="text-sm text-white/70 mt-1">AES‑256 at rest, TLS 1.2+ in transit. Customer-managed keys optional.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start gap-2">
<div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
<svg className="text-white/80" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 37c0 6 8 10 8 10"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<div>
<p className="text-sm font-medium">Access control</p>
<p className="text-sm text-white/70 mt-1">RBAC, SSO/SAML, SCIM provisioning, and granular document permissions.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start gap-2">
<div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
<svg 80"="" ="text-white="" fill="none" height="16" stroke="Color" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.3-4.3"></path>&lt; cx="11" cy="11" r="8"&gt;<path d="m9 11 2 2 4-4"></path></svg>
</div>
<div>
<p className="text-sm font-medium">Compliance</p>
<p className="text-sm text-white/70 mt-1">SOC 2 Type II report available under NDA. Continuous monitoring.</p>
</div>
</div>
</div>
</div>
</div>
</div></section>

<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mt-12" id="resources">
<div className="rounded-3xl bg-white ring-1 ring-neutral-200 p-6 sm:p-">
<div className="flex items-end justify-between">
<div>
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-[0.2em]">Resources</p>
<h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">Guides and templates</h2>
<p className="mt-2 text-neutral-600">Get started fast with playbooks, checklists, and contract templates.</p>
</div>
</div>
<div className="mt-6 grid md:grid-cols-3 gap-4 sm:gap-6">
<a className="group rounded-3xl bg-neutral-50 ring-1 ring-neutral-200 p-5 hover:bg-white hover:shadow-md transition" href="#">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">Lease Audit Playbook</h3>
<span className="text-[11px] text-neutral-700 bg-white ring-1 ring-neutral-200 px-2 py-1 rounded-full">PDF</span>
</div>
<p className="mt-2 text-sm text-neutral-600">A step-by-step framework to uncover missed escalations and revenue gaps.</p>
<div className="mt-4 inline-flex items-center gap-1 text-sm text-neutral-900 group-hover:gap-1.5 transition-all">
              Read now
              <svg className="lucide" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
<a className="group rounded-3xl bg-neutral-50 ring-1 ring-neutral-200 p-5 hover:bg-white hover:shadow-md transition" href="#">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">Renewal Notice Templates</h3>
<span className="text-[11px] text-neutral-700 bg-white ring-1 ring-neutral-200 px-2 py-1 rounded-full">DOCX</span>
</div>
<p className="mt-2 text-sm text-neutral-600">Attorney-reviewed templates to communicate escalations and renewals.</p>
<div className="mt-4 inline-flex items-center gap-1 text-sm text-neutral-900 group-hover:gap-1.5 transition-all">
              Download
              <svg className="lucide" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M12 15V3"></path></svg>
</div>
</a>
<a className="group rounded-3xl bg-neutral-50 ring-1 ring-neutral-200 p-5 hover:bg-white hover:shadow-md transition" href="#">
</a><div className="flex items-center justify-between"><a className="group rounded-3xl bg-neutral-50 ring-1 ring-neutral-200 p-5 hover:bg-white hover:shadow-md transition" href="#">
<h3 className="text-lg font-medium tracking-tight">Webinar: Preventing Revenue Leakage</h3>
<span className="text-[11px] text-neutral-700 bg-white ring-1 ring-neutral-200 px-2 py-1 rounded-fullVideo&lt;/span&gt; &lt;/div&gt; &lt;p class=" mt-2="" text-neutral-600"="" text-sm="">How AI agents detect, verify, and billing mismatches automatically.<p></p>
<div className="mt-4 inline-flex items-center gap-1 text-sm text-neutral-900 group-hover:gap-1.5 transition-all">
              Watch
              <svg className="lucide" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</div>
</span></a>
</div>
</div>
</div></section>

<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mt-12 mb-16" id="demo">
<div className="grid md:grid-cols-2 gap-4 sm:gap-6">
<div className="rounded-3xl bg-neutral-900 text-white ring-1 ring-neutral-800 p-6 sm:p-8">
<p className="text-[11px] sm:text-xs uppercase text-white/60 tracking-[0.2em]">Get a demo</p>
<h2 className="mt-2 text-2xl sm:text-3xl font-medium tracking-tight">See TrustAI on your leases</h2>
<p className="mt-2 text-white/70">Share a few details and we’ll set up a tailored walkthrough. Most teams see a working POC in days.</p>
<ul className="mt-4 space-y-2 text-white/80 text-sm">
<li className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Includes a free audit on 10 leases
            </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              ROI and recovery estimate
            </li>
<li className="flex items-center gap-2">
<span="inline-flex bg-emerald-400"="" h-1.5="" rounded-full="" w-1.5="">
              Security and compliance deep-dive
            </span="inline-flex></li>
</ul>
</div>
<div className="rounded-3xl bg-white ring-1 ring-neutral-200 p-6 sm:p-8">
<form className="space-y-4" id="demo-form" novalidate="">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-800" htmlFor="name">Full name</label>
<input className="mt-1 block w-full rounded-xl border-neutral-200 focus:border-neutral-400 focus:ring-0 ring-1 ring-neutral-200 px-3 py-2.5 text-sm placeholder:text-neutral-" id="name" name="name" placeholder="Alex Johnson" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-800" htmlFor="email">Work email</label>
<input className="mt-1 block w-full rounded-xl border-neutral-200 focus:border-neutral-400 focus:ring-0 ring-1 ring-neutral-200 px-3 py-2.5 text-sm placeholder:text-neutral-400" id="email" name="email" placeholder="alex@company.com" required="" type="email"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-800" htmlFor="company">Company</label>
<input className="mt-1 block w-full rounded-xl border-neutral-200 focus:border-neutral-400 focus:ring-0 ring-1 ring-neutral-200 px-3 py-2.5 text-sm placeholder:text-neutral-400" id="company" name="company" placeholder="Acme Properties" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-800" htmlFor="portfolio">Portfolio size</label>
<select className="mt-1 block w-full rounded-xl border-neutral-200 focus:border-neutral-400 focus:ring-0 ring-1 ring-neutral-200 px-3 py-2.5 text-sm bg-white" id="portfolio" name="portfolio">
<option selected="" value="">Select...</option>
<option>Under 100 leases</option>
<option>100–500 leases</option>
<option>500–2,000 leases</option>
<option>2,000+ leases</option>
</select>
</div>
</div>
<div>
<label block="" font-medium="" htmlFor="notes className=" text-neutral-800"="" text-sm="">Notes</label>
<textarea className="mt-1 block w-full rounded-xl border-neutral-200 focus:border-neutral-400 focus:ring-0 ring-1 ring-neutral-200 px-3 py-2.5 text-sm placeholder:text-neutral-400" id="notes" name="notes" placeholder="What would you like to focus on?" rows="3"></textarea>
</div>
<div className="flex items-center justify-between">
<label className="inline-flex items-center gap-2 text-xs text-neutral-600">
<input className="rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900 focus:ring-offset-0" id="consent" required="" type="checkbox"/>
                I agree to the Privacy Policy.
              </label>
<button className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-neutral-900 rounded-full px-5 py-2.5 shadow-sm ring-1 ring-black/10 hover:bg-neutral-800 transition" type="submit">
                Book my demo
                <svg className="ide" fill="none" height="16" stroke="currentColor" strokeWidth="1." viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 2 11 13"></path><path d="M22 2 15 22l-4-9-9-4Z"></path></svg>
</button>
</div>
<p className="text-[11px] text-neutral-500" id="form-help">We’ll never share your information. Unsubscribe anytime.</p>
<p aria-live="polite" className="hidden text-sm text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200 rounded-lg px-3 py-2" id="form-success" role="status">Thanks! We’ll be in touch shortly.</p>
</form>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 bg-white/80 backdrop-blur" id="company">
<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-md bg-neutral-900"></div>
<span className="text-lg font-medium tracking-tight">TrustAI</span>
</div>
<p className="mt-3 text-sm text-neutral-600 max-w-[36ch]">Contracts that think — and act. Recover revenue and reduce risk with AI agents.</p>
<div className="mt-4 flex items-center gap-2">
<a className="inline-flex items-center justify-center text-xs font-medium text-white bg-neutral-900 rounded-full px-3.5 py-2 ring-1 ring-black/10 hover:bg-neutral-800 transition" href="#demo">Book a Demo</a>
<a className="inline-flex items-center justify-center text-xs font-medium text-neutral-800 bg-neutral-100 rounded-full px-3.5 py-2 ring-1 ring-neutral-200 hover:bg-neutral-200/60 transition" href="#">Sign In</a>
</div>
</div>
<div>
<p className="text-sm font-medium">Product</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900 transition" href="#product">Overview</a></li>
<li><a className="hover:text-neutral-900" href="#agents">AI Agents</a></li>
<li><a className="hover:text-neutral-900 transition" href="#how">How it works</a></li>
<li><a className="hover:text-neutral-900 transition" href="#security">Security</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium">Resources</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900 transition" href="#resources">Guides &amp; templates</a></li>
<li><a className="hover:text-neutral-900 transition" href="#demo">Contact sales</a></li>
<li><a className="hover:text-neutral-900 transition" href="#">Status</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium">Company</p>
<ul className="mt-3 space-y2 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900 transition" href="#company">About</a></li>
<li><a="hover:text-neutral-900 href="#demo" transition"="">Careers</a="hover:text-neutral-900></li>
<li><a className="hover:text-neutral-900 transition" href="#demo">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<p className="text-xs text-neutral-500">© <span id="year"></span> TrustAI, Inc. All rights.</p>
<div className="flex items-center gap-4 text-xs text-neutral-500">
<a className="hover:text-neutral-800 transition" href="#">Terms</a>
<a className="hover:text-neutral-800 transition" href="#">Privacy</a>
<a className="hover:text-neutral-800 transition" href="#">Security</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
