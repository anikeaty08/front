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
      
      // Icons
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Token data
      const TOKENS = [
        {symbol: 'BTC', name: 'Bitcoin',  avatar: ['from-orange-500/40','to-amber-500/30','text-amber-200','border-amber-500/20'], chart:'#f59e0b66'},
        {symbol: 'ETH', name: 'Ethereum', avatar: ['from-emerald-500/40','to-emerald-600/30','text-emerald-200','border-emerald-500/20'], chart:'#34d39966'},
        {symbol: 'SOL', name: 'Solana',   avatar: ['from-fuchsia-500/30','to-indigo-500/30','text-fuchsia-200','border-fuchsia-500/20'], chart:'#8b5cf666'},
        {symbol: 'ADA', name: 'Cardano',  avatar: ['from-sky-500/30','to-cyan-500/30','text-cyan-200','border-cyan-500/20'], chart:'#06b6d466'},
        {symbol: 'AVAX',name: 'Avalanche',avatar: ['from-rose-500/30','to-red-500/30','text-rose-200','border-rose-500/20'], chart:'#f43f5e66'},
        {symbol: 'DOGE',name: 'Dogecoin', avatar: ['from-yellow-500/30','to-amber-500/30','text-yellow-100','border-yellow-500/20'], chart:'#eab30866'},
        {symbol: 'USDT',name: 'Tether',   avatar: ['from-emerald-500/30','to-teal-500/30','text-emerald-100','border-emerald-500/20'], chart:'#10b98166'},
        {symbol: 'USDC',name: 'USD Coin', avatar: ['from-blue-500/30','to-sky-500/30','text-blue-100','border-blue-500/20'], chart:'#3b82f666'},
      ];
      const tokenMeta = (sym)=> TOKENS.find(t=>t.symbol===sym) || TOKENS[0];

      // State
      const state = {
        tokens: [
          { symbol: 'ETH', alloc: 50 },
          { symbol: 'BTC', alloc: 50 }
        ],
        available: 1250.00,
        mode: 'Proportional'
      };

      // Elements
      const el = (id) => document.getElementById(id);
      const tokenList = el('tokenList');
      const allocRange = el('allocRange');
      const panelTitle = el('panelTitle');
      const remainingText = el('remainingText');
      const availableText = el('availableText');
      const rebalanceInput = el('rebalanceInput');
      const amountInput = el('amountInput');
      const amountRange = el('amountRange');
      const tokenPopover = el('tokenPopover');
      const tokenItems = el('tokenItems');
      const toast = el('toast');
      const tabSmart = el('tabSmart');
      const tabEqual = el('tabEqual');
      const equalUnderline = el('equalUnderline');

      // Chart setup
      const ctx = document.getElementById('allocChart');
      const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: state.tokens.map(t=>t.alloc),
            backgroundColor: state.tokens.map(t=>tokenMeta(t.symbol).chart),
            borderColor: state.tokens.map(t=> 'transparent'),
            borderWidth: 1,
            cutout: '70%'
          }]
        },
        options: { plugins: { legend: { display: false } }, animation: { duration: 160 } }
      });

      function avatarClasses(token){
        const t = tokenMeta(token);
        return `inline-flex h-7 w-7 rounded-full items-center justify-center text-[10px] font-semibold tracking-tight bg-gradient-to-br ${t.avatar[0]} ${t.avatar[1]} ${t.avatar[2]} border ${t.avatar[3]}`;
      }

      function sumAlloc(){
        return Math.round(state.tokens.reduce((a,t)=>a + (Number(t.alloc)||0), 0));
      }

      function formatTitle(){
        const syms = state.tokens.map(t=>t.symbol);
        if(syms.length === 0) return 'Smart portfolio';
        if(syms.length === 1) return `${syms[0]} Smart portfolio`;
        if(syms.length === 2) return `${syms[0]}, ${syms[1]} Smart portfolio`;
        return `${syms[0]}, ${syms[1]} +${syms.length-2} Smart portfolio`;
      }

      function renderTokenItems(targetIndex){
        tokenItems.innerHTML = '';
        const inUse = new Set(state.tokens.map(t=>t.symbol));
        TOKENS.forEach(t=>{
          const disabled = inUse.has(t.symbol) && state.tokens[targetIndex].symbol !== t.symbol;
          const item = document.createElement('button');
          item.type = 'button';
          item.className = `w-full flex items-center justify-between px-3 py-2 rounded-md ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:bg-neutral-800'} text-neutral-200`;
          item.innerHTML = `
            <span class="flex items-center gap-3">
              <span class="inline-flex h-6 w-6 rounded-full items-center justify-center text-[10px] font-semibold tracking-tight bg-gradient-to-br ${t.avatar[0]} ${t.avatar[1]} ${t.avatar[2]} border ${t.avatar[3]}">${t.symbol}</span>
              <span class="text-sm">${t.name}</span>
            </span>
            <span class="text-xs text-neutral-500">${t.symbol}</span>
          `;
          if(!disabled){
            item.addEventListener('click', ()=>{
              state.tokens[targetIndex].symbol = t.symbol;
              closePopover();
              updateUI();
            });
          }
          tokenItems.appendChild(item);
        });
      }

      function openPopover(btn, targetIndex){
        renderTokenItems(targetIndex);
        tokenPopover.classList.remove('hidden');
        const rect = btn.getBoundingClientRect();
        const root = document.body.getBoundingClientRect();
        tokenPopover.style.top = `${rect.bottom - root.top + 8}px`;
        tokenPopover.style.left = `${rect.left - root.left}px`;
        tokenPopover.dataset.targetIndex = targetIndex;
      }
      function closePopover(){ tokenPopover.classList.add('hidden'); }
      document.addEventListener('click', (e)=>{
        const isTokenBtn = e.target.closest?.('.token-btn');
        if(!tokenPopover.contains(e.target) && !isTokenBtn){
          closePopover();
        }
      });
      window.addEventListener('resize', closePopover);
      window.addEventListener('scroll', closePopover, true);

      function proportionalReduce(excess, excludeIndex){
        const others = state.tokens.map((t,i)=>({i,alloc:t.alloc})).filter(x=>x.i!==excludeIndex);
        let sumOthers = others.reduce((a,x)=>a+x.alloc,0);
        if(sumOthers<=0){
          // Nothing to reduce, clamp edited
          state.tokens[excludeIndex].alloc = Math.min(100, Math.max(0, state.tokens[excludeIndex].alloc - excess));
          return;
        }
        // Reduce proportionally
        let remainder = excess;
        others.forEach((x,idx)=>{
          let share = excess * (x.alloc / sumOthers);
          let newAlloc = Math.max(0, x.alloc - share);
          let delta = x.alloc - newAlloc;
          state.tokens[x.i].alloc = Math.round(newAlloc);
          remainder -= delta;
        });
        // Fix rounding by adjusting the last other
        if(Math.abs(remainder) > 0.5){
          const last = others[others.length-1];
          if(last){
            state.tokens[last.i].alloc = Math.max(0, Math.round(state.tokens[last.i].alloc - remainder));
          }
        }
      }

      function enforceTotalAfterEdit(editedIndex){
        // Clamp inputs
        state.tokens[editedIndex].alloc = Math.max(0, Math.min(100, Math.round(Number(state.tokens[editedIndex].alloc)||0)));
        const total = state.tokens.reduce((a,t)=>a+t.alloc,0);
        if(total > 100){
          proportionalReduce(total - 100, editedIndex);
        }
      }

      function addToken(){
        const inUse = new Set(state.tokens.map(t=>t.symbol));
        const next = TOKENS.find(t=>!inUse.has(t.symbol));
        const symbol = next ? next.symbol : TOKENS[0].symbol;
        // Prevent duplicates if all used: allow duplicate last
        if(inUse.has(symbol) && state.tokens.length >= TOKENS.length){
          state.tokens.push({symbol, alloc: 0});
        } else {
          state.tokens.push({symbol, alloc: 0});
        }
        updateUI();
      }

      function renderRows(){
        tokenList.innerHTML = '';
        state.tokens.forEach((t, idx)=>{
          const row = document.createElement('div');
          row.className = 'flex items-center gap-3';
          row.innerHTML = `
            <button class="token-btn group flex-1 h-12 rounded-lg border border-white/10 bg-neutral-800 text-neutral-200 px-3 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-white/20 transition" data-index="${idx}">
              <span class="flex items-center gap-3">
                <span class="${avatarClasses(t.symbol)}">${t.symbol}</span>
                <span class="font-medium tracking-tight">${t.symbol}</span>
              </span>
              <i data-lucide="chevron-down" class="w-4 h-4 text-neutral-500 group-hover:text-neutral-300"></i>
            </button>
            <div class="flex items-center gap-2">
              <div class="flex items-center h-12 rounded-lg border border-white/10 bg-neutral-800">
                <input type="number" min="0" max="100" step="1" aria-label="${t.symbol} allocation percent" class="alloc-input w-16 bg-transparent text-right px-2 outline-none text-neutral-200" data-index="${idx}" value="${t.alloc}" />
                <span class="pr-3 text-neutral-500">%</span>
              </div>
              <div class="flex flex-col">
                <button class="inc h-6 w-8 rounded-md border border-white/10 bg-neutral-800 hover:bg-neutral-800/80 active:bg-neutral-800/80 focus:outline-none focus:ring-2 focus:ring-white/20 flex items-center justify-center" data-index="${idx}">
                  <i data-lucide="chevron-up" class="w-4 h-4 text-neutral-400"></i>
                </button>
                <button class="dec h-6 w-8 mt-1 rounded-md border border-white/10 bg-neutral-800 hover:bg-neutral-800/80 active:bg-neutral-800/80 focus:outline-none focus:ring-2 focus:ring-white/20 flex items-center justify-center" data-index="${idx}">
                  <i data-lucide="chevron-down" class="w-4 h-4 text-neutral-400"></i>
                </button>
              </div>
            </div>
            <button class="del h-12 w-10 rounded-lg border border-white/10 bg-neutral-800 hover:bg-neutral-800/80 active:bg-neutral-800/70 focus:outline-none focus:ring-2 focus:ring-white/20 flex items-center justify-center" data-index="${idx}" aria-label="Delete ${t.symbol}">
              <i data-lucide="trash-2" class="w-4 h-4 text-neutral-400"></i>
            </button>
          `;
          tokenList.appendChild(row);
        });

        // Add token button
        const addWrap = document.createElement('div');
        addWrap.className = 'flex items-center justify-center';
        const inUse = new Set(state.tokens.map(t=>t.symbol));
        const canAddMore = TOKENS.some(t=>!inUse.has(t.symbol)) || state.tokens.length < TOKENS.length || true; // allow duplicates if all used
        addWrap.innerHTML = `
          <button id="addTokenBtn" class="h-11 px-3 rounded-lg border border-white/10 bg-neutral-800/70 hover:bg-neutral-800 active:bg-neutral-800/80 focus:outline-none focus:ring-2 focus:ring-white/20 text-neutral-300 flex items-center gap-2 ${canAddMore ? '' : 'opacity-60 cursor-not-allowed'}">
            <i data-lucide="plus" class="w-4 h-4"></i>
            Add token
          </button>
        `;
        tokenList.appendChild(addWrap);

        // Bind events
        tokenList.querySelectorAll('.token-btn').forEach(btn=>{
          btn.addEventListener('click', (e)=>{
            const idx = Number(btn.dataset.index);
            openPopover(btn, idx);
          });
        });
        tokenList.querySelectorAll('.alloc-input').forEach(input=>{
          input.addEventListener('input', (e)=>{
            const idx = Number(input.dataset.index);
            state.tokens[idx].alloc = Number(input.value || 0);
            enforceTotalAfterEdit(idx);
            updateUI();
          });
        });
        tokenList.querySelectorAll('.inc').forEach(btn=>{
          btn.addEventListener('click', ()=>{
            const idx = Number(btn.dataset.index);
            state.tokens[idx].alloc = Math.min(100, Math.round(state.tokens[idx].alloc)+1);
            enforceTotalAfterEdit(idx);
            updateUI();
          });
        });
        tokenList.querySelectorAll('.dec').forEach(btn=>{
          btn.addEventListener('click', ()=>{
            const idx = Number(btn.dataset.index);
            state.tokens[idx].alloc = Math.max(0, Math.round(state.tokens[idx].alloc)-1);
            updateUI();
          });
        });
        tokenList.querySelectorAll('.del').forEach(btn=>{
          btn.addEventListener('click', (e)=>{
            e.stopPropagation();
            const idx = Number(btn.dataset.index);
            state.tokens.splice(idx, 1);
            updateUI();
          });
        });
        const addBtn = el('addTokenBtn');
        if(addBtn){
          addBtn.addEventListener('click', addToken);
        }

        // Recreate icons for new elements
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      function updateUI(){
        // Render rows
        renderRows();

        // Range sync (first token)
        allocRange.value = state.tokens[0]?.alloc ?? 0;

        // Title
        panelTitle.textContent = formatTitle();

        // Remaining
        const remaining = Math.max(0, 100 - sumAlloc());
        remainingText.textContent = `Remaining ${remaining}%/100%`;

        // Chart
        chart.data.datasets[0].data = state.tokens.map(t=>t.alloc);
        chart.data.datasets[0].backgroundColor = state.tokens.map(t=>tokenMeta(t.symbol).chart);
        chart.update();

        // Available
        availableText.textContent = `Available ${state.available.toFixed(2)} USDT`;
      }

      // Range control behavior: adjusts first token, scales others down if needed
      allocRange.addEventListener('input', ()=>{
        if(!state.tokens.length) return;
        const newVal = Number(allocRange.value);
        state.tokens[0].alloc = newVal;
        const total = sumAlloc();
        if(total > 100){
          const excess = total - 100;
          // reduce others proportionally
          let sumOthers = state.tokens.slice(1).reduce((a,t)=>a+t.alloc,0);
          if(sumOthers > 0){
            state.tokens.slice(1).forEach((t, i)=>{
              const share = excess * (t.alloc / sumOthers);
              t.alloc = Math.max(0, Math.round(t.alloc - share));
            });
          }
        }
        updateUI();
      });

      // Tabs
      function setTab(active){
        [tabSmart, tabEqual].forEach(t=>{
          t.classList.remove('text-emerald-300');
          t.style.borderColor = 'rgba(255,255,255,0.1)';
        });
        equalUnderline.style.background = 'transparent';

        if(active==='Equal'){
          tabEqual.classList.add('text-emerald-300');
          equalUnderline.style.background = 'rgb(52 211 153)';
          // Distribute equally across all tokens
          const n = state.tokens.length || 1;
          const base = Math.floor(100 / n);
          const remainder = 100 - base * n;
          state.tokens.forEach((t,i)=>{ t.alloc = base; });
          for(let i=0;i<remainder;i++){ state.tokens[i % n].alloc += 1; }
          updateUI();
        } else {
          tabSmart.classList.add('text-emerald-300');
        }
      }
      tabSmart.addEventListener('click', ()=>setTab('Smart'));
      tabEqual.addEventListener('click', ()=>setTab('Equal'));
      setTab('Smart');

      // Mode popover (simple toggle demo)
      document.getElementById('modeBtn').addEventListener('click', (e)=>{
        state.mode = state.mode === 'Proportional' ? 'Threshold' : 'Proportional';
        e.currentTarget.querySelector('span.text-sm').textContent = state.mode;
      });

      // Rebalancing quick chips
      document.querySelectorAll('.quickReb').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          rebalanceInput.value = btn.dataset.reb;
        });
      });

      // Amount + range sync
      amountInput.addEventListener('input', ()=>{
        const v = Number(amountInput.value||0);
        const pct = Math.max(0, Math.min(100, Math.round((v/state.available)*100)));
        amountRange.value = isFinite(pct) ? pct : 0;
      });
      amountRange.addEventListener('input', ()=>{
        const pct = Number(amountRange.value);
        amountInput.value = (state.available * (pct/100)).toFixed(2);
      });

      // Create -> toast
      function showToast(msg='Portfolio created successfully.'){
        toast.querySelector('p').textContent = msg;
        toast.classList.remove('hidden');
        toast.style.opacity = '0';
        requestAnimationFrame(()=>{
          toast.style.transition = 'opacity 160ms ease';
          toast.style.opacity = '1';
        });
        setTimeout(()=>{
          toast.style.opacity = '0';
          setTimeout(()=>toast.classList.add('hidden'), 180);
        }, 3500);
      }
      document.getElementById('createBtn').addEventListener('click', ()=>{
        showToast();
      });

      // Initial numeric defaults
      rebalanceInput.value = 3;
      amountInput.value = (state.available * 0.25).toFixed(2);
      amountRange.value = 25;

      updateUI();
    
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
      
