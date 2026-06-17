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
      
<div className="min-h-screen flex flex-col">

<header className="flex items-center justify-between border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
<div className="flex items-center gap-3">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-white text-sm font-medium tracking-tight">
            N
          </div>
<div className="hidden sm:flex flex-col">
<span className="text-base font-semibold tracking-tight">NanoVault</span>
<span className="text-xs text-slate-500">IP Tokenization Studio</span>
</div>
</div>
<div className="hidden md:flex items-center gap-2 border-l border-slate-200 pl-3">
<span className="text-xs text-slate-400">Workspace</span>
<span className="text-xs font-medium tracking-tight text-slate-900">Overview</span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.7rem] text-emerald-700">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            Live
          </span>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-3">

<div className="hidden md:block w-52">
<div className="relative">
<span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="11" cy="11" r="6"></circle>
<path d="m20 20-3.5-3.5"></path>
</svg>
</span>
<input className="w-full rounded-full border border-slate-200 bg-slate-50/80 py-1.5 pl-9 pr-3 text-xs placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100" placeholder="Search" type="text"/>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-800 hover:border-sky-400 hover:bg-sky-50">
<svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M20 7H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Z"></path>
<path d="M9 7V5a2 2 0 0 1 2-2h8"></path>
<circle cx="16" cy="12" r="1.25"></circle>
</svg>
          Connect wallet
        </button>
<button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-white hover:bg-slate-800">
<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
          New vault
        </button>
<button className="ml-1 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50">
<svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"></path>
<path d="M6 21a6 6 0 0 1 12 0"></path>
</svg>
</button>
</div>
</header>

<div className="flex flex-1">

<aside className="hidden md:flex md:w-56 lg:w-64 xl:w-72 flex-col border-r border-slate-200 bg-white">

<div className="flex items-center justify-between px-4 py-4">
<div className="flex flex-col">
<span className="text-xs text-slate-500">Current draft</span>
<span className="text-sm font-medium tracking-tight text-slate-900">George Form</span>
</div>
<span className="rounded-full bg-emerald-50 px-2 py-1 text-[0.7rem] text-emerald-700">
            Verified
          </span>
</div>

<nav className="mt-2 flex-1 space-y-1 px-2 text-sm">
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50">
<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="9" width="7" x="3" y="3"></rect>
<rect height="5" width="7" x="14" y="3"></rect>
<rect height="9" width="7" x="14" y="12"></rect>
<rect height="5" width="7" x="3" y="16"></rect>
</svg>
<span>Overview</span>
</button>
<button className="flex w-full items-center gap-3 rounded-lg bg-slate-900 text-white px-3 py-2">
<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M7 7v10"></path>
<path d="M17 7v10"></path>
<circle cx="12" cy="12" r="2.5"></circle>
</svg>
<div className="flex flex-col items-start">
<span>Patent Vault</span>
<span className="text-xs text-slate-300">Create &amp; manage IP vaults</span>
</div>
</button>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50">
<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 3 14.09 7.26 19 8.27 15.5 11.97 16.18 17.02 12 14.77 7.82 17.02 8.5 11.97 5 8.27 9.91 7.26 12 3z"></path>
<path d="m9.5 11.5 1.5 1.5 3-3"></path>
</svg>
<span>Governance</span>
</button>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50">
<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 9h18"></path>
<path d="M5 9v10h14V9"></path>
<path d="M4 9 6 3h12l2 6"></path>
</svg>
<span>Marketplace</span>
</button>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50">
<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="m12 2 9 5-9 5-9-5 9-5z"></path>
<path d="m3 12 9 5 9-5"></path>
<path d="m3 17 9 5 9-5"></path>
</svg>
<span>Staking</span>
</button>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50">
<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M21.21 15.89A10 10 0 1 1 12 2v10z"></path>
<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</svg>
<span>Portfolio</span>
</button>
</nav>

<div className="mt-2 border-t border-slate-100 px-4 py-4">
<div className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-tr from-sky-400 to-sky-600"></div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight">George Form</span>
<span className="text-xs text-emerald-600">Patent verified</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col">
<section className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">

