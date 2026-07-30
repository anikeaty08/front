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
      
      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });

      // State
      const availableBalance = 1200.00;
      const last = 64123.45;

      const el = (id) => document.getElementById(id);
      const lastPriceEl = el('lastPrice');
      const availableEl = el('available');
      const availCurEl = el('availCur');
      const amountRange = el('amountRange');
      const amountInput = el('amount');
      const allocPct = el('allocPct');
      const lower = el('lower');
      const upper = el('upper');
      const grids = el('grids');
      const profitPerGrid = el('profitPerGrid');
      const currencyBtn = el('currencyBtn');
      const currencyMenu = el('currencyMenu');
      const currencyLabel = el('currencyLabel');
      const autoFill = el('autoFill');
      const advToggle = el('advToggle');
      const advanced = el('advanced');
      const advIcon = el('advIcon');

      // Seed UI
      lastPriceEl.textContent = last.toLocaleString(undefined, {maximumFractionDigits: 2});
      availableEl.textContent = availableBalance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

      // Currency dropdown
      currencyBtn.addEventListener('click', () => {
        currencyMenu.classList.toggle('hidden');
      });
      currencyMenu.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          const c = btn.getAttribute('data-currency');
          currencyLabel.textContent = c;
          availCurEl.textContent = c;
          currencyMenu.classList.add('hidden');
        });
      });
      document.addEventListener('click', (e) => {
        if (!currencyBtn.contains(e.target) && !currencyMenu.contains(e.target)) {
          currencyMenu.classList.add('hidden');
        }
      });

      // Advanced toggle
      advToggle.addEventListener('click', () => {
        advanced.classList.toggle('hidden');
        advIcon.setAttribute('data-lucide', advanced.classList.contains('hidden') ? 'chevron-down' : 'chevron-up');
        lucide.createIcons();
      });

      // Reference toggle (tabs)
      document.querySelectorAll('.ref-btn').forEach(b => {
        b.addEventListener('click', () => {
          document.querySelectorAll('.ref-btn').forEach(x => {
            x.classList.remove('text-emerald-300');
            x.classList.add('text-neutral-400');
            const ul = x.querySelector('span');
            if (ul) ul.remove();
          });
          b.classList.remove('text-neutral-400');
          b.classList.add('text-emerald-300');
          const underline = document.createElement('span');
          underline.className = 'absolute left-3 right-3 -bottom-[1px] h-0.5 bg-emerald-400 rounded-full';
          b.appendChild(underline);
        });
      });

      // Auto-fill lower/upper around last price
      autoFill.addEventListener('click', () => {
        const spreadPct = 4 + Math.random() * 6; // 4–10%
        const spread = last * (spreadPct / 100);
        const low = Math.max(0, last - spread);
        const high = last + spread;
        lower.value = low.toFixed(2);
        upper.value = high.toFixed(2);
        computeProfit();
      });

      // Amount slider <-> input sync
      const syncFromRange = () => {
        const pct = Number(amountRange.value);
        const amt = (availableBalance * pct) / 100;
        amountInput.value = amt.toFixed(2);
        allocPct.textContent = pct + '%';
      };
      const syncFromInput = () => {
        const val = Math.max(0, Number(amountInput.value || 0));
        const pct = Math.min(100, Math.round((val / availableBalance) * 100));
        amountRange.value = isFinite(pct) ? pct : 0;
        allocPct.textContent = (isFinite(pct) ? pct : 0) + '%';
      };
      amountRange.addEventListener('input', syncFromRange);
      amountInput.addEventListener('input', syncFromInput);
      syncFromRange();

      // Profit per grid estimate
      function computeProfit() {
        const lo = Number(lower.value);
        const hi = Number(upper.value);
        const n = Number(grids.value);
        if (!lo || !hi || !n || n < 2 || hi <= lo) {
          profitPerGrid.textContent = 'Profit per grid —';
          return;
        }
        const step = (hi - lo) / (n - 1);
        const pct = (step / ((hi + lo) / 2)) * 100; // approx around mid price
        profitPerGrid.innerHTML = 'Profit per grid <span class="text-emerald-300">' + pct.toFixed(2) + '%</span> <span class="text-neutral-500">(~' + step.toFixed(2) + ' USDT)</span>';
      }
      [lower, upper, grids].forEach(i => i.addEventListener('input', computeProfit));

      // Create action
      document.getElementById('createBtn').addEventListener('click', () => {
        // Simple toast
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm rounded-xl border border-white/10 bg-neutral-900/95 shadow-xl px-4 py-3 flex items-center gap-3';
        toast.innerHTML = '<i data-lucide="check-circle" class="h-5 w-5 text-emerald-300"></i><div class="text-sm">Grid created (demo). This is a visual prototype.</div>';
        document.body.appendChild(toast);
        lucide.createIcons();
        setTimeout(() => toast.remove(), 3500);
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
      
<main className="flex items-start justify-center p-4 sm:p-6">
<section className="w-full max-w-sm sm:max-w-[560px]">

<div className="relative rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur shadow-2xl overflow-hidden">

<header className="px-4 py-4 sm:py-5 flex items-center justify-between">
<div className="flex items-center gap-3">
<button aria-label="Back" className="h-11 w-11 min-w-11 flex items-center justify-center rounded-lg border border-white/10 bg-neutral-800/70 hover:bg-neutral-800 active:bg-neutral-800/80 transition">
<i className="h-5 w-5 text-neutral-300" data-lucide="chevron-left"></i>
</button>
<div>
<h1 className="text-[22px] sm:text-2xl font-semibold tracking-tight leading-tight">Spot grid</h1>
<p className="text-sm text-neutral-500">Configure a manual grid strategy</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 h-11 px-3 rounded-lg border border-white/10 bg-neutral-800/70 hover:bg-neutral-800 active:bg-neutral-800/80 transition text-sm text-neutral-300">
<i className="h-4 w-4" data-lucide="book-open"></i>
                Quick guide
              </button>
<button aria-label="More" className="h-11 w-11 min-w-11 flex items-center justify-center rounded-lg border border-white/10 bg-neutral-800/70 hover:bg-neutral-800 active:bg-neutral-800/80 transition">
<i className="h-5 w-5 text-neutral-300" data-lucide="more-horizontal"></i>
</button>
</div>
</header>

<div className="px-4">
<div className="grid grid-cols-2 rounded-lg border border-white/10 bg-neutral-800/70 p-1">
<button className="h-11 rounded-md text-sm text-neutral-400 hover:text-neutral-200 transition" id="tab-ai">AI strategies</button>
<button className="relative h-11 rounded-md text-sm text-emerald-300" id="tab-manual">
                Manual
                <span className="absolute left-3 right-3 -bottom-[1px] h-0.5 bg-emerald-400 rounded-full"></span>
</button>
</div>
</div>

<form className="px-4 pt-4 sm:pt-6 pb-28 space-y-5 sm:space-y-6" id="gridForm">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg overflow-hidden ring-1 ring-white/10">
<img alt="Asset" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=200&auto=format&fit=crop" />
</div>
<div className="leading-tight">
<p className="text-sm font-medium tracking-tight">BTC / USDT</p>
<p className="text-xs text-neutral-500">Last price <span className="text-neutral-300" id="lastPrice">—</span></p>
</div>
</div>
<button className="inline-flex items-center gap-2 h-10 px-3 rounded-lg border border-white/10 bg-neutral-800/70 hover:bg-neutral-800 active:bg-neutral-800/80 transition text-sm text-neutral-300" type="button">
<i className="h-4 w-4" data-lucide="refresh-cw"></i>
                Sync
              </button>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between">
<label className="text-sm font-medium tracking-tight">Price range (USDT)</label>
<button className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-200 transition" id="autoFill" type="button">
<i className="h-4 w-4" data-lucide="sparkles"></i>
                  AI auto-fill
                </button>
</div>
<div className="flex items-center gap-2">
<div className="relative flex-1">
<input className="w-full h-11 rounded-lg bg-neutral-800/80 border border-white/10 px-3.5 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20" id="lower" inputmode="decimal" placeholder="Lower limit" type="number" />
<span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs text-neutral-500">USDT</span>
</div>
<span className="text-neutral-500 select-none px-1">—</span>
<div className="relative flex-1">
<input className="w-full h-11 rounded-lg bg-neutral-800/80 border border-white/10 px-3.5 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20" id="upper" inputmode="decimal" placeholder="Upper limit" type="number" />
<span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs text-neutral-500">USDT</span>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium tracking-tight">Grid quantity <span className="text-neutral-500">(2–500)</span></label>
<div className="relative">
<input className="w-full h-11 rounded-lg bg-neutral-800/80 border border-white/10 px-3.5 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20" id="grids" max="500" min="2" placeholder="2 - 500" step="1" type="number" />
<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500">steps</div>
</div>
<p className="text-xs text-neutral-400" id="profitPerGrid">
                Profit per grid — 
              </p>
</div>

<div className="space-y-3">
<label className="text-sm font-medium tracking-tight">Investment amount</label>
<div className="relative">
<input className="w-full h-12 rounded-lg bg-neutral-800/80 border border-white/10 pr-24 pl-3.5 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20" id="amount" min="0" placeholder="≥ 0" step="0.01" type="number" />

<div className="absolute right-1.5 top-1/2 -translate-y-1/2">
<button className="inline-flex items-center gap-1 h-9 px-3 rounded-md border border-white/10 bg-neutral-800 hover:bg-neutral-800/90 active:bg-neutral-800/80 transition text-sm text-neutral-200" id="currencyBtn" type="button">
<span id="currencyLabel">USDT</span>
<i className="h-4 w-4 text-neutral-400" data-lucide="chevron-down"></i>
</button>
</div>

<div className="hidden absolute right-1.5 top-[52px] z-20 w-36 rounded-lg border border-white/10 bg-neutral-900 shadow-xl" id="currencyMenu">
<button className="w-full text-left px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800" data-currency="USDT">USDT</button>
<button className="w-full text-left px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800" data-currency="USD">USD</button>
<button className="w-full text-left px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800" data-currency="BTC">BTC</button>
</div>
</div>

<div className="px-0">
<div className="relative">
<input className="w-full accent-emerald-400" id="amountRange" max="100" min="0" step="1" type="range" value="0" />

<div className="mt-2 grid grid-cols-5 text-[10px] text-neutral-500">
<span className="text-left">0</span>
<span className="text-center">25</span>
<span className="text-center">50</span>
<span className="text-center">75</span>
<span className="text-right">100%</span>
</div>
</div>
<div className="mt-1.5 flex items-center justify-between text-xs text-neutral-400">
<div className="flex items-center gap-2">
<div className="h-4 w-4 rounded-[6px] border border-white/10 bg-neutral-800/90 flex items-center justify-center">
<i className="h-2.5 w-2.5 text-emerald-300" data-lucide="circle"></i>
</div>
<span>Allocation <span className="text-neutral-300" id="allocPct">0%</span></span>
</div>
<div className="flex items-center gap-1">
                    Available <span className="text-neutral-300" id="available">0.00</span> <span id="availCur">USDT</span>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<p className="text-xs text-neutral-500">Min order amount is determined by the exchange.</p>
</div>
</div>

<div className="pt-2">
<button className="w-full flex items-center justify-between h-11 px-3 rounded-lg border border-white/10 bg-neutral-800/70 hover:bg-neutral-800 active:bg-neutral-800/80 transition" id="advToggle" type="button">
<span className="text-sm font-medium tracking-tight">Advanced settings</span>
<i className="h-4 w-4 text-neutral-400" data-lucide="chevron-down" id="advIcon"></i>
</button>
<div className="hidden mt-3 space-y-4" id="advanced">

<div className="space-y-2">
<label className="text-sm text-neutral-400">Reference price</label>
<div className="grid grid-cols-2 rounded-lg border border-white/10 bg-neutral-800/70 p-1">
<button className="ref-btn h-10 rounded-md text-sm text-emerald-300 relative" data-ref="last" type="button">
                      Last
                      <span className="absolute left-3 right-3 -bottom-[1px] h-0.5 bg-emerald-400 rounded-full"></span>
</button>
<button className="ref-btn h-10 rounded-md text-sm text-neutral-400 hover:text-neutral-200" data-ref="mark" type="button">Mark</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="space-y-2">
<label className="text-sm text-neutral-400">Take-profit price</label>
<input className="w-full h-11 rounded-lg bg-neutral-800/80 border border-white/10 px-3.5 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20" id="tp" inputmode="decimal" placeholder="Optional" type="number" />
</div>
<div className="space-y-2">
<label className="text-sm text-neutral-400">Stop-loss price</label>
<input className="w-full h-11 rounded-lg bg-neutral-800/80 border border-white/10 px-3.5 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20" id="sl" inputmode="decimal" placeholder="Optional" type="number" />
</div>
</div>

<div className="flex items-center gap-2">
<input className="peer h-5 w-5 rounded-[6px] border border-white/10 bg-neutral-800 appearance-none grid place-content-center transition focus:outline-none focus:ring-2 focus:ring-white/20" id="postOnly" type="checkbox" />
<svg className="pointer-events-none absolute h-5 w-5 opacity-0 peer-checked:opacity-100 transition" fill="none" viewBox="0 0 24 24">
<path d="M5 12l4 4L19 7" stroke="rgb(110,231,183)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm text-neutral-300">Post-only</span>
</div>
</div>
</div>
</form>

<div className="pointer-events-none absolute inset-x-0 bottom-0">
<div className="h-10 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
</div>
<div className="sticky bottom-0 bg-neutral-900/80 backdrop-blur border-t border-white/10 px-4 py-3 sm:py-4">
<div className="flex items-center gap-3">
<button className="h-11 flex-1 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/30 transition text-sm font-medium" id="createBtn" type="button">
                Create
              </button>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