<main className="min-h-screen flex items-start justify-center p-4">
<section className="w-full max-w-[420px] sm:max-w-[560px]">
<div className="relative rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur shadow-2xl px-4 py-6 sm:py-10 overflow-hidden">

<div className="flex items-start gap-4">
<div className="flex-1">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-200" id="panelTitle">ETH, BTC Smart portfolio</h1>
<p className="text-sm text-neutral-400 mt-1">Create and rebalance a multi-asset smart portfolio.</p>
</div>

<div className="shrink-0">
<div className="rounded-xl border border-white/10 bg-neutral-900 p-2">
<div className="w-20 h-20">
<div className="w-full h-full"><canvas id="allocChart"></canvas></div>
</div>
</div>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-tight text-neutral-500">Crypto allocation</span>
<span className="text-xs tracking-tight text-neutral-400" id="remainingText">Remaining 0%/100%</span>
</div>
<div className="mt-2 flex gap-2">
<button className="relative h-11 px-3 rounded-lg border border-white/10 bg-neutral-800/70 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20" id="tabSmart">
<span className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                  Smart
                </span>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-[2px] left-2 right-2 h-[2px] bg-transparent"></span>
</button>
<button className="relative h-11 px-3 rounded-lg border border-white/10 bg-neutral-800/70 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20" id="tabEqual">
<span className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="divide"></i>
                  Equal
                </span>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-[2px] left-2 right-2 h-[2px] bg-transparent" id="equalUnderline"></span>