<div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] items-start">

<div className="border-b border-slate-200 pb-4 lg:border-b-0 lg:pb-0">
<div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs text-sky-700 mb-2">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<path d="M14 2v6h6"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
<path d="M10 9H8"></path>
</svg>
                Draft 1 • Investor details
              </div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                Patent vault setup
              </h1>
<p className="mt-1 max-w-2xl text-base text-slate-600">
                Start by describing the investor and organization behind this patent. We use this information to verify ownership and prepare your IP for tokenization.
              </p>
</div>

<div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-500">Progress</p>
<div className="mt-1 flex items-center gap-2">
<div className="h-1.5 w-24 rounded-full bg-slate-200">
<div className="h-full w-1/4 rounded-full bg-sky-500"></div>
</div>
<span className="text-xs text-slate-600">1 / 8</span>
</div>
</div>
<div className="text-right">
<p className="text-xs text-slate-500">Estimated time</p>
<p className="text-sm font-medium text-slate-900">4–6 minutes</p>
</div>
</div>
<div className="mt-5 overflow-x-auto">
<ol className="flex min-w-max items-center gap-6 text-xs text-slate-500">
<li className="flex items-center gap-2">
<div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-sky-600 text-xs font-medium text-white">
                      1
                      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.7rem] font-medium text-sky-700">
                        Investor
                      </span>
</div>
</li>
<li className="h-px w-10 bg-sky-200"></li>
<li className="flex items-center gap-2">
<div className="relative flex h-7 w-7 items-center justify-center rounded-full border border-sky-200 bg-white text-xs font-medium text-slate-700">
                      2
                      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.7rem]">
                        Patent
                      </span>
</div>
</li>
<li className="h-px w-10 bg-slate-200"></li>
<li className="flex items-center gap-2">
<div className="relative flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-500">
                      3
                      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.7rem] text-slate-500">
                        Docs
                      </span>
</div>
</li>
<li className="h-px w-10 bg-slate-200"></li>
<li className="flex items-center gap-2">
<div className="relative flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-500">
                      4
                      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.7rem] text-slate-500">
                        Market
                      </span>
</div>
</li>
<li className="h-px w-10 bg-slate-200 hidden md:block"></li>
<li className="hidden md:flex items-center gap-2">
<div className="relative flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-500">
                      5
                      <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.7rem] text-slate-500">
                        Ownership
                      </span>
</div>
</li>
</ol>
</div>
</div>
</div>

<div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] items-start">

<div className="rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-100/70">
<div className="border-b border-slate-100 px-4 py-4 sm:px-6">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900">
                      Investor details
                    </h2>
<p className="mt-1 text-base text-slate-600">
                      Share who is behind this patent. You can update these details later before submission.
                    </p>
</div>
<span className="hidden rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 sm:inline-flex items-center gap-1">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
                    Auto-saved
                  </span>
</div>
</div>
<form className="grid gap-6 px-4 py-6 sm:px-6 lg:gap-6">
<div>
<label className="flex items-center justify-between text-sm font-medium text-slate-800">
<span>Full name / organization<span className="text-rose-500">*</span></span>
<span className="text-xs font-normal text-slate-500">As it appears on legal documents</span>
</label>
<input className="mt-2 w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100" placeholder="e.g. Horizon Labs LLC" type="text"/>
</div>
<div className="grid gap-6 sm:grid-cols-2">
<div>
<label className="text-sm font-medium text-slate-800">
                      Role<span className="text-rose-500">*</span>
</label>
<select className="mt-2 w-full appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-3 pr-9 text-base text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100">
<option value="">Select your role</option>
<option>Inventor</option>
<option>Legal representative</option>
<option>Organization admin</option>
<option>Other</option>
</select>
</div>
<div>
<label className="flex items-center justify-between text-sm font-medium text-slate-800">
<span>Email address<span className="text-rose-500">*</span></span>
<span className="text-xs font-normal text-slate-500">We’ll send verification here</span>
</label>
<input className="mt-2 w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100" placeholder="you@company.com" type="email"/>
</div>
</div>
<div className="grid gap-6 sm:grid-cols-2">
<div>
<label className="text-sm font-medium text-slate-800">
                      Country of origin<span className="text-rose-500">*</span>
