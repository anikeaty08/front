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
          var yearSpan = document.getElementById('yearSpan');
          if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
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
      
<div className="relative flex-1 flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">

<div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light" style={{backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(56,189,248,0.18) 0, transparent 55%), radial-gradient(circle at 90% 20%, rgba(34,197,94,0.24) 0, transparent 60%), radial-gradient(circle at 10% 80%, rgba(59,130,246,0.22) 0, transparent 60%)'}}></div>
<div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sky-500/10 via-sky-500/5 to-transparent"></div>

<header className="relative z-20 border-b border-slate-800/60 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-6 py-4 md:py-5 px-4 sm:px-6 lg:px-8">

<a className="flex items-center gap-2 group" href="#top">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-400/40 shadow-sm shadow-sky-500/30">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="22" data-icon="lucide:droplets" data-width="22" height="22" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></g></svg>
</div>
<div className="flex flex-col leading-tight">
<span className="text-base font-semibold tracking-tight text-slate-50 group-hover:text-sky-100 transition-colors">Wyoming Water Wells</span>
<span className="text-xs font-medium text-slate-400 tracking-tight uppercase">Veteran Owned</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-300 hover:text-sky-200 transition-colors" href="#services">Services</a>
<a className="text-slate-300 hover:text-sky-200 transition-colors" href="#process">Our Process</a>
<a className="text-slate-300 hover:text-sky-200 transition-colors" href="#about">About</a>
<a className="text-slate-300 hover:text-sky-200 transition-colors" href="#projects">Projects</a>
<a className="text-slate-300 hover:text-sky-200 transition-colors" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-slate-100 shadow-sm hover:border-sky-400/80 hover:bg-slate-900 transition-colors" href="tel:+13072591700">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="16" data-icon="lucide:phone-call" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>(307) 259-1700</span>
</a>
<a className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 sm:px-5 py-2 text-xs font-semibold tracking-tight text-slate-950 shadow shadow-sky-500/40 hover:bg-sky-400 transition-colors" href="#quote">
<span>Request Quote</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</header>

<div className="relative z-20 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur md:hidden">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-3 py-3 px-4 sm:px-6">
<nav className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium">
<a className="text-slate-300 hover:text-sky-200 transition-colors" href="#services">Services</a>
<a className="text-slate-300 hover:text-sky-200 transition-colors" href="#process">Process</a>
<a className="text-slate-300 hover:text-sky-200 transition-colors" href="#about">About</a>
<a className="text-slate-300 hover:text-sky-200 transition-colors" href="#projects">Projects</a>
<a className="text-slate-300 hover:text-sky-200 transition-colors" href="#faq">FAQ</a>
</nav>
</div>
</div>

<main className="relative z-10 flex-1" id="top">
<section className="sm:px-6 lg:px-8 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24 max-w-6xl mr-auto ml-auto pt-10 pr-4 pb-16 pl-4">
<div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] items-center">

<div className="space-y-7 sm:space-y-8">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 sm:px-4 py-1 text-[0.7rem] sm:text-xs font-semibold text-emerald-200 tracking-tight leading-none">
<span className="iconify" data-height="15" data-icon="lucide:medal-military" data-width="15" style={{strokeWidth: '1.5'}}></span>
<span>Veteran-owned • Serving Wyoming communities</span>
</div>
<div className="space-y-4 sm:space-y-5">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
                Reliable water well drilling across Wyoming.
              </h1>
<p className="text-base sm:text-lg text-slate-300 max-w-xl">
                Wyoming Water Wells provides turnkey residential, agricultural, and commercial well drilling, pump installation, and water testing—built on decades of field experience and military-grade standards.
              </p>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-tight text-slate-950 shadow shadow-sky-500/40 hover:bg-sky-400 transition-colors" href="#quote">
