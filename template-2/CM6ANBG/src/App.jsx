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
      
    // Icon render
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide && lucide.createIcons) lucide.createIcons();
    });

    // Helpers
    const $ = (s, root = document) => root.querySelector(s);
    const $$ = (s, root = document) => [...root.querySelectorAll(s)];
    const fmt = (n, d = 2) => Number(n).toLocaleString(undefined, { minimumFractionDigits: d, maximumFractionDigits: d });

    const state = {
      tab: 'trade',
      orderType: 'Market',
      proType: null,
      side: 'long',
      asset: 'ETH',
      prices: { ETH: 3500, BTC: 65000, SOL: 150 },
      leverage: 20,
      reduceOnly: false,
      // grid
      grid: {
        active: false,
        context: 'Futures Grid',
        side: 'long',
        gm: 'Arithmetic',
        start: 'Instant',
        lev: 10,
        lower: 52000,
        upper: 60000,
        qty: 25,
        margin: 250,
        reserved: false
      }
    };

    // Tabs: Trade / Strategies
    const tradeMode = $('#tradeMode');
    const strategiesMode = $('#strategiesMode');
    const gridSetup = $('#gridSetup');
    const tabSlider = $('#tabSlider');
    $('#tabTrade').addEventListener('click', () => {
      state.tab = 'trade';
      tradeMode.classList.remove('hidden');
      strategiesMode.classList.add('hidden');
      gridSetup.classList.add('hidden');
      tabSlider.style.left = '0.25rem';
    });
    $('#tabStrategies').addEventListener('click', () => {
      state.tab = 'strategies';
      strategiesMode.classList.remove('hidden');
      tradeMode.classList.add('hidden');
      gridSetup.classList.add('hidden');
      tabSlider.style.left = 'calc(50% + 0.25rem)';
    });

    // Asset dropdown
    const assetBtn = $('#assetBtn');
    const assetMenu = $('#assetMenu');
    assetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      assetMenu.classList.toggle('hidden');
    });
    assetMenu.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-asset]');
      if (!btn) return;
      state.asset = btn.dataset.asset;
      assetBtn.querySelector('span.text-[12px]').textContent = state.asset;
      $('#sizeUnitLabel').textContent = state.asset;
      assetMenu.classList.add('hidden');
      updateSummary();
    });

    // Order type tabs
    const priceField = $('#priceField');
    const priceInput = $('#priceInput');
    const priceHint = $('#priceHint');
    const orderTypeSlider = $('#orderTypeSlider');
    $('#orderMarket').addEventListener('click', () => {
      state.orderType = 'Market'; state.proType = null;
      orderTypeSlider.style.left = '0%';
      $('#orderMarket').classList.remove('text-neutral-400');
      $('#orderLimit').classList.add('text-neutral-400');
      $('#orderPro').classList.add('text-neutral-400');
      disablePrice(true, 'auto for Market');
      updateSummary();
    });
    $('#orderLimit').addEventListener('click', () => {
      state.orderType = 'Limit'; state.proType = null;
      orderTypeSlider.style.left = '33.333%';
      $('#orderMarket').classList.add('text-neutral-400');
      $('#orderLimit').classList.remove('text-neutral-400');
      $('#orderPro').classList.add('text-neutral-400');
      disablePrice(false, 'enter price');
      updateSummary();
    });

    // Pro dropdown
    const proMenu = $('#proMenu');
    $('#orderPro').addEventListener('click', (e) => {
      e.stopPropagation();
      orderTypeSlider.style.left = '66.666%';
      $('#orderMarket').classList.add('text-neutral-400');
      $('#orderLimit').classList.add('text-neutral-400');
      $('#orderPro').classList.remove('text-neutral-400');
      proMenu.classList.toggle('hidden');
    });
    proMenu.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-pro]');
      if (!b) return;
      state.orderType = 'Pro';
      state.proType = b.dataset.pro;
      $('#orderPro span:first-child').textContent = state.proType;
      // Price enable rules
      if (state.proType === 'Stop Limit' || state.proType === 'TWAP' || state.proType === 'Scale') {
        disablePrice(false, 'enter price');
      } else {
        disablePrice(true, 'auto for Stop Market');
      }
      proMenu.classList.add('hidden');
      updateSummary();
    });

    function disablePrice(disabled, hint='') {
      priceInput.disabled = disabled;
      priceField.classList.toggle('opacity-60', disabled);
      priceHint.textContent = hint;
      priceInput.placeholder = disabled ? 'Market' : 'e.g. 3550';
    }

    // Side toggle
    const longBtn = $('#longBtn'), shortBtn = $('#shortBtn'), sideSlider = $('#sideSlider'), placeOrder = $('#placeOrder');
    longBtn.addEventListener('click', () => setSide('long'));
    shortBtn.addEventListener('click', () => setSide('short'));
    function setSide(side) {
      state.side = side;
      if (side === 'long') {
        sideSlider.style.left = '0.25rem';
        sideSlider.style.background = 'rgba(52,211,153,0.18)';
        sideSlider.style.boxShadow = 'inset 0 0 0 1px rgba(110,231,183,0.30)';
        longBtn.classList.remove('opacity-60'); longBtn.classList.add('text-emerald-300');
        shortBtn.classList.add('opacity-60');
        placeOrder.querySelector('span').textContent = 'Place Long';
        placeOrder.style.background = 'linear-gradient(135deg,#A7F3D0 0%, #34D399 45%, #10B981 100%)';
      } else {
        sideSlider.style.left = 'calc(50% + 0.25rem)';
        sideSlider.style.background = 'rgba(244,63,94,0.18)';
        sideSlider.style.boxShadow = 'inset 0 0 0 1px rgba(248,113,113,0.30)';
        shortBtn.classList.remove('opacity-60'); shortBtn.classList.add('text-rose-300');
        longBtn.classList.add('opacity-60');
        placeOrder.querySelector('span').textContent = 'Place Short';
        placeOrder.style.background = 'linear-gradient(135deg,#FECACA 0%, #FB7185 45%, #F43F5E 100%)';
      }
      updateSummary();
    }

    // Reduce Only toggle (turns green when enabled)
    const reduceToggle = $('#reduceToggle');
    const reduceKnob = $('#reduceKnob');
    reduceToggle.addEventListener('click', () => {
      state.reduceOnly = !state.reduceOnly;
      if (state.reduceOnly) {
        reduceToggle.classList.add('ring-emerald-400/40');
        reduceToggle.querySelector('span.relative').classList.add('bg-emerald-400/20', 'ring-emerald-300/40');
        reduceKnob.style.transform = 'translate(12px, -50%)';
        reduceKnob.classList.remove('bg-neutral-300');
        reduceKnob.classList.add('bg-emerald-300');
        reduceToggle.querySelector('span.text-[12px]').classList.add('text-emerald-300');
      } else {
        reduceToggle.classList.remove('ring-emerald-400/40');
        reduceToggle.querySelector('span.relative').classList.remove('bg-emerald-400/20', 'ring-emerald-300/40');
        reduceKnob.style.transform = 'translate(0, -50%)';
        reduceKnob.classList.remove('bg-emerald-300');
        reduceKnob.classList.add('bg-neutral-300');
        reduceToggle.querySelector('span.text-[12px]').classList.remove('text-emerald-300');
      }
    });

    // TP / SL type toggles
    const tpTypeBtn = $('#tpTypeBtn'), slTypeBtn = $('#slTypeBtn');
    tpTypeBtn.addEventListener('click', () => {
      tpTypeBtn.firstChild.textContent = (tpTypeBtn.firstChild.textContent.trim() === 'Gain %') ? 'Price' : 'Gain %';
    });
    slTypeBtn.addEventListener('click', () => {
      slTypeBtn.firstChild.textContent = (slTypeBtn.firstChild.textContent.trim() === 'Loss %') ? 'Price' : 'Loss %';
    });

    // Size controls (% of balance)
    const sizeSlider = $('#sizeSlider');
    const sizeInput = $('#sizeInput');
    const qtyInput = $('#qtyInput');
    function syncPercent(val) {
      val = Math.max(0, Math.min(100, Number(val) || 0));
      sizeSlider.value = val; sizeInput.value = val;
      // Map % of availBalance to qty assuming USDT denom and price
      const avail = parseFloat($('#availBalance').textContent) || 0;
      const px = currentPrice();
      const usd = avail * val / 100;
      const qty = px > 0 ? usd / px : 0;
      qtyInput.value = qty ? qty.toFixed(4) : '';
      updateSummary();
    }
    sizeSlider.addEventListener('input', e => syncPercent(e.target.value));
    sizeInput.addEventListener('input', e => syncPercent(e.target.value));
    qtyInput.addEventListener('input', updateSummary);

    // Price handling
    priceInput.addEventListener('input', updateSummary);

    // Place order enable/summary
    function currentPrice() {
      if (state.orderType === 'Market' || (state.orderType === 'Pro' && state.proType !== 'Stop Limit')) {
        return state.prices[state.asset] || 0;
      }
      const p = Number(priceInput.value);
      return p > 0 ? p : 0;
    }

    function updateSummary() {
      const qty = Number(qtyInput.value) || 0;
      const px = currentPrice();
      const canUsePrice = px > 0;
      const needsPrice = !(state.orderType === 'Market' || (state.orderType === 'Pro' && state.proType !== 'Stop Limit'));
      const canPlace = qty > 0 && (!needsPrice || canUsePrice);
      placeOrder.disabled = !canPlace;
      placeOrder.classList.toggle('opacity-60', !canPlace);
      placeOrder.classList.toggle('cursor-not-allowed', !canPlace);

      if (!canUsePrice || qty <= 0) {
        $('#orderValue').textContent = 'N/A';
        $('#marginRequired').textContent = 'N/A';
        $('#liqPrice').textContent = 'N/A';
        $('#feesValue').textContent = '—';
        return;
      }
      const val = qty * px;
      const lev = state.leverage;
      const margin = val / lev;
      const feeRate = state.orderType === 'Market' ? 0.0005 : 0.0003; // 5/3 bps
      const fees = val * feeRate;

      $('#orderValue').textContent = '$' + fmt(val);
      $('#marginRequired').textContent = '$' + fmt(margin);
      $('#feesValue').textContent = '$' + fmt(fees);

      const liq = (state.side === 'long')
        ? px * (1 - (1 / lev)) * 0.99
        : px * (1 + (1 / lev)) * 1.01;
      $('#liqPrice').textContent = (state.side === 'long' ? '$' : '$') + fmt(liqueSafe(liq));
    }
    function liqueSafe(n){ return isFinite(n) ? n : 0; }

    // Place order click
    placeOrder.addEventListener('click', () => {
      if (placeOrder.disabled) return;
      showToast(`${state.side === 'long' ? 'Long' : 'Short'} ${state.asset} order placed`);
    });

    // Strategies: open Grid setup
    $$('.botBtn').forEach(b => {
      b.addEventListener('click', () => {
        const name = b.dataset.bot;
        if (!name) return;
        state.grid.context = name;
        $('#gridTitle').textContent = name;
        // If Spot strategy, we can reflect title only; keep UI same
        strategiesMode.classList.add('hidden');
        tradeMode.classList.add('hidden');
        gridSetup.classList.remove('hidden');
        state.grid.active = true;
      });
    });
    // Back from grid
    $('#gridBack').addEventListener('click', () => {
      gridSetup.classList.add('hidden');
      strategiesMode.classList.remove('hidden');
      state.grid.active = false;
    });

    // Grid: side toggles
    const gridSideSlider = $('#gridSideSlider');
    const gridLong = $('#gridLong'), gridNeutral = $('#gridNeutral'), gridShort = $('#gridShort');
    gridLong.addEventListener('click', () => gridSetSide('long'));
    gridNeutral.addEventListener('click', () => gridSetSide('neutral'));
    gridShort.addEventListener('click', () => gridSetSide('short'));
    function gridSetSide(s) {
      state.grid.side = s;
      if (s === 'long') gridSideSlider.style.left = '0.25rem';
      if (s === 'neutral') gridSideSlider.style.left = 'calc(33.333% + 0.25rem)';
      if (s === 'short') gridSideSlider.style.left = 'calc(66.666% + 0.25rem)';
      [gridLong, gridNeutral, gridShort].forEach(el => el.classList.add('text-neutral-400'));
      (s === 'long' ? gridLong : s === 'neutral' ? gridNeutral : gridShort).classList.remove('text-neutral-400');
      renderGridPreview();
    }

    // Grid mode
    const gmSliderPerp = $('#gmSliderPerp');
    const gmArithPerp = $('#gmArithPerp');
    const gmGeoPerp = $('#gmGeoPerp');
    gmArithPerp.addEventListener('click', () => {
      gmSliderPerp.style.left = '0.25rem';
      gmArithPerp.classList.remove('text-neutral-400');
      gmGeoPerp.classList.add('text-neutral-400');
      state.grid.gm = 'Arithmetic';
      renderGridPreview();
    });
    gmGeoPerp.addEventListener('click', () => {
      gmSliderPerp.style.left = 'calc(50% + 0.25rem)';
      gmGeoPerp.classList.remove('text-neutral-400');
      gmArithPerp.classList.add('text-neutral-400');
      state.grid.gm = 'Geometric';
      renderGridPreview();
    });

    // Grid start condition
    const startSliderPerp = $('#startSliderPerp');
    const startPriceWrapPerp = $('#startPriceWrapPerp');
    $('#startInstantPerp').addEventListener('click', () => {
      startSliderPerp.style.left = '0.25rem';
      $('#startInstantPerp').classList.remove('text-neutral-400');
      $('#startPricePerp').classList.add('text-neutral-400');
      startPriceWrapPerp.classList.add('hidden');
      state.grid.start = 'Instant';
    });
    $('#startPricePerp').addEventListener('click', () => {
      startSliderPerp.style.left = 'calc(50% + 0.25rem)';
      $('#startPricePerp').classList.remove('text-neutral-400');
      $('#startInstantPerp').classList.add('text-neutral-400');
      startPriceWrapPerp.classList.remove('hidden');
      state.grid.start = 'Price';
    });
    $('#startPriceInputPerp').addEventListener('input', (e) => {
      const v = Number(e.target.value) || 0;
      // no-op placeholder
    });

    // Grid inputs
    const lowerPrice = $('#lowerPrice');
    const upperPrice = $('#upperPrice');
    const gridQty = $('#gridQty'), gridQtyInput = $('#gridQtyInput');
    const marginSlider = $('#marginSlider'), marginInput = $('#marginInput');
    const gridLevVal = $('#gridLevVal');

    function syncGridQty(v) {
      v = Math.max(2, Math.min(500, Math.round(Number(v) || 2)));
      gridQty.value = v; gridQtyInput.value = v;
      state.grid.qty = v;
      renderGridPreview();
    }
    gridQty.addEventListener('input', e => syncGridQty(e.target.value));
    gridQtyInput.addEventListener('input', e => syncGridQty(e.target.value));

    function syncGridPrices() {
      const lo = Number(lowerPrice.value) || 0;
      const hi = Number(upperPrice.value) || 0;
      state.grid.lower = lo; state.grid.upper = hi;
      renderGridPreview();
    }
    lowerPrice.addEventListener('input', syncGridPrices);
    upperPrice.addEventListener('input', syncGridPrices);

    function syncMargin(v) {
      v = Math.max(0, Math.min(2829, Number(v) || 0));
      marginSlider.value = v; marginInput.value = v;
      state.grid.margin = v;
      $('#gridAlloc').textContent = '$' + fmt(v);
      renderGridPreview();
    }
    marginSlider.addEventListener('input', e => syncMargin(e.target.value));
    marginInput.addEventListener('input', e => syncMargin(e.target.value));

    $('#reservedToggle').addEventListener('change', (e) => {
      state.grid.reserved = e.target.checked;
      showToast(`Reserved Margin ${e.target.checked ? 'enabled' : 'disabled'}`);
    });

    // Grid Leverage open uses shared modal
    const levModal = $('#levModal');
    let levTarget = 'trade'; // 'trade' | 'grid'
    $('#leverageOpen').addEventListener('click', () => openLev('trade', state.leverage));
    $('#gridLevOpen').addEventListener('click', () => openLev('grid', state.grid.lev));

    function openLev(target, value) {
      levTarget = target;
      $('#levContext').textContent = 'Applies to: ' + (target === 'trade' ? 'Trade' : 'Grid Bot');
      $('#levRange').value = value;
      $('#levInput').value = value;
      $('#levValueLabel').textContent = value + 'x';
      levModal.classList.remove('hidden');
      levModal.classList.add('flex');
    }
    function closeLev() {
      levModal.classList.add('hidden');
      levModal.classList.remove('flex');
    }
    $$('[data-close="lev"]').forEach(b => b.addEventListener('click', closeLev));
    $('#levRange').addEventListener('input', (e) => {
      $('#levInput').value = e.target.value;
      $('#levValueLabel').textContent = e.target.value + 'x';
    });
    $('#levInput').addEventListener('input', (e) => {
      let v = Math.max(1, Math.min(50, Math.round(Number(e.target.value) || 1)));
      e.target.value = v;
      $('#levRange').value = v;
      $('#levValueLabel').textContent = v + 'x';
    });
    $$('.levQuick').forEach(b => b.addEventListener('click', () => {
      const v = Number(b.dataset.lev);
      $('#levRange').value = v; $('#levInput').value = v; $('#levValueLabel').textContent = v + 'x';
    }));
    $('#levApply').addEventListener('click', () => {
      const v = Number($('#levInput').value) || 1;
      if (levTarget === 'trade') {
        state.leverage = v;
        $('#leverageLabel').textContent = v + 'x';
      } else {
        state.grid.lev = v;
        $('#gridLevLabel').textContent = v + 'x';
        $('#gridLevVal').textContent = v + 'x';
        renderGridPreview();
      }
      closeLev();
      showToast('Leverage set to ' + v + 'x');
      updateSummary();
    });

    // Grid preview + stats
    function renderGridPreview() {
      const wrap = $('#previewBars');
      wrap.innerHTML = '';
      const lo = state.grid.lower, hi = state.grid.upper;
      const qty = state.grid.qty;
      if (!(hi > lo) || qty < 2) return;
      const range = hi - lo;
      const bars = qty;
      for (let i = 0; i < bars; i++) {
        // Height proportional across range + tiny randomness
        const t = i / (bars - 1);
        const h = 10 + Math.floor(70 * (state.grid.gm === 'Geometric' ? Math.pow(t, 0.85) : t)) + (i % 3 === 0 ? 4 : 0);
        const bar = document.createElement('div');
        bar.className = 'flex-1 rounded-[1px]';
        bar.style.height = h + '%';
        bar.style.background = 'linear-gradient(180deg, rgba(110,231,183,0.9), rgba(52,211,153,0.35))';
        bar.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.06) inset';
        wrap.appendChild(bar);
      }
      // Stats
      const stepAbs = range / (qty - 1);
      const stepPct = state.grid.gm === 'Geometric'
        ? (Math.pow(hi / lo, 1 / (qty - 1)) - 1) * 100
        : (stepAbs / ((lo + hi) / 2)) * 100;
      $('#gridStep').textContent = (state.grid.gm === 'Geometric' ? '' : '$') + (state.grid.gm === 'Geometric' ? fmt(stepPct, 2) + '%' : fmt(stepAbs, 2));
      const estDaily = Math.max(0.05, Math.min(2.5, stepPct * 0.2)); // rough
      $('#estDaily').textContent = fmt(estDaily, 2) + '%';
      $('#estAPR').textContent = fmt(estDaily * 365, 1) + '%';
      $('#gridsFilled').textContent = '0/' + qty;
      // Order size + fees
      const alloc = state.grid.margin * (state.grid.lev || 1);
      const perOrder = alloc / qty;
      $('#gridOrderSize').textContent = '$' + fmt(perOrder);
      const feeRate = 0.00035;
      $('#gridFees').textContent = '$' + fmt(perOrder * feeRate * qty);
      // Funding
      $('#gridFunding').textContent = state.grid.side === 'neutral' ? 'Neutral' : (stepPct < 0.5 ? 'Low' : 'Medium');
    }
    renderGridPreview();

    // Start grid
    $('#startGrid').addEventListener('click', () => {
      showToast(`${state.grid.context} started with ${state.grid.qty} grids`);
    });

    // Leverage open outside click close
    document.addEventListener('click', (e) => {
      // Close dropdowns when clicking outside
      if (!assetBtn.contains(e.target) && !assetMenu.contains(e.target)) assetMenu.classList.add('hidden');
      if (!$('#orderPro').contains(e.target) && !proMenu.contains(e.target)) proMenu.classList.add('hidden');
      if (levModal.classList.contains('flex') && e.target.dataset.close === 'lev') closeLev();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        assetMenu.classList.add('hidden');
        proMenu.classList.add('hidden');
        if (levModal.classList.contains('flex')) closeLev();
      }
    });

    // Leverage main label initial
    $('#leverageLabel').textContent = state.leverage + 'x';

    // Price hint initial
    disablePrice(true, 'auto for Market');

    // Toast
    let toastTO = null;
    function showToast(msg) {
      const t = $('#toast');
      $('#toastMsg').textContent = msg;
      t.classList.remove('hidden');
      if (toastTO) clearTimeout(toastTO);
      toastTO = setTimeout(() => t.classList.add('hidden'), 2200);
    }

    // Initial compute
    updateSummary();
  
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
      
