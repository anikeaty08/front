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



      lucide.createIcons();
    
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
      

<div className="relative min-h-screen flex flex-col">

<div className="pointer-events-none fixed inset-x-0 top-0 mx-auto h-[28rem] max-w-5xl rounded-full bg-emerald-900/20 blur-3xl"></div>
<div className="pointer-events-none fixed inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/60 to-transparent"></div>

<header className="relative z-20 border-b border-white/5/20">
<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/40">
<span className="text-xs font-semibold tracking-tight text-emerald-300">FO</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight text-white">FinOps Studio</span>
<span className="text-[0.65rem] text-gray-500">Financial Operations UI</span>
</div>
</div>

<nav className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
<a className="hover:text-white transition-colors" href="#overview">Overview</a>
<a className="hover:text-white transition-colors" href="#metrics">Metrics</a>
<a className="hover:text-white transition-colors" href="#templates">Templates</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-gray-300 hover:bg-white/5 hover:text-white sm:inline-flex" type="button">
              View docs
            </button>
<button className="inline-flex items-center gap-1.5 rounded-full bg-white text-[0.75rem] font-semibold text-gray-900 hover:bg-gray-100 px-3.5 py-1.5 shadow-sm" type="button">
<svg className="h-3.5 w-3.5" data-lucide="layout-dashboard" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="6" rx="1" width="7" x="3" y="15"></rect>
</svg>
              Use template
            </button>
</div>
</div>
</header>

<main className="relative z-10 flex-1">

<section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:pt-14 lg:pb-20" id="overview">

<div className="max-w-2xl space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-[0.7rem] font-medium text-emerald-300">
<svg className="h-3 w-3" data-lucide="sparkles" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594L3.814 11.983a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
</svg>
<span>Financial Operations Dashboard Template</span>
</div>
<div className="space-y-3">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                Visualize cash, inflows, and spend in one control surface.
              </h1>
<p className="text-base sm:text-lg text-gray-400">
                This template gives you a ready-to-use financial operations
                dashboard: balances by wallet, cash movement actions, and an
                income‑vs‑spend view, all designed for clarity in high‑volume
                environments.
              </p>
</div>
<div className="flex flex-col gap-3 text-sm text-gray-400 sm:flex-row sm:items-center">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/60">
<div className="h-5 w-5 animate-ping rounded-full bg-emerald-500/40"></div>
</div>
<span>Optimized for finance teams and live demos.</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 pt-2">
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-emerald-950 shadow-sm hover:bg-emerald-400" type="button">
<svg className="h-3.5 w-3.5" data-lucide="play-circle" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="10 8 16 12 10 16 10 8"></polygon>
</svg>
                Preview interaction
              </button>
<button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-200 hover:bg-white/10" type="button">
<svg className="h-3.5 w-3.5" data-lucide="code-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 16 4-4-4-4"></path>
<path d="m6 8-4 4 4 4"></path>
<path d="m14.5 4-5 16"></path>
</svg>
                View layout spec
              </button>
</div>
</div>

<div className="relative mt-2 rounded-2xl border border-white/10 bg-[#050507]/80 p-4 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">

<div className="flex items-center justify-between rounded-xl border border-white/5 bg-[#08080b] px-4 py-3">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40">
<svg className="h-3.5 w-3.5 text-emerald-300" data-lucide="pie-chart" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.21 15.89A10 10 0 1 1 8.11 2.79"></path>
<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</svg>
</div>
<div className="leading-tight">
<p className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-gray-400">
                    Dashboard · Finance
                  </p>
<p className="text-xs text-gray-200">
                    Financial Operations — Live Overview
                  </p>
</div>
</div>
<div className="flex items-center gap-3 text-gray-500">
<button className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 hover:border-white/30 hover:text-white" type="button">
<svg className="h-3.5 w-3.5" data-lucide="search" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="7"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</button>
<button className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 hover:border-white/30 hover:text-white" type="button">
<svg className="h-3.5 w-3.5" data-lucide="settings-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 .6 1.65 1.65 0 0 0-.33 1.82l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1-.6 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-.6 1.65 1.65 0 0 0 .33-1.82l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15.4 9a1.65 1.65 0 0 0 1 .6 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.6 1z"></path>
</svg>
</button>
</div>
</div>