<span>Schedule Site Visit</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="17" data-icon="lucide:calendar-check-2" data-width="17" height="17" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4m8-4v4m5 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M3 10h18m-5 10l2 2l4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-tight text-slate-100 hover:border-sky-400 hover:bg-slate-900 transition-colors" href="tel:+13072591700">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="17" data-icon="lucide:phone" data-width="17" height="17" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Call (307) 259-1700</span>
</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-2 sm:pt-3">
<div className="space-y-1">
<div className="sm:text-xl text-lg font-semibold text-sky-300 tracking-tight">5+</div>
<div className="text-xs sm:text-sm text-slate-400">Years combined drilling experience across Wyoming.</div>
</div>
<div className="space-y-1">
<div className="sm:text-xl text-lg font-semibold text-emerald-300 tracking-tight">100+</div>
<div className="sm:text-sm text-xs text-slate-400">Residential, ranch, and stock wells successfully completed.</div>
</div>
<div className="space-y-1">
<div className="flex items-center gap-1.5">
<span className="text-lg sm:text-xl font-semibold tracking-tight text-amber-300">24/7</span>
<svg aria-hidden="true" className="iconify text-amber-300 iconify--lucide" data-height="16" data-icon="lucide:alert-triangle" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-xs sm:text-sm text-slate-400">Emergency pump service &amp; low-yield troubleshooting.</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-6 sm:-inset-8 rounded-3xl bg-gradient-to-tr from-sky-500/10 via-sky-400/5 to-emerald-500/10 blur-3xl opacity-70"></div>
<div className="relative rounded-3xl border border-slate-700/80 bg-slate-900/80 backdrop-blur shadow-xl shadow-sky-900/40 overflow-hidden">

<div className="h-40 sm:h-48 lg:h-56 w-full bg-gradient-to-br from-slate-800 via-slate-900 to-sky-900 flex items-center justify-center relative">
<div className="absolute inset-0 opacity-50" style={{backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.35) 0, transparent 55%), radial-gradient(circle at 80% 70%, rgba(34,197,94,0.35) 0, transparent 55%)'}}></div>
<div className="relative flex flex-col items-center text-center gap-2 sm:gap-3">
<div className="flex items-center gap-2 rounded-full bg-slate-950/40 border border-slate-600/60 px-2.5 py-1">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="17" data-icon="lucide:mountain" data-width="17" height="17" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg"><path d="m8 3l4 8l5-5l5 15H2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[0.65rem] sm:text-xs font-semibold tracking-tight text-slate-100">Wyoming terrain specialists</span>
</div>
<p className="text-xs sm:text-sm text-slate-200 max-w-xs">
                    Engineered wells for shale, sandstone, and fractured bedrock formations from the plains to the high country.
                  </p>
</div>
</div>

<div className="p-4 sm:p-5 lg:p-6 space-y-4 sm:space-y-5">
<div className="grid grid-cols-2 gap-4 sm:gap-5">
<div className="space-y-2">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="18" data-icon="lucide:drill" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3a1 1 0 0 1 1-1zm3-8H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8m6-10h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3m4-2h4M5 10l-2 8m4 0l2-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-semibold text-slate-100">Well Types</span>
</div>
<ul className="space-y-1 text-xs text-slate-300">
<li>• Domestic &amp; ranch wells</li>
<li>• Stock &amp; irrigation wells</li>
<li>• Monitoring &amp; test holes</li>
</ul>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-300 iconify--lucide" data-height="18" data-icon="lucide:shield-check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-xs font-semibold text-slate-100">Certified &amp; Insured</span>
</div>
<ul className="space-y-1 text-xs text-slate-300">
<li>• State-licensed drillers</li>
<li>• Full liability coverage</li>
<li>• Warranty on new installs</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800/80 pt-3 sm:pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-gradient-to-br from-sky-500 to-emerald-400 flex items-center justify-center text-[0.7rem] font-semibold tracking-tight text-slate-950">
                      WW
                    </div>
<div className="text-[0.7rem] sm:text-xs text-slate-300">
<span className="font-semibold text-slate-100">Free on-site assessments</span><span> within 60 miles of Casper.</span>
</div>
</div>
<a className="inline-flex items-center gap-1.5 rounded-full bg-slate-100/95 text-slate-900 px-3 sm:px-3.5 py-1.5 text-[0.7rem] sm:text-xs font-semibold tracking-tight hover:bg-white transition-colors" href="#quote">
<span>Get started</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="15" data-icon="lucide:arrow-right" data-width="15" height="15" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-800/80 bg-slate-950/60" id="services">
<div className="sm:px-6 lg:px-8 sm:py-14 lg:py-16 max-w-6xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">Water well services built for Wyoming.</h2>
<p className="mt-2 text-base text-slate-300 max-w-xl">
                From new wells to emergency pump repair, we handle every step in-house so your water is dependable year-round.
              </p>