<main className="mx-auto w-full max-w-[440px] px-3 py-4 sm:px-4 sm:py-6">
<section className="relative rounded-2xl bg-[rgba(8,10,14,0.72)] ring-1 ring-white/10 backdrop-blur-xl shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)] overflow-hidden">

<header className="relative px-3 py-3 sm:px-4 sm:py-3.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md bg-gradient-to-br from-emerald-400/40 to-emerald-300/20 ring-1 ring-white/15 flex items-center justify-center">
<svg className="lucide lucide-sparkles w-4 h-4 text-emerald-200" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h1 className="text-[16px] sm:text-[17px] font-semibold tracking-tight">Nimbus — Panel</h1>
</div>
<div className="flex items-center gap-1.5">

<button className="group inline-flex items-center gap-1.5 rounded-md bg-white/5 hover:bg-white/10 active:bg-white/15 transition-all px-2 py-1.5 ring-1 ring-white/10" id="leverageOpen">
<svg className="lucide lucide-gauge w-4 h-4 text-emerald-300" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
<span className="text-[12px] font-medium tracking-tight"><span id="leverageLabel" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>20x</span></span>
</button>
</div>
</div>

<div className="mt-2.5">
<div className="relative grid grid-cols-2 rounded-md ring-1 ring-white/10 bg-white/5 p-1">
<button className="group relative z-10 text-center py-1.5 text-[12px] font-semibold tracking-tight" id="tabTrade">Trade</button>
<button className="group relative z-10 text-center py-1.5 text-[12px] font-semibold tracking-tight text-neutral-400" id="tabStrategies">Strategies</button>
<div className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-md bg-white/10 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10)] transition-all duration-200 ease-out" id="tabSlider" style={{left: `0.25rem`}}></div>
</div>
</div>
</header>