<div className="mt-4 grid gap-4 rounded-xl border border-white/5 bg-[#050507] p-4 sm:grid-cols-12">

<div className="space-y-4 sm:col-span-7">

<div className="rounded-xl border border-white/5 bg-[#0b0b0f] p-4 sm:p-5">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs text-gray-400">Total cash position</p>
<div className="mt-2 flex items-baseline gap-2">
<p className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                          $842,910.23
                        </p>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 text-[0.65rem] font-medium text-emerald-300">
<svg className="h-2.5 w-2.5" data-lucide="trending-up" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 7h4v4"></path>
<path d="m3 17 6.5-6.5 4 4L21 7"></path>
</svg>
                          +12.7% MoM
                        </span>
</div>
</div>
<div className="hidden flex-col items-end text-[0.65rem] text-gray-500 sm:flex">
<span>Updated: 2 min ago</span>
<span>Last reconciliation: 11:32 UTC</span>
</div>
</div>

<div className="mt-4 grid gap-2 sm:grid-cols-2">
<button className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-2 text-xs font-semibold text-emerald-950 hover:bg-emerald-400" type="button">
<svg className="h-3.5 w-3.5" data-lucide="arrow-up-right" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17 17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
                      New transfer
                    </button>
<button className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-100 hover:bg-white/10" type="button">
<svg className="h-3.5 w-3.5" data-lucide="arrow-down-left" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m17 7-10 10"></path>
<path d="M17 17H7V7"></path>
</svg>
                      Request funds
                    </button>
</div>
</div>

<div className="grid gap-3 sm:grid-cols-2">

<div className="rounded-xl border border-white/5 bg-[#0b0b0f] p-3.5">
<div className="mb-3 flex items-start justify-between gap-2">
<div>
<p className="text-[0.7rem] text-gray-400">USD Wallet</p>
<p className="mt-1 text-base font-medium tracking-tight text-white">
                          $312,870
                        </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[0.65rem] font-medium text-emerald-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        +3.1%
                      </span>
</div>
<p className="text-[0.65rem] text-gray-500">
                      Operational accounts · 5 banks
                    </p>
</div>

<div className="rounded-xl border border-white/5 bg-[#0b0b0f] p-3.5">
<div className="mb-3 flex items-start justify-between gap-2">
<div>
<p className="text-[0.7rem] text-gray-400">EUR Wallet</p>
<p className="mt-1 text-base font-medium tracking-tight text-white">
                          €154,260
                        </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[0.65rem] font-medium text-emerald-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        +1.4%
                      </span>
</div>
<p className="text-[0.65rem] text-gray-500">
                      Collections · EU entities
                    </p>
</div>

<div className="rounded-xl border border-white/5 bg-[#0b0b0f] p-3.5">
<div className="mb-3 flex items-start justify-between gap-2">
<div>
<p className="text-[0.7rem] text-gray-400">GBP Wallet</p>
<p className="mt-1 text-base font-medium tracking-tight text-white">
                          £98,540
                        </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-1.5 py-0.5 text-[0.65rem] font-medium text-rose-300">
<span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
                        −0.6%
                      </span>
</div>
<p className="text-[0.65rem] text-gray-500">
                      Payroll &amp; vendors
                    </p>
</div>

<div className="rounded-xl border border-white/5 bg-[#0b0b0f] p-3.5">
<div className="mb-3 flex items-start justify-between gap-2">
<div>
<p className="text-[0.7rem] text-gray-400">Digital</p>
<p className="mt-1 text-base font-medium tracking-tight text-white">
                          ₿12.04
                        </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[0.65rem] font-medium text-emerald-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        +7.9%
                      </span>
</div>
<p className="text-[0.65rem] text-gray-500">
                      Treasury allocation · LTV 1.8×
                    </p>
</div>
</div>
</div>