</button>
</div>
</div>

<div aria-label="Token allocations" className="mt-6 space-y-3" id="tokenList">


</div>

<div className="mt-4">
<label className="text-xs tracking-tight text-neutral-500" htmlFor="allocRange">Adjust first token allocation</label>
<input className="w-full mt-2 accent-emerald-400" id="allocRange" max="100" min="0" step="1" type="range"/>
<div className="flex justify-between text-[11px] text-neutral-500 mt-1">
<span>0</span><span>25</span><span>50</span><span>75</span><span>100</span>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between">
<label className="text-xs tracking-tight text-neutral-500">Rebalancing mode</label>
<button className="h-9 px-2 rounded-lg border border-white/10 bg-neutral-800 text-neutral-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/20" id="modeBtn">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i>
<span className="text-sm">Proportional</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
</div>
<div className="mt-2 flex items-center gap-2">
<div className="relative flex-1 h-12">
<input className="w-full h-12 rounded-lg border border-white/10 bg-neutral-800 text-neutral-200 px-3 pr-10 outline-none focus:ring-2 focus:ring-white/20" id="rebalanceInput" min="1" placeholder="≥ 1" step="1" type="number"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">%</span>
</div>
<button className="quickReb h-12 px-3 rounded-lg border border-white/10 bg-neutral-800 text-neutral-300 hover:bg-neutral-800/80 focus:outline-none focus:ring-2 focus:ring-white/20" data-reb="3">3%</button>
<button className="quickReb h-12 px-3 rounded-lg border border-white/10 bg-neutral-800 text-neutral-300 hover:bg-neutral-800/80 focus:outline-none focus:ring-2 focus:ring-white/20" data-reb="5">5%</button>
</div>
</div>