<div className="px-3 pb-3 sm:px-4 sm:pb-4">

<div className="divide-y divide-white/10" id="tradeMode">

<div className="py-2.5">
<div className="grid grid-cols-1 gap-2.5">

<div className="p-0">
<div className="relative grid grid-cols-3 rounded-md ring-1 ring-white/10 bg-white/5">
<button className="relative z-10 w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-[12px] font-medium text-center" id="orderMarket">Market</button>
<button className="relative z-10 w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-[12px] font-medium text-center text-neutral-400" id="orderLimit">Limit</button>
<div className="relative">
<button className="relative z-10 w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-[12px] font-medium text-center text-neutral-400" id="orderPro">
<span>Pro</span>
<svg className="lucide lucide-chevron-down w-3.5 h-3.5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="hidden absolute right-0 z-20 mt-1 w-[180px] rounded-md bg-[rgba(10,12,16,0.95)] ring-1 ring-white/10 shadow-lg p-1" id="proMenu">
<button className="w-full text-left px-2 py-1.5 rounded-[6px] hover:bg-white/10 text-[12px]" data-pro="Scale">Scale</button>
<button className="w-full text-left px-2 py-1.5 rounded-[6px] hover:bg-white/10 text-[12px]" data-pro="Stop Limit">Stop Limit</button>
<button className="w-full text-left px-2 py-1.5 rounded-[6px] hover:bg-white/10 text-[12px]" data-pro="Stop Market">Stop Market</button>
<button className="w-full text-left px-2 py-1.5 rounded-[6px] hover:bg-white/10 text-[12px]" data-pro="TWAP">TWAP</button>
</div>
</div>
<div className="absolute inset-y-0 left-0 w-1/3 rounded-md bg-white/10 transition-all duration-200" id="orderTypeSlider" style={{left: `0%`}}></div>
</div>
</div>