</div>
<div className="flex flex-wrap gap-2 text-[0.7rem] sm:text-xs text-slate-300">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/70 px-2.5 py-1">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="14" data-icon="lucide:map" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Statewide coverage</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/70 px-2.5 py-1">
<svg aria-hidden="true" className="iconify text-emerald-300 iconify--lucide" data-height="14" data-icon="lucide:check-circle-2" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Licensed &amp; insured</span>
</span>
</div>
</div>
<div className="grid gap-5 sm:gap-6 lg:grid-cols-3">

<article className="group rounded-2xl border border-slate-800 bg-slate-950/80 hover:border-sky-500/60 hover:bg-slate-900/90 transition-colors shadow-sm shadow-slate-950/40">
<div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-sky-500/10 border border-sky-500/50 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="19" data-icon="lucide:drill" data-width="19" height="19" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3a1 1 0 0 1 1-1zm3-8H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8m6-10h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3m4-2h4M5 10l-2 8m4 0l2-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">New Well Drilling</h3>
</div>
<span className="text-[0.65rem] sm:text-xs rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-slate-300">
                    Residential • Ag • Commercial
                  </span>
</div>
<p className="text-sm sm:text-base text-slate-300">
                  Custom-designed wells sized for your water needs, geology, and budget, from single-family homes to multi-acre ranches.
                </p>
<ul className="text-xs sm:text-sm text-slate-300 space-y-1.5">
<li>• Site evaluation &amp; permitting support</li>
<li>• Rotary &amp; air rotary drilling</li>
<li>• Steel &amp; PVC casing, grouting, and sealing</li>
</ul>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/80 hover:border-sky-500/60 hover:bg-slate-900/90 transition-colors shadow-sm shadow-slate-950/40">
<div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/50 flex items-center justify-center">
<span className="iconify text-emerald-300" data-height="19" data-icon="lucide:pump" data-width="19" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">Pumps &amp; Systems</h3>
</div>
<span className="text-[0.65rem] sm:text-xs rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-slate-300">
                    Turnkey installs
                  </span>
</div>
<p className="text-sm sm:text-base text-slate-300">
                  We can help with the process of sizing and installing the right system for your needs—from cabin taps to multi-zone irrigation.
                </p>
<ul className="text-xs sm:text-sm text-slate-300 space-y-1.5">
<li>• Submersible pump sizing &amp; installation</li>
<li>• Pressure tanks &amp; controls</li>
<li>• 24/7 pump repair &amp; replacement</li>
</ul>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/80 hover:border-sky-500/60 hover:bg-slate-900/90 transition-colors shadow-sm shadow-slate-950/40">
<div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-amber-500/10 border border-amber-500/50 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-amber-300 iconify--lucide" data-height="19" data-icon="lucide:test-tubes" data-width="19" height="19" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg"><path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2m16 0v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2M3 2h7m4 0h7M9 16H4m16 0h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">Inspection &amp; Water Quality</h3>
</div>
<span className="text-[0.65rem] sm:text-xs rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-slate-300">
                    Testing &amp; rehab
                  </span>
</div>
<p className="text-sm sm:text-base text-slate-300">
                  Protect your investment and your water with yield tests, inspections, and certified water quality sampling.
                </p>
<ul className="text-xs sm:text-sm text-slate-300 space-y-1.5">
<li>• Flow &amp; recovery testing</li>
<li>• Bacteria, hardness, and mineral labs</li>
<li>• Well cleaning &amp; rehabilitation</li>
</ul>
</div>
</article>
</div>
</div>
</section>

<section className="relative border-t border-slate-800 bg-slate-950/40" id="process">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">A clear process from first call to flowing water.</h2>
<p className="mt-2 text-base text-slate-300 max-w-2xl">
                We bring the same discipline and planning used in the service to every well. You’ll know what we’re doing, why, and what it will cost—before we turn a bit.
              </p>
</div>
</div>
<div className="grid gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">

<ol className="relative space-y-5 sm:space-y-6">
<div className="absolute left-3 top-1 bottom-1 border-l border-slate-700/80 hidden sm:block"></div>

<li className="relative pl-8 sm:pl-12">
<div className="absolute left-0 sm:left-1.5 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-[0.7rem] font-semibold tracking-tight text-slate-950 shadow shadow-sky-500/40">
                  1
                </div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50 mb-1.5 sm:mb-2">Site consultation &amp; planning</h3>
<p className="text-xs sm:text-sm text-slate-300">
                    We review your water needs, property layout, access, and known geology, then recommend ideal locations and expected depths.
                  </p>