<div className="mt-6">
<label className="text-xs tracking-tight text-neutral-500" htmlFor="amountInput">Investment amount</label>
<div className="relative mt-2">
<input className="w-full h-12 rounded-lg border border-white/10 bg-neutral-800 text-neutral-200 px-3 pr-16 outline-none focus:ring-2 focus:ring-white/20" id="amountInput" min="0" placeholder="0.00" step="0.01" type="number"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">USDT</span>
</div>
<input className="w-full mt-3 accent-emerald-400" id="amountRange" max="100" min="0" step="1" type="range"/>
<div className="flex justify-between text-[11px] text-neutral-500 mt-1">
<span>0</span><span>25</span><span>50</span><span>75</span><span>100%</span>
</div>
<div className="mt-2 flex items-center justify-between">
<span className="text-sm text-neutral-400" id="availableText">Available 0.00 USDT</span>
<button className="h-9 px-2 rounded-lg border border-white/10 bg-neutral-800 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/80 focus:outline-none focus:ring-2 focus:ring-white/20 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="info"></i>
<span className="text-sm">Details</span>
</button>
</div>

<label className="mt-3 inline-flex items-center gap-2 select-none cursor-pointer">
<input className="peer sr-only" id="investBase" type="checkbox"/>
<span className="h-5 w-5 rounded-[6px] border border-white/10 bg-neutral-800 grid place-items-center peer-checked:bg-emerald-500/20 peer-checked:border-emerald-500/30 transition-colors">
<i className="w-3.5 h-3.5 text-transparent peer-checked:text-emerald-300" data-lucide="check"></i>
</span>
<span className="text-sm text-neutral-400">Invest base currency</span>
</label>
</div>