<div className="p-1">
<div className="grid grid-cols-2 relative">
<button className="relative z-10 py-2.5 text-[13px] sm:text-[14px] font-medium text-emerald-300" id="longBtn">Long</button>
<button className="relative z-10 py-2.5 text-[13px] sm:text-[14px] font-medium text-rose-300 opacity-60" id="shortBtn">Short</button>
<div className="absolute top-1 bottom-1 left-1 w-[calc(50%-8px)] rounded-md transition-all duration-200 ease-out" id="sideSlider" style={{left: `0.25rem`, background: `rgba(52, 211, 153, 0.18)`, boxShadow: `inset 0 0 0 1px rgba(110,231,183,0.30)`}}></div>
</div>
</div>
</div>
</div>

<div className="py-2.5">
<div className="flex items-center justify-between">
<div className="text-[11px] text-neutral-400">
                Avail: <span className="text-emerald-200" id="availBalance" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>2829.23</span>
</div>
<div className="text-[11px] text-neutral-400">
                Pos: <span className="text-neutral-100" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>0.0000 ETH</span>
</div>
</div>
<div className="mt-1.5 flex items-center gap-2.5">

<div className="relative">
<button className="inline-flex items-center gap-1.5 rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 hover:bg-white/10 transition px-2 py-1.5" id="assetBtn">
<svg className="lucide lucide-coins w-4 h-4 text-neutral-300" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
<span className="text-[12px] font-medium">ETH</span>
<svg className="lucide lucide-chevron-down w-3.5 h-3.5 text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute z-20 mt-1 w-[160px] rounded-md bg-[rgba(10,12,16,0.95)] ring-1 ring-white/10 shadow-lg p-1" id="assetMenu">
<button className="w-full text-left px-2 py-1.5 rounded-[6px] hover:bg-white/10 text-[12px]" data-asset="ETH">ETH</button>
<button className="w-full text-left px-2 py-1.5 rounded-[6px] hover:bg-white/10 text-[12px]" data-asset="BTC">BTC</button>
<button className="w-full text-left px-2 py-1.5 rounded-[6px] hover:bg-white/10 text-[12px]" data-asset="SOL">SOL</button>
</div>
</div>

