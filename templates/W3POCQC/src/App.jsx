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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_0%,rgba(88,101,242,0.12)_0%,rgba(88,101,242,0)_60%),radial-gradient(35%_45%_at_80%_10%,rgba(56,189,248,0.10)_0%,rgba(56,189,248,0)_60%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0))]"></div>
<div className="absolute inset-x-0 top-0 h-px bg-white/10"></div>
</div>

<header className="border-b border-white/10 backdrop-blur">
<div className="flex max-w-5xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">

<a className="group inline-flex items-center gap-3" href="#">
<div className="h-8 w-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center shadow-sm transition-colors group-hover:bg-white/10">
<span className="text-sm font-medium tracking-tight">pb</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-sm font-semibold tracking-tight">pakistani bank statement converter</span>
<span className="text-[11px] text-white/50">built with care</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#features">features</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#privacy">privacy</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#faq">faq</a>
<a className="inline-flex items-center gap-2 text-sm font-medium px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:-translate-y-0.5" href="#upload">
<svg className="lucide lucide-upload w-4 h-4" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
<span className="">upload now</span>
</a>
</nav>
</div>
</header>

<main className="max-w-5xl mr-auto ml-auto pr-6 pl-6">
<section className="md:py-16 pt-10 pb-10">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70">
<span className="relative inline-flex h-1.5 w-1.5">
<span className="absolute inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
</span>
<span className="">private, on-your-device conversion</span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            turn bank statement PDFs into clean CSVs
          </h1>
<p className="sm:text-lg text-base text-white/70">hi, i’m building a tiny tool for folks dealing with bank statements in pakistan. drop your statement and i’ll give you a tidy, consistent csv you can analyze in excel or import into other tools.</p>

<div className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
<svg data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21a8 8 0 1 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="text-sm leading-6">
<p className="text-white/80">
                i’m building this solo. if it helps—or annoys you—tell me what to fix next. i read every note and ship improvements quickly.
              </p>
</div>
</div>

<div className="group relative" id="upload">

<div aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="absolute -inset-2 rounded-3xl blur-2xl bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(60%_60%_at_50%_100%,rgba(16,185,129,0.18),transparent_60%)]"></div>
</div>
<div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 sm:p-6 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between gap-3 mb-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-file-text w-4.5 h-4.5 text-white/80" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<p className="text-sm font-medium">upload your statement</p>
</div>
<div className="text-[11px] text-white/50">pdf (recommended), images</div>
</div>
<div className="relative flex flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-black/20 hover:bg-black/30 transition-colors cursor-pointer px-4 py-10 text-center" id="dropzone">
<div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white/[0.07] border border-white/10">
<svg className="lucide lucide-upload-cloud w-5 h-5 text-white/80" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
</div>
<div className="mt-3 text-sm">
<span className="font-medium">drop files here</span>
<span className="text-white/50"> or </span>
<span className="text-sky-300 hover:text-sky-200 underline underline-offset-4">choose a file</span>
</div>
<p className="mt-1.5 text-xs text-white/50">we never upload your data to a server</p>
<input accept=".pdf,.png,.jpg,.jpeg,.heic" className="sr-only" id="file-input" name="file-input" type="file"/>
</div>

<div className="hidden rounded-lg border border-white/10 bg-black/20 p-3 divide-y divide-white/10 mt-4" id="file-list"></div>

<div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 bg-white text-black font-medium shadow-sm hover:shadow transition-all disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline outline-2 outline-offset-2 outline-white/40" disabled="" id="convert-btn">
<svg className="lucide lucide-wand-2 w-4.5 h-4.5" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
<span>convert to csv</span>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 transition-all focus-visible:outline outline-2 outline-offset-2 outline-white/40" id="clear-btn" type="button">
<svg className="lucide lucide-trash-2 w-4.5 h-4.5" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
<span>clear</span>
</button>
<div className="ml-0 sm:ml-auto flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="">no sign‑in, no tracking, no uploads</span>
</div>
</div>

<div className="hidden" id="progress-wrap">
<div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-full w-0 bg-white" id="progress-bar" style={{transition: 'width 600ms ease'}}></div>
</div>
<p className="mt-2 text-xs text-white/60" id="progress-text">preparing your csv…</p>
</div>