<div className="sticky bottom-0 left-0 right-0 -mx-4 sm:-mx-6 pt-4 mt-6">
<div className="pointer-events-none h-6 -mb-6 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
<div className="px-4 sm:px-6 pb-2">
<div className="flex gap-2">
<button className="w-1/3 h-12 rounded-lg border border-white/10 bg-neutral-800/70 text-neutral-300 hover:bg-neutral-800 active:bg-neutral-800/80 focus:outline-none focus:ring-2 focus:ring-white/20 flex items-center justify-center gap-2" id="previewBtn">
<i className="w-4 h-4" data-lucide="eye"></i>
                  Preview
                </button>
<button className="flex-1 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/15 active:bg-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-white/20 text-emerald-300 font-medium tracking-tight flex items-center justify-center gap-2 transition" id="createBtn">
<i className="w-4 h-4" data-lucide="sparkle"></i>
                  Create
                </button>
</div>
</div>
</div>

<div className="hidden absolute z-50 w-64 rounded-lg border border-white/10 bg-neutral-900 shadow-xl p-2" id="tokenPopover">
<div className="px-2 py-1">
<p className="text-xs text-neutral-500 tracking-tight">Choose token</p>
</div>
<div className="max-h-64 overflow-auto" id="tokenItems">

</div>
</div>

<div className="hidden fixed inset-x-0 mx-auto bottom-6 w-[92%] max-w-[420px] sm:max-w-[560px] rounded-xl border border-white/10 bg-neutral-900/95 shadow-xl p-3 flex items-center gap-3" id="toast">
<i className="w-5 h-5 text-emerald-300" data-lucide="check-circle-2"></i>
<p className="text-sm text-neutral-200">Portfolio created successfully.</p>
</div>
</div>
</section>
</main>


    </>
  );
}