<div className="flex-1">
<input id="sizeSlider" max="100" min="0" step="1" type="range" value="0" />
</div>
<div className="w-[108px]">
<div className="flex items-center gap-1.5 rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 px-2 py-1.5">
<input className="w-full bg-transparent outline-none text-[12px] placeholder-neutral-500" id="sizeInput" max="100" min="0" step="1" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}} type="number" value="0" />
<span className="text-[11px] text-neutral-400">%</span>
</div>
</div>
</div>

<div className="mt-2 grid grid-cols-2 gap-2.5">
<div className="rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 p-2 transition-opacity opacity-60" id="priceField">
<div className="flex items-center justify-between">
<span className="text-[11px] uppercase tracking-[0.02em] text-neutral-400">Price</span>
<span className="text-[11px] text-neutral-500" id="priceHint">auto for Market</span>
</div>
<input className="mt-1 w-full bg-transparent outline-none text-[12px] placeholder-neutral-600 disabled:placeholder-neutral-500" disabled id="priceInput" placeholder="Market" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}} type="number" />
</div>
<div className="rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 p-2">
<div className="flex items-center justify-between">
<span className="text-[11px] uppercase tracking-[0.02em] text-neutral-400">Size</span>
<span className="text-[11px] text-neutral-500" id="sizeUnitLabel">amount</span>
</div>
<input className="mt-1 w-full bg-transparent outline-none text-[12px] placeholder-neutral-600" id="qtyInput" placeholder="e.g. 0.25" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}} type="number" />
</div>
</div>
</div>

<div className="py-2.5">
<div className="flex items-center justify-between">

<button className="group inline-flex items-center gap-2 rounded-md px-2 py-1.5 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition" id="reduceToggle">
<span className="relative inline-flex h-4 w-7 items-center rounded-full bg-white/10 ring-1 ring-white/10">
<span className="absolute left-0.5 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-neutral-300 transition-transform" id="reduceKnob" style={{transform: `translate(0px, -50%)`}}></span>
</span>
<span className="text-[12px] font-medium">Reduce Only</span>
</button>
</div>

<div className="mt-2 grid grid-cols-2 gap-2.5" id="tpSlFields">
<div className="rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 p-2">
<div className="flex items-center justify-between">
<span className="text-[11px] uppercase tracking-[0.02em] text-neutral-400">TP Price</span>
<button className="inline-flex items-center gap-1 text-[11px] text-emerald-300/95" id="tpTypeBtn">
                    Gain %
                    <svg className="lucide lucide-chevron-down w-3.5 h-3.5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<input className="mt-1 w-full bg-transparent outline-none text-[12px] placeholder-neutral-600" id="tpInput" placeholder="e.g. 28750" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}} type="number" />
</div>
<div className="rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 p-2">
<div className="flex items-center justify-between">
<span className="text-[11px] uppercase tracking-[0.02em] text-neutral-400">SL Price</span>
<button className="inline-flex items-center gap-1 text-[11px] text-red-300/95" id="slTypeBtn">
                    Loss %
                    <svg className="lucide lucide-chevron-down w-3.5 h-3.5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<input className="mt-1 w-full bg-transparent outline-none text-[12px] placeholder-neutral-600" id="slInput" placeholder="e.g. 25200" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}} type="number" />
</div>
</div>
</div>

<div className="py-2.5">
<button className="w-full group relative inline-flex overflow-hidden text-[13px] opacity-60 cursor-not-allowed ring-1 ring-white/10 transition-all hover:opacity-95 active:opacity-90 font-semibold text-black tracking-tight rounded-lg pt-2.5 pr-3 pb-2.5 pl-3 items-center justify-center" disabled id="placeOrder" style={{background: `#10B981`, boxShadow: `0 12px 30px -10px rgba(16,185,129,0.55)`}}>
<span className="relative z-10">Place Long</span>
</button>