<div className="mt-2 sm:mt-3 flex flex-wrap gap-2 text-[0.65rem] sm:text-xs text-slate-300">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="13" data-icon="lucide:ruler" data-width="13" height="13" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Zm-6.8-2.8l2-2m-5-1l2-2m-5-1l2-2m7 11l2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Site layout</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="13" data-icon="lucide:file-text" data-width="13" height="13" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
<span>Permitting guidance</span>
</span>
</div>
</div>
</li>

<li className="relative pl-8 sm:pl-12">
<div className="absolute left-0 sm:left-1.5 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-[0.7rem] font-semibold tracking-tight text-slate-950 shadow shadow-sky-500/40">
                  2
                </div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50 mb-1.5 sm:mb-2">Drilling &amp; construction</h3>
<p className="text-xs sm:text-sm text-slate-300">
                    Our rigs and experienced crew drill to design depth, install casing and screen, grout and seal, then develop the well for clean, steady flow.
                  </p>
<div className="mt-2 sm:mt-3 flex flex-wrap gap-2 text-[0.65rem] sm:text-xs text-slate-300">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="13" data-icon="lucide:hard-hat" data-width="13" height="13" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m0-4a6 6 0 0 1 6 6v3M4 15v-3a6 6 0 0 1 6-6"></path><rect height="4" rx="1" width="20" x="2" y="15"></rect></g></svg>
<span>Safety-first crew</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="13" data-icon="lucide:activity" data-width="13" height="13" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Flow development</span>
</span>
</div>
</div>
</li>

<li className="relative pl-8 sm:pl-12">
<div className="absolute left-0 sm:left-1.5 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-[0.7rem] font-semibold tracking-tight text-slate-950 shadow shadow-sky-500/40">
                  3
                </div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50 mb-1.5 sm:mb-2">Pump system &amp; testing</h3>
<p className="text-xs sm:text-sm text-slate-300">
                    We size and install the right pump and pressure system, test yield and recovery, then pull water samples if needed.
                  </p>
<div className="mt-2 sm:mt-3 flex flex-wrap gap-2 text-[0.65rem] sm:text-xs text-slate-300">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5">
<svg aria-hidden="true" className="iconify text-emerald-300 iconify--lucide" data-height="13" data-icon="lucide:gauge" data-width="13" height="13" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Yield verification</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5">
<svg aria-hidden="true" className="iconify text-emerald-300 iconify--lucide" data-height="13" data-icon="lucide:test-tubes" data-width="13" height="13" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2m16 0v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2M3 2h7m4 0h7M9 16H4m16 0h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Water quality samples</span>
</span>
</div>
</div>
</li>

<li className="relative pl-8 sm:pl-12">
<div className="absolute left-0 sm:left-1.5 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-[0.7rem] font-semibold tracking-tight text-slate-950 shadow shadow-sky-500/40">
                  4
                </div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50 mb-1.5 sm:mb-2">Ongoing service &amp; protection</h3>
<p className="text-xs sm:text-sm text-slate-300">
                    You’ll receive records of construction and testing, plus priority service for annual checks, repairs, and emergency calls.
                  </p>
<div className="mt-2 sm:mt-3 flex flex-wrap gap-2 text-[0.65rem] sm:text-xs text-slate-300">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5">
<svg aria-hidden="true" className="iconify text-amber-300 iconify--lucide" data-height="13" data-icon="lucide:clock" data-width="13" height="13" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span>24/7 support</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5">
<svg aria-hidden="true" className="iconify text-amber-300 iconify--lucide" data-height="13" data-icon="lucide:file-badge-2" data-width="13" height="13" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m13.69 12.479l1.29 4.88a.5.5 0 0 1-.697.591l-1.844-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88"></path><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span>Warranty options</span>
</span>
</div>
</div>
</li>
</ol>

<div className="rounded-3xl border border-sky-500/60 bg-slate-950/90 shadow-lg shadow-sky-900/40 p-5 sm:p-6 lg:p-7 space-y-4">
<div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-400/60 px-3 py-1 text-[0.7rem] sm:text-xs font-semibold tracking-tight text-sky-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="15" data-icon="lucide:medal" data-width="15" height="15" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7.21 15L2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15M11 12L5.12 2.2M13 12l5.88-9.8M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></g></svg>
<span>Veteran-owned values in every project</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                Mission-ready reliability for your water supply.
              </h3>