<div className="mt-4 flex flex-wrap items-center gap-2">
<span className="text-[11px] text-white/50">supports:</span>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-1 rounded-md bg-black/30 border border-white/10 text-[11px] text-white/70">hbl</span>
<span className="px-2 py-1 rounded-md bg-black/30 border border-white/10 text-[11px] text-white/70">mcb</span>
<span className="px-2 py-1 rounded-md bg-black/30 border border-white/10 text-[11px] text-white/70">ubl</span>
<span className="px-2 py-1 rounded-md bg-black/30 border border-white/10 text-[11px] text-white/70">bank alfalah</span>
<span className="px-2 py-1 rounded-md bg-black/30 border border-white/10 text-[11px] text-white/70">meezan</span>
<span className="px-2 py-1 rounded-md bg-black/30 border border-white/10 text-[11px] text-white/70">allied</span>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden">
<div className="aspect-video w-full relative">
<div className="absolute inset-0 bg-[radial-gradient(60%_120%_at_20%_0%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(60%_120%_at_80%_100%,rgba(99,102,241,0.18),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0))]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<button className="group relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 bg-white text-black font-medium shadow-sm hover:shadow transition-all hover:-translate-y-0.5">
<svg className="lucide lucide-play w-4.5 h-4.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
<span>watch demo (placeholder)</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="pb-16 md:pb-24" id="features">
<div className="grid md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-shield w-4.5 h-4.5 text-white/90" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">privacy first</h3>
</div>
<p className="mt-2.5 text-sm text-white/70">everything happens in your browser. no accounts, no uploads, no analytics scripts watching you. it’s your data, not mine.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-sparkles w-4.5 h-4.5 text-white/90" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">bank‑aware formatting</h3>
</div>
<p className="mt-2.5 text-sm text-white/70">templates tuned for pakistani banks: headers, columns, decimals, and totals that look familiar and pass review without back‑and‑forth.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-table w-4.5 h-4.5 text-white/90" data-lucide="table" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">clean, analysis‑ready csvs</h3>
</div>
<p className="mt-2.5 text-sm text-white/70">well‑structured rows with consistent headers, date normalization, and thousand separators—ready for spreadsheets or imports.</p>
</div>
</div>
<div className="mt-6 grid md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-list-filter w-4.5 h-4.5 text-white/90" data-lucide="list-filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 5h20"></path><path d="M6 12h12"></path><path d="M9 19h6"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">smart columns</h3>
</div>
<p className="mt-2.5 text-sm text-white/70">detects date, description, debit, credit, balance—even if your export is a bit messy. also fixes extra spaces and stray commas.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-settings-2 w-4.5 h-4.5 text-white/90" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">gentle controls</h3>
</div>
<p className="mt-2.5 text-sm text-white/70">choose date format, decimal style, and whether to hide account number. defaults are sensible, so you rarely need to touch anything.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-zap w-4.5 h-4.5 text-white/90" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">fast and light</h3>
</div>
<p className="mt-2.5 text-sm text-white/70">optimized to run quickly on modest laptops. no heavy downloads, no waiting forever for a spinner to stop.</p>
</div>
</div>
</section>

<section className="py-10 border-t border-white/10">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
<div className="flex items-center justify-between gap-3">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">works with major banks in pakistan</h2>
<div className="hidden sm:flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-shield w-4 h-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span>tested on common statement layouts</span>
</div>
</div>

<div className="mt-5 relative">
<div className="overflow-hidden" id="bank-marquee">
<div className="flex gap-3 whitespace-nowrap will-change-transform" id="bank-marquee-track" style={{transform: 'translateX(0px)'}}>

<div className="flex gap-3 shrink-0">
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-emerald-300/30 bg-emerald-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-emerald-300">HBL</span>
</div>
<span className="text-sm text-white/80 truncate">habib bank</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-sky-300/30 bg-sky-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-sky-300">MCB</span>
</div>
<span className="text-sm text-white/80 truncate">mcb bank</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-cyan-300/30 bg-cyan-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-cyan-300">UBL</span>
</div>
<span className="text-sm text-white/80 truncate">united bank</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-purple-300/30 bg-purple-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-purple-300">MEEZAN</span>
</div>
<span className="text-sm text-white/80 truncate">meezan bank</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-rose-300/30 bg-rose-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-rose-300">ALFALAH</span>
</div>
<span className="text-sm text-white/80 truncate">bank alfalah</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-amber-300/30 bg-amber-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-amber-300">ABL</span>
</div>
<span className="text-sm text-white/80 truncate">allied bank</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-indigo-300/30 bg-indigo-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-indigo-300">FAYSAL</span>
</div>
<span className="text-sm text-white/80 truncate">faysal bank</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-lime-300/30 bg-lime-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-lime-300">HMB</span>
</div>
<span className="text-sm text-white/80 truncate">habibmetro</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-teal-300/30 bg-teal-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-teal-300">SCB</span>
</div>
<span className="text-sm text-white/80 truncate">standard chartered</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-fuchsia-300/30 bg-fuchsia-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-fuchsia-300">BI</span>
</div>
<span className="text-sm text-white/80 truncate">bank islami</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-orange-300/30 bg-orange-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-orange-300">JS</span>
</div>
<span className="text-sm text-white/80 truncate">js bank</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-violet-300/30 bg-violet-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-violet-300">SONERI</span>
</div>
<span className="text-sm text-white/80 truncate">soneri bank</span>
</div>
</div>

