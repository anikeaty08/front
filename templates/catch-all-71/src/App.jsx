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



      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Drag & drop visual feedback + file chip
      const dropzone = document.getElementById('dropzone');
      const input = document.getElementById('file-input');
      const chip = document.getElementById('file-chip');

      ['dragenter','dragover'].forEach(evt => {
        dropzone.addEventListener(evt, (e) => {
          e.preventDefault();
          dropzone.classList.add('border-indigo-400','bg-indigo-50/30');
        });
      });
      ;['dragleave','drop'].forEach(evt => {
        dropzone.addEventListener(evt, (e) => {
          e.preventDefault();
          dropzone.classList.remove('border-indigo-400','bg-indigo-50/30');
        });
      });
      dropzone.addEventListener('drop', (e) => {
        const f = e.dataTransfer?.files?.[0];
        if (f) showFile(f);
      });
      input.addEventListener('change', (e) => {
        const f = e.target.files?.[0];
        if (f) showFile(f);
      });
      function showFile(f) {
        chip.classList.remove('hidden');
        chip.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16l4-4h10a2 2 0 0 0 2-2V8z"/></svg>
          <span>${f.name}</span>
          <span class="rounded border border-emerald-200 bg-emerald-50 px-1 py-0.5 text-[10px] text-emerald-700">Queued</span>
        `;
      }

      // Chat toggle
      const chatBtn = document.getElementById('chat-button');
      const chatPanel = document.getElementById('chat-panel');
      const chatClose = document.getElementById('chat-close');
      chatBtn.addEventListener('click', () => chatPanel.classList.toggle('hidden'));
      chatClose.addEventListener('click', () => chatPanel.classList.add('hidden'));
    
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
<div className="absolute inset-x-0 top-[-20%] mx-auto h-[480px] max-w-6xl blur-3xl" style={{background: 'radial-gradient(60% 60% at 50% 40%, rgba(99,102,241,0.10), rgba(255,255,255,0))'}}></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
</div>

<div className="w-full border-b border-neutral-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex items-center justify-between py-2.5">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700">
<svg className="mr-1.5 h-4 w-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20l9-5-9-5-9 5 9 5z"></path>
<path d="M3 7l9 5 9-5"></path>
</svg>
            New
          </span>
<p className="text-sm text-neutral-700">Get 50 free catch‑all checks — no credit card needed.</p>
</div>
<a className="text-sm text-indigo-700 hover:text-indigo-800" href="#pricing">Start free →</a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex h-16 items-center justify-between">
<a className="group inline-flex items-center gap-2" href="#home">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-white text-indigo-700">
<span className="text-[13px] font-semibold tracking-tight">ZV</span>
</div>
<span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900 tracking-tight">Zillion Verifier</span>
</a>
<nav className="flex items-center gap-6">
<a className="text-sm text-neutral-600 hover:text-neutral-900" href="#home">Home</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900" href="#pricing">Pricing</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900" href="#faq">FAQ</a>
</nav>
</div>
</div>
</header>

<section className="relative" id="home">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="grid gap-10 md:grid-cols-2 md:py-20 pt-14 pb-14 gap-x-10 gap-y-10 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-700">
<svg className="h-4 w-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
            Catch‑all verification
          </div>
<h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900">
            Next‑Level Catch All Verification
          </h1>
<p className="mt-4 text-lg text-neutral-600">
            Identify catch‑all emails with unbeatable speed and accuracy. Upload your list and see results in minutes.
          </p>

<div className="mt-7">
<div className="group relative flex flex-col items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-white p-6 transition-colors hover:border-indigo-300" id="dropzone">
<input accept=".csv,.xls,.xlsx" className="absolute inset-0 h-full w-full cursor-pointer opacity-0" id="file-input" type="file"/>
<div className="flex items-center gap-3">
<div className="rounded-md border border-neutral-200 bg-neutral-50 p-2 text-indigo-600">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12V3"></path>
<path d="m7 8 5-5 5 5"></path>
<rect height="8" rx="2" width="18" x="3" y="12"></rect>
</svg>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">Drag &amp; Drop or Upload CSV/Excel</div>
<div className="text-xs text-neutral-500">Instant catch‑all verification processing</div>
</div>
</div>
<div className="mt-3 hidden items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700" id="file-chip"></div>
</div>
<div className="mt-4 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-md border border-indigo-300 bg-indigo-600 px-4 py-2.5 text-sm text-white hover:bg-indigo-500" href="#pricing">
                Start Free — No Card Needed — 50 Catch‑All Checks Free
              </a>
</div>
</div>
</div>

<div className="relative">
<div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-2xl shadow-black/5 backdrop-blur">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-2.5 w-2.5 rounded-full bg-green-500/80"></div>
<span className="text-xs text-neutral-700">Email list processing</span>
</div>
<div className="flex items-center gap-2">
<span className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-[10px] text-neutral-700">CSV</span>
<span className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-[10px] text-neutral-700">XLSX</span>
</div>
</div>
<div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
<div className="flex items-center justify-between text-xs text-neutral-700">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18"></path><path d="M3 12h18"></path><path d="M3 17h18"></path></svg>
                  emails.csv
                </div>
<span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700">Catch‑all detected</span>
</div>
<div className="mt-3 space-y-2 text-[12px] leading-relaxed text-neutral-800">
<div className="flex items-center justify-between">
<span className="">sam@company.com</span>
<span className="rounded border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10px] text-emerald-700">valid</span>
</div>
<div className="flex items-center justify-between">
<span>info@catchallco.com</span>
<span className="rounded border border-amber-200 bg-amber-50 px-1.5 py-0.5 text-[10px] text-amber-700">catch‑all</span>
</div>
<div className="flex items-center justify-between">
<span className="">sales@domain.tld</span>
<span className="rounded border border-amber-200 bg-amber-50 px-1.5 py-0.5 text-[10px] text-amber-700">catch‑all</span>
</div>
<div className="flex items-center justify-between">
<span className="">alex@brand.com</span>
<span className="rounded border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10px] text-emerald-700">valid</span>
</div>
</div>
<div className="mt-4">
<div className="h-2 w-full overflow-hidden rounded-full border border-neutral-200 bg-white">
<div className="h-full w-2/3 bg-indigo-500"></div>
</div>
<div className="mt-2 flex items-center justify-between text-[11px] text-neutral-600">
<span className="">Processing…</span>
<span>67%</span>
</div>
</div>
</div>
</div>
<div className="absolute -right-5 -top-5 hidden rotate-6 md:block">
<div className="rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
<div className="flex items-center gap-2 text-xs text-neutral-700">
<svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
                Catch‑all identification enabled
              </div>
<div className="mt-1 text-[11px] text-neutral-500">Fast classification with domain heuristics.</div>
</div>
</div>
</div>
</div>

<div className="border-t border-neutral-200 pt-10">
<p className="text-center text-xs text-neutral-500">Trusted by growth, sales, and ops teams</p>
<div className="mx-auto mt-5 grid max-w-4xl grid-cols-3 items-center gap-4 sm:grid-cols-5">
<div className="flex items-center justify-center rounded-md border border-neutral-200 bg-white px-3 py-2">
<span className="text-sm font-semibold tracking-tight text-neutral-700">VX</span>
</div>
<div className="flex items-center justify-center rounded-md border border-neutral-200 bg-white px-3 py-2">
<span className="text-sm font-semibold tracking-tight text-neutral-700">QL</span>
</div>
<div className="flex items-center justify-center rounded-md border border-neutral-200 bg-white px-3 py-2">
<span className="text-sm font-semibold tracking-tight text-neutral-700">NT</span>
</div>
<div className="hidden sm:flex items-center justify-center rounded-md border border-neutral-200 bg-white px-3 py-2">
<span className="text-sm font-semibold tracking-tight text-neutral-700">PL</span>
</div>
<div className="hidden sm:flex items-center justify-center rounded-md border border-neutral-200 bg-white px-3 py-2">
<span className="text-sm font-semibold tracking-tight text-neutral-700">SR</span>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-20">
<div className="grid gap-8 md:grid-cols-3">
<div className="md:col-span-1">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Why Catch‑All Verification Matters</h2>
<p className="mt-3 text-neutral-600">
          Catch‑all addresses accept all incoming emails, making it impossible to validate deliverability with traditional tools. Our platform specializes in accurate identification of catch‑all addresses.
        </p>
</div>
<div className="md:col-span-2">
<div className="grid gap-4 sm:grid-cols-3">
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2 text-sm text-neutral-800">
<svg className="h-4 w-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18"></path><path d="M12 3v18"></path></svg>
              Improve deliverability &amp; ROI
            </div>
<p className="mt-1.5 text-sm text-neutral-600">Send smarter by segmenting catch‑all from truly valid inboxes.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2 text-sm text-neutral-800">
<svg className="h-4 w-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Reduce bounce rates
            </div>
<p className="mt-1.5 text-sm text-neutral-600">Lower bounces by routing catch‑all addresses appropriately.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2 text-sm text-neutral-800">
<svg className="h-4 w-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4z"></path><path d="M9 9h6v6H9z"></path></svg>
              Protect sender reputation
            </div>
<p className="mt-1.5 text-sm text-neutral-600">Avoid negative signals by separating risky catch‑all domains.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 md:pb-20" id="features">
<div className="grid gap-6 md:grid-cols-3">
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="rounded-md border border-neutral-200 bg-indigo-50 p-2 text-indigo-600">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18"></path><path d="M12 3v18"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Lightning‑Fast Catch‑All Detection</h3>
</div>
<p className="mt-3 text-sm text-neutral-600">Process large lists in minutes with parallelized checks.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="rounded-md border border-neutral-200 bg-indigo-50 p-2 text-indigo-600">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">99.9% Identification Accuracy</h3>
</div>
<p className="mt-3 text-sm text-neutral-600">Advanced domain heuristics and SMTP modeling for reliability.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="rounded-md border border-neutral-200 bg-indigo-50 p-2 text-indigo-600">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18"></path><path d="M3 12h18"></path><path d="M3 17h18"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Real‑Time Bulk Processing</h3>
</div>
<p className="mt-3 text-sm text-neutral-600">Upload CSV/Excel and stream results as they’re classified.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="rounded-md border border-neutral-200 bg-indigo-50 p-2 text-indigo-600">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="18" x="3" y="4"></rect><path d="M7 8h10M7 12h10M7 16h6"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Enterprise Security (SOC2, GDPR)</h3>
</div>
<p className="mt-3 text-sm text-neutral-600">Encryption in transit and at rest with compliance options.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="rounded-md border border-neutral-200 bg-indigo-50 p-2 text-indigo-600">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v14H3z"></path><path d="M7 21h10"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Analytics Dashboard</h3>
</div>
<p className="mt-3 text-sm text-neutral-600">% catch‑all in your list, trends, and actionable insights.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="rounded-md border border-neutral-200 bg-indigo-50 p-2 text-indigo-600">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12H2"></path><path d="M7 7h10"></path><path d="M7 17h10"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Dedicated 24/7 Support</h3>
</div>
<p className="mt-3 text-sm text-neutral-600">Direct help from specialists whenever you need it.</p>
</div>
</div>
</section>


<section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-20">
<div className="text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Why Choose Us for Catch‑All?</h2>
<p className="mt-3 text-neutral-700">Compare accuracy, speed, and pricing.</p>
</div>
<div className="mt-8 overflow-hidden rounded-xl border border-neutral-200 bg-white">
<div className="grid grid-cols-4 border-b border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-900">
<div className="text-left">Criteria</div>
<div className="text-center">Zillion Verifier</div>
<div className="text-center">Provider A</div>
<div className="text-center">Provider B</div>
</div>
<div className="divide-y divide-neutral-200 text-sm">
<div className="grid grid-cols-4 px-4 py-3">
<div className="text-neutral-700">Catch‑All Accuracy</div>
<div className="text-center">
<span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] text-emerald-700">99.9%</span>
</div>
<div className="text-center text-neutral-600">96–98%</div>
<div className="text-center text-neutral-600">95–97%</div>
</div>
<div className="grid grid-cols-4 px-4 py-3">
<div className="text-neutral-700">Speed (10k list)</div>
<div className="text-center">
<span className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-[11px] text-indigo-700">&lt; 5 min</span>
</div>
<div className="text-center text-neutral-600">10–20 min</div>
<div className="text-center text-neutral-600">8–15 min</div>
</div>
<div className="grid grid-cols-4 px-4 py-3">
<div className="text-neutral-700">Real‑Time Streaming</div>
<div className="text-center">
<svg className="mx-auto h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="text-center text-neutral-600">Limited</div>
<div className="text-center text-neutral-600">No</div>
</div>
<div className="grid grid-cols-4 px-4 py-3">
<div className="text-neutral-700">Pricing (per 1k)</div>
<div className="text-center">$— fair</div>
<div className="text-center text-neutral-600">$ higher</div>
<div className="text-center text-neutral-600">$ higher</div>
</div>
<div className="grid grid-cols-4 px-4 py-3">
<div className="text-neutral-700">Security</div>
<div className="text-center">SOC2, GDPR</div>
<div className="text-center text-neutral-600">GDPR</div>
<div className="text-center text-neutral-600">Basic</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-20" id="faq">
<div className="grid gap-10 md:grid-cols-2">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Frequently asked</h2>
<p className="mt-3 text-neutral-600">Everything you need to know about catch‑all verification.</p>
</div>
<div className="space-y-4">
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-sm font-medium text-neutral-900">What are catch‑all emails?</div>
<p className="mt-1.5 text-sm text-neutral-700">Domains configured to accept messages for any address. They don’t confirm if a specific mailbox exists, making traditional verification inconclusive.</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-sm font-medium text-neutral-900">Why are catch‑all addresses hard to verify?</div>
<p className="mt-1.5 text-sm text-neutral-700">Because SMTP responses don’t reliably reject unknown recipients. Specialized domain heuristics and pattern modeling are required to classify them accurately.</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-sm font-medium text-neutral-900">How accurate is your catch‑all verification?</div>
<p className="mt-1.5 text-sm text-neutral-700">Up to 99.9% identification accuracy based on multi‑signal checks, active monitoring, and continuous model updates.</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-sm font-medium text-neutral-900">Is catch‑all checking available via API?</div>
<p className="mt-1.5 text-sm text-neutral-700">Yes. Bulk and real‑time API endpoints let you submit lists and stream results as they’re processed.</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
<div className="rounded-2xl border border-neutral-200 bg-gradient-to-b from-neutral-50 to-transparent p-8 text-center">
<h3 className="text-3xl font-semibold tracking-tight text-neutral-900">Ready to Clean Up Your List?</h3>
<p className="mt-3 text-neutral-700">Upload now and get 50 catch‑all checks free.</p>
<div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
<a className="inline-flex items-center rounded-md border border-indigo-300 bg-indigo-600 px-4 py-2.5 text-sm text-white hover:bg-indigo-500" href="#home">Upload CSV/Excel</a>
<a className="inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900" href="#pricing">See pricing</a>
</div>
</div>
</section>

<footer className="border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
<div className="grid gap-8 md:grid-cols-4">
<div className="space-y-3">
<a className="group inline-flex items-center gap-2" href="#home">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-white text-indigo-700">
<span className="text-[13px] font-semibold tracking-tight">ZV</span>
</div>
<span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900 tracking-tight">Zillion Verifier</span>
</a>
<p className="text-sm text-neutral-600">Catch‑all verification you can trust.</p>
<div className="flex items-center gap-3">
<a className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-[10px] text-neutral-700" href="#chat">Support</a>
<a className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-[10px] text-neutral-700" href="#">Status</a>
</div>
</div>
<div className="">
<div className="text-sm font-medium text-neutral-800">Policy</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li className=""><a className="hover:text-neutral-900" href="#">Privacy</a></li>
<li className=""><a className="hover:text-neutral-900" href="#">Terms</a></li>
<li className=""><a className="hover:text-neutral-900" href="#">GDPR</a></li>
<li><a className="hover:text-neutral-900" href="#">API</a></li>
</ul>
</div>
<div className="">
<div className="text-sm font-medium text-neutral-800">Quick menu</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li className=""><a className="hover:text-neutral-900" href="#">Blog</a></li>
<li className=""><a className="hover:text-neutral-900" href="#">Cookie Policy</a></li>
<li className=""><a className="hover:text-neutral-900" href="#">Resources</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-neutral-800">Stay in the loop</div>
<form className="mt-3 flex gap-2">
<input className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-800 placeholder-neutral-400 outline-none focus:border-indigo-400" placeholder="you@company.com" required="" type="email"/>
<button className="rounded-md border border-indigo-300 bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-500">Subscribe</button>
</form>
<p className="mt-2 text-xs text-neutral-500">Product updates, no spam.</p>
<div className="mt-3 flex items-center gap-3 text-sm text-neutral-600">
<a className="hover:text-neutral-900" href="#">Twitter</a>
<a className="hover:text-neutral-900" href="#">LinkedIn</a>
<a className="hover:text-neutral-900" href="mailto:support@zillionverifier.com">support@zillionverifier.com</a>
</div>
</div>
</div>
<div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row">
<p>© <span id="year">2025</span> Zillion Verifier. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-700" href="#">Privacy</a>
<a className="hover:text-neutral-700" href="#">Terms</a>
<a className="hover:text-neutral-700" href="#">GDPR</a>
<a className="hover:text-neutral-700" href="#">API</a>
</div>
</div>
</div>

<button aria-label="Live chat" className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-800 shadow-lg hover:bg-neutral-50" id="chat-button">
<svg className="h-4 w-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path></svg>
      Chat
    </button>
<div className="fixed bottom-20 right-5 hidden w-80 rounded-xl border border-neutral-200 bg-white p-4 shadow-xl" id="chat-panel">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-900">Ask us anything</div>
<button aria-label="Close chat" className="rounded-md border border-neutral-200 bg-white p-1 hover:bg-neutral-50" id="chat-close">
<svg className="h-4 w-4 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<p className="mt-2 text-xs text-neutral-600">We’re online 24/7. Share your list size and goals.</p>
<div className="mt-3 flex gap-2">
<input className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-800 placeholder-neutral-400 outline-none focus:border-indigo-400" placeholder="Type a message…" type="text"/>
<button aria-label="Send" className="rounded-md border border-indigo-300 bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-500">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
</div>
</div>

</footer>

    </>
  );
}