<div className="flex flex-col rounded-xl border border-white/5 bg-[#0b0b10] p-4 sm:col-span-5">
<div className="mb-4 flex items-center justify-between gap-2">
<div>
<p className="text-xs font-medium tracking-tight text-gray-200">
                      Income vs spend
                    </p>
<p className="text-[0.7rem] text-gray-500">
                      Rolling 12‑month performance
                    </p>
</div>
<button className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[0.65rem] text-gray-200 hover:bg-white/10" type="button">
<svg className="h-3 w-3" data-lucide="calendar" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4"></path>
<path d="M8 2v4"></path>
<path d="M3 10h18"></path>
</svg>
                    Last 12 mo
                  </button>
</div>

<div className="mb-3 flex flex-1 items-end gap-1.5">

<div className="flex-1">
<div className="h-6 rounded-t bg-white/12 hover:bg-white/20"></div>
</div>
<div className="flex-1">
<div className="h-12 rounded-t bg-white/12 hover:bg-white/20"></div>
</div>
<div className="flex-1">
<div className="h-10 rounded-t bg-white/12 hover:bg-white/20"></div>
</div>
<div className="flex-1">
<div className="h-20 rounded-t bg-white/12 hover:bg-white/20"></div>
</div>
<div className="flex-1">
<div className="h-24 rounded-t bg-white/12 hover:bg-white/20"></div>
</div>
<div className="flex-1">
<div className="h-16 rounded-t bg-white/12 hover:bg-white/20"></div>
</div>
<div className="flex-1">
<div className="h-14 rounded-t bg-white/12 hover:bg-white/20"></div>
</div>
<div className="flex-1">
<div className="h-28 rounded-t bg-white/12 hover:bg-white/20"></div>
</div>
<div className="flex-1">
<div className="h-9 rounded-t bg-white/12 hover:bg-white/20"></div>
</div>
</div>

<div className="flex items-center justify-between border-t border-white/5 pt-2 text-[0.65rem] text-gray-500">
<span>$0</span>
<span>$50k</span>
<span>$100k</span>
</div>

<div className="mt-4 grid gap-3 sm:grid-cols-">
<div className="rounded-lg border border-white/5 bg-[#111116] p-3">
<p className="text-[0.65rem] text-gray-500">Total income</p>
<p classmt-1="" font-medium="" text-sm="" text-white"="" tracking-tight="">
                      $126,400
                    </p>
                    &lt; className="mt-1 text-[0.65rem] text-emerald-300"&gt;
                      +22.4% vs last
                    
</div>
<div className="rounded-lg border border-white/5 bg-[#111] p-3">
<p className="text-[0.65rem] text-gray-500">Total spendp&gt;
                    <p className="mt-1 text-sm font-medium tracking-tight text-white">
                      $78,
                    </p>
<p 5="" border-t="" border-white="" className="mt-1 text-[0.65rem] text-emerald-200 burn · 4.3 months runway &lt;/p&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; div&gt; &lt;!-- Template tags --&gt; &lt;div class=" flex="" flex-wrap="" gap-2="" mt-4="" pt-3="" text-[0.65rem]"="">
<span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-gray-300">
<span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Cash management
              </span>
<span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-gray-300">
                Reconciliation-ready
              </span>
<span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-gray-300">
                Multi-entity
              </span>
</p></p></div>
</div>
</div></div></div></section>

<section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8" id="metrics">
<div className="grid gap-10 rounded-3xl border border-white/5 bg-[#050506] p-6 sm:grid-cols-3 sm:p-8">

<div className="space-y-3">
<p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-emerald-300">
                Template coverage
              </p>
<p className="text-sm text-gray-300">
                Use this layout as a starting point for treasury, cash
                operations, or revenue reporting dashboards. It stays close to
                the original composition while focusing on clarity and reuse.
              </p>
</div>

<div className="space-y-3">
<p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-gray-400">
                Key metrics
              </p>
<ul className="space-y-2 text-sm text-gray-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Real‑time cash position at top level.
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Wallet view by currency / source.
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Income vs spend trend with summary tiles.
                </li>