<p className="text-sm sm:text-base text-slate-300">
                We plan, execute, and document each job with the same attention to detail learned in uniform—because your family, ranch, or business depends on it.
              </p>
<ul className="space-y-2 text-sm text-slate-200">
<li className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify text-emerald-300 mt-0.5 iconify--lucide" data-height="15" data-icon="lucide:check-circle-2" data-width="15" height="15" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Upfront, written estimates with no surprise add-ons.</span>
</li>
<li className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify text-emerald-300 mt-0.5 iconify--lucide" data-height="15" data-icon="lucide:check-circle-2" data-width="15" height="15" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Respectful, clean crews who treat your land like their own.</span>
</li>
<li className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify text-emerald-300 mt-0.5 iconify--lucide" data-height="15" data-icon="lucide:check-circle-2" data-width="15" height="15" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Service mindset that puts your water security first.</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-xs sm:text-sm font-semibold tracking-tight text-slate-950 hover:bg-sky-400 transition-colors" href="#quote">
<span>Request a field visit</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:compass" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</a>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-800 bg-slate-950/70" id="about">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
<div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
<div className="space-y-4 sm:space-y-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">Wyoming roots. Veteran discipline.</h2>
<p className="text-base sm:text-lg text-slate-300">
                Wyoming Water Wells is a veteran-owned company based in central Wyoming, serving ranchers, homeowners, and businesses across the state.
              </p>
<p className="text-sm sm:text-base text-slate-300">
                After years of operating heavy equipment and coordinating logistics in challenging environments, our founder returned home with a simple mission: bring the same reliability and integrity to the wells that Wyoming families depend on.
              </p>
<div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
<div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 space-y-1.5">
<div className="flex items-center gap-2 mb-1">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="17" data-icon="lucide:flag" data-width="17" height="17" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Veteran-led team</h3>
</div>
<p className="text-xs sm:text-sm text-slate-300">
                    Service values shape every job: punctuality, accountability, and a focus on doing the right thing even when no one is watching.
                  </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 space-y-1.5">
<div className="flex items-center gap-2 mb-1">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="17" data-icon="lucide:map-pin" data-width="17" height="17" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Built for Wyoming</h3>
</div>
<p className="text-xs sm:text-sm text-slate-300">
                    We understand local aquifers, seasonal access, and the realities of high plains weather—and we design wells to match.
                  </p>
</div>
</div>
</div>

<div className="rounded-3xl border border-slate-800 bg-slate-950/90 shadow-lg shadow-slate-950/40 p-5 sm:p-6 lg:p-7 space-y-4">
<div className="flex items-center justify-between gap-3 mb-1">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">Service area &amp; contact</h3>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-[0.7rem] sm:text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="14" data-icon="lucide:map" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Statewide</span>
</span>
</div>
<p className="text-sm sm:text-base text-slate-300">
                Based near Casper with mobile rigs serving Cheyenne, Gillette, Sheridan, Laramie, Rock Springs, and surrounding rural communities.
              </p>
<div className="grid gap-3 text-xs sm:text-sm text-slate-200">
<div className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify text-sky-300 mt-0.5 iconify--lucide" data-height="16" data-icon="lucide:phone" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div>
<div className="font-semibold tracking-tight text-slate-50">Phone</div>
<a className="text-slate-200 hover:text-sky-200 transition-colors" href="tel:+13072591700">(307) 259-1700</a>
</div>
</div>
<div className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify text-sky-300 mt-0.5 iconify--lucide" data-height="16" data-icon="lucide:mail" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<div>
<div className="font-semibold tracking-tight text-slate-50">Email</div>
<a className="text-slate-200 hover:text-sky-200 transition-colors" href="mailto:wellswyo@gmail.com">wellswyo@gmail.com</a>
</div>
</div>
<div className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify text-sky-300 mt-0.5 iconify--lucide" data-height="16" data-icon="lucide:clock-3" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<div>
<div className="font-semibold tracking-tight text-slate-50">Hours</div>
<p className="text-slate-200">Mon–Fri: 7:00–17:00 • 24/7 emergency pump service</p>
</div>
</div>
</div>
<div className="border-t border-slate-800/80 pt-4 space-y-3">
<h4 className="text-xs sm:text-sm font-semibold tracking-tight text-slate-50">Need a second opinion?</h4>
<p className="text-xs sm:text-sm text-slate-300">
                  Send us your existing well log or a competitor quote. We’ll walk you through options in plain language—no obligation.
                </p>