<div className="mt-2.5 grid grid-cols-2 gap-x-3 gap-y-1.5 text-[11px]">
<div className="text-neutral-400">Liquidation Price</div>
<div className="text-neutral-100" id="liqPrice" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>N/A</div>
<div className="text-neutral-400">Order Value</div>
<div className="text-emerald-200" id="orderValue" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>N/A</div>
<div className="text-neutral-400">Margin Required</div>
<div className="text-neutral-100" id="marginRequired" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>N/A</div>
<div className="text-neutral-400">Slippage</div>
<div className="text-neutral-100" id="slippageValue" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>Est 0.00% / Max 8.00%</div>
<div className="text-neutral-400">Fees</div>
<div className="text-neutral-100" id="feesValue" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>—</div>
</div>
</div>

<div className="py-2.5">
<div className="mt-2 flex items-center">
<div className="text-[12px] text-neutral-300">Account Equity</div>
</div>

<div className="mt-1 grid grid-cols-2 gap-2.5">
<div className="flex items-center justify-between rounded-sm px-1.5 py-1 bg-white/0">
<div className="text-[11px] uppercase text-neutral-400">Spot</div>
<div className="text-[12px] text-neutral-100" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>$0.00</div>
</div>
<div className="flex items-center justify-between rounded-sm px-1.5 py-1 bg-white/0">
<div className="text-[11px] uppercase text-neutral-400">Perps</div>
<div className="text-[12px] text-emerald-200" id="perpsBalance" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>$2,829.23</div>
</div>
</div>

<div className="mt-1 grid grid-cols-2 gap-x-3 gap-y-1.5 text-[11px]">
<div className="text-neutral-400">Balance</div>
<div className="text-neutral-100" id="perpsBalance2" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>$2,829.23</div>
<div className="text-neutral-400">Unrealized PNL</div>
<div className="text-neutral-100" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>$0.00</div>
<div className="text-neutral-400">Cross Margin Ratio</div>
<div className="text-neutral-100" id="crossMarginRatio" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>0.00%</div>
<div className="text-neutral-400">Maintenance Margin</div>
<div className="text-neutral-100" id="maintMargin" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>$0.00</div>
<div className="text-neutral-400 col-span-1">Cross Account Leverage</div>
<div className="text-neutral-100 col-span-1" id="crossLev" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>0.00x</div>
</div>
</div>
</div>

<div className="hidden space-y-3" id="strategiesMode">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2.5 backdrop-blur-md">
<div className="flex items-center justify-between">
<h3 className="text-[12px] font-medium uppercase tracking-[0.02em] text-neutral-200">Pre-built Bots</h3>
<svg className="lucide lucide-bot w-4 h-4 text-emerald-300" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="mt-2 grid grid-cols-2 gap-2">
<button className="botBtn group rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 hover:ring-emerald-300/40 transition" data-bot="Futures Grid">
<div className="flex items-center gap-2">
<svg className="lucide lucide-grid w-4 h-4 text-emerald-300" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span className="text-[12px] font-medium tracking-tight">Futures Grid</span>
</div>
</button>
<button className="botBtn group rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 hover:ring-emerald-300/40 transition" data-bot="Spot Grid">
<div className="flex items-center gap-2">
<svg className="lucide lucide-grid-3x3 w-4 h-4 text-emerald-300" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span className="text-[12px] font-medium tracking-tight">Spot Grid</span>
</div>
</button>
<button className="botBtn group rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 hover:ring-emerald-300/40 transition" data-bot="Futures DCA">
<div className="flex items-center gap-2">
<svg className="lucide lucide-repeat w-4 h-4 text-emerald-300" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
<span className="text-[12px] font-medium tracking-tight">Futures DCA</span>
</div>
</button>
<button className="botBtn group rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 hover:ring-emerald-300/40 transition" data-bot="Spot DCA">
<div className="flex items-center gap-2">
<svg className="lucide lucide-repeat-2 w-4 h-4 text-emerald-300" data-lucide="repeat-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 9 3-3 3 3"></path><path d="M13 18H7a2 2 0 0 1-2-2V6"></path><path d="m22 15-3 3-3-3"></path><path d="M11 6h6a2 2 0 0 1 2 2v10"></path></svg>
<span className="text-[12px] font-medium tracking-tight">Spot DCA</span>
</div>
</button>
<button className="botBtn group rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 hover:ring-emerald-300/40 transition" data-bot="Flywheel">
<div className="flex items-center gap-2">
<svg className="lucide lucide-wind w-4 h-4 text-emerald-300" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
<span className="text-[12px] font-medium tracking-tight">Flywheel</span>
</div>
</button>
<button className="botBtn group rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 hover:ring-emerald-300/40 transition" data-bot="Smart Arbitrage">
<div className="flex items-center gap-2">
<svg className="lucide lucide-split w-4 h-4 text-emerald-300" data-lucide="split" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path><path d="m15 9 6-6"></path></svg>
<span className="text-[12px] font-medium tracking-tight">Smart Arbitrage</span>
</div>
</button>
<button className="botBtn group rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 hover:ring-emerald-300/40 transition" data-bot="Recurring Buy">
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar-clock w-4 h-4 text-emerald-300" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
<span className="text-[12px] font-medium tracking-tight">Recurring Buy</span>
</div>
</button>

<button className="botBtn group rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 hover:ring-emerald-300/40 transition" data-bot="Smart Portfolio">
<div className="flex items-center gap-2">
<svg className="lucide lucide-pie-chart w-4 h-4 text-emerald-300" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
<span className="text-[12px] font-medium tracking-tight">Smart Portfolio</span>
</div>
</button>
</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2.5 backdrop-blur-md space-y-2">
<div className="flex items-center justify-between">
<h3 className="text-[12px] font-medium uppercase tracking-[0.02em] text-neutral-200">Customized</h3>
<button className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition">
<svg className="lucide lucide-plus w-4 h-4 text-emerald-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-[12px] font-medium">Create Custom</span>
</button>
</div>
<p className="text-[12px] text-neutral-300 leading-5">
              This section will save bot settings, or customized bots using indicators to trigger buy or sell, or detect sideways conditions.
            </p>
<div className="rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-bookmark w-4 h-4 text-neutral-300" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
<div className="text-left">
<div className="text-[12px] font-medium tracking-tight">Saved example</div>
<div className="text-[11px] text-neutral-400">Indicators • Entry/Exit rules</div>
</div>
</div>
<span className="text-[11px] text-neutral-400" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `500`}}>Draft</span>
</div>
</div>
</div>