</ul>
</div>

<div className="space-y-3">
<p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-gray-400">
                Implementation hints
              </p>
<ul className="space-y-2 text-sm text-gray-300">
<li>Bind totals to ledger or data warehouse aggregates.</li>
<li>Use the wallet grid for accounts, entities, or regions.</li>
<li>
                  Replace placeholder bars with your charting library while
                  keeping the container layout.
                </li>
</ul>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8" id="templates">
<div className="mb-6 flex items-center justify-between gap-4">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Ready‑to‑adapt sections
              </h2>
<p className="mt-1 text-sm text-gray-400">
                Complement the main dashboard with overview cards and a simple
                call‑to‑action.
              </p>
</div>
<button className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.75rem] font-medium text-gray-200 hover:bg-white/10 sm:inline-flex" type="button">
              Duplicate layout
              <svg className="h-3.5 w-3.5" data-lucide="copy" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="13" rx="2" width="13" x="9" y="9"></rect>
<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
</svg>
</button>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="flex flex-col rounded-2xl border border-white/5 bg-[#070709] p-4">
<div className="mb-4 flex items-center justify-between gap-3">
<div>
<p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-gray-400">
                    Treasury
                  </p>
<p className="text-sm font-medium text-white">
                    Multi‑currency overview
                  </p>
</div>
<span className="rounded-full bg-sky-500/15 px-2 py-0.5 text-[0.65rem] font-medium text-sky-300">Section</span>
</div>
<p className="text-sm text-gray-400">
                Use the wallet grid pattern to create regional or entity‑based
                cash tiles with short context lines below each balance.
              </p>
<div className="mt-4 flex flex-wrap gap-2 text-[0.65rem]">
<span className="rounded-full bg-white/5 px-2 py-0.5 text-gray-300">Per‑entity cash</span>
<span className="rounded-full bg-white/5 px-2 py-0.5 text-gray-300">FX exposure</span>
</div>
</div>

<div className="flex flex-col rounded-2xl border border-white/5 bg-[#070709] p-4">
<div className="mb-4 flex items-center justify-between gap-3">
<div>
<p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-gray-400">
                    Revenue
                  </p>
<p className="text-sm font-medium text-white">
                    Income &amp; collections
                  </p>
</div>
<span className="rounded-full bg-violet-500/15 px-2 py-0.5 text-[0.65rem] font-medium text-violet-300">Section</span>
</div>
<p className="text-sm text-gray-400">
                Replace the income vs spend block with collections by payment
                rail, product line, or geography while reusing the summary
                tiles.
              </p>
<div className="mt-4 flex flex-wrap gap-2 text-[0.65rem]">
<span className="rounded-full bg-white/5 px-2 py-0.5 text-gray-300">Rails</span>
<span className="rounded-full bg-white/5 px-2 py-0.5 text-gray-300">A/R health</span>
</div>
</div>

<div className="flex flex-col rounded-2xl border border-emerald-500/25 bg-gradient-to-b from-emerald-900/30 via-[#050506] to-[#050506] p-4">
<div className="mb-3">
<p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-emerald-300">
                  Call‑to‑action
                </p>
<p className="mt-1 text-sm font-medium text-white">
                  Turn this into a handoff screen
                </p>
</div>
<p className="text-sm text-gray-300">
                Swap the text and buttons to direct users to export, share, or
                switch between financial workspaces.
              </p>
<button className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1.5 text-[0.75rem] font-semibold text-emerald-950 hover:bg-emerald-400" type="button">
                Use as end‑of‑flow
                <svg className="h-3.5 w-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#020202]/95 backdrop-blur-sm text-gray-400">
<div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-[0.75rem] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
<div className="space-y-1">
<p className="text-xs text-gray-500">
              Financial Operations Dashboard Template
            </p>
<p>Adapted for product teams, designers, and finance leads.</p>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-1 hover:text-white" href="#overview">
              Back to top
              <svg className="h-3 w-3" data-lucide="arrow-up" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