<div className="flex flex-wrap gap-2">
<a className="inline-flex items-center gap-1.5 rounded-full bg-sky-500 px-3.5 py-1.5 text-[0.7rem] sm:text-xs font-semibold tracking-tight text-slate-950 hover:bg-sky-400 transition-colors" href="#quote">
<span>Upload documents</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="15" data-icon="lucide:upload-cloud" data-width="15" height="15" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 13v8m-8-6.101A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17l4-4l4 4"></path></g></svg>
</a>
<a className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900 px-3.5 py-1.5 text-[0.7rem] sm:text-xs font-semibold tracking-tight text-slate-100 hover:border-sky-400 hover:bg-slate-900/80 transition-colors" href="tel:+13072591700">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="14" data-icon="lucide:phone-call" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Talk to a driller</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-800 bg-slate-950/60" id="projects">
<div className="sm:px-6 lg:px-8 sm:py-14 lg:py-16 max-w-6xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">Get on the list for drilling season.</h2>
<p className="text-base text-slate-300 max-w-xl mt-2">A sample of the work we can do for you.</p>
</div>
<div className="text-xs sm:text-sm text-slate-400">
              Details and locations modified for client privacy.
            </div>
</div>
<div className="grid gap-5 sm:gap-6 lg:grid-cols-3">

<article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-3">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-slate-900 flex items-center justify-center">
<span className="iconify text-emerald-300" data-height="18" data-icon="lucide:cow" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="sm:text-base text-sm font-semibold text-slate-50 tracking-tight">Ranch &amp; stock water, central WY</h3>
</div>
<span className="text-[0.65rem] sm:text-xs rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-slate-300">
                  320-acre ranch
                </span>
</div>
<p className="text-xs sm:text-sm text-slate-300">
                Two new stock wells and a domestic well tied into existing pipeline, designed for year-round reliability and frost protection.
              </p>
<ul className="text-[0.7rem] sm:text-xs text-slate-300 space-y-1.5">
<li>• 300 ft domestic well, 7 GPM sustained yield</li>
<li>• Frost-free hydrants and livestock tanks</li>
<li>• Solar-ready pump controls</li>
</ul>
</article>

<article className="sm:p-5 bg-slate-950/80 border-slate-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4 space-y-3">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-slate-900 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="18" data-icon="lucide:home" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">Mountain cabin, northern WY</h3>
</div>
<span className="text-[0.65rem] sm:text-xs rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-slate-300">
                  Off-grid
                </span>
</div>
<p className="text-xs sm:text-sm text-slate-300">
                Remote access drilling with compact rig, off-grid power system, and storage to carry through winter months.
              </p>
<ul className="text-[0.7rem] sm:text-xs text-slate-300 space-y-1.5">
<li>• 220 ft well through fractured sandstone</li>
<li className="">• Solar pump with cistern and UV treatment</li>
<li className="">• Winterization and freeze protection</li>
</ul>
</article>

<article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-3">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-slate-900 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-amber-300 iconify--lucide" data-height="18" data-icon="lucide:factory" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01M16 16h.01M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm5-3h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">Light industrial, southern WY</h3>
</div>
<span className="text-[0.65rem] sm:text-xs rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-slate-300">
                  Commercial
                </span>
</div>
<p className="text-xs sm:text-sm text-slate-300">
                High-demand well and pump system for a small manufacturing facility with fire-suppression reserve.
              </p>
<ul className="text-[0.7rem] sm:text-xs text-slate-300 space-y-1.5">
<li>• 12 GPM production with storage integration</li>
<li>• Redundant pressure system for uptime</li>
<li>• Monitoring and telemetry-ready controls</li>
</ul>
</article>
</div>
</div>
</section>

<section className="relative border-t border-slate-800 bg-slate-950" id="quote">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
<div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">

<div className="">
<h2 className="sm:text-3xl text-2xl font-semibold text-slate-50 tracking-tight mb-2">Request a water well quote.</h2>
<p className="text-base text-slate-300 mb-6 sm:mb-7 max-w-xl">
                Tell us a little about your property and water needs. We’ll follow up within one business day to schedule a site visit or phone consultation.
              </p>