<div className="hidden" id="gridSetup">
<div className="rounded-lg bg-transparent ring-0 p-1.5 sm:p-2 divide-y divide-white/10">
<div className="flex items-center justify-between py-2">
<div className="flex items-center gap-2">
<button className="inline-flex h-7 w-7 items-center justify-center rounded-md hover:bg-white/10 ring-1 ring-white/10 transition" id="gridBack">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<h3 className="text-[14px] font-semibold tracking-tight text-neutral-100" id="gridTitle">Futures Grid</h3>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition" id="gridLevOpen">
<svg className="lucide lucide-gauge w-4 h-4 text-emerald-300" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
<span className="text-[12px] font-medium"><span id="gridLevLabel" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `500`}}>10x</span></span>
</button>
</div>
<div className="py-2">
<div className="grid grid-cols-3 relative">
<button className="relative z-10 py-1.5 text-[12px] font-medium text-neutral-200" id="gridLong">Long</button>
<button className="relative z-10 py-1.5 text-[12px] font-medium text-neutral-400" id="gridNeutral">Neutral</button>
<button className="relative z-10 py-1.5 text-[12px] font-medium text-neutral-400" id="gridShort">Short</button>
<div className="absolute top-1 bottom-1 left-1 w-[calc(33.333%-8px)] rounded-md bg-white/10 transition-all duration-200" id="gridSideSlider" style={{left: `0.25rem`}}></div>
</div>
</div>
<div className="py-2 space-y-2">
<div className="flex items-center justify-between">
<span className="text-[12px] font-medium uppercase tracking-tight text-neutral-300">Price Range</span>
<button className="inline-flex items-center gap-1 text-[11px] text-neutral-500">
<svg className="lucide lucide-help-circle w-3.5 h-3.5" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span>sync chart</span>
</button>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 px-2 py-1.5">
<label className="text-[10px] uppercase text-neutral-500">Lower</label>
<input className="w-full bg-transparent outline-none text-[12px] text-neutral-100" id="lowerPrice" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `500`}} type="number" value="52000" />
</div>
<div className="flex-1 px-2 py-1.5">
<label className="text-[10px] uppercase text-neutral-500">Upper</label>
<input className="w-full bg-transparent outline-none text-[12px] text-neutral-100" id="upperPrice" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `500`}} type="number" value="60000" />
</div>
</div>

</div>
<div className="py-2 space-y-2">
<div className="flex items-center justify-between">
<span className="text-[12px] font-medium uppercase tracking-tight text-neutral-300">Grid Quantity</span>
<span className="text-[12px] text-neutral-500">2–500</span>
</div>
<div className="flex items-center gap-2">
<input className="flex-1" id="gridQty" max="500" min="2" step="1" type="range" value="25" />
<div className="w-[86px] px-2 py-1.5 ring-1 ring-white/10 rounded-md">
<input className="w-full bg-transparent outline-none text-[12px] text-neutral-100" id="gridQtyInput" max="500" min="2" step="1" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `500`}} type="number" value="25" />
</div>
</div>
</div>
<div className="py-2 space-y-2">
<div className="flex items-center justify-between">
<span className="text-[12px] font-medium uppercase tracking-tight text-neutral-300">Invested Margin</span>
<span className="text-[12px] text-neutral-500">USDT</span>
</div>
<div className="flex items-center gap-2">
<input className="flex-1 cursor-pointer" id="marginSlider" max="2829" min="0" step="10" type="range" value="250" />
<div className="w-[110px] px-2 py-1.5 ring-1 ring-white/10 rounded-md">
<input className="w-full bg-transparent outline-none text-[12px] text-neutral-100" id="marginInput" max="2829" min="0" step="10" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `500`}} type="number" value="250" />
</div>
</div>
<div className="flex items-center justify-between">
<div className="text-[12px] text-neutral-400">Balance: <span id="gridBalance" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `500`}}>2,829.23</span> USDT</div>
<button className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition">
<svg className="lucide lucide-download w-4 h-4 text-emerald-300" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="text-[12px] font-medium">Deposit</span>
</button>
</div>
<div className="mt-1 border-t border-white/10 pt-2">
<div className="flex items-center justify-between">
<div className="text-[12px] font-medium text-neutral-200">Reserved Margin</div>
<label className="inline-flex items-center gap-2">
<input aria-label="Toggle reserved margin" className="peer sr-only" id="reservedToggle" type="checkbox" />
<span className="h-4 w-7 rounded-full ring-1 ring-white/10 bg-white/10 relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-neutral-300 after:transition-all peer-checked:after:translate-x-[12px]"></span>
</label>
</div>
<p className="mt-1 text-[11px] text-neutral-400 leading-4">If selected, a margin will be reserved to reduce liquidation risk and support smooth bot operation. Unchecking may increase liquidation risk.</p>
</div>
</div>
<div className="grid grid-cols-2 gap-2 py-2 sm:divide-x sm:divide-white/10">
<div className="pr-1 sm:pr-2">
<div className="text-[11px] uppercase tracking-tight text-neutral-400">Grid Mode</div>
<div className="mt-1 relative grid grid-cols-2 rounded-md ring-1 ring-white/10 bg-white/5 p-1">
<button className="relative z-10 py-1 text-[12px] font-medium" id="gmArithPerp">Arithmetic</button>
<button className="relative z-10 py-1 text-[12px] font-medium text-neutral-400" id="gmGeoPerp">Geometric</button>
<div className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-md bg-white/10 transition-all" id="gmSliderPerp"></div>
</div>
</div>
<div className="pl-1 sm:pl-2">
<div className="text-[11px] uppercase tracking-tight text-neutral-400">Start Condition</div>
<div className="mt-1 relative grid grid-cols-2 rounded-md ring-1 ring-white/10 bg-white/5 p-1">
<button className="relative z-10 py-1 text-[12px] font-medium" id="startInstantPerp">Instant</button>
<button className="relative z-10 py-1 text-[12px] font-medium text-neutral-400" id="startPricePerp">Price</button>
<div className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-md bg-white/10 transition-all" id="startSliderPerp"></div>
</div>
<div className="mt-2 hidden" id="startPriceWrapPerp">
<div className="px-2 py-1.5">
<label className="text-[10px] uppercase text-neutral-500">Trigger Price</label>
<input className="w-full bg-transparent outline-none text-[12px] text-neutral-100" id="startPriceInputPerp" placeholder="e.g. 59000" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `500`}} type="number" />
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 py-2 sm:divide-x sm:divide-white/10">
<div className="pr-1 sm:pr-2">
<div className="text-[11px] uppercase tracking-tight text-neutral-400">Preview</div>
<div className="mt-1 h-16 rounded-sm bg-gradient-to-b from-white/[0.06] to-white/[0.02] ring-1 ring-white/10 relative overflow-hidden">
<div className="absolute inset-0 flex items-end gap-[2px] px-1 pb-1" id="previewBars"><div className="flex-1 rounded-[1px]" style={{height: `14%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `12%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `15%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `22%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `21%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `24%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `31%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `30%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `33%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `40%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `39%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `42%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `49%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `47%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `50%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `57%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `56%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `59%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `66%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `65%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `68%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `75%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `74%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `77%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div><div className="flex-1 rounded-[1px]" style={{height: `84%`, background: `linear-gradient(rgba(110, 231, 183, 0.9), rgba(52, 211, 153, 0.35))`, boxShadow: `rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset`}}></div></div>
</div>
<div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-[11px]">
<div className="text-neutral-400">Grid Step</div>
<div className="text-neutral-100" id="gridStep" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>$333.33</div>
<div className="text-neutral-400">Est. Daily</div>
<div className="text-emerald-200" id="estDaily" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>0.12%</div>
<div className="text-neutral-400">Est. APR</div>
<div className="text-neutral-100" id="estAPR" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>43.5%</div>
<div className="text-neutral-400">Grids Filled</div>
<div className="text-neutral-100" id="gridsFilled" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>0/25</div>
</div>
</div>
<div className="pl-1 sm:pl-2">
<div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px]">
<div className="text-neutral-400">Allocated Margin</div>
<div className="text-neutral-100" id="gridAlloc" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>$250.00</div>
<div className="text-neutral-400">Leverage</div>
<div className="text-neutral-100" id="gridLevVal" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>10x</div>
<div className="text-neutral-400">Est. Order Size</div>
<div className="text-neutral-100" id="gridOrderSize" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>$100.00</div>
<div className="text-neutral-400">Fee Estimate</div>
<div className="text-neutral-100" id="gridFees" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>$0.87</div>
<div className="text-neutral-400">Funding Impact</div>
<div className="text-neutral-100" id="gridFunding" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}}>Medium</div>
</div>
<div className="mt-3">
<button className="w-full group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-3 py-2.5 text-[13px] font-semibold tracking-tight text-black ring-1 ring-white/10 transition-all hover:opacity-95 active:opacity-90" id="startGrid" style={{background: `linear-gradient(135deg,#A7F3D0 0%, #34D399 45%, #10B981 100%)`, boxShadow: `0 12px 30px -10px rgba(16,185,129,0.55)`}}>
<span className="relative z-10">Start Grid Bot</span>
</button>
<p className="mt-2 text-[11px] text-neutral-500 leading-4">Bot will place staggered orders within range and rebalance as the price oscillates. Monitor margin usage and risk parameters.</p>
</div>
</div>
</div>
</div>
</div>
</div> 
</section>
</main>