<div aria-hidden="true" className="flex gap-3 shrink-0">
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-emerald-300/30 bg-emerald-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-emerald-300">HBL</span>
</div>
<span className="text-sm text-white/80 truncate">habib bank</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-sky-300/30 bg-sky-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-sky-300">MCB</span>
</div>
<span className="text-sm text-white/80 truncate">mcb bank</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-cyan-300/30 bg-cyan-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-cyan-300">UBL</span>
</div>
<span className="text-sm text-white/80 truncate">united bank</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-purple-300/30 bg-purple-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-purple-300">MEEZAN</span>
</div>
<span className="text-sm text-white/80 truncate">meezan bank</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-rose-300/30 bg-rose-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-rose-300">ALFALAH</span>
</div>
<span className="text-sm text-white/80 truncate">bank alfalah</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-amber-300/30 bg-amber-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-amber-300">ABL</span>
</div>
<span className="text-sm text-white/80 truncate">allied bank</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-indigo-300/30 bg-indigo-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-indigo-300">FAYSAL</span>
</div>
<span className="text-sm text-white/80 truncate">faysal bank</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-lime-300/30 bg-lime-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-lime-300">HMB</span>
</div>
<span className="text-sm text-white/80 truncate">habibmetro</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-teal-300/30 bg-teal-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-teal-300">SCB</span>
</div>
<span className="text-sm text-white/80 truncate">standard chartered</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-fuchsia-300/30 bg-fuchsia-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-fuchsia-300">BI</span>
</div>
<span className="text-sm text-white/80 truncate">bank islami</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-orange-300/30 bg-orange-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-orange-300">JS</span>
</div>
<span className="text-sm text-white/80 truncate">js bank</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
<div className="h-8 w-8 rounded-lg border border-violet-300/30 bg-violet-400/15 flex items-center justify-center">
<span className="text-[11px] font-medium tracking-tight text-violet-300">SONERI</span>
</div>
<span className="text-sm text-white/80 truncate">soneri bank</span>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16" style={{background: 'linear-gradient(to right, rgba(255,255,255,0.06), rgba(255,255,255,0))'}}></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16" style={{background: 'linear-gradient(to left, rgba(255,255,255,0.06), rgba(255,255,255,0))'}}></div>
</div>
</div>
</section>

<section className="border-white/10 border-t pt-12 pb-12">
<div className="grid md:grid-cols-2 gap-8 items-start">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight">your statements stay on your device</h2>
<p className="mt-3 text-white/70">i don’t want your data, and i don’t need it. the converter runs right in your browser. if something breaks, you can tell me—without sharing any files.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center gap-4">
<div className="h-10 w-10 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-lock w-5 h-5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<ul className="text-sm text-white/70 space-y-1.5">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> no servers process your files</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> no accounts or api keys</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> you can clear everything with one click</li>
</ul>
</div>
</div>
</section>

<section className="border-white/10 border-t pt-8 pb-8">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
<svg className="" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.7 6.3a1 1 0 0 0-1.4 0L5 15.59V19h3.41l9.3-9.3a1 1 0 0 0 0-1.4l-2.01-2.01z"></path><path d="M18 5l1-1"></path></svg>
</div>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">what i’m shipping next</h2>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs text-white/80 bg-black/30 border-white/10 border rounded-md pt-1.5 pr-2.5 pb-1.5 pl-2.5">apis for businesses</span>
<span className="text-xs text-white/80 bg-black/30 border-white/10 border rounded-md pt-1.5 pr-2.5 pb-1.5 pl-2.5">more banks + edge cases</span>
<span className="text-xs text-white/80 bg-black/30 border-white/10 border rounded-md pt-1.5 pr-2.5 pb-1.5 pl-2.5">integrated payments</span>
<span className="px-2.5 py-1.5 rounded-md bg-black/30 border border-white/10 text-xs text-white/80">category hints (optional)</span>
</div>
<p className="mt-3 text-sm text-white/70">tell me what would save you the most time and i’ll move it up the list.</p>
</div>
</section>

<section className="pt-14 pb-14">
<div className="max-w-3xl">
<h2 className="text-2xl font-semibold tracking-tight">a few quick answers</h2>
<div className="mt-6 divide-y divide-white/10 border border-white/10 rounded-xl overflow-hidden">
<details className="group open:bg-white/[0.04]">
<summary className="list-none cursor-pointer px-4 py-4 sm:px-5 sm:py-5 flex items-start justify-between">
<div className="pr-6">
<p className="text-sm font-medium">what files can i upload?</p>
<p className="text-sm text-white/60 mt-1">pdf only, as of right now the app cannot handle scanned statements.</p>
</div>
<svg className="lucide lucide-chevron-down transition-transform group-open:rotate-180 mt-1 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
</details>
<details className="group">
<summary className="list-none cursor-pointer px-4 py-4 sm:px-5 sm:py-5 flex items-start justify-between">
<div className="pr-6">
<p className="text-sm font-medium">how accurate is the conversion?</p>
<p className="text-sm text-white/60 mt-1">i would say the conversion is 100% accurate for major banks of pakistan, but for some banks you might some formatting issues or missed transactions. please verify if 100% accuracy is important to you.</p>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 mt-1 text-white/60 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
</details>
<details className="group">
<summary className="list-none cursor-pointer px-4 py-4 sm:px-5 sm:py-5 flex items-start justify-between">
<div className="pr-6">
<p className="text-sm font-medium">is there a cost?</p>
<p className="mt-1 text-sm text-white/60">the core converter is free while i keep polishing it. if i add pro features later, i’ll be upfront and keep the basics free.</p>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 mt-1 text-white/60 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
</details>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10">
<div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
</div></footer>
    </>
  );
}