<form action="mailto:wellswyo@gmail.com" className="space-y-4 sm:space-y-5" enctype="text/plain" method="post">
<div className="grid sm:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">Name</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/60" name="name" placeholder="Full name" type="text"/>
</div>
<div className="">
<label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">Phone</label>
<input className="placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/60 text-sm text-slate-100 bg-slate-950/80 w-full border-slate-800 border rounded-xl pt-2 pr-3 pb-2 pl-3" name="phone" placeholder="your number " type="tel"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">Email</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/60" name="email" placeholder="you@example.com" type="email"/>
</div>
<div className="">
<label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">Property location (city / area)</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/60" name="location" placeholder="City" type="text"/>
</div>
</div>
<div className="">
<label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">Property Address</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/60" name="address" placeholder="Street address, City, Zip" type="text"/>
</div>
<div className="">
<label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">GPS Coordinates <span className="text-slate-500 font-normal">(Optional)</span></label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/60" name="gps" placeholder="Lat, Long (e.g. 42.85, -106.32)" type="text"/>
</div>

<div className="">
<label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">Upload Documents <span className="text-slate-500 font-normal">(Well logs, site maps, competitor quotes)</span></label>
<input className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-sky-500/10 file:text-sky-300 hover:file:bg-sky-500/20 cursor-pointer" name="attachment" type="file"/>
</div>
<div className="">
<label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">Project type</label>
<div className="grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
<button className="inline-flex items-center justify-between gap-2 rounded-xl border border-sky-500/70 bg-sky-500/15 px-3 py-2 text-sky-100 hover:bg-sky-500/20" type="button">
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="15" data-icon="lucide:home" data-width="15" height="15" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
<span>New residential well</span>
</span>
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="14" data-icon="lucide:check" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-slate-200 hover:border-sky-500/60 hover:bg-slate-900/90" type="button">
<span className="iconify text-slate-300" data-height="15" data-icon="lucide:cow" data-width="15" style={{strokeWidth: '1.5'}}></span>
<span>Ranch / stock well</span>
</button>
<button className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-slate-200 hover:border-sky-500/60 hover:bg-slate-900/90" type="button">
<svg aria-hidden="true" className="iconify text-slate-300 iconify--lucide" data-height="15" data-icon="lucide:factory" data-width="15" height="15" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01M16 16h.01M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm5-3h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Commercial / irrigation</span>
</button>
<button className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-slate-200 hover:border-sky-500/60 hover:bg-slate-900/90" type="button">
<svg aria-hidden="true" className="iconify text-slate-300 iconify--lucide" data-height="15" data-icon="lucide:wrench" data-width="15" height="15" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Existing well / pump issue</span>
</button>
</div>
</div>
<div className="">
<label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">Tell us about your project</label>
<textarea className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/60" name="details" placeholder="Share details like: new build or existing property, expected water use, known well logs, and your timeline." rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-tight text-slate-950 shadow shadow-sky-500/40 hover:bg-sky-400 transition-colors" type="submit">
<span className="">Send request</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:send" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<p className="text-[0.7rem] sm:text-xs text-slate-400 max-w-xs">
                    We respect your time and privacy. Your information is used only to respond to your request.
                  </p>
</div>
</form>
</div>

<div className="rounded-3xl border border-slate-800 bg-slate-950/90 shadow-lg shadow-slate-950/40 p-5 sm:p-6 lg:p-7 space-y-4">
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/60 px-3 py-1 text-[0.7rem] sm:text-xs font-semibold tracking-tight text-emerald-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="15" data-icon="lucide:shield-check" data-width="15" height="15" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
</path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
<span>Licensed • Insured • Veteran-owned</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                Prefer to talk to a driller first?
              </h3>
<p className="text-sm sm:text-base text-slate-300">
                Give us a call and we’ll walk your property via satellite imagery, then outline realistic options and budgets
                before we roll a rig.
              </p>
<div className="space-y-3 text-xs sm:text-sm text-slate-200">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="17" data-icon="lucide:phone-call" data-width="17" height="17" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
<div>
<div className="font-semibold tracking-tight text-slate-50">Direct line</div>
<a className="text-slate-200 hover:text-sky-200 transition-colors" href="tel:+13072591700">(307)
                        259-1700</a>
</div>
</div>
<span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-[0.7rem] text-slate-300">
                    Mon–Fri, 7:00–17:00
                  </span>