<div className="hidden fixed inset-0 z-50 items-end sm:items-center justify-center" id="levModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" data-close="lev"></div>
<div className="relative w-full sm:max-w-sm sm:rounded-xl bg-[rgba(10,12,16,0.92)] ring-1 ring-white/10 shadow-2xl overflow-hidden">
<div className="flex items-center justify-between px-3 py-2.5 sm:px-4">
<div>
<div className="text-[13px] font-semibold">Adjust Leverage</div>
<div className="text-[11px] text-neutral-400" id="levContext">Applies to: Trade</div>
</div>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-white/10 ring-1 ring-white/10" data-close="lev">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>
<div className="px-3 pb-3 sm:px-4 sm:pb-4 space-y-2">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400">Leverage</span>
<span className="text-[12px] font-semibold" id="levValueLabel" style={{fontVariantNumeric: `tabular-nums`}}>20x</span>
</div>
<input id="levRange" max="50" min="1" step="1" type="range" value="20" />
<div className="flex items-center gap-2">
<div className="flex-1 text-[11px] text-neutral-500">1x</div>
<div className="w-[88px] px-2 py-1.5 ring-1 ring-white/10 rounded-md">
<input className="w-full bg-transparent outline-none text-[12px]" id="levInput" max="50" min="1" step="1" style={{fontVariantNumeric: `tabular-nums`, fontWeight: `600`}} type="number" value="20" />
</div>
<div className="flex-1 text-right text-[11px] text-neutral-500">50x</div>
</div>
<div className="pt-1 grid grid-cols-3 gap-1 text-[11px]">
<button className="levQuick rounded-md ring-1 ring-white/10 bg-white/5 hover:bg-white/10 py-1" data-lev="5">5x</button>
<button className="levQuick rounded-md ring-1 ring-white/10 bg-white/5 hover:bg-white/10 py-1" data-lev="10">10x</button>
<button className="levQuick rounded-md ring-1 ring-white/10 bg-white/5 hover:bg-white/10 py-1" data-lev="20">20x</button>
<button className="levQuick rounded-md ring-1 ring-white/10 bg-white/5 hover:bg-white/10 py-1" data-lev="25">25x</button>
<button className="levQuick rounded-md ring-1 ring-white/10 bg-white/5 hover:bg-white/10 py-1" data-lev="33">33x</button>
<button className="levQuick rounded-md ring-1 ring-white/10 bg-white/5 hover:bg-white/10 py-1" data-lev="50">50x</button>
</div>
<div className="pt-1.5 flex items-center justify-end gap-2">
<button className="rounded-md px-2.5 py-1.5 text-[12px] ring-1 ring-white/10 hover:bg-white/10" data-close="lev">Cancel</button>
<button className="rounded-md px-3 py-1.5 text-[12px] font-semibold text-black" id="levApply" style={{background: `linear-gradient(135deg,#A7F3D0 0%, #34D399 45%, #10B981 100%)`}}>Apply</button>
</div>
</div>
</div>
</div>

<div className="pointer-events-none fixed bottom-4 left-1/2 -translate-x-1/2 z-50 hidden" id="toast">
<div className="rounded-md bg-[rgba(12,15,20,0.95)] ring-1 ring-white/10 px-3 py-2 shadow-xl text-[12px]">
<span id="toastMsg">Saved</span>
</div>
</div>


    </>
  );
}