</label>
<select className="mt-2 w-full appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-3 pr-9 text-base text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100">
<option value="">Select country</option>
<option>United States</option>
<option>United Kingdom</option>
<option>Germany</option>
<option>Singapore</option>
<option>Other</option>
</select>
</div>
<div>
<label className="text-sm font-medium text-slate-800">
                      Team name
                    </label>
<input className="mt-2 w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100" placeholder="Optional — internal reference" type="text"/>
</div>
</div>
<div className="grid gap-6 sm:grid-cols-2">
<div>
<label className="flex items-center justify-between text-sm font-medium text-slate-800">
<span>Website / LinkedIn / institution page</span>
<span className="text-xs font-normal text-slate-500">Optional</span>
</label>
<input className="mt-2 w-full rounded-lg border border-slate-200 bg-white py-2.5 px-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100" placeholder="https://" type="url"/>
</div>
<div>
<label className="text-sm font-medium text-slate-800">
                      Preferred contact channel
                    </label>
<select className="mt-2 w-full appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-3 pr-9 text-base text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100">
<option>Email</option>
<option>Phone</option>
<option>Messaging app</option>
</select>
</div>
</div>

<div className="mt-2 flex flex-col items-stretch justify-between gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900" type="button">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
                      Back
                    </button>
<button className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-800" type="button">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l3 3"></path>
</svg>
                      Save &amp; exit
                    </button>
</div>
<div className="flex items-center gap-3">
<p className="hidden text-xs text-slate-500 sm:block">
                      Next: patent details &amp; jurisdiction
                    </p>
<button className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-500" type="submit">
                      Continue
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</form>
</div>

<div className="space-y-4">

<div className="flex flex-col gap-3 rounded-2xl border border-dashed border-sky-200 bg-sky-50/60 px-4 py-4">
<div className="flex items-start gap-3">
<svg className="mt-0.5 h-4 w-4 text-sky-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
<div>
<p className="text-sm font-medium text-slate-900">
                      Using a legal entity?
                    </p>
<p className="mt-1 text-sm text-slate-600">
                      Make sure the full organization name matches your registration documents exactly. You can link multiple inventors in a later step.
                    </p>
</div>
</div>
<div className="flex justify-between items-center gap-3">
<button className="inline-flex items-center gap-1 rounded-full border border-sky-300 bg-white px-3 py-1.5 text-xs font-medium text-sky-700 hover:border-sky-400 hover:bg-sky-50" type="button">
                    View example
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7 17 17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</button>
<span className="text-[0.7rem] text-sky-700">Guidance for legal teams</span>
</div>
</div>

<div className="rounded-2xl bg-slate-900 text-slate-100 px-4 py-5">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium tracking-tight">
                    N
                  </div>
<span className="text-sm font-semibold tracking-tight">NanoVault</span>
</div>
<p className="mt-3 text-sm text-slate-100/80">
                  Transforming patents into liquid, programmable assets by combining verified IP data with transparent on-chain rails.
                </p>
<div className="mt-4 flex items-center gap-3">
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
</svg>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 16 3a4.48 4.48 0 0 0-4.47 4.47c0 .35.04.7.11 1.03A12.94 12.94 0 0 1 3 4s-4 9 5 13a13.24 13.24 0 0 1-8 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
</svg>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7A8.38 8.38 0 0 1 8.7 19L3 21l1.6-5.3A8.38 8.38 0 0 1 2.5 12 8.5 8.5 0 0 1 12 3.5 8.5 8.5 0 0 1 21 11.5z"></path>
</svg>
</button>
</div>
<div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3 text-[0.7rem] text-slate-100/70">
<span>© 2025 NanoVault Labs.</span>
<div className="flex gap-3">
<button className="hover:text-white">Terms</button>
<button className="hover:text-white">Privacy</button>
<button className="hover:text-white">Status</button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>
</div>

    </>
  );
}