</div>
<div className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify text-amber-300 mt-0.5 iconify--lucide" data-height="16" data-icon="lucide:alert-triangle" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div>
<div className="font-semibold tracking-tight text-slate-50">No water or low pressure?</div>
<p className="text-slate-200">Ask for same-day pump service availability in your area.</p>
</div>
</div>
</div>
<div className="border-t border-slate-800/80 pt-4">
<h4 className="text-xs sm:text-sm font-semibold tracking-tight text-slate-50 mb-1.5">What to have ready</h4>
<ul className="text-[0.7rem] sm:text-xs text-slate-300 space-y-1.5">
<li>• Property address or nearest cross streets</li>
<li className="">• Any existing well logs, if available</li>
<li>• Planned home size, livestock, or acreage</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-800 bg-slate-950/70" id="faq">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
<div className="max-w-3xl mb-7 sm:mb-9">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">Frequently asked questions.</h2>
<p className="mt-2 text-base text-slate-300">
              Every property is different, but these answers cover the basics. Reach out and we’ll talk through your specific site.
            </p>
</div>
<div className="grid gap-4 sm:gap-5 lg:grid-cols-2">

<div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5">
<div className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-sky-300 mt-0.5 iconify--lucide" data-height="18" data-icon="lucide:help-circle" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path></g></svg>
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50 mb-1">How deep will my well need to be?</h3>
<p className="text-xs sm:text-sm text-slate-300">
                    Depth depends on local geology, your elevation, and the aquifers in your area. In much of Wyoming, domestic wells range from 80–400 feet, but some areas require deeper. We review nearby well logs and your water needs to estimate a realistic depth range before we mobilize.
                  </p>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5">
<div className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-sky-300 mt-0.5 iconify--lucide" data-height="18" data-icon="lucide:help-circle" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path></g></svg>
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50 mb-1">How much does a new well cost?</h3>
<p className="text-xs sm:text-sm text-slate-300">
                    Costs depend on depth, casing size and material, pump system, and access. After a brief conversation and a look at your site, we provide a written estimate with line-item pricing so you can see where every dollar goes.
                  </p>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5">
<div className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-sky-300 mt-0.5 iconify--lucide" data-height="18" data-icon="lucide:help-circle" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path></g></svg>
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50 mb-1">Can you work in winter?</h3>
<p className="text-xs sm:text-sm text-slate-300">
                    In many cases, yes. As long as we can safely access the site and temperatures allow for proper grouting and equipment operation, we can drill year-round. We’ll advise you on the best timing for your location.
                  </p>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5">
<div className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-sky-300 mt-0.5 iconify--lucide" data-height="18" data-icon="lucide:help-circle" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path></g></svg>
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50 mb-1">Do you handle permits and inspections?</h3>
<p className="text-xs sm:text-sm text-slate-300">
                    We’re familiar with state and local requirements and can help you navigate permitting, well registration, and inspection requirements. In many cases, we can prepare and submit the necessary paperwork on your behalf.
                  </p>
</div>
</div>
</div>
</div>
<div className="mt-6 sm:mt-8 rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-300 iconify--lucide" data-height="18" data-icon="lucide:message-circle" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-xs sm:text-sm text-slate-200">
                Don’t see your question? <span className="font-semibold text-slate-50">Call (307) 259-1700</span> or send us a note for straight answers.
              </p>
</div>
<a className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 text-slate-950 px-3.5 py-1.5 text-[0.7rem] sm:text-xs font-semibold tracking-tight hover:bg-white transition-colors" href="#quote">
<span>Ask a question</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>
</main>

<footer className="relative border-t border-slate-800 bg-slate-950/95">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-400/40">
<svg aria-hidden="true" className="iconify text-sky-300 iconify--lucide" data-height="18" data-icon="lucide:droplets" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></g></svg>
</div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight text-slate-50">Wyoming Water Wells</span>
<span className="text-[0.7rem] text-slate-400">Veteran-owned water well drilling &amp; pump service</span>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 text-[0.7rem] sm:text-xs text-slate-400">
<p>© <span id="yearSpan">2026</span> Wyoming Water Wells. All rights reserved.</p>
<div className="flex flex-wrap gap-3">
<a className="hover:text-sky-200 transition-colors" href="#top">Back to top</a>
<span className="hidden sm:inline text-slate-700">•</span>
<a className="hover:text-sky-200 transition-colors" href="mailto:wellswyo@gmail.com">wellswyo@gmail.com</a>
</div>
</div>
</div>
</div>

</footer>
</div>

    </>
  );
}
