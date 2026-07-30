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



    // State
    const state = {
      side: 'long',
      leverage: 25,
      sizePct: 0,
      orderType: 'Market',
      asset: 'ETH',
      price: { ETH: 3200, BTC: 63500, SOL: 180 }, // mock prices
      balanceUSD: 91477.91
    };

    // Elements
    const btnLong = document.getElementById('btnLong');
    const btnShort = document.getElementById('btnShort');
    const levBtn = document.getElementById('levBtn');
    const levPopover = document.getElementById('levPopover');
    const levSlider = document.getElementById('levSlider');
    const levValue = document.getElementById('levValue');
    const levInc = document.getElementById('levInc');
    const levDec = document.getElementById('levDec');

    const sizeRange = document.getElementById('sizeRange');
    const pctInput = document.getElementById('pctInput');

    const placeOrder = document.getElementById('placeOrder');

    const orderValue = document.getElementById('orderValue');
    const marginReq = document.getElementById('marginReq');
    const slipEst = document.getElementById('slipEst');

    // Dropdowns
    const marginBtn = document.getElementById('marginBtn');
    const marginMenu = document.getElementById('marginMenu');
    const marginLabel = document.getElementById('marginLabel');

    const posModeBtn = document.getElementById('posModeBtn');
    const posModeMenu = document.getElementById('posModeMenu');
    const posModeLabel = document.getElementById('posModeLabel');

    const assetBtn = document.getElementById('assetBtn');
    const assetMenu = document.getElementById('assetMenu');
    const assetLabel = document.getElementById('assetLabel');

    // Toast
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toastTitle');
    const toastMsg = document.getElementById('toastMsg');
    const toastClose = document.getElementById('toastClose');

    // Order type tabs
    document.querySelectorAll('.order-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.order-tab').forEach(t => {
          t.classList.remove('text-emerald-300');
          t.classList.add('text-neutral-400');
          t.querySelector('.absolute')?.remove();
        });
        tab.classList.remove('text-neutral-400');
        tab.classList.add('text-emerald-300');
        const underline = document.createElement('span');
        underline.className = 'absolute -bottom-[1px] left-0 right-0 h-0.5 bg-emerald-400';
        tab.appendChild(underline);
        state.orderType = tab.dataset.ordertype;
      });
    });

    // Side switch
    function setSide(side) {
      state.side = side;
      if (side === 'long') {
        btnLong.className = 'rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300 hover:bg-emerald-500/15 focus:outline-none tracking-tight';
        btnShort.className = 'rounded-lg border border-rose-500/20 bg-neutral-800 px-3 py-2 text-sm text-rose-300 hover:bg-rose-500/10 focus:outline-none tracking-tight';
        placeOrder.className = 'w-full rounded-xl border border-emerald-500/30 bg-emerald-500/15 py-3 text-sm text-emerald-300 transition disabled:cursor-not-allowed disabled:opacity-60';
      } else {
        btnShort.className = 'rounded-lg border border-rose-500/20 bg-rose-500/10 px-3 py-2 text-sm text-rose-300 hover:bg-rose-500/15 focus:outline-none tracking-tight';
        btnLong.className = 'rounded-lg border border-emerald-500/20 bg-neutral-800 px-3 py-2 text-sm text-emerald-300 hover:bg-emerald-500/10 focus:outline-none tracking-tight';
        placeOrder.className = 'w-full rounded-xl border border-rose-500/30 bg-rose-500/15 py-3 text-sm text-rose-300 transition disabled:cursor-not-allowed disabled:opacity-60';
      }
      updateSummaries();
      lucide.createIcons();
    }
    btnLong.addEventListener('click', () => setSide('long'));
    btnShort.addEventListener('click', () => setSide('short'));

    // Leverage
    function setLeverage(v) {
      const val = Math.max(1, Math.min(100, Number(v)));
      state.leverage = val;
      levValue.textContent = val;
      levSlider.value = val;
      updateSummaries();
    }
    levBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      levPopover.classList.toggle('hidden');
    });
    levInc.addEventListener('click', () => setLeverage(state.leverage + 1));
    levDec.addEventListener('click', () => setLeverage(state.leverage - 1));
    levSlider.addEventListener('input', (e) => setLeverage(e.target.value));
    document.addEventListener('click', (e) => {
      if (!levPopover.contains(e.target) && e.target !== levBtn) levPopover.classList.add('hidden');
      if (!marginMenu.contains(e.target) && e.target !== marginBtn) marginMenu.classList.add('hidden');
      if (!posModeMenu.contains(e.target) && e.target !== posModeBtn) posModeMenu.classList.add('hidden');
      if (!assetMenu.contains(e.target) && e.target !== assetBtn) assetMenu.classList.add('hidden');
    });

    // Size
    function setSizePct(p) {
      const v = Math.max(0, Math.min(100, Number(p)));
      state.sizePct = v;
      sizeRange.value = v;
      pctInput.value = v;
      updateSummaries();
    }
    sizeRange.addEventListener('input', (e) => setSizePct(e.target.value));
    pctInput.addEventListener('input', (e) => setSizePct(e.target.value));

    // Dropdown wiring helper
    function wireMenu(button, menu, labelEl, cb) {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('hidden');
      });
      menu.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', () => {
          const val = item.dataset.value;
          labelEl.textContent = val;
          menu.classList.add('hidden');
          cb?.(val);
        });
      });
    }
    wireMenu(marginBtn, marginMenu, marginLabel, () => {});
    wireMenu(posModeBtn, posModeMenu, posModeLabel, () => {});
    wireMenu(assetBtn, assetMenu, assetLabel, (val) => {
      state.asset = val;
      updateSummaries();
    });

    // Calculations
    function updateSummaries() {
      const notionalUSD = state.balanceUSD * (state.sizePct / 100);
      const price = state.price[state.asset] || 1;
      const qty = notionalUSD / price;
      const valueStr = state.sizePct === 0 ? 'N/A' : `${qty.toFixed(4)} ${state.asset}`;
      orderValue.textContent = valueStr;

      const margin = state.sizePct === 0 ? 0 : (notionalUSD / state.leverage);
      marginReq.textContent = state.sizePct === 0 ? 'N/A' : `$${margin.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

      // Simple slippage model: 0.02% per 10% size, capped at 0.8%
      const slip = Math.min(0.8, (state.sizePct / 10) * 0.02);
      slipEst.textContent = `Est: ${slip.toFixed(2)}%`;

      placeOrder.disabled = state.sizePct === 0;

      // Update place order text
      placeOrder.textContent = state.side === 'long' ? 'Place Long Order' : 'Place Short Order';
    }
    updateSummaries();

    // Place Order
    placeOrder.addEventListener('click', () => {
      toastTitle.textContent = 'Order Submitted';
      toastMsg.textContent = `${state.orderType} ${state.side === 'long' ? 'Long' : 'Short'} • ${pctInput.value}% of balance at ${state.leverage}x on ${state.asset}`;
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 3500);
    });
    toastClose.addEventListener('click', () => toast.classList.add('hidden'));

    // Icons
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
      
<div className="mx-auto max-w-sm sm:max-w-md px-4 py-6 sm:py-10">
<div className="rounded-2xl border border-white/10 bg-neutral-900/70 shadow-2xl backdrop-blur">

<div className="flex gap-2 px-4 pt-4">

<div className="relative">
<button className="flex items-center gap-2 rounded-lg border border-white/10 bg-neutral-800/70 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-800 focus:outline-none" id="marginBtn">
<i className="h-4 w-4 text-neutral-300" data-lucide="shuffle"></i>
<span className="tracking-tight" id="marginLabel">Cross</span>
<i className="h-4 w-4 text-neutral-400" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-1 w-36 overflow-hidden rounded-lg border border-white/10 bg-neutral-900 shadow-xl" id="marginMenu">
<button className="w-full px-3 py-2 text-left text-sm hover:bg-neutral-800" data-value="Cross">Cross</button>
<button className="w-full px-3 py-2 text-left text-sm hover:bg-neutral-800" data-value="Isolated">Isolated</button>
</div>
</div>

<div className="relative flex-1">
<button className="flex w-full items-center justify-between gap-2 rounded-lg border border-emerald-500/20 bg-neutral-800/70 px-3 py-2 text-sm text-emerald-300 hover:bg-neutral-800 focus:outline-none" id="levBtn">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="activity"></i>
<span className="tracking-tight"><span id="levValue">25</span>x</span>
</div>
<i className="h-4 w-4 text-neutral-400" data-lucide="chevron-down"></i>
</button>

<div className="hidden absolute left-0 right-0 z-20 mt-2 rounded-xl border border-white/10 bg-neutral-900 p-4 shadow-2xl" id="levPopover">
<div className="mb-3 flex items-center justify-between">
<span className="text-sm text-neutral-300">Adjust Leverage</span>
<span className="text-sm text-neutral-400">1x–100x</span>
</div>
<div className="flex items-center gap-3">
<button className="rounded-lg border border-white/10 bg-neutral-800 px-2 py-1 text-neutral-300 hover:bg-neutral-700" id="levDec">
<i className="h-4 w-4" data-lucide="minus"></i>
</button>
<input className="w-full accent-emerald-400" id="levSlider" max="100" min="1" type="range" value="25" />
<button className="rounded-lg border border-white/10 bg-neutral-800 px-2 py-1 text-neutral-300 hover:bg-neutral-700" id="levInc">
<i className="h-4 w-4" data-lucide="plus"></i>
</button>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
<span>Maintenance ↑ with higher leverage</span>
<span>Auto-deleverage risk</span>
</div>
</div>
</div>

<div className="relative">
<button className="flex items-center gap-2 rounded-lg border border-white/10 bg-neutral-800/70 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-800 focus:outline-none" id="posModeBtn">
<i className="h-4 w-4" data-lucide="git-branch"></i>
<span className="tracking-tight" id="posModeLabel">One-Way</span>
<i className="h-4 w-4 text-neutral-400" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 z-20 mt-1 w-36 overflow-hidden rounded-lg border border-white/10 bg-neutral-900 shadow-xl" id="posModeMenu">
<button className="w-full px-3 py-2 text-left text-sm hover:bg-neutral-800" data-value="One-Way">One-Way</button>
<button className="w-full px-3 py-2 text-left text-sm hover:bg-neutral-800" data-value="Hedge">Hedge</button>
</div>
</div>
</div>

<div className="px-4 pt-4">
<div className="flex gap-6 border-b border-white/10">
<button className="order-tab relative pb-3 text-sm text-emerald-300" data-ordertype="Market">
            Market
            <span className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-emerald-400"></span>
</button>
<button className="order-tab pb-3 text-sm text-neutral-400 hover:text-neutral-200" data-ordertype="Limit">Limit</button>
<button className="order-tab pb-3 text-sm text-neutral-400 hover:text-neutral-200" data-ordertype="Pro">Pro</button>
</div>
</div>

<div className="px-4 pt-4">
<div className="grid grid-cols-2 gap-2">
<button className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300 hover:bg-emerald-500/15 focus:outline-none tracking-tight" id="btnLong">Buy / Long</button>
<button className="rounded-lg border border-rose-500/20 bg-neutral-800 px-3 py-2 text-sm text-rose-300 hover:bg-rose-500/10 focus:outline-none tracking-tight" id="btnShort">Sell / Short</button>
</div>
</div>

<div className="px-4 pt-4">
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-400">Available to Trade</span>
<span className="text-neutral-100 tracking-tight" id="avail">63,547.14</span>
</div>
<div className="mt-1 flex items-center justify-between text-sm">
<span className="text-neutral-400">Current Position</span>
<span className="text-neutral-200 tracking-tight">0.0000 ETH</span>
</div>
</div>

<div className="px-4 pt-4">
<div className="flex items-center justify-between">
<label className="text-sm text-neutral-300">Size</label>
<div className="relative">
<button className="flex items-center gap-1 rounded-lg border border-white/10 bg-neutral-800 px-2 py-1 text-xs text-neutral-200 hover:bg-neutral-700" id="assetBtn">
<span className="tracking-tight" id="assetLabel">ETH</span>
<i className="h-3.5 w-3.5 text-neutral-400" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 z-20 mt-1 w-28 overflow-hidden rounded-lg border border-white/10 bg-neutral-900 shadow-xl" id="assetMenu">
<button className="flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-neutral-800" data-value="ETH">
<span>ETH</span><span className="text-xs text-neutral-500">Perp</span>
</button>
<button className="flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-neutral-800" data-value="BTC">
<span>BTC</span><span className="text-xs text-neutral-500">Perp</span>
</button>
<button className="flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-neutral-800" data-value="SOL">
<span>SOL</span><span className="text-xs text-neutral-500">Perp</span>
</button>
</div>
</div>
</div>

<div className="mt-3">
<div className="flex items-center gap-3">
<input className="w-full accent-emerald-400" id="sizeRange" max="100" min="0" step="1" type="range" value="0" />
<div className="relative">
<input className="w-16 rounded-md border border-white/10 bg-neutral-800 px-2 py-1 text-sm text-neutral-100 focus:outline-none" id="pctInput" max="100" min="0" type="number" value="0" />
<span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs text-neutral-400">%</span>
</div>
</div>
<div className="mt-2 flex justify-between text-[10px] text-neutral-500">
<span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
</div>
</div>
</div>

<div className="px-4 pt-4">
<div className="grid gap-2">

<label className="group flex cursor-pointer items-center gap-3">
<span className="relative inline-flex h-4 w-4 items-center justify-center">
<input className="peer absolute h-4 w-4 cursor-pointer opacity-0" id="reduceOnly" type="checkbox" />
<span className="h-4 w-4 rounded-[6px] border border-white/10 bg-neutral-800 transition peer-checked:border-emerald-400/30 peer-checked:bg-emerald-500/20"></span>
<i className="pointer-events-none absolute h-3 w-3 text-emerald-300 opacity-0 transition peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-neutral-300">Reduce Only</span>
</label>

<label className="group flex cursor-pointer items-center gap-3">
<span className="relative inline-flex h-4 w-4 items-center justify-center">
<input className="peer absolute h-4 w-4 cursor-pointer opacity-0" id="tpsl" type="checkbox" />
<span className="h-4 w-4 rounded-[6px] border border-white/10 bg-neutral-800 transition peer-checked:border-emerald-400/30 peer-checked:bg-emerald-500/20"></span>
<i className="pointer-events-none absolute h-3 w-3 text-emerald-300 opacity-0 transition peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-neutral-300">Take Profit / Stop Loss</span>
</label>
</div>
</div>

<div className="px-4 pt-4">
<button className="w-full rounded-xl border border-white/10 bg-neutral-800 py-3 text-sm text-neutral-400 transition disabled:cursor-not-allowed disabled:opacity-60" disabled id="placeOrder">
          Place Order
        </button>
</div>

<div className="px-4 pb-4 pt-4">
<div className="space-y-2 text-sm">
<div className="flex items-center justify-between">
<button className="text-neutral-400 hover:text-neutral-200 underline-offset-2 hover:underline">Liquidation Price</button>
<span className="text-neutral-300">N/A</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-400">Order Value</span>
<span className="text-neutral-200" id="orderValue">N/A</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-400">Margin Required</span>
<span className="text-neutral-200" id="marginReq">N/A</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-400">Slippage</span>
<span className="text-neutral-200">
<span className="text-emerald-300" id="slipEst">Est: 0%</span>
<span className="text-neutral-500"> / Max: 0.80%</span>
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-400">Fees</span>
<span className="text-neutral-200"><span id="makerFee">0.0427%</span> / <span id="takerFee">0.0142%</span></span>
</div>
</div>
</div>

<div className="px-4 pb-4">
<div className="grid grid-cols-3 gap-2">
<button className="col-span-2 flex items-center justify-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/15 px-3 py-2 text-sm text-emerald-300 hover:bg-emerald-500/20">
<i className="h-4 w-4" data-lucide="wallet"></i>
            Deposit
          </button>
<button className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-800">
<i className="h-4 w-4" data-lucide="arrow-up-right"></i>
            Withdraw
          </button>
</div>
</div>

<div className="px-4 pb-5">
<div className="space-y-1 text-sm">
<div className="flex items-center justify-between">
<span className="text-neutral-400">Account Equity</span>
<span className="text-neutral-200">$91,477.91</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-400">Unrealized PnL</span>
<span className="text-emerald-300">+$1,680.96</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-400">Cross Margin Ratio</span>
<span className="text-emerald-300">15.27%</span>
</div>
</div>
</div>
</div>

<div className="pointer-events-none fixed bottom-4 right-4 z-50 hidden w-[90%] max-w-xs rounded-xl border border-white/10 bg-neutral-900/95 p-3 text-sm shadow-2xl" id="toast">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-emerald-400" data-lucide="check-circle-2"></i>
<div className="flex-1">
<div className="font-medium tracking-tight text-neutral-100" id="toastTitle">Order Placed</div>
<div className="text-neutral-400" id="toastMsg">Your order has been submitted.</div>
</div>
<button className="text-neutral-400 hover:text-neutral-200" id="toastClose">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
</div>
</div>


    </>
  );
}
